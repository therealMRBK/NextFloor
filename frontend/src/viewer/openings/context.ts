import type { OpeningInfo } from "../build.ts";
import type { GeoBuffer } from "../geo.ts";
import type { Fold, Frame } from "./primitives.ts";
import type { OpeningState } from "./types.ts";

/** Everything the builders of one opening need. */
export interface Ctx {
  info: OpeningInfo;
  state: OpeningState;
  frame: Frame;
  /** The middle between the room face and the outer face of the wall (in n). */
  mid: number;
  /** Highlighted while closed (and a sensor knows), instead of while open. */
  markClosed: boolean;
  fold: Fold;
  frames: GeoBuffer;
  glass: GeoBuffer;
  blinds: GeoBuffer;
  /** For a piece of a pane over several edges: whether it is the first or the last one, which carry the jambs. */
  first: boolean;
  last: boolean;
}

