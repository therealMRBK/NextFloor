import assert from "node:assert/strict";
import { test } from "node:test";
import { hexRgb, lightStage, OWN_LOOK_DEFAULT, ownLook, STAGE, stageFor, THEMES } from "./themes.ts";

test("the own look fills from the default, then the house, then the card, skipping bad values", () => {
  assert.deepEqual(ownLook(), OWN_LOOK_DEFAULT);
  const house = { dark: "#111111", lines: "#222222" };
  const card = { lines: "#333333", light: "nope" };
  assert.deepEqual(ownLook(house, card), { ...OWN_LOOK_DEFAULT, dark: "#111111", lines: "#333333" });
  assert.deepEqual(ownLook(null, undefined), OWN_LOOK_DEFAULT);
  assert.ok(THEMES.includes("own"));
  assert.deepEqual(hexRgb("#ff8000"), [255, 128, 0]);
  assert.equal(hexRgb("#fff"), null);
});

test("the own stage takes its background for the sky, and a light one counts as a light stage like day", () => {
  const own = ownLook({ background: "#f0f0f0" });
  assert.deepEqual(stageFor("own", own).day[0], [240, 240, 240]);
  assert.ok(stageFor("own", own).day[1][0] < 240);
  assert.equal(stageFor("neon", own), STAGE.neon);
  assert.equal(lightStage("own", own), true);
  assert.equal(lightStage("own", ownLook()), false);
  assert.equal(lightStage("day", ownLook()), true);
  assert.equal(lightStage("blueprint", own), false);
});
