// The energy tool's side panel: what is still to do, the devices, and the balance sensors.

import { html, nothing, type TemplateResult } from "lit";
import { deviceSensors, energySummary } from "../../../energy.ts";
import { furnitureEntities } from "../../../devices.ts";
import type { I18nKey } from "../../../i18n.ts";
import { ENERGY_DEVICES, type Building, type Floor, type Furniture, type RoutePoint } from "../../../model.ts";
import { entityOptions, isNumeric, isPowerSensor, powerSensorOf } from "../entities.ts";
import { checkField, entityField, hint } from "../fields.ts";
import type { EditorHost } from "../host.ts";
import { energyChecklist, type ChecklistTarget } from "../ops/energy-checklist.ts";
import { energyConnections, routeOf, type EnergyConnection } from "../../../live/energy-flow.ts";

/** What the panel can make the editor do. */
export interface EnergyActions {
  /** Follows a checklist row: selects the field or device, or adds one. */
  follow(target: ChecklistTarget): void;
  addDevice(type: string): void;
  openDevice(floor: Floor, item: Furniture): void;
  importPrefs(): void;
  /** What the last import did, shown under its button. */
  note: string | null;
}

const MARKS = { ok: "✓", todo: "○", opt: "·" } as const;

const foundDevices = (host: EditorHost) => (host.hass ? furnitureEntities(host.hass, host.doc.floors) : new Map<string, { power: string | null }>());
const energyDeviceTypes = ENERGY_DEVICES as readonly string[];
const deviceName = (host: EditorHost, item: Furniture) => item.name || host.t(`furn_${item.type}` as I18nKey);

/** The checklist, ticked off live: every row jumps to what is missing. */
export function renderEnergyChecklist(host: EditorHost, actions: EnergyActions): TemplateResult {
  const rows = energyChecklist(host.doc, foundDevices(host));
  const done = rows.filter((r) => r.state === "ok").length;
  return html`<section class="nf-checklist">
    <h3>☑ ${host.t("chk_title")} <span class="nf-sub">${done}/${rows.length}</span></h3>
    ${hint(host.t("chk_hint"))}
    ${rows.map(
      (row) => html`<button class="nf-chk nf-chk-${row.state}" ?disabled=${!host.admin && row.state !== "ok"} @click=${() => actions.follow(row.target)}>
        <span>${MARKS[row.state]}</span>${host.t(row.label)}
      </button>`,
    )}
  </section>`;
}

/** The energy devices of all floors, and a button for each kind that adds one on the floor shown. */
export function renderEnergyDevices(host: EditorHost, actions: EnergyActions): TemplateResult {
  const listed = host.doc.floors.flatMap((floor) => floor.furniture.filter((m) => energyDeviceTypes.includes(m.type)).map((item) => ({ floor, item })));
  return html`<section>
    <h3>⚡ ${host.t("energy_devices")}</h3>
    ${hint(host.t("energy_devices_hint"))}
    ${listed.length > 0
      ? html`<div class="nf-room-list">
          ${listed.map(
            ({ floor, item }) => html`<div class="nf-row">
              <button class="nf-dev-name" @click=${() => actions.openDevice(floor, item)}><span>${deviceName(host, item)} · ${floor.name}</span></button>
            </div>`,
          )}
        </div>`
      : nothing}
    <div class="nf-actions">
      ${ENERGY_DEVICES.map((type) => html`<button class="nf-btn" ?disabled=${!host.admin || !host.floor} @click=${() => actions.addDevice(type)}>+ ${host.t(`furn_${type}` as I18nKey)}</button>`)}
    </div>
  </section>`;
}

/** A warning with a button that flips the sign of a sensor. */
const signWarning = (host: EditorHost, text: I18nKey, flip: () => void) =>
  html`<p class="nf-sub nf-pack-error">${host.t(text)} <button class="nf-btn" ?disabled=${!host.admin} @click=${flip}>${host.t("energy_sign_flip")}</button></p>`;

