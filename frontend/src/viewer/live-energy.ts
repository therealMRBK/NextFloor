/**
 * NextFloor's energy layer: where the power goes, drawn as glowing particles flying in arcs between the
 * devices (solar fields, inverter, battery, grid connection, house, consumers), and solar modules that sparkle
 * with their production.
 *
 * Each arc joins two points of the plan (each on its floor, so it follows when the floors are pulled apart). The
 * particles fly in the direction the power flows; more power means more and faster particles. A faint line shows
 * the arc itself.
 */
import { AdditiveBlending, BufferGeometry, CanvasTexture, Color, Float32BufferAttribute, Group, Line, LineBasicMaterial, Points, PointsMaterial, Vector3, type Scene } from "three";

/** A point of the plan: floor (null = the ground / the roof above the top floor), plan x/z, height above that floor. */
export interface PlanPoint {
  floorId: string | null;
  x: number;
  y: number;
  z: number;
}

export interface EnergyArc {
  key: string;
  from: PlanPoint;
  to: PlanPoint;
  /** Power carried (W, > 0); the particles fly from `from` to `to`. */
  power: number;
  /** Particle colour (r, g, b 0…255). */
  color: [number, number, number];
}

/** A solar field's modules (corners in building coordinates) and how much it produces right now (0…1). */
export interface SparkField {
  floorId: string | null;
  quads: [number, number, number][][];
  level: number;
}

/** Where a floor is right now: the height of its floor (elevation plus how far it is pulled apart), that pull
 *  alone (for points given in building heights), and whether it shows. */
export type FloorLift = (floorId: string | null) => { y: number; dy: number; visible: boolean };

const MAX_PER_ARC = 46;
const SPARKS = 900;

function dotTexture(): CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = 32;
  const g = c.getContext("2d")!;
  const r = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  r.addColorStop(0, "rgba(255,255,255,1)");
  r.addColorStop(0.35, "rgba(255,255,255,0.7)");
  r.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = r;
  g.fillRect(0, 0, 32, 32);
  return new CanvasTexture(c);
}

interface ArcView {
  arc: EnergyArc;
  line: Line;
  points: Points;
  phase: Float32Array;
  count: number;
  speed: number;
  a: Vector3;
  b: Vector3;
  c: Vector3;
}

export class EnergyLayer {
  readonly group = new Group();
  private readonly scene: Scene;
  private readonly lift: FloorLift;
  private readonly tex = dotTexture();
  private arcs = new Map<string, ArcView>();
  private sparkFields: SparkField[] = [];
  private readonly sparks: Points;
  private readonly sparkBase = new Float32Array(SPARKS * 3);
  private readonly sparkField = new Int16Array(SPARKS);
  private readonly sparkPhase = new Float32Array(SPARKS);
  private sparkCount = 0;
  private last = 0;

  constructor(scene: Scene, lift: FloorLift) {
    this.scene = scene;
    this.lift = lift;
    this.group.name = "live-energy";
    const g = new BufferGeometry();
    g.setAttribute("position", new Float32BufferAttribute(new Float32Array(SPARKS * 3), 3));
    g.setAttribute("color", new Float32BufferAttribute(new Float32Array(SPARKS * 3), 3));
    this.sparks = new Points(g, new PointsMaterial({ size: 0.4, map: this.tex, vertexColors: true, transparent: true, depthWrite: false, blending: AdditiveBlending }));
    this.sparks.frustumCulled = false;
    this.group.add(this.sparks);
    scene.add(this.group);
  }

  get active(): boolean {
    return this.arcs.size > 0 || this.sparkCount > 0;
  }

  setArcs(list: EnergyArc[]): void {
    const keep = new Set(list.map((a) => a.key));
    for (const [key, v] of this.arcs) {
      if (keep.has(key)) continue;
      this.group.remove(v.line, v.points);
      v.line.geometry.dispose();
      (v.line.material as LineBasicMaterial).dispose();
      v.points.geometry.dispose();
      (v.points.material as PointsMaterial).dispose();
      this.arcs.delete(key);
    }
    for (const arc of list) {
      let v = this.arcs.get(arc.key);
      if (!v) {
        const lg = new BufferGeometry();
        lg.setAttribute("position", new Float32BufferAttribute(new Float32Array(33 * 3), 3));
        const line = new Line(lg, new LineBasicMaterial({ transparent: true, opacity: 0.4, depthWrite: false, blending: AdditiveBlending }));
        const pg = new BufferGeometry();
        pg.setAttribute("position", new Float32BufferAttribute(new Float32Array(MAX_PER_ARC * 3), 3));
        const points = new Points(pg, new PointsMaterial({ size: 0.55, map: this.tex, transparent: true, depthWrite: false, blending: AdditiveBlending }));
        line.frustumCulled = points.frustumCulled = false;
        const phase = new Float32Array(MAX_PER_ARC);
        for (let i = 0; i < MAX_PER_ARC; i++) phase[i] = Math.random();
        v = { arc, line, points, phase, count: 0, speed: 0, a: new Vector3(), b: new Vector3(), c: new Vector3() };
        this.arcs.set(arc.key, v);
        this.group.add(line, points);
      }
      v.arc = arc;
      const col = new Color(arc.color[0] / 255, arc.color[1] / 255, arc.color[2] / 255);
      (v.line.material as LineBasicMaterial).color.copy(col);
      (v.points.material as PointsMaterial).color.copy(col);
      // more power: more particles, a bit faster (a kettle and a heat pump look different, a 10 kW car still fits)
      v.count = Math.max(3, Math.min(MAX_PER_ARC, Math.round(3 + Math.sqrt(arc.power) / 2.2)));
      v.speed = 0.18 + Math.min(0.5, Math.log10(1 + arc.power) * 0.1);
      v.points.geometry.setDrawRange(0, v.count);
    }
    this.place();
  }

