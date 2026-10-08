/**
 * NextFloor's cameras, the data side:
 *  - where a camera placed in the plan looks from (for the flight into its picture)
 *  - its live stream and snapshot addresses (Home Assistant's camera proxy, plain HTTP: no websocket)
 *  - what it detects right now (person, vehicle, animal), from the binary sensors on its device
 *  - the motion of the last half hour, from the history of the motion sensors placed in the plan
 */
import type { Building } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import type { PlanPoint } from "../viewer/live-energy.ts";

export interface CameraSpot {
  entity: string;
  name: string;
  floorId: string;
  x: number;
  z: number;
  y: number;
  /** Degrees: the camera looks along its front, turned by this. */
  rotation: number;
  /** Degrees below the horizon. */
  tilt: number;
  dome: boolean;
}

const DEG = Math.PI / 180;

export function cameraSpots(hass: HomeAssistant, b: Building): CameraSpot[] {
  const out: CameraSpot[] = [];
  for (const floor of b.floors) {
    for (const p of floor.placements) {
      if (!p.entity_id.startsWith("camera.")) continue;
      const dome = p.mount === "ceiling";
      out.push({
        entity: p.entity_id,
        name: p.name || String(hass.states[p.entity_id]?.attributes.friendly_name ?? p.entity_id),
        floorId: floor.id,
        x: p.x,
        z: p.z,
        y: p.y ?? (dome ? floor.height - 0.1 : 2.3),
        rotation: p.rotation ?? 0,
        tilt: p.tilt ?? (dome ? 65 : 20),
        dome,
      });
    }
  }
  return out;
}

/**
 * The orbit view that puts the 3D camera where the real one hangs, looking where it looks: the target lies a few
 * metres ahead along its view, the orbit radius is that distance (see viewer/controls.ts: position = target + radius ·
 * (sin φ sin θ, cos φ, sin φ cos θ)).
 */
export function viewFromCamera(c: CameraSpot, floorY: number, reach = 3): { target: [number, number, number]; radius: number; theta: number; phi: number } {
  const a = c.rotation * DEG;
  const tilt = Math.min(85, Math.max(0, c.tilt)) * DEG;
  // the camera's front in plan coordinates (as its model is drawn: local +z turned by the rotation)
  const dx = -Math.sin(a), dz = Math.cos(a);
  const dir: [number, number, number] = [dx * Math.cos(tilt), -Math.sin(tilt), dz * Math.cos(tilt)];
  // the view starts a hand in front of the camera's housing, not inside it
  const ahead = reach + 0.35;
  const target: [number, number, number] = [c.x + dir[0] * ahead, floorY + c.y + dir[1] * ahead, c.z + dir[2] * ahead];
  return { target, radius: reach, theta: Math.atan2(-dir[0], -dir[2]), phi: Math.acos(Math.max(-1, Math.min(1, -dir[1]))) };
}

/** Live stream (MJPEG over HTTP) and a fresh snapshot of a camera. */
export function cameraUrls(hass: HomeAssistant, entity: string, now = Date.now()): { stream: string | null; snapshot: string | null } {
  const st = hass.states[entity];
  if (!st) return { stream: null, snapshot: null };
  const token = st.attributes.access_token;
  const picture = typeof st.attributes.entity_picture === "string" ? st.attributes.entity_picture : null;
  return {
    stream: typeof token === "string" ? `/api/camera_proxy_stream/${entity}?token=${token}` : null,
    // a fresh snapshot every couple of seconds (a data: picture of a demo stays as it is)
    snapshot: picture ? (picture.startsWith("data:") ? picture : `${picture}${picture.includes("?") ? "&" : "?"}t=${Math.floor(now / 2000)}`) : null,
  };
}

export type Detection = "person" | "vehicle" | "animal";

const DETECT: [Detection, RegExp][] = [
  ["person", /person|people|human|mensch/],
  ["vehicle", /vehicle|car\b|_car_|auto|fahrzeug|truck/],
  ["animal", /animal|pet|dog|cat|bird|tier|hund|katze/],
];

