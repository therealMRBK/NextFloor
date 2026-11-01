import assert from "node:assert/strict";
import { test } from "node:test";
import { PrefStore, screenMuted, screenName, type PrefsStorage } from "./prefs.ts";

function memory(initial: Record<string, string> = {}): PrefsStorage & { data: Record<string, string> } {
  const data = { ...initial };
  return { data, getItem: (k) => data[k] ?? null, setItem: (k, v) => void (data[k] = v) };
}

test("nothing stored gives the defaults", () => {
  const prefs = new PrefStore(memory()).load();
  assert.deepEqual(prefs, {
    explode: true, keepRoof: false, solidWalls: false, quality: "auto", stats: false, markers: "important", heat: "none", theme: "neon", accent: null,
    floorStack: "dim", roomNames: true, clean: false, navWrap: false, barsFolded: false, weather: true, clock: "none", screenName: "", announceMuted: false, glassWalls: 20,
  });
});

test("a screen's name and mute switch are kept, and cards read them too", () => {
  const storage = memory();
  const store = new PrefStore(storage);
  store.save("screenName", "  Hallway ");
  store.save("announceMuted", true);
  const prefs = new PrefStore(storage).load();
  assert.equal(prefs.screenName, "Hallway");
  assert.equal(prefs.announceMuted, true);
  assert.equal(screenName(storage), "Hallway");
  assert.equal(screenMuted(storage), true);
  assert.equal(screenName(memory()), null);
});

test("the auto look and a clock corner are kept", () => {
  const storage = memory();
  const store = new PrefStore(storage);
  store.save("theme", "auto");
  store.save("clock", "top_right");
  const prefs = new PrefStore(storage).load();
  assert.equal(prefs.theme, "auto");
  assert.equal(prefs.clock, "top_right");
});

test("saved values come back, under the key names earlier versions used", () => {
  const storage = memory();
  const store = new PrefStore(storage);
  store.save("explode", false);
  store.save("keepRoof", true);
  store.save("floorStack", "single");
  store.save("navWrap", true);
  store.save("accent", "#12ab34");
  assert.equal(storage.data["nextfloor.explode"], "0");
  assert.equal(storage.data["nextfloor.roof"], "1");
  assert.equal(storage.data["nextfloor.floor_stack"], "single");
  assert.equal(storage.data["nextfloor.nav_wrap"], "1");
  const back = store.load();
  assert.deepEqual([back.explode, back.keepRoof, back.floorStack, back.navWrap, back.accent], [false, true, "single", true, "#12ab34"]);
});

test("unknown words and malformed colours fall back, and an empty accent means the stock one", () => {
  const store = new PrefStore(memory({ "nextfloor.quality": "ultra", "nextfloor.theme": "sepia", "nextfloor.accent": "teal", "nextfloor.heat": "co2" }));
  const prefs = store.load();
  assert.equal(prefs.quality, "auto");
  assert.equal(prefs.theme, "neon");
  assert.equal(prefs.accent, null);
  assert.equal(prefs.heat, "co2");
  store.save("accent", null);
  assert.equal(store.load().accent, null);
});

test("?nf_stats turns the performance display on", () => {
  const store = new PrefStore(memory());
  assert.equal(store.load("").stats, false);
  assert.equal(store.load("?a=1&nf_stats").stats, true);
});

test("a storage that is missing or throws never breaks anything", () => {
  const broken: PrefsStorage = {
    getItem: () => {
      throw new Error("blocked");
    },
    setItem: () => {
      throw new Error("blocked");
    },
  };
  for (const storage of [null, broken]) {
    const store = new PrefStore(storage);
    assert.doesNotThrow(() => store.save("theme", "day"));
    assert.equal(store.load().theme, "neon");
  }
});

test("the glass walls' opacity is kept in whole percent between 0 and 100", () => {
  const storage = memory();
  new PrefStore(storage).save("glassWalls", 135);
  assert.equal(new PrefStore(storage).load().glassWalls, 100);
  new PrefStore(storage).save("glassWalls", 0);
  assert.equal(new PrefStore(storage).load().glassWalls, 0);
  assert.equal(new PrefStore(memory({ "nextfloor.glass_walls": "abc" })).load().glassWalls, 20);
});
