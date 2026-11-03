// What a room used today and this month: from Home Assistant's long-term statistics of the power sensors of its devices (their daily
// mean × the hours of the day), one small request per room panel opening; and what it cost with the house's tariff.

import type { HomeAssistant } from "../types.ts";
import { dayStart } from "./week-bars.ts";

export interface RoomEnergy {
  /** kWh used today so far, and since the first of the month. */
  today: number;
  month: number;
}

type Stats = Record<string, { start: number | string; mean?: number | null }[]>;

const DAY = 86_400_000;
const HOUR = 3_600_000;

/** Midnight of the first of the month `now` falls in. */
export function monthStart(now: number): number {
  const d = new Date(dayStart(now));
  d.setDate(1);
  return d.getTime();
}

/** kWh today and this month from the daily mean power (W) of the sensors; today counts the hours gone so far. Null without data. */
export function roomEnergyFromStats(stats: Stats, ids: readonly string[], now: number): RoomEnergy | null {
  const today = dayStart(now);
  let [day, month, any] = [0, 0, false];
  for (const id of ids) {
    for (const row of stats[id] ?? []) {
      if (typeof row.mean !== "number") continue;
      const start = new Date(row.start).getTime();
      const hours = Math.min(24, Math.max(0, (Math.min(now, start + DAY) - start) / HOUR));
      const kwh = (Math.max(0, row.mean) * hours) / 1000;
      month += kwh;
      if (Math.abs(start - today) < 3 * HOUR) day += kwh;
      any = true;
    }
  }
  const round = (v: number) => Math.round(v * 100) / 100;
  return any ? { today: round(day), month: round(month) } : null;
}

export async function loadRoomEnergy(hass: HomeAssistant, ids: readonly string[], now = Date.now()): Promise<RoomEnergy | null> {
  if (!ids.length) return null;
  const stats = await hass.callWS<Stats>({
    type: "recorder/statistics_during_period",
    start_time: new Date(monthStart(now)).toISOString(),
    end_time: new Date(now).toISOString(),
    statistic_ids: [...ids],
    period: "day",
    types: ["mean"],
    units: { power: "W" },
  });
  return roomEnergyFromStats(stats, ids, now);
}

/** The cost of some kWh with a tariff state ("0.31" in "EUR/kWh", "ct/kWh" …); null when the tariff is not per kWh. */
export function energyCost(kwh: number, tariff: { value: number; unit: string } | null): { value: number; currency: string } | null {
  if (!tariff || !Number.isFinite(tariff.value)) return null;
  const m = /^\s*([^/\s]+)\s*\/\s*kWh\s*$/i.exec(tariff.unit);
  if (!m) return null;
  const cents = /^(ct|cent|cents|c)$/i.test(m[1]);
  const currency = cents || /^eur$/i.test(m[1]) ? "€" : m[1];
  return { value: Math.round(kwh * tariff.value * (cents ? 1 : 100)) / 100, currency };
}
