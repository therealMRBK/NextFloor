// The form of a parking spot: the presence sensor, the vehicle shown there (also by the state of a type sensor), its size, and the
// car's own integration.

import { html, nothing, type TemplateResult } from "lit";
import { formatNumber } from "../../../i18n.ts";
import { pointInPolygon, type Furniture } from "../../../model.ts";
import { packItemLabel, packLabel } from "../../../furniture-names.ts";
import { packItem, packType, type FurniturePack } from "../../../packs.ts";
import { entityOptions } from "../entities.ts";
import { entityField, hint, numberField } from "../fields.ts";
import type { EditorHost } from "../host.ts";
import type { FurnitureLinkActions } from "./furniture-links.ts";

const PRESENCE = /^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./;
const TYPE_SENSOR = /^(sensor|input_select|select|input_text)\./;
const CAR_DEVICE = /^(device_tracker|sensor|binary_sensor|lock|climate)\./;

interface Vehicle {
  id: string;
  label: string;
}

/** The vehicles of the packs, named with their pack. */
const vehiclesOf = (packs: readonly FurniturePack[], language: string): Vehicle[] =>
  packs.flatMap((pack) => pack.items.filter((item) => item.vehicle).map((item) => ({ id: packType(pack.id, item.id), label: `${packItemLabel(item, packType(pack.id, item.id), language)} · ${packLabel(pack, language)}` })));

/** GPS trackers (a car's own integration, a phone) come before the many network trackers of a router. */
function presenceRank(host: EditorHost, id: string): number {
  if (!id.startsWith("device_tracker.")) return 1;
  return host.hass?.states[id]?.attributes.source_type === "router" ? 2 : 0;
}

function vehicleSelect(host: EditorHost, vehicles: readonly Vehicle[], value: string | null, onChange: (v: string | null) => void): TemplateResult {
  return html`<select ?disabled=${!host.admin} @change=${(e: Event) => onChange((e.target as HTMLSelectElement).value || null)}>
    <option value="" ?selected=${!value}>${host.t("parking_vehicle_none")}</option>
    ${vehicles.map((v) => html`<option value=${v.id} ?selected=${v.id === value}>${v.label}</option>`)}
  </select>`;
}

/** Which vehicle shows for which state of the type sensor (a car that reports its model, say). */
function typeRows(host: EditorHost, spot: Furniture, vehicles: readonly Vehicle[], actions: FurnitureLinkActions): TemplateResult {
  const t = host.t;
  const sensorState = spot.type_entity ? host.hass?.states[spot.type_entity] : undefined;
  const known = Array.isArray(sensorState?.attributes.options) ? (sensorState.attributes.options as string[]) : [];
  const rows = spot.types ?? [];
  const set = (next: { state: string; vehicle: string }[]) => actions.update({ types: next });
  const edit = (i: number, patch: Partial<{ state: string; vehicle: string }>) => set(rows.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  return html`<div class="nf-wide">
    <div class="nf-sub">${t("parking_types")}</div>
    ${rows.map(
      (row, i) => html`<div class="nf-parking-row">
        <input type="text" list="nf-parking-states" placeholder=${t("parking_type_state")} .value=${row.state} ?disabled=${!host.admin} @change=${(e: Event) => edit(i, { state: (e.target as HTMLInputElement).value })} />
        ${vehicleSelect(host, vehicles, row.vehicle, (v) => edit(i, { vehicle: v ?? "" }))}
        <button class="nf-btn" ?disabled=${!host.admin} title=${t("delete")} @click=${() => set(rows.filter((_, j) => j !== i))}>✕</button>
      </div>`,
    )}
    <datalist id="nf-parking-states">${known.map((o) => html`<option value=${o}></option>`)}</datalist>
    ${host.admin ? html`<button class="nf-btn" @click=${() => set([...rows, { state: known[rows.length] ?? "", vehicle: vehicles[0]?.id ?? "" }])}>${t("parking_add_type")}</button>` : nothing}
  </div>`;
}

/** The form of a parking spot. `packs` are the furniture packs, whose vehicles can stand there. */
export function parkingForm(host: EditorHost, spot: Furniture, packs: readonly FurniturePack[], actions: FurnitureLinkActions): TemplateResult {
  const t = host.t;
  const vehicles = vehiclesOf(packs, host.hass?.language ?? "en");
  const presence = entityOptions(host.hass, (id) => PRESENCE.test(id)).sort((a, b) => presenceRank(host, a.id) - presenceRank(host, b.id));
  const typeSensors = entityOptions(host.hass, (id) => TYPE_SENSOR.test(id));
  const car = spot.car ?? {};
  // the height of the vehicle against that of the room: a warning when it would not fit
  const floor = host.floor;
  const inRoom = floor?.rooms.find((r) => r.points.length >= 3 && pointInPolygon([spot.x, spot.z], r.points));
  const pack = spot.vehicle ? packItem(spot.vehicle) : undefined;
  const carHeight = pack ? pack.size[2] * (spot.scale ?? 1) : 0;
  const tooTall = !!inRoom && !!floor && carHeight > floor.height + 1e-6;
  return html`<div class="nf-form nf-links">
      ${entityField(host, t("parking_entity"), spot.entity ?? null, undefined, presence, (v) => actions.update({ entity: v === "none" ? null : v }))}
      <label class="nf-field nf-wide">${t("parking_vehicle")} ${vehicleSelect(host, vehicles, spot.vehicle ?? null, (v) => actions.update({ vehicle: v }))}</label>
      ${vehicles.length > 0 ? nothing : hint(t("parking_no_pack"), "nf-wide")}
      ${numberField(host, t("parking_scale"), Math.round((spot.scale ?? 1) * 100), (v) => actions.update({ scale: Math.min(150, Math.max(30, v)) / 100 }), 5, 30)}
      ${entityField(host, t("parking_type_entity"), spot.type_entity ?? null, undefined, typeSensors, (v) => actions.update({ type_entity: v === "none" ? null : v }))}
      ${spot.type_entity ? typeRows(host, spot, vehicles, actions) : nothing}
    </div>
    ${tooTall ? html`<p class="nf-sub nf-warn">${t("parking_too_tall", { car: formatNumber(host.hass, carHeight, 2), room: formatNumber(host.hass, floor!.height, 2) })}</p>` : nothing}
    ${hint(t("parking_hint"))}
    ${host.hass
      ? html`${entityField(host, t("live_car_device"), car.device ?? null, null, entityOptions(host.hass, (id) => CAR_DEVICE.test(id)), (v) => actions.update({ car: { ...car, device: v } }))}
        ${hint(t("live_car_device_hint"), "nf-wide")}
        ${entityField(host, t("live_car_departure_entity"), car.departure ?? null, undefined, entityOptions(host.hass, (id) => /^(sensor|input_datetime|time|datetime)\./.test(id)), (v) => actions.update({ car: { ...car, departure: v === "none" ? null : v } }))}`
      : nothing}`;
}
