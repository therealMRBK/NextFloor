import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Furniture } from "../model.ts";
import { entity, hassOf } from "./fixtures.ts";
import { furnitureShown, hiddenFurniture, withoutHidden } from "./visibility.ts";

const piece = (id: string, show_when?: Furniture["show_when"]): Furniture => ({ id, type: "plant", x: 0, z: 0, rotation: 0, w: 1, d: 1, h: 1, variant: null, show_when });

test("a piece shows while its entity is on, or in the state asked for", () => {
  const hass = hassOf([entity("input_boolean.xmas", "on"), entity("input_select.season", "Winter"), entity("switch.off", "off"), entity("sensor.gone", "unavailable")]);
  assert.equal(furnitureShown(hass, piece("a")), true, "no condition: always");
  assert.equal(furnitureShown(hass, piece("a", { entity: "input_boolean.xmas" })), true);
  assert.equal(furnitureShown(hass, piece("a", { entity: "switch.off" })), false);
  assert.equal(furnitureShown(hass, piece("a", { entity: "switch.off", invert: true })), true, "shown while off");
  assert.equal(furnitureShown(hass, piece("a", { entity: "input_select.season", state: "summer, winter" })), true, "one of several states, any case");
  assert.equal(furnitureShown(hass, piece("a", { entity: "input_select.season", state: "summer" })), false);
  assert.equal(furnitureShown(hass, piece("a", { entity: "sensor.gone" })), true, "an unavailable entity hides nothing");
  assert.equal(furnitureShown(hass, piece("a", { entity: "sensor.missing" })), true);
});

test("hidden pieces are left out of the building, which stays the same object without any", () => {
  const b = emptyBuilding();
  const floor = newFloor("f", "F", 0);
  floor.furniture = [piece("tree", { entity: "switch.off" }), piece("sofa")];
  b.floors = [floor];
  const hass = hassOf([entity("switch.off", "off")]);
  const hidden = hiddenFurniture(hass, b);
  assert.deepEqual(hidden, ["tree"]);
  assert.deepEqual(withoutHidden(b, hidden).floors[0].furniture.map((f) => f.id), ["sofa"]);
  assert.equal(withoutHidden(b, []), b);
  assert.equal(b.floors[0].furniture.length, 2, "the plan itself keeps the piece");
});
