// The form of a placed device: where it hangs, how high, how it is turned, and how its marker shows.

import { html, nothing, type TemplateResult } from "lit";
import { defaultHeight, entityKind, entityName, hasScreen, kindOf, TOGGLE_KINDS } from "../../../devices.ts";
import type { I18nKey } from "../../../i18n.ts";
import { iconPath } from "../../../icons.ts";
import { ceilingAt, FURNITURE_TYPES, isLamp, type LampMount, type Placement } from "../../../model.ts";
import { packItemLabel, packLabel } from "../../../furniture-names.ts";
import { isClimateFurniture, isElectric, isPackType, packType, type FurniturePack } from "../../../packs.ts";
import { checkField, deviceIcon, glowField, iconField, markerField, numberField, selectField, textField } from "../fields.ts";
import type { EditorHost } from "../host.ts";
import { lightEffectFields } from "../light-effect-fields.ts";
import { pluginDeviceSettings, pluginText, settingsWithDefaults } from "../../../plugins/registry.ts";

export interface DeviceActions {
  update(patch: Partial<Placement>): void;
  centre(): void;
  remove(): void;
  asFurniture(placed: Placement, type: string): void;
  packs: readonly FurniturePack[];
  lockButton: TemplateResult | typeof nothing;
}

const SPEAKER_LIKE = /speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/;

/** Furniture that can stand for a device of this kind: a speaker for a media player, a lamp for a light, and so on. */
export function furnitureFor(host: EditorHost, entityId: string, packs: readonly FurniturePack[]): { type: string; label: string }[] {
  const kind = kindOf(entityId);
  const language = host.hass?.language ?? "en";
  const all = [
    ...FURNITURE_TYPES.map((type) => ({ type: type as string, label: host.t(`furn_${type}` as I18nKey) })),
    ...packs.flatMap((pack) => pack.items.map((item) => ({ type: packType(pack.id, item.id), label: `${packItemLabel(item, packType(pack.id, item.id), language)} · ${packLabel(pack, language)}` }))),
  ];
  const fits = (type: string): boolean => {
    if (kind === "light") return isLamp(type);
    if (kind === "climate") return type === "radiator" || isClimateFurniture(type);
    if (entityId.startsWith("vacuum.")) return type === "robot_vacuum" || (isPackType(type) && type.endsWith(":robot_vacuum"));
    if (kind === "media") return hasScreen(type) || (isElectric(type) && SPEAKER_LIKE.test(type));
    return isElectric(type) && !isLamp(type);
  };
  return all.filter((x) => fits(x.type)).sort((a, b) => a.label.localeCompare(b.label));
}

/** The "show as furniture" drop-down: replaces the pin by a piece of furniture linked to the entity. */
function asFurniture(host: EditorHost, placed: Placement, actions: DeviceActions): TemplateResult | typeof nothing {
  if (!host.admin) return nothing;
  const options = furnitureFor(host, placed.entity_id, actions.packs);
  if (options.length === 0) return nothing;
  return html`<label class="nf-field nf-wide" title=${host.t("as_furniture_hint")}
    >${host.t("as_furniture")}
    <select @change=${(e: Event) => (e.target as HTMLSelectElement).value && actions.asFurniture(placed, (e.target as HTMLSelectElement).value)}>
      <option value="" selected>${host.t("as_furniture_pick")}</option>
      ${options.map((o) => html`<option value=${o.type}>${o.label}</option>`)}
    </select>
  </label>`;
}

/** The fields plugins add for this device (a camera's field of view, say), stored with the placement per plugin. */
function pluginFields(host: EditorHost, placed: Placement, set: (patch: Partial<Placement>) => void): TemplateResult[] {
  const language = host.hass?.language ?? "en";
  return pluginDeviceSettings(placed.entity_id, host.hass?.states[placed.entity_id]).map(({ pluginId, name, settings }) => {
    const values = settingsWithDefaults(settings, placed.plugin?.[pluginId]);
    const store = (key: string, value: string | number | boolean) => set({ plugin: { ...(placed.plugin ?? {}), [pluginId]: { ...(placed.plugin?.[pluginId] ?? {}), [key]: value } } });
    const fields = settings.map((s) => {
      const label = pluginText(s.label, language);
      const title = s.hint ? pluginText(s.hint, language) : undefined;
      if (s.type === "boolean") return checkField(host, label, values[s.key] === true, (on) => store(s.key, on), { title });
      if (s.type === "select") {
        const choices = (s.options ?? []).map(([v, l]): [string, string] => [v, pluginText(l, language)]);
        return selectField(host, label, String(values[s.key]), choices, (v) => store(s.key, v), { wide: true, title });
      }
      const clamp = (v: number) => Math.min(s.max ?? Infinity, Math.max(s.min ?? -Infinity, v));
      return numberField(host, label, Number(values[s.key]), (v) => store(s.key, clamp(v)), s.step ?? 1, s.min);
    });
    return html`<h4 class="nf-lib-head nf-wide">🔌 ${name}</h4>${fields}`;
  });
}

