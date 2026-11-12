// The sidebar page of Home Assistant: the 3D view, the editor, and the extensions page.

import { html, LitElement, nothing, type PropertyValues, type TemplateResult } from "lit";
import { sunPosition, todayAt } from "./sun-position.ts";
import { loadCardEditor } from "./load-card-editor.ts";
import { BuildingController } from "./building-controller.ts";
import type { PluginRef } from "./plugins/api.ts";
import type { MarkerMode } from "./components/view3d.ts";
import "./components/room-panel.ts";
import "./components/view3d.ts";
import { confirmEntities, outsideEntities } from "./devices.ts";
import type { HeatMode } from "./heatmap.ts";
import { awaitingLanguage, translate, type I18nKey } from "./i18n.ts";
import { loadEditor } from "./load-editor.ts";
import type { Building, Floor, LightMood } from "./model.ts";
import { changeFurniture, changePlacement, dragDevice, dragFurniture, turned, withoutFurniture, withoutPlacement } from "./panel/edits.ts";
import { furnishBar, type FurnishHost } from "./panel/furnish-bar.ts";
import { NEXTFLOOR_MARK } from "./panel/mark.ts";
import { browserStorage, PrefStore, type DevicePrefs } from "./panel/prefs.ts";
import { panelStyles } from "./panel/styles.ts";
import { colorSchemeOf, controls, readableStyles, tokens } from "./styles.ts";
import { LOOKS, lookNow, type Look } from "./themes.ts";
import type { HomeAssistant } from "./types.ts";
import { allOffPlan, floorSwitchables, type ServiceCall } from "./live/all-off.ts";
import type { FloorStack, Quality, WallMode } from "./viewer/viewer3d.ts";

type Mode = "view" | "editor" | "extensions";
type Key = I18nKey;

export class NextFloorPanel extends LitElement {
  static properties = {
    hass: { attribute: false },
    narrow: { type: Boolean },
    route: { attribute: false },
    panel: { attribute: false },
    _mode: { state: true },
    _editorReady: { state: true },
    _floorId: { state: true },
    _roomId: { state: true },
    _wallMode: { state: true },
    _prefs: { state: true },
    _furnish: { state: true },
    _selFurniture: { state: true },
    _selDevice: { state: true },
    _optsOpen: { state: true },
    _switchesOpen: { state: true },
    _timeOfDay: { state: true },
    _outside: { state: true },
    _timeDrag: { state: true },
    _floorUndo: { state: true },
  };

  declare hass: HomeAssistant;
  declare narrow: boolean;
  declare route: unknown;
  declare panel: unknown;
  private declare _mode: Mode;
  /** The editor bundle has been loaded (it is fetched when the editor or the extensions page opens first). */
  private declare _editorReady: boolean;
  private declare _floorId: string | null;
  private declare _roomId: string | null;
  private declare _wallMode: WallMode;
  /** The view settings that are remembered on this device. */
  private declare _prefs: DevicePrefs;
  private declare _furnish: boolean;
  private declare _selFurniture: string | null;
  private declare _selDevice: string | null;
  /** Phones fold the view options behind a gear button. */
  private declare _optsOpen: boolean;
  /** The menu of view switches above the stage is open. */
  private declare _switchesOpen: boolean;
  /** The time-of-day slider: hours shown instead of now (null: the slider is closed and the view shows the real sun). */
  private declare _timeOfDay: number | null;
  /** The Outside panel is open (the house view with the garden's and the roof's devices). */
  private declare _outside: boolean;
  private outsideMemo: { building: Building; entities: unknown; ids: string[] } | null = null;
  /** The hour under the finger while the slider is dragged: the view follows only when it is let go (old tablets). */
  private declare _timeDrag: number | null;
  /** After "everything off" on a floor: the calls that bring it back, offered for a few seconds. */
  private declare _floorUndo: ServiceCall[] | null;
  private floorUndoTimer: ReturnType<typeof setTimeout> | undefined;

  private readonly data = new BuildingController(this);
  private readonly store = new PrefStore(browserStorage());

  constructor() {
    super();
    this.narrow = false;
    this._mode = "view";
    this._editorReady = !!customElements.get("nf-editor");
    this._floorId = null;
    this._roomId = null;
    this._wallMode = "auto";
    this._prefs = this.store.load(location.search);
    this._furnish = false;
    this._selFurniture = null;
    this._selDevice = null;
    this._optsOpen = false;
    this._switchesOpen = false;
    this._timeOfDay = null;
    this._outside = false;
    this._timeDrag = null;
    this._floorUndo = null;
  }

