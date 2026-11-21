// Dedicated top-level Settings page (next to Extensions in the header) for everything not directly related to drawing the floorplan.
import { css, html, LitElement } from "lit";
import { translate, type I18nKey } from "../i18n.ts";
import type { Building, Floor } from "../model.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";
import type { EditorHost } from "./editor/host.ts";
import { renderFavorites, renderPresence, renderQuickControlsSection, renderTabletUISection } from "./editor/forms/house.ts";
import { renderSettings } from "./editor/forms/settings.ts";

export class SettingsPage extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
  };

  declare hass: HomeAssistant | undefined;
  declare building: Building | null;

  private t = (key: I18nKey, vars?: Record<string, string | number>): string => translate(this.hass, key, vars);

  private emit(next: Building): void {
    this.building = next;
    this.dispatchEvent(new CustomEvent("plan-changed", { detail: next, bubbles: true, composed: true }));
  }

  private get host(): EditorHost {
    const doc = this.building!;
    const floor = doc.floors[0] ?? null;
    return {
      doc,
      floor,
      hass: this.hass,
      admin: true,
      t: this.t,
      change: (fn: (b: Building, f: Floor) => void) => {
        const next = structuredClone(doc);
        if (next.floors[0]) fn(next, next.floors[0]);
        this.emit(next);
      },
      replace: (next: Building) => this.emit(next),
      pickPoint: () => undefined,
    };
  }

  protected render() {
    if (!this.building) return html``;
    const h = this.host;
    return html`<div class="nf-set">
      <header class="nf-set-head">
        <h2>⚙ ${this.t("settings")}</h2>
        <p class="nf-sub">${this.t("settings_page_intro")}</p>
      </header>
      <div class="nf-set-grid">
        <div class="nf-card">${renderTabletUISection(h)}</div>
        <div class="nf-card">${renderQuickControlsSection(h)}</div>
        <div class="nf-card">${renderSettings(h, { useRoofSections: () => undefined })}</div>
        <div class="nf-card">${renderFavorites(h)}</div>
        <div class="nf-card">${renderPresence(h)}</div>
      </div>
    </div>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      :host {
        display: block;
        overflow: auto;
      }
      .nf-set {
        max-width: 960px;
        margin: 0 auto;
        padding: 20px 16px 48px;
        display: grid;
        gap: 16px;
      }
      .nf-set-head { display: grid; gap: 6px; }
      .nf-set-head h2 { margin: 0; font-size: 20px; }
      .nf-set-grid { display: grid; gap: 14px; }
      .nf-card {
        background: var(--nf-panel, rgba(255, 255, 255, 0.04));
        border: 1px solid var(--nf-line, rgba(255, 255, 255, 0.12));
        border-radius: 14px;
        padding: 12px 16px;
      }
      .nf-section > summary {
        cursor: pointer;
        font-weight: 600;
        font-size: 15px;
        padding: 4px 0;
      }
      .nf-form {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 10px;
        margin-top: 10px;
      }
      .nf-field { display: flex; flex-direction: column; gap: 4px; font-size: 12px; color: var(--nf-muted); }
      .nf-wide { grid-column: 1 / -1; }
      .nf-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
      .nf-own-button {
        padding: 10px;
        border-radius: 10px;
        border: 1px solid var(--nf-line, rgba(255, 255, 255, 0.1));
        background: rgba(255, 255, 255, 0.02);
      }
      .nf-chip { display: inline-flex; align-items: center; gap: 6px; }
      .nf-compass { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
      .nf-compass-dial { width: 92px; height: 92px; flex: 0 0 auto; }
      .nf-compass-ring { fill: rgba(255, 255, 255, 0.04); stroke: var(--nf-line, rgba(255, 255, 255, 0.25)); stroke-width: 2; }
      .nf-compass-up { fill: var(--nf-accent, #40b8ff); }
      .nf-compass-n { fill: #e05a5a; }
      .nf-compass-s { fill: rgba(255, 255, 255, 0.28); }
      .nf-compass-label { font: 700 10px/1 sans-serif; fill: #fff; text-anchor: middle; }
      .nf-compass-label-s { opacity: 0.7; }
      .nf-compass-side { display: grid; gap: 6px; flex: 1; min-width: 180px; }
    `,
  ];
}

if (!customElements.get("nf-settings")) customElements.define("nf-settings", SettingsPage);
