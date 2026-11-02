// The device list of a room: the entities of its area to place, the rows with their pins, and the room's climate sensors.

import { html, nothing, type TemplateResult } from "lit";
import { CLIMATE_CLASSES, entityAreaId, entityKind, entityName, groupByDevice, isPlaceable, isRoomClimateSensor, kindOf, otherAreaEntities, roomClimateSensors, unassignedEntities, type ClimateKey, roomEntities } from "../../../devices.ts";
import { iconPath } from "../../../icons.ts";
import { pointInPolygon, type Room } from "../../../model.ts";
import { entityOptions, isNumeric } from "../entities.ts";
import { deviceIcon, entityField, hint } from "../fields.ts";
import type { EditorHost } from "../host.ts";
import { matchesQuery, placedElsewhere, placedInRoom, rankedBy, takeFirst, withToggled } from "../ops/device-list.ts";
import type { SideState } from "../side-state.ts";

/** What the list makes the editor do. */
export interface DeviceListActions {
  select(entityId: string): void;
  place(entityIds: string[]): void;
  remove(entityId: string): void;
  patchRoom(patch: Partial<Room>): void;
  spreadLights(room: Room): void;
  confirm(text: string): boolean;
}

/** How many entities of other areas are listed at once; the search narrows the rest. */
const LIST_LIMIT = 50;

type Row = (id: string, extra?: boolean, areaName?: string) => TemplateResult;

/** One of the little buttons at the end of a row that switches a list of the room on or off for this entity. */
function roomFlag(host: EditorHost, list: readonly string[], id: string, key: "hidden" | "no_state" | "panel", symbols: [string, string], titles: [string, string], actions: DeviceListActions): TemplateResult {
  const on = list.includes(id);
  return html`<button class="nf-pin ${on ? "nf-pin-on" : ""}" aria-pressed=${on} title=${host.t((on ? titles[0] : titles[1]) as never)} @click=${() => actions.patchRoom({ [key]: withToggled(list, id) })}>${on ? symbols[0] : symbols[1]}</button>`;
}

/** The row of an entity: its name (to select its pin), the room flags, and a button to place or remove it. */
function rowFor(host: EditorHost, room: Room, here: Set<string>, elsewhere: Map<string, string>, areaName: string | undefined, actions: DeviceListActions): Row {
  const [hidden, noState, pinned] = [room.hidden ?? [], room.no_state ?? [], room.panel ?? []];
  return (id, extra = false, nameArea = areaName) => {
    const placed = here.has(id);
    const other = placed ? undefined : elsewhere.get(id);
    const isHidden = hidden.includes(id);
    const icon = deviceIcon(host, id);
    return html`<div class="nf-row nf-dev-row ${extra ? "nf-dev-extra" : ""} ${isHidden ? "nf-dev-hidden" : ""}">
      <button class="nf-dev-name ${placed ? "" : "nf-muted"}" ?disabled=${!placed} @click=${() => actions.select(id)}>
        ${icon
          ? html`<ha-icon class="nf-dev-icon" style="--mdc-icon-size:16px" .icon=${icon}></ha-icon>`
          : html`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${iconPath((host.hass ? entityKind(host.hass, id) : kindOf(id)) ?? "sensor")} /></svg>`}
        <span>${entityName(host.hass, id, nameArea)}${other ? html`<small class="nf-muted"> · ${host.t("devices_placed_in", { room: other })}</small>` : nothing}</span>
      </button>
      ${host.admin ? roomFlag(host, hidden, id, "hidden", ["🙈", "👁"], ["panel_unhide", "panel_hide"], actions) : nothing}
      ${host.admin && !isHidden ? roomFlag(host, noState, id, "no_state", ["∅", "Aa"], ["panel_state_show", "panel_state_hide"], actions) : nothing}
      ${host.admin && !placed ? roomFlag(host, pinned, id, "panel", ["★", "☆"], ["panel_unpin", "panel_pin"], actions) : nothing}
      ${host.admin
        ? placed
          ? html`<button class="nf-link" @click=${() => actions.remove(id)}>${host.t("devices_remove")}</button>`
          : html`<button class="nf-link" @click=${() => actions.place([id])}>${host.t("devices_place")}</button>`
        : nothing}
    </div>`;
  };
}

