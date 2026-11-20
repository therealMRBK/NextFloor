import assert from "node:assert/strict";
import { test } from "node:test";
import { BuildingController, compareVersions } from "./building-controller.ts";
import { emptyBuilding } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

/** A host that counts redraws, and a Home Assistant whose backend is a small script. */
function setup(overrides: Partial<Record<string, (msg: Record<string, unknown>) => unknown>> = {}) {
  const host = { redraws: 0, addController() {}, requestUpdate() { this.redraws++; } };
  const sent: Record<string, unknown>[] = [];
  let listener: ((m: { revision: number }) => void) | null = null;
  let revision = 10;
  const hass = {
    callWS: async (msg: Record<string, unknown>) => {
      sent.push(msg);
      const custom = overrides[String(msg.type)];
      if (custom) return custom(msg);
      switch (msg.type) {
        case "nextfloor/building/get":
          return { building: emptyBuilding(), revision, version: "1.0.0" };
        case "nextfloor/building/save":
          return { revision: ++revision };
        case "nextfloor/packs/list":
          return { packs: [] };
        default:
          throw new Error(`unexpected ${String(msg.type)}`);
      }
    },
    connection: { subscribeMessage: async (cb: (m: { revision: number }) => void) => ((listener = cb), async () => void (listener = null)) },
  } as unknown as HomeAssistant;
  const controller = new BuildingController(host as never);
  return { controller, host, hass, sent, emit: (r: number) => listener?.({ revision: r }), isListening: () => listener !== null };
}

const settle = () => new Promise((resolve) => setTimeout(resolve, 20));

test("versions compare number by number", () => {
  assert.ok(compareVersions("1.10.1", "1.9.2") > 0);
  assert.ok(compareVersions("1.9.2", "1.10.0") < 0);
  assert.equal(compareVersions("1.0", "1.0.0"), 0);
  assert.ok(compareVersions("2.0.0", "1.99.99") > 0);
  assert.ok(compareVersions("1.2.3-beta", "1.2.3") === 0, "a suffix counts as zero");
});

test("connecting loads the plan and listens for changes", async () => {
  const { controller, hass, isListening } = setup();
  controller.hostConnected();
  controller.setHass(hass);
  await settle();
  assert.ok(controller.building);
  assert.equal(controller.backendVersion, "1.0.0");
  assert.equal(isListening(), true);
  controller.hostDisconnected();
  await settle();
  assert.equal(isListening(), false);
});

test("an edit shows at once, is saved after flush, and then reads as saved", async () => {
  const { controller, hass, sent } = setup();
  controller.hostConnected();
  controller.setHass(hass);
  await settle();
  const edited = emptyBuilding();
  controller.edit(edited);
  assert.equal(controller.building, edited);
  assert.equal(sent.filter((m) => m.type === "nextfloor/building/save").length, 0, "not yet, the pause has not passed");
  await controller.flush();
  assert.equal(sent.filter((m) => m.type === "nextfloor/building/save").length, 1);
  assert.equal(controller.saveState, "saved");
  assert.equal(controller.saveError, null);
});

test("several quick edits are saved as one", async () => {
  const { controller, hass, sent } = setup();
  controller.hostConnected();
  controller.setHass(hass);
  await settle();
  controller.edit(emptyBuilding());
  controller.edit(emptyBuilding());
  controller.edit(emptyBuilding());
  await controller.flush();
  assert.equal(sent.filter((m) => m.type === "nextfloor/building/save").length, 1);
});

test("a failed save is reported, and an old backend asks for a restart", async () => {
  const { controller, hass } = setup({
    "nextfloor/building/save": () => {
      throw { message: "extra keys not allowed @ data['foo']" };
    },
  });
  controller.hostConnected();
  controller.setHass(hass);
  await settle();
  controller.edit(emptyBuilding());
  await controller.flush();
  assert.equal(controller.saveState, "error");
  assert.match(controller.saveError ?? "", /extra keys/);
  assert.equal(controller.needsRestart, true);
});

test("changes from elsewhere reload the plan, our own saves do not", async () => {
  const { controller, hass, sent, emit } = setup();
  controller.hostConnected();
  controller.setHass(hass);
  await settle();
  const loads = () => sent.filter((m) => m.type === "nextfloor/building/get").length;
  const before = loads();
  controller.edit(emptyBuilding());
  await controller.flush(); // saves revision 11
  emit(11);
  await settle();
  assert.equal(loads(), before, "echo of our own save");
  emit(99);
  await settle();
  assert.equal(loads(), before + 1, "a save from another browser");
});

test("a load failure is shown as an error", async () => {
  const { controller, hass } = setup({
    "nextfloor/building/get": () => {
      throw new Error("backend down");
    },
  });
  controller.hostConnected();
  controller.setHass(hass);
  await settle();
  assert.equal(controller.error, "backend down");
  assert.equal(controller.building, null);
});

