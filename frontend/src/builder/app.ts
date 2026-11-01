// The furniture builder page: a pack of items built from parts, edited in centimetres beside a 3D view that draws them with
// NextFloor's own furniture code. The pack is kept in the browser, saved as a file NextFloor imports, and shared in the
// community store through a GitHub form (the store's own check turns it into a pull request).

import { css, html, LitElement, nothing, type TemplateResult } from "lit";
import type { FurniturePack, PackItem, PackPart } from "../packs.ts";
import { blocking, checkPack, COLOR_ROLES, exportPack, freeItemId, fromCm, importPack, LIGHTS, MAX_PARTS, MOUNTS, newItem, newPack, newPart, partCm, TEMPLATES, type PartCm, type Problem, type Shape } from "./model.ts";
import { BuilderScene, type ViewPreset } from "./scene.ts";
import { LANG, t, type TextKey } from "./texts.ts";

const STORE_KEY = "nextfloor.builder.pack";
const STORE_REPO = "https://github.com/therealMRBK/NextFloor-Plugins";
/** GitHub keeps URLs to about 8000 characters: a small pack goes into the form by itself, a big one through the clipboard. */
const MAX_URL_PACK = 6000;

function loadStored(): FurniturePack {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    const pack = raw ? importPack(raw) : null;
    if (pack) return pack;
  } catch {
    // private mode or blocked storage: start fresh
  }
  const pack = newPack("");
  pack.items = [TEMPLATES.cabinet()];
  return pack;
}

const round = (v: number, places = 1) => Math.round(v * 10 ** places) / 10 ** places;

export class NfBuilder extends LitElement {
  static properties = {
    _pack: { state: true },
    _item: { state: true },
    _part: { state: true },
    _dialog: { state: true },
    _note: { state: true },
  };

  private declare _pack: FurniturePack;
  private declare _item: number;
  private declare _part: number;
  private declare _dialog: "submit" | null;
  private declare _note: string | null;
  private scene: BuilderScene | null = null;

  constructor() {
    super();
    this._pack = loadStored();
    this._item = 0;
    this._part = -1;
    this._dialog = null;
    this._note = null;
  }

  private get item(): PackItem {
    return this._pack.items[Math.min(this._item, this._pack.items.length - 1)];
  }

  /** Change the pack (on a copy, so Lit sees it), keep it in the browser and draw the item again. */
  private change(fn: (pack: FurniturePack) => void): void {
    const pack = structuredClone(this._pack);
    fn(pack);
    this._pack = pack;
    this._item = Math.min(this._item, pack.items.length - 1);
    try {
      localStorage.setItem(STORE_KEY, exportPack(pack));
    } catch {
      // the pack stays on the page
    }
  }

  private changeItem(fn: (item: PackItem) => void): void {
    this.change((p) => fn(p.items[this._item]));
  }

  private changePart(fn: (part: PackPart) => void): void {
    if (this._part < 0) return;
    this.changeItem((item) => fn(item.parts[this._part]));
  }

  protected firstUpdated(): void {
    const canvas = this.renderRoot.querySelector("canvas")!;
    this.scene = new BuilderScene(canvas);
    this.scene.pick = (i) => (this._part = i);
    this.scene.show(this.item, this._part);
  }

  protected updated(): void {
    this.scene?.show(this.item, this._part);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.scene?.dispose();
    this.scene = null;
  }

  // ---------------------------------------------------------------- actions

  private newPack(): void {
    this._pack = newPack(this._pack.publisher);
    this._item = 0;
    this._part = -1;
    this.change(() => undefined);
  }

  private addItem(template: string): void {
    const made = template === "empty" ? newItem("item", t("item")) : TEMPLATES[template]();
    this.change((p) => {
      made.id = freeItemId(p, made.id);
      p.items.push(made);
    });
    this._item = this._pack.items.length - 1;
    this._part = -1;
  }

  private duplicateItem(): void {
    const copy = structuredClone(this.item);
    this.change((p) => {
      copy.id = freeItemId(p, copy.id);
      p.items.splice(this._item + 1, 0, copy);
    });
    this._item += 1;
  }

  private deleteItem(): void {
    if (this._pack.items.length <= 1) return;
    this.change((p) => p.items.splice(this._item, 1));
    this._item = Math.max(0, this._item - 1);
    this._part = -1;
  }

  private addPart(shape: Shape): void {
    if (this.item.parts.length >= MAX_PARTS) return;
    this.changeItem((item) => item.parts.push(newPart(shape)));
    this._part = this.item.parts.length - 1;
  }

