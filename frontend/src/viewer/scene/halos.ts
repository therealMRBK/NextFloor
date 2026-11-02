// Soft glow points at lit lamps, light cones under spots (quality "High"), and the wedges plugins draw on the floor.

import { Color } from "three";
import { DEG, GeoBuffer } from "../geo.ts";
import { HANGING_LAMPS, LAMP_SIZE } from "./lamp-data.ts";
import type { DeviceMarker, LampModel } from "./types.ts";
import { stripPoint, stripRiseLift } from "./strip.ts";

type Wall2d = { a: readonly [number, number]; b: readonly [number, number] };

/** Height above the floor at which a wedge is drawn. */
const WEDGE_Y = 0.015;
/** A wall closer than this to the device is the one it hangs on, and does not block the view. */
const OWN_WALL = 0.45;

/**
 * How far a device at `origin` sees along the direction turned `turn` radians from `heading`: up to `reach`, or to the
 * first wall in the way.
 */
export function viewReach(walls: readonly Wall2d[], origin: readonly [number, number], heading: readonly [number, number], turn: number, reach: number): number {
  const [c, s] = [Math.cos(turn), Math.sin(turn)];
  const ray: [number, number] = [heading[0] * c - heading[1] * s, heading[1] * c + heading[0] * s];
  let nearest = reach;
  for (const wall of walls) {
    const edge: [number, number] = [wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]];
    const denominator = ray[0] * edge[1] - ray[1] * edge[0];
    if (Math.abs(denominator) < 1e-9) continue;
    const toStart: [number, number] = [wall.a[0] - origin[0], wall.a[1] - origin[1]];
    const along = (toStart[0] * edge[1] - toStart[1] * edge[0]) / denominator;
    const across = (toStart[0] * ray[1] - toStart[1] * ray[0]) / denominator;
    // a device just inside an outer wall looks out through it, so the wall it hangs on does not count
    if (along > OWN_WALL && along < nearest && across >= 0 && across <= 1) nearest = along;
  }
  return nearest;
}

/** A plugin's wedge on the floor: from `near` to the reach (or the first wall), fading out. Returns the triangles it added. */
export function addFloorWedge(buffer: GeoBuffer, device: DeviceMarker, walls: readonly Wall2d[]): { start: number; end: number } {
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
  for (let i = 0; i < steps; i++) {
    const [t0, t1] = [-half + (2 * half * i) / steps, -half + (2 * half * (i + 1)) / steps];
    const [r0, r1] = [viewReach(walls, origin, heading, t0, wedge.reach), viewReach(walls, origin, heading, t1, wedge.reach)];
    const [n0, n1] = [Math.min(wedge.near, r0), Math.min(wedge.near, r1)];
    if (wedge.near <= 0) buffer.tri([device.x, WEDGE_Y, device.z], at(t1, r1), at(t0, r0), inner, outer, outer);
    else {
      buffer.tri(at(t0, n0), at(t1, r1), at(t0, r0), inner, outer, outer);
      buffer.tri(at(t0, n0), at(t1, n1), at(t1, r1), inner, inner, outer);
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
