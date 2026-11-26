import assert from "node:assert/strict";
import { test } from "node:test";
import { buildMarkers } from "./markers.ts";
import { emptyBuilding, newFloor } from "./model.ts";
import type { HomeAssistant } from "./types.ts";
import * as effects from "./light-effects.ts";
import { lightAnimation } from "./light-effects.ts";
import { NextFloorViewer } from "./viewer/viewer3d.ts";
import { LIGHT_ANIMATIONS } from "./light-effects.ts";
import { exportFile, parseExport } from "./transfer.ts";
import { furnitureForDevice, deviceForFurniture } from "./components/editor/ops/items.ts";
import { readFileSync } from "node:fs";

const source = (path: string) => readFileSync(new URL(path, import.meta.url), "utf8");

test("furniture lamps resolve explicit mappings just like placed device lamps", () => {
  const code = source("./components/view3d.ts");
  assert.match(code, /lightAnimation\(f, lightEffectSource\(hass, f, entity\)\)/);
  assert.doesNotMatch(code, /none\|off\|solid\|static\|normal/);
});

test("effect changes, disabled animations and invalid identifiers fall back without guessing", () => {
  const st = { entity_id: "light.demo", state: "on", attributes: { effect: "White" } };
  const config = { effect_animations: { White: "none", Rainbow: "rainbow", Future: "future" } };
  for (const name of ["White", "white", " Rainbow", "Future", "toString", "__proto__", "unknown"]) {
    st.attributes.effect = name;
    assert.equal(lightAnimation(config, st), undefined);
  }
  st.attributes.effect = "Rainbow";
  assert.equal(lightAnimation(config, st), "rainbow");
  assert.equal(lightAnimation({ ...config, animations_enabled: false }, st), undefined);
  for (const state of ["off", "unknown", "unavailable"]) assert.equal(lightAnimation(config, { ...st, state }), undefined);
});

test("exact per-placement effect mappings are independent for a shared entity", () => {
  const building = emptyBuilding();
  const floor = newFloor("f", "Demo", 0);
  floor.placements = [
    { entity_id: "light.demo", x: 1, z: 1, y: null, mount: null, effect_animations: { Regenbogen: "rainbow" } },
    { entity_id: "light.demo", x: 2, z: 1, y: null, mount: null, effect_animations: { Regenbogen: "pulse" } },
    { entity_id: "light.demo", x: 3, z: 1, y: null, mount: null },
  ];
  building.floors = [floor];
  const hass = { states: { "light.demo": { entity_id: "light.demo", state: "on", attributes: { effect: "Regenbogen" } } } } as unknown as HomeAssistant;
  assert.deepEqual(buildMarkers(hass, building).map((m) => m.effect), ["rainbow", "pulse", undefined]);
});

test("pulse preserves base colour and modulates only the existing brightness ceiling", () => {
  const glow = { color: [0.8, 0.2, 0.1] as [number, number, number], level: 0.4 };
  assert.equal(typeof effects.animateGlow, "function");
  const a = effects.animateGlow(glow, "pulse", 0);
  const b = effects.animateGlow(glow, "pulse", 0.75);
  assert.deepEqual(a?.color, glow.color);
  assert.deepEqual(b?.color, glow.color);
  assert.ok(a && b && a.level > 0 && a.level <= glow.level && b.level > 0 && b.level <= glow.level);
  assert.notEqual(a?.level, b?.level);
  assert.equal(glow.level, 0.4);
});

test("flicker is a deterministic time sample bounded by HA brightness", () => {
  const glow = { color: [1, 0.6, 0.2] as [number, number, number], level: 0.3 };
  const samples = [0, 0.1, 0.8, 2, 5].map((time) => effects.animateGlow(glow, "flicker", time)!);
  assert.ok(new Set(samples.map((s) => s.level)).size > 1);
  for (const sample of samples) {
    assert.deepEqual(sample.color, glow.color);
    assert.ok(sample.level >= 0 && sample.level <= glow.level);
  }
  effects.animateGlow(glow, "flicker", 100);
  assert.deepEqual(effects.animateGlow(glow, "flicker", 0.8), samples[2]);
});

test("rainbow replaces colour explicitly without multiplying brightness again", () => {
  const glow = { color: [0.3, 0.3, 0.3] as [number, number, number], level: 0.25 };
  const a = effects.animateGlow(glow, "rainbow", 0)!;
  const b = effects.animateGlow(glow, "rainbow", 3)!;
  assert.notDeepEqual(a.color, b.color);
  assert.equal(a.level, glow.level);
  assert.equal(b.level, glow.level);
  for (const channel of [...a.color, ...b.color]) assert.ok(channel >= 0 && channel <= 1);
});

test("the renderer samples the same animation for its light paths and handles static/null glows", () => {
  const renderer = Object.create(NextFloorViewer.prototype) as any;
  renderer.effectTime = 0.75;
  const glow = { color: [1, 0.6, 0.2] as [number, number, number], level: 0.3 };
  assert.deepEqual(renderer.glowOf({ glow, effect: "pulse" }), effects.animateGlow(glow, "pulse", 0.75));
  assert.equal(renderer.glowOf({ glow }), glow);
  assert.equal(renderer.glowOf({ glow: null, effect: "pulse" }), null);
  assert.equal(effects.animateGlow(glow, "future", 1), glow);
});

