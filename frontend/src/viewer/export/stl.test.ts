import assert from "node:assert/strict";
import { test } from "node:test";
import { buildStl } from "./stl.ts";

test("a triangle becomes 84 header bytes and one 50-byte record, scaled and lifted, z mirrored into y", () => {
  const bytes = buildStl([{ positions: [0, 0, 0, 2, 0, 0, 0, 0, 1], lift: 3 }], 10);
  assert.equal(bytes.length, 84 + 50);
  const view = new DataView(bytes.buffer);
  assert.equal(view.getUint32(80, true), 1);
  const f = (o: number) => Math.round(view.getFloat32(o, true) * 1000) / 1000 + 0;
  // vertices after the normal: (0,0,30) (0,-10,30) (20,0,30) – all at height (0 + 3) m × 10
  const verts = [0, 1, 2].map((k) => [f(96 + k * 12), f(100 + k * 12), f(104 + k * 12)]);
  assert.ok(verts.every((v) => v[2] === 30), JSON.stringify(verts));
  assert.deepEqual(new Set(verts.map((v) => `${v[0]},${v[1]}`)), new Set(["0,0", "20,0", "0,-10"]));
  assert.deepEqual(verts[0].slice(0, 2), [0, 0], "the corners keep their order");
  assert.ok(f(92) < -0.99, "the winding is kept: this one faces down, as it did in the plan");
  const n = [f(84), f(88), f(92)];
  assert.ok(Math.abs(Math.hypot(...n) - 1) < 0.01 && Math.abs(n[2]) > 0.99, "a flat triangle has an up or down normal");
});

test("degenerate triangles are skipped and an empty house gives only the header", () => {
  assert.equal(buildStl([{ positions: [1, 1, 1, 1, 1, 1, 2, 2, 2], lift: 0 }]).length, 84);
  assert.equal(buildStl([]).length, 84);
});
