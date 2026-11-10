import assert from "node:assert/strict";
import { test } from "node:test";
import { canHangOff, deviceMeter, deviceSensors, subMeterLabel, energySummary, findConsumers, meterParent, meterPosition, powerSensorFor, proposeEnergySensors, readPower, subMeterIds, suggestGridSpot } from "./energy.ts";
import { emptyBuilding, newFloor, type Building, type Furniture } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

const sensor = (entity_id: string, state: string, attributes: Record<string, unknown> = {}): HassEntity => ({ entity_id, state, attributes });
const hassOf = (list: HassEntity[], entities: Record<string, Record<string, unknown>> = {}) =>
  ({ states: Object.fromEntries(list.map((s) => [s.entity_id, s])), entities: Object.fromEntries(Object.entries(entities).map(([id, e]) => [id, { entity_id: id, ...e }])) }) as unknown as HomeAssistant;
const piece = (type: string, extra: Partial<Furniture> = {}): Furniture => ({ id: type + Math.random(), type, x: 1, z: 1, rotation: 0, w: 1, d: 1, h: 1, variant: null, entity: null, power: null, ...extra });
const house = (...pieces: Furniture[]): Building => {
  const b = emptyBuilding();
  const f = newFloor("g", "Ground", 0);
  f.furniture = pieces;
  f.rooms = [{ id: "r", name: "R", area_id: null, points: [[0, 0], [6, 0], [6, 4], [0, 4]], floor_material: "wood" }];
  b.floors = [f];
  return b;
};

test("power is read in watts whatever the unit, and can be flipped", () => {
  assert.equal(readPower(sensor("sensor.a", "1.5", { unit_of_measurement: "kW" })), 1500);
  assert.equal(readPower(sensor("sensor.a", "2", { unit_of_measurement: "MW" })), 2e6);
  assert.equal(readPower(sensor("sensor.a", "300")), 300);
  assert.equal(readPower(sensor("sensor.a", "300"), true), -300);
  assert.equal(readPower(sensor("sensor.a", "unavailable")), null);
  assert.equal(readPower(undefined), null);
});

test("energy devices in the plan are collected without duplicates", () => {
  const b = house(
    piece("meter", { power: "sensor.grid", export: "sensor.feed" }),
    piece("inverter", { power: "sensor.pv1" }),
    piece("inverter", { power: "sensor.pv1" }),
    piece("inverter", { power: "sensor.pv2" }),
    piece("home_battery", { power: "sensor.bat", charge: "sensor.bat_in", soc: "sensor.soc" }),
  );
  const d = deviceSensors(b);
  assert.deepEqual([d.grid, d.gridExport, d.solar, d.soc], ["sensor.grid", "sensor.feed", ["sensor.pv1", "sensor.pv2"], ["sensor.soc"]]);
  assert.deepEqual(d.batteries, [{ power: "sensor.bat", charge: "sensor.bat_in" }]);
});

test("the meter cabinet in the plan is where cables meet, else the configured spot", () => {
  const b = house(piece("meter", { x: 2, z: 3 }));
  assert.deepEqual(meterPosition(b), { floor_id: "g", x: 2, z: 3 });
  const none = house();
  none.energy.meter = { floor_id: "g", x: 5, z: 5 };
  assert.deepEqual(meterPosition(none), { floor_id: "g", x: 5, z: 5 });
});

test("the summary balances grid, solar and battery into the house's consumption", () => {
  const b = house();
  b.energy = { ...b.energy, grid: "sensor.grid", solar: "sensor.pv", battery: "sensor.bat", battery_soc: "sensor.soc" };
  const hass = hassOf([sensor("sensor.grid", "-500"), sensor("sensor.pv", "2000"), sensor("sensor.bat", "-300"), sensor("sensor.soc", "64")]);
  const s = energySummary(hass, b, []);
  assert.deepEqual([s.grid, s.solar, s.battery, s.soc], [-500, 2000, -300, 64]);
  assert.equal(s.consumption, 1200); // -500 + 2000 - 300
});

