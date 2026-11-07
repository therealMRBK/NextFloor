// Import of an Apple RoomPlan scan (the JSON of a CapturedRoom or CapturedStructure, as an iPhone or iPad with LiDAR and a scan app
// writes it): walls, doors, windows and openings with their sizes and 4×4 transforms. The walls of a room are chained into its
// outline, doors and windows go onto the nearest wall, and a few objects (sofa, bed, table …) become furniture. All of it on one floor.
// RoomPlan's world has y up; the plan's x and z are RoomPlan's x and z, so nothing is mirrored.

import { emptyBuilding, newFloor, normalizeBuilding, uid, type Building, type Furniture, type FurnitureType, type Opening, type Room, type Vec2 } from "../model.ts";
import type { ImportReport } from "./sweethome.ts";

interface Surface {
  centre: [number, number, number];
  /** Unit vector of the surface's width in the plan, and its size [width, height, depth]. */
  dir: Vec2;
  size: [number, number, number];
  kind: string;
}

const r2 = (v: number) => Math.round(v * 100) / 100;

/** The case name of a RoomPlan category: {"door": {"isOpen": false}} → "door". */
function categoryOf(item: Record<string, unknown>, fallback: string): string {
  const c = item.category;
  if (typeof c === "string") return c;
  if (c && typeof c === "object") return Object.keys(c)[0] ?? fallback;
  return fallback;
}

function surface(raw: unknown, fallback: string): Surface | null {
  const item = raw as Record<string, unknown> | null;
  const m = item?.transform;
  const d = item?.dimensions;
  if (!item || !Array.isArray(m) || m.length < 16 || !Array.isArray(d) || d.length < 3) return null;
  const n = (v: unknown) => Number(v);
  const len = Math.hypot(n(m[0]), n(m[2]));
  if (![...m.slice(0, 16), ...d.slice(0, 3)].every((v) => Number.isFinite(n(v))) || len < 1e-6) return null;
  return { centre: [n(m[12]), n(m[13]), n(m[14])], dir: [n(m[0]) / len, n(m[2]) / len], size: [n(d[0]), n(d[1]), n(d[2])], kind: categoryOf(item, fallback) };
}

const list = (room: Record<string, unknown>, key: string, fallback: string) => (Array.isArray(room[key]) ? (room[key] as unknown[]) : []).map((s) => surface(s, fallback)).filter((s): s is Surface => !!s);

/** The corner points of a closed chain of walls (by centre line), and the wall each edge follows. Null when they do not close. */
function outline(walls: readonly Surface[]): { points: Vec2[]; edgeWall: number[] } | null {
  if (walls.length < 3) return null;
  const ends = walls.map((w): [Vec2, Vec2] => {
    const h = w.size[0] / 2;
    return [[w.centre[0] - w.dir[0] * h, w.centre[2] - w.dir[1] * h], [w.centre[0] + w.dir[0] * h, w.centre[2] + w.dir[1] * h]];
  });
  const dist = (a: Vec2, b: Vec2) => Math.hypot(a[0] - b[0], a[1] - b[1]);
  const TOL = 0.4;
  const used = new Set([0]);
  const points: Vec2[] = [ends[0][0]];
  const edgeWall = [0];
  let tail = ends[0][1];
  while (used.size < walls.length) {
    let best: { i: number; flip: boolean; d: number } | null = null;
    for (let i = 0; i < walls.length; i++) {
      if (used.has(i)) continue;
      for (const flip of [false, true]) {
        const d = dist(tail, ends[i][flip ? 1 : 0]);
        if (d <= TOL && (!best || d < best.d)) best = { i, flip, d };
      }
    }
    if (!best) break;
    const [head, far] = best.flip ? [ends[best.i][1], ends[best.i][0]] : [ends[best.i][0], ends[best.i][1]];
    // the corner lies halfway between where one wall ends and the next begins
    points.push([(tail[0] + head[0]) / 2, (tail[1] + head[1]) / 2]);
    edgeWall.push(best.i);
    used.add(best.i);
    tail = far;
  }
  if (used.size < walls.length || dist(tail, points[0]) > TOL) return null;
  points[0] = [(tail[0] + points[0][0]) / 2, (tail[1] + points[0][1]) / 2];
  return { points, edgeWall };
}

/** The bounding rectangle of all wall ends, for a scan whose walls do not close into a loop. */
function boxOf(walls: readonly Surface[]): Vec2[] {
  const xs: number[] = [];
  const zs: number[] = [];
  for (const w of walls) {
    const h = w.size[0] / 2;
    for (const s of [-1, 1]) {
      xs.push(w.centre[0] + s * w.dir[0] * h);
      zs.push(w.centre[2] + s * w.dir[1] * h);
    }
  }
  const [x0, x1, z0, z1] = [Math.min(...xs), Math.max(...xs), Math.min(...zs), Math.max(...zs)];
  return [[x0, z0], [x1, z0], [x1, z1], [x0, z1]];
}

function toSegment(p: Vec2, a: Vec2, b: Vec2): { dist: number; along: number; length: number } {
  const [dx, dz] = [b[0] - a[0], b[1] - a[1]];
  const length = Math.hypot(dx, dz) || 1e-9;
  const t = Math.min(length, Math.max(0, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / length));
  return { dist: Math.hypot(p[0] - (a[0] + (dx / length) * t), p[1] - (a[1] + (dz / length) * t)), along: t, length };
}

