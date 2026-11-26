// Pieces the roof and solar forms share: the floor buttons, the lock button, the face names, and rows of exclusive buttons.

import { html, nothing, type TemplateResult } from "lit";
import { formatNumber, type I18nKey } from "../../../i18n.ts";
import { faceCompass, GROUND, type RoofFace } from "../../../solar.ts";
import type { EditorHost } from "../host.ts";
import type { RoofController } from "../roof-controller.ts";

/** What the roof forms need besides the host and the controller. */
export interface RoofPanelDeps {
  host: EditorHost;
  roof: RoofController;
  /** The floor the plan shows. */
  floorId: string | null;
  setFloorId(id: string): void;
  toggleLockPlan(): void;
}

/** One button per floor, top floor first: the plan shows that floor's rooms to draw along. Nothing for a single floor. */
export function floorButtons(deps: RoofPanelDeps): TemplateResult | typeof nothing {
  const floors = deps.roof.floorsTopDown();
  if (floors.length < 2) return nothing;
  return html`<div class="nf-seg nf-dev-source">${floors.map((f) => html`<button aria-pressed=${f.id === deps.floorId} @click=${() => deps.setFloorId(f.id)}>${f.name}</button>`)}</div>`;
}

/** The "fix" button of a section, window or field, which keeps it from being moved by accident. */
export function lockButton(host: EditorHost, locked: boolean, toggle: () => void): TemplateResult | typeof nothing {
  if (!host.admin) return nothing;
  return html`<button class="nf-btn nf-fix" aria-pressed=${locked} title=${host.t("fix_hint")} @click=${toggle}>${locked ? `🔒 ${host.t("unfix")}` : `🔓 ${host.t("fix")}`}</button>`;
}

/** A row of buttons of which one is pressed. */
export function choiceButtons<T extends string | boolean>(host: EditorHost, options: readonly (readonly [T, string])[], current: T, pick: (value: T) => void): TemplateResult {
  return html`<div class="nf-seg nf-dev-source">${options.map(([value, label]) => html`<button aria-pressed=${value === current} ?disabled=${!host.admin} @click=${() => pick(value)}>${label}</button>`)}</div>`;
}

/** "Main roof · south · 35°", "Section 2 · flat roof", "Wall ground floor · east · 6.2 m", or "Free-standing". */
export function faceLabel(host: EditorHost, face: RoofFace): string {
  const { t, doc, hass } = host;
  const compass = t(`compass_${faceCompass(face, doc.settings.north ?? 0)}` as I18nKey);
  if (face.key === GROUND) return t("solar_ground");
  if (face.wall) {
    const floor = doc.floors.find((f) => f.id === face.wall!.floorId);
    return `${t("solar_wall")} ${floor?.name ?? ""} · ${compass} · ${formatNumber(hass, face.lu, 1)} m`;
  }
  const sections = doc.settings.roof.sections ?? [];
  if (face.side === "front") return `${t("solar_section", { n: sections.findIndex((s) => s.id === face.section) + 1 })} · ${t("solar_front")} · ${compass}`;
  const part = face.section ? t("solar_section", { n: sections.findIndex((s) => s.id === face.section) + 1 }) : t("solar_main");
  return face.flat ? `${part} · ${t("solar_flat")}` : `${part} · ${compass} · ${Math.round(face.pitch)}°`;
}
