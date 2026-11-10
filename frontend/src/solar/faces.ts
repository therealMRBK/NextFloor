// The surfaces solar fields can lie on: the faces of roof sections, a single roof, house walls, and the garden ground.
//
// A face has a local frame. u runs along the eave (0 to lu), s up the slope from the eave (0 to ls, true length); on a
// flat roof s runs across, level. A field's u and v place its lower left corner on the face.

import { generateWalls, wallOptions } from "../geometry/walls.ts";
import { outdoorGround, type Building, type Floor, type RoofSection, type SolarField } from "../model.ts";
import { sectionFrame, sectionOverhang, sectionProfile } from "../roof-sections.ts";
import { gradient, mansardParts } from "../roof/frame.ts";
import { cross, DEG, length, normalize, sub, type V3 } from "./vec.ts";

/** Thickness of a flat roof slab as the roof draws it. */
export const FLAT_SLAB = 0.25;

export interface RoofFace {
  /**
   * "main:a", "main:b", "main:top" for the single roof; "<section id>:a", ":b", ":top" for sections; hip ends are ":c"
   * (start) and ":d" (end). A mansard's ":a"/":b" are the steep lower slopes, ":au"/":bu" the upper ones above the break.
   */
  key: string;
  /** The section the face belongs to (null: the single roof). */
  section: string | null;
  side: "a" | "b" | "c" | "d" | "top";
  flat: boolean;
  /** The eave corner (heights above the ground), unit vectors along the eave and up the slope, and the normal. */
  o: V3;
  eu: V3;
  es: V3;
  n: V3;
  lu: number;
  ls: number;
  /** Slope in degrees (0 on a flat roof). */
  pitch: number;
  /** The usable range along the eave at a distance up the slope (hip roofs narrow towards the ridge). */
  span(s: number): [number, number];
  /** The plan direction the face looks to (down the slope); for a flat roof the direction of +s. */
  facing: [number, number];
  /** The garden ground: no edges, a field goes where it is put. */
  unbounded?: boolean;
  /** A house wall: upright, on this floor. Modules hang flat on the facade. */
  wall?: { floorId: string };
}

/** A face made of a flat slab, as seen from above. */
function flatFace(id: string, section: string | null, x0: number, z0: number, x1: number, z1: number, y: number): RoofFace {
  // u along the longer side, s across
  const alongX = x1 - x0 >= z1 - z0;
  const lu = alongX ? x1 - x0 : z1 - z0;
  return {
    key: `${id}:top`,
    section,
    side: "top",
    flat: true,
    o: [x0, y, z0],
    eu: alongX ? [1, 0, 0] : [0, 0, 1],
    es: alongX ? [0, 0, 1] : [1, 0, 0],
    n: [0, 1, 0],
    lu,
    ls: alongX ? z1 - z0 : x1 - x0,
    pitch: 0,
    span: () => [0, lu],
    facing: alongX ? [0, 1] : [1, 0],
  };
}

/** The upward normal of the plane spanned by two edge directions. */
function upwardNormal(eu: V3, es: V3): V3 {
  const n = normalize(cross(eu, es));
  return n[1] < 0 ? [-n[0], -n[1], -n[2]] : n;
}

/** The plan direction a slope looks to, from its up-the-slope direction. */
const lookingDown = (es: V3): [number, number] => {
  const down = normalize([-es[0], 0, -es[2]]);
  return [down[0], down[2]];
};

function slopeFace(key: string, section: string | null, side: "a" | "b", o: V3, eaveEnd: V3, ridge: V3, pitch: number, span: (s: number) => [number, number]): RoofFace {
  const eu = normalize(sub(eaveEnd, o));
  const es = normalize(sub(ridge, o));
  return { key, section, side, flat: false, o, eu, es, n: upwardNormal(eu, es), lu: length(sub(eaveEnd, o)), ls: length(sub(ridge, o)), pitch, span, facing: lookingDown(es) };
}

/**
 * A triangular face (a hip end): the eave from `o` to `eaveEnd`, rising to `apex`. The slope frame is the plane's own,
 * with s at a right angle to the eave, and the usable span narrows linearly towards the apex.
 */
