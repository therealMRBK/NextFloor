// The backup side of the editor: restore points of the plan, a file with the plan alone, and a full backup with pictures and packs.
// Everything the browser or the backend provides comes in through `deps`, so the flows can be tested without either.

import { deleteSnapshot, fetchBackup, fetchImage, getSnapshot, listHistory, restoreBackup, restoreSnapshot, storeImage, takeSnapshot, type BackupFile, type Snapshot } from "../../api.ts";
import { diffBuildings, type DiffEntry } from "./ops/plan-diff.ts";
import type { I18nKey } from "../../i18n.ts";
import { normalizeBuilding, type Building } from "../../model.ts";
import { importSweetHome } from "../../import/sweethome.ts";
import { importDxf } from "../../import/dxf.ts";
import { download, exportFile, parseExport, shareViewHtml, storedImageIds } from "../../transfer.ts";
import { getPacks } from "../../packs.ts";
import type { HomeAssistant } from "../../types.ts";

export interface BackupDeps {
  api: {
    listHistory: typeof listHistory;
    restoreSnapshot: typeof restoreSnapshot;
    takeSnapshot: typeof takeSnapshot;
    getSnapshot?: typeof getSnapshot;
    deleteSnapshot?: typeof deleteSnapshot;
    fetchBackup: typeof fetchBackup;
    restoreBackup: typeof restoreBackup;
    fetchImage: typeof fetchImage;
    storeImage: typeof storeImage;
  };
  alert(text: string): void;
  confirm(text: string): boolean;
  prompt?(text: string): string | null;
  download(filename: string, text: string, type?: string): void;
  today(): string;
}

export const browserDeps: BackupDeps = {
  api: { listHistory, restoreSnapshot, takeSnapshot, getSnapshot, deleteSnapshot, fetchBackup, restoreBackup, fetchImage, storeImage },
  alert: (text) => alert(text),
  confirm: (text) => confirm(text),
  prompt: (text) => prompt(text),
  download,
  today: () => new Date().toISOString().slice(0, 10),
};

/** What the backup flows need from the editor. */
export interface BackupHost {
  readonly hass: HomeAssistant | undefined;
  readonly doc: Building;
  t(key: I18nKey, vars?: Record<string, string | number>): string;
  /** A restored or imported plan replaces the current one. */
  adopt(building: Building): void;
  /** A line shown to the user once a flow is done. */
  say(text: string): void;
  /** The state of the section changed, so it should draw again. */
  refresh(): void;
  /** Backed-up packs are back. */
  packsChanged(): void;
}

const errorText = (err: unknown): string => String((err as { message?: string } | null)?.message ?? err);

export class BackupService {
  private readonly host: BackupHost;
  private readonly deps: BackupDeps;
  /** The restore points, or null while they are not loaded. */
  history: Snapshot[] | null = null;
  busy = false;
  /** An older state compared with the plan: what differs, or null while nothing is compared. */
  compare: { snapshot: Snapshot; entries: DiffEntry[] } | null = null;

  constructor(host: BackupHost, deps: BackupDeps = browserDeps) {
    this.host = host;
    this.deps = deps;
  }

  async loadHistory(): Promise<void> {
    const { hass } = this.host;
    if (!hass) return;
    this.history = await this.deps.api.listHistory(hass).catch(() => []);
    this.host.refresh();
  }

  timeOf(snapshot: Snapshot): string {
    return new Date(snapshot.saved_at * 1000).toLocaleString(this.host.hass?.language, { dateStyle: "short", timeStyle: "short" });
  }

  async restorePoint(snapshot: Snapshot): Promise<void> {
    const { hass, t } = this.host;
    if (!hass || !this.deps.confirm(t("backup_restore_confirm", { time: this.timeOf(snapshot) }))) return;
    await this.deps.api.restoreSnapshot(hass, snapshot.id);
    this.host.say(t("backup_restored"));
    await this.loadHistory();
  }

  /** Keeps the plan as it is now under a name of its own: a version that stays when the automatic points go. */
  async saveVersion(): Promise<void> {
    const { hass, t } = this.host;
    const name = hass ? this.deps.prompt?.(t("version_name_prompt"))?.trim() : null;
    if (!hass || !name) return;
    await this.deps.api.takeSnapshot(hass, name.slice(0, 60));
    this.host.say(t("version_saved", { name }));
    await this.loadHistory();
  }

  /** Compares an older state with the plan as it is in the editor (unsaved changes included). */
  async compareWith(snapshot: Snapshot): Promise<void> {
    const { hass } = this.host;
    const get = this.deps.api.getSnapshot;
    if (!hass || !get) return;
    if (this.compare?.snapshot.id === snapshot.id) {
      this.compare = null;
      return this.host.refresh();
    }
    const older = normalizeBuilding(await get(hass, snapshot.id));
    this.compare = { snapshot, entries: diffBuildings(older, this.host.doc) };
    this.host.refresh();
  }

