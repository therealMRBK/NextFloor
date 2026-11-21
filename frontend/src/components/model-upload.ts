// "Your own 3D models" on the extensions page: pick a binary glTF for an item that names a model, see how it will look, turn its front
// towards the viewer, mark the body paint, choose how detailed it stays, and put it on Home Assistant, all in the browser.

import { css, html, LitElement, nothing, type TemplateResult } from "lit";
import { importPack } from "../api.ts";
import { translate, type I18nKey } from "../i18n.ts";
import { load3d } from "../load3d.ts";
import { DETAIL_LEVELS, MAX_UPLOAD_BYTES, meshPath, modelSlots, readableSize, trianglesFor, uploadProblem, type DetailKey, type ModelSlot } from "../model-slots.ts";
import type { FurniturePack } from "../packs.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";
import type { ModelInfo } from "../viewer/viewer3d.ts";

type Present = "unknown" | "yes" | "no";

interface Draft {
  slot: ModelSlot;
  /** True when creating a brand-new item in custom.library instead of replacing an existing slot. */
  isNewLibraryItem?: boolean;
  customName?: string;
  customSize?: [number, number, number];
  fileName: string;
  data: ArrayBuffer;
  info: ModelInfo;
  turns: 0 | 1 | 2 | 3;
  paint: string[];
  detail: DetailKey;
  colour: string;
  /** The prepared file and the picture of it. */
  result: { glb: ArrayBuffer; triangles: number; picture: string } | null;
}

export class NfModelUpload extends LitElement {
  static properties = {
    hass: { attribute: false },
    packs: { attribute: false },
    _present: { state: true },
    _draft: { state: true },
    _busy: { state: true },
    _message: { state: true },
  };

  declare hass: HomeAssistant | undefined;
  declare packs: FurniturePack[] | undefined;
  private declare _present: Record<string, Present>;
  private declare _draft: Draft | null;
  private declare _busy: boolean;
  private declare _message: { ok: boolean; text: string } | null;
  private checked = new Set<string>();
  private run = 0;

  constructor() {
    super();
    this._present = {};
    this._draft = null;
    this._busy = false;
    this._message = null;
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  private get slots(): ModelSlot[] {
    return modelSlots(this.packs ?? [], this.hass?.language ?? "en");
  }

  protected willUpdate(): void {
    // which models are there already: asked once per model
    for (const slot of this.slots) {
      if (this.checked.has(slot.id) || !this.hass?.fetchWithAuth) continue;
      this.checked.add(slot.id);
      void this.askPresence(slot.id);
    }
  }

  private async askPresence(id: string): Promise<void> {
    const answer = await this.hass!.fetchWithAuth!(meshPath(id), { method: "HEAD" }).catch(() => null);
    // the server answers a GET only: a HEAD may be refused, so fall back to asking for the file
    const found = answer && answer.status !== 405 ? answer.ok : await this.hass!.fetchWithAuth!(meshPath(id)).then((r) => r.ok, () => false);
    this._present = { ...this._present, [id]: found ? "yes" : "no" };
  }

  // choosing a file

  private async chooseLibraryModel(file: File | undefined): Promise<void> {
    if (!file) return;
    this._message = null;
    this._busy = true;
    try {
      const data = await file.arrayBuffer();
      const viewer = await load3d();
      const info = await viewer.inspectModel(data);
      const base = file.name.replace(/\.[^.]+$/, "").trim() || "3D-Modell";
      const slug = base.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "").slice(0, 24) || "item";
      const suffix = Date.now().toString(36).slice(-6);
      const meshId = `lib_${slug}_${suffix}`.slice(0, 48);
      const size: [number, number, number] = [
        Math.max(0.05, Math.round(info.size[0] * 100) / 100),
        Math.max(0.05, Math.round(info.size[2] * 100) / 100),
        Math.max(0.05, Math.round(info.size[1] * 100) / 100),
      ];
      this._draft = {
        slot: { id: meshId, items: [base] },
        isNewLibraryItem: true,
        customName: base,
        customSize: size,
        fileName: file.name,
        data,
        info,
        turns: 0,
        paint: info.paint,
        detail: "normal",
        colour: "#8b7355",
        result: null,
      };
      await this.refresh();
    } catch (err) {
      this._message = { ok: false, text: String((err as Error)?.message ?? err) };
    } finally {
      this._busy = false;
    }
  }