/** What a scanned object becomes (RoomPlan category → NextFloor furniture type); everything else is left out. */
const OBJECTS: Record<string, FurnitureType> = {
  sofa: "sofa", bed: "bed", table: "table", chair: "chair", bathtub: "bathtub", toilet: "wc", sink: "sink", refrigerator: "fridge",
  stove: "stove", oven: "stove", dishwasher: "dishwasher", washerDryer: "washer", storage: "tall_cabinet", television: "tv_board",
};

/** True when a parsed JSON looks like a RoomPlan scan (walls with sizes and transforms), not a NextFloor plan. */
export function isRoomPlan(json: unknown): boolean {
  const j = json as Record<string, unknown> | null;
  if (!j || typeof j !== "object" || "floors" in j || "settings" in j) return false;
  const rooms = Array.isArray(j.rooms) ? (j.rooms as Record<string, unknown>[]) : [j];
  return rooms.some((r) => r && Array.isArray(r.walls) && list(r, "walls", "wall").length > 0);
}

/** A building from a RoomPlan scan: one floor, one room per scanned room. */
export function importRoomPlan(json: unknown): { building: Building; report: ImportReport } {
  const j = json as Record<string, unknown>;
  const scans = (Array.isArray(j.rooms) ? (j.rooms as Record<string, unknown>[]) : [j]).filter((r) => r && typeof r === "object");
  const parsed = scans.map((s) => ({ walls: list(s, "walls", "wall"), doors: [...list(s, "doors", "door"), ...list(s, "openings", "opening")], windows: list(s, "windows", "window"), objects: list(s, "objects", "object") })).filter((s) => s.walls.length);
  if (!parsed.length) throw new Error("roomplan_empty");
  const allWalls = parsed.flatMap((s) => s.walls);
  // the floor is where the lowest wall stands (the scan's origin is the phone at the start of the scan)
  const ground = Math.min(...allWalls.map((w) => w.centre[1] - w.size[1] / 2));
  const shape = parsed.map((s) => outline(s.walls));
  const all = parsed.flatMap((s, i) => shape[i]?.points ?? boxOf(s.walls));
  const [x0, z0] = [Math.min(...all.map((p) => p[0])) - 0.5, Math.min(...all.map((p) => p[1])) - 0.5];
  const at = ([x, z]: Vec2): Vec2 => [r2(x - x0), r2(z - z0)];
  const floor = newFloor(uid("floor"), "Erdgeschoss", 0);
  floor.height = r2(Math.max(2.2, Math.min(4, Math.max(...allWalls.map((w) => w.size[1])))));
  const rooms: Room[] = [];
  const furniture: Furniture[] = [];
  parsed.forEach((s, i) => {
    const out = shape[i];
    const points = (out?.points ?? boxOf(s.walls)).map(at);
    const room: Room = { id: uid("room"), name: `Raum ${i + 1}`, area_id: null, points, floor_material: "wood", panel: [] };
    rooms.push(room);
    for (const d of [...s.doors.map((v) => ({ v, window: false })), ...s.windows.map((v) => ({ v, window: true }))]) {
      const centre: Vec2 = [d.v.centre[0] - x0, d.v.centre[2] - z0];
      let best: { edge: number; along: number; length: number; dist: number } | null = null;
      points.forEach((a, edge) => {
        const hit = toSegment(centre, a, points[(edge + 1) % points.length]);
        if (hit.dist <= 0.6 && (!best || hit.dist < best.dist)) best = { edge, ...hit };
      });
      if (!best) continue;
      const hit = best as { edge: number; along: number; length: number };
      const width = Math.min(hit.length, Math.max(0.3, d.v.size[0]));
      const passage = d.v.kind === "opening";
      floor.openings.push({
        id: uid("op"), room_id: room.id, edge: hit.edge,
        offset: r2(Math.min(hit.length - width / 2, Math.max(width / 2, hit.along))), width: r2(width),
        type: d.window ? "window" : "door",
        sill: d.window ? r2(Math.max(0, d.v.centre[1] - d.v.size[1] / 2 - ground)) : 0,
        height: r2(d.v.size[1]), hinge: "left", leaves: width > 1.4 ? 2 : 1, swing: "in", ...(passage ? { style: "passage" } : {}),
        cover: null, contact: null, contact2: null, tilt: null,
      } as Opening);
    }
    for (const o of s.objects) {
      const type = OBJECTS[o.kind];
      if (!type) continue;
      const [dw, dd, dh] = [o.size[0], o.size[2], o.size[1]];
      if (dw < 0.1 || dd < 0.1) continue;
      furniture.push({ id: uid("f"), type, x: r2(o.centre[0] - x0), z: r2(o.centre[2] - z0), rotation: Math.round(((Math.atan2(o.dir[1], o.dir[0]) * 180) / Math.PI + 360) % 360), w: r2(dw), d: r2(dd), h: r2(dh), variant: null, entity: null, power: null } as unknown as Furniture);
    }
  });
  floor.rooms = rooms;
  floor.furniture = furniture;
  const b = emptyBuilding();
  b.floors = [floor];
  const skipped = parsed.reduce((n, s) => n + s.objects.length, 0) - furniture.length;
  return { building: normalizeBuilding(b), report: { floors: 1, rooms: rooms.length, openings: floor.openings.length, walls: 0, furniture: skipped } };
}
