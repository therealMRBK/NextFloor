import assert from "node:assert/strict";
import { test } from "node:test";
import { findConsumers } from "../energy.ts";
import { emptyBuilding, newFloor, type Building, type Furniture } from "../model.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";
import { ENERGY_COLORS, energyConnections, energyPicture, houseHub, routed } from "./energy-flow.ts";

const sensor = (entity_id: string, state: string): HassEntity => ({ entity_id, state, attributes: { device_class: "power" } });
const hassOf = (list: HassEntity[]) => ({ states: Object.fromEntries(list.map((s) => [s.entity_id, s])), entities: {} }) as unknown as HomeAssistant;
const meter = (id: string, x: number, extra: Partial<Furniture> = {}): Furniture => ({ id, type: "meter", x, z: 1, rotation: 0, w: 0.5, d: 0.2, h: 1, variant: null, entity: null, power: `sensor.${id}`, ...extra });

// ground floor with the main meter and both sub-meters; a consumer on each floor
function flats(advanced: boolean): Building {
  const b = emptyBuilding();
  b.floors = ["g", "og", "dg"].map((id, i) => {
    const f = newFloor(id, id, i * 3);
    f.rooms = [{ id: `r${id}`, name: id, area_id: null, points: [[0, 0], [6, 0], [6, 4], [0, 4]], floor_material: "wood" }];
    f.placements = [{ entity_id: `sensor.use_${id}`, x: 4, z: 3, y: null, mount: null }];
    return f;
  });
  b.floors[0].furniture = [meter("og", 2, { parent_meter: "main", meter_floors: ["og"] }), meter("main", 1), meter("dg", 3, { parent_meter: "main", meter_floors: ["dg"] })];
  b.energy.advanced = advanced;
  return b;
}

const hass = hassOf([sensor("sensor.main", "3000"), sensor("sensor.og", "900"), sensor("sensor.dg", "700"), sensor("sensor.use_g", "200"), sensor("sensor.use_og", "300"), sensor("sensor.use_dg", "400")]);
const from = (pic: ReturnType<typeof energyPicture>, key: string) => pic.arcs.find((a) => a.key === key)?.from;

test("with the advanced energy mode off the first meter is the hub and feeds everything", () => {
  const b = flats(false);
  const plain = flats(false);
  for (const f of plain.floors[0].furniture) (delete f.parent_meter, delete f.meter_floors);
  assert.deepEqual(energyPicture(hass, b), energyPicture(hass, plain));
  assert.equal(houseHub(b)?.x, 2);
  assert.ok(!energyPicture(hass, b).arcs.some((a) => a.key.startsWith("meter:")));
});

test("sub-meters draw from the main meter and feed the consumers on their floors", () => {
  const pic = energyPicture(hass, flats(true));
  assert.equal(houseHub(flats(true))?.x, 1);
  const og = pic.arcs.find((a) => a.key === "meter:og")!;
  assert.deepEqual([og.from.x, og.to.x, og.power], [1, 2, 900]);
  assert.equal(from(pic, "use:sensor.use_g")?.x, 1, "unassigned floors stay on the main meter");
  assert.equal(from(pic, "use:sensor.use_og")?.x, 2);
  assert.equal(from(pic, "use:sensor.use_dg")?.x, 3);
  assert.equal(pic.summary.rest, 3000 - 900 - 700);
  // the 3D view adds the meters' own sensors as consumers: a sub-meter gets its cable from its parent only
  const b = flats(true);
  const withMeter = [...findConsumers(hass, b), { id: "og", powerEntity: "sensor.og", floorId: "g", x: 2, z: 1, power: 900 }];
  assert.ok(!energyPicture(hass, b, withMeter).arcs.some((a) => a.key === "use:og"));
});

// A multi-family house: roof plant at the main meter, a balcony plant behind the upper flat's meter (see energy.test.ts)
function withPlants(advanced: boolean): Building {
  const b = flats(advanced);
  const at = (id: string, type: string, x: number, extra: Partial<Furniture> = {}) => ({ ...meter(id, x, extra), type });
  b.floors[0].furniture.push(at("roof", "inverter", 5));
  b.floors[1].furniture = [at("balcony", "inverter", 4, { parent_meter: "og" })];
  return b;
}
const plantHass = hassOf([sensor("sensor.main", "-1000"), sensor("sensor.roof", "1000"), sensor("sensor.og", "-300"), sensor("sensor.dg", "200"), sensor("sensor.balcony", "800"), sensor("sensor.use_g", "100"), sensor("sensor.use_og", "500"), sensor("sensor.use_dg", "200")]);

test("a balcony plant feeds its flat first and only the surplus flows back to the main meter", () => {
  const pic = energyPicture(plantHass, withPlants(true));
  const arc = (key: string) => pic.arcs.find((a) => a.key === key)!;
  assert.deepEqual([arc("inverter:balcony").from.floorId, arc("inverter:balcony").to.x, arc("inverter:balcony").power], ["og", 2, 800]);
  assert.deepEqual([arc("meter:og").from.x, arc("meter:og").to.x, arc("meter:og").power], [2, 1, 300]);
  assert.deepEqual(arc("meter:og").color, ENERGY_COLORS.solar);
  assert.deepEqual([arc("meter:dg").from.x, arc("meter:dg").to.x, arc("meter:dg").power], [1, 3, 200]);
  assert.deepEqual([arc("inverter").from.x, arc("inverter").power], [5, 1000], "the roof plant feeds the house");
  assert.deepEqual([arc("grid").from.x, arc("grid").power], [1, 1000], "the rest goes to the grid");
  assert.equal(arc("use:sensor.use_og").from.x, 2);
  assert.equal(pic.summary.rest, 100);
});

test("with the mode off a balcony plant's meter is ignored", () => {
  const plain = withPlants(false);
  delete plain.floors[1].furniture[0].parent_meter;
  for (const f of plain.floors[0].furniture) (delete f.parent_meter, delete f.meter_floors);
  assert.deepEqual(energyPicture(plantHass, withPlants(false)), energyPicture(plantHass, plain));
});

test("a connection with a cable route follows it, walked from the end nearer to where the power starts", () => {
  const b = flats(true);
  b.floors[0].furniture.push({ ...meter("bat", 5), type: "home_battery", power: "sensor.bat" });
  assert.ok(energyConnections(b).some((c) => c.key === "battery"));
  assert.ok(energyConnections(b).some((c) => c.key === "meter:og"));
  // the cable runs from the battery (x 5) along the wall to the hub (x 1), drawn starting at the battery's end
  b.energy.routes = [{ key: "battery", points: [{ floor_id: "g", x: 5, z: 4 }, { floor_id: "g", x: 1, z: 4 }], cable: true }];
  const hub = houseHub(b)!;
  const battery = { floorId: "g", x: 5, z: 1, y: 0.8 };
  const discharging = routed(b, { key: "battery", from: battery, to: hub, power: 500, color: ENERGY_COLORS.battery });
  assert.deepEqual(discharging.via?.map((p) => p.x), [5, 1]);
  assert.equal(discharging.cable, true);
  const charging = routed(b, { key: "battery", from: hub, to: battery, power: 500, color: ENERGY_COLORS.battery });
  assert.deepEqual(charging.via?.map((p) => p.x), [1, 5], "charging walks the same cable the other way");
  // other connections keep their arc
  assert.equal(routed(b, { key: "grid", from: hub, to: battery, power: 1, color: ENERGY_COLORS.import }).via, undefined);
});
