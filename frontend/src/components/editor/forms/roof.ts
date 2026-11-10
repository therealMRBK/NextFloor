// The roof tool's side panel: the list of sections, one section's form, the roof windows and their form.

import { html, nothing, type TemplateResult } from "lit";
import { formatNumber, type I18nKey } from "../../../i18n.ts";
import { CHIMNEY_SHAPES, ROOF_SHAPES, type ChimneyShape, type RoofChimney, type RoofEnd, type RoofSection, type RoofShape, type RoofWindow } from "../../../model.ts";
import { ridgeHeight, roofSectionsFromRooms, sectionFloor } from "../../../roof-sections.ts";
import { sectionOverhang } from "../../../roof/geometry.ts";
import { chimneySize, proposeChimney, proposeWindow, roofFaces } from "../../../solar.ts";
import { entityOptions, isBinary, isNumeric } from "../entities.ts";
import { actions, checkField, entityField, hint, numberField, selectField, textField, toThousandths } from "../fields.ts";
import { sectionNumber } from "../ops/roof.ts";
import { choiceButtons, faceLabel, floorButtons, lockButton, type RoofPanelDeps } from "./roof-parts.ts";
import type { EditorHost } from "../host.ts";
import { formatLength } from "../../../units.ts";

const heading = (title: string, lock: TemplateResult | typeof nothing) => html`<div class="nf-h3row"><h3>${title}</h3>${lock}</div>`;
const backButton = (label: string, onClick: () => void) => html`<button class="nf-btn nf-back" @click=${onClick}>‹ ${label}</button>`;
const clamped = (low: number, high: number) => (v: number) => Math.max(low, Math.min(high, toThousandths(v)));

