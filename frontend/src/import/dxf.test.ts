import assert from "node:assert/strict";
import { test } from "node:test";
import { importDxf } from "./dxf.ts";

const dxf = (entities: string, units = "4") =>
  ["0", "SECTION", "2", "HEADER", "9", "$INSUNITS", "70", units, "0", "ENDSEC", "0", "SECTION", "2", "ENTITIES", entities, "0", "ENDSEC", "0", "EOF"].join("\n");

test("closed polylines become rooms, lines free walls, in metres with z down the plan", () => {
  const room = ["0", "LWPOLYLINE", "8", "0", "90", "4", "70", "1", "10", "0", "20", "0", "10", "4000", "20", "0", "10", "4000", "20", "3000", "10", "0", "20", "3000"].join("\n");
  const line = ["0", "LINE", "8", "0", "10", "2000", "20", "0", "11", "2000", "21", "3000"].join("\n");
  const { building, report } = importDxf(dxf(`${room}\n${line}`));
  assert.deepEqual([report.rooms, report.walls], [1, 1]);
  const r = building.floors[0].rooms[0];
  assert.deepEqual(r.points, [[0, 3], [4, 3], [4, 0], [0, 0]], "y mirrored into z, mm into m");
  assert.deepEqual(building.floors[0].walls![0].a, [2, 3]);
});

test("a drawing without shapes is refused", () => {
  assert.throws(() => importDxf(dxf("")), /dxf_empty/);
});
