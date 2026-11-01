import assert from "node:assert/strict";
import { test } from "node:test";
import { atTarget, stepOpening, stepShare } from "./opening-motion.ts";
import type { OpeningState } from "../openings.ts";

const closed: OpeningState = { open: 0, open2: 0, tilt: 0, tilt2: 0, cover: null };

test("the share of the way covered grows with the frame time", () => {
  assert.equal(stepShare(0), 0);
  assert.ok(stepShare(16) > 0 && stepShare(16) < stepShare(160));
  assert.ok(Math.abs(stepShare(160) - (1 - Math.exp(-1))) < 1e-12);
});

test("an opening at its target needs nothing, whatever small differences remain", () => {
  assert.equal(atTarget(closed, closed), true);
  assert.equal(atTarget({ ...closed, open: 0.001 }, closed), true);
  assert.equal(atTarget({ ...closed, open: 0.5 }, closed), false);
  assert.equal(atTarget(closed, { ...closed, sensed: true }), false);
  assert.equal(atTarget({ ...closed, cover: 0.2 }, { ...closed, cover: null }), false);
});

test("a sash moves a share of the way each frame and arrives exactly", () => {
  const target: OpeningState = { ...closed, open: 1 };
  let { state, moving } = stepOpening(closed, target, 0.5);
  assert.equal(state.open, 0.5);
  assert.equal(moving, true);
  for (let i = 0; i < 20; i++) ({ state, moving } = stepOpening(state, target, 0.5));
  assert.equal(state.open, 1);
  assert.equal(moving, false);
});

test("a blind that appears or goes jumps; one that moves is eased", () => {
  assert.equal(stepOpening(closed, { ...closed, cover: 0.8 }, 0.5).state.cover, 0.8);
  assert.equal(stepOpening({ ...closed, cover: 0.8 }, closed, 0.5).state.cover, null);
  const eased = stepOpening({ ...closed, cover: 0 }, { ...closed, cover: 1 }, 0.25);
  assert.equal(eased.state.cover, 0.25);
  assert.equal(eased.moving, true);
});

test("the second leaf and the sensed flag follow the target", () => {
  const step = stepOpening({ ...closed, open2: 0 }, { ...closed, open2: 0.4, sensed: true }, 1);
  assert.equal(step.state.open2, 0.4);
  assert.equal(step.state.sensed, true);
});

test("a door leaf no sensor reports keeps that mark while it moves, and losing it is a change", () => {
  const step = stepOpening(closed, { ...closed, open: 1, assumed: true }, 0.5);
  assert.equal(step.state.assumed, true);
  assert.equal(atTarget({ ...closed, assumed: true }, closed), false);
});
