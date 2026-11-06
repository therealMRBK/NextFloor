import assert from "node:assert/strict";
import { test } from "node:test";
import { lightAnimation, animateGlow } from "./light-effects.ts";
import { lightEffectFields } from "./components/editor/light-effect-fields.ts";

import { emptyBuilding, newFloor } from "./model.ts";
import { exportFile, parseExport } from "./transfer.ts";

 test("shareable exports remove private program names while private roundtrips retain prototype keys", () => {
  const building = emptyBuilding();
  const floor = newFloor("f", "Synthetic", 0);
  const mapping = JSON.parse('{"private-synthetic-evening-program":"future","__proto__":"pulse","constructor":"rainbow","toString":"flicker"}');
  floor.furniture = [{ id: "lamp", type: "lamp_floor", entity: "light.synthetic", x: 1, z: 1, w: 1, d: 1, h: 1, rotation: 0, variant: null, effect_animations: mapping }];
  building.floors = [floor];
  assert.deepEqual(parseExport(JSON.stringify(exportFile(building, false))).floors[0].furniture[0].effect_animations, mapping);
  const shared = exportFile(building, true);
  assert.equal(JSON.stringify(shared).includes("private-synthetic-evening-program"), false);
  assert.equal(shared.building.floors[0].furniture[0].effect_animations, undefined);
  assert.deepEqual(building.floors[0].furniture[0].effect_animations, mapping);
});


function editorAction(mapping: Record<string, string>, name: string, value?: string) {
  const patches: any[] = [];
  const nodes = templates(lightEffectFields(host, { effect_animations: mapping }, value === undefined ? [] : [name], (p) => patches.push(p)));
  const node = value === undefined ? nodes.find((n) => n.strings.join("").includes('type="text"')) : nodes.find((n) => n.strings.join("").includes("<select") && n.values.includes(name));
  assert.ok(nodes.some((n) => n.strings.join("").includes('data-effect-feedback') && n.strings.join("").includes('role="status"')), "validation feedback must have reserved inline space");
  const input = { value: value ?? name, message: "", reported: false, setCustomValidity(message: string) { this.message = message; }, reportValidity() { this.reported = true; } };
  node.values.filter((v: any) => typeof v === "function").at(-1)({ target: input });
  return { patches, input };
}

test("editor enforces exact name length for manual and HA-list additions", () => {
  for (const select of [false, true]) {
    assert.equal(editorAction({}, "x".repeat(255), select ? "pulse" : undefined).patches.length, 1);
    for (const name of ["", "x".repeat(256)]) {
      const result = editorAction({}, name, select ? "pulse" : undefined);
      assert.equal(result.patches.length, 0);
      assert.ok(result.input.message);
      assert.equal(result.input.reported, true);
    }
  }
  assert.deepEqual(editorAction({}, " exact ").patches[0], { effect_animations: { " exact ": "none" } });
});

test("editor counts Unicode code points for manual input, HA-list choices and existing mappings", () => {
  const accepted = ["💡", "💡".repeat(128), "💡".repeat(255), "a".repeat(127) + "💡".repeat(128), " e\u0301" + "💡".repeat(251) + " "];
  const rejected = ["💡".repeat(256), "a".repeat(128) + "💡".repeat(128), " e\u0301" + "💡".repeat(252) + " "];
  for (const name of accepted) {
    for (const select of [false, true]) {
      const result = editorAction({}, name, select ? "pulse" : undefined);
      assert.deepEqual(result.patches, [{ effect_animations: { [name]: select ? "pulse" : "none" } }]);
      assert.equal(result.input.message, "");
    }
    const imported = parseExport(JSON.stringify(exportFile((() => {
      const building = emptyBuilding();
      const floor = newFloor("unicode", "Synthetic", 0);
      floor.furniture = [{ id: "lamp", type: "lamp_floor", x: 1, z: 1, w: 1, d: 1, h: 1, rotation: 0, variant: null, effect_animations: { [name]: "future" } }];
      building.floors = [floor];
      return building;
    })(), false))).floors[0].furniture[0].effect_animations!;
    assert.deepEqual(editorAction(imported, name, "rainbow").patches, [{ effect_animations: { [name]: "rainbow" } }]);
    assert.deepEqual(editorAction(imported, name, "").patches, [{ effect_animations: {} }]);
  }
  for (const name of rejected) {
    for (const mapping of [{}, { [name]: "future" }]) {
      for (const select of [false, true]) {
        const result = editorAction(mapping, name, select ? "pulse" : undefined);
        assert.equal(result.patches.length, 0);
        assert.ok(result.input.message);
        assert.equal(result.input.reported, true);
      }
    }
  }
});

