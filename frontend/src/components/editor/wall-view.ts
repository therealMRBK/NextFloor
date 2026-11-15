// The wall view of the editor: one wall from the front, drawn to scale, with its doors, windows and the furniture against it. Drag a
// piece along the wall (and up or down when it hangs on the wall), or type its distance from the left end and its height; the
// distances to both ends show while something is selected. Every move is one undoable step.

import { LitElement, css, html, nothing, svg, type PropertyValues } from "lit";
import { furnitureName } from "../../furniture-names.ts";
import type { I18nKey } from "../../i18n.ts";
import { openingPreset } from "../../model.ts";
import type { EditorHost } from "./host.ts";
import { furnitureAt, openingAt, wallElevation, wallFrame, type ElevationBox } from "./ops/wall-view.ts";
import { formatLength } from "../../units.ts";

const SNAP = 0.01;
const snap = (v: number) => Math.round(v / SNAP) * SNAP;

export class NfWallView extends LitElement {
  static properties = { host: { attribute: false }, doc: { attribute: false }, roomId: {}, edge: { type: Number }, _sel: { state: true }, _drag: { state: true } };
  /** The plan: a new one after every change makes the view draw again. */
  declare doc: unknown;
  declare host: EditorHost;
  declare roomId: string;
  declare edge: number;
  private declare _sel: string | null;
  /** The box being dragged and where it is now (wall coordinates), before it is stored. */
  private declare _drag: { id: string; x0: number; y0: number; startU: number; startY: number; fromX: number; fromY: number } | null;

  constructor() {
    super();
    this._sel = null;
    this._drag = null;
  }

  private get room() {
    return this.host.floor?.rooms.find((r) => r.id === this.roomId);
  }

  private frame() {
    const room = this.room;
    return room && this.host.floor ? wallFrame(this.host.floor, room, this.edge, this.host.doc.settings.wall_interior) : null;
  }

  private boxes(): ElevationBox[] {
    const room = this.room;
    const frame = this.frame();
    return room && frame && this.host.floor ? wallElevation(this.host.floor, room, frame) : [];
  }

  /** Stores a box at a new left end (and bottom) as one undoable step. */
  private place(box: ElevationBox, left: number, bottom: number | null): void {
    const room = this.room;
    const frame = this.frame();
    if (!room || !frame) return;
    this.host.change((_doc, floor) => {
      if (box.kind === "furniture") {
        const f = floor.furniture.find((it) => it.id === box.id);
        if (f) Object.assign(f, furnitureAt(frame, f, left, box.lifts ? bottom : null));
      } else {
        const o = floor.openings.find((it) => it.id === box.id);
        const owner = floor.rooms.find((r) => r.id === o?.room_id);
        if (o && owner) Object.assign(o, openingAt(owner.id === room.id ? frame : wallFrame(floor, owner, o.edge, this.host.doc.settings.wall_interior), owner, o, left, box.lifts ? bottom : null));
      }
    });
  }

  private toWall(e: PointerEvent): [number, number] {
    const svgEl = this.renderRoot.querySelector("svg") as SVGSVGElement;
    const m = svgEl.getScreenCTM()?.inverse();
    if (!m) return [0, 0];
    const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(m);
    return [p.x, -p.y];
  }

  private down(e: PointerEvent, box: ElevationBox): void {
    this._sel = box.id;
    if (!this.host.admin) return;
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
    const [u, y] = this.toWall(e);
    this._drag = { id: box.id, x0: box.x0, y0: box.y0, startU: u, startY: y, fromX: box.x0, fromY: box.y0 };
  }

  private move(e: PointerEvent, box: ElevationBox): void {
    const d = this._drag;
    if (!d || d.id !== box.id) return;
    const [u, y] = this.toWall(e);
    const frame = this.frame();
    const width = box.x1 - box.x0;
    const x0 = Math.min((frame?.length ?? 0) - width, Math.max(0, snap(d.fromX + u - d.startU)));
    const y0 = box.lifts ? Math.max(0, snap(d.fromY + y - d.startY)) : d.fromY;
    this._drag = { ...d, x0, y0 };
  }

  private up(box: ElevationBox): void {
    const d = this._drag;
    this._drag = null;
    if (!d || d.id !== box.id || (Math.abs(d.x0 - d.fromX) < 1e-6 && Math.abs(d.y0 - d.fromY) < 1e-6)) return;
    this.place(box, d.x0, d.y0);
  }

