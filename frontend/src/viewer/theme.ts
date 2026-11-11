// The looks of the 3D view. Geometry keeps its neon colours; a small shader patch maps them to the chosen look, so switching is
// instant and nothing has to be rebuilt. Signal colours (lit lamps, open windows, glowing screens) are bright and saturated and
// stay as they are in every look.

import { AdditiveBlending, NormalBlending, Vector3, type Material } from "three";
import { hexRgb, lightStage, THEMES, type OwnLook, type Theme } from "../themes.ts";

export type { Theme } from "../themes.ts";

export interface ThemeUniform {
  value: number;
  /**
   * The colours of this view's look (accent, own look). Each 3D view has its own set, so two cards on one dashboard with
   * different colours do not repaint each other; without it the shared set below is used.
   */
  look?: LookUniforms;
}

/** The colours a look can take from the user: the neon accent and the ramp of the own look. */
export interface LookUniforms {
  uAccent: { value: Vector3 };
  uAccentOn: { value: number };
  uOwnDark: { value: Vector3 };
  uOwnLight: { value: Vector3 };
  uOwnLine: { value: Vector3 };
  uOwnGlass: { value: Vector3 };
  uOwnGlassOn: { value: number };
}

/** A fresh set of look colours for one 3D view (the stock cyan accent, no own look yet). */
export const lookUniforms = (): LookUniforms => ({
  uAccent: { value: new Vector3(0.22, 0.88, 1) },
  uAccentOn: { value: 0 },
  uOwnDark: { value: new Vector3() },
  uOwnLight: { value: new Vector3() },
  uOwnLine: { value: new Vector3() },
  uOwnGlass: { value: new Vector3() },
  uOwnGlassOn: { value: 0 },
});

export const themeIndex = (theme: Theme): number => THEMES.indexOf(theme);

/** The accent of the neon look (lines and cyan surfaces): the stock cyan, or a colour of the user's choice. */
export const accentUniform = { value: new Vector3(0.22, 0.88, 1) };
export const accentOnUniform = { value: 0 };

/** "#rrggbb" as the 0..1 colour the shader uses; null for anything else. */
export function parseAccent(hex: string | null | undefined): [number, number, number] | null {
  const rgb = hexRgb(hex);
  return rgb ? (rgb.map((v) => v / 255) as [number, number, number]) : null;
}

/** The ramp of the own look (#82): darkest surface, lightest surface, lines. */
export const ownUniforms = { uOwnDark: { value: new Vector3() }, uOwnLight: { value: new Vector3() }, uOwnLine: { value: new Vector3() }, uOwnGlass: { value: new Vector3() }, uOwnGlassOn: { value: 0 } };

/** Whether the own look has a glass colour of its own (the glass is then painted in it instead of glowing). */
export const ownGlass = (theme: Theme, own: OwnLook): boolean => theme === "own" && !!hexRgb(own.glass);

/** Puts a filled own look into the shaders; true when anything changed. */
export function setOwnLook(look: Required<OwnLook>, into: Pick<LookUniforms, "uOwnDark" | "uOwnLight" | "uOwnLine" | "uOwnGlass" | "uOwnGlassOn"> = ownUniforms): boolean {
  const ownUniforms = into;
  let changed = false;
  const glass = parseAccent(look.glass);
  if (ownUniforms.uOwnGlassOn.value !== (glass ? 1 : 0)) {
    ownUniforms.uOwnGlassOn.value = glass ? 1 : 0;
    changed = true;
  }
  for (const [uniform, hex] of [
    [ownUniforms.uOwnGlass, glass ? look.glass : "#000000"],
    [ownUniforms.uOwnDark, look.dark],
    [ownUniforms.uOwnLight, look.light],
    [ownUniforms.uOwnLine, look.lines],
  ] as const) {
    const next = new Vector3(...(parseAccent(hex) ?? [0, 0, 0]));
    if (!uniform.value.equals(next)) {
      uniform.value.copy(next);
      changed = true;
    }
  }
  return changed;
}

