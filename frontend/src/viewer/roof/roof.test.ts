import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Building, type RoofSection, type Room } from "../../model.ts";
import { proposeChimney, proposeField } from "../../solar/placing.ts";
import { chimneyPlace, roofFaces } from "../../solar.ts";
import { buildRoof, pushModules, roofFloor, pushSection } from "../roof.ts";
import { GeoBuffer, LineBuffer } from "../geo.ts";

const room = (id: string, x0: number, z0: number, x1: number, z1: number): Room => ({ id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: "wood" });

function house(roof: Building["settings"]["roof"], floors: [string, number, Room[]][] = [["g", 0, [room("a", 0, 0, 10, 6)]]]): Building {
  const b = emptyBuilding();
  b.floors = floors.map(([id, elevation, rooms]) => ({ ...newFloor(id, id, elevation), height: 2.6, rooms }));
  b.settings = { ...b.settings, wall_exterior: 0.3, roof };
  return b;
}

const topOf = (buf: GeoBuffer) => Math.max(...buf.p.filter((_, i) => i % 3 === 1));
const section = (patch: Partial<RoofSection> = {}): RoofSection => ({ id: "s", x0: 0, z0: 0, x1: 10, z1: 6, shape: "gable", axis: "x", eave_a: 2.6, eave_b: 2.6, pitch_a: 35, pitch_b: 35, base: 2.6, overhang: 0.4, ...patch });

test("no roof gives no parts", () => {
  assert.deepEqual(buildRoof(house({ type: "none", pitch: 35, overhang: 0.4 })), []);
  assert.deepEqual(buildRoof(emptyBuilding()), []);
});

test("the roof sits on the highest floor with rooms", () => {
  const b = house({ type: "gable", pitch: 35, overhang: 0.4 }, [["g", 0, [room("a", 0, 0, 5, 5)]], ["u", 2.7, [room("b", 0, 0, 5, 5)]], ["empty", 5.4, []]]);
  assert.equal(roofFloor(b)?.id, "u");
  const [part] = buildRoof(b);
  assert.equal(part.floor.id, "u");
  assert.equal(part.base, 2.6);
});

test("a gable rises to half the roof's depth times its slope, with the ridge along the longer side", () => {
  const [part] = buildRoof(house({ type: "gable", pitch: 40, overhang: 0.5 }));
  const depth = 6 + 2 * 0.8;
  assert.ok(Math.abs(topOf(part.solid) - (depth / 2) * Math.tan((40 * Math.PI) / 180)) < 0.01);
  const ridgeLine = [...Array(part.lines.p.length / 6).keys()].find((s) => part.lines.p[s * 6 + 1] > 1 && part.lines.p[s * 6 + 4] === part.lines.p[s * 6 + 1] && part.lines.p[s * 6 + 2] === part.lines.p[s * 6 + 5])!;
  assert.ok(ridgeLine !== undefined, "a ridge line along x at constant z");
});

test("the ridge can run along the short side", () => {
  const along = (ridge?: "short") => {
    const [part] = buildRoof(house({ type: "gable", pitch: 40, overhang: 0.5, ridge }));
    return topOf(part.solid);
  };
  assert.ok(along("short") > along(undefined), "a longer span across means a higher ridge");
});

test("a flat roof is a slab of 25 cm with an outline", () => {
  const [part] = buildRoof(house({ type: "flat", pitch: 0, overhang: 0.4 }));
  assert.ok(Math.abs(topOf(part.solid) - 0.25) < 1e-9);
  assert.equal(part.lines.p.length / 6, 8);
});

test("sections: every shape draws something, and a canopy has glass instead of tiles", () => {
  for (const shape of ["gable", "hip", "halfhip", "pyramid", "mansard", "pent", "flat", "parapet"] as const) {
    const [part] = buildRoof(house({ type: "custom", pitch: 35, overhang: 0.4, sections: [section({ shape, pitch_a: shape === "mansard" ? 70 : 35, pitch_b: shape === "mansard" ? 70 : 35 })] }));
    assert.ok(part.solid.count > 0, shape);
  }
  const [canopy] = buildRoof(house({ type: "custom", pitch: 35, overhang: 0.4, sections: [section({ open: true, shape: "pent", pitch_a: 5, pitch_b: 5, overhang: 0.5 })] }));
  assert.ok(canopy.glass.count > 0);
  assert.equal(canopy.lift, false);
  assert.ok(canopy.solid.count > 0, "a frame of posts and beams");
});

