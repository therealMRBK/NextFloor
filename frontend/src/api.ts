// Websocket calls to the backend (custom_components/nextfloor/websocket.py).

import type { Building } from "./model.ts";
import type { FurniturePack } from "./packs.ts";
import type { HomeAssistant } from "./types.ts";

export async function fetchBuilding(hass: HomeAssistant): Promise<{ building: Building; revision: number; version?: string }> {
  return hass.callWS({ type: "nextfloor/building/get" });
}

export async function saveBuilding(hass: HomeAssistant, building: Building): Promise<number> {
  const res = await hass.callWS<{ revision: number }>({ type: "nextfloor/building/save", building });
  return res.revision;
}

export function subscribeBuilding(hass: HomeAssistant, callback: (revision: number) => void): Promise<() => Promise<void>> {
  return hass.connection.subscribeMessage<{ revision: number }>((msg) => callback(msg.revision), {
    type: "nextfloor/building/subscribe",
  });
}

export async function fetchImage(hass: HomeAssistant, imageId: string): Promise<string> {
  const res = await hass.callWS<{ data: string }>({ type: "nextfloor/image/get", image_id: imageId });
  return res.data;
}

export async function storeImage(hass: HomeAssistant, imageId: string, data: string): Promise<void> {
  await hass.callWS({ type: "nextfloor/image/set", image_id: imageId, data });
}

export interface Snapshot {
  id: string;
  revision: number;
  /** Unix time in seconds. */
  saved_at: number;
  floors: number;
  rooms: number;
  furniture: number;
}

export async function listHistory(hass: HomeAssistant): Promise<Snapshot[]> {
  const res = await hass.callWS<{ snapshots: Snapshot[] }>({ type: "nextfloor/history/list" });
  return res.snapshots;
}

export async function takeSnapshot(hass: HomeAssistant): Promise<void> {
  await hass.callWS({ type: "nextfloor/history/snapshot" });
}

export async function restoreSnapshot(hass: HomeAssistant, snapshotId: string): Promise<number> {
  const res = await hass.callWS<{ revision: number }>({ type: "nextfloor/history/restore", snapshot_id: snapshotId });
  return res.revision;
}

export async function listPacks(hass: HomeAssistant): Promise<FurniturePack[]> {
  const res = await hass.callWS<{ packs: FurniturePack[] }>({ type: "nextfloor/packs/list" });
  return res.packs;
}

export interface ImportedPack {
  id: string;
  name: string;
  publisher: string;
  items: number;
}

/** Import a pack file; the backend checks its content (errors carry a code, e.g. "invalid_content"). */
export async function importPack(hass: HomeAssistant, text: string): Promise<ImportedPack> {
  return hass.callWS<ImportedPack>({ type: "nextfloor/packs/import", pack: text });
}

export async function removePack(hass: HomeAssistant, packId: string): Promise<void> {
  await hass.callWS({ type: "nextfloor/packs/remove", pack_id: packId });
}

/** A full backup file: the plan, the packs and every stored picture. */
export interface BackupFile {
  format: "nextfloor-backup";
  version: 1;
  exported_at?: string;
  building: Building;
  packs?: FurniturePack[];
  images?: Record<string, string>;
}

export function fetchBackup(hass: HomeAssistant): Promise<Pick<BackupFile, "format" | "version" | "building" | "packs">> {
  return hass.callWS({ type: "nextfloor/backup/export" });
}

/** Replace plan and packs from a backup (pictures follow one by one); packs that fail their check are skipped. */
export function restoreBackup(
  hass: HomeAssistant,
  building: Building,
  packs: FurniturePack[],
): Promise<{ revision: number; building: Building; packs: number; skipped: { id: string; reason: string }[] }> {
  return hass.callWS({ type: "nextfloor/backup/import", building, packs });
}
