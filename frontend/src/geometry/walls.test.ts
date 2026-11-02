import assert from "node:assert/strict";
import { test } from "node:test";
import { polygonArea, signedArea, type FreeWall, type Room, type Vec2 } from "../model.ts";
import { generateWalls, innerSize, locateOnWalls, locateOpening, openingHost, pointOnRoomEdge } from "./walls.ts";

const OUTER = 0.3;
const INNER = 0.1;
const opts = { exterior: OUTER, interior: INNER };

const room = (id: string, x0: number, z0: number, x1: number, z1: number, extra: Partial<Room> = {}): Room => ({
  id,
  name: id,
  area_id: null,
  points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]],
  floor_material: "wood",
  ...extra,
});

const near = (a: number, b: number, eps = 1e-6) => assert.ok(Math.abs(a - b) < eps, `${a} vs ${b}`);
const onLine = (w: { a: Vec2; b: Vec2 }, axis: 0 | 1, value: number) => Math.abs(w.a[axis] - value) < 1e-6 && Math.abs(w.b[axis] - value) < 1e-6;

test("one room: four outer walls with the room on their left, footprints counter-clockwise", () => {
  const { walls, warnings, open } = generateWalls([room("a", 0, 0, 5, 3)], opts);
  assert.equal(walls.length, 4);
  assert.deepEqual([warnings, open], [[], []]);
  for (const w of walls) {
    assert.deepEqual([w.exterior, w.roomLeft, w.roomRight, w.left, w.right], [true, "a", null, 0, OUTER]);
    assert.ok(signedArea(w.footprint) > 0);
  }
  // together they form the ring around the room
  const area = walls.reduce((sum, w) => sum + polygonArea(w.footprint), 0);
  near(area, (5 + 2 * OUTER) * (3 + 2 * OUTER) - 15);
});

test("a room stored clockwise gets the same walls", () => {
  const ccw = generateWalls([room("a", 0, 0, 5, 3)], opts).walls;
  const cw = generateWalls([{ ...room("a", 0, 0, 5, 3), points: [[0, 0], [0, 3], [5, 3], [5, 0]] }], opts).walls;
  assert.equal(cw.length, ccw.length);
  near(cw.reduce((s, w) => s + polygonArea(w.footprint), 0), ccw.reduce((s, w) => s + polygonArea(w.footprint), 0));
  assert.ok(cw.every((w) => w.exterior && w.roomLeft === "a"));
});

test("an edge shared by two rooms becomes one interior wall centred on it", () => {
  const { walls } = generateWalls([room("a", 0, 0, 4, 3), room("b", 4, 0, 9, 3)], opts);
  const shared = walls.filter((w) => !w.exterior);
  assert.equal(shared.length, 1);
  near(shared[0].left, INNER / 2);
  near(shared[0].right, INNER / 2);
  assert.deepEqual([shared[0].roomLeft, shared[0].roomRight].sort(), ["a", "b"]);
  assert.equal(walls.filter((w) => w.exterior).length, 6);
});

test("partly shared edges and T-junctions are split where the other room's corner touches", () => {
  const { walls } = generateWalls([room("a", 0, 0, 4, 6), room("b", 4, 0, 8, 2), room("c", 4, 2, 8, 6)], opts);
  const shared = walls.filter((w) => !w.exterior && onLine(w, 0, 4));
  assert.equal(shared.length, 2, "a-b and a-c along x = 4");
  assert.equal(walls.filter((w) => !w.exterior).length, 3, "plus b-c");
});

test("vertices a few millimetres apart count as one", () => {
  const a = room("a", 0, 0, 4, 3);
  const b = room("b", 4.003, 0.002, 8, 3);
  assert.equal(generateWalls([a, b], opts).walls.filter((w) => !w.exterior).length, 1);
});

