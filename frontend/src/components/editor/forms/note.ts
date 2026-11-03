// The form of a note in the plan: its text, the day it is due (its pin turns orange from then on), and its spot.

import { html, type TemplateResult } from "lit";
import { noteDue, type PlanNote } from "../../../model.ts";
import { actions, hint, numberField } from "../fields.ts";
import type { EditorHost } from "../host.ts";

export interface NoteActions {
  patch(patch: Partial<PlanNote>): void;
  remove(): void;
}

export function renderNoteForm(host: EditorHost, note: PlanNote, act: NoteActions): TemplateResult {
  const t = host.t;
  return html`<section>
    <h3>✎ ${t("note")}</h3>
    <div class="nf-form">
      <label class="nf-field nf-wide"
        >${t("note_text")}
        <textarea rows="4" maxlength="500" .value=${note.text} ?disabled=${!host.admin} placeholder=${t("note_placeholder")} @change=${(e: Event) => act.patch({ text: (e.target as HTMLTextAreaElement).value.trim() })}></textarea>
      </label>
      <label class="nf-field"
        >${t("note_due")}
        <input type="date" .value=${note.due ?? ""} ?disabled=${!host.admin} @change=${(e: Event) => act.patch({ due: (e.target as HTMLInputElement).value || null })} />
      </label>
      ${noteDue(note) ? html`<p class="nf-sub nf-warn nf-wide">${t("note_is_due")}</p>` : hint(t("note_due_hint"), "nf-wide")}
      ${numberField(host, t("x"), note.x, (v) => act.patch({ x: v }))} ${numberField(host, t("z"), note.z, (v) => act.patch({ z: v }))}
    </div>
    ${actions(html`<button class="nf-btn nf-danger" ?disabled=${!host.admin} @click=${() => act.remove()}>${t("delete")}</button>`)}
  </section>`;
}
