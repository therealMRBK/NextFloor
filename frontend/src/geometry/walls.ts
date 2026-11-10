// Walls from room polygons.
//
// Rooms are drawn along the centre line of interior walls. An edge shared by two rooms becomes one interior wall
// centred on it; an edge with a room on one side only becomes an exterior wall growing outwards. Edges are split wherever
// a vertex of another room lies on them, so partly shared edges and T-junctions work. At every node the ends of the
// walls are mitred by intersecting the face lines of the neighbouring walls.

import { pointInPolygon, signedArea, type FreeWall, type Opening, type Room, type Vec2 } from "../model.ts";
import { facingGaps, type FacingGap } from "./gaps.ts";
import { cleanPolygon, computeCorners, mergeCollinear, type Draft, type WallSource } from "./wall-corners.ts";
import { add, cross, dot, norm, scale, sub, unit } from "./vec2.ts";

export type { WallSource };

export interface Wall {
  id: string;
  a: Vec2;
  b: Vec2;
  /** Distance of the left face (normal (-dz, dx)) from the line a-b. */
  left: number;
  /** Distance of the right face (normal (dz, -dx)) from the line a-b. */
  right: number;
  exterior: boolean;
  /** The room on the left and right of a to b. Exterior walls have their room on the left. */
  roomLeft: string | null;
  roomRight: string | null;
  sources: WallSource[];
  /** The footprint, counter-clockwise, mitred at both ends. */
  footprint: Vec2[];
  /** Set for a free-standing wall drawn on its own (its id). */
  free?: string;
  /** Its own height in metres (at `a`); absent means the full height of the floor. */
  height?: number;
  /** A sloping wall: the height at `b` (the top runs straight from `height` at a to this one at b; it may rise above the floor height). */
  heightEnd?: number;
  /** A hanging free wall (#114): its bottom edge at `a` and at `b` (equal for a level one). */
  bottom?: [number, number];
  /** Fills the gap between two rooms drawn by their inner faces (`WallOptions.asDrawn`): `left` is 0 on the first room's face, `right` reaches the other room's face, so it stands into neither room. */
  between?: true;
}

export interface WallOptions {
  exterior: number;
  interior: number;
  /** Rooms stay as drawn (inner faces): where two rooms face each other across a gap, one wall fills the gap instead of an exterior wall growing out of each room. */
  asDrawn?: boolean;
  /** Vertices closer than this are merged (metres). */
  eps?: number;
}

export interface WallResult {
  walls: Wall[];
  /** Pairs of rooms that overlap along an edge in the same direction (rooms drawn on top of each other). */
  warnings: string[];
  /** Pairs of rooms whose shared wall is left out ("no wall"): they form one space, also for the light. */
  open: [string, string][];
}

/** A stretch of a room edge between two vertices (indices). */
interface Piece {
  u: number;
  v: number;
  room: string;
  edge: number;
  t0: number;
  t1: number;
  /** True when u lies at t0 (the room is stored counter-clockwise), false when u lies at t1. */
  forward: boolean;
}

interface RoomEdge {
  u: number;
  v: number;
  room: string;
  edge: number;
  /** True when u is points[edge], false when the room was stored clockwise. */
  forward: boolean;
}

/** Collects vertices, merging points that are closer than `eps`. */
function vertexList(eps: number) {
  const points: Vec2[] = [];
  return {
    points,
    idOf(p: Vec2): number {
      const found = points.findIndex((q) => Math.abs(q[0] - p[0]) <= eps && Math.abs(q[1] - p[1]) <= eps);
      if (found >= 0) return found;
      points.push([p[0], p[1]]);
      return points.length - 1;
    },
  };
}
type VertexList = ReturnType<typeof vertexList>;

/** Every room edge, running counter-clockwise, remembering the stored edge it came from. */
function roomEdges(rooms: readonly Room[], vertices: VertexList): RoomEdge[] {
  const edges: RoomEdge[] = [];
  for (const room of rooms) {
    const pts = room.points;
    if (pts.length < 3 || Math.abs(signedArea(pts)) < 1e-6) continue;
    const counterClockwise = signedArea(pts) > 0;
    const ids = pts.map((p) => vertices.idOf(p));
    ids.forEach((start, i) => {
      const end = ids[(i + 1) % ids.length];
      if (start === end) return;
      edges.push(counterClockwise ? { u: start, v: end, room: room.id, edge: i, forward: true } : { u: end, v: start, room: room.id, edge: i, forward: false });
    });
  }
  return edges;
}

