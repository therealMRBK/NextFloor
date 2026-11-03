import assert from "node:assert/strict";
import { test } from "node:test";
import type { BufferGeometry } from "three";
import { generateWalls } from "../../geometry/walls.ts";
import { newFloor, type Floor, type Furniture, type Opening, type Room, type Vec2 } from "../../model.ts";
import { ALWAYS, CUT_OFFSET, LOWER_OFFSET } from "../geo.ts";
import { buildFloorGeometry, stairHoles } from "./build.ts";
import { bucketWalls, placeOpenings, roofLimits, wallHeight, wallTops } from "./placement.ts";
import { clipAlong, counterClockwise, outlineOf, subtractSpans } from "./outline.ts";

const OUTER = 0.3;
const INNER = 0.1;

const room = (id: string, x0: number, z0: number, x1: number, z1: number): Room => ({ id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: "wood" });
const floorOf = (rooms: Room[], openings: Opening[] = [], furniture: Furniture[] = []): Floor => ({ ...newFloor("f", "F", 0), height: 2.6, cut_height: 1.2, rooms, openings, furniture });
const opening = (type: "door" | "window", roomId: string, edge: number, offset: number, width = 1): Opening =>
  ({ id: `${type}${edge}`, room_id: roomId, edge, offset, width, type, sill: type === "door" ? 0 : 0.9, height: type === "door" ? 2.05 : 1.3, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null }) as Opening;
const near = (a: number, b: number, eps = 1e-6) => assert.ok(Math.abs(a - b) < eps, `${a} vs ${b}`);

type Seg = { from: number[]; to: number[]; fold: number };
const segments = (g: BufferGeometry): Seg[] => {
  const p = g.getAttribute("position").array;
  const f = g.getAttribute("fold").array;
  return Array.from({ length: p.length / 6 }, (_, s) => ({ from: [p[s * 6], p[s * 6 + 1], p[s * 6 + 2]], to: [p[s * 6 + 3], p[s * 6 + 4], p[s * 6 + 5]], fold: f[s * 2] }));
};
const triangles = (g: BufferGeometry) => g.getAttribute("position").count / 3;
const horizontal = (s: Seg, y: number) => Math.abs(s.from[1] - y) < 1e-6 && Math.abs(s.to[1] - y) < 1e-6; // positions are 32-bit floats
const length = (s: Seg) => Math.hypot(s.to[0] - s.from[0], s.to[2] - s.from[2]);

test("walls fall into buckets: all interior walls in one, exterior walls by the direction they face", () => {
  const { walls } = generateWalls([room("a", 0, 0, 4, 3), room("b", 4, 0, 8, 3)], { exterior: OUTER, interior: INNER });
  const { buckets, wallBucket } = bucketWalls(walls);
  const interior = walls.filter((w) => !w.exterior);
  assert.equal(new Set(interior.map((w) => wallBucket.get(w))).size, 1);
  const outside = walls.filter((w) => w.exterior);
  assert.equal(buckets.filter((b) => b === null).length, 1);
  assert.ok(new Set(outside.map((w) => wallBucket.get(w))).size >= 3, "north, south, east and west");
  for (const b of buckets) if (b) near(Math.hypot(b[0], b[1]), 1);
  assert.equal(buckets.length, new Set([...wallBucket.values()]).size);
});

test("a wall stands at the floor height, a low wall keeps its own height, a tall room's wall rises above the floor", () => {
  const { walls } = generateWalls([room("a", 0, 0, 4, 3)], { exterior: OUTER, interior: INNER });
  assert.equal(wallHeight(walls[0], 2.6), 2.6);
  assert.equal(wallHeight({ ...walls[0], height: 1 }, 2.6), 1);
  assert.equal(wallHeight({ ...walls[0], height: 5 }, 2.6), 5);
});

