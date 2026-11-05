// The form of a door, window or garage door: its kind and size, how it looks, and the entities that make it live (blind, contacts,
// handle sensors, tilt).

import { html, nothing, type TemplateResult } from "lit";
import { entityName, openingEntities, windowPosition } from "../../../devices.ts";
import type { I18nKey } from "../../../i18n.ts";
import { DOOR_STYLES, OPENING_PRESETS, openingPreset, openingStyle, WINDOW_OPENINGS, WINDOW_STYLES, type Opening, type OpeningPreset, type OpeningStyle } from "../../../model.ts";
import { entityOptions, isNumeric } from "../entities.ts";
import { checkField, entityField, hint, numberField, selectField } from "../fields.ts";
import type { EditorHost } from "../host.ts";

/** What the form makes the editor do, and what it asks of it. */
export interface OpeningActions {
  update(patch: Partial<Opening>): void;
  setPreset(opening: Opening, preset: OpeningPreset): void;
  remove(): void;
  /** Whether the opening is in an outer wall, which decides the automatic style of a door. */
  isExterior(opening: Opening): boolean;
  /** Whether a window's sill lies below the ground (a cellar window, which gets a light well). */
  isBelowGround?(opening: Opening): boolean;
  lockButton: TemplateResult | typeof nothing;
}

type SensorKind = NonNullable<Opening["sensor"]>;
const CONTACT_CLASSES = ["door", "window", "opening", "garage_door"];
const HANDLE_NAME = /griff|handle|fenster|window|drehgriff/i;

/** The opening angles a door offers (null = the usual swing), with an angle set by hand or in an imported plan kept in the list. */
function doorAngles(current: number | null | undefined): (number | null)[] {
  const angles: (number | null)[] = [null, 15, 30, 45, 60, 90, 120, 180];
  if (current && !angles.includes(current)) angles.push(current);
  return angles.sort((a, b) => (a ?? 0) - (b ?? 0));
}

/** The entity lists the form offers, worked out once per draw. */
function choices(host: EditorHost) {
  const { hass } = host;
  const stateOf = (id: string) => hass?.states[id];
  const deviceClass = (id: string) => stateOf(id)?.attributes.device_class as string | undefined;
  const isContact = (id: string) => id.startsWith("binary_sensor.") && CONTACT_CLASSES.includes(deviceClass(id) ?? "");
  return {
    covers: entityOptions(hass, (id) => id.startsWith("cover.")),
    // numbers that can report where a blind is
    positions: entityOptions(hass, (id) => /^(sensor|number|input_number)\./.test(id) && Number.isFinite(Number(stateOf(id)?.state))),
    // plain contacts, and handle sensors with three states (open, tilted, closed)
    contacts: entityOptions(hass, (id) => isContact(id) || (isNumeric(id) && windowPosition(stateOf(id)) !== null)),
    plainContacts: entityOptions(hass, isContact),
    // handle sensors say open, tilted or closed as text, or in a window_state attribute, or are named like a handle
    handles: entityOptions(hass, (id) => {
      if (id.startsWith("binary_sensor.")) return typeof stateOf(id)?.attributes.window_state === "string";
      return isNumeric(id) && (windowPosition(stateOf(id)) !== null || HANDLE_NAME.test(`${id} ${entityName(hass, id)}`));
    }),
    numbers: entityOptions(hass, isNumeric),
    locks: entityOptions(hass, (id) => id.startsWith("lock.")),
  };
}

/** What "automatic" would pick for a link of the opening: the opening is looked at again with that link cleared. */
function automaticLink(host: EditorHost, opening: Opening, key: "cover" | "contact"): string | null {
  if (!host.hass) return null;
  const probe = structuredClone(host.doc.floors);
  for (const floor of probe) for (const o of floor.openings) if (o.id === opening.id) o[key] = null;
  return openingEntities(host.hass, probe).get(opening.id)?.[key] ?? null;
}

const noneAsNull = (v: string | null) => (v === "none" ? null : v);

/** The style of a door or window: automatic (by wall), or one of the built-in looks. */
function styleField(host: EditorHost, o: Opening, actions: OpeningActions): TemplateResult {
  const styles: readonly OpeningStyle[] = o.type === "door" ? DOOR_STYLES : WINDOW_STYLES;
  const automatic = openingStyle({ type: o.type, style: null }, actions.isExterior(o));
  const current = o.style && (styles as readonly string[]).includes(o.style) ? o.style : "";
  const options: [string, string][] = [["", host.t("style_auto", { style: host.t(`style_${automatic}` as I18nKey) })], ...styles.map((s): [string, string] => [s, host.t(`style_${s}` as I18nKey)])];
  return selectField(host, host.t("opening_style"), current, options, (v) => actions.update({ style: (v || null) as OpeningStyle | null }), { wide: true });
}

