// The layout of a staircase: its treads and landings in local coordinates (x across, z in depth with the front at +z),
// worked out from its shape, the turn, the number of steps and its size. The 3D model, the plan symbol and the opening in
// the floor above (or, for stairs going down, in the floor it starts on) are all drawn from this one layout.

import type { Vec2 } from "../model.ts";
import { mergeHoles } from "./holes.ts";

export const STAIR_SHAPES = ["straight", "quarter", "l", "half", "u", "spiral"] as const;
export type StairShape = (typeof STAIR_SHAPES)[number];

/** How the stair is built: a solid mass under the steps, side stringers, one spine under the middle, or steps out of the wall. */
export const STAIR_BUILDS = ["solid", "stringer", "mono", "cantilever"] as const;
export type StairBuild = (typeof STAIR_BUILDS)[number];

export const STAIR_RAILS = ["none", "left", "right", "both"] as const;
export type StairRail = (typeof STAIR_RAILS)[number];

export type StairTurn = "left" | "right";

/** How much of the floor a stair opens: where its treads lack headroom, over the whole stair, or nothing (a hatch or a closed stairwell). */
export const STAIR_OPENINGS = ["headroom", "full", "none"] as const;
export type StairOpening = (typeof STAIR_OPENINGS)[number];

export interface StairConfig {
  shape: StairShape;
  /** The way a turned stair turns while walking up it. */
  turn: StairTurn;
  build: StairBuild;
  /** Closed risers (the boards between the treads). Solid stairs are always closed. */
  risers: boolean;
  /** Number of risers; null = from the height (about 18 cm each). */
  steps: number | null;
  /** Width of one flight of a turned stair; null = from the size. */
  run_width: number | null;
  /** Leads down from this floor (into a cellar that need not be drawn) instead of up. */
  down: boolean;
  rail: StairRail;
  /** The opening in the floor the stair reaches (the floor above, or its own floor going down). */
  opening: StairOpening;
}

export const DEFAULT_STAIR: StairConfig = { shape: "straight", turn: "right", build: "solid", risers: true, steps: null, run_width: null, down: false, rail: "none", opening: "headroom" };

/** A good starting size [w, d] for each shape, used when the shape is changed in the editor. */
export const STAIR_SIZES: Record<StairShape, [number, number]> = {
  straight: [1.0, 3.2],
  quarter: [2.2, 2.6],
  l: [2.2, 2.8],
  half: [2.0, 2.6],
  u: [2.2, 2.6],
  spiral: [1.6, 1.6],
};

const MIN_STEPS = 2;
const MAX_STEPS = 40;
/** Height a person needs above a tread: where a tread is lower than this under the floor above, the floor is opened. */
export const HEADROOM = 2.2;

const isOneOf = <T extends string>(list: readonly T[], value: unknown): value is T => typeof value === "string" && (list as readonly string[]).includes(value);

/** The stair settings of an item, with defaults for everything it does not set (older plans have none). */
export function stairConfig(item: { stair?: Partial<StairConfig> | null }): StairConfig {
  const s = item.stair ?? {};
  const steps = typeof s.steps === "number" && Number.isFinite(s.steps) ? Math.round(Math.min(MAX_STEPS, Math.max(MIN_STEPS, s.steps))) : null;
  const run = typeof s.run_width === "number" && Number.isFinite(s.run_width) && s.run_width > 0.2 ? s.run_width : null;
  return {
    shape: isOneOf(STAIR_SHAPES, s.shape) ? s.shape : DEFAULT_STAIR.shape,
    turn: s.turn === "left" ? "left" : "right",
    build: isOneOf(STAIR_BUILDS, s.build) ? s.build : DEFAULT_STAIR.build,
    risers: s.risers !== false,
    steps,
    run_width: run,
    down: s.down === true,
    rail: isOneOf(STAIR_RAILS, s.rail) ? s.rail : DEFAULT_STAIR.rail,
    opening: isOneOf(STAIR_OPENINGS, s.opening) ? s.opening : DEFAULT_STAIR.opening,
  };
}

/** Whether an item is a stair with its own settings (the shaped stair); plain old stairs keep their simple look and rectangular opening. */
export const isShapedStair = (item: { type: string; stair?: unknown }): boolean => item.type === "stairs" && !!item.stair;

export interface Tread {
  /** Outline in local coordinates. */
  poly: Vec2[];
  /** Height of the walking surface relative to the floor the stair stands on (negative for stairs going down). */
  top: number;
  landing: boolean;
  /** Points along the left and right side (walking up), from the front of the tread to its back. */
  left: Vec2[];
  right: Vec2[];
}

export interface StairLayout {
  treads: Tread[];
  rise: number;
  steps: number;
  /** A spiral stair's middle column (radius), else 0. */
  column: number;
  /** The width of one flight. */
  flight: number;
}

const lerp = (a: Vec2, b: Vec2, t: number): Vec2 => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const same = (a: Vec2, b: Vec2) => Math.abs(a[0] - b[0]) < 1e-6 && Math.abs(a[1] - b[1]) < 1e-6;

