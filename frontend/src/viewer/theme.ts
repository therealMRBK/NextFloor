// The looks of the 3D view. Geometry keeps its neon colours; a small shader patch maps them to the chosen look, so switching is
// instant and nothing has to be rebuilt. Signal colours (lit lamps, open windows, glowing screens) are bright and saturated and
// stay as they are in every look.

import { AdditiveBlending, NormalBlending, Vector3, type Material } from "three";
import { hexRgb, lightStage, THEMES, type OwnLook, type Theme } from "../themes.ts";

export type { Theme } from "../themes.ts";

export interface ThemeUniform {
  value: number;
}

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
export const ownUniforms = { uOwnDark: { value: new Vector3() }, uOwnLight: { value: new Vector3() }, uOwnLine: { value: new Vector3() } };

/** Puts a filled own look into the shaders; true when anything changed. */
export function setOwnLook(look: Required<OwnLook>): boolean {
  let changed = false;
  for (const [uniform, hex] of [
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
vec3 nfThemed(vec3 c, bool isLine) {
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
    // own look: the user's lines on a ramp from their dark to their light surface colour
    if (isLine) return uOwnLine * clamp(strongest * 1.3, 0.45, 1.0);
    return mix(uOwnDark, uOwnLight, clamp(luma * 5.0, 0.0, 1.0));
  }
  // day: light surfaces with a trace of their hue, dark blue lines
  if (isLine) return vec3(0.08, 0.17, 0.38) * clamp(strongest * 1.4, 0.4, 1.0);
  vec3 grey = vec3(clamp(0.66 + luma * 2.6, 0.0, 0.96));
  return mix(grey, grey * (c / max(strongest, 0.001)), 0.1);
}
`;

/**
 * Maps a material's colours to the look in `uniform` (0 neon, 1 blueprint, 2 day, 3 own). Composes with an existing onBeforeCompile (the
 * fold patch, say). With `line`, edges are mapped as lines.
 */
export function themed<T extends Material>(material: T, uniform: ThemeUniform, line = false): T {
  const previous = material.onBeforeCompile.bind(material);
  const previousKey = material.customProgramCacheKey.bind(material);
  material.onBeforeCompile = (shader, renderer) => {
    previous(shader, renderer);
    Object.assign(shader.uniforms, { uTheme: uniform, uAccent: accentUniform, uAccentOn: accentOnUniform, ...ownUniforms });
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", `#include <common>\n${LOOK_FUNCTION}`)
      .replace("#include <color_fragment>", `#include <color_fragment>\n  diffuseColor.rgb = nfThemed(diffuseColor.rgb, ${line});`);
  };
  material.customProgramCacheKey = () => `${previousKey()}-themed-${line ? "l" : "s"}`;
  return material;
}

/** Additive glow vanishes on light backgrounds, so lines are drawn normally in the day look (and an own look on a light background). */
export const lineBlending = (theme: Theme, own: OwnLook = {}): typeof AdditiveBlending | typeof NormalBlending =>
  lightStage(theme, own) ? NormalBlending : AdditiveBlending;
