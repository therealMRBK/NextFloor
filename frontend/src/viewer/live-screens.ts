/**
 * NextFloor's TV screens: a TV or monitor that plays shows a picture of what runs – the cover art, the title and
 * the artist or series, and the app – drawn onto its screen, on a gradient in the app's colour. Behind it an
 * ambilight glows on the wall in the same colour, breathing slowly while it plays.
 */
import { AdditiveBlending, CanvasTexture, Color, DoubleSide, Group, Mesh, MeshBasicMaterial, PlaneGeometry, SRGBColorSpace, type Scene } from "three";
import type { FloorLift } from "./live-energy.ts";

export interface LiveScreen {
  id: string;
  floorId: string;
  /** Where the furniture stands and how it is turned (degrees), mirrored or not. */
  x: number;
  z: number;
  rotation: number;
  /** The screen's rectangle in the furniture's frame (x across, y up from the floor, z the front face). */
  rect: { x0: number; x1: number; y0: number; y1: number; z: number };
  color: [number, number, number];
  title: string;
  subtitle: string;
  app: string | null;
  picture: string | null;
  playing: boolean;
}

const DEG = Math.PI / 180;

interface ScreenView {
  s: LiveScreen;
  sig: string;
  screen: Mesh;
  glow: Mesh;
  canvas: HTMLCanvasElement;
  texture: CanvasTexture;
  image: HTMLImageElement | null;
}

function glowTexture(): CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d")!;
  const r = g.createRadialGradient(32, 32, 4, 32, 32, 32);
  r.addColorStop(0, "rgba(255,255,255,0.9)");
  r.addColorStop(0.5, "rgba(255,255,255,0.35)");
  r.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = r;
  g.fillRect(0, 0, 64, 64);
  return new CanvasTexture(c);
}

export class ScreenLayer {
  readonly group = new Group();
  private readonly scene: Scene;
  private readonly lift: FloorLift;
  private readonly glowTex = glowTexture();
  private views = new Map<string, ScreenView>();
  /** Called when a picture has loaded (the host renders a frame). */
  onChange: (() => void) | null = null;

  constructor(scene: Scene, lift: FloorLift) {
    this.scene = scene;
    this.lift = lift;
    this.group.name = "live-screens";
    scene.add(this.group);
  }

  get active(): boolean {
    return [...this.views.values()].some((v) => v.s.playing);
  }

