// Smaller helpers around devices: automatic placement in a room, the robot vacuum's room, the central "all lights"
// controls of a floor, favourites and own buttons.

import { centroid, pointInPolygon, type Floor, type Placement, type Room, type Vec2 } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import { kindOf } from "./kinds.ts";
import { roomEntities, primaryEntities } from "./registry.ts";

// ---------------------------------------------------------------- automatic placement

function distanceToOutline(p: Vec2, outline: readonly Vec2[]): number {
  return Math.min(
    ...outline.map((a, i) => {
      const b = outline[(i + 1) % outline.length];
      const [dx, dz] = [b[0] - a[0], b[1] - a[1]];
      const along = Math.min(1, Math.max(0, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / (dx * dx + dz * dz || 1)));
      return Math.hypot(p[0] - a[0] - dx * along, p[1] - a[1] - dz * along);
    }),
  );
}

/**
 * Places entities in a room without overlapping each other or what is there already. Lights go towards the middle, spread
 * apart; everything else along the walls. The room label at the centre stays free. The result is deterministic: the same
 * room always gets the same layout.
 */
export function autoPlace(room: Room, entityIds: readonly string[], taken: readonly Vec2[] = []): Placement[] {
  const outline = room.points;
  if (outline.length < 3 || entityIds.length === 0) return [];
  const xs = outline.map((p) => p[0]);
  const zs = outline.map((p) => p[1]);
  const [minX, maxX, minZ, maxZ] = [Math.min(...xs), Math.max(...xs), Math.min(...zs), Math.max(...zs)];
  const extent = Math.min(maxX - minX, maxZ - minZ);
  const step = Math.max(0.1, Math.min(0.25, extent / 8));
  const wallMargin = Math.min(0.35, extent / 5);
  const labelClearance = Math.min(0.7, extent / 4);
  const label = centroid(outline);

  // a grid of free spots, away from the walls
  const spots: { at: Vec2; wallDistance: number }[] = [];
  for (let x = minX + step / 2; x < maxX; x += step) {
    for (let z = minZ + step / 2; z < maxZ; z += step) {
      const at: Vec2 = [x, z];
      if (!pointInPolygon(at, outline)) continue;
      const wallDistance = distanceToOutline(at, outline);
      if (wallDistance >= wallMargin) spots.push({ at, wallDistance });
    }
  }
  if (spots.length === 0) spots.push({ at: label, wallDistance: 0 });

  const occupied: Vec2[] = [...taken];
  return entityIds.map((entity_id) => {
    const isLight = kindOf(entity_id) === "light";
    let best = spots[0].at;
    let bestScore = -Infinity;
    for (const { at, wallDistance } of spots) {
      const nearestNeighbour = occupied.length ? Math.min(...occupied.map((o) => Math.hypot(at[0] - o[0], at[1] - o[1]))) : 3;
      const fromLabel = Math.hypot(at[0] - label[0], at[1] - label[1]);
      // room to breathe is good (up to 3 m); the label's spot is taboo except for lights; lights like the middle, others a wall
      let score = Math.min(nearestNeighbour, 3) * 2;
      if (fromLabel < labelClearance && !isLight) score -= 10;
      score -= isLight ? fromLabel * 0.35 : wallDistance * 1.2;
      if (score > bestScore + 1e-9) {
        bestScore = score;
        best = at;
      }
    }
    const chosen: Vec2 = [Math.round(best[0] * 100) / 100, Math.round(best[1] * 100) / 100];
    occupied.push(chosen);
    return { entity_id, x: chosen[0], z: chosen[1], y: null, mount: null };
  });
}

// ---------------------------------------------------------------- robot vacuum

const ROOM_SENSOR_NAME = /(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;

/** The sensor that names the room a robot vacuum is cleaning: the chosen one, else one on the vacuum's device. */
export function robotRoomSensor(hass: HomeAssistant, vacuum: string | null, chosen: string | null | undefined): string | null {
  if (chosen === "none") return null;
  if (chosen) return chosen;
  const device = vacuum ? hass.entities?.[vacuum]?.device_id : null;
  if (!device || !hass.entities) return null;
  const match = Object.values(hass.entities).find((e) => e.device_id === device && e.entity_id.startsWith("sensor.") && (ROOM_SENSOR_NAME.test(e.translation_key ?? "") || ROOM_SENSOR_NAME.test(e.entity_id.split(".")[1])));
  return match?.entity_id ?? null;
}

/** A name without case, accents or umlaut spelling: "Küche", "kueche" and "Kuche" are the same. */
export function roomKey(name: string): string {
  return name
    .toLowerCase()
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ß/g, "ss")
    .replace(/ae/g, "a")
    .replace(/oe/g, "o")
    .replace(/ue/g, "u")
    .normalize("NFD")
    .replace(/[^a-z0-9]/g, "");
}

