// The room buttons of the dashboard card: one chip per room, grouped by floor when the whole house shows.

import type { Building } from "../model.ts";

export interface RoomButton {
  id: string;
  name: string;
  floorId: string;
}

export interface RoomButtonGroup {
  floorId: string;
  floorName: string;
  rooms: RoomButton[];
}

/** The rooms to offer: those of the shown floor, or of every floor (in the house view). Floors without rooms are left out. */
export function roomButtons(building: Building | null | undefined, floorId: string | null): RoomButtonGroup[] {
  if (!building) return [];
  return building.floors
    .filter((f) => floorId === null || f.id === floorId)
    // a room without a name has no button, like it has no label in the 3D view (#152)
    .map((f) => ({ floorId: f.id, floorName: f.name, rooms: f.rooms.filter((r) => (r.name ?? "").trim()).map((r) => ({ id: r.id, name: r.name, floorId: f.id })) }))
    .filter((g) => g.rooms.length > 0);
}
