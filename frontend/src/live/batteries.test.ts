import assert from "node:assert/strict";
import { test } from "node:test";
import { box, entity, floorWith, hassOf, opening } from "../entities/fixtures.ts";
import { emptyBuilding } from "../model.ts";
import { batteryOf, planBatteries } from "./batteries.ts";

test("a device's battery comes from the battery sensor next to it, else from the entity's attribute", () => {
  const hass = hassOf(
    [entity("binary_sensor.window", "off"), entity("sensor.window_battery", "12", { device_class: "battery" }), entity("lock.door", "locked", { battery_level: 64 }), entity("light.ceiling", "on")],
    { "binary_sensor.window": { device_id: "w" }, "sensor.window_battery": { device_id: "w" } },
  );
  assert.equal(batteryOf(hass, "binary_sensor.window"), 12);
  assert.equal(batteryOf(hass, "lock.door"), 64);
  assert.equal(batteryOf(hass, "light.ceiling"), null);
  const room = box("k", 0, 0, 4, 4);
  const floor = { ...floorWith([room]), openings: [opening("o", "k", "window", { contact: "binary_sensor.window" }), opening("d", "k", "door", { lock: "lock.door" })], placements: [{ entity_id: "light.ceiling", x: 1, z: 1, y: null, mount: null }] };
  const list = planBatteries(hass, { ...emptyBuilding(), floors: [floor] });
  assert.deepEqual(list.map((b) => [b.entity, b.level, b.roomId]), [["binary_sensor.window", 12, "k"], ["lock.door", 64, "k"]]);
});
