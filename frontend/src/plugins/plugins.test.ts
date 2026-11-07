import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import { animateGlow, lightAnimation } from "../light-effects.ts";
import { buildMarkers } from "../markers.ts";
import { emptyBuilding, newFloor } from "../model.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";
import { isAllowedPluginUrl, pluginFetchUrl, type NextFloorPlugin } from "./api.ts";
import { installPluginGlobal, loadPlugins, pluginLoadStates, resetLoads } from "./loader.ts";
import {
  onPluginsChanged,
  pluginDeviceSettings,
  pluginDrawsWedge,
  pluginFloorWedge,
  pluginKind,
  pluginLightAnimationNames,
  pluginMarkerPatch,
  pluginMdiIcon,
  pluginRoomSections,
  pluginStatuses,
  pluginTap,
  pluginText,
  pluginWatched,
  registerPlugin,
  resetPlugins,
  settingsWithDefaults,
} from "./registry.ts";

afterEach(() => {
  resetPlugins();
  resetLoads();
});

const entity = (entity_id: string, state: string, attributes: Record<string, unknown> = {}): HassEntity =>
  ({ entity_id, state, attributes, last_changed: "", last_updated: "", context: { id: "" } }) as unknown as HassEntity;

const hassWith = (...states: HassEntity[]): HomeAssistant =>
  ({ states: Object.fromEntries(states.map((s) => [s.entity_id, s])), language: "en", locale: { language: "en" }, areas: {}, entities: {}, devices: {} }) as unknown as HomeAssistant;

const plugin = (extra: Partial<NextFloorPlugin> = {}): NextFloorPlugin => ({ id: "demo", apiVersion: 1, ...extra });

test("plugin urls: only www, HACS and https JavaScript modules", () => {
  for (const ok of ["/local/nf/a.js", "/hacsfiles/x/b.mjs", "https://example.org/p.js?v=3"]) assert.ok(isAllowedPluginUrl(ok), ok);
  for (const bad of ["http://example.org/p.js", "/config/secrets.js", "javascript:alert(1)", "/local/readme.txt", ""]) assert.equal(isAllowedPluginUrl(bad), false, bad);
});

test("register validates id, API version and the shape of every extension", () => {
  assert.throws(() => registerPlugin({ id: "bad id!", apiVersion: 1 }), /id/);
  assert.throws(() => registerPlugin(plugin({ apiVersion: 2 })), /API 2/);
  assert.throws(() => registerPlugin(plugin({ lightAnimations: { rainbow: (g) => g } })), /built in/);
  assert.throws(() => registerPlugin(plugin({ devices: [{} as never] })), /match/);
  assert.throws(() => registerPlugin(plugin({ roomSections: [{ id: "x" } as never] })), /render/);
  registerPlugin(plugin({ name: "Demo", version: "1.2.0" }));
  assert.deepEqual(pluginStatuses().map((s) => [s.id, s.name, s.version]), [["demo", "Demo", "1.2.0"]]);
});

test("registering the same id again replaces the plugin and notifies listeners", () => {
  let calls = 0;
  const stop = onPluginsChanged(() => calls++);
  registerPlugin(plugin({ version: "1" }));
  registerPlugin(plugin({ version: "2" }));
  stop();
  registerPlugin(plugin({ version: "3" }));
  assert.equal(calls, 2);
  assert.equal(pluginStatuses().length, 1);
  assert.equal(pluginStatuses()[0].version, "3");
});

test("a plugin light animation can be mapped to an effect and animates the glow", () => {
  registerPlugin(plugin({ lightAnimations: { strobe: (glow, seconds) => ({ ...glow, level: seconds % 1 < 0.5 ? glow.level : 0 }) } }));
  assert.deepEqual(pluginLightAnimationNames(), ["strobe"]);
  const lamp = entity("light.desk", "on", { effect: "Party" });
  assert.equal(lightAnimation({ effect_animations: { Party: "strobe" } }, lamp), "strobe");
  const glow = { color: [1, 1, 1] as [number, number, number], level: 0.8 };
  assert.equal(animateGlow(glow, "strobe", 0.2)?.level, 0.8);
  assert.equal(animateGlow(glow, "strobe", 0.7)?.level, 0);
});

