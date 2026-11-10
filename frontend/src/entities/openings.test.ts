import assert from "node:assert/strict";
import { test } from "node:test";
import { box, entity, floorWith, hassOf, opening } from "./fixtures.ts";
import { DOOR_DEFAULT_OPEN, isUnlocked, openingEntities, openingState, windowPosition, withFrontIds } from "./openings.ts";

const sensors = [
  entity("cover.blind", "open", { device_class: "shutter" }),
  entity("binary_sensor.win1", "off", { device_class: "window" }),
  entity("binary_sensor.win2", "on", { device_class: "window" }),
  entity("binary_sensor.door", "off", { device_class: "door" }),
  entity("cover.garage", "closed", { device_class: "garage" }),
  entity("binary_sensor.garage_contact", "on", { device_class: "garage_door" }),
];
const registry = Object.fromEntries(sensors.map((s) => [s.entity_id, { area_id: "a" }]));

test("windows are matched in order with the contacts of their area, one blind serves all", () => {
  const hass = hassOf(sensors, registry);
  const floor = floorWith([box("r", 0, 0, 5, 4, "a")], { openings: [opening("w2", "r", "window", { offset: 3 }), opening("w1", "r", "window", { offset: 1 })] });
  const links = openingEntities(hass, [floor]);
  assert.equal(links.get("w1")?.contact, "binary_sensor.win1");
  assert.equal(links.get("w2")?.contact, "binary_sensor.win2");
  assert.equal(links.get("w1")?.cover, "cover.blind");
  assert.equal(links.get("w2")?.cover, "cover.blind");
});

test("doors and garage doors find their own kind of entity", () => {
  const hass = hassOf(sensors, registry);
  const floor = floorWith([box("r", 0, 0, 5, 4, "a")], { openings: [opening("d", "r", "door"), opening("g", "r", "garage")] });
  const links = openingEntities(hass, [floor]);
  assert.equal(links.get("d")?.contact, "binary_sensor.door");
  assert.equal(links.get("d")?.cover, null);
  assert.equal(links.get("g")?.cover, "cover.garage");
  assert.equal(links.get("g")?.contact, "binary_sensor.garage_contact");
});

test("what was set by hand wins, and 'none' switches a link off", () => {
  const hass = hassOf(sensors, registry);
  const floor = floorWith([box("r", 0, 0, 5, 4, "a")], {
    openings: [opening("w", "r", "window", { cover: "none", contact: "binary_sensor.door", tilt: "binary_sensor.win2" }), opening("x", "r", "window", { contact: "none" })],
  });
  const links = openingEntities(hass, [floor]);
  assert.equal(links.get("w")?.cover, null);
  assert.equal(links.get("w")?.contact, "binary_sensor.door");
  assert.equal(links.get("w")?.tilt, "binary_sensor.win2");
  assert.equal(links.get("x")?.contact, null);
});

test("a window with a handle sensor gets no automatic plain contact", () => {
  const hass = hassOf(sensors, registry);
  const floor = floorWith([box("r", 0, 0, 5, 4, "a")], { openings: [opening("w", "r", "window", { sensor: "handle" } as never)] });
  assert.equal(openingEntities(hass, [floor]).get("w")?.contact, null);
});

test("only a two-leaf opening has second-leaf sensors", () => {
  const hass = hassOf(sensors, registry);
  const make = (leaves: number) => floorWith([box("r", 0, 0, 5, 4, "a")], { openings: [opening("w", "r", "window", { leaves, contact2: "binary_sensor.win2", tilt2: "none" } as never)] });
  assert.equal(openingEntities(hass, [make(1)]).get("w")?.contact2, null);
  assert.equal(openingEntities(hass, [make(2)]).get("w")?.contact2, "binary_sensor.win2");
  assert.equal(openingEntities(hass, [make(2)]).get("w")?.tilt2, null);
});

test("window position from plain contacts, handle words (also German) and a window_state attribute", () => {
  assert.equal(windowPosition(entity("binary_sensor.a", "on")), "open");
  assert.equal(windowPosition(entity("binary_sensor.a", "off")), "closed");
  assert.equal(windowPosition(entity("sensor.handle", "tilted")), "tilted");
  assert.equal(windowPosition(entity("sensor.handle", "Gekippt")), "tilted");
  assert.equal(windowPosition(entity("sensor.handle", "geschlossen")), "closed");
  assert.equal(windowPosition(entity("sensor.handle", "offen")), "open");
  assert.equal(windowPosition(entity("binary_sensor.a", "off", { window_state: "tilted" })), "tilted");
  assert.equal(windowPosition(entity("sensor.handle", "banana")), null);
  assert.equal(windowPosition(entity("sensor.handle", "unavailable")), null);
  assert.equal(windowPosition(undefined), null);
});

const plain = (extra: Record<string, unknown> = {}) => ({ cover: null, contact: null, tilt: null, ...extra });

