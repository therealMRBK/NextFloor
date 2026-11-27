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

test("undo gives the last pixel step back", () => {
  const g = new QualityGovernor(2);
  run(g, 45, 200);
  const lowered = g.pixelRatio;
  g.undo(true);
  assert.equal(g.pixelRatio, lowered + 0.25);
});

test("undo of a 'low' request starts counting again", () => {
  const g = new QualityGovernor(1, 1);
  const steps = run(g, 90, 400);
  assert.deepEqual(steps[0], { low: true });
  g.undo(false);
  // two fresh slow windows are needed again before the simple look is asked for
  assert.deepEqual(run(g, 90, 40), []);
});

test("uneven frames: the median is fine, but the slower quarter shows the stutter (for the sun shadows)", () => {
  const g = new QualityGovernor(2);
  const steps = [];
  let fps: number | null = null;
  // 70 % at 18 ms (55 fps), 30 % at 40 ms (25 fps): no pixel step, the slower quarter runs at 25 fps
  for (let i = 0; i < 200; i++) {
    const s = g.frame(i % 10 < 7 ? 18 : 40, i * 20);
    if (s) steps.push(s);
    fps = g.takeSlowQuarterFps() ?? fps;
  }
  assert.deepEqual(steps, []);
  assert.ok(fps !== null && Math.abs(fps - 25) < 0.01, `slow quarter at ${fps}`);
  // it is taken once
  assert.equal(g.takeSlowQuarterFps(), null);
});

test("steady 60 fps: the slower quarter is fast too", () => {
  const g = new QualityGovernor(2);
  let fps: number | null = null;
  for (let i = 0; i < 200; i++) {
    g.frame(16, i * 16);
    fps = g.takeSlowQuarterFps() ?? fps;
  }
  assert.ok(fps !== null && fps > 60);
});

test("a very slow tablet (under 10 fps) is measured too, and quickly (#231)", () => {
  const g = new QualityGovernor(2);
  // 300 ms frames: 3 fps; before, frames of 100 ms and more were thrown away and nothing ever changed
  let fps: number | null = null;
  let first: number | null = null;
  for (let i = 0; i < 40 && first === null; i++) {
    const s = g.frame(300, i * 300);
    fps = g.takeSlowQuarterFps() ?? fps;
    if (s || fps !== null) first = i;
  }
  assert.ok(first !== null && first < 15, `measured after ${first} frames`);
});

test("a long pause is not a slow frame", () => {
  const g = new QualityGovernor(2);
  const steps = [];
  for (let i = 0; i < 300; i++) {
    const s = g.frame(i % 50 === 0 ? 5000 : 16, i * 16);
    if (s) steps.push(s);
  }
  assert.deepEqual(steps, []);
});
