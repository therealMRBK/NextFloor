// The drawing tool for furniture models. A model is built from boxes, lofts, cylinders and sweeps in local coordinates (x
// across, z in depth with the front at +z, y up), which the builder turns and moves into the plan.

import { Color } from "three";
import type { Vec2 } from "../../model.ts";
import { ALWAYS, DEG, pushLoft, pushLyingCyl, pushPrism, pushSkin, type GeoBuffer, type LineBuffer } from "../geo.ts";
import { counterClockwise } from "../build/outline.ts";
import { EDGE_FURN, type Material } from "./palette.ts";

/** Maps a local (x, z) to a plan point. */
export type Plan = (x: number, z: number) => Vec2;

/** A box as ranges along the three local axes. */
export interface Block {
  x: [number, number];
  y: [number, number];
  z: [number, number];
}

/** Whether a plan transform mirrors (its determinant is negative). */
export function mirrors(plan: Plan): boolean {
  const origin = plan(0, 0);
  const ex = plan(1, 0);
  const ez = plan(0, 1);
  return (ex[0] - origin[0]) * (ez[1] - origin[1]) - (ex[1] - origin[1]) * (ez[0] - origin[0]) < 0;
}

/** Swaps the second and third vertex of every triangle from `from` on (positions, colours, folds, uvs, tiles). */
export function flipWinding(buf: GeoBuffer, from: number): void {
  const swapped = (values: number[] | null, start: number, size: number) => {
    if (!values) return;
    for (let k = 0; k < size; k++) {
      const [i, j] = [start + size + k, start + 2 * size + k];
      [values[i], values[j]] = [values[j], values[i]];
    }
  };
  for (let i = from; i < buf.p.length; i += 9) {
    const tri = i / 9;
    swapped(buf.p, i, 3);
    swapped(buf.c, i, 3);
    swapped(buf.f, tri * 3, 1);
    swapped(buf.uv, tri * 6, 2);
    swapped(buf.tile, tri * 6, 2);
  }
}

export class Builder {
  /** The transform mirrors: parts that do not wind themselves counter-clockwise come out inside out. */
  readonly mirrored: boolean;

  private readonly buf: GeoBuffer;
  private readonly lines: LineBuffer;
  readonly plan: Plan;

  constructor(buf: GeoBuffer, lines: LineBuffer, plan: Plan) {
    this.buf = buf;
    this.lines = lines;
    this.plan = plan;
    this.mirrored = mirrors(plan);
  }

  /** The same buffers with the local coordinates turned by `deg` around (cx, cz): turned parts of pack items. */
  turned(cx: number, cz: number, deg: number): Builder {
    const [c, s] = [Math.cos(deg * DEG), Math.sin(deg * DEG)];
    return new Builder(this.buf, this.lines, (x, z) => this.plan(cx + (x - cx) * c - (z - cz) * s, cz + (x - cx) * s + (z - cz) * c));
  }

  /** A line between two local points at the heights ya and yb. */
  seg(xa: number, ya: number, za: number, xb: number, yb: number, zb: number, color: Color = EDGE_FURN): void {
    this.edge(this.plan(xa, za), this.plan(xb, zb), ya, yb, color);
  }

  private edge(a: Vec2, b: Vec2, ya: number, yb: number, color: Color): void {
    this.lines.seg([a[0], ya, a[1]], [b[0], yb, b[1]], color, ALWAYS);
  }

  /** An axis-aligned box. `edges` draws its outline. */
  block({ x: [x0, x1], y: [y0, y1], z: [z0, z1] }: Block, material: Material, edges: Color | null = null): void {
    if (x1 - x0 < 1e-4 || z1 - z0 < 1e-4 || y1 - y0 < 1e-4) return;
    const footprint = [this.plan(x0, z0), this.plan(x0, z1), this.plan(x1, z1), this.plan(x1, z0)];
    pushPrism(this.buf, counterClockwise(footprint), y0, y1, material.side, material.top, { aoFrom: 0, bottom: y0 > 0.05 });
    if (edges) {
      footprint.forEach((a, i) => {
        this.edge(a, footprint[(i + 1) % 4], y1, y1, edges);
        this.edge(a, a, y0, y1, edges);
      });
    }
  }

