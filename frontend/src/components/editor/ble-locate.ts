// Locating a Bluetooth tag by room, learned by walking: choose a tag (a Bluetooth address, or a Private BLE Device tracker for a phone or
// watch), then walk through each room with it and record the room. The signals every scanner of Home Assistant (ESPHome proxies, Shelly
// devices with Bluetooth scanning, the host's adapters) hears are kept as fingerprints; the backend sensor compares them with the live
// signals. The editor only reads what the scanners report and shows "now: kitchen" while you walk.

import { LitElement, html, nothing, type PropertyValues } from "lit";
import { uid, type BleFingerprint, type BleTag } from "../../model.ts";
import { fingerprintsOf, locate, RECORD_SECONDS, replaceRoom, signalLevel, type Reading } from "./ops/ble.ts";
import type { EditorHost } from "./host.ts";

interface Scan {
  address: string | null;
  available: boolean;
  readings: Record<string, { name: string; rssi: number }>;
}

interface Discovered {
  available: boolean;
  scanners: { source: string; name: string }[];
  devices: { address: string; name: string; rssi: number; named: boolean }[];
}

const POLL_MS = 1500;

export class NfBleLocate extends LitElement {
  static properties = {
    host: { attribute: false },
    doc: { attribute: false },
    _found: { state: true },
    _pick: { state: true },
    _name: { state: true },
    _tag: { state: true },
    _room: { state: true },
    _scan: { state: true },
    _samples: { state: true },
    _error: { state: true },
  };
  declare host: EditorHost;
  /** The plan: a new one after every change makes this draw again. */
  declare doc: unknown;
  private declare _found: Discovered | null;
  private declare _pick: string;
  private declare _name: string;
  private declare _tag: string | null;
  private declare _room: string;
  private declare _scan: Scan | null;
  /** The samples of the recording in progress (null = not recording). */
  private declare _samples: Reading[] | null;
  private declare _error: string;
  private timer = 0;
  private recordStarted = 0;

  constructor() {
    super();
    this._found = null;
    this._pick = "";
    this._name = "";
    this._tag = null;
    this._room = "";
    this._scan = null;
    this._samples = null;
    this._error = "";
  }

  // the editor's styles apply to this element's content
  protected createRenderRoot(): HTMLElement {
    return this;
  }

  private get tags(): BleTag[] {
    return this.host.doc.settings.ble?.tags ?? [];
  }

  private get rooms(): { id: string; label: string }[] {
    const floors = this.host.doc.floors;
    return floors.flatMap((f) => f.rooms.map((r) => ({ id: r.id, label: floors.length > 1 ? `${f.name} · ${r.name}` : r.name })));
  }

  connectedCallback(): void {
    super.connectedCallback();
    void this.loadDevices();
    // re-attached with a tag chosen: the live bars run again
    if (this._tag) this.restartPolling();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.clearInterval(this.timer);
  }

  protected updated(changed: PropertyValues): void {
    if (changed.has("_tag")) this.restartPolling();
  }

  private async loadDevices(): Promise<void> {
    try {
      this._found = await this.host.hass!.callWS<Discovered>({ type: "nextfloor/ble/devices" });
    } catch (e) {
      this._error = String((e as { message?: string })?.message ?? e);
    }
  }

  private restartPolling(): void {
    window.clearInterval(this.timer);
    this._scan = null;
    // a recording belongs to the tag it was started for: another tag must not add its readings to it
    this._samples = null;
    if (!this._tag) return;
    const poll = () => void this.pollOnce();
    poll();
    this.timer = window.setInterval(poll, POLL_MS);
  }

  private async pollOnce(): Promise<void> {
    const tag = this.tags.find((t) => t.id === this._tag);
    if (!tag || !this.host.hass) return;
    try {
      const scan = await this.host.hass.callWS<Scan>({ type: "nextfloor/ble/scan", ...(tag.entity ? { entity: tag.entity } : { address: tag.address }) });
      // an answer for a tag that is no longer chosen is dropped
      if (this._tag !== tag.id) return;
      this._scan = scan;
      this._error = "";
      if (this._samples) {
        this._samples = [...this._samples, Object.fromEntries(Object.entries(scan.readings).map(([src, r]) => [src, r.rssi]))];
        if (Date.now() - this.recordStarted >= RECORD_SECONDS * 1000) this.finishRecording(tag, scan);
      }
    } catch (e) {
      this._error = String((e as { message?: string })?.message ?? e);
    }
  }

