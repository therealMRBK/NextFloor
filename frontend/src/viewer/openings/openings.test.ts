import assert from "node:assert/strict";
import { test } from "node:test";
import { newFloor, type Opening } from "../../model.ts";
import { buildFloorGeometry } from "../build.ts";
import { buildOpeningParts, CLOSED, type OpeningState } from "../openings.ts";
import { slidingPanes } from "./windows.ts";
import { frontPieces } from "../../geometry/glass-front.ts";

const room = { id: "a", name: "a", area_id: null, points: [[0, 0], [6, 0], [6, 5], [0, 5]] as [number, number][], floor_material: "wood" as const };

function infosFor(opening: Partial<Opening>) {
  const full = { id: "o", room_id: "a", edge: 0, offset: 1.5, width: 1.2, type: "window", sill: 0.9, height: 1.3, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null, ...opening } as Opening;
  return buildFloorGeometry({ ...newFloor("f", "F", 0), rooms: [room], openings: [full] }, 0.3, 0.1).openings;
}

const triangles = (g: { getAttribute(n: string): { count: number } | undefined }) => (g.getAttribute("position")?.count ?? 0) / 3;
const build = (opening: Partial<Opening>, state: Partial<OpeningState> = {}, cut = 1.2) => buildOpeningParts(infosFor(opening), new Map([["o", { ...CLOSED, ...state }]]), cut);
const positions = (g: { getAttribute(n: string): { array: ArrayLike<number> } | undefined }) => Array.from(g.getAttribute("position")?.array ?? []);

test("a window has frame parts and glass, and no blind without a cover", () => {
  const parts = build({});
  assert.ok(triangles(parts.frames) > 20);
  assert.ok(triangles(parts.glass) >= 2);
  assert.equal(triangles(parts.blinds), 0);
});

test("a blind adds a box above the window and slats down to the closed fraction", () => {
  const without = build({});
  const up = build({}, { cover: 0 });
  const half = build({}, { cover: 0.5 });
  assert.ok(triangles(up.frames) > triangles(without.frames), "the blind box");
  assert.equal(triangles(up.blinds), 0, "raised: no slats");
  assert.ok(triangles(half.blinds) > 0);
  const lowest = (parts: ReturnType<typeof build>) => Math.min(...positions(parts.blinds).filter((_, i) => i % 3 === 1));
  assert.ok(lowest(build({}, { cover: 1 })) < lowest(half), "further down when more closed");
});

test("an open window swings its sash into the room, and a tilted one leans", () => {
  const closed = positions(build({}).frames);
  const open = positions(build({}, { open: 1 }).frames);
  const tilted = positions(build({}, { tilt: 1 }).frames);
  assert.equal(closed.length, open.length);
  assert.notDeepEqual(closed, open);
  assert.notDeepEqual(closed, tilted);
  // the swung-open sash reaches into the room: further from the wall than any part of the closed window
  const depth = (p: number[]) => Math.max(...p.filter((_, i) => i % 3 === 2));
  assert.ok(depth(open) > depth(closed));
});

test("a double window has two sashes that move on their own", () => {
  const single = triangles(build({ leaves: 1 }).frames);
  const double = triangles(build({ leaves: 2 }).frames);
  assert.ok(double > single);
  assert.notDeepEqual(positions(build({ leaves: 2 }, { open: 1, open2: 0 }).frames), positions(build({ leaves: 2 }, { open: 0, open2: 1 }).frames));
});

test("glazing bars add to the sash, a glass wall has mullions instead of sashes", () => {
  assert.ok(triangles(build({ style: "bars" }).frames) > triangles(build({}).frames));
  const wall = build({ style: "glass_wall", width: 2.7, sill: 0, height: 2.4 });
  assert.ok(triangles(wall.glass) >= 3 * 2, "three panes");
});

test("a door has a frame, a leaf and handles; a passage only a gap", () => {
  const door = build({ type: "door", width: 0.9, sill: 0, height: 2.05 });
  assert.ok(triangles(door.frames) > 50);
  const passage = build({ type: "door", style: "passage", width: 0.9, sill: 0, height: 2.05 });
  assert.equal(triangles(passage.frames), 0);
  assert.equal(triangles(passage.glass), 0);
});

