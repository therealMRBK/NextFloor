// What kind of device an entity is, whether it is "on", how a light glows, and a few unit helpers.
// Pure functions: no Lit, no three.js.

import type { LampMount } from "../model.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";

export type DeviceKind = "light" | "switch" | "fan" | "cover" | "climate" | "media" | "lock" | "sensor" | "binary" | "scene" | "script";

/** The Home Assistant domain, i.e. the part of the id before the dot. */
export const domainOf = (entityId: string): string => entityId.slice(0, entityId.indexOf("."));

const KIND_OF_DOMAIN: Record<string, DeviceKind> = {
  light: "light",
  switch: "switch",
  input_boolean: "switch",
  fan: "fan",
  cover: "cover",
  climate: "climate",
  media_player: "media",
  lock: "lock",
  sensor: "sensor",
  binary_sensor: "binary",
  scene: "scene",
  script: "script",
};

export const kindOf = (entityId: string): DeviceKind | null => KIND_OF_DOMAIN[domainOf(entityId)] ?? null;

/** The order kinds are listed in. */
export const KIND_ORDER: DeviceKind[] = ["light", "cover", "climate", "media", "switch", "fan", "lock", "binary", "sensor", "scene", "script"];

/** The kinds of markers one can choose to see outside the opened room: device kinds, furniture with an own tap action, and the rest. */
export type MarkerKind = Exclude<DeviceKind, "scene" | "script"> | "tap" | "other";
export const MARKER_KINDS: MarkerKind[] = ["light", "cover", "climate", "media", "switch", "fan", "lock", "binary", "sensor", "tap", "other"];

/** The kind of a marker by its id: an entity, or one of NextFloor's own (a lamp without light, a light switch plate, a tap action, the grid). */
export function markerKind(id: string, lamp = false): MarkerKind {
  if (lamp || id.startsWith("lamp:")) return "light";
  if (id.startsWith("tap:")) return "tap";
  if (id.startsWith("gang:")) return "switch";
  if (id === "grid") return "sensor";
  const kind = kindOf(id);
  return kind && kind !== "scene" && kind !== "script" ? kind : "other";
}

/** Kinds a tap on the marker can switch. */
export const TOGGLE_KINDS = new Set<DeviceKind>(["light", "switch", "fan"]);

/** Scenes and scripts live in the room panel; they have no place in the room. */
export const isPlaceable = (kind: DeviceKind | null): boolean => kind !== null && kind !== "scene" && kind !== "script";

export const isUnavailable = (st: HassEntity | undefined): boolean => !st || st.state === "unavailable" || st.state === "unknown";

/** A cover that only sends commands (assumed state, a garage remote) and so stays unknown: its buttons still work. */
export const assumedCover = (st: HassEntity | undefined): boolean => !!st && st.entity_id.startsWith("cover.") && st.state === "unknown" && st.attributes.assumed_state === true;

/** The covers "open all" / "close all" move at once: those that answer (a garage remote included), but never one that asks first. */
export const groupCovers = (covers: readonly HassEntity[], asking: ReadonlySet<string> | null | undefined): string[] =>
  covers.filter((c) => (!isUnavailable(c) || assumedCover(c)) && !asking?.has(c.entity_id)).map((c) => c.entity_id);

/** The entity's name without the area in front of it: "Lounge Ceiling light" in the Lounge reads "Ceiling light". */
export function entityName(hass: HomeAssistant | undefined, entityId: string, areaName?: string): string {
  // a friendly_name set in YAML can be a number: the name is always text
  const name = String(hass?.states[entityId]?.attributes.friendly_name ?? hass?.entities?.[entityId]?.name ?? entityId);
  if (!areaName || name.length <= areaName.length + 1) return name;
  if (!name.toLowerCase().startsWith(`${areaName.toLowerCase()} `)) return name;
  const rest = name.slice(areaName.length + 1);
  return rest[0].toUpperCase() + rest.slice(1);
}

// ---------------------------------------------------------------- is it on?

/** Sensor states (a printer, a washing machine) that say the device is at work. */
const AT_WORK = new Set(["running", "printing", "prepare", "preparing", "slicing", "heating", "busy", "working", "active", "washing", "rinsing", "spinning", "drying", "cleaning", "in_progress", "in progress", "on"]);

/** A status sensor reports a fixed set of words (running, idle, finished ...) and furniture can follow it. */
export const isStatusSensor = (st: HassEntity | undefined): boolean => !!st && st.entity_id.startsWith("sensor.") && st.attributes.device_class === "enum";

