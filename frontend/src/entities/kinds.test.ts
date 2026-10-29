import assert from "node:assert/strict";
import { test } from "node:test";
import { appColor, assumedCover, defaultHeight, domainOf, entityName, groupCovers, fromCelsius, isActive, isPlaceable, isStatusSensor, isUnavailable, kelvinToRgb, kindOf, markerKind, lightGlow, tempUnit, toCelsius } from "./kinds.ts";
import { entity, hassOf } from "./fixtures.ts";

test("the domain decides the kind; unknown domains have none", () => {
  assert.equal(domainOf("light.kitchen"), "light");
  assert.equal(kindOf("input_boolean.party"), "switch");
  assert.equal(kindOf("binary_sensor.door"), "binary");
  assert.equal(kindOf("vacuum.robot"), null);
  assert.equal(isPlaceable("scene"), false);
  assert.equal(isPlaceable("light"), true);
  assert.equal(isPlaceable(null), false);
});

test("unavailable and unknown count as unavailable, a missing entity too", () => {
  assert.equal(isUnavailable(entity("a.b", "unavailable")), true);
  assert.equal(isUnavailable(entity("a.b", "unknown")), true);
  assert.equal(isUnavailable(undefined), true);
  assert.equal(isUnavailable(entity("a.b", "on")), false);
});

test("a name loses the area it starts with, but not when nothing would be left", () => {
  const hass = hassOf([entity("light.a", "on", { friendly_name: "Lounge ceiling light" }), entity("light.b", "on", { friendly_name: "Lounge" }), entity("light.c", "on", { friendly_name: "Hall lamp" })]);
  assert.equal(entityName(hass, "light.a", "Lounge"), "Ceiling light");
  assert.equal(entityName(hass, "light.b", "Lounge"), "Lounge");
  assert.equal(entityName(hass, "light.c", "Lounge"), "Hall lamp");
  assert.equal(entityName(hass, "light.a"), "Lounge ceiling light");
  assert.equal(entityName(hass, "light.missing"), "light.missing");
});

test("a friendly name that is a number (set in YAML) still reads as text", () => {
  const hass = hassOf([entity("lock.door", "locked", { friendly_name: 12 })]);
  assert.equal(entityName(hass, "lock.door"), "12");
  assert.equal(entityName(hass, "lock.door", "Hall"), "12");
});

test("what counts as active for each kind", () => {
  assert.equal(isActive(entity("light.a", "on")), true);
  assert.equal(isActive(entity("cover.a", "opening")), true);
  assert.equal(isActive(entity("cover.a", "closed")), false);
  assert.equal(isActive(entity("climate.a", "heat", { hvac_action: "heating" })), true);
  assert.equal(isActive(entity("climate.a", "heat", { hvac_action: "idle" })), false);
  assert.equal(isActive(entity("media_player.a", "playing")), true);
  assert.equal(isActive(entity("media_player.a", "paused")), false);
  assert.equal(isActive(entity("lock.a", "unlocked")), true);
  assert.equal(isActive(entity("vacuum.a", "returning")), true);
  assert.equal(isActive(entity("vacuum.a", "docked")), false);
  assert.equal(isActive(undefined), false);
});

test("a status sensor is active while it works, a plain sensor never", () => {
  const printer = entity("sensor.printer", "Printing", { device_class: "enum" });
  assert.equal(isStatusSensor(printer), true);
  assert.equal(isActive(printer), true);
  assert.equal(isActive(entity("sensor.printer", "idle", { device_class: "enum" })), false);
  assert.equal(isActive(entity("sensor.temp", "running", { device_class: "temperature" })), false);
});

test("a light glows with its colour and a perceptual brightness, off lights do not glow", () => {
  assert.equal(lightGlow(entity("light.a", "off")), null);
  assert.deepEqual(lightGlow(entity("light.a", "on", { brightness: 255, rgb_color: [255, 0, 0], color_mode: "rgb" })), { color: [1, 0, 0], level: 1 });
  const dim = lightGlow(entity("light.a", "on", { brightness: 26 }))!;
  assert.ok(dim.level > 0.4 && dim.level < 0.55, String(dim.level));
  assert.deepEqual(lightGlow(entity("light.a", "on"))!.color, [1, 0.71, 0.28]);
});

