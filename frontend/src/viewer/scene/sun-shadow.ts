// Sun shadows and sky darkening for the realistic look: the house is drawn from the sun and from eight directions of the sky into depth
// maps, and the realistic surfaces and the owned 3D models look up whether a point lies in the sun's shadow and how much sky it sees. The map is only redrawn when something in the house changed (a rebuild,
// floors moving apart, a door swinging), not every frame, so a still view costs nothing extra.

import { Box3, DepthTexture, Matrix4, NearestFilter, OrthographicCamera, UnsignedIntType, Vector3, WebGLRenderTarget, type Material, type Object3D, type Scene, type WebGLRenderer } from "three";

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
};

/** GLSL: nfSunShadow (1 lit … 0 in the sun's shadow, soft edge) and nfSkyLight (share of the sky a point sees, 0…1). */
export const SHADOW_GLSL = /* glsl */ `
uniform sampler2D uNfShadowMap; uniform mat4 uNfShadowMat; uniform float uNfShadowOn; uniform float uNfShadowTexel;
uniform sampler2D uNfSkyMap; uniform mat4 uNfSkyMat[${SKY_VIEWS}];
float nfSunShadow(vec3 p, vec3 n) {
  if (uNfShadowOn < 0.5) return 1.0;
  // pushed a little along the normal, so a surface does not shadow itself
  vec4 c = uNfShadowMat * vec4(p + n * 0.025, 1.0);
  vec3 q = c.xyz / c.w * 0.5 + 0.5;
  if (q.x <= 0.0 || q.x >= 1.0 || q.y <= 0.0 || q.y >= 1.0 || q.z >= 1.0) return 1.0;
  float lit = 0.0;
  // a wide, slightly turned grid: soft edges like the large sun of a rendered picture
  for (int i = -2; i <= 2; i++) for (int j = -2; j <= 2; j++) {
    vec2 o = vec2(float(i) + 0.5 * float(j), float(j) - 0.5 * float(i)) * uNfShadowTexel * 1.4;
    lit += q.z - 0.0015 <= texture2D(uNfShadowMap, q.xy + o).r ? 1.0 : 0.0;
  }
  return lit / 25.0;
}
float nfSkyLight(vec3 p, vec3 n) {
  if (uNfShadowOn < 0.5) return 1.0;
  float seen = 0.0;
  for (int k = 0; k < ${SKY_VIEWS}; k++) {
    // pushed well off the surface: the sky maps are coarse (a few centimetres per point), so a surface would darken itself
    vec4 c = uNfSkyMat[k] * vec4(p + n * 0.12, 1.0);
    vec3 q = c.xyz / c.w * 0.5 + 0.5;
    // the views lie side by side in one map, ${SKY_VIEWS / 2} across and 2 down; four samples each against blotches
    vec2 tile = vec2(mod(float(k), ${SKY_VIEWS / 2}.0), floor(float(k) / ${SKY_VIEWS / 2}.0));
    vec2 texel = uNfShadowTexel * 4.0 / vec2(${SKY_VIEWS / 2}.0, 2.0);
    for (int s = 0; s < 4; s++) {
      vec2 o = (vec2(float(s / 2), float(s - (s / 2) * 2)) - 0.5) * 1.5;
      vec2 uv = (tile + clamp(q.xy + o * texel * vec2(${SKY_VIEWS / 2}.0, 2.0), 0.002, 0.998)) / vec2(${SKY_VIEWS / 2}.0, 2.0);
      seen += q.z - 0.002 <= texture2D(uNfSkyMap, uv).r ? 0.25 : 0.0;
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
    this.target.depthTexture.minFilter = this.target.depthTexture.magFilter = NearestFilter;
    shadowUniforms.uNfShadowMap.value = this.target.depthTexture;
    shadowUniforms.uNfShadowTexel.value = 1 / size;
    const tile = size / 4;
    this.sky = new WebGLRenderTarget(tile * (SKY_VIEWS / 2), tile * 2, { depthBuffer: true });
    this.sky.depthTexture = new DepthTexture(tile * (SKY_VIEWS / 2), tile * 2, UnsignedIntType);
    this.sky.depthTexture.minFilter = this.sky.depthTexture.magFilter = NearestFilter;
    shadowUniforms.uNfSkyMap.value = this.sky.depthTexture;
  }

  /** Points the light camera from `direction` at the house and returns its view-projection matrix into `into`. */
  private aim(direction: Vector3, centre: Vector3, radius: number, into: Matrix4): void {
    this.camera.position.copy(centre).addScaledVector(direction, radius * 2);
    this.camera.lookAt(centre);
    this.camera.left = this.camera.bottom = -radius;
    this.camera.right = this.camera.top = radius;
    this.camera.near = 0.1;
    this.camera.far = radius * 4;
    this.camera.updateProjectionMatrix();
    this.camera.updateMatrixWorld();
    into.multiplyMatrices(this.camera.projectionMatrix, this.camera.matrixWorldInverse);
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
    const centre = box.getCenter(new Vector3());
    const radius = box.getSize(new Vector3()).length() / 2 + 0.5;
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
    this.aim(SUN_DIRECTION, centre, radius, shadowUniforms.uNfShadowMat.value);
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
      this.aim(d, centre, radius, shadowUniforms.uNfSkyMat.value[k]);
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
