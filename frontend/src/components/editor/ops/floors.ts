// The floors of the house: adding one (also from a floor of Home Assistant's registry), ordering them, and finding what is still to be
// connected to Home Assistant.

import { floorElevation, newFloor, uid, type Building, type Floor, type Furniture } from "../../../model.ts";
import type { HassArea, HassFloor } from "../../../types.ts";

/** A new floor, named after a Home Assistant floor when it comes from one, and placed at that floor's level or on top of the house. */
export function newFloorFor(doc: Building, from: HassFloor | null, names: { first: string; next(n: number): string }): Floor {
  const count = doc.floors.length;
  const name = from?.name ?? (count === 0 ? names.first : names.next(count));
  return { ...newFloor(uid("floor"), name, floorElevation(doc.floors, from?.level)), ha_floor: from?.floor_id ?? null };
}

/** The floors with a new one slotted in below the first floor that lies higher: floors are kept from bottom to top. */
export function floorsWith(floors: readonly Floor[], added: Floor): Floor[] {
  const above = floors.findIndex((f) => f.elevation > added.elevation);
  const at = above < 0 ? floors.length : above;
  return [...floors.slice(0, at), added, ...floors.slice(at)];
}

/** The floors with the one of this id swapped with its neighbour above (1) or below (-1). Unchanged at the ends. */
export function floorsSwapped(floors: readonly Floor[], id: string, direction: -1 | 1): Floor[] {
  const from = floors.findIndex((f) => f.id === id);
  const to = from + direction;
  if (from < 0 || to < 0 || to >= floors.length) return [...floors];
  const next = [...floors];
  [next[from], next[to]] = [next[to], next[from]];
  return next;
}

/** Floors of Home Assistant that no floor of the plan stands for yet, lowest first. */
export function freeHaFloors(doc: Building, registry: Readonly<Record<string, HassFloor>> | undefined): HassFloor[] {
  const used = new Set(doc.floors.map((f) => f.ha_floor));
  return Object.values(registry ?? {})
    .filter((f) => !used.has(f.floor_id))
    .sort((a, b) => (a.level ?? 99) - (b.level ?? 99) || a.name.localeCompare(b.name));
}

/** Areas on the Home Assistant floor of this floor that have no room in the plan yet, by name. */
export function unplacedAreas(doc: Building, floor: Floor, areas: Readonly<Record<string, HassArea>> | undefined): HassArea[] {
  if (!floor.ha_floor) return [];
  const placed = new Set(doc.floors.flatMap((f) => f.rooms.map((r) => r.area_id)));
  return Object.values(areas ?? {})
    .filter((a) => a.floor_id === floor.ha_floor && !placed.has(a.area_id))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/** The Home Assistant floors a floor may be linked to: its own and the ones no other floor uses. */
export function linkableHaFloors(doc: Building, floor: Floor, registry: Readonly<Record<string, HassFloor>> | undefined): HassFloor[] {
  return Object.values(registry ?? {}).filter((f) => f.floor_id === floor.ha_floor || !doc.floors.some((other) => other.ha_floor === f.floor_id));
}

/** What a floor copy takes along besides its rooms, walls, doors and windows. */
export interface FloorCopyOptions {
  furniture: boolean;
  /** Device pins: off by default, since the same entity would then show twice. */
  devices: boolean;
  outdoor: boolean;
}

/**
 * A copy of a floor with new ids for everything on it, put on top of the house (above the highest floor). Rooms lose
 * their Home Assistant area and the floor its Home Assistant floor, since each can stand for one room or floor only;
 * doors and windows keep pointing at the copied rooms and walls.
 */
export function copyOfFloor(doc: Building, floor: Floor, name: string, options: FloorCopyOptions, id: (prefix: string) => string = uid): Floor {
  const copy = structuredClone(floor);
  const top = doc.floors.reduce((max, f) => Math.max(max, f.elevation + f.height), floor.elevation + floor.height);
  const rooms = new Map<string, string>();
  const walls = new Map<string, string>();
  copy.id = id("floor");
  copy.name = name;
  copy.elevation = Math.round(top * 1000) / 1000;
  copy.ha_floor = null;
  copy.start_view = null;
  copy.rooms = copy.rooms.map((r) => {
    const fresh = id("room");
    rooms.set(r.id, fresh);
    return { ...r, id: fresh, area_id: null };
  });
  copy.walls = (copy.walls ?? []).map((w) => {
    const fresh = id("wall");
    walls.set(w.id, fresh);
    return { ...w, id: fresh };
  });
  copy.openings = copy.openings.filter((o) => rooms.has(o.room_id)).map((o) => ({ ...o, id: id("opening"), room_id: rooms.get(o.room_id)!, wall: o.wall ? (walls.get(o.wall) ?? null) : o.wall }));
  // energy devices (meters, inverters …) belong to the real house once, so they stay behind
  const energy = new Set(["meter", "inverter", "home_battery", "wallbox", "grid_point"]);
  copy.furniture = options.furniture ? copy.furniture.filter((f) => !energy.has(f.type)).map((f) => unlinked({ ...f, id: id("furniture") })) : [];
  copy.placements = options.devices ? copy.placements : [];
  copy.outdoor = options.outdoor ? copy.outdoor.map((a) => ({ ...a, id: id("outdoor") })) : [];
  return copy;
}

/** Links that are found automatically while they are null: a copy sets them to "none", or it would find the original's entities again. */
const AUTO_LINKS = ["entity", "power", "fan_entity", "room_sensor"] as const;
/** Links that are simply empty while null. */
const PLAIN_LINKS = [
  "door_left",
  "door_right",
  "soc",
  "charge",
  "export",
  "status",
  "temp_entity",
  "temp_entity2",
  "state_entity",
  "state_entity2",
  "color_entity",
  "care_entity",
  "cover_entity",
  "type_entity",
  "parent_meter",
  "car",
  "tap",
] as const;
/** Lists of links, dropped as a whole. */
const LINK_LISTS = ["gang_entities", "pictures", "types", "meter_floors", "show_when"] as const;

/** A piece of furniture with every link to Home Assistant removed, its size, place and look kept. */
export function unlinked(item: Furniture): Furniture {
  const out = { ...item } as Record<string, unknown>;
  // the fan and the vacuum's room sensor are looked up in the item's room, which a copy no longer links to an area
  for (const key of AUTO_LINKS) if (key === "entity" || key === "power" || out[key] != null) out[key] = "none";
  for (const key of PLAIN_LINKS) if (out[key] != null) out[key] = null;
  for (const key of LINK_LISTS) delete out[key];
  return out as unknown as Furniture;
}

/** Moves a piece of furniture to another floor, at the same spot in the plan. Returns false when it or the floor is missing. */
export function moveFurnitureToFloor(doc: Building, fromFloorId: string, itemId: string, toFloorId: string): boolean {
  const from = doc.floors.find((f) => f.id === fromFloorId);
  const to = doc.floors.find((f) => f.id === toFloorId);
  if (!from || !to || from === to) return false;
  const index = from.furniture.findIndex((f) => f.id === itemId);
  if (index < 0) return false;
  const [item] = from.furniture.splice(index, 1);
  to.furniture.push(item);
  return true;
}
