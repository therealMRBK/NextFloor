// Floor and living area of the rooms, counted like the German Wohnflächenverordnung: the floor inside the walls, in full where the
// clear height is 2 m or more, half where it is between 1 and 2 m (under a slope), and not at all below 1 m.

import { pointInPolygon, roomOffset, type Building, type Floor, type Room } from "../model.ts";
import { roofUnderAt } from "../roof/proposal.ts";
import { generateWalls, type Wall } from "./walls.ts";

export interface RoomArea {
  roomId: string;
  /** The floor inside the walls, m². */
  floor: number;
  /** What counts as living area, m². */
  living: number;
  /** The part of the floor with a clear height below 2 m (under a slope), m². */
  low: number;
}

/** Rooms that are no living area by their name, unless set otherwise: garages, cellars, utility and boiler rooms. */
const NOT_LIVING = /garage|carport|keller|cellar|basement|technik|heizung|heizraum|boiler|utility|werkstatt|schuppen|shed|dachboden|attic/i;

/** Whether a room counts as living area: as set on the room, else by its name. */
export const countsAsLiving = (room: Pick<Room, "name" | "living">): boolean => room.living ?? !NOT_LIVING.test(room.name);

/** The grid the rooms are sampled on (m): 10 cm, fine enough for a few cm² per metre of wall. */
const CELL = 0.1;

const boxOf = (points: readonly [number, number][]) => ({
  x0: Math.min(...points.map((p) => p[0])),
  x1: Math.max(...points.map((p) => p[0])),
  z0: Math.min(...points.map((p) => p[1])),
  z1: Math.max(...points.map((p) => p[1])),
});

/** The areas of one room: sampled on a grid, leaving out the walls, weighted by the clear height above each point. */
export function roomArea(b: Building, floor: Floor, room: Room, walls: readonly Wall[], cell = CELL): RoomArea {
  if (room.points.length < 3) return { roomId: room.id, floor: 0, living: 0, low: 0 };
  const box = boxOf(room.points);
  const near = walls.filter((w) => {
    const wb = boxOf(w.footprint);
    return wb.x1 >= box.x0 && wb.x0 <= box.x1 && wb.z1 >= box.z0 && wb.z0 <= box.z1;
  });
  const ceiling = floor.elevation + (room.ceiling != null && room.ceiling > 0 ? room.ceiling : floor.height);
  const hasRoof = (b.settings.roof?.sections ?? []).some((s) => !s.open);
  const level = roomOffset(room);
  let full = 0;
  let half = 0;
  let under = 0;
  for (let x = box.x0 + cell / 2; x < box.x1; x += cell) {
    for (let z = box.z0 + cell / 2; z < box.z1; z += cell) {
      if (!pointInPolygon([x, z], room.points) || near.some((w) => pointInPolygon([x, z], w.footprint))) continue;
      const roof = hasRoof ? roofUnderAt(b, x, z) : null;
      // a room on its own level: the clear height counts from its own floor
      const clear = Math.min(ceiling, roof ?? Infinity) - floor.elevation - level;
      if (clear >= 2) full++;
      else if (clear >= 1) half++;
      else under++;
    }
  }
  const a = cell * cell;
  return { roomId: room.id, floor: (full + half + under) * a, living: countsAsLiving(room) ? (full + half / 2) * a : 0, low: (half + under) * a };
}

/** Areas per floor object: the plan is copied on every change, so a floor object stands for one state of it. */
const memo = new WeakMap<Floor, { roof: unknown; areas: RoomArea[] }>();

/** The areas of every room of a floor (layers have none). */
export function floorAreas(b: Building, floor: Floor): RoomArea[] {
  if (floor.layer) return [];
  const known = memo.get(floor);
  if (known && known.roof === b.settings.roof) return known.areas;
  const areas = computeFloorAreas(b, floor);
  memo.set(floor, { roof: b.settings.roof, areas });
  return areas;
}

function computeFloorAreas(b: Building, floor: Floor): RoomArea[] {
  const walls = generateWalls(floor.rooms, { exterior: b.settings.wall_exterior, interior: b.settings.wall_interior }, floor.walls ?? []).walls;
  return floor.rooms.map((r) => roomArea(b, floor, r, walls));
}

/** Sums of room areas. */
export const totalOf = (areas: readonly RoomArea[]): Omit<RoomArea, "roomId"> => areas.reduce((t, a) => ({ floor: t.floor + a.floor, living: t.living + a.living, low: t.low + a.low }), { floor: 0, living: 0, low: 0 });