test("manual effect input does not impose an HTML UTF-16 maxlength", () => {
  const nodes = templates(lightEffectFields(host, {}, [], () => {}));
  const input = nodes.find((n) => n.strings.join("").includes('type="text"'));
  assert.ok(input);
  assert.doesNotMatch(input.strings.join(""), /maxLength/i);
});

test("editor caps additions at 100 but permits existing updates and deletions without losing future entries", () => {
  const mapping = Object.fromEntries(Array.from({ length: 100 }, (_, i) => [`program-${i}`, "future"]));
  for (const select of [false, true]) {
    const result = editorAction(mapping, "new", select ? "rainbow" : undefined);
    assert.equal(result.patches.length, 0);
    assert.ok(result.input.message);
  }
  assert.equal(Object.keys(editorAction(Object.fromEntries(Object.entries(mapping).slice(1)), "new").patches[0].effect_animations).length, 100);
  const changed = editorAction(mapping, "program-0", "pulse").patches[0].effect_animations;
  assert.equal(changed["program-0"], "pulse");
  assert.equal(changed["program-1"], "future");
  assert.equal(Object.keys(editorAction(mapping, "program-0", "").patches[0].effect_animations).length, 99);
  assert.equal(editorAction(mapping, "program-0").patches.length, 0, "adding an existing name must not overwrite its mapping");
});

import { furnitureLinks } from "./components/editor/forms/furniture-links.ts";

test("relay lamps use their colour source for effects and editor list but retain relay state", async () => {
  (globalThis as any).__NF_VIEWER_HASH__ = "synthetic-test";
  const { NfView3d } = await import("./components/view3d.ts");
  const floor = newFloor("f", "Synthetic", 0);
  const item = { id: "relay-lamp", type: "lamp_floor", entity: "switch.relay", color_entity: "light.bulb", x: 1, z: 1, w: 0.3, d: 0.3, h: 1, rotation: 0, variant: null, effect_animations: { Demo: "pulse", Other: "rainbow" } } as any;
  const hass = { states: {
    "switch.relay": { entity_id: "switch.relay", state: "on", attributes: { effect: "Wrong", effect_list: ["Wrong"] } },
    "light.bulb": { entity_id: "light.bulb", state: "on", attributes: { effect: "Demo", effect_list: ["Demo", "Other"], color_mode: "white", brightness: 100 } },
  } } as any;
  const view = Object.create(NfView3d.prototype) as any;
  const marker = () => view.lampMarker(hass, floor, item, "switch.relay");
  assert.equal(marker().effect, "pulse");
  const base = marker().glow;
  assert.ok(base && base.level > 0 && base.level < 1);
  assert.deepEqual(animateGlow(base, "pulse", 0.75)?.color, base.color, "white/default colour basis is preserved");
  hass.states["light.bulb"].attributes.effect = "Other";
  assert.equal(marker().effect, "rainbow");
  for (const state of ["off", "unavailable", "unknown"]) {
    hass.states["switch.relay"].state = state;
    assert.equal(marker().effect, undefined);
    assert.equal(marker().glow, null);
  }
  hass.states["switch.relay"].state = "on";
  for (const state of ["off", "unavailable", "unknown"]) {
    hass.states["light.bulb"].state = state;
    assert.equal(marker().effect, undefined);
    assert.equal(marker().active, true);
    assert.equal(marker().unavailable, false);
  }
  const doc = emptyBuilding(); doc.floors = [floor];
  const nodes = templates(furnitureLinks({ ...host, hass, doc } as any, item, { update() {} }));
  assert.ok(nodes.some((n) => n.values.includes("Other")));
  assert.equal(nodes.some((n) => n.values.includes("Wrong")), false);
});

import { NextFloorViewer } from "./viewer/viewer3d.ts";

