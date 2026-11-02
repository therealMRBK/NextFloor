/**
 * NextFloor's floating glass cards: they hang over a point of the plan (the viewer reports where that point is
 * on screen after every frame, see setLiveAnchors) and tell what is going on there.
 *
 *  - "house": the energy balance – sun, house, battery, grid – with the share of the house running on its own power
 *  - "car": a parked car's charge, range and charging, with buttons for lock, climate and charging; away it tells where
 *  - "media": what a speaker or TV plays – cover, title, artist – with play/pause, skip and the volume
 *
 * Cards are rendered by Lit; their position is set directly on the element by the 3D view (no render per frame).
 */
import { css, html, nothing, svg, type TemplateResult } from "lit";
import type { EnergySummary } from "../energy.ts";
import { socColor, type CarInfo } from "./car.ts";
import type { MediaNow } from "./media.ts";
import { formatNumber, translate } from "../i18n.ts";
import type { HomeAssistant } from "../types.ts";
import { curvePath } from "./day-curves.ts";
import type { PrinterInfo } from "./printer.ts";
import type { HeatPumpInfo } from "./heat-pump.ts";
import type { PlanPoint } from "../viewer/live-energy.ts";

export interface HouseCard {
  kind: "house";
  at: PlanPoint;
  summary: EnergySummary;
  autarky: number | null;
  /** Solar and consumption over the last 24 hours (quarter hours), when the history could be loaded. */
  curves?: { solar: (number | null)[]; use: (number | null)[] };
  /** Solar and consumption per day over the last seven days (kWh), from the long-term statistics. */
  week?: { days: number[]; solar: (number | null)[]; use: (number | null)[] };
  /** Gas and water meters: their icon, name and what they read now. */
  meters?: { icon: string; label: string; value: string }[];
}

export interface CarCard {
  kind: "car";
  at: PlanPoint;
  spot: string;
  name: string;
  car: CarInfo;
}

export interface MediaCard {
  kind: "media";
  at: PlanPoint;
  media: MediaNow;
}

export interface PrinterCard {
  kind: "printer";
  at: PlanPoint;
  name: string;
  printer: PrinterInfo;
}

export interface HeatPumpCard {
  kind: "heatpump";
  at: PlanPoint;
  name: string;
  pump: HeatPumpInfo;
}

export type LiveCard = HouseCard | CarCard | MediaCard | PrinterCard | HeatPumpCard;

/** A button on a card was pressed: the 3D view calls the service (with extra data such as the volume). */
export type LiveCardAction = (domain: string, service: string, entity: string, data?: Record<string, unknown>) => void;

function watts(hass: HomeAssistant | undefined, w: number): string {
  const a = Math.abs(w);
  return a >= 1000 ? `${formatNumber(hass, a / 1000, a >= 10000 ? 1 : 2)} kW` : `${Math.round(a)} W`;
}

/** A ring that fills with a share (0…1). */
function ring(share: number, color: string): TemplateResult {
  const r = 22;
  const c = 2 * Math.PI * r;
  return html`<svg class="live-ring" viewBox="0 0 54 54" aria-hidden="true">
    ${svg`<circle cx="27" cy="27" r=${r} class="live-ring-bg"></circle>
    <circle cx="27" cy="27" r=${r} stroke=${color} stroke-dasharray=${`${(c * Math.max(0, Math.min(1, share))).toFixed(1)} ${c.toFixed(1)}`} transform="rotate(-90 27 27)" class="live-ring-fg"></circle>`}
  </svg>`;
}

