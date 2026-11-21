import assert from "node:assert/strict";
import { test } from "node:test";
import { aimReach, dragStep, facingAngle, gridPositionAfter, hasLeftStart, headingAngle, outlineWithCornerAt, shifted, steppedDelta, straightEnd } from "./drags.ts";

test("the pointer's distance is counted in whole grid steps", () => {
  assert.deepEqual(steppedDelta([0, 0], [0.26, -0.24], 0.1), [0.30000000000000004, -0.2]);
  assert.equal(dragStep(0.1, false), 0.1);
  assert.equal(dragStep(0.1, true), 0.01);
});

test("a drag starts once the pointer has left the circle around its start", () => {
  assert.equal(hasLeftStart([0, 0], [3, 3]), false);
  assert.equal(hasLeftStart([0, 0], [4, 4]), true);
  assert.equal(hasLeftStart([0, 0], [3, 3], 4), true);
});

test("with Shift a wall is held straight along the axis the pointer is nearer to", () => {
  assert.deepEqual(straightEnd([0, 0], [5, 1], true), [5, 0]);
  assert.deepEqual(straightEnd([0, 0], [1, 5], true), [0, 5]);
  assert.deepEqual(straightEnd([0, 0], [5, 1], false), [5, 1]);
});

test("a piece lands on the grid after the pointer moved it", () => {
  assert.deepEqual(gridPositionAfter([1.04, 2], [0, 0], [0.52, 0.3], 0.1), [1.6, 2.3]);
  assert.deepEqual(shifted([1, 1], [0.0004, 2]), [1, 3]);
});

test("facing: 0° looks towards +z, and the angle turns with the pointer in steps", () => {
  assert.equal(facingAngle([0, 0], [0, 5], 15), 0);
  assert.equal(facingAngle([0, 0], [-5, 0], 15), 90);
  assert.equal(facingAngle([0, 0], [0, -5], 15), 180);
  assert.equal(facingAngle([0, 0], [5, 0], 15), 270);
  assert.equal(facingAngle([0, 0], [-5, 0.3], 1), 87);
});

test("the ground field's heading counts from up in the plan", () => {
  assert.equal(headingAngle([0, 0], [0, -5], 15), 0);
  assert.equal(headingAngle([0, 0], [5, 0], 15), 90);
  assert.equal(headingAngle([0, 0], [-5, 0], 15), -90);
});

test("a camera's reach follows the pointer's distance within its limits", () => {
  assert.equal(aimReach([0, 0], [3, 4]), 5);
  assert.equal(aimReach([0, 0], [0.1, 0]), 0.5);
  assert.equal(aimReach([0, 0], [100, 0]), 50);
});

test("dragging a corner of a rectangular area drags its neighbours along one axis each", () => {
  const rect: [number, number][] = [[0, 0], [4, 0], [4, 2], [0, 2]];
  assert.deepEqual(outlineWithCornerAt(rect, 2, [5.0004, 3]), [[0, 0], [5, 0], [5, 3], [0, 3]]);
  const triangle: [number, number][] = [[0, 0], [4, 0], [0, 3]];
  assert.deepEqual(outlineWithCornerAt(triangle, 1, [6, 1]), [[0, 0], [6, 1], [0, 3]]);
});

test("with free set only the dragged corner of a rectangle moves, so it becomes a free shape (#160)", () => {
  const rect: [number, number][] = [[0, 0], [4, 0], [4, 2], [0, 2]];
  assert.deepEqual(outlineWithCornerAt(rect, 2, [5, 3], true), [[0, 0], [4, 0], [5, 3], [0, 2]]);
});
