// Fold buckets of the walls, and the openings resolved onto their walls.

import { locateOpening, openingHost, type Wall } from "../../geometry/walls.ts";
import type { Floor, Vec2 } from "../../model.ts";
import { SECTORS } from "./look.ts";
import { unit } from "./outline.ts";
import type { OpeningInfo, Span } from "./types.ts";

/**
 * How tall a wall stands: its own height (a low wall, a counter), else the floor height. It may rise above the floor height:
 * the wall of a room whose ceiling reaches into the floor above (#55), or a sloping wall, whose highest point this is.
 */
export const wallHeight = (wall: Wall, floorHeight: number): number =>
  wall.heightEnd === undefined ? (wall.height ?? floorHeight) : Math.max(wall.height ?? floorHeight, wall.heightEnd);

/**
 * Sorts the walls into buckets by the direction they face: all interior walls are one bucket, exterior walls fall into
 * compass sectors. A bucket is what folds away together.
 */
export function bucketWalls(walls: Wall[]): { buckets: (Vec2 | null)[]; wallBucket: Map<Wall, number> } {
  const indexOfKey = new Map<string, number>();
  const buckets: (Vec2 | null)[] = [];
  const wallBucket = new Map<Wall, number>();
  for (const wall of walls) {
    let key = "interior";
    let normal: Vec2 | null = null;
    if (wall.exterior) {
      const [dx, dz] = [wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]];
      const length = Math.hypot(dx, dz) || 1;
      const out: Vec2 = [dz / length, -dx / length]; // the right normal: away from the room
      const sector = ((Math.round((Math.atan2(out[1], out[0]) / (2 * Math.PI)) * SECTORS) % SECTORS) + SECTORS) % SECTORS;
      key = `s${sector}`;
      const angle = (sector / SECTORS) * 2 * Math.PI;
      normal = [Math.cos(angle), Math.sin(angle)];
    }
    if (!indexOfKey.has(key)) {
      indexOfKey.set(key, buckets.length);
      buckets.push(normal);
    }
    wallBucket.set(wall, indexOfKey.get(key)!);
  }
  return { buckets, wallBucket };
}

/** The roof limits of a floor's walls: the top of a wall at a point, and the lowest top along a stretch of a wall. */
export function roofLimits(roofUnder?: (x: number, z: number) => number | null) {
  /** The top of a wall at a point: its own height, or the roof above when that is lower. */
  const topAt = (x: number, z: number, height: number): number => {
    const roof = roofUnder ? roofUnder(x, z) : null;
    return roof === null ? height : Math.max(0.05, Math.min(height, roof));
  };
  /** The lowest wall top along a stretch of a wall (sampled), for openings and the top edge line. */
  const lowestTop = (a: Vec2, axis: Vec2, s0: number, s1: number, height: number): number => {
    if (!roofUnder) return height;
    const samples = Math.max(2, Math.ceil((s1 - s0) / 0.25) + 1);
    let lowest = height;
    for (let i = 0; i < samples; i++) {
      const s = s0 + ((s1 - s0) * i) / (samples - 1);
      lowest = Math.min(lowest, topAt(a[0] + axis[0] * s, a[1] + axis[1] * s, height));
    }
    return lowest;
  };
  return { topAt, lowestTop };
}

/** The tops of one wall: its highest point, the top at a point, and the lowest top along a stretch, with a sloping wall's slope and the roof above both counted. */
export function wallTops(wall: Wall, floorHeight: number, limits: ReturnType<typeof roofLimits>) {
  const H = wallHeight(wall, floorHeight);
  const length = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]);
  const axis = unit([wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]]);
  if (wall.heightEnd === undefined) return { H, varies: false, topAt: (x: number, z: number) => limits.topAt(x, z, H), lowestTop: (s0: number, s1: number) => limits.lowestTop(wall.a, axis, s0, s1, H) };
  const [h0, h1] = [wall.height ?? floorHeight, wall.heightEnd];
  /** The height of the sloping top above a point: straight from h0 at a to h1 at b. */
  const slopeAt = (x: number, z: number): number => {
    const t = length > 1e-9 ? ((x - wall.a[0]) * axis[0] + (z - wall.a[1]) * axis[1]) / length : 0;
    return h0 + (h1 - h0) * Math.max(0, Math.min(1, t));
  };
  const topAt = (x: number, z: number) => limits.topAt(x, z, slopeAt(x, z));
  const lowestTop = (s0: number, s1: number): number => {
    const samples = Math.max(2, Math.ceil((s1 - s0) / 0.25) + 1);
    let lowest = Infinity;
    for (let i = 0; i < samples; i++) {
      const s = s0 + ((s1 - s0) * i) / (samples - 1);
      lowest = Math.min(lowest, topAt(wall.a[0] + axis[0] * s, wall.a[1] + axis[1] * s));
    }
    return lowest;
  };
  return { H, varies: true, topAt, lowestTop };
}

/** Puts every opening onto its wall: its span along the wall, the side the room is on, its sill and top. */
export function placeOpenings(floor: Floor, walls: Wall[], wallBucket: Map<Wall, number>, limits: ReturnType<typeof roofLimits>): { openings: OpeningInfo[]; spans: Map<Wall, Span[]> } {
  const spans = new Map<Wall, Span[]>();
  const openings: OpeningInfo[] = [];
  for (const o of floor.openings) {
    const host = openingHost(o, floor.rooms, floor.walls ?? []);
    const hit = host && locateOpening(walls, o, host);
    if (!host || !hit) continue;
    const { wall, s } = hit;
    const axis = unit([wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]]);
    const length = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]);
    const width = Math.min(o.width, length);
    const s0 = Math.max(0, Math.min(length - width, s - width / 2));
    // in a free wall the "room" side is the left of the wall as drawn
    const hp = host.room.points;
    const roomOnLeft = wall.free ? axis[0] * (hp[1][0] - hp[0][0]) + axis[1] * (hp[1][1] - hp[0][1]) > 0 : wall.roomLeft === o.room_id;
    const leftNormal: Vec2 = [-axis[1], axis[0]];
    const toRoom: Vec2 = roomOnLeft ? leftNormal : [-leftNormal[0], -leftNormal[1]];
    const top = Math.min(wallTops(wall, floor.height, limits).lowestTop(s0, s0 + width) - 0.02, o.sill + o.height);
    const sill = Math.max(0, Math.min(o.sill, top - 0.1));
    // looking at the wall from the room, "right" is (toRoom.z, -toRoom.x)
    const right: Vec2 = [toRoom[1], -toRoom[0]];
    const startIsLeft = axis[0] * right[0] + axis[1] * right[1] > 0;
    const info: OpeningInfo = {
      opening: o,
      bucket: wallBucket.get(wall)!,
      start: [wall.a[0] + axis[0] * s0, wall.a[1] + axis[1] * s0],
      axis,
      width,
      toRoom,
      faceRoom: roomOnLeft ? wall.left : wall.right,
      faceOut: roomOnLeft ? wall.right : wall.left,
      sill,
      top,
      hingeAtStart: (o.hinge === "left") === startIsLeft,
      exterior: wall.exterior,
    };
    openings.push(info);
    spans.set(wall, [...(spans.get(wall) ?? []), { s0, s1: s0 + width, sill, top, info }]);
  }
  return { openings, spans };
}
