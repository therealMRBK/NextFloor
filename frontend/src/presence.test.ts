import assert from "node:assert/strict";
import { test } from "node:test";
import type { Building, Room } from "./model.ts";
import { emptyBuilding, newFloor } from "./model.ts";
import { floorCounts, floorInfoText, initials, personsInRooms, roomForState } from "./presence.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}): HassEntity => ({ entity_id, state, attributes });

function rect(id: string, name: string, area: string | null, x0: number): Room {
  return { id, name, area_id: area, points: [[x0, 0], [x0 + 4, 0], [x0 + 4, 3], [x0, 3]], floor_material: "wood" };
}

function setup(): { hass: HomeAssistant; building: Building } {
  const building = emptyBuilding();
  building.floors = [{ ...newFloor("eg", "EG", 0), rooms: [rect("r1", "Wohnen", "living_room", 0), rect("r2", "Küche", "kitchen", 4)] }];
  building.presence = [
    { person: "person.mia", sensor: "sensor.mia_area" },
    { person: "person.tom", sensor: "sensor.tom_room" },
    { person: "person.lea", sensor: "sensor.lea_area" },
  ];
  const hass: HomeAssistant = {
    language: "de",
    connection: {} as HomeAssistant["connection"],
    callWS: async () => undefined as never,
    callService: async () => undefined,
    areas: { living_room: { area_id: "living_room", name: "Wohnzimmer" }, kitchen: { area_id: "kitchen", name: "Kitchen" } },
    entities: { "light.a": { entity_id: "light.a", area_id: "kitchen" } },
    states: Object.fromEntries(
      [
        st("person.mia", "home", { friendly_name: "Mia Muster" }),
        st("sensor.mia_area", "Wohnzimmer"),
        st("person.tom", "home", { friendly_name: "Tom" }),
        st("sensor.tom_room", "kitchen"),
        st("person.lea", "not_home", { friendly_name: "Lea" }),
        st("sensor.lea_area", "Wohnzimmer"),
        st("light.a", "on"),
      ].map((s) => [s.entity_id, s]),
    ),
  };
  return { hass, building };
}

test("room sensor states match room names, area names and area ids", () => {
  const { hass, building } = setup();
  assert.equal(roomForState(hass, building, "Wohnzimmer")?.room.id, "r1");
  assert.equal(roomForState(hass, building, "living_room")?.room.id, "r1");
  assert.equal(roomForState(hass, building, "küche")?.room.id, "r2");
  assert.equal(roomForState(hass, building, "not_home"), null);
});

test("people at home are placed in their room; away people are not", () => {
  const { hass, building } = setup();
  const people = personsInRooms(hass, building);
  assert.deepEqual(
    people.map((p) => [p.id, p.roomId, p.initials]),
    [
      ["person.mia", "r1", "MM"],
      ["person.tom", "r2", "TO"],
    ],
  );
  assert.equal(initials("anna"), "AN");
});

test("floor labels count rooms, lights on, open windows and people", () => {
  const { hass, building } = setup();
  const counts = floorCounts(hass, building, new Map(), personsInRooms(hass, building)).get("eg")!;
  assert.deepEqual(counts, { rooms: 2, lightsOn: 1, open: 0, persons: 2 });
  assert.equal(floorInfoText(hass, counts), "2 Räume · 1 Licht an · 2 Pers.");
});
