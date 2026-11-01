// The "Furniture packs" block of the Extensions page: the user's own packs, imported from files or pasted
// as JSON, and removing them. The packs that come with NextFloor are always there and are not listed.
// Importing or removing fires `packs-changed`; the panel loads the packs again.

import { css, html, LitElement, nothing } from "lit";
import { importPack, removePack } from "../api.ts";
import { REPO_URL } from "../features.ts";
import { translate, type I18nKey } from "../i18n.ts";
import { packLabel } from "../furniture-names.ts";
import type { FurniturePack } from "../packs.ts";
import { downloadStorePack, fetchStorePacks, storePackState, STORE_REPO, type StorePack } from "../plugins/store.ts";

/** The furniture builder on the project's site. */
const BUILDER_URL = "https://therealmrbk.github.io/NextFloor/builder/";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";

export class PackManager extends LitElement {
  static properties = {
    hass: { attribute: false },
    packs: { attribute: false },
    _msg: { state: true },
    _busy: { state: true },
    _store: { state: true },
    _storeError: { state: true },
  };

  declare hass: HomeAssistant | undefined;
  declare packs: FurniturePack[] | undefined;
  declare _msg: { ok: boolean; text: string } | null;
  declare _busy: boolean;
  /** The community furniture of the store, once loaded (null: not asked for yet, "loading" while it comes). */
  declare _store: StorePack[] | "loading" | null;
  declare _storeError: string | null;

  constructor() {
    super();
    this._msg = null;
    this._busy = false;
    this._store = null;
    this._storeError = null;
  }

  /** The store's list is fetched only when asked for (no request to GitHub unless the user wants it). */
  private async loadStore(): Promise<void> {
    this._store = "loading";
    this._storeError = null;
    try {
      this._store = await fetchStorePacks();
    } catch (err) {
      this._store = null;
      this._storeError = this.t("community_failed", { detail: (err as Error)?.message ?? String(err) });
    }
  }

  private async installStore(entry: StorePack): Promise<void> {
    this._busy = true;
    this._msg = null;
    try {
      const res = await importPack(this.hass!, await downloadStorePack(entry));
      this._msg = { ok: true, text: this.t("pack_imported", { name: res.name, publisher: res.publisher, n: res.items }) };
      this.changed();
    } catch (err) {
      this._msg = { ok: false, text: this.errorText(err) };
    } finally {
      this._busy = false;
    }
  }

