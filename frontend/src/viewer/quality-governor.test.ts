import assert from "node:assert/strict";
import { test } from "node:test";
import { QualityGovernor } from "./quality-governor.ts";

/** Feeds `n` frames of `dt` ms and collects the steps asked for. */
function run(g: QualityGovernor, dt: number, n: number, start = 0) {
  const steps = [];
  for (let i = 0; i < n; i++) {
    const s = g.frame(dt, start + i * dt);
    if (s) steps.push(s);
  }
  return steps;
}

test("a fast tablet keeps its pixels", () => {
  assert.deepEqual(run(new QualityGovernor(2), 16, 600), []);
});

test("a slow tablet loses pixels step by step, then gets the simple look", () => {
  const g = new QualityGovernor(2);
  // 80 ms frames: 12 frames a second
  const steps = run(g, 80, 2000);
  assert.deepEqual(steps.slice(0, 4), [{ ratio: 1.75 }, { ratio: 1.5 }, { ratio: 1.25 }, { ratio: 1 }]);
  assert.deepEqual(steps.at(-1), { low: true });
});

test("a tablet that is only a bit slow stays at fewer pixels, and gets them back when it is fast again", () => {
  const g = new QualityGovernor(2);
  // 30 ms frames (33 fps) are fine: nothing changes
  assert.deepEqual(run(g, 30, 500), []);
  run(g, 45, 200);
  assert.ok(g.pixelRatio < 2);
  const lowered = g.pixelRatio;
  // fast again, but only after half a minute
  assert.deepEqual(run(g, 10, 200, 1_000_000)[0], { ratio: lowered + 0.25 });
});

test("one hiccup does not count", () => {
  const g = new QualityGovernor(2);
  const frames = Array.from({ length: 300 }, (_, i) => (i % 20 === 0 ? 90 : 16));
  assert.deepEqual(frames.map((dt, i) => g.frame(dt, i * 16)).filter(Boolean), []);
});
