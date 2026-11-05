import assert from "node:assert/strict";
import { test } from "node:test";
import type { Room } from "../model.ts";
import { closeGaps, suggestedThickness } from "./gaps.ts";
import { generateWalls } from "./walls.ts";

const room = (id: string, x0: number, z0: number, x1: number, z1: number, clockwise = false): Room => {
  const points: [number, number][] = [[x0, z0], [x1, z0], [x1, z1], [x0, z1]];
  return { id, name: id, area_id: null, points: clockwise ? points.reverse() : points, floor_material: "wood" };
};

const box = (r: Room) => {
  const xs = r.points.map((p) => p[0]);
  const zs = r.points.map((p) => p[1]);
  return { x0: Math.min(...xs), z0: Math.min(...zs), x1: Math.max(...xs), z1: Math.max(...zs) };
};

test("rooms with a gap meet in the middle of it and share one interior wall", () => {
  const { rooms, gaps } = closeGaps([room("a", 0, 0, 5, 3), room("b", 5.4, 0, 9, 3)]);
  assert.deepEqual(gaps, [0.4]);
  assert.equal(box(rooms[0]).x1, 5.2);
  assert.equal(box(rooms[1]).x0, 5.2);
  const { walls } = generateWalls(rooms, { exterior: 0.3, interior: 0.4 });
  assert.equal(walls.filter((w) => !w.exterior).length, 1);
  assert.equal(suggestedThickness(gaps), 0.4);
});

test("the winding of a room does not matter", () => {
  const { rooms, gaps } = closeGaps([room("a", 0, 0, 5, 3, true), room("b", 5.4, 0, 9, 3)]);
  assert.deepEqual(gaps, [0.4]);
  assert.equal(box(rooms[0]).x1, box(rooms[1]).x0);
});

test("rooms along one wall all meet on the same line, even with different gaps", () => {
  const { rooms } = closeGaps([room("top", 0, 0, 8, 3), room("left", 0, 3.3, 4, 8), room("right", 4, 3.5, 8, 8)]);
  const line = box(rooms[0]).z1;
  assert.equal(box(rooms[1]).z0, line);
  assert.equal(box(rooms[2]).z0, line);
  assert.ok(line > 3 && line < 3.5);
});

test("a small overlap is pulled apart onto one line and suggests no thickness", () => {
  const { rooms, gaps } = closeGaps([room("a", 0, 0, 4, 3), room("b", 3.92, 0, 8, 3)]);
  assert.equal(box(rooms[0]).x1, box(rooms[1]).x0);
  assert.ok(gaps[0] < 0);
  assert.equal(suggestedThickness(gaps), null);
});

test("rooms that are too far apart, sit side by side without sharing a stretch of wall, or are alone stay as they were", () => {
  assert.deepEqual(closeGaps([room("a", 0, 0, 4, 3), room("b", 6, 0, 9, 3)]).gaps, []);
  assert.deepEqual(closeGaps([room("a", 0, 0, 4, 3), room("b", 4.3, 3.3, 8, 6)]).gaps, [], "only a corner in common");
  const alone = closeGaps([room("a", 0, 0, 4, 3)]);
  assert.deepEqual(alone.gaps, []);
  assert.deepEqual(alone.rooms[0].points, room("a", 0, 0, 4, 3).points);
});

test("the input rooms are never changed", () => {
  const input = [room("a", 0, 0, 4, 3), room("b", 4.3, 0, 8, 3)];
  const before = JSON.stringify(input);
  closeGaps(input);
  assert.equal(JSON.stringify(input), before);
});

test("a larger maximum gap closes wider gaps", () => {
  const rooms = [room("a", 0, 0, 4, 3), room("b", 5, 0, 8, 3)];
  assert.deepEqual(closeGaps(rooms).gaps, []);
  assert.deepEqual(closeGaps(rooms, 1.2).gaps, [1]);
});

test("the suggested thickness is the median gap, clamped between 8 and 50 cm", () => {
  assert.equal(suggestedThickness([0.1, 0.12, 0.3]), 0.12);
  assert.equal(suggestedThickness([0.05, 0.05]), 0.08 > 0.05 ? 0.08 : 0.05);
  assert.equal(suggestedThickness([0.9, 1.2]), 0.5);
  assert.equal(suggestedThickness([]), null);
  assert.equal(suggestedThickness([-0.05, 0.02]), null);
});

test("a straight wall split into several edges stays straight when only a part of it faces a neighbour", () => {
  // room "a" has a vertex in the middle of its right wall; "b" faces only the upper half, "c" the lower half with another gap
  const a: Room = { id: "a", name: "a", area_id: null, floor_material: "wood", points: [[0, 0], [5, 0], [5, 3], [5, 6], [0, 6]] };
  const { rooms } = closeGaps([a, room("b", 5.4, 0, 9, 3), room("c", 5.2, 3, 9, 6)]);
  const xs = rooms[0].points.filter((p) => p[0] > 1).map((p) => p[0]);
  assert.equal(new Set(xs).size, 1, "no corner appears inside the wall");
  assert.equal(rooms[0].points.length, 5);
});

test("an unpaired part of a split wall follows the paired part", () => {
  const a: Room = { id: "a", name: "a", area_id: null, floor_material: "wood", points: [[0, 0], [5, 0], [5, 3], [5, 6], [0, 6]] };
  const { rooms } = closeGaps([a, room("b", 5.4, 0, 9, 3)]);
  const xs = rooms[0].points.filter((p) => p[0] > 1).map((p) => p[0]);
  assert.deepEqual(xs, [5.2, 5.2, 5.2]);
});
