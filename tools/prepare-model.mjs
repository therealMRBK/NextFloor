// Prepare a 3D model you own for NextFloor: lighter, upright, front towards +z, body paint marked.
//
//   npm install @gltf-transform/core @gltf-transform/extensions @gltf-transform/functions draco3dgltf meshoptimizer
//   node tools/prepare-model.mjs input.glb output.glb [--ratio=0.3] [--front=Hood] [--paint=^Paint] [--drop=^Fade]
//
// --ratio  share of the triangles to keep (0.3 turns 200,000 into about 60,000; default 0.3)
// --front  name of a part at the front of the model (a hood, a bonnet): the model is turned so it points to +z
// --paint  materials whose name matches become the body paint that the colour picker changes
// --drop   parts whose name matches are left out (hidden or only there for animations)
//
// Textures and normals are removed (NextFloor shades the model smooth itself) and the Draco compression is
// unpacked, because the 3D view reads plain binary glTF. Check the licence of your model before you use it.
import { NodeIO } from "@gltf-transform/core";
import { ALL_EXTENSIONS } from "@gltf-transform/extensions";
import { dedup, flatten, getBounds, join, prune, simplify, weld } from "@gltf-transform/functions";
import draco3d from "draco3dgltf";
import { MeshoptSimplifier } from "meshoptimizer";

const args = process.argv.slice(2);
const [input, output] = args.filter((a) => !a.startsWith("--"));
const opt = (name, fallback) => args.find((a) => a.startsWith(`--${name}=`))?.slice(name.length + 3) ?? fallback;
if (!input || !output) {
  console.error("usage: node tools/prepare-model.mjs input.glb output.glb [--ratio=0.3] [--front=Hood] [--paint=^Paint] [--drop=^Fade]");
  process.exit(1);
}
const ratio = Number(opt("ratio", "0.3"));
const frontName = opt("front", "");
const paint = new RegExp(opt("paint", "^Paint"));
const drop = opt("drop", "") ? new RegExp(opt("drop", "")) : null;

await MeshoptSimplifier.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ "draco3d.decoder": await draco3d.createDecoderModule() });
const doc = await io.read(input);
const root = doc.getRoot();

// the middle of the front part along z (before anything moves)
let frontZ = 0;
let frontN = 0;
for (const n of root.listNodes()) {
  if (!frontName || n.getName() !== frontName || !n.getMesh()) continue;
  for (const p of n.getMesh().listPrimitives()) {
    const a = p.getAttribute("POSITION");
    const v = [0, 0, 0];
    for (let i = 0; i < a.getCount(); i++) {
      a.getElement(i, v);
      frontZ += v[2];
      frontN++;
    }
  }
}
frontZ /= Math.max(1, frontN);

for (const m of root.listMaterials()) if (paint.test(m.getName())) m.setExtras({ paint: true });
if (drop) for (const n of root.listNodes()) if (drop.test(n.getName())) (n.getMesh()?.dispose(), n.dispose());

for (const m of root.listMaterials()) {
  m.setBaseColorTexture(null).setNormalTexture(null).setOcclusionTexture(null).setMetallicRoughnessTexture(null).setEmissiveTexture(null);
  // materials that were meant to show a texture would be invisible: a dark solid instead
  if (m.getAlphaMode() !== "BLEND" && m.getBaseColorFactor()[3] === 0) m.setBaseColorFactor([0.04, 0.04, 0.04, 1]);
}
for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) for (const sem of p.listSemantics()) if (sem !== "POSITION") p.setAttribute(sem, null);

await doc.transform(flatten(), weld({ tolerance: 0.0003 }), simplify({ simplifier: MeshoptSimplifier, ratio, error: 0.5, lockBorder: false }), join({ keepMeshes: false, keepNamed: false }), prune(), dedup());

// centred on its footprint, front to +z
const bounds = getBounds(root.listScenes()[0]);
const flip = frontZ < 0 ? -1 : 1;
const cx = (bounds.min[0] + bounds.max[0]) / 2;
const cz = (bounds.min[2] + bounds.max[2]) / 2;
const moved = new Set();
for (const mesh of root.listMeshes()) {
  for (const p of mesh.listPrimitives()) {
    const a = p.getAttribute("POSITION");
    if (moved.has(a)) continue;
    moved.add(a);
    const v = [0, 0, 0];
    for (let i = 0; i < a.getCount(); i++) {
      a.getElement(i, v);
      a.setElement(i, [(v[0] - cx) * flip, v[1], (v[2] - cz) * flip]);
    }
  }
}
for (const ext of root.listExtensionsUsed()) if (ext.extensionName === "KHR_draco_mesh_compression") ext.dispose();
await io.write(output, doc);

let tris = 0;
for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) tris += p.getIndices().getCount() / 3;
const size = [0, 1, 2].map((i) => (bounds.max[i] - bounds.min[i]).toFixed(2));
console.log(`${output}: ${tris} triangles, ${size[0]} m wide, ${size[1]} m high, ${size[2]} m long`);
