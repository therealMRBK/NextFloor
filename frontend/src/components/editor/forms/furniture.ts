// The form of a piece of furniture: its name and kind, size and place, looks (paint, shape), and the entities it is linked to.

import { html, nothing, type TemplateResult } from "lit";
import { colourLabel, furnitureName, packItemLabel, packLabel } from "../../../furniture-names.ts";
import { holePartInRoom } from "../../../geometry/holes.ts";
import type { I18nKey } from "../../../i18n.ts";
import { BUTTON_ACTIONS, canLift, uid, CEILING_TYPES, ceilingAt, ceilingOf, FURNITURE_MATERIALS, FURNITURE_TYPES, furnitureFootprint, isLamp, type ButtonAction, type Furniture } from "../../../model.ts";
import { hasMovingParts, hasPicture, householdKind, isElectric, mountBase, packItem, packType, type FurniturePack } from "../../../packs.ts";
import { checkField, colorField, entityField, hint, iconField, markerField, pinShiftField, numberField, selectField, serviceField, serviceTargetEntityField, textField } from "../fields.ts";
import { entityOptions } from "../entities.ts";
import { storeImage } from "../../../api.ts";
import { load3d } from "../../../load3d.ts";
import { meshPath } from "../../../model-slots.ts";
import { readPictureInBrowser } from "../background-tool.ts";
import { roofUnderAt } from "../../../roof/proposal.ts";
import type { EditorHost } from "../host.ts";
import { careLink, coverLink, deviceTempLink, furnitureLinks, gangLinks, stateLinks, type FurnitureLinkActions } from "./furniture-links.ts";
import { dataField, TARGET_EXAMPLES } from "./house.ts";
import { parkingForm } from "./parking.ts";
import { stairForm } from "./stairs.ts";
import { DEFAULT_STAIR } from "../../../geometry/stairs.ts";

export interface FurnitureActions extends FurnitureLinkActions {
  rotate(delta: number): void;
  duplicate(): void;
  rotateGroup?(delta: number): void;
  duplicateGroup?(): void;
  /** A note (task) at this piece: a yearly check, a cleaning, a filter change (#113). */
  addTask(): void;
  remove(): void;
  /** Turns the item back into a plain device pin. */
  toDevice(item: Furniture): void;
  /** Turns a vehicle into a parking spot holding it. */
  toSpot(item: Furniture): void;
  /** Moves the item to another floor, at the same spot. */
  toFloor(floorId: string): void;
  packs: readonly FurniturePack[];
  lockButton: TemplateResult | typeof nothing;
}

/** Furniture without a top to light: no "state from" box. */
const NO_STATE_TYPES = new Set(["parking", "stairwell", "rug", "grid_point"]);
/** Pieces without anything to measure: openings in the floor and stairs. Everything else may carry temperature sensors (a tank that is no electric device; #118). */
const NO_TEMP_TYPES = new Set(["floor_opening", "stairs", "chimney"]);

/** The looks a type can have besides its paint, as the variants it offers and the text of each. */
const VARIANTS: Record<string, { label: I18nKey; values: readonly string[]; text(value: string): string }> = {
  inverter: { label: "furn_model", values: ["", "slim", "hybrid"], text: (v) => `inverter_${v || "std"}` },
  home_battery: { label: "furn_model", values: ["", "wall", "cube"], text: (v) => `battery_${v || "std"}` },
  lamp_pendant: { label: "pendant_shape", values: ["", "globe", "cone", "drum"], text: (v) => `pendant_${v || "shade"}` },
  sofa: { label: "sofa_shape", values: ["", "l", "u"], text: (v) => `sofa_${v || "straight"}` },
};

