import assert from "node:assert/strict";
import { test } from "node:test";
import { gateLayout, gatesOnEdge } from "./gates.ts";
import type { OutdoorArea } from "../../model.ts";

const fence = (gates: OutdoorArea["gates"]): OutdoorArea => ({ id: "f", type: "fence", points: [[0, 0], [8, 0], [8, 4], [0, 4]], gates }) as OutdoorArea;
const near = (a: number, b: number) => Math.abs(a - b) < 1e-9;

test("a gate on an edge is found whichever way the outline runs, with its offset from the walking start", () => {
  const area = fence([{ id: "g", edge: 0, offset: 2, width: 1, kind: "single" }]);
  assert.deepEqual(gatesOnEdge(area, [0, 0], [8, 0]).map((g) => g.offset), [2]);
  assert.deepEqual(gatesOnEdge(area, [8, 0], [0, 0]).map((g) => g.offset), [6], "from the other end it is 6 m in");
  assert.equal(gatesOnEdge(area, [8, 0], [8, 4]).length, 0);
});

test("a closed single gate has one leaf across the gap; an open one swings 90° to the inside", () => {
  const closed = gateLayout([0, 0], [8, 0], { width: 1.2, kind: "single" }, 4, false)!;
  assert.ok(near(closed.from, 3.4) && near(closed.to, 4.6));
  assert.deepEqual(closed.leaves.map((l) => [l.a, l.b]), [[[3.4, 0], [4.6, 0]]]);
  const open = gateLayout([0, 0], [8, 0], { width: 1.2, kind: "single" }, 4, true)!;
  assert.deepEqual(open.leaves[0].a, [3.4, 0]);
  assert.ok(near(open.leaves[0].b[0], 3.4) && near(open.leaves[0].b[1], 1.2), "inside of a counter-clockwise outline is to the left of the walking direction");
});

test("a double gate meets in the middle when closed and opens both leaves; a sliding gate runs behind the far post", () => {
  const closed = gateLayout([0, 0], [8, 0], { width: 3, kind: "double" }, 4, false)!;
  assert.equal(closed.leaves.length, 2);
  assert.deepEqual(closed.leaves.map((l) => l.b), [[4, 0], [4, 0]]);
  const open = gateLayout([0, 0], [8, 0], { width: 3, kind: "double" }, 4, true)!;
  assert.deepEqual(open.leaves.map((l) => l.b[1]), [1.5, 1.5]);
  const slid = gateLayout([0, 0], [8, 0], { width: 3, kind: "sliding" }, 4, true)!;
  assert.ok(near(slid.leaves[0].a[0], 5.5) && near(slid.leaves[0].a[1], -0.12) && near(slid.leaves[0].b[0], 8.5));
});

test("a gate that does not fit the edge is left out or narrowed", () => {
  assert.equal(gateLayout([0, 0], [0.2, 0], { width: 1, kind: "single" }, 0.1, false), null);
  const wide = gateLayout([0, 0], [2, 0], { width: 5, kind: "single" }, 1, false)!;
  assert.ok(wide.to - wide.from <= 1.9 + 1e-9);
});
