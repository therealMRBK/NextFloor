import assert from "node:assert/strict";
import { test } from "node:test";
import { box, entity, floorWith, hassOf } from "../../entities/fixtures.ts";
import type { FurnitureLinks } from "../../devices.ts";
import type { Furniture, Placement } from "../../model.ts";
import { roomToggleLights, roomToggleMode } from "./room-toggle.ts";

const hass = hassOf([entity("light.ceiling", "off"), entity("light.coffee_plug", "on"), entity("light.lamp", "off")], {
  "light.ceiling": { area_id: "kitchen" },
  "light.coffee_plug": { area_id: "kitchen" },
});
const room = box("k", 0, 0, 4, 4, "kitchen");
const pin = { entity_id: "light.ceiling", x: 1, z: 1 } as Placement;
const lamp = { id: "f1", type: "lamp_ceiling", x: 2, z: 2 } as Furniture;
const floor = floorWith([room], { placements: [pin], furniture: [lamp] });
const links = new Map([["f1", { entity: "light.lamp" } as FurnitureLinks]]);

test("the card option wins, auto follows the plan, the default takes the whole area", () => {
  assert.equal(roomToggleMode(undefined, undefined), "area");
  assert.equal(roomToggleMode("off", "auto"), "off");
  assert.equal(roomToggleMode("off", "plan"), "plan");
  assert.equal(roomToggleMode(null, "off"), "off");
});

test("area mode adds the area's lights, plan mode only the placed lamps, off nothing", () => {
  assert.deepEqual(roomToggleLights(hass, floor, room, links, new Set(), "area").sort(), ["light.ceiling", "light.coffee_plug", "light.lamp"]);
  assert.deepEqual(roomToggleLights(hass, floor, room, links, new Set(), "plan").sort(), ["light.ceiling", "light.lamp"]);
  assert.deepEqual(roomToggleLights(hass, floor, room, links, new Set(), "off"), []);
});

test("devices that ask first stay out", () => {
  assert.deepEqual(roomToggleLights(hass, floor, room, links, new Set(["light.lamp"]), "plan"), ["light.ceiling"]);
});