/** Splits every edge at the vertices that lie on it. */
function splitEdges(edges: RoomEdge[], verts: Vec2[], eps: number): Piece[] {
  const pieces: Piece[] = [];
  for (const e of edges) {
    const [from, to] = [verts[e.u], verts[e.v]];
    const d = sub(to, from);
    const length = norm(d);
    const dir = scale(d, 1 / length);
    const onEdge = verts
      .map((v, id) => ({ id, rel: sub(v, from) }))
      .filter(({ id, rel }) => id !== e.u && id !== e.v && dot(rel, dir) > eps && dot(rel, dir) < length - eps && Math.abs(cross(dir, rel)) <= eps)
      .map(({ id, rel }) => ({ t: dot(rel, dir), id }))
      .sort((x, y) => x.t - y.t);
    const stops = [{ t: 0, id: e.u }, ...onEdge, { t: length, id: e.v }];
    for (let k = 0; k + 1 < stops.length; k++) {
      const [s, n] = [stops[k], stops[k + 1]];
      // distances are measured along the stored edge, from its stored start point
      pieces.push({ u: s.id, v: n.id, room: e.room, edge: e.edge, t0: e.forward ? s.t : length - n.t, t1: e.forward ? n.t : length - s.t, forward: e.forward });
    }
  }
  return pieces;
}

const sourceOf = (p: Piece): WallSource => ({ room_id: p.room, edge: p.edge, t0: p.t0, t1: p.t1 });

/** Reads what the rooms say about heights and thicknesses of their edges. */
function edgeSettings(rooms: readonly Room[], pieces: Piece[]) {
  const roomById = new Map(rooms.map((r) => [r.id, r]));
  // a split edge may carry one height per part, in order along the edge
  const partStarts = new Map<string, number[]>();
  for (const p of pieces) {
    const key = `${p.room}:${p.edge}`;
    partStarts.set(key, [...(partStarts.get(key) ?? []), p.t0].sort((a, b) => a - b));
  }
  const heightSet = (p: Piece): number | null | undefined => {
    const h = roomById.get(p.room)?.wall_heights?.[p.edge];
    if (!Array.isArray(h)) return h;
    return h[(partStarts.get(`${p.room}:${p.edge}`) ?? []).indexOf(p.t0)] ?? null;
  };
  /** The sloping edge of a piece: its start and end height over the whole room edge (both set, a whole edge only). */
  const slopeOf = (p: Piece): { from: number; to: number; length: number } | null => {
    const room = roomById.get(p.room);
    const [from, to] = [room?.wall_heights?.[p.edge], room?.wall_slopes?.[p.edge]];
    if (!room || typeof from !== "number" || typeof to !== "number" || from <= 0 || to <= 0) return null;
    const [a, b] = [room.points[p.edge], room.points[(p.edge + 1) % room.points.length]];
    return { from, to, length: Math.hypot(b[0] - a[0], b[1] - a[1]) };
  };
  /** The heights a piece sets at its two ends (u, v); null where it sets none. */
  const endsOf = (p: Piece): [number | null, number | null] => {
    const slope = slopeOf(p);
    if (!slope || slope.length < 1e-9) {
      const h = heightSet(p);
      return typeof h === "number" && h > 0 ? [h, h] : [null, null];
    }
    const at = (t: number) => slope.from + ((slope.to - slope.from) * t) / slope.length;
    return p.forward ? [at(p.t0), at(p.t1)] : [at(p.t1), at(p.t0)];
  };
  return {
    /**
     * The wall's own height at its two ends: the lowest one set on its room edges at each end (a shared wall takes the lower
     * setting). The list starts with the piece the wall's direction follows; a partner runs the other way.
     */
    heightsOf(list: Piece[]): { a?: number; b?: number } {
      let [a, b] = [Infinity, Infinity];
      for (const p of list) {
        const [u, v] = endsOf(p);
        const [atA, atB] = p === list[0] ? [u, v] : [v, u];
        if (atA !== null) a = Math.min(a, atA);
        if (atB !== null) b = Math.min(b, atB);
      }
      // no height set by hand: the rooms' own ceilings – the higher one, so the wall closes the taller room; a room without
      // a ceiling of its own stands for the full floor height
      const ceilings = list.map((p) => roomById.get(p.room)?.ceiling);
      if (ceilings.every((c): c is number => typeof c === "number" && c > 0)) {
        const top = Math.max(...ceilings);
        if (a === Infinity) a = top;
        if (b === Infinity) b = top;
      }
      return { ...(a < Infinity ? { a } : {}), ...(b < Infinity ? { b } : {}) };
    },
    /** A thickness set on a room edge; a shared wall takes the thicker one of its two rooms. */
    thicknessOf(list: Piece[]): number | undefined {
      const values = list
        .map((p) => {
          const entry = roomById.get(p.room)?.wall_thickness?.[p.edge];
          return Array.isArray(entry) ? entry[(partStarts.get(`${p.room}:${p.edge}`) ?? []).indexOf(p.t0)] : entry;
        })
        .filter((t): t is number => typeof t === "number" && t > 0);
      return values.length ? Math.max(...values) : undefined;
    },
    /** A height of 0 on an edge means no wall at all: an open plan whose rooms share one space. */
    hasNoWall: (list: Piece[]): boolean => list.some((p) => heightSet(p) === 0),
  };
}

