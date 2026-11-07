// Pets that roam their room: a cat, a dog or a rabbit walks to a free spot of the room, looks around for a few seconds, and walks
// on. They keep away from the walls and walk round the furniture. Pure motion; the viewer draws them and moves their group.

import { pointInPolygon, type Vec2 } from "../model.ts";

export interface PetMotion {
  pos: Vec2;
  heading: number;
  target: Vec2 | null;
  /** Seconds left to rest before the next walk. */
  rest: number;
}

export interface PetRoom {
  points: Vec2[];
  /** Footprints of the furniture standing in the room, which the pet walks round. */
  obstacles: Vec2[][];
  /** Walking speed in m/s. */
  speed: number;
}

/** A tiny seeded random generator, so every pet walks its own but repeatable way. */
export function seededRandom(seed: string): () => number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

const distToSegment = (p: Vec2, a: Vec2, b: Vec2) => {
  const [dx, dz] = [b[0] - a[0], b[1] - a[1]];
  const l2 = dx * dx + dz * dz || 1e-9;
  const t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / l2));
  return Math.hypot(p[0] - a[0] - dx * t, p[1] - a[1] - dz * t);
};

/** Whether a pet can stand at p: inside the room, a little off the walls, not inside furniture. */
export function freeSpot(room: PetRoom, p: Vec2, margin = 0.25): boolean {
  if (!pointInPolygon(p, room.points)) return false;
  const pts = room.points;
  for (let i = 0; i < pts.length; i++) if (distToSegment(p, pts[i], pts[(i + 1) % pts.length]) < margin) return false;
  return !room.obstacles.some((o) => pointInPolygon(p, o));
}

/** The way from a to b is free of furniture (checked every 10 cm). */
function clearWay(room: PetRoom, a: Vec2, b: Vec2): boolean {
  // a pet placed under a table walks out of it: only the other furniture blocks its way
  const blocking = room.obstacles.filter((o) => !pointInPolygon(a, o));
  const steps = Math.max(1, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 0.1));
  for (let i = 1; i <= steps; i++) {
    const p: Vec2 = [a[0] + ((b[0] - a[0]) * i) / steps, a[1] + ((b[1] - a[1]) * i) / steps];
    if (blocking.some((o) => pointInPolygon(p, o))) return false;
  }
  return true;
}

/** A free spot of the room the pet can walk to in a straight line, or null after a few tries. */
export function nextTarget(room: PetRoom, from: Vec2, random: () => number): Vec2 | null {
  const xs = room.points.map((p) => p[0]);
  const zs = room.points.map((p) => p[1]);
  const [x0, x1, z0, z1] = [Math.min(...xs), Math.max(...xs), Math.min(...zs), Math.max(...zs)];
  for (let i = 0; i < 24; i++) {
    const p: Vec2 = [x0 + (x1 - x0) * random(), z0 + (z1 - z0) * random()];
    if (Math.hypot(p[0] - from[0], p[1] - from[1]) > 0.6 && freeSpot(room, p) && clearWay(room, from, p)) return p;
  }
  return null;
}

/** One step of dt seconds: walk towards the target and turn into the way, or rest and then pick the next spot. True while it walks. */
export function stepPet(m: PetMotion, room: PetRoom, dt: number, random: () => number): boolean {
  if (!m.target) {
    m.rest -= dt;
    if (m.rest > 0) return false;
    m.target = nextTarget(room, m.pos, random);
    if (!m.target) {
      m.rest = 2;
      return false;
    }
  }
  const [dx, dz] = [m.target[0] - m.pos[0], m.target[1] - m.pos[1]];
  const dist = Math.hypot(dx, dz);
  // the heading turns smoothly towards the way (the pet's nose points along +z of its model)
  const want = Math.atan2(dx, dz);
  let turn = want - m.heading;
  while (turn > Math.PI) turn -= 2 * Math.PI;
  while (turn < -Math.PI) turn += 2 * Math.PI;
  m.heading += Math.max(-4 * dt, Math.min(4 * dt, turn));
  const step = room.speed * dt * (Math.abs(turn) > 1.2 ? 0.3 : 1);
  if (dist <= step) {
    m.pos = [m.target[0], m.target[1]];
    m.target = null;
    m.rest = 2 + random() * 6;
    return true;
  }
  m.pos = [m.pos[0] + (dx / dist) * step, m.pos[1] + (dz / dist) * step];
  return true;
}

/**
 * One frame of a pet with the real time since its last frame: the walk moves by at most 0.2 s at once (no jumps after
 * a pause), but a rest counts the whole time down, so a pet walks on whether the view draws every frame or slept (#97).
 */
export function advancePet(m: PetMotion, room: PetRoom, elapsed: number, random: () => number): boolean {
  const dt = Math.min(0.2, Math.max(0, elapsed));
  if (!m.target) m.rest -= Math.max(0, elapsed) - dt;
  return stepPet(m, room, dt, random);
}
