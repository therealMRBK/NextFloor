// Doors, windows and garage doors: which entities belong to each opening, and what state they are in.

import type { Floor, Opening } from "../model.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";
import { isUnavailable, kindOf } from "./kinds.ts";
import { roomEntities } from "./registry.ts";

export interface OpeningEntities {
  cover: string | null;
  contact: string | null;
  tilt: string | null;
  /** Contact and tilt sensor of the second leaf of a double door or window. */
  contact2?: string | null;
  tilt2?: string | null;
  /** A sensor with the blind's position while it moves (0-100 % or 0-1, open is high). */
  position?: string | null;
  positionInverted?: boolean;
  /** A sensor with the sash's tilt angle in degrees, the angle that counts as fully tilted, an offset and the sign. */
  tiltAngle?: string | null;
  tiltMax?: number | null;
  tiltOffset?: number | null;
  tiltInvert?: boolean;
  /** A door without a sensor is drawn closed. */
  shut?: boolean;
  /** A door with its own opening angle stands at that angle without a sensor, instead of half open. */
  angled?: boolean;
  /** A door's smart lock. */
  lock?: string | null;
  /** A second blind of a wide window (its right half, seen from the room). */
  cover2?: string | null;
}

const BLIND_CLASSES = new Set([undefined, "shutter", "blind", "awning", "shade", "curtain", "window"]);
const GARAGE_COVER_CLASSES = new Set(["garage", "gate"]);
const WINDOW_CONTACT_CLASSES = new Set(["window", "opening"]);

/** The n-th opening gets the n-th entity. With `shared`, one single entity serves every opening. */
function assign(openings: Opening[], entities: string[], shared = false): Map<string, string> {
  const result = new Map<string, string>();
  openings.forEach((opening, i) => {
    const entity = shared && entities.length === 1 ? entities[0] : entities[i];
    if (entity) result.set(opening.id, entity);
  });
  return result;
}

/** An explicit choice ("none" switches it off) wins over the automatic match. */
const chosenOr = (choice: string | null, automatic: string | undefined): string | null => (choice === "none" ? null : (choice ?? automatic ?? null));
const unlessNone = (ref: string | null | undefined): string | null => (ref && ref !== "none" ? ref : null);

/**
 * The entities of every door and window: those set by hand, otherwise matched automatically with the covers and
 * contact sensors of the room's area, in the order the openings sit along the room's outline.
 */
export function openingEntities(hass: HomeAssistant, floors: readonly Floor[]): Map<string, OpeningEntities> {
  const result = new Map<string, OpeningEntities>();
  for (const floor of floors) {
    for (const room of floor.rooms) {
      const openings = floor.openings.filter((o) => o.room_id === room.id).sort((a, b) => a.edge - b.edge || a.offset - b.offset);
      if (openings.length === 0) continue;
      const entities = roomEntities(hass, room);
      const deviceClass = (id: string) => hass.states[id]?.attributes.device_class as string | undefined;
      const binaries = (classes: (cls: string) => boolean) => entities.filter((id) => kindOf(id) === "binary" && classes(deviceClass(id) ?? ""));
      const ofType = (type: Opening["type"]) => openings.filter((o) => o.type === type);

      // one blind for the whole room (a group, say) serves every window; a contact belongs to one window
      const windowBlind = assign(ofType("window"), entities.filter((id) => kindOf(id) === "cover" && BLIND_CLASSES.has(deviceClass(id))), true);
      const windowContact = assign(ofType("window"), binaries((c) => WINDOW_CONTACT_CLASSES.has(c)));
      const doorContact = assign(ofType("door"), binaries((c) => c === "door"));
      const garageCover = assign(ofType("garage"), entities.filter((id) => kindOf(id) === "cover" && GARAGE_COVER_CLASSES.has(deviceClass(id) ?? "")));
      const garageContact = assign(ofType("garage"), binaries((c) => c === "garage_door"));

      for (const o of openings) {
        const covers = o.type === "window" ? windowBlind : o.type === "garage" ? garageCover : null;
        const contacts = o.type === "window" ? windowContact : o.type === "garage" ? garageContact : doorContact;
        const secondLeaf = o.leaves === 2;
        result.set(o.id, {
          cover: chosenOr(o.cover, covers?.get(o.id)),
          // a window with a handle sensor gets no plain contact automatically
          contact: o.sensor === "handle" && o.contact == null ? null : chosenOr(o.contact, contacts.get(o.id)),
          tilt: o.tilt === "none" ? null : o.tilt,
          contact2: secondLeaf ? unlessNone(o.contact2) : null,
          tilt2: secondLeaf ? unlessNone(o.tilt2) : null,
          position: unlessNone(o.position),
          positionInverted: !!o.position_inverted,
          tiltAngle: unlessNone(o.tilt_angle),
          tiltMax: o.tilt_max ?? null,
          tiltOffset: o.tilt_offset ?? null,
          tiltInvert: !!o.tilt_invert,
          shut: !!o.shut,
          angled: o.type === "door" && !!o.open_angle,
          lock: o.type === "door" ? unlessNone(o.lock) : null,
          cover2: o.type === "garage" ? null : unlessNone(o.cover2),
        });
      }
    }
  }
  return result;
}

