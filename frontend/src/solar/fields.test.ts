import assert from "node:assert/strict";
import { test } from "node:test";
import { roofFaces, wallFaces, type RoofFace } from "./faces.ts";
import { MODULE_GAP, MODULE_H, MODULE_W, LIFT, clampField, fieldCenter, fieldModules, fieldPlan, fieldSize, moduleSize, rowCounts, rowPitch, windowAsField, windowCorners } from "./fields.ts";
import { cottage, field, near } from "./fixtures.ts";
import { GROUND, groundFace } from "./faces.ts";

const slope = (): RoofFace => roofFaces(cottage({ type: "gable", pitch: 35, overhang: 0.5 }))[1];
const flat = (): RoofFace => roofFaces(cottage({ type: "flat", pitch: 0, overhang: 0.5 }))[0];

test("modules are portrait by default and turn when landscape, own sizes win", () => {
  assert.deepEqual(moduleSize({ portrait: true }), [MODULE_W, MODULE_H]);
  assert.deepEqual(moduleSize({ portrait: false }), [MODULE_H, MODULE_W]);
  assert.deepEqual(moduleSize({ portrait: true, module_w: 1, module_h: 2 }), [1, 2]);
});

test("rows: the same count in each, or the layout's own lengths, kept within limits", () => {
  assert.deepEqual(rowCounts({ rows: 3, cols: 2 }), [2, 2, 2]);
  assert.deepEqual(rowCounts({ rows: 0, cols: 0 }), [1]);
  assert.deepEqual(rowCounts({ rows: 9, cols: 9, layout: [4, 4, 3, 99, -2] }), [4, 4, 3, 60, 0]);
});

test("on a slope the rows follow each other module by module; on flat ground they leave space against shading", () => {
  near(rowPitch(slope(), field("x")), MODULE_H + MODULE_GAP);
  assert.ok(rowPitch(flat(), field("x", { tilt: 20 })) > rowPitch(slope(), field("x")) * 0.9);
  assert.ok(rowPitch(flat(), field("x", { tilt: 30 })) > rowPitch(flat(), field("x", { tilt: 10 })));
});

test("a field's size grows with its longest row and its row count", () => {
  const f = slope();
  const [w1, d1] = fieldSize(f, field("x", { rows: 1, cols: 2 }));
  near(w1, 2 * MODULE_W + MODULE_GAP);
  near(d1, MODULE_H);
  const [w2, d2] = fieldSize(f, field("x", { rows: 3, cols: 2, layout: [2, 4, 3] }));
  near(w2, 4 * MODULE_W + 3 * MODULE_GAP);
  assert.ok(d2 > d1 * 2.5);
});

test("modules lie 7 cm above the slope", () => {
  const face = slope();
  const [first] = fieldModules(face, field(face.key));
  for (const corner of first.corners) {
    const q = [corner[0] - face.o[0], corner[1] - face.o[1], corner[2] - face.o[2]];
    const above = q[0] * face.n[0] + q[1] * face.n[1] + q[2] * face.n[2];
    near(above, LIFT, 1e-9);
  }
  assert.deepEqual(first.posts, []);
});

test("a module that would leave the face is left out; switched-off cells only show when asked for", () => {
  const face = slope();
  assert.equal(fieldModules(face, field(face.key, { u: face.lu - MODULE_W, cols: 2 })).length, 1);
  const switched = field(face.key, { cols: 3, skip: ["0:1"] });
  assert.equal(fieldModules(face, switched).length, 2);
  const all = fieldModules(face, switched, true);
  assert.equal(all.length, 3);
  assert.deepEqual(all.filter((m) => m.skipped).map((m) => m.cell), ["0:1"]);
});

test("shorter rows sit left, centred or right under the longest one", () => {
  const face = slope();
  const first = (align: "left" | "center" | "right") => fieldModules(face, field(face.key, { layout: [4, 2], align, u: 0 }))
    .filter((m) => m.cell.startsWith("1:"))[0].corners[0];
  const [left, centre, right] = [first("left"), first("center"), first("right")];
  const delta = (a: number[], b: number[]) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
  near(delta(left, centre), MODULE_W + MODULE_GAP, 1e-6);
  near(delta(centre, right), MODULE_W + MODULE_GAP, 1e-6);
});

