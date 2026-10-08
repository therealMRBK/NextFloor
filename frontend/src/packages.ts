// Room packages: a set of furniture for a kind of room, placed against the walls of the room's
// bounding box (back wall = top in the plan) or in the middle. Sizes follow FURNITURE_SIZE; rows of
// items along a wall are laid side by side. The result is a starting point to adjust in the editor.

import { bounds, FURNITURE_SIZE, type Furniture, type FurnitureType, type Room } from "./model.ts";

export const PACKAGES = ["kitchen_row", "kitchen_l", "bath", "bedroom", "living", "dining", "office", "kids", "hall"] as const;
export type PackageId = (typeof PACKAGES)[number];

type Wall = "back" | "front" | "left" | "right";

interface Item {
  type: FurnitureType;
  /** Width, depth, height override. */
  size?: [number, number, number];
}

interface Row {
  wall: Wall;
  /** Where the row starts along the wall (seen from inside the room: left end, centre, right end). */
  align: "start" | "center" | "end";
  items: Item[];
}

interface Free {
  type: FurnitureType;
  /** Position as a fraction of the room box (0..1), rotation in degrees. */
  at: [number, number];
  rotation: number;
  size?: [number, number, number];
}

interface Package {
  rows: Row[];
  free: Free[];
}

const DEFS: Record<PackageId, Package> = {
  kitchen_row: {
    rows: [
      { wall: "back", align: "start", items: [{ type: "fridge" }, { type: "kitchen_tall" }, { type: "kitchen", size: [0.9, 0.62, 0.92] }, { type: "sink" }, { type: "dishwasher" }, { type: "stove" }, { type: "kitchen", size: [0.6, 0.62, 0.92] }] },
      { wall: "back", align: "start", items: [{ type: "kitchen_wall", size: [1.2, 0.35, 0.7] }] },
    ],
    free: [
      { type: "table", at: [0.5, 0.72], rotation: 0, size: [1.2, 0.8, 0.75] },
      { type: "lamp_pendant", at: [0.5, 0.72], rotation: 0 },
      { type: "lamp_ceiling", at: [0.5, 0.3], rotation: 0 },
    ],
  },
  kitchen_l: {
    rows: [
      { wall: "back", align: "start", items: [{ type: "fridge" }, { type: "kitchen_tall" }, { type: "sink" }, { type: "dishwasher" }, { type: "kitchen", size: [0.6, 0.62, 0.92] }] },
      { wall: "left", align: "end", items: [{ type: "stove" }, { type: "kitchen", size: [1.2, 0.62, 0.92] }] },
    ],
    free: [
      { type: "island", at: [0.62, 0.62], rotation: 0, size: [1.6, 0.9, 0.92] },
      { type: "bar_stool", at: [0.52, 0.86], rotation: 180 },
      { type: "bar_stool", at: [0.72, 0.86], rotation: 180 },
      { type: "lamp_ceiling", at: [0.5, 0.35], rotation: 0 },
    ],
  },
  bath: {
    rows: [
      { wall: "back", align: "center", items: [{ type: "washbasin" }] },
      { wall: "back", align: "end", items: [{ type: "wc" }] },
      { wall: "front", align: "start", items: [{ type: "bathtub" }] },
      { wall: "left", align: "start", items: [{ type: "washer" }] },
    ],
    free: [{ type: "lamp_downlight", at: [0.5, 0.5], rotation: 0 }],
  },
  bedroom: {
    rows: [
      { wall: "back", align: "center", items: [{ type: "nightstand" }, { type: "bed" }, { type: "nightstand" }] },
      { wall: "left", align: "center", items: [{ type: "wardrobe", size: [2.0, 0.6, 2.1] }] },
      { wall: "front", align: "end", items: [{ type: "dresser" }] },
    ],
    free: [{ type: "lamp_ceiling", at: [0.5, 0.55], rotation: 0 }],
  },
  living: {
    rows: [
      { wall: "back", align: "center", items: [{ type: "tv_board" }] },
      { wall: "right", align: "start", items: [{ type: "shelf" }] },
    ],
    free: [
      { type: "sofa", at: [0.5, 0.72], rotation: 180 },
      { type: "coffee_table", at: [0.5, 0.52], rotation: 0 },
      { type: "rug", at: [0.5, 0.55], rotation: 0, size: [2.2, 1.6, 0.01] },
      { type: "armchair", at: [0.14, 0.5], rotation: 270 },
      { type: "lamp_floor", at: [0.86, 0.8], rotation: 0 },
      { type: "plant", at: [0.9, 0.12], rotation: 0 },
      { type: "lamp_ceiling", at: [0.5, 0.45], rotation: 0 },
    ],
  },
  dining: {
    rows: [{ wall: "back", align: "center", items: [{ type: "sideboard" }] }],
    free: [
      { type: "table", at: [0.5, 0.55], rotation: 0 },
      { type: "chair", at: [0.4, 0.35], rotation: 0 },
      { type: "chair", at: [0.6, 0.35], rotation: 0 },
      { type: "chair", at: [0.4, 0.75], rotation: 180 },
      { type: "chair", at: [0.6, 0.75], rotation: 180 },
      { type: "lamp_pendant", at: [0.5, 0.55], rotation: 0 },
    ],
  },
  office: {
    rows: [
      { wall: "back", align: "center", items: [{ type: "desk" }] },
      { wall: "left", align: "center", items: [{ type: "shelf" }, { type: "shelf" }] },
    ],
    free: [
      { type: "office_chair", at: [0.5, 0.38], rotation: 180 },
      { type: "lamp_ceiling", at: [0.5, 0.55], rotation: 0 },
    ],
  },
  kids: {
    rows: [
      { wall: "left", align: "start", items: [{ type: "bed", size: [0.9, 2.0, 0.8] }] },
      { wall: "back", align: "end", items: [{ type: "desk", size: [1.2, 0.6, 0.75] }] },
      { wall: "right", align: "end", items: [{ type: "shelf" }] },
    ],
    free: [
      { type: "rug", at: [0.55, 0.6], rotation: 0, size: [1.6, 1.2, 0.01] },
      { type: "lamp_ceiling", at: [0.5, 0.5], rotation: 0 },
    ],
  },
  hall: {
    rows: [{ wall: "left", align: "start", items: [{ type: "coat_rack" }] }],
    free: [
      { type: "lamp_downlight", at: [0.5, 0.3], rotation: 0 },
      { type: "lamp_downlight", at: [0.5, 0.7], rotation: 0 },
    ],
  },
};

