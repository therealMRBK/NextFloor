// The form of an outdoor area (lawn, terrace, pool, fence, pergola ...) and the measuring tool's panel.

import { html, nothing, type TemplateResult } from "lit";
import { formatNumber, type I18nKey } from "../../../i18n.ts";
import { bounds, cutsOut, isAxisRect, uid, type FenceGate, type FreeWall, OUTDOOR_TOP, OUTDOOR_TYPES, outdoorStanding, SLOPE_DIRS, type Direction, type OutdoorArea, type OutdoorType, type SlopeDir, type Vec2 } from "../../../model.ts";
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
      ${numberField(host, t("outdoor_opacity"), Math.round((area.opacity ?? 1) * 100), (v) => set({ opacity: v >= 100 || !(v > 0) ? null : Math.max(10, Math.min(95, v)) / 100 }), 5, 10)}
      ${checkField(host, t("outdoor_outline"), area.outline !== false, (on) => set({ outline: on ? undefined : false }), { title: t("outdoor_outline_hint") })}
      ${area.type === "fence" || area.type === "pergola" ? checkField(host, t("outdoor_open"), !!area.open, (on) => set({ open: on || undefined }), { title: t("outdoor_open_hint") }) : nothing}
      ${area.type === "pergola" ? checkField(host, t("outdoor_bracing"), !!area.bracing, (on) => set({ bracing: on || undefined })) : nothing}
      ${checkField(host, t("outdoor_cut"), cutsOut(area), (on) => set({ cut: on === (area.type === "pool") ? undefined : on }), { title: t("outdoor_cut_hint") })}
    </div>
    ${area.type === "fence" ? fenceGates(host, area, set) : nothing}
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

/** The gates of a fence: each a gap in one edge with a leaf (or two) that follows an entity or a contact. */
function fenceGates(host: EditorHost, area: OutdoorArea, set: (patch: Partial<OutdoorArea>) => void): TemplateResult {
  const t = host.t;
  const gates = area.gates ?? [];
  const store = (next: FenceGate[]) => set({ gates: next.length ? next : undefined });
  const edges = area.points.map((_, i): [string, string] => [String(i), `${i + 1} → ${((i + 1) % area.points.length) + 1}`]);
  const edgeLength = (i: number) => {
    const [a, b] = [area.points[i], area.points[(i + 1) % area.points.length]];
    return a && b ? Math.hypot(b[0] - a[0], b[1] - a[1]) : 0;
  };
  const patch = (i: number, change: Partial<FenceGate>) => store(gates.map((g, k) => (k === i ? { ...g, ...change } : g)));
  const drivers = entityOptions(host.hass, (id) => /^(cover|switch|input_boolean|lock)\./.test(id));
  const contacts = entityOptions(host.hass, (id) => id.startsWith("binary_sensor."));
  const kinds: [string, string][] = [["single", t("gate_single")], ["double", t("gate_double")], ["sliding", t("gate_sliding")]];
  const add = () => {
    const edge = 0;
    const length = edgeLength(edge);
    store([...gates, { id: uid("gate"), edge, offset: toThousandths(length / 2), width: Math.min(1.2, Math.max(0.5, toThousandths(length * 0.4))), kind: "single" }]);
  };
  return html`<h4 class="nf-lib-head">${t("fence_gates")}</h4>
    ${gates.map(
      (g, i) => html`<div class="nf-form">
        ${selectField(host, t("gate_edge"), String(g.edge), edges, (v) => patch(i, { edge: Number(v) }))}
        ${selectField(host, t("gate_kind"), g.kind, kinds, (kind) => patch(i, { kind: kind as FenceGate["kind"], width: kind === "single" && g.width > 1.6 ? 1 : g.width }))}
        ${numberField(host, t("gate_offset"), g.offset, (v) => patch(i, { offset: Math.max(0, Math.min(edgeLength(g.edge), toThousandths(v))) }), 0.05, 0)}
        ${numberField(host, t("gate_width"), g.width, (v) => patch(i, { width: Math.max(0.3, Math.min(12, toThousandths(v))) }), 0.05, 0.3)}
        ${entityField(host, t("gate_entity"), g.entity ?? null, undefined, drivers, (v) => patch(i, { entity: v && v !== "none" ? v : null }))}
        ${entityField(host, t("gate_contact"), g.contact ?? null, undefined, contacts, (v) => patch(i, { contact: v && v !== "none" ? v : null }))}
        ${host.admin ? html`<button class="nf-btn nf-danger nf-wide" @click=${() => store(gates.filter((_, k) => k !== i))}>${t("delete")}</button>` : nothing}
      </div>`,
    )}
    ${host.admin && gates.length < 20 ? html`<button class="nf-btn" @click=${add}>${t("gate_add")}</button>` : nothing}
    ${hint(t("fence_gates_hint"))}`;
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
  /** Closes the ends of the floor's free walls that meet (corners and junctions). */
  join(): void;
  /** What the last join did. */
  note?: string | null;
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
      ${selectField(host, t("wall_side"), wall.axis ?? "center", (["center", "left", "right"] as const).map((v): [typeof v, string] => [v, t(`wall_side_${v}`)]), (v) => actions.update({ axis: v === "center" ? null : v }), { title: t("wall_axis_hint") })}
      ${numberField(host, t("wall_height"), wall.height ?? floorHeight, (v) => actions.update(wallHeightPatch(v, floorHeight)), 0.05, 0.05)}
      ${checkField(host, t("free_wall_slope"), wall.height_end != null, (on) => actions.update(on ? { height: wall.height ?? floorHeight, height_end: Math.max(0.2, (wall.height ?? floorHeight) / 2) } : { height_end: null }), { title: t("free_wall_slope_hint") })}
      ${wall.height_end != null ? numberField(host, t("free_wall_height_end"), wall.height_end, (v) => actions.update({ height_end: Math.max(0.05, v) }), 0.05, 0.05) : nothing}
      ${checkField(host, t("free_wall_hang"), wall.bottom != null, (on) => actions.update(on ? { bottom: Math.round((wall.height ?? floorHeight) * 0.6 * 20) / 20, bottom_end: null } : { bottom: null, bottom_end: null }), { title: t("free_wall_hang_hint") })}
      ${wall.bottom != null
        ? html`${numberField(host, t("free_wall_bottom"), wall.bottom, (v) => actions.update({ bottom: Math.max(0, v) }), 0.05, 0.05)}
          ${checkField(host, t("free_wall_bottom_slope"), wall.bottom_end != null, (on) => actions.update({ bottom_end: on ? Math.max(0, (wall.bottom ?? 0) - 0.5) : null }))}
          ${wall.bottom_end != null ? numberField(host, t("free_wall_bottom_end"), wall.bottom_end, (v) => actions.update({ bottom_end: Math.max(0, v) }), 0.05, 0.05) : nothing}`
        : nothing}
    </div>
    ${host.admin ? html`<div class="nf-actions">${arcButton(host, `wall:${wall.id}`, actions.arc)}<button class="nf-btn" title=${t("wall_join_hint")} @click=${() => actions.join()}>${t("wall_join")}</button><button class="nf-btn nf-danger" @click=${() => actions.remove()}>${t("delete")}</button></div>` : nothing}
    ${actions.note ? hint(actions.note) : nothing}
    <div class="nf-form">${arcRow(host, `wall:${wall.id}`, actions.arc)}</div>
    ${hint(t("free_wall_hint"))}
  </section>`;
}
