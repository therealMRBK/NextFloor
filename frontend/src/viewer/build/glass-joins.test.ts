// The joins between the pieces of one pane: no jamb, no wall vertical and no wall surface may stand there,
// or the pane reads as several windows again. The same fixture without a `front` is the control: it must
// still show those, so the test can fail.
//
// What used to stand there is a mitre wedge: a wall's footprint runs up to the mitre line, a few centimetres
// past the wall's own end, so cutting the wall into pieces leaves a full-height wedge piece beyond the last
// opening. Its end face, outer sliver and mitre face are the bright vertical line seen through the glass.

import assert from "node:assert/strict";
import { test } from "node:test";
import { generateWalls } from "../../geometry/walls.ts";
import { newFloor, type Floor, type Opening, type Room, type Vec2 } from "../../model.ts";
import { GeoBuffer, LineBuffer } from "../geo.ts";
import { pushEdgeLines } from "./edges.ts";
import { alongWall, glassJoins, joinPositions } from "./glass-joins.ts";
import { outlineOf } from "./outline.ts";
import { bucketWalls, placeOpenings, roofLimits } from "./placement.ts";
import { buildWallSolids } from "./solids.ts";

const OUTER = 0.3;
const INNER = 0.1;
/** The height band a glass wall leaves empty: nothing solid may stand in it at a join. */
const BAND: [number, number] = [0.1, 2.3];

/** A room whose outer side is an arc of `n` edges of `seg` metres, each turning `turn` degrees, closed by one straight edge. */
function arcRoom(n = 8, seg = 1, turn = 30): Room {
  const points: Vec2[] = [[0, 0]];
  let [x, z] = [0, 0];
  let a = 0;
  for (let i = 0; i < n; i++) {
    a += (turn * Math.PI) / 180;
    x += Math.cos(a) * seg;
    z += Math.sin(a) * seg;
    points.push([x, z]);
  }
  return { id: "r", name: "r", area_id: null, points, floor_material: "wood" };
}

const glass = (id: string, edge: number, front: string | null): Opening =>
  ({
    id,
    room_id: "r",
    edge,
    offset: 0.5,
    width: 1,
    type: "window",
    style: "glass_wall",
    sill: 0,
    height: 2.4,
    hinge: "left",
    leaves: 1,
    swing: "in",
    cover: null,
    contact: null,
    contact2: null,
    tilt: null,
    ...(front ? { front } : {}),
  }) as Opening;

/** Three 1 m pieces on the first three edges of the arc, either one pane (a shared front) or three windows. */
function scene(front: string | null) {
  const room = arcRoom();
  const floor: Floor = {
    ...newFloor("f", "F", 0),
    height: 2.6,
    cut_height: 1.2,
    rooms: [room],
    openings: [glass("a", 0, front), glass("b", 1, front), glass("c", 2, front)],
    furniture: [],
  };
  const { walls } = generateWalls(floor.rooms, { exterior: OUTER, interior: INNER }, []);
  const limits = roofLimits(() => null);
  const { wallBucket } = bucketWalls(walls);
  const { spans } = placeOpenings(floor, walls, wallBucket, limits);
  const outline = outlineOf(walls, walls.flatMap((w) => w.footprint));
  const lines = new LineBuffer();
  pushEdgeLines(lines, floor, outline, wallBucket, spans, limits, false);
  const solids = new GeoBuffer();
  buildWallSolids(solids, floor, walls, wallBucket, spans, limits, false);
  return { room, floor, walls, spans, lines, solids };
}

/** Vertical line segments whose plan position is within 5 cm of `p`. */
function verticalLinesAt(lines: LineBuffer, p: Vec2): number {
  const v: number[] = (lines as unknown as { p: number[] }).p;
  let found = 0;
  for (let i = 0; i + 5 < v.length; i += 6) {
    const [x0, y0, z0, x1, y1, z1] = [v[i], v[i + 1], v[i + 2], v[i + 3], v[i + 4], v[i + 5]];
    if (Math.abs(y1 - y0) < 0.6) continue;
    if (Math.hypot(x0 - p[0], z0 - p[1]) > 0.05 && Math.hypot(x1 - p[0], z1 - p[1]) > 0.05) continue;
    found++;
  }
  return found;
}

