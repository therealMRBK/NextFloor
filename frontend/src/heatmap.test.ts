import assert from "node:assert/strict";
import { test } from "node:test";
import { box, entity, floorWith, hassOf } from "./entities/fixtures.ts";
import { HEAT_SCALES, heatColor, heatGradient, roomPower, roomValues, type HeatColorMode } from "./heatmap.ts";
import { emptyBuilding } from "./model.ts";

const modes = Object.keys(HEAT_SCALES) as HeatColorMode[];

test("values below the first stop and above the last one keep the end colours", () => {
  for (const mode of modes) {
    const { stops } = HEAT_SCALES[mode];
    assert.deepEqual(heatColor(mode, stops[0][0] - 100), stops[0][1]);
    assert.deepEqual(heatColor(mode, stops[stops.length - 1][0] + 100), stops[stops.length - 1][1]);
  }
});

test("a stop value gives exactly its colour, the middle between two stops the average", () => {
  for (const mode of modes) {
    const { stops } = HEAT_SCALES[mode];
    stops.forEach(([value, colour]) => heatColor(mode, value).forEach((c, i) => assert.ok(Math.abs(c - colour[i]) < 1e-9)));
    const [[v0, c0], [v1, c1]] = stops;
    heatColor(mode, (v0 + v1) / 2).forEach((c, i) => assert.ok(Math.abs(c - (c0[i] + c1[i]) / 2) < 1e-9));
  }
});

test("the stops of every scale rise strictly, so no division by zero can happen", () => {
  for (const mode of modes) {
    const values = HEAT_SCALES[mode].stops.map(([v]) => v);
    values.slice(1).forEach((v, i) => assert.ok(v > values[i], `${mode} at ${v}`));
  }
});

test("warm temperatures are redder than cold ones", () => {
  const cold = heatColor("temperature", 15);
  const hot = heatColor("temperature", 30);
  assert.ok(hot[0] > cold[0] && hot[2] < cold[2]);
});

test("the gradient lists every stop, from 0 % to 100 %", () => {
  for (const mode of modes) {
    const css = heatGradient(mode);
    assert.ok(css.startsWith("linear-gradient(90deg, rgb("));
    assert.equal(css.match(/rgb\(/g)?.length, HEAT_SCALES[mode].stops.length);
    assert.ok(css.includes(" 0%") && css.endsWith(" 100%)"));
  }
});

test("a room's power adds up the power sensors of its pins and furniture, the house's meters left out", () => {
  const hass = hassOf([
    entity("sensor.tv_power", "120", { device_class: "power", unit_of_measurement: "W" }),
    entity("sensor.heater", "1.5", { device_class: "power", unit_of_measurement: "kW" }),
    entity("sensor.grid", "900", { device_class: "power", unit_of_measurement: "W" }),
  ]);
  const room = box("w", 0, 0, 5, 4);
  const floor = {
    ...floorWith([room]),
    placements: [
      { entity_id: "sensor.heater", x: 1, z: 1, y: null, mount: null },
      { entity_id: "sensor.grid", x: 2, z: 1, y: null, mount: null },
      { entity_id: "sensor.tv_power", x: 9, z: 9, y: null, mount: null },
    ],
    furniture: [{ id: "tv", type: "tv", x: 3, z: 3, rotation: 0, w: 1, d: 0.1, h: 0.6, variant: null, power: "sensor.tv_power" }],
  };
  const b = { ...emptyBuilding(), floors: [floor] };
  b.energy = { ...b.energy, grid: "sensor.grid" };
  assert.equal(roomPower(hass, b, floor, room), 1620);
  assert.equal(roomValues(hass, b, "power").get("w"), 1620);
  assert.equal(roomPower(hass, b, floor, box("empty", 20, 20, 22, 22)), null);
});
