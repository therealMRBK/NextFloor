// The furniture studio part of the furniture form: a preset to start from, then kind, columns, rows, fronts, base, finish and
// the light strip of a unit in any size.

import { html, nothing, type TemplateResult } from "lit";
import { STUDIO_BASES, STUDIO_FINISHES, STUDIO_FRONTS, STUDIO_KINDS, STUDIO_PRESETS, studioCols, studioConfig, type StudioConfig } from "../../../geometry/studio.ts";
import type { I18nKey } from "../../../i18n.ts";
import type { Furniture } from "../../../model.ts";
import { checkField, hint, numberField, selectField } from "../fields.ts";
import type { EditorHost } from "../host.ts";

export function studioForm(host: EditorHost, item: Furniture, update: (patch: Partial<Furniture>) => void): TemplateResult {
  const t = host.t;
  const cfg = studioConfig(item);
  const set = (patch: Partial<StudioConfig>) => update({ studio: { ...cfg, ...patch } });
  const preset = (name: string) => {
    const p = STUDIO_PRESETS[name];
    if (!p) return;
    const [w, d, h] = p.size;
    update({ studio: { ...cfg, cols: null, light: false, ...p.config }, w, d, h, mount_y: null });
  };
  return html`<div class="nf-form">
    <div class="nf-field nf-wide">
      <span>${t("studio_presets")}</span>
      <div class="nf-actions">
        ${Object.keys(STUDIO_PRESETS).map((name) => html`<button class="nf-btn" ?disabled=${!host.admin} @click=${() => preset(name)}>${t(`studio_preset_${name}` as I18nKey)}</button>`)}
      </div>
    </div>
    ${selectField(host, t("studio_kind"), cfg.kind, STUDIO_KINDS.map((k) => [k, t(`studio_kind_${k}` as I18nKey)] as const), (kind) => set({ kind }))}
    ${cfg.kind !== "shelf" ? selectField(host, t("studio_front"), cfg.front, STUDIO_FRONTS.map((f) => [f, t(`studio_front_${f}` as I18nKey)] as const), (front) => set({ front })) : nothing}
    ${numberField(host, t("studio_cols"), cfg.cols ?? studioCols(cfg, item.w), (v) => set({ cols: Math.round(Math.min(12, Math.max(1, v))) }), 1, 1)}
    ${cfg.cols != null ? html`<button class="nf-btn nf-field-btn" ?disabled=${!host.admin} @click=${() => set({ cols: null })}>${t("height_auto")}</button>` : nothing}
    ${numberField(host, t("studio_rows"), cfg.rows, (v) => set({ rows: Math.round(Math.min(10, Math.max(1, v))) }), 1, 1)}
    ${cfg.kind !== "wall" ? selectField(host, t("studio_base"), cfg.base, STUDIO_BASES.map((b) => [b, t(`studio_base_${b}` as I18nKey)] as const), (base) => set({ base })) : nothing}
    ${selectField(host, t("studio_finish"), cfg.finish, STUDIO_FINISHES.map((f) => [f, t(`studio_finish_${f}` as I18nKey)] as const), (finish) => set({ finish }))}
    ${checkField(host, t("studio_light"), cfg.light, (light) => set({ light }), { wide: false })}
    ${hint(t("studio_hint"), "nf-wide")}
  </div>`;
}
