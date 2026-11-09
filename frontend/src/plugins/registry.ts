// Registered plugins and the lookups the rest of NextFloor uses. A broken plugin must never break
// the house view: every call into plugin code is guarded and failures are recorded per plugin.

import type { DeviceKind } from "../entities/kinds.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";
import {
  PLUGIN_API_VERSION,
  type DeviceSetting,
  type Glow,
  type LightAnimationFn,
  type MarkerContext,
  type MarkerPatch,
  type NextFloorPlugin,
  type PlacementInfo,
  type PluginText,
  type RoomSectionContext,
  type SettingValue,
  type TapContext,
} from "./api.ts";

export interface PluginStatus {
  id: string;
  name: string;
  version: string;
  /** The module URL it came from (empty when registered by a dashboard resource). */
  source: string;
  errors: string[];
}

// The main bundle and the lazily loaded 3D bundle each carry their own copy of this module, so the
// state lives on globalThis: both copies must see the same plugins.
interface Store {
  plugins: Map<string, { plugin: NextFloorPlugin; status: PluginStatus }>;
  listeners: Set<() => void>;
}
const g = globalThis as typeof globalThis & { __nextfloorPluginStore?: Store };
const store: Store = (g.__nextfloorPluginStore ??= { plugins: new Map(), listeners: new Set() });
const plugins = store.plugins;
const listeners = store.listeners;

const BUILT_IN_ANIMATIONS = new Set(["none", "rainbow", "pulse", "flicker"]);
const MAX_ERRORS = 5;

function note(status: PluginStatus, err: unknown): void {
  if (status.errors.length < MAX_ERRORS) status.errors.push(err instanceof Error ? err.message : String(err));
}

function changed(): void {
  for (const listener of listeners) listener();
}

