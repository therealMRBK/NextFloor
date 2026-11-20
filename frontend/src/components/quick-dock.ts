import { css, html, nothing, type TemplateResult } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { entityName } from "../devices.ts";
import { translate } from "../i18n.ts";
import type { QuickControlGroup } from "../model.ts";
import type { HomeAssistant } from "../types.ts";

const rgbToHex = (rgb: unknown): string => {
  if (!Array.isArray(rgb) || rgb.length < 3) return "#ffffff";
  return `#${rgb.slice(0, 3).map((v) => Math.max(0, Math.min(255, Number(v) || 0)).toString(16).padStart(2, "0")).join("")}`;
};

const hexToRgb = (hex: string): [number, number, number] => {
  const m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex);
  return m ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)] : [255, 255, 255];
};

const isActive = (hass: HomeAssistant, id: string): boolean => {
  const st = hass.states[id]?.state;
  return st === "on" || st === "open" || st === "opening" || st === "heat" || st === "cool" || st === "auto" || st === "armed_away" || st === "armed_home" || st === "armed_night" || st === "locked";
};

function directToggle(hass: HomeAssistant, id: string): void {
  const domain = id.split(".")[0];
  const st = hass.states[id]?.state;
  if (domain === "alarm_control_panel") {
    void hass.callService("alarm_control_panel", st === "disarmed" ? "alarm_arm_away" : "alarm_disarm", { entity_id: id });
  } else if (domain === "lock") {
    void hass.callService("lock", st === "locked" ? "unlock" : "lock", { entity_id: id });
  } else if (domain === "scene" || domain === "script") {
    void hass.callService(domain, "turn_on", { entity_id: id });
  } else if (domain === "button" || domain === "input_button") {
    void hass.callService(domain, "press", { entity_id: id });
  } else {
    void hass.callService("homeassistant", "toggle", { entity_id: id });
  }
}

const isToggleable = (id: string): boolean => /^(light|switch|fan|input_boolean)\./.test(id);

export const quickDockStyles = css`
  .nf-quick-dock {
    position: absolute;
    left: 50%;
    bottom: 14px;
    transform: translateX(-50%);
    z-index: 7;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    max-width: calc(100% - 140px);
    pointer-events: auto;
  }
  .nf-qd-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    padding: 0 16px;
    border-radius: 999px;
    border: 1px solid var(--nf-line, rgba(255, 255, 255, 0.16));
    background: var(--nf-surface, rgba(16, 22, 34, 0.86));
    backdrop-filter: blur(12px);
    color: var(--nf-text, #f3f5f8);
    font: 600 14px/1 inherit;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.28);
    transition: transform 0.12s ease, border-color 0.15s ease, background 0.15s ease;
  }
  .nf-qd-btn:active { transform: scale(0.96); }
  .nf-qd-btn[aria-expanded="true"] { border-color: var(--nf-accent, #40b8ff); }
  .nf-qd-btn.nf-qd-on { background: color-mix(in srgb, var(--nf-accent, #40b8ff) 22%, var(--nf-surface, rgba(16, 22, 34, 0.9))); }
  .nf-quick-popup {
    position: absolute;
    left: 50%;
    bottom: 68px;
    transform: translateX(-50%);
    z-index: 8;
    width: min(420px, calc(100% - 24px));
    max-height: min(62vh, 480px);
    overflow-y: auto;
    padding: 14px;
    border-radius: 18px;
    border: 1px solid var(--nf-line, rgba(255, 255, 255, 0.18));
    background: var(--nf-surface, rgba(16, 22, 34, 0.94));
    backdrop-filter: blur(16px);
    color: var(--nf-text, #f3f5f8);
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.42);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .nf-qp-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
  .nf-qp-head h4 { margin: 0; font-size: 15px; }
  .nf-qp-actions { display: flex; align-items: center; gap: 6px; }
  .nf-qp-row {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 10px 12px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
  .nf-qp-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
  .nf-qp-name { font-weight: 600; font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .nf-qp-sliders { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
  .nf-qp-sliders input[type="range"] { flex: 1; min-width: 110px; height: 28px; accent-color: var(--nf-accent, #40b8ff); }
  .nf-qp-sliders input[type="color"] { width: 38px; height: 32px; border: none; border-radius: 8px; background: none; padding: 0; cursor: pointer; }
  .nf-qp-toggle {
    min-width: 58px;
    min-height: 34px;
    padding: 0 12px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.08);
    color: inherit;
    font: 600 12px/1 inherit;
    cursor: pointer;
  }
  .nf-qp-toggle.on { background: var(--nf-accent, #40b8ff); color: #09131f; border-color: transparent; }
`;

