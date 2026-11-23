import assert from "node:assert/strict";
import { test } from "node:test";
import { SHADOW_GLSL, SKY_DIRECTIONS, SUN_DIRECTION, shadowUniforms } from "./sun-shadow.ts";

test("the sun of the shadows is the sun of the realistic look's surfaces", () => {
  const expected = [0.45, 0.8, 0.35];
  const length = Math.hypot(...expected);
  SUN_DIRECTION.toArray().forEach((v, i) => assert.ok(Math.abs(v - expected[i] / length) < 1e-9));
});

test("the sky is seen from eight directions around the compass, high enough that rooms stay light", () => {
  assert.equal(SKY_DIRECTIONS.length, 8);
  for (const [i, d] of SKY_DIRECTIONS.entries()) {
    assert.ok(Math.abs(d.length() - 1) < 1e-9, "unit length");
    const elevation = (Math.asin(d.y) * 180) / Math.PI;
    assert.ok(Math.abs(elevation - (i % 2 ? 70 : 55)) < 1e-9, "55° and 70° in turn");
  }
  const azimuths = new Set(SKY_DIRECTIONS.map((d) => Math.round((Math.atan2(d.z, d.x) * 180) / Math.PI)));
  assert.equal(azimuths.size, 8, "every direction its own compass point");
});

test("shadows are off until a realistic view turns them on, and the shader knows both lookups", () => {
  assert.equal(shadowUniforms.uNfShadowOn.value, 0);
  assert.equal(shadowUniforms.uNfShadowMap.value, null);
  assert.equal(shadowUniforms.uNfSkyMat.value.length, SKY_DIRECTIONS.length);
  assert.match(SHADOW_GLSL, /float nfSunShadow\(vec3 p, vec3 n\)/);
  assert.match(SHADOW_GLSL, /float nfSkyLight\(vec3 p, vec3 n\)/);
  // both return full light while shadows are off, so the other looks stay untouched
  assert.equal((SHADOW_GLSL.match(/if \(uNfShadowOn < 0\.5\) return 1\.0;/g) ?? []).length, 2);
});
