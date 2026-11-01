// Doors, windows and blinds move smoothly towards what Home Assistant reports. One step of that: how far each part got in a frame.

import type { OpeningState } from "../openings.ts";

/** Time constant of the movement in milliseconds: about 0.8 s until a window has settled. */
export const OPENING_TAU = 160;
/** Closer than this (as a fraction of the way), a part counts as arrived. */
const ARRIVED = 0.003;

const PARTS = ["open", "open2", "tilt", "tilt2"] as const;

/** The share of the remaining way covered in a frame of `dt` milliseconds. */
export const stepShare = (dt: number): number => 1 - Math.exp(-dt / OPENING_TAU);

const sameNumber = (a: number | null | undefined, b: number | null | undefined): boolean => (a ?? null) === (b ?? null) || (typeof a === "number" && typeof b === "number" && Math.abs(a - b) < ARRIVED);

/** Whether the opening already shows what it should: nothing to do for it (the usual case). */
export function atTarget(now: OpeningState, target: OpeningState): boolean {
  return PARTS.every((part) => sameNumber(target[part] ?? 0, now[part] ?? 0)) && sameNumber(target.cover, now.cover) && !!target.sensed === !!now.sensed && !!target.unlocked === !!now.unlocked && !!target.assumed === !!now.assumed;
}

export interface Step {
  state: OpeningState;
  /** Some part has not arrived yet, so another frame is needed. */
  moving: boolean;
}

/** One frame towards the target. The blind jumps when it appears or goes (no blind is null), and otherwise moves like the rest. */
export function stepOpening(now: OpeningState, target: OpeningState, share: number): Step {
  const state: OpeningState = { ...now, open2: now.open2 ?? 0, tilt2: now.tilt2 ?? 0, sensed: target.sensed, unlocked: target.unlocked, assumed: target.assumed };
  let moving = false;
  const approach = (from: number, to: number): number => {
    if (Math.abs(to - from) < ARRIVED) return to;
    moving = true;
    return from + (to - from) * share;
  };
  for (const part of PARTS) state[part] = approach(now[part] ?? 0, target[part] ?? 0);
  state.cover = target.cover === null || now.cover === null ? target.cover : approach(now.cover, target.cover);
  return { state, moving };
}