test("an unknown or removed animation stays inert", () => {
  const lamp = entity("light.desk", "on", { effect: "Party" });
  assert.equal(lightAnimation({ effect_animations: { Party: "strobe" } }, lamp), undefined);
  const glow = { color: [1, 0, 0] as [number, number, number], level: 0.5 };
  assert.deepEqual(animateGlow(glow, "strobe", 1), glow);
});

test("a throwing or malformed animation keeps the glow and records the error", () => {
  registerPlugin(plugin({ lightAnimations: { boom: () => { throw new Error("kaputt"); }, nan: (g) => ({ ...g, level: Number.NaN }) } }));
  const glow = { color: [0.2, 0.4, 0.6] as [number, number, number], level: 0.5 };
  assert.deepEqual(animateGlow(glow, "boom", 1), glow);
  assert.deepEqual(animateGlow(glow, "nan", 1), glow);
  assert.deepEqual(pluginStatuses()[0].errors, ["kaputt"]);
});

test("animation output is clamped to the 0–1 range", () => {
  registerPlugin(plugin({ lightAnimations: { loud: () => ({ color: [2, -1, 0.5], level: 9 }) } }));
  assert.deepEqual(animateGlow({ color: [1, 1, 1], level: 0.3 }, "loud", 0), { color: [1, 0, 0.5], level: 1 });
});

test("a plugin can claim entities of unknown domains and they get a marker", () => {
  registerPlugin(plugin({
    devices: [{ match: (id) => id.startsWith("vacuum."), kind: "switch", marker: ({ state }) => ({ icon: "mdi:robot-vacuum", text: state.state === "cleaning" ? "putzt" : "parkt", active: state.state === "cleaning" }) }],
  }));
  const robot = entity("vacuum.rob", "cleaning");
  assert.equal(pluginKind("vacuum.rob", robot), "switch");
  assert.equal(pluginKind("lawn_mower.x", undefined), null);
  const building = emptyBuilding();
  const floor = newFloor("eg", "EG", 0);
  floor.placements.push({ entity_id: "vacuum.rob", x: 1, z: 1 } as never);
  building.floors.push(floor);
  const [m] = buildMarkers(hassWith(robot), building);
  assert.equal(m.id, "vacuum.rob");
  assert.equal(m.text, "putzt");
  assert.equal(m.active, true);
  assert.match(m.icon, /mdi:robot-vacuum/);
});

test("without a plugin unknown domains still get no marker", () => {
  const building = emptyBuilding();
  const floor = newFloor("eg", "EG", 0);
  floor.placements.push({ entity_id: "vacuum.rob", x: 1, z: 1 } as never);
  building.floors.push(floor);
  assert.deepEqual(buildMarkers(hassWith(entity("vacuum.rob", "docked")), building), []);
});

test("marker patches: an icon picked in the plan wins, text is capped, a throwing plugin is skipped", () => {
  registerPlugin(plugin({ id: "a", devices: [{ match: (id) => id === "sensor.post", marker: () => ({ icon: "mdi:mailbox", text: "x".repeat(200) }) }] }));
  registerPlugin(plugin({ id: "b", devices: [{ match: () => { throw new Error("match broke"); } }] }));
  const post = entity("sensor.post", "2");
  const patch = pluginMarkerPatch({ hass: hassWith(post), entityId: "sensor.post", state: post });
  assert.equal(patch?.text?.length, 60);
  const building = emptyBuilding();
  const floor = newFloor("eg", "EG", 0);
  floor.placements.push({ entity_id: "sensor.post", x: 0, z: 0, icon: "mdi:post-lamp" } as never);
  building.floors.push(floor);
  const [m] = buildMarkers(hassWith(post), building);
  assert.match(m.icon, /mdi:post-lamp/);
  assert.equal(pluginStatuses().find((s) => s.id === "b")?.errors[0], "match broke");
});

test("the editor gets a plugin's Material Design icon, not inline SVG or a throwing plugin's", () => {
  registerPlugin(plugin({ id: "a", devices: [{ match: (id) => id === "camera.yard", marker: () => ({ icon: "mdi:cctv" }) }] }));
  registerPlugin(plugin({ id: "b", devices: [{ match: (id) => id === "vacuum.robot", marker: () => ({ icon: "<svg viewBox='0 0 24 24'></svg>" }) }] }));
  registerPlugin(plugin({ id: "c", devices: [{ match: (id) => id === "lawn_mower.m", marker: () => { throw new Error("broke"); } }] }));
  const hass = hassWith(entity("camera.yard", "idle"), entity("vacuum.robot", "docked"), entity("lawn_mower.m", "docked"));
  assert.equal(pluginMdiIcon(hass, "camera.yard"), "mdi:cctv");
  assert.equal(pluginMdiIcon(hass, "vacuum.robot"), null);
  assert.equal(pluginMdiIcon(hass, "lawn_mower.m"), null);
  assert.equal(pluginMdiIcon(hass, "camera.gone"), null);
});

