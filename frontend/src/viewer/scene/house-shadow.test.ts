import assert from "node:assert/strict";
import { test } from "node:test";
import { shadowOutline } from "./house-shadow.ts";

const square: [number, number][] = [[0, 0], [10, 0], [10, 10], [0, 10]];

test("the shadow falls away from the sun and grows as the sun sinks", () => {
  // sun in the south (azimuth 180) with north up: south is +z, so the shadow falls towards -z
  const high = shadowOutline([square], 6, { elevation: 45, azimuth: 180 }, 0);
  assert.equal(high.length, 1);
  const zs = high[0].map((p) => p[1]);
  assert.ok(Math.abs(Math.min(...zs) + 6) < 1e-6, `reaches ${Math.min(...zs)}`);
  const low = shadowOutline([square], 6, { elevation: 10, azimuth: 180 }, 0);
  assert.ok(Math.min(...low[0].map((p) => p[1])) < -20);
});

test("no shadow at night or for a sun on the horizon", () => {
  assert.deepEqual(shadowOutline([square], 6, { elevation: -5, azimuth: 180 }, 0), []);
  assert.deepEqual(shadowOutline([square], 6, null, 0), []);
});

test("sweeping only the shadow-side edges gives the same shadow as sweeping every edge (an L-shaped house)", async () => {
  const { mergeHoles } = await import("../../geometry/holes.ts");
  const { directionToSun } = await import("./sunlight.ts");
  const area = (r: [number, number][]) => Math.abs(r.reduce((s, p, i) => s + p[0] * r[(i + 1) % r.length][1] - r[(i + 1) % r.length][0] * p[1], 0) / 2);
  const l: [number, number][] = [[0, 0], [10, 0], [10, 4], [4, 4], [4, 10], [0, 10]];
  for (const azimuth of [30, 135, 200, 290]) {
    for (const ring of [l, [...l].reverse()]) {
      const sun = { elevation: 35, azimuth };
      const length = 6 / Math.tan((35 * Math.PI) / 180);
      const [sx, sz] = directionToSun(azimuth, 0);
      const move = (p: [number, number]): [number, number] => [p[0] - sx * length, p[1] - sz * length];
      const every = mergeHoles([ring, ring.map(move), ...ring.map((a, i) => [a, ring[(i + 1) % ring.length], move(ring[(i + 1) % ring.length]), move(a)])]);
      const quick = shadowOutline([ring], 6, sun, 0);
      const total = (rings: [number, number][][]) => rings.reduce((s, r) => s + area(r), 0);
      assert.ok(Math.abs(total(quick as [number, number][][]) - total(every as [number, number][][])) < 1e-6, `azimuth ${azimuth}`);
    }
  }
});
