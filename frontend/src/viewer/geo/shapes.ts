// Solid shapes pushed into a buffer: prisms, lofts, smooth skins and lying cylinders.

import { Color, ShapeUtils, Vector2 } from "three";
import type { Vec2 } from "../../model.ts";
import { ALWAYS, type GeoBuffer } from "./buffers.ts";
import { heightShade, LIGHT, shade, sideLight } from "./colors.ts";

/** The signed area of a ring in (x, z), doubled: positive when counter-clockwise. */
const ringArea = (ring: Vec2[]): number => ring.reduce((sum, p, i) => sum + p[0] * ring[(i + 1) % ring.length][1] - ring[(i + 1) % ring.length][0] * p[1], 0);

const toVector = ([x, z]: Vec2) => new Vector2(x, z);

/** Triangles (index triples into the outline followed by the holes) that fill a polygon with holes. */
export function triangulate(outline: Vec2[], holes: Vec2[][] = []): number[][] {
  return ShapeUtils.triangulateShape(outline.map(toVector), holes.map((h) => h.map(toVector)));
}

type Rgb3 = number[];

const subtract = (a: Rgb3, b: Rgb3): Rgb3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const crossProduct = (a: Rgb3, b: Rgb3): Rgb3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dotProduct = (a: Rgb3, b: Rgb3): number => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const normalized = (a: Rgb3): Rgb3 => {
  const length = Math.hypot(a[0], a[1], a[2]) || 1;
  return [a[0] / length, a[1] / length, a[2] / length];
};

/**
 * A box whose top rectangle differs from its bottom one (sloped sides). `lo` and `hi` are the four corners in the same
 * order. Faces that lean upwards blend towards the top colour. `open` lists the side faces (by index of their bottom edge)
 * that are left out, for open ends (#140).
 */
export function pushLoft(buf: GeoBuffer, lo: Vec2[], hi: Vec2[], y0: number, y1: number, side: number, top: number, open: readonly number[] = []): void {
  const topColor = new Color(top);
  for (let i = 0; i < 4; i++) {
    if (open.includes(i)) continue;
    const [a, b] = [lo[i], lo[(i + 1) % 4]];
    const [A, B] = [hi[i], hi[(i + 1) % 4]];
    const [dx, dz] = [b[0] - a[0], b[1] - a[1]];
    const length = Math.hypot(dx, dz);
    if (length < 1e-6) continue;
    // how far the face leans back: its top edge moved inwards (the outward normal is (dz, -dx))
    const lean = ((A[0] + B[0] - a[0] - b[0]) / 2) * (-dz / length) + ((A[1] + B[1] - a[1] - b[1]) / 2) * (dx / length);
    const blendUp = Math.max(0, Math.min(1, lean / Math.max(1e-6, Math.hypot(lean, y1 - y0))));
    const light = sideLight(dx, dz);
    const lower = shade(side, heightShade(y0) * light).lerp(topColor, blendUp);
    const upper = shade(side, heightShade(y1) * light).lerp(topColor, blendUp);
    buf.tri([a[0], y0, a[1]], [A[0], y1, A[1]], [B[0], y1, B[1]], lower, upper, upper);
    buf.tri([a[0], y0, a[1]], [B[0], y1, B[1]], [b[0], y0, b[1]], lower, upper, lower);
  }
  const [h0, h1, h2, h3] = hi;
  if (Math.hypot(h2[0] - h0[0], h2[1] - h0[1]) > 1e-4) {
    buf.tri([h0[0], y1, h0[1]], [h2[0], y1, h2[1]], [h1[0], y1, h1[1]], topColor);
    buf.tri([h0[0], y1, h0[1]], [h3[0], y1, h3[1]], [h2[0], y1, h2[1]], topColor);
  }
}

/**
 * A smooth body: `rings` are cross sections along it (the same number of points each, going round the section), joined
 * into a skin with a shade per point taken from its own surface direction, so curves look round. Both ends are closed.
 * The winding follows from the geometry, so mirrored items need no extra care.
 */