type EdgeSettings = ReturnType<typeof edgeSettings>;

/** Walls between pieces: two rooms in opposite directions make an interior wall, one room an exterior wall. */
/** The bottom edge of a hanging free wall (#114) at a and b; nothing for a wall that stands on the floor. */
export function freeBottom(w: Pick<FreeWall, "bottom" | "bottom_end">): { bottom?: [number, number] } {
  const b0 = typeof w.bottom === "number" && w.bottom > 0 ? w.bottom : 0;
  const b1 = typeof w.bottom_end === "number" && w.bottom_end >= 0 ? w.bottom_end : b0;
  return b0 > 0 || b1 > 0 ? { bottom: [b0, b1] } : {};
}

/** The draft fields for a wall's heights: a level wall has one, a sloping one its start and end. */
function heightFields(h: { a?: number; b?: number }): { height?: number; heightEnd?: number } {
  const round = (v: number) => Math.round(v * 1e6) / 1e6;
  if (h.a === undefined || h.b === undefined) return h.a !== undefined ? { height: round(h.a) } : h.b !== undefined ? { height: round(h.b) } : {};
  return Math.abs(h.a - h.b) < 1e-6 ? { height: round(h.a) } : { height: round(h.a), heightEnd: round(h.b) };
}

function pairPieces(pieces: Piece[], settings: EdgeSettings, options: WallOptions, warnings: string[], consumed: ReadonlySet<Piece>): { drafts: Draft[]; open: [string, string][] } {
  const groups = new Map<string, Piece[]>();
  for (const p of pieces) {
    if (consumed.has(p)) continue;
    const key = p.u < p.v ? `${p.u}-${p.v}` : `${p.v}-${p.u}`;
    groups.set(key, [...(groups.get(key) ?? []), p]);
  }
  const drafts: Draft[] = [];
  const open: [string, string][] = [];
  for (const group of groups.values()) {
    const first = group[0];
    const partner = group.find((p) => p !== first && p.u === first.v && p.v === first.u && p.room !== first.room);
    for (const p of group) if (p !== first && p !== partner && p.room !== first.room) warnings.push(`overlap:${first.room}:${p.room}`);
    const pair = partner ? [first, partner] : [first];
    if (settings.hasNoWall(pair)) {
      if (partner) open.push([first.room, partner.room]);
      continue;
    }
    if (partner) {
      const thickness = settings.thicknessOf(pair) ?? options.interior;
      drafts.push({ a: first.u, b: first.v, left: thickness / 2, right: thickness / 2, exterior: false, roomLeft: first.room, roomRight: partner.room, sources: pair.map(sourceOf), ...heightFields(settings.heightsOf(pair)) });
    } else {
      drafts.push({ a: first.u, b: first.v, left: 0, right: settings.thicknessOf(pair) ?? options.exterior, exterior: true, roomLeft: first.room, roomRight: null, sources: [sourceOf(first)], ...heightFields(settings.heightsOf(pair)) });
    }
  }
  return { drafts, open };
}

