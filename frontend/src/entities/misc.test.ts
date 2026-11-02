import assert from "node:assert/strict";
import { test } from "node:test";
import { centroid, pointInPolygon } from "../model.ts";
import { box, entity, floorWith, hassOf } from "./fixtures.ts";
import { autoPlace, favoriteCall, floorControls, ownButtonOn, robotRoom, robotRoomSensor, roomKey, runButton } from "./misc.ts";

const ids = (n: number, prefix = "sensor.s") => Array.from({ length: n }, (_, i) => `${prefix}${i}`);

test("auto placement keeps everything inside the room, apart, and off the label", () => {
  const room = box("r", 0, 0, 5, 4);
  const placed = autoPlace(room, ids(6));
  assert.equal(placed.length, 6);
  const label = centroid(room.points);
  for (const p of placed) {
    assert.ok(pointInPolygon([p.x, p.z], room.points));
    assert.ok(Math.hypot(p.x - label[0], p.z - label[1]) >= 0.5, "off the label");
  }
  for (let i = 0; i < placed.length; i++) for (let j = i + 1; j < placed.length; j++) assert.ok(Math.hypot(placed[i].x - placed[j].x, placed[i].z - placed[j].z) > 0.3);
});

test("lights go towards the middle, other devices towards a wall", () => {
  const room = box("r", 0, 0, 6, 5);
  const [light] = autoPlace(room, ["light.a"]);
  const [sensor] = autoPlace(room, ["sensor.a"]);
  const label = centroid(room.points);
  assert.ok(Math.hypot(light.x - label[0], light.z - label[1]) < Math.hypot(sensor.x - label[0], sensor.z - label[1]));
});

test("placement is deterministic, avoids taken spots, and copes with tiny rooms", () => {
  const room = box("r", 0, 0, 4, 4);
  assert.deepEqual(autoPlace(room, ids(3)), autoPlace(room, ids(3)));
  const taken = autoPlace(room, ["sensor.x"])[0];
  const next = autoPlace(room, ["sensor.y"], [[taken.x, taken.z]])[0];
  assert.ok(Math.hypot(next.x - taken.x, next.z - taken.z) > 0.5);
  const tiny = autoPlace(box("t", 0, 0, 0.6, 0.6), ids(2));
  assert.equal(tiny.length, 2);
  assert.deepEqual(autoPlace({ ...room, points: [[0, 0], [1, 1]] }, ids(1)), []);
  assert.deepEqual(autoPlace(room, []), []);
});

test("room names compare without case, accents and umlaut spelling", () => {
  assert.equal(roomKey("Küche"), roomKey("kueche"));
  assert.equal(roomKey("Küche"), roomKey("Kuche"));
  assert.equal(roomKey("Straße"), "strasse");
  assert.equal(roomKey("Living-Room 2"), "livingroom2");
});

test("the robot's room sensor: chosen, 'none', or found on the vacuum's device", () => {
  const hass = hassOf([entity("vacuum.rob", "cleaning"), entity("sensor.rob_current_room", "Kitchen"), entity("sensor.rob_battery", "80")], {
    "vacuum.rob": { device_id: "r" },
    "sensor.rob_current_room": { device_id: "r" },
    "sensor.rob_battery": { device_id: "r" },
  });
  assert.equal(robotRoomSensor(hass, "vacuum.rob", undefined), "sensor.rob_current_room");
  assert.equal(robotRoomSensor(hass, "vacuum.rob", "sensor.mine"), "sensor.mine");
  assert.equal(robotRoomSensor(hass, "vacuum.rob", "none"), null);
  assert.equal(robotRoomSensor(hass, null, undefined), null);
});

test("the robot's room is matched by room or area name, exactly first, then loosely", () => {
  const rooms = [{ name: "Küche", area_id: "kitchen" }, { name: "Bad", area_id: null }, { name: "Wohnzimmer", area_id: "living" }];
  const hass = hassOf([entity("sensor.room", "kitchen"), entity("vacuum.rob", "cleaning", { current_room: "Wohnzimmer unten" })], {}, { areas: { kitchen: { area_id: "kitchen", name: "Kitchen" }, living: { area_id: "living", name: "Living room" } } });
  assert.equal(robotRoom(hass, rooms, null, "sensor.room")?.name, "Küche");
  assert.equal(robotRoom(hass, rooms, "vacuum.rob", null)?.name, "Wohnzimmer");
  hass.states["sensor.room"].state = "unknown";
  assert.equal(robotRoom(hass, rooms, null, "sensor.room"), null);
  hass.states["sensor.room"].state = "Garage";
  assert.equal(robotRoom(hass, rooms, null, "sensor.room"), null);
});