// The fragment shader function that turns a neon colour into the current look. Look 0 is neon itself (only an own accent
// changes anything), 1 is blueprint, 2 is day, 3 the own look (blueprint's filter with the user's colours).
const LOOK_FUNCTION = /* glsl */ `
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
uniform vec3 uOwnDark;
uniform vec3 uOwnLight;
uniform vec3 uOwnLine;
uniform vec3 uOwnGlass;
uniform int uOwnGlassOn;
vec3 nfThemed(vec3 c, bool isLine, bool isGlass) {
  float strongest = max(c.r, max(c.g, c.b));
  float weakest = min(c.r, min(c.g, c.b));
  float saturation = strongest > 0.0 ? (strongest - weakest) / strongest : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    bool cyanish = saturation > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6;
    if (uAccentOn == 1 && (isLine || cyanish)) return uAccent * strongest;
    return c;
  }
  // signal colours keep their colour
  if (!isLine && strongest > 0.45 && saturation > 0.45) return c;
  float luma = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 1) {
    // blueprint: pale lines on shades of blue
    if (isLine) return vec3(0.8, 0.9, 1.0) * min(1.0, strongest * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(luma * 5.0, 0.0, 1.0));
  }
  if (uTheme == 3) {
    // own look: glass in its own colour when one is picked,
    if (isGlass && uOwnGlassOn == 1) return uOwnGlass;
    // the user's lines on a ramp from their dark to their light surface colour
    if (isLine) return uOwnLine * clamp(strongest * 1.3, 0.45, 1.0);
    return mix(uOwnDark, uOwnLight, clamp(luma * 5.0, 0.0, 1.0));
  }
  if (uTheme == 4) {
    // realistic: furniture, trees and everything without a material of its own keep their hue, lifted for daylight
    if (isLine) return vec3(0.1, 0.13, 0.18) * clamp(strongest * 1.2, 0.35, 1.0);
    if (isGlass) return vec3(0.4, 0.55, 0.65) * min(1.0, strongest * 1.3);
    return c / max(strongest, 0.001) * clamp(0.3 + strongest * 1.15, 0.0, 0.95);
  }
  // day: light surfaces with a trace of their hue, dark blue lines
  if (isLine) return vec3(0.08, 0.17, 0.38) * clamp(strongest * 1.4, 0.4, 1.0);
  vec3 grey = vec3(clamp(0.66 + luma * 2.6, 0.0, 0.96));
  return mix(grey, grey * (c / max(strongest, 0.001)), 0.1);
}
`;


/**
 * The realistic look (index 4): surfaces get procedural materials (wood planks, tiles, plaster, roof tiles, grass) with
 * bump from the pattern's height, lit by a sun and a sky. No texture files and no UVs: everything is computed from the
 * world position, so it works on every wall, floor and roof the plan can make, and costs no download.
 */