  /** An upright prism over any outline given in local coordinates (stair treads, winders, landings). */
  prism(outline: readonly Vec2[], y0: number, y1: number, material: Material, edges: Color | null = null): void {
    if (outline.length < 3 || y1 - y0 < 1e-4) return;
    const footprint = outline.map(([x, z]) => this.plan(x, z));
    pushPrism(this.buf, counterClockwise(footprint), y0, y1, material.side, material.top, { aoFrom: Math.min(0, y0), bottom: true });
    if (edges) footprint.forEach((a, i) => this.edge(a, footprint[(i + 1) % footprint.length], y1, y1, edges));
  }

  /** A box whose top face is another rectangle (sloped sides): hoods, windscreens, tapered shades. Rectangles are [x0, x1, z0, z1]. */
  loft(base: [number, number, number, number], top: [number, number, number, number], y0: number, y1: number, material: Material, edges: Color | null = null): void {
    if (y1 - y0 < 1e-4) return;
    const corners = (r: [number, number, number, number]): Vec2[] => [this.plan(r[0], r[2]), this.plan(r[0], r[3]), this.plan(r[1], r[3]), this.plan(r[1], r[2])];
    const lo = corners(base);
    const hi = corners(top);
    if (lo !== counterClockwise(lo)) {
      lo.reverse();
      hi.reverse();
    }
    pushLoft(this.buf, lo, hi, y0, y1, material.side, material.top);
    if (edges) {
      for (let i = 0; i < 4; i++) {
        this.edge(hi[i], hi[(i + 1) % 4], y1, y1, edges);
        this.edge(lo[i], hi[i], y0, y1, edges);
      }
    }
  }

  /**
   * A smooth body swept along z: at every station a rounded cross section from y0 to y1, `hw` wide to each side of the centre
   * x (cars, boats, anything with a curved hull). `exp` shapes the section: 2 is an ellipse, higher is boxier. `edges` draws
   * the ridge along the top.
   */
  sweep(stations: { x: number; z: number; y0: number; y1: number; hw: number }[], material: Material, sides = 16, exp = 2.6, edges: Color | null = null): void {
    if (stations.length < 2) return;
    const rings = stations.map((st) => {
      const [halfHeight, halfWidth] = [Math.max(0.004, (st.y1 - st.y0) / 2), Math.max(0.004, st.hw)];
      const middle = (st.y0 + st.y1) / 2;
      return Array.from({ length: sides }, (_, i) => {
        const angle = (i / sides) * Math.PI * 2;
        const [c, s] = [Math.cos(angle), Math.sin(angle)];
        const [wx, wz] = this.plan(st.x + halfWidth * Math.sign(c) * Math.abs(c) ** (2 / exp), st.z);
        return [wx, middle + halfHeight * Math.sign(s) * Math.abs(s) ** (2 / exp), wz];
      });
    });
    pushSkin(this.buf, rings, material.side, material.top);
    if (edges) {
      const ridge = Math.round(sides / 4);
      for (let s = 0; s + 1 < rings.length; s++) this.lines.seg(rings[s][ridge], rings[s + 1][ridge], edges, ALWAYS);
    }
  }

  /** A box with bevelled top and bottom edges (cushions, mattresses, arm rests). */
  pad(block: Block, material: Material, radius = 0.03, edges: Color | null = null): void {
    const { x: [x0, x1], y: [y0, y1], z: [z0, z1] } = block;
    const r = Math.min(radius, (x1 - x0) / 2 - 0.005, (z1 - z0) / 2 - 0.005, (y1 - y0) / 2);
    if (r < 0.008) return this.block(block, material, edges);
    const side = { side: material.side, top: material.side };
    this.loft([x0 + r, x1 - r, z0 + r, z1 - r], [x0, x1, z0, z1], y0, y0 + r, side);
    if (y1 - y0 - 2 * r > 0.005) this.block({ x: [x0, x1], y: [y0 + r, y1 - r], z: [z0, z1] }, side, edges);
    this.loft([x0, x1, z0, z1], [x0 + r, x1 - r, z0 + r, z1 - r], y1 - r, y1, material);
  }

