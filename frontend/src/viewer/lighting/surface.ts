// The light surface: floors and the room side of wall faces are covered by a fine grid of quads. Every vertex knows its
// room and the direction it faces. The surface is built once per floor plan; the light colours are recomputed when a lamp
// changes (see light.ts).

import type { Wall } from "../../geometry/walls.ts";
import { outdoorStanding, pointInPolygon, type Floor, type Vec2 } from "../../model.ts";
import type { OpeningInfo } from "../build.ts";
import { LOWER_OFFSET } from "../geo.ts";
import { outdoorHoles, outdoorSurface } from "../outdoor.ts";

export interface LightSurface {
  /** Vertex positions (x, y, z), six vertices per quad. */
  pos: Float32Array;
  /** The direction each vertex faces (x, y, z). */
  normal: Float32Array;
  /** The room index of each vertex. */
  room: Int16Array;
  /** The fold value of each vertex (see build.ts), so light on walls follows the cut and glass walls. */
  fold: Float32Array;
  /** Doors between two rooms: light leaks through them. */
  doors: { id: string; a: number; b: number; x: number; y: number; z: number }[];
}

/** Floor quads lie this high above the floor, wall quads this far in front of the wall face. */
const FLOOR_LIFT = 0.012;
const FACE_GAP = 0.012;

/** Collects quads (two triangles each) with their attributes. */
function quadCollector() {
  const pos: number[] = [];
  const normal: number[] = [];
  const room: number[] = [];
  const fold: number[] = [];
  return {
    add(a: number[], b: number[], c: number[], d: number[], n: number[], roomIndex: number, foldValue: number) {
      for (const v of [a, b, c, a, c, d]) {
        pos.push(v[0], v[1], v[2]);
        normal.push(n[0], n[1], n[2]);
        room.push(roomIndex);
        fold.push(foldValue);
      }
    },
    finish: (doors: LightSurface["doors"]): LightSurface => ({ pos: new Float32Array(pos), normal: new Float32Array(normal), room: Int16Array.from(room), fold: new Float32Array(fold), doors }),
  };
}

/** Whether a door or window stands on a wall: on its line and running along it. */
function standsOn(wall: Wall, o: OpeningInfo): boolean {
  const [dx, dz] = [wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]];
  const length = Math.hypot(dx, dz) || 1;
  const offLine = Math.abs((o.start[0] - wall.a[0]) * dz - (o.start[1] - wall.a[1]) * dx) / length;
  return offLine < 0.02 && Math.abs((o.axis[0] * dx + o.axis[1] * dz) / length) > 0.99;
}

interface Span {
  s0: number;
  s1: number;
  y0: number;
  y1: number;
}

/** The areas of doors and windows on a wall: along it (s from wall.a) and in height. */
function openingSpans(wall: Wall, along: Vec2, length: number, openings: OpeningInfo[]): Span[] {
  const spans: Span[] = [];
  for (const o of openings.filter((candidate) => standsOn(wall, candidate))) {
    const s = (o.start[0] - wall.a[0]) * along[0] + (o.start[1] - wall.a[1]) * along[1];
    const s0 = o.axis[0] * along[0] + o.axis[1] * along[1] > 0 ? s : s - o.width;
    if (s0 > length || s0 + o.width < 0) continue;
    spans.push({ s0, s1: s0 + o.width, y0: o.sill - 0.01, y1: o.top + 0.01 });
  }
  return spans;
}

/** Sorted, de-duplicated break points between `lo` and `hi`, including both ends. */
function breaks(values: number[], lo: number, hi: number): number[] {
  const sorted = [lo, hi, ...values.filter((v) => v > lo + 0.005 && v < hi - 0.005)].sort((a, b) => a - b);
  return sorted.filter((v, i) => i === 0 || v > sorted[i - 1] + 0.005);
}

/** Floor quads over a polygon, one per grid cell whose centre lies inside it. */
function gridCells(points: Vec2[], cell: number, isOff: (cx: number, cz: number) => boolean = () => false): { a: number; b: number }[] {
  const xs = points.map((p) => p[0]);
  const zs = points.map((p) => p[1]);
  const [x0, z0] = [Math.min(...xs), Math.min(...zs)];
  const [columns, rows] = [Math.max(1, Math.ceil((Math.max(...xs) - x0) / cell)), Math.max(1, Math.ceil((Math.max(...zs) - z0) / cell))];
  const cells: { a: number; b: number }[] = [];
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      const [cx, cz] = [x0 + (i + 0.5) * cell, z0 + (j + 0.5) * cell];
      if (pointInPolygon([cx, cz], points) && !isOff(cx, cz)) cells.push({ a: x0 + i * cell, b: z0 + j * cell });
    }
  }
  return cells;
}

/**
 * Builds the light surface of a floor: a grid of `cell` metres on every room floor, and strips on the room side of every
 * wall face, split at the cut height and left out where doors and windows are.
 */
