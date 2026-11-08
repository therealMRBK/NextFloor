// "Today" for the wall tablet: the day's appointments from the calendars chosen in the plan, and the waste bins collected today or
// tomorrow. The events come from Home Assistant's calendar REST API; turning them into lines is a pure function.

import type { Building } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import { pickupDays } from "../entities/household.ts";
import { householdKind } from "../packs.ts";

/** One line of the day: a time ("09:30", or "" for all day) and what it is. */
export interface TodayItem {
  time: string;
  title: string;
  /** Where it comes from: a calendar's name, or a bin. */
  source: string;
  /** Sorts the day: minutes after midnight (-1 for all-day events and bins). */
  at: number;
  kind: "event" | "bin";
  /** Which day it is on: 0 today, 1 tomorrow … (the card can show several days). */
  day?: number;
  /** Already over (it stays listed, dimmed). */
  past?: boolean;
}

interface RawEvent {
  summary?: string;
  start?: { dateTime?: string; date?: string } | string;
  end?: { dateTime?: string; date?: string } | string;
}

const time = (d: Date) => `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
const when = (v: RawEvent["start"]) => (typeof v === "string" ? { dateTime: v } : (v ?? {}));

const midnight = (t: number): number => {
  const d = new Date(t);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};

/** Days from today to the day of `t` (0 = today), across a clock change too. */
const dayOf = (t: number, now: number): number => Math.max(0, Math.round((midnight(t) - midnight(now)) / 86_400_000));

/** The events of one calendar as lines of the day, all-day events first. */
export function agenda(raw: RawEvent[], source: string, now: number): TodayItem[] {
  return raw
    .map((e): TodayItem | null => {
      const s = when(e.start);
      const end = when(e.end);
      const title = (e.summary ?? "").trim();
      if (!title) return null;
      if (s.dateTime) {
        const d = new Date(s.dateTime);
        const until = end.dateTime ? new Date(end.dateTime).getTime() : d.getTime();
        return { time: time(d), title, source, at: d.getHours() * 60 + d.getMinutes(), kind: "event", past: until < now, day: dayOf(d.getTime(), now) };
      }
      // an all-day event is dated "YYYY-MM-DD": that is local midnight, not UTC
      const date = s.date ? /^(\d{4})-(\d{2})-(\d{2})$/.exec(s.date) : null;
      const day = date ? dayOf(new Date(Number(date[1]), Number(date[2]) - 1, Number(date[3])).getTime(), now) : 0;
      return { time: "", title, source, at: -1, kind: "event", day };
    })
    .filter((x): x is TodayItem => !!x);
}

/** The bins collected today or tomorrow (from the household pieces of the plan). */
export function binsDue(hass: HomeAssistant, b: Building, now: number, labels: { today: string; tomorrow: string }): TodayItem[] {
  const out: TodayItem[] = [];
  const seen = new Set<string>();
  for (const floor of b.floors)
    for (const f of floor.furniture) {
      const id = f.care_entity;
      if (!id || seen.has(id) || householdKind(f.type) !== "bin") continue;
      seen.add(id);
      const days = pickupDays(hass.states[id], now);
      if (days === null || days > 1) continue;
      const name = f.name || String(hass.states[id]?.attributes.friendly_name ?? id);
      out.push({ time: "", title: name, source: days === 0 ? labels.today : labels.tomorrow, at: -1, kind: "bin" });
    }
  return out;
}

/** All lines, sorted: day by day, and in a day all-day things and bins first, then by time. */
export function sortDay(items: TodayItem[]): TodayItem[] {
  return [...items].sort((a, b) => (a.day ?? 0) - (b.day ?? 0) || a.at - b.at || a.title.localeCompare(b.title));
}

/** Loads the events of the chosen calendars from today's midnight over `days` days; a calendar that fails is left out. */
export async function loadToday(hass: HomeAssistant, calendars: string[], days = 1, now = Date.now()): Promise<TodayItem[]> {
  if (!hass.fetchWithAuth || !calendars.length) return [];
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  // whole days by the calendar, so a clock change does not cut the last day short
  end.setDate(end.getDate() + Math.max(1, days));
  const lists = await Promise.all(
    calendars.map(async (id) => {
      try {
        const r = await hass.fetchWithAuth!(`/api/calendars/${encodeURIComponent(id)}?start=${encodeURIComponent(start.toISOString())}&end=${encodeURIComponent(end.toISOString())}`);
        if (!r.ok) return [];
        const name = String(hass.states[id]?.attributes.friendly_name ?? id.split(".")[1]);
        return agenda((await r.json()) as RawEvent[], name, now);
      } catch {
        return [];
      }
    }),
  );
  return lists.flat();
}