export function renderQuickDock(
  hass: HomeAssistant | undefined,
  groups: readonly QuickControlGroup[],
  openId: string | null,
  onToggleOpen: (id: string | null) => void,
): TemplateResult | typeof nothing {
  if (!hass || !groups.length) return nothing;
  const openGroup = groups.find((g) => g.id === openId) ?? null;

  const toggleAll = (g: QuickControlGroup, turnOn: boolean) => {
    const ids = g.entities.filter(isToggleable);
    if (ids.length) void hass.callService("homeassistant", turnOn ? "turn_on" : "turn_off", { entity_id: ids });
  };

  const renderEntity = (id: string) => {
    const st = hass.states[id];
    const name = entityName(hass, id);
    const domain = id.split(".")[0];
    const on = isActive(hass, id);
    const attrs = st?.attributes ?? {};

    if (domain === "light") {
      const modes = Array.isArray(attrs.supported_color_modes) ? (attrs.supported_color_modes as string[]) : [];
      const hasBrightness = typeof attrs.brightness === "number" || modes.some((m) => m !== "onoff");
      const hasColor = modes.some((m) => ["rgb", "hs", "xy", "rgbw", "rgbww"].includes(m));
      const briPct = typeof attrs.brightness === "number" ? Math.round((attrs.brightness / 255) * 100) : on ? 100 : 0;
      return html`<div class="nf-qp-row">
        <div class="nf-qp-top">
          <span class="nf-qp-name">${name}</span>
          <button class="nf-qp-toggle ${on ? "on" : ""}" @click=${() => void hass.callService("light", "toggle", { entity_id: id })}>
            ${on ? `${briPct}%` : translate(hass, "state_off")}
          </button>
        </div>
        ${hasBrightness || hasColor
          ? html`<div class="nf-qp-sliders">
              ${hasBrightness
                ? html`<input type="range" min="0" max="100" .value=${String(briPct)} @change=${(e: Event) => {
                    const v = Number((e.target as HTMLInputElement).value);
                    if (v <= 0) void hass.callService("light", "turn_off", { entity_id: id });
                    else void hass.callService("light", "turn_on", { entity_id: id, brightness_pct: v });
                  }} />`
                : nothing}
              ${hasColor
                ? html`<input type="color" .value=${rgbToHex(attrs.rgb_color)} @change=${(e: Event) => {
                    const rgb = hexToRgb((e.target as HTMLInputElement).value);
                    void hass.callService("light", "turn_on", { entity_id: id, rgb_color: rgb });
                  }} />`
                : nothing}
            </div>`
          : nothing}
      </div>`;
    }

    if (domain === "cover") {
      const pos = typeof attrs.current_position === "number" ? Math.round(attrs.current_position) : on ? 100 : 0;
      return html`<div class="nf-qp-row">
        <div class="nf-qp-top">
          <span class="nf-qp-name">${name} (${pos}%)</span>
          <div class="nf-qp-actions">
            <button class="nf-qp-toggle" @click=${() => void hass.callService("cover", "open_cover", { entity_id: id })}>▲</button>
            <button class="nf-qp-toggle" @click=${() => void hass.callService("cover", "stop_cover", { entity_id: id })}>■</button>
            <button class="nf-qp-toggle" @click=${() => void hass.callService("cover", "close_cover", { entity_id: id })}>▼</button>
          </div>
        </div>
        <div class="nf-qp-sliders">
          <input type="range" min="0" max="100" .value=${String(pos)} @change=${(e: Event) => void hass.callService("cover", "set_cover_position", { entity_id: id, position: Number((e.target as HTMLInputElement).value) })} />
        </div>
      </div>`;
    }

    if (domain === "climate") {
      const target = typeof attrs.temperature === "number" ? attrs.temperature : 21;
      const cur = typeof attrs.current_temperature === "number" ? `${attrs.current_temperature}°` : "";
      return html`<div class="nf-qp-row">
        <div class="nf-qp-top">
          <span class="nf-qp-name">${name} ${cur ? `(${cur})` : ""}</span>
          <div class="nf-qp-actions">
            <button class="nf-qp-toggle" @click=${() => void hass.callService("climate", "set_temperature", { entity_id: id, temperature: target - 0.5 })}>−</button>
            <span>${target}°</span>
            <button class="nf-qp-toggle" @click=${() => void hass.callService("climate", "set_temperature", { entity_id: id, temperature: target + 0.5 })}>+</button>
          </div>
        </div>
      </div>`;
    }

    if (domain === "camera") {
      const pic = typeof attrs.entity_picture === "string" ? attrs.entity_picture : `/api/camera_proxy/${id}`;
      const src = hass.hassUrl ? hass.hassUrl(pic) : pic;
      return html`<div class="nf-qp-row">
        <div class="nf-qp-top"><span class="nf-qp-name">📷 ${name}</span></div>
        <img src=${src} alt=${name} style="width:100%;border-radius:10px;max-height:180px;object-fit:cover" />
      </div>`;
    }

    if (domain === "scene" || domain === "script" || domain === "button" || domain === "input_button") {
      const srv = domain === "button" || domain === "input_button" ? "press" : "turn_on";
      return html`<div class="nf-qp-row">
        <div class="nf-qp-top">
          <span class="nf-qp-name">${name}</span>
          <button class="nf-qp-toggle on" @click=${() => void hass.callService(domain, srv, { entity_id: id })}>▶</button>
        </div>
      </div>`;
    }

    return html`<div class="nf-qp-row">
      <div class="nf-qp-top">
        <span class="nf-qp-name">${name}</span>
        <button class="nf-qp-toggle ${on ? "on" : ""}" @click=${() => void hass.callService("homeassistant", "toggle", { entity_id: id })}>
          ${on ? translate(hass, "state_on") : translate(hass, "state_off")}
        </button>
      </div>
    </div>`;
  };

  const anyOn = openGroup ? openGroup.entities.filter(isToggleable).some((id) => isActive(hass, id)) : false;
  const hasToggle = openGroup ? openGroup.entities.some(isToggleable) : false;

  return html`
    ${openGroup
      ? html`<div class="nf-quick-popup" @pointerdown=${(e: Event) => e.stopPropagation()}>
          <div class="nf-qp-head">
            <h4>${openGroup.label}</h4>
            <div class="nf-qp-actions">
              ${hasToggle
                ? html`<button class="nf-qp-toggle ${anyOn ? "on" : ""}" @click=${() => toggleAll(openGroup, !anyOn)}>${anyOn ? translate(hass, "state_off") : translate(hass, "state_on")}</button>`
                : nothing}
              <button class="nf-qp-toggle" @click=${() => onToggleOpen(null)}>✕</button>
            </div>
          </div>
          ${openGroup.entities.map(renderEntity)}
        </div>`
      : nothing}
    <div class="nf-quick-dock" @pointerdown=${(e: Event) => e.stopPropagation()}>
      ${groups.map((g) => {
        const active = g.entities.some((id) => isActive(hass, id));
        const icon = g.icon ? (g.icon.startsWith("mdi:") ? g.icon : `mdi:${g.icon}`).replace(/[^a-z0-9:-]/gi, "") : "";
        return html`<button
          class="nf-qd-btn ${active ? "nf-qd-on" : ""}"
          aria-expanded=${g.entities.length === 1 ? nothing : openId === g.id}
          @click=${() => (g.entities.length === 1 ? directToggle(hass, g.entities[0]) : onToggleOpen(openId === g.id ? null : g.id))}
        >
          ${icon ? unsafeHTML(`<ha-icon icon="${icon}"></ha-icon>`) : nothing}
          <span>${g.label}</span>
        </button>`;
      })}
    </div>
  `;
}