function houseCard(hass: HomeAssistant | undefined, c: HouseCard, i: number): TemplateResult {
  const s = c.summary;
  const t = (k: Parameters<typeof translate>[1]) => translate(hass, k);
  const rows: TemplateResult[] = [];
  if (s.solar !== null) rows.push(html`<div class="live-row live-solar"><span>☀ ${t("energy_solar")}</span><b>${watts(hass, s.solar)}</b></div>`);
  if (s.consumption !== null) rows.push(html`<div class="live-row live-house"><span>⌂ ${t("energy_consumption")}</span><b>${watts(hass, s.consumption)}</b></div>`);
  if (s.rest !== undefined && s.rest !== null) rows.push(html`<div class="live-row live-house"><span>⌂ ${t("energy_rest")}</span><b>${watts(hass, s.rest)}</b></div>`);
  if (s.battery !== null || s.soc !== null) {
    const dir = s.battery === null || Math.abs(s.battery) < 15 ? "" : s.battery > 0 ? " ↓" : " ↑";
    rows.push(
      html`<div class="live-row live-battery"><span>▮ ${t("energy_battery")}${dir}</span><b>${s.soc !== null ? `${Math.round(s.soc)} %` : ""}${s.battery !== null && Math.abs(s.battery) >= 15 ? ` · ${watts(hass, s.battery)}` : ""}</b></div>`,
    );
  }
  if (s.grid !== null) {
    const exporting = s.grid < -15;
    rows.push(html`<div class="live-row ${exporting ? "live-export" : "live-import"}"><span>⇄ ${t(exporting ? "energy_grid_export" : "energy_grid_import")}</span><b>${watts(hass, s.grid)}</b></div>`);
  }
  for (const m of c.meters ?? []) rows.push(html`<div class="live-row live-meter"><span>${m.icon} ${m.label}</span><b>${m.value}</b></div>`);
  const own = c.autarky;
  return html`<div class="live-card live-card-house" data-i=${i}>
    ${own !== null
      ? html`<div class="live-own">${ring(own, own > 0.95 ? "#4ade80" : own > 0.6 ? "#facc15" : "#f87171")}<div class="live-own-text"><b>${Math.round(own * 100)} %</b><span>${t("live_autarky")}</span></div></div>`
      : nothing}
    <div class="live-rows">${rows}</div>
    ${dayChart(hass, c.curves)} ${weekChart(hass, c.week)}
  </div>`;
}

