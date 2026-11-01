// The builder's 3D view: the item drawn by NextFloor's own furniture code (so it looks exactly as it will in the plan), a floor
// grid with the item's footprint, the selected part outlined in the accent colour, and a tap that picks a part. Drag turns the
// view, the wheel or two fingers zoom.

import { Color, GridHelper, LineBasicMaterial, LineSegments, Mesh, MeshBasicMaterial, PerspectiveCamera, Raycaster, Scene, Vector2, Vector3, WebGLRenderer, type BufferGeometry } from "three";
import type { PackItem } from "../packs.ts";
import { GeoBuffer, LineBuffer } from "../viewer/geo.ts";
import { Builder } from "../viewer/furniture/builder.ts";
import { packModel, placement } from "../viewer/furniture/packs.ts";

const LAMP_LIGHT = 0xffb547;
const ACCENT = new Color(0x37e0ff);

export type ViewPreset = "iso" | "front" | "side" | "top";

/** The distance between the first two fingers on the screen. */
function spread(pointers: Map<number, Vector2>): number {
  const [a, b] = [...pointers.values()];
  return a && b ? a.distanceTo(b) : 0;
}

export class BuilderScene {
  private readonly renderer: WebGLRenderer;
  private readonly scene = new Scene();
  private readonly camera = new PerspectiveCamera(40, 1, 0.01, 200);
  private readonly target = new Vector3();
  /** Camera around the target: azimuth, elevation (radians) and distance. */
  private theta = 0.65;
  private phi = 1.05;
  private radius = 3;
  private item: PackItem | null = null;
  private selected = -1;
  private model: Mesh | null = null;
  private edges: LineSegments | null = null;
  private highlight: LineSegments | null = null;
  private grid: GridHelper | null = null;
  /** One mesh per part, invisible, for picking. */
  private pickers: Mesh[] = [];
  private frame = 0;
  private readonly observer: ResizeObserver;
  private onPick: (index: number) => void = () => undefined;

