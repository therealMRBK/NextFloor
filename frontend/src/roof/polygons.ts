// Outlines for roofs: growing a polygon outwards and finding the outline of a floor's outer walls.

import { sectionCorners } from "./frame.ts";
import { generateWalls } from "../geometry/walls.ts";
import { polygonArea, type FreeWall, type Room, type RoofSection, type Vec2 } from "../model.ts";

const unit = ([x, z]: Vec2): Vec2 => {
  const length = Math.hypot(x, z) || 1;
  return [x / length, z / length];
};

/** The shoelace area: positive for the winding of a plan rectangle listed as (0,0) (w,0) (w,d) (0,d). */
function windingArea(points: readonly Vec2[]): number {
  return points.reduce((sum, p, i) => sum + (p[0] * points[(i + 1) % points.length][1] - points[(i + 1) % points.length][0] * p[1]), 0) / 2;
}

/** A polygon grown outwards by `d` with mitred corners. Works for simple polygons whichever way round they run. */
export function offsetPolygon(points: readonly Vec2[], d: number): Vec2[] {
  const count = points.length;
  if (count < 3 || Math.abs(d) < 1e-9) return points.map(([x, z]) => [x, z]);
  // outward is on the right of a counter-clockwise edge (z down the plan) and on the left of a clockwise one
  const side = windingArea(points) >= 0 ? 1 : -1;
  return points.map((corner, i) => {
    const before = points[(i + count - 1) % count];
    const after = points[(i + 1) % count];
    const [ax, az] = unit([corner[0] - before[0], corner[1] - before[1]]);
    const [bx, bz] = unit([after[0] - corner[0], after[1] - corner[1]]);
    const n1: Vec2 = [az * side, -ax * side];
    const n2: Vec2 = [bz * side, -bx * side];
    // the mitre follows the bisector of both edge normals, stretched so that both edges move by d
    const bisector: Vec2 = [n1[0] + n2[0], n1[1] + n2[1]];
    const length = Math.hypot(bisector[0], bisector[1]);
    if (length < 1e-6) return [corner[0] + n1[0] * d, corner[1] + n1[1] * d];
    const cosHalf = (bisector[0] * n1[0] + bisector[1] * n1[1]) / length;
    const stretch = Math.min(4, 1 / Math.max(0.25, cosHalf));
    return [corner[0] + (bisector[0] / length) * d * stretch, corner[1] + (bisector[1] / length) * d * stretch];
  });
}

/** The footprint of a section including its overhang: its free polygon, or its rectangle. */
export function sectionPolygon(s: Pick<RoofSection, "x0" | "z0" | "x1" | "z1" | "points" | "rotation">, overhang: number): Vec2[] {
  if (s.points && s.points.length >= 3) return offsetPolygon(s.points, overhang);
  if (s.rotation) return sectionCorners(s, overhang);
  const x0 = Math.min(s.x0, s.x1) - overhang;
  const x1 = Math.max(s.x0, s.x1) + overhang;
  const z0 = Math.min(s.z0, s.z1) - overhang;
  const z1 = Math.max(s.z0, s.z1) + overhang;
  return [[x0, z0], [x1, z0], [x1, z1], [x0, z1]];
}

/** The bounding box of a polygon, in the section's x0 to z1 terms. */
export function polygonBox(points: readonly Vec2[]): Pick<RoofSection, "x0" | "z0" | "x1" | "z1"> {
  const xs = points.map((p) => p[0]);
  const zs = points.map((p) => p[1]);
  return { x0: Math.min(...xs), z0: Math.min(...zs), x1: Math.max(...xs), z1: Math.max(...zs) };
}

type Segment = { a: Vec2; b: Vec2 };

/** Walks chains of segments joined at shared end points; returns the largest closed loop. */
function largestLoop(segments: Segment[]): Vec2[] | null {
  const keyOf = ([x, z]: Vec2) => `${Math.round(x * 1000)}:${Math.round(z * 1000)}`;
  const touching = new Map<string, Segment[]>();
  for (const seg of segments) for (const end of [seg.a, seg.b]) touching.set(keyOf(end), [...(touching.get(keyOf(end)) ?? []), seg]);
  const visited = new Set<Segment>();
  let best: Vec2[] | null = null;
  for (const first of segments) {
    if (visited.has(first)) continue;
    visited.add(first);
    const loop: Vec2[] = [first.a, first.b];
    let at: Vec2 = first.b;
    for (;;) {
      const next = (touching.get(keyOf(at)) ?? []).find((seg) => !visited.has(seg));
      if (!next) break;
      visited.add(next);
      at = keyOf(next.a) === keyOf(at) ? next.b : next.a;
      if (keyOf(at) === keyOf(loop[0])) break;
      loop.push(at);
    }
    const closed = loop.length >= 3 && keyOf(at) === keyOf(loop[0]);
    if (closed && (!best || Math.abs(polygonArea(loop)) > Math.abs(polygonArea(best)))) best = loop;
  }
  return best;
}

/**
 * The outline of a floor's rooms at the outer faces of its walls: the exterior walls chained into a loop (the
 * largest, for a house with a courtyard), grown by the wall thickness. Null without rooms.
 */
export function floorOutline(rooms: readonly Room[], free: readonly FreeWall[], exterior: number, interior: number): Vec2[] | null {
  // always without `asDrawn`: the roof follows the rooms' outer walls, and the walls that fill a gap are interior ones
  const outer = generateWalls(rooms, { exterior, interior }, free).walls.filter((w) => w.exterior && !w.free);
  const loop = outer.length ? largestLoop(outer.map((w) => ({ a: w.a, b: w.b }))) : null;
  if (!loop) return null;
  // corners in a straight line (a room edge split by its neighbour) go, so the roof keeps clean corners
  const corners = loop.filter((q, i) => {
    const p = loop[(i + loop.length - 1) % loop.length];
    const r = loop[(i + 1) % loop.length];
    return Math.abs((q[0] - p[0]) * (r[1] - q[1]) - (q[1] - p[1]) * (r[0] - q[0])) > 1e-6;
  });
  return corners.length >= 3 ? offsetPolygon(corners, exterior) : null;
}
