// The furniture roles whose colour can be chosen (#82), without three.js so the editor and the card editor can use it.

export const FURNITURE_ROLES = ["body", "wood", "fabric", "white", "metal", "dark"] as const;
export type FurnitureRole = (typeof FURNITURE_ROLES)[number];
/** A chosen colour ("#rrggbb") per role; a missing role keeps the stock colour. House-wide in the settings, per card on top. */
export type FurnitureColors = Partial<Record<FurnitureRole, string | null>>;

/** The stock colour of each role in the neon look, as the colour picker shows it before a colour is chosen. */
export const STOCK_ROLE_HEX: Record<FurnitureRole, string> = {
  body: "#172238",
  wood: "#19233c",
  fabric: "#1a2644",
  white: "#1d2946",
  metal: "#2a3a60",
  dark: "#0b111f",
};
