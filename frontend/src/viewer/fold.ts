// Shader patch that shows or hides wall parts on the GPU. Geometry carries a "fold" attribute (see
// build.ts); per floor, one bit mask says which wall buckets stand (the others are cut) and another
// which buckets are drawn as glass. Hidden vertices are moved outside the clip volume, so their
// triangles and lines are dropped before rasterising.
//
// Roles: "plain" (lines, window and door parts) only follows standing/cut; "solid" (walls) also leaves
// out glass buckets; "glass" draws only the wall parts of glass buckets, as tinted glass.
//
// The sloped view lowers every wall part (not furniture) to a plane that leans away from the camera: low on the near
// side, full height on the far side. Painted wall parts (fold value + 128) keep their own colour in every look.

import type { Material, Vector2, Vector4 } from "three";

export interface FoldMask {
  value: number;
}

export interface FoldMasks {
  standing: FoldMask;
  glass: FoldMask;
  /**
   * The sloped view: x, z = the direction away from the camera, then the plan distance along it where the walls are lowest
   * and where they are full height; and the lowest and the highest wall top (floor coordinates). Off while the first two are 0.
   */
  slope?: { value: Vector4 };
  slopeY?: { value: Vector2 };
  /** How opaque glass walls are (0 … 1, default 0.2); one object shared by every floor, so one setting changes them all. */
  glassAlpha?: { value: number };
}

export type FoldRole = "plain" | "solid" | "glass";

export function makeFoldable<T extends Material>(material: T, masks: FoldMasks, role: FoldRole = "plain"): T {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uStanding = masks.standing;
    shader.uniforms.uGlass = masks.glass;
    shader.uniforms.uSlope = masks.slope ?? { value: { x: 0, y: 0, z: 0, w: 0 } };
    shader.uniforms.uSlopeY = masks.slopeY ?? { value: { x: 0, y: 0 } };
    shader.uniforms.uGlassAlpha = masks.glassAlpha ?? { value: 0.2 };
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nattribute float fold;\nuniform int uStanding;\nuniform int uGlass;\nuniform vec4 uSlope;\nuniform vec2 uSlopeY;\nvarying float vNfPaint;")
      .replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
      vNfPaint = fold > 127.5 ? 1.0 : 0.0;
      if (fold > -0.5 && (uSlope.x != 0.0 || uSlope.y != 0.0) && int(mod(fold, 128.0) + 0.5) / 16 != 4) {
        float nfAlong = clamp((dot(transformed.xz, uSlope.xy) - uSlope.z) / max(uSlope.w - uSlope.z, 0.001), 0.0, 1.0);
        transformed.y = min(transformed.y, mix(uSlopeY.x, uSlopeY.y, nfAlong));
      }`,
      )
      .replace(
      "#include <project_vertex>",
      `#include <project_vertex>
      {
        bool nfShow = ${role === "glass" ? "false" : "true"};
        if (fold > -0.5) {
          int nfFold = int(mod(fold, 128.0) + 0.5);
          int nfKind = nfFold / 16;
          int nfBucket = nfFold - nfKind * 16;
          bool nfStanding = ((uStanding >> nfBucket) & 1) == 1;
          bool nfGlass = ((uGlass >> nfBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          nfShow = nfKind == 0 || nfKind == 4 ? nfStanding : nfKind == 1 || nfKind == 3 ? !nfStanding : true;
          bool nfWall = nfKind == 0 || nfKind == 2;
          ${role === "solid" ? "if (nfGlass && nfWall) nfShow = false;" : ""}
          ${role === "glass" ? "nfShow = nfShow && nfGlass && nfWall;" : ""}
        }
        if (!nfShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`,
    );
    shader.fragmentShader = shader.fragmentShader.replace("#include <common>", "#include <common>\nvarying float vNfPaint;\nuniform float uGlassAlpha;");
    if (role !== "glass") {
      // painted walls: their own colour, after the look has mapped everything else (see theme.ts)
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <color_fragment>",
        `#include <color_fragment>
        #ifdef USE_COLOR
        if (vNfPaint > 0.5) diffuseColor.rgb = vColor.rgb;
        #endif`,
      );
    }
    if (role === "glass") {
      // dark walls become a faint cyan-tinted glass, as opaque as the setting says
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <color_fragment>",
        `#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= uGlassAlpha;`,
      );
    }
  };
  material.customProgramCacheKey = () => `nf-fold-${role}`;
  return material;
}
