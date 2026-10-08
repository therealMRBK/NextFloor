// Floor openings that overlap or touch are merged into one outline, so the floor can be cut
// around them (the triangulation needs holes that do not cross each other).

import { pointInPolygon, type Vec2 } from "../model.ts";

const EPS = 1e-4;

function area(ring: readonly Vec2[]): number {
  let a = 0;
  for (let i = 0; i < ring.length; i++) {
    const p = ring[i];
    const q = ring[(i + 1) % ring.length];
    a += p[0] * q[1] - q[0] * p[1];
  }
  return a / 2;
}

/** Parameter t on a-b where it crosses c-d (strictly inside both, not parallel), else null. */
function cross(a: Vec2, b: Vec2, c: Vec2, d: Vec2): number | null {
  const r: Vec2 = [b[0] - a[0], b[1] - a[1]];
  const s: Vec2 = [d[0] - c[0], d[1] - c[1]];
  const den = r[0] * s[1] - r[1] * s[0];
  if (Math.abs(den) < 1e-12) return null;
  const t = ((c[0] - a[0]) * s[1] - (c[1] - a[1]) * s[0]) / den;
  const u = ((c[0] - a[0]) * r[1] - (c[1] - a[1]) * r[0]) / den;
  return t > EPS && t < 1 - EPS && u > -EPS && u < 1 + EPS ? t : null;
}

/** Parameter t of point p on a-b when p lies on it (inside), else null. */
function onSegment(p: Vec2, a: Vec2, b: Vec2): number | null {
  const dx = b[0] - a[0];
  const dz = b[1] - a[1];
  const len2 = dx * dx + dz * dz;
  if (len2 < 1e-12) return null;
  const t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / len2;
  if (t <= EPS || t >= 1 - EPS) return null;
  const off = Math.abs((p[0] - a[0]) * dz - (p[1] - a[1]) * dx) / Math.sqrt(len2);
  return off < EPS ? t : null;
}

function overlaps(p: readonly Vec2[], q: readonly Vec2[]): boolean {
  for (let i = 0; i < p.length; i++) {
    const a = p[i];
    const b = p[(i + 1) % p.length];
    for (let j = 0; j < q.length; j++) {
      const c = q[j];
      const d = q[(j + 1) % q.length];
      if (cross(a, b, c, d) !== null || onSegment(c, a, b) !== null || onSegment(a, c, d) !== null) return true;
      if (Math.hypot(a[0] - c[0], a[1] - c[1]) < EPS) return true;
    }
  }
  return pointInPolygon(p[0], q) || pointInPolygon(q[0], p);
}

