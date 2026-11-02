import assert from "node:assert/strict";
import { test } from "node:test";
import { entity, hassOf } from "../entities/fixtures.ts";
import { departureText, kmBetween, readCar } from "./car.ts";

test("a departure time from the ways cars and helpers write it", () => {
  assert.equal(departureText(entity("input_datetime.go", "7:30:00")), "07:30");
  assert.equal(departureText(entity("sensor.dep", "450")), "07:30", "minutes after midnight");
  assert.equal(departureText(entity("sensor.dep", new Date(2026, 10, 3, 6, 45).toISOString())), "06:45");
  assert.equal(departureText(entity("sensor.dep", "unknown")), null);
});

test("away, the car tells how far it is and which parts stand open", () => {
  assert.ok(Math.abs(kmBetween(50.11, 8.68, 50.04, 8.56) - 11.6) < 0.5, "Frankfurt to its airport");
  const reg = { device_id: "car" };
  const hass = hassOf(
    [
      entity("device_tracker.tesla", "not_home", { latitude: 50.04, longitude: 8.56, friendly_name: "Tesla Location" }),
      entity("sensor.tesla_battery", "64", { unit_of_measurement: "%", device_class: "battery", friendly_name: "Tesla Battery" }),
      entity("binary_sensor.tesla_trunk", "on", { friendly_name: "Tesla Trunk" }),
      entity("binary_sensor.tesla_door_fl", "off", { device_class: "door", friendly_name: "Tesla Door" }),
      entity("zone.home", "0", { latitude: 50.11, longitude: 8.68 }),
    ],
    { "device_tracker.tesla": reg, "sensor.tesla_battery": reg, "binary_sensor.tesla_trunk": reg, "binary_sensor.tesla_door_fl": reg },
  );
  const car = readCar(hass, { entity: "device_tracker.tesla", car: null })!;
  assert.equal(car.home, false);
  assert.ok(car.distance !== null && Math.abs(car.distance - 11.6) < 0.5);
  assert.deepEqual(car.open, ["Trunk"]);
});
