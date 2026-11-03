// The basic layers of the plan: the grid, the floor below, walls, rooms with their names, outdoor areas, free walls, the meter, and
// the handles of the selected room, outdoor area and walls.

import { nothing, svg, type TemplateResult } from "lit";
import type { I18nKey } from "../../../i18n.ts";
import { bounds, centroid, isFixed, polygonArea, roomsReachingUp, type Floor, type FreeWall, type OutdoorArea, type Room, type Vec2 } from "../../../model.ts";
import type { Wall } from "../../../geometry/walls.ts";
import { edgePlus, pointsAttribute, type CanvasContext } from "./context.ts";
import { formatArea, formatLength } from "../../../units.ts";

type Layer = TemplateResult | typeof nothing;

/** A round handle that can be grabbed: an invisible larger circle around the visible one. */
export const gripAt = (x: number, y: number, radius = 6): TemplateResult => svg`<circle cx=${x} cy=${y} r="16" class="nf-hit" /><circle cx=${x} cy=${y} r=${radius} />`;

/** The grid: fine lines when zoomed in, coarser when zoomed out, and the origin. */
export function gridLayer(ctx: CanvasContext, size: { w: number; h: number }): Layer {
  const { scale } = ctx;
  const minor = scale >= 90 ? 0.1 : scale >= 30 ? 0.5 : 1;
  const major = scale >= 20 ? 1 : 5;
  const topLeft = ctx.toWorld(0, 0);
  const bottomRight = ctx.toWorld(size.w, size.h);
  const lines: TemplateResult[] = [];
  const addLines = (step: number, klass: string) => {
    for (let x = Math.ceil(topLeft[0] / step) * step; x <= bottomRight[0]; x += step) {
      const sx = ctx.toScreen([x, 0])[0];
      lines.push(svg`<line class=${klass} x1=${sx} y1="0" x2=${sx} y2=${size.h} />`);
    }
    for (let z = Math.ceil(topLeft[1] / step) * step; z <= bottomRight[1]; z += step) {
      const sy = ctx.toScreen([0, z])[1];
      lines.push(svg`<line class=${klass} x1="0" y1=${sy} x2=${size.w} y2=${sy} />`);
    }
  };
  if (minor < major) addLines(minor, "nf-grid-minor");
  addLines(major, "nf-grid-major");
  const [ox, oy] = ctx.toScreen([0, 0]);
  lines.push(svg`<circle class="nf-origin" cx=${ox} cy=${oy} r="3" />`);
  return svg`<g pointer-events="none">${lines}</g>`;
}

/** The rooms of the floor below, faintly, as orientation; rooms below that rise through this floor are hatched – it stays open there. */
export function floorBelowLayer(ctx: CanvasContext): Layer {
  const floors = ctx.host.doc.floors;
  const at = floors.findIndex((f) => f.id === ctx.floorId);
  const below = at > 0 ? floors[at - 1] : undefined;
  if (!below) return nothing;
  const voids = roomsReachingUp(floors, floors[at]);
  return svg`<g pointer-events="none">${below.rooms.map((r) => svg`<polygon class="nf-ghost" points=${pointsAttribute(ctx, r.points)} />`)}${voids.map(
    (points) => svg`<polygon class="nf-void" points=${pointsAttribute(ctx, points)} />`,
  )}</g>`;
}

/** The wall pieces; outer ones are drawn stronger, and walls lower than the floor lighter. */
export function wallsLayer(ctx: CanvasContext, walls: readonly Wall[]): Layer {
  const full = ctx.host.floor?.height ?? 2.5;
  return svg`<g pointer-events="none">${walls.map((w) => {
    const low = w.height !== undefined && w.height < full - 0.01;
    return svg`<polygon class=${`nf-wall${w.exterior ? " nf-wall-ext" : ""}${low ? " nf-wall-low" : ""}`} points=${pointsAttribute(ctx, w.footprint)} />`;
  })}</g>`;
}

