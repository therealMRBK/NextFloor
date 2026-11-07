// The "Plugins" block of the Extensions page: the plugin URLs stored in the plan, their load state
// and what each registered. Editing fires `plugins-changed` with the new list; the panel saves it.

import { css, html, LitElement, nothing } from "lit";
import { REPO_URL } from "../features.ts";
import { translate, type I18nKey } from "../i18n.ts";
import { isAllowedPluginUrl, pluginFetchUrl, type PluginRef } from "../plugins/api.ts";
import { pluginLoadStates } from "../plugins/loader.ts";
import { fetchStoreIndex, STORE_REPO, storeState, withStoreEntry, type StoreEntry } from "../plugins/store.ts";
import { onPluginsChanged, pluginStatuses } from "../plugins/registry.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";

export class PluginManager extends LitElement {
  static properties = {
    hass: { attribute: false },
    plugins: { attribute: false },
    _error: { state: true },
    _store: { state: true },
    _storeError: { state: true },
    _storeOpen: { state: true },
  };

  declare hass: HomeAssistant | undefined;
  declare plugins: PluginRef[] | undefined;
  declare _error: string;
  declare _store: StoreEntry[] | undefined;
  declare _storeError: string;
  declare _storeOpen: boolean;
  private stop: (() => void) | null = null;