/** Called whenever a plugin is added, replaced or fails; returns the unsubscribe function. */
export function onPluginsChanged(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Validates and stores a plugin. Throws with a readable message when the plugin cannot be used. */
export function registerPlugin(plugin: NextFloorPlugin, source = ""): void {
  if (!plugin || typeof plugin !== "object") throw new Error("register() needs a plugin object");
  if (typeof plugin.id !== "string" || !/^[a-z0-9][a-z0-9._-]{0,63}$/i.test(plugin.id)) throw new Error("plugin id must be 1–64 letters, digits, '.', '_' or '-'");
  if (plugin.apiVersion !== PLUGIN_API_VERSION) throw new Error(`plugin "${plugin.id}" wants API ${String(plugin.apiVersion)}, NextFloor offers ${PLUGIN_API_VERSION}`);
  for (const name of Object.keys(plugin.lightAnimations ?? {})) {
    if (BUILT_IN_ANIMATIONS.has(name)) throw new Error(`plugin "${plugin.id}": light animation "${name}" is built in`);
    if (typeof plugin.lightAnimations?.[name] !== "function") throw new Error(`plugin "${plugin.id}": light animation "${name}" is not a function`);
  }
  for (const device of plugin.devices ?? []) {
    if (typeof device?.match !== "function") throw new Error(`plugin "${plugin.id}": every device extension needs match()`);
    for (const key of ["floorWedge", "tap", "watch"] as const) if (device[key] !== undefined && typeof device[key] !== "function") throw new Error(`plugin "${plugin.id}": ${key} must be a function`);
    for (const s of device.settings ?? []) {
      if (!s || typeof s.key !== "string" || !/^\w{1,32}$/.test(s.key)) throw new Error(`plugin "${plugin.id}": a setting needs a key of 1–32 letters, digits or "_"`);
      if (!["number", "select", "boolean", "entity"].includes(s.type)) throw new Error(`plugin "${plugin.id}": setting "${s.key}" has an unknown type`);
    }
  }
  for (const section of plugin.roomSections ?? []) if (typeof section?.render !== "function" || typeof section.id !== "string") throw new Error(`plugin "${plugin.id}": every room section needs id and render()`);
  plugins.set(plugin.id, {
    plugin,
    status: { id: plugin.id, name: plugin.name || plugin.id, version: plugin.version || "", source, errors: [] },
  });
  changed();
}

export function unregisterPlugin(id: string): void {
  if (plugins.delete(id)) changed();
}

export const pluginStatuses = (): PluginStatus[] => [...plugins.values()].map((p) => p.status);

// ---- light animations ---------------------------------------------------------------------------

/** Names of the light animations plugins add, for the editor's effect mapping. */
export const pluginLightAnimationNames = (): string[] => [...plugins.values()].flatMap((p) => Object.keys(p.plugin.lightAnimations ?? {}));

function findAnimation(name: string): { fn: LightAnimationFn; status: PluginStatus } | null {
  for (const { plugin, status } of plugins.values()) {
    const fn = plugin.lightAnimations?.[name];
    if (fn) return { fn, status };
  }
  return null;
}

export const hasPluginAnimation = (name: string): boolean => findAnimation(name) !== null;

/** Runs a plugin animation; a throwing or malformed one leaves the glow as it was. */
export function animateWithPlugin(glow: Glow, name: string, seconds: number): Glow {
  const found = findAnimation(name);
  if (!found) return glow;
  try {
    const out = found.fn({ color: [...glow.color] as Glow["color"], level: glow.level }, seconds);
    const ok = out && Array.isArray(out.color) && out.color.length === 3 && out.color.every((c) => Number.isFinite(c)) && Number.isFinite(out.level);
    if (!ok) return glow;
    const clamp = (v: number) => Math.max(0, Math.min(1, v));
    return { color: [clamp(out.color[0]), clamp(out.color[1]), clamp(out.color[2])], level: clamp(out.level) };
  } catch (err) {
    note(found.status, err);
    return glow;
  }
}

// ---- devices ------------------------------------------------------------------------------------

function* matchingDevices(entityId: string, state: HassEntity | undefined) {
  for (const { plugin, status } of plugins.values()) {
    for (const device of plugin.devices ?? []) {
      let hit = false;
      try {
        hit = device.match(entityId, state);
      } catch (err) {
        note(status, err);
      }
      if (hit) yield { device, status };
    }
  }
}

/** The kind a plugin gives an entity NextFloor does not know itself (null: no plugin claims it). */
export function pluginKind(entityId: string, state: HassEntity | undefined): DeviceKind | null {
  for (const { device } of matchingDevices(entityId, state)) return device.kind ?? "sensor";
  return null;
}

/** The Material Design icon ("mdi:…") plugins give the entity's marker, for the editor, which shows no inline SVG; null: none. */
export function pluginMdiIcon(hass: HomeAssistant, entityId: string): string | null {
  const state = hass.states[entityId];
  if (!state) return null;
  const icon = pluginMarkerPatch({ hass, entityId, state })?.icon?.trim();
  return icon && /^mdi:[a-z0-9-]+$/i.test(icon) ? icon : null;
}

/** Collected marker changes of every matching plugin; later plugins win on the same field. */
export function pluginMarkerPatch(ctx: MarkerContext, data?: PluginData): MarkerPatch | null {
  let patch: MarkerPatch | null = null;
  for (const { device, status } of matchingDevices(ctx.entityId, ctx.state)) {
    if (!device.marker) continue;
    try {
      const p = device.marker({ ...ctx, settings: settingsWithDefaults(device.settings, data?.[status.id]) });
      if (!p) continue;
      patch = { ...(patch ?? {}) };
      if (typeof p.icon === "string" && p.icon) patch.icon = p.icon;
      if (typeof p.text === "string") patch.text = p.text.slice(0, 60);
      if (typeof p.active === "boolean") patch.active = p.active;
    } catch (err) {
      note(status, err);
    }
  }
  return patch;
}

/** The further entities plugins want watched for a placed device. */
export function pluginWatched(ctx: MarkerContext, data?: PluginData): string[] {
  const out: string[] = [];
  for (const { device, status } of matchingDevices(ctx.entityId, ctx.state)) {
    if (!device.watch) continue;
    try {
      const ids = device.watch({ ...ctx, settings: settingsWithDefaults(device.settings, data?.[status.id]) });
      if (Array.isArray(ids)) out.push(...ids.filter((id): id is string => typeof id === "string").slice(0, 20));
    } catch (err) {
      note(status, err);
    }
  }
  return out;
}

/** A plugin text in the given language: the language's own, else English, else the first one. */
export function pluginText(text: PluginText | undefined, language: string): string {
  if (!text) return "";
  if (typeof text === "string") return text;
  return text[language] ?? text[language.split("-")[0]] ?? text.en ?? Object.values(text)[0] ?? "";
}

/** What plugins store on a placement: per plugin id, its settings by key. */
export type PluginData = Record<string, Record<string, SettingValue>>;

/** The settings plugins add to a device's form, with the plugin they belong to. */
export function pluginDeviceSettings(entityId: string, state: HassEntity | undefined): { pluginId: string; name: string; settings: DeviceSetting[] }[] {
  const out: { pluginId: string; name: string; settings: DeviceSetting[] }[] = [];
  for (const { device, status } of matchingDevices(entityId, state)) if (device.settings?.length) out.push({ pluginId: status.id, name: status.name, settings: device.settings });
  return out;
}

/** A plugin's settings of a device: the stored values that fit the setting, the defaults for the rest. */
export function settingsWithDefaults(settings: readonly DeviceSetting[] | undefined, stored: Record<string, SettingValue> | undefined): Record<string, SettingValue> {
  const out: Record<string, SettingValue> = {};
  for (const s of settings ?? []) {
    const v = stored?.[s.key];
    const fits =
      s.type === "number"
        ? typeof v === "number" && Number.isFinite(v)
        : s.type === "boolean"
          ? typeof v === "boolean"
          : s.type === "entity"
            ? typeof v === "string" && /^([a-z_]+\.\w+)?$/.test(v) && (!s.domains?.length || v === "" || s.domains.includes(v.split(".")[0]))
            : typeof v === "string" && (s.options ?? []).some(([o]) => o === v);
    out[s.key] = fits ? v! : s.default;
  }
  return out;
}

/** A wedge as the 3D view draws it. */
export interface DrawnWedge {
  angle: number;
  reach: number;
  near: number;
  color: [number, number, number];
  opacity: number;
  through: boolean;
}

const hexColor = (value: unknown): [number, number, number] | null => {
  const m = typeof value === "string" ? /^#([0-9a-f]{6})$/i.exec(value.trim()) : null;
  if (!m) return null;
  const n = Number.parseInt(m[1], 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
};
const finite = (v: unknown, fallback: number, lo: number, hi: number): number => (typeof v === "number" && Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : fallback);

/** Whether a plugin draws a wedge for this entity (the editor then offers a handle to turn it). */
export function pluginDrawsWedge(entityId: string, state: HassEntity | undefined): boolean {
  for (const { device } of matchingDevices(entityId, state)) if (device.floorWedge) return true;
  return false;
}

/** The floor wedge of a placed device, from the first plugin that draws one; null for none. */
export function pluginFloorWedge(ctx: MarkerContext, placement: PlacementInfo, data: PluginData | undefined): DrawnWedge | null {
  for (const { device, status } of matchingDevices(ctx.entityId, ctx.state)) {
    if (!device.floorWedge) continue;
    try {
      const w = device.floorWedge({ ...ctx, placement, settings: settingsWithDefaults(device.settings, data?.[status.id]) });
      if (!w) continue;
      const reach = finite(w.reach, 0, 0, 30);
      if (reach <= 0) continue;
      return {
        angle: finite(w.angle, 90, 1, 360),
        reach,
        near: finite(w.near, 0, 0, reach),
        color: hexColor(w.color) ?? [0.04, 0.22, 0.28],
        opacity: finite(w.opacity, 0.6, 0, 1),
        through: w.tapThrough === true,
      };
    } catch (err) {
      note(status, err);
    }
  }
  return null;
}

/** Hands a tap on a device to the plugins; true when one of them handled it. */
export function pluginTap(ctx: MarkerContext, placement: PlacementInfo, data: PluginData | undefined, tools: Pick<TapContext, "showWindow" | "moreInfo">): boolean {
  for (const { device, status } of matchingDevices(ctx.entityId, ctx.state)) {
    if (!device.tap) continue;
    try {
      if (device.tap({ ...ctx, ...tools, placement, settings: settingsWithDefaults(device.settings, data?.[status.id]) }) === true) return true;
    } catch (err) {
      note(status, err);
    }
  }
  return false;
}

// ---- room sections ------------------------------------------------------------------------------

export interface RenderedSection {
  key: string;
  title: string;
  content: Node | string;
}

export function pluginRoomSections(ctx: RoomSectionContext): RenderedSection[] {
  const out: RenderedSection[] = [];
  for (const { plugin, status } of plugins.values()) {
    for (const section of plugin.roomSections ?? []) {
      try {
        const content = section.render(ctx);
        if (content === null || content === undefined || content === "") continue;
        if (typeof content !== "string" && !(content instanceof Node)) continue;
        out.push({ key: `${plugin.id}/${section.id}`, title: status.name, content });
      } catch (err) {
        note(status, err);
      }
    }
  }
  return out;
}

/** Test helper: forget every plugin. */
export function resetPlugins(): void {
  plugins.clear();
  changed();
}
