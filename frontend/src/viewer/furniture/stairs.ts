// Shaped stairs: straight, winding (a quarter or half turn), L and U with a landing, and spiral stairs, built as a solid
// mass, on two stringers, on one spine or as steps out of the wall, going up or down. The treads come from the layout in
// geometry/stairs.ts, so the 3D model, the plan symbol and the floor opening always agree.

import type { Vec2 } from "../../model.ts";
import { stairConfig, stairLayout, treadCentre, type StairConfig, type Tread } from "../../geometry/stairs.ts";
import type { Builder } from "./builder.ts";
import { EDGE_FAINT, EDGE_FURN, EDGE_GLOW, M } from "./palette.ts";

const RAIL_HEIGHT = 0.9;

/** A thin upright plate along the segment a-b, moved `inset` towards `inside`: risers and stringers. */
function plate(b: Builder, a: Vec2, c: Vec2, inside: Vec2, y0: number, y1: number, thickness: number, material = M.wood): void {
  const [dx, dz] = [c[0] - a[0], c[1] - a[1]];
  const length = Math.hypot(dx, dz);
  if (length < 0.01 || y1 - y0 < 0.005) return;
  let [nx, nz] = [-dz / length, dx / length];
  // the normal points into the tread
  const mid: Vec2 = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2];
  if ((inside[0] - mid[0]) * nx + (inside[1] - mid[1]) * nz < 0) [nx, nz] = [-nx, -nz];
  const off = (p: Vec2, s: number): Vec2 => [p[0] + nx * s, p[1] + nz * s];
  b.prism([a, c, off(c, thickness), off(a, thickness)], y0, y1, material, EDGE_FAINT);
}

/** Pairs of neighbouring points of a side, leaving out the zero-length ones of a winder's pivot. */
const segments = (side: Vec2[]): [Vec2, Vec2][] =>
  side.slice(1).map((p, i): [Vec2, Vec2] => [side[i], p]).filter(([p, q]) => Math.hypot(q[0] - p[0], q[1] - p[1]) > 0.01);

function treadsAndBody(b: Builder, cfg: StairConfig, treads: Tread[], rise: number, floor: number): void {
  const thick = cfg.build === "cantilever" ? 0.07 : 0.05;
  treads.forEach((t, i) => {
    const centre = treadCentre(t);
    const previous = i === 0 ? 0 : treads[i - 1].top;
    if (cfg.build === "solid") {
      // a solid (concrete) stair: every tread is a block down to the floor the stair stands on
      b.prism(t.poly, Math.min(floor, t.top), t.top, M.body, EDGE_FURN);
      return;
    }
    b.prism(t.poly, t.top - thick, t.top, M.wood, EDGE_FURN);
    if (cfg.risers && !t.landing) {
      const [lo, hi] = [Math.min(previous, t.top), Math.max(previous, t.top) - thick];
      plate(b, t.left[0], t.right[0], centre, lo, hi, 0.02);
    }
    if (cfg.build === "stringer") {
      for (const side of [t.left, t.right]) for (const [p, q] of segments(side)) plate(b, p, q, centre, t.top - rise - 0.2, t.top + 0.05, 0.04);
    } else if (cfg.build === "mono") {
      const s = 0.07;
      b.block({ x: [centre[0] - s, centre[0] + s], y: [t.top - rise - 0.12, t.top - thick], z: [centre[1] - s, centre[1] + s] }, M.metal);
    }
  });
}

function rails(b: Builder, cfg: StairConfig, treads: Tread[]): void {
  const sides: ("left" | "right")[] = cfg.rail === "both" ? ["left", "right"] : cfg.rail === "none" ? [] : [cfg.rail];
  for (const side of sides) {
    const nodes: [number, number, number][] = [];
    for (const t of treads) for (const p of t[side]) nodes.push([p[0], t.top + RAIL_HEIGHT, p[1]]);
    // a post at the start of every second tread and of the top one (one per tread is a fence on a spiral)
    for (const [i, t] of treads.entries()) {
      if (i % 2 && i !== treads.length - 1) continue;
      const p = t[side][0];
      b.cylinder(p[0], p[1], 0.012, t.top, t.top + RAIL_HEIGHT, M.metal, 6);
    }
    for (let i = 1; i < nodes.length; i++) {
      const [p, q] = [nodes[i - 1], nodes[i]];
      b.seg(p[0], p[1], p[2], q[0], q[1], q[2], EDGE_GLOW);
      b.seg(p[0], p[1] - RAIL_HEIGHT * 0.55, p[2], q[0], q[1] - RAIL_HEIGHT * 0.55, q[2], EDGE_FAINT);
    }
  }
}

/** Draws a shaped stair of size w × d that climbs h (or goes down h, then everything lies below the floor). */
export function shapedStairs(b: Builder, item: { stair?: Partial<StairConfig> | null }, w: number, d: number, h: number): void {
  const cfg = stairConfig(item);
  const layout = stairLayout(cfg, w, d, h);
  const floor = cfg.down ? -h : 0;
  if (layout.column > 0) b.cylinder(0, 0, layout.column, Math.min(0, floor), cfg.down ? 0 : h, M.metal, 12, EDGE_FURN);
  treadsAndBody(b, cfg, layout.treads, layout.rise, floor);
  rails(b, cfg, layout.treads);
}
