// "Close gaps": rooms drawn with a gap between them (for example from inside measurements) get their facing edges moved
// onto one common centre line, so a single interior wall replaces two exterior walls. The gaps that were closed also
// suggest the thickness of interior walls.

import { signedArea, type Room, type Vec2 } from "../model.ts";
import { cross, dot, norm, sub } from "./vec2.ts";

export interface GapResult {
  rooms: Room[];
  /** The width of every closed gap (negative for small overlaps). */
  gaps: number[];
}

/** An edge of a room, put in a canonical orientation so edges of different rooms can be compared. */
interface Side {
  room: number;
  index: number;
  /** The direction, with a canonical sign (angle in [0, π)). */
  dir: Vec2;
  /** The normal belonging to that direction. */
  normal: Vec2;
  /** Where the edge's line is along the normal. */
  offset: number;
  /** +1 when the room's outside lies on the normal's side, -1 otherwise. */
  outside: 1 | -1;
  /** The covered range along the direction. */
  from: number;
  to: number;
  /** How far the room reaches along the normal: its lowest and highest coordinate. */
  reach: [number, number];
}

const PARALLEL_TOLERANCE = 0.05;
const MIN_SHARED_LENGTH = 0.2;
/** The widest gap between two rooms that still counts as one wall between them. */
const MAX_GAP = 0.6;
/** Rooms that overlap by up to this much are moved apart onto one line as well (a room pushed between two others rarely lands exactly, #121). */
const MAX_OVERLAP = 0.6;
/** In an overlap each room must reach this far past the other one's wall, else it is a niche or closet lying inside the other room. */
const OVERLAP_MARGIN = 0.05;

function sidesOf(rooms: readonly Room[]): Side[] {
  const sides: Side[] = [];
  rooms.forEach((room, r) => {
    const pts = room.points;
    if (pts.length < 3) return;
    const counterClockwise = signedArea(pts) >= 0;
    pts.forEach((a, i) => {
      const b = pts[(i + 1) % pts.length];
      const length = norm(sub(b, a));
      if (length < 0.05) return;
      let dir: Vec2 = [(b[0] - a[0]) / length, (b[1] - a[1]) / length];
      // counter-clockwise in x/z: the outside is on the right of a to b
      const outward: Vec2 = counterClockwise ? [dir[1], -dir[0]] : [-dir[1], dir[0]];
      if (dir[1] < -1e-9 || (Math.abs(dir[1]) <= 1e-9 && dir[0] < 0)) dir = [-dir[0], -dir[1]];
      const normal: Vec2 = [-dir[1], dir[0]];
      const [ta, tb] = [dot(a, dir), dot(b, dir)];
      const across = pts.map((p) => dot(p, normal));
      sides.push({ room: r, index: i, dir, normal, offset: dot(a, normal), outside: dot(outward, normal) > 0 ? 1 : -1, from: Math.min(ta, tb), to: Math.max(ta, tb), reach: [Math.min(...across), Math.max(...across)] });
    });
  });
  return sides;
}

/** Whether the room of `s` reaches past `line` (a coordinate along its normal) on its inner side, by a clear margin. */
function reachesPast(s: Side, line: number): boolean {
  return s.outside === 1 ? s.reach[0] < line - OVERLAP_MARGIN : s.reach[1] > line + OVERLAP_MARGIN;
}

/** The gap between two sides that face each other across it, or null when they do not form one. */
function gapBetween(e: Side, f: Side, maxGap: number, maxOverlap: number, tolerance = PARALLEL_TOLERANCE): number | null {
  if (e.room === f.room) return null;
  if (Math.abs(cross(e.dir, f.dir)) > tolerance) return null;
  if (e.outside === f.outside) return null; // facing each other means their outsides point at each other
  const gap = (f.offset - e.offset) * e.outside;
  if (gap > maxGap || gap < -maxOverlap || Math.abs(gap) < 1e-4) return null;
  // a room lying inside the other one (a niche, a wardrobe) must not pull the outer wall inwards
  if (gap < 0 && (!reachesPast(e, f.offset) || !reachesPast(f, e.offset))) return null;
  return Math.min(e.to, f.to) - Math.max(e.from, f.from) < MIN_SHARED_LENGTH ? null : gap;
}

const thousandths = (v: number) => Math.round(v * 1000) / 1000;