test("collinear pieces of a room edge merge into one wall; hand-set splits keep them apart", () => {
  const plain = generateWalls([room("a", 0, 0, 6, 4)], opts).walls;
  assert.equal(plain.filter((w) => onLine(w, 1, 0)).length, 1);
  const split = generateWalls([room("a", 0, 0, 6, 4, { wall_splits: [[2], null, null, null] })], opts).walls;
  assert.equal(split.filter((w) => onLine(w, 1, 0)).length, 2);
  assert.ok(split.some((w) => Math.abs(Math.max(w.a[0], w.b[0]) - 2) < 1e-9));
});

test("an L-shaped room gets a mitred corner on the inside of the L", () => {
  const l: Room = { ...room("l", 0, 0, 6, 6), points: [[0, 0], [6, 0], [6, 3], [3, 3], [3, 6], [0, 6]] };
  const { walls } = generateWalls([l], opts);
  assert.equal(walls.length, 6);
  const area = walls.reduce((s, w) => s + polygonArea(w.footprint), 0);
  // an L of 27 m²: the ring is the outline grown by OUTER, minus the room itself
  assert.ok(area > 27 * 0.1 && area < 27, String(area));
  for (const w of walls) assert.ok(w.footprint.length >= 4);
});

test("rooms drawn on top of each other are reported; degenerate rooms are ignored", () => {
  const overlap = generateWalls([room("a", 0, 0, 4, 3), room("b", 0, 0, 4, 3)], opts);
  assert.ok(overlap.warnings.includes("overlap:a:b"));
  const ignored = generateWalls([{ ...room("d", 0, 0, 1, 1), points: [[0, 0], [1, 0]] }, { ...room("z", 0, 0, 1, 1), points: [[0, 0], [2, 0], [4, 0]] }], opts);
  assert.deepEqual(ignored.walls, []);
});

test("a position on a room edge is found on the wall that carries it", () => {
  const rooms = [room("a", 0, 0, 4, 3), room("b", 4, 0, 10, 3)];
  const { walls } = generateWalls(rooms, opts);
  // b's west edge is its edge 3, from (4, 3) to (4, 0): one metre in is (4, 2)
  assert.deepEqual(pointOnRoomEdge(rooms[1], 3, 1), [4, 2]);
  const hit = locateOnWalls(walls, rooms[1], 3, 1)!;
  assert.equal(hit.wall.exterior, false);
  const wallLength = Math.hypot(hit.wall.b[0] - hit.wall.a[0], hit.wall.b[1] - hit.wall.a[1]);
  const at: Vec2 = [hit.wall.a[0] + ((hit.wall.b[0] - hit.wall.a[0]) / wallLength) * hit.s, hit.wall.a[1] + ((hit.wall.b[1] - hit.wall.a[1]) / wallLength) * hit.s];
  near(at[0], 4);
  near(at[1], 2);
  assert.equal(locateOnWalls(walls, rooms[1], 3, 50), null);
});

test("a free-standing wall is an interior wall of its room and splits the edge it touches; tiny ones vanish", () => {
  const r = room("r", 0, 0, 6, 4);
  const free: FreeWall[] = [{ id: "fw", a: [3, 0], b: [3, 2.5], thickness: 0.2 }];
  const { walls } = generateWalls([r], opts, free);
  const fw = walls.find((w) => w.free === "fw")!;
  assert.deepEqual([fw.exterior, fw.roomLeft, fw.roomRight], [false, "r", "r"]);
  near(fw.left + fw.right, 0.2);
  assert.equal(walls.filter((w) => !w.free && onLine(w, 1, 0)).length, 2, "the outer wall is cut at x = 3");
  assert.equal(generateWalls([r], opts, [{ id: "t", a: [1, 1], b: [1, 1.01] }]).walls.some((w) => w.free), false);
});

