import assert from "node:assert/strict";
import { test } from "node:test";
import { box, floorWith } from "../entities/fixtures.ts";
import { emptyBuilding } from "../model.ts";
import { printHtml } from "../components/editor/print.ts";
import { floorAreas, roomArea, totalOf } from "./living-area.ts";
import { generateWalls } from "./walls.ts";

const near = (a: number, b: number, eps = 0.25) => assert.ok(Math.abs(a - b) <= eps, `${a} ≈ ${b}`);

test("a room counts its floor inside the walls, in full under a normal ceiling", () => {
  const b = emptyBuilding();
  const floor = floorWith([box("a", 0, 0, 4, 3), box("b", 4, 0, 7, 3)], { height: 2.5 });
  b.floors = [floor];
  const walls = generateWalls(floor.rooms, { exterior: b.settings.wall_exterior, interior: b.settings.wall_interior }).walls;
  const a = roomArea(b, floor, floor.rooms[0], walls);
  // the outline runs along the inner faces of the outer walls and the middle of the shared wall
  near(a.floor, 4 * 3 - (b.settings.wall_interior / 2) * 3);
  assert.equal(a.living, a.floor);
  assert.equal(a.low, 0);
  near(totalOf(floorAreas(b, floor)).floor, 7 * 3 - b.settings.wall_interior * 3);
});

test("a low ceiling counts half between 1 and 2 m and nothing below", () => {
  const b = emptyBuilding();
  const half = floorWith([{ ...box("a", 0, 0, 4, 3), ceiling: 1.5 }], { height: 2.5 });
  b.floors = [half];
  const [h] = floorAreas(b, half);
  near(h.living, h.floor / 2, 0.01);
  near(h.low, h.floor, 0.01);
  const none = floorWith([{ ...box("a", 0, 0, 4, 3), ceiling: 0.9 }], { height: 2.5 });
  const [n] = floorAreas(b, none);
  assert.equal(n.living, 0);
});

test("the plan on paper has a page per floor and the area table", () => {
  const b = emptyBuilding();
  b.floors = [{ ...floorWith([box("a", 0, 0, 4, 3)]), name: "EG <1>" }];
  const html = printHtml(b, { title: "Plan", room: "Room", floorArea: "Floor", living: "Living", low: "Low", total: "Total", note: "note", area: (m) => `${m.toFixed(1)} m²`, length: (m) => `${m.toFixed(2)} m` });
  assert.ok(html.includes("<svg"));
  assert.ok(html.includes("EG &lt;1&gt;"));
  // outside to outside: 4 m of room and two exterior walls of 24 cm
  assert.ok(html.includes("4.48 m"), "outer width");
  assert.equal((html.match(/class="page"/g) ?? []).length, 2);
});