  private reading(): Reading {
    return Object.fromEntries(Object.entries(this._scan?.readings ?? {}).map(([src, r]) => [src, r.rssi]));
  }

  private startRecording(): void {
    if (!this._room) return;
    this.recordStarted = Date.now();
    this._samples = [];
  }

  private finishRecording(tag: BleTag, scan: Scan): void {
    const samples = this._samples ?? [];
    this._samples = null;
    const fresh = fingerprintsOf(this._room, samples);
    if (fresh.length === 0) return;
    const names = Object.fromEntries(Object.entries(scan.readings).map(([src, r]) => [src, r.name]));
    this.update2(tag.id, (t) => {
      t.prints = replaceRoom(t.prints, this._room, fresh);
      t.scanners = { ...(t.scanners ?? {}), ...names };
    });
  }

  private update2(id: string, mutate: (tag: BleTag) => void): void {
    this.host.change((d) => {
      const tag = d.settings.ble?.tags.find((t) => t.id === id);
      if (tag) mutate(tag);
    });
  }

  private addTag(): void {
    const pick = this._pick;
    if (!pick) return;
    const entity = pick.startsWith("device_tracker.");
    const known = this._found?.devices.find((d) => d.address === pick);
    const name = this._name.trim() || known?.name || this.host.hass?.states[pick]?.attributes.friendly_name || pick;
    const tag: BleTag = { id: uid("ble"), name: String(name).slice(0, 60), prints: [], ...(entity ? { entity: pick } : { address: pick }) };
    this.host.change((d) => {
      d.settings.ble = { tags: [...(d.settings.ble?.tags ?? []), tag] };
    });
    this._tag = tag.id;
    this._pick = "";
    this._name = "";
  }

  private removeTag(id: string): void {
    this.host.change((d) => {
      const tags = (d.settings.ble?.tags ?? []).filter((t) => t.id !== id);
      d.settings.ble = tags.length ? { tags } : null;
    });
    if (this._tag === id) this._tag = null;
  }

  private bars(tag: BleTag) {
    const t = this.host.t;
    const scan = this._scan;
    const entries = Object.entries(scan?.readings ?? {}).sort((a, b) => b[1].rssi - a[1].rssi);
    return html`<div class="nf-ble-bars">
      ${entries.length === 0
        ? html`<p class="nf-sub">${scan && !scan.available ? t("ble_unavailable") : scan?.address === null && tag.entity ? t("ble_no_address") : t("ble_none_heard")}</p>`
        : entries.map(([src, r]) => html`<div class="nf-ble-row" title=${src}>
            <span class="nf-ble-name">${r.name}</span>
            <span class="nf-ble-track"><span class="nf-ble-fill" style="width:${Math.round(signalLevel(r.rssi) * 100)}%"></span></span>
            <span class="nf-ble-db">${Math.round(r.rssi)}</span>
          </div>`)}
      ${entries.length === 1 ? html`<p class="nf-sub">${t("ble_one_scanner")}</p>` : nothing}
    </div>`;
  }

