import { html, nothing, type TemplateResult } from "lit";
import { weatherEntity } from "../../../weather.ts";
import type { I18nKey } from "../../../i18n.ts";
import { DEFAULT_PAINT_INSIDE, DEFAULT_PAINT_OUTSIDE, DEFAULT_WEATHER_EFFECTS, WEATHER_EFFECTS, type Building, type RoofType } from "../../../model.ts";
import { entityName } from "../../../devices.ts";
import { entityOptions } from "../entities.ts";
import { renderCompass } from "./compass.ts";
import { renderMapSettings } from "./map.ts";
import { checkField, colorField, entityField, hint, numberField, selectField, textField } from "../fields.ts";
import type { EditorHost } from "../host.ts";
import { clamp, withEffect } from "../ops/settings.ts";

/** What choosing the "own sections" roof needs from the editor: it proposes sections from the rooms and opens the roof tool. */
export interface SettingsActions {
  useRoofSections(): void;
}

const ROOF_TYPES = ["none", "flat", "gable", "custom"] as const;

type Backdrop = NonNullable<Building["settings"]["backdrop"]>;

/** An own background behind the house: on or off, a colour, a picture and how much it is dimmed. */
function backdropFields(host: EditorHost, b: Backdrop | null, onChange: (b: Backdrop | null) => void): TemplateResult {
  const t = host.t;
  const on = !!b;
  const patch = (p: Partial<Backdrop>) => onChange({ color: null, image: null, dim: 0.35, ...(b ?? {}), ...p });
  return html`<div class="nf-sub nf-wide">${t("backdrop")}</div>
    ${checkField(host, t("backdrop"), on, (v) => onChange(v ? { color: "#101828", image: null, dim: 0.35 } : null))}
    ${on
      ? html`<label class="nf-field"
            >${t("backdrop_color")}
            <input type="color" .value=${b?.color ?? "#101828"} ?disabled=${!host.admin} @change=${(e: Event) => patch({ color: (e.target as HTMLInputElement).value })}
          /></label>
          ${numberField(host, t("backdrop_dim"), Math.round((b?.dim ?? 0.35) * 100), (v) => patch({ dim: clamp(v, 0, 80) / 100 }), 5, 0)}
          ${textField(host, t("backdrop_image"), b?.image ?? "", (v) => patch({ image: v || null }), { wide: true, placeholder: "/local/hintergrund.jpg" })}
          ${hint(t("backdrop_hint"), "nf-wide")}`
      : nothing}`;
}

/** Wall thickness, grid, north, roof shape, the weather source and its effects. */
/** The plan's own sensors at the top of the 3D view: the chosen ones as chips to remove, and a picker to add one. */
function statusFields(host: EditorHost, ids: string[], set: (ids: string[]) => void): TemplateResult {
  const t = host.t;
  const options = entityOptions(host.hass, (id) => !ids.includes(id) && /^(sensor|binary_sensor|alarm_control_panel|weather|input_|counter|lock|climate|person|sun)\b/.test(id));
  return html`<div class="nf-sub nf-wide">${t("status_entities")}</div>
    ${ids.length
      ? html`<div class="nf-chips nf-wide">
          ${ids.map(
            (id) => html`<span class="nf-chip">${entityName(host.hass, id)}
              ${host.admin ? html`<button class="nf-chip-x" title=${t("delete")} aria-label=${`${t("delete")}: ${entityName(host.hass, id)}`} @click=${() => set(ids.filter((x) => x !== id))}>×</button>` : nothing}</span
            >`,
          )}
        </div>`
      : nothing}
    ${ids.length < 12 ? entityField(host, t("status_add"), null, undefined, options, (v) => v && v !== "none" && set([...ids, v])) : nothing}
    ${hint(t("status_entities_hint"), "nf-wide")}`;
}

