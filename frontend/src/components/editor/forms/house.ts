// The house-wide settings forms: favourites, own buttons, station presets, the start camera, and who is tracked by which sensor.

import { html, nothing, type TemplateResult } from "lit";
import { entityName } from "../../../devices.ts";
import type { I18nKey } from "../../../i18n.ts";
import { BUTTON_ACTIONS, uid, type ButtonAction, type CustomButton, type MediaPreset, type OwnAlert, type StartView } from "../../../model.ts";
import { entityOptions, isNumeric } from "../entities.ts";
import { actions, checkField, colorField, entityField, hint, iconField, selectField, textField } from "../fields.ts";
import type { EditorHost } from "../host.ts";
import { likelyRoomSensors, parseButtonData, startViewYaml, withPresence } from "../ops/house.ts";
import { moveWithin, orUndefined, patchAt, removeAt } from "../ops/lists.ts";

/** What can be favourites: things that run or switch. */
const FAVORITE_DOMAINS = ["scene", "script", "automation", "button", "input_button", "switch", "input_boolean", "light", "fan", "cover", "lock"];
const MAX_FAVORITES = 40;
const MAX_BUTTONS = 20;
const MAX_PRESETS = 30;
const PRESET_TYPES = ["music", "url", "playlist", "SPOTIFY", "AMAZON_MUSIC", "TUNEIN", "APPLE_MUSIC"];

export const TARGET_EXAMPLES: Record<ButtonAction, string> = { navigate: "/lovelace/rollos", more_info: "cover.wohnzimmer", service: "script.turn_on", fire_dom_event: "" };

const iconButton = (title: string, label: string, onClick: () => void, disabled = false) => html`<button class="nf-pin" title=${title} ?disabled=${disabled} @click=${onClick}>${label}</button>`;

/** Scenes, scripts and switches that show in the star menu of the 3D view, in the order given here. */
function favorites(host: EditorHost): TemplateResult {
  const list = host.doc.settings.favorites ?? [];
  const store = (next: string[]) => host.change((d) => (d.settings.favorites = orUndefined(next)));
  const options = entityOptions(host.hass, (id) => FAVORITE_DOMAINS.includes(id.split(".")[0]) && !list.includes(id));
  const row = (id: string, i: number) => html`<div class="nf-row nf-dev-row">
    <span class="nf-dev-name"><span>${entityName(host.hass, id)}</span></span>
    ${iconButton(host.t("move_up"), "↑", () => store(moveWithin(list, i, -1)), i === 0)}
    ${iconButton(host.t("move_down"), "↓", () => store(moveWithin(list, i, 1)), i === list.length - 1)}
    ${iconButton(host.t("delete"), "✕", () => store(removeAt(list, i)))}
  </div>`;
  return html`<summary>${host.t("favorites")}${list.length > 0 ? html` <span class="nf-lib-count">${list.length}</span>` : nothing}</summary>
    ${hint(host.t("favorites_hint"))} ${list.map(row)}
    ${list.length < MAX_FAVORITES
      ? html`<div class="nf-form">${entityField(host, host.t("favorites_add"), null, undefined, options, (v) => v && v !== "none" && !list.includes(v) && store([...list, v]))}</div>`
      : nothing}`;
}

/** Own warnings: a text in the warning bar while an entity is in a state (the robot's water tank is empty, the dishwasher is done). */
function ownAlerts(host: EditorHost): TemplateResult {
  const list = host.doc.settings.own_alerts ?? [];
  const store = (next: OwnAlert[]) => host.change((d) => (d.settings.own_alerts = orUndefined(next)));
  const edit = (i: number, patch: Partial<OwnAlert>) => store(patchAt(list, i, patch));
  const rooms: [string, string][] = [["", host.t("own_alert_house")], ...host.doc.floors.flatMap((f) => f.rooms.map((r): [string, string] => [r.id, `${r.name} · ${f.name}`]))];
  const card = (a: OwnAlert, i: number) => html`<div class="nf-form nf-own-button">
    ${entityField(host, host.t("own_alert_entity"), a.entity || null, undefined, entityOptions(host.hass, () => true), (v) => edit(i, { entity: v && v !== "none" ? v : "" }))}
    ${textField(host, host.t("own_alert_state"), a.state ?? "", (v) => edit(i, { state: v || null }), { placeholder: host.hass?.states[a.entity]?.state ?? "on · <20 · >80" })}
    ${textField(host, host.t("own_alert_text"), a.text, (v) => edit(i, { text: v || host.t("own_alert_new") }), { wide: true, maxlength: 120 })}
    ${selectField(host, host.t("room"), a.room_id ?? "", rooms, (v) => edit(i, { room_id: v || null }), { wide: true })}
    ${colorField(host, host.t("own_alert_color"), a.color ?? null, "#ffb547", (color) => edit(i, { color }))}
    ${selectField(host, host.t("own_alert_tap"), a.tap ?? "", [["", host.t("own_alert_tap_info")], ["toggle", host.t("own_alert_tap_toggle")], ["room", host.t("own_alert_tap_room")]], (v) => edit(i, { tap: (v || null) as OwnAlert["tap"] }))}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${() => store(removeAt(list, i))}>${host.t("delete")}</button></div>
  </div>`;
  return html`<h4>⚠ ${host.t("own_alerts")}</h4>
    ${hint(host.t("own_alerts_hint"))} ${list.map(card)}
    ${list.length < 40 ? actions(html`<button class="nf-btn" @click=${() => store([...list, { id: uid("alert"), entity: "", state: null, text: host.t("own_alert_new") }])}>+ ${host.t("own_alert_add")}</button>`) : nothing}`;
}

