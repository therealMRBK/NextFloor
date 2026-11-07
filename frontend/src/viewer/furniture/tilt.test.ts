import assert from "node:assert/strict";
import { test } from "node:test";
import { GeoBuffer, LineBuffer } from "../geo.ts";
import { pushFurniture, tiltBuilt } from "./furniture.ts";
import type { Furniture } from "../../model.ts";

const piece = (extra: Partial<Furniture> = {}): Furniture => ({ id: "t", type: "table", x: 2, z: 3, rotation: 0, w: 1.6, d: 0.8, h: 0.75, variant: null, ...extra });
const topOf = (buf: GeoBuffer) => Math.max(...buf.p.filter((_, i) => i % 3 === 1));

test("without a tilt nothing moves; a tilt about the width axis leans the top towards the front", () => {
  const upright = new GeoBuffer();
  pushFurniture(upright, new LineBuffer(), new GeoBuffer(), piece());
  const same = new GeoBuffer();
  pushFurniture(same, new LineBuffer(), new GeoBuffer(), piece({ tilt_x: 0, tilt_z: null }));
  assert.deepEqual(same.p, upright.p);
  const leaning = new GeoBuffer();
  pushFurniture(leaning, new LineBuffer(), new GeoBuffer(), piece({ tilt_x: 30 }));
  assert.notDeepEqual(leaning.p, upright.p);
  const zs = (b: GeoBuffer) => b.p.filter((_, i) => i % 3 === 2);
  assert.ok(Math.max(...zs(leaning)) - Math.min(...zs(leaning)) > Math.max(...zs(upright)) - Math.min(...zs(upright)) - 1e-9 || topOf(leaning) < topOf(upright), "its top is no longer straight above its base");
  assert.ok(Math.abs(topOf(leaning) - topOf(upright)) > 0.01, "the height changed");
});

test("tilting turns about the middle of the underside and keeps lengths", () => {
  const buf = new GeoBuffer();
  const lines = new LineBuffer();
  buf.p.push(2, 0, 3, 3, 0, 3, 2, 1, 3);
  lines.p.push(2, 1, 3, 2, 0, 3);
  tiltBuilt(buf, lines, { vertex: 0, line: 0 }, { x: 2, z: 3, rotation: 0, tilt_x: 0, tilt_z: 90 }, 0);
  // a roll of 90° about the depth axis (z) lays the up direction onto the width direction: (2,1,3) → (1,0,3)
  assert.ok(Math.abs(buf.p[6] - 1) < 1e-9 && Math.abs(buf.p[7]) < 1e-9 && Math.abs(buf.p[8] - 3) < 1e-9, `${buf.p.slice(6, 9)}`);
  assert.ok(Math.abs(lines.p[0] - 1) < 1e-9, "lines turn with the geometry");
  assert.deepEqual(buf.p.slice(0, 3), [2, 0, 3], "the pivot stays");
});
