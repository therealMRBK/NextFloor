// Rooms from walls (#125): the areas that free walls (and the edges of rooms already there) close off, found as the faces of the
// plan they make. Each becomes the outline of a room along the wall centre lines, the way a drawn room has it.

import type { Floor, Vec2 } from "../model.ts";
import { pointInPolygon } from "../model.ts";

/** Corners closer than this are one corner, and a wall end this close to another wall touches it: tried in turn until something closes. */
const SNAPS = [0.06, 0.15, 0.3];
/** Areas smaller than this (m²) are not rooms: gaps between walls drawn side by side. */
const MIN_AREA = 0.6;
/** A room keeps to the schema's limit of corners. */
const MAX_CORNERS = 200;

type Seg = [Vec2, Vec2];

const cross = (a: Vec2, b: Vec2): number => a[0] * b[1] - a[1] * b[0];
const sub = (a: Vec2, b: Vec2): Vec2 => [a[0] - b[0], a[1] - b[1]];

/** Signed area (x right, z down: positive when the corners run clockwise on the screen). */
function area(points: readonly Vec2[]): number {
  let sum = 0;
  for (let i = 0; i < points.length; i++) sum += cross(points[i], points[(i + 1) % points.length]);
  return sum / 2;
}

/** Where along a the segment a→b is met by c→d (0 to 1), or null; ends within SNAP of the other segment count as touching. */
function splitPoints(a: Vec2, b: Vec2, c: Vec2, d: Vec2, SNAP: number): number[] {
  const out: number[] = [];
  const r = sub(b, a);
  const len = Math.hypot(r[0], r[1]);
  if (len < 1e-9) return out;
  const along = (p: Vec2): { t: number; dist: number } => {
    const t = ((p[0] - a[0]) * r[0] + (p[1] - a[1]) * r[1]) / (len * len);
    const q: Vec2 = [a[0] + r[0] * t, a[1] + r[1] * t];
    return { t, dist: Math.hypot(p[0] - q[0], p[1] - q[1]) };
  };
  // the other segment's ends lying on this one (a T junction)
  for (const p of [c, d]) {
    const { t, dist } = along(p);
    if (dist <= SNAP && t * len > SNAP && (1 - t) * len > SNAP) out.push(t);
  }
  // a proper crossing
  const s = sub(d, c);
  const denom = cross(r, s);
  if (Math.abs(denom) > 1e-9) {
    const t = cross(sub(c, a), s) / denom;
    const u = cross(sub(c, a), r) / denom;
    if (t * len > SNAP && (1 - t) * len > SNAP && u >= 0 && u <= 1) out.push(t);
  }
  return out;
}

interface Graph {
  points: Vec2[];
  next: Map<number, Set<number>>;
}