/** The calendars of the "Today" card: their appointments of the day show top right in the 3D view, with the bins due. */
function calendars(host: EditorHost): TemplateResult {
  const list = host.doc.settings.calendars ?? [];
  const store = (next: string[]) => host.change((d) => (d.settings.calendars = orUndefined(next)));
  const options = entityOptions(host.hass, (id) => id.startsWith("calendar.") && !list.includes(id));
  const row = (id: string, i: number) => html`<div class="nf-row nf-dev-row">
    <span class="nf-dev-name"><span>${entityName(host.hass, id)}</span></span>
    ${iconButton(host.t("delete"), "✕", () => store(removeAt(list, i)))}
  </div>`;
  return html`<h4>📅 ${host.t("today_calendars")}</h4>
    ${hint(host.t("today_calendars_hint"))} ${list.map(row)}
    ${list.length < 12 ? html`<div class="nf-form">${entityField(host, host.t("favorites_add"), null, undefined, options, (v) => v && v !== "none" && !list.includes(v) && store([...list, v]))}</div>` : nothing}`;
}

/** Stations and playlists that start on a speaker from its quick menu. */
function mediaPresets(host: EditorHost): TemplateResult {
  const list = host.doc.settings.media_presets ?? [];
  const store = (next: MediaPreset[]) => host.change((d) => (d.settings.media_presets = orUndefined(next)));
  const edit = (i: number, patch: Partial<MediaPreset>) => store(patchAt(list, i, patch));
  // the speakers of the plan: media players placed as devices or linked to furniture
  const speakers = [...new Set(host.doc.floors.flatMap((f) => [...f.placements.map((p) => p.entity_id), ...f.furniture.map((m) => m.entity ?? "")]).filter((id) => id.startsWith("media_player.")))];
  const card = (p: MediaPreset, i: number) => html`<div class="nf-form nf-own-button">
    ${textField(host, host.t("own_button_label"), p.label, (v) => edit(i, { label: v || "Radio" }), { maxlength: 60 })}
    ${textField(host, host.t("preset_type"), p.type, (v) => edit(i, { type: v || "music" }), { title: host.t("preset_type_hint") })}
    ${textField(host, host.t("preset_content"), p.content, (v) => edit(i, { content: v }), { wide: true, title: host.t("preset_content_hint"), placeholder: "https://… · spotify:playlist:… · Rock Antenne" })}
    ${speakers.length > 1
      ? html`<div class="nf-sub nf-wide">${host.t("preset_speakers")}</div>
          ${speakers.map((id) => checkField(host, entityName(host.hass, id), !!p.speakers?.includes(id), (on) => edit(i, { speakers: orUndefined(on ? [...(p.speakers ?? []), id] : (p.speakers ?? []).filter((s) => s !== id)) }), { wide: false }))}`
      : nothing}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${() => store(removeAt(list, i))}>${host.t("delete")}</button></div>
  </div>`;
  return html`<h4>${host.t("presets")}</h4>
    ${hint(host.t("presets_hint"))}
    <datalist id="nf-preset-types">${PRESET_TYPES.map((type) => html`<option value=${type}></option>`)}</datalist>
    ${list.map(card)}
    ${list.length < MAX_PRESETS ? actions(html`<button class="nf-btn" @click=${() => store([...list, { id: uid("preset"), label: "Radio", type: "music", content: "" }])}>+ ${host.t("preset_add")}</button>`) : nothing}`;
}

/** The extra data of an own button, as JSON; a text that is not an object is flagged on the field instead of being stored. */
export function dataField(host: EditorHost, button: Pick<CustomButton, "action" | "data">, onData: (data: Record<string, unknown> | null) => void): TemplateResult {
  const example = button.action === "fire_dom_event" ? '{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}' : '{"entity_id": "script.party"}';
  const onChange = (e: Event) => {
    const area = e.target as HTMLTextAreaElement;
    area.setCustomValidity("");
    const parsed = parseButtonData(area.value);
    if (parsed.ok) return onData(parsed.value);
    area.setCustomValidity(host.t("own_data_bad"));
    area.reportValidity();
  };
  return html`<label class="nf-field nf-wide" title=${host.t("own_data_hint")}
    >${host.t("own_data")}
    <textarea rows="4" spellcheck="false" placeholder=${example} .value=${button.data ? JSON.stringify(button.data, null, 1) : ""} @change=${onChange}></textarea>
  </label>`;
}

