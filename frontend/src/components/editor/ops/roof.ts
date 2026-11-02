// Roof sections as the editor makes them: a section drawn on the plan, a copy, and the sections' list helpers.

import { sectionCorners } from "../../../roof/frame.ts";
import { uid, type Building, type RoofSection, type Vec2 } from "../../../model.ts";
import { polygonBox, wallTopUnder } from "../../../roof-sections.ts";

const thousandths = (v: number) => Math.round(v * 1000) / 1000;

/** The height of a canopy's eaves above the ground floor. */
const CANOPY_EAVE = 2.4;

/**
 * A section drawn as a rectangle on the plan. Over rooms of a lower floor (a garage) its eaves sit on those walls, over no room
 * (a terrace, a carport) it becomes a canopy: a flat pent roof on posts 2.4 m above the ground floor.
 */
export function sectionFromRectangle(doc: Building, lo: Vec2, hi: Vec2): RoofSection {
  const wallTop = wallTopUnder(doc, lo[0], lo[1], hi[0], hi[1]);
  const canopy = wallTop === null;
  const ground = Math.min(...doc.floors.map((f) => f.elevation));
  const eave = thousandths(wallTop ?? ground + CANOPY_EAVE);
  const pitch = canopy ? 6 : doc.settings.roof.pitch || 35;
  return {
    id: uid("roof"),
    x0: thousandths(lo[0]),
    z0: thousandths(lo[1]),
    x1: thousandths(hi[0]),
    z1: thousandths(hi[1]),
    shape: canopy ? "pent" : "gable",
    axis: hi[0] - lo[0] >= hi[1] - lo[1] ? "x" : "z",
    eave_a: eave,
    eave_b: eave,
    pitch_a: pitch,
    pitch_b: pitch,
    base: eave,
    overhang: canopy ? 0.15 : null,
    ...(canopy ? { open: true } : {}),
  };
}

/** A copy of a section, a metre to the south east, so that it can be told from the original. */
export function copyOfSection(section: RoofSection): RoofSection {
  const move = (v: number) => thousandths(v + 1);
  return { ...structuredClone(section), id: uid("roof"), x0: move(section.x0), x1: move(section.x1), z0: move(section.z0), z1: move(section.z1) };
}

/** A section, or the list's 1-based number of it (0 when it is not in the list). */
export const sectionNumber = (sections: readonly RoofSection[], id: string): number => sections.findIndex((s) => s.id === id) + 1;

/** The outline of a flat roof section: its own free shape, or the corners of its rectangle. */
export function roofOutline(s: RoofSection): Vec2[] {
  if (s.points && s.points.length >= 3) return s.points.map(([x, z]): Vec2 => [x, z]);
  if (s.rotation) return sectionCorners(s);
  return [[s.x0, s.z0], [s.x1, s.z0], [s.x1, s.z1], [s.x0, s.z1]];
}

/** A new corner in the middle of an edge of a flat roof: a rectangle becomes a free shape, and the section's box follows its points. */
export function insertRoofCorner(s: RoofSection, edge: number, at: Vec2): void {
  const points = roofOutline(s);
  points.splice(edge + 1, 0, [thousandths(at[0]), thousandths(at[1])]);
  s.points = points;
  Object.assign(s, polygonBox(points));
}

/** Takes a corner of a free flat roof away; a free shape keeps at least three. */
export function removeRoofCorner(s: RoofSection, index: number): boolean {
  if (!s.points || s.points.length <= 3 || index < 0 || index >= s.points.length) return false;
  s.points.splice(index, 1);
  Object.assign(s, polygonBox(s.points));
  return true;
}