test("on flat ground the modules lean up on a frame with posts", () => {
  const face = groundFace(cottage({ type: "none", pitch: 0, overhang: 0 }), { u: 20, v: 0, rotation: null, base: null });
  const [m] = fieldModules(face, field(GROUND, { tilt: 30, u: 20, v: 0 }));
  assert.ok(m.corners[2][1] > m.corners[0][1] + 0.5, "the upper edge is higher");
  assert.ok(m.corners[2][2] > m.corners[0][2], "and lies towards +z");
  assert.equal(m.posts.length, 4);
  const [flipped] = fieldModules(face, field(GROUND, { tilt: 30, u: 20, v: 0, flip: true }));
  assert.ok(flipped.corners[2][1] > flipped.corners[0][1] + 0.5, "flipped: still the upper edge is higher");
  assert.ok(flipped.corners[2][2] < flipped.corners[0][2], "but it lies towards -z");
});

test("on a wall the modules hang flat, or stand off when tilted", () => {
  const wall = wallFaces(cottage({ type: "none", pitch: 0, overhang: 0 }))[0];
  const [flatOne] = fieldModules(wall, field(wall.key, { tilt: 0 }));
  assert.equal(flatOne.posts.length, 0);
  const [tilted] = fieldModules(wall, field(wall.key, { tilt: 30 }));
  assert.equal(tilted.posts.length, 2);
});

test("a field is kept on the face, rounded down to centimetres, and the ground has no limits", () => {
  const face = slope();
  const [w, d] = fieldSize(face, field(face.key));
  const kept = clampField(face, field(face.key, { u: 999, v: 999 }));
  near(kept.u, Math.floor((face.lu - w) * 100) / 100, 1e-9);
  near(kept.v, Math.floor((face.ls - d) * 100) / 100, 1e-9);
  assert.deepEqual(clampField(face, field(face.key, { u: -5, v: -5 })), { u: 0, v: 0 });
  const ground = groundFace(cottage({ type: "none", pitch: 0, overhang: 0 }), { u: 0, v: 0, rotation: null, base: null });
  assert.deepEqual(clampField(ground, field(GROUND, { u: 500, v: -500 })), { u: 500, v: -500 });
});

test("the plan shows each module's corners as plan points; the centre is the middle of the field", () => {
  const face = slope();
  const f = field(face.key, { cols: 2 });
  const plan = fieldPlan(face, f);
  assert.equal(plan.length, 2);
  assert.ok(plan.every((corners) => corners.length === 4 && corners.every((p) => p.length === 2)));
  const centre = fieldCenter(face, f);
  const xs = plan.flat().map((p) => p[0]);
  const zs = plan.flat().map((p) => p[1]);
  assert.ok(centre[0] >= Math.min(...xs) - 0.01 && centre[0] <= Math.max(...xs) + 0.01);
  assert.ok(centre[1] >= Math.min(...zs) - 0.01 && centre[1] <= Math.max(...zs) + 0.01);
});

test("a roof window is a field of one module of its size, sunk into the roof", () => {
  const face = slope();
  const win = { id: "w", face: face.key, u: 1, v: 1, w: null, h: null, cover: null, contact: null, tilt: null };
  assert.deepEqual(moduleSize(windowAsField(win)), [0.78, 1.18]);
  assert.deepEqual(moduleSize(windowAsField({ ...win, w: 1, h: 2 })), [1, 2]);
  const corners = windowCorners(face, win)!;
  const above = (c: number[]) => (c[0] - face.o[0]) * face.n[0] + (c[1] - face.o[1]) * face.n[1] + (c[2] - face.o[2]) * face.n[2];
  near(above(corners[0]), LIFT - 0.05, 1e-9);
  assert.equal(windowCorners(face, { ...win, u: 999 }), null);
});

