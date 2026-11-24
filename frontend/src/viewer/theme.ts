// The looks of the 3D view. Geometry keeps its neon colours; a small shader patch maps them to the chosen look, so switching is
// instant and nothing has to be rebuilt. Signal colours (lit lamps, open windows, glowing screens) are bright and saturated and
// stay as they are in every look.

import { SHADOW_GLSL, shadowUniforms } from "./scene/sun-shadow.ts";
import { AdditiveBlending, LinearMipmapLinearFilter, NormalBlending, RepeatWrapping, SRGBColorSpace, TextureLoader, Vector3, type Material, type Texture } from "three";
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


/**
 * Photo textures of the realistic look (CC0, Poly Haven), shipped beside the bundles as textures/<name>.jpg. They load the first time
 * the look is shown; until a file has arrived, or when it is missing, the look keeps its procedural material for that surface.
 */
export const REAL_TEXTURES = ["wood", "tile", "plaster", "roof", "grass", "concrete"] as const;
export const realTextureUniforms = {
  uTexWood: { value: null as Texture | null },
  uTexTile: { value: null as Texture | null },
  uTexPlaster: { value: null as Texture | null },
  uTexRoof: { value: null as Texture | null },
  uTexGrass: { value: null as Texture | null },
  uTexConcrete: { value: null as Texture | null },
  /** 1 where the texture has arrived: wood, tile, plaster */
  uTexA: { value: new Vector3() },
  /** roof, grass, concrete */
  uTexB: { value: new Vector3() },
};
const textureSlots = { wood: ["uTexWood", "x", "A"], tile: ["uTexTile", "y", "A"], plaster: ["uTexPlaster", "z", "A"], roof: ["uTexRoof", "x", "B"], grass: ["uTexGrass", "y", "B"], concrete: ["uTexConcrete", "z", "B"] } as const;
let texturesRequested = false;

