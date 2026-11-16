/**
 * What is laid onto a furniture item as its own mesh (a TV's picture, a frame's photo) has to tilt with the item:
 * about its width axis, then its depth axis, round the middle of its underside, exactly like tiltBuilt() tilts the
 * item's own geometry (#186).
 */
import { Quaternion, Vector3, type Object3D } from "three";

export interface TiltPose {
  /** Where the item stands, how it is turned (degrees) and where its underside is (m above the floor). */
  x: number;
  z: number;
  rotation: number;
  base: number;
  tilt_x?: number | null;
  tilt_z?: number | null;
}

const DEG = Math.PI / 180;

/** The rotation of an item's tilt in the world, or null for an upright item. */
export function tiltRotation(pose: Pick<TiltPose, "rotation" | "tilt_x" | "tilt_z">): Quaternion | null {
  const [px, pz] = [pose.tilt_x ?? 0, pose.tilt_z ?? 0];
  if (!px && !pz) return null;
  const yaw = pose.rotation * DEG;
  const width = new Vector3(Math.cos(yaw), 0, Math.sin(yaw));
  const depth = new Vector3(-Math.sin(yaw), 0, Math.cos(yaw));
  // about the width axis first, then about the depth axis
  return new Quaternion().setFromAxisAngle(depth, pz * DEG).multiply(new Quaternion().setFromAxisAngle(width, px * DEG));
}

/** Tilts a mesh that was placed for the upright item. `lift` is the height of the item's floor in the scene. */
export function tiltMesh(mesh: Object3D, pose: TiltPose, lift: number): void {
  const q = tiltRotation(pose);
  if (!q) return;
  const pivot = new Vector3(pose.x, lift + pose.base, pose.z);
  mesh.position.sub(pivot).applyQuaternion(q).add(pivot);
  mesh.quaternion.premultiply(q);
}
