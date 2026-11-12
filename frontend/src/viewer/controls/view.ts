// The camera's orbit view and the maths that moves it: flights, inertia, panning, zooming. No DOM in here.

import { Vector3 } from "three";

export interface OrbitView {
  target: Vector3;
  radius: number;
  /** The azimuth around +y, in radians. */
  theta: number;
  /** The polar angle from +y, in radians. */
  phi: number;
}

export const MIN_PHI = 0.12;
export const MAX_PHI = 1.35;
export const clamp = (v: number, lo: number, hi: number): number => Math.min(hi, Math.max(lo, v));

/** Ease in and out (cubic). */
export const ease = (t: number): number => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

export const copyView = (v: OrbitView): OrbitView => ({ ...v, target: v.target.clone() });

/** The camera position that looks at the target from the view's angles and distance. */
export function cameraPosition({ target, radius, theta, phi }: OrbitView): Vector3 {
  return new Vector3(target.x + radius * Math.sin(phi) * Math.sin(theta), target.y + radius * Math.cos(phi), target.z + radius * Math.sin(phi) * Math.cos(theta));
}

/** A view blended between two views by an eased fraction. */
export function blendViews(from: OrbitView, to: OrbitView, fraction: number): OrbitView {
  const k = ease(fraction);
  return {
    target: new Vector3().lerpVectors(from.target, to.target, k),
    radius: from.radius + (to.radius - from.radius) * k,
    theta: from.theta + (to.theta - from.theta) * k,
    phi: from.phi + (to.phi - from.phi) * k,
  };
}

/** The goal of a flight, turning the short way round in azimuth. */
export function flightGoal(from: OrbitView, to: Partial<OrbitView>): OrbitView {
  let theta = to.theta ?? from.theta;
  while (theta - from.theta > Math.PI) theta -= 2 * Math.PI;
  while (theta - from.theta < -Math.PI) theta += 2 * Math.PI;
  return { target: (to.target ?? from.target).clone(), radius: to.radius ?? from.radius, theta, phi: to.phi ?? from.phi };
}

/** Moves the target sideways and forwards by a drag of (dx, dy) pixels on a viewport of the given height. */
export function panView(view: OrbitView, dx: number, dy: number, viewportHeight: number, fovDegrees: number): void {
  const perPixel = (2 * view.radius * Math.tan((fovDegrees * Math.PI) / 360)) / (viewportHeight || 1);
  const right = new Vector3(Math.cos(view.theta), 0, -Math.sin(view.theta));
  const forward = new Vector3(-Math.sin(view.theta), 0, -Math.cos(view.theta));
  view.target.addScaledVector(right, -dx * perPixel);
  view.target.addScaledVector(forward, (dy * perPixel) / Math.max(0.35, Math.cos(view.phi)));
}

/** Turns the view by a one-finger drag; returns the turn so it can carry on as inertia. */
export function orbitView(view: OrbitView, dx: number, dy: number, viewportHeight: number): { theta: number; phi: number } {
  const h = viewportHeight || 1;
  const turn = { theta: (-dx / h) * 3.2, phi: (-dy / h) * 2.4 };
  view.theta += turn.theta;
  view.phi = clamp(view.phi + turn.phi, MIN_PHI, MAX_PHI);
  return turn;
}

/** One step of inertia: the turn continues and fades. Returns whether anything still moves. */
export function coast(view: OrbitView, velocity: { theta: number; phi: number }): boolean {
  if (Math.abs(velocity.theta) <= 1e-4 && Math.abs(velocity.phi) <= 1e-4) return false;
  view.theta += velocity.theta;
  view.phi = clamp(view.phi + velocity.phi, MIN_PHI, MAX_PHI);
  velocity.theta *= 0.9;
  velocity.phi *= 0.9;
  return true;
}

/** One press of a navigation button: turn (radians, + = clockwise on screen), tilt (radians, + = lower, flatter view) and a zoom factor on the distance (< 1 closer). */
export interface Nudge {
  turn?: number;
  tilt?: number;
  zoom?: number;
}

/** The view after one navigation step; the tilt and distance stay inside their limits. The given view is not changed. */
export function nudgeView(view: OrbitView, step: Nudge, minRadius: number, maxRadius: number): OrbitView {
  return {
    target: view.target.clone(),
    radius: clamp(view.radius * (step.zoom ?? 1), minRadius, maxRadius),
    theta: view.theta + (step.turn ?? 0),
    phi: clamp(view.phi + (step.tilt ?? 0), MIN_PHI, MAX_PHI),
  };
}

/**
 * How far the compass needle turns clockwise from straight up the screen, in radians: the plan's north (degrees clockwise, the plan's
 * `north` setting) plus the view's azimuth. Zero when north is at the top of the screen.
 */
export function compassAngle(heading: number, northDegrees: number): number {
  return heading + (northDegrees * Math.PI) / 180;
}

/** The azimuth that puts north at the top of the screen. */
export function northUpHeading(northDegrees: number): number {
  return (-northDegrees * Math.PI) / 180;
}
