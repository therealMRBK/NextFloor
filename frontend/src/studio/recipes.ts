// The furniture studio in the editor: a few templates (cabinet, shelf, lamp, device) whose measurements and fronts are set in a form
// and turned into pack parts here. The recipe is kept on the item, so the piece can be opened in the studio again and changed.

import type { PackItem, PackPart } from "../packs.ts";

export type StudioKind = "cabinet" | "shelf" | "lamp" | "device";
export type StudioBase = "none" | "legs" | "plinth";
export type StudioHandle = "bar" | "knob" | "none";
export type StudioLamp = "floor" | "table" | "pendant" | "wall";
export type StudioMount = "floor" | "surface" | "wall";

/** What the studio form holds. Sizes in centimetres; colours are palette roles or "#rrggbb". */
export interface StudioRecipe {
  kind: StudioKind;
  name: string;
  w: number;
  d: number;
  h: number;
  /** Cabinet: doors side by side above the drawers. */
  doors: number;
  /** Cabinet: drawers stacked at the bottom (all of the front when there are no doors). */
  drawers: number;
  /** Shelf, and a cabinet without fronts: boards between bottom and top. */
  shelves: number;
  base: StudioBase;
  handle: StudioHandle;
  /** Shelf: a back panel. */
  back: boolean;
  lamp: StudioLamp;
  /** Device: a display on its front that shows the linked media player. */
  display: boolean;
  mount: StudioMount;
  body: string;
  front: string;
}

export const STUDIO_KINDS: readonly StudioKind[] = ["cabinet", "shelf", "lamp", "device"];
export const STUDIO_PACK = "own_studio";
const MAX_FRONTS = 6;

const DEFAULTS: Record<StudioKind, Omit<StudioRecipe, "kind" | "name">> = {
  cabinet: { w: 120, d: 45, h: 80, doors: 2, drawers: 1, shelves: 2, base: "plinth", handle: "bar", back: true, lamp: "floor", display: false, mount: "floor", body: "white", front: "wood" },
  shelf: { w: 80, d: 35, h: 180, doors: 0, drawers: 0, shelves: 4, base: "none", handle: "none", back: true, lamp: "floor", display: false, mount: "floor", body: "wood", front: "wood" },
  lamp: { w: 40, d: 40, h: 160, doors: 0, drawers: 0, shelves: 0, base: "none", handle: "none", back: false, lamp: "floor", display: false, mount: "floor", body: "metal", front: "white" },
  device: { w: 60, d: 60, h: 85, doors: 0, drawers: 0, shelves: 0, base: "none", handle: "none", back: false, lamp: "floor", display: true, mount: "floor", body: "white", front: "dark" },
};

/** A fresh recipe of a kind, with the measurements of a common piece. */
export const newRecipe = (kind: StudioKind, name: string): StudioRecipe => ({ kind, name, ...DEFAULTS[kind] });

/** A recipe switched to another kind keeps its name and colours, and takes that kind's measurements. */
export const switchKind = (r: StudioRecipe, kind: StudioKind): StudioRecipe => ({ ...newRecipe(kind, r.name), body: r.body, front: r.front });

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, Number.isFinite(v) ? v : lo));
const r4 = (v: number) => Math.round(v * 10000) / 10000;

/** The recipe with every value inside what the studio builds (sizes 5 cm … 4 m, up to six fronts each). */
export function cleanRecipe(r: StudioRecipe): StudioRecipe {
  return {
    ...r,
    name: r.name.trim().slice(0, 60),
    w: clamp(Math.round(r.w), 5, 400),
    d: clamp(Math.round(r.d), 2, 200),
    h: clamp(Math.round(r.h), 2, 300),
    doors: clamp(Math.round(r.doors), 0, MAX_FRONTS),
    drawers: clamp(Math.round(r.drawers), 0, MAX_FRONTS),
    shelves: clamp(Math.round(r.shelves), 0, 12),
  };
}

/**
 * A box part from metres inside the item (x and z from the centre, y from the floor), turned into fractions of its size. A part that
 * would stick out (a very small piece) is trimmed to the item.
 */
function boxIn(size: [number, number, number], x: number, z: number, w: number, d: number, y: number, h: number, color: string, extra: Partial<PackPart> = {}): PackPart {
  const [W, D, H] = size;
  const span = (centre: number, extent: number, half: number): [number, number] => {
    const lo = Math.max(-half, centre - extent / 2);
    const hi = Math.min(half, centre + extent / 2);
    return hi - lo < 1e-4 ? [Math.max(-half, Math.min(half, centre)), 1e-3 * half * 2] : [(lo + hi) / 2, hi - lo];
  };
  const [cx, ex] = span(x, w, W / 2);
  const [cz, ez] = span(z, d, D / 2);
  const bottom = Math.max(0, Math.min(H * 0.999, y));
  const height = Math.max(H * 0.001, Math.min(H - bottom, h));
  const frac = (v: number) => r4(Math.max(0.001, Math.min(1, v)));
  return { shape: "box", x: r4(cx / W), z: r4(cz / D), w: frac(ex / W), d: frac(ez / D), y: r4(bottom / H), h: frac(height / H), color, ...extra };
}

