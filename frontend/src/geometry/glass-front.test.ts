import assert from "node:assert/strict";
import { test } from "node:test";
import type { Opening, Room, Vec2 } from "../model.ts";
import { arcOfNearest, edgeStart, frontExtent, frontPieces, spansEdges, withFront } from "./glass-front.ts";

/** A wall of `n` edges of `seg` metres, each turning `turn` degrees the same way, closed by one back edge. */
function arcRoom(n = 10, seg = 1, turn = 10): Room {
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

const near = (a: number, b: number, eps = 1e-6) => Math.abs(a - b) < eps;

test("a 6 m pane on a wall of ten 1 m edges is six pieces of one edge each", () => {
  const room = arcRoom();
  const pieces = frontPieces(room, 0, 6);
  assert.ok(pieces);
  assert.deepEqual(
    pieces.map((p) => p.edge),
    [0, 1, 2, 3, 4, 5],
  );
  for (const p of pieces) {
    assert.ok(near(p.width, 1), `piece width ${p.width}`);
    assert.ok(near(p.offset, 0.5), `piece centre ${p.offset}`);
  }
  assert.ok(near(pieces.reduce((sum, p) => sum + p.width, 0), 6), "the pieces keep the pane's length");
});

test("a pane that starts in the middle of an edge takes what is left of it", () => {
  const pieces = frontPieces(arcRoom(), 0.25, 2.5);
  assert.ok(pieces);
  assert.deepEqual(
    pieces.map((p) => p.edge),
    [0, 1, 2],
  );
  assert.ok(near(pieces[0].width, 0.75), `first piece ${pieces[0].width}`);
  assert.ok(near(pieces[1].width, 1));
  assert.ok(near(pieces[2].width, 0.75), `last piece ${pieces[2].width}`);
  assert.ok(near(pieces[0].offset, 0.625), `first centre ${pieces[0].offset}`);
});

/** A round room: `n` edges of 1 m, each turning 360/n degrees, so the outline closes without a corner. */
function roundRoom(n = 36, seg = 1): Room {
  const radius = seg / (2 * Math.sin(Math.PI / n));
  const points: Vec2[] = [];
  for (let i = 0; i < n; i++) {
    const a = (2 * Math.PI * i) / n;
    points.push([Math.cos(a) * radius, Math.sin(a) * radius]);
  }
  return { id: "r", name: "r", area_id: null, points, floor_material: "wood" };
}

test("a pane runs on past the last edge to the first one", () => {
  const room = roundRoom();
  const pieces = frontPieces(room, 34.5, 2.5);
  assert.ok(pieces);
  assert.deepEqual(
    pieces.map((p) => p.edge),
    [34, 35, 0],
  );
  assert.ok(near(pieces[0].width, 0.5, 0.02), `first piece ${pieces[0].width}`);
  assert.ok(near(pieces[2].width, 1, 0.02), `last piece ${pieces[2].width}`);
});

test("a pane stops at a sharp corner instead of bending around it", () => {
  // an L-shaped room: 4 m to the right, then 4 m up; the pane would have to turn 90 degrees
  const room: Room = { id: "r", name: "r", area_id: null, points: [[0, 0], [4, 0], [4, 4], [0, 4]], floor_material: "wood" };
  const pieces = frontPieces(room, 1, 5);
  assert.ok(pieces);
  assert.deepEqual(
    pieces.map((p) => p.edge),
    [0],
    "it stays on the first edge",
  );
  assert.ok(near(pieces[0].width, 3), `clipped to the corner, got ${pieces[0].width}`);
});

test("a sliver of a few centimetres is dropped instead of drawn as frame", () => {
  const pieces = frontPieces(arcRoom(), 0, 3.02);
  assert.ok(pieces);
  assert.equal(pieces.length, 3, "the 2 cm rest is not a piece of its own");
  assert.ok(near(pieces.reduce((sum, p) => sum + p.width, 0), 3));
});

test("a stored front reads back as the arc it covers", () => {
  const room = arcRoom();
  const pieces = frontPieces(room, 1.4, 4.2);
  assert.ok(pieces);
  const stored = pieces.map((p) => ({ edge: p.edge, offset: p.offset, width: p.width }) as never);
  const extent = frontExtent(room, stored);
  assert.ok(extent);
  assert.ok(near(extent.from, 1.4), `from ${extent.from}`);
  assert.ok(near(extent.width, 4.2), `width ${extent.width}`);
});

test("the arc of the nearest outline point finds the wall a pointer is on", () => {
  const room = arcRoom();
  // a metre along the first edge, a little to the side of it
  const start = room.points[0];
  const end = room.points[1];
  const at: Vec2 = [(start[0] + end[0]) / 2, (start[1] + end[1]) / 2];
  assert.ok(near(arcOfNearest(room, at), 0.5, 1e-6), `got ${arcOfNearest(room, at)}`);
  assert.ok(near(edgeStart(room, 3), 3), `edge start ${edgeStart(room, 3)}`);
});

test("a pane wider than its own edge is a front, a little wider still fits", () => {
  const room = arcRoom();
  assert.equal(spansEdges(room, 0, 1.05), false);
  assert.equal(spansEdges(room, 0, 2.0), true);
});

const pane = (edge: number, offset: number, width: number, extra: Partial<Opening> = {}): Opening =>
  ({
    id: `o${edge}`,
    room_id: "r",
    edge,
    offset,
    width,
    type: "window",
    sill: 0,
    height: 2.4,
    style: "glass_wall",
    hinge: "left",
    leaves: 1,
    swing: "in",
    cover: null,
    contact: null,
    contact2: null,
    tilt: null,
    ...extra,
  }) as Opening;

test("one ordinary opening grows into a pane over several edges and keeps its id", () => {
  const room = arcRoom();
  const single = pane(0, 0.5, 1);
  const list = [single];
  const next = withFront(list, room, single, 0.2, 3.5, () => "new");
  assert.ok(next);
  assert.equal(next.length, 4, "0.8 of the first edge, one each on the next two, 0.7 on the fourth");
  assert.equal(next[0].id, single.id, "the piece the user had selected keeps its id");
  assert.ok(next.every((o) => o.front === next[0].front));
  assert.ok(next[0].front, "pieces of several edges share a front id");
  // in the list where the old one stood
  assert.equal(next[0].edge, 0);
  assert.deepEqual(
    next.map((o) => o.edge),
    [0, 1, 2, 3],
  );
});

test("a pane that fits one edge again loses its front id", () => {
  const room = arcRoom();
  const pieces = frontPieces(room, 0, 3)!;
  const list = pieces.map((p, k) => pane(p.edge, p.offset, p.width, { id: `p${k}`, front: "f" }));
  const next = withFront(list, room, list[1], 0.4, 0.6, () => "new");
  assert.ok(next);
  assert.equal(next.length, 1);
  assert.equal(next[0].front, null);
});

test("re-spreading a pane leaves the other openings where they were", () => {
  const room = arcRoom();
  const pieces = frontPieces(room, 0, 2)!;
  const front = pieces.map((p, k) => pane(p.edge, p.offset, p.width, { id: `p${k}`, front: "f" }));
  const door = pane(5, 0.5, 0.9, { id: "door", type: "door", style: null });
  const list = [...front, door];
  const next = withFront(list, room, front[0], 0, 4, () => "new");
  assert.ok(next);
  assert.equal(next.filter((o) => o.id === "door").length, 1, "the door is still there");
  assert.equal(next.length, 5);
  assert.ok(near(next.reduce((sum, o) => sum + (o.front ? o.width : 0), 0), 4));
});
