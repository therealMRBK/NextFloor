import assert from "node:assert/strict";
import { test } from "node:test";
import { box, floorWith } from "../../entities/fixtures.ts";
import type { Building, Furniture } from "../../model.ts";
import { ownTaps } from "./own-taps.ts";

const item = (id: string, extra: Partial<Furniture> = {}): Furniture => ({ id, type: "meter", x: 1, z: 1, rotation: 0, w: 0.4, d: 0.15, h: 0.5, variant: null, ...extra });
const house = (furniture: Furniture[]): Building =>
  ({ version: 1, floors: [floorWith([box("r", 0, 0, 5, 5)], { id: "g", furniture })], settings: {}, energy: {}, presence: [] }) as unknown as Building;
const go = { action: "navigate", target: "/energy", data: null } as Furniture["tap"];

test("an item with its own tap keeps its pin, and the pin runs the action", () => {
  const b = house([item("meter", { tap: go }), item("plain")]);
  const { pins, bare } = ownTaps(b, [{ id: "sensor.grid_power", furnitureId: "meter" }, { id: "sensor.other", furnitureId: "plain" }, { id: "light.placed" }]);
  assert.deepEqual([...pins], [["sensor.grid_power", "meter"]]);
  assert.deepEqual(bare, []);
});

test("every pin of the item runs the action (a ceiling fan has two)", () => {
  const b = house([item("fan", { type: "ceiling_fan", tap: go })]);
  const { pins } = ownTaps(b, [{ id: "light.fan_light", furnitureId: "fan" }, { id: "fan.fan", furnitureId: "fan" }]);
  assert.deepEqual([...pins.keys()], ["light.fan_light", "fan.fan"]);
});

test("an item without a pin of its own gets a plain one, an action left empty counts as none", () => {
  const b = house([item("bowl", { type: "bowl", tap: go }), item("blank", { tap: { action: "" as never, target: null, data: null } })]);
  const { pins, bare } = ownTaps(b, []);
  assert.equal(pins.size, 0);
  assert.deepEqual(bare.map(({ floor, item }) => [floor.id, item.id]), [["g", "bowl"]]);
});
