import { css, html, nothing, type TemplateResult } from "lit";
import { entityName } from "../devices.ts";
import { translate } from "../i18n.ts";
import type { Building, StartView, TabletUI } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import { weatherEntity } from "../weather.ts";

export interface CameraBookmark {
  id: string;
  name: string;
  view: StartView;
}

const CAM_KEY = "nextfloor.camViews";

export function loadCamBookmarks(): CameraBookmark[] {
  try {
    const raw = localStorage.getItem(CAM_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((b) => b && typeof b.id === "string" && typeof b.name === "string" && b.view) : [];
  } catch {
    return [];
  }
}

export function saveCamBookmarks(list: CameraBookmark[]): void {
  try {
    localStorage.setItem(CAM_KEY, JSON.stringify(list.slice(0, 8)));
  } catch {
    // storage blocked
  }
}

export const kioskExtrasStyles = css`
  .nf-pip-cam {
    position: absolute;
    left: 16px;
    top: 64px;
    z-index: 14;
    width: min(340px, calc(100% - 32px));
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid var(--nf-line, rgba(255, 255, 255, 0.2));
    background: var(--nf-surface, rgba(14, 20, 30, 0.94));
    backdrop-filter: blur(14px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    color: var(--nf-text, #f3f5f8);
    pointer-events: auto;
  }
  .nf-pip-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 8px 12px;
    font: 600 13px/1 inherit;
  }
  .nf-pip-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ff4d4f;
    margin-right: 6px;
    box-shadow: 0 0 8px #ff4d4f;
  }
  .nf-pip-close {
    border: none;
    background: rgba(255, 255, 255, 0.12);
    color: inherit;
    border-radius: 999px;
    width: 26px;
    height: 26px;
    cursor: pointer;
  }
  .nf-pip-cam img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    cursor: pointer;
  }
  .nf-screensaver {
    position: absolute;
    inset: 0;
    z-index: 25;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: rgba(6, 10, 18, 0.78);
    backdrop-filter: blur(6px);
    color: #f3f6fa;
    cursor: pointer;
    pointer-events: auto;
    user-select: none;
  }
  .nf-ss-time {
    font: 700 clamp(56px, 14vmin, 132px)/1 inherit;
    letter-spacing: -0.03em;
    font-variant-numeric: tabular-nums;
    text-shadow: 0 6px 28px rgba(0, 0, 0, 0.6);
  }
  .nf-ss-date {
    font: 500 clamp(16px, 2.8vmin, 26px)/1.2 inherit;
    opacity: 0.78;
    text-transform: capitalize;
  }
  .nf-ss-weather {
    margin-top: 8px;
    font: 600 clamp(16px, 2.5vmin, 22px)/1.2 inherit;
    opacity: 0.88;
  }
  .nf-cam-views {
    position: absolute;
    /* beside the round buttons at the bottom left (the star, search, eye, lock, walk), not over them */
    left: 236px;
    bottom: 22px;
    z-index: 6;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    max-width: min(360px, calc(100% - 260px));
    pointer-events: auto;
  }
  @media (max-width: 620px) {
    .nf-cam-views {
      left: 14px;
      bottom: 150px;
      max-width: calc(100% - 28px);
    }
  }
  .nf-cam-pill {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    height: 32px;
    padding: 0 11px;
    border-radius: 999px;
    border: 1px solid var(--nf-line, rgba(255, 255, 255, 0.16));
    background: var(--nf-surface, rgba(16, 22, 34, 0.82));
    backdrop-filter: blur(10px);
    color: var(--nf-text, #f3f5f8);
    font: 600 12px/1 inherit;
    cursor: pointer;
  }
  .nf-cam-pill:hover { border-color: var(--nf-accent, #40b8ff); }
  .nf-cam-del {
    margin-left: 2px;
    opacity: 0.55;
    font-size: 11px;
  }
  .nf-cam-del:hover { opacity: 1; color: #ff6b6b; }
`;

export function renderPipCamera(
  hass: HomeAssistant | undefined,
  cameraId: string | null,
  tick: number,
  onClose: () => void,
  onExpand: (id: string) => void,
): TemplateResult | typeof nothing {
  if (!hass || !cameraId || !hass.states[cameraId]) return nothing;
  const st = hass.states[cameraId];
  const base = typeof st.attributes.entity_picture === "string" ? st.attributes.entity_picture : `/api/camera_proxy/${cameraId}`;
  const sep = base.includes("?") ? "&" : "?";
  const url = `${hass.hassUrl ? hass.hassUrl(base) : base}${sep}_t=${tick}`;
  return html`<div class="nf-pip-cam" @pointerdown=${(e: Event) => e.stopPropagation()}>
    <div class="nf-pip-head">
      <span><span class="nf-pip-dot"></span>${entityName(hass, cameraId)}</span>
      <button class="nf-pip-close" @click=${onClose} aria-label=${translate(hass, "close")}>✕</button>
    </div>
    <img src=${url} alt=${entityName(hass, cameraId)} @click=${() => onExpand(cameraId)} />
  </div>`;
}

export function renderScreensaver(
  hass: HomeAssistant | undefined,
  building: Building | null,
  ui: TabletUI | null | undefined,
  onWake: () => void,
): TemplateResult | typeof nothing {
  if (!hass) return nothing;
  const lang = hass.language || "en";
  const now = new Date();
  const timeOpts: Intl.DateTimeFormatOptions = ui?.clock_seconds
    ? { hour: "2-digit", minute: "2-digit", second: "2-digit" }
    : { hour: "2-digit", minute: "2-digit" };
  const wId = weatherEntity(hass, building?.settings.weather_entity);
  const wSt = wId ? hass.states[wId] : undefined;
  const wTemp = wSt?.attributes.temperature;
  const wUnit = hass.config?.unit_system?.temperature ?? "°C";
  const color = ui?.clock_color && /^#[0-9a-f]{6}$/i.test(ui.clock_color) ? `color:${ui.clock_color}` : "";
  return html`<div
    class="nf-screensaver"
    @pointerdown=${(e: Event) => {
      e.stopPropagation();
      e.preventDefault();
      onWake();
    }}
  >
    <div class="nf-ss-time" style=${color}>${now.toLocaleTimeString(lang, timeOpts)}</div>
    <div class="nf-ss-date">${now.toLocaleDateString(lang, { weekday: "long", day: "numeric", month: "long" })}</div>
    ${wSt ? html`<div class="nf-ss-weather">${typeof wTemp === "number" ? `${wTemp}${wUnit}` : ""} · ${wSt.state}</div>` : nothing}
  </div>`;
}

export function renderCamBookmarks(
  hass: HomeAssistant | undefined,
  bookmarks: readonly CameraBookmark[],
  canEdit: boolean,
  onGo: (b: CameraBookmark) => void,
  onAdd: () => void,
  onRemove: (id: string) => void,
): TemplateResult | typeof nothing {
  if (!hass || (!bookmarks.length && !canEdit)) return nothing;
  return html`<div class="nf-cam-views" @pointerdown=${(e: Event) => e.stopPropagation()}>
    ${bookmarks.map(
      (b) => html`<button class="nf-cam-pill" @click=${() => onGo(b)}>
        <span>🎥 ${b.name}</span>
        ${canEdit
          ? html`<span
              class="nf-cam-del"
              title=${translate(hass, "close")}
              @click=${(e: Event) => {
                e.stopPropagation();
                onRemove(b.id);
              }}
            >×</span>`
          : nothing}
      </button>`,
    )}
    ${canEdit && bookmarks.length < 8
      ? html`<button class="nf-cam-pill" title=${translate(hass, "cam_bookmark_add")} @click=${onAdd}>+ 🎥</button>`
      : nothing}
  </div>`;
}
