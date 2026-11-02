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
/** How the floors above and below the chosen one are shown. */
export type FloorStack = "dim" | "stacked" | "single";

export type LampModel = "ceiling" | "downlight" | "spot" | "panel" | "pendant" | "fan" | "floor" | "uplight" | "table" | "wall" | "strip" | "bollard" | "garden";

export interface ViewerOptions {
  quality?: Quality;
  /** Pull the floors apart in the house view (default true). */
  explode?: boolean;
  onRoomTap?: (floorId: string, roomId: string | null) => void;
  onFloorTap?: (floorId: string) => void;
  onBack?: () => void;
  /** A short tap on a device marker. */
  onDeviceTap?: (entityId: string, x: number, y: number) => void;
  /** A double tap on a room of the opened floor (without it, a double tap goes one level back). */
  onRoomDoubleTap?: (floorId: string, roomId: string) => void;
  /** A long press on a device marker. */
  onDeviceHold?: (entityId: string, x: number, y: number) => void;
  /**
   * A vertical swipe on a device (dim a lamp, move a blind). "start" returns whether the device takes it; "move" reports the
   * distance from the start (pixels, down is positive).
   */
  onDeviceSwipe?: (entityId: string, phase: "start" | "move" | "end", dy: number, x: number, y: number) => boolean | void;
  /** Furnishing in 3D: a device was selected (null: none) or dragged to a new place. */
  onDeviceSelect?: (entityId: string | null) => void;
  onDeviceMove?: (entityId: string, x: number, z: number) => void;
  /** Furnishing in 3D: a piece of furniture was selected (null: none) or dragged to a new place. */
  onFurnitureSelect?: (furnitureId: string | null) => void;
  onFurnitureMove?: (furnitureId: string, x: number, z: number) => void;
  onStats?: (stats: ViewerStats) => void;
  /** The text for the floor labels in the house view, for example "5 rooms". */
  floorInfo?: (floor: Floor) => string;
}

/** A device shown in the 3D view, prepared by the main bundle from placements and states. */
export interface DeviceMarker {
  /** The entity id. */
  id: string;
  /** A small label under the pin: the device's own name. Empty for none. */
  caption?: string;
  /** The device's own name from the plan (the card option marker_names shows it as the caption). */
  ownName?: string;
  /** The own name is shown under the pin (per device). */
  showName?: boolean;
  floorId: string;
  roomId: string | null;
  x: number;
  z: number;
  /** The height above the floor. */
  y: number;
  /** The icon as inline SVG markup. */
  icon: string;
  name: string;
  /** A short state text such as "60 %" or "21,5 °C". */
  text: string;
  active: boolean;
  /** The text shows on the floor as well (a marker set to "always"); otherwise only in its room or while active. */
  full?: boolean;
  unavailable: boolean;
  /** A light cone on the floor for lights that are on. */
  glow: { color: [number, number, number]; level: number } | null;
  /** The power drawn (W), when the device reports it. */
  power?: number | null;
  /** Lights: the lamp model drawn at the device's position. */
  lamp?: LampModel | null;
  /** A mirrored lamp furniture: its pack model is drawn mirrored. */
  mirror?: boolean;
  /** A lamp: turn around y (degrees), size (w, d, h) and the height of what it stands on. */
  rotation?: number;
  size?: [number, number, number];
  base?: number;
  /** An LED strip: roll about its length (degrees), and standing upright (its length runs up from the base). */
  roll?: number;
  upright?: boolean;
  /** An LED strip: how steeply its length rises (degrees). */
  rise?: number;
  /** Show the HTML marker. False: the 3D object alone stands for the device. */
  pin?: boolean;
  /** A placed device fixed against moving. */
  fixed?: boolean;
  /** The marker setting of its placement or furniture item (undefined means automatic). */
  show?: "always" | "active" | "no_power" | "never";
  /** The 3D lamp can be tapped: it has an entity. */
  pickable?: boolean;
  /** The furniture item this lamp is, so it can be moved in 3D. */
  furnitureId?: string;
  /** A lamp from a furniture pack (its type): drawn from the pack's parts. */
  pack?: string | null;
  /** The height its light comes from (pack lamps). */
  lightY?: number;
  /** Hanging lamps and fans: the ceiling they hang from (null = the floor height). */
  ceiling?: number;
  /** Ceiling fan: turns of its blades per second (0 or unset = standing still). */
  spin?: number;
  /** A colour effect runs (colour loop and the like): the colour is animated in 3D. */
  effect?: AnimationName;
  /** The pendant shape: shade (default), globe, cone or drum. */
  variant?: string | null;
  /** The formatted power, for example "85 W". */
  powerText?: string;
  /** A plugin's shape on the floor from the device (a camera's field of view): stops at walls; `through` lets taps pass. */
  wedge?: { angle: number; reach: number; near: number; color: [number, number, number]; opacity: number; through: boolean } | null;
}

/** A ray from the camera through the pointer, in building coordinates (heights above the ground). */
export interface SurfaceRay {
  o: [number, number, number];
  d: [number, number, number];
}

/** Grabbing and moving things on surfaces with rays; `start` says whether something was grabbed. */
export interface SurfaceGrab {
  start(ray: SurfaceRay): boolean;
  move(ray: SurfaceRay): void;
  end(): void;
}

/** A lit TV or monitor screen: the colour (the light of a lit item) and the brightness (0..1). */
export interface ScreenState {
  color: [number, number, number];
  level: number;
  /** Strength of the glow frame around the screen: 1 is the usual, 0 draws none (the item's own *Glow behind the TV*). */
  halo?: number;
  /** Furniture with a state: glowing faces on top of the item instead of a screen, the whole top or a half of it. */
  faces?: { part: "all" | "left" | "right" | "top" | "bottom"; color: [number, number, number]; level: number }[];
}

/** The position of the sun (from sun.sun): degrees above the horizon and clockwise from north. */
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
  /** Frames per second while something moves; 0 at rest, when nothing is drawn. */
  fps: number;
  /** What keeps the picture moving: camera, floors, openings, flash, roof, flow, effect, robot, orbit, tint. */
  busy: string[];
  /** The slowest frame of the last measuring window (ms). */
  worstMs: number;
  calls: number;
  triangles: number;
  /** The low quality level is active (tablet). */
  low: boolean;
  pixelRatio: number;
}
