// Lookups over Home Assistant's entity registry: which entities belong to an area, which are worth showing,
// which sensors measure a room, which power sensor goes with a device. The registry is indexed once and the index
// is reused, because every state change would otherwise walk thousands of entities for every room.

import { pointInPolygon, type Floor, type Room } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import { onPluginsChanged, pluginKind } from "../plugins/registry.ts";
import { domainOf, entityName, isPlaceable, isUnavailable, KIND_ORDER, kindOf, toCelsius, type DeviceKind } from "./kinds.ts";

/** Sensor classes that get a marker: room climate, air quality, power and energy, meters, light. */
const SHOWN_SENSOR_CLASSES = new Set([
  "temperature", "humidity", "power", "carbon_dioxide", "energy", "gas", "water", "volume", "volume_storage", "volume_flow_rate", "illuminance",
  "pressure", "atmospheric_pressure", "pm1", "pm25", "pm10", "volatile_organic_compounds", "volatile_organic_compounds_parts",
  "carbon_monoxide", "nitrogen_dioxide", "moisture", "sound_pressure",
]);
/** A sensor without a class still counts when its unit is a meter's. */
const METER_UNITS = new Set(["m³", "m3", "L", "l", "kWh", "Wh", "MWh", "lx"]);
const SHOWN_BINARY_CLASSES = new Set(["door", "window", "opening", "garage_door", "motion", "occupancy", "presence", "smoke", "moisture", "gas", "carbon_monoxide"]);
/** Sensor classes that describe the device itself and never make a marker. */
const DIAGNOSTIC_CLASSES = new Set(["battery", "signal_strength", "timestamp", "date", "duration", "data_rate", "data_size", "frequency", "enum"]);

/** The area an entity is in: its own, else its device's. */
export function entityAreaId(hass: HomeAssistant, entityId: string): string | null {
  const entry = hass.entities?.[entityId];
  if (!entry) return null;
  return entry.area_id || (entry.device_id ? hass.devices?.[entry.device_id]?.area_id : null) || null;
}

const isHiddenOrConfig = (hass: HomeAssistant, entityId: string): boolean => {
  const entry = hass.entities?.[entityId];
  return !!(entry?.hidden || entry?.entity_category);
};

/** The kind of an entity: by its domain, else the one a plugin gives it (a robot vacuum shown as a switch). */
export const entityKind = (hass: HomeAssistant, entityId: string): DeviceKind | null => kindOf(entityId) ?? pluginKind(entityId, hass.states[entityId]);

/** Whether an entity is shown at all: visible, not a configuration entity, and of a kind that is handled. */
export function isRelevant(hass: HomeAssistant, entityId: string): boolean {
  const state = hass.states[entityId];
  if (!state || isHiddenOrConfig(hass, entityId)) return false;
  // an entity a plugin takes care of is shown, whatever its domain or class (a printer's enum status sensor)
  if (pluginKind(entityId, state) !== null) return true;
  const kind = kindOf(entityId);
  if (!kind) return false;
  const deviceClass = state.attributes.device_class as string | undefined;
  // wall buttons, remotes and doorbells (event entities) count, other events are integration internals
  if (entityId.startsWith("event.")) return !deviceClass || deviceClass === "button" || deviceClass === "doorbell";
  if (kind === "sensor") return deviceClass ? SHOWN_SENSOR_CLASSES.has(deviceClass) : METER_UNITS.has(String(state.attributes.unit_of_measurement ?? ""));
  // a binary sensor without a class is mostly integration noise, unless someone gave that entity an area by hand
  if (kind === "binary") return deviceClass ? SHOWN_BINARY_CLASSES.has(deviceClass) : !!hass.entities?.[entityId]?.area_id;
  return true;
}

/** A numeric sensor with a unit: offered for devices without an area even when its class is unknown. */
function isLooseSensor(hass: HomeAssistant, entityId: string): boolean {
  const state = hass.states[entityId];
  if (kindOf(entityId) !== "sensor" || !state?.attributes.unit_of_measurement || isHiddenOrConfig(hass, entityId)) return false;
  if (DIAGNOSTIC_CLASSES.has(String(state.attributes.device_class ?? ""))) return false;
  return Number.isFinite(Number(state.state)) || isUnavailable(state);
}

