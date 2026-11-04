import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Building } from "./model.ts";
import { exportFile, EXPORT_FORMAT, parseExport, shareViewHtml, storedImageIds, withoutEntities } from "./transfer.ts";

function linked(): Building {
  const b = emptyBuilding();
  const floor = newFloor("g", "Ground", 0);
  floor.rooms = [{ id: "r", name: "Room", area_id: "living", points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "wood" }];
  floor.placements = [{ entity_id: "light.a", x: 1, z: 1, y: null, mount: null }];
  floor.furniture = [{ id: "tv", type: "tv", x: 1, z: 1, rotation: 0, w: 1, d: 0.1, h: 0.6, variant: null, entity: "media_player.tv", power: "sensor.tv_power", pictures: [{ entity: "", state: "", image: "abc123" }, { entity: "", state: "", image: "https://example.org/a.png" }, { entity: "", state: "", image: "camera:front" }] }];
  floor.background = { image_id: "bg1", x: 0, z: 0, width: 10, rotation: 0, opacity: 0.5 } as never;
  b.floors = [floor];
  b.presence = [{ person: "person.a", sensor: "sensor.a" }];
  b.energy = { ...b.energy, grid: "sensor.grid", solar: "sensor.solar" };
  return b;
}

test("a shareable copy has no entity, area, person or background left", () => {
  const original = linked();
  const copy = withoutEntities(original);
  assert.equal(copy.floors[0].placements.length, 0);
  assert.equal(copy.floors[0].rooms[0].area_id, null);
  assert.equal(copy.floors[0].furniture[0].entity, null);
  assert.equal(copy.floors[0].furniture[0].power, null);
  assert.equal(copy.floors[0].background, null);
  assert.deepEqual([copy.presence, copy.energy.grid, copy.energy.solar], [[], null, null]);
  // the original stays as it was
  assert.equal(original.floors[0].rooms[0].area_id, "living");
  assert.equal(original.energy.grid, "sensor.grid");
});

test("exportFile wraps the plan and shareable or not decides about the links", () => {
  const full = exportFile(linked(), false);
  assert.equal(full.format, EXPORT_FORMAT);
  assert.equal(full.building.floors[0].placements.length, 1);
  assert.equal(exportFile(linked(), true).building.floors[0].placements.length, 0);
  assert.ok(!Number.isNaN(Date.parse(full.exported_at)));
});

test("a written file reads back, with or without the wrapper", () => {
  const wrapped = parseExport(JSON.stringify(exportFile(linked(), false)));
  assert.equal(wrapped.floors[0].name, "Ground");
  assert.equal(wrapped.floors[0].background, null, "pictures do not travel");
  assert.equal(parseExport(JSON.stringify(linked())).floors.length, 1);
});

test("garbage is told apart: not JSON versus JSON that is no plan", () => {
  assert.throws(() => parseExport("{oops"), /not_json/);
  assert.throws(() => parseExport("[1,2]"), /not_plan/);
  assert.throws(() => parseExport(JSON.stringify({ version: 2, floors: [], settings: {} })), /not_plan/);
  assert.throws(() => parseExport("null"), /not_plan/);
});

test("stored picture ids come from backgrounds and screens, once, never URLs or cameras", () => {
  const b = linked();
  b.floors[0].furniture[0].pictures!.push({ entity: "", state: "", image: "abc123" });
  assert.deepEqual(storedImageIds(b).sort(), ["abc123", "bg1"]);
});

test("a hand- or AI-written plan without ids gets one per piece, so its doors and windows can be selected", () => {
  const plan = {
    floors: [
      {
        name: "Ground",
        elevation: 0,
        height: 2.6,
        rooms: [{ name: "Garage", points: [[0, 0], [6, 0], [6, 4], [0, 4]] }],
        openings: [
          { room_id: "r1", edge: 0, offset: 2, type: "door" },
          { id: "o", room_id: "r1", edge: 1, offset: 1, type: "window", width: 1 },
          { id: "o", room_id: "r1", edge: 2, offset: 3, type: "garage_door" },
        ],
        furniture: [],
        placements: [],
      },
    ],
  };
  const floor = parseExport(JSON.stringify(plan)).floors[0];
  const ids = floor.openings.map((o) => o.id);
  assert.equal(new Set(ids).size, 3);
  assert.ok(ids.every((id) => typeof id === "string" && id.length > 0));
  assert.equal(floor.openings[1].id, "o", "the first of a repeated id keeps it");
  assert.ok(floor.rooms[0].id);
  assert.ok(floor.openings[0].width > 0 && floor.openings[0].height > 0);
  assert.equal(floor.openings[2].type, "door", "an unknown kind becomes a door the form can change");
});

