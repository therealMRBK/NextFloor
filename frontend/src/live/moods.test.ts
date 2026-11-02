import assert from "node:assert/strict";
import { test } from "node:test";
import { entity } from "../entities/fixtures.ts";
import { carryMood, lightSetting, moodCalls } from "./moods.ts";

test("a mood is kept from the lights, set again, and carried over to another room", () => {
  const warm = lightSetting(entity("light.a", "on", { brightness: 128, color_mode: "color_temp", color_temp_kelvin: 2700 }));
  const red = lightSetting(entity("light.b", "on", { brightness: 255, color_mode: "rgb", rgb_color: [255, 0, 0] }));
  const off = lightSetting(entity("light.c", "off"));
  assert.deepEqual(warm, { entity: "light.a", on: true, brightness: 128, kelvin: 2700 });
  assert.deepEqual(moodCalls([warm, red, off]), [
    { service: "turn_on", data: { entity_id: "light.a", brightness: 128, color_temp_kelvin: 2700 } },
    { service: "turn_on", data: { entity_id: "light.b", brightness: 255, rgb_color: [255, 0, 0] } },
    { service: "turn_off", data: { entity_id: ["light.c"] } },
  ]);
  const carried = carryMood({ lights: [warm, red] }, ["light.x", "light.y", "light.z"]);
  assert.deepEqual(carried.map((s) => [s.entity, s.rgb ?? s.kelvin]), [["light.x", 2700], ["light.y", [255, 0, 0]], ["light.z", [255, 0, 0]]], "the extra light takes the brightest one");
});
