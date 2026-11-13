// The materials of one floor. Every floor gets its own set so that its opacity can change without touching the others. Surfaces and
// lines pass through the look (neon, blueprint, day), and the ones that follow the cut view are made foldable.

import { AddEquation, AdditiveBlending, CustomBlending, NormalBlending, OneFactor, SrcAlphaFactor, ZeroFactor, DoubleSide, LineBasicMaterial, MeshBasicMaterial, MultiplyBlending, PointsMaterial, type CanvasTexture, type Material } from "three";
import { makeFoldable, type FoldMasks } from "../fold.ts";
import { deepenedShadow, lineBlending, ownGlass, themed, type Theme, type ThemeUniform } from "../theme.ts";
import type { OwnLook } from "../../themes.ts";

export interface FloorMaterials {
  floor: MeshBasicMaterial;
  pattern: MeshBasicMaterial;
  wall: MeshBasicMaterial;
  glassWall: MeshBasicMaterial;
  shadow: MeshBasicMaterial;
  lines: LineBasicMaterial;
  glow: MeshBasicMaterial;
  frames: MeshBasicMaterial;
  glass: MeshBasicMaterial;
  blinds: MeshBasicMaterial;
  lamps: MeshBasicMaterial;
  halos: PointsMaterial;
  cones: MeshBasicMaterial;
  screens: MeshBasicMaterial;
  /** See-through outdoor areas: one material per opacity, added while the floor is built; `base` is the opacity before the floor fades. */
  ghosts: { material: MeshBasicMaterial; base: number }[];
}

export interface MaterialInputs {
  mask: FoldMasks;
  look: ThemeUniform;
  theme: Theme;
  /** the own look's colours (a light background turns the line glow off) */
  own?: OwnLook;
  textures: { pattern: CanvasTexture; blinds: CanvasTexture; halo: CanvasTexture };
}

/** Shader patch for the floor pattern: picks the atlas tile per vertex and repeats it every metre. */
const PATTERN_VERTEX_DECLARATIONS = "#include <common>\nattribute vec2 tile;\nvarying vec2 vNfTile;";
const PATTERN_TILE_PASS = "#include <begin_vertex>\nvNfTile = tile;";
const PATTERN_SAMPLE = `#ifdef USE_MAP
        vec2 nfCell = fract(vMapUv);
        vec2 nfUv = (vNfTile + 0.004 + nfCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, nfUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`;

/** Additive floor pattern. */
export function patternMaterial(texture: CanvasTexture): MeshBasicMaterial {
  const material = new MeshBasicMaterial({ map: texture, transparent: true, blending: AdditiveBlending, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
  material.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader.replace("#include <common>", PATTERN_VERTEX_DECLARATIONS).replace("#include <begin_vertex>", PATTERN_TILE_PASS);
    shader.fragmentShader = shader.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec2 vNfTile;").replace("#include <map_fragment>", PATTERN_SAMPLE);
  };
  material.customProgramCacheKey = () => "nf-pattern";
  return material;
}

/** Glass in a colour of the user's own (own look, D#82): painted over what is behind it, where the stock glass adds its glow. */
export const PAINTED_GLASS = { blending: NormalBlending, opacity: 0.55 } as const;
export const GLOWING_GLASS = { blending: AdditiveBlending, opacity: 1 } as const;

/**
 * Additive light that leaves the canvas' own transparency alone. The canvas is see-through (the page shows behind the house), and
 * plain additive blending also adds the light's alpha: where no floor lies under a wedge or a halo (a camera outside the walls, a lamp in
 * the garden) the pixel turned opaque and its black fade-out edge showed as black instead of vanishing (#165). Colour is added as
 * before; the alpha of what is under it is kept.
 */
export const LIGHT_ONLY = { blending: CustomBlending, blendEquation: AddEquation, blendSrc: SrcAlphaFactor, blendDst: OneFactor, blendSrcAlpha: ZeroFactor, blendDstAlpha: OneFactor } as const;

/** A glowing, see-through material drawn on top of what is under it. */
const overlay = (extra: ConstructorParameters<typeof MeshBasicMaterial>[0] = {}) =>
  new MeshBasicMaterial({ vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false, ...extra });

export function makeFloorMaterials({ mask, look, theme, own, textures }: MaterialInputs): FloorMaterials {
  const solid = (extra: ConstructorParameters<typeof MeshBasicMaterial>[0] = {}) => new MeshBasicMaterial({ vertexColors: true, ...extra });
  const foldable = <T extends Material>(m: T, glass?: "solid" | "glass") => makeFoldable(m as never, mask, glass) as unknown as T;
  return {
    floor: themed(solid(), look, false, false, "floor"),
    pattern: patternMaterial(textures.pattern),
    wall: themed(foldable(solid(), "solid"), look, false, false, "wall"),
    glassWall: foldable(solid({ transparent: true, depthWrite: false }), "glass"),
    // the result is the floor colour times the vertex colour: white leaves the floor as it is
    shadow: deepenedShadow(solid({ blending: MultiplyBlending, premultipliedAlpha: true, transparent: true, depthWrite: false, side: DoubleSide, polygonOffset: true, polygonOffsetFactor: -1 }), look),
    lines: themed(foldable(new LineBasicMaterial({ vertexColors: true, transparent: true, blending: lineBlending(theme, own), depthWrite: false })), look, true),
    // light on floors and walls follows the cut and the glass walls like the walls themselves
    glow: foldable(overlay({ side: DoubleSide, polygonOffset: true, polygonOffsetFactor: -3 }), "solid"),
    frames: themed(foldable(solid({ side: DoubleSide })), look, false, false, "frame"),
    // window glass follows the look like the other surfaces (D#82)
    glass: themed(foldable(overlay({ side: DoubleSide, ...(ownGlass(theme, own ?? {}) ? PAINTED_GLASS : {}) })), look, false, true),
    blinds: themed(foldable(solid({ map: textures.blinds, side: DoubleSide })), look),
    lamps: themed(solid(), look),
    halos: new PointsMaterial({ map: textures.halo, size: 0.9, sizeAttenuation: true, vertexColors: true, transparent: true, ...LIGHT_ONLY, depthWrite: false }),
    cones: overlay({ side: DoubleSide, ...LIGHT_ONLY }),
    screens: overlay({ side: DoubleSide }),
    ghosts: [],
  };
}