test("a white light uses its colour temperature, not a stale rgb colour", () => {
  const warm = lightGlow(entity("light.a", "on", { color_mode: "color_temp", rgb_color: [0, 0, 255], color_temp_kelvin: 2200 }))!;
  assert.deepEqual(warm.color, kelvinToRgb(2200));
  assert.ok(kelvinToRgb(6500)[2] > kelvinToRgb(2200)[2], "cool light has more blue");
  assert.deepEqual(kelvinToRgb(1000), kelvinToRgb(2200), "clamped at the warm end");
});

test("a relay's lamp takes colour and brightness from the bulb, unless the bulb is unavailable", () => {
  const relay = entity("switch.relay", "on");
  const bulb = entity("light.bulb", "on", { brightness: 255, rgb_color: [0, 0, 255], color_mode: "rgb" });
  assert.deepEqual(lightGlow(relay, bulb)!.color, [0, 0, 1]);
  assert.deepEqual(lightGlow(relay, entity("light.bulb", "unavailable"))!.color, [1, 0.71, 0.28]);
  assert.equal(lightGlow(entity("switch.relay", "off"), bulb), null);
});

test("default heights: lamps by mount, the rest by kind", () => {
  assert.ok(Math.abs(defaultHeight("light", 2.6) - 2.35) < 1e-9);
  assert.equal(defaultHeight("light", 2.6, "table"), 1.25);
  assert.equal(defaultHeight("cover", 3), 2);
  assert.equal(defaultHeight("sensor", 2.6), 1.4);
  assert.equal(defaultHeight("lock", 2.6), 1.05);
});

test("TV glow follows the running app and is off when the TV is", () => {
  assert.deepEqual(appColor(entity("media_player.tv", "playing", { app_name: "Netflix" })), [0.9, 0.04, 0.08]);
  assert.deepEqual(appColor(entity("media_player.tv", "playing", { source: "Disney+" })), [0.2, 0.35, 1]);
  assert.deepEqual(appColor(entity("media_player.tv", "playing", { app_name: "Something" })), [0.22, 0.88, 1]);
  assert.equal(appColor(entity("media_player.tv", "off")), null);
  assert.equal(appColor(entity("media_player.tv", "unavailable")), null);
});

test("temperature units convert both ways", () => {
  assert.equal(toCelsius(212, "°F"), 100);
  assert.equal(toCelsius(273.15, "K"), 0);
  assert.equal(toCelsius(21, "°C"), 21);
  const us = hassOf([], {}, { config: { unit_system: { temperature: "°F" } } });
  assert.equal(tempUnit(us), "°F");
  assert.equal(fromCelsius(us, 100), 212);
  assert.equal(tempUnit(hassOf([])), "°C");
  assert.equal(fromCelsius(hassOf([]), 20), 20);
});

test("a cover that only sends commands stays unknown but still counts as usable", () => {
  assert.equal(assumedCover(entity("cover.garage", "unknown", { assumed_state: true })), true);
  assert.equal(assumedCover(entity("cover.garage", "unknown")), false);
  assert.equal(assumedCover(entity("cover.garage", "unavailable", { assumed_state: true })), false);
  assert.equal(assumedCover(entity("switch.x", "unknown", { assumed_state: true })), false);
  assert.equal(assumedCover(undefined), false);
});

test("a marker's kind: its entity's, or NextFloor's own markers", () => {
  assert.equal(markerKind("light.kitchen"), "light");
  assert.equal(markerKind("lamp:f1"), "light");
  assert.equal(markerKind("sensor.x", true), "light");
  assert.equal(markerKind("tap:f2"), "tap");
  assert.equal(markerKind("gang:f3"), "switch");
  assert.equal(markerKind("grid"), "sensor");
  assert.equal(markerKind("binary_sensor.door"), "binary");
  assert.equal(markerKind("vacuum.robot"), "other");
  assert.equal(markerKind("script.x"), "other");
});

test("open all / close all take a garage remote along, but never a cover that asks first", () => {
  const blind = entity("cover.blind", "closed");
  const remote = entity("cover.remote", "unknown", { assumed_state: true });
  const garage = entity("cover.garage", "unknown", { assumed_state: true });
  const lost = entity("cover.lost", "unavailable");
  const silent = entity("cover.silent", "unknown");
  assert.deepEqual(groupCovers([blind, remote, garage, lost, silent], new Set(["cover.garage"])), ["cover.blind", "cover.remote"]);
  assert.deepEqual(groupCovers([blind, garage], null), ["cover.blind", "cover.garage"]);
});
