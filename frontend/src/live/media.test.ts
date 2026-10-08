import assert from "node:assert/strict";
import { test } from "node:test";
import type { HomeAssistant } from "../types.ts";
import { appColor, mediaNow, multiroom } from "./media.ts";

const at = { floorId: "eg", x: 1, y: 1, z: 1 };
function hass(states: Record<string, { state: string; attributes: Record<string, unknown> }>): HomeAssistant {
  return {
    language: "de",
    connection: {} as HomeAssistant["connection"],
    callWS: async () => undefined as never,
    callService: async () => undefined,
    areas: {},
    devices: {},
    entities: {},
    states: Object.fromEntries(Object.entries(states).map(([id, s]) => [id, { entity_id: id, ...s }])),
  };
}

test("players in the plan with what they play, in their app's colour", () => {
  const h = hass({
    "media_player.kueche": { state: "playing", attributes: { media_title: "Song", media_artist: "Band", app_name: "Spotify", volume_level: 0.4, group_members: ["media_player.kueche", "media_player.bad"] } },
    "media_player.bad": { state: "playing", attributes: { media_title: "Song", app_name: "Spotify" } },
    "media_player.tv": { state: "paused", attributes: { app_name: "Netflix" } },
    "light.x": { state: "on", attributes: {} },
  });
  const list = mediaNow(h, [
    { entity: "media_player.kueche", name: "Küche", at },
    { entity: "media_player.kueche", name: "doppelt", at },
    { entity: "media_player.bad", name: "Bad", at },
    { entity: "media_player.tv", name: "TV", at },
    { entity: "light.x", name: "Licht", at },
  ]);
  assert.deepEqual(list.map((m) => m.entity), ["media_player.kueche", "media_player.bad", "media_player.tv"]);
  assert.equal(list[0].title, "Song");
  assert.equal(list[0].volume, 0.4);
  assert.deepEqual(list[0].color, appColor("Spotify"));
  assert.equal(list[2].playing, false);
  assert.deepEqual(list[0].group, ["media_player.bad"]);
  assert.equal(multiroom(list).length, 1);
  assert.deepEqual(appColor("Netflix"), [229, 9, 20]);
  assert.deepEqual(appColor(null), appColor("Unbekannt"));
});
