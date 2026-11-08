import assert from "node:assert/strict";
import { test } from "node:test";
import { entity, hassOf } from "../entities/fixtures.ts";
import { calibrationFrom, gridMapper, gridPlaces, gridTurn, mapCamera, readVacuum, type VacuumCalibration } from "./vacuum-map.ts";

/** Two decimals, so a test can compare pairs without float noise. */
const r2 = (v: number) => Math.round(v * 100) / 100;
const pair2 = (p: [number, number]) => p.map(r2);

/** 10 m of plan over 100 grid units, no turn: 0.1 m per unit. */
const CAL: VacuumCalibration = { a: [0, 0], ga: [0, 0], b: [10, 0], gb: [100, 0] };

test("two places known in both frames tie the grid to the plan", () => {
  const map = gridMapper(CAL)!;
  assert.deepEqual(pair2(map([0, 0])), [0, 0]);
  assert.deepEqual(pair2(map([100, 0])), [10, 0]);
  assert.deepEqual(pair2(map([0, 50])), [0, 5], "grid +y runs along plan +z");
  assert.deepEqual(pair2(map([50, 50])), [5, 5], "and in between it scales as well");
});

test("a grid that is turned relative to the plan turns with it", () => {
  // grid +x is plan +z: a quarter turn to the left
  const cal: VacuumCalibration = { a: [0, 0], ga: [0, 0], b: [0, 10], gb: [100, 0] };
  const map = gridMapper(cal)!;
  assert.deepEqual(pair2(map([100, 0])), [0, 10]);
  assert.deepEqual(pair2(map([0, 100])), [-10, 0]);
  assert.ok(Math.abs(gridTurn(cal)! - Math.PI / 2) < 1e-9);
});

test("the plan points do not have to sit at the grid's origin", () => {
  // the same shape, shifted: a place at grid (0,0) is at plan (3,-2)
  const cal: VacuumCalibration = { a: [3, -2], ga: [0, 0], b: [13, -2], gb: [100, 0] };
  const map = gridMapper(cal)!;
  assert.deepEqual(pair2(map([0, 0])), [3, -2]);
  assert.deepEqual(pair2(map([100, 100])), [13, 8]);
});

test("a mirrored map is met by mirroring its grid", () => {
  // the same two places, but this camera's y grows along plan -z: grid +y is plan -z
  const cal: VacuumCalibration = { ...CAL, mirror: true };
  const map = gridMapper(cal)!;
  assert.deepEqual(pair2(map([0, 0])), [0, 0]);
  assert.deepEqual(pair2(map([100, 0])), [10, 0], "the two calibration places still land where they belong");
  assert.deepEqual(pair2(map([0, 50])), [0, -5], "grid +y now runs along plan -z");
  assert.deepEqual(pair2(map([50, 50])), [5, -5]);
  assert.equal(gridTurn(cal), gridTurn(CAL), "the turn between the two places is unchanged");
});

test("a mirrored map reads its facings the other way round", () => {
  const cal: VacuumCalibration = { ...CAL, mirror: true };
  // facing grid +y, which on this map is plan -z
  const hass = hassOf([entity("camera.map", "idle", { vacuum_position: { x: 0, y: 0, a: 90 } })]);
  const live = readVacuum(hass, "camera.map", cal)!;
  assert.ok(Math.abs(Math.abs(live.pose!.heading) - Math.PI) < 1e-9, `heading ${live.pose!.heading}`);
});

test("two places on top of each other say nothing about scale or direction", () => {
  assert.equal(gridMapper({ ...CAL, b: [0, 0] }), null, "the same plan point twice");
  assert.equal(gridMapper({ ...CAL, gb: [0, 0] }), null, "the same grid point twice");
  assert.equal(gridMapper(null), null);
  assert.equal(gridMapper(undefined), null);
});

test("the map camera is found by the attributes it carries, without being configured", () => {
  const hass = hassOf([entity("camera.a", "idle"), entity("camera.map", "idle", { vacuum_position: { x: 1, y: 2, a: 0 } })]);
  assert.equal(mapCamera(hass), "camera.map");
  assert.equal(mapCamera(hassOf([entity("camera.a", "idle")])), null, "nothing to find");
});

test("the live map reads pose, dock and trail in plan metres", () => {
  const hass = hassOf([
    entity("camera.map", "idle", {
      vacuum_position: { x: 100, y: 50, a: 90 },
      charger: { x: 0, y: 0 },
      path: [
        [
          [0, 0],
          [100, 0],
          [100, 50],
        ],
      ],
    }),
  ]);
  const live = readVacuum(hass, "camera.map", CAL)!;
  assert.ok(live, "the attributes are there");
  assert.deepEqual(pair2(live.pose ? [live.pose.x, live.pose.z] : [0, 0]), [10, 5]);
  // a heading of 90 in the grid faces grid +y, which is plan +z — and a heading of 0 faces +z
  assert.ok(Math.abs(live.pose!.heading) < 1e-9, `heading ${live.pose!.heading}`);
  assert.deepEqual(pair2(live.charger!), [0, 0]);
  assert.equal(live.path.length, 1, "one segment");
  assert.equal(live.path[0].length, 3, "three points in it");
  assert.deepEqual(pair2(live.path[0][2]), [10, 5], "the trail ends where the robot is");
});

test("facing along the grid's x is a quarter turn on the plan", () => {
  const hass = hassOf([entity("camera.map", "idle", { vacuum_position: { x: 0, y: 0, a: 0 } })]);
  const live = readVacuum(hass, "camera.map", CAL)!;
  assert.ok(Math.abs(live.pose!.heading - Math.PI / 2) < 1e-9, "0 faces +z, so +x is a quarter turn");
});

