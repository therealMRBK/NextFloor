import assert from "node:assert/strict";
import { test } from "node:test";
import { box, floorWith, opening } from "../../../entities/fixtures.ts";
import type { Building, Furniture, Placement } from "../../../model.ts";
import { copyOfFurniture, copyOfOutdoorArea, deviceForFurniture, insertOutdoorCorner, removeOutdoorCorner, edgeOf, furnitureForDevice, newFloorOpening, newFreeWall, newFurniture, newOpening, newOutdoorArea, offsetOnEdge, openingKindPatch, parkingSpotFor, placeInRoom, removeDevice, roomCentre, wallEndForLength, wallHeightPatch } from "./items.ts";
import { NO_CHANGE, NOTHING_TO_MOVE, nudge, type Nudge } from "./nudge.ts";

const sofa = (extra: Partial<Furniture> = {}): Furniture => ({ id: "s", type: "sofa", x: 1, z: 1, rotation: 0, w: 2, d: 0.9, h: 0.8, variant: null, ...extra });
const pin = (id: string, x: number, z: number, extra: Partial<Placement> = {}): Placement => ({ entity_id: id, x, z, y: null, ...extra });
const applied = (n: Nudge, floor: ReturnType<typeof floorWith>) => {
  assert.ok(typeof n === "object", `expected a change, got ${String(n)}`);
  const copy = structuredClone(floor);
  n.apply(copy);
  return copy;
};

test("free walls: rounding, a typed length that keeps the direction, and the height that means 'as high as the floor'", () => {
  const wall = newFreeWall([0, 0.1234], [3, 4.0004]);
  assert.deepEqual([wall.a, wall.b], [[0, 0.123], [3, 4]]);
  assert.deepEqual(wallEndForLength({ ...wall, a: [0, 0], b: [3, 4] }, 10), [6, 8]);
  assert.deepEqual(wallEndForLength({ ...wall, a: [0, 0], b: [3, 4] }, 0), [0.06, 0.08], "never shorter than 10 cm");
  assert.deepEqual(wallHeightPatch(2.5, 2.5), { height: null });
  assert.deepEqual(wallHeightPatch(1, 2.5), { height: 1 });
  assert.deepEqual(wallHeightPatch(0, 2.5), { height: 0.05 });
});

test("a floor opening is the drawn rectangle, and an outdoor area its outline; copies move half a metre", () => {
  const hole = newFloorOpening([1, 1], [3, 4]);
  assert.deepEqual([hole.type, hole.x, hole.z, hole.w, hole.d], ["stairwell", 2, 2.5, 2, 3]);
  const area = newOutdoorArea([[0, 0], [1, 0], [1, 1.23456]]);
  assert.equal(area.type, "lawn");
  assert.equal(area.points[2][1], 1.235);
  assert.deepEqual(copyOfOutdoorArea(area).points[0], [0.5, 0.5]);
});

test("new furniture has its type's size, and stairs reach to the floor above", () => {
  const ground = floorWith([box("r", 0, 0, 4, 4)], { elevation: 0, height: 2.5 });
  const upper = floorWith([], { id: "u", elevation: 2.8 } as never);
  const doc = { floors: [ground, upper] } as unknown as Building;
  const chair = newFurniture("sofa", doc, ground, [1.23456, 2]);
  assert.deepEqual([chair.type, chair.x, chair.z, chair.rotation], ["sofa", 1.235, 2, 0]);
  assert.equal(newFurniture("stairs", doc, ground, [0, 0]).h, 2.8);
  assert.equal(newFurniture("stairs", doc, upper, [0, 0]).h, 2.75, "no floor above: a little over the ceiling");
});

test("a copy of furniture is moved by 30 cm and independent; a vehicle becomes a parking spot that holds it", () => {
  const original = sofa({ name: "Ledersofa" });
  const copy = copyOfFurniture(original);
  assert.deepEqual([copy.x, copy.z], [1.3, 1.3]);
  assert.notEqual(copy.id, original.id);
  const spot = parkingSpotFor({ ...sofa({ type: "tesla", w: 2, d: 5, name: "Model Y" }) });
  assert.equal(spot.type, "parking");
  assert.equal(spot.vehicle, "tesla");
  assert.equal(spot.name, "Model Y");
  assert.ok(spot.w >= 2.5 && spot.d >= 5.4);
});

test("device and furniture can stand in for each other and keep place, turn, name and lock", () => {
  const furniture = furnitureForDevice(pin("media_player.tv", 2, 3, { rotation: 90, name: "TV", locked: true }), "tv");
  assert.deepEqual([furniture.x, furniture.z, furniture.rotation, furniture.entity, furniture.name, furniture.locked], [2, 3, 90, "media_player.tv", "TV", true]);
  const back = deviceForFurniture(sofa({ rotation: 180, name: "Lamp" }), "light.x");
  assert.deepEqual([back.entity_id, back.rotation, back.name, back.y], ["light.x", 180, "Lamp", null]);
  assert.equal("name" in deviceForFurniture(sofa(), "light.x"), false);
});