test("roof limits: the top of a wall is its height unless a lower roof is above", () => {
  const free = roofLimits(undefined);
  assert.equal(free.topAt(0, 0, 2.6), 2.6);
  assert.equal(free.lowestTop([0, 0], [1, 0], 0, 3, 2.6), 2.6);
  const under = roofLimits((x) => (x < 2 ? 1.8 : null));
  assert.equal(under.topAt(1, 0, 2.6), 1.8);
  assert.equal(under.topAt(3, 0, 2.6), 2.6);
  assert.equal(roofLimits(() => 0.01).topAt(0, 0, 2.6), 0.05, "never below 5 cm");
  assert.equal(under.lowestTop([0, 0], [1, 0], 0, 4, 2.6), 1.8);
});

test("an opening is placed on its wall: width, side of the room, sill and top", () => {
  const f = floorOf([room("a", 0, 0, 6, 4)], [opening("window", "a", 0, 3, 1.2), opening("door", "a", 3, 2, 0.9)]);
  const { walls } = generateWalls(f.rooms, { exterior: OUTER, interior: INNER });
  const { wallBucket } = bucketWalls(walls);
  const { openings, spans } = placeOpenings(f, walls, wallBucket, roofLimits(undefined));
  assert.equal(openings.length, 2);
  const win = openings.find((o) => o.opening.type === "window")!;
  near(win.width, 1.2);
  near(win.sill, 0.9);
  near(win.top, 2.2);
  assert.equal(win.exterior, true);
  // the room is on the side the wall's normal points to
  const towardsCentre = [3 - win.start[0], 2 - win.start[1]];
  assert.ok(win.toRoom[0] * towardsCentre[0] + win.toRoom[1] * towardsCentre[1] > 0);
  assert.equal([...spans.values()].flat().length, 2);
  for (const list of spans.values()) for (const sp of list) assert.ok(sp.s1 - sp.s0 > 0.85);
});

test("an opening wider than its wall is shortened, one with no wall is dropped", () => {
  const f = floorOf([room("a", 0, 0, 2, 2)], [opening("window", "a", 0, 1, 5), opening("window", "ghost", 0, 1)]);
  const { walls } = generateWalls(f.rooms, { exterior: OUTER, interior: INNER });
  const { openings } = placeOpenings(f, walls, bucketWalls(walls).wallBucket, roofLimits(undefined));
  assert.equal(openings.length, 1);
  assert.ok(openings[0].width <= 2 + 1e-9);
});

test("under a roof an opening's top stays below the roof", () => {
  const f = floorOf([room("a", 0, 0, 6, 4)], [opening("window", "a", 0, 3, 1.2)]);
  const { walls } = generateWalls(f.rooms, { exterior: OUTER, interior: INNER });
  const { openings } = placeOpenings(f, walls, bucketWalls(walls).wallBucket, roofLimits(() => 1.6));
  assert.ok(openings[0].top <= 1.6 - 0.02 + 1e-9);
  assert.ok(openings[0].sill <= openings[0].top - 0.1 + 1e-9);
});

test("a polygon is clipped between two lines across a wall's axis", () => {
  const square: Vec2[] = [[0, 0], [4, 0], [4, 1], [0, 1]];
  const piece = clipAlong(square, [0, 0], [1, 0], 1, 3);
  assert.deepEqual(piece.map((p) => p[0]).sort(), [1, 1, 3, 3]);
  assert.equal(clipAlong(square, [0, 0], [1, 0], -Infinity, Infinity).length, 4);
  assert.equal(clipAlong(square, [0, 0], [1, 0], 5, 6).length, 0);
  assert.equal(clipAlong(square, [0, 0], [1, 0], -Infinity, 2).length, 4);
});

test("a ring is turned counter-clockwise", () => {
  const ring: Vec2[] = [[0, 0], [0, 1], [1, 1], [1, 0]];
  assert.deepEqual(counterClockwise(ring), [...ring].reverse());
  assert.equal(counterClockwise([...ring].reverse()).length, 4);
});

