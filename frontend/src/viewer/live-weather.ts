/**
 * NextFloor's weather layer: what the sky does over the plot, drawn into the 3D scene.
 *
 *  - rain as streaks and snow as drifting flakes, falling at an angle along the real wind (direction and strength)
 *  - a band of clouds on the horizon around the plot, turning slowly with the wind, and their soft shadows
 *    travelling over the ground and the house (clouds above the house would hide it from the raised camera)
 *  - fog that thickens with distance
 *  - lightning: a jagged bolt from the clouds down beside the house, with a short flash of the whole stage
 *  - the sun by day and the moon by night as a glowing disc in their real direction, paler behind clouds
 *
 * Everything sits in one group; the layer only animates while something moves (rain, snow, clouds, a bolt),
 * and draws fewer particles on the tablet level.
 */
import {
  AdditiveBlending,
  BufferGeometry,
  CanvasTexture,
  Color,
  Float32BufferAttribute,
  FogExp2,
  Group,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  NormalBlending,
  PlaneGeometry,
  Points,
  PointsMaterial,
  Sprite,
  SpriteMaterial,
  Vector3,
  type Scene,
} from "three";

/** The weather to show, each amount 0…1. */
export interface SkyWeather {
  rain: number;
  snow: number;
  hail: number;
  fog: number;
  cloud: number;
  /** Wind strength 0…1 (about 0 = calm, 1 = storm). */
  wind: number;
  /** Where the wind comes from, degrees clockwise from north (null = unknown: it blows from the west). */
  windFrom: number | null;
  lightning: boolean;
}

export interface SkyView {
  weather: SkyWeather | null;
  /** Sun from sun.sun (null = unknown). */
  sun: { elevation: number; azimuth: number } | null;
  /** The plan's north (degrees, as in the building settings). */
  north: number;
  /** Background colour of the stage (fog melts into it). */
  sky: [number, number, number];
  /** The sun or moon disc shows. */
  disc: boolean;
  /** Fewer particles (tablet level). */
  low: boolean;
}

export interface Bounds {
  x0: number;
  x1: number;
  z0: number;
  z1: number;
  y0: number;
  y1: number;
}

const DEG = Math.PI / 180;
const RAIN_MAX = 2400;
const SNOW_MAX = 1600;
const CLOUDS = 9;

function softTexture(stops: [number, string][], size = 64): CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const g = c.getContext("2d")!;
  const r = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  for (const [at, col] of stops) r.addColorStop(at, col);
  g.fillStyle = r;
  g.fillRect(0, 0, size, size);
  return new CanvasTexture(c);
}

/** A cloud: a few overlapping soft blobs, so no two clouds look the same. */
function cloudTexture(seed: number): CanvasTexture {
  const size = 128;
  const c = document.createElement("canvas");
  c.width = size;
  c.height = size / 2;
  const g = c.getContext("2d")!;
  let s = seed * 9301 + 49297;
  const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  for (let i = 0; i < 7; i++) {
    const x = size * (0.2 + 0.6 * rnd());
    const y = size / 2 * (0.45 + 0.25 * rnd());
    const r = size * (0.12 + 0.14 * rnd());
    const grad = g.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, "rgba(255,255,255,0.9)");
    grad.addColorStop(0.6, "rgba(255,255,255,0.45)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = grad;
    g.fillRect(0, 0, size, size / 2);
  }
  return new CanvasTexture(c);
}

interface CloudPuff {
  sprite: Sprite;
  shadow: Mesh;
  /** Place on the horizon ring: angle (radians), distance factor and height factor. */
  angle: number;
  ring: number;
  lift: number;
  scale: number;
  speed: number;
  /** Its shadow on the plot (plan coordinates). */
  sx: number;
  sz: number;
}

export class WeatherLayer {
  readonly group = new Group();
  private readonly scene: Scene;
  private bounds: Bounds = { x0: -10, x1: 10, z0: -10, z1: 10, y0: 0, y1: 8 };
  private view: SkyView | null = null;
  private readonly rain: LineSegments;
  private readonly rainVel = new Float32Array(RAIN_MAX * 3);
  private readonly snow: Points;
  private readonly snowPhase = new Float32Array(SNOW_MAX);
  private readonly hail: Points;
  private readonly clouds: CloudPuff[] = [];
  private readonly bolt: LineSegments;
  private readonly disc: Sprite;
  private readonly halo: Sprite;
  private last = 0;
  private nextBolt = 0;
  private boltUntil = 0;
  /** The stage flashes with a bolt (the host listens). */
  onFlash: ((on: boolean) => void) | null = null;

