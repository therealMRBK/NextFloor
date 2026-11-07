// The public plugin API (version 1). Plugins are plain ES modules that call
// `window.NextFloor.register({...})`; nothing here may import Lit or three.js, so the
// contract stays small and stable. Documented in docs/plugins.md.

import type { DeviceKind } from "../entities/kinds.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";

export const PLUGIN_API_VERSION = 1;

/** A light's glow as NextFloor draws it: colour channels 0–1 and the brightness level 0–1. */
export interface Glow {
  color: [number, number, number];
  level: number;
}

/** Turns the current glow into the animated one at `seconds` since the page loaded. */
export type LightAnimationFn = (glow: Glow, seconds: number) => Glow;

export interface MarkerContext {
  hass: HomeAssistant;
  entityId: string;
  state: HassEntity;
}

/** What a plugin may change on a device's marker; leave a field out to keep NextFloor's own value. */
export interface MarkerPatch {
  /** "mdi:icon-name" or inline SVG markup. */
  icon?: string;
  /** The short state text under the pin, e.g. "3 Pakete". */
  text?: string;
  /** Highlights the marker the way an "on" device is highlighted. */
  active?: boolean;
}

/** A value of a plugin setting on a placed device. */
export type SettingValue = string | number | boolean;

/** A text in one language, or by language code ("en", "de", …; English is the fallback). */
export type PluginText = string | Record<string, string>;

/** A field the plugin adds to a placed device's form in the editor; the value is stored with the placement. */
export interface DeviceSetting {
  /** 1–32 letters, digits or "_". */
  key: string;
  label: PluginText;
  type: "number" | "select" | "boolean";
  default: SettingValue;
  /** Numbers: limits and step. */
  min?: number;
  max?: number;
  step?: number;
  /** Selects: the choices as [value, label]. */
  options?: [string, PluginText][];
  hint?: PluginText;
}

/** Where a device stands in the plan. */
export interface PlacementInfo {
  floorId: string;
  roomId: string | null;
  x: number;
  z: number;
  /** Height above the floor (m). */
  y: number;
  /** Turn around the vertical axis (degrees), as set in the editor. */
  rotation: number;
}

export interface DeviceContext extends MarkerContext {
  placement: PlacementInfo;
  /** This plugin's settings of the device, defaults filled in. */
  settings: Record<string, SettingValue>;
}

/** A field of view (or a range) drawn flat on the floor from the device; it stops at walls. */
export interface FloorWedge {
  /** Opening angle in degrees (360: all around). */
  angle: number;
  /** How far it reaches (m), and where it starts (m, default 0). */
  reach: number;
  near?: number;
  /** "#rrggbb"; default a faint teal. */
  color?: string;
  /** 0–1, default 0.6. */
  opacity?: number;
  /** A tap on the wedge goes through to the room instead of tapping the device. */
  tapThrough?: boolean;
}

export interface TapContext extends DeviceContext {
  /**
   * Shows a node in a small window in the lower right corner of the 3D view (null closes it). A node with a `hass`
   * property gets every new hass object.
   */
  showWindow(node: Node | null, options?: { title?: string }): void;
  /** Opens Home Assistant's more-info dialog (default: this device). */
  moreInfo(entityId?: string): void;
}

export interface DeviceExtension {
  /** Which entities this extension handles. Runs for every placed entity, so keep it cheap. */
  match: (entityId: string, state: HassEntity | undefined) => boolean;
  /**
   * Lets NextFloor show entities of domains it does not know (e.g. `vacuum`, `lawn_mower`, `todo`).
   * The kind decides the default icon and how the device behaves; default "sensor".
   */
  kind?: DeviceKind;
  marker?: (ctx: MarkerContext) => MarkerPatch | null | undefined;
  /** Further entities whose changes redraw this device (a camera's motion sensor that colours its wedge). */
  watch?: (ctx: MarkerContext) => string[] | null | undefined;
  /** Extra fields in the device's form in the editor. */
  settings?: DeviceSetting[];
  /** A shape on the floor from the device, worked out again on every state change. */
  floorWedge?: (ctx: DeviceContext) => FloorWedge | null | undefined;
  /** A tap on the device (its marker or its wedge). Return true when the plugin handled it, so NextFloor does nothing else. */
  tap?: (ctx: TapContext) => boolean | void;
}

export interface RoomSectionContext {
  hass: HomeAssistant;
  room: { id: string; name: string; area_id: string | null };
  /** The entities NextFloor lists for this room. */
  entities: string[];
}

/** An extra block at the end of a room's panel (a small custom card). */
export interface RoomSection {
  id: string;
  /** Return a DOM node, a plain-text string, or null to show nothing for this room. */
  render: (ctx: RoomSectionContext) => Node | string | null | undefined;
}

export interface NextFloorPlugin {
  /** Unique, e.g. "garage-door-plus". Registering the same id again replaces the plugin. */
  id: string;
  name?: string;
  version?: string;
  /** The API version the plugin was written for; must be 1. */
  apiVersion: number;
  lightAnimations?: Record<string, LightAnimationFn>;
  devices?: DeviceExtension[];
  roomSections?: RoomSection[];
}

/** A plugin source stored in the plan's settings. */
export interface PluginRef {
  url: string;
  enabled: boolean;
  /** Set for plugins installed from the store: the plugin's store id, its version and the file's SHA-256. */
  id?: string;
  version?: string;
  sha256?: string;
}

/** Where plugin modules may be loaded from: Home Assistant's own www folder, HACS, or HTTPS. */
/**
 * The URL Home Assistant serves a file at: the folder config/www is served as /local/, so a path typed with the folder
 * in it (/local/www/…) never loads; it becomes /local/… (#78).
 */
export const pluginFetchUrl = (url: string): string => url.trim().replace(/^\/local\/www\//i, "/local/");

export const isAllowedPluginUrl = (url: string): boolean => /^(https:\/\/|\/local\/|\/hacsfiles\/)\S+\.m?js(\?\S*)?$/i.test(url.trim());
