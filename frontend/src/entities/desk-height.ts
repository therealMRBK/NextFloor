// A sit/stand desk whose top follows an entity with its current height (#214): sensor, number or input_number,
// in cm, mm, m or inches by its unit; the piece is drawn at that height, the plan's own `h` stays as it is.
import type { Building, Furniture } from "../model.ts";
import type { HomeAssistant } from "../types.ts";

/** Lowest and highest top a desk can be drawn with (m). */
const MIN_H = 0.4;
const MAX_H = 1.6;

/** The current height of the desk's top from its height entity (m, to the centimetre), or null without a usable value. */
export function deskHeight(hass: HomeAssistant | undefined, item: Pick<Furniture, "type" | "height_entity">): number | null {
  const id = item.height_entity;
  if (item.type !== "desk" || !id || !hass) return null;
  const st = hass.states[id];
  const v = st ? Number.parseFloat(String(st.state).replace(",", ".")) : Number.NaN;
  if (!Number.isFinite(v)) return null;
  const unit = String(st?.attributes?.unit_of_measurement ?? "").trim().toLowerCase();
  // no unit: a desk's height in metres is below 2, in centimetres above 10
  const factor = unit === "mm" ? 0.001 : unit === "cm" ? 0.01 : unit === "m" ? 1 : unit === "in" || unit === '"' ? 0.0254 : v > 10 ? 0.01 : 1;
  const m = Math.round(v * factor * 100) / 100;
  return Math.min(MAX_H, Math.max(MIN_H, m));
}

/** "id=height" of every desk drawn at a live height, for telling when the shown building must be rebuilt. */
export function deskHeightKey(hass: HomeAssistant | undefined, b: Building): string[] {
  const out: string[] = [];
  for (const floor of b.floors) for (const f of floor.furniture) {
    const h = deskHeight(hass, f);
    if (h !== null && h !== f.h) out.push(`desk:${f.id}=${h}`);
  }
  return out;
}

/** The building with each desk at its live height (the same object when none differs). */
export function withDeskHeights(hass: HomeAssistant | undefined, b: Building): Building {
  if (!deskHeightKey(hass, b).length) return b;
  return {
    ...b,
    floors: b.floors.map((floor) => ({
      ...floor,
      furniture: floor.furniture.map((f) => {
        const h = deskHeight(hass, f);
        return h !== null && h !== f.h ? { ...f, h } : f;
      }),
    })),
  };
}
