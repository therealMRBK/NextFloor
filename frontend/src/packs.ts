// Furniture packs. A pack is a file with items made of simple parts (format: custom_components/nextfloor/packs.py).
// Placed pack furniture has the type "pack:<pack id>:<item id>". Each bundle (main, editor, 3D) holds its own
// registry, filled through setPacks() with what the backend returned.

import type { StudioRecipe } from "./studio/recipes.ts";
import { builtinBase, ceilingAt, ceilingOf, ELECTRIC_FURNITURE, FURNITURE_SIZE, offsetAt, surfaceHeight, WALL_LAMP_Y, type Floor, type Furniture } from "./model.ts";
import type { LampModel } from "./viewer/viewer3d.ts";

/** One building block of an item. Positions and extents are fractions of the item's own size. */
export type PartMove = "down" | "left" | "right" | "out" | "slide_left" | "slide_right";

export interface PackPart {
  /** box, cylinder, loft (a box whose top face is a different rectangle) or sweep (a smooth body along z). */
  shape: "box" | "cyl" | "loft" | "sweep";
  /** Centre across and in depth, -0.5..0.5 of width and depth; the front is +z. */
  x: number;
  z: number;
  /** Extent in fractions of width and depth (a cylinder's diameter is the smaller of the two). */
  w: number;
  d: number;
  /** Underside and height, as fractions of the item's height. */
  y: number;
  h: number;
  /** "#rrggbb", or the name of a palette role such as "body", "fabric" or "wood". */
  color: string;
  top?: string;
  /** Edge lines: true (soft blue), "glow" (cyan, like the walls) or "faint". */
  edges?: boolean | "glow" | "faint";
  /** A lamp part: lights up in the colour and brightness of the linked light. */
  glow?: boolean;
  /** A screen: shows the colour and picture of the linked media player on its front face. */
  screen?: boolean;
  /** A picture frame's opening: shows the item's own photo. */
  picture?: boolean;
  /** A button or socket of a switch plate (0 = the first): glows while the entity of that gang is on. */
  gang?: number;
  /**
   * Moves with the item's cover entity: "down" rolls towards the item's top (a blind, a screen), "left"/"right" gather towards that side
   * (a curtain), "out" reaches out from the back (an awning), "slide_left"/"slide_right" slide the part away (a gate).
   */
  move?: PartMove;
  /** Loft: centre and size of the top rectangle (default: same as the base). */
  tx?: number;
  tz?: number;
  tw?: number;
  td?: number;
  /** Cylinder axis: upright (y, the default) or lying along x or z (wheels, pipes, rollers). */
  axis?: "x" | "y" | "z";
  /** Sweep: cross sections along z as [z, bottom, top, width], as fractions of depth, height and width. */
  stations?: [number, number, number, number][];
  /** Sweep: how boxy a cross section is (2 is an ellipse) and how many points go around it. */
  exp?: number;
  n?: number;
  /** Drawn in the colour the owner picked for the item (see PackItem.colors). */
  paint?: boolean;
  /** Turn around the part's own vertical axis, in degrees. */
  rot?: number;
}

/** A line drawing of an item for the 2D plan. */
export type PackSymbol =
  | { shape: "rect"; x: number; z: number; w: number; d: number; fill?: boolean }
  | { shape: "circle"; x: number; z: number; r: number }
  | { shape: "line"; x1: number; z1: number; x2: number; z2: number };

