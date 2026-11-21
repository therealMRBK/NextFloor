import assert from "node:assert/strict";
import { test } from "node:test";
import type { HomeAssistant } from "./types.ts";
import { controlHass, withoutControl } from "./view-only.ts";

const hass = (calls: string[]) => ({ language: "de", states: {}, callService: async (d: string, s: string) => void calls.push(`${d}.${s}`) }) as unknown as HomeAssistant;

test("view only turns every service call into a no-op and keeps everything else", async () => {
  const calls: string[] = [];
  const real = hass(calls);
  const quiet = withoutControl(real);
  await quiet.callService("light", "toggle", {});
  assert.deepEqual(calls, []);
  assert.equal(quiet.language, "de");
  await real.callService("light", "toggle", {});
  assert.deepEqual(calls, ["light.toggle"]);
});

test("the quiet copy is the same object for the same hass, so nothing re-renders for nothing", () => {
  const real = hass([]);
  assert.equal(withoutControl(real), withoutControl(real));
  assert.notEqual(withoutControl(hass([])), withoutControl(real));
});

test("controlHass hands out the real hass unless view only is on", () => {
  const real = hass([]);
  assert.equal(controlHass(real, false), real);
  assert.notEqual(controlHass(real, true), real);
  assert.equal(controlHass(undefined, true), undefined);
});
