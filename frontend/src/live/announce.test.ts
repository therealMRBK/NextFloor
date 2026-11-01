import assert from "node:assert/strict";
import { test } from "node:test";
import { box, entity, floorWith, hassOf } from "../entities/fixtures.ts";
import { canAnnounce, claim, forThisScreen, roomHasSpeaker, roomSpeaker, showFor } from "./announce.ts";

test("an announcement goes to every screen, or only to the ones named; a muted screen hears none", () => {
  assert.equal(forThisScreen({ screens: [] }, null), true);
  assert.equal(forThisScreen({ screens: ["Hallway"] }, " hallway "), true);
  assert.equal(forThisScreen({ screens: ["Hallway"] }, "Kitchen"), false);
  assert.equal(forThisScreen({ screens: ["Hallway"] }, null), false);
  assert.equal(forThisScreen({ screens: [] }, "Hallway", true), false);
});

test("several views on a page show an announcement once", () => {
  const a = { time: "2026-11-01T12:00:00Z", message: "Dinner!" };
  assert.equal(claim(a), true);
  assert.equal(claim({ ...a }), false);
  assert.equal(claim({ ...a, time: "2026-11-01T12:00:05Z" }), true);
});

test("a message stays long enough to read, between 6 and 30 seconds", () => {
  assert.equal(showFor("Dinner!"), 6000);
  assert.equal(showFor(Array(100).fill("word").join(" ")), 30000);
});

test("the room's speaker: chosen, else placed in the room, else a satellite, an Echo or a speaker of the area; never a TV", () => {
  const states = [
    entity("media_player.radio", "idle"),
    entity("media_player.tv", "on", { device_class: "tv" }),
    entity("media_player.off", "off"),
    entity("assist_satellite.voice", "idle"),
    entity("media_player.placed", "idle"),
    entity("notify.echo_announce", "unknown"),
  ];
  const hass = hassOf(states, {
    "media_player.radio": { area_id: "kitchen" },
    "media_player.tv": { area_id: "living" },
    "media_player.off": { area_id: "living" },
    "assist_satellite.voice": { area_id: "kitchen" },
    "notify.echo_announce": { area_id: "hall", platform: "alexa_devices" },
  });
  const kitchen = box("kitchen", 0, 0, 4, 3, "kitchen");
  const living = box("living", 4, 0, 8, 3, "living");
  const hall = box("hall", 0, 3, 4, 6, "hall");
  const floor = floorWith([kitchen, living, hall]);
  assert.equal(roomSpeaker(hass, floor, kitchen), "assist_satellite.voice");
  assert.equal(roomSpeaker(hass, floor, living), null);
  assert.equal(roomSpeaker(hass, floor, hall), "notify.echo_announce");
  floor.placements.push({ entity_id: "media_player.placed", x: 6, z: 1, mount: null, rotation: 0 } as (typeof floor.placements)[number]);
  assert.equal(roomSpeaker(hass, floor, living), "media_player.placed");
  assert.equal(roomSpeaker(hass, floor, { ...kitchen, announce_speaker: "media_player.off" }), "media_player.off");
  assert.equal(roomHasSpeaker(hass, floor, { ...kitchen, announce_speaker: "none" }), false);
});

test("announcements are offered only where Home Assistant knows the action", () => {
  assert.equal(canAnnounce(hassOf([])), false);
  assert.equal(canAnnounce(hassOf([], {}, { services: { nextfloor: { announce: {} } } })), true);
});
