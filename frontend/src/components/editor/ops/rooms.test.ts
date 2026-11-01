import assert from "node:assert/strict";
import { test } from "node:test";
import { box, floorWith, opening } from "../../../entities/fixtures.ts";
import type { Placement } from "../../../model.ts";
import { setWallSlope } from "./edges.ts";
import { insertCorner, areaChoice, copyOfRoom, cornerMoved, evenCeilingLights, newRoom, rectangleAfter, removeCorner, removeRoom } from "./rooms.ts";

const lamp = (id: string, x: number, z: number, extra: Partial<Placement> = {}): Placement => ({ entity_id: id, x, z, y: null, ...extra });

test("a new room has a wooden floor and rounded corners; a copy is shifted and independent", () => {
  const room = newRoom([[0, 0.12345], [2, 0], [2, 2]], "Study");
  assert.equal(room.name, "Study");
  assert.equal(room.floor_material, "wood");
  assert.equal(room.points[0][1], 0.123);
  const copy = copyOfRoom(room);
  assert.notEqual(copy.id, room.id);
  assert.deepEqual(copy.points[1], [2.5, 0.5]);
  copy.points.push([9, 9]);
  assert.equal(room.points.length, 3);
});

test("removing a room takes its devices and its openings, but not those of free walls", () => {
  const floor = floorWith([box("a", 0, 0, 4, 4), box("b", 4, 0, 8, 4)], {
    placements: [lamp("light.in_a", 1, 1), lamp("light.in_b", 6, 1)],
    openings: [opening("o1", "a", "door"), opening("o2", "b", "window"), { ...opening("o3", "a", "window"), wall: "w1" }],
  });
  removeRoom(floor, "a");
  assert.deepEqual(floor.rooms.map((r) => r.id), ["b"]);
  assert.deepEqual(floor.placements.map((p) => p.entity_id), ["light.in_b"]);
  assert.deepEqual(floor.openings.map((o) => o.id), ["o2", "o3"]);
});

test("removing a corner drops the openings on its two edges and renumbers the edges after it", () => {
  const room = { ...box("r", 0, 0, 4, 4), points: [[0, 0], [4, 0], [4, 4], [2, 5], [0, 4]] as [number, number][], wall_heights: [1, 2, 3, 4, 5] };
  const floor = floorWith([room], { openings: [{ ...opening("on0", "r", "door"), edge: 0 }, { ...opening("on1", "r", "door"), edge: 1 }, { ...opening("on2", "r", "door"), edge: 2 }, { ...opening("on4", "r", "door"), edge: 4 }] });
  assert.equal(removeCorner(floor, "r", 2), true);
  assert.equal(floor.rooms[0].points.length, 4);
  assert.deepEqual(floor.rooms[0].wall_heights, [1, 2, 4, 5]);
  // edges 1 (before the corner) and 2 (at it) are gone, edge 4 became 3
  assert.deepEqual(floor.openings.map((o) => [o.id, o.edge]), [["on0", 0], ["on4", 3]]);
});

test("a triangle keeps its three corners", () => {
  const floor = floorWith([{ ...box("t", 0, 0, 1, 1), points: [[0, 0], [1, 0], [0, 1]] }]);
  assert.equal(removeCorner(floor, "t", 0), false);
  assert.equal(floor.rooms[0].points.length, 3);
});

test("typing the left, top, width or depth of a room gives its new rectangle", () => {
  const room = box("r", 1, 2, 5, 4);
  assert.deepEqual(rectangleAfter(room, "x", 3), [[3, 2], [7, 2], [7, 4], [3, 4]]);
  assert.deepEqual(rectangleAfter(room, "z", 0), [[1, 0], [5, 0], [5, 2], [1, 2]]);
  assert.deepEqual(rectangleAfter(room, "w", 6), [[1, 2], [7, 2], [7, 4], [1, 4]]);
  assert.deepEqual(rectangleAfter(room, "d", 1), [[1, 2], [5, 2], [5, 3], [1, 3]]);
  assert.deepEqual(rectangleAfter(room, "w", 0.01), [[1, 2], [5, 2], [5, 4], [1, 4]], "too narrow: the size stays");
  assert.equal(rectangleAfter(room, "x", Number.NaN), null);
});

test("moving one coordinate of one corner", () => {
  const room = box("r", 0, 0, 2, 2);
  assert.deepEqual(cornerMoved(room, 1, 0, 3.14159), [[0, 0], [3.142, 0], [2, 2], [0, 2]]);
  assert.deepEqual(cornerMoved(room, 2, 1, 5)![2], [2, 5]);
  assert.equal(cornerMoved(room, 9, 0, 1), null);
  assert.equal(cornerMoved(room, 0, 0, Number.NaN), null);
});

test("choosing an area names a room that only had a placeholder name", () => {
  const areas = { kitchen: { name: "Kitchen" }, study: { name: "Study" } };
  assert.deepEqual(areaChoice({ ...box("r", 0, 0, 1, 1), name: "Room 3" }, "kitchen", areas), { area_id: "kitchen", name: "Kitchen" });
  assert.deepEqual(areaChoice({ ...box("r", 0, 0, 1, 1), name: "Raum 12" }, "kitchen", areas), { area_id: "kitchen", name: "Kitchen" });
  assert.deepEqual(areaChoice({ ...box("r", 0, 0, 1, 1), name: "Study" }, "kitchen", areas), { area_id: "kitchen", name: "Kitchen" }, "a name of another area is a placeholder too");
  assert.deepEqual(areaChoice({ ...box("r", 0, 0, 1, 1), name: "Lounge" }, "kitchen", areas), { area_id: "kitchen" });
  assert.deepEqual(areaChoice({ ...box("r", 0, 0, 1, 1), name: "Lounge" }, "", areas), { area_id: null });
});

