// Areas outside the house: lawn, terrace, path, driveway, pool, bed, wild patch, hedge, fence and pergola, in the neon look.
// Flat areas lie at ground level (the underside of the ground floor slab), the terrace a little higher, the pool water
// below. Hedges are dark green blocks, fences posts with rails along the outline, a pergola corner posts with beams,
// rafters and optional X-bracing. An area can sit higher or lower (offset), fall along one direction (slope) and have
// patches cut out of it.

import { Color } from "three";
import { bounds, cutsOut, groundLevel, isAxisRect, OUTDOOR_TOP, outdoorDrop, outdoorStanding, pointInPolygon, type Floor, type OutdoorArea, type Vec2 } from "../../model.ts";
import { ALWAYS, pushPrism, shade, triangulate, type GeoBuffer, type LineBuffer } from "../geo.ts";
import { counterClockwise, pushBeam, pushPost } from "./beams.ts";
import { gateLayout, gatesOnEdge } from "./gates.ts";
import { LOOKS } from "./looks.ts";

/** The height of the visible surface of an area (for the lighting layer), at its high edge. */
export function outdoorSurface(floor: Floor, area: OutdoorArea): number {
  return groundLevel(floor) + (area.offset ?? 0) + (outdoorStanding(area.type) ? 0.01 : OUTDOOR_TOP[area.type]);
}

/** The holes of an area: the other areas that cut themselves out (marked "cut", and pools) and lie entirely inside it, whatever order they were drawn in. */
export function outdoorHoles(areas: OutdoorArea[], index: number): Vec2[][] {
  const area = areas[index];
  if (outdoorStanding(area.type) || area.type === "pool") return [];
  return areas
    .filter((other, i) => i !== index && cutsOut(other) && other.points.length >= 3 && other.points.every((p) => pointInPolygon(p, area.points)))
    .map((other) => counterClockwise(other.points));
}

/** What an area builder needs to know. */
interface Context {
  buf: GeoBuffer;
  lines: LineBuffer;
  area: OutdoorArea;
  /** The outline, counter-clockwise. */
  poly: Vec2[];
  /** The area's base height, and the ground height at a point (it falls along the slope). */
  base: number;
  groundAt: (x: number, z: number) => number;
  /** The top height of the type, or the area's own for hedges, fences and pergolas. */
  top: number;
  look: (typeof LOOKS)[keyof typeof LOOKS];
  edge: Color;
  /** The index of the closing edge to leave out (a fence or pergola leaning on the house), or -1. */
  openEdge: number;
}

const edgesOf = (poly: Vec2[], openEdge: number): [number, Vec2, Vec2][] => poly.map((p, i) => [i, p, poly[(i + 1) % poly.length]] as [number, Vec2, Vec2]).filter(([i]) => i !== openEdge);

function outline(c: Context, heightAt: (x: number, z: number) => number): void {
  if (c.area.outline === false) return;
  for (const [, p, q] of edgesOf(c.poly, c.openEdge)) c.lines.seg([p[0], heightAt(p[0], p[1]), p[1]], [q[0], heightAt(q[0], q[1]), q[1]], c.edge, ALWAYS);
}

function buildPool(c: Context): void {
  const { buf, poly, base, top, look } = c;
  const water = new Color(look.color);
  // the water surface, below the rim
  for (const [i, j, k] of triangulate(poly)) {
    const [p, q, r] = [poly[i], poly[j], poly[k]];
    buf.tri([p[0], base + top, p[1]], [r[0], base + top, r[1]], [q[0], base + top, q[1]], water, water, water, undefined, ALWAYS);
  }
  // the inner sides from the water up to the rim, seen from inside the pool
  const sideColor = new Color(look.side);
  for (const [, p, q] of edgesOf(poly, -1)) {
    buf.tri([q[0], base + top, q[1]], [q[0], base + 0.06, q[1]], [p[0], base + 0.06, p[1]], sideColor, sideColor, sideColor, undefined, ALWAYS);
    buf.tri([q[0], base + top, q[1]], [p[0], base + 0.06, p[1]], [p[0], base + top, p[1]], sideColor, sideColor, sideColor, undefined, ALWAYS);
  }
  outline(c, () => base + 0.06);
  outline(c, () => base + top + 0.005);
}

