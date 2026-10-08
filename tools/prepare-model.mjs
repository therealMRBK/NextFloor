// Prepare a 3D model you own for NextFloor: lighter, upright, front towards +z, body paint marked.
//
//   npm install @gltf-transform/core @gltf-transform/extensions @gltf-transform/functions draco3dgltf meshoptimizer
//   node tools/prepare-model.mjs input.glb output.glb [--ratio=0.3] [--front=^Hood | --rear=^Charge] [--paint=^Paint] [--drop=^Fade]
//                                [--drop-materials=Fade]
//
// --ratio  share of the triangles to keep (0.3 turns 200,000 into about 60,000; default 0.3)
// --front  pattern for the name of a part at the front of the model (a hood, a bonnet); --rear the same for the back
//          (a charge port): the model is turned so its front points to +z
// --paint  materials whose name matches become the body paint that the colour picker changes
// --drop   parts whose name matches are left out (hidden or only there for animations)
// --drop-materials  surfaces whose material name matches are left out (see-through fade layers that would flicker)
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
const frontName = opt("front", "") ? new RegExp(opt("front", "")) : null;
const rearName = opt("rear", "") ? new RegExp(opt("rear", "")) : null;
const dropMaterials = opt("drop-materials", "") ? new RegExp(opt("drop-materials", "")) : null;
const paint = new RegExp(opt("paint", "^Paint"));
const drop = opt("drop", "") ? new RegExp(opt("drop", "")) : null;

await MeshoptSimplifier.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ "draco3d.decoder": await draco3d.createDecoderModule() });
const doc = await io.read(input);
const root = doc.getRoot();

// the middle of the front (or rear) part along z, before anything moves
let frontZ = 0;
let frontN = 0;
for (const n of root.listNodes()) {
  const hit = (frontName && frontName.test(n.getName())) || (rearName && rearName.test(n.getName()));
  if (!hit || !n.getMesh()) continue;
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
// the middle of the whole model: a rear part lies on the other side of it than a front part
const whole = getBounds(root.listScenes()[0]);
frontZ -= (whole.min[2] + whole.max[2]) / 2;
if (rearName && !frontName) frontZ = -frontZ;

for (const m of root.listMaterials()) if (paint.test(m.getName())) m.setExtras({ paint: true });
if (dropMaterials) for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) if (dropMaterials.test(p.getMaterial()?.getName() ?? "")) p.dispose();
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
// the textures are gone, so the extensions that only served them can go too
for (const ext of root.listExtensionsUsed()) if (["KHR_draco_mesh_compression", "EXT_texture_webp"].includes(ext.extensionName)) ext.dispose();
await io.write(output, doc);

let tris = 0;
for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) tris += p.getIndices().getCount() / 3;
const size = [0, 1, 2].map((i) => (bounds.max[i] - bounds.min[i]).toFixed(2));
console.log(`${output}: ${tris} triangles, ${size[0]} m wide, ${size[1]} m high, ${size[2]} m long`);
console.log(`SIZE ${JSON.stringify([+size[0], +size[2], +size[1]])}`);
