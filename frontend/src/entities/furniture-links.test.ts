import assert from "node:assert/strict";
import { test } from "node:test";
import { setPacks } from "../packs.ts";
import type { Furniture } from "../model.ts";
import { box, entity, floorWith, hassOf, opening } from "./fixtures.ts";
import { confirmEntities, coolingTemps, deviceTempOf, namedTemps, fridgeDoors, furnitureEntities, hasScreen, isCooling, isMediaFurniture, outsideEntities, pictureRuleMatches, roomPanelEntities } from "./furniture-links.ts";

const piece = (id: string, type: string, extra: Partial<Furniture> = {}): Furniture => ({ id, type, x: 1, z: 1, rotation: 0, w: 1, d: 1, h: 1, variant: null, entity: null, power: null, ...extra });
const room = box("r", 0, 0, 4, 3, "area");
const inRoom = (...ids: string[]) => Object.fromEntries(ids.map((id) => [id, { area_id: "area" }]));

test("a TV takes the media player of its room, a real TV before another player", () => {
  const hass = hassOf([entity("media_player.speaker", "idle"), entity("media_player.living_tv", "off", { device_class: "tv" })], inRoom("media_player.speaker", "media_player.living_tv"));
  const floor = floorWith([room], { furniture: [piece("tv", "tv_board")] });
  assert.equal(furnitureEntities(hass, [floor]).get("tv")?.entity, "media_player.living_tv");
});

test("a desk's monitor does not take a smart speaker, but a TV board takes any player", () => {
  const hass = hassOf([entity("media_player.speaker", "idle")], inRoom("media_player.speaker"));
  assert.equal(furnitureEntities(hass, [floorWith([room], { furniture: [piece("desk", "desk")] })]).get("desk"), undefined);
  assert.equal(furnitureEntities(hass, [floorWith([room], { furniture: [piece("tv", "tv_board")] })]).get("tv")?.entity, "media_player.speaker");
});

test("appliances look for a switch or player with a fitting name, and power on the same device or by name", () => {
  const hass = hassOf(
    [entity("switch.dishwasher_plug", "on"), entity("switch.lamp_plug", "on"), entity("sensor.dishwasher_power", "5", { device_class: "power" })],
    { "switch.dishwasher_plug": { area_id: "area", device_id: "dw" }, "switch.lamp_plug": { area_id: "area" }, "sensor.dishwasher_power": { area_id: "area", device_id: "dw" } },
  );
  const links = furnitureEntities(hass, [floorWith([room], { furniture: [piece("dw", "dishwasher")] })]).get("dw");
  assert.deepEqual(links, { entity: "switch.dishwasher_plug", power: "sensor.dishwasher_power" });
});

test("a power sensor can be found by name when the entity has none on its device", () => {
  const hass = hassOf([entity("sensor.fridge_power", "40", { device_class: "power" })], inRoom("sensor.fridge_power"));
  assert.deepEqual(furnitureEntities(hass, [floorWith([room], { furniture: [piece("f", "fridge")] })]).get("f"), { entity: null, power: "sensor.fridge_power" });
});

test("lamps take a light of the room, preferring a fitting name, and each light is used once", () => {
  const hass = hassOf([entity("light.floor_standing", "on"), entity("light.main_ceiling", "on")], inRoom("light.floor_standing", "light.main_ceiling"));
  const floor = floorWith([room], { furniture: [piece("a", "lamp_ceiling"), piece("b", "lamp_ceiling")] });
  const links = furnitureEntities(hass, [floor]);
  assert.equal(links.get("a")?.entity, "light.main_ceiling");
  assert.equal(links.get("b")?.entity, "light.floor_standing");
});

test("entities set by hand and placed devices are never taken by another piece", () => {
  const hass = hassOf([entity("light.one", "on"), entity("light.two", "on")], inRoom("light.one", "light.two"));
  const floor = floorWith([room], { furniture: [piece("a", "lamp_ceiling", { entity: "light.one" }), piece("b", "lamp_ceiling")], placements: [] });
  assert.equal(furnitureEntities(hass, [floor]).get("b")?.entity, "light.two");
  const placed = floorWith([room], { furniture: [piece("c", "lamp_ceiling")], placements: [{ entity_id: "light.one", x: 0, z: 0, y: null, mount: null }] });
  assert.equal(furnitureEntities(hass, [placed]).get("c")?.entity, "light.two");
});