/** One section: shape and direction, eaves, pitch, base, overhang, and the buttons for outline, dormers, copy and delete. */
function sectionForm(deps: RoofPanelDeps, section: RoofSection): TemplateResult {
  const { host, roof } = deps;
  const t = host.t;
  const set = (patch: Partial<RoofSection>) => roof.patchSection(patch);
  const flat = section.shape === "flat" || section.shape === "parapet";
  const pent = section.shape === "pent";
  // side a is the top when the ridge runs across the plan, and the left when it runs up and down
  const named = section.axis === "x" ? [t("roof_side_top"), t("roof_side_bottom")] : [t("roof_side_left"), t("roof_side_right")];
  const [sideA, sideB] = section.flip ? [named[1], named[0]] : named;
  const planLocked = !!host.doc.settings.lock_plan;
  const metres = (label: string, value: number, apply: (v: number) => void, step = 0.05, min = 0) => numberField(host, label, value, (v) => apply(Math.max(min, toThousandths(v))), step, min);
  const floors = [...host.doc.floors].filter((f) => f.rooms.length > 0).sort((a, b) => b.elevation - a.elevation);
  const onFloor = sectionFloor(host.doc, section)?.id;
  const moveToFloor = (id: string) => {
    const floor = host.doc.floors.find((f) => f.id === id);
    if (!floor) return;
    // the section moves onto that floor's wall tops: base and eaves shift by the same amount
    const top = toThousandths(floor.elevation + floor.height);
    const shift = top - section.base;
    set({ base: top, eave_a: toThousandths(section.eave_a + shift), eave_b: toThousandths(section.eave_b + shift) });
  };
  const lock = planLocked
    ? html`<button class="nf-btn nf-fix" aria-pressed="true" title=${t("lock_plan_hint")} @click=${() => deps.toggleLockPlan()}>🔒 ${t("plan_locked")}</button>`
    : lockButton(host, !!section.locked, () => set({ locked: !section.locked }));
  const shapeChoices = ROOF_SHAPES.map((shape): [RoofShape, string] => [shape, t(`roof_shape_${shape}` as I18nKey)]);
  const dormerButton = (side: "a" | "b", label: string) => html`<button class="nf-btn" title=${t("roof_dormer_hint")} @click=${() => roof.addDormer(side)}>+ ${t("roof_dormer")} ${label}</button>`;
  return html`${backButton(t("roof_sections"), () => (roof.sectionId = null))}
    <section>
      ${floorButtons(deps)}
      ${heading(`${section.dormer ? t("roof_dormer") : t("roof_section")} ${sectionNumber(host.doc.settings.roof.sections ?? [], section.id)}`, host.admin ? lock : nothing)}
      ${selectField(host, t("roof_shape"), section.shape, shapeChoices, (shape) => set({ shape, ...(shape === "gable" || shape === "hip" || shape === "halfhip" ? {} : { ends: null }) }), { wide: true })}
      ${section.shape === "gable" || section.shape === "hip" || section.shape === "halfhip" ? endFields(host, section, set) : nothing}
      ${flat ? nothing : choiceButtons(host, [["x", t("roof_axis_x")], ["z", t("roof_axis_z")]] as const, section.axis, (axis) => set({ axis }))}
      ${checkField(host, t("roof_open"), !!section.open, (open) => set({ open }), { title: t("roof_open_hint") })}
      <div class="nf-form">
        ${flat
          ? metres(t("roof_height"), section.eave_a, (v) => set({ eave_a: v, eave_b: v }))
          : html`${metres(`${t("roof_eave")} ${pent ? "" : sideA}`, section.eave_a, (v) => set({ eave_a: v }))}
            ${pent ? nothing : metres(`${t("roof_eave")} ${sideB}`, section.eave_b, (v) => set({ eave_b: v }))}
            ${metres(`${t("roof_pitch_short")} ${pent ? "" : sideA}`, section.pitch_a, (v) => set({ pitch_a: Math.min(75, v) }), 1)}
            ${pent ? nothing : metres(`${t("roof_pitch_short")} ${sideB}`, section.pitch_b, (v) => set({ pitch_b: Math.min(75, v) }), 1)}`}
        ${metres(t("roof_base"), section.base, (v) => set({ base: v }))}
        ${section.points?.length ? nothing : numberField(host, t("roof_rotation"), section.rotation ?? 0, (v) => set({ rotation: (((Math.round(v) % 360) + 540) % 360) - 180 || null }), 1)}
        ${selectField(host, t("roof_on_floor"), onFloor ?? "", floors.map((f): [string, string] => [f.id, f.name]), moveToFloor, { title: t("roof_on_floor_hint") })}
        ${hint(t("roof_base_hint"), "nf-wide")}
        ${metres(t("roof_overhang"), section.overhang ?? host.doc.settings.roof.overhang, (v) => set({ overhang: Math.min(2, v) }))}
      </div>
      <details class="nf-section" ?open=${!!section.overhang_sides}>
        <summary>${t("roof_overhang_sides")}</summary>
        <div class="nf-form">
          ${(["a", "b", "u0", "u1"] as const).map((side) =>
            metres(t(`roof_overhang_${side}` as I18nKey), sectionOverhang(host.doc, section, section.overhang ?? host.doc.settings.roof.overhang)[side], (v) => set({ overhang_sides: { ...(section.overhang_sides ?? {}), [side]: Math.min(2, Math.max(0, v)) } })),
          )}
          ${host.admin && section.overhang_sides ? html`<button class="nf-btn" @click=${() => set({ overhang_sides: null })}>${t("roof_overhang_auto")}</button>` : nothing}
        </div>
        ${hint(t("roof_overhang_sides_hint"))}
      </details>
      ${flat && host.admin
        ? html`${actions(
            html`<button class="nf-btn" title=${t("roof_outline_hint")} @click=${() => roof.takeOutline()}>${t("roof_outline")}</button>`,
            section.points ? html`<button class="nf-btn" @click=${() => set({ points: null })}>${t("roof_rect")}</button>` : nothing,
          )}
          ${section.points
            ? actions(...section.points.map((_, i) => html`<button class="nf-chip" title=${t("delete_point")} ?disabled=${(section.points?.length ?? 0) <= 3} @click=${() => roof.removeCorner(i)}>${i + 1} ×</button>`))
            : nothing}
          ${hint(t(section.points ? "roof_points_hint" : "roof_outline_hint"))}`
        : nothing}
      ${hint(`${t("roof_ridge_height")}: ${formatLength(host.hass, ridgeHeight(section))} · ${t("roof_section_hint")}`)}
      ${host.admin
        ? actions(
            flat ? nothing : html`<button class="nf-btn" title=${t("roof_swap_hint")} @click=${() => set({ flip: !section.flip })}>⇅ ${t("roof_swap")}</button>`,
            !flat && !section.dormer && !section.open ? html`${dormerButton("a", sideA)}${pent ? nothing : dormerButton("b", sideB)}` : nothing,
            html`<button class="nf-btn" @click=${() => roof.duplicateSection()}>${t("duplicate")}</button>`,
            html`<button class="nf-btn nf-danger" @click=${() => roof.removeSection()}>${t("delete")}</button>`,
          )
        : nothing}
    </section>`;
}