/** A power sensor: a `sensor.` with the device class power. */
export const isPower = (hass: HomeAssistant, id: string): boolean => id.startsWith("sensor.") && hass.states[id]?.attributes.device_class === "power";

interface Index {
  entities: HomeAssistant["entities"];
  devices: HomeAssistant["devices"];
  states: HomeAssistant["states"];
  stateCount: number;
  byArea: Map<string, string[]>;
  powerByDevice: Map<string, string[]>;
  /** Placeable entities that have no area. */
  withoutArea: string[];
  /** Per device: the domains of its visible entities (tells a 3D printer from a thermometer). */
  domainsByDevice: Map<string, Set<string>>;
  /** Devices whose entities sit in several areas, such as one bus device for a whole house. */
  hubs: Set<string>;
}

let cached: Index | null = null;
// a plugin can give a kind to entities of unknown domains: they are offered from then on
onPluginsChanged(() => (cached = null));

function bucket<K, V>(map: Map<K, V[]>, key: K): V[] {
  let list = map.get(key);
  if (!list) map.set(key, (list = []));
  return list;
}

function build(hass: HomeAssistant): Index {
  const byArea = new Map<string, string[]>();
  const powerByDevice = new Map<string, string[]>();
  const domainsByDevice = new Map<string, Set<string>>();
  const areasOfDevice = new Map<string, Set<string>>();
  const withoutArea: string[] = [];
  const offerWithoutArea = (id: string) => {
    if ((isRelevant(hass, id) || isLooseSensor(hass, id)) && isPlaceable(entityKind(hass, id))) withoutArea.push(id);
  };

  for (const [id, entry] of Object.entries(hass.entities ?? {})) {
    const device = entry.device_id;
    if (device && entry.area_id) (areasOfDevice.get(device) ?? areasOfDevice.set(device, new Set()).get(device)!).add(entry.area_id);
    if (device && isPower(hass, id)) bucket(powerByDevice, device).push(id);
    if (device && !entry.hidden && !entry.entity_category) (domainsByDevice.get(device) ?? domainsByDevice.set(device, new Set()).get(device)!).add(domainOf(id));
    const area = entityAreaId(hass, id);
    if (area === null) offerWithoutArea(id);
    else if (isRelevant(hass, id)) bucket(byArea, area).push(id);
  }
  // entities that are not in the registry (YAML without a unique_id, a USB camera) have no area either
  if (hass.entities) for (const id of Object.keys(hass.states)) if (!hass.entities[id]) offerWithoutArea(id);

  // an entity a plugin takes on (an NVR's camera, a printer's status) comes before the plain sensors of its device, so it is
  // the device's main entry
  const pluginRank = KIND_ORDER.indexOf("binary") - 0.5;
  const rank = (id: string) => {
    const kind = kindOf(id);
    const own = kind ? KIND_ORDER.indexOf(kind) : pluginRank;
    return own > pluginRank && pluginKind(id, hass.states[id]) !== null ? pluginRank : own;
  };
  withoutArea.sort((a, b) => rank(a) - rank(b) || entityName(hass, a).localeCompare(entityName(hass, b)));
  for (const [areaId, ids] of byArea) {
    const areaName = hass.areas?.[areaId]?.name;
    ids.sort((a, b) => rank(a) - rank(b) || entityName(hass, a, areaName).localeCompare(entityName(hass, b, areaName)));
  }
  const hubs = new Set<string>();
  for (const [device, areas] of areasOfDevice) if (areas.size > 1) hubs.add(device);
  return { entities: hass.entities, devices: hass.devices, states: hass.states, stateCount: Object.keys(hass.states).length, byArea, powerByDevice, withoutArea, domainsByDevice, hubs };
}

/**
 * The index for a registry. Home Assistant swaps `entities`, `devices` and `states` for new objects when they change,
 * so object identity is the cache key. A different number of states (entities appearing after the registry) also
 * triggers a rebuild.
 */
