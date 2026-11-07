import assert from "node:assert/strict";
import { test } from "node:test";
import { entity, hassOf } from "./fixtures.ts";
import { coverPosition, coverReaches } from "./covers.ts";
import { emptyBuilding, newFloor, type Furniture } from "../model.ts";
import { setPacks, type PackItem } from "../packs.ts";

test("a cover's position comes from its attribute, else from open / closed", () => {
  const hass = hassOf([
    entity("cover.a", "open", { current_position: 40 }),
    entity("cover.b", "open"),
    entity("cover.c", "closed"),
    entity("cover.d", "closing"),
    entity("cover.e", "unavailable"),
  ]);
  assert.equal(coverPosition(hass, "cover.a"), 40);
  assert.equal(coverPosition(hass, "cover.b"), 100);
  assert.equal(coverPosition(hass, "cover.c"), 0);
  assert.equal(coverPosition(hass, "cover.d"), 50);
  assert.equal(coverPosition(hass, "cover.e"), null);
  assert.equal(coverPosition(hass, null), null);
});

test("an awning with the reversed direction extends where the cover reports closed (#100)", () => {
  const awning: PackItem = { id: "awning", name: { en: "awning" }, size: [3, 2, 1], cover: "extends", parts: [{ shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "body", move: "out" }] };
  setPacks([{ id: "p", name: "p", publisher: "p", items: [awning] }]);
  const fl = newFloor("f", "F", 0);
  const mk = (id: string, extra: Partial<Furniture>): Furniture => ({ id, type: "pack:p:awning", x: 1, z: 1, rotation: 0, w: 3, d: 1, h: 2, variant: null, ...extra } as Furniture);
  fl.furniture = [mk("a", { cover_entity: "cover.m" }), mk("b", { cover_entity: "cover.m", cover_inverted: true })];
  const hass = hassOf([entity("cover.m", "open", { current_position: 100 })]);
  const reach = coverReaches(hass, { ...emptyBuilding(), floors: [fl] });
  assert.equal(reach.get("a"), 1, "open 100 % extends the awning");
  assert.equal(reach.get("b"), 0, "reversed: open 100 % brings it in");
});