export function pushSkin(buf: GeoBuffer, rings: number[][][], side: number, top: number): void {
  const count = rings.length;
  if (count < 2) return;
  const around = rings[0].length;
  const topColor = new Color(top);
  const centres = rings.map((ring) => [0, 1, 2].map((k) => ring.reduce((sum, p) => sum + p[k], 0) / around));

  // an outward normal for every point of every ring
  const normals = rings.map((ring, s) =>
    ring.map((p, i) => {
      const lengthways = subtract(rings[Math.min(count - 1, s + 1)][i], rings[Math.max(0, s - 1)][i]);
      const roundAbout = subtract(ring[(i + 1) % around], ring[(i + around - 1) % around]);
      const normal = normalized(crossProduct(lengthways, roundAbout));
      return dotProduct(normal, subtract(p, centres[s])) < 0 ? normal.map((v) => -v) : normal;
    }),
  );
  const colorAt = (p: Rgb3, normal: Rgb3) => {
    const lit = (normal[0] * LIGHT[0] + normal[2] * LIGHT[1] + 1) / 2;
    return shade(side, heightShade(p[1]) * (0.8 + 0.28 * lit)).lerp(topColor, Math.max(0, normal[1]) * 0.9);
  };
  // a triangle turned so that it faces `outward` (the average outward normal)
  const faceOut = (a: Rgb3, b: Rgb3, c: Rgb3, outward: Rgb3, ca: Color, cb: Color, cc: Color) => {
    if (dotProduct(crossProduct(subtract(b, a), subtract(c, a)), outward) >= 0) buf.tri(a, b, c, ca, cb, cc);
    else buf.tri(a, c, b, ca, cc, cb);
  };

  for (let s = 0; s + 1 < count; s++) {
    for (let i = 0; i < around; i++) {
      const j = (i + 1) % around;
      const corners = [rings[s][i], rings[s][j], rings[s + 1][j], rings[s + 1][i]];
      const cornerNormals = [normals[s][i], normals[s][j], normals[s + 1][j], normals[s + 1][i]];
      const [ca, cb, cc, cd] = corners.map((p, k) => colorAt(p, cornerNormals[k]));
      const outward = [0, 1, 2].map((k) => cornerNormals.reduce((sum, n) => sum + n[k], 0));
      faceOut(corners[0], corners[1], corners[2], outward, ca, cb, cc);
      faceOut(corners[0], corners[2], corners[3], outward, ca, cc, cd);
    }
  }
  // close both ends with a fan around the centre
  for (const [s, direction] of [[0, -1], [count - 1, 1]] as const) {
    const ring = rings[s];
    const lengthways = subtract(rings[s === 0 ? 1 : count - 2][0], ring[0]);
    const outward = normalized(lengthways.map((v) => v * -direction));
    const color = colorAt(centres[s], outward);
    for (let i = 0; i < around; i++) faceOut(ring[i], ring[(i + 1) % around], centres[s], outward, color, color, color);
  }
}

/**
 * A cylinder lying along the x or z axis (wheels, rollers, pipes). `at` maps an along-axis value and an across value to
 * world (x, z); `c` is the centre across, `cy` the centre height, `n` the number of sides.
 */
export function pushLyingCyl(buf: GeoBuffer, at: (along: number, across: number) => Vec2, a0: number, a1: number, c: number, cy: number, r: number, side: number, cap: number, n: number): void {
  const capColor = new Color(cap);
  const round = Array.from({ length: n }, (_, i) => {
    const angle = (i / n) * Math.PI * 2;
    return { y: cy + Math.cos(angle) * r, across: c + Math.sin(angle) * r };
  });
  const point = (along: number, i: number): Rgb3 => {
    const { y, across } = round[i % n];
    const [x, z] = at(along, across);
    return [x, y, z];
  };
  for (let i = 0; i < n; i++) {
    const color = shade(side, 0.62 + 0.4 * Math.max(0, Math.cos(((i + 0.5) / n) * Math.PI * 2)));
    buf.tri(point(a0, i), point(a1, i + 1), point(a1, i), color);
    buf.tri(point(a0, i), point(a0, i + 1), point(a1, i + 1), color);
  }
  for (const along of [a0, a1]) {
    const [x, z] = at(along, c);
    for (let i = 0; i < n; i++) buf.tri([x, cy, z], point(along, i), point(along, i + 1), capColor);
  }
}

