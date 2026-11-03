import assert from "node:assert/strict";
import { test } from "node:test";
import { box, floorWith, opening } from "../entities/fixtures.ts";
import { emptyBuilding } from "../model.ts";
import { compassOf, roomSun, roomSunYear, sunnyWindowsNow } from "./sun-hours.ts";

const BERLIN = { latitude: 52.5, longitude: 13.4, zone: "Europe/Berlin" };

function house(edge: number, north = 0) {
  const room = box("r", 0, 0, 4, 3);
  const floor = { ...floorWith([room]), openings: [opening("w", "r", "window", { edge, offset: edge % 2 ? 1.5 : 2 })] };
  const b = { ...emptyBuilding(), floors: [floor] };
  b.settings = { ...b.settings, north };
  return { b, floor, room };
}

test("a south window gets the most sun in winter, a north window only summer mornings and evenings", () => {
  const south = house(2);
  const north = house(0);
  const winter = new Date("2026-12-21T12:00:00Z");
  const summer = new Date("2026-06-21T12:00:00Z");
  const s = roomSun(south.b, south.floor, south.room, BERLIN, winter);
  assert.deepEqual(s.facing, ["S"]);
  assert.ok(s.hours > 6 && s.hours < 8.5, `south in December: ${s.hours}`);
  assert.equal(roomSun(north.b, north.floor, north.room, BERLIN, winter).hours, 0);
  const n = roomSun(north.b, north.floor, north.room, BERLIN, summer);
  assert.ok(n.hours > 1 && n.hours < 6, `north in June: ${n.hours}`);
  // in June the sun stands north of east and west in the morning and evening: about 8½ hours on the south side
  assert.ok(roomSun(south.b, south.floor, south.room, BERLIN, summer).hours > 8);
});

test("the plan's north turns the compass", () => {
  assert.equal(compassOf([0, -1], 0), "N");
  assert.equal(compassOf([1, 0], 0), "E");
  // north pointing to the right of the plan: "up" is west
  assert.equal(compassOf([0, -1], 90), "W");
  const turned = house(0, 180);
  assert.deepEqual(roomSun(turned.b, turned.floor, turned.room, BERLIN).facing, ["S"]);
});

test("a room without outside windows has no sun", () => {
  const { b, floor, room } = house(0);
  floor.openings = [];
  assert.deepEqual(roomSun(b, floor, room, BERLIN), { hours: 0, facing: [] });
});

test("over the year a north room gets sun only around midsummer", () => {
  const { b, floor, room } = house(0);
  const year = roomSunYear(b, floor, room, BERLIN, 2026);
  assert.equal(year.length, 12);
  assert.equal(year[11], 0);
  assert.ok(year[5] > year[2] && year[5] > year[8]);
});

test("the sun stands on a south window at noon, never on a north one, and on none at night", () => {
  const noon = new Date("2026-07-15T11:00:00Z");
  const south = house(2);
  const north = house(0);
  assert.deepEqual(sunnyWindowsNow(south.b, south.floor, south.room, BERLIN, noon).map((o) => o.id), ["w"]);
  assert.deepEqual(sunnyWindowsNow(north.b, north.floor, north.room, BERLIN, noon), []);
  assert.deepEqual(sunnyWindowsNow(south.b, south.floor, south.room, BERLIN, new Date("2026-07-15T23:00:00Z")), []);
});
