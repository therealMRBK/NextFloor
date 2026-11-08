import assert from "node:assert/strict";
import { test } from "node:test";
import { distance, fingerprintsOf, locate, medianReading, replaceRoom, signalLevel } from "./ble.ts";

const prints = [
  { room: "kitchen", rssi: { a: -50, b: -80, c: -90 } },
  { room: "kitchen", rssi: { a: -55, b: -78, c: -92 } },
  { room: "bath", rssi: { a: -85, b: -45, c: -70 } },
  { room: "hall", rssi: { a: -75, b: -75, c: -50 } },
];

test("the distance is zero for the same pattern, a missing scanner counts as far, and differences are capped", () => {
  assert.equal(distance({ a: -60 }, { a: -60 }), 0);
  assert.ok(Math.abs(distance({ a: -60, b: -50 }, { a: -60 }) - Math.sqrt((40 * 40) / 2)) < 1e-9);
  assert.equal(distance({}, {}), Infinity);
});

test("the nearest room wins, also when a room has several spots", () => {
  const k = locate(prints, { a: -53, b: -79, c: -91 });
  assert.equal(k.room, "kitchen");
  assert.ok(k.distance < 5 && k.margin > 20);
  assert.equal(locate(prints, { a: -84, b: -47, c: -71 }).room, "bath");
  assert.equal(locate(prints, { a: -76, b: -74, c: -52 }).room, "hall");
});

test("nothing heard, no fingerprints or nothing close gives no room", () => {
  assert.equal(locate(prints, {}).room, null);
  assert.equal(locate([], { a: -60 }).room, null);
  assert.equal(locate(prints, { a: -30, b: -30, c: -30 }).room, null);
});

test("the median drops a scanner that missed most samples", () => {
  assert.deepEqual(medianReading([{ a: -60, b: -70 }, { a: -64, b: -72 }, { a: -62 }, { a: -61 }]), { a: -61.5 });
  assert.deepEqual(medianReading([]), {});
});

test("a walk through a room becomes up to three fingerprints of its own stretches", () => {
  const walk = Array.from({ length: 20 }, (_, i) => ({ a: -50 - i, b: -80 + i }));
  const fps = fingerprintsOf("kitchen", walk);
  assert.equal(fps.length, 3);
  assert.ok(fps[0].rssi.a > fps[2].rssi.a);
  assert.deepEqual(fingerprintsOf("kitchen", [{ a: -60 }, { a: -61 }]).length, 1);
  assert.deepEqual(fingerprintsOf("kitchen", [{}, {}, {}]), []);
});

test("recording a room again replaces its fingerprints and keeps the others", () => {
  const out = replaceRoom(prints, "kitchen", [{ room: "kitchen", rssi: { a: -40 } }]);
  assert.equal(out.filter((p) => p.room === "kitchen").length, 1);
  assert.equal(out.length, 3);
});

test("signal bars run from nothing at −95 dBm to full at −45", () => {
  assert.equal(signalLevel(-100), 0);
  assert.equal(signalLevel(-70), 0.5);
  assert.equal(signalLevel(-40), 1);
});
