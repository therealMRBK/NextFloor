// Tables, storage, decoration and stairs.

import type { Builder } from "./builder.ts";
import { cabinet, fronts, legs } from "./parts.ts";
import { C, EDGE_FAINT, EDGE_FURN, EDGE_GLOW, M, material } from "./palette.ts";

export function table(b: Builder, w: number, d: number, h: number): void {
  legs(b, w, d, h - 0.04, 0.06, 0.05, C.wood, true);
  b.block({ x: [-w / 2, w / 2], y: [h - 0.04, h], z: [-d / 2, d / 2] }, M.wood, EDGE_GLOW);
  b.block({ x: [-w / 2 + 0.08, w / 2 - 0.08], y: [h - 0.1, h - 0.04], z: [-d / 2 + 0.08, d / 2 - 0.08] }, material(C.body));
}

export function roundTable(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(w, d) / 2;
  b.cylinder(0, 0, r * 0.4, 0, 0.03, M.metal, 12);
  b.cylinder(0, 0, 0.05, 0.03, h - 0.04, material(C.wood), 8);
  b.cylinder(0, 0, r, h - 0.04, h, M.wood, 20, EDGE_FURN);
}

export function coffeeTable(b: Builder, w: number, d: number, h: number): void {
  legs(b, w, d, h - 0.03, 0.04, 0.03, C.wood);
  b.block({ x: [-w / 2, w / 2], y: [h - 0.03, h], z: [-d / 2, d / 2] }, M.wood, EDGE_FURN);
  b.block({ x: [-w / 2 + 0.05, w / 2 - 0.05], y: [0.1, 0.13], z: [-d / 2 + 0.05, d / 2 - 0.05] }, M.body, EDGE_FAINT);
}

export function desk(b: Builder, w: number, d: number, h: number): void {
  const [x0, x1] = [-w / 2, w / 2];
  b.block({ x: [x0, x1], y: [h - 0.035, h], z: [-d / 2, d / 2] }, M.wood, EDGE_FURN);
  b.block({ x: [x0, x0 + 0.03], y: [0, h - 0.035], z: [-d / 2 + 0.03, d / 2 - 0.03] }, M.metal);
  const drawers = Math.min(0.42, w * 0.32);
  b.block({ x: [x1 - drawers, x1], y: [0, h - 0.035], z: [-d / 2 + 0.03, d / 2 - 0.02] }, M.body, EDGE_FURN);
  const front = d / 2 - 0.02;
  for (const y of [h * 0.35, h * 0.66]) b.seg(x1 - drawers, y, front, x1, y, front, EDGE_FAINT);
  for (const y of [h * 0.2, h * 0.5, h * 0.82]) b.seg(x1 - drawers / 2 - 0.07, y, front + 0.012, x1 - drawers / 2 + 0.07, y, front + 0.012, EDGE_GLOW);
  // the screen on its foot
  b.block({ x: [-0.3, 0.3], y: [h + 0.08, h + 0.42], z: [-d / 2 + 0.08, -d / 2 + 0.11] }, M.screen, EDGE_GLOW);
  b.block({ x: [-0.03, 0.03], y: [h, h + 0.1], z: [-d / 2 + 0.09, -d / 2 + 0.13] }, M.metal);
}

export function nightstand(b: Builder, w: number, d: number, h: number): void {
  cabinet(b, w, d, h, 1, h * 0.72, true);
  b.seg(-w / 2, h * 0.5, d / 2 - 0.02, w / 2, h * 0.5, d / 2 - 0.02, EDGE_FAINT);
}