/** Grid, solar, battery and house sensors: from the devices in the plan unless chosen here. */
export function renderEnergyBalance(host: EditorHost, actions: EnergyActions): TemplateResult {
  const { energy } = host.doc;
  const attribute = (id: string, key: string) => host.hass?.states[id]?.attributes[key] as string | undefined;
  const power = entityOptions(host.hass, (id) => isPowerSensor(host.hass, id));
  const charge = entityOptions(host.hass, (id) => isNumeric(id) && attribute(id, "device_class") === "battery");
  const tariff = entityOptions(host.hass, (id) => isNumeric(id) && (attribute(id, "device_class") === "monetary" || /\/(kWh|MWh)$/.test(attribute(id, "unit_of_measurement") ?? "")));
  const found = foundDevices(host);
  const sensors = deviceSensors(host.doc, (item) => powerSensorOf(item, found));
  const store = (patch: Partial<Building["energy"]>) => host.replace({ ...structuredClone(host.doc), energy: { ...host.doc.energy, ...patch } });
  const pick = (key: "grid" | "solar" | "battery" | "battery_soc" | "consumption" | "tariff") => (v: string | null) => store({ [key]: v === "none" ? null : v });

  // the usual trap is a sign the wrong way round: exporting without any sun, or a battery charging at night
  const sum = host.hass ? energySummary(host.hass, host.doc, [], sensors) : null;
  const night = !!sum && (sum.solar ?? 0) < 20;
  const gridWrong = night && sum.grid !== null && sum.grid < -50;
  const batteryWrong = night && sum.battery !== null && sum.battery < -50 && (sum.grid ?? 0) <= 0;
  const invert = (value: boolean, patch: (on: boolean) => Partial<Building["energy"]>) => checkField(host, host.t("energy_invert"), value, (on) => store(patch(on)));

  return html`<section>
    <h3>⚖ ${host.t("energy_balance")}</h3>
    ${hint(host.t("energy_balance_hint"))}
    ${gridWrong ? signWarning(host, "energy_sign_grid", () => store({ grid_invert: !energy.grid_invert })) : nothing}
    ${batteryWrong ? signWarning(host, "energy_sign_battery", () => store({ battery_invert: !energy.battery_invert })) : nothing}
    <div class="nf-form">
      ${entityField(host, host.t("energy_grid"), energy.grid, sensors.grid, power, pick("grid"))}
      ${invert(energy.grid_invert, (on) => ({ grid_invert: on }))}
      ${entityField(host, host.t("energy_solar_sensor"), energy.solar, sensors.solar[0] ?? null, power, pick("solar"))}
      ${entityField(host, host.t("energy_battery_sensor"), energy.battery, sensors.battery[0] ?? null, power, pick("battery"))}
      ${invert(energy.battery_invert, (on) => ({ battery_invert: on }))}
      ${entityField(host, host.t("energy_battery_soc"), energy.battery_soc, sensors.soc[0] ?? null, charge, pick("battery_soc"))}
      ${entityField(host, host.t("energy_consumption_sensor"), energy.consumption, null, power, pick("consumption"))}
      ${entityField(host, host.t("energy_tariff_sensor"), energy.tariff, undefined, tariff, pick("tariff"))}
    </div>
    <div class="nf-actions"><button class="nf-btn" ?disabled=${!host.admin || !host.hass} @click=${() => actions.importPrefs()}>${host.t("energy_import_prefs")}</button></div>
    ${actions.note ? hint(actions.note) : nothing} ${hint(host.t("energy_hint"))}
  </section>
  <section>
    <h3>⚙ ${host.t("energy_advanced")}</h3>
    ${hint(host.t("energy_advanced_hint"))}
    <div class="nf-form">
      ${checkField(host, host.t("energy_advanced_on"), !!energy.advanced, (on) => store({ advanced: on }))}
      ${energy.advanced ? checkField(host, host.t("energy_show_unmetered"), !!energy.show_unmetered, (on) => store({ show_unmetered: on })) : nothing}
    </div>
    ${energy.advanced ? hint(host.t("energy_show_unmetered_hint")) : nothing}
  </section>`;
}

/** What the energy flow in 3D needs, once the devices above are placed and have their sensors. */
export const renderEnergyTeaser = (host: EditorHost): TemplateResult => html`<section class="nf-teaser nf-teaser-on">
  <div class="nf-teaser-head"><b>⚡ ${host.t("feature_name_energy")}</b></div>
  ${hint(host.t("feature_text_energy"))}
</section>`;

