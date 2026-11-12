// The orientation cube of the on-screen navigation: five faces (top and the four sides) drawn with CSS 3D from the camera's angles. No DOM in here.

import { MAX_PHI, MIN_PHI } from "./view.ts";

type Vec = [number, number, number];
const cross = (a: Vec, b: Vec): Vec => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot = (a: Vec, b: Vec): number => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const scale = (a: Vec, k: number): Vec => [a[0] * k, a[1] * k, a[2] * k];
const unit = (a: Vec): Vec => scale(a, 1 / Math.hypot(...a));

export type CubeFace = "top" | "north" | "east" | "south" | "west";
export const CUBE_FACES: readonly CubeFace[] = ["top", "north", "east", "south", "west"];

/** A face of the cube in the world (x east, y up, z south for a plan with north 0): its outward normal and the directions of its own right and down. */
export interface FaceFrame {
  normal: Vec;
  right: Vec;
  down: Vec;
}

/** The faces for a plan whose north lies `northDegrees` clockwise from the plan's -z axis. A side face reads upright when seen from outside; the top face has north at its top edge. */
export function cubeFaces(northDegrees: number): Record<CubeFace, FaceFrame> {
  const n = (northDegrees * Math.PI) / 180;
  const north: Vec = [Math.sin(n), 0, -Math.cos(n)];
  const east: Vec = [Math.cos(n), 0, Math.sin(n)];
  const up: Vec = [0, 1, 0];
  const side = (normal: Vec): FaceFrame => ({ normal, right: unit(cross(scale(normal, -1), up)), down: [0, -1, 0] });
  return {
    top: { normal: up, right: east, down: scale(north, -1) },
    north: side(north),
    east: side(east),
    south: side(scale(north, -1)),
    west: side(scale(east, -1)),
  };
}

/** The camera's right, up and forward directions for an orbit view (the camera sits at azimuth theta and polar angle phi, looking at its target). */
function camera(theta: number, phi: number): { right: Vec; up: Vec; forward: Vec } {
  const forward: Vec = [-Math.sin(phi) * Math.sin(theta), -Math.cos(phi), -Math.sin(phi) * Math.cos(theta)];
  const right = unit(cross(forward, [0, 1, 0]));
  return { right, up: cross(right, forward), forward };
}

/** Where a world direction lands on the screen: x right, y down, z towards the viewer. */
function onScreen(c: ReturnType<typeof camera>, v: Vec): Vec {
  return [dot(c.right, v), -dot(c.up, v), -dot(c.forward, v)];
}

/** The CSS matrix3d() of one face of a cube of the given edge length (px), centred on the element's own centre. */
export function faceMatrix(theta: number, phi: number, frame: FaceFrame, size: number): string {
  const c = camera(theta, phi);
  const a = onScreen(c, frame.right);
  const b = onScreen(c, frame.down);
  const n = onScreen(c, frame.normal);
  const m = [...a, 0, ...b, 0, ...n, 0, ...scale(n, size / 2), 1];
  return `matrix3d(${m.map((v) => (Math.abs(v) < 1e-9 ? 0 : +v.toFixed(5))).join(",")})`;
}

/** Whether a face turns towards the viewer (it is drawn, otherwise it is hidden behind the cube). */
export function faceVisible(theta: number, phi: number, frame: FaceFrame): boolean {
  return onScreen(camera(theta, phi), frame.normal)[2] > 0.02;
}

/** The view a click on a face asks for: from that side (a little above, so the facade is seen at a slant), or straight down for the top. */
export function faceView(frame: FaceFrame, theta: number): { theta: number; phi: number } {
  if (frame.normal[1] > 0.5) return { theta, phi: MIN_PHI };
  return { theta: Math.atan2(frame.normal[0], frame.normal[2]), phi: Math.min(MAX_PHI, 1.1) };
}
