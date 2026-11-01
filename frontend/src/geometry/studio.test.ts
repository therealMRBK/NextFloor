import assert from "node:assert/strict";
import { test } from "node:test";
import { DEFAULT_STUDIO, frontOfRow, studioCols, studioConfig, studioMount } from "./studio.ts";

test("studio settings get defaults and limits; shelves are always open, wall units have no base", () => {
  assert.deepEqual(studioConfig({}), DEFAULT_STUDIO);
  assert.equal(studioConfig({ studio: { kind: "shelf", front: "doors" } }).front, "open");
  assert.equal(studioConfig({ studio: { kind: "wall", base: "legs" } }).base, "none");
  assert.equal(studioConfig({ studio: { rows: 50, cols: 0 } }).rows, 10);
  assert.equal(studioConfig({ studio: { cols: 0 } }).cols, 1);
});

test("columns follow the width unless set; mixed units have drawers below and doors above", () => {
  assert.equal(studioCols(DEFAULT_STUDIO, 1.8), 3);
  assert.equal(studioCols({ ...DEFAULT_STUDIO, cols: 5 }, 1.8), 5);
  const mixed = { ...DEFAULT_STUDIO, rows: 4, front: "mixed" as const };
  assert.deepEqual([0, 1, 2, 3].map((r) => frontOfRow(mixed, r)), ["drawer", "drawer", "door", "door"]);
});

test("wall units hang at kitchen wall cabinet height", () => {
  assert.equal(studioMount({ studio: { kind: "wall" } }), 1.45);
  assert.equal(studioMount({}), 0);
});