  private nameOf(box: ElevationBox): string {
    if (box.kind === "furniture") {
      const f = this.host.floor?.furniture.find((it) => it.id === box.id);
      return f?.name || furnitureName(this.host.hass, box.type);
    }
    const o = this.host.floor?.openings.find((it) => it.id === box.id);
    return o ? this.host.t(`preset_${openingPreset(o)}` as I18nKey) : box.type;
  }

  protected updated(changed: PropertyValues): void {
    if (changed.has("edge") || changed.has("roomId")) this._sel = null;
  }

  render() {
    const t = this.host.t;
    const room = this.room;
    const frame = this.frame();
    if (!room || !frame) return nothing;
    const n = room.points.length;
    const fmt = (v: number) => formatLength(this.host.hass, v);
    const boxes = this.boxes().map((b) => (this._drag?.id === b.id ? { ...b, x1: this._drag.x0 + (b.x1 - b.x0), y1: this._drag.y0 + (b.y1 - b.y0), x0: this._drag.x0, y0: this._drag.y0 } : b));
    const top = Math.max(frame.heightLeft, frame.heightRight, ...boxes.map((b) => b.y1));
    const pad = 0.35;
    const view = `${-pad} ${-(top + pad)} ${frame.length + 2 * pad} ${top + 2 * pad + 0.25}`;
    const sel = boxes.find((b) => b.id === this._sel) ?? null;
    const label = (b: ElevationBox) => {
      const size = Math.min(0.14, Math.max(0.07, (b.x1 - b.x0) / 7));
      return svg`<text x=${(b.x0 + b.x1) / 2} y=${-(b.y0 + b.y1) / 2} font-size=${size} text-anchor="middle" dominant-baseline="middle">${this.nameOf(b)}</text>`;
    };
    const dims = sel
      ? svg`<g class="dim">
          <line x1="0" x2=${sel.x0} y1=${-(sel.y0 + sel.y1) / 2} y2=${-(sel.y0 + sel.y1) / 2} />
          <text x=${sel.x0 / 2} y=${-(sel.y0 + sel.y1) / 2 - 0.06} text-anchor="middle" font-size="0.11">${fmt(sel.x0)}</text>
          <line x1=${sel.x1} x2=${frame.length} y1=${-(sel.y0 + sel.y1) / 2} y2=${-(sel.y0 + sel.y1) / 2} />
          <text x=${(sel.x1 + frame.length) / 2} y=${-(sel.y0 + sel.y1) / 2 - 0.06} text-anchor="middle" font-size="0.11">${fmt(frame.length - sel.x1)}</text>
          ${sel.y0 > 0.005 ? svg`<line x1=${(sel.x0 + sel.x1) / 2} x2=${(sel.x0 + sel.x1) / 2} y1="0" y2=${-sel.y0} /><text x=${(sel.x0 + sel.x1) / 2 + 0.05} y=${-sel.y0 / 2} font-size="0.11">${fmt(sel.y0)}</text>` : nothing}
        </g>`
      : nothing;
    return html`<div class="backdrop" @click=${(e: Event) => e.target === e.currentTarget && this.close()}>
      <div class="sheet" role="dialog" aria-label=${t("wall_view")}>
        <header>
          <b>${t("wall_view")} · ${room.name || t("room")} · ${t("wall_n", { a: this.edge + 1, b: ((this.edge + 1) % n) + 1 })}</b>
          <span class="muted">${fmt(frame.length)}</span>
          <span class="grow"></span>
          <button aria-label=${t("wall_view_prev")} title=${t("wall_view_prev")} @click=${() => (this.edge = (this.edge - 1 + n) % n)}>‹</button>
          <button aria-label=${t("wall_view_next")} title=${t("wall_view_next")} @click=${() => (this.edge = (this.edge + 1) % n)}>›</button>
          <button aria-label=${t("close")} @click=${() => this.close()}>✕</button>
        </header>
        <svg viewBox=${view} preserveAspectRatio="xMidYMid meet" @pointerdown=${(e: Event) => e.target === e.currentTarget && (this._sel = null)}>
          <polygon class="wall" points=${`0,0 ${frame.length},0 ${frame.length},${-frame.heightRight} 0,${-frame.heightLeft}`} />
          <line class="floor" x1=${-pad} x2=${frame.length + pad} y1="0" y2="0" />
          ${boxes.map(
            (b) => svg`<g class="box ${b.kind} ${b.type} ${b.id === this._sel ? "sel" : ""} ${this.host.admin ? "movable" : ""}"
              @pointerdown=${(e: PointerEvent) => this.down(e, b)}
              @pointermove=${(e: PointerEvent) => this.move(e, b)}
              @pointerup=${() => this.up(b)}
              @pointercancel=${() => (this._drag = null)}>
              <rect x=${b.x0} y=${-b.y1} width=${Math.max(0.01, b.x1 - b.x0)} height=${Math.max(0.01, b.y1 - b.y0)} rx="0.02" />
              ${label(b)}
            </g>`,
          )}
          ${dims}
        </svg>
        <footer>
          ${sel
            ? html`<b>${this.nameOf(sel)}</b>
                <label
                  >${t("wall_view_left")}
                  <input type="number" step="0.01" min="0" .value=${sel.x0.toFixed(2)} ?disabled=${!this.host.admin} @change=${(e: Event) => this.place(sel, Number((e.target as HTMLInputElement).value), sel.y0)}
                /></label>
                ${sel.lifts
                  ? html`<label
                      >${t(sel.kind === "opening" ? "sill" : "wall_view_height")}
                      <input type="number" step="0.01" min="0" .value=${sel.y0.toFixed(2)} ?disabled=${!this.host.admin} @change=${(e: Event) => this.place(sel, sel.x0, Number((e.target as HTMLInputElement).value))}
                    /></label>`
                  : nothing}`
            : html`<span class="muted">${t("wall_view_hint")}</span>`}
        </footer>
      </div>
    </div>`;
  }

