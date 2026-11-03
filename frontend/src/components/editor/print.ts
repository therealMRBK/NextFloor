// The plan on paper: every floor as a clean black-on-white drawing (walls, doors and windows, room names with their living area,
// the outer measurements), one page each, and a table of the areas at the end. Opened in a window of its own and printed from there,
// so the browser's print dialog can also save it as PDF.

import { centroid, type Building, type Floor, type Vec2 } from "../../model.ts";
import { floorAreas, totalOf, type RoomArea } from "../../geometry/living-area.ts";
import { generateWalls, locateOpening, openingHost } from "../../geometry/walls.ts";

export interface PrintTexts {
  title: string;
  room: string;
  floorArea: string;
  living: string;
  low: string;
  total: string;
  note: string;
  area(m2: number): string;
  length(m: number): string;
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
const pts = (ring: readonly Vec2[]) => ring.map(([x, z]) => `${x.toFixed(3)},${z.toFixed(3)}`).join(" ");

/** One floor as SVG in metres (1 unit = 1 m), with room for the measurements around it. */
export function floorSvg(b: Building, floor: Floor, areas: readonly RoomArea[], texts: PrintTexts): string {
  const walls = generateWalls(floor.rooms, { exterior: b.settings.wall_exterior, interior: b.settings.wall_interior }, floor.walls ?? []).walls;
  const all = [...floor.rooms.flatMap((r) => r.points), ...walls.flatMap((w) => w.footprint)];
  if (!all.length) return "";
  const [x0, x1] = [Math.min(...all.map((p) => p[0])), Math.max(...all.map((p) => p[0]))];
  const [z0, z1] = [Math.min(...all.map((p) => p[1])), Math.max(...all.map((p) => p[1]))];
  const pad = 1.2;
  const parts: string[] = [];
  for (const r of floor.rooms) parts.push(`<polygon points="${pts(r.points)}" fill="#f4f4f4" stroke="none"/>`);
  for (const w of walls) parts.push(`<polygon points="${pts(w.footprint)}" fill="#222" stroke="#222" stroke-width="0.01"/>`);
  // doors and windows: a white gap in the wall, a window with its glass line, a door with its swing
  for (const o of floor.openings) {
    const host = openingHost(o, floor.rooms, floor.walls ?? []);
    const at = host ? locateOpening(walls, o, host) : null;
    if (!at) continue;
    const { wall, s } = at;
    const len = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]);
    if (len < 1e-6) continue;
    const u: Vec2 = [(wall.b[0] - wall.a[0]) / len, (wall.b[1] - wall.a[1]) / len];
    const n: Vec2 = [-u[1], u[0]];
    const p = (along: number, side: number): Vec2 => [wall.a[0] + u[0] * along + n[0] * side, wall.a[1] + u[1] * along + n[1] * side];
    const [s0, s1] = [s - o.width / 2, s + o.width / 2];
    const [l, r] = [wall.left + 0.01, -(wall.right + 0.01)];
    parts.push(`<polygon points="${pts([p(s0, l), p(s1, l), p(s1, r), p(s0, r)])}" fill="#fff"/>`);
    if (o.type === "garage") {
      const mid = (wall.left - wall.right) / 2;
      parts.push(`<polyline points="${pts([p(s0, mid), p(s1, mid)])}" fill="none" stroke="#555" stroke-width="0.02" stroke-dasharray="0.12 0.08"/>`);
    } else if (o.type === "window") {
      const mid = (wall.left - wall.right) / 2;
      parts.push(`<polyline points="${pts([p(s0, mid), p(s1, mid)])}" fill="none" stroke="#222" stroke-width="0.03"/>`);
      parts.push(`<polyline points="${pts([p(s0, l - 0.01), p(s1, l - 0.01)])}" fill="none" stroke="#222" stroke-width="0.015"/><polyline points="${pts([p(s0, r + 0.01), p(s1, r + 0.01)])}" fill="none" stroke="#222" stroke-width="0.015"/>`);
    } else {
      // a quarter circle on the room side of the wall
      const side = o.room_id === wall.roomRight ? -1 : 1;
      const hinge = p(s0, side * (side > 0 ? wall.left : wall.right));
      const tip = p(s0, side * ((side > 0 ? wall.left : wall.right) + o.width));
      const end = p(s1, side * (side > 0 ? wall.left : wall.right));
      parts.push(`<path d="M ${hinge[0]} ${hinge[1]} L ${tip[0]} ${tip[1]} A ${o.width} ${o.width} 0 0 ${side > 0 ? 1 : 0} ${end[0]} ${end[1]}" fill="none" stroke="#555" stroke-width="0.015"/>`);
    }
  }
  const byRoom = new Map(areas.map((a) => [a.roomId, a]));
  for (const r of floor.rooms) {
    if (r.points.length < 3) continue;
    const [cx, cz] = centroid(r.points);
    const a = byRoom.get(r.id);
    parts.push(`<text x="${cx}" y="${cz - 0.08}" font-size="0.32" text-anchor="middle" font-weight="600">${esc(r.name)}</text>`);
    if (a) parts.push(`<text x="${cx}" y="${cz + 0.32}" font-size="0.24" text-anchor="middle" fill="#444">${esc(texts.area(a.living > 0 ? a.living : a.floor))}</text>`);
  }
  // the outer measurements under and beside the drawing
  const dim = (ax: number, az: number, bx: number, bz: number, label: string, vertical: boolean) => {
    const tick = 0.15;
    const mx = (ax + bx) / 2;
    const mz = (az + bz) / 2;
    const ticks = vertical ? `M ${ax - tick} ${az} L ${ax + tick} ${az} M ${bx - tick} ${bz} L ${bx + tick} ${bz}` : `M ${ax} ${az - tick} L ${ax} ${az + tick} M ${bx} ${bz - tick} L ${bx} ${bz + tick}`;
    const text = vertical
      ? `<text x="${mx - 0.25}" y="${mz}" font-size="0.26" text-anchor="middle" transform="rotate(-90 ${mx - 0.25} ${mz})">${esc(label)}</text>`
      : `<text x="${mx}" y="${mz + 0.4}" font-size="0.26" text-anchor="middle">${esc(label)}</text>`;
    return `<path d="M ${ax} ${az} L ${bx} ${bz} ${ticks}" stroke="#222" stroke-width="0.015" fill="none"/>${text}`;
  };
  parts.push(dim(x0, z1 + 0.5, x1, z1 + 0.5, texts.length(x1 - x0), false));
  parts.push(dim(x0 - 0.5, z0, x0 - 0.5, z1, texts.length(z1 - z0), true));
  // a metre bar for the scale (the drawing is 1:100 while it fits the page, smaller beyond)
  parts.push(`<path d="M ${x1 - 1} ${z0 - 0.7} L ${x1} ${z0 - 0.7}" stroke="#222" stroke-width="0.06"/><text x="${x1 - 0.5}" y="${z0 - 0.85}" font-size="0.22" text-anchor="middle">${esc(texts.length(1))}</text>`);
  const [w, h] = [x1 - x0 + 2 * pad, z1 - z0 + 2 * pad];
  const vb = `${x0 - pad} ${z0 - pad} ${w} ${h}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" style="width:${(w * 10).toFixed(1)}mm" font-family="system-ui, sans-serif">${parts.join("")}</svg>`;
}

