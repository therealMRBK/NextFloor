// Colours and angles of doors and windows.

import { shade } from "../geo.ts";

export const FRAME = 0x1f3052;
export const FRAME_TOP = 0x2a4270;
export const SASH = 0x22375f;
export const SILL = 0x1c2a47;
export const BLIND_BOX = 0x16223a;
/** The warm glow of a window or door that is open, or that should be closed. */
export const OPEN_WARM = 0xffb547;
export const LEAF = 0x1c2c4d;
export const LEAF_TOP = 0x27406b;
export const LEAF_FRONT = 0x111a30;
export const LEAF_FRONT_TOP = 0x1c2a47;
/** The free edge of a door whose smart lock is unlocked: the stock cyan, which the neon look turns into the user's accent. */
export const UNLOCKED = 0x37e0ff;
export const HANDLE = 0x5b7cff;
export const HANDLE_TOP = 0x8aa2ff;
export const GLASS = shade(0x37e0ff, 0.08);

/** How far a window sash swings open, how far a door leaf, and how far a tilted sash leans (radians). */
export const OPEN_ANGLE = 1.2;
export const DOOR_ANGLE = 1.5;
export const TILT_ANGLE = 0.2;
/** How far a top-hung sash swings out at the bottom when open (about 30°). */
export const TOP_HUNG_ANGLE = 0.52;
