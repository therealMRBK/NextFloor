// Soft glow points at lit lamps, light cones under spots (quality "High"), and the wedges plugins draw on the floor.

import { Color } from "three";
import { DEG, GeoBuffer } from "../geo.ts";
import { HANGING_LAMPS, LAMP_SIZE } from "./lamp-data.ts";
import type { DeviceMarker, LampModel } from "./types.ts";
import { stripPoint, stripRiseLift } from "./strip.ts";

/** A wall seen from above; `height` and `heightEnd` are its own heights at `a` and `b` (absent: as high as the floor). */
type Wall2d = { a: readonly [number, number]; b: readonly [number, number]; height?: number; heightEnd?: number };

/** Height above the floor at which a wedge is drawn. */
const WEDGE_Y = 0.015;
/** A wall closer than this to the device is the one it hangs on, and does not block the view. */
const OWN_WALL = 0.45;

/**
 * How far a device at `origin` sees along the direction turned `turn` radians from `heading`: up to `reach`, or to the
 * first wall in the way.
 */
export function viewReach(walls: readonly Wall2d[], origin: readonly [number, number], heading: readonly [number, number], turn: number, reach: number): number {
  return viewSpans(walls, origin, heading, turn, reach, Infinity, Infinity)[0]?.[1] ?? 0;
}

/**
 * The stretches of one ray (metres from the device, from 0 to `reach`) that the device sees on the floor. A wall at least as high as
 * the device (`eye`, its height above the floor) hides everything behind it. A lower wall only casts a shadow: the line of sight over
 * its top meets the floor again at `along * eye / (eye - top)`, and what lies from the wall to there is hidden (#164: a pony wall
 * 10 cm high must not blank a camera two metres up).
 */
export function viewSpans(walls: readonly Wall2d[], origin: readonly [number, number], heading: readonly [number, number], turn: number, reach: number, eye: number, floorHeight: number): [number, number][] {
  const [c, s] = [Math.cos(turn), Math.sin(turn)];
  const ray: [number, number] = [heading[0] * c - heading[1] * s, heading[1] * c + heading[0] * s];
  let end = reach;
  const shadows: [number, number][] = [];
  for (const wall of walls) {
    const edge: [number, number] = [wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]];
    const denominator = ray[0] * edge[1] - ray[1] * edge[0];
    if (Math.abs(denominator) < 1e-9) continue;
    const toStart: [number, number] = [wall.a[0] - origin[0], wall.a[1] - origin[1]];
    const along = (toStart[0] * edge[1] - toStart[1] * edge[0]) / denominator;
    const across = (toStart[0] * ray[1] - toStart[1] * ray[0]) / denominator;
    // a device just inside an outer wall looks out through it, so the wall it hangs on does not count
    if (!(along > OWN_WALL && along < end && across >= 0 && across <= 1)) continue;
    const top = (wall.height ?? floorHeight) + ((wall.heightEnd ?? wall.height ?? floorHeight) - (wall.height ?? floorHeight)) * across;
    if (!(top < eye)) end = along;
    else shadows.push([along, Math.min(reach, (along * eye) / (eye - Math.max(0, top)))]);
  }
  // what is left of 0…end once the shadows are taken out
  const spans: [number, number][] = [];
  let from = 0;
  for (const [a, b] of shadows.filter(([a]) => a < end).sort((p, q) => p[0] - q[0])) {
    if (a > from) spans.push([from, a]);
    from = Math.max(from, Math.min(b, end));
  }
  if (from < end) spans.push([from, end]);
  return spans;
}

/**
 * A plugin's wedge on the floor: from `near` to the reach, fading out, with a wall in the way cutting the view. `floorHeight` is the
 * height of the floor's walls; the device's own height (`device.y`) decides whether lower walls only cast a shadow.
 */
export function addFloorWedge(buffer: GeoBuffer, device: DeviceMarker, walls: readonly Wall2d[], floorHeight = Infinity): { start: number; end: number } {
  const start = buffer.count;
  const wedge = device.wedge;
  if (!wedge) return { start, end: start };
  const turn = (device.rotation ?? 0) * DEG;
  const heading: [number, number] = [-Math.sin(turn), Math.cos(turn)];
  const half = (wedge.angle * DEG) / 2;
  const inner = new Color(...(wedge.color.map((c) => c * wedge.opacity) as [number, number, number]));
  const outer = new Color(0, 0, 0);
  const steps = Math.max(4, Math.round(half / 0.15));
  const origin: [number, number] = [device.x, device.z];
  const at = (t: number, r: number): [number, number, number] => [device.x + (heading[0] * Math.cos(t) - heading[1] * Math.sin(t)) * r, WEDGE_Y, device.z + (heading[1] * Math.cos(t) + heading[0] * Math.sin(t)) * r];
  // the stretches seen along every ray, from `near` out; a radio's reach (Wi-Fi) goes through walls, a camera's view does not
  const rays = Array.from({ length: steps + 1 }, (_, i) => {
    const t = -half + (2 * half * i) / steps;
    const spans = wedge.walls === false ? [[0, wedge.reach] as [number, number]] : viewSpans(walls, origin, heading, t, wedge.reach, device.y, floorHeight);
    // before `near` nothing is drawn, and a ray that ends inside it still keeps a sliver so the wedge stays closed
    const seen = spans.map(([a, b]): [number, number] => [Math.max(a, Math.min(wedge.near, b)), b]).filter(([a, b]) => b > a || (wedge.near <= 0 && a === 0));
    return { t, seen: seen.length ? seen : [[Math.min(wedge.near, spans[0]?.[1] ?? 0), spans[0]?.[1] ?? 0] as [number, number]] };
  });
  for (let i = 0; i < steps; i++) {
    const [p, q] = [rays[i], rays[i + 1]];
    for (let k = 0; k < Math.min(p.seen.length, q.seen.length); k++) {
      const [[a0, e0], [a1, e1]] = [p.seen[k], q.seen[k]];
      if (a0 <= 0 && a1 <= 0) buffer.tri([device.x, WEDGE_Y, device.z], at(q.t, e1), at(p.t, e0), inner, outer, outer);
      else {
        buffer.tri(at(p.t, a0), at(q.t, e1), at(p.t, e0), inner, outer, outer);
        buffer.tri(at(p.t, a0), at(q.t, a1), at(q.t, e1), inner, inner, outer);
      }
    }
  }
  return { start, end: buffer.count };
}

