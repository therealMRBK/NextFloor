// What the roof and energy tools draw over the plan: roof sections with their ridges and handles, solar modules, roof windows,
// the head-room lines of an attic floor, and the markers of the energy devices.

import { sectionCorners } from "../../../roof/frame.ts";
import { nothing, svg, type TemplateResult } from "lit";
import { formatNumber, type I18nKey } from "../../../i18n.ts";
import { ENERGY_DEVICES, type EnergyRoute, type Floor, type RoofSection, type RoutePoint, type Vec2 } from "../../../model.ts";
import { dormerParent, effectiveDormer, headroomLines, ridgeHeight, sectionCutsBelow, sectionFrame, sectionGeometry } from "../../../roof-sections.ts";
import { fieldCenter, fieldFace, fieldModules, roofFaces, windowCorners } from "../../../solar.ts";
import type { RoofController } from "../roof-controller.ts";
import { edgePlus, pointsAttribute, type CanvasContext } from "./context.ts";

type Layer = TemplateResult | typeof nothing;

/** A round handle with a larger invisible circle around it, so that a finger can grab it. */
const grip = (x: number, y: number) => svg`<circle cx=${x} cy=${y} r="16" class="nf-hit" /><circle cx=${x} cy=${y} r="6" />`;

/** The handle of a point of a free outline. */
const vertexHandle = (ctx: CanvasContext, at: Vec2, id: string): TemplateResult => svg`<g class="nf-vertex" data-roof-vertex=${id}>${grip(...ctx.toScreen(at))}</g>`;

/** The handle of a corner of a rectangular section. */
const cornerHandle = (ctx: CanvasContext, at: Vec2, id: string): TemplateResult => svg`<g class="nf-vertex" data-roof-corner=${id}>${grip(...ctx.toScreen(at))}</g>`;

/** The label written in the middle of a section: lock, number, kind and ridge height. */
function sectionLabel(ctx: CanvasContext, roof: RoofController, section: RoofSection, index: number): string {
  const { t, hass } = ctx.host;
  const kind = section.dormer ? t("roof_dormer") : section.open ? t("roof_open_short") : t(`roof_shape_${section.shape}` as I18nKey);
  return `${roof.isFixed(section) ? "🔒 " : ""}${index + 1} · ${kind} · ${formatNumber(hass, ridgeHeight(section), 1)} m`;
}

/** The sections of a custom roof: outline, ridges and hips, a label, and for the selected one handles at its corners or points. */
export function roofSectionsLayer(ctx: CanvasContext, roof: RoofController): Layer {
  const settings = ctx.host.doc.settings.roof;
  const sections = settings.type === "custom" ? (settings.sections ?? []) : [];
  const editable = ctx.host.admin;
  const one = (section: RoofSection, index: number) => {
    const selected = section.id === roof.sectionId;
    const frame = sectionFrame(section);
    const custom = (section.shape === "flat" || section.shape === "parapet") && section.points && section.points.length >= 3 ? section.points : null;
    // a dormer or cross gable is drawn as deep as it really reaches: its ridge meets the slope there
    const parent = dormerParent(sections, section);
    const shown = parent ? sectionFrame(effectiveDormer(parent, section)) : frame;
    const outline: Vec2[] = custom ?? [shown.at(shown.u0, 0), shown.at(shown.u1, 0), shown.at(shown.u1, shown.w), shown.at(shown.u0, shown.w)];
    const geometry = section.shape === "flat" || section.shape === "parapet" ? null : sectionGeometry(section, { u0: 0, u1: 0, a: 0, b: 0 });
    const ridges = (geometry?.ridges ?? []).map(([p, q]) => {
      const [ax, ay] = ctx.toScreen(frame.at(p[0], p[1]));
      const [bx, by] = ctx.toScreen(frame.at(q[0], q[1]));
      return svg`<line x1=${ax} y1=${ay} x2=${bx} y2=${by} />`;
    });
    const [lx, ly] = ctx.toScreen(frame.at((frame.u0 + frame.u1) / 2, frame.w / 2));
    const movable = selected && editable && !roof.isFixed(section);
    const corners = [[0, 0], [1, 0], [1, 1], [0, 1]] as const;
    const flatRoof = section.shape === "flat" || section.shape === "parapet";
    const [x0, x1, z0, z1] = [Math.min(section.x0, section.x1), Math.max(section.x0, section.x1), Math.min(section.z0, section.z1), Math.max(section.z0, section.z1)];
    // a flat roof can be reshaped: a "+" on every edge adds a corner (a rectangle becomes a free shape)
    const ring: Vec2[] = custom ?? (section.rotation ? sectionCorners(section) : [[x0, z0], [x1, z0], [x1, z1], [x0, z1]]);
    const plusses = movable && flatRoof ? ring.map((p, i) => edgePlus(ctx, p, ring[(i + 1) % ring.length], "roof", section.id, i)) : nothing;
    const handles = !movable
      ? nothing
      : svg`${plusses}${custom
          ? custom.map((p, k) => vertexHandle(ctx, p, `${section.id}:${k}`))
          : corners.map(([kx, kz]) => cornerHandle(ctx, [kx ? x1 : x0, kz ? z1 : z0], `${section.id}:${kx}:${kz}`))}`;
    return svg`<g data-roof=${section.id} class=${`nf-roof-sec${selected ? " nf-roof-sel" : ""}`}>
        <polygon points=${pointsAttribute(ctx, outline)} />
        <g class="nf-roof-ridge">${ridges}</g>
        <text x=${lx} y=${ly - 14}>${sectionLabel(ctx, roof, section, index)}</text>
      </g>${handles}`;
  };
  return svg`<g class="nf-roof-layer">${sections.map(one)}</g>`;
}

