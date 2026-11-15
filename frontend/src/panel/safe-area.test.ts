import { test } from "node:test";
import assert from "node:assert/strict";
import { hostPad } from "./safe-area.ts";

test("the padding Home Assistant puts around the panel is taken off its height (#175)", () => {
  // iPhone with Dynamic Island in the companion app: 59px status bar, 34px home indicator
  assert.deepEqual(hostPad({ paddingTop: "59px", paddingBottom: "34px" }), { vertical: 93, bottomHandled: true });
});

test("no padding around the panel (desktop, older Home Assistant) changes nothing", () => {
  assert.deepEqual(hostPad({ paddingTop: "0px", paddingBottom: "0px" }), { vertical: 0, bottomHandled: false });
  assert.deepEqual(hostPad(null), { vertical: 0, bottomHandled: false });
  assert.deepEqual(hostPad({ paddingTop: "", paddingBottom: "auto" }), { vertical: 0, bottomHandled: false });
});

test("a status bar alone does not count as a handled bottom", () => {
  assert.deepEqual(hostPad({ paddingTop: "47px", paddingBottom: "0px" }), { vertical: 47, bottomHandled: false });
});
