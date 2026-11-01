// Small builders for the tests of the entities/ modules.

import { newFloor, type Floor, type Opening, type Room } from "../model.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";

export const entity = (entity_id: string, state: string, attributes: Record<string, unknown> = {}): HassEntity => ({ entity_id, state, attributes });

interface RegistryEntry {
  area_id?: string | null;
  device_id?: string | null;
  hidden?: boolean;
  entity_category?: string | null;
  name?: string | null;
  translation_key?: string | null;
  platform?: string | null;
}

/** A Home Assistant with the given states and registry entries (entry key = entity id). */
export function hassOf(states: HassEntity[], registry: Record<string, RegistryEntry> = {}, extra: Record<string, unknown> = {}): HomeAssistant {
  return {
    language: "en",
    states: Object.fromEntries(states.map((s) => [s.entity_id, s])),
    entities: Object.fromEntries(Object.entries(registry).map(([id, e]) => [id, { entity_id: id, ...e }])),
    devices: {},
    areas: {},
    callService: async () => undefined,
    ...extra,
  } as unknown as HomeAssistant;
}

export const box = (id: string, x0: number, z0: number, x1: number, z1: number, area: string | null = null): Room => ({
  id,
  name: id,
  area_id: area,
  points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]],
  floor_material: "wood",
});

export function floorWith(rooms: Room[], extra: Partial<Floor> = {}): Floor {
  return { ...newFloor("g", "Ground", 0), rooms, ...extra };
}

export const opening = (id: string, room: string, type: Opening["type"], extra: Partial<Opening> = {}): Opening =>
  ({ id, room_id: room, edge: 0, offset: 1, width: 1, type, sill: 0.9, height: 1.2, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null, ...extra }) as Opening;
