import assert from "node:assert/strict";
import { test } from "node:test";
import { alarmCause, ownAlertMet, alertColor, alertEntities, alertSources, alertText, CONTACT_GRACE_MS, contactsPending, findAlerts, isPowerOut, QUIET_ALERTS, RAIN_STATES } from "./alerts.ts";
import type { OpeningEntities } from "./devices.ts";
import { emptyBuilding, newFloor, type Opening } from "./model.ts";
import type { HomeAssistant } from "./types.ts";
import { box, entity as entity2, floorWith, hassOf, opening } from "./entities/fixtures.ts";

type Attrs = Record<string, unknown>;
const entity = (entity_id: string, state: string, attributes: Attrs = {}) => ({ entity_id, state, attributes });

/** A two-room house with a smoke detector, a leak sensor, a window contact, an alarm panel and a weather entity. */
function house() {
  const hass = {
    language: "en",
    areas: { lounge: { area_id: "lounge", name: "Lounge" }, wc: { area_id: "wc", name: "WC" } },
    entities: {
      "binary_sensor.smoke": { entity_id: "binary_sensor.smoke", area_id: "lounge" },
      "binary_sensor.leak": { entity_id: "binary_sensor.leak", area_id: "wc" },
      "binary_sensor.casement": { entity_id: "binary_sensor.casement", area_id: "lounge" },
      "sensor.smoke_level": { entity_id: "sensor.smoke_level", area_id: "lounge" },
    },
    states: {
      "binary_sensor.smoke": entity("binary_sensor.smoke", "off", { device_class: "smoke", friendly_name: "Smoke detector" }),
      "binary_sensor.leak": entity("binary_sensor.leak", "off", { device_class: "moisture", friendly_name: "Leak sensor" }),
      "binary_sensor.casement": entity("binary_sensor.casement", "off", { device_class: "window", friendly_name: "Casement" }),
      "sensor.smoke_level": entity("sensor.smoke_level", "3", { device_class: "smoke" }),
      "weather.home": entity("weather.home", "sunny"),
      "alarm_control_panel.house": entity("alarm_control_panel.house", "disarmed"),
    },
  } as unknown as HomeAssistant;

  const building = emptyBuilding();
  const floor = newFloor("g", "Ground", 0);
  floor.rooms = [
    { id: "lounge", name: "Lounge", area_id: "lounge", points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "wood" },
    { id: "wc", name: "WC", area_id: "wc", points: [[4, 0], [6, 0], [6, 3], [4, 3]], floor_material: "tiles" },
  ];
  const window: Opening = { id: "w1", room_id: "lounge", edge: 0, offset: 1, width: 1.2, type: "window", sill: 0.9, height: 1.3, hinge: "left", leaves: 1, swing: "in", cover: null, contact: "binary_sensor.casement", contact2: null, tilt: null };
  floor.openings = [window];
  building.floors = [floor];
  const links = new Map<string, OpeningEntities>([["w1", { cover: null, contact: "binary_sensor.casement", tilt: null }]]);
  return { hass, building, links };
}

const set = (hass: HomeAssistant, id: string, state: string) => {
  hass.states[id] = { ...hass.states[id], state };
};

test("only binary sensors with a warning class are picked, per room", () => {
  const { hass, building } = house();
  const sources = alertSources(hass, building);
  assert.deepEqual(sources.rooms, [
    { floorId: "g", roomId: "lounge", sensors: ["binary_sensor.smoke"] },
    { floorId: "g", roomId: "wc", sensors: ["binary_sensor.leak"] },
  ]);
  assert.deepEqual(sources.alarms, ["alarm_control_panel.house"]);
  assert.equal(sources.weather, "weather.home");
  assert.equal(alertEntities(sources).length, 4);
});

test("the rain warning can be switched off, which also stops watching the weather", () => {
  const { hass, building } = house();
  building.settings.rain_warning = false;
  const sources = alertSources(hass, building);
  assert.equal(sources.weather, null);
  assert.ok(!alertEntities(sources).includes("weather.home"));
});

test("a quiet house has no warnings", () => {
  const { hass, building, links } = house();
  assert.deepEqual(findAlerts(hass, building, alertSources(hass, building), links), []);
});

test("sensors and the alarm panel raise warnings, pending is its own kind", () => {
  const { hass, building, links } = house();
  const sources = alertSources(hass, building);
  set(hass, "binary_sensor.smoke", "on");
  set(hass, "binary_sensor.leak", "on");
  set(hass, "alarm_control_panel.house", "pending");
  let found = findAlerts(hass, building, sources, links);
  assert.deepEqual(found.map((a) => [a.kind, a.roomId]), [["smoke", "lounge"], ["water", "wc"], ["alarm_pending", null]]);
  set(hass, "alarm_control_panel.house", "triggered");
  found = findAlerts(hass, building, sources, links);
  assert.equal(found.at(-1)?.kind, "alarm");
  assert.equal(found.at(-1)?.floorId, null);
});

