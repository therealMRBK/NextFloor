import assert from "node:assert/strict";
import { test } from "node:test";
import { Object3D } from "three";
import { GeoBuffer, LineBuffer } from "../geo.ts";
import { tiltBuilt } from "../furniture/furniture.ts";
import { tiltMesh, tiltRotation } from "./tilt-pose.ts";

test("an upright item has no tilt rotation and its meshes stay where they are", () => {
  assert.equal(tiltRotation({ rotation: 30, tilt_x: 0, tilt_z: null }), null);
  const mesh = new Object3D();
  mesh.position.set(1, 2, 3);
  tiltMesh(mesh, { x: 0, z: 0, rotation: 0, base: 0 }, 0);
  assert.deepEqual(mesh.position.toArray(), [1, 2, 3]);
});

test("a picture laid onto a tilted item lands where the item's own geometry lands (#186)", () => {
  for (const pose of [
    { x: 2, z: 3, rotation: 0, base: 0.4, tilt_x: 25, tilt_z: 0 },
    { x: -1, z: 0.5, rotation: 70, base: 1.1, tilt_x: -15, tilt_z: 10 },
    { x: 0, z: 0, rotation: 200, base: 0, tilt_x: 0, tilt_z: 40 },
  ]) {
    const lift = 2.6;
    const at: [number, number, number] = [pose.x + 0.3, lift + pose.base + 0.8, pose.z - 0.2];
    // the item's geometry, tilted the way furniture is
    const buf = new GeoBuffer();
    buf.p.push(...at);
    tiltBuilt(buf, new LineBuffer(), { vertex: 0, line: 0 }, pose, lift + pose.base);
    const mesh = new Object3D();
    mesh.position.set(...at);
    tiltMesh(mesh, pose, lift);
    mesh.position.toArray().forEach((v, i) => assert.ok(Math.abs(v - buf.p[i]) < 1e-9, `axis ${i}: ${v} vs ${buf.p[i]}`));
  }
});

test("the mesh itself turns with the tilt", () => {
  const mesh = new Object3D();
  tiltMesh(mesh, { x: 0, z: 0, rotation: 0, base: 0, tilt_x: 90 }, 0);
  // 90° about the width axis (x): what pointed up now points along z
  const up = [0, 1, 0] as const;
  const q = mesh.quaternion;
  const y = [2 * (q.x * q.y - q.w * q.z) * up[1], (1 - 2 * (q.x * q.x + q.z * q.z)) * up[1], 2 * (q.y * q.z + q.w * q.x) * up[1]];
  assert.ok(Math.abs(y[0]) < 1e-9 && Math.abs(y[1]) < 1e-9 && Math.abs(Math.abs(y[2]) - 1) < 1e-9);
});