  /** A cylinder lying along x or z (wheels, rollers). `edges` draws both rims. */
  lyingCylinder(axis: "x" | "z", cx: number, cz: number, y0: number, y1: number, length: number, diameter: number, material: Material, sides = 12, edges: Color | null = null): void {
    const r = Math.min(diameter, y1 - y0) / 2;
    if (r < 1e-4 || length < 1e-4) return;
    const cy = (y0 + y1) / 2;
    const [along, across] = axis === "x" ? [cx, cz] : [cz, cx];
    const at = (a: number, c: number): Vec2 => (axis === "x" ? this.plan(a, c) : this.plan(c, a));
    const first = this.buf.p.length;
    pushLyingCyl(this.buf, at, along - length / 2, along + length / 2, across, cy, r, material.side, material.top, sides);
    if (this.mirrored) flipWinding(this.buf, first);
    if (!edges) return;
    for (const a of [along - length / 2, along + length / 2]) {
      for (let i = 0; i < sides; i++) {
        const [t0, t1] = [(i / sides) * Math.PI * 2, ((i + 1) / sides) * Math.PI * 2];
        this.edge(at(a, across + Math.sin(t0) * r), at(a, across + Math.sin(t1) * r), cy + Math.cos(t0) * r, cy + Math.cos(t1) * r, edges);
      }
    }
  }

  /** An upright cylinder with `sides` sides. */
  cylinder(cx: number, cz: number, r: number, y0: number, y1: number, material: Material, sides = 10, edges: Color | null = null): void {
    const footprint = Array.from({ length: sides }, (_, i) => this.plan(cx + Math.cos((i / sides) * Math.PI * 2) * r, cz + Math.sin((i / sides) * Math.PI * 2) * r));
    pushPrism(this.buf, counterClockwise(footprint), y0, y1, material.side, material.top, { aoFrom: 0, bottom: y0 > 0.05 });
    if (edges) footprint.forEach((a, i) => this.edge(a, footprint[(i + 1) % sides], y1, y1, edges));
  }

  /** A ring of line on a front face (z = front): dials, fans, door outlines. */
  ring(cx: number, cy: number, r: number, z: number, segments = 20, color: Color = EDGE_FURN): void {
    for (let i = 0; i < segments; i++) {
      const [a0, a1] = [(i / segments) * Math.PI * 2, ((i + 1) / segments) * Math.PI * 2];
      this.seg(cx + Math.cos(a0) * r, cy + Math.sin(a0) * r, z, cx + Math.cos(a1) * r, cy + Math.sin(a1) * r, z, color);
    }
  }
}

/** The soft contact shadow under an item: a dark core that fades out beyond its footprint. */
export function contactShadow(shadow: GeoBuffer, plan: Plan, w: number, d: number, strength: number): void {
  const grow = Math.min(0.14, Math.max(0.06, Math.min(w, d) * 0.15));
  const dark = new Color(1 - strength, 1 - strength, 1 - strength);
  const clear = new Color(1, 1, 1);
  const y = 0.003;
  const ring = (g: number): Vec2[] => [plan(-w / 2 - g, -d / 2 - g), plan(w / 2 + g, -d / 2 - g), plan(w / 2 + g, d / 2 + g), plan(-w / 2 - g, d / 2 + g)];
  const [inner, outer] = [ring(0), ring(grow)];
  const at = (p: Vec2) => [p[0], y, p[1]];
  const first = shadow.p.length;
  shadow.tri(at(inner[0]), at(inner[1]), at(inner[2]), dark);
  shadow.tri(at(inner[0]), at(inner[2]), at(inner[3]), dark);
  for (let i = 0; i < 4; i++) {
    const j = (i + 1) % 4;
    shadow.tri(at(inner[i]), at(outer[i]), at(outer[j]), dark, clear, clear);
    shadow.tri(at(inner[i]), at(outer[j]), at(inner[j]), dark, clear, dark);
  }
  if (mirrors(plan)) flipWinding(shadow, first);
}

