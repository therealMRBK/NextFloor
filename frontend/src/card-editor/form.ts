// Form helpers of the card editor: what an option is, and how a checkbox, a choice and a text field are drawn and written.

import { html, nothing, type TemplateResult } from "lit";
import type { CardConfig } from "../card-config.ts";
import type { I18nKey } from "../i18n.ts";

/** Options at these values are left out of the YAML. */
export const DEFAULTS: Partial<CardConfig> = {
  height: 420,
  walls: "auto",
  explode: true,
  roof_fade: true,
  quality: "auto",
  stats: false,
  markers: "important",
  heatmap: "none",
  theme: "neon",
  energy: true,
  room_panel: true,
  room_buttons: false,
  fill: false,
  controls: false,
  fullscreen_button: false,
  room_names: true,
  floor_stack: "dim",
  alerts: true,
  alert_jump: false,
  scenes: true,
  weather: true,
  weather_density: 1,
  idle_return: 0,
  controls_hidden: false,
  controls_hide_after: 0,
  marker_names: false,
  central: true,
  night: "off",
  idle_orbit: false,
};

/** The yes/no options that get a plain checkbox. */
export type SwitchOption = "explode" | "roof_fade" | "energy" | "room_panel" | "room_buttons" | "stats" | "fullscreen_button" | "room_names" | "alerts" | "alert_jump" | "scenes" | "idle_orbit" | "weather";

export type Choice = [value: string, label: I18nKey];

/** What the form helpers need from the editor. */
export interface FormContext {
  /** The config with defaults filled in. */
  value: Required<Omit<CardConfig, "floor" | "flows" | "holograms">> & Pick<CardConfig, "floor" | "flows" | "holograms">;
  t(key: I18nKey, vars?: Record<string, string | number>): string;
  set<K extends keyof CardConfig>(key: K, value: CardConfig[K] | undefined): void;
}

const inputValue = (e: Event) => (e.target as HTMLInputElement).value;
const selectValue = (e: Event) => (e.target as HTMLSelectElement).value;
const isChecked = (e: Event) => (e.target as HTMLInputElement).checked;

/** A checkbox with a label and an optional hint line. `onChange` decides what is written. */
export function checkbox(form: FormContext, checked: boolean, label: I18nKey, hint: I18nKey | undefined, onChange: (on: boolean) => void): TemplateResult {
  return html`<label class="toggle">
    <input type="checkbox" .checked=${checked} @change=${(e: Event) => onChange(isChecked(e))} />
    <span>${form.t(label)}${hint ? html`<small>${form.t(hint)}</small>` : nothing}</span>
  </label>`;
}

/** A checkbox for a yes/no option. */
export const switchOption = (form: FormContext, key: SwitchOption, label: I18nKey, hint?: I18nKey) => checkbox(form, form.value[key], label, hint, (on) => form.set(key, on));

/** A checkbox that writes `true` when ticked and removes the option when not (for options that are off by default). */
export const flagOption = (form: FormContext, key: "marker_names" | "controls_hidden", label: I18nKey, hint: I18nKey) => checkbox(form, form.value[key], label, hint, (on) => form.set(key, on || undefined));

/** A drop-down choice stored as the option's value. */
export function choice<K extends keyof CardConfig>(form: FormContext, key: K, label: I18nKey, choices: Choice[], current: string): TemplateResult {
  return html`<label class="field"
    >${form.t(label)}
    <select @change=${(e: Event) => form.set(key, selectValue(e) as CardConfig[K])}>
      ${choices.map(([value, text]) => html`<option value=${value} ?selected=${value === current}>${form.t(text)}</option>`)}
    </select>
  </label>`;
}

/** A drop-down of numbers whose zero means off (and is left out of the config). */
export function numberChoice(form: FormContext, key: "idle_return" | "controls_hide_after", label: I18nKey, options: { value: number; text: string }[]): TemplateResult {
  return html`<label class="field"
    >${form.t(label)}
    <select @change=${(e: Event) => form.set(key, Number(selectValue(e)) || undefined)}>
      ${options.map((o) => html`<option value=${o.value} ?selected=${form.value[key] === o.value}>${o.text}</option>`)}
    </select>
  </label>`;
}

/** A text field; an empty text removes the option. */
export function textField(form: FormContext, key: "dashboard" | "dashboard_label", label: I18nKey, placeholder = ""): TemplateResult {
  return html`<label class="field wide"
    >${form.t(label)}
    <input type="text" placeholder=${placeholder} .value=${form.value[key] ?? ""} @change=${(e: Event) => form.set(key, inputValue(e).trim() || undefined)} />
  </label>`;
}

/** A three-way choice for an option that follows the plan's own setting unless forced on or off. */
export function followOrForce(form: FormContext, key: "flows" | "holograms", label: I18nKey, current: boolean | undefined): TemplateResult {
  const state = current === undefined ? "switch" : current ? "on" : "off";
  const options: [string, I18nKey][] = [["switch", "card_flows_switch"], ["on", "card_flows_on"], ["off", "card_flows_off"]];
  return html`<label class="field wide"
    >${form.t(label)}
    <select @change=${(e: Event) => form.set(key, selectValue(e) === "switch" ? undefined : selectValue(e) === "on")}>
      ${options.map(([value, text]) => html`<option value=${value} ?selected=${state === value}>${form.t(text)}</option>`)}
    </select>
  </label>`;
}
