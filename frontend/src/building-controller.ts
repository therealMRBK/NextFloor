// The plan's connection to Home Assistant: loads it, follows changes made elsewhere, and saves edits
// after a short pause. Edits that cannot be saved are kept in the browser so a reload does not lose them.

import type { ReactiveController, ReactiveControllerHost } from "lit";
import { fetchBuilding, listPacks, saveBuilding, subscribeBuilding } from "./api.ts";
import { loadPlugins } from "./plugins/loader.ts";
import { onPluginsChanged } from "./plugins/registry.ts";
import { normalizeBuilding, type Building } from "./model.ts";
import { setPacks, type FurniturePack } from "./packs.ts";
import type { HassConnection, HomeAssistant } from "./types.ts";

export type SaveState = "idle" | "saving" | "saved" | "error";

/** Quiet time after the last edit before it is sent. */
const SAVE_DELAY_MS = 700;
const DRAFT_STORAGE_KEY = "nextfloor.unsaved";

/** Frontend version, injected by the build (see build.mjs). */
declare const __NF_VERSION__: string;
export const FRONTEND_VERSION = typeof __NF_VERSION__ === "string" ? __NF_VERSION__ : "dev";

/** An edit that could not be saved. */
export interface Draft {
  building: Building;
  savedAt: number;
}

function loadDraft(): Draft | null {
  try {
    const stored = localStorage.getItem(DRAFT_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Draft) : null;
  } catch {
    return null;
  }
}

function storeDraft(draft: Draft | null): void {
  try {
    if (draft) localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
    else localStorage.removeItem(DRAFT_STORAGE_KEY);
  } catch {
    // storage is full or blocked: the edit then lives until the tab closes
  }
}

const messageOf = (error: unknown): string => (error && typeof error === "object" && "message" in error ? String((error as { message: unknown }).message) : String(error));

/** Compares "1.10.1"-like versions piece by piece: negative when a is older than b, positive when newer. */
export function compareVersions(a: string, b: string): number {
  const split = (v: string) => v.split(/[.-]/).map((part) => Number.parseInt(part, 10) || 0);
  const [left, right] = [split(a), split(b)];
  for (let i = 0; i < Math.max(left.length, right.length); i++) {
    const difference = (left[i] ?? 0) - (right[i] ?? 0);
    if (difference !== 0) return difference;
  }
  return 0;
}

export class BuildingController implements ReactiveController {
  building: Building | null = null;
  error: string | null = null;
  saveState: SaveState = "idle";
  /** The backend's message when the last save failed. */
  saveError: string | null = null;
  /** The version the backend runs. It differs from the frontend's until Home Assistant restarts. */
  backendVersion: string | null = null;
  /** Unsaved edits of an earlier session that can be restored. */
  draft: Draft | null = null;
  /** Imported furniture packs. */
  packs: FurniturePack[] = [];