/**
 * An interior wall that continues an exterior wall in line sits flush with the exterior wall's inner face on the shared
 * room, rather than standing half its thickness into that room. A straight run of interior walls (one line through
 * several rooms) is aligned as a whole, so its faces stay straight: it is flush only when the exterior walls at its two
 * ends agree on the side, otherwise it stays centred (#65).
 */
function alignWithExterior(drafts: Draft[], verts: Vec2[]): void {
  const direction = (d: Draft) => unit(sub(verts[d.b], verts[d.a]));
  const inner = drafts.filter((d) => !d.exterior && !d.free);
  // runs of collinear interior walls joined end to end
  const runOf = new Map<Draft, Draft[]>();
  for (const wall of inner) {
    if (runOf.has(wall)) continue;
    const run = [wall];
    runOf.set(wall, run);
    for (let k = 0; k < run.length; k++) {
      const cur = run[k];
      for (const next of inner) {
        if (runOf.has(next)) continue;
        const touches = next.a === cur.a || next.a === cur.b || next.b === cur.a || next.b === cur.b;
        if (touches && Math.abs(cross(direction(cur), direction(next))) < 1e-6) {
          run.push(next);
          runOf.set(next, run);
        }
      }
    }
  }
  for (const run of new Set(runOf.values())) {
    const axis = direction(run[0]);
    const nodes = new Map<number, number>();
    for (const w of run) for (const n of [w.a, w.b]) nodes.set(n, (nodes.get(n) ?? 0) + 1);
    // which side of the run (seen along `axis`) the rooms of the exterior walls in line at its ends lie on
    const sides = new Set<"left" | "right">();
    for (const [node, count] of nodes) {
      if (count !== 1) continue;
      for (const outer of drafts) {
        if (!outer.exterior || outer.free || (outer.a !== node && outer.b !== node)) continue;
        const along = direction(outer);
        if (Math.abs(cross(axis, along)) > 1e-6) continue;
        // an exterior wall has its room on its left
        sides.add(dot(axis, along) > 0 ? "left" : "right");
      }
    }
    if (sides.size !== 1) continue;
    const side = [...sides][0];
    for (const wall of run) {
      const thickness = wall.left + wall.right;
      const same = dot(direction(wall), axis) > 0;
      const flushLeft = (side === "left") === same;
      [wall.left, wall.right] = flushLeft ? [0, thickness] : [thickness, 0];
    }
  }
}

const wallId = (a: Vec2, b: Vec2): string => {
  const cm = (x: number) => Math.round(x * 100);
  const [p, q] = a[0] < b[0] || (a[0] === b[0] && a[1] <= b[1]) ? [a, b] : [b, a];
  return `w_${cm(p[0])}_${cm(p[1])}_${cm(q[0])}_${cm(q[1])}`;
};


// ---------------------------------------------------------------- rooms as drawn: walls that fill the gaps

const pointAt = (room: Room, edge: number, dir: Vec2, x: number): Vec2 => {
  const [a, b] = [room.points[edge], room.points[(edge + 1) % room.points.length]];
  const u = unit(sub(b, a));
  const t = (x - dot(a, dir)) / dot(u, dir);
  return [a[0] + u[0] * t, a[1] + u[1] * t];
};

/** The pieces of one room edge that lie within the range a gap shares (both sides are cut at its ends, see splitForGaps). */
function piecesInRange(pieces: readonly Piece[], verts: readonly Vec2[], room: Room, edge: number, g: FacingGap, eps: number): Piece[] {
  return pieces.filter((p) => {
    if (p.room !== room.id || p.edge !== edge) return false;
    const [x0, x1] = [dot(verts[p.u], g.dir), dot(verts[p.v], g.dir)];
    return Math.min(x0, x1) >= g.from - eps && Math.max(x0, x1) <= g.to + eps;
  });
}