test("walls take their own height from the room edge; a shared wall takes the lower one; a free wall has its own", () => {
  const a = room("a", 0, 0, 4, 3, { wall_heights: [1.2, 0.9, null, null] });
  const b = room("b", 4, 0, 8, 3, { wall_heights: [null, null, null, 1.5] });
  const { walls } = generateWalls([a, b], opts, [{ id: "f", a: [1, 1], b: [3, 1], height: 1.1 }]);
  assert.equal(walls.find((w) => w.exterior && w.sources[0].room_id === "a" && w.sources[0].edge === 0)?.height, 1.2);
  assert.equal(walls.find((w) => !w.exterior && !w.free)?.height, 0.9);
  assert.equal(walls.find((w) => w.free === "f")?.height, 1.1);
  assert.equal(walls.find((w) => w.exterior && w.sources[0].room_id === "b" && w.sources[0].edge === 0)?.height, undefined);
});

test("a height of 0 leaves a wall out, and the two rooms are reported as one open space", () => {
  const a = room("a", 0, 0, 4, 3, { wall_heights: [null, 0, null, null] });
  const res = generateWalls([a, room("b", 4, 0, 8, 3)], opts);
  assert.deepEqual(res.open, [["a", "b"]]);
  assert.equal(res.walls.some((w) => !w.exterior), false);
});

test("a split edge can carry one height per part", () => {
  const a = room("a", 0, 0, 4, 6, { wall_heights: [null, [1, null], null, null] });
  const res = generateWalls([a, room("b", 4, 0, 8, 3), room("c", 4, 3, 8, 6)], opts);
  const between = (x: string, y: string) => res.walls.find((w) => !w.exterior && [w.roomLeft, w.roomRight].sort().join() === [x, y].sort().join())!;
  assert.equal(between("a", "b").height, 1);
  assert.equal(between("a", "c").height, undefined);
});

test("a thickness on a room edge wins; a shared wall takes the thicker of the two", () => {
  const a = room("a", 0, 0, 4, 3, { wall_thickness: [0.4, null, 0.08, null] });
  const b = room("b", 4, 0, 7, 3, { wall_thickness: [null, null, null, 0.2] });
  const { walls } = generateWalls([a, b], opts);
  near(walls.find((w) => w.exterior && w.sources[0].room_id === "a" && w.sources[0].edge === 0)!.right, 0.4);
  const shared = walls.find((w) => !w.exterior)!;
  near(shared.left + shared.right, 0.2);
  near(walls.find((w) => w.exterior && w.sources[0].room_id === "a" && w.sources[0].edge === 2)!.right, 0.08);
});

test("an interior wall that continues an outer wall in line sits flush with the outer wall's inner face", () => {
  const { walls } = generateWalls([room("a", 0, 0, 4, 3), room("b", 4, 0, 7, 5)], opts);
  const inner = walls.find((w) => !w.exterior)!;
  const sideOfB = inner.roomLeft === "b" ? inner.left : inner.right;
  near(sideOfB, 0);
  near(inner.left + inner.right, INNER);
});

test("an opening is hosted by its room's edge, or by a free wall; hosts that do not exist give null", () => {
  const rooms = [room("a", 0, 0, 4, 3)];
  const free: FreeWall[] = [{ id: "f", a: [1, 1], b: [3, 1] }];
  assert.equal(openingHost({ room_id: "a", edge: 2, wall: undefined }, rooms, free)?.edge, 2);
  assert.equal(openingHost({ room_id: "a", edge: 9, wall: undefined }, rooms, free), null);
  assert.equal(openingHost({ room_id: "nope", edge: 0, wall: undefined }, rooms, free), null);
  const onFree = openingHost({ room_id: "a", edge: 0, wall: "f" }, rooms, free)!;
  assert.equal(onFree.edge, 0);
  assert.deepEqual(onFree.room.points.slice(0, 2), [[1, 1], [3, 1]]);
  assert.equal(openingHost({ room_id: "a", edge: 0, wall: "gone" }, rooms, free), null);
});

test("an opening in a free wall is located on that wall, with its room side on the left", () => {
  const rooms = [room("a", 0, 0, 6, 4)];
  const free: FreeWall[] = [{ id: "f", a: [1, 2], b: [5, 2] }];
  const { walls } = generateWalls(rooms, opts, free);
  const host = openingHost({ room_id: "a", edge: 0, wall: "f" }, rooms, free)!;
  const hit = locateOpening(walls, { wall: "f", offset: 1.5 }, host)!;
  assert.equal(hit.wall.free, "f");
  near(hit.s, 1.5);
  assert.equal(locateOpening(walls, { wall: "other", offset: 1 }, host), null);
  const plain = locateOpening(walls, { wall: undefined, offset: 1 }, { room: rooms[0], edge: 0 })!;
  assert.equal(plain.wall.exterior, true);
});

