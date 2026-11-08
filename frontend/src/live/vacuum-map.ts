/**
 * A robot's own map, put into the plan's coordinates.
 *
 * A robot reports where it is and where it has been in its map's grid, which has nothing to do with the
 * plan's metres: the integration hands that out on the map camera's attributes (`vacuum_position`,
 * `charger` or Dreame's `charger_position`, `path` — the vacuum map card's names, shared by NarwalIntegration and the Xiaomi/Roborock map
 * extractors). Two places known in both frames are enough to tie the two together, as a similarity transform:
 * scale, rotation and shift. Everything else — the pose, the trail, the dock — follows from those two pairs.
 *
 * A map whose y grows along plan -z needs `mirror`: two places cannot tell a mirror from a turn, since
 * both put them exactly where they belong, so the caller has to say which one the map is.
 */
import type { VacuumCalibration } from "../model.ts";
import type { HomeAssistant } from "../types.ts";

export type { VacuumCalibration };

export interface VacuumPose {
  x: number;
  z: number;
  /** Facing, in radians, the way the viewer turns a robot: 0 faces +z. */
  heading: number;
}

export interface VacuumLive {
  pose: VacuumPose | null;
  /** The dock, in plan metres. */
  charger: [number, number] | null;
  /** The trail of the current clean, as segments in plan metres. */
  path: [number, number][][];
}

const num = (v: unknown): number => Number(v);

/** A map position as a pair: the robot writes `{x, y}` for itself and `[x, y]` in its trail. */
function pair(v: unknown): [number, number] | null {
  if (Array.isArray(v)) {
    const [px, py] = [num(v[0]), num(v[1])];
    return Number.isFinite(px) && Number.isFinite(py) ? [px, py] : null;
  }
  if (!v || typeof v !== "object") return null;
  const { x, y } = v as { x?: unknown; y?: unknown };
  const [px, py] = [num(x), num(y)];
  return Number.isFinite(px) && Number.isFinite(py) ? [px, py] : null;
}

/** Where the dock is in the map's grid: `charger` (the map card's name), or `charger_position` (Dreame's map camera, #109). */
function dockOf(attributes: Record<string, unknown> | undefined): [number, number] | null {
  return attributes ? (pair(attributes.charger) ?? pair(attributes.charger_position)) : null;
}

/**
 * The camera whose attributes describe a robot map: it reports where the robot is or where it docks, so it can
 * be found without being configured.
 */
export function mapCamera(hass: HomeAssistant): string | null {
  for (const [id, st] of Object.entries(hass.states)) {
    if (!id.startsWith("camera.")) continue;
    // where the robot is, or where it docks: either says this camera carries a robot's map
    if (pair(st.attributes?.vacuum_position) ?? dockOf(st.attributes)) return id;
  }
  return null;
}

/** Whether a value is one grid point: `[x, y]`, or `{x, y}` as the robot writes its own position. */
const isPoint = (v: unknown): boolean => (Array.isArray(v) ? typeof v[0] === "number" : !!v && typeof v === "object");

/** A grid point as the calibration sees it: mirrored onto the plan's side when the map runs backwards. */
const asSeen = (g: [number, number], mirror: boolean): [number, number] => (mirror ? [g[0], -g[1]] : g);

/** How the grid turns and scales into the plan, or null while the two points are unusable. */
export function gridMapper(cal: VacuumCalibration | null | undefined): ((g: [number, number]) => [number, number]) | null {
  if (!cal) return null;
  const mirror = cal.mirror === true;
  const [gax, gay] = asSeen(cal.ga, mirror);
  const [gbx, gby] = asSeen(cal.gb, mirror);
  const [ax, az] = cal.a;
  const [bx, bz] = cal.b;
  const [dgx, dgy] = [gbx - gax, gby - gay];
  const [dpx, dpz] = [bx - ax, bz - az];
  const dg = Math.hypot(dgx, dgy);
  const dp = Math.hypot(dpx, dpz);
  // two points on top of each other say nothing about scale or direction
  if (!(dg > 1e-6) || !(dp > 1e-6)) return null;
  const scale = dp / dg;
  const turn = Math.atan2(dpz, dpx) - Math.atan2(dgy, dgx);
  const [cos, sin] = [Math.cos(turn), Math.sin(turn)];
  return (g) => {
    const seen = asSeen(g, mirror);
    const [x, y] = [seen[0] - gax, seen[1] - gay];
    return [ax + scale * (x * cos - y * sin), az + scale * (x * sin + y * cos)];
  };
}

