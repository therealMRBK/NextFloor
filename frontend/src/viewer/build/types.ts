import type { BufferGeometry } from "three";
import type { Wall } from "../../geometry/walls.ts";
import type { Opening, Vec2 } from "../../model.ts";

/** An opening resolved onto its wall, as frames, sashes and blinds need it. */
export interface OpeningInfo {
  opening: Opening;
  /** The fold bucket of the wall it sits in. */
  bucket: number;
  /** The start of the opening on the wall axis, and the axis direction (x, z). */
  start: Vec2;
  axis: Vec2;
  width: number;
  /** The unit normal pointing into the opening's room. */
  toRoom: Vec2;
  /** The distance from the wall axis to the room-side face and to the other face. */
  faceRoom: number;
  faceOut: number;
  sill: number;
  top: number;
  /** True when the sash hinge is at the start of the opening (as seen along the axis). */
  hingeAtStart: boolean;
  exterior: boolean;
}

export interface FloorGeometry {
  floor: BufferGeometry;
  /** Triangle ranges of room tops (for picking and highlighting) with their base colour. */
  roomTris: { roomId: string; start: number; end: number; color: number }[];
  /** Openings cut into the floor (stairwells, galleries): the light surface leaves them out. */
  holes: Vec2[][];
  /** Walls (with folding upper parts) and furniture. */
  walls: BufferGeometry;
  /** Outdoor areas drawn see-through, one geometry per opacity (0.1 … 0.95). */
  ghosts: { opacity: number; geometry: BufferGeometry }[];
  lines: BufferGeometry;
  /** A multiply layer darkening the floor along walls and under furniture (baked occlusion). */
  shadow: BufferGeometry;
  /** The outward direction (x, z) of each fold bucket; null for interior walls. The index is the bucket id. */
  buckets: (Vec2 | null)[];
  openings: OpeningInfo[];
  walls2d: Wall[];
  /** Pairs of rooms joined by "no wall": one space, also for the light. */
  openRooms: [string, string][];
  /** The fold bucket of each wall in walls2d. */
  wallBuckets: number[];
  /** Triangle ranges of furniture in `walls`, for tapping furniture in 3D. */
  furnitureTris: { id: string; start: number; end: number }[];
  /** Under roof slopes: the roof's underside above a plan point in floor coordinates (null: no roof there). */
  roofUnder?: (x: number, z: number) => number | null;
}

/** An opening on a wall as a span along its axis (metres from wall.a). */
export interface Span {
  s0: number;
  s1: number;
  sill: number;
  top: number;
  info: OpeningInfo;
}
