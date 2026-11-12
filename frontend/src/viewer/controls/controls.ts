// The orbit camera's pointer handling: turning, panning, pinch zoom, taps, holds, and handing pointers over to objects.
// The owner calls update() each frame; it returns true while something still moves.

import type { PerspectiveCamera } from "three";
import { Vector3 } from "three";
import { blendViews, cameraPosition, clamp, coast, copyView, flightGoal, nudgeView, orbitView, panView, type Nudge, type OrbitView } from "./view.ts";

export interface ControlEvents {
  change(): void;
  tap(x: number, y: number): void;
  doubleTap(x: number, y: number): void;
  /** A press without moving for HOLD_MS; the release that follows is no tap. */
  hold(x: number, y: number): void;
  /** A pointer went down: return true to take it (drag an object instead of turning the view). */
  grab?(x: number, y: number): boolean;
  drag?(x: number, y: number): void;
  drop?(): void;
  /**
   * A one-finger drag starts at (x, y) and moves by (dx, dy): return true to take it as a swipe on an object (dimming a
   * lamp, moving a blind) rather than turning the view. Moves then report the vertical distance from the start (pixels,
   * down is positive).
   */
  swipeStart?(x: number, y: number, dx: number, dy: number): boolean;
  swipeMove?(dy: number): void;
  swipeEnd?(): void;
}

/** Walking keys by their place on the keyboard (W A S D on QWERTY is Z Q S D on AZERTY), and the arrows. */
const WALK_CODES: Record<string, string> = { KeyW: "w", KeyA: "a", KeyS: "s", KeyD: "d", KeyQ: "q", KeyE: "e" };
const WALK_KEYS = new Set(["w", "a", "s", "d", "q", "e", "arrowup", "arrowdown", "arrowleft", "arrowright"]);

/** The walking key a key press stands for (null: none). The place of the key wins over its letter. */
export function walkKey(e: { code?: string; key: string }): string | null {
  // a letter key is known by its place; other keys (the arrows), and browsers without a code, by their name
  const name = e.code?.startsWith("Key") ? (WALK_CODES[e.code] ?? null) : e.key.toLowerCase();
  return name && WALK_KEYS.has(name) ? name : null;
}

const HOLD_MS = 500;
const TAP_MAX_MS = 400;
const DOUBLE_TAP_MS = 320;
const DRAG_THRESHOLD = 6;

interface PointerInfo {
  x: number;
  y: number;
  button: number;
}

/** Walking speed (m/s) and turning speed (rad/s). */
const WALK_SPEED = 1.5;
const TURN_SPEED = 1.8;

export interface Walk {
  eye: Vector3;
  /** Heading like the orbit's theta: the eye looks along (-sin yaw, 0, -cos yaw). */
  yaw: number;
  /** Up (+) or down (-) from the horizon, radians. */
  pitch: number;
  /** The touch stick: x turns or steps sideways, y walks (-1 … 1 each). */
  stick: [number, number];
  keys: Set<string>;
  bounds: { x0: number; x1: number; z0: number; z1: number };
  last: number;
}

/** One step of walking: moves the eye by keys and stick over dt milliseconds, kept in its bounds. Returns whether it moved. */
export function stepWalk(w: Walk, dt: number): boolean {
  const k = w.keys;
  const ahead = (k.has("w") || k.has("arrowup") ? 1 : 0) - (k.has("s") || k.has("arrowdown") ? 1 : 0) - w.stick[1];
  const side = (k.has("d") ? 1 : 0) - (k.has("a") ? 1 : 0);
  const turn = (k.has("arrowleft") || k.has("q") ? 1 : 0) - (k.has("arrowright") || k.has("e") ? 1 : 0) - w.stick[0];
  if (!ahead && !side && !turn) return false;
  const s = dt / 1000;
  w.yaw += turn * TURN_SPEED * s;
  const [fx, fz] = [-Math.sin(w.yaw), -Math.cos(w.yaw)];
  const [rx, rz] = [Math.cos(w.yaw), -Math.sin(w.yaw)];
  w.eye.x = clamp(w.eye.x + (fx * ahead + rx * side) * WALK_SPEED * s, w.bounds.x0, w.bounds.x1);
  w.eye.z = clamp(w.eye.z + (fz * ahead + rz * side) * WALK_SPEED * s, w.bounds.z0, w.bounds.z1);
  return true;
}