test("removing a device takes its ceiling lamp too, on every floor", () => {
  const doc = {
    floors: [floorWith([], { placements: [pin("light.a", 1, 1), pin("sensor.b", 1, 1)], furniture: [sofa({ id: "l", type: "lamp_ceiling", entity: "light.a" }), sofa({ id: "keep" })] }), floorWith([], { id: "u", placements: [pin("light.a", 2, 2)] } as never)],
  } as unknown as Building;
  removeDevice(doc, "light.a");
  assert.deepEqual(doc.floors[0].placements.map((p) => p.entity_id), ["sensor.b"]);
  assert.deepEqual(doc.floors[0].furniture.map((f) => f.id), ["keep"]);
  assert.equal(doc.floors[1].placements.length, 0);
});

test("placing entities in a room: lights become ceiling lamps, others pins, and ones placed elsewhere move over", () => {
  const room = box("r", 0, 0, 5, 4);
  const floor = floorWith([room, box("q", 5, 0, 9, 4)], { placements: [pin("sensor.moves", 7, 2)] });
  const doc = { floors: [floor] } as unknown as Building;
  placeInRoom(doc, floor, room, ["light.new", "sensor.moves", "switch.s"]);
  const lamps = floor.furniture.filter((f) => f.type === "lamp_ceiling");
  assert.deepEqual(lamps.map((l) => l.entity), ["light.new"]);
  assert.deepEqual(floor.placements.map((p) => p.entity_id).sort(), ["sensor.moves", "switch.s"]);
  assert.ok(floor.placements.every((p) => p.x > 0 && p.x < 5), "inside the room");
  assert.deepEqual(roomCentre(room), [2.5, 2]);
});

test("an opening dropped on an edge snaps to the grid and stays inside the edge", () => {
  assert.equal(offsetOnEdge(4, 1.23, 0.9, 0.1), 1.2);
  assert.equal(offsetOnEdge(4, 0, 0.9, 0.1), 0.45);
  assert.equal(offsetOnEdge(4, 9, 0.9, 0.1), 3.55);
  assert.equal(offsetOnEdge(4, 1.234, 0.9, 0), 1.234);
  assert.equal(offsetOnEdge(0.5, 3, 0.9, 0.1), 0.25, "narrower than the opening: its middle");
});

test("a new door or window follows its preset, narrowed to fit short edges", () => {
  const host = { roomId: "r", edge: 2, length: 4, offset: (width: number) => width / 2 };
  const door = newOpening("door", host);
  assert.deepEqual([door.type, door.width, door.height, door.leaves, door.offset, door.edge], ["door", 0.9, 2.05, 1, 0.45, 2]);
  const narrow = newOpening("window_double", { ...host, length: 1, wall: "w" });
  assert.equal(narrow.width, 0.9);
  assert.equal(narrow.wall, "w");
  assert.equal(newOpening("garage", { ...host, length: 0.2 }).width, 0.3);
});

test("changing the kind of an opening keeps its width only when its shape stays the same", () => {
  const door = newOpening("door", { roomId: "r", edge: 0, length: 5, offset: () => 1 });
  assert.equal("width" in openingKindPatch({ ...door, width: 1.1 }, "door"), false);
  const patch = openingKindPatch({ ...door, width: 1.1 }, "window");
  assert.deepEqual([patch.type, patch.width, patch.sill, patch.style], ["window", 1.2, 0.9, null]);
  assert.equal(openingKindPatch(door, "front").style, "front");
  // a lift-and-slide door slides; changing it back into a terrace door turns again
  const slide = openingKindPatch(door, "lift_slide");
  assert.deepEqual([slide.type, slide.opens, slide.sill], ["window", "slide", 0]);
  assert.equal(openingKindPatch({ ...door, ...slide } as typeof door, "terrace").opens, null);
});

test("a new glass wall or lift-and-slide door keeps its preset's look and way of opening; doors stay automatic", () => {
  const host = { roomId: "r", edge: 0, length: 5, offset: () => 1 };
  assert.equal(newOpening("glass_wall", host).style, "glass_wall");
  assert.equal(newOpening("lift_slide", host).opens, "slide");
  assert.equal(newOpening("door", host).style, undefined);
  assert.equal(newOpening("front", host).style, undefined);
});

test("the edge an opening sits on, for rooms and free walls", () => {
  const floor = floorWith([box("r", 0, 0, 4, 3)], { walls: [{ id: "w1", a: [0, 5], b: [3, 5], thickness: null }] } as never);
  assert.deepEqual(edgeOf({ ...opening("o", "r", "door"), edge: 1 }, floor), [[4, 0], [4, 3]]);
  assert.deepEqual(edgeOf({ ...opening("o", "x", "door"), wall: "w1" }, floor), [[0, 5], [3, 5]]);
  assert.equal(edgeOf({ ...opening("o", "nope", "door"), edge: 0 }, floor), null);
});