/** Where to report a problem and where to propose an idea. */
export function renderHelpLinks(host: EditorHost): TemplateResult {
  const link = (path: string, icon: string, label: I18nKey) => html`<a class="nf-btn" href="https://github.com/therealMRBK/NextFloor/${path}" target="_blank" rel="noopener">${icon} ${host.t(label)}</a>`;
  return html`<section class="nf-help">
    <h3>${host.t("help_title")}</h3>
    ${hint(host.t("help_hint"))}
    <div class="nf-actions">${link("issues/new/choose", "🐞", "help_issue")}${link("discussions/categories/ideas", "💡", "help_idea")}</div>
  </section>`;
}

/** Drawing a cable route: the connection and the points tapped so far (each on the floor it was tapped on). */
export interface RouteDraft {
  key: string;
  points: RoutePoint[];
}

export interface RouteActions {
  draft: RouteDraft | null;
  start(key: string): void;
  undoPoint(): void;
  finish(): void;
  cancel(): void;
  clear(key: string): void;
  setCable(key: string, cable: boolean): void;
}

/** What a connection joins, in words. */
function connectionName(host: EditorHost, c: EnergyConnection): string {
  const t = host.t;
  const furniture = host.doc.floors.flatMap((f) => f.furniture).find((m) => m.id === c.id);
  const name = furniture ? deviceName(host, furniture) : "";
  switch (c.kind) {
    case "solar": {
      const fields = host.doc.settings.roof.solar ?? [];
      const i = fields.findIndex((f) => f.id === c.id);
      return t("route_conn_solar", { name: fields[i]?.name || `${t("solar_field")} ${i + 1}` });
    }
    case "battery":
      return c.id ? t("route_conn_device", { name }) : t("route_conn_battery");
    case "inverter":
      return c.id ? t("route_conn_device", { name }) : t("route_conn_inverter");
    case "grid":
      return t("route_conn_grid");
    case "meter":
      return t("route_conn_meter", { name });
  }
}

/** The connections whose cable can be drawn: a route per connection, shown as a faint line or as a visible cable. */
export function renderEnergyRoutes(host: EditorHost, actions: RouteActions): TemplateResult | typeof nothing {
  const connections = energyConnections(host.doc);
  if (!connections.length) return nothing;
  const t = host.t;
  const draft = actions.draft;
  return html`<section>
    <h3>〰 ${t("energy_routes")}</h3>
    ${hint(t("energy_routes_hint"))}
    <div class="nf-room-list">
      ${connections.map((c) => {
        const route = routeOf(host.doc, c.key);
        const drawing = draft?.key === c.key;
        return html`<div class="nf-row nf-route-row">
          <span class="nf-dev-name"><span>${connectionName(host, c)} · ${route ? t("route_points", { n: route.points.length }) : t("route_none")}</span></span>
          ${drawing
            ? html`<p class="nf-sub nf-wide">${t("route_drawing", { n: draft.points.length })}</p>
                <div class="nf-actions nf-wide">
                  <button class="nf-btn" ?disabled=${!draft.points.length} @click=${() => actions.undoPoint()}>↶ ${t("route_undo")}</button>
                  <button class="nf-btn nf-primary" @click=${() => actions.finish()}>${t("route_done")}</button>
                  <button class="nf-btn" @click=${() => actions.cancel()}>${t("cancel")}</button>
                </div>`
            : html`<div class="nf-actions">
                <button class="nf-btn" ?disabled=${!host.admin || !!draft} @click=${() => actions.start(c.key)}>✎ ${t(route ? "route_redraw" : "route_draw")}</button>
                ${route ? html`<button class="nf-btn" ?disabled=${!host.admin || !!draft} @click=${() => actions.clear(c.key)}>⨉</button>` : nothing}
              </div>
              ${route ? checkField(host, t("route_cable"), !!route.cable, (cable) => actions.setCable(c.key, cable), { title: t("route_cable_hint") }) : nothing}`}
        </div>`;
      })}
    </div>
  </section>`;
}