test("a window: open by contact, tilted by a tilt sensor, and tilting wins over open", () => {
  const hass = hassOf([entity("binary_sensor.c", "on"), entity("binary_sensor.t", "on")]);
  assert.deepEqual({ ...openingState(hass, plain({ contact: "binary_sensor.c" })) }, { open: 1, open2: 0, tilt: 0, tilt2: 0, cover: null, sensed: true });
  const both = openingState(hass, plain({ contact: "binary_sensor.c", tilt: "binary_sensor.t" }));
  assert.deepEqual([both.open, both.tilt], [0, 1]);
});

test("a tilt angle sensor tilts as far as it reports, with maximum, offset and sign", () => {
  const hass = hassOf([entity("sensor.angle", "7.5")]);
  assert.equal(openingState(hass, plain({ tiltAngle: "sensor.angle", tiltMax: 15 })).tilt, 0.5);
  assert.equal(openingState(hass, plain({ tiltAngle: "sensor.angle", tiltMax: 15, tiltOffset: 7.5 })).tilt, 0, "offset removes it");
  assert.equal(openingState(hass, plain({ tiltAngle: "sensor.angle", tiltInvert: true })).tilt, 0, "inverted negative clamps to 0");
  assert.equal(openingState(hass, plain({ tiltAngle: "sensor.angle", tiltMax: 5 })).tilt, 1, "more than the maximum is fully tilted");
  assert.equal(openingState(hass, plain({ tiltAngle: "sensor.angle", tiltMax: 15, tiltOffset: 7 })).tilt, 0, "a small angle (under 8 %) counts as closed");
});

test("blinds: position sensor (percent or fraction), else the cover's own position or state", () => {
  const hass = hassOf([entity("sensor.pos", "30", { unit_of_measurement: "%" }), entity("sensor.frac", "0.25"), entity("cover.a", "open", { current_position: 80 }), entity("cover.b", "closed"), entity("cover.c", "closing"), entity("cover.d", "open")]);
  assert.equal(openingState(hass, plain({ position: "sensor.pos" })).cover, 0.7);
  assert.equal(openingState(hass, plain({ position: "sensor.frac" })).cover, 0.75);
  assert.equal(openingState(hass, plain({ position: "sensor.pos", positionInverted: true })).cover, 0.3);
  assert.ok(Math.abs(openingState(hass, plain({ cover: "cover.a" })).cover! - 0.2) < 1e-9);
  assert.equal(openingState(hass, plain({ cover: "cover.b" })).cover, 1);
  assert.equal(openingState(hass, plain({ cover: "cover.c" })).cover, 0.5);
  assert.equal(openingState(hass, plain({ cover: "cover.d" })).cover, 0);
  assert.equal(openingState(hass, plain({ cover: "cover.missing" })).cover, 0);
  assert.equal(openingState(hass, plain()).cover, null);
});

test("a door follows its contact, or stands half open, or is shut when told so", () => {
  const hass = hassOf([entity("binary_sensor.d", "on"), entity("binary_sensor.closed", "off")]);
  assert.equal(openingState(hass, plain({ contact: "binary_sensor.d" }), "door").open, 1);
  assert.equal(openingState(hass, plain({ contact: "binary_sensor.closed" }), "door").open, 0);
  assert.equal(openingState(hass, plain(), "door").open, DOOR_DEFAULT_OPEN);
  assert.equal(openingState(hass, plain({ shut: true }), "door").open, 0);
});

test("a door with its own opening angle stands at it without a sensor, but is not taken for open", () => {
  const hass = hassOf([entity("binary_sensor.closed", "off")]);
  const free = openingState(hass, plain({ angled: true }), "door");
  assert.equal(free.open, 1);
  assert.equal(free.assumed, true);
  assert.equal(openingState(hass, plain({ angled: true, shut: true }), "door").open, 0);
  const sensed = openingState(hass, plain({ angled: true, contact: "binary_sensor.closed" }), "door");
  assert.equal(sensed.open, 0);
  assert.equal(sensed.assumed, false);
});

test("a door with a roller shutter reports the blind as well", () => {
  const hass = hassOf([entity("cover.shutter", "open", { current_position: 25 })]);
  const state = openingState(hass, plain({ cover: "cover.shutter", shut: true }), "door");
  assert.equal(state.cover, 0.75);
  assert.equal(state.sensed, true);
});

test("a garage door shows its cover, else its contact, else closed", () => {
  const hass = hassOf([entity("cover.g", "open", { current_position: 100 }), entity("binary_sensor.gc", "on")]);
  assert.equal(openingState(hass, plain({ cover: "cover.g" }), "garage").cover, 0);
  assert.equal(openingState(hass, plain({ contact: "binary_sensor.gc" }), "garage").cover, 0);
  assert.equal(openingState(hass, plain(), "garage").cover, 1);
  assert.equal(openingState(hass, plain(), "garage").sensed, false);
});

test("a garage door whose cover is unknown (a remote without feedback) follows its contact", () => {
  const hass = hassOf([entity("cover.remote", "unknown", { assumed_state: true }), entity("binary_sensor.shut", "off"), entity("binary_sensor.gc", "on")]);
  assert.equal(openingState(hass, plain({ cover: "cover.remote", contact: "binary_sensor.shut" }), "garage").cover, 1);
  assert.equal(openingState(hass, plain({ cover: "cover.remote", contact: "binary_sensor.gc" }), "garage").cover, 0);
  assert.equal(openingState(hass, plain({ cover: "cover.remote" }), "garage").cover, 0, "without a contact it stays as before");
});

