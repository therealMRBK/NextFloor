// "View only": the 3D view, the room panel and the menus show everything but send nothing to Home Assistant. A wall tablet is easy to
// touch by accident; this makes it safe to leave open (#156). Home Assistant's own more-info dialog stays as it is.

import type { HomeAssistant } from "./types.ts";

const cache = new WeakMap<HomeAssistant, HomeAssistant>();

/** `hass` with every service call turned into a no-op; the same object for the same `hass`, so lit sees no change. */
export function withoutControl(hass: HomeAssistant): HomeAssistant {
  let quiet = cache.get(hass);
  if (!quiet) {
    quiet = { ...hass, callService: async () => undefined };
    cache.set(hass, quiet);
  }
  return quiet;
}

/** The `hass` to hand to the parts that control devices: the real one, or (view only) the quiet copy. */
export const controlHass = <T extends HomeAssistant | undefined>(hass: T, viewOnly: boolean): T => (viewOnly && hass ? (withoutControl(hass) as T) : hass);
