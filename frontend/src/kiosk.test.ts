import assert from "node:assert/strict";
import { test } from "node:test";
import { nightActive } from "./kiosk.ts";
import type { HomeAssistant } from "./types.ts";

const at = (h: number, m = 0) => new Date(2026, 0, 1, h, m);

test("night dimming follows the sun or a time range that may cross midnight", () => {
  const hass = { states: { "sun.sun": { entity_id: "sun.sun", state: "below_horizon", attributes: {} } } } as unknown as HomeAssistant;
  assert.equal(nightActive("off", hass), false);
  assert.equal(nightActive(undefined, hass), false);
  assert.equal(nightActive("sun", hass), true);
  hass.states["sun.sun"].state = "above_horizon";
  assert.equal(nightActive("sun", hass), false);
  assert.equal(nightActive("22:00-06:00", hass, at(23)), true);
  assert.equal(nightActive("22:00-06:00", hass, at(3, 30)), true);
  assert.equal(nightActive("22:00-06:00", hass, at(6)), false);
  assert.equal(nightActive("22:00-06:00", hass, at(12)), false);
  assert.equal(nightActive("13:00-14:00", hass, at(13, 30)), true);
  assert.equal(nightActive("13:00-14:00", hass, at(14)), false);
  assert.equal(nightActive("garbage", hass, at(13)), false);
});
