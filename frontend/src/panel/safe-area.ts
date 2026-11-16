/**
 * Home Assistant pads the element around a custom panel with the device's safe areas (status bar,
 * home indicator). The panel is as tall as the screen, so with that padding the page became taller
 * than the screen and scrolled (#175). The panel starts below the status bar, so that strip is taken
 * off its height. The strip at the bottom it fills itself: the 3D view reaches the edge of the screen
 * and only the controls keep clear of the home indicator, instead of an empty bar below the panel.
 */
export interface HostPad {
  /** px the parent keeps free above the panel (status bar) */
  readonly top: number;
  /** px the parent keeps free below the panel (home indicator); the panel reaches into it */
  readonly bottom: number;
}

const px = (v: string | undefined): number => {
  const n = parseFloat(v ?? "");
  return Number.isFinite(n) && n > 0 ? n : 0;
};

export function hostPad(parent: { paddingTop?: string; paddingBottom?: string } | null | undefined): HostPad {
  return { top: px(parent?.paddingTop), bottom: px(parent?.paddingBottom) };
}
