// The furniture studio in the editor's side panel: a template, its measurements and fronts, a front view that follows every change,
// and a button that puts the piece into the plan (it is kept in the "own furniture" pack, so it shows up in the library as well).

import { html, nothing, svg, type TemplateResult } from "lit";
import type { I18nKey } from "../../../i18n.ts";
import { buildItem, cleanRecipe, STUDIO_KINDS, switchKind, type StudioBase, type StudioHandle, type StudioKind, type StudioLamp, type StudioMount, type StudioRecipe } from "../../../studio/recipes.ts";
import type { EditorHost } from "../host.ts";
import { actions, checkField, colorField, hint, numberField, selectField, textField } from "../fields.ts";

export interface StudioDraft {
  recipe: StudioRecipe;
  /** The item being changed, or null for a new one. */
  itemId: string | null;
  busy: boolean;
  error: string | null;
}

export interface StudioActions {
  change(recipe: StudioRecipe): void;
  save(): void;
  close(): void;
}

/** The palette roles offered for body and fronts; they follow the plan's look. Any other value is an own colour. */
const ROLES = ["white", "wood", "body", "metal", "dark", "glass", "accent"] as const;
/** How the roles look in the front view (the 3D view draws them in the current look). */
const SWATCH: Record<string, string> = { white: "#dfe6f2", wood: "#8a6a4a", body: "#3a4a6a", metal: "#9aa7bf", dark: "#1e2638", glass: "#7fd0e8", accent: "#37e0ff", fabric: "#4b5d8c", cushion: "#6a7fb3" };
const swatch = (color: string) => SWATCH[color] ?? color;

/** The item drawn from the front, parts at the back first: what the studio builds, before it goes into the plan. */
function frontView(recipe: StudioRecipe): TemplateResult {
  const item = buildItem(recipe, "preview", "en");
  const [W, , H] = item.size;
  const scale = 180 / Math.max(W, H);
  const [vw, vh] = [W * scale, H * scale];
  const parts = [...item.parts].sort((a, b) => a.z + a.d / 2 - (b.z + b.d / 2));
  return html`<svg class="nf-studio-view" viewBox="-4 -4 ${vw + 8} ${vh + 8}" role="img" aria-hidden="true">
    ${parts.map((p) => {
      const w = p.w * vw;
      const h = p.h * vh;
      const x = (p.x + 0.5) * vw - w / 2;
      const y = vh - (p.y + p.h) * vh;
      const round = p.shape === "cyl" ? Math.min(w, h) / 2 : p.shape === "loft" ? 3 : 1;
      return svg`<rect x=${x} y=${y} width=${Math.max(0.6, w)} height=${Math.max(0.6, h)} rx=${round} fill=${p.screen ? "#0b1020" : swatch(p.color)} stroke="rgba(10,16,32,0.55)" stroke-width="0.8" class=${p.glow ? "nf-studio-glow" : ""} />`;
    })}
  </svg>`;
}

function colorRow(host: EditorHost, label: string, value: string, set: (v: string) => void): TemplateResult {
  const t = host.t;
  const own = !(ROLES as readonly string[]).includes(value);
  const choices = [...ROLES.map((r) => [r, t(r === "body" ? "studio_color_plan" : (`studio_color_${r}` as I18nKey))] as const), ["own", t("studio_color_own")] as const];
  return html`${selectField(host, label, own ? "own" : value, choices, (v) => set(v === "own" ? swatch(value) : v))}
  ${own ? colorField(host, t("studio_color_own"), value, "#8a6a4a", (v) => set(v ?? "wood")) : nothing}`;
}