/** Starts loading the photo textures (once); `onLoad` runs after each one so the view can draw again. */
export function loadRealTextures(onLoad: () => void, base: string | URL = import.meta.url): void {
  if (texturesRequested) return;
  texturesRequested = true;
  const loader = new TextureLoader();
  for (const name of REAL_TEXTURES) {
    const [uniform, channel, set] = textureSlots[name];
    loader.load(
      new URL(`./textures/${name}.jpg`, base).href,
      (texture) => {
        texture.wrapS = texture.wrapT = RepeatWrapping;
        texture.colorSpace = SRGBColorSpace;
        texture.minFilter = LinearMipmapLinearFilter;
        texture.anisotropy = 8;
        realTextureUniforms[uniform].value = texture;
        realTextureUniforms[set === "A" ? "uTexA" : "uTexB"].value[channel] = 1;
        onLoad();
      },
      undefined,
      () => undefined,
    );
  }
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
  // signal colours keep their colour (but not unpainted neon-blue in realistic/architectural themes)
  if (!isLine && strongest > 0.45 && saturation > 0.45 && !(uTheme >= 4 && c.b > c.r * 1.15 && c.b > c.g * 1.08)) return c;
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
    if (isGlass) return vec3(0.72, 0.80, 0.86) * clamp(0.6 + strongest * 0.8, 0.55, 0.95);
    if (c.b > c.r * 1.15 && c.b > c.g * 1.08) {
      return mix(vec3(0.24, 0.23, 0.22), vec3(0.86, 0.84, 0.80), smoothstep(0.06, 0.36, strongest));
    }
    return c / max(strongest, 0.001) * clamp(0.3 + strongest * 1.15, 0.0, 0.95);
  }
  if (uTheme == 5) {
    // nordic: warm Scandinavian daylight, natural contrast, keeping custom paint & furniture colours
    if (isLine) return vec3(0.24, 0.23, 0.22) * clamp(strongest * 1.25, 0.35, 1.0);
    if (isGlass) return vec3(0.5, 0.64, 0.74) * min(1.0, strongest * 1.2);
    if (saturation > 0.2 && !(c.b > c.r * 1.15 && c.b > c.g * 1.08)) return c / max(strongest, 0.001) * clamp(0.28 + strongest * 1.4, 0.15, 0.9);
    vec3 warm = mix(vec3(0.58, 0.53, 0.46), vec3(0.84, 0.81, 0.76), clamp(luma * 4.5, 0.0, 1.0));
    return mix(warm, warm * (c / max(strongest, 0.001)), 0.22);
  }
  if (uTheme == 6) {
    // warm_evening: cozy warm dark architectural look, keeping custom paint & furniture colours
    if (isLine) return vec3(0.76, 0.64, 0.48) * clamp(strongest * 1.1, 0.3, 1.0);
    if (isGlass) return vec3(0.58, 0.46, 0.32) * min(1.0, strongest * 1.1);
    if (saturation > 0.2 && !(c.b > c.r * 1.15 && c.b > c.g * 1.08)) return c / max(strongest, 0.001) * clamp(0.18 + strongest * 1.35, 0.1, 0.82);
    vec3 dusk = mix(vec3(0.14, 0.12, 0.10), vec3(0.38, 0.32, 0.26), clamp(luma * 4.5, 0.0, 1.0));
    return dusk;
  }
  if (uTheme == 7) {
    // minimal: architectural studio maquette with natural midtone contrast
    if (isLine) return vec3(0.28, 0.27, 0.25) * clamp(strongest * 1.25, 0.35, 1.0);
    if (isGlass) return vec3(0.55, 0.6, 0.65) * min(1.0, strongest * 1.15);
    if (saturation > 0.2 && !(c.b > c.r * 1.15 && c.b > c.g * 1.08)) return c / max(strongest, 0.001) * clamp(0.24 + strongest * 1.35, 0.12, 0.86);
    return mix(vec3(0.54, 0.52, 0.49), vec3(0.80, 0.78, 0.74), clamp(luma * 4.5, 0.0, 1.0));
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
${SHADOW_GLSL}
varying vec2 vNfTile;
uniform sampler2D uTexWood; uniform sampler2D uTexTile; uniform sampler2D uTexPlaster;
uniform sampler2D uTexRoof; uniform sampler2D uTexGrass; uniform sampler2D uTexConcrete;
uniform vec3 uTexA; uniform vec3 uTexB;
// a photo texture laid on the world: p in metres, one tile is "size" metres; the height for the bump comes from its brightness
vec4 nfPhoto(sampler2D t, vec2 p, float size, vec3 tint, float tintAmount, float contrast) {
  vec3 col = texture2D(t, p / size).rgb;
  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(col, col * tint * 1.8, tintAmount);
  return vec4(col, (lum - 0.5) * contrast);
}
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
vec4 nfHerringbone(vec2 p) {
  vec2 q = vec2(p.x + p.y, p.x - p.y) * 1.8;
  vec2 cell = floor(q); vec2 f = fract(q);
  float alt = mod(cell.x + cell.y, 2.0);
  float id = nfHash(cell);
  float grain = nfFbm(alt > 0.5 ? vec2(q.x * 2.0, q.y * 18.0 + id * 9.0) : vec2(q.y * 2.0, q.x * 18.0 + id * 9.0));
  vec3 wood = mix(vec3(0.70, 0.52, 0.34), vec3(0.50, 0.35, 0.20), id) * (0.82 + 0.35 * grain);
  float edge = 1.0 - smoothstep(0.0, 0.03, min(min(f.x, 1.0 - f.x), min(f.y, 1.0 - f.y)));
  return vec4(wood * (1.0 - 0.4 * edge), (grain - 0.5) * 0.12 - edge * 0.35);
}
vec4 nfTiles(vec2 p, vec3 tint, float sz) {
  vec2 cell = p / sz;
  vec2 f = abs(fract(cell) - 0.5) * sz;
  float grout = 1.0 - smoothstep(0.0, 0.004, sz * 0.49 - max(f.x, f.y));
  float id = nfHash(floor(cell));
  vec3 stone = mix(vec3(0.74, 0.73, 0.71), tint * 1.7, 0.35) * (0.9 + 0.12 * id) * (0.94 + 0.1 * nfFbm(p * 9.0));
  return vec4(mix(stone, vec3(0.42, 0.41, 0.4), grout), -grout * 0.6 + nfFbm(p * 14.0) * 0.04);
}
vec4 nfMarble(vec2 p) {
  vec2 cell = p / 0.8;
  vec2 f = abs(fract(cell) - 0.5) * 0.8;
  float grout = 1.0 - smoothstep(0.0, 0.003, 0.395 - max(f.x, f.y));
  float v = abs(sin(p.x * 2.4 + p.y * 1.8 + nfFbm(p * 2.2) * 4.5));
  float vein = smoothstep(0.86, 1.0, v);
  vec3 col = mix(vec3(0.92, 0.91, 0.89), vec3(0.56, 0.58, 0.61), vein * 0.55);
  return vec4(mix(col, vec3(0.68, 0.67, 0.65), grout), -grout * 0.25);
}
vec4 nfTerrazzo(vec2 p) {
  float a = nfHash(floor(p * 24.0));
  float b = nfHash(floor(p * 14.0 + 7.3));
  vec3 base = vec3(0.84, 0.82, 0.78) * (0.95 + 0.08 * nfFbm(p * 6.0));
  vec3 fleck = a > 0.88 ? vec3(0.32, 0.30, 0.28) : (b > 0.86 ? vec3(0.68, 0.50, 0.38) : (a < 0.1 ? vec3(0.48, 0.54, 0.52) : base));
  return vec4(fleck, 0.02);
}
vec4 nfCarpet(vec2 p) {
  float weave = nfFbm(p * 42.0) * 0.5 + nfNoise(p * 90.0) * 0.5;
  vec3 col = mix(vec3(0.52, 0.50, 0.47), vec3(0.62, 0.60, 0.56), weave);
  return vec4(col, (weave - 0.5) * 0.14);
}
vec4 nfBrick(vec2 p, vec3 baseA, vec3 baseB, vec3 mortar) {
  float row = floor(p.y / 0.08);
  float u = p.x + mod(row, 2.0) * 0.12;
  vec2 f = vec2(fract(u / 0.24), fract(p.y / 0.08));
  float id = nfHash(vec2(floor(u / 0.24), row));
  float m = (1.0 - smoothstep(0.0, 0.04, min(f.x, 1.0 - f.x))) + (1.0 - smoothstep(0.0, 0.1, min(f.y, 1.0 - f.y)));
  m = clamp(m, 0.0, 1.0);
  vec3 col = mix(baseA, baseB, id) * (0.88 + 0.22 * nfFbm(p * 16.0));
  return vec4(mix(col, mortar, m), -m * 0.35 + nfNoise(p * 30.0) * 0.05);
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
  vec4 s;
  float shiny = 0.0;
  bool plant = kind == 1 && c.g > c.r * 1.08 && c.g > c.b * 1.08;
  if (kind == 2 || plant) {
    bool isNeon = c.b > c.r * 1.15 && c.b > c.g * 1.05;
    vec3 fc = isNeon
      ? mix(vec3(0.22, 0.20, 0.19), vec3(0.88, 0.86, 0.83), smoothstep(0.06, 0.35, strongest))
      : c * 2.4 + 0.12;
    s = kind == 2 ? vec4(fc, 0.0) : vec4(tint * clamp(0.32 + strongest * 1.4, 0.0, 0.85) * (0.9 + 0.2 * nfFbm(P.xz * 6.0 + P.y * 3.0)), 0.0);
  } else if (kind == 1 && vNfTile.y > 1.5) {
    // furniture: off TV/monitor screens (C.screen = 0x040507, linear ~0.0018) stay deep glossy black
    if (strongest < 0.0035) {
      s = vec4(0.018, 0.020, 0.025, 0.0);
      shiny = 0.55;
    } else {
    // default neon-blue pieces get a warm natural palette; custom-coloured pieces keep their hue
    int fm = int(vNfTile.x + 0.5);
    bool isNeonBlue = c.b > c.r * 1.08 && c.b > c.g * 1.04;
    vec3 baseCol = isNeonBlue
      ? mix(vec3(0.28, 0.25, 0.22), vec3(0.84, 0.81, 0.76), smoothstep(0.06, 0.34, strongest))
      : tint * clamp(0.18 + strongest * 2.2, 0.08, 0.94);
    vec2 fq = n.y > 0.7 ? P.xz : (abs(n.x) > abs(n.z) ? vec2(P.z, P.y) : vec2(P.x, P.y));
    if (fm == 0) {
      if (c.r > c.b * 1.25 && strongest > 0.12) fm = 1;
      else if (strongest > 0.3) fm = 6;
      else if (strongest < 0.09) fm = 5;
      else fm = 3;
    }
    if (fm == 1 || fm == 2) {
      float gr = nfFbm(vec2(fq.x * 2.5, fq.y * 28.0));
      vec3 wt = fm == 2 ? mix(vec3(0.84, 0.72, 0.54), baseCol, 0.45) : mix(vec3(0.56, 0.36, 0.20), baseCol, 0.55);
      s = vec4(wt * (0.84 + 0.3 * gr), (gr - 0.5) * 0.1);
      shiny = 0.18;
    } else if (fm == 3) {
      float wv = nfFbm(fq * 48.0) * 0.5 + nfNoise(fq * 95.0) * 0.5;
      s = vec4(baseCol * (0.9 + 0.18 * wv), (wv - 0.5) * 0.12);
    } else if (fm == 4) {
      float lr = nfNoise(fq * 55.0) * 0.6 + nfFbm(fq * 14.0) * 0.4;
      s = vec4(baseCol * (0.88 + 0.2 * lr), (lr - 0.5) * 0.08);
      shiny = 0.22;
    } else if (fm == 5) {
      float br = nfNoise(vec2(fq.x * 120.0, fq.y * 6.0));
      s = vec4(baseCol * (0.92 + 0.12 * br), br * 0.03);
      shiny = 0.48;
    } else if (fm == 6) {
      s = vec4(baseCol, 0.0);
      shiny = 0.36;
    } else if (fm == 7) {
      float vn = smoothstep(0.84, 1.0, abs(sin(fq.x * 3.0 + fq.y * 2.2 + nfFbm(fq * 2.5) * 4.0)));
      s = vec4(mix(baseCol, baseCol * 0.65, vn * 0.5), 0.0);
      shiny = 0.32;
    } else {
      float rt = abs(sin(fq.x * 65.0)) * abs(sin(fq.y * 65.0));
      s = vec4(mix(vec3(0.72, 0.56, 0.36), baseCol, 0.4) * (0.8 + 0.3 * rt), (rt - 0.5) * 0.18);
    }
    }
  } else if (kind == 0) {
    int fm = int(vNfTile.y * 4.0 + vNfTile.x + 0.5);
    if (c.g > c.r * 1.12 && c.g > c.b * 1.12) s = uTexB.y > 0.5 ? nfPhoto(uTexGrass, P.xz, 2.4, tint, 0.0, 0.5) * vec4(1.15, 1.15, 1.0, 1.0) : nfGrass(P.xz, tint);
    else if (fm == 1) { s = uTexA.x > 0.5 ? nfPhoto(uTexWood, P.xz, 1.3, vec3(0.9, 0.82, 0.68), 0.5, 0.12) * vec4(1.25, 1.22, 1.15, 1.0) : nfPlanks(P.xz, vec3(0.85, 0.72, 0.55)); shiny = 0.14; }
    else if (fm == 2) { s = uTexA.y > 0.5 ? nfPhoto(uTexTile, P.xz, 2.4, tint, 0.1, 0.12) : nfTiles(P.xz, tint, 0.6); shiny = 0.12; }
    else if (fm == 3) { s = nfHerringbone(P.xz); shiny = 0.2; }
    else if (fm == 4) { s = nfCarpet(P.xz); }
    else if (fm == 5) { s = nfTiles(P.xz, vec3(0.45, 0.47, 0.50), 0.75) * vec4(0.82, 0.84, 0.86, 1.0); }
    else if (fm == 6) { s = uTexB.z > 0.5 ? nfPhoto(uTexConcrete, P.xz, 2.4, tint, 0.05, 0.12) : nfConcrete(P.xz, tint); }
    else if (fm == 7) { s = nfMarble(P.xz); shiny = 0.28; }
    else if (fm == 8) { s = nfTerrazzo(P.xz); shiny = 0.2; }
    else if (fm == 9) { s = nfPlanks(P.xz * vec2(0.85, 0.75), vec3(0.75, 0.70, 0.64)); shiny = 0.1; }
    else if (fm == 10) { s = nfBrick(P.xz, vec3(0.60, 0.30, 0.22), vec3(0.45, 0.22, 0.16), vec3(0.55, 0.52, 0.48)); }
    else if (fm == 11) { s = nfPlanks(P.xz * vec2(1.0, 1.3), vec3(0.62, 0.48, 0.34)); }
    else if (fm == 12) { float ck = nfHash(floor(P.xz * 26.0)); s = vec4(mix(vec3(0.64, 0.47, 0.31), vec3(0.50, 0.36, 0.23), ck) * (0.94 + 0.1 * nfFbm(P.xz * 12.0)), (ck - 0.5) * 0.04); shiny = 0.08; }
    else if (fm == 13) { s = nfPlanks(P.xz * vec2(0.9, 1.15), vec3(0.76, 0.66, 0.54)); shiny = 0.16; }
    else if (fm == 14) { float ln = nfFbm(P.xz * 14.0); s = vec4(mix(vec3(0.58, 0.60, 0.59), vec3(0.66, 0.68, 0.66), ln), (ln - 0.5) * 0.02); shiny = 0.08; }
    else if (fm == 15) { vec2 bq = floor(P.xz * 2.0); float dir = mod(bq.x + bq.y, 2.0); s = nfPlanks(dir > 0.5 ? P.xz : P.zx, vec3(0.72, 0.56, 0.38)); shiny = 0.2; }
    else { s = uTexA.x > 0.5 ? nfPhoto(uTexWood, P.xz, 1.3, tint, 0.25, 0.16) * vec4(1.1, 1.1, 1.1, 1.0) : nfPlanks(P.xz, tint); shiny = 0.18; }
  } else {
    vec2 q;
    if (n.y > 0.94) {
      // the tops of walls and slabs: clean, light edges that outline the rooms
      s = uTexB.z > 0.5 ? nfPhoto(uTexConcrete, P.xz, 2.4, tint, 0.0, 0.1) : nfConcrete(P.xz, tint);
      if (c.b >= c.g * 0.95) s.rgb = mix(s.rgb, vec3(0.93, 0.92, 0.9), 0.72);
    } else if (n.y > 0.22) {
      vec2 along = normalize(n.xz + vec2(0.0001));
      q = vec2(dot(P.xz, vec2(-along.y, along.x)), dot(P.xz, along) / max(n.y, 0.3) * 0.9 + P.y * 0.2);
      s = uTexB.x > 0.5 ? nfPhoto(uTexRoof, q, 1.3, tint, 0.45, 0.25) * vec4(1.35, 1.25, 1.2, 1.0) : nfRoofTiles(q, tint);
    } else {
      q = abs(n.x) > abs(n.z) ? vec2(P.z, P.y) : vec2(P.x, P.y);
      int wm = int(vNfTile.x + 0.5);
      if (wm == 1) s = nfBrick(q, vec3(0.62, 0.28, 0.20), vec3(0.46, 0.20, 0.15), vec3(0.76, 0.74, 0.70));
      else if (wm == 2) s = uTexB.z > 0.5 ? nfPhoto(uTexConcrete, q, 2.2, tint, 0.05, 0.12) : nfConcrete(q, tint);
      else if (wm == 3) s = nfPlanks(q.yx * vec2(1.0, 1.1), vec3(0.78, 0.62, 0.46));
      else if (wm == 4) s = nfBrick(q * 0.55, vec3(0.56, 0.54, 0.50), vec3(0.42, 0.40, 0.37), vec3(0.32, 0.31, 0.29));
      else if (wm == 5) { s = nfTiles(q, vec3(0.92, 0.92, 0.90), 0.3); shiny = 0.22; }
      else if (wm == 6) { float stripe = 0.96 + 0.04 * sin(q.x * 45.0); s = vec4(vec3(0.86, 0.84, 0.80) * stripe * (0.96 + 0.06 * nfFbm(q * 12.0)), 0.02); }
      else if (wm == 7) s = nfBrick(q * 0.65, vec3(0.28, 0.30, 0.33), vec3(0.20, 0.22, 0.25), vec3(0.16, 0.17, 0.19));
      else s = uTexA.z > 0.5 ? nfPhoto(uTexPlaster, q, 1.6, tint, 0.12, 0.05) * vec4(1.12, 1.12, 1.12, 1.0) : nfPlaster(q, tint);
    }
  }
  vec3 nb = (kind == 2 || plant) ? n : nfBump(P, n, s.a, kind == 1 ? 0.025 : 0.02);
  vec3 sun = normalize(vec3(0.45, 0.8, 0.35));
  float ndl = max(dot(nb, sun), 0.0);
  vec3 sky = mix(vec3(0.3, 0.28, 0.26), vec3(0.62, 0.72, 0.86), nb.y * 0.5 + 0.5);
  // sun shadows (quality above low): the sun's share is taken away where the house stands between the point and the sun
  float sunLit = ndl > 0.0 ? nfSunShadow(P, n) : 1.0;
  // the sky's share falls in corners, under shelves and deep in rooms (how much sky the point sees), never below 45 %
  float skyLit = mix(0.55, 1.0, nfSkyLight(P, n));
  vec3 lit = s.rgb * (sky * 0.85 * skyLit + vec3(1.0, 0.94, 0.84) * ndl * 0.95 * sunLit);
  vec3 hv = normalize(sun + view);
  lit += shiny * vec3(1.0, 0.95, 0.88) * pow(max(dot(nb, hv), 0.0), 36.0) * ndl;
  if (kind == 1 && vNfTile.y > 1.5) lit += s.rgb * pow(1.0 - max(dot(nb, view), 0.0), 2.4) * 0.12;
  // a gentle filmic curve keeps bright walls and furniture from clipping
  return lit / (1.0 + lit * 0.52);
}
vec3 nfLit(vec3 c) {
  vec3 P = vNfWorld;
  vec3 n = normalize(cross(dFdx(P), dFdy(P)));
  vec3 view = normalize(cameraPosition - P);
  if (dot(n, view) < 0.0) n = -n;
  float ndl = max(dot(n, normalize(vec3(0.45, 0.8, 0.35))), 0.0);
  float hemi = mix(0.62, 1.0, n.y * 0.5 + 0.5);
  return c * (hemi * 0.72 + ndl * 0.42);
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
    Object.assign(shader.uniforms, { uTheme: uniform, ...(surface ? { ...realTextureUniforms, ...shadowUniforms } : {}), ...(uniform.look ?? { uAccent: accentUniform, uAccentOn: accentOnUniform, ...ownUniforms }) });
    // the realistic look needs the world position of every point: only the surfaces that get its materials carry it
    if (surface) {
      const hasTile = surface === "floor" || surface === "wall";
      shader.vertexShader = shader.vertexShader
        .replace("#include <common>", `#include <common>\nvarying vec3 vNfWorld;\nvarying vec2 vNfTile;${hasTile ? "\nattribute vec2 tile;" : ""}`)
        .replace("#include <project_vertex>", `#include <project_vertex>\n  vNfWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;\n  vNfTile = ${hasTile ? "tile" : "vec2(0.0)"};`);
    }
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", `#include <common>\n${LOOK_FUNCTION}${surface ? REAL_FUNCTION : ""}`)
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>\n  vec3 nfRaw = diffuseColor.rgb;\n  diffuseColor.rgb = nfThemed(diffuseColor.rgb, ${line}, ${glass});${surface ? `\n  if (uTheme == 4) diffuseColor.rgb = nfReal(nfRaw, ${kind});\n  else if (uTheme >= 5) diffuseColor.rgb = nfLit(diffuseColor.rgb);` : ""}`,
      );
  };
  material.customProgramCacheKey = () => `${previousKey()}-themed-${line ? "l" : glass ? "g" : "s"}${surface}`;
  return material;
}

/**
 * Floor shadows (along walls, under furniture) in the realistic look: deeper and reaching further than in the other looks, which
 * gives the corners and the furniture the soft contact darkness of a rendered picture. Other looks are left as they are.
 */
export function deepenedShadow<T extends Material>(material: T, uniform: ThemeUniform): T {
  const previous = material.onBeforeCompile.bind(material);
  const previousKey = material.customProgramCacheKey.bind(material);
  material.onBeforeCompile = (shader, renderer) => {
    previous(shader, renderer);
    shader.uniforms.uTheme = uniform;
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", "#include <common>\nuniform int uTheme;")
      .replace("#include <color_fragment>", "#include <color_fragment>\n  if (uTheme == 4) diffuseColor.rgb = pow(diffuseColor.rgb, vec3(1.8));");
  };
  material.customProgramCacheKey = () => `${previousKey()}-deep-shadow`;
  return material;
}

/** Additive glow vanishes on light backgrounds, so lines are drawn normally in the day look (and an own look on a light background). */
export const lineBlending = (theme: Theme, own: OwnLook = {}): typeof AdditiveBlending | typeof NormalBlending =>
  lightStage(theme, own) ? NormalBlending : AdditiveBlending;
