// Sun shadows and sky darkening for the realistic look: the house is drawn from the sun and from eight directions of the sky into depth
// maps, and the realistic surfaces and the owned 3D models look up whether a point lies in the sun's shadow and how much sky it sees. The map is only redrawn when something in the house changed (a rebuild,
// floors moving apart, a door swinging), not every frame, so a still view costs nothing extra.

import { Box3, DepthTexture, LessEqualCompare, LinearFilter, Matrix4, OrthographicCamera, UnsignedIntType, Vector2, Vector3, WebGLRenderTarget, type Material, type Object3D, type Scene, type WebGLRenderer } from "three";

/** The direction towards the sun of the realistic look (the same as in its surface shader). */
export const SUN_DIRECTION = new Vector3(0.45, 0.8, 0.35).normalize();

/** Directions of the sky views for the soft "how much sky does a point see" darkening (ambient occlusion): eight around the
 * compass, 55° and 70° high in turn. Steeper views keep rooms from turning dark, flatter ones darken corners and under shelves. */
const SKY_VIEWS = 8;
export const SKY_DIRECTIONS = Array.from({ length: SKY_VIEWS }, (_, i) => {
  const azimuth = (i / SKY_VIEWS) * Math.PI * 2 + 0.2;
  const elevation = ((i % 2 ? 70 : 55) * Math.PI) / 180;
  return new Vector3(Math.cos(azimuth) * Math.cos(elevation), Math.sin(elevation), Math.sin(azimuth) * Math.cos(elevation));
});

/** Shared by every material that receives the shadow; `uNfShadowOn` is 0 outside the realistic look. */
export const shadowUniforms = {
  uNfShadowMap: { value: null as DepthTexture | null },
  uNfShadowMat: { value: new Matrix4() },
  uNfShadowOn: { value: 0 },
  uNfShadowTexel: { value: 1 / 2048 },
  uNfSkyMap: { value: null as DepthTexture | null },
  uNfSkyMat: { value: SKY_DIRECTIONS.map(() => new Matrix4()) },
  /** Map units per metre of each sky view and of the sun view (x and y), for edge widths in metres. */
  uNfSkyScale: { value: SKY_DIRECTIONS.map(() => new Vector2(0.05, 0.05)) },
  uNfSunScale: { value: new Vector2(0.05, 0.05) },
};

/**
 * GLSL: nfSunShadow (1 lit … 0 in the sun's shadow) and nfSkyLight (share of the sky a point sees, 0…1). The maps are compared by
 * the GPU (shadow samplers with linear filtering, so every lookup already blends four map points), and the lookups lie on a small
 * disc that is turned for every pixel: edges come out soft and grainy-smooth instead of in the map's square steps.
 */