  constructor() {
    super();
    this._error = "";
    this._storeError = "";
    this._storeOpen = false;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.stop = onPluginsChanged(() => this.requestUpdate());
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.stop?.();
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  private emit(next: PluginRef[]): void {
    this.dispatchEvent(new CustomEvent("plugins-changed", { detail: next, bubbles: true, composed: true }));
  }

  private add(input: HTMLInputElement): void {
    const url = pluginFetchUrl(input.value);
    const list = this.plugins ?? [];
    if (!isAllowedPluginUrl(url)) return void (this._error = this.t("plugins_url_invalid"));
    if (list.some((p) => p.url === url)) return void (this._error = this.t("plugins_exists"));
    if (list.length >= 20) return void (this._error = this.t("plugins_limit"));
    this._error = "";
    input.value = "";
    this.emit([...list, { url, enabled: true }]);
  }

  private async toggleStore(): Promise<void> {
    this._storeOpen = !this._storeOpen;
    if (!this._storeOpen || this._store) return;
    this._storeError = "";
    try {
      this._store = await fetchStoreIndex();
    } catch (err) {
      this._storeError = this.t("store_failed", { error: err instanceof Error ? err.message : String(err) });
    }
  }

  private install(entry: StoreEntry): void {
    const list = this.plugins ?? [];
    const installed = list.some((p) => p.id === entry.id);
    if (!installed && list.length >= 20) return void (this._error = this.t("plugins_limit"));
    if (!installed && list.some((p) => p.url === entry.url)) return void (this._error = this.t("plugins_exists"));
    if (!window.confirm(this.t("store_confirm", { name: entry.name, author: entry.author || "?", url: entry.url }))) return;
    this._error = "";
    this.emit(withStoreEntry(list, entry));
  }

  private renderStore() {
    return html`<div class="nf-store">
      <button class="nf-btn" @click=${() => this.toggleStore()}>${this._storeOpen ? this.t("store_close") : this.t("store_open")}</button>
      ${this._storeOpen
        ? html`<p class="nf-sub">${this.t("store_intro")} <a href="https://github.com/${STORE_REPO}" target="_blank" rel="noopener">${this.t("store_submit")}</a></p>
            ${this._storeError ? html`<p class="nf-error" role="alert">${this._storeError}</p>` : nothing}
            ${!this._store && !this._storeError ? html`<p class="nf-sub">${this.t("plugins_loading")}</p>` : nothing}
            ${this._store && !this._store.length ? html`<p class="nf-sub">${this.t("store_empty")}</p>` : nothing}
            <ul>
              ${(this._store ?? []).map((entry) => {
                const state = storeState(entry, this.plugins);
                return html`<li>
                  <div class="nf-plugin-main">
                    <span><strong>${entry.name}</strong> <span class="nf-detail">${entry.version}${entry.author ? ` · ${entry.author}` : ""}</span></span>
                    ${entry.description ? html`<span class="nf-detail">${entry.description}</span>` : nothing}
                    ${entry.homepage ? html`<a class="nf-detail" href=${entry.homepage} target="_blank" rel="noopener">${entry.homepage}</a>` : nothing}
                  </div>
                  ${state === "installed"
                    ? html`<span class="nf-state ok">${this.t("store_installed")}</span>`
                    : html`<button class="nf-btn" @click=${() => this.install(entry)}>${state === "update" ? this.t("store_update") : this.t("store_install")}</button>`}
                </li>`;
              })}
            </ul>`
        : nothing}
    </div>`;
  }

  private stateOf(url: string): { label: string; tone: "ok" | "warn" | "err"; detail: string } {
    const load = pluginLoadStates().find((l) => l.url === url);
    const registered = pluginStatuses().filter((s) => s.source === url);
    const errors = [...(load?.error ? [load.error] : []), ...registered.flatMap((s) => s.errors)];
    if (load?.state === "error") return { label: this.t("plugins_error"), tone: "err", detail: errors.join(" · ") };
    if (load?.state === "loading") return { label: this.t("plugins_loading"), tone: "warn", detail: "" };
    if (load?.state === "loaded" && !registered.length) return { label: this.t("plugins_nothing_registered"), tone: "warn", detail: "" };
    if (registered.length) {
      const names = registered.map((s) => `${s.name}${s.version ? ` ${s.version}` : ""}`).join(", ");
      return { label: this.t("plugins_loaded"), tone: errors.length ? "warn" : "ok", detail: errors.length ? `${names} · ${errors.join(" · ")}` : names };
    }
    return { label: this.t("plugins_reload_hint"), tone: "warn", detail: "" };
  }

  protected render() {
    const list = this.plugins ?? [];
    const fromDashboard = pluginStatuses().filter((s) => !s.source);
    return html`<section class="nf-plugins">
      <h3>${this.t("plugins_title")}</h3>
      <p class="nf-sub">${this.t("plugins_intro")} <a href="${REPO_URL}/blob/main/docs/plugins.md" target="_blank" rel="noopener">${this.t("plugins_docs")}</a></p>
      <p class="nf-warn">⚠️ ${this.t("plugins_warning")}</p>
      ${list.length
        ? html`<ul>
            ${list.map((ref, i) => {
              const st = ref.enabled ? this.stateOf(ref.url) : { label: this.t("plugins_off"), tone: "warn" as const, detail: "" };
              return html`<li>
                <label class="nf-check" title=${this.t("plugins_reload_hint")}>
                  <input type="checkbox" .checked=${ref.enabled}
                    @change=${(e: Event) => this.emit(list.map((p, j) => (j === i ? { ...p, enabled: (e.target as HTMLInputElement).checked } : p)))} />
                </label>
                <div class="nf-plugin-main">
                  <code>${ref.id ? `${ref.id}${ref.version ? ` ${ref.version}` : ""}` : ref.url}</code>
                  <span class="nf-state ${st.tone}">${st.label}</span>
                  ${st.detail ? html`<span class="nf-detail">${st.detail}</span>` : nothing}
                </div>
                <button class="nf-btn" @click=${() => this.emit(list.filter((_, j) => j !== i))}>${this.t("plugins_remove")}</button>
              </li>`;
            })}
          </ul>`
        : html`<p class="nf-sub">${this.t("plugins_none")}</p>`}
      ${fromDashboard.length
        ? html`<p class="nf-sub">${this.t("plugins_from_dashboard")}: ${fromDashboard.map((s) => `${s.name}${s.version ? ` ${s.version}` : ""}`).join(", ")}</p>`
        : nothing}
      ${this.renderStore()}
      <div class="nf-add">
        <input type="text" placeholder="/local/nextfloor/my-plugin.js" aria-label=${this.t("plugins_add")}
          @keydown=${(e: KeyboardEvent) => e.key === "Enter" && this.add(e.target as HTMLInputElement)} />
        <button class="nf-btn" @click=${(e: Event) => this.add((e.target as HTMLElement).previousElementSibling as HTMLInputElement)}>${this.t("plugins_add")}</button>
      </div>
      ${this._error ? html`<p class="nf-error" role="alert">${this._error}</p>` : nothing}
    </section>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      .nf-plugins {
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
      .nf-warn,
      .nf-error {
        margin: 0;
        font-size: 13px;
      }
      .nf-sub {
        color: var(--nf-soft);
      }
      .nf-warn {
        color: var(--warning-color, #b26b00);
      }
      .nf-error {
        color: var(--error-color, #c62828);
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
      .nf-plugin-main {
        flex: 1;
        min-width: 0;
        display: grid;
        gap: 2px;
      }
      code {
        overflow-wrap: anywhere;
        font-size: 13px;
      }
      .nf-state {
        font-size: 12px;
      }
      .nf-state.ok {
        color: var(--success-color, #2e7d32);
      }
      .nf-state.warn {
        color: var(--nf-soft);
      }
      .nf-state.err {
        color: var(--error-color, #c62828);
      }
      .nf-detail {
        font-size: 12px;
        color: var(--nf-soft);
        overflow-wrap: anywhere;
      }
      .nf-store {
        display: grid;
        gap: 8px;
      }
      .nf-add {
        display: flex;
        gap: 8px;
      }
      .nf-add input {
        flex: 1;
        min-width: 0;
      }
    `,
  ];
}

if (!customElements.get("nf-plugin-manager")) customElements.define("nf-plugin-manager", PluginManager);
