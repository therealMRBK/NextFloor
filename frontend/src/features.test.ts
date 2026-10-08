import assert from "node:assert/strict";
import { test } from "node:test";
import { FEATURES, REPO_URL } from "./features.ts";

test("every live feature is listed once, and the project link points to GitHub", () => {
  assert.equal(new Set(FEATURES).size, FEATURES.length);
  assert.ok(REPO_URL.startsWith("https://github.com/"));
});
