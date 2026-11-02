import assert from "node:assert/strict";
import { test } from "node:test";
import { entity, hassOf } from "../entities/fixtures.ts";
import { coverageColor, isAccessPoint, networkHealth, readAccessPoint } from "./wifi.ts";

test("an access point's clients and state from its device", () => {
  const d = { device_id: "ap" };
  const hass = hassOf([entity("sensor.ap_flur_clients", "14"), entity("binary_sensor.ap_flur_online", "on", { device_class: "connectivity" })], { "sensor.ap_flur_clients": d, "binary_sensor.ap_flur_online": d });
  const ap = readAccessPoint(hass, "sensor.ap_flur_clients")!;
  assert.deepEqual(ap, { clients: 14, online: true });
  assert.deepEqual(coverageColor(ap), [0.3, 0.7, 1]);
  assert.deepEqual(coverageColor({ clients: 2, online: false }), [1, 0.3, 0.3]);
  assert.equal(isAccessPoint("pack:nextfloor.a_smart2:access_point"), true);
});

test("the network's health: connectivity sensors and router trackers", () => {
  const h = networkHealth([
    entity("binary_sensor.nas_online", "on", { device_class: "connectivity" }),
    entity("binary_sensor.printer_online", "off", { device_class: "connectivity", friendly_name: "Drucker" }),
    entity("device_tracker.phone", "home", { source_type: "router" }),
    entity("device_tracker.gps", "home", { source_type: "gps" }),
  ]);
  assert.deepEqual(h, { online: 2, offline: ["Drucker"] });
});