test("sections are grouped by the floor they sit on, closed roofs before canopies", () => {
  const sections = [section({ id: "low", base: 2.6 }), section({ id: "canopy", open: true, shape: "pent" }), section({ id: "high", base: 5.3, eave_a: 5.3, eave_b: 5.3, x0: 0, x1: 5 })];
  const b = house({ type: "custom", pitch: 35, overhang: 0.4, sections }, [["g", 0, [room("a", 0, 0, 10, 6)]], ["u", 2.7, [room("b", 0, 0, 5, 6)]]]);
  const parts = buildRoof(b);
  assert.ok(parts.length >= 2);
  assert.equal(parts[parts.length - 1].lift, false, "the canopy part last");
  assert.ok(parts.some((p) => p.sections?.includes("high")));
});

test("tiny sections are ignored", () => {
  assert.deepEqual(buildRoof(house({ type: "custom", pitch: 35, overhang: 0.4, sections: [section({ x1: 0.05 })] })), []);
});

test("a dormer on a section opens the slope and adds its own roof", () => {
  const main = section({ id: "main" });
  const dormer = section({ id: "dormer", x0: 4, x1: 6, z0: 0, z1: 2.5, axis: "z", eave_a: 4, eave_b: 4, pitch_a: 35, pitch_b: 35, base: 3.5, dormer: true, overhang: 0.15 });
  const alone = buildRoof(house({ type: "custom", pitch: 35, overhang: 0.4, sections: [main] }))[0].solid.count;
  const both = buildRoof(house({ type: "custom", pitch: 35, overhang: 0.4, sections: [main, dormer] }))[0].solid.count;
  assert.ok(both > alone);
});

test("solar modules appear on the roof and a roof window draws its frame, glass and blind", () => {
  const b = house({ type: "gable", pitch: 35, overhang: 0.4 });
  const face = roofFaces(b)[1];
  const field = proposeField(face, "f");
  b.settings.roof.solar = [field];
  const without = buildRoof(house({ type: "gable", pitch: 35, overhang: 0.4 }))[0].solid.count;
  assert.ok(buildRoof(b)[0].solid.count > without);
  b.settings.roof.windows = [{ id: "w", face: face.key, u: 2, v: 1, w: null, h: null, cover: null, contact: null, tilt: null }];
  const closed = buildRoof(b, new Map([["w", { open: 0, tilt: 0, cover: 0 }]]))[0].solid.count;
  const shaded = buildRoof(b, new Map([["w", { open: 1, tilt: 0, cover: 1 }]]))[0].solid.count;
  assert.ok(closed > buildRoof(house({ type: "gable", pitch: 35, overhang: 0.4 }))[0].solid.count);
  assert.equal(shaded, closed + 2, "the blind adds one quad");
});

test("the black and the blue module look differ, and modules use the part's level", () => {
  const b = house({ type: "gable", pitch: 35, overhang: 0.4 });
  const face = roofFaces(b)[1];
  const field = { ...proposeField(face, "f") };
  const black = new GeoBuffer();
  const blue = new GeoBuffer();
  pushModules(black, new LineBuffer(), face, field, 0);
  pushModules(blue, new LineBuffer(), face, { ...field, look: "blue" }, 0);
  assert.notDeepEqual(black.c.slice(0, 3), blue.c.slice(0, 3));
  const lowered = new GeoBuffer();
  pushModules(lowered, new LineBuffer(), face, field, 2);
  assert.ok(Math.abs(black.p[1] - lowered.p[1] - 2) < 1e-9);
});

test("a section's attic leaves the walls under the roof to the floor", () => {
  const solid = new GeoBuffer();
  const solidAttic = new GeoBuffer();
  pushSection(solid, new LineBuffer(), section({ base: 1.0, eave_a: 3, eave_b: 3 }), 0.4, 0);
  pushSection(solidAttic, new LineBuffer(), section({ base: 1.0, eave_a: 3, eave_b: 3 }), 0.4, 0, undefined, true);
  assert.ok(solid.count > solidAttic.count, "gable ends are drawn without an attic");
});

test("a chimney stands on the roof near the ridge and rises above it, in every shape", () => {
  const plain = house({ type: "gable", pitch: 35, overhang: 0.4 });
  const before = buildRoof(plain)[0];
  const b = house({ type: "gable", pitch: 35, overhang: 0.4 });
  const face = roofFaces(b)[0];
  const chimney = proposeChimney(face, "c");
  const place = chimneyPlace(face, chimney);
  assert.ok(place.high > place.low, "the roof slopes under it");
  assert.ok(place.high > 2.6 + 1.5, "near the ridge, well above the eave");
  for (const shape of ["brick", "round", "wide", "steel"] as const) {
    b.settings.roof.chimneys = [{ ...chimney, shape }];
    const part = buildRoof(b)[0];
    assert.ok(part.solid.count > before.solid.count, shape);
    assert.ok(topOf(part.solid) > topOf(before.solid), `${shape} rises above the ridge`);
  }
});