export function shelf(b: Builder, w: number, d: number, h: number): void {
  const t = 0.025;
  b.block({ x: [-w / 2, -w / 2 + t], y: [0, h], z: [-d / 2, d / 2] }, M.wood, EDGE_FURN);
  b.block({ x: [w / 2 - t, w / 2], y: [0, h], z: [-d / 2, d / 2] }, M.wood, EDGE_FURN);
  b.block({ x: [-w / 2 + t, w / 2 - t], y: [0, h], z: [-d / 2, -d / 2 + 0.015] }, material(C.body));
  const boards = Math.max(2, Math.round(h / 0.38));
  for (let i = 0; i <= boards; i++) {
    const y = Math.min(h - t, (h / boards) * i);
    b.block({ x: [-w / 2 + t, w / 2 - t], y: [y, y + t], z: [-d / 2 + 0.015, d / 2] }, M.wood, EDGE_FAINT);
    if (i === boards) continue; // no books on the top board
    // a few books on every other shelf, in varying widths and heights
    let x = -w / 2 + t + 0.04;
    let k = i * 3;
    while (x < w / 2 - t - 0.12) {
      const bookWidth = 0.03 + ((k * 7) % 5) * 0.008;
      const bookHeight = h / boards - t - 0.08 - ((k * 5) % 4) * 0.025;
      if ((k * 11) % 7 !== 0) b.block({ x: [x, x + bookWidth], y: [y + t, y + t + bookHeight], z: [-d / 2 + 0.04, d / 2 - 0.05] }, k % 3 ? M.fabric : material(C.cushion, C.fabricTop));
      x += bookWidth + 0.006;
      k++;
    }
  }
}

export function sideboard(b: Builder, w: number, d: number, h: number): void {
  legs(b, w, d, 0.12, 0.03, 0.04, C.metal);
  b.block({ x: [-w / 2, w / 2], y: [0.12, h], z: [-d / 2, d / 2 - 0.02] }, M.wood, EDGE_FURN);
  fronts(b, -w / 2, w / 2, 0.12, h, d / 2 - 0.02, Math.max(2, Math.round(w / 0.45)), h - 0.1, true);
}

export function dresser(b: Builder, w: number, d: number, h: number): void {
  b.block({ x: [-w / 2, w / 2], y: [0.06, h], z: [-d / 2, d / 2 - 0.02] }, M.wood, EDGE_FURN);
  b.block({ x: [-w / 2 + 0.02, w / 2 - 0.02], y: [0, 0.06], z: [-d / 2 + 0.02, d / 2 - 0.06] }, M.dark);
  const drawers = Math.max(3, Math.round((h - 0.06) / 0.22));
  const front = d / 2 - 0.02;
  const step = (h - 0.06) / drawers;
  for (let i = 1; i < drawers; i++) b.seg(-w / 2, 0.06 + step * i, front, w / 2, 0.06 + step * i, front, EDGE_FAINT);
  for (let i = 0; i < drawers; i++) b.seg(-0.08, 0.06 + step * (i + 0.5), front + 0.012, 0.08, 0.06 + step * (i + 0.5), front + 0.012, EDGE_GLOW);
}

/** A shoe bench with a back panel, hooks and a hat shelf. */
export function coatRack(b: Builder, w: number, d: number, h: number): void {
  b.block({ x: [-w / 2, w / 2], y: [0, 0.45], z: [-d / 2, d / 2] }, M.wood, EDGE_FURN);
  fronts(b, -w / 2, w / 2, 0.02, 0.45, d / 2, Math.max(2, Math.round(w / 0.5)), 0.38, true);
  b.block({ x: [-w / 2, w / 2], y: [0.45, h], z: [-d / 2, -d / 2 + 0.03] }, M.body, EDGE_FURN);
  b.block({ x: [-w / 2, w / 2], y: [h - 0.04, h], z: [-d / 2, d / 2] }, M.wood, EDGE_FURN);
  const hooks = Math.max(2, Math.round(w / 0.25));
  for (let i = 0; i < hooks; i++) {
    const x = -w / 2 + (w / hooks) * (i + 0.5);
    b.block({ x: [x - 0.015, x + 0.015], y: [h - 0.32, h - 0.28], z: [-d / 2 + 0.03, -d / 2 + 0.1] }, M.metal);
  }
}

/** A potted plant: a pot, a stem and foliage as stacked, slightly shifted octagonal layers. */
export function plant(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(w, d) / 2;
  const pot = Math.min(0.4, h * 0.34);
  b.cylinder(0, 0, r * 0.62, 0, pot, M.pot, 10, EDGE_FURN);
  b.cylinder(0, 0, r * 0.08, pot, h * 0.55, material(C.wood), 6);
  const layers = 4;
  for (let i = 0; i < layers; i++) {
    const radius = r * (0.95 - 0.55 * (i / (layers - 1)));
    const y0 = pot + (h - pot) * (0.18 + 0.2 * i);
    b.cylinder(Math.sin(i * 2.1) * 0.03, Math.cos(i * 1.7) * 0.03, radius, y0, y0 + (h - pot) * 0.16, M.plant, 8, i === layers - 1 ? EDGE_FAINT : null);
  }
}

