/**
 * Home Assistant pads the element around a custom panel with the device's safe areas (status bar,
 * home indicator). The panel is as tall as the screen, so with that padding the page became taller
 * than the screen and scrolled (#175). What the parent already keeps free is taken off the height.
 */
export interface HostPad {
  /** px the parent keeps free above and below the panel together */
  readonly vertical: number;
  /** true when the parent keeps the bottom safe area free, so the panel must not add it again */
  readonly bottomHandled: boolean;
}

const px = (v: string | undefined): number => {
  const n = parseFloat(v ?? "");
  return Number.isFinite(n) && n > 0 ? n : 0;
};

export function hostPad(parent: { paddingTop?: string; paddingBottom?: string } | null | undefined): HostPad {
  const top = px(parent?.paddingTop);
  const bottom = px(parent?.paddingBottom);
  return { vertical: top + bottom, bottomHandled: bottom > 0 };
}