export interface PrismOptions {
  /** Height from which the baked darkening towards the floor starts (default: the bottom). */
  aoFrom?: number;
  fold?: number;
  topFold?: number;
  bottom?: boolean;
  topFace?: boolean;
  /** Cut-outs in the area: their rings are turned so the inner sides face the hole. */
  holes?: Vec2[][];
  skipSide?: (a: Vec2, b: Vec2) => boolean;
  /** The colour of each side face instead of `side` (painted walls: each face in the colour of the room it faces). */
  sideColor?: (a: Vec2, b: Vec2) => number;
}

/**
 * A vertical prism over a counter-clockwise polygon. The side colours darken towards the floor (baked occlusion) and
 * vary slightly with the direction the face points to. The top can follow a height function (a wall ending under a roof
 * slope), which stays flat for a wall piece inside one roof plane.
 */
export function pushPrism(buf: GeoBuffer, poly: Vec2[], y0: number | ((x: number, z: number) => number), y1: number | ((x: number, z: number) => number), side: number, top: number, opts: PrismOptions = {}): void {
  // the bottom may vary too (a hanging wall whose lower edge follows a roof slope, #114)
  const bottomAt = typeof y0 === "number" ? () => y0 : (p: Vec2) => y0(p[0], p[1]);
  const topAt = typeof y1 === "number" ? (p: Vec2) => (typeof y0 === "number" ? y1 : Math.max(bottomAt(p) + 0.002, y1)) : (p: Vec2) => Math.max(bottomAt(p) + 0.002, y1(p[0], p[1]));
  const aoFrom = opts.aoFrom ?? (typeof y0 === "number" ? y0 : 0);
  const fold = opts.fold ?? ALWAYS;
  const occlusion = (y: number) => heightShade(y - aoFrom);
  const holes = (opts.holes ?? []).map((h) => (ringArea(h) > 0 ? [...h].reverse() : h));
  const corners = holes.length ? [...poly, ...holes.flat()] : poly;
  const withTop = opts.topFace !== false;
  const triangles = !withTop && !opts.bottom ? [] : triangulate(poly, holes);

  if (withTop) {
    const color = new Color(top);
    for (const [i, j, k] of triangles) {
      // the polygon is counter-clockwise in (x, z), which is clockwise seen from above (+y): swap two corners
      const [a, b, c] = [corners[i], corners[j], corners[k]];
      buf.tri([a[0], topAt(a), a[1]], [c[0], topAt(c), c[1]], [b[0], topAt(b), b[1]], color, color, color, undefined, opts.topFold ?? fold);
    }
  }
  if (opts.bottom) {
    const color = shade(side, 0.55);
    for (const [i, j, k] of triangles) {
      const [a, b, c] = [corners[i], corners[j], corners[k]];
      buf.tri([a[0], bottomAt(a), a[1]], [b[0], bottomAt(b), b[1]], [c[0], bottomAt(c), c[1]], color, color, color, undefined, fold);
    }
  }
  for (const ring of [poly, ...holes]) {
    ring.forEach((a, i) => {
      const b = ring[(i + 1) % ring.length];
      if (Math.hypot(b[0] - a[0], b[1] - a[1]) < 1e-6 || opts.skipSide?.(a, b)) return;
      const light = sideLight(b[0] - a[0], b[1] - a[1]);
      const [ya, yb] = [topAt(a), topAt(b)];
      const [fa, fb] = [bottomAt(a), bottomAt(b)];
      const own = opts.sideColor ? opts.sideColor(a, b) : side;
      const footA = shade(own, occlusion(fa) * light);
      const footB = shade(own, occlusion(fb) * light);
      const headA = shade(own, occlusion(ya) * light);
      const headB = shade(own, occlusion(yb) * light);
      buf.tri([a[0], fa, a[1]], [a[0], ya, a[1]], [b[0], yb, b[1]], footA, headA, headB, undefined, fold);
      buf.tri([a[0], fa, a[1]], [b[0], yb, b[1]], [b[0], fb, b[1]], footA, headB, footB, undefined, fold);
    });
  }
}
