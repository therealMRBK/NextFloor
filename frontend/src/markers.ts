// Device markers for the 3D view, built from placed entities and their states, plus the short state
// texts that markers and the room panel share.

import { defaultHeight, entityName, isActive, isUnavailable, kindOf, lightGlow, tempUnit } from "./devices.ts";
import { formatNumber, translate, type I18nKey } from "./i18n.ts";
import { iconSvg, mdiIcon } from "./icons.ts";
import { ceilingAt, pointInPolygon, type Building, type Floor, type Placement, type Room } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";
import type { DeviceMarker } from "./viewer/viewer3d.ts";
import { lightAnimation } from "./light-effects.ts";
import { pluginFloorWedge, pluginKind, pluginMarkerPatch } from "./plugins/registry.ts";

type Hass = HomeAssistant | undefined;

const say = (hass: Hass, key: I18nKey) => translate(hass, key);
const onOff = (hass: Hass, on: boolean) => say(hass, on ? "state_on" : "state_off");

/** A state word translated when there is a translation, else shown as it is. */
function stateWord(hass: Hass, state: string): string {
  const key = `state_${state}` as I18nKey;
  const word = translate(hass, key);
  return word === key ? state : word;
}

const OPENING_CLASSES = new Set(["door", "window", "opening", "garage_door"]);
const MEDIA_RUNNING = new Set(["playing", "paused", "on", "idle"]);

function lightText(hass: Hass, st: HassEntity): string {
  if (st.state !== "on") return say(hass, "state_off");
  const brightness = st.attributes.brightness;
  return typeof brightness === "number" ? `${Math.round((brightness / 255) * 100)} %` : say(hass, "state_on");
}

function coverText(hass: Hass, st: HassEntity): string {
  const position = st.attributes.current_position;
  const moving = st.state === "opening" || st.state === "closing";
  return typeof position === "number" && !moving ? `${position} %` : stateWord(hass, st.state);
}

function climateText(hass: Hass, st: HassEntity): string {
  const current = st.attributes.current_temperature;
  const reading = typeof current === "number" ? `${formatNumber(hass, current, 1)} ${hass ? tempUnit(hass) : "°C"}` : null;
  if (st.state === "off") return reading ? `${reading} · ${say(hass, "state_off")}` : say(hass, "state_off");
  return reading ?? stateWord(hass, st.state);
}

function mediaText(hass: Hass, st: HassEntity): string {
  // while something runs: the app (Netflix ...), else the title, else the input source
  const label = [st.attributes.app_name, st.attributes.media_title, st.attributes.source].find((v): v is string => typeof v === "string" && v !== "");
  return MEDIA_RUNNING.has(st.state) && label ? label : stateWord(hass, st.state);
}

function binaryText(hass: Hass, st: HassEntity): string {
  const on = st.state === "on";
  if (OPENING_CLASSES.has(String(st.attributes.device_class))) return say(hass, on ? "state_open" : "state_closed");
  return say(hass, on ? "state_detected" : "state_clear");
}

