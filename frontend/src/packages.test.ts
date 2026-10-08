import assert from "node:assert/strict";
import { test } from "node:test";
import { furnitureFootprint, pointInPolygon, type Room } from "./model.ts";
import { furnishRoom, PACKAGES } from "./packages.ts";

const room = (w: number, d: number): Room => ({ id: "r", name: "R", area_id: null, points: [[0, 0], [w, 0], [w, d], [0, d]], floor_material: "wood" });

test("every package puts all its furniture inside a normal-sized room", () => {
  let n = 0;
  for (const pkg of PACKAGES) {
    const items = furnishRoom(room(4.2, 3.6), pkg, () => `m${n++}`);
    assert.ok(items.length > 0, pkg);
    for (const f of items) {
      for (const [x, z] of furnitureFootprint(f)) assert.ok(x >= -0.01 && x <= 4.21 && z >= -0.01 && z <= 3.61, `${pkg}: ${f.type} at ${x}/${z}`);
    }
  }
});

test("a kitchen row stands against the back wall, fronts facing into the room", () => {
  let n = 0;
  const items = furnishRoom(room(4.5, 3.5), "kitchen_row", () => `m${n++}`);
  const row = items.filter((f) => ["fridge", "sink", "stove", "dishwasher"].includes(f.type));
  assert.equal(row.length, 4);
  for (const f of row) {
    assert.equal(f.rotation, 0);
    assert.ok(Math.abs(f.z - (f.d / 2 + 0.02)) < 1e-9, `${f.type} flush with the wall`);
  }
});

test("items that do not fit a small wall are left out", () => {
  let n = 0;
  const small = furnishRoom(room(2.0, 2.0), "kitchen_row", () => `m${n++}`);
  const big = furnishRoom(room(5.0, 3.0), "kitchen_row", () => `m${n++}`);
  assert.ok(small.length < big.length);
  // the bed of a bedroom lies with its head at the back wall, inside the room
  const bed = furnishRoom(room(4, 4), "bedroom", () => `m${n++}`).find((f) => f.type === "bed")!;
  assert.ok(pointInPolygon([bed.x, bed.z], room(4, 4).points));
  assert.equal(bed.rotation, 0);
});