export function buildLightSurface(
  floor: Floor,
  walls: Wall[],
  wallBuckets: number[],
  openings: OpeningInfo[],
  cell: number,
  holes: Vec2[][] = [],
  roofUnder?: (x: number, z: number) => number | null,
): LightSurface {
  const quads = quadCollector();
  const flatQuad = (a: number, b: number, y: number, roomIndex: number) => quads.add([a, y, b], [a, y, b + cell], [a + cell, y, b + cell], [a + cell, y, b], [0, 1, 0], roomIndex, -1);

  // room floors; no light over a floor opening, one looks through it
  floor.rooms.forEach((room, ri) => {
    if (room.points.length < 3) return;
    for (const { a, b } of gridCells(room.points, cell, (cx, cz) => holes.some((h) => pointInPolygon([cx, cz], h)))) flatQuad(a, b, FLOOR_LIFT, ri);
  });

  // outside is one zone (index rooms.length) for all outdoor areas and the outer faces of the walls
  const outside = floor.rooms.length;
  const areas = floor.outdoor ?? [];
  areas.forEach((area, ai) => {
    if (area.points.length < 3 || outdoorStanding(area.type)) return;
    const y = outdoorSurface(floor, area) + FLOOR_LIFT;
    // the patches cut out of an area (a pool in a terrace) carry no light of this area
    const holes = outdoorHoles(areas, ai);
    for (const { a, b } of gridCells(area.points, cell, (cx, cz) => holes.some((h) => pointInPolygon([cx, cz], h)))) flatQuad(a, b, y, outside);
  });

  const cut = Math.min(floor.cut_height, floor.height);
  walls.forEach((wall, wi) => {
    // a sloping wall reaches its higher end here; its lit face is trimmed along the slope below
    const slope = wall.heightEnd === undefined ? null : ([wall.height ?? floor.height, wall.heightEnd] as const);
    const top = slope ? Math.max(...slope) : (wall.height ?? floor.height);
    const cutAt = Math.min(cut, top - 0.02);
    const [dx, dz] = [wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]];
    const length = Math.hypot(dx, dz);
    if (length < 0.05) return;
    const along: Vec2 = [dx / length, dz / length];
    const leftNormal: Vec2 = [-along[1], along[0]];
    const bucket = wallBuckets[wi];
    const spans = openingSpans(wall, along, length, openings);
    // cells break at the cut and at every sill, top and side of an opening, so the hole a window leaves in the lit face
    // matches the window (a cell is lit or dark as a whole)
    const heights = breaks([cutAt, (cutAt + top) / 2, ...spans.flatMap((g) => [g.y0 + 0.01, g.y1 - 0.01])], 0.02, top - 0.02);
    const stations = breaks(spans.flatMap((g) => [g.s0, g.s1]), 0, length);

    for (const side of [1, -1] as const) {
      const roomId = side > 0 ? wall.roomLeft : wall.roomRight;
      // the outer face of an exterior wall belongs to the outside zone (facade lighting)
      const ri = roomId ? floor.rooms.findIndex((r) => r.id === roomId) : wall.exterior ? outside : -1;
      if (ri < 0) continue;
      const faceDistance = (side > 0 ? wall.left : wall.right) + FACE_GAP;
      const normal: Vec2 = [leftNormal[0] * side, leftNormal[1] * side];
      const point = (s: number, y: number) => [wall.a[0] + along[0] * s + normal[0] * faceDistance, y, wall.a[1] + along[1] * s + normal[1] * faceDistance];
      // under a roof slope the lit face ends where the wall does
      const ceilingAt = (s: number) => {
        const p = point(s, 0);
        const roof = roofUnder?.(p[0], p[2]);
        const sloped = slope ? slope[0] + ((slope[1] - slope[0]) * s) / length - 0.02 : Infinity;
        return Math.min(sloped, roof == null ? Infinity : roof - 0.02);
      };
      for (let p = 0; p + 1 < stations.length; p++) {
        const span = stations[p + 1] - stations[p];
        const steps = Math.max(1, Math.ceil(span / cell));
        for (let k = 0; k < steps; k++) {
          const s0 = stations[p] + (span / steps) * k;
          const s1 = stations[p] + (span / steps) * (k + 1);
          for (let h = 0; h + 1 < heights.length; h++) {
            const [y0, y1] = [heights[h], heights[h + 1]];
            if (y1 - y0 < 0.01) continue;
            const [sm, ym] = [(s0 + s1) / 2, (y0 + y1) / 2];
            if (spans.some((g) => sm > g.s0 && sm < g.s1 && ym > g.y0 && ym < g.y1)) continue;
            const [topA, topB] = [Math.min(y1, ceilingAt(s0)), Math.min(y1, ceilingAt(s1))];
            if (topA <= y0 + 0.005 && topB <= y0 + 0.005) continue;
            quads.add(point(s0, y0), point(s1, y0), point(s1, Math.max(y0, topB)), point(s0, Math.max(y0, topA)), [normal[0], 0, normal[1]], ri, y0 >= cut - 1e-6 ? bucket : LOWER_OFFSET + bucket);
          }
        }
      }
    }
  });

  // doors between two rooms let light through
  const doors: LightSurface["doors"] = [];
  for (const o of openings.filter((candidate) => candidate.opening.type === "door")) {
    const wall = walls.find((w) => standsOn(w, o));
    if (!wall?.roomLeft || !wall.roomRight) continue;
    const [a, b] = [floor.rooms.findIndex((r) => r.id === wall.roomLeft), floor.rooms.findIndex((r) => r.id === wall.roomRight)];
    if (a < 0 || b < 0) continue;
    doors.push({ id: o.opening.id, a, b, x: o.start[0] + o.axis[0] * (o.width / 2), y: Math.min(1.1, o.top * 0.55), z: o.start[1] + o.axis[1] * (o.width / 2) });
  }
  return quads.finish(doors);
}

