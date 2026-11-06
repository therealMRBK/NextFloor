// Robot vacuums in 3D. Home Assistant reports the state (cleaning, returning, docked ...) but usually not where the robot is.
// So while it cleans it drives lanes through the room its dock stands in, returns to the dock when it goes home, and waits in
// front of the dock otherwise.

import { pointInPolygon, type Vec2 } from "../model.ts";

export type RobotMode = "cleaning" | "returning" | "docked" | "idle" | "error";

export interface RobotInfo {
  /** The furniture item (the dock). */
  id: string;
  floorId: string;
  /** Where the robot rests: in front of its dock, facing away from it (radians). */
  rest: Vec2;
  restHeading: number;
  mode: RobotMode;
  /** The outline of the room it cleans; null means circles near the dock. */
  room: Vec2[] | null;
  /** The id of that room: a new room starts new lanes. */
  roomId?: string | null;
  /** Footprints of the furniture in its way (cabinets, sofas, beds; not tables or chairs). */
  obstacles?: Vec2[][];
  /** Height it drives at above its floor (a robot mower on the lawn below the ground floor). */
  y?: number;
  /** The pad it has driven on, from its own map (segments in the plan); null keeps the drawn lanes. */
  track?: Vec2[][] | null;
  /** Where it really is, from its own map; null lets it drive the drawn lanes. */
  pose?: { x: number; z: number; heading: number } | null;
  /** When it stopped cleaning (ms since the epoch), so its pad can fade; null while it still drives. */
  settledAt?: number | null;
  /** A robot mower: a larger, green body. */
  mower?: boolean;
}

/** Driving speed in m/s and turning speed in rad/s. */
export const ROBOT_SPEED = 0.3;
export const ROBOT_TURN = 2.6;

const SAMPLE = 0.05;

/** Whether a spot is free for the robot: clear of the walls on all four sides, and of furniture also on the diagonals. */
function spotIsFree(p: Vec2, room: Vec2[], obstacles: readonly Vec2[][], inset: number): boolean {
  const diagonal = inset * 0.7071;
  const sides: Vec2[] = [p, [p[0] + inset, p[1]], [p[0] - inset, p[1]], [p[0], p[1] + inset], [p[0], p[1] - inset]];
  const corners: Vec2[] = [[p[0] + diagonal, p[1] + diagonal], [p[0] - diagonal, p[1] + diagonal], [p[0] + diagonal, p[1] - diagonal], [p[0] - diagonal, p[1] - diagonal]];
  return sides.every((q) => pointInPolygon(q, room)) && !obstacles.some((o) => [...sides, ...corners].some((q) => pointInPolygon(q, o)));
}

/** Whether a straight drive from p to q stays free all the way. */
function driveIsClear(p: Vec2, q: Vec2, free: (spot: Vec2) => boolean): boolean {
  const steps = Math.ceil(Math.hypot(q[0] - p[0], q[1] - p[1]) / SAMPLE);
  for (let i = 1; i < steps; i++) if (!free([p[0] + ((q[0] - p[0]) * i) / steps, p[1] + ((q[1] - p[1]) * i) / steps])) return false;
  return true;
}

/** The longest stretch of free samples across the room along one lane, or null. */
function longestRun(isFree: (b: number) => boolean, from: number, to: number): [number, number] | null {
  let best: [number, number] | null = null;
  let start: number | null = null;
  for (let b = from; b <= to + 1e-6; b += SAMPLE) {
    const free = isFree(b);
    if (free) start ??= b;
    if ((!free || b + SAMPLE > to + 1e-6) && start !== null) {
      const end = free ? b : b - SAMPLE;
      if (!best || end - start > best[1] - best[0]) best = [start, end];
      start = null;
    }
  }
  return best;
}

/**
 * Lanes through a room, back and forth along its longer side, keeping `inset` from the walls and from furniture in the way.
 * Each lane takes the longest free stretch; a lane that cannot be reached from the previous one without crossing furniture is
 * left out.
 */