function dedupe(points: Vec2[]): Vec2[] {
  const out: Vec2[] = [];
  for (const p of points) if (!out.length || !same(out[out.length - 1], p)) out.push(p);
  while (out.length > 1 && same(out[0], out[out.length - 1])) out.pop();
  return out;
}

/** A tread from its two sides: the outline goes up the left side and back down the right side. */
function tread(left: Vec2[], right: Vec2[], landing = false): Omit<Tread, "top"> {
  return { poly: dedupe([...left, ...[...right].reverse()]), landing, left, right };
}

/** `count` treads of a straight flight from the front edge (fl, fr) to the back edge (bl, br). */
function flight(fl: Vec2, fr: Vec2, bl: Vec2, br: Vec2, count: number): Omit<Tread, "top">[] {
  const out: Omit<Tread, "top">[] = [];
  for (let i = 0; i < count; i++) {
    const [t0, t1] = [i / count, (i + 1) / count];
    out.push(tread([lerp(fl, bl, t0), lerp(fl, bl, t1)], [lerp(fr, br, t0), lerp(fr, br, t1)]));
  }
  return out;
}

/** The point at distance `s` along a polyline, and the corners passed between two distances. */
function along(path: Vec2[], s: number): Vec2 {
  let rest = s;
  for (let i = 0; i + 1 < path.length; i++) {
    const length = Math.hypot(path[i + 1][0] - path[i][0], path[i + 1][1] - path[i][1]);
    if (rest <= length || i + 2 === path.length) return lerp(path[i], path[i + 1], length ? Math.min(1, rest / length) : 0);
    rest -= length;
  }
  return path[path.length - 1];
}

function stretch(path: Vec2[], s0: number, s1: number): Vec2[] {
  const out: Vec2[] = [along(path, s0)];
  let walked = 0;
  for (let i = 0; i + 1 < path.length; i++) {
    walked += Math.hypot(path[i + 1][0] - path[i][0], path[i + 1][1] - path[i][1]);
    if (walked > s0 + 1e-6 && walked < s1 - 1e-6) out.push(path[i + 1]);
  }
  out.push(along(path, s1));
  return out;
}

const pathLength = (path: Vec2[]) => path.reduce((sum, p, i) => (i ? sum + Math.hypot(p[0] - path[i - 1][0], p[1] - path[i - 1][1]) : sum), 0);

/**
 * Winders turning around the inner side: `count` treads whose outer (left) side shares the outer path out evenly and whose
 * inner (right) side meets in the pivot. `entry` and `exit` are the inner corners of the flights before and after.
 */
function winders(outer: Vec2[], entry: Vec2, pivot: Vec2, exit: Vec2, count: number): Omit<Tread, "top">[] {
  const total = pathLength(outer);
  const out: Omit<Tread, "top">[] = [];
  for (let i = 0; i < count; i++) {
    const right = dedupe([...(i === 0 ? [entry] : []), pivot, ...(i === count - 1 ? [exit] : [])]);
    out.push(tread(stretch(outer, (total * i) / count, (total * (i + 1)) / count), right.length ? right : [pivot]));
  }
  return out;
}

/** Splits `count` treads between two flights by their length. */
function share(count: number, first: number, second: number): [number, number] {
  if (count <= 0) return [0, 0];
  if (first <= 1e-3) return [0, count];
  if (second <= 1e-3) return [count, 0];
  const a = Math.min(count, Math.max(0, Math.round((count * first) / (first + second))));
  return [a, count - a];
}

