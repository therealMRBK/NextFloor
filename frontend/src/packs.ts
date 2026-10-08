// Furniture from imported packs (see custom_components/nextfloor/packs.py for the format). Pack
// furniture has the type "pack:<pack id>:<item id>". Every bundle (main, editor, 3D) keeps its own
// registry, filled with setPacks() from the packs the backend returns.

import { builtinBase, ELECTRIC_FURNITURE, FURNITURE_SIZE, surfaceHeight, WALL_LAMP_Y, type Floor, type Furniture } from "./model.ts";
import type { LampModel } from "./viewer/viewer3d.ts";

export interface PackPart {
  /** A box, a cylinder, a loft (a box whose top face is another rectangle) or a sweep (a smooth body along z). */
  shape: "box" | "cyl" | "loft" | "sweep";
  /** Centre across and in depth (fractions -0.5..0.5 of the item's width and depth, front at +z). */
  x: number;
  z: number;
  /** Extent in fractions of the item's width and depth; a cylinder's diameter is the smaller one. */
  w: number;
  d: number;
  /** Bottom and height in fractions of the item's height. */
  y: number;
  h: number;
  /** "#rrggbb" or a palette role ("body", "fabric", "wood", …). */
  color: string;
  top?: string;
  /** Outline: true (soft blue), "glow" (cyan like the walls) or "faint". */
  edges?: boolean | "glow" | "faint";
  /** Lamps: shines in the colour and brightness of the linked light. */
  glow?: boolean;
  /** A screen: shows the linked media player's app colour and picture on its front (+z). */
  screen?: boolean;
  /** Loft: centre and extent of the top rectangle (defaults: the same as the bottom). */
  tx?: number;
  tz?: number;
  tw?: number;
  td?: number;
  /** Cylinder axis: upright (y, default) or lying along x or z (wheels, pipes, rollers). */
  axis?: "x" | "y" | "z";
  /** Sweep: cross sections along z as [z, bottom, top, width] in fractions of the item's depth, height and width. */
  stations?: [number, number, number, number][];
  /** Sweep: how boxy the cross section is (2 = ellipse) and how many points go round it. */
  exp?: number;
  n?: number;
  /** A body part drawn in the colour the item's owner picked (see PackItem.colors). */
  paint?: boolean;
  /** Turn of the part around its own centre (degrees around the vertical axis). */
  rot?: number;
}

export type PackSymbol =
  | { shape: "rect"; x: number; z: number; w: number; d: number; fill?: boolean }
  | { shape: "circle"; x: number; z: number; r: number }
  | { shape: "line"; x1: number; z1: number; x2: number; z2: number };

export interface PackItem {
  id: string;
  /** Names by language code. */
  name: Record<string, string>;
  /** Default width, depth, height (metres). */
  size: [number, number, number];
  electric?: boolean;
  /** On the floor, on the furniture below, on a wall (bottom at wall_y) or hanging from the ceiling. */
  mount?: "floor" | "surface" | "wall" | "ceiling";
  wall_y?: number;
  /** Its top carries other items. */
  surface?: boolean;
  /** A vehicle: offered for parking spots. */
  vehicle?: boolean;
  /** Stairs: cuts a stairwell opening into the floor above when it reaches it. */
  hole?: boolean;
  /** A lamp: how its light spreads. */
  light?: LampModel;
  parts: PackPart[];
  symbol?: PackSymbol[];
  /** Colours to choose from (stored as the furniture's variant); the first one is the default. */
  colors?: { id: string; name: Record<string, string>; hex: string }[];
}

export interface FurniturePack {
  id: string;
  name: string;
  publisher: string;
  description?: string;
  /** Release number; a newer release of the same id replaces the installed one. */
  release?: number;
  /** Comes with NextFloor (cannot be removed). */
  builtin?: boolean;
  items: PackItem[];
  imported_at?: number;
}

let registry: FurniturePack[] = [];
let items = new Map<string, PackItem>();
let version = 0;

export function setPacks(packs: FurniturePack[]): void {
  registry = packs;
  items = new Map(packs.flatMap((p) => p.items.map((it) => [packType(p.id, it.id), it] as const)));
  version++;
}

export function getPacks(): readonly FurniturePack[] {
  return registry;
}

