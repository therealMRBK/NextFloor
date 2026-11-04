import assert from "node:assert/strict";
import { test } from "node:test";
import { box, entity, floorWith, hassOf } from "../../entities/fixtures.ts";
import type { Building, Furniture } from "../../model.ts";
import { liveScreens, readSun, roofWindowStates, skyLightness } from "./live-inputs.ts";

const tv = (extra: Partial<Furniture> = {}): Furniture => ({ id: "tv", type: "tv_board", x: 2, z: 2, rotation: 0, w: 1.4, d: 0.4, h: 0.5, variant: null, ...extra });
const house = (furniture: Furniture[], placements: { entity_id: string; x: number; z: number; y: null }[] = [], roofWindows: unknown[] = []): Building =>
  ({ version: 1, floors: [floorWith([box("r", 0, 0, 5, 5)], { id: "g", furniture, placements })], settings: { roof: { type: "none", pitch: 35, overhang: 0, windows: roofWindows } }, energy: {}, presence: [] }) as unknown as Building;

test("a screen shows what its linked player plays, with title, artist and app", () => {
  const hass = hassOf([entity("media_player.tv", "playing", { media_title: "Blue Train", media_artist: "Coltrane", app_name: "Spotify", entity_picture: "/pic" })]);
  const [screen] = liveScreens(hass, house([tv()]), new Map([["tv", { entity: "media_player.tv", power: null }]]) as never);
  assert.deepEqual([screen.title, screen.subtitle, screen.app, screen.picture, screen.playing, screen.floorId], ["Blue Train", "Coltrane", "Spotify", "/pic", true, "g"]);
});

test("a player placed beside the screen counts, a far one does not, and idle players show nothing", () => {
  const hass = hassOf([entity("media_player.near", "paused", { media_title: "x" }), entity("media_player.far", "playing"), entity("media_player.off", "idle")]);
  const near = house([tv()], [{ entity_id: "media_player.near", x: 2.5, z: 2, y: null }, { entity_id: "media_player.far", x: 9, z: 9, y: null }]);
  assert.deepEqual(liveScreens(hass, near, null).map((s) => [s.title, s.playing]), [["x", false]]);
  assert.deepEqual(liveScreens(hass, house([tv()], [{ entity_id: "media_player.off", x: 2, z: 2, y: null }]), null), []);
  assert.deepEqual(liveScreens(hass, house([{ ...tv(), type: "sofa" }]), null), [], "only furniture with a screen");
});

test("a TV that only reports 'on' shows its channel or input, a bare 'on' shows nothing", () => {
  const live = entity("media_player.tv", "on", { device_class: "tv", media_title: "ITV1 HD", source: "TV/HDMI", entity_picture: "/logo" });
  const [screen] = liveScreens(hassOf([live]), house([tv()]), new Map([["tv", { entity: "media_player.tv", power: null }]]) as never);
  assert.deepEqual([screen.title, screen.app, screen.picture, screen.playing], ["ITV1 HD", "TV/HDMI", "/logo", true]);
  const bare = hassOf([entity("media_player.tv", "on", { device_class: "tv" })]);
  assert.deepEqual(liveScreens(bare, house([tv()]), new Map([["tv", { entity: "media_player.tv", power: null }]]) as never), []);
});