/** Entities of other areas, or without an area, as extra rows (computed only when shown). */
function extras(host: EditorHost, state: SideState, room: Room, row: Row, source: "other" | "none"): TemplateResult {
  const { hass } = host;
  if (!hass) return html``;
  const narrow = (n: number) => (n > 0 ? hint(host.t("devices_narrow", { n })) : nothing);
  const none = hint(host.t("devices_none"));
  const query = state.deviceQuery;
  if (source === "other") {
    const areas = otherAreaEntities(hass, room.area_id).map((a) => ({ ...a, ids: a.ids.filter((id) => matchesQuery(query, `${entityName(hass, id, a.name)} ${id} ${a.name}`)) }));
    const { taken, left } = takeFirst(areas, LIST_LIMIT);
    const blocks = areas.map((a, i) => (taken[i].length > 0 ? html`<div class="nf-dev-area">${a.name}</div>${taken[i].map((id) => row(id, false, a.name))}` : nothing));
    return taken.some((ids) => ids.length > 0) ? html`<div class="nf-room-list">${blocks}</div>${narrow(left)}` : none;
  }
  const ids = unassignedEntities(hass).filter((id) => matchesQuery(query, `${entityName(hass, id)} ${id} `));
  return ids.length > 0 ? html`<div class="nf-room-list">${ids.slice(0, LIST_LIMIT).map((id) => row(id))}</div>${narrow(ids.length - Math.min(ids.length, LIST_LIMIT))}` : none;
}

/** The entities of the room's area, grouped by device with the device's main entity first. */
function areaList(host: EditorHost, state: SideState, room: Room, row: Row, here: Set<string>, areaName: string | undefined, actions: DeviceListActions): TemplateResult {
  const { hass } = host;
  const ids = hass ? roomEntities(hass, room).filter((id) => isPlaceable(entityKind(hass, id))) : [];
  if (!room.area_id) return hint(host.t("devices_none_area"));
  if (ids.length === 0) return hint(host.t("devices_none"));
  const groups = hass ? groupByDevice(hass, ids) : [];
  // the automatic placement only takes the main entity of each device
  const unplaced = groups.map((g) => g.primary).filter((id) => !here.has(id));
  const query = state.deviceQuery;
  const ceilingLights = (host.floor?.placements ?? []).filter((p) => kindOf(p.entity_id) === "light" && (p.mount ?? "ceiling") === "ceiling" && pointInPolygon([p.x, p.z], room.points)).length;
  const search = html`<input class="nf-search" type="search" placeholder=${host.t("devices_search")} .value=${query} @input=${(e: Event) => (state.deviceQuery = (e.target as HTMLInputElement).value)} />`;
  const matches = (id: string) => matchesQuery(query, entityName(hass, id, areaName), id);
  const group = (g: (typeof groups)[number]) => {
    const others = g.others.filter(matches);
    const open = state.isUnfolded(g.primary) || (!!query.trim() && others.length > 0);
    if (!matches(g.primary) && others.length === 0) return nothing;
    return html`${row(g.primary)}
      ${g.others.length > 0 ? html`<button class="nf-more" @click=${() => state.toggleUnfolded(g.primary)}>${open ? host.t("devices_less") : host.t("devices_more", { n: g.others.length })}</button>` : nothing}
      ${open ? (query.trim() ? others : g.others).map((id) => row(id, true)) : nothing}`;
  };
  const placeAll = () => actions.confirm(host.t("devices_place_all_confirm", { n: unplaced.length })) && actions.place(unplaced);
  return html`${host.admin && ceilingLights >= 2 ? html`<button class="nf-btn nf-wide-btn" @click=${() => actions.spreadLights(room)}>${host.t("lights_spread")}</button>` : nothing}
    ${ids.length > 8 ? search : nothing}
    <div class="nf-room-list">${groups.map(group)}</div>
    ${host.admin && unplaced.length > 1 ? html`<button class="nf-link nf-place-all" @click=${placeAll}>${host.t("devices_place_all_n", { n: unplaced.length })}</button>` : nothing}
    ${hint(host.t("devices_hint"))}`;
}

