// Room panel: controls for the devices of the room's area (lights, covers, heating, media, switches,
// scenes and scripts). Shown next to the 3D view when a room is selected.

import { css, html, LitElement, nothing, svg, type TemplateResult } from "lit";
import { assumedCover, entityName, groupByDevice, groupCovers, isActive, isUnavailable, kindOf, roomClimateSensors, roomClimateValue, roomPanelEntities, fromCelsius, tempUnit, type DeviceKind, roomEntities } from "../devices.ts";
import { formatNumber, translate, type I18nKey } from "../i18n.ts";
import { iconPath } from "../icons.ts";
import { openMoreInfo, stateText } from "../markers.ts";
import { pluginRoomSections } from "../plugins/registry.ts";
import { canAnnounce, roomHasSpeaker } from "../live/announce.ts";
import type { Building, Floor, LightMood, LightSetting, Room } from "../model.ts";
import { roomPower, roomPowerSensors } from "../heatmap.ts";
import { energyCost, loadRoomEnergy, type RoomEnergy } from "../live/room-energy.ts";
import { roomSun, roomSunYear, sunnyWindowsNow } from "../live/sun-hours.ts";
import { LOW_BATTERY, planBatteries } from "../live/batteries.ts";
import { powerText } from "../presence.ts";
import { carryMood, lightSetting, moodCalls } from "../live/moods.ts";
import { allOffPlan, type ServiceCall } from "../live/all-off.ts";
import { airingNeed, mouldRisk } from "../live/room-climate.ts";
import { hassAt, loadHistory } from "../live/time-travel.ts";
import { curvePath } from "../live/day-curves.ts";
import { controls, tokens } from "../styles.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";

const COVER_SET_POSITION = 4;
const COVER_STOP = 8;

/** Colour presets offered for colour lights (warm white first). */
const SWATCHES: [number, number, number][] = [
  [255, 181, 71],
  [255, 236, 210],
  [55, 224, 255],
  [91, 124, 255],
  [255, 95, 210],
  [120, 255, 150],
];

const icon = (kind: DeviceKind) =>
  html`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${iconPath(kind)} />
  </svg>`;

/** Filled transport icons (the Unicode symbols turn into emoji on some systems). */
const TRANSPORT = {
  previous: "M6 6h2v12H6zM20 6v12l-10-6z",
  play: "M8 5v14l11-7z",
  pause: "M7 5h4v14H7zM13 5h4v14h-4z",
  next: "M16 6h2v12h-2zM4 6v12l10-6z",
};
const transport = (d: string) =>
  html`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${d} /></svg>`;

/** From this room temperature (°C) on, the sun on its windows is worth a shade hint. */
const SHADE_FROM = 24;
/** Minutes without anybody seen before lights on count as forgotten. */
const EMPTY_MINUTES = 10;

export class NfRoomPanel extends LitElement {
  static properties = {
    hass: { attribute: false },
    room: { attribute: false },
    floor: { attribute: false },
    confirmEntities: { attribute: false },
    phrases: { attribute: false },
    outside: { attribute: false },
    _showAll: { state: true },
    _said: { state: true },
    _folded: { state: true },
    _curve: { state: true },
    _moodName: { state: true },
    _undo: { state: true },
    _energy: { state: true },
    _sunYear: { state: true },
    rooms: { attribute: false },
    building: { attribute: false },
  };

