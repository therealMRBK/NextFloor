import assert from "node:assert/strict";
import { test } from "node:test";
import type { Furniture } from "../../../model.ts";
import { box, entity, floorWith, hassOf } from "../../../entities/fixtures.ts";
import { lampLit } from "./items.ts";

const lamp = (extra: Partial<Furniture> = {}): Furniture => ({ id: "l", type: "lamp_table", x: 1, z: 1, rotation: 0, w: 0.3, d: 0.3, h: 0.5, variant: null, entity: null, power: null, ...extra });
const room = box("r", 0, 0, 4, 3, "area");

test("a lamp lights up in the plan with a light found in its room, not only one set by hand (#111)", () => {
  const on = hassOf([entity("light.table", "on")], { "light.table": { area_id: "area" } });
  assert.equal(lampLit(on, floorWith([room], { furniture: [lamp()] }), lamp()), true);
  const off = hassOf([entity("light.table", "off")], { "light.table": { area_id: "area" } });
  assert.equal(lampLit(off, floorWith([room], { furniture: [lamp()] }), lamp()), false);
});

test("a lamp lights up with a further light while its main light is off, and 'none' stays dark", () => {
  const hass = hassOf([entity("light.main", "off"), entity("light.night", "on")]);
  const piece = lamp({ entity: "light.main", extra_lights: ["light.night"] });
  assert.equal(lampLit(hass, floorWith([room], { furniture: [piece] }), piece), true);
  const none = lamp({ entity: "none" });
  assert.equal(lampLit(hassOf([entity("light.table", "on")], { "light.table": { area_id: "area" } }), floorWith([room], { furniture: [none] }), none), false);
});
