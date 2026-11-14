import assert from "node:assert/strict";
import { test } from "node:test";
import { Color } from "three";
import type { Vec2 } from "../../model.ts";
import { ALWAYS, FURN_OFFSET, GeoBuffer, LineBuffer } from "./buffers.ts";
import { heightShade, shade, sideLight } from "./colors.ts";
import { cutAbove, cutLinesAbove } from "./cut.ts";
import { pushLoft, pushLyingCyl, pushPrism, pushSkin, triangulate } from "./shapes.ts";

const grey = new Color(0x808080);
const heights = (buf: GeoBuffer) => Array.from({ length: buf.p.length / 3 }, (_, v) => buf.p[v * 3 + 1]);
const square: Vec2[] = [[0, 0], [2, 0], [2, 2], [0, 2]];

test("a triangle adds three vertices with their colours and fold values", () => {
  const buf = new GeoBuffer();
  buf.tri([0, 0, 0], [1, 0, 0], [0, 0, 1], grey, new Color(1, 0, 0));
  assert.equal(buf.count, 1);
  assert.equal(buf.p.length, 9);
  assert.deepEqual(buf.f, [ALWAYS, ALWAYS, ALWAYS]);
  assert.equal(buf.c[3], 1, "the second corner's own red");
  assert.equal(buf.uv, null);
});

test("uvs and tiles are only kept when asked for, and show up in the geometry", () => {
  const buf = new GeoBuffer(true, true);
  buf.tri([0, 0, 0], [1, 0, 0], [0, 0, 1], grey, grey, grey, [0, 0, 1, 0, 0, 1], 5, [2, 3]);
  const g = buf.geometry();
  assert.ok(g.getAttribute("uv") && g.getAttribute("tile") && g.getAttribute("fold"));
  assert.equal(g.getAttribute("position").count, 3);
  assert.deepEqual(buf.tile, [2, 3, 2, 3, 2, 3]);
  assert.equal(new GeoBuffer().geometry().getAttribute("uv"), undefined);
});

test("shading never exceeds 1 per channel, and light and height change the brightness", () => {
  const bright = shade(0xffffff, 3);
  assert.deepEqual([bright.r, bright.g, bright.b], [1, 1, 1]);
  assert.ok(heightShade(0) < heightShade(0.8) && heightShade(0.8) < heightShade(1.6));
  assert.equal(heightShade(5), heightShade(1.6));
  const faces = [sideLight(1, 0), sideLight(0, 1), sideLight(-1, 0), sideLight(0, -1)];
  assert.ok(Math.max(...faces) <= 1.08 + 1e-9 && Math.min(...faces) >= 0.8 - 1e-9);
  assert.ok(new Set(faces.map((f) => f.toFixed(3))).size > 1, "faces in different directions differ");
});

test("line segments are split at the cut height only when they cross it", () => {
  const lines = new LineBuffer();
  lines.segSplit([0, 0, 0], [0, 3, 0], grey, 1, 7);
  assert.equal(lines.f.length, 4);
  assert.deepEqual(lines.f, [ALWAYS, ALWAYS, 7, 7]);
  lines.segSplit([0, 0, 0], [0, 0.5, 0], grey, 1, 7);
  assert.deepEqual(lines.f.slice(4), [ALWAYS, ALWAYS], "wholly below: always shown");
  lines.segSplit([0, 2, 0], [1, 2, 0], grey, 1, 7);
  assert.deepEqual(lines.f.slice(6), [7, 7], "wholly above: the bucket");
  lines.segSplit([0, 0, 0], [0, 3, 0], grey, 1, -1);
  assert.deepEqual(lines.f.slice(8), [ALWAYS, ALWAYS], "a negative bucket never splits");
});

