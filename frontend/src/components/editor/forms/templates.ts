// Settings → Card templates: dashboard cards set up once, with the card's own settings dialog, and chosen on a card by name.

import { html, nothing, type TemplateResult } from "lit";
import { ref } from "lit/directives/ref.js";
import { templateKey } from "../../../card-template.ts";
import { hint } from "../fields.ts";
import type { EditorHost } from "../host.ts";

type Templates = Record<string, Record<string, unknown>>;

/** The card templates of the plan, each with an embedded card editor, a reload button and a delete button. */
export function renderCardTemplates(host: EditorHost): TemplateResult {
  const t = host.t;
  const templates: Templates = (host.doc.settings.card_templates as Templates | null | undefined) ?? {};
  const names = Object.keys(templates);
  const store = (next: Templates) => host.change((d) => void (d.settings.card_templates = Object.keys(next).length ? next : undefined));
  // the card's settings dialog lives in its own bundle; ask for it once
  void host.loadCardEditor?.();
  const reload = (template?: string) => void host.hass?.callService("nextfloor", "reload_screens", template ? { template } : {});
  const add = (input: HTMLInputElement) => {
    const key = templateKey(input.value);
    if (!key || key in templates || names.length >= 20) return;
    input.value = "";
    store({ ...templates, [key]: {} });
  };
  return html`<details class="nf-section">
    <summary>${t("card_templates")}${names.length ? html` <span class="nf-lib-count">${names.length}</span>` : nothing}</summary>
    ${hint(t("card_templates_hint"))}
    ${names.map(
      (name) => html`<details class="nf-section">
        <summary>${name}</summary>
        <nextfloor-card-editor
          .hass=${host.hass}
          ${ref((el) => el && (el as unknown as { setConfig(c: unknown): void }).setConfig({ type: "custom:nextfloor-card", ...templates[name] }))}
          @config-changed=${(e: CustomEvent<{ config: Record<string, unknown> }>) => {
            e.stopPropagation();
            const { type: _type, template: _template, ...rest } = e.detail.config;
            store({ ...templates, [name]: rest });
          }}
        ></nextfloor-card-editor>
        ${host.admin
          ? html`<div class="nf-actions">
              <button class="nf-btn" @click=${() => reload(name)}>${t("template_reload")}</button>
              <button class="nf-btn nf-danger" @click=${() => store(Object.fromEntries(Object.entries(templates).filter(([k]) => k !== name)))}>${t("delete")}</button>
            </div>`
          : nothing}
        ${hint(t("template_use", { name }))}
      </details>`,
    )}
    ${host.admin
      ? html`<div class="nf-form">
            <label class="nf-field nf-wide">${t("template_name")}<input type="text" maxlength="40" placeholder="kitchen_tablet" @keydown=${(e: KeyboardEvent) => e.key === "Enter" && add(e.target as HTMLInputElement)} /></label>
          </div>
          <div class="nf-actions">
            <button class="nf-btn" @click=${(e: Event) => add(((e.target as HTMLElement).closest("details")?.querySelector("input[type=text]") as HTMLInputElement) ?? document.createElement("input"))}>${t("template_add")}</button>
            <button class="nf-btn" @click=${() => reload()}>${t("template_reload_all")}</button>
          </div>`
      : nothing}
  </details>`;
}