  set(list: LiveScreen[]): void {
    const keep = new Set(list.map((s) => s.id));
    for (const [id, v] of this.views) if (!keep.has(id)) this.drop(id, v);
    for (const s of list) {
      let v = this.views.get(s.id);
      if (!v) {
        const canvas = document.createElement("canvas");
        canvas.width = 512;
        canvas.height = 288;
        const texture = new CanvasTexture(canvas);
        texture.colorSpace = SRGBColorSpace;
        const screen = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: texture, transparent: true, toneMapped: false }));
        screen.renderOrder = 6;
        const glow = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: this.glowTex, transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide }));
        glow.renderOrder = 2;
        this.group.add(screen, glow);
        v = { s, sig: "", screen, glow, canvas, texture, image: null };
        this.views.set(s.id, v);
      }
      v.s = s;
      const sig = [s.title, s.subtitle, s.app, s.picture, s.color.join(","), s.playing].join("|");
      if (sig !== v.sig) {
        const pictureChanged = v.sig.split("|")[3] !== (s.picture ?? "");
        v.sig = sig;
        if (pictureChanged) this.loadPicture(v);
        this.draw(v);
      }
      this.place(v);
    }
  }

  private loadPicture(v: ScreenView): void {
    v.image = null;
    const url = v.s.picture;
    if (!url) return;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      if (v.s.picture !== url || !this.views.has(v.s.id)) return;
      v.image = img;
      this.draw(v);
      this.onChange?.();
    };
    img.src = url;
  }

  /** The screen's picture: a gradient in the app's colour, the cover, title, artist and the app's name. */
  private draw(v: ScreenView): void {
    const s = v.s;
    const g = v.canvas.getContext("2d")!;
    const W = v.canvas.width, H = v.canvas.height;
    const [r, gr, b] = s.color;
    const bg = g.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, `rgb(${Math.round(r * 0.35)},${Math.round(gr * 0.35)},${Math.round(b * 0.35)})`);
    bg.addColorStop(1, "rgb(6,9,18)");
    g.fillStyle = bg;
    g.fillRect(0, 0, W, H);
    const pad = 22;
    let tx = pad;
    if (v.image) {
      // the cover, square, on the left, with a soft shadow in the app's colour
      const size = H - pad * 2 - 30;
      g.save();
      g.shadowColor = `rgba(${r},${gr},${b},0.7)`;
      g.shadowBlur = 24;
      const iw = v.image.naturalWidth || 1, ih = v.image.naturalHeight || 1;
      const k = Math.max(size / iw, size / ih);
      const sw = size / k, sh = size / k;
      g.drawImage(v.image, (iw - sw) / 2, (ih - sh) / 2, sw, sh, pad, pad, size, size);
      g.restore();
      tx = pad * 2 + size;
    }
    g.fillStyle = "#ffffff";
    g.font = "600 34px Figtree, Roboto, sans-serif";
    this.text(g, s.title || s.app || "", tx, H / 2 - 18, W - tx - pad);
    g.fillStyle = "rgba(230,240,255,0.75)";
    g.font = "26px Figtree, Roboto, sans-serif";
    this.text(g, s.subtitle, tx, H / 2 + 22, W - tx - pad);
    // the app's name in its colour, and a thin bar in the colour along the bottom
    if (s.app) {
      g.fillStyle = `rgb(${r},${gr},${b})`;
      g.font = "700 22px Figtree, Roboto, sans-serif";
      this.text(g, (s.playing ? "▶ " : "❚❚ ") + s.app, tx, H - pad - 14, W - tx - pad);
    }
    g.fillStyle = `rgba(${r},${gr},${b},0.9)`;
    g.fillRect(0, H - 6, W * (s.playing ? 1 : 0.4), 6);
    v.texture.needsUpdate = true;
  }

  private text(g: CanvasRenderingContext2D, text: string, x: number, y: number, max: number): void {
    let t = text;
    while (t.length > 1 && g.measureText(t).width > max) t = t.slice(0, -2);
    g.fillText(t === text ? t : `${t}…`, x, y);
  }

  /** Puts the picture on the screen's front and the glow on the wall behind the TV. */
  private place(v: ScreenView): void {
    const s = v.s;
    const r = s.rect;
    const a = s.rotation * DEG;
    const l = this.lift(s.floorId);
    const cx = (r.x0 + r.x1) / 2;
    const at = (lx: number, lz: number): [number, number] => [s.x + lx * Math.cos(a) - lz * Math.sin(a), s.z + lx * Math.sin(a) + lz * Math.cos(a)];
    const w = r.x1 - r.x0, h = r.y1 - r.y0;
    const [sx, sz] = at(cx, r.z + 0.012);
    v.screen.position.set(sx, l.y + (r.y0 + r.y1) / 2, sz);
    v.screen.rotation.set(0, -a, 0);
    v.screen.scale.set(w, h, 1);
    // the glow sits a little behind the screen, larger than it
    const [gx, gz] = at(cx, r.z - 0.18);
    v.glow.position.set(gx, l.y + (r.y0 + r.y1) / 2, gz);
    v.glow.rotation.set(0, -a, 0);
    v.glow.scale.set(w * 2.4, h * 2.6, 1);
    (v.glow.material as MeshBasicMaterial).color = new Color(s.color[0] / 255, s.color[1] / 255, s.color[2] / 255);
    v.screen.visible = v.glow.visible = l.visible;
  }

  step(now: number): boolean {
    let moving = false;
    for (const v of this.views.values()) {
      this.place(v);
      // the ambilight breathes while it plays, and rests dim while paused
      const m = v.glow.material as MeshBasicMaterial;
      m.opacity = v.s.playing ? 0.55 + 0.25 * Math.sin(now / 900 + v.s.x) : 0.25;
      moving ||= v.s.playing;
    }
    return moving;
  }

  private drop(id: string, v: ScreenView): void {
    this.group.remove(v.screen, v.glow);
    v.screen.geometry.dispose();
    (v.screen.material as MeshBasicMaterial).dispose();
    v.texture.dispose();
    v.glow.geometry.dispose();
    (v.glow.material as MeshBasicMaterial).dispose();
    this.views.delete(id);
  }

  dispose(): void {
    for (const [id, v] of this.views) this.drop(id, v);
    this.glowTex.dispose();
    this.scene.remove(this.group);
  }
}
