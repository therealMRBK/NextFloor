// The house-wide settings forms: favourites, own buttons, station presets, the start camera, and who is tracked by which sensor.

import { html, nothing, type TemplateResult } from "lit";
import { entityName, outsideEntities } from "../../../devices.ts";
import type { I18nKey } from "../../../i18n.ts";
import { BUTTON_ACTIONS, uid, type ButtonAction, type Circuit, type CustomButton, type MediaPreset, type OwnAlert, type StartView } from "../../../model.ts";
import { entityOptions, isNumeric } from "../entities.ts";
import { actions, checkField, colorField, entityField, hint, iconField, selectField, textField } from "../fields.ts";
import type { EditorHost } from "../host.ts";
import { likelyRoomSensors, parseButtonData, patchPresence, startViewYaml } from "../ops/house.ts";
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
  const floors = host.doc.floors;
  const only = host.doc.settings.favorite_floors ?? {};
  const options = entityOptions(host.hass, (id) => FAVORITE_DOMAINS.includes(id.split(".")[0]) && !list.includes(id));
  const row = (id: string, i: number) => html`<div class="nf-row nf-dev-row">
    <span class="nf-dev-name"><span>${entityName(host.hass, id)}</span></span>
    ${floors.length > 1
      ? html`<select title=${host.t("favorite_floor")} .value=${only[id] ?? ""} @change=${(e: Event) => {
          const v = (e.target as HTMLSelectElement).value;
          const next = { ...only };
          if (v) next[id] = v;
          else delete next[id];
          host.change((d) => (d.settings.favorite_floors = Object.keys(next).length ? next : undefined));
        }}>
          <option value="">${host.t("favorite_all_floors")}</option>
          ${floors.map((f) => html`<option value=${f.id} ?selected=${only[id] === f.id}>${f.name}</option>`)}
        </select>`
      : nothing}
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

/** Devices the Outside panel leaves out (they stay where they are in the plan). */
function outsideHidden(host: EditorHost, paneView?: () => StartView | null): TemplateResult {
  const list = host.doc.settings.outside_hidden ?? [];
  const store = (next: string[]) => host.change((d) => (d.settings.outside_hidden = orUndefined(next)));
  // worked out once: asking for every entity would run the whole search once per entity of Home Assistant (#101)
  const outside = new Set(host.hass ? outsideEntities(host.hass, host.doc.floors) : []);
  const options = entityOptions(host.hass, (id) => !list.includes(id) && outside.has(id));
  return html`<summary>${host.t("outside_hidden")}${list.length > 0 ? html` <span class="nf-lib-count">${list.length}</span>` : nothing}</summary>
    ${hint(host.t("outside_hidden_hint"))}
    ${list.map((id, i) => html`<div class="nf-row nf-dev-row"><span class="nf-dev-name"><span>${entityName(host.hass, id)}</span></span>${iconButton(host.t("delete"), "✕", () => store(removeAt(list, i)))}</div>`)}
    <div class="nf-form">${entityField(host, host.t("outside_hidden_add"), null, undefined, options, (v) => v && v !== "none" && !list.includes(v) && store([...list, v]))}</div>
    ${paneView ? outsideView(host, paneView) : nothing}`;
}

/** The camera Outside opens with: the editor's 3D pane as it stands now (#83). */
function outsideView(host: EditorHost, paneView: () => StartView | null): TemplateResult {
  const saved = host.doc.settings.outside_view ?? null;
  const remember = () => {
    const view = paneView();
    if (view) host.change((d) => (d.settings.outside_view = view));
  };
  return html`${hint(host.t("outside_view_hint"))}
    ${actions(
      html`<button class="nf-btn" @click=${remember}>${host.t("outside_view_set")}</button>`,
      saved ? html`<button class="nf-btn" @click=${() => host.change((d) => (d.settings.outside_view = null))}>${host.t("outside_view_reset")}</button>` : nothing,
    )}`;
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

/** The fuse box: circuits by name, each with the rooms it feeds (chips to add and remove). */
function circuits(host: EditorHost): TemplateResult {
  const list = host.doc.settings.circuits ?? [];
  const store = (next: Circuit[]) => host.change((d) => (d.settings.circuits = orUndefined(next)));
  const edit = (i: number, patch: Partial<Circuit>) => store(patchAt(list, i, patch));
  const rooms = host.doc.floors.flatMap((f) => f.rooms.map((r) => ({ id: r.id, label: host.doc.floors.length > 1 ? `${r.name} · ${f.name}` : r.name })));
  const nameOf = (id: string) => rooms.find((r) => r.id === id)?.label ?? id;
  const card = (c: Circuit, i: number) => html`<div class="nf-form nf-own-button">
    ${textField(host, host.t("circuit_name"), c.name, (v) => edit(i, { name: v || host.t("circuit_new") }), { wide: true, maxlength: 80 })}
    <div class="nf-wide">${c.rooms.map((id) => html`<span class="nf-chip">${nameOf(id)} <button class="nf-btn nf-field-btn" title=${host.t("delete")} @click=${() => edit(i, { rooms: c.rooms.filter((r) => r !== id) })}>✕</button></span>`)}</div>
    ${selectField(host, host.t("circuit_add_room"), "", [["", "–"], ...rooms.filter((r) => !c.rooms.includes(r.id)).map((r): [string, string] => [r.id, r.label])], (v) => v && edit(i, { rooms: [...c.rooms, v] }), { wide: true })}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${() => store(removeAt(list, i))}>${host.t("delete")}</button></div>
  </div>`;
  return html`<h4>🔌 ${host.t("circuits")}</h4>
    ${hint(host.t("circuits_hint"))} ${list.map(card)}
    ${list.length < 120 ? actions(html`<button class="nf-btn" @click=${() => store([...list, { id: uid("circuit"), name: host.t("circuit_new"), rooms: [] }])}>+ ${host.t("circuit_add")}</button>`) : nothing}`;
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

/** Which facts the room panel shows in its header. */
function roomFacts(host: EditorHost): TemplateResult {
  const off = host.doc.settings.room_facts_off ?? [];
  const facts = (["sun", "comfort", "air", "circuits"] as const).map((k) =>
    checkField(host, host.t(`room_fact_${k}` as I18nKey), !off.includes(k), (on) => host.change((d) => (d.settings.room_facts_off = orUndefined(on ? off.filter((x) => x !== k) : [...off, k])))),
  );
  return html`<h4>${host.t("room_facts")}</h4><div class="nf-form">${facts}</div>`;
}

/** The favourites section with the own buttons and station presets below it (they all belong to the star menu). */
export function renderFavorites(host: EditorHost, outsidePaneView?: () => StartView | null): TemplateResult {
  return html`<details class="nf-section">${favorites(host)} ${outsideHidden(host, outsidePaneView)} ${ownButtons(host)} ${ownAlerts(host)} ${circuits(host)} ${calendars(host)} ${mediaPresets(host)} ${roomFacts(host)}</details>`;
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
  const linked = host.doc.presence.map((l) => l.person);
  const persons = [...new Set([...Object.keys(host.hass?.states ?? {}).filter((id) => id.startsWith("person.")).sort(), ...linked])];
  const numeric = entityOptions(host.hass, isNumeric);
  const rooms = host.doc.floors.flatMap((f) => f.rooms.map((r) => ({ id: r.id, label: host.doc.floors.length > 1 ? `${f.name} · ${r.name}` : r.name })));
  const change = (person: string, patch: { sensor?: string | null; room?: string | null }) =>
    host.replace({ ...structuredClone(host.doc), presence: patchPresence(host.doc.presence, person, patch) });
  const row = (person: string) => {
    const link = host.doc.presence.find((p) => p.person === person);
    const extra = !person.startsWith("person.");
    return html`${entityField(host, `${entityName(host.hass, person)} · ${host.t("presence_sensor")}`, link?.sensor ?? null, undefined, likelyRoomSensors(numeric, person), (sensor) => change(person, { sensor }))}
      <label class="nf-field">${host.t("presence_room")}
        <select ?disabled=${!host.admin} .value=${link?.room ?? ""} @change=${(e: Event) => change(person, { room: (e.target as HTMLSelectElement).value || null })}>
          <option value="">${host.t("presence_room_none")}</option>
          ${rooms.map((r) => html`<option value=${r.id} ?selected=${link?.room === r.id}>${r.label}</option>`)}
        </select>
      </label>
      ${extra ? html`<button class="nf-btn" ?disabled=${!host.admin} @click=${() => host.replace({ ...structuredClone(host.doc), presence: host.doc.presence.filter((l) => l.person !== person) })}>${host.t("delete")}</button>` : nothing}`;
  };
  const more = entityOptions(host.hass, (id) => /^(input_boolean|binary_sensor|device_tracker)\./.test(id) && !persons.includes(id));
  return html`<details class="nf-section">
    <summary>${host.t("presence")}</summary>
    <div class="nf-form">${persons.length > 0 ? persons.map(row) : html`<p class="nf-sub nf-wide">${host.t("no_persons")}</p>`}</div>
    <div class="nf-form">${entityField(host, host.t("presence_add"), null, undefined, more, (v) => v && v !== "none" && host.replace({ ...structuredClone(host.doc), presence: [...host.doc.presence, { person: v, sensor: null }] }))}</div>
    ${hint(host.t("presence_hint"))}
  </details>`;
}

/** Locating Bluetooth tags by room: pick a tag, walk through the rooms, record them (the element does the work). */
export function renderBleLocate(host: EditorHost, doc: unknown): TemplateResult {
  return html`<details class="nf-section">
    <summary>${host.t("ble")}</summary>
    ${hint(host.t("ble_hint"))}
    <nf-ble-locate .host=${host} .doc=${doc}></nf-ble-locate>
  </details>`;
}