test("'none' keeps a piece unlinked and a piece outside every room finds nothing", () => {
  const hass = hassOf([entity("light.one", "on")], inRoom("light.one"));
  assert.equal(furnitureEntities(hass, [floorWith([room], { furniture: [piece("a", "lamp_ceiling", { entity: "none" })] })]).get("a"), undefined);
  assert.equal(furnitureEntities(hass, [floorWith([room], { furniture: [piece("a", "lamp_ceiling", { x: 20, z: 20 })] })]).get("a"), undefined);
});

test("a robot vacuum and a radiator find their own kind in the room's area", () => {
  const hass = hassOf([entity("vacuum.rob", "docked"), entity("climate.heater", "heat"), entity("climate.other", "off")], { "vacuum.rob": { area_id: "area" }, "climate.heater": { area_id: "area" }, "climate.other": { area_id: "elsewhere" } });
  const links = furnitureEntities(hass, [floorWith([room], { furniture: [piece("v", "robot_vacuum"), piece("r", "radiator")] })]);
  assert.equal(links.get("v")?.entity, "vacuum.rob");
  assert.equal(links.get("r")?.entity, "climate.heater");
});

test("a climate pack item finds a climate entity in its room's area", () => {
  setPacks([
    {
      id: "test.hvac",
      name: "HVAC",
      publisher: "Test",
      items: [
        {
          id: "mini_split",
          name: { en: "Mini split" },
          size: [0.9, 0.22, 0.28],
          climate: true,
          parts: [{ shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "body" }],
        },
      ],
    },
  ]);
  const hass = hassOf(
    [entity("climate.ac", "cool"), entity("switch.plug", "on")],
    inRoom("climate.ac", "switch.plug"),
  );
  const floor = floorWith([room], {
    furniture: [piece("ac", "pack:test.hvac:mini_split")],
  });
  assert.equal(furnitureEntities(hass, [floor]).get("ac")?.entity, "climate.ac");
  setPacks([]);
});

test("screens: built-in TVs and a few devices have one", () => {
  assert.equal(isMediaFurniture("tv_wall"), true);
  assert.equal(isMediaFurniture("sofa"), false);
  assert.equal(hasScreen("desk"), true);
  assert.equal(hasScreen("fridge_smart"), true);
  assert.equal(hasScreen("sofa"), false);
});

test("picture rules: equal, contained (3+ letters), wildcard, attribute, missing", () => {
  const hass = hassOf([entity("media_player.tv", "playing", { app_name: "YouTube TV", volume: 0.5 })]);
  const rule = (state: string, attribute?: string) => ({ entity: "media_player.tv", state, attribute });
  assert.equal(pictureRuleMatches(hass, rule("playing")), true);
  assert.equal(pictureRuleMatches(hass, rule("PLAY")), true);
  assert.equal(pictureRuleMatches(hass, rule("pl")), false, "too short to match inside");
  assert.equal(pictureRuleMatches(hass, rule("*")), true);
  assert.equal(pictureRuleMatches(hass, rule("youtube", "app_name")), true);
  assert.equal(pictureRuleMatches(hass, rule("x", "nothing")), false);
  assert.equal(pictureRuleMatches(hass, { entity: "media_player.gone", state: "*" }), false);
});

test("entities that ask first: placed devices, linked furniture and marked blinds", () => {
  const hass = hassOf([entity("light.a", "on"), entity("cover.blind", "open", { device_class: "shutter" }), entity("switch.s", "on")], { "light.a": { area_id: "area" }, "cover.blind": { area_id: "area" }, "switch.s": { area_id: "area" } });
  const floor = floorWith([room], {
    placements: [{ entity_id: "light.a", x: 0, z: 0, y: null, mount: null, confirm: true }],
    openings: [opening("w", "r", "window", { confirm: true } as never)],
    furniture: [piece("sw", "kitchen", { entity: "switch.s", confirm: true })],
  });
  assert.deepEqual([...confirmEntities(hass, [floor])].sort(), ["cover.blind", "light.a", "switch.s"]);
});

