import assert from "node:assert/strict";
import { test } from "node:test";
import { likelyRoomSensors, parseButtonData, patchPresence, startViewYaml } from "./house.ts";
import { moveWithin, orUndefined, patchAt, removeAt } from "./lists.ts";

test("moving within a list keeps every item and stops at the ends", () => {
  assert.deepEqual(moveWithin([1, 2, 3, 4], 1, 1), [1, 3, 2, 4]);
  assert.deepEqual(moveWithin([1, 2, 3, 4], 2, -1), [1, 3, 2, 4]);
  assert.deepEqual(moveWithin([1, 2, 3], 0, -1), [1, 2, 3]);
  assert.deepEqual(moveWithin([1, 2, 3], 2, 1), [1, 2, 3]);
  assert.deepEqual(moveWithin([1, 2, 3], 0, 9), [2, 3, 1]);
});

test("removing and patching leave the original alone", () => {
  const list = [{ a: 1 }, { a: 2 }];
  assert.deepEqual(removeAt(list, 0), [{ a: 2 }]);
  assert.deepEqual(patchAt(list, 1, { a: 9 }), [{ a: 1 }, { a: 9 }]);
  assert.deepEqual(list, [{ a: 1 }, { a: 2 }]);
  assert.equal(orUndefined([]), undefined);
  assert.deepEqual(orUndefined([1]), [1]);
});

test("a presence link is replaced, added or removed; its room keeps it alive without a sensor", () => {
  const links = [{ person: "person.a", sensor: "sensor.a" }];
  assert.deepEqual(patchPresence(links, "person.a", { sensor: "sensor.b" }), [{ person: "person.a", sensor: "sensor.b" }]);
  assert.deepEqual(patchPresence(links, "person.b", { sensor: "sensor.c" }), [...links, { person: "person.b", sensor: "sensor.c" }]);
  assert.deepEqual(patchPresence(links, "person.a", { sensor: null }), []);
  assert.deepEqual(patchPresence(links, "person.a", { sensor: "none" }), []);
  assert.deepEqual(patchPresence(links, "person.a", { room: "kitchen" }), [{ person: "person.a", sensor: "sensor.a", room: "kitchen" }]);
  assert.deepEqual(patchPresence([{ person: "person.a", sensor: "sensor.a", room: "k" }], "person.a", { sensor: null }), [{ person: "person.a", sensor: null, room: "k" }], "the room alone is enough");
  assert.deepEqual(patchPresence([{ person: "person.a", sensor: null, room: "k" }], "person.a", { room: null }), []);
  assert.equal(links.length, 1);
});

test("sensors named after the person and a room come first", () => {
  const options = [
    { id: "sensor.other_room", label: "" },
    { id: "sensor.anna_phone_area", label: "" },
    { id: "sensor.anna_battery", label: "" },
    { id: "sensor.bermuda_anna_room", label: "" },
  ];
  assert.deepEqual(likelyRoomSensors(options, "person.anna").map((o) => o.id), ["sensor.anna_phone_area", "sensor.bermuda_anna_room", "sensor.other_room", "sensor.anna_battery"]);
});

test("the start view becomes one line of card YAML", () => {
  assert.equal(startViewYaml({ theta: 1, phi: 2, radius: 3 }), "start_view: { theta: 1, phi: 2, radius: 3 }");
  assert.equal(startViewYaml({ theta: 1, phi: 2, radius: 3, target: { x: 4, y: 5, z: 6 } }), "start_view: { theta: 1, phi: 2, radius: 3, target: { x: 4, y: 5, z: 6 } }");
});

test("button data: empty is none, objects pass, everything else is refused", () => {
  assert.deepEqual(parseButtonData("  "), { ok: true, value: null });
  assert.deepEqual(parseButtonData('{"entity_id": "script.party"}'), { ok: true, value: { entity_id: "script.party" } });
  for (const bad of ["[1]", "5", "null", "{oops", '"text"']) assert.deepEqual(parseButtonData(bad), { ok: false }, bad);
});

import { clamp, turnedNorth, withEffect, wrapDegrees } from "./settings.ts";

test("settings are kept within their limits", () => {
  assert.equal(clamp(5, 0, 1), 1);
  assert.equal(clamp(-5, 0, 1), 0);
  assert.equal(clamp(0.5, 0, 1), 0.5);
  assert.equal(wrapDegrees(370), 10);
  assert.equal(wrapDegrees(-10), 350);
  assert.equal(turnedNorth(0, 180), 180, "north and south swapped");
  assert.equal(turnedNorth(200, 180), 20);
  assert.equal(turnedNorth(10, -90), 280);
  assert.equal(wrapDegrees(359.6), 0);
});

test("weather effects can be added once and removed", () => {
  assert.deepEqual(withEffect(["rain"], "snow", true), ["rain", "snow"]);
  assert.deepEqual(withEffect(["rain", "snow"], "rain", true), ["rain", "snow"]);
  assert.deepEqual(withEffect(["rain", "snow"], "rain", false), ["snow"]);
});