  private renderStore() {
    const installed = this.packs ?? [];
    const store = this._store;
    return html`<h4>${this.t("community_title")}</h4>
      <p class="nf-sub">
        ${this.t("community_intro")} <a href=${BUILDER_URL} target="_blank" rel="noopener">${this.t("community_builder")}</a> ·
        <a href=${`https://github.com/${STORE_REPO}#community-furniture`} target="_blank" rel="noopener">${this.t("community_how")}</a>
      </p>
      ${store === null
        ? html`<div><button class="nf-btn" @click=${() => void this.loadStore()}>${this.t("community_load")}</button></div>`
        : store === "loading"
          ? html`<p class="nf-sub">${this.t("loading")}</p>`
          : store.length
            ? html`<ul>
                ${store.map((entry) => {
                  const state = storePackState(entry, installed);
                  return html`<li>
                    <div class="nf-pack-main">
                      <strong>${entry.name}</strong>
                      <span class="nf-detail">${entry.id} · ${this.t("pack_by", { publisher: entry.author, n: entry.items })}</span>
                      ${entry.description ? html`<span class="nf-detail">${entry.description}</span>` : nothing}
                    </div>
                    <button class="nf-btn ${state === "installed" ? "" : "nf-primary"}" ?disabled=${this._busy || state === "installed"} @click=${() => void this.installStore(entry)}>
                      ${this.t(state === "installed" ? "community_installed" : state === "update" ? "community_update" : "community_install")}
                    </button>
                  </li>`;
                })}
              </ul>`
            : html`<p class="nf-sub">${this.t("community_none")}</p>`}
      ${this._storeError ? html`<p class="nf-error" role="alert">${this._storeError}</p>` : nothing}`;
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  private changed(): void {
    this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true }));
  }

  private errorText(err: unknown): string {
    const { code, message } = (err ?? {}) as { code?: string; message?: string };
    const detail = message ?? String(err);
    const key = `pack_error_${code}` as I18nKey;
    const text = this.t(key, { detail });
    return text === key ? this.t("pack_error_other", { detail }) : text;
  }

  /** Imports each text as a pack; labels name the files in the message (empty for pasted JSON). Returns how many went in. */
  private async importTexts(sources: { label: string; text: string }[]): Promise<number> {
    if (!this.hass || !sources.length) return 0;
    this._busy = true;
    const done: string[] = [];
    const failed: string[] = [];
    for (const { label, text } of sources) {
      try {
        const res = await importPack(this.hass, text);
        done.push(this.t("pack_imported", { name: res.name, publisher: res.publisher, n: res.items }));
      } catch (err) {
        failed.push(label ? `${label}: ${this.errorText(err)}` : this.errorText(err));
      }
    }
    this._busy = false;
    if (done.length) this.changed();
    const summary = sources.length > 1 ? [this.t("packs_imported_n", { n: done.length, total: sources.length })] : [];
    this._msg = { ok: failed.length === 0, text: [...summary, ...done, ...failed].join(" · ") };
    return done.length;
  }

  private async importFiles(e: Event): Promise<void> {
    const input = e.target as HTMLInputElement;
    const files = [...(input.files ?? [])];
    input.value = "";
    await this.importTexts(await Promise.all(files.map(async (f) => ({ label: f.name, text: await f.text() }))));
  }

  private async importPasted(): Promise<void> {
    const area = this.renderRoot.querySelector<HTMLTextAreaElement>("textarea");
    const text = area?.value.trim() ?? "";
    if (!area || !text) return void (this._msg = { ok: false, text: this.t("pack_paste_empty") });
    try {
      JSON.parse(text);
    } catch (err) {
      return void (this._msg = { ok: false, text: this.t("pack_paste_not_json", { detail: err instanceof Error ? err.message : String(err) }) });
    }
    if ((await this.importTexts([{ label: "", text }])) > 0) area.value = "";
  }

  private async deletePack(pack: FurniturePack): Promise<void> {
    if (!this.hass || !confirm(this.t("pack_remove_confirm", { name: packLabel(pack, this.hass.language ?? "de") }))) return;
    try {
      await removePack(this.hass, pack.id);
      this._msg = null;
      this.changed();
    } catch (err) {
      this._msg = { ok: false, text: this.errorText(err) };
    }
  }

  protected render() {
    const own = (this.packs ?? []).filter((p) => !p.builtin);
    const builtin = (this.packs ?? []).length - own.length;
    const language = this.hass?.language ?? "de";
    return html`<section class="nf-packs">
      <h3>${this.t("packs_title")}</h3>
      <p class="nf-sub">${this.t("packs_intro", { n: builtin })} <a href="${REPO_URL}/blob/main/docs/packs.md" target="_blank" rel="noopener">${this.t("packs_docs")}</a></p>
      ${own.length
        ? html`<ul>
            ${own.map(
              (p) => html`<li>
                <div class="nf-pack-main">
                  <strong>${packLabel(p, language)}</strong>
                  <span class="nf-detail">${p.id} · ${this.t("pack_by", { publisher: p.publisher, n: p.items.length })}</span>
                  ${p.description ? html`<span class="nf-detail">${p.description}</span>` : nothing}
                </div>
                <button class="nf-btn" ?disabled=${this._busy} @click=${() => this.deletePack(p)}>${this.t("pack_remove")}</button>
              </li>`,
            )}
          </ul>`
        : html`<p class="nf-sub">${this.t("packs_none")}</p>`}
      <label class="nf-btn nf-file">
        ${this.t("pack_import")}
        <input type="file" accept=".nfpack,.json,application/json" multiple hidden ?disabled=${this._busy} @change=${(e: Event) => this.importFiles(e)} />
      </label>
      <textarea rows="6" spellcheck="false" aria-label=${this.t("pack_paste")} placeholder=${'{ "format": "nfpack", "version": 1, "id": "myname.kitchen", … }'}></textarea>
      <div>
        <button class="nf-btn nf-primary" ?disabled=${this._busy} @click=${() => this.importPasted()}>${this.t("pack_paste")}</button>
      </div>
      ${this._msg ? html`<p class=${this._msg.ok ? "nf-ok" : "nf-error"} role=${this._msg.ok ? "status" : "alert"}>${this._msg.text}</p>` : nothing}
      ${this.hass ? this.renderStore() : nothing}
    </section>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      .nf-packs {
        display: grid;
        gap: 10px;
        padding: 16px;
        border: 1px solid var(--nf-line);
        border-radius: 12px;
      }
      h3 {
        margin: 0;
        font-size: 17px;
      }
      .nf-sub,
      .nf-ok,
      .nf-error {
        margin: 0;
        font-size: 13px;
      }
      .nf-sub {
        color: var(--nf-soft);
      }
      .nf-ok {
        color: var(--success-color, #2e7d32);
      }
      .nf-error {
        color: var(--error-color, #c62828);
        overflow-wrap: anywhere;
      }
      h4 {
        margin: 14px 0 0;
        font-size: 15px;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 8px;
      }
      li {
        display: flex;
        gap: 10px;
        align-items: center;
      }
      .nf-pack-main {
        flex: 1;
        min-width: 0;
        display: grid;
        gap: 2px;
      }
      .nf-detail {
        font-size: 12px;
        color: var(--nf-soft);
        overflow-wrap: anywhere;
      }
      .nf-file {
        justify-self: start;
        cursor: pointer;
      }
      textarea {
        box-sizing: border-box;
        width: 100%;
        min-height: 110px;
        resize: vertical;
        padding: 8px 10px;
        border: 1px solid var(--nf-line);
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: 12px/1.4 ui-monospace, SFMono-Regular, Menlo, monospace;
      }
    `,
  ];
}

if (!customElements.get("nf-pack-manager")) customElements.define("nf-pack-manager", PackManager);