/** Changes with every setPacks(), to notice new packs. */
export function packsVersion(): number {
  return version;
}

export function packType(packId: string, itemId: string): string {
  return `pack:${packId}:${itemId}`;
}

export function isPackType(type: string): boolean {
  return type.startsWith("pack:");
}

/** The pack item of a furniture type (undefined for built-in types and removed packs). */
/** Packs that were merged into another one: furniture placed from them keeps working. */
const PACK_ALIASES: Record<string, string> = {};

/** The screen part of a pack item (a TV or monitor), if it has one. */
export function packScreen(type: string): PackPart | undefined {
  return packItem(type)?.parts.find((p) => p.screen);
}

/**
 * A pack item with a real display (a TV, a monitor, a smart display) rather than a small status light (a
 * printer's panel, a wallbox's LED): one of its screen parts is at least 6 cm on both sides of its face.
 */
export function packDisplay(type: string): boolean {
  const item = packItem(type);
  if (!item) return false;
  const [W, D, H] = item.size;
  return item.parts.some((p) => {
    if (!p.screen) return false;
    const [a, b] = [p.w * W, p.d * D, p.h * H].sort((x, y) => y - x);
    return a >= 0.06 && b >= 0.06;
  });
}

export function packItem(type: string): PackItem | undefined {
  if (!isPackType(type)) return undefined;
  const hit = items.get(type);
  if (hit) return hit;
  const [, pack, ...rest] = type.split(":");
  const alias = PACK_ALIASES[pack];
  return alias ? items.get(`pack:${alias}:${rest.join(":")}`) : undefined;
}

/** Default size of any furniture type. */
export function furnitureSize(type: string): [number, number, number] {
  return (FURNITURE_SIZE as Record<string, [number, number, number]>)[type] ?? packItem(type)?.size ?? [0.6, 0.6, 0.8];
}

/** Whether a type can be linked with entities (power sensor, switch …). */
export function isElectric(type: string): boolean {
  // a pack item that only lights (a mirror with light, an aquarium) links a light like any lamp
  return ELECTRIC_FURNITURE.has(type) || !!packItem(type)?.electric || !!packItem(type)?.light;
}

/** Name of a pack item in a language (English, then the first name as fallback). */
export function packItemName(item: PackItem, language: string): string {
  const lang = language.split("-")[0];
  return item.name[lang] ?? item.name.en ?? Object.values(item.name)[0] ?? item.id;
}


// English names of the packs that come with NextFloor: a pack file carries one (German) name, the furniture inside both
const PACK_NAMES_EN: Record<string, string> = {
  wohnen: "Living & Pets",
  kino: "Home Cinema & Gaming",
  kueche: "Kitchen Extras",
  bad: "Bathroom Extras",
  schlafen: "Bedroom & Kids",
  technik: "Office & Homelab",
  energie: "Energy & Building Services",
  garten: "Garden & Terrace",
  fitness: "Fitness",
  fahrzeuge: "Vehicles",
};

/** A pack's name in the user's language: the built-in packs in English outside German, others as they come. */
export function packName(pack: { id: string; name: string }, language: string): string {
  if (language.split("-")[0] === "de") return pack.name;
  const m = /^nextfloor\.(.+)$/.exec(pack.id);
  return (m && PACK_NAMES_EN[m[1]]) || pack.name;
}

/** Height of the bottom of a pack item, a wall light or an LED strip above the floor (0 for other built-in furniture). */
export function mountBase(floor: Floor, f: Pick<Furniture, "type" | "x" | "z" | "h"> & { mount_y?: number | null }): number {
  const item = packItem(f.type);
  if (f.mount_y != null) return f.mount_y;
  // wall lights at the usual height, LED strips just under the ceiling
  if (f.type === "lamp_wall") return WALL_LAMP_Y;
  if (f.type === "led_strip") return Math.max(0, floor.height - 0.04 - Math.max(0.02, f.h));
  switch (item?.mount) {
    case "surface":
      return surfaceHeight(floor, f.x, f.z);
    case "wall":
      return item.wall_y ?? 1;
    case "ceiling":
      return Math.max(0, floor.height - f.h);
    default:
      // built-in models: where they are drawn by default (a wall cabinet at 1.45 m)
      return item ? 0 : builtinBase(f);
  }
}
