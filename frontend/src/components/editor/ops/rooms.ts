// Rooms: making, copying and removing them, moving a corner or the whole rectangle, and the ceiling lights of a room.

import { bounds, pointInPolygon, uid, type Floor, type Opening, type Placement, type Room, type Vec2 } from "../../../model.ts";
import { arcPoints, pieceAt, polylineLength } from "../../../geometry/arcs.ts";
import { kindOf } from "../../../devices.ts";

const thousandths = (v: number) => Math.round(v * 1000) / 1000;
const rounded = (points: readonly Vec2[]): Vec2[] => points.map(([x, z]) => [thousandths(x), thousandths(z)]);

/** A new room on the given outline, with a wooden floor and no area. */
export function newRoom(points: readonly Vec2[], name: string): Room {
  return { id: uid("room"), name, area_id: null, points: rounded(points), floor_material: "wood" };
}

/** A copy of a room half a metre to the south east, so that it can be told from the original. */
export function copyOfRoom(room: Room): Room {
  return { ...structuredClone(room), id: uid("room"), points: rounded(room.points.map(([x, z]) => [x + 0.5, z + 0.5])) };
}

/** Takes a room off the floor with the devices standing in it and its door and window openings. Openings in free walls stay. */
export function removeRoom(floor: Floor, roomId: string): void {
  const room = floor.rooms.find((r) => r.id === roomId);
  floor.rooms = floor.rooms.filter((r) => r.id !== roomId);
  floor.openings = floor.openings.filter((o) => o.room_id !== roomId || o.wall);
  if (room) floor.placements = floor.placements.filter((p) => !pointInPolygon([p.x, p.z], room.points));
}

/**
 * Takes a corner out of a room. The two edges at the corner become one, so openings on them cannot keep their place and are removed,
 * and the edges after the corner move up one place. A room keeps at least three corners.
 */
export function removeCorner(floor: Floor, roomId: string, index: number): boolean {
  const room = floor.rooms.find((r) => r.id === roomId);
  if (!room || room.points.length <= 3) return false;
  const before = (index - 1 + room.points.length) % room.points.length;
  room.points.splice(index, 1);
  // per-edge lists lose the edge that started at the removed corner
  room.wall_heights?.splice(index, 1);
  room.wall_slopes?.splice(index, 1);
  room.wall_thickness?.splice(index, 1);
  const onRoom = (o: { room_id: string; wall?: string | null }) => o.room_id === roomId && !o.wall;
  floor.openings = floor.openings
    .filter((o) => !(onRoom(o) && (o.edge === index || o.edge === before)))
    .map((o) => (onRoom(o) && o.edge > index ? { ...o, edge: o.edge - 1 } : o));
  return true;
}

export type RectField = "x" | "z" | "w" | "d";

/** The outline of a room as a rectangle after one of its box values (left, top, width, depth) was typed. Null when the value is no use. */
export function rectangleAfter(room: Room, field: RectField, value: number): Vec2[] | null {
  if (!Number.isFinite(value)) return null;
  const box = bounds(room.points);
  let { x0, z0, x1, z1 } = box;
  if (field === "x") [x0, x1] = [value, value + (x1 - x0)];
  else if (field === "z") [z0, z1] = [value, value + (z1 - z0)];
  else if (value > 0.05) {
    if (field === "w") x1 = x0 + value;
    else z1 = z0 + value;
  }
  return rounded([[x0, z0], [x1, z0], [x1, z1], [x0, z1]]);
}

/** The outline of a room with one coordinate of one corner changed. */
export function cornerMoved(room: Room, index: number, axis: 0 | 1, value: number): Vec2[] | null {
  if (!Number.isFinite(value) || index < 0 || index >= room.points.length) return null;
  return room.points.map((p, i): Vec2 => (i === index ? (axis === 0 ? [thousandths(value), p[1]] : [p[0], thousandths(value)]) : [p[0], p[1]]));
}

const GENERIC_NAME = /^(Raum|Room) \d+$/;

/**
 * What choosing a Home Assistant area does to a room: it gets the area, and a name that was only a placeholder ("Room 3", or the
 * name of some area) takes the area's name.
 */
export function areaChoice(room: Room, areaId: string, areas: Readonly<Record<string, { name: string }>>): Partial<Room> {
  const area = areaId ? areas[areaId] : undefined;
  const placeholder = !room.name || GENERIC_NAME.test(room.name) || Object.values(areas).some((a) => a.name === room.name);
  return { area_id: areaId || null, ...(area && placeholder ? { name: area.name } : {}) };
}

