// Pieces of one glass pane that follows a curved wall are placed as separate spans that share a `front` id.
// Where two of them meet, the wall must not draw a jamb or a solid end face: the glass is continuous there.
// The edge-line layer and the wall-solid layer both use this one definition, so they cannot disagree about
// which corners are internal.

import type { Vec2 } from "../../model.ts";
import type { Wall } from "../../geometry/walls.ts";
import type { Span } from "./types.ts";

type Point = readonly [number, number];

/** The two ends of an opening span in plan coordinates. */
export function spanEnds(sp: Span): [Point, Point] {
  const { start, axis, width } = sp.info;
  return [
    [start[0], start[1]],
    [start[0] + axis[0] * width, start[1] + axis[1] * width],
  ];
}

/** A 2 cm grid, so two pieces of one pane meet at the same key despite rounding. */
const key = (front: string, p: Point): string => `${front}|${Math.round(p[0] * 50)},${Math.round(p[1] * 50)}`;

export interface GlassJoins {
  /** World positions where two pieces of the same pane meet. */
  points: Vec2[];
  /** Whether this end of a span is an internal join of its own pane. */
  at(front: string, p: Point): boolean;
}

/**
 * Where along `wall` a piece of a pane ends at an internal join. The wall solids and the edge lines work
 * in wall coordinates (`s` from `wall.a`), so they use this instead of comparing world points: the corner
 * of a footprint sits half a wall thickness off the axis, and a distance test there is a guess.
 */
export function joinPositions(list: readonly Span[], joins: GlassJoins): number[] {
  const out: number[] = [];
  for (const sp of list) {
    const front = sp.info.opening.front;
    if (!front) continue;
    const [p0, p1] = spanEnds(sp);
    if (joins.at(front, p0)) out.push(sp.s0);
    if (joins.at(front, p1)) out.push(sp.s1);
  }
  return out;
}

/** How far `p` lies along `wall` from its start, in metres. */
export function alongWall(wall: Wall, p: Vec2): number {
  const length = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]) || 1;
  return ((p[0] - wall.a[0]) * (wall.b[0] - wall.a[0]) + (p[1] - wall.a[1]) * (wall.b[1] - wall.a[1])) / length;
}

/** Every place where two spans of the same pane share an end. */
export function glassJoins(lists: Iterable<Iterable<Span>>): GlassJoins {
  const count = new Map<string, number>();
  const pos = new Map<string, Vec2>();
  for (const list of lists) {
    for (const sp of list) {
      const front = sp.info.opening.front;
      if (!front) continue;
      for (const p of spanEnds(sp)) {
        const k = key(front, p);
        count.set(k, (count.get(k) ?? 0) + 1);
        if (!pos.has(k)) pos.set(k, [p[0], p[1]]);
      }
    }
  }
  const points = [...count]
    .filter(([, n]) => n > 1)
    .map(([k]) => pos.get(k))
    .filter((p): p is Vec2 => !!p);
  return { points, at: (front, p) => (count.get(key(front, p)) ?? 0) > 1 };
}
