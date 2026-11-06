// A glass wall that follows a curved wall. NextFloor stores a curved wall as a chain of short straight
// room edges, and an opening is a straight piece of one edge. A full-width pane therefore becomes one
// opening per edge, all carrying the same `front` id. The 3D view draws them as one pane, without a
// jamb where two of them meet. Each piece is an ordinary opening on its own edge with a legal offset
// and width, so every part of NextFloor that reads openings keeps working without knowing about arcs.

import { uid, type Opening, type Room, type Vec2 } from "../model.ts";

/** Edges that meet at a sharper angle are a corner, not a curve: a front stops there. */
const MAX_BEND = (30 * Math.PI) / 180;

/** The shortest piece worth keeping; anything shorter would only show as a sliver of frame. */
export const MIN_PIECE = 0.05;

/** Length of every edge of the room outline. */
export function edgeLengths(room: Room): number[] {
  const n = room.points.length;
  return room.points.map((a, i) => {
    const b = room.points[(i + 1) % n];
    return Math.hypot(b[0] - a[0], b[1] - a[1]);
  });
}

/** Length of the whole room outline. */
export function outlineLength(room: Room): number {
  return edgeLengths(room).reduce((sum, l) => sum + l, 0);
}

/** Arc length from points[0] to points[edge], once around the outline. */
export function edgeStart(room: Room, edge: number): number {
  const lengths = edgeLengths(room);
  let at = 0;
  for (let i = 0; i < edge && i < lengths.length; i++) at += lengths[i];
  return at;
}

/** The angle the outline turns through from edge `i` to the next one. */
function bend(room: Room, i: number): number {
  const n = room.points.length;
  const [a, b, c] = [room.points[i], room.points[(i + 1) % n], room.points[(i + 2) % n]];
  const u: Vec2 = [b[0] - a[0], b[1] - a[1]];
  const v: Vec2 = [c[0] - b[0], c[1] - b[1]];
  const [lu, lv] = [Math.hypot(u[0], u[1]), Math.hypot(v[0], v[1])];
  if (lu < 1e-9 || lv < 1e-9) return 0;
  return Math.acos(Math.max(-1, Math.min(1, (u[0] * v[0] + u[1] * v[1]) / (lu * lv))));
}

/** One straight piece of a front, as a normal opening on its own edge. */
export interface FrontPiece {
  edge: number;
  /** Centre of the piece from points[edge], and its length. */
  offset: number;
  width: number;
}

/**
 * The pieces an arc from `from` (arc length from points[0]) of `width` covers, one per edge it runs
 * along, in order. Null when the arc is empty. A front stops at a sharp corner instead of bending
 * around it, and a sliver at either end is dropped rather than shown as a few centimetres of frame.
 */
export function frontPieces(room: Room, from: number, width: number): FrontPiece[] | null {
  const lengths = edgeLengths(room);
  const n = lengths.length;
  const total = lengths.reduce((sum, l) => sum + l, 0);
  if (n < 3 || !(total > 0) || !(width > 0)) return null;
  const wanted = Math.min(width, total);
  const start = ((from % total) + total) % total;
  // the edge the front starts on
  let edge = 0;
  let at = 0;
  while (edge < n - 1 && start >= at + lengths[edge]) {
    at += lengths[edge];
    edge++;
  }
  let local = start - at;
  let left = wanted;
  const runs: { edge: number; t0: number; t1: number }[] = [];
  for (let guard = 0; guard <= n && left > 1e-9; guard++) {
    const span = lengths[edge] - local;
    const take = Math.min(left, span);
    if (take > 1e-9) runs.push({ edge, t0: local, t1: local + take });
    left -= take;
    local = 0;
    const next = (edge + 1) % n;
    if (left > 1e-9 && bend(room, edge) > MAX_BEND) break;
    edge = next;
  }
  // a few millimetres at either end would only show as a sliver of frame
  while (runs.length > 1 && runs[0].t1 - runs[0].t0 < MIN_PIECE) runs.shift();
  while (runs.length > 1 && runs[runs.length - 1].t1 - runs[runs.length - 1].t0 < MIN_PIECE) runs.pop();
  if (!runs.length) return null;
  return runs.map((run) => ({ edge: run.edge, offset: (run.t0 + run.t1) / 2, width: run.t1 - run.t0 }));
}

