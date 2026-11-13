// Where each floor goes in the 3D view and how it gets there: the house view pulls floors apart (or stacks them), a chosen floor
// lets those above fly away and keeps those below as a dim reference.

import type { FloorMaterials } from "./materials.ts";
import type { FloorStack } from "./types.ts";

/** Gap between floors in the exploded house view (metres). */
export const EXPLODE_GAP = 2.4;
/** How visible the floors below a chosen floor stay when they are a dim reference. */
export const BELOW_OPACITY = 0.22;
/** Time constant of the floor movement (ms): about 0.7 s until settled. */
export const FLOOR_TAU = 140;
/** Floors below a chosen floor sink a little. */
const SINK = -0.4;
/** How far above the house floors fly when another floor is chosen. */
const FLY_AWAY = 5;
const ARRIVED = 0.004;

export interface FloorTarget {
  /** Height offset on top of the floor's elevation. */
  y: number;
  opacity: number;
}

/**
 * Where a floor of this rank (0 is the lowest) belongs. `chosen` is the rank of the selected floor, or undefined for the house view.
 */
export function floorTarget(rank: number, chosen: number | undefined, explode: boolean, below: FloorStack): FloorTarget {
  if (chosen === undefined) return { y: explode ? rank * EXPLODE_GAP : 0, opacity: 1 };
  if (rank > chosen) return { y: FLY_AWAY + rank, opacity: 0 };
  if (rank === chosen) return { y: 0, opacity: 1 };
  if (below === "stacked") return { y: 0, opacity: 1 };
  return { y: SINK, opacity: below === "single" ? 0 : BELOW_OPACITY };
}

export interface FloorPose {
  y: number;
  o: number;
  ty: number;
  to: number;
}

/** One frame of a floor towards its target. Returns whether it is still moving, and whether it just settled. */
export function easeFloor(pose: FloorPose, share: number): { moving: boolean; settled: boolean } {
  const [dy, dO] = [pose.ty - pose.y, pose.to - pose.o];
  if (Math.abs(dy) < ARRIVED && Math.abs(dO) < ARRIVED) {
    const settled = dy !== 0 || dO !== 0;
    if (settled) [pose.y, pose.o] = [pose.ty, pose.to];
    return { moving: false, settled };
  }
  pose.y += dy * share;
  pose.o += dO * share;
  return { moving: true, settled: false };
}

/** Fades every material of a floor to an opacity. Solid materials write depth, see-through ones do not. */
export function fadeMaterials(materials: FloorMaterials, opacity: number): void {
  const solid = opacity > 0.999;
  for (const material of [materials.floor, materials.wall, materials.frames, materials.blinds, materials.lamps]) {
    if (material.transparent === solid) {
      material.transparent = !solid;
      material.depthWrite = solid;
      material.needsUpdate = true;
    }
    material.opacity = opacity;
  }
  for (const ghost of materials.ghosts) ghost.material.opacity = ghost.base * opacity;
  for (const material of [materials.pattern, materials.glow, materials.lines, materials.glass, materials.glassWall, materials.halos, materials.cones, materials.screens]) material.opacity = opacity;
}

/** The share of the remaining way a floor covers in a frame of `dt` milliseconds. */
export const floorShare = (dt: number): number => 1 - Math.exp(-dt / FLOOR_TAU);

/** Where the camera stands: its side, its height angle and its distance. */
export interface CameraStand {
  theta: number;
  phi: number;
  radius: number;
}

/**
 * With "keep camera" on: what a switch from `from` to `to` (null is the house view) keeps of the camera, instead of fitting the
 * new view from the start view's side. Between two floors it keeps side, height and distance. The house view keeps side and
 * height and fits its own distance. A floor opened from the house view takes the side and height the house is looked at, and
 * the distance the last floor was left with (fitted when no floor was left yet). As the house view keeps side and height, a
 * floor comes back exactly as it was left unless the house was turned in between (#119), and then it follows that turn.
 */
export function keptCamera(from: string | null, to: string | null, now: CameraStand, lastFloor: CameraStand | null): { theta: number; phi: number; radius?: number } {
  if (to !== null && from !== null) return now;
  return { theta: now.theta, phi: now.phi, ...(to !== null && lastFloor ? { radius: lastFloor.radius } : {}) };
}