/** A flat rug with a line inset from its edge. */
export function rug(b: Builder, w: number, d: number): void {
  b.block({ x: [-w / 2, w / 2], y: [0, 0.012], z: [-d / 2, d / 2] }, M.fabric);
  const i = Math.min(0.12, Math.min(w, d) * 0.08);
  const [x0, x1, z0, z1] = [-w / 2 + i, w / 2 - i, -d / 2 + i, d / 2 - i];
  for (const [xa, za, xb, zb] of [[x0, z0, x1, z0], [x1, z0, x1, z1], [x1, z1, x0, z1], [x0, z1, x0, z0]]) b.seg(xa, 0.014, za, xb, 0.014, zb, EDGE_FURN);
}

/** A straight stair rising towards -z (the back), with a handrail on the +x side. */
export function stairs(b: Builder, w: number, d: number, h: number): void {
  const steps = Math.max(3, Math.round(h / 0.18));
  const rise = h / steps;
  const run = d / steps;
  for (let i = 0; i < steps; i++) {
    const z1 = d / 2 - run * i;
    const y1 = rise * (i + 1);
    b.block({ x: [-w / 2, w / 2], y: [0, y1], z: [z1 - run, z1] }, M.wood);
    b.seg(-w / 2, y1, z1, w / 2, y1, z1, EDGE_FURN);
  }
  b.seg(-w / 2, 0, d / 2, -w / 2, rise, d / 2, EDGE_FURN);
  // stringer lines along both sides
  for (const x of [-w / 2, w / 2]) b.seg(x, rise, d / 2, x, h, -d / 2 + run, EDGE_FAINT);
  // the handrail and its posts; the rail ends where the stair passes through the ceiling opening
  const railHeight = 0.9;
  const x = w / 2 - 0.03;
  const last = Math.max(1, steps - 4);
  b.seg(x, rise + railHeight, d / 2 - run / 2, x, rise * last + railHeight, d / 2 - run * (last - 0.5), EDGE_GLOW);
  for (let i = 0; i < last; i += 3) {
    const z = d / 2 - run * (i + 0.5);
    b.seg(x, rise * (i + 1), z, x, rise * (i + 1) + railHeight, z, EDGE_FAINT);
  }
}

/** A TV on a low unit with a stand. */
export function tvBoard(b: Builder, w: number, d: number, h: number, rim: Parameters<Builder["block"]>[2] = EDGE_GLOW): void {
  cabinet(b, w, d, h, Math.max(2, Math.round(w / 0.6)), h * 0.55, true);
  const screen = Math.min(w * 0.8, 1.45);
  b.block({ x: [-0.1, 0.1], y: [h, h + 0.02], z: [-d / 2 + 0.08, -d / 2 + 0.24] }, M.metal);
  b.block({ x: [-0.02, 0.02], y: [h + 0.02, h + 0.12], z: [-d / 2 + 0.14, -d / 2 + 0.18] }, M.metal);
  b.block({ x: [-screen / 2, screen / 2], y: [h + 0.1, h + 0.1 + screen * 0.56], z: [-d / 2 + 0.12, -d / 2 + 0.16] }, M.screen, rim);
}

/** A flat screen on a wall bracket, centred at 1.3 m. */
export function tvWall(b: Builder, w: number, d: number, h: number, rim: Parameters<Builder["block"]>[2] = EDGE_GLOW): void {
  const y0 = 1.3 - h / 2;
  b.block({ x: [-0.12, 0.12], y: [y0 + h * 0.3, y0 + h * 0.7], z: [-d / 2, -d / 2 + 0.03] }, M.metal);
  b.block({ x: [-w / 2, w / 2], y: [y0, y0 + h], z: [-d / 2 + 0.03, d / 2] }, M.screen, rim);
}
