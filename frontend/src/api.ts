// The calls NextFloor makes to its backend over the Home Assistant websocket
// (custom_components/nextfloor/websocket.py).

import type { Building } from "./model.ts";
import type { FurniturePack } from "./packs.ts";
import type { HomeAssistant } from "./types.ts";

/** Sends one command of this integration. */
const call = <T = unknown>(hass: HomeAssistant, command: string, payload: Record<string, unknown> = {}): Promise<T> => hass.callWS<T>({ type: `nextfloor/${command}`, ...payload });

export const fetchBuilding = (hass: HomeAssistant) => call<{ building: Building; revision: number; version?: string }>(hass, "building/get");

/** Saves the plan and returns its new revision. */
export async function saveBuilding(hass: HomeAssistant, building: Building): Promise<number> {
  return (await call<{ revision: number }>(hass, "building/save", { building })).revision;
}

/** Calls back with the new revision whenever the plan is saved anywhere. Resolves to the unsubscribe function. */
export function subscribeBuilding(hass: HomeAssistant, onRevision: (revision: number) => void): Promise<() => Promise<void>> {
  return hass.connection.subscribeMessage<{ revision: number }>((event) => onRevision(event.revision), { type: "nextfloor/building/subscribe" });
}

/** A stored picture as a data string. */
export async function fetchImage(hass: HomeAssistant, imageId: string): Promise<string> {
  return (await call<{ data: string }>(hass, "image/get", { image_id: imageId })).data;
}

export async function storeImage(hass: HomeAssistant, imageId: string, data: string): Promise<void> {
  await call(hass, "image/set", { image_id: imageId, data });
}

/** An automatic copy of the plan the user can go back to. */
export interface Snapshot {
  id: string;
  revision: number;
  /** Unix time in seconds. */
  saved_at: number;
  floors: number;
  rooms: number;
  furniture: number;
  /** A named version ("before the renovation"); unnamed points come and go by themselves. */
  name?: string;
}

export async function listHistory(hass: HomeAssistant): Promise<Snapshot[]> {
  return (await call<{ snapshots: Snapshot[] }>(hass, "history/list")).snapshots;
}

/** Keeps the plan as a restore point, or as a named version; returns its id. */
export async function takeSnapshot(hass: HomeAssistant, name?: string): Promise<string> {
  return (await call<{ id: string }>(hass, "history/snapshot", name ? { name } : {})).id;
}

/** The plan of a restore point, to compare it with the current one. */
export async function getSnapshot(hass: HomeAssistant, snapshotId: string): Promise<Building> {
  return (await call<{ building: Building }>(hass, "history/get", { snapshot_id: snapshotId })).building;
}

export async function deleteSnapshot(hass: HomeAssistant, snapshotId: string): Promise<void> {
  await call(hass, "history/delete", { snapshot_id: snapshotId });
}

/** Goes back to a snapshot and returns the new revision. */
export async function restoreSnapshot(hass: HomeAssistant, snapshotId: string): Promise<number> {
  return (await call<{ revision: number }>(hass, "history/restore", { snapshot_id: snapshotId })).revision;
}

export async function listPacks(hass: HomeAssistant): Promise<FurniturePack[]> {
  return (await call<{ packs: FurniturePack[] }>(hass, "packs/list")).packs;
}

export interface ImportedPack {
  id: string;
  name: string;
  publisher: string;
  items: number;
}

/** Imports a pack file. The backend validates it and rejects with a code such as "invalid_content". */
export const importPack = (hass: HomeAssistant, text: string) => call<ImportedPack>(hass, "packs/import", { pack: text });

export async function removePack(hass: HomeAssistant, packId: string): Promise<void> {
  await call(hass, "packs/remove", { pack_id: packId });
}

/** A complete backup: the plan, the packs and every stored picture. */
export interface BackupFile {
  format: "nextfloor-backup";
  version: 1;
  exported_at?: string;
  building: Building;
  packs?: FurniturePack[];
  images?: Record<string, string>;
}

export const fetchBackup = (hass: HomeAssistant) => call<Pick<BackupFile, "format" | "version" | "building" | "packs">>(hass, "backup/export");

/** Replaces plan and packs from a backup (pictures are sent one by one afterwards). Packs failing validation are skipped. */
export const restoreBackup = (hass: HomeAssistant, building: Building, packs: FurniturePack[]) =>
  call<{ revision: number; building: Building; packs: number; skipped: { id: string; reason: string }[] }>(hass, "backup/import", { building, packs });
