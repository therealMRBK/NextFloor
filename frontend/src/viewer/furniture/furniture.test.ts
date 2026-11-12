import assert from "node:assert/strict";
import { test } from "node:test";
import { Color } from "three";
import { FURNITURE_SIZE, FURNITURE_TYPES, newFloor, type Furniture } from "../../model.ts";
import { setPacks } from "../../packs.ts";
import { GeoBuffer, LineBuffer } from "../geo.ts";
import { Builder, contactShadow, flipWinding, mirrors, type Plan } from "./builder.ts";
import { pushFurniture } from "./furniture.ts";
import { FRIDGE_DOOR, pushFridgeDoors, RADIATOR_Y } from "./kitchen.ts";
import { M } from "./palette.ts";
import { pushPackGlow, pushPackLamp } from "./packs.ts";
import { legs } from "./parts.ts";
import { screenRect } from "./screens.ts";

const identity: Plan = (x, z) => [x, z];
const mirrored: Plan = (x, z) => [-x, z];
const tools = (plan: Plan = identity) => {
  const buf = new GeoBuffer();
  const lines = new LineBuffer();
  return { buf, lines, b: new Builder(buf, lines, plan) };
};
const ys = (buf: GeoBuffer) => buf.p.filter((_, i) => i % 3 === 1);
const piece = (type: string, extra: Partial<Furniture> = {}): Furniture => {
  const size = (FURNITURE_SIZE as Record<string, number[]>)[type] ?? [1, 0.6, 0.8];
  return { id: "f", type, x: 2, z: 1, rotation: 0, w: size[0], d: size[1], h: size[2], variant: null, entity: null, power: null, ...extra };
};
function draw(f: Furniture, base = 0) {
  const [buf, lines, shadow] = [new GeoBuffer(), new LineBuffer(), new GeoBuffer()];
  pushFurniture(buf, lines, shadow, f, base);
  return { buf, lines, shadow };
}

test("a mirroring transform is told apart from a plain one", () => {
  assert.equal(mirrors(identity), false);
  assert.equal(mirrors(mirrored), true);
  assert.equal(mirrors((x, z) => [z, x]), true);
  assert.equal(mirrors((x, z) => [z, -x]), false);
});

test("a box adds a prism with a top, an outline when asked, and nothing when it is flat", () => {
  const { buf, lines, b } = tools();
  b.block({ x: [0, 1], y: [0, 1], z: [0, 1] }, M.wood);
  assert.equal(buf.count, 10);
  assert.equal(lines.p.length, 0);
  const withEdges = tools();
  withEdges.b.block({ x: [0, 1], y: [0, 1], z: [0, 1] }, M.wood, new Color(1, 1, 1));
  assert.equal(withEdges.lines.p.length / 6, 8, "four top edges and four verticals");
  const flat = tools();
  flat.b.block({ x: [0, 1], y: [0.5, 0.5], z: [0, 1] }, M.wood);
  assert.equal(flat.buf.count, 0);
});

test("a box above the floor also gets a bottom face", () => {
  const low = tools();
  low.b.block({ x: [0, 1], y: [0, 1], z: [0, 1] }, M.wood);
  const lifted = tools();
  lifted.b.block({ x: [0, 1], y: [0.5, 1.5], z: [0, 1] }, M.wood);
  assert.equal(lifted.buf.count, low.buf.count + 2);
});

test("a turned builder rotates its parts around the given centre", () => {
  const { buf, b } = tools();
  b.turned(0, 0, 90).block({ x: [1, 2], y: [0, 1], z: [0, 0.5] }, M.wood);
  const xs = buf.p.filter((_, i) => i % 3 === 0);
  const zs = buf.p.filter((_, i) => i % 3 === 2);
  assert.ok(Math.min(...zs) >= 0.99 && Math.max(...zs) <= 2.01, "x along became z");
  assert.ok(Math.min(...xs) >= -0.51 && Math.max(...xs) <= 0.01);
});

