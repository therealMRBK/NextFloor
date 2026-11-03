import assert from "node:assert/strict";
import { test } from "node:test";
import { entity, floorWith } from "../entities/fixtures.ts";
import { allOffPlan, floorSwitchables } from "./all-off.ts";

test("everything off switches what is on and its undo brings the lights back as they were", () => {
  const plan = allOffPlan([
    entity("light.a", "on", { brightness: 120, color_mode: "color_temp", color_temp_kelvin: 2700 }),
    entity("light.b", "off"),
    entity("switch.tv_socket", "on"),
    entity("fan.ceiling", "on"),
    entity("media_player.speaker", "playing"),
    entity("media_player.tv", "on"),
    entity("lock.door", "locked"),
    undefined,
  ]);
  assert.equal(plan.count, 5);
  assert.deepEqual(plan.off[0], { domain: "light", service: "turn_off", data: { entity_id: ["light.a"] } });
  assert.deepEqual(plan.undo[0], { domain: "light", service: "turn_on", data: { entity_id: "light.a", brightness: 120, color_temp_kelvin: 2700 } });
  assert.ok(plan.off.some((c) => c.domain === "media_player" && c.service === "media_pause"));
  assert.ok(plan.undo.some((c) => c.domain === "media_player" && c.service === "media_play"));
  assert.ok(plan.undo.some((c) => c.domain === "fan" && c.service === "turn_on"));
  assert.ok(!plan.off.some((c) => c.domain === "lock"));
  assert.equal(allOffPlan([entity("light.b", "off")]).count, 0);
});

test("a floor offers the switchable entities of its pins and furniture", () => {
  const floor = {
    ...floorWith([]),
    placements: [{ entity_id: "light.ceiling", x: 0, z: 0, y: null, mount: null }, { entity_id: "sensor.temp", x: 0, z: 0, y: null, mount: null }],
    furniture: [{ id: "tv", type: "tv", x: 1, z: 1, rotation: 0, w: 1, d: 0.1, h: 0.6, variant: null, entity: "media_player.tv", extra_lights: ["light.ambilight"] }],
  };
  assert.deepEqual(floorSwitchables(floor as never).sort(), ["light.ambilight", "light.ceiling", "media_player.tv"]);
});