test("a door leaf swings around its hinge, a sliding one slides along the wall", () => {
  const door = (state: Partial<OpeningState>, extra: Partial<Opening> = {}) => positions(build({ type: "door", width: 0.9, sill: 0, height: 2.05, ...extra }, state).frames);
  assert.notDeepEqual(door({ open: 0 }), door({ open: 1 }));
  const closed = door({ open: 0 }, { style: "sliding" });
  const slid = door({ open: 1 }, { style: "sliding" });
  const depth = (p: number[]) => Math.max(...p.filter((_, i) => i % 3 === 2)) - Math.min(...p.filter((_, i) => i % 3 === 2));
  assert.ok(Math.abs(depth(closed) - depth(slid)) < 0.1, "a sliding leaf stays in the wall's depth");
});

test("front doors and glass doors have glass; room doors have none", () => {
  const glassOf = (style: string) => triangles(build({ type: "door", style: style as never, width: 0.9, sill: 0, height: 2.05 }).glass);
  assert.equal(glassOf("interior"), 0);
  assert.ok(glassOf("front") > 0);
  assert.ok(glassOf("front_glass") >= glassOf("front"));
  assert.ok(glassOf("glass") > 0);
  assert.ok(glassOf("sidelight") > 0, "a fixed pane beside the leaf");
});

test("a garage door shows panels while closed and lifts them under the ceiling when open", () => {
  const garage = (cover: number) => build({ type: "garage", width: 2.5, sill: 0, height: 2.1 }, { cover });
  assert.ok(triangles(garage(1).blinds) > 0);
  assert.ok(triangles(garage(0).blinds) > 0, "the lifted part lies flat under the ceiling");
  assert.ok(triangles(garage(1).frames) > 0);
});

test("the triangle ranges say which opening each part belongs to", () => {
  const infos = infosFor({});
  const parts = buildOpeningParts(infos, new Map(), 1.2);
  assert.deepEqual(parts.frameTris.map((r) => r.id), ["o"]);
  assert.equal(parts.frameTris[0].start, 0);
  assert.equal(parts.frameTris[0].end, triangles(parts.frames));
  assert.equal(parts.glassTris[0].end, triangles(parts.glass));
});

test("parts above the cut height carry the wall's fold bucket, the rest are always shown", () => {
  const folds = (cut: number) => Array.from(build({}, {}, cut).frames.getAttribute("fold")!.array);
  assert.ok(new Set(folds(10)).size === 1, "everything below the cut: always shown");
  assert.ok(new Set(folds(0.1)).size >= 1);
  assert.ok(folds(1.2).includes(-1));
  assert.ok(folds(1.2).some((f) => f !== -1), "the part above the cut folds with the wall");
});

test("an open window glows warm; with 'mark closed' the closed one does", () => {
  const colorSum = (parts: ReturnType<typeof build>) => Array.from(parts.frames.getAttribute("color")!.array).reduce((a, b) => a + b, 0);
  assert.ok(colorSum(build({}, { open: 1 })) > colorSum(build({})));
  const marked = (open: number) => colorSum(build({ mark: "closed" } as never, { open, sensed: true }));
  assert.ok(marked(0) > marked(1));
});

test("a sliding window: the pane at the hinge side slides in front of the fixed one; four panes with two leaves", () => {
  const one = slidingPanes(2.4, 0.06, true, 1, 1, 0);
  assert.equal(one.length, 2);
  assert.ok(one[0].slide! > 1, "the moving pane runs about half the width");
  assert.equal(one[1].slide, 0);
  assert.ok(one[0].x1 > one[1].x0, "the panes overlap in the middle");
  const four = slidingPanes(3.2, 0.06, true, 2, 1, 1);
  assert.deepEqual(four.map((p) => Math.sign(p.slide!)), [0, -1, 1, 0]);
  const mirrored = slidingPanes(2.4, 0.06, false, 1, 1, 0);
  assert.ok(mirrored[1].slide! < 0 && mirrored[0].slide === 0);
});

test("an open sliding door stays in the wall and moves along it; a top-hung window swings out at the bottom", () => {
  const door = { opens: "slide" as const, sill: 0, height: 2.15, width: 2.4 };
  const closed = positions(build(door).frames);
  const open = positions(build(door, { open: 1 }).frames);
  const depth = (p: number[]) => Math.max(...p.filter((_, i) => i % 3 === 2));
  assert.notDeepEqual(closed, open);
  assert.ok(depth(open) <= depth(closed) + 1e-6, "no part reaches into the room");
  const top = { opens: "top" as const };
  const out = (p: number[]) => Math.min(...p.filter((_, i) => i % 3 === 2));
  assert.ok(out(positions(build(top, { open: 1 }).frames)) < out(positions(build(top).frames)) - 0.1, "the bottom leaves the wall towards outside");
  // a tilt sensor opens a top-hung window as well
  assert.notDeepEqual(positions(build(top, { tilt: 1 }).frames), positions(build(top).frames));
});

