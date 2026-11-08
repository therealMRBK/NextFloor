// The roof as the viewer draws it: either one roof over the top floor, or roof sections at their own heights. Drawn in the
// house view only; the viewer lifts it and fades it out when the camera zooms in.

import type { Building } from "../../model.ts";
import { pushChimneys, pushRoofWindows, pushSolar, type RoofWindowState } from "./fittings.ts";
import { buildSections } from "./sections.ts";
import { buildSingleRoof } from "./single.ts";
import type { RoofGeometry } from "./types.ts";

/** The roof in parts per floor; each part moves with its floor when the floors are pulled apart. */
export function buildRoof(b: Building, windows: ReadonlyMap<string, RoofWindowState> = new Map()): RoofGeometry[] {
  const roof = b.settings.roof;
  const single = roof?.type === "custom" ? null : buildSingleRoof(b);
  const parts = roof?.type === "custom" ? buildSections(b, roof.sections ?? [], roof.overhang) : single ? [single] : [];
  pushSolar(b, parts);
  pushRoofWindows(b, parts, windows);
  pushChimneys(b, parts);
  return parts;
}
