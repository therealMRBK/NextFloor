// The stair part of the furniture form: shape and turn, build, steps, flight width, up or down, railing, and the
// resulting rise, going and step measure with a warning when they are uncomfortable.

import { html, svg, type TemplateResult } from "lit";
import { DEFAULT_STAIR, STAIR_BUILDS, STAIR_OPENINGS, STAIR_RAILS, STAIR_SHAPES, STAIR_SIZES, stairConfig, stairLayout, treadCentre, type StairConfig, type StairShape } from "../../../geometry/stairs.ts";
import type { I18nKey } from "../../../i18n.ts";
import type { Furniture } from "../../../model.ts";
import { formatNumber } from "../../../i18n.ts";
import { checkField, hint, numberField, selectField } from "../fields.ts";
import type { EditorHost } from "../host.ts";

export interface StairActions {
  update(patch: Partial<Furniture>): void;
}

/** Rise, average going on the walking line and the step measure (2 × rise + going) in metres. */
export function stairMeasures(item: Pick<Furniture, "w" | "d" | "h" | "stair">): { rise: number; going: number; measure: number; steps: number } {
  const layout = stairLayout(stairConfig(item), item.w, item.d, item.h);
  const walk = layout.treads.map(treadCentre);
  let length = 0;
  for (let i = 1; i < walk.length; i++) length += Math.hypot(walk[i][0] - walk[i - 1][0], walk[i][1] - walk[i - 1][1]);
  const going = walk.length > 1 ? length / (walk.length - 1) : 0;
  return { rise: layout.rise, going, measure: 2 * layout.rise + going, steps: layout.steps };
}

/** A tiny picture of a shape for its button. */
function shapeIcon(shape: StairShape): TemplateResult {
  const [w, d] = STAIR_SIZES[shape];
  const layout = stairLayout({ ...DEFAULT_STAIR, shape }, w, d, 2.8);
  const s = 26 / Math.max(w, d);
  return html`<svg viewBox="-14 -14 28 28" width="28" height="28" aria-hidden="true">
    ${layout.treads.map((t) => svg`<polygon points=${t.poly.map(([x, z]) => `${x * s},${z * s}`).join(" ")} fill=${t.landing ? "currentColor" : "none"} fill-opacity="0.25" stroke="currentColor" stroke-width="0.8" />`)}
  </svg>`;
}

export function stairForm(host: EditorHost, item: Furniture, actions: StairActions): TemplateResult {
  const t = host.t;
  const cfg = stairConfig(item);
  const set = (patch: Partial<StairConfig>) => actions.update({ stair: { ...cfg, ...patch } });
  const turned = cfg.shape !== "straight";
  const pickShape = (shape: StairShape) => {
    const [w, d] = STAIR_SIZES[shape];
    actions.update({ stair: { ...cfg, shape, run_width: null }, w, d });
  };
  const below = host.floor ? host.doc.floors.filter((f) => f.elevation < host.floor!.elevation).sort((p, q) => q.elevation - p.elevation)[0] : undefined;
  const above = host.floor ? host.doc.floors.filter((f) => f.elevation > host.floor!.elevation).sort((p, q) => p.elevation - q.elevation)[0] : undefined;
  const toggleDown = (down: boolean) => {
    // the height follows the floor it leads to, when that floor is drawn
    const target = down ? (below && host.floor ? host.floor.elevation - below.elevation : null) : above && host.floor ? above.elevation - host.floor.elevation : null;
    actions.update({ stair: { ...cfg, down }, ...(target ? { h: Math.round(target * 1000) / 1000 } : {}) });
  };
  const m = stairMeasures(item);
  const cm = (v: number) => formatNumber(host.hass, v * 100, 1);
  // DIN 18065 / the usual rule: the step measure 2 × rise + going should lie between 59 and 65 cm, the rise not above 21 cm
  const comfortable = m.measure >= 0.59 && m.measure <= 0.65 && m.rise <= 0.21;
  return html`<div class="nf-form">
    <div class="nf-field nf-wide">
      <span>${t("stair_shape")}</span>
      <div class="nf-swatches nf-stair-shapes" role="radiogroup" aria-label=${t("stair_shape")}>
        ${STAIR_SHAPES.map(
          (shape) => html`<button type="button" class="nf-btn nf-stair-shape" role="radio" aria-checked=${shape === cfg.shape} title=${t(`stair_shape_${shape}` as I18nKey)} ?disabled=${!host.admin} @click=${() => pickShape(shape)}>
            ${shapeIcon(shape)}<span>${t(`stair_shape_${shape}` as I18nKey)}</span>
          </button>`,
        )}
      </div>
    </div>
    ${turned ? selectField(host, t("stair_turn"), cfg.turn, [["left", t("stair_turn_left")], ["right", t("stair_turn_right")]] as const, (turn) => set({ turn })) : ""}
    ${selectField(host, t("stair_build"), cfg.build, STAIR_BUILDS.map((b) => [b, t(`stair_build_${b}` as I18nKey)] as const), (build) => set({ build }))}
    ${cfg.build !== "solid" ? checkField(host, t("stair_risers"), cfg.risers, (risers) => set({ risers }), { wide: false }) : ""}
    ${numberField(host, t("stair_steps"), cfg.steps ?? m.steps, (v) => set({ steps: Math.round(Math.min(40, Math.max(2, v))) }), 1, 2)}
    ${cfg.steps != null ? html`<button class="nf-btn nf-field-btn" ?disabled=${!host.admin} @click=${() => set({ steps: null })}>${t("height_auto")}</button>` : ""}
    ${turned && cfg.shape !== "spiral"
      ? html`${numberField(host, t("stair_run_width"), cfg.run_width ?? stairLayout(cfg, item.w, item.d, item.h).flight, (v) => set({ run_width: Math.max(0.4, v) }), 0.01, 0.4)}
        ${cfg.run_width != null ? html`<button class="nf-btn nf-field-btn" ?disabled=${!host.admin} @click=${() => set({ run_width: null })}>${t("height_auto")}</button>` : ""}`
      : ""}
    ${selectField(host, t("stair_rail"), cfg.rail, STAIR_RAILS.map((r) => [r, t(`stair_rail_${r}` as I18nKey)] as const), (rail) => set({ rail }))}
    ${checkField(host, t("stair_down"), cfg.down, toggleDown, { title: t("stair_down_hint") })}
    ${selectField(host, t("stair_opening"), cfg.opening, STAIR_OPENINGS.map((o) => [o, t(`stair_opening_${o}` as I18nKey)] as const), (opening) => set({ opening }), { wide: true, title: t("stair_opening_hint") })}
    <p class="nf-sub nf-wide ${comfortable ? "" : "nf-pack-error"}">
      ${t("stair_measures", { steps: m.steps, rise: cm(m.rise), going: cm(m.going), measure: cm(m.measure) })} ${comfortable ? "✓" : `– ${t("stair_uncomfortable")}`}
    </p>
    ${hint(t(cfg.down ? "stair_down_note" : cfg.opening === "headroom" ? "stair_up_note" : "stair_up_note_plain"), "nf-wide")}
  </div>`;
}
