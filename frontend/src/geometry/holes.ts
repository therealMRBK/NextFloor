// Floor openings (stairwells and the like) that overlap or touch are merged into one outline, so the floor can be cut
// around them: the triangulation needs holes that do not cross each other.

import { pointInPolygon, type Vec2 } from "../model.ts";
import { cross as cross2, dot as dot2, norm, sub } from "./vec2.ts";

const EPS = 1e-4;

/** The shoelace area; positive for counter-clockwise rings. */
function ringArea(ring: readonly Vec2[]): number {
  return ring.reduce((sum, p, i) => sum + cross2(p, ring[(i + 1) % ring.length]), 0) / 2;
}

const counterClockwise = (ring: readonly Vec2[]): Vec2[] => (ringArea(ring) >= 0 ? [...ring] : [...ring].reverse());

/** Where segment a-b is crossed by c-d (strictly inside a-b, not parallel): the parameter on a-b, else null. */
function crossing(a: Vec2, b: Vec2, c: Vec2, d: Vec2): number | null {
  const r = sub(b, a);
  const s = sub(d, c);
  const denominator = cross2(r, s);
  if (Math.abs(denominator) < 1e-12) return null;
  const t = cross2(sub(c, a), s) / denominator;
  const u = cross2(sub(c, a), r) / denominator;
  return t > EPS && t < 1 - EPS && u > -EPS && u < 1 + EPS ? t : null;
}

/** Where a point lies on the inside of segment a-b: the parameter on it, else null. */
function touching(p: Vec2, a: Vec2, b: Vec2): number | null {
  const d = sub(b, a);
  const squared = dot2(d, d);
  if (squared < 1e-12) return null;
  const t = dot2(sub(p, a), d) / squared;
  if (t <= EPS || t >= 1 - EPS) return null;
  return Math.abs(cross2(sub(p, a), d)) / Math.sqrt(squared) < EPS ? t : null;
}

const closeTo = (p: Vec2, q: Vec2, eps = EPS) => norm(sub(p, q)) < eps;

/** The edges of a ring as [start, end] pairs. */
const edgesOf = (ring: readonly Vec2[]): [Vec2, Vec2][] => ring.map((p, i) => [p, ring[(i + 1) % ring.length]]);

/** Whether two rings cross, touch or lie inside each other. */
function overlap(first: readonly Vec2[], second: readonly Vec2[]): boolean {
  for (const [a, b] of edgesOf(first)) {
    for (const [c, d] of edgesOf(second)) {
      if (crossing(a, b, c, d) !== null || touching(c, a, b) !== null || touching(a, c, d) !== null || closeTo(a, c)) return true;
    }
  }
  return pointInPolygon(first[0], second) || pointInPolygon(second[0], first);
}

/** The outline of the union of overlapping rings. Islands inside are left out. */
function unionOutline(polygons: Vec2[][]): Vec2[][] {
  const rings = polygons.map(counterClockwise);
  const pieces: [Vec2, Vec2][] = [];
  rings.forEach((ring, ringIndex) => {
    for (const [a, b] of edgesOf(ring)) {
      // cut the edge where other outlines cross or touch it
      const cuts = [0, 1];
      rings.forEach((other, otherIndex) => {
        if (otherIndex === ringIndex) return;
        for (const [c, d] of edgesOf(other)) {
          const t = crossing(a, b, c, d) ?? touching(c, a, b);
          if (t !== null) cuts.push(t);
        }
      });
      cuts.sort((x, y) => x - y);
      for (let k = 1; k < cuts.length; k++) {
        if (cuts[k] - cuts[k - 1] < EPS) continue;
        const p: Vec2 = [a[0] + (b[0] - a[0]) * cuts[k - 1], a[1] + (b[1] - a[1]) * cuts[k - 1]];
        const q: Vec2 = [a[0] + (b[0] - a[0]) * cuts[k], a[1] + (b[1] - a[1]) * cuts[k]];
        // the piece is on the outline when the spot just outside it (on its right) is inside no other ring
        const length = norm(sub(q, p));
        const outside: Vec2 = [(p[0] + q[0]) / 2 + ((q[1] - p[1]) / length) * 1e-3, (p[1] + q[1]) / 2 - ((q[0] - p[0]) / length) * 1e-3];
        if (rings.some((other, otherIndex) => otherIndex !== ringIndex && pointInPolygon(outside, other))) continue;
        if (pieces.some(([s, e]) => closeTo(s, p) && closeTo(e, q))) continue;
        pieces.push([p, q]);
      }
    }
  });
  // chain the pieces into closed rings
  const outlines: Vec2[][] = [];
  const used = new Set<number>();
  pieces.forEach(([start, first], s) => {
    if (used.has(s)) return;
    used.add(s);
    const ring: Vec2[] = [start];
    let end = first;
    for (let guard = 0; guard < pieces.length && !closeTo(end, ring[0], 1e-3); guard++) {
      const next = pieces.findIndex(([p], i) => !used.has(i) && closeTo(p, end, 1e-3));
      if (next < 0) break;
      used.add(next);
      ring.push(pieces[next][0]);
      end = pieces[next][1];
    }
    if (ring.length >= 3 && ringArea(ring) > 1e-6) outlines.push(ring);
  });
  return outlines;
}

