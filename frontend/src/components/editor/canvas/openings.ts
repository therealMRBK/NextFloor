// Doors, windows and garage doors in the plan: a gap through the wall and a symbol in it (swinging leaves, panes, a garage track).

import { nothing, svg, type TemplateResult } from "lit";
import { locateOpening, openingHost, pointOnRoomEdge, type Wall } from "../../../geometry/walls.ts";
import { isFrontDoor, openingStyle, sidelightLayout, signedArea, type Floor, type Opening, type Room, type Vec2 } from "../../../model.ts";
import type { CanvasContext } from "./context.ts";

type Sym = TemplateResult | TemplateResult[] | typeof nothing;

/** Where an opening sits: its two ends on the room edge, the direction into the room, and how far the wall reaches either side. */
interface Frame {
  room: Room;
  edge: number;
  p0: Vec2;
  p1: Vec2;
  /** Into the room (outlines may run either way round), and which way round that is. */
  inward: Vec2;
  direction: 1 | -1;
  /** Wall thickness on the room's side and on the far side. */
  across: [number, number];
  exterior: boolean;
  /** A point of the edge moved `by` metres into the room (negative: out of it), in screen coordinates. */
  at(p: Vec2, by: number): [number, number];
}

function frameOf(ctx: CanvasContext, o: Opening, floor: Floor, walls: readonly Wall[]): Frame | null {
  const host = openingHost(o, floor.rooms, floor.walls ?? []);
  if (!host) return null;
  const { room, edge } = host;
  const hit = locateOpening(walls as Wall[], o, host);
  const p0 = pointOnRoomEdge(room, edge, o.offset - o.width / 2);
  const p1 = pointOnRoomEdge(room, edge, o.offset + o.width / 2);
  const along: Vec2 = [(p1[0] - p0[0]) / (o.width || 1), (p1[1] - p0[1]) / (o.width || 1)];
  const direction = signedArea(room.points) >= 0 ? 1 : -1;
  const inward: Vec2 = [-along[1] * direction, along[0] * direction];
  let across: [number, number] = [0.06, 0.06];
  if (hit) across = hit.wall.free || hit.wall.roomLeft === room.id ? [hit.wall.left, hit.wall.right] : [hit.wall.right, hit.wall.left];
  return { room, edge, p0, p1, inward, direction, across, exterior: hit?.wall.exterior ?? false, at: (p, by) => ctx.toScreen([p[0] + inward[0] * by, p[1] + inward[1] * by]) };
}

const line = (a: [number, number], b: [number, number], klass = "") => svg`<line class=${klass} x1=${a[0]} y1=${a[1]} x2=${b[0]} y2=${b[1]} />`;

/** A garage door: the door panel just inside the room, and its track under the ceiling drawn dashed. */
function garageSymbol(f: Frame, o: Opening): Sym {
  const inner = f.across[0] - 0.04;
  const reach = f.across[0] + Math.min(2, o.height);
  const [a0, a1, b0, b1] = [f.at(f.p0, inner), f.at(f.p1, inner), f.at(f.p0, reach), f.at(f.p1, reach)];
  return svg`${line(a0, a1)}<path class="nf-open-track" d="M${a0[0]} ${a0[1]}L${b0[0]} ${b0[1]}M${a1[0]} ${a1[1]}L${b1[0]} ${b1[1]}" />`;
}

