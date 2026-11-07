// A card for a few chosen rooms: the plan reduced to those rooms with what stands in them (their furniture, devices, doors and windows),
// no other rooms, no outdoor areas, no roof.

import { pointInPolygon, type Building, type Floor, type Furniture, type Placement, type Room } from "./model.ts";

/** The building as the chosen rooms alone; floors without a chosen room are dropped. The ids that match no room are ignored. */
export function roomsOnly(building: Building, ids: readonly string[]): Building {
  const wanted = new Set(ids);
  const floors: Floor[] = [];
  for (const floor of building.floors) {
    const rooms: Room[] = floor.rooms.filter((r) => wanted.has(r.id));
    if (!rooms.length) continue;
    const inside = (x: number, z: number) => rooms.some((r) => r.points.length >= 3 && pointInPolygon([x, z], r.points));
    const keep = new Set(rooms.map((r) => r.id));
    floors.push({
      ...floor,
      rooms,
      openings: floor.openings.filter((o) => keep.has(o.room_id)),
      furniture: floor.furniture.filter((f: Furniture) => inside(f.x, f.z)),
      placements: floor.placements.filter((p: Placement) => inside(p.x, p.z)),
      walls: (floor.walls ?? []).filter((w) => inside((w.a[0] + w.b[0]) / 2, (w.a[1] + w.b[1]) / 2)),
      outdoor: [],
    });
  }
  const roof = { ...building.settings.roof, type: "none" as const, sections: [], solar: [] };
  return { ...building, floors, settings: { ...building.settings, roof } };
}