  private learn(tag: BleTag) {
    const t = this.host.t;
    const rooms = this.rooms;
    const now = locate(tag.prints, this.reading());
    const roomLabel = (id: string | null) => rooms.find((r) => r.id === id)?.label ?? null;
    const count = (room: string) => tag.prints.filter((p: BleFingerprint) => p.room === room).length;
    const recording = this._samples !== null;
    const left = recording ? Math.max(0, RECORD_SECONDS - Math.round((Date.now() - this.recordStarted) / 1000)) : 0;
    return html`${this.bars(tag)}
      <p class="nf-ble-now"><b>${t("ble_now")}:</b> ${now.room ? roomLabel(now.room) : t("ble_unknown")}</p>
      <div class="nf-form">
        <label class="nf-field nf-wide">${t("ble_learn_room")}
          <select ?disabled=${recording} .value=${this._room} @change=${(e: Event) => (this._room = (e.target as HTMLSelectElement).value)}>
            <option value="">–</option>
            ${rooms.map((r) => html`<option value=${r.id} ?selected=${this._room === r.id}>${r.label}${count(r.id) ? ` ✓ ${count(r.id)}` : ""}</option>`)}
          </select>
        </label>
      </div>
      <div class="nf-actions">
        <button class="nf-btn nf-primary" ?disabled=${!this._room || recording || Object.keys(this._scan?.readings ?? {}).length === 0} @click=${() => this.startRecording()}>
          ${recording ? t("ble_recording", { s: left }) : t("ble_record", { s: RECORD_SECONDS })}
        </button>
        ${this._room && count(this._room) ? html`<button class="nf-btn" ?disabled=${recording} @click=${() => this.update2(tag.id, (x) => (x.prints = x.prints.filter((p) => p.room !== this._room)))}>${t("ble_forget_room")}</button>` : nothing}
      </div>
      <p class="nf-sub">${t("ble_learn_hint")}</p>`;
  }

  protected render() {
    const t = this.host.t;
    const tags = this.tags;
    const used = new Set(tags.flatMap((x) => [x.address ?? "", x.entity ?? ""]));
    const trackers = Object.entries(this.host.hass?.states ?? {})
      .filter(([id, s]) => id.startsWith("device_tracker.") && typeof s.attributes.current_address === "string" && !used.has(id))
      .map(([id, s]) => [id, String(s.attributes.friendly_name ?? id)] as const);
    const devices = (this._found?.devices ?? []).filter((d) => !used.has(d.address));
    const scanners = this._found?.scanners.length ?? 0;
    const tag = tags.find((x) => x.id === this._tag) ?? null;
    return html`
      ${this._found && !this._found.available ? html`<p class="nf-sub">${t("ble_unavailable")}</p>` : html`<p class="nf-sub">${t("ble_scanners", { n: scanners })}</p>`}
      ${this._error ? html`<p class="nf-sub">${this._error}</p>` : nothing}
      ${tags.map(
        (x) => html`<div class="nf-row nf-dev-row">
          <span class="nf-dev-name"><span>${x.name}</span><small>${x.entity ?? x.address} · ${t("ble_spots", { n: x.prints.length })}</small></span>
          <button class="nf-btn" @click=${() => (this._tag = this._tag === x.id ? null : x.id)}>${this._tag === x.id ? t("ble_close") : t("ble_learn")}</button>
          <button class="nf-btn" title=${t("delete")} @click=${() => this.removeTag(x.id)}>✕</button>
        </div>`,
      )}
      ${tag ? html`<div class="nf-ble-learn">${this.learn(tag)}<p class="nf-sub">${t("ble_sensor_hint", { name: tag.name })}</p></div>` : nothing}
      <div class="nf-form">
        <label class="nf-field nf-wide">${t("ble_add")}
          <select .value=${this._pick} @change=${(e: Event) => (this._pick = (e.target as HTMLSelectElement).value)}>
            <option value="">–</option>
            ${trackers.length ? html`<optgroup label=${t("ble_trackers")}>${trackers.map(([id, name]) => html`<option value=${id}>${name}</option>`)}</optgroup>` : nothing}
            <optgroup label=${t("ble_devices")}>${devices.map((d) => html`<option value=${d.address}>${d.named ? d.name : d.address} · ${d.address} · ${d.rssi} dBm</option>`)}</optgroup>
          </select>
        </label>
        <label class="nf-field nf-wide">${t("ble_name")}
          <input type="text" maxlength="60" .value=${this._name} @input=${(e: Event) => (this._name = (e.target as HTMLInputElement).value)} />
        </label>
      </div>
      <div class="nf-actions">
        <button class="nf-btn" @click=${() => void this.loadDevices()}>${t("ble_refresh")}</button>
        <button class="nf-btn nf-primary" ?disabled=${!this._pick || tags.length >= 10} @click=${() => this.addTag()}>${t("ble_add_button")}</button>
      </div>`;
  }
}

if (!customElements.get("nf-ble-locate")) customElements.define("nf-ble-locate", NfBleLocate);

declare global {
  interface HTMLElementTagNameMap {
    "nf-ble-locate": NfBleLocate;
  }
}