/** One roof window: its face, size and place, the entities that drive it, and its name. */
function windowForm(deps: RoofPanelDeps, win: RoofWindow): TemplateResult {
  const { host, roof } = deps;
  const t = host.t;
  const faces = roofFaces(host.doc);
  const set = (patch: Partial<RoofWindow>) => roof.patchWindow(patch);
  const covers = entityOptions(host.hass, (id) => id.startsWith("cover."));
  const contacts = entityOptions(host.hass, (id) => isBinary(id) || isNumeric(id));
  const link = (label: I18nKey, value: string | null | undefined, options: typeof covers, key: "cover" | "contact" | "tilt" | "window") =>
    entityField(host, t(label), value ?? null, undefined, options, (v) => set({ [key]: v === "none" ? null : v }));
  const moveToFace = (key: string) => {
    const next = faces.find((f) => f.key === key);
    if (next) set({ ...proposeWindow(next, win.id), w: win.w, h: win.h, cover: win.cover, contact: win.contact, tilt: win.tilt, window: win.window, name: win.name });
  };
  const index = (host.doc.settings.roof.windows ?? []).findIndex((w) => w.id === win.id) + 1;
  return html`${backButton(t("roof_sections"), () => (roof.windowId = null))}
    <section>
      ${heading(`🪟 ${t("roof_window")} ${index}`, lockButton(host, !!win.locked, () => set({ locked: !win.locked })))}
      <div class="nf-form">
        ${selectField(host, t("solar_face"), win.face, faces.map((f): [string, string] => [f.key, faceLabel(host, f)]), moveToFace, { wide: true })}
        ${numberField(host, t("width"), win.w ?? 0.78, (v) => set({ w: clamped(0.3, 4)(v) }), 0.01, 0.3)}
        ${numberField(host, t("height_m"), win.h ?? 1.18, (v) => set({ h: clamped(0.3, 4)(v) }), 0.01, 0.3)}
        ${numberField(host, t("solar_u"), win.u, (v) => set({ u: toThousandths(v) }), 0.05)} ${numberField(host, t("solar_v"), win.v, (v) => set({ v: toThousandths(v) }), 0.05)}
        ${link("cover_entity", win.cover, covers, "cover")} ${link("contact_entity", win.contact, contacts, "contact")}
        ${link("roof_window_tilt", win.tilt, contacts, "tilt")} ${link("roof_window_motor", win.window, covers, "window")}
        ${textField(host, t("roof_window_name"), win.name ?? "", (v) => set({ name: v || null }), { wide: true, maxlength: 64 })}
      </div>
      ${hint(t("roof_window_motor_hint"))} ${hint(t("roof_window_hint"))}
      ${host.admin ? actions(html`<button class="nf-btn nf-danger" @click=${() => roof.removeWindow()}>${t("delete")}</button>`) : nothing}
    </section>`;
}

/** The roof windows of the house, with a button that adds one. */
function windowList(deps: RoofPanelDeps): TemplateResult {
  const { host, roof } = deps;
  const windows = host.doc.settings.roof.windows ?? [];
  const faces = new Map(roofFaces(host.doc).map((f) => [f.key, f]));
  const open = (id: string) => {
    roof.windowId = id;
    roof.sectionId = null;
  };
  return html`<section>
    <h3>🪟 ${host.t("roof_windows")}</h3>
    ${hint(host.t(faces.size > 0 ? "roof_windows_hint" : "solar_no_roof"))}
    ${windows.length > 0
      ? html`<div class="nf-room-list">
          ${windows.map((w, i) => {
            const face = faces.get(w.face);
            return html`<div class="nf-row"><button class="nf-dev-name" @click=${() => open(w.id)}><span>${host.t("roof_window")} ${i + 1} · ${face ? faceLabel(host, face) : host.t("solar_face_gone")}</span></button></div>`;
          })}
        </div>`
      : nothing}
    ${actions(html`<button class="nf-btn" ?disabled=${!host.admin || faces.size === 0} @click=${() => roof.addWindow()}>+ ${host.t("roof_window")}</button>`)}
  </section>`;
}

