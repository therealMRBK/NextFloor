// The side panel's floor part: the floors of the house as chips, and the form of the selected floor.

import { html, nothing, type TemplateResult } from "lit";
import type { Floor } from "../../../model.ts";
import type { HassFloor } from "../../../types.ts";
import { checkField, hint, numberField, selectField, textField } from "../fields.ts";
import type { EditorHost } from "../host.ts";
import { freeHaFloors, linkableHaFloors, unplacedAreas } from "../ops/floors.ts";
import type { SideState } from "../side-state.ts";

/** What the floor form makes the editor do. */
export interface FloorActions {
  openFloor(id: string): void;
  addFloor(from: HassFloor | null): void;
  moveFloor(direction: -1 | 1): void;
  deleteFloor(): void;
  /** Copies the open floor on top of the house, with what the choices take along. */
  duplicateFloor(options: { furniture: boolean; devices: boolean; outdoor: boolean }): void;
  addAreaRooms(floor: Floor): void;
  closeGaps(): void;
  /** Moves everything on the floor (or house) by the typed distance. */
  shift(): void;
  turn(): void;
  /** Makes the editor's current 3D camera the one this floor opens with. */
  rememberView(): void;
}

/** The chips of the floors, top floor first, and the button that adds one: straight away, or after choosing a floor of Home Assistant. */
function floorChips(host: EditorHost, state: SideState, floorActions: FloorActions, selected: string | null): TemplateResult {
  const free = freeHaFloors(host.doc, host.hass?.floors);
  const addClicked = () => (free.length > 0 ? (state.floorMenu = !state.floorMenu) : floorActions.addFloor(null));
  return html`<div class="nf-floor-list">
      ${[...host.doc.floors].reverse().map((f) => html`<button class="nf-chip" aria-pressed=${f.id === selected} @click=${() => floorActions.openFloor(f.id)}>${f.name}</button>`)}
      ${host.admin ? html`<button class="nf-btn" aria-expanded=${state.floorMenu} @click=${addClicked}>+ ${host.t("add_floor")}</button>` : nothing}
    </div>
    ${host.admin && state.floorMenu
      ? html`<div class="nf-floor-menu">
          ${hint(host.t("floor_from_ha"))}
          ${free.map((f) => html`<button class="nf-btn" @click=${() => floorActions.addFloor(f)}>${f.name}${f.level != null ? html` <span class="nf-sub">· ${host.t("level", { n: f.level })}</span>` : nothing}</button>`)}
          <button class="nf-btn" @click=${() => floorActions.addFloor(null)}>${host.t("floor_empty")}</button>
        </div>`
      : nothing}`;
}

/** The typed move of the whole floor, its turn, and the floor's own start view. */
function shiftRow(host: EditorHost, state: SideState, floorActions: FloorActions, floor: Floor): TemplateResult {
  const axis = (label: string, value: number, set: (v: number) => void) =>
    html`<input type="number" step="0.05" .value=${String(value)} aria-label=${label} @change=${(e: Event) => set(Number((e.target as HTMLInputElement).value) || 0)} />`;
  return html`<div class="nf-field nf-wide nf-shift" title=${host.t("floor_shift_hint")}>
    <span>${host.t("floor_shift")}</span>
    ${axis("X", state.shiftX, (v) => (state.shiftX = v))} ${axis("Z", state.shiftZ, (v) => (state.shiftZ = v))}
    <button class="nf-btn" ?disabled=${!state.shiftX && !state.shiftZ} @click=${() => floorActions.shift()}>${host.t("floor_shift_apply")}</button>
    <button class="nf-btn" title=${host.t("floor_turn_hint")} @click=${() => floorActions.turn()}>${host.t("floor_turn")}</button>
    <button class="nf-btn" title=${host.t("floor_start_view_hint")} @click=${() => floorActions.rememberView()}>${host.t("floor_start_view")}</button>
    ${floor.start_view ? html`<button class="nf-btn" title=${host.t("floor_start_view_reset")} @click=${() => host.change((_, f) => (f.start_view = null))}>↺</button>` : nothing}
    <label class="nf-check nf-wide" title=${host.t("floor_shift_all_hint")}
      ><input type="checkbox" .checked=${state.shiftAll} @change=${(e: Event) => (state.shiftAll = (e.target as HTMLInputElement).checked)} />
      ${host.t("floor_shift_all")}</label
    >
  </div>`;
}

