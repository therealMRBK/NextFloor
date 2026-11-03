import assert from "node:assert/strict";
import { test } from "node:test";
import { energyCost, monthStart, roomEnergyFromStats } from "./room-energy.ts";
import { dayStart } from "./week-bars.ts";

test("today and the month come from the daily mean power of the room's sensors", () => {
  const now = new Date(2026, 10, 3, 12, 0).getTime();
  const iso = (t: number) => new Date(t).toISOString();
  const stats = {
    "sensor.tv": [
      { start: iso(dayStart(now, 2)), mean: 100 },
      { start: iso(dayStart(now, 1)), mean: 50 },
      { start: iso(dayStart(now)), mean: 200 },
    ],
    "sensor.lamp": [{ start: iso(dayStart(now)), mean: -5 }],
  };
  const e = roomEnergyFromStats(stats, ["sensor.tv", "sensor.lamp"], now)!;
  // today: 200 W for the 12 hours gone; the month: 2.4 + 1.2 + 2.4 kWh
  assert.equal(e.today, 2.4);
  assert.equal(e.month, 6);
  assert.equal(roomEnergyFromStats({}, ["sensor.tv"], now), null);
  assert.equal(new Date(monthStart(now)).getDate(), 1);
});

test("the cost follows the tariff's unit", () => {
  assert.deepEqual(energyCost(10, { value: 0.31, unit: "EUR/kWh" }), { value: 3.1, currency: "€" });
  assert.deepEqual(energyCost(10, { value: 31, unit: "ct/kWh" }), { value: 3.1, currency: "€" });
  assert.deepEqual(energyCost(10, { value: 0.25, unit: "CHF/kWh" }), { value: 2.5, currency: "CHF" });
  assert.equal(energyCost(10, { value: 5, unit: "W" }), null);
  assert.equal(energyCost(10, null), null);
});
