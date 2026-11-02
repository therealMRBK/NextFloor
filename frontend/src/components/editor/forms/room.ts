// The side panel's room part: the list of rooms, and the form of one room with its corners, packages and spot grid.

import { html, nothing, type TemplateResult } from "lit";
import { formatNumber, type I18nKey } from "../../../i18n.ts";
import { bounds, DEFAULT_PAINT_INSIDE, FLOOR_MATERIALS, isAxisRect, polygonArea, type Floor, type FurnitureType, type Room } from "../../../model.ts";
import { PACKAGES, type PackageId } from "../../../packages.ts";
import { entityOptions } from "../entities.ts";
import { colorField, entityField, hint, numberField, selectField, textField } from "../fields.ts";
import type { EditorHost } from "../host.ts";
import type { RectField } from "../ops/rooms.ts";
import { SPOT_TYPES, spotCount, spotItems } from "../ops/spots.ts";
import type { SideState } from "../side-state.ts";
import { formatArea } from "../../../units.ts";
import { roomSpeaker } from "../../../live/announce.ts";

/** What the room form makes the editor do, and the parts of it that the editor still draws itself. */
export interface RoomActions {
  select(roomId: string): void;
  patch(patch: Partial<Room>): void;
  setArea(areaId: string): void;
  setRect(field: RectField, value: number): void;
  setCorner(index: number, axis: 0 | 1, value: number): void;
  removeCorner(index: number): void;
  duplicate(): void;
  remove(): void;
  rememberView(): void;
  applyPackage(pkg: PackageId): void;
  openSpots(): void;
  placeSpots(): void;
  /** The lock button of the room (it shows the lock on the whole plan). */
  lockButton: TemplateResult | typeof nothing;
  /** The editor's own sections of the form: heights of the walls, and the climate sensors. */
  wallHeights: TemplateResult | typeof nothing;
  climate: TemplateResult | typeof nothing;
  /** The selected corner of this room, if any. */
  corner: number | null;
}

/** All rooms of the floor with their size, to pick one. */
export function renderRoomList(host: EditorHost, floor: Floor, actions: Pick<RoomActions, "select">): TemplateResult | typeof nothing {
  if (floor.rooms.length === 0) return nothing;
  return html`<section>
    <h3>${host.t("rooms")}</h3>
    <div class="nf-room-list">
      ${floor.rooms.map(
        (room) => html`<button class="nf-row" @click=${() => actions.select(room.id)}>
          <span>${room.name}</span><span class="nf-muted">${formatArea(host.hass, polygonArea(room.points))}</span>
        </button>`,
      )}
    </div>
  </section>`;
}

/** The planning form of a spot grid: type, columns, rows, the light to follow, and how many spots that makes. */
function spotForm(host: EditorHost, state: SideState, room: Room, actions: RoomActions): TemplateResult {
  const draft = state.spots!;
  const change = (patch: Partial<typeof draft>) => (state.spots = { ...draft, ...patch });
  const count = spotItems(room, draft).length;
  const lights = entityOptions(host.hass, (id) => /^(light|switch|input_boolean)\./.test(id));
  const types = SPOT_TYPES.map((type): [FurnitureType, string] => [type, host.t(`furn_${type}` as I18nKey)]);
  return html`<div class="nf-form nf-spot-form">
    ${selectField(host, host.t("spots_type"), draft.type, types, (type) => change({ type }), { wide: true })}
    ${numberField(host, host.t("spots_cols"), draft.cols, (v) => change({ cols: spotCount(v) }), 1, 1)}
    ${numberField(host, host.t("spots_rows"), draft.rows, (v) => change({ rows: spotCount(v) }), 1, 1)}
    ${entityField(host, host.t("furn_entity_light"), draft.entity, undefined, lights, (v) => change({ entity: v === "none" ? null : v }))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn nf-primary" ?disabled=${count === 0} @click=${() => actions.placeSpots()}>${host.t("spots_add", { n: count })}</button>
      <button class="nf-btn" @click=${() => (state.spots = null)}>${host.t("cancel")}</button>
    </div>
    ${hint(host.t("spots_hint"), "nf-wide")}
  </div>`;
}