/** The last seven days: a bar per day for solar (filled) and consumption (outlined), in kWh. */
function weekChart(hass: HomeAssistant | undefined, week: HouseCard["week"]): TemplateResult | typeof nothing {
  if (!week) return nothing;
  const values = [...week.solar, ...week.use].filter((v): v is number => v !== null);
  if (!values.length) return nothing;
  const top = Math.max(...values) * 1.1 || 1;
  const [w, h] = [150, 30];
  const slot = w / 7;
  const bar = (v: number | null, x: number, cls: string) => (v === null || v <= 0 ? nothing : svg`<rect x=${x.toFixed(1)} y=${(h - (v / top) * h).toFixed(1)} width=${(slot * 0.36).toFixed(1)} height=${((v / top) * h).toFixed(1)} class=${cls}></rect>`);
  const total = (list: (number | null)[]) => list.reduce<number>((a, b) => a + (b ?? 0), 0);
  return html`<div class="live-day live-week" title=${translate(hass, "live_week_hint", { solar: formatNumber(hass, total(week.solar), 0), use: formatNumber(hass, total(week.use), 0) })}>
    <svg viewBox=${`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden="true">
      ${week.days.map((_, k) => svg`${bar(week.solar[k], k * slot + slot * 0.1, "live-week-solar")}${bar(week.use[k], k * slot + slot * 0.5, "live-week-use")}`)}
    </svg>
    <span>7 ${translate(hass, "live_days")}</span>
  </div>`;
}

/** The day at a glance: solar as a filled curve, consumption as a line, over the last 24 hours. */
function dayChart(hass: HomeAssistant | undefined, curves: HouseCard["curves"]): TemplateResult | typeof nothing {
  if (!curves) return nothing;
  const values = [...curves.solar, ...curves.use].filter((v): v is number => v !== null);
  if (values.length < 4) return nothing;
  const top = Math.max(...values) * 1.08 || 1;
  const [w, h] = [150, 34];
  const solar = curvePath(curves.solar, w, h, top);
  const use = curvePath(curves.use, w, h, top);
  return html`<div class="live-day" title=${translate(hass, "live_day_hint")}>
    <svg viewBox=${`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden="true">
      ${solar ? svg`<path d=${`${solar}L${w},${h}L0,${h}Z`} class="live-day-solar"></path>` : nothing}
      ${use ? svg`<path d=${use} class="live-day-use"></path>` : nothing}
    </svg>
    <span>24 h</span>
  </div>`;
}

function carCard(hass: HomeAssistant | undefined, c: CarCard, i: number, act: LiveCardAction): TemplateResult {
  const car = c.car;
  const t = (k: Parameters<typeof translate>[1], v?: Record<string, string | number>) => translate(hass, k, v);
  const color = socColor(car.soc);
  const status = !car.home
    ? `${t("live_car_away")}${car.where ? ` · ${car.where}` : ""}${car.distance !== null ? ` · ${formatNumber(hass, car.distance, car.distance < 10 ? 1 : 0)} km` : ""}`
    : car.charging
      ? `⚡ ${t("live_car_charging")}${car.chargingW ? ` · ${watts(hass, car.chargingW)}` : ""}`
      : car.plugged
        ? `🔌 ${t("live_car_plugged")}`
        : "";
  const e = car.entities;
  const button = (on: boolean | null, label: string, icon: string, run: () => void) =>
    html`<button class="live-btn ${on ? "live-on" : ""}" title=${label} aria-label=${label} aria-pressed=${on ?? false} @click=${(ev: Event) => (ev.stopPropagation(), run())}>${icon}</button>`;
  return html`<div class="live-card live-card-car ${car.charging ? "live-charging" : ""} ${car.home ? "" : "live-away"}" data-i=${i} style=${`--live-soc:${color}`}>
    <div class="live-own">
      ${ring((car.soc ?? 0) / 100, color)}
      <div class="live-own-text"><b>${car.soc !== null ? `${Math.round(car.soc)} %` : "–"}</b><span>${car.range !== null ? `${Math.round(car.range)} ${car.rangeUnit}` : ""}</span></div>
    </div>
    <div class="live-rows">
      <div class="live-title">${c.name}</div>
      ${status ? html`<div class="live-status">${status}</div>` : nothing}
      ${car.inside !== null ? html`<div class="live-status">🌡 ${formatNumber(hass, car.inside, 1)} °C</div>` : nothing}
      ${car.departure ? html`<div class="live-status">⏰ ${t("live_car_departure", { time: car.departure })}</div>` : nothing}
      ${car.open.length ? html`<div class="live-status live-warn">⚠ ${t("live_car_open", { parts: car.open.join(", ") })}</div>` : nothing}
      <div class="live-actions">
        ${e.lock
          ? button(car.locked, t(car.locked ? "live_car_unlock" : "live_car_lock"), car.locked ? "🔒" : "🔓", () => {
              if (car.locked && !confirm(t("live_car_unlock_confirm", { name: c.name }))) return;
              act("lock", car.locked ? "unlock" : "lock", e.lock!);
            })
          : nothing}
        ${e.climate ? button(car.climateOn, t("live_car_climate"), "❄", () => act(e.climate!.split(".")[0], car.climateOn ? "turn_off" : "turn_on", e.climate!)) : nothing}
        ${e.charge && car.home ? button(car.charging, t("live_car_charge"), "⚡", () => act(e.charge!.split(".")[0], "toggle", e.charge!)) : nothing}
      </div>
    </div>
  </div>`;
}

function mediaCard(hass: HomeAssistant | undefined, c: MediaCard, i: number, act: LiveCardAction): TemplateResult {
  const m = c.media;
  const t = (k: Parameters<typeof translate>[1]) => translate(hass, k);
  const color = `rgb(${m.color.join(",")})`;
  const btn = (label: string, icon: string, service: string) =>
    html`<button class="live-btn" title=${label} aria-label=${label} @click=${(ev: Event) => (ev.stopPropagation(), act("media_player", service, m.entity))}>${icon}</button>`;
  // compact (cover and title); a tap opens the controls
  return html`<div class="live-card live-card-media" data-i=${i} style=${`--live-soc:${color}`} @click=${(ev: Event) => (ev.currentTarget as HTMLElement).classList.toggle("live-open")}>
    ${m.picture ? html`<img class="live-cover" src=${m.picture} alt="" loading="lazy" />` : html`<div class="live-cover live-cover-none">♪</div>`}
    <div class="live-rows">
      <div class="live-title" title=${m.title}>${m.title || m.name}</div>
      <div class="live-status">${m.artist || m.app || m.name}</div>
      <div class="live-actions">
        ${btn(t("live_media_prev"), "⏮", "media_previous_track")} ${btn(t("live_media_playpause"), "⏯", "media_play_pause")} ${btn(t("live_media_next"), "⏭", "media_next_track")}
        ${m.volume !== null
          ? html`<input
              class="live-volume"
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(m.volume * 100))}
              aria-label=${t("live_media_volume")}
              @click=${(ev: Event) => ev.stopPropagation()}
              @change=${(ev: Event) => act("media_player", "volume_set", m.entity, { volume_level: Number((ev.target as HTMLInputElement).value) / 100 })}
            />`
          : nothing}
      </div>
    </div>
  </div>`;
}