/** The studio form. */
export function renderStudio(host: EditorHost, draft: StudioDraft, act: StudioActions): TemplateResult {
  const t = host.t;
  const r = draft.recipe;
  const set = (patch: Partial<StudioRecipe>) => act.change(cleanRecipe({ ...r, ...patch }));
  const cm = (key: I18nKey, value: number, field: "w" | "d" | "h") => numberField(host, t(key), value, (v) => set({ [field]: v }), 1, 1);
  const count = (key: I18nKey, value: number, field: "doors" | "drawers" | "shelves") => numberField(host, t(key), value, (v) => set({ [field]: v }), 1, 0);
  const kindFields = (): TemplateResult => {
    switch (r.kind) {
      case "cabinet":
        return html`${count("studio_doors", r.doors, "doors")} ${count("studio_drawers", r.drawers, "drawers")}
          ${r.doors + r.drawers === 0 ? count("studio_shelves", r.shelves, "shelves") : nothing}
          ${selectField<StudioHandle>(host, t("studio_handle"), r.handle, [["bar", t("studio_handle_bar")], ["knob", t("studio_handle_knob")], ["none", t("studio_handle_none")]], (v) => set({ handle: v }))}
          ${selectField<StudioBase>(host, t("studio_base"), r.base, [["plinth", t("studio_base_plinth")], ["legs", t("studio_base_legs")], ["none", t("studio_base_none")]], (v) => set({ base: v }))}`;
      case "shelf":
        return html`${count("studio_shelves", r.shelves, "shelves")} ${checkField(host, t("studio_back"), r.back, (on) => set({ back: on }))}`;
      case "lamp":
        return selectField<StudioLamp>(host, t("studio_lamp"), r.lamp, [["floor", t("studio_lamp_floor")], ["table", t("studio_lamp_table")], ["pendant", t("studio_lamp_pendant")], ["wall", t("studio_lamp_wall")]], (v) => set({ lamp: v }));
      case "device":
        return html`${checkField(host, t("studio_display"), r.display, (on) => set({ display: on }))}
          ${selectField<StudioMount>(host, t("studio_mount"), r.mount, [["floor", t("studio_mount_floor")], ["surface", t("studio_mount_surface")], ["wall", t("studio_mount_wall")]], (v) => set({ mount: v }))}
          ${r.mount === "floor" ? selectField<StudioBase>(host, t("studio_base"), r.base, [["none", t("studio_base_none")], ["legs", t("studio_base_legs")], ["plinth", t("studio_base_plinth")]], (v) => set({ base: v })) : nothing}`;
    }
  };
  return html`<section class="nf-studio">
    <h3>🛠️ ${t(draft.itemId ? "studio_title_edit" : "studio_title")}</h3>
    ${hint(t("studio_hint"))}
    <div class="nf-lib-chips" role="group" aria-label=${t("studio_kind")}>
      ${STUDIO_KINDS.map((k: StudioKind) => html`<button class="nf-chip" aria-pressed=${r.kind === k} ?disabled=${!!draft.itemId && r.kind !== k} @click=${() => r.kind !== k && act.change(switchKind(r, k))}>${t(`studio_kind_${k}` as I18nKey)}</button>`)}
    </div>
    ${frontView(r)}
    <div class="nf-form">
      ${textField(host, t("studio_name"), r.name, (v) => set({ name: v }), { wide: true, maxlength: 60, placeholder: t(`studio_kind_${r.kind}` as I18nKey) })}
      ${cm("studio_width", r.w, "w")} ${cm("studio_depth", r.d, "d")} ${cm("studio_height", r.h, "h")} ${kindFields()}
      ${colorRow(host, t(r.kind === "lamp" ? "studio_color_lamp_body" : "studio_color_body"), r.body, (v) => set({ body: v }))}
      ${r.kind === "cabinet" || r.kind === "shelf" || r.kind === "lamp" || r.display
        ? colorRow(host, t(r.kind === "lamp" ? "studio_color_shade" : r.kind === "device" ? "studio_color_display" : r.kind === "shelf" ? "studio_color_boards" : "studio_color_front"), r.front, (v) => set({ front: v }))
        : nothing}
    </div>
    ${draft.error ? html`<p class="nf-sub nf-warn">${draft.error}</p>` : nothing}
    ${actions(
      html`<button class="nf-btn nf-primary" ?disabled=${draft.busy || !host.admin} @click=${() => act.save()}>${t(draft.itemId ? "studio_save" : "studio_place")}</button>`,
      html`<button class="nf-btn" ?disabled=${draft.busy} @click=${() => act.close()}>${t("cancel")}</button>`,
    )}
  </section>`;
}