function graphOf(segments: readonly Seg[], SNAP: number): Graph {
  const points: Vec2[] = [];
  const vertex = (p: Vec2): number => {
    const found = points.findIndex((q) => Math.hypot(q[0] - p[0], q[1] - p[1]) <= SNAP);
    if (found >= 0) return found;
    points.push(p);
    return points.length - 1;
  };
  const next = new Map<number, Set<number>>();
  const link = (a: number, b: number) => {
    if (a === b) return;
    (next.get(a) ?? next.set(a, new Set()).get(a)!).add(b);
    (next.get(b) ?? next.set(b, new Set()).get(b)!).add(a);
  };
  segments.forEach(([a, b], i) => {
    const ts = new Set<number>([0, 1]);
    segments.forEach(([c, d], j) => {
      if (i !== j) for (const t of splitPoints(a, b, c, d, SNAP)) ts.add(Math.round(t * 1e6) / 1e6);
    });
    const chain = [...ts].sort((p, q) => p - q).map((t): Vec2 => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
    for (let k = 0; k + 1 < chain.length; k++) link(vertex(chain[k]), vertex(chain[k + 1]));
  });
  // walls that lead nowhere (a dead end) close no area: peel them off
  for (let changed = true; changed; ) {
    changed = false;
    for (const [v, ns] of next) {
      if (ns.size < 2) {
        for (const n of ns) next.get(n)?.delete(v);
        next.delete(v);
        changed = true;
      }
    }
  }
  return { points, next };
}

/** The faces of the graph, as corner lists in the orientation of a positive `area` (the outer boundary comes out negative). */
function faces(g: Graph): Vec2[][] {
  const angle = (from: number, to: number) => Math.atan2(g.points[to][1] - g.points[from][1], g.points[to][0] - g.points[from][0]);
  const seen = new Set<string>();
  const out: Vec2[][] = [];
  for (const [a, ns] of g.next) {
    for (const b of ns) {
      if (seen.has(`${a}>${b}`)) continue;
      const loop: number[] = [];
      let from = a;
      let to = b;
      let ok = true;
      while (!seen.has(`${from}>${to}`)) {
        seen.add(`${from}>${to}`);
        loop.push(from);
        if (loop.length > 2000) {
          ok = false;
          break;
        }
        const back = angle(to, from);
        // at the corner turn as tightly as possible to the same side: the first way on, turning from the way back
        let best = -1;
        let bestTurn = Infinity;
        for (const n of g.next.get(to) ?? []) {
          if (n === from && (g.next.get(to)?.size ?? 0) > 1) continue;
          let turn = back - angle(to, n);
          while (turn <= 1e-9) turn += 2 * Math.PI;
          if (turn < bestTurn) {
            bestTurn = turn;
            best = n;
          }
        }
        if (best < 0) {
          ok = false;
          break;
        }
        from = to;
        to = best;
      }
      if (ok && loop.length >= 3) out.push(loop.map((i) => g.points[i]));
    }
  }
  return out;
}

/** Drops corners that lie on a straight line, and rounds to the millimetre. */
function tidy(points: Vec2[]): Vec2[] {
  const kept = points.filter((p, i) => {
    const before = points[(i - 1 + points.length) % points.length];
    const after = points[(i + 1) % points.length];
    return Math.abs(cross(sub(p, before), sub(after, p))) > 1e-3;
  });
  return kept.map(([x, z]): Vec2 => [Math.round(x * 1000) / 1000, Math.round(z * 1000) / 1000]);
}

/** The point well inside a polygon (not on an edge), to ask "is something there already". */
function insidePoint(poly: readonly Vec2[]): Vec2 | null {
  const zs = poly.map((p) => p[1]);
  const z = (Math.min(...zs) + Math.max(...zs)) / 2;
  for (const dz of [0, 0.13, -0.13, 0.31, -0.31]) {
    const xs: number[] = [];
    for (let i = 0; i < poly.length; i++) {
      const [x0, z0] = poly[i];
      const [x1, z1] = poly[(i + 1) % poly.length];
      if (z0 > z + dz !== z1 > z + dz) xs.push(x0 + ((z + dz - z0) / (z1 - z0)) * (x1 - x0));
    }
    xs.sort((p, q) => p - q);
    let best: Vec2 | null = null;
    let width = 0;
    for (let i = 0; i + 1 < xs.length; i += 2) if (xs[i + 1] - xs[i] > width) [width, best] = [xs[i + 1] - xs[i], [(xs[i] + xs[i + 1]) / 2, z + dz]];
    if (best && pointInPolygon(best, poly as Vec2[])) return best;
  }
  return null;
}

/**
 * The outlines of the areas the floor's free walls and room edges enclose that have no room yet. Dead-end walls and areas under
 * 0.6 m² are left out; an area that is already (partly) a room is skipped.
 */
export function enclosedAreas(floor: Pick<Floor, "walls" | "rooms">): Vec2[][] {
  for (const snap of SNAPS) {
    const found = enclosedWithin(floor, snap, false);
    if (found.length) return found;
  }
  return [];
}

/** How many closed areas there are that lie inside a room already (an outline drawn as a room, with walls drawn inside it). */
export function coveredAreas(floor: Pick<Floor, "walls" | "rooms">): number {
  for (const snap of SNAPS) {
    const found = enclosedWithin(floor, snap, true);
    if (found.length) return found.length;
  }
  return 0;
}

function enclosedWithin(floor: Pick<Floor, "walls" | "rooms">, snap: number, covered: boolean): Vec2[][] {
  const segments: Seg[] = [];
  for (const w of floor.walls ?? []) segments.push([w.a, w.b]);
  for (const r of floor.rooms) r.points.forEach((p, i) => segments.push([p, r.points[(i + 1) % r.points.length]]));
  if (!floor.walls?.length) return [];
  const result: Vec2[][] = [];
  for (const loop of faces(graphOf(segments, snap))) {
    if (area(loop) < MIN_AREA) continue;
    const outline = tidy(loop);
    if (outline.length < 3 || outline.length > MAX_CORNERS) continue;
    const inside = insidePoint(outline);
    if (!inside) continue;
    const taken = floor.rooms.some((r) => r.points.length >= 3 && pointInPolygon(inside, r.points));
    if (taken !== covered) continue;
    // a room that lies inside the area (a closet in a hall) leaves the hall a room around it: keep it, the rooms take their own space
    result.push(outline);
  }
  return result;
}
