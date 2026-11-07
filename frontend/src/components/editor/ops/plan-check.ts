// The plan check: what is missing or off in the plan, found in one pass over the building. Each finding names where it is and, where
// one is clear, the fix the editor can make in one tap.

import { entityKind, entityName, groupByDevice, isPlaceable, roomEntities } from "../../../devices.ts";
import { furnitureEntities } from "../../../entities/furniture-links.ts";
import { openingEntities } from "../../../entities/openings.ts";
import { powerSensorFor, readPower } from "../../../energy.ts";
import { energyCost } from "../../../live/room-energy.ts";
import { LOW_BATTERY, planBatteries } from "../../../live/batteries.ts";
import { locateOpening, openingHost, generateWalls } from "../../../geometry/walls.ts";
import { isLamp, pointInPolygon, type Building, type Floor, type Room, type Vec2 } from "../../../model.ts";
import type { HomeAssistant } from "../../../types.ts";
import { placedInRoom } from "./device-list.ts";
import { unplacedAreas } from "./floors.ts";

export type CheckKind = "room_no_area" | "areas_unplaced" | "devices_unplaced" | "rooms_overlap" | "opening_off_wall" | "entity_missing" | "furniture_entity_missing" | "standby" | "battery_low";

/** What a tap on a finding does: show it, or fix it right away. */
export type CheckFix =
  | { do: "show_room"; roomId: string }
  | { do: "show_floor" }
  | { do: "set_area"; roomId: string; areaId: string }
  | { do: "add_area_rooms" }
  | { do: "place_devices"; roomId: string; entityIds: string[] }
  | { do: "show_opening"; openingId: string }
  | { do: "remove_placements"; entityIds: string[] }
  | { do: "show_furniture"; furnitureId: string };

export interface CheckFinding {
  kind: CheckKind;
  floorId: string;
  /** Values for the text: a room name, a count, an entity. */
  vars: Record<string, string | number>;
  fix: CheckFix;
  /** Fixes that change the plan (all others only show the place). */
  changes: boolean;
}

const MARGIN = 0.08;

function distanceToEdges(p: Vec2, points: readonly Vec2[]): number {
  let best = Infinity;
  for (let i = 0; i < points.length; i++) {
    const a = points[i];
    const b = points[(i + 1) % points.length];
    const [dx, dz] = [b[0] - a[0], b[1] - a[1]];
    const len2 = dx * dx + dz * dz;
    const t = len2 > 0 ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / len2)) : 0;
    best = Math.min(best, Math.hypot(p[0] - (a[0] + dx * t), p[1] - (a[1] + dz * t)));
  }
  return best;
}

const boxOf = (points: readonly Vec2[]) => ({
  x0: Math.min(...points.map((p) => p[0])),
  x1: Math.max(...points.map((p) => p[0])),
  z0: Math.min(...points.map((p) => p[1])),
  z1: Math.max(...points.map((p) => p[1])),
});

/** Whether two rooms really share floor space (not only a wall): some point lies well inside both. */
export function roomsOverlap(a: Room, b: Room, step = 0.2): boolean {
  if (a.points.length < 3 || b.points.length < 3) return false;
  const [p, q] = [boxOf(a.points), boxOf(b.points)];
  const x0 = Math.max(p.x0, q.x0) + MARGIN;
  const x1 = Math.min(p.x1, q.x1) - MARGIN;
  const z0 = Math.max(p.z0, q.z0) + MARGIN;
  const z1 = Math.min(p.z1, q.z1) - MARGIN;
  if (x1 <= x0 || z1 <= z0) return false;
  for (let x = x0; x <= x1 + 1e-9; x += Math.min(step, x1 - x0 || step)) {
    for (let z = z0; z <= z1 + 1e-9; z += Math.min(step, z1 - z0 || step)) {
      const pt: Vec2 = [x, z];
      if (pointInPolygon(pt, a.points) && pointInPolygon(pt, b.points) && distanceToEdges(pt, a.points) > MARGIN && distanceToEdges(pt, b.points) > MARGIN) return true;
    }
  }
  return false;
}