/** The turn handle of a free-standing field: a circle out in the direction the rows face. */
function turnHandle(ctx: CanvasContext, fieldId: string, centre: Vec2, rotation: number, reach: number): TemplateResult {
  const angle = (rotation * Math.PI) / 180;
  const [fx, fy] = ctx.toScreen(centre);
  const [hx, hy] = ctx.toScreen([centre[0] + Math.sin(angle) * reach, centre[1] - Math.cos(angle) * reach]);
  return svg`<g class="nf-rotate" data-solar-turn=${fieldId}>
    <line x1=${fx} y1=${fy} x2=${hx} y2=${hy} />
    <circle cx=${hx} cy=${hy} r="16" class="nf-hit" />
    <circle cx=${hx} cy=${hy} r="8" />
    <path d="M${hx - 4} ${hy - 1}a4 4 0 1 1 2 3.5" />
  </g>`;
}

/** Every solar module as a small rectangle; the selected field shows its switched-off modules dashed so they can be switched on again. */
export function solarLayer(ctx: CanvasContext, roof: RoofController): Layer {
  const { doc, admin } = ctx.host;
  const fields = doc.settings.roof.solar ?? [];
  if (fields.length === 0) return nothing;
  const faces = roofFaces(doc);
  const one = (field: (typeof fields)[number]) => {
    const face = fieldFace(doc, field, faces);
    if (!face || (face.wall && face.wall.floorId !== ctx.floorId)) return nothing;
    const selected = field.id === roof.solarId;
    let turn: Layer = nothing;
    if (selected && face.unbounded && admin && !field.locked) {
      const centre = fieldCenter(face, field);
      const farthest = Math.max(...fieldModules(face, field, true).flatMap((m) => m.corners.map((p) => Math.hypot(p[0] - centre[0], p[2] - centre[1]))));
      turn = turnHandle(ctx, field.id, centre, field.rotation ?? 0, 0.9 + farthest * 0.5);
    }
    const module = (m: ReturnType<typeof fieldModules>[number]) => {
      let outline: Vec2[];
      if (face.wall) {
        // on a wall the modules stand upright: in the plan a strip outside the wall, as deep as the modules stand off it (at least 30 cm to grab)
        const depth = Math.max(0.3, ...m.corners.map((p) => (p[0] - face.o[0]) * face.n[0] + (p[2] - face.o[2]) * face.n[2]));
        const [a, b] = [m.corners[0], m.corners[1]];
        const out = (p: typeof a): Vec2 => [p[0] + face.n[0] * depth, p[2] + face.n[2] * depth];
        outline = [[a[0], a[2]], out(a), out(b), [b[0], b[2]]];
      } else outline = m.corners.map((p) => [p[0], p[2]] as Vec2);
      return svg`<polygon data-cell=${m.cell} class=${m.skipped ? "nf-solar-off" : ""} points=${pointsAttribute(ctx, outline)} />`;
    };
    const klass = `nf-solar${selected ? " nf-solar-sel" : ""}${selected && roof.picking ? " nf-solar-pick" : ""}`;
    return svg`<g data-solar=${field.id} class=${klass}>${fieldModules(face, field, selected).map(module)}</g>${turn}`;
  };
  return svg`<g class="nf-solar-layer">${fields.map(one)}</g>`;
}

