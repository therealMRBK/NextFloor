// The objects of a room: furniture, lamps and devices standing inside it, as a list to pick from (a click selects the item
// exactly like a click in the plan, which is the way to reach small or covered pieces).

import { html, nothing, type TemplateResult } from "lit";
import { furnitureName } from "../../../furniture-names.ts";
import { pointInPolygon, type Floor, type Furniture, type Room } from "../../../model.ts";
import type { EditorHost } from "../host.ts";

/** What the list makes the editor do. */
export interface RoomObjectActions {
  select(furnitureId: string): void;
}

/** The furniture of a floor whose centre lies inside the room, in a stable order: by name, then by id. */
export function objectsInRoom(floor: Floor, room: Room, label: (f: Furniture) => string): Furniture[] {
  return floor.furniture
    .filter((f) => pointInPolygon([f.x, f.z], room.points))
    .sort((a, b) => label(a).localeCompare(label(b), undefined, { numeric: true }) || a.id.localeCompare(b.id));
}

/** The name an item is listed under: its own name, or the name of its type. */
export function objectLabel(host: EditorHost, f: Furniture): string {
  return f.name?.trim() || furnitureName(host.hass, f.type);
}

/** Whether an item has a Home Assistant entity linked (the badge in the list). */
export const isLinked = (f: Furniture): boolean => !!f.entity || !!f.state_entity;

/** The list of the room's objects, or nothing when the room has none. */
export function renderRoomObjects(host: EditorHost, floor: Floor | null, room: Room, actions: RoomObjectActions): TemplateResult | typeof nothing {
  if (!floor) return nothing;
  const items = objectsInRoom(floor, room, (f) => objectLabel(host, f));
  if (items.length === 0) return nothing;
  return html`<h3>${host.t("room_objects")} <span class="nf-muted">(${items.length})</span></h3>
    <div class="nf-room-list">
      ${items.map(
        (f) => html`<div class="nf-row nf-dev-row">
          <button class="nf-dev-name" title=${f.id} @click=${() => actions.select(f.id)}>
            <span>${objectLabel(host, f)}${f.name?.trim() ? html`<small class="nf-muted"> · ${furnitureName(host.hass, f.type)}</small>` : nothing}</span>
          </button>
          ${isLinked(f) ? html`<span class="nf-muted" title=${host.t("room_objects_linked")} aria-label=${host.t("room_objects_linked")}>⚡</span>` : nothing}
          ${f.locked ? html`<span class="nf-muted" aria-label=${host.t("room_objects_locked")} title=${host.t("room_objects_locked")}>🔒</span>` : nothing}
        </div>`,
      )}
    </div>`;
}
