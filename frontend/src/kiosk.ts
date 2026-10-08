// Kiosk helpers of the dashboard card (wall tablets): when the night dimming is active.

import type { HomeAssistant } from "./types.ts";

/**
 * Whether the card is dimmed for the night: "sun" follows sun.sun, "HH:MM-HH:MM" is a daily time
 * range (it may cross midnight), anything else is off.
 */
export function nightActive(night: string | undefined, hass: HomeAssistant | undefined, now = new Date()): boolean {
  if (!night || night === "off") return false;
  if (night === "sun") return hass?.states["sun.sun"]?.state === "below_horizon";
  const m = /^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(night.trim());
  if (!m) return false;
  const from = Number(m[1]) * 60 + Number(m[2]);
  const to = Number(m[3]) * 60 + Number(m[4]);
  const t = now.getHours() * 60 + now.getMinutes();
  return from <= to ? t >= from && t < to : t >= from || t < to;
}
