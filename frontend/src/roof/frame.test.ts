import assert from "node:assert/strict";
import { test } from "node:test";
import { gableSection, near } from "./fixtures.ts";
import { gradient, orderedRect, ridgeHeight, sectionFrame, sectionProfile, sectionUV, turnedPoint } from "./frame.ts";

test("pitches become gradients and are kept between 0° and 80°", () => {
  near(gradient(45), 1);
  near(gradient(0), 0);
  near(gradient(-10), 0);
  near(gradient(120), Math.tan((80 * Math.PI) / 180));
});

test("a rectangle is put in order whichever corners were given", () => {
  assert.deepEqual(orderedRect({ x0: 5, z0: 4, x1: 1, z1: 2 }), { x0: 1, x1: 5, z0: 2, z1: 4 });
});

test("the frame: u runs along the ridge, v across from side a, and flipping swaps the sides", () => {
  const f = sectionFrame(gableSection());
  assert.deepEqual([f.u0, f.u1, f.w], [0, 12, 8]);
  assert.deepEqual(f.at(2, 3), [2, 3]);
  const flipped = sectionFrame(gableSection({ flip: true }));
  assert.deepEqual(flipped.at(2, 3), [2, 5]);
  const along = sectionFrame(gableSection({ axis: "z" }));
  assert.deepEqual([along.u0, along.u1, along.w], [0, 8, 12]);
  assert.deepEqual(along.at(2, 3), [3, 2]);
});

test("a plan point maps to the same (u, v) the frame maps back from", () => {
  for (const s of [gableSection(), gableSection({ flip: true }), gableSection({ axis: "z" }), gableSection({ axis: "z", flip: true })]) {
    const f = sectionFrame(s);
    const [x, z] = f.at(3.5, 1.25);
    const [u, v] = sectionUV(s, x, z);
    near(u, 3.5);
    near(v, 1.25);
  }
});

test("a symmetric gable peaks in the middle at half the width", () => {
  const p = sectionProfile(gableSection());
  near(p.vr, 4);
  near(p.rh, 7);
  near(p.y(0), 3);
  near(p.y(8), 3);
  near(p.y(2), 5);
  near(ridgeHeight(gableSection()), 7);
});

test("a lower eave on side b moves the ridge towards side a and keeps both slopes", () => {
  const p = sectionProfile(gableSection({ eave_b: 2 }));
  near(p.vr, 3.5);
  near(p.y(p.vr), p.rh);
  near(p.y(8), 2);
});

test("a pent roof climbs from side a to its high edge, flat and parapet roofs stay at their eave", () => {
  const pent = sectionProfile(gableSection({ shape: "pent", pitch_a: 20 }));
  near(pent.vr, 8);
  near(pent.rh, 3 + 8 * Math.tan((20 * Math.PI) / 180));
  assert.equal(sectionProfile(gableSection({ shape: "flat" })).y(3), 3);
  assert.equal(sectionProfile(gableSection({ shape: "parapet" })).rh, 3);
});

test("a mansard breaks into a steeper lower and a 30° upper slope and is continuous", () => {
  const p = sectionProfile(gableSection({ shape: "mansard", pitch_a: 70, pitch_b: 70 }));
  assert.ok(p.rh > 3);
  let last = p.y(0);
  for (let v = 0.25; v <= 8; v += 0.25) {
    assert.ok(Math.abs(p.y(v) - last) < 3, `no jump at ${v}`);
    last = p.y(v);
  }
  near(p.y(p.vr), p.rh, 1e-6);
});

test("a turned section maps its frame to the plan and back", () => {
  const s = { x0: 0, z0: 0, x1: 8, z1: 4, axis: "x" as const, flip: false, rotation: 30 };
  const f = sectionFrame(s);
  const p = f.at(2, 1);
  const [u, v] = sectionUV(s, p[0], p[1]);
  assert.ok(Math.abs(u - 2) < 1e-9 && Math.abs(v - 1) < 1e-9);
  assert.notDeepEqual(p, [2, 1], "it really turns");
  assert.ok(Math.abs(turnedPoint(s, [4, 2])[0] - 4) < 1e-9, "about its middle");
});
