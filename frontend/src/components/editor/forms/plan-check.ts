// The plan check in the side panel: what is missing or off, floor by floor, each with a button that shows the place or fixes it.

import { html, nothing, type TemplateResult } from "lit";
import type { I18nKey } from "../../../i18n.ts";
import type { EditorHost } from "../host.ts";
import { hint } from "../fields.ts";
import type { CheckFinding } from "../ops/plan-check.ts";

export interface PlanCheckActions {
  fix(finding: CheckFinding): void;
  close(): void;
}

const ICON: Record<CheckFinding["kind"], string> = {
  room_no_area: "🏷️",
  areas_unplaced: "➕",
  devices_unplaced: "📍",
  rooms_overlap: "⧉",
  opening_off_wall: "🚪",
  entity_missing: "❓",
  furniture_entity_missing: "❓",
  standby: "🔌",
  battery_low: "🪫",
};

/** The text of a finding; a room without an area that has a free area of its name says so. */
function textOf(host: EditorHost, f: CheckFinding): string {
  const key = f.kind === "room_no_area" && f.vars.area ? "check_room_no_area_named" : `check_${f.kind}`;
  return host.t(key as I18nKey, f.vars);
}

function fixLabel(host: EditorHost, f: CheckFinding): string {
  const t = host.t;
  switch (f.fix.do) {
    case "set_area":
      return t("check_fix_set_area", { area: String(f.vars.area) });
    case "add_area_rooms":
      return t("check_fix_add_rooms");
    case "place_devices":
      return t("check_fix_place", { n: f.fix.entityIds.length });
    case "remove_placements":
      return t("check_fix_remove", { n: f.fix.entityIds.length });
    default:
      return t("check_fix_show");
  }
}

export function renderPlanCheck(host: EditorHost, findings: readonly CheckFinding[], act: PlanCheckActions): TemplateResult {
  const t = host.t;
  const floors = host.doc.floors.filter((fl) => findings.some((f) => f.floorId === fl.id));
  return html`<section class="nf-check-panel">
    <div class="nf-h3row"><h3>✓ ${t("check_title")}</h3><button class="nf-btn nf-field-btn" title=${t("close")} @click=${() => act.close()}>✕</button></div>
    ${findings.length === 0
      ? html`<p class="nf-sub nf-check-ok">✅ ${t("check_all_good")}</p>`
      : html`${hint(t("check_hint", { n: findings.length }))}
        ${floors.map(
          (fl) => html`<h4 class="nf-check-floor">${fl.name}</h4>
            <ul class="nf-check-list">
              ${findings
                .filter((f) => f.floorId === fl.id)
                .map(
                  (f) => html`<li>
                    <span class="nf-check-icon" aria-hidden="true">${ICON[f.kind]}</span><span class="nf-check-text">${textOf(host, f)}</span>
                    <button class="nf-btn ${f.changes ? "nf-primary" : ""}" ?disabled=${f.changes && !host.admin} @click=${() => act.fix(f)}>${fixLabel(host, f)}</button>
                  </li>`,
                )}
            </ul>`,
        )}`}
  </section>`;
}

/** The button that opens the check, with the number of findings when it was last run. */
export const planCheckButton = (host: EditorHost, open: () => void): TemplateResult | typeof nothing =>
  html`<button class="nf-btn nf-check-open" title=${host.t("check_open_hint")} @click=${open}>✓ ${host.t("check_open")}</button>`;
