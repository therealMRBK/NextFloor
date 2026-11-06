// Moving the selection with the arrow keys: one step in a direction. What can move depends on what is selected.

import { pointInPolygon, type Floor, type Vec2 } from "../../../model.ts";
import { openingHost } from "../../../geometry/walls.ts";
import { frontExtent, frontOf, outlineLength, withFront } from "../../../geometry/glass-front.ts";

export type NudgeTarget =
  | { kind: "device"; id: string }
  | { kind: "furniture"; id: string }
  | { kind: "opening"; id: string }
  | { kind: "wall"; id: string }
  | { kind: "outdoor"; id: string }
  | { kind: "room"; id: string; corner: number | null };

const thousandths = (v: number) => Math.round(v * 1000) / 1000;

/** Nothing of that kind is there to move. */
export const NOTHING_TO_MOVE = "unmovable";
/** The key was understood but changes nothing, such as an arrow across a wall for an opening that slides along it. */
export const NO_CHANGE = "no change";

export type Nudge = typeof NOTHING_TO_MOVE | typeof NO_CHANGE | { apply(floor: Floor): void };

/**
 * What moving the target by (dx, dz) metres would do. A selected corner moves alone. A room moves with the devices inside it. An
 * opening only slides along its wall by the arrow's share in the wall's direction, and stays within its edge.
 */
export function nudge(floor: Floor, target: NudgeTarget, dx: number, dz: number): Nudge {
  const step = (p: Vec2): Vec2 => [thousandths(p[0] + dx), thousandths(p[1] + dz)];
  switch (target.kind) {
    case "device": {
      if (!floor.placements.some((p) => p.entity_id === target.id)) return NOTHING_TO_MOVE;
      return {
        apply(f) {
          const placed = f.placements.find((p) => p.entity_id === target.id);
          if (placed) [placed.x, placed.z] = step([placed.x, placed.z]);
        },
      };
    }
    case "furniture":
      return {
        apply(f) {
          const item = f.furniture.find((m) => m.id === target.id);
          if (item) [item.x, item.z] = step([item.x, item.z]);
        },
      };
    case "wall":
      return {
        apply(f) {
          const wall = (f.walls ?? []).find((w) => w.id === target.id);
          if (wall) [wall.a, wall.b] = [step(wall.a), step(wall.b)];
        },
      };
    case "outdoor":
      return {
        apply(f) {
          const area = f.outdoor.find((a) => a.id === target.id);
          if (area) area.points = area.points.map(step);
        },
      };
    case "opening": {
      const opening = floor.openings.find((o) => o.id === target.id);
      const host = opening ? openingHost(opening, floor.rooms, floor.walls ?? []) : null;
      if (!opening || !host) return NOTHING_TO_MOVE;
      const a = host.room.points[host.edge];
      const b = host.room.points[(host.edge + 1) % host.room.points.length];
      const length = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
      const along = (dx * (b[0] - a[0]) + dz * (b[1] - a[1])) / length;
      if (Math.abs(along) < 1e-9) return NO_CHANGE;
      // a pane over several edges slides as a whole, and keeps the length of all of its pieces
      const group = frontOf(floor.openings, opening);
      const extent = !opening.wall && group.length > 1 ? frontExtent(host.room, group) : null;
      if (extent) {
        const from = Math.max(0, Math.min(outlineLength(host.room) - extent.width, extent.from + along));
        if (Math.abs(from - extent.from) < 1e-9) return NO_CHANGE;
        return {
          apply(f) {
            const o = f.openings.find((x) => x.id === target.id);
            const next = o ? withFront(f.openings, host.room, o, from, extent.width) : null;
            if (next) f.openings = next;
          },
        };
      }
      const half = Math.min(opening.width, length) / 2;
      const offset = thousandths(Math.min(length - half, Math.max(half, opening.offset + along)));
      return {
        apply(f) {
          const o = f.openings.find((x) => x.id === target.id);
          if (o) o.offset = offset;
        },
      };
    }
    case "room": {
      const room = floor.rooms.find((r) => r.id === target.id);
      if (!room) return NOTHING_TO_MOVE;
      const inside = new Set(floor.placements.filter((p) => pointInPolygon([p.x, p.z], room.points)).map((p) => p.entity_id));
      return {
        apply(f) {
          const r = f.rooms.find((x) => x.id === target.id);
          if (!r) return;
          if (target.corner !== null && target.corner < r.points.length) {
            r.points[target.corner] = step(r.points[target.corner]);
            return;
          }
          r.points = r.points.map(step);
          for (const placed of f.placements) if (inside.has(placed.entity_id)) [placed.x, placed.z] = step([placed.x, placed.z]);
        },
      };
    }
  }
}
