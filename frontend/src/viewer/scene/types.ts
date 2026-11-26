// The types of the 3D viewer's public interface: what the main bundle hands in (devices, screens, persons) and what the viewer
// reports back (taps, drags, statistics).

import type { Floor } from "../../model.ts";
import type { LiveScreen } from "../live-screens.ts";
import type { AnimationName } from "../../light-effects.ts";

export type { Theme } from "../theme.ts";
export type { RobotInfo } from "../robot.ts";
export type { OpeningState } from "../openings.ts";
export type { SkyView, SkyWeather } from "../live-weather.ts";
export type { EnergyArc, PlanPoint, SparkField } from "../live-energy.ts";
export type { SoundSpot } from "../live-sound.ts";

export type Quality = "auto" | "low" | "high";
export type WallMode = "auto" | "cut" | "slope";

export type FloorStack = "dim" | "stacked" | "single";


export type LampModel = "ceiling" | "downlight" | "spot" | "panel" | "pendant" | "fan" | "floor" | "uplight" | "table" | "wall" | "strip" | "bollard" | "garden";

export interface ViewerOptions {
  quality?: Quality;
  /** Pull floors apart in the house view (default true). */
  explode?: boolean;
  onRoomTap?: (floorId: string, roomId: string | null) => void;
  /** A note was marked as done (its button, shown when it has a due day or repeats). */
  onNoteDone?: (noteId: string) => void;
  /** Text of the "done" button of a note and the line with the day it was last done. */
  noteDoneLabels?: { done: string; last: (day: string) => string };
  onFloorTap?: (floorId: string) => void;
  onBack?: () => void;
  /** Short tap on a device marker. */
  onDeviceTap?: (entityId: string, x: number, y: number) => void;
  /** Double tap on a room of the opened floor (without it, a double tap goes one level back). */
  onRoomDoubleTap?: (floorId: string, roomId: string) => void;
  /** Long press on a device marker. */
  onDeviceHold?: (entityId: string, x: number, y: number) => void;
  /**
   * Vertical swipe on a device (dim a lamp, move a blind): "start" returns whether the device takes
   * it; "move" reports the distance from the start (pixels, down positive).
   */
  onDeviceSwipe?: (entityId: string, phase: "start" | "move" | "end", dy: number, x: number, y: number) => boolean | void;
  /** Furnishing in 3D: a device was selected (null: none) or dragged to a new place. */
  onDeviceSelect?: (entityId: string | null) => void;
  onDeviceMove?: (entityId: string, x: number, z: number) => void;
  /** Furnishing in 3D: an item was selected (null: none) or dragged to a new place. */
  onFurnitureSelect?: (furnitureId: string | null) => void;
  onFurnitureMove?: (furnitureId: string, x: number, z: number) => void;
  onStats?: (stats: ViewerStats) => void;
  /** Text for the floor labels in the house view, e.g. "5 rooms". */
  floorInfo?: (floor: Floor) => string;
}

