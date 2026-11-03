// Quick find: rooms, devices and notes of the plan, looked up by name, room, entity id or the note's text.

import { defaultHeight, entityName, furnitureEntities, kindOf, type DeviceKind } from "./devices.ts";
import { ceilingAt, centroid, pointInPolygon, type Building, type Floor, type Room } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

export interface SearchItem {
  kind: "room" | "device" | "note";
  name: string;
  /** Where it is: room (and floor, when the building has several). Empty for a room on a single-floor plan. */
  where: string;
  floorId: string;
  roomId: string | null;
  entity: string | null;
  icon: DeviceKind | null;
  x: number;
  z: number;
  /** Height above the floor the camera should aim at. */
  y: number;
}

/** Lower case without accents, so "kuche" finds "Küche". */
function fold(text: string): string {
  return text.toLocaleLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
}

const hasArea = (room: Room) => room.points.length >= 3;

/** The room of a floor that contains a plan position. */
function roomContaining(floor: Floor, x: number, z: number): Room | undefined {
  return floor.rooms.filter(hasArea).find((room) => pointInPolygon([x, z], room.points));
}

function indexFloor(hass: HomeAssistant, floor: Floor, links: ReturnType<typeof furnitureEntities>, multiFloor: boolean): SearchItem[] {
  const items: SearchItem[] = [];

  for (const room of floor.rooms.filter(hasArea)) {
    const [x, z] = centroid(room.points);
    items.push({ kind: "room", name: room.name, where: multiFloor ? floor.name : "", floorId: floor.id, roomId: room.id, entity: null, icon: null, x, z, y: 0 });
  }

  // an entity is listed once per floor, even when it is placed and also linked to a piece of furniture
  const listed = new Set<string>();
  const push = (entity: string, x: number, z: number, y: number) => {
    if (listed.has(entity) || !(entity in hass.states)) return;
    listed.add(entity);
    const room = roomContaining(floor, x, z);
    const label = [room?.name, multiFloor ? floor.name : undefined].filter((part): part is string => !!part).join(" · ");
    items.push({ kind: "device", name: entityName(hass, entity), where: label, floorId: floor.id, roomId: room?.id ?? null, entity, icon: kindOf(entity), x, z, y });
  };

  for (const p of floor.placements) {
    const height = p.y ?? defaultHeight(kindOf(p.entity_id) ?? "sensor", ceilingAt(floor, p.x, p.z), p.mount);
    push(p.entity_id, p.x, p.z, height);
  }
  for (const piece of floor.furniture) {
    const link = links.get(piece.id);
    const entity = link?.entity ?? link?.power;
    if (!entity) continue;
    const ceiling = ceilingAt(floor, piece.x, piece.z) - 0.3;
    push(entity, piece.x, piece.z, Math.min(ceiling, Math.max(0.5, piece.h)));
  }
  for (const note of floor.notes ?? []) {
    if (!note.text) continue;
    const room = roomContaining(floor, note.x, note.z);
    const where = [room?.name, multiFloor ? floor.name : undefined].filter((part): part is string => !!part).join(" · ");
    items.push({ kind: "note", name: `✎ ${note.text.length > 60 ? `${note.text.slice(0, 59)}…` : note.text}`, where, floorId: floor.id, roomId: room?.id ?? null, entity: null, icon: null, x: note.x, z: note.z, y: 1.3 });
  }
  return items;
}

/** Everything findable: rooms, placed devices, and furniture or lamps that are linked to an entity. */
export function searchIndex(hass: HomeAssistant, building: Building): SearchItem[] {
  const links = furnitureEntities(hass, building.floors);
  const multiFloor = building.floors.length > 1;
  return building.floors.flatMap((floor) => indexFloor(hass, floor, links, multiFloor));
}

/** Lower is better: a name that starts with the query beats one that merely contains it; rooms beat devices. */
function penalty(item: SearchItem, query: string): number {
  const startsWith = fold(item.name).startsWith(query) ? 0 : 2;
  return startsWith + (item.kind === "room" ? 0 : 1);
}

/** Items that contain every word of the query (in name, place or entity id), best first, at most `limit`. */
export function searchItems(items: SearchItem[], query: string, limit = 8): SearchItem[] {
  const words = fold(query).split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];
  const whole = fold(query.trim());
  return items
    .filter((item) => {
      const haystack = fold([item.name, item.where, item.entity].filter(Boolean).join(" "));
      return words.every((word) => haystack.includes(word));
    })
    .map((item) => ({ item, cost: penalty(item, whole) }))
    .sort((a, b) => a.cost - b.cost || a.item.name.localeCompare(b.item.name))
    .slice(0, limit)
    .map((entry) => entry.item);
}