export interface PackItem {
  id: string;
  /** Names by language code. */
  name: Record<string, string>;
  /** Standard width, depth and height in metres. */
  size: [number, number, number];
  electric?: boolean;
  /** A thermostat / heat pump / A/C item linked to a Home Assistant climate entity. */
  climate?: boolean;
  /** Stands on the floor, on furniture below it, on a wall (from wall_y up) or hangs from the ceiling. */
  mount?: "floor" | "surface" | "wall" | "ceiling";
  wall_y?: number;
  /** Other items can stand on its top. */
  surface?: boolean;
  /** A 3D model the owner uploaded (the id of a .glb on their Home Assistant). The parts remain the fallback. */
  mesh?: string;
  /** A vehicle; offered for parking spots. */
  vehicle?: boolean;
  /** An animal that roams its room in 3D (drawn apart from the furniture and walked around by the view). */
  pet?: boolean;
  /** The household: a waste bin (pickup day), a mailbox (post) or a plant (soil moisture), shown from a sensor of the item. */
  household?: "bin" | "mail" | "plant";
  /** Light switches and sockets: how many buttons (gangs) it has, each linked to its own entity. */
  gangs?: number;
  /** Items with moving parts: an open cover pulls them in ("retracts": curtain, screen, gate) or out ("extends": an awning). */
  cover?: "retracts" | "extends";
  /** Where the moving parts rest without a cover entity: 0 drawn in … 1 all the way out (default 1). */
  cover_rest?: number;
  /** Scale every part evenly when the item is resized, instead of keeping legs, arms and plates at their size. */
  stretch?: boolean;
  /** Stairs: cut a stairwell into the floor above where they reach it. */
  hole?: boolean;
  /** A lamp: the way its light spreads. */
  light?: LampModel;
  parts: PackPart[];
  symbol?: PackSymbol[];
  /** Colours to choose from, stored as the furniture's variant. The first is the default. */
  colors?: { id: string; name: Record<string, string>; hex: string }[];
  /** Built in the editor's furniture studio: its settings, so it can be opened there again. */
  recipe?: StudioRecipe;
}

export interface FurniturePack {
  id: string;
  name: string;
  publisher: string;
  description?: string;
  /** A newer release of an installed id replaces it. */
  release?: number;
  /** Ships with NextFloor and cannot be removed. */
  builtin?: boolean;
  items: PackItem[];
  imported_at?: number;
}

// ---------------------------------------------------------------- registry

let installed: FurniturePack[] = [];
let byType = new Map<string, PackItem>();
let generation = 0;

export const packType = (packId: string, itemId: string): string => `pack:${packId}:${itemId}`;
export const isPackType = (type: string): boolean => type.startsWith("pack:");

/** Replaces the registry. */
export function setPacks(packs: FurniturePack[]): void {
  installed = packs;
  byType = new Map();
  for (const pack of packs) for (const item of pack.items) byType.set(packType(pack.id, item.id), item);
  generation += 1;
}

export const getPacks = (): readonly FurniturePack[] => installed;

/** Increases with every setPacks(), so callers can tell that packs changed. */
export const packsVersion = (): number => generation;

/** Old pack ids that were merged into another pack; furniture placed from them keeps working. */
const MERGED_PACKS: Record<string, string> = {};

/** The item behind a pack type, or undefined for built-in types and removed packs. */
export function packItem(type: string): PackItem | undefined {
  if (!isPackType(type)) return undefined;
  const direct = byType.get(type);
  if (direct) return direct;
  const [, packId, ...itemParts] = type.split(":");
  const successor = MERGED_PACKS[packId];
  return successor ? byType.get(packType(successor, itemParts.join(":"))) : undefined;
}

// ---------------------------------------------------------------- what an item is

// ---------------------------------------------------------------- resizing

/** How far from each end of an axis parts keep their real size (legs, arms, plates, handles), at most a third of the axis. */
const KEEP = 0.22;

/**
 * Where a coordinate of the item's standard size `from` lands in a resized item of size `to`, along one axis that runs from `lo`
 * to `lo + from` (x and z are centred, y starts at 0). Near either end it keeps its distance from that end; in the middle it stretches.
 */
function fitAxis(u: number, lo: number, from: number, to: number): number {
  const keep = Math.min(KEEP, from / 3);
  if (to <= keep * 2.4 || Math.abs(to - from) < 1e-6) return lo * (to / from) + (u - lo) * (to / from);
  const newLo = lo * (to / from);
  const t = u - lo;
  if (t <= keep) return newLo + t;
  if (t >= from - keep) return newLo + to - (from - t);
  return newLo + keep + ((t - keep) * (to - 2 * keep)) / (from - 2 * keep);
}

/** A part's extent [a, b] (fractions of `from`) on a resized axis, as fractions of `to`. */
function fitSpan(a: number, b: number, lo: number, from: number, to: number): [number, number] {
  return [fitAxis(a * from, lo * from, from, to) / to, fitAxis(b * from, lo * from, from, to) / to];
}