/**
 * Where the ceiling lights of a room go to light it evenly: one per cell of a grid over the room's box. A last row that is not full
 * is spread over the whole width as well. Nothing for fewer than two lights.
 */
export function evenCeilingLights(room: Room, placements: readonly Placement[]): { entityId: string; x: number; z: number }[] {
  const lights = placements.filter((p) => kindOf(p.entity_id) === "light" && (p.mount ?? "ceiling") === "ceiling" && pointInPolygon([p.x, p.z], room.points));
  if (lights.length < 2) return [];
  const box = bounds(room.points);
  const [width, depth] = [box.x1 - box.x0, box.z1 - box.z0];
  const columns = Math.max(1, Math.round(Math.sqrt((lights.length * width) / Math.max(0.1, depth))));
  const rows = Math.ceil(lights.length / columns);
  return lights.map((light, i) => {
    const row = Math.floor(i / columns);
    const inRow = row === rows - 1 ? lights.length - columns * (rows - 1) : columns;
    const column = i - row * columns;
    return { entityId: light.entity_id, x: thousandths(box.x0 + (width / inRow) * (column + 0.5)), z: thousandths(box.z0 + (depth / rows) * (row + 0.5)) };
  });
}

/**
 * Puts a new corner on an edge. Both halves keep the edge's wall height and thickness, and openings on the edge stay where they were
 * on the half that now holds them.
 */
export function insertCorner(floor: Floor, roomId: string, edge: number, at: Vec2): void {
  const room = floor.rooms.find((r) => r.id === roomId);
  if (!room) return;
  const start = room.points[edge];
  const end = room.points[(edge + 1) % room.points.length];
  room.points.splice(edge + 1, 0, at);
  const [from, to] = [room.wall_heights?.[edge], room.wall_slopes?.[edge]];
  if (typeof from === "number" && typeof to === "number" && room.wall_slopes) {
    // a sloping wall stays one slope: the new corner stands at the height the slope has there
    const whole = Math.hypot(end[0] - start[0], end[1] - start[1]);
    const middle = thousandths(from + ((to - from) * Math.min(1, Math.hypot(at[0] - start[0], at[1] - start[1]) / (whole || 1))));
    room.wall_slopes.splice(edge, 1, middle, to);
    room.wall_heights!.splice(edge + 1, 0, middle);
  } else {
    room.wall_heights?.splice(edge + 1, 0, room.wall_heights[edge] ?? null);
    room.wall_slopes?.splice(edge + 1, 0, null);
  }
  room.wall_thickness?.splice(edge + 1, 0, room.wall_thickness[edge] ?? null);
  const firstHalf = Math.hypot(at[0] - start[0], at[1] - start[1]);
  for (const o of floor.openings) {
    if (o.room_id !== roomId || o.wall) continue;
    if (o.edge > edge) o.edge += 1;
    else if (o.edge === edge && o.offset > firstHalf) {
      o.edge = edge + 1;
      o.offset = thousandths(o.offset - firstHalf);
    }
  }
}

/** The pieces an arc may have so that every opening on it still fits on one piece. */
function piecesFor(chordLength: number, sagitta: number, widest: number): number {
  const arcLength = chordLength * (1 + (8 / 3) * (sagitta / Math.max(1e-6, chordLength)) ** 2);
  return widest > 0 ? Math.max(2, Math.floor(arcLength / (widest + 0.1))) : 24;
}

/** Where openings land on a bent edge: at the same share of its length, kept whole on their piece. */
function rehost(openings: Opening[], fractions: number[], points: Vec2[], firstEdge: number): void {
  const total = polylineLength(points);
  openings.forEach((o, k) => {
    const { piece, offset } = pieceAt(points, fractions[k] * total);
    const length = Math.hypot(points[piece + 1][0] - points[piece][0], points[piece + 1][1] - points[piece][1]);
    o.edge = firstEdge + piece;
    o.offset = thousandths(length > o.width ? Math.min(length - o.width / 2, Math.max(o.width / 2, offset)) : length / 2);
  });
}

/**
 * Bends a room's edge into an arc that bulges by `sagitta` metres away from the room (negative: into it). A room sharing the
 * edge bends along. The arc is stored as short straight pieces; the pieces keep the wall's height and thickness, and the doors
 * and windows on it move to the piece at the same share of the length.
 */