test("a sloping wall carries the heights at its two ends, whichever way the room is stored", () => {
  // the right wall (edge 1, from (4,0) to (4,3)) climbs from 2.5 to 4.7
  const sloped = room("a", 0, 0, 4, 3, { wall_heights: [null, 2.5, null, null], wall_slopes: [null, 4.7, null, null] });
  const right = generateWalls([sloped], opts).walls.find((w) => onLine(w, 0, 4))!;
  const [low, high] = right.a[1] < right.b[1] ? [right.a[1], right.b[1]] : [right.b[1], right.a[1]];
  assert.equal([low, high].join(), "0,3");
  assert.deepEqual([right.height, right.heightEnd], right.a[1] < right.b[1] ? [2.5, 4.7] : [4.7, 2.5]);
  // stored clockwise the wall still climbs towards z = 3
  const clockwise = { ...sloped, points: [...sloped.points].reverse() as Vec2[], wall_heights: [null, 4.7, null, null], wall_slopes: [null, 2.5, null, null] };
  const again = generateWalls([clockwise], opts).walls.find((w) => onLine(w, 0, 4))!;
  const topAtZ3 = again.a[1] === 3 ? again.height : again.heightEnd;
  assert.equal(topAtZ3, 4.7);
});

test("a sloping shared wall: the other room runs the other way and its level height caps both ends", () => {
  const a = room("a", 0, 0, 4, 3, { wall_heights: [null, 2.5, null, null], wall_slopes: [null, 4.7, null, null] });
  const b = room("b", 4, 0, 8, 3, { wall_heights: [null, null, null, 3.5] });
  const shared = generateWalls([a, b], opts).walls.find((w) => !w.exterior)!;
  const [atZ0, atZ3] = shared.a[1] < shared.b[1] ? [shared.height, shared.heightEnd] : [shared.heightEnd, shared.height];
  assert.equal(atZ0, 2.5);
  assert.equal(atZ3, 3.5, "the lower setting wins at each end");
});

test("a wall with no slope has no end height, and an unset or invalid slope is ignored", () => {
  const plain = generateWalls([room("a", 0, 0, 4, 3, { wall_heights: [1.2, null, null, null] })], opts).walls;
  assert.ok(plain.every((w) => w.heightEnd === undefined));
  // a slope without a start height, a zero end height, or heights per part do not slope
  const odd = generateWalls([room("a", 0, 0, 4, 3, { wall_heights: [null, 2.5, [1, 2], null], wall_slopes: [3, 0, 3, null] })], opts).walls;
  assert.ok(odd.every((w) => w.heightEnd === undefined));
});

test("a room's inner size loses half of each inner wall, nothing to the outer walls", () => {
  const a: Room = { id: "a", name: "A", area_id: null, points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "wood" };
  const b: Room = { id: "b", name: "B", area_id: null, points: [[4, 0], [7, 0], [7, 3], [4, 3]], floor_material: "wood" };
  const { walls } = generateWalls([a, b], { exterior: 0.3, interior: 0.12 });
  assert.deepEqual(innerSize(a, walls), [3.94, 3]);
});

test("a split edge can have a thickness per part", () => {
  const a: Room = { id: "a", name: "A", area_id: null, points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "wood", wall_splits: [[2]], wall_thickness: [[0.5, 0.2]] };
  const { walls } = generateWalls([a], { exterior: 0.3, interior: 0.12 });
  const top = walls.filter((w) => Math.abs(w.a[1]) < 1e-6 && Math.abs(w.b[1]) < 1e-6).map((w) => w.left + w.right).sort();
  assert.deepEqual(top, [0.2, 0.5]);
});
