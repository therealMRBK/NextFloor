import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding } from "../model.ts";
import type { HassEntity } from "../types.ts";
import { pipeArcs, pipeFlowing, PIPE_COLORS } from "./pipes.ts";

const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes }) as HassEntity;

test("a pipe flows while its entity is active or a number above zero", () => {
  assert.equal(pipeFlowing(st("switch.pump", "on")), true);
  assert.equal(pipeFlowing(st("switch.pump", "off")), false);
  assert.equal(pipeFlowing(st("sensor.pump_speed", "35")), true);
  assert.equal(pipeFlowing(st("sensor.pump_speed", "0")), false);
  assert.equal(pipeFlowing(st("climate.hk", "heat", { hvac_action: "heating" })), true);
  assert.equal(pipeFlowing(st("climate.hk", "heat", { hvac_action: "idle" })), false);
  assert.equal(pipeFlowing(st("sensor.x", "unavailable")), false);
  assert.equal(pipeFlowing(undefined), false);
});

test("pipes become routed arcs with their colour; flow only while the entity runs; a pipe without a route is left out", () => {
  const b = emptyBuilding();
  b.energy.pipes = [
    { id: "a", name: "Vorlauf", kind: "supply", entity: "switch.pump" },
    { id: "b", name: "Rücklauf", kind: "return", entity: null },
    { id: "c", name: "ohne Route", kind: "hot" },
  ];
  b.energy.routes = [
    { key: "pipe:a", points: [{ floor_id: "eg", x: 0, z: 0 }, { floor_id: "eg", x: 4, z: 0 }, { floor_id: "eg", x: 4, z: 3 }] },
    { key: "pipe:b", points: [{ floor_id: "eg", x: 1, z: 1 }, { floor_id: "eg", x: 3, z: 1 }] },
  ];
  const on = pipeArcs(b, { "switch.pump": st("switch.pump", "on") });
  assert.deepEqual(on.map((a) => a.key), ["pipe:a", "pipe:b"]);
  assert.deepEqual(on[0].color, PIPE_COLORS.supply);
  assert.ok(on[0].power > 0 && on[0].cable === true);
  assert.equal(on[0].via?.length, 1, "the middle point");
  assert.equal(on[1].power, 0, "no entity: the pipe alone");
  assert.equal(on[1].via?.length, 1, "two points get their middle, so the pipe is straight");
  assert.equal(pipeArcs(b, { "switch.pump": st("switch.pump", "off") })[0].power, 0);
});