  constructor(scene: Scene) {
    this.scene = scene;
    this.group.name = "live-weather";
    this.group.renderOrder = 5;

    const rg = new BufferGeometry();
    rg.setAttribute("position", new Float32BufferAttribute(new Float32Array(RAIN_MAX * 6), 3));
    this.rain = new LineSegments(rg, new LineBasicMaterial({ color: 0xa9cdf5, transparent: true, opacity: 0.5, depthWrite: false }));

    const flake = softTexture([[0, "rgba(255,255,255,1)"], [0.5, "rgba(255,255,255,0.6)"], [1, "rgba(255,255,255,0)"]], 32);
    const sg = new BufferGeometry();
    sg.setAttribute("position", new Float32BufferAttribute(new Float32Array(SNOW_MAX * 3), 3));
    this.snow = new Points(sg, new PointsMaterial({ color: 0xf6f9ff, size: 0.16, map: flake, transparent: true, opacity: 0.9, depthWrite: false }));
    for (let i = 0; i < SNOW_MAX; i++) this.snowPhase[i] = Math.random() * Math.PI * 2;

    const hg = new BufferGeometry();
    hg.setAttribute("position", new Float32BufferAttribute(new Float32Array(600 * 3), 3));
    this.hail = new Points(hg, new PointsMaterial({ color: 0xe9f1ff, size: 0.09, transparent: true, opacity: 0.95, depthWrite: false }));

    const shadowTex = softTexture([[0, "rgba(0,0,0,0.55)"], [0.7, "rgba(0,0,0,0.25)"], [1, "rgba(0,0,0,0)"]]);
    for (let i = 0; i < CLOUDS; i++) {
      const sprite = new Sprite(new SpriteMaterial({ map: cloudTexture(i + 1), transparent: true, opacity: 0, depthWrite: false, fog: false }));
      const shadow = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0, depthWrite: false, blending: NormalBlending }));
      shadow.rotation.x = -Math.PI / 2;
      shadow.renderOrder = -1;
      this.clouds.push({ sprite, shadow, angle: 0, ring: 1, lift: 1, scale: 1, speed: 0.6 + Math.random() * 0.8, sx: 0, sz: 0 });
      this.group.add(sprite, shadow);
    }

    const bg = new BufferGeometry();
    bg.setAttribute("position", new Float32BufferAttribute(new Float32Array(24 * 6), 3));
    this.bolt = new LineSegments(bg, new LineBasicMaterial({ color: 0xdfe8ff, transparent: true, opacity: 1, blending: AdditiveBlending, depthWrite: false }));
    this.bolt.visible = false;

    const glow = softTexture([[0, "rgba(255,255,255,1)"], [0.25, "rgba(255,255,255,0.9)"], [0.32, "rgba(255,255,255,0.35)"], [1, "rgba(255,255,255,0)"]]);
    this.disc = new Sprite(new SpriteMaterial({ map: glow, transparent: true, depthWrite: false, blending: AdditiveBlending, fog: false }));
    this.halo = new Sprite(new SpriteMaterial({ map: softTexture([[0, "rgba(255,255,255,0.35)"], [1, "rgba(255,255,255,0)"]]), transparent: true, depthWrite: false, blending: AdditiveBlending, fog: false }));

    for (const o of [this.rain, this.snow, this.hail, this.bolt, this.disc, this.halo]) {
      o.frustumCulled = false;
      this.group.add(o);
    }
    this.group.visible = false;
    scene.add(this.group);
  }

  /** How cloudy it is (0…1): the sunlight through the windows dims with it. */
  get cloud(): number {
    return this.view?.weather?.cloud ?? 0;
  }

  /** The area the weather covers: the plot and a margin around it. */
  setBounds(b: Bounds): void {
    this.bounds = b;
    this.seed();
  }

  set(view: SkyView | null): void {
    const before = this.view;
    this.view = view;
    this.group.visible = !!view;
    const w = view?.weather ?? null;
    // fog thickens with distance and melts into the stage colour
    if (view && w && w.fog > 0.02 && !view.low) {
      const color = new Color(view.sky[0] / 255, view.sky[1] / 255, view.sky[2] / 255);
      this.scene.fog = new FogExp2(color, 0.008 + 0.04 * w.fog);
    } else if (this.scene.fog instanceof FogExp2) this.scene.fog = null;
    if (!before || before.low !== view?.low || !!before.weather !== !!w) this.seed();
    this.placeDisc();
    if (!w?.lightning) this.endBolt();
  }

  /** Wind as a horizontal velocity in plan coordinates (x right, z down), metres per second. */
  private windVector(): [number, number] {
    const w = this.view?.weather;
    if (!w) return [0, 0];
    const from = (w.windFrom ?? 270) + (this.view?.north ?? 0);
    // the wind blows towards the opposite side of where it comes from
    const to = (from + 180) * DEG;
    const speed = 0.4 + 7 * w.wind;
    return [Math.sin(to) * speed, -Math.cos(to) * speed];
  }

  private count(amount: number, max: number): number {
    const low = this.view?.low ?? false;
    return Math.round(Math.min(1, amount) * max * (low ? 0.3 : 1));
  }

  /** New random positions for everything that falls or drifts (after a change of the area or of the amounts). */
  private seed(): void {
    const b = this.bounds;
    const w = this.view?.weather;
    const rx = () => b.x0 + Math.random() * (b.x1 - b.x0);
    const rz = () => b.z0 + Math.random() * (b.z1 - b.z0);
    const ry = () => b.y0 + Math.random() * (b.y1 - b.y0);
    const rp = this.rain.geometry.getAttribute("position") as Float32BufferAttribute;
    for (let i = 0; i < RAIN_MAX; i++) {
      const x = rx(), y = ry(), z = rz();
      rp.setXYZ(i * 2, x, y, z);
      rp.setXYZ(i * 2 + 1, x, y - 0.4, z);
      this.rainVel[i * 3 + 1] = 8.5 + Math.random() * 3;
    }
    rp.needsUpdate = true;
    const sp = this.snow.geometry.getAttribute("position") as Float32BufferAttribute;
    for (let i = 0; i < SNOW_MAX; i++) sp.setXYZ(i, rx(), ry(), rz());
    sp.needsUpdate = true;
    const hp = this.hail.geometry.getAttribute("position") as Float32BufferAttribute;
    for (let i = 0; i < hp.count; i++) hp.setXYZ(i, rx(), ry(), rz());
    hp.needsUpdate = true;
    this.rain.geometry.setDrawRange(0, this.count(w?.rain ?? 0, RAIN_MAX) * 2);
    this.snow.geometry.setDrawRange(0, this.count(w?.snow ?? 0, SNOW_MAX));
    this.hail.geometry.setDrawRange(0, this.count(w?.hail ?? 0, 600));
    this.rain.visible = !!w && w.rain > 0.01;
    this.snow.visible = !!w && w.snow > 0.01;
    this.hail.visible = !!w && w.hail > 0.01;
    // clouds on a ring around the plot, their shadows anywhere over it
    this.clouds.forEach((c, i) => {
      c.angle = (i / CLOUDS) * Math.PI * 2 + Math.random() * 0.5;
      c.ring = 1.7 + Math.random() * 0.9;
      c.lift = 0.35 + Math.random() * 0.35;
      c.scale = 0.55 + Math.random() * 0.45;
      c.sx = b.x0 + Math.random() * (b.x1 - b.x0);
      c.sz = b.z0 + Math.random() * (b.z1 - b.z0);
    });
    this.placeClouds(0);
  }

  private placeClouds(dt: number): void {
    const v = this.view;
    const w = v?.weather;
    const amount = w?.cloud ?? 0;
    const b = this.bounds;
    const cx = (b.x0 + b.x1) / 2, cz = (b.z0 + b.z1) / 2;
    const span = Math.max(b.x1 - b.x0, b.z1 - b.z0);
    const [vx, vz] = this.windVector();
    const shown = Math.round(amount * CLOUDS);
    // the clouds take the colour of the stage: dark slate on a night stage, white on a bright one
    const sky = v?.sky ?? [20, 28, 44];
    const bright = (sky[0] + sky[1] + sky[2]) / (3 * 255);
    const storm = w?.rain || w?.lightning ? 0.3 : 0;
    const tone = Math.max(0.12, Math.min(1, 0.28 + bright * 0.9 - storm - 0.25 * Math.max(0, amount - 0.6)));
    // the ring turns slowly in the direction the wind blows
    const turn = (Math.hypot(vx, vz) / Math.max(20, span * 4)) * dt * Math.sign(vx || 1);
    this.clouds.forEach((c, i) => {
      const on = i < shown;
      c.angle += turn * c.speed;
      const r = span * c.ring;
      const sm = c.sprite.material as SpriteMaterial;
      sm.color.setRGB(tone, tone * 1.02, Math.min(1, tone * 1.12));
      sm.opacity = on ? 0.3 + 0.45 * amount : 0;
      c.sprite.visible = on;
      c.sprite.position.set(cx + Math.cos(c.angle) * r, b.y0 + span * c.lift, cz + Math.sin(c.angle) * r);
      c.sprite.scale.set(span * c.scale * 1.6, span * c.scale * 0.6, 1);
      // the shadows drift over the plot with the wind and come back on the far side
      c.sx += vx * 0.45 * c.speed * dt;
      c.sz += vz * 0.45 * c.speed * dt;
      const m = span * 0.4;
      if (c.sx > b.x1 + m) c.sx = b.x0 - m;
      if (c.sx < b.x0 - m) c.sx = b.x1 + m;
      if (c.sz > b.z1 + m) c.sz = b.z0 - m;
      if (c.sz < b.z0 - m) c.sz = b.z1 + m;
      const shm = c.shadow.material as MeshBasicMaterial;
      shm.opacity = on ? 0.12 + 0.2 * amount : 0;
      c.shadow.visible = on;
      c.shadow.position.set(c.sx, b.y0 + 0.03, c.sz);
      c.shadow.scale.set(span * c.scale * 0.55, span * c.scale * 0.35, 1);
    });
  }

  /** The sun by day, the moon by night, far out in their direction; paler (or gone) behind clouds. */
  private placeDisc(): void {
    const v = this.view;
    const sun = v?.sun;
    const cloud = v?.weather?.cloud ?? 0;
    const night = !sun || sun.elevation < -3;
    if (!v || !sun || !v.disc || cloud > 0.9 || (!night && sun.elevation < 0.5)) {
      this.disc.visible = this.halo.visible = false;
      return;
    }
    const b = this.bounds;
    const center = new Vector3((b.x0 + b.x1) / 2, b.y0, (b.z0 + b.z1) / 2);
    const r = Math.max(70, Math.max(b.x1 - b.x0, b.z1 - b.z0) * 3.5);
    // the moon stands roughly opposite the sun
    const az = ((night ? sun.azimuth + 180 : sun.azimuth) + v.north) * DEG;
    const el = Math.max(8, Math.abs(sun.elevation)) * DEG;
    const dir = new Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), -Math.cos(az) * Math.cos(el));
    const pos = center.addScaledVector(dir, r);
    const size = r * (night ? 0.07 : 0.1);
    this.disc.position.copy(pos);
    this.halo.position.copy(pos);
    this.disc.scale.setScalar(size);
    this.halo.scale.setScalar(size * 3.2);
    const dm = this.disc.material as SpriteMaterial;
    const hm = this.halo.material as SpriteMaterial;
    // a low sun is orange, a high one pale yellow
    const low = !night ? Math.max(0, 1 - sun.elevation / 20) : 0;
    dm.color.set(night ? 0xd5def2 : new Color(1, 0.9 - 0.25 * low, 0.6 - 0.35 * low));
    hm.color.copy(dm.color);
    dm.opacity = (night ? 0.7 : 0.95) * (1 - cloud);
    hm.opacity = (night ? 0.35 : 0.6) * (1 - cloud);
    this.disc.visible = this.halo.visible = true;
  }

  private endBolt(): void {
    if (this.bolt.visible) {
      this.bolt.visible = false;
      this.onFlash?.(false);
    }
  }

  /** A jagged bolt from the cloud base down to the ground somewhere beside the house. */
  private strike(now: number): void {
    const b = this.bounds;
    const side = Math.random() < 0.5 ? -1 : 1;
    let x = side < 0 ? b.x0 - 2 - Math.random() * 6 : b.x1 + 2 + Math.random() * 6;
    let z = b.z0 + Math.random() * (b.z1 - b.z0);
    const top = b.y1 + 4;
    const p = this.bolt.geometry.getAttribute("position") as Float32BufferAttribute;
    const steps = 24;
    let y = top;
    for (let i = 0; i < steps; i++) {
      const ny = top - ((i + 1) / steps) * (top - b.y0);
      const nx = x + (Math.random() - 0.5) * 1.6;
      const nz = z + (Math.random() - 0.5) * 1.6;
      p.setXYZ(i * 2, x, y, z);
      p.setXYZ(i * 2 + 1, nx, ny, nz);
      x = nx;
      z = nz;
      y = ny;
    }
    p.needsUpdate = true;
    this.bolt.visible = true;
    this.boltUntil = now + 90 + Math.random() * 120;
    this.onFlash?.(true);
  }

  /** One frame: let it rain, snow, drift and flash. True while anything moves. */
  step(now: number): boolean {
    const v = this.view;
    const w = v?.weather;
    if (!v || !w) {
      this.last = 0;
      return false;
    }
    const dt = this.last ? Math.min(0.1, (now - this.last) / 1000) : 0;
    this.last = now;
    const b = this.bounds;
    const height = b.y1 - b.y0;
    const [vx, vz] = this.windVector();
    if (this.rain.visible && dt) {
      const p = this.rain.geometry.getAttribute("position") as Float32BufferAttribute;
      const a = p.array as Float32Array;
      const n = this.count(w.rain, RAIN_MAX);
      for (let i = 0; i < n; i++) {
        const k = i * 6;
        const fall = this.rainVel[i * 3 + 1];
        let x = a[k] + vx * dt, y = a[k + 1] - fall * dt, z = a[k + 2] + vz * dt;
        if (y < b.y0) {
          y += height;
          x = b.x0 + Math.random() * (b.x1 - b.x0) - vx * 0.4;
          z = b.z0 + Math.random() * (b.z1 - b.z0) - vz * 0.4;
        }
        // the streak points back along the drop's path: slanted in the wind
        const len = 0.05;
        a[k] = x; a[k + 1] = y; a[k + 2] = z;
        a[k + 3] = x - vx * len; a[k + 4] = y + fall * len; a[k + 5] = z - vz * len;
      }
      p.needsUpdate = true;
    }
    if (this.snow.visible && dt) {
      const p = this.snow.geometry.getAttribute("position") as Float32BufferAttribute;
      const a = p.array as Float32Array;
      const n = this.count(w.snow, SNOW_MAX);
      const t = now / 1000;
      for (let i = 0; i < n; i++) {
        const k = i * 3;
        const ph = this.snowPhase[i];
        let x = a[k] + (vx * 0.35 + Math.sin(t * 1.3 + ph) * 0.35) * dt;
        let y = a[k + 1] - (0.7 + 0.5 * ((ph * 7) % 1)) * dt;
        let z = a[k + 2] + (vz * 0.35 + Math.cos(t * 1.1 + ph) * 0.35) * dt;
        if (y < b.y0) {
          y += height;
          x = b.x0 + Math.random() * (b.x1 - b.x0);
          z = b.z0 + Math.random() * (b.z1 - b.z0);
        }
        a[k] = x; a[k + 1] = y; a[k + 2] = z;
      }
      p.needsUpdate = true;
    }
    if (this.hail.visible && dt) {
      const p = this.hail.geometry.getAttribute("position") as Float32BufferAttribute;
      const a = p.array as Float32Array;
      const n = this.count(w.hail, 600);
      for (let i = 0; i < n; i++) {
        const k = i * 3;
        let y = a[k + 1] - 14 * dt;
        if (y < b.y0) y += height;
        a[k] += vx * 0.5 * dt;
        a[k + 1] = y;
        a[k + 2] += vz * 0.5 * dt;
      }
      p.needsUpdate = true;
    }
    if (w.cloud > 0.01) this.placeClouds(dt);
    if (w.lightning && !v.low) {
      if (!this.nextBolt) this.nextBolt = now + 2500 + Math.random() * 6000;
      if (now >= this.nextBolt) {
        this.strike(now);
        this.nextBolt = now + 3500 + Math.random() * 9000;
      }
      if (this.bolt.visible && now > this.boltUntil) this.endBolt();
    } else this.nextBolt = 0;
    return this.rain.visible || this.snow.visible || this.hail.visible || w.cloud > 0.01 || w.lightning;
  }

  dispose(): void {
    this.endBolt();
    this.group.traverse((o) => {
      const m = o as Mesh;
      m.geometry?.dispose();
      const mat = m.material as MeshBasicMaterial | undefined;
      mat?.map?.dispose();
      mat?.dispose();
    });
    this.scene.remove(this.group);
    if (this.scene.fog instanceof FogExp2) this.scene.fog = null;
  }
}
