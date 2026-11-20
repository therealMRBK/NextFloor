// The merged geometry of one floor, split into modules in build/.

export { buildFloorGeometry, stairHoles } from "./build/build.ts";
export { FLOOR_LOOK, NEON, SLAB, WALL_MATERIAL_INDEX } from "./build/look.ts";
export { clipAlong, outlineOf } from "./build/outline.ts";
export { wallHeight } from "./build/placement.ts";
export type { FloorGeometry, OpeningInfo } from "./build/types.ts";
export type { WallPaint, WallMaterial } from "./build/solids.ts";
export { wallPaintOf, wallMaterialOf } from "./build/solids.ts";
export { ALWAYS, CUT_OFFSET, GeoBuffer, LineBuffer, pushPrism, shade } from "./geo.ts";