export class OrbitControls {
  view: OrbitView = { target: new Vector3(), radius: 16, theta: -0.6, phi: 0.85 };
  minRadius = 2;
  maxRadius = 80;
  /** A wall tablet's 3D lock: the camera does not turn, pan or zoom by hand; taps, holds and swipes on devices still work. */
  locked = false;
  /** Walking at eye level: where the eye is, which way it looks, the stick and keys that move it, and the area it stays in. Null while orbiting. */
  walk: Walk | null = null;

  private readonly pointers = new Map<number, PointerInfo>();
  private velocity = { theta: 0, phi: 0 };
  private flight: { from: OrbitView; to: OrbitView; start: number; duration: number } | null = null;
  private press: { x: number; y: number; time: number; moved: boolean } | null = null;
  private lastTap = 0;
  private holdTimer: ReturnType<typeof setTimeout> | undefined;
  private held = false;
  /** An object is being dragged: moves go to events.drag and not to the camera. */
  private grabbing = false;
  /** A swipe on an object is going on: vertical moves go to events.swipeMove. */
  private swiping: { startY: number } | null = null;
  private pinch: { dist: number; mid: [number, number] } | null = null;
  private readonly listeners: [string, EventListener][] = [];
  private readonly el: HTMLElement;
  private readonly camera: PerspectiveCamera;
  private readonly events: ControlEvents;

  constructor(el: HTMLElement, camera: PerspectiveCamera, events: ControlEvents) {
    this.el = el;
    this.camera = camera;
    this.events = events;
    const listen = <K extends keyof HTMLElementEventMap>(type: K, handler: (e: HTMLElementEventMap[K]) => void, options?: AddEventListenerOptions) => {
      el.addEventListener(type, handler as EventListener, options);
      this.listeners.push([type, handler as EventListener]);
    };
    listen("pointerdown", (e) => this.onDown(e));
    listen("pointermove", (e) => this.onMove(e));
    listen("pointerup", (e) => this.onUp(e));
    listen("pointercancel", (e) => this.onUp(e));
    listen("wheel", (e) => this.onWheel(e), { passive: false });
    listen("contextmenu", (e) => e.preventDefault());
    // keys walk while walking (not while typing into a field)
    const key = (down: boolean) => (e: KeyboardEvent) => {
      if (!this.walk || (e.target as HTMLElement | null)?.closest?.("input, textarea, select")) return;
      const name = walkKey(e);
      if (!name) return;
      e.preventDefault();
      if (down) this.walk.keys.add(name);
      else this.walk.keys.delete(name);
      this.events.change();
    };
    const keydown = key(true);
    const keyup = key(false);
    window.addEventListener("keydown", keydown);
    window.addEventListener("keyup", keyup);
    this.listeners.push(["__window_keydown", keydown as EventListener], ["__window_keyup", keyup as EventListener]);
  }

  dispose(): void {
    clearTimeout(this.holdTimer);
    for (const [type, handler] of this.listeners) {
      if (type.startsWith("__window_")) window.removeEventListener(type.slice("__window_".length), handler);
      else this.el.removeEventListener(type, handler);
    }
  }

  /** A finger or the mouse holds the view, or a flight runs (an automatic orbit waits meanwhile). */
  get active(): boolean {
    return this.pointers.size > 0 || this.flight !== null;
  }

  get busy(): boolean {
    return this.active;
  }

