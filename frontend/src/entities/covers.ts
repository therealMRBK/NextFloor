// Pack items with moving parts (curtains, roller screens, awnings, gates) and the cover entity they follow.

import type { Building } from "../model.ts";
import { coverReach, hasMovingParts, packItem } from "../packs.ts";
import type { HomeAssistant } from "../types.ts";
import { isUnavailable } from "./kinds.ts";

/** How far open a cover is in percent: its position, else 100 / 0 from open / closed (moving counts half). Null when unknown. */
export function coverPosition(hass: HomeAssistant, id: string | null | undefined): number | null {
  const st = id ? hass.states[id] : undefined;
  if (!st || isUnavailable(st)) return null;
  const position = st.attributes.current_position;
  if (typeof position === "number") return Math.min(100, Math.max(0, position));
  if (st.state === "open") return 100;
  if (st.state === "closed") return 0;
  return st.state === "opening" || st.state === "closing" ? 50 : null;
}

/** How far out the moving parts of every such item are (0 … 1, by furniture id). */
export function coverReaches(hass: HomeAssistant, b: Building): Map<string, number> {
  const out = new Map<string, number>();
  for (const f of b.floors.flatMap((floor) => floor.furniture)) {
    const item = packItem(f.type);
    if (!item || !hasMovingParts(item)) continue;
    const position = f.cover_entity ? coverPosition(hass, f.cover_entity) : null;
    out.set(f.id, coverReach(item, position !== null && f.cover_inverted ? 100 - position : position));
  }
  return out;
}