test("a door in a lowered room stands on that room's floor, not on the floor level", () => {
  const lowered = { ...room, floor_offset: -0.39 };
  const opening = { id: "o", room_id: "a", edge: 0, offset: 1.5, width: 0.9, type: "door", sill: 0, height: 1.87, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null } as Opening;
  const infos = buildFloorGeometry({ ...newFloor("f", "F", 0), rooms: [lowered], openings: [opening] }, 0.3, 0.1).openings;
  const parts = buildOpeningParts(infos, new Map([["o", CLOSED]]), 1.2);
  const ys = positions(parts.frames).filter((_, i) => i % 3 === 1);
  assert.ok(Math.abs(Math.min(...ys) - -0.39) < 0.02, `lowest part at ${Math.min(...ys)}`);
});

test("a glass wall divides into about 0.9 m panes unless it is told how many", () => {
  const wall = (panes?: number | null) => build({ type: "window", sill: 0, height: 2.4, width: 3.6, style: "glass_wall", ...(panes === undefined ? {} : { panes }) });
  const auto = wall();
  const one = wall(0);
  const three = wall(3);
  // one pane: no mullion at all, so fewer frame boxes and a single sheet of glass
  assert.ok(triangles(one.frames) < triangles(auto.frames), "a single pane has no mullions");
  assert.equal(triangles(one.glass), 4, "one pane is one quad, glazed on both sides");
  // a number of its own wins over the automatic spacing
  assert.ok(triangles(three.frames) < triangles(auto.frames));
  assert.ok(triangles(three.frames) > triangles(one.frames), "three panes have two mullions");
  assert.equal(triangles(three.glass), 12, "three panes");
  // an unchanged plan keeps exactly what it drew before: the automatic spacing
  assert.equal(triangles(auto.glass), 16, "3.6 m gives four panes of about 0.88 m");
});

/** A curved wall: ten edges of 1 m, each turning 10 degrees the same way, closed by one back edge. */
function curvedRoom() {
  const points: [number, number][] = [[0, 0]];
  let [x, z, a] = [0, 0, 0];
  for (let i = 0; i < 10; i++) {
    a += (10 * Math.PI) / 180;
    x += Math.cos(a);
    z += Math.sin(a);
    points.push([x, z]);
  }
  return { ...room, points };
}

/** Six pieces of one pane on that wall, in the order the plan lists them. */
function pane(backwards = false) {
  const curved = curvedRoom();
  const pieces = frontPieces(curved, 0, 6)!;
  const list = pieces.map(
    (p, k) =>
      ({
        id: `g${k}`,
        room_id: "a",
        edge: p.edge,
        offset: p.offset,
        width: p.width,
        front: "f",
        type: "window",
        sill: 0,
        height: 2.4,
        style: "glass_wall",
        hinge: "left",
        leaves: 1,
        swing: "in",
        cover: null,
        contact: null,
        contact2: null,
        tilt: null,
      }) as Opening,
  );
  // the order the openings are listed in is the order the plan happens to hold them, which on a curved
  // wall is not necessarily the order along the outline
  return buildFloorGeometry({ ...newFloor("f", "F", 0), rooms: [curved], openings: backwards ? list.reverse() : list }, 0.3, 0.1).openings;
}

/** The plan points where two pieces of one pane meet, and the two outer ends of the pane. */
function paneEnds(infos: readonly { start: [number, number]; axis: [number, number]; width: number }[]) {
  const key = (p: [number, number]) => `${Math.round(p[0] * 50)},${Math.round(p[1] * 50)}`;
  const end = (i: number): [number, number] => [infos[i].start[0] + infos[i].axis[0] * infos[i].width, infos[i].start[1] + infos[i].axis[1] * infos[i].width];
  const count = new Map<string, number>();
  const at = new Map<string, [number, number]>();
  infos.forEach((_, i) => {
    for (const p of [infos[i].start as [number, number], end(i)]) {
      count.set(key(p), (count.get(key(p)) ?? 0) + 1);
      at.set(key(p), p);
    }
  });
  const joins = [...count].filter(([, n]) => n > 1).map(([k]) => at.get(k)!);
  const outer = [...count].filter(([, n]) => n === 1).map(([k]) => at.get(k)!);
  return { joins, outer };
}

