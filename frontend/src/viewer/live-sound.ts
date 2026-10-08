/**
 * NextFloor's sound layer: rings of sound spreading from every speaker that plays (in the colour of the app that
 * plays, wider and brighter the louder it is), and glowing threads between speakers that play together
 * (multiroom groups).
 */
import { AdditiveBlending, BufferGeometry, Color, DoubleSide, Float32BufferAttribute, Group, Line, LineBasicMaterial, Mesh, MeshBasicMaterial, RingGeometry, type Scene } from "three";
import type { FloorLift, PlanPoint } from "./live-energy.ts";

export interface SoundSpot {
  id: string;
  at: PlanPoint;
  /** Ring colour (r, g, b 0…255). */
  color: [number, number, number];
  /** Volume 0…1. */
  level: number;
}

const RINGS = 3;

interface SpotView {
  spot: SoundSpot;
  rings: Mesh[];
}

export class SoundLayer {
  readonly group = new Group();
  private readonly scene: Scene;
  private readonly lift: FloorLift;
  private readonly ringGeo = new RingGeometry(0.92, 1, 48);
  private spots = new Map<string, SpotView>();
  private links: { a: PlanPoint; b: PlanPoint; line: Line }[] = [];

  constructor(scene: Scene, lift: FloorLift) {
    this.scene = scene;
    this.lift = lift;
    this.group.name = "live-sound";
    scene.add(this.group);
  }

  get active(): boolean {
    return this.spots.size > 0;
  }

  set(spots: SoundSpot[], groups: [PlanPoint, PlanPoint][]): void {
    const keep = new Set(spots.map((s) => s.id));
    for (const [id, v] of this.spots) {
      if (keep.has(id)) continue;
      for (const r of v.rings) {
        this.group.remove(r);
        (r.material as MeshBasicMaterial).dispose();
      }
      this.spots.delete(id);
    }
    for (const spot of spots) {
      let v = this.spots.get(spot.id);
      if (!v) {
        const rings = Array.from({ length: RINGS }, () => {
          const m = new Mesh(this.ringGeo, new MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, blending: AdditiveBlending, side: DoubleSide }));
          m.rotation.x = -Math.PI / 2;
          m.frustumCulled = false;
          this.group.add(m);
          return m;
        });
        v = { spot, rings };
        this.spots.set(spot.id, v);
      }
      v.spot = spot;
      const c = new Color(spot.color[0] / 255, spot.color[1] / 255, spot.color[2] / 255);
      for (const r of v.rings) (r.material as MeshBasicMaterial).color.copy(c);
    }
    for (const l of this.links) {
      this.group.remove(l.line);
      l.line.geometry.dispose();
      (l.line.material as LineBasicMaterial).dispose();
    }
    this.links = groups.map(([a, b]) => {
      const g = new BufferGeometry();
      g.setAttribute("position", new Float32BufferAttribute(new Float32Array(17 * 3), 3));
      const line = new Line(g, new LineBasicMaterial({ color: 0xc084fc, transparent: true, opacity: 0.55, depthWrite: false, blending: AdditiveBlending }));
      line.frustumCulled = false;
      this.group.add(line);
      return { a, b, line };
    });
  }

  step(now: number): boolean {
    if (!this.spots.size && !this.links.length) return false;
    const t = now / 1000;
    for (const v of this.spots.values()) {
      const l = this.lift(v.spot.at.floorId);
      const reach = 0.9 + 1.6 * v.spot.level;
      v.rings.forEach((r, i) => {
        // each ring grows from the speaker and fades, the next one follows a third of a beat later
        const k = (t * 0.55 + i / RINGS) % 1;
        r.visible = l.visible;
        r.position.set(v.spot.at.x, l.y + v.spot.at.y, v.spot.at.z);
        r.scale.setScalar(0.25 + k * reach);
        (r.material as MeshBasicMaterial).opacity = (1 - k) * (0.35 + 0.5 * v.spot.level);
      });
    }
    for (const link of this.links) {
      const la = this.lift(link.a.floorId), lb = this.lift(link.b.floorId);
      link.line.visible = la.visible && lb.visible;
      const pos = link.line.geometry.getAttribute("position") as Float32BufferAttribute;
      const ay = la.y + link.a.y, by = lb.y + link.b.y;
      const dist = Math.hypot(link.a.x - link.b.x, link.a.z - link.b.z);
      for (let i = 0; i <= 16; i++) {
        const s = i / 16;
        // a soft sag between the two, with a slow shimmer along it
        const lift = Math.sin(Math.PI * s) * (0.3 + dist * 0.12) + Math.sin(t * 3 + s * 12) * 0.03;
        pos.setXYZ(i, link.a.x + (link.b.x - link.a.x) * s, ay + (by - ay) * s + lift, link.a.z + (link.b.z - link.a.z) * s);
      }
      pos.needsUpdate = true;
    }
    return true;
  }

  dispose(): void {
    this.set([], []);
    this.ringGeo.dispose();
    this.scene.remove(this.group);
  }
}
