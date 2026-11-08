// Colours of the furniture in the neon look.

import { shade } from "../geo.ts";
import { FURNITURE_ROLES, type FurnitureColors, type FurnitureRole } from "../../furniture-colors.ts";

/** The palette roles furniture and pack items are painted with. */
export const C = {
  body: 0x172238,
  bodyTop: 0x1d2b47,
  fabric: 0x1a2644,
  fabricTop: 0x22325a,
  cushion: 0x243661,
  wood: 0x19233c,
  woodTop: 0x202d4b,
  white: 0x1d2946,
  whiteTop: 0x26375e,
  metal: 0x2a3a60,
  dark: 0x0b111f,
  glass: 0x1c3a52,
  plant: 0x12302e,
  plantTop: 0x1a4540,
  pot: 0x1d2640,
  accent: 0x2b8fb3,
};

/** A surface material: the colour of the sides and of the top. */
export interface Material {
  side: number;
  top: number;
}

const material = (side: number, top = side): Material => ({ side, top });

export const M = {
  body: material(C.body, C.bodyTop),
  fabric: material(C.fabric, C.fabricTop),
  cushion: material(C.cushion),
  cushionSoft: material(C.cushion, C.fabricTop),
  wood: material(C.wood, C.woodTop),
  white: material(C.white, C.whiteTop),
  worktop: material(C.whiteTop),
  metal: material(C.metal),
  dark: material(C.dark),
  darkBody: material(C.dark, C.body),
  glass: material(C.glass),
  accent: material(C.accent),
  pot: material(C.pot),
  plant: material(C.plant, C.plantTop),
  bedding: material(C.white, C.whiteTop),
  pillow: material(C.whiteTop),
};
export { material };

export const EDGE_FURN = shade(0x5b7cff, 0.3);
export const EDGE_FAINT = shade(0x5b7cff, 0.17);
export const EDGE_GLOW = shade(0x37e0ff, 0.45);

export { FURNITURE_ROLES, type FurnitureColors, type FurnitureRole };

const STOCK_C = { ...C };
const stockMaterials = Object.fromEntries(Object.entries(M).map(([k, m]) => [k, { ...m }])) as Record<keyof typeof M, Material>;
let appliedKey = "";

const hexOf = (v: string | null | undefined): number | null => (typeof v === "string" && /^#[0-9a-f]{6}$/i.test(v) ? Number.parseInt(v.slice(1), 16) : null);

/**
 * Sets the colours of the roles before furniture is built: every builder and pack item reads `C` and `M` while it
 * builds, so the next rebuild takes them. Returns whether anything changed. The top of a role is a shade lighter.
 */
export function applyFurnitureColors(colors: FurnitureColors | null | undefined): boolean {
  const own = Object.fromEntries(FURNITURE_ROLES.map((r) => [r, hexOf(colors?.[r])]).filter(([, v]) => v !== null)) as Partial<Record<FurnitureRole, number>>;
  const key = JSON.stringify(own);
  if (key === appliedKey) return false;
  appliedKey = key;
  Object.assign(C, STOCK_C);
  for (const [k, m] of Object.entries(stockMaterials)) Object.assign(M[k as keyof typeof M], m);
  const top = (v: number) => shade(v, 1.25).getHex();
  const set = (role: FurnitureRole, entries: (keyof typeof C)[], tops: (keyof typeof C)[], mats: (keyof typeof M)[]) => {
    const v = own[role];
    if (v === undefined) return;
    for (const e of entries) C[e] = v;
    for (const e of tops) C[e] = top(v);
    // a material whose side or top was one of the role's stock colours takes the new one
    const swap = new Map<number, number>([...entries.map((e) => [STOCK_C[e], v] as [number, number]), ...tops.map((e) => [STOCK_C[e], top(v)] as [number, number])]);
    for (const m of mats) {
      const stock = stockMaterials[m];
      M[m].side = swap.get(stock.side) ?? M[m].side;
      M[m].top = swap.get(stock.top) ?? M[m].top;
    }
  };
  set("body", ["body"], ["bodyTop"], ["body", "darkBody"]);
  set("wood", ["wood"], ["woodTop"], ["wood"]);
  set("fabric", ["fabric", "cushion"], ["fabricTop"], ["fabric", "cushion", "cushionSoft"]);
  set("white", ["white"], ["whiteTop"], ["white", "worktop", "bedding", "pillow"]);
  set("metal", ["metal"], [], ["metal"]);
  set("dark", ["dark"], [], ["dark", "darkBody"]);
  return true;
}
