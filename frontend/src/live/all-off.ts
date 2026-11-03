// Everything off: the lights, switches, fans and media of a room or a floor in one tap, and the calls that bring them back as they
// were (lights with their brightness and colour), for the few seconds the undo is offered.

import type { Floor } from "../model.ts";
import type { HassEntity } from "../types.ts";
import { lightSetting, moodCalls } from "./moods.ts";

export interface ServiceCall {
  domain: string;
  service: string;
  data: Record<string, unknown>;
}

const domainOf = (id: string) => id.slice(0, id.indexOf("."));
const SWITCHES = new Set(["switch", "fan", "input_boolean"]);

/** The calls that switch off what is on, and those that undo it. `count` is how many things it switches. */
export function allOffPlan(states: readonly (HassEntity | undefined)[]): { off: ServiceCall[]; undo: ServiceCall[]; count: number } {
  const lights: HassEntity[] = [];
  const switches = new Map<string, string[]>();
  const pause: string[] = [];
  const shut: string[] = [];
  for (const st of states) {
    if (!st) continue;
    const domain = domainOf(st.entity_id);
    if (domain === "light" && st.state === "on") lights.push(st);
    else if (SWITCHES.has(domain) && st.state === "on") switches.set(domain, [...(switches.get(domain) ?? []), st.entity_id]);
    else if (domain === "media_player" && st.state === "playing") pause.push(st.entity_id);
    else if (domain === "media_player" && (st.state === "on" || st.state === "idle")) shut.push(st.entity_id);
  }
  const off: ServiceCall[] = [];
  const undo: ServiceCall[] = [];
  if (lights.length) {
    off.push({ domain: "light", service: "turn_off", data: { entity_id: lights.map((l) => l.entity_id) } });
    undo.push(...moodCalls(lights.map(lightSetting)).map((c) => ({ domain: "light", service: c.service, data: c.data })));
  }
  for (const [domain, ids] of switches) {
    off.push({ domain, service: "turn_off", data: { entity_id: ids } });
    undo.push({ domain, service: "turn_on", data: { entity_id: ids } });
  }
  if (pause.length) {
    off.push({ domain: "media_player", service: "media_pause", data: { entity_id: pause } });
    undo.push({ domain: "media_player", service: "media_play", data: { entity_id: pause } });
  }
  if (shut.length) {
    off.push({ domain: "media_player", service: "turn_off", data: { entity_id: shut } });
    undo.push({ domain: "media_player", service: "turn_on", data: { entity_id: shut } });
  }
  const count = lights.length + [...switches.values()].reduce((n, ids) => n + ids.length, 0) + pause.length + shut.length;
  return { off, undo, count };
}

/** What the plan shows on a floor that "everything off" may switch: device pins and the entities of furniture (lamps, TVs, sockets). */
export function floorSwitchables(floor: Floor): string[] {
  const ids = new Set<string>();
  const take = (id: unknown) => {
    if (typeof id === "string" && /^(light|switch|fan|input_boolean|media_player)\./.test(id)) ids.add(id);
  };
  for (const p of floor.placements) take(p.entity_id);
  for (const m of floor.furniture) {
    take(m.entity);
    for (const e of m.extra_lights ?? []) take(e);
  }
  return [...ids];
}