export function cleaningPath(room: Vec2[], lane = 0.32, inset = 0.22, obstacles: readonly Vec2[][] = []): Vec2[] {
  const xs = room.map((p) => p[0]);
  const zs = room.map((p) => p[1]);
  const [x0, x1, z0, z1] = [Math.min(...xs), Math.max(...xs), Math.min(...zs), Math.max(...zs)];
  // lanes run along the longer side, which means fewer turns
  const alongZ = z1 - z0 >= x1 - x0;
  const free = (p: Vec2) => spotIsFree(p, room, obstacles, inset);
  const at = (a: number, b: number): Vec2 => (alongZ ? [a, b] : [b, a]);
  const [a0, a1, b0, b1] = alongZ ? [x0, x1, z0, z1] : [z0, z1, x0, x1];

  const path: Vec2[] = [];
  let forward = true;
  for (let a = a0 + inset; a <= a1 - inset + 1e-6; a += lane) {
    const run = longestRun((b) => free(at(a, b)), b0, b1);
    if (!run || run[1] - run[0] < 0.2) continue;
    const ends = (towardsEnd: boolean): [Vec2, Vec2] => (towardsEnd ? [at(a, run[0]), at(a, run[1])] : [at(a, run[1]), at(a, run[0])]);
    let lanePoints = ends(forward);
    const previous = path[path.length - 1];
    if (previous && obstacles.length > 0 && !driveIsClear(previous, lanePoints[0], free)) {
      // the other way round, or leave the lane out when furniture is in the way either way
      const reversed = ends(!forward);
      if (!driveIsClear(previous, reversed[0], free)) continue;
      lanePoints = reversed;
      forward = !forward;
    }
    path.push(...lanePoints);
    forward = !forward;
  }
  return path;
}

/** A small circle in front of the dock, for robots outside any room. */
export function circlePath(center: Vec2, radius = 0.7, points = 12): Vec2[] {
  return Array.from({ length: points }, (_, i): Vec2 => [center[0] + Math.cos((i / points) * Math.PI * 2) * radius, center[1] + Math.sin((i / points) * Math.PI * 2) * radius]);
}

/** The moving state of one robot. */
export interface RobotMotion {
  pos: Vec2;
  heading: number;
  path: Vec2[];
  next: number;
}

const wrapAngle = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));

/** Advances a robot by `dt` seconds: it turns towards the next target and drives when it faces it. Returns whether it still moves. */
export function stepRobot(m: RobotMotion, info: RobotInfo, dt: number): boolean {
  let target: Vec2;
  if (info.mode === "cleaning") {
    if (m.path.length === 0) return false;
    target = m.path[m.next % m.path.length];
  } else if (info.mode === "returning" || info.mode === "docked") target = info.rest;
  else return false;

  const [dx, dz] = [target[0] - m.pos[0], target[1] - m.pos[1]];
  const distance = Math.hypot(dx, dz);
  if (distance < 0.02) {
    if (info.mode === "cleaning") {
      m.next = (m.next + 1) % m.path.length;
      return true;
    }
    // at home: turn to face away from the dock
    const off = wrapAngle(info.restHeading - m.heading);
    if (Math.abs(off) < 0.02) return false;
    m.heading += Math.sign(off) * Math.min(Math.abs(off), ROBOT_TURN * dt);
    return true;
  }
  // heading 0 faces +z; the robot turns on the spot before it drives
  const off = wrapAngle(Math.atan2(dx, dz) - m.heading);
  m.heading = wrapAngle(m.heading + Math.sign(off) * Math.min(Math.abs(off), ROBOT_TURN * dt));
  if (Math.abs(off) < 0.35) {
    const step = Math.min(distance, ROBOT_SPEED * dt);
    m.pos = [m.pos[0] + (dx / distance) * step, m.pos[1] + (dz / distance) * step];
  }
  return true;
}
