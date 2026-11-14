import assert from "node:assert/strict";
import { test } from "node:test";
import { GeoBuffer } from "../geo.ts";
import { addFloorWedge, addLampHalo, addSpotCone, haloHeight, viewReach, viewSpans } from "./halos.ts";
import type { DeviceMarker } from "./types.ts";

const marker = (extra: Partial<DeviceMarker>): DeviceMarker => ({ id: "x", floorId: "g", roomId: null, x: 0, z: 0, y: 1, icon: "", name: "", text: "", active: true, unavailable: false, glow: null, ...extra }) as DeviceMarker;

test("halo heights follow the lamp model", () => {
  assert.equal(haloHeight("ceiling", 2.5, 0, 0.08), 2.43);
  assert.equal(haloHeight("wall", 2.5, 1.5, 0.2), 1.6);
  assert.ok(Math.abs(haloHeight("pendant", 2.5, 0, 3) - 0.48) < 1e-9);
});

test("a strip gets four glow points, a wall lamp one in front of its wall, any other one", () => {
  const glow = { color: [1, 1, 1] as [number, number, number], level: 1 };
  const points = { positions: [] as number[], colours: [] as number[] };
  addLampHalo(points, marker({ lamp: "strip", size: [2, 0.04, 0.03], rotation: 0, base: 2.4 }) as never, glow, 2.5);
  assert.equal(points.positions.length / 3, 4);
  assert.ok(points.colours.every((c) => Math.abs(c - 0.42) < 1e-9));
  const wall = { positions: [] as number[], colours: [] as number[] };
  addLampHalo(wall, marker({ lamp: "wall", size: [0.2, 0.12, 0.2], rotation: 0, z: 1 }) as never, glow, 2.5);
  assert.equal(wall.positions.length, 3);
  assert.ok(Math.abs(wall.positions[2] - 1.11) < 1e-9);
});

test("a spot's cone is a ring of triangles", () => {
  const buffer = new GeoBuffer();
  addSpotCone(buffer, marker({ lamp: "spot", size: [0.1, 0.1, 0.14] }) as never, { color: [1, 1, 1], level: 1 }, 2.5);
  assert.equal(buffer.count, 16 * 2);
});

test("a plugin wedge adds triangles and stops at a wall in the way, not at the wall it hangs on", () => {
  const wedge = { angle: 90, reach: 4, near: 0, color: [0, 1, 1] as [number, number, number], opacity: 0.5, through: false };
  const open = new GeoBuffer();
  const range = addFloorWedge(open, marker({ wedge, rotation: 0 }), []);
  assert.ok(range.end > range.start);
  // looking along +z: a wall 1 m ahead cuts the view, a wall 0.2 m ahead is the one it hangs on
  assert.equal(viewReach([{ a: [-9, 1], b: [9, 1] }], [0, 0], [0, 1], 0, 4), 1);
  assert.equal(viewReach([{ a: [-9, 0.2], b: [9, 0.2] }], [0, 0], [0, 1], 0, 4), 4);
  const near = new GeoBuffer();
  const r2 = addFloorWedge(near, marker({ wedge: { ...wedge, near: 1 }, rotation: 0 }), []);
  assert.equal(r2.end - r2.start, 2 * (range.end - range.start));
  assert.deepEqual(addFloorWedge(new GeoBuffer(), marker({}), []), { start: 0, end: 0 });
});

test("a low wall only casts a shadow for a camera above it, a wall as high as the camera hides everything behind it (#164)", () => {
  const wall = (height?: number) => [{ a: [-9, 2] as [number, number], b: [9, 2] as [number, number], ...(height === undefined ? {} : { height }) }];
  // a pony wall 10 cm high, the camera 2 m up: the view over it meets the floor again at 2 * 2 / 1.9
  const pony = viewSpans(wall(0.1), [0, 0], [0, 1], 0, 20, 2, 2.5);
  assert.equal(pony.length, 2);
  assert.deepEqual(pony[0], [0, 2]);
  assert.ok(Math.abs(pony[1][0] - 4 / 1.9) < 1e-9);
  assert.equal(pony[1][1], 20);
  // a wall of the floor's height (higher than the camera) hides all that lies behind it
  assert.deepEqual(viewSpans(wall(), [0, 0], [0, 1], 0, 20, 2, 2.5), [[0, 2]]);
  assert.deepEqual(viewSpans(wall(2), [0, 0], [0, 1], 0, 20, 2, 2.5), [[0, 2]], "as high as the camera");
  // no walls: the whole reach
  assert.deepEqual(viewSpans([], [0, 0], [0, 1], 0, 5, 2, 2.5), [[0, 5]]);
  // a sloping wall: low at one end, high at the other
  const slope = [{ a: [-9, 2] as [number, number], b: [9, 2] as [number, number], height: 0.1, heightEnd: 3 }];
  assert.equal(viewSpans(slope, [-8, 0], [0, 1], 0, 20, 2, 2.5).length, 2, "over its low end");
  assert.equal(viewSpans(slope, [8, 0], [0, 1], 0, 20, 2, 2.5).length, 1, "stopped by its high end");
  // the wedge keeps the stretch behind the pony wall: more triangles than behind a full wall
  const wedge = { angle: 60, reach: 20, near: 0, color: [0, 1, 1] as [number, number, number], opacity: 0.5, through: false };
  const over = new GeoBuffer();
  addFloorWedge(over, marker({ wedge, y: 2, rotation: 0 }), wall(0.1), 2.5);
  const blocked = new GeoBuffer();
  addFloorWedge(blocked, marker({ wedge, y: 2, rotation: 0 }), wall(), 2.5);
  assert.ok(over.count > blocked.count);
});