/** Own buttons of the star menu: label, icon, what they do, the target, and extra data. */
function ownButtons(host: EditorHost): TemplateResult {
  const list = host.doc.settings.buttons ?? [];
  const store = (next: CustomButton[]) => host.change((d) => (d.settings.buttons = orUndefined(next)));
  const edit = (i: number, patch: Partial<CustomButton>) => store(patchAt(list, i, patch));
  const actionChoices = BUTTON_ACTIONS.map((a): [ButtonAction, string] => [a, host.t(`own_action_${a}` as I18nKey)]);
  const card = (b: CustomButton, i: number) => html`<div class="nf-form nf-own-button">
    ${textField(host, host.t("own_button_label"), b.label, (v) => edit(i, { label: v || host.t("own_button_new") }), { maxlength: 60 })}
    ${selectField(host, host.t("own_button_action"), b.action, actionChoices, (action) => edit(i, { action }))} ${iconField(host, b.icon ?? null, (icon) => edit(i, { icon }))}
    ${b.action !== "fire_dom_event"
      ? textField(host, host.t(`own_target_${b.action}` as I18nKey), b.target ?? "", (v) => edit(i, { target: v || null }), { wide: true, placeholder: TARGET_EXAMPLES[b.action] })
      : nothing}
    ${b.action === "service" || b.action === "fire_dom_event" ? dataField(host, b, (data) => edit(i, { data })) : nothing}
    ${entityField(host, host.t("own_button_state"), b.state_entity ?? null, undefined, entityOptions(host.hass, (id) => /^(switch|light|input_boolean|binary_sensor|fan|cover|media_player|climate|lock|person|device_tracker)\./.test(id)), (v) => edit(i, { state_entity: v && v !== "none" ? v : null }))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn" ?disabled=${i === 0} @click=${() => store(moveWithin(list, i, -1))}>↑</button>
      <button class="nf-btn nf-danger" @click=${() => store(removeAt(list, i))}>${host.t("delete")}</button>
    </div>
  </div>`;
  return html`<h4>${host.t("own_buttons")}</h4>
    ${hint(host.t("own_buttons_hint"))} ${list.map(card)}
    ${list.length < MAX_BUTTONS
      ? actions(html`<button class="nf-btn" @click=${() => store([...list, { id: uid("btn"), label: host.t("own_button_new"), action: "navigate", target: null }])}>+ ${host.t("own_button_add")}</button>`)
      : nothing}`;
}

/** The favourites section with the own buttons and station presets below it (they all belong to the star menu). */
export function renderFavorites(host: EditorHost): TemplateResult {
  return html`<details class="nf-section">${favorites(host)} ${ownButtons(host)} ${ownAlerts(host)} ${calendars(host)} ${mediaPresets(host)}</details>`;
}

/** The camera the house opens with: the editor's 3D pane as it stands now, or the default. */
export function renderStartView(host: EditorHost, paneView: () => StartView | null): TemplateResult {
  const saved = host.doc.settings.start_view ?? null;
  const remember = () => {
    const view = paneView();
    if (view) host.change((d) => (d.settings.start_view = view));
  };
  return html`<details class="nf-section">
    <summary>${host.t("start_view")}</summary>
    ${hint(host.t("start_view_hint"))}
    ${actions(
      html`<button class="nf-btn nf-primary" @click=${remember}>${host.t("start_view_set")}</button>`,
      saved ? html`<button class="nf-btn" @click=${() => host.change((d) => (d.settings.start_view = null))}>${host.t("start_view_reset")}</button>` : nothing,
    )}
    ${saved ? html`${hint(host.t("start_view_saved"))} ${hint(host.t("start_view_card"))}<code class="nf-code">${startViewYaml(saved)}</code>` : nothing}
  </details>`;
}

/** Which room sensor says where each person is. */
export function renderPresence(host: EditorHost): TemplateResult {
  const persons = Object.keys(host.hass?.states ?? {})
    .filter((id) => id.startsWith("person."))
    .sort();
  const numeric = entityOptions(host.hass, isNumeric);
  const row = (person: string) =>
    entityField(
      host,
      `${entityName(host.hass, person)} · ${host.t("presence_sensor")}`,
      host.doc.presence.find((p) => p.person === person)?.sensor ?? null,
      undefined,
      likelyRoomSensors(numeric, person),
      (sensor) => host.replace({ ...structuredClone(host.doc), presence: withPresence(host.doc.presence, person, sensor) }),
    );
  return html`<details class="nf-section">
    <summary>${host.t("presence")}</summary>
    <div class="nf-form">${persons.length > 0 ? persons.map(row) : html`<p class="nf-sub nf-wide">${host.t("no_persons")}</p>`}</div>
    ${hint(host.t("presence_hint"))}
  </details>`;
}