export const SHADOW_GLSL = /* glsl */ `
uniform sampler2DShadow uNfShadowMap; uniform mat4 uNfShadowMat; uniform float uNfShadowOn; uniform float uNfShadowTexel;
uniform sampler2DShadow uNfSkyMap; uniform mat4 uNfSkyMat[${SKY_VIEWS}]; uniform vec2 uNfSkyScale[${SKY_VIEWS}]; uniform vec2 uNfSunScale;
const vec2 NF_DISC[12] = vec2[12](vec2(-0.326, -0.406), vec2(-0.840, -0.074), vec2(-0.696, 0.457), vec2(-0.203, 0.621), vec2(0.962, -0.195),
  vec2(0.473, -0.480), vec2(0.519, 0.767), vec2(0.185, -0.893), vec2(0.507, 0.064), vec2(0.896, 0.412), vec2(-0.322, -0.933), vec2(-0.792, -0.598));
mat2 nfTurn() {
  float a = 6.2831853 * fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
  return mat2(cos(a), sin(a), -sin(a), cos(a));
}
float nfSunShadow(vec3 p, vec3 n) {
  if (uNfShadowOn < 0.5) return 1.0;
  // pushed a little along the normal, so a surface does not shadow itself
  vec4 c = uNfShadowMat * vec4(p + n * 0.02, 1.0);
  vec3 q = c.xyz / c.w * 0.5 + 0.5;
  if (q.x <= 0.0 || q.x >= 1.0 || q.y <= 0.0 || q.y >= 1.0 || q.z >= 1.0) return 1.0;
  mat2 turn = nfTurn();
  float lit = 0.0;
  // a sun a little larger than the real one: about 6 cm of soft edge
  for (int i = 0; i < 12; i++) lit += texture(uNfShadowMap, vec3(q.xy + turn * NF_DISC[i] * uNfSunScale * 0.06, q.z - 0.0008));
  return lit / 12.0;
}
float nfSkyLight(vec3 p, vec3 n) {
  if (uNfShadowOn < 0.5) return 1.0;
  mat2 turn = nfTurn();
  float seen = 0.0;
  for (int k = 0; k < ${SKY_VIEWS}; k++) {
    // pushed off the surface by about two map points, so a surface does not darken itself
    vec4 c = uNfSkyMat[k] * vec4(p + n * 0.08, 1.0);
    vec3 q = c.xyz / c.w * 0.5 + 0.5;
    // the views lie side by side in one map, ${SKY_VIEWS / 2} across and 2 down
    vec2 tile = vec2(mod(float(k), ${SKY_VIEWS / 2}.0), floor(float(k) / ${SKY_VIEWS / 2}.0));
    // the sky is a wide light: each direction's shadow fades over half a metre, so the eight of them melt into one soft darkening
    // towards walls and corners instead of eight sharp bands
    for (int s = 0; s < 6; s++) {
      vec2 at = clamp(q.xy + turn * NF_DISC[s * 2 + k % 2] * uNfSkyScale[k] * 0.5, 0.002, 0.998);
      seen += texture(uNfSkyMap, vec3((tile + at) / vec2(${SKY_VIEWS / 2}.0, 2.0), q.z - 0.0015)) / 6.0;
    }
  }
  return seen / ${SKY_VIEWS}.0;
}
`;

export class SunShadow {
  private readonly target: WebGLRenderTarget;
  private readonly sky: WebGLRenderTarget;
  private readonly camera = new OrthographicCamera();
  private dirty = true;

  constructor(size: number) {
    this.target = new WebGLRenderTarget(size, size, { depthBuffer: true });
    this.target.depthTexture = new DepthTexture(size, size, UnsignedIntType);
    this.target.depthTexture.minFilter = this.target.depthTexture.magFilter = LinearFilter;
    this.target.depthTexture.compareFunction = LessEqualCompare;
    shadowUniforms.uNfShadowMap.value = this.target.depthTexture;
    shadowUniforms.uNfShadowTexel.value = 1 / size;
    const tile = (size * 3) / 8;
    this.sky = new WebGLRenderTarget(tile * (SKY_VIEWS / 2), tile * 2, { depthBuffer: true });
    this.sky.depthTexture = new DepthTexture(tile * (SKY_VIEWS / 2), tile * 2, UnsignedIntType);
    this.sky.depthTexture.minFilter = this.sky.depthTexture.magFilter = LinearFilter;
    this.sky.depthTexture.compareFunction = LessEqualCompare;
    shadowUniforms.uNfSkyMap.value = this.sky.depthTexture;
  }

  /**
   * Points the light camera from `direction` at the house and returns its view-projection matrix into `into`. The view is cut to the
   * house as seen from that direction (its box's corners), not to a circle around it, so a map point covers as little ground as it can.
   */
  private aim(direction: Vector3, box: Box3, into: Matrix4, scale: Vector2): void {
    const centre = box.getCenter(new Vector3());
    const radius = box.getSize(new Vector3()).length() / 2 + 0.5;
    this.camera.position.copy(centre).addScaledVector(direction, radius * 2);
    this.camera.lookAt(centre);
    this.camera.updateMatrixWorld();
    const local = new Box3();
    for (let i = 0; i < 8; i++) {
      const corner = new Vector3(i & 1 ? box.max.x : box.min.x, i & 2 ? box.max.y : box.min.y, i & 4 ? box.max.z : box.min.z);
      local.expandByPoint(corner.applyMatrix4(this.camera.matrixWorldInverse));
    }
    this.camera.left = local.min.x - 0.3;
    this.camera.right = local.max.x + 0.3;
    this.camera.bottom = local.min.y - 0.3;
    this.camera.top = local.max.y + 0.3;
    this.camera.near = Math.max(0.05, -local.max.z - 0.5);
    this.camera.far = -local.min.z + 0.5;
    this.camera.updateProjectionMatrix();
    into.multiplyMatrices(this.camera.projectionMatrix, this.camera.matrixWorldInverse);
    scale.set(1 / (this.camera.right - this.camera.left), 1 / (this.camera.top - this.camera.bottom));
  }

