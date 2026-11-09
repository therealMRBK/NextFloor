import assert from "node:assert/strict";
import { test } from "node:test";
import { AdditiveBlending, MeshBasicMaterial, NormalBlending } from "three";
import { lineBlending, ownUniforms, parseAccent, setOwnLook, themed, themeIndex } from "./theme.ts";

test("an accent colour is read from #rrggbb, with or without the hash, and nothing else", () => {
  assert.deepEqual(parseAccent("#ff0000"), [1, 0, 0]);
  assert.deepEqual(parseAccent("00ff00"), [0, 1, 0]);
  const grey = parseAccent("  #808080 ")!;
  assert.ok(grey.every((c) => Math.abs(c - 128 / 255) < 1e-9));
  for (const bad of ["#fff", "red", "#gg0000", "", null, undefined, "#1234567"]) assert.equal(parseAccent(bad as string), null, String(bad));
});

test("looks have indexes in the order of the list, and the day look draws lines without glow", () => {
  assert.equal(themeIndex("neon"), 0);
  assert.equal(themeIndex("blueprint"), 1);
  assert.equal(themeIndex("day"), 2);
  assert.equal(lineBlending("neon"), AdditiveBlending);
  assert.equal(lineBlending("blueprint"), AdditiveBlending);
  assert.equal(lineBlending("day"), NormalBlending);
});

test("a themed material patches its shader and tells line and surface programs apart", () => {
  const uniform = { value: 0 };
  const surface = themed(new MeshBasicMaterial(), uniform);
  const line = themed(new MeshBasicMaterial(), uniform, true);
  assert.notEqual(surface.customProgramCacheKey(), line.customProgramCacheKey());
  const shader = { uniforms: {} as Record<string, unknown>, fragmentShader: "#include <common>\nvoid main() {\n#include <color_fragment>\n}" };
  line.onBeforeCompile(shader as never, undefined as never);
  assert.equal(shader.uniforms.uTheme, uniform);
  assert.ok(shader.fragmentShader.includes("nfThemed(diffuseColor.rgb, true)"));
  assert.ok(shader.fragmentShader.includes("vec3 nfThemed"));
  const shader2 = { uniforms: {} as Record<string, unknown>, fragmentShader: shader.fragmentShader.replace("true", "false") };
  surface.onBeforeCompile(shader2 as never, undefined as never);
  assert.ok(shader2.fragmentShader.includes("nfThemed(diffuseColor.rgb, false)"));
});

test("theming keeps an earlier patch of the same material", () => {
  const material = new MeshBasicMaterial();
  let called = false;
  material.onBeforeCompile = () => void (called = true);
  themed(material, { value: 0 });
  material.onBeforeCompile({ uniforms: {}, fragmentShader: "" } as never, undefined as never);
  assert.ok(called);
});

test("the own look is index 3, puts its colours into the shader, and draws lines without glow on a light background", () => {
  assert.equal(themeIndex("own"), 3);
  const look = { dark: "#000000", light: "#ffffff", lines: "#ff0000", background: "#f0f0f0" };
  setOwnLook({ ...look, lines: "#00ff00" });
  assert.equal(setOwnLook(look), true);
  assert.equal(setOwnLook(look), false);
  assert.deepEqual(ownUniforms.uOwnLine.value.toArray(), [1, 0, 0]);
  assert.deepEqual(ownUniforms.uOwnLight.value.toArray(), [1, 1, 1]);
  assert.equal(lineBlending("own", look), NormalBlending);
  assert.equal(lineBlending("own", { ...look, background: "#101820" }), AdditiveBlending);
  const shader = { uniforms: {} as Record<string, unknown>, fragmentShader: "#include <common>\n#include <color_fragment>" };
  themed(new MeshBasicMaterial(), { value: 3 }).onBeforeCompile(shader as never, undefined as never);
  assert.equal(shader.uniforms.uOwnDark, ownUniforms.uOwnDark);
  assert.ok(shader.fragmentShader.includes("uTheme == 3"));
});
