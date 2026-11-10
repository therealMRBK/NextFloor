// Roof questions about a whole building: what lies under a roof, where the headroom ends, which floor a roof sits on,
// and a first set of roof sections proposed from the rooms.

import { pointInPolygon, type Building, type Floor, type Room, type RoofSection, type Vec2 } from "../model.ts";
import { dormerParent } from "./dormers.ts";
import { gradient, ridgeHeight, sectionFrame, sectionProfile, sectionUV, unturnedPoint } from "./frame.ts";
import { sectionGeometry, sectionHeightAt } from "./geometry.ts";

/** Anything that carries roof sections: a building, or just its settings in a test. */
export type RoofHolder = { settings: { roof: { sections?: readonly RoofSection[] | null; overhang?: number } } };

/** Thickness of the roof slab: the walls below end this far under the profile. */
export const ROOF_THICK = 0.14;

const isFlat = (s: Pick<RoofSection, "shape">) => s.shape === "flat" || s.shape === "parapet";

/**
 * Whether a section can reach down below a floor's ceiling: its wall top or one of its eaves lies lower. A low eave
 * over a full-height floor cuts the walls too, not only a wall top that was set below the ceiling.
 */
export function sectionCutsBelow(s: Pick<RoofSection, "open" | "base" | "eave_a" | "eave_b">, ceiling: number): boolean {
  return !s.open && Math.min(s.base, s.eave_a, s.eave_b) < ceiling - 0.05;
}

/**
 * The underside of the roof over a plan point, as an absolute height: the lowest covered section's. Null outside every
 * section (open canopies do not count, and a single roof does not either, it rests on the top floor's walls anyway).
 */
export function roofUnderAt(holder: RoofHolder, x: number, z: number): number | null {
  const defaultOverhang = Math.max(0, holder.settings.roof.overhang ?? 0);
  const eps = 1e-6;
  const heights: number[] = [];
  for (const s of holder.settings.roof.sections ?? []) {
    if (s.open) continue;
    const [x0, x1, z0, z1] = [Math.min(s.x0, s.x1), Math.max(s.x0, s.x1), Math.min(s.z0, s.z1), Math.max(s.z0, s.z1)];
    // a turned section: the point in its own rectangle
    const [lx, lz] = unturnedPoint(s, x, z);
    if (lx < x0 - eps || lx > x1 + eps || lz < z0 - eps || lz > z1 + eps) continue;
    // a free-shaped flat roof covers its polygon only
    if (s.points && s.points.length >= 3 && !pointInPolygon([x, z], s.points)) continue;
    const [u, v] = sectionUV(s, x, z);
    // hipped ends and broken slopes: the planes decide, the profile across is the fallback
    const own = Math.max(0, s.overhang ?? defaultOverhang);
    const fromPlanes = isFlat(s) ? null : sectionHeightAt(sectionGeometry(s, { u0: own, u1: own, a: own, b: own }), u, v);
    heights.push((fromPlanes ?? sectionProfile(s).y(v)) - ROOF_THICK);
  }
  // where sections overlap the higher roof is the ceiling (a dormer or cross gable over the main slope, a low annex under a high roof)
  return heights.length ? Math.max(...heights) : null;
}

/**
 * Where a sloped section leaves `headroom` metres over a floor at `level`: lines across the section in plan
 * coordinates, one per slope crossing that height. The editor draws them in attic rooms.
 */
export function headroomLines(holder: RoofHolder, level: number, headroom: number): [Vec2, Vec2][] {
  const lines: [Vec2, Vec2][] = [];
  const target = level + headroom + ROOF_THICK;
  for (const s of holder.settings.roof.sections ?? []) {
    if (s.open || isFlat(s) || s.shape === "mansard") continue;
    const frame = sectionFrame(s);
    const profile = sectionProfile(s);
    const [gradA, gradB] = [gradient(s.pitch_a), gradient(s.pitch_b)];
    const crossings: number[] = [];
    if (gradA > 1e-6) crossings.push((target - s.eave_a) / gradA);
    if (s.shape === "gable" && gradB > 1e-6) crossings.push(frame.w - (target - s.eave_b) / gradB);
    for (const v of crossings) {
      // only where the line really runs under the slope, between eave and ridge
      if (v <= 0.01 || v >= frame.w - 0.01) continue;
      if (s.shape === "gable" && Math.abs(profile.y(v) - target) > 1e-6) continue;
      lines.push([frame.at(frame.u0, v), frame.at(frame.u1, v)]);
    }
  }
  return lines;
}

