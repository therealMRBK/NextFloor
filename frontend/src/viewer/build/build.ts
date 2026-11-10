// Builds the merged, vertex-coloured geometry of one floor: room floors with material patterns, walls with door and window
// openings, edge lines and baked wall shadows.
//
// Walls are grouped into buckets by the direction they face. Every vertex carries a "fold" value and a shader patch (see
// fold.ts) decides per bucket: in the cut view the upper parts disappear; in the tall view the walls turned towards the
// camera are drawn as tinted glass instead.
//   fold = -1        always visible, never glass (furniture, lines of the lower part)
//   fold = b         upper wall part: visible while bucket b stands
//   fold = 16 + b    cut edge: visible while bucket b is cut
//   fold = 32 + b    lower wall part: always visible, glass when the bucket is
//   fold = 48 + b    top face of the lower part at the cut height: visible while bucket b is cut

import { generateWalls } from "../../geometry/walls.ts";
import { mergeHoles } from "../../geometry/holes.ts";
import { isShapedStair, stairOpeningInPlan } from "../../geometry/stairs.ts";
import { furnitureFootprint, isLamp, roomsReachingUp, type Floor, type SolarField, type Vec2 } from "../../model.ts";
import { hasMesh, mountBase, packItem } from "../../packs.ts";
import type { RoofFace } from "../../solar.ts";
import { cutAbove, cutLinesAbove, FURN_OFFSET, GeoBuffer, LineBuffer } from "../geo.ts";
import { pushFurniture } from "../furniture.ts";
import { pushOutdoor } from "../outdoor.ts";
import { pushModules } from "../roof.ts";
import { pushEdgeLines } from "./edges.ts";
import { buildFloors } from "./floors.ts";
import { outlineOf } from "./outline.ts";
import { bucketWalls, placeOpenings, roofLimits } from "./placement.ts";
import { buildShadow } from "./shadow.ts";
import { buildWallSolids, type WallPaint } from "./solids.ts";
import type { FloorGeometry } from "./types.ts";

export function buildFloorGeometry(
  floor: Floor,
  wallExterior: number,
  wallInterior: number,
  holes: Vec2[][] = [],
  /** Solar fields standing in this floor's garden, with their ground. */
  solar: { face: RoofFace; field: SolarField }[] = [],
  /**
   * The roof's underside above a plan point, relative to this floor (null = no roof there). Walls end there: knee walls
   * at the eaves, gables up to the ridge, inner walls cut by the slope.
   */
  roofUnder?: (x: number, z: number) => number | null,
  /** Painted walls for the solid wall view (see WallPaint). */
  paint?: WallPaint,
  /** Rooms stay as drawn: walls fill the gaps between them (see WallOptions.asDrawn). */
  asDrawn = false,
): FloorGeometry {
  const { walls, open: openRooms } = generateWalls(floor.rooms, { exterior: wallExterior, interior: wallInterior, ...(asDrawn ? { asDrawn } : {}) }, floor.walls ?? []);
  const limits = roofLimits(roofUnder);
  const hasRoof = !!roofUnder;

  const floors = buildFloors(floor, holes);
  const { buckets, wallBucket } = bucketWalls(walls);
  const { openings, spans } = placeOpenings(floor, walls, wallBucket, limits);

  const wallBuf = new GeoBuffer();
  buildWallSolids(wallBuf, floor, walls, wallBucket, spans, limits, hasRoof, paint);

  const outline = outlineOf(walls, walls.flatMap((w) => w.footprint));
  const lines = new LineBuffer();
  lines.p.push(...floors.holeLines.p);
  lines.c.push(...floors.holeLines.c);
  lines.f.push(...floors.holeLines.f);
  pushEdgeLines(lines, floor, outline, wallBucket, spans, limits, hasRoof);

  const shadow = buildShadow(outline.edges, floor.rooms, spans);
  const ghosts = new Map<number, GeoBuffer>();
  pushOutdoor(wallBuf, lines, floor, ghosts, () => new GeoBuffer());
  for (const s of solar) pushModules(wallBuf, lines, s.face, s.field, floor.elevation);

  // lamps are drawn live by the viewer: they glow with their light
  const cut = Math.min(floor.cut_height, floor.height);
  const furnitureTris: FloorGeometry["furnitureTris"] = [];
  for (const piece of floor.furniture.filter((f) => !isLamp(f.type))) {
    const start = wallBuf.count;
    const firstLine = lines.p.length / 6;
    const base = mountBase(floor, piece);
    // an owned 3D model replaces the parts: the viewer adds it as its own object
    if (!hasMesh(piece.type)) pushFurniture(wallBuf, lines, shadow, piece, base);
    // a wardrobe or a stair reaching above the cut height is cut with the walls, so it hides nothing behind it
    if (base + piece.h > cut + 0.05) {
      cutAbove(wallBuf, start, cut, FURN_OFFSET);
      cutLinesAbove(lines, firstLine, cut, FURN_OFFSET);
    }
    furnitureTris.push({ id: piece.id, start, end: wallBuf.count });
  }

  return {
    floor: floors.buffer.geometry(),
    roomTris: floors.roomTris,
    holes: floors.cutHoles,
    walls: wallBuf.geometry(),
    ghosts: [...ghosts].map(([opacity, buffer]) => ({ opacity, geometry: buffer.geometry() })),
    lines: lines.geometry(),
    shadow: shadow.geometry(),
    buckets,
    openings,
    walls2d: walls,
    openRooms,
    wallBuckets: walls.map((w) => wallBucket.get(w)!),
    furnitureTris,
    roofUnder,
  };
}

/** The ceiling openings of a floor: stairwells placed on it, stairs on the floor below that reach up to it, and rooms below that rise through it. */
export function stairHoles(floors: readonly Floor[], floor: Floor): Vec2[][] {
  const voids = roomsReachingUp(floors, floor);
  // stairwells, and the shaped stairs that lead down from this floor
  const own = [
    ...floor.furniture.filter((f) => f.type === "stairwell").map(furnitureFootprint),
    ...floor.furniture.filter((f) => isShapedStair(f) && f.stair?.down).flatMap(stairOpeningInPlan),
  ].filter((ring) => ring.length >= 3);
  const below = floors.filter((f) => f.elevation < floor.elevation).sort((p, q) => q.elevation - p.elevation)[0];
  if (!below) return mergeHoles([...own, ...voids]);
  const reaching = below.furniture.filter((f) => (f.type === "stairs" || packItem(f.type)?.hole) && !(isShapedStair(f) && f.stair?.down) && below.elevation + f.h >= floor.elevation - 0.3);
  // a shaped stair opens the floor only where its treads lack headroom; old stairs and pack stairs open their whole footprint
  const stairs = reaching.flatMap((f) => (isShapedStair(f) ? stairOpeningInPlan(f) : [furnitureFootprint(f)])).filter((ring) => ring.length >= 3);
  // overlapping openings become one outline (an L-shaped stairwell made of two)
  return mergeHoles([...own, ...stairs, ...voids]);
}

export type { WallPaint } from "./solids.ts";
