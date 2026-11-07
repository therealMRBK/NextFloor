import assert from "node:assert/strict";
import { test } from "node:test";
import { arcPoints, pointOnDome, type SunArcPlace } from "./sun-arc.ts";

const place: SunArcPlace = { centre: [10, 20], radius: 10, north: 0, latitude: 50.9, longitude: 8.2, zone: "Europe/Berlin" };

test("a point of the dome: the horizon lies on the ring, the zenith above the middle", () => {
  const [x, y, z] = pointOnDome(place, { elevation: 0, azimuth: 0 });
  assert.deepEqual([Math.round(x * 100) / 100, y, Math.round(z * 100) / 100], [10, 0, 10], "north is up the plan, so z shrinks");
  const [ex, , ez] = pointOnDome(place, { elevation: 0, azimuth: 90 });
  assert.deepEqual([Math.round(ex * 100) / 100, Math.round(ez * 100) / 100], [20, 20], "east is to the right");
  const [zx, zy, zz] = pointOnDome(place, { elevation: 90, azimuth: 123 });
  assert.ok(Math.abs(zx - 10) < 1e-9 && Math.abs(zz - 20) < 1e-9 && Math.abs(zy - 9) < 1e-9);
  const [rx, , rz] = pointOnDome({ ...place, north: 90 }, { elevation: 0, azimuth: 0 });
  assert.deepEqual([Math.round(rx * 100) / 100, Math.round(rz * 100) / 100], [20, 20], "north turned a quarter clockwise points right");
});

test("today's arc rises in the east, peaks in the south and sets in the west, higher in summer than in winter", () => {
  const summer = arcPoints(place, new Date("2026-06-21T10:00:00Z"));
  const winter = arcPoints(place, new Date("2026-12-21T10:00:00Z"));
  assert.ok(summer.length > winter.length && winter.length > 10);
  const top = (pts: number[][]) => Math.max(...pts.map((p) => p[1]));
  assert.ok(top(summer) > top(winter) + 2);
  assert.ok(summer[0][0] > place.centre[0] - 1 && summer[0][2] < place.centre[1], "the first point lies north-east");
  assert.ok(summer[summer.length - 1][0] < place.centre[0] + 1, "the last lies in the west half");
  const noon = summer.reduce((best, p) => (p[1] > best[1] ? p : best));
  assert.ok(noon[2] > place.centre[1], "the highest point lies south of the middle (z grows to the south)");
});
