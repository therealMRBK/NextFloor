import assert from "node:assert/strict";
import { test } from "node:test";
import { blocking, checkPack, exportPack, freeItemId, fromCm, importPack, newItem, newPack, newPart, partCm, TEMPLATES } from "./model.ts";

test("every template and every new part passes the integration's checks", () => {
  const pack = newPack("Anna Muster");
  pack.items = Object.entries(TEMPLATES).map(([, make]) => make());
  assert.deepEqual(blocking(checkPack(pack)), []);
  for (const shape of ["box", "cyl", "loft", "sweep"] as const) {
    const item = newItem("x", "X");
    item.parts = [newPart(shape)];
    assert.deepEqual(blocking(checkPack({ ...pack, items: [item] })), [], shape);
  }
  assert.equal(pack.id, "annamuster.furniture");
});

test("the checks find what the import refuses", () => {
  const pack = newPack("me");
  const keys = (p: typeof pack) => checkPack(p).map((x) => x.key);
  assert.ok(keys({ ...pack, id: "nextfloor.mine" }).includes("reserved_id"));
  assert.ok(keys({ ...pack, id: "Bad Id" }).includes("bad_pack_id"));
  assert.ok(keys({ ...pack, publisher: " " }).includes("bad_publisher"));
  const twice = { ...pack, items: [newItem("a", "A"), newItem("a", "B")] };
  assert.ok(keys(twice).includes("duplicate_item_id"));
  const item = newItem("a", "A");
  item.parts[0] = { ...item.parts[0], z: 0.53 };
  assert.ok(checkPack({ ...pack, items: [item] }).some((p) => p.key === "bad_value" && p.vars?.field === "z"));
  item.parts = Array.from({ length: 61 }, () => newPart("box"));
  assert.ok(keys({ ...pack, items: [item] }).includes("part_count"));
  const sweep = newItem("s", "S");
  sweep.parts = [{ ...newPart("sweep"), stations: [[0, 0, 1, 1]] }];
  assert.ok(keys({ ...pack, items: [sweep] }).includes("sweep_stations"));
});

test("a part reaching out of the item is only a warning", () => {
  const item = newItem("a", "A");
  item.parts = [{ ...newPart("box"), x: 0.4, w: 0.4 }];
  const problems = checkPack({ ...newPack("me"), items: [item] });
  assert.deepEqual(problems.map((p) => p.key), ["outside"]);
  assert.deepEqual(blocking(problems), []);
});

test("centimetres and fractions turn into each other", () => {
  const size: [number, number, number] = [0.8, 0.5, 1.2];
  const part = { ...newPart("box"), x: 0.25, w: 0.5, y: 0.5, h: 0.25 };
  assert.deepEqual(partCm(part, size), { x: 20, z: 0, y: 60, w: 40, d: 25, h: 30 });
  assert.equal(fromCm("x", 20, size), 0.25);
  assert.equal(fromCm("h", 30, size), 0.25);
  assert.equal(fromCm("d", 10, size), 0.2);
});

test("the exported file imports back unchanged, without defaults and empty fields", () => {
  const pack = newPack("me");
  pack.items = [TEMPLATES.floor_lamp(), TEMPLATES.table()];
  const text = exportPack(pack);
  const file = JSON.parse(text);
  assert.equal(file.format, "nfpack");
  assert.equal(file.version, 1);
  assert.equal("mount" in file.items[0], false);
  assert.equal(file.items[0].light, "floor");
  assert.equal(file.items[1].surface, true);
  assert.equal(JSON.stringify(file.items[1].parts).includes("false"), false);
  const back = importPack(text)!;
  assert.equal(back.items.length, 2);
  assert.deepEqual(back.items[0].parts, file.items[0].parts);
  assert.equal(importPack("{}"), null);
  assert.equal(importPack("not json"), null);
});

test("new items get a free id", () => {
  const pack = newPack("me");
  assert.equal(freeItemId(pack, "cabinet"), "cabinet_2");
  assert.equal(freeItemId(pack, "table"), "table");
});
