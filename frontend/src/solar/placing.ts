// Proposals for new fields and windows, moving a field to another face, and turning a garden field.

import type { Building, RoofChimney, RoofWindow, SolarField } from "../model.ts";
import { GROUND, groundFace, wallFaces, type RoofFace } from "./faces.ts";
import { CHIMNEY_SIZE, chimneyAsField, clampField, fieldModules, fieldSize, MODULE_GAP, MODULE_H, MODULE_W, moduleSize, ROOF_WINDOW_H, ROOF_WINDOW_W, rowPitch } from "./fields.ts";
import { bearingOf, cm, DEG } from "./vec.ts";

/** The u that centres a field of its column count along the eave of a face. */
function centredU(face: RoofFace, f: SolarField): number {
  const [width] = moduleSize(f);
  return cm((face.lu - (f.cols * width + (f.cols - 1) * MODULE_GAP)) / 2);
}

const FIRST_ROW_OFFSET = 0.4;

/** A field that fits: as many modules as the face holds, centred along the eave, starting a little above it. */
export function proposeField(face: RoofFace, id: string): SolarField {
  const field: SolarField = { id, face: face.key, u: 0, v: 0, rows: 1, cols: 1, portrait: true, tilt: face.flat ? 15 : null, flip: false, entity: null, look: "black" };
  const [width] = moduleSize(field);
  const [from, to] = face.span(face.ls / 2);
  field.cols = Math.max(1, Math.floor((to - from - 2 * FIRST_ROW_OFFSET + MODULE_GAP) / (width + MODULE_GAP)));
  field.rows = Math.max(1, Math.min(4, Math.floor((face.ls - 2 * FIRST_ROW_OFFSET) / rowPitch(face, field))));
  // hip faces narrow towards the ridge: fewer columns until every module fits
  while (field.cols > 1 && fieldModules(face, { ...field, u: centredU(face, field), v: FIRST_ROW_OFFSET }).length < field.rows * field.cols) field.cols--;
  field.u = centredU(face, field);
  field.v = FIRST_ROW_OFFSET;
  return field;
}

/** A field moved to another face: it keeps its modules (rows, columns, format, and tilt where the face allows one), centred along the new eave and inside its edges. */
export function moveField(face: RoofFace, f: SolarField): SolarField {
  const moved: SolarField = { ...f, face: face.key, tilt: face.flat ? (f.tilt ?? 15) : null, rotation: null, flip: false };
  moved.u = centredU(face, moved);
  moved.v = FIRST_ROW_OFFSET;
  return { ...moved, ...clampField(face, moved) };
}

/** A new wall field: on the wall that gets the most sun for its length, one row of landscape modules at head height. */
export function proposeWallField(b: Building, id: string, floorId: string): SolarField | null {
  const north = b.settings.north ?? 0;
  // long walls facing south score best
  const score = (face: RoofFace) => face.lu * (1.3 + Math.cos(((bearingOf(face.facing, north) - 180) * Math.PI) / 180));
  const face = wallFaces(b, floorId).sort((p, q) => score(q) - score(p))[0];
  if (!face) return null;
  const field = { ...proposeField(face, id), portrait: false, rows: 1 };
  field.cols = Math.max(1, Math.floor((face.lu - 0.8 + MODULE_GAP) / (MODULE_H + MODULE_GAP)));
  field.u = cm((face.lu - (field.cols * MODULE_H + (field.cols - 1) * MODULE_GAP)) / 2);
  field.v = cm(Math.max(0, face.ls - MODULE_W - 0.3));
  return field;
}

/** A new garden field beside the house: two rows of four, tilted 25°, looking south. */
export function proposeGroundField(b: Building, id: string): SolarField {
  const corners = b.floors.flatMap((floor) => floor.rooms.flatMap((r) => r.points));
  const x = corners.length ? Math.max(...corners.map((p) => p[0])) + 3 : 0;
  const z = corners.length ? Math.min(...corners.map((p) => p[1])) : 0;
  // rows run along x and the modules lean up towards -z: with north up in the plan they look south
  return { id, face: GROUND, u: cm(x), v: cm(z), rows: 2, cols: 4, portrait: true, tilt: 25, flip: true, rotation: (b.settings.north ?? 0) || 0, look: "black", entity: null };
}

/**
 * A garden field turned about its middle: u and v are measured along the turned axes, so they are worked out again from
 * the field's centre in the plan (otherwise the field would jump away).
 */
export function turnGroundField(b: Building, f: SolarField, rotation: number): { u: number; v: number; rotation: number } {
  const face = groundFace(b, f);
  const [width, depth] = fieldSize(face, f);
  const [halfU, halfV] = [f.u + width / 2, f.v + depth / 2];
  const centre = [face.eu[0] * halfU + face.es[0] * halfV, face.eu[2] * halfU + face.es[2] * halfV];
  const r = rotation * DEG;
  // the centre stays put: the corner is half the size back along the new axes
  const u = centre[0] * Math.cos(r) + centre[1] * Math.sin(r) - width / 2;
  const v = centre[0] * -Math.sin(r) + centre[1] * Math.cos(r) - depth / 2;
  return { u: cm(u), v: cm(v), rotation: ((Math.round(rotation) % 360) + 360) % 360 };
}

/** A new roof window in the middle of a face, around head height above the floor below. */
export function proposeWindow(face: RoofFace, id: string): RoofWindow {
  const [from, to] = face.span(face.ls / 2);
  return {
    id,
    face: face.key,
    u: cm((from + to - ROOF_WINDOW_W) / 2),
    v: cm(Math.max(0, Math.min(face.ls - ROOF_WINDOW_H, face.ls * 0.45 - ROOF_WINDOW_H / 2))),
    w: null,
    h: null,
    cover: null,
    contact: null,
    tilt: null,
  };
}

/** A new chimney: a brick one near the ridge, in the middle of the face. */
export function proposeChimney(face: RoofFace, id: string): RoofChimney {
  const size = CHIMNEY_SIZE.brick;
  const [from, to] = face.span(face.ls * 0.8);
  const depth = chimneyAsField({ id, face: face.key, u: 0, v: 0 }, face).module_h!;
  return { id, face: face.key, u: cm((from + to - size.w) / 2), v: cm(Math.max(0, Math.min(face.ls - depth, face.ls * 0.8 - depth / 2))), shape: "brick", w: null, d: null, h: null };
}