/**
 * Keeps the cards from covering each other: after they were placed for a frame, a card that overlaps one placed
 * before it (lower on screen first) moves up above it. Its thread to the anchor stretches.
 */
export function unstackLhCards(root: ParentNode): void {
  const cards = [...root.querySelectorAll<HTMLElement>(".live-card")].filter((el) => el.style.visibility !== "hidden");
  const placed: { x0: number; x1: number; y0: number; y1: number }[] = [];
  const items = cards
    .map((el) => ({ el, x: Number(el.dataset.x), y: Number(el.dataset.y), w: el.offsetWidth, h: el.offsetHeight }))
    .sort((a, b) => b.y - a.y);
  for (const it of items) {
    let bottom = it.y;
    for (let guard = 0; guard < 12; guard++) {
      const r = { x0: it.x - it.w / 2, x1: it.x + it.w / 2, y0: bottom - it.h, y1: bottom };
      const hit = placed.find((p) => r.x0 < p.x1 + 6 && r.x1 > p.x0 - 6 && r.y0 < p.y1 + 6 && r.y1 > p.y0 - 6);
      if (!hit) break;
      bottom = hit.y0 - 8;
    }
    placed.push({ x0: it.x - it.w / 2, x1: it.x + it.w / 2, y0: bottom - it.h, y1: bottom });
    const lift = it.y - bottom;
    it.el.style.transform = `translate(${Math.round(it.x)}px, ${Math.round(bottom)}px) translate(-50%, -100%)`;
    it.el.style.setProperty("--live-thread", `${Math.round(18 + lift)}px`);
  }
}

/** A 3D printer's print: the model's picture, progress, when it is done, the layer, temperatures and the filaments. */
function printerCard(hass: HomeAssistant | undefined, c: PrinterCard, i: number): TemplateResult {
  const p = c.printer;
  const t = (k: Parameters<typeof translate>[1], v?: Record<string, string | number>) => translate(hass, k, v);
  const pct = p.progress ?? 0;
  const clock = (ms: number) => new Intl.DateTimeFormat(hass?.language ?? navigator.language, { hour: "2-digit", minute: "2-digit" }).format(new Date(ms));
  const left = p.remaining !== null ? (p.remaining >= 60 ? `${Math.floor(p.remaining / 60)} h ${Math.round(p.remaining % 60)} min` : `${Math.round(p.remaining)} min`) : null;
  const temps = [p.nozzle !== null ? `${t("printer_nozzle")} ${Math.round(p.nozzle)}°` : null, p.bed !== null ? `${t("printer_bed")} ${Math.round(p.bed)}°` : null].filter(Boolean).join(" · ");
  return html`<div class="live-card live-card-printer ${p.printing ? "live-charging" : ""}" data-i=${i}>
    <div class="live-own">
      ${p.picture ? html`<img class="live-print-pic" src=${p.picture} alt="" />` : ring(pct / 100, p.printing ? "#38bdf8" : "#8aa0c8")}
      <div class="live-own-text"><b>${p.progress !== null ? `${Math.round(pct)} %` : "–"}</b><span>${t(`printer_${p.printing ? "printing" : /finish|complete|fertig/.test(p.status) ? "done" : /pause/.test(p.status) ? "paused" : /error|fail/.test(p.status) ? "error" : "idle"}`)}</span></div>
    </div>
    <div class="live-rows">
      <div class="live-title">${c.name}</div>
      ${p.job ? html`<div class="live-status">${p.job}</div>` : nothing}
      ${p.printing && (p.endsAt || left) ? html`<div class="live-status">⏱ ${[left, p.endsAt ? t("printer_done_at", { time: clock(p.endsAt) }) : null].filter(Boolean).join(" · ")}</div>` : nothing}
      ${p.layer !== null ? html`<div class="live-status">▤ ${t("printer_layer")} ${p.layer}${p.layers ? ` / ${p.layers}` : ""}</div>` : nothing}
      ${temps ? html`<div class="live-status">🌡 ${temps}</div>` : nothing}
      ${p.filaments.length ? html`<div class="live-filaments">${p.filaments.map((f) => html`<i style=${`background:${f}`}></i>`)}</div>` : nothing}
    </div>
  </div>`;
}