test("older backends without packs just have none", async () => {
  const { controller, hass } = setup({
    "nextfloor/packs/list": () => {
      throw new Error("unknown command");
    },
  });
  controller.hostConnected();
  controller.setHass(hass);
  await settle();
  assert.deepEqual(controller.packs, []);
  assert.ok(controller.building);
});

function connectionEvents(hass: HomeAssistant) {
  const ready = new Set<() => void>();
  Object.assign(hass.connection, {
    addEventListener: (_event: string, callback: () => void) => ready.add(callback),
    removeEventListener: (_event: string, callback: () => void) => ready.delete(callback),
  });
  return { fire: () => ready.forEach(callback => callback()), count: () => ready.size };
}

const microtasks = async () => { for (let i = 0; i < 30; i++) await Promise.resolve(); };

test("the same dashboard card recovers when the existing connection becomes ready again", async () => {
  let down = true;
  const { controller, hass, sent } = setup({
    "nextfloor/building/get": () => {
      if (down) throw new Error("backend starting");
      return { building: emptyBuilding(), revision: 20, version: "1.0.0" };
    },
  });
  const events = connectionEvents(hass);
  controller.hostConnected(); controller.setHass(hass);
  await microtasks();
  assert.match(controller.error ?? "", /backend starting/);
  down = false; events.fire();
  await microtasks();
  assert.equal(controller.error, null);
  assert.ok(controller.building);
  const loads = sent.filter(m => m.type === "nextfloor/building/get").length;
  controller.setHass({ ...hass });
  await microtasks();
  assert.equal(sent.filter(m => m.type === "nextfloor/building/get").length, loads);
  assert.equal(events.count(), 1);
  controller.hostDisconnected();
  assert.equal(events.count(), 0);
});

test("backend still starting at ready is retried and disconnect cancels retries", async t => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  let down = true;
  const { controller, hass, sent } = setup({
    "nextfloor/building/get": () => {
      if (down) throw new Error("not loaded yet");
      return { building: emptyBuilding(), revision: 20 };
    },
  });
  controller.hostConnected(); controller.setHass(hass);
  await microtasks();
  down = false;
  t.mock.timers.tick(5000); await microtasks();
  assert.equal(controller.error, null);
  assert.ok(controller.building);
  down = true;
  controller.hostDisconnected();
  controller.hostConnected();
  await microtasks();
  assert.match(controller.error ?? "", /not loaded yet/);
  controller.hostDisconnected();
  const loads = sent.length;
  t.mock.timers.tick(15000); await microtasks();
  assert.equal(sent.length, loads);
});

test("a replacement connection is watched and the old ready listener is removed", async () => {
  const first = setup(); const second = setup();
  const oldEvents = connectionEvents(first.hass), newEvents = connectionEvents(second.hass);
  first.controller.hostConnected(); first.controller.setHass(first.hass);
  await microtasks();
  first.controller.setHass(second.hass); await microtasks();
  assert.equal(oldEvents.count(), 0); assert.equal(newEvents.count(), 1);
  assert.ok(second.sent.some(m => m.type === "nextfloor/building/get"));
  first.controller.hostDisconnected();
  assert.equal(newEvents.count(), 0);
});

test("a reconnect preserves unsaved edits and does not duplicate building subscriptions", async () => {
  const { controller, hass, sent } = setup();
  const events = connectionEvents(hass);
  let subscriptions = 0;
  const subscribe = hass.connection.subscribeMessage.bind(hass.connection);
  hass.connection.subscribeMessage = (callback, message) => { subscriptions++; return subscribe(callback, message); };
  controller.hostConnected(); controller.setHass(hass); await microtasks();
  events.fire(); events.fire(); await microtasks();
  assert.equal(subscriptions, 1);
  const edited = emptyBuilding();
  edited.settings.north = 42;
  controller.edit(edited);
  const before = sent.filter(m => m.type === "nextfloor/building/get").length;
  events.fire(); await microtasks();
  assert.equal(controller.building, edited);
  assert.equal(sent.filter(m => m.type === "nextfloor/building/get").length, before);
  await controller.flush();
  controller.hostDisconnected();
});

test("a subscription completing after the card is removed is immediately cleaned up", async () => {
  const { controller, hass } = setup();
  let resolve!: (stop: () => Promise<void>) => void;
  hass.connection.subscribeMessage = () => new Promise(done => { resolve = done; });
  controller.hostConnected(); controller.setHass(hass); await microtasks();
  controller.hostDisconnected();
  let stopped = false;
  resolve(async () => { stopped = true; });
  await microtasks();
  assert.equal(stopped, true);
});
