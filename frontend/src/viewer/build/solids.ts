// The wall solids: every wall cut into pieces at its openings, built as prisms that fold away above the cut height.

import type { Wall } from "../../geometry/walls.ts";
import { pointInPolygon, roomOffset, type Floor, type Vec2 } from "../../model.ts";
import { CAP_OFFSET, LOWER_OFFSET, PAINT_OFFSET, pushPrism, type GeoBuffer } from "../geo.ts";
import { NEON, SLAB } from "./look.ts";
import { clipAlong, unit } from "./outline.ts";
import { glassJoins } from "./glass-joins.ts";
import { wallTops, type roofLimits } from "./placement.ts";
import type { Span } from "./types.ts";

interface Piece {
  t0: number;
  t1: number;
  /** The height ranges the wall fills at this piece (between and around openings). */
  ranges: [number, number][];
}

/** Wall paint for the solid wall view: outside, inside, and the rooms with a colour of their own. */
export interface WallPaint {
  outside: number;
  inside: number;
  rooms: { points: Vec2[]; color: number }[];
}

/** The top of a painted wall, where it is cut or ends: a plain light grey, like plaster seen in section. */
const PAINT_TOP = 0xd9d5cd;

/**
 * The paint of one side face of a wall: the colour of the room in front of it, the inside colour when a room without one
 * of its own is there, the outside colour when no room is.
 */
export function paintOfSide(poly: Vec2[], a: Vec2, b: Vec2, paint: WallPaint, rooms: { points: Vec2[] }[]): number {
  const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
  const m: Vec2 = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  let n: Vec2 = [(b[1] - a[1]) / len, -(b[0] - a[0]) / len];
  // the normal that points away from the wall body
  if (pointInPolygon([m[0] + n[0] * 0.01, m[1] + n[1] * 0.01], poly)) n = [-n[0], -n[1]];
  const front: Vec2 = [m[0] + n[0] * 0.06, m[1] + n[1] * 0.06];
  const own = paint.rooms.find((r) => pointInPolygon(front, r.points));
  if (own) return own.color;
  return rooms.some((r) => r.points.length >= 3 && pointInPolygon(front, r.points)) ? paint.inside : paint.outside;
}

/**
 * Pieces along the wall's axis, cut at every opening edge. Each piece leaves out all openings above it (two windows one
 * above the other, a window over a door), and the wall fills what remains.
 */
function piecesOf(spans: Span[], height: number, bottom = -SLAB): Piece[] {
  const stops = [-Infinity, ...new Set(spans.flatMap((sp) => [sp.s0, sp.s1])).values(), Infinity].sort((a, b) => a - b);
  const pieces: Piece[] = [];
  for (let i = 0; i + 1 < stops.length; i++) {
    const [t0, t1] = [stops[i], stops[i + 1]];
    if (t1 - t0 < 1e-6) continue;
    const middle = Number.isFinite(t0) && Number.isFinite(t1) ? (t0 + t1) / 2 : Number.isFinite(t0) ? t0 + 1 : t1 - 1;
    const covering = spans.filter((sp) => sp.s0 < middle && sp.s1 > middle).map((sp) => [sp.sill, sp.top] as [number, number]).sort((a, b) => a[0] - b[0]);
    const ranges: [number, number][] = [];
    let y = bottom;
    for (const [lower, upper] of covering) {
      if (lower > y + 1e-4) ranges.push([y, lower]);
      y = Math.max(y, upper);
    }
    if (height > y + 1e-4) ranges.push([y, height]);
    pieces.push({ t0, t1, ranges });
  }
  return pieces;
}

