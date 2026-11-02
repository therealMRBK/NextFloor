// The last seven days for the house's energy card: solar and consumption per day in kWh, from Home Assistant's long-term statistics
// of the power sensors (their daily mean × 24 h). One small request a day instead of a week of history.

import type { HomeAssistant } from "../types.ts";

/** The sensors the week is read from, and their signs (grid: + import, battery: + discharging). */
export interface WeekSources {
  solar: string[];
  grid: string | null;
  gridInvert: boolean;
  battery: string[];
  batteryInvert: boolean;
  /** A house consumption sensor; without one the use is solar + grid + battery. */
  consumption: string | null;
}

export interface WeekBars {
  /** Start of each day (ms), oldest first. */
  days: number[];
  solar: (number | null)[];
  use: (number | null)[];
}

type Stats = Record<string, { start: number | string; mean?: number | null }[]>;

const DAY = 86_400_000;

/** Midnight of the day `t` falls on, `back` days earlier. */
export function dayStart(t: number, back = 0): number {
  const d = new Date(t);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - back);
  return d.getTime();
}

/** kWh per day from the daily mean power (W) of the sensors; today counts the hours gone so far. */
export function weekFromStats(stats: Stats, src: WeekSources, now: number): WeekBars {
  const days = Array.from({ length: 7 }, (_, i) => dayStart(now, 6 - i));
  const hours = (day: number) => Math.min(24, Math.max(0, (Math.min(now, day + DAY) - day) / 3_600_000));
  const meanOn = (id: string | null, day: number): number | null => {
    if (!id) return null;
    const row = (stats[id] ?? []).find((r) => Math.abs(new Date(r.start).getTime() - day) < 3 * 3_600_000);
    return typeof row?.mean === "number" ? row.mean : null;
  };
  const sum = (ids: string[], day: number, sign = 1): number | null => {
    const values = ids.map((id) => meanOn(id, day)).filter((v): v is number => v !== null);
    return values.length ? values.reduce((a, b) => a + b, 0) * sign : null;
  };
  const kwh = (w: number | null, day: number) => (w === null ? null : Math.round(((w * hours(day)) / 1000) * 10) / 10);
  const solar = days.map((day) => kwh(sum(src.solar, day), day));
  const use = days.map((day) => {
    if (src.consumption) return kwh(meanOn(src.consumption, day), day);
    const parts = [sum(src.solar, day), sum(src.grid ? [src.grid] : [], day, src.gridInvert ? -1 : 1), sum(src.battery, day, src.batteryInvert ? -1 : 1)];
    if (parts.every((p) => p === null)) return null;
    return kwh(Math.max(0, parts.reduce<number>((a, b) => a + (b ?? 0), 0)), day);
  });
  return { days, solar, use };
}

/** Loads the week from the recorder's statistics; null when there are no sensors or the recorder has nothing. */
export async function loadWeek(hass: HomeAssistant, src: WeekSources, now = Date.now()): Promise<WeekBars | null> {
  const ids = [...new Set([...src.solar, ...src.battery, src.grid, src.consumption].filter((id): id is string => !!id))];
  if (!ids.length) return null;
  const stats = await hass.callWS<Stats>({
    type: "recorder/statistics_during_period",
    start_time: new Date(dayStart(now, 6)).toISOString(),
    end_time: new Date(now).toISOString(),
    statistic_ids: ids,
    period: "day",
    types: ["mean"],
    units: { power: "W" },
  });
  const week = weekFromStats(stats, src, now);
  return week.solar.some((v) => v !== null) || week.use.some((v) => v !== null) ? week : null;
}
