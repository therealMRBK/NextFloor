// Lengths and areas as the plan wants them shown: metres, or feet and inches. Inputs stay in metres; only what is shown changes.

import { formatNumber } from "./i18n.ts";
import type { HomeAssistant } from "./types.ts";

export type Units = "metric" | "imperial";

let current: Units = "metric";

/** The units of the plan being shown (the editor sets them from the plan's settings). */
export const setUnits = (units: Units | null | undefined): void => {
  current = units === "imperial" ? "imperial" : "metric";
};

const FOOT = 0.3048;

/** A length: "3,45 m", or 11′ 4½″ (feet and inches to the half inch). */
export function formatLength(hass: HomeAssistant | undefined, metres: number, digits = 2, units: Units = current): string {
  if (units === "metric") return `${formatNumber(hass, metres, digits)} m`;
  const sign = metres < 0 ? "−" : "";
  const halves = Math.round((Math.abs(metres) / 0.0254) * 2);
  const feet = Math.floor(halves / 24);
  const inchHalves = halves - feet * 24;
  const inches = `${Math.floor(inchHalves / 2)}${inchHalves % 2 ? "½" : ""}`;
  return feet ? `${sign}${feet}′ ${inches}″` : `${sign}${inches}″`;
}

/** An area: "18,4 m²" or "198 ft²". */
export function formatArea(hass: HomeAssistant | undefined, squareMetres: number, units: Units = current): string {
  return units === "metric" ? `${formatNumber(hass, squareMetres, 1)} m²` : `${formatNumber(hass, squareMetres / (FOOT * FOOT), 0)} ft²`;
}