test("room sections render per room and skip empty or failing ones", () => {
  registerPlugin(plugin({
    name: "Post",
    roomSections: [
      { id: "count", render: ({ room, entities }) => (room.name === "Flur" ? `${entities.length} Geräte` : null) },
      { id: "broken", render: () => { throw new Error("nope"); } },
    ],
  }));
  const ctx = (name: string) => ({ hass: hassWith(), room: { id: "r", name, area_id: null }, entities: ["light.a", "light.b"] });
  assert.deepEqual(pluginRoomSections(ctx("Flur")).map((s) => [s.key, s.title, s.content]), [["demo/count", "Post", "2 Geräte"]]);
  assert.deepEqual(pluginRoomSections(ctx("Bad")), []);
});

test("loader imports enabled allowed urls once, attributes registrations and records failures", async () => {
  installPluginGlobal();
  const imported: string[] = [];
  const importer = async (url: string) => {
    imported.push(url);
    if (url.endsWith("broken.js")) throw new Error("404");
    (globalThis as unknown as Window).NextFloor!.register(plugin({ id: url.includes("one") ? "one" : "two" }));
  };
  const refs = [
    { url: "/local/one.js", enabled: true },
    { url: "/local/two.js", enabled: false },
    { url: "/local/broken.js", enabled: true },
    { url: "http://evil.example/x.js", enabled: true },
  ];
  await loadPlugins(refs, importer);
  await loadPlugins(refs, importer);
  assert.deepEqual(imported, ["/local/one.js", "/local/broken.js"]);
  assert.deepEqual(pluginStatuses().map((s) => [s.id, s.source]), [["one", "/local/one.js"]]);
  const states = Object.fromEntries(pluginLoadStates().map((l) => [l.url, l.state]));
  assert.deepEqual(states, { "/local/one.js": "loaded", "/local/broken.js": "error", "http://evil.example/x.js": "error" });
});

// ---- cameras and the like: settings, a wedge on the floor, taps and watched entities ----

const AT = { floorId: "f1", roomId: null, x: 1, z: 2, y: 2.2, rotation: 90 };
const cameraPlugin = (extra: Partial<NonNullable<NextFloorPlugin["devices"]>[number]> = {}) =>
  plugin({
    id: "cams",
    name: "Cameras",
    devices: [
      {
        match: (id) => id.startsWith("camera."),
        settings: [
          { key: "fov", label: { en: "Field of view", de: "Blickwinkel" }, type: "number", default: 90, min: 10, max: 360 },
          { key: "mount", label: "Mount", type: "select", default: "wall", options: [["wall", "Wall"], ["dome", "Dome"]] },
          { key: "wedge", label: "Wedge", type: "boolean", default: true },
        ],
        ...extra,
      },
    ],
  });

test("a setting needs a proper key and type", () => {
  assert.throws(() => registerPlugin(plugin({ devices: [{ match: () => true, settings: [{ key: "bad key", label: "x", type: "number", default: 1 }] }] })), /key/);
  assert.throws(() => registerPlugin(plugin({ devices: [{ match: () => true, settings: [{ key: "a", label: "x", type: "colour" as never, default: 1 }] }] })), /type/);
  assert.throws(() => registerPlugin(plugin({ devices: [{ match: () => true, tap: "no" as never }] })), /tap/);
});

test("plugin settings: listed per plugin, stored values that fit win over the defaults", () => {
  registerPlugin(cameraPlugin());
  const found = pluginDeviceSettings("camera.hall", entity("camera.hall", "idle"));
  assert.deepEqual(found.map((f) => [f.pluginId, f.name, f.settings.length]), [["cams", "Cameras", 3]]);
  assert.deepEqual(pluginDeviceSettings("light.x", entity("light.x", "on")), []);
  const values = settingsWithDefaults(found[0].settings, { fov: 120, mount: "ceiling", wedge: "yes" as never });
  assert.deepEqual(values, { fov: 120, mount: "wall", wedge: true });
  assert.equal(pluginText({ en: "Field of view", de: "Blickwinkel" }, "de-AT"), "Blickwinkel");
  assert.equal(pluginText({ en: "Field of view", de: "Blickwinkel" }, "fr"), "Field of view");
});

