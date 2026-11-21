import assert from "node:assert/strict";
import { test } from "node:test";
import type { Floor, Furniture, Room } from "../../../model.ts";
import { isLinked, objectsInRoom } from "./room-objects.ts";

const room = { id: "r", points: [[0, 0], [4, 0], [4, 3], [0, 3]] } as unknown as Room;
const item = (id: string, x: number, z: number, extra: Partial<Furniture> = {}) => ({ id, type: "sofa", x, z, rotation: 0, w: 1, d: 1, h: 1, variant: null, ...extra }) as Furniture;
const floor = (furniture: Furniture[]) => ({ furniture }) as unknown as Floor;

test("only the items whose centre lies inside the room are listed", () => {
  const list = objectsInRoom(floor([item("in", 1, 1), item("out", 9, 9), item("edge", 3.9, 2.9)]), room, (f) => f.id);
  assert.deepEqual(list.map((f) => f.id), ["edge", "in"]);
});

test("the list is ordered by name with numbers in natural order, then by id", () => {
  const names: Record<string, string> = { a: "Lampe 10", b: "Lampe 2", c: "Lampe 2" };
  const list = objectsInRoom(floor([item("a", 1, 1), item("c", 2, 1), item("b", 1, 2)]), room, (f) => names[f.id]);
  assert.deepEqual(list.map((f) => f.id), ["b", "c", "a"]);
});

test("a linked entity is recognised", () => {
  assert.equal(isLinked(item("x", 1, 1, { entity: "light.a" })), true);
  assert.equal(isLinked(item("x", 1, 1)), false);
});