test("a loft can leave its front (+z) or back (-z) end open, and stays closed by default (#140)", () => {
  // faces lying flat in the plane z = value: all three corners of a triangle there
  const flatAt = (t: ReturnType<typeof tools>, z: number) => {
    let n = 0;
    for (let i = 0; i + 8 < t.buf.p.length; i += 9) if ([2, 5, 8].every((k) => Math.abs(t.buf.p[i + k] - z) < 1e-6)) n++;
    return n;
  };
  const make = (caps: { front?: boolean; back?: boolean }) => {
    const t = tools();
    t.b.loft([0, 1, 0, 2], [0, 1, 0, 2], 0, 1, M.wood, null, caps);
    return t;
  };
  const closed = make({});
  assert.equal(flatAt(closed, 2), 2, "front wall: two triangles");
  assert.equal(flatAt(closed, 0), 2, "back wall: two triangles");
  assert.equal(flatAt(make({ front: false }), 2), 0);
  assert.equal(flatAt(make({ front: false }), 0), 2);
  assert.equal(flatAt(make({ back: false }), 0), 0);
  assert.equal(flatAt(make({ back: false }), 2), 2);
  assert.equal(make({ front: false, back: false }).buf.count, closed.buf.count - 4);
  // a mirrored base (the corner ring wound the other way) keeps front and back where they are
  const mirrored = tools();
  mirrored.b.loft([1, 0, 0, 2], [1, 0, 0, 2], 0, 1, M.wood, null, { front: false });
  assert.equal(flatAt(mirrored, 2), 0);
  assert.equal(flatAt(mirrored, 0), 2);
});

test("a loft, a pad and a sweep add geometry; a pad too small to bevel is a plain box", () => {
  const loft = tools();
  loft.b.loft([0, 1, 0, 1], [0.2, 0.8, 0.2, 0.8], 0, 1, M.wood);
  assert.ok(loft.buf.count > 8);
  const pad = tools();
  pad.b.pad({ x: [0, 1], y: [0, 0.3], z: [0, 1] }, M.fabric, 0.05);
  const box = tools();
  box.b.block({ x: [0, 1], y: [0, 0.3], z: [0, 1] }, M.fabric);
  assert.ok(pad.buf.count > box.buf.count);
  const tiny = tools();
  tiny.b.pad({ x: [0, 1], y: [0, 0.3], z: [0, 1] }, M.fabric, 0.001);
  assert.equal(tiny.buf.count, box.buf.count);
  const sweep = tools();
  sweep.b.sweep([{ x: 0, z: -1, y0: 0, y1: 1, hw: 0.4 }, { x: 0, z: 1, y0: 0, y1: 0.5, hw: 0.3 }], M.metal);
  assert.ok(sweep.buf.count > 16);
  const none = tools();
  none.b.sweep([{ x: 0, z: 0, y0: 0, y1: 1, hw: 1 }], M.metal);
  assert.equal(none.buf.count, 0);
});

test("cylinders: upright with n sides, lying along either axis, flipped when mirrored", () => {
  const upright = tools();
  upright.b.cylinder(0, 0, 0.5, 0, 1, M.metal, 8);
  assert.equal(upright.buf.count, 8 - 2 + 8 * 2, "a top fan and two triangles per side");
  for (const axis of ["x", "z"] as const) {
    const lying = tools();
    lying.b.lyingCylinder(axis, 0, 0, 0, 0.5, 1, 0.5, M.metal, 8);
    assert.equal(lying.buf.count, 8 * 2 + 8 * 2);
    const span = (i: number) => Math.max(...lying.buf.p.filter((_, k) => k % 3 === i)) - Math.min(...lying.buf.p.filter((_, k) => k % 3 === i));
    assert.ok(Math.abs(span(axis === "x" ? 0 : 2) - 1) < 1e-9, "the length along its axis");
  }
  const normal = tools(identity);
  const flipped = tools(mirrored);
  normal.b.lyingCylinder("x", 0, 0, 0, 0.5, 1, 0.5, M.metal, 6);
  flipped.b.lyingCylinder("x", 0, 0, 0, 0.5, 1, 0.5, M.metal, 6);
  assert.equal(normal.buf.count, flipped.buf.count);
});

