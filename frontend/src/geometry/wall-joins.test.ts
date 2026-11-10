import assert from "node:assert/strict";
import { test } from "node:test";
import type { FreeWall, Opening } from "../model.ts";
import { applyWallJoins, wallJoins } from "./wall-joins.ts";
import { generateWalls } from "./walls.ts";

const wall = (id: string, a: [number, number], b: [number, number], thickness: number | null = null): FreeWall => ({ id, a, b, thickness });

test("two walls drawn by their outer faces share a corner afterwards", () => {
  // outer corner at (0, 0): a 0.36 wall along x below the line, a 0.24 wall along z right of the line
  const walls = [wall("h", [0, 0.18], [4, 0.18], 0.36), wall("v", [0.12, 0], [0.12, 3], 0.24)];
  const joins = wallJoins(walls, 0.12);
  assert.deepEqual(joins.map((j) => [j.id, j.a]), [["h", [0.12, 0.18]], ["v", [0.12, 0.18]]]);
  const floor = { walls, openings: [] as Opening[] };
  applyWallJoins(floor, joins);
  // one shared corner: the footprints are mitred, the outer corner is (0, 0)
  const made = generateWalls([], { exterior: 0.3, interior: 0.12 }, floor.walls).walls;
  const corners = made.flatMap((w) => w.footprint);
  assert.ok(corners.some((p) => Math.abs(p[0]) < 1e-6 && Math.abs(p[1]) < 1e-6), "outer corner filled");
  assert.equal(wallJoins(floor.walls, 0.12).length, 0, "nothing left to do");
});

test("an end at the side of another wall stops at its face, and an opening keeps its place", () => {
  const walls = [wall("bar", [0, 0], [6, 0], 0.3), wall("stem", [3, 0.05], [3, 4], 0.2)];
  const floor = { walls, openings: [{ id: "o", wall: "stem", offset: 1 } as unknown as Opening] };
  const joins = wallJoins(walls, 0.12);
  assert.deepEqual(joins, [{ id: "stem", a: [3, 0.15], b: [3, 4], startMoved: -0.1 }]);
  applyWallJoins(floor, joins);
  assert.equal(floor.openings[0].offset, 0.9);
});

test("walls that are apart or run alongside stay as they are", () => {
  assert.equal(wallJoins([wall("a", [0, 0], [4, 0]), wall("b", [4.6, 0.5], [4.6, 3])], 0.12).length, 0);
  assert.equal(wallJoins([wall("a", [0, 0], [4, 0]), wall("b", [0, 0.1], [4, 0.1])], 0.12).length, 0);
});

test("only the joins of the wall just drawn are taken", () => {
  const walls = [wall("h", [0, 0.06], [4, 0.06]), wall("v", [0.06, 0], [0.06, 3]), wall("x", [4.05, 0], [4.05, 3]), wall("y", [4.05, 3.06], [8, 3.06])];
  assert.deepEqual(wallJoins(walls, 0.12, "v").map((j) => j.id).sort(), ["h", "v"]);
});