  /** Something in the house changed: draw the map again before the next frame. */
  markDirty(): void {
    this.dirty = true;
  }

  /** Redraws the maps when needed (true when it did). `root` holds the house; see-through and line objects cast no shadow. */
  update(renderer: WebGLRenderer, scene: Scene, root: Object3D): boolean {
    if (!this.dirty) return false;
    this.dirty = false;
    const box = new Box3().setFromObject(root);
    if (box.isEmpty()) return false;
    // only solid surfaces cast: hide glass, glow, lines, points and everything outside the house while the map is drawn
    const hidden: Object3D[] = [];
    scene.traverse((o) => {
      const m = (o as unknown as { material?: Material | Material[] }).material;
      const mats = Array.isArray(m) ? m : m ? [m] : [];
      const see = (o as { isLine?: boolean }).isLine || (o as { isPoints?: boolean }).isPoints || mats.some((x) => x.transparent || !x.depthWrite);
      if (o.visible && (see || (o !== root && !isInside(o, root) && mats.length))) {
        hidden.push(o);
        o.visible = false;
      }
    });
    const previousTarget = renderer.getRenderTarget();
    // drawn with the house's own materials, so walls the cut or sloped view lowers cast no shadow above their cut; the maps are
    // unbound meanwhile (a texture must not be read while it is drawn into)
    const maps = [shadowUniforms.uNfShadowMap.value, shadowUniforms.uNfSkyMap.value];
    const on = shadowUniforms.uNfShadowOn.value;
    shadowUniforms.uNfShadowMap.value = shadowUniforms.uNfSkyMap.value = null;
    shadowUniforms.uNfShadowOn.value = 0;
    const autoClear = renderer.autoClear;
    renderer.autoClear = false;
    this.aim(SUN_DIRECTION, box, shadowUniforms.uNfShadowMat.value, shadowUniforms.uNfSunScale.value);
    renderer.setRenderTarget(this.target);
    renderer.clear(true, true, false);
    renderer.render(scene, this.camera);
    // the sky views side by side in one map (viewport and scissor per tile)
    renderer.setRenderTarget(this.sky);
    renderer.clear(true, true, false);
    const tw = this.sky.width / (SKY_VIEWS / 2);
    const th = this.sky.height / 2;
    this.sky.scissorTest = true;
    SKY_DIRECTIONS.forEach((d, k) => {
      const x = (k % (SKY_VIEWS / 2)) * tw;
      const y = Math.floor(k / (SKY_VIEWS / 2)) * th;
      this.sky.viewport.set(x, y, tw, th);
      this.sky.scissor.set(x, y, tw, th);
      renderer.setRenderTarget(this.sky);
      this.aim(d, box, shadowUniforms.uNfSkyMat.value[k], shadowUniforms.uNfSkyScale.value[k]);
      renderer.render(scene, this.camera);
    });
    this.sky.viewport.set(0, 0, this.sky.width, this.sky.height);
    this.sky.scissorTest = false;
    renderer.autoClear = autoClear;
    renderer.setRenderTarget(previousTarget);
    [shadowUniforms.uNfShadowMap.value, shadowUniforms.uNfSkyMap.value] = maps;
    shadowUniforms.uNfShadowOn.value = on;
    for (const o of hidden) o.visible = true;
    return true;
  }

  dispose(): void {
    this.target.dispose();
    this.sky.dispose();
    shadowUniforms.uNfShadowMap.value = null;
    shadowUniforms.uNfSkyMap.value = null;
    shadowUniforms.uNfShadowOn.value = 0;
  }
}

function isInside(o: Object3D, root: Object3D): boolean {
  for (let p = o.parent; p; p = p.parent) if (p === root) return true;
  return false;
}