function indexOf(hass: HomeAssistant): Index {
  const hit = cached;
  if (hit && hit.entities === hass.entities && hit.devices === hass.devices) {
    if (hit.states === hass.states) return hit;
    hit.states = hass.states;
    if (Object.keys(hass.states).length === hit.stateCount) return hit;
  }
  return (cached = build(hass));
}

/** The shown entities of an area, by kind and name. The array is shared: do not change it. */
/** The entities of a room: those of its area and of the areas that are parts of it (a corner, a shelf with an area of its own). */
export function roomEntities(hass: HomeAssistant, room: { area_id: string | null; sub_areas?: string[] | null }): string[] {
  const own = areaEntities(hass, room.area_id);
  if (!room.sub_areas?.length) return own;
  return [...new Set([...own, ...room.sub_areas.flatMap((a) => areaEntities(hass, a))])];
}

export function areaEntities(hass: HomeAssistant, areaId: string | null): string[] {
  if (!areaId || !hass.entities) return [];
  return indexOf(hass).byArea.get(areaId) ?? [];
}

/** Placeable entities of all areas but one, grouped by area name: for placing a device that lives elsewhere. */
export function otherAreaEntities(hass: HomeAssistant, exceptArea: string | null): { areaId: string; name: string; ids: string[] }[] {
  if (!hass.entities) return [];
  const groups: { areaId: string; name: string; ids: string[] }[] = [];
  for (const [areaId, all] of indexOf(hass).byArea) {
    const ids = all.filter((id) => isPlaceable(entityKind(hass, id)));
    if (areaId !== exceptArea && ids.length > 0) groups.push({ areaId, name: hass.areas?.[areaId]?.name ?? areaId, ids });
  }
  return groups.sort((a, b) => a.name.localeCompare(b.name));
}

/** Placeable entities without an area (templates, groups, helpers, any numeric sensor with a unit). */
export const unassignedEntities = (hass: HomeAssistant): string[] => (hass.entities ? indexOf(hass).withoutArea : []);

/** Whether a device is a hub: its entities lie in several areas. */
export const isHubDevice = (hass: HomeAssistant, deviceId: string): boolean => !!hass.entities && indexOf(hass).hubs.has(deviceId);

/** The power sensors of a device. The array is shared: do not change it. */
export const powerSensorsOf = (hass: HomeAssistant, deviceId: string): string[] => (hass.entities ? (indexOf(hass).powerByDevice.get(deviceId) ?? []) : []);

// ---------------------------------------------------------------- one entity per device

export interface DeviceGroup {
  /** The device's main entity (the one without a name of its own), or the entity itself. */
  primary: string;
  /** Other entities of the same device: indicators, effects, extra channels. */
  others: string[];
}

/**
 * Groups entities by their device. Home Assistant's convention makes the device's main feature the entity without a
 * name of its own; failing that, the first one. Groups come in the order of their main entities within `ids`.
 */
export function groupByDevice(hass: HomeAssistant, ids: readonly string[]): DeviceGroup[] {
  const members = new Map<string, string[]>();
  for (const id of ids) bucket(members, hass.entities?.[id]?.device_id ?? `entity:${id}`).push(id);
  const position = new Map(ids.map((id, i) => [id, i]));
  return [...members.values()]
    .map((list) => {
      const primary = list.find((id) => !hass.entities?.[id]?.name) ?? list[0];
      return { primary, others: list.filter((id) => id !== primary) };
    })
    .sort((a, b) => position.get(a.primary)! - position.get(b.primary)!);
}

/** One entity per device: the main ones. */
export const primaryEntities = (hass: HomeAssistant, ids: readonly string[]): string[] => groupByDevice(hass, ids).map((g) => g.primary);

// ---------------------------------------------------------------- room climate

/** Device classes of the three room values. */
export const CLIMATE_CLASSES = { temperature: "temperature", humidity: "humidity", co2: "carbon_dioxide" } as const;
export type ClimateKey = keyof typeof CLIMATE_CLASSES;

