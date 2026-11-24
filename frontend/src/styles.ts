import { css } from "lit";

/**
 * Design tokens shared by panel, card and editor.
 *
 * Everything points at Home Assistant's own theme variables, so NextFloor looks like the rest of the dashboard
 * and follows its light or dark theme. The fallbacks are Home Assistant's default dark theme, used when a
 * component runs outside Home Assistant (the preview, the online demo).
 */
export const tokens = css`
  :host {
    --nf-text: var(--primary-text-color, #e1e1e1);
    --nf-muted: var(--secondary-text-color, #9b9b9b);
    --nf-accent: var(--primary-color, #03a9f4);
    --nf-accent-text: var(--text-primary-color, #ffffff);
    --nf-surface: var(--ha-card-background, var(--card-background-color, #1c1c1c));
    --nf-bg: var(--primary-background-color, #111111);
    --nf-bg2: var(--secondary-background-color, #1c1c1c);
    /* floating bars and cards over the 3D view: the card colour, a little see-through */
    --nf-chrome: color-mix(in srgb, var(--nf-surface) var(--nf-chrome-mix, 84%), transparent);
    --nf-chrome-solid: var(--nf-surface);
    --nf-line: var(--divider-color, rgba(255, 255, 255, 0.12));
    /* quiet fills for buttons and fields, and the tonal accent of an active control */
    --nf-fill: color-mix(in srgb, var(--nf-text) 7%, transparent);
    --nf-fill-strong: color-mix(in srgb, var(--nf-text) 13%, transparent);
    --nf-tonal: color-mix(in srgb, var(--nf-accent) 20%, transparent);
    --nf-soft: var(--info-color, #4a90e2);
    --nf-warm: var(--state-light-active-color, #ffa726);
    --nf-danger: var(--error-color, #db4437);
    --nf-good: var(--success-color, #43a047);
    --nf-radius: var(--ha-card-border-radius, 12px);
    --nf-shadow: var(--ha-card-box-shadow, 0 1px 2px rgba(0, 0, 0, 0.18), 0 6px 20px rgba(0, 0, 0, 0.2));
    --nf-font: var(--primary-font-family, Roboto, "Noto Sans", system-ui, -apple-system, "Segoe UI", sans-serif);
    --nf-title-font: var(--nf-font);
    font-family: var(--nf-font);
    color: var(--nf-text);
    -webkit-font-smoothing: antialiased;
  }
  h1,
  h2,
  h3 {
    text-wrap: balance;
  }
  p {
    text-wrap: pretty;
  }
  ::selection {
    background: color-mix(in srgb, var(--nf-accent) 32%, transparent);
  }
`;

/**
 * Easy to read (a host with the `readable` attribute): the quiet greys of Home Assistant's theme become the text colour, lines and
 * floating bars get stronger, and the bars and the room panel a size larger. Custom properties reach into the inner components.
 */
export const readableStyles = css`
  :host([readable]) {
    --secondary-text-color: var(--primary-text-color, #e1e1e1);
    --divider-color: color-mix(in srgb, var(--primary-text-color, #e1e1e1) 40%, transparent);
    --nf-chrome-mix: 97%;
  }
  :host([readable]) nf-room-panel,
  :host([readable]) .nf-nav,
  :host([readable]) .nf-overlay {
    zoom: 1.2;
  }
`;