function triangleFace(key: string, section: string, side: "c" | "d", o: V3, eaveEnd: V3, apex: V3): RoofFace | null {
  const lu = length(sub(eaveEnd, o));
  if (lu < 0.3) return null;
  const eu = normalize(sub(eaveEnd, o));
  const toApex = sub(apex, o);
  const along = toApex[0] * eu[0] + toApex[1] * eu[1] + toApex[2] * eu[2];
  const rise: V3 = [toApex[0] - eu[0] * along, toApex[1] - eu[1] * along, toApex[2] - eu[2] * along];
  const ls = length(rise);
  if (ls < 0.3) return null;
  const es = normalize(rise);
  const span = (s: number): [number, number] => {
    const k = Math.min(1, Math.max(0, s / ls));
    return [along * k, lu - (lu - along) * k];
  };
  return { key, section, side, flat: false, o, eu, es, n: upwardNormal(eu, es), lu, ls, pitch: Math.atan2(es[1], Math.hypot(es[0], es[2])) / DEG, span, facing: lookingDown(es) };
}

type Overhang = { u0: number; u1: number; a: number; b: number };

/** The faces of one section as the roof draws them, with overhang at the eaves and gable ends (none where a taller part of the house stands). */
function sectionFaces(s: RoofSection, overhang: Overhang): RoofFace[] {
  const frame = sectionFrame(s);
  const profile = sectionProfile(s);
  const at = (u: number, v: number, y: number): V3 => {
    const [x, z] = frame.at(u, v);
    return [x, y, z];
  };
  const [ovA, ovB] = [Math.max(0, overhang.a), Math.max(0, overhang.b)];
  const U0 = frame.u0 - Math.max(0, overhang.u0);
  const U1 = frame.u1 + Math.max(0, overhang.u1);
  const width = U1 - U0;
  const yA = profile.y(-ovA);
  const yB = profile.y(frame.w + ovB);

  if (s.shape === "flat" || s.shape === "parapet") {
    const [p, q] = [frame.at(U0, -ovA), frame.at(U1, frame.w + ovB)];
    return [flatFace(s.id, s.id, Math.min(p[0], q[0]), Math.min(p[1], q[1]), Math.max(p[0], q[0]), Math.max(p[1], q[1]), s.eave_a + FLAT_SLAB)];
  }
  if (s.shape === "pent") return [slopeFace(`${s.id}:a`, s.id, "a", at(U0, -ovA, yA), at(U1, -ovA, yA), at(U0, frame.w + ovB, yB), s.pitch_a, () => [0, width])];

  if (s.shape === "mansard") return mansardFaces(s, frame, U0, U1, ovA, ovB);

  // a pyramid is a hip whose ridge has no length; a half-hip places its modules like a gable
  const isHip = s.shape === "hip" || s.shape === "pyramid";
  const half = (frame.u1 - frame.u0) / 2;
  const run = s.shape === "pyramid" ? half : isHip ? Math.min(half, Math.min(profile.vr, frame.w - profile.vr) || frame.w / 2) : 0;
  // a hip slope narrows from the full eave (overhang included) to the ridge, which starts `run` in from the walls
  const inset0 = isHip ? frame.u0 + run - U0 : 0;
  const inset1 = isHip ? U1 - (frame.u1 - run) : 0;
  const faces: RoofFace[] = [];
  if (profile.vr > 0.3) {
    const slope = Math.hypot(profile.vr + ovA, profile.rh - yA);
    faces.push(slopeFace(`${s.id}:a`, s.id, "a", at(U0, -ovA, yA), at(U1, -ovA, yA), at(U0, profile.vr, profile.rh), s.pitch_a, (t) => [inset0 * (t / slope), width - inset1 * (t / slope)]));
  }
  if (frame.w - profile.vr > 0.3) {
    const slope = Math.hypot(frame.w + ovB - profile.vr, profile.rh - yB);
    // side b: the eave at v = w + overhang, running the other way so the face looks outwards
    faces.push(slopeFace(`${s.id}:b`, s.id, "b", at(U1, frame.w + ovB, yB), at(U0, frame.w + ovB, yB), at(U1, profile.vr, profile.rh), s.pitch_b, (t) => [inset1 * (t / slope), width - inset0 * (t / slope)]));
  }
  if (isHip) {
    const startEnd = triangleFace(`${s.id}:c`, s.id, "c", at(U0, frame.w + ovB, yB), at(U0, -ovA, yA), at(frame.u0 + run, profile.vr, profile.rh));
    const finishEnd = triangleFace(`${s.id}:d`, s.id, "d", at(U1, -ovA, yA), at(U1, frame.w + ovB, yB), at(frame.u1 - run, profile.vr, profile.rh));
    faces.push(...[startEnd, finishEnd].filter((f): f is RoofFace => f !== null));
  }
  return faces;
}

