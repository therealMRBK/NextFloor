import assert from "node:assert/strict";
import { test } from "node:test";
import { compositeOver } from "./styles.ts";

// A glass theme makes Home Assistant's card colour see-through (#201, #220): it is blended over the page colour to get a solid one.
test("a see-through card colour is blended over the page colour", () => {
  assert.deepEqual(compositeOver([255, 255, 255, 0.1], [16, 24, 32]), [40, 47, 54]);
  assert.deepEqual(compositeOver([255, 255, 255, 0], [16, 24, 32]), [16, 24, 32]);
  assert.deepEqual(compositeOver([200, 100, 50, 1], [16, 24, 32]), [200, 100, 50]);
});
