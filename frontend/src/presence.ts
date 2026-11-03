// People and floor summaries. A room sensor (ESPresense, Bermuda ...) reports the room a person is in as
// its state; this finds that room in the plan. Also the counts on the floor labels of the house view.

import { kindOf, openingState, primaryEntities, type OpeningEntities, roomEntities } from "./devices.ts";
import { readPower } from "./energy.ts";
import { formatNumber, translate } from "./i18n.ts";
import { centroid, type Building, type Floor, type Room } from "./model.ts";
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

/** Spelling-insensitive form of a room name: underscores and dashes read as spaces. */
const canonical = (text: string) => text.toLowerCase().replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();

/** A sensor state that names no room. */
const NO_ROOM = new Set(["", "unknown", "unavailable", "not home", "away"]);

/** The room whose name, area name or area id equals a room sensor's state. */
export function roomForState(hass: HomeAssistant, building: Building, state: string): { floorId: string; room: Room } | null {
  const wanted = canonical(state);
  if (NO_ROOM.has(wanted)) return null;
  for (const floor of building.floors) {
    for (const room of floor.rooms) {
      const areaName = room.area_id ? hass.areas?.[room.area_id]?.name : undefined;
      const labels = [room.name, room.area_id, areaName].map((label) => canonical(label ?? ""));
      if (labels.includes(wanted)) return { floorId: floor.id, room };
    }
  }
  return null;
}

/** Up to two letters for an avatar: first and last word's initials, or the first two letters of one word. */
export function initials(name: string): string {
  const words = name.split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  const letters = words.length === 1 ? words[0].slice(0, 2) : words[0][0] + words[words.length - 1][0];
  return letters.toUpperCase();
}

/** Where the n-th person of a room stands: on a small circle around the centre, next to the room label. */
function spotInRoom(room: Room, n: number): [number, number] {
  const [cx, cz] = centroid(room.points);
  const angle = n * 1.15 - Math.PI / 2 + 0.9;
  return [cx + 0.75 * Math.cos(angle), cz + 0.75 * Math.sin(angle)];
}

/** People who are home and whose room sensor names a room of the plan. */
export function personsInRooms(hass: HomeAssistant, building: Building): PersonMarker[] {
  const markers: PersonMarker[] = [];
  const inRoom = new Map<string, number>();
  for (const { person: personId, sensor: sensorId } of building.presence) {
    const person = hass.states[personId];
    const sensor = sensorId ? hass.states[sensorId] : undefined;
    // someone who is away is in no room, whatever the room sensor still says
    if (!person || !sensor || (person.state !== "home" && person.state !== "on")) continue;
    const found = roomForState(hass, building, sensor.state);
    if (!found) continue;
    const n = inRoom.get(found.room.id) ?? 0;
    inRoom.set(found.room.id, n + 1);
    const [x, z] = spotInRoom(found.room, n);
    const name = String(person.attributes.friendly_name ?? personId);
    const picture = person.attributes.entity_picture;
    markers.push({ id: personId, name, initials: initials(name), picture: typeof picture === "string" ? picture : null, floorId: found.floorId, roomId: found.room.id, x, z });
  }
  return markers;
}

export interface FloorCounts {
  rooms: number;
  lightsOn: number;
  open: number;
  persons: number;
  /** What the floor's own meter reads now, in watts (null: no meter or no number). */
  power: number | null;
}

function lightsOnFloor(hass: HomeAssistant, floor: Floor): number {
  const lights = new Set<string>();
  // only the main entity of a device counts: an LED strip with 30 segment entities is one light
  for (const room of floor.rooms) {
    for (const id of primaryEntities(hass, roomEntities(hass, room))) if (kindOf(id) === "light") lights.add(id);
  }
  for (const placed of floor.placements) if (kindOf(placed.entity_id) === "light") lights.add(placed.entity_id);
  return [...lights].filter((id) => hass.states[id]?.state === "on").length;
}

function openingsOnFloor(hass: HomeAssistant, floor: Floor, links: Map<string, OpeningEntities>): number {
  const isOn = (id: string | null | undefined) => !!id && hass.states[id]?.state === "on";
  let count = 0;
  for (const opening of floor.openings) {
    const link = links.get(opening.id);
    if (!link) continue;
    if (opening.type === "garage") {
      // open while the door is not (nearly) all the way down
      if ((openingState(hass, link, "garage").cover ?? 1) < 0.95) count++;
    } else if (opening.type === "door") {
      if (isOn(link.contact) || isOn(link.contact2)) count++;
    } else {
      const s = openingState(hass, link, "window");
      if (Math.max(s.open, s.tilt, s.open2, s.tilt2) > 0.5) count++;
    }
  }
  return count;
}

/** Room, light, open-window and person counts per floor, for the floor labels. */
export function floorCounts(hass: HomeAssistant, building: Building, links: Map<string, OpeningEntities>, persons: PersonMarker[]): Map<string, FloorCounts> {
  return new Map(
    building.floors.map((floor) => [
      floor.id,
      {
        rooms: floor.rooms.length,
        lightsOn: lightsOnFloor(hass, floor),
        open: openingsOnFloor(hass, floor, links),
        persons: persons.filter((p) => p.floorId === floor.id).length,
        power: floor.power_entity ? readPower(hass.states[floor.power_entity]) : null,
      },
    ]),
  );
}

/** The label text: "3 rooms · 2 lights on · 1 open · 1 person", leaving out what is zero. */
export function floorInfoText(hass: HomeAssistant | undefined, c: FloorCounts): string {
  const parts = [c.rooms === 1 ? translate(hass, "floor_rooms_one") : translate(hass, "floor_rooms", { n: c.rooms })];
  if (c.lightsOn > 0) parts.push(translate(hass, "floor_lights", { n: c.lightsOn }));
  if (c.open > 0) parts.push(translate(hass, "floor_open", { n: c.open }));
  if (c.persons > 0) parts.push(translate(hass, "floor_persons", { n: c.persons }));
  if (c.power != null) parts.push(`⚡ ${powerText(hass, c.power)}`);
  return parts.join(" · ");
}

/** Watts as "640 W" or "1,25 kW". */
export function powerText(hass: HomeAssistant | undefined, w: number): string {
  const a = Math.abs(w);
  return a >= 1000 ? `${formatNumber(hass, w / 1000, a >= 10000 ? 1 : 2)} kW` : `${Math.round(w)} W`;
}