/** Outline of the union of overlapping polygons (counter-clockwise rings; islands inside are left out). */
function union(polys: Vec2[][]): Vec2[][] {
  const rings = polys.map((p) => (area(p) >= 0 ? p : [...p].reverse()));
  const segs: [Vec2, Vec2][] = [];
  rings.forEach((ring, ri) => {
    for (let i = 0; i < ring.length; i++) {
      const a = ring[i];
      const b = ring[(i + 1) % ring.length];
      // split the edge where other outlines cross or touch it
      const ts = [0, 1];
      rings.forEach((other, oi) => {
        if (oi === ri) return;
        for (let j = 0; j < other.length; j++) {
          const c = other[j];
          const d = other[(j + 1) % other.length];
          const t = cross(a, b, c, d) ?? onSegment(c, a, b);
          if (t !== null) ts.push(t);
        }
      });
      ts.sort((x, y) => x - y);
      for (let k = 1; k < ts.length; k++) {
        if (ts[k] - ts[k - 1] < EPS) continue;
        const p: Vec2 = [a[0] + (b[0] - a[0]) * ts[k - 1], a[1] + (b[1] - a[1]) * ts[k - 1]];
        const q: Vec2 = [a[0] + (b[0] - a[0]) * ts[k], a[1] + (b[1] - a[1]) * ts[k]];
        // the piece is on the outline when the point just outside it (to its right) is in no other outline
        const len = Math.hypot(q[0] - p[0], q[1] - p[1]);
        const out: Vec2 = [(p[0] + q[0]) / 2 + ((q[1] - p[1]) / len) * 1e-3, (p[1] + q[1]) / 2 - ((q[0] - p[0]) / len) * 1e-3];
        if (rings.some((other, oi) => oi !== ri && pointInPolygon(out, other))) continue;
        if (segs.some(([s, e]) => Math.hypot(s[0] - p[0], s[1] - p[1]) < EPS && Math.hypot(e[0] - q[0], e[1] - q[1]) < EPS)) continue;
        segs.push([p, q]);
      }
    }
  });
  // chain the pieces into closed rings
  const out: Vec2[][] = [];
  const used = new Set<number>();
  for (let s = 0; s < segs.length; s++) {
    if (used.has(s)) continue;
    used.add(s);
    const ring: Vec2[] = [segs[s][0]];
    let end = segs[s][1];
    for (let guard = 0; guard < segs.length; guard++) {
      if (Math.hypot(end[0] - ring[0][0], end[1] - ring[0][1]) < 1e-3) break;
      const next = segs.findIndex(([p], i) => !used.has(i) && Math.hypot(p[0] - end[0], p[1] - end[1]) < 1e-3);
      if (next < 0) break;
      used.add(next);
      ring.push(segs[next][0]);
      end = segs[next][1];
    }
    if (ring.length >= 3 && area(ring) > 1e-6) out.push(ring);
  }
  return out;
}

/** Floor openings with the overlapping or touching ones merged into one outline each. */
export function mergeHoles(holes: Vec2[][]): Vec2[][] {
  const valid = holes.filter((h) => h.length >= 3);
  // group the openings that overlap, directly or through others
  const group = valid.map((_, i) => i);
  const find = (i: number): number => (group[i] === i ? i : (group[i] = find(group[i])));
  for (let i = 0; i < valid.length; i++) {
    for (let j = i + 1; j < valid.length; j++) {
      if (find(i) !== find(j) && overlaps(valid[i], valid[j])) group[find(j)] = find(i);
    }
  }
  const groups = new Map<number, Vec2[][]>();
  valid.forEach((h, i) => groups.set(find(i), [...(groups.get(find(i)) ?? []), h]));
  return [...groups.values()].flatMap((g) => (g.length === 1 ? g : union(g)));
}

function distToSegment(p: Vec2, a: Vec2, b: Vec2): number {
  const dx = b[0] - a[0];
  const dz = b[1] - a[1];
  const len2 = dx * dx + dz * dz;
  const t = len2 ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / len2)) : 0;
  return Math.hypot(p[0] - a[0] - dx * t, p[1] - a[1] - dz * t);
}

/** Whether an opening lies in a room; corners on the room's edge (snapped to a wall) count as inside. */
export function holeInRoom(hole: readonly Vec2[], room: readonly Vec2[], tolerance = 0.03): boolean {
  return hole.every(
    (p) => pointInPolygon(p, room) || room.some((a, i) => distToSegment(p, a, room[(i + 1) % room.length]) <= tolerance),
  );
}

/** An opening moved inwards by d on every side, so one on the room's edge stays a hole in the floor. */
export function insetHole(hole: readonly Vec2[], d: number): Vec2[] {
  const ring = area(hole) >= 0 ? hole : [...hole].reverse();
  const normal = (a: Vec2, b: Vec2): Vec2 => {
    const l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    // left of a counter-clockwise edge is inside
    return [-(b[1] - a[1]) / l, (b[0] - a[0]) / l];
  };
  return ring.map((p, i) => {
    const n1 = normal(ring[(i - 1 + ring.length) % ring.length], p);
    const n2 = normal(p, ring[(i + 1) % ring.length]);
    const k = 1 + n1[0] * n2[0] + n1[1] * n2[1];
    if (k < 0.1) return p;
    return [p[0] + ((n1[0] + n2[0]) / k) * d, p[1] + ((n1[1] + n2[1]) / k) * d] as Vec2;
  });
}
