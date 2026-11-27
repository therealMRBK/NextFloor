import assert from "node:assert/strict";
import { test } from "node:test";
import type { Building } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import { deskHeight, deskHeightKey, withDeskHeights } from "./desk-height.ts";

const hass = (state: string, unit?: string) => ({ states: { "sensor.desk": { entity_id: "sensor.desk", state, attributes: unit ? { unit_of_measurement: unit } : {} } } }) as unknown as HomeAssistant;
const desk = { type: "desk", height_entity: "sensor.desk" };

test("a desk's height comes from its entity in cm, mm, m or inches", () => {
  assert.equal(deskHeight(hass("112", "cm"), desk), 1.12);
  assert.equal(deskHeight(hass("745", "mm"), desk), 0.75);
  assert.equal(deskHeight(hass("1.05", "m"), desk), 1.05);
  assert.equal(deskHeight(hass("40", "in"), desk), 1.02);
  // no unit: above 10 is centimetres
  assert.equal(deskHeight(hass("72"), desk), 0.72);
  assert.equal(deskHeight(hass("0,9"), desk), 0.9);
});

test("no value, no entity or no desk: no live height; out of range is clamped", () => {
  assert.equal(deskHeight(hass("unavailable", "cm"), desk), null);
  assert.equal(deskHeight(hass("112", "cm"), { type: "desk", height_entity: null }), null);
  assert.equal(deskHeight(hass("112", "cm"), { type: "table", height_entity: "sensor.desk" }), null);
  assert.equal(deskHeight(hass("400", "cm"), desk), 1.6);
});

test("the shown building takes the live height, the plan stays", () => {
  const b = { floors: [{ id: "f", furniture: [{ id: "d1", type: "desk", h: 0.75, height_entity: "sensor.desk" }, { id: "t", type: "table", h: 0.75 }] }] } as unknown as Building;
  const shown = withDeskHeights(hass("118", "cm"), b);
  assert.equal(shown.floors[0].furniture[0].h, 1.18);
  assert.equal(shown.floors[0].furniture[1], b.floors[0].furniture[1]);
  assert.equal(b.floors[0].furniture[0].h, 0.75);
  assert.deepEqual(deskHeightKey(hass("118", "cm"), b), ["desk:d1=1.18"]);
  // at the plan's own height nothing changes
  assert.equal(withDeskHeights(hass("75", "cm"), b), b);
});