/** Every field of an item that holds an entity id (a light, a power sensor, a contact …), lists of them included. */
function entityValues(item: object): string[] {
  const skip = new Set(["id", "type", "variant", "name", "icon", "picture", "vehicle", "room_id", "wall"]);
  const looks = (v: unknown): v is string => typeof v === "string" && /^[a-z_]+\.[a-z0-9_]+$/.test(v);
  return Object.entries(item).flatMap(([key, value]) => (skip.has(key) ? [] : Array.isArray(value) ? value.filter(looks) : looks(value) ? [value] : []));
}

/** The entities a piece of furniture links: the light, power sensor, doors, state, extra lights … */
const furnitureEntityFields = (m: Floor["furniture"][number]): string[] => entityValues(m);

/** A device that is off but still draws more than this (W) is listed as a standby eater. */
const STANDBY_W = 3;
const OFF = new Set(["off", "standby", "idle"]);

/** Devices of the plan that are off but draw power: their entity says off, the power sensor on their device still reads watts. */
function standbyFindings(hass: HomeAssistant, doc: Building, floor: Floor, out: CheckFinding[]): void {
  const id = doc.energy.tariff;
  const st = id ? hass.states[id] : undefined;
  const tariff = st ? { value: Number(st.state), unit: String(st.attributes.unit_of_measurement ?? "") } : null;
  const seen = new Set<string>();
  const check = (entity: string | null | undefined, show: CheckFix) => {
    if (!entity || entity === "none" || seen.has(entity)) return;
    seen.add(entity);
    const state = hass.states[entity]?.state;
    if (!state || !OFF.has(state) || entity.startsWith("light.")) return;
    const sensor = powerSensorFor(hass, entity);
    const w = sensor ? readPower(hass.states[sensor]) : null;
    if (w === null || w <= STANDBY_W) return;
    const cost = energyCost((w * 24 * 365) / 1000, tariff);
    out.push({ kind: "standby", floorId: floor.id, vars: { name: entityName(hass, entity), w: Math.round(w), cost: cost ? `${cost.value.toFixed(0)} ${cost.currency}` : `${Math.round((w * 24 * 365) / 1000)} kWh` }, fix: show, changes: false });
  };
  for (const m of floor.furniture) check(m.entity, { do: "show_furniture", furnitureId: m.id });
  for (const p of floor.placements) {
    const room = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([p.x, p.z], r.points));
    if (room) check(p.entity_id, { do: "show_room", roomId: room.id });
  }
}

