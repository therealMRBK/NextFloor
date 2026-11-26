import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type RoofSection } from "../model.ts";
import { sectionProfile, sectionUV } from "../roof/frame.ts";
import { proposeDormer } from "../roof/dormers.ts";
import { GROUND, fieldFace, groundFace, groundFloor, roofFaces, topFloor, wallFaces } from "./faces.ts";
import { cottage, field, near } from "./fixtures.ts";

const section = (patch: Partial<RoofSection> = {}): RoofSection => ({ id: "s", x0: 0, z0: 0, x1: 12, z1: 8, shape: "gable", axis: "x", eave_a: 3, eave_b: 3, pitch_a: 40, pitch_b: 40, base: 3, overhang: 0, ...patch });

test("no roof, no faces", () => {
  assert.deepEqual(roofFaces(cottage({ type: "none", pitch: 35, overhang: 0.4 })), []);
  assert.deepEqual(roofFaces(emptyBuilding()), []);
});

test("a gable roof has two slopes with the roof's pitch that face away from each other", () => {
  const faces = roofFaces(cottage({ type: "gable", pitch: 30, overhang: 0.5 }));
  assert.deepEqual(faces.map((f) => f.key), ["main:a", "main:b"]);
  for (const f of faces) {
    near(f.pitch, 30);
    assert.ok(f.n[1] > 0, "normals point up");
    assert.equal(f.flat, false);
  }
  assert.ok(faces[0].facing[1] * faces[1].facing[1] < 0, "opposite directions across the ridge");
  // each slope reaches the ridge: half of 7 + 2 × 0.8 m of depth, along the slope
  near(faces[0].ls, (7 + 2 * 0.8) / 2 / Math.cos((30 * Math.PI) / 180));
});

test("the ridge of the single roof can run along the short side", () => {
  const long = roofFaces(cottage({ type: "gable", pitch: 30, overhang: 0.5 }))[0];
  const short = roofFaces(cottage({ type: "gable", pitch: 30, overhang: 0.5, ridge: "short" }))[0];
  assert.ok(long.lu > short.lu);
});

test("a flat roof is one level face sitting on the slab", () => {
  const [face] = roofFaces(cottage({ type: "flat", pitch: 0, overhang: 0.5 }));
  assert.equal(face.key, "main:top");
  assert.equal(face.flat, true);
  near(face.o[1], 2.6 + 0.25);
  near(face.lu, 12 + 2 * 0.8);
});

test("a mansard has a lower and an upper face per side, and both lie on the roof as it is drawn", () => {
  for (const patch of [{ shape: "mansard" as const, pitch_a: 70, pitch_b: 70 }, { shape: "mansard" as const, pitch_a: 75, pitch_b: 60, eave_b: 2.5, flip: true, overhang: 0.4 }]) {
    const s = section(patch);
    const faces = roofFaces(cottage({ type: "custom", pitch: 35, overhang: 0, sections: [s] }));
    assert.deepEqual(faces.map((f) => f.key), ["s:a", "s:au", "s:b", "s:bu"]);
    near(faces[0].pitch, s.pitch_a);
    near(faces[1].pitch, 30, 1e-3);
    const profile = sectionProfile(s);
    for (const f of faces) {
      assert.ok(f.n[1] > 0, "normals point up");
      for (const [ku, ks] of [[0.1, 0], [0.5, 0.5], [0.9, 1]]) {
        const p = [0, 1, 2].map((i) => f.o[i] + f.eu[i] * f.lu * ku + f.es[i] * f.ls * ks);
        const [, v] = sectionUV(s, p[0], p[2]);
        near(p[1], profile.y(v), 1e-6);
      }
    }
  }
});

test("sections of a custom roof give their own faces: a hip adds two end triangles, a pyramid has four faces in all", () => {
  const roof = (s: RoofSection) => {
    const b = cottage({ type: "custom", pitch: 35, overhang: 0, sections: [s] });
    return roofFaces(b);
  };
  assert.deepEqual(roof(section()).map((f) => f.key), ["s:a", "s:b"]);
  assert.deepEqual(roof(section({ shape: "hip" })).map((f) => f.key), ["s:a", "s:b", "s:c", "s:d"]);
  assert.equal(roof(section({ shape: "pyramid", x1: 8 })).length, 4);
  assert.deepEqual(roof(section({ shape: "pent" })).map((f) => f.key), ["s:a"]);
  assert.deepEqual(roof(section({ shape: "flat" })).map((f) => f.key), ["s:top"]);
});

