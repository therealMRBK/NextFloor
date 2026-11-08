import assert from "node:assert/strict";
import { test } from "node:test";
import type { Vec2 } from "../../model.ts";
import { paintOfSide, wallPaintOf, type WallPaint } from "./solids.ts";

// a wall 0.2 m thick along z = 0 (from x = 0 to 4): the room "a" lies north of it (z < 0), the room "b" south (z > 0)
const wall: Vec2[] = [[0, -0.1], [4, -0.1], [4, 0.1], [0, 0.1]];
const roomA = { points: [[0, -3], [4, -3], [4, 0], [0, 0]] as Vec2[] };
const roomB = { points: [[0, 0], [4, 0], [4, 3], [0, 3]] as Vec2[] };

test("a wall face takes the paint of the room in front of it, the inside colour without one, the outside colour outdoors", () => {
  const paint: WallPaint = { outside: 0x111111, inside: 0x222222, rooms: [{ points: roomB.points, color: 0x333333 }] };
  const north = paintOfSide(wall, [0, -0.1], [4, -0.1], paint, [roomA, roomB]);
  const south = paintOfSide(wall, [4, 0.1], [0, 0.1], paint, [roomA, roomB]);
  assert.equal(north, 0x222222, "room a has no colour of its own: the inside colour");
  assert.equal(south, 0x333333, "room b has its own colour");
  // the same wall with only room a: its south face looks outdoors
  assert.equal(paintOfSide(wall, [4, 0.1], [0, 0.1], { ...paint, rooms: [] }, [roomA]), 0x111111);
  // the face direction does not depend on how the polygon edge is walked
  assert.equal(paintOfSide(wall, [4, -0.1], [0, -0.1], paint, [roomA, roomB]), 0x222222);
});

test("a floor with an outside colour of its own paints its outer walls in it, the others keep the building's (#110)", () => {
  const settings = { wall_paint_outside: "#aa0000", wall_paint_inside: "#eeeeee" };
  assert.equal(wallPaintOf(settings, { rooms: [], wall_paint_outside: "#808080" }).outside, 0x808080, "the plinth in grey");
  assert.equal(wallPaintOf(settings, { rooms: [] }).outside, 0xaa0000, "the storeys above stay red");
  assert.equal(wallPaintOf(settings, { rooms: [], wall_paint_outside: "nonsense" }).outside, 0xaa0000, "no colour is no override");
});

test("only the floor's own rooms paint its walls: a room upstairs leaves the wall below it alone (#110)", () => {
  const upstairs = { rooms: [{ ...roomB, wall_paint: "#00ff00" }] };
  const downstairs = { rooms: [roomB] };
  const settings = { wall_paint_inside: "#222222" };
  assert.deepEqual(wallPaintOf(settings, upstairs).rooms.map((r) => r.color), [0x00ff00]);
  const below = wallPaintOf(settings, downstairs);
  assert.equal(paintOfSide(wall, [0, 0.1], [4, 0.1], below, downstairs.rooms), 0x222222, "the inside colour, not the green from upstairs");
});