/** The "Devices" section of a room. */
export function renderDeviceList(host: EditorHost, state: SideState, room: Room, actions: DeviceListActions): TemplateResult {
  const { hass } = host;
  const areaName = room.area_id ? hass?.areas?.[room.area_id]?.name : undefined;
  const here = placedInRoom(host.floor, room);
  const row = rowFor(host, room, here, placedElsewhere(host.doc, room), areaName, actions);
  const source = host.admin ? state.deviceSource : "area";
  const areaCount = hass ? groupByDevice(hass, roomEntities(hass, room).filter((id) => isPlaceable(entityKind(hass, id)))).length : 0;
  const sources: ["area" | "other" | "none", string][] = [["area", `${host.t("devices_src_area")}${areaCount > 0 ? ` (${areaCount})` : ""}`], ["other", host.t("devices_src_other")], ["none", host.t("devices_src_none")]];
  const search = html`<input class="nf-search" type="search" placeholder=${host.t("devices_search")} .value=${state.deviceQuery} @input=${(e: Event) => (state.deviceQuery = (e.target as HTMLInputElement).value)} />`;
  return html`<section>
    <h3>${host.t("devices")}</h3>
    ${hint(host.t("devices_panel_hint"))}
    ${host.admin ? html`<div class="nf-seg nf-dev-source">${sources.map(([s, label]) => html`<button aria-pressed=${source === s} @click=${() => (state.deviceSource = s)}>${label}</button>`)}</div>` : nothing}
    ${source !== "area" ? html`${search}${extras(host, state, room, row, source)}` : areaList(host, state, room, row, here, areaName, actions)}
  </section>`;
}

/** A room's temperature, humidity and CO2 sensors: chosen, or found automatically. */
export function renderRoomClimate(host: EditorHost, room: Room, patch: (patch: Partial<Room>) => void): TemplateResult | typeof nothing {
  const { hass } = host;
  if (!hass) return nothing;
  const chosen = !!room.climate && Object.values(room.climate).some((x) => x != null);
  const change = (key: ClimateKey, value: string | null) => {
    const next = { ...(room.climate ?? {}), [key]: value };
    patch({ climate: Object.values(next).every((x) => x == null) ? null : next });
  };
  const field = (key: ClimateKey, label: string) => {
    const found = roomClimateSensors(hass, host.floor ?? null, { ...room, climate: null }, key);
    const wanted = entityOptions(hass, (id) => isNumeric(id) && hass.states[id]?.attributes.device_class === CLIMATE_CLASSES[key]);
    // the room's own sensors first, then the others; device temperatures (a printer, a heat pump) come last
    const options = rankedBy(wanted, (id) => (entityAreaId(hass, id) === room.area_id ? 0 : 1) + (isRoomClimateSensor(hass, id) ? 0 : 2));
    return entityField(host, label, room.climate?.[key] ?? null, found[0] ?? null, options, (v) => change(key, v));
  };
  return html`<details class="nf-points" ?open=${chosen}>
    <summary>${host.t("climate")}</summary>
    <div class="nf-form">${field("temperature", host.t("climate_temperature"))} ${field("humidity", host.t("climate_humidity"))} ${field("co2", host.t("climate_co2"))}</div>
    ${hint(host.t("climate_hint"))}
  </details>`;
}