/** One chimney: its face, shape, size and place, and its name. */
function chimneyForm(deps: RoofPanelDeps, c: RoofChimney): TemplateResult {
  const { host, roof } = deps;
  const t = host.t;
  const faces = roofFaces(host.doc);
  const set = (patch: Partial<RoofChimney>) => roof.patchChimney(patch);
  const size = chimneySize(c);
  const moveToFace = (key: string) => {
    const next = faces.find((f) => f.key === key);
    if (next) set({ ...proposeChimney(next, c.id), shape: c.shape, w: c.w, d: c.d, h: c.h, name: c.name });
  };
  const round = size.shape === "round" || size.shape === "steel";
  const index = (host.doc.settings.roof.chimneys ?? []).findIndex((x) => x.id === c.id) + 1;
  return html`${backButton(t("roof_sections"), () => (roof.chimneyId = null))}
    <section>
      ${heading(`🧱 ${t("chimney")} ${index}`, lockButton(host, !!c.locked, () => set({ locked: !c.locked })))}
      <div class="nf-form">
        ${selectField(host, t("chimney_shape"), size.shape, CHIMNEY_SHAPES.map((s): [ChimneyShape, string] => [s, t(`chimney_${s}` as I18nKey)]), (shape) => set({ shape, w: null, d: null, h: null }), { wide: true })}
        ${selectField(host, t("solar_face"), c.face, faces.map((f): [string, string] => [f.key, faceLabel(host, f)]), moveToFace, { wide: true })}
        ${round
          ? numberField(host, t("chimney_diameter"), size.w, (v) => set({ w: clamped(0.1, 3)(v), d: clamped(0.1, 3)(v) }), 0.01, 0.1)
          : html`${numberField(host, t("width"), size.w, (v) => set({ w: clamped(0.1, 3)(v) }), 0.01, 0.1)} ${numberField(host, t("chimney_depth"), size.d, (v) => set({ d: clamped(0.1, 3)(v) }), 0.01, 0.1)}`}
        ${numberField(host, t("chimney_height"), size.h, (v) => set({ h: clamped(0.2, 5)(v) }), 0.05, 0.2)}
        ${numberField(host, t("solar_u"), c.u, (v) => set({ u: toThousandths(v) }), 0.05)} ${numberField(host, t("solar_v"), c.v, (v) => set({ v: toThousandths(v) }), 0.05)}
        ${textField(host, t("roof_window_name"), c.name ?? "", (v) => set({ name: v || null }), { wide: true, maxlength: 64 })}
      </div>
      ${hint(t("chimney_hint"))}
      ${host.admin ? actions(html`<button class="nf-btn nf-danger" @click=${() => roof.removeChimney()}>${t("delete")}</button>`) : nothing}
    </section>`;
}

/** The chimneys of the house, with a button that adds one. */
function chimneyList(deps: RoofPanelDeps): TemplateResult {
  const { host, roof } = deps;
  const chimneys = host.doc.settings.roof.chimneys ?? [];
  const faces = new Map(roofFaces(host.doc).map((f) => [f.key, f]));
  const open = (id: string) => {
    roof.chimneyId = id;
    roof.sectionId = null;
  };
  return html`<section>
    <h3>🧱 ${host.t("chimneys")}</h3>
    ${faces.size > 0 ? nothing : hint(host.t("solar_no_roof"))}
    ${chimneys.length > 0
      ? html`<div class="nf-room-list">
          ${chimneys.map((c, i) => {
            const face = faces.get(c.face);
            return html`<div class="nf-row"><button class="nf-dev-name" @click=${() => open(c.id)}><span>${host.t("chimney")} ${i + 1} · ${host.t(`chimney_${chimneySize(c).shape}` as I18nKey)} · ${face ? faceLabel(host, face) : host.t("solar_face_gone")}</span></button></div>`;
          })}
        </div>`
      : nothing}
    ${actions(html`<button class="nf-btn" ?disabled=${!host.admin || faces.size === 0} @click=${() => roof.addChimney()}>+ ${host.t("chimney")}</button>`)}
  </section>`;
}

