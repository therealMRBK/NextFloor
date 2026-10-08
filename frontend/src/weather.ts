/** Which `weather.*` entity the house uses (the 3D weather layer, the rain warning). */
import type { HomeAssistant } from "./types.ts";

/** The weather entity to show: the preferred one when it exists, otherwise the first `weather.*`. */
export function weatherEntity(hass: HomeAssistant, preferred?: string | null): string | null {
  if (preferred && hass.states[preferred]) return preferred;
  return (
    Object.keys(hass.states)
      .filter((id) => id.startsWith("weather."))
      .sort()[0] ?? null
  );
}
