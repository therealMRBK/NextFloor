import { test } from "node:test";
import assert from "node:assert/strict";
import { hostPad } from "./safe-area.ts";

test("the padding Home Assistant puts around the panel is read per side (#175)", () => {
  // iPhone with Dynamic Island in the companion app: 59px status bar, 34px home indicator
  assert.deepEqual(hostPad({ paddingTop: "59px", paddingBottom: "34px" }), { top: 59, bottom: 34 });
});

test("no padding around the panel (desktop, older Home Assistant) changes nothing", () => {
  assert.deepEqual(hostPad({ paddingTop: "0px", paddingBottom: "0px" }), { top: 0, bottom: 0 });
  assert.deepEqual(hostPad(null), { top: 0, bottom: 0 });
  assert.deepEqual(hostPad({ paddingTop: "", paddingBottom: "auto" }), { top: 0, bottom: 0 });
});

test("a status bar alone leaves the bottom at zero", () => {
  assert.deepEqual(hostPad({ paddingTop: "47px", paddingBottom: "0px" }), { top: 47, bottom: 0 });
});
