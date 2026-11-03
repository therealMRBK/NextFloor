// Room floors with their material pattern, the slab below them, and the rims of openings cut into the floor (stairwells).

import { Color } from "three";
import { holeInRoom, insetHole } from "../../geometry/holes.ts";
import { roomOffset, type Floor, type Vec2 } from "../../model.ts";
import { ALWAYS, EDGE_SOFT, EDGE_TOP, GeoBuffer, LineBuffer, triangulate } from "../geo.ts";
import { counterClockwise } from "./outline.ts";
import { FLOOR_LOOK, NEON, SLAB } from "./look.ts";
import type { FloorGeometry } from "./types.ts";

export interface FloorParts {
  buffer: GeoBuffer;
  roomTris: FloorGeometry["roomTris"];
  /** The rims of the openings, to be added to the line buffer first. */
  holeLines: LineBuffer;
  /** The openings that were actually cut into some room. */
  cutHoles: Vec2[][];
}

export function buildFloors(floor: Floor, holes: Vec2[][]): FloorParts {
  const buffer = new GeoBuffer(true, true);
  const roomTris: FloorGeometry["roomTris"] = [];
  const holeLines = new LineBuffer();
  const cutHoles: Vec2[][] = [];
  const slab = new Color(NEON.slab);

  /** The slab's side faces along a ring, from `y0` up to `y1`. */
  const slabSides = (ring: Vec2[], y1 = 0, y0 = y1 - SLAB) => {
    ring.forEach((a, i) => {
      const b = ring[(i + 1) % ring.length];
      buffer.tri([a[0], y0, a[1]], [a[0], y1, a[1]], [b[0], y1, b[1]], slab);
      buffer.tri([a[0], y0, a[1]], [b[0], y1, b[1]], [b[0], y0, b[1]], slab);
    });
  };

  for (const room of floor.rooms) {
    if (room.points.length < 3) continue;
    const outline = counterClockwise(room.points);
    const look = FLOOR_LOOK[room.floor_material] ?? FLOOR_LOOK.wood;
    const top = new Color(look.color);
    // an opening snapped to the room's edge is still cut, a few millimetres in from it
    const inside = holes.filter((h) => holeInRoom(h, outline)).map((h) => insetHole(h, 0.003));
    cutHoles.push(...inside);
    const corners = [...outline, ...inside.flat()];
    const start = buffer.count;
    // a room on its own level (a sunken entrance, a split level): its floor lies lower or higher
    const y = roomOffset(room);
    for (const [i, j, k] of triangulate(outline, inside)) {
      const [a, b, c] = [corners[i], corners[j], corners[k]];
      buffer.tri([a[0], y, a[1]], [c[0], y, c[1]], [b[0], y, b[1]], top, top, top, [a[0], a[1], c[0], c[1], b[0], b[1]], ALWAYS, look.tile);
    }
    roomTris.push({ roomId: room.id, start, end: buffer.count, color: look.color });
    slabSides(outline, y);
    // the step between it and the floor's level, seen from both sides (from the lower room and from the rooms around it)
    if (Math.abs(y) > 0.005) {
      slabSides(outline, Math.max(0, y), Math.min(0, y));
      slabSides([...outline].reverse(), Math.max(0, y), Math.min(0, y));
    }
    for (const hole of inside) {
      // the hole's inner faces look into the hole
      slabSides([...counterClockwise(hole)].reverse());
      hole.forEach((a, i) => {
        const b = hole[(i + 1) % hole.length];
        // a bright rim like the walls' tops, so the opening reads from above
        holeLines.seg([a[0], y + 0.006, a[1]], [b[0], y + 0.006, b[1]], EDGE_TOP);
        holeLines.seg([a[0], y - SLAB, a[1]], [b[0], y - SLAB, b[1]], EDGE_SOFT);
      });
    }
  }
  return { buffer, roomTris, holeLines, cutHoles };
}
