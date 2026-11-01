import assert from "node:assert/strict";
import { test } from "node:test";
import { DROPS, dropAt, JETS } from "./live-water.ts";

test("droplets fly out on arcs within the reach, start at the nozzle and land on its height", () => {
  for (let i = 0; i < DROPS; i++) {
    for (const t of [0, 0.4, 1.3, 7.9]) {
      const [x, y, z] = dropAt(i, t, 3);
      assert.ok(Math.hypot(x, z) <= 3 + 1e-9, "inside the reach");
      assert.ok(y >= 0 && y <= 1 + 1e-9, "the arc peaks at a third of the reach");
    }
  }
  // a short reach keeps the arc low, a long one at most 1.2 m
  assert.ok(Math.max(...Array.from({ length: 50 }, (_, k) => dropAt(0, k / 50 / 0.7, 0.9)[1])) <= 0.3 + 1e-9);
  assert.ok(Math.max(...Array.from({ length: 50 }, (_, k) => dropAt(0, k / 50 / 0.7, 12)[1])) <= 1.2 + 1e-9);
});

test("the jets spread all round the sprinkler, each a stream of droplets along one direction", () => {
  const angles = Array.from({ length: DROPS }, (_, i) => {
    const [x, , z] = dropAt(i, 0.5, 3);
    return Math.atan2(z, x);
  });
  const quadrants = new Set(angles.map((a) => Math.floor(((a + Math.PI) / (Math.PI / 2)) % 4)));
  assert.equal(quadrants.size, 4);
  // the droplets of one jet point the same way (within a small spread)
  const jet0 = angles.filter((_, i) => i % JETS === 0);
  assert.ok(Math.max(...jet0) - Math.min(...jet0) < 0.1);
});
