import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

const source = readFileSync(new URL("./components/view3d.ts", import.meta.url), "utf8");

// Test the timer without starting WebGL or loading browser-only bundles.
test("the dashboard clock resumes after reconnecting without a clock option change", () => {
  const method = source.match(/private syncClock\(\): void \{([\s\S]*?)\n  \}/);
  assert.ok(method);
  let now = 100;
  let next = 0;
  const timers = new Map<number, () => void>();
  const sync = runInNewContext(`(function () {${method[1]}})`, {
    Date: { now: () => now },
    setInterval: (tick: () => void, delay: number) => {
      assert.equal(delay, 10000);
      timers.set(++next, tick);
      return next;
    },
    clearInterval: (id: number) => timers.delete(id),
  }) as (this: { isConnected: boolean; clock: string | null; _now: number; building: unknown }) => void;
  // the tablet sidebar (with its clock) is switched off here, so only the dashboard clock option decides
  const card = { isConnected: true, clock: "top_right" as string | null, _now: 0, building: { settings: { tablet_ui: { sidebar: "off" } } } };
  sync.call(card);
  assert.equal(timers.size, 1);
  now = 200;
  timers.values().next().value!();
  assert.equal(card._now, now);
  card.isConnected = false;
  sync.call(card);
  assert.equal(timers.size, 0);
  card.isConnected = true;
  now = 300;
  sync.call(card);
  assert.equal(card._now, now, "reconnect refreshes the time immediately");
  assert.equal(timers.size, 1);
  now = 400;
  timers.values().next().value!();
  assert.equal(card._now, now, "the reconnected clock keeps ticking");
  sync.call(card);
  assert.equal(timers.size, 1, "repeated setup cannot create duplicate intervals");
  card.clock = null;
  sync.call(card);
  assert.equal(timers.size, 0, "a disabled clock has no running timer");
  assert.match(source, /connectedCallback\(\): void \{\s*super.connectedCallback\(\);\s*this.syncClock\(\)/);
  assert.match(source, /if \(changed.has\("clock"\) \|\| changed.has\("building"\)\) this.syncClock\(\);/);
  assert.match(source, /disconnectedCallback\(\)[\s\S]*?clearInterval\(this.clockTimer\);/);
});