test("the smallest plan in docs/plan-format.md imports", async () => {
  const { readFileSync } = await import("node:fs");
  const doc = readFileSync(new URL("../../docs/plan-format.md", import.meta.url), "utf8");
  const json = doc.split("```json\n")[1].split("```")[0];
  const b = parseExport(json);
  assert.equal(b.floors[0].rooms.length, 2);
  assert.deepEqual(b.floors[0].openings.map((o) => o.type), ["door", "window", "garage"]);
  assert.equal(b.floors[0].openings[2].width, 2.5);
  assert.equal(b.floors[0].rooms[0].floor_material, "wood");
});

test("a shared view embeds the plan without entities and only the packs it uses", () => {
  const b = emptyBuilding();
  b.floors = [{ ...newFloor("g", "EG </script>", 0), placements: [{ entity_id: "light.x", x: 1, z: 1, y: null, mount: null }], furniture: [{ id: "f", type: "pack:own_studio:shelf", x: 1, z: 1, rotation: 0, w: 1, d: 1, h: 1, variant: null }] }];
  const own = { id: "own_studio", name: "Own", publisher: "Me", items: [] };
  const other = { id: "other", name: "Other", publisher: "Me", items: [] };
  const html = shareViewHtml(b, [own, other, { ...own, id: "nextfloor.ikea", builtin: true }], "Our home", "needs js", "https://example.org/preview/?shared");
  const json = html.match(/<script id="nf-plan" type="application\/json">(.*?)<\/script>/s)![1];
  assert.ok(!json.includes("</script>"));
  const data = JSON.parse(json);
  assert.equal(data.building.floors[0].name, "EG </script>");
  assert.equal(data.building.floors[0].placements.length, 0);
  assert.deepEqual(data.packs.map((p: { id: string }) => p.id), ["own_studio"]);
  assert.ok(html.includes('src="https://example.org/preview/?shared"'));
});

// A plan with a link to Home Assistant in every place the model has one: nothing of it may stay in a shared copy.
function leaky(): Building {
  const b = linked();
  b.settings = {
    ...b.settings,
    map: { on: true, lat: 52.52, lon: 13.405 },
    favorites: ["scene.movie", "script.goodnight"],
    buttons: [{ id: "b1", label: "Blinds", icon: "", action: "more_info", target: "cover.living", data: null } as never],
    own_alerts: [{ id: "a1", name: "Tank", entity: "sensor.tank", state: "<20" } as never],
    calendars: ["calendar.family"],
    status_entities: ["sensor.outside_temp"],
    circuits: [{ id: "c1", name: "F12 kitchen", rooms: ["r"] }],
    weather_entity: "weather.home",
    rain_sensor: "binary_sensor.rain",
    outage_sensor: "binary_sensor.grid_lost",
    announce_tts: "tts.cloud",
    announce_phrases: ["Dinner at 6, the code is 1234"],
    media_presets: [{ id: "m1", label: "Radio", type: "music", content: "x", speakers: ["media_player.kitchen"] }],
    backdrop: { color: "#112233", image: "/local/private/garden.jpg", dim: 0.3 },
    plugins: [{ url: "/local/nextfloor/my-plugin.js" } as never],
    wall_exterior: 0.3,
    north: 40,
  };
  b.energy = { ...b.energy, consumption: "sensor.house_w", gas: "sensor.gas", water: "sensor.water", battery: "sensor.bat", battery_soc: "sensor.soc", tariff: "sensor.tariff" };
  const floor = b.floors[0];
  floor.ha_floor = "ground_floor";
  floor.power_entity = "sensor.floor_power";
  Object.assign(floor.rooms[0], { sub_areas: ["reading_corner"], panel: ["sensor.x"], hidden: ["light.y"], no_state: ["cover.z"], clean_entity: "script.clean_living", floor_heating: "climate.floor", announce_speaker: "media_player.living", moods: [{ id: "m", name: "Movie", lights: [{ entity_id: "light.a", on: true }] }], climate: { temperature: "sensor.t", humidity: "sensor.h" } });
  Object.assign(floor.furniture[0], {
    temp_entity: "sensor.fridge_t",
    cover_entity: "cover.curtain",
    state_entity: "binary_sensor.bed",
    gang_entities: ["switch.a", null],
    show_when: { entity: "input_boolean.xmas", state: "on" },
    tap: { action: "service", target: "light.turn_on", data: null },
    picture: "/local/family.jpg",
    car: { device: "0123456789abcdef0123456789abcdef", soc: "sensor.car_soc" },
    types: [{ state: "home", vehicle: "car" }],
  });
  floor.furniture.push({ id: "frame", type: "picture_frame", x: 2, z: 2, rotation: 0, w: 0.5, d: 0.05, h: 0.4, variant: null, picture: "image:abc123" } as never);
  floor.furniture.push({ id: "cam", type: "picture_frame", x: 3, z: 2, rotation: 0, w: 0.5, d: 0.05, h: 0.4, variant: null, picture: "camera.front_door" } as never);
  floor.openings = [{ id: "o", type: "door", room_id: "r", edge: 0, offset: 0.5, width: 0.9, height: 2, cover: "cover.a", contact: "binary_sensor.d", tilt: "sensor.tilt", lock: "lock.front" } as never];
  floor.outdoor = [{ id: "pool", type: "pool", points: [[0, 0], [1, 0], [1, 1]], area_id: "garden", temp_entity: "sensor.pool_t", pump_entity: "switch.pump" } as never];
  return b;
}

