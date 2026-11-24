// Getting a 3D model you own ready for NextFloor, in the browser: a binary glTF is read, its parts are merged by material, turned so
// that the front points to +z, made lighter, the body paint is marked, and the result is written again as plain binary glTF without
// textures. This is what tools/prepare-model.mjs did by hand.

import {
  AmbientLight,
  Box3,
  BufferAttribute,
  BufferGeometry,
  Color,
  DirectionalLight,
  HemisphereLight,
  Matrix4,
  Mesh,
  MeshStandardMaterial,
  OrthographicCamera,
  Scene,
  Vector3,
  WebGLRenderer,
  type Material,
  type Object3D,
} from "three";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader.js";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { guessPaint, paintName, shareBudget, type MaterialSummary } from "./choices.ts";
import { decimate, triangleCount, type Mesh3 } from "./decimate.ts";

export interface ModelInfo {
  triangles: number;
  /** Width, height and depth in metres as the model comes. */
  size: [number, number, number];
  materials: MaterialSummary[];
  /** The materials that are probably the body paint. */
  paint: string[];
}

export interface PrepareOptions {
  /** Quarter turns about the vertical axis that bring the front to +z. */
  turns: 0 | 1 | 2 | 3;
  /** Names of the materials that are body paint. */
  paint: readonly string[];
  /** Most triangles the result may have. */
  maxTriangles: number;
}

/** What goes wrong when a file cannot be used, so the page can say it in words. */
export class ModelError extends Error {
  readonly reason: "not_glb" | "compressed" | "empty" | "unreadable";
  constructor(reason: ModelError["reason"], message: string) {
    super(message);
    this.reason = reason;
  }
}

const MAGIC = 0x46546c67; // "glTF"

const isGlb = (data: ArrayBuffer): boolean => data.byteLength >= 20 && new DataView(data).getUint32(0, true) === MAGIC;