/** The kind drop-down: the built-in kinds, then those of every pack, and the item's own kind when its pack is gone. */
function kindField(host: EditorHost, item: Furniture, packs: readonly FurniturePack[], actions: FurnitureActions): TemplateResult {
  const language = host.hass?.language ?? "en";
  const known = packs.some((p) => item.type.startsWith(`pack:${p.id}:`));
  return html`<label class="nf-field nf-wide"
    >${host.t("furniture_type")}
    <select ?disabled=${!host.admin} @change=${(e: Event) => actions.update({ type: (e.target as HTMLSelectElement).value })}>
      ${FURNITURE_TYPES.map((type) => html`<option value=${type} ?selected=${type === item.type}>${host.t(`furn_${type}` as I18nKey)}</option>`)}
      ${packs.map(
        (pack) => html`<optgroup label=${packLabel(pack, host.hass?.language ?? "de")}>
          ${pack.items.map((it) => html`<option value=${packType(pack.id, it.id)} ?selected=${packType(pack.id, it.id) === item.type}>${packItemLabel(it, packType(pack.id, it.id), language)}</option>`)}
        </optgroup>`,
      )}
      ${item.type.startsWith("pack:") && !known ? html`<option value=${item.type} selected>${furnitureName(host.hass, item.type)}</option>` : nothing}
    </select>
  </label>`;
}

/** The paint of a vehicle: the colours its pack offers, kept as the variant of the furniture. */
function paintField(host: EditorHost, item: Furniture, actions: FurnitureActions): TemplateResult | typeof nothing {
  const colours = packItem(item.type === "parking" ? (item.vehicle ?? "") : item.type)?.colors;
  if (!colours?.length) return nothing;
  const language = host.hass?.language ?? "en";
  const current = colours.find((c) => c.id === item.variant) ?? colours[0];
  const nameOf = (c: (typeof colours)[number]) => colourLabel(c, language);
  return html`<div class="nf-form">
    <div class="nf-field nf-wide">
      <span>${host.t("paint_colour")}: ${nameOf(current)}</span>
      <div class="nf-swatches" role="radiogroup" aria-label=${host.t("paint_colour")}>
        ${colours.map((c, i) => html`<button type="button" class="nf-swatch" role="radio" aria-checked=${c.id === current.id} title=${nameOf(c)} style=${`--sw:${c.hex}`} ?disabled=${!host.admin} @click=${() => actions.update({ variant: i === 0 ? null : c.id })}></button>`)}
      </div>
    </div>
  </div>`;
}

/** A form with a drop-down for the shapes of a type, for the types that have some. */
function variantField(host: EditorHost, item: Furniture, actions: FurnitureActions): TemplateResult | typeof nothing {
  const variants = VARIANTS[item.type];
  if (!variants) return nothing;
  const choices = variants.values.map((v): [string, string] => [v, host.t(variants.text(v) as I18nKey)]);
  return html`<div class="nf-form">${selectField(host, host.t(variants.label), item.variant ?? "", choices, (v) => actions.update({ variant: v || null, ...(item.type === "sofa" && v && item.d < 1.4 ? { d: 1.7, w: Math.max(item.w, v === "u" ? 3 : 2.4) } : {}) }), { wide: true })}</div>`;
}

/** The name of the item, and whether it is written under its marker. */
function nameFields(host: EditorHost, item: Furniture, actions: FurnitureActions): TemplateResult {
  const standard = host.t(`furn_${item.type}` as I18nKey);
  const placeholder = standard === `furn_${item.type}` ? "" : standard;
  return html`<label class="nf-field nf-wide"
      >${host.t("furn_name")}
      <input type="text" maxlength="60" .value=${item.name ?? ""} ?disabled=${!host.admin} placeholder=${placeholder} @change=${(e: Event) => actions.update({ name: (e.target as HTMLInputElement).value.trim() || null })} />
    </label>
    ${item.name ? checkField(host, host.t("show_name"), !!item.show_name, (on) => actions.update({ show_name: on || undefined })) : nothing}`;
}