/** A width in metres for a sidelight, empty for "as wide as it comes". */
function sidelightWidth(host: EditorHost, o: Opening, key: "sidelight_width" | "sidelight_width2", label: I18nKey, actions: OpeningActions): TemplateResult {
  return html`<label class="nf-field"
    >${host.t(label)}
    <input
      type="number"
      step="0.05"
      min="0.1"
      max="3"
      placeholder=${host.t("sidelight_auto")}
      .value=${o[key] == null ? "" : String(o[key])}
      ?disabled=${!host.admin}
      @change=${(e: Event) => {
        const v = Number((e.target as HTMLInputElement).value);
        actions.update({ [key]: Number.isFinite(v) && v > 0 ? Math.min(3, Math.max(0.1, Math.round(v * 100) / 100)) : null });
      }}
    />
  </label>`;
}

/** Front doors with sidelights: on which side the single one sits, and the widths. */
function sidelightFields(host: EditorHost, o: Opening, actions: OpeningActions): TemplateResult | typeof nothing {
  if (o.type !== "door") return nothing;
  const style = openingStyle(o, actions.isExterior(o));
  if (style === "sidelight") {
    return html`${checkField(host, host.t("sidelight_hinge"), !!o.sidelight_hinge, (on) => actions.update({ sidelight_hinge: on }), { wide: false, title: host.t("sidelight_hinge_hint") })}
      ${sidelightWidth(host, o, "sidelight_width", "sidelight_width", actions)}`;
  }
  if (style === "sidelights") return html`${sidelightWidth(host, o, "sidelight_width", "sidelight_width_left", actions)} ${sidelightWidth(host, o, "sidelight_width2", "sidelight_width_right", actions)}`;
  return nothing;
}

/**
 * A glass wall: how many panes its mullions make. Empty keeps the old spacing of about 0.9 m, 0 gives one single pane for
 * the full-width glazing modern houses have.
 */
function glassWallPanes(host: EditorHost, o: Opening, actions: OpeningActions): TemplateResult | typeof nothing {
  if (o.type !== "window" || openingStyle(o, actions.isExterior(o)) !== "glass_wall") return nothing;
  return html`<label class="nf-field"
      >${host.t("glass_panes")}
      <input
        type="number"
        step="1"
        min="0"
        max="40"
        placeholder=${host.t("glass_panes_auto")}
        .value=${o.panes == null ? "" : String(o.panes)}
        ?disabled=${!host.admin}
        @change=${(e: Event) => {
          const raw = (e.target as HTMLInputElement).value.trim();
          const v = Number(raw);
          actions.update({ panes: raw === "" || !Number.isFinite(v) ? null : Math.min(40, Math.max(0, Math.round(v))) });
        }}
      />
    </label>
    ${hint(host.t("glass_panes_hint"), "nf-wide")}`;
}

/** The sensors of one sash of a window: what kind they are, the entity, the tilt, and for the main sash the tilt angle. */
function sashSensors(host: EditorHost, o: Opening, sash: 1 | 2, actions: OpeningActions, lists: ReturnType<typeof choices>): TemplateResult {
  const main = sash === 1;
  const t = host.t;
  const tilt = main ? o.tilt : (o.tilt2 ?? null);
  const contact = main ? o.contact : o.contact2;
  const kind: SensorKind = (main ? o.sensor : o.sensor2) ?? (tilt && tilt !== "none" ? "contact_tilt" : "contact");
  const kinds = (["contact", "handle", "contact_tilt"] as const).map((k): [SensorKind, string] => [k, t(`sensor_kind_${k}`)]);
  const changeKind = (next: SensorKind) => {
    const clearTilt = next === "contact_tilt" ? {} : main ? { tilt: null } : { tilt2: null };
    actions.update({ ...(main ? { sensor: next } : { sensor2: next }), ...clearTilt });
  };
  const setContact = (v: string | null) => actions.update(main ? { contact: v } : { contact2: noneAsNull(v) });
  const tiltAngle = o.tilt_angle && o.tilt_angle !== "none";
  return html`${selectField(host, t("sensor_kind"), kind, kinds, changeKind, { wide: true })}
    ${kind === "handle"
      ? entityField(host, t("handle_entity"), contact, undefined, lists.handles, (v) => setContact(v === "none" ? (main ? "none" : null) : v))
      : entityField(host, t("contact_entity"), contact, main ? automaticLink(host, o, "contact") : undefined, lists.plainContacts, setContact)}
    ${kind === "contact_tilt" ? entityField(host, t("tilt_entity"), tilt, undefined, lists.contacts, (v) => actions.update(main ? { tilt: noneAsNull(v) } : { tilt2: noneAsNull(v) })) : nothing}
    ${main
      ? html`${entityField(host, t("tilt_angle_entity"), o.tilt_angle ?? null, undefined, lists.numbers, (v) => actions.update({ tilt_angle: noneAsNull(v) }))}
        ${tiltAngle
          ? html`${numberField(host, t("tilt_angle_max"), o.tilt_max ?? 15, (v) => actions.update({ tilt_max: Math.min(90, Math.max(1, v)) }), 1, 1)}
            ${numberField(host, t("tilt_angle_offset"), o.tilt_offset ?? 0, (v) => actions.update({ tilt_offset: v }), 0.5)}
            ${checkField(host, t("tilt_angle_invert"), !!o.tilt_invert, (on) => actions.update({ tilt_invert: on }))}`
          : nothing}`
      : nothing}`;
}

