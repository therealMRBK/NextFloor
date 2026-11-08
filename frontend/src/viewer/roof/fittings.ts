// What sits in a roof: solar modules and roof windows.

import type { Building, SolarField } from "../../model.ts";
import { chimneyPlace, chimneySize, fieldModules, roofFaces, windowCorners, type RoofFace } from "../../solar.ts";
import { DEG, pushPrism, type GeoBuffer, type LineBuffer } from "../geo.ts";
import type { Vec2 } from "../../model.ts";
import { CHIMNEY, CHIMNEY_CAP, CHIMNEY_EDGE, CHIMNEY_FLUE, CHIMNEY_STEEL, CHIMNEY_STEEL_TOP, CHIMNEY_TOP, PANEL_LOOKS, PANEL_POST, WINDOW_BLIND, WINDOW_FRAME, WINDOW_GLASS, WINDOW_WARM } from "./palette.ts";
import type { RoofGeometry } from "./types.ts";

/** How far a roof window's sash is open (1 = open, a tilt counts less) and how far its blind is down. */
export interface RoofWindowState {
  open: number;
  tilt: number;
  cover: number;
}

type P3 = number[];
const lerp3 = (p: P3, q: P3, t: number): P3 => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t, p[2] + (q[2] - p[2]) * t];
const along = (p: P3, direction: readonly number[], k: number): P3 => [p[0] + direction[0] * k, p[1] + direction[1] * k, p[2] + direction[2] * k];

/** The part of the roof a face belongs to: the one carrying its section, or the first part for the single roof. */
const partOf = (parts: RoofGeometry[], face: RoofFace): RoofGeometry | undefined => (face.section ? parts.find((p) => p.sections?.includes(face.section!)) : parts[0]);

/** Roof windows: frame and glass in the slope; the sash swings out at the top when open, and the blind comes down. */
export function pushRoofWindows(b: Building, parts: RoofGeometry[], states: ReadonlyMap<string, RoofWindowState>): void {
  const windows = b.settings.roof?.windows ?? [];
  if (windows.length === 0 || parts.length === 0) return;
  const faces = new Map(roofFaces(b).map((f) => [f.key, f]));
  for (const w of windows) {
    const face = faces.get(w.face);
    const corners = face ? windowCorners(face, w) : null;
    const part = face && corners ? partOf(parts, face) : undefined;
    if (!face || !corners || !part) continue;
    const shift = part.floor.elevation + part.base;
    const [a, c, d, e] = corners.map((p): P3 => [p[0], p[1] - shift, p[2]]);
    const state = states.get(w.id) ?? { open: 0, tilt: 0, cover: 0 };
    const raised = (p: P3, k: number) => along(p, face.n, k);

    // the fixed frame in the roof, glowing warm while the window is open or tilted
    const frame = state.open > 0.02 || state.tilt > 0.02 ? WINDOW_WARM : WINDOW_FRAME;
    const ring = [a, c, d, e].map((p) => raised(p, 0.06));
    ring.forEach((p, i) => part.lines.seg(p, ring[(i + 1) % 4], frame));

    // the sash is hinged at the top: its lower edge swings out along the normal (up to 30° open, as far as a motor reports; 12° tilted)
    const angle = (state.open > 0.02 ? 30 * Math.min(1, state.open) : state.tilt > 0.5 ? 12 : 0) * DEG;
    const height = Math.hypot(d[0] - c[0], d[1] - c[1], d[2] - c[2]);
    const swing = (top: P3): P3 => along(along(top, face.es, -height * Math.cos(angle)), face.n, height * Math.sin(angle));
    const [top0, top1] = [raised(e, 0.065), raised(d, 0.065)];
    const [bottom0, bottom1] = [swing(top0), swing(top1)];
    part.solid.tri(bottom0, bottom1, top1, WINDOW_GLASS);
    part.solid.tri(bottom0, top1, top0, WINDOW_GLASS);
    for (const [p, q] of [[bottom0, bottom1], [bottom1, top1], [top1, top0], [top0, bottom0]]) part.lines.seg(p, q, frame);

    // the blind comes down from the top over the sash
    if (state.cover > 0.02) {
      const k = Math.min(1, state.cover);
      const [b0, b1] = [raised(lerp3(top0, bottom0, k), 0.01), raised(lerp3(top1, bottom1, k), 0.01)];
      const [t0, t1] = [raised(top0, 0.01), raised(top1, 0.01)];
      part.solid.tri(b0, b1, t1, WINDOW_BLIND);
      part.solid.tri(b0, t1, t0, WINDOW_BLIND);
    }
  }
}

/** The modules of a field (glass, frame, cell grid, stands on flat ground), lowered by `dy` into local coordinates. */
export function pushModules(solid: GeoBuffer, lines: LineBuffer, face: RoofFace, field: SolarField, dy: number): void {
  const lower = (p: P3): P3 => [p[0], p[1] - dy, p[2]];
  const look = PANEL_LOOKS[field.look === "blue" ? "blue" : "black"];
  const [cellsAcross, cellsUp] = field.portrait === false ? [10, 6] : [6, 10];
  for (const module of fieldModules(face, field)) {
    const [a, c, d, e] = module.corners.map(lower);
    // both sides: on a floor (garden, walls) only front faces are drawn, and a module may lean either way
    for (const [p, q, r] of [[a, c, d], [a, d, e], [a, d, c], [a, e, d]]) solid.tri(p, q, r, look.glass);
    // the frame a hair above the glass, and the cell grid
    const lifted = (p: P3) => along(p, face.n, 0.004);
    const ring = [a, c, d, e].map(lifted);
    ring.forEach((p, i) => lines.seg(p, ring[(i + 1) % 4], look.edge));
    for (let i = 1; i < cellsAcross; i++) lines.seg(lifted(lerp3(a, c, i / cellsAcross)), lifted(lerp3(e, d, i / cellsAcross)), look.cells);
    for (let j = 1; j < cellsUp; j++) lines.seg(lifted(lerp3(a, e, j / cellsUp)), lifted(lerp3(c, d, j / cellsUp)), look.cells);
    for (const [p, q] of module.posts) lines.seg(lower(p), lower(q), PANEL_POST);
  }
}

