// Snapping furniture against the walls of its room: the back (or a side, when it stands sideways)
// turns to the nearest wall and the item sits flush with the wall face. Shared by the 2D editor and
// furnishing in 3D.

import type { Floor, Furniture, Vec2 } from "../model.ts";
import { pointInPolygon, signedArea } from "../model.ts";

/** Furniture closer than this to a wall snaps against it (metres). */
export const WALL_SNAP = 0.25;

const round = (v: number) => Math.round(v * 1000) / 1000;

/**
 * A point dragged from (x0, z0) to (x, z) stays in the room it started in: outside the room's polygon the
 * move slides along the wall (only x or only z), or stops. Items that start outside every room move freely.
 */
export function keepInRoom(floor: Floor, x0: number, z0: number, x: number, z: number): [number, number] {
  const room = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([x0, z0], r.points));
  if (!room || pointInPolygon([x, z], room.points)) return [x, z];
  if (pointInPolygon([x, z0], room.points)) return [x, z0];
  if (pointInPolygon([x0, z], room.points)) return [x0, z];
  return [x0, z0];
}

export function snapToWall(floor: Floor, f: Furniture, wallInterior: number, reach = WALL_SNAP): { x: number; z: number; rotation: number } | null {
  const room = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
  if (!room) return null;
  const pts = room.points;
  const sgn = signedArea(pts) >= 0 ? 1 : -1;
  const half = wallInterior / 2;
  let best: { x: number; z: number; rotation: number; gap: number } | null = null;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i];
    const b = pts[(i + 1) % pts.length];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (len < 0.3) continue;
    const u: Vec2 = [(b[0] - a[0]) / len, (b[1] - a[1]) / len];
    // normal into the room
    const n: Vec2 = [-u[1] * sgn, u[0] * sgn];
    const along = (f.x - a[0]) * u[0] + (f.z - a[1]) * u[1];
    if (along < 0 || along > len) continue;
    // interior walls stand on the room edge, so their face is half the wall thickness inside
    const shared = floor.rooms.some(
      (r) =>
        r.id !== room.id &&
        r.points.some((p, k) => {
          const q = r.points[(k + 1) % r.points.length];
          const d0 = Math.abs((p[0] - a[0]) * n[0] + (p[1] - a[1]) * n[1]);
          const d1 = Math.abs((q[0] - a[0]) * n[0] + (q[1] - a[1]) * n[1]);
          return d0 < 0.02 && d1 < 0.02;
        }),
    );
    const face = shared ? half : 0;
    const dist = (f.x - a[0]) * n[0] + (f.z - a[1]) * n[1] - face;
    // rotation that turns the back to the wall (front along n)
    const back = (Math.atan2(-n[0], n[1]) * 180) / Math.PI;
    const diff = (r: number) => Math.abs(((f.rotation - r + 540) % 360) - 180);
    const options = [
      { rotation: back, extent: f.d / 2 },
      { rotation: back + 90, extent: f.w / 2 },
      { rotation: back - 90, extent: f.w / 2 },
    ];
    const pick = options.reduce((p, q) => (diff(q.rotation) < diff(p.rotation) ? q : p));
    if (diff(pick.rotation) > 50) continue;
    const gap = dist - pick.extent;
    if (Math.abs(gap) > reach || (best && Math.abs(gap) >= Math.abs(best.gap))) continue;
    best = {
      x: round(f.x - n[0] * gap),
      z: round(f.z - n[1] * gap),
      rotation: ((Math.round(pick.rotation) % 360) + 360) % 360,
      gap,
    };
  }
  return best ? { x: best.x, z: best.z, rotation: best.rotation } : null;
}
