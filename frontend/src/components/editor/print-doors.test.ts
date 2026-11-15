import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Opening } from "../../model.ts";
import { opening } from "../../entities/fixtures.ts";
import { floorSvg } from "./print.ts";

const texts = { title: "", room: "", floorArea: "", living: "", low: "", total: "", note: "", area: (m: number) => `${m}`, length: (m: number) => `${m}` };

/** The first door arc of a 4 x 3 room with its door in the top wall (x 0.5 to 1.5): the hinge and the leaf's end. */
function arc(extra: Partial<Opening>): { hinge: [number, number]; leaf: [number, number] } {
  const f = newFloor("eg", "EG", 0);
  f.rooms.push({ id: "r1", name: "R", area_id: null, points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "wood" });
  f.openings.push(opening("d", "r1", "door", extra));
  const svg = floorSvg(emptyBuilding(), f, [], texts, { names: false });
  const m = /<path d="M ([\d.-]+) ([\d.-]+) L ([\d.-]+) ([\d.-]+) A/.exec(svg);
  assert.ok(m, "a door arc is drawn");
  return { hinge: [Number(m![1]), Number(m![2])], leaf: [Number(m![3]), Number(m![4])] };
}

test("the exported plan draws a door like the editor: into the room, or out of it (#172)", () => {
  const inward = arc({ swing: "in" });
  assert.ok(inward.leaf[1] > inward.hinge[1], "swing in: the leaf stands in the room (towards +z)");
  const outward = arc({ swing: "out" });
  assert.ok(outward.leaf[1] < outward.hinge[1], "swing out: the leaf stands outside the room");
});

test("the exported plan hinges a door on the side that was chosen, seen from the room (#172)", () => {
  // seen from inside the room, looking at the top wall (north), left is west: the smaller x
  const left = arc({ hinge: "left" });
  const right = arc({ hinge: "right" });
  assert.ok(left.hinge[0] < right.hinge[0], "left hinge at the west end, right hinge at the east end");
});
