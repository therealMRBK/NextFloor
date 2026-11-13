import assert from "node:assert/strict";
import { test } from "node:test";
import { MeshBasicMaterial, LineBasicMaterial, PointsMaterial } from "three";
import { BELOW_OPACITY, EXPLODE_GAP, easeFloor, fadeMaterials, floorTarget, keptCamera } from "./floor-motion.ts";
import type { FloorMaterials } from "./materials.ts";

test("in the house view floors are pulled apart or stacked", () => {
  assert.deepEqual(floorTarget(2, undefined, true, "dim"), { y: 2 * EXPLODE_GAP, opacity: 1 });
  assert.deepEqual(floorTarget(2, undefined, false, "dim"), { y: 0, opacity: 1 });
});

test("a chosen floor stays, the floors above fly away, those below depend on the stack mode", () => {
  assert.deepEqual(floorTarget(1, 1, true, "dim"), { y: 0, opacity: 1 });
  assert.deepEqual(floorTarget(2, 1, true, "dim"), { y: 7, opacity: 0 });
  assert.deepEqual(floorTarget(0, 1, true, "dim"), { y: -0.4, opacity: BELOW_OPACITY });
  assert.deepEqual(floorTarget(0, 1, true, "single"), { y: -0.4, opacity: 0 });
  assert.deepEqual(floorTarget(0, 1, true, "stacked"), { y: 0, opacity: 1 });
});

test("a floor eases towards its target and settles exactly", () => {
  const pose = { y: 0, o: 1, ty: 2, to: 0 };
  const first = easeFloor(pose, 0.5);
  assert.deepEqual(first, { moving: true, settled: false });
  assert.deepEqual([pose.y, pose.o], [1, 0.5]);
  let last = first;
  for (let i = 0; i < 30 && last.moving; i++) last = easeFloor(pose, 0.5);
  assert.deepEqual(last, { moving: false, settled: true });
  assert.deepEqual([pose.y, pose.o], [2, 0]);
  assert.deepEqual(easeFloor(pose, 0.5), { moving: false, settled: false }, "nothing more to do");
});

test("fading switches see-through materials off again at full opacity", () => {
  const mesh = () => new MeshBasicMaterial();
  const m = { floor: mesh(), wall: mesh(), frames: mesh(), blinds: mesh(), lamps: mesh(), pattern: mesh(), glow: mesh(), glass: mesh(), glassWall: mesh(), cones: mesh(), screens: mesh(), lines: new LineBasicMaterial(), halos: new PointsMaterial(), shadow: mesh(), ghosts: [] } as unknown as FloorMaterials;
  fadeMaterials(m, 0.5);
  assert.equal(m.floor.transparent, true);
  assert.equal(m.floor.depthWrite, false);
  assert.equal(m.halos.opacity, 0.5);
  fadeMaterials(m, 1);
  assert.equal(m.floor.transparent, false);
  assert.equal(m.floor.depthWrite, true);
  assert.equal(m.lines.opacity, 1);
});

test("a kept camera stays where it is between floors, and the first floor opened from the house view does not turn round", () => {
  const now = { theta: 1.2, phi: 0.4, radius: 9 };
  // from one floor to another: side, height and distance stay
  assert.deepEqual(keptCamera("eg", "dg", now, null), now);
  // into the house view: side and height stay, the distance is fitted to the house
  assert.deepEqual(keptCamera("eg", null, now, null), { theta: 1.2, phi: 0.4 });
  // back to a floor: as the last floor was left (#119)
  const left = { theta: -0.3, phi: 0.9, radius: 7 };
  assert.deepEqual(keptCamera(null, "eg", now, left), left);
  // no floor was left yet: the floor opens from the side the house is looked at, at its own fitted distance
  assert.deepEqual(keptCamera(null, "eg", now, null), { theta: 1.2, phi: 0.4 });
});