test("a consumption sensor wins over the balance, and the consumers are the last resort", () => {
  const b = house();
  b.energy = { ...b.energy, consumption: "sensor.use" };
  assert.equal(energySummary(hassOf([sensor("sensor.use", "850")]), b, []).consumption, 850);
  const plain = house();
  const consumers = [{ id: "a", powerEntity: "p", floorId: "g", x: 0, z: 0, power: 40 }, { id: "b", powerEntity: "q", floorId: "g", x: 0, z: 0, power: 60 }];
  assert.equal(energySummary(hassOf([]), plain, consumers).consumption, 100);
  assert.equal(energySummary(hassOf([]), plain, []).consumption, null);
});

test("devices placed in the plan supply the numbers when no balance sensor is set", () => {
  const b = house(piece("meter", { power: "sensor.in", export: "sensor.out" }), piece("inverter", { power: "sensor.pv" }), piece("home_battery", { power: "sensor.dis", charge: "sensor.chg" }));
  const hass = hassOf([sensor("sensor.in", "100"), sensor("sensor.out", "700"), sensor("sensor.pv", "1500"), sensor("sensor.dis", "0"), sensor("sensor.chg", "400")]);
  const s = energySummary(hass, b, []);
  assert.equal(s.grid, -600);
  assert.equal(s.solar, 1500);
  assert.equal(s.battery, -400);
});

test("a flipped grid sensor changes the sign", () => {
  const b = house();
  b.energy = { ...b.energy, grid: "sensor.grid", grid_invert: true };
  assert.equal(energySummary(hassOf([sensor("sensor.grid", "800")]), b, []).grid, -800);
});

test("tariff and charge level are optional", () => {
  const b = house();
  b.energy = { ...b.energy, tariff: "sensor.price" };
  const s = energySummary(hassOf([sensor("sensor.price", "0.31", { unit_of_measurement: "€/kWh" })]), b, []);
  assert.deepEqual(s.tariff, { value: 0.31, unit: "€/kWh" });
  assert.equal(s.soc, null);
});

test("a placed entity's power sensor is itself, or one of its device; hubs only give same-area sensors", () => {
  const hass = hassOf(
    [sensor("light.a", "on"), sensor("sensor.a_power", "12", { device_class: "power" }), sensor("sensor.hub_power_k", "5", { device_class: "power" }), sensor("sensor.hub_power_b", "7", { device_class: "power" }), sensor("light.k", "on")],
    {
      "light.a": { device_id: "d1" },
      "sensor.a_power": { device_id: "d1" },
      "light.k": { device_id: "hub", area_id: "kitchen" },
      "sensor.hub_power_k": { device_id: "hub", area_id: "kitchen" },
      "sensor.hub_power_b": { device_id: "hub", area_id: "bath" },
    },
  );
  assert.equal(powerSensorFor(hass, "sensor.a_power"), "sensor.a_power");
  assert.equal(powerSensorFor(hass, "light.a"), "sensor.a_power");
  assert.equal(powerSensorFor(hass, "light.nowhere"), null);
  assert.ok(["sensor.hub_power_k", null].includes(powerSensorFor(hass, "light.k")));
});

test("consumers skip the balance sensors and count a shared sensor once", () => {
  const b = house();
  b.energy = { ...b.energy, grid: "sensor.grid" };
  b.floors[0].placements = [
    { entity_id: "sensor.grid", x: 0, z: 0, y: null, mount: null },
    { entity_id: "sensor.oven", x: 1, z: 1, y: null, mount: null },
    { entity_id: "sensor.oven", x: 2, z: 2, y: null, mount: null },
  ];
  const hass = hassOf([sensor("sensor.grid", "100", { device_class: "power" }), sensor("sensor.oven", "-5", { device_class: "power" })]);
  const consumers = findConsumers(hass, b);
  assert.equal(consumers.length, 1);
  assert.equal(consumers[0].power, 0, "negative readings count as zero");
});

test("proposals follow the energy dashboard: the device's total power sensor, not a phase", () => {
  const hass = hassOf(
    [sensor("sensor.meter_energy", "1"), sensor("sensor.meter_power_l1", "1", { device_class: "power" }), sensor("sensor.meter_power", "3", { device_class: "power" })],
    { "sensor.meter_energy": { device_id: "m" }, "sensor.meter_power_l1": { device_id: "m" }, "sensor.meter_power": { device_id: "m" } },
  );
  const proposal = proposeEnergySensors(hass, { energy_sources: [{ type: "grid", flow_from: [{ stat_energy_from: "sensor.meter_energy" }] }] });
  assert.equal(proposal.grid, "sensor.meter_power");
  assert.deepEqual(proposeEnergySensors(hass, {}), {});
});

