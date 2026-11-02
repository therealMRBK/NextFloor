// The side panel for solar fields: the overview with the strings, and the form of one field.

import { html, nothing, type TemplateResult } from "lit";
import { entityName, furnitureEntities } from "../../../devices.ts";
import { formatNumber, type I18nKey } from "../../../i18n.ts";
import type { SolarField } from "../../../model.ts";
import { fieldFace, fieldModules, GROUND, proposeField, roofFaces, rowCounts, turnGroundField, wallFaces } from "../../../solar.ts";
import { entityOptions, isPowerSensor } from "../entities.ts";
import { actions, checkField, entityField, hint, numberField, selectField, textField, toThousandths } from "../fields.ts";
import { columnsPatch, columnsText, fieldOnFace, rowsPatch } from "../ops/solar.ts";
import { choiceButtons, faceLabel, floorButtons, lockButton, type RoofPanelDeps } from "./roof-parts.ts";

const DEFAULT_WP = 400;

/** Number of modules and peak power of a field, as the summary line writes them. */
function fieldYield(face: ReturnType<typeof fieldFace> | undefined, field: SolarField) {
  const modules = face ? fieldModules(face, field).length : 0;
  return { modules, kwp: (modules * (field.wp ?? DEFAULT_WP)) / 1000 };
}

/** The solar fields of the house with their strings, and buttons to add a field on a roof, on the ground, or on a wall. */
export function renderSolarList(deps: RoofPanelDeps): TemplateResult {
  const { host, roof } = deps;
  const t = host.t;
  const fields = host.doc.settings.roof.solar ?? [];
  const strings = host.doc.settings.roof.strings ?? [];
  const roofFaceList = roofFaces(host.doc);
  const faceOf = new Map(fields.map((f) => [f.id, fieldFace(host.doc, f, roofFaceList)] as const));
  const row = (field: SolarField, i: number) => {
    const face = faceOf.get(field.id);
    const sum = fieldYield(face, field);
    const summary = t("solar_summary", { n: sum.modules, kwp: formatNumber(host.hass, sum.kwp, 1) });
    return html`<div class="nf-row">
      <button class="nf-dev-name" @click=${() => roof.selectField(field.id)}>
        <span>${field.name || `${t("solar_field")} ${i + 1}`} · ${face ? faceLabel(host, face) : t("solar_face_gone")} · ${summary}</span>
      </button>
    </div>`;
  };
  const stringLine = (s: (typeof strings)[number]) => {
    const own = fields.filter((f) => f.string === s.id);
    const sums = own.map((f) => fieldYield(faceOf.get(f.id), f));
    const modules = sums.reduce((a, x) => a + x.modules, 0);
    const kwp = sums.reduce((a, x) => a + x.kwp, 0);
    return html`<p class="nf-sub">🔗 <b>${s.name}</b> · ${t("solar_string_sum", { fields: own.length, n: modules, kwp: formatNumber(host.hass, kwp, 1) })}</p>`;
  };
  return html`<section>
    ${floorButtons(deps)}
    <h3>☀ ${t("solar_fields")}</h3>
    ${hint(t(roofFaceList.length > 0 ? "solar_hint" : "solar_no_roof"))}
    ${fields.length > 0 ? html`<div class="nf-room-list">${fields.map(row)}</div>` : nothing}
    ${actions(
      html`<button class="nf-btn nf-primary" ?disabled=${!host.admin || roofFaceList.length === 0} @click=${() => roof.addField()}>+ ${t("solar_add")}</button>`,
      html`<button class="nf-btn" ?disabled=${!host.admin} @click=${() => roof.addGroundField()}>+ ${t("solar_add_ground")}</button>`,
      html`<button class="nf-btn" ?disabled=${!host.admin || !deps.floorId} @click=${() => roof.addWallField()}>+ ${t("solar_add_wall")}</button>`,
    )}
    ${strings.length > 0 ? html`<h4 class="nf-lib-head">${t("solar_strings")}</h4>${strings.map(stringLine)}` : nothing}
  </section>`;
}

