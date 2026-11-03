// Two states of the plan compared: what was added, removed, moved or renamed, floor by floor. Items are matched by their id, so a
// room drawn anew counts as removed and added, while a room dragged or reshaped counts as changed.

import { polygonArea, type Building, type Floor } from "../../../model.ts";

export type DiffKind = "floor_added" | "floor_removed" | "room_added" | "room_removed" | "room_renamed" | "room_reshaped" | "opening_added" | "opening_removed" | "furniture_added" | "furniture_removed" | "furniture_moved" | "device_added" | "device_removed" | "device_moved";

export interface DiffEntry {
  kind: DiffKind;
  /** The floor's name in the newer plan (in the older one for a removed floor). */
  floor: string;
  /** What it is about: a room's name, a piece's type, an entity. */
  name: string;
  /** A second name: the old name of a renamed room, the area change of a reshaped one (m²). */
  detail?: string | number;
}

const MOVE = 0.05;
const same = (a: readonly [number, number][], b: readonly [number, number][]) => a.length === b.length && a.every((p, i) => Math.abs(p[0] - b[i][0]) < 1e-3 && Math.abs(p[1] - b[i][1]) < 1e-3);
const byId = <T extends { id: string }>(list: readonly T[]) => new Map(list.map((x) => [x.id, x]));

function floorDiff(was: Floor, now: Floor, out: DiffEntry[], roomName: (id: string) => string): void {
  const floor = now.name;
  const [oldRooms, newRooms] = [byId(was.rooms), byId(now.rooms)];
  for (const r of now.rooms) {
    const before = oldRooms.get(r.id);
    if (!before) out.push({ kind: "room_added", floor, name: r.name });
    else {
      if (before.name !== r.name) out.push({ kind: "room_renamed", floor, name: r.name, detail: before.name });
      if (!same(before.points, r.points)) out.push({ kind: "room_reshaped", floor, name: r.name, detail: Math.round((polygonArea(r.points) - polygonArea(before.points)) * 10) / 10 });
    }
  }
  for (const r of was.rooms) if (!newRooms.has(r.id)) out.push({ kind: "room_removed", floor, name: r.name });
  const [oldOpenings, newOpenings] = [byId(was.openings), byId(now.openings)];
  for (const o of now.openings) if (!oldOpenings.has(o.id)) out.push({ kind: "opening_added", floor, name: o.type, detail: roomName(o.room_id) });
  for (const o of was.openings) if (!newOpenings.has(o.id)) out.push({ kind: "opening_removed", floor, name: o.type, detail: roomName(o.room_id) });
  const [oldItems, newItems] = [byId(was.furniture), byId(now.furniture)];
  for (const m of now.furniture) {
    const before = oldItems.get(m.id);
    if (!before) out.push({ kind: "furniture_added", floor, name: m.name || m.type });
    else if (Math.hypot(m.x - before.x, m.z - before.z) > MOVE || Math.abs(m.rotation - before.rotation) > 1 || Math.abs(m.w - before.w) > MOVE || Math.abs(m.d - before.d) > MOVE)
      out.push({ kind: "furniture_moved", floor, name: m.name || m.type });
  }
  for (const m of was.furniture) if (!newItems.has(m.id)) out.push({ kind: "furniture_removed", floor, name: m.name || m.type });
  const [oldPins, newPins] = [new Map(was.placements.map((p) => [p.entity_id, p])), new Map(now.placements.map((p) => [p.entity_id, p]))];
  for (const p of now.placements) {
    const before = oldPins.get(p.entity_id);
    if (!before) out.push({ kind: "device_added", floor, name: p.entity_id });
    else if (Math.hypot(p.x - before.x, p.z - before.z) > MOVE) out.push({ kind: "device_moved", floor, name: p.entity_id });
  }
  for (const p of was.placements) if (!newPins.has(p.entity_id)) out.push({ kind: "device_removed", floor, name: p.entity_id });
}

/** Everything that differs between an older plan and the current one. */
export function diffBuildings(older: Building, current: Building): DiffEntry[] {
  const out: DiffEntry[] = [];
  const oldFloors = byId(older.floors);
  const rooms = new Map([...older.floors, ...current.floors].flatMap((f) => f.rooms.map((r) => [r.id, r.name] as const)));
  const roomName = (id: string) => rooms.get(id) ?? "";
  for (const f of current.floors) {
    const before = oldFloors.get(f.id);
    if (!before) out.push({ kind: "floor_added", floor: f.name, name: f.name });
    else floorDiff(before, f, out, roomName);
  }
  const now = new Set(current.floors.map((f) => f.id));
  for (const f of older.floors) if (!now.has(f.id)) out.push({ kind: "floor_removed", floor: f.name, name: f.name });
  return out;
}