  /** Shows or hides the time-of-day switch; hiding it goes back to the real sun. */
  private toggleTimeSlider(on: boolean): void {
    this.setPref("timeSlider", on);
    if (!on) [this._timeOfDay, this._timeDrag] = [null, null];
  }

  /** The sun state the look follows: the real one, or the one of the hour on the time-of-day slider. */
  private sunState(): string | undefined {
    const config = this.hass?.config;
    if (this._timeOfDay === null || config?.latitude === undefined || config.longitude === undefined) return this.hass?.states["sun.sun"]?.state;
    return sunPosition(todayAt(this._timeOfDay, config.time_zone), config.latitude, config.longitude).elevation > 0 ? "above_horizon" : "below_horizon";
  }

  /** The time-of-day chip, and while it is on the slider over the hours of today with a button back to now. */
  private renderTimeOfDay() {
    const t = this.t;
    if (this.hass?.config?.latitude === undefined) return nothing;
    const hours = this._timeDrag ?? this._timeOfDay;
    const label = (h: number) => `${String(Math.floor(h)).padStart(2, "0")}:${String(Math.round((h % 1) * 60)).padStart(2, "0")}`;
    const now = () => {
      const d = new Date();
      return Math.round((d.getHours() + d.getMinutes() / 60) * 4) / 4;
    };
    return html`<button class="nf-chip" aria-pressed=${hours !== null} title=${t("time_of_day_hint")} @click=${() => ((this._timeDrag = null), (this._timeOfDay = hours === null ? now() : null))}>☀ ${hours === null ? t("time_of_day") : label(hours)}</button>
      ${hours !== null
        ? html`<label class="nf-chip nf-time-slider"
            ><input type="range" min="0" max="23.75" step="0.25" .value=${String(hours)} aria-label=${t("time_of_day")} @input=${(e: Event) => (this._timeDrag = Number((e.target as HTMLInputElement).value))}
            @change=${(e: Event) => ((this._timeDrag = null), (this._timeOfDay = Number((e.target as HTMLInputElement).value)))}
          /></label>`
        : nothing}`;
  }

  private readonly t = (key: Key, vars?: Record<string, string | number>): string => translate(this.hass, key, vars);

  /** Changes one remembered setting and keeps it on this device. */
  private setPref<K extends keyof DevicePrefs>(key: K, value: DevicePrefs[K]): void {
    this._prefs = { ...this._prefs, [key]: value };
    this.store.save(key, value);
  }

  protected willUpdate(changed: PropertyValues): void {
    this.toggleAttribute("readable", !!this._prefs?.readable);
    if (changed.has("hass") && this.hass) {
      this.style.colorScheme = colorSchemeOf(this.hass);
      this.data.setHass(this.hass);
    }
    // a floor that no longer exists (the plan was edited elsewhere) closes
    const building = this.data.building;
    if (building && this._floorId && !building.floors.some((f) => f.id === this._floorId)) {
      this._floorId = null;
      this._roomId = null;
    }
  }

  private get isAdmin(): boolean {
    return this.hass?.user?.is_admin ?? false;
  }

  private setMode(mode: Mode): void {
    if (mode === this._mode) return;
    if (mode === "view") void this.data.flush();
    this._mode = mode;
  }

  private openFloor(floorId: string | null): void {
    this._floorId = floorId;
    this._roomId = null;
    this._outside = false;
  }

  /** The devices of Outside, worked out again only when the plan or the registry changes. */
  private outsideIds(building: Building): string[] {
    const m = this.outsideMemo;
    if (m && m.building === building && m.entities === this.hass.entities) return m.ids;
    const ids = outsideEntities(this.hass, building.floors, building.settings.outside_hidden);
    this.outsideMemo = { building, entities: this.hass.entities, ids };
    return ids;
  }

  /** Opens Outside over the house view (or closes it again). */
  private openOutside(): void {
    const open = !this._outside;
    this.openFloor(null);
    this._outside = open;
  }

  private onRoomTap(e: CustomEvent<{ floorId: string; roomId: string | null }>): void {
    const { floorId, roomId } = e.detail;
    // an outdoor area's pin opens Outside
    if (roomId === "nf-outside") return this.openOutside();
    // in the house view, or on another floor, a tap opens the whole floor first and the rooms come next
    if ((this.data.building?.floors.length ?? 0) > 1 && floorId && this._floorId !== floorId) return this.openFloor(floorId);
    if (roomId) {
      this._roomId = roomId === this._roomId ? null : roomId;
      this._outside = false;
    }
  }