/**
 * A mansard breaks each side at a kink: the steep lower slope from the eave to the break, then the flatter upper slope
 * to the ridge. One plane from eave to ridge would cut under the break, so each part is a face of its own.
 */
function mansardFaces(s: RoofSection, frame: ReturnType<typeof sectionFrame>, U0: number, U1: number, ovA: number, ovB: number): RoofFace[] {
  const m = mansardParts(frame.w, s.eave_a, s.eave_b, gradient(s.pitch_a), gradient(s.pitch_b));
  const at = (u: number, v: number): V3 => {
    const [x, z] = frame.at(u, v);
    return [x, m.y(v), z];
  };
  const width = U1 - U0;
  const span = (): [number, number] => [0, width];
  const upperPitch = (rise: number, run: number) => Math.atan2(rise, run) / DEG;
  const faces: RoofFace[] = [];
  const [wb, bb] = [frame.w + ovB, frame.w - m.vlb];
  if (m.vla + ovA > 0.3) faces.push(slopeFace(`${s.id}:a`, s.id, "a", at(U0, -ovA), at(U1, -ovA), at(U0, m.vla), s.pitch_a, span));
  if (m.vr - m.vla > 0.3) faces.push(slopeFace(`${s.id}:au`, s.id, "a", at(U0, m.vla), at(U1, m.vla), at(U0, m.vr), upperPitch(m.rh - m.yla, m.vr - m.vla), span));
  // side b: eaves at v = w + overhang, running the other way so the faces look outwards
  if (m.vlb + ovB > 0.3) faces.push(slopeFace(`${s.id}:b`, s.id, "b", at(U1, wb), at(U0, wb), at(U1, bb), s.pitch_b, span));
  if (bb - m.vr > 0.3) faces.push(slopeFace(`${s.id}:bu`, s.id, "b", at(U1, bb), at(U0, bb), at(U1, m.vr), upperPitch(m.rh - m.ylb, bb - m.vr), span));
  return faces;
}

/** The floor the single roof sits on: the highest with rooms. */
export function topFloor(b: Building): Floor | null {
  const withRooms = b.floors.filter((f) => f.rooms.some((r) => r.points.length >= 3));
  return withRooms.sort((p, q) => q.elevation - p.elevation)[0] ?? null;
}

/** Every roof face modules can lie on. */
export function roofFaces(b: Building): RoofFace[] {
  const roof = b.settings.roof;
  if (!roof || roof.type === "none") return [];
  if (roof.type === "custom") return (roof.sections ?? []).flatMap((s) => sectionFaces(s, sectionOverhang(b, s, s.overhang ?? roof.overhang)));
  const floor = topFloor(b);
  if (!floor) return [];
  const xs = floor.rooms.flatMap((r) => r.points.map((p) => p[0]));
  const zs = floor.rooms.flatMap((r) => r.points.map((p) => p[1]));
  const margin = b.settings.wall_exterior + roof.overhang;
  const [x0, x1] = [Math.min(...xs) - margin, Math.max(...xs) + margin];
  const [z0, z1] = [Math.min(...zs) - margin, Math.max(...zs) + margin];
  const top = floor.elevation + floor.height;
  if (roof.type === "flat") return [flatFace("main", null, x0, z0, x1, z1, top + FLAT_SLAB)];
  // a gable, as the roof builds it: the ridge along the longer side (or the shorter one)
  const longerAlongX = x1 - x0 >= z1 - z0;
  const alongX = roof.ridge === "short" ? !longerAlongX : longerAlongX;
  const halfWidth = (alongX ? z1 - z0 : x1 - x0) / 2;
  const rise = halfWidth * Math.tan(roof.pitch * DEG);
  const point = (u: number, v: number, y: number): V3 => (alongX ? [u, top + y, (z0 + z1) / 2 + v] : [(x0 + x1) / 2 + v, top + y, u]);
  const [u0, u1] = alongX ? [x0, x1] : [z0, z1];
  const span = () => [0, u1 - u0] as [number, number];
  return [
    slopeFace("main:a", null, "a", point(u0, -halfWidth, 0), point(u1, -halfWidth, 0), point(u0, 0, rise), roof.pitch, span),
    slopeFace("main:b", null, "b", point(u0, halfWidth, 0), point(u1, halfWidth, 0), point(u0, 0, rise), roof.pitch, span),
  ];
}

