// Presence and floor summaries: which room a person is in (from a room sensor such as ESPresense or
// Bermuda, whose state names a room or area), and the counts shown on the floor labels.

import { areaEntities, kindOf, openingState, primaryEntities, type OpeningEntities } from "./devices.ts";
import { translate } from "./i18n.ts";
import type { Building, Room } from "./model.ts";
import { centroid } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

export interface PersonMarker {
  id: string;
  name: string;
  initials: string;
  picture: string | null;
  floorId: string;
  roomId: string;
  x: number;
  z: number;
}

const norm = (s: string) => s.toLowerCase().replace(/[_\-]+/g, " ").replace(/\s+/g, " ").trim();

/** Room whose name, area name or area id matches a room sensor's state. */
export function roomForState(hass: HomeAssistant, building: Building, state: string): { floorId: string; room: Room } | null {
  const want = norm(state);
  if (!want || want === "unknown" || want === "unavailable" || want === "not home" || want === "away") return null;
  for (const floor of building.floors) {
    for (const room of floor.rooms) {
      const names = [room.name, room.area_id ?? "", room.area_id ? (hass.areas?.[room.area_id]?.name ?? "") : ""].filter(Boolean).map(norm);
      if (names.includes(want)) return { floorId: floor.id, room };
    }
  }
  return null;
}

export function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "?";
  return (parts.length > 1 ? parts[0][0] + parts[parts.length - 1][0] : parts[0].slice(0, 2)).toUpperCase();
}

/** People at home whose room sensor names a room of the plan, spread around the room centre. */
export function personsInRooms(hass: HomeAssistant, building: Building): PersonMarker[] {
  const out: PersonMarker[] = [];
  const perRoom = new Map<string, number>();
  for (const link of building.presence) {
    const person = hass.states[link.person];
    if (!person || !link.sensor) continue;
    // a person who is away is not in any room, whatever the room sensor still says
    if (person.state !== "home" && person.state !== "on") continue;
    const sensor = hass.states[link.sensor];
    if (!sensor) continue;
    const hit = roomForState(hass, building, sensor.state);
    if (!hit) continue;
    const i = perRoom.get(hit.room.id) ?? 0;
    perRoom.set(hit.room.id, i + 1);
    const [cx, cz] = centroid(hit.room.points);
    // next to the room label, one after another on a small circle
    const a = -Math.PI / 2 + 0.9 + i * 1.15;
    const r = 0.75;
    const name = (person.attributes.friendly_name as string | undefined) ?? link.person;
    out.push({
      id: link.person,
      name,
      initials: initials(name),
      picture: (person.attributes.entity_picture as string | undefined) ?? null,
      floorId: hit.floorId,
      roomId: hit.room.id,
      x: cx + Math.cos(a) * r,
      z: cz + Math.sin(a) * r,
    });
  }
  return out;
}

export interface FloorCounts {
  rooms: number;
  lightsOn: number;
  open: number;
  persons: number;
}

/** Counts per floor for the floor labels in the house view. */
export function floorCounts(hass: HomeAssistant, building: Building, links: Map<string, OpeningEntities>, persons: PersonMarker[]): Map<string, FloorCounts> {
  const out = new Map<string, FloorCounts>();
  const on = (id: string | null) => !!id && hass.states[id]?.state === "on";
  for (const floor of building.floors) {
    const lights = new Set<string>();
    // main entities only: a LED strip with 30 segment entities is one light
    for (const room of floor.rooms) for (const id of primaryEntities(hass, areaEntities(hass, room.area_id))) if (kindOf(id) === "light") lights.add(id);
    for (const pl of floor.placements) if (kindOf(pl.entity_id) === "light") lights.add(pl.entity_id);
    const open = floor.openings.filter((o) => {
      const l = links.get(o.id);
      if (!l) return false;
      // a garage door counts as open while its cover is not (almost) down
      if (o.type === "garage") return (openingState(hass, l, "garage").cover ?? 1) < 0.95;
      if (o.type === "door") return on(l.contact) || on(l.contact2 ?? null);
      const s = openingState(hass, l, "window");
      return s.open > 0.5 || s.tilt > 0.5 || s.open2 > 0.5 || s.tilt2 > 0.5;
    }).length;
    out.set(floor.id, {
      rooms: floor.rooms.length,
      lightsOn: [...lights].filter((id) => hass.states[id]?.state === "on").length,
      open,
      persons: persons.filter((p) => p.floorId === floor.id).length,
    });
  }
  return out;
}

export function floorInfoText(hass: HomeAssistant | undefined, c: FloorCounts): string {
  const parts = [c.rooms === 1 ? translate(hass, "floor_rooms_one") : translate(hass, "floor_rooms", { n: c.rooms })];
  if (c.lightsOn) parts.push(translate(hass, "floor_lights", { n: c.lightsOn }));
  if (c.open) parts.push(translate(hass, "floor_open", { n: c.open }));
  if (c.persons) parts.push(translate(hass, "floor_persons", { n: c.persons }));
  return parts.join(" · ");
}
