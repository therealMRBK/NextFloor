// What the editor writes must be what the server accepts (#123, #128: a plan that cannot be saved is the worst kind of bug).
// This test builds plans with the roof, overhang, dormer and raised-room operations of the editor and keeps them in
// tests/fixtures/frontend_plans.json; tests/test_schema_contract.py (Python, CI) validates that file against schema.py.
// After a change that is meant to alter what the editor writes: UPDATE_FIXTURES=1 npm test

import assert from "node:assert/strict";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { test } from "node:test";
import { normalizeBuilding, type Building, type RoofSection } from "./model.ts";
import { proposeDormer, roofSectionsFromRooms } from "./roof-sections.ts";

const FIXTURE = new URL("../../tests/fixtures/frontend_plans.json", import.meta.url);
// @ts-expect-error the preview data is plain JavaScript
const demo = (await import("../../preview/demo-data.js")) as { DEMO_BUILDING: Building };

function plans() {
  const base = normalizeBuilding(structuredClone(demo.DEMO_BUILDING));
  // a raised and a sunken room (#57, #131)
  const rooms = base.floors[0].rooms;
  if (rooms[0]) rooms[0].floor_offset = 0.305;
  if (rooms[1]) rooms[1].floor_offset = -0.2;
  const roofs: Record<string, unknown> = {};
  const shapes: NonNullable<RoofSection["shape"]>[] = ["gable", "halfhip", "hip", "mansard", "pyramid", "pent", "flat", "parapet"];
  for (const shape of shapes) {
    const sections: RoofSection[] = roofSectionsFromRooms(base).map((s, i) => ({ ...s, shape, flip: i % 2 === 0, rotation: i === 1 ? 30 : null, overhang_sides: i % 2 ? { a: 0.05, u0: 0.1 } : null }));
    if (sections[0]) sections.push(proposeDormer(sections[0] as never, "a", "dormer_1") as RoofSection);
    roofs[shape] = { ...base.settings.roof, type: "custom", sections };
  }
  return { base, roofs };
}

test("the plans the editor writes are the ones the server schema accepts (fixture for tests/test_schema_contract.py)", () => {
  const text = JSON.stringify(plans(), null, 1) + "\n";
  if (process.env.UPDATE_FIXTURES === "1" || !existsSync(FIXTURE)) writeFileSync(FIXTURE, text);
  assert.equal(readFileSync(FIXTURE, "utf8"), text, "tests/fixtures/frontend_plans.json is stale: run UPDATE_FIXTURES=1 npm test");
});
