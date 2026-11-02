// What the panel remembers per device: a wall tablet wants other view settings than a desktop. Each preference is a small codec
// (storage name, fallback, how to read and write it), so loading and saving are the same few lines for all of them.

import type { MarkerMode } from "../components/view3d.ts";
import type { HeatMode } from "../heatmap.ts";
import { LOOKS, type Look } from "../themes.ts";
import type { FloorStack, Quality } from "../viewer/viewer3d.ts";

export interface DevicePrefs {
  explode: boolean;
  keepRoof: boolean;
  /** Solid painted walls instead of glass. */
  solidWalls: boolean;
  quality: Quality;
  stats: boolean;
  markers: MarkerMode;
  heat: HeatMode;
  theme: Look;
  /** "#rrggbb", or null for the stock accent. */
  accent: string | null;
  floorStack: FloorStack;
  roomNames: boolean;
  clean: boolean;
  navWrap: boolean;
  /** The switches at the bottom of the 3D view folded into one button. */
  barsFolded: boolean;
  weather: boolean;
  /** The ☀ time-of-day switch under the 3D view (off: the view always shows the real sun). */
  timeSlider: boolean;
  /** The star menu (favourites) stands open from the start, a size larger. */
  menuOpen: boolean;
  /** A clock in a corner of the 3D view, or none. */
  clock: "none" | "top_left" | "top_right" | "bottom_left" | "bottom_right";
  /** How opaque the see-through walls are, in % (20: faint glass). */
  glassWalls: number;
  /** The name of this screen for announcements meant for some screens only ("" = none). */
  screenName: string;
  /** Announcements are not shown or spoken on this device. */
  announceMuted: boolean;
}

interface Codec<T> {
  /** The key in the browser's storage (below the "nextfloor." prefix). */
  name: string;
  fallback: T;
  read(raw: string): T;
  write(value: T): string;
}

/** A yes/no switch stored as "1" and "0". What is on by default only turns off on an explicit "0". */
const flag = (name: string, fallback: boolean): Codec<boolean> => ({
  name,
  fallback,
  read: (raw) => (fallback ? raw !== "0" : raw === "1"),
  write: (value) => (value ? "1" : "0"),
});

/** One of a fixed list of words; anything else counts as unset. */
const word = <T extends string>(name: string, allowed: readonly T[], fallback: T): Codec<T> => ({
  name,
  fallback,
  read: (raw) => allowed.find((w) => w === raw) ?? fallback,
  write: (value) => value,
});

const CODECS: { [K in keyof DevicePrefs]: Codec<DevicePrefs[K]> } = {
  explode: flag("explode", true),
  keepRoof: flag("roof", false),
  solidWalls: flag("solid_walls", false),
  quality: word("quality", ["auto", "low", "high"], "auto"),
  stats: flag("stats", false),
  markers: word("markers", ["none", "important", "all"], "important"),
  heat: word("heat", ["none", "temperature", "humidity", "co2", "values"], "none"),
  theme: word("theme", LOOKS, "neon"),
  clock: word("clock", ["none", "top_left", "top_right", "bottom_left", "bottom_right"], "none"),
  accent: { name: "accent", fallback: null, read: (raw) => (/^#[0-9a-f]{6}$/i.test(raw) ? raw : null), write: (value) => value ?? "" },
  floorStack: word("floor_stack", ["dim", "stacked", "single"], "dim"),
  roomNames: flag("room_names", true),
  clean: flag("clean", false),
  navWrap: flag("nav_wrap", false),
  barsFolded: flag("bars_folded", false),
  weather: flag("weather", true),
  timeSlider: flag("time_slider", false),
  menuOpen: flag("menu_open", false),
  screenName: { name: "screen_name", fallback: "", read: (raw) => raw.slice(0, 60), write: (value) => value.trim().slice(0, 60) },
  announceMuted: flag("announce_muted", false),
  glassWalls: {
    name: "glass_walls",
    fallback: 20,
    read: (raw) => (/^\d{1,3}$/.test(raw) ? Math.min(100, Number(raw)) : 20),
    write: (value) => String(Math.round(Math.min(100, Math.max(0, value)))),
  },
};

/** This device's screen name and mute switch, also for cards (which have no preferences of their own). */
export function screenName(storage: PrefsStorage | null = browserStorage()): string | null {
  try {
    return storage?.getItem("nextfloor.screen_name")?.trim() || null;
  } catch {
    return null;
  }
}

export function screenMuted(storage: PrefsStorage | null = browserStorage()): boolean {
  try {
    return storage?.getItem("nextfloor.announce_muted") === "1";
  } catch {
    return false;
  }
}

export type PrefsStorage = Pick<Storage, "getItem" | "setItem">;

/** The browser's local storage, or null where it is not available (private mode, blocked site data). */
export function browserStorage(): PrefsStorage | null {
  try {
    return localStorage;
  } catch {
    return null;
  }
}

export class PrefStore {
  private readonly storage: PrefsStorage | null;

  constructor(storage: PrefsStorage | null) {
    this.storage = storage;
  }

  private raw(name: string): string | null {
    try {
      return this.storage?.getItem(`nextfloor.${name}`) ?? null;
    } catch {
      return null;
    }
  }

  /** All preferences. `?nf_stats` in the page's URL switches the performance display on whatever was stored. */
  load(search = ""): DevicePrefs {
    const prefs = {} as Record<string, unknown>;
    for (const key of Object.keys(CODECS) as (keyof DevicePrefs)[]) {
      const codec = CODECS[key] as Codec<unknown>;
      const raw = this.raw(codec.name);
      prefs[key] = raw === null ? codec.fallback : codec.read(raw);
    }
    if (new URLSearchParams(search).has("nf_stats")) prefs.stats = true;
    return prefs as unknown as DevicePrefs;
  }

  save<K extends keyof DevicePrefs>(key: K, value: DevicePrefs[K]): void {
    const codec = CODECS[key] as Codec<DevicePrefs[K]>;
    try {
      this.storage?.setItem(`nextfloor.${codec.name}`, codec.write(value));
    } catch {
      // storage unavailable: the choice just is not remembered
    }
  }
}