function buildFence(c: Context): void {
  const { buf, lines, poly, area, top, look, groundAt, edge, openEdge } = c;
  // posts about every 2 m and two rails along the outline, following the ground
  for (const [i, p, q] of edgesOf(poly, openEdge)) {
    const length = Math.hypot(q[0] - p[0], q[1] - p[1]);
    const sections = Math.max(1, Math.round(length / 2));
    // gates cut gaps into the edge: no posts and no rails there, a gate post at each end and the leaves in between
    const gates = gatesOnEdge(area, p, q)
      .map(({ gate, offset }) => ({ gate, layout: gateLayout(p, q, gate, offset, !!gate.open) }))
      .filter((g): g is { gate: typeof g.gate; layout: NonNullable<typeof g.layout> } => !!g.layout);
    const inGap = (t: number) => gates.some((g) => t > g.layout.from - 0.15 && t < g.layout.to + 0.15);
    // an open fence also gets the post at its far end
    const lastPost = openEdge >= 0 && i === openEdge - 1 ? sections : sections - 1;
    for (let k = 0; k <= lastPost; k++) {
      if (inGap((length * k) / sections)) continue;
      const x = p[0] + ((q[0] - p[0]) * k) / sections;
      const z = p[1] + ((q[1] - p[1]) * k) / sections;
      const ground = groundAt(x, z);
      pushPost(buf, [x, z], 0.04, ground, ground + top, look.side, look.color);
    }
    // the rails run between the gaps
    const cuts: [number, number][] = [];
    let at = 0;
    for (const g of gates) {
      cuts.push([at, g.layout.from]);
      at = g.layout.to;
    }
    cuts.push([at, length]);
    const along = (t: number): Vec2 => [p[0] + ((q[0] - p[0]) * t) / length, p[1] + ((q[1] - p[1]) * t) / length];
    for (const [t0, t1] of cuts) {
      if (t1 - t0 < 0.02) continue;
      const [a, b] = [along(t0), along(t1)];
      for (const rail of [0.35, 0.85]) lines.seg([a[0], groundAt(a[0], a[1]) + rail * top, a[1]], [b[0], groundAt(b[0], b[1]) + rail * top, b[1]], edge, ALWAYS);
    }
    for (const { layout } of gates) {
      for (const post of layout.posts) {
        const ground = groundAt(post[0], post[1]);
        pushPost(buf, post, 0.07, ground, ground + top * 1.05, look.side, look.color);
      }
      for (const leaf of layout.leaves) pushGateLeaf(c, leaf.a, leaf.b);
    }
  }
}

/** One gate leaf: two rails, pickets and a diagonal brace between a (the hinge) and b. */
function pushGateLeaf(c: Context, a: Vec2, b: Vec2): void {
  const { buf, lines, top, look, groundAt, edge } = c;
  const length = Math.hypot(b[0] - a[0], b[1] - a[1]);
  if (length < 0.05) return;
  const [ga, gb] = [groundAt(a[0], a[1]), groundAt(b[0], b[1])];
  const rise = gb - ga;
  for (const [lo, hi] of [[0.12, 0.2], [0.78, 0.86]]) pushBeam(buf, a, b, 0.05, ga + lo * top, ga + hi * top, look.side, look.color, rise);
  const pickets = Math.max(2, Math.round(length / 0.18));
  for (let k = 0; k <= pickets; k++) {
    const t = k / pickets;
    const x = a[0] + (b[0] - a[0]) * t;
    const z = a[1] + (b[1] - a[1]) * t;
    const ground = ga + rise * t;
    pushPost(buf, [x, z], k === 0 || k === pickets ? 0.03 : 0.012, ground + 0.1 * top, ground + 0.9 * top, look.side, look.color);
  }
  lines.seg([a[0], ga + 0.2 * top, a[1]], [b[0], gb + 0.78 * top, b[1]], edge, ALWAYS);
}

