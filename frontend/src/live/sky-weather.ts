/**
 * Reads a Home Assistant `weather.*` entity into what NextFloor's weather layer draws (see viewer/live-weather.ts).
 *
 * The condition gives the kind of weather; the entity's attributes refine it where they exist: cloud coverage,
 * wind speed and bearing (rain and snow fall at an angle along the real wind), precipitation (more rain, more
 * streaks) and temperature (rain below freezing turns into sleet).
 */
import type { WeatherEffect } from "../model.ts";
import type { SkyWeather } from "../viewer/live-weather.ts";
import type { HomeAssistant } from "../types.ts";

type Base = Partial<Omit<SkyWeather, "windFrom">>;

/** What each of Home Assistant's conditions looks like before the attributes refine it. */
const LOOK: Record<string, Base> = {
  sunny: { cloud: 0 },
  "clear-night": { cloud: 0 },
  partlycloudy: { cloud: 0.4 },
  cloudy: { cloud: 0.85 },
  fog: { fog: 0.9, cloud: 0.5 },
  rainy: { rain: 0.5, cloud: 0.8 },
  pouring: { rain: 1, cloud: 1, wind: 0.3 },
  "lightning-rainy": { rain: 0.75, cloud: 1, lightning: true, wind: 0.35 },
  lightning: { cloud: 0.85, lightning: true },
  hail: { hail: 0.8, rain: 0.3, cloud: 1 },
  snowy: { snow: 0.7, cloud: 0.85 },
  "snowy-rainy": { snow: 0.45, rain: 0.3, cloud: 0.95 },
  windy: { wind: 0.7, cloud: 0.25 },
  "windy-variant": { wind: 0.7, cloud: 0.65 },
  exceptional: { cloud: 0.6, wind: 0.5 },
};

const num = (v: unknown): number | null => (typeof v === "number" && Number.isFinite(v) ? v : typeof v === "string" && v.trim() !== "" && Number.isFinite(Number(v)) ? Number(v) : null);
const clamp = (v: number) => Math.min(1, Math.max(0, v));

/** Wind speed in km/h from the entity's value and unit. */
export function windKmh(speed: number, unit: unknown): number {
  switch (unit) {
    case "m/s":
      return speed * 3.6;
    case "mph":
      return speed * 1.609;
    case "kn":
      return speed * 1.852;
    case "ft/s":
      return speed * 1.097;
    default:
      return speed;
  }
}

/** A wind bearing: degrees, or a compass point such as "NW". */
export function bearing(v: unknown): number | null {
  const n = num(v);
  if (n !== null) return ((n % 360) + 360) % 360;
  if (typeof v !== "string") return null;
  const points = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  const i = points.indexOf(v.trim().toUpperCase().replace("O", "E"));
  return i < 0 ? null : i * 22.5;
}

/** The weather to draw from an entity, or null when it is missing or reports nothing usable. */
export function readSkyWeather(hass: HomeAssistant, entity: string | null): SkyWeather | null {
  const st = entity ? hass.states[entity] : undefined;
  if (!st || st.state === "unavailable" || st.state === "unknown") return null;
  const look = LOOK[st.state];
  if (!look) return null;
  const a = st.attributes as Record<string, unknown>;
  const w: SkyWeather = {
    rain: look.rain ?? 0,
    snow: look.snow ?? 0,
    hail: look.hail ?? 0,
    fog: look.fog ?? 0,
    cloud: look.cloud ?? 0,
    wind: look.wind ?? 0,
    windFrom: bearing(a.wind_bearing),
    lightning: look.lightning ?? false,
  };
  const coverage = num(a.cloud_coverage);
  if (coverage !== null) w.cloud = Math.max(clamp(coverage / 100), w.rain || w.snow ? 0.6 : 0);
  const speed = num(a.wind_speed);
  if (speed !== null) w.wind = Math.max(w.wind, clamp(windKmh(speed, a.wind_speed_unit) / 70));
  const gust = num(a.wind_gust_speed);
  if (gust !== null) w.wind = Math.max(w.wind, clamp(windKmh(gust, a.wind_speed_unit) / 100));
  // more rain per hour, denser streaks (only when the entity reports it for now)
  const precip = num(a.precipitation);
  if (precip !== null && precip > 0 && (w.rain > 0 || w.snow > 0)) {
    const strength = clamp(0.25 + precip / 8);
    if (w.rain > 0) w.rain = Math.max(w.rain * 0.6, strength);
    if (w.snow > 0) w.snow = Math.max(w.snow * 0.6, strength);
  }
  // below freezing, rain comes down as sleet: some of it snow
  const temp = num(a.temperature);
  const unit = a.temperature_unit ?? hass.config?.unit_system?.temperature;
  const celsius = temp === null ? null : unit === "°F" ? ((temp - 32) * 5) / 9 : temp;
  if (celsius !== null && celsius <= 0.5 && w.rain > 0 && w.snow === 0) {
    w.snow = w.rain * 0.6;
    w.rain *= 0.4;
  }
  return w;
}

/** Keeps only the effects chosen in the settings (null = the default set: all but fog). */
export function chosenEffects(w: SkyWeather, effects: readonly WeatherEffect[] | null | undefined): SkyWeather {
  const on = new Set<string>(effects ?? ["rain", "snow", "clouds", "lightning", "sky"]);
  return {
    ...w,
    rain: on.has("rain") ? w.rain : 0,
    hail: on.has("rain") ? w.hail : 0,
    snow: on.has("snow") ? w.snow : 0,
    fog: on.has("fog") ? w.fog : 0,
    cloud: on.has("clouds") ? w.cloud : 0,
    lightning: on.has("lightning") && w.lightning,
  };
}
