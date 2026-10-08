import assert from "node:assert/strict";
import { test } from "node:test";
import { recolorLamps, shadeFactors } from "./lamp-colors.ts";

test("sentinel vertices become shade factors, body vertices stay at 0", () => {
  // two triangles: a shaded side (factor 0.7), a top (factor 1), a body vertex and a dark body vertex
  const colors = [0, 0.7, 0, 0, 1, 0, 0.16, 0.22, 0.38, 0, 0, 0, 0.04, 0.1, 0.2, 0, 0.55, 0];
  const f = shadeFactors(colors);
  assert.deepEqual([...f].map((v) => Math.round(v * 100) / 100), [0.7, 1, 0, 0, 0, 0.55]);
});

test("recolouring writes the light's colour times the factor into the lamp's range only", () => {
  const colors = new Float32Array([0, 0.5, 0, 0, 1, 0, 0.1, 0.1, 0.1, 0, 1, 0, 0, 1, 0, 0, 1, 0]);
  const factors = shadeFactors(colors);
  // range in triangles: the first triangle (vertices 0..2) belongs to the lamp, the second to another
  recolorLamps(colors, factors, { start: 0, end: 1 }, [1, 0.5, 0.2]);
  assert.deepEqual([...colors.slice(0, 3)].map((v) => Math.round(v * 100) / 100), [0.5, 0.25, 0.1]);
  assert.deepEqual([...colors.slice(3, 6)].map((v) => Math.round(v * 100) / 100), [1, 0.5, 0.2]);
  // the body vertex keeps its colour
  assert.deepEqual([...colors.slice(6, 9)].map((v) => Math.round(v * 100) / 100), [0.1, 0.1, 0.1]);
  // the other lamp is untouched
  assert.deepEqual([...colors.slice(9, 12)], [0, 1, 0]);
  // channels never exceed 1
  recolorLamps(colors, factors, { start: 1, end: 2 }, [1.5, 1.2, 1]);
  assert.deepEqual([...colors.slice(9, 12)], [1, 1, 1]);
});