test("a floor wedge gets the device's place and settings and is kept within limits", () => {
  registerPlugin(cameraPlugin({ floorWedge: ({ placement, settings }) => ({ angle: settings.fov as number, reach: placement.y * 100, near: -1, color: "#ff0000", opacity: 3 }) }));
  const ctx = { hass: hassWith(entity("camera.hall", "idle")), entityId: "camera.hall", state: entity("camera.hall", "idle") };
  const wedge = pluginFloorWedge(ctx, AT, { cams: { fov: 60 } });
  assert.deepEqual(wedge, { angle: 60, reach: 30, near: 0, color: [1, 0, 0], opacity: 1, through: false });
  assert.equal(pluginDrawsWedge("camera.hall", ctx.state), true);
  assert.equal(pluginDrawsWedge("light.x", undefined), false);
});

test("a throwing wedge or a wedge without reach draws nothing", () => {
  registerPlugin(cameraPlugin({ floorWedge: () => ({ angle: 90, reach: 0 }) }));
  const ctx = { hass: hassWith(), entityId: "camera.a", state: entity("camera.a", "idle") };
  assert.equal(pluginFloorWedge(ctx, AT, undefined), null);
  registerPlugin(cameraPlugin({ floorWedge: () => { throw new Error("boom"); } }));
  assert.equal(pluginFloorWedge(ctx, AT, undefined), null);
  assert.deepEqual(pluginStatuses()[0].errors, ["boom"]);
});

test("a tap goes to the plugin, which can open a window; false lets NextFloor handle it", () => {
  const shown: (Node | null)[] = [];
  registerPlugin(cameraPlugin({ tap: ({ settings, showWindow }) => settings.mount === "dome" && (showWindow(null, { title: "x" }), true) }));
  const ctx = { hass: hassWith(), entityId: "camera.hall", state: entity("camera.hall", "idle") };
  const tools = { showWindow: (node: Node | null) => void shown.push(node), moreInfo: () => undefined };
  assert.equal(pluginTap(ctx, AT, { cams: { mount: "dome" } }, tools), true);
  assert.deepEqual(shown, [null]);
  assert.equal(pluginTap(ctx, AT, undefined, tools), false);
});

test("plugins name further entities to watch for a device", () => {
  registerPlugin(cameraPlugin({ watch: ({ entityId }) => [entityId.replace("camera.", "binary_sensor.") + "_motion", 7 as never] }));
  assert.deepEqual(pluginWatched({ hass: hassWith(), entityId: "camera.hall", state: entity("camera.hall", "idle") }), ["binary_sensor.hall_motion"]);
});

test("a placed camera's marker carries the plugin's wedge", () => {
  registerPlugin(cameraPlugin({ kind: "sensor", floorWedge: ({ placement }) => ({ angle: 90, reach: 4, color: "#000000", opacity: 0.5 + placement.rotation / 1000 }) }));
  const b = emptyBuilding();
  const f = newFloor("eg", "EG", 0);
  f.placements.push({ entity_id: "camera.hall", x: 1, z: 1, y: 2.4, rotation: 100 });
  b.floors.push(f);
  const [m] = buildMarkers(hassWith(entity("camera.hall", "idle")), b);
  assert.deepEqual(m.wedge, { angle: 90, reach: 4, near: 0, color: [0, 0, 0], opacity: 0.6, through: false });
});

test("a plugin path typed with the www folder in it loads from where Home Assistant serves it (#78)", async () => {
  assert.equal(pluginFetchUrl(" /local/www/nextfloor/nextfloor-cameras.js "), "/local/nextfloor/nextfloor-cameras.js");
  assert.equal(pluginFetchUrl("/local/nextfloor/x.js"), "/local/nextfloor/x.js");
  assert.equal(pluginFetchUrl("https://example.com/local/www/x.js"), "https://example.com/local/www/x.js");
  resetLoads();
  const asked: string[] = [];
  await loadPlugins([{ url: "/local/www/nextfloor/nextfloor-cameras.js", enabled: true }], async (url) => void asked.push(url));
  assert.deepEqual(asked, ["/local/nextfloor/nextfloor-cameras.js"]);
});