  // furnishing in 3D: every change builds a changed copy of the plan and saves it

  private readonly furnishHost: FurnishHost = {
    hass: undefined as unknown as HomeAssistant,
    building: undefined as unknown as Building,
    t: this.t,
    editFurniture: (id, change) => this.applyEdit((b) => changeFurniture(b, id, change)),
    editDevice: (entityId, change) => this.applyEdit((b) => changePlacement(b, entityId, change)),
    turnFurniture: (id, delta) => this.applyEdit((b) => changeFurniture(b, id, (f) => (f.rotation = turned(f.rotation, delta)))),
    turnDevice: (entityId, delta) => this.applyEdit((b) => changePlacement(b, entityId, (p) => (p.rotation = turned(p.rotation ?? 0, delta)))),
    removeFurniture: (id) => {
      this.applyEdit((b) => withoutFurniture(b, id));
      this._selFurniture = null;
    },
    removeDevice: (entityId) => {
      this.applyEdit((b) => withoutPlacement(b, entityId));
      this._selDevice = null;
    },
    finish: () => {
      this._furnish = false;
      this._selFurniture = null;
      this._selDevice = null;
    },
  };

  /** The light designer's moods of a room, saved with the plan. */
  private saveMoods(roomId: string, moods: LightMood[]): void {
    this.applyEdit((b) => ({ ...b, floors: b.floors.map((f) => ({ ...f, rooms: f.rooms.map((r) => (r.id === roomId ? { ...r, moods: moods.length ? moods : undefined } : r)) })) }));
  }

  private applyEdit(edit: (building: Building) => Building): void {
    const building = this.data.building;
    if (building) this.data.edit(edit(building));
  }

  private view3d() {
    return this.renderRoot.querySelector("nf-view3d") as (HTMLElement & { resetView(): void; lookThrough(entityId: string): void }) | null;
  }

  /** Escape and the back button: close the room, then the floor, and finally reset the camera. */
  private back(): void {
    if (this._outside) this._outside = false;
    else if (this._roomId) this._roomId = null;
    else if (this._floorId && (this.data.building?.floors.length ?? 0) > 1) this._floorId = null;
    else this.view3d()?.resetView();
  }

