import assert from "node:assert/strict";
import { test } from "node:test";
import { wallboxPhase } from "./wallbox.ts";

test("a wallbox status is read by words, not by fragments (#129)", () => {
  const phase = (s: string, w: number | null = null) => wallboxPhase(s, false, w);
  assert.equal(phase("charger_charging"), "charging");
  assert.equal(phase("Charging"), "charging");
  assert.equal(phase("lädt"), "charging");
  assert.equal(phase("charger_free"), null, "charger is no charging");
  assert.equal(phase("charger_free_fault"), null);
  assert.equal(phase("charger_insert"), "plugged");
  assert.equal(phase("not_charging"), null);
  assert.equal(phase("ready_to_charge"), "plugged", "waiting for the car is plugged, not charging");
  assert.equal(phase("disconnected"), null);
  assert.equal(phase("unplugged"), null);
  assert.equal(phase("connected"), "plugged");
  assert.equal(phase("charger_free", 7400), "charging", "power wins over the text");
  assert.equal(wallboxPhase("on", true, null), "plugged");
  assert.equal(wallboxPhase("off", true, null), null);
});
