import assert from "node:assert/strict";
import { test } from "node:test";
import { fromCelsius, tempUnit, toCelsius } from "./devices.ts";
import { heatColor, roomValues } from "./heatmap.ts";
import { emptyBuilding, newFloor } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

test("heat colours: cold is blue, warm is red, values in between are mixed", () => {
  assert.deepEqual(heatColor("temperature", 10), [0.24, 0.48, 1]);
  assert.deepEqual(heatColor("temperature", 30), [1, 0.32, 0.2]);
  const mid = heatColor("temperature", 21.75);
  assert.ok(mid[0] > 0.2 && mid[0] < 1 && mid[1] > 0.75);
});

test("room values are the average of the room's sensors of that kind", () => {
  const b = emptyBuilding();
  b.floors = [{ ...newFloor("eg", "EG", 0), rooms: [{ id: "r", name: "R", area_id: "wohnen", points: [[0, 0], [1, 0], [1, 1]], floor_material: "wood" }] }];
  const st = (id: string, state: string, dc: string) => ({ entity_id: id, state, attributes: { device_class: dc } });
  const hass = {
    language: "de",
    entities: {
      "sensor.a": { entity_id: "sensor.a", area_id: "wohnen" },
      "sensor.b": { entity_id: "sensor.b", area_id: "wohnen" },
      "sensor.h": { entity_id: "sensor.h", area_id: "wohnen" },
    },
    states: { "sensor.a": st("sensor.a", "20", "temperature"), "sensor.b": st("sensor.b", "22", "temperature"), "sensor.h": st("sensor.h", "55", "humidity") },
  } as unknown as HomeAssistant;
  assert.equal(roomValues(hass, b, "temperature").get("r"), 21);
  assert.equal(roomValues(hass, b, "humidity").get("r"), 55);
  assert.equal(roomValues(hass, b, "co2").size, 0);
});

test("temperatures in °F are coloured as °C and shown in Home Assistant's unit", () => {
  const b = emptyBuilding();
  b.floors = [{ ...newFloor("eg", "EG", 0), rooms: [{ id: "r", name: "R", area_id: "wohnen", points: [[0, 0], [1, 0], [1, 1]], floor_material: "wood" }] }];
  const hass = {
    language: "en",
    config: { unit_system: { temperature: "°F" } },
    entities: { "sensor.a": { entity_id: "sensor.a", area_id: "wohnen" } },
    states: { "sensor.a": { entity_id: "sensor.a", state: "71.6", attributes: { device_class: "temperature", unit_of_measurement: "°F" } } },
  } as unknown as HomeAssistant;
  assert.ok(Math.abs(roomValues(hass, b, "temperature").get("r")! - 22) < 1e-9);
  assert.equal(tempUnit(hass), "°F");
  assert.ok(Math.abs(fromCelsius(hass, 22) - 71.6) < 1e-9);
  assert.equal(toCelsius(295.15, "K").toFixed(2), "22.00");
});
