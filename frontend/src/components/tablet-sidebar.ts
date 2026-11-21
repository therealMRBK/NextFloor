import { css, html, nothing, type TemplateResult } from "lit";
import { entityName } from "../devices.ts";
import { translate } from "../i18n.ts";
import type { Building, TabletUI } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import { weatherEntity } from "../weather.ts";

const WEATHER_ICON: Record<string, string> = {
  "clear-night": "🌙",
  cloudy: "☁️",
  exceptional: "⚠️",
  fog: "🌫️",
  hail: "🌨️",
  lightning: "⚡",
  "lightning-rainy": "⛈️",
  partlycloudy: "⛅",
  pouring: "🌧️",
  rainy: "🌦️",
  snowy: "❄️",
  "snowy-rainy": "🌨️",
  sunny: "☀️",
  windy: "💨",
  "windy-variant": "💨",
};

export const tabletSidebarStyles = css`
  .nf-tablet-side {
    position: absolute;
    top: 56px;
    bottom: 72px;
    width: 225px;
    z-index: 6;
    display: flex;
    flex-direction: column;
    gap: 10px;
    pointer-events: auto;
    overflow-y: auto;
  }
  .nf-tablet-side.left { left: 16px; }
  .nf-tablet-side.right { right: 16px; }
  .nf-tablet-side.below-forecast { top: 132px; }
  .nf-ts-card {
    padding: 12px 14px;
    border-radius: 16px;
    border: 1px solid var(--nf-line, rgba(255, 255, 255, 0.14));
    background: var(--nf-surface, rgba(16, 22, 34, 0.82));
    backdrop-filter: blur(14px);
    color: var(--nf-text, #f3f5f8);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  }
  .nf-tablet-side.style-clean .nf-ts-card {
    background: transparent;
    border: none;
    backdrop-filter: none;
    box-shadow: none;
    padding: 4px 2px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.55);
  }
  .nf-tablet-side.style-minimal .nf-ts-card {
    background: rgba(16, 22, 34, 0.28);
    border: none;
    border-left: 2px solid var(--nf-accent, #40b8ff);
    border-radius: 8px;
    backdrop-filter: blur(6px);
    box-shadow: none;
  }
  .nf-ts-time { font-size: 32px; font-weight: 700; line-height: 1.02; letter-spacing: -0.02em; }
  .nf-ts-time.size-large { font-size: 46px; }
  .nf-ts-time.size-xl { font-size: 62px; }
  .nf-ts-date { font-size: 13px; opacity: 0.82; margin-top: 4px; text-transform: capitalize; }
  .nf-ts-weather { display: flex; align-items: center; gap: 10px; }
  .nf-ts-wicon { font-size: 28px; line-height: 1; }
  .nf-ts-wtemp { font-size: 20px; font-weight: 700; }
  .nf-ts-wcond { font-size: 12px; opacity: 0.78; }
  .nf-ts-list { display: grid; gap: 7px; font-size: 13px; }
  .nf-ts-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
  .nf-ts-val { font-weight: 600; opacity: 0.92; }
  .nf-ts-pills { display: flex; flex-wrap: wrap; gap: 6px; }
  .nf-ts-pill { font-size: 12px; padding: 3px 9px; border-radius: 999px; background: rgba(255, 255, 255, 0.1); }
  @media (max-width: 720px) {
    .nf-tablet-side { display: none; }
  }
`;