const fitted = new WeakMap<PackItem, Map<string, PackPart[]>>();

/**
 * The parts of an item resized to w × d × h, with what should stay staying: within 22 cm of each end of an axis a part keeps its real
 * size and its distance from that end (a sofa's 20 cm arms, a table's legs and its top plate), the middle stretches. Turned parts keep
 * their own size and only move; vehicles and items marked `stretch` scale evenly.
 */
export function fittedParts(item: PackItem, w: number, d: number, h: number): PackPart[] {
  const [sw, sd, sh] = item.size;
  if (item.vehicle || item.stretch || (Math.abs(w - sw) < 1e-4 && Math.abs(d - sd) < 1e-4 && Math.abs(h - sh) < 1e-4)) return item.parts;
  const key = `${w.toFixed(4)}|${d.toFixed(4)}|${h.toFixed(4)}`;
  let cache = fitted.get(item);
  const known = cache?.get(key);
  if (known) return known;
  const parts = item.parts.map((p): PackPart => {
    if (p.shape === "sweep") return p;
    const [x0, x1] = fitSpan(p.x - p.w / 2, p.x + p.w / 2, -0.5, sw, w);
    const [z0, z1] = fitSpan(p.z - p.d / 2, p.z + p.d / 2, -0.5, sd, d);
    const [y0, y1] = fitSpan(p.y, p.y + p.h, 0, sh, h);
    if (p.rot) {
      // a turned part keeps its own size: only its centre moves
      return { ...p, x: (x0 + x1) / 2, z: (z0 + z1) / 2, w: (p.w * sw) / w, d: (p.d * sd) / d, y: y0, h: y1 - y0 };
    }
    const next: PackPart = { ...p, x: (x0 + x1) / 2, z: (z0 + z1) / 2, w: x1 - x0, d: z1 - z0, y: y0, h: y1 - y0 };
    if (p.shape === "loft") {
      const [tx, tz, tw, td] = [p.tx ?? p.x, p.tz ?? p.z, p.tw ?? p.w, p.td ?? p.d];
      const [ta, tb] = fitSpan(tx - tw / 2, tx + tw / 2, -0.5, sw, w);
      const [tc, te] = fitSpan(tz - td / 2, tz + td / 2, -0.5, sd, d);
      Object.assign(next, { tx: (ta + tb) / 2, tz: (tc + te) / 2, tw: tb - ta, td: te - tc });
    }
    return next;
  });
  if (!cache) fitted.set(item, (cache = new Map()));
  if (cache.size > 32) cache.clear();
  cache.set(key, parts);
  return parts;
}

/** Whether an item has parts that move with a cover entity. */
export const hasMovingParts = (item: PackItem | undefined): boolean => !!item?.parts.some((p) => p.move);

/** How far the moving parts are out (0 … 1) for a cover at `position` percent open (null: no entity, they rest). */
export function coverReach(item: PackItem, position: number | null): number {
  if (position === null) return Math.min(1, Math.max(0, item.cover_rest ?? 1));
  const open = Math.min(1, Math.max(0, position / 100));
  return item.cover === "extends" ? open : 1 - open;
}