  private async choose(slot: ModelSlot, file: File | undefined): Promise<void> {
    if (!file) return;
    this._message = null;
    this._busy = true;
    try {
      const data = await file.arrayBuffer();
      const viewer = await load3d();
      const info = await viewer.inspectModel(data);
      this._draft = { slot, fileName: file.name, data, info, turns: 0, paint: info.paint, detail: "normal", colour: "#1d5bd6", result: null };
      await this.refresh();
    } catch (err) {
      this._draft = null;
      this._message = { ok: false, text: this.readError(err) };
    } finally {
      this._busy = false;
    }
  }

  private readError(err: unknown): string {
    const reason = (err as { reason?: string })?.reason;
    const key = `model_error_${reason}` as I18nKey;
    const text = this.t(key);
    return text === key ? this.t("model_error_unreadable", { detail: String((err as Error)?.message ?? err) }) : text;
  }

  /** Prepares the file with the current choices and draws a picture of the result. */
  private async refresh(): Promise<void> {
    const draft = this._draft;
    if (!draft) return;
    const mine = ++this.run;
    this._busy = true;
    try {
      const viewer = await load3d();
      const { glb, triangles } = await viewer.prepareModel(draft.data, { turns: draft.turns, paint: draft.paint, maxTriangles: trianglesFor(draft.detail) });
      const picture = await viewer.previewModel(glb, draft.colour);
      if (mine === this.run && this._draft === draft) this._draft = { ...draft, result: { glb, triangles, picture } };
    } catch (err) {
      if (mine === this.run) this._message = { ok: false, text: this.readError(err) };
    } finally {
      if (mine === this.run) this._busy = false;
    }
  }

  private change(patch: Partial<Draft>): void {
    if (!this._draft) return;
    this._draft = { ...this._draft, ...patch };
    void this.refresh();
  }

  private turn(delta: 1 | -1): void {
    if (this._draft) this.change({ turns: ((this._draft.turns + delta + 4) % 4) as Draft["turns"] });
  }

  private togglePaint(name: string, on: boolean): void {
    if (!this._draft) return;
    const rest = this._draft.paint.filter((n) => n !== name);
    this.change({ paint: on ? [...rest, name] : rest });
  }

  // uploading and removing

