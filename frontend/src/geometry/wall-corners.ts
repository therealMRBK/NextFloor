// Joining wall pieces: merging collinear runs, mitring the corners where walls meet, and tidying footprints.

import type { Vec2 } from "../model.ts";
import { add, cross, dot, leftOf, norm, rightOf, scale, sub, unit } from "./vec2.ts";

export interface WallSource {
  room_id: string;
  /** The edge in the room's stored point order (points[edge] to points[edge + 1]). */
  edge: number;
  /** The covered range along that edge, in metres from points[edge]. */
  t0: number;
  t1: number;
}

/** A wall before its corners are known: between two nodes (indices into the vertex list). */
export interface Draft {
  free?: string;
  /** The height at a; with `heightEnd` the top slopes from this height to that one at b. */
  height?: number;
  heightEnd?: number;
  /** A hanging free wall: its bottom edge at a and at b. */
  bottom?: [number, number];
  a: number;
  b: number;
  left: number;
  right: number;
  exterior: boolean;
  roomLeft: string | null;
  roomRight: string | null;
  sources: WallSource[];
}

/** The same wall seen from the other end. */
function reversed(w: Draft): Draft {
  const sloped = w.heightEnd !== undefined;
  return { ...w, a: w.b, b: w.a, left: w.right, right: w.left, roomLeft: w.roomRight, roomRight: w.roomLeft, height: sloped ? w.heightEnd : w.height, heightEnd: sloped ? w.height : undefined, ...(w.bottom ? { bottom: [w.bottom[1], w.bottom[0]] as [number, number] } : {}) };
}

/** Joins source ranges, merging consecutive pieces of the same room edge. */
function joinSources(first: WallSource[], second: WallSource[]): WallSource[] {
  const joined = first.map((s) => ({ ...s }));
  for (const s of second) {
    const neighbour = joined.find((o) => o.room_id === s.room_id && o.edge === s.edge && (Math.abs(o.t1 - s.t0) < 1e-6 || Math.abs(s.t1 - o.t0) < 1e-6));
    if (neighbour) {
      neighbour.t0 = Math.min(neighbour.t0, s.t0);
      neighbour.t1 = Math.max(neighbour.t1, s.t1);
    } else joined.push({ ...s });
  }
  return joined;
}

/** Two walls that continue each other in a line and are alike in every respect. */
function continuesInLine(w1: Draft, w2: Draft, verts: Vec2[]): boolean {
  if (w1.a === w2.b) return false; // a closed loop of two walls
  const d1 = unit(sub(verts[w1.b], verts[w1.a]));
  const d2 = unit(sub(verts[w2.b], verts[w2.a]));
  if (Math.abs(cross(d1, d2)) > 1e-6 || dot(d1, d2) <= 0) return false;
  if (w1.free || w2.free) return false;
  // a sloping wall is one piece of its own: merging would bend its slope
  if (w1.heightEnd !== undefined || w2.heightEnd !== undefined) return false;
  return (
    w1.height === w2.height &&
    w1.exterior === w2.exterior &&
    w1.roomLeft === w2.roomLeft &&
    w1.roomRight === w2.roomRight &&
    Math.abs(w1.left - w2.left) <= 1e-9 &&
    Math.abs(w1.right - w2.right) <= 1e-9
  );
}

/** Merges runs of collinear walls through nodes where nothing else meets (never across a node in `fixed`). */
export function mergeCollinear(drafts: Draft[], verts: Vec2[], fixed: ReadonlySet<number> = new Set()): Draft[] {
  let walls = drafts.slice();
  for (;;) {
    const touching = new Map<number, number[]>();
    walls.forEach((w, i) => {
      for (const node of [w.a, w.b]) touching.set(node, [...(touching.get(node) ?? []), i]);
    });
    let merged: Draft[] | null = null;
    for (const [node, ids] of touching) {
      if (ids.length !== 2 || fixed.has(node)) continue;
      // orient both walls so the first ends and the second starts at the node
      const first = walls[ids[0]].b === node ? walls[ids[0]] : reversed(walls[ids[0]]);
      const second = walls[ids[1]].a === node ? walls[ids[1]] : reversed(walls[ids[1]]);
      if (!continuesInLine(first, second, verts)) continue;
      const joined: Draft = { ...first, b: second.b, sources: joinSources(first.sources, second.sources) };
      merged = [...walls.filter((_, i) => i !== ids[0] && i !== ids[1]), joined];
      break;
    }
    if (!merged) return walls;
    walls = merged;
  }
}

export interface EndCorners {
  left: Vec2;
  right: Vec2;
}

interface Outgoing {
  key: string;
  d: Vec2;
  left: number;
  right: number;
  angle: number;
}

/** The two corner points of every wall end ("<index>:a", "<index>:b"), as seen looking away from the node. */
export function computeCorners(drafts: Draft[], verts: Vec2[]): Map<string, EndCorners> {
  const atNode = new Map<number, Outgoing[]>();
  drafts.forEach((w, i) => {
    const d = unit(sub(verts[w.b], verts[w.a]));
    const ends: [number, Outgoing][] = [
      [w.a, { key: `${i}:a`, d, left: w.left, right: w.right, angle: Math.atan2(d[1], d[0]) }],
      [w.b, { key: `${i}:b`, d: scale(d, -1), left: w.right, right: w.left, angle: Math.atan2(-d[1], -d[0]) }],
    ];
    for (const [node, end] of ends) atNode.set(node, [...(atNode.get(node) ?? []), end]);
  });

  const corners = new Map<string, EndCorners>();
  for (const [node, ends] of atNode) {
    const p = verts[node];
    ends.sort((x, y) => x.angle - y.angle);
    // start with square ends
    for (const e of ends) corners.set(e.key, { left: add(p, scale(leftOf(e.d), e.left)), right: add(p, scale(rightOf(e.d), e.right)) });
    if (ends.length < 2) continue;
    const reach = 4 * Math.max(...ends.map((e) => Math.max(e.left, e.right))) + 1e-9;
    ends.forEach((e, k) => {
      // the sector between e (counter-clockwise) and the next end is bounded by e's left face and the next one's right face
      const next = ends[(k + 1) % ends.length];
      const onE = add(p, scale(leftOf(e.d), e.left));
      const onNext = add(p, scale(rightOf(next.d), next.right));
      const turn = cross(e.d, next.d);
      if (Math.abs(turn) < 1e-4) return; // a straight continuation or an overlap: the square ends stay
      const corner = add(onE, scale(e.d, cross(sub(onNext, onE), next.d) / turn));
      if (norm(sub(corner, p)) > reach) return; // a very sharp angle keeps square ends
      corners.get(e.key)!.left = corner;
      corners.get(next.key)!.right = corner;
    });
  }
  return corners;
}

/** Removes repeated points and points in a straight line. */
export function cleanPolygon(points: Vec2[], eps: number): Vec2[] {
  let ring = points.filter((p, i) => norm(sub(p, points[(i + 1) % points.length])) > eps);
  for (;;) {
    if (ring.length <= 3) return ring;
    const straight = ring.findIndex((cur, i) => {
      const before = ring[(i + ring.length - 1) % ring.length];
      const after = ring[(i + 1) % ring.length];
      const [d1, d2] = [sub(cur, before), sub(after, cur)];
      return Math.abs(cross(unit(d1), unit(d2))) < 1e-7 && dot(d1, d2) > 0;
    });
    if (straight === -1) return ring;
    ring = ring.filter((_, j) => j !== straight);
  }
}