test("a smart fridge's doors follow their sensors, unset or none means closed", () => {
  const hass = hassOf([entity("binary_sensor.l", "on"), entity("binary_sensor.r", "open"), entity("binary_sensor.x", "off")]);
  const floor = floorWith([room], { furniture: [piece("f1", "fridge_smart", { door_left: "binary_sensor.l", door_right: "none" }), piece("f2", "fridge_smart", { door_right: "binary_sensor.r" }), piece("f3", "fridge")] });
  const doors = fridgeDoors(hass, [floor]);
  assert.deepEqual(doors.get("f1"), { left: true, right: false });
  assert.deepEqual(doors.get("f2"), { left: false, right: true });
  assert.equal(doors.has("f3"), false);
});

test("the room panel shows placed and linked entities, own picks and door sensors, minus hidden ones", () => {
  const hass = hassOf(
    [entity("light.placed", "on"), entity("light.lamp", "on", { friendly_name: "Ceiling lamp" }), entity("light.picked", "on"), entity("light.hidden", "on"), entity("binary_sensor.door", "off", { device_class: "door" }), entity("sensor.rest", "1", { device_class: "temperature" })],
    inRoom("light.placed", "light.lamp", "light.picked", "light.hidden", "binary_sensor.door", "sensor.rest"),
  );
  const r = { ...room, panel: ["light.picked", "light.gone"], hidden: ["light.hidden"] };
  const floor = floorWith([r], { placements: [{ entity_id: "light.placed", x: 1, z: 1, y: null, mount: null }], furniture: [piece("l", "lamp_ceiling")], openings: [opening("d", "r", "door")] });
  const { shown, more } = roomPanelEntities(hass, floor, r);
  assert.deepEqual(shown.sort(), ["binary_sensor.door", "light.lamp", "light.picked", "light.placed"]);
  assert.deepEqual(more, ["sensor.rest"]);
});

test("a fridge shows its compartments' temperatures and warns when one is too warm", () => {
  const fmt = (c: number) => `${c.toFixed(1)} °C`;
  const hass = hassOf([
    entity("sensor.fridge", "4.2", { unit_of_measurement: "°C" }),
    entity("sensor.freezer", "-18", { unit_of_measurement: "°C" }),
    entity("sensor.warm", "9.1", { unit_of_measurement: "°C" }),
    entity("sensor.thawing", "-10", { unit_of_measurement: "°C" }),
    entity("sensor.fahrenheit", "50", { unit_of_measurement: "°F" }),
    entity("sensor.gone", "unavailable"),
  ]);
  assert.deepEqual(coolingTemps(hass, { temp_entity: "sensor.fridge", temp_entity2: "sensor.freezer" }, fmt), { text: "4.2 °C · -18.0 °C", warm: false });
  assert.equal(coolingTemps(hass, { temp_entity: "sensor.warm" }, fmt)?.warm, true);
  assert.equal(coolingTemps(hass, { temp_entity2: "sensor.thawing" }, fmt)?.warm, true);
  // 50 °F are 10 °C: too warm for a fridge
  assert.deepEqual(coolingTemps(hass, { temp_entity: "sensor.fahrenheit" }, fmt), { text: "10.0 °C", warm: true });
  assert.equal(coolingTemps(hass, { temp_entity: "sensor.gone" }, fmt), null);
  assert.equal(coolingTemps(hass, { temp_entity: "none" }, fmt), null);
  assert.equal(isCooling("fridge"), true);
  assert.equal(isCooling("pack:nextfloor.a_kueche:fridge_freezer"), true);
  assert.equal(isCooling("pack:nextfloor.a_kueche:oven"), false);
});

