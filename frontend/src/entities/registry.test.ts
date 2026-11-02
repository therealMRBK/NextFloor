import assert from "node:assert/strict";
import { test } from "node:test";
import { entity, floorWith, box, hassOf } from "./fixtures.ts";
import { registerPlugin, resetPlugins } from "../plugins/registry.ts";
import { areaEntities, entityAreaId, entityKind, groupByDevice, isHubDevice, isRelevant, isRoomClimateSensor, otherAreaEntities, powerSensorsOf, primaryEntities, roomClimateSensors, roomClimateValue, unassignedEntities } from "./registry.ts";

const lounge = hassOf(
  [
    entity("light.ceiling", "on"),
    entity("light.standing", "off"),
    entity("switch.hidden", "on"),
    entity("switch.firmware", "off"),
    entity("sensor.temp", "21", { device_class: "temperature" }),
    entity("sensor.battery", "80", { device_class: "battery", unit_of_measurement: "%" }),
    entity("vacuum.robot", "docked"),
  ],
  {
    "light.ceiling": { area_id: "lounge" },
    "light.standing": { device_id: "d1" },
    "switch.hidden": { area_id: "lounge", hidden: true },
    "switch.firmware": { area_id: "lounge", entity_category: "config" },
    "sensor.temp": { area_id: "lounge" },
    "sensor.battery": { area_id: "lounge" },
    "vacuum.robot": { area_id: "lounge" },
  },
  { areas: { lounge: { area_id: "lounge", name: "Lounge" } }, devices: { d1: { id: "d1", area_id: "lounge" } } },
);

test("an entity's area is its own, else its device's", () => {
  assert.equal(entityAreaId(lounge, "light.ceiling"), "lounge");
  assert.equal(entityAreaId(lounge, "light.standing"), "lounge");
  assert.equal(entityAreaId(lounge, "light.unknown"), null);
});

test("an area lists visible entities of handled kinds, lights before sensors", () => {
  const ids = areaEntities(lounge, "lounge");
  assert.deepEqual(ids, ["light.ceiling", "light.standing", "sensor.temp"]);
  assert.deepEqual(areaEntities(lounge, null), []);
  assert.deepEqual(areaEntities(lounge, "attic"), []);
});

test("meters and air sensors are shown, battery and signal sensors are not", () => {
  const hass = hassOf([entity("sensor.gas", "12", { unit_of_measurement: "m³" }), entity("sensor.rssi", "-60", { device_class: "signal_strength" }), entity("sensor.co2", "700", { device_class: "carbon_dioxide" })]);
  assert.equal(isRelevant(hass, "sensor.gas"), true);
  assert.equal(isRelevant(hass, "sensor.co2"), true);
  assert.equal(isRelevant(hass, "sensor.rssi"), false);
  assert.equal(isRelevant(hass, "light.missing"), false);
});

test("a binary sensor without a class shows only when it was given an area by hand", () => {
  const hass = hassOf([entity("binary_sensor.flag", "on"), entity("binary_sensor.noise", "on")], { "binary_sensor.flag": { area_id: "x" }, "binary_sensor.noise": {} });
  assert.equal(isRelevant(hass, "binary_sensor.flag"), true);
  assert.equal(isRelevant(hass, "binary_sensor.noise"), false);
});

test("entities without an area are offered separately, including ones missing from the registry", () => {
  const hass = hassOf(
    [entity("light.template", "on"), entity("sensor.counter", "5", { unit_of_measurement: "pcs" }), entity("sensor.rssi", "-60", { device_class: "signal_strength", unit_of_measurement: "dBm" }), entity("scene.movie", "off")],
    { "light.template": {}, "sensor.counter": {}, "sensor.rssi": {}, "scene.movie": {} },
  );
  assert.deepEqual(unassignedEntities(hass), ["light.template", "sensor.counter"]);
});

test("other areas are listed by name with their placeable entities only", () => {
  const hass = hassOf(
    [entity("light.a", "on"), entity("scene.a", "off"), entity("light.b", "on")],
    { "light.a": { area_id: "kitchen" }, "scene.a": { area_id: "kitchen" }, "light.b": { area_id: "bath" } },
    { areas: { kitchen: { area_id: "kitchen", name: "Kitchen" }, bath: { area_id: "bath", name: "Bath" } } },
  );
  const others = otherAreaEntities(hass, "bath");
  assert.deepEqual(others, [{ areaId: "kitchen", name: "Kitchen", ids: ["light.a"] }]);
});

test("devices are grouped: the entity without a name of its own is the main one", () => {
  const hass = hassOf(
    [entity("light.strip", "on"), entity("sensor.strip_power", "5"), entity("light.solo", "off")],
    { "light.strip": { device_id: "d" }, "sensor.strip_power": { device_id: "d", name: "Power" }, "light.solo": {} },
  );
  const groups = groupByDevice(hass, ["sensor.strip_power", "light.strip", "light.solo"]);
  assert.deepEqual(groups, [{ primary: "light.strip", others: ["sensor.strip_power"] }, { primary: "light.solo", others: [] }]);
  assert.deepEqual(primaryEntities(hass, ["sensor.strip_power", "light.strip", "light.solo"]), ["light.strip", "light.solo"]);
});

