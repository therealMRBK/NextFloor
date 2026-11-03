import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Building, type Room } from "./model.ts";
import { floorCounts, floorInfoText, initials, personsInRooms, roomForState, sinceText } from "./presence.ts";
import type { HomeAssistant } from "./types.ts";

type Attrs = Record<string, unknown>;
const entity = (entity_id: string, state: string, attributes: Attrs = {}) => ({ entity_id, state, attributes });

const room = (id: string, name: string, area: string | null, x: number): Room => ({ id, name, area_id: area, points: [[x, 0], [x + 4, 0], [x + 4, 3], [x, 3]], floor_material: "wood" });

function home(states: Record<string, [string, Attrs?]>) {
  const building: Building = emptyBuilding();
  const floor = newFloor("g", "Ground", 0);
  floor.rooms = [room("lr", "Living Room", "living_room", 0), room("ki", "Kitchen", "kitchen", 4)];
  building.floors = [floor];
  building.presence = [
    { person: "person.ann", sensor: "sensor.ann_room" },
    { person: "person.bob", sensor: "sensor.bob_room" },
    { person: "person.cy", sensor: null },
  ];
  const hass = {
    language: "en",
    areas: { living_room: { area_id: "living_room", name: "Lounge" }, kitchen: { area_id: "kitchen", name: "Kitchen" } },
    states: Object.fromEntries(Object.entries(states).map(([id, [state, attrs]]) => [id, entity(id, state, attrs)])),
  } as unknown as HomeAssistant;
  return { hass, building };
}

test("a sensor state finds a room by its name, its area name or its area id, ignoring case and dashes", () => {
  const { hass, building } = home({});
  assert.equal(roomForState(hass, building, "kitchen")?.room.id, "ki");
  assert.equal(roomForState(hass, building, "LIVING-ROOM")?.room.id, "lr");
  assert.equal(roomForState(hass, building, "living_room")?.room.id, "lr");
  assert.equal(roomForState(hass, building, "Lounge")?.room.id, "lr");
  assert.equal(roomForState(hass, building, "Garage"), null);
});

test("states that name no room never match", () => {
  const { hass, building } = home({});
  for (const state of ["", "unknown", "unavailable", "not_home", "Away"]) assert.equal(roomForState(hass, building, state), null, state);
});

test("initials of one, two and many words", () => {
  assert.equal(initials("ann"), "AN");
  assert.equal(initials("Ann Bell"), "AB");
  assert.equal(initials("Ann Marie van Bell"), "AB");
  assert.equal(initials("   "), "?");
});

test("people at home are placed in their room, those away or without a sensor are not", () => {
  const { hass, building } = home({
    "person.ann": ["home", { friendly_name: "Ann Bell", entity_picture: "/ann.png" }],
    "sensor.ann_room": ["kitchen"],
    "person.bob": ["not_home", { friendly_name: "Bob" }],
    "sensor.bob_room": ["kitchen"],
    "person.cy": ["home"],
  });
  const people = personsInRooms(hass, building);
  assert.equal(people.length, 1);
  assert.deepEqual([people[0].id, people[0].name, people[0].initials, people[0].picture, people[0].roomId], ["person.ann", "Ann Bell", "AB", "/ann.png", "ki"]);
  // the marker stands inside the kitchen (x 4..8, z 0..3)
  assert.ok(people[0].x > 4 && people[0].x < 8 && people[0].z > 0 && people[0].z < 3);
});

test("two people in one room do not stand on the same spot", () => {
  const { hass, building } = home({
    "person.ann": ["home"], "sensor.ann_room": ["kitchen"],
    "person.bob": ["home"], "sensor.bob_room": ["Kitchen"],
  });
  const [a, b] = personsInRooms(hass, building);
  assert.notDeepEqual([a.x, a.z], [b.x, b.z]);
});

test("floor counts and their text leave out what is zero", () => {
  const { hass, building } = home({
    "person.ann": ["home"], "sensor.ann_room": ["kitchen"],
    "light.one": ["on"], "light.two": ["off"],
  });
  building.floors[0].placements = [
    { entity_id: "light.one", x: 1, z: 1, y: null, mount: null },
    { entity_id: "light.two", x: 2, z: 1, y: null, mount: null },
  ];
  const counts = floorCounts(hass, building, new Map(), personsInRooms(hass, building)).get("g");
  assert.deepEqual(counts, { rooms: 2, lightsOn: 1, open: 0, persons: 1, power: null });
  const text = floorInfoText(hass, counts!);
  assert.equal(text.split(" · ").length, 3, text);
  assert.equal(floorInfoText(hass, { rooms: 2, lightsOn: 0, open: 0, persons: 0, power: null }).includes(" · "), false);
  // the floor's own meter joins the label
  assert.ok(floorInfoText(hass, { rooms: 2, lightsOn: 0, open: 0, persons: 0, power: 1250 }).endsWith("⚡ 1.25 kW") || floorInfoText(hass, { rooms: 2, lightsOn: 0, open: 0, persons: 0, power: 1250 }).endsWith("⚡ 1,25 kW"));
  assert.ok(floorInfoText(hass, { rooms: 2, lightsOn: 0, open: 0, persons: 0, power: 640 }).endsWith("⚡ 640 W"));
});

test("a span of time reads as minutes, then hours", () => {
  assert.equal(sinceText(30_000), "0 min");
  assert.equal(sinceText(12 * 60_000), "12 min");
  assert.equal(sinceText(125 * 60_000), "2:05 h");
});
