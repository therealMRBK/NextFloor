// Display names of furniture types, built-in or from packs (kept out of packs.ts, which the 3D
// bundle uses without the UI strings).

import { translate } from "./i18n.ts";
import { isPackType, packItem, packItemName } from "./packs.ts";
import type { HomeAssistant } from "./types.ts";

/** Display name of any furniture type; furniture of a removed pack says so. */
export function furnitureName(hass: HomeAssistant | undefined, type: string): string {
  if (!isPackType(type)) return translate(hass, `furn_${type}` as Parameters<typeof translate>[1]);
  const item = packItem(type);
  return item ? packItemName(item, hass?.language ?? navigator.language) : translate(hass, "pack_missing_item");
}
