import assert from "node:assert/strict";
import { test } from "node:test";
import { box, entity, floorWith, hassOf } from "../../entities/fixtures.ts";
import type { Building, Furniture } from "../../model.ts";
import { watchedEntities, type WatchInputs } from "./watch-list.ts";

const tv: Furniture = { id: "tv1", type: "tv_board", x: 1, z: 1, rotation: 0, w: 1, d: 0.4, h: 0.5, variant: null, state_entity: "binary_sensor.state", door_left: "binary_sensor.left", soc: "sensor.soc", temp_entity: "sensor.fridge_temp", temp_entity2: "sensor.freezer_temp" };
const building = (extra: Record<string, unknown> = {}): Building =>
  ({
    version: 1,
    floors: [floorWith([box("r", 0, 0, 4, 4, "lounge")], { furniture: [tv], placements: [{ entity_id: "light.a", x: 1, z: 1, y: null }] })],
    settings: { roof: { type: "none", pitch: 35, overhang: 0, windows: [{ id: "w", face: "main:a", u: 0, v: 0, cover: "cover.roof", contact: "none" }], solar: [{ id: "f", face: "main:a", u: 0, v: 0, rows: 1, cols: 1, portrait: true, entity: "sensor.pv" }], strings: [] } },
    energy: { grid: "sensor.grid", solar: null, battery: null, battery_soc: null, consumption: null, tariff: null },
    presence: [{ person: "person.anna", sensor: "sensor.anna_room" }],
    ...extra,
  }) as unknown as Building;

function inputs(extra: Partial<WatchInputs> = {}): WatchInputs {
  const hass = hassOf([entity("light.a", "on"), entity("sensor.room_temp", "20", { device_class: "temperature" })], { "sensor.room_temp": { area_id: "lounge" }, "light.a": { area_id: "lounge" } }, { areas: { lounge: { area_id: "lounge", name: "Lounge" } } });
  return { hass, building: building(), openingLinks: new Map(), furnitureLinks: new Map(), needsRoomSensors: false, alertSources: null, weatherEntityId: null, ...extra };
}

test("placed devices, energy sensors, presence, furniture links, the roof and the sun are watched", () => {
  const ids = watchedEntities(inputs());
  for (const id of ["light.a", "sensor.grid", "person.anna", "sensor.anna_room", "binary_sensor.state", "binary_sensor.left", "sensor.soc", "sensor.fridge_temp", "sensor.freezer_temp", "cover.roof", "sensor.pv", "sun.sun"]) assert.ok(ids.includes(id), id);
});

test("an entity set to 'none' on a roof window is not watched, and nothing appears twice", () => {
  const ids = watchedEntities(inputs());
  assert.equal(ids.includes("none"), false);
  assert.equal(new Set(ids).size, ids.length);
});

test("the sensors of the rooms' areas are only watched when the heat map or room labels need them", () => {
  assert.equal(watchedEntities(inputs()).includes("sensor.room_temp"), false);
  assert.equal(watchedEntities(inputs({ needsRoomSensors: true })).includes("sensor.room_temp"), true);
});

test("opening links bring their blinds, contacts and positions along", () => {
  const links = new Map([["o1", { cover: "cover.blind", contact: "binary_sensor.window", tilt: null, contact2: "binary_sensor.second", position: "sensor.pos" }]]);
  const ids = watchedEntities(inputs({ openingLinks: links as never }));
  for (const id of ["cover.blind", "binary_sensor.window", "binary_sensor.second", "sensor.pos"]) assert.ok(ids.includes(id), id);
});
