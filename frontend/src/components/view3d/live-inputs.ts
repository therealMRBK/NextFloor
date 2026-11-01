// What the 3D view reads from Home Assistant each time something changed: the state of roof windows, which screens show what,
// which sprinklers water, and where the sun is.

import { hasScreen, isActive, isUnavailable, openingState, type FurnitureLinks } from "../../devices.ts";
import { appColor, isLive, showsSomething } from "../../live/media.ts";
import type { Building, Floor, Furniture } from "../../model.ts";
import type { HomeAssistant } from "../../types.ts";
import { mountBase } from "../../packs.ts";
import type { LiveScreenInput } from "../../viewer/viewer3d.ts";
import type { SpraySpot } from "../../viewer/live-water.ts";

/** How far a lawn sprinkler reaches when its form does not say (m). */
export const SPRAY_REACH = 3;

/** Lawn sprinklers whose valve or switch is on now: where their nozzle is and how far they reach. */
export function liveSprays(hass: HomeAssistant, building: Building, links: ReadonlyMap<string, FurnitureLinks> | null): SpraySpot[] {
  const out: SpraySpot[] = [];
  for (const floor of building.floors) {
    for (const f of floor.furniture) {
      if (!f.type.endsWith(":sprinkler")) continue;
      const entity = links?.get(f.id)?.entity ?? null;
      if (!entity || !isActive(hass.states[entity])) continue;
      out.push({ id: f.id, at: { floorId: floor.id, x: f.x, y: mountBase(floor, f) + f.h, z: f.z }, reach: Math.min(15, Math.max(0.5, f.spray ?? SPRAY_REACH)) });
    }
  }
  return out;
}

const real = (id: string | null | undefined): string | null => (id && id !== "none" ? id : null);

export interface RoofWindowState {
  open: number;
  tilt: number;
  cover: number;
}

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/**
 * The sash and blind of every roof window. They follow their contact and cover like windows do. A window motor sets the sash by its
 * position (0 to 100), or fully open or closed by a plain state.
 */
export function roofWindowStates(hass: HomeAssistant, building: Building): Map<string, RoofWindowState> {
  const states = new Map<string, RoofWindowState>();
  for (const w of building.settings.roof?.windows ?? []) {
    const state = openingState(hass, { cover: real(w.cover), contact: real(w.contact), tilt: real(w.tilt) }, "window");
    const motorId = real(w.window);
    const motor = motorId ? hass.states[motorId] : undefined;
    let open = state.open;
    if (motor && !isUnavailable(motor)) {
      const position = motor.attributes.current_position;
      open = typeof position === "number" ? clamp01(position / 100) : motor.state === "open" || motor.state === "opening" ? 1 : 0;
    }
    states.set(w.id, { open, tilt: state.tilt, cover: state.cover ?? 0 });
  }
  return states;
}

/** A media player placed right beside a screen counts as its player (an Apple TV next to the TV): within 2 m or the screen's width. */
function playerBeside(floor: Floor, screen: Furniture): string | null {
  const distance = (p: { x: number; z: number }) => Math.hypot(p.x - screen.x, p.z - screen.z);
  const near = floor.placements.filter((p) => p.entity_id.startsWith("media_player.") && distance(p) < Math.max(2, screen.w));
  return near.sort((a, b) => distance(a) - distance(b))[0]?.entity_id ?? null;
}

const text = (attributes: Record<string, unknown>, key: string): string => (typeof attributes[key] === "string" ? (attributes[key] as string) : "");

/** What each TV or monitor shows right now: a screen linked to a media player (or with one beside it) that plays, is paused, or is a TV that is on with something showing. */
export function liveScreens(hass: HomeAssistant, building: Building, links: ReadonlyMap<string, FurnitureLinks> | null): LiveScreenInput[] {
  const screens: LiveScreenInput[] = [];
  for (const floor of building.floors) {
    for (const furniture of floor.furniture) {
      if (!hasScreen(furniture.type)) continue;
      const linked = links?.get(furniture.id)?.entity ?? null;
      const player = linked?.startsWith("media_player.") ? linked : playerBeside(floor, furniture);
      const state = player ? hass.states[player] : undefined;
      if (!state || !showsSomething(state)) continue;
      const attributes = state.attributes as Record<string, unknown>;
      const app = text(attributes, "app_name") || text(attributes, "source") || null;
      screens.push({
        id: furniture.id,
        furnitureId: furniture.id,
        floorId: floor.id,
        color: appColor(app),
        title: text(attributes, "media_title") || text(attributes, "media_channel") || app || "",
        subtitle: text(attributes, "media_artist") || text(attributes, "media_series_title") || text(attributes, "media_album_name"),
        app,
        picture: text(attributes, "entity_picture") || null,
        playing: isLive(state),
        ambilight: furniture.ambilight ?? 1,
      });
    }
  }
  return screens;
}

/** The sun's position, or null when it is not reported. */
export function readSun(hass: HomeAssistant): { elevation: number; azimuth: number } | null {
  const attributes = hass.states["sun.sun"]?.attributes;
  return typeof attributes?.elevation === "number" && typeof attributes.azimuth === "number" ? { elevation: attributes.elevation, azimuth: attributes.azimuth } : null;
}

/** How light the sky is: dark until the sun is 4° below the horizon, full from 12° above, and clouds take a good part of it. */
export function skyLightness(elevation: number | null, cloud: number): number {
  return (elevation === null ? 0 : clamp01((elevation + 4) / 16)) * (1 - 0.45 * cloud);
}