/** Moving parts placed for a reach k (0 drawn in … 1 out); parts that have all but vanished are left out. */
export function movedParts(parts: readonly PackPart[], k: number): PackPart[] {
  const out: PackPart[] = [];
  for (const p of parts) {
    if (!p.move) continue;
    const q: PackPart = { ...p };
    // an edge at `v` gathered towards the anchor `a` of the item (fractions): it keeps k of its distance
    const toward = (v: number, a: number) => a + (v - a) * k;
    if (p.move === "down") {
      const [lo, hi] = [toward(p.y, 1), toward(p.y + p.h, 1)];
      Object.assign(q, { y: lo, h: hi - lo });
    } else if (p.move === "left" || p.move === "right") {
      const a = p.move === "left" ? -0.5 : 0.5;
      const [x0, x1] = [toward(p.x - p.w / 2, a), toward(p.x + p.w / 2, a)];
      Object.assign(q, { x: (x0 + x1) / 2, w: Math.abs(x1 - x0) });
      if (p.tx !== undefined || p.tw !== undefined) {
        const [t0, t1] = [toward((p.tx ?? p.x) - (p.tw ?? p.w) / 2, a), toward((p.tx ?? p.x) + (p.tw ?? p.w) / 2, a)];
        Object.assign(q, { tx: (t0 + t1) / 2, tw: Math.abs(t1 - t0) });
      }
    } else if (p.move === "out") {
      const [z0, z1] = [toward(p.z - p.d / 2, -0.5), toward(p.z + p.d / 2, -0.5)];
      Object.assign(q, { z: (z0 + z1) / 2, d: z1 - z0 });
      if (p.tz !== undefined || p.td !== undefined) {
        const [t0, t1] = [toward((p.tz ?? p.z) - (p.td ?? p.d) / 2, -0.5), toward((p.tz ?? p.z) + (p.td ?? p.d) / 2, -0.5)];
        Object.assign(q, { tz: (t0 + t1) / 2, td: t1 - t0 });
      }
    } else {
      // a sliding part moves by its own width times how far it is open
      const shift = (1 - k) * p.w * (p.move === "slide_left" ? -1 : 1);
      Object.assign(q, { x: p.x + shift, ...(p.tx !== undefined ? { tx: p.tx + shift } : {}) });
    }
    if (q.w > 0.002 && q.d > 0.002 && q.h > 0.002) out.push(q);
  }
  return out;
}

/** The screen part of an item, if it has one. */
export const packScreen = (type: string): PackPart | undefined => packItem(type)?.parts.find((part) => part.screen);

const MIN_DISPLAY = 0.06; // metres

/** A real display (TV, monitor) as opposed to a status light: some screen part is at least 6 cm in both directions. */
export function packDisplay(type: string): boolean {
  const item = packItem(type);
  if (!item) return false;
  const [width, depth, height] = item.size;
  return item.parts
    .filter((part) => part.screen)
    .some((part) => {
      const [longest, middle] = [part.w * width, part.d * depth, part.h * height].sort((a, b) => b - a);
      return middle >= MIN_DISPLAY && longest >= MIN_DISPLAY;
    });
}

/** The standard size of any furniture type; an unknown type gets a small default. */
export function furnitureSize(type: string): [number, number, number] {
  return (FURNITURE_SIZE as Record<string, [number, number, number]>)[type] ?? packItem(type)?.size ?? [0.6, 0.6, 0.8];
}

/** Whether entities (power sensor, switch ...) can be linked. A pack item that only lights counts: it links a light like a lamp. */
export function isElectric(type: string): boolean {
  const item = packItem(type);
  return ELECTRIC_FURNITURE.has(type) || !!item?.electric || !!item?.light || !!item?.climate;
}
/** Whether a piece can show an own photo (a picture frame: a pack item with a picture part). */
export const hasPicture = (type: string): boolean => !!packItem(type)?.parts.some((p) => p.picture);

/** Whether a pack item is specifically a Home Assistant climate device. */
export const isClimateFurniture = (type: string): boolean => !!packItem(type)?.climate;

/** An item's name in a language: that language, else English, else whatever is there, else its id. */
export function packItemName(item: PackItem, language: string): string {
  return item.name[language.split("-")[0]] ?? item.name.en ?? Object.values(item.name)[0] ?? item.id;
}

