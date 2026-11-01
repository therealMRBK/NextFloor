import type { BufferGeometry } from "three";

export interface OpeningState {
  /** A window sash or door leaf: 0 closed, 1 swung open. */
  open: number;
  /** The second leaf of a double door or window. */
  open2?: number;
  /** 0 closed, 1 tilted. */
  tilt: number;
  /** The second leaf tilted. */
  tilt2?: number;
  /** The closed fraction of the blind or garage door (0 up, 1 down); null: no blind. */
  cover: number | null;
  /** A sensor reports the state (contact, tilt sensor or cover); without one "closed" is a guess. */
  sensed?: boolean;
  /** A door with a smart lock that stands unlocked: its free edge glows. */
  unlocked?: boolean;
  /** The door leaf stands where it is assumed to, as no sensor tells: it does not glow as open. */
  assumed?: boolean;
}

export const CLOSED: OpeningState = { open: 0, open2: 0, tilt: 0, tilt2: 0, cover: null };

export interface TriRange {
  id: string;
  start: number;
  end: number;
}

export interface OpeningParts {
  frames: BufferGeometry;
  glass: BufferGeometry;
  blinds: BufferGeometry;
  /** The triangle ranges per opening in frames, glass and blinds, so they can be tapped in 3D. */
  frameTris: TriRange[];
  glassTris: TriRange[];
  blindTris: TriRange[];
}
