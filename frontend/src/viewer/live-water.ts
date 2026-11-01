/**
 * NextFloor's water layer: lawn sprinklers that water while their valve or switch is on throw droplets in arcs around
 * them, turning slowly, as far as the sprinkler reaches. Points only, so a wall tablet keeps up.
 */
import { BufferGeometry, Float32BufferAttribute, Group, Points, PointsMaterial, type Scene } from "three";
import { dotTexture, type FloorLift, type PlanPoint } from "./live-energy.ts";

export interface SpraySpot {
  id: string;
  at: PlanPoint;
  /** How far the water reaches (m). */
  reach: number;
}

/** A sprinkler throws its water in a few jets; each jet is a stream of droplets along its arc. */
export const JETS = 6;
const PER_JET = 24;
/** Droplets per sprinkler: enough to read as water, few enough for old tablets. */
export const DROPS = JETS * PER_JET;

interface SprayView {
  spot: SpraySpot;
  points: Points;
}

/**
 * Where droplet `i` of a sprinkler is at time `t` (seconds), relative to the nozzle: droplets follow each other along their
 * jet's arc, which peaks at a third of the reach (at most 1.2 m); the jets turn slowly round the sprinkler.
 */
export function dropAt(i: number, t: number, reach: number): [number, number, number] {
  const jet = i % JETS;
  const k = Math.floor(i / JETS);
  const s = (k / PER_JET + t * 0.7) % 1;
  // a little spread across the jet, so a stream is not a thin line
  const angle = (jet / JETS) * Math.PI * 2 + t * 0.35 + (((k * 7) % 5) - 2) * 0.012;
  const d = s * reach;
  const peak = Math.min(1.2, reach / 3);
  return [Math.cos(angle) * d, 4 * peak * s * (1 - s), Math.sin(angle) * d];
}

export class WaterLayer {
  readonly group = new Group();
  private readonly scene: Scene;
  private readonly lift: FloorLift;
  private readonly tex = dotTexture();
  private readonly material = new PointsMaterial({ color: 0xa8e2ff, size: 0.09, map: this.tex, transparent: true, opacity: 0.9, depthWrite: false });
  private sprays = new Map<string, SprayView>();

  constructor(scene: Scene, lift: FloorLift) {
    this.scene = scene;
    this.lift = lift;
    this.group.name = "live-water";
    scene.add(this.group);
  }

  get active(): boolean {
    return this.sprays.size > 0;
  }

  set(spots: SpraySpot[]): void {
    const keep = new Set(spots.map((s) => s.id));
    for (const [id, v] of this.sprays) {
      if (keep.has(id)) continue;
      this.group.remove(v.points);
      v.points.geometry.dispose();
      this.sprays.delete(id);
    }
    for (const spot of spots) {
      const v = this.sprays.get(spot.id);
      if (v) {
        v.spot = spot;
        continue;
      }
      const g = new BufferGeometry();
      g.setAttribute("position", new Float32BufferAttribute(new Float32Array(DROPS * 3), 3));
      const points = new Points(g, this.material);
      points.frustumCulled = false;
      this.group.add(points);
      this.sprays.set(spot.id, { spot, points });
    }
  }

  step(now: number): boolean {
    if (!this.sprays.size) return false;
    const t = now / 1000;
    for (const v of this.sprays.values()) {
      const l = this.lift(v.spot.at.floorId);
      v.points.visible = l.visible;
      v.points.position.set(v.spot.at.x, l.y + v.spot.at.y, v.spot.at.z);
      const pos = v.points.geometry.getAttribute("position") as Float32BufferAttribute;
      for (let i = 0; i < DROPS; i++) {
        const [x, y, z] = dropAt(i, t, v.spot.reach);
        pos.setXYZ(i, x, y, z);
      }
      pos.needsUpdate = true;
    }
    return true;
  }

  dispose(): void {
    this.set([]);
    this.material.dispose();
    this.tex.dispose();
    this.scene.remove(this.group);
  }
}