test("the grid connection is suggested outside the wall nearest to the meter", () => {
  const b = house(piece("meter", { x: 5.8, z: 2 }));
  const spot = suggestGridSpot(b)!;
  assert.equal(spot.floorId, "g");
  assert.ok(spot.x > 6, "outside the east wall");
  assert.ok(Math.abs(spot.z - 2) < 0.5);
  assert.equal(suggestGridSpot(house()), null);
});

// a house with one main meter and a sub-meter for each flat (upper floor, attic)
const flats = (advanced: boolean) => {
  const b = house(
    piece("meter", { id: "main", x: 1, z: 1, power: "sensor.main" }),
    piece("meter", { id: "og", x: 2, z: 1, power: "sensor.og", parent_meter: "main", meter_floors: ["og"] }),
    piece("meter", { id: "dg", x: 3, z: 1, power: "sensor.dg", parent_meter: "main", meter_floors: ["dg"], meter_invert: true }),
  );
  b.energy.advanced = advanced;
  return b;
};

test("with the advanced energy mode off, sub-meter fields change nothing", () => {
  const plain = house(piece("meter", { id: "main", x: 1, z: 1, power: "sensor.main" }), piece("meter", { id: "og", x: 2, z: 1, power: "sensor.og" }), piece("meter", { id: "dg", x: 3, z: 1, power: "sensor.dg" }));
  const hass = hassOf([sensor("sensor.main", "3000"), sensor("sensor.og", "800"), sensor("sensor.dg", "-600")]);
  assert.deepEqual(deviceSensors(flats(false)), deviceSensors(plain));
  assert.deepEqual(energySummary(hass, flats(false), []), energySummary(hass, plain, []));
  assert.deepEqual(meterPosition(flats(false)), meterPosition(plain));
  assert.equal(subMeterIds(flats(false)).size, 0);
  assert.equal(deviceSensors(plain).subMeters, undefined);
});

test("sub-meters hang off the main meter, which stays the grid", () => {
  const b = flats(true);
  const d = deviceSensors(b);
  assert.equal(d.grid, "sensor.main");
  assert.deepEqual(d.subMeters, [
    { id: "og", parent: "main", power: "sensor.og", invert: false, floors: ["og"], solar: [], batteries: [] },
    { id: "dg", parent: "main", power: "sensor.dg", invert: true, floors: ["dg"], solar: [], batteries: [] },
  ]);
  // the first meter in the plan may be a sub-meter: the main meter is the first one without a parent
  b.floors[0].furniture.reverse();
  assert.equal(deviceSensors(b).grid, "sensor.main");
  assert.deepEqual(meterPosition(b), { floor_id: "g", x: 1, z: 1 });
});

test("a meter cannot hang off itself or a meter below it; a loop counts as no parent", () => {
  const b = flats(true);
  const [main, og, dg] = b.floors[0].furniture;
  dg.parent_meter = "og"; // a cascade: main → og → dg
  assert.equal(canHangOff(b, main, og), false, "og hangs off main");
  assert.equal(canHangOff(b, main, dg), false, "dg hangs off og, which hangs off main");
  assert.equal(canHangOff(b, og, og), false);
  assert.equal(canHangOff(b, dg, main), true);
  assert.equal(meterParent(b, dg), "og");
  og.parent_meter = "dg"; // stored by hand: og ↔ dg
  assert.equal(meterParent(b, og), null);
  assert.equal(meterParent(b, dg), null);
  main.parent_meter = "main";
  assert.equal(meterParent(b, main), null);
  og.parent_meter = "gone";
  assert.equal(meterParent(b, og), null);
});

