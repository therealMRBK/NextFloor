// The furniture builder's model: a pack being built, new parts and items, templates to start from, sizes in centimetres,
// the same checks the integration runs when a pack is imported (custom_components/nextfloor/packs.py), and the file export.
// Pure functions, no DOM: tested in model.test.ts.

import type { FurniturePack, PackItem, PackPart } from "../packs.ts";

export type Shape = PackPart["shape"];

/** Palette roles: colours that follow the look of the plan (neon, blueprint, day). */
export const COLOR_ROLES = ["body", "fabric", "cushion", "wood", "white", "metal", "dark", "glass", "plant", "pot", "accent"] as const;
export const LIGHTS = ["ceiling", "downlight", "spot", "panel", "pendant", "floor", "uplight", "table", "wall", "strip", "bollard", "garden"] as const;
export const MOUNTS = ["floor", "surface", "wall", "ceiling"] as const;

export const MAX_PARTS = 60;
export const MAX_ITEMS = 200;
export const MAX_PACK_SIZE = 1_000_000;
const ID = /^[a-z0-9][a-z0-9_.-]{0,39}$/;

/** A new part of a shape, standing in the middle of the item. */
export function newPart(shape: Shape): PackPart {
  const base: PackPart = { shape, x: 0, z: 0, w: 0.5, d: 0.5, y: 0, h: 0.5, color: "body", edges: true };
  if (shape === "cyl") return { ...base, w: 0.4, d: 0.4 };
  if (shape === "loft") return { ...base, tw: 0.3, td: 0.3 };
  if (shape === "sweep")
    return {
      ...base,
      w: 1,
      d: 1,
      h: 1,
      stations: [
        [-0.5, 0.1, 0.4, 0.6],
        [0, 0, 0.9, 1],
        [0.5, 0.1, 0.5, 0.7],
      ],
      exp: 2.6,
      n: 16,
    };
  return base;
}

/** A new item with one body box. */
export function newItem(id: string, name: string): PackItem {
  return { id, name: { de: name, en: name }, size: [0.8, 0.5, 0.9], parts: [{ shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "body", edges: true }] };
}

export function newPack(publisher = ""): FurniturePack {
  const slug = publisher.toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 20) || "me";
  return { id: `${slug}.furniture`, name: "My furniture", publisher: publisher || "Me", description: "", release: 1, items: [newItem("cabinet", "Cabinet")] };
}

// ---------------------------------------------------------------- templates

const leg = (x: number, z: number, w: number, d: number, h: number): PackPart => ({ shape: "box", x, z, w, d, y: 0, h, color: "metal" });

/** Starting points: a cabinet, a table, a shelf, a floor lamp, a sofa. Names in German and English. */
export const TEMPLATES: Record<string, () => PackItem> = {
  cabinet: () => ({
    id: "cabinet",
    name: { de: "Schrank", en: "Cabinet" },
    size: [0.8, 0.45, 1.2],
    parts: [
      { shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0.05, h: 0.95, color: "wood", edges: true },
      { shape: "box", x: -0.25, z: 0.48, w: 0.49, d: 0.04, y: 0.07, h: 0.91, color: "white", edges: "faint" },
      { shape: "box", x: 0.25, z: 0.48, w: 0.49, d: 0.04, y: 0.07, h: 0.91, color: "white", edges: "faint" },
      { shape: "box", x: -0.04, z: 0.5, w: 0.02, d: 0.06, y: 0.45, h: 0.15, color: "metal" },
      { shape: "box", x: 0.04, z: 0.5, w: 0.02, d: 0.06, y: 0.45, h: 0.15, color: "metal" },
      leg(-0.45, -0.4, 0.05, 0.08, 0.05),
      leg(0.45, -0.4, 0.05, 0.08, 0.05),
      leg(-0.45, 0.4, 0.05, 0.08, 0.05),
      leg(0.45, 0.4, 0.05, 0.08, 0.05),
    ],
  }),
  table: () => ({
    id: "table",
    name: { de: "Tisch", en: "Table" },
    size: [1.6, 0.9, 0.75],
    surface: true,
    parts: [
      { shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0.95, h: 0.05, color: "wood", edges: true },
      leg(-0.46, -0.44, 0.04, 0.07, 0.95),
      leg(0.46, -0.44, 0.04, 0.07, 0.95),
      leg(-0.46, 0.44, 0.04, 0.07, 0.95),
      leg(0.46, 0.44, 0.04, 0.07, 0.95),
    ],
  }),
  shelf: () => ({
    id: "shelf",
    name: { de: "Regal", en: "Shelf" },
    size: [0.8, 0.35, 1.8],
    parts: [
      { shape: "box", x: -0.48, z: 0, w: 0.04, d: 1, y: 0, h: 1, color: "wood", edges: true },
      { shape: "box", x: 0.48, z: 0, w: 0.04, d: 1, y: 0, h: 1, color: "wood", edges: true },
      ...[0, 0.24, 0.49, 0.74, 0.98].map((y): PackPart => ({ shape: "box", x: 0, z: 0, w: 0.92, d: 1, y, h: 0.02, color: "wood", edges: true })),
    ],
  }),
  floor_lamp: () => ({
    id: "floor_lamp",
    name: { de: "Stehlampe", en: "Floor lamp" },
    size: [0.4, 0.4, 1.6],
    light: "floor",
    parts: [
      { shape: "cyl", x: 0, z: 0, w: 0.7, d: 0.7, y: 0, h: 0.02, color: "metal", edges: true },
      { shape: "cyl", x: 0, z: 0, w: 0.06, d: 0.06, y: 0.02, h: 0.78, color: "metal" },
      { shape: "loft", x: 0, z: 0, w: 1, d: 1, y: 0.78, h: 0.22, color: "white", tw: 0.6, td: 0.6, glow: true, edges: "faint" },
    ],
  }),
  sofa: () => ({
    id: "sofa",
    name: { de: "Sofa", en: "Sofa" },
    size: [2.0, 0.9, 0.8],
    parts: [
      { shape: "box", x: 0, z: 0.05, w: 0.84, d: 0.8, y: 0.12, h: 0.38, color: "fabric", edges: true },
      { shape: "box", x: 0, z: -0.38, w: 0.84, d: 0.24, y: 0.12, h: 0.88, color: "fabric", edges: true },
      { shape: "box", x: -0.46, z: 0, w: 0.08, d: 1, y: 0.12, h: 0.6, color: "fabric", edges: true },
      { shape: "box", x: 0.46, z: 0, w: 0.08, d: 1, y: 0.12, h: 0.6, color: "fabric", edges: true },
      { shape: "box", x: -0.21, z: 0.1, w: 0.41, d: 0.7, y: 0.5, h: 0.1, color: "cushion", edges: "faint" },
      { shape: "box", x: 0.21, z: 0.1, w: 0.41, d: 0.7, y: 0.5, h: 0.1, color: "cushion", edges: "faint" },
      leg(-0.45, -0.4, 0.03, 0.06, 0.12),
      leg(0.45, -0.4, 0.03, 0.06, 0.12),
      leg(-0.45, 0.4, 0.03, 0.06, 0.12),
      leg(0.45, 0.4, 0.03, 0.06, 0.12),
    ],
  }),
};

