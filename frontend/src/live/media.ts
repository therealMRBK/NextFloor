/**
 * NextFloor's sound: the media players that play right now, where they stand in the plan, what they play, in the
 * colour of their app, and which of them play together (multiroom).
 */
import type { HomeAssistant } from "../types.ts";
import type { PlanPoint } from "../viewer/live-energy.ts";

export interface MediaNow {
  entity: string;
  name: string;
  at: PlanPoint;
  playing: boolean;
  title: string;
  artist: string;
  picture: string | null;
  /** 0…1, null when the player does not report it. */
  volume: number | null;
  color: [number, number, number];
  app: string | null;
  /** Other players playing the same (multiroom), as reported by the player. */
  group: string[];
}

/** App colours: the ring around a speaker and the card's edge take the colour of what plays. */
const APPS: [RegExp, [number, number, number]][] = [
  [/spotify/i, [30, 215, 96]],
  [/netflix/i, [229, 9, 20]],
  [/youtube/i, [255, 0, 51]],
  [/prime|amazon/i, [0, 168, 225]],
  [/disney/i, [17, 60, 207]],
  [/apple ?music|itunes/i, [250, 45, 72]],
  [/apple ?tv/i, [200, 200, 210]],
  [/plex/i, [229, 160, 13]],
  [/tidal/i, [0, 255, 255]],
  [/deezer/i, [162, 56, 255]],
  [/radio|tunein/i, [255, 140, 60]],
];
const DEFAULT: [number, number, number] = [34, 211, 238];

export function appColor(app: string | null): [number, number, number] {
  if (!app) return DEFAULT;
  return APPS.find(([re]) => re.test(app))?.[1] ?? DEFAULT;
}

/** Media players placed in the plan (as a device, or linked to furniture such as a TV or a speaker). */
export function mediaNow(hass: HomeAssistant, spots: readonly { entity: string; name: string; at: PlanPoint }[]): MediaNow[] {
  const out: MediaNow[] = [];
  const seen = new Set<string>();
  for (const s of spots) {
    if (!s.entity.startsWith("media_player.") || seen.has(s.entity)) continue;
    seen.add(s.entity);
    const st = hass.states[s.entity];
    if (!st) continue;
    const a = st.attributes as Record<string, unknown>;
    const str = (k: string) => (typeof a[k] === "string" ? (a[k] as string) : "");
    const app = str("app_name") || str("source") || str("app_id") || null;
    const vol = typeof a.volume_level === "number" ? a.volume_level : null;
    out.push({
      entity: s.entity,
      name: s.name,
      at: s.at,
      playing: st.state === "playing",
      title: str("media_title") || str("media_channel") || app || "",
      artist: str("media_artist") || str("media_album_name") || str("media_series_title"),
      picture: str("entity_picture") || null,
      volume: vol,
      color: appColor(app),
      app,
      group: Array.isArray(a.group_members) ? (a.group_members as unknown[]).filter((g): g is string => typeof g === "string" && g !== s.entity) : [],
    });
  }
  return out;
}

/** Pairs of playing players that play together (each pair once). */
export function multiroom(list: readonly MediaNow[]): [MediaNow, MediaNow][] {
  const by = new Map(list.filter((m) => m.playing).map((m) => [m.entity, m]));
  const pairs: [MediaNow, MediaNow][] = [];
  const done = new Set<string>();
  for (const m of by.values()) {
    for (const g of m.group) {
      const o = by.get(g);
      const key = [m.entity, g].sort().join("|");
      if (o && !done.has(key)) {
        done.add(key);
        pairs.push([m, o]);
      }
    }
  }
  return pairs;
}