test("a single room has corner lines at all eight corners of its walls' outline", () => {
  const f = floorOf([room("a", 0, 0, 4, 3)]);
  const g = buildFloorGeometry(f, OUTER, INNER);
  const { walls } = generateWalls(f.rooms, { exterior: OUTER, interior: INNER });
  assert.equal(outlineOf(walls, walls.flatMap((w) => w.footprint)).corners.length, 8);
  const verticals = segments(g.lines).filter((s) => Math.abs(s.from[0] - s.to[0]) < 1e-9 && Math.abs(s.from[2] - s.to[2]) < 1e-9);
  assert.ok(verticals.length >= 8);
});

test("a straight outer face across a T-joint gets no corner line", () => {
  const { walls } = generateWalls([room("a", 0, 0, 4, 3), room("b", 4, 0, 8, 3)], { exterior: OUTER, interior: INNER });
  const outline = outlineOf(walls, walls.flatMap((w) => w.footprint));
  const onTopFace = outline.corners.filter((c) => Math.abs(c.p[0] - 4) < 1e-6 && c.p[1] < -0.1);
  assert.equal(onTopFace.length, 0);
});

test("the baked shadow covers wall faces inside rooms and nothing outside", () => {
  const g = buildFloorGeometry(floorOf([room("a", 0, 0, 4, 3)]), OUTER, INNER);
  const p = Array.from(g.shadow.getAttribute("position").array);
  const xs = p.filter((_, i) => i % 3 === 0);
  const zs = p.filter((_, i) => i % 3 === 2);
  assert.ok(Math.min(...xs) >= -1e-6 && Math.max(...xs) <= 4 + 1e-6, "inside the room");
  assert.ok(Math.min(...zs) >= -1e-6 && Math.max(...zs) <= 3 + 1e-6);
  assert.ok(triangles(g.shadow) >= 8);
});

test("a door interrupts the base line and the shadow; a window does not", () => {
  const plain = buildFloorGeometry(floorOf([room("a", 0, 0, 6, 4)]), OUTER, INNER);
  const withDoor = buildFloorGeometry(floorOf([room("a", 0, 0, 6, 4)], [opening("door", "a", 0, 3, 1)]), OUTER, INNER);
  const withWindow = buildFloorGeometry(floorOf([room("a", 0, 0, 6, 4)], [opening("window", "a", 0, 3, 1)]), OUTER, INNER);
  const baseLength = (g: ReturnType<typeof buildFloorGeometry>) => segments(g.lines).filter((s) => horizontal(s, 0.004)).reduce((sum, s) => sum + length(s), 0);
  assert.ok(baseLength(plain) - baseLength(withDoor) > 0.9);
  near(baseLength(plain), baseLength(withWindow), 1e-6);
  assert.ok(triangles(plain.shadow) < triangles(withDoor.shadow) + 4);
  const strip = (g: ReturnType<typeof buildFloorGeometry>) => Array.from(g.shadow.getAttribute("position").array).filter((_, i) => i % 3 === 0);
  assert.ok(strip(withDoor).length > 0);
});

test("a window above the cut height keeps the cut line, one across it interrupts it", () => {
  const cutLine = (g: ReturnType<typeof buildFloorGeometry>) => segments(g.lines).filter((s) => horizontal(s, 1.2) && s.fold >= CUT_OFFSET && s.fold < LOWER_OFFSET);
  const high = { ...opening("window", "a", 0, 3, 1), sill: 1.5, height: 0.8 };
  const across = opening("window", "a", 0, 3, 1);
  const total = (g: ReturnType<typeof buildFloorGeometry>) => cutLine(g).reduce((sum, s) => sum + length(s), 0);
  const plain = total(buildFloorGeometry(floorOf([room("a", 0, 0, 6, 4)]), OUTER, INNER));
  near(total(buildFloorGeometry(floorOf([room("a", 0, 0, 6, 4)], [high]), OUTER, INNER)), plain, 1e-6);
  assert.ok(plain - total(buildFloorGeometry(floorOf([room("a", 0, 0, 6, 4)], [across]), OUTER, INNER)) > 0.9);
});

