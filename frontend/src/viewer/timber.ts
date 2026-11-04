// Timbers: the half-timbered frame, rafters, purlins — and the heating screed plates.
//
// A timber is a straight run from `a` to `b` with a rectangular cross section (w across the run, d along it),
// both in floor-local metres. One InstancedMesh per floor keeps thousands of beams at one draw call.
//
// Heating plates carry tone "heating": they are drawn as a separate, translucent mesh (the pipes vanished
// into the screed, so the floor shows a thermal surface instead of 16 mm pipes).

import { BoxGeometry, Color, Group, InstancedMesh, Matrix4, MeshBasicMaterial, Quaternion, Vector3 } from "three";
import type { Floor, Timber } from "../model.ts";

const TONES: Record<string, number> = {
  oak: 0xb0793f,
  dark: 0x5a3a22,
  light: 0xc9a06a,
  copper: 0xb87333,
  steel: 0x8a8f98,
};
const FALLBACK = 0xa9743f;
const HEATING = "heating";
/** Cold (20 °C) to warm (35 °C): the blend the heating plates are tinted with. */
export const HEATING_MIN = 20;
export const HEATING_MAX = 35;
/** IIR damping of the screed's thermal inertia (alpha per update). */
let heatingMix = 0.55;
/** Farbskala der Platten: FBH-Mischtemperatur oder KNX-Raumluft. */
export type HeatingMode = "fbh_mix" | "knx_room_temp";
let heatingMode: HeatingMode = "fbh_mix";
/** Raumluft 18-24 Grad auf 0..1 normiert (Modus knx_room_temp). */
let roomScale = 0.4;
/** Raum-ID -> Ist-Temperatur (KNX-Heizkreise), fuer raumweise Plattenfarbe. */
let roomTemps: Record<string, number> = {};

export function setRoomTemps(map: Record<string, number>): void { roomTemps = map; }

/** Plattenfarbe: raumweise Temperatur, sonst globale Skala. */
function plateScale(t: Timber): number {
  if (heatingMode !== "knx_room_temp") return heatingMix;
  const room = String(t.id).startsWith("fbh_") ? String(t.id).slice(4) : "";
  const local = room ? roomTemps[room] : undefined;
  if (typeof local === "number") return Math.max(0, Math.min(1, (local - 18) / (24 - 18)));
  return roomScale;
}

export function setHeatingMode(mode: HeatingMode): void { heatingMode = mode; }

export function setRoomTemp(celsius: number | null): void {
  if (celsius === null || !Number.isFinite(celsius)) return;
  roomScale = Math.max(0, Math.min(1, (celsius - 18) / (24 - 18)));
}

/** Alle Platten-Meshes, damit ein Moduswechsel ohne Neuaufbau wirkt. */
const plateMeshes: { mesh: InstancedMesh; list: readonly Timber[] }[] = [];
export function refreshHeatingColours(): void {
  for (const { mesh, list } of plateMeshes) {
    let n = 0;
    for (const t of list) {
      mesh.setColorAt(n, heatingColour(t));
      n++;
    }
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }
}

/** Set the plate tint from the circuit telemetry: T_eff = T_return + u * (T_flow - T_return). */
export function setHeatingMix(flow: number, back: number, valve: number): void {
  const eff = back + Math.max(0, Math.min(1, valve / 100)) * (flow - back);
  const target = Math.max(0, Math.min(1, (eff - HEATING_MIN) / (HEATING_MAX - HEATING_MIN)));
  // thermal inertia: the screed follows slowly
  heatingMix = heatingMix * 0.95 + target * 0.05;
}

/** Blue (cold) to red (warm) through a neutral amber. */
function heatingColour(timber?: Timber): Color {
  const t = timber ? plateScale(timber) : (heatingMode === "fbh_mix" ? heatingMix : roomScale);
  const hue = (1 - t) * 0.62;
  return new Color().setHSL(hue, 0.75, 0.5);
}

const BOX = new BoxGeometry(1, 1, 1);
const UP = new Vector3(0, 1, 0);

const timbersOf = (floor: Floor): readonly Timber[] => (floor as Floor & { timbers?: Timber[] }).timbers ?? [];

function fill(list: readonly Timber[], material: MeshBasicMaterial, tint: ((t: Timber) => Color) | null): InstancedMesh | null {
  if (!list.length) return null;
  const mesh = new InstancedMesh(BOX, material, list.length);
  const matrix = new Matrix4();
  const quat = new Quaternion();
  const dir = new Vector3();
  const mid = new Vector3();
  const scale = new Vector3();
  const pos = new Vector3();
  const colour = new Color();
  let n = 0;
  for (const t of list) {
    const [ax, ay, az] = t.a;
    const [bx, by, bz] = t.b;
    pos.set(ax, ay, az);
    dir.set(bx - ax, by - ay, bz - az);
    const length = dir.length();
    if (length < 1e-4) continue;
    dir.divideScalar(length);
    quat.setFromUnitVectors(UP, dir);
    mid.set((ax + bx) / 2, (ay + by) / 2, (az + bz) / 2);
    scale.set(t.w > 0 ? t.w : 0.08, length, t.d > 0 ? t.d : 0.08);
    matrix.compose(mid, quat, scale);
    mesh.setMatrixAt(n, matrix);
    colour.copy(tint ? tint(t) : new Color(TONES[t.tone ?? ""] ?? FALLBACK));
    mesh.setColorAt(n, colour);
    n += 1;
  }
  mesh.count = n;
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  // instancing culls against the unit box at the origin: the frame is spread over the whole floor
  mesh.frustumCulled = false;
  return n ? mesh : null;
}

/** The floor's timbers as instanced meshes (frame + translucent heating plates), or null when it has none. */
export function timberMesh(floor: Floor): Group | null {
  const list = timbersOf(floor);
  if (!list.length) return null;
  const beams = list.filter((t) => t.tone !== HEATING);
  const plates = list.filter((t) => t.tone === HEATING);
  const group = new Group();
  group.name = `timbers:${floor.id}`;
  const frame = fill(beams, new MeshBasicMaterial({ color: 0xffffff }), null);
  if (frame) group.add(frame);
  if (plates.length) {
    const material = new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.4, depthWrite: false });
    const plateMesh = fill(plates, material, (t) => heatingColour(t));
    if (plateMesh) {
      plateMesh.name = "heating-plates";
      plateMeshes.push({ mesh: plateMesh, list: plates });
      group.add(plateMesh);
    }
  }
  return group.children.length ? group : null;
}

/** A short summary for tests and diagnostics. */
export function timberCount(floor: Floor): number {
  return timbersOf(floor).length;
}
