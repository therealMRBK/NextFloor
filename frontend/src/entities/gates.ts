// Gates in fences: whether each is open, from the entity that drives it (cover open, switch on, lock unlocked) or its contact (on = open).

import type { Building } from "../model.ts";
import type { HomeAssistant } from "../types.ts";

/** Gate id → open, for every gate of every fence that has an entity or a contact with a state. */
export function gateStates(hass: HomeAssistant, building: Building): Map<string, boolean> {
  const out = new Map<string, boolean>();
  for (const floor of building.floors) {
    for (const area of floor.outdoor ?? []) {
      for (const gate of area.gates ?? []) {
        const driver = gate.entity ? hass.states[gate.entity]?.state : undefined;
        const contact = gate.contact ? hass.states[gate.contact]?.state : undefined;
        if (driver === undefined && contact === undefined) continue;
        const byDriver = driver === "open" || driver === "opening" || driver === "on" || driver === "unlocked" || driver === "unlocking";
        out.set(gate.id, byDriver || contact === "on");
      }
    }
  }
  return out;
}