test("power sensors are found per device, and a device in several areas is a hub", () => {
  const hass = hassOf(
    [entity("sensor.p1", "1", { device_class: "power" }), entity("light.k", "on"), entity("light.b", "on")],
    { "sensor.p1": { device_id: "dev" }, "light.k": { device_id: "hub", area_id: "kitchen" }, "light.b": { device_id: "hub", area_id: "bath" } },
  );
  assert.deepEqual(powerSensorsOf(hass, "dev"), ["sensor.p1"]);
  assert.deepEqual(powerSensorsOf(hass, "nothing"), []);
  assert.equal(isHubDevice(hass, "hub"), true);
  assert.equal(isHubDevice(hass, "dev"), false);
});

test("the lookups follow the registry: a new registry is read again, same objects are not", () => {
  const first = hassOf([entity("light.a", "on")], { "light.a": { area_id: "x" } });
  assert.deepEqual(areaEntities(first, "x"), ["light.a"]);
  const second = { ...first, entities: { "light.a": { entity_id: "light.a", area_id: "y" } } } as typeof first;
  assert.deepEqual(areaEntities(second, "x"), []);
  assert.deepEqual(areaEntities(second, "y"), ["light.a"]);
  // an entity that appears later in the states is noticed
  const third = { ...second, states: { ...second.states, "light.b": entity("light.b", "on") }, entities: { ...second.entities, "light.b": { entity_id: "light.b", area_id: "y" } } } as typeof first;
  assert.deepEqual(areaEntities(third, "y"), ["light.a", "light.b"]);
});

test("room sensors skip device temperatures: by the device's other entities and by name", () => {
  const hass = hassOf(
    [entity("sensor.room_t", "21", { device_class: "temperature" }), entity("sensor.printer_nozzle", "200", { device_class: "temperature" }), entity("sensor.heater_t", "40", { device_class: "temperature" }), entity("climate.heater", "heat"), entity("sensor.flow_temp", "35", { device_class: "temperature" })],
    { "sensor.room_t": { area_id: "a", device_id: "d1" }, "sensor.printer_nozzle": { area_id: "a", device_id: "d2" }, "sensor.heater_t": { area_id: "a", device_id: "d3" }, "climate.heater": { device_id: "d3" }, "sensor.flow_temp": { area_id: "a" } },
  );
  assert.equal(isRoomClimateSensor(hass, "sensor.room_t"), true);
  assert.equal(isRoomClimateSensor(hass, "sensor.printer_nozzle"), false, "name says nozzle");
  assert.equal(isRoomClimateSensor(hass, "sensor.heater_t"), false, "its device is a heater");
  assert.equal(isRoomClimateSensor(hass, "sensor.flow_temp"), false, "heating flow");
});

test("a room's climate: automatic from the area, or a chosen sensor, or none", () => {
  const room = box("r", 0, 0, 4, 3, "a");
  const hass = hassOf(
    [entity("sensor.t1", "20", { device_class: "temperature" }), entity("sensor.t2", "70", { device_class: "temperature", unit_of_measurement: "°F" }), entity("sensor.h", "50", { device_class: "humidity" }), entity("sensor.chosen", "10", { device_class: "temperature" })],
    { "sensor.t1": { area_id: "a" }, "sensor.t2": { area_id: "a" }, "sensor.h": { area_id: "a" }, "sensor.chosen": { area_id: "b" } },
  );
  assert.deepEqual(roomClimateSensors(hass, null, room, "temperature"), ["sensor.t1", "sensor.t2"]);
  assert.ok(Math.abs(roomClimateValue(hass, null, room, "temperature")! - (20 + (70 - 32) * 5 / 9) / 2) < 1e-9, "Fahrenheit is converted");
  assert.equal(roomClimateValue(hass, null, room, "humidity"), 50);
  assert.equal(roomClimateValue(hass, null, room, "co2"), null);
  assert.deepEqual(roomClimateSensors(hass, null, { ...room, climate: { temperature: "sensor.chosen" } }, "temperature"), ["sensor.chosen"]);
  assert.deepEqual(roomClimateSensors(hass, null, { ...room, climate: { temperature: "none" } }, "temperature"), []);
});