/** Solar fields on the roof: every module on its face, in the coordinates of the roof part the face belongs to. */
export function pushSolar(b: Building, parts: RoofGeometry[]): void {
  const fields = b.settings.roof?.solar ?? [];
  if (fields.length === 0 || parts.length === 0) return;
  const faces = new Map(roofFaces(b).map((f) => [f.key, f]));
  for (const field of fields) {
    const face = faces.get(field.face);
    const part = face ? partOf(parts, face) : undefined;
    // faces have heights above the ground; parts count from their floor's level plus their base
    if (face && part) pushModules(part.solid, part.lines, face, field, part.floor.elevation + part.base);
  }
}

/**
 * Chimneys: upright from inside the roof to `h` above its upper side. Brick and wide ones get a cap and their black flues on
 * top, a round one a flue in its middle, a steel pipe a rain cap held a little above it.
 */
export function pushChimneys(b: Building, parts: RoofGeometry[]): void {
  const chimneys = b.settings.roof?.chimneys ?? [];
  if (chimneys.length === 0 || parts.length === 0) return;
  const faces = new Map(roofFaces(b).map((f) => [f.key, f]));
  for (const c of chimneys) {
    const face = faces.get(c.face);
    const part = face ? partOf(parts, face) : undefined;
    if (!face || !part) continue;
    const shift = part.floor.elevation + part.base;
    const { shape, w, d, h } = chimneySize(c);
    const place = chimneyPlace(face, c);
    const [y0, y1] = [place.low - shift - 0.1, place.high - shift + h];
    const rect = (hw: number, hd: number): Vec2[] => {
      const { center: m, along: a, across: x } = place;
      const p = (su: number, sd: number): Vec2 => [m[0] + a[0] * hw * su + x[0] * hd * sd, m[1] + a[1] * hw * su + x[1] * hd * sd];
      return [p(-1, -1), p(1, -1), p(1, 1), p(-1, 1)];
    };
    const circle = (r: number, n = 16): Vec2[] => Array.from({ length: n }, (_, i) => [place.center[0] + Math.cos((i / n) * 2 * Math.PI) * r, place.center[1] + Math.sin((i / n) * 2 * Math.PI) * r] as Vec2);
    const outline = (poly: Vec2[], y: number) => poly.forEach((p, i) => part.lines.seg([p[0], y, p[1]], [poly[(i + 1) % poly.length][0], y, poly[(i + 1) % poly.length][1]], CHIMNEY_EDGE));
    const prism = (poly: Vec2[], from: number, to: number, side: number, top: number) => pushPrism(part.solid, ensureCcw(poly), from, to, side, top);
    if (shape === "steel") {
      const r = Math.min(w, d) / 2;
      prism(circle(r, 12), y0, y1, CHIMNEY_STEEL, CHIMNEY_STEEL_TOP);
      prism(circle(r * 0.75, 12), y1, y1 + 0.001, CHIMNEY_FLUE, CHIMNEY_FLUE);
      // the rain cap on its little stand
      prism(circle(r * 0.25, 6), y1, y1 + 0.1, CHIMNEY_STEEL, CHIMNEY_STEEL_TOP);
      const hat = circle(r * 1.9, 12);
      prism(hat, y1 + 0.1, y1 + 0.13, CHIMNEY_STEEL, CHIMNEY_STEEL_TOP);
      outline(hat, y1 + 0.13);
      continue;
    }
    if (shape === "round") {
      const r = Math.min(w, d) / 2;
      const body = circle(r);
      prism(body, y0, y1, CHIMNEY, CHIMNEY_TOP);
      prism(circle(r * 0.55), y1, y1 + 0.002, CHIMNEY_FLUE, CHIMNEY_FLUE);
      outline(body, y1);
      continue;
    }
    // brick and wide: the shaft, a cap a little wider, and the flues on top
    const body = rect(w / 2, d / 2);
    prism(body, y0, y1, CHIMNEY, CHIMNEY_TOP);
    const cap = rect(w / 2 + 0.04, d / 2 + 0.04);
    prism(cap, y1, y1 + 0.06, CHIMNEY_CAP, CHIMNEY_CAP);
    outline(cap, y1 + 0.06);
    outline(body, y1 - 0.25);
    const flue = Math.min(w, d) * 0.25;
    const flues = shape === "wide" ? [-w / 4, w / 4] : [0];
    for (const off of flues) {
      const m: Vec2 = [place.center[0] + place.along[0] * off, place.center[1] + place.along[1] * off];
      const pipe: Vec2[] = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([su, sd]) => [m[0] + place.along[0] * flue * su + place.across[0] * flue * sd, m[1] + place.along[1] * flue * su + place.across[1] * flue * sd]);
      prism(pipe, y1 + 0.06, y1 + 0.16, CHIMNEY_CAP, CHIMNEY_FLUE);
    }
  }
}

/** pushPrism wants its ring counter-clockwise in the plan (seen from above). */
function ensureCcw(poly: Vec2[]): Vec2[] {
  let area = 0;
  for (let i = 0; i < poly.length; i++) {
    const [p, q] = [poly[i], poly[(i + 1) % poly.length]];
    area += p[0] * q[1] - q[0] * p[1];
  }
  return area < 0 ? [...poly].reverse() : poly;
}