/** The corners of a room as number pairs. They are unfolded when the room is no rectangle, so the shape can be typed in. */
function corners(host: EditorHost, room: Room, rectangle: boolean, actions: RoomActions): TemplateResult {
  return html`<details class="nf-points" ?open=${!rectangle}>
    <summary>${host.t("points")} (${room.points.length})</summary>
    ${room.points.map(
      (point, i) => html`<div class="nf-point ${i === actions.corner ? "nf-point-sel" : ""}">
        <span class="nf-muted">${i + 1}</span>
        ${numberField(host, host.t("x"), point[0], (v) => actions.setCorner(i, 0, v))} ${numberField(host, host.t("z"), point[1], (v) => actions.setCorner(i, 1, v))}
        ${host.admin ? html`<button class="nf-btn" title=${host.t("delete_point")} ?disabled=${room.points.length <= 3} @click=${() => actions.removeCorner(i)}>×</button>` : nothing}
      </div>`,
    )}
  </details>`;
}

/** The room's own ceiling height (a low bathroom on a high floor); at the floor height or above it is the floor's again. */
function ceilingField(host: EditorHost, room: Room, floor: Floor, actions: RoomActions): TemplateResult {
  const t = host.t;
  const set = (v: number) => actions.patch({ ceiling: v >= floor.height - 0.005 ? null : Math.max(1, Math.round(v * 1000) / 1000) });
  return html`${numberField(host, t("room_ceiling"), room.ceiling ?? floor.height, set, 0.01, 1)}
    ${room.ceiling != null ? html`<button class="nf-btn nf-field-btn" ?disabled=${!host.admin} @click=${() => actions.patch({ ceiling: null })}>${t("height_auto")}</button>` : nothing}
    ${hint(t("room_ceiling_hint"), "nf-wide")}
    ${room.ceiling != null && room.ceiling > floor.height + 0.005
      ? html`<p class="nf-sub nf-warn nf-wide">${t("room_ceiling_above_floor", { ceiling: formatNumber(host.hass, room.ceiling, 2), floor: formatNumber(host.hass, floor.height, 2) })}</p>`
      : nothing}`;
}

/** Announcements in the room: its speaker (automatic, chosen, or none) and a quiet time. */
function announceFields(host: EditorHost, room: Room, floor: Floor | null, actions: RoomActions): TemplateResult {
  const t = host.t;
  if (!host.hass) return html``;
  const auto = roomSpeaker(host.hass, floor, { ...room, announce_speaker: null });
  const speakers = entityOptions(host.hass, (id) => /^(media_player|assist_satellite)\./.test(id) || (id.startsWith("notify.") && id.endsWith("_announce")));
  const quiet = room.announce_quiet ?? null;
  // the first time typed fills the other with the usual night (20:00–07:00), so a half quiet time is never stored
  const setQuiet = (part: "from" | "to", value: string) => {
    if (!value) return actions.patch({ announce_quiet: null });
    actions.patch({ announce_quiet: { from: quiet?.from ?? "20:00", to: quiet?.to ?? "07:00", [part]: value } });
  };
  return html`${entityField(host, t("room_announce_speaker"), room.announce_speaker ?? null, auto, speakers, (v) => actions.patch({ announce_speaker: v }))}
    <div class="nf-field nf-wide nf-quiet-time">
      ${t("room_announce_quiet")}
      <span>
        <input type="time" .value=${quiet?.from ?? ""} ?disabled=${!host.admin} aria-label=${`${t("room_announce_quiet")} 1`} @change=${(e: Event) => setQuiet("from", (e.target as HTMLInputElement).value)} />
        –
        <input type="time" .value=${quiet?.to ?? ""} ?disabled=${!host.admin} aria-label=${`${t("room_announce_quiet")} 2`} @change=${(e: Event) => setQuiet("to", (e.target as HTMLInputElement).value)} />
        ${quiet ? html`<button class="nf-btn nf-field-btn" ?disabled=${!host.admin} @click=${() => actions.patch({ announce_quiet: null })}>×</button>` : nothing}
      </span>
    </div>
    ${hint(t("room_announce_hint"), "nf-wide")}`;
}