// Pack files carry one name (German). The packs that ship with NextFloor get English names here.
const ENGLISH_NAMES: Record<string, string> = {
  wohnen: "Living & Pets",
  kino: "Home Cinema & Gaming",
  kueche: "Kitchen Extras",
  bad: "Bathroom Extras",
  schlafen: "Bedroom & Kids",
  technik: "Office & Homelab",
  energie: "Energy & Building Services",
  garten: "Garden & Terrace (older)",
  fitness: "Fitness (older)",
  fahrzeuge: "Vehicles",
  ikea: "IKEA sizes",
  treppen: "Stairs & railings",
  ausbau: "Architecture & fit-out",
  werkstatt: "Garage & workshop",
  a_wohnzimmer: "Living room",
  a_schlafzimmer: "Bedroom",
  a_kueche: "Kitchen",
  a_bad: "Bathroom",
  a_kinderzimmer: "Kids' room",
  a_buero: "Office & gaming",
  a_fitness: "Fitness",
  a_haustiere: "Pets",
  a_garten: "Garden & patio",
  a_kino: "Home cinema & hi-fi",
  a_smart: "Smart home & tech",
  a_haustechnik: "Utility & building services",
  a_saison: "Season & decoration",
  a_smart2: "Smart home 2",
  a_haustechnik2: "Building services 2",
  a_wellness: "Wellness",
  a_garten2: "Garden 2",
  a_kueche2: "Kitchen 2",
  a_fahrzeuge2: "Vehicles 2",
  a_aussenkueche: "Outdoor kitchen & terrace",
  a_werkstatt2: "Workshop 2",
  a_japandi: "Japandi & Scandi",
  a_loft: "Loft & industrial",
  a_gruen: "Indoor greenery",
  a_musik: "Music & studio",
  a_bilder: "Pictures & frames",
};

/** The pack's name for the user's language: built-in packs are English outside German, other packs keep their own name. */
export function packName(pack: { id: string; name: string }, language: string): string {
  if (language.split("-")[0] === "de") return pack.name;
  const short = /^nextfloor\.(.+)$/.exec(pack.id)?.[1];
  return (short && ENGLISH_NAMES[short]) || pack.name;
}

/** How high above the floor the underside of a piece is: pack items by their mount, wall lights, LED strips and own heights included. */
export function mountBase(floor: Floor, piece: Pick<Furniture, "type" | "x" | "z" | "h"> & { mount_y?: number | null; ceiling_y?: number | null }): number {
  if (piece.mount_y != null) return piece.mount_y;
  // a room on its own level (a sunken entrance): what stands or hangs on its walls moves with its floor; ceiling items stay
  return levelledBase(floor, piece) + (hangsFromCeiling(piece) ? 0 : offsetAt(floor, piece.x, piece.z));
}

const hangsFromCeiling = (piece: Pick<Furniture, "type">): boolean => piece.type === "led_strip" || packItem(piece.type)?.mount === "ceiling";

function levelledBase(floor: Floor, piece: Pick<Furniture, "type" | "x" | "z" | "h"> & { ceiling_y?: number | null }): number {
  if (piece.type === "lamp_wall") return WALL_LAMP_Y;
  // LED strips sit just below the ceiling of their room
  if (piece.type === "led_strip") return Math.max(0, ceilingAt(floor, piece.x, piece.z) - 0.04 - Math.max(0.02, piece.h));
  const item = packItem(piece.type);
  if (!item) return builtinBase(piece);
  switch (item.mount) {
    case "surface":
      return surfaceHeight(floor, piece.x, piece.z);
    case "wall":
      return item.wall_y ?? 1;
    case "ceiling":
      return Math.max(0, ceilingOf(floor, piece) - piece.h);
    default:
      return 0;
  }
}

// ---------------------------------------------------------------- owned 3D models

/** Fetches a model file by id, or null. Set by the host, which has Home Assistant's login. */
export type MeshSource = (id: string) => Promise<ArrayBuffer | null>;

let meshSource: MeshSource | null = null;
const loadedMeshes = new Set<string>();

export const setMeshSource = (source: MeshSource | null): void => {
  meshSource = source;
};
export const getMeshSource = (): MeshSource | null => meshSource;

/** Records that a model has loaded and is drawn in place of its item's parts. */
export const markMeshReady = (id: string): void => void loadedMeshes.add(id);

/** Whether the item's own model has loaded (then its parts stay out of the merged geometry). */
export function hasMesh(type: string): boolean {
  const id = byType.get(type)?.mesh;
  return id !== undefined && loadedMeshes.has(id);
}

/** The household kind of a piece of furniture: the pack's flag, else the built-in plant, else a pack plant by its id. */
export function householdKind(type: string): "bin" | "mail" | "plant" | null {
  if (type === "plant") return "plant";
  const item = packItem(type);
  if (!item) return null;
  if (item.household) return item.household;
  return /monstera|plant|herb_garden|flower_pots|bonsai|ficus|cactus|kaktus/.test(item.id) ? "plant" : null;
}