/** The height of the glow point of a lamp model, for a room of height `ceiling`. */
export function haloHeight(model: LampModel, ceiling: number, base: number, height: number): number {
  switch (model) {
    case "ceiling":
      return ceiling - 0.07;
    case "downlight":
      return ceiling - 0.03;
    case "spot":
      return ceiling - height;
    case "panel":
      return ceiling - 0.03;
    case "pendant":
      return Math.max(0.4, ceiling - height) + 0.08;
    case "fan":
      return Math.max(0.5, ceiling - height + 0.03);
    case "floor":
      return base + height - 0.15;
    case "uplight":
      return base + height;
    case "table":
      return base + height - 0.09;
    case "wall":
      return base + height / 2;
    case "strip":
      return base + Math.max(0.02, height) - 0.01;
    case "bollard":
      return base + height - 0.08;
    case "garden":
      return base + height - 0.03;
  }
}

export interface HaloPoints {
  positions: number[];
  colours: number[];
}

/** How bright a halo is compared to the lamp's level. */
const HALO_LEVEL = 0.7;

/** Adds the glow points of a lit lamp: a strip gets four along its length, a wall lamp one in front of the wall, others one. */
export function addLampHalo(points: HaloPoints, lamp: DeviceMarker & { lamp: LampModel }, glow: NonNullable<DeviceMarker["glow"]>, ceiling: number): void {
  const [width, depth, height] = lamp.size ?? LAMP_SIZE[lamp.lamp];
  const base = lamp.base ?? 0;
  const turn = (lamp.rotation ?? 0) * DEG;
  const y = haloHeight(lamp.lamp, ceiling, base, height);
  const add = (x: number, yy: number, z: number, share: number) => {
    points.positions.push(x, yy, z);
    for (const c of glow.color) points.colours.push(c * glow.level * HALO_LEVEL * share);
  };
  if (lamp.lamp === "strip") {
    for (const along of [-0.4, -0.13, 0.13, 0.4]) {
      // an upright strip glows up its length
      if (lamp.upright) add(lamp.x, base + width * (0.5 + along), lamp.z, 0.6);
      else add(...stripPoint(lamp.x, y + stripRiseLift(lamp.base, width, lamp.rise), lamp.z, turn, width, lamp.rise, along), 0.6);
    }
  } else if (lamp.lamp === "wall") add(lamp.x - Math.sin(turn) * (depth / 2 + 0.05), y, lamp.z + Math.cos(turn) * (depth / 2 + 0.05), 1);
  else add(lamp.x, y, lamp.z, 1);
}

/** A soft cone from a downlight or spot to the floor, fading out towards the floor. */
export function addSpotCone(buffer: GeoBuffer, lamp: DeviceMarker & { lamp: LampModel }, glow: NonNullable<DeviceMarker["glow"]>, ceiling: number): void {
  const [width, , height] = lamp.size ?? LAMP_SIZE[lamp.lamp];
  const y = haloHeight(lamp.lamp, ceiling, lamp.base ?? 0, height);
  const top = new Color(...(glow.color.map((c) => c * 0.09 * glow.level) as [number, number, number]));
  const bottom = new Color(0, 0, 0);
  const [r0, r1] = [Math.max(0.03, width / 2), 0.45 + 0.35 * glow.level];
  const sides = 16;
  const ring = (angle: number, radius: number, yy: number): [number, number, number] => [lamp.x + Math.cos(angle) * radius, yy, lamp.z + Math.sin(angle) * radius];
  for (let i = 0; i < sides; i++) {
    const [a0, a1] = [(i / sides) * Math.PI * 2, ((i + 1) / sides) * Math.PI * 2];
    buffer.tri(ring(a0, r0, y), ring(a0, r1, 0.02), ring(a1, r1, 0.02), top, bottom, bottom);
    buffer.tri(ring(a0, r0, y), ring(a1, r1, 0.02), ring(a1, r0, y), top, bottom, top);
  }
}

/** Whether a lamp is hidden by the cut view (hanging lamps are, while the walls are cut). */
export const hiddenInCut = (model: LampModel): boolean => HANGING_LAMPS.has(model);
