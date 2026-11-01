import assert from "node:assert/strict";
import { test } from "node:test";
import { DEFAULT_STAIR, STAIR_SHAPES, STAIR_SIZES, convexHull, stairConfig, stairLayout, stairOpening, stairOpeningInPlan, type StairConfig } from "./stairs.ts";

const cfg = (patch: Partial<StairConfig> = {}): StairConfig => ({ ...DEFAULT_STAIR, ...patch });
const area = (ring: [number, number][]) => Math.abs(ring.reduce((s, p, i) => s + p[0] * ring[(i + 1) % ring.length][1] - ring[(i + 1) % ring.length][0] * p[1], 0) / 2);

test("stairConfig fills in defaults and rejects nonsense", () => {
  assert.deepEqual(stairConfig({}), DEFAULT_STAIR);
  const c = stairConfig({ stair: { shape: "spiral", turn: "left", steps: 99, run_width: -1, rail: "both" } });
  assert.equal(c.shape, "spiral");
  assert.equal(c.turn, "left");
  assert.equal(c.steps, 40);
  assert.equal(c.run_width, null);
  assert.equal(c.rail, "both");
  assert.equal(stairConfig({ stair: { shape: "zigzag" as never } }).shape, "straight");
});

test("every shape has one tread per riser, rising evenly to the full height", () => {
  for (const shape of STAIR_SHAPES) {
    const [w, d] = STAIR_SIZES[shape];
    const layout = stairLayout(cfg({ shape }), w, d, 2.8);
    assert.equal(layout.treads.length, layout.steps, shape);
    assert.ok(Math.abs(layout.treads.at(-1)!.top - 2.8) < 1e-9, shape);
    assert.ok(Math.abs(layout.rise - 2.8 / layout.steps) < 1e-9, shape);
    for (const t of layout.treads) assert.ok(t.poly.length >= 3 && area(t.poly) > 0.005, `${shape}: tread has an area`);
  }
});

test("treads stay inside the footprint", () => {
  for (const shape of STAIR_SHAPES) {
    const [w, d] = STAIR_SIZES[shape];
    for (const turn of ["left", "right"] as const) {
      for (const t of stairLayout(cfg({ shape, turn }), w, d, 2.8).treads) {
        for (const [x, z] of t.poly) assert.ok(Math.abs(x) <= w / 2 + 1e-6 && Math.abs(z) <= d / 2 + 1e-6, `${shape} ${turn}: ${x},${z}`);
      }
    }
  }
});

test("turned stairs keep their area: treads plus landings cover the flights", () => {
  const [w, d] = [2.2, 2.8];
  const total = (shape: StairConfig["shape"]) => stairLayout(cfg({ shape, run_width: 1 }), w, d, 2.8).treads.reduce((s, t) => s + area(t.poly), 0);
  // L and quarter turn: two strips 1 m wide forming an L
  const l = 1 * d + 1 * (w - 1);
  assert.ok(Math.abs(total("l") - l) < 1e-6);
  assert.ok(Math.abs(total("quarter") - l) < 1e-6);
});

test("a left turn mirrors a right turn", () => {
  const right = stairLayout(cfg({ shape: "l" }), 2.2, 2.8, 2.8);
  const left = stairLayout(cfg({ shape: "l", turn: "left" }), 2.2, 2.8, 2.8);
  const xsRight = right.treads.flatMap((t) => t.poly.map((p) => p[0])).sort((a, b) => a - b);
  const xsLeft = left.treads.flatMap((t) => t.poly.map((p) => -p[0])).sort((a, b) => a - b);
  assert.deepEqual(xsLeft.map((v) => v.toFixed(6)), xsRight.map((v) => v.toFixed(6)));
});

test("stairs going down fall from the floor to the full depth", () => {
  const layout = stairLayout(cfg({ down: true }), 1, 3.2, 2.6);
  assert.ok(layout.treads[0].top < 0);
  assert.ok(Math.abs(layout.treads.at(-1)!.top + 2.6) < 1e-9);
});

test("the opening lies over the top of the stair only, not over its foot", () => {
  const layout = stairLayout(cfg(), 1, 4, 2.8);
  const opening = stairOpening(layout, 2.8, false);
  const zs = opening.map((p) => p[1]);
  assert.ok(Math.min(...zs) <= -1.99, "reaches the top end");
  assert.ok(Math.max(...zs) < 1.9, "leaves the foot closed");
  assert.ok(area(opening) < 4 * 1);
  // going down, the opening is in the stair's own floor at its top (front) end
  const down = stairOpening(stairLayout(cfg({ down: true }), 1, 4, 2.8), 2.8, true);
  assert.ok(Math.max(...down.map((p) => p[1])) >= 1.99);
});

test("the opening follows the item into the plan", () => {
  const ring = stairOpeningInPlan({ x: 10, z: 5, rotation: 90, w: 1, d: 4, h: 2.8, stair: {} });
  for (const [x, z] of ring) assert.ok(x >= 7.99 && x <= 12.01 && z >= 4.49 && z <= 5.51, `${x},${z}`);
});

test("convex hull", () => {
  const hull = convexHull([[0, 0], [1, 0], [1, 1], [0, 1], [0.5, 0.5]]);
  assert.equal(hull.length, 4);
});
