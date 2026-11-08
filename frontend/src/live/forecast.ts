// The weather forecast card: a few days from the plan's weather entity, with the high and low and the rain. Home Assistant hands
// the forecast out through the `weather.get_forecasts` action (the state attributes no longer carry it); turning its answer into
// card rows is a pure function.

import type { HomeAssistant } from "../types.ts";

/** One day of the card. */
export interface ForecastDay {
  /** Midnight of the day, local time (ms). */
  day: number;
  /** The weather of the day as an emoji. */
  icon: string;
  high: number | null;
  low: number | null;
  /** Precipitation in the entity's unit (mm, in), null when not given. */
  rain: number | null;
  /** Chance of precipitation in %, null when not given. */
  chance: number | null;
}

interface RawForecast {
  datetime?: string;
  condition?: string;
  temperature?: number | string;
  templow?: number | string;
  precipitation?: number | string;
  precipitation_probability?: number | string;
}

const ICONS: Record<string, string> = {
  "clear-night": "🌙",
  cloudy: "☁️",
  exceptional: "⚠️",
  fog: "🌫️",
  hail: "🧊",
  lightning: "🌩️",
  "lightning-rainy": "⛈️",
  partlycloudy: "⛅",
  pouring: "🌧️",
  rainy: "🌦️",
  snowy: "❄️",
  "snowy-rainy": "🌨️",
  sunny: "☀️",
  windy: "💨",
  "windy-variant": "💨",
};

/** The emoji of a Home Assistant weather condition (a cloud for one it does not know). */
export const conditionIcon = (condition: string | undefined): string => ICONS[condition ?? ""] ?? "☁️";

const numberOr = (v: unknown): number | null => {
  const n = typeof v === "string" ? Number.parseFloat(v) : typeof v === "number" ? v : Number.NaN;
  return Number.isFinite(n) ? n : null;
};

const midnight = (t: number): number => {
  const d = new Date(t);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};

/** The days of the card, from today on: at most `days`, one row per day (the first entry of a day counts). */
export function forecastDays(raw: unknown, days: number, now = Date.now()): ForecastDay[] {
  const today = midnight(now);
  const out: ForecastDay[] = [];
  for (const f of Array.isArray(raw) ? (raw as RawForecast[]) : []) {
    const at = f.datetime ? Date.parse(f.datetime) : Number.NaN;
    if (!Number.isFinite(at)) continue;
    const day = midnight(at);
    if (day < today || out.some((d) => d.day === day)) continue;
    out.push({ day, icon: conditionIcon(f.condition), high: numberOr(f.temperature), low: numberOr(f.templow), rain: numberOr(f.precipitation), chance: numberOr(f.precipitation_probability) });
    if (out.length >= days) break;
  }
  return out;
}

/** Asks Home Assistant for the daily forecast of a weather entity; an entity without one gives no days. */
export async function loadForecast(hass: HomeAssistant, entity: string): Promise<unknown> {
  try {
    const answer = await hass.callWS<{ response?: Record<string, { forecast?: unknown }> }>({
      type: "call_service",
      domain: "weather",
      service: "get_forecasts",
      service_data: { type: "daily" },
      target: { entity_id: entity },
      return_response: true,
    });
    return answer?.response?.[entity]?.forecast ?? [];
  } catch {
    return [];
  }
}