/** Rotation (degrees) that turns an item's back to a wall; items' fronts are at +z. */
const WALL_ROTATION: Record<Wall, number> = { back: 0, right: 90, front: 180, left: 270 };

/** Furniture of a package for a room. `id` makes new ids. */
export function furnishRoom(room: Room, pkg: PackageId, id: () => string): Furniture[] {
  const b = bounds(room.points);
  const W = b.x1 - b.x0;
  const D = b.z1 - b.z0;
  const def = DEFS[pkg];
  const out: Furniture[] = [];
  const add = (type: FurnitureType, x: number, z: number, rotation: number, size?: [number, number, number]) => {
    const [w, d, h] = size ?? FURNITURE_SIZE[type];
    out.push({ id: id(), type, x: round(x), z: round(z), rotation, w, d, h, variant: null, entity: null, power: null });
  };
  const gap = 0.02;
  for (const row of def.rows) {
    const items = row.items.map((it) => ({ type: it.type, size: it.size ?? FURNITURE_SIZE[it.type] }));
    const along = row.wall === "back" || row.wall === "front" ? W : D;
    // leave out items that do not fit any more
    const fitting: typeof items = [];
    let total = 0;
    for (const it of items) {
      if (total + it.size[0] > along - 0.1) break;
      fitting.push(it);
      total += it.size[0];
    }
    // start offset along the wall, measured from the left end as seen from inside the room
    let pos = row.align === "start" ? 0.05 : row.align === "end" ? along - total - 0.05 : (along - total) / 2;
    for (const it of fitting) {
      const [w, d] = it.size;
      const c = pos + w / 2;
      const depth = d / 2 + gap;
      // seen from inside: back wall runs left→right = +x; right wall runs back→front = +z;
      // front wall runs right→left = -x; left wall runs front→back = -z
      if (row.wall === "back") add(it.type, b.x0 + c, b.z0 + depth, 0, it.size);
      else if (row.wall === "front") add(it.type, b.x1 - c, b.z1 - depth, 180, it.size);
      else if (row.wall === "right") add(it.type, b.x1 - depth, b.z0 + c, 90, it.size);
      else add(it.type, b.x0 + depth, b.z1 - c, WALL_ROTATION.left, it.size);
      pos += w;
    }
  }
  for (const f of def.free) {
    const [w, d] = f.size ?? FURNITURE_SIZE[f.type];
    // keep free items inside the room
    const x = Math.min(b.x1 - w / 2 - 0.05, Math.max(b.x0 + w / 2 + 0.05, b.x0 + W * f.at[0]));
    const z = Math.min(b.z1 - d / 2 - 0.05, Math.max(b.z0 + d / 2 + 0.05, b.z0 + D * f.at[1]));
    add(f.type, x, z, f.rotation, f.size);
  }
  return out;
}

const round = (v: number) => Math.round(v * 1000) / 1000;
