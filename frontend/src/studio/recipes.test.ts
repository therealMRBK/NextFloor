import assert from "node:assert/strict";
import { test } from "node:test";
import type { PackPart } from "../packs.ts";
import { buildItem, cleanRecipe, newRecipe, STUDIO_KINDS, studioId, switchKind } from "./recipes.ts";

/** What the backend accepts for a part (packs.py): centres within the item, extents and levels as fractions. */
function fits(part: PackPart): boolean {
  const inside = (v: number) => v >= -0.5 && v <= 0.5;
  const span = (v: number) => v >= 0.001 && v <= 1;
  return inside(part.x) && inside(part.z) && span(part.w) && span(part.d) && span(part.h) && part.y >= 0 && part.y <= 1 && part.y + part.h <= 1.0001;
}

test("every studio template builds parts the backend accepts, also at its limits", () => {
  for (const kind of STUDIO_KINDS) {
    for (const patch of [{}, { w: 5, d: 2, h: 2 }, { w: 400, d: 200, h: 300, doors: 6, drawers: 6, shelves: 12 }]) {
      const item = buildItem({ ...newRecipe(kind, "Test"), ...patch }, "test", "de");
      assert.ok(item.parts.length >= 1 && item.parts.length <= 60, `${kind}: ${item.parts.length} parts`);
      for (const part of item.parts) assert.ok(fits(part), `${kind} ${JSON.stringify(patch)}: ${JSON.stringify(part)}`);
    }
  }
});

test("a cabinet gets one front per door and drawer, and a handle on each", () => {
  const item = buildItem({ ...newRecipe("cabinet", "Sideboard"), doors: 3, drawers: 2, handle: "bar", base: "none" }, "sideboard", "de");
  const fronts = item.parts.filter((p) => p.edges === "faint");
  assert.equal(fronts.length, 5);
  assert.equal(item.parts.filter((p) => p.color === "metal").length, 5);
  assert.equal(item.surface, true);
  assert.deepEqual(item.size, [1.2, 0.45, 0.8]);
  assert.equal(item.recipe?.doors, 3);
  assert.deepEqual(item.name, { de: "Sideboard", en: "Sideboard" });
});

test("a cabinet without fronts is open with its boards", () => {
  const item = buildItem({ ...newRecipe("cabinet", ""), doors: 0, drawers: 0, shelves: 3 }, "open", "en");
  // two sides, the back, bottom, three boards and the top
  assert.equal(item.parts.filter((p) => p.edges === "faint").length, 5);
});

test("lamps and devices carry what makes them light up or link", () => {
  const pendant = buildItem({ ...newRecipe("lamp", ""), lamp: "pendant" }, "p", "en");
  assert.equal(pendant.light, "pendant");
  assert.equal(pendant.mount, "ceiling");
  assert.ok(pendant.parts.some((p) => p.glow));
  const tv = buildItem({ ...newRecipe("device", "TV"), mount: "wall", display: true }, "tv", "en");
  assert.equal(tv.electric, true);
  assert.equal(tv.mount, "wall");
  assert.ok(tv.parts.some((p) => p.screen));
  assert.ok(!buildItem({ ...newRecipe("device", ""), display: false }, "box", "en").parts.some((p) => p.screen));
});

test("recipes are kept within the studio's limits and switching the kind keeps name and colours", () => {
  const r = cleanRecipe({ ...newRecipe("shelf", "  Bücher  "), w: 9999, shelves: 40, doors: -3 });
  assert.equal(r.name, "Bücher");
  assert.equal(r.w, 400);
  assert.equal(r.shelves, 12);
  assert.equal(r.doors, 0);
  const lamp = switchKind({ ...r, front: "#112233" }, "lamp");
  assert.equal(lamp.kind, "lamp");
  assert.equal(lamp.name, "Bücher");
  assert.equal(lamp.front, "#112233");
  assert.equal(lamp.h, 160);
});

test("studio item ids come from the name and stay unique", () => {
  assert.equal(studioId("Schuhschrank Flur", []), "schuhschrank_flur");
  assert.equal(studioId("Größe", []), "grosse");
  assert.equal(studioId("Regal", ["regal"]), "regal_2");
  assert.equal(studioId("Regal", ["regal", "regal_2"]), "regal_3");
  assert.equal(studioId("!!!", []), "piece");
});
