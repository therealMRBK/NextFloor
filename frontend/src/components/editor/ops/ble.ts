// Locating a Bluetooth tag by room, the editor's side: the same comparison the backend sensor makes (custom_components/nextfloor/ble.py),
// so the editor can show "now: kitchen" while you walk, and the recording of a room into fingerprints.

import type { BleFingerprint } from "../../../model.ts";

export type Reading = Record<string, number>;

/** A scanner that does not hear the tag counts as this (dBm); differences are capped at MAX_DIFF. */
export const MISSING = -100;
export const MAX_DIFF = 40;
/** Above this distance (RMS in dB) no room is a good match. */
export const UNKNOWN_DISTANCE = 18;

/** How long a room is recorded, how often it is sampled, and into how many spots the samples are split. */
export const RECORD_SECONDS = 30;
export const SAMPLE_EVERY_MS = 1500;
export const SPOTS_PER_ROOM = 3;

export function distance(a: Reading, b: Reading): number {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  if (keys.size === 0) return Infinity;
  let total = 0;
  for (const k of keys) total += Math.min(Math.abs((a[k] ?? MISSING) - (b[k] ?? MISSING)), MAX_DIFF) ** 2;
  return Math.sqrt(total / keys.size);
}

export interface Located {
  room: string | null;
  distance: number;
  /** How far the runner-up room is behind the winner (dB). */
  margin: number;
}

export function locate(prints: readonly BleFingerprint[], reading: Reading): Located {
  if (Object.keys(reading).length === 0) return { room: null, distance: Infinity, margin: 0 };
  const best = new Map<string, number>();
  for (const fp of prints) {
    const d = distance(fp.rssi, reading);
    if (d < (best.get(fp.room) ?? Infinity)) best.set(fp.room, d);
  }
  const ranked = [...best].sort((p, q) => p[1] - q[1]);
  if (ranked.length === 0) return { room: null, distance: Infinity, margin: 0 };
  const [room, dist] = ranked[0];
  if (dist > UNKNOWN_DISTANCE) return { room: null, distance: dist, margin: 0 };
  return { room, distance: dist, margin: ranked.length > 1 ? ranked[1][1] - dist : UNKNOWN_DISTANCE };
}

const median = (values: number[]): number => {
  const s = [...values].sort((a, b) => a - b);
  const m = s.length >> 1;
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

/** The median signal per scanner over some samples; a scanner that missed the tag in most of them is left out. */
export function medianReading(samples: readonly Reading[]): Reading {
  const out: Reading = {};
  const keys = new Set(samples.flatMap((s) => Object.keys(s)));
  for (const k of keys) {
    const values = samples.filter((s) => k in s).map((s) => s[k]);
    if (values.length * 2 > samples.length) out[k] = Math.round(median(values) * 10) / 10;
  }
  return out;
}

/** Turns the samples taken while walking through a room into up to `spots` fingerprints (one per stretch of the walk). */
export function fingerprintsOf(room: string, samples: readonly Reading[], spots = SPOTS_PER_ROOM): BleFingerprint[] {
  const heard = samples.filter((s) => Object.keys(s).length > 0);
  if (heard.length === 0) return [];
  const n = Math.max(1, Math.min(spots, Math.floor(heard.length / 3)));
  const out: BleFingerprint[] = [];
  for (let i = 0; i < n; i++) {
    const chunk = heard.slice(Math.floor((i * heard.length) / n), Math.floor(((i + 1) * heard.length) / n));
    const rssi = medianReading(chunk);
    if (Object.keys(rssi).length > 0) out.push({ room, rssi });
  }
  return out;
}

/** The prints of a tag with the ones of `room` replaced by new ones. */
export const replaceRoom = (prints: readonly BleFingerprint[], room: string, fresh: readonly BleFingerprint[]): BleFingerprint[] => [
  ...prints.filter((p) => p.room !== room),
  ...fresh,
];

/** The signal bar for a dBm value: 0 … 1 (−95 and below nothing, −45 and above full). */
export const signalLevel = (dbm: number): number => Math.max(0, Math.min(1, (dbm + 95) / 50));