/** The string a field belongs to: choose, create or leave it, and for a string its name, sensor and inverter. */
function stringSection(deps: RoofPanelDeps, field: SolarField): TemplateResult {
  const { host, roof } = deps;
  const t = host.t;
  const power = entityOptions(host.hass, (id) => isPowerSensor(host.hass, id));
  const strings = host.doc.settings.roof.strings ?? [];
  const current = strings.find((s) => s.id === field.string);
  const choices: [string, string][] = [["", t("solar_string_none")], ...strings.map((s): [string, string] => [s.id, s.name]), ["new", `+ ${t("solar_string_new")}`]];
  const picker = selectField(host, t("solar_string"), field.string ?? "", choices, (v) => roof.setString(v === "" ? null : v), { wide: true });
  if (!current) return html`${picker}${entityField(host, t("solar_entity"), field.entity ?? null, undefined, power, (v) => roof.patchField({ entity: v === "none" ? null : v }))}`;
  // each inverter by its own name, else its entity's name, numbered only as a last resort
  const linked = host.hass ? furnitureEntities(host.hass, host.doc.floors) : null;
  const inverters = host.doc.floors
    .flatMap((floor) => floor.furniture.filter((m) => m.type === "inverter").map((item) => ({ item, floor })))
    .map(({ item, floor }, i) => {
      const entity = linked?.get(item.id)?.entity;
      const own = item.name?.trim() || (entity ? entityName(host.hass, entity) : "");
      return [item.id, `${own || `${t("furn_inverter")} ${i + 1}`} · ${floor.name}`] as [string, string];
    });
  return html`${picker}
    ${textField(host, t("solar_string_name"), current.name, (v) => roof.patchString({ name: v || current.name }), { wide: true })}
    ${entityField(host, t("solar_string_entity"), current.entity ?? null, undefined, power, (v) => roof.patchString({ entity: v === "none" ? null : v }))}
    ${selectField(host, t("solar_string_inverter"), current.inverter ?? "", [["", t(inverters.length > 0 ? "solar_string_inverter_none" : "solar_string_inverter_missing")], ...inverters], (v) => roof.patchString({ inverter: v || null }), { wide: true })}`;
}