/** Size, place and turn, and what depends on the kind: mirror, strip tilt, mount height. */
function geometryFields(host: EditorHost, item: Furniture, actions: FurnitureActions): TemplateResult {
  const t = host.t;
  const set = (patch: Partial<Furniture>) => actions.update(patch);
  const floor = host.floor;
  return html`${numberField(host, t("x"), item.x, (v) => set({ x: v }))} ${numberField(host, t("z"), item.z, (v) => set({ z: v }))}
    ${numberField(host, t("width"), item.w, (v) => set({ w: Math.max(0.05, v) }), 0.01, 0.05)} ${numberField(host, t("depth"), item.d, (v) => set({ d: Math.max(0.05, v) }), 0.01, 0.05)}
    ${numberField(host, t("height_m"), item.h, (v) => set({ h: Math.max(0.005, v) }), 0.01, 0)}
    ${numberField(host, t("rotation"), item.rotation, (v) => set({ rotation: ((v % 360) + 360) % 360 }), 1)}
    ${numberField(host, t("tilt_x"), item.tilt_x ?? 0, (v) => set({ tilt_x: Math.max(-90, Math.min(90, Math.round(v))) || null }), 1, -90)}
    ${numberField(host, t("tilt_z"), item.tilt_z ?? 0, (v) => set({ tilt_z: Math.max(-90, Math.min(90, Math.round(v))) || null }), 1, -90)}
    ${isLamp(item.type) ? nothing : checkField(host, t("furn_mirror"), !!item.mirror, (mirror) => set({ mirror }), { wide: false, title: t("furn_mirror_hint") })}
    ${item.type === "led_strip"
      ? html`${numberField(host, t("strip_tilt"), item.tilt ?? 0, (v) => set({ tilt: Math.max(-90, Math.min(90, Math.round(v))) }), 5)}
        ${item.upright ? nothing : numberField(host, t("strip_rise"), item.rise ?? 0, (v) => set({ rise: Math.max(-80, Math.min(80, Math.round(v))) }), 5)}
        ${checkField(host, t("strip_upright"), !!item.upright, (upright) => set({ upright }), { wide: false, title: t("strip_upright_hint") })}`
      : nothing}
    ${canLift(item) && floor
      ? html`${numberField(host, t("mount_height"), item.mount_y ?? mountBase(floor, item), (v) => set({ mount_y: Math.max(0, v) }), 0.01, 0)}
        ${item.mount_y != null ? html`<button class="nf-btn nf-field-btn" ?disabled=${!host.admin} @click=${() => set({ mount_y: null })}>${t("height_auto")}</button>` : nothing}`
      : nothing}
    ${hangs(item) && floor
      ? html`${numberField(host, t("ceiling_here"), ceilingOf(floor, item), (v) => set({ ceiling_y: Math.abs(v - ceilingAt(floor, item.x, item.z)) < 0.005 ? null : Math.max(0.5, v) }), 0.01, 0.5)}
        ${item.ceiling_y != null ? html`<button class="nf-btn nf-field-btn" ?disabled=${!host.admin} @click=${() => set({ ceiling_y: null })}>${t("height_auto")}</button>` : nothing}
        ${slopeAbove(host, item) !== null
          ? html`<button class="nf-btn nf-field-btn" ?disabled=${!host.admin} title=${t("ceiling_slope_hint")} @click=${() => set({ ceiling_y: slopeAbove(host, item) })}>📐 ${t("ceiling_slope")}</button>`
          : nothing}
        ${hint(t("ceiling_here_hint"), "nf-wide")}`
      : nothing}`;
}

/** The underside of a roof slope right above an item, when it is lower than the room's ceiling (an attic room): its height on the floor. */
function slopeAbove(host: EditorHost, item: Furniture): number | null {
  const floor = host.floor;
  if (!floor) return null;
  const under = roofUnderAt(host.doc, item.x, item.z);
  if (under === null) return null;
  const y = Math.round((under - floor.elevation) * 1000) / 1000;
  return y > 0.5 && y < ceilingAt(floor, item.x, item.z) - 0.02 ? y : null;
}

