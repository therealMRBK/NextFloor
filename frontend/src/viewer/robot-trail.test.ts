import assert from "node:assert/strict";
import { test } from "node:test";
import { TRAIL_FADE_MS, TRAIL_HOLD_MS, trailGeometry, trailOpacity } from "./robot-trail.ts";

const positions = (g: ReturnType<typeof trailGeometry>) => Array.from(g.getAttribute("position").array as ArrayLike<number>);

test("a straight trail of one segment is a quad at the given width and height", () => {
  const g = trailGeometry([[[0, 0], [2, 0]]], 0.16, 0.01);
  const p = positions(g);
  assert.equal(p.length / 3, 6, "two triangles");
  // a float32 buffer, so every comparison here allows for its rounding
  assert.ok(p.filter((_, i) => i % 3 === 1).every((y) => Math.abs(y - 0.01) < 1e-6), "every vertex at the given height");
  const zs = p.filter((_, i) => i % 3 === 2);
  assert.ok(Math.abs(Math.min(...zs) + 0.08) < 1e-6 && Math.abs(Math.max(...zs) - 0.08) < 1e-6, "0.16 m wide");
  const xs = p.filter((_, i) => i % 3 === 0);
  assert.ok(Math.abs(Math.min(...xs)) < 1e-6 && Math.abs(Math.max(...xs) - 2) < 1e-6, "from end to end");
});

test("a bend gets a disc, a joint that barely turns does not", () => {
  const quad = positions(trailGeometry([[[0, 0], [1, 0]]], 0.16, 0)).length;
  const straight = positions(trailGeometry([[[0, 0], [1, 0], [2, 0]]], 0.16, 0)).length;
  assert.equal(straight, quad * 2, "two steps, and a joint that does not turn adds nothing");
  const bent = trailGeometry([[[0, 0], [1, 0], [1, 1]]], 0.16, 0);
  assert.ok(positions(bent).length > straight, "a real bend adds the disc that fills the notch");
  const slight = trailGeometry([[[0, 0], [1, 0], [2, 0.1]]], 0.16, 0);
  assert.equal(positions(slight).length, straight, "five degrees is not a notch worth a disc");
});

test("a trail of dots leaves nothing to draw", () => {
  assert.equal(positions(trailGeometry([[[0, 0], [0, 0]]], 0.16, 0)).length, 0, "a zero-length step");
  assert.equal(positions(trailGeometry([], 0.16, 0)).length, 0, "no segments at all");
  assert.equal(positions(trailGeometry([[[1, 1]]], 0.16, 0)).length, 0, "one point is no way");
});

test("several segments are drawn one after another", () => {
  const one = positions(trailGeometry([[[0, 0], [1, 0]]], 0.16, 0)).length;
  const two = positions(trailGeometry([[[0, 0], [1, 0]], [[2, 0], [3, 0]]], 0.16, 0)).length;
  assert.equal(two, one * 2);
});

test("the pad stays full for ten minutes after the robot stops, then fades", () => {
  const docked = 1_000_000;
  assert.equal(trailOpacity(null, docked), 1, "still cleaning: full");
  assert.equal(trailOpacity(docked, docked), 1, "just docked");
  assert.equal(trailOpacity(docked, docked + TRAIL_HOLD_MS - 1), 1, "one millisecond before the hold ends");
  assert.equal(trailOpacity(docked, docked + TRAIL_HOLD_MS), 1, "the hold ends where the fade starts");
  const half = trailOpacity(docked, docked + TRAIL_HOLD_MS + TRAIL_FADE_MS / 2);
  assert.ok(Math.abs(half - 0.5) < 1e-9, `halfway through the fade: ${half}`);
  assert.equal(trailOpacity(docked, docked + TRAIL_HOLD_MS + TRAIL_FADE_MS), 0, "gone at the end");
  assert.equal(trailOpacity(docked, docked + 10 * TRAIL_HOLD_MS), 0, "and stays gone");
});
