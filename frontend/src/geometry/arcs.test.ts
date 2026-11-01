import assert from "node:assert/strict";
import { test } from "node:test";
import { arcPoints, pieceAt, polylineLength } from "./arcs.ts";

test("arc corners lie on one circle through both ends and reach the sagitta in the middle", () => {
  const pts = arcPoints([0, 0], [4, 0], 1);
  assert.ok(pts.length >= 3);
  // bulging to the left of a→b (x right, z down): towards -z
  assert.ok(pts.every((p) => p[1] < 0));
  const lowest = Math.min(...pts.map((p) => p[1]));
  assert.ok(Math.abs(lowest + 1) < 0.05, `apex ${lowest}`);
  // radius (c²/4 + s²) / 2s = 2.5, centre at (2, 1.5)
  for (const [x, z] of pts) assert.ok(Math.abs(Math.hypot(x - 2, z - 1.5) - 2.5) < 1e-9);
});

test("a negative sagitta bulges the other way, nothing for a straight edge", () => {
  assert.ok(arcPoints([0, 0], [4, 0], -1).every((p) => p[1] > 0));
  assert.deepEqual(arcPoints([0, 0], [4, 0], 0), []);
});

test("pieces of a polyline", () => {
  const line: [number, number][] = [[0, 0], [1, 0], [1, 2]];
  assert.equal(polylineLength(line), 3);
  assert.deepEqual(pieceAt(line, 1.5), { piece: 1, offset: 0.5 });
});
