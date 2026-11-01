// Making and changing the things on a floor: furniture, devices, outdoor areas, free walls, floor openings and doors and windows.

import { autoPlace } from "../../../devices.ts";
import { openingHost } from "../../../geometry/walls.ts";
import {
  bounds,
  centroid,
  FURNITURE_SIZE,
  isLamp,
  AUTO_STYLES,
  OPENING_PRESETS,
  openingPreset,
  uid,
  type Building,
  type Floor,
  type FreeWall,
  type Furniture,
  type Opening,
  type OpeningPreset,
  type OutdoorArea,
  type Placement,
  type Room,
  type Vec2,
} from "../../../model.ts";
import { furnitureSize } from "../../../packs.ts";

const thousandths = (v: number) => Math.round(v * 1000) / 1000;
const quarterTurns = (degrees: number, by: number) => (((degrees + by) % 360) + 360) % 360;

// free walls, outdoor areas and floor openings

export function newFreeWall(a: Vec2, b: Vec2): FreeWall {
  return { id: uid("wall"), a: [thousandths(a[0]), thousandths(a[1])], b: [thousandths(b[0]), thousandths(b[1])], thickness: null };
}

/** The far end of a free wall after its length was typed: the wall keeps its start and its direction. */
export function wallEndForLength(wall: FreeWall, length: number): Vec2 {
  const current = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]) || 1;
  const k = Math.max(0.1, length) / current;
  return [thousandths(wall.a[0] + (wall.b[0] - wall.a[0]) * k), thousandths(wall.a[1] + (wall.b[1] - wall.a[1]) * k)];
}

/** A wall as high as the floor is stored as "no height of its own". */
export const wallHeightPatch = (height: number, floorHeight: number): { height: number | null } => ({ height: height >= floorHeight - 0.005 ? null : Math.max(0.05, height) });

/** A floor opening (stairwell, gallery) drawn as a rectangle: a hole in the floor of this level. */
export function newFloorOpening(lo: Vec2, hi: Vec2): Furniture {
  return { id: uid("hole"), type: "stairwell", x: thousandths((lo[0] + hi[0]) / 2), z: thousandths((lo[1] + hi[1]) / 2), w: thousandths(hi[0] - lo[0]), d: thousandths(hi[1] - lo[1]), h: 0.02, rotation: 0, variant: null };
}

export const newOutdoorArea = (points: readonly Vec2[]): OutdoorArea => ({ id: uid("outdoor"), type: "lawn", points: points.map(([x, z]) => [thousandths(x), thousandths(z)]) });

/** A new corner in the middle of an outdoor area's edge (edge i runs from corner i to the next), so that a rectangle can become any shape. */
export function insertOutdoorCorner(area: OutdoorArea, edge: number, at: Vec2): void {
  area.points.splice(edge + 1, 0, [thousandths(at[0]), thousandths(at[1])]);
}

/** Takes a corner away; an area keeps at least three. */
export function removeOutdoorCorner(area: OutdoorArea, index: number): boolean {
  if (area.points.length <= 3 || index < 0 || index >= area.points.length) return false;
  area.points.splice(index, 1);
  return true;
}

export const copyOfOutdoorArea = (area: OutdoorArea): OutdoorArea => ({ ...area, id: uid("outdoor"), points: area.points.map(([x, z]) => [thousandths(x + 0.5), thousandths(z + 0.5)]) });

// furniture

/** A new piece of furniture of this type at `at`. Stairs reach up to the next floor above, or a little above the ceiling of the top one. */
export function newFurniture(type: string, doc: Building, floor: Floor, at: Vec2): Furniture {
  const [w, d, height] = furnitureSize(type);
  const above = doc.floors.filter((f) => f.elevation > floor.elevation).sort((p, q) => p.elevation - q.elevation)[0];
  const h = type === "stairs" ? thousandths(above ? above.elevation - floor.elevation : floor.height + 0.25) : height;
  return { id: uid("furniture"), type, x: thousandths(at[0]), z: thousandths(at[1]), rotation: 0, w, d, h, variant: null };
}

/** A copy of a piece of furniture 30 cm to the south east. */
export const copyOfFurniture = (item: Furniture): Furniture => ({ ...structuredClone(item), id: uid("furniture"), x: thousandths(item.x + 0.3), z: thousandths(item.z + 0.3) });

export const turnedBy = (degrees: number, delta: number): number => quarterTurns(degrees, delta);

/** A vehicle that was placed as plain furniture becomes a parking spot holding it: presence and the car's live data live there. */
export function parkingSpotFor(vehicle: Furniture): Furniture {
  const [w, d, h] = furnitureSize("parking");
  return {
    id: uid("furniture"),
    type: "parking",
    x: vehicle.x,
    z: vehicle.z,
    rotation: vehicle.rotation,
    w: Math.max(w, thousandths(vehicle.w + 0.5)),
    d: Math.max(d, thousandths(vehicle.d + 0.4)),
    h,
    variant: null,
    vehicle: vehicle.type,
    ...(vehicle.name ? { name: vehicle.name } : {}),
  };
}

// devices

/** A piece of furniture of this type standing for a placed device, where its pin was. */
export function furnitureForDevice(placed: Placement, type: string): Furniture {
  const [w, d, h] = furnitureSize(type);
  return { id: uid("furniture"), type, x: placed.x, z: placed.z, rotation: placed.rotation ?? 0, w, d, h, variant: null, entity: placed.entity_id, name: placed.name ?? null, animations_enabled: placed.animations_enabled, effect_animations: structuredClone(placed.effect_animations), ...(placed.locked ? { locked: true } : {}) };
}