  private readonly canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.renderer = new WebGLRenderer({ canvas, antialias: true, alpha: false });
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    this.renderer.setClearColor(0x0b1020, 1);
    this.observer = new ResizeObserver(() => this.resize());
    this.observer.observe(canvas);
    this.listen();
  }

  set pick(cb: (index: number) => void) {
    this.onPick = cb;
  }

  /** Draw an item; `selected` is the index of the outlined part (-1: none). Keeps the camera unless the item's size changed a lot. */
  show(item: PackItem, selected: number): void {
    const sizeChanged = !this.item || this.item.size.some((v, i) => Math.abs(v - item.size[i]) > 0.3 * Math.max(v, item.size[i]));
    this.item = item;
    this.selected = selected;
    this.rebuild();
    if (sizeChanged) this.fit();
    this.invalidate();
  }

  setView(preset: ViewPreset): void {
    const angles: Record<ViewPreset, [number, number]> = { iso: [0.65, 1.05], front: [0, Math.PI / 2 - 0.02], side: [Math.PI / 2, Math.PI / 2 - 0.02], top: [0, 0.02] };
    [this.theta, this.phi] = angles[preset];
    this.fit();
    this.invalidate();
  }

  zoom(factor: number): void {
    this.radius = Math.min(40, Math.max(0.2, this.radius * factor));
    this.invalidate();
  }

  dispose(): void {
    cancelAnimationFrame(this.frame);
    this.observer.disconnect();
    this.clear();
    this.renderer.dispose();
  }

  private fit(): void {
    if (!this.item) return;
    const [w, d, h] = this.item.size;
    this.target.set(0, h / 2, 0);
    this.radius = Math.max(0.6, Math.hypot(w, d, h) * 1.6);
  }

  private clear(): void {
    for (const o of [this.model, this.edges, this.highlight, this.grid, ...this.pickers]) {
      if (!o) continue;
      this.scene.remove(o);
      (o as { geometry?: BufferGeometry }).geometry?.dispose();
      const m = (o as { material?: { dispose(): void } }).material;
      m?.dispose();
    }
    this.pickers = [];
    this.model = this.edges = this.highlight = this.grid = null;
  }

  private rebuild(): void {
    this.clear();
    const item = this.item;
    if (!item) return;
    const [w, d, h] = item.size;
    const at = placement({ x: 0, z: 0, rotation: 0 });
    // the whole item, as the plan draws it (a lamp lit)
    const [solids, lines] = [new GeoBuffer(), new LineBuffer()];
    packModel(new Builder(solids, lines, at), item, w, d, h, 0, item.light ? LAMP_LIGHT : null);
    // the neon palette is made for a dark room: a little more light, as the library pictures have
    this.model = new Mesh(solids.geometry(), new MeshBasicMaterial({ vertexColors: true, color: new Color(1.25, 1.25, 1.25) }));
    this.edges = new LineSegments(lines.geometry(), new LineBasicMaterial({ vertexColors: true, color: new Color(1.8, 1.8, 1.8) }));
    this.scene.add(this.model, this.edges);
    // each part alone: for picking, and the selected one outlined
    item.parts.forEach((part, i) => {
      const [g, l] = [new GeoBuffer(), new LineBuffer()];
      packModel(new Builder(g, l, at), { ...item, parts: [{ ...part, edges: true }] }, w, d, h, 0, null);
      const mesh = new Mesh(g.geometry(), new MeshBasicMaterial({ visible: false }));
      mesh.userData.part = i;
      this.pickers.push(mesh);
      this.scene.add(mesh);
      if (i === this.selected) {
        this.highlight = new LineSegments(l.geometry(), new LineBasicMaterial({ color: ACCENT, depthTest: false, transparent: true }));
        this.highlight.renderOrder = 10;
        this.scene.add(this.highlight);
      }
    });
    // a grid on the floor, one line every 10 cm, around the item's footprint
    const span = Math.ceil(Math.max(w, d) * 1.6 * 10) / 10 + 0.4;
    this.grid = new GridHelper(span, Math.round(span * 10), 0x2a3a5c, 0x182238);
    this.scene.add(this.grid);
  }

  private invalidate(): void {
    if (this.frame) return;
    this.frame = requestAnimationFrame(() => {
      this.frame = 0;
      this.render();
    });
  }

  private render(): void {
    const sin = Math.sin(this.phi);
    this.camera.position.set(this.target.x + this.radius * sin * Math.sin(this.theta), this.target.y + this.radius * Math.cos(this.phi), this.target.z + this.radius * sin * Math.cos(this.theta));
    this.camera.lookAt(this.target);
    this.renderer.render(this.scene, this.camera);
  }

  private resize(): void {
    const { clientWidth: w, clientHeight: h } = this.canvas;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.invalidate();
  }

  private listen(): void {
    const pointers = new Map<number, Vector2>();
    let moved = 0;
    let pinch = 0;
    this.canvas.addEventListener("pointerdown", (e) => {
      this.canvas.setPointerCapture(e.pointerId);
      pointers.set(e.pointerId, new Vector2(e.clientX, e.clientY));
      moved = 0;
      if (pointers.size === 2) pinch = spread(pointers);
    });
    this.canvas.addEventListener("pointermove", (e) => {
      const last = pointers.get(e.pointerId);
      if (!last) return;
      const now = new Vector2(e.clientX, e.clientY);
      if (pointers.size === 2) {
        pointers.set(e.pointerId, now);
        const distance = spread(pointers);
        if (pinch > 0 && distance > 0) this.zoom(pinch / distance);
        pinch = distance;
        moved = 99;
        return;
      }
      const dx = now.x - last.x;
      const dy = now.y - last.y;
      moved += Math.abs(dx) + Math.abs(dy);
      pointers.set(e.pointerId, now);
      this.theta -= dx * 0.008;
      this.phi = Math.min(Math.PI / 2 - 0.01, Math.max(0.02, this.phi - dy * 0.008));
      this.invalidate();
    });
    const up = (e: PointerEvent) => {
      const was = pointers.has(e.pointerId);
      pointers.delete(e.pointerId);
      if (pointers.size < 2) pinch = 0;
      // a tap (no drag) picks the part under the finger
      if (was && moved < 6 && e.type === "pointerup") this.pickAt(e.clientX, e.clientY);
    };
    this.canvas.addEventListener("pointerup", up);
    this.canvas.addEventListener("pointercancel", up);
    this.canvas.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        this.zoom(e.deltaY > 0 ? 1.1 : 1 / 1.1);
      },
      { passive: false },
    );
  }

  private pickAt(x: number, y: number): void {
    const r = this.canvas.getBoundingClientRect();
    const ndc = new Vector2(((x - r.left) / r.width) * 2 - 1, -((y - r.top) / r.height) * 2 + 1);
    const ray = new Raycaster();
    ray.setFromCamera(ndc, this.camera);
    for (const m of this.pickers) m.visible = true;
    const hit = ray.intersectObjects(this.pickers, false)[0];
    for (const m of this.pickers) m.visible = false;
    this.onPick(hit ? (hit.object.userData.part as number) : -1);
  }
}
