// The local frame of a roof section and its height profile across the ridge. Plain geometry, no three.js:
// the editor draws with it as well.

import type { RoofSection, Vec2 } from "../model.ts";

export const DEG = Math.PI / 180;

/** The slope of a pitch in degrees as a gradient; pitches are kept between 0° and 80°. */
export const gradient = (pitchDeg: number): number => Math.tan(Math.min(80, Math.max(0, pitchDeg)) * DEG);

type Rect = Pick<RoofSection, "x0" | "z0" | "x1" | "z1">;

/** The rectangle of a section with its corners put in order. */
export function orderedRect(s: Rect): { x0: number; x1: number; z0: number; z1: number } {
  return { x0: Math.min(s.x0, s.x1), x1: Math.max(s.x0, s.x1), z0: Math.min(s.z0, s.z1), z1: Math.max(s.z0, s.z1) };
}

/** u runs along the ridge (u0 to u1 at the wall faces), v across it from side a (v = 0) to side b (v = w). */
export interface SectionFrame {
  u0: number;
  u1: number;
  w: number;
  /** The plan point of a local (u, v). */
  at(u: number, v: number): Vec2;
}

type FrameInput = Rect & Pick<RoofSection, "axis" | "flip"> & { rotation?: number | null };

/** A section turned about the middle of its rectangle (a wing at an angle): the middle and the turn, or null when it stands straight. */
function turnOf(s: Rect & { rotation?: number | null }): { cx: number; cz: number; c: number; sn: number } | null {
  if (!s.rotation) return null;
  const r = s.rotation * DEG;
  return { cx: (s.x0 + s.x1) / 2, cz: (s.z0 + s.z1) / 2, c: Math.cos(r), sn: Math.sin(r) };
}

/** A point of the section's own (unturned) rectangle in the plan: turned clockwise about the middle by the section's rotation. */
export function turnedPoint(s: Rect & { rotation?: number | null }, p: Vec2): Vec2 {
  const t = turnOf(s);
  if (!t) return p;
  const [dx, dz] = [p[0] - t.cx, p[1] - t.cz];
  return [t.cx + dx * t.c - dz * t.sn, t.cz + dx * t.sn + dz * t.c];
}

/** A plan point in the section's own (unturned) rectangle. */
export function unturnedPoint(s: Rect & { rotation?: number | null }, x: number, z: number): Vec2 {
  const t = turnOf(s);
  if (!t) return [x, z];
  const [dx, dz] = [x - t.cx, z - t.cz];
  return [t.cx + dx * t.c + dz * t.sn, t.cz - dx * t.sn + dz * t.c];
}

/** The four corners of a section's rectangle in the plan, turned with it. */
export function sectionCorners(s: Rect & { rotation?: number | null }, grow = 0): Vec2[] {
  const { x0, x1, z0, z1 } = orderedRect(s);
  return ([[x0 - grow, z0 - grow], [x1 + grow, z0 - grow], [x1 + grow, z1 + grow], [x0 - grow, z1 + grow]] as Vec2[]).map((p) => turnedPoint(s, p));
}

export function sectionFrame(s: FrameInput): SectionFrame {
  const { x0, x1, z0, z1 } = orderedRect(s);
  const turn = (p: Vec2) => turnedPoint(s, p);
  // flipped: v counts from the high coordinate, so side a is the bottom (or right) side
  if (s.axis === "x") return { u0: x0, u1: x1, w: z1 - z0, at: (u, v) => turn([u, s.flip ? z1 - v : z0 + v]) };
  return { u0: z0, u1: z1, w: x1 - x0, at: (u, v) => turn([s.flip ? x1 - v : x0 + v, u]) };
}

/** A plan point as (u, v) in the section's frame: along the ridge and across from side a. */
export function sectionUV(s: FrameInput, px: number, pz: number): [number, number] {
  const { x0, x1, z0, z1 } = orderedRect(s);
  const [x, z] = unturnedPoint(s, px, pz);
  if (s.axis === "x") return [x, s.flip ? z1 - z : z - z0];
  return [z, s.flip ? x1 - x : x - x0];
}

/** Where the ridge is and how high the roof is at any v. */
export interface SectionProfile {
  /** Ridge position across (0 to w); a pent roof has its high edge at w. */
  vr: number;
  /** Height of the ridge (or the high edge) above the ground. */
  rh: number;
  /** Roof height above the ground at v, also beyond the walls (the overhang). */
  y(v: number): number;
}

const UPPER_MANSARD = Math.tan(30 * DEG);

/** A mansard: steep lower slopes up to a break (2.4 m of rise or 30 % of the width), then 30° slopes to the ridge. */
export function mansardParts(w: number, eaveA: number, eaveB: number, gradA: number, gradB: number) {
  const runA = Math.min(w * 0.3, gradA > 1e-6 ? 2.4 / gradA : w * 0.3);
  const runB = Math.min(w * 0.3, gradB > 1e-6 ? 2.4 / gradB : w * 0.3);
  const breakA = eaveA + runA * gradA;
  const breakB = eaveB + runB * gradB;
  // the upper slopes meet where they are equally high
  const ridgeV = Math.min(w - runB, Math.max(runA, (breakB - breakA + UPPER_MANSARD * (w - runB + runA)) / (2 * UPPER_MANSARD)));
  const ridgeY = breakA + (ridgeV - runA) * UPPER_MANSARD;
  const y = (v: number) => {
    if (v <= runA) return eaveA + v * gradA;
    if (v <= ridgeV) return breakA + (v - runA) * UPPER_MANSARD;
    if (v <= w - runB) return breakB + (w - runB - v) * UPPER_MANSARD;
    return eaveB + (w - v) * gradB;
  };
  return { vla: runA, vlb: runB, yla: breakA, ylb: breakB, vr: ridgeV, rh: ridgeY, y };
}

type ProfileInput = FrameInput & Pick<RoofSection, "shape" | "eave_a" | "eave_b" | "pitch_a" | "pitch_b">;

export function sectionProfile(s: ProfileInput): SectionProfile {
  const w = sectionFrame(s).w;
  const [eaveA, eaveB] = [s.eave_a, s.eave_b];
  const [gradA, gradB] = [gradient(s.pitch_a), gradient(s.pitch_b)];
  switch (s.shape) {
    case "flat":
    case "parapet":
      return { vr: w / 2, rh: eaveA, y: () => eaveA };
    case "pent":
      return { vr: w, rh: eaveA + w * gradA, y: (v) => eaveA + v * gradA };
    case "mansard": {
      const m = mansardParts(w, eaveA, eaveB, gradA, gradB);
      return { vr: m.vr, rh: m.rh, y: m.y };
    }
    default: {
      // the slopes meet where they are equally high: a lower eave or a flatter slope moves the ridge
      const vr = gradA + gradB > 1e-6 ? Math.min(w, Math.max(0, (eaveB - eaveA + w * gradB) / (gradA + gradB))) : w / 2;
      return { vr, rh: eaveA + vr * gradA, y: (v) => (v <= vr ? eaveA + v * gradA : eaveB + (w - v) * gradB) };
    }
  }
}

/** Height of the ridge (or of a pent roof's high edge) above the ground. */
export const ridgeHeight = (s: RoofSection): number => sectionProfile(s).rh;