// ---------------------------------------------------------------- centimetres

/** A part's place and size in centimetres (x/z from the item's middle, y from the floor), from its fractions. */
export interface PartCm {
  x: number;
  z: number;
  y: number;
  w: number;
  d: number;
  h: number;
}

const cm = (v: number) => Math.round(v * 1000) / 10;

export function partCm(part: PackPart, size: PackItem["size"]): PartCm {
  const [W, D, H] = size;
  return { x: cm(part.x * W), z: cm(part.z * D), y: cm(part.y * H), w: cm(part.w * W), d: cm(part.d * D), h: cm(part.h * H) };
}

/** A field typed in centimetres, back as the part's fraction (rounded to 0.1 mm, so numbers stay short). */
export function fromCm(key: keyof PartCm, value: number, size: PackItem["size"]): number {
  const [W, D, H] = size;
  const total = key === "x" || key === "w" ? W : key === "z" || key === "d" ? D : H;
  return Math.round((value / 100 / total) * 10000) / 10000;
}

// ---------------------------------------------------------------- checks

export interface Problem {
  /** Where: "pack", "item:<index>" or "item:<index>/part:<index>". */
  where: string;
  key: string;
  vars?: Record<string, string | number>;
}

const inRange = (v: unknown, lo: number, hi: number) => typeof v === "number" && Number.isFinite(v) && v >= lo && v <= hi;
const color = (v: unknown) => typeof v === "string" && (/^#[0-9a-fA-F]{6}$/.test(v) || (COLOR_ROLES as readonly string[]).includes(v));

function checkPart(p: PackPart, where: string, out: Problem[]): void {
  const bad = (field: string) => out.push({ where, key: "bad_value", vars: { field } });
  if (!["box", "cyl", "loft", "sweep"].includes(p.shape)) bad("shape");
  for (const f of ["x", "z"] as const) if (!inRange(p[f], -0.5, 0.5)) bad(f);
  for (const f of ["w", "d", "h"] as const) if (!inRange(p[f], 0.001, 1)) bad(f);
  if (!inRange(p.y, 0, 1)) bad("y");
  if (!color(p.color)) bad("color");
  if (p.top !== undefined && !color(p.top)) bad("top");
  for (const f of ["tx", "tz"] as const) if (p[f] !== undefined && !inRange(p[f], -0.5, 0.5)) bad(f);
  for (const f of ["tw", "td"] as const) if (p[f] !== undefined && !inRange(p[f], 0.001, 1)) bad(f);
  if (p.rot !== undefined && !inRange(p.rot, -360, 360)) bad("rot");
  if (p.exp !== undefined && !inRange(p.exp, 1.5, 8)) bad("exp");
  if (p.n !== undefined && !(Number.isInteger(p.n) && p.n >= 6 && p.n <= 32)) bad("n");
  if (p.shape === "sweep") {
    const s = p.stations ?? [];
    if (s.length < 2 || s.length > 48) out.push({ where, key: "sweep_stations" });
    for (const [z, y0, y1, w] of s) if (!(inRange(z, -0.5, 0.5) && inRange(y0, 0, 1) && inRange(y1, 0, 1) && inRange(w, 0.001, 1))) bad("stations");
  }
  // the outside: a part that reaches past the item's box is cut nowhere, but it looks wrong in the plan
  if (inRange(p.x, -0.5, 0.5) && inRange(p.w, 0, 1) && Math.abs(p.x) + p.w / 2 > 0.5001 && p.shape !== "sweep") out.push({ where, key: "outside" });
  if (inRange(p.y, 0, 1) && inRange(p.h, 0, 1) && p.y + p.h > 1.0001) out.push({ where, key: "outside" });
}

/** Everything that would stop the integration from importing the pack, and a few warnings ("outside"). */
export function checkPack(pack: FurniturePack): Problem[] {
  const out: Problem[] = [];
  if (!ID.test(pack.id ?? "")) out.push({ where: "pack", key: "bad_pack_id" });
  else if (pack.id.startsWith("nextfloor.")) out.push({ where: "pack", key: "reserved_id" });
  if (!pack.name?.trim() || pack.name.length > 80) out.push({ where: "pack", key: "bad_name" });
  if (!pack.publisher?.trim() || pack.publisher.length > 80) out.push({ where: "pack", key: "bad_publisher" });
  if ((pack.description ?? "").length > 400) out.push({ where: "pack", key: "long_description" });
  if (!pack.items.length || pack.items.length > MAX_ITEMS) out.push({ where: "pack", key: "item_count" });
  const ids = new Set<string>();
  pack.items.forEach((item, i) => {
    const where = `item:${i}`;
    if (!ID.test(item.id ?? "")) out.push({ where, key: "bad_item_id" });
    if (ids.has(item.id)) out.push({ where, key: "duplicate_item_id" });
    ids.add(item.id);
    const names = Object.entries(item.name ?? {});
    if (!names.length || names.some(([lang, text]) => lang.length < 2 || lang.length > 5 || !text.trim() || text.length > 80)) out.push({ where, key: "bad_item_name" });
    if (!Array.isArray(item.size) || item.size.length !== 3 || item.size.some((v) => !inRange(v, 0.01, 10))) out.push({ where, key: "bad_size" });
    if (!item.parts.length || item.parts.length > MAX_PARTS) out.push({ where, key: "part_count", vars: { max: MAX_PARTS } });
    item.parts.forEach((p, k) => checkPart(p, `${where}/part:${k}`, out));
  });
  return out;
}

/** Problems that keep the pack from being imported (the rest are warnings). */
export const blocking = (problems: Problem[]): Problem[] => problems.filter((p) => p.key !== "outside");

// ---------------------------------------------------------------- files

/** The pack as the integration imports it: format header first, defaults and empty fields left out. */
export function exportPack(pack: FurniturePack): string {
  const clean = (part: PackPart): PackPart => {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(part)) {
      if (v === undefined || v === null || v === false) continue;
      out[k] = typeof v === "number" ? Math.round(v * 10000) / 10000 : v;
    }
    return out as unknown as PackPart;
  };
  const items = pack.items.map((item) => {
    const out: Record<string, unknown> = { id: item.id, name: item.name, size: item.size.map((v) => Math.round(v * 1000) / 1000) };
    for (const k of ["electric", "climate", "mount", "wall_y", "surface", "stretch", "light", "hole"] as const) {
      const v = item[k as keyof PackItem];
      if (v === undefined || v === false || (k === "mount" && v === "floor")) continue;
      out[k] = v;
    }
    out.parts = item.parts.map(clean);
    if (item.symbol?.length) out.symbol = item.symbol;
    if (item.colors?.length) out.colors = item.colors;
    return out;
  });
  const file = { format: "nfpack", version: 1, id: pack.id, name: pack.name, publisher: pack.publisher, release: pack.release ?? 1, description: pack.description ?? "", items };
  return JSON.stringify(file, null, 1);
}

/** A pack file read back for editing; null when it is not one. */
export function importPack(text: string): FurniturePack | null {
  if (text.length > MAX_PACK_SIZE) return null;
  try {
    const data = JSON.parse(text) as Record<string, unknown>;
    if (data?.format !== "nfpack" || !Array.isArray(data.items)) return null;
    return { id: String(data.id ?? ""), name: String(data.name ?? ""), publisher: String(data.publisher ?? ""), description: String(data.description ?? ""), release: Number(data.release ?? 1), items: data.items as PackItem[] };
  } catch {
    return null;
  }
}

/** A free id for a new item ("cabinet", "cabinet_2", …). */
export function freeItemId(pack: FurniturePack, base: string): string {
  const taken = new Set(pack.items.map((i) => i.id));
  if (!taken.has(base)) return base;
  let n = 2;
  while (taken.has(`${base}_${n}`)) n++;
  return `${base}_${n}`;
}
