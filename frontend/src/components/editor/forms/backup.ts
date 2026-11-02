import { html, type TemplateResult } from "lit";
import type { BackupService } from "../backup.ts";
import { actions, hint } from "../fields.ts";
import type { EditorHost } from "../host.ts";

/** A button that opens a file chooser and hands the chosen file on; the input is emptied so the same file can be chosen again. */
const filePicker = (label: string, onFile: (file: File | undefined) => void, accept = "application/json,.json") => html`<label class="nf-btn nf-upload"
  >${label}<input
    type="file"
    accept=${accept}
    @change=${(e: Event) => {
      const input = e.target as HTMLInputElement;
      const file = input.files?.[0];
      input.value = "";
      onFile(file);
    }}
  />
</label>`;

/** Restore points, a plan file, and the full backup. The restore points load when the section is opened. */
export function renderBackup(host: EditorHost, service: BackupService): TemplateResult {
  const t = host.t;
  const points = service.history;
  const list =
    points === null
      ? hint(t("loading"))
      : points.length === 0
        ? hint(t("backup_none"))
        : html`<div class="nf-room-list">
            ${points.map(
              (p) => html`<div class="nf-row nf-dev-row">
                <span>${service.timeOf(p)} <span class="nf-muted">· ${t("backup_summary", { rooms: p.rooms, furniture: p.furniture })}</span></span>
                <button class="nf-link" @click=${() => service.restorePoint(p)}>${t("backup_restore")}</button>
              </div>`,
            )}
          </div>`;
  return html`<details class="nf-section" @toggle=${(e: Event) => (e.target as HTMLDetailsElement).open && void service.loadHistory()}>
    <summary>${t("backup")}</summary>
    <h4 class="nf-lib-head">${t("backup_history")}</h4>
    ${list}
    <h4 class="nf-lib-head">${t("backup_file")}</h4>
    ${actions(
      html`<button class="nf-btn" @click=${() => service.exportPlan(false)}>${t("backup_export")}</button>`,
      html`<button class="nf-btn" title=${t("backup_export_share_hint")} @click=${() => service.exportPlan(true)}>${t("backup_export_share")}</button>`,
      filePicker(t("backup_import"), (file) => void service.importPlan(file), "application/json,.json,.sh3d,.dxf"),
    )}
    ${hint(t("backup_hint"))} ${hint(t("import_other_hint"))}
    <h4 class="nf-lib-head">${t("backup_full")}</h4>
    ${actions(
      html`<button class="nf-btn" ?disabled=${service.busy} @click=${() => service.exportFull()}>${service.busy ? "…" : t("backup_full_export")}</button>`,
      filePicker(t("backup_full_import"), (file) => void service.importFull(file)),
    )}
    ${hint(t("backup_full_hint"))}
  </details>`;
}