test("cutAbove: pieces above get the fold, a crossing triangle is split, the rest is left alone", () => {
  const buf = new GeoBuffer();
  buf.tri([0, 0, 0], [1, 0, 0], [1, 0.5, 0], grey); // below
  buf.tri([0, 2, 0], [1, 2, 0], [1, 2.5, 0], grey); // above
  buf.tri([0, 0, 0], [1, 0, 0], [1, 2, 0], grey); // one corner above
  buf.tri([0, 2, 0], [1, 2, 0], [1, 0, 0], grey); // two corners above
  cutAbove(buf, 0, 1.2, FURN_OFFSET);
  assert.deepEqual(buf.f.slice(0, 3), [ALWAYS, ALWAYS, ALWAYS]);
  assert.deepEqual(buf.f.slice(3, 6), [FURN_OFFSET, FURN_OFFSET, FURN_OFFSET]);
  assert.equal(buf.count, 4 + 2 + 2, "each crossing triangle became three");
  heights(buf).forEach((y, v) => {
    if (buf.f[v] === FURN_OFFSET) assert.ok(y >= 1.2 - 1e-9, `upper vertex at ${y}`);
    else assert.ok(y <= 1.2 + 1e-9, `lower vertex at ${y}`);
  });
});

test("cutAbove keeps colours and uvs along the new edge", () => {
  const buf = new GeoBuffer(true);
  buf.tri([0, 0, 0], [0, 2, 0], [1, 0, 0], new Color(0, 0, 0), new Color(1, 1, 1), new Color(0, 0, 0), [0, 0, 0, 1, 1, 0]);
  cutAbove(buf, 0, 1, 64);
  const cutVertex = Array.from({ length: buf.count * 3 }, (_, v) => v).find((v) => Math.abs(buf.p[v * 3 + 1] - 1) < 1e-9 && buf.p[v * 3] === 0)!;
  assert.ok(Math.abs(buf.c[cutVertex * 3] - 0.5) < 1e-9, "halfway colour");
  assert.ok(Math.abs(buf.uv![cutVertex * 2 + 1] - 0.5) < 1e-9, "halfway uv");
});

test("cutAbove only touches triangles from the given one on", () => {
  const buf = new GeoBuffer();
  buf.tri([0, 2, 0], [1, 2, 0], [1, 3, 0], grey);
  buf.tri([0, 2, 0], [1, 2, 0], [1, 3, 0], grey);
  cutAbove(buf, 1, 1, 64);
  assert.deepEqual(buf.f, [ALWAYS, ALWAYS, ALWAYS, 64, 64, 64]);
});

test("cutLinesAbove splits a vertical edge at the cut and leaves low ones alone", () => {
  const lines = new LineBuffer();
  lines.seg([0, 0, 0], [0, 2, 0]);
  lines.seg([0, 0, 0], [1, 0, 0]);
  lines.seg([0, 2, 0], [1, 2, 0]);
  cutLinesAbove(lines, 0, 1.2, FURN_OFFSET);
  assert.equal(lines.p.length / 6, 4);
  assert.deepEqual(lines.p.slice(0, 6), [0, 0, 0, 0, 1.2, 0]);
  assert.deepEqual(lines.f, [ALWAYS, ALWAYS, ALWAYS, ALWAYS, FURN_OFFSET, FURN_OFFSET, FURN_OFFSET, FURN_OFFSET]);
  assert.deepEqual(lines.p.slice(18, 24), [0, 1.2, 0, 0, 2, 0]);
});

test("triangulating a square gives two triangles, with a hole it gives more", () => {
  assert.equal(triangulate(square).length, 2);
  const hole: Vec2[] = [[0.5, 0.5], [0.5, 1.5], [1.5, 1.5], [1.5, 0.5]];
  assert.ok(triangulate(square, [hole]).length > 4);
});

test("a prism has a top, four sides of two triangles each, and optionally a bottom", () => {
  const plain = new GeoBuffer();
  pushPrism(plain, square, 0, 1, 0x888888, 0xcccccc);
  assert.equal(plain.count, 2 + 8);
  const closed = new GeoBuffer();
  pushPrism(closed, square, 0, 1, 0x888888, 0xcccccc, { bottom: true });
  assert.equal(closed.count, 2 + 8 + 2);
  const open = new GeoBuffer();
  pushPrism(open, square, 0, 1, 0x888888, 0xcccccc, { topFace: false });
  assert.equal(open.count, 8);
});