test("the rest is the consumption minus the meters directly below the main meter, never below 0", () => {
  const b = flats(true);
  const s = energySummary(hassOf([sensor("sensor.main", "2000"), sensor("sensor.og", "800"), sensor("sensor.dg", "-600")]), b, []);
  assert.deepEqual(s.subMeters, [
    { id: "og", parent: "main", power: 800, solar: 0, battery: 0, use: 800, unmetered: 800 },
    { id: "dg", parent: "main", power: 600, solar: 0, battery: 0, use: 600, unmetered: 600 },
  ]);
  assert.equal(s.rest, 600);
  // a meter below a sub-meter is already inside that sub-meter's reading
  b.floors[0].furniture[2].parent_meter = "og";
  assert.equal(energySummary(hassOf([sensor("sensor.main", "2000"), sensor("sensor.og", "800"), sensor("sensor.dg", "-600")]), b, []).rest, 1200);
  // solar behind a sub-meter: the main meter counts less than the flats draw
  b.floors[0].furniture[2].parent_meter = "main";
  assert.equal(energySummary(hassOf([sensor("sensor.main", "500"), sensor("sensor.og", "800"), sensor("sensor.dg", "-600")]), b, []).rest, 0);
  assert.equal(energySummary(hassOf([]), b, []).rest, null);
});

// A multi-family house: main meter in the basement with the roof plant, the upper flat (OG) with a balcony plant and a
// battery behind its own meter, the attic flat (DG) without. OG uses 500 W, DG 200 W, the common parts 100 W.
const withPlants = (advanced: boolean) => {
  const b = house(
    piece("meter", { id: "main", power: "sensor.main" }),
    piece("inverter", { id: "roof", power: "sensor.roof" }),
    piece("meter", { id: "og", power: "sensor.og", parent_meter: "main", meter_floors: ["og"] }),
    piece("meter", { id: "dg", power: "sensor.dg", parent_meter: "main", meter_floors: ["dg"] }),
    piece("inverter", { id: "balcony", power: "sensor.balcony", parent_meter: "og" }),
    piece("home_battery", { id: "box", power: "sensor.box", parent_meter: "og" }),
  );
  b.energy.advanced = advanced;
  return b;
};
// 1800 W of sun for 800 W of use: 1000 W go to the grid; the OG meter runs backwards by 300 W
const plantHass = (battery = "0") => hassOf([sensor("sensor.main", "-1000"), sensor("sensor.roof", "1000"), sensor("sensor.og", "-300"), sensor("sensor.dg", "200"), sensor("sensor.balcony", "800"), sensor("sensor.box", battery)]);

test("a balcony plant behind a flat's meter counts towards that flat", () => {
  const s = energySummary(plantHass(), withPlants(true), []);
  assert.deepEqual([s.grid, s.solar, s.consumption], [-1000, 1800, 800]);
  assert.deepEqual(s.subMeters, [
    { id: "og", parent: "main", power: -300, solar: 800, battery: 0, use: 500, unmetered: 500 },
    { id: "dg", parent: "main", power: 200, solar: 0, battery: 0, use: 200, unmetered: 200 },
  ]);
  assert.equal(s.rest, 100);
  // the flat's battery charges with 200 W of the surplus: the meter feeds back only 100 W, the use stays 500 W
  const charging = energySummary(hassOf([...Object.values(plantHass("-200").states)].map((st) => (st.entity_id === "sensor.og" ? sensor("sensor.og", "-100") : st.entity_id === "sensor.main" ? sensor("sensor.main", "-800") : st))), withPlants(true), []);
  assert.equal(charging.subMeters?.[0].use, 500);
  assert.equal(charging.rest, 100);
});

test("an inverter whose meter is gone, or is the main meter, works into the house", () => {
  const b = withPlants(true);
  const balcony = b.floors[0].furniture[4];
  assert.equal(deviceMeter(b, balcony), "og");
  for (const parent of ["gone", "main", null]) {
    balcony.parent_meter = parent;
    assert.equal(deviceMeter(b, balcony), null);
    const s = energySummary(plantHass(), b, []);
    assert.deepEqual([s.subMeters?.[0].solar, s.subMeters?.[0].use, s.rest], [0, 0, 600]);
  }
});