test("a shared copy keeps nothing that names, locates or controls this Home Assistant", () => {
  const copy = withoutEntities(leaky());
  const text = JSON.stringify(copy);
  // no entity id as a value or as a key anywhere, no device id
  assert.doesNotMatch(text, /"(?:alarm_control_panel|binary_sensor|button|calendar|camera|climate|cover|fan|input_[a-z]+|light|lock|media_player|person|scene|script|sensor|switch|tts|weather)\.[a-z0-9_]+"/);
  assert.doesNotMatch(text, /[0-9a-f]{32}/);
  // the map position, favourites, buttons, alerts, calendars, fuse box, plugins and phrases are gone, the look stays
  const s = copy.settings as unknown as Record<string, unknown>;
  for (const k of ["map", "favorites", "buttons", "own_alerts", "calendars", "status_entities", "circuits", "weather_entity", "rain_sensor", "outage_sensor", "announce_tts", "announce_phrases", "media_presets", "plugins"]) assert.equal(s[k], undefined, k);
  assert.equal(s.wall_exterior, 0.3);
  assert.equal(s.north, 40);
  assert.deepEqual(s.backdrop, { color: "#112233", dim: 0.3 });
  assert.doesNotMatch(text, /52\.52|13\.405|\/local\/|Dinner|F12 kitchen|garden\.jpg/);
  // areas, the Home Assistant floor, room links, moods and own actions are cleared
  const floor = copy.floors[0];
  assert.equal(floor.ha_floor, null);
  assert.equal(floor.outdoor[0].area_id, null);
  assert.deepEqual([floor.rooms[0].sub_areas, floor.rooms[0].panel, floor.rooms[0].hidden, floor.rooms[0].no_state], [null, [], [], []]);
  assert.equal(floor.rooms[0].moods, undefined);
  assert.equal(floor.furniture[0].tap, undefined);
  assert.equal(floor.furniture[0].show_when, undefined);
  assert.equal(floor.furniture[0].pictures, undefined);
  // a stored picture travels, a /local file or a camera does not
  assert.equal(floor.furniture.find((f) => f.id === "frame")!.picture, "image:abc123");
  assert.equal(floor.furniture.find((f) => f.id === "cam")!.picture, null);
  assert.equal(floor.furniture[0].picture, null);
  // what makes the house the house stays
  assert.equal(floor.rooms[0].points.length, 4);
  assert.equal(floor.furniture[0].type, "tv");
  assert.equal(floor.openings[0].type, "door");
});

test("the share view embeds the cleaned plan only", () => {
  const html = shareViewHtml(leaky(), [], "House", "needs JS");
  assert.doesNotMatch(html, /sensor\.|light\.|52\.52|calendar\.family|scene\.movie/);
});

test("withoutEntities leaves the original untouched and its result still reads back", () => {
  const original = leaky();
  const before = JSON.stringify(original);
  const copy = withoutEntities(original);
  assert.equal(JSON.stringify(original), before);
  const back = parseExport(JSON.stringify(exportFile(original, true)));
  assert.equal(back.floors[0].rooms[0].points.length, 4);
  assert.equal(back.settings.wall_exterior, 0.3);
  assert.ok(copy.settings);
});