/** The turn of the grid into the plan, in radians (for headings). */
export function gridTurn(cal: VacuumCalibration | null | undefined): number | null {
  if (!cal) return null;
  const mirror = cal.mirror === true;
  const [gax, gay] = asSeen(cal.ga, mirror);
  const [gbx, gby] = asSeen(cal.gb, mirror);
  const turn = Math.atan2(cal.b[1] - cal.a[1], cal.b[0] - cal.a[0]) - Math.atan2(gby - gay, gbx - gax);
  return Number.isFinite(turn) ? turn : null;
}

/**
 * The robot's live map, in plan metres. `camera` is the map camera (see `mapCamera`); without a
 * calibration the grid is passed through unchanged, which is wrong on the plan but keeps the shape.
 */
export function readVacuum(hass: HomeAssistant, camera: string | null, cal: VacuumCalibration | null | undefined): VacuumLive | null {
  if (!camera) return null;
  const attributes = hass.states[camera]?.attributes;
  if (!attributes) return null;
  const toPlan = gridMapper(cal) ?? ((g: [number, number]) => g);
  const turn = gridTurn(cal) ?? 0;
  // a mirrored map turns the other way, so a facing reads the other way too
  const facingSign = cal?.mirror === true ? -1 : 1;

  const position = attributes.vacuum_position as { a?: unknown } | undefined;
  const at = pair(position);
  const pose = at
    ? (() => {
        const [x, z] = toPlan(at);
        // the robot reports its facing in degrees, 0 = +x and 90 = +y; a heading of 0 faces +z here
        const facing = num(position?.a) * facingSign;
        if (!Number.isFinite(facing)) return { x, z, heading: 0 };
        const angle = (facing * Math.PI) / 180 + turn;
        return { x, z, heading: Math.atan2(Math.cos(angle), Math.sin(angle)) };
      })()
    : null;

  const dock = dockOf(attributes);
  // `path` is one run of points in the map card's format, and a list of runs in NarwalIntegration's, where a
  // gap is a new run; take both, or a robot's whole trail would count as a single point and vanish
  const rawPath: unknown[] = Array.isArray(attributes.path) ? attributes.path : [];
  const runs: unknown[][] = rawPath.length > 0 && isPoint(rawPath[0]) ? [rawPath] : (rawPath as unknown[][]);
  const path: [number, number][][] = [];
  for (const segment of runs) {
    const points: [number, number][] = [];
    for (const raw of Array.isArray(segment) ? segment : []) {
      const g = pair(raw);
      if (g) points.push(toPlan(g));
    }
    if (points.length > 1) path.push(points);
  }
  // a camera that describes nothing (no pose, no dock, no trail) is no map to draw
  if (!pose && !dock && !path.length) return null;
  return { pose, charger: dock ? toPlan(dock) : null, path };
}

/** Two places as a calibration needs them: a point on the plan, and the robot's grid point there. */
export interface Place {
  plan: [number, number];
  grid: [number, number];
}

/** Why a pair of places cannot be calibrated: they sit too close together, or the scale makes no sense. */
export type CalibrationResult = { cal: VacuumCalibration } | { cal: null; reason: "close" | "scale" };

/** A believable scale: a robot counts in millimetres, or in cells of a few centimetres. */
const MIN_SCALE = 0.0005;
const MAX_SCALE = 2;
/** How far apart the two places have to be, in the plan: closer and the turn is guesswork. */
const MIN_BASELINE = 1.5;

/** Where the robot and its dock are in the map's grid, which is what a calibration is built from. */
export function gridPlaces(hass: HomeAssistant, camera: string | null): { at: [number, number] | null; dock: [number, number] | null } {
  const attributes = camera ? hass.states[camera]?.attributes : undefined;
  return {
    at: attributes ? pair(attributes.vacuum_position) : null,
    dock: dockOf(attributes),
  };
}