/** Every finding of the plan check, floor by floor. A finding needs Home Assistant's states only where it says so. */
export function checkPlan(doc: Building, hass: HomeAssistant | undefined): CheckFinding[] {
  const out: CheckFinding[] = [];
  const areas = hass?.areas;
  const usedAreas = new Set(doc.floors.flatMap((f) => f.rooms.map((r) => r.area_id)).filter((a): a is string => !!a));
  for (const floor of doc.floors) {
    if (floor.layer) continue;
    // rooms without a Home Assistant area: an area of the same name is offered when it is free
    for (const room of floor.rooms) {
      if (room.area_id) continue;
      const same = Object.values(areas ?? {}).find((a) => a.name.trim().toLowerCase() === room.name.trim().toLowerCase() && !usedAreas.has(a.area_id));
      out.push(same ? { kind: "room_no_area", floorId: floor.id, vars: { room: room.name, area: same.name }, fix: { do: "set_area", roomId: room.id, areaId: same.area_id }, changes: true } : { kind: "room_no_area", floorId: floor.id, vars: { room: room.name, area: "" }, fix: { do: "show_room", roomId: room.id }, changes: false });
    }
    const lacking = unplacedAreas(doc, floor, areas);
    if (lacking.length) out.push({ kind: "areas_unplaced", floorId: floor.id, vars: { n: lacking.length, names: lacking.map((a) => a.name).join(", ") }, fix: { do: "add_area_rooms" }, changes: true });
    // devices of a room's area that are not in the plan yet (the main entity of each device, as the device list counts them)
    if (hass) {
      // what furniture, doors and windows are linked to, explicitly or found automatically through the area (a KNX blind, a lamp)
      const linkedFurniture = furnitureEntities(hass, [floor]);
      const linkedOpenings = openingEntities(hass, [floor]);
      for (const room of floor.rooms) {
        if (!room.area_id) continue;
        // placed: as a pin or lamp, or linked to a piece of furniture or a door or window of the room
        const here = placedInRoom(floor, room);
        for (const m of floor.furniture) if (pointInPolygon([m.x, m.z], room.points)) for (const id of furnitureEntityFields(m)) here.add(id);
        for (const o of floor.openings) {
          if (o.room_id !== room.id) continue;
          for (const id of entityValues(o)) here.add(id);
          for (const id of Object.values(linkedOpenings.get(o.id) ?? {})) if (typeof id === "string") here.add(id);
        }
        for (const m of floor.furniture) {
          const l = linkedFurniture.get(m.id);
          if (l && pointInPolygon([m.x, m.z], room.points)) for (const id of [l.entity, l.power]) if (typeof id === "string") here.add(id);
        }
        const ids = roomEntities(hass, room).filter((id) => isPlaceable(entityKind(hass, id)));
        const unplaced = groupByDevice(hass, ids)
          .map((g) => g.primary)
          .filter((id) => !here.has(id));
        if (unplaced.length) out.push({ kind: "devices_unplaced", floorId: floor.id, vars: { room: room.name, n: unplaced.length }, fix: { do: "place_devices", roomId: room.id, entityIds: unplaced }, changes: true });
      }
    }
    for (let i = 0; i < floor.rooms.length; i++) {
      for (let j = i + 1; j < floor.rooms.length; j++) {
        const [a, b] = [floor.rooms[i], floor.rooms[j]];
        if (roomsOverlap(a, b)) out.push({ kind: "rooms_overlap", floorId: floor.id, vars: { a: a.name, b: b.name }, fix: { do: "show_room", roomId: b.id }, changes: false });
      }
    }
    if (floor.openings.length) {
      const walls = generateWalls(floor.rooms, { exterior: doc.settings.wall_exterior, interior: doc.settings.wall_interior }, floor.walls ?? []).walls;
      for (const o of floor.openings) {
        const host = openingHost(o, floor.rooms, floor.walls ?? []);
        if (!host || !locateOpening(walls, o, host)) out.push({ kind: "opening_off_wall", floorId: floor.id, vars: { room: floor.rooms.find((r) => r.id === o.room_id)?.name ?? "" }, fix: { do: "show_opening", openingId: o.id }, changes: false });
      }
    }
    if (hass) standbyFindings(hass, doc, floor, out);
    // links to entities Home Assistant no longer knows (renamed or removed)
    if (hass && Object.keys(hass.states).length) {
      const gone = floor.placements.map((p) => p.entity_id).filter((id) => !hass.states[id]);
      if (gone.length) out.push({ kind: "entity_missing", floorId: floor.id, vars: { n: gone.length, ids: gone.slice(0, 3).join(", ") }, fix: { do: "remove_placements", entityIds: gone }, changes: true });
      for (const m of floor.furniture) {
        const missing = furnitureEntityFields(m).filter((id) => id !== "none" && !hass.states[id]);
        if (missing.length && !(isLamp(m.type) && !m.entity)) out.push({ kind: "furniture_entity_missing", floorId: floor.id, vars: { id: missing[0] }, fix: { do: "show_furniture", furnitureId: m.id }, changes: false });
      }
    }
  }
  // low batteries of the plan's devices, by floor
  if (hass) {
    for (const b of planBatteries(hass, doc)) {
      if (b.level >= LOW_BATTERY) break;
      out.push({ kind: "battery_low", floorId: b.floorId, vars: { name: entityName(hass, b.entity), level: Math.round(b.level) }, fix: b.roomId ? { do: "show_room", roomId: b.roomId } : { do: "show_floor" }, changes: false });
    }
  }
  return out;
}
