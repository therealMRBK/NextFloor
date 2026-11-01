// The shadow the house throws on the ground: its footprint swept away from the sun by its height, laid flat on the plot.
// It is one soft, see-through shape, rebuilt only when the sun moves, so old tablets pay nothing per frame.

import { BufferGeometry, DoubleSide, Float32BufferAttribute, Mesh, MeshBasicMaterial } from "three";
import { mergeHoles } from "../../geometry/holes.ts";
import { pointInPolygon, type Vec2 } from "../../model.ts";
import { triangulate } from "../geo.ts";
import { daylight, directionToSun } from "./sunlight.ts";
import type { SunState } from "./types.ts";

/** The longest a shadow gets (metres), so a setting sun does not throw one across the map. */
const MAX_LENGTH = 30;

const area = (ring: readonly Vec2[]) => ring.reduce((sum, p, i) => sum + p[0] * ring[(i + 1) % ring.length][1] - ring[(i + 1) % ring.length][0] * p[1], 0) / 2;

/** The outline of the shadow on the ground: the footprint, its copy moved away from the sun, and the band between them. */
export function shadowOutline(footprint: readonly Vec2[][], height: number, sun: SunState | null, northDegrees: number): Vec2[][] {
  if (!sun || sun.elevation <= 2 || height <= 0 || !footprint.length) return [];
  const length = Math.min(MAX_LENGTH, height / Math.tan((sun.elevation * Math.PI) / 180));
  const [sx, sz] = directionToSun(sun.azimuth, northDegrees);
  const move = (p: Vec2): Vec2 => [p[0] - sx * length, p[1] - sz * length];
  const rings: Vec2[][] = [];
  for (const ring of footprint) {
    rings.push([...ring], ring.map(move));
    ring.forEach((a, i) => {
      const b = ring[(i + 1) % ring.length];
      const band = [a, b, move(b), move(a)];
      if (Math.abs(area(band)) > 1e-3) rings.push(band);
    });
  }
  return mergeHoles(rings);
}

export class HouseShadow {
  readonly mesh: Mesh;
  private readonly material = new MeshBasicMaterial({ color: 0x000000, side: DoubleSide, transparent: true, opacity: 0, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });

  constructor() {
    this.mesh = new Mesh(new BufferGeometry(), this.material);
    this.mesh.renderOrder = 1;
    this.mesh.visible = false;
  }

  /** Lays the shadow of a footprint `height` high on the ground at `y`; null sun or `off` hides it. */
  update(footprint: readonly Vec2[][], height: number, y: number, sun: SunState | null, northDegrees: number, cloud: number, off: boolean): void {
    const outline = off ? [] : shadowOutline(footprint, height, sun, northDegrees);
    const positions: number[] = [];
    for (const ring of outline) {
      // the house stands on its own footprint: only the ground around it is shaded
      const holes = footprint.filter((h) => pointInPolygon([h.reduce((s, p) => s + p[0], 0) / h.length, h.reduce((s, p) => s + p[1], 0) / h.length], ring));
      const corners = [...ring, ...holes.flat()];
      for (const [a, b, c] of triangulate(ring, holes.map((h) => [...h]))) for (const p of [corners[a], corners[b], corners[c]]) positions.push(p[0], y, p[1]);
    }
    this.mesh.geometry.dispose();
    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
    this.mesh.geometry = geometry;
    this.material.opacity = sun ? 0.32 * daylight(sun.elevation, cloud) : 0;
    this.mesh.visible = positions.length > 0 && this.material.opacity > 0.02;
  }

  dispose(): void {
    this.mesh.geometry.dispose();
    this.material.dispose();
  }
}