test("flipping the winding swaps the second and third vertex of each triangle", () => {
  const buf = new GeoBuffer(true);
  buf.tri([0, 0, 0], [1, 0, 0], [0, 0, 1], new Color(0.1, 0.2, 0.3), new Color(0.4, 0.5, 0.6), new Color(0.7, 0.8, 0.9), [0, 0, 1, 0, 0, 1], 5);
  flipWinding(buf, 0);
  assert.deepEqual(buf.p, [0, 0, 0, 0, 0, 1, 1, 0, 0]);
  assert.ok(Math.abs(buf.c[3] - 0.7) < 1e-6 && Math.abs(buf.c[5] - 0.9) < 1e-6);
  assert.deepEqual(buf.uv, [0, 0, 0, 1, 1, 0]);
});

test("a ring draws its segments, and a contact shadow fades out beyond the footprint", () => {
  const { lines, b } = tools();
  b.ring(0, 1, 0.3, 0, 16);
  assert.equal(lines.p.length / 6, 16);
  const shadow = new GeoBuffer();
  contactShadow(shadow, identity, 1, 1, 0.5);
  assert.equal(shadow.count, 2 + 8);
  assert.ok(shadow.c.some((v) => v === 0.5) && shadow.c.some((v) => v === 1));
});

test("legs stand in the corners of the footprint", () => {
  const { buf, b } = tools();
  legs(b, 2, 1, 0.5, 0.1, 0.05);
  assert.equal(buf.count / 10, 4);
  assert.ok(Math.max(...buf.p.filter((_, i) => i % 3 === 0)) <= 1 + 1e-9);
});

test("every built-in type draws something, except the stairwell opening", () => {
  for (const type of FURNITURE_TYPES) {
    const { buf, lines } = draw(piece(type));
    if (type === "stairwell") assert.equal(buf.count + lines.p.length, 0);
    else assert.ok(buf.count + lines.p.length > 0, type);
  }
});

test("free-standing furniture casts a contact shadow, wall-mounted and flat things do not", () => {
  for (const type of ["sofa", "table", "fridge", "plant", "bed"]) assert.ok(draw(piece(type)).shadow.count > 0, type);
  for (const type of ["rug", "kitchen_wall", "tv_wall", "radiator", "parking", "wallbox", "meter", "inverter"]) assert.equal(draw(piece(type)).shadow.count, 0, type);
});

test("an item lifted by its mount height moves up as a whole and loses its floor shadow", () => {
  const onFloor = draw(piece("shelf"), 0);
  const lifted = draw(piece("shelf"), 1.0);
  assert.equal(lifted.shadow.count, 0);
  assert.ok(Math.min(...ys(lifted.buf)) > Math.min(...ys(onFloor.buf)) + 0.5);
});

test("mirroring keeps the model but turns it around its own axis", () => {
  const plain = draw(piece("sofa", { x: 0, z: 0 }));
  const flipped = draw(piece("sofa", { x: 0, z: 0, mirror: true }));
  assert.equal(plain.buf.count, flipped.buf.count);
  const xs = (buf: GeoBuffer) => buf.p.filter((_, i) => i % 3 === 0);
  assert.ok(Math.abs(Math.min(...xs(plain.buf)) + Math.max(...xs(flipped.buf))) < 1e-9);
});

test("a sofa gets one more seat for every 62 cm of width", () => {
  const small = draw(piece("sofa", { w: 1.2 })).buf.count;
  const large = draw(piece("sofa", { w: 2.8 })).buf.count;
  assert.ok(large > small);
});

test("a smart fridge's doors swing open and turn red", () => {
  const f = { x: 0, z: 0, rotation: 0, w: 0.9, d: 0.7, h: 1.8 };
  const closed = new GeoBuffer();
  const open = new GeoBuffer();
  pushFridgeDoors(closed, f, 0, 0, 0);
  pushFridgeDoors(open, f, 0, 1, 0);
  assert.equal(closed.count, open.count);
  assert.ok(closed.count > 20);
  const redness = (buf: GeoBuffer) => buf.c.filter((_, i) => i % 3 === 0).reduce((a, c) => a + c, 0) - buf.c.filter((_, i) => i % 3 === 1).reduce((a, c) => a + c, 0);
  assert.ok(redness(open) > redness(closed));
  const zs = (buf: GeoBuffer) => Math.max(...buf.p.filter((_, i) => i % 3 === 2));
  assert.ok(zs(open) > zs(closed), "an open door reaches out into the room");
  assert.ok(FRIDGE_DOOR > 0 && RADIATOR_Y > 0);
});