test("a sensor of the area placed in another room counts there, one placed inside counts here", () => {
  const here = box("here", 0, 0, 4, 3, "a");
  const there = box("there", 5, 0, 9, 3, "a");
  const hass = hassOf(
    [entity("sensor.in_area", "20", { device_class: "temperature" }), entity("sensor.placed_here", "22", { device_class: "temperature" })],
    { "sensor.in_area": { area_id: "a" }, "sensor.placed_here": { area_id: "other" } },
  );
  const floor = floorWith([here, there], { placements: [{ entity_id: "sensor.in_area", x: 6, z: 1, y: null, mount: null }, { entity_id: "sensor.placed_here", x: 1, z: 1, y: null, mount: null }] });
  assert.deepEqual(roomClimateSensors(hass, floor, here, "temperature"), ["sensor.placed_here"]);
  assert.deepEqual(roomClimateSensors(hass, floor, there, "temperature"), ["sensor.in_area"]);
});

test("a hub's room sensors still count, although its other entities are lights", () => {
  const hass = hassOf(
    [entity("sensor.bus_t_k", "21", { device_class: "temperature" }), entity("light.bus_k", "on"), entity("light.bus_b", "on")],
    { "sensor.bus_t_k": { area_id: "k", device_id: "bus" }, "light.bus_k": { area_id: "k", device_id: "bus" }, "light.bus_b": { area_id: "b", device_id: "bus" } },
  );
  assert.equal(isRoomClimateSensor(hass, "sensor.bus_t_k"), true);
});

test("entities a plugin gives a kind are offered like the others, in their area and without one", () => {
  registerPlugin({ id: "robot", apiVersion: 1, devices: [{ match: (id) => id.startsWith("vacuum."), kind: "switch" }] });
  try {
    const hass = hassOf(
      [entity("vacuum.rob", "docked"), entity("vacuum.loose", "docked"), entity("lawn_mower.x", "docked"), entity("light.a", "on")],
      { "vacuum.rob": { area_id: "kitchen" }, "vacuum.loose": {}, "lawn_mower.x": {}, "light.a": { area_id: "kitchen" } },
      { areas: { kitchen: { area_id: "kitchen", name: "Kitchen" } } },
    );
    assert.deepEqual(areaEntities(hass, "kitchen"), ["light.a", "vacuum.rob"]);
    assert.deepEqual(unassignedEntities(hass), ["vacuum.loose"]);
    assert.equal(entityKind(hass, "vacuum.rob"), "switch");
    assert.equal(entityKind(hass, "lawn_mower.x"), null);
  } finally {
    resetPlugins();
  }
});

test("wall buttons and doorbells (event entities) are offered, other events are not", () => {
  const hass = hassOf([entity("event.hall_button", "unknown", { device_class: "button" }), entity("event.bell", "unknown", { device_class: "doorbell" }), entity("event.remote", "unknown"), entity("event.motion", "unknown", { device_class: "motion" })]);
  assert.equal(isRelevant(hass, "event.hall_button"), true);
  assert.equal(isRelevant(hass, "event.bell"), true);
  assert.equal(isRelevant(hass, "event.remote"), true);
  assert.equal(isRelevant(hass, "event.motion"), false);
});

test("an NVR's camera that a plugin takes on leads its device, before the device's motion sensors", () => {
  registerPlugin({ id: "cams-test", name: "Cams", version: "1.0.0", apiVersion: 1, devices: [{ match: (id: string) => id.startsWith("camera."), kind: "sensor" }] } as never);
  const nvr = { area_id: "ext", device_id: "nvr" };
  const hass = hassOf(
    [entity("binary_sensor.nvr_motion_1", "off", { device_class: "motion" }), entity("binary_sensor.nvr_person_1", "off", { device_class: "occupancy" }), entity("camera.camera_1_live", "idle")],
    { "binary_sensor.nvr_motion_1": nvr, "binary_sensor.nvr_person_1": nvr, "camera.camera_1_live": nvr } as never,
  );
  const ids = areaEntities(hass, "ext");
  assert.equal(ids[0], "camera.camera_1_live");
  assert.equal(groupByDevice(hass, ids)[0].primary, "camera.camera_1_live");
  resetPlugins();
});

test("a sensor a plugin handles is listed whatever its device class, and leads its device", () => {
  registerPlugin({ id: "printer-test", name: "Printer", version: "1.0.0", apiVersion: 1, devices: [{ match: (id: string) => id.endsWith("_current_print_state"), kind: "sensor" }] } as never);
  const printer = { area_id: "work", device_id: "voron" };
  const hass = hassOf(
    [entity("sensor.voron_current_print_state", "printing", { device_class: "enum" }), entity("sensor.voron_extruder", "210", { device_class: "temperature", unit_of_measurement: "°C" }), entity("sensor.other_status", "ok", { device_class: "enum" })],
    { "sensor.voron_current_print_state": printer, "sensor.voron_extruder": printer, "sensor.other_status": { area_id: "work" } } as never,
  );
  assert.equal(isRelevant(hass, "sensor.voron_current_print_state"), true);
  assert.equal(isRelevant(hass, "sensor.other_status"), false, "an enum sensor no plugin handles stays hidden");
  assert.equal(groupByDevice(hass, areaEntities(hass, "work"))[0].primary, "sensor.voron_current_print_state");
  resetPlugins();
});