  private readonly onKey = (e: KeyboardEvent) => {
    if (e.key !== "Escape" || this._mode !== "view") return;
    if (this._prefs.clean) this.setPref("clean", false);
    else this.back();
  };

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("keydown", this.onKey);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("keydown", this.onKey);
  }

  protected render() {
    // a language beyond German and English: its texts are fetched first, and then everything renders
    if (this.hass && awaitingLanguage(this.hass, this)) return nothing;
    const building = this.data.building;
    const cleanView = this._prefs.clean && this._mode === "view";
    let body: TemplateResult | typeof nothing = nothing;
    if (building) {
      if (this._mode === "editor" && this.isAdmin) body = this.renderEditor(building);
      else if (this._mode === "extensions" && this.isAdmin) body = this.renderExtensions();
      else body = this.renderView(building);
    }
    return html`<div class="nf-app ${cleanView ? "nf-clean" : ""}" style=${this._prefs.accent ? `--nf-accent:${this._prefs.accent}` : ""}>
      ${cleanView ? nothing : html`${this.renderHeader(building)}${this.renderNotices()}`}
      ${this.data.error && !building ? html`<p class="nf-message">${this.t("load_error")}: ${this.data.error}</p>` : nothing}
      ${!building && !this.data.error ? html`<p class="nf-message">${this.t("loading")}</p>` : nothing}
      ${body}
    </div>`;
  }

  /** A row of buttons of which exactly one is pressed. */
  private choiceRow<T extends string>(label: Key | null, options: readonly T[], current: T, text: (option: T) => string, pick: (option: T) => void, extra: TemplateResult | typeof nothing = nothing) {
    return html`<div class="nf-seg nf-quality" role=${label ? "group" : nothing} aria-label=${label ? this.t(label) : nothing}>
      ${options.map((o) => html`<button aria-pressed=${current === o} title=${label === "markers" ? this.t("markers") : nothing} @click=${() => pick(o)}>${text(o)}</button>`)}${extra}
    </div>`;
  }

  /** The accent colour well beside the looks, with a reset arrow once a colour is chosen. */
  private accentPicker() {
    const accent = this._prefs.accent;
    return html`<label class="nf-accent-pick" title=${this.t("accent_hint")}>
      <input type="color" .value=${accent ?? "#37e0ff"} aria-label=${this.t("accent")} @input=${(e: Event) => this.setPref("accent", (e.target as HTMLInputElement).value)} />
      ${accent ? html`<button class="nf-accent-reset" title=${this.t("accent_reset")} aria-label=${this.t("accent_reset")} @click=${() => this.setPref("accent", null)}>↺</button>` : nothing}
    </label>`;
  }

  /** Quality, look, markers and the performance display; phones fold them behind the gear. */
  private renderViewOptions() {
    const p = this._prefs;
    return html`<button class="nf-opts-btn" aria-expanded=${this._optsOpen} title=${this.t("view_options")} aria-label=${this.t("view_options")} @click=${() => (this._optsOpen = !this._optsOpen)}>⚙</button>
      <div class="nf-view-opts ${this._optsOpen ? "nf-opts-open" : ""}">
        ${this.choiceRow("quality", ["auto", "low", "high"] as Quality[], p.quality, (q) => this.t(`quality_${q}`), (q) => this.setPref("quality", q))}
        ${this.choiceRow("theme", LOOKS as readonly Look[], p.theme, (th) => this.t(`theme_${th}`), (th) => this.setPref("theme", th), this.accentPicker())}
        ${this.choiceRow("markers", ["none", "important", "all"] as MarkerMode[], p.markers, (m) => this.t(`markers_${m}`), (m) => this.setPref("markers", m))}
        <label class="nf-seg nf-clock-pick" title=${this.t("clock")}
          >🕒
          <select aria-label=${this.t("clock")} @change=${(e: Event) => this.setPref("clock", (e.target as HTMLSelectElement).value as typeof p.clock)}>
            ${(["none", "top_left", "top_right", "bottom_left", "bottom_right"] as const).map((c) => html`<option value=${c} ?selected=${p.clock === c}>${this.t(`clock_${c}`)}</option>`)}
          </select>
        </label>
        <label class="nf-seg nf-glass-pick" title=${this.t("view_zoom_hint")}
          >🔍
          <input type="range" min="60" max="250" step="10" .value=${String(p.zoom)} aria-label=${this.t("view_zoom")} @change=${(e: Event) => this.setPref("zoom", Number((e.target as HTMLInputElement).value))} />
        </label>
        <label class="nf-seg nf-glass-pick" title=${this.t("glass_walls_hint")}
          >${this.t("glass_walls")}
          <input type="range" min="0" max="100" step="5" .value=${String(p.glassWalls)} aria-label=${this.t("glass_walls")} @input=${(e: Event) => this.setPref("glassWalls", Number((e.target as HTMLInputElement).value))} />
        </label>
        <details class="nf-seg nf-screen-pick">
          <summary title=${this.t(p.announceMuted ? "announce_muted" : "announce_on")} aria-label=${this.t(p.announceMuted ? "announce_muted" : "announce_on")}>${p.announceMuted ? "🔇" : "📢"}</summary>
          <div class="nf-screen-menu">
            <label class="nf-check"><input type="checkbox" .checked=${!p.announceMuted} @change=${(e: Event) => this.setPref("announceMuted", !(e.target as HTMLInputElement).checked)} /> ${this.t("announce_on")}</label>
            <label class="nf-field"
              >${this.t("screen_name")}
              <input type="text" maxlength="60" .value=${p.screenName} @change=${(e: Event) => this.setPref("screenName", (e.target as HTMLInputElement).value.trim())} />
            </label>
            <p class="nf-screen-hint">${this.t("screen_name_hint")}</p>
          </div>
        </details>
        <div class="nf-seg nf-quality">
          <button aria-pressed=${p.timeSlider} title=${this.t("time_of_day_hint")} @click=${() => this.toggleTimeSlider(!p.timeSlider)}>☀ ${this.t("time_of_day")}</button>
          <button aria-pressed=${p.menuOpen} title=${this.t("menu_open_hint")} @click=${() => this.setPref("menuOpen", !p.menuOpen)}>★ ${this.t("menu_open")}</button>
          <button aria-pressed=${p.keepCamera} title=${this.t("keep_camera_hint")} @click=${() => this.setPref("keepCamera", !p.keepCamera)}>🎥 ${this.t("keep_camera")}</button>
          <button title=${this.t("stl_hint")} @click=${() => (this.renderRoot.querySelector("nf-view3d") as { downloadStl?: () => void } | null)?.downloadStl?.()}>⬇ ${this.t("stl")}</button>
          <button aria-pressed=${p.rightBack} title=${this.t("right_back_hint")} @click=${() => this.setPref("rightBack", !p.rightBack)}>${this.t("right_back")}</button>
          <button aria-pressed=${p.plain} title=${this.t("plain_hint")} @click=${() => this.setPref("plain", !p.plain)}>▭ ${this.t("plain")}</button>
          <button aria-pressed=${p.readable} title=${this.t("readable_hint")} @click=${() => this.setPref("readable", !p.readable)}>Aa ${this.t("readable")}</button>
          <button aria-pressed=${p.stats} title=${this.t("fps_title")} @click=${() => this.setPref("stats", !p.stats)}>${this.t("fps")}</button>
        </div>
      </div>`;
  }

  private renderHeader(building: Building | null) {
    const saveState = this.data.saveState;
    const tab = (mode: Mode, label: string, extra = "") =>
      html`<button role="tab" class=${extra} aria-pressed=${this._mode === mode} @click=${() => this.setMode(mode)}>${label}</button>`;
    const saveLabel: Key = saveState === "saving" ? "saving" : saveState === "saved" ? "saved" : "save_error";
    return html`<header class="nf-header">
      <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
      <h1>${NEXTFLOOR_MARK}NextFloor</h1>
      ${this.isAdmin ? html`<div class="nf-seg" role="tablist">${tab("view", this.t("view"))}${tab("editor", this.t("editor"))}${tab("extensions", `✦ ${this.t("ext_tab")}`, "nf-tab-ext")}</div>` : nothing}
      <span class="nf-grow"></span>
      ${this._mode === "view" && building?.floors.some((f) => f.rooms.length) ? this.renderViewOptions() : nothing}
      ${this._mode === "editor" && saveState !== "idle" ? html`<span class="nf-save nf-save-${saveState}">${this.t(saveLabel)}</span>` : nothing}
      <span class="nf-version" title=${this.t("version_hint", { backend: this.data.backendVersion ?? "?" })}>v${this.data.frontendVersion}</span>
    </header>`;
  }

  /** Restart hint, save errors and unsaved edits left from an earlier session. */
  private renderNotices() {
    const d = this.data;
    const notices: TemplateResult[] = [];
    if (d.needsRestart) {
      // an old bundle in the browser or the companion app is cured by a reload, not by a restart
      notices.push(
        d.versionGap === "frontend"
          ? html`<div class="nf-notice nf-notice-warn">
              ${this.t("needs_reload", { frontend: d.frontendVersion, backend: d.backendVersion ?? "?" })}
              <button class="nf-btn" @click=${() => location.reload()}>${this.t("reload_page")}</button>
            </div>`
          : html`<div class="nf-notice nf-notice-warn">${d.backendVersion ? this.t("needs_restart", { version: d.backendVersion, frontend: d.frontendVersion }) : this.t("needs_restart_old")}</div>`,
      );
    }
    if (d.saveState === "error" && d.saveError) notices.push(html`<div class="nf-notice nf-notice-error">${this.t("save_failed_detail", { error: d.saveError })}</div>`);
    if (d.draft && this.isAdmin) {
      const time = new Date(d.draft.savedAt).toLocaleString(this.hass?.language);
      notices.push(html`<div class="nf-notice">
        <span>${this.t("draft_found", { time })}</span>
        <button class="nf-btn nf-primary" @click=${() => d.restoreDraft()}>${this.t("draft_restore")}</button>
        <button class="nf-btn" @click=${() => d.discardDraft()}>${this.t("draft_discard")}</button>
      </div>`);
    }
    return notices.length > 0 ? html`<div class="nf-notices">${notices}</div>` : nothing;
  }

  /** The editor and the extensions page come in one bundle that is loaded when one of them is first opened. */
  private whenEditorLoaded(show: () => TemplateResult): TemplateResult {
    if (this._editorReady) return show();
    loadEditor().then(
      () => (this._editorReady = true),
      (err: unknown) => (this.data.error = String(err)),
    );
    return html`<div class="nf-empty"><p>${this.t("loading")}</p></div>`;
  }

  private renderExtensions() {
    return this.whenEditorLoaded(() => html`<nf-extensions class="nf-body" .hass=${this.hass} .packs=${this.data.packs} .plugins=${this.data.building?.settings.plugins ?? []}
      @packs-changed=${() => void this.data.reloadPacks()}
      @plugins-changed=${(e: CustomEvent<PluginRef[]>) => this.applyEdit((b) => ({ ...b, settings: { ...b.settings, plugins: e.detail } }))}></nf-extensions>`);
  }

  private renderEditor(building: Building) {
    return this.whenEditorLoaded(
      () => html`<nf-editor
        class="nf-body"
        .hass=${this.hass}
        .building=${building}
        .narrow=${this.narrow}
        .packs=${this.data.packs}
        .loadCardEditor=${loadCardEditor}
        @packs-changed=${() => void this.data.reloadPacks()}
        @building-changed=${(e: CustomEvent<{ building: Building }>) => this.data.edit(e.detail.building)}
      ></nf-editor>`,
    );
  }

  /** A single-row bar scrolls sideways with the mouse wheel, as a desktop has no swipe. */
  private readonly onNavWheel = (e: WheelEvent) => {
    if (this._prefs.navWrap || !e.deltaY || e.deltaX) return;
    const nav = e.currentTarget as HTMLElement;
    if (nav.scrollWidth <= nav.clientWidth) return;
    nav.scrollLeft += e.deltaY;
    e.preventDefault();
  };

  /** Everything off on the open floor (the house when it has one floor), then its undo for ten seconds. */
  private allOffChip(building: Building) {
    const floor = this._floorId ? building.floors.find((f) => f.id === this._floorId) : building.floors.length === 1 ? building.floors[0] : undefined;
    if (!floor || !this.hass) return nothing;
    if (this._floorUndo) {
      const undo = this._floorUndo;
      return html`<button class="nf-chip" aria-pressed="true" @click=${() => {
        for (const c of undo) void this.hass.callService(c.domain, c.service, c.data);
        this._floorUndo = null;
        clearTimeout(this.floorUndoTimer);
      }}>↶ ${this.t("all_off_undo")}</button>`;
    }
    const plan = allOffPlan(floorSwitchables(floor).map((id) => this.hass.states[id]));
    if (plan.count < 2) return nothing;
    return html`<button class="nf-chip" title=${this.t("all_off_floor", { floor: floor.name, n: plan.count })} @click=${() => {
      for (const c of plan.off) void this.hass.callService(c.domain, c.service, c.data);
      this._floorUndo = plan.undo;
      clearTimeout(this.floorUndoTimer);
      this.floorUndoTimer = setTimeout(() => (this._floorUndo = null), 10_000);
    }}>⏻ ${plan.count}</button>`;
  }

  /** The bar of floors and rooms above the stage. */
  private renderNav(building: Building) {
    const shown: Floor[] = building.floors.filter((f) => !this._floorId || f.id === this._floorId);
    const several = building.floors.length > 1;
    const wrap = this._prefs.navWrap;
    // Outside: its own chip next to the floors as soon as a device stands outside the rooms or belongs to it
    const outside = this.outsideIds(building).length
      ? html`<button class="nf-chip" aria-pressed=${this._outside} title=${this.t("outside_area_hint")} @click=${() => this.openOutside()}>🌳 ${this.t("outside_area")}</button>`
      : nothing;
    const floorChips = several
      ? html`<button class="nf-chip" aria-pressed=${this._floorId === null} @click=${() => this.openFloor(null)}>${this.t("all_floors")}</button>
          ${[...building.floors].reverse().map((f) => html`<button class="nf-chip" aria-pressed=${f.id === this._floorId} @click=${() => this.openFloor(f.id)}>${f.name}</button>`)}
          ${outside} ${this.allOffChip(building)}
          <span class="nf-sep"></span>`
      : html`${outside} ${this.allOffChip(building)}`;
    const roomChips = shown.flatMap((floor) => [
      // in the house view a small floor label comes before the rooms of each floor
      shown.length > 1 && floor.rooms.length ? html`<span class="nf-nav-floor">${floor.name}</span>` : nothing,
      ...floor.rooms.map(
        (room) => html`<button
          class="nf-chip nf-room-chip"
          aria-pressed=${room.id === this._roomId}
          @click=${() => {
            if (several) this._floorId = floor.id;
            this._roomId = room.id === this._roomId ? null : room.id;
            this._outside = false;
          }}
        >
          ${room.name}
        </button>`,
      ),
    ]);
    const wrapLabel = this.t(wrap ? "nav_row" : "nav_wrap");
    return html`<nav class="nf-nav ${wrap ? "nf-nav-wrap" : ""}" @wheel=${this.onNavWheel}>
      ${floorChips}${roomChips}
      <button class="nf-chip nf-nav-toggle" title=${wrapLabel} aria-label=${wrapLabel} aria-pressed=${wrap} @click=${() => this.setPref("navWrap", !wrap)}>${wrap ? "↔" : "≡"}</button>
    </nav>`;
  }

  /** A chip that toggles one remembered setting. */
  private toggleChip(key: "roomNames" | "weather", label: Key, hint?: Key) {
    return html`<button class="nf-chip" aria-pressed=${this._prefs[key]} title=${hint ? this.t(hint) : nothing} @click=${() => this.setPref(key, !this._prefs[key])}>${this.t(label)}</button>`;
  }

  /** The switches at the bottom of the stage: walls, floors, roof, floor stacking, heat map, and the chips. */
  private renderOverlay(building: Building) {
    const p = this._prefs;
    const t = this.t;
    const pair = (a: [boolean, () => void, string], b: [boolean, () => void, string]) =>
      html`<div class="nf-seg">${[a, b].map(([on, act, text]) => html`<button aria-pressed=${on} @click=${act}>${text}</button>`)}</div>`;
    const heats: HeatMode[] = ["none", "temperature", "humidity", "co2", "mould", "comfort", "power", "sun", "values", "wifi"];
    const stacks: FloorStack[] = ["dim", "stacked", "single"];
    const several = building.floors.length > 1;
    const back = this._roomId || (this._floorId && several) ? html`<button class="nf-chip" @click=${() => this.back()}>${t("back")}</button>` : nothing;
    // one button for all switches, opening a menu upwards: the stage keeps the house in view, on a phone above all
    const toggle = html`<button class="nf-chip" aria-haspopup="true" aria-expanded=${this._switchesOpen} @click=${() => (this._switchesOpen = !this._switchesOpen)}>☰ ${t("bars_unfold")} <span class="nf-caret">${this._switchesOpen ? "▾" : "▴"}</span></button>`;
    if (!this._switchesOpen) return html`<div class="nf-overlay">${toggle}${back}</div>`;
    return html`<div class="nf-overlay">
      <div class="nf-switches-veil" @click=${() => (this._switchesOpen = false)}></div>
      <div class="nf-switches" role="group" aria-label=${t("bars_unfold")} @keydown=${(e: KeyboardEvent) => e.key === "Escape" && (this._switchesOpen = false)}>
      <div class="nf-seg">
        ${(["auto", "cut", "slope"] as const).map(
          (m) => html`<button aria-pressed=${this._wallMode === m} title=${m === "slope" ? t("walls_slope_hint") : nothing} @click=${() => (this._wallMode = m)}>${t(`walls_${m}`)}</button>`,
        )}
      </div>
      <div class="nf-seg"><button aria-pressed=${p.solidWalls} title=${t("walls_solid_hint")} @click=${() => this.setPref("solidWalls", !p.solidWalls)}>${t("walls_solid")}</button></div>
      ${several && !this._floorId ? pair([p.explode, () => this.setPref("explode", true), t("floors_apart")], [!p.explode, () => this.setPref("explode", false), t("floors_stacked")]) : nothing}
      ${!this._floorId && building.settings.roof.type !== "none"
        ? html`<div class="nf-seg"><button aria-pressed=${p.keepRoof} title=${t("roof_keep_hint")} @click=${() => this.setPref("keepRoof", !p.keepRoof)}>${t("roof_keep")}</button></div>`
        : nothing}
      ${several && this._floorId
        ? html`<div class="nf-seg" role="group" aria-label=${t("card_floor_stack")}>
            ${stacks.map((m) => html`<button aria-pressed=${p.floorStack === m} @click=${() => this.setPref("floorStack", m)}>${t(`floor_stack_short_${m}` as Key)}</button>`)}
          </div>`
        : nothing}
      <div class="nf-seg" role="group" aria-label=${t("heatmap")}>
        ${heats.map((m) => html`<button aria-pressed=${p.heat === m} @click=${() => this.setPref("heat", m)}>${t(m === "none" ? "heat_off" : (`heat_short_${m}` as Key))}</button>`)}
      </div>
      ${this.toggleChip("roomNames", "room_names_short")}
     
      ${this.toggleChip("weather", "weather_short", "weather_hint")}
      ${p.timeSlider ? this.renderTimeOfDay() : nothing}
      </div>
      ${toggle}${back}
    </div>`;
  }

  private renderView(building: Building) {
    if (!building.floors.some((f) => f.rooms.length)) {
      return html`<div class="nf-empty">
        <p>${this.t(this.isAdmin ? (building.floors.length ? "no_rooms_admin" : "no_building_admin") : "no_building")}</p>
        ${this.isAdmin ? html`<button class="nf-btn nf-primary" @click=${() => this.setMode("editor")}>${this.t("open_editor")}</button>` : nothing}
      </div>`;
    }
    const p = this._prefs;
    const room = building.floors.flatMap((f) => f.rooms).find((r) => r.id === this._roomId) ?? null;
    this.furnishHost.hass = this.hass;
    this.furnishHost.building = building;
    return html`
      ${p.clean ? nothing : this.renderNav(building)}
      <div class="nf-stage-wrap ${this._roomId ? "nf-room-open" : ""}">
        <nf-view3d
          class="nf-body"
          .hass=${this.hass}
          .building=${building}
          .packs=${this.data.packs}
          .floorStack=${p.floorStack}
          .roomLabels=${p.roomNames}
          .clean=${p.clean}
          .cleanButton=${true}
          @clean-toggle=${() => this.setPref("clean", !p.clean)}
          ?weather=${p.weather}
          .panelOpen=${!!this._roomId || this._outside}
          .floorId=${building.floors.length > 1 ? this._floorId : (building.floors[0]?.id ?? null)}
          .roomId=${this._roomId}
          .outsideOpen=${this._outside}
          .wallMode=${this._wallMode}
          .solidWalls=${p.solidWalls}
          .explode=${p.explode}
          .keepRoof=${p.keepRoof}
          .markerMode=${p.markers}
          .heatMode=${p.heat}
          .theme=${lookNow(p.theme, this.sunState())}
          .timeOfDay=${this._timeOfDay}
          .clock=${p.clock === "none" ? null : p.clock}
          .announcements=${!p.announceMuted}
          .glassWalls=${p.glassWalls}
          .screenName=${p.screenName || null}
          .lockButton=${true}
          .walkButton=${true}
          .navControls=${true}
          .travelButton=${true}
          .accent=${p.accent}
          .centralOpen=${p.menuOpen}
          .keepCamera=${p.keepCamera}
          .plain=${p.plain}
          .rightBack=${p.rightBack}
          .readable=${p.readable}
          .zoom=${p.zoom / 100}
          ?furnish=${this._furnish}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${(e: CustomEvent<{ id: string | null }>) => (this._selFurniture = e.detail.id)}
          @furniture-move=${(e: CustomEvent<{ id: string; x: number; z: number }>) => this.applyEdit((b) => dragFurniture(b, e.detail.id, e.detail.x, e.detail.z))}
          @device-select=${(e: CustomEvent<{ id: string | null }>) => (this._selDevice = e.detail.id)}
          @device-move=${(e: CustomEvent<{ id: string; x: number; z: number }>) => this.applyEdit((b) => dragDevice(b, e.detail.id, e.detail.x, e.detail.z))}
          .quality=${p.quality}
          ?showStats=${p.stats}
          @room-tap=${this.onRoomTap}
            @floor-tap=${(e: CustomEvent<{ floorId: string | null }>) => this.openFloor(e.detail.floorId)}
          @back=${() => this.back()}
        ></nf-view3d>
        ${room
          ? html`<nf-room-panel
            .building=${this.data.building ?? null}
              class="nf-room-panel" style="--nf-nav-top: 280px"
              .hass=${this.hass}
              .room=${room}
              .floor=${building.floors.find((f) => f.rooms.some((r) => r.id === this._roomId)) ?? null}
              .confirmEntities=${confirmEntities(this.hass, building.floors)}
              .phrases=${building.settings.announce_phrases ?? null}
              .rooms=${building.floors.flatMap((f) => f.rooms)}
              @mood-change=${(e: CustomEvent<{ roomId: string; moods: LightMood[] }>) => this.saveMoods(e.detail.roomId, e.detail.moods)}
              @close=${() => (this._roomId = null)}
            ></nf-room-panel>`
          : this._outside
            ? html`<nf-room-panel
            .building=${this.data.building ?? null}
                class="nf-room-panel" style="--nf-nav-top: 280px"
                .hass=${this.hass}
                .room=${null}
                .outside=${this.outsideIds(building)}
                .confirmEntities=${confirmEntities(this.hass, building.floors)}
                .phrases=${building.settings.announce_phrases ?? null}
                @close=${() => (this._outside = false)}
              ></nf-room-panel>`
            : nothing}
        ${p.clean ? nothing : this.renderOverlay(building)}
        ${this._furnish ? furnishBar(this.furnishHost, this._selFurniture, this._selDevice) : nothing}
      </div>
    `;
  }

  static styles = [tokens, controls, panelStyles, readableStyles];
}

if (!customElements.get("nextfloor-panel")) customElements.define("nextfloor-panel", NextFloorPanel);
