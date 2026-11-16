import assert from "node:assert/strict";
import { test } from "node:test";
import { BufferGeometry, Group, Scene } from "three";
import { WeatherLayer, type SkyView } from "./live-weather.ts";

const view = (rain = 0, snow = 0, hail = 0, low = false): SkyView => ({
  weather: { rain, snow, hail, fog: 0, cloud: 0.4, wind: 0, windFrom: null, lightning: false },
  sun: null, north: 0, sky: [20, 28, 44], disc: false, low,
});

function layer() {
  const particle = () => ({ geometry: new BufferGeometry(), visible: false });
  const rain = particle(), snow = particle(), hail = particle();
  // Avoid canvas textures and WebGL; exercise the real set() method and particle geometries.
  let seeds = 0;
  const weather = Object.assign(Object.create(WeatherLayer.prototype) as object, {
    group: new Group(), scene: new Scene(), view: view(), rain, snow, hail,
    seed: () => { seeds++; }, placeDisc: () => {}, placeNight: () => {}, endBolt: () => {},
  });
  return { weather: weather as unknown as WeatherLayer, rain, snow, hail, seeds: () => seeds };
}

test("an attached weather layer starts, changes and stops rain without reseeding", () => {
  const l = layer();
  l.weather.set(view(0.25));
  assert.equal(l.rain.visible, true);
  const first = l.rain.geometry.drawRange.count;
  assert.ok(first > 0);
  l.weather.set(view(0.75));
  assert.ok(l.rain.geometry.drawRange.count > first);
  l.weather.set(view());
  assert.equal(l.rain.visible, false);
  assert.equal(l.rain.geometry.drawRange.count, 0);
  assert.equal(l.seeds(), 0, "normal updates preserve particle positions");
});

test("rain changes into snow and hail without a view switch", () => {
  const l = layer();
  l.weather.set(view(1));
  l.weather.set(view(0, 0.5));
  assert.equal(l.rain.visible, false);
  assert.equal(l.snow.visible, true);
  assert.ok(l.snow.geometry.drawRange.count > 0);
  l.weather.set(view(0, 0, 0.5));
  assert.equal(l.snow.visible, false);
  assert.equal(l.hail.visible, true);
  assert.ok(l.hail.geometry.drawRange.count > 0);
  l.weather.set(null);
  assert.equal(l.hail.visible, false);
  assert.equal(l.hail.geometry.drawRange.count, 0);
});

test("tablet quality changes the particle count and unchanged weather stays stable", () => {
  const l = layer();
  l.weather.set(view(1, 1, 1));
  const full = [l.rain, l.snow, l.hail].map(p => p.geometry.drawRange.count);
  l.weather.set(view(1, 1, 1, true));
  for (const [i, p] of [l.rain, l.snow, l.hail].entries()) assert.equal(p.geometry.drawRange.count, Math.round(full[i] * 0.3));
  const seeds = l.seeds();
  l.weather.set(view(1, 1, 1, true));
  assert.equal(l.seeds(), seeds);
});
