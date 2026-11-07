// The sun's path over the plot: a ring on the ground with the four points of the compass, and the arc the sun draws today with a
// bead where it stands now. Drawn from lines only, rebuilt when the sun or the plot moves a little, so it costs nothing per frame.

import { BufferGeometry, CanvasTexture, Float32BufferAttribute, Group, Line, LineBasicMaterial, LineSegments, Mesh, MeshBasicMaterial, Sprite, SpriteMaterial, SphereGeometry } from "three";
import { sunPosition, todayAt } from "../../sun-position.ts";
import { directionToSun } from "./sunlight.ts";
import type { SunState } from "./types.ts";

export interface SunArcPlace {
  /** The middle of the plot and the ring's radius, in plan metres. */
  centre: [number, number];
  radius: number;
  /** Where north lies in the plan (degrees clockwise from up). */
  north: number;
  latitude: number;
  longitude: number;
  zone?: string | null;
}

/** The points of today's arc: where the sun stands every quarter of an hour while it is above the horizon, on a ring of `radius`. */
export function arcPoints(place: SunArcPlace, now = new Date()): [number, number, number][] {
  const points: [number, number, number][] = [];
  for (let h = 0; h <= 24; h += 0.25) {
    const sun = sunPosition(todayAt(Math.min(h, 23.99), place.zone, now), place.latitude, place.longitude);
    if (sun.elevation < 0) continue;
    points.push(pointOnDome(place, sun));
  }
  return points;
}

/** A sun position as a point of the dome over the plot: the horizon on the ring, the zenith at 0.9 of its radius above the middle. */
export function pointOnDome(place: SunArcPlace, sun: SunState): [number, number, number] {
  const [dx, dz] = directionToSun(sun.azimuth, place.north);
  const e = (Math.max(0, sun.elevation) * Math.PI) / 180;
  return [place.centre[0] + dx * place.radius * Math.cos(e), Math.sin(e) * place.radius * 0.9, place.centre[1] + dz * place.radius * Math.cos(e)];
}

function label(text: string, colour: string): Sprite {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d");
  if (ctx) {
    ctx.font = "bold 44px system-ui, sans-serif";
    ctx.fillStyle = colour;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 32, 34);
  }
  const sprite = new Sprite(new SpriteMaterial({ map: new CanvasTexture(c), transparent: true, depthWrite: false, depthTest: false }));
  sprite.renderOrder = 20;
  return sprite;
}

export class SunArc {
  readonly group = new Group();
  private key = "";

  constructor() {
    this.group.visible = false;
    this.group.renderOrder = 15;
  }

  /** Draws (or hides, with `place` null) the ring, the compass letters, today's arc and the sun's bead. */
  update(place: SunArcPlace | null, sun: SunState | null, groundY: number): void {
    const key = place ? `${place.centre},${place.radius.toFixed(1)},${place.north},${place.latitude.toFixed(2)},${place.longitude.toFixed(2)},${new Date().toDateString()},${groundY},${sun ? `${sun.elevation.toFixed(0)},${sun.azimuth.toFixed(0)}` : "-"}` : "off";
    if (key === this.key) return;
    this.key = key;
    this.clear();
    if (!place) {
      this.group.visible = false;
      return;
    }
    this.group.visible = true;
    const y = groundY + 0.05;
    const ring: number[] = [];
    for (let i = 0; i <= 96; i++) {
      const a = (i / 96) * Math.PI * 2;
      ring.push(place.centre[0] + Math.cos(a) * place.radius, y, place.centre[1] + Math.sin(a) * place.radius);
    }
    const ringGeo = new BufferGeometry();
    ringGeo.setAttribute("position", new Float32BufferAttribute(ring, 3));
    this.group.add(new Line(ringGeo, new LineBasicMaterial({ color: 0x6f8fc8, transparent: true, opacity: 0.55, depthWrite: false })));
    // four ticks and the letters; north (red) comes from the plan's own north
    const ticks: number[] = [];
    [["N", 0], ["E", 90], ["S", 180], ["W", 270]].forEach(([text, az]) => {
      const [dx, dz] = directionToSun(az as number, place.north);
      ticks.push(place.centre[0] + dx * place.radius * 0.94, y, place.centre[1] + dz * place.radius * 0.94, place.centre[0] + dx * place.radius * 1.04, y, place.centre[1] + dz * place.radius * 1.04);
      const sprite = label(text as string, text === "N" ? "#ff6b6b" : "#9fb4d8");
      sprite.position.set(place.centre[0] + dx * place.radius * 1.12, y + 0.4, place.centre[1] + dz * place.radius * 1.12);
      sprite.scale.setScalar(Math.max(1.2, place.radius * 0.12));
      this.group.add(sprite);
    });
    const tickGeo = new BufferGeometry();
    tickGeo.setAttribute("position", new Float32BufferAttribute(ticks, 3));
    this.group.add(new LineSegments(tickGeo, new LineBasicMaterial({ color: 0x9fb4d8, transparent: true, opacity: 0.8, depthWrite: false })));
    const arc = arcPoints(place).map(([x, py, z]) => [x, groundY + py, z]);
    if (arc.length > 1) {
      const arcGeo = new BufferGeometry();
      arcGeo.setAttribute("position", new Float32BufferAttribute(arc.flat(), 3));
      this.group.add(new Line(arcGeo, new LineBasicMaterial({ color: 0xffc247, transparent: true, opacity: 0.85, depthWrite: false })));
    }
    if (sun && sun.elevation > 0) {
      const [x, py, z] = pointOnDome(place, sun);
      const bead = new Mesh(new SphereGeometry(Math.max(0.35, place.radius * 0.035), 12, 8), new MeshBasicMaterial({ color: 0xffd25a }));
      bead.position.set(x, groundY + py, z);
      this.group.add(bead);
    }
  }

  private clear(): void {
    for (const child of [...this.group.children]) {
      this.group.remove(child);
      const m = child as Mesh;
      m.geometry?.dispose();
      const mat = m.material as { map?: { dispose(): void }; dispose(): void } | undefined;
      mat?.map?.dispose();
      mat?.dispose();
    }
  }

  dispose(): void {
    this.clear();
  }
}