/** The blind of the opening: the cover entity, where it reports its position, and whether to ask before moving it. */
function blindFields(host: EditorHost, o: Opening, actions: OpeningActions, lists: ReturnType<typeof choices>): TemplateResult {
  const t = host.t;
  const window = o.type === "window";
  const automatic = automaticLink(host, o, "cover");
  const hasBlind = o.cover !== "none" && (o.cover || automatic);
  return html`${entityField(host, t(window ? "cover_entity" : "door_cover"), o.cover, automatic, lists.covers, (v) => actions.update({ cover: v }))}
    ${hasBlind
      ? html`${entityField(host, t("cover_position_entity"), o.position ?? null, undefined, lists.positions, (v) => actions.update({ position: noneAsNull(v) }))}
        ${o.position ? checkField(host, t("cover_position_invert"), !!o.position_inverted, (on) => actions.update({ position_inverted: on })) : nothing}
        ${checkField(host, t("device_confirm"), !!o.confirm, (on) => actions.update({ confirm: on }), { title: t("cover_confirm_hint") })}
        ${window
          ? html`${selectField(host, t("blind_kind"), o.blind ?? "roller", [["roller", t("blind_roller")], ["venetian", t("blind_venetian")], ["inside", t("blind_inside")]], (v) => actions.update({ blind: v === "roller" ? null : (v as Opening["blind"]) }))}
            ${entityField(host, t("cover2_entity"), o.cover2 ?? null, undefined, lists.covers, (v) => actions.update({ cover2: noneAsNull(v) }))}`
          : nothing}
        ${numberField(host, t("cover_my"), o.my_position ?? 0, (v) => actions.update({ my_position: v > 0 ? Math.min(100, Math.round(v)) : null }), 5, 0)}
        ${hint(t("blind_hint"), "nf-wide")}`
      : nothing}`;
}

/** The contacts of a door or garage door; a double door has one per leaf, and a door can be marked as shut when it reports closed. */
function doorContacts(host: EditorHost, o: Opening, actions: OpeningActions, lists: ReturnType<typeof choices>): TemplateResult {
  const t = host.t;
  const two = o.leaves === 2;
  return html`${entityField(host, t(two ? "contact_main" : "contact_entity"), o.contact, automaticLink(host, o, "contact"), lists.contacts, (v) => actions.update({ contact: v }))}
    ${two && o.type !== "garage" ? entityField(host, t("contact_second"), o.contact2, undefined, lists.contacts, (v) => actions.update({ contact2: noneAsNull(v) })) : nothing}
    ${o.type === "door" ? checkField(host, t("door_shut"), !!o.shut, (on) => actions.update({ shut: on }), { title: t("door_shut_hint") }) : nothing}
    ${o.type === "door" && o.style !== "sliding" && o.style !== "passage"
      ? selectField(host, t("door_angle"), String(o.open_angle ?? ""), doorAngles(o.open_angle).map((a) => [String(a ?? ""), a ? `${a}°` : t("door_angle_default")] as const), (v) => actions.update({ open_angle: v ? Number(v) : null }), { title: t("door_angle_hint") })
      : nothing}
    ${o.type === "door" ? html`${entityField(host, t("opening_lock"), o.lock ?? null, undefined, lists.locks, (v) => actions.update({ lock: noneAsNull(v) }))}${hint(t("opening_lock_hint"), "nf-wide")}` : nothing}`;
}