test("one shared effect timer stops for no participants, hidden views/document, offscreen and disposal, then resumes", (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  const previous = Object.getOwnPropertyDescriptor(globalThis, "document");
  const doc = { hidden: false, removeEventListener() {} };
  Object.defineProperty(globalThis, "document", { configurable: true, value: doc });
  const viewer = Object.create(NextFloorViewer.prototype) as any;
  const floor = { floor: { id: "f" }, o: 1 };
  let lamps = 0, glows = 0, frames = 0;
  Object.assign(viewer, { floors: [floor], effectFloors: new Set(["f"]), onScreen: true, disposed: false, lowQuality: false, buildLamps() { lamps++; }, buildGlow() { glows++; }, invalidate() { frames++; } });
  try {
    viewer.scheduleEffects();
    const timer = viewer.effectTimer;
    for (let i = 0; i < 100; i++) viewer.scheduleEffects();
    assert.equal(viewer.effectTimer, timer);
    t.mock.timers.tick(1000);
    assert.equal(lamps, 1); assert.equal(glows, 1); assert.equal(frames, 1);
    for (const hide of [() => viewer.effectFloors.clear(), () => floor.o = 0, () => doc.hidden = true, () => viewer.onScreen = false, () => viewer.disposed = true]) {
      viewer.scheduleEffects();
      hide();
      viewer.scheduleEffects();
      assert.equal(viewer.effectTimer, undefined);
      t.mock.timers.tick(1000);
      assert.equal(lamps, 1);
      viewer.effectFloors.add("f"); floor.o = 1; doc.hidden = false; viewer.onScreen = true; viewer.disposed = false;
    }
    viewer.scheduleEffects(); t.mock.timers.tick(1000);
    assert.equal(lamps, 2);
    viewer.scheduleEffects();
    const noop = { dispose() {}, disconnect() {}, remove() {} };
    for (const key of ["weatherLayer", "mapLayer", "energyLayer", "soundLayer", "screenLayer", "pictureLayer", "waterLayer", "resizeObserver", "controls", "patternTexture", "blindTexture", "haloTexture", "labels"]) viewer[key] = noop;
    viewer.ground = { geometry: noop, material: noop }; viewer.robots = new Map(); viewer.robotTrails = new Map(); viewer.trailTimers = new Map(); viewer.clear = () => {}; viewer.buildRoofMesh = () => {};
    viewer.renderer = { dispose() {}, forceContextLoss() {}, domElement: noop };
    const previousCancel = globalThis.cancelAnimationFrame;
    globalThis.cancelAnimationFrame = () => {};
    try { viewer.dispose(); } finally { if (previousCancel) globalThis.cancelAnimationFrame = previousCancel; else delete (globalThis as any).cancelAnimationFrame; }
    t.mock.timers.tick(1000);
    assert.equal(lamps, 2); assert.equal(viewer.disposed, true);
  } finally {
    if (previous) Object.defineProperty(globalThis, "document", previous); else delete (globalThis as any).document;
  }
});

export const templates = (node: any): any[] => !node || typeof node !== "object" ? [] : Array.isArray(node) ? node.flatMap(templates) : node.values ? [node, ...node.values.flatMap(templates)] : [];
const host = { admin: true, t: (key: string) => key } as any;

test("resolver, sampler and editor work without Object.hasOwn and accept only explicit prototype-like names", () => {
  const original = Object.hasOwn;
  Object.hasOwn = undefined as any;
  try {
    const mapping = JSON.parse('{"__proto__":"pulse","constructor":"rainbow","toString":"flicker"}');
    for (const name of Object.keys(mapping)) {
      assert.equal(lightAnimation({ effect_animations: mapping }, { state: "on", attributes: { effect: name } } as any), mapping[name]);
    }
    assert.equal(lightAnimation({ effect_animations: {} }, { state: "on", attributes: { effect: "constructor" } } as any), undefined);
    assert.ok(animateGlow({ color: [1, 1, 1], level: 0.5 }, "pulse", 0));
    const nodes = templates(lightEffectFields(host, { effect_animations: mapping }, [], () => {}));
    assert.ok(nodes.some((n) => n.values.includes("__proto__")));
  } finally { Object.hasOwn = original; }
});
