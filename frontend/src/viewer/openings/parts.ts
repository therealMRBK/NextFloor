// The moving and state-dependent parts of doors and windows: fixed frames, sashes with glass (open or tilted, from contact
// sensors), window sills, door frames, blind boxes and blind slats. They are rebuilt as merged geometry whenever a state
// changes (and during the short open/close animation), so all windows of a floor stay three draw calls: frames, glass and blinds.

import { openingStyle } from "../../model.ts";
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

  // pieces of one pane that follows a curved wall: only the first and the last get a jamb, so the glass is
  // continuous where two of them meet. Every other opening is a group of one and keeps both jambs.
  const groups = new Map<string, number[]>();
  infos.forEach((info, i) => {
    const key = paneOf(info);
    groups.set(key, [...(groups.get(key) ?? []), i]);
  });
  const ends = new Map<number, [boolean, boolean]>();
  for (const list of groups.values()) list.forEach((i, k) => ends.set(i, [k === 0, k === list.length - 1]));

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
    };
    // a passage (a wall opening without a door) shows nothing but the gap in the wall
    if ((type === "door" && style !== "passage") || type === "garage") doorFrame(ctx);
    if (type === "door") doorLeaves(ctx);
    else if (type === "garage") garageDoor(ctx);
    else if (style === "glass_wall") glassWall(ctx);
    else window(ctx);
    // a cellar window below the ground gets its light well
    if (needsLightWell(ctx, ground)) lightWell(ctx, ground);
    blind(ctx);
    frameTris.push({ id: info.opening.id, start: starts.frames, end: frames.count });
    glassTris.push({ id: info.opening.id, start: starts.glass, end: glass.count });
    blindTris.push({ id: info.opening.id, start: starts.blinds, end: blinds.count });
  }
  return { frames: frames.geometry(), glass: glass.geometry(), blinds: blinds.geometry(), frameTris, glassTris, blindTris };
}
