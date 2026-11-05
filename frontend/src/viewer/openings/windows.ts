// Windows: the fixed frame, sill and board, sashes that turn into the room or tilt, slide (a lift-and-slide door) or swing out
// at the bottom (top-hung), glazing bars, and indoor glass walls.

import { Color } from "three";
import { openingStyle } from "../../model.ts";
import { ALWAYS, shade } from "../geo.ts";
import type { Ctx } from "./context.ts";
import { FRAME, FRAME_TOP, GLASS, OPEN_ANGLE, OPEN_WARM, SASH, SILL, TILT_ANGLE, TOP_HUNG_ANGLE } from "./palette.ts";
import { panel, splitBox, type Frame } from "./primitives.ts";

/**
 * An indoor glass wall: a slim frame, glass from the floor up, no sashes. The mullions divide it into as many panes as the
 * opening asks for; without a number they come about every 0.9 m, and none at all for a single full pane.
 */
export function glassWall(c: Ctx): void {
  const { info, frame, fold, mid } = c;
  const [W, S, T] = [info.width, info.sill, info.top];
  const [fw, fd] = [0.04, 0.025];
  const frameColor = new Color(FRAME);
  const frameTop = new Color(FRAME_TOP);
  const bar = (x0: number, x1: number, y0: number, y1: number) => splitBox(c.frames, frame, { x0, x1, n0: mid - fd, n1: mid + fd, y0, y1 }, frameColor, frameTop, fold);
  bar(0, fw, S, T);
  bar(W - fw, W, S, T);
  bar(fw, W - fw, S, S + 0.03);
  bar(fw, W - fw, T - fw, T);
  const asked = info.opening.panes;
  const panes = Math.max(1, asked == null ? Math.max(1, Math.round((W - 2 * fw) / 0.9)) : Math.round(asked));
  const paneWidth = (W - 2 * fw) / panes;
  for (let k = 1; k < panes; k++) bar(fw + k * paneWidth - 0.02, fw + k * paneWidth + 0.02, S + 0.03, T - fw);
  for (let k = 0; k < panes; k++) {
    const x0 = fw + k * paneWidth + (k ? 0.02 : 0);
    const x1 = fw + (k + 1) * paneWidth - (k < panes - 1 ? 0.02 : 0);
    panel(c.glass, frame, x0, x1, mid, S + 0.03, T - fw, GLASS, fold);
  }
}

interface Sash {
  atStart: boolean;
  x0: number;
  x1: number;
  open: number;
  tilt: number;
  /** A sliding window's pane: how far it moves along the wall when fully open, and its track (0: the fixed panes, further out). */
  slide?: number;
  track?: 0 | 1;
}

/**
 * The panes of a sliding window or lift-and-slide door. One leaf: the pane at the hinge side slides in front of the fixed one.
 * Two leaves: four panes, the middle two slide outwards in front of the fixed outer ones, each on its own contact.
 */
export function slidingPanes(W: number, fw: number, hingeAtStart: boolean, leaves: 1 | 2, open: number, open2: number): Sash[] {
  const inner = W - 2 * fw;
  const overlap = 0.04;
  if (leaves === 2) {
    const pane = inner / 4 + overlap / 2;
    const run = pane - overlap - 0.02;
    return [
      { atStart: true, x0: fw, x1: fw + pane, open: 0, tilt: 0, slide: 0, track: 0 },
      { atStart: true, x0: fw + inner / 4 - overlap / 2, x1: fw + inner / 2, open: hingeAtStart ? open : open2, tilt: 0, slide: -run, track: 1 },
      { atStart: false, x0: fw + inner / 2, x1: W - fw - inner / 4 + overlap / 2, open: hingeAtStart ? open2 : open, tilt: 0, slide: run, track: 1 },
      { atStart: false, x0: W - fw - pane, x1: W - fw, open: 0, tilt: 0, slide: 0, track: 0 },
    ];
  }
  const half = inner / 2;
  const run = half - overlap - 0.02;
  // the moving pane at the hinge side slides towards the fixed one
  return hingeAtStart
    ? [
        { atStart: true, x0: fw, x1: fw + half + overlap / 2, open, tilt: 0, slide: run, track: 1 },
        { atStart: false, x0: fw + half - overlap / 2, x1: W - fw, open: 0, tilt: 0, slide: 0, track: 0 },
      ]
    : [
        { atStart: true, x0: fw, x1: fw + half + overlap / 2, open: 0, tilt: 0, slide: 0, track: 0 },
        { atStart: false, x0: fw + half - overlap / 2, x1: W - fw, open, tilt: 0, slide: -run, track: 1 },
      ];
}

