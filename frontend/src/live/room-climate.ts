// Room climate beyond the raw values: the risk of mould on the coldest wall of a room, when to air it, and which temperature scale
// fits the season. Pure functions over °C, % and ppm.

/** Saturation vapour pressure over water (hPa), Magnus formula. */
const saturation = (t: number) => 6.112 * Math.exp((17.62 * t) / (243.12 + t));

/** How much colder than the air the coldest wall surface is (an outer wall in winter, a corner behind a wardrobe). */
export const WALL_DROP = 4;

/**
 * Mould risk of a room, 0 … 100: the relative humidity the air would have at its coldest wall (`drop` °C colder). Mould grows from
 * about 70 % at the surface and quickly above 80 %; below 65 % there is none.
 */
export function mouldRisk(temp: number | null, humidity: number | null, drop = WALL_DROP): number | null {
  if (temp === null || humidity === null) return null;
  const surface = Math.min(100, (humidity * saturation(temp)) / saturation(temp - drop));
  return Math.round(Math.min(100, Math.max(0, ((surface - 65) / (85 - 65)) * 100)));
}

/** Why a room should be aired, if it should: too much CO₂, too damp, or both (null: all fine). */
export function airingNeed(co2: number | null, humidity: number | null, risk: number | null): "co2" | "humidity" | "mould" | null {
  if (risk !== null && risk >= 70) return "mould";
  if (co2 !== null && co2 >= 1000) return "co2";
  if (humidity !== null && humidity >= 65) return "humidity";
  return null;
}

/** Summer from May to September (in the southern hemisphere the other way round): rooms may be warmer before they count as hot. */
export function isSummer(now = new Date(), latitude = 50): boolean {
  const m = now.getMonth();
  const north = m >= 4 && m <= 8;
  return latitude < 0 ? !north : north;
}

/**
 * How comfortable a room is, 0 … 100, from what its sensors say: the temperature in its band (20–23 °C, 22–26 °C in summer), the
 * humidity between 40 and 60 %, CO₂ up to 800 ppm. The average of the parts that are known, but never more than 30 above the worst,
 * so one bad value always shows. Null without any reading.
 */
export function comfortScore(temp: number | null, humidity: number | null, co2: number | null, summer = false): number | null {
  const parts: number[] = [];
  if (temp !== null) {
    const [lo, hi] = summer ? [22, 26] : [20, 23];
    const off = temp < lo ? lo - temp : temp > hi ? temp - hi : 0;
    parts.push(Math.max(0, 100 - off * 15));
  }
  if (humidity !== null) {
    const off = humidity < 40 ? 40 - humidity : humidity > 60 ? humidity - 60 : 0;
    parts.push(Math.max(0, 100 - off * 4));
  }
  if (co2 !== null) parts.push(Math.max(0, Math.min(100, 100 - ((co2 - 800) / 600) * 100)));
  if (!parts.length) return null;
  const mean = parts.reduce((a, b) => a + b, 0) / parts.length;
  return Math.round(Math.min(mean, Math.min(...parts) + 30));
}