function buildPergola(c: Context): void {
  const { buf, lines, poly, area, top, look, groundAt, edge, openEdge } = c;
  // corner posts, beams along the edges, rafters across a rectangle, optional X-bracing on the sides
  for (const corner of poly) {
    const ground = groundAt(corner[0], corner[1]);
    pushPost(buf, corner, 0.06, ground, ground + top, look.side, look.color);
  }
  for (const [, p, q] of edgesOf(poly, openEdge)) {
    const [gp, gq] = [groundAt(p[0], p[1]), groundAt(q[0], q[1])];
    pushBeam(buf, p, q, 0.12, gp + top - 0.16, gp + top, look.side, look.color, gq - gp);
    if (area.bracing) {
      lines.seg([p[0], gp + 0.25, p[1]], [q[0], gq + top - 0.25, q[1]], edge, ALWAYS);
      lines.seg([q[0], gq + 0.25, q[1]], [p[0], gp + top - 0.25, p[1]], edge, ALWAYS);
    }
  }
  if (isAxisRect(poly)) {
    const box = bounds(poly);
    const alongX = box.x1 - box.x0 >= box.z1 - box.z0;
    const [start, span] = alongX ? [box.x0, box.x1 - box.x0] : [box.z0, box.z1 - box.z0];
    const rafters = Math.max(1, Math.round(span / 0.6));
    for (let k = 1; k < rafters; k++) {
      const t = start + (span * k) / rafters;
      const p: Vec2 = alongX ? [t, box.z0 + 0.06] : [box.x0 + 0.06, t];
      const q: Vec2 = alongX ? [t, box.z1 - 0.06] : [box.x1 - 0.06, t];
      const gp = groundAt(p[0], p[1]);
      pushBeam(buf, p, q, 0.06, gp + top - 0.04, gp + top + 0.08, look.side, look.color, groundAt(q[0], q[1]) - gp);
    }
  }
  outline(c, (x, z) => groundAt(x, z) + top + 0.004);
}

/** Everything else: a flat area is a thin prism; terrace, bed and hedge are raised blocks. A slope tilts the top and the block reaches down to the lowest point. */
function buildBlock(c: Context, areas: OutdoorArea[], index: number): void {
  const { buf, lines, poly, area, top, look, groundAt, base, edge } = c;
  const lowest = base - (area.slope ?? 0);
  const topAt = (x: number, z: number) => groundAt(x, z) + top;
  const holes = outdoorHoles(areas, index);
  pushPrism(buf, poly, lowest, area.slope ? topAt : base + top, look.side, look.color, { aoFrom: lowest, holes });
  outline(c, (x, z) => topAt(x, z) + 0.004);
  if (area.type === "hedge") outline(c, (x, z) => groundAt(x, z) + 0.004);
  if (area.outline === false) return;
  for (const hole of holes) {
    hole.forEach((p, i) => {
      const q = hole[(i + 1) % hole.length];
      lines.seg([p[0], topAt(p[0], p[1]) + 0.004, p[1]], [q[0], topAt(q[0], q[1]) + 0.004, q[1]], edge, ALWAYS);
    });
  }
}

export function pushOutdoor(buf: GeoBuffer, lines: LineBuffer, floor: Floor): void {
  const ground = groundLevel(floor);
  const areas = floor.outdoor ?? [];
  areas.forEach((area, index) => {
    if (area.points.length < 3) return;
    // an area may sit above or below the ground (a driveway down to a lower garage) and fall along one direction
    const base = ground + (area.offset ?? 0);
    const look = LOOKS[area.type];
    const poly = counterClockwise(area.points);
    const context: Context = {
      buf,
      lines,
      area,
      poly,
      base,
      groundAt: (x, z) => base - outdoorDrop(area, x, z),
      // hedges, fences and pergolas take their own height; the outline can be switched off per area
      top: outdoorStanding(area.type) && area.height ? area.height : OUTDOOR_TOP[area.type],
      look,
      edge: shade(look.edge, look.edgeAlpha),
      // fences and pergolas may leave their closing edge out (leaning against the house)
      openEdge: area.open && (area.type === "fence" || area.type === "pergola") ? poly.length - 1 : -1,
    };
    if (area.type === "pool") buildPool(context);
    else if (area.type === "fence") buildFence(context);
    else if (area.type === "pergola") buildPergola(context);
    else buildBlock(context, areas, index);
  });
}