test("a field on a flat roof turns about its middle, the modules swing with it", () => {
  const face = flat();
  const sized = field("x", { rows: 1, cols: 4 });
  const [w, d] = fieldSize(face, sized);
  const base = { ...sized, u: face.lu / 2 - w / 2, v: face.ls / 2 - d / 2 };
  const centre = fieldCenter(face, base);
  const plan = (f: typeof base) => fieldPlan(face, f).flat();
  const spread = (points: number[][], axis: 0 | 1) => Math.max(...points.map((p) => p[axis])) - Math.min(...points.map((p) => p[axis]));
  const straight = plan(base);
  const turned = plan({ ...base, rotation: 90 });
  assert.equal(turned.length, straight.length);
  // a row that ran along the eave now runs across it: the extents swap
  near(spread(turned, 0), spread(straight, 1), 1e-6);
  near(spread(turned, 1), spread(straight, 0), 1e-6);
  const middle = (points: number[][]) => [0, 1].map((i) => (Math.max(...points.map((p) => p[i])) + Math.min(...points.map((p) => p[i]))) / 2);
  near(middle(turned)[0], centre[0], 1e-6);
  near(middle(turned)[1], centre[1], 1e-6);
});

test("a turned field is kept on its face by its middle, and a full turn changes nothing", () => {
  const face = flat();
  const base = field("x", { rows: 1, cols: 3, u: 0, v: 0 });
  const full = field("x", { rows: 1, cols: 3, u: 0, v: 0, rotation: 360 });
  fieldPlan(face, full).flat(2).forEach((v, i) => near(v, fieldPlan(face, base).flat(2)[i], 1e-9));
  const turned = field("x", { rows: 1, cols: 3, u: 0, v: 0, rotation: 90 });
  const moved = { ...turned, ...clampField(face, turned) };
  assert.equal(fieldModules(face, moved).length, 3, "all modules are on the roof after the clamp");
  // garden fields and wall fields do not use the field turn
  const wall = wallFaces(cottage({ type: "flat", pitch: 0, overhang: 0.5 }))[0];
  assert.deepEqual(fieldPlan(wall, field("x", { rotation: 90 })), fieldPlan(wall, field("x")));
});

test("east-west racks turn every second row and stand the pairs close; a rack on a slope lifts the upper edge", () => {
  const face = flat();
  const ew = fieldModules(face, field("x", { rows: 2, cols: 1, tilt: 10, rack: "ew" }));
  // which way a module leans: from its low edge to its high edge, along the face
  const lean = (m: (typeof ew)[number]) => [0, 1, 2].reduce((s, i) => s + (m.corners[2][i] - m.corners[0][i]) * face.es[i], 0);
  assert.ok(lean(ew[0]) > 0 && lean(ew[1]) < 0, "the second row leans the other way");
  assert.ok(rowPitch(flat(), field("x", { tilt: 10, rack: "ew" })) < rowPitch(flat(), field("x", { tilt: 10 })));
  const racked = fieldModules(slope(), field("x", { rows: 1, cols: 1, tilt: 20 }))[0];
  assert.equal(racked.posts.length, 2, "brackets under the raised edge");
});

test("a roof window on a flat roof lies flat on it, on a low kerb (D#126)", () => {
  const face = flat();
  const corners = windowCorners(face, { id: "w", face: face.key, u: 1, v: 1, w: 1, h: 1, cover: null, contact: null, tilt: null })!;
  const ys = corners.map((c) => c[1]);
  assert.ok(Math.max(...ys) - Math.min(...ys) < 1e-9, "level");
  // a solar field on the same roof stands on a frame
  const module = fieldModules(face, { id: "f", face: face.key, u: 1, v: 1, rows: 1, cols: 1, portrait: true })[0];
  assert.ok(Math.max(...module.corners.map((c) => c[1])) - Math.min(...module.corners.map((c) => c[1])) > 0.1);
  assert.ok(ys[0] > module.corners[0][1] - 0.2);
});