test("arrow keys move furniture, devices, walls and outdoor areas by the step", () => {
  const floor = floorWith([box("r", 0, 0, 4, 4)], {
    furniture: [sofa()],
    placements: [pin("light.a", 2, 2)],
    walls: [{ id: "w", a: [0, 0], b: [1, 0], thickness: null }],
    outdoor: [{ id: "o", type: "lawn", points: [[0, 0], [1, 0], [1, 1]] }],
  } as never);
  assert.deepEqual(applied(nudge(floor, { kind: "furniture", id: "s" }, 0.1, -0.05), floor).furniture[0].x, 1.1);
  assert.equal(applied(nudge(floor, { kind: "device", id: "light.a" }, 0.1, -0.05), floor).placements[0].z, 1.95);
  const wall = applied(nudge(floor, { kind: "wall", id: "w" }, 1, 0), floor).walls![0];
  assert.deepEqual([wall.a, wall.b], [[1, 0], [2, 0]]);
  assert.deepEqual(applied(nudge(floor, { kind: "outdoor", id: "o" }, 0, 1), floor).outdoor[0].points[2], [1, 2]);
  assert.equal(nudge(floor, { kind: "device", id: "light.missing" }, 1, 0), NOTHING_TO_MOVE);
});

test("a room moves with the devices inside it, a selected corner moves alone", () => {
  const floor = floorWith([box("r", 0, 0, 4, 4)], { placements: [pin("light.in", 1, 1), pin("light.out", 9, 9)] });
  const room = applied(nudge(floor, { kind: "room", id: "r", corner: null }, 1, 0), floor);
  assert.deepEqual(room.rooms[0].points[0], [1, 0]);
  assert.deepEqual(room.placements.map((p) => p.x), [2, 9]);
  const corner = applied(nudge(floor, { kind: "room", id: "r", corner: 2 }, 0, 0.5), floor);
  assert.deepEqual(corner.rooms[0].points.map((p) => p[1]), [0, 0, 4.5, 4]);
  assert.deepEqual(corner.placements.map((p) => p.x), [1, 9]);
  assert.equal(nudge(floor, { kind: "room", id: "nope", corner: null }, 1, 0), NOTHING_TO_MOVE);
});

test("an opening slides along its wall only: across it nothing changes, and it stays within the edge", () => {
  const floor = floorWith([box("r", 0, 0, 4, 3)], { openings: [{ ...opening("o", "r", "door"), edge: 0, offset: 1, width: 1 }] });
  assert.equal(applied(nudge(floor, { kind: "opening", id: "o" }, 0.5, 0), floor).openings[0].offset, 1.5);
  assert.equal(nudge(floor, { kind: "opening", id: "o" }, 0, 1), NO_CHANGE, "edge 0 runs along x");
  assert.equal(applied(nudge(floor, { kind: "opening", id: "o" }, 10, 0), floor).openings[0].offset, 3.5);
  assert.equal(applied(nudge(floor, { kind: "opening", id: "o" }, -10, 0), floor).openings[0].offset, 0.5);
  assert.equal(nudge(floor, { kind: "opening", id: "gone" }, 1, 0), NOTHING_TO_MOVE);
});

import { outdoorRectangleAfter } from "./items.ts";

test("an outdoor area's rectangle follows typed values and never gets thinner than 10 cm", () => {
  const area = newOutdoorArea([[0, 0], [4, 0], [4, 2], [0, 2]]);
  assert.deepEqual(outdoorRectangleAfter(area, "x", 1), [[1, 0], [5, 0], [5, 2], [1, 2]]);
  assert.deepEqual(outdoorRectangleAfter(area, "w", 6), [[0, 0], [6, 0], [6, 2], [0, 2]]);
  assert.deepEqual(outdoorRectangleAfter(area, "d", 0), [[0, 0], [4, 0], [4, 0.1], [0, 0.1]]);
});

test("an outdoor area gets a corner in the middle of an edge and gives one back, but never drops below three", () => {
  const pool = newOutdoorArea([[0, 0], [4, 0], [4, 3], [0, 3]]);
  insertOutdoorCorner(pool, 1, [4.0004, 1.5]);
  assert.deepEqual(pool.points, [[0, 0], [4, 0], [4, 1.5], [4, 3], [0, 3]]);
  insertOutdoorCorner(pool, 4, [0, 1.5]);
  assert.equal(pool.points.length, 6, "the closing edge (last corner back to the first) can be split too");
  assert.deepEqual(pool.points[5], [0, 1.5]);
  assert.equal(removeOutdoorCorner(pool, 2), true);
  assert.equal(removeOutdoorCorner(pool, 2), true);
  assert.equal(removeOutdoorCorner(pool, 2), true);
  assert.equal(pool.points.length, 3);
  assert.equal(removeOutdoorCorner(pool, 0), false);
});
