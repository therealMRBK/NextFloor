// Loads plugin modules and exposes `window.NextFloor` for them. Two ways in:
//  1. URLs in the plan's settings (Extensions page) are imported by the panel and the card.
//  2. A dashboard resource (e.g. installed by HACS) that loads before NextFloor pushes its plugin
//     onto `window.__nextfloorPlugins`; it is picked up when NextFloor starts.

import { PLUGIN_API_VERSION, isAllowedPluginUrl, pluginFetchUrl, type NextFloorPlugin, type PluginRef } from "./api.ts";
import { registerPlugin } from "./registry.ts";

export interface LoadState {
  url: string;
  state: "loading" | "loaded" | "error";
  error?: string;
}

const loads = new Map<string, LoadState>();
/** The module URL currently being evaluated, so register() calls can be attributed to it. */
let currentSource = "";

declare global {
  interface Window {
    NextFloor?: { apiVersion: number; register: (plugin: NextFloorPlugin) => void };
    __nextfloorPlugins?: NextFloorPlugin[];
  }
}

/** Installs `window.NextFloor` once and registers plugins queued by earlier scripts. */
export function installPluginGlobal(): void {
  // globalThis is window in the browser
  const w = globalThis as unknown as Window;
  if (w.NextFloor) return;
  w.NextFloor = {
    apiVersion: PLUGIN_API_VERSION,
    register: (plugin) => registerPlugin(plugin, currentSource),
  };
  const queued = w.__nextfloorPlugins ?? [];
  w.__nextfloorPlugins = [];
  for (const plugin of queued) {
    try {
      registerPlugin(plugin);
    } catch (err) {
      console.warn("NextFloor: plugin rejected", err);
    }
  }
}

const toHex = (buf: ArrayBuffer): string => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");

/**
 * What to import for a plugin. Plugins from the store carry the SHA-256 of their file: the file is
 * fetched, checked and imported from memory, so it cannot differ from the one that was reviewed.
 * Browsers without `crypto.subtle` (plain http) import the address as is; store addresses are pinned
 * to a commit, so they cannot change either.
 */
export async function resolveModuleUrl(ref: PluginRef, fetcher: typeof fetch = (...args) => fetch(...args)): Promise<{ url: string; revoke?: () => void }> {
  const subtle = globalThis.crypto?.subtle;
  if (!ref.sha256 || !subtle) return { url: ref.url };
  const res = await fetcher(ref.url, { cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const bytes = await res.arrayBuffer();
  if (toHex(await subtle.digest("SHA-256", bytes)) !== ref.sha256.toLowerCase()) throw new Error("checksum mismatch: the file is not the one that was reviewed");
  const blobUrl = URL.createObjectURL(new Blob([bytes], { type: "text/javascript" }));
  return { url: blobUrl, revoke: () => URL.revokeObjectURL(blobUrl) };
}

export const pluginLoadStates = (): LoadState[] => [...loads.values()];

/**
 * Imports every enabled plugin URL that was not imported yet. Modules are cached by the browser,
 * so turning a plugin off takes effect after a reload (the Extensions page says so).
 */
export async function loadPlugins(
  refs: PluginRef[] | undefined,
  importer: (url: string) => Promise<unknown> = (url) => import(/* @vite-ignore */ url),
  fetcher?: typeof fetch,
): Promise<void> {
  installPluginGlobal();
  for (const ref of refs ?? []) {
    if (!ref.enabled || loads.has(ref.url)) continue;
    if (!isAllowedPluginUrl(ref.url)) {
      loads.set(ref.url, { url: ref.url, state: "error", error: "not allowed: use /local/…, /hacsfiles/… or https://…" });
      continue;
    }
    const entry: LoadState = { url: ref.url, state: "loading" };
    loads.set(ref.url, entry);
    let resolved: { url: string; revoke?: () => void } | undefined;
    try {
      resolved = await resolveModuleUrl({ ...ref, url: pluginFetchUrl(ref.url) }, fetcher);
      currentSource = ref.url;
      await importer(resolved.url);
      entry.state = "loaded";
    } catch (err) {
      entry.state = "error";
      entry.error = err instanceof Error ? err.message : String(err);
      console.warn(`NextFloor: plugin ${ref.url} failed to load`, err);
    } finally {
      currentSource = "";
      resolved?.revoke?.();
    }
  }
}

/** Test helper. */
export function resetLoads(): void {
  loads.clear();
}