/** The room the robot reports (the sensor's state, else the vacuum's current_room attribute), matched by room or area name. */
export function robotRoom<R extends { name: string; area_id?: string | null }>(hass: HomeAssistant, rooms: readonly R[], vacuum: string | null, sensor: string | null): R | null {
  const reported = sensor ? hass.states[sensor]?.state : vacuum ? hass.states[vacuum]?.attributes.current_room : undefined;
  if (typeof reported !== "string" || ["", "unknown", "unavailable"].includes(reported)) return null;
  const wanted = roomKey(reported);
  if (!wanted) return null;
  const keysOf = (room: R) => [room.name, room.area_id ?? "", (room.area_id && hass.areas?.[room.area_id]?.name) || ""].map(roomKey).filter(Boolean);
  const exact = rooms.find((room) => keysOf(room).includes(wanted));
  return exact ?? rooms.find((room) => keysOf(room).some((k) => k.length >= 3 && (k.includes(wanted) || wanted.includes(k)))) ?? null;
}

// ---------------------------------------------------------------- floor controls, favourites, buttons

/** Covers that are doors, not blinds: the central "close all" leaves them alone. */
const DOOR_COVER_CLASSES = new Set(["garage", "gate", "door"]);

/**
 * The lights and blinds of a floor for the central "all on / all off": the main entities of its rooms' areas (except those a
 * room hides), placed devices and linked furniture. Garage doors and gates are no blinds and stay out.
 */
export function floorControls(hass: HomeAssistant, floor: Floor): { lights: string[]; covers: string[] } {
  const lights = new Set<string>();
  const covers = new Set<string>();
  const consider = (id: string | null | undefined) => {
    if (!id || id === "none" || !hass.states[id]) return;
    const kind = kindOf(id);
    if (kind === "light") lights.add(id);
    if (kind === "cover" && !DOOR_COVER_CLASSES.has(String(hass.states[id].attributes.device_class ?? ""))) covers.add(id);
  };
  for (const room of floor.rooms) {
    const hidden = new Set(room.hidden ?? []);
    primaryEntities(hass, roomEntities(hass, room)).filter((id) => !hidden.has(id)).forEach(consider);
  }
  floor.placements.forEach((p) => consider(p.entity_id));
  floor.furniture.forEach((f) => consider(f.entity));
  return { lights: [...lights], covers: [...covers] };
}

/** The service a favourite runs when tapped: scenes and scripts start, buttons are pressed, the rest is toggled. */
export function favoriteCall(entityId: string): [domain: string, service: string] {
  const domain = entityId.split(".")[0];
  switch (domain) {
    case "scene":
    case "script":
      return [domain, "turn_on"];
    case "automation":
      return [domain, "trigger"];
    case "button":
    case "input_button":
      return [domain, "press"];
    default:
      return ["homeassistant", "toggle"];
  }
}

/**
 * Runs an own button from an element inside the dashboard: navigate, open more-info, call a service, or fire a DOM
 * event ("ll-custom" is what Home Assistant's fire-dom-event sends, and what browser_mod listens for).
 */
export function runButton(hass: HomeAssistant, from: HTMLElement, button: { action: string; target?: string | null; data?: Record<string, unknown> | null }): void {
  const target = button.target?.trim() ?? "";
  const fire = (name: string, detail: unknown) => from.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
  switch (button.action) {
    case "navigate":
      if (!target) return;
      history.pushState(null, "", target);
      window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: false } }));
      return;
    case "more_info":
      if (target) fire("hass-more-info", { entityId: target });
      return;
    case "service": {
      if (!target.includes(".")) return;
      const [domain, service] = target.split(".", 2);
      void hass.callService(domain, service, button.data ?? {});
      return;
    }
    case "fire_dom_event":
      fire("ll-custom", button.data ?? {});
      return;
  }
}

/**
 * Whether an own button's entity is on, so the button lights up: the entity the button names itself (`state_entity`), else the one
 * it opens (more-info) or the single entity its service is called for. Off, unknown, or none to tell: false.
 */
export function ownButtonOn(hass: HomeAssistant | undefined, button: { action: string; target?: string | null; data?: Record<string, unknown> | null; state_entity?: string | null }): boolean {
  const data = button.data?.entity_id;
  const id = button.state_entity || (button.action === "more_info" ? button.target : null) || (button.action === "service" && typeof data === "string" ? data : null);
  const st = id ? hass?.states[id] : undefined;
  return !!st && ["on", "open", "playing", "home", "heat", "cool", "unlocked"].includes(st.state);
}