/**
 * The calibration from two places: the dock, which the plan and the robot both know, and a place the robot is
 * at now, which is one tap. Two places fix scale and turn; `mirror` has to be given, since a mirror puts them
 * exactly where a turn would.
 */
export function calibrationFrom(dock: Place, here: Place, mirror = false): CalibrationResult {
  const plan = Math.hypot(here.plan[0] - dock.plan[0], here.plan[1] - dock.plan[1]);
  const grid = Math.hypot(here.grid[0] - dock.grid[0], here.grid[1] - dock.grid[1]);
  if (!(grid > 1e-6) || !(plan >= MIN_BASELINE)) return { cal: null, reason: "close" };
  const scale = plan / grid;
  if (!(scale >= MIN_SCALE && scale <= MAX_SCALE)) return { cal: null, reason: "scale" };
  return { cal: { a: dock.plan, ga: dock.grid, b: here.plan, gb: here.grid, mirror } };
}

/** A room on the robot's map: its name and the middle of its box, in the map's grid. */
export interface GridRoom {
  name: string;
  center: [number, number];
}

/**
 * The rooms the robot knows, from the map camera's `rooms`: Dreame writes a box (`x0..y1`) and a name per room;
 * a room without a name cannot be matched to the plan, so it is left out.
 */
export function gridRooms(hass: HomeAssistant, camera: string | null): GridRoom[] {
  const raw = camera ? hass.states[camera]?.attributes?.rooms : undefined;
  if (!raw || typeof raw !== "object") return [];
  const out: GridRoom[] = [];
  for (const r of Object.values(raw as Record<string, unknown>)) {
    if (!r || typeof r !== "object") continue;
    const room = r as Record<string, unknown>;
    const name = typeof room.name === "string" ? room.name.trim() : "";
    const box = [room.x0, room.y0, room.x1, room.y1].map(num);
    if (!name || !box.every(Number.isFinite)) continue;
    out.push({ name, center: [(box[0] + box[2]) / 2, (box[1] + box[3]) / 2] });
  }
  return out;
}

/** A room name as both sides are compared: case, spaces and punctuation do not count. */
const roomKey = (name: string): string => name.toLocaleLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[^\p{L}\p{N}]+/gu, "");

/** The least-squares similarity from grid points (already mirrored when the map runs backwards) onto the plan, and how far it misses on average. */
function fitSimilarity(pairs: { plan: [number, number]; seen: [number, number] }[]): { map: (g: [number, number]) => [number, number]; scale: number; rms: number } | null {
  const n = pairs.length;
  const [gx, gy] = pairs.reduce((s, p) => [s[0] + p.seen[0] / n, s[1] + p.seen[1] / n], [0, 0]);
  const [px, pz] = pairs.reduce((s, p) => [s[0] + p.plan[0] / n, s[1] + p.plan[1] / n], [0, 0]);
  // the plan point is (a + ib)(grid point) in complex numbers, around both centroids: a and b by least squares
  let [sa, sb, sg] = [0, 0, 0];
  for (const p of pairs) {
    const [u, v] = [p.seen[0] - gx, p.seen[1] - gy];
    const [x, z] = [p.plan[0] - px, p.plan[1] - pz];
    sa += u * x + v * z;
    sb += u * z - v * x;
    sg += u * u + v * v;
  }
  if (!(sg > 1e-9)) return null;
  const [a, b] = [sa / sg, sb / sg];
  const map = (g: [number, number]): [number, number] => {
    const [u, v] = [g[0] - gx, g[1] - gy];
    return [px + a * u - b * v, pz + b * u + a * v];
  };
  const rms = Math.sqrt(pairs.reduce((s, p) => s + Math.hypot(map(p.seen)[0] - p.plan[0], map(p.seen)[1] - p.plan[1]) ** 2, 0) / n);
  return { map, scale: Math.hypot(a, b), rms };
}

export type RoomCalibrationResult = { cal: VacuumCalibration; matched: string[]; rms: number } | { cal: null; reason: "rooms" | "scale" | "fit"; matched: string[] };

