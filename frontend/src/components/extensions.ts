// The "Extensions" page of the panel: the features built into NextFloor and the furniture packs (the ones
// that come with it and the user's own). It lives in the editor bundle (loaded with it) and is shown to admins only.

import { css, html, LitElement, nothing } from "lit";
import { importPack, removePack } from "../api.ts";
import { FEATURES, REPO_URL } from "../features.ts";
import { translate, type I18nKey } from "../i18n.ts";
import { packName, type FurniturePack } from "../packs.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";

export class Extensions extends LitElement {
  static properties = {
    hass: { attribute: false },
    packs: { attribute: false },
    _packMsg: { state: true },
  };

  declare hass: HomeAssistant | undefined;
  declare packs: FurniturePack[] | undefined;
  private declare _packMsg: { ok: boolean; text: string } | null;

  constructor() {
    super();
    this._packMsg = null;
  }

  private get isAdmin(): boolean {
    return this.hass?.user?.is_admin ?? false;
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  protected render() {
    return html`<div class="nf-ext">
      <header class="nf-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="nf-sub">${this.t("ext_intro")}</p>
        <div class="nf-ext-actions">
          <a class="nf-btn" href="${REPO_URL}/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="nf-btn" href="${REPO_URL}/discussions" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="nf-btn" href="${REPO_URL}#readme" target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      <section class="nf-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="nf-ext-features">
          ${FEATURES.map(
            (f) => html`<div class="nf-ext-feature nf-ext-on">
              <b>✓ ${this.t(`feature_name_${f}` as I18nKey)}</b>
              <span class="nf-sub">${this.t(`feature_text_${f}` as I18nKey)}</span>
            </div>`,
          )}
        </div>
      </section>
      ${this.renderPacks()}
    </div>`;
  }

  private renderPacks() {
    const packs = this.packs ?? [];
    return html`<section class="nf-ext-card">
      <h3>${this.t("packs")}</h3>
      ${packs.map(
        (p) => html`<div class="nf-pack">
          <div>
            <b>${packName(p, this.hass?.language ?? "de")}</b>
            <span class="nf-sub">${this.t("pack_by", { publisher: p.publisher, n: p.items.length })}</span>
            ${p.description ? html`<span class="nf-sub">${p.description}</span>` : nothing}
          </div>
          ${p.builtin
            ? html`<span class="nf-ext-state">${this.t("pack_builtin")}</span>`
            : this.isAdmin
              ? html`<button class="nf-btn nf-danger" @click=${() => this.deletePack(p)}>${this.t("pack_remove")}</button>`
              : nothing}
        </div>`,
      )}
      ${this.isAdmin
        ? html`<label class="nf-btn nf-primary nf-pack-import">
            ${this.t("pack_import")}
            <input type="file" accept=".nfpack,.json,application/json" multiple hidden @change=${(e: Event) => this.importPackFile(e)} />
          </label>`
        : nothing}
      ${this._packMsg ? html`<p class="nf-sub ${this._packMsg.ok ? "nf-notice" : "nf-pack-error"}">${this._packMsg.text}</p>` : nothing}
      <p class="nf-sub">${this.t("packs_hint")}</p>
    </section>`;
  }

  private async importPackFile(e: Event): Promise<void> {
    const input = e.target as HTMLInputElement;
    const files = [...(input.files ?? [])];
    input.value = "";
    if (!files.length || !this.hass) return;
    const done: string[] = [];
    const failed: string[] = [];
    for (const file of files) {
      try {
        const res = await importPack(this.hass, await file.text());
        done.push(this.t("pack_imported", { name: res.name, publisher: res.publisher, n: res.items }));
      } catch (err) {
        const { code, message } = (err ?? {}) as { code?: string; message?: string };
        const key = `pack_error_${code}` as I18nKey;
        const text = this.t(key, { detail: message ?? String(err) });
        failed.push(`${file.name}: ${text === key ? this.t("pack_error_other", { detail: message ?? String(err) }) : text}`);
      }
    }
    if (done.length) this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true }));
    const summary = files.length > 1 ? [this.t("packs_imported_n", { n: done.length, total: files.length })] : [];
    this._packMsg = { ok: failed.length === 0, text: [...summary, ...done, ...failed].join(" · ") };
  }

  private async deletePack(pack: FurniturePack): Promise<void> {
    if (!this.hass || !confirm(this.t("pack_remove_confirm", { name: packName(pack, this.hass?.language ?? "de") }))) return;
    await removePack(this.hass, pack.id);
    this._packMsg = null;
    this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true }));
  }

  static styles = [
    tokens,
    controls,
    css`
      .nf-updates {
        border-color: color-mix(in srgb, var(--nf-accent) 60%, transparent);
        background: color-mix(in srgb, var(--nf-accent) 8%, transparent);
      }
      .nf-updates p {
        margin: 4px 0;
      }
      .nf-loyalty {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin: 6px 0 12px;
        padding: 10px 12px;
        border: 1px solid color-mix(in srgb, #ffb547 55%, transparent);
        border-radius: 12px;
        background: color-mix(in srgb, #ffb547 10%, transparent);
      }
      .nf-loyalty code {
        font-size: 1.05em;
        font-weight: 700;
        letter-spacing: 0.04em;
      }
      .nf-offer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 10px;
      }
      .nf-offer {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid var(--nf-line);
        border-radius: 12px;
        color: inherit;
        text-decoration: none;
        background: color-mix(in srgb, var(--nf-accent) 4%, transparent);
      }
      .nf-offer:hover {
        border-color: var(--nf-accent);
      }
      .nf-offer img,
      .nf-offer-ph {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .nf-offer-ph {
        display: grid;
        place-items: center;
        font-size: 28px;
        color: var(--nf-accent);
      }
      .nf-offer-body {
        display: flex;
        flex-direction: column;
        gap: 3px;
        padding: 10px 12px;
      }
      .nf-offer-new {
        align-self: flex-start;
        padding: 1px 8px;
        border-radius: 999px;
        background: #ffb547;
        color: #1a1200;
        font-size: 11px;
        font-weight: 700;
      }
      .nf-offer-kind {
        color: var(--nf-accent);
        font-size: 12px;
      }
      :host {
        display: block;
        overflow: auto;
      }
      .nf-ext {
        max-width: 920px;
        margin: 0 auto;
        padding: 20px 16px 40px;
        display: grid;
        gap: 16px;
      }
      .nf-ext-head {
        display: grid;
        gap: 8px;
        justify-items: start;
      }
      .nf-ext-head a {
        text-decoration: none;
      }
      .nf-ext-actions,
      .nf-ext-links {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
      }
      .nf-ext-head h2 {
        margin: 0;
        font-size: 22px;
      }
      .nf-ext-card {
        padding: 14px 16px;
        border: 1px solid var(--nf-line);
        border-radius: 14px;
        background: var(--nf-chrome);
      }
      .nf-ext-card h3 {
        margin: 0 0 8px;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--nf-soft);
      }
      .nf-ext-features {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 10px;
      }
      .nf-ext-feature {
        display: grid;
        gap: 6px;
        align-content: start;
        padding: 12px;
        border: 1px solid var(--nf-line);
        border-radius: 12px;
      }
      .nf-ext-on {
        border-color: var(--nf-accent);
      }
      .nf-ext-state {
        color: var(--nf-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .nf-ext-link {
        color: var(--nf-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .nf-sub {
        color: var(--nf-soft);
        font-size: 13px;
      }
      .nf-notice {
        color: var(--nf-accent);
      }
      .nf-pack {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 8px 0;
        border-bottom: 1px solid var(--nf-line);
      }
      .nf-pack div {
        display: grid;
        gap: 2px;
      }
      .nf-pack-import {
        display: block;
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
      }
      .nf-pack-error {
        color: var(--nf-danger);
      }
    `,
  ];
}

if (!customElements.get("nf-extensions")) customElements.define("nf-extensions", Extensions);
