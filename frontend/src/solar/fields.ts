// The modules of a solar field on its face: size, layout, tilt, and the 3D corners of every module.

import type { ChimneyShape, RoofChimney, RoofWindow, SolarField, Vec2 } from "../model.ts";
import type { RoofFace } from "./faces.ts";
import { DEG, type V3 } from "./vec.ts";

/** A common 400 W module: width and height in portrait (m), and the gap between modules. */
export const MODULE_W = 1.13;
export const MODULE_H = 1.72;
export const MODULE_GAP = 0.025;
/** The modules ride this high above the roof surface on mounting rails. */
export const LIFT = 0.07;

/** One module: its four corners (lower left, lower right, upper right, upper left) and, on a flat roof, its stand. */
export interface SolarModule {
  corners: [V3, V3, V3, V3];
  /** Flat roofs: the feet of the raised upper edge (posts from the roof up to the module). */
  posts: [V3, V3][];
  /** The cell in the field ("row:column") and whether it is switched off (only listed when asked for). */
  cell: string;
  skipped: boolean;
}

/** The size of a module along the eave and up the slope. */
export function moduleSize(f: Pick<SolarField, "portrait" | "module_w" | "module_h">): [number, number] {
  const w = f.module_w || MODULE_W;
  const h = f.module_h || MODULE_H;
  return f.portrait === false ? [h, w] : [w, h];
}

/** How many modules each row has: the layout (rows of their own length) or `cols` in every row. */
export function rowCounts(f: Pick<SolarField, "rows" | "cols" | "layout">): number[] {
  if (f.layout?.length) return f.layout.map((n) => Math.max(0, Math.min(60, Math.round(n))));
  return Array.from({ length: Math.max(1, f.rows) }, () => Math.max(1, f.cols));
}

/** The tilt of a field's modules in radians: frames on flat ground (15° by default), standing off a wall (0 by default). */
function tiltOf(face: RoofFace, f: Pick<SolarField, "tilt">): number {
  if (face.flat) return Math.min(45, Math.max(0, f.tilt ?? 15)) * DEG;
  if (face.wall) return Math.min(90, Math.max(0, f.tilt ?? 0)) * DEG;
  // a pitched roof: modules lie on it, or stand on a rack that tilts them further (a roof too flat for the sun)
  return Math.min(45, Math.max(0, f.tilt ?? 0)) * DEG;
}

/** The distance from one row to the next: on a flat roof the module's depth plus a gap against shading. */
export function rowPitch(face: RoofFace, f: Pick<SolarField, "portrait" | "tilt" | "module_w" | "module_h"> & { rack?: SolarField["rack"] }): number {
  const [, height] = moduleSize(f);
  const tilt = tiltOf(face, f);
  // a wall: rows one above the other, as high as a tilted module reaches
  if (face.wall) return height * Math.cos(tilt) + MODULE_GAP;
  if (!face.flat && tilt < 0.001) return height + MODULE_GAP;
  // east-west: the rows stand back to back in pairs, no gap against shading needed
  if (face.flat && (f as Pick<SolarField, "rack">).rack === "ew") return height * Math.cos(tilt) + 0.08;
  return height * Math.cos(tilt) + Math.max(0.3, 2 * height * Math.sin(tilt));
}

/** Width (the longest row) and depth (all rows) of a field on its face. */
export function fieldSize(face: RoofFace, f: SolarField): [number, number] {
  const [width, height] = moduleSize(f);
  const counts = rowCounts(f);
  const longest = Math.max(1, ...counts);
  return [longest * width + (longest - 1) * MODULE_GAP, (counts.length - 1) * rowPitch(face, f) + height * Math.cos(tiltOf(face, f))];
}

/** Whether a field on this face may be turned about its middle: flat roofs only (garden fields turn their whole face instead). */
const turnable = (face: RoofFace): boolean => face.flat && !face.unbounded && !face.wall;

/** A field's turn in radians (clockwise in the plan, like the garden fields) and the point it turns about, in face coordinates; null when it stands straight. */
function turnOf(face: RoofFace, f: SolarField): { cos: number; sin: number; u: number; s: number } | null {
  if (!turnable(face) || !f.rotation) return null;
  const r = f.rotation * DEG;
  const [width, depth] = fieldSize(face, f);
  return { cos: Math.cos(r), sin: Math.sin(r), u: f.u + width / 2, s: f.v + depth / 2 };
}

/**
 * The modules of a field on its face. Modules that would leave the face (a hip, the ridge) are left out, and so are the
 * ones switched off, unless `withSkipped` asks for them (the editor shows them).
 */
