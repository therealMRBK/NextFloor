// The baked shadow on the floor: strips along every wall face that borders a room (not across doorways).

import { Color } from "three";
import { pointInPolygon, roomOffset, type Room, type Vec2 } from "../../model.ts";
import type { Wall } from "../../geometry/walls.ts";
import { GeoBuffer } from "../geo.ts";
import { subtractSpans, type OutlineEdge } from "./outline.ts";
import type { Span } from "./types.ts";

const SHADOW_WIDTH = 0.42;
const SHADOW_DARK = 0.42;

export function buildShadow(edges: OutlineEdge[], rooms: readonly Room[], spans: Map<Wall, Span[]>): GeoBuffer {
  const buf = new GeoBuffer();
  const dark = new Color(SHADOW_DARK, SHADOW_DARK, SHADOW_DARK);
  const clear = new Color(1, 1, 1);
  for (const edge of edges) {
    for (const [a, b] of subtractSpans(edge, (spans.get(edge.wall) ?? []).filter((sp) => sp.sill <= 0.005))) {
      const [dx, dz] = [b[0] - a[0], b[1] - a[1]];
      const length = Math.hypot(dx, dz);
      if (length < 0.05) continue;
      // footprints are counter-clockwise, so the right normal points away from the wall
      const n: Vec2 = [dz / length, -dx / length];
      const probe: Vec2 = [(a[0] + b[0]) / 2 + n[0] * 0.05, (a[1] + b[1]) / 2 + n[1] * 0.05];
      const room = rooms.find((r) => r.points.length >= 3 && pointInPolygon(probe, r.points));
      if (!room) continue;
      // on the room's own floor: a raised or sunken room (#57) would otherwise hide the shadow under its floor (#131)
      const y = 0.002 + roomOffset(room);
      const a2: Vec2 = [a[0] + n[0] * SHADOW_WIDTH, a[1] + n[1] * SHADOW_WIDTH];
      const b2: Vec2 = [b[0] + n[0] * SHADOW_WIDTH, b[1] + n[1] * SHADOW_WIDTH];
      // the layer is drawn double-sided, so the winding does not matter
      buf.tri([a[0], y, a[1]], [a2[0], y, a2[1]], [b2[0], y, b2[1]], dark, clear, clear);
      buf.tri([a[0], y, a[1]], [b2[0], y, b2[1]], [b[0], y, b[1]], dark, clear, dark);
    }
  }
  return buf;
}
