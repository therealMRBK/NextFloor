import assert from "node:assert/strict";
import { test } from "node:test";
import { sunPosition } from "./sun-position.ts";

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