  async deleteVersion(snapshot: Snapshot): Promise<void> {
    const { hass, t } = this.host;
    const remove = this.deps.api.deleteSnapshot;
    if (!hass || !remove || !this.deps.confirm(t("version_delete_confirm", { name: snapshot.name ?? this.timeOf(snapshot) }))) return;
    await remove(hass, snapshot.id);
    if (this.compare?.snapshot.id === snapshot.id) this.compare = null;
    await this.loadHistory();
  }

  /** The house as a page that opens in any browser (through the online demo), without the entities: to show it to someone. */
  exportShareView(): void {
    const t = this.host.t;
    const html = shareViewHtml(this.host.doc, getPacks(), t("share_view_title"), t("share_view_needs_js"));
    this.deps.download(`nextfloor-${t("share_view_file")}-${this.deps.today()}.html`, html, "text/html");
    this.host.say(t("share_view_done"));
  }

  /** Saves the plan alone as a file; a shareable one has the entities taken out. */
  exportPlan(shareable: boolean): void {
    const kind = this.host.t(shareable ? "export_name_template" : "export_name_backup");
    this.deps.download(`nextfloor-${kind}-${this.deps.today()}.json`, JSON.stringify(exportFile(this.host.doc, shareable), null, 2));
  }

  /** Reads a plan file chosen by the user. The current plan stays available as a restore point. */
  async importPlan(file: File | undefined): Promise<void> {
    const { hass, t } = this.host;
    if (!file || !hass) return;
    let building: Building;
    let question = t("backup_import_confirm");
    try {
      if (/\.sh3d$/i.test(file.name)) {
        // a plan from Sweet Home 3D: rooms, doors, windows and free walls; its furniture stays behind
        const result = await importSweetHome(new Uint8Array(await file.arrayBuffer()));
        building = result.building;
        question = `${t("import_sh3d_found", { ...result.report })}\n\n${question}`;
      } else if (/\.dxf$/i.test(file.name)) {
        // a CAD drawing: closed polylines become rooms, lines free walls
        const result = importDxf(await file.text());
        building = result.building;
        question = `${t("import_dxf_found", { rooms: result.report.rooms, walls: result.report.walls })}\n\n${question}`;
      } else building = parseExport(await file.text());
    } catch (err) {
      const code = (err as Error).message;
      const known: Record<string, string> = { not_json: "import_error_not_json", not_plan: "import_error_not_plan", not_zip: "import_error_sh3d", sh3d_no_xml: "import_error_sh3d", sh3d_empty: "import_error_sh3d_empty", dxf_empty: "import_error_dxf_empty" };
      this.deps.alert(known[code] ? t(known[code] as I18nKey) : t("backup_import_error", { error: code }));
      return;
    }
    if (!this.deps.confirm(question)) return;
    await this.deps.api.takeSnapshot(hass).catch(() => undefined);
    this.host.adopt(building);
    this.host.say(t("backup_imported"));
  }

  /** Everything in one file: the plan, every stored picture, and the packs. */
  async exportFull(): Promise<void> {
    const { hass, t } = this.host;
    if (!hass) return;
    this.busy = true;
    this.host.refresh();
    try {
      const base = await this.deps.api.fetchBackup(hass);
      const images: Record<string, string> = {};
      for (const id of storedImageIds(base.building)) {
        // a picture that cannot be read is left out
        await this.deps.api.fetchImage(hass, id).then((data) => (images[id] = data), () => undefined);
      }
      this.deps.download(`nextfloor-${t("export_name_full")}-${this.deps.today()}.json`, JSON.stringify({ ...base, exported_at: new Date().toISOString(), images }));
    } catch (err) {
      this.deps.alert(t("backup_import_error", { error: errorText(err) }));
    } finally {
      this.busy = false;
      this.host.refresh();
    }
  }

  async importFull(file: File | undefined): Promise<void> {
    const { hass, t } = this.host;
    if (!file || !hass) return;
    let data: BackupFile;
    try {
      data = JSON.parse(await file.text()) as BackupFile;
    } catch {
      this.deps.alert(t("import_error_not_json"));
      return;
    }
    if (data?.format !== "nextfloor-backup" || !data.building) {
      this.deps.alert(t("backup_full_not_backup"));
      return;
    }
    if (!this.deps.confirm(t("backup_full_confirm"))) return;
    this.busy = true;
    this.host.refresh();
    try {
      const result = await this.deps.api.restoreBackup(hass, data.building, data.packs ?? []);
      let pictures = 0;
      for (const [id, picture] of Object.entries(data.images ?? {})) {
        // a picture that cannot be stored is skipped
        await this.deps.api.storeImage(hass, id, picture).then(() => pictures++, () => undefined);
      }
      this.host.adopt(normalizeBuilding(result.building));
      this.host.packsChanged();
      const skipped = result.skipped.length > 0 ? ` ${t("backup_full_skipped", { packs: result.skipped.map((s) => s.id).join(", ") })}` : "";
      this.host.say(t("backup_full_restored", { packs: result.packs, pictures }) + skipped);
    } catch (err) {
      const { code, message } = (err ?? {}) as { code?: string; message?: string };
      this.deps.alert(t("backup_import_error", { error: message ?? code ?? String(err) }));
    } finally {
      this.busy = false;
      this.host.refresh();
    }
  }
}
