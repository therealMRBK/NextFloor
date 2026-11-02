import assert from "node:assert/strict";
import { test } from "node:test";
import { dayStart, weekFromStats } from "./week-bars.ts";

test("kWh per day from daily mean power, consumption from the balance when no sensor tells", () => {
  const now = new Date(2026, 10, 2, 12, 0).getTime(); // noon: today counts 12 hours
  const day = (back: number) => new Date(dayStart(now, back)).toISOString();
  const stats = {
    "sensor.pv": [{ start: day(1), mean: 500 }, { start: day(0), mean: 1000 }],
    "sensor.grid": [{ start: day(1), mean: 250 }, { start: day(0), mean: -400 }],
  };
  const week = weekFromStats(stats, { solar: ["sensor.pv"], grid: "sensor.grid", gridInvert: false, battery: [], batteryInvert: false, consumption: null }, now);
  assert.equal(week.days.length, 7);
  assert.equal(week.solar[5], 12, "500 W all day");
  assert.equal(week.solar[6], 12, "1000 W for the 12 hours so far");
  assert.equal(week.use[5], 18, "500 + 250 W");
  assert.equal(week.use[6], 7.2, "1000 − 400 W for 12 h");
  assert.equal(week.solar[0], null, "no statistics that day");
});
