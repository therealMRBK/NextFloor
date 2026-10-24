// The visual editor of the dashboard card. Home Assistant shows it in the card dialog, so nobody has to write YAML. It follows
// Home Assistant's colours: the dialog is light or dark with the user's theme.

import { html, LitElement, nothing, type TemplateResult } from "lit";
import { fetchBuilding } from "./api.ts";
import { CARD_CONTROLS, type CardConfig, type CardControl } from "./card-config.ts";
import { checkbox, choice, DEFAULTS, flagOption, followOrForce, numberChoice, switchOption, textField, type FormContext } from "./card-editor/form.ts";
import { editorStyles } from "./card-editor/styles.ts";
import { translate, type I18nKey } from "./i18n.ts";
import type { HomeAssistant } from "./types.ts";

export class NextFloorCardEditor extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _floors: { state: true },
  };

  declare hass: HomeAssistant | undefined;
  private declare _config: CardConfig;
  private declare _floors: { id: string; name: string }[];
  private loading = false;
  /** What the form helpers use: the values with defaults, translation, and writing an option. */
  private readonly form: FormContext;

  constructor() {
    super();
    this._config = { type: "custom:nextfloor-card" };
    this._floors = [];
    const editor = this;
    this.form = {
      get value() {
        return { ...(DEFAULTS as Required<CardConfig>), ...editor._config };
      },
      t: (key, vars) => translate(editor.hass, key, vars),
      set: (key, value) => editor.write(key, value),
    };
  }

  setConfig(config: CardConfig): void {
    this._config = config;
  }

  protected willUpdate(): void {
    if (!this.hass) return;
    // a language beyond German and English: its texts are fetched first, and then everything renders
    // the floors of the plan, for the floor choice
    if (!this.loading && this._floors.length === 0) {
      this.loading = true;
      fetchBuilding(this.hass).then(
        (res) => (this._floors = res.building.floors.map((f) => ({ id: f.id, name: f.name }))),
        () => undefined,
      );
    }
  }

  /** Changes one option. Options back at their default disappear from the YAML. */
  private write<K extends keyof CardConfig>(key: K, value: CardConfig[K] | undefined): void {
    const next: CardConfig = { ...this._config };
    if (value === undefined || value === "" || DEFAULTS[key] === value) delete next[key];
    else next[key] = value;
    this.publish(next);
  }

  private publish(config: CardConfig): void {
    this._config = config;
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config }, bubbles: true, composed: true }));
  }

  /** Floor pictures are on by default without a start floor and off with one, but can be switched on. */
  private floorThumbsToggle(): TemplateResult {
    const byDefault = !this._config.floor;
    const hint: I18nKey = this._config.floor ? "card_floor_thumbs_hint_start" : "card_floor_thumbs_hint";
    return checkbox(this.form, this._config.floor_thumbs ?? byDefault, "card_floor_thumbs", hint, (checked) => {
      const next: CardConfig = { ...this._config };
      if (checked === byDefault) delete next.floor_thumbs;
      else next.floor_thumbs = checked;
      this.publish(next);
    });
  }

  /** The switches in the card: on or off, and which of them. */
  private controlsSection(): TemplateResult {
    const f = this.form;
    const c = this._config.controls;
    const on = !!c && (c === true || c.length > 0);
    const chosen: CardControl[] = c === true ? [...CARD_CONTROLS] : Array.isArray(c) ? c : [];
    const setChosen = (next: CardControl[]) => f.set("controls", next.length === CARD_CONTROLS.length ? true : next.length > 0 ? next : undefined);
    const hideAfter = [0, 10, 30, 60, 120].map((n) => ({ value: n, text: n ? f.t("card_hide_after_s", { n }) : f.t("card_idle_off") }));
    return html`${checkbox(f, on, "card_controls", "card_controls_hint", (checked) => f.set("controls", checked ? true : undefined))}
    ${checkbox(f, f.value.central, "card_central", "card_central_hint", (checked) => f.set("central", checked ? undefined : false))}
    ${flagOption(f, "marker_names", "card_marker_names", "card_marker_names_hint")} ${flagOption(f, "controls_hidden", "card_controls_hidden", "card_controls_hidden_hint")}
    ${numberChoice(f, "controls_hide_after", "card_controls_hide_after", hideAfter)}
    ${on
      ? html`<div class="sub">
          ${CARD_CONTROLS.map(
            (control) => html`<label class="chip">
              <input
                type="checkbox"
                .checked=${chosen.includes(control)}
                @change=${(e: Event) => setChosen((e.target as HTMLInputElement).checked ? CARD_CONTROLS.filter((x) => x === control || chosen.includes(x)) : chosen.filter((x) => x !== control))}
              />
              ${f.t(`card_control_${control}` as I18nKey)}
            </label>`,
          )}
        </div>`
      : nothing}`;
  }

  /** Kiosk: return after being idle, night dimming (by the sun or a time range), the screensaver turn, and a link to another dashboard. */
  private kioskSection(): TemplateResult {
    const f = this.form;
    const { night } = f.value;
    const nightKind = night === "off" || night === "sun" ? night : "time";
    const minutes = [0, 1, 2, 5, 10].map((m) => ({ value: m * 60, text: m ? f.t("card_idle_min", { n: m }) : f.t("card_idle_off") }));
    const nightModes: [string, I18nKey][] = [["off", "card_night_off"], ["sun", "card_night_sun"], ["time", "card_night_time"]];
    return html`<h3>${f.t("card_section_kiosk")}</h3>
      <div class="grid">
        ${numberChoice(f, "idle_return", "card_idle_return", minutes)}
        <label class="field"
          >${f.t("card_night")}
          <select @change=${(e: Event) => f.set("night", { off: undefined, sun: "sun", time: "22:00-06:00" }[(e.target as HTMLSelectElement).value])}>
            ${nightModes.map(([value, text]) => html`<option value=${value} ?selected=${nightKind === value}>${f.t(text)}</option>`)}
          </select>
        </label>
        ${nightKind === "time"
          ? html`<label class="field wide"
              >${f.t("card_night_range")}
              <input type="text" pattern="\\d{1,2}:\\d{2}-\\d{1,2}:\\d{2}" placeholder="22:00-06:00" .value=${night} @change=${(e: Event) => f.set("night", (e.target as HTMLInputElement).value.trim() || undefined)} />
            </label>`
          : nothing}
      </div>
      <p class="hint">${f.t("card_idle_hint")}</p>
      ${switchOption(f, "idle_orbit", "card_idle_orbit", "card_idle_orbit_hint")}
      <div class="grid">${textField(f, "dashboard", "card_dashboard", "/lovelace/home")} ${textField(f, "dashboard_label", "card_dashboard_label")}</div>
      <p class="hint">${f.t("card_dashboard_hint")}</p>`;
  }

  /** Warnings, scenes and the live features (weather with its entity). */
  private featuresSection(): TemplateResult {
    const f = this.form;
    const weatherEntities = Object.keys(this.hass?.states ?? {})
      .filter((id) => id.startsWith("weather."))
      .sort();
    return html`<h3>${f.t("card_section_features")}</h3>
      ${switchOption(f, "alerts", "card_alerts", "card_alerts_hint")} ${switchOption(f, "alert_jump", "card_alert_jump", "card_alert_jump_hint")}
      ${switchOption(f, "scenes", "card_scenes", "card_scenes_hint")}
      ${switchOption(f, "weather", "card_weather", "card_weather_hint")}
      ${f.value.weather !== false
        ? html`<div class="grid">
            <label class="field wide"
              >${f.t("weather_entity")}
              <select @change=${(e: Event) => f.set("weather_entity", (e.target as HTMLSelectElement).value || undefined)}>
                <option value="" ?selected=${!f.value.weather_entity}>${f.t("card_weather_plan")}</option>
                ${weatherEntities.map((id) => html`<option value=${id} ?selected=${id === f.value.weather_entity}>${String(this.hass?.states[id]?.attributes.friendly_name ?? id)}</option>`)}
              </select>
            </label>
            <label class="field"
              >${f.t("card_weather_density")}
              <select @change=${(e: Event) => f.set("weather_density", Number((e.target as HTMLSelectElement).value))}>
                ${[1, 0.75, 0.5, 0.3, 0.15].map((d) => html`<option value=${d} ?selected=${(f.value.weather_density ?? 1) === d}>${Math.round(d * 100)} %</option>`)}
              </select>
            </label>
            <p class="hint wide">${f.t("card_weather_density_hint")}</p>
          </div>`
        : nothing}
      <p class="hint">${f.t("card_pro_hint")}</p>`;
  }

  /** The view: start floor, size, theme, accent colour, walls, quality and floor stacking. */
  private viewSection(): TemplateResult {
    const f = this.form;
    const v = f.value;
    return html`<h3>${f.t("card_section_view")}</h3>
      <div class="grid">
        <label class="field wide"
          >${f.t("card_floor")}
          <select @change=${(e: Event) => f.set("floor", (e.target as HTMLSelectElement).value || undefined)}>
            <option value="" ?selected=${!v.floor}>${f.t("card_floor_house")}</option>
            ${this._floors.map((floor) => html`<option value=${floor.id} ?selected=${floor.id === v.floor}>${floor.name}</option>`)}
            ${v.floor && !this._floors.some((floor) => floor.id === v.floor) ? html`<option value=${v.floor} selected>${v.floor}</option>` : nothing}
          </select>
        </label>
        <label class="field"
          >${f.t("card_size")}
          <select @change=${(e: Event) => f.set("fill", (e.target as HTMLSelectElement).value === "fill")}>
            <option value="fixed" ?selected=${!v.fill}>${f.t("card_size_fixed")}</option>
            <option value="fill" ?selected=${v.fill}>${f.t("card_size_fill")}</option>
          </select>
        </label>
        <label class="field" ?hidden=${v.fill}
          >${f.t("card_height")}
          <input
            type="number"
            min="150"
            max="2000"
            step="10"
            .value=${String(v.height)}
            @change=${(e: Event) => {
              const height = Math.round(Number((e.target as HTMLInputElement).value));
              if (height > 100) f.set("height", height);
            }}
          />
        </label>
        ${choice(f, "theme", "theme", [["neon", "theme_neon"], ["blueprint", "theme_blueprint"], ["day", "theme_day"]], v.theme)}
        <label class="field"
          >${f.t("accent")}
          <input type="color" .value=${this._config.accent ?? "#37e0ff"} @input=${(e: Event) => f.set("accent", (e.target as HTMLInputElement).value)} />
          ${this._config.accent ? html`<button type="button" class="link" @click=${() => f.set("accent", undefined)}>${f.t("accent_reset")}</button>` : nothing}
        </label>
        ${choice(f, "walls", "card_walls", [["auto", "walls_auto"], ["cut", "walls_cut"]], v.walls)}
        ${choice(f, "quality", "quality", [["auto", "quality_auto"], ["low", "quality_low"], ["high", "quality_high"]], v.quality)}
        ${choice(f, "floor_stack", "card_floor_stack", [["dim", "floor_stack_dim"], ["stacked", "floor_stack_stacked"], ["single", "floor_stack_single"]], v.floor_stack)}
      </div>
      ${v.fill ? html`<p class="hint">${f.t("card_fill_hint")}</p>` : nothing}
      <p class="hint">${f.t("card_quality_hint")}</p>`;
  }

  /** What the card shows: markers, heat map, flows, holograms, and the plain switches. */
  private showSection(): TemplateResult {
    const f = this.form;
    const v = f.value;
    return html`<h3>${f.t("card_section_show")}</h3>
      <div class="grid">
        ${choice(f, "markers", "markers", [["none", "markers_none"], ["important", "markers_important"], ["all", "markers_all"]], v.markers)}
        ${choice(f, "heatmap", "heatmap", [["none", "heat_off"], ["temperature", "heat_temperature"], ["humidity", "heat_humidity"], ["co2", "heat_co2"], ["values", "heat_values"]], v.heatmap)}
        ${followOrForce(f, "flows", "flows", v.flows)} ${followOrForce(f, "holograms", "holos", v.holograms)}
      </div>
      ${this.controlsSection()} ${this.floorThumbsToggle()} ${switchOption(f, "room_names", "card_room_names")} ${switchOption(f, "energy", "card_energy")}
      ${switchOption(f, "room_buttons", "card_room_buttons", "card_room_buttons_hint")} ${switchOption(f, "room_panel", "card_room_panel", "card_room_panel_hint")} ${switchOption(f, "fullscreen_button", "card_fullscreen_button", "card_fullscreen_button_hint")}
      ${switchOption(f, "explode", "card_explode")} ${switchOption(f, "roof_fade", "card_roof_fade", "card_roof_fade_hint")} ${switchOption(f, "stats", "card_stats", "card_stats_hint")}`;
  }

  protected render() {
    return html`${this.viewSection()} ${this.showSection()} ${this.featuresSection()} ${this.kioskSection()}`;
  }

  static styles = editorStyles;
}

if (!customElements.get("nextfloor-card-editor")) customElements.define("nextfloor-card-editor", NextFloorCardEditor);
