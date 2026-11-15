import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { isLamp, isStatusDevice } from "./model.ts";
import { packType, setPacks, type FurniturePack } from "./packs.ts";

// the real pack, as shipped: a NAS reaches the 3D view as "pack:nextfloor.technik:nas", not as "nas" (#153)
const technik = JSON.parse(readFileSync(new URL("../../custom_components/nextfloor/packs/nextfloor.technik.json", import.meta.url), "utf8")) as FurniturePack;

test("a NAS and a router of the shipped pack are status devices and never light the room", () => {
  setPacks([technik]);
  try {
    for (const id of ["nas", "router", "server_rack", "tower_pc"]) {
      const type = packType(technik.id, id);
      assert.equal(isStatusDevice(type), true, id);
    }
  } finally {
    setPacks([]);
  }
});

test("a real lamp of a pack and a built-in type are no status devices", () => {
  setPacks([technik]);
  try {
    assert.equal(isStatusDevice("nas"), false);
    assert.equal(isStatusDevice("floor_lamp"), false);
    assert.equal(isStatusDevice(packType(technik.id, "standing_desk")), false);
    assert.equal(isLamp(packType(technik.id, "nas")), true);
  } finally {
    setPacks([]);
  }
});
