import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor } from "./model.ts";
import { box, floorWith, hassOf } from "./entities/fixtures.ts";
import { searchIndex, searchItems } from "./search.ts";
import type { HomeAssistant } from "./types.ts";

function demo() {
  const hass = {
    language: "en",
    states: {
      "light.ceiling": { entity_id: "light.ceiling", state: "on", attributes: { friendly_name: "Ceiling light Kitchen" } },
      "sensor.temp": { entity_id: "sensor.temp", state: "21", attributes: { friendly_name: "Temperature" } },
      "sensor.hall": { entity_id: "sensor.hall", state: "5", attributes: { friendly_name: "Hall sensor" } },
    },
  } as unknown as HomeAssistant;
  const building = emptyBuilding();
  const ground = newFloor("g", "Ground", 0);
  ground.rooms = [
    { id: "k", name: "Kitchen", area_id: null, points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "wood" },
    { id: "bad", name: "Broken", area_id: null, points: [[0, 0], [1, 1]], floor_material: "wood" },
  ];
  ground.placements = [
    { entity_id: "sensor.temp", x: 1, z: 1, y: null, mount: null },
    { entity_id: "sensor.temp", x: 2, z: 2, y: null, mount: null },
    { entity_id: "sensor.missing", x: 1, z: 1, y: null, mount: null },
    { entity_id: "sensor.hall", x: 9, z: 9, y: null, mount: null },
  ];
  ground.furniture = [{ id: "l", type: "lamp_ceiling", x: 2, z: 2, rotation: 0, w: 0.4, d: 0.4, h: 0.1, variant: null, entity: "light.ceiling", power: null }];
  building.floors = [ground];
  return { hass, building };
}

test("the index lists valid rooms and each known entity once", () => {
  const { hass, building } = demo();
  const index = searchIndex(hass, building);
  assert.deepEqual(index.map((i) => i.name).sort(), ["Ceiling light Kitchen", "Hall sensor", "Kitchen", "Temperature"]);
  assert.equal(index.filter((i) => i.entity === "sensor.temp").length, 1);
});

test("a device knows the room it stands in, a device outside every room has none", () => {
  const { hass, building } = demo();
  const index = searchIndex(hass, building);
  assert.equal(index.find((i) => i.entity === "sensor.temp")?.where, "Kitchen");
  assert.equal(index.find((i) => i.entity === "sensor.hall")?.roomId, null);
});

test("the place also names the floor once the building has several", () => {
  const { hass, building } = demo();
  building.floors.push(newFloor("o", "Upstairs", 3));
  const index = searchIndex(hass, building);
  assert.equal(index.find((i) => i.entity === "sensor.temp")?.where, "Kitchen · Ground");
  assert.equal(index.find((i) => i.kind === "room")?.where, "Ground");
});

test("accents and case do not matter, every word has to match", () => {
  const { hass, building } = demo();
  building.floors[0].rooms[0].name = "Küche";
  const index = searchIndex(hass, building);
  assert.equal(searchItems(index, "KUCHE")[0].kind, "room");
  assert.equal(searchItems(index, "ceiling kuche").length, 1);
  assert.equal(searchItems(index, "ceiling garage").length, 0);
});

test("best matches first: prefix before contains, rooms before devices, and the limit holds", () => {
  const { hass, building } = demo();
  const index = searchIndex(hass, building);
  const hits = searchItems(index, "kitchen");
  assert.equal(hits[0].name, "Kitchen");
  assert.equal(hits[1].name, "Ceiling light Kitchen");
  assert.equal(searchItems(index, "e", 2).length, 2);
});

test("an empty query finds nothing", () => {
  const { hass, building } = demo();
  assert.deepEqual(searchItems(searchIndex(hass, building), "   "), []);
});

test("notes are found by their text", () => {
  const floor = { ...floorWith([box("k", 0, 0, 4, 4)]), notes: [{ id: "n1", x: 1, z: 1, text: "Sicherung 12 ist der Herd" }] };
  const found = searchItems(searchIndex(hassOf([]), { ...emptyBuilding(), floors: [floor] }), "herd");
  assert.equal(found.length, 1);
  assert.equal(found[0].kind, "note");
  assert.equal(found[0].roomId, "k");
});

test("a circuit of the fuse box is found and leads to its first room", () => {
  const b = { ...emptyBuilding(), floors: [{ ...floorWith([box("k", 0, 0, 4, 4), box("b", 4, 0, 6, 4)]) }] };
  b.settings = { ...b.settings, circuits: [{ id: "c", name: "F12 Küche und Bad", rooms: ["k", "b"] }] };
  const [found] = searchItems(searchIndex(hassOf([]), b), "f12");
  assert.equal(found.kind, "circuit");
  assert.equal(found.roomId, "k");
  assert.equal(found.where, "k, b");
});