test("an open window warns only while it rains", () => {
  const { hass, building, links } = house();
  const sources = alertSources(hass, building);
  set(hass, "binary_sensor.casement", "on");
  assert.equal(findAlerts(hass, building, sources, links).length, 0, "dry weather");
  for (const rain of RAIN_STATES) {
    set(hass, "weather.home", rain);
    const [warning] = findAlerts(hass, building, sources, links);
    assert.equal(warning?.kind, "window_rain");
    assert.equal(warning?.roomId, "lounge");
    assert.equal(warning?.entity, "binary_sensor.casement");
  }
  set(hass, "binary_sensor.casement", "off");
  assert.equal(findAlerts(hass, building, sources, links).length, 0, "closed window in the rain");
});

test("colours: leaks are blue, pending is orange, the rest is red", () => {
  assert.deepEqual(alertColor("smoke"), alertColor("alarm"));
  assert.ok(alertColor("water")[2] > alertColor("water")[0]);
  assert.ok(alertColor("alarm_pending")[0] > alertColor("alarm_pending")[2]);
});

test("the banner text names the room when there is one", () => {
  const { hass, building } = house();
  const inRoom = alertText(hass, building, { kind: "smoke", entity: "binary_sensor.smoke", roomId: "lounge", floorId: "g" });
  assert.ok(inRoom.startsWith("Lounge · "), inRoom);
  assert.ok(inRoom.includes("Smoke detector"), inRoom);
  const houseWide = alertText(hass, building, { kind: "alarm", entity: "alarm_control_panel.house", roomId: null, floorId: null });
  assert.ok(!houseWide.includes(" · "), houseWide);
});

test("an own rain sensor decides instead of the weather, and a window can be left out", () => {
  const { hass, building, links } = house();
  hass.states["sensor.rain_rate"] = { entity_id: "sensor.rain_rate", state: "0", attributes: { unit_of_measurement: "mm/h" } };
  building.settings.rain_sensor = "sensor.rain_rate";
  const sources = alertSources(hass, building);
  assert.equal(sources.rain, "sensor.rain_rate");
  assert.ok(alertEntities(sources).includes("sensor.rain_rate"));
  set(hass, "binary_sensor.casement", "on");
  set(hass, "weather.home", "pouring");
  assert.equal(findAlerts(hass, building, sources, links).length, 0, "the station says dry, the forecast does not count");
  set(hass, "sensor.rain_rate", "1.2");
  assert.equal(findAlerts(hass, building, sources, links)[0]?.kind, "window_rain");
  building.floors[0].openings[0].rain_warning = false;
  assert.equal(findAlerts(hass, building, sources, links).length, 0, "a window under the awning stays quiet");
});

test("a power outage warns for the whole house, whatever kind of sensor tells it", () => {
  const { hass, building, links } = house();
  const cases: [string, string, Record<string, unknown>, boolean][] = [
    ["binary_sensor.grid", "off", { device_class: "power" }, true],
    ["binary_sensor.grid", "on", { device_class: "power" }, false],
    ["binary_sensor.outage", "on", { device_class: "problem" }, true],
    ["sensor.inverter_mode", "off_grid", {}, true],
    ["sensor.inverter_mode", "on_grid", {}, false],
    ["sensor.voltage", "3", { unit_of_measurement: "V" }, true],
    ["sensor.voltage", "231", { unit_of_measurement: "V" }, false],
    ["sensor.voltage", "unavailable", { unit_of_measurement: "V" }, false],
  ];
  for (const [id, state, attributes, out] of cases) {
    hass.states[id] = { entity_id: id, state, attributes };
    building.settings.outage_sensor = id;
    assert.equal(isPowerOut(hass, id), out, `${id} = ${state}`);
    const found = findAlerts(hass, building, alertSources(hass, building), links);
    assert.equal(found.some((a) => a.kind === "power_outage" && a.roomId === null), out);
  }
});

test("a contact that stays unavailable warns after the grace time, only when switched on, and quietly", () => {
  const { hass, building, links } = house();
  const now = Date.parse("2026-11-01T12:00:00Z");
  const lost = (minutes: number) => {
    hass.states["binary_sensor.casement"] = { ...hass.states["binary_sensor.casement"], state: "unavailable", last_changed: new Date(now - minutes * 60_000).toISOString() };
  };
  // off by default: not even watched
  assert.deepEqual(alertSources(hass, building, null, links).contacts, []);
  building.settings.contact_warning = true;
  const sources = alertSources(hass, building, null, links);
  assert.deepEqual(sources.contacts, [{ floorId: "g", roomId: "lounge", entity: "binary_sensor.casement" }]);
  assert.ok(alertEntities(sources).includes("binary_sensor.casement"));
  lost(3);
  assert.equal(contactsPending(hass, sources), true);
  assert.deepEqual(findAlerts(hass, building, sources, links, now), []);
  lost(CONTACT_GRACE_MS / 60_000);
  assert.deepEqual(findAlerts(hass, building, sources, links, now), [{ kind: "contact_lost", entity: "binary_sensor.casement", roomId: "lounge", floorId: "g" }]);
  assert.ok(QUIET_ALERTS.has("contact_lost"));
  set(hass, "binary_sensor.casement", "off");
  assert.equal(contactsPending(hass, sources), false);
  assert.deepEqual(findAlerts(hass, building, sources, links, now), []);
});

