import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type OutdoorArea } from "../model.ts";
import { entity, hassOf } from "./fixtures.ts";
import { gateStates } from "./gates.ts";

test("a gate is open while its entity says open, on or unlocked, or its contact is on", () => {
  const b = emptyBuilding();
  const f = newFloor("g", "G", 0);
  f.outdoor = [{ id: "z", type: "fence", points: [[0, 0], [8, 0], [8, 4], [0, 4]], gates: [
    { id: "a", edge: 0, offset: 2, width: 1, kind: "single", entity: "cover.tor" },
    { id: "b", edge: 1, offset: 2, width: 1, kind: "single", contact: "binary_sensor.tor_kontakt" },
    { id: "c", edge: 2, offset: 2, width: 1, kind: "sliding", entity: "switch.schiebetor", contact: "binary_sensor.x" },
    { id: "d", edge: 3, offset: 2, width: 1, kind: "single" },
  ] } as OutdoorArea];
  b.floors = [f];
  const states = gateStates(hassOf([entity("cover.tor", "open"), entity("binary_sensor.tor_kontakt", "on"), entity("switch.schiebetor", "off"), entity("binary_sensor.x", "off")]), b);
  assert.deepEqual([...states], [["a", true], ["b", true], ["c", false]], "a gate without any entity has no state");
});
