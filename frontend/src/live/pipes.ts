// Heating and water pipes (#118): each drawn pipe becomes a visible route in the energy layer, red for the supply, blue for
// the return, orange for hot and light blue for cold water; particles flow along it while its entity is active.

import type { HassEntity } from "../types.ts";
import { isActive } from "../entities/kinds.ts";
import { pipeRouteKey, type Building, type PipeKind } from "../model.ts";
import type { EnergyArc } from "../viewer/live-energy.ts";
import { routeOf } from "./energy-flow.ts";

/** The colour of what a pipe carries (r, g, b 0…255). */
export const PIPE_COLORS: Record<PipeKind, [number, number, number]> = {
  supply: [255, 70, 50],
  return: [70, 140, 255],
  hot: [255, 150, 40],
  cold: [110, 205, 255],
};

/** The height of a pipe above its floor (metres). */
const PIPE_Y = 0.12;

/** The flow a running pipe shows (a middling amount of particles). */
const FLOW = 1500;

/** Whether a pipe's entity says it is flowing: active by the usual rules, or a number above zero (a pump's speed or power). */
export function pipeFlowing(st: HassEntity | undefined): boolean {
  if (!st || st.state === "unavailable" || st.state === "unknown") return false;
  const n = Number(st.state);
  return Number.isFinite(n) ? n > 0 : isActive(st);
}

/** The pipes of the plan as arcs for the energy layer; a pipe without a route of two points is left out. */
export function pipeArcs(b: Building, states: Record<string, HassEntity | undefined>): EnergyArc[] {
  const arcs: EnergyArc[] = [];
  for (const pipe of b.energy.pipes ?? []) {
    const route = routeOf(b, pipeRouteKey(pipe.id));
    if (!route || route.points.length < 2) continue;
    const at = route.points.map((p) => ({ floorId: p.floor_id, x: p.x, z: p.z, y: PIPE_Y }));
    const flowing = !!pipe.entity && pipeFlowing(states[pipe.entity]);
    // a route needs a point between its ends to be drawn straight instead of as an arc: two points get their middle
    const [first, last] = [at[0], at[at.length - 1]];
    const via = at.length > 2 ? at.slice(1, -1) : [{ ...first, x: (first.x + last.x) / 2, z: (first.z + last.z) / 2 }];
    arcs.push({ key: pipeRouteKey(pipe.id), from: first, to: last, via, power: flowing ? FLOW : 0, color: PIPE_COLORS[pipe.kind], cable: true });
  }
  return arcs;
}
