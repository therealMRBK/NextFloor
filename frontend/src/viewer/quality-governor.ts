// Quality by itself: while the picture moves, the frame times are watched; a tablet that keeps drawing too slowly gets fewer pixels,
// step by step, and the simple look when even one pixel per point is too much. With plenty of room left the pixels come back slowly.

/** What the governor asks for: another pixel ratio, or the low quality level. */
export type QualityStep = { ratio: number } | { low: true } | null;

const WINDOW = 45;
const SLOW_FPS = 26;
const VERY_SLOW_FPS = 16;
const FAST_FPS = 55;
const STEP = 0.25;
/** Frames after a change before the next measurement counts (the new size settles). */
const SETTLE = 30;
/** No step up within this long after a step down (ms): no flicker between two levels. */
const UP_DELAY = 30_000;

export class QualityGovernor {
  private times: number[] = [];
  private settle = SETTLE;
  private ratio: number;
  private lastDown = -Infinity;
  private slowAtFloor = 0;
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

  /** One frame while something moves (`dt` in ms, `now` the frame's time). Returns a step when one is due. */
  frame(dt: number, now: number): QualityStep {
    if (this.settle > 0) {
      this.settle--;
      return null;
    }
    if (dt <= 0 || dt >= 100) return null;
    this.times.push(dt);
    if (this.times.length < WINDOW) return null;
    const sorted = [...this.times].sort((a, b) => a - b);
    this.times = [];
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