export function fieldModules(face: RoofFace, f: SolarField, withSkipped = false): SolarModule[] {
  const [width, height] = moduleSize(f);
  const tilt = tiltOf(face, f);
  const depth = height * Math.cos(tilt);
  const pitch = rowPitch(face, f);
  const counts = rowCounts(f);
  const longest = Math.max(1, ...counts);
  const switchedOff = new Set(f.skip ?? []);
  const turn = turnOf(face, f);
  // a turned field: every point of it swings about the field's middle
  const turned = (u: number, s: number): [number, number] => (turn ? [turn.u + (u - turn.u) * turn.cos - (s - turn.s) * turn.sin, turn.s + (u - turn.u) * turn.sin + (s - turn.s) * turn.cos] : [u, s]);
  const at = (u0: number, s0: number, up: number): V3 => {
    const [u, s] = turned(u0, s0);
    return [0, 1, 2].map((i) => face.o[i] + face.eu[i] * u + face.es[i] * s + face.n[i] * up) as V3;
  };
  const onFace = (u0: number, s0: number) => {
    const [u, s] = turned(u0, s0);
    if (face.unbounded) return true;
    if (s < -1e-6 || s > face.ls + 1e-6) return false;
    const [from, to] = face.span(s);
    return u >= from - 1e-6 && u <= to + 1e-6;
  };

  const modules: SolarModule[] = [];
  counts.forEach((count, row) => {
    // a shorter row sits left, centred or right under the longest one
    const shift = f.align === "right" ? longest - count : f.align === "center" ? (longest - count) / 2 : 0;
    for (let col = 0; col < count; col++) {
      const cell = `${row}:${col}`;
      const skipped = switchedOff.has(cell);
      if (skipped && !withSkipped) continue;
      const u0 = f.u + (col + shift) * (width + MODULE_GAP);
      const u1 = u0 + width;
      const s0 = f.v + row * pitch;
      const s1 = s0 + (face.flat || face.wall || tilt > 0.001 ? depth : height);
      if (![[u0, s0], [u1, s0], [u1, s1], [u0, s1]].every(([u, s]) => onFace(u, s))) continue;

      if (face.wall && tilt > 0.001) {
        // tilted on a wall: the upper edge stands off the wall (the lower edge when flipped), on brackets
        const away = LIFT + height * Math.sin(tilt);
        const [lowLift, highLift] = f.flip ? [away, LIFT] : [LIFT, away];
        const corners: [V3, V3, V3, V3] = [at(u0, s0, lowLift), at(u1, s0, lowLift), at(u1, s1, highLift), at(u0, s1, highLift)];
        const edge = f.flip ? s0 : s1;
        modules.push({ corners, posts: [u0 + 0.05, u1 - 0.05].map((u) => [at(u, edge, 0), at(u, edge, away)] as [V3, V3]), cell, skipped });
      } else if (!face.flat && tilt > 0.001) {
        // a rack on a pitched roof: the upper edge stands off the roof, on brackets
        const away = LIFT + height * Math.sin(tilt);
        const corners: [V3, V3, V3, V3] = [at(u0, s0, LIFT), at(u1, s0, LIFT), at(u1, s1, away), at(u0, s1, away)];
        modules.push({ corners, posts: [u0 + 0.05, u1 - 0.05].map((u) => [at(u, s1, 0), at(u, s1, away)] as [V3, V3]), cell, skipped });
      } else if (!face.flat) {
        modules.push({ corners: [at(u0, s0, LIFT), at(u1, s0, LIFT), at(u1, s1, LIFT), at(u0, s1, LIFT)], posts: [], cell, skipped });
      } else {
        // flat roof or ground: the module leans up towards +s (towards -s when flipped), on a low frame; east-west racks turn every
        // second row the other way, so each pair stands back to back
        const low = 0.15;
        const high = low + height * Math.sin(tilt);
        const flipped = f.rack === "ew" && row % 2 === 1 ? !f.flip : !!f.flip;
        const [sLow, sHigh] = flipped ? [s1, s0] : [s0, s1];
        const corners: [V3, V3, V3, V3] = [at(u0, sLow, low), at(u1, sLow, low), at(u1, sHigh, high), at(u0, sHigh, high)];
        const posts = [u0 + 0.05, u1 - 0.05].flatMap((u) => [[at(u, sLow, 0), at(u, sLow, low)], [at(u, sHigh, 0), at(u, sHigh, high)]] as [V3, V3][]);
        modules.push({ corners, posts, cell, skipped });
      }
    }
  });
  return modules;
}

/** The corners of every module of a field in the plan, for the editor. */
export const fieldPlan = (face: RoofFace, f: SolarField): Vec2[][] => fieldModules(face, f).map((m) => m.corners.map((p) => [p[0], p[2]] as Vec2));

/** Keeps a field on its face: its corner moves so the whole field stays on the face where it can. */
export function clampField(face: RoofFace, f: SolarField): { u: number; v: number } {
  if (face.unbounded) return { u: f.u, v: f.v };
  const [width, depth] = fieldSize(face, f);
  const turn = turnOf(face, f);
  if (turn) {
    // a turned field: its middle stays where the turned outline still fits on the face
    const [halfU, halfS] = [(width * Math.abs(turn.cos) + depth * Math.abs(turn.sin)) / 2, (width * Math.abs(turn.sin) + depth * Math.abs(turn.cos)) / 2];
    const inside = (centre: number, half: number, size: number) => Math.floor(Math.max(half, Math.min(centre, size - half)) * 100 + 1e-6) / 100;
    const [cu, cs] = [f.u + width / 2, f.v + depth / 2];
    return { u: Math.round((inside(cu, halfU, face.lu) - width / 2) * 100) / 100, v: Math.round((inside(cs, halfS, face.ls) - depth / 2) * 100) / 100 };
  }
  // rounded down to centimetres, so a field pushed to the far edge still fits completely
  const down = (x: number) => Math.floor(x * 100 + 1e-6) / 100;
  return { u: down(Math.min(Math.max(0, f.u), Math.max(0, face.lu - width))), v: down(Math.min(Math.max(0, f.v), Math.max(0, face.ls - depth))) };
}