/** Layout for a stair turning right; a left-turning stair is this one mirrored. */
function rightLayout(cfg: StairConfig, w: number, d: number, n: number): { treads: Omit<Tread, "top">[]; flight: number; column: number } {
  const [x0, x1, zb, zf] = [-w / 2, w / 2, -d / 2, d / 2];
  switch (cfg.shape) {
    case "quarter":
    case "l": {
      const f = Math.min(cfg.run_width ?? Math.min(1.0, Math.min(w, d) / 2), Math.min(w, d) - 0.05);
      const corner: Vec2 = [x0 + f, zb + f];
      const outer: Vec2[] = [[x0, zb + f], [x0, zb], [x0 + f, zb]];
      const turn = cfg.shape === "l" ? 1 : Math.min(n, n >= 8 ? 3 : 2);
      const [a, b] = share(n - turn, d - f, w - f);
      const first = flight([x0, zf], [x0 + f, zf], [x0, zb + f], corner, a);
      const middle = cfg.shape === "l" ? [tread(outer, [corner], true)] : winders(outer, corner, corner, corner, turn);
      const second = flight([x0 + f, zb], corner, [x1, zb], [x1, zb + f], b);
      return { treads: [...first, ...middle, ...second], flight: f, column: 0 };
    }
    case "half":
    case "u": {
      const f = Math.min(cfg.run_width ?? Math.min(1.1, (w - 0.1) / 2), (w - 0.02) / 2);
      const zt = zb + f;
      const outer: Vec2[] = [[x0, zt], [x0, zb], [x1, zb], [x1, zt]];
      const [entry, exit]: Vec2[] = [[x0 + f, zt], [x1 - f, zt]];
      const turn = cfg.shape === "u" ? 1 : Math.min(n, n >= 12 ? 6 : n >= 8 ? 4 : 2);
      const [a, b] = share(n - turn, d - f, d - f);
      const first = flight([x0, zf], [x0 + f, zf], [x0, zt], entry, a);
      const middle = cfg.shape === "u" ? [tread(outer, [entry, exit], true)] : winders(outer, entry, [0, zt], exit, turn);
      // the second flight comes back towards the front, its outer (left) side along the right edge
      const second = flight([x1, zt], exit, [x1, zf], [x1 - f, zf], b);
      return { treads: [...first, ...middle, ...second], flight: f, column: 0 };
    }
    case "spiral": {
      const r = Math.min(w, d) / 2;
      const column = Math.min(0.08, r * 0.12);
      // about 22 cm going on the walking line, which runs at 60 % of the radius
      const angle = Math.min(0.75, Math.max(0.3, 0.22 / (r * 0.6)));
      const at = (radius: number, a: number): Vec2 => [Math.cos(a) * radius, Math.sin(a) * radius];
      const treads: Omit<Tread, "top">[] = [];
      for (let i = 0; i < n; i++) {
        // the first tread lies left of the column, entered from the front; turning right is clockwise in the plan
        const [a0, a1] = [Math.PI + angle * i, Math.PI + angle * (i + 1)];
        const arc = [0, 0.5, 1].map((t) => at(r, a0 + (a1 - a0) * t));
        treads.push(tread(arc, [at(column, a0), at(column, a1)]));
      }
      return { treads, flight: r - column, column };
    }
    default:
      return { treads: flight([x0, zf], [x1, zf], [x0, zb], [x1, zb], n), flight: w, column: 0 };
  }
}

/** The number of risers of a stair `h` high. */
export const stairSteps = (cfg: StairConfig, h: number): number => cfg.steps ?? Math.min(MAX_STEPS, Math.max(MIN_STEPS, Math.round(Math.abs(h) / 0.18)));

/** The treads of a stair of size w × d that climbs (or, going down, falls) by h. */
export function stairLayout(cfg: StairConfig, w: number, d: number, h: number): StairLayout {
  const n = stairSteps(cfg, h);
  const rise = Math.abs(h) / n;
  const base = rightLayout(cfg, Math.max(0.3, w), Math.max(0.3, d), n);
  const mirror = (p: Vec2): Vec2 => [-p[0], p[1]];
  const treads = base.treads.map((t, i): Tread => {
    // up: tread i is (i + 1) risers above the floor, the last one level with the floor above;
    // down: the first tread is one riser below the floor, the last one level with the floor below
    const top = cfg.down ? -rise * (i + 1) : rise * (i + 1);
    if (cfg.turn === "right") return { ...t, top };
    return { poly: t.poly.map(mirror).reverse(), top, landing: t.landing, left: t.right.map(mirror), right: t.left.map(mirror) };
  });
  return { treads, rise, steps: n, column: base.column, flight: base.flight };
}

/** The centre of a tread (average of its corners): the walking line runs through these. */
export function treadCentre(t: Tread): Vec2 {
  const sum = t.poly.reduce<Vec2>((s, p) => [s[0] + p[0], s[1] + p[1]], [0, 0]);
  return [sum[0] / t.poly.length, sum[1] / t.poly.length];
}

/**
 * The opening a stair needs in the floor it reaches (local coordinates): the outline of every tread that lies less than the
 * headroom below that floor, merged into one shape per piece. For stairs going up that floor is the one above (at h), for stairs
 * going down the stair's own (at 0). The outline follows the treads, so an L or a spiral stair leaves the floor beside it whole.
 */
export function stairOpening(layout: StairLayout, h: number, down: boolean, opening: StairOpening = "headroom"): Vec2[][] {
  if (opening === "none") return [];
  const level = down ? 0 : Math.abs(h);
  const near = opening === "full" ? layout.treads : layout.treads.filter((t, i) => t.top > level - HEADROOM || (!down && i === layout.treads.length - 1) || (down && i === 0));
  return mergeHoles(near.map((t) => t.poly).filter((poly) => poly.length >= 3));
}

/** The floor opening of a shaped stair in plan coordinates (the same transform the 3D model uses, mirror included). */
export function stairOpeningInPlan(item: { x: number; z: number; rotation: number; w: number; d: number; h: number; mirror?: boolean; stair?: Partial<StairConfig> | null }): Vec2[][] {
  const cfg = stairConfig(item);
  const local = stairOpening(stairLayout(cfg, item.w, item.d, item.h), item.h, cfg.down, cfg.opening);
  const a = (item.rotation * Math.PI) / 180;
  const [c, s] = [Math.cos(a), Math.sin(a)];
  const mx = item.mirror ? -1 : 1;
  return local.map((ring) => ring.map(([x, z]): Vec2 => [item.x + mx * x * c - z * s, item.z + mx * x * s + z * c]));
}