/** The form of the selected device. */
export function renderDeviceForm(host: EditorHost, placed: Placement, actions: DeviceActions): TemplateResult {
  const t = host.t;
  const kind = kindOf(placed.entity_id) ?? (host.hass ? entityKind(host.hass, placed.entity_id) : null);
  const light = kind === "light";
  const mount = placed.mount ?? "ceiling";
  const automatic = kind ? defaultHeight(kind, host.floor ? ceilingAt(host.floor, placed.x, placed.z) : 2.5, light ? mount : null) : 1;
  const set = (patch: Partial<Placement>) => actions.update(patch);
  const icon = deviceIcon(host, placed.entity_id, placed.icon);
  const mountChange = (value: LampMount) => set({ mount: value, y: null });
  const lampMounts = (["ceiling", "floor", "table", "wall"] as const).map((m): [LampMount, string] => [m, t(`lamp_${m}`)]);
  return html`<section>
    <div class="nf-h3row"><h3>${t("device")}</h3>${actions.lockButton}</div>
    <p class="nf-dev-title">
      ${icon
        ? html`<ha-icon class="nf-dev-icon" .icon=${icon}></ha-icon>`
        : html`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${kind ? iconPath(kind) : ""} /></svg>`}
      ${entityName(host.hass, placed.entity_id)}
    </p>
    <div class="nf-form">
      ${light ? html`${selectField(host, t("lamp_mount"), mount, lampMounts, mountChange, { wide: true })}${glowField(host, placed.glow_scale, (v) => set({ glow_scale: v }))}` : nothing}
      ${light ? lightEffectFields(host, placed, host.hass?.states[placed.entity_id]?.attributes.effect_list, set) : nothing}
      ${numberField(host, t("x"), placed.x, (v) => set({ x: v }))} ${numberField(host, t("z"), placed.z, (v) => set({ z: v }))}
      ${numberField(host, t("marker_height"), placed.y ?? automatic, (v) => set({ y: Math.max(0, v) }), 0.05, 0)}
      ${numberField(host, t("rotation"), placed.rotation ?? 0, (v) => set({ rotation: ((v % 360) + 360) % 360 }), 1)}
      ${kind && TOGGLE_KINDS.has(kind) ? checkField(host, t("device_confirm"), !!placed.confirm, (on) => set({ confirm: on }), { title: t("device_confirm_hint") }) : nothing}
      ${checkField(host, t("device_outside"), !!placed.outside, (on) => set({ outside: on || undefined }), { title: t("device_outside_hint") })}
      ${markerField(host, placed.marker ?? null, (v) => set({ marker: v }))}
      ${textField(host, t("device_name"), placed.name ?? "", (v) => set({ name: v || null }), { wide: true, maxlength: 60, title: t("device_name_hint"), placeholder: entityName(host.hass, placed.entity_id) })}
      ${placed.name ? checkField(host, t("show_name"), !!placed.show_name, (on) => set({ show_name: on || undefined })) : nothing}
      ${iconField(host, placed.icon, (v) => set({ icon: v }))}
      ${pluginFields(host, placed, set)}
    </div>
    ${host.admin
      ? html`<div class="nf-actions">
          <button class="nf-btn" @click=${() => actions.centre()}>${t("device_centre")}</button>
          ${placed.y !== null ? html`<button class="nf-btn" @click=${() => set({ y: null })}>${t("height_auto")}</button>` : nothing}
          ${asFurniture(host, placed, actions)}
          <button class="nf-btn nf-danger" @click=${() => actions.remove()}>${t("devices_remove")}</button>
        </div>`
      : nothing}
  </section>`;
}
