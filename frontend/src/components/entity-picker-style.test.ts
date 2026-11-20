import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

// A glass theme can make Home Assistant's card colour see-through; the entity picker's field and its list must stay
// readable over the plan then (#201): an opaque colour underneath, the card colour as a layer on top.
test("the entity picker's input and list have an opaque background colour under the card colour", () => {
  const src = readFileSync(new URL("./entity-picker.ts", import.meta.url), "utf8");
  const opaque = src.match(/background-color: var\(--nf-bg, #[0-9a-f]{6}\);\s*background-image: linear-gradient\(var\(--nf-chrome-solid\), var\(--nf-chrome-solid\)\);/g) ?? [];
  assert.equal(opaque.length, 2, "both the input and the .list");
  assert.ok(!/background: var\(--nf-chrome-solid\)/.test(src));
});
