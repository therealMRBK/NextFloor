// Sun in the rooms: how many hours of a day the sun shines in through a room's outside windows, worked out from the plan, its
// compass and the sun's path at the home's place. Neighbours, trees and the overhang of the roof are not counted.

import { generateWalls, locateOpening, openingHost, wallOptions, type Wall } from "../geometry/walls.ts";
import type { Building, Floor, Opening, Room } from "../model.ts";
import { sunPosition, todayAt } from "../sun-position.ts";

const DEG = Math.PI / 180;
/** The sun has to stand this high to shine in (degrees), and this square onto the window (cosine of the angle). */
const MIN_ELEVATION = 3;
const MIN_FACING = 0.1;
const STEP_HOURS = 1 / 6;

export interface RoomSun {
  /** Hours of sun through at least one window. */
  hours: number;
  /** The compass directions the room's outside windows look to ("S", "SW" …), each once. */
  facing: string[];
}

/** The horizontal direction towards the sun in plan coordinates (x right, z down, "up" is -z), like the 3D view. */
const toSun = (azimuth: number, north: number): [number, number] => [Math.sin((north + azimuth) * DEG), -Math.cos((north + azimuth) * DEG)];

const COMPASS = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

/** The outward directions of a room's windows in outside walls, in plan coordinates. */
export function windowNormals(floor: Floor, room: Room, walls: readonly Wall[]): [number, number][] {
  return outsideWindows(floor, room, walls).map((w) => w.normal);
}

/** A room's windows (and glass doors) in outside walls, each with the direction it looks to. */
export function outsideWindows(floor: Floor, room: Room, walls: readonly Wall[]): { opening: Opening; normal: [number, number] }[] {
  const out: { opening: Opening; normal: [number, number] }[] = [];
  for (const o of floor.openings) {
    if (o.room_id !== room.id || o.type === "garage") continue;
    const host = openingHost(o, floor.rooms, floor.walls ?? []);
    const at = host ? locateOpening(walls, o, host) : null;
    if (!at || !at.wall.exterior) continue;
    const { wall } = at;
    const len = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]);
    if (len < 1e-6) continue;
    // the room lies on the wall's left (its normal (-dz, dx)); the window looks the other way
    const left: [number, number] = [-(wall.b[1] - wall.a[1]) / len, (wall.b[0] - wall.a[0]) / len];
    const intoRoom = wall.roomLeft === room.id ? left : ([-left[0], -left[1]] as [number, number]);
    out.push({ opening: o, normal: [-intoRoom[0], -intoRoom[1]] });
  }
  return out;
}

/** The compass word of an outward direction in the plan, with the plan's north. */
export function compassOf(dir: readonly [number, number], north: number): string {
  // plan "up" is -z; the bearing is clockwise from the plan's up, then turned by north
  const bearing = (((Math.atan2(dir[0], -dir[1]) / DEG - north) % 360) + 360) % 360;
  return COMPASS[Math.round(bearing / 45) % 8];
}

const wallMemo = new WeakMap<Floor, Wall[]>();
function wallsOf(b: Building, floor: Floor): Wall[] {
  let walls = wallMemo.get(floor);
  if (!walls) {
    walls = generateWalls(floor.rooms, wallOptions(b.settings), floor.walls ?? []).walls;
    wallMemo.set(floor, walls);
  }
  return walls;
}

/** Results per floor object (a new plan state is a new object) and day: the room panel and the heat map ask on every state change. */
const sunMemo = new WeakMap<Floor, Map<string, RoomSun>>();

/** Hours of sun of a room on the day of `date` at the home's place (latitude, longitude, time zone). */
export function roomSun(b: Building, floor: Floor, room: Room, place: { latitude: number; longitude: number; zone?: string | null }, date = new Date()): RoomSun {
  const key = `${room.id}|${date.toISOString().slice(0, 10)}|${b.settings.north ?? 0}|${place.latitude},${place.longitude},${place.zone ?? ""}`;
  let known = sunMemo.get(floor);
  if (!known) sunMemo.set(floor, (known = new Map()));
  const hit = known.get(key);
  if (hit) return hit;
  const result = computeRoomSun(b, floor, room, place, date);
  known.set(key, result);
  return result;
}

function computeRoomSun(b: Building, floor: Floor, room: Room, place: { latitude: number; longitude: number; zone?: string | null }, date: Date): RoomSun {
  const north = b.settings.north ?? 0;
  const normals = windowNormals(floor, room, wallsOf(b, floor));
  const facing = [...new Set(normals.map((n) => compassOf(n, north)))];
  if (!normals.length) return { hours: 0, facing };
  let steps = 0;
  for (let h = STEP_HOURS / 2; h < 24; h += STEP_HOURS) {
    const sun = sunPosition(todayAt(h, place.zone, date), place.latitude, place.longitude);
    if (sun.elevation < MIN_ELEVATION) continue;
    const s = toSun(sun.azimuth, north);
    // the cosine of the angle between the window's outward direction and the sun, on the ground plane
    if (normals.some((n) => n[0] * s[0] + n[1] * s[1] > MIN_FACING)) steps++;
  }
  return { hours: Math.round(steps * STEP_HOURS * 10) / 10, facing };
}

/** Hours of sun of a room on the 15th of every month of `year` (January first), for the curve over the year. */
export function roomSunYear(b: Building, floor: Floor, room: Room, place: { latitude: number; longitude: number; zone?: string | null }, year = new Date().getFullYear()): number[] {
  return Array.from({ length: 12 }, (_, month) => roomSun(b, floor, room, place, new Date(Date.UTC(year, month, 15, 12))).hours);
}

/** The room's outside windows the sun shines on right now (none at night or with the sun low). */
export function sunnyWindowsNow(b: Building, floor: Floor, room: Room, place: { latitude: number; longitude: number }, now = new Date()): Opening[] {
  const sun = sunPosition(now, place.latitude, place.longitude);
  if (sun.elevation < MIN_ELEVATION) return [];
  const s = toSun(sun.azimuth, b.settings.north ?? 0);
  return outsideWindows(floor, room, wallsOf(b, floor))
    .filter((w) => w.normal[0] * s[0] + w.normal[1] * s[1] > MIN_FACING)
    .map((w) => w.opening);
}