const REAL_FUNCTION = /* glsl */ `
varying vec3 vNfWorld;
float nfHash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float nfNoise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(nfHash(i), nfHash(i + vec2(1.0, 0.0)), f.x), mix(nfHash(i + vec2(0.0, 1.0)), nfHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float nfFbm(vec2 p) { float s = 0.0; float a = 0.5; for (int i = 0; i < 4; i++) { s += a * nfNoise(p); p *= 2.03; a *= 0.5; } return s; }
// a surface: its colour in .rgb and its height (for the bump) in .a
vec4 nfPlanks(vec2 p, vec3 tint) {
  float row = floor(p.y / 0.14);
  float u = p.x + nfHash(vec2(row, 3.0)) * 5.0;
  float plank = floor(u / 1.3);
  float id = nfHash(vec2(row, plank));
  vec3 wood = mix(vec3(0.62, 0.43, 0.26), vec3(0.42, 0.27, 0.15), id) * mix(vec3(1.0), tint * 1.8, 0.3);
  float grain = nfFbm(vec2(u * 1.6, p.y * 34.0 + id * 12.0));
  wood *= 0.78 + 0.4 * grain;
  float gy = abs(fract(p.y / 0.14) - 0.5) * 0.14;
  float gx = abs(fract(u / 1.3) - 0.5) * 1.3;
  float groove = 1.0 - smoothstep(0.0, 0.0035, min(0.07 - gy, 0.65 - gx));
  return vec4(wood * (1.0 - 0.55 * groove), (grain - 0.5) * 0.15 - groove * 0.5);
}
vec4 nfTiles(vec2 p, vec3 tint) {
  vec2 cell = p / 0.6;
  vec2 f = abs(fract(cell) - 0.5) * 0.6;
  float grout = 1.0 - smoothstep(0.0, 0.004, 0.294 - max(f.x, f.y));
  float id = nfHash(floor(cell));
  vec3 stone = mix(vec3(0.74, 0.73, 0.71), tint * 1.7, 0.35) * (0.9 + 0.12 * id) * (0.94 + 0.1 * nfFbm(p * 9.0));
  return vec4(mix(stone, vec3(0.42, 0.41, 0.4), grout), -grout * 0.6 + nfFbm(p * 14.0) * 0.04);
}
vec4 nfGrass(vec2 p, vec3 tint) {
  float a = nfFbm(p * 3.0); float b = nfFbm(p * 28.0);
  vec3 grass = mix(vec3(0.2, 0.36, 0.12), vec3(0.36, 0.5, 0.18), a) * (0.8 + 0.4 * b);
  return vec4(grass, b * 0.12);
}
vec4 nfPlaster(vec2 p, vec3 tint) {
  float n = nfFbm(p * 22.0); float m = nfFbm(p * 3.0);
  vec3 plaster = mix(vec3(0.9, 0.88, 0.84), tint * 1.9, 0.18) * (0.93 + 0.08 * n) * (0.96 + 0.06 * m);
  return vec4(plaster, n * 0.05);
}
vec4 nfRoofTiles(vec2 p, vec3 tint) {
  float row = floor(p.y / 0.13);
  float u = p.x + (mod(row, 2.0)) * 0.1;
  vec2 f = vec2(fract(u / 0.2), fract(p.y / 0.13));
  float id = nfHash(vec2(floor(u / 0.2), row));
  vec3 clay = mix(vec3(0.5, 0.2, 0.14), vec3(0.34, 0.15, 0.11), id) * mix(vec3(1.0), tint * 2.0, 0.25) * (0.88 + 0.24 * nfFbm(p * 18.0));
  float edge = smoothstep(0.0, 0.28, f.y);
  float side = smoothstep(0.0, 0.05, f.x) * smoothstep(0.0, 0.05, 1.0 - f.x);
  return vec4(clay * (0.55 + 0.45 * edge) * (0.7 + 0.3 * side), edge * 0.12 + (1.0 - side) * -0.08);
}
vec4 nfConcrete(vec2 p, vec3 tint) {
  float n = nfFbm(p * 8.0);
  return vec4(mix(vec3(0.62, 0.62, 0.6), tint * 1.4, 0.15) * (0.85 + 0.25 * n), n * 0.06);
}
vec3 nfBump(vec3 P, vec3 n, float h, float k) {
  vec3 dpx = dFdx(P); vec3 dpy = dFdy(P);
  float dhx = dFdx(h); float dhy = dFdy(h);
  vec3 r1 = cross(dpy, n); vec3 r2 = cross(n, dpx);
  float det = dot(dpx, r1);
  vec3 g = sign(det) * (dhx * r1 + dhy * r2);
  return normalize(abs(det) * n - k * g);
}
// kind: 0 floor, 1 wall (and roof), 2 frame
vec3 nfReal(vec3 c, int kind) {
  vec3 P = vNfWorld;
  vec3 n = normalize(cross(dFdx(P), dFdy(P)));
  vec3 view = normalize(cameraPosition - P);
  if (dot(n, view) < 0.0) n = -n;
  float strongest = max(c.r, max(c.g, c.b));
  float weakest = min(c.r, min(c.g, c.b));
  vec3 tint = c / max(strongest, 0.001);
  float saturation = strongest > 0.0 ? (strongest - weakest) / strongest : 0.0;
  vec4 s;
  float shiny = 0.0;
  if (kind == 2) {
    s = vec4(c * 2.4 + 0.12, 0.0);
  } else if (kind == 0) {
    if (c.g > c.r * 1.12 && c.g > c.b * 1.12) s = nfGrass(P.xz, tint);
    else if (saturation < 0.16) s = nfTiles(P.xz, tint);
    else { s = nfPlanks(P.xz, tint); shiny = 0.18; }
  } else {
    vec2 q;
    if (n.y > 0.94) { s = nfConcrete(P.xz, tint); }
    else if (n.y > 0.22) {
      // a roof slope: tiles in rows up the slope
      vec2 along = normalize(n.xz + vec2(0.0001));
      q = vec2(dot(P.xz, vec2(-along.y, along.x)), dot(P.xz, along) / max(n.y, 0.3) * 0.9 + P.y * 0.2);
      s = nfRoofTiles(q, tint);
    } else {
      q = abs(n.x) > abs(n.z) ? vec2(P.z, P.y) : vec2(P.x, P.y);
      s = nfPlaster(q, tint);
    }
  }
  vec3 nb = kind == 2 ? n : nfBump(P, n, s.a, kind == 1 ? 0.025 : 0.02);
  vec3 sun = normalize(vec3(0.45, 0.8, 0.35));
  float ndl = max(dot(nb, sun), 0.0);
  vec3 sky = mix(vec3(0.3, 0.28, 0.26), vec3(0.62, 0.72, 0.86), nb.y * 0.5 + 0.5);
  vec3 lit = s.rgb * (sky * 0.85 + vec3(1.0, 0.94, 0.84) * ndl * 0.95);
  vec3 hv = normalize(sun + view);
  lit += shiny * vec3(1.0, 0.95, 0.88) * pow(max(dot(nb, hv), 0.0), 36.0) * ndl;
  // a gentle filmic curve keeps the bright plaster from clipping
  return lit / (1.0 + lit * 0.35);
}
`;