/** The legs or plinth under a cabinet or a device, and the height it leaves above them. */
function baseParts(size: [number, number, number], base: StudioBase, out: PackPart[]): number {
  const [W, D, H] = size;
  if (base === "legs") {
    const leg = Math.min(0.1, H * 0.25);
    const s = Math.min(0.04, W / 6, D / 6);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) out.push(boxIn(size, sx * (W / 2 - s), sz * (D / 2 - s), s, s, 0, leg, "metal"));
    return leg;
  }
  if (base === "plinth") {
    const plinth = Math.min(0.08, H * 0.2);
    out.push(boxIn(size, 0, -0.02, W - 0.02, D - 0.04, 0, plinth, "dark"));
    return plinth;
  }
  return 0;
}

function cabinet(r: StudioRecipe, size: [number, number, number]): PackPart[] {
  const [W, D, H] = size;
  const parts: PackPart[] = [];
  const y0 = baseParts(size, r.base, parts);
  const fronts = r.doors + r.drawers > 0;
  const handleDepth = r.handle === "none" || !fronts ? 0 : Math.min(0.025, D * 0.08);
  const frontDepth = fronts ? Math.min(0.02, D * 0.1) : 0;
  const bodyDepth = D - frontDepth - handleDepth;
  const bodyZ = -D / 2 + bodyDepth / 2;
  const height = H - y0;
  if (!fronts) {
    // an open cabinet: sides, top, bottom, back and boards
    const t = Math.min(0.018, W / 10, height / 10);
    parts.push(boxIn(size, -W / 2 + t / 2, 0, t, D, y0, height, r.body, { edges: true }));
    parts.push(boxIn(size, W / 2 - t / 2, 0, t, D, y0, height, r.body, { edges: true }));
    parts.push(boxIn(size, 0, -D / 2 + 0.005, W - 2 * t, 0.01, y0, height, r.body));
    for (let i = 0; i <= r.shelves + 1; i++) parts.push(boxIn(size, 0, 0.005, W - 2 * t, D - 0.01, y0 + ((height - t) * i) / (r.shelves + 1), t, r.front, { edges: "faint" }));
    return parts;
  }
  parts.push(boxIn(size, 0, bodyZ, W, bodyDepth, y0, height, r.body, { edges: true }));
  const gap = 0.004;
  const frontZ = -D / 2 + bodyDepth + frontDepth / 2;
  // drawers at the bottom, about 18 cm each, but always leaving 30 cm for doors
  const drawerH = r.doors > 0 ? Math.min(0.18, Math.max(0.08, (height - 0.3) / Math.max(1, r.drawers))) : height / r.drawers;
  const drawersTop = y0 + (r.drawers > 0 ? drawerH * r.drawers : 0);
  const handle = (cx: number, cy: number, upright: boolean) => {
    if (r.handle === "none") return;
    const z = D / 2 - handleDepth / 2;
    if (r.handle === "knob") parts.push(boxIn(size, cx, z, 0.025, handleDepth, cy - 0.0125, 0.025, "metal"));
    else if (upright) parts.push(boxIn(size, cx, z, 0.015, handleDepth, cy - 0.08, 0.16, "metal"));
    else parts.push(boxIn(size, cx, z, Math.min(0.16, W * 0.4), handleDepth, cy - 0.0075, 0.015, "metal"));
  };
  for (let i = 0; i < r.drawers; i++) {
    const y = y0 + drawerH * i;
    parts.push(boxIn(size, 0, frontZ, W - 2 * gap, frontDepth, y + gap, drawerH - 2 * gap, r.front, { edges: "faint" }));
    handle(0, y + drawerH * (r.drawers === 1 && r.doors === 0 ? 0.5 : 0.7), false);
  }
  if (r.doors > 0) {
    const doorW = W / r.doors;
    const doorH = H - drawersTop;
    for (let i = 0; i < r.doors; i++) {
      const cx = -W / 2 + doorW * (i + 0.5);
      parts.push(boxIn(size, cx, frontZ, doorW - 2 * gap, frontDepth, drawersTop + gap, doorH - 2 * gap, r.front, { edges: "faint" }));
      // the handle sits on the edge where the door opens: pairs meet in the middle
      const side = r.doors === 1 ? 1 : i % 2 === 0 ? 1 : -1;
      const hy = drawersTop + doorH * (H > 1.2 ? 0.45 : 0.8);
      handle(cx + side * (doorW / 2 - 0.04), Math.min(hy, H - 0.1), true);
    }
  }
  return parts;
}

