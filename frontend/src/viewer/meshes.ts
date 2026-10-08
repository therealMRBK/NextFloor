// Owned 3D models (binary glTF) shown instead of a pack item's simple parts.
//
// The files live on the user's Home Assistant, never in NextFloor. A model is loaded once per page and shared
// by all viewers; every placed item gets a light copy of its own, so its paint colour can differ.

import {
  Box3,
  Color,
  DirectionalLight,
  Group,
  HemisphereLight,
  Mesh,
  MeshStandardMaterial,
  PMREMGenerator,
  type BufferGeometry,
  type Material,
  type Object3D,
  type Texture,
  type WebGLRenderer,
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { toCreasedNormals } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { getMeshSource, markMeshReady } from "../packs.ts";

interface LoadedMesh {
  root: Object3D;
  /** Size of the model as it is (width, height, depth in metres). */
  size: [number, number, number];
}

const cache = new Map<string, Promise<LoadedMesh | null>>();
const loaded = new Map<string, LoadedMesh>();

/** Smooth shading with creases: the model comes without normals (they are cheap to recompute and keep the file small). */
const CREASE = (50 * Math.PI) / 180;

function prepare(root: Object3D): void {
  root.traverse((o) => {
    const mesh = o as Mesh;
    if (!mesh.isMesh) return;
    const g = mesh.geometry as BufferGeometry;
    const m = mesh.material as MeshStandardMaterial;
    const name = m.name ?? "";
    // paint: the body colour is swapped per item
    mesh.userData.paint = !!m.userData?.paint || /^Paint/.test(name);
    if (!g.getAttribute("normal")) {
      // the body is one smooth skin; everything else keeps its edges
      if (mesh.userData.paint) g.computeVertexNormals();
      else mesh.geometry = toCreasedNormals(g, CREASE);
    }
    // the loader flags models without normals as flat-shaded: ours get smooth ones below
    m.flatShading = false;
    const glass = /glass/i.test(name);
    m.metalness = mesh.userData.paint ? 0.55 : glass ? 0 : Math.min(m.metalness ?? 0, 0.4);
    m.roughness = mesh.userData.paint ? 0.28 : glass ? 0.05 : Math.max(m.roughness ?? 0.6, 0.45);
    if (glass) {
      m.transparent = true;
      m.depthWrite = false;
      m.opacity = Math.max(m.opacity, 0.9);
    }
  });
}

/** Load a model (once); false when the host has none or it is broken. */
export function loadMesh(id: string): Promise<boolean> {
  let p = cache.get(id);
  if (!p) {
    const source = getMeshSource();
    if (!source) return Promise.resolve(false);
    p = source(id)
      .then(
        (data) =>
          data &&
          new Promise<LoadedMesh | null>((resolve) => {
            new GLTFLoader().parse(
              data,
              "",
              (gltf) => {
                prepare(gltf.scene);
                const box = new Box3().setFromObject(gltf.scene);
                const size: [number, number, number] = [box.max.x - box.min.x, box.max.y - box.min.y, box.max.z - box.min.z];
                // feet on the floor, centred on its footprint
                gltf.scene.position.set(-(box.max.x + box.min.x) / 2, -box.min.y, -(box.max.z + box.min.z) / 2);
                const root = new Group();
                root.add(gltf.scene);
                loaded.set(id, { root, size });
                markMeshReady(id);
                resolve({ root, size });
              },
              () => resolve(null),
            );
          }),
      )
      .catch(() => null);
    cache.set(id, p);
  }
  return p.then((m) => !!m);
}

/** Forget models that could not be loaded, to try again (the host's login may have changed). */
export function retryMeshes(): void {
  for (const [id, p] of cache) if (!loaded.has(id)) void p.then(() => cache.delete(id));
}

export interface MeshPlacement {
  x: number;
  z: number;
  y: number;
  /** Turn around the vertical axis in degrees (as furniture.rotation). */
  rotation: number;
  mirror?: boolean;
  w: number;
  d: number;
  h: number;
  /** Colour of the body paint (hex like "#c01020"), or null for the model's own. */
  paint: string | null;
}

/** A copy of a loaded model for one placed item (null while it is not loaded). */
export function instantiateMesh(id: string, at: MeshPlacement): Group | null {
  const m = loaded.get(id);
  if (!m) return null;
  const root = m.root.clone(true);
  const own: Material[] = [];
  root.traverse((o) => {
    const mesh = o as Mesh;
    if (!mesh.isMesh) return;
    const mat = (mesh.material as MeshStandardMaterial).clone();
    if (mesh.userData.paint && at.paint) mat.color = new Color(at.paint);
    mesh.material = mat;
    own.push(mat);
  });
  const g = new Group();
  g.add(root);
  // the item's box is the model's: it stretches to the width, depth and height of the furniture
  g.scale.set((at.mirror ? -1 : 1) * (at.w / m.size[0]), at.h / m.size[1], at.d / m.size[2]);
  g.position.set(at.x, at.y, at.z);
  g.rotation.y = (-at.rotation * Math.PI) / 180;
  g.userData.own = own;
  return g;
}

/** Free the materials of a copy made by instantiateMesh (geometry and textures belong to the shared model). */
export function disposeMeshInstance(g: Object3D): void {
  for (const m of (g.userData.own ?? []) as Material[]) m.dispose();
}

/** Light and reflections for the models; the rest of the scene is unlit, so they only touch these. */
export function addMeshLighting(parent: Object3D, renderer: WebGLRenderer): { env: Texture; dispose: () => void } {
  const pmrem = new PMREMGenerator(renderer);
  const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();
  const sky = new HemisphereLight(0xffffff, 0x8a93a6, 0.9);
  const sun = new DirectionalLight(0xffffff, 1.6);
  sun.position.set(-4, 9, 6);
  parent.add(sky, sun);
  return {
    env,
    dispose: () => {
      env.dispose();
      sky.removeFromParent();
      sun.removeFromParent();
    },
  };
}

/** Set the reflection map on every material of a copy. */
export function applyEnvironment(g: Object3D, env: Texture): void {
  for (const m of (g.userData.own ?? []) as MeshStandardMaterial[]) {
    m.envMap = env;
    m.envMapIntensity = 0.9;
  }
}