/** A heat pump: what it does, flow and return, the outside, power and heat, and its COP as a ring (6 = full). */
function heatPumpCard(hass: HomeAssistant | undefined, c: HeatPumpCard, i: number): TemplateResult {
  const p = c.pump;
  const t = (k: Parameters<typeof translate>[1]) => translate(hass, k);
  const deg = (v: number | null) => (v === null ? "–" : `${formatNumber(hass, v, 1)}°`);
  const icon = { heating: "🔥", water: "🚿", cooling: "❄", defrost: "🧊", idle: "⏸" }[p.mode];
  return html`<div class="live-card live-card-heatpump ${p.mode === "idle" ? "" : "live-charging"}" data-i=${i}>
    <div class="live-own">
      ${ring(Math.min(1, (p.cop ?? 0) / 6), (p.cop ?? 0) >= 3.5 ? "#4ade80" : (p.cop ?? 0) >= 2.5 ? "#facc15" : "#fb923c")}
      <div class="live-own-text"><b>${p.cop !== null ? formatNumber(hass, p.cop, 1) : icon}</b><span>${p.cop !== null ? "COP" : ""}</span></div>
    </div>
    <div class="live-rows">
      <div class="live-title">${c.name}</div>
      <div class="live-status">${icon} ${t(`heatpump_${p.mode}`)}</div>
      ${p.flow !== null || p.return !== null ? html`<div class="live-row live-heat"><span>${t("heatpump_flow_return")}</span><b>${deg(p.flow)} → ${deg(p.return)}</b></div>` : nothing}
      ${p.heat !== null ? html`<div class="live-row live-heat"><span>${t("heatpump_heat")}</span><b>${watts(hass, p.heat)}</b></div>` : nothing}
      ${p.power !== null ? html`<div class="live-row live-house"><span>${t("heatpump_power")}</span><b>${watts(hass, p.power)}</b></div>` : nothing}
      ${p.outside !== null ? html`<div class="live-status">🌡 ${t("heatpump_outside")} ${deg(p.outside)}</div>` : nothing}
    </div>
  </div>`;
}

export function renderLhCards(hass: HomeAssistant | undefined, cards: readonly LiveCard[], act: LiveCardAction): TemplateResult | typeof nothing {
  if (!cards.length) return nothing;
  return html`<div class="live-cards">
    ${cards.map((c, i) => (c.kind === "house" ? houseCard(hass, c, i) : c.kind === "car" ? carCard(hass, c, i, act) : c.kind === "printer" ? printerCard(hass, c, i) : c.kind === "heatpump" ? heatPumpCard(hass, c, i) : mediaCard(hass, c, i, act)))}
  </div>`;
}

