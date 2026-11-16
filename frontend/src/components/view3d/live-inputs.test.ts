import assert from "node:assert/strict";
import { test } from "node:test";
import { box, entity, floorWith, hassOf } from "../../entities/fixtures.ts";
import type { Building, Furniture } from "../../model.ts";
import { gameNow, screenWatched } from "../../live/screen-sources.ts";
import { renderLhCards } from "../../live/cards.ts";
import { liveScreens, mediaInPlan, readSun, roofWindowStates, skyLightness } from "./live-inputs.ts";

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

test("a game on a screen makes a card in the plan, before its own player, only while the console is on", () => {
  const links = new Map([["tv", { entity: "media_player.tv", power: null }]]) as never;
  const cards = (console: string, account: "a" | "b" | null, f = monitor()) => {
    const hass = xboxHass(console, account);
    hass.states["media_player.tv"] = entity("media_player.tv", "playing", { media_title: "Film" });
    return mediaInPlan(hass, house([{ ...f, name: "Monitor" }]), links).map((m) => [m.entity, m.title, m.picture, !!m.game, m.name]);
  };
  assert.deepEqual(cards("on", "a"), [["tv", "Halo", "/a-hero", true, "Monitor"]], "the game, not the linked player");
  assert.deepEqual(cards("off", "a"), [], "console off: no game and no player either");
  assert.deepEqual(cards("on", null), [["media_player.tv", "Film", null, false, "Monitor"]], "nobody plays: the linked player");
  assert.deepEqual(cards("on", "a", tv()), [["media_player.tv", "Film", null, false, "Monitor"]], "a plain TV has no game");
});

/** The text of a lit template with everything it nests, to look for what it draws without a browser. */
function markup(value: unknown): string {
  if (Array.isArray(value)) return value.map(markup).join("");
  if (value && typeof value === "object" && "strings" in value && "values" in value) {
    const t = value as { strings: readonly string[]; values: unknown[] };
    return t.strings.map((s, i) => s + (i < t.values.length ? markup(t.values[i]) : "")).join("");
  }
  return typeof value === "string" ? value : "";
}

test("a game's card has no player buttons, a player's card has them", () => {
  const at = { floorId: "g", x: 2, z: 2, y: 1 };
  const game = gameNow(xboxHass("on", "a"), monitor(), "Monitor", at)!;
  const player = { ...game, entity: "media_player.tv", game: undefined };
  const drawn = (m: typeof game) => markup(renderLhCards(undefined, [{ kind: "media", at, media: m }], () => undefined));
  assert.ok(drawn(game).includes("Halo"));
  assert.ok(!drawn(game).includes("live-actions") && !drawn(game).includes("live-btn"), "no controls on a game");
  assert.ok(drawn(player).includes("live-actions") && drawn(player).includes("live-btn"), "controls on a player");
});