/**
 * Splits the room edges like `splitEdges`, and where two rooms face each other across a gap cuts both edges at the same places
 * along the gap (its ends and every vertex either side has in between), so that pieces of the two sides pair up.
 */
function splitForGaps(edges: RoomEdge[], vertices: VertexList, eps: number, rooms: readonly Room[], gaps: readonly FacingGap[]): Piece[] {
  for (const g of gaps) for (const x of [g.from, g.to]) for (const side of [g.a, g.b]) vertices.idOf(pointAt(rooms[side.room], side.edge, g.dir, x));
  let pieces = splitEdges(edges, vertices.points, eps);
  for (let round = 0; round < 6 && gaps.length; round++) {
    const before = vertices.points.length;
    for (const g of gaps) {
      const [ra, rb] = [rooms[g.a.room], rooms[g.b.room]];
      const cuts = (room: Room, edge: number) => piecesInRange(pieces, vertices.points, room, edge, g, eps).flatMap((p) => [dot(vertices.points[p.u], g.dir), dot(vertices.points[p.v], g.dir)]);
      const [xa, xb] = [cuts(ra, g.a.edge), cuts(rb, g.b.edge)];
      for (const x of xa) if (x > g.from + eps && x < g.to - eps) vertices.idOf(pointAt(rb, g.b.edge, g.dir, x));
      for (const x of xb) if (x > g.from + eps && x < g.to - eps) vertices.idOf(pointAt(ra, g.a.edge, g.dir, x));
    }
    if (vertices.points.length === before) break;
    pieces = splitEdges(edges, vertices.points, eps);
  }
  return pieces;
}

/** Distance of a point from the line through a room edge. */
function distanceToEdge(room: Room, edge: number, p: Vec2): number {
  const [a, b] = [room.points[edge], room.points[(edge + 1) % room.points.length]];
  return Math.abs(cross(unit(sub(b, a)), sub(p, a)));
}

/**
 * One wall for every stretch where two rooms face each other across a gap: it lies on the first room's face and reaches the
 * other room's face, so neither room moves and both faces stay exactly where they were drawn. The pieces of both edges over
 * that stretch get no wall of their own (`consumed`).
 */
function wallsBetween(gaps: readonly FacingGap[], rooms: readonly Room[], pieces: readonly Piece[], verts: readonly Vec2[], settings: EdgeSettings, eps: number, consumed: Set<Piece>): { drafts: Draft[]; open: [string, string][] } {
  const drafts: Draft[] = [];
  const open: [string, string][] = [];
  for (const g of gaps) {
    const [ra, rb] = [rooms[g.a.room], rooms[g.b.room]];
    const mine = piecesInRange(pieces, verts, ra, g.a.edge, g, eps).filter((p) => !consumed.has(p));
    const theirs = piecesInRange(pieces, verts, rb, g.b.edge, g, eps).filter((p) => !consumed.has(p));
    for (const p of mine) {
      const span = [dot(verts[p.u], g.dir), dot(verts[p.v], g.dir)].sort((x, y) => x - y);
      const q = theirs.find((o) => {
        const s = [dot(verts[o.u], g.dir), dot(verts[o.v], g.dir)].sort((x, y) => x - y);
        return !consumed.has(o) && Math.abs(s[0] - span[0]) <= eps && Math.abs(s[1] - span[1]) <= eps;
      });
      if (!q) continue;
      consumed.add(p);
      consumed.add(q);
      if (settings.hasNoWall([p, q])) {
        open.push([p.room, q.room]);
        continue;
      }
      const width = (distanceToEdge(rb, g.b.edge, verts[p.u]) + distanceToEdge(rb, g.b.edge, verts[p.v])) / 2;
      drafts.push({ a: p.u, b: p.v, left: 0, right: width, exterior: false, between: true, roomLeft: p.room, roomRight: q.room, sources: [sourceOf(p), sourceOf(q)], ...heightFields(settings.heightsOf([p, q])) });
    }
  }
  return { drafts, open };
}