test("screens: where a TV or an appliance's glowing front is, with and without a mount, mirrored or not", () => {
  const floor = newFloor("f", "F", 0);
  const board = screenRect(piece("tv_board", { w: 1.6, d: 0.4, h: 0.5 }), floor)!;
  assert.ok(board.x1 > board.x0 && board.y1 > board.y0);
  const mirroredBoard = screenRect(piece("tv_board", { w: 1.6, d: 0.4, h: 0.5, mirror: true }), floor)!;
  assert.ok(Math.abs(mirroredBoard.x0 + board.x1) < 1e-9);
  assert.equal(screenRect(piece("sofa"), floor), null);
  assert.ok(screenRect(piece("washer"), floor)!.y1 > 0);
  assert.ok(screenRect(piece("radiator"), floor)!.y0 > RADIATOR_Y);
  const wall = screenRect(piece("tv_wall", { w: 1.2, d: 0.1, h: 0.7 }), floor)!;
  assert.ok(wall.y0 > 0.9 && wall.y1 < 1.7);
});

test("pack items: parts scaled to the size, a chosen colour for painted parts, lamps and glow layers", () => {
  const part = (extra: object) => ({ shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "body", ...extra });
  setPacks([{ id: "t", name: "T", publisher: "t", items: [
    { id: "thing", name: { en: "Thing" }, size: [1, 1, 1], colors: [{ id: "red", name: { en: "r" }, hex: "#ff0000" }, { id: "blue", name: { en: "b" }, hex: "#0000ff" }], parts: [part({ paint: true }), part({ shape: "cyl", w: 0.4, d: 0.4 }), part({ shape: "sweep", stations: [[-0.5, 0, 1, 1], [0.5, 0, 0.5, 0.5]] })] },
    { id: "lamp", name: { en: "Lamp" }, size: [0.3, 0.3, 0.5], light: "pendant", parts: [part({ glow: true }), part({ color: "#445566" })] },
  ] } as never]);
  const red = draw(piece("pack:t:thing", { variant: "red", w: 2, d: 1, h: 1 }));
  const blue = draw(piece("pack:t:thing", { variant: "blue", w: 2, d: 1, h: 1 }));
  assert.notDeepEqual(red.buf.c, blue.buf.c);
  assert.ok(Math.max(...red.buf.p.filter((_, i) => i % 3 === 0)) - Math.min(...red.buf.p.filter((_, i) => i % 3 === 0)) >= 2 - 1e-9, "scaled to 2 m wide");
  assert.equal(draw(piece("pack:t:thing"), 1).shadow.count, 0, "above the floor: no shadow");
  assert.ok(draw(piece("pack:t:thing"), 0).shadow.count > 0);
  const lit = new GeoBuffer();
  const dark = new GeoBuffer();
  const item = { id: "lamp", name: {}, size: [0.3, 0.3, 0.5], parts: [part({ glow: true }), part({ color: "#445566" })] } as never;
  pushPackLamp(lit, item, piece("x", { w: 0.3, d: 0.3, h: 0.5 }), 0, 0xffee88);
  pushPackGlow(dark, item, piece("x", { w: 0.3, d: 0.3, h: 0.5 }), 0, 0xff0000);
  assert.ok(lit.count > dark.count, "a lamp draws all parts, a glow layer only the glowing ones");
  assert.ok(lit.c.some((v) => Math.abs(v - 1) < 1e-6) || lit.c.length > 0);
  const unknown = draw(piece("pack:gone:thing"));
  assert.ok(unknown.buf.count > 0, "a missing pack item stays a plain box");
});

test("a TV set to no glow loses its bright blue rim, with the same shape", () => {
  const brightest = (l: LineBuffer) => (l as unknown as { c: number[] }).c.reduce((a, v) => a + v, 0);
  for (const type of ["tv_board", "tv_wall"]) {
    const lit = draw(piece(type, { w: 1.6, d: 0.4, h: 0.5 }));
    const dark = draw(piece(type, { w: 1.6, d: 0.4, h: 0.5, ambilight: 0 }));
    assert.equal(dark.buf.count, lit.buf.count, type);
    assert.ok(brightest(dark.lines) < brightest(lit.lines), type);
  }
});
