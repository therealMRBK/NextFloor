import assert from "node:assert/strict";
import { test } from "node:test";
import { swipeSendsOnRelease, swipeSendsWhileMoving } from "./swipe-policy.ts";

test("only a lamp is sent while the finger moves", () => {
  assert.equal(swipeSendsWhileMoving("light"), true);
  assert.equal(swipeSendsWhileMoving("cover"), false);
  assert.equal(swipeSendsWhileMoving("fan"), false);
});

test("a blind that ends where it began is not sent, a moved one is", () => {
  assert.equal(swipeSendsOnRelease("cover", 40, 40), false);
  assert.equal(swipeSendsOnRelease("cover", 40, 0), true);
  assert.equal(swipeSendsOnRelease("fan", 33, 33), false);
  assert.equal(swipeSendsOnRelease("fan", 33, 66), true);
});

test("a lamp always sends its last value on release", () => {
  assert.equal(swipeSendsOnRelease("light", 40, 40), true);
  assert.equal(swipeSendsOnRelease("light", 40, 80), true);
});
