import assert from "node:assert/strict";
import { test } from "node:test";
import { enclosedAreas } from "./enclosed.ts";
import type { FreeWall, Room } from "../model.ts";

const wall = (id: string, a: [number, number], b: [number, number]): FreeWall => ({ id, a, b });
const ring = (x0: number, z0: number, x1: number, z1: number, p = "w"): FreeWall[] => [
  wall(`${p}1`, [x0, z0], [x1, z0]),
  wall(`${p}2`, [x1, z0], [x1, z1]),
  wall(`${p}3`, [x1, z1], [x0, z1]),
  wall(`${p}4`, [x0, z1], [x0, z0]),
];
const size = (poly: [number, number][]) => {
  const xs = poly.map((p) => p[0]);
  const zs = poly.map((p) => p[1]);
  return [Math.max(...xs) - Math.min(...xs), Math.max(...zs) - Math.min(...zs)];
};

test("a closed ring of walls makes one room, an open one none", () => {
  const areas = enclosedAreas({ walls: ring(0, 0, 4, 3), rooms: [] });
  assert.equal(areas.length, 1);
  assert.deepEqual(size(areas[0]), [4, 3]);
  assert.equal(enclosedAreas({ walls: ring(0, 0, 4, 3).slice(0, 3), rooms: [] }).length, 0);
});

test("a wall across splits the house in two, even when it ends in the outer wall by a little", () => {
  const walls = [...ring(0, 0, 8, 4), wall("mid", [3, 0.02], [3, 4.03])];
  const areas = enclosedAreas({ walls, rooms: [] });
  assert.equal(areas.length, 2);
  assert.deepEqual(areas.map((a) => Math.round(size(a)[0])).sort(), [3, 5]);
});

test("dead-end walls inside a room change nothing", () => {
  const areas = enclosedAreas({ walls: [...ring(0, 0, 4, 4), wall("stub", [2, 0], [2, 1.5])], rooms: [] });
  assert.equal(areas.length, 1);
});

test("an area that already is a room is skipped, its neighbour is not", () => {
  const room: Room = { id: "r", name: "A", area_id: null, points: [[0, 0], [3, 0], [3, 4], [0, 4]], floor_material: "wood" };
  const walls = [...ring(0, 0, 8, 4), wall("mid", [3, 0], [3, 4])];
  const areas = enclosedAreas({ walls, rooms: [room] });
  assert.equal(areas.length, 1);
  assert.equal(Math.round(size(areas[0])[0]), 5);
});

test("a thin gap between two walls side by side is no room", () => {
  const walls = [...ring(0, 0, 4, 4), wall("a", [1, 1], [1, 3]), wall("b", [1.2, 1], [1.2, 3]), wall("c", [1, 1], [1.2, 1]), wall("d", [1, 3], [1.2, 3])];
  const areas = enclosedAreas({ walls, rooms: [] });
  assert.ok(areas.every((a) => size(a)[0] > 1));
});
