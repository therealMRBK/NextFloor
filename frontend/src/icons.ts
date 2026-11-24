// Marker and panel icons: simple outline drawings on a 24 × 24 grid, stroked in the current text colour.

import type { DeviceKind } from "./devices.ts";

/** One path per kind of device. */
const SHAPES: Record<DeviceKind, string> = {
  light: "M8.5 17.5h7M9.5 20.5h5M12 2.5a6.5 6.5 0 0 0-3.5 12v1.5h7V14.5A6.5 6.5 0 0 0 12 2.5z",
  switch: "M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM12 7.5v9M9 12h6",
  fan: "M12 11.5c-1-3.5 0-7 2.5-7s2 4-2.5 7zm.5.5c3.5-1 7 0 7 2.5s-4 2-7-2.5zm-.5.5c1 3.5 0 7-2.5 7s-2-4 2.5-7zm-.5-.5c-3.5 1-7 0-7-2.5s4-2 7 2.5z",
  cover: "M3.5 3.5h17v3h-17zM6 6.5v12M18 6.5v12M8.5 9.5h7M8.5 12.5h7M8.5 15.5h7",
  climate: "M12 15V5.5a2.5 2.5 0 0 0-5 0V15a4.5 4.5 0 1 0 5 0zM9.5 9v7M15 5.5h5M15 9.5h4",
  media: "M3.5 5.5h17v11h-17zM8 20.5h8M12 16.5v4M10 8.5v5l4.5-2.5z",
  lock: "M5.5 10.5h13v9.5h-13zM8 10.5V7.5a4 4 0 0 1 8 0v3M12 14v3",
  sensor: "M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5v4.5l3.5 2",
  binary: "M5.5 20.5v-17h10v17M3.5 20.5h14M9 20.5v-13h4.5v13M12.5 14h.01",
  scene: "M5.5 18.5l8-8M14 3.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1zM18.5 12l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z",
  script: "M8.5 3.5h8.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-2h9M8.5 3.5a2 2 0 0 0-2 2v10M9.5 8.5h6M9.5 11.5h4",
};

/** The path data of a device kind's icon. */
export const iconPath = (kind: DeviceKind): string => SHAPES[kind];

/**
 * Markup for a user-chosen icon: Home Assistant's own icon element. A plain name or `mdi:name` is a Material Design Icon; any other
 * `set:name` (`local:minisforum-ms01`, `phu:printer`, `hue:…`) goes to Home Assistant as it is, so icon sets the user registered
 * (the Custom Icons integration, HACS icon packs) work like in Home Assistant's own cards.
 */
export function mdiIcon(name: string): string {
  const clean = (part: string) => part.replace(/[^a-z0-9_-]/gi, "");
  const [first, ...rest] = name.trim().split(":");
  const icon = rest.length ? `${clean(first)}:${clean(rest.join(""))}` : `mdi:${clean(first)}`;
  return `<ha-icon icon="${icon}" style="--mdc-icon-size:18px"></ha-icon>`;
}

/** Inline SVG for a device kind. Only static strings go in here. */
export function iconSvg(kind: DeviceKind): string {
  const look = 'fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"';
  return `<svg viewBox="0 0 24 24" width="18" height="18" ${look} aria-hidden="true"><path d="${SHAPES[kind]}"/></svg>`;
}