/** Pills, chips, buttons and form controls in the style of Home Assistant's own cards. */
export const controls = css`
  /* a group of switches: one rounded pill, the active one tinted with the accent */
  .nf-seg {
    display: inline-flex;
    padding: 4px;
    gap: 2px;
    border-radius: 999px;
    background: var(--nf-chrome);
    box-shadow: var(--nf-shadow);
    backdrop-filter: blur(10px);
  }
  .nf-seg button,
  .nf-chip {
    font: inherit;
    font-size: 14px;
    font-weight: 500;
    border: none;
    background: none;
    color: var(--nf-muted);
    padding: 7px 14px;
    border-radius: 999px;
    cursor: pointer;
    white-space: nowrap;
    min-height: 36px;
    transition:
      background 0.15s,
      color 0.15s;
  }
@media (hover: hover) and (pointer: fine) {
    .nf-seg button:hover:not(:disabled),
    .nf-chip:hover {
      background: var(--nf-fill);
      color: var(--nf-text);
    }
  }
  /* on a small stage (a small window, a zoomed browser, a dashboard column) the switches at the bottom take less room */
  @container nf ((max-width: 1360px) or (max-height: 640px)) {
    :is(.nf-overlay, .nf-card-controls) .nf-seg {
      padding: 3px;
    }
    :is(.nf-overlay, .nf-card-controls) :is(.nf-seg button, .nf-chip) {
      font-size: 13px;
      padding: 5px 10px;
    }
  }
  .nf-time-slider {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
  }
  .nf-time-slider input {
    width: 160px;
    accent-color: var(--nf-accent);
  }
  .nf-seg button[aria-pressed="true"],
  .nf-chip[aria-pressed="true"] {
    background: color-mix(in srgb, var(--nf-accent) 24%, var(--nf-chrome-solid));
    color: var(--nf-accent);
    font-weight: 600;
  }
  .nf-seg button:disabled {
    opacity: 0.4;
    cursor: default;
  }
  /* a single pill, like the chips of the Mushroom cards */
  .nf-chip {
    background: var(--nf-chrome);
    color: var(--nf-text);
    box-shadow: var(--nf-shadow);
    backdrop-filter: blur(10px);
  }

  button:focus-visible,
  input:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--nf-accent);
    outline-offset: 2px;
  }
  /* the round icon badge every row and card starts with */
  .nf-ico {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--nf-tonal);
    color: var(--nf-accent);
    --mdc-icon-size: 20px;
  }
  .nf-ico.nf-warm {
    background: color-mix(in srgb, var(--nf-warm) 22%, transparent);
    color: var(--nf-warm);
  }
  .nf-ico.nf-off {
    background: var(--nf-fill);
    color: var(--nf-muted);
  }
  .nf-btn {
    font: inherit;
    font-size: 14px;
    font-weight: 500;
    border: none;
    background: var(--nf-fill);
    color: var(--nf-text);
    border-radius: var(--nf-radius);
    padding: 7px 14px;
    cursor: pointer;
    min-height: 36px;
    transition: background 0.15s;
  }
@media (hover: hover) and (pointer: fine) {
    .nf-btn:hover {
      background: var(--nf-fill-strong);
    }
  }
  .nf-btn.nf-danger {
    color: var(--nf-danger);
  }
  .nf-btn.nf-primary {
    background: var(--nf-accent);
    color: var(--nf-accent-text);
  }
@media (hover: hover) and (pointer: fine) {
    .nf-btn.nf-primary:hover {
      background: color-mix(in srgb, var(--nf-accent) 88%, var(--nf-text));
    }
  }
  .nf-field {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--nf-muted);
  }
  .nf-field input,
  .nf-field select,
  .nf-field textarea {
    font: inherit;
    font-size: 14px;
    color: var(--nf-text);
    background: var(--nf-fill);
    border: none;
    border-bottom: 1px solid var(--nf-line);
    border-radius: 10px 10px 4px 4px;
    padding: 8px 10px;
    min-width: 0;
  }
  .nf-field input:focus,
  .nf-field select:focus,
  .nf-field textarea:focus {
    border-bottom-color: var(--nf-accent);
  }
  .nf-field input[type="range"] {
    padding: 0;
    accent-color: var(--nf-accent);
  }
  .nf-field select option {
    background: var(--nf-chrome-solid);
    color: var(--nf-text);
  }
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .nf-seg button,
    .nf-chip,
    .nf-btn {
      min-height: 40px;
    }
  }

  /* every pressable answers at once: it dips on press and springs back (no delay on touch, no grey tap flash) */
  .nf-seg button,
  .nf-chip,
  .nf-btn {
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.15s ease, color 0.15s ease, transform 0.14s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .nf-seg button:active:not(:disabled),
  .nf-chip:active,
  .nf-btn:active:not(:disabled) {
    transform: scale(0.97);
  }
  @media (pointer: coarse) {
    .nf-seg button,
    .nf-chip,
    .nf-btn {
      min-height: 40px;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .nf-seg button,
    .nf-chip,
    .nf-btn {
      transition: background-color 0.01ms, color 0.01ms;
    }
    .nf-seg button:active:not(:disabled),
    .nf-chip:active,
    .nf-btn:active:not(:disabled) {
      transform: none;
    }
  }
`;