export function renderSettings(host: EditorHost, actions: SettingsActions): TemplateResult {
  const t = host.t;
  const s = host.doc.settings;
  const set = (patch: Partial<Building["settings"]>) => host.replace({ ...structuredClone(host.doc), settings: { ...structuredClone(host.doc.settings), ...patch } });
  const setRoof = (patch: Partial<Building["settings"]["roof"]>) => set({ roof: { ...s.roof, ...patch } });
  const roofChoices = ROOF_TYPES.map((type): [RoofType, string] => [type, t(`roof_${type}` as I18nKey)]);
  const current = s.weather_effects ?? DEFAULT_WEATHER_EFFECTS;
  const gable = s.roof.type === "gable";
  return html`<details class="nf-section">
    <summary>${t("settings")}</summary>
    <div class="nf-form">
      ${numberField(host, t("wall_exterior"), s.wall_exterior, (v) => set({ wall_exterior: clamp(v, 0.02, 1) }), 0.01, 0.02)}
      ${numberField(host, t("wall_interior"), s.wall_interior, (v) => set({ wall_interior: clamp(v, 0.02, 1) }), 0.01, 0.02)}
      ${colorField(host, t("wall_paint_outside"), s.wall_paint_outside, DEFAULT_PAINT_OUTSIDE, (v) => set({ wall_paint_outside: v }))}
      ${colorField(host, t("wall_paint_inside"), s.wall_paint_inside, DEFAULT_PAINT_INSIDE, (v) => set({ wall_paint_inside: v }))}
      ${hint(t("wall_paint_hint"), "nf-wide")}
      ${numberField(host, t("grid"), s.grid, (v) => set({ grid: clamp(v, 0.01, 1) }), 0.01, 0.01)}
      ${selectField(host, t("units"), s.units === "imperial" ? "imperial" : "metric", [["metric", t("units_metric")], ["imperial", t("units_imperial")]] as const, (v) => set({ units: v === "imperial" ? "imperial" : null }), { title: t("units_hint") })}
      ${renderCompass(host, s.north, (north) => set({ north }))}
      ${renderMapSettings(host, host.doc, (map) => set({ map }))}
      ${selectField(host, t("roof"), s.roof.type, roofChoices, (type) => (type === "custom" ? actions.useRoofSections() : setRoof({ type })), { wide: true })}
      ${gable
        ? selectField(host, t("roof_ridge"), s.roof.ridge === "short" ? "short" : "long", [["long", t("roof_ridge_long")], ["short", t("roof_ridge_short")]], (ridge) => setRoof({ ridge: ridge === "short" ? "short" : null }), { wide: true })
        : nothing}
      ${gable ? numberField(host, t("roof_pitch"), s.roof.pitch, (v) => setRoof({ pitch: clamp(v, 5, 60) }), 1, 5) : nothing}
      ${s.roof.type !== "none" ? numberField(host, t("roof_overhang"), s.roof.overhang, (v) => setRoof({ overhang: clamp(v, 0, 2) }), 0.05, 0) : nothing}
      ${host.hass ? entityField(host, t("weather_entity"), s.weather_entity ?? null, weatherEntity(host.hass, null), entityOptions(host.hass, (id) => id.startsWith("weather.")), (v) => set({ weather_entity: v })) : nothing}
      <div class="nf-sub nf-wide">${t("weather_effects")}</div>
      ${WEATHER_EFFECTS.map((effect) => checkField(host, t(`weather_effect_${effect}` as I18nKey), current.includes(effect), (on) => set({ weather_effects: withEffect(current, effect, on) }), { wide: false }))}
      ${checkField(host, t("rain_warning"), s.rain_warning !== false, (on) => set({ rain_warning: on }))}
      ${host.hass && s.rain_warning !== false
        ? entityField(host, t("rain_sensor"), s.rain_sensor ?? null, undefined, entityOptions(host.hass, (id) => /^(binary_sensor|sensor)\./.test(id)), (v) => set({ rain_sensor: v === "none" ? null : v }))
        : nothing}
      ${host.hass && s.rain_warning !== false && s.rain_sensor && s.rain_sensor !== "none" ? checkField(host, t("rain_sensor_inverted"), !!s.rain_sensor_inverted, (on) => set({ rain_sensor_inverted: on || undefined }), { title: t("rain_sensor_inverted_hint") }) : nothing}
      ${host.hass ? entityField(host, t("outage_sensor"), s.outage_sensor ?? null, undefined, entityOptions(host.hass, (id) => /^(binary_sensor|sensor)\./.test(id)), (v) => set({ outage_sensor: v === "none" ? null : v })) : nothing}
      ${hint(t("outage_hint"), "nf-wide")}
      ${checkField(host, t("contact_warning"), !!s.contact_warning, (on) => set({ contact_warning: on || undefined }), { title: t("contact_warning_hint") })}
      ${checkField(host, t("night_lock_warning"), !!s.night_lock_warning, (on) => set({ night_lock_warning: on || undefined }), { title: t("night_lock_warning_hint") })}
      ${selectField(host, t("room_double_tap"), s.room_double_tap ?? "area", [["area", t("room_double_tap_area")], ["plan", t("room_double_tap_plan")], ["off", t("room_double_tap_off")]] as const, (v) => set({ room_double_tap: v === "plan" || v === "off" ? v : null }), { title: t("room_double_tap_hint") })}
      ${checkField(host, t("motion_markers_active"), !!s.motion_markers_active, (on) => set({ motion_markers_active: on || undefined }), { title: t("motion_markers_active_hint") })}
      ${host.hass ? statusFields(host, s.status_entities ?? [], (status_entities) => set({ status_entities: status_entities.length ? status_entities : null })) : nothing}
      ${host.hass ? entityField(host, t("announce_tts"), s.announce_tts ?? null, undefined, entityOptions(host.hass, (id) => id.startsWith("tts.")), (v) => set({ announce_tts: v === "none" ? null : v })) : nothing}
      <label class="nf-field nf-wide"
        >${t("announce_phrases")}
        <textarea
          rows="4"
          ?disabled=${!host.admin}
          .value=${(s.announce_phrases ?? []).join("\n")}
          placeholder=${[1, 2, 3, 4, 5].map((n) => t(`announce_phrase_${n}` as I18nKey)).join("\n")}
          @change=${(e: Event) => {
            const lines = (e.target as HTMLTextAreaElement).value.split("\n").map((l) => l.trim().slice(0, 200)).filter(Boolean).slice(0, 30);
            set({ announce_phrases: lines.length ? lines : null });
          }}
        ></textarea>
      </label>
      ${hint(t("announce_phrases_hint"), "nf-wide")}
      ${checkField(host, t("sun_patches"), s.sun_patches !== false, (on) => set({ sun_patches: on }), { title: t("sun_patches_hint") })}
      ${checkField(host, t("sun_arc"), s.sun_arc === true, (on) => set({ sun_arc: on }), { title: t("sun_arc_hint") })}
      ${backdropFields(host, s.backdrop ?? null, (backdrop) => set({ backdrop }))}
    </div>
    ${hint(`${t("north_hint")} ${t("weather_entity_hint")}`)}
  </details>`;
}