/** The outer faces of the house walls per floor: modules can hang on a facade or balcony. */
export function wallFaces(b: Building, floorId?: string): RoofFace[] {
  const faces: RoofFace[] = [];
  for (const floor of b.floors.filter((f) => !floorId || f.id === floorId)) {
    const { walls } = generateWalls(floor.rooms, wallOptions(b.settings), floor.walls ?? []);
    for (const wall of walls) {
      // outer walls: the outer face; free-standing walls (garden wall, fence wall): both faces
      if (!wall.exterior && !wall.free) continue;
      const [dx, dz] = [wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]];
      const l = Math.hypot(dx, dz);
      if (l < 1.2) continue;
      // outer walls have their room on the left, so the outer face is on the right
      const [nx, nz] = [dz / l, -dx / l];
      // a sloping wall offers its lower end
      const height = Math.min(floor.height, wall.height ?? floor.height, wall.heightEnd ?? Infinity);
      const addFace = (key: string, o: V3, eu: V3, n: V3) =>
        faces.push({ key, section: null, side: "top", flat: false, o, eu, es: [0, 1, 0], n, lu: l, ls: height, pitch: 90, span: () => [0, l], facing: [n[0], n[2]], wall: { floorId: floor.id } });
      addFace(`wall:${floor.id}:${wall.id}`, [wall.a[0] + nx * wall.right, floor.elevation, wall.a[1] + nz * wall.right], [dx / l, 0, dz / l], [nx, 0, nz]);
      // the back of a free wall runs the other way, so its modules face outwards too
      if (wall.free) addFace(`wall:${floor.id}:${wall.id}:back`, [wall.b[0] - nx * wall.left, floor.elevation, wall.b[1] - nz * wall.left], [-dx / l, 0, -dz / l], [-nx, 0, -nz]);
    }
  }
  return faces;
}

/** The face key of fields standing in the garden. */
export const GROUND = "ground";

/** The floor whose garden ground-mounted fields stand in: the lowest with rooms at ground level (a cellar is passed over), else the lowest with rooms. */
export function groundFloor(b: Building): Floor | null {
  const withRooms = b.floors.filter((f) => f.rooms.some((r) => r.points.length >= 3)).sort((p, q) => p.elevation - q.elevation);
  return withRooms.find((f) => f.elevation > -0.5) ?? withRooms[0] ?? b.floors[0] ?? null;
}

/**
 * The ground under a garden field: level, turned by the field's rotation. u and v are plan coordinates along the turned
 * axes, so the corner of a field lies at u * (cos r, sin r) + v * (-sin r, cos r).
 */
export function groundFace(b: Building, f: Pick<SolarField, "u" | "v" | "rotation" | "base">): RoofFace {
  const r = (f.rotation ?? 0) * DEG;
  const eu: V3 = [Math.cos(r), 0, Math.sin(r)];
  const es: V3 = [-Math.sin(r), 0, Math.cos(r)];
  const floor = groundFloor(b);
  const x = eu[0] * f.u + es[0] * f.v;
  const z = eu[2] * f.u + es[2] * f.v;
  // on a surface of its own height (a flat garage roof), else on the ground (a terrace raises it)
  const y = floor ? floor.elevation + (f.base != null ? f.base : outdoorGround(floor, x, z)) : (f.base ?? 0);
  return { key: GROUND, section: null, side: "top", flat: true, o: [0, y, 0], eu, es, n: [0, 1, 0], lu: 1e4, ls: 1e4, pitch: 0, span: () => [-1e4, 1e4], facing: [es[0], es[2]], unbounded: true };
}

/** The face a field lies on: a roof face, a wall, or the ground in the garden. Null when its roof face is gone. */
export function fieldFace(b: Building, f: SolarField, faces: readonly RoofFace[] = roofFaces(b)): RoofFace | null {
  if (f.face === GROUND) return groundFace(b, f);
  if (f.face.startsWith("wall:")) return wallFaces(b, f.face.split(":")[1]).find((x) => x.key === f.face) ?? null;
  return faces.find((x) => x.key === f.face) ?? null;
}

