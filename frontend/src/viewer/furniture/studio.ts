// Furniture studio units in 3D: a carcass split into columns and rows, each compartment with a door, a drawer, glass or open
// with a few things on its shelf, standing on a plinth or legs, or hanging on the wall with an optional light strip.

import { frontOfRow, studioBaseHeight, studioCols, studioConfig, type StudioConfig } from "../../geometry/studio.ts";
import type { Builder } from "./builder.ts";
import { legs } from "./parts.ts";
import { C, EDGE_FAINT, EDGE_FURN, EDGE_GLOW, M, material, type Material } from "./palette.ts";

const FINISH: Record<StudioConfig["finish"], Material> = { white: M.white, wood: M.wood, dark: M.darkBody, body: M.body };

export function studioUnit(b: Builder, item: { studio?: Partial<StudioConfig> | null }, w: number, d: number, h: number): void {
  const cfg = studioConfig(item);
  const body = FINISH[cfg.finish];
  const t = 0.02;
  const base = studioBaseHeight(cfg);
  const cols = studioCols(cfg, w);
  const [x0, x1, z0, z1] = [-w / 2, w / 2, -d / 2, d / 2];
  if (cfg.base === "legs") legs(b, w, d, base, 0.035, 0.04, C.metal, true);
  if (cfg.base === "plinth") b.block({ x: [x0 + 0.02, x1 - 0.02], y: [0, base], z: [z0 + 0.02, z1 - 0.05] }, material(C.dark));
  const [y0, y1] = [base, h];
  const open = cfg.front === "open";
  const colWidth = (w - 2 * t) / cols;
  const rowHeight = (y1 - y0 - 2 * t) / cfg.rows;
  // the carcass: sides, top, bottom and back; open and glass units show their inside, closed ones are one block behind the fronts
  if (open || cfg.front === "glass") {
    b.block({ x: [x0, x0 + t], y: [y0, y1], z: [z0, z1] }, body, EDGE_FURN);
    b.block({ x: [x1 - t, x1], y: [y0, y1], z: [z0, z1] }, body, EDGE_FURN);
    b.block({ x: [x0 + t, x1 - t], y: [y1 - t, y1], z: [z0, z1] }, body, EDGE_FURN);
    b.block({ x: [x0 + t, x1 - t], y: [y0, y0 + t], z: [z0, z1] }, body, EDGE_FAINT);
    b.block({ x: [x0 + t, x1 - t], y: [y0 + t, y1 - t], z: [z0, z0 + 0.012] }, material(C.body));
    for (let c = 1; c < cols; c++) {
      const x = x0 + t + colWidth * c;
      b.block({ x: [x - t / 2, x + t / 2], y: [y0 + t, y1 - t], z: [z0 + 0.012, z1 - (open ? 0 : 0.02)] }, body, EDGE_FAINT);
    }
    for (let r = 1; r < cfg.rows; r++) {
      const y = y0 + t + rowHeight * r;
      b.block({ x: [x0 + t, x1 - t], y: [y - t / 2, y + t / 2], z: [z0 + 0.012, z1 - (open ? 0 : 0.02)] }, body, EDGE_FAINT);
    }
    // a few things on the shelves: books and boxes in varying sizes
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < cfg.rows; r++) {
        const seed = c * 7 + r * 3;
        if (seed % 3 === 2) continue;
        const [cx0, cy0] = [x0 + t + colWidth * c + 0.03, y0 + t + rowHeight * r + t / 2];
        let x = cx0;
        const end = cx0 + colWidth * (0.35 + ((seed * 13) % 5) * 0.08);
        let k = seed;
        while (x < end && x < cx0 + colWidth - 0.08) {
          const bw = 0.025 + ((k * 7) % 4) * 0.008;
          const bh = Math.min(rowHeight - 0.05, 0.16 + ((k * 5) % 4) * 0.03);
          b.block({ x: [x, x + bw], y: [cy0, cy0 + bh], z: [z0 + 0.03, Math.min(z1 - 0.04, z0 + 0.03 + d * 0.6)] }, k % 3 ? M.cushion : M.accent);
          x += bw + 0.004;
          k++;
        }
      }
    }
    if (cfg.front === "glass") {
      for (let c = 0; c < cols; c++) {
        const [gx0, gx1] = [x0 + t + colWidth * c + 0.005, x0 + t + colWidth * (c + 1) - 0.005];
        b.block({ x: [gx0, gx1], y: [y0 + t, y1 - t], z: [z1 - 0.018, z1 - 0.01] }, M.glass, EDGE_FAINT);
        const handle = c % 2 ? gx0 + 0.04 : gx1 - 0.04;
        b.seg(handle, (y0 + y1) / 2 - 0.08, z1, handle, (y0 + y1) / 2 + 0.08, z1, EDGE_GLOW);
      }
    }
  } else {
    b.block({ x: [x0, x1], y: [y0, y1], z: [z0, z1 - 0.02] }, body, EDGE_FURN);
    // fronts: drawers one per compartment, doors spanning every door row of a column
    const front = z1 - 0.02;
    for (let c = 0; c < cols; c++) {
      const [fx0, fx1] = [x0 + t + colWidth * c, x0 + t + colWidth * (c + 1)];
      const centre = (fx0 + fx1) / 2;
      let r = 0;
      while (r < cfg.rows) {
        const kind = frontOfRow(cfg, r);
        let span = 1;
        if (kind === "door") while (r + span < cfg.rows && frontOfRow(cfg, r + span) === "door") span++;
        const [fy0, fy1] = [y0 + t + rowHeight * r, y0 + t + rowHeight * (r + span)];
        b.block({ x: [fx0 + 0.003, fx1 - 0.003], y: [fy0 + 0.003, fy1 - 0.003], z: [front, z1] }, body, EDGE_FAINT);
        if (kind === "drawer") {
          const half = Math.min(0.12, colWidth / 4);
          b.seg(centre - half, fy1 - Math.min(0.06, (fy1 - fy0) / 3), z1 + 0.008, centre + half, fy1 - Math.min(0.06, (fy1 - fy0) / 3), z1 + 0.008, EDGE_GLOW);
        } else {
          // doors open from alternating sides so that neighbouring handles meet
          const x = c % 2 ? fx0 + 0.04 : fx1 - 0.04;
          const y = Math.min(fy1 - 0.12, Math.max(fy0 + 0.12, cfg.kind === "wall" ? fy0 + 0.1 : 1.0));
          b.seg(x, y - 0.08, z1 + 0.008, x, y + 0.08, z1 + 0.008, EDGE_GLOW);
        }
        r += span;
      }
    }
  }
  if (cfg.light) {
    // a light strip glowing along the front of the bottom (wall units) or the top
    const y = cfg.kind === "wall" ? y0 - 0.006 : y1 + 0.004;
    b.block({ x: [x0 + 0.03, x1 - 0.03], y: [y, y + 0.006], z: [z1 - 0.06, z1 - 0.03] }, M.accent);
    b.seg(x0 + 0.03, y, z1 - 0.045, x1 - 0.03, y, z1 - 0.045, EDGE_GLOW);
  }
}
