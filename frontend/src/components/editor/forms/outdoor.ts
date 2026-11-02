// The form of an outdoor area (lawn, terrace, pool, fence, pergola ...) and the measuring tool's panel.

import { html, nothing, type TemplateResult } from "lit";
import { formatNumber, type I18nKey } from "../../../i18n.ts";
import { bounds, cutsOut, isAxisRect, type FreeWall, OUTDOOR_TOP, OUTDOOR_TYPES, outdoorStanding, SLOPE_DIRS, type Direction, type OutdoorArea, type OutdoorType, type SlopeDir, type Vec2 } from "../../../model.ts";
import { checkField, entityField, hint, numberField, selectField, toThousandths } from "../fields.ts";
import { entityOptions } from "../entities.ts";
import type { EditorHost } from "../host.ts";
import { wallEndForLength, wallHeightPatch } from "../ops/items.ts";
import { arcButton, arcRow, type ArcActions } from "./arc.ts";

export interface OutdoorActions {
  update(patch: Partial<OutdoorArea>): void;
  setRectangle(field: "x" | "z" | "w" | "d", value: number): void;
  duplicate(): void;
  remove(): void;
  removeCorner(index: number): void;
  lockButton: TemplateResult | typeof nothing;
}

const between = (low: number, high: number, v: number) => Math.min(high, Math.max(low, toThousandths(v)));

export function renderOutdoorForm(host: EditorHost, area: OutdoorArea, actions: OutdoorActions): TemplateResult {
  const t = host.t;
  const set = (patch: Partial<OutdoorArea>) => actions.update(patch);
  const box = bounds(area.points);
  const types = OUTDOOR_TYPES.map((type): [OutdoorType, string] => [type, t(`out_${type}` as I18nKey)]);
  const slopeDirs = SLOPE_DIRS.map((d): [SlopeDir, string] => [d, t(`slope_${d.replace("-", "n")}` as I18nKey)]);
  return html`<section>
    <div class="nf-h3row"><h3>${t("outdoor")}</h3>${actions.lockButton}</div>
    <div class="nf-form">
      ${selectField(host, t("outdoor_type"), area.type, types, (type) => set({ type }), { wide: true })}
      ${selectField(host, t("area"), area.area_id ?? "", [["", t("no_area")], ...Object.values(host.hass?.areas ?? {}).sort((a, b) => a.name.localeCompare(b.name)).map((a): [string, string] => [a.area_id, a.name])], (id) => set({ area_id: id || null }), { wide: true, title: t("outdoor_area_hint") })}
      ${area.type === "pool" || area.type === "wild" || area.type === "bed"
        ? html`${entityField(host, t("pool_temp"), area.temp_entity ?? null, undefined, entityOptions(host.hass, (id) => id.startsWith("sensor.") && host.hass?.states[id]?.attributes.device_class === "temperature"), (v) => set({ temp_entity: v && v !== "none" ? v : null }))}
          ${entityField(host, t("pool_pump"), area.pump_entity ?? null, undefined, entityOptions(host.hass, (id) => /^(switch|fan|valve|input_boolean|binary_sensor)\./.test(id)), (v) => set({ pump_entity: v && v !== "none" ? v : null }))}`
        : nothing}
      ${isAxisRect(area.points)
        ? html`${numberField(host, t("x"), box.x0, (v) => actions.setRectangle("x", v))} ${numberField(host, t("z"), box.z0, (v) => actions.setRectangle("z", v))}
          ${numberField(host, t("width"), box.x1 - box.x0, (v) => actions.setRectangle("w", v), 0.01, 0.1)} ${numberField(host, t("depth"), box.z1 - box.z0, (v) => actions.setRectangle("d", v), 0.01, 0.1)}`
        : nothing}
      ${outdoorStanding(area.type) ? numberField(host, t("outdoor_height"), area.height ?? OUTDOOR_TOP[area.type], (v) => set({ height: between(0.1, 6, v) }), 0.05, 0.1) : nothing}
      ${numberField(host, t("outdoor_offset"), area.offset ?? 0, (v) => set({ offset: between(-10, 10, v) || null }), 0.05)}
      ${area.type !== "pool"
        ? html`${numberField(host, t("outdoor_slope"), area.slope ?? 0, (v) => set({ slope: between(0, 20, v) || null }), 0.05, 0)}
          ${selectField(host, t("outdoor_slope_dir"), area.slope_dir ?? "x", slopeDirs, (slope_dir) => set({ slope_dir }))}`
        : nothing}
      ${checkField(host, t("outdoor_outline"), area.outline !== false, (on) => set({ outline: on ? undefined : false }), { title: t("outdoor_outline_hint") })}
      ${area.type === "fence" || area.type === "pergola" ? checkField(host, t("outdoor_open"), !!area.open, (on) => set({ open: on || undefined }), { title: t("outdoor_open_hint") }) : nothing}
      ${area.type === "pergola" ? checkField(host, t("outdoor_bracing"), !!area.bracing, (on) => set({ bracing: on || undefined })) : nothing}
      ${checkField(host, t("outdoor_cut"), cutsOut(area), (on) => set({ cut: on === (area.type === "pool") ? undefined : on }), { title: t("outdoor_cut_hint") })}
    </div>
    ${host.admin
      ? html`<div class="nf-actions">
            ${area.points.map((_, i) => html`<button class="nf-chip" title=${t("delete_point")} ?disabled=${area.points.length <= 3} @click=${() => actions.removeCorner(i)}>${i + 1} ×</button>`)}
          </div>
          ${hint(t("outdoor_corners_hint"))}`
      : nothing}
    ${area.slope ? hint(t("outdoor_slope_hint")) : nothing} ${hint(t("outdoor_hint"))}
    ${host.admin
      ? html`<div class="nf-actions"><button class="nf-btn" @click=${() => actions.duplicate()}>${t("duplicate")}</button><button class="nf-btn nf-danger" @click=${() => actions.remove()}>${t("delete")}</button></div>`
      : nothing}
  </section>`;
}