  private async upload(): Promise<void> {
    const draft = this._draft;
    if (!draft?.result || !this.hass?.fetchWithAuth) return;
    if (draft.result.glb.byteLength > MAX_UPLOAD_BYTES) {
      this._message = { ok: false, text: this.t("model_error_too_large", { max: readableSize(MAX_UPLOAD_BYTES) }) };
      return;
    }
    this._busy = true;
    try {
      const answer = await this.hass.fetchWithAuth(meshPath(draft.slot.id), { method: "POST", body: draft.result.glb });
      const problem = uploadProblem(answer.status);
      if (problem) {
        this._message = { ok: false, text: this.t(`model_upload_${problem}` as I18nKey, { max: readableSize(MAX_UPLOAD_BYTES) }) };
        return;
      }
      this._present = { ...this._present, [draft.slot.id]: "yes" };
      if (draft.isNewLibraryItem) {
        const existing = (this.packs ?? []).find((p) => p.id === "custom.library");
        const prevItems = existing?.items ?? [];
        const name = (draft.customName || draft.slot.items[0]).slice(0, 80);
        const size = draft.customSize ?? [1, 1, 1];
        const newItem = {
          id: draft.slot.id,
          name: { en: name, sv: name, de: name },
          size,
          mesh: draft.slot.id,
          parts: [{ shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "body" }],
        };
        const packPayload = {
          format: "nfpack",
          version: 1,
          id: "custom.library",
          name: "Egna 3D-möbler",
          publisher: "Custom",
          release: Math.max(1, (existing?.release ?? 0) + 1),
          items: [...prevItems, newItem],
        };
        await importPack(this.hass, JSON.stringify(packPayload));
        this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true }));
      }
      this._message = { ok: true, text: this.t("model_uploaded", { id: draft.slot.id, size: readableSize(draft.result.glb.byteLength) }) };
      this._draft = null;
    } catch (err) {
      this._message = { ok: false, text: this.t("model_upload_other", { detail: String((err as Error)?.message ?? err) }) };
    } finally {
      this._busy = false;
    }
  }

  private async removeModel(slot: ModelSlot): Promise<void> {
    if (!this.hass?.fetchWithAuth || !confirm(this.t("model_remove_confirm", { id: slot.id }))) return;
    const answer = await this.hass.fetchWithAuth(meshPath(slot.id), { method: "DELETE" });
    const problem = uploadProblem(answer.status);
    this._present = { ...this._present, [slot.id]: problem ? this._present[slot.id] : "no" };
    this._message = problem ? { ok: false, text: this.t(`model_upload_${problem}` as I18nKey, { max: readableSize(MAX_UPLOAD_BYTES) }) } : { ok: true, text: this.t("model_removed", { id: slot.id }) };
  }

  // drawing

  private row(slot: ModelSlot): TemplateResult {
    const present = this._present[slot.id] ?? "unknown";
    const state = present === "yes" ? this.t("model_present") : present === "no" ? this.t("model_missing") : "…";
    return html`<div class="nf-model">
      <div>
        <b>${slot.items[0]}</b>${slot.items.length > 1 ? html` <span class="nf-sub">+${slot.items.length - 1}</span>` : nothing}
        <span class="nf-sub">${slot.id}.glb · <span class="nf-model-${present}">${state}</span></span>
      </div>
      <div class="nf-model-actions">
        <label class="nf-btn nf-primary">
          ${this.t(present === "yes" ? "model_replace" : "model_add")}
          <input type="file" accept=".glb,.gltf,.dae,.obj,.stl,model/gltf-binary,model/gltf+json" hidden @change=${(e: Event) => this.picked(slot, e)} />
        </label>
        ${present === "yes" ? html`<button class="nf-btn nf-danger" @click=${() => this.removeModel(slot)}>${this.t("model_remove")}</button>` : nothing}
      </div>
    </div>`;
  }

  private picked(slot: ModelSlot, e: Event): void {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    void this.choose(slot, file);
  }

  private editor(draft: Draft): TemplateResult {
    const { info, result } = draft;
    const dimensions = info.size.map((v) => v.toFixed(2)).join(" × ");
    return html`<section class="nf-model-edit">
      <h4>${draft.slot.items[0]}</h4>
      <p class="nf-sub">${draft.fileName} · ${this.t("model_info", { triangles: info.triangles.toLocaleString(this.hass?.language), size: dimensions })}</p>
      <div class="nf-model-body">
        <div class="nf-model-picture">${result ? html`<img src=${result.picture} alt="" />` : html`<span class="nf-sub">${this.t("loading")}</span>`}</div>
        <div class="nf-model-options">
          ${draft.isNewLibraryItem
            ? html`<label class="nf-field">${this.t("furn_name")}<input type="text" maxlength="60" .value=${draft.customName ?? ""} @input=${(e: Event) => (this._draft = { ...draft, customName: (e.target as HTMLInputElement).value })} /></label>`
            : nothing}
          <div class="nf-field">
            <span>${this.t("model_front")}</span>
            <div class="nf-actions">
              <button class="nf-btn" @click=${() => this.turn(-1)}>↺ 90°</button>
              <button class="nf-btn" @click=${() => this.turn(1)}>↻ 90°</button>
            </div>
            <small class="nf-sub">${this.t("model_front_hint")}</small>
          </div>
          <div class="nf-field">
            <span>${this.t("model_paint")}</span>
            ${info.materials.map(
              (m) => html`<label class="nf-check"><input type="checkbox" .checked=${draft.paint.includes(m.name)} @change=${(e: Event) => this.togglePaint(m.name, (e.target as HTMLInputElement).checked)} /> ${m.name}</label>`,
            )}
            <label class="nf-check"><input type="color" .value=${draft.colour} @change=${(e: Event) => this.change({ colour: (e.target as HTMLInputElement).value })} /> ${this.t("model_paint_preview")}</label>
          </div>
          <div class="nf-field">
            <span>${this.t("model_detail")}</span>
            <div class="nf-seg">${DETAIL_LEVELS.map((l) => html`<button aria-pressed=${draft.detail === l.key} @click=${() => this.change({ detail: l.key })}>${this.t(`model_detail_${l.key}` as I18nKey)}</button>`)}</div>
            ${result ? html`<small class="nf-sub">${this.t("model_result", { triangles: result.triangles.toLocaleString(this.hass?.language), size: readableSize(result.glb.byteLength) })}</small>` : nothing}
          </div>
        </div>
      </div>
      <div class="nf-actions">
        <button class="nf-btn nf-primary" ?disabled=${!result || this._busy} @click=${() => this.upload()}>${this.t("model_upload")}</button>
        <button class="nf-btn" @click=${() => (this._draft = null)}>${this.t("cancel")}</button>
      </div>
    </section>`;
  }

  protected render() {
    const slots = this.slots;
    if (slots.length === 0 || !(this.hass?.user?.is_admin ?? false)) return nothing;
    return html`<section class="nf-ext-card">
      <h3>${this.t("models")}</h3>
      <p class="nf-sub">${this.t("models_hint")}</p>
      <div class="nf-model">
        <div>
          <b>➕ ${this.t("model_add_library")}</b>
          <span class="nf-sub">${this.t("model_add_library_hint")}</span>
        </div>
        <div class="nf-model-actions">
          <label class="nf-btn nf-primary">
            ${this.t("model_add_library_btn")}
            <input type="file" accept=".glb,.gltf,.dae,.obj,.stl,model/gltf-binary,model/gltf+json" hidden @change=${(e: Event) => {
              const input = e.target as HTMLInputElement;
              const f = input.files?.[0];
              input.value = "";
              void this.chooseLibraryModel(f);
            }} />
          </label>
        </div>
      </div>
      ${slots.map((slot) => this.row(slot))}
      ${this._draft ? this.editor(this._draft) : nothing}
      ${this._busy && !this._draft ? html`<p class="nf-sub">${this.t("loading")}</p>` : nothing}
      ${this._message ? html`<p class="nf-sub ${this._message.ok ? "nf-notice" : "nf-pack-error"}">${this._message.text}</p>` : nothing}
      <p class="nf-sub">${this.t("models_licence")}</p>
    </section>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      :host {
        display: block;
      }
      .nf-model {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 8px 12px;
        padding: 8px 0;
        border-top: 1px solid var(--nf-line);
      }
      .nf-model > div:first-child {
        display: grid;
        gap: 2px;
      }
      .nf-model-actions {
        display: flex;
        gap: 8px;
      }
      .nf-model-yes {
        color: #41c46b;
      }
      .nf-model-no {
        color: var(--nf-muted);
      }
      .nf-model-edit {
        margin-top: 10px;
        padding: 12px;
        border: 1px solid var(--nf-line);
        border-radius: 12px;
      }
      .nf-model-body {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
      }
      .nf-model-picture {
        display: grid;
        place-items: center;
        width: 220px;
        height: 220px;
        border-radius: 12px;
        background: var(--nf-chrome-solid);
      }
      .nf-model-picture img {
        width: 220px;
        height: 220px;
      }
      .nf-model-options {
        display: grid;
        flex: 1;
        min-width: 220px;
        gap: 10px;
        align-content: start;
      }
      .nf-field {
        display: grid;
        gap: 4px;
      }
    `,
  ];
}

if (!customElements.get("nf-model-upload")) customElements.define("nf-model-upload", NfModelUpload);