/** A door: leaves swinging into the room (or out of it) from the hinge side, with fixed glass beside the leaf for sidelights. */
function doorSymbol(ctx: CanvasContext, f: Frame, o: Opening): Sym {
  const out = o.swing === "out";
  const face = out ? -f.across[1] : f.across[0];
  const middle = (f.across[0] - f.across[1]) / 2;
  // "left" is seen from the room, so which end the hinge is at depends on which way round the outline runs
  const hingeAtStart = (o.hinge === "left") === f.direction > 0;
  const style = openingStyle(o, f.exterior);
  const two = o.leaves === 2;
  let [leafStart, leafEnd] = [f.p0, f.p1];
  let panes: [Vec2, Vec2][] = [];
  const lights = sidelightLayout(o.width, style, hingeAtStart, o);
  if (lights) {
    const onEdge = (k: number): Vec2 => (k <= 0.02 ? f.p0 : k >= o.width - 0.02 ? f.p1 : pointOnRoomEdge(f.room, f.edge, o.offset - o.width / 2 + k));
    [leafStart, leafEnd] = [onEdge(lights.x0), onEdge(lights.x1)];
    panes = lights.panels.map(([a, b]) => [onEdge(a), onEdge(b)]);
  }
  const centre: Vec2 = [(leafStart[0] + leafEnd[0]) / 2, (leafStart[1] + leafEnd[1]) / 2];
  const leafWidth = (two ? 0.5 : 1) * Math.hypot(leafEnd[0] - leafStart[0], leafEnd[1] - leafStart[1]);
  const glass = panes.map(([a, b]) => svg`${line(f.at(a, middle + 0.035), f.at(b, middle + 0.035), "nf-open-pane")}${line(f.at(a, middle - 0.035), f.at(b, middle - 0.035), "nf-open-pane")}`);
  const swing = (hinge: Vec2, free: Vec2) => {
    const [hx, hy] = f.at(hinge, face);
    const [fx, fy] = f.at(free, face);
    const leaf = f.at(hinge, face + (out ? -leafWidth : leafWidth));
    const radius = leafWidth * ctx.scale;
    const turn = (leaf[0] - hx) * (fy - hy) - (leaf[1] - hy) * (fx - hx) > 0 ? 1 : 0;
    return svg`<path d="M${hx} ${hy}L${leaf[0]} ${leaf[1]}A${radius} ${radius} 0 0 ${turn} ${fx} ${fy}" />`;
  };
  let body: TemplateResult;
  if (style === "passage") body = line(f.at(f.p0, middle), f.at(f.p1, middle), "nf-open-passage");
  else if (style === "sliding") body = line(f.at(leafStart, face), f.at(leafEnd, face));
  else if (two) body = svg`${swing(leafStart, centre)}${swing(leafEnd, centre)}`;
  else body = hingeAtStart ? swing(leafStart, leafEnd) : swing(leafEnd, leafStart);
  return svg`${glass}${body}`;
}

/** A window: two panes in the middle of the wall, and for a double window a post between them. */
function windowSymbol(f: Frame, o: Opening): Sym {
  const middle = (f.across[0] - f.across[1]) / 2;
  if (o.opens === "slide") {
    // a sliding window: its panes on two tracks, overlapping a little, as plans draw them
    const panes = o.leaves === 2 ? 4 : 2;
    const along = (t: number): [number, number] => [f.p0[0] + (f.p1[0] - f.p0[0]) * t, f.p0[1] + (f.p1[1] - f.p0[1]) * t];
    const parts = Array.from({ length: panes }, (_, k) => {
      const track = o.leaves === 2 ? (k === 1 || k === 2 ? 0.035 : -0.035) : k === 0 ? 0.035 : -0.035;
      return line(f.at(along(Math.max(0, k / panes - 0.03)), middle + track), f.at(along(Math.min(1, (k + 1) / panes + 0.03)), middle + track));
    });
    return svg`${parts}`;
  }
  const post = o.leaves === 2 ? line(f.at([(f.p0[0] + f.p1[0]) / 2, (f.p0[1] + f.p1[1]) / 2], f.across[0]), f.at([(f.p0[0] + f.p1[0]) / 2, (f.p0[1] + f.p1[1]) / 2], -f.across[1])) : nothing;
  return svg`${line(f.at(f.p0, middle + 0.035), f.at(f.p1, middle + 0.035))}${line(f.at(f.p0, middle - 0.035), f.at(f.p1, middle - 0.035))}${post}`;
}

export function openingsLayer(ctx: CanvasContext, floor: Floor, walls: readonly Wall[], selectedId: string | null): TemplateResult {
  const one = (o: Opening) => {
    const f = frameOf(ctx, o, floor, walls);
    if (!f) return nothing;
    const gap = [f.at(f.p0, f.across[0] + 0.01), f.at(f.p1, f.across[0] + 0.01), f.at(f.p1, -f.across[1] - 0.01), f.at(f.p0, -f.across[1] - 0.01)];
    const front = o.type === "door" && isFrontDoor(openingStyle(o, f.exterior));
    const klass = `nf-open nf-open-${o.type}${front ? " nf-open-front" : ""}${o.id === selectedId ? " nf-open-sel" : ""}`;
    const symbol = o.type === "garage" ? garageSymbol(f, o) : o.type === "door" ? doorSymbol(ctx, f, o) : windowSymbol(f, o);
    return svg`<g data-opening=${o.id} class=${klass}><polygon class="nf-open-gap" points=${gap.map((p) => p.join(",")).join(" ")} />${symbol}</g>`;
  };
  return svg`<g>${floor.openings.map(one)}</g>`;
}