test("ceiling lights spread over the room in a grid, a short last row over the full width", () => {
  const room = box("r", 0, 0, 6, 4);
  const lights = [lamp("light.a", 1, 1), lamp("light.b", 1.1, 1), lamp("light.c", 1.2, 1), lamp("light.d", 1.3, 1), lamp("light.e", 1.4, 1)];
  const spots = evenCeilingLights(room, lights);
  assert.equal(spots.length, 5);
  assert.deepEqual(spots.map((s) => s.entityId), ["light.a", "light.b", "light.c", "light.d", "light.e"]);
  assert.ok(spots.every((s) => s.x > 0 && s.x < 6 && s.z > 0 && s.z < 4));
  assert.equal(new Set(spots.map((s) => `${s.x},${s.z}`)).size, 5);
  // wall lamps, other rooms and single lights are not touched
  assert.deepEqual(evenCeilingLights(room, [lamp("light.a", 1, 1)]), []);
  assert.deepEqual(evenCeilingLights(room, [lamp("light.a", 1, 1), lamp("light.b", 2, 2, { mount: "wall" })]), []);
  assert.deepEqual(evenCeilingLights(room, [lamp("light.a", 1, 1), lamp("light.b", 20, 20)]), []);
});

test("a corner inserted on an edge splits it: heights are kept, openings stay on their half", () => {
  const floor = floorWith([{ ...box("r", 0, 0, 4, 4), wall_heights: [1, null, null, null] }], { openings: [{ ...opening("a", "r", "door"), edge: 0, offset: 1 }, { ...opening("b", "r", "door"), edge: 0, offset: 3 }, { ...opening("c", "r", "door"), edge: 1, offset: 1 }] });
  insertCorner(floor, "r", 0, [2, 0]);
  assert.deepEqual(floor.rooms[0].points[1], [2, 0]);
  assert.deepEqual(floor.rooms[0].wall_heights, [1, 1, null, null, null]);
  assert.deepEqual(floor.openings.map((o) => [o.id, o.edge, o.offset]), [["a", 0, 1], ["b", 1, 1], ["c", 2, 1]]);
  insertCorner(floor, "missing", 0, [0, 0]);
});

test("a corner on a sloping wall splits the slope: both halves meet at the height the slope has there", () => {
  const floor = floorWith([box("r", 0, 0, 4, 4)]);
  const room = floor.rooms[0];
  setWallSlope(room, 1, 2, 4);
  // edge 1 runs from (4,0) to (4,4): the new corner halfway stands at 3
  insertCorner(floor, "r", 1, [4, 2]);
  assert.deepEqual(room.wall_heights?.slice(1, 3), [2, 3]);
  assert.deepEqual(room.wall_slopes?.slice(1, 3), [3, 4]);
  // removing a corner drops the entry of the edge that began there, like the heights
  assert.equal(removeCorner(floor, "r", 2), true);
  assert.equal(room.points.length, 4);
  assert.equal(room.wall_slopes?.length, room.wall_heights?.length);
});

test("a corner on an edge without slope leaves the slopes of the other walls in place", () => {
  const floor = floorWith([box("r", 0, 0, 4, 4)]);
  const room = floor.rooms[0];
  setWallSlope(room, 2, 1, 3);
  insertCorner(floor, "r", 0, [2, 0]);
  assert.deepEqual([room.wall_heights?.[3], room.wall_slopes?.[3]], [1, 3], "the sloping wall is now edge 3");
});

test("bending a shared edge bends both rooms the same way and keeps the door on it", async () => {
  const { arcRoomEdge } = await import("./rooms.ts");
  const { box, floorWith, opening } = await import("../../../entities/fixtures.ts");
  const left = box("a", 0, 0, 4, 4);
  const right = box("b", 4, 0, 8, 4);
  const floor = floorWith([left, right], { openings: [opening("d", "a", "door", { edge: 1, offset: 2, width: 0.9 })] });
  const edge = left.points.findIndex((p, i) => p[0] === 4 && left.points[(i + 1) % 4][0] === 4);
  const before = left.points.length;
  assert.equal(arcRoomEdge(floor, "a", edge, 0.8), true);
  assert.ok(left.points.length > before);
  // a bulges into b: the corners lie right of x = 4, and b has the very same corners
  const added = left.points.filter((p) => p[0] > 4.001);
  assert.ok(added.length >= 2);
  for (const p of added) assert.ok(right.points.some((q) => q[0] === p[0] && q[1] === p[1]));
  const door = floor.openings[0];
  assert.ok(door.edge >= edge && door.edge < edge + added.length + 1);
  assert.equal((left.wall_heights ?? []).length <= left.points.length, true);
});

test("a free wall bends into a chain of walls that keeps its openings", async () => {
  const { arcFreeWall } = await import("./rooms.ts");
  const { floorWith, opening } = await import("../../../entities/fixtures.ts");
  const floor = floorWith([], { walls: [{ id: "w", a: [0, 0], b: [5, 0], thickness: 0.2 }], openings: [opening("o", "r", "window", { wall: "w", offset: 4, width: 1 })] });
  const ids = arcFreeWall(floor, "w", 1);
  assert.ok(ids.length >= 2 && ids[0] === "w");
  assert.equal(floor.walls!.length, ids.length);
  assert.ok(floor.walls!.every((w) => w.thickness === 0.2));
  assert.ok(ids.includes(floor.openings[0].wall!));
});
