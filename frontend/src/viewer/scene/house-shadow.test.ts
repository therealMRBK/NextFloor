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
