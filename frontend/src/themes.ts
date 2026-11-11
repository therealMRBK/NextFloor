// Looks of the 3D view, shared by the main bundle (settings, stage background) and the 3D bundle.

export type Theme = "neon" | "blueprint" | "day" | "own" | "real";

// the order is the shader's look number (neon 0 ... own 3, real 4): new looks go to the end
export const THEMES: Theme[] = ["neon", "blueprint", "day", "own", "real"];

/** The colours of the own look ("#rrggbb" each; missing ones take the default), house-wide in the settings or a card's own (#82). */
export interface OwnLook {
  /** the darkest surfaces (floors, the ground) */
  dark?: string;
  /** the lightest surfaces (walls, furniture tops) */
  light?: string;
  lines?: string;
  background?: string;
  /** window panes and other glass (D#82); empty: the glass follows the surfaces like everything else */
  glass?: string;
}

export const OWN_LOOK_KEYS = ["dark", "light", "lines", "background", "glass"] as const;

/** The own look before anything is picked: warm greys with copper lines on a dark slate. */
export const OWN_LOOK_DEFAULT: Required<OwnLook> = { dark: "#2a2622", light: "#8c8378", lines: "#e0a060", background: "#1c1e22", glass: "" };

/** What a colour picker shows for a colour of the own look that is not set (the glass has no colour of its own until one is picked). */
export const ownLookShown = (key: (typeof OWN_LOOK_KEYS)[number]): string => OWN_LOOK_DEFAULT[key] || "#9fc4e0";

/** "#rrggbb" as 0..255 numbers; null for anything else. */
export function hexRgb(hex: string | null | undefined): [number, number, number] | null {
  const match = /^#?([0-9a-f]{6})$/i.exec(hex?.trim() ?? "");
  if (!match) return null;
  const value = Number.parseInt(match[1], 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
}

/** The own look with every colour filled: the card's own over the house's over the default. Bad values are skipped. */
export function ownLook(...layers: (OwnLook | null | undefined)[]): Required<OwnLook> {
  const out = { ...OWN_LOOK_DEFAULT };
  for (const layer of layers) for (const key of OWN_LOOK_KEYS) if (hexRgb(layer?.[key])) out[key] = layer![key]!;
  return out;
}

/** A light stage needs dark lines drawn without glow and no neon ground grid: the day look, or an own look on a light background. */
export function lightStage(theme: Theme, own: OwnLook): boolean {
  if (theme === "day" || theme === "real") return true;
  if (theme !== "own") return false;
  const [r, g, b] = hexRgb(own.background) ?? [0, 0, 0];
  return 0.299 * r + 0.587 * g + 0.114 * b > 140;
}

/** The stage background of a look; the own look takes its background for the sky and a darker shade of it for the edges. */
export function stageFor(theme: Theme, own: OwnLook): { night: [number[], number[]]; day: [number[], number[]] } {
  if (theme !== "own") return STAGE[theme] ?? STAGE.neon;
  const sky = hexRgb(own.background) ?? hexRgb(OWN_LOOK_DEFAULT.background)!;
  const shade = (f: number) => sky.map((v) => Math.round(v * f));
  return { night: [shade(0.9), shade(0.62)], day: [sky, shade(0.72)] };
}

/** A look to pick: one of the looks, or "auto" – day while the sun is up, neon after sunset. */
export type Look = Theme | "auto";

export const LOOKS: Look[] = ["auto", ...THEMES];

/** The look to draw now: "auto" follows sun.sun (day above the horizon, else neon; neon when there is no sun entity). */
export function lookNow(look: Look | undefined, sunState: string | undefined): Theme {
  if (look !== "auto") return look ?? "neon";
  return sunState === "above_horizon" ? "day" : "neon";
}

/** Background of the 3D stage per look (sky in the middle, ground at the edges), night and day. */
export const STAGE: Record<Exclude<Theme, "own">, { night: [number[], number[]]; day: [number[], number[]] }> = {
  neon: {
    night: [
      [11, 17, 32],
      [7, 11, 20],
    ],
    day: [
      [26, 44, 78],
      [12, 20, 36],
    ],
  },
  blueprint: {
    night: [
      [26, 70, 130],
      [10, 38, 78],
    ],
    day: [
      [34, 86, 150],
      [14, 48, 96],
    ],
  },
  day: {
    night: [
      [214, 224, 238],
      [176, 190, 210],
    ],
    day: [
      [242, 246, 251],
      [205, 216, 230],
    ],
  },
  // the realistic look: a daylight sky that deepens towards dusk
  real: {
    night: [
      [92, 110, 142],
      [52, 64, 88],
    ],
    day: [
      [150, 190, 232],
      [214, 228, 240],
    ],
  },
};
