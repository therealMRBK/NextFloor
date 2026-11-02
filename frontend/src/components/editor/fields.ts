// The form fields the editor's panels are made of. Each takes the host (for translation and the read-only state) and the value
// with the function that stores a change; the markup they produce is the same everywhere, so the panels only say what is edited.

import { html, nothing, type TemplateResult } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { entityName } from "../../devices.ts";
import type { I18nKey } from "../../i18n.ts";
import { MARKER_SHOWS, type MarkerShow, type PinOffset } from "../../model.ts";
import type { EntityOption } from "./entities.ts";
import type { EditorHost } from "./host.ts";
import { pluginMdiIcon } from "../../plugins/registry.ts";
import "../entity-picker.ts";

const valueOf = (e: Event) => (e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).value;

/** A number typed with a comma or a point; NaN if it is not one. */
export const typedNumber = (text: string): number => Number.parseFloat(text.replace(",", "."));

/** Rounded to thousandths, which is as exact as a plan needs to be. */
export const toThousandths = (v: number): number => Math.round(v * 1000) / 1000;

export interface FieldOptions {
  /** Takes the whole row of the form instead of half of it. */
  wide?: boolean;
  title?: string;
}

const fieldClass = (o: FieldOptions) => (o.wide ? "nf-field nf-wide" : "nf-field");

/** A labelled number input. Only valid numbers are passed on. */
export function numberField(host: EditorHost, label: string, value: number, onChange: (v: number) => void, step = 0.01, min?: number): TemplateResult {
  return html`<label class="nf-field"
    >${label}
    <input
      type="number"
      inputmode="decimal"
      step=${step}
      min=${min ?? nothing}
      .value=${String(toThousandths(value))}
      ?disabled=${!host.admin}
      @change=${(e: Event) => {
        const v = typedNumber(valueOf(e));
        if (Number.isFinite(v)) onChange(v);
      }}
    />
  </label>`;
}

/** A labelled text input; the stored text is trimmed. */
export function textField(host: EditorHost, label: string, value: string, onChange: (v: string) => void, o: FieldOptions & { placeholder?: string; maxlength?: number } = {}): TemplateResult {
  return html`<label class=${fieldClass(o)} title=${o.title ?? nothing}
    >${label}
    <input type="text" .value=${value} placeholder=${o.placeholder ?? nothing} maxlength=${o.maxlength ?? nothing} ?disabled=${!host.admin} @change=${(e: Event) => onChange(valueOf(e).trim())} />
  </label>`;
}

/** A labelled drop-down of fixed choices. */
export function selectField<T extends string>(host: EditorHost, label: string, value: T, choices: readonly (readonly [T, string])[], onChange: (v: T) => void, o: FieldOptions = {}): TemplateResult {
  return html`<label class=${fieldClass(o)} title=${o.title ?? nothing}
    >${label}
    <select ?disabled=${!host.admin} @change=${(e: Event) => onChange(valueOf(e) as T)}>
      ${choices.map(([v, text]) => html`<option value=${v} ?selected=${v === value}>${text}</option>`)}
    </select>
  </label>`;
}

/** A checkbox with its text. */
export function checkField(host: EditorHost, label: string, checked: boolean, onChange: (on: boolean) => void, o: FieldOptions = {}): TemplateResult {
  return html`<label class="nf-check ${o.wide === false ? "" : "nf-wide"}" title=${o.title ?? nothing}
    ><input type="checkbox" .checked=${checked} ?disabled=${!host.admin} @change=${(e: Event) => onChange((e.target as HTMLInputElement).checked)} />
    ${label}</label
  >`;
}

/** A colour ("#rrggbb"), or null for the default `fallback`; a button goes back to the default. */
export function colorField(host: EditorHost, label: string, value: string | null | undefined, fallback: string, onChange: (v: string | null) => void): TemplateResult {
  return html`<label class="nf-field"
    >${label}
    <span class="nf-color-row"
      ><input type="color" .value=${value ?? fallback} ?disabled=${!host.admin} @change=${(e: Event) => onChange((e.target as HTMLInputElement).value)} />
      ${value ? html`<button type="button" class="nf-link" ?disabled=${!host.admin} @click=${() => onChange(null)}>${host.t("wall_paint_default")}</button>` : nothing}</span
    ></label
  >`;
}

/**
 * A searchable picker for an entity. `auto` is what "automatic" would choose: a name, null for "nothing found", or undefined when
 * there is no automatic choice. The stored value is null for automatic, "none" for none, and the entity id otherwise.
 */
export function entityField(host: EditorHost, label: string, value: string | null, auto: string | null | undefined, options: EntityOption[], onChange: (v: string | null) => void): TemplateResult {
  const autoText = auto === undefined ? null : auto ? host.t("entity_auto", { name: entityName(host.hass, auto) }) : host.t("entity_auto_none");
  // the fixed choices (automatic, none) come first, then the entities filtered as one types
  const fixed = [...(autoText !== null ? [{ id: "__auto", label: autoText }] : []), { id: "none", label: host.t("entity_none") }];
  const current = value ?? (autoText !== null ? "__auto" : "none");
  return html`<label class="nf-field nf-wide"
    >${label}
    <nf-entity-picker
      .options=${options}
      .fixed=${fixed}
      .value=${current}
      .placeholder=${host.t("entity_search")}
      ?disabled=${!host.admin}
      @change=${(e: CustomEvent<{ value: string }>) => {
        e.stopPropagation();
        onChange(e.detail.value === "__auto" ? null : e.detail.value);
      }}
    ></nf-entity-picker>
  </label>`;
}