/** "Active" lights a marker up: a lamp that is on, an open cover, a heater heating, a playing player, an open window ... */
export function isActive(st: HassEntity | undefined): boolean {
  if (!st) return false;
  // a robot vacuum counts as active while it cleans or drives back to its dock
  if (st.entity_id.startsWith("vacuum.")) return ["cleaning", "returning"].includes(st.state);
  const kind = kindOf(st.entity_id);
  if (kind === "light" || kind === "switch" || kind === "fan" || kind === "binary") return st.state === "on";
  if (kind === "cover") return st.state === "open" || st.state === "opening";
  if (kind === "climate") return ["heating", "cooling"].includes(String(st.attributes.hvac_action));
  if (kind === "media") return st.state === "playing";
  if (kind === "lock") return st.state === "unlocked" || st.state === "open";
  if (kind === "sensor") return isStatusSensor(st) && AT_WORK.has(st.state.toLowerCase());
  return false;
}

// ---------------------------------------------------------------- light colour

export type Rgb = [number, number, number];

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/** A rough colour for a colour temperature (2200 K warm to 6500 K cool), kept soft on the dark floor. */
export function kelvinToRgb(kelvin: number): Rgb {
  const t = clamp01((kelvin - 2200) / (6500 - 2200));
  const warm: Rgb = [1, 0.66, 0.26];
  const cool: Rgb = [0.78, 0.9, 1];
  return [0, 1, 2].map((i) => warm[i] + (cool[i] - warm[i]) * t) as Rgb;
}

/**
 * Colour (channels 0..1) and strength (0..1) of a lit lamp, or null when it is off. `colorFrom` is the bulb itself
 * when a relay switches the light and only the bulb knows its colour and brightness.
 */
export function lightGlow(st: HassEntity | undefined, colorFrom?: HassEntity): { color: Rgb; level: number } | null {
  if (!st || st.state !== "on") return null;
  const source = colorFrom && !["unavailable", "unknown"].includes(colorFrom.state) ? colorFrom.attributes : st.attributes;
  // perceptual curve: a lamp at 10 % still looks on (about 0.45), full brightness is 1
  const level = typeof source.brightness === "number" ? 0.2 + 0.8 * Math.sqrt(clamp01(source.brightness / 255)) : 1;
  const rgb = source.rgb_color as Rgb | undefined;
  const whiteModes = ["color_temp", "brightness", "onoff"];
  if (rgb && !whiteModes.includes(String(source.color_mode))) return { color: [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255], level };
  if (typeof source.color_temp_kelvin === "number") return { color: kelvinToRgb(source.color_temp_kelvin), level };
  return { color: [1, 0.71, 0.28], level }; // the default warm amber
}

/** Default height of a marker above the floor, in metres. */
export function defaultHeight(kind: DeviceKind, floorHeight: number, mount: LampMount | null = null): number {
  if (kind === "light" && mount === "floor") return 1.95;
  if (kind === "light" && mount === "table") return 1.25;
  if (kind === "light" && mount === "wall") return 1.95;
  switch (kind) {
    case "light":
      return Math.max(0.5, floorHeight - 0.25);
    case "cover":
      return Math.min(2, floorHeight - 0.3);
    case "climate":
      return 0.6;
    case "media":
      return 0.9;
    case "binary":
    case "sensor":
      return 1.4;
    default:
      return 1.05;
  }
}

/** Glow colour of a TV for the app that is running (the apps' brand colours). */
export function appColor(st: HassEntity | undefined): Rgb | null {
  if (!st || isUnavailable(st) || st.state === "off" || st.state === "standby") return null;
  const { app_name, source, app_id } = st.attributes;
  const text = `${app_name ?? ""} ${source ?? ""} ${app_id ?? ""}`.toLowerCase();
  const brands: [string[], Rgb][] = [
    [["netflix"], [0.9, 0.04, 0.08]],
    [["youtube"], [1, 0.1, 0.15]],
    [["prime", "amazon"], [0.1, 0.6, 0.95]],
    [["disney"], [0.2, 0.35, 1]],
    [["spotify"], [0.12, 0.85, 0.4]],
    [["zdf", "ard", "mediathek"], [1, 0.5, 0.1]],
  ];
  return brands.find(([words]) => words.some((w) => text.includes(w)))?.[1] ?? [0.22, 0.88, 1];
}

// ---------------------------------------------------------------- temperature units

/** The temperature unit Home Assistant uses: "°F" for US units, else "°C". */
export const tempUnit = (hass: HomeAssistant): "°C" | "°F" => (hass.config?.unit_system?.temperature === "°F" ? "°F" : "°C");

/** A reading in its unit (°F, K, anything else counts as °C) converted to °C. */
export function toCelsius(value: number, unit: unknown): number {
  if (unit === "°F") return ((value - 32) * 5) / 9;
  if (unit === "K") return value - 273.15;
  return value;
}

/** °C converted to the unit Home Assistant shows. */
export const fromCelsius = (hass: HomeAssistant, celsius: number): number => (tempUnit(hass) === "°F" ? (celsius * 9) / 5 + 32 : celsius);
