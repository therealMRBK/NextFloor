import assert from "node:assert/strict";
import { test } from "node:test";
import { entity, hassOf } from "../entities/fixtures.ts";
import { readPrinter } from "./printer.ts";

test("a Bambu printer's print: progress, time left, layers, temperatures, picture and filaments", () => {
  const d = { device_id: "p1" };
  const hass = hassOf(
    [
      entity("sensor.p1s_print_progress", "42", { unit_of_measurement: "%" }),
      entity("sensor.p1s_print_status", "running"),
      entity("sensor.p1s_remaining_time", "1.5", { unit_of_measurement: "h" }),
      entity("sensor.p1s_current_layer", "120"),
      entity("sensor.p1s_total_layer_count", "300"),
      entity("sensor.p1s_nozzle_temperature", "220", { device_class: "temperature" }),
      entity("sensor.p1s_bed_temperature", "60", { device_class: "temperature" }),
      entity("sensor.p1s_task_name", "benchy"),
      entity("image.p1s_cover_image", "2026-11-02", { entity_picture: "/api/image_proxy/image.p1s_cover_image" }),
      entity("sensor.p1s_ams_1_tray_1", "PLA", { color: "#FF0000FF" }),
      entity("sensor.p1s_ams_1_tray_2", "PETG", { color: "#00FF00FF", active: true }),
    ],
    Object.fromEntries(["sensor.p1s_print_progress", "sensor.p1s_print_status", "sensor.p1s_remaining_time", "sensor.p1s_current_layer", "sensor.p1s_total_layer_count", "sensor.p1s_nozzle_temperature", "sensor.p1s_bed_temperature", "sensor.p1s_task_name", "image.p1s_cover_image", "sensor.p1s_ams_1_tray_1", "sensor.p1s_ams_1_tray_2"].map((id) => [id, d])),
  );
  const p = readPrinter(hass, "sensor.p1s_print_progress")!;
  assert.equal(p.printing, true);
  assert.equal(p.progress, 42);
  assert.equal(p.remaining, 90);
  assert.deepEqual([p.layer, p.layers, p.nozzle, p.bed], [120, 300, 220, 60]);
  assert.equal(p.job, "benchy");
  assert.equal(p.picture, "/api/image_proxy/image.p1s_cover_image");
  assert.deepEqual(p.filaments, ["#00ff00", "#ff0000"], "the active tray first");
});

test("a device without a print progress is no printer", () => {
  assert.equal(readPrinter(hassOf([entity("switch.plug", "on")]), "switch.plug"), null);
});
