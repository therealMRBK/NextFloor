// Quality by itself: while the picture moves, the frame times are watched; a tablet that keeps drawing too slowly gets fewer pixels,
// step by step, and the simple look when even one pixel per point is too much. With plenty of room left the pixels come back slowly.

/** What the governor asks for: another pixel ratio, or the low quality level. */
export type QualityStep = { ratio: number } | { low: true } | null;

const WINDOW = 45;
const SLOW_FPS = 26;
const VERY_SLOW_FPS = 16;
const FAST_FPS = 55;
const STEP = 0.25;
/** Frames after a change before the next measurement counts (the new size settles)... */
const SETTLE = 30;
/** ...or this long (ms), whichever comes first: a tablet at 3 fps must not wait ten seconds. */
const SETTLE_MS = 1000;
/** A window also ends after this long (ms) with at least MIN_WINDOW frames, so very slow tablets are measured quickly. */
const WINDOW_MS = 2000;
const MIN_WINDOW = 6;
/** Longer gaps are a pause (another tab, a stalled app), not a slow frame. */
const PAUSE_MS = 1500;
/** No step up within this long after a step down (ms): no flicker between two levels. */
const UP_DELAY = 30_000;

export class QualityGovernor {
  private times: number[] = [];
  private settle = SETTLE;
  private settleMs = 0;
  private ratio: number;
  private lastDown = -Infinity;
  private slowAtFloor = 0;
  /** The pace of the slower quarter of the last measured window (fps), until it is taken. */
  private measured: number | null = null;
  private readonly max: number;
  private readonly min: number;

  constructor(max: number, min = 1) {
    this.max = max;
    this.min = min;
    this.ratio = max;
  }

  get pixelRatio(): number {
    return this.ratio;
  }

  /** The pace of the slower quarter of frames of the window just measured (fps), once; null when no window ended since. */
  takeSlowQuarterFps(): number | null {
    const fps = this.measured;
    this.measured = null;
    return fps;
  }

  /** Takes back the last step (`pixels`: the pixel ratio went down) – something else was changed instead – and measures afresh. */
  undo(pixels: boolean): void {
    if (pixels) this.ratio = Math.min(this.max, Math.round((this.ratio + STEP) * 100) / 100);
    this.slowAtFloor = 0;
    this.settle = SETTLE;
    this.settleMs = 0;
    this.times = [];
    this.lastDown = -Infinity;
  }

  /** One frame while something moves (`dt` in ms, `now` the frame's time). Returns a step when one is due. */
  frame(dt: number, now: number): QualityStep {
    if (dt <= 0 || dt >= PAUSE_MS) return null;
    if (this.settle > 0) {
      this.settle--;
      this.settleMs += dt;
      if (this.settleMs >= SETTLE_MS) this.settle = 0;
      if (this.settle === 0) this.settleMs = 0;
      return null;
    }
    this.times.push(dt);
    const spent = this.times.reduce((a, b) => a + b, 0);
    if (this.times.length < WINDOW && !(spent >= WINDOW_MS && this.times.length >= MIN_WINDOW)) return null;
    const sorted = [...this.times].sort((a, b) => a - b);
    this.times = [];
    this.measured = 1000 / sorted[Math.floor(sorted.length * 0.75)];
    // the median frame: one hiccup (a garbage collection) does not count
    const fps = 1000 / sorted[Math.floor(sorted.length / 2)];
    if (fps < SLOW_FPS && this.ratio > this.min + 1e-6) {
      this.ratio = Math.max(this.min, Math.round((this.ratio - STEP) * 100) / 100);
      this.lastDown = now;
      this.settle = SETTLE;
      return { ratio: this.ratio };
    }
    if (fps < VERY_SLOW_FPS && this.ratio <= this.min + 1e-6) {
      // two slow windows in a row at the lowest ratio: the simple look
      if (++this.slowAtFloor >= 2) return { low: true };
      return null;
    }
    this.slowAtFloor = 0;
    if (fps > FAST_FPS && this.ratio < this.max - 1e-6 && now - this.lastDown > UP_DELAY) {
      this.ratio = Math.min(this.max, Math.round((this.ratio + STEP) * 100) / 100);
      this.settle = SETTLE;
      return { ratio: this.ratio };
    }
    return null;
  }
}
