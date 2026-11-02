import assert from "node:assert/strict";
import { test } from "node:test";
import { sunPosition, todayAt } from "./sun-position.ts";

test("midsummer noon in Dresden: the sun stands high in the south", () => {
  // 21 June 2026, 11:05 UTC is about solar noon at 13.7° east
  const { elevation, azimuth } = sunPosition(new Date(Date.UTC(2026, 5, 21, 11, 5)), 51.05, 13.74);
  assert.ok(Math.abs(elevation - 62.4) < 1, `elevation ${elevation}`);
  assert.ok(Math.abs(azimuth - 180) < 3, `azimuth ${azimuth}`);
});

test("winter morning: low in the south east; midnight: below the horizon", () => {
  const morning = sunPosition(new Date(Date.UTC(2026, 11, 21, 8, 0)), 51.05, 13.74);
  assert.ok(morning.elevation > 0 && morning.elevation < 10, `elevation ${morning.elevation}`);
  assert.ok(morning.azimuth > 120 && morning.azimuth < 160, `azimuth ${morning.azimuth}`);
  assert.ok(sunPosition(new Date(Date.UTC(2026, 11, 21, 23, 0)), 51.05, 13.74).elevation < -40);
});

test("the slider's hour is the home's hour, whatever zone the browser is in", () => {
  const now = new Date(Date.UTC(2026, 10, 2, 20, 0));
  // 10:00 in Berlin (winter time, UTC+1) is 09:00 UTC; in Bangkok (UTC+7) 03:00 UTC
  assert.equal(todayAt(10, "Europe/Berlin", now).toISOString(), "2026-11-02T09:00:00.000Z");
  assert.equal(todayAt(10, "Asia/Bangkok", now).toISOString(), "2026-11-03T03:00:00.000Z", "already the 3rd in Bangkok");
  // summer time: 10:00 in Berlin on 21 June is 08:00 UTC
  assert.equal(todayAt(10.5, "Europe/Berlin", new Date(Date.UTC(2026, 5, 21, 12))).toISOString(), "2026-06-21T08:30:00.000Z");
  // an unknown zone falls back to the browser's
  assert.ok(Number.isFinite(todayAt(10, "Nowhere/Land", now).getTime()));
});
