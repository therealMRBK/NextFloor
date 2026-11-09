import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Floor, type Room } from "../../model.ts";
import { floorImageSvg, imageFileName } from "./image-export.ts";

const texts = { title: "", room: "", floorArea: "", living: "", low: "", total: "", note: "", area: (m: number) => `${m.toFixed(1)} m²`, length: (m: number) => `${m.toFixed(2)} m` };
const room: Room = { id: "r1", name: "Küche", area_id: null, points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "wood" };

function floorWithTable(): Floor {
  const f = newFloor("eg", "EG", 0);
  f.rooms.push(room);
  f.furniture.push({ id: "t", type: "table", name: "", x: 2, z: 1.5, rotation: 0, w: 1.2, d: 0.8, h: 0.75 } as never);
  return f;
}

test("the plan image is an SVG of fixed pixel size on white; furniture, measurements and names follow the choice (#122)", () => {
  const b = emptyBuilding();
  const f = floorWithTable();
  const all = floorImageSvg(b, f, texts, { furniture: true, dimensions: true, names: true });
  assert.match(all, /width="2400"/);
  assert.match(all, /fill="#fff"/);
  assert.ok(all.includes("Küche") && all.includes("#e6e6e6"));
  assert.match(all, /\d+\.\d\d m<\/text>/, "the outer measurements");
  const bare = floorImageSvg(b, f, texts, { furniture: false, dimensions: false, names: false });
  assert.ok(!bare.includes("Küche") && !bare.includes("#e6e6e6"));
  assert.doesNotMatch(bare, /\d+\.\d\d m<\/text>/);
});

test("file names come from the floor name", () => {
  assert.equal(imageFileName("Erdgeschoss"), "erdgeschoss.png");
  assert.equal(imageFileName("1. OG / Dach"), "1-og-dach.png");
  assert.equal(imageFileName("   "), "floor.png");
});
