import assert from "node:assert/strict";
import { test } from "node:test";
import { cubeFaces, faceVisible, faceView } from "./cube.ts";
import { MIN_PHI } from "./view.ts";

test("seen from the south side the south face points at the viewer and the north face is hidden", () => {
  const f = cubeFaces(0);
  assert.ok(faceVisible(0, 1.1, f.south), "the camera sits on +z: the south face looks at it");
  assert.ok(!faceVisible(0, 1.1, f.north));
  assert.ok(faceVisible(0, 1.1, f.top), "from above the top is visible");
  assert.ok(!faceVisible(Math.PI / 2, 1.1, f.south), "from the east the south face is edge-on or away");
  assert.ok(faceVisible(Math.PI / 2, 1.1, f.east));
});

test("the plan's north turns the cube: with north 90 the face called north looks along +x", () => {
  const f = cubeFaces(90);
  assert.ok(Math.abs(f.north.normal[0] - 1) < 1e-9 && Math.abs(f.north.normal[2]) < 1e-9);
  assert.ok(faceVisible(Math.PI / 2, 1.1, f.north));
});

test("a click on a side face looks from that side, a click on the top looks down", () => {
  const f = cubeFaces(0);
  assert.ok(Math.abs(faceView(f.east, 0.3).theta - Math.PI / 2) < 1e-9);
  assert.ok(Math.abs(faceView(f.south, 0.3).theta) < 1e-9);
  assert.equal(faceView(f.top, 0.3).theta, 0.3);
  assert.equal(faceView(f.top, 0.3).phi, MIN_PHI);
});
