// The arithmetic behind dragging in the plan: given where the drag started and where the pointer is now, what the thing dragged
// becomes. All of these are pure, so the gesture code only has to pick the right one.

import { isAxisRect, type Vec2 } from "../../../model.ts";

const thousandths = (v: number) => Math.round(v * 1000) / 1000;

/** How far the pointer moved from the start, in whole steps of the grid (a finer step with Alt). */
export function steppedDelta(start: Vec2, now: Vec2, step: number): Vec2 {
  return [Math.round((now[0] - start[0]) / step) * step, Math.round((now[1] - start[1]) / step) * step];
}

/** The grid step of a drag: the plan's grid, or 1 cm while Alt is held. */
export const dragStep = (grid: number, fine: boolean): number => (fine ? 0.01 : grid);

/** A drag counts as a drag once the pointer has left a small circle around where it went down. */
export const hasLeftStart = (a: readonly [number, number], b: readonly [number, number], pixels = 5): boolean => Math.hypot(a[0] - b[0], a[1] - b[1]) >= pixels;

/** The end of a wall being drawn. With Shift it is held straight: horizontal or vertical, whichever the pointer is nearer to. */
export function straightEnd(start: Vec2, end: Vec2, straight: boolean): Vec2 {
  if (!straight) return end;
  return Math.abs(end[0] - start[0]) > Math.abs(end[1] - start[1]) ? [end[0], start[1]] : [start[0], end[1]];
}

/** A point moved by a distance, rounded to a millimetre. */
export const shifted = (p: Vec2, by: Vec2): Vec2 => [thousandths(p[0] + by[0]), thousandths(p[1] + by[1])];

/**
 * Where a piece that was at `from` ends up when the pointer moved from `start` to `now`: its own position moved by that distance and
 * then put on the grid.
 */
export function gridPositionAfter(from: Vec2, start: Vec2, now: Vec2, step: number): Vec2 {
  return [thousandths(Math.round((from[0] + now[0] - start[0]) / step) * step), thousandths(Math.round((from[1] + now[1] - start[1]) / step) * step)];
}

/**
 * The angle (degrees, 0 to 360) that turns the front of a piece at `centre` towards the pointer, in steps (15° normally, 1° with Alt).
 * Pieces face +z at 0°, so the angle is measured from there.
 */
export function facingAngle(centre: Vec2, pointer: Vec2, step: number): number {
  const raw = (Math.atan2(-(pointer[0] - centre[0]), pointer[1] - centre[1]) * 180) / Math.PI;
  return (((Math.round(raw / step) * step) % 360) + 360) % 360;
}

/** The same for the handle of a ground solar field, which points the other way round (up in the plan is 0°). */
export function headingAngle(centre: Vec2, pointer: Vec2, step: number): number {
  const raw = (Math.atan2(pointer[0] - centre[0], -(pointer[1] - centre[1])) * 180) / Math.PI;
  return Math.round(raw / step) * step;
}

/** How far a camera's view reaches while its handle is dragged: the distance to the pointer in tenths of a metre, between 0.5 and 50. */
export const aimReach = (centre: Vec2, pointer: Vec2): number => Math.min(50, Math.max(0.5, Math.round(Math.hypot(pointer[0] - centre[0], pointer[1] - centre[1]) * 10) / 10));

/**
 * The outline of an outdoor area after one corner was dragged to `to`. A rectangle stays a rectangle: the corners that share an x or a
 * z with the dragged one follow along that axis. With `free` (Shift held) only the dragged corner moves, so a rectangle becomes a free
 * shape whose corners line up with walls or other areas (#160).
 */
export function outlineWithCornerAt(points: readonly Vec2[], index: number, to: Vec2, free = false): Vec2[] {
  const keepsRectangle = !free && isAxisRect([...points]);
  const was = points[index];
  const target: Vec2 = [thousandths(to[0]), thousandths(to[1])];
  return points.map((p, j): Vec2 => {
    if (j === index) return target;
    if (!keepsRectangle) return [p[0], p[1]];
    return [Math.abs(p[0] - was[0]) < 1e-6 ? target[0] : p[0], Math.abs(p[1] - was[1]) < 1e-6 ? target[1] : p[1]];
  });
}