test("a game's card shows the account's picture, since when it plays and its achievements", () => {
  const at = { floorId: "g", x: 2, z: 2, y: 1 };
  const hass = xboxHass("on", "a");
  hass.devices = { a: { id: "a", name: "Gamertag" } } as never;
  hass.states["binary_sensor.a_in_game"] = { ...hass.states["binary_sensor.a_in_game"], last_changed: "2026-11-16T14:05:00Z" };
  hass.states["sensor.a_playing"] = entity("sensor.a_playing", "Halo", { achievements: "12 / 50", gamerscore: "340 / 1000", progress: "24 %" });
  hass.states["image.a_pic"] = entity("image.a_pic", "t", { entity_picture: "/a-pic" });
  hass.states["image.a_avatar"] = entity("image.a_avatar", "t", { entity_picture: "/a-avatar" });
  Object.assign(hass.entities as Record<string, unknown>, {
    "image.a_pic": { entity_id: "image.a_pic", device_id: "a", translation_key: "gamerpic" },
    "image.a_avatar": { entity_id: "image.a_avatar", device_id: "a", translation_key: "avatar" },
  });
  const game = gameNow(hass, monitor(), "Monitor", at)!;
  assert.deepEqual(game.game, { avatar: "/a-pic", since: Date.parse("2026-11-16T14:05:00Z"), achievements: "12 / 50 · 340 / 1000 G" });
  const drawn = markup(renderLhCards(undefined, [{ kind: "media", at, media: game }], () => undefined));
  assert.ok(drawn.includes("/a-pic") && drawn.includes("Gamertag") && drawn.includes("🏆 12 / 50 · 340 / 1000 G"), drawn);
  // the gamerpic without a picture: the avatar; a game without achievements and an unknown start: neither line
  hass.states["image.a_pic"] = entity("image.a_pic", "t", {});
  hass.states["sensor.a_playing"] = entity("sensor.a_playing", "Halo", { achievements: null, gamerscore: null });
  hass.states["binary_sensor.a_in_game"] = entity("binary_sensor.a_in_game", "on");
  assert.deepEqual(gameNow(hass, monitor(), "Monitor", at)!.game, { avatar: "/a-avatar", since: null, achievements: null });
  const bare = markup(renderLhCards(undefined, [{ kind: "media", at, media: gameNow(hass, monitor(), "Monitor", at)! }], () => undefined));
  assert.ok(!bare.includes("🏆") && bare.includes("Gamertag"), bare);
  assert.ok(screenWatched(hass, monitor()).includes("image.a_pic") && screenWatched(hass, monitor()).includes("image.a_avatar"), "the account's picture is watched");
});

test("a game takes the next artwork when the wide one has no picture", () => {
  const hass = xboxHass("on", "a");
  hass.states["image.a_hero"] = entity("image.a_hero", "t", { entity_picture: "" });
  hass.states["image.a_now"] = entity("image.a_now", "t", { entity_picture: "/a-now" });
  (hass.entities as Record<string, unknown>)["image.a_now"] = { entity_id: "image.a_now", device_id: "a", translation_key: "now_playing" };
  assert.deepEqual(liveScreens(hass, house([monitor()]), null).map((s) => s.picture), ["/a-now"]);
});

test("a screen follows every artwork of its accounts, also one that has no picture yet", () => {
  const hass = xboxHass("on", "a");
  hass.states["image.a_hero"] = entity("image.a_hero", "t", { entity_picture: "" });
  hass.states["image.a_now"] = entity("image.a_now", "t", {});
  (hass.entities as Record<string, unknown>)["image.a_now"] = { entity_id: "image.a_now", device_id: "a", translation_key: "now_playing" };
  const watched = screenWatched(hass, monitor());
  for (const id of ["media_player.xbox", "binary_sensor.a_in_game", "sensor.a_playing", "image.a_hero", "image.a_now", "binary_sensor.b_in_game", "image.b_now"]) assert.ok(watched.includes(id), id);
  // a title or artwork that is registered but has no state yet is watched too
  delete hass.states["sensor.a_playing"];
  delete hass.states["image.a_hero"];
  const later = screenWatched(hass, monitor());
  assert.ok(later.includes("sensor.a_playing") && later.includes("image.a_hero"), "registered, no state yet");
});

test("a game names the account that plays: the device's name, the user's own name first, nothing without a device", () => {
  const at = { floorId: "g", x: 2, z: 2, y: 1 };
  const hass = xboxHass("on", "a");
  hass.devices = { a: { id: "a", name: "Gamertag" }, b: { id: "b", name: "Other" } } as never;
  assert.equal(gameNow(hass, monitor(), "Monitor", at)?.artist, "Gamertag");
  assert.deepEqual(liveScreens(hass, house([monitor()]), null).map((s) => s.subtitle), ["Gamertag"]);
  hass.devices = { a: { id: "a", name: "Gamertag", name_by_user: "Own name" } } as never;
  assert.equal(gameNow(hass, monitor(), "Monitor", at)?.artist, "Own name");
  hass.devices = {};
  assert.equal(gameNow(hass, monitor(), "Monitor", at)?.artist, "");
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
