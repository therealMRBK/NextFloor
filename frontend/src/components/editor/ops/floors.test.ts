import assert from "node:assert/strict";
import { test } from "node:test";
import { box, floorWith, opening } from "../../../entities/fixtures.ts";
import type { Building } from "../../../model.ts";
import { copyOfFloor, floorsSwapped, floorsWith, freeHaFloors, linkableHaFloors, moveFurnitureToFloor, newFloorFor, unlinked, unplacedAreas } from "./floors.ts";

const names = { first: "Ground floor", next: (n: number) => `Floor ${n}` };
const level = (id: string, elevation: number, extra = {}) => floorWith([], { id, elevation, ...extra } as never);
const house = (...floors: ReturnType<typeof level>[]) => ({ floors }) as unknown as Building;

test("the first floor gets its own name, later ones are numbered, and a Home Assistant floor lends its name and level", () => {
  assert.equal(newFloorFor(house(), null, names).name, "Ground floor");
  assert.equal(newFloorFor(house(level("g", 0)), null, names).name, "Floor 1");
  const fromHa = newFloorFor(house(level("g", 0)), { floor_id: "upstairs", name: "Upstairs", level: 1 }, names);
  assert.deepEqual([fromHa.name, fromHa.ha_floor, fromHa.elevation], ["Upstairs", "upstairs", 2.75]);
  assert.notEqual(newFloorFor(house(), null, names).id, newFloorFor(house(), null, names).id);
});

test("a new floor without a level goes on top of the house", () => {
  const added = newFloorFor(house(level("g", 0)), null, names);
  assert.equal(added.elevation, 2.75);
});

test("floors stay ordered from bottom to top when one is added", () => {
  const floors = [level("a", 0), level("b", 3), level("c", 6)];
  assert.deepEqual(floorsWith(floors, level("x", 1)).map((f) => f.id), ["a", "x", "b", "c"]);
  assert.deepEqual(floorsWith(floors, level("x", 9)).map((f) => f.id), ["a", "b", "c", "x"]);
  assert.deepEqual(floorsWith(floors, level("x", -3)).map((f) => f.id), ["x", "a", "b", "c"]);
  assert.deepEqual(floorsWith([], level("x", 0)).map((f) => f.id), ["x"]);
});

test("floors swap with the neighbour in the direction, and stay put at the ends", () => {
  const floors = [level("a", 0), level("b", 3), level("c", 6)];
  assert.deepEqual(floorsSwapped(floors, "b", 1).map((f) => f.id), ["a", "c", "b"]);
  assert.deepEqual(floorsSwapped(floors, "b", -1).map((f) => f.id), ["b", "a", "c"]);
  assert.deepEqual(floorsSwapped(floors, "c", 1).map((f) => f.id), ["a", "b", "c"]);
  assert.deepEqual(floorsSwapped(floors, "nope", 1).map((f) => f.id), ["a", "b", "c"]);
});

test("Home Assistant floors that are not used yet come lowest first, unnumbered ones last", () => {
  const registry = { a: { floor_id: "a", name: "Attic", level: 2 }, g: { floor_id: "g", name: "Ground", level: 0 }, z: { floor_id: "z", name: "Zeta" }, b: { floor_id: "b", name: "Basement", level: -1 } };
  const doc = house(level("x", 0, { ha_floor: "g" }));
  assert.deepEqual(freeHaFloors(doc, registry).map((f) => f.floor_id), ["b", "a", "z"]);
  assert.deepEqual(freeHaFloors(doc, undefined), []);
  assert.deepEqual(linkableHaFloors(doc, doc.floors[0], registry).map((f) => f.floor_id).sort(), ["a", "b", "g", "z"]);
  assert.deepEqual(linkableHaFloors(house(level("x", 0, { ha_floor: "g" }), level("y", 3)), doc.floors[0], registry).map((f) => f.floor_id).sort(), ["a", "b", "g", "z"]);
  assert.deepEqual(linkableHaFloors(house(level("x", 0, { ha_floor: "g" }), level("y", 3, { ha_floor: "a" })), doc.floors[0], registry).map((f) => f.floor_id).sort(), ["b", "g", "z"]);
});

test("areas without a room: only those of the floor's Home Assistant floor, by name", () => {
  const areas = {
    k: { area_id: "k", name: "Kitchen", floor_id: "g" },
    b: { area_id: "b", name: "Bath", floor_id: "g" },
    a: { area_id: "a", name: "Attic room", floor_id: "up" },
    h: { area_id: "h", name: "Hall", floor_id: "g" },
  };
  const ground = floorWith([box("room", 0, 0, 1, 1, "h")], { id: "x", ha_floor: "g" } as never);
  const doc = { floors: [ground] } as unknown as Building;
  assert.deepEqual(unplacedAreas(doc, ground, areas).map((a) => a.area_id), ["b", "k"]);
  assert.deepEqual(unplacedAreas(doc, { ...ground, ha_floor: null }, areas), []);
  assert.deepEqual(unplacedAreas(doc, ground, undefined), []);
});

