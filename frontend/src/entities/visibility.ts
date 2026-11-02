// Visibility conditions: a piece of furniture that only shows while an entity is in a state (seasonal decoration
// behind an input_boolean, the Christmas tree in December, a tent while a calendar says "camping"). Pure functions;
// the 3D view leaves hidden pieces out of the scene.

import type { Building, Furniture } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import { isUnavailable } from "./kinds.ts";

/** A visibility condition: the piece shows while `entity` is in `state` (null: while it is on), or the other way round. */
export interface ShowWhen {
  entity: string;
  /** The state to match (several separated by commas, compared without case); null = "on", "home", "open" or "true". */
  state?: string | null;
  /** Shown while the condition is NOT met. */
  invert?: boolean;
}

const ON = new Set(["on", "home", "open", "true", "active", "playing", "heat", "heating"]);

/** Whether a piece of furniture is shown now. Without a condition, or while its entity is missing or unavailable, it is shown. */
export function furnitureShown(hass: HomeAssistant | undefined, f: Pick<Furniture, "show_when">): boolean {
  const cond = f.show_when;
  if (!cond?.entity || !hass) return true;
  const st = hass.states[cond.entity];
  if (!st || isUnavailable(st)) return true;
  const state = String(st.state).toLowerCase();
  const want = (cond.state ?? "").split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
  const met = want.length ? want.includes(state) : ON.has(state) || (Number.isFinite(Number(state)) && Number(state) > 0);
  return cond.invert ? !met : met;
}

/** Ids of the pieces hidden by their condition right now, sorted (a key that only changes when one appears or goes). */
export function hiddenFurniture(hass: HomeAssistant | undefined, b: Building): string[] {
  const out: string[] = [];
  for (const floor of b.floors) for (const f of floor.furniture) if (!furnitureShown(hass, f)) out.push(f.id);
  return out.sort();
}

/** The building without the hidden pieces (the same object when nothing is hidden). */
export function withoutHidden(b: Building, hidden: readonly string[]): Building {
  if (!hidden.length) return b;
  const set = new Set(hidden);
  return { ...b, floors: b.floors.map((floor) => (floor.furniture.some((f) => set.has(f.id)) ? { ...floor, furniture: floor.furniture.filter((f) => !set.has(f.id)) } : floor)) };
}