export const liveCardStyles = css`
  .live-cards {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 2;
  }
  .live-card {
    position: absolute;
    left: 0;
    top: 0;
    visibility: hidden;
    pointer-events: auto;
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 10px 14px;
    border-radius: calc(var(--nf-radius) + 4px);
    background: var(--nf-chrome);
    box-shadow: var(--nf-shadow);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: var(--nf-text);
    font-size: 12.5px;
    line-height: 1.35;
    white-space: nowrap;
    will-change: transform;
  }
  .live-card::after {
    /* a thin glowing thread down to the point the card belongs to */
    content: "";
    position: absolute;
    left: 50%;
    bottom: calc(-1 * var(--live-thread, 18px));
    width: 1px;
    height: var(--live-thread, 18px);
    background: linear-gradient(color-mix(in srgb, var(--nf-text) 45%, transparent), transparent);
  }
  .live-rows {
    display: grid;
    gap: 2px;
    min-width: 150px;
  }
  .live-row {
    display: flex;
    justify-content: space-between;
    gap: 14px;
  }
  .live-day {
    position: relative;
    margin-top: 6px;
  }
  .live-day svg {
    display: block;
    width: 100%;
    height: 34px;
  }
  .live-day-solar {
    fill: rgba(250, 204, 21, 0.35);
    stroke: #facc15;
    stroke-width: 1;
    vector-effect: non-scaling-stroke;
  }
  .live-week svg {
    height: 30px;
  }
  .live-week-solar {
    fill: rgba(250, 204, 21, 0.6);
  }
  .live-week-use {
    fill: rgba(232, 238, 255, 0.18);
    stroke: #e8eeff;
    stroke-width: 1;
    vector-effect: non-scaling-stroke;
  }
  .live-day-use {
    fill: none;
    stroke: #e8eeff;
    stroke-width: 1.4;
    vector-effect: non-scaling-stroke;
  }
  .live-day span {
    position: absolute;
    right: 2px;
    top: 0;
    font-size: 9px;
    opacity: 0.6;
  }
  .live-row span {
    opacity: 0.8;
  }
  .live-solar b {
    color: color-mix(in srgb, #ffd166 72%, var(--nf-text));
  }
  .live-battery b {
    color: color-mix(in srgb, #4ade80 72%, var(--nf-text));
  }
  .live-import b {
    color: color-mix(in srgb, #f87193 72%, var(--nf-text));
  }
  .live-export b {
    color: color-mix(in srgb, #38dcf5 72%, var(--nf-text));
  }
  .live-house b {
    color: color-mix(in srgb, #b6c2ff 72%, var(--nf-text));
  }
  .live-title {
    font-weight: 600;
    font-size: 13px;
  }
  .live-status {
    opacity: 0.85;
  }
  .live-print-pic {
    width: 54px;
    height: 54px;
    border-radius: 12px;
    object-fit: cover;
    background: rgba(255, 255, 255, 0.06);
  }
  .live-filaments {
    display: flex;
    gap: 4px;
    margin-top: 2px;
  }
  .live-filaments i {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.4);
  }
  .live-warn {
    color: #fbbf24;
    opacity: 1;
  }
  .live-actions {
    display: flex;
    gap: 6px;
    margin-top: 4px;
  }
  .live-btn {
    font: inherit;
    font-size: 14px;
    width: 32px;
    height: 28px;
    border-radius: 9px;
    border: none;
    background: var(--nf-fill);
    color: inherit;
    cursor: pointer;
  }
  .live-btn.live-on {
    background: color-mix(in srgb, var(--live-soc, #4ade80) 30%, transparent);
    border-color: var(--live-soc, #4ade80);
  }
  .live-card-car {
    border-color: color-mix(in srgb, var(--live-soc) 60%, transparent);
    box-shadow: 0 0 22px color-mix(in srgb, var(--live-soc) 30%, transparent), inset 0 0 18px rgba(120, 200, 255, 0.06);
  }
  .live-card-car.live-charging {
    animation: live-charge 1.6s ease-in-out infinite;
  }
  @keyframes live-charge {
    50% {
      box-shadow: 0 0 34px color-mix(in srgb, var(--live-soc) 55%, transparent), inset 0 0 18px rgba(120, 200, 255, 0.1);
    }
  }
  .live-card-car.live-away {
    opacity: 0.85;
    border-style: dashed;
  }
  /* phones: only the house and the car, the media cards would cover the rooms */
  .nf-narrow .live-card-media {
    display: none;
  }
  .live-card-media {
    border-color: color-mix(in srgb, var(--live-soc) 55%, transparent);
    box-shadow: 0 0 22px color-mix(in srgb, var(--live-soc) 28%, transparent), inset 0 0 18px rgba(120, 200, 255, 0.06);
  }
  .live-card-media .live-title {
    max-width: 190px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .live-card-media {
    cursor: pointer;
    padding: 7px 12px 7px 7px;
  }
  .live-card-media .live-actions {
    display: none;
  }
  .live-card-media.live-open .live-actions {
    display: flex;
  }
  .live-card-media.live-open {
    z-index: 5;
  }
  .live-cover {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0 0 14px color-mix(in srgb, var(--live-soc) 40%, transparent);
  }
  .live-cover-none {
    display: grid;
    place-items: center;
    font-size: 24px;
    background: color-mix(in srgb, var(--live-soc) 25%, transparent);
  }
  .live-volume {
    width: 80px;
    accent-color: var(--live-soc);
  }
  .live-own {
    position: relative;
    width: 54px;
    height: 54px;
  }
  .live-ring {
    width: 54px;
    height: 54px;
  }
  .live-ring-bg {
    fill: none;
    stroke: color-mix(in srgb, var(--nf-text) 10%, transparent);
    stroke-width: 5;
  }
  .live-ring-fg {
    fill: none;
    stroke-width: 5;
    stroke-linecap: round;
    transition: stroke-dasharray 0.6s ease;
  }
  .live-own-text {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    text-align: center;
  }
  .live-own-text b {
    font-size: 13px;
  }
  .live-own-text span {
    font-size: 8.5px;
    opacity: 0.75;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
`;
