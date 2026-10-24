// The Lovelace card. The integration loads it automatically; no resource has to be added.

import { html, LitElement, nothing, type PropertyValues, type TemplateResult } from "lit";
import { BuildingController } from "./building-controller.ts";
import type { CardConfig, CardControl } from "./card-config.ts";
import { KioskTimers } from "./card/kiosk.ts";
import { roomButtons } from "./card/room-buttons.ts";
import { cardStyles } from "./card/styles.ts";
import "./components/room-panel.ts";
import "./components/view3d.ts";
import { confirmEntities } from "./devices.ts";
import { translate } from "./i18n.ts";
import { nightActive } from "./kiosk.ts";
import { loadCardEditor } from "./load-card-editor.ts";
import { colorSchemeOf, controls, tokens } from "./styles.ts";
import type { HomeAssistant } from "./types.ts";
import type { WallMode } from "./viewer/viewer3d.ts";

type HeatMode = NonNullable<CardConfig["heatmap"]>;
type Key = Parameters<typeof translate>[1];

interface Stage {
  floorId: string | null;
  walls: WallMode;
  heat: HeatMode;
  explode: boolean;
  showBar: boolean;
  canGoBack: boolean;
}

export class NextFloorCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _roomId: { state: true },
    _floorId: { state: true },
    _walls: { state: true },
    _heat: { state: true },
    _explode: { state: true },
    _fullscreen: { state: true },
    _clean: { state: true },
    _night: { state: true },
    _orbit: { state: true },
  };

  declare hass: HomeAssistant;
  private declare _config: CardConfig;
  private declare _roomId: string | null;
  /** The configured start room has been opened once the building arrived. */
  private roomApplied = false;
  /** The floor chosen in the card: null is the house, undefined means none was chosen so the configured floor applies. */
  private declare _floorId: string | null | undefined;
  /** Choices made with the card's own switches; null means as configured. */
  private declare _walls: WallMode | null;
  private declare _heat: HeatMode | null;
  private declare _explode: boolean | null;
  private declare _fullscreen: boolean;
  /** The clean view: only the stage (option controls_hidden, the eye button, or the hide-after timer). */
  private declare _clean: boolean;
  /** Kiosk: the night dimming is on, and the screensaver turn runs (after an idle return). */
  private declare _night: boolean;
  private declare _orbit: boolean;

  private readonly data = new BuildingController(this);
  private readonly kiosk = new KioskTimers({
    config: () => this._config,
    hass: () => this.hass,
    setClean: (clean) => (this._clean = clean),
    isClean: () => this._clean,
    setOrbit: (on) => (this._orbit = on),
    isOrbit: () => this._orbit,
    setNight: (night) => (this._night = night),
    goHome: () => this.returnHome(),
  });

  constructor() {
    super();
    this._roomId = null;
    this._floorId = undefined;
    this._walls = null;
    this._heat = null;
    this._explode = null;
    this._fullscreen = false;
    this._clean = false;
    this._night = false;
    this._orbit = false;
  }

  private view3d() {
    return this.shadowRoot?.querySelector("nf-view3d") as (HTMLElement & { resetView(): void; lookThrough(entityId: string): void }) | null;
  }

  /** Back to the start view: room closed, start floor, camera reset. The screensaver may start. */
  private returnHome(): void {
    this._roomId = this._config?.room ?? null;
    this._floorId = undefined;
    this.view3d()?.resetView();
    if (this._config?.idle_orbit) this._orbit = true;
  }

  /** Opens another dashboard or view the way Home Assistant's own links do, without a page reload. */
  private openDashboard(path: string): void {
    history.pushState(null, "", path);
    window.dispatchEvent(new CustomEvent("location-changed", { bubbles: true, composed: true, detail: { replace: false } }));
  }

  private readonly onFullscreen = () => (this._fullscreen = !!document.fullscreenElement && this.shadowRoot?.contains(document.fullscreenElement) === true);

  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener("fullscreenchange", this.onFullscreen);
    this.kiosk.start();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener("fullscreenchange", this.onFullscreen);
    this.kiosk.stop();
  }

  private toggleFullscreen(): void {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void this.shadowRoot?.querySelector("ha-card")?.requestFullscreen?.();
  }

  /** The visual editor in the dashboard, so no YAML is needed. */
  static async getConfigElement(): Promise<HTMLElement> {
    await loadCardEditor();
    return document.createElement("nextfloor-card-editor");
  }

  static getStubConfig(): CardConfig {
    return { type: "custom:nextfloor-card" };
  }

  setConfig(config: CardConfig): void {
    if (config.height !== undefined && !(config.height > 100)) throw new Error("height must be a number of pixels above 100");
    this._config = config;
    this._floorId = undefined;
    this._walls = null;
    this._heat = null;
    this._explode = null;
    this._orbit = false;
    this._night = nightActive(config.night, this.hass);
    this._clean = config.controls_hidden === true;
    this.kiosk.armClean();
    this.kiosk.armIdle();
  }

  getCardSize(): number {
    return Math.ceil((this._config?.height ?? 420) / 50);
  }

  getGridOptions() {
    return { columns: "full", rows: this._config?.fill ? 12 : Math.ceil((this._config?.height ?? 420) / 56), min_rows: 4 };
  }

  protected willUpdate(changed: PropertyValues): void {
    if (changed.has("hass")) this.style.colorScheme = colorSchemeOf(this.hass);
    if (!changed.has("hass") || !this.hass) return;
    this.data.setHass(this.hass);
    // a language beyond German and English: its texts are fetched first, and then everything renders
    const night = nightActive(this._config?.night, this.hass);
    if (night !== this._night) this._night = night;
  }

  /** Floors can be switched: no fixed floor, or floor pictures to switch with. */
  private get canSwitch(): boolean {
    return !this._config?.floor || this.thumbs;
  }

  private get thumbs(): boolean {
    return this._config?.floor_thumbs ?? !this._config?.floor;
  }

  /** One level up: room, then floor, then the house. */
  private back(): void {
    if (this._roomId) this._roomId = null;
    else if (this.canSwitch) this._floorId = null;
  }

  private readonly t = (key: Key) => translate(this.hass, key);

  /** Which floor shows, the switches' current values, and whether the bar of switches and its back button are there. */
  private stage(): Stage {
    const b = this.data.building;
    const c = this._config;
    // the configured floor is where the card starts; with floor pictures the user can switch
    const chosen = this._floorId === undefined ? (c?.floor ?? null) : this._floorId;
    const floorId = b && b.floors.length === 1 ? b.floors[0].id : b?.floors.some((f) => f.id === chosen) ? chosen : null;
    // the floor pictures have a house button of their own; a room with its panel has a close button
    const panelOpen = !!this._roomId && c?.room_panel !== false;
    const canGoBack = (!!this._roomId && c?.room_panel === false) || (!this.thumbs && this.canSwitch && !this._roomId && !!floorId && (b?.floors.length ?? 0) > 1);
    return {
      floorId,
      walls: this._walls ?? c?.walls ?? "auto",
      heat: this._heat ?? c?.heatmap ?? "none",
      explode: this._explode ?? c?.explode ?? true,
      canGoBack,
      // the bar of switches at the bottom: the back button belongs to it
      showBar: !!b && !this._clean && (canGoBack || (!!c?.controls && !panelOpen)),
    };
  }

  private shows(control: CardControl): boolean {
    const c = this._config?.controls;
    return c === true || (Array.isArray(c) && c.includes(control));
  }

  /** The bar of switches: back, wall mode, floor stacking, heat map. */
  private renderBar(s: Stage): TemplateResult {
    const b = this.data.building!;
    const t = this.t;
    const heats = (["temperature", "humidity", "co2"] as const).filter((m) => this.shows(m));
    const group = (label: string | undefined, buttons: [boolean, () => void, string][]) =>
      html`<div class="nf-seg" role=${label ? "group" : nothing} aria-label=${label ?? nothing}>${buttons.map(([on, act, text]) => html`<button aria-pressed=${on} @click=${act}>${text}</button>`)}</div>`;
    return html`<div class="nf-card-controls">
      ${s.canGoBack ? html`<button class="nf-chip" @click=${() => this.back()}>${t("back")}</button>` : nothing}
      ${this.shows("walls") ? group(undefined, [[s.walls === "auto", () => (this._walls = "auto"), t("walls_auto")], [s.walls === "cut", () => (this._walls = "cut"), t("walls_cut")]]) : nothing}
      ${this.shows("floors") && b.floors.length > 1 && !s.floorId
        ? group(undefined, [[s.explode, () => (this._explode = true), t("floors_apart")], [!s.explode, () => (this._explode = false), t("floors_stacked")]])
        : nothing}
      ${heats.length > 0
        ? group(
            t("heatmap"),
            (["none", ...heats] as HeatMode[]).map((m): [boolean, () => void, string] => [s.heat === m, () => (this._heat = m), t(m === "none" ? "heat_off" : (`heat_short_${m}` as Key))]),
          )
        : nothing}
    </div>`;
  }

  /** One chip per room above the model; a tap opens the room (its floor first, when another floor shows), a second tap closes it. */
  private renderRoomButtons(s: Stage): TemplateResult | typeof nothing {
    const b = this.data.building;
    if (!this._config?.room_buttons || !b || this._clean) return nothing;
    const groups = roomButtons(b, s.floorId);
    if (!groups.length) return nothing;
    const several = groups.length > 1;
    const open = (floorId: string, roomId: string) => {
      if (this.canSwitch && floorId !== s.floorId) this._floorId = floorId;
      this._roomId = roomId === this._roomId ? null : roomId;
    };
    return html`<div class="nf-card-rooms ${this._roomId && this._config?.room_panel !== false ? "nf-card-rooms-beside" : ""}" role="group" aria-label=${this.t("card_room_buttons")}>
      ${groups.map(
        (g) => html`${several ? html`<span class="nf-card-rooms-floor">${g.floorName}</span>` : nothing}${g.rooms.map(
          (r) => html`<button class="nf-chip" aria-pressed=${r.id === this._roomId} @click=${() => open(g.floorId, r.id)}>${r.name}</button>`,
        )}`,
      )}
    </div>`;
  }

  /** The corner buttons: full screen, and a link to another dashboard. */
  private renderCorners(): TemplateResult {
    const c = this._config;
    const t = this.t;
    const hidden = this._clean || (!!this._roomId && c?.room_panel !== false);
    return html`${c?.fullscreen_button && !hidden
      ? html`<button class="nf-card-full" title=${t(this._fullscreen ? "fullscreen_exit" : "fullscreen")} aria-label=${t(this._fullscreen ? "fullscreen_exit" : "fullscreen")} @click=${() => this.toggleFullscreen()}>
          ${this._fullscreen ? "✕" : "⛶"}
        </button>`
      : nothing}
    ${c?.dashboard && !hidden
      ? html`<button class="nf-card-full nf-card-dash ${c.fullscreen_button ? "nf-card-dash-2" : ""}" title=${c.dashboard_label || c.dashboard} aria-label=${c.dashboard_label || c.dashboard} @click=${() => this.openDashboard(c.dashboard!)}>
          ${c.dashboard_label ? html`<span>${c.dashboard_label}</span>` : "⌂"}
        </button>`
      : nothing}`;
  }

  private renderStage(s: Stage): TemplateResult {
    const b = this.data.building!;
    const c = this._config;
    const clean = () => {
      this._clean = !this._clean;
      if (this._clean) this.kiosk.stopClean();
      else this.kiosk.armClean();
    };
    const eye = c?.controls_hidden !== undefined || (c?.controls_hide_after ?? 0) > 0;
    return html`<nf-view3d
      .hass=${this.hass}
      .building=${b}
      .packs=${this.data.packs}
      .floorId=${s.floorId}
      .roomId=${this._roomId}
      .wallMode=${s.walls}
      .explode=${s.explode}
      .keepRoof=${c?.roof_fade === false}
      .quality=${c?.quality ?? "auto"}
      ?showStats=${c?.stats ?? false}
      .markerMode=${c?.markers ?? "important"}
      .markerNames=${c?.marker_names === true}
      .central=${c?.central !== false}
      .buttons=${c?.buttons?.map((button, i) => ({ id: `card_${i}`, ...button })) ?? null}
      .heatMode=${s.heat}
      .theme=${c?.theme ?? "neon"}
      .accent=${c?.accent ?? null}
      .showEnergy=${c?.energy ?? true}
      .flows=${c?.flows ?? null}
      .holograms=${c?.holograms ?? null}
      .floorThumbs=${this.thumbs}
      .roomLabels=${c?.room_names !== false}
      .floorStack=${c?.floor_stack ?? "dim"}
      .panelOpen=${!!this._roomId && c?.room_panel !== false}
      .alerts=${c?.alerts !== false}
      .alertJump=${!!c?.alert_jump}
      .scenes=${c?.scenes !== false}
      .clean=${this._clean}
      .cleanButton=${eye}
      @clean-toggle=${clean}
      ?weather=${c?.weather !== false}
      .weatherEntityId=${c?.weather_entity ?? null}
      .weatherDensity=${c?.weather_density ?? 1}
      .dimmed=${this._night}
      .autoOrbit=${this._orbit}
      .startView=${c?.start_view ?? null}
      style=${s.showBar ? "--nf-bottom-inset: 52px" : ""}
      @room-tap=${(e: CustomEvent<{ floorId: string; roomId: string | null }>) => {
        // in the house view (or on another floor) a tap first opens the whole floor
        if (this.canSwitch && b.floors.length > 1 && e.detail.floorId && s.floorId !== e.detail.floorId) {
          this._floorId = e.detail.floorId;
          this._roomId = null;
        } else if (e.detail.roomId) this._roomId = e.detail.roomId === this._roomId ? null : e.detail.roomId;
      }}
      @floor-tap=${(e: CustomEvent<{ floorId: string | null }>) => {
        this._floorId = e.detail.floorId;
        this._roomId = null;
      }}
      @back=${() => this.back()}
    ></nf-view3d>`;
  }

  private renderRoomPanel(): TemplateResult {
    const b = this.data.building!;
    return html`<nf-room-panel
      class="nf-card-panel"
      .hass=${this.hass}
      .room=${b.floors.flatMap((f) => f.rooms).find((r) => r.id === this._roomId) ?? null}
      .floor=${b.floors.find((f) => f.rooms.some((r) => r.id === this._roomId)) ?? null}
      .confirmEntities=${confirmEntities(this.hass, b.floors)}
      @close=${() => (this._roomId = null)}
    ></nf-room-panel>`;
  }

  protected render() {
    const b = this.data.building;
    const c = this._config;
    // the configured room opens once, when the building is there; the kiosk return brings it back
    if (!this.roomApplied && b && c?.room) {
      this.roomApplied = true;
      if (b.floors.some((f) => f.rooms.some((r) => r.id === c.room))) this._roomId = c.room;
    }
    const s = this.stage();
    // full screen, the screen below the dashboard header, or a fixed height
    const size = this._fullscreen ? "100vh" : c?.fill ? "calc(100vh - var(--header-height, 56px) - 16px)" : `${c?.height ?? 420}px`;
    const accent = /^#[0-9a-f]{6}$/i.test(c?.accent ?? "") ? c!.accent : null;
    const touch = () => this.kiosk.touched();
    return html`<ha-card class=${this._night ? "nf-night" : ""} style=${accent ? `--nf-accent:${accent}` : ""} @pointerdown=${touch} @keydown=${touch} @wheel=${touch}>
      <div class="nf-card-body" style="height:${size}">
        ${b && b.floors.some((f) => f.rooms.length)
          ? this.renderStage(s)
          : html`<p class="nf-card-msg">${this.data.error ?? (b ? translate(this.hass, "no_building") : translate(this.hass, "loading"))}</p>`}
        ${this._roomId && b && c?.room_panel !== false ? this.renderRoomPanel() : nothing}
        ${this.renderRoomButtons(s)}
        ${s.showBar && b ? this.renderBar(s) : nothing}
        ${this.renderCorners()}
      </div>
    </ha-card>`;
  }

  static styles = [tokens, controls, cardStyles];
}

if (!customElements.get("nextfloor-card")) {
  customElements.define("nextfloor-card", NextFloorCard);
  const registry = window as Window & { customCards?: unknown[] };
  registry.customCards = registry.customCards ?? [];
  registry.customCards.push({ type: "nextfloor-card", name: translate(undefined, "card_name"), description: translate(undefined, "card_description"), preview: false });
}