/** A device with one of these domains is not a room sensor: a heat pump, a printer, a TV. */
const APPLIANCE_DOMAINS = new Set(["climate", "water_heater", "switch", "button", "camera", "media_player", "vacuum", "light", "fan", "lawn_mower"]);
/** Words in a name (English and German) that mark a temperature that is not the room's: pipes, printers, chips, outdoors, cold appliances. */
const NOT_THE_ROOM_WORDS = [
  "vorlauf", "r(ü|ue)cklauf", "flow", "return", // heating pipes
  "d(ü|ue)se", "nozzle", "hotend", "extruder", "druckbett", "heatbed", "(^|[^a-z])bed($|[^a-z])", "chamber", // 3D printers
  "cpu", "gpu", "chip", "soc", "akku", "batter", // electronics
  "wasser", "water", "kessel", "boiler", "au(ß|ss)en", "outdoor", "outside", // water, outdoors
  "abgas", "exhaust", "sole", "brine", "verdampfer", "kondensat", "verdichter", "compressor", "motor", // heat pumps
  "k(ü|ue)hl", "freezer", "fridge", "gefrier", // cold appliances
];
const NOT_THE_ROOM = new RegExp(`(${NOT_THE_ROOM_WORDS.join("|")})`, "i");

/** Whether a sensor measures the room itself rather than the inside of some device. */
export function isRoomClimateSensor(hass: HomeAssistant, entityId: string): boolean {
  const device = hass.entities?.[entityId]?.device_id;
  // a hub's entities are scattered over the house, so what else it offers says nothing about this sensor
  const domains = device && !isHubDevice(hass, device) ? indexOf(hass).domainsByDevice.get(device) : undefined;
  if (domains && [...domains].some((d) => APPLIANCE_DOMAINS.has(d))) return false;
  return !NOT_THE_ROOM.test(`${entityId} ${hass.states[entityId]?.attributes.friendly_name ?? ""}`);
}

/**
 * The sensors a room's temperature, humidity or CO₂ is read from. An explicit choice wins ("none" means no sensor).
 * Otherwise: the room sensors of the room's area plus those placed inside the room; a sensor of this area that is
 * placed in another room counts there instead.
 */
export function roomClimateSensors(hass: HomeAssistant, floor: Floor | null, room: Room, key: ClimateKey): string[] {
  const chosen = room.climate?.[key];
  if (chosen === "none") return [];
  // one sensor, or several that are averaged
  if (chosen) return [chosen].flat().filter((id) => hass.states[id]);
  const placedSensors = (floor?.placements ?? []).filter((p) => p.entity_id.startsWith("sensor."));
  const inside = placedSensors.filter((p) => pointInPolygon([p.x, p.z], room.points)).map((p) => p.entity_id);
  const insideElsewhere = new Set(placedSensors.filter((p) => !pointInPolygon([p.x, p.z], room.points)).map((p) => p.entity_id));
  const candidates = new Set([...roomEntities(hass, room).filter((id) => !insideElsewhere.has(id)), ...inside]);
  return [...candidates].filter((id) => id.startsWith("sensor.") && hass.states[id]?.attributes.device_class === CLIMATE_CLASSES[key] && isRoomClimateSensor(hass, id));
}

/** The average of the room's sensors, or null when none reports. Temperatures are always °C, whatever the sensor's unit. */
export function roomClimateValue(hass: HomeAssistant, floor: Floor | null, room: Room, key: ClimateKey): number | null {
  const readings = roomClimateSensors(hass, floor, room, key)
    .map((id) => {
      const reading = Number(hass.states[id]?.state);
      return key === "temperature" ? toCelsius(reading, hass.states[id]?.attributes.unit_of_measurement) : reading;
    })
    .filter(Number.isFinite);
  if (readings.length) return readings.reduce((sum, v) => sum + v, 0) / readings.length;
  // no room sensor: a thermostat of the room's area tells its temperature and humidity (heating curves, the heat map)
  if (key === "co2" || room.climate?.[key] === "none") return null;
  const attr = key === "temperature" ? "current_temperature" : "current_humidity";
  const climates = roomEntities(hass, room)
    .filter((id) => id.startsWith("climate."))
    .map((id) => hass.states[id]?.attributes[attr])
    .filter((v): v is number => typeof v === "number" && Number.isFinite(v));
  return climates.length ? climates.reduce((sum, v) => sum + v, 0) / climates.length : null;
}
