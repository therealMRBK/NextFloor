// The furniture studio: cabinets, shelves, wardrobes, sideboards and wall units in any size, with columns and rows of doors,
// drawers, glass or open compartments, on a plinth, on legs or hanging. The settings live on the item; the 3D model and the
// plan symbol are drawn from them.

export const STUDIO_KINDS = ["cabinet", "shelf", "wall"] as const;
export type StudioKind = (typeof STUDIO_KINDS)[number];

export const STUDIO_FRONTS = ["doors", "drawers", "mixed", "glass", "open"] as const;
export type StudioFront = (typeof STUDIO_FRONTS)[number];

export const STUDIO_BASES = ["plinth", "legs", "none"] as const;
export type StudioBase = (typeof STUDIO_BASES)[number];

export const STUDIO_FINISHES = ["white", "wood", "dark", "body"] as const;
export type StudioFinish = (typeof STUDIO_FINISHES)[number];

export interface StudioConfig {
  kind: StudioKind;
  /** Columns side by side; null = from the width (about 60 cm each, 80 cm for open shelves). */
  cols: number | null;
  /** Compartments one above the other. */
  rows: number;
  front: StudioFront;
  base: StudioBase;
  finish: StudioFinish;
  /** A glowing strip under the top or the bottom of a wall unit. */
  light: boolean;
}

export const DEFAULT_STUDIO: StudioConfig = { kind: "cabinet", cols: null, rows: 3, front: "mixed", base: "plinth", finish: "white", light: false };

/** Ready-made starting points for the library and the form. */
export const STUDIO_PRESETS: Record<string, { size: [number, number, number]; config: Partial<StudioConfig> }> = {
  sideboard: { size: [1.8, 0.45, 0.8], config: { kind: "cabinet", rows: 2, front: "mixed", base: "legs" } },
  highboard: { size: [1.2, 0.42, 1.6], config: { kind: "cabinet", rows: 4, front: "glass", base: "plinth" } },
  wardrobe: { size: [2.0, 0.6, 2.3], config: { kind: "cabinet", rows: 1, front: "doors", base: "plinth" } },
  drawers: { size: [0.8, 0.5, 1.0], config: { kind: "cabinet", cols: 1, rows: 5, front: "drawers", base: "plinth" } },
  bookcase: { size: [1.6, 0.35, 2.0], config: { kind: "shelf", rows: 5, front: "open", base: "none", finish: "wood" } },
  wall_unit: { size: [1.2, 0.35, 0.6], config: { kind: "wall", rows: 1, front: "doors", base: "none", light: true } },
};

const isOneOf = <T extends string>(list: readonly T[], value: unknown): value is T => typeof value === "string" && (list as readonly string[]).includes(value);

/** The studio settings of an item, with defaults for what it does not set. */
export function studioConfig(item: { studio?: Partial<StudioConfig> | null }): StudioConfig {
  const s = item.studio ?? {};
  const kind = isOneOf(STUDIO_KINDS, s.kind) ? s.kind : DEFAULT_STUDIO.kind;
  return {
    kind,
    cols: typeof s.cols === "number" && Number.isFinite(s.cols) ? Math.round(Math.min(12, Math.max(1, s.cols))) : null,
    rows: typeof s.rows === "number" && Number.isFinite(s.rows) ? Math.round(Math.min(10, Math.max(1, s.rows))) : DEFAULT_STUDIO.rows,
    front: kind === "shelf" ? "open" : isOneOf(STUDIO_FRONTS, s.front) ? s.front : DEFAULT_STUDIO.front,
    base: kind === "wall" ? "none" : isOneOf(STUDIO_BASES, s.base) ? s.base : DEFAULT_STUDIO.base,
    finish: isOneOf(STUDIO_FINISHES, s.finish) ? s.finish : DEFAULT_STUDIO.finish,
    light: s.light === true,
  };
}

/** Columns of a unit of width w. */
export const studioCols = (cfg: StudioConfig, w: number): number => cfg.cols ?? Math.max(1, Math.round(w / (cfg.front === "open" ? 0.8 : 0.6)));

/** Height of the plinth or legs. */
export const studioBaseHeight = (cfg: StudioConfig): number => (cfg.base === "plinth" ? 0.08 : cfg.base === "legs" ? 0.15 : 0);

/** What a compartment's front is: mixed units have drawers in their lower half and doors above. */
export function frontOfRow(cfg: StudioConfig, row: number): "door" | "drawer" | "glass" | "open" {
  switch (cfg.front) {
    case "drawers":
      return "drawer";
    case "glass":
      return "glass";
    case "open":
      return "open";
    case "mixed":
      return row < Math.ceil(cfg.rows / 2) ? "drawer" : "door";
    default:
      return "door";
  }
}

/** Default mount of a studio unit: wall units hang at 1.45 m like kitchen wall cabinets. */
export const studioMount = (item: { studio?: Partial<StudioConfig> | null }): number => (studioConfig(item).kind === "wall" ? 1.45 : 0);
