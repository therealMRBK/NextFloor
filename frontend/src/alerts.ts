// Warnings in the 3D view: smoke, gas, carbon monoxide and leak sensors of a room, an alarm panel that
// went off, a power outage, a window left open in the rain, and a door or window contact that stopped answering.
// A room with a warning pulses in the warning's colour.

import { areaEntities, entityAreaId, entityName, openingState, type OpeningEntities } from "./devices.ts";
import { translate } from "./i18n.ts";
import { pointInPolygon, type Building, type Opening, type OwnAlert } from "./model.ts";
import type { HomeAssistant } from "./types.ts";
import { weatherEntity } from "./weather.ts";

export type AlertKind = "smoke" | "gas" | "co" | "water" | "alarm" | "alarm_pending" | "window_rain" | "power_outage" | "contact_lost" | "own";

export interface Alert {
  kind: AlertKind;
  entity: string;
  /** Room and floor it concerns; null for the whole house (an alarm). */
  roomId: string | null;
  floorId: string | null;
  /** An alarm: the sensor that set it off (a door, a window, a motion sensor), when it can be told. */
  cause?: string;
  /** An own warning: its text. */
  text?: string;
}

/** Where the warnings come from. Looked up once and kept until the registries change. */
export interface AlertSources {
  rooms: { floorId: string; roomId: string; sensors: string[] }[];
  alarms: string[];
  weather: string | null;
  /** An own rain sensor (a weather station): it decides instead of the weather entity's condition. */
  rain: string | null;
  /** A sensor that tells a power outage (grid gone). */
  outage: string | null;
  /** The contacts of doors and windows, watched for going unavailable (empty unless that warning is on). */
  contacts?: { floorId: string; roomId: string; entity: string }[];
  /** Own warnings of the plan (House → Own warnings). */
  own?: OwnAlert[];
}

/** Warnings that only show in the banner: the room does not pulse and the view does not jump to it. */
export const QUIET_ALERTS: ReadonlySet<AlertKind> = new Set<AlertKind>(["contact_lost", "own"]);

/**
 * Whether an own warning's condition is met: the entity is in one of the states (comma separated, any case), or its number is below
 * ("<20") or above (">80") a value. An unavailable entity never warns.
 */
export function ownAlertMet(hass: HomeAssistant, rule: Pick<OwnAlert, "entity" | "state">): boolean {
  const st = hass.states[rule.entity];
  if (!st || ["unavailable", "unknown"].includes(st.state)) return false;
  const want = (rule.state ?? "on").trim();
  const m = /^([<>])\s*(-?\d+(?:[.,]\d+)?)$/.exec(want);
  if (m) {
    const v = Number(st.state);
    const limit = Number(m[2].replace(",", "."));
    return Number.isFinite(v) && (m[1] === "<" ? v < limit : v > limit);
  }
  return want.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean).includes(String(st.state).toLowerCase());
}

/** How long a contact has to be unavailable before it warns: a restart of Home Assistant or a short radio gap does not. */
export const CONTACT_GRACE_MS = 10 * 60 * 1000;

/** Weather conditions that wet a window. */
export const RAIN_STATES = new Set(["rainy", "pouring", "lightning-rainy", "hail", "snowy-rainy"]);

/** device_class of a binary sensor -> the warning it raises. */
const SENSOR_WARNING = new Map<string, AlertKind>([
  ["smoke", "smoke"],
  ["gas", "gas"],
  ["carbon_monoxide", "co"],
  ["moisture", "water"],
]);

const warningOf = (hass: HomeAssistant, entityId: string): AlertKind | undefined => {
  if (!entityId.startsWith("binary_sensor.")) return undefined;
  return SENSOR_WARNING.get(String(hass.states[entityId]?.attributes.device_class));
};

/** The contact and tilt sensors of every door, window and garage door, each once. */
function openingContacts(building: Building, links: Map<string, OpeningEntities>): NonNullable<AlertSources["contacts"]> {
  const seen = new Set<string>();
  const found: NonNullable<AlertSources["contacts"]> = [];
  for (const floor of building.floors) {
    for (const o of floor.openings) {
      const link = links.get(o.id);
      for (const entity of link ? [link.contact, link.contact2, link.tilt, link.tilt2] : []) {
        if (!entity || seen.has(entity)) continue;
        seen.add(entity);
        found.push({ floorId: floor.id, roomId: o.room_id, entity });
      }
    }
  }
  return found;
}

/** Warning sensors per room, the alarm panels, and the weather entity (none when the rain warning is off). */
export function alertSources(hass: HomeAssistant, building: Building, weatherId?: string | null, links?: Map<string, OpeningEntities>): AlertSources {
  const rooms: AlertSources["rooms"] = [];
  for (const floor of building.floors) {
    for (const room of floor.rooms) {
      const sensors = areaEntities(hass, room.area_id).filter((id) => warningOf(hass, id));
      if (sensors.length > 0) rooms.push({ floorId: floor.id, roomId: room.id, sensors });
    }
  }
  const rainWarningOn = building.settings.rain_warning !== false;
  const rain = building.settings.rain_sensor;
  return {
    rooms,
    alarms: Object.keys(hass.states).filter((id) => id.startsWith("alarm_control_panel.")),
    weather: rainWarningOn ? weatherEntity(hass, weatherId ?? building.settings.weather_entity) : null,
    rain: rainWarningOn && rain && rain !== "none" ? rain : null,
    outage: building.settings.outage_sensor && building.settings.outage_sensor !== "none" ? building.settings.outage_sensor : null,
    contacts: building.settings.contact_warning && links ? openingContacts(building, links) : [],
    own: (building.settings.own_alerts ?? []).filter((r) => r.entity),
  };
}