/** Items that hang from the ceiling: their own ceiling height can be set (a lamp in a sloping ceiling). */
const hangs = (item: Furniture): boolean => CEILING_TYPES.has(item.type) || packItem(item.type)?.mount === "ceiling";

/** Notes under the form for stairs and stairwells, with a warning when a stairwell lies outside every room. */
function typeNotes(host: EditorHost, item: Furniture, actions: FurnitureActions): TemplateResult | typeof nothing {
  if (item.type === "stairs" && item.stair) return nothing;
  if (item.type === "stairs")
    return html`${hint(host.t("stairs_hint"))}${host.admin ? html`<div class="nf-actions"><button class="nf-btn nf-primary" title=${host.t("stair_upgrade_hint")} @click=${() => actions.update({ stair: { ...DEFAULT_STAIR } })}>${host.t("stair_upgrade")}</button></div>` : nothing}`;
  if (item.type !== "stairwell") return nothing;
  const outside = host.floor && !host.floor.rooms.some((r) => r.points.length >= 3 && holePartInRoom(furnitureFootprint(item), r.points));
  return html`${hint(host.t("stairwell_hint"))}${outside ? html`<p class="nf-sub nf-pack-error">${host.t("stairwell_outside")}</p>` : nothing}`;
}

/** The buttons at the bottom: turn, back to a device pin, copy, delete. */
function buttons(host: EditorHost, item: Furniture, actions: FurnitureActions): TemplateResult | typeof nothing {
  if (!host.admin) return nothing;
  const t = host.t;
  const linked = !!item.entity && item.entity !== "none" && item.type !== "parking";
  const others = host.doc.floors.filter((f) => f.id !== host.floor?.id);
  return html`<div class="nf-actions">
    <button class="nf-btn" @click=${() => actions.rotate(-90)}>${t("rotate_left")}</button>
    <button class="nf-btn" @click=${() => actions.rotate(90)}>${t("rotate_right")}</button>
    ${linked ? html`<button class="nf-btn" title=${t("as_device_hint")} @click=${() => actions.toDevice(item)}>${t("as_device")}</button>` : nothing}
    <button class="nf-btn" @click=${() => actions.duplicate()}>${t("duplicate")}</button>
    <button class="nf-btn" title=${t("furn_task_hint")} @click=${() => actions.addTask()}>✎ ${t("furn_task")}</button>
    <button class="nf-btn nf-danger" @click=${() => actions.remove()}>${t("delete")}</button>
  </div>
  ${others.length ? html`<div class="nf-form">${selectField(host, t("furn_to_floor"), "", [["", "–"], ...others.map((f): [string, string] => [f.id, f.name])], (id) => id && actions.toFloor(id), { wide: true, title: t("furn_to_floor_hint") })}</div>` : nothing}`;
}