/** A device shown in the 3D view (prepared by the main bundle from placements and states). */
export interface DeviceMarker {
  /** entity_id */
  id: string;
  /** A small label under the pin (the device's own name, #156); empty = none. */
  caption?: string;
  /** The device's own name from the plan (the card option marker_names shows it as caption). */
  ownName?: string;
  /** The own name is shown under the pin (per device). */
  showName?: boolean;
  floorId: string;
  roomId: string | null;
  x: number;
  z: number;
  /** Height above the floor. */
  y: number;
  /** Inline SVG markup of the icon. */
  icon: string;
  name: string;
  /** Short state text, e.g. "60 %" or "21,5 °C". */
  text: string;
  active: boolean;
  /** The text shows on the floor as well (a marker set to "always"); otherwise only in its room or while active. */
  full?: boolean;
  unavailable: boolean;
  /** Light cone on the floor for lights that are on. */
  glow: { color: [number, number, number]; level: number } | null;
  /** Power drawn (W) when the device reports it. */
  power?: number | null;
  /** Lights: lamp model drawn at the device position. */
  lamp?: LampModel | null;
  /** Lamp: turn around y (degrees), size (w, d, h) and height of what it stands on. */
  /** A mirrored lamp furniture (its pack model is drawn mirrored). */
  mirror?: boolean;
  rotation?: number;
  size?: [number, number, number];
  base?: number;
  /** LED strip: roll about its length (degrees) and standing upright (its length runs up from the base). */
  roll?: number;
  upright?: boolean;
  /** LED strip: how steeply its length rises (degrees). */
  rise?: number;
  /** Show the HTML marker (false: the 3D object alone stands for the device). */
  pin?: boolean;
  /** A placed device fixed against moving. */
  fixed?: boolean;
  /** The marker setting of its placement or furniture item (undefined = automatic). */
  show?: "always" | "active" | "no_power" | "never";
  /** The 3D lamp can be tapped (it has an entity). */
  pickable?: boolean;
  /** Furniture item this lamp is (for moving it in 3D). */
  furnitureId?: string;
  /** Lamp from a furniture pack (its type): drawn from the pack's parts. */
  pack?: string | null;
  /** Height its light comes from (pack lamps). */
  lightY?: number;
  /** Hanging lamps and fans: the ceiling they hang from (null = the floor height). */
  ceiling?: number;
  /** Ceiling fan: turns of its blades per second (0 or unset = standing still). */
  spin?: number;
  /** A colour effect runs (colour loop …): the colour is animated in 3D. */
  effect?: AnimationName;
  /** Pendant shape: shade (default), globe, cone or drum. */
  variant?: string | null;
  /** Formatted power, e.g. "85 W". */
  powerText?: string;
  /** A plugin's shape on the floor from the device (a camera's field of view): stops at walls; `through` lets taps pass. */
  wedge?: { angle: number; reach: number; near: number; color: [number, number, number]; opacity: number; through: boolean; walls?: boolean } | null;
}

/** A ray from the camera through the pointer, in building coordinates (heights above the ground). */
export interface SurfaceRay {
  o: [number, number, number];
  d: [number, number, number];
}

/** Grab and move things on surfaces with rays: start says whether something was grabbed. */
export interface SurfaceGrab {
  start(ray: SurfaceRay): boolean;
  move(ray: SurfaceRay): void;
  end(): void;
}

/** A lit TV or monitor screen: colour (the light of a lit item) and brightness (0..1). */

export interface ScreenState {
  color: [number, number, number];
  level: number;
  /** Strength of the glow frame around the screen: 1 is the usual, 0 draws none (the item's own *Glow behind the TV*). */
  halo?: number;
  /** The item's own animation while it is on (pulse, flicker, rainbow or a plugin's, #229). */
  effect?: string;
  /** Furniture with a state: glowing faces on top of the item instead of a screen – the whole top, or a half of it. */
  faces?: { part: "all" | "left" | "right" | "top" | "bottom"; color: [number, number, number]; level: number }[];
  /** Light switches and sockets: the buttons (gangs) that are on glow in their colour. */
  gangs?: { gang: number; color: [number, number, number]; level: number }[];
  /** A heater from a pack without a screen part (a towel radiator): the whole item glows in the colour while it heats. */
  heat?: boolean;
  /** An electric pack item that runs (a coffee machine, a compressor): its status lights and display light up. */
  leds?: boolean;
  /** A home battery: its charge (0…1) fills the bar on its front. */
  fill?: number;
  /** A 3D printer: how far the print has grown (0…1) on its bed, in the colour. */
  print?: number;
}

/** Position of the sun (from sun.sun): degrees above the horizon and clockwise from north. */
export interface SunState {
  elevation: number;
  azimuth: number;
}

/** What a TV shows (NextFloor TV screens): the viewer finds the screen of the furniture itself. */
export type LiveScreenInput = Omit<LiveScreen, "x" | "z" | "rotation" | "rect"> & { furnitureId: string };

/** Called after every frame for each card anchor: where it is on screen (CSS pixels) and whether it shows. */
export type LiveAnchorCallback = (index: number, x: number, y: number, visible: boolean) => void;

export interface PersonPin {
  id: string;
  name: string;
  initials: string;
  picture: string | null;
  floorId: string;
  roomId: string;
  x: number;
  z: number;
}

export interface ViewerStats {
  /** Frames per second while something moves; 0 at rest (nothing is drawn then). */
  fps: number;
  /** What keeps the picture moving: camera, floors, openings, flash, roof, flow, effect, robot, orbit, tint. */
  busy: string[];
  /** Slowest frame of the last measuring window (ms). */
  worstMs: number;
  calls: number;
  triangles: number;
  /** The low quality level is active (tablet). */
  low: boolean;
  pixelRatio: number;
}
