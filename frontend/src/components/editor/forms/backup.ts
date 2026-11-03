import { html, nothing, type TemplateResult } from "lit";
import { formatNumber, type I18nKey } from "../../../i18n.ts";
import { furnitureName } from "../../../furniture-names.ts";
import type { DiffEntry } from "../ops/plan-diff.ts";
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

const DIFF_ICON: Record<string, string> = { added: "＋", removed: "−", renamed: "✎", reshaped: "⤢", moved: "↔" };

/** What differs between a restore point and the plan, floor by floor. */
function renderDiff(host: EditorHost, entries: readonly DiffEntry[]): TemplateResult {
  const t = host.t;
  if (!entries.length) return html`<p class="nf-sub nf-diff">${t("version_same")}</p>`;
  const nameOf = (e: DiffEntry): string => {
    if (e.kind.startsWith("furniture")) return furnitureName(host.hass, e.name) || e.name;
    if (e.kind.startsWith("device")) return String(host.hass?.states[e.name]?.attributes.friendly_name ?? e.name);
    if (e.kind.startsWith("opening")) return t(e.name === "door" ? "opening_door" : e.name === "garage" ? "opening_garage" : "opening_window");
    return e.name;
  };
  const floors = [...new Set(entries.map((e) => e.floor))];
  return html`<div class="nf-diff">
    ${hint(t("version_diff_n", { n: entries.length }))}
    ${floors.map(
      (floor) => html`<h4 class="nf-check-floor">${floor}</h4>
        <ul class="nf-diff-list">
          ${entries
            .filter((e) => e.floor === floor)
            .map((e) => {
              const verb = e.kind.slice(e.kind.indexOf("_") + 1);
              const detail = typeof e.detail === "number" ? `${e.detail > 0 ? "+" : ""}${formatNumber(host.hass, e.detail, 1)}` : (e.detail ?? "");
              return html`<li><span aria-hidden="true">${DIFF_ICON[verb] ?? "•"}</span> ${t(`diff_${e.kind}` as I18nKey, { name: nameOf(e), detail })}</li>`;
            })}
        </ul>`,
    )}
  </div>`;
}

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
                  <span>${p.name ? html`<b>📌 ${p.name}</b> · ` : nothing}${service.timeOf(p)} <span class="nf-muted">· ${t("backup_summary", { rooms: p.rooms, furniture: p.furniture })}</span></span>
                  <span class="nf-version-actions">
                    <button class="nf-link" aria-pressed=${service.compare?.snapshot.id === p.id} @click=${() => void service.compareWith(p)}>${t("version_compare")}</button>
                    <button class="nf-link" @click=${() => service.restorePoint(p)}>${t("backup_restore")}</button>
                    ${p.name ? html`<button class="nf-link" title=${t("delete")} @click=${() => void service.deleteVersion(p)}>✕</button>` : nothing}
                  </span>
                </div>
                ${service.compare?.snapshot.id === p.id ? renderDiff(host, service.compare.entries) : nothing}`,
            )}
          </div>`;
  return html`<details class="nf-section" @toggle=${(e: Event) => (e.target as HTMLDetailsElement).open && void service.loadHistory()}>
    <summary>${t("backup")}</summary>
    <h4 class="nf-lib-head">${t("backup_history")}</h4>
    ${actions(html`<button class="nf-btn" title=${t("version_save_hint")} @click=${() => void service.saveVersion()}>📌 ${t("version_save")}</button>`)}
    ${list}
    <h4 class="nf-lib-head">${t("backup_file")}</h4>
    ${actions(
      html`<button class="nf-btn" @click=${() => service.exportPlan(false)}>${t("backup_export")}</button>`,
      html`<button class="nf-btn" title=${t("backup_export_share_hint")} @click=${() => service.exportPlan(true)}>${t("backup_export_share")}</button>`,
      html`<button class="nf-btn" title=${t("share_view_hint")} @click=${() => service.exportShareView()}>🔗 ${t("share_view")}</button>`,
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
