import type { Building, Floor, Furniture } from "../../model.ts";

/**
 * Items with their own tap action keep what they show (their pin with its state, their glow);
 * only a tap runs the action. `pins` maps each such item's pins to the item, `bare` lists the
 * items without a pin of their own, which get a plain one to be found by.
 */
export function ownTaps(b: Building, markers: readonly { id: string; furnitureId?: string }[]): { pins: Map<string, string>; bare: { floor: Floor; item: Furniture }[] } {
  const items = b.floors.flatMap((floor) => floor.furniture.filter((f) => f.tap?.action).map((item) => ({ floor, item })));
  const tapped = new Set(items.map(({ item }) => item.id));
  const pins = new Map(markers.filter((m) => m.furnitureId && tapped.has(m.furnitureId)).map((m) => [m.id, m.furnitureId!]));
  const pinned = new Set(pins.values());
  return { pins, bare: items.filter(({ item }) => !pinned.has(item.id)) };
}