test("editor changes only its local mapping and master switch, retaining unknown entries", async () => {
  const module = await import("./components/editor/light-effect-fields.ts").catch(() => null);
  assert.ok(module, "light effect editor is missing");
  const patches: unknown[] = [];
  const config = { animations_enabled: false, effect_animations: { " White ": "future", Regenbogen: "rainbow" } };
  const host = { admin: true, t: (key: string) => key } as any;
  const template = module.lightEffectFields(host, config, ["Kerzenlicht"], (patch: unknown) => patches.push(patch));
  // Lit templates keep the real event callbacks as values; exercise them without a DOM implementation.
  const templates = (node: any): any[] => !node || typeof node !== "object" ? [] : Array.isArray(node) ? node.flatMap(templates) : node.values ? [node, ...node.values.flatMap(templates)] : [];
  const nodes = templates(template);
  const toggle = nodes.find((n) => n.strings.join("").includes('type="checkbox"'));
  toggle.values.find((v: unknown) => typeof v === "function")({ target: { checked: true } });
  assert.deepEqual(patches[0], { animations_enabled: true });
  const row = nodes.find((n) => n.strings.join("").includes("<select") && n.values.includes("Kerzenlicht"));
  row.values.find((v: unknown) => typeof v === "function")({ target: { value: "flicker" } });
  assert.deepEqual(patches[1], { effect_animations: { " White ": "future", Regenbogen: "rainbow", Kerzenlicht: "flicker" } });
  assert.deepEqual(config.effect_animations, { " White ": "future", Regenbogen: "rainbow" });
  assert.deepEqual(LIGHT_ANIMATIONS, ["none", "rainbow", "pulse", "flicker"]);
});

test("private export/import preserves local mappings and future identifiers without normalization", () => {
  const building = emptyBuilding();
  const floor = newFloor("f", "Demo", 0);
  floor.placements = [{ entity_id: "light.demo", x: 1, z: 1, y: null, mount: null, animations_enabled: false, effect_animations: { " White ": "future", Regenbogen: "rainbow" } }];
  building.floors = [floor];
  const result = parseExport(JSON.stringify(exportFile(building, false)));
  assert.deepEqual(result.floors[0].furniture[0].effect_animations, floor.placements[0].effect_animations);
  assert.equal(result.floors[0].furniture[0].animations_enabled, false);
});

test("effect scheduling requires a visible animated floor and stops for hidden views", () => {
  const renderer = Object.create(NextFloorViewer.prototype) as any;
  renderer.effectFloors = new Set(["animated"]);
  renderer.screenEffectFloors = new Set();
  renderer.floors = [{ floor: { id: "animated" }, o: 0 }, { floor: { id: "static" }, o: 1 }];
  renderer.onScreen = true;
  renderer.disposed = false;
  assert.equal(typeof renderer.hasVisibleEffects, "function");
  assert.equal(renderer.hasVisibleEffects(false), false);
  renderer.floors[0].o = 1;
  assert.equal(renderer.hasVisibleEffects(false), true);
  assert.equal(renderer.hasVisibleEffects(true), false);
  renderer.onScreen = false;
  assert.equal(renderer.hasVisibleEffects(false), false);
  renderer.onScreen = true;
  renderer.disposed = true;
  assert.equal(renderer.hasVisibleEffects(false), false);
});

test("changing a lamp representation preserves its per-placement animation settings", () => {
  const placed = { entity_id: "light.demo", x: 1, z: 2, y: null, mount: null, animations_enabled: false, effect_animations: { Demo: "pulse" } };
  const furniture = furnitureForDevice(placed, "lamp_floor");
  assert.deepEqual(furniture.effect_animations, placed.effect_animations);
  assert.equal(furniture.animations_enabled, false);
  assert.deepEqual(deviceForFurniture(furniture, placed.entity_id).effect_animations, placed.effect_animations);
});

test("legacy shared-entity placements keep distinct lamp identities through import", () => {
  const building = emptyBuilding();
  const floor = newFloor("f", "Demo", 0);
  floor.placements = ["pulse", "flicker"].map((animation, index) => ({ entity_id: "light.demo", x: index, z: 1, y: null, mount: null, effect_animations: { Demo: animation } }));
  building.floors = [floor];
  const lamps = parseExport(JSON.stringify(exportFile(building, false))).floors[0].furniture;
  assert.equal(new Set(lamps.map((lamp) => lamp.id)).size, 2);
  assert.deepEqual(lamps.map((lamp) => lamp.effect_animations), [{ Demo: "pulse" }, { Demo: "flicker" }]);
});

test("both lamp editors expose the same effect mapping control", () => {
  for (const file of ["./components/editor/forms/device.ts", "./components/editor/forms/furniture-links.ts"]) {
    assert.ok(source(file).includes("lightEffectFields("), `${file} has no animation fields`);
  }
});