/** Distance in plan from `p` to the triangle `abc`, zero inside it. */
function planDistance(p: Vec2, a: Vec2, b: Vec2, c: Vec2): number {
  const cross = (o: Vec2, u: Vec2, v: Vec2) => (u[0] - o[0]) * (v[1] - o[1]) - (u[1] - o[1]) * (v[0] - o[0]);
  const [s1, s2, s3] = [cross(a, b, p), cross(b, c, p), cross(c, a, p)];
  if ((s1 >= 0 && s2 >= 0 && s3 >= 0) || (s1 <= 0 && s2 <= 0 && s3 <= 0)) return 0;
  const toSegment = (u: Vec2, w: Vec2) => {
    const [dx, dz] = [w[0] - u[0], w[1] - u[1]];
    const len2 = dx * dx + dz * dz;
    const t = len2 < 1e-12 ? 0 : Math.max(0, Math.min(1, ((p[0] - u[0]) * dx + (p[1] - u[1]) * dz) / len2));
    return Math.hypot(p[0] - (u[0] + dx * t), p[1] - (u[1] + dz * t));
  };
  return Math.min(toSegment(a, b), toSegment(b, c), toSegment(c, a));
}

/** The axis of the wall that ends at `p`: a face is a divider when it runs across that wall. */
function axisAt(walls: { a: Vec2; b: Vec2 }[], p: Vec2): Vec2 {
  const w = walls.find((x) => Math.hypot(x.b[0] - p[0], x.b[1] - p[1]) < 1e-6) ?? walls.find((x) => Math.hypot(x.a[0] - p[0], x.a[1] - p[1]) < 1e-6)!;
  const len = Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]) || 1;
  return [(w.b[0] - w.a[0]) / len, (w.b[1] - w.a[1]) / len];
}

/**
 * Wall faces that read as a divider in the glass at `p`: the face runs across the wall — a jamb, or the
 * seam beside a mitre — its plan projection covers `p`, and it reaches into the height band the pane
 * leaves empty. A face along the wall is the wall surface and no divider, a sliver of no length is no
 * surface, and the wall above a 2.4 m pane is out of the band.
 */
function facesInGlass(solids: GeoBuffer, p: Vec2, axis: Vec2, band: [number, number] = BAND): number {
  const v: number[] = (solids as unknown as { p: number[] }).p;
  let found = 0;
  for (let i = 0; i + 8 < v.length; i += 9) {
    const ys = [v[i + 1], v[i + 4], v[i + 7]];
    const [lo, hi] = [Math.min(...ys), Math.max(...ys)];
    if (lo > band[1] || hi < band[0] || hi - lo < 0.05) continue;
    const [a, b, c]: Vec2[] = [
      [v[i], v[i + 2]],
      [v[i + 3], v[i + 5]],
      [v[i + 6], v[i + 8]],
    ];
    const across = Math.max(Math.hypot(b[0] - a[0], b[1] - a[1]), Math.hypot(c[0] - b[0], c[1] - b[1]), Math.hypot(c[0] - a[0], c[1] - a[1]));
    if (across < 0.01) continue;
    if (Math.abs(((c[0] - a[0]) * axis[0] + (c[1] - a[1]) * axis[1]) / across) > 0.5) continue;
    if (planDistance(p, a, b, c) > 0.02) continue;
    found++;
  }
  return found;
}

/**
 * How much wall surface stands in the glass band around `p`, in square metres. Unlike `facesInGlass`
 * this counts every face, whatever way it runs: the strip that shows from outside at a bend runs along
 * the wall, so a test that only looks at cross-sections cannot see it.
 */