/**
 * The calibration from rooms both sides know by name: the robot's map names its rooms like the plan does, and
 * the middles of matching rooms tie the grid to the plan without the robot moving at all. Two rooms fix scale and
 * turn (with `mirror` as given); three or more also tell a mirrored map from a turned one, so the better fit wins.
 */
export function calibrationFromRooms(planRooms: { name: string; points: readonly [number, number][] }[], robotRooms: GridRoom[], mirror = false): RoomCalibrationResult {
  const byKey = new Map(robotRooms.map((r) => [roomKey(r.name), r] as const));
  const pairs: { name: string; plan: [number, number]; grid: [number, number] }[] = [];
  const used = new Set<string>();
  for (const room of planRooms) {
    const key = roomKey(room.name);
    const robot = byKey.get(key);
    if (!robot || used.has(key) || room.points.length < 3) continue;
    used.add(key);
    const xs = room.points.map((p) => p[0]);
    const zs = room.points.map((p) => p[1]);
    // the middle of the room's box, as the robot measures its rooms
    pairs.push({ name: room.name, plan: [(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...zs) + Math.max(...zs)) / 2], grid: robot.center });
  }
  const matched = pairs.map((p) => p.name);
  if (pairs.length < 2) return { cal: null, reason: "rooms", matched };
  const fits = (pairs.length >= 3 ? [false, true] : [mirror]).flatMap((m) => {
    const fit = fitSimilarity(pairs.map((p) => ({ plan: p.plan, seen: asSeen(p.grid, m) })));
    return fit ? [{ mirror: m, ...fit }] : [];
  });
  const best = fits.sort((x, y) => x.rms - y.rms)[0];
  if (!best) return { cal: null, reason: "rooms", matched };
  if (!(best.scale >= MIN_SCALE && best.scale <= MAX_SCALE)) return { cal: null, reason: "scale", matched };
  // the plan spread of the rooms: a fit that misses by more than a quarter of it has matched the wrong rooms
  const spread = Math.max(...pairs.map((p) => Math.hypot(p.plan[0] - pairs[0].plan[0], p.plan[1] - pairs[0].plan[1])));
  if (!(best.rms <= Math.max(1, spread / 4))) return { cal: null, reason: "fit", matched };
  // stored as two places like a tapped calibration: the two rooms furthest apart, put where the fit puts them
  let [i, j, far] = [0, 1, -1];
  for (let p = 0; p < pairs.length; p++)
    for (let q = p + 1; q < pairs.length; q++) {
      const d = Math.hypot(pairs[p].grid[0] - pairs[q].grid[0], pairs[p].grid[1] - pairs[q].grid[1]);
      if (d > far) [i, j, far] = [p, q, d];
    }
  const [ga, gb] = [pairs[i].grid, pairs[j].grid];
  return {
    cal: { a: best.map(asSeen(ga, best.mirror)), ga, b: best.map(asSeen(gb, best.mirror)), gb, mirror: best.mirror },
    matched,
    rms: best.rms,
  };
}


/** A hand correction of a calibration: moved in plan metres, turned in degrees, grown by a factor. */
export interface CalibrationNudge {
  move?: [number, number];
  turn?: number;
  grow?: number;
}

/**
 * Shifts, turns or scales a calibration around the middle of its two places, for when a fitted map sits a little
 * off: both places are moved in the plan, the robot's grid positions stay, so the whole map follows.
 */
export function nudgeCalibration(cal: VacuumCalibration, nudge: CalibrationNudge): VacuumCalibration {
  const [mx, mz] = [(cal.a[0] + cal.b[0]) / 2, (cal.a[1] + cal.b[1]) / 2];
  const rad = ((nudge.turn ?? 0) * Math.PI) / 180;
  const [cos, sin, grow] = [Math.cos(rad), Math.sin(rad), nudge.grow ?? 1];
  const [dx, dz] = nudge.move ?? [0, 0];
  const at = (p: [number, number]): [number, number] => {
    const [x, z] = [(p[0] - mx) * grow, (p[1] - mz) * grow];
    return [round(mx + x * cos - z * sin + dx), round(mz + x * sin + z * cos + dz)];
  };
  return { ...cal, a: at(cal.a), b: at(cal.b) };
}

const round = (v: number): number => Math.round(v * 1000) / 1000;
