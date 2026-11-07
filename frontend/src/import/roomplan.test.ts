import assert from "node:assert/strict";
import { test } from "node:test";
import { importRoomPlan, isRoomPlan } from "./roomplan.ts";

/** A column-major 4×4 transform: the width axis points along (dx, dz), the centre is (x, y, z). */
const tf = (x: number, y: number, z: number, dx = 1, dz = 0) => [dx, 0, dz, 0, 0, 1, 0, 0, -dz, 0, dx, 0, x, y, z, 1];
const wall = (x: number, z: number, dx: number, dz: number, width: number) => ({ category: { wall: {} }, dimensions: [width, 2.6, 0.1], transform: tf(x, 1.3 - 0.9, z, dx, dz) });

// a 4 m × 3 m room whose corner lies at (10, 20), the phone 0.9 m above the floor (origin height)
const room = () => ({
  version: 2,
  walls: [wall(12, 20, 1, 0, 4), wall(14, 21.5, 0, 1, 3), wall(12, 23, -1, 0, 4), wall(10, 21.5, 0, -1, 3)],
  doors: [{ category: { door: { isOpen: false } }, dimensions: [0.9, 2.05, 0.1], transform: tf(11, 1.025 - 0.9 - 0.4 + 0.4 + 0.0 - 0.0 + (-0.9 + 0.9) - 0.125 + 0.125 - 0.0, 23) }],
  windows: [{ category: { window: {} }, dimensions: [1.2, 1.2, 0.1], transform: tf(14, 0.4 + 0.6 + 0.9 - 0.9 - 0.4 + 0.4 - 0.0, 21.5, 0, 1) }],
  objects: [{ category: { sofa: {} }, dimensions: [2, 0.9, 0.9], transform: tf(12, 0.2, 21.5) }, { category: { fireplace: {} }, dimensions: [1, 1, 1], transform: tf(12, 0, 22) }],
});

test("the walls of a scan become a room whose corner is near the origin", () => {
  assert.ok(isRoomPlan(room()));
  const { building, report } = importRoomPlan(room());
  const pts = building.floors[0].rooms[0].points;
  assert.equal(pts.length, 4);
  const xs = pts.map((p) => p[0]);
  const zs = pts.map((p) => p[1]);
  assert.deepEqual([Math.min(...xs), Math.min(...zs)], [0.5, 0.5]);
  assert.ok(Math.abs(Math.max(...xs) - Math.min(...xs) - 4) < 0.05 && Math.abs(Math.max(...zs) - Math.min(...zs) - 3) < 0.05, "4 m × 3 m");
  assert.equal(report.rooms, 1);
});

test("doors and windows sit on the wall they are nearest to, windows with their sill", () => {
  const { building } = importRoomPlan(room());
  const [door, win] = [building.floors[0].openings.find((o) => o.type === "door")!, building.floors[0].openings.find((o) => o.type === "window")!];
  assert.ok(door && win);
  assert.equal(door.width, 0.9);
  assert.ok(win.sill > 0.2 && win.sill < 1.5, `sill ${win.sill}`);
  assert.notEqual(door.edge, win.edge, "on different walls");
});

test("known objects become furniture and the rest is counted as skipped", () => {
  const { building, report } = importRoomPlan(room());
  assert.deepEqual(building.floors[0].furniture.map((f) => f.type), ["sofa"]);
  assert.equal(report.furniture, 1, "the fireplace was not taken over");
});

test("a structure with several rooms gives several rooms, and a plan file is not taken for a scan", () => {
  assert.equal(importRoomPlan({ rooms: [room(), room()] }).building.floors[0].rooms.length, 2);
  assert.ok(!isRoomPlan({ version: 1, floors: [], settings: {} }));
  assert.throws(() => importRoomPlan({ walls: [] }), /roomplan_empty/);
});

test("walls that do not close fall back to a rectangle round all of them", () => {
  const open = { walls: [wall(12, 20, 1, 0, 4), wall(14, 21.5, 0, 1, 3)] };
  const pts = importRoomPlan(open).building.floors[0].rooms[0].points;
  assert.equal(pts.length, 4);
});