/**
 * Maps a material's colours to the look in `uniform` (0 neon, 1 blueprint, 2 day, 3 own, 4 real). Composes with an existing onBeforeCompile (the
 * fold patch, say). With `line`, edges are mapped as lines.
 */
export function themed<T extends Material>(material: T, uniform: ThemeUniform, line = false, glass = false, surface: "floor" | "wall" | "frame" | "" = ""): T {
  const previous = material.onBeforeCompile.bind(material);
  const previousKey = material.customProgramCacheKey.bind(material);
  const kind = surface === "floor" ? 0 : surface === "wall" ? 1 : 2;
  material.onBeforeCompile = (shader, renderer) => {
    previous(shader, renderer);
    Object.assign(shader.uniforms, { uTheme: uniform, ...(uniform.look ?? { uAccent: accentUniform, uAccentOn: accentOnUniform, ...ownUniforms }) });
    // the realistic look needs the world position of every point: only the surfaces that get its materials carry it
    if (surface) {
      shader.vertexShader = shader.vertexShader
        .replace("#include <common>", "#include <common>\nvarying vec3 vNfWorld;")
        .replace("#include <project_vertex>", "#include <project_vertex>\n  vNfWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;");
    }
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", `#include <common>\n${LOOK_FUNCTION}${surface ? REAL_FUNCTION : ""}`)
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>\n  vec3 nfRaw = diffuseColor.rgb;\n  diffuseColor.rgb = nfThemed(diffuseColor.rgb, ${line}, ${glass});${surface ? `\n  if (uTheme == 4) diffuseColor.rgb = nfReal(nfRaw, ${kind});` : ""}`,
      );
  };
  material.customProgramCacheKey = () => `${previousKey()}-themed-${line ? "l" : glass ? "g" : "s"}${surface}`;
  return material;
}

/** Additive glow vanishes on light backgrounds, so lines are drawn normally in the day look (and an own look on a light background). */
export const lineBlending = (theme: Theme, own: OwnLook = {}): typeof AdditiveBlending | typeof NormalBlending =>
  lightStage(theme, own) ? NormalBlending : AdditiveBlending;
