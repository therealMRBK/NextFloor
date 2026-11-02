// Seating and beds.

import type { Builder } from "./builder.ts";
import { legs } from "./parts.ts";
import { C, EDGE_FAINT, EDGE_FURN, M, material } from "./palette.ts";

/** A sofa (`seats` cushions across) or, with one seat, an armchair. */
export function sofa(b: Builder, w: number, d: number, h: number, seats: number): void {
  const [x0, x1, z0, z1] = [-w / 2, w / 2, -d / 2, d / 2];
  const arm = Math.min(0.2, w * 0.12);
  const seat = h * 0.5;
  const back = Math.min(0.24, d * 0.28);
  legs(b, w, d, 0.07, 0.05, 0.05, C.wood, true);
  b.pad({ x: [x0, x1], y: [0.07, seat - 0.08], z: [z0 + 0.02, z1] }, M.fabric, 0.04, EDGE_FURN);
  // the back leans a little: its top is thinner than its base
  b.loft([x0, x1, z0, z0 + back], [x0 + 0.01, x1 - 0.01, z0, z0 + back * 0.5], seat - 0.08, h, M.fabric, EDGE_FURN);
  for (const [a, c] of [[x0, x0 + arm], [x1 - arm, x1]]) b.pad({ x: [a, c], y: [seat - 0.08, h * 0.72], z: [z0 + 0.02, z1 - 0.02] }, M.fabric, 0.04, EDGE_FURN);
  // seat cushions with a small gap, and back cushions leaning against the back
  const cushionWidth = (x1 - arm - (x0 + arm)) / seats;
  for (let i = 0; i < seats; i++) {
    const from = x0 + arm + cushionWidth * i + 0.02;
    const to = from + cushionWidth - 0.04;
    b.pad({ x: [from, to], y: [seat - 0.08, seat + 0.05], z: [z0 + back + 0.02, z1 - 0.06] }, M.cushion, 0.04);
    b.loft([from + 0.01, to - 0.01, z0 + back * 0.55, z0 + back + 0.14], [from + 0.03, to - 0.03, z0 + back * 0.4, z0 + back * 0.4 + 0.06], seat + 0.03, h * 0.93, M.cushion);
  }
}

/**
 * An L- or U-shaped sofa: the back runs along the rear, a chaise reaches forward at the right end (an L; mirrored, the left) or at
 * both ends (a U). The seat depth stays that of a sofa, whatever the depth of the whole.
 */
export function shapedSofa(b: Builder, w: number, d: number, h: number, shape: "l" | "u"): void {
  const [x0, x1, z0, z1] = [-w / 2, w / 2, -d / 2, d / 2];
  const seat = h * 0.5;
  const back = Math.min(0.24, d * 0.2);
  const depth = Math.min(0.95, d * 0.55);
  const chaise = Math.min(0.9, w * (shape === "u" ? 0.28 : 0.34));
  const arm = 0.16;
  legs(b, w, d, 0.07, 0.05, 0.05, C.wood, true);
  // the main bench along the back, and the chaise(s) reaching forward
  b.pad({ x: [x0, x1], y: [0.07, seat - 0.08], z: [z0 + 0.02, z0 + depth] }, M.fabric, 0.04, EDGE_FURN);
  const ends: [number, number][] = shape === "u" ? [[x0, x0 + chaise], [x1 - chaise, x1]] : [[x1 - chaise, x1]];
  for (const [a, c] of ends) b.pad({ x: [a, c], y: [0.07, seat - 0.08], z: [z0 + depth - 0.04, z1] }, M.fabric, 0.04, EDGE_FURN);
  b.loft([x0, x1, z0, z0 + back], [x0 + 0.01, x1 - 0.01, z0, z0 + back * 0.5], seat - 0.08, h, M.fabric, EDGE_FURN);
  // arms: on the open end of an L, and along the outer sides of the chaises
  if (shape === "l") b.pad({ x: [x0, x0 + arm], y: [seat - 0.08, h * 0.72], z: [z0 + 0.02, z0 + depth - 0.02] }, M.fabric, 0.04, EDGE_FURN);
  for (const [a, c] of ends) {
    const outer = a <= x0 + 1e-6 ? [a, a + arm] : [c - arm, c];
    b.pad({ x: [outer[0], outer[1]], y: [seat - 0.08, h * 0.62], z: [z0 + 0.02, z1 - 0.02] }, M.fabric, 0.04, EDGE_FURN);
  }
  // cushions on the bench between the chaises, and one long cushion on each chaise
  const from = shape === "u" ? x0 + chaise : x0 + arm;
  const to = x1 - chaise;
  const seats = Math.max(1, Math.round((to - from) / 0.62));
  const cw = (to - from) / seats;
  for (let i = 0; i < seats; i++) {
    const a = from + cw * i + 0.02;
    const c = a + cw - 0.04;
    b.pad({ x: [a, c], y: [seat - 0.08, seat + 0.05], z: [z0 + back + 0.02, z0 + depth - 0.06] }, M.cushion, 0.04);
    b.loft([a + 0.01, c - 0.01, z0 + back * 0.55, z0 + back + 0.14], [a + 0.03, c - 0.03, z0 + back * 0.4, z0 + back * 0.4 + 0.06], seat + 0.03, h * 0.93, M.cushion);
  }
  for (const [a, c] of ends) {
    const inner = a <= x0 + 1e-6 ? [a + arm + 0.02, c - 0.02] : [a + 0.02, c - arm - 0.02];
    b.pad({ x: [inner[0], inner[1]], y: [seat - 0.08, seat + 0.05], z: [z0 + back + 0.02, z1 - 0.06] }, M.cushion, 0.04);
  }
}

