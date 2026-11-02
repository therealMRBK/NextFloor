// Per-wall settings of a room: the height of each wall (or of each part of a wall that another room splits), the points where a wall
// is cut by hand, and the thickness of one wall. All functions change the room they are given, which is a copy made by the editor.

import type { Room } from "../../../model.ts";

type Height = number | null | (number | null)[];

const thousandths = (v: number) => Math.round(v * 1000) / 1000;
const hundredths = (v: number) => Math.round(v * 100) / 100;

/** A per-edge list brought to exactly one entry per edge. */
function perEdge<T>(list: readonly (T | null)[] | undefined, count: number): (T | null)[] {
  const out = [...(list ?? [])].slice(0, count);
  while (out.length < count) out.push(null);
  return out;
}

const allNull = (list: readonly unknown[]) => list.every((x) => x === null);

/** The length of an edge of a room. */
export function edgeLength(room: Room, edge: number): number {
  const [a, b] = [room.points[edge], room.points[(edge + 1) % room.points.length]];
  return Math.hypot(b[0] - a[0], b[1] - a[1]);
}

/** Sets the height of a whole edge; null is "as high as the floor", and a list with nothing set is dropped. */
export function setWallHeight(room: Room, edge: number, height: number | null): void {
  const list = perEdge<Height>(room.wall_heights, room.points.length);
  list[edge] = height;
  room.wall_heights = allNull(list) ? undefined : (list as Room["wall_heights"]);
  // a level height ends a slope
  setSlopeEnd(room, edge, null);
}

function setSlopeEnd(room: Room, edge: number, end: number | null): void {
  if (end === null && !room.wall_slopes) return;
  const slopes = perEdge<number>(room.wall_slopes, room.points.length);
  slopes[edge] = end;
  room.wall_slopes = allNull(slopes) ? undefined : (slopes as number[]);
}

/**
 * Makes a wall slope: `start` is its height at the first corner of the edge, `end` at the next one. The top runs straight between them
 * (a lean-to, clerestory windows); both may be above the floor height. Heights are kept between 5 cm and 30 m.
 */
export function setWallSlope(room: Room, edge: number, start: number, end: number): void {
  const [from, to] = [start, end].map((h) => Math.min(30, Math.max(0.05, thousandths(h))));
  const list = perEdge<Height>(room.wall_heights, room.points.length);
  list[edge] = from;
  room.wall_heights = list as Room["wall_heights"];
  setSlopeEnd(room, edge, to);
}

/** Levels a sloping wall again: it keeps its start height, and the full floor height when that is not lower. */
export function clearWallSlope(room: Room, edge: number, floorHeight: number): void {
  const start = room.wall_heights?.[edge];
  setSlopeEnd(room, edge, null);
  if (typeof start === "number" && start >= floorHeight - 0.005) setWallHeight(room, edge, null);
}

/** Sets the height of one part of an edge that has several parts. Parts that all end up the same collapse to one height. */
export function setPartHeight(room: Room, edge: number, part: number, height: number | null, partCount: number): void {
  const list = perEdge<Height>(room.wall_heights, room.points.length);
  const current = list[edge];
  const parts: (number | null)[] = Array.isArray(current) ? [...current] : new Array<number | null>(partCount).fill(typeof current === "number" ? current : null);
  while (parts.length < partCount) parts.push(null);
  parts[part] = height;
  list[edge] = parts.every((h) => h === parts[0]) ? parts[0] : parts;
  room.wall_heights = allNull(list) ? undefined : (list as Room["wall_heights"]);
  // heights per part and a slope over the whole wall exclude each other
  setSlopeEnd(room, edge, null);
}

/**
 * Cuts an edge (or one part of it) in the middle. The new part keeps the height of the one it was cut from. Nothing happens when the
 * piece is shorter than 40 cm. Returns whether it was cut.
 */
export function cutEdge(room: Room, edge: number, part: number | undefined, starts: readonly number[]): boolean {
  const length = edgeLength(room, edge);
  const from = part === undefined ? 0 : starts[part];
  const to = part === undefined ? length : (starts[part + 1] ?? length);
  if (to - from < 0.4) return false;
  const at = hundredths((from + to) / 2);
  const splits = perEdge<number[]>(room.wall_splits, room.points.length);
  splits[edge] = [...(splits[edge] ?? []), at].sort((a, b) => a - b);
  room.wall_splits = splits as Room["wall_splits"];
  const heights = room.wall_heights?.[edge];
  if (Array.isArray(heights)) heights.splice((part ?? 0) + 1, 0, heights[part ?? 0] ?? null);
  return true;
}

/** Moves a cut along its edge, kept 10 cm from the ends and from other cuts (it stays where it was if it would come closer). */
export function moveCut(room: Room, edge: number, from: number, to: number, otherStarts: readonly number[]): void {
  const length = edgeLength(room, edge);
  const others = otherStarts.filter((s) => Math.abs(s - from) > 1e-3 && s > 0);
  let at = Math.max(0.1, Math.min(length - 0.1, hundredths(to)));
  if (others.some((s) => Math.abs(s - at) < 0.1)) at = from;
  const list = room.wall_splits?.[edge];
  if (!list) return;
  const index = list.findIndex((d) => Math.abs(d - from) < 1e-3);
  if (index >= 0) list[index] = at;
  list.sort((a, b) => a - b);
}

/** Takes a cut away: the part behind it joins the one before, whose height stays. */
export function joinAtCut(room: Room, edge: number, at: number, part: number): void {
  const splits = room.wall_splits;
  if (!splits?.[edge]) return;
  const left = splits[edge]!.filter((d) => Math.abs(d - at) > 1e-3);
  splits[edge] = left.length > 0 ? left : null;
  if (splits.every((l) => !l)) room.wall_splits = undefined;
  const heights = room.wall_heights?.[edge];
  if (Array.isArray(heights)) {
    heights.splice(part, 1);
    if (heights.every((h) => h === heights[0])) room.wall_heights![edge] = heights[0] ?? null;
  }
}

/** The thickness of one wall; null brings back the thickness of the house for walls of that kind. */
export function setWallThickness(room: Room, edge: number, thickness: number | null, part?: number, partCount = 1): void {
  const list = perEdge<number | (number | null)[]>(room.wall_thickness, room.points.length);
  if (part === undefined || partCount < 2) list[edge] = thickness;
  else {
    // one part of a split edge: the others keep what the edge had
    const current = list[edge];
    const parts: (number | null)[] = Array.isArray(current) ? [...current] : new Array<number | null>(partCount).fill(typeof current === "number" ? current : null);
    while (parts.length < partCount) parts.push(null);
    parts[part] = thickness;
    list[edge] = parts.every((v) => v === parts[0]) ? parts[0] : parts;
  }
  room.wall_thickness = allNull(list) ? undefined : (list as Room["wall_thickness"]);
}

/** A thickness typed for a wall: kept between 2 cm and 1.5 m, and null when it equals the default. */
export function thicknessFromTyped(typed: number, standard: number): number | null {
  const value = Math.min(1.5, Math.max(0.02, thousandths(typed)));
  return Math.abs(value - standard) < 0.0005 ? null : value;
}