async function parse(data: ArrayBuffer): Promise<Object3D> {
  if (isGlb(data)) {
    return new Promise((resolve, reject) => {
      new GLTFLoader().parse(
        data,
        "",
        (gltf) => resolve(gltf.scene),
        (error) => {
          const message = String((error as { message?: string })?.message ?? error);
          reject(/draco|meshopt|ktx/i.test(message) ? new ModelError("compressed", message) : new ModelError("unreadable", message));
        },
      );
    });
  }
  const head = new TextDecoder().decode(data.slice(0, Math.min(data.byteLength, 2048)));
  if (/<COLLADA\b/i.test(head)) {
    try {
      const dae = new ColladaLoader().parse(new TextDecoder().decode(data), "");
      if (!dae?.scene) throw new ModelError("unreadable", "empty COLLADA scene");
      return dae.scene;
    } catch (e) {
      throw e instanceof ModelError ? e : new ModelError("unreadable", String(e));
    }
  }
  if (/^\s*\{[\s\S]*"asset"\s*:/.test(head)) {
    return new Promise((resolve, reject) => {
      new GLTFLoader().parse(data, "", (gltf) => resolve(gltf.scene), (e) => reject(new ModelError("unreadable", String(e))));
    });
  }
  if (/^(?:#.*\r?\n|\s)*(?:mtllib|o\s|g\s|v\s)/m.test(head)) {
    try {
      return new OBJLoader().parse(new TextDecoder().decode(data));
    } catch (e) {
      throw new ModelError("unreadable", String(e));
    }
  }
  try {
    const geom = new STLLoader().parse(data);
    if (geom.getAttribute("position")?.count) {
      const s = new Scene();
      s.add(new Mesh(geom, new MeshStandardMaterial({ color: 0xb0b0b0 })));
      return s;
    }
  } catch {
    // not a valid STL
  }
  throw new ModelError("not_glb", "unsupported 3D model file (expected .glb, .gltf, .dae, .obj or .stl)");
}

/** One material's share of the model: its triangles with the placement of the parts already applied. */
interface Part {
  material: MeshStandardMaterial;
  mesh: Mesh3;
}

const asStandard = (m: Material): MeshStandardMaterial => (m instanceof MeshStandardMaterial ? m : Object.assign(new MeshStandardMaterial(), { color: (m as { color?: Color }).color?.clone() ?? new Color(0x888888), name: m.name, opacity: m.opacity, transparent: m.transparent }));

/** Every mesh of the scene in world coordinates, grouped by material. */
function collect(root: Object3D, extra: Matrix4): Part[] {
  root.updateMatrixWorld(true);
  const byMaterial = new Map<MeshStandardMaterial, { positions: number[]; indices: number[] }>();
  root.traverse((object) => {
    const mesh = object as Mesh;
    if (!mesh.isMesh) return;
    const geometry = mesh.geometry as BufferGeometry;
    const position = geometry.getAttribute("position");
    if (!position) return;
    const material = asStandard(Array.isArray(mesh.material) ? mesh.material[0] : mesh.material);
    const target = byMaterial.get(material) ?? { positions: [], indices: [] };
    byMaterial.set(material, target);
    const placement = new Matrix4().multiplyMatrices(extra, mesh.matrixWorld);
    const first = target.positions.length / 3;
    const v = new Vector3();
    for (let i = 0; i < position.count; i++) {
      v.fromBufferAttribute(position, i).applyMatrix4(placement);
      target.positions.push(v.x, v.y, v.z);
    }
    const index = geometry.getIndex();
    const count = index ? index.count : position.count;
    for (let i = 0; i < count; i++) target.indices.push(first + (index ? index.getX(i) : i));
  });
  return [...byMaterial].map(([material, g]) => ({ material, mesh: { positions: Float32Array.from(g.positions), indices: Uint32Array.from(g.indices) } }));
}

const surfaceArea = (m: Mesh3): number => {
  let area = 0;
  const [a, b, c] = [new Vector3(), new Vector3(), new Vector3()];
  for (let i = 0; i < m.indices.length; i += 3) {
    a.fromArray(m.positions, m.indices[i] * 3);
    b.fromArray(m.positions, m.indices[i + 1] * 3);
    c.fromArray(m.positions, m.indices[i + 2] * 3);
    area += b.sub(a).cross(c.sub(a)).length() / 2;
  }
  return area;
};

const lightness = (c: Color): number => 0.299 * c.r + 0.587 * c.g + 0.114 * c.b;

/** What is in the model: size, triangles, materials with their area, and a guess at the paint. */
export async function inspectModel(data: ArrayBuffer): Promise<ModelInfo> {
  const parts = collect(await parse(data), new Matrix4());
  if (parts.length === 0) throw new ModelError("empty", "the file has no 3D parts");
  const box = new Box3();
  for (const p of parts) box.union(new Box3().setFromArray(p.mesh.positions as unknown as number[]));
  const size = box.getSize(new Vector3());
  const materials = parts.map((p): MaterialSummary => ({ name: p.material.name || "material", area: surfaceArea(p.mesh), opacity: p.material.opacity, lightness: lightness(p.material.color) }));
  return { triangles: parts.reduce((n, p) => n + triangleCount(p.mesh), 0), size: [size.x, size.y, size.z], materials, paint: guessPaint(materials) };
}

/** The model lighter, turned and marked, as plain binary glTF. */
export async function prepareModel(data: ArrayBuffer, options: PrepareOptions): Promise<{ glb: ArrayBuffer; triangles: number }> {
  const turn = new Matrix4().makeRotationY((options.turns * Math.PI) / 2);
  const parts = collect(await parse(data), turn);
  if (parts.length === 0) throw new ModelError("empty", "the file has no 3D parts");
  const budgets = shareBudget(parts.map((p) => triangleCount(p.mesh)), options.maxTriangles);
  const scene = new Scene();
  let triangles = 0;
  parts.forEach((part, i) => {
    const light = decimate(part.mesh, budgets[i]);
    if (triangleCount(light) === 0) return;
    triangles += triangleCount(light);
    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new BufferAttribute(light.positions, 3));
    geometry.setIndex(new BufferAttribute(light.indices, 1));
    const name = part.material.name || "material";
    const isPaint = options.paint.includes(name);
    const material = new MeshStandardMaterial({ color: part.material.color.clone(), name: isPaint ? paintName(name) : name, metalness: part.material.metalness, roughness: part.material.roughness, opacity: part.material.opacity, transparent: part.material.opacity < 1 });
    if (isPaint) material.userData.paint = true;
    scene.add(new Mesh(geometry, material));
  });
  const glb = await new Promise<ArrayBuffer>((resolve, reject) => {
    new GLTFExporter().parse(scene, (result) => (result instanceof ArrayBuffer ? resolve(result) : reject(new ModelError("unreadable", "export gave no binary"))), (e) => reject(new ModelError("unreadable", String(e))), { binary: true });
  });
  return { glb, triangles };
}

/** A picture of a prepared model from the front right, with the paint in the given colour, as a PNG data URL. */
export async function previewModel(glb: ArrayBuffer, paint: string, size = 220): Promise<string> {
  const root = await parse(glb);
  const box = new Box3().setFromObject(root);
  const centre = box.getCenter(new Vector3());
  const extent = box.getSize(new Vector3());
  root.traverse((o) => {
    const mesh = o as Mesh;
    if (!mesh.isMesh) return;
    const material = mesh.material as MeshStandardMaterial;
    if (material.userData?.paint || /^Paint/.test(material.name)) material.color.set(paint);
    material.metalness = Math.min(material.metalness ?? 0, 0.5);
  });
  const scene = new Scene();
  const sun = new DirectionalLight(0xffffff, 1.6);
  sun.position.set(-4, 9, 6);
  scene.add(root, new AmbientLight(0xffffff, 0.5), new HemisphereLight(0xffffff, 0x667088, 1.1), sun);
  const half = Math.max(extent.x, extent.y, extent.z) * 0.75;
  const camera = new OrthographicCamera(-half, half, half, -half, 0.01, 100);
  camera.position.copy(centre).add(new Vector3(0.9, 0.7, 1.2).normalize().multiplyScalar(20));
  camera.lookAt(centre);
  const renderer = new WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: true });
  renderer.setSize(size, size, false);
  renderer.render(scene, camera);
  const url = renderer.domElement.toDataURL("image/png");
  renderer.dispose();
  scene.traverse((o) => {
    const mesh = o as Mesh;
    if (mesh.isMesh) mesh.geometry.dispose();
  });
  return url;
}