/** A colour blended over an opaque base, red, green and blue as whole numbers (the alpha of `top` is 0 to 1). */
export function compositeOver(top: [number, number, number, number], base: [number, number, number]): [number, number, number] {
  const a = Math.min(1, Math.max(0, top[3]));
  return [0, 1, 2].map((i) => Math.round(top[i] * a + base[i] * (1 - a))) as [number, number, number];
}

let scratch: CanvasRenderingContext2D | null | undefined;

/** Red, green, blue (0-255) and alpha (0-1) of a CSS colour, read through a canvas so every colour syntax works; null if invalid. */
function readColour(css: string): [number, number, number, number] | null {
  if (scratch === undefined) {
    try {
      scratch = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
    } catch {
      scratch = null;
    }
  }
  const ctx = scratch;
  if (!ctx || !css) return null;
  ctx.clearRect(0, 0, 1, 1);
  ctx.fillStyle = "#010203";
  ctx.fillStyle = css;
  // an invalid colour leaves the previous one in place
  if (ctx.fillStyle === "#010203" && css.replace(/\s/g, "").toLowerCase() !== "#010203") return null;
  ctx.fillRect(0, 0, 1, 1);
  const d = ctx.getImageData(0, 0, 1, 1).data;
  return [d[0], d[1], d[2], d[3] / 255];
}

/**
 * A glass theme can make Home Assistant's card colour see-through; every card, bar and list of ours would then lie bare over the
 * plan (#201, #220). When the theme's card colour is see-through, this gives the host an opaque card colour of its own: the
 * theme's colour blended over its page colour. A solid colour is left alone.
 */
export function solidCardColour(host: HTMLElement, dark: boolean): void {
  host.style.removeProperty("--ha-card-background");
  const style = getComputedStyle(host);
  const own = (style.getPropertyValue("--ha-card-background") || style.getPropertyValue("--card-background-color")).trim();
  const top = readColour(own);
  if (!top || top[3] >= 0.98) return;
  const fallback: [number, number, number] = dark ? [17, 17, 17] : [250, 250, 250];
  const page = readColour(style.getPropertyValue("--primary-background-color").trim());
  const base = page ? (page[3] >= 0.98 ? ([page[0], page[1], page[2]] as [number, number, number]) : compositeOver(page, fallback)) : fallback;
  const [r, g, b] = compositeOver(top, base);
  host.style.setProperty("--ha-card-background", `rgb(${r} ${g} ${b})`);
}

/** Runs solidCardColour when the theme or its light/dark mode changed since `last`; returns the key to remember. */
export function followTheme(host: HTMLElement, hass: { themes?: { theme?: string; darkMode?: boolean } } | undefined | null, last: string): string {
  const key = `${hass?.themes?.theme ?? ""}|${hass?.themes?.darkMode}`;
  if (key === last || !host.isConnected) return last;
  solidCardColour(host, hass?.themes?.darkMode !== false);
  return key;
}

/** `color-scheme` for native controls (selects, scrollbars) from Home Assistant's own light or dark mode. */
export function colorSchemeOf(hass: { themes?: { darkMode?: boolean } } | undefined | null): "light" | "dark" {
  return hass?.themes?.darkMode === false ? "light" : "dark";
}