  private readonly host: ReactiveControllerHost;
  private stopPlugins: (() => void) | null = null;
  private hass: HomeAssistant | null = null;
  private connected = false;
  private revision = -1;
  private connection: HassConnection | null = null;
  private retryTimer: ReturnType<typeof setTimeout> | undefined;
  private starting: Promise<void> | null = null;
  private readonly onReady = () => { void this.start(); };
  /** Revisions our own saves produced, so their echo over the subscription is ignored. */
  private readonly ownRevisions = new Set<number>();
  private stopListening: (() => Promise<void>) | null = null;
  private timer: ReturnType<typeof setTimeout> | undefined;
  private waiting: Building | null = null;
  private inFlight: Promise<void> | null = null;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    host.addController(this);
  }

  /** Hand over every new hass object; the first one starts loading. */
  setHass(hass: HomeAssistant): void {
    const isFirst = this.hass === null;
    const connectionChanged = this.hass?.connection !== hass.connection;
    this.hass = hass;
    if (this.connected) {
      this.watchConnection();
      if (isFirst || connectionChanged) void this.start();
    }
  }

  hostConnected(): void {
    this.connected = true;
    // a plugin that loads or registers later changes markers, animations and room panels
    this.stopPlugins = onPluginsChanged(() => this.host.requestUpdate());
    this.watchConnection();
    if (this.hass) void this.start();
  }

  hostDisconnected(): void {
    this.connected = false;
    clearTimeout(this.retryTimer);
    this.retryTimer = undefined;
    this.connection?.removeEventListener?.("ready", this.onReady);
    this.connection = null;
    this.stopPlugins?.();
    this.stopPlugins = null;
    void this.flush();
    void this.stopListening?.().catch(() => undefined);
    this.stopListening = null;
  }

  /** A local edit: visible at once, sent after a short pause. */
  edit(building: Building): void {
    this.building = building;
    void loadPlugins(building.settings.plugins);
    this.waiting = building;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => void this.flush(), SAVE_DELAY_MS);
    this.host.requestUpdate();
  }

  get frontendVersion(): string {
    return FRONTEND_VERSION;
  }

  /**
   * Which side is behind when versions differ. "backend": Home Assistant still runs the old integration (a restart
   * helps). "frontend": the browser or companion app holds an old bundle (a reload helps). Null when they match
   * or one version is unknown.
   */
  get versionGap(): "backend" | "frontend" | null {
    const backend = this.backendVersion;
    if (!backend || FRONTEND_VERSION === "dev" || backend === FRONTEND_VERSION) return null;
    return compareVersions(backend, FRONTEND_VERSION) > 0 ? "frontend" : "backend";
  }

  /** Home Assistant has to restart: the backend runs another version, or rejected fields it does not know yet. */
  get needsRestart(): boolean {
    if (this.saveError && /extra keys not allowed/i.test(this.saveError)) return true;
    return !!this.backendVersion && FRONTEND_VERSION !== "dev" && this.backendVersion !== FRONTEND_VERSION;
  }

  /** Takes over the unsaved edits of an earlier session (and saves them). */
  restoreDraft(): void {
    const draft = this.draft;
    this.draft = null;
    if (draft) this.edit(normalizeBuilding(draft.building));
  }

  discardDraft(): void {
    this.draft = null;
    storeDraft(null);
    this.host.requestUpdate();
  }

  /** Sends the pending edit now. */
  async flush(): Promise<void> {
    clearTimeout(this.timer);
    if (this.inFlight) await this.inFlight;
    const building = this.waiting;
    const hass = this.hass;
    if (!building || !hass) return;
    this.waiting = null;
    this.saveState = "saving";
    this.host.requestUpdate();
    this.inFlight = this.send(hass, building);
    await this.inFlight;
    this.inFlight = null;
  }

  private async send(hass: HomeAssistant, building: Building): Promise<void> {
    try {
      const revision = await saveBuilding(hass, building);
      this.ownRevisions.add(revision);
      this.revision = revision;
      this.saveState = this.waiting ? "saving" : "saved";
      this.saveError = null;
      storeDraft(null);
    } catch (error) {
      this.saveState = "error";
      this.saveError = messageOf(error);
      storeDraft({ building, savedAt: Date.now() }); // after a restart it can be restored and saved
    }
    this.host.requestUpdate();
  }

  /** Follow the WebSocket even when the dashboard card itself never disconnects. */
  private watchConnection(): void {
    const connection = this.hass?.connection ?? null;
    if (connection === this.connection) return;
    this.connection?.removeEventListener?.("ready", this.onReady);
    // Home Assistant restores subscriptions on the same connection itself.
    if (this.connection) {
      void this.stopListening?.().catch(() => undefined);
      this.stopListening = null;
    }
    this.connection = connection;
    connection?.addEventListener?.("ready", this.onReady);
  }

  private retry(): void {
    if (!this.connected || this.retryTimer !== undefined) return;
    this.retryTimer = setTimeout(() => {
      this.retryTimer = undefined;
      void this.start();
    }, 5000);
    // In node tests this must not keep the process alive; browsers return a number.
    this.retryTimer.unref?.();
  }

  private start(): Promise<void> {
    if (this.starting) return this.starting;
    this.starting = this.connect().finally(() => { this.starting = null; });
    return this.starting;
  }

  private async connect(): Promise<void> {
    const hass = this.hass;
    if (!hass || !this.connected) return;
    clearTimeout(this.retryTimer);
    this.retryTimer = undefined;
    // Reloading after a reconnect must not replace edits still being saved.
    if (this.waiting || this.inFlight) { this.retry(); return; }
    await Promise.all([this.reloadPacks(), this.reload()]);
    if (!this.connected) return;
    if (hass.connection !== this.hass?.connection) { this.retry(); return; }
    if (this.error) this.retry();
    if (this.stopListening) return;
    try {
      const stop = await subscribeBuilding(hass, (revision) => {
        const ours = this.ownRevisions.has(revision) || revision === this.revision;
        const busy = this.waiting !== null || this.inFlight !== null;
        if (!ours && !busy) void this.reload();
      });
      if (!this.connected || hass.connection !== this.hass?.connection) {
        void stop().catch(() => undefined);
      } else this.stopListening = stop;
    } catch {
      this.retry();
    }
  }

  /** Loads the furniture packs again, for example after an import or removal. */
  async reloadPacks(): Promise<void> {
    if (!this.hass) return;
    try {
      this.packs = await listPacks(this.hass);
    } catch {
      this.packs = []; // a backend without packs, before its restart
    }
    setPacks(this.packs);
    this.host.requestUpdate();
  }

  private async reload(): Promise<void> {
    const hass = this.hass;
    if (!hass) return;
    try {
      const fetched = await fetchBuilding(hass);
      if (!this.connected || this.hass?.connection !== hass.connection || this.waiting || this.inFlight) return;
      this.building = normalizeBuilding(fetched.building);
      void loadPlugins(this.building.settings.plugins);
      this.backendVersion = fetched.version ?? null;
      this.revision = fetched.revision;
      this.error = null;
      if (this.draft === null && !this.waiting) this.draft = loadDraft();
    } catch (error) {
      this.error = messageOf(error);
    }
    this.host.requestUpdate();
  }
}
