// The point lights of a floor that are on: one per lit lamp (three along a strip), with the height and kind of light of their model.

import type { Floor } from "../../model.ts";
import { roomIndexAt, zoneOf, type LightKind, type LightSource } from "../lighting.ts";
import { LAMP_SIZE, lightOrigin } from "./lamp-data.ts";
import { stripPoint, stripRiseLift } from "./strip.ts";
import type { DeviceMarker } from "./types.ts";

const RADIANS = Math.PI / 180;
const FALLBACK_SIZE = [0.3, 0.3, 0.3] as const;

/** A strip lights along its whole length, so it counts as three lights each giving a little over half of its level. */
const STRIP_SHARES = [-1 / 3, 0, 1 / 3];
const STRIP_LEVEL = 0.55;

/** The glow of a marker (its colour and level) when it is on; null for lamps that are off. */
export type GlowOf = (marker: DeviceMarker) => DeviceMarker["glow"];

/** The light sources on a floor. `zones` joins rooms that have no wall between them, so a lamp lights its open neighbour. */
export function lightSourcesOf(floor: Floor, zones: readonly number[] | null, markers: readonly DeviceMarker[], glowOf: GlowOf): LightSource[] {
  const sources: LightSource[] = [];
  for (const marker of markers) {
    const glow = glowOf(marker);
    if (marker.floorId !== floor.id || !glow) continue;
    const room = zoneOf(zones as number[] | null, roomIndexAt(floor, marker.x, marker.z));
    const [width, , height] = marker.size ?? (marker.lamp ? LAMP_SIZE[marker.lamp] : FALLBACK_SIZE);
    const base = marker.base ?? 0;
    const [fallbackY, kind]: [number, LightKind] = marker.lamp ? lightOrigin(marker.lamp, marker.ceiling ?? floor.height, base, height) : [marker.y, "omni"];
    const y = marker.lightY ?? fallbackY;
    const { color, level } = glow;
    if (marker.lamp !== "strip") {
      sources.push({ x: marker.x, y, z: marker.z, color, level, kind, room });
      continue;
    }
    // standing upright a strip climbs; one turned on its side (or standing) lights all around rather than up or down
    const heading = (marker.rotation ?? 0) * RADIANS;
    const sideways = !!marker.upright || Math.abs(marker.roll ?? 0) > 45;
    const middle = y + stripRiseLift(marker.base, width, marker.rise);
    for (const along of STRIP_SHARES) {
      if (marker.upright) sources.push({ x: marker.x, y: base + width * (0.5 + along), z: marker.z, color, level: level * STRIP_LEVEL, kind: "omni", room });
      else {
        const [px, py, pz] = stripPoint(marker.x, middle, marker.z, heading, width, marker.rise, along);
        sources.push({ x: px, y: py, z: pz, color, level: level * STRIP_LEVEL, kind: sideways ? "omni" : kind, room });
      }
    }
  }
  return sources;
}
