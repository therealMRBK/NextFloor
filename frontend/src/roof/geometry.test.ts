import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, ROOF_SHAPES, type RoofSection } from "../model.ts";
import { gableSection, near, rectRoom } from "./fixtures.ts";
import { cutHole, sectionGeometry, sectionHeightAt, sectionOverhang, type Q } from "./geometry.ts";

const none = { u0: 0, u1: 0, a: 0, b: 0 };

test("every roof shape builds faces, a rim and ridges", () => {
  for (const shape of ROOF_SHAPES) {
    const g = sectionGeometry(gableSection({ shape }), none);
    assert.ok(g.faces.length >= 1, shape);
    assert.ok(g.rim.length >= 4, shape);
    assert.ok(g.faces.every((f) => f.length >= 3), shape);
  }
});

test("gable: two faces and a three-point gable end; hip and pyramid have no gable end", () => {
  const gable = sectionGeometry(gableSection(), none);
  assert.equal(gable.faces.length, 2);
  assert.equal(gable.gable?.length, 3);
  assert.equal(sectionGeometry(gableSection({ shape: "hip" }), none).gable, null);
  assert.equal(sectionGeometry(gableSection({ shape: "pyramid" }), none).gable, null);
});

test("a pyramid has its apex in the middle of the rectangle at the ridge height", () => {
  const g = sectionGeometry(gableSection({ x1: 8, shape: "pyramid" }), none);
  assert.equal(g.faces.length, 4);
  const apex = g.faces[0][2];
  near(apex[0], 4);
  near(apex[1], 4);
  near(apex[2], 7);
});

test("a hip's ridge is shorter than the house by the run of the end slopes", () => {
  const [ridge] = sectionGeometry(gableSection({ shape: "hip" }), none).ridges;
  near(Math.abs(ridge[1][0] - ridge[0][0]), 12 - 2 * 4);
});

test("a half-hip's gable end is cut at 55 % of the roof's height", () => {
  const g = sectionGeometry(gableSection({ shape: "halfhip" }), none);
  assert.equal(g.gable?.length, 4);
  near(g.gable![1][1], 3 + 4 * 0.55);
});

test("a mansard has four faces and a five-point gable end", () => {
  const g = sectionGeometry(gableSection({ shape: "mansard", pitch_a: 70, pitch_b: 70 }), none);
  assert.equal(g.faces.length, 4);
  assert.equal(g.gable?.length, 5);
});

test("the overhang widens the roof on exactly the edges it is given", () => {
  const g = sectionGeometry(gableSection(), { u0: 0.5, u1: 1, a: 0.25, b: 0 });
  const us = g.rim.map((q) => q[0]);
  const vs = g.rim.map((q) => q[1]);
  near(Math.min(...us), -0.5);
  near(Math.max(...us), 13);
  near(Math.min(...vs), -0.25);
  near(Math.max(...vs), 8);
});

test("the planes know their height anywhere over them, and nothing outside", () => {
  const g = sectionGeometry(gableSection(), none);
  near(sectionHeightAt(g, 6, 0)!, 3);
  near(sectionHeightAt(g, 6, 2)!, 5);
  near(sectionHeightAt(g, 6, 4)!, 7);
  near(sectionHeightAt(g, 6, 6)!, 5);
  assert.equal(sectionHeightAt(g, 20, 4), null);
  assert.equal(sectionHeightAt(g, 6, -3), null);
});

test("cutting a hole leaves pieces around it and none inside", () => {
  const face: Q[] = [[0, 0, 3], [10, 0, 3], [10, 6, 7], [0, 6, 7]];
  const pieces = cutHole(face, { u0: 3, u1: 6, v0: 2, v1: 4 });
  assert.equal(pieces.length, 4);
  for (const piece of pieces) for (const q of piece) assert.ok(!(q[0] > 3 + 1e-6 && q[0] < 6 - 1e-6 && q[1] > 2 + 1e-6 && q[1] < 4 - 1e-6), "no corner inside the hole");
  // heights follow the slope on the cut edges
  const lower = pieces.find((p) => p.every((q) => q[1] <= 2 + 1e-9))!;
  assert.ok(lower.every((q) => Math.abs(q[2] - (3 + (q[1] / 6) * 4)) < 1e-9));
});

test("a hole at the edge of a face leaves fewer pieces", () => {
  const face: Q[] = [[0, 0, 3], [10, 0, 3], [10, 6, 7], [0, 6, 7]];
  assert.equal(cutHole(face, { u0: 0, u1: 10, v0: 0, v1: 3 }).length, 1);
});

test("a lean-to has no overhang where it meets the taller house", () => {
  const b = emptyBuilding();
  const upper = newFloor("o", "Upper", 3);
  upper.rooms = [rectRoom("house", 0, 0, 6, 8)];
  const ground = newFloor("g", "Ground", 0);
  ground.rooms = [rectRoom("annex", 6, 0, 10, 8)];
  b.floors = [ground, upper];
  const annex: RoofSection = gableSection({ shape: "pent", x0: 6, x1: 10, z0: 0, z1: 8, axis: "z", base: 3, eave_a: 3, eave_b: 3 });
  const ov = sectionOverhang(b, annex, 0.5);
  assert.equal(ov.a, 0, "the house stands next to side a");
  assert.equal(ov.b, 0.5);
  assert.equal(ov.u0, 0.5);
  assert.equal(ov.u1, 0.5);
});

test("a section can have a hip at one end and an upright gable at the other", () => {
  const g = sectionGeometry(gableSection({ ends: ["hip", "gable"] }), none);
  assert.equal(g.faces.length, 3, "two slopes and the hip's triangle");
  assert.equal(g.endProfiles?.[0], null, "no gable wall under the hip");
  assert.ok(g.endProfiles?.[1] && g.endProfiles[1].length === 3);
  assert.equal(g.ridges.length, 3, "the ridge and the two hip lines");
});

test("an overhang set by hand for one side replaces the automatic value of that side only", () => {
  const b = emptyBuilding();
  b.floors = [newFloor("g", "G", 0)];
  const s = { id: "s", x0: 0, z0: 0, x1: 6, z1: 4, shape: "gable", axis: "x", eave_a: 2.5, eave_b: 2.5, pitch_a: 35, pitch_b: 35, base: 2.5, overhang: null } as RoofSection;
  const auto = sectionOverhang(b, s, 0.4);
  assert.deepEqual(auto, { a: 0.4, b: 0.4, u0: 0.4, u1: 0.4 });
  const own = sectionOverhang(b, { ...s, overhang_sides: { u1: 1.2, a: 0 } }, 0.4);
  assert.deepEqual(own, { a: 0, b: 0.4, u0: 0.4, u1: 1.2 });
});
