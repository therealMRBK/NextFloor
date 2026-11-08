// Colours of the roof scene.

import { Color } from "three";
import { shade } from "../geo.ts";

export const ROOF = 0x1a2338;
export const ROOF_TOP = 0x222d48;
export const GABLE = 0x141d31;
export const RIDGE = shade(0x37e0ff, 0.9);
export const EAVE = shade(0x5b7cff, 0.45);
/** The thickness of the roof covering. */
export const THICK = 0.14;

/** A canopy has see-through panels and a light frame of posts and beams. */
export const GLASS = 0x8fd8ff;
export const FRAME = 0xc9d3e6;
export const FRAME_TOP = 0xe3e9f5;

/** Solar modules: all black (glass, frame, barely visible cells) or the classic blue. */
export const PANEL_LOOKS = {
  black: { glass: new Color(0x05070b), edge: shade(0x8a96b0, 0.32), cells: shade(0x2a3550, 0.22) },
  blue: { glass: new Color(0x15295a), edge: shade(0x9fb8ff, 0.55), cells: shade(0x3d6cff, 0.35) },
};
export const PANEL_POST = shade(0xc9d3e6, 0.5);

/** Roof windows: a light frame, glass and the blind. The frame of an open or tilted window glows warm, like a wall window. */
export const WINDOW_FRAME = shade(0xc9d3e6, 0.85);
export const WINDOW_WARM = shade(0xffb347, 0.95);
export const WINDOW_GLASS = new Color(0x2b6b8f);
export const WINDOW_BLIND = new Color(0x3a4258);

/** Chimneys: brick or render, a darker cap, the black flue, and steel for a flue pipe. */
export const CHIMNEY = 0x3a2b30;
export const CHIMNEY_TOP = 0x4a3840;
export const CHIMNEY_CAP = 0x2a3448;
export const CHIMNEY_FLUE = 0x05070b;
export const CHIMNEY_STEEL = 0x8b97ad;
export const CHIMNEY_STEEL_TOP = 0xb4c0d4;
export const CHIMNEY_EDGE = shade(0x5b7cff, 0.4);
