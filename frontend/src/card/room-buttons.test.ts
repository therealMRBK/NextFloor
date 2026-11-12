import assert from "node:assert/strict";
import { test } from "node:test";
import type { Building } from "../model.ts";
import { roomButtons } from "./room-buttons.ts";

const house = {
  floors: [
    { id: "eg", name: "Ground", rooms: [{ id: "a", name: "Living room" }, { id: "b", name: "" }] },
    { id: "og", name: "Upper", rooms: [{ id: "c", name: "Study" }] },
    { id: "dg", name: "Attic", rooms: [] },
  ],
} as unknown as Building;

test("the house view offers the rooms of every floor with rooms, grouped by floor", () => {
  const groups = roomButtons(house, null);
  assert.deepEqual(groups.map((g) => [g.floorId, g.rooms.length]), [["eg", 1], ["og", 1]]);
  assert.deepEqual(groups[0].rooms.map((r) => r.id), ["a"], "an unnamed room gets no button (#152)");
  const onlyUnnamed = { floors: [{ id: "x", name: "X", rooms: [{ id: "u", name: " " }] }] } as unknown as Building;
  assert.deepEqual(roomButtons(onlyUnnamed, null), [], "a floor with only unnamed rooms offers no group");
});

test("a shown floor offers only its own rooms, and a missing plan offers none", () => {
  assert.deepEqual(roomButtons(house, "og")[0].rooms.map((r) => r.id), ["c"]);
  assert.deepEqual(roomButtons(house, "dg"), []);
  assert.deepEqual(roomButtons(null, null), []);
});