  declare hass: HomeAssistant;
  declare room: Room | null;
  /** Floor of the room: the panel shows what the plan shows in the room. */
  declare floor: Floor | null;
  /** Entities that ask before they are switched. */
  declare confirmEntities: Set<string> | null;
  /** The sentences offered for an announcement (null: the default ones). */
  declare phrases: string[] | null;
  /** Outside instead of a room: the devices it lists (see outsideEntities). */
  declare outside: string[] | null;
  /** What the last announcement from this panel did, shown under it for a moment. */
  private declare _said: { text: string; failed: boolean } | null;
  private saidTimer: ReturnType<typeof setTimeout> | undefined;
  /** Show the other devices of the area as well (their main entities). */
  private declare _showAll: boolean;
  /** Only the header shows (a small screen: the room stays in view, the devices are out of the way). Starts open for every room. */
  private declare _folded: boolean;
  private memo: { entities: HomeAssistant["entities"]; floor: Floor | null; room: Room; shown: string[]; more: string[] } | null = null;
  /** Every room of the plan (a mood can be carried over to another one). */
  declare rooms: Room[] | null;
  /** The whole plan: its meters stay out of the room's power, its compass turns the room's sun. */
  declare building: Building | null;
  /** The name typed for a new mood, while the field shows. */
  private declare _moodName: string | null;
  /** The room's temperature over the last 24 hours (°C, quarter hours), loaded when the room opens. */
  private declare _curve: (number | null)[] | null;
  private curveFor = "";
  /** What the room used today and this month (from the statistics of its power sensors), loaded when the room opens. */
  private declare _energy: RoomEnergy | null;
  /** The curve of the room's sun over the year shows (a tap on the sun hours). */
  private declare _sunYear: boolean;
  /** After "everything off": the calls that bring it back, offered for a few seconds. */
  private declare _undo: ServiceCall[] | null;
  private undoTimer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    super();
    this.room = null;
    this.floor = null;
    this.phrases = null;
    this.outside = null;
    this._said = null;
    this._showAll = false;
    this._folded = false;
    this._curve = null;
    this._moodName = null;
    this._undo = null;
    this._energy = null;
    this._sunYear = false;
    this.rooms = null;
    this.building = null;
  }

  private fireMoods(room: Room, moods: LightMood[]): void {
    this.dispatchEvent(new CustomEvent("mood-change", { detail: { roomId: room.id, moods }, bubbles: true, composed: true }));
  }

  private runMood(settings: LightSetting[]): void {
    for (const c of moodCalls(settings)) this.call("light", c.service, c.data);
  }

  /** The light designer: save the room's lights as a mood, set a mood again, carry it to another room, or drop it. */
  private renderMoods(room: Room, lights: HassEntity[]): TemplateResult | typeof nothing {
    const moods = room.moods ?? [];
    // saving and dropping change the plan: only in the panel, for admins
    const edit = !!this.rooms && !!(this.hass as { user?: { is_admin?: boolean } }).user?.is_admin;
    if (!moods.length && !edit) return nothing;
    const others = (this.rooms ?? []).filter((r) => r.id !== room.id && r.area_id);
    const lightsOf = (r: Room) => roomEntities(this.hass, r).filter((id) => id.startsWith("light."));
    const save = () => {
      const name = (this._moodName ?? "").trim() || this.t("mood_new");
      this.fireMoods(room, [...moods, { id: `mood_${Date.now().toString(36)}`, name, lights: lights.map(lightSetting) }]);
      this._moodName = null;
    };
    return html`<div class="nf-rp-moods">
      ${moods.map(
        (m) => html`<span class="nf-rp-mood">
          <button class="nf-btn" title=${this.t("mood_set")} @click=${() => this.runMood(m.lights)}>✨ ${m.name}</button>
          ${others.length
            ? html`<select class="nf-rp-mood-to" aria-label=${this.t("mood_carry")} title=${this.t("mood_carry")} @change=${(e: Event) => {
                const sel = e.target as HTMLSelectElement;
                const target = others.find((r) => r.id === sel.value);
                sel.value = "";
                if (target) this.runMood(carryMood(m, lightsOf(target)));
              }}>
                <option value="">→</option>
                ${others.map((r) => html`<option value=${r.id}>${r.name}</option>`)}
              </select>`
            : nothing}
          ${edit ? html`<button class="nf-btn nf-rp-small" aria-label=${this.t("delete")} @click=${() => this.fireMoods(room, moods.filter((x) => x.id !== m.id))}>✕</button>` : nothing}
        </span>`,
      )}
      ${!edit
        ? nothing
        : this._moodName === null
        ? html`<button class="nf-btn nf-rp-small" title=${this.t("mood_save_hint")} @click=${() => (this._moodName = "")}>＋ ${this.t("mood_save")}</button>`
        : html`<span class="nf-rp-mood"
            ><input type="text" maxlength="40" placeholder=${this.t("mood_new")} .value=${this._moodName} @input=${(e: Event) => (this._moodName = (e.target as HTMLInputElement).value)} @keydown=${(e: KeyboardEvent) => e.key === "Enter" && save()} />
            <button class="nf-btn" @click=${save}>${this.t("mood_save")}</button></span
          >`}
    </div>`;
  }

  /** Loads the temperature history of the room's sensors (or thermostats) and samples it every quarter hour. */
  private async loadCurve(room: Room): Promise<void> {
    const ids = roomClimateSensors(this.hass, this.floor, room, "temperature");
    const sources = ids.length ? ids : roomEntities(this.hass, room).filter((id) => id.startsWith("climate."));
    if (!sources.length) return;
    const to = Date.now();
    const from = to - 24 * 3600_000;
    try {
      const history = await loadHistory(this.hass, sources, from, to, !ids.length ? false : true);
      if (this.room?.id !== room.id) return;
      const curve: (number | null)[] = [];
      for (let i = 1; i <= 96; i++) {
        const at = hassAt(this.hass, history, from + ((to - from) * i) / 96);
        const values = sources
          .map((id) => (id.startsWith("climate.") ? Number(at.states[id]?.attributes.current_temperature) : Number(at.states[id]?.state)))
          .filter(Number.isFinite);
        curve.push(values.length ? values.reduce((a, b) => a + b, 0) / values.length : null);
      }
      this._curve = curve.some((v) => v !== null) ? curve : null;
    } catch {
      this._curve = null;
    }
  }

  private async loadEnergy(room: Room): Promise<void> {
    if (!this.floor || !this.building) return;
    const ids = roomPowerSensors(this.hass, this.building, this.floor, room);
    try {
      const energy = await loadRoomEnergy(this.hass, ids);
      if (this.room?.id === room.id) this._energy = energy;
    } catch {
      this._energy = null;
    }
  }

  /**
   * Lights on, nobody there: the room's motion, occupancy and presence sensors have seen nobody for ten minutes while lights are on –
   * say so, and switch them off in one tap.
   */
  private renderEmptyLights(room: Room, lightsOn: HassEntity[]) {
    if (!lightsOn.length || !this.room) return nothing;
    const sensors = roomEntities(this.hass, room)
      .map((id) => this.hass.states[id])
      .filter((st): st is HassEntity => !!st && st.entity_id.startsWith("binary_sensor.") && ["motion", "occupancy", "presence"].includes(String(st.attributes.device_class)));
    if (!sensors.length || sensors.some((st) => st.state !== "off")) return nothing;
    const quietSince = Math.max(...sensors.map((st) => Date.parse(String(st.last_changed ?? "")) || 0));
    const minutes = Math.floor((Date.now() - quietSince) / 60_000);
    if (!quietSince || minutes < EMPTY_MINUTES) return nothing;
    return html`<div class="nf-rp-shade">
      <span>💡 ${this.t("empty_lights_hint", { n: lightsOn.length, min: minutes })}</span>
      <button class="nf-btn nf-rp-small" @click=${() => this.call("light", "turn_off", { entity_id: lightsOn.map((l) => l.entity_id) })}>${this.t("empty_lights_off")}</button>
    </div>`;
  }

  /** A window or door of the room stands open while its heating runs: say so, and turn the heating off (or to its lowest) in one tap. */
  private renderOpenWhileHeating(climates: HassEntity[]) {
    const room = this.room;
    if (!room || !this.floor) return nothing;
    const heating = climates.filter((c) => c.attributes.hvac_action === "heating" || (c.state === "heat" && c.attributes.hvac_action === undefined));
    if (!heating.length) return nothing;
    const on = (id: string | null | undefined) => !!id && id !== "none" && this.hass.states[id]?.state === "on";
    const open = this.floor.openings.filter((o) => o.room_id === room.id && [o.contact, o.contact2, o.tilt, o.tilt2].some(on));
    if (!open.length) return nothing;
    const down = () => {
      for (const c of heating) {
        const modes = (c.attributes.hvac_modes as string[] | undefined) ?? [];
        if (modes.includes("off")) this.call("climate", "set_hvac_mode", { entity_id: c.entity_id, hvac_mode: "off" });
        else if (typeof c.attributes.min_temp === "number") this.call("climate", "set_temperature", { entity_id: c.entity_id, temperature: c.attributes.min_temp });
      }
    };
    return html`<div class="nf-rp-shade nf-rp-open-heat">
      <span>🪟 ${this.t("open_heating_hint", { n: open.length })}</span>
      <button class="nf-btn nf-rp-small" @click=${down}>${this.t("open_heating_off")}</button>
    </div>`;
  }

  /**
   * The shade hint: the sun stands on some of the room's windows, the room is warm (24 °C or more) and their blinds are open – one
   * tap lowers them.
   */
  private renderShade() {
    const room = this.room;
    const { latitude, longitude } = this.hass.config ?? {};
    if (!room || !this.floor || !this.building || latitude === undefined || longitude === undefined) return nothing;
    const temp = roomClimateValue(this.hass, this.floor, room, "temperature");
    if (temp === null || temp < SHADE_FROM) return nothing;
    const open = (id: string | null | undefined): id is string => {
      const st = id && id !== "none" ? this.hass.states[id] : undefined;
      if (!st || isUnavailable(st)) return false;
      const pos = st.attributes.current_position;
      return typeof pos === "number" ? pos > 30 : st.state === "open";
    };
    const covers = [...new Set(sunnyWindowsNow(this.building, this.floor, room, { latitude, longitude }).flatMap((o) => [o.cover, o.cover2].filter(open)))];
    if (!covers.length) return nothing;
    return html`<div class="nf-rp-shade">
      <span>☀ ${this.t("shade_hint", { n: covers.length, temp: `${formatNumber(this.hass, fromCelsius(this.hass, temp), 1)} ${tempUnit(this.hass)}` })}</span>
      <button class="nf-btn nf-rp-small" @click=${() => this.call("cover", "close_cover", { entity_id: covers })}>${this.t("shade_close")}</button>
    </div>`;
  }

  /** The sun over the year: a button with today's hours, and on a tap a bar per month (the 15th of each). */
  private renderSunYear() {
    const room = this.room;
    const { latitude, longitude } = this.hass.config ?? {};
    if (!room || !this.floor || !this.building || latitude === undefined || longitude === undefined) return nothing;
    const place = { latitude, longitude };
    const today = roomSun(this.building, this.floor, room, { ...place, zone: this.hass.config?.time_zone });
    if (!today.facing.length) return nothing;
    const toggle = html`<button class="nf-rp-sun-year" aria-expanded=${this._sunYear} title=${this.t("room_sun_year_hint")} @click=${() => (this._sunYear = !this._sunYear)}>
      ☀ ${this.t("room_sun_year")}
    </button>`;
    if (!this._sunYear) return toggle;
    const months = roomSunYear(this.building, this.floor, room, place);
    const top = Math.max(1, ...months);
    const names = Array.from({ length: 12 }, (_, m) => new Date(2026, m, 15).toLocaleDateString(this.hass.language, { month: "narrow" }));
    return html`${toggle}
      <div class="nf-rp-sun-bars" role="img" aria-label=${months.map((h, m) => `${names[m]} ${formatNumber(this.hass, h, 1)} h`).join(", ")}>
        ${months.map((h, m) => html`<span title=${`${formatNumber(this.hass, h, 1)} h`}><i style=${`height:${Math.round((h / top) * 100)}%`}></i><b>${names[m]}</b></span>`)}
      </div>`;
  }

  /** Today's and this month's use of the room, with the month's cost at the house's tariff. */
  private renderEnergy() {
    const e = this._energy;
    if (!e || e.month <= 0) return nothing;
    const id = this.building?.energy.tariff;
    const st = id ? this.hass.states[id] : undefined;
    const tariff = st ? { value: Number(st.state), unit: String(st.attributes.unit_of_measurement ?? "") } : null;
    const cost = energyCost(e.month, tariff);
    const kwh = (v: number) => `${formatNumber(this.hass, v, v < 10 ? 2 : 1)} kWh`;
    return html`<p class="nf-rp-facts nf-rp-energy" title=${this.t("room_energy_hint")}>
      ⚡ ${this.t("room_energy", { today: kwh(e.today), month: kwh(e.month) })}${cost ? ` · ${formatNumber(this.hass, cost.value, 2)} ${cost.currency}` : ""}
    </p>`;
  }

  /** The heating curve: the room's temperature over the last 24 hours, with its lowest and highest value. */
  private renderCurve() {
    const curve = this._curve;
    if (!curve) return nothing;
    const values = curve.filter((v): v is number => v !== null);
    const lo = Math.min(...values);
    const hi = Math.max(...values);
    const span = Math.max(1, hi - lo);
    const shifted = curve.map((v) => (v === null ? null : v - lo + span * 0.1));
    const d = curvePath(shifted, 220, 36, span * 1.2);
    const f = (v: number) => `${formatNumber(this.hass, fromCelsius(this.hass, v), 1)}°`;
    return html`<div class="nf-rp-curve" title=${this.t("room_curve_hint")}>
      <svg viewBox="0 0 220 36" preserveAspectRatio="none" aria-hidden="true">${svg`<path d=${d}></path>`}</svg>
      <span>24 h · ${f(lo)} – ${f(hi)}</span>
    </div>`;
  }

  protected willUpdate(changed: Map<string, unknown>): void {
    const before = changed.get("room") as Room | null | undefined;
    if (changed.has("room") && before?.id !== this.room?.id) {
      this._folded = false;
      this._undo = null;
    }
    if (this.room && this.hass && this.curveFor !== this.room.id) {
      this.curveFor = this.room.id;
      this._curve = null;
      this._energy = null;
      void this.loadCurve(this.room);
      void this.loadEnergy(this.room);
    }
  }

  /** The host carries `folded`, so the stage it sits in can move a folded panel out of the way (see panel/styles.ts, card/styles.ts). */
  protected updated(changed: Map<string, unknown>): void {
    if (changed.has("_folded")) this.toggleAttribute("folded", this._folded);
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  private call(domain: string, service: string, data: Record<string, unknown>): void {
    void this.hass.callService(domain, service, data);
  }

  /** "Clean": runs the script or presses the button that sends the robot vacuum to this room. */
  private renderClean(room: Room) {
    const id = room.clean_entity;
    const st = id ? this.hass.states[id] : undefined;
    if (!id || !st) return nothing;
    const domain = id.slice(0, id.indexOf("."));
    const run = () => (domain === "script" ? this.call("script", "turn_on", { entity_id: id }) : this.call(domain, "press", { entity_id: id }));
    return html`<div class="nf-rp-alloff"><button class="nf-btn nf-rp-small" ?disabled=${isUnavailable(st)} title=${this.t("room_clean_run_hint")} @click=${run}>🧹 ${this.t("room_clean_run")}</button></div>`;
  }

  /** Switches off what is on in the room and offers to undo it for ten seconds. */
  private allOff(states: HassEntity[]): void {
    const plan = allOffPlan(states);
    for (const c of plan.off) this.call(c.domain, c.service, c.data);
    this._undo = plan.undo;
    clearTimeout(this.undoTimer);
    this.undoTimer = setTimeout(() => (this._undo = null), 10_000);
  }

  private undoAllOff(): void {
    for (const c of this._undo ?? []) this.call(c.domain, c.service, c.data);
    this._undo = null;
    clearTimeout(this.undoTimer);
  }

  /** "Everything off" while something is on, and its undo right after. */
  private renderAllOff(states: HassEntity[]): TemplateResult | typeof nothing {
    if (this._undo) return html`<div class="nf-rp-alloff"><span>${this.t("all_off_done")}</span><button class="nf-btn nf-rp-small" @click=${() => this.undoAllOff()}>↶ ${this.t("all_off_undo")}</button></div>`;
    const { count } = allOffPlan(states);
    if (count < 2) return nothing;
    return html`<div class="nf-rp-alloff"><button class="nf-btn nf-rp-small" title=${this.t("all_off_hint")} @click=${() => this.allOff(states)}>⏻ ${this.t("all_off_n", { n: count })}</button></div>`;
  }

  private get areaName(): string | undefined {
    return this.room?.area_id ? this.hass.areas?.[this.room.area_id]?.name : undefined;
  }

  private name(id: string): string {
    return entityName(this.hass, id, this.areaName);
  }

  private nameButton(id: string) {
    return html`<button class="nf-rp-name" title=${this.t("details")} @click=${() => openMoreInfo(this, id)}>${this.name(id)}</button>`;
  }

  /** Ask first for devices marked so (a blind that must not move by accident). */
  private askFor(id: string): boolean {
    return !this.confirmEntities?.has(id) || confirm(this.t("confirm_switch", { name: this.name(id) }));
  }

  private toggle(st: HassEntity, on: boolean, onToggle: () => void) {
    const guarded = () => {
      if (this.confirmEntities?.has(st.entity_id) && !confirm(this.t("confirm_switch", { name: this.name(st.entity_id) }))) return;
      onToggle();
    };
    return html`<button
      class="nf-switch"
      role="switch"
      aria-checked=${on ? "true" : "false"}
      aria-label=${this.name(st.entity_id)}
      ?disabled=${isUnavailable(st)}
      @click=${guarded}
    ></button>`;
  }

  /** Outside, shown like a room without an area. */
  private outsideRoom: Room | null = null;

  protected render() {
    const outside = !this.room && this.outside ? this.outside : null;
    if (outside && !this.outsideRoom) this.outsideRoom = { id: "nf-outside", name: this.t("outside_area"), area_id: null, points: [], floor_material: "grass" } as unknown as Room;
    const room = this.room ?? (outside ? this.outsideRoom : null);
    if (!room || !this.hass) return nothing;
    const all = outside ?? roomEntities(this.hass, room);
    // what the plan shows in the room; the rest of the area on request (each device's main entity);
    // worked out once per registry, room and floor (every state change renders the panel again)
    const m = this.memo;
    const { shown, more } = outside
      ? { shown: outside, more: [] as string[] }
      : m && m.entities === this.hass.entities && m.floor === this.floor && m.room === room
        ? m
        : (this.memo = { entities: this.hass.entities, floor: this.floor, room, ...(this.floor ? roomPanelEntities(this.hass, this.floor, room) : { shown: all, more: [] }) });
    const extra = groupByDevice(this.hass, more).map((g) => g.primary);
    const hiddenCount = extra.length;
    const ids = this._showAll ? [...shown, ...extra] : shown;
    const by = (kinds: DeviceKind[]) => ids.filter((id) => kinds.includes(kindOf(id)!)).map((id) => this.hass.states[id]);
    const lights = by(["light"]);
    const covers = by(["cover"]);
    const climates = by(["climate"]);
    const media = by(["media"]);
    const switches = by(["switch", "fan", "lock"]);
    const sensors = by(["sensor", "binary"]);
    const scenes = by(["scene", "script"]);
    const facts = this.facts(climates);
    const lightsOn = lights.filter((l) => l.state === "on");
    return html`<section class="nf-rp" aria-label=${room.name}>
      <header class="nf-rp-head">
        <div>
          <h2>${room.name}</h2>
          ${facts.length ? html`<p class="nf-rp-facts">${facts.join(" · ")}</p>` : nothing} ${this.renderEnergy()} ${this.renderSunYear()} ${this.renderShade()}
          ${this.renderOpenWhileHeating(climates)} ${this.renderEmptyLights(room, lightsOn)}
          ${this.renderCurve()}
        </div>
        <button class="nf-rp-close" aria-label=${this.t(this._folded ? "panel_unfold" : "panel_fold")} title=${this.t(this._folded ? "panel_unfold" : "panel_fold")} aria-expanded=${this._folded ? "false" : "true"} @click=${() => (this._folded = !this._folded)}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${this._folded ? svg`<path d="M6 14l6-6 6 6" />` : svg`<path d="M6 12h12" />`}</svg>
        </button>
        <button class="nf-rp-close" aria-label=${this.t("close")} @click=${() => this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="nf-rp-body" ?hidden=${this._folded}>
        ${this.renderAllOff([...lights, ...media, ...switches])}
        ${this.renderClean(room)}
        ${!room.area_id && !outside
          ? html`<p class="nf-rp-note">${this.t("panel_no_area")}</p>`
          : !ids.length
            ? html`<p class="nf-rp-note">${this.t("panel_empty")}</p>`
            : nothing}
        ${scenes.length
          ? this.section(
              "panel_scenes",
              [
                html`<div class="nf-rp-scenes">
                  ${scenes.map(
                    (st) => html`<button
                      class="nf-btn"
                      ?disabled=${isUnavailable(st)}
                      @click=${() => this.call(kindOf(st.entity_id) === "scene" ? "scene" : "script", "turn_on", { entity_id: st.entity_id })}
                    >
                      ${this.name(st.entity_id)}
                    </button>`,
                  )}
                </div>`,
              ],
            )
          : nothing}
        ${lights.length
          ? this.section(
              "panel_lights",
              [...lights.map((st) => this.lightRow(st)), ...(room ? [this.renderMoods(room, lights)] : [])],
              html`${lightsOn.length < lights.length
                ? html`<button class="nf-btn nf-rp-small" @click=${() => this.call("light", "turn_on", { entity_id: lights.filter((l) => !isUnavailable(l)).map((l) => l.entity_id) })}>
                    ${this.t("panel_all_on")}
                  </button>`
                : nothing}${lightsOn.length
                ? html`<button class="nf-btn nf-rp-small" @click=${() => this.call("light", "turn_off", { entity_id: lightsOn.map((l) => l.entity_id) })}>
                    ${this.t("panel_all_off")}
                  </button>`
                : nothing}`,
            )
          : nothing}
        ${covers.length
          ? this.section(
              "panel_covers",
              covers.map((st) => this.coverRow(st)),
              covers.length > 1 && groupCovers(covers, this.confirmEntities).length
                ? html`<button class="nf-btn nf-rp-small" @click=${() => this.call("cover", "open_cover", { entity_id: groupCovers(covers, this.confirmEntities) })}>
                      ${this.t("panel_all_open")}</button
                    ><button class="nf-btn nf-rp-small" @click=${() => this.call("cover", "close_cover", { entity_id: groupCovers(covers, this.confirmEntities) })}>
                      ${this.t("panel_all_close")}
                    </button>`
                : nothing,
            )
          : nothing}
        ${climates.length ? this.section("panel_climate", climates.map((st) => this.climateRow(st))) : nothing}
        ${media.length ? this.section("panel_media", media.map((st) => this.mediaRow(st))) : nothing}
        ${switches.length ? this.section("panel_switches", switches.map((st) => this.switchRow(st))) : nothing}
        ${sensors.length ? this.section("panel_sensors", sensors.map((st) => this.sensorRow(st))) : nothing}
        ${canAnnounce(this.hass) && roomHasSpeaker(this.hass, this.floor, room) ? this.announceSection(room) : nothing}
        ${this.pluginSections(room, ids)}
        ${hiddenCount
          ? html`<button class="nf-btn nf-rp-small nf-rp-more" @click=${() => (this._showAll = !this._showAll)}>
              ${this._showAll ? this.t("panel_less") : this.t("panel_more", { n: hiddenCount })}
            </button>`
          : nothing}
      </div>
    </section>`;
  }

  /** Header facts: the room's temperature and humidity from its climate sensors (chosen or automatic). */
  private facts(climates: HassEntity[]): string[] {
    const out: string[] = [];
    const room = this.room;
    // Outside has no climate of its own
    if (!room) return out;
    const value = (key: "temperature" | "humidity", fallbackUnit: string) => {
      const v = roomClimateValue(this.hass, this.floor, room, key);
      if (v === null) return null;
      if (key === "temperature") return `${formatNumber(this.hass, fromCelsius(this.hass, v), 1)} ${tempUnit(this.hass)}`;
      const first = roomClimateSensors(this.hass, this.floor, room, key)[0];
      const unit = (this.hass.states[first]?.attributes.unit_of_measurement as string | undefined) ?? fallbackUnit;
      return `${formatNumber(this.hass, v, 1)} ${unit}`;
    };
    const climateTemp = climates.find((c) => typeof c.attributes.current_temperature === "number");
    const temp = value("temperature", "°C");
    if (temp) out.push(temp);
    else if (climateTemp && room.climate?.temperature !== "none") out.push(`${formatNumber(this.hass, climateTemp.attributes.current_temperature as number, 1)} ${tempUnit(this.hass)}`);
    const hum = value("humidity", "%");
    if (hum) out.push(hum);
    // what the room's devices draw now
    const power = this.floor && this.building ? roomPower(this.hass, this.building, this.floor, room) : null;
    if (power !== null) out.push(`⚡ ${powerText(this.hass, power)}`);
    // the room's devices with a low battery
    const low = this.building ? planBatteries(this.hass, this.building).filter((b) => b.roomId === room.id && b.level < LOW_BATTERY) : [];
    if (low.length) out.push(`🪫 ${this.t("battery_low_n", { n: low.length, names: low.map((b) => `${this.name(b.entity)} ${Math.round(b.level)} %`).join(", ") })}`);
    // the circuits of the fuse box that feed it
    const circuits = (this.building?.settings.circuits ?? []).filter((c) => c.rooms.includes(room.id)).map((c) => c.name);
    if (circuits.length) out.push(`🔌 ${circuits.join(", ")}`);
    // hours of sun through its outside windows today
    const { latitude, longitude, time_zone } = this.hass.config ?? {};
    if (this.floor && latitude !== undefined && longitude !== undefined && this.building) {
      const sun = roomSun(this.building, this.floor, room, { latitude, longitude, zone: time_zone });
      if (sun.facing.length) out.push(`☀ ${this.t("room_sun_hours", { h: formatNumber(this.hass, sun.hours, 1), facing: sun.facing.join(", ") })}`);
    }
    // airing hints: too much CO₂, too damp, or a risk of mould at the coldest wall
    const t = roomClimateValue(this.hass, this.floor, room, "temperature");
    const h = roomClimateValue(this.hass, this.floor, room, "humidity");
    const need = airingNeed(roomClimateValue(this.hass, this.floor, room, "co2"), h, mouldRisk(t, h));
    if (need) out.push(`💨 ${this.t(`air_${need}`)}`);
    return out;
  }

  /** Announcements in the room: a tap on a sentence says it on the room's speaker; an own message too. */
  private announceSection(room: Room) {
    const phrases = this.phrases?.length ? this.phrases : [1, 2, 3, 4, 5].map((n) => this.t(`announce_phrase_${n}` as I18nKey));
    const say = (message: string) => {
      const text = message.trim();
      if (!text) return;
      clearTimeout(this.saidTimer);
      this.hass.callService("nextfloor", "announce", { message: text, rooms: [room.id], on_screens: false }).then(
        () => (this._said = { text: this.t("announce_sent", { message: text }), failed: false }),
        (err: unknown) => (this._said = { text: this.t("announce_failed", { error: (err as { message?: string })?.message ?? String(err) }), failed: true }),
      );
      this.saidTimer = setTimeout(() => (this._said = null), 6000);
    };
    const own = (e: Event) => {
      e.preventDefault();
      const input = (e.currentTarget as HTMLFormElement).querySelector("input")!;
      say(input.value);
      input.value = "";
    };
    return this.section("panel_announce", [
      html`<div class="nf-rp-scenes">${phrases.map((p) => html`<button class="nf-btn" @click=${() => say(p)}>${p}</button>`)}</div>
        <form class="nf-rp-say" @submit=${own}>
          <input type="text" maxlength="500" placeholder=${this.t("announce_placeholder")} aria-label=${this.t("announce_placeholder")} />
          <button class="nf-btn nf-primary" type="submit">${this.t("announce_send")}</button>
        </form>
        ${this._said ? html`<p class="nf-rp-note ${this._said.failed ? "nf-rp-fail" : ""}" role="status">${this._said.text}</p>` : nothing}`,
    ]);
  }

  /** Blocks plugins add for this room, titled with the plugin's name. */
  private pluginSections(room: { id: string; name: string; area_id?: string | null }, ids: string[]) {
    const sections = pluginRoomSections({ hass: this.hass, room: { id: room.id, name: room.name, area_id: room.area_id ?? null }, entities: ids });
    return sections.map(
      (sec) => html`<div class="nf-rp-sec nf-rp-plugin" data-plugin=${sec.key}>
        <div class="nf-rp-sec-head"><h3>${sec.title}</h3></div>
        ${typeof sec.content === "string" ? html`<p class="nf-rp-note">${sec.content}</p>` : sec.content}
      </div>`,
    );
  }

  private section(title: I18nKey, rows: unknown[], action: TemplateResult | typeof nothing = nothing) {
    return html`<div class="nf-rp-sec">
      <div class="nf-rp-sec-head"><h3>${this.t(title)}</h3>${action}</div>
      ${rows}
    </div>`;
  }

  private lightRow(st: HassEntity) {
    const a = st.attributes;
    const on = st.state === "on";
    const modes = (a.supported_color_modes as string[] | undefined) ?? [];
    const dimmable = modes.some((m) => m !== "onoff");
    const temp = modes.includes("color_temp");
    const color = modes.some((m) => ["hs", "rgb", "rgbw", "rgbww", "xy"].includes(m));
    const pct = typeof a.brightness === "number" ? Math.round((a.brightness / 255) * 100) : 100;
    const kMin = (a.min_color_temp_kelvin as number | undefined) ?? 2200;
    const kMax = (a.max_color_temp_kelvin as number | undefined) ?? 6500;
    const id = st.entity_id;
    return html`<div class="nf-rp-row">
      <span class="nf-rp-icon ${on ? "nf-rp-on" : ""}">${icon("light")}</span>
      ${this.nameButton(id)}
      <span class="nf-rp-state">${this.stateOf(st)}</span>
      ${this.toggle(st, on, () => this.call("light", "toggle", { entity_id: id }))}
      ${on && dimmable
        ? html`<label class="nf-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(pct)}
              @change=${(e: Event) => this.call("light", "turn_on", { entity_id: id, brightness_pct: Number((e.target as HTMLInputElement).value) })}
          /></label>`
        : nothing}
      ${on && temp
        ? html`<label class="nf-rp-slider nf-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${kMin}
              max=${kMax}
              step="50"
              .value=${String((a.color_temp_kelvin as number | undefined) ?? kMin)}
              @change=${(e: Event) => this.call("light", "turn_on", { entity_id: id, color_temp_kelvin: Number((e.target as HTMLInputElement).value) })}
          /></label>`
        : nothing}
      ${on && color
        ? html`<div class="nf-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${SWATCHES.map(
              (c) => html`<button
                class="nf-rp-swatch"
                style="--c: rgb(${c.join(",")})"
                aria-label="rgb(${c.join(", ")})"
                @click=${() => this.call("light", "turn_on", { entity_id: id, rgb_color: c })}
              ></button>`,
            )}
          </div>`
        : nothing}
    </div>`;
  }

  private coverRow(st: HassEntity) {
    const a = st.attributes;
    const features = (a.supported_features as number | undefined) ?? 0;
    const id = st.entity_id;
    // a cover without feedback (a garage remote) stays unknown, but its buttons still work
    const na = isUnavailable(st) && !assumedCover(st);
    return html`<div class="nf-rp-row">
      <span class="nf-rp-icon">${icon("cover")}</span>
      ${this.nameButton(id)}
      <span class="nf-rp-state">${this.stateOf(st)}</span>
      <div class="nf-rp-buttons">
        <button class="nf-btn nf-rp-small" ?disabled=${na} @click=${() => this.askFor(id) && this.call("cover", "open_cover", { entity_id: id })}>${this.t("cover_open")}</button>
        ${features & COVER_STOP
          ? html`<button class="nf-btn nf-rp-small" ?disabled=${na} @click=${() => this.call("cover", "stop_cover", { entity_id: id })}>${this.t("cover_stop")}</button>`
          : nothing}
        <button class="nf-btn nf-rp-small" ?disabled=${na} @click=${() => this.askFor(id) && this.call("cover", "close_cover", { entity_id: id })}>${this.t("cover_close")}</button>
      </div>
      ${features & COVER_SET_POSITION && typeof a.current_position === "number"
        ? html`<label class="nf-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${na}
              .value=${String(a.current_position)}
              @change=${(e: Event) => this.call("cover", "set_cover_position", { entity_id: id, position: Number((e.target as HTMLInputElement).value) })}
          /></label>`
        : nothing}
      ${features & 128 && typeof a.current_tilt_position === "number"
        ? html`<label class="nf-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${na}
              .value=${String(a.current_tilt_position)}
              @change=${(e: Event) => this.call("cover", "set_cover_tilt_position", { entity_id: id, tilt_position: Number((e.target as HTMLInputElement).value) })}
          /></label>`
        : features & 48
          ? html`<div class="nf-rp-buttons">
              ${features & 16 ? html`<button class="nf-btn nf-rp-small" ?disabled=${na} @click=${() => this.call("cover", "open_cover_tilt", { entity_id: id })}>${this.t("cover_tilt_open")}</button>` : nothing}
              ${features & 32 ? html`<button class="nf-btn nf-rp-small" ?disabled=${na} @click=${() => this.call("cover", "close_cover_tilt", { entity_id: id })}>${this.t("cover_tilt_close")}</button>` : nothing}
            </div>`
          : nothing}
    </div>`;
  }

  private climateRow(st: HassEntity) {
    const a = st.attributes;
    const id = st.entity_id;
    const target = typeof a.temperature === "number" ? a.temperature : null;
    const step = (a.target_temp_step as number | undefined) ?? 0.5;
    const min = (a.min_temp as number | undefined) ?? 5;
    const max = (a.max_temp as number | undefined) ?? 30;
    const modes = (a.hvac_modes as string[] | undefined) ?? [];
    const set = (v: number) => this.call("climate", "set_temperature", { entity_id: id, temperature: Math.min(max, Math.max(min, Math.round(v / step) * step)) });
    return html`<div class="nf-rp-row">
      <span class="nf-rp-icon ${a.hvac_action === "heating" ? "nf-rp-on" : ""}">${icon("climate")}</span>
      ${this.nameButton(id)}
      <span class="nf-rp-state">${this.stateOf(st)}</span>
      ${target !== null
        ? html`<div class="nf-rp-stepper nf-rp-wide">
            <button class="nf-btn" aria-label=${this.t("temp_down")} @click=${() => set(target - step)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${formatNumber(this.hass, target, 1)} ${tempUnit(this.hass)}</span>
            <button class="nf-btn" aria-label=${this.t("temp_up")} @click=${() => set(target + step)}>+</button>
          </div>`
        : nothing}
      ${modes.length > 1
        ? html`<div class="nf-rp-chips">
            ${modes.map(
              (m) => html`<button
                class="nf-chip"
                aria-pressed=${st.state === m}
                @click=${() => this.call("climate", "set_hvac_mode", { entity_id: id, hvac_mode: m })}
              >
                ${this.stateLabel(m)}
              </button>`,
            )}
          </div>`
        : nothing}
    </div>`;
  }

  /**
   * The state text of a row: left out when the room says so (D154) or when a device that is not a
   * sensor only reports "unknown" (covers without position feedback).
   */
  private stateOf(st: HassEntity, text = stateText(this.hass, st)): string {
    if (this.room?.no_state?.includes(st.entity_id)) return "";
    const kind = kindOf(st.entity_id);
    if (st.state === "unknown" && kind !== "sensor" && kind !== "binary") return "";
    return text;
  }

  private stateLabel(state: string): string {
    const key = `state_${state}` as I18nKey;
    const s = this.t(key);
    return s === key ? state : s;
  }

  private mediaRow(st: HassEntity) {
    const a = st.attributes;
    const id = st.entity_id;
    const na = isUnavailable(st) || st.state === "off";
    const title = [a.media_title, a.media_artist].filter((x) => typeof x === "string" && x).join(" · ");
    return html`<div class="nf-rp-row">
      <span class="nf-rp-icon ${st.state === "playing" ? "nf-rp-on" : ""}">${icon("media")}</span>
      ${this.nameButton(id)}
      <span class="nf-rp-state">${this.stateOf(st, this.stateLabel(st.state))}</span>
      ${title ? html`<p class="nf-rp-media nf-rp-wide">${title}</p>` : nothing}
      <div class="nf-rp-buttons nf-rp-wide">
        <button class="nf-btn nf-rp-small" aria-label=${this.t("previous")} ?disabled=${na} @click=${() => this.call("media_player", "media_previous_track", { entity_id: id })}>
          ${transport(TRANSPORT.previous)}
        </button>
        <button class="nf-btn nf-rp-small" aria-label=${this.t("play_pause")} ?disabled=${isUnavailable(st)} @click=${() => this.call("media_player", "media_play_pause", { entity_id: id })}>
          ${transport(st.state === "playing" ? TRANSPORT.pause : TRANSPORT.play)}
        </button>
        <button class="nf-btn nf-rp-small" aria-label=${this.t("next")} ?disabled=${na} @click=${() => this.call("media_player", "media_next_track", { entity_id: id })}>
          ${transport(TRANSPORT.next)}
        </button>
      </div>
      ${typeof a.volume_level === "number"
        ? html`<label class="nf-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(a.volume_level * 100))}
              @change=${(e: Event) => this.call("media_player", "volume_set", { entity_id: id, volume_level: Number((e.target as HTMLInputElement).value) / 100 })}
          /></label>`
        : nothing}
    </div>`;
  }

  private switchRow(st: HassEntity) {
    const id = st.entity_id;
    const kind = kindOf(id)!;
    const domain = id.slice(0, id.indexOf("."));
    const on = kind === "lock" ? st.state === "unlocked" || st.state === "open" : isActive(st);
    const act = () => (kind === "lock" ? this.call("lock", on ? "lock" : "unlock", { entity_id: id }) : this.call(domain, "toggle", { entity_id: id }));
    return html`<div class="nf-rp-row">
      <span class="nf-rp-icon ${on ? "nf-rp-on" : ""}">${icon(kind)}</span>
      ${this.nameButton(id)}
      <span class="nf-rp-state">${this.stateOf(st)}</span>
      ${this.toggle(st, on, act)}
    </div>`;
  }

  private sensorRow(st: HassEntity) {
    const kind = kindOf(st.entity_id)!;
    const warn = kind === "binary" && st.state === "on";
    return html`<div class="nf-rp-row">
      <span class="nf-rp-icon ${warn ? "nf-rp-on" : ""}">${icon(kind)}</span>
      ${this.nameButton(st.entity_id)}
      <span class="nf-rp-state">${this.stateOf(st)}</span>
    </div>`;
  }

  private fire(type: string): void {
    this.dispatchEvent(new CustomEvent(type, { bubbles: true, composed: true }));
  }

  static styles = [
    tokens,
    controls,
    css`
      :host {
        display: block;
      }
      .nf-rp {
        /* the host may be pointer-events: none so the 3D view stays usable around the panel */
        pointer-events: auto;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        background: var(--nf-chrome-solid);
        border: 1px solid var(--nf-line);
        border-radius: 18px;
        box-shadow: var(--nf-shadow);
        overflow: hidden;
      }
      .nf-rp-head {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 14px 14px 10px 16px;
        border-bottom: 1px solid var(--nf-line);
      }
      .nf-rp-head > div {
        flex: 1;
        min-width: 0;
      }
      h2 {
        margin: 0;
        font: 700 21px var(--nf-title-font);
        letter-spacing: -0.01em;
      }
      .nf-rp-facts {
        margin: 2px 0 0;
        color: var(--nf-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      @media (pointer: coarse) {
        .nf-rp-close {
          width: 40px;
          height: 40px;
        }
        .nf-rp-swatch {
          width: 36px;
          height: 36px;
        }
        .nf-rp-small {
          min-height: 36px;
        }
      }
      .nf-rp-close {
        display: grid;
        place-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: none;
        background: color-mix(in srgb, var(--nf-text) 6%, transparent);
        color: var(--nf-text);
        cursor: pointer;
      }
      .nf-rp-body[hidden] {
        display: none;
      }
      .nf-rp-head:has(+ .nf-rp-body[hidden]) {
        border-bottom: none;
      }
      .nf-rp-body {
        overflow-y: auto;
        padding: 6px 14px 16px 16px;
        display: grid;
        gap: 14px;
        overscroll-behavior: contain;
      }
      .nf-rp-shade {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        margin: 4px 0;
        padding: 6px 8px;
        border-radius: 8px;
        font-size: 12px;
        background: color-mix(in srgb, var(--nf-warm) 16%, transparent);
      }
      .nf-rp-sun-year {
        border: none;
        background: none;
        color: var(--nf-muted);
        font: inherit;
        font-size: 12px;
        padding: 2px 0;
        cursor: pointer;
      }
      .nf-rp-sun-bars {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 3px;
        height: 54px;
        margin: 2px 0 6px;
      }
      .nf-rp-sun-bars span {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        gap: 2px;
      }
      .nf-rp-sun-bars i {
        display: block;
        width: 100%;
        min-height: 2px;
        border-radius: 3px 3px 0 0;
        background: var(--nf-warm);
      }
      .nf-rp-sun-bars b {
        font-size: 10px;
        font-weight: 500;
        color: var(--nf-muted);
      }
      .nf-rp-alloff {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
        margin: 6px 0 2px;
        font-size: 13px;
        color: var(--nf-muted);
      }
      .nf-rp-note {
        color: var(--nf-muted);
        font-size: 13px;
        margin: 8px 0 0;
      }
      .nf-rp-sec-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 6px;
      }
      h3 {
        margin: 0;
        font-size: 11.5px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--nf-muted);
      }
      .nf-rp-row {
        display: grid;
        grid-template-columns: 28px 1fr auto auto;
        align-items: center;
        gap: 6px 10px;
        padding: 9px 0;
        border-bottom: 1px solid var(--nf-line);
      }
      .nf-rp-row:last-child {
        border-bottom: none;
      }
      .nf-rp-row > :nth-child(n + 5),
      .nf-rp-row > .nf-rp-wide {
        grid-column: 2 / -1;
      }
      .nf-rp-icon {
        display: grid;
        place-items: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        color: var(--nf-muted);
        background: color-mix(in srgb, var(--nf-soft) 12%, transparent);
      }
      .nf-rp-on {
        color: #2a1a00;
        background: var(--nf-warm);
        box-shadow: 0 0 14px rgba(255, 181, 71, 0.55);
      }
      .nf-rp-name {
        font: inherit;
        font-weight: 500;
        color: var(--nf-text);
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .nf-rp-state {
        font-size: 12.5px;
        color: var(--nf-muted);
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        max-width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .nf-rp-row > .nf-rp-state:last-child {
        grid-column: 3 / -1;
        justify-self: end;
      }
      .nf-switch {
        position: relative;
        width: 44px;
        height: 26px;
        border-radius: 999px;
        border: none;
        background: color-mix(in srgb, var(--nf-text) 10%, transparent);
        cursor: pointer;
      }
      .nf-switch::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #e6eefc;
        transition: transform 0.2s ease;
      }
      .nf-switch[aria-checked="true"] {
        background: var(--nf-warm);
      }
      .nf-switch[aria-checked="true"]::after {
        transform: translateX(18px);
      }
      .nf-switch:disabled {
        opacity: 0.4;
        cursor: default;
      }
      .nf-rp-slider {
        display: grid;
        grid-template-columns: 110px 1fr;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        color: var(--nf-muted);
      }
      .nf-rp-slider input {
        width: 100%;
        accent-color: var(--nf-accent);
      }
      .nf-rp-ct input {
        accent-color: var(--nf-warm);
      }
      .nf-rp-swatches,
      .nf-rp-buttons,
      .nf-rp-chips,
      .nf-rp-say {
        display: flex;
        gap: 8px;
        margin-top: 8px;
      }
      .nf-rp-say input {
        flex: 1;
        min-width: 0;
        font: inherit;
        font-size: 14px;
        color: var(--nf-text);
        background: var(--nf-fill);
        border: none;
        border-bottom: 1px solid var(--nf-line);
        border-radius: 10px 10px 4px 4px;
        padding: 8px 10px;
      }
      .nf-rp-fail {
        color: #ff6b7a;
      }
      .nf-rp-moods {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 6px;
      }
      .nf-rp-mood {
        display: inline-flex;
        gap: 2px;
        align-items: center;
      }
      .nf-rp-mood-to {
        width: 38px;
        font: inherit;
        background: var(--nf-bg2);
        color: var(--nf-text);
        border: 1px solid var(--nf-line);
        border-radius: 8px;
      }
      .nf-rp-mood input {
        width: 120px;
        font: inherit;
        padding: 4px 8px;
        border-radius: 8px;
        border: 1px solid var(--nf-line);
        background: var(--nf-bg2);
        color: var(--nf-text);
      }
      .nf-rp-curve {
        position: relative;
        margin-top: 4px;
        width: 220px;
        max-width: 100%;
      }
      .nf-rp-curve svg {
        display: block;
        width: 100%;
        height: 30px;
      }
      .nf-rp-curve path {
        fill: none;
        stroke: var(--nf-warm, #ff9f43);
        stroke-width: 1.5;
        vector-effect: non-scaling-stroke;
      }
      .nf-rp-curve span {
        font-size: 10.5px;
        color: var(--nf-muted);
      }
      .nf-rp-scenes {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .nf-rp-swatch {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid color-mix(in srgb, var(--nf-text) 20%, transparent);
        background: var(--c);
        box-shadow: 0 0 10px var(--c);
        cursor: pointer;
      }
      .nf-rp-more {
        justify-self: start;
      }
      .nf-rp-small {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
        min-height: 30px;
        font-size: 13px;
      }
      .nf-rp-stepper {
        display: flex;
        align-items: center;
        gap: 10px;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
      }
      .nf-rp-stepper small {
        color: var(--nf-muted);
        font-weight: 500;
        margin-right: 4px;
      }
      .nf-rp-stepper .nf-btn {
        width: 36px;
        padding: 4px 0;
        font-size: 17px;
      }
      .nf-rp-chips .nf-chip {
        box-shadow: none;
        border: 1px solid var(--nf-line);
        min-height: 30px;
        padding: 4px 11px;
        font-size: 13px;
      }
      .nf-rp-media {
        margin: 0;
        font-size: 12.5px;
        color: var(--nf-muted);
      }
      button:focus-visible,
      input:focus-visible {
        outline: 2px solid var(--nf-accent);
        outline-offset: 2px;
      }
    `,
  ];
}

if (!customElements.get("nf-room-panel")) customElements.define("nf-room-panel", NfRoomPanel);
