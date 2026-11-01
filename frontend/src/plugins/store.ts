// The plugin store: a list of reviewed plugins kept in a public GitHub repository
// (therealMRBK/NextFloor-Plugins, `index.json`). Authors add theirs with a pull request; nothing
// listed there changes afterwards, because every entry points at a file pinned to a commit and
// carries that file's SHA-256, which the loader checks before the plugin runs.

import type { PluginRef } from "./api.ts";

export const STORE_REPO = "therealMRBK/NextFloor-Plugins";
export const STORE_INDEX_URL = `https://raw.githubusercontent.com/${STORE_REPO}/main/index.json`;

export interface StoreEntry {
  id: string;
  name: string;
  description: string;
  author: string;
  version: string;
  /** Link to the plugin's page or source. */
  homepage: string;
  /** A file on raw.githubusercontent.com, pinned to a 40-character commit. */
  url: string;
  sha256: string;
}

/** Only files pinned to a commit on raw.githubusercontent.com, so a listed file can never change. */
export const isStoreFileUrl = (url: string): boolean => /^https:\/\/raw\.githubusercontent\.com\/[\w.-]+\/[\w.-]+\/[0-9a-f]{40}\/[\w./-]+\.m?js$/.test(url);

const text = (v: unknown, max: number): string => (typeof v === "string" ? v.trim().slice(0, max) : "");

/** Turns the downloaded index into entries; anything malformed is dropped instead of breaking the list. */
export function parseStoreIndex(json: unknown): StoreEntry[] {
  const list = (json as { plugins?: unknown } | null)?.plugins;
  if (!Array.isArray(list)) return [];
  const seen = new Set<string>();
  const out: StoreEntry[] = [];
  for (const raw of list as Record<string, unknown>[]) {
    if (!raw || typeof raw !== "object") continue;
    const id = text(raw.id, 64);
    const url = text(raw.url, 300);
    const sha256 = text(raw.sha256, 64).toLowerCase();
    const name = text(raw.name, 60);
    const version = text(raw.version, 40);
    const homepage = text(raw.homepage, 200);
    if (!/^[\w.-]+$/.test(id) || seen.has(id) || !name || !version) continue;
    if (!isStoreFileUrl(url) || !/^[0-9a-f]{64}$/.test(sha256)) continue;
    seen.add(id);
    out.push({ id, name, description: text(raw.description, 300), author: text(raw.author, 60), version, homepage: /^https:\/\//.test(homepage) ? homepage : "", url, sha256 });
  }
  return out;
}

export async function fetchStoreIndex(fetcher: typeof fetch = (...args) => fetch(...args)): Promise<StoreEntry[]> {
  const res = await fetcher(STORE_INDEX_URL, { cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return parseStoreIndex(await res.json());
}

export type StoreState = "available" | "installed" | "update";

/** Where an entry stands against the plugins in the plan: not installed, installed, or a newer version listed. */
export function storeState(entry: StoreEntry, refs: PluginRef[] | undefined): StoreState {
  const ref = (refs ?? []).find((r) => r.id === entry.id);
  if (!ref) return "available";
  return ref.sha256 === entry.sha256 && ref.url === entry.url ? "installed" : "update";
}

/** The plan's plugin list after installing or updating `entry` (an update keeps the on/off switch). */
export function withStoreEntry(refs: PluginRef[] | undefined, entry: StoreEntry): PluginRef[] {
  const list = refs ?? [];
  const next: PluginRef = { url: entry.url, enabled: true, id: entry.id, version: entry.version, sha256: entry.sha256 };
  const at = list.findIndex((r) => r.id === entry.id);
  if (at < 0) return [...list, next];
  return list.map((r, i) => (i === at ? { ...next, enabled: r.enabled } : r));
}

// ---------------------------------------------------------------- community furniture

/** A furniture pack of the store: a data file in the store's repository (packs/<id>.json), with its checksum. */
export interface StorePack {
  id: string;
  name: string;
  description: string;
  author: string;
  release: number;
  items: number;
  url: string;
  sha256: string;
}

/** Furniture packs come only from the store's own packs folder. */
export const isStorePackUrl = (url: string, id: string): boolean => url === `https://raw.githubusercontent.com/${STORE_REPO}/main/packs/${id}.json`;

/** The furniture packs of the downloaded index; anything malformed is dropped. */
export function parseStorePacks(json: unknown): StorePack[] {
  const list = (json as { packs?: unknown } | null)?.packs;
  if (!Array.isArray(list)) return [];
  const seen = new Set<string>();
  const out: StorePack[] = [];
  for (const raw of list as Record<string, unknown>[]) {
    if (!raw || typeof raw !== "object") continue;
    const id = text(raw.id, 40);
    const url = text(raw.url, 300);
    const sha256 = text(raw.sha256, 64).toLowerCase();
    const name = text(raw.name, 80);
    if (!/^[a-z0-9][a-z0-9_.-]{0,39}$/.test(id) || id.startsWith("nextfloor.") || seen.has(id) || !name) continue;
    if (!isStorePackUrl(url, id) || !/^[0-9a-f]{64}$/.test(sha256)) continue;
    seen.add(id);
    const num = (v: unknown, fallback: number) => (typeof v === "number" && Number.isInteger(v) && v > 0 ? v : fallback);
    out.push({ id, name, description: text(raw.description, 400), author: text(raw.author, 80), release: num(raw.release, 1), items: num(raw.items, 0), url, sha256 });
  }
  return out.sort((a, b) => a.name.localeCompare(b.name));
}

export async function fetchStorePacks(fetcher: typeof fetch = (...args) => fetch(...args)): Promise<StorePack[]> {
  const res = await fetcher(STORE_INDEX_URL, { cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return parseStorePacks(await res.json());
}

/** Where a store pack stands against the installed packs: not there, there in this release, or a newer release listed. */
export function storePackState(entry: StorePack, installed: readonly { id: string; release?: number }[]): StoreState {
  const own = installed.find((p) => p.id === entry.id);
  if (!own) return "available";
  return (own.release ?? 1) >= entry.release ? "installed" : "update";
}

const hex = (buf: ArrayBuffer) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");

/**
 * Downloads a store pack and checks it against its checksum. Browsers without `crypto.subtle` (plain http) cannot check;
 * the integration checks every pack's content again when it imports it.
 */
export async function downloadStorePack(entry: StorePack, fetcher: typeof fetch = (...args) => fetch(...args)): Promise<string> {
  const res = await fetcher(entry.url, { cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const bytes = await res.arrayBuffer();
  const subtle = globalThis.crypto?.subtle;
  if (subtle && hex(await subtle.digest("SHA-256", bytes)) !== entry.sha256) throw new Error("checksum mismatch: the file is not the one that was reviewed");
  return new TextDecoder().decode(bytes);
}
