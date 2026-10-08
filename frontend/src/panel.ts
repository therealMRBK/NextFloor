// Sidebar page: 3D view and editor.

import { css, html, LitElement, nothing, svg, type PropertyValues } from "lit";
import { BuildingController } from "./building-controller.ts";
import { loadEditor } from "./load-editor.ts";
import "./components/room-panel.ts";
import "./components/view3d.ts";
import { languageReady, loadLanguage, translate, type I18nKey } from "./i18n.ts";
import type { Building } from "./model.ts";
import { controls, tokens, colorSchemeOf } from "./styles.ts";
import type { HomeAssistant } from "./types.ts";
import type { MarkerMode } from "./components/view3d.ts";
import type { HeatMode } from "./heatmap.ts";
import { THEMES, type Theme } from "./themes.ts";
import { keepInRoom, snapToWall } from "./geometry/snap.ts";
import { furnitureName } from "./furniture-names.ts";
import { confirmEntities, defaultHeight, entityName, kindOf } from "./devices.ts";
import { canLift, type LampMount } from "./model.ts";
import { mountBase } from "./packs.ts";
import type { FloorStack, Quality, WallMode } from "./viewer/viewer3d.ts";

type Mode = "view" | "editor" | "extensions";

/** View preferences belong to the device (a wall tablet wants other settings than a desktop). */
const prefs = {
  get(key: string): string | null {
    try {
      return localStorage.getItem(`nextfloor.${key}`);
    } catch {
      return null;
    }
  },
  set(key: string, value: string): void {
    try {
      localStorage.setItem(`nextfloor.${key}`, value);
    } catch {
      // storage unavailable (private mode): the choice just is not remembered
    }
  },
};