  setSparks(fields: SparkField[]): void {
    this.sparkFields = fields;
    // spread the sparks over the modules in proportion to each field's production
    const total = fields.reduce((s, f) => s + f.quads.length * f.level, 0);
    let n = 0;
    if (total > 0) {
      fields.forEach((f, fi) => {
        if (f.level <= 0) return;
        const share = Math.round((SPARKS * f.quads.length * f.level) / Math.max(total, fields.reduce((s, x) => s + x.quads.length, 0)));
        for (let k = 0; k < share && n < SPARKS; k++, n++) {
          const q = f.quads[Math.floor(Math.random() * f.quads.length)];
          const u = Math.random(), w = Math.random();
          // a point on the module: bilinear between its corners, a hand above the surface
          for (let i = 0; i < 3; i++) {
            const top = q[0][i] + (q[1][i] - q[0][i]) * u;
            const bot = q[3][i] + (q[2][i] - q[3][i]) * u;
            this.sparkBase[n * 3 + i] = top + (bot - top) * w + (i === 1 ? 0.12 : 0);
          }
          this.sparkField[n] = fi;
          this.sparkPhase[n] = Math.random() * Math.PI * 2;
        }
      });
    }
    this.sparkCount = n;
    this.sparks.geometry.setDrawRange(0, n);
    this.sparks.visible = n > 0;
  }

  /** World position of a plan point right now. */
  private world(p: PlanPoint, out: Vector3): boolean {
    const l = this.lift(p.floorId);
    out.set(p.x, l.y + p.y, p.z);
    return l.visible;
  }

  /** The arcs' start, end and bend for where the floors are now. */
  private place(): void {
    for (const v of this.arcs.values()) {
      const va = this.world(v.arc.from, v.a);
      const vb = this.world(v.arc.to, v.b);
      const len = v.a.distanceTo(v.b);
      v.c.copy(v.a).add(v.b).multiplyScalar(0.5);
      v.c.y = Math.max(v.a.y, v.b.y) + 0.6 + len * 0.22;
      const show = va && vb;
      v.line.visible = v.points.visible = show;
      const pos = v.line.geometry.getAttribute("position") as Float32BufferAttribute;
      for (let i = 0; i <= 32; i++) {
        const t = i / 32;
        pos.setXYZ(i, ...this.bezier(v, t));
      }
      pos.needsUpdate = true;
    }
  }

  private bezier(v: ArcView, t: number): [number, number, number] {
    const u = 1 - t;
    return [
      u * u * v.a.x + 2 * u * t * v.c.x + t * t * v.b.x,
      u * u * v.a.y + 2 * u * t * v.c.y + t * t * v.b.y,
      u * u * v.a.z + 2 * u * t * v.c.z + t * t * v.b.z,
    ];
  }

  /** One frame. True while anything moves. */
  step(now: number): boolean {
    if (!this.active || !this.group.visible) {
      this.last = 0;
      return false;
    }
    const dt = this.last ? Math.min(0.1, (now - this.last) / 1000) : 0;
    this.last = now;
    this.place();
    for (const v of this.arcs.values()) {
      if (!v.points.visible) continue;
      const pos = v.points.geometry.getAttribute("position") as Float32BufferAttribute;
      for (let i = 0; i < v.count; i++) {
        v.phase[i] = (v.phase[i] + v.speed * dt) % 1;
        pos.setXYZ(i, ...this.bezier(v, v.phase[i]));
      }
      pos.needsUpdate = true;
    }
    if (this.sparkCount) {
      const pos = this.sparks.geometry.getAttribute("position") as Float32BufferAttribute;
      const col = this.sparks.geometry.getAttribute("color") as Float32BufferAttribute;
      const t = now / 1000;
      for (let i = 0; i < this.sparkCount; i++) {
        const f = this.sparkFields[this.sparkField[i]];
        const l = this.lift(f?.floorId ?? null);
        // sparks of a hidden floor's field are put far below the ground (dark points would still show)
        pos.setXYZ(i, this.sparkBase[i * 3], l.visible ? this.sparkBase[i * 3 + 1] + l.dy : -1000, this.sparkBase[i * 3 + 2]);
        // each spark twinkles on its own beat, brighter on a strong field
        const tw = Math.max(0, Math.sin(t * 2.4 + this.sparkPhase[i] * 3)) ** 6;
        // a field whose floor is hidden (another floor opened) goes dark
        const b = l.visible ? (0.15 + 0.85 * tw) * (0.4 + 0.6 * (f?.level ?? 0)) : 0;
        col.setXYZ(i, b, b * 0.86, b * 0.35);
      }
      pos.needsUpdate = true;
      col.needsUpdate = true;
    }
    return true;
  }

  setVisible(on: boolean): void {
    this.group.visible = on;
  }

  dispose(): void {
    this.setArcs([]);
    this.sparks.geometry.dispose();
    (this.sparks.material as PointsMaterial).dispose();
    this.tex.dispose();
    this.scene.remove(this.group);
  }
}
