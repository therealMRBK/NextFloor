// The blind of a window: a roller shutter outside (a box above the opening and slats down to the closed fraction), a venetian blind
// outside whose slats turn with the cover's tilt, or a roller blind inside the room. A wide window can have a second blind for its
// right half.

import { Color } from "three";
import { ALWAYS } from "../geo.ts";
import type { Ctx } from "./context.ts";
import { BLIND_BOX, FRAME_TOP } from "./palette.ts";
import { panel, splitBox } from "./primitives.ts";

/** Colours of the kinds of blinds: the white shutter, the aluminium of a venetian blind, the light fabric of an inside blind. */
const SHUTTER = 0xffffff;
const VENETIAN = 0xc9ced6;
const FABRIC = 0xefe7d8;
/** Spacing and depth of venetian slats (m). */
const SLAT_STEP = 0.08;
const SLAT_DEPTH = 0.085;

export function blind(c: Ctx): void {
  const { info, state, frame, fold } = c;
  if (state.cover === null) return;
  const [W, S, T] = [info.width, info.sill, info.top];
  const kind = info.opening.blind ?? "roller";
  const outside = -info.faceOut;
  const inside = info.faceRoom;
  // the cassette above the opening: a big box outside, a slim one on the room side for an inside blind
  if (kind === "inside") splitBox(c.frames, frame, { x0: -0.03, x1: W + 0.03, n0: inside, n1: inside + 0.07, y0: T - 0.02, y1: T + 0.07 }, new Color(0xf2f2f2), new Color(0xf7f7f7), fold);
  else splitBox(c.frames, frame, { x0: -0.05, x1: W + 0.05, n0: outside - 0.15, n1: outside, y0: T, y1: T + 0.2 }, new Color(BLIND_BOX), new Color(FRAME_TOP), fold);
  const halves: [number, number, number][] = state.cover2 != null ? [[0, W / 2, state.cover], [W / 2, W, state.cover2]] : [[0, W, state.cover]];
  for (const [x0, x1, cover] of halves) {
    const closed = Math.min(1, Math.max(0, cover));
    if (closed <= 0.01) continue;
    const bottom = T - closed * (T - S);
    if (kind === "inside") panel(c.blinds, frame, x0 + 0.01, x1 - 0.01, inside + 0.04, bottom, T - 0.02, new Color(FABRIC), fold);
    else if (kind === "venetian") slats(c, x0, x1, outside - 0.07, bottom, T, state.slats ?? 0);
    else panel(c.blinds, frame, x0, x1, outside - 0.07, bottom, T, new Color(SHUTTER), fold, 0.045);
  }
}

/** Venetian slats from the top down to `bottom`, turned by how far they are open: level (1) shows the gaps, shut (0) a closed face. */
function slats(c: Ctx, x0: number, x1: number, n: number, bottom: number, top: number, open: number): void {
  const { frame, fold } = c;
  const color = new Color(VENETIAN);
  // the slat's angle from upright: shut slats hang almost upright and overlap, open ones lie level
  const a = (Math.PI / 2) * (0.12 + 0.88 * Math.min(1, Math.max(0, open)));
  const dn = (Math.sin(a) * SLAT_DEPTH) / 2;
  const dy = (Math.cos(a) * SLAT_DEPTH) / 2;
  for (let y = top - SLAT_STEP / 2; y > bottom; y -= SLAT_STEP) {
    const bucket = y >= fold.cut ? fold.bucket : ALWAYS;
    const [p, q, r, s] = [frame(x0, n - dn, y + dy), frame(x1, n - dn, y + dy), frame(x1, n + dn, y - dy), frame(x0, n + dn, y - dy)];
    c.blinds.tri(p, q, r, color, color, color, [0, 0.5, 1, 0.5, 1, 0.5], bucket);
    c.blinds.tri(p, r, s, color, color, color, [0, 0.5, 1, 0.5, 0, 0.5], bucket);
  }
}