test("without a camera or without attributes there is nothing to draw", () => {
  const hass = hassOf([entity("camera.map", "idle", {})]);
  assert.equal(readVacuum(hass, "camera.map", CAL), null, "no attributes at all");
  assert.equal(readVacuum(hass, null, CAL), null, "no camera");
  assert.equal(readVacuum(hass, "camera.gone", CAL), null, "a camera that is not there");
});

test("a trail of one point is no trail", () => {
  const hass = hassOf([entity("camera.map", "idle", { path: [[[0, 0]]] })]);
  assert.equal(readVacuum(hass, "camera.map", CAL), null, "a single point is nothing to draw");
  // a single point next to a pose still leaves no trail, but the robot itself is drawn
  const withPose = hassOf([entity("camera.map", "idle", { vacuum_position: { x: 0, y: 0, a: 0 }, path: [[[0, 0]]] })]);
  const live = readVacuum(withPose, "camera.map", CAL)!;
  assert.equal(live.path.length, 0, "a single point says nothing about a way");
  assert.ok(live.pose, "but the robot is there");
});

test("a trail is read whether it comes as one run or as several", () => {
  // the map card's format: a single run of points
  const flat = hassOf([entity("camera.map", "idle", { vacuum_position: { x: 100, y: 50, a: 0 }, path: [[0, 0], [100, 0], [100, 50]] })]);
  const one = readVacuum(flat, "camera.map", CAL)!;
  assert.equal(one.path.length, 1, "one run");
  assert.equal(one.path[0].length, 3, "with all three points");
  assert.deepEqual(pair2(one.path[0][2]), [10, 5]);
  // NarwalIntegration's: two runs, a gap between them
  const split = hassOf([
    entity("camera.map", "idle", {
      vacuum_position: { x: 100, y: 50, a: 0 },
      path: [
        [[0, 0], [100, 0]],
        [[100, 50], [200, 50]],
      ],
    }),
  ]);
  const two = readVacuum(split, "camera.map", CAL)!;
  assert.equal(two.path.length, 2, "two runs");
  assert.deepEqual(pair2(two.path[1][1]), [20, 5]);
});

test("a camera that only knows where the dock is still counts as a robot map", () => {
  const hass = hassOf([entity("camera.dock_only", "idle", { charger: { x: 10, y: 10 } })]);
  assert.equal(mapCamera(hass), "camera.dock_only");
});

test("the dock and one place the robot is at are enough to calibrate", () => {
  const dock = { plan: [0, 0] as [number, number], grid: [100, 100] as [number, number] };
  // the robot is 4 m to plan +x, and its grid says +40 cells: 0.1 m per cell, no turn
  const res = calibrationFrom(dock, { plan: [4, 0], grid: [140, 100] }, false);
  assert.ok(res.cal, "a workable pair");
  const map = gridMapper(res.cal)!;
  assert.deepEqual(pair2(map([100, 100])), [0, 0], "the dock lands on the dock");
  assert.deepEqual(pair2(map([140, 100])), [4, 0], "and the robot where it was tapped");
  assert.deepEqual(pair2(map([140, 140])), [4, 4], "grid +y runs along plan +z without mirror");
});

test("a mirrored map puts the same places on the other side", () => {
  const dock = { plan: [0, 0] as [number, number], grid: [100, 100] as [number, number] };
  const res = calibrationFrom(dock, { plan: [4, 0], grid: [140, 100] }, true);
  assert.ok(res.cal);
  assert.deepEqual(pair2(gridMapper(res.cal)!.call(null, [140, 140])), [4, -4], "grid +y runs along plan -z");
});

test("places too close for the turn, or a scale that makes no sense, are refused", () => {
  const dock = { plan: [0, 0] as [number, number], grid: [100, 100] as [number, number] };
  const close = calibrationFrom(dock, { plan: [0.4, 0], grid: [104, 100] });
  assert.equal(close.cal, null, "half a metre apart is guesswork");
  assert.equal(close.cal === null && close.reason, "close");
  const same = calibrationFrom(dock, { plan: [4, 0], grid: [100, 100] });
  assert.equal(same.cal === null && same.reason, "close", "the robot has not moved on its map");
  const wild = calibrationFrom(dock, { plan: [4, 0], grid: [100.001, 100] });
  assert.equal(wild.cal === null && wild.reason, "scale", "4 m in a thousandth of a cell");
});

test("the grid places come from the camera, and are null without one", () => {
  const hass = hassOf([entity("camera.map", "idle", { vacuum_position: { x: 12, y: 34, a: 90 }, charger: { x: 1, y: 2 } })]);
  assert.deepEqual(gridPlaces(hass, "camera.map"), { at: [12, 34], dock: [1, 2] });
  assert.deepEqual(gridPlaces(hass, null), { at: null, dock: null });
  assert.deepEqual(gridPlaces(hass, "camera.gone"), { at: null, dock: null });
});

test("Dreame's map camera names the dock charger_position and may have no trail (#109)", () => {
  const hass = hassOf([entity("camera.dreame_map", "idle", { vacuum_position: { x: 100, y: 50, a: 0 }, charger_position: { x: 20, y: 10 } })]);
  assert.equal(mapCamera(hassOf([entity("camera.dreame_map", "idle", { charger_position: { x: 20, y: 10 } })])), "camera.dreame_map", "found by the dock alone");
  assert.deepEqual(gridPlaces(hass, "camera.dreame_map"), { at: [100, 50], dock: [20, 10] });
  const live = readVacuum(hass, "camera.dreame_map", CAL)!;
  assert.deepEqual(pair2(live.charger!), [2, 1]);
  assert.deepEqual(live.path, [], "no path attribute: no invented trail");
});