/** Floor openings, with those that overlap or touch (directly or through others) merged into one outline each. */
export function mergeHoles(holes: Vec2[][]): Vec2[][] {
  const valid = holes.filter((h) => h.length >= 3);
  // union-find over the openings
  const leader = valid.map((_, i) => i);
  const root = (i: number): number => (leader[i] === i ? i : (leader[i] = root(leader[i])));
  valid.forEach((first, i) => {
    for (let j = i + 1; j < valid.length; j++) if (root(i) !== root(j) && overlap(first, valid[j])) leader[root(j)] = root(i);
  });
  const groups = new Map<number, Vec2[][]>();
  valid.forEach((hole, i) => groups.set(root(i), [...(groups.get(root(i)) ?? []), hole]));
  return [...groups.values()].flatMap((group) => (group.length === 1 ? group : unionOutline(group)));
}

function distanceToSegment(p: Vec2, a: Vec2, b: Vec2): number {
  const d = sub(b, a);
  const squared = dot2(d, d);
  const t = squared ? Math.max(0, Math.min(1, dot2(sub(p, a), d) / squared)) : 0;
  return norm(sub(p, [a[0] + d[0] * t, a[1] + d[1] * t]));
}

/** Whether an opening lies in a room. Corners on the room's edge (snapped to a wall) count as inside. */
export function holeInRoom(hole: readonly Vec2[], room: readonly Vec2[], tolerance = 0.03): boolean {
  return hole.every((p) => pointInPolygon(p, room) || edgesOf(room).some(([a, b]) => distanceToSegment(p, a, b) <= tolerance));
}

/** An opening moved inwards by d on every side, so one on the room's edge stays a hole in the floor. */
export function insetHole(hole: readonly Vec2[], d: number): Vec2[] {
  const ring = counterClockwise(hole);
  // the left side of a counter-clockwise edge is the inside
  const inward = (a: Vec2, b: Vec2): Vec2 => {
    const e = sub(b, a);
    const length = norm(e) || 1;
    return [-e[1] / length, e[0] / length];
  };
  return ring.map((p, i) => {
    const before = inward(ring[(i - 1 + ring.length) % ring.length], p);
    const after = inward(p, ring[(i + 1) % ring.length]);
    const k = 1 + dot2(before, after);
    if (k < 0.1) return p;
    return [p[0] + ((before[0] + after[0]) / k) * d, p[1] + ((before[1] + after[1]) / k) * d] as Vec2;
  });
}


/** Whether a ring is convex (no reflex corner; straight corners are allowed). */
export function isConvex(ring: readonly Vec2[]): boolean {
  const r = counterClockwise(ring);
  return r.every((p, i) => cross2(sub(p, r[(i - 1 + r.length) % r.length]), sub(r[(i + 1) % r.length], p)) >= -EPS);
}

/** Sutherland–Hodgman: the part of `subject` inside the convex ring `clip`. */
function clipToConvex(subject: readonly Vec2[], clip: readonly Vec2[]): Vec2[] {
  let out: Vec2[] = [...subject];
  const c = counterClockwise(clip);
  for (let i = 0; i < c.length && out.length; i++) {
    const a = c[i];
    const b = c[(i + 1) % c.length];
    const side = (p: Vec2) => cross2(sub(b, a), sub(p, a));
    const input = out;
    out = [];
    input.forEach((p, k) => {
      const q = input[(k + 1) % input.length];
      const [sp, sq] = [side(p), side(q)];
      if (sp >= 0) out.push(p);
      if ((sp >= 0) !== (sq >= 0)) {
        const t = sp / (sp - sq);
        out.push([p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t]);
      }
    });
  }
  // drop points that repeat (a corner on the clip line)
  return out.filter((p, k) => !closeTo(p, out[(k + 1) % out.length]));
}

/**
 * The part of a floor opening that lies in a room: the whole opening when it fits, else its overlap with the room, so a
 * stair under the line between two rooms upstairs opens both of them (#116). Needs the opening or the room to be convex
 * (a stair's rectangle is); an overlap of less than 1 dm² is left out.
 */
export function holePartInRoom(hole: readonly Vec2[], room: readonly Vec2[]): Vec2[] | null {
  if (holeInRoom(hole, room)) return [...hole];
  const part = isConvex(hole) ? clipToConvex(room, hole) : isConvex(room) ? clipToConvex(hole, room) : null;
  return part && part.length >= 3 && Math.abs(ringArea(part)) >= 0.01 ? part : null;
}