/** The middle of a field in the plan. */
export function fieldCenter(face: RoofFace, f: SolarField): Vec2 {
  const [width, depth] = fieldSize(face, f);
  const [u, s] = [f.u + width / 2, f.v + depth / 2];
  return [face.o[0] + face.eu[0] * u + face.es[0] * s, face.o[2] + face.eu[2] * u + face.es[2] * s];
}

// ---------------------------------------------------------------- roof windows

/** The usual roof window size, 78 × 118 cm. */
export const ROOF_WINDOW_W = 0.78;
export const ROOF_WINDOW_H = 1.18;

/** A roof window as a field of one module of its own size, so that placing, moving and keeping it on the face work alike. */
export const windowAsField = (w: RoofWindow): SolarField => ({ id: w.id, face: w.face, u: w.u, v: w.v, rows: 1, cols: 1, portrait: true, module_w: w.w || ROOF_WINDOW_W, module_h: w.h || ROOF_WINDOW_H, tilt: 0 });

/** The four corners of a roof window, sunk 5 cm into the roof (lower left, lower right, upper right, upper left). Null off the face. */
export function windowCorners(face: RoofFace, w: RoofWindow): [V3, V3, V3, V3] | null {
  const module = fieldModules(face, windowAsField(w))[0];
  if (!module) return null;
  // modules ride 7 cm above the roof on rails; a roof window sits nearly flush. On a flat roof it lies flat (a field there
  // stands on a frame, a window does not; D#126) on a low kerb that keeps the water out
  const by = face.flat ? -0.03 : 0.05;
  const sink = (p: V3): V3 => [p[0] - face.n[0] * by, p[1] - face.n[1] * by, p[2] - face.n[2] * by];
  return module.corners.map(sink) as [V3, V3, V3, V3];
}

// ---------------------------------------------------------------- chimneys

/** The usual size of each chimney shape: width along the eave, depth in the plan, height above the roof (m). */
export const CHIMNEY_SIZE: Record<ChimneyShape, { w: number; d: number; h: number }> = {
  brick: { w: 0.5, d: 0.5, h: 1 },
  round: { w: 0.4, d: 0.4, h: 1 },
  wide: { w: 1, d: 0.5, h: 1 },
  steel: { w: 0.2, d: 0.2, h: 1.2 },
};

/** A chimney's shape and size, the shape's usual size where none is set. */
export function chimneySize(c: RoofChimney): { shape: ChimneyShape; w: number; d: number; h: number } {
  const shape = c.shape ?? "brick";
  const usual = CHIMNEY_SIZE[shape] ?? CHIMNEY_SIZE.brick;
  return { shape, w: c.w || usual.w, d: c.d || usual.d, h: c.h || usual.h };
}

/** A chimney as a field of one module the size of its footprint on the slope, so placing and moving work like a roof window's. */
export function chimneyAsField(c: RoofChimney, face: RoofFace | null | undefined): SolarField {
  const { w, d } = chimneySize(c);
  const slope = face && !face.flat ? Math.cos(face.pitch * DEG) : 1;
  return { id: c.id, face: c.face, u: c.u, v: c.v, rows: 1, cols: 1, portrait: true, module_w: w, module_h: d / Math.max(0.2, slope), tilt: 0 };
}

/**
 * Where a chimney stands: the middle of its footprint in the plan, the plan directions along the eave and across it,
 * and the roof's lowest and highest point under it (heights above the ground).
 */
export function chimneyPlace(face: RoofFace, c: RoofChimney): { center: Vec2; along: Vec2; across: Vec2; low: number; high: number } {
  const f = chimneyAsField(c, face);
  const [w, slope] = [f.module_w!, f.module_h!];
  const at = (u: number, s: number): V3 => [face.o[0] + face.eu[0] * u + face.es[0] * s, face.o[1] + face.eu[1] * u + face.es[1] * s, face.o[2] + face.eu[2] * u + face.es[2] * s];
  const [p0, p1] = [at(c.u + w / 2, c.v), at(c.u + w / 2, c.v + slope)];
  const mid = at(c.u + w / 2, c.v + slope / 2);
  const flat = (v: readonly number[]): Vec2 => {
    const n = Math.hypot(v[0], v[2]) || 1;
    return [v[0] / n, v[2] / n];
  };
  return { center: [mid[0], mid[2]], along: flat(face.eu), across: flat(face.es), low: Math.min(p0[1], p1[1]), high: Math.max(p0[1], p1[1]) };
}
