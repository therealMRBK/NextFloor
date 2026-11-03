// First steps in the editor: a short tour on the first start (four cards, skippable), and the sheet of the editor's keys (press ?).

import { html, nothing, type TemplateResult } from "lit";
import type { I18nKey } from "../../i18n.ts";

const TOUR_KEY = "nextfloor.tour_done";

/** The keys of the editor and what they do (the texts are in the language files). */
export const KEYS: readonly (readonly [string, I18nKey])[] = [
  ["Ctrl Z", "keys_undo"],
  ["Ctrl Shift Z · Ctrl Y", "keys_redo"],
  ["Ctrl D", "keys_duplicate"],
  ["Entf / Delete", "keys_delete"],
  ["← ↑ → ↓", "keys_nudge"],
  ["Shift + ←↑→↓", "keys_nudge_10"],
  ["Alt + ←↑→↓", "keys_nudge_1"],
  ["R · Shift R", "keys_rotate"],
  ["L", "keys_lock"],
  ["Enter", "keys_close_shape"],
  ["Esc", "keys_escape"],
  ["Shift", "keys_straight"],
  ["?", "keys_sheet"],
];

export const TOUR_STEPS: readonly (readonly [I18nKey, I18nKey])[] = [
  ["tour_1_title", "tour_1"],
  ["tour_2_title", "tour_2"],
  ["tour_3_title", "tour_3"],
  ["tour_4_title", "tour_4"],
];

/** Whether the tour is still due on this browser (storage may be blocked: then it is not shown again and again). */
export function tourDue(): boolean {
  try {
    return localStorage.getItem(TOUR_KEY) !== "1";
  } catch {
    return false;
  }
}

export function tourDone(): void {
  try {
    localStorage.setItem(TOUR_KEY, "1");
  } catch {
    // no storage: the tour simply closes
  }
}

export function renderKeySheet(t: (key: I18nKey) => string, close: () => void): TemplateResult {
  return html`<div class="nf-keys" role="dialog" aria-label=${t("keys_title")} @click=${(e: Event) => e.target === e.currentTarget && close()}>
    <div class="nf-keys-card">
      <div class="nf-h3row"><h3>⌨ ${t("keys_title")}</h3><button class="nf-btn nf-field-btn" aria-label=${t("close")} @click=${close}>✕</button></div>
      <dl>
        ${KEYS.map(([keys, text]) => html`<dt>${keys.split(" · ").map((k, i) => html`${i ? " · " : ""}<kbd>${k}</kbd>`)}</dt><dd>${t(text)}</dd>`)}
      </dl>
    </div>
  </div>`;
}

/** The buttons the tour names, in the words the editor shows them with. */
function buttonNames(t: (key: I18nKey, vars?: Record<string, string | number>) => string): Record<string, string> {
  return {
    rect: t("tool_rect"),
    free: t("tool_polygon"),
    rooms: t("area_rooms", { n: "…" }).replace(/\s*\(…\)\s*$/, ""),
    opening: t("tool_opening"),
    furniture: t("tool_furniture"),
    split: t("split_3d"),
    check: t("check_open"),
  };
}

export function renderTour(t: (key: I18nKey, vars?: Record<string, string | number>) => string, step: number | null, go: (step: number | null) => void): TemplateResult | typeof nothing {
  if (step === null || step >= TOUR_STEPS.length) return nothing;
  const [title, text] = TOUR_STEPS[step];
  const last = step === TOUR_STEPS.length - 1;
  return html`<div class="nf-tour" role="dialog" aria-label=${t("tour_title")}>
    <div class="nf-tour-step">${step + 1} / ${TOUR_STEPS.length}</div>
    <h3>${t(title)}</h3>
    <p>${t(text, buttonNames(t))}</p>
    <div class="nf-actions">
      ${step > 0 ? html`<button class="nf-btn" @click=${() => go(step - 1)}>‹ ${t("tour_back")}</button>` : nothing}
      <button class="nf-btn nf-primary" @click=${() => go(last ? null : step + 1)}>${t(last ? "tour_done" : "tour_next")}</button>
      ${last ? nothing : html`<button class="nf-link" @click=${() => go(null)}>${t("tour_skip")}</button>`}
    </div>
  </div>`;
}