/** What a tap on the item does: its usual tap, or an own action like the star menu's own buttons. */
function tapField(host: EditorHost, item: Furniture, actions: FurnitureActions): TemplateResult {
  const tap = item.tap ?? null;
  const choices: [string, string][] = [["", host.t("furn_tap_default")], ...BUTTON_ACTIONS.map((a): [string, string] => [a, host.t(`own_action_${a}` as I18nKey)])];
  const set = (patch: Partial<NonNullable<Furniture["tap"]>>) => actions.update({ tap: { action: tap?.action ?? "navigate", target: tap?.target ?? null, data: tap?.data ?? null, ...patch } });
  const targetInput = () => {
    if (!tap || tap.action === "fire_dom_event") return nothing;
    if (tap.action === "service") return serviceField(host, host.t("own_target_service"), tap.target ?? null, (v) => set({ target: v }));
    if (tap.action === "more_info") return entityField(host, host.t("own_target_more_info"), tap.target ?? null, undefined, entityOptions(host.hass, () => true), (v) => set({ target: v && v !== "none" ? v : null }));
    return textField(host, host.t(`own_target_${tap.action}` as I18nKey), tap.target ?? "", (v) => set({ target: v || null }), { wide: true, placeholder: TARGET_EXAMPLES[tap.action] });
  };
  const quickAssign = (id: string | null) => {
    if (!id || id === "none") return;
    const domain = id.split(".")[0];
    const srv = domain === "scene" ? "scene.turn_on" : domain === "script" ? "script.turn_on" : domain === "light" ? "light.toggle" : "homeassistant.toggle";
    const icon = domain === "light" ? "lightbulb" : domain === "switch" || domain === "input_boolean" ? "power-socket-eu" : "lightbulb-on";
    actions.update({
      ...(domain === "light" || domain === "switch" || domain === "input_boolean" ? { entity: id } : {}),
      tap: { action: "service", target: srv, data: { entity_id: id } },
      icon: item.icon ?? icon,
      marker: item.marker ?? "always",
    });
  };
  const quickVal = typeof tap?.data?.entity_id === "string" ? tap.data.entity_id : null;
  return html`<div class="nf-form">
    ${entityField(host, host.t("furn_quick_control"), quickVal, undefined, entityOptions(host.hass, (id) => /^(light|switch|scene|script|input_boolean)\./.test(id)), quickAssign)}
    ${selectField(host, host.t("furn_tap"), tap?.action ?? "", choices, (v) => (v ? set({ action: v as ButtonAction }) : actions.update({ tap: null })), { wide: true, title: host.t("furn_tap_hint") })}
    ${targetInput()}
    ${tap && tap.action === "service" ? serviceTargetEntityField(host, tap.target, tap.data, (data) => set({ data }), item.entity) : nothing}
    ${tap && (tap.action === "service" || tap.action === "fire_dom_event") ? dataField(host, tap, (data) => set({ data })) : nothing}
    ${tap && !isElectric(item.type) && !packItem(item.type)?.gangs
      ? html`${markerField(host, item.marker ?? null, (v) => actions.update({ marker: v }))}${iconField(host, item.icon, (v) => actions.update({ icon: v }))}${pinShiftField(host, item.pin_offset, (v) => actions.update({ pin_offset: v }))}`
      : nothing}
  </div>`;
}

/** A picture frame: its photo (uploaded and stored with the plan, a URL, or an image or camera entity), the mat and how it fits. */
function pictureFields(host: EditorHost, item: Furniture, actions: FurnitureActions): TemplateResult {
  const t = host.t;
  const value = item.picture ?? "";
  const stored = value.startsWith("image:");
  const upload = async (e: Event) => {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    if (!file || !host.hass) return;
    const { data } = await readPictureInBrowser(file);
    const id = uid("img");
    await storeImage(host.hass, id, data);
    actions.update({ picture: `image:${id}` });
  };
  const entities = entityOptions(host.hass, (id) => /^(image|camera|media_player)\./.test(id));
  return html`<div class="nf-form nf-links">
    ${host.admin
      ? html`<label class="nf-btn nf-wide nf-upload">📷 ${t(stored ? "picture_replace" : "picture_upload")}<input type="file" accept="image/*" hidden @change=${upload} /></label>`
      : nothing}
    ${stored
      ? html`<p class="nf-sub nf-wide">${t("picture_stored")} <button class="nf-btn nf-field-btn" ?disabled=${!host.admin} @click=${() => actions.update({ picture: null })}>${t("delete")}</button></p>`
      : html`${textField(host, t("picture_url"), /^[a-z_]+\.[a-z0-9_]+$/.test(value) ? "" : value, (v) => actions.update({ picture: v || null }), { wide: true, placeholder: "/local/holiday.jpg" })}
        ${entityField(host, t("picture_entity"), /^[a-z_]+\.[a-z0-9_]+$/.test(value) ? value : null, undefined, entities, (v) => actions.update({ picture: v && v !== "none" ? v : null }))}`}
    ${numberField(host, t("picture_border"), item.picture_border ?? 0, (v) => actions.update({ picture_border: Math.max(0, Math.min(40, Math.round(v))) || null }), 1, 0)}
    ${selectField(host, t("picture_fit"), item.picture_fit ?? "cover", [["cover", t("picture_fit_cover")], ["contain", t("picture_fit_contain")]], (v) => actions.update({ picture_fit: v === "contain" ? "contain" : null }))}
    ${hint(t("picture_hint"), "nf-wide")}
  </div>`;
}

