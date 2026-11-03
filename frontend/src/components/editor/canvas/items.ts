// Furniture and devices in the plan: each piece with its symbol, the handles of the selected one, and the camera's field of view.

import { nothing, svg, type TemplateResult } from "lit";
import { entityKind, entityName, kindOf } from "../../../devices.ts";
import { pluginDrawsWedge } from "../../../plugins/registry.ts";
import { furnitureName } from "../../../furniture-names.ts";
import { iconPath } from "../../../icons.ts";
import { deviceIcon } from "../fields.ts";
import { ENERGY_DEVICES, isLamp, noteDue, type Floor, type Furniture, type Placement } from "../../../model.ts";
import { furnitureSymbol } from "../../furniture2d.ts";
import type { CanvasContext } from "./context.ts";
import { formatLength } from "../../../units.ts";

type Layer = TemplateResult | typeof nothing;

const RAD = Math.PI / 180;

/** The turn handle: a small circle on a stem, with a turning arrow. */
const turnHandle = (attribute: "data-rotate" | "data-aim", id: string, from: [number, number], to: [number, number]): TemplateResult => {
  const [hx, hy] = to;
  const arrow = svg`<path d="M${hx - 4} ${hy - 1}a4 4 0 1 1 2 3.5" />`;
  const stem = svg`<line x1=${from[0]} y1=${from[1]} x2=${hx} y2=${hy} /><circle cx=${hx} cy=${hy} r="16" class="nf-hit" /><circle cx=${hx} cy=${hy} r="8" />${arrow}`;
  return attribute === "data-rotate" ? svg`<g class="nf-rotate" data-rotate=${id}>${stem}</g>` : svg`<g class="nf-rotate" data-aim=${id}>${stem}</g>`;
};

/** The four corner handles that resize a piece of furniture. */
function resizeHandles(ctx: CanvasContext, item: Furniture): TemplateResult[] {
  const a = item.rotation * RAD;
  return ([[-1, -1], [1, -1], [1, 1], [-1, 1]] as const).map(([sx, sz]) => {
    const [x, y] = ctx.toScreen([item.x + (sx * item.w * Math.cos(a)) / 2 - (sz * item.d * Math.sin(a)) / 2, item.z + (sx * item.w * Math.sin(a)) / 2 + (sz * item.d * Math.cos(a)) / 2]);
    return svg`<g class="nf-resize" data-resize=${`${item.id}:${sx}:${sz}`}><circle cx=${x} cy=${y} r="14" class="nf-hit" /><rect x=${x - 5} y=${y - 5} width="10" height="10" rx="2" /></g>`;
  });
}

export function furnitureLayer(ctx: CanvasContext, floor: Floor, selectedId: string | null): Layer {
  const { host, scale } = ctx;
  const one = (item: Furniture) => {
    const selected = item.id === selectedId;
    const movable = selected && host.admin && !item.locked;
    const [cx, cy] = ctx.toScreen([item.x, item.z]);
    const a = item.rotation * RAD;
    const labelled = Math.min(item.w, item.d) * scale > 44;
    const lit = isLamp(item.type) && !!item.entity && item.entity !== "none" && host.hass?.states[item.entity]?.state === "on";
    const energy = (ENERGY_DEVICES as readonly string[]).includes(item.type);
    const klass = `nf-furn${selected ? " nf-furn-sel" : ""}${lit ? " nf-furn-lit" : ""}${energy ? " nf-energy-item" : ""}`;
    // the handle sits in front of the piece, and dragging it turns the piece
    const reach = item.d / 2 + Math.max(0.3, 26 / scale);
    const handleAt = ctx.toScreen([item.x - Math.sin(a) * reach, item.z + Math.cos(a) * reach]);
    const stemFrom = ctx.toScreen([item.x - Math.sin(a) * (item.d / 2), item.z + Math.cos(a) * (item.d / 2)]);
    // the size is written behind the piece, away from the turn handle
    const [lx, ly] = ctx.toScreen([item.x + Math.sin(a) * (item.d / 2 + 18 / scale), item.z - Math.cos(a) * (item.d / 2 + 18 / scale)]);
    return svg`<g data-furniture=${item.id} class=${klass}>
        <g transform="translate(${cx} ${cy}) rotate(${item.rotation}) scale(${item.mirror ? -scale : scale} ${scale})">
          <rect class="nf-furn-body" x=${-item.w / 2} y=${-item.d / 2} width=${item.w} height=${item.d} />
          <g class="nf-furn-sym">${furnitureSymbol(item.type, item.w, item.d, item)}</g>
          <line class="nf-furn-front" x1=${-item.w / 2} y1=${item.d / 2} x2=${item.w / 2} y2=${item.d / 2} />
        </g>
        ${labelled ? svg`<text x=${cx} y=${cy + 4}>${furnitureName(host.hass, item.type)}</text>` : nothing}
      </g>
      ${movable ? resizeHandles(ctx, item) : nothing}
      ${selected ? svg`<text class="nf-dim" x=${lx} y=${ly + 4}>${formatLength(host.hass, item.w)} × ${formatLength(host.hass, item.d)}</text>` : nothing}
      ${selected && item.locked ? svg`<text class="nf-lock" x=${handleAt[0]} y=${handleAt[1] + 5}>🔒</text>` : nothing}
      ${movable ? turnHandle("data-rotate", item.id, stemFrom, handleAt) : nothing}`;
  };
  return svg`<g>${floor.furniture.map(one)}</g>`;
}

