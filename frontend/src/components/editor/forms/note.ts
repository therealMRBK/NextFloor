// The form of a note in the plan: its text, the day it is due (its pin turns orange from then on), and its spot.

import { html, nothing, type TemplateResult } from "lit";
import { NOTE_Y, noteDue, uid, type PlanNote } from "../../../model.ts";
import { storeImage } from "../../../api.ts";
import { readPictureInBrowser } from "../background-tool.ts";
import { actions, hint, numberField, textField } from "../fields.ts";
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
      ${numberField(host, t("note_height"), note.y ?? NOTE_Y, (v) => act.patch({ y: Math.max(0, Math.min(20, Math.round(v * 100) / 100)) }), 0.1, 0)}
      ${hint(t("note_height_hint"), "nf-wide")}
      ${photoFields(host, note, act)}
    </div>
    ${actions(html`<button class="nf-btn nf-danger" ?disabled=${!host.admin} @click=${() => act.remove()}>${t("delete")}</button>`)}
  </section>`;
}

/** A note's photo: uploaded and stored with the plan, or a URL; shown when the note is opened in the 3D view (#113). */
function photoFields(host: EditorHost, note: PlanNote, act: NoteActions): TemplateResult {
  const t = host.t;
  const stored = !!note.photo?.startsWith("image:");
  const upload = async (e: Event) => {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    if (!file || !host.hass) return;
    const { data } = await readPictureInBrowser(file);
    const id = uid("img");
    await storeImage(host.hass, id, data);
    act.patch({ photo: `image:${id}` });
  };
  return html`${host.admin
      ? html`<label class="nf-btn nf-wide nf-upload">📷 ${t(stored ? "picture_replace" : "note_photo_upload")}<input type="file" accept="image/*" hidden @change=${upload} /></label>`
      : nothing}
    ${stored
      ? html`<p class="nf-sub nf-wide">${t("picture_stored")} <button class="nf-btn nf-field-btn" ?disabled=${!host.admin} @click=${() => act.patch({ photo: null })}>${t("delete")}</button></p>`
      : textField(host, t("picture_url"), note.photo ?? "", (v) => act.patch({ photo: v.trim() || null }), { wide: true, placeholder: "/local/valve.jpg" })}
    ${hint(t("note_photo_hint"), "nf-wide")}`;
}