/** One pane must be one sheet: no slot between its pieces and no frame standing in it. */
function assertOneSheet(infos: ReturnType<typeof pane>) {
  const joined = buildOpeningParts(infos, new Map([["f", CLOSED]]), 1.2);
  const gp = positions(joined.glass);
  const fp = positions(joined.frames);
  const { joins, outer } = paneEnds(infos);
  assert.equal(joins.length, infos.length - 1, "one join between each two pieces, and none at the outer ends");
  assert.equal(outer.length, 2, "a pane has two outer ends");
  for (const [jx, jz] of joins) {
    // the glass sits in the middle of the wall, so two walls at an angle have two different middles, and
    // ends that stop at their own middle stand 2.6 cm apart on a 10 degree bend — a slot through the pane
    const near: [number, number, number][] = [];
    // the glass stands in the middle of the wall, half a thickness off the axis the join sits on
    for (let i = 0; i + 2 < gp.length; i += 3) if (Math.hypot(gp[i] - jx, gp[i + 2] - jz) < 0.2) near.push([gp[i], gp[i + 1], gp[i + 2]]);
    let worst = 0;
    // in plan only: two vertices on one vertical line are the same point of the sheet, whatever their height
    for (const a of near) for (const b of near) worst = Math.max(worst, Math.hypot(a[0] - b[0], a[2] - b[2]));
    assert.ok(near.length > 0, "the pieces reach the join");
    assert.ok(worst < 0.002, `the two pieces meet at (${jx.toFixed(2)},${jz.toFixed(2)}), not ${worst.toFixed(3)} m apart`);
    // a jamb drawn at a join is a 4 cm post standing in the middle of the glass
    let post = 0;
    for (let i = 0; i + 2 < fp.length; i += 3) {
      if (fp[i + 1] < 0.1 || fp[i + 1] > 2.3) continue;
      if (Math.hypot(fp[i] - jx, fp[i + 2] - jz) < 0.2) post++;
    }
    assert.equal(post, 0, "no frame stands in the glass at a join");
  }
  for (const [ox, oz] of outer) {
    let jamb = 0;
    for (let i = 0; i + 2 < fp.length; i += 3) {
      if (fp[i + 1] < 0.1 || fp[i + 1] > 2.3) continue;
      if (Math.hypot(fp[i] - ox, fp[i + 2] - oz) < 0.2) jamb++;
    }
    assert.ok(jamb > 0, "the outer ends of a pane do carry a jamb");
  }
}

test("a pane over several edges is glazed as one, without jambs where its pieces meet", () => {
  const infos = pane();
  // every piece finds its own wall: none is dropped
  assert.equal(infos.length, 6);
  const joined = buildOpeningParts(infos, new Map([["f", CLOSED]]), 1.2);
  const apart = buildOpeningParts(
    infos.map((i) => ({ ...i, opening: { ...i.opening, front: null } })),
    new Map(),
    1.2,
  );
  assert.ok(triangles(joined.frames) < triangles(apart.frames), "no jamb where two pieces of one pane meet");
  // the glass itself stays the same, however the pieces are grouped
  assert.equal(triangles(joined.glass), triangles(apart.glass));
  assertOneSheet(infos);
});

test("the order the plan lists the pieces in does not decide where the jambs go", () => {
  // the openings of a curved wall are stored in the order the plan holds them, which is not always the
  // order along the outline. Taking the first and the last of that list as the pane's ends puts both
  // jambs of a two-piece pane right where the two pieces meet.
  const infos = pane(true);
  assert.equal(infos.length, 6);
  assertOneSheet(infos);
});

test("a garage door with a cover gets no roller blind in front of it (#85)", () => {
  const door = build({ type: "garage", width: 2.5, sill: 0, height: 2.1 }, { cover: 1 });
  const panelOnly = build({ type: "garage", width: 2.5, sill: 0, height: 2.1 }, { cover: 1, cover2: null });
  assert.equal(triangles(door.blinds), triangles(panelOnly.blinds));
  // the outside blind box (cassette above the opening) is not drawn: no frame part reaches 0.2 m above the top
  const ys = positions(door.frames).filter((_, i) => i % 3 === 1);
  assert.ok(Math.max(...ys) < 2.1 + 0.15, "no blind cassette above a garage door");
});
