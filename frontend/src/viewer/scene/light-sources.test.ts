import assert from "node:assert/strict";
import { test } from "node:test";
import { box, floorWith } from "../../entities/fixtures.ts";
import { HANGING_LAMPS, lightOrigin } from "./lamp-data.ts";
import { lightSourcesOf } from "./light-sources.ts";
import type { DeviceMarker } from "./types.ts";

const marker = (extra: Partial<DeviceMarker>): DeviceMarker =>
  ({ id: "light.a", floorId: "g", roomId: "r", x: 1, z: 1, y: 1, icon: "", name: "", text: "", active: true, unavailable: false, glow: { color: [1, 0.5, 0], level: 1 }, ...extra }) as DeviceMarker;
const floor = floorWith([box("r", 0, 0, 4, 4)], { height: 2.5 });
const on = (m: DeviceMarker) => m.glow;

test("a ceiling lamp lights from just under the ceiling, a floor lamp from near its top", () => {
  assert.deepEqual(lightOrigin("ceiling", 2.5, 0, 0.08), [2.38, "ceiling"]);
  const [y, kind] = lightOrigin("floor", 2.5, 0, 1.7);
  assert.equal(kind, "omni");
  assert.ok(Math.abs(y - 1.55) < 1e-9);
  assert.deepEqual(lightOrigin("pendant", 2.5, 0, 3), [0.5, "pendant"], "a long pendant never hangs lower than 50 cm");
});

test("only lamps that are on and on this floor give light", () => {
  const sources = lightSourcesOf(floor, null, [marker({ lamp: "ceiling" }), marker({ id: "light.b", glow: null }), marker({ id: "light.c", floorId: "other" })], on);
  assert.equal(sources.length, 1);
  assert.deepEqual([sources[0].kind, sources[0].color, sources[0].level], ["ceiling", [1, 0.5, 0], 1]);
});

test("a marker without a lamp model is an all-round light at its own height, and a given light height wins", () => {
  const [plain] = lightSourcesOf(floor, null, [marker({ y: 0.8 })], on);
  assert.deepEqual([plain.kind, plain.y], ["omni", 0.8]);
  const [fixed] = lightSourcesOf(floor, null, [marker({ lamp: "ceiling", lightY: 1.1 })], on);
  assert.equal(fixed.y, 1.1);
});

test("a strip is three lights along its length with a share of the level; standing up it climbs", () => {
  const strip = lightSourcesOf(floor, null, [marker({ lamp: "strip", size: [2, 0.04, 0.03], rotation: 0, base: 2.4 })], on);
  assert.equal(strip.length, 3);
  assert.deepEqual(strip.map((s) => Math.round(s.x * 100) / 100), [0.33, 1, 1.67]);
  assert.ok(strip.every((s) => Math.abs(s.level - 0.55) < 1e-9 && s.kind === "ceiling"));
  const upright = lightSourcesOf(floor, null, [marker({ lamp: "strip", size: [1.2, 0.04, 0.03], upright: true, base: 0 })], on);
  assert.deepEqual(upright.map((s) => s.kind), ["omni", "omni", "omni"]);
  assert.ok(upright[0].y < upright[1].y && upright[1].y < upright[2].y);
  const low = lightSourcesOf(floor, null, [marker({ lamp: "strip", base: 0.2, size: [1, 0.04, 0.03] })], on);
  assert.equal(low[0].kind, "up", "a low strip washes the wall upwards");
  const rolled = lightSourcesOf(floor, null, [marker({ lamp: "strip", base: 2.4, roll: 90, size: [1, 0.04, 0.03] })], on);
  assert.equal(rolled[0].kind, "omni");
});

test("rooms joined by an open wall share one light zone", () => {
  const [s] = lightSourcesOf(floor, [5], [marker({ lamp: "ceiling" })], on);
  assert.equal(s.room, 5);
});

test("hanging lamps are the ceiling kinds", () => {
  assert.equal(HANGING_LAMPS.has("pendant"), true);
  assert.equal(HANGING_LAMPS.has("floor"), false);
});

test("a rising strip climbs along its length from its mount height, and one under the ceiling falls away from it", () => {
  const level = lightSourcesOf(floor, null, [marker({ lamp: "strip", size: [2, 0.04, 0.03], rotation: 0, base: 1 })], on);
  const rising = lightSourcesOf(floor, null, [marker({ lamp: "strip", size: [2, 0.04, 0.03], rotation: 0, base: 1, rise: 30 })], on);
  assert.ok(rising[0].y < rising[1].y && rising[1].y < rising[2].y, "climbs towards its +x end");
  // the low end stays at the mount height: the middle is half the strip's rise above the level strip's
  assert.ok(Math.abs(rising[1].y - level[1].y - Math.sin(Math.PI / 6)) < 1e-9);
  // the run along the floor is shorter than the strip
  assert.ok(rising[2].x - rising[0].x < level[2].x - level[0].x);
  const underCeiling = lightSourcesOf(floor, null, [marker({ lamp: "strip", size: [2, 0.04, 0.03], rotation: 0, rise: 30 })], on);
  const flatCeiling = lightSourcesOf(floor, null, [marker({ lamp: "strip", size: [2, 0.04, 0.03], rotation: 0 })], on);
  assert.ok(underCeiling[2].y <= flatCeiling[2].y + 1e-9, "its high end stays under the ceiling");
});