export function bed(b: Builder, w: number, d: number, h: number): void {
  const [x0, x1, z0, z1] = [-w / 2, w / 2, -d / 2, d / 2];
  const frame = Math.min(0.32, h * 0.36);
  legs(b, w, d, 0.08, 0.06, 0.03, C.wood, true);
  b.block({ x: [x0, x1], y: [0.08, frame], z: [z0 + 0.06, z1] }, M.wood, EDGE_FURN);
  b.pad({ x: [x0 + 0.03, x1 - 0.03], y: [frame, frame + 0.2], z: [z0 + 0.08, z1 - 0.03] }, M.bedding, 0.03);
  // head board, and its cap
  b.block({ x: [x0, x1], y: [0.08, h - 0.05], z: [z0, z0 + 0.07] }, M.wood, EDGE_FURN);
  b.block({ x: [x0, x1], y: [h - 0.05, h], z: [z0, z0 + 0.09] }, M.wood, EDGE_FAINT);
  // a duvet over the lower two thirds with a folded-back edge, puffy pillows at the head
  const mattress = frame + 0.2;
  const fold = z0 + (d - 0.1) * 0.36;
  b.pad({ x: [x0 + 0.01, x1 - 0.01], y: [mattress - 0.1, mattress + 0.05], z: [fold, z1 - 0.01] }, M.cushionSoft, 0.025, EDGE_FAINT);
  b.lyingCylinder("x", 0, fold + 0.05, mattress - 0.02, mattress + 0.09, w - 0.02, 0.1, M.cushionSoft, 8);
  const pillows = w > 1.2 ? 2 : 1;
  const pillowWidth = (w - 0.2) / pillows;
  for (let i = 0; i < pillows; i++) {
    const px = x0 + 0.1 + pillowWidth * i;
    const pz = z0 + 0.12;
    const depth = Math.min(0.42, d * 0.2);
    const k = 0.1;
    b.loft([px + 0.03 + k, px + pillowWidth - 0.03 - k, pz + k * 0.5, pz + depth - k * 0.5], [px + 0.03, px + pillowWidth - 0.03, pz, pz + depth], mattress, mattress + 0.06, M.pillow);
    b.loft([px + 0.03, px + pillowWidth - 0.03, pz, pz + depth], [px + 0.03 + k, px + pillowWidth - 0.03 - k, pz + k * 0.5, pz + depth - k * 0.5], mattress + 0.06, mattress + 0.12, M.pillow, EDGE_FAINT);
  }
}

export function chair(b: Builder, w: number, d: number, h: number): void {
  const seat = Math.min(0.46, h * 0.52);
  legs(b, w, d, seat - 0.04, 0.035, 0.02, C.wood, true);
  b.block({ x: [-w / 2, w / 2], y: [seat - 0.04, seat], z: [-d / 2, d / 2] }, M.wood, EDGE_FURN);
  b.pad({ x: [-w / 2 + 0.02, w / 2 - 0.02], y: [seat, seat + 0.04], z: [-d / 2 + 0.05, d / 2 - 0.03] }, M.cushion, 0.015);
  b.loft([-w / 2, w / 2, -d / 2 + 0.02, -d / 2 + 0.07], [-w / 2 + 0.02, w / 2 - 0.02, -d / 2, -d / 2 + 0.03], seat, h, M.wood, EDGE_FURN);
}

export function barStool(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(w, d) / 2;
  b.cylinder(0, 0, r * 0.8, 0, 0.02, M.metal, 12);
  b.cylinder(0, 0, 0.025, 0.02, h - 0.05, M.metal, 6);
  b.cylinder(0, 0, r * 0.75, h * 0.35, h * 0.35 + 0.015, M.metal, 12, EDGE_FAINT);
  b.cylinder(0, 0, r, h - 0.05, h, M.cushionSoft, 14, EDGE_FURN);
}