test("with the advanced energy mode off, a meter chosen at an inverter or battery changes nothing", () => {
  const plain = withPlants(false);
  for (const f of plain.floors[0].furniture) delete f.parent_meter;
  assert.deepEqual(deviceSensors(withPlants(false)), deviceSensors(plain));
  assert.deepEqual(energySummary(plantHass("300"), withPlants(false), []), energySummary(plantHass("300"), plain, []));
  assert.equal(deviceMeter(withPlants(false), withPlants(false).floors[0].furniture[4]), null);
});

test("what a flat uses beyond its placed devices is shown, and placed devices go into no total", () => {
  const b = withPlants(true);
  const pc = [{ id: "switch.pc", powerEntity: "sensor.pc", floorId: "og", x: 1, z: 1, power: 50 }];
  // the balcony inverter's own sensor on the same floor is no consumer
  const inverter = [{ id: "sensor.balcony", powerEntity: "sensor.balcony", floorId: "og", x: 2, z: 2, power: 800 }];
  const before = energySummary(plantHass(), b, []);
  const after = energySummary(plantHass(), b, [...pc, ...inverter]);
  assert.deepEqual([after.subMeters?.[0].use, after.subMeters?.[0].unmetered], [500, 450]);
  assert.deepEqual(after.subMeters?.[1].unmetered, 200, "nothing placed in the attic: all of it unmetered");
  const totals = (s: typeof before) => [s.grid, s.solar, s.battery, s.consumption, s.rest, s.subMeters?.map((m) => m.use)];
  assert.deepEqual(totals(after), totals(before));
  // a flat using less than its devices report: 0, not below
  pc[0].power = 900;
  assert.equal(energySummary(plantHass(), b, pc).subMeters?.[0].unmetered, 0);
  // mode off: consumers change nothing beyond what they did before
  const off = withPlants(false);
  assert.deepEqual(energySummary(plantHass(), off, pc), energySummary(plantHass(), off, []));
});

test("the unmetered part shows on a sub-meter's label only when asked for", () => {
  const b = withPlants(true);
  const pc = [{ id: "switch.pc", powerEntity: "sensor.pc", floorId: "og", x: 1, z: 1, power: 50 }];
  const s = energySummary(plantHass(), b, pc);
  assert.equal(subMeterLabel(b, s, "og"), null, "off by default: the label shows the meter's reading");
  b.energy.show_unmetered = true;
  assert.deepEqual(subMeterLabel(b, s, "og"), { use: 500, unmetered: 450 });
  assert.deepEqual(subMeterLabel(b, s, "dg"), { use: 200, unmetered: null }, "nothing measured: only the use");
  assert.equal(subMeterLabel(b, s, "main"), null);
  const off = withPlants(false);
  off.energy.show_unmetered = true;
  assert.equal(subMeterLabel(off, energySummary(plantHass(), off, pc), "og"), null);
});

test("solar sensors that count production as negative can be flipped (the balance sensor and the inverters')", () => {
  const hass = hassOf([sensor("sensor.pv", "-2400"), sensor("sensor.grid", "-400")]);
  const b = house();
  b.energy = { ...b.energy, solar: "sensor.pv", grid: "sensor.grid" };
  assert.equal(energySummary(hass, b, []).solar, 0);
  b.energy.solar_invert = true;
  const s = energySummary(hass, b, []);
  assert.equal(s.solar, 2400);
  assert.equal(s.consumption, 2000);
  const viaDevice = house(piece("inverter", { power: "sensor.pv" }));
  viaDevice.energy.solar_invert = true;
  assert.equal(energySummary(hass, viaDevice, []).solar, 2400);
});

test("a charging battery lowers the house's consumption, a discharging one raises it (#135)", () => {
  const b = house();
  b.energy = { ...b.energy, solar: "sensor.pv", battery: "sensor.bat" };
  const charging = hassOf([sensor("sensor.pv", "679"), sensor("sensor.bat", "-30")]);
  assert.equal(energySummary(charging, b, []).consumption, 649);
  // the same battery with a sensor that counts charging as positive: wrong until its sign is flipped
  const reversed = hassOf([sensor("sensor.pv", "679"), sensor("sensor.bat", "30")]);
  assert.equal(energySummary(reversed, b, []).consumption, 709);
  b.energy.battery_invert = true;
  assert.equal(energySummary(reversed, b, []).consumption, 649);
});