/** The highest wall top below a rectangle: the highest floor with a room under any of nine sample points (null = none). */
export function wallTopUnder(b: Building, x0: number, z0: number, x1: number, z1: number): number | null {
  // not the centre alone: an upper floor with a stairwell or hall cut out of the middle would leave the roof on the ground floor
  const samples: Vec2[] = [];
  for (const fu of [0.2, 0.5, 0.8]) for (const fv of [0.2, 0.5, 0.8]) samples.push([x0 + (x1 - x0) * fu, z0 + (z1 - z0) * fv]);
  const tops = b.floors.filter((f) => f.rooms.some((r) => r.points.length >= 3 && samples.some((p) => pointInPolygon(p, r.points)))).map((f) => f.elevation + f.height);
  return tops.length ? Math.max(...tops) : null;
}

/**
 * The floor a roof section sits on: the highest floor that starts below the section's base and has rooms under it. A floor
 * with no room under the section (a house beside a garage on a slope) does not count; without any, the highest floor below.
 */
export function sectionFloor(b: Building, section: Pick<RoofSection, "base"> & Partial<Pick<RoofSection, "x0" | "z0" | "x1" | "z1">>): Floor | undefined {
  const withRooms = b.floors.filter((f) => f.rooms.length > 0).sort((p, q) => p.elevation - q.elevation);
  const below = withRooms.filter((f) => f.elevation < section.base - 0.05);
  const { x0, z0, x1, z1 } = section;
  if (x0 !== undefined && z0 !== undefined && x1 !== undefined && z1 !== undefined) {
    const samples: Vec2[] = [];
    for (const fu of [0.2, 0.5, 0.8]) for (const fv of [0.2, 0.5, 0.8]) samples.push([x0 + (x1 - x0) * fu, z0 + (z1 - z0) * fv]);
    const under = below.findLast((f) => f.rooms.some((r) => r.points.length >= 3 && samples.some((p) => pointInPolygon(p, r.points))));
    if (under) return under;
  }
  return below.at(-1) ?? withRooms[0];
}

const round3 = (v: number) => Math.round(v * 1000) / 1000;

/**
 * Roof sections proposed from the rooms. Per floor, highest first: the area of its rooms that no higher floor covers is
 * cut into as few rectangles as possible, and each gets a gable roof on its walls with the ridge along its longer side.
 * A house with an upper floor over part of it so gets a roof up there and one over the single-storey rest.
 */
