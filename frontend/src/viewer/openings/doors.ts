// Doors and garage doors: the door frame, leaves that turn on their hinges or slide, sidelights, handles, sectional garage doors.

import { Color } from "three";
import { isFrontDoor, openingStyle, sidelightLayout } from "../../model.ts";
import { ALWAYS, DEG, shade } from "../geo.ts";
import type { Ctx } from "./context.ts";
import { DOOR_ANGLE, FRAME, FRAME_TOP, GLASS, HANDLE, HANDLE_TOP, LEAF, LEAF_FRONT, LEAF_FRONT_TOP, LEAF_TOP, OPEN_WARM, SILL, UNLOCKED } from "./palette.ts";
import { flatPanel, panel, splitBox, type Frame } from "./primitives.ts";

/** The frame (Zarge) around a door or garage opening, covering the reveal on both faces. An open garage door glows warm. */
export function doorFrame(c: Ctx): void {
  const { info, state, frame, fold } = c;
  // B: the floor the door stands on – the room's own level when it is set higher or lower than its floor (floor_offset), plus a raised sill
  const [W, T, B] = [info.width, info.top, info.sill];
  const garageOpen = info.opening.type === "garage" && (c.markClosed ? !!state.sensed && (state.cover ?? 1) >= 0.95 : (state.cover ?? 1) < 0.95);
  const side = garageOpen ? shade(OPEN_WARM, 0.8) : new Color(FRAME);
  const top = garageOpen ? shade(OPEN_WARM, 1) : new Color(FRAME_TOP);
  const [n0, n1] = [-info.faceOut - 0.012, info.faceRoom + 0.012];
  const piece = (x0: number, x1: number, y0: number) => splitBox(c.frames, frame, { x0, x1, n0, n1, y0, y1: T + 0.045 }, side, top, fold);
  piece(-0.045, 0.02, B);
  piece(W - 0.02, W + 0.045, B);
  piece(0.02, W - 0.02, T - 0.02);
}