/** Every entity whose change can raise or clear a warning. */
export function alertEntities(sources: AlertSources): string[] {
  const ids = sources.rooms.flatMap((r) => r.sensors).concat(sources.alarms);
  for (const id of [sources.weather, sources.rain, sources.outage]) if (id) ids.push(id);
  for (const c of sources.contacts ?? []) ids.push(c.entity);
  for (const r of sources.own ?? []) ids.push(r.entity);
  return ids;
}

function sensorWarnings(hass: HomeAssistant, sources: AlertSources): Alert[] {
  const found: Alert[] = [];
  for (const { floorId, roomId, sensors } of sources.rooms) {
    for (const entity of sensors) {
      const kind = warningOf(hass, entity);
      if (kind && hass.states[entity]?.state === "on") found.push({ kind, entity, roomId, floorId });
    }
  }
  return found;
}

const isAjar = (hass: HomeAssistant, link: OpeningEntities): boolean => {
  const s = openingState(hass, link, "window");
  return Math.max(s.open, s.tilt, s.open2, s.tilt2) >= 0.5;
};

/** Whether it rains: an own rain sensor (on, or a rain rate above zero) wins over the weather entity's condition. */
export function isRaining(hass: HomeAssistant, sources: Pick<AlertSources, "weather" | "rain">): boolean {
  if (sources.rain) {
    const st = hass.states[sources.rain];
    if (!st || st.state === "unavailable" || st.state === "unknown") return false;
    const rate = Number(st.state);
    return Number.isFinite(rate) ? rate > 0 : st.state === "on" || /rain|regen|wet|nass/i.test(st.state);
  }
  const weather = sources.weather ? hass.states[sources.weather]?.state : undefined;
  return !!weather && RAIN_STATES.has(weather);
}

const OUTAGE_WORDS = /^(off_grid|off-grid|outage|grid_down|grid_lost|islanding|island|backup|no_grid|stromausfall|netzausfall|inselbetrieb)$/i;

/**
 * Whether the power is out, from the outage sensor: a binary sensor of class power (or plug) that says off, any other binary sensor that
 * says on, a sensor with a state like "off_grid" / "backup", or a voltage that dropped below 50 V.
 */
export function isPowerOut(hass: HomeAssistant, id: string | null): boolean {
  const st = id ? hass.states[id] : undefined;
  if (!st || st.state === "unavailable" || st.state === "unknown") return false;
  if (id!.startsWith("binary_sensor.")) {
    const cls = String(st.attributes.device_class ?? "");
    return cls === "power" || cls === "plug" ? st.state === "off" : st.state === "on";
  }
  const value = Number(st.state);
  if (Number.isFinite(value)) return st.attributes.unit_of_measurement === "V" && value < 50;
  return OUTAGE_WORDS.test(st.state.trim());
}

function rainWarnings(hass: HomeAssistant, building: Building, sources: AlertSources, links: Map<string, OpeningEntities>): Alert[] {
  if (!isRaining(hass, sources)) return [];
  const found: Alert[] = [];
  for (const floor of building.floors) {
    for (const opening of floor.openings as Opening[]) {
      const link = links.get(opening.id);
      // a window under a roof or an awning can be left out of the rain warning
      if (opening.type !== "window" || opening.rain_warning === false || !link || !isAjar(hass, link)) continue;
      found.push({ kind: "window_rain", entity: link.contact ?? link.tilt ?? link.contact2 ?? opening.id, roomId: opening.room_id, floorId: floor.id });
    }
  }
  return found;
}

const TRIGGER_CLASSES = new Set(["door", "window", "opening", "garage_door", "motion", "occupancy", "presence", "vibration", "tamper", "sound", "glass"]);

/**
 * The sensor that set an alarm off: Alarmo names the open sensors itself; otherwise the door, window or motion sensor that changed to
 * "on" closest before the alarm went off (within two minutes).
 */
export function alarmCause(hass: HomeAssistant, panel: string): string | null {
  const st = hass.states[panel];
  const open = st?.attributes.open_sensors;
  if (open && typeof open === "object") {
    const first = Object.keys(open as Record<string, unknown>)[0];
    if (first) return first;
  }
  const at = Date.parse(st?.last_changed ?? "");
  if (!Number.isFinite(at)) return null;
  let best: string | null = null;
  let gap = 120_000;
  for (const s of Object.values(hass.states)) {
    if (!s.entity_id.startsWith("binary_sensor.") || !TRIGGER_CLASSES.has(String(s.attributes.device_class ?? "")) || s.state !== "on") continue;
    const changed = Date.parse(s.last_changed ?? "");
    const d = at - changed;
    if (Number.isFinite(changed) && d >= -5_000 && Math.abs(d) < gap) {
      gap = Math.abs(d);
      best = s.entity_id;
    }
  }
  return best;
}