export function roofSectionsFromRooms(b: Building, makeId: (i: number) => string = (i) => `roof_${i + 1}`): RoofSection[] {
  const pitch = b.settings.roof?.pitch ?? 35;
  const wall = b.settings.wall_exterior;
  const floors = b.floors.filter((f) => f.rooms.some((r) => r.points.length >= 3)).sort((p, q) => q.elevation - p.elevation);
  const sections: RoofSection[] = [];
  const higherRooms: Room[] = [];
  const insideAny = (rooms: Room[], p: Vec2) => rooms.some((r) => pointInPolygon(p, r.points));

  for (const floor of floors) {
    const rooms = floor.rooms.filter((r) => r.points.length >= 3);
    const columns = [...new Set(rooms.flatMap((r) => r.points.map((p) => round3(p[0]))))].sort((p, q) => p - q);
    const rows = [...new Set(rooms.flatMap((r) => r.points.map((p) => round3(p[1]))))].sort((p, q) => p - q);
    // the cells of the grid spanned by all corners that belong to this floor but not to a higher one
    const open = rows.slice(0, -1).map((_, j) => columns.slice(0, -1).map((__, i) => {
      const middle: Vec2 = [(columns[i] + columns[i + 1]) / 2, (rows[j] + rows[j + 1]) / 2];
      return insideAny(rooms, middle) && !insideAny(higherRooms, middle);
    }));
    const taken = open.map((row) => row.map(() => false));
    const available = (i: number, j: number) => open[j][i] && !taken[j][i];
    // the walls under a rectangle end where its rooms' ceilings are: a shed or a garage with a ceiling of its own (lower or higher
    // than the floor) gets its roof there, an outbuilding beside the house its own roof at its own height (D#72)
    const topOf = (i0: number, i1: number, j0: number, j1: number): number => {
      const under = rooms.filter((r) => {
        for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) if (open[j][i] && pointInPolygon([(columns[i] + columns[i + 1]) / 2, (rows[j] + rows[j + 1]) / 2], r.points)) return true;
        return false;
      });
      const heights = under.map((r) => (typeof r.ceiling === "number" && r.ceiling > 0 ? r.ceiling : floor.height));
      return floor.elevation + (heights.length ? Math.max(...heights) : floor.height);
    };
    // greedy rectangles: as wide as possible, then as deep as the whole row allows
    for (let j = 0; j < open.length; j++) {
      for (let i = 0; i < (open[j]?.length ?? 0); i++) {
        if (!available(i, j)) continue;
        let right = i;
        while (right + 1 < open[j].length && available(right + 1, j)) right++;
        let bottom = j;
        while (bottom + 1 < open.length && Array.from({ length: right - i + 1 }, (_, k) => available(i + k, bottom + 1)).every(Boolean)) bottom++;
        for (let jj = j; jj <= bottom; jj++) for (let ii = i; ii <= right; ii++) taken[jj][ii] = true;
        const [x0, x1] = [columns[i] - wall, columns[right + 1] + wall];
        const [z0, z1] = [rows[j] - wall, rows[bottom + 1] + wall];
        if (Math.min(x1 - x0, z1 - z0) < 0.8) continue;
        const top = topOf(i, right, j, bottom);
        sections.push({
          id: makeId(sections.length),
          x0: round3(x0),
          z0: round3(z0),
          x1: round3(x1),
          z1: round3(z1),
          shape: "gable",
          axis: x1 - x0 >= z1 - z0 ? "x" : "z",
          eave_a: round3(top),
          eave_b: round3(top),
          pitch_a: pitch,
          pitch_b: pitch,
          base: round3(top),
          overhang: null,
        });
      }
    }
    higherRooms.push(...rooms);
  }
  return sections;
}

/**
 * The floor a roof part moves with when the floors are pulled apart: the highest floor with rooms under its sections
 * (between the floor it sits on and its ridge), so a loft under the same slopes counts, not just the floor the roof
 * stands on. Dormers move with their main roof, as they sit in its slope.
 */
export function roofRider(b: Building, floor: Floor, sectionIds: readonly string[]): string {
  const all = b.settings.roof.sections ?? [];
  const mine = all.filter((s) => sectionIds.includes(s.id)).map((s) => dormerParent(all, s) ?? s);
  if (mine.length === 0) return floor.id;
  const ridge = Math.max(...mine.map(ridgeHeight));
  const hasRoomUnder = (f: Floor) =>
    f.rooms.some((r) => {
      if (r.points.length < 3) return false;
      const cx = r.points.reduce((sum, p) => sum + p[0], 0) / r.points.length;
      const cz = r.points.reduce((sum, p) => sum + p[1], 0) / r.points.length;
      return mine.some((s) => cx >= Math.min(s.x0, s.x1) && cx <= Math.max(s.x0, s.x1) && cz >= Math.min(s.z0, s.z1) && cz <= Math.max(s.z0, s.z1));
    });
  const riders = b.floors.filter((f) => f.elevation >= floor.elevation && f.elevation < ridge - 0.3 && hasRoomUnder(f)).sort((p, q) => q.elevation - p.elevation);
  return riders[0]?.id ?? floor.id;
}
