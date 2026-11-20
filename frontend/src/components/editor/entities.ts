// Which entities a form offers for which job, and how they are listed.

import { entityName } from "../../devices.ts";
import type { HomeAssistant } from "../../types.ts";

export interface EntityOption {
  id: string;
  label: string;
}

/** Entities that carry a number: sensors and the number helpers. */
export const isNumeric = (id: string): boolean => /^(sensor|input_number|number)\./.test(id);

/** Entities that are on or off: binary sensors and the toggle helper. */
export const isBinary = (id: string): boolean => /^(binary_sensor|input_boolean)\./.test(id);

/** A power sensor: device class power, or a plain sensor in W or kW (templates, MQTT and many meters have no class). */
export function isPowerSensor(hass: HomeAssistant | undefined, id: string): boolean {
  if (!isNumeric(id)) return false;
  const attributes = hass?.states[id]?.attributes;
  return attributes?.device_class === "power" || attributes?.unit_of_measurement === "W" || attributes?.unit_of_measurement === "kW";
}

/** The area an entity is in: its own, or that of its device. */
function areaNameOf(hass: HomeAssistant | undefined, id: string): string | undefined {
  const entry = hass?.entities?.[id];
  const area = entry?.area_id ?? (entry?.device_id ? hass?.devices?.[entry.device_id]?.area_id : null);
  return area ? hass?.areas?.[area]?.name : undefined;
}

/** The entities that pass `accept`, as options named "Name · Area", sorted by that label. */
export function entityOptions(hass: HomeAssistant | undefined, accept: (id: string) => boolean): EntityOption[] {
  return Object.keys(hass?.states ?? {})
    .filter(accept)
    .map((id) => {
      const area = areaNameOf(hass, id);
      return { id, label: area ? `${entityName(hass, id)} · ${area}` : entityName(hass, id) };
    })
    .sort((a, b) => a.label.localeCompare(b.label));
}

const COMMON_SERVICES = [
  "light.toggle",
  "light.turn_on",
  "light.turn_off",
  "switch.toggle",
  "switch.turn_on",
  "switch.turn_off",
  "homeassistant.toggle",
  "scene.turn_on",
  "script.turn_on",
  "cover.toggle",
  "cover.open_cover",
  "cover.close_cover",
  "lock.lock",
  "lock.unlock",
  "fan.toggle",
  "media_player.media_play_pause",
  "climate.set_temperature",
  "vacuum.start",
];

/** All services offered by Home Assistant (domain.service), or common defaults when offline. */
export function serviceOptions(hass: HomeAssistant | undefined, current?: string | null): EntityOption[] {
  const out: EntityOption[] = [];
  const seen = new Set<string>();
  const services = hass?.services;
  if (services && Object.keys(services).length > 0) {
    for (const [domain, map] of Object.entries(services)) {
      if (!map || typeof map !== "object") continue;
      for (const [srv, meta] of Object.entries(map)) {
        const id = `${domain}.${srv}`;
        seen.add(id);
        const name = meta && typeof meta === "object" && "name" in meta && typeof (meta as { name?: unknown }).name === "string" ? (meta as { name: string }).name : "";
        out.push({ id, label: name ? `${id} · ${name}` : id });
      }
    }
  } else {
    for (const id of COMMON_SERVICES) {
      seen.add(id);
      out.push({ id, label: id });
    }
  }
  if (current && !seen.has(current)) out.unshift({ id: current, label: current });
  return out.sort((a, b) => a.id.localeCompare(b.id));
}

/** The power sensor of an energy device: set by hand, or the one found on its Home Assistant device. */
export function powerSensorOf(item: { id: string; power?: string | null }, found: Map<string, { power: string | null }>): string | null {
  return item.power && item.power !== "none" ? item.power : (found.get(item.id)?.power ?? null);
}