export function officeChair(b: Builder, w: number, d: number, h: number): void {
  const r = Math.min(w, d) / 2;
  // a star base as two crossed bars and a hub, a gas lift, seat and back
  b.block({ x: [-r, r], y: [0.04, 0.08], z: [-0.03, 0.03] }, M.metal);
  b.block({ x: [-0.03, 0.03], y: [0.04, 0.08], z: [-r, r] }, M.metal);
  b.cylinder(0, 0, 0.06, 0.02, 0.1, M.dark, 8);
  b.cylinder(0, 0, 0.025, 0.1, 0.44, M.metal, 6);
  b.block({ x: [-r * 0.75, r * 0.75], y: [0.44, 0.52], z: [-r * 0.7, r * 0.75] }, material(C.fabric, C.cushion), EDGE_FURN);
  b.block({ x: [-r * 0.7, r * 0.7], y: [0.58, h], z: [-r * 0.78, -r * 0.62] }, M.fabric, EDGE_FURN);
  b.block({ x: [-0.03, 0.03], y: [0.5, 0.62], z: [-r * 0.72, -r * 0.62] }, M.metal);
}

export function stool(b: Builder, w: number, d: number, h: number): void {
  legs(b, w, d, 0.08, 0.04, 0.05, C.wood);
  b.block({ x: [-w / 2, w / 2], y: [0.08, h], z: [-d / 2, d / 2] }, material(C.fabric, C.cushion), EDGE_FURN);
}

/** A bench with a back along the rear; `corner` adds the second arm along -x. */
export function bench(b: Builder, w: number, d: number, h: number, corner: boolean): void {
  const seat = 0.45;
  const depth = Math.min(0.5, corner ? d * 0.4 : d);
  const back = 0.08;
  const cushion = material(C.cushion);
  // the rear arm
  b.block({ x: [-w / 2, w / 2], y: [0, seat - 0.06], z: [-d / 2, -d / 2 + depth] }, M.wood, EDGE_FURN);
  b.block({ x: [-w / 2, w / 2], y: [0, h], z: [-d / 2, -d / 2 + back] }, M.wood, EDGE_FURN);
  b.block({ x: [-w / 2 + (corner ? depth : 0.02), w / 2 - 0.02], y: [seat - 0.06, seat + 0.02], z: [-d / 2 + back, -d / 2 + depth] }, cushion, EDGE_FAINT);
  if (!corner) return;
  // the side arm along -x, meeting the rear arm in the corner
  b.block({ x: [-w / 2, -w / 2 + depth], y: [0, seat - 0.06], z: [-d / 2 + depth, d / 2] }, M.wood, EDGE_FURN);
  b.block({ x: [-w / 2, -w / 2 + back], y: [0, h], z: [-d / 2 + back, d / 2] }, M.wood, EDGE_FURN);
  b.block({ x: [-w / 2 + back, -w / 2 + depth], y: [seat - 0.06, seat + 0.02], z: [-d / 2 + back, d / 2 - 0.02] }, cushion, EDGE_FAINT);
}

export function bunkBed(b: Builder, w: number, d: number, h: number): void {
  const t = 0.05;
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) b.block({ x: [sx * (w / 2) - (sx > 0 ? t : 0), sx * (w / 2) + (sx < 0 ? t : 0)], y: [0, h], z: [sz * (d / 2) - (sz > 0 ? t : 0), sz * (d / 2) + (sz < 0 ? t : 0)] }, M.wood);
  }
  for (const y of [0.25, h - 0.55]) {
    b.block({ x: [-w / 2, w / 2], y: [y, y + 0.08], z: [-d / 2, d / 2] }, M.wood, EDGE_FURN);
    b.block({ x: [-w / 2 + 0.04, w / 2 - 0.04], y: [y + 0.08, y + 0.24], z: [-d / 2 + 0.05, d / 2 - 0.05] }, M.bedding, EDGE_FAINT);
    b.block({ x: [-w / 2 + 0.05, w / 2 - 0.05], y: [y + 0.24, y + 0.33], z: [-d / 2 + 0.08, -d / 2 + 0.4] }, M.pillow);
  }
  // a guard rail on top and a ladder at the front
  b.block({ x: [-w / 2, w / 2], y: [h - 0.2, h - 0.15], z: [d / 2 - t, d / 2] }, M.wood);
  const ladder = w / 2 - 0.35;
  for (const x of [ladder - 0.18, ladder + 0.18]) b.seg(x, 0, d / 2 + 0.02, x, h - 0.15, d / 2 + 0.02, EDGE_FURN);
  for (let y = 0.3; y < h - 0.2; y += 0.28) b.seg(ladder - 0.18, y, d / 2 + 0.02, ladder + 0.18, y, d / 2 + 0.02, EDGE_FAINT);
}
