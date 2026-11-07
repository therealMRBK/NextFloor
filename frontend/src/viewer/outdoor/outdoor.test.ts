import assert from "node:assert/strict";
import { test } from "node:test";
import { newFloor, OUTDOOR_TOP, type Floor, type OutdoorArea, type Vec2 } from "../../model.ts";
import { GeoBuffer, LineBuffer } from "../geo.ts";
import { counterClockwise, pushBeam, pushPost } from "./beams.ts";
import { outdoorHoles, outdoorSurface, pushOutdoor } from "./outdoor.ts";

const square = (x0: number, z0: number, x1: number, z1: number): Vec2[] => [[x0, z0], [x1, z0], [x1, z1], [x0, z1]];
const area = (type: OutdoorArea["type"], points: Vec2[], extra: Partial<OutdoorArea> = {}): OutdoorArea => ({ id: type, type, points, ...extra }) as OutdoorArea;
const floorWith = (...areas: OutdoorArea[]): Floor => ({ ...newFloor("g", "G", 0), outdoor: areas });

function build(...areas: OutdoorArea[]) {
  const buf = new GeoBuffer();
  const lines = new LineBuffer();
  pushOutdoor(buf, lines, floorWith(...areas));
  return { buf, lines, top: Math.max(...buf.p.filter((_, i) => i % 3 === 1), -Infinity) };
}

test("a ring is turned counter-clockwise whichever way it comes", () => {
  const ring = square(0, 0, 2, 2);
  assert.deepEqual(counterClockwise(ring), ring);
  assert.deepEqual(counterClockwise([...ring].reverse()), ring);
});

test("a post and a beam add geometry; a beam of no length adds none", () => {
  const buf = new GeoBuffer();
  pushPost(buf, [1, 1], 0.05, 0, 2, 0x333333, 0x555555);
  assert.equal(buf.count, 10);
  pushBeam(buf, [0, 0], [3, 0], 0.1, 2, 2.2, 0x333333, 0x555555);
  const level = buf.count;
  assert.ok(level > 10);
  pushBeam(buf, [0, 0], [0, 0], 0.1, 2, 2.2, 0x333333, 0x555555);
  assert.equal(buf.count, level);
  pushBeam(buf, [0, 0], [3, 0], 0.1, 2, 2.2, 0x333333, 0x555555, 0.5);
  assert.equal(buf.count, level + 6 * 4, "a sloped beam: six faces, each drawn from both sides (four triangles)");
});

test("a lawn is a flat block at ground level with an outline", () => {
  const { buf, lines, top } = build(area("lawn", square(0, 0, 4, 3)));
  assert.ok(buf.count > 0);
  assert.equal(lines.p.length / 6, 4);
  const ground = Math.min(...buf.p.filter((_, i) => i % 3 === 1));
  assert.ok(Math.abs(top - ground - OUTDOOR_TOP.lawn) < 0.3, "a thin layer on the ground");
});

test("the outline can be switched off", () => {
  const { lines } = build(area("lawn", square(0, 0, 4, 3), { outline: false }));
  assert.equal(lines.p.length, 0);
});

test("a hedge takes its own height", () => {
  const low = build(area("hedge", square(0, 0, 4, 1)));
  const tall = build(area("hedge", square(0, 0, 4, 1), { height: 2.5 }));
  assert.ok(Math.abs(tall.top - low.top - (2.5 - OUTDOOR_TOP.hedge)) < 0.01);
});

test("a slope tilts the top of an area and lowers its base", () => {
  const flat = build(area("terrace", square(0, 0, 4, 3)));
  const sloped = build(area("terrace", square(0, 0, 4, 3), { slope: 0.5, slope_dir: "x" } as Partial<OutdoorArea>));
  const lowest = (b: ReturnType<typeof build>) => Math.min(...b.buf.p.filter((_, i) => i % 3 === 1));
  assert.ok(lowest(sloped) < lowest(flat));
});

test("a pool has water below the rim and inner sides", () => {
  const { buf } = build(area("pool", square(0, 0, 4, 3)));
  assert.ok(buf.count >= 2 + 8);
  const ys = buf.p.filter((_, i) => i % 3 === 1);
  assert.ok(Math.max(...ys) > Math.min(...ys));
});

test("a fence has posts about every two metres and two rails per edge", () => {
  const { buf, lines } = build(area("fence", square(0, 0, 8, 4)));
  assert.equal(lines.p.length / 6, 4 * 2, "two rails on each of the four edges");
  const posts = buf.count / 10;
  assert.ok(posts >= 8 && posts <= 14, String(posts));
});