/** A normal window: the fixed frame in the middle of the wall, a board inside and a sill outside, and one or two sashes. */
export function window(c: Ctx): void {
  const { info, state, frame, fold, mid } = c;
  const [W, S, T] = [info.width, info.sill, info.top];
  const [fw, fd] = [0.06, 0.035];
  const frameColor = new Color(FRAME);
  const frameTop = new Color(FRAME_TOP);
  const sillColor = new Color(SILL);
  const bar = (x0: number, x1: number, y0: number, y1: number) => splitBox(c.frames, frame, { x0, x1, n0: mid - fd, n1: mid + fd, y0, y1 }, frameColor, frameTop, fold);
  const lowerBar = S + (S > 0.05 ? fw : 0.03);
  bar(0, fw, S, T);
  bar(W - fw, W, S, T);
  bar(fw, W - fw, S, lowerBar);
  bar(fw, W - fw, T - fw, T);
  // a window board inside and a sill outside (automatic: both above 30 cm; or as chosen for this window)
  const boards = info.opening.sill_boards ?? "auto";
  if (boards !== "none" && (boards !== "auto" || S > 0.3)) {
    if (boards !== "outside") splitBox(c.frames, frame, { x0: -0.04, x1: W + 0.04, n0: mid + fd, n1: info.faceRoom + 0.07, y0: S - 0.03, y1: S }, sillColor, frameTop, fold);
    if (info.exterior && boards !== "inside") splitBox(c.frames, frame, { x0: -0.03, x1: W + 0.03, n0: -info.faceOut - 0.06, n1: mid - fd, y0: S - 0.04, y1: S - 0.02 }, sillColor, frameTop, fold);
  }

  // sashes rotate into the room around their hinge, or tilt around their bottom edge; a double window (or French door) has
  // two sashes meeting in the middle, each tilting on its own
  const barWidth = 0.055;
  const [sy0, sy1] = [lowerBar, T - fw];
  const [n0, n1] = [mid + fd, mid + fd + 0.06];
  const hinge = info.hingeAtStart;
  const opens = info.opening.opens ?? "turn";
  const sashes: Sash[] =
    opens === "slide"
      ? slidingPanes(W, fw, hinge, info.opening.leaves, state.open, state.open2 ?? 0)
      : info.opening.leaves === 2
      ? [
          { atStart: hinge, x0: hinge ? fw : W / 2, x1: hinge ? W / 2 : W - fw, open: state.open, tilt: state.tilt },
          { atStart: !hinge, x0: hinge ? W / 2 : fw, x1: hinge ? W - fw : W / 2, open: state.open2 ?? 0, tilt: state.tilt2 ?? 0 },
        ]
      : [{ atStart: hinge, x0: fw, x1: W - fw, open: state.open, tilt: state.tilt }];
  const style = openingStyle(info.opening, info.exterior);
  for (const sash of sashes) {
    // a top-hung sash opens with its contact or a tilt sensor alike; a fixed pane never glows
    const swingOut = opens === "top" ? Math.max(sash.open, sash.tilt) * TOP_HUNG_ANGLE : 0;
    const moves = opens !== "slide" || !!sash.slide;
    const ajar = moves && (sash.open > 0.02 || sash.tilt > 0.02);
    const alert = c.markClosed ? !!state.sensed && !ajar : ajar;
    const side = alert ? shade(OPEN_WARM, 0.75) : new Color(SASH);
    const top = alert ? shade(OPEN_WARM, 0.95) : frameTop;
    const sashWidth = sash.x1 - sash.x0;
    const turning = opens === "turn";
    const theta = turning ? sash.open * OPEN_ANGLE : 0;
    const lean = turning ? sash.tilt * TILT_ANGLE : 0;
    // a sliding pane runs in the sash plane; the fixed panes of a sliding window sit one track further out, so it passes in front of them
    const shift = (sash.slide ?? 0) * sash.open;
    const track = opens === "slide" && sash.track === 0 ? -0.065 : 0;
    // sash coordinates: u from the hinge across the sash, then n and y
    const sashFrame: Frame = (u, n, y) => {
      if (swingOut > 0) {
        // top-hung: turned about the sash's top edge, so its bottom swings out of the wall (towards -n)
        const [dn, dy] = [n - n0, y - sy1];
        const [c, s] = [Math.cos(swingOut), Math.sin(swingOut)];
        return frame(sash.atStart ? sash.x0 + u : sash.x1 - u, n0 + dn * c + dy * s, sy1 - dn * s + dy * c);
      }
      const dy = y - sy0;
      const tilted = n + dy * Math.sin(lean) + track;
      const yy = sy0 + dy * Math.cos(lean);
      const along = u * Math.cos(theta) - (tilted - n0) * Math.sin(theta);
      const across = n0 + (tilted - n0) * Math.cos(theta) + u * Math.sin(theta);
      return frame((sash.atStart ? sash.x0 + along : sash.x1 - along) + shift, across, yy);
    };
    // a sash that has swung into the room (or out of the wall) belongs to no wall: keep it visible
    const sashFold = { cut: fold.cut, bucket: theta > 0.05 || swingOut > 0.05 ? ALWAYS : fold.bucket };
    const part = (xa: number, xb: number, ya: number, yb: number, na = n0, nb = n1) => splitBox(c.frames, sashFrame, { x0: xa, x1: xb, n0: na, n1: nb, y0: ya, y1: yb }, side, top, sashFold);
    part(0, barWidth, sy0, sy1);
    part(sashWidth - barWidth, sashWidth, sy0, sy1);
    part(barWidth, sashWidth - barWidth, sy0, sy0 + barWidth);
    part(barWidth, sashWidth - barWidth, sy1 - barWidth, sy1);
    panel(c.glass, sashFrame, barWidth, sashWidth - barWidth, (n0 + n1) / 2, sy0 + barWidth, sy1 - barWidth, alert ? shade(OPEN_WARM, 0.16) : GLASS, sashFold);
    if (style === "bars") {
      // glazing bars: a cross over the pane
      const [ym, nm] = [(sy0 + sy1) / 2, (n0 + n1) / 2];
      part(barWidth, sashWidth - barWidth, ym - 0.012, ym + 0.012, nm - 0.012, nm + 0.012);
      part(sashWidth / 2 - 0.012, sashWidth / 2 + 0.012, sy0 + barWidth, sy1 - barWidth, nm - 0.012, nm + 0.012);
    }
  }
}
