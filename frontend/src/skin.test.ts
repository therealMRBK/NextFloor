import assert from "node:assert/strict";
import { test } from "node:test";
import { skinMode } from "./styles.ts";

test("an explicit scheme wins over Home Assistant's theme", () => {
  assert.equal(skinMode("light", { themes: { darkMode: true } }), "light");
  assert.equal(skinMode("dark", { themes: { darkMode: false } }), "dark");
});

test("auto follows Home Assistant's dark mode", () => {
  assert.equal(skinMode("auto", { themes: { darkMode: true } }), "dark");
  assert.equal(skinMode(undefined, { themes: { darkMode: false } }), "light");
});

test("auto without Home Assistant falls back to dark when the device has no preference", () => {
  assert.equal(skinMode("auto", undefined), "dark");
});
