// The Wi-Fi map: access points and mesh nodes of the plan with how many devices they carry, and how the house's network devices are
// doing. Read from the entities of each access point's device (UniFi, Omada, FRITZ!Box, OpenWrt, Deco …).

import type { HassEntity, HomeAssistant } from "../types.ts";

/** Whether a piece of furniture is an access point, router or mesh node (by its pack item's id). */
export const isAccessPoint = (type: string): boolean => /access_point|router|mesh|wifi|repeater/.test(type);

const has = (id: string, ...words: string[]) => words.some((w) => id.includes(w));

function siblings(hass: HomeAssistant, entity: string): string[] {
  const device = hass.entities?.[entity]?.device_id;
  if (!device) return hass.states[entity] ? [entity] : [];
  return Object.values(hass.entities ?? {})
    .filter((e) => e.device_id === device && !e.hidden)
    .map((e) => e.entity_id)
    .filter((id) => hass.states[id]);
}

export interface AccessPointInfo {
  /** Devices connected now (null: it does not tell). */
  clients: number | null;
  online: boolean;
}

/** What an access point reports: its clients (a "clients"/"stations"/"connected" sensor) and whether it is up. */
export function readAccessPoint(hass: HomeAssistant, anchor: string | null): AccessPointInfo | null {
  if (!anchor || !hass.states[anchor]) return null;
  const all = siblings(hass, anchor);
  const count = all.find((id) => id.startsWith("sensor.") && has(id, "clients", "stations", "connected_devices", "users", "geräte", "wlan_clients") && Number.isFinite(Number(hass.states[id].state)));
  const status = all.map((id) => hass.states[id]).find((s) => s.entity_id.startsWith("binary_sensor.") && (s.attributes.device_class === "connectivity" || has(s.entity_id, "online", "connected", "status")));
  const st = hass.states[anchor];
  const down = ["unavailable", "off", "disconnected", "offline"].includes(String(status?.state ?? st.state).toLowerCase()) && (!!status || st.entity_id.startsWith("binary_sensor."));
  return { clients: count ? Number(hass.states[count].state) : null, online: !down && st.state !== "unavailable" };
}

/** The coverage colour of an access point: blue while it has room, amber when busy, red when it is down. */
export function coverageColor(ap: AccessPointInfo): [number, number, number] {
  if (!ap.online) return [1, 0.3, 0.3];
  if ((ap.clients ?? 0) >= 30) return [1, 0.72, 0.25];
  return [0.3, 0.7, 1];
}

/** Network devices of the house (connectivity sensors and router trackers among the given entities): how many are online. */
export function networkHealth(states: (HassEntity | undefined)[]): { online: number; offline: string[] } {
  let online = 0;
  const offline: string[] = [];
  for (const s of states) {
    if (!s) continue;
    const connectivity = s.entity_id.startsWith("binary_sensor.") && s.attributes.device_class === "connectivity";
    const tracker = s.entity_id.startsWith("device_tracker.") && s.attributes.source_type === "router";
    if (!connectivity && !tracker) continue;
    if (s.state === "on" || s.state === "home") online++;
    else offline.push(String(s.attributes.friendly_name ?? s.entity_id));
  }
  return { online, offline };
}