/** What a copy of the floor takes along, and the button that makes it. */
function copyChoices(host: EditorHost, state: SideState, floorActions: FloorActions, choice: { furniture: boolean; devices: boolean; outdoor: boolean }): TemplateResult {
  const t = host.t;
  const set = (patch: Partial<typeof choice>) => (state.floorCopy = { ...choice, ...patch });
  return html`<div class="nf-form nf-wide nf-copy-floor">
    ${hint(t("floor_copy_hint"), "nf-wide")}
    ${checkField(host, t("floor_copy_furniture"), choice.furniture, (furniture) => set({ furniture }))}
    ${checkField(host, t("floor_copy_devices"), choice.devices, (devices) => set({ devices }), { title: t("floor_copy_devices_hint") })}
    ${checkField(host, t("floor_copy_outdoor"), choice.outdoor, (outdoor) => set({ outdoor }))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn nf-primary" @click=${() => floorActions.duplicateFloor(choice)}>${t("floor_copy_make")}</button>
      <button class="nf-btn" @click=${() => (state.floorCopy = null)}>${t("cancel")}</button>
    </div>
  </div>`;
}

function floorForm(host: EditorHost, state: SideState, floorActions: FloorActions, floor: Floor): TemplateResult {
  const t = host.t;
  const update = (patch: Partial<Floor>) => host.change((_, f) => Object.assign(f, patch));
  const links = linkableHaFloors(host.doc, floor, host.hass?.floors);
  const lacking = unplacedAreas(host.doc, floor, host.hass?.areas);
  const haChoices: [string, string][] = [["", t("no_ha_floor")], ...links.map((f): [string, string] => [f.floor_id, f.name])];
  return html`<div class="nf-form">
    ${textField(host, t("floor_name"), floor.name, (v) => update({ name: v }), { wide: true })}
    ${numberField(host, t("elevation"), floor.elevation, (v) => update({ elevation: v }))}
    ${host.admin ? shiftRow(host, state, floorActions, floor) : nothing}
    ${numberField(host, t("height"), floor.height, (v) => update({ height: Math.max(1, v) }), 0.05, 1)}
    ${Object.keys(host.hass?.floors ?? {}).length > 0 ? selectField(host, t("ha_floor"), floor.ha_floor ?? "", haChoices, (v) => update({ ha_floor: v || null }), { wide: true }) : nothing}
    ${host.admin && lacking.length > 0
      ? html`<div class="nf-actions nf-wide"><button class="nf-btn nf-primary" title=${t("area_rooms_hint")} @click=${() => floorActions.addAreaRooms(floor)}>${t("area_rooms", { n: lacking.length })}</button></div>`
      : nothing}
    ${host.admin
      ? html`<div class="nf-actions nf-wide">
            <button class="nf-btn" @click=${() => floorActions.moveFloor(1)}>${t("move_up")}</button>
            <button class="nf-btn" @click=${() => floorActions.moveFloor(-1)}>${t("move_down")}</button>
            <button class="nf-btn" @click=${() => (state.floorCopy = state.floorCopy ? null : { furniture: true, devices: false, outdoor: false })}>${t("floor_copy")}</button>
            <button class="nf-btn nf-danger" @click=${() => floorActions.deleteFloor()}>${t("delete_floor")}</button>
          </div>
          ${state.floorCopy ? copyChoices(host, state, floorActions, state.floorCopy) : nothing}
          <div class="nf-actions nf-wide"><button class="nf-btn" title=${t("gaps_hint")} ?disabled=${floor.rooms.length < 2} @click=${() => floorActions.closeGaps()}>${t("gaps_close")}</button></div>
          ${state.notice ? html`<p class="nf-sub nf-wide nf-notice">${state.notice}</p>` : nothing}`
      : nothing}
  </div>`;
}

/** The "Floors" section of the side panel. */
export function renderFloors(host: EditorHost, state: SideState, floorActions: FloorActions, floor: Floor | undefined, selectedId: string | null): TemplateResult {
  return html`<section>
    <h3>${host.t("floors")}</h3>
    ${floorChips(host, state, floorActions, selectedId)} ${floor ? floorForm(host, state, floorActions, floor) : nothing}
  </section>`;
}