export function buildWallSolids(
  buf: GeoBuffer,
  floor: Floor,
  walls: Wall[],
  wallBucket: Map<Wall, number>,
  spans: Map<Wall, Span[]>,
  limits: ReturnType<typeof roofLimits>,
  hasRoof: boolean,
  /** Painted walls (solid wall view): each face in its colour, and marked so every look keeps that colour. */
  paint?: WallPaint,
): void {
  const cut = Math.min(floor.cut_height, floor.height);
  const offset = paint ? PAINT_OFFSET : 0;
  const sideColor = paint ? (poly: Vec2[]) => (a: Vec2, b: Vec2) => paintOfSide(poly, a, b, paint, floor.rooms) : null;
  const top = paint ? PAINT_TOP : NEON.wallTop;
  // the two wall ends at an internal join of one pane are not a jamb: without this, a full-height wall
  // face stays there, which reads as a frame across the glass
  const joins = glassJoins(spans.values());
  // At a join the pane runs on to the next wall, so what stands beyond the end of the opening is the
  // mitre overflow of the footprint only — a few centimetres of wall, full height. In the height band of
  // the pane it stands in front of the glass, on the outer face: that strip, 1 to 5 cm wide and as tall
  // as the room, is the white line seen at a bend from outside. The band stays empty there, exactly as it
  // does between two openings; above and below the pane the overflow is still the wall that fills the
  // corner of the mitre, so the bend does not open into a hole.
  const nearJoin = (p: Vec2) => joins.points.some((j) => Math.hypot(j[0] - p[0], j[1] - p[1]) < 0.08);
  const bandOf = (sp: Span | undefined) => (sp && sp.info.opening.front ? ([sp.sill, sp.top] as [number, number]) : null);
  const cutBand = (ranges: [number, number][], band: [number, number]): [number, number][] => {
    const out: [number, number][] = [];
    for (const [a, b] of ranges) {
      if (band[0] > a + 1e-4) out.push([a, Math.min(b, band[0])]);
      if (b > band[1] + 1e-4) out.push([Math.max(a, band[1]), b]);
    }
    return out;
  };
  for (const wall of walls) {
    const bucket = wallBucket.get(wall)!;
    const axis = unit([wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]]);
    const list = (spans.get(wall) ?? []).sort((p, q) => p.s0 - q.s0);
    const tops = wallTops(wall, floor.height, limits);
    const { H, topAt } = tops;
    // a wall beside a room on a lower level reaches down to that room's floor
    const lowest = Math.min(0, ...[wall.roomLeft, wall.roomRight].map((id) => roomOffset(floor.rooms.find((r) => r.id === id))));
    const pieces = piecesOf(list, H, lowest - SLAB);
    // under a roof the pieces are cut into short steps, so each step's top lies in one roof plane
    const length = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]);
    // (a sloping wall is cut into steps the same way: its top then lies in one plane per step)
    const underRoof = (hasRoof || tops.varies) && tops.lowestTop(0, length) < H - 1e-3;
    const steps = underRoof
      ? pieces.flatMap((piece) => {
          const from = Math.max(piece.t0, -0.5);
          const to = Math.min(piece.t1, length + 0.5);
          const count = Math.max(1, Math.ceil((to - from) / 0.3));
          return Array.from({ length: count }, (_, i) => ({
            t0: i === 0 ? piece.t0 : from + ((to - from) * i) / count,
            t1: i === count - 1 ? piece.t1 : from + ((to - from) * (i + 1)) / count,
            ranges: piece.ranges,
            inner0: i > 0,
            inner1: i < count - 1,
          }));
        })
      : pieces.map((piece) => ({ ...piece, inner0: false, inner1: false }));

    const along = (p: Vec2) => (p[0] - wall.a[0]) * axis[0] + (p[1] - wall.a[1]) * axis[1];
    // the overflow before the start of the wall, and beyond its end, only where the pane runs on
    const bandStart = nearJoin(wall.a) ? bandOf(list[0]) : null;
    const bandEnd = nearJoin(wall.b) ? bandOf(list[list.length - 1]) : null;
    for (const step of steps) {
      const poly = clipAlong(wall.footprint, wall.a, axis, step.t0, step.t1);
      if (poly.length < 3) continue;
      const overflow = step.t1 <= 1e-6 && step.t0 < 0 ? bandStart : step.t0 >= length - 1e-6 ? bandEnd : null;
      const ranges = overflow ? cutBand(step.ranges, overflow) : step.ranges;
      // the faces between two steps of one piece lie inside the wall: leave them out, or they show as stripes through see-through walls
      const at = (p: Vec2, t: number) => Math.abs(along(p) - t) < 1e-4;
      const roofSide = (p: Vec2, q: Vec2) => (step.inner0 && at(p, step.t0) && at(q, step.t0)) || (step.inner1 && at(p, step.t1) && at(q, step.t1));
      // a short end face that starts at an internal join is the wall showing through the bend; a real wall
      // face is longer than half a metre, so it is never taken for one
      const paneSide = (p: Vec2, q: Vec2) => {
        if (!joins.points.length || Math.hypot(p[0] - q[0], p[1] - q[1]) > 0.5) return false;
        return joins.points.some((j) => Math.min(Math.hypot(j[0] - p[0], j[1] - p[1]), Math.hypot(j[0] - q[0], j[1] - q[1])) < 0.05);
      };
      const skipSide = (p: Vec2, q: Vec2) => roofSide(p, q) || paneSide(p, q);
      // the roof over this step: the lowest point of its footprint decides what is left of each range
      const roofTop = underRoof ? Math.min(...poly.map(([x, z]) => topAt(x, z))) : H;
      for (const [y0, y1raw] of ranges) {
        const y1 = Math.min(y1raw, underRoof ? Math.max(...poly.map(([x, z]) => topAt(x, z))) : y1raw);
        if (y1 - y0 < 1e-4 || roofTop - y0 < 0.01) continue;
        const lintel = y0 > 0.01;
        const sloped = underRoof && y1raw > roofTop;
        const topOf = (x: number, z: number) => Math.min(y1raw, topAt(x, z));
        if (y0 < cut - 1e-6) {
          // the top face at the cut height is only seen while the wall is cut
          const topFold = y1 > cut + 1e-6 ? CAP_OFFSET + bucket : LOWER_OFFSET + bucket;
          const capped = sloped && roofTop < cut ? (x: number, z: number) => Math.min(cut, topOf(x, z)) : Math.min(y1, cut);
          pushPrism(buf, poly, y0, capped, NEON.wall, top, { aoFrom: 0, bottom: lintel, fold: offset + LOWER_OFFSET + bucket, topFold: offset + topFold, skipSide, sideColor: sideColor?.(poly) });
        }
        if (y1 > cut + 1e-6 && roofTop > cut + 1e-6) {
          pushPrism(buf, poly, Math.max(y0, cut), sloped ? topOf : y1, NEON.wall, top, { aoFrom: 0, fold: offset + bucket, bottom: lintel && y0 >= cut, skipSide, sideColor: sideColor?.(poly) });
        }
      }
    }
  }
}