function wallInGlass(solids: GeoBuffer, p: Vec2, radius = 0.35, band: [number, number] = BAND): number {
  const v: number[] = (solids as unknown as { p: number[] }).p;
  let area = 0;
  for (let i = 0; i + 8 < v.length; i += 9) {
    const ys = [v[i + 1], v[i + 4], v[i + 7]];
    const [lo, hi] = [Math.min(...ys), Math.max(...ys)];
    if (lo > band[1] || hi < band[0] || hi - lo < 0.05) continue;
    const pts: Vec2[] = [
      [v[i], v[i + 2]],
      [v[i + 3], v[i + 5]],
      [v[i + 6], v[i + 8]],
    ];
    const cx = (pts[0][0] + pts[1][0] + pts[2][0]) / 3;
    const cz = (pts[0][1] + pts[1][1] + pts[2][1]) / 3;
    if (Math.hypot(cx - p[0], cz - p[1]) > radius) continue;
    const across = Math.max(
      Math.hypot(pts[1][0] - pts[0][0], pts[1][1] - pts[0][1]),
      Math.hypot(pts[2][0] - pts[1][0], pts[2][1] - pts[1][1]),
      Math.hypot(pts[2][0] - pts[0][0], pts[2][1] - pts[0][1]),
    );
    if (across < 0.01) continue; // a degenerate sliver is no surface at all
    area += across * (hi - lo);
  }
  return area;
}

test("where two pieces of one pane meet, no jamb and no wall surface stand in the glass", () => {
  const { room, walls, spans, lines, solids } = scene("F");
  const joins = glassJoins(spans.values());
  assert.equal(joins.points.length, 2, "two internal joins for three pieces");
  for (const p of joins.points) {
    assert.equal(verticalLinesAt(lines, p), 0, `no vertical line at ${p}`);
    assert.equal(facesInGlass(solids, p, axisAt(walls, p)), 0, `no wall face in the glass at ${p}`);
    // the mitre of a bend leaves a strip of wall on the outer face, a few centimetres wide and full
    // height: from outside it stands in front of the glass and reads as a white line at every bend
    assert.ok(wallInGlass(solids, p) < 0.02, `no wall surface in the glass at ${p}`);
  }
  // the same points in wall coordinates, which is what the solids and the corner filter use
  for (const wall of [...spans.keys()]) {
    const positions = joinPositions(spans.get(wall)!, joins);
    for (const s of positions) assert.ok(s >= -0.001 && s <= 1.5, `join at ${s} m on its wall`);
  }
  assert.ok(room.points.length > 3);
});

test("the control: three separate glass walls do show a jamb and a wall surface at the same points", () => {
  const { room, walls, lines, solids } = scene(null);
  const corner = room.points[1];
  assert.ok(verticalLinesAt(lines, corner) > 0, "a separate glass wall keeps its jamb");
  assert.ok(facesInGlass(solids, corner, axisAt(walls, corner)) > 0, "and the wall end stands in the glass");
  assert.ok(wallInGlass(solids, corner) > 1, "lots of it, so the measure above can fail");
});

test("joinPosition is the wall coordinate of a piece end, not a guessed distance", () => {
  const { walls, spans } = scene("F");
  const joins = glassJoins(spans.values());
  let seen = 0;
  for (const [wall, list] of spans) {
    const at = joinPositions(list, joins);
    seen += at.length;
    for (const sp of list) {
      for (const s of at) {
        // a join is either the span's start or its end on this wall
        assert.ok(Math.abs(s - sp.s0) < 1e-9 || Math.abs(s - sp.s1) < 1e-9, "a join sits on a span end");
        assert.ok(alongWall(wall, wall.a) < 1e-9, "wall coordinates start at wall.a");
      }
    }
  }
  assert.equal(seen, 4, "two joints, each seen from both of its walls");
  assert.equal(walls.length, 9, "eight arc edges and the closing one");
});
