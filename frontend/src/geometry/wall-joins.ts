// Free-standing walls that meet: drawn by hand, their ends rarely end exactly on each other (a wall drawn by its face ends half a
// thickness away from the middle of the wall it meets, the grid adds a few centimetres). The two walls then cross near their ends:
// a notch on the outside in the plan, a step in 3D. This puts such ends where they belong:
//  - a corner (two ends near each other): both ends go to the point where the two middle lines cross, so the walls share a
//    corner and are mitred like room walls;
//  - a junction (an end at the side of another wall): the end stops at that wall's face.
// Pure functions: nothing here knows the editor.

import type { FreeWall, Opening, Vec2 } from "../model.ts";

/** How far beyond half a wall's thickness an end may be off and still be taken as "meant to meet" (metres). */
export const JOIN_REACH = 0.12;

export interface WallJoin {
  id: string;
  a: Vec2;
  b: Vec2;
  /** How far the start moved along the wall (+ = the wall got longer at a): openings in it keep their place by this much. */
  startMoved: number;
}

const round = (v: number): number => Math.round(v * 1000) / 1000;

/**
 * The walls of `walls` whose ends change when meeting ends are closed. `only` limits it to joins this wall takes part in (the wall
 * just drawn or dragged, with the partner of a corner); without it every wall of the floor is looked at.
 */
export function wallJoins(walls: readonly FreeWall[], interior: number, only?: string): WallJoin[] {
  const thick = (w: FreeWall) => w.thickness ?? interior;
  const next = new Map<string, { a: Vec2; b: Vec2 }>();
  const moved = (w: FreeWall) => {
    let m = next.get(w.id);
    if (!m) next.set(w.id, (m = { a: [w.a[0], w.a[1]], b: [w.b[0], w.b[1]] }));
    return m;
  };
  for (const w of walls) {
    const len = Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]);
    if (len < 0.05) continue;
    const dir: Vec2 = [(w.b[0] - w.a[0]) / len, (w.b[1] - w.a[1]) / len];
    for (const end of ["a", "b"] as const) {
      const e = w[end];
      // pointing out of the wall at this end
      const u: Vec2 = end === "a" ? [-dir[0], -dir[1]] : dir;
      let best: { to: Vec2; off: number; corner: boolean; partner: string } | null = null;
      for (const v of walls) {
        if (v.id === w.id) continue;
        const vLen = Math.hypot(v.b[0] - v.a[0], v.b[1] - v.a[1]);
        if (vLen < 0.05) continue;
        const d: Vec2 = [(v.b[0] - v.a[0]) / vLen, (v.b[1] - v.a[1]) / vLen];
        const sin = u[0] * d[1] - u[1] * d[0];
        // walls running (nearly) alongside each other do not meet in a corner
        if (Math.abs(sin) < 0.3) continue;
        // e + u·s = v.a + d·t
        const [rx, rz] = [v.a[0] - e[0], v.a[1] - e[1]];
        const s = (rx * d[1] - rz * d[0]) / sin;
        const t = (rx * u[1] - rz * u[0]) / sin;
        if (Math.abs(s) > thick(v) / 2 / Math.abs(sin) + JOIN_REACH) continue;
        const margin = thick(w) / 2 / Math.abs(sin) + JOIN_REACH;
        if (t < -margin || t > vLen + margin) continue;
        const corner = t < margin || t > vLen - margin;
        const cross: Vec2 = [e[0] + u[0] * s, e[1] + u[1] * s];
        // a junction: back off the middle line to the face of the other wall
        const back = corner ? 0 : thick(v) / 2 / Math.abs(sin);
        const to: Vec2 = [round(cross[0] - u[0] * back), round(cross[1] - u[1] * back)];
        const off = Math.hypot(to[0] - e[0], to[1] - e[1]);
        // the nearest wall wins; a corner before a junction at the same distance
        if (!best || off < best.off - 1e-6 || (Math.abs(off - best.off) <= 1e-6 && corner && !best.corner)) best = { to, off, corner, partner: v.id };
      }
      if (!best || best.off < 0.0015) continue;
      if (only && w.id !== only && !(best.corner && best.partner === only)) continue;
      moved(w)[end] = best.to;
    }
  }
  const out: WallJoin[] = [];
  for (const w of walls) {
    const m = next.get(w.id);
    if (!m) continue;
    // a wall whose two ends would fall together is left alone
    if (Math.hypot(m.b[0] - m.a[0], m.b[1] - m.a[1]) < 0.1) continue;
    const len = Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]);
    const startMoved = ((w.a[0] - m.a[0]) * (w.b[0] - w.a[0]) + (w.a[1] - m.a[1]) * (w.b[1] - w.a[1])) / len;
    out.push({ id: w.id, a: m.a, b: m.b, startMoved: round(startMoved) });
  }
  return out;
}

/** Applies joins to the walls of a floor (in place) and keeps the openings in those walls where they are. */
export function applyWallJoins(floor: { walls?: FreeWall[]; openings: Opening[] }, joins: readonly WallJoin[]): number {
  for (const join of joins) {
    const wall = (floor.walls ?? []).find((w) => w.id === join.id);
    if (!wall) continue;
    wall.a = join.a;
    wall.b = join.b;
    if (join.startMoved) for (const o of floor.openings) if (o.wall === join.id) o.offset = Math.max(0, round(o.offset + join.startMoved));
  }
  return joins.length;
}