test("a hip slope narrows towards the ridge", () => {
  const b = cottage({ type: "custom", pitch: 35, overhang: 0, sections: [section({ shape: "hip", x1: 14 })] });
  const slope = roofFaces(b)[0];
  const [low0, low1] = slope.span(0);
  const [high0, high1] = slope.span(slope.ls * 0.9);
  assert.ok(high1 - high0 < low1 - low0);
});

test("walls: outer faces of an outer wall, both faces of a free wall, nothing for short walls", () => {
  const b = cottage({ type: "none", pitch: 0, overhang: 0 });
  const faces = wallFaces(b);
  assert.equal(faces.length, 4);
  assert.ok(faces.every((f) => f.wall?.floorId === "g" && f.pitch === 90 && f.n[1] === 0));
  assert.equal(wallFaces(b, "nothing").length, 0);
  // the outer face looks away from the house centre
  for (const f of faces) {
    const centre: [number, number] = [6, 3.5];
    const middle: [number, number] = [f.o[0] + f.eu[0] * f.lu / 2, f.o[2] + f.eu[2] * f.lu / 2];
    const away = (middle[0] - centre[0]) * f.n[0] + (middle[1] - centre[1]) * f.n[2];
    assert.ok(away > 0, f.key);
  }
});

test("the top floor is the highest with rooms; the ground floor skips a cellar", () => {
  const b = emptyBuilding();
  const cellar = newFloor("c", "Cellar", -2.6);
  const ground = newFloor("g", "Ground", 0);
  const upper = newFloor("u", "Upper", 2.7);
  const empty = newFloor("e", "Empty", 5.4);
  const room = { id: "r", name: "R", area_id: null, points: [[0, 0], [4, 0], [4, 4], [0, 4]] as [number, number][], floor_material: "wood" as const };
  [cellar, ground, upper].forEach((f) => (f.rooms = [room]));
  b.floors = [cellar, ground, upper, empty];
  assert.equal(topFloor(b)?.id, "u");
  assert.equal(groundFloor(b)?.id, "g");
  assert.equal(topFloor(emptyBuilding()), null);
});

test("the ground face is level, unbounded and turns with the field", () => {
  const b = cottage({ type: "none", pitch: 0, overhang: 0 });
  const face = groundFace(b, { u: 3, v: 2, rotation: 90, base: null });
  assert.equal(face.unbounded, true);
  assert.equal(face.key, GROUND);
  near(face.eu[2], 1);
  near(face.es[0], -1);
  assert.deepEqual(face.n, [0, 1, 0]);
  // a field on its own surface height sits there
  assert.equal(groundFace(b, { u: 0, v: 0, rotation: null, base: 2.6 }).o[1], 2.6);
});

test("a field's face is found by its key; a vanished roof face gives null", () => {
  const b = cottage({ type: "gable", pitch: 30, overhang: 0.5 });
  assert.equal(fieldFace(b, field("main:b"))?.key, "main:b");
  assert.equal(fieldFace(b, field("gone:a")), null);
  assert.equal(fieldFace(b, field(GROUND))?.unbounded, true);
  const wall = wallFaces(b)[0];
  assert.equal(fieldFace(b, field(wall.key))?.key, wall.key);
});

test("a dormer has an upright front gable face that looks away from its parent's slope (#230)", () => {
  const parent = section({ id: "p" });
  const dormer = proposeDormer(parent, "a", "d");
  assert.equal(dormer.dormer, true);
  const b = cottage({ type: "custom", pitch: 35, overhang: 0, sections: [parent, dormer] });
  const front = roofFaces(b).find((f) => f.key === "d:front");
  assert.ok(front, "front face exists");
  assert.equal(front.side, "front");
  near(front.pitch, 90);
  assert.equal(front.n[1], 0);
  // side a is the low coordinate in z, so the dormer's front looks towards -z, away from the ridge
  assert.ok(front.n[2] < -0.9, `looks outwards: ${front.n}`);
  // the face's frame is right-handed outwards: eu = (-nz, 0, nx)
  near(front.eu[0], -front.n[2]);
  assert.ok(front.lu > 1 && front.ls > 0.3);
  // full width up to the eaves, then narrowing towards the apex
  assert.deepEqual(front.span(0.5), [0, front.lu]);
  assert.ok(front.span(front.ls * 0.97)[1] - front.span(front.ls * 0.97)[0] < front.lu * 0.3);
});
