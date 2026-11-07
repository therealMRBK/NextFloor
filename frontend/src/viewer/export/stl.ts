// A binary STL of the house for 3D printing or a slicer: the triangles of every floor's walls (which carry furniture and outdoor
// areas as well) and floors, lifted to the floor's height and scaled; the glass, lights and blinds are left out.

/** One batch of triangles: positions (three numbers per vertex) and the height the batch stands at. */
export interface StlPart {
  positions: ArrayLike<number>;
  /** Added to every y, in metres. */
  lift: number;
}

/**
 * The bytes of a binary STL. Plan x/z become x/y of the print (z down the plan becomes y towards the back), the height stays the
 * height; `scale` multiplies metres (10 = 1:100 when a slicer reads millimetres). Degenerate triangles are skipped.
 */
export function buildStl(parts: readonly StlPart[], scale = 10, name = "NextFloor"): Uint8Array {
  const tris: number[][] = [];
  for (const { positions, lift } of parts) {
    for (let i = 0; i + 8 < positions.length; i += 9) {
      const v = [0, 3, 6].map((o) => [positions[i + o] * scale, -positions[i + o + 2] * scale, (positions[i + o + 1] + lift) * scale]);
      const [a, b, c] = v;
      const n = [(b[1] - a[1]) * (c[2] - a[2]) - (b[2] - a[2]) * (c[1] - a[1]), (b[2] - a[2]) * (c[0] - a[0]) - (b[0] - a[0]) * (c[2] - a[2]), (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])];
      const length = Math.hypot(n[0], n[1], n[2]);
      if (length < 1e-9) continue;
      // (x, y, z) → (x, -z, y) is a turn, not a mirror, so the winding and the normal stay as they were
      tris.push([n[0] / length, n[1] / length, n[2] / length, ...a, ...b, ...c]);
    }
  }
  const out = new Uint8Array(84 + tris.length * 50);
  const view = new DataView(out.buffer);
  out.set(new TextEncoder().encode(`${name} STL`.slice(0, 79)), 0);
  view.setUint32(80, tris.length, true);
  tris.forEach((t, k) => {
    const o = 84 + k * 50;
    t.forEach((n, j) => view.setFloat32(o + j * 4, n, true));
  });
  return out;
}