/** The wall options a building's settings ask for (thicknesses, and whether rooms stay as drawn). */
export function wallOptions(settings: { wall_exterior: number; wall_interior: number; rooms_as_drawn?: boolean }): WallOptions {
  return { exterior: settings.wall_exterior, interior: settings.wall_interior, ...(settings.rooms_as_drawn ? { asDrawn: true } : {}) };
}

export function generateWalls(rooms: readonly Room[], options: WallOptions, free: readonly FreeWall[] = []): WallResult {
  const eps = options.eps ?? 0.005;
  const warnings: string[] = [];
  const vertices = vertexList(eps);
  const edges = roomEdges(rooms, vertices);

  // free walls: their ends are vertices too, so a room edge they touch is split there (a T-junction)
  const freeWalls = free.filter((w) => Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]) > 0.05);
  const freeEnds = freeWalls.map((w) => [vertices.idOf(w.a), vertices.idOf(w.b)] as const);
  // split points set by hand on room edges are vertices as well, and a wall never merges back across them
  const handSplits = new Set<number>();
  for (const room of rooms) {
    const pts = room.points;
    if (pts.length < 3) continue;
    (room.wall_splits ?? []).forEach((offsets, i) => {
      if (!offsets || i >= pts.length) return;
      const start = pts[i];
      const d = sub(pts[(i + 1) % pts.length], start);
      const length = norm(d);
      for (const t of offsets) if (t > eps && t < length - eps) handSplits.add(vertices.idOf(add(start, scale(d, t / length))));
    });
  }

  const gaps = options.asDrawn ? facingGaps(rooms) : [];
  const pieces = splitForGaps(edges, vertices, eps, rooms, gaps);
  const settings = edgeSettings(rooms, pieces);
  const consumed = new Set<Piece>();
  const between = gaps.length ? wallsBetween(gaps, rooms, pieces, vertices.points, settings, eps, consumed) : { drafts: [], open: [] };
  const { drafts: paired, open } = pairPieces(pieces, settings, options, warnings, consumed);
  alignWithExterior(paired, vertices.points);
  paired.push(...between.drafts);
  open.push(...between.open);

  // free walls count as interior walls of the room they stand in (the same room on both sides)
  const drafts = paired;
  freeWalls.forEach((w, i) => {
    const [ia, ib] = freeEnds[i];
    if (ia === ib) return;
    const middle: Vec2 = [(w.a[0] + w.b[0]) / 2, (w.a[1] + w.b[1]) / 2];
    const room = rooms.find((r) => r.points.length >= 3 && pointInPolygon(middle, r.points))?.id ?? null;
    const half = (w.thickness ?? options.interior) / 2;
    drafts.push({ free: w.id, a: ia, b: ib, left: half, right: half, exterior: false, roomLeft: room, roomRight: room, sources: [], height: typeof w.height === "number" && w.height > 0 ? w.height : undefined, ...(typeof w.height === "number" && w.height > 0 && typeof w.height_end === "number" && w.height_end > 0 && Math.abs(w.height_end - w.height) > 1e-6 ? { heightEnd: w.height_end } : {}), ...freeBottom(w) });
  });

  const merged = mergeCollinear(drafts, vertices.points, handSplits);
  const corners = computeCorners(merged, vertices.points);
  const walls: Wall[] = merged.map((w, i) => {
    const [a, b] = [vertices.points[w.a], vertices.points[w.b]];
    const [atA, atB] = [corners.get(`${i}:a`)!, corners.get(`${i}:b`)!];
    // at b the outgoing direction is reversed, so its left corner lies on the wall's right face
    const footprint = cleanPolygon([atA.right, atB.left, b, atB.right, atA.left, a], 1e-6);
    return {
      id: wallId(a, b),
      a: [a[0], a[1]],
      b: [b[0], b[1]],
      left: w.left,
      right: w.right,
      exterior: w.exterior,
      roomLeft: w.roomLeft,
      roomRight: w.roomRight,
      sources: w.sources,
      footprint,
      ...(w.free ? { free: w.free } : {}),
      ...(w.height !== undefined ? { height: w.height } : {}),
      ...(w.heightEnd !== undefined ? { heightEnd: w.heightEnd } : {}),
      ...(w.bottom ? { bottom: w.bottom } : {}),
      ...(w.between ? { between: true as const } : {}),
    };
  });
  return { walls, warnings: [...new Set(warnings)], open };
}