export function arcRoomEdge(floor: Floor, roomId: string, edge: number, sagitta: number): boolean {
  const room = floor.rooms.find((r) => r.id === roomId);
  if (!room || edge < 0 || edge >= room.points.length || Math.abs(sagitta) < 0.01) return false;
  const a = room.points[edge];
  const b = room.points[(edge + 1) % room.points.length];
  const chord = Math.hypot(b[0] - a[0], b[1] - a[1]);
  if (chord < 0.2) return false;
  // which side of a→b is outside this room
  const [ux, uz] = [(b[0] - a[0]) / chord, (b[1] - a[1]) / chord];
  const probe: Vec2 = [(a[0] + b[0]) / 2 + uz * 0.02, (a[1] + b[1]) / 2 - ux * 0.02];
  const leftIsInside = pointInPolygon(probe, room.points);
  const bulgeLeft = leftIsInside ? -sagitta : sagitta;
  const onEdge = (r: Room, e: number) => floor.openings.filter((o) => o.room_id === r.id && !o.wall && o.edge === e);
  // the rooms bending along: this one, and every room with the same edge (usually the other way round)
  const sharing = floor.rooms.flatMap((r) =>
    r.points
      .map((p, i): [Room, number, boolean] | null => {
        const q = r.points[(i + 1) % r.points.length];
        const same = (m: Vec2, n: Vec2) => Math.abs(m[0] - n[0]) < 1e-3 && Math.abs(m[1] - n[1]) < 1e-3;
        if (same(p, a) && same(q, b)) return [r, i, false];
        if (same(p, b) && same(q, a)) return [r, i, true];
        return null;
      })
      .filter((x): x is [Room, number, boolean] => !!x),
  );
  const widest = Math.max(0, ...sharing.flatMap(([r, e]) => onEdge(r, e).map((o) => o.width)));
  const inner = arcPoints(a, b, bulgeLeft, piecesFor(chord, sagitta, widest)).map(([x, z]): Vec2 => [thousandths(x), thousandths(z)]);
  if (!inner.length) return false;
  for (const [r, e, reversed] of sharing) {
    const corners = reversed ? [...inner].reverse() : inner;
    const moving = onEdge(r, e);
    const start = r.points[e];
    const fractions = moving.map((o) => Math.min(1, Math.max(0, o.offset / chord)));
    // park the openings while the corners go in, then put them on their piece
    for (const o of moving) o.edge = -1;
    corners.forEach((p, k) => insertCorner(floor, r.id, e + k, p));
    r.wall_splits?.splice(e + 1, 0, ...corners.map(() => null));
    if (r.wall_splits?.[e]) r.wall_splits[e] = null;
    rehost(moving, fractions, [start, ...corners, r.points[(e + corners.length + 1) % r.points.length]], e);
  }
  return true;
}

/**
 * Bends a free wall into an arc: it becomes a chain of free walls with the same thickness and height. Returns the ids of the
 * new walls (the first one keeps the old id, so openings and selection stay valid).
 */
export function arcFreeWall(floor: Floor, wallId: string, sagitta: number): string[] {
  const walls = floor.walls ?? [];
  const index = walls.findIndex((w) => w.id === wallId);
  if (index < 0 || Math.abs(sagitta) < 0.01) return [];
  const wall = walls[index];
  const chord = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]);
  const moving = floor.openings.filter((o) => o.wall === wallId);
  const widest = Math.max(0, ...moving.map((o) => o.width));
  const inner = arcPoints(wall.a, wall.b, sagitta, piecesFor(chord, sagitta, widest)).map(([x, z]): Vec2 => [thousandths(x), thousandths(z)]);
  if (!inner.length) return [];
  const points = [wall.a, ...inner, wall.b];
  const chain = points.slice(1).map((p, i) => ({ ...wall, id: i === 0 ? wall.id : uid("wall"), a: points[i], b: p }));
  walls.splice(index, 1, ...chain);
  floor.walls = walls;
  const total = polylineLength(points);
  for (const o of moving) {
    const { piece, offset } = pieceAt(points, (o.offset / chord) * total);
    const length = Math.hypot(points[piece + 1][0] - points[piece][0], points[piece + 1][1] - points[piece][1]);
    o.wall = chain[piece].id;
    o.offset = thousandths(length > o.width ? Math.min(length - o.width / 2, Math.max(o.width / 2, offset)) : length / 2);
  }
  return chain.map((w) => w.id);
}
