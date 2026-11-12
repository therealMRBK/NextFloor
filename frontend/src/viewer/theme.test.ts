import assert from "node:assert/strict";
import { test } from "node:test";
import { AdditiveBlending, MeshBasicMaterial, NormalBlending } from "three";
import { lightStage } from "../themes.ts";
import { deepenedShadow, lineBlending, lookUniforms, realTextureUniforms, ownUniforms, parseAccent, setOwnLook, themed, themeIndex } from "./theme.ts";

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
  assert.ok(shader.fragmentShader.includes("nfThemed(diffuseColor.rgb, true, false)"));
  assert.ok(shader.fragmentShader.includes("vec3 nfThemed"));
  const shader2 = { uniforms: {} as Record<string, unknown>, fragmentShader: "#include <common>\nvoid main() {\n#include <color_fragment>\n}" };
  surface.onBeforeCompile(shader2 as never, undefined as never);
  assert.ok(shader2.fragmentShader.includes("nfThemed(diffuseColor.rgb, false, false)"));
  // glass is its own program: the own look can paint it in a colour of its own (D#82)
  const glass = themed(new MeshBasicMaterial(), uniform, false, true);
  assert.notEqual(glass.customProgramCacheKey(), surface.customProgramCacheKey());
  const shader3 = { uniforms: {} as Record<string, unknown>, fragmentShader: "#include <common>\nvoid main() {\n#include <color_fragment>\n}" };
  glass.onBeforeCompile(shader3 as never, undefined as never);
  assert.ok(shader3.fragmentShader.includes("nfThemed(diffuseColor.rgb, false, true)"));
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
  const look = { dark: "#000000", light: "#ffffff", lines: "#ff0000", background: "#f0f0f0", glass: "" };
  setOwnLook({ ...look, lines: "#00ff00", glass: "" });
  assert.equal(setOwnLook(look), true);
  assert.equal(setOwnLook(look), false);
  assert.deepEqual(ownUniforms.uOwnLine.value.toArray(), [1, 0, 0]);
  assert.deepEqual(ownUniforms.uOwnLight.value.toArray(), [1, 1, 1]);
  assert.equal(lineBlending("own", look), NormalBlending);
  assert.equal(lineBlending("own", { ...look, background: "#101820", glass: "" }), AdditiveBlending);
  const shader = { uniforms: {} as Record<string, unknown>, fragmentShader: "#include <common>\n#include <color_fragment>" };
  themed(new MeshBasicMaterial(), { value: 3 }).onBeforeCompile(shader as never, undefined as never);
  assert.equal(shader.uniforms.uOwnDark, ownUniforms.uOwnDark);
  assert.ok(shader.fragmentShader.includes("uTheme == 3"));
});

test("each view has its own look colours: two cards do not repaint each other", () => {
  const [a, b] = [lookUniforms(), lookUniforms()];
  setOwnLook({ dark: "#000000", light: "#ffffff", lines: "#ff0000", background: "#101010", glass: "#00ff00" }, a);
  setOwnLook({ dark: "#000000", light: "#ffffff", lines: "#0000ff", background: "#101010", glass: "" }, b);
  assert.deepEqual(a.uOwnLine.value.toArray(), [1, 0, 0]);
  assert.deepEqual(b.uOwnLine.value.toArray(), [0, 0, 1]);
  assert.deepEqual([a.uOwnGlassOn.value, b.uOwnGlassOn.value], [1, 0]);
  const shader = { uniforms: {} as Record<string, unknown>, fragmentShader: "#include <common>\n#include <color_fragment>" };
  themed(new MeshBasicMaterial(), { value: 3, look: a }).onBeforeCompile(shader as never, undefined as never);
  assert.equal(shader.uniforms.uOwnLine, a.uOwnLine);
  assert.equal(shader.uniforms.uAccent, a.uAccent);
});

test("the realistic look is index 4, draws lines without glow, and only surfaces with a material of their own get its shader", () => {
  assert.equal(themeIndex("real"), 4);
  assert.equal(lightStage("real", {}), true);
  assert.equal(lineBlending("real"), NormalBlending);
  const uniform = { value: 4 };
  const source = { uniforms: {} as Record<string, unknown>, vertexShader: "#include <common>\n#include <project_vertex>", fragmentShader: "#include <common>\nvoid main() {\n#include <color_fragment>\n}" };
  const floor = themed(new MeshBasicMaterial(), uniform, false, false, "floor");
  floor.onBeforeCompile(source as never, undefined as never);
  assert.ok(source.vertexShader.includes("vNfWorld = (modelMatrix"));
  assert.ok(source.fragmentShader.includes("if (uTheme == 4) diffuseColor.rgb = nfReal(nfRaw, 0);"));
  const plain = { uniforms: {} as Record<string, unknown>, vertexShader: "#include <common>", fragmentShader: "#include <common>\n#include <color_fragment>" };
  themed(new MeshBasicMaterial(), uniform).onBeforeCompile(plain as never, undefined as never);
  assert.ok(!plain.fragmentShader.includes("nfReal(nfRaw"));
  assert.notEqual(floor.customProgramCacheKey(), themed(new MeshBasicMaterial(), uniform, false, false, "wall").customProgramCacheKey());
});

test("the realistic look reads photo textures only where they have arrived, and deepens the floor shadows in that look alone", () => {
  const source = { uniforms: {} as Record<string, unknown>, vertexShader: "#include <common>\n#include <project_vertex>", fragmentShader: "#include <common>\nvoid main() {\n#include <color_fragment>\n}" };
  themed(new MeshBasicMaterial(), { value: 4 }, false, false, "wall").onBeforeCompile(source as never, undefined as never);
  assert.equal(source.uniforms.uTexA, realTextureUniforms.uTexA);
  assert.ok(source.fragmentShader.includes("uTexA.z > 0.5 ? nfPhoto(uTexPlaster"));
  assert.deepEqual(realTextureUniforms.uTexA.value.toArray(), [0, 0, 0]);
  const shadow = deepenedShadow(new MeshBasicMaterial(), { value: 4 });
  const shader = { uniforms: {} as Record<string, unknown>, fragmentShader: "#include <common>\n#include <color_fragment>" };
  shadow.onBeforeCompile(shader as never, undefined as never);
  assert.ok(shader.fragmentShader.includes("if (uTheme == 4)"));
});