  private duplicatePart(): void {
    if (this._part < 0 || this.item.parts.length >= MAX_PARTS) return;
    // the copy sits a little to the right, so it is seen
    this.changeItem((item) => {
      const copy = structuredClone(item.parts[this._part]);
      copy.x = Math.min(0.5, copy.x + Math.min(0.1, (0.5 - copy.x) / 2));
      item.parts.splice(this._part + 1, 0, copy);
    });
    this._part += 1;
  }

  private deletePart(): void {
    if (this._part < 0 || this.item.parts.length <= 1) return;
    this.changeItem((item) => item.parts.splice(this._part, 1));
    this._part = Math.min(this._part, this.item.parts.length - 1);
  }

  private save(): void {
    const blob = new Blob([exportPack(this._pack)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${this._pack.id || "pack"}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  private open(e: Event): void {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;
    void file.text().then((text) => {
      const pack = importPack(text);
      if (!pack) {
        this._note = t("import_failed");
        return;
      }
      this._pack = pack;
      this._item = 0;
      this._part = -1;
      this.change(() => undefined);
    });
    (e.target as HTMLInputElement).value = "";
  }

  private submitUrl(text: string): string {
    const params = new URLSearchParams({ template: "furniture.yml", title: `Furniture pack: ${this._pack.name}`, labels: "furniture" });
    if (text.length <= MAX_URL_PACK) params.set("pack", text);
    return `${STORE_REPO}/issues/new?${params.toString()}`;
  }

  private async submit(): Promise<void> {
    const text = exportPack(this._pack);
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // the clipboard is blocked: the form still opens, the file can be saved and pasted
    }
    window.open(this.submitUrl(text), "_blank", "noopener");
    this._dialog = null;
  }

  // ---------------------------------------------------------------- fields

  private num(label: string, value: number, set: (v: number) => void, o: { step?: number; min?: number; max?: number } = {}): TemplateResult {
    return html`<label class="field"
      >${label}
      <input type="number" .value=${String(value)} step=${o.step ?? 0.5} min=${o.min ?? nothing} max=${o.max ?? nothing} @change=${(e: Event) => {
        const v = Number((e.target as HTMLInputElement).value);
        if (Number.isFinite(v)) set(v);
      }} />
    </label>`;
  }

  private text(label: string, value: string, set: (v: string) => void, o: { hint?: string; max?: number } = {}): TemplateResult {
    return html`<label class="field wide" title=${o.hint ?? nothing}
      >${label}
      <input type="text" .value=${value} maxlength=${o.max ?? 80} @change=${(e: Event) => set((e.target as HTMLInputElement).value.trim())} />
    </label>`;
  }

  private check(label: string, value: boolean, set: (v: boolean) => void): TemplateResult {
    return html`<label class="check wide"><input type="checkbox" .checked=${value} @change=${(e: Event) => set((e.target as HTMLInputElement).checked)} /> ${label}</label>`;
  }

  private select<T extends string>(label: string, value: T, options: readonly (readonly [T, string])[], set: (v: T) => void): TemplateResult {
    return html`<label class="field"
      >${label}
      <select @change=${(e: Event) => set((e.target as HTMLSelectElement).value as T)}>
        ${options.map(([v, text]) => html`<option value=${v} ?selected=${v === value}>${text}</option>`)}
      </select>
    </label>`;
  }

  /** A colour: a palette role (follows the look) or an own colour. */
  private colorField(label: string, value: string | undefined, set: (v: string | undefined) => void, allowSame = false): TemplateResult {
    const own = !!value && value.startsWith("#");
    const choice = value === undefined ? "" : own ? "#" : value;
    const options: [string, string][] = [...(allowSame ? [["", t("same")] as [string, string]] : []), ...COLOR_ROLES.map((r): [string, string] => [r, t(`r_${r}` as TextKey)]), ["#", t("own_color")]];
    return html`<label class="field"
      >${label}
      <span class="row">
        <select
          @change=${(e: Event) => {
            const v = (e.target as HTMLSelectElement).value;
            set(v === "" ? undefined : v === "#" ? (own ? value : "#8899aa") : v);
          }}
        >
          ${options.map(([v, text]) => html`<option value=${v} ?selected=${v === choice}>${text}</option>`)}
        </select>
        ${own ? html`<input type="color" .value=${value!} @input=${(e: Event) => set((e.target as HTMLInputElement).value)} />` : nothing}
      </span>
    </label>`;
  }

  // ---------------------------------------------------------------- render

  protected render() {
    const problems = checkPack(this._pack);
    const errors = blocking(problems);
    return html`<header>
        <div>
          <h1>${t("title")}</h1>
          <p>${t("subtitle")}</p>
        </div>
        <span class="grow"></span>
        <button @click=${() => this.newPack()}>${t("new_pack")}</button>
        <label class="button">${t("open")}<input type="file" accept=".json,application/json" hidden @change=${(e: Event) => this.open(e)} /></label>
        <button @click=${() => this.save()} ?disabled=${errors.length > 0}>${t("save")}</button>
        <button class="primary" @click=${() => (this._dialog = "submit")}>${t("submit")}</button>
      </header>
      ${this._note ? html`<div class="note" @click=${() => (this._note = null)}>${this._note}</div>` : nothing}
      <main>
        <aside class="left">${this.renderPack()} ${this.renderItems()} ${this.renderItem()}</aside>
        <section class="stage">
          <canvas></canvas>
          <div class="tools">
            <span>${t("add")}</span>
            ${(["box", "cyl", "loft", "sweep"] as Shape[]).map((s) => html`<button @click=${() => this.addPart(s)} ?disabled=${this.item.parts.length >= MAX_PARTS}>${t(`s_${s}` as TextKey)}</button>`)}
          </div>
          <div class="views">
            ${(["iso", "front", "side", "top"] as ViewPreset[]).map((v) => html`<button @click=${() => this.scene?.setView(v)}>${t(`view_${v}` as TextKey)}</button>`)}
            <button @click=${() => this.scene?.zoom(1 / 1.25)} aria-label="+">+</button><button @click=${() => this.scene?.zoom(1.25)} aria-label="−">−</button>
          </div>
          <p class="howto">${t("howto")} ${t("saved_local")}</p>
        </section>
        <aside class="right">${this.renderParts()} ${this.renderPart()}</aside>
      </main>
      <footer>${this.renderProblems(problems)}</footer>
      ${this._dialog === "submit" ? this.renderSubmit(errors) : nothing}`;
  }

  private renderPack() {
    const p = this._pack;
    return html`<h2>${t("pack")}</h2>
      <div class="form">
        ${this.text(t("pack_name"), p.name, (v) => this.change((x) => (x.name = v)))}
        ${this.text(t("publisher"), p.publisher, (v) => this.change((x) => (x.publisher = v)))}
        ${this.text(t("pack_id"), p.id, (v) => this.change((x) => (x.id = v.toLowerCase())), { hint: t("pack_id_hint"), max: 40 })}
        ${this.num(t("release"), p.release ?? 1, (v) => this.change((x) => (x.release = Math.max(1, Math.round(v)))), { step: 1, min: 1 })}
        <label class="field wide"
          >${t("description")}
          <textarea rows="2" maxlength="400" .value=${p.description ?? ""} @change=${(e: Event) => this.change((x) => (x.description = (e.target as HTMLTextAreaElement).value.trim()))}></textarea>
        </label>
      </div>`;
  }

  private renderItems() {
    return html`<h2>${t("items")}</h2>
      <div class="list">
        ${this._pack.items.map(
          (item, i) => html`<button class="entry" aria-pressed=${i === this._item} @click=${() => ((this._item = i), (this._part = -1))}>${item.name[LANG] || item.name.en || item.id}</button>`,
        )}
      </div>
      <div class="row">
        <select
          @change=${(e: Event) => {
            const v = (e.target as HTMLSelectElement).value;
            (e.target as HTMLSelectElement).value = "";
            if (v) this.addItem(v);
          }}
        >
          <option value="">${t("add_item")}</option>
          ${["empty", ...Object.keys(TEMPLATES)].map((k) => html`<option value=${k}>${t(`t_${k}` as TextKey)}</option>`)}
        </select>
        <button @click=${() => this.duplicateItem()}>${t("duplicate")}</button>
        <button class="danger" @click=${() => this.deleteItem()} ?disabled=${this._pack.items.length <= 1}>${t("delete")}</button>
      </div>`;
  }

  private renderItem() {
    const item = this.item;
    const [w, d, h] = item.size;
    const size = (i: 0 | 1 | 2) => (v: number) => this.changeItem((it) => (it.size[i] = Math.min(10, Math.max(0.01, v / 100))));
    return html`<h2>${t("item")}</h2>
      <div class="form">
        ${this.text(t("name_de"), item.name.de ?? "", (v) => this.changeItem((it) => (it.name = { ...it.name, de: v })))}
        ${this.text(t("name_en"), item.name.en ?? "", (v) => this.changeItem((it) => (it.name = { ...it.name, en: v })))}
        ${this.text(t("item_id"), item.id, (v) => this.changeItem((it) => (it.id = v.toLowerCase())), { max: 40 })}
        ${this.num(t("width"), round(w * 100), size(0), { step: 1, min: 1 })} ${this.num(t("depth"), round(d * 100), size(1), { step: 1, min: 1 })}
        ${this.num(t("height"), round(h * 100), size(2), { step: 1, min: 1 })}
        ${this.select(t("mount"), item.mount ?? "floor", MOUNTS.map((m) => [m, t(`mount_${m}` as TextKey)] as const), (v) => this.changeItem((it) => (it.mount = v === "floor" ? undefined : v)))}
        ${item.mount === "wall" ? this.num(t("wall_y"), round((item.wall_y ?? 1) * 100), (v) => this.changeItem((it) => (it.wall_y = Math.min(3, Math.max(0, v / 100)))), { step: 1, min: 0 }) : nothing}
        ${this.select(t("light"), item.light ?? "", [["", t("light_none")], ...LIGHTS.map((l) => [l, l] as const)], (v) => this.changeItem((it) => (it.light = (v || undefined) as PackItem["light"])))}
        ${this.check(t("electric"), !!item.electric, (v) => this.changeItem((it) => (it.electric = v || undefined)))}
        ${this.check(t("surface"), !!item.surface, (v) => this.changeItem((it) => (it.surface = v || undefined)))}
        ${this.check(t("stretch"), !!item.stretch, (v) => this.changeItem((it) => (it.stretch = v || undefined)))}
      </div>`;
  }

  private renderParts() {
    return html`<h2>${t("parts")} (${this.item.parts.length}/${MAX_PARTS})</h2>
      <div class="list parts">
        ${this.item.parts.map(
          (p, i) => html`<button class="entry" aria-pressed=${i === this._part} @click=${() => (this._part = i)}>
            <span class="swatch" style=${`background:${p.color.startsWith("#") ? p.color : `var(--role-${p.color})`}`}></span>${t(`s_${p.shape}` as TextKey)} ${i + 1}
          </button>`,
        )}
      </div>`;
  }

  private renderPart() {
    if (this._part < 0 || !this.item.parts[this._part]) return html`<p class="muted">${t("no_part")}</p>`;
    const part = this.item.parts[this._part];
    const cm = partCm(part, this.item.size);
    const set = (key: keyof PartCm) => (v: number) => this.changePart((p) => (p[key] = fromCm(key, v, this.item.size)));
    const pct = (v: number | undefined, fallback: number) => round((v ?? fallback) * 100);
    return html`<h2>${t("part")} ${this._part + 1}</h2>
      <div class="form">
        ${this.num(t("x"), cm.x, set("x"))} ${this.num(t("z"), cm.z, set("z"))} ${this.num(t("y"), cm.y, set("y"))} ${this.num(t("w"), cm.w, set("w"), { min: 0.1 })}
        ${this.num(t("d"), cm.d, set("d"), { min: 0.1 })} ${this.num(t("h"), cm.h, set("h"), { min: 0.1 })}
        ${this.num(t("rot"), part.rot ?? 0, (v) => this.changePart((p) => (p.rot = v ? Math.max(-360, Math.min(360, v)) : undefined)), { step: 5 })}
        ${part.shape === "cyl" ? this.select(t("axis"), part.axis ?? "y", (["y", "x", "z"] as const).map((a) => [a, t(`axis_${a}` as TextKey)] as const), (v) => this.changePart((p) => (p.axis = v === "y" ? undefined : v))) : nothing}
        ${part.shape === "loft"
          ? html`${this.num(t("top_w"), pct(part.tw, part.w), (v) => this.changePart((p) => (p.tw = Math.min(1, Math.max(0.001, v / 100)))), { step: 1 })}
            ${this.num(t("top_d"), pct(part.td, part.d), (v) => this.changePart((p) => (p.td = Math.min(1, Math.max(0.001, v / 100)))), { step: 1 })}
            ${this.num(t("top_x"), pct(part.tx, part.x), (v) => this.changePart((p) => (p.tx = Math.min(0.5, Math.max(-0.5, v / 100)))), { step: 1 })}`
          : nothing}
        ${part.shape === "sweep" ? this.renderStations(part) : nothing}
        ${this.colorField(t("color"), part.color, (v) => this.changePart((p) => (p.color = v ?? "body")))}
        ${this.colorField(t("top"), part.top, (v) => this.changePart((p) => (p.top = v)), true)}
        ${this.select(
          t("edges"),
          part.edges === true ? "soft" : part.edges ? part.edges : "none",
          [["none", t("edges_none")], ["soft", t("edges_soft")], ["glow", t("edges_glow")], ["faint", t("edges_faint")]] as const,
          (v) => this.changePart((p) => (p.edges = v === "none" ? undefined : v === "soft" ? true : v)),
        )}
        ${this.check(t("glow"), !!part.glow, (v) => this.changePart((p) => (p.glow = v || undefined)))}
        ${this.check(t("screen"), !!part.screen, (v) => this.changePart((p) => (p.screen = v || undefined)))}
      </div>
      <p class="muted">${t("colors_role")}</p>
      <div class="row">
        <button @click=${() => this.duplicatePart()} ?disabled=${this.item.parts.length >= MAX_PARTS}>${t("duplicate")}</button>
        <button class="danger" @click=${() => this.deletePart()} ?disabled=${this.item.parts.length <= 1}>${t("delete")}</button>
      </div>`;
  }

  private renderStations(part: PackPart) {
    const stations = part.stations ?? [];
    const setStation = (i: number, k: number, v: number) =>
      this.changePart((p) => {
        const s = p.stations![i];
        s[k] = k === 0 ? Math.min(0.5, Math.max(-0.5, v / 100)) : k === 3 ? Math.min(1, Math.max(0.001, v / 100)) : Math.min(1, Math.max(0, v / 100));
      });
    return html`${this.num(t("exp"), part.exp ?? 2.6, (v) => this.changePart((p) => (p.exp = Math.min(8, Math.max(1.5, v)))), { step: 0.1 })}
      <div class="wide stations">
        <span class="muted">${t("stations")}: ${t("station")}</span>
        ${stations.map(
          (s, i) => html`<div class="row">
            ${s.map((v, k) => html`<input type="number" step="1" .value=${String(round(v * 100))} @change=${(e: Event) => setStation(i, k, Number((e.target as HTMLInputElement).value))} />`)}
            <button class="danger" ?disabled=${stations.length <= 2} @click=${() => this.changePart((p) => p.stations!.splice(i, 1))}>×</button>
          </div>`,
        )}
        <button
          ?disabled=${stations.length >= 48}
          @click=${() =>
            this.changePart((p) => {
              const last = p.stations![p.stations!.length - 1];
              p.stations!.push([Math.min(0.5, last[0] + 0.1), last[1], last[2], last[3]]);
              p.stations!.sort((a, b) => a[0] - b[0]);
            })}
        >
          ${t("add_station")}
        </button>
      </div>`;
  }

  private renderProblems(problems: Problem[]) {
    if (!problems.length) return html`<p class="ok">✓ ${t("ok")}</p>`;
    const where = (w: string) => {
      if (w === "pack") return t("where_pack");
      const [, i, , k] = w.match(/item:(\d+)(\/part:(\d+))?/) ?? [];
      const item = this._pack.items[Number(i)];
      const name = item ? item.name[LANG] || item.id : "?";
      return k === undefined ? name : `${name} · ${t("part")} ${Number(k) + 1}`;
    };
    return html`<h2>${t("check")}</h2>
      <ul>
        ${problems.map((p) => html`<li class=${p.key === "outside" ? "warn" : "error"}><b>${where(p.where)}</b>: ${t(p.key as TextKey, p.vars)}</li>`)}
      </ul>`;
  }

  private renderSubmit(errors: Problem[]) {
    return html`<div class="dialog" role="dialog" aria-modal="true">
      <div class="box">
        <h2>${t("submit")}</h2>
        ${errors.length ? html`<p class="error">${t("submit_blocked")}</p>` : html`<p>${t("submit_steps")}</p>`}
        <div class="row">
          <button class="primary" ?disabled=${errors.length > 0} @click=${() => void this.submit()}>${t("submit_go")}</button>
          <button @click=${() => (this._dialog = null)}>${t("close")}</button>
        </div>
      </div>
    </div>`;
  }

  static styles = css`
    :host {
      --bg: #0b1020;
      --panel: #121a2e;
      --line: #24314f;
      --text: #e6ecff;
      --muted: #8d9bbd;
      --accent: #37e0ff;
      --danger: #ff6b7a;
      --role-body: #3a4a6a;
      --role-fabric: #4b5d8c;
      --role-cushion: #6a7fb3;
      --role-wood: #8a6a4a;
      --role-white: #dfe6f2;
      --role-metal: #9aa7bf;
      --role-dark: #1e2638;
      --role-glass: #7fd0e8;
      --role-plant: #3f9a5a;
      --role-pot: #a5674a;
      --role-accent: #37e0ff;
      display: flex;
      flex-direction: column;
      height: 100vh;
      height: 100dvh;
      background: var(--bg);
      color: var(--text);
      font: 14px/1.4 system-ui, sans-serif;
    }
    header {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      border-bottom: 1px solid var(--line);
    }
    h1 {
      margin: 0;
      font-size: 18px;
    }
    header p {
      margin: 2px 0 0;
      color: var(--muted);
      font-size: 13px;
    }
    h2 {
      margin: 14px 0 6px;
      font-size: 12px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--muted);
    }
    .grow {
      flex: 1;
    }
    main {
      flex: 1;
      display: grid;
      grid-template-columns: 300px 1fr 300px;
      min-height: 0;
    }
    aside {
      overflow: auto;
      padding: 0 14px 14px;
      background: var(--panel);
    }
    .left {
      border-right: 1px solid var(--line);
    }
    .right {
      border-left: 1px solid var(--line);
    }
    .stage {
      position: relative;
      min-width: 0;
    }
    canvas {
      width: 100%;
      height: 100%;
      display: block;
      touch-action: none;
    }
    .tools,
    .views {
      position: absolute;
      left: 12px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 6px;
    }
    .tools {
      top: 12px;
    }
    .views {
      bottom: 40px;
    }
    .howto {
      position: absolute;
      left: 12px;
      right: 12px;
      bottom: 6px;
      margin: 0;
      color: var(--muted);
      font-size: 12px;
    }
    .form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
    .field {
      display: grid;
      gap: 3px;
      font-size: 12px;
      color: var(--muted);
      min-width: 0;
    }
    .wide {
      grid-column: 1 / -1;
    }
    .check {
      display: flex;
      gap: 8px;
      align-items: center;
      font-size: 13px;
    }
    input,
    select,
    textarea {
      font: inherit;
      color: var(--text);
      background: var(--bg);
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 6px 8px;
      min-width: 0;
    }
    input[type="color"] {
      padding: 0;
      width: 36px;
      height: 32px;
    }
    input[type="checkbox"] {
      accent-color: var(--accent);
    }
    button,
    .button {
      font: inherit;
      color: var(--text);
      background: #1b2640;
      border: 1px solid var(--line);
      border-radius: 10px;
      padding: 7px 12px;
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.45;
      cursor: default;
    }
    .primary {
      background: var(--accent);
      color: #04121a;
      border-color: var(--accent);
      font-weight: 600;
    }
    .danger {
      color: var(--danger);
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      align-items: center;
      margin-top: 8px;
    }
    .list {
      display: grid;
      gap: 4px;
    }
    .entry {
      text-align: left;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .entry[aria-pressed="true"] {
      border-color: var(--accent);
      color: var(--accent);
    }
    .swatch {
      width: 12px;
      height: 12px;
      border-radius: 3px;
      border: 1px solid var(--line);
    }
    .stations .row input {
      width: 58px;
    }
    .muted {
      color: var(--muted);
      font-size: 12px;
    }
    footer {
      max-height: 22vh;
      overflow: auto;
      padding: 0 16px 10px;
      border-top: 1px solid var(--line);
    }
    footer ul {
      margin: 0;
      padding-left: 18px;
    }
    .error {
      color: var(--danger);
    }
    .warn {
      color: #ffb547;
    }
    .ok {
      color: #6ee7a0;
    }
    .note {
      padding: 8px 16px;
      background: #3a1d24;
      color: var(--danger);
      cursor: pointer;
    }
    .dialog {
      position: fixed;
      inset: 0;
      display: grid;
      place-items: center;
      background: rgba(0, 0, 0, 0.55);
    }
    .dialog .box {
      max-width: 520px;
      margin: 16px;
      padding: 18px;
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 16px;
    }
    @media (max-width: 900px) {
      :host {
        height: auto;
      }
      main {
        grid-template-columns: 1fr;
      }
      .stage {
        height: 60vh;
        order: -1;
      }
      .left,
      .right {
        border: 0;
      }
    }
  `;
}

customElements.define("nf-builder", NfBuilder);