test("a contact shared by two openings is watched once", () => {
  const { hass, building, links } = house();
  building.settings.contact_warning = true;
  building.floors[0].openings.push({ ...building.floors[0].openings[0], id: "w2", offset: 3 });
  links.set("w2", { cover: null, contact: "binary_sensor.casement", tilt: null });
  assert.equal(alertSources(hass, building, null, links).contacts!.length, 1);
});

test("a triggered alarm names the sensor that set it off and pulses its room", () => {
  const at = Date.parse("2026-11-02T20:00:00Z");
  const iso = (ms: number) => new Date(ms).toISOString();
  const hass = hassOf(
    [
      { entity_id: "alarm_control_panel.home", state: "triggered", attributes: {}, last_changed: iso(at) },
      { entity_id: "binary_sensor.front_door", state: "on", attributes: { device_class: "door", friendly_name: "Haustür" }, last_changed: iso(at - 3000) },
      { entity_id: "binary_sensor.hall_motion", state: "on", attributes: { device_class: "motion" }, last_changed: iso(at - 60_000) },
    ],
    { "binary_sensor.front_door": { area_id: "flur" } },
  );
  assert.equal(alarmCause(hass, "alarm_control_panel.home"), "binary_sensor.front_door");
  const alarmo = hassOf([{ entity_id: "alarm_control_panel.alarmo", state: "triggered", attributes: { open_sensors: { "binary_sensor.window_kitchen": "on" } } }]);
  assert.equal(alarmCause(alarmo, "alarm_control_panel.alarmo"), "binary_sensor.window_kitchen", "Alarmo tells it");
  const b = emptyBuilding();
  b.floors = [{ ...newFloor("g", "EG", 0), rooms: [{ id: "r", name: "Flur", area_id: "flur", points: [[0, 0], [2, 0], [2, 2]], floor_material: "wood" }] }];
  const alerts = findAlerts(hass, b, alertSources(hass, b), new Map());
  assert.equal(alerts[0].roomId, "r");
  assert.equal(alerts[0].cause, "binary_sensor.front_door");
});

test("own warnings: a state, one of several, or a number below or above a value", () => {
  const hass = hassOf([entity2("binary_sensor.robot_tank", "on"), entity2("sensor.dishwasher", "Finished"), entity2("sensor.salt", "12")]);
  assert.equal(ownAlertMet(hass, { entity: "binary_sensor.robot_tank", state: null }), true, "on by default");
  assert.equal(ownAlertMet(hass, { entity: "sensor.dishwasher", state: "done, finished" }), true);
  assert.equal(ownAlertMet(hass, { entity: "sensor.salt", state: "<20" }), true);
  assert.equal(ownAlertMet(hass, { entity: "sensor.salt", state: ">20" }), false);
  const b = emptyBuilding();
  b.settings.own_alerts = [{ id: "a", entity: "sensor.dishwasher", state: "finished", text: "Dishwasher done" }];
  const alerts = findAlerts(hass, b, alertSources(hass, b), new Map());
  assert.equal(alerts[0].kind, "own");
  assert.equal(alertText(hass, b, alerts[0]), "Dishwasher done");
});

test("an unlocked door lock warns at night only, and only with the warning on", () => {
  const hass = hassOf([entity("lock.front", "unlocked")]);
  const b = emptyBuilding();
  b.floors = [{ ...floorWith([box("f", 0, 0, 3, 3)]), openings: [opening("d", "f", "door", { lock: "lock.front" })] }];
  const night = new Date(2026, 10, 3, 23, 0).getTime();
  const day = new Date(2026, 10, 3, 14, 0).getTime();
  assert.equal(findAlerts(hass, b, alertSources(hass, b), new Map(), night).filter((a) => a.kind === "unlocked_night").length, 0);
  b.settings = { ...b.settings, night_lock_warning: true };
  const sources = alertSources(hass, b);
  assert.deepEqual(findAlerts(hass, b, sources, new Map(), night).filter((a) => a.kind === "unlocked_night").map((a) => a.entity), ["lock.front"]);
  assert.equal(findAlerts(hass, b, sources, new Map(), day).filter((a) => a.kind === "unlocked_night").length, 0);
  assert.ok(alertEntities(sources).includes("lock.front"));
});
