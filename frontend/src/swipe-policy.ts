/** When a swipe on a device in the 3D view sends its command (kept apart from the view so it can be tested). */
export type SwipeKind = "light" | "cover" | "fan";

/** A lamp follows the finger (a few calls a second). A blind or a fan gets one command when the finger lifts: a blind
 *  motor cannot follow, and every intermediate position would be queued on its controller (#174). */
export function swipeSendsWhileMoving(kind: SwipeKind): boolean {
  return kind === "light";
}

/** On lift: a lamp always sends its last value (the last live call may be older); a blind or a fan only when the drag
 *  ended somewhere else than it began (a pan or rotation that merely started on the device changes nothing). */
export function swipeSendsOnRelease(kind: SwipeKind, start: number, value: number): boolean {
  return kind === "light" || value !== start;
}
