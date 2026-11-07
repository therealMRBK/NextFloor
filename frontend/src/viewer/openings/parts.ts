// The moving and state-dependent parts of doors and windows: fixed frames, sashes with glass (open or tilted, from contact
// sensors), window sills, door frames, blind boxes and blind slats. They are rebuilt as merged geometry whenever a state
// changes (and during the short open/close animation), so all windows of a floor stay three draw calls: frames, glass and blinds.

import { openingStyle, type Vec2 } from "../../model.ts";
import type { OpeningInfo } from "../build.ts";
import { GeoBuffer } from "../geo.ts";
import { blind } from "./blinds.ts";
import type { Ctx } from "./context.ts";
import { doorFrame, doorLeaves, garageDoor } from "./doors.ts";
import { lightWell, needsLightWell } from "./light-well.ts";
import { CLOSED, type OpeningParts, type OpeningState, type TriRange } from "./types.ts";
import { glassWall, window } from "./windows.ts";

/** The id that groups the pieces of one glass pane; a normal opening is a group of its own. */
const paneOf = (info: OpeningInfo): string => info.opening.front ?? info.opening.id;

export function buildOpeningParts(infos: readonly OpeningInfo[], states: ReadonlyMap<string, OpeningState>, cut: number, ground = -Infinity): OpeningParts {
  const frames = new GeoBuffer();
  const glass = new GeoBuffer();
  const blinds = new GeoBuffer(true);
  const frameTris: TriRange[] = [];
  const glassTris: TriRange[] = [];
  const blindTris: TriRange[] = [];

  // pieces of one pane that follows a curved wall: only the two outer ends get a jamb, so the glass is
  // continuous where two of them meet. Every other opening is a group of one and keeps both jambs.
  const groups = new Map<string, number[]>();
  infos.forEach((info, i) => {
    const key = paneOf(info);
    groups.set(key, [...(groups.get(key) ?? []), i]);
  });
  // Which end is an outer end does not follow from the order of the plan: the pieces of one pane are
  // stored in whatever order the openings happen to be listed, and on a curved wall that is often not the
  // order along the outline. It follows from the geometry instead — an end that another piece of the same
  // pane meets is a join, not the end of the pane. Getting this wrong draws both jambs of a two-piece
  // pane right at the join between them, which is a 4 cm post standing in the middle of the glass.
  const endsOf = (info: OpeningInfo): [Vec2, Vec2] => [
    [info.start[0], info.start[1]],
    [info.start[0] + info.axis[0] * info.width, info.start[1] + info.axis[1] * info.width],
  ];
  const keyOf = (p: Vec2) => `${Math.round(p[0] * 50)},${Math.round(p[1] * 50)}`;
  const ends = new Map<number, [boolean, boolean]>();
  // Two walls at an angle have two different middles, so the ends of two pieces of one pane stand
  // 2 * mid * sin(angle/2) apart — 2.6 cm on a 10 degree bend, which reads as a slot through the glass.
  // Running each piece into the bisector of the bend (mid * tan(angle/2)) puts both end edges on the same
  // vertical line, and the pane is one surface again. A real corner is left alone: there the miter would
  // be longer than the wall is thick, and a corner is allowed to look like a corner.
  const over = new Map<number, [number, number]>();
  for (const list of groups.values()) {
    const startsAt = new Map<string, number[]>();
    const endsAt = new Map<string, number[]>();
    for (const i of list) {
      const [s, e] = endsOf(infos[i]);
      startsAt.set(keyOf(s), [...(startsAt.get(keyOf(s)) ?? []), i]);
      endsAt.set(keyOf(e), [...(endsAt.get(keyOf(e)) ?? []), i]);
    }
    const reach = (i: number, other: number | undefined) => {
      if (other == null || other === i) return 0;
      const mid = Math.abs((infos[i].faceRoom - infos[i].faceOut) / 2);
      const [a, b] = [infos[i].axis, infos[other].axis];
      const cos = Math.max(-1, Math.min(1, a[0] * b[0] + a[1] * b[1]));
      const angle = Math.acos(cos);
      return angle < Math.PI / 2 ? Math.min(mid * Math.tan(angle / 2), mid) : 0;
    };
    for (const i of list) {
      const [s, e] = endsOf(infos[i]);
      const before = (endsAt.get(keyOf(s)) ?? []).find((j) => j !== i);
      const after = (startsAt.get(keyOf(e)) ?? []).find((j) => j !== i);
      ends.set(i, [before == null, after == null]);
      over.set(i, [reach(i, before), reach(i, after)]);
    }
  }

  for (let i = 0; i < infos.length; i++) {
    const info = infos[i];
    const starts = { frames: frames.count, glass: glass.count, blinds: blinds.count };
    const type = info.opening.type;
    const style = openingStyle(info.opening, info.exterior);
    const [first, last] = ends.get(i) ?? [true, true];
    const ctx: Ctx = {
      info,
      state: states.get(paneOf(info)) ?? CLOSED,
      // local frame: x from the opening's start along the wall, n from the wall axis towards the room
      frame: (x, n, y) => [info.start[0] + info.axis[0] * x + info.toRoom[0] * n, y, info.start[1] + info.axis[1] * x + info.toRoom[1] * n],
      mid: (info.faceRoom - info.faceOut) / 2,
      // highlighted while open, or while closed when the opening asks for it (and a sensor knows)
      markClosed: info.opening.mark === "closed",
      fold: { cut, bucket: info.bucket },
      frames,
      glass,
      blinds,
      first,
      last,
      over: over.get(i) ?? [0, 0],
    };
    // a passage (a wall opening without a door) shows nothing but the gap in the wall
    if ((type === "door" && style !== "passage") || type === "garage") doorFrame(ctx);
    if (type === "door") doorLeaves(ctx);
    else if (type === "garage") garageDoor(ctx);
    else if (style === "glass_wall") glassWall(ctx);
    else window(ctx);
    // a cellar window below the ground gets its light well
    if (needsLightWell(ctx, ground)) lightWell(ctx, ground);
    // a garage door's cover moves the door itself; it has no blind in front of it (#85)
    if (type !== "garage") blind(ctx);
    // picking returns the id the model knows, not a piece id
    const id = paneOf(info);
    frameTris.push({ id, start: starts.frames, end: frames.count });
    glassTris.push({ id, start: starts.glass, end: glass.count });
    blindTris.push({ id, start: starts.blinds, end: blinds.count });
  }
  return { frames: frames.geometry(), glass: glass.geometry(), blinds: blinds.geometry(), frameTris, glassTris, blindTris };
}
