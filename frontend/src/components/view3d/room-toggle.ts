// Double tap on a room: which lights it switches, by the plan setting and the card option (#62).
import type { HomeAssistant } from "../../types.ts";
import { kindOf, roomEntities, type FurnitureLinks } from "../../devices.ts";
import { isLamp, pointInPolygon, type Floor, type Room } from "../../model.ts";

/** area: the lamps of the plan and every light of the room's area (default); plan: only the lamps of the plan; off: nothing. */
export type RoomToggle = "area" | "plan" | "off";

/** The card option wins over the plan setting; "auto" or nothing follows the plan. */
export function roomToggleMode(setting: RoomToggle | null | undefined, card: RoomToggle | "auto" | null | undefined): RoomToggle {
  if (card === "area" || card === "plan" || card === "off") return card;
  return setting === "plan" || setting === "off" ? setting : "area";
}

/** The lights a double tap on the room switches; devices that ask first stay out. */
export function roomToggleLights(hass: HomeAssistant, floor: Floor, room: Room, links: ReadonlyMap<string, FurnitureLinks>, confirm: ReadonlySet<string>, mode: RoomToggle): string[] {
  if (mode === "off") return [];
  const ids = new Set(mode === "area" ? roomEntities(hass, room).filter((id) => kindOf(id) === "light") : []);
  for (const p of floor.placements) if (kindOf(p.entity_id) === "light" && pointInPolygon([p.x, p.z], room.points)) ids.add(p.entity_id);
  for (const f of floor.furniture) {
    const e = links.get(f.id)?.entity;
    if (e && isLamp(f.type) && pointInPolygon([f.x, f.z], room.points)) ids.add(e);
  }
  return [...ids].filter((id) => !confirm.has(id));
}
