import assert from "node:assert/strict";
import { test } from "node:test";
import { buildMarkers, eventText, placedEntities, scaleGlow, stateText, toggleEntity } from "./markers.ts";
import { emptyBuilding, newFloor } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

const state = (entity_id: string, value: string, attributes: Record<string, unknown> = {}): HassEntity => ({ entity_id, state: value, attributes });

function hassOf(list: HassEntity[], extra: Record<string, unknown> = {}): HomeAssistant {
  const calls: unknown[][] = [];
  return {
    language: "en",
    areas: { lounge: { area_id: "lounge", name: "Lounge" } },
    states: Object.fromEntries(list.map((s) => [s.entity_id, s])),
    callService: async (...args: unknown[]) => void calls.push(args),
    calls,
    ...extra,
  } as unknown as HomeAssistant;
}

test("lights show brightness in percent, or on/off", () => {
  const hass = hassOf([]);
  assert.equal(stateText(hass, state("light.a", "on", { brightness: 255 })), "100 %");
  assert.equal(stateText(hass, state("light.a", "on")), "On");
  assert.equal(stateText(hass, state("light.a", "off")), "Off");
});

test("covers show their position, except while they move", () => {
  const hass = hassOf([]);
  assert.equal(stateText(hass, state("cover.a", "open", { current_position: 30 })), "30 %");
  assert.notEqual(stateText(hass, state("cover.a", "opening", { current_position: 30 })), "30 %");
});

test("a sensor prints its value with its unit, and a word state stays a word", () => {
  const hass = hassOf([]);
  assert.equal(stateText(hass, state("sensor.t", "21.44", { unit_of_measurement: "°C" })), "21.4 °C");
  assert.equal(stateText(hass, state("sensor.s", "sunny")), "sunny");
  const precise = hassOf([], { entities: { "sensor.gas": { entity_id: "sensor.gas", display_precision: 3 } } });
  assert.equal(stateText(precise, state("sensor.gas", "1234.5678", { unit_of_measurement: "m³" })), "1,234.568 m³");
});

test("a media player shows what runs, a heater its temperature", () => {
  const hass = hassOf([]);
  assert.equal(stateText(hass, state("media_player.tv", "playing", { app_name: "Netflix", media_title: "Show" })), "Netflix");
  assert.equal(stateText(hass, state("media_player.tv", "playing", { media_title: "Show" })), "Show");
  assert.equal(stateText(hass, state("climate.h", "heat", { current_temperature: 20.5 })), "20.5 °C");
  assert.equal(stateText(hass, state("climate.h", "off", { current_temperature: 20.5 })), "20.5 °C · Off");
});

test("unknown or unavailable entities read as unavailable", () => {
  const hass = hassOf([]);
  assert.equal(stateText(hass, undefined), stateText(hass, state("light.a", "unavailable")));
});

test("scaleGlow clamps the level and leaves glows alone when the factor is neutral", () => {
  const glow = { level: 1 };
  assert.equal(scaleGlow(glow, 1), glow);
  assert.equal(scaleGlow(glow, null), glow);
  assert.equal(scaleGlow(null, 2), null);
  assert.equal(scaleGlow(glow, 10)?.level, 1.5);
  assert.equal(scaleGlow(glow, 0)?.level, 0.02);
  assert.equal(scaleGlow(glow, 0.5)?.level, 0.5);
});

test("markers: placed entities that exist get one, with their room and a default height", () => {
  const building = emptyBuilding();
  const floor = newFloor("g", "Ground", 0);
  floor.rooms = [{ id: "r", name: "Lounge room", area_id: "lounge", points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "wood" }];
  floor.placements = [
    { entity_id: "light.a", x: 1, z: 1, y: null, mount: null },
    { entity_id: "light.gone", x: 1, z: 1, y: null, mount: null },
    { entity_id: "sensor.t", x: 9, z: 9, y: 1.7, mount: null, name: "Own name" },
  ];
  building.floors = [floor];
  const hass = hassOf([state("light.a", "on", { friendly_name: "Lamp" }), state("sensor.t", "20")]);
  const markers = buildMarkers(hass, building);
  assert.deepEqual(markers.map((m) => m.id), ["light.a", "sensor.t"]);
  assert.equal(markers[0].roomId, "r");
  assert.equal(markers[0].lamp, "ceiling");
  assert.equal(markers[0].active, true);
  assert.equal(markers[1].roomId, null);
  assert.equal(markers[1].y, 1.7);
  assert.equal(markers[1].name, "Own name");
  assert.deepEqual(placedEntities(building), ["light.a", "light.gone", "sensor.t"]);
});

test("toggling uses the service of the entity's own domain", async () => {
  const hass = hassOf([]) as HomeAssistant & { calls: unknown[][] };
  await toggleEntity(hass, "switch.pump");
  assert.deepEqual(hass.calls[0], ["switch", "toggle", { entity_id: "switch.pump" }]);
});

test("a wall button (event entity) shows when it was last pressed, and a dash before its first press", () => {
  const hass = hassOf([]);
  const now = new Date(2026, 10, 1, 18, 0);
  const pressed = state("event.hall_button", new Date(2026, 10, 1, 14, 32).toISOString(), { event_type: "press_short" });
  assert.match(eventText(hass, pressed, now), /14:32|2:32/);
  assert.match(eventText(hass, state("event.hall_button", new Date(2026, 9, 30, 8, 5).toISOString()), now), /30/);
  assert.equal(stateText(hass, state("event.hall_button", "unknown")), "–");
  assert.equal(stateText(hass, state("event.hall_button", "unavailable")), "Unavailable");
});

test("a placed wall button gets a marker", () => {
  const building = emptyBuilding();
  const floor = newFloor("g", "Ground", 0);
  floor.placements = [{ entity_id: "event.hall_button", x: 1, z: 1, y: null, mount: null }];
  building.floors = [floor];
  const markers = buildMarkers(hassOf([state("event.hall_button", "unknown")]), building);
  assert.equal(markers.length, 1);
  assert.equal(markers[0].unavailable, false);
});
