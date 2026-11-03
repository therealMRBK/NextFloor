import assert from "node:assert/strict";
import { test } from "node:test";
import { box, entity, floorWith, hassOf, opening } from "../../../entities/fixtures.ts";
import { emptyBuilding } from "../../../model.ts";
import { checkPlan, roomsOverlap } from "./plan-check.ts";

test("rooms that only share a wall do not overlap, rooms on top of each other do", () => {
  assert.equal(roomsOverlap(box("a", 0, 0, 4, 3), box("b", 4, 0, 8, 3)), false);
  assert.equal(roomsOverlap(box("a", 0, 0, 4, 3), box("b", 3, 0, 8, 3)), true);
  assert.equal(roomsOverlap(box("a", 0, 0, 4, 3), box("b", 1, 1, 2, 2)), true);
});

test("the plan check finds rooms without an area, overlapping rooms, unplaced devices and gone entities", () => {
  const hass = hassOf([entity("light.wohnen", "on"), entity("switch.wohnen_tv", "off")], { "light.wohnen": { area_id: "wohnen" }, "switch.wohnen_tv": { area_id: "wohnen" } }, {
    areas: { wohnen: { area_id: "wohnen", name: "Wohnen" }, kueche: { area_id: "kueche", name: "Küche" } },
  });
  const living = { ...box("w", 0, 0, 5, 4), name: "Wohnen", area_id: "wohnen" };
  const kitchen = { ...box("k", 5, 0, 8, 4), name: "Küche", area_id: null };
  const store = { ...box("s", 7, 1, 9, 3), name: "Abstell", area_id: null };
  const floor = { ...floorWith([living, kitchen, store]), placements: [{ entity_id: "light.gone", x: 1, z: 1, y: null, mount: null }] };
  const doc = { ...emptyBuilding(), floors: [floor] };
  const kinds = checkPlan(doc, hass).map((f) => f.kind);
  assert.ok(kinds.includes("room_no_area"));
  assert.ok(kinds.includes("rooms_overlap"));
  assert.ok(kinds.includes("devices_unplaced"));
  assert.ok(kinds.includes("entity_missing"));
  // the kitchen has a free area of its own name: the fix links it
  const named = checkPlan(doc, hass).find((f) => f.kind === "room_no_area" && f.vars.room === "Küche");
  assert.deepEqual(named?.fix, { do: "set_area", roomId: "k", areaId: "kueche" });
  const store2 = checkPlan(doc, hass).find((f) => f.kind === "room_no_area" && f.vars.room === "Abstell");
  assert.deepEqual(store2?.fix, { do: "show_room", roomId: "s" });
});

test("a door on a wall is fine, one past the end of its wall is found", () => {
  const room = box("r", 0, 0, 4, 3);
  const ok = { ...floorWith([room]), openings: [opening("d1", "r", "door", { edge: 0, offset: 1, width: 0.9 })] };
  assert.equal(checkPlan({ ...emptyBuilding(), floors: [ok] }, undefined).filter((f) => f.kind === "opening_off_wall").length, 0);
  const off = { ...floorWith([room]), openings: [opening("d1", "r", "door", { edge: 9, offset: 1, width: 0.9 })] };
  assert.equal(checkPlan({ ...emptyBuilding(), floors: [off] }, undefined).filter((f) => f.kind === "opening_off_wall").length, 1);
});