export function closeGaps(rooms: readonly Room[], maxGap = 0.6, maxOverlap = MAX_OVERLAP): GapResult {
  const sides = sidesOf(rooms);
  const leader = sides.map((_, i) => i);
  const root = (i: number): number => (leader[i] === i ? i : (leader[i] = root(leader[i])));
  const gaps: number[] = [];
  const paired = new Set<number>();
  const candidates: [number, number, number][] = [];
  for (let i = 0; i < sides.length; i++) {
    for (let j = i + 1; j < sides.length; j++) {
      const gap = gapBetween(sides[i], sides[j], maxGap, maxOverlap);
      if (gap !== null) candidates.push([i, j, gap]);
    }
  }
  // narrowest gaps first; a pair that would pull two different walls of one room onto the same line is left out, so a
  // wall that changes its thickness keeps its step instead of being flattened to one line (#65)
  candidates.sort((a, b) => Math.abs(a[2]) - Math.abs(b[2]));
  const members = new Map<number, number[]>(sides.map((_, i) => [i, [i]]));
  const clash = (a: number[], b: number[]) => a.some((x) => b.some((y) => sides[x].room === sides[y].room && Math.abs(sides[x].offset - sides[y].offset) >= 2e-3));
  for (const [i, j, gap] of candidates) {
    const [ri, rj] = [root(i), root(j)];
    if (ri !== rj) {
      if (clash(members.get(ri)!, members.get(rj)!)) continue;
      leader[ri] = rj;
      members.set(rj, [...members.get(rj)!, ...members.get(ri)!]);
      members.delete(ri);
    }
    gaps.push(thousandths(gap));
    paired.add(i).add(j);
  }
  // a straight wall drawn as several collinear edges moves as one, otherwise a corner would appear inside it
  const at = new Map(sides.map((s, i) => [`${s.room}:${s.index}`, i]));
  for (let changed = paired.size > 0; changed; ) {
    changed = false;
    sides.forEach((s, i) => {
      const next = at.get(`${s.room}:${(s.index + 1) % rooms[s.room].points.length}`);
      if (next === undefined || next === i) return;
      const n = sides[next];
      const collinear = Math.abs(cross(s.dir, n.dir)) < 1e-6 && Math.abs(s.offset - n.offset) < 2e-3 && s.outside === n.outside;
      if (!collinear || paired.has(i) === paired.has(next)) return;
      paired.add(i).add(next);
      changed = true;
    });
  }
  // a paired run joins the group of its neighbour (checked again below, after the groups are known)
  sides.forEach((s, i) => {
    const next = at.get(`${s.room}:${(s.index + 1) % rooms[s.room].points.length}`);
    if (next === undefined || next === i || !paired.has(i) || !paired.has(next)) return;
    const n = sides[next];
    if (Math.abs(cross(s.dir, n.dir)) < 1e-6 && Math.abs(s.offset - n.offset) < 2e-3 && s.outside === n.outside) leader[root(i)] = root(next);
  });
  const copy = () => rooms.map((r) => ({ ...r, points: r.points.map((p) => [p[0], p[1]] as Vec2) }));
  if (gaps.length === 0) return { rooms: copy(), gaps };

  // every group of facing sides meets on the mean of its lines
  const groups = new Map<number, number[]>();
  for (const i of paired) groups.set(root(i), [...(groups.get(root(i)) ?? []), i]);
  // at most one shift per group and vertex, so collinear neighbours do not move a corner twice
  const shifts = rooms.map((r) => r.points.map(() => new Map<number, Vec2>()));
  for (const [group, members] of groups) {
    // a wall counts once, however many collinear edges it consists of
    const walls = new Map(members.map((i) => [`${sides[i].room}:${Math.round(sides[i].offset * 500)}`, sides[i].offset]));
    const target = [...walls.values()].reduce((sum, o) => sum + o, 0) / walls.size;
    for (const i of members) {
      const s = sides[i];
      const move: Vec2 = [s.normal[0] * (target - s.offset), s.normal[1] * (target - s.offset)];
      shifts[s.room][s.index].set(group, move);
      shifts[s.room][(s.index + 1) % rooms[s.room].points.length].set(group, move);
    }
  }
  const moved = rooms.map((room, r) => ({
    ...room,
    points: room.points.map((p, k): Vec2 => {
      const total = [...shifts[r][k].values()].reduce<Vec2>((sum, d) => [sum[0] + d[0], sum[1] + d[1]], [p[0], p[1]]);
      return [thousandths(total[0]), thousandths(total[1])];
    }),
  }));
  return { rooms: moved, gaps };
}

/** The interior wall thickness the closed gaps suggest (their median), or null when there were overlaps only. */
export function suggestedThickness(gaps: readonly number[]): number | null {
  const widths = gaps.filter((g) => g > 0.04).sort((a, b) => a - b);
  if (widths.length === 0) return null;
  return Math.min(0.5, Math.max(0.08, Math.round(widths[Math.floor(widths.length / 2)] * 100) / 100));
}

/** Two room edges that face each other across a gap (rooms drawn by their inner faces), see `facingGaps`. */
export interface FacingGap {
  /** Index of the room (in the list given) and of its edge, for both sides. */
  a: { room: number; edge: number };
  b: { room: number; edge: number };
  /** The direction both run along (canonical sign), the normal belonging to it, and a's side: the gap lies on a's outside. */
  dir: Vec2;
  normal: Vec2;
  /** The line of a along the normal, and of b. */
  offsetA: number;
  offsetB: number;
  /** The width of the gap (metres, positive). */
  gap: number;
  /** The range they share along `dir`. */
  from: number;
  to: number;
}

/** Edges that face each other across a gap, narrowest first: the walls between rooms that are drawn by their inner faces. */
export function facingGaps(rooms: readonly Room[], maxGap = MAX_GAP, minGap = 0.01): FacingGap[] {
  const sides = sidesOf(rooms);
  const found: FacingGap[] = [];
  for (let i = 0; i < sides.length; i++) {
    for (let j = i + 1; j < sides.length; j++) {
      const [e, f] = [sides[i], sides[j]];
      const gap = gapBetween(e, f, maxGap, 0, 0.02);
      if (gap === null || gap < minGap) continue;
      found.push({ a: { room: e.room, edge: e.index }, b: { room: f.room, edge: f.index }, dir: e.dir, normal: e.normal, offsetA: e.offset, offsetB: f.offset, gap, from: Math.max(e.from, f.from), to: Math.min(e.to, f.to) });
    }
  }
  return found.sort((x, y) => x.gap - y.gap);
}