test("the second leaf of a double window has contact and tilt of its own and stays closed without sensors", () => {
  const hass = hassOf([entity("binary_sensor.c2", "on"), entity("binary_sensor.t2", "on")]);
  assert.deepEqual([openingState(hass, plain({ contact2: "binary_sensor.c2" })).open2, openingState(hass, plain()).open2], [1, 0]);
  const tilted = openingState(hass, plain({ contact2: "binary_sensor.c2", tilt2: "binary_sensor.t2" }));
  assert.deepEqual([tilted.open2, tilted.tilt2], [0, 1]);
});

test("'sensed' says whether any sensor answered", () => {
  const hass = hassOf([entity("binary_sensor.c", "unavailable"), entity("binary_sensor.d", "off")]);
  assert.equal(openingState(hass, plain({ contact: "binary_sensor.c" })).sensed, false);
  assert.equal(openingState(hass, plain({ contact: "binary_sensor.d" })).sensed, true);
  assert.equal(openingState(hass, plain()).sensed, false);
});

test("a door's smart lock is linked by hand and says when it stands unlocked", () => {
  const locks = [entity("lock.front", "unlocked"), entity("lock.back", "locked"), entity("lock.side", "jammed")];
  const hass = hassOf([...sensors, ...locks], registry);
  const floor = floorWith([box("r", 0, 0, 5, 4, "a")], {
    openings: [opening("d", "r", "door", { lock: "lock.front" }), opening("e", "r", "door", { lock: "lock.back" }), opening("w", "r", "window", { lock: "lock.front" })],
  });
  const links = openingEntities(hass, [floor]);
  assert.equal(links.get("d")?.lock, "lock.front");
  assert.equal(links.get("w")?.lock, null, "only doors take a lock");
  assert.equal(openingState(hass, links.get("d")!, "door").unlocked, true);
  assert.equal(openingState(hass, links.get("e")!, "door").unlocked, false);
  assert.equal(isUnlocked(hass, "lock.side"), false, "a jammed lock does not glow");
  assert.equal(isUnlocked(hass, null), false);
});

test("a wide window's second blind and a venetian blind's slats", () => {
  const hass = hassOf([
    entity("cover.left", "open", { current_position: 100, current_tilt_position: 30 }),
    entity("cover.right", "closed", { current_position: 0 }),
  ]);
  const state = openingState(hass, { cover: "cover.left", contact: null, tilt: null, cover2: "cover.right" });
  assert.equal(state.cover, 0);
  assert.equal(state.cover2, 1);
  assert.equal(state.slats, 0.3);
  assert.equal(openingState(hass, { cover: "cover.right", contact: null, tilt: null }).cover2, undefined, "no second blind");
});

test("a pane over several edges (bay window) gets the blind and state of its first piece under its front id (#115)", () => {
  const hass = hassOf(sensors, registry);
  const pieces = [
    opening("p1", "r", "window", { edge: 0, front: "front-p1", cover: "cover.blind" }),
    opening("p2", "r", "window", { edge: 1, offset: 0, front: "front-p1", cover: "cover.blind" }),
  ];
  const floor = floorWith([box("r", 0, 0, 5, 4, "a")], { openings: pieces });
  const links = withFrontIds(openingEntities(hass, [floor]), [floor]);
  assert.equal(links.get("front-p1")?.cover, "cover.blind");
  assert.equal(links.get("p1")?.cover, "cover.blind");
  const states = withFrontIds(new Map([["p1", openingState(hass, links.get("p1")!)]]), [floor]);
  assert.equal(states.get("front-p1")?.cover, 0);
  // a single-edge window is left as it is
  assert.equal(withFrontIds(new Map([["w", 1]]), [floorWith([], { openings: [opening("w", "r", "window")] })]).size, 1);
});

test("a gate moved by a relay or a push button (#134): the drive is tapped, the contact tells where the gate stands", () => {
  const hass = hassOf([entity("switch.gate", "on"), entity("button.gate", "unknown"), entity("binary_sensor.gc", "off")]);
  // the relay being "on" says nothing about the gate: without a contact it is drawn closed and counts as not sensed
  const alone = openingState(hass, plain({ cover: "switch.gate" }), "garage");
  assert.deepEqual([alone.cover, alone.sensed], [1, false]);
  assert.equal(openingState(hass, plain({ cover: "button.gate", contact: "binary_sensor.gc" }), "garage").cover, 1);
  const open = hassOf([entity("switch.gate", "off"), entity("binary_sensor.gc", "on")]);
  assert.equal(openingState(open, plain({ cover: "switch.gate", contact: "binary_sensor.gc" }), "garage").cover, 0);
  // a chosen drive is kept as the opening's link
  const floor = floorWith([box("r", 0, 0, 5, 4, "a")], { openings: [opening("g", "r", "garage", { cover: "switch.gate" })] });
  assert.equal(openingEntities(hass, [floor]).get("g")?.cover, "switch.gate");
});