test("a floor copy gets new ids, goes on top of the house and keeps its doors on the copied rooms", () => {
  let n = 0;
  const id = (prefix: string) => `${prefix}_${++n}`;
  const room = { ...box("r1", 0, 0, 4, 3), area_id: "living" };
  const ground = floorWith([room], {
    id: "g",
    ha_floor: "eg",
    walls: [{ id: "w1", a: [0, 1], b: [2, 1] }],
    openings: [opening("o1", "r1", "door"), opening("o2", "r1", "window", { wall: "w1" })],
    furniture: [
      { id: "f1", type: "sofa", x: 1, z: 1, rotation: 0, w: 2, d: 1, h: 0.8, variant: null, entity: "media_player.tv", state_entity: "binary_sensor.seat" },
      { id: "f2", type: "meter", x: 0, z: 0, rotation: 0, w: 0.5, d: 0.2, h: 1, variant: null },
    ],
    placements: [{ entity_id: "light.a", x: 1, z: 1 } as never],
  });
  const upper = floorWith([], { id: "u", elevation: 2.75, height: 2.5 });
  const doc = house(ground, upper);
  const copy = copyOfFloor(doc, ground, "Ground (copy)", { furniture: true, devices: false, outdoor: false }, id);
  assert.equal(copy.elevation, 5.25, "above the highest floor");
  assert.equal(copy.ha_floor, null);
  assert.equal(copy.rooms[0].area_id, null);
  assert.notEqual(copy.rooms[0].id, "r1");
  assert.deepEqual(copy.openings.map((o) => o.room_id), [copy.rooms[0].id, copy.rooms[0].id]);
  assert.equal(copy.openings[1].wall, copy.walls![0].id);
  assert.deepEqual(copy.furniture.map((f) => f.type), ["sofa"], "the meter stays behind");
  assert.equal(copy.furniture[0].entity, "none");
  assert.equal(copy.furniture[0].state_entity, null);
  assert.deepEqual(copy.placements, []);
  assert.equal(ground.rooms[0].area_id, "living", "the original is untouched");
});

test("furniture moves to another floor at the same spot", () => {
  const sofa = { id: "f1", type: "sofa", x: 1, z: 1, rotation: 0, w: 2, d: 1, h: 0.8, variant: null };
  const doc = house(floorWith([], { id: "g", furniture: [sofa] }), floorWith([], { id: "u", elevation: 2.75 }));
  assert.equal(moveFurnitureToFloor(doc, "g", "f1", "u"), true);
  assert.deepEqual([doc.floors[0].furniture.length, doc.floors[1].furniture[0].x], [0, 1]);
  assert.equal(moveFurnitureToFloor(doc, "g", "f1", "u"), false);
});

test("a copied piece of furniture keeps no link to Home Assistant", () => {
  const linked = {
    id: "f1",
    type: "fridge_smart",
    x: 1,
    z: 1,
    rotation: 0,
    w: 0.9,
    d: 0.7,
    h: 1.8,
    variant: null,
    entity: "switch.fridge",
    power: "sensor.fridge_power",
    temp_entity: "sensor.fridge_temp",
    door_left: "binary_sensor.freezer_door",
    door_right: "binary_sensor.fridge_door",
    state_entity: "binary_sensor.seat",
    color_entity: "light.bulb",
    care_entity: "sensor.bin",
    cover_entity: "cover.curtain",
    fan_entity: "fan.ceiling",
    room_sensor: "sensor.vacuum_room",
    type_entity: "sensor.car_kind",
    gang_entities: ["light.a", "light.b"],
    pictures: [{ entity: "media_player.tv", state: "*", image: "x" }],
    car: { device: "sensor.car_soc", soc: "sensor.car_soc" },
    tap: { action: "more-info", target: "light.a" },
  } as never;
  const copy = unlinked(linked);
  const text = JSON.stringify(copy);
  assert.doesNotMatch(text, /[a-z_]+\.[a-z0-9_]+/, "no entity id survives");
  assert.deepEqual([copy.entity, copy.power, copy.fan_entity, copy.room_sensor], ["none", "none", "none", "none"]);
  assert.deepEqual([copy.w, copy.d, copy.h, copy.x], [0.9, 0.7, 1.8, 1]);
});