/** The icon a device shows in the editor, as in 3D: the one picked in the plan, else a plugin's; null: its kind's drawing. */
export function deviceIcon(host: EditorHost, entityId: string, own?: string | null): string | null {
  if (own) return (own.startsWith("mdi:") ? own : `mdi:${own}`).replace(/[^a-z0-9:-]/gi, "");
  return host.hass ? pluginMdiIcon(host.hass, entityId) : null;
}

/** The icon of a marker: a Material Design icon name, with a small preview. */
export function iconField(host: EditorHost, value: string | null | undefined, onChange: (v: string | null) => void): TemplateResult {
  const preview = value ? (value.startsWith("mdi:") ? value : `mdi:${value}`).replace(/[^a-z0-9:-]/gi, "") : "";
  return html`<label class="nf-field nf-wide" title=${host.t("marker_icon_hint")}
    >${host.t("marker_icon")}
    <span class="nf-icon-row">
      <input type="text" placeholder="mdi:thermometer" .value=${value ?? ""} ?disabled=${!host.admin} @change=${(e: Event) => onChange(valueOf(e).trim().replace(/^mdi:/, "") || null)} />
      ${preview ? unsafeHTML(`<ha-icon icon="${preview}"></ha-icon>`) : nothing}
    </span>
  </label>`;
}

/** How the marker of a device or a piece of furniture shows in 3D. */
export function markerField(host: EditorHost, value: MarkerShow | null, onChange: (v: MarkerShow | null) => void): TemplateResult {
  return html`<label class="nf-field nf-wide" title=${host.t("marker_show_hint")}
    >${host.t("marker_show")}
    <select ?disabled=${!host.admin} @change=${(e: Event) => onChange((valueOf(e) || null) as MarkerShow | null)}>
      <option value="" ?selected=${!value}>${host.t("marker_show_auto")}</option>
      ${MARKER_SHOWS.map((m) => html`<option value=${m} ?selected=${m === value}>${host.t(`marker_show_${m}` as I18nKey)}</option>`)}
    </select>
  </label>`;
}

/** Moving a pin by hand (devices close together): metres along x and z and up, folded until used. */
export function pinShiftField(host: EditorHost, value: PinOffset | null | undefined, onChange: (v: PinOffset | null) => void): TemplateResult {
  const v = value ?? {};
  const set = (key: keyof PinOffset) => (n: number) => {
    const next = { ...v, [key]: Math.round(Math.max(-5, Math.min(5, n)) * 100) / 100 };
    onChange(next.x || next.z || next.y ? next : null);
  };
  return html`<details class="nf-wide nf-pin-shift" ?open=${!!value}>
    <summary>${host.t("pin_shift")}</summary>
    <div class="nf-form">
      ${numberField(host, "↔ x", v.x ?? 0, set("x"), 0.05)} ${numberField(host, "↕ z", v.z ?? 0, set("z"), 0.05)} ${numberField(host, host.t("pin_shift_up"), v.y ?? 0, set("y"), 0.05)}
      ${value ? html`<button class="nf-btn nf-field-btn" ?disabled=${!host.admin} @click=${() => onChange(null)}>${host.t("height_auto")}</button>` : nothing}
      <p class="nf-sub nf-wide">${host.t("pin_shift_hint")}</p>
    </div>
  </details>`;
}

/** A row of buttons at the bottom of a form. */
export const actions = (...buttons: (TemplateResult | typeof nothing)[]): TemplateResult => html`<div class="nf-actions">${buttons}</div>`;

/** A help line under a form. */
export const hint = (text: string, extraClass = ""): TemplateResult => html`<p class="nf-sub ${extraClass}">${text}</p>`;

/** A percentage between 10 and 150 for how strongly a lamp glows. 100 % is stored as "no value of its own". */
export function glowField(host: EditorHost, value: number | null | undefined, onChange: (v: number | null) => void, o: { label?: I18nKey; hint?: I18nKey; lowest?: number } = {}): TemplateResult {
  const lowest = o.lowest ?? 10;
  return html`<label class="nf-field" title=${host.t(o.hint ?? "glow_scale_hint")}
    >${host.t(o.label ?? "glow_scale")}
    <input
      type="number"
      min=${lowest}
      max="150"
      step="5"
      .value=${String(Math.round((value ?? 1) * 100))}
      ?disabled=${!host.admin}
      @change=${(e: Event) => {
        const typed = Number(valueOf(e));
        const fraction = Math.min(150, Math.max(lowest, valueOf(e).trim() === "" || Number.isNaN(typed) ? 100 : typed)) / 100;
        onChange(Math.abs(fraction - 1) < 0.001 ? null : fraction);
      }}
    />
  </label>`;
}
