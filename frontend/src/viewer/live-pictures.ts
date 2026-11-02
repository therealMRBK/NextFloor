/**
 * Picture frames: an own photo (a stored picture, a URL, an image or camera entity) shown in a frame's picture part, with an
 * adjustable white mat around it. The picture is cropped to fill the opening, or fitted whole on the mat.
 */
import { CanvasTexture, Group, Mesh, MeshBasicMaterial, PlaneGeometry, SRGBColorSpace, type Scene } from "three";
import type { FloorLift } from "./live-energy.ts";

export interface LivePicture {
  id: string;
  floorId: string;
  x: number;
  z: number;
  rotation: number;
  /** The picture part in the furniture's frame (x across, y up from the floor, z its front face). */
  rect: { x0: number; x1: number; y0: number; y1: number; z: number };
  url: string;
  /** Mat around the picture in % of the shorter side (0 = none). */
  border: number;
  /** "contain": the whole picture on the mat; "cover" (default): it fills the opening. */
  fit: "cover" | "contain";
}

const DEG = Math.PI / 180;
const MAT = "#f4f1ea";

interface PictureView {
  p: LivePicture;
  sig: string;
  mesh: Mesh;
  canvas: HTMLCanvasElement;
  texture: CanvasTexture;
  image: HTMLImageElement | null;
}

export class PictureLayer {
  readonly group = new Group();
  private readonly scene: Scene;
  private readonly lift: FloorLift;
  private views = new Map<string, PictureView>();
  /** Called when a picture has loaded (the host renders a frame). */
  onChange: (() => void) | null = null;

  constructor(scene: Scene, lift: FloorLift) {
    this.scene = scene;
    this.lift = lift;
    this.group.name = "live-pictures";
    scene.add(this.group);
  }

  set(list: LivePicture[]): void {
    const keep = new Set(list.map((p) => p.id));
    for (const [id, v] of this.views) if (!keep.has(id)) this.drop(id, v);
    for (const p of list) {
      let v = this.views.get(p.id);
      if (!v) {
        const canvas = document.createElement("canvas");
        const texture = new CanvasTexture(canvas);
        texture.colorSpace = SRGBColorSpace;
        const mesh = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: texture, toneMapped: false }));
        mesh.renderOrder = 5;
        this.group.add(mesh);
        v = { p, sig: "", mesh, canvas, texture, image: null };
        this.views.set(p.id, v);
      }
      const urlChanged = v.p.url !== p.url || !v.sig;
      v.p = p;
      const w = p.rect.x1 - p.rect.x0;
      const h = p.rect.y1 - p.rect.y0;
      const sig = [p.url, p.border, p.fit, w.toFixed(3), h.toFixed(3)].join("|");
      if (sig !== v.sig) {
        v.sig = sig;
        if (urlChanged) this.load(v);
        this.draw(v);
      }
      this.place(v);
    }
  }

  private load(v: PictureView): void {
    v.image = null;
    const url = v.p.url;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      if (v.p.url !== url || !this.views.has(v.p.id)) return;
      v.image = img;
      this.draw(v);
      this.onChange?.();
    };
    img.src = url;
  }

  /** The mat, and the picture cropped (or fitted) into the opening the mat leaves. */
  private draw(v: PictureView): void {
    const p = v.p;
    const w = Math.max(0.01, p.rect.x1 - p.rect.x0);
    const h = Math.max(0.01, p.rect.y1 - p.rect.y0);
    // about 600 px on the longer side: sharp enough on a wall, light on old tablets
    const k = 600 / Math.max(w, h);
    const W = (v.canvas.width = Math.max(16, Math.round(w * k)));
    const H = (v.canvas.height = Math.max(16, Math.round(h * k)));
    const g = v.canvas.getContext("2d")!;
    g.fillStyle = p.border > 0 ? MAT : "#20242c";
    g.fillRect(0, 0, W, H);
    const m = Math.round((Math.min(W, H) * Math.min(40, Math.max(0, p.border))) / 100);
    const [ox, oy, ow, oh] = [m, m, W - 2 * m, H - 2 * m];
    if (v.image && ow > 4 && oh > 4) {
      const iw = v.image.naturalWidth || 1;
      const ih = v.image.naturalHeight || 1;
      if (p.fit === "contain") {
        const s = Math.min(ow / iw, oh / ih);
        g.drawImage(v.image, ox + (ow - iw * s) / 2, oy + (oh - ih * s) / 2, iw * s, ih * s);
      } else {
        const s = Math.max(ow / iw, oh / ih);
        const sw = ow / s;
        const sh = oh / s;
        g.drawImage(v.image, (iw - sw) / 2, (ih - sh) / 2, sw, sh, ox, oy, ow, oh);
      }
      if (m > 0) {
        // a thin shadow line where the mat's bevel would be
        g.strokeStyle = "rgba(0,0,0,0.25)";
        g.lineWidth = Math.max(1, m * 0.04);
        g.strokeRect(ox, oy, ow, oh);
      }
    } else if (ow > 4 && oh > 4) {
      g.fillStyle = "#3a4250";
      g.fillRect(ox, oy, ow, oh);
    }
    v.texture.needsUpdate = true;
  }

  /** Puts the picture onto the front face of the frame's picture part. */
  private place(v: PictureView): void {
    const p = v.p;
    const r = p.rect;
    const a = p.rotation * DEG;
    const l = this.lift(p.floorId);
    const cx = (r.x0 + r.x1) / 2;
    const lz = r.z + 0.004;
    v.mesh.position.set(p.x + cx * Math.cos(a) - lz * Math.sin(a), l.y + (r.y0 + r.y1) / 2, p.z + cx * Math.sin(a) + lz * Math.cos(a));
    v.mesh.rotation.set(0, -a, 0);
    v.mesh.scale.set(r.x1 - r.x0, r.y1 - r.y0, 1);
    v.mesh.visible = l.visible;
  }

  /** Follows the floors as they lift and hide; pictures never animate on their own. */
  step(): boolean {
    for (const v of this.views.values()) this.place(v);
    return false;
  }

  private drop(id: string, v: PictureView): void {
    this.group.remove(v.mesh);
    v.mesh.geometry.dispose();
    (v.mesh.material as MeshBasicMaterial).dispose();
    v.texture.dispose();
    this.views.delete(id);
  }

  dispose(): void {
    for (const [id, v] of this.views) this.drop(id, v);
    this.scene.remove(this.group);
  }
}