/** The room a sensor belongs to: where it is placed, else the room of its area. */
function roomOf(hass: HomeAssistant, building: Building, entity: string): { roomId: string; floorId: string } | null {
  for (const floor of building.floors) {
    const placed = floor.placements.find((p) => p.entity_id === entity);
    const room = placed ? floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([placed.x, placed.z], r.points)) : undefined;
    if (room) return { roomId: room.id, floorId: floor.id };
  }
  const area = entityAreaId(hass, entity);
  for (const floor of building.floors) {
    const room = area ? floor.rooms.find((r) => r.area_id === area) : undefined;
    if (room) return { roomId: room.id, floorId: floor.id };
  }
  return null;
}

function alarmWarnings(hass: HomeAssistant, sources: AlertSources, building: Building): Alert[] {
  const found: Alert[] = [];
  for (const entity of sources.alarms) {
    const state = hass.states[entity]?.state;
    if (state === "triggered") {
      // the room of the sensor that set it off pulses, and the banner names it
      const cause = alarmCause(hass, entity);
      const where = cause ? roomOf(hass, building, cause) : null;
      found.push({ kind: "alarm", entity, roomId: where?.roomId ?? null, floorId: where?.floorId ?? null, ...(cause ? { cause } : {}) });
    }
    if (state === "pending") found.push({ kind: "alarm_pending", entity, roomId: null, floorId: null });
  }
  return found;
}

/** A contact that has been unavailable for longer than the grace time (a deleted entity does not warn, it is just gone). */
export function contactLost(hass: HomeAssistant, entity: string, now: number): boolean {
  const st = hass.states[entity];
  if (st?.state !== "unavailable") return false;
  const since = Date.parse(st.last_changed ?? "");
  return !Number.isFinite(since) || now - since >= CONTACT_GRACE_MS;
}

/** Contacts that went unavailable but are still within the grace time: the view looks again once it has passed. */
export function contactsPending(hass: HomeAssistant, sources: AlertSources): boolean {
  return (sources.contacts ?? []).some((c) => hass.states[c.entity]?.state === "unavailable");
}

function contactWarnings(hass: HomeAssistant, sources: AlertSources, now: number): Alert[] {
  return (sources.contacts ?? []).filter((c) => contactLost(hass, c.entity, now)).map((c) => ({ kind: "contact_lost", entity: c.entity, roomId: c.roomId, floorId: c.floorId }));
}

/** The warnings that are active now: room sensors, then windows in the rain, then house-wide alarms and a power outage, then lost contacts. */
export function findAlerts(hass: HomeAssistant, building: Building, sources: AlertSources, links: Map<string, OpeningEntities>, now = Date.now()): Alert[] {
  const outage: Alert[] = sources.outage && isPowerOut(hass, sources.outage) ? [{ kind: "power_outage", entity: sources.outage, roomId: null, floorId: null }] : [];
  const own: Alert[] = (sources.own ?? []).filter((r) => ownAlertMet(hass, r)).map((r) => {
    const room = r.room_id ? building.floors.find((f) => f.rooms.some((x) => x.id === r.room_id)) : undefined;
    return { kind: "own", entity: r.entity, roomId: room ? r.room_id! : null, floorId: room?.id ?? null, text: r.text };
  });
  return [...sensorWarnings(hass, sources), ...rainWarnings(hass, building, sources, links), ...alarmWarnings(hass, sources, building), ...outage, ...contactWarnings(hass, sources, now), ...own];
}

const PULSE: Record<AlertKind, [number, number, number]> = {
  smoke: [1, 0.2, 0.25],
  gas: [1, 0.2, 0.25],
  co: [1, 0.2, 0.25],
  alarm: [1, 0.2, 0.25],
  water: [0.2, 0.6, 1],
  window_rain: [0.35, 0.72, 1],
  alarm_pending: [1, 0.62, 0.2],
  power_outage: [1, 0.62, 0.2],
  contact_lost: [1, 0.62, 0.2],
  own: [1, 0.62, 0.2],
};

/** The colour a room pulses in (channels 0..1). */
export const alertColor = (kind: AlertKind): [number, number, number] => PULSE[kind];

/** One line for the banner, e.g. "Kitchen · Smoke: smoke detector". */
export function alertText(hass: HomeAssistant | undefined, building: Building, a: Alert): string {
  const name = hass ? entityName(hass, a.entity) : a.entity;
  const message = a.kind === "own" ? a.text || name : a.cause ? translate(hass, "alert_alarm_by", { name, cause: hass ? entityName(hass, a.cause) : a.cause }) : translate(hass, `alert_${a.kind}` as Parameters<typeof translate>[1], { name });
  const room = a.roomId === null ? undefined : building.floors.flatMap((f) => f.rooms).find((r) => r.id === a.roomId);
  return room ? `${room.name} · ${message}` : message;
}
