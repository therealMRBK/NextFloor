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
    --nf-chrome: color-mix(in srgb, var(--nf-surface) 84%, transparent);
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
  .nf-seg button:hover:not(:disabled),
  .nf-chip:hover {
    background: var(--nf-fill);
    color: var(--nf-text);
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
  .nf-btn:hover {
    background: var(--nf-fill-strong);
  }
  .nf-btn.nf-danger {
    color: var(--nf-danger);
  }
  .nf-btn.nf-primary {
    background: var(--nf-accent);
    color: var(--nf-accent-text);
  }
  .nf-btn.nf-primary:hover {
    background: color-mix(in srgb, var(--nf-accent) 88%, var(--nf-text));
  }
  .nf-field {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--nf-muted);
  }
  .nf-field input,
  .nf-field select {
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
  .nf-field select:focus {
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
`;

/** `color-scheme` for native controls (selects, scrollbars) from Home Assistant's own light or dark mode. */
export function colorSchemeOf(hass: { themes?: { darkMode?: boolean } } | undefined | null): "light" | "dark" {
  return hass?.themes?.darkMode === false ? "light" : "dark";
}