/** Outdoor areas, labelled with their kind when large enough. */
export function outdoorLayer(ctx: CanvasContext, floor: Floor, selectedId: string | null): Layer {
  const one = (area: OutdoorArea) => {
    const [cx, cy] = ctx.toScreen(centroid(area.points));
    const box = bounds(area.points);
    const labelled = Math.min(box.x1 - box.x0, box.z1 - box.z0) * ctx.scale > 40;
    return svg`<g data-outdoor=${area.id} class=${`nf-out nf-out-${area.type}${area.id === selectedId ? " nf-out-sel" : ""}`}>
      <polygon points=${pointsAttribute(ctx, area.points)} />
      ${labelled ? svg`<text x=${cx} y=${cy + 4}>${ctx.host.t(`out_${area.type}` as I18nKey)}</text>` : nothing}
    </g>`;
  };
  return svg`<g>${floor.outdoor.map(one)}</g>`;
}

/** Corner handles of the selected outdoor area (a rectangle stays one while it is dragged) and a "+" on every edge that adds a corner. */
export function outdoorHandlesLayer(ctx: CanvasContext, area: OutdoorArea | undefined, tool: string): Layer {
  const { host } = ctx;
  if (!area || !host.admin || tool !== "select" || host.doc.settings.lock_plan) return nothing;
  const pts = area.points;
  return svg`${pts.map((p, i) => edgePlus(ctx, p, pts[(i + 1) % pts.length], "out", area.id, i))}${pts.map((p, i) => svg`<g class="nf-vertex" data-out-vertex=${`${area.id}:${i}`}>${gripAt(...ctx.toScreen(p))}</g>`)}`;
}

/** Rooms with their names and areas, and the wall of the selected room that its list row points at. */
export function roomsLayer(ctx: CanvasContext, floor: Floor, selectedId: string | null, litEdge: number | null): Layer {
  const selected = floor.rooms.find((r) => r.id === selectedId);
  const lit = selected && litEdge !== null && litEdge < selected.points.length ? [ctx.toScreen(selected.points[litEdge]), ctx.toScreen(selected.points[(litEdge + 1) % selected.points.length])] : null;
  return svg`<g>${floor.rooms.map((r) => svg`<polygon data-room=${r.id} class=${r.id === selectedId ? "nf-room nf-room-sel" : "nf-room"} points=${pointsAttribute(ctx, r.points)} />`)}</g>
    ${lit ? svg`<line class="nf-edge-hi" pointer-events="none" x1=${lit[0][0]} y1=${lit[0][1]} x2=${lit[1][0]} y2=${lit[1][1]} />` : nothing}
    <g pointer-events="none">${floor.rooms.map((r) => {
      const [cx, cy] = ctx.toScreen(centroid(r.points));
      return svg`<text class="nf-room-name" x=${cx} y=${cy - 2}>${r.name}</text>
        <text class="nf-room-area" x=${cx} y=${cy + 14}>${formatArea(ctx.host.hass, polygonArea(r.points))}</text>`;
    })}</g>`;
}

/** The electricity meter, a small box with a bolt. */
export function meterLayer(ctx: CanvasContext, floor: Floor): Layer {
  const meter = ctx.host.doc.energy?.meter;
  if (!meter || meter.floor_id !== floor.id) return nothing;
  const [x, y] = ctx.toScreen([meter.x, meter.z]);
  return svg`<g class="nf-meter" transform="translate(${x} ${y})" pointer-events="none">
    <rect x="-11" y="-11" width="22" height="22" rx="5" />
    <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
  </g>`;
}

/** Free-standing walls with a wide invisible line to grab, and end handles when selected. */
export function freeWallsLayer(ctx: CanvasContext, floor: Floor, selectedId: string | null): Layer {
  const { host } = ctx;
  const one = (wall: FreeWall) => {
    const [a, b] = [ctx.toScreen(wall.a), ctx.toScreen(wall.b)];
    const selected = wall.id === selectedId;
    const ends = selected && host.admin && !isFixed(wall, true, host.doc.settings);
    return svg`<g data-free-wall=${wall.id} class=${`nf-free-wall${selected ? " nf-free-wall-sel" : ""}`}>
        <line class="nf-hit" x1=${a[0]} y1=${a[1]} x2=${b[0]} y2=${b[1]} />
        <line class="nf-free-wall-line" x1=${a[0]} y1=${a[1]} x2=${b[0]} y2=${b[1]} />
      </g>
      ${ends ? svg`<g class="nf-vertex" data-wall-end=${`${wall.id}:a`}>${gripAt(a[0], a[1])}</g><g class="nf-vertex" data-wall-end=${`${wall.id}:b`}>${gripAt(b[0], b[1])}</g>` : nothing}`;
  };
  return svg`<g>${(floor.walls ?? []).map(one)}</g>`;
}

