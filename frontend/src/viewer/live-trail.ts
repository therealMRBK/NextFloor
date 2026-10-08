/**
 * NextFloor's motion trail: where motion was reported in the last half hour, in time order, as a glowing path
 * through the house – faint and blue where it is old, bright pink where it is new – with a comet running along it
 * from the first motion to the last, and a ring at every spot.
 */
import { AdditiveBlending, BufferGeometry, Color, DoubleSide, Float32BufferAttribute, Group, Line, LineBasicMaterial, Mesh, MeshBasicMaterial, RingGeometry, SphereGeometry, type Scene } from "three";
import type { FloorLift, PlanPoint } from "./live-energy.ts";

export interface TrailPoint {
  at: PlanPoint;
  /** 0 = oldest … 1 = newest. */
  age: number;
}

const OLD = new Color(0.25, 0.55, 1);
const NEW = new Color(1, 0.3, 0.75);
const STEPS = 10;

export class TrailLayer {
  readonly group = new Group();
  private readonly scene: Scene;
  private readonly lift: FloorLift;
  private points: TrailPoint[] = [];
  private readonly line: Line;
  private readonly comet: Mesh;
  private rings: Mesh[] = [];
  private readonly ringGeo = new RingGeometry(0.18, 0.26, 32);

  constructor(scene: Scene, lift: FloorLift) {
    this.scene = scene;
    this.lift = lift;
    this.group.name = "live-trail";
    const g = new BufferGeometry();
    g.setAttribute("position", new Float32BufferAttribute(new Float32Array(3), 3));
    g.setAttribute("color", new Float32BufferAttribute(new Float32Array(3), 3));
    this.line = new Line(g, new LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.9, depthWrite: false, blending: AdditiveBlending }));
    this.line.frustumCulled = false;
    this.comet = new Mesh(new SphereGeometry(0.12, 12, 8), new MeshBasicMaterial({ color: NEW, transparent: true, depthWrite: false, blending: AdditiveBlending }));
    this.group.add(this.line, this.comet);
    this.group.visible = false;
    scene.add(this.group);
  }

  set(points: TrailPoint[]): void {
    this.points = points;
    for (const r of this.rings) {
      this.group.remove(r);
      (r.material as MeshBasicMaterial).dispose();
    }
    this.rings = points.map((p) => {
      const m = new Mesh(this.ringGeo, new MeshBasicMaterial({ color: OLD.clone().lerp(NEW, p.age), transparent: true, opacity: 0.4 + 0.6 * p.age, depthWrite: false, blending: AdditiveBlending, side: DoubleSide }));
      m.rotation.x = -Math.PI / 2;
      this.group.add(m);
      return m;
    });
    const n = Math.max(1, (points.length - 1) * STEPS + 1);
    this.line.geometry.dispose();
    const g = new BufferGeometry();
    g.setAttribute("position", new Float32BufferAttribute(new Float32Array(n * 3), 3));
    g.setAttribute("color", new Float32BufferAttribute(new Float32Array(n * 3), 3));
    this.line.geometry = g;
    this.group.visible = points.length > 0;
  }

  /** World position along the path: segment i, fraction s (a soft hop from spot to spot). */
  private at(i: number, s: number): [number, number, number] {
    const a = this.points[i].at, b = this.points[Math.min(this.points.length - 1, i + 1)].at;
    const la = this.lift(a.floorId), lb = this.lift(b.floorId);
    const ya = la.y + a.y, yb = lb.y + b.y;
    const hop = Math.sin(Math.PI * s) * (0.25 + Math.hypot(a.x - b.x, a.z - b.z) * 0.08);
    return [a.x + (b.x - a.x) * s, ya + (yb - ya) * s + hop, a.z + (b.z - a.z) * s];
  }

  step(now: number): boolean {
    const n = this.points.length;
    if (!n) return false;
    const pos = this.line.geometry.getAttribute("position") as Float32BufferAttribute;
    const col = this.line.geometry.getAttribute("color") as Float32BufferAttribute;
    let k = 0;
    const c = new Color();
    for (let i = 0; i < Math.max(1, n - 1); i++) {
      for (let j = 0; j <= STEPS; j++) {
        if (j === STEPS && i < n - 2) continue;
        if (n === 1 && j > 0) break;
        const s = j / STEPS;
        pos.setXYZ(k, ...this.at(i, n === 1 ? 0 : s));
        const age = n === 1 ? 1 : (this.points[i].age + (this.points[Math.min(n - 1, i + 1)].age - this.points[i].age) * s);
        c.copy(OLD).lerp(NEW, age).multiplyScalar(0.3 + 0.7 * age);
        col.setXYZ(k, c.r, c.g, c.b);
        k++;
      }
    }
    this.line.geometry.setDrawRange(0, k);
    pos.needsUpdate = col.needsUpdate = true;
    this.points.forEach((p, i) => {
      const l = this.lift(p.at.floorId);
      this.rings[i].position.set(p.at.x, l.y + 0.03, p.at.z);
      this.rings[i].visible = l.visible;
      // the newest spot pulses
      if (i === n - 1) this.rings[i].scale.setScalar(1 + 0.35 * Math.sin(now / 250));
    });
    // the comet runs the whole path in a few seconds, then starts again
    if (n > 1) {
      const run = ((now / 1000) % (1.2 * (n - 1) + 1)) / 1.2;
      const i = Math.min(n - 2, Math.floor(run));
      this.comet.position.set(...this.at(i, Math.min(1, run - i)));
      this.comet.visible = true;
    } else this.comet.visible = false;
    return true;
  }

  dispose(): void {
    this.set([]);
    this.line.geometry.dispose();
    (this.line.material as LineBasicMaterial).dispose();
    this.comet.geometry.dispose();
    (this.comet.material as MeshBasicMaterial).dispose();
    this.ringGeo.dispose();
    this.scene.remove(this.group);
  }
}