/** One solar field: its face, rows and columns, module size, place, tilt, and the string it feeds. */
export function renderSolarForm(deps: RoofPanelDeps, field: SolarField): TemplateResult {
  const { host, roof } = deps;
  const t = host.t;
  const set = (patch: Partial<SolarField>) => roof.patchField(patch);
  const faces = roofFaces(host.doc);
  const face = fieldFace(host.doc, field, faces);
  const ground = field.face === GROUND;
  const rows = rowCounts(field);
  const sum = fieldYield(face, field);
  const planned = rows.reduce((a, b) => a + b, 0) - (field.skip?.length ?? 0);
  const index = (host.doc.settings.roof.solar ?? []).findIndex((f) => f.id === field.id) + 1;
  const facesChoices: [string, string][] = [
    ...(face ? [] : [["", t("solar_face_gone")] as [string, string]]),
    ...faces.map((f): [string, string] => [f.key, faceLabel(host, f)]),
    [GROUND, t("solar_ground")],
    ...wallFaces(host.doc).map((f): [string, string] => [f.key, faceLabel(host, f)]),
  ];
  const moveTo = (key: string) => {
    const patch = fieldOnFace(host.doc, field, key);
    if (patch) set(patch);
  };
  const bounded = (low: number, high: number, round: (v: number) => number = toThousandths) => (v: number) => Math.max(low, Math.min(high, round(v)));
  const turnGround = (rotation: number) => set(turnGroundField(host.doc, field, rotation));
  const turnFlat = (rotation: number) => set({ rotation: ((Math.round(rotation) % 360) + 360) % 360 || null });
  const flipText = face?.wall ? "solar_flip_wall" : "solar_flip";
  const moduleSize = (key: "module_w" | "module_h", label: I18nKey, fallback: number) => numberField(host, t(label), field[key] ?? fallback, (v) => set({ [key]: bounded(0.3, 3)(v) }), 0.01, 0.3);
  const unevenRows = !!field.layout?.length && new Set(field.layout).size > 1;
  return html`<button class="nf-btn nf-back" @click=${() => (roof.solarId = null)}>‹ ${t("solar_fields")}</button>
    <section>
      ${floorButtons(deps)}
      <div class="nf-h3row">
        <h3>☀ ${field.name || `${t("solar_field")} ${index}`}</h3>
        ${lockButton(host, !!field.locked, () => set({ locked: !field.locked }))}
      </div>
      <div class="nf-form">
        ${textField(host, t("solar_name"), field.name ?? "", (v) => set({ name: v || null }), { wide: true, placeholder: t("solar_name_hint") })}
        ${selectField(host, t("solar_face"), face ? field.face : "", facesChoices, moveTo, { wide: true })}
        ${numberField(host, t("solar_rows"), rows.length, (v) => set(rowsPatch(field, v)), 1, 1)}
        <label class="nf-field" title=${t("solar_cols_hint")}
          >${t("solar_cols")}
          <input
            type="text"
            inputmode="numeric"
            ?disabled=${!host.admin}
            .value=${columnsText(field)}
            @change=${(e: Event) => {
              const patch = columnsPatch((e.target as HTMLInputElement).value);
              if (patch) set(patch);
            }}
          />
        </label>
      </div>
      ${hint(`${face && !face.unbounded ? `${t("solar_face_size", { w: formatNumber(host.hass, face.lu, 1), h: formatNumber(host.hass, face.ls, 1) })} · ` : ""}${t("solar_cols_hint")}`)}
      ${unevenRows ? choiceButtons(host, (["left", "center", "right"] as const).map((a) => [a, t(`solar_align_${a}` as I18nKey)] as const), field.align ?? "left", (align) => set({ align })) : nothing}
      ${choiceButtons(host, [[true, t("solar_portrait")], [false, t("solar_landscape")]] as const, field.portrait !== false, (portrait) => set({ portrait }))}
      ${choiceButtons(host, [["black", t("solar_look_black")], ["blue", t("solar_look_blue")]] as const, field.look === "blue" ? "blue" : "black", (look) => set({ look }))}
      <div class="nf-form">
        ${moduleSize("module_w", "solar_module_w", 1.13)} ${moduleSize("module_h", "solar_module_h", 1.72)}
        ${numberField(host, t("solar_wp"), field.wp ?? DEFAULT_WP, (v) => set({ wp: bounded(50, 1500, Math.round)(v) }), 5, 50)}
      </div>
      ${actions(
        html`<button class="nf-btn" aria-pressed=${roof.picking} ?disabled=${!host.admin} @click=${() => (roof.picking = !roof.picking)}>${roof.picking ? "✓ " : ""}${t("solar_pick")}</button>`,
        field.skip?.length ? html`<button class="nf-btn" ?disabled=${!host.admin} @click=${() => set({ skip: null })}>${t("solar_pick_all")}</button>` : nothing,
      )}
      ${roof.picking ? hint(t("solar_pick_hint")) : nothing}
      <div class="nf-form">
        ${ground
          ? html`${numberField(host, t("solar_base"), field.base ?? 0, (v) => set({ base: v > 0.001 ? Math.min(60, toThousandths(v)) : null }), 0.05, 0)}
            ${numberField(host, t("solar_rotation"), field.rotation ?? 0, turnGround, 5)}
            ${actions(
              html`<button class="nf-chip" ?disabled=${!host.admin} @click=${() => turnGround((field.rotation ?? 0) - 15)}>↺ 15°</button>`,
              html`<button class="nf-chip" ?disabled=${!host.admin} @click=${() => turnGround((field.rotation ?? 0) + 15)}>↻ 15°</button>`,
            )}`
          : html`${numberField(host, t("solar_u"), field.u, (v) => set({ u: toThousandths(v) }), 0.05)} ${numberField(host, t(face?.wall ? "solar_v_wall" : "solar_v"), field.v, (v) => set({ v: toThousandths(v) }), 0.05)}`}
        ${face?.flat && !ground ? numberField(host, t("solar_rotation"), field.rotation ?? 0, turnFlat, 5) : nothing}
        ${face?.wall ? numberField(host, t("solar_tilt_wall"), field.tilt ?? 0, (v) => set({ tilt: bounded(0, 90, Math.round)(v) }), 5, 0) : nothing}
        ${face?.flat ? numberField(host, t("solar_tilt"), field.tilt ?? 15, (v) => set({ tilt: bounded(0, 45, Math.round)(v) }), 1, 0) : nothing}
        ${face?.flat && !face.unbounded ? checkField(host, t("solar_rack_ew"), field.rack === "ew", (on) => set({ rack: on ? "ew" : null }), { title: t("solar_rack_ew_hint") }) : nothing}
        ${face && !face.flat && !face.wall ? numberField(host, t("solar_rack_tilt"), field.tilt ?? 0, (v) => set({ tilt: bounded(0, 45, Math.round)(v) || null }), 1, 0) : nothing}
        ${face?.wall || face?.flat ? checkField(host, t(flipText), !!field.flip, (flip) => set({ flip })) : nothing}
      </div>
      ${face?.flat && !ground
        ? actions(
            html`<button class="nf-chip" ?disabled=${!host.admin} @click=${() => turnFlat((field.rotation ?? 0) - 90)}>↺ 90°</button>`,
            html`<button class="nf-chip" ?disabled=${!host.admin} @click=${() => turnFlat((field.rotation ?? 0) + 90)}>↻ 90°</button>`,
          )
        : nothing}
      <p class="nf-sub">
        ${t("solar_summary", { n: sum.modules, kwp: formatNumber(host.hass, sum.kwp, 1) })}${sum.modules < planned ? html` · <b>${t("solar_partial", { n: sum.modules, total: planned })}</b>` : nothing}
      </p>
      <h4 class="nf-lib-head">🔗 ${t("solar_string")}</h4>
      <div class="nf-form">${stringSection(deps, field)}</div>
      ${hint(t("solar_string_hint"))} ${hint(t("solar_form_hint"))}
      ${host.admin
        ? actions(
            html`<button class="nf-btn" ?disabled=${!face} @click=${() => face && set({ ...proposeField(face, field.id), portrait: field.portrait })}>${t("solar_fit")}</button>`,
            html`<button class="nf-btn nf-danger" @click=${() => roof.removeField()}>${t("delete")}</button>`,
          )
        : nothing}
    </section>`;
}
