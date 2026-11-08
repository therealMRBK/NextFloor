import assert from "node:assert/strict";
import { test } from "node:test";
import { conditionIcon, forecastDays } from "./forecast.ts";

const NOW = new Date(2026, 10, 8, 15, 0).getTime();
const at = (day: number, hour = 12) => new Date(2026, 10, day, hour).toISOString();

test("the forecast turns into one row per day from today, as many as asked for", () => {
  const raw = [
    { datetime: at(7), condition: "sunny", temperature: 9 },
    { datetime: at(8), condition: "rainy", temperature: 11.4, templow: 4, precipitation: 3.2, precipitation_probability: 80 },
    { datetime: at(8, 18), condition: "sunny", temperature: 30 },
    { datetime: at(9), condition: "partlycloudy", temperature: "12", templow: "5" },
    { datetime: at(10), condition: "snowy", temperature: 1 },
  ];
  const days = forecastDays(raw, 2, NOW);
  assert.equal(days.length, 2, "yesterday left out, two days asked for");
  assert.deepEqual(days[0], { day: new Date(2026, 10, 8).getTime(), icon: "🌦️", high: 11.4, low: 4, rain: 3.2, chance: 80 });
  assert.equal(days[1].icon, "⛅");
  assert.deepEqual([days[1].high, days[1].low, days[1].rain, days[1].chance], [12, 5, null, null], "numbers as text count, missing ones stay empty");
});

test("an answer without a forecast gives no rows, and an unknown condition a cloud", () => {
  assert.deepEqual(forecastDays(undefined, 5, NOW), []);
  assert.deepEqual(forecastDays([{ condition: "sunny" }], 5, NOW), [], "a day without a date is left out");
  assert.equal(conditionIcon("tornado"), "☁️");
});