/** Roof windows over the plan, the selected one highlighted. */
export function roofWindowsLayer(ctx: CanvasContext, roof: RoofController): Layer {
  const windows = ctx.host.doc.settings.roof.windows ?? [];
  if (windows.length === 0) return nothing;
  const faces = new Map(roofFaces(ctx.host.doc).map((f) => [f.key, f]));
  const one = (w: (typeof windows)[number]) => {
    const face = faces.get(w.face);
    const corners = face ? windowCorners(face, w) : null;
    if (!corners) return nothing;
    return svg`<g data-roofwin=${w.id} class=${`nf-roofwin${w.id === roof.windowId ? " nf-roofwin-sel" : ""}`}><polygon points=${pointsAttribute(ctx, corners.map((p) => [p[0], p[2]] as Vec2))} /></g>`;
  };
  return svg`<g class="nf-roofwin-layer">${windows.map(one)}</g>`;
}

const ENERGY_ICONS: Record<string, string> = { inverter: "⚡", home_battery: "🔋", wallbox: "🔌", meter: "📟", grid_point: "🏁" };

/** The energy tool: a round marker with a symbol on every energy device of the floor, the selected one also with its name. */
export function energyMarkersLayer(ctx: CanvasContext, floor: Floor | undefined, selectedId: string | null): Layer {
  if (!floor) return nothing;
  const devices = floor.furniture.filter((m) => (ENERGY_DEVICES as readonly string[]).includes(m.type));
  const one = (m: (typeof devices)[number]) => {
    const [x, y] = ctx.toScreen([m.x, m.z]);
    const selected = m.id === selectedId;
    const name = ctx.host.t(`furn_${m.type}` as I18nKey);
    return svg`<g data-energy-device=${m.id} class=${`nf-energy-marker${selected ? " nf-energy-marker-sel" : ""}`}>
      <circle cx=${x} cy=${y} r="17" />
      <text x=${x} y=${y + 6} class="nf-energy-icon">${ENERGY_ICONS[m.type] ?? "⚡"}</text>
      ${selected ? svg`<text x=${x} y=${y + 32} class="nf-energy-name">${name}</text>` : nothing}
      <title>${name}</title>
    </g>`;
  };
  return svg`<g class="nf-energy-markers">${devices.map(one)}</g>`;
}

/** On an attic floor: dashed lines where the roof slope leaves 1.5 m and 2 m of head room, labelled. */
export function headroomLayer(ctx: CanvasContext, floor: Floor): Layer {
  const { doc, hass } = ctx.host;
  const sections = doc.settings.roof.sections ?? [];
  if (!sections.some((s) => sectionCutsBelow(s, floor.elevation + floor.height))) return nothing;
  const lines = [1.5, 2].flatMap((height) =>
    headroomLines({ settings: doc.settings }, floor.elevation, height).map(([p, q]) => {
      const [x1, y1] = ctx.toScreen(p);
      const [x2, y2] = ctx.toScreen(q);
      return svg`<line class="nf-headroom" x1=${x1} y1=${y1} x2=${x2} y2=${y2} />
        <text class="nf-headroom-label" x=${(x1 + x2) / 2} y=${(y1 + y2) / 2 - 4}>${formatNumber(hass, height, 1)} m</text>`;
    }),
  );
  return svg`${lines}`;
}

/**
 * The cable routes on the floor shown: each run of points on this floor as a line, a dot per point, and a short stub where the
 * cable goes to another floor. The route being drawn is highlighted and numbered.
 */
export function energyRoutesLayer(ctx: CanvasContext, floor: Floor | undefined, routes: readonly EnergyRoute[], draft: { key: string; points: RoutePoint[] } | null): Layer {
  if (!floor) return nothing;
  const one = (points: readonly RoutePoint[], drawing: boolean) => {
    const parts: TemplateResult[] = [];
    points.forEach((p, i) => {
      if (p.floor_id !== floor.id) return;
      const [x, y] = ctx.toScreen([p.x, p.z]);
      const next = points[i + 1];
      if (next?.floor_id === floor.id) {
        const [x2, y2] = ctx.toScreen([next.x, next.z]);
        parts.push(svg`<line x1=${x} y1=${y} x2=${x2} y2=${y2} />`);
      }
      // where the cable leaves this floor (or comes from another), a ring marks the riser
      const riser = (next && next.floor_id !== floor.id) || (i > 0 && points[i - 1].floor_id !== floor.id);
      parts.push(svg`<circle cx=${x} cy=${y} r=${riser ? 7 : 4} class=${riser ? "nf-route-riser" : ""} />`);
      if (drawing) parts.push(svg`<text x=${x + 8} y=${y - 8}>${i + 1}</text>`);
    });
    return svg`<g class=${`nf-route${drawing ? " nf-route-drawing" : ""}`}>${parts}</g>`;
  };
  return svg`<g class="nf-routes">${routes.filter((r) => r.key !== draft?.key).map((r) => one(r.points, false))}${draft ? one(draft.points, true) : nothing}</g>`;
}
