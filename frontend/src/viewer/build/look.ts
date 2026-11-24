// Colours and sizes of the floor geometry.

/** The base colours of the neon look. */
export const NEON = {
  floor: 0x0e1629,
  slab: 0x0a1120,
  wall: 0x131d31,
  wallTop: 0x14303f,
  edge: 0x37e0ff,
  edgeSoft: 0x5b7cff,
};

/** The floor tint and the pattern tile (column, row in the 4x4 pattern atlas) per floor material. */
export const FLOOR_LOOK: Record<string, { color: number; tile: [number, number] }> = {
  wood: { color: 0x111a2e, tile: [0, 0] },
  oak: { color: 0x131b2d, tile: [1, 0] },
  tiles: { color: 0x0e182f, tile: [2, 0] },
  herringbone: { color: 0x121a2d, tile: [3, 0] },
  carpet: { color: 0x10152b, tile: [0, 1] },
  stone: { color: 0x0f172b, tile: [1, 1] },
  concrete: { color: 0x111827, tile: [2, 1] },
  marble: { color: 0x141b2c, tile: [3, 1] },
  terrazzo: { color: 0x13192a, tile: [0, 2] },
  vinyl: { color: 0x12192c, tile: [1, 2] },
  brick: { color: 0x141628, tile: [2, 2] },
  decking: { color: 0x121929, tile: [3, 2] },
  cork_vinyl: { color: 0x141928, tile: [0, 3] },
  laminate: { color: 0x131a2c, tile: [1, 3] },
  linoleum: { color: 0x111829, tile: [2, 3] },
  parquet: { color: 0x12192b, tile: [3, 3] },
};

/** Wall material index (encoded in tile.x on wall faces): 0 plaster .. 7 slate. */
export const WALL_MATERIAL_INDEX: Record<string, number> = {
  plaster: 0,
  brick: 1,
  concrete: 2,
  wood_cladding: 3,
  stone: 4,
  tile: 5,
  wallpaper: 6,
  slate: 7,
};

/** Furniture material index (encoded in tile.x with tile.y = 2): 0 auto .. 8 rattan. */
export const FURNITURE_MATERIAL_INDEX: Record<string, number> = {
  auto: 0,
  wood: 1,
  oak: 2,
  fabric: 3,
  leather: 4,
  metal: 5,
  lacquer: 6,
  marble: 7,
  rattan: 8,
};

/** The thickness of the floor slab below the floor. */
export const SLAB = 0.2;
/** Exterior walls are sorted into this many compass sectors; each sector is one fold bucket. */
export const SECTORS = 8;