  private close(): void {
    this.dispatchEvent(new CustomEvent("close"));
  }

  static styles = css`
    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 30;
      display: grid;
      place-items: center;
      background: rgba(0, 0, 0, 0.45);
    }
    .sheet {
      width: min(1100px, calc(100vw - 32px));
      max-height: calc(100vh - 32px);
      max-height: calc(100dvh - 32px);
      display: flex;
      flex-direction: column;
      border-radius: 20px;
      background: var(--nf-bg2, #1b2030);
      color: var(--nf-text, #e8eeff);
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
      overflow: hidden;
    }
    header,
    footer {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 16px;
      flex-wrap: wrap;
    }
    header button {
      min-width: 36px;
      height: 36px;
      border: 0;
      border-radius: 50%;
      background: rgba(127, 127, 127, 0.16);
      color: inherit;
      font: inherit;
      font-size: 18px;
      cursor: pointer;
    }
    .grow {
      flex: 1;
    }
    .muted {
      color: var(--nf-muted, #9aa5bd);
      font-size: 13px;
    }
    svg {
      width: 100%;
      height: min(60vh, 560px);
      touch-action: none;
      user-select: none;
    }
    .wall {
      fill: rgba(127, 140, 170, 0.12);
      stroke: var(--nf-accent, #37e0ff);
      stroke-width: 0.015;
    }
    .floor {
      stroke: var(--nf-muted, #9aa5bd);
      stroke-width: 0.02;
    }
    .box rect {
      fill: rgba(91, 124, 255, 0.28);
      stroke: #8aa2ff;
      stroke-width: 0.012;
    }
    .box.opening rect {
      fill: rgba(10, 14, 24, 0.85);
      stroke: var(--nf-muted, #9aa5bd);
    }
    .box.window rect {
      fill: rgba(55, 224, 255, 0.16);
    }
    .box.sel rect {
      stroke: var(--nf-accent, #37e0ff);
      stroke-width: 0.025;
    }
    .box.movable {
      cursor: grab;
    }
    .box text {
      fill: var(--nf-text, #e8eeff);
      pointer-events: none;
    }
    .dim line {
      stroke: var(--nf-accent, #37e0ff);
      stroke-width: 0.01;
      stroke-dasharray: 0.04 0.03;
    }
    .dim text {
      fill: var(--nf-accent, #37e0ff);
    }
    footer label {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      color: var(--nf-muted, #9aa5bd);
    }
    footer input {
      width: 80px;
      padding: 6px 8px;
      border-radius: 10px;
      border: 1px solid rgba(127, 127, 127, 0.35);
      background: rgba(0, 0, 0, 0.2);
      color: inherit;
      font: inherit;
    }
  `;
}

if (!customElements.get("nf-wall-view")) customElements.define("nf-wall-view", NfWallView);