test("an opening makes the wall around it: pieces beside, below and above, but none in the opening", () => {
  const plain = triangles(buildFloorGeometry(floorOf([room("a", 0, 0, 6, 4)]), OUTER, INNER).walls);
  const holed = triangles(buildFloorGeometry(floorOf([room("a", 0, 0, 6, 4)], [opening("window", "a", 0, 3, 1)]), OUTER, INNER).walls);
  assert.ok(holed > plain, "a window cuts the wall into more pieces");
});

test("furniture is built into the walls buffer with its triangle range; lamps are left to the viewer", () => {
  const sofa: Furniture = { id: "s", type: "sofa", x: 3, z: 2, rotation: 0, w: 2, d: 0.9, h: 0.8, variant: null, entity: null, power: null };
  const lamp: Furniture = { ...sofa, id: "l", type: "lamp_ceiling" };
  const g = buildFloorGeometry(floorOf([room("a", 0, 0, 6, 4)], [], [sofa, lamp]), OUTER, INNER);
  assert.deepEqual(g.furnitureTris.map((t) => t.id), ["s"]);
  assert.ok(g.furnitureTris[0].end > g.furnitureTris[0].start);
  assert.equal(g.furnitureTris[0].end <= triangles(g.walls), true);
});

test("furniture reaching above the cut height is cut with the walls", () => {
  const wardrobe: Furniture = { id: "w", type: "wardrobe", x: 3, z: 2, rotation: 0, w: 1, d: 0.6, h: 2.2, variant: null, entity: null, power: null };
  const g = buildFloorGeometry(floorOf([room("a", 0, 0, 6, 4)], [], [wardrobe]), OUTER, INNER);
  const folds = Array.from(g.walls.getAttribute("fold").array);
  assert.ok(folds.some((f) => f >= 64), "pieces above the cut fold away");
  assert.ok(folds.includes(ALWAYS));
});

test("a floor opening cuts a hole into the room floor and gets a rim line", () => {
  const f = floorOf([room("a", 0, 0, 6, 4)]);
  const whole = buildFloorGeometry(f, OUTER, INNER);
  const holed = buildFloorGeometry(f, OUTER, INNER, [[[1, 1], [2, 1], [2, 2], [1, 2]]]);
  assert.equal(whole.holes.length, 0);
  assert.equal(holed.holes.length, 1);
  assert.ok(triangles(holed.floor) > triangles(whole.floor));
  assert.ok(segments(holed.lines).length > segments(whole.lines).length);
});

test("every room gets a range of floor triangles for picking, with its colour", () => {
  const g = buildFloorGeometry(floorOf([room("a", 0, 0, 3, 3), { ...room("b", 3, 0, 6, 3), floor_material: "tiles" }]), OUTER, INNER);
  assert.deepEqual(g.roomTris.map((r) => r.roomId), ["a", "b"]);
  assert.ok(g.roomTris.every((r) => r.end > r.start));
  assert.notEqual(g.roomTris[0].color, g.roomTris[1].color);
});

test("stairs and stairwells cut holes into the floor above", () => {
  const stairs: Furniture = { id: "st", type: "stairs", x: 2, z: 2, rotation: 0, w: 1, d: 3, h: 2.6, variant: null, entity: null, power: null };
  const lower = { ...floorOf([room("a", 0, 0, 6, 4)], [], [stairs]), id: "g", elevation: 0 };
  const upper = { ...floorOf([room("b", 0, 0, 6, 4)]), id: "u", elevation: 2.7 };
  assert.equal(stairHoles([lower, upper], upper).length, 1);
  assert.equal(stairHoles([lower, upper], lower).length, 0);
  const well: Furniture = { ...stairs, id: "w", type: "stairwell", h: 0.1 };
  const withWell = { ...upper, furniture: [well] };
  assert.equal(stairHoles([lower, withWell], withWell).length, 1, "a stairwell on its own floor");
  assert.equal(stairHoles([lower, { ...withWell, furniture: [well, { ...well, id: "w2", x: 2.5 }] }], { ...withWell, furniture: [well, { ...well, id: "w2", x: 2.5 }] }).length, 1, "overlapping ones merge");
});