test("a fence that is open leaves its closing edge out, but gets a post at the far end", () => {
  const closed = build(area("fence", square(0, 0, 8, 4)));
  const open = build(area("fence", square(0, 0, 8, 4), { open: true }));
  assert.equal(open.lines.p.length / 6, 3 * 2);
  assert.ok(open.buf.count > 0 && open.buf.count <= closed.buf.count + 10);
});

test("a pergola has corner posts and beams, rafters across a rectangle, and optional bracing", () => {
  const plain = build(area("pergola", square(0, 0, 4, 3)));
  const braced = build(area("pergola", square(0, 0, 4, 3), { bracing: true }));
  assert.ok(plain.buf.count > 4 * 10 + 4 * 10, "posts and beams");
  assert.equal(braced.lines.p.length / 6, plain.lines.p.length / 6 + 4 * 2);
  const triangle = build(area("pergola", [[0, 0], [4, 0], [2, 3]]));
  assert.ok(triangle.buf.count < plain.buf.count, "no rafters across a triangle");
});

test("areas marked cut inside another become holes in it, in either drawing order; standing areas and pools have none", () => {
  const areas = [area("lawn", square(0, 0, 10, 10)), area("bed", square(2, 2, 3, 3), { cut: true }), area("bed", square(20, 20, 21, 21), { cut: true }), area("path", square(4, 4, 5, 5))];
  assert.equal(outdoorHoles(areas, 0).length, 1);
  assert.deepEqual(outdoorHoles([area("hedge", square(0, 0, 10, 10)), area("bed", square(2, 2, 3, 3), { cut: true })], 0), []);
  assert.deepEqual(outdoorHoles([area("pool", square(0, 0, 10, 10)), area("bed", square(2, 2, 3, 3), { cut: true })], 0), []);
  // a bed drawn before the lawn that contains it still leaves its hole
  assert.equal(outdoorHoles([area("bed", square(2, 2, 3, 3), { cut: true }), area("lawn", square(0, 0, 10, 10))], 1).length, 1);
  // a pool cuts itself out of a terrace, drawn before or after, unless cut is switched off
  const terrace = area("terrace", square(0, 0, 10, 10));
  assert.equal(outdoorHoles([terrace, area("pool", square(2, 2, 5, 5))], 0).length, 1);
  assert.equal(outdoorHoles([area("pool", square(2, 2, 5, 5)), terrace], 1).length, 1);
  assert.equal(outdoorHoles([terrace, area("pool", square(2, 2, 5, 5), { cut: false })], 0).length, 0);
  const withHole = build(areas[0], areas[1]);
  const without = build(areas[0]);
  assert.ok(withHole.buf.count > without.buf.count);
  // the terrace around a pool gets walls round the hole (more geometry) unless the pool does not cut itself out
  const cutPool = build(terrace, area("pool", square(2, 2, 5, 5)));
  const keptPool = build(terrace, area("pool", square(2, 2, 5, 5), { cut: false }));
  assert.ok(cutPool.buf.count > keptPool.buf.count);
});

test("the surface height of an area follows its offset and type", () => {
  const floor = floorWith();
  const plain = outdoorSurface(floor, area("lawn", square(0, 0, 1, 1)));
  assert.ok(Math.abs(outdoorSurface(floor, area("lawn", square(0, 0, 1, 1), { offset: 0.3 })) - plain - 0.3) < 1e-9);
  assert.ok(outdoorSurface(floor, area("terrace", square(0, 0, 1, 1))) > plain);
  assert.ok(outdoorSurface(floor, area("hedge", square(0, 0, 1, 1))) - plain < 0.1, "standing things count their base");
});

test("an area with fewer than three corners is skipped", () => {
  const { buf, lines } = build(area("lawn", [[0, 0], [1, 1]]));
  assert.equal(buf.count + lines.p.length, 0);
});

test("a gate cuts a gap into a fence: no rail across it, gate posts at its ends, and a leaf that moves when it opens", () => {
  const plain = build(area("fence", square(0, 0, 8, 4)));
  const gate = (open: boolean) => build(area("fence", square(0, 0, 8, 4), { gates: [{ id: "g", edge: 0, offset: 4, width: 1.2, kind: "single", open }] }));
  const closed = gate(false);
  assert.ok(closed.lines.p.length / 6 >= plain.lines.p.length / 6 + 2, "the long edge's two rails now come in two parts, plus the leaf's brace");
  assert.ok(closed.buf.count > plain.buf.count, "gate posts and leaf geometry");
  const open = gate(true);
  assert.notDeepEqual(open.buf.p, closed.buf.p, "an open leaf stands somewhere else");
  const zs = open.buf.p.filter((_, i) => i % 3 === 2);
  assert.ok(Math.max(...zs) > 1.0, "it swings into the plot");
});