/** The form of the selected opening. */
export function renderOpeningForm(host: EditorHost, o: Opening, actions: OpeningActions): TemplateResult {
  const t = host.t;
  const lists = choices(host);
  const preset = openingPreset(o);
  const [window, garage, door] = [o.type === "window", o.type === "garage", o.type === "door"];
  const at = (patch: Partial<Opening>) => actions.update(patch);
  const presets = (Object.keys(OPENING_PRESETS) as OpeningPreset[]).map((p) => html`<button class="nf-chip" aria-pressed=${p === preset} @click=${() => actions.setPreset(o, p)}>${t(`preset_${p}` as I18nKey)}</button>`);
  const hingeChoices: [Opening["hinge"], string][] = [["left", t("hinge_left")], ["right", t("hinge_right")]];
  const markChoices: [string, string][] = [["", t("opening_mark_open")], ["closed", t("opening_mark_closed")]];
  return html`<section>
    <div class="nf-h3row"><h3>${t(`preset_${preset}` as I18nKey)}</h3>${actions.lockButton}</div>
    ${host.admin ? html`<div class="nf-presets" role="group" aria-label=${t("opening_type")}>${presets}</div>` : nothing}
    ${host.admin && !garage
      ? html`<div class="nf-actions">
          <button class="nf-btn" title=${t("flip_hinge_hint")} @click=${() => at({ hinge: o.hinge === "left" ? "right" : "left" })}>⇆ ${t(o.leaves === 2 ? "flip_main_leaf" : "flip_hinge")}</button>
          ${door ? html`<button class="nf-btn" title=${t("flip_swing_hint")} @click=${() => at({ swing: o.swing === "out" ? "in" : "out" })}>⇅ ${t("flip_swing")}</button>` : nothing}
        </div>`
      : nothing}
    <div class="nf-form">
      ${numberField(host, t("width"), o.width, (v) => at({ width: Math.max(0.3, v) }), 0.01, 0.3)}
      ${numberField(host, t("opening_position"), o.offset, (v) => at({ offset: Math.max(0, v) }), 0.01, 0)}
      ${window ? numberField(host, t("sill"), o.sill, (v) => at({ sill: Math.max(0, v) }), 0.01, 0) : nothing}
      ${numberField(host, t("opening_height"), o.height, (v) => at({ height: Math.max(0.3, v) }), 0.01, 0.3)}
      ${garage ? nothing : styleField(host, o, actions)} ${sidelightFields(host, o, actions)} ${glassWallPanes(host, o, actions)}
      ${window && o.style !== "glass_wall"
        ? selectField(host, t("window_opens"), o.opens ?? "turn", WINDOW_OPENINGS.map((w) => [w, t(`window_opens_${w}` as I18nKey)] as const), (v) => at({ opens: v === "turn" ? null : v }), { wide: true, title: t("window_opens_hint") })
        : nothing}
      ${selectField(host, t("opening_mark"), o.mark === "closed" ? "closed" : "", markChoices, (v) => at({ mark: v === "closed" ? "closed" : null }), { wide: true, title: t("opening_mark_hint") })}
      ${garage ? nothing : selectField(host, t(o.leaves === 2 ? "main_leaf" : "hinge"), o.hinge, hingeChoices, (hinge) => at({ hinge }), { wide: true })}
      ${window
        ? selectField(host, t("sill_boards"), o.sill_boards ?? "auto", [["auto", t("sill_boards_auto")], ["none", t("sill_boards_none")], ["inside", t("sill_boards_inside")], ["outside", t("sill_boards_outside")]] as const, (v) => at({ sill_boards: v === "auto" ? null : v }), { wide: true })
        : nothing}
      ${window ? checkField(host, t("opening_rain_warning"), o.rain_warning !== false, (on) => at({ rain_warning: on ? undefined : false }), { wide: true }) : nothing}
      ${window && actions.isBelowGround?.(o) ? checkField(host, t("opening_light_well"), o.light_well !== false, (on) => at({ light_well: on ? null : false }), { wide: true }) : nothing}
      ${blindFields(host, o, actions, lists)}
      ${window
        ? html`${o.leaves === 2 ? html`<h4 class="nf-lib-head nf-wide">${t("leaf_main")}</h4>` : nothing}${sashSensors(host, o, 1, actions, lists)}
          ${o.leaves === 2 ? html`<h4 class="nf-lib-head nf-wide">${t("leaf_second")}</h4>${sashSensors(host, o, 2, actions, lists)}` : nothing}`
        : doorContacts(host, o, actions, lists)}
    </div>
    ${hint(t(window ? "opening_hint" : garage ? "garage_hint" : "door_hint"))}
    ${host.admin ? html`<div class="nf-actions"><button class="nf-btn nf-danger" @click=${() => actions.remove()}>${t("delete")}</button></div>` : nothing}
  </section>`;
}
