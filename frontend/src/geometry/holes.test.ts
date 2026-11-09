import assert from "node:assert/strict";
import { test } from "node:test";
import type { Vec2 } from "../model.ts";
import { holeInRoom, holePartInRoom, insetHole, isConvex, mergeHoles } from "./holes.ts";

const box = (x0: number, z0: number, x1: number, z1: number): Vec2[] => [[x0, z0], [x1, z0], [x1, z1], [x0, z1]];
const areaOf = (ring: Vec2[]) => Math.abs(ring.reduce((sum, p, i) => sum + p[0] * ring[(i + 1) % ring.length][1] - ring[(i + 1) % ring.length][0] * p[1], 0)) / 2;
const near = (a: number, b: number) => assert.ok(Math.abs(a - b) < 1e-6, `${a} vs ${b}`);

test("openings that are apart stay as they are, and rings with fewer than three points are dropped", () => {
  const holes = [box(0, 0, 1, 1), box(5, 5, 6, 7)];
  assert.deepEqual(mergeHoles(holes), holes);
  assert.deepEqual(mergeHoles([[[0, 0], [1, 1]], box(0, 0, 1, 1)]), [box(0, 0, 1, 1)]);
  assert.deepEqual(mergeHoles([]), []);
});

test("two openings that overlap become one L-shaped outline", () => {
  const merged = mergeHoles([box(0, 0, 4, 1), box(3, 0, 4, 3)]);
  assert.equal(merged.length, 1);
  near(areaOf(merged[0]), 4 + 3 - 1);
});

test("openings that merely touch along an edge are merged too", () => {
  const merged = mergeHoles([box(0, 0, 2, 2), box(2, 0, 4, 2)]);
  assert.equal(merged.length, 1);
  near(areaOf(merged[0]), 8);
});

test("a chain is merged when a middle opening links both ends", () => {
  const merged = mergeHoles([box(0, 0, 2, 1), box(5, 0, 7, 1), box(1.5, 0.25, 5.5, 0.75)]);
  assert.equal(merged.length, 1);
  near(areaOf(merged[0]), 2 + 2 + 3 * 0.5);
});

test("an opening inside another one vanishes into it", () => {
  const merged = mergeHoles([box(0, 0, 5, 5), box(1, 1, 2, 2)]);
  assert.equal(merged.length, 1);
  near(areaOf(merged[0]), 25);
});

test("the order and the winding of the rings do not matter", () => {
  const clockwise = box(2, 0, 4, 3).reverse();
  const merged = mergeHoles([clockwise, box(0, 1, 3, 2)]);
  assert.equal(merged.length, 1);
  near(areaOf(merged[0]), 6 + 3 - 1);
  const swapped = mergeHoles([box(0, 1, 3, 2), clockwise]);
  near(areaOf(swapped[0]), areaOf(merged[0]));
});

test("two separate groups give two outlines", () => {
  const merged = mergeHoles([box(0, 0, 2, 2), box(1, 1, 3, 3), box(10, 10, 12, 12), box(11, 11, 13, 13)]);
  assert.equal(merged.length, 2);
  assert.deepEqual(merged.map(areaOf).sort((a, b) => a - b).map((a) => Math.round(a)), [7, 7]);
});

test("an opening lies in a room when its corners are inside or on the edge, within a tolerance", () => {
  const room = box(0, 0, 4, 4);
  assert.equal(holeInRoom(box(1, 1, 2, 2), room), true);
  assert.equal(holeInRoom(box(1, 2, 2, 4), room), true, "snapped to the wall");
  assert.equal(holeInRoom(box(1, 2, 2, 4.2), room), false);
  assert.equal(holeInRoom(box(1, 2, 2, 4.02), room), true, "within the 3 cm tolerance");
  assert.equal(holeInRoom(box(1, 2, 2, 4.02), room, 0.01), false);
  assert.equal(holeInRoom(box(8, 8, 9, 9), room), false);
});

test("an opening is moved inwards by d on every side, whichever way it is wound", () => {
  for (const ring of [box(1, 2, 2, 4), box(1, 2, 2, 4).reverse()]) {
    const inset = insetHole(ring, 0.1);
    assert.ok(inset.every(([x, z]) => x > 1 && x < 2 && z > 2 && z < 4));
    near(areaOf(inset), 0.8 * 1.8);
  }
  assert.deepEqual(insetHole(box(0, 0, 1, 1), 0).map((p) => p.map((v) => Math.round(v * 1e6) / 1e6)), box(0, 0, 1, 1));
});

test("the part of an opening in a room: whole, clipped at the room's edge, or none (#116)", () => {
  const area = (r: Vec2[]) => Math.abs(r.reduce((s, p, i) => s + p[0] * r[(i + 1) % r.length][1] - r[(i + 1) % r.length][0] * p[1], 0) / 2);
  const left = box(0, 0, 2.5, 4);
  assert.equal(area(holePartInRoom(box(1, 1, 2, 2), left)!), 1, "fits: whole");
  assert.ok(Math.abs(area(holePartInRoom(box(2, 1, 4, 3), left)!) - 1) < 1e-9, "half of a 2 x 2 opening");
  assert.equal(holePartInRoom(box(5, 1, 6, 2), left), null, "outside");
  // an L-shaped room (concave) with a rectangular opening over its inner corner
  const ell: Vec2[] = [[0, 0], [4, 0], [4, 2], [2, 2], [2, 4], [0, 4]];
  assert.equal(isConvex(ell), false);
  assert.ok(Math.abs(area(holePartInRoom(box(1, 1, 3, 3), ell)!) - 3) < 1e-9);
  // an L-shaped opening (two merged stairs) over the edge of a rectangular room
  const ellHole: Vec2[] = [[1, 1], [3, 1], [3, 2], [2, 2], [2, 3], [1, 3]];
  assert.ok(Math.abs(area(holePartInRoom(ellHole, box(0, 0, 2.5, 4))!) - 2.5) < 1e-9);
});
