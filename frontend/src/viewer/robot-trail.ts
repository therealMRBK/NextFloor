/**
 * The pad a robot has driven on, drawn flat on the floor: a ribbon along its trail, with a disc at every
 * bend so the turns do not fray. The robot's own app draws the same thing, and it is what makes "where has
 * it been" readable in the plan rather than a hairline.
 */
import { BufferGeometry, Float32BufferAttribute } from "three";
import type { Vec2 } from "../model.ts";

/** How long the pad stays after the robot stopped cleaning: ten minutes, then it fades. */
export const TRAIL_HOLD_MS = 10 * 60 * 1000;
/** How long the fade itself takes. */
export const TRAIL_FADE_MS = 3000;

/**
 * How strongly the pad still shows, 1 while it drives and for ten minutes after it stopped, then fading to
 * 0. The timeline is where the day's cleans stay, so the floor does not keep last night's pad forever.
 */
export function trailOpacity(settledAt: number | null | undefined, now: number): number {
  if (settledAt == null) return 1;
  const settled = now - settledAt;
  if (!(settled > TRAIL_HOLD_MS)) return 1;
  return Math.max(0, 1 - (settled - TRAIL_HOLD_MS) / TRAIL_FADE_MS);
}

/**
 * A flat ribbon along `segments`, `width` metres wide, lying at height `y`. One quad per segment and a
 * disc at every interior joint; a trail shorter than a millimetre leaves an empty geometry.
 */
export function trailGeometry(segments: readonly (readonly Vec2[])[], width: number, y: number): BufferGeometry {
  const half = width / 2;
  const pos: number[] = [];
  const tri = (a: Vec2, b: Vec2, c: Vec2) => pos.push(a[0], y, a[1], b[0], y, b[1], c[0], y, c[1]);
  for (const line of segments) {
    for (let i = 0; i + 1 < line.length; i++) {
      const [p, q] = [line[i], line[i + 1]];
      const [dx, dz] = [q[0] - p[0], q[1] - p[1]];
      const len = Math.hypot(dx, dz);
      if (len < 1e-4) continue;
      const [nx, nz] = [(-dz / len) * half, (dx / len) * half];
      const [a, b]: [Vec2, Vec2] = [
        [p[0] + nx, p[1] + nz],
        [p[0] - nx, p[1] - nz],
      ];
      const [c, d]: [Vec2, Vec2] = [
        [q[0] + nx, q[1] + nz],
        [q[0] - nx, q[1] - nz],
      ];
      tri(a, b, c);
      tri(b, d, c);
    }
    // a joint: a disc as wide as the ribbon, so two segments meeting at an angle leave no notch — a joint that
    // barely turns needs none, and a dense trail is nearly all such joints
    const steps = 6;
    for (let i = 1; i + 1 < line.length; i++) {
      const [b0, b1, b2] = [line[i - 1], line[i], line[i + 1]];
      const [ax, az] = [b1[0] - b0[0], b1[1] - b0[1]];
      const [bx, bz] = [b2[0] - b1[0], b2[1] - b1[1]];
      const [la, lb] = [Math.hypot(ax, az), Math.hypot(bx, bz)];
      // the sine of the angle between the two steps: below this the quads already meet
      if (la < 1e-9 || lb < 1e-9 || Math.abs(ax * bz - az * bx) / (la * lb) < 0.2) continue;
      const [cx, cz] = line[i];
      for (let k = 0; k < steps; k++) {
        const [a0, a1] = [(k / steps) * Math.PI * 2, ((k + 1) / steps) * Math.PI * 2];
        tri([cx, cz], [cx + Math.cos(a0) * half, cz + Math.sin(a0) * half], [cx + Math.cos(a1) * half, cz + Math.sin(a1) * half]);
      }
    }
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(pos, 3));
  return geometry;
}
