import assert from "node:assert/strict";
import { test } from "node:test";
import type { HomeAssistant } from "../types.ts";
import { bearing, chosenEffects, readSkyWeather, windKmh } from "./sky-weather.ts";

function hassWith(state: string, attributes: Record<string, unknown> = {}): HomeAssistant {
  return {
    language: "de",
    connection: {} as HomeAssistant["connection"],
    callWS: async () => undefined as never,
    callService: async () => undefined,
    areas: {},
    devices: {},
    entities: {},
    states: { "weather.home": { entity_id: "weather.home", state, attributes } },
  };
}

test("each condition has a look; missing or unknown states give no weather", () => {
  const rain = readSkyWeather(hassWith("pouring"), "weather.home")!;
  assert.equal(rain.rain, 1);
  assert.ok(rain.cloud >= 0.9);
  assert.equal(readSkyWeather(hassWith("lightning-rainy"), "weather.home")!.lightning, true);
  assert.equal(readSkyWeather(hassWith("hail"), "weather.home")!.hail > 0, true);
  assert.equal(readSkyWeather(hassWith("unavailable"), "weather.home"), null);
  assert.equal(readSkyWeather(hassWith("sunny"), null), null);
  assert.equal(readSkyWeather(hassWith("something-new"), "weather.home"), null);
});

test("cloud coverage, wind speed, gusts and bearing refine the look", () => {
  const w = readSkyWeather(hassWith("partlycloudy", { cloud_coverage: 70, wind_speed: 10, wind_speed_unit: "m/s", wind_bearing: 225 }), "weather.home")!;
  assert.equal(w.cloud, 0.7);
  assert.ok(Math.abs(w.wind - 36 / 70) < 1e-9);
  assert.equal(w.windFrom, 225);
  const gusty = readSkyWeather(hassWith("sunny", { wind_speed: 5, wind_gust_speed: 90 }), "weather.home")!;
  assert.ok(gusty.wind >= 0.9);
  // rain under a clear sky report still comes with clouds
  assert.ok(readSkyWeather(hassWith("rainy", { cloud_coverage: 10 }), "weather.home")!.cloud >= 0.6);
});

test("rain below freezing becomes sleet, heavy precipitation more streaks", () => {
  const sleet = readSkyWeather(hassWith("rainy", { temperature: -1 }), "weather.home")!;
  assert.ok(sleet.snow > 0 && sleet.rain < 0.5);
  const fahrenheit = readSkyWeather(hassWith("rainy", { temperature: 30, temperature_unit: "°F" }), "weather.home")!;
  assert.ok(fahrenheit.snow > 0);
  assert.equal(readSkyWeather(hassWith("rainy", { temperature: 12 }), "weather.home")!.snow, 0);
  assert.equal(readSkyWeather(hassWith("rainy", { precipitation: 8 }), "weather.home")!.rain, 1);
});

test("units and compass bearings", () => {
  assert.equal(windKmh(10, "m/s"), 36);
  assert.ok(Math.abs(windKmh(10, "kn") - 18.52) < 1e-9);
  assert.equal(windKmh(20, "km/h"), 20);
  assert.equal(bearing("NW"), 315);
  assert.equal(bearing("SO"), 135);
  assert.equal(bearing(-90), 270);
  assert.equal(bearing("x"), null);
});

test("only the chosen effects stay", () => {
  const storm = readSkyWeather(hassWith("lightning-rainy"), "weather.home")!;
  const only = chosenEffects({ ...storm, fog: 0.5 }, ["clouds"]);
  assert.equal(only.rain, 0);
  assert.equal(only.lightning, false);
  assert.equal(only.fog, 0);
  assert.ok(only.cloud > 0);
  assert.equal(chosenEffects({ ...storm, fog: 0.5 }, null).fog, 0);
});