/** The roof tool's panel: a window's form, a section's form, or the overview of all sections and windows. */
/** A gable, hip or half-hip section with its own shape at each end of the ridge. */
function endFields(host: EditorHost, section: RoofSection, set: (patch: Partial<RoofSection>) => void): TemplateResult {
  const t = host.t;
  const own = section.shape as RoofEnd;
  const [start, end] = section.ends ?? [own, own];
  const choices: [RoofEnd, string][] = (["gable", "hip", "halfhip"] as const).map((e) => [e, t(`roof_shape_${e}` as I18nKey)]);
  const choose = (pair: [RoofEnd, RoofEnd]) => set({ ends: pair[0] === own && pair[1] === own ? null : pair });
  const halfhip = start === "halfhip" || end === "halfhip";
  return html`<div class="nf-form">
    ${selectField(host, t("roof_end_start"), start, choices, (v) => choose([v, end]))}
    ${selectField(host, t("roof_end_end"), end, choices, (v) => choose([start, v]))}
    ${halfhip
      ? html`<label class="nf-field nf-wide" title=${t("roof_halfhip_hint")}
          >${t("roof_halfhip")} · ${Math.round((section.halfhip ?? 0.55) * 100)} %
          <input type="range" min="20" max="90" step="5" .value=${String(Math.round((section.halfhip ?? 0.55) * 100))} ?disabled=${!host.admin} @change=${(e: Event) => set({ halfhip: Number((e.target as HTMLInputElement).value) / 100 })} />
        </label>`
      : nothing}
  </div>`;
}

export function renderRoofPanel(deps: RoofPanelDeps): TemplateResult {
  const { host, roof } = deps;
  const settings = host.doc.settings.roof;
  const custom = settings.type === "custom";
  if (roof.window) return windowForm(deps, roof.window);
  if (roof.chimney) return chimneyForm(deps, roof.chimney);
  if (custom && roof.section) return sectionForm(deps, roof.section);
  const sections = custom ? (settings.sections ?? []) : [];
  const t = host.t;
  // a house with an annexe, a lower part or an outbuilding: with the single roof only the top floor is covered
  const parts = custom ? 0 : roofSectionsFromRooms(host.doc).length;
  const label = (s: RoofSection, i: number) =>
    `${i + 1} · ${s.dormer ? t("roof_dormer") : t(`roof_shape_${s.shape}` as I18nKey)} · ${formatNumber(host.hass, Math.abs(s.x1 - s.x0), 1)} × ${formatNumber(host.hass, Math.abs(s.z1 - s.z0), 1)} m · ${t("roof_ridge_height")} ${formatNumber(host.hass, ridgeHeight(s), 1)} m`;
  return html`<section>
      ${floorButtons(deps)}
      <h3>${t("roof_sections")}</h3>
      ${hint(t("roof_sections_hint"))}
      ${custom
        ? html`<div class="nf-room-list">${sections.map((s, i) => html`<div class="nf-row"><button class="nf-dev-name" @click=${() => (roof.sectionId = s.id)}><span>${label(s, i)}</span></button></div>`)}</div>
          ${actions(
            html`<button class="nf-btn" ?disabled=${!host.admin} @click=${() => roof.useSections(true)}>${t("roof_sections_regen")}</button>`,
            html`<button class="nf-btn" ?disabled=${!host.admin} @click=${() => host.change((doc) => (doc.settings.roof.type = "gable"))}>${t("roof_sections_off")}</button>`,
          )}`
        : html`${parts > 1 ? hint(t("roof_parts_hint", { n: parts })) : nothing}${actions(html`<button class="nf-btn nf-primary" ?disabled=${!host.admin} @click=${() => roof.useSections()}>${t("roof_sections_start")}</button>`)}`}
    </section>
    ${windowList(deps)} ${chimneyList(deps)}`;
}
