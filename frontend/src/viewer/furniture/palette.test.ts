import assert from "node:assert/strict";
import { test } from "node:test";
import { applyFurnitureColors, C, M } from "./palette.ts";
import { FURNITURE_ROLES, STOCK_ROLE_HEX } from "../../furniture-colors.ts";

test("chosen role colours reach the palette and its materials, and go back to stock", () => {
  const stockBody = C.body;
  for (const role of FURNITURE_ROLES) assert.equal(STOCK_ROLE_HEX[role], `#${C[role].toString(16).padStart(6, "0")}`);
  assert.equal(applyFurnitureColors({ body: "#804020", fabric: "#00ff00", metal: "nope" }), true);
  assert.equal(C.body, 0x804020);
  assert.equal(M.body.side, 0x804020);
  assert.notEqual(M.body.top, 0x804020);
  assert.equal(M.cushion.side, 0x00ff00);
  assert.equal(M.cushionSoft.top, C.fabricTop);
  assert.equal(C.metal, 0x2a3a60);
  // the same colours again change nothing
  assert.equal(applyFurnitureColors({ body: "#804020", fabric: "#00ff00" }), false);
  assert.equal(applyFurnitureColors(null), true);
  assert.equal(C.body, stockBody);
  assert.equal(M.body.side, stockBody);
});
