import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Building, type Furniture, type OutdoorArea, type Room } from "./model.ts";
import { roomsOnly } from "./rooms-only.ts";

const room = (id: string, x0: number, x1: number): Room => ({ id, name: id, area_id: null, points: [[x0, 0], [x1, 0], [x1, 4], [x0, 4]], floor_material: "wood" });
const sofa = (id: string, x: number): Furniture => ({ id, type: "sofa", x, z: 2, rotation: 0, w: 2, d: 1, h: 0.8, variant: null });

function house(): Building {
  const b = emptyBuilding();
  const g = newFloor("g", "G", 0);
  g.rooms = [room("a", 0, 4), room("b", 4, 8), room("c", 8, 12)];
  g.furniture = [sofa("s1", 2), sofa("s2", 6), sofa("s3", 10)];
  g.placements = [{ entity_id: "light.a", x: 1, z: 1, y: null }, { entity_id: "light.c", x: 11, z: 1, y: null }];
  g.openings = [{ id: "o1", room_id: "a", edge: 0, offset: 1, width: 1, type: "door", sill: 0, height: 2, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null } as never, { id: "o2", room_id: "c", edge: 0, offset: 1, width: 1, type: "door", sill: 0, height: 2, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null } as never];
  g.outdoor = [{ id: "lawn", type: "lawn", points: [[0, 5], [3, 5], [3, 8]] } as OutdoorArea];
  const up = newFloor("u", "U", 3);
  up.rooms = [room("d", 0, 4)];
  b.floors = [g, up];
  return b;
}

test("only the chosen rooms stay, with their furniture, devices and openings, and no outdoor areas or roof", () => {
  const r = roomsOnly(house(), ["a", "c"]);
  assert.equal(r.floors.length, 1, "a floor without a chosen room is dropped");
  const g = r.floors[0];
  assert.deepEqual(g.rooms.map((x) => x.id), ["a", "c"]);
  assert.deepEqual(g.furniture.map((f) => f.id), ["s1", "s3"]);
  assert.deepEqual(g.placements.map((p) => p.entity_id), ["light.a", "light.c"]);
  assert.deepEqual(g.openings.map((o) => o.id), ["o1", "o2"]);
  assert.equal(g.outdoor.length, 0);
  assert.equal(r.settings.roof.type, "none");
});

test("rooms of several floors keep their floors; unknown ids are ignored; the plan itself is not changed", () => {
  const b = house();
  const r = roomsOnly(b, ["b", "d", "nope"]);
  assert.deepEqual(r.floors.map((f) => f.id), ["g", "u"]);
  assert.equal(r.floors[0].rooms.length, 1);
  assert.equal(b.floors[0].rooms.length, 3, "the original keeps all its rooms");
  assert.equal(roomsOnly(b, ["zzz"]).floors.length, 0);
});