type SashPosition = "open" | "tilted" | "closed";

const POSITION_WORDS: [RegExp, SashPosition][] = [
  [/^(tilted|tilt|gekippt|kipp)/i, "tilted"],
  [/^(open|opened|offen|geöffnet|on)$/i, "open"],
  [/^(closed|close|geschlossen|zu|off)$/i, "closed"],
];

/**
 * Whether a window or door is open, tilted or closed, from its contact. Understands plain contacts (on is open),
 * handle sensors with three states (also in German), and contacts that report it in a `window_state` attribute.
 * Null when the sensor says nothing usable.
 */
/**
 * The 3D view draws the pieces of a pane that runs over several edges (a bay window) as one pane and knows it by its `front`
 * id; its links and states are kept per piece. This adds an entry for every front id, taken from its first piece that has one,
 * so the pane gets its blind, its state and its tap target (#115).
 */
export function withFrontIds<T>(byOpening: ReadonlyMap<string, T>, floors: readonly Floor[]): Map<string, T> {
  const out = new Map(byOpening);
  for (const floor of floors)
    for (const o of floor.openings) {
      if (!o.front || out.has(o.front)) continue;
      const value = byOpening.get(o.id);
      if (value !== undefined) out.set(o.front, value);
    }
  return out;
}

export function windowPosition(st: HassEntity | undefined): SashPosition | null {
  if (!st || isUnavailable(st)) return null;
  const fromAttribute = st.attributes.window_state;
  for (const text of [typeof fromAttribute === "string" ? fromAttribute : "", st.state]) {
    const word = text.trim();
    const match = word && POSITION_WORDS.find(([pattern]) => pattern.test(word));
    if (match) return match[1];
  }
  return null;
}

/** A door leaf without a contact sensor stands half open, so the doorway stays readable. */
export const DOOR_DEFAULT_OPEN = 0.5;

/** How far a blind is open according to a position sensor: a percentage or a 0-1 fraction. Null when unknown. */
function reportedPosition(hass: HomeAssistant, id: string | null | undefined): number | null {
  const st = id ? hass.states[id] : undefined;
  const value = st && !isUnavailable(st) ? Number(st.state) : NaN;
  if (!Number.isFinite(value)) return null;
  const isPercent = st!.attributes.unit_of_measurement === "%" || value > 1;
  return Math.min(1, Math.max(0, isPercent ? value / 100 : value));
}

/** How closed the blind is (0 open, 1 closed) from the position sensor, else from the cover entity. Null without cover data. */
/** How far a cover entity is closed (0 up, 1 down), or null without one. */
function coverClosed(hass: HomeAssistant, id: string | null | undefined): number | null {
  const cover = id ? hass.states[id] : undefined;
  if (!cover || isUnavailable(cover)) return id ? 0 : null;
  const percent = cover.attributes.current_position;
  if (typeof percent === "number") return 1 - Math.min(100, Math.max(0, percent)) / 100;
  if (cover.state === "closed") return 1;
  return cover.state === "opening" || cover.state === "closing" ? 0.5 : 0;
}

/** How far the slats of a venetian blind are open (0 shut, 1 level), from its tilt position; null when it reports none. */
function slatsOpen(hass: HomeAssistant, id: string | null | undefined): number | null {
  const tilt = id ? hass.states[id]?.attributes.current_tilt_position : undefined;
  return typeof tilt === "number" ? Math.min(100, Math.max(0, tilt)) / 100 : null;
}

function blindClosedFraction(hass: HomeAssistant, e: OpeningEntities): number | null {
  const reported = reportedPosition(hass, e.position);
  if (reported !== null) return e.positionInverted ? reported : 1 - reported;
  const cover = e.cover ? hass.states[e.cover] : undefined;
  if (cover && !isUnavailable(cover)) {
    const percent = cover.attributes.current_position;
    if (typeof percent === "number") return 1 - Math.min(100, Math.max(0, percent)) / 100;
    if (cover.state === "closed") return 1;
    return cover.state === "opening" || cover.state === "closing" ? 0.5 : 0;
  }
  return e.cover ? 0 : null;
}