test("floor controls: lights and blinds of the floor, no garage doors, no hidden entities", () => {
  const hass = hassOf(
    [entity("light.a", "on"), entity("light.hidden", "on"), entity("cover.blind", "open", { device_class: "shutter" }), entity("cover.garage", "closed", { device_class: "garage" }), entity("light.placed", "on"), entity("light.linked", "off")],
    { "light.a": { area_id: "x" }, "light.hidden": { area_id: "x" }, "cover.blind": { area_id: "x" }, "cover.garage": { area_id: "x" } },
  );
  const room = { ...box("r", 0, 0, 4, 3, "x"), hidden: ["light.hidden"] };
  const floor = floorWith([room], {
    placements: [{ entity_id: "light.placed", x: 1, z: 1, y: null, mount: null }, { entity_id: "cover.garage", x: 1, z: 1, y: null, mount: null }],
    furniture: [{ id: "l", type: "lamp_floor", x: 1, z: 1, rotation: 0, w: 1, d: 1, h: 1, variant: null, entity: "light.linked", power: null }],
  });
  const controls = floorControls(hass, floor);
  assert.deepEqual(controls.lights.sort(), ["light.a", "light.linked", "light.placed"]);
  assert.deepEqual(controls.covers, ["cover.blind"]);
});

test("a favourite starts scenes and scripts, triggers automations, presses buttons and toggles the rest", () => {
  assert.deepEqual(favoriteCall("scene.movie"), ["scene", "turn_on"]);
  assert.deepEqual(favoriteCall("script.go"), ["script", "turn_on"]);
  assert.deepEqual(favoriteCall("automation.x"), ["automation", "trigger"]);
  assert.deepEqual(favoriteCall("input_button.b"), ["input_button", "press"]);
  assert.deepEqual(favoriteCall("light.a"), ["homeassistant", "toggle"]);
});

test("own buttons call a service or fire the DOM event, and ignore incomplete ones", () => {
  const calls: unknown[][] = [];
  const events: { name: string; detail: unknown }[] = [];
  const hass = hassOf([], {}, { callService: async (...a: unknown[]) => void calls.push(a) });
  const from = { dispatchEvent: (e: CustomEvent) => void events.push({ name: e.type, detail: e.detail }) } as unknown as HTMLElement;
  runButton(hass, from, { action: "service", target: "light.turn_on", data: { entity_id: "light.a" } });
  assert.deepEqual(calls[0], ["light", "turn_on", { entity_id: "light.a" }]);
  runButton(hass, from, { action: "fire_dom_event", data: { browser_mod: { command: "popup" } } });
  assert.deepEqual(events[0], { name: "ll-custom", detail: { browser_mod: { command: "popup" } } });
  runButton(hass, from, { action: "more_info", target: "light.a" });
  assert.deepEqual(events[1], { name: "hass-more-info", detail: { entityId: "light.a" } });
  runButton(hass, from, { action: "service", target: "nodot" });
  runButton(hass, from, { action: "more_info", target: "" });
  assert.equal(calls.length, 1);
  assert.equal(events.length, 2);
});

test("an own button lights up while its entity is on", () => {
  const hass = hassOf([entity("switch.party", "on"), entity("light.hall", "off")]);
  assert.equal(ownButtonOn(hass, { action: "service", target: "switch.toggle", data: { entity_id: "switch.party" } }), true);
  assert.equal(ownButtonOn(hass, { action: "more_info", target: "light.hall" }), false);
  assert.equal(ownButtonOn(hass, { action: "navigate", target: "/lovelace/0", state_entity: "switch.party" }), true, "named by hand");
  assert.equal(ownButtonOn(hass, { action: "service", target: "script.x", data: { entity_id: ["switch.party"] } }), false, "several entities tell nothing");
});