/** The device pins of the floor. */
export function devicesLayer(ctx: CanvasContext, floor: Floor, selectedId: string | null): Layer {
  const { host } = ctx;
  const one = (placed: Placement) => {
    // a plugin may take on entities NextFloor does not know (cameras)
    const kind = kindOf(placed.entity_id) ?? (host.hass ? entityKind(host.hass, placed.entity_id) : null);
    if (!kind) return nothing;
    const [x, y] = ctx.toScreen([placed.x, placed.z]);
    const on = host.hass?.states[placed.entity_id]?.state === "on";
    const selected = placed.entity_id === selectedId;
    // a device a plugin draws a wedge for can be turned by a handle in front of it
    const turn = (placed.rotation ?? 0) * RAD;
    const aim = selected && host.admin && !placed.locked && pluginDrawsWedge(placed.entity_id, host.hass?.states[placed.entity_id]);
    const handle: [number, number] = [x - Math.sin(turn) * 46, y + Math.cos(turn) * 46];
    const icon = deviceIcon(host, placed.entity_id, placed.icon);
    return svg`${aim ? turnHandle("data-aim", placed.entity_id, [x, y], handle) : nothing}<g data-device=${placed.entity_id} class=${`nf-device${on ? " nf-device-on" : ""}${selected ? " nf-device-sel" : ""}`} transform="translate(${x} ${y})">
        <title>${entityName(host.hass, placed.entity_id)}</title>
        <circle r="18" class="nf-hit" /><circle r="12" />
        ${icon
          ? svg`<foreignObject class="nf-device-icon" x="-8" y="-8" width="16" height="16"><ha-icon icon=${icon}></ha-icon></foreignObject>`
          : svg`<path d=${iconPath(kind)} transform="translate(-7.2 -7.2) scale(0.6)" />`}
      </g>
      ${selected && placed.locked ? svg`<text class="nf-lock" x=${x + 16} y=${y - 12}>🔒</text>` : nothing}`;
  };
  return svg`<g>${floor.placements.map(one)}</g>`;
}

/** The notes of a floor: a small sticky note at its spot (orange once it is due), the selected one ringed. */
export function notesLayer(ctx: CanvasContext, floor: Floor, selectedId: string | null): Layer {
  return svg`${(floor.notes ?? []).map((note) => {
    const [x, y] = ctx.toScreen([note.x, note.z]);
    return svg`<g data-note=${note.id} class=${`nf-note${noteDue(note) ? " nf-note-due" : ""}${note.id === selectedId ? " nf-note-sel" : ""}`} transform="translate(${x} ${y})">
      <title>${note.text}</title>
      <rect x="-11" y="-11" width="22" height="22" rx="4" /><text y="5" text-anchor="middle">✎</text>
    </g>`;
  })}`;
}