  /** Applies the view to the camera. Returns true while inertia or a flight is running. */
  update(now: number): boolean {
    if (this.walk) {
      const w = this.walk;
      const moved = stepWalk(w, w.last ? Math.min(100, now - w.last) : 16);
      w.last = moved ? now : 0;
      const dir = new Vector3(-Math.sin(w.yaw) * Math.cos(w.pitch), Math.sin(w.pitch), -Math.cos(w.yaw) * Math.cos(w.pitch));
      // the orbit view follows, so labels and anything that asks for the target still work
      this.view.target.copy(w.eye).add(dir);
      this.camera.position.copy(w.eye);
      this.camera.lookAt(this.view.target);
      return moved;
    }
    let moving = false;
    if (this.flight) {
      const { from, to, start, duration } = this.flight;
      const fraction = Math.min(1, (now - start) / duration);
      this.view = blendViews(from, to, fraction);
      if (fraction >= 1) this.flight = null;
      moving = true;
    } else if (this.pointers.size === 0) {
      moving = coast(this.view, this.velocity);
    }
    this.camera.position.copy(cameraPosition(this.view));
    this.camera.lookAt(this.view.target);
    return moving;
  }

  flyTo(to: Partial<OrbitView>, duration = 700): void {
    const goal = flightGoal(this.view, to);
    const from = copyView(this.view);
    this.velocity = { theta: 0, phi: 0 };
    if (duration <= 0 || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.view = goal;
      this.flight = null;
    } else {
      this.flight = { from, to: goal, start: performance.now(), duration };
    }
    this.events.change();
  }

  /**
   * One step of an on-screen navigation button: a short flight from where the view is heading (so quick presses add up). Does nothing
   * while the camera is locked or while walking, where the stick and keys steer.
   */
  nudge(step: Nudge, duration = 220): void {
    if (this.locked || this.walk) return;
    const base = this.flight ? this.flight.to : this.view;
    this.flyTo(nudgeView(base, step, this.minRadius, this.maxRadius), duration);
  }

  private local(e: { clientX: number; clientY: number }): [number, number] {
    const rect = this.el.getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
  }

  private stopMotion(): void {
    this.flight = null;
    this.velocity = { theta: 0, phi: 0 };
  }