test("Outside lists what stands outside the rooms and what belongs to it; the room below no longer counts a roof device", () => {
  const hass = hassOf([entity("switch.valve", "off"), entity("sensor.weather", "12"), entity("light.inside", "on")]);
  const floor = floorWith([room], {
    placements: [
      { entity_id: "switch.valve", x: 9, z: 9, y: null, mount: null },
      { entity_id: "sensor.weather", x: 1, z: 1, y: null, mount: null, outside: true },
      { entity_id: "light.inside", x: 2, z: 2, y: null, mount: null },
    ],
  });
  assert.deepEqual(outsideEntities(hass, [floor]).sort(), ["sensor.weather", "switch.valve"]);
  assert.deepEqual(outsideEntities(hass, [floor], ["switch.valve"]), ["sensor.weather"], "a hidden device is left out (#83)");
  assert.deepEqual(roomPanelEntities(hass, floor, room).shown, ["light.inside"], "the weather station is not the room's");
});

test("Outside lists the devices of the areas linked to gardens and pools, and a pool's pump", () => {
  const hass = hassOf([entity("light.terrace", "on"), entity("switch.pool_pump", "off"), entity("sensor.pool_water", "24", { device_class: "temperature" })], { "light.terrace": { area_id: "terrasse" } });
  const floor = floorWith([box("r", 0, 0, 4, 4)], {
    outdoor: [
      { id: "t", type: "terrace", points: [[5, 0], [8, 0], [8, 3], [5, 3]], area_id: "terrasse" },
      { id: "p", type: "pool", points: [[9, 0], [12, 0], [12, 3], [9, 3]], pump_entity: "switch.pool_pump", temp_entity: "sensor.pool_water" },
    ],
  });
  assert.deepEqual(outsideEntities(hass, [floor]).sort(), ["light.terrace", "sensor.pool_water", "switch.pool_pump"]);
});

test("a smart speaker takes the only free media player of its room, not a TV (#104)", () => {
  setPacks([{ id: "test.hifi", name: "Hifi", publisher: "Test", items: [{ id: "smart_speaker_ball", name: { en: "Smart speaker" }, size: [0.12, 0.12, 0.12], electric: true, parts: [{ shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "body" }] }] }]);
  const speaker = piece("sp", "pack:test.hifi:smart_speaker_ball");
  const only = hassOf([entity("media_player.echo", "idle")], inRoom("media_player.echo"));
  assert.equal(furnitureEntities(only, [floorWith([room], { furniture: [speaker] })]).get("sp")?.entity, "media_player.echo");
  const two = hassOf([entity("media_player.echo", "idle"), entity("media_player.other", "idle")], inRoom("media_player.echo", "media_player.other"));
  assert.equal(furnitureEntities(two, [floorWith([room], { furniture: [speaker] })]).get("sp")?.entity ?? null, null, "two players: no guess");
  setPacks([]);
});

test("a device's own thermometer reads in Celsius, Fahrenheit turned over, nothing without a number (#112)", () => {
  const hass = hassOf([entity("sensor.inverter_temp", "41.5", { unit_of_measurement: "°C" }), entity("sensor.pc_temp", "122", { unit_of_measurement: "°F" }), entity("sensor.gone", "unavailable")]);
  assert.equal(deviceTempOf(hass, "sensor.inverter_temp"), 41.5);
  assert.equal(deviceTempOf(hass, "sensor.pc_temp"), 50);
  assert.equal(deviceTempOf(hass, "sensor.gone"), null);
  assert.equal(deviceTempOf(hass, "none"), null);
  assert.equal(deviceTempOf(hass, null), null);
});

test("a device's named temperatures: label, value in Celsius, in the order set; sensors without a number are left out (#118)", () => {
  const hass = { states: { "sensor.flow": { state: "62.5", attributes: { unit_of_measurement: "°C" } }, "sensor.ret": { state: "113", attributes: { unit_of_measurement: "°F" } }, "sensor.gone": { state: "unavailable", attributes: {} } } } as never;
  const out = namedTemps(hass, { temps: [{ label: " Vorlauf ", entity: "sensor.flow" }, { label: "Weg", entity: "sensor.gone" }, { label: "Rücklauf", entity: "sensor.ret" }] });
  assert.deepEqual(out.map((x) => [x.label, Math.round(x.celsius * 10) / 10]), [["Vorlauf", 62.5], ["Rücklauf", 45]]);
  assert.deepEqual(namedTemps(hass, {}), []);
});