export interface MeasureState {
  draft: readonly Vec2[];
  length: number;
  rectSize: readonly [number, number];
}

export interface MeasureActions {
  setLength(metres: number): void;
  step(direction: Direction): void;
  close(): void;
  undo(): void;
  setRectSize(size: [number, number]): void;
  addRectangle(): void;
}

const ARROWS: [Direction, string][] = [["up", "↑"], ["left", "←"], ["right", "→"], ["down", "↓"]];
const KEY_DIRECTION: Record<string, Direction> = { ArrowRight: "right", ArrowLeft: "left", ArrowUp: "up", ArrowDown: "down" };

/** The measuring tool: lay out a room as a chain of lengths in directions, or add a rectangle of a typed size. */
export function renderMeasureForm(host: EditorHost, state: MeasureState, actions: MeasureActions): TemplateResult {
  const t = host.t;
  const { draft } = state;
  const metres = (v: number) => formatNumber(host.hass, v, 2);
  const [first, last] = [draft[0], draft[draft.length - 1]];
  const gap = first && draft.length > 1 ? Math.hypot(last[0] - first[0], last[1] - first[1]) : 0;
  const onKey = (e: KeyboardEvent) => {
    const direction = KEY_DIRECTION[e.key];
    if (direction) {
      e.preventDefault();
      actions.step(direction);
    } else if (e.key === "Enter") actions.close();
  };
  const chain = first
    ? html`${hint(t("measure_from", { x: metres(first[0]), z: metres(first[1]) }))}
        <div class="nf-form">
          <label class="nf-field nf-wide"
            >${t("measure_length")}
            <input class="nf-measure-input" type="number" inputmode="decimal" step="0.01" min="0.05" .value=${String(state.length)} @input=${(e: Event) => actions.setLength(Number.parseFloat((e.target as HTMLInputElement).value.replace(",", ".")) || 0)} @keydown=${onKey} />
          </label>
          <div class="nf-arrows nf-wide">${ARROWS.map(([d, label]) => html`<button class="nf-btn nf-arrow-${d}" title=${t(`dir_${d}`)} @click=${() => actions.step(d)}>${label}</button>`)}</div>
        </div>
        ${draft.length > 1 ? html`<ol class="nf-measure-list">${draft.slice(1).map((p, i) => html`<li>${metres(Math.hypot(p[0] - draft[i][0], p[1] - draft[i][1]))} m</li>`)}</ol>` : nothing}
        <div class="nf-actions">
          <button class="nf-btn nf-primary" ?disabled=${draft.length < 3} @click=${() => actions.close()}>${t("measure_close")}</button>
          <button class="nf-btn" ?disabled=${draft.length < 2} @click=${() => actions.undo()}>${t("measure_undo")}</button>
        </div>
        ${draft.length >= 3 ? hint(t("measure_gap", { gap: metres(gap) })) : nothing}`
    : hint(t("measure_start"));
  return html`<section>
    <h3>${t("measure")}</h3>
    ${chain}
    <h4 class="nf-lib-head">${t("rect_by_size")}</h4>
    <div class="nf-form">
      ${numberField(host, t("width"), state.rectSize[0], (v) => actions.setRectSize([Math.max(0.1, v), state.rectSize[1]]), 0.01, 0.1)}
      ${numberField(host, t("depth"), state.rectSize[1], (v) => actions.setRectSize([state.rectSize[0], Math.max(0.1, v)]), 0.01, 0.1)}
      <button class="nf-btn nf-wide" @click=${() => actions.addRectangle()}>${t("rect_add")}</button>
    </div>
    ${hint(t("measure_hint"))}
  </section>`;
}

export interface FreeWallActions {
  update(patch: Partial<FreeWall>): void;
  remove(): void;
  /** Bending the wall into an arc (its key is `wall:<id>`). */
  arc: ArcActions;
  lockButton: TemplateResult | typeof nothing;
}

/** The form of a free-standing wall: length, thickness and height. */
export function renderFreeWallForm(host: EditorHost, wall: FreeWall, actions: FreeWallActions): TemplateResult {
  const t = host.t;
  const floorHeight = host.floor?.height ?? 2.5;
  const length = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]);
  return html`<section>
    <div class="nf-h3row"><h3>${t("free_wall")}</h3>${actions.lockButton}</div>
    <div class="nf-form">
      ${numberField(host, t("wall_length"), length, (v) => actions.update({ b: wallEndForLength(wall, v) }), 0.01, 0.1)}
      ${numberField(host, t("wall_thickness"), wall.thickness ?? host.doc.settings.wall_interior, (v) => actions.update({ thickness: between(0.02, 1, v) }), 0.01, 0.02)}
      ${numberField(host, t("wall_height"), wall.height ?? floorHeight, (v) => actions.update(wallHeightPatch(v, floorHeight)), 0.05, 0.05)}
    </div>
    ${host.admin ? html`<div class="nf-actions">${arcButton(host, `wall:${wall.id}`, actions.arc)}<button class="nf-btn nf-danger" @click=${() => actions.remove()}>${t("delete")}</button></div>` : nothing}
    <div class="nf-form">${arcRow(host, `wall:${wall.id}`, actions.arc)}</div>
    ${hint(t("free_wall_hint"))}
  </section>`;
}
