// The edge lines of the walls and openings: base line, cut line, top line (following a roof), corner verticals, and the
// jambs, sills and lintels of openings on both wall faces.

import type { Wall } from "../../geometry/walls.ts";
import type { Floor, Vec2 } from "../../model.ts";
import { ALWAYS, CUT_OFFSET, EDGE_BASE, EDGE_CUT, EDGE_SOFT, EDGE_TOP, LOWER_OFFSET, type LineBuffer } from "../geo.ts";
import type { Outline } from "./outline.ts";
import { subtractSpans } from "./outline.ts";
import { alongWall, glassJoins, joinPositions, spanEnds } from "./glass-joins.ts";
import { wallTops, type roofLimits } from "./placement.ts";
import type { Span } from "./types.ts";

/** A 2 cm grid, so an outline corner and a glass join meet at the same key despite rounding. */
const pointKey = (p: readonly [number, number]) => `${Math.round(p[0] * 50)},${Math.round(p[1] * 50)}`;

/**
 * Jambs, sill and lintel edges of an opening on both wall faces, split at the cut height. A piece that joins
 * another piece of the same pane has no jamb at that end: the glass runs on.
 */
function pushOpeningLines(lines: LineBuffer, sp: Span, cut: number, hideStart = false, hideEnd = false): void {
  const { info } = sp;
  const bucket = info.bucket;
  const at = (s: number, n: number, y: number) => [info.start[0] + info.axis[0] * (s - sp.s0) + info.toRoom[0] * n, y, info.start[1] + info.axis[1] * (s - sp.s0) + info.toRoom[1] * n];
  const foldAt = (y: number) => (y > cut + 1e-6 ? bucket : ALWAYS);
  // just above the floor the opening stands on (below 0 in a lowered room)
  const bottom = sp.sill < 0 ? sp.sill + 0.004 : Math.max(sp.sill, 0.004);
  for (const n of [info.faceRoom, -info.faceOut]) {
    if (!hideStart) lines.segSplit(at(sp.s0, n, bottom), at(sp.s0, n, sp.top), EDGE_SOFT, cut, bucket);
    if (!hideEnd) lines.segSplit(at(sp.s1, n, bottom), at(sp.s1, n, sp.top), EDGE_SOFT, cut, bucket);
    lines.seg(at(sp.s0, n, sp.top), at(sp.s1, n, sp.top), EDGE_SOFT, foldAt(sp.top));
    if (sp.sill > 0.01) lines.seg(at(sp.s0, n, sp.sill), at(sp.s1, n, sp.sill), EDGE_SOFT, foldAt(sp.sill));
  }
  // edges across the wall thickness (the reveals), and the cut section of the jambs
  for (const [s, hide] of [[sp.s0, hideStart], [sp.s1, hideEnd]] as const) {
    if (hide) continue;
    lines.seg(at(s, info.faceRoom, sp.top), at(s, -info.faceOut, sp.top), EDGE_SOFT, foldAt(sp.top));
    if (sp.sill > 0.01) lines.seg(at(s, info.faceRoom, sp.sill), at(s, -info.faceOut, sp.sill), EDGE_SOFT, foldAt(sp.sill));
    if (sp.sill < cut && sp.top > cut) lines.seg(at(s, info.faceRoom, cut), at(s, -info.faceOut, cut), EDGE_CUT, CUT_OFFSET + bucket);
  }
}

export function pushEdgeLines(
  lines: LineBuffer,
  floor: Floor,
  outline: Outline,
  wallBucket: Map<Wall, number>,
  spans: Map<Wall, Span[]>,
  limits: ReturnType<typeof roofLimits>,
  hasRoof: boolean,
): void {
  const cut = Math.min(floor.cut_height, floor.height);
  const spansOf = (wall: Wall, keep: (sp: Span) => boolean) => (spans.get(wall) ?? []).filter(keep);
  for (const edge of outline.edges) {
    const bucket = wallBucket.get(edge.wall)!;
    // the base line along the floor: not across doorways
    for (const [p, q] of subtractSpans(edge, spansOf(edge.wall, (sp) => sp.sill <= 0.005))) lines.seg([p[0], 0.004, p[1]], [q[0], 0.004, q[1]], EDGE_BASE);
    // the cut line: not where an opening crosses the cut height
    for (const [p, q] of subtractSpans(edge, spansOf(edge.wall, (sp) => sp.sill < cut && sp.top > cut))) lines.seg([p[0], cut, p[1]], [q[0], cut, q[1]], EDGE_CUT, CUT_OFFSET + bucket);
    // the top line: not where an opening reaches the top; a wall below the cut height keeps its top line; under a roof it follows the slope in short steps
    const tops = wallTops(edge.wall, floor.height, limits);
    const { H, topAt } = tops;
    for (const [p, q] of subtractSpans(edge, spansOf(edge.wall, (sp) => sp.top >= H - 0.021))) {
      if (!hasRoof && !tops.varies) {
        lines.seg([p[0], H, p[1]], [q[0], H, q[1]], EDGE_TOP, H <= cut + 1e-6 ? LOWER_OFFSET + bucket : bucket);
        continue;
      }
      const steps = Math.max(1, Math.ceil(Math.hypot(q[0] - p[0], q[1] - p[1]) / 0.3));
      const at = (i: number): Vec2 => [p[0] + ((q[0] - p[0]) * i) / steps, p[1] + ((q[1] - p[1]) * i) / steps];
      for (let i = 0; i < steps; i++) {
        const [a, c] = [at(i), at(i + 1)];
        const [ya, yc] = [topAt(a[0], a[1]), topAt(c[0], c[1])];
        lines.seg([a[0], ya, a[1]], [c[0], yc, c[1]], EDGE_TOP, Math.max(ya, yc) <= cut + 1e-6 ? LOWER_OFFSET + bucket : bucket);
      }
    }
  }
  // where two pieces of one pane meet, the corner is not a jamb (glass-joins.ts is shared with the wall solids)
  const joins = glassJoins(spans.values());
  const insidePane = new Set(joins.points.map(pointKey));
  // internal joins in wall coordinates: a footprint corner off the axis is not a point to compare with
  const joinAt = new Map<Wall, number[]>();
  for (const [wall, list] of spans) joinAt.set(wall, joinPositions(list, joins));
  for (const corner of outline.corners) {
    // a corner inside a continuous pane has no wall vertical running through the glass: the pane runs on
    // over the bend, so the wall only turns behind it
    const s = alongWall(corner.wall, corner.p);
    const list = spans.get(corner.wall) ?? [];
    const inPane = list.some((sp) => !!sp.info.opening.front && s > sp.s0 + 0.05 && s < sp.s1 - 0.05);
    const atJoin = (joinAt.get(corner.wall) ?? []).some((j) => Math.abs(j - s) < 0.06);
    if (inPane || atJoin || insidePane.has(pointKey(corner.p))) continue;
    const height = wallTops(corner.wall, floor.height, limits).topAt(corner.p[0], corner.p[1]);
    lines.segSplit([corner.p[0], 0.004, corner.p[1]], [corner.p[0], height, corner.p[1]], EDGE_SOFT, Math.min(cut, height), wallBucket.get(corner.wall)!);
  }
  for (const list of spans.values()) {
    for (const sp of list) {
      const front = sp.info.opening.front;
      const [p0, p1] = spanEnds(sp);
      pushOpeningLines(lines, sp, cut, front ? joins.at(front, p0) : false, front ? joins.at(front, p1) : false);
    }
  }
}