// ---------------------------------------------------------------- locating things on walls

/** The point on a stored room edge, `offset` metres from points[edge]. */
export function pointOnRoomEdge(room: Room, edge: number, offset: number): Vec2 {
  const start = room.points[edge];
  return add(start, scale(unit(sub(room.points[(edge + 1) % room.points.length], start)), offset));
}

/**
 * The line an opening sits on, as a room and an edge: the room's edge, or for an opening in a free wall a virtual
 * triangle room whose edge 0 is the free wall (the room side is its left).
 */
export function openingHost(o: Pick<Opening, "room_id" | "edge" | "wall">, rooms: readonly Room[], free: readonly FreeWall[]): { room: Room; edge: number } | null {
  if (o.wall) {
    const wall = free.find((x) => x.id === o.wall);
    if (!wall || Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]) < 0.05) return null;
    const d = unit(sub(wall.b, wall.a));
    const room = { id: o.room_id, name: "", area_id: null, points: [wall.a, wall.b, add(wall.a, [-d[1], d[0]])] } as unknown as Room;
    return { room, edge: 0 };
  }
  const room = rooms.find((r) => r.id === o.room_id);
  return room && o.edge < room.points.length ? { room, edge: o.edge } : null;
}

const along = (wall: Wall, p: Vec2): number => dot(sub(p, wall.a), unit(sub(wall.b, wall.a)));

/** Finds an opening in the generated walls (see openingHost): the wall, and the distance from wall.a. */
export function locateOpening(walls: readonly Wall[], o: Pick<Opening, "wall" | "offset">, host: { room: Room; edge: number }): { wall: Wall; s: number } | null {
  if (!o.wall) return locateOnWalls(walls, host.room, host.edge, o.offset);
  const wall = walls.find((w) => w.free === o.wall);
  return wall ? { wall, s: along(wall, pointOnRoomEdge(host.room, 0, o.offset)) } : null;
}

/** Finds a position on a room edge in the generated walls: the wall, and the distance from wall.a. */
export function locateOnWalls(walls: readonly Wall[], room: Room, edge: number, offset: number): { wall: Wall; s: number } | null {
  for (const wall of walls) {
    const covers = wall.sources.some((s) => s.room_id === room.id && s.edge === edge && offset >= s.t0 - 1e-6 && offset <= s.t1 + 1e-6);
    if (covers) return { wall, s: along(wall, pointOnRoomEdge(room, edge, offset)) };
  }
  return null;
}

/**
 * Inner size of a rectangular room from wall face to wall face: its outline runs along the wall centres inside the house (and along
 * the inner faces of outer walls), so each side loses what its walls stand into the room. Null for a room that is not a rectangle.
 */
export function innerSize(room: Room, walls: readonly Wall[]): [number, number] | null {
  const xs = room.points.map((p) => p[0]);
  const zs = room.points.map((p) => p[1]);
  if (room.points.length !== 4 || new Set(xs.map((v) => v.toFixed(3))).size !== 2 || new Set(zs.map((v) => v.toFixed(3))).size !== 2) return null;
  const [x0, x1, z0, z1] = [Math.min(...xs), Math.max(...xs), Math.min(...zs), Math.max(...zs)];
  const into = (onSide: (w: Wall) => boolean) =>
    Math.max(0, ...walls.filter((w) => !w.between && (w.roomLeft === room.id || w.roomRight === room.id) && onSide(w)).map((w) => (w.roomLeft === room.id ? w.left : w.right)));
  const near = (a: number, b: number) => Math.abs(a - b) < 1e-3;
  const along = (w: Wall, axis: 0 | 1, v: number) => near(w.a[axis], v) && near(w.b[axis], v);
  const width = x1 - x0 - into((w) => along(w, 0, x0)) - into((w) => along(w, 0, x1));
  const depth = z1 - z0 - into((w) => along(w, 1, z0)) - into((w) => along(w, 1, z1));
  return [Math.round(width * 1000) / 1000, Math.round(depth * 1000) / 1000];
}
