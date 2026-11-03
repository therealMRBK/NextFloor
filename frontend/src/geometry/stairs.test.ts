import assert from "node:assert/strict";
import { test } from "node:test";
import { DEFAULT_STAIR, STAIR_SHAPES, STAIR_SIZES, stairConfig, stairLayout, stairOpening, stairOpeningInPlan, type StairConfig } from "./stairs.ts";

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
  const opening = stairOpening(layout, 2.8, false).flat();
  const zs = opening.map((p) => p[1]);
  assert.ok(Math.min(...zs) <= -1.99, "reaches the top end");
  assert.ok(Math.max(...zs) < 1.9, "leaves the foot closed");
  assert.ok(stairOpening(layout, 2.8, false).reduce((sum, ring) => sum + area(ring), 0) < 4 * 1);
  // going down, the opening is in the stair's own floor at its top (front) end
  const down = stairOpening(stairLayout(cfg({ down: true }), 1, 4, 2.8), 2.8, true).flat();
  assert.ok(Math.max(...down.map((p) => p[1])) >= 1.99);
});

test("the opening follows the item into the plan", () => {
  const ring = stairOpeningInPlan({ x: 10, z: 5, rotation: 90, w: 1, d: 4, h: 2.8, stair: {} }).flat();
  for (const [x, z] of ring) assert.ok(x >= 7.99 && x <= 12.01 && z >= 4.49 && z <= 5.51, `${x},${z}`);
});

test("the opening can cover the whole stair or nothing", () => {
  const layout = stairLayout(cfg({ down: true }), 1, 4, 2.8);
  const zs = (ring: [number, number][]) => ring.map((p) => p[1]);
  // by headroom a stair going down leaves its lower end under the floor; "full" opens all of it
  assert.ok(Math.min(...zs(stairOpening(layout, 2.8, true).flat())) > -1.9);
  const full = stairOpening(layout, 2.8, true, "full").flat();
  assert.ok(Math.min(...zs(full)) <= -1.99 && Math.max(...zs(full)) >= 1.99);
  assert.deepEqual(stairOpening(layout, 2.8, true, "none"), []);
  assert.equal(stairConfig({ stair: { opening: "full" } }).opening, "full");
  assert.equal(stairConfig({ stair: { opening: "wide" as never } }).opening, "headroom");
  assert.deepEqual(stairOpeningInPlan({ x: 0, z: 0, rotation: 0, w: 1, d: 4, h: 2.8, stair: { opening: "none" } }), []);
});

test("an L stair opens the floor over its treads only, not over the inside corner", async () => {
  const { pointInPolygon } = await import("../model.ts");
  const layout = stairLayout(cfg({ shape: "l" }), 2.2, 2.8, 2.8);
  const rings = stairOpening(layout, 2.8, false, "full");
  assert.ok(rings.length >= 1);
  // the inside corner of the L (right of the first flight, in front of the second) is floor, not opening
  const corner: [number, number] = [0.3, 0];
  assert.ok(!rings.some((ring) => pointInPolygon(corner, ring)), "inside corner stays closed");
  // a point on the landing is open
  assert.ok(rings.some((ring) => pointInPolygon([-0.6, -1.0], ring)), "landing is open");
});

test("a U stair can have its landing at a chosen riser (#58)", () => {
  const cfg = { ...DEFAULT_STAIR, shape: "u" as const, steps: 19, landing_after: 8 };
  const layout = stairLayout(cfg, 2.2, 2.6, 19 * 0.17);
  const at = layout.treads.findIndex((t) => t.landing);
  // 7 treads, then the landing on the 8th riser, then 11 more
  assert.equal(at, 7);
  assert.equal(layout.treads.length - at - 1, 11);
  assert.ok(Math.abs(layout.treads[at].top - 8 * 0.17) < 1e-6);
  // without it the flights share by length
  const even = stairLayout({ ...cfg, landing_after: null }, 2.2, 2.6, 19 * 0.17);
  assert.notEqual(even.treads.findIndex((t) => t.landing), 7);
});