/** The NextFloor mark: three floors and the next one dashed above, with the light on. */
const MARK = svg`<svg class="nf-mark" viewBox="60 40 392 420" aria-hidden="true">
  <polygon points="106,150 256,66 406,150 256,234" fill="none" stroke="currentColor" stroke-opacity=".55" stroke-width="12" stroke-dasharray="6 22" stroke-linecap="round"/>
  <polygon points="106,382 256,466 256,488 106,404" fill="#34507d"/><polygon points="406,382 256,466 256,488 406,404" fill="#2a4068"/><polygon points="106,382 256,298 406,382 256,466" fill="#5f7fb6"/>
  <polygon points="106,310 256,394 256,416 106,332" fill="#4a72b8"/><polygon points="406,310 256,394 256,416 406,332" fill="#3b5c98"/><polygon points="106,310 256,226 406,310 256,394" fill="#8ab6f5"/>
  <polygon points="106,238 256,322 256,344 106,260" fill="#2a74d8"/><polygon points="406,238 256,322 256,344 406,260" fill="#2161b8"/><polygon points="106,238 256,154 406,238 256,322" fill="#4fb6ff"/>
  <circle cx="256" cy="236" r="16" fill="#ffe08a"/>
</svg>`;

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
    _explode: { state: true },
    _keepRoof: { state: true },
    _quality: { state: true },
    _stats: { state: true },
    _markers: { state: true },
    _heat: { state: true },
    _theme: { state: true },
    _furnish: { state: true },
    _selFurniture: { state: true },
    _selDevice: { state: true },
    _floorStack: { state: true },
    _roomNames: { state: true },
    _trail: { state: true },
    _cameraWall: { state: true },
    _clean: { state: true },
    _navWrap: { state: true },
    _optsOpen: { state: true },
    _accent: { state: true },
    _weather: { state: true },
  };

  declare hass: HomeAssistant;
  declare narrow: boolean;
  declare route: unknown;
  declare panel: unknown;
  private declare _mode: Mode;
  /** The editor bundle is loaded (it is fetched the first time the editor opens). */
  private declare _editorReady: boolean;
  private declare _floorId: string | null;
  private declare _roomId: string | null;
  private declare _wallMode: WallMode;
  private declare _explode: boolean;
  private declare _keepRoof: boolean;
  private declare _quality: Quality;
  /** Performance display (per device; also switched on by ?nf_stats in the URL). */
  private declare _stats: boolean;
  private declare _markers: MarkerMode;
  private declare _heat: HeatMode;
  private declare _theme: Theme;
  private declare _furnish: boolean;
  private declare _selFurniture: string | null;
  private declare _selDevice: string | null;
  /** Floors below an opened floor, and whether room names show (both kept per device). */
  private declare _floorStack: FloorStack;
  private declare _roomNames: boolean;
  /** Motion trail of the last half hour in 3D. */
  private declare _trail: boolean;
  private declare _cameraWall: boolean;
  /** Clean view (the eye): only the stage, remembered on this device. */
  private declare _clean: boolean;
  /** The floor and room bar wraps onto several lines instead of scrolling sideways (remembered on this device). */
  private declare _navWrap: boolean;
  /** Phones: the view options (quality, look, markers, FPS) folded behind ⚙ (#131). */
  private declare _optsOpen: boolean;
  /** Accent colour of the user's choice ("#rrggbb"), null for the stock cyan; remembered on this device. */
  private declare _accent: string | null;
  /** Weather outside the house in 3D. */
  private declare _weather: boolean;

  private readonly data = new BuildingController(this);


  constructor() {
    super();
    this.narrow = false;
    this._mode = "view";
    this._editorReady = !!customElements.get("nf-editor");
    this._floorId = null;
    this._roomId = null;
    this._wallMode = "auto";
    this._explode = prefs.get("explode") !== "0";
    this._keepRoof = prefs.get("roof") === "1";
    const quality = prefs.get("quality");
    this._quality = quality === "low" || quality === "high" ? quality : "auto";
    this._stats = prefs.get("stats") === "1" || new URLSearchParams(location.search).has("nf_stats");
    const markers = prefs.get("markers");
    this._markers = markers === "none" || markers === "all" ? markers : "important";
    const heat = prefs.get("heat");
    this._heat = heat === "temperature" || heat === "humidity" || heat === "co2" || heat === "values" ? heat : "none";
    const theme = prefs.get("theme") as Theme | null;
    this._theme = theme && THEMES.includes(theme) ? theme : "neon";
    const accent = prefs.get("accent");
    this._accent = accent && /^#[0-9a-f]{6}$/i.test(accent) ? accent : null;
    this._furnish = false;
    this._selFurniture = null;
    this._selDevice = null;
    const stack = prefs.get("floor_stack");
    this._floorStack = stack === "stacked" || stack === "single" ? stack : "dim";
    this._roomNames = prefs.get("room_names") !== "0";
    this._trail = prefs.get("trail") === "1";
    this._cameraWall = false;
    this._clean = prefs.get("clean") === "1";
    this._navWrap = prefs.get("nav_wrap") === "1";
    this._optsOpen = false;
    this._weather = prefs.get("weather") !== "0";
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  protected willUpdate(changed: PropertyValues): void {
    if (changed.has("hass")) this.style.colorScheme = colorSchemeOf(this.hass);
    if (changed.has("hass") && this.hass) this.data.setHass(this.hass);
    // a language beyond German and English: its texts are fetched first, then everything renders
    if (changed.has("hass") && this.hass && !languageReady(this.hass.language)) void loadLanguage(this.hass.language).then(() => this.requestUpdate());
    const b = this.data.building;
    if (b && this._floorId && !b.floors.some((f) => f.id === this._floorId)) {
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

  private onRoomTap(e: CustomEvent<{ floorId: string; roomId: string | null }>): void {
    const { floorId, roomId } = e.detail;
    // in the house view (or on another floor) a tap first opens the whole floor; rooms come next
    if ((this.data.building?.floors.length ?? 0) > 1 && floorId && this._floorId !== floorId) {
      this._floorId = floorId;
      this._roomId = null;
      return;
    }
    if (!roomId) return;
    this._roomId = roomId === this._roomId ? null : roomId;
  }

  private setKeepRoof(on: boolean): void {
    this._keepRoof = on;
    prefs.set("roof", on ? "1" : "0");
  }

  private setExplode(explode: boolean): void {
    this._explode = explode;
    prefs.set("explode", explode ? "1" : "0");
  }

  private setQuality(quality: Quality): void {
    this._quality = quality;
    prefs.set("quality", quality);
  }

  /** Change one furniture item of the building (furnishing in 3D) and save. */
  private editFurniture(id: string, change: (f: Building["floors"][number]["furniture"][number], floor: Building["floors"][number]) => void): void {
    const b = this.data.building;
    if (!b) return;
    const next = structuredClone(b);
    for (const floor of next.floors) {
      const f = floor.furniture.find((m) => m.id === id);
      if (f) change(f, floor);
    }
    this.data.edit(next);
  }

  /** Change one placed device (furnishing in 3D) and save. */
  private editDevice(entityId: string, change: (p: Building["floors"][number]["placements"][number], floor: Building["floors"][number]) => void): void {
    const b = this.data.building;
    if (!b) return;
    const next = structuredClone(b);
    for (const floor of next.floors) {
      const p = floor.placements.find((x) => x.entity_id === entityId);
      if (p) change(p, floor);
    }
    this.data.edit(next);
  }

  private moveDevice(e: CustomEvent<{ id: string; x: number; z: number }>): void {
    const { id, x, z } = e.detail;
    // a device stays in its room (no dragging through walls)
    this.editDevice(id, (p, floor) => {
      const [nx, nz] = keepInRoom(floor, p.x, p.z, x, z);
      Object.assign(p, { x: nx, z: nz });
    });
  }

  /** Cameras turn in finer steps than lamps (their wedge shows where they look). */
  private turnStep(): number {
    return kindOf(this._selDevice ?? "") === "camera" ? 15 : 45;
  }

  private turnDevice(delta: number): void {
    if (!this._selDevice) return;
    this.editDevice(this._selDevice, (p) => (p.rotation = ((((p.rotation ?? 0) + delta) % 360) + 360) % 360));
  }

  private deleteDevice(): void {
    const id = this._selDevice;
    const b = this.data.building;
    if (!id || !b) return;
    const next = structuredClone(b);
    for (const floor of next.floors) floor.placements = floor.placements.filter((p) => p.entity_id !== id);
    this.data.edit(next);
    this._selDevice = null;
  }

  /** Height and, for lights, the mount of the selected device, editable in the furnish bar. */
  private renderDeviceFields(id: string) {
    const b = this.data.building;
    const floor = b?.floors.find((fl) => fl.placements.some((p) => p.entity_id === id));
    const p = floor?.placements.find((x) => x.entity_id === id);
    if (!floor || !p) return nothing;
    const kind = kindOf(id);
    const light = kind === "light";
    const camera = kind === "camera";
    const dome = p.mount === "ceiling";
    const auto = kind ? defaultHeight(kind, floor.height, light || camera ? (p.mount ?? (camera ? "wall" : "ceiling")) : null) : 1;
    const numField = (label: string, value: number, step: number, min: number, max: number, set: (v: number) => void) =>
      html`<label class="nf-size" title=${label}
        >${label}
        <input
          type="number"
          inputmode="decimal"
          step=${step}
          min=${min}
          max=${max}
          .value=${String(Math.round(value * 100) / 100)}
          @change=${(e: Event) => {
            const v = parseFloat((e.target as HTMLInputElement).value.replace(",", "."));
            if (Number.isFinite(v)) set(Math.min(max, Math.max(min, v)));
          }}
        />
      </label>`;
    return html`${light
        ? html`<select class="nf-size-select" title=${this.t("lamp_mount")} @change=${(e: Event) => this.editDevice(id, (d) => Object.assign(d, { mount: (e.target as HTMLSelectElement).value as LampMount, y: null }))}>
            ${(["ceiling", "floor", "table", "wall"] as const).map((m) => html`<option value=${m} ?selected=${m === (p.mount ?? "ceiling")}>${this.t(`lamp_${m}`)}</option>`)}
          </select>`
        : nothing}
      ${camera
        ? html`<select class="nf-size-select" title=${this.t("camera_mount")} @change=${(e: Event) => this.editDevice(id, (d) => Object.assign(d, { mount: (e.target as HTMLSelectElement).value as LampMount, y: null }))}>
              <option value="wall" ?selected=${!dome}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${dome}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${numField(this.t("camera_fov_short"), p.fov ?? (dome ? 360 : 90), 5, 10, 360, (v) => this.editDevice(id, (d) => (d.fov = v)))}
            ${numField(this.t("camera_reach_short"), p.reach ?? (dome ? 3 : 4.5), 0.5, 0.5, 50, (v) => this.editDevice(id, (d) => (d.reach = v)))}
            ${numField(this.t("camera_tilt_short"), p.tilt ?? (dome ? 65 : 20), 5, 0, 90, (v) => this.editDevice(id, (d) => (d.tilt = v)))}`
        : nothing}
      <label class="nf-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((p.y ?? auto) * 100) / 100)}
          @change=${(e: Event) => {
            const v = parseFloat((e.target as HTMLInputElement).value.replace(",", "."));
            if (Number.isFinite(v) && v >= 0) this.editDevice(id, (d) => (d.y = Math.round(v * 1000) / 1000));
          }}
        />
      </label>
      ${p.y !== null ? html`<button class="nf-chip" @click=${() => this.editDevice(id, (d) => (d.y = null))}>${this.t("height_auto")}</button>` : nothing}`;
  }

  private furnitureName(id: string): string {
    const f = this.data.building?.floors.flatMap((fl) => fl.furniture).find((m) => m.id === id);
    return f ? furnitureName(this.hass, f.type) : "";
  }

  private moveFurniture(e: CustomEvent<{ id: string; x: number; z: number }>): void {
    const { id, x, z } = e.detail;
    const wall = this.data.building?.settings.wall_interior ?? 0.12;
    this.editFurniture(id, (f, floor) => {
      // the item stays in its room (no dragging through walls) …
      const [nx, nz] = keepInRoom(floor, f.x, f.z, x, z);
      Object.assign(f, { x: nx, z: nz });
      // … and near a wall it turns its back to it and sits flush, as in the editor
      const snap = snapToWall(floor, f, wall);
      if (snap) Object.assign(f, snap);
    });
  }

  /** Width, depth and height of the selected item, editable in the furnish bar. */
  private renderSizeFields(id: string) {
    const f = this.data.building?.floors.flatMap((fl) => fl.furniture).find((m) => m.id === id);
    if (!f) return nothing;
    const field = (key: "w" | "d" | "h", label: string) => html`<label class="nf-size" title=${this.t(`size_${key}` as I18nKey)}
      >${label}
      <input
        type="number"
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${String(Math.round(f[key] * 100) / 100)}
        @change=${(e: Event) => {
          const v = parseFloat((e.target as HTMLInputElement).value.replace(",", "."));
          if (Number.isFinite(v) && v > 0) this.editFurniture(id, (m) => (m[key] = Math.round(v * 1000) / 1000));
        }}
    /></label>`;
    const floor = this.data.building?.floors.find((fl) => fl.furniture.some((m) => m.id === id));
    return html`${field("w", this.t("size_short_w"))}${field("d", this.t("size_short_d"))}${field("h", this.t("size_short_h"))}
    ${floor && canLift(f)
      ? html`<label class="nf-size" title=${this.t("mount_height")}
            >↕
            <input
              type="number"
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${String(Math.round((f.mount_y ?? mountBase(floor, f)) * 100) / 100)}
              @change=${(e: Event) => {
                const v = parseFloat((e.target as HTMLInputElement).value.replace(",", "."));
                if (Number.isFinite(v) && v >= 0) this.editFurniture(id, (m) => (m.mount_y = Math.round(v * 1000) / 1000));
              }}
          /></label>
          ${f.mount_y != null ? html`<button class="nf-chip" @click=${() => this.editFurniture(id, (m) => (m.mount_y = null))}>${this.t("height_auto")}</button>` : nothing}`
      : nothing}`;
  }

  private turnFurniture(delta: number): void {
    if (!this._selFurniture) return;
    this.editFurniture(this._selFurniture, (f) => (f.rotation = (((f.rotation + delta) % 360) + 360) % 360));
  }

  private deleteFurniture(): void {
    const id = this._selFurniture;
    const b = this.data.building;
    if (!id || !b) return;
    const next = structuredClone(b);
    for (const floor of next.floors) floor.furniture = floor.furniture.filter((m) => m.id !== id);
    this.data.edit(next);
    this._selFurniture = null;
  }

  private view3d() {
    return this.renderRoot.querySelector("nf-view3d") as (HTMLElement & { resetView(): void; lookThrough(entityId: string): void }) | null;
  }

  private back(): void {
    if (this._roomId) this._roomId = null;
    else if (this._floorId && (this.data.building?.floors.length ?? 0) > 1) this._floorId = null;
    else this.view3d()?.resetView();
  }

  private readonly onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape" && this._mode === "view") this.back();
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
    if (this.hass && !languageReady(this.hass.language)) return nothing;
    const b = this.data.building;
    const saveState = this.data.saveState;
    return html`
      <div class="nf-app ${this._clean && this._mode === "view" ? "nf-clean" : ""}" style=${this._accent ? `--nf-accent:${this._accent}` : ""}>
        ${this._clean && this._mode === "view" ? nothing : html`<header class="nf-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>${MARK}NextFloor</h1>
          ${this.isAdmin
            ? html`<div class="nf-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode === "view"} @click=${() => this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode === "editor"} @click=${() => this.setMode("editor")}>${this.t("editor")}</button>
                <button role="tab" class="nf-tab-ext" aria-pressed=${this._mode === "extensions"} @click=${() => this.setMode("extensions")}>
                  ✦ ${this.t("ext_tab")}
                </button>
              </div>`
            : nothing}
          <span class="nf-grow"></span>
          ${this._mode === "view" && b?.floors.some((f) => f.rooms.length)
            ? html`<button
                  class="nf-opts-btn"
                  aria-expanded=${this._optsOpen}
                  title=${this.t("view_options")}
                  aria-label=${this.t("view_options")}
                  @click=${() => (this._optsOpen = !this._optsOpen)}
                >
                  ⚙
                </button>
                <div class="nf-view-opts ${this._optsOpen ? "nf-opts-open" : ""}">
                <div class="nf-seg nf-quality" role="group" aria-label=${this.t("quality")}>
                ${(["auto", "low", "high"] as Quality[]).map(
                  (q) => html`<button aria-pressed=${this._quality === q} @click=${() => this.setQuality(q)}>${this.t(`quality_${q}`)}</button>`,
                )}
              </div>
              <div class="nf-seg nf-quality" role="group" aria-label=${this.t("theme")}>
                ${THEMES.map(
                  (t) =>
                    html`<button
                      aria-pressed=${this._theme === t}
                      @click=${() => {
                        this._theme = t;
                        prefs.set("theme", t);
                      }}
                    >
                      ${this.t(`theme_${t}`)}
                    </button>`,
                )}
                <label class="nf-accent-pick" title=${this.t("accent_hint")}>
                  <input
                    type="color"
                    .value=${this._accent ?? "#37e0ff"}
                    aria-label=${this.t("accent")}
                    @input=${(e: Event) => {
                      this._accent = (e.target as HTMLInputElement).value;
                      prefs.set("accent", this._accent);
                    }}
                  />
                  ${this._accent
                    ? html`<button
                        class="nf-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${() => {
                          this._accent = null;
                          prefs.set("accent", "");
                        }}
                      >
                        ↺
                      </button>`
                    : nothing}
                </label>
              </div>
              <div class="nf-seg nf-quality" role="group" aria-label=${this.t("markers")}>
                ${(["none", "important", "all"] as MarkerMode[]).map(
                  (m) =>
                    html`<button
                      aria-pressed=${this._markers === m}
                      title=${this.t("markers")}
                      @click=${() => {
                        this._markers = m;
                        prefs.set("markers", m);
                      }}
                    >
                      ${this.t(`markers_${m}`)}
                    </button>`,
                )}
              </div>
              <div class="nf-seg nf-quality">
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${() => {
                    this._stats = !this._stats;
                    prefs.set("stats", this._stats ? "1" : "0");
                  }}
                >
                  ${this.t("fps")}
                </button>
              </div>
              </div>`
            : nothing}
          ${this._mode === "editor" && saveState !== "idle"
            ? html`<span class="nf-save nf-save-${saveState}">${this.t(saveState === "saving" ? "saving" : saveState === "saved" ? "saved" : "save_error")}</span>`
            : nothing}
          <span class="nf-version" title=${this.t("version_hint", { backend: this.data.backendVersion ?? "?" })}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean && this._mode === "view" ? nothing : this.renderNotices()}
        ${this.data.error && !b ? html`<p class="nf-message">${this.t("load_error")}: ${this.data.error}</p>` : nothing}
        ${!b && !this.data.error ? html`<p class="nf-message">${this.t("loading")}</p>` : nothing}
        ${b
          ? this._mode === "editor" && this.isAdmin
            ? this.renderEditor(b)
            : this._mode === "extensions" && this.isAdmin
              ? this.renderExtensions()
              : this.renderView(b)
          : nothing}
      </div>
    `;
  }

  /** Restart hint, save errors and unsaved edits from an earlier session. */
  private renderNotices() {
    const d = this.data;
    const notices = [];
    if (d.needsRestart) {
      // an old bundle in the browser or the companion app: a reload helps, a restart does not
      if (d.versionGap === "frontend")
        notices.push(
          html`<div class="nf-notice nf-notice-warn">
            ${this.t("needs_reload", { frontend: d.frontendVersion, backend: d.backendVersion ?? "?" })}
            <button class="nf-btn" @click=${() => location.reload()}>${this.t("reload_page")}</button>
          </div>`,
        );
      else notices.push(html`<div class="nf-notice nf-notice-warn">${d.backendVersion ? this.t("needs_restart", { version: d.backendVersion, frontend: d.frontendVersion }) : this.t("needs_restart_old")}</div>`);
    }
    if (d.saveState === "error" && d.saveError) {
      notices.push(html`<div class="nf-notice nf-notice-error">${this.t("save_failed_detail", { error: d.saveError })}</div>`);
    }
    if (d.draft && this.isAdmin) {
      const at = new Date(d.draft.savedAt).toLocaleString(this.hass?.language);
      notices.push(
        html`<div class="nf-notice">
          <span>${this.t("draft_found", { time: at })}</span>
          <button class="nf-btn nf-primary" @click=${() => d.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="nf-btn" @click=${() => d.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`,
      );
    }
    return notices.length ? html`<div class="nf-notices">${notices}</div>` : nothing;
  }

  /** The extensions page (live features, packs); it comes with the editor bundle. */
  private renderExtensions() {
    if (!this._editorReady) {
      loadEditor().then(
        () => (this._editorReady = true),
        (err: unknown) => (this.data.error = String(err)),
      );
      return html`<div class="nf-empty"><p>${this.t("loading")}</p></div>`;
    }
    return html`<nf-extensions
      class="nf-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      @packs-changed=${() => void this.data.reloadPacks()}
    ></nf-extensions>`;
  }

  private renderEditor(b: Building) {
    if (!this._editorReady) {
      loadEditor().then(
        () => (this._editorReady = true),
        (err: unknown) => (this.data.error = String(err)),
      );
      return html`<div class="nf-empty"><p>${this.t("loading")}</p></div>`;
    }
    return html`<nf-editor
      class="nf-body"
      .hass=${this.hass}
      .building=${b}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${() => void this.data.reloadPacks()}
      @open-extensions=${() => this.setMode("extensions")}
      @building-changed=${(e: CustomEvent<{ building: Building }>) => this.data.edit(e.detail.building)}
    ></nf-editor>`;
  }

  /** A single-row bar scrolls sideways with the mouse wheel (a desktop has no swipe). */
  private readonly onNavWheel = (e: WheelEvent) => {
    if (this._navWrap || !e.deltaY || e.deltaX) return;
    const nav = e.currentTarget as HTMLElement;
    if (nav.scrollWidth <= nav.clientWidth) return;
    nav.scrollLeft += e.deltaY;
    e.preventDefault();
  };

  private renderView(b: Building) {
    if (!b.floors.length || !b.floors.some((f) => f.rooms.length)) {
      return html`<div class="nf-empty">
        <p>${this.t(this.isAdmin ? "no_building_admin" : "no_building")}</p>
        ${this.isAdmin ? html`<button class="nf-btn nf-primary" @click=${() => this.setMode("editor")}>${this.t("open_editor")}</button>` : nothing}
      </div>`;
    }
    const floor = b.floors.find((f) => f.id === this._floorId);
    const roomFloors = floor ? [floor] : b.floors;
    return html`
      ${this._clean ? nothing : html`<nav class="nf-nav ${this._navWrap ? "nf-nav-wrap" : ""}" @wheel=${this.onNavWheel}>
        ${b.floors.length > 1
          ? html`<button class="nf-chip" aria-pressed=${this._floorId === null} @click=${() => {
                this._floorId = null;
                this._roomId = null;
              }}>
                ${this.t("all_floors")}
              </button>
              ${[...b.floors].reverse().map(
                (f) => html`<button
                  class="nf-chip"
                  aria-pressed=${f.id === this._floorId}
                  @click=${() => {
                    this._floorId = f.id;
                    this._roomId = null;
                  }}
                >
                  ${f.name}
                </button>`,
              )}
              <span class="nf-sep"></span>`
          : nothing}
        ${roomFloors.flatMap((f) => [
          // in the house view the rooms of every floor follow a small floor label
          roomFloors.length > 1 && f.rooms.length ? html`<span class="nf-nav-floor">${f.name}</span>` : nothing,
          ...f.rooms.map(
            (r) => html`<button
              class="nf-chip nf-room-chip"
              aria-pressed=${r.id === this._roomId}
              @click=${() => {
                if (b.floors.length > 1) this._floorId = f.id;
                this._roomId = r.id === this._roomId ? null : r.id;
              }}
            >
              ${r.name}
            </button>`,
          ),
        ])}
        <button
          class="nf-chip nf-nav-toggle"
          title=${this.t(this._navWrap ? "nav_row" : "nav_wrap")}
          aria-label=${this.t(this._navWrap ? "nav_row" : "nav_wrap")}
          aria-pressed=${this._navWrap}
          @click=${() => {
            this._navWrap = !this._navWrap;
            prefs.set("nav_wrap", this._navWrap ? "1" : "0");
          }}
        >
          ${this._navWrap ? "\u2194" : "\u2261"}
        </button>
      </nav>`}
      <div class="nf-stage-wrap ${this._roomId ? "nf-room-open" : ""}">
        <nf-view3d
          class="nf-body"
          .hass=${this.hass}
          .building=${b}
          .packs=${this.data.packs}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          ?trail=${this._trail}
          .cameraWall=${this._cameraWall}
          @camera-wall-close=${() => (this._cameraWall = false)}
          @camera-wall-open=${() => (this._cameraWall = true)}
          .clean=${this._clean}
          .cleanButton=${true}
          @clean-toggle=${() => {
            this._clean = !this._clean;
            prefs.set("clean", this._clean ? "1" : "0");
          }}
          ?weather=${this._weather}
          .panelOpen=${!!this._roomId}
          .floorId=${b.floors.length > 1 ? this._floorId : (b.floors[0]?.id ?? null)}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .keepRoof=${this._keepRoof}
          .markerMode=${this._markers}
          .heatMode=${this._heat}
          .theme=${this._theme}
          .accent=${this._accent}
          ?furnish=${this._furnish}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${(e: CustomEvent<{ id: string | null }>) => (this._selFurniture = e.detail.id)}
          @furniture-move=${this.moveFurniture}
          @device-select=${(e: CustomEvent<{ id: string | null }>) => (this._selDevice = e.detail.id)}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${() => this.setMode("extensions")}
          @floor-tap=${(e: CustomEvent<{ floorId: string | null }>) => {
            this._floorId = e.detail.floorId;
            this._roomId = null;
          }}
          @back=${() => this.back()}
        ></nf-view3d>
        ${this._roomId
          ? html`<nf-room-panel
              class="nf-room-panel"
              @camera-look=${(e: CustomEvent<{ entity: string }>) => this.view3d()?.lookThrough(e.detail.entity)}
              .hass=${this.hass}
              .room=${b.floors.flatMap((f) => f.rooms).find((r) => r.id === this._roomId) ?? null}
              .floor=${b.floors.find((f) => f.rooms.some((r) => r.id === this._roomId)) ?? null}
              .confirmEntities=${confirmEntities(this.hass, b.floors)}
              @close=${() => (this._roomId = null)}
            ></nf-room-panel>`
          : nothing}
        ${this._clean ? nothing : html`<div class="nf-overlay">
          <div class="nf-seg">
            <button aria-pressed=${this._wallMode === "auto"} @click=${() => (this._wallMode = "auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode === "cut"} @click=${() => (this._wallMode = "cut")}>${this.t("walls_cut")}</button>
          </div>
          ${b.floors.length > 1 && !this._floorId
            ? html`<div class="nf-seg">
                <button aria-pressed=${this._explode} @click=${() => this.setExplode(true)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${() => this.setExplode(false)}>${this.t("floors_stacked")}</button>
              </div>`
            : nothing}
          ${!this._floorId && b.settings.roof.type !== "none"
            ? html`<div class="nf-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${() => this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`
            : nothing}
          ${b.floors.length > 1 && this._floorId
            ? html`<div class="nf-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${(["dim", "stacked", "single"] as FloorStack[]).map(
                  (m) =>
                    html`<button
                      aria-pressed=${this._floorStack === m}
                      @click=${() => {
                        this._floorStack = m;
                        prefs.set("floor_stack", m);
                      }}
                    >
                      ${this.t(`floor_stack_short_${m}` as I18nKey)}
                    </button>`,
                )}
              </div>`
            : nothing}
          <div class="nf-seg" role="group" aria-label=${this.t("heatmap")}>
            ${(["none", "temperature", "humidity", "co2", "values"] as HeatMode[]).map(
              (m) =>
                html`<button
                  aria-pressed=${this._heat === m}
                  @click=${() => {
                    this._heat = m;
                    prefs.set("heat", m);
                  }}
                >
                  ${this.t(m === "none" ? "heat_off" : (`heat_short_${m}` as I18nKey))}
                </button>`,
            )}
          </div>
          <button
            class="nf-chip"
            aria-pressed=${this._roomNames}
            @click=${() => {
              this._roomNames = !this._roomNames;
              prefs.set("room_names", this._roomNames ? "1" : "0");
            }}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="nf-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${() => {
              this._trail = !this._trail;
              prefs.set("trail", this._trail ? "1" : "0");
            }}
          >
            ${this.t("trail_short")}
          </button>
          <button
            class="nf-chip"
            aria-pressed=${this._cameraWall}
            title=${this.t("camera_wall_hint")}
            @click=${() => (this._cameraWall = !this._cameraWall)}
          >
            ${this.t("cameras_short")}
          </button>
          <button
            class="nf-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${() => {
              this._weather = !this._weather;
              prefs.set("weather", this._weather ? "1" : "0");
            }}
          >
            ${this.t("weather_short")}
          </button>
          ${this._roomId || (this._floorId && b.floors.length > 1)
            ? html`<button class="nf-chip" @click=${() => this.back()}>${this.t("back")}</button>`
            : nothing}
        </div>`}
        ${this._furnish
          ? html`<div class="nf-furnish-bar">
              ${this._selFurniture
                ? html`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="nf-chip" @click=${() => this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="nf-chip" @click=${() => this.turnFurniture(45)}>↻ 45°</button>
                    <button class="nf-chip" title=${this.t("furn_mirror_hint")} @click=${() => this.editFurniture(this._selFurniture!, (f) => (f.mirror = !f.mirror))}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="nf-chip nf-danger-chip" @click=${() => this.deleteFurniture()}>${this.t("delete")}</button>`
                : this._selDevice
                  ? html`<span>${entityName(this.hass, this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="nf-chip" @click=${() => this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="nf-chip" @click=${() => this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="nf-chip nf-danger-chip" @click=${() => this.deleteDevice()}>${this.t("delete")}</button>`
                  : html`<span>${this.t("furnish_hint")}</span>`}
              <button class="nf-chip nf-chip-on" @click=${() => ((this._furnish = false), (this._selFurniture = null), (this._selDevice = null))}>${this.t("done")}</button>
            </div>`
          : nothing}
      </div>
    `;
  }

  static styles = [
    tokens,
    controls,
    css`
      .nf-dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-left: 6px;
        border-radius: 50%;
        background: #ffb547;
        box-shadow: 0 0 8px #ffb547;
        vertical-align: middle;
      }
      :host {
        display: block;
        /* HA gives the custom panel's parent no explicit height, so 100% collapses. */
        height: 100vh;
        height: 100dvh;
        background: var(--nf-bg);
      }
      .nf-app {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
      }
      .nf-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 14px 6px 4px;
        min-height: 56px;
        border-bottom: var(--app-header-border-bottom, 1px solid var(--nf-line));
        background: var(--app-header-background-color, var(--nf-chrome-solid));
        color: var(--app-header-text-color, var(--nf-text));
        flex-wrap: wrap;
      }
      ha-menu-button {
        color: var(--app-header-text-color, var(--nf-text));
      }
      h1 {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 400;
        font-size: 20px;
        margin: 0 4px 0 8px;
        white-space: nowrap;
      }
      .nf-mark {
        width: 26px;
        height: 28px;
        color: var(--nf-accent);
      }
      .nf-notices {
        display: grid;
        gap: 6px;
        padding: 8px 14px 0;
      }
      .nf-notice {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 12px;
        padding: 9px 12px;
        border-radius: 10px;
        border: 1px solid var(--nf-line);
        background: var(--nf-chrome-solid);
        font-size: 13.5px;
      }
      .nf-notice span {
        flex: 1;
        min-width: 200px;
      }
      .nf-notice-warn {
        border-color: color-mix(in srgb, var(--nf-warm) 60%, transparent);
        color: var(--nf-warm);
      }
      .nf-notice-error {
        border-color: color-mix(in srgb, var(--nf-danger) 60%, transparent);
        color: var(--nf-danger);
        word-break: break-word;
      }
      .nf-chip-on {
        background: var(--nf-accent);
        color: var(--nf-accent-text);
      }
      .nf-furnish-bar {
        position: absolute;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--nf-chrome);
        box-shadow: var(--nf-shadow);
        font-size: 13.5px;
      }
      .nf-size-select {
        font: inherit;
        color: var(--nf-text);
        background: var(--nf-chrome-solid);
        border: 1px solid var(--nf-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .nf-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--nf-muted);
      }
      .nf-size input {
        width: 58px;
        padding: 5px 6px;
        border: 1px solid rgba(127, 127, 127, 0.35);
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 13px;
      }
      .nf-danger-chip {
        color: var(--nf-danger);
      }
      .nf-grow {
        flex: 1;
      }
      .nf-save {
        font-size: 12.5px;
        color: var(--nf-muted);
      }
      .nf-view-opts {
        display: contents;
      }
      .nf-opts-btn {
        display: none;
      }
      /* phones: the view options fold behind ⚙ (one header row instead of three) */
      @media (max-width: 700px) {
        .nf-opts-btn {
          display: grid;
          place-items: center;
          order: 3;
          width: 36px;
          height: 36px;
          border: 1px solid var(--nf-line);
          border-radius: 10px;
          background: transparent;
          color: var(--nf-text);
          font-size: 17px;
          cursor: pointer;
        }
        .nf-opts-btn[aria-expanded="true"] {
          color: var(--nf-accent);
          border-color: var(--nf-accent);
        }
        .nf-view-opts {
          display: none;
        }
        .nf-view-opts.nf-opts-open {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          order: 5;
          width: 100%;
        }
        .nf-version {
          order: 4;
        }
        .nf-header .nf-grow {
          display: none;
        }
      }
      /* the installed version, at the far right of the header */
      .nf-version {
        margin-left: auto;
        font-size: 11.5px;
        color: var(--nf-muted);
        white-space: nowrap;
        opacity: 0.8;
      }
      .nf-save-error {
        color: var(--nf-danger);
      }
      .nf-body {
        flex: 1;
        min-height: 0;
      }
      /* the colour well beside the look: a small round swatch, the reset arrow next to it */
      .nf-accent-pick {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 0 4px;
      }
      .nf-accent-pick input[type="color"] {
        width: 22px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--nf-line);
        border-radius: 50%;
        background: none;
        cursor: pointer;
      }
      .nf-accent-pick input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 2px;
      }
      .nf-accent-pick input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: 50%;
      }
      .nf-accent-reset {
        border: none;
        background: none;
        color: var(--nf-muted);
        cursor: pointer;
        font-size: 14px;
        padding: 0 2px;
      }
      .nf-nav {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 10px 14px;
        overflow-x: auto;
        scrollbar-width: none;
        flex: none;
      }
      /* a desktop shows a thin scrollbar while the pointer rests on the bar */
      .nf-nav:hover {
        scrollbar-width: thin;
      }
      /* wrapped: several lines, at most about three before the bar itself scrolls */
      .nf-nav-wrap {
        flex-wrap: wrap;
        overflow-x: visible;
        overflow-y: auto;
        max-height: 132px;
      }
      .nf-nav-floor {
        flex: none;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--nf-muted);
        margin-left: 6px;
      }
      .nf-nav-toggle {
        flex: none;
        margin-left: auto;
        position: sticky;
        right: 0;
        min-width: 34px;
        padding-left: 8px;
        padding-right: 8px;
      }
      .nf-nav .nf-chip {
        box-shadow: none;
        border: 1px solid var(--nf-line);
      }
      .nf-sep {
        flex: none;
        width: 1px;
        margin: 4px 4px;
        background: var(--nf-line);
      }
      .nf-stage-wrap {
        position: relative;
        flex: 1;
        min-height: 0;
        display: flex;
        container-type: size;
        container-name: nf;
      }
      .nf-stage-wrap nf-view3d {
        flex: 1;
      }
      .nf-room-panel {
        position: absolute;
        top: 58px;
        right: 14px;
        bottom: 14px;
        width: min(360px, calc(100% - 28px));
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        pointer-events: none;
      }
      /* the switches sit at the bottom (as in the card), where they never meet the energy values or warnings */
      nf-view3d {
        --nf-bottom-inset: 52px;
      }
      .nf-clean nf-view3d {
        --nf-bottom-inset: 0px;
      }
      .nf-furnish-bar {
        bottom: 68px;
      }
      /* phones and portrait tablets: panel as a sheet at the bottom, the switches step aside */
      @container nf ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .nf-room-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        .nf-room-open .nf-overlay {
          display: none;
        }
      }
      .nf-overlay {
        position: absolute;
        right: 12px;
        bottom: 12px;
        /* room for the search button and the eye beside it */
        left: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        align-items: center;
        pointer-events: none;
      }
      .nf-overlay > * {
        pointer-events: auto;
      }
      .nf-quality button {
        padding: 5px 11px;
        min-height: 30px;
        font-size: 13px;
      }
      .nf-message,
      .nf-empty {
        padding: 32px 20px;
        color: var(--nf-muted);
        text-align: center;
      }
      .nf-empty {
        display: grid;
        justify-items: center;
        gap: 12px;
        margin: auto;
      }
    `,
  ];
}

if (!customElements.get("nextfloor-panel")) customElements.define("nextfloor-panel", NextFloorPanel);