export function renderTabletSidebar(
  hass: HomeAssistant | undefined,
  building: Building | null,
  ui: TabletUI | null | undefined,
  belowForecast = false,
): TemplateResult | typeof nothing {
  const side = ui?.sidebar ?? "right";
  if (!hass || !building || side === "off") return nothing;
  const showClock = ui?.sidebar_clock !== false;
  const showWeather = ui?.sidebar_weather !== false;
  const showSummary = ui?.sidebar_summary !== false;
  const showPeople = ui?.sidebar_people !== false;
  const showEnergy = ui?.sidebar_energy !== false;
  const showMedia = ui?.sidebar_media !== false;
  if (!showClock && !showWeather && !showSummary && !showPeople && !showEnergy && !showMedia) return nothing;

  const lang = hass.language || "en";
  const now = new Date();
  const timeOpts: Intl.DateTimeFormatOptions = ui?.clock_seconds
    ? { hour: "2-digit", minute: "2-digit", second: "2-digit" }
    : { hour: "2-digit", minute: "2-digit" };
  const timeText = now.toLocaleTimeString(lang, timeOpts);
  const dateText = now.toLocaleDateString(lang, { weekday: "long", day: "numeric", month: "short" });
  const clockSize = ui?.clock_size ?? "normal";
  const clockColor = ui?.clock_color && /^#[0-9a-f]{6}$/i.test(ui.clock_color) ? `color:${ui.clock_color}` : "";
  const styleClass = `style-${ui?.sidebar_style ?? "card"}`;

  const wId = weatherEntity(hass, building.settings.weather_entity);
  const wState = wId ? hass.states[wId] : undefined;
  const wTemp = wState?.attributes.temperature;
  const wUnit = hass.config?.unit_system?.temperature ?? "°C";

  // House summary from live HA states (prefer lights placed in the plan, and exclude light groups & hidden entities)
  const states = Object.values(hass.states);
  const planLightIds = new Set<string>();
  for (const f of building.floors) {
    for (const p of f.placements) if (p.entity_id.startsWith("light.")) planLightIds.add(p.entity_id);
    for (const m of f.furniture) {
      if (m.entity?.startsWith("light.")) planLightIds.add(m.entity);
    }
  }
  const isRealLightOn = (s: (typeof states)[number]) =>
    s.entity_id.startsWith("light.") &&
    s.state === "on" &&
    !Array.isArray(s.attributes.entity_id) &&
    !hass.entities?.[s.entity_id]?.hidden;
  const lightsOn = planLightIds.size > 0
    ? [...planLightIds].filter((id) => hass.states[id] && isRealLightOn(hass.states[id])).length
    : states.filter(isRealLightOn).length;

  const openContacts = states.filter(
    (s) => s.entity_id.startsWith("binary_sensor.") && s.state === "on" && ["door", "window", "garage_door", "opening"].includes(String(s.attributes.device_class ?? "")),
  ).length;
  const alarm = states.find((s) => s.entity_id.startsWith("alarm_control_panel."));
  const temps = building.floors
    .flatMap((f) => f.rooms.map((r) => r.climate?.temperature).filter((id): id is string => !!id && id !== "none"))
    .map((id) => Number(hass.states[id]?.state))
    .filter((n) => Number.isFinite(n));
  const avgTemp = temps.length ? (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(1) : null;
  const extraIds = building.settings.status_entities ?? [];

  const peopleHome = showPeople ? states.filter((s) => s.entity_id.startsWith("person.") && s.state === "home") : [];
  const playing = showMedia ? states.find((s) => s.entity_id.startsWith("media_player.") && s.state === "playing") : undefined;
  const gridPower = building.energy.grid ? hass.states[building.energy.grid] : undefined;
  const solarPower = building.energy.solar ? hass.states[building.energy.solar] : undefined;
  const batSoc = building.energy.battery_soc ? hass.states[building.energy.battery_soc] : undefined;
  const hasEnergy = showEnergy && (gridPower || solarPower || batSoc);

  return html`<aside class="nf-tablet-side ${side} ${styleClass} ${belowForecast && side === "right" ? "below-forecast" : ""}" @pointerdown=${(e: Event) => e.stopPropagation()}>
    ${showClock
      ? html`<div class="nf-ts-card">
          <div class="nf-ts-time size-${clockSize}" style=${clockColor}>${timeText}</div>
          <div class="nf-ts-date">${dateText}</div>
        </div>`
      : nothing}
    ${showWeather && wState
      ? html`<div class="nf-ts-card nf-ts-weather">
          <span class="nf-ts-wicon">${WEATHER_ICON[wState.state] ?? "🌤️"}</span>
          <div>
            <div class="nf-ts-wtemp">${typeof wTemp === "number" ? `${wTemp}${wUnit}` : wState.state}</div>
            <div class="nf-ts-wcond">${wState.state}</div>
          </div>
        </div>`
      : nothing}
    ${showSummary
      ? html`<div class="nf-ts-card nf-ts-list">
          <div class="nf-ts-row"><span>💡 ${translate(hass, "tablet_lights_on")}</span><span class="nf-ts-val">${lightsOn}</span></div>
          <div class="nf-ts-row"><span>🚪 ${translate(hass, "tablet_openings")}</span><span class="nf-ts-val">${openContacts}</span></div>
          ${avgTemp ? html`<div class="nf-ts-row"><span>🌡️ ${translate(hass, "tablet_indoor")}</span><span class="nf-ts-val">${avgTemp}${wUnit}</span></div>` : nothing}
          ${alarm ? html`<div class="nf-ts-row"><span>🛡️ ${entityName(hass, alarm.entity_id)}</span><span class="nf-ts-val">${alarm.state}</span></div>` : nothing}
          ${extraIds.map((id) => {
            const st = hass.states[id];
            if (!st) return nothing;
            const unit = typeof st.attributes.unit_of_measurement === "string" ? ` ${st.attributes.unit_of_measurement}` : "";
            return html`<div class="nf-ts-row"><span>${building.settings.status_names?.[id] || entityName(hass, id)}</span><span class="nf-ts-val">${st.state}${unit}</span></div>`;
          })}
        </div>`
      : nothing}
    ${hasEnergy
      ? html`<div class="nf-ts-card nf-ts-list">
          ${gridPower ? html`<div class="nf-ts-row"><span>⚡ ${translate(hass, "tablet_power")}</span><span class="nf-ts-val">${gridPower.state} ${gridPower.attributes.unit_of_measurement ?? "W"}</span></div>` : nothing}
          ${solarPower ? html`<div class="nf-ts-row"><span>☀️ ${translate(hass, "tablet_solar")}</span><span class="nf-ts-val">${solarPower.state} ${solarPower.attributes.unit_of_measurement ?? "W"}</span></div>` : nothing}
          ${batSoc ? html`<div class="nf-ts-row"><span>🔋 ${translate(hass, "tablet_battery")}</span><span class="nf-ts-val">${batSoc.state}%</span></div>` : nothing}
        </div>`
      : nothing}
    ${peopleHome.length
      ? html`<div class="nf-ts-card nf-ts-pills">
          ${peopleHome.map((p) => html`<span class="nf-ts-pill">🏠 ${entityName(hass, p.entity_id)}</span>`)}
        </div>`
      : nothing}
    ${playing
      ? html`<div class="nf-ts-card nf-ts-list">
          <div class="nf-ts-row">
            <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">🎵 ${String(playing.attributes.media_title || entityName(hass, playing.entity_id))}</span>
            <span>
              <button class="nf-ts-pill" style="border:none;color:inherit;cursor:pointer" @click=${() => void hass.callService("media_player", "media_play_pause", { entity_id: playing.entity_id })}>⏯</button>
              <button class="nf-ts-pill" style="border:none;color:inherit;cursor:pointer" @click=${() => void hass.callService("media_player", "media_next_track", { entity_id: playing.entity_id })}>⏭</button>
            </span>
          </div>
          ${playing.attributes.media_artist ? html`<div style="font-size:11px;opacity:0.72;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${String(playing.attributes.media_artist)}</div>` : nothing}
        </div>`
      : nothing}
  </aside>`;
}