test("a prism's top can follow a height function and its sides can be skipped or folded", () => {
  const sloped = new GeoBuffer();
  pushPrism(sloped, square, 0, (x) => 1 + x, 0x888888, 0xcccccc);
  assert.equal(Math.max(...heights(sloped)), 3);
  const skipped = new GeoBuffer();
  pushPrism(skipped, square, 0, 1, 0x888888, 0xcccccc, { skipSide: (a, b) => a[1] === 0 && b[1] === 0 });
  assert.equal(skipped.count, 2 + 6);
  const folded = new GeoBuffer();
  pushPrism(folded, square, 0, 1, 0x888888, 0xcccccc, { fold: 20, topFold: 33 });
  assert.ok(folded.f.includes(33) && folded.f.includes(20));
});

test("a prism with a hole gets inner sides facing the hole", () => {
  const hole: Vec2[] = [[0.5, 0.5], [1.5, 0.5], [1.5, 1.5], [0.5, 1.5]];
  const buf = new GeoBuffer();
  pushPrism(buf, square, 0, 1, 0x888888, 0xcccccc, { holes: [hole] });
  assert.ok(buf.count > 2 + 8 + 8 - 1);
});

test("a loft has sloped sides and a top of the smaller rectangle", () => {
  const buf = new GeoBuffer();
  pushLoft(buf, square, [[0.5, 0.5], [1.5, 0.5], [1.5, 1.5], [0.5, 1.5]], 0, 1, 0x888888, 0xcccccc);
  assert.equal(buf.count, 8 + 2);
  const flatTop = new GeoBuffer();
  pushLoft(flatTop, square, square.map(([x, z]) => [x, z] as Vec2), 0, 1, 0x888888, 0xcccccc);
  assert.equal(flatTop.count, 8 + 2);
});

test("a loft with an underside faces down on the bottom, so a roof can be seen from below (#170)", () => {
  const buf = new GeoBuffer();
  pushLoft(buf, square, [[0.5, 0.5], [1.5, 0.5], [1.5, 1.5], [0.5, 1.5]], 0, 1, 0x888888, 0xcccccc, [], true);
  assert.equal(buf.count, 8 + 2 + 2);
  let down = 0;
  let up = 0;
  for (let i = 0; i < buf.p.length; i += 9) {
    const [a, b, c] = [0, 3, 6].map((k) => buf.p.slice(i + k, i + k + 3));
    const flat = a[1] === b[1] && b[1] === c[1];
    if (!flat) continue;
    const ny = (b[2] - a[2]) * (c[0] - a[0]) - (b[0] - a[0]) * (c[2] - a[2]);
    // the top face winds one way and the underside the other way round
    if (a[1] === 0 && ny < 0) down++;
    if (a[1] === 1 && ny > 0) up++;
  }
  assert.equal(down, 2);
  assert.equal(up, 2);
});

test("a skin joins rings into a closed body", () => {
  const ring = (z: number, r: number) => [0, 1, 2, 3, 4, 5].map((i) => [Math.cos((i / 6) * 6.2832) * r, 1 + Math.sin((i / 6) * 6.2832) * r, z]);
  const buf = new GeoBuffer();
  pushSkin(buf, [ring(0, 0.5), ring(1, 0.8), ring(2, 0.5)], 0x888888, 0xcccccc);
  assert.equal(buf.count, 2 * 6 * 2 + 2 * 6);
  const none = new GeoBuffer();
  pushSkin(none, [ring(0, 1)], 0x888888, 0xcccccc);
  assert.equal(none.count, 0);
});

test("a lying cylinder has n sides of two triangles and n triangles per end cap", () => {
  const buf = new GeoBuffer();
  pushLyingCyl(buf, (along, across) => [along, across], 0, 1, 0, 0.5, 0.5, 0x333333, 0x666666, 8);
  assert.equal(buf.count, 8 * 2 + 8 * 2);
  assert.ok(Math.max(...heights(buf)) <= 1 + 1e-9 && Math.min(...heights(buf)) >= -1e-9);
});