/** What a camera detects right now: binary sensors on its device that are on and name a kind. */
export function detections(hass: HomeAssistant, camera: string): Detection[] {
  const device = hass.entities?.[camera]?.device_id;
  const base = camera.split(".")[1];
  const ids = Object.keys(hass.states).filter((id) => id.startsWith("binary_sensor.") && (device ? hass.entities?.[id]?.device_id === device : id.includes(base)));
  const out = new Set<Detection>();
  for (const id of ids) {
    if (hass.states[id]?.state !== "on") continue;
    const kind = DETECT.find(([, re]) => re.test(id))?.[0];
    if (kind) out.add(kind);
  }
  return [...out];
}

export const DETECT_ICON: Record<Detection, string> = { person: "🧍", vehicle: "🚗", animal: "🐾" };

const isMotion = (hass: HomeAssistant, id: string) =>
  id.startsWith("binary_sensor.") &&
  (["motion", "occupancy", "presence", "moving"].includes(String(hass.states[id]?.attributes.device_class ?? "")) || /motion|bewegung|praesenz|presence/.test(id));

/** The area of an entity: its own, else its device's. */
function areaOf(hass: HomeAssistant, id: string): string | null {
  const e = hass.entities?.[id];
  if (e?.area_id) return e.area_id;
  return e?.device_id ? (hass.devices?.[e.device_id]?.area_id ?? null) : null;
}

/** Motion sensors of the plan: placed ones where they stand, the others of a room's area in the room's middle. */
export function motionSensors(hass: HomeAssistant, b: Building): { entity: string; at: PlanPoint }[] {
  const out: { entity: string; at: PlanPoint }[] = [];
  const seen = new Set<string>();
  for (const floor of b.floors) {
    for (const p of floor.placements) {
      if (!isMotion(hass, p.entity_id) || seen.has(p.entity_id)) continue;
      seen.add(p.entity_id);
      out.push({ entity: p.entity_id, at: { floorId: floor.id, x: p.x, z: p.z, y: 0.4 } });
    }
  }
  const byArea = new Map<string, string[]>();
  for (const id of Object.keys(hass.states)) {
    if (seen.has(id) || !isMotion(hass, id)) continue;
    const area = areaOf(hass, id);
    if (area) byArea.set(area, [...(byArea.get(area) ?? []), id]);
  }
  for (const floor of b.floors) {
    for (const room of floor.rooms) {
      const ids = room.area_id ? byArea.get(room.area_id) : undefined;
      if (!ids?.length || room.points.length < 3) continue;
      const x = room.points.reduce((s, p) => s + p[0], 0) / room.points.length;
      const z = room.points.reduce((s, p) => s + p[1], 0) / room.points.length;
      for (const id of ids) {
        if (seen.has(id)) continue;
        seen.add(id);
        out.push({ entity: id, at: { floorId: floor.id, x, z, y: 0.4 } });
      }
    }
  }
  return out;
}

export interface TrailSpot {
  entity: string;
  at: PlanPoint;
  /** Unix seconds of the motion. */
  t: number;
}

/** Motion events of the last `minutes` in time order, from Home Assistant's history (one websocket call per refresh). */
export async function motionTrail(hass: HomeAssistant, sensors: readonly { entity: string; at: PlanPoint }[], minutes = 30): Promise<TrailSpot[]> {
  if (!sensors.length) return [];
  const start = new Date(Date.now() - minutes * 60_000).toISOString();
  const res = await hass.callWS<Record<string, { s: string; lu: number }[]>>({
    type: "history/history_during_period",
    start_time: start,
    entity_ids: sensors.map((s) => s.entity),
    minimal_response: true,
    no_attributes: true,
    significant_changes_only: false,
  });
  const at = new Map(sensors.map((s) => [s.entity, s.at]));
  const spots: TrailSpot[] = [];
  for (const [entity, list] of Object.entries(res ?? {})) {
    const p = at.get(entity);
    if (!p) continue;
    for (const e of list) if (e.s === "on") spots.push({ entity, at: p, t: e.lu });
  }
  spots.sort((a, b) => a.t - b.t);
  // the same sensor twice in a row is one stay
  return spots.filter((s, i) => i === 0 || s.entity !== spots[i - 1].entity);
}