/** The whole printout: a page per floor and the table of areas. */
export function printHtml(b: Building, texts: PrintTexts): string {
  const floors = b.floors.filter((f) => !f.layer && f.rooms.length);
  const pages: string[] = [];
  const rows: string[] = [];
  const all: RoomArea[] = [];
  for (const floor of [...floors].sort((p, q) => p.elevation - q.elevation)) {
    const areas = floorAreas(b, floor);
    all.push(...areas);
    const sum = totalOf(areas);
    pages.push(`<section class="page"><h1>${esc(floor.name)}</h1><div class="sub">${esc(texts.living)}: ${esc(texts.area(sum.living))}</div>${floorSvg(b, floor, areas, texts)}</section>`);
    rows.push(`<tr class="floor"><th colspan="4">${esc(floor.name)}</th></tr>`);
    for (const a of areas) {
      const room = floor.rooms.find((r) => r.id === a.roomId)!;
      rows.push(`<tr><td>${esc(room.name)}</td><td>${esc(texts.area(a.floor))}</td><td>${a.low > 0.05 ? esc(texts.area(a.low)) : ""}</td><td><b>${esc(texts.area(a.living))}</b></td></tr>`);
    }
    rows.push(`<tr class="sum"><td>${esc(texts.total)}</td><td>${esc(texts.area(sum.floor))}</td><td>${sum.low > 0.05 ? esc(texts.area(sum.low)) : ""}</td><td><b>${esc(texts.area(sum.living))}</b></td></tr>`);
  }
  const total = totalOf(all);
  const table = `<section class="page"><h1>${esc(texts.living)}</h1><table><thead><tr><th>${esc(texts.room)}</th><th>${esc(texts.floorArea)}</th><th>${esc(texts.low)}</th><th>${esc(texts.living)}</th></tr></thead><tbody>${rows.join("")}<tr class="grand"><td>${esc(texts.total)}</td><td>${esc(texts.area(total.floor))}</td><td>${total.low > 0.05 ? esc(texts.area(total.low)) : ""}</td><td><b>${esc(texts.area(total.living))}</b></td></tr></tbody></table><p class="note">${esc(texts.note)}</p></section>`;
  return `<!doctype html><html><head><meta charset="utf-8"><title>${esc(texts.title)}</title><style>
    body { font-family: system-ui, sans-serif; color: #111; margin: 0; background: #fff; }
    .page { page-break-after: always; padding: 12mm; }
    .page:last-child { page-break-after: auto; }
    h1 { font-size: 18pt; margin: 0 0 2mm; }
    .sub { color: #555; margin-bottom: 4mm; }
    svg { display: block; max-width: 100%; max-height: 240mm; height: auto; }
    table { border-collapse: collapse; width: 100%; font-size: 11pt; }
    th, td { text-align: left; padding: 1.5mm 2mm; border-bottom: 0.2mm solid #ccc; }
    td:not(:first-child), th:not(:first-child) { text-align: right; }
    tr.floor th { background: #eee; }
    tr.sum td { border-bottom: 0.4mm solid #888; }
    tr.grand td { font-size: 12pt; border-top: 0.6mm solid #222; }
    .note { color: #666; font-size: 9pt; margin-top: 4mm; }
    @media print { .page { padding: 0; } }
  </style></head><body>${pages.join("")}${table}<script>window.addEventListener("load", () => setTimeout(() => window.print(), 300));</script></body></html>`;
}