const xboxHass = (console: string, account: "a" | "b" | null) => {
  const hass = hassOf([
    entity("media_player.xbox", console),
    entity("binary_sensor.a_in_game", account === "a" ? "on" : "off"),
    entity("sensor.a_playing", account === "a" ? "Halo" : "unknown"),
    entity("image.a_hero", "t", { entity_picture: "/a-hero" }),
    entity("image.a_square", "t", { entity_picture: "/a-square" }),
    entity("binary_sensor.b_in_game", account === "b" ? "on" : "off"),
    entity("sensor.b_playing", account === "b" ? "Forza" : "unknown"),
    entity("image.b_now", "t", { entity_picture: "/b-now" }),
  ]);
  hass.entities = {
    "binary_sensor.a_in_game": { entity_id: "binary_sensor.a_in_game", device_id: "a", translation_key: "in_game" },
    "sensor.a_playing": { entity_id: "sensor.a_playing", device_id: "a", translation_key: "now_playing" },
    "image.a_hero": { entity_id: "image.a_hero", device_id: "a", translation_key: "titled_hero_art" },
    "image.a_square": { entity_id: "image.a_square", device_id: "a", translation_key: "feature_promotional_square_art" },
    "binary_sensor.b_in_game": { entity_id: "binary_sensor.b_in_game", device_id: "b", translation_key: "in_game" },
    "sensor.b_playing": { entity_id: "sensor.b_playing", device_id: "b", translation_key: "now_playing" },
    "image.b_now": { entity_id: "image.b_now", device_id: "b", translation_key: "now_playing" },
  } as never;
  return hass;
};
const monitor = () => tv({ screen_device: "media_player.xbox", screen_sources: ["binary_sensor.a_in_game", "binary_sensor.b_in_game"] });

test("a screen on a console shows the game and artwork of the account that plays", () => {
  const shown = (account: "a" | "b") => liveScreens(xboxHass("on", account), house([monitor()]), null).map((s) => [s.title, s.picture, s.playing]);
  assert.deepEqual(shown("a"), [["Halo", "/a-hero", true]], "the wide art first");
  assert.deepEqual(shown("b"), [["Forza", "/b-now", true]], "the next art when there is no wide one");
});

test("a screen on a console stays dark while the console is off or nobody plays", () => {
  for (const state of ["off", "standby", "unavailable", "unknown"]) assert.deepEqual(liveScreens(xboxHass(state, "a"), house([monitor()]), null), [], state);
  assert.deepEqual(liveScreens(xboxHass("on", null), house([monitor()]), null), []);
});

test("the console also holds back the screen's own player", () => {
  const hass = xboxHass("off", null);
  hass.states["media_player.tv"] = entity("media_player.tv", "playing", { media_title: "x" });
  const links = new Map([["tv", { entity: "media_player.tv", power: null }]]) as never;
  assert.deepEqual(liveScreens(hass, house([monitor()]), links), []);
  assert.deepEqual(liveScreens(hass, house([tv()]), links).map((s) => s.title), ["x"], "without a device nothing changes");
});

test("a game without a title or art still shows, with what is known", () => {
  const hass = xboxHass("on", "a");
  hass.states["sensor.a_playing"] = entity("sensor.a_playing", "unavailable");
  delete hass.states["image.a_hero"];
  delete hass.states["image.a_square"];
  assert.deepEqual(liveScreens(hass, house([monitor()]), null).map((s) => [s.title, s.picture]), [["", null]]);
});

test("a roof window motor sets the sash by its position, or open and closed by its state", () => {
  const windows = [{ id: "a", face: "main:a", u: 0, v: 0, window: "cover.motor" }, { id: "b", face: "main:a", u: 0, v: 0, window: "cover.plain" }, { id: "c", face: "main:a", u: 0, v: 0, window: "none" }];
  const hass = hassOf([entity("cover.motor", "open", { current_position: 40 }), entity("cover.plain", "opening")]);
  const states = roofWindowStates(hass, house([], [], windows));
  assert.equal(states.get("a")!.open, 0.4);
  assert.equal(states.get("b")!.open, 1);
  assert.equal(states.get("c")!.open, 0);
  assert.equal(states.get("c")!.cover, 0);
});

test("the sun is read only when it reports both angles", () => {
  assert.deepEqual(readSun(hassOf([entity("sun.sun", "above_horizon", { elevation: 30, azimuth: 200 })])), { elevation: 30, azimuth: 200 });
  assert.equal(readSun(hassOf([entity("sun.sun", "above_horizon", { elevation: 30 })])), null);
  assert.equal(readSun(hassOf([])), null);
});

test("the sky is dark at night, full by day, and clouds take part of it", () => {
  assert.equal(skyLightness(-10, 0), 0);
  assert.equal(skyLightness(null, 0), 0);
  assert.equal(skyLightness(30, 0), 1);
  assert.equal(skyLightness(30, 1), 0.55);
  assert.equal(skyLightness(4, 0), 0.5);
});