/**
 * The arc a stored front covers, read back from its pieces: where it starts, in arc length from
 * points[0], and how long it is. Pieces carry their centre, so the first one gives the start.
 */
export function frontExtent(room: Room, pieces: readonly Opening[]): { from: number; width: number } | null {
  const first = pieces[0];
  if (!first) return null;
  return {
    from: edgeStart(room, first.edge) + first.offset - first.width / 2,
    width: pieces.reduce((sum, o) => sum + o.width, 0),
  };
}

/** The pieces of the front an opening belongs to, in order along the wall (just itself for a plain one). */
export function frontOf(openings: readonly Opening[], o: Opening): Opening[] {
  if (!o.front) return [o];
  return openings.filter((x) => x.front === o.front);
}

/** Arc length from points[0] of the outline point nearest `world`; used to drag a front along a wall. */
export function arcOfNearest(room: Room, world: Vec2): number {
  const n = room.points.length;
  let best = Infinity;
  let found = 0;
  let at = 0;
  for (let i = 0; i < n; i++) {
    const a = room.points[i];
    const b = room.points[(i + 1) % n];
    const dx = b[0] - a[0];
    const dz = b[1] - a[1];
    const len = Math.hypot(dx, dz);
    if (len < 1e-6) continue;
    const t = Math.max(0, Math.min(len, ((world[0] - a[0]) * dx + (world[1] - a[1]) * dz) / len));
    const d = Math.hypot(world[0] - (a[0] + (dx * t) / len), world[1] - (a[1] + (dz * t) / len));
    if (d < best) {
      best = d;
      found = at + t;
    }
    at += len;
  }
  return found;
}

/** Where a front of `width` may start on the outline, so that it stays on it as a whole. */
export function frontRange(room: Room, width: number): [number, number] {
  const total = outlineLength(room);
  const w = Math.min(width, total);
  return [0, Math.max(0, total - w)];
}

/** Whether an opening is wide enough to leave its own edge and become a front of several pieces. */
export function spansEdges(room: Room, edge: number, width: number): boolean {
  const lengths = edgeLengths(room);
  const own = lengths[edge] ?? 0;
  // a pane a few centimetres wider than its edge still fits once placement clamps it
  return width > own + 0.1;
}

/**
 * Replace the front that `o` belongs to with a pane of `width` starting at `from` (arc length from
 * points[0]). Every piece keeps the other fields of `o` and the first one keeps its id, so the selection
 * survives; the rest get ids from `id`. A pane that fits on one edge again loses its `front` id.
 * Returns the new list, or null when the arc is empty.
 */
export function withFront(openings: readonly Opening[], room: Room, o: Opening, from: number, width: number, id: () => string = () => uid("opening")): Opening[] | null {
  const pieces = frontPieces(room, from, width);
  if (!pieces) return null;
  const group = frontOf(openings, o);
  const ids = new Set(group.map((x) => x.id));
  const frontId = pieces.length > 1 ? (group[0].front ?? `front-${group[0].id}`) : null;
  const made = pieces.map((piece, k) => ({
    ...o,
    id: k === 0 ? group[0].id : id(),
    edge: piece.edge,
    offset: piece.offset,
    width: piece.width,
    front: frontId,
  }));
  const out: Opening[] = [];
  let placed = false;
  for (const x of openings) {
    if (!ids.has(x.id)) {
      out.push(x);
      continue;
    }
    if (!placed) {
      out.push(...made);
      placed = true;
    }
  }
  return out;
}
