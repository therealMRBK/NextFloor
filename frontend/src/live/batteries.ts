// Low batteries: the battery level of the devices the plan links – device pins, the sensors of doors and windows, linked furniture –
// from a battery sensor on the same device or the entity's own battery attribute, each device once.

import { pointInPolygon, type Building, type Floor, type Room } from "../model.ts";
import type { HomeAssistant } from "../types.ts";

/** Below this level (%) a battery counts as low. */
export const LOW_BATTERY = 20;

export interface BatteryLevel {
  /** The entity of the plan the battery belongs to (its name is shown). */
  entity: string;
  level: number;
  floorId: string;
  roomId: string | null;
}

/** Battery sensors by device, worked out once per registry (the registry object changes when entities do). */
const batteryIndex = new WeakMap<object, Map<string, string>>();
function batterySensors(hass: HomeAssistant): Map<string, string> {
  const registry = hass.entities ?? {};
  let index = batteryIndex.get(registry);
  if (!index) {
    index = new Map();
    for (const [id, entry] of Object.entries(registry)) {
      if (entry.device_id && id.startsWith("sensor.") && hass.states[id]?.attributes.device_class === "battery" && !index.has(entry.device_id)) index.set(entry.device_id, id);
    }
    batteryIndex.set(registry, index);
  }
  return index;
}

/** The battery level of an entity's device (a battery sensor next to it), else its own battery attribute; null when it has none. */
export function batteryOf(hass: HomeAssistant, entityId: string): number | null {
  const device = hass.entities?.[entityId]?.device_id;
  const sensor = device ? batterySensors(hass).get(device) : undefined;
  if (sensor) {
    const v = Number(hass.states[sensor]?.state);
    if (Number.isFinite(v)) return v;
  }
  const attr = hass.states[entityId]?.attributes;
  if (!attr || (attr.battery_level === undefined && attr.battery === undefined)) return null;
  const v = Number(attr.battery_level ?? attr.battery);
  return Number.isFinite(v) ? v : null;
}

/** Every entity of a floor the plan links, with where it is. */
function linkedEntities(floor: Floor): { entity: string; x: number; z: number; room: string | null }[] {
  const out: { entity: string; x: number; z: number; room: string | null }[] = [];
  const looks = (v: unknown): v is string => typeof v === "string" && /^[a-z_]+\.[a-z0-9_]+$/.test(v);
  for (const p of floor.placements) out.push({ entity: p.entity_id, x: p.x, z: p.z, room: null });
  for (const m of floor.furniture) for (const v of [m.entity, m.power]) if (looks(v)) out.push({ entity: v, x: m.x, z: m.z, room: null });
  for (const o of floor.openings) for (const v of [o.contact, o.contact2, o.tilt, o.tilt2, o.cover, o.cover2, o.lock]) if (looks(v)) out.push({ entity: v, x: NaN, z: NaN, room: o.room_id });
  return out;
}

const roomAt = (floor: Floor, x: number, z: number): Room | undefined => floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([x, z], r.points));

/** The batteries of the plan's devices, lowest first; each device counted once. */
export function planBatteries(hass: HomeAssistant, building: Building): BatteryLevel[] {
  const seen = new Set<string>();
  const out: BatteryLevel[] = [];
  for (const floor of building.floors) {
    for (const link of linkedEntities(floor)) {
      const key = hass.entities?.[link.entity]?.device_id ?? link.entity;
      if (seen.has(key)) continue;
      const level = batteryOf(hass, link.entity);
      if (level === null) continue;
      seen.add(key);
      out.push({ entity: link.entity, level, floorId: floor.id, roomId: link.room ?? roomAt(floor, link.x, link.z)?.id ?? null });
    }
  }
  return out.sort((a, b) => a.level - b.level);
}
