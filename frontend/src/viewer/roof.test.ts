import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Room } from "../model.ts";
import { buildRoof, roofFloor } from "./roof.ts";

const rect = (id: string, x1: number, z1: number): Room => ({ id, name: id, area_id: null, points: [[0, 0], [x1, 0], [x1, z1], [0, z1]], floor_material: "wood" });

function house(type: "none" | "flat" | "gable") {
  const b = emptyBuilding();
  b.floors = [
    { ...newFloor("eg", "EG", 0), rooms: [rect("a", 10, 8)] },
    { ...newFloor("og", "OG", 2.75), rooms: [rect("b", 10, 8)] },
    { ...newFloor("dg", "Dachboden", 5.5) },
  ];
  b.settings.roof = { type, pitch: 45, overhang: 0.5 };
  return b;
}

test("the roof sits on the highest floor with rooms", () => {
  assert.equal(roofFloor(house("gable"))?.id, "og");
  assert.equal(buildRoof(house("none")).length, 0);
});

test("a gable roof rises to half the house depth times the slope", () => {
  const roof = buildRoof(house("gable"))[0];
  const p = roof.solid.p;
  let top = -Infinity;
  for (let i = 1; i < p.length; i += 3) top = Math.max(top, p[i]);
  // 8 m deep + 2 × (0.24 wall + 0.5 overhang) = 9.48 m; half of it at 45° rises as much
  assert.ok(Math.abs(top - 9.48 / 2) < 1e-6, `ridge at ${top}`);
  assert.ok(buildRoof(house("flat"))[0].solid.count > 0);
});

test("a gable ridge can run along the short side", () => {
  // highest points of the roof: they lie on the ridge, so their spread shows its direction
  const ridge = (dir?: "long" | "short") => {
    const b = house("gable");
    b.settings.roof.ridge = dir;
    const p = buildRoof(b)[0].solid.p;
    let top = -Infinity;
    for (let i = 1; i < p.length; i += 3) top = Math.max(top, p[i]);
    let x = [Infinity, -Infinity];
    let z = [Infinity, -Infinity];
    for (let i = 0; i < p.length; i += 3) {
      if (Math.abs(p[i + 1] - top) > 1e-6) continue;
      x = [Math.min(x[0], p[i]), Math.max(x[1], p[i])];
      z = [Math.min(z[0], p[i + 2]), Math.max(z[1], p[i + 2])];
    }
    return { top, dx: x[1] - x[0], dz: z[1] - z[0] };
  };
  // the house is 10 m along x and 8 m along z
  const long = ridge();
  assert.ok(long.dx > 10 && long.dz < 1e-6, JSON.stringify(long));
  const short = ridge("short");
  assert.ok(short.dz > 8 && short.dx < 1e-6, JSON.stringify(short));
  // across the 10 m side: 10 + 2 × (0.24 + 0.5) = 11.48 m, half of it rises at 45°
  assert.ok(Math.abs(short.top - 11.48 / 2) < 1e-6, `ridge at ${short.top}`);
});
