// Gates in fences: a gap in one edge of the fence, the gate posts at its ends and the leaf or leaves, closed in the gap or swung
// open (single and double gates swing 90° to the inside, a sliding gate runs along the fence behind the gap's far end).

import type { FenceGate, OutdoorArea, Vec2 } from "../../model.ts";

export interface GateLeaf {
  /** The hinge (or the fixed end) and the free end of one leaf, in plan metres. */
  a: Vec2;
  b: Vec2;
}

export interface GateLayout {
  /** The gap along the edge p → q, in metres from p. */
  from: number;
  to: number;
  /** Where the two gate posts stand. */
  posts: Vec2[];
  leaves: GateLeaf[];
}

/** The gates of an area that sit on the edge p → q (whichever way the outline runs), with their offset counted from p. */
export function gatesOnEdge(area: OutdoorArea, p: Vec2, q: Vec2): { gate: FenceGate; offset: number }[] {
  const same = (a: Vec2, b: Vec2) => Math.abs(a[0] - b[0]) < 1e-6 && Math.abs(a[1] - b[1]) < 1e-6;
  const length = Math.hypot(q[0] - p[0], q[1] - p[1]);
  const out: { gate: FenceGate; offset: number }[] = [];
  for (const gate of area.gates ?? []) {
    const a = area.points[gate.edge];
    const b = area.points[(gate.edge + 1) % area.points.length];
    if (!a || !b) continue;
    if (same(a, p) && same(b, q)) out.push({ gate, offset: gate.offset });
    else if (same(a, q) && same(b, p)) out.push({ gate, offset: length - gate.offset });
  }
  return out.sort((x, y) => x.offset - y.offset);
}

/** The gap, posts and leaves of one gate on the edge p → q. `offset` is the gate's middle from p; `open` swings or slides it. */
export function gateLayout(p: Vec2, q: Vec2, gate: Pick<FenceGate, "width" | "kind">, offset: number, open: boolean): GateLayout | null {
  const length = Math.hypot(q[0] - p[0], q[1] - p[1]);
  if (length < 0.3) return null;
  const width = Math.min(gate.width, length - 0.1);
  if (width < 0.3) return null;
  const from = Math.max(0.05, Math.min(length - width - 0.05, offset - width / 2));
  const to = from + width;
  const [ux, uz] = [(q[0] - p[0]) / length, (q[1] - p[1]) / length];
  // the inside of a counter-clockwise outline lies to the left of the walking direction p → q
  const [nx, nz] = [-uz, ux];
  const at = (t: number, side = 0): Vec2 => [p[0] + ux * t + nx * side, p[1] + uz * t + nz * side];
  const [pa, pb] = [at(from), at(to)];
  const leaves: GateLeaf[] = [];
  if (gate.kind === "double") {
    const mid = (from + to) / 2;
    leaves.push(open ? { a: pa, b: at(from, width / 2) } : { a: pa, b: at(mid) });
    leaves.push(open ? { a: pb, b: at(to, width / 2) } : { a: pb, b: at(mid) });
  } else if (gate.kind === "sliding") {
    // open: it rolls along the fence behind the far post, a hand's breadth outside the line
    leaves.push(open ? { a: at(to, -0.12), b: at(to + width, -0.12) } : { a: pa, b: pb });
  } else {
    leaves.push(open ? { a: pa, b: at(from, width) } : { a: pa, b: pb });
  }
  return { from, to, posts: [pa, pb], leaves };
}