test("subtracting spans from an edge leaves the free parts, in the edge's direction", () => {
  const { walls } = generateWalls([room("a", 0, 0, 6, 4)], { exterior: OUTER, interior: INNER });
  const outline = outlineOf(walls, walls.flatMap((w) => w.footprint));
  const edge = outline.edges.find((e) => Math.abs(e.a[1] - e.b[1]) < 1e-9 && Math.abs(Math.abs(e.a[0] - e.b[0]) - 6) < 0.7)!;
  const fake = (s0: number, s1: number) => ({ s0, s1, sill: 0, top: 2, info: {} as never });
  assert.equal(subtractSpans(edge, []).length, 1);
  const parts = subtractSpans(edge, [fake(2, 3)]);
  assert.equal(parts.length, 2);
  const total = parts.reduce((sum, [a, b]) => sum + Math.hypot(b[0] - a[0], b[1] - a[1]), 0);
  near(total, Math.hypot(edge.b[0] - edge.a[0], edge.b[1] - edge.a[1]) - 1, 1e-6);
  assert.equal(subtractSpans(edge, [fake(-10, 100)]).length, 0, "everything covered");
});

test("a sloping wall: its top follows the slope, above the floor height too; openings stay under it", () => {
  const sloped: Room = { ...room("a", 0, 0, 4, 3), wall_heights: [null, 2.5, null, null], wall_slopes: [null, 4.7, null, null] };
  const f = floorOf([sloped]);
  const { walls } = generateWalls(f.rooms, { exterior: OUTER, interior: INNER });
  const wall = walls.find((w) => Math.abs(w.a[0] - 4) < 1e-6 && Math.abs(w.b[0] - 4) < 1e-6)!;
  assert.equal(wallHeight(wall, 2.6), 4.7, "the highest point counts, even above the floor height");
  const [lowEnd, highEnd] = wall.a[1] < wall.b[1] ? [wall.a, wall.b] : [wall.b, wall.a];
  const tops = wallTops(wall, 2.6, roofLimits(undefined));
  near(tops.topAt(lowEnd[0], lowEnd[1]), 2.5);
  near(tops.topAt(highEnd[0], highEnd[1]), 4.7);
  near(tops.topAt((lowEnd[0] + highEnd[0]) / 2, (lowEnd[1] + highEnd[1]) / 2), 3.6);
  near(tops.lowestTop(0, 3), 2.5);
  // a roof lower than the slope still wins
  near(wallTops(wall, 2.6, roofLimits(() => 3)).topAt(highEnd[0], highEnd[1]), 3);
  // a window near the high end may be taller than one near the low end
  const windowOf = (offset: number) => ({ ...opening("window", "a", 1, offset, 0.8), sill: 1, height: 2.5 }) as Opening;
  const { openings } = placeOpenings({ ...f, openings: [windowOf(0.5), windowOf(2.5)] }, walls, bucketWalls(walls).wallBucket, roofLimits(undefined));
  const [first, second] = openings;
  assert.ok(first.top < second.top, "the one at the high end reaches higher");
  assert.ok(first.top <= 2.6 + 1e-6 && second.top <= 4.7);
  // and the walls build without error
  const geo = buildFloorGeometry(f, OUTER, INNER);
  const ys = Array.from(geo.walls.getAttribute("position").array).filter((_, i) => i % 3 === 1);
  assert.ok(Math.max(...ys) > 4.6, "the wall is drawn up to its high end");
});
