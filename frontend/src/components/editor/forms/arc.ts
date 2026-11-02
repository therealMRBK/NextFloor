// The row that bends a wall into an arc: how far it bulges, and the buttons to bend it or leave it straight.

import { html, nothing, type TemplateResult } from "lit";
import { numberField } from "../fields.ts";
import type { EditorHost } from "../host.ts";

/** The arc being set up for one wall (`key` names the wall), with the typed bulge and why the last try did not bend it. */
export interface ArcEdit {
  key: string;
  bulge: number;
  error: string | null;
}

export interface ArcActions {
  edit: ArcEdit | null;
  setEdit(edit: ArcEdit | null): void;
  /** Bends the wall named by the edit's key by the edit's bulge. */
  apply(edit: ArcEdit): void;
}

/** The ◠ button that opens the arc row of a wall, or closes it again. */
export function arcButton(host: EditorHost, key: string, actions: ArcActions): TemplateResult | typeof nothing {
  if (!host.admin) return nothing;
  const open = actions.edit?.key === key;
  return html`<button class="nf-btn" aria-pressed=${open} title=${host.t("arc_hint")} @click=${() => actions.setEdit(open ? null : { key, bulge: 0.5, error: null })}>
    ◠ ${host.t("arc")}
  </button>`;
}

/** The arc row of a wall while it is open: the bulge and the button that bends the wall. */
export function arcRow(host: EditorHost, key: string, actions: ArcActions): TemplateResult | typeof nothing {
  const edit = actions.edit;
  if (!host.admin || edit?.key !== key) return nothing;
  const t = host.t;
  return html`<span class="nf-wide nf-split-row" title=${t("arc_bulge_hint")}
      >${numberField(host, t("arc_bulge"), edit.bulge, (bulge) => actions.setEdit({ ...edit, bulge, error: null }), 0.05)}
      <button class="nf-btn nf-primary" ?disabled=${Math.abs(edit.bulge) < 0.01} @click=${() => actions.apply(edit)}>${t("arc_apply")}</button></span
    >
    ${edit.error ? html`<p class="nf-sub nf-wide nf-notice">${edit.error}</p>` : nothing}`;
}