const CONDITION_DOMAINS = /^(input_boolean|input_select|switch|binary_sensor|sensor|calendar|schedule|sun|person|device_tracker|input_text|select)\./;

/** Shown only while an entity is in a state: seasonal decoration behind a helper, a calendar, the sun. */
function showWhenField(host: EditorHost, item: Furniture, actions: FurnitureActions): TemplateResult {
  const t = host.t;
  const cond = item.show_when ?? null;
  const set = (patch: Partial<NonNullable<Furniture["show_when"]>>) => actions.update({ show_when: { entity: cond?.entity ?? "", state: cond?.state ?? null, invert: cond?.invert || undefined, ...patch } });
  return html`<div class="nf-form">
    ${entityField(host, t("furn_show_when"), cond?.entity || null, undefined, entityOptions(host.hass, (id) => CONDITION_DOMAINS.test(id)), (v) => (v && v !== "none" ? set({ entity: v }) : actions.update({ show_when: null })))}
    ${cond?.entity
      ? html`${textField(host, t("furn_show_when_state"), cond.state ?? "", (v) => set({ state: v || null }), { wide: true, placeholder: host.hass?.states[cond.entity]?.state ?? "on" })}
        ${checkField(host, t("furn_show_when_invert"), !!cond.invert, (on) => set({ invert: on || undefined }))}`
      : nothing}
    ${hint(t("furn_show_when_hint"), "nf-wide")}
  </div>`;
}

function appearanceFields(host: EditorHost, item: Furniture, actions: FurnitureActions): TemplateResult {
  const t = host.t;
  const matChoices = FURNITURE_MATERIALS.map((m): [string, string] => [m, t(`fmat_${m}` as I18nKey)]);
  const groups = [...new Set((host.floor?.furniture ?? []).map((f) => f.group).filter((g): g is string => !!g))].sort();
  const uploadMesh = async (e: Event) => {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    if (!file || !host.hass?.fetchWithAuth) return;
    const meshId = `m_${item.id.replace(/[^a-z0-9_]/gi, "_").toLowerCase()}`.slice(0, 48);
    const data = await file.arrayBuffer();
    const viewer = await load3d();
    const { glb } = await viewer.prepareModel(data, { turns: 0, paint: [], maxTriangles: 15000 });
    const res = await host.hass.fetchWithAuth(meshPath(meshId), { method: "POST", body: glb });
    if (res.ok) actions.update({ mesh: meshId });
  };
  return html`<div class="nf-form">
    ${colorField(host, t("furn_color"), item.color, "#8b7355", (color) => actions.update({ color }))}
    ${selectField(host, t("furn_material"), item.material ?? "auto", matChoices, (v) => actions.update({ material: v === "auto" ? null : v }))}
    ${host.admin
      ? html`<div class="nf-actions nf-wide">
          <label class="nf-btn nf-upload" title=${t("furn_mesh_hint")}>🧊 ${t("furn_mesh_upload")}<input type="file" accept=".glb,.gltf,.dae,.obj,.stl" hidden @change=${uploadMesh} /></label>
          ${item.mesh ? html`<button class="nf-btn nf-danger" @click=${() => actions.update({ mesh: null })}>${t("furn_mesh_remove")}</button>` : nothing}
        </div>`
      : nothing}
    <label class="nf-field nf-wide" title=${t("furn_group_hint")}
      >${t("furn_group")}
      <input type="text" list="nf-furn-groups" maxlength="64" .value=${item.group ?? ""} placeholder=${t("furn_group_placeholder")} ?disabled=${!host.admin} @change=${(e: Event) => actions.update({ group: (e.target as HTMLInputElement).value.trim() || null })} />
    </label>
    <datalist id="nf-furn-groups">${groups.map((g) => html`<option value=${g}></option>`)}</datalist>
    ${item.group && host.admin
      ? html`<div class="nf-actions nf-wide">
          ${actions.rotateGroup ? html`<button class="nf-btn" @click=${() => actions.rotateGroup!(-90)}>↺ ${t("furn_group_rotate")}</button><button class="nf-btn" @click=${() => actions.rotateGroup!(90)}>↻ ${t("furn_group_rotate")}</button>` : nothing}
          ${actions.duplicateGroup ? html`<button class="nf-btn" @click=${() => actions.duplicateGroup!()}>⧉ ${t("furn_group_duplicate")}</button>` : nothing}
          <button class="nf-btn" @click=${() => actions.update({ group: null })}>${t("furn_group_leave")}</button>
        </div>`
      : nothing}
  </div>`;
}