/** The form of the selected room. */
export function renderRoomForm(host: EditorHost, state: SideState, room: Room, actions: RoomActions): TemplateResult {
  const t = host.t;
  const rectangle = isAxisRect(room.points);
  const box = bounds(room.points);
  const areas = Object.values(host.hass?.areas ?? {}).sort((a, b) => a.name.localeCompare(b.name));
  const areaChoices: [string, string][] = [["", t("no_area")], ...areas.map((a): [string, string] => [a.area_id, a.name])];
  const materials = FLOOR_MATERIALS.map((m): [string, string] => [m, t(`mat_${m}` as I18nKey)]);
  const packageButton = (pkg: PackageId) =>
    html`<button class="nf-btn" @click=${() => actions.applyPackage(pkg)}><b>${t(`pkg_${pkg}` as I18nKey)}</b><span>${t(`pkg_${pkg}_desc` as I18nKey)}</span></button>`;
  return html`<section>
    <div class="nf-h3row"><h3>${t("room")}</h3>${actions.lockButton}</div>
    <div class="nf-form">
      ${textField(host, t("room_name"), room.name, (v) => actions.patch({ name: v }), { wide: true })}
      ${selectField(host, t("area"), room.area_id ?? "", areaChoices, (id) => actions.setArea(id), { wide: true })}
      ${selectField(host, t("material"), room.floor_material, materials, (floor_material) => actions.patch({ floor_material }), { wide: true })}
      ${colorField(host, t("wall_paint_room"), room.wall_paint, host.doc.settings.wall_paint_inside ?? DEFAULT_PAINT_INSIDE, (wall_paint) => actions.patch({ wall_paint }))}
      ${host.floor ? ceilingField(host, room, host.floor, actions) : nothing}
      ${entityField(host, t("floor_heating"), room.floor_heating ?? null, undefined, entityOptions(host.hass, (id) => /^(climate|switch|valve|binary_sensor|input_boolean)\./.test(id)), (v) => actions.patch({ floor_heating: v && v !== "none" ? v : null }))}
      ${room.floor_heating ? hint(t("floor_heating_hint"), "nf-wide") : nothing}
      ${announceFields(host, room, host.floor ?? null, actions)}
      ${rectangle
        ? html`${numberField(host, t("x"), box.x0, (v) => actions.setRect("x", v))} ${numberField(host, t("z"), box.z0, (v) => actions.setRect("z", v))}
          ${numberField(host, t("width"), box.x1 - box.x0, (v) => actions.setRect("w", v), 0.01, 0.05)}
          ${numberField(host, t("depth"), box.z1 - box.z0, (v) => actions.setRect("d", v), 0.01, 0.05)}`
        : nothing}
    </div>
    <div class="nf-actions">
      <button class="nf-btn" title=${t("room_start_view_hint")} ?disabled=${!host.admin} @click=${() => actions.rememberView()}>${t("room_start_view")}</button>
      ${room.start_view ? html`<button class="nf-btn" title=${t("room_start_view_reset")} ?disabled=${!host.admin} @click=${() => actions.patch({ start_view: null })}>↺</button>` : nothing}
    </div>
    ${actions.wallHeights} ${actions.climate} ${corners(host, room, rectangle, actions)}
    ${host.admin
      ? html`<div class="nf-actions">
          <button class="nf-btn nf-primary" @click=${() => (state.packages = !state.packages)}>${t("pkg_open")}</button>
          <button class="nf-btn" @click=${() => actions.openSpots()}>${t("spots_place")}</button>
          <button class="nf-btn" @click=${() => actions.duplicate()}>${t("duplicate")}</button>
          <button class="nf-btn nf-danger" @click=${() => actions.remove()}>${t("delete")}</button>
        </div>`
      : nothing}
    ${state.spots ? spotForm(host, state, room, actions) : nothing}
    ${state.packages ? html`<div class="nf-packages">${PACKAGES.map(packageButton)}${hint(t("pkg_hint"))}</div>` : nothing}
  </section>`;
}