/** A door: one leaf or two, each turning around its hinge (or sliding), with sidelights, a threshold and handles. */
export function doorLeaves(c: Ctx): void {
  const { info, state, frame, fold, mid } = c;
  const [W, T, B] = [info.width, info.top, info.sill];
  const H = T - B;
  const style = openingStyle(info.opening, info.exterior);
  const passage = style === "passage";
  const front = isFrontDoor(style);
  const swing = info.opening.swing === "out" ? -1 : 1;
  // the leaves are flush with the face they swing towards (the room, or the other side)
  const face = swing > 0 ? info.faceRoom : -info.faceOut;
  const double = info.opening.leaves === 2;
  const frameColor = new Color(FRAME);
  const frameTop = new Color(FRAME_TOP);

  // fixed glass beside the leaf: one sidelight opposite the hinge, or one on each side
  let x0 = 0.02;
  let x1 = W - 0.02;
  const lights = sidelightLayout(W, style, info.hingeAtStart, info.opening);
  if (lights) {
    for (const [a, b] of lights.panels) {
      const post = (xa: number, xb: number, ya: number, yb: number) => splitBox(c.frames, frame, { x0: xa, x1: xb, n0: mid - 0.03, n1: mid + 0.03, y0: ya, y1: yb }, frameColor, frameTop, fold);
      post(a, a + 0.04, B + 0.02, T - 0.02);
      post(b - 0.04, b, B + 0.02, T - 0.02);
      post(a, b, B + 0.02, B + 0.1);
      panel(c.glass, frame, a + 0.04, b - 0.04, mid, B + 0.1, T - 0.02, GLASS, fold);
    }
    x0 = lights.x0;
    x1 = lights.x1;
  }
  const leafWidth = double ? (x1 - x0) / 2 - 0.004 : x1 - x0;
  const thickness = front ? 0.06 : 0.04;
  if (front) {
    // a threshold across the wall, and a small light over the door outside
    splitBox(c.frames, frame, { x0: 0.02, x1: W - 0.02, n0: -info.faceOut - 0.02, n1: info.faceRoom, y0: B, y1: B + 0.02 }, new Color(SILL), frameTop, fold);
    if (info.exterior) splitBox(c.frames, frame, { x0: W / 2 - 0.08, x1: W / 2 + 0.08, n0: -info.faceOut - 0.1, n1: -info.faceOut, y0: T + 0.1, y1: T + 0.17 }, shade(OPEN_WARM, 0.55), shade(OPEN_WARM, 0.85), { cut: fold.cut, bucket: ALWAYS });
  }

  // the leaf's full swing: its own opening angle, else the usual one
  const swingAngle = info.opening.open_angle ? Math.min(180, Math.max(5, info.opening.open_angle)) * DEG : DOOR_ANGLE;
  const leaves: [boolean, number][] = passage ? [] : [[info.hingeAtStart, state.open]];
  if (double && !passage) leaves.push([!info.hingeAtStart, state.open2 ?? 0]);
  for (const [atStart, openness] of leaves) {
    const open = Math.min(1, Math.max(0, openness));
    const theta = style === "sliding" ? 0 : open * swingAngle;
    // a sliding leaf runs along the wall face past the hinge side instead of turning
    const slide = style === "sliding" ? open * leafWidth : 0;
    const leafFrame: Frame = (u, n, y) => {
      const along = u * Math.cos(theta) - n * Math.sin(theta) - slide;
      const across = face + swing * (n * Math.cos(theta) + u * Math.sin(theta) + (slide ? 0.05 : 0));
      return frame(atStart ? x0 + along : x1 - along, across, y);
    };
    // an open leaf has left its wall: keep it visible when the wall folds away
    const leafFold = { cut: fold.cut, bucket: open > 0.05 ? ALWAYS : fold.bucket };
    const warm = c.markClosed ? !!state.sensed && open < 0.05 : open > 0.9 && !(atStart === info.hingeAtStart && state.assumed);
    const side = warm ? shade(OPEN_WARM, 0.7) : new Color(front ? LEAF_FRONT : LEAF);
    const top = warm ? shade(OPEN_WARM, 0.9) : new Color(front ? LEAF_FRONT_TOP : LEAF_TOP);
    const part = (xa: number, xb: number, ya: number, yb: number, na = -thickness, nb = 0) => splitBox(c.frames, leafFrame, { x0: xa, x1: xb, n0: na, n1: nb, y0: ya, y1: yb }, side, top, leafFold);
    if (style === "glass") {
      // a glass door: slim stiles and rails around a pane
      part(0, 0.05, B + 0.01, T - 0.01);
      part(leafWidth - 0.05, leafWidth, B + 0.01, T - 0.01);
      part(0.05, leafWidth - 0.05, B + 0.01, B + 0.12);
      part(0.05, leafWidth - 0.05, T - 0.08, T - 0.01);
      panel(c.glass, leafFrame, 0.05, leafWidth - 0.05, -thickness / 2, B + 0.12, T - 0.08, GLASS, leafFold);
    } else part(0, leafWidth, B + 0.01, T - 0.01);
    if (style === "front_glass") panel(c.glass, leafFrame, 0.12, leafWidth - 0.12, 0.001, B + H * 0.55, T - 0.18, GLASS, leafFold);
    else if (front) panel(c.glass, leafFrame, 0.1, 0.18, 0.001, B + 0.3, T - 0.3, GLASS, leafFold);
    // a handle on both sides: a knob on a room door, a bar on a front door
    const height = B + Math.min(1.05, H * 0.5);
    const half = front ? 0.3 : 0.012;
    const [hx0, hx1] = front ? [leafWidth - 0.11, leafWidth - 0.08] : [leafWidth - 0.16, leafWidth - 0.05];
    const handle = (na: number, nb: number) => splitBox(c.frames, leafFrame, { x0: hx0, x1: hx1, n0: na, n1: nb, y0: height - half, y1: height + half }, new Color(HANDLE), new Color(HANDLE_TOP), leafFold);
    handle(0.004, 0.05);
    handle(-thickness - 0.05, -thickness - 0.004);
    // an unlocked smart lock: the leaf's free edge glows in the accent (cyan follows the user's accent colour)
    if (state.unlocked) {
      const glow = new Color(UNLOCKED);
      splitBox(c.frames, leafFrame, { x0: leafWidth - 0.012, x1: leafWidth + 0.004, n0: -thickness - 0.004, n1: 0.004, y0: B + 0.06, y1: T - 0.06 }, glow, glow, { cut: fold.cut, bucket: ALWAYS });
    }
  }
}

/** A sectional garage door: the closed part hangs in the opening, the open part lies under the ceiling. */
export function garageDoor(c: Ctx): void {
  const { info, state, frame, fold } = c;
  const [W, T, B] = [info.width, info.top, info.sill];
  const closed = Math.min(1, Math.max(0, state.cover ?? 1));
  const color = new Color(0xd4e0ff);
  const plane = info.faceRoom - 0.03;
  if (closed > 0.01) panel(c.blinds, frame, 0.02, W - 0.02, plane, B + (T - B) * (1 - closed), T, color, fold, 0.5);
  const lifted = (1 - closed) * (T - B);
  if (lifted > 0.01) flatPanel(c.blinds, frame, 0.02, W - 0.02, plane, plane + lifted, T + 0.03, color, fold.bucket, 0.5);
}