/** The form of the selected piece of furniture. */
export function renderFurnitureForm(host: EditorHost, item: Furniture, actions: FurnitureActions): TemplateResult {
  const gangs = packItem(item.type)?.gangs ?? 0;
  const links = gangs ? gangLinks(host, item, gangs, actions) : isElectric(item.type) ? furnitureLinks(host, item, actions) : !NO_STATE_TYPES.has(item.type) ? html`<div class="nf-form nf-links">${stateLinks(host, item, actions)}</div>${NO_TEMP_TYPES.has(item.type) ? nothing : deviceTempLink(host, item, actions)}` : nothing;
  return html`<section>
    <div class="nf-h3row"><h3>${item.name || host.t("furniture")}</h3>${actions.lockButton}</div>
    <div class="nf-form">${nameFields(host, item, actions)} ${kindField(host, item, actions.packs, actions)} ${geometryFields(host, item, actions)}</div>
    ${typeNotes(host, item, actions)} ${item.type === "stairs" && item.stair ? stairForm(host, item, actions) : nothing} ${variantField(host, item, actions)} ${paintField(host, item, actions)} ${appearanceFields(host, item, actions)}
    ${links} ${item.type.endsWith(":sprinkler") ? html`<div class="nf-form">${numberField(host, host.t("spray_reach"), item.spray ?? 3, (v) => actions.update({ spray: Math.min(15, Math.max(0.5, v)) }), 0.5, 0.5)}${hint(host.t("spray_hint"), "nf-wide")}</div>` : nothing}
    ${hasPicture(item.type) ? pictureFields(host, item, actions) : nothing}
    ${packItem(item.type)?.pet
      ? html`<div class="nf-form nf-links">${entityField(host, host.t("pet_room_sensor"), item.room_sensor ?? null, undefined, entityOptions(host.hass, (id) => /^(sensor|device_tracker|input_select|select)\./.test(id)), (v) => actions.update({ room_sensor: v && v !== "none" ? v : null }))}${hint(host.t("pet_room_hint"), "nf-wide")}</div>`
      : nothing}
    ${householdKind(item.type) ? careLink(host, item, householdKind(item.type)!, actions) : nothing} ${hasMovingParts(packItem(item.type)) ? coverLink(host, item, actions) : nothing} ${item.type === "parking" ? parkingForm(host, item, actions.packs, actions) : nothing}
    ${item.type.startsWith("pack:nextfloor.fahrzeuge:") && host.admin
      ? html`<section>${hint(host.t("vehicle_to_spot_hint"))}<div class="nf-actions"><button class="nf-btn nf-primary" @click=${() => actions.toSpot(item)}>🅿 ${host.t("vehicle_to_spot")}</button></div></section>`
      : nothing}
    ${host.admin ? tapField(host, item, actions) : nothing} ${showWhenField(host, item, actions)} ${buttons(host, item, actions)}
  </section>`;
}
