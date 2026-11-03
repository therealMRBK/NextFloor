import assert from "node:assert/strict";
import { test } from "node:test";
import { box, floorWith, opening } from "../../../entities/fixtures.ts";
import { emptyBuilding } from "../../../model.ts";
import { diffBuildings } from "./plan-diff.ts";

test("comparing two states lists what was added, removed, renamed, reshaped and moved", () => {
  const older = emptyBuilding();
  older.floors = [
    {
      ...floorWith([box("a", 0, 0, 4, 3), box("b", 4, 0, 7, 3)]),
      name: "EG",
      openings: [opening("d1", "a", "door")],
      furniture: [{ id: "s1", type: "sofa", x: 1, z: 1, rotation: 0, w: 2, d: 0.9, h: 0.8, variant: null }],
      placements: [{ entity_id: "light.a", x: 1, z: 1, y: null, mount: null }],
    },
  ];
  const current = structuredClone(older);
  const eg = current.floors[0];
  eg.rooms[0].name = "Wohnen";
  eg.rooms[1].points = [[4, 0], [8, 0], [8, 3], [4, 3]];
  eg.rooms.push(box("c", 0, 3, 4, 6));
  eg.openings = [opening("w1", "c", "window")];
  eg.furniture[0].x = 2;
  eg.placements = [{ entity_id: "light.b", x: 2, z: 2, y: null, mount: null }];
  const kinds = diffBuildings(older, current).map((e) => e.kind).sort();
  assert.deepEqual(kinds, ["device_added", "device_removed", "furniture_moved", "opening_added", "opening_removed", "room_added", "room_renamed", "room_reshaped"].sort());
  const reshaped = diffBuildings(older, current).find((e) => e.kind === "room_reshaped");
  assert.equal(reshaped?.detail, 3);
  assert.deepEqual(diffBuildings(older, older), []);
});

test("floors added and removed", () => {
  const older = emptyBuilding();
  older.floors = [{ ...floorWith([]), id: "a", name: "Keller" }];
  const current = emptyBuilding();
  current.floors = [{ ...floorWith([]), id: "b", name: "Dach" }];
  assert.deepEqual(diffBuildings(older, current).map((e) => [e.kind, e.name]), [["floor_added", "Dach"], ["floor_removed", "Keller"]]);
});