  private onDown(e: PointerEvent): void {
    this.el.setPointerCapture(e.pointerId);
    const first = this.pointers.size === 0;
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, button: e.button });
    this.stopMotion();
    if (first && e.button === 0 && this.events.grab?.(...this.local(e))) {
      this.grabbing = true;
      return;
    }
    clearTimeout(this.holdTimer);
    this.held = false;
    if (this.pointers.size === 1) {
      this.press = { x: e.clientX, y: e.clientY, time: performance.now(), moved: false };
      const [x, y] = this.local(e);
      this.holdTimer = setTimeout(() => {
        if (!this.press || this.press.moved || this.pointers.size !== 1) return;
        this.held = true;
        this.events.hold(x, y);
      }, HOLD_MS);
    } else {
      this.press = null;
      this.pinch = this.pinchState();
    }
  }

  private onMove(e: PointerEvent): void {
    const pointer = this.pointers.get(e.pointerId);
    if (!pointer) return;
    if (this.grabbing) return void this.events.drag?.(...this.local(e));
    if (this.swiping) return void this.events.swipeMove?.(e.clientY - this.swiping.startY);

    const [dx, dy] = [e.clientX - pointer.x, e.clientY - pointer.y];
    if (this.press && !this.press.moved && Math.hypot(e.clientX - this.press.x, e.clientY - this.press.y) > DRAG_THRESHOLD) {
      this.press.moved = true;
      clearTimeout(this.holdTimer);
      const [sx, sy] = this.local({ clientX: this.press.x, clientY: this.press.y });
      const swipe = this.pointers.size === 1 && pointer.button === 0 && !e.shiftKey && this.events.swipeStart?.(sx, sy, e.clientX - this.press.x, e.clientY - this.press.y);
      if (swipe) {
        this.swiping = { startY: this.press.y };
        this.velocity = { theta: 0, phi: 0 };
        return void this.events.swipeMove?.(e.clientY - this.press.y);
      }
    }

    if (this.locked) {
      [pointer.x, pointer.y] = [e.clientX, e.clientY];
      return;
    }
    if (this.walk) {
      // walking: a drag looks around
      if (!(this.press && !this.press.moved) && this.pointers.size === 1) {
        const h = this.el.clientHeight || 1;
        this.walk.yaw += (dx / h) * 2.4;
        this.walk.pitch = clamp(this.walk.pitch + (dy / h) * 1.8, -1.1, 1.1);
        this.events.change();
      }
      [pointer.x, pointer.y] = [e.clientX, e.clientY];
      return;
    }
    if (this.pointers.size === 1) {
      if (!(this.press && !this.press.moved)) {
        if (pointer.button === 1 || pointer.button === 2 || e.shiftKey) panView(this.view, dx, dy, this.el.clientHeight, this.camera.fov);
        else this.velocity = orbitView(this.view, dx, dy, this.el.clientHeight);
      }
      [pointer.x, pointer.y] = [e.clientX, e.clientY];
    } else {
      [pointer.x, pointer.y] = [e.clientX, e.clientY];
      const now = this.pinchState();
      if (this.pinch && now) {
        this.zoom(this.pinch.dist / Math.max(1, now.dist));
        panView(this.view, now.mid[0] - this.pinch.mid[0], now.mid[1] - this.pinch.mid[1], this.el.clientHeight, this.camera.fov);
      }
      this.pinch = now;
    }
    if (!(this.pointers.size === 1 && this.press && !this.press.moved)) this.events.change();
  }

  private onUp(e: PointerEvent): void {
    if (!this.pointers.has(e.pointerId)) return;
    this.pointers.delete(e.pointerId);
    if (this.grabbing) {
      this.grabbing = false;
      return void this.events.drop?.();
    }
    if (this.swiping) {
      this.swiping = null;
      this.press = null;
      return void this.events.swipeEnd?.();
    }
    if (this.pointers.size < 2) this.pinch = null;
    clearTimeout(this.holdTimer);
    if (this.held) {
      this.held = false;
      this.press = null;
    } else if (this.press && !this.press.moved && e.type === "pointerup" && performance.now() - this.press.time < TAP_MAX_MS) {
      const [x, y] = this.local(e);
      const now = performance.now();
      const isDouble = now - this.lastTap < DOUBLE_TAP_MS;
      this.lastTap = isDouble ? 0 : now;
      if (isDouble) this.events.doubleTap(x, y);
      else this.events.tap(x, y);
    }
    if (this.pointers.size === 0) this.press = null;
    this.events.change();
  }

  private onWheel(e: WheelEvent): void {
    e.preventDefault();
    if (this.locked) return;
    if (this.walk) {
      // the wheel takes a step forward or back
      const step = clamp(-e.deltaY * (e.deltaMode === 1 ? 0.05 : 0.002), -0.6, 0.6);
      const w = this.walk;
      w.eye.x = clamp(w.eye.x - Math.sin(w.yaw) * step, w.bounds.x0, w.bounds.x1);
      w.eye.z = clamp(w.eye.z - Math.cos(w.yaw) * step, w.bounds.z0, w.bounds.z1);
      this.events.change();
      return;
    }
    this.flight = null;
    this.zoom(Math.exp(e.deltaY * (e.deltaMode === 1 ? 0.05 : 0.0015)));
    this.events.change();
  }

  private zoom(factor: number): void {
    this.view.radius = clamp(this.view.radius * factor, this.minRadius, this.maxRadius);
  }

  private pinchState(): { dist: number; mid: [number, number] } | null {
    const [a, b] = [...this.pointers.values()];
    return b ? { dist: Math.hypot(a.x - b.x, a.y - b.y), mid: [(a.x + b.x) / 2, (a.y + b.y) / 2] } : null;
  }
}
