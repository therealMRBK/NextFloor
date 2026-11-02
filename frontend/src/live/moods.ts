// The light designer: a room's lights as they are now, kept as a mood of the room (in the plan), set again later, or carried over to
// another room. Pure functions from light states to service calls.

import type { LightMood, LightSetting } from "../model.ts";
import type { HassEntity } from "../types.ts";

/** How a light is now: off, or on with its brightness and colour (as `light.turn_on` takes them). */
export function lightSetting(st: HassEntity): LightSetting {
  if (st.state !== "on") return { entity: st.entity_id, on: false };
  const a = st.attributes;
  const out: LightSetting = { entity: st.entity_id, on: true };
  if (typeof a.brightness === "number") out.brightness = a.brightness;
  const mode = String(a.color_mode ?? "");
  if (Array.isArray(a.rgb_color) && !["color_temp", "brightness", "onoff"].includes(mode)) out.rgb = (a.rgb_color as number[]).slice(0, 3) as [number, number, number];
  else if (typeof a.color_temp_kelvin === "number") out.kelvin = a.color_temp_kelvin;
  return out;
}

/** The calls that set a mood: one turn_on per light that is on (with its brightness and colour), one turn_off for the rest. */
export function moodCalls(settings: readonly LightSetting[]): { service: "turn_on" | "turn_off"; data: Record<string, unknown> }[] {
  const off = settings.filter((s) => !s.on).map((s) => s.entity);
  const on = settings
    .filter((s) => s.on)
    .map((s) => ({
      service: "turn_on" as const,
      data: { entity_id: s.entity, ...(s.brightness !== undefined ? { brightness: s.brightness } : {}), ...(s.rgb ? { rgb_color: s.rgb } : s.kelvin ? { color_temp_kelvin: s.kelvin } : {}) },
    }));
  return [...on, ...(off.length ? [{ service: "turn_off" as const, data: { entity_id: off } }] : [])];
}

/**
 * A mood carried over to another room's lights: they take the settings in order (the first light the first setting …); when the
 * other room has more lights, the rest takes the setting of the brightest light that is on.
 */
export function carryMood(mood: Pick<LightMood, "lights">, targets: readonly string[]): LightSetting[] {
  const lit = [...mood.lights].filter((s) => s.on).sort((a, b) => (b.brightness ?? 255) - (a.brightness ?? 255))[0];
  return targets.map((entity, i) => {
    const from = mood.lights[i] ?? lit ?? { entity, on: false };
    return { ...from, entity };
  });
}