/** Short ticks across a wall where it has been cut by hand. */
export function cutMarksLayer(ctx: CanvasContext, room: Room): Layer {
  const pts = room.points;
  const marks = (room.wall_splits ?? []).flatMap((cuts, i) => {
    if (!cuts || i >= pts.length) return [];
    const [a, b] = [pts[i], pts[(i + 1) % pts.length]];
    const length = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const [ux, uz] = [(b[0] - a[0]) / length, (b[1] - a[1]) / length];
    return cuts.map((d) => {
      const [x, y] = ctx.toScreen([a[0] + ux * d, a[1] + uz * d]);
      return svg`<line class="nf-split-mark" x1=${x - uz * 7} y1=${y + ux * 7} x2=${x + uz * 7} y2=${y - ux * 7} />`;
    });
  });
  return svg`${marks}`;
}

/** The handles of the selected room: a grip at each corner, and at each edge its length and a "+" that adds a corner. */
export function roomHandlesLayer(ctx: CanvasContext, room: Room, selectedCorner: number | null): Layer {
  const pts = room.points;
  const [cx, cy] = ctx.toScreen(centroid(pts));
  const edge = (a: Vec2, b: Vec2, i: number) => {
    const [[ax, ay], [bx, by]] = [ctx.toScreen(a), ctx.toScreen(b)];
    const [mx, my] = [(ax + bx) / 2, (ay + by) / 2];
    const onScreen = Math.hypot(bx - ax, by - ay);
    // the length is written outside the room: along the edge's normal, away from the middle
    let [nx, ny] = [-(by - ay), bx - ax];
    const norm = Math.hypot(nx, ny) || 1;
    [nx, ny] = [nx / norm, ny / norm];
    if (nx * (mx - cx) + ny * (my - cy) < 0) [nx, ny] = [-nx, -ny];
    return svg`${onScreen > 50 ? svg`<text class="nf-dim" x=${mx + nx * 16} y=${my + ny * 16 + 4}>${formatLength(ctx.host.hass, Math.hypot(b[0] - a[0], b[1] - a[1]))}</text>` : nothing}
      ${onScreen > 36 ? svg`<g data-mid=${i} class="nf-mid"><circle cx=${mx} cy=${my} r="14" class="nf-hit" /><circle cx=${mx} cy=${my} r="6" /><path d="M${mx - 3} ${my}h6M${mx} ${my - 3}v6" /></g>` : nothing}`;
  };
  const corner = (p: Vec2, i: number) => {
    const [x, y] = ctx.toScreen(p);
    return svg`<g data-vertex=${i} class=${i === selectedCorner ? "nf-vertex nf-vertex-sel" : "nf-vertex"}>${gripAt(x, y)}</g><text class="nf-vertex-no" x=${x + 9} y=${y - 9}>${i + 1}</text>`;
  };
  return svg`<g>${pts.map((p, i) => edge(p, pts[(i + 1) % pts.length], i))}${pts.map(corner)}</g>`;
}

/** Every room edge labelled with its length, a little inside the room, along the edge (the switch "Measurements"). */
export function dimensionsLayer(ctx: CanvasContext, floor: Floor): Layer {
  const labels = floor.rooms.flatMap((room) => {
    if (room.points.length < 3) return [];
    const [cx, cz] = centroid(room.points);
    return room.points.map((a, i) => {
      const b = room.points[(i + 1) % room.points.length];
      const length = Math.hypot(b[0] - a[0], b[1] - a[1]);
      if (length < 0.4) return nothing;
      const mid: Vec2 = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      // a little towards the room's middle, so the label stays inside it
      const towards = Math.hypot(cx - mid[0], cz - mid[1]) || 1;
      const inset = Math.min(0.35, towards / 2);
      const at: Vec2 = [mid[0] + ((cx - mid[0]) / towards) * inset, mid[1] + ((cz - mid[1]) / towards) * inset];
      const [x, y] = ctx.toScreen(at);
      let angle = (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI;
      if (angle > 90) angle -= 180;
      if (angle < -90) angle += 180;
      return svg`<text class="nf-dim" x=${x} y=${y} transform=${`rotate(${angle.toFixed(1)} ${x} ${y})`} text-anchor="middle" dominant-baseline="middle">${formatLength(ctx.host.hass, length)}</text>`;
    });
  });
  return svg`<g pointer-events="none">${labels}</g>`;
}