/** A plain device pin where a piece of furniture linked by hand stood. */
export const deviceForFurniture = (item: Furniture, entityId: string): Placement => ({ entity_id: entityId, x: item.x, z: item.z, y: null, rotation: item.rotation, animations_enabled: item.animations_enabled, effect_animations: structuredClone(item.effect_animations), ...(item.name ? { name: item.name } : {}) });

/** Takes a device off every floor, with the ceiling lamp that stands for it. */
export function removeDevice(doc: Building, entityId: string): void {
  for (const floor of doc.floors) {
    floor.placements = floor.placements.filter((p) => p.entity_id !== entityId);
    floor.furniture = floor.furniture.filter((m) => !(isLamp(m.type) && m.entity === entityId));
  }
}

/**
 * Puts entities into a room. One that was placed elsewhere moves here. Lights become ceiling lamps, which can be tapped directly in
 * 3D; everything else becomes a pin.
 */
export function placeInRoom(doc: Building, floor: Floor, room: Room, entityIds: readonly string[]): void {
  const moving = new Set(entityIds);
  for (const f of doc.floors) {
    f.placements = f.placements.filter((p) => !moving.has(p.entity_id));
    f.furniture = f.furniture.filter((m) => !(isLamp(m.type) && m.entity && moving.has(m.entity)));
  }
  const taken: Vec2[] = [...floor.placements.map((p): Vec2 => [p.x, p.z]), ...floor.furniture.filter((m) => isLamp(m.type)).map((m): Vec2 => [m.x, m.z])];
  for (const spot of autoPlace(room, entityIds, taken)) {
    if (!spot.entity_id.startsWith("light.")) {
      floor.placements.push(spot);
      continue;
    }
    const [w, d, h] = FURNITURE_SIZE.lamp_ceiling;
    floor.furniture.push({ id: uid("furniture"), type: "lamp_ceiling", x: spot.x, z: spot.z, rotation: 0, w, d, h, variant: null, entity: spot.entity_id, power: null });
  }
}

/** The middle of the room a point lies in, as a place for a device. */
export function roomCentre(room: Room): Vec2 {
  const [x, z] = centroid(room.points);
  return [thousandths(x), thousandths(z)];
}

// doors and windows

/** Where along an edge (from its start, in metres) an opening of this width sits when dropped at `along`, kept inside the edge. */
export function offsetOnEdge(edgeLength: number, along: number, width: number, grid: number): number {
  const half = Math.min(width, edgeLength) / 2;
  const snapped = grid > 0 ? Math.round(along / grid) * grid : along;
  return thousandths(Math.min(edgeLength - half, Math.max(half, snapped)));
}

/** A new opening of this kind on an edge: as wide as the preset, but never wider than the edge allows. */
export function newOpening(preset: OpeningPreset, host: { roomId: string; edge: number; wall?: string; length: number; offset(width: number): number }): Opening {
  const kind = OPENING_PRESETS[preset] as { type: Opening["type"]; leaves: 1 | 2; sill: number; height: number; width: number; style?: Opening["style"]; opens?: Opening["opens"] };
  const width = thousandths(Math.min(kind.width, Math.max(0.3, host.length - 0.1)));
  return {
    id: uid("opening"),
    room_id: host.roomId,
    edge: host.edge,
    ...(host.wall ? { wall: host.wall } : {}),
    offset: host.offset(width),
    width,
    type: kind.type,
    sill: kind.sill,
    height: kind.height,
    hinge: "left",
    leaves: kind.leaves,
    swing: "in",
    // the preset's own look (a glass wall; room and front doors stay automatic by their wall) and way of opening
    ...(kind.style && !AUTO_STYLES.has(kind.style) ? { style: kind.style } : {}),
    ...(kind.opens ? { opens: kind.opens } : {}),
    cover: null,
    contact: null,
    contact2: null,
    tilt: null,
  };
}

/** What changing an opening into another kind sets. It keeps its own width unless it already was of that kind's shape. */
export function openingKindPatch(opening: Opening, preset: OpeningPreset): Partial<Opening> {
  const kind = OPENING_PRESETS[preset] as { type: Opening["type"]; leaves: 1 | 2; sill: number; height: number; width: number; style?: Opening["style"]; opens?: Opening["opens"] };
  const widthChange = openingPreset(opening) === preset ? {} : { width: kind.width };
  return { type: kind.type, leaves: kind.leaves, sill: kind.sill, height: kind.height, style: kind.style ?? null, opens: kind.opens ?? null, ...widthChange };
}

/** The wall edge an opening sits on, as its two end points. */
export function edgeOf(opening: Opening, floor: Floor): [Vec2, Vec2] | null {
  const host = openingHost(opening, floor.rooms, floor.walls ?? []);
  if (!host) return null;
  return [host.room.points[host.edge], host.room.points[(host.edge + 1) % host.room.points.length]];
}

/** The outline of an outdoor area as a rectangle after its left, top, width or depth was typed. Sizes never get below 10 cm. */
export function outdoorRectangleAfter(area: OutdoorArea, field: "x" | "z" | "w" | "d", value: number): Vec2[] {
  const box = bounds(area.points);
  let { x0, z0, x1, z1 } = box;
  if (field === "x") [x0, x1] = [value, value + (x1 - x0)];
  else if (field === "z") [z0, z1] = [value, value + (z1 - z0)];
  else if (field === "w") x1 = x0 + Math.max(0.1, value);
  else z1 = z0 + Math.max(0.1, value);
  return [[x0, z0], [x1, z0], [x1, z1], [x0, z1]].map(([x, z]) => [thousandths(x), thousandths(z)] as Vec2);
}