/** When a wall button (event entity) was last pressed: the time today, else the day and time; a dash before its first press. */
export function eventText(hass: Hass, st: HassEntity, now = new Date()): string {
  const when = new Date(st.state);
  if (Number.isNaN(when.getTime())) return "–";
  const locale = hass?.language ?? navigator.language;
  const today = when.toDateString() === now.toDateString();
  const options: Intl.DateTimeFormatOptions = today ? { hour: "2-digit", minute: "2-digit" } : { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" };
  return new Intl.DateTimeFormat(locale, options).format(when);
}

function sensorText(hass: Hass, st: HassEntity): string {
  if (st.entity_id.startsWith("event.")) return eventText(hass, st);
  const value = Number(st.state);
  if (!Number.isFinite(value)) return st.state;
  // the decimals chosen in Home Assistant win (a gas meter reads 1234.567 m³)
  const digits = hass?.entities?.[st.entity_id]?.display_precision ?? 1;
  const unit = st.attributes.unit_of_measurement;
  return `${formatNumber(hass, value, digits)}${typeof unit === "string" && unit ? ` ${unit}` : ""}`;
}

/** Short state text, in the user's language, for a marker or a row of the room panel. */
export function stateText(hass: Hass, st: HassEntity | undefined): string {
  if (!st || isUnavailable(st)) return say(hass, "state_unavailable");
  switch (kindOf(st.entity_id)) {
    case "light":
      return lightText(hass, st);
    case "switch":
    case "fan":
      // a valve says open or closed, like a blind
      if (st.entity_id.startsWith("valve.")) return coverText(hass, st);
      return onOff(hass, st.state === "on");
    case "cover":
      return coverText(hass, st);
    case "climate":
      return climateText(hass, st);
    case "media":
      return mediaText(hass, st);
    case "lock":
      return stateWord(hass, st.state);
    case "binary":
      return binaryText(hass, st);
    case "sensor":
      return sensorText(hass, st);
    default:
      return "";
  }
}

const roomAt = (floor: Floor, x: number, z: number): Room | null => floor.rooms.find((room) => room.points.length >= 3 && pointInPolygon([x, z], room.points)) ?? null;

/** A lamp's glow made stronger or weaker by its own factor, so a row of LED strips need not outshine a room. */
export function scaleGlow<T extends { level: number }>(glow: T | null, factor: number | null | undefined): T | null {
  if (!glow || factor == null || factor === 1) return glow;
  return { ...glow, level: Math.min(1.5, Math.max(0.02, glow.level * factor)) };
}

function markerFor(hass: HomeAssistant, floor: Floor, placed: Placement): DeviceMarker | null {
  const st = hass.states[placed.entity_id];
  // a plugin may take on entities of domains NextFloor does not know
  const kind = kindOf(placed.entity_id) ?? pluginKind(placed.entity_id, st);
  if (!kind || !st) return null;
  // a device that belongs to Outside never counts for the room under it
  const room = placed.outside ? null : roomAt(floor, placed.x, placed.z);
  const areaName = room?.area_id ? hass.areas?.[room.area_id]?.name : undefined;
  const marker: DeviceMarker = {
    id: placed.entity_id,
    floorId: floor.id,
    roomId: room?.id ?? null,
    x: placed.x,
    z: placed.z,
    y: placed.y ?? defaultHeight(kind, ceilingAt(floor, placed.x, placed.z), placed.mount ?? null),
    lamp: kind === "light" ? (placed.mount ?? "ceiling") : null,
    ceiling: ceilingAt(floor, placed.x, placed.z),
    rotation: placed.rotation ?? 0,
    icon: placed.icon ? mdiIcon(placed.icon) : iconSvg(kind),
    name: placed.name || entityName(hass, placed.entity_id, areaName),
    ownName: placed.name || undefined,
    showName: !!placed.show_name,
    text: stateText(hass, st),
    active: isActive(st),
    unavailable: isUnavailable(st),
    glow: kind === "light" ? scaleGlow(lightGlow(st), placed.glow_scale) : null,
    effect: kind === "light" ? lightAnimation(placed, st) : undefined,
    show: placed.marker ?? undefined,
    fixed: !!placed.locked,
  };
  // a plugin may draw a shape on the floor from the device (a camera's field of view)
  marker.wedge = pluginFloorWedge({ hass, entityId: placed.entity_id, state: st }, { floorId: floor.id, roomId: marker.roomId, x: marker.x, z: marker.z, y: marker.y, rotation: marker.rotation ?? 0 }, placed.plugin ?? undefined);
  return withPluginPatch(hass, marker, st, !!placed.icon);
}

/** Applies what plugins change on a marker; an icon the user picked in the plan stays. */
export function withPluginPatch<M extends Pick<DeviceMarker, "id" | "icon" | "text" | "active">>(hass: HomeAssistant, marker: M, st: HassEntity, ownIcon: boolean): M {
  const patch = pluginMarkerPatch({ hass, entityId: marker.id, state: st });
  if (!patch) return marker;
  const icon = patch.icon && !ownIcon ? (patch.icon.trimStart().startsWith("<svg") ? patch.icon : mdiIcon(patch.icon)) : marker.icon;
  return { ...marker, icon, text: patch.text ?? marker.text, active: patch.active ?? marker.active };
}

/** One marker per placed entity that still exists in Home Assistant. */
export function buildMarkers(hass: HomeAssistant, building: Building): DeviceMarker[] {
  return building.floors.flatMap((floor) => floor.placements.map((placed) => markerFor(hass, floor, placed)).filter((m): m is DeviceMarker => m !== null));
}

/** Every entity that is placed somewhere in the building. */
export const placedEntities = (building: Building): string[] => building.floors.flatMap((floor) => floor.placements.map((p) => p.entity_id));

/** Opens the more-info dialog of Home Assistant for an entity. */
export function openMoreInfo(from: HTMLElement, entityId: string): void {
  from.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId }, bubbles: true, composed: true }));
}

/** Switches an entity with the toggle service of its own domain. */
export function toggleEntity(hass: HomeAssistant, entityId: string): Promise<unknown> {
  return hass.callService(entityId.split(".")[0], "toggle", { entity_id: entityId });
}
