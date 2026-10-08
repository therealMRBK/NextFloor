import assert from "node:assert/strict";
import { test } from "node:test";
import { holeInRoom, insetHole, mergeHoles } from "./holes.ts";
import type { Vec2 } from "../model.ts";

const rect = (x0: number, z0: number, x1: number, z1: number): Vec2[] => [[x0, z0], [x1, z0], [x1, z1], [x0, z1]];
const area = (r: Vec2[]) => Math.abs(r.reduce((a, p, i) => a + p[0] * r[(i + 1) % r.length][1] - r[(i + 1) % r.length][0] * p[1], 0) / 2);

test("separate floor openings stay as they are", () => {
  const holes = [rect(0, 0, 1, 1), rect(3, 0, 4, 1)];
  assert.deepEqual(mergeHoles(holes), holes);
});

test("overlapping floor openings become one outline (an L shape)", () => {
  const merged = mergeHoles([rect(0, 0, 3, 1), rect(2, 0, 3, 3)]);
  assert.equal(merged.length, 1);
  assert.ok(Math.abs(area(merged[0]) - 5) < 1e-6);
});

test("openings that only touch are merged as well", () => {
  const merged = mergeHoles([rect(0, 0, 1, 1), rect(1, 0, 2, 1)]);
  assert.equal(merged.length, 1);
  assert.ok(Math.abs(area(merged[0]) - 2) < 1e-6);
});

test("three openings in a row, the middle one overlapping both", () => {
  const merged = mergeHoles([rect(0, 0, 2, 1), rect(4, 0, 6, 1), rect(1.5, 0.2, 4.5, 0.8)]);
  assert.equal(merged.length, 1);
  assert.ok(Math.abs(area(merged[0]) - (2 + 2 + 2 * 0.6)) < 1e-6);
});

test("an opening inside another one disappears in it", () => {
  const merged = mergeHoles([rect(0, 0, 4, 4), rect(1, 1, 2, 2)]);
  assert.equal(merged.length, 1);
  assert.ok(Math.abs(area(merged[0]) - 16) < 1e-6);
});

test("an opening snapped to the room's edge counts as inside and is moved in a little", () => {
  const room = rect(0, 0, 4, 4);
  const hole = rect(1, 2, 2, 4);
  assert.ok(holeInRoom(hole, room));
  assert.ok(!holeInRoom(rect(1, 2, 2, 4.2), room));
  const inset = insetHole(hole, 0.003);
  assert.ok(inset.every(([x, z]) => x > 1 && x < 2 && z > 2 && z < 4));
  assert.ok(Math.abs(area(inset) - 0.994 * 1.994) < 1e-6);
});
