import assert from "node:assert/strict";
import { test } from "node:test";
import { airingNeed, isSummer, mouldRisk } from "./room-climate.ts";

test("mould risk grows with humidity at the cold wall", () => {
  assert.equal(mouldRisk(21, 45), 0, "a dry living room");
  assert.ok(mouldRisk(18, 70)! > 80, "a cool damp bedroom");
  assert.ok(mouldRisk(21, 60)! > 20 && mouldRisk(21, 60)! < 70);
  assert.equal(mouldRisk(null, 60), null);
});

test("when to air a room, and the season", () => {
  assert.equal(airingNeed(1200, 50, 10), "co2");
  assert.equal(airingNeed(600, 68, 40), "humidity");
  assert.equal(airingNeed(600, 68, 90), "mould");
  assert.equal(airingNeed(600, 50, 0), null);
  assert.equal(isSummer(new Date(2026, 6, 1)), true);
  assert.equal(isSummer(new Date(2026, 0, 1)), false);
  assert.equal(isSummer(new Date(2026, 0, 1), -33), true, "January is summer in Sydney");
});