/** A smart lock that stands unlocked or open (unlocking counts once it has happened, jammed and unknown do not). */
export function isUnlocked(hass: HomeAssistant, lock: string | null | undefined): boolean {
  const state = lock ? hass.states[lock]?.state : undefined;
  return state === "unlocked" || state === "open" || state === "opening";
}

export interface OpeningState {
  open: number;
  open2: number;
  tilt: number;
  tilt2: number;
  cover: number | null;
  sensed: boolean;
  /** A door whose smart lock is unlocked (or open). */
  unlocked?: boolean;
  /** A door leaf drawn where it is assumed to stand, as no sensor tells: it does not glow as open. */
  assumed?: boolean;
  /** The second blind of a wide window (its right half): how far it is closed. */
  cover2?: number | null;
  /** Venetian blinds: how far the slats are open (0 shut, 1 level), from the cover's tilt position. */
  slats?: number | null;
}

/**
 * The look of an opening from its entities. Windows: sash open or tilted, and how far the blind is closed. Doors: leaf
 * open (contact) or half open. Garage doors: closed fraction from the cover or the contact.
 */
export function openingState(hass: HomeAssistant, e: OpeningEntities, type: Opening["type"] = "window"): OpeningState {
  const isOn = (id: string | null | undefined) => !!id && hass.states[id]?.state === "on";
  const isKnown = (id: string | null | undefined) => !!id && !!hass.states[id] && !isUnavailable(hass.states[id]);
  const positionOf = (id: string | null | undefined) => (id ? windowPosition(hass.states[id]) : null);
  const cover = blindClosedFraction(hass, e);

  if (type === "door") {
    // a door with a roller shutter (front door, patio door): the blind comes down over it
    const leaf = positionOf(e.contact);
    const open = leaf === null ? (e.shut ? 0 : e.angled ? 1 : DOOR_DEFAULT_OPEN) : leaf === "closed" ? 0 : 1;
    return { open, open2: positionOf(e.contact2) === "open" ? 1 : 0, tilt: 0, tilt2: 0, cover, sensed: leaf !== null || cover !== null, unlocked: isUnlocked(hass, e.lock), assumed: leaf === null };
  }
  if (type === "garage") {
    // a garage door without a cover shows its contact: open or closed; so does one whose cover cannot tell (a remote without
    // feedback stays unknown)
    const sensed = cover !== null || isKnown(e.contact);
    const coverTells = reportedPosition(hass, e.position) !== null || isKnown(e.cover);
    const fromContact = isKnown(e.contact) ? (isOn(e.contact) ? 0 : 1) : null;
    return { open: 0, open2: 0, tilt: 0, tilt2: 0, cover: (coverTells ? cover : (fromContact ?? cover)) ?? 1, sensed };
  }

  // a window: the second leaf stays closed without a sensor and tilts like the first
  const secondTilted = isOn(e.tilt2) || positionOf(e.tilt2) === "tilted" || positionOf(e.contact2) === "tilted";
  let tilted = isOn(e.tilt) || positionOf(e.tilt) === "tilted" || positionOf(e.contact) === "tilted";
  let tiltAmount = tilted ? 1 : 0;
  // an angle sensor tilts the sash as far as it reports, as a share of the angle that counts as fully tilted
  const rawAngle = e.tiltAngle ? Number(hass.states[e.tiltAngle]?.state) : NaN;
  if (Number.isFinite(rawAngle)) {
    const degrees = (rawAngle - (e.tiltOffset ?? 0)) * (e.tiltInvert ? -1 : 1);
    tiltAmount = Math.min(1, Math.max(0, degrees / (e.tiltMax || 15)));
    if (tiltAmount < 0.08) tiltAmount = 0;
    tilted = tiltAmount > 0;
  }
  return {
    open: positionOf(e.contact) === "open" && !tilted ? 1 : 0,
    open2: positionOf(e.contact2) === "open" && !secondTilted ? 1 : 0,
    tilt: tiltAmount,
    tilt2: secondTilted ? 1 : 0,
    cover,
    sensed: isKnown(e.contact) || isKnown(e.tilt) || Number.isFinite(rawAngle),
    ...(e.cover2 ? { cover2: coverClosed(hass, e.cover2) } : {}),
    ...(slatsOpen(hass, e.cover) !== null ? { slats: slatsOpen(hass, e.cover) } : {}),
  };
}