function shelf(r: StudioRecipe, size: [number, number, number]): PackPart[] {
  const [W, D, H] = size;
  const t = Math.min(0.02, W / 10, H / 10);
  const parts: PackPart[] = [boxIn(size, -W / 2 + t / 2, 0, t, D, 0, H, r.body, { edges: true }), boxIn(size, W / 2 - t / 2, 0, t, D, 0, H, r.body, { edges: true })];
  if (r.back) parts.push(boxIn(size, 0, -D / 2 + 0.005, W - 2 * t, 0.01, 0, H, r.body));
  const boards = r.shelves + 2;
  for (let i = 0; i < boards; i++) parts.push(boxIn(size, 0, r.back ? 0.005 : 0, W - 2 * t, r.back ? D - 0.01 : D, ((H - t) * i) / (boards - 1), t, r.front, { edges: true }));
  return parts;
}

function lamp(r: StudioRecipe, size: [number, number, number]): PackPart[] {
  const [W, D, H] = size;
  const shadeW = Math.min(W, D);
  const cyl = (x: number, z: number, w: number, y: number, h: number, color: string, extra: Partial<PackPart> = {}): PackPart => ({ ...boxIn(size, x, z, w, w, y, h, color, extra), shape: "cyl" });
  const shade = (y: number, h: number, topScale: number): PackPart => ({ ...boxIn(size, 0, 0, shadeW, shadeW, y, h, r.front, { glow: true, edges: "faint" }), shape: "loft", tw: r4(Math.min(1, (shadeW * topScale) / W)), td: r4(Math.min(1, (shadeW * topScale) / D)) });
  switch (r.lamp) {
    case "pendant": {
      const shadeH = Math.min(0.3, H * 0.4);
      return [cyl(0, 0, Math.min(0.12, shadeW), H - 0.03, 0.03, r.body), cyl(0, 0, Math.min(0.01, shadeW / 4), shadeH, H - shadeH - 0.03, "dark"), shade(0, shadeH, 0.35)];
    }
    case "wall": {
      const plate = Math.min(0.02, D * 0.2);
      return [boxIn(size, 0, -D / 2 + plate / 2, Math.min(0.1, W), plate, H * 0.3, H * 0.4, r.body), boxIn(size, 0, 0, Math.min(0.02, W), D - plate, H * 0.45, Math.min(0.02, H * 0.1), r.body), shade(H * 0.15, H * 0.7, 0.7)];
    }
    default: {
      // floor and table lamps: a foot, a stem and a shade on top
      const shadeH = Math.min(r.lamp === "table" ? 0.25 : 0.35, H * 0.4);
      return [cyl(0, 0, shadeW * 0.6, 0, Math.min(0.03, H * 0.05), r.body, { edges: true }), cyl(0, 0, Math.min(0.03, shadeW / 6), 0.02, H - shadeH - 0.02, r.body), shade(H - shadeH, shadeH, 0.7)];
    }
  }
}

function device(r: StudioRecipe, size: [number, number, number]): PackPart[] {
  const [W, D, H] = size;
  const parts: PackPart[] = [];
  const y0 = r.mount === "floor" ? baseParts(size, r.base, parts) : 0;
  const frontDepth = r.display ? Math.min(0.01, D * 0.1) : 0;
  parts.push(boxIn(size, 0, -frontDepth / 2, W, D - frontDepth, y0, H - y0, r.body, { edges: true }));
  if (r.display) {
    const m = Math.min(0.02, W * 0.08, (H - y0) * 0.08);
    parts.push(boxIn(size, 0, D / 2 - frontDepth / 2, W - 2 * m, frontDepth, y0 + m, H - y0 - 2 * m, r.front, { screen: true }));
  }
  return parts;
}

/** The pack item a recipe builds: its parts, size and kind flags, with the recipe kept for the studio. */
export function buildItem(recipe: StudioRecipe, id: string, language: string): PackItem {
  const r = cleanRecipe(recipe);
  const size: [number, number, number] = [r.w / 100, r.d / 100, r.h / 100];
  const name = r.name || id;
  const names = language === "en" ? { en: name } : { [language.slice(0, 5)]: name, en: name };
  const item: PackItem = { id, name: names, size, parts: [], recipe: r };
  switch (r.kind) {
    case "cabinet":
      item.parts = cabinet(r, size);
      item.surface = true;
      break;
    case "shelf":
      item.parts = shelf(r, size);
      break;
    case "lamp":
      item.parts = lamp(r, size);
      item.light = r.lamp;
      item.mount = r.lamp === "pendant" ? "ceiling" : r.lamp === "wall" ? "wall" : r.lamp === "table" ? "surface" : "floor";
      if (r.lamp === "wall") item.wall_y = 1.6;
      break;
    case "device":
      item.parts = device(r, size);
      item.electric = true;
      item.mount = r.mount;
      if (r.mount === "wall") item.wall_y = 1.2;
      break;
  }
  return item;
}

/** A new item id inside the studio pack, from the name ("Schuhschrank" -> "schuhschrank", then "schuhschrank_2"). */
export function studioId(name: string, taken: readonly string[]): string {
  const base =
    name
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/ß/g, "ss")
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "")
      .slice(0, 32) || "piece";
  const start = /^[a-z0-9]/.test(base) ? base : `p${base}`;
  if (!taken.includes(start)) return start;
  for (let n = 2; ; n++) if (!taken.includes(`${start}_${n}`)) return `${start}_${n}`;
}
