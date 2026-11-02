// The wall list in the room form: one row per wall (or per part of a wall another room splits) with its height, thickness, and the
// buttons to remove, cut or join it. Hovering a row lights the wall up in the plan.

import { html, nothing, type TemplateResult } from "lit";
import type { Room } from "../../../model.ts";
import { hint, numberField } from "../fields.ts";
import type { EditorHost } from "../host.ts";
import { edgeLength, thicknessFromTyped } from "../ops/edges.ts";
import { formatLength } from "../../../units.ts";
import { arcButton, arcRow, type ArcActions } from "./arc.ts";

export interface EdgeActions {
  /** Shows the wall from the front, with its doors, windows and furniture. */
  openWall(room: Room, edge: number): void;
  /** Where the parts of a wall start, along it; one part when it is whole. */
  partsOf(room: Room, edge: number): number[];
  /** Whether the wall is an outer wall (it then has the outer default thickness). */
  isOuter(room: Room, edge: number): boolean;
  setHeight(room: Room, edge: number, part: number | undefined, height: number | null): void;
  /** Makes the whole wall slope: its height at the start and at the end of the edge (either may be above the floor height). */
  setSlope(room: Room, edge: number, start: number, end: number): void;
  /** Makes a sloping wall level again. */
  clearSlope(room: Room, edge: number): void;
  setThickness(room: Room, edge: number, thickness: number | null): void;
  /** Bending a wall into an arc (the key of a room wall is `room:<id>:<edge>`). */
  arc: ArcActions;
  cut(room: Room, edge: number, part: number | undefined): void;
  moveCut(room: Room, edge: number, from: number, to: number): void;
  join(room: Room, edge: number, at: number, part: number): void;
  /** The wall highlighted in the plan. */
  lit: number | null;
  light(edge: number | null): void;
}

const FULL_STEP = 0.005;

/** The key of a room wall in the arc row. */
export const arcKey = (room: Room, edge: number): string => `room:${room.id}:${edge}`;

export function renderEdgeHeights(host: EditorHost, room: Room, actions: EdgeActions): TemplateResult {
  const t = host.t;
  // a room with its own ceiling: its walls are "full" at that height
  const floorHeight = room.ceiling ?? host.floor!.height;
  const count = room.points.length;
  const { wall_exterior, wall_interior } = host.doc.settings;
  const rowsOf = (edge: number) => {
    const entry = room.wall_heights?.[edge] ?? null;
    const starts = actions.partsOf(room, edge);
    const parts: (number | undefined)[] = starts.length > 1 ? starts.map((_, k) => k) : [undefined];
    return parts.map((part) => {
      const height = Array.isArray(entry) ? (entry[part ?? 0] ?? null) : entry;
      const length = part === undefined ? edgeLength(room, edge) : (starts[part + 1] ?? edgeLength(room, edge)) - starts[part];
      const set = (v: number | null) => actions.setHeight(room, edge, part, v);
      const standard = actions.isOuter(room, edge) ? wall_exterior : wall_interior;
      const title = `${t("wall_n", { a: edge + 1, b: ((edge + 1) % count) + 1 })}${part === undefined ? "" : ` · ${t("wall_part", { n: part + 1 })}`}`;
      const cutHere = part !== undefined && part > 0 && (room.wall_splits?.[edge] ?? []).some((d) => Math.abs(d - starts[part]) < 1e-3);
      const slopeEnd = room.wall_slopes?.[edge];
      const sloping = part === undefined && typeof slopeEnd === "number" && typeof entry === "number";
      const start = height ?? floorHeight;
      const light = () => actions.light(edge);
      const dark = () => actions.light(null);
      return html`<div class="nf-edge-height${edge === actions.lit ? " nf-edge-on" : ""}${height !== null ? " nf-edge-low" : ""}" @mouseenter=${light} @mouseleave=${dark} @focusin=${light} @focusout=${dark}>
        <span><b>${title}</b><br /><span class="nf-muted">${formatLength(host.hass, length)}</span></span>
        ${height === 0
          ? html`<span class="nf-muted">${t("wall_none")}</span>`
          : sloping
            ? html`<span class="nf-wide nf-split-row" title=${t("wall_slope_hint")}
                >${numberField(host, t("wall_slope_start"), entry as number, (v) => actions.setSlope(room, edge, v, slopeEnd as number), 0.05, 0.05)}
                ${numberField(host, t("wall_slope_end"), slopeEnd as number, (v) => actions.setSlope(room, edge, entry as number, v), 0.05, 0.05)}</span
              >`
            : numberField(host, t("wall_height"), start, (v) => set(v >= floorHeight - FULL_STEP ? null : Math.max(0.05, v)), 0.05, 0.05)}
        ${host.admin && sloping ? html`<button class="nf-btn" title=${t("wall_slope_off")} @click=${() => actions.clearSlope(room, edge)}>▭</button>` : nothing}
        ${host.admin && height !== null && !sloping ? html`<button class="nf-btn" title=${t("wall_height_full")} @click=${() => set(null)}>↥</button>` : nothing}
        ${host.admin && part === undefined && height !== 0 && !sloping
          ? html`<button class="nf-btn" title=${t("wall_slope_hint")} @click=${() => actions.setSlope(room, edge, start, start >= floorHeight - FULL_STEP ? start + 1 : floorHeight)}>∠ ${t("wall_slope")}</button>`
          : nothing}
        ${host.admin && height !== 0 ? html`<button class="nf-btn" title=${t("wall_none_hint")} @click=${() => set(0)}>${t("wall_none")}</button>` : nothing}
        ${host.admin && length >= 0.4 ? html`<button class="nf-btn" title=${t("wall_split_hint")} @click=${() => actions.cut(room, edge, part)}>✂</button>` : nothing}
        ${part === undefined && length >= 0.4 ? arcButton(host, arcKey(room, edge), actions.arc) : nothing}
        ${(part === undefined || part === 0) && height !== 0 ? html`<button class="nf-btn" title=${t("wall_view_hint")} @click=${() => actions.openWall(room, edge)}>▣ ${t("wall_view")}</button>` : nothing}
        ${(part === undefined || part === 0) && height !== 0
          ? html`<span class="nf-wide nf-split-row" title=${t("wall_thickness_hint")}
              >${numberField(host, t("edge_thickness"), room.wall_thickness?.[edge] ?? standard, (v) => actions.setThickness(room, edge, thicknessFromTyped(v, standard)), 0.01, 0.02)}
              ${host.admin && room.wall_thickness?.[edge] != null ? html`<button class="nf-btn" title=${t("wall_thickness_reset")} @click=${() => actions.setThickness(room, edge, null)}>↺</button>` : nothing}</span
            >`
          : nothing}
        ${part === undefined ? arcRow(host, arcKey(room, edge), actions.arc) : nothing}
        ${cutHere
          ? html`<span class="nf-wide nf-split-row"
              >${numberField(host, t("wall_split_at"), starts[part!], (v) => actions.moveCut(room, edge, starts[part!], v), 0.05, 0.1)}
              ${host.admin ? html`<button class="nf-btn" title=${t("wall_join_hint")} @click=${() => actions.join(room, edge, starts[part!], part!)}>⨉</button>` : nothing}</span
            >`
          : nothing}
      </div>`;
    });
  };
  return html`<div class="nf-edge-box">
    <h4>${t("wall_heights")}</h4>
    ${room.points.flatMap((_, edge) => rowsOf(edge))} ${hint(t("room_wall_hint"))}
  </div>`;
}
