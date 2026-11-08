// Data model shared by editor, 3D view and backend (see custom_components/nextfloor/schema.py).
// Units are metres; x grows to the right, z grows downwards (as in the 2D editor).

import type { PluginRef } from "./plugins/api.ts";
import { packItem } from "./packs.ts";
import type { LightEffectConfig } from "./light-effects.ts";
import type { StairConfig } from "./geometry/stairs.ts";
import type { LampModel } from "./viewer/viewer3d.ts";
import type { ShowWhen } from "./entities/visibility.ts";

export type Vec2 = [number, number];

/** Sensors a room's climate is read from (null = automatic, "none" = no value). */
export interface RoomClimate {
  temperature?: string | string[] | null;
  humidity?: string | string[] | null;
  co2?: string | string[] | null;
}

/** A wall height on a room edge, or one per part of a split edge. */
export type WallHeight = number | null | (number | null)[];

export interface Room {
  /** Room temperature, humidity and CO2: chosen sensors instead of the automatic pick. */
  climate?: RoomClimate | null;
  id: string;
  name: string;
  area_id: string | null;
  /** Home Assistant areas that are parts of this room without walls of their own (a reading corner, a shelf): their devices belong to it. */
  sub_areas?: string[] | null;
  /** The camera the room opens with when it is tapped in 3D (null: framed from above). */
  start_view?: StartView | null;
  points: Vec2[];
  floor_material: string;
  /** Paint of the room's walls on its inside in the solid wall view ("#rrggbb"; null = the building's inside colour). */
  wall_paint?: string | null;
  /** Entities shown in the room's panel although they are not in the plan. */
  panel?: string[];
  /** Entities of the room's area kept out of the room panel. */
  hidden?: string[];
  /** Entities whose state text the room panel leaves out (a cover that only reports "unknown", D154). */
  no_state?: string[];
  /**
   * Height of the wall on each edge (index = edge points[i] -> points[i + 1]); null = full floor height, 0 = no
   * wall. An edge that other rooms split into parts may carry a list instead: one height per part, in order.
   */
  wall_heights?: WallHeight[];
  /**
   * A sloping wall: the height at the END of each edge (index = edge). The edge's `wall_heights` entry is then its height at the START; the
   * top runs straight between the two (a lean-to, a clerestory), and both may be above the floor height. null = a level wall. Whole edges only.
   */
  wall_slopes?: (number | null)[];
  /**
   * Thickness of the wall on each edge in m (index = edge); null = the building's exterior or interior
   * thickness. A wall two rooms share takes the thicker of their settings (D149). A split edge may carry one thickness per part.
   */
  wall_thickness?: (number | null | (number | null)[])[];
  /**
   * Split points on each edge (index = edge): distances in metres from points[i] where the wall is cut
   * into parts of their own (each with its own height), e.g. a 2.5 m wall next to a 1.7 m one in line.
   */
  wall_splits?: (number[] | null)[];
  /**
   * Height of this room's ceiling in m (null = the floor height): a low bathroom on a high floor. Ceiling lights, LED strips and ceiling-mounted
   * items hang from it, and its walls default to it (a wall shared with a room without a ceiling of its own keeps the floor height).
   */
  ceiling?: number | null;
  /** Light moods saved in the room panel (the light designer): the lights as they were, to set again. */
  moods?: LightMood[];
  /** Whether the room counts as living area (null: by its name – a garage, cellar or utility room does not). */
  living?: boolean | null;
  /** Cleaning: the script or button that sends the robot vacuum to this room (its panel shows "Clean"). */
  clean_entity?: string | null;
  /**
   * The room's floor lies this much below (negative) or above its floor's level, in m (a sunken entrance, a split level; #57). Its
   * floor, the bottom of its walls, its doors and windows and what stands in it move with it; its ceiling stays where it is.
   */
  floor_offset?: number | null;
  /** Underfloor heating: the thermostat, valve or switch of the room's floor heating; its floor glows warm while it heats. */
  floor_heating?: string | null;
  /** Announcements: the room's speaker (null = automatic, "none" = the room never speaks). */
  announce_speaker?: string | null;
  /** Announcements to several rooms leave this room out from `from` to `to` ("HH:MM", may run over midnight). */
  announce_quiet?: { from: string; to: string } | null;
}

export type OpeningType = "door" | "window" | "garage";

/** How a window's sash opens: turn (and tilt) into the room, slide along the wall, or swing out from its top edge. */
export const WINDOW_OPENINGS = ["turn", "slide", "top"] as const;
export type WindowOpening = (typeof WINDOW_OPENINGS)[number];

/** Entity link of an opening: null = assigned automatically by area, "none" = no entity. */
export type EntityRef = string | null;

export interface Opening {
  id: string;
  room_id: string;
  /** Room edge the opening sits on (points[edge] -> points[edge + 1]); 0 in a free wall. */
  edge: number;
  /** Distance of the opening's centre from points[edge], or from the free wall's start (metres). */
  offset: number;
  /** Free wall the opening sits in (its id); room_id is then the room the wall stands in. */
  wall?: string | null;
  width: number;
  type: OpeningType;
  /** Height of the bottom above the floor; 0 for doors, garage doors and terrace doors. */
  sill: number;
  height: number;
  /** Hinge as seen from the room; with two leaves, the side of the main leaf. */
  hinge: "left" | "right";
  /** One leaf, or two (double door, French window) opening from the middle. */
  leaves: 1 | 2;
  /** Doors swing into their room ("in") or to the other side ("out"). */
  swing: "in" | "out";
  /** Look of the door or window (null = automatic: a front door in an exterior wall, else a room door). */
  style?: OpeningStyle | null;
  /** One sidelight: on the hinge side instead of opposite the hinge. */
  sidelight_hinge?: boolean;
  /** Width of the sidelight(s) in m (null = automatic); with two, `sidelight_width2` is the right one (seen from the room). */
  sidelight_width?: number | null;
  sidelight_width2?: number | null;
  /**
   * Glass walls: how many panes the mullions divide the wall into (null = one about every 0.9 m, as it always was;
   * 0 = one single pane without a mullion, for the large glazing modern houses have).
   */
  panes?: number | null;
  /**
   * Glass walls: the pieces of one pane that follows a curved wall share this id. Each piece is a normal opening on its own
   * edge with a legal offset and width, stored in order along the wall; the 3D view draws them as one pane without a jamb
   * where two of them meet. Null for a pane that fits on a single edge.
   */
  front?: string | null;
  /** Contact of the second leaf (null = none). */
  contact2: string | null;
  /** Windows: which sensors report the sash (null: a contact, plus a tilt sensor when one is set). */
  sensor?: "contact" | "handle" | "contact_tilt" | null;
  /** The same for the second leaf of a double window, with its own tilt sensor. */
  sensor2?: "contact" | "handle" | "contact_tilt" | null;
  tilt2?: string | null;
  /** A sensor reporting the blind's position while it moves (covers that only report at the end). */
  position?: string | null;
  /** The position sensor counts the other way round (0 = open). */
  position_inverted?: boolean;
  /** Windows: a sensor with the sash's tilt angle (degrees); the sash tilts in 3D as far as it reports. */
  tilt_angle?: EntityRef;
  /** Angle that counts as fully tilted (default 15°), an offset the sensor reports when closed, and the other sign. */
  tilt_max?: number | null;
  tilt_offset?: number | null;
  tilt_invert?: boolean;
  /** Door: drawn closed when no sensor says otherwise (default: half open, so the door is seen). */
  shut?: boolean;
  /** Door: how far the leaf opens, in degrees (null = the usual swing, a door without a sensor half of it). Set, a door without a sensor stands that far open. */
  open_angle?: number | null;
  /** Highlight in 3D while open (null, default) or while closed (a WC or a child's room door). */
  mark?: "closed" | null;
  /** Ask before moving the blind or garage door; it then does not follow a swipe either. */
  confirm?: boolean;
  cover: EntityRef;
  /** Windows and doors: a second blind for the right half (seen from the room) of a wide window. */
  cover2?: string | null;
  /** The kind of blind: a roller shutter outside (null, default), a venetian blind (Raffstore) outside with slats, or a roller blind inside. */
  blind?: "roller" | "venetian" | "inside" | null;
  /** The favourite position of the blind (%, open = 100) – Somfy's "My": a button in its menu moves it there. */
  my_position?: number | null;
  contact: EntityRef;
  /** Windows: how the sash opens – turns and tilts into the room (null), slides behind the fixed pane, or swings out at the bottom (top-hung). */
  opens?: WindowOpening | null;
  /** Windows: the board inside and the sill outside – automatic (both when the sill is above 30 cm), none, or only one of them. */
  sill_boards?: "auto" | "none" | "inside" | "outside" | null;
  /** Windows below the ground: their light well (null = by itself when the sill lies below the ground, false = none, true = always). */
  light_well?: boolean | null;
  /** Windows: false leaves this window out of the rain warning (a window under a roof or an awning). */
  rain_warning?: boolean;
  /** Doors: a smart lock (lock.*). A tap on the door locks or unlocks it after asking; while unlocked, its free edge glows. */
  lock?: string | null;
  tilt: EntityRef;
}

/** A picture rule of a screen: while `entity` is in `state`, the stored image (or a URL) is shown. */
export interface ScreenPicture {
  entity: string;
  /** Compare this attribute (e.g. app_name) instead of the state. */
  attribute?: string | null;
  /** The value to match: exact, or contained in the value's text ("youtube" in "com.google.android.youtube.tv"); "*" = any. */
  state: string;
  /** An image id of the image store, or an http(s) URL. */
  image: string;
}

export interface Furniture extends LightEffectConfig {
  /** A tap on the item runs this own action (open a path, an entity's details, a service, a browser_mod popup); null = the item's usual tap. */
  tap?: Pick<CustomButton, "action" | "target" | "data"> | null;
  /** Fixed against moving by accident. */
  locked?: boolean | null;
  /** Shown only while an entity is in a state (seasonal decoration behind a helper); null = always. */
  show_when?: ShowWhen | null;
  /** Its pin moved by hand (m in the plan and up), for pieces that stand close together. */
  pin_offset?: PinOffset | null;
  id: string;
  type: string;
  x: number;
  z: number;
  rotation: number;
  /** Tilted about its own axes (degrees): `tilt_x` nose up or down (about the width axis), `tilt_z` rolled sideways (about the depth axis); null = upright. */
  tilt_x?: number | null;
  tilt_z?: number | null;
  w: number;
  d: number;
  h: number;
  variant: string | null;
  /** Own name (e.g. "Wechselrichter Nord"); null = the type's name. */
  name?: string | null;
  /** The own name shows as a small label under its marker in 3D. */
  show_name?: boolean;
  /** Lamps: how strongly the lamp glows in 3D, 0.1–1.5 (1 = as bright as the light reports) – #181. */
  glow_scale?: number | null;
  /** Screens: how strongly the glow behind a playing TV shines, 0 to 1.5 (null = 1, 0 = off). */
  ambilight?: number | null;
  /** Speakers (a linked media player): size of the sound rings while it plays, 0 to 1.5 (null = 1, 0 = none) – #94. */
  sound_rings?: number | null;
  /** An own symbol for the marker: a Material Design icon name without "mdi:" (null = by kind). */
  icon?: string | null;
  /** Linked entity, e.g. the TV's media player (null = automatic, "none" = none). */
  entity?: EntityRef;
  /** Power sensor (null = automatic: the linked entity's device or a matching name). */
  power?: EntityRef;
  /** Fridges and freezers: a temperature sensor of the fridge and one of the freezer compartment; the marker shows them and warns when too warm. */
  temp_entity?: string | null;
  temp_entity2?: string | null;
  /** Smart fridge: door sensors of the left (freezer) and right (fridge) door; the doors open in 3D while they report open. */
  door_left?: EntityRef;
  door_right?: EntityRef;
  /** Home battery: its state of charge (%). Wallbox: a status sensor (charging, car plugged in). */
  soc?: EntityRef;
  /** Home battery: a separate sensor with the charging power (W) when the power sensor only reports discharging. */
  charge?: EntityRef;
  /** Meter: a separate sensor with the export power (W) when the power sensor only reports import. */
  export?: EntityRef;
  /** Meter in the advanced energy mode: the meter it hangs off (a sub-meter; null = a main meter). */
  parent_meter?: string | null;
  /** Sub-meter: its power sensor counts the other way round (+ has to mean drawn). */
  meter_invert?: boolean;
  /** Sub-meter: the floors it feeds; consumers placed there draw from it instead of the house. */
  meter_floors?: string[];
  status?: EntityRef;
  /** Robot vacuum: sensor naming the room it cleans right now (null = automatic, "none" = the dock's room). */
  room_sensor?: EntityRef;
  /** Ask before switching the linked entity. */
  confirm?: boolean;
  /** Its marker in 3D: automatic (null), always shown, shown without watts, or hidden. */
  marker?: MarkerShow | null;
  /** Height of the bottom edge above the floor (null = default: the floor, a pack item's mount, a surface below). */
  mount_y?: number | null;
  /** Ceiling lights, fans and ceiling-mounted items: the height of the ceiling right there (a sloping ceiling, a high spot); null = the room's ceiling. */
  ceiling_y?: number | null;
  /** Ceiling fan: its fan entity (null = found in the room, "none" = none). The linked light is its light kit. */
  fan_entity?: EntityRef;
  /** Any furniture: an entity whose state the item shows – it glows while on, occupied or home (a bed with an occupancy mat, a chair, a sauna). */
  state_entity?: EntityRef;
  /** A second state entity for the other half: left/right (a double bed) or bottom/top (a bunk bed). */
  state_entity2?: EntityRef;
  state_split?: "left_right" | "top_bottom" | null;
  /** Household items: the sensor they show – a bin's pickup, a mailbox's post, a plant's soil moisture (null = none). */
  care_entity?: string | null;
  /** Plants: the soil moisture below which they are thirsty (%, default 20). */
  thirsty_below?: number | null;
  /** Light switches and sockets: the entity of each button or socket, in order (null = none). */
  /** Items with moving parts (curtain, roller screen, awning, gate): the cover entity they follow (null = none, they rest). */
  cover_entity?: string | null;
  /** The cover reports its position the other way round (0 = open): an awning that runs the opposite way – #100. */
  cover_inverted?: boolean;
  gang_entities?: (string | null)[];
  /** Lamps: a second entity whose colour and brightness the lamp shows while the linked switch is on (a relay switches the light, the bulb itself knows its colour). */
  color_entity?: EntityRef;
  /** Lamps: further lights of the same fixture (a night light, an ambient ring), switched on their own; the lamp glows with them while its main light is off. */
  extra_lights?: string[];
  /** Lawn sprinkler: how far its water reaches in m (null = 3 m). */
  spray?: number | null;
  /** Mirrored (left-right) – an L-sofa the other way round, a cabinet with its door on the other side. */
  mirror?: boolean;
  /** Stairs: shape, turn, build, steps and direction (missing on older plans: the simple straight stair). */
  stair?: Partial<StairConfig> | null;
  /** LED strip: tilt about its length (°; 0 = lying flat, 90 = its face points sideways, e.g. along a roof slope). */
  tilt?: number;
  /** LED strip: standing upright – its length runs up from the mount height (door frame, light column). */
  upright?: boolean;
  /** LED strip: how steeply its length rises (°, -80 to 80), e.g. up a sloped ceiling or along a stair. Its low end sits at the mount height, or its high end under the ceiling. */
  rise?: number;
  /** Picture frames: the photo – a stored picture ("image:<id>"), a URL (/local/…, https://…) or an image, camera or media player entity. */
  picture?: string | null;
  /** Picture frames: the white mat around the photo, in % of the shorter side (0 or null = none). */
  picture_border?: number | null;
  /** Picture frames: the photo fills the opening (cropped, default) or shows whole on the mat. */
  picture_fit?: "cover" | "contain" | null;
  /** Screens: pictures shown while an entity is in a state (first match wins; "*" = any state). */
  pictures?: ScreenPicture[];
  /** Screens: what shows around a rule picture – a dark screen (default) or a white one (for dark logos). */
  screen_bg?: "black" | "white";
  /** Parking spots: the vehicle shown (a pack item type) while `entity` reports a car. */
  vehicle?: string | null;
  /** Auto: the car's entities (each null = found on the device of `device`, or of the presence entity). */
  car?: CarLinks | null;
  /** Parking spots: size factor of the vehicle (1 = the pack item's size). */
  scale?: number;
  /** Parking spots: a sensor naming the kind of vehicle, and which vehicle each state means. */
  type_entity?: string | null;
  types?: { state: string; vehicle: string }[];
}

export type LampMount = "ceiling" | "floor" | "table" | "wall";

/** How a device's marker shows in 3D (null = automatic by the marker mode); "active": only while it is on (motion detected, door open). */
export const MARKER_SHOWS = ["always", "active", "no_power", "never"] as const;
export type MarkerShow = (typeof MARKER_SHOWS)[number];

export interface Placement extends LightEffectConfig {
  /** Fixed against moving by accident. */
  locked?: boolean | null;
  entity_id: string;
  x: number;
  z: number;
  /** Height above the floor; null = default for the device kind (and lamp mount). */
  y: number | null;
  /** Lights: how the lamp is mounted; null = ceiling. */
  mount?: LampMount | null;
  /** Turn around the vertical axis (degrees): wall lamps, spots, displays face that way. */
  rotation?: number;
  /** Cameras: opening angle of the field of view (degrees) and how far it reaches (m); null = default. */
  fov?: number | null;
  reach?: number | null;
  /** Cameras: how far it looks down (degrees below the horizon; null = 20° on a wall, 65° as a dome). */
  tilt?: number | null;
  /** Ask before switching this device (3D tap, quick menu, room panel). */
  confirm?: boolean;
  /** Lights: only the switch in the room panel, without brightness, colour temperature and colours. */
  simple?: boolean;
  /** Its marker in 3D: automatic (null), always shown, shown without watts, or hidden. */
  marker?: MarkerShow | null;
  /** An own symbol for the marker: a Material Design icon name without "mdi:" (null = by kind). */
  icon?: string | null;
  /** An own name in the plan (null = the entity's name), without renaming the entity in Home Assistant. */
  name?: string | null;
  /** The own name shows as a small label under its marker in 3D. */
  show_name?: boolean;
  /** Lights: how strongly the light glows in 3D, 0.1–1.5 (1 = as bright as the light reports) – #181. */
  glow_scale?: number | null;
  /** Media players: size of the sound rings while it plays, 0 to 1.5 (null = 1, 0 = none) – #94. */
  sound_rings?: number | null;
  /** Cameras: show the field-of-view wedge on the floor (null = yes). */
  cone?: boolean | null;
  /** Settings plugins added to the device's form: per plugin id, the values by key. */
  plugin?: Record<string, Record<string, string | number | boolean>> | null;
  /** Belongs to Outside: never to the room under it (a weather station on the roof), listed in the Outside panel. */
  outside?: boolean;
  /** Its pin moved by hand from where it would stand (m in the plan and up), so pins of devices close together do not cover each other. */
  pin_offset?: PinOffset | null;
}

/** A pin moved by hand: metres along x and z of the plan, and up. */
export interface PinOffset {
  x?: number;
  z?: number;
  y?: number;
}

export interface Background {
  image_id: string;
  x: number;
  z: number;
  width: number;
  opacity: number;
  /** Turn about the picture's middle (degrees, clockwise in the plan). */
  rotation?: number;
}

export interface Floor {
  id: string;
  name: string;
  elevation: number;
  height: number;
  cut_height: number;
  rooms: Room[];
  openings: Opening[];
  furniture: Furniture[];
  placements: Placement[];
  background: Background | null;
  outdoor: OutdoorArea[];
  /** Free-standing walls (a partition through half a room); room walls come from the room edges. */
  walls?: FreeWall[];
  /** Linked floor of Home Assistant's floor registry. */
  ha_floor: string | null;
  /** The camera this floor opens with (#182): another side than the house view; null = the house view's side. */
  start_view?: StartView | null;
  /** A layer rather than a storey (all the trees, the decoration): the 3D view can show or hide it with an eye. */
  layer?: boolean;
  /** The floor's own meter: a power sensor whose use shows on the floor label and, in this floor's view, on the house card. */
  power_entity?: string | null;
  /** Notes pinned to a spot of the floor ("filter due in March", "fuse 12"), shown in 3D and found by the search. */
  notes?: PlanNote[];
}

/** A note pinned to a spot of a floor. */
export interface PlanNote {
  id: string;
  x: number;
  z: number;
  text: string;
  /** When it is due ("YYYY-MM-DD"): from that day on its pin turns orange. */
  due?: string | null;
}

/** Whether a note is due on a day ("YYYY-MM-DD", today by default). */
export const noteDue = (note: Pick<PlanNote, "due">, today = new Date().toISOString().slice(0, 10)): boolean => !!note.due && note.due <= today;

/** A wall drawn on its own, from a to b along its centre line. */
export interface FreeWall {
  id: string;
  a: Vec2;
  b: Vec2;
  /** Thickness in metres (null = the interior wall thickness of the settings). */
  thickness?: number | null;
  /** Height in metres (null = full floor height), e.g. a half-height wall or a counter. */
  height?: number | null;
  /** A sloping wall: the height at the end b (the height at a stays `height`); null = the same height all along. */
  height_end?: number | null;
}

/** "custom": the roof is made of sections (wings of an L- or T-shaped house, a barn, a lean-to …). */
export type RoofType = "none" | "flat" | "gable" | "custom";

/** Shapes of a roof section. */
export const ROOF_SHAPES = ["gable", "hip", "halfhip", "pyramid", "mansard", "pent", "flat", "parapet"] as const;
export type RoofShape = (typeof ROOF_SHAPES)[number];

/**
 * One roof section over a rectangle of the plan (at the outer wall faces; the overhang comes on top).
 * Heights are above the ground. Across the ridge, side "a" is the low coordinate (z for a ridge along
 * x, x for a ridge along z), side "b" the high one; each side has its own eave height and pitch, so one
 * slope can reach further down (a catslide over a lower part). A pent roof rises from side a.
 */
export interface RoofSection {
  id: string;
  x0: number;
  z0: number;
  x1: number;
  z1: number;
  shape: RoofShape;
  /** The ridge runs along x or along z. */
  axis: "x" | "z";
  eave_a: number;
  eave_b: number;
  /** Slopes in degrees. */
  pitch_a: number;
  pitch_b: number;
  /** Top of the walls below: gable and knee walls are built from here up to the roof. */
  base: number;
  /** Overhang beyond the walls (null = the roof setting). */
  overhang?: number | null;
  /**
   * Overhang of single sides by hand (m): the ends of the ridge (`u0`, `u1`) and the eaves (`a`, `b`); a side that is not listed
   * keeps the automatic value (none where the section meets the house).
   */
  overhang_sides?: Partial<Record<"u0" | "u1" | "a" | "b", number | null>> | null;
  /** Sides a and b swapped: side a is the high coordinate (a pent roof then rises the other way). */
  flip?: boolean;
  /**
   * A flat roof as a free shape: its footprint polygon (plan coordinates at the outer wall faces, the
   * overhang comes on top); x0 … z1 then hold the polygon's bounding box.
   */
  points?: Vec2[] | null;
  /** A dormer: a small section on the slope of another one, open towards that slope at its rear. */
  dormer?: boolean;
  /** Fixed: cannot be moved or resized by accident (the plan lock fixes every section too). */
  locked?: boolean;
  /** A canopy (terrace roof, carport): posts and beams instead of walls, a see-through roof. */
  open?: boolean;
  /** Gable, hip and half-hip sections: their own shape at the start and at the end of the ridge (null: both as the shape says). */
  ends?: [RoofEnd, RoofEnd] | null;
  /** Turned about the middle of its rectangle, degrees clockwise in the plan (a wing at an angle); null = straight. */
  rotation?: number | null;
  /** Half-hips: how high up the gable the hip starts, as a share of the gable's height (null = 0.55). */
  halfhip?: number | null;
}

/** The end of a ridge: an upright gable, a hip, or a half-hip. */
export type RoofEnd = "gable" | "hip" | "halfhip";

export interface RoofSettings {
  type: RoofType;
  /** Slope of a gable roof in degrees. */
  pitch: number;
  /** How far the roof reaches beyond the outer walls (metres). */
  overhang: number;
  /** Gable roof: ridge along the long side (default) or across, along the short side (terraced houses). */
  ridge?: "long" | "short" | null;
  /** Roof sections of a "custom" roof. */
  sections?: RoofSection[];
  /** Solar fields on the roof faces. */
  solar?: SolarField[];
  /** Strings that fields belong to. */
  strings?: SolarString[];
  /** Roof windows on the roof faces. */
  windows?: RoofWindow[];
}

/**
 * A field of solar modules on a roof face (see solar.ts): rows × columns from its lower left corner (u along
 * the eave, v up the slope, in metres). On a flat roof the modules stand on frames, tilted by `tilt`.
 */
export interface SolarField {
  id: string;
  /** Roof face: "main:a" / "main:b" / "main:top" (single roof) or "<section id>:a" / ":b" / ":top"; hip ends ":c" / ":d". */
  face: string;
  u: number;
  v: number;
  rows: number;
  cols: number;
  /** Portrait (default) or landscape modules. */
  portrait: boolean;
  /** Flat roofs: tilt of the frames in degrees (null = 15°); pitched roofs: a rack tilting the modules further (null = lying on the roof). */
  tilt?: number | null;
  /** Flat roofs: the modules lean the other way. */
  flip?: boolean;
  /** Flat roofs: rows facing one way (default), or east-west racks – every second row turned, the pairs back to back. */
  rack?: "ew" | null;
  /** PV power sensor of this field, e.g. its string (null = the plant's sensor from the energy settings). */
  entity?: string | null;
  /** Name, e.g. "String 1 south". */
  name?: string | null;
  /** Modules per row when the rows differ (e.g. [4, 4, 3]); null = `cols` in every row. */
  layout?: number[] | null;
  /** Shorter rows sit left, centred or right. */
  align?: "left" | "center" | "right" | null;
  /** Modules left out, as "row:column" (row 0 at the eave). */
  skip?: string[] | null;
  /** Look: full black (default) or classic blue. */
  look?: "black" | "blue" | null;
  /** Module size in portrait, width × height in metres (null = 1.13 × 1.72). */
  module_w?: number | null;
  module_h?: number | null;
  /** Peak power of one module (Wp); null = 400. */
  wp?: number | null;
  /** The string the field belongs to (see RoofSettings.strings); fields on several roofs can share one. */
  string?: string | null;
  /** Free-standing fields (face "ground"): rotation of the rows in the plan, degrees. */
  rotation?: number | null;
  /** Free-standing fields: height of the surface they stand on above the ground floor (a garage roof); null = the ground. */
  base?: number | null;
  /** Fixed: cannot be moved by accident. */
  locked?: boolean;
}

/**
 * A roof window on a roof face (u along the eave, v up the slope, in metres, at its lower left corner). Like a
 * window it follows a contact (open or tilted: the sash swings out at the top) and a blind (cover).
 */
export interface RoofWindow {
  id: string;
  face: string;
  u: number;
  v: number;
  /** Size in metres (null = 0.78 × 1.18, a common size). */
  w?: number | null;
  h?: number | null;
  cover?: EntityRef;
  contact?: EntityRef;
  tilt?: EntityRef;
  /** A window motor (a cover whose position opens the sash that far). */
  window?: EntityRef;
  name?: string | null;
  /** Fixed: cannot be moved by accident. */
  locked?: boolean;
}

/** A string of solar modules: one or more fields wired together to one inverter. */
export interface SolarString {
  id: string;
  name: string;
  /** PV power sensor of the string. */
  entity?: string | null;
  /** The inverter it feeds (an "inverter" furniture item). */
  inverter?: string | null;
}

export const BUTTON_ACTIONS = ["navigate", "more_info", "service", "fire_dom_event"] as const;
export type ButtonAction = (typeof BUTTON_ACTIONS)[number];

/**
 * An own button in the central menu (D143): opens a dashboard path, the more-info dialog of an entity,
 * calls a service, or fires a DOM event (a browser_mod popup with your own card).
 */
export interface CustomButton {
  id: string;
  label: string;
  /** Material Design icon name without "mdi:". */
  icon?: string | null;
  action: ButtonAction;
  /** navigate: the path ("/lovelace/rollos"); more_info: the entity; service: "domain.service". */
  target?: string | null;
  /** service: its data; fire_dom_event: the event's detail (e.g. { browser_mod: { service, data } }). */
  data?: Record<string, unknown> | null;
  /** The entity whose state lights the button up while it is on (null: the entity it opens or switches, when there is one). */
  state_entity?: string | null;
}

/**
 * Something to play on a speaker from its quick menu (Klang): media_player.play_media with this
 * content type and id – a radio stream URL, a Music Assistant or Sonos URI, or for an Echo (Alexa Media
 * Player) the type SPOTIFY / AMAZON_MUSIC / TUNEIN with what you would say ("Rock Antenne").
 */
export interface MediaPreset {
  id: string;
  label: string;
  type: string;
  content: string;
  /** The speakers it is offered on (media_player ids); empty or missing = every speaker. */
  speakers?: string[];
}

/** What a Bluetooth tag's signal looked like at the scanners while it was in a room (dBm per scanner source). */
export interface BleFingerprint {
  room: string;
  rssi: Record<string, number>;
}

/** A Bluetooth tag located by room: a fixed address, or a Private BLE Device tracker for phones and watches (their address changes). */
export interface BleTag {
  id: string;
  name: string;
  address?: string | null;
  entity?: string | null;
  prints: BleFingerprint[];
  /** Scanner source → its name, for showing the signals. */
  scanners?: Record<string, string>;
}

export interface BuildingSettings {
  /** Bluetooth tags located by room (the sensor and the editor's learning by walking). */
  ble?: { tags: BleTag[] } | null;
  /** Stations and playlists for the speakers' quick menu (Klang). */
  media_presets?: MediaPreset[];
  /** Favourites of the house: scenes, scripts, automations, buttons and switches in the central menu of the 3D view (#145). */
  favorites?: string[];
  /** Devices Outside leaves out of its panel (they stay in the plan) – #83. */
  outside_hidden?: string[];
  /** Facts the room panel leaves out of its header: sun hours, comfort, airing, fuse-box circuits. */
  room_facts_off?: ("sun" | "comfort" | "air" | "circuits")[];
  /** A favourite that shows on one floor only (entity id → floor id); the others show everywhere. */
  favorite_floors?: Record<string, string>;
  /** Own buttons in the central menu (D143). */
  buttons?: CustomButton[];
  wall_exterior: number;
  wall_interior: number;
  /** Paint of the walls in the solid wall view ("#rrggbb"): outside, and inside where a room has no colour of its own (null = default). */
  wall_paint_outside?: string | null;
  wall_paint_inside?: string | null;
  grid: number;
  /** Direction of north in the plan, degrees clockwise from "up" (for the sun). */
  north: number;
  roof: RoofSettings;
  /** The weather entity shown outside the house (null = the first one). */
  weather_entity?: string | null;
  /** Which weather effects the 3D view shows (null = all but fog). */
  weather_effects?: WeatherEffect[] | null;
  /** Warning for a window open while it rains (default on). */
  rain_warning?: boolean;
  /** Sunlight falls through the windows as patches on the floor (default on, #266). */
  sun_patches?: boolean;
  /** The sun's path of today as an arc over the plot, with a compass ring (default off). */
  sun_arc?: boolean;
  /** Dashboard card options set up once in the editor, by name; a card with `template: name` uses them. */
  card_templates?: Record<string, Record<string, unknown>> | null;
  /** Plan lock: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. */
  lock_plan?: boolean;
  /** The camera the house view opens with (3D view, card, kiosk); null = fitted from the front left. */
  start_view?: StartView | null;
  /**
   * A robot vacuum's own map, tied to the plan: two places known in both the plan (m) and the robot's
   * map grid. Without it the robot's trail and pose cannot be placed, and the 3D view keeps the lanes
   * it invents for the room (see live/vacuum-map.ts).
   */
  vacuum_map?: VacuumCalibration | null;
  /** A real map under the plan (null = none). */
  map?: MapSettings | null;
  /** How lengths and areas are shown in the editor: metres or feet and inches (inputs stay in metres). */
  units?: "metric" | "imperial" | null;
  /** The rain warning asks this sensor (a weather station: on, or a rain rate above 0) instead of the weather entity. */
  rain_sensor?: string | null;
  /** A sensor that tells a power outage: a warning for the whole house while the grid is gone. */
  outage_sensor?: string | null;
  /** Warn when a door or window contact has been unavailable for 10 minutes (empty battery, out of reach); default off. */
  contact_warning?: boolean;
  /** Warn at night (22:00–6:00) about the plan's door locks that stand unlocked. */
  night_lock_warning?: boolean;
  /** Motion, occupancy and presence sensors show their marker only while they detect something (default off). */
  motion_markers_active?: boolean;
  /** What a double tap on a room switches: null = its plan lamps and every light of its area, plan = only the plan's lamps, off = nothing (#62). */
  room_double_tap?: "plan" | "off" | null;
  /** Announcements: the text-to-speech entity (null = the first one) and the sentences a room offers (null = the default ones). */
  announce_tts?: string | null;
  announce_phrases?: string[] | null;
  /** Own warnings: a line in the warning bar while an entity is in a state ("Water tank empty", "Dishwasher done"). */
  own_alerts?: OwnAlert[] | null;
  /** Calendars whose appointments of the day show on the "Today" card of the 3D view. */
  calendars?: string[] | null;
  /** The fuse box: its circuits with the rooms on them ("F12 kitchen"); the room panel names them and the search finds them. */
  circuits?: Circuit[] | null;
  /** Own sensors shown at the top of the 3D view (outside temperature, the alarm…), at most 12. */
  status_entities?: string[] | null;
  /** An own background behind the house instead of the look's sky: a colour and/or a picture (/local/… or https), dimmed. */
  backdrop?: { color?: string | null; image?: string | null; dim?: number | null } | null;
  /** Plugin modules to load (Extensions page); see docs/plugins.md. */
  plugins?: PluginRef[];
}

/** Two places, each known in the plan (m) and in a robot's map grid. */
export interface VacuumCalibration {
  /** Plan position of the first place. */
  a: [number, number];
  /** The robot's grid position there. */
  ga: [number, number];
  /** Plan position of the second place. */
  b: [number, number];
  /** The robot's grid position there. */
  gb: [number, number];
  /**
   * The robot's grid runs the other way round than the plan does: its y grows along plan -z. Two places
   * cannot tell a mirror from a turn (both put them exactly where they belong), so it has to be stated.
   */
  mirror?: boolean;
}

/** A real map as the base of the plan: the plan point (x, z in metres) that lies at lat / lon, turned by the plan's north. */
export interface MapSettings {
  on: boolean;
  lat: number;
  lon: number;
  x?: number;
  z?: number;
  /** How strongly the map shows, 0.05 to 1 (default 0.5). */
  opacity?: number;
  /** Tile zoom, 15 (coarse) to 19 (fine; default 18). */
  zoom?: number;
  /** Tile address with {z}, {x} and {y}; null = OpenStreetMap. */
  url?: string | null;
}

/** How one light of a mood is: off, or on with its brightness (0–255) and colour. */
export interface LightSetting {
  entity: string;
  on: boolean;
  brightness?: number;
  rgb?: [number, number, number];
  kelvin?: number;
}

/** A light mood of a room. */
export interface LightMood {
  id: string;
  name: string;
  lights: LightSetting[];
}

/** An own warning: shown in the warning bar while `entity` is in `state` (comma separated, or "<20" / ">80" for numbers). */
export interface OwnAlert {
  id: string;
  entity: string;
  state?: string | null;
  text: string;
  /** The room it belongs to (its floor pulses softly); null = the whole house. */
  room_id?: string | null;
  /** The colour of its stripe ("#rrggbb"; null = amber). */
  color?: string | null;
  /** What a tap on it does: open the entity's details (null), switch the entity, or go to its room. */
  tap?: "toggle" | "room" | null;
}

/** A camera position around the house: azimuth and polar angle (radians) and the distance (m). */
export interface StartView {
  theta: number;
  phi: number;
  radius: number;
  /** The point the camera looks at (m; null: the middle). For a floor or a room y counts from that floor. */
  target?: { x: number; y: number; z: number } | null;
}

/**
 * Whether an item is fixed: rooms, walls, doors, windows and outdoor areas follow the plan lock alone,
 * furniture and devices their own lock.
 */
export function isFixed(item: object | null | undefined, structural: boolean, settings: Pick<BuildingSettings, "lock_plan">): boolean {
  if (!item) return false;
  return structural ? !!settings.lock_plan : !!(item as { locked?: boolean | null }).locked;
}

export const WEATHER_EFFECTS = ["rain", "snow", "fog", "clouds", "lightning", "sky"] as const;
export type WeatherEffect = (typeof WEATHER_EFFECTS)[number];
/** The effects shown when the plan does not say: everything but fog (fog greys the whole scene). */
export const DEFAULT_WEATHER_EFFECTS: WeatherEffect[] = ["rain", "snow", "clouds", "lightning", "sky"];

export const OUTDOOR_TYPES = ["lawn", "terrace", "path", "driveway", "pool", "bed", "wild", "hedge", "fence", "pergola"] as const;
export type OutdoorType = (typeof OUTDOOR_TYPES)[number];

/** Top of each kind of outdoor area above ground level (pool: its water, below). */
export const OUTDOOR_TOP: Record<OutdoorType, number> = {
  lawn: 0.012,
  terrace: 0.12,
  path: 0.02,
  driveway: 0.02,
  pool: -0.25,
  bed: 0.15,
  wild: 0.03,
  hedge: 1.2,
  fence: 1.0,
  pergola: 2.2,
};

/** Types that stand on the ground as structures (no surface to stand on, no light pool). */
export function outdoorStanding(type: OutdoorType): boolean {
  return type === "hedge" || type === "fence" || type === "pergola";
}

/** The directions an area can fall towards: +x (right in the plan), −x, +z (down in the plan), −z. */
export const SLOPE_DIRS = ["x", "-x", "z", "-z"] as const;
export type SlopeDir = (typeof SLOPE_DIRS)[number];

/**
 * How far the surface of an area has dropped at a point (m, ≥ 0): zero on the high edge, the full
 * slope on the low edge, along the slope direction across the extent of the polygon.
 */
export function outdoorDrop(a: OutdoorArea, x: number, z: number): number {
  const slope = a.slope ?? 0;
  if (!slope || a.type === "pool") return 0;
  const dir = a.slope_dir ?? "x";
  const proj = (px: number, pz: number) => (dir === "x" ? px : dir === "-x" ? -px : dir === "z" ? pz : -pz);
  let lo = Infinity;
  let hi = -Infinity;
  for (const [px, pz] of a.points) {
    const v = proj(px, pz);
    lo = Math.min(lo, v);
    hi = Math.max(hi, v);
  }
  if (hi - lo < 1e-6) return 0;
  const t = Math.min(1, Math.max(0, (proj(x, z) - lo) / (hi - lo)));
  return slope * t;
}

/** Height of the surface of an area at a point, in floor coordinates (offset and slope included). */
export function outdoorTopAt(floor: Floor, a: OutdoorArea, x: number, z: number): number {
  return groundLevel(floor) + (a.offset ?? 0) + OUTDOOR_TOP[a.type] - outdoorDrop(a, x, z);
}

/** Ground level in floor coordinates: below the ground floor slab (0.2 m), the floor itself further up. */
export function groundLevel(floor: Floor): number {
  return floor.elevation > 0.3 ? 0 : -0.2;
}

/** Height outdoor lamps stand on at a point: ground level, or the top of a terrace or bed there. */
export function outdoorGround(floor: Floor, x: number, z: number): number {
  const inside = (floor.outdoor ?? []).filter((o) => !outdoorStanding(o.type) && o.type !== "pool" && pointInPolygon([x, z], o.points));
  // an area cut out of the one beneath it wins over that one
  const a = [...inside].reverse().find((o) => o.cut) ?? inside[0];
  return a ? outdoorTopAt(floor, a, x, z) : groundLevel(floor);
}

/** Auto: which entities tell the car's state; null = automatic (an entity of the car's Home Assistant device). */
export interface CarLinks {
  /** Any entity of the car's device: the others are found beside it. */
  device?: EntityRef;
  soc?: EntityRef;
  range?: EntityRef;
  /** Charging power (W/kW), a charging binary sensor, or the charge switch. */
  charging?: EntityRef;
  plugged?: EntityRef;
  lock?: EntityRef;
  climate?: EntityRef;
  tracker?: EntityRef;
  /** The planned departure time (a sensor, input_datetime or time entity). */
  departure?: EntityRef;
}

/** Area outside the house (lawn, terrace, pool, hedge …), drawn like a room. */
export interface OutdoorArea {
  id: string;
  type: OutdoorType;
  points: Vec2[];
  /** The Home Assistant area of this garden, terrace or pool: its devices and sensors are listed under Outside, and a pin opens it. */
  area_id?: string | null;
  /** Pools and ponds: the water temperature and the pump (or filter) shown on the area's pin. */
  temp_entity?: string | null;
  pump_entity?: string | null;
  /** Hedges and fences: their height in m (null = 1.2 m / 1.0 m). */
  height?: number | null;
  /** False hides the neon outline (a plot of several lawns without lines crossing it). */
  outline?: boolean;
  /** Height offset in m: a driveway piece in front of a lower garage sits below the ground (negative), a raised terrace above. */
  offset?: number | null;
  /** Fall in m across the area along slope_dir (a driveway down to the garage, a sloping lawn); the high edge sits at the offset. */
  slope?: number | null;
  slope_dir?: SlopeDir;
  /** Fences and pergolas: the closing edge (last point back to the first) is left out, so a fence can lean against the house. */
  open?: boolean;
  /** Pergola: diagonal X-bracing on every side. */
  bracing?: boolean;
  /** This area is cut out of every other area that contains it whole (a wild patch or pond inside a lawn). A pool does this by itself unless this is false. */
  cut?: boolean;
  /** Fences: gates in the fence (gaps with a leaf that follows an entity). */
  gates?: FenceGate[];
  /** How opaque the area is drawn, 0.1 … 1 (null = fully): a driveway above a cellar can be seen through. The outline stays. */
  opacity?: number | null;
}

/** A gate in a fence: a gap in one edge of its outline with a garden gate (one leaf), a double gate or a sliding gate. */
export interface FenceGate {
  id: string;
  /** The edge of the area's outline (points[edge] → points[edge + 1]) and the gate's middle along it (m from the first point). */
  edge: number;
  offset: number;
  width: number;
  kind: "single" | "double" | "sliding";
  /** What opens it: a cover, switch, input_boolean or lock (open / on / unlocked), and/or a contact (binary_sensor, on = open). */
  entity?: string | null;
  contact?: string | null;
  /** Set while building the 3D view from the entities' states; never stored. */
  open?: boolean;
}

/** Whether an area leaves a hole in the areas around it: set by hand, and on by default for a pool. */
export const cutsOut = (a: OutdoorArea): boolean => a.cut ?? a.type === "pool";

/** Energy flow: meter position and power sensors (W). Grid positive = import, battery positive = discharging. */
export interface EnergySettings {
  meter: { floor_id: string; x: number; z: number } | null;
  grid: string | null;
  grid_invert: boolean;
  solar: string | null;
  battery: string | null;
  battery_invert: boolean;
  battery_soc: string | null;
  /** House consumption (W); null = from the balance of grid, solar and battery. */
  consumption: string | null;
  tariff: string | null;
  /** Advanced energy mode: meters can hang off another meter (sub-meters of flats). Off = the first meter is the grid, others are consumers. */
  advanced?: boolean;
  /** Advanced energy mode: a sub-meter's label also shows how much of its use no placed device measures. */
  show_unmetered?: boolean;
  /** Where the cable of an energy connection really runs (the flow follows it instead of an arc). */
  routes?: EnergyRoute[];
  /** Gas and water meters shown with the house's balance: a sensor with the flow now (m³/h, l/min) or today's reading. */
  gas?: string | null;
  water?: string | null;
}

/** A point a cable runs through: on a floor, in plan coordinates. */
export interface RoutePoint {
  floor_id: string;
  x: number;
  z: number;
}

/** The cable of one energy connection (`key` as the flow names it: "grid", "battery", "solar:<field>" …). */
export interface EnergyRoute {
  key: string;
  points: RoutePoint[];
  /** Draw the route as a visible cable, not just the faint line the flow follows. */
  cable?: boolean;
}

/** The most points a cable route can have. */
export const MAX_ROUTE_POINTS = 30;

/** A circuit of the fuse box and the rooms it feeds. */
export interface Circuit {
  id: string;
  name: string;
  rooms: string[];
}

/** A person and the sensor whose state names the room they are in (ESPresense, Bermuda, …). */
export interface PresenceLink {
  /** A person, or any entity that is "home" / "on" while someone is in (an input_boolean, a device tracker). */
  person: string;
  sensor: string | null;
  /** The room (its id) they stand in while they are in and no room sensor names one – #71. */
  room?: string | null;
}

export interface Building {
  version: 1;
  floors: Floor[];
  settings: BuildingSettings;
  energy: EnergySettings;
  presence: PresenceLink[];
}

export const DEFAULT_ENERGY: EnergySettings = {
  meter: null,
  grid: null,
  grid_invert: false,
  solar: null,
  battery: null,
  battery_invert: false,
  battery_soc: null,
  consumption: null,
  tariff: null,
};

export const FLOOR_MATERIALS = ["wood", "oak", "tiles", "carpet", "stone", "concrete"] as const;

export const DEFAULT_ROOF: RoofSettings = { type: "none", pitch: 35, overhang: 0.4 };

/** Default wall paints of the solid wall view: a light plaster outside, a warm white inside. */
export const DEFAULT_PAINT_OUTSIDE = "#d6cfc2";
export const DEFAULT_PAINT_INSIDE = "#e8e3da";

export const DEFAULT_SETTINGS: BuildingSettings = { wall_exterior: 0.24, wall_interior: 0.12, grid: 0.05, north: 0, roof: { ...DEFAULT_ROOF } };

export function emptyBuilding(): Building {
  return { version: 1, floors: [], settings: { ...DEFAULT_SETTINGS }, energy: { ...DEFAULT_ENERGY }, presence: [] };
}

export function newFloor(id: string, name: string, elevation: number): Floor {
  return {
    id,
    name,
    elevation,
    height: 2.5,
    cut_height: 1.15,
    rooms: [],
    openings: [],
    furniture: [],
    placements: [],
    background: null,
    outdoor: [],
    walls: [],
    ha_floor: null,
  };
}

/** Storey height used to place floors created from Home Assistant levels. */
export const LEVEL_HEIGHT = 2.75;

/** Where a new floor goes: at its Home Assistant level if known, otherwise on top. */
export function floorElevation(floors: Floor[], level: number | null | undefined): number {
  if (level != null && Number.isFinite(level)) return Math.round(level * LEVEL_HEIGHT * 100) / 100;
  const top = floors.reduce<Floor | null>((t, f) => (!t || f.elevation > t.elevation ? f : t), null);
  return top ? Math.round((top.elevation + top.height + 0.25) * 100) / 100 : 0;
}

/**
 * Rooms for areas as 4 × 3 m tiles in rows beside a floor's existing rooms, to be dragged into place
 * and resized.
 */
export function roomTiles(floor: Floor, areas: { area_id: string; name: string }[], id: () => string): Room[] {
  const xs = floor.rooms.flatMap((r) => r.points.map((p) => p[0]));
  const zs = floor.rooms.flatMap((r) => r.points.map((p) => p[1]));
  const x0 = xs.length ? Math.ceil(Math.max(...xs)) + 1 : 0;
  const z0 = zs.length ? Math.floor(Math.min(...zs)) : 0;
  return areas.map((a, i) => {
    const x = x0 + (i % 3) * 4.5;
    const z = z0 + Math.floor(i / 3) * 3.5;
    return { id: id(), name: a.name, area_id: a.area_id, points: [[x, z], [x + 4, z], [x + 4, z + 3], [x, z + 3]] as Vec2[], floor_material: "wood" };
  });
}

/**
 * Resizes a furniture item by dragging one corner (`corner`: signs of the corner in the item's own
 * frame) to a plan point; the opposite corner stays in place. Sizes snap to `grid`.
 */
export function resizeFurniture(f: Furniture, corner: [1 | -1, 1 | -1], p: Vec2, grid: number): Pick<Furniture, "x" | "z" | "w" | "d"> {
  const a = (f.rotation * Math.PI) / 180;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const [sx, sz] = corner;
  // item axes in the plan: local x → (c, s), local z → (-s, c)
  const ax = f.x - sx * (f.w / 2) * c + sz * (f.d / 2) * s;
  const az = f.z - sx * (f.w / 2) * s - sz * (f.d / 2) * c;
  const dx = p[0] - ax;
  const dz = p[1] - az;
  const snapSize = (v: number) => Math.max(0.1, Math.round(v / grid) * grid);
  const w = snapSize((dx * c + dz * s) * sx);
  const d = snapSize((-dx * s + dz * c) * sz);
  const r = (v: number) => Math.round(v * 1000) / 1000;
  return { x: r(ax + sx * (w / 2) * c - sz * (d / 2) * s), z: r(az + sx * (w / 2) * s + sz * (d / 2) * c), w: r(w), d: r(d) };
}

export const FURNITURE_TYPES = [
  "lamp_ceiling",
  "lamp_downlight",
  "lamp_spot",
  "lamp_panel",
  "lamp_pendant",
  "ceiling_fan",
  "lamp_floor",
  "lamp_table",
  "lamp_wall",
  "led_strip",
  "lamp_uplight",
  "lamp_bollard",
  "lamp_garden",
  "radiator",
  "sofa",
  "armchair",
  "stool",
  "coffee_table",
  "tv_board",
  "tv_wall",
  "sideboard",
  "shelf",
  "plant",
  "rug",
  "table",
  "table_round",
  "chair",
  "bench",
  "corner_bench",
  "bar_stool",
  "kitchen",
  "kitchen_wall",
  "kitchen_tall",
  "island",
  "worktop",
  "sink",
  "stove",
  "dishwasher",
  "fridge",
  "bed",
  "bunk_bed",
  "nightstand",
  "wardrobe",
  "dresser",
  "bathtub",
  "shower",
  "wc",
  "washbasin",
  "washer",
  "dryer",
  "desk",
  "office_chair",
  "tall_cabinet",
  "coat_rack",
  "stairs",
  "robot_vacuum",
  "inverter",
  "home_battery",
  "wallbox",
  "meter",
  "grid_point",
  "parking",
  "fridge_smart",
  "stairwell",
] as const;

/** Furniture library sections (the editor lists them in this order). */
export const FURNITURE_GROUPS: Record<string, FurnitureType[]> = {
  lights: ["lamp_ceiling", "lamp_downlight", "lamp_spot", "lamp_panel", "lamp_pendant", "ceiling_fan", "lamp_floor", "lamp_uplight", "lamp_table", "lamp_wall", "led_strip", "lamp_bollard", "lamp_garden"],
  living: ["sofa", "armchair", "stool", "coffee_table", "tv_board", "tv_wall", "sideboard", "shelf", "plant", "rug"],
  dining: ["table", "table_round", "chair", "bench", "corner_bench", "bar_stool"],
  kitchen: ["kitchen", "kitchen_wall", "kitchen_tall", "island", "worktop", "sink", "stove", "dishwasher", "fridge"],
  sleeping: ["bed", "bunk_bed", "nightstand", "wardrobe", "dresser"],
  bath: ["bathtub", "shower", "wc", "washbasin", "washer", "dryer"],
  work: ["desk", "worktop", "office_chair", "tall_cabinet", "coat_rack", "radiator", "stairs", "robot_vacuum"],
  vehicles: ["parking"],
};

/** Energy devices: placed and set up in the Energy tool (stored like furniture, not in the library). */
export const ENERGY_DEVICES = ["meter", "inverter", "home_battery", "wallbox", "grid_point"] as const;

/** Furniture that can show a linked entity (TV state, power, …). */
/** Lamps: drawn live (they glow with their light) and tapped directly in 3D. */
export const LAMP_TYPES = new Set<string>([
  "lamp_ceiling",
  "lamp_downlight",
  "lamp_spot",
  "lamp_panel",
  "lamp_pendant",
  "ceiling_fan",
  "lamp_floor",
  "lamp_uplight",
  "lamp_table",
  "lamp_wall",
  "led_strip",
  "lamp_bollard",
  "lamp_garden",
]);

/** Default height of the bottom of a wall light above the floor (metres). */
export const WALL_LAMP_Y = 1.75;

/** Items that can be lifted off the floor (a wall cabinet, a shelf, a wall light, an LED strip): everything but lamps hung from the ceiling and the ceiling-mounted pack items. */
export function canLift(f: Pick<Furniture, "type">): boolean {
  // stairs can stand on a landing or a step (the upper flight of a staircase), so they have a mount height too (#58)
  if (CEILING_TYPES.has(f.type) || ["stairwell", "parking"].includes(f.type)) return false;
  return packItem(f.type)?.mount !== "ceiling";
}

export function isLamp(type: string): boolean {
  return LAMP_TYPES.has(type) || !!packItem(type)?.light;
}

/** Furniture a table lamp can stand on. */
const SURFACES = new Set<string>([
  "table",
  "table_round",
  "coffee_table",
  "desk",
  "nightstand",
  "sideboard",
  "dresser",
  "kitchen",
  "island",
  "worktop",
  "tv_board",
  "dishwasher",
  "washer",
  "dryer",
]);

/**
 * Positions of a rows × cols grid of lamps in a room: cells of equal size over the room's bounding box,
 * one lamp per cell centre that lies inside the room (L-shaped rooms simply leave cells out).
 */
export function spotGrid(room: Room, rows: number, cols: number, inset = 0): Vec2[] {
  const b = bounds(room.points);
  const w = b.x1 - b.x0 - 2 * inset;
  const d = b.z1 - b.z0 - 2 * inset;
  const out: Vec2[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const p: Vec2 = [Math.round((b.x0 + inset + (w / cols) * (c + 0.5)) * 1000) / 1000, Math.round((b.z0 + inset + (d / rows) * (r + 0.5)) * 1000) / 1000];
      if (pointInPolygon(p, room.points)) out.push(p);
    }
  }
  return out;
}

export type Direction = "right" | "down" | "left" | "up";

/** Point `length` metres from `p` in a plan direction (right = +x, down = +z, as in the editor). */
export function step(p: Vec2, length: number, dir: Direction): Vec2 {
  const r = (v: number) => Math.round(v * 1000) / 1000;
  const [dx, dz] = { right: [1, 0], down: [0, 1], left: [-1, 0], up: [0, -1] }[dir];
  return [r(p[0] + dx * length), r(p[1] + dz * length)];
}

/** Height of the highest furniture top under a point (0 = the floor). */
/**
 * Height of the bottom of a built-in model as drawn (a wall cabinet hangs at 1.45 m, a wall TV is
 * centred at 1.3 m, a radiator stands on short brackets); the mount height replaces it.
 */
export function builtinBase(f: Pick<Furniture, "type" | "h"> & { variant?: string | null }): number {
  switch (f.type) {
    case "home_battery":
      // a wall battery hangs at hip height
      return f.variant === "wall" ? 0.5 : 0;
    case "kitchen_wall":
      return 1.45;
    case "tv_wall":
      return Math.max(0, 1.3 - f.h / 2);
    case "radiator":
      return 0.12;
    case "inverter":
      return 1.1;
    case "wallbox":
      return 1.0;
    case "meter":
      return 0.4;
    default:
      return 0;
  }
}

/** Furniture that hangs from the ceiling: its height comes from the ceiling above it (the room's, or its own ceiling_y). */
export const CEILING_TYPES = new Set<string>(["lamp_ceiling", "lamp_downlight", "lamp_spot", "lamp_panel", "lamp_pendant", "ceiling_fan"]);

/** Rooms of lower floors whose own ceiling reaches above this floor's level (a living room open to the floor above, #55): this floor stays open over them. */
export function roomsReachingUp(floors: readonly Floor[], floor: Floor): Vec2[][] {
  return floors
    .filter((f) => f.elevation < floor.elevation)
    .flatMap((f) => f.rooms.filter((r) => r.points.length >= 3 && r.ceiling != null && r.ceiling > f.height + 0.005 && f.elevation + r.ceiling > floor.elevation + 0.05))
    .map((r) => r.points);
}

/** How far a room's floor lies below or above its floor's level (m; 0 for a room without one). */
export const roomOffset = (room: Pick<Room, "floor_offset"> | undefined): number => (room?.floor_offset && Number.isFinite(room.floor_offset) ? room.floor_offset : 0);

/** The level of the floor at a point of a floor: the offset of the room it lies in (0 outside every room). */
export function offsetAt(floor: Pick<Floor, "rooms">, x: number, z: number): number {
  const room = floor.rooms.find((r) => r.points.length >= 3 && r.floor_offset && pointInPolygon([x, z], r.points));
  return roomOffset(room);
}

/** The height of the ceiling above a point of a floor: the room's own ceiling, else the floor height. */
export function ceilingAt(floor: Pick<Floor, "height" | "rooms">, x: number, z: number): number {
  const room = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([x, z], r.points));
  return room?.ceiling != null && room.ceiling > 0 ? room.ceiling : floor.height;
}

/** The ceiling a piece hangs from: its own ceiling height set by hand, else the ceiling above it. */
export const ceilingOf = (floor: Pick<Floor, "height" | "rooms">, f: Pick<Furniture, "x" | "z"> & { ceiling_y?: number | null }): number =>
  f.ceiling_y != null && f.ceiling_y > 0 ? f.ceiling_y : ceilingAt(floor, f.x, f.z);

export function surfaceHeight(floor: Floor, x: number, z: number): number {
  let top = 0;
  for (const f of floor.furniture) {
    if (!(SURFACES.has(f.type) || packItem(f.type)?.surface) || !pointInPolygon([x, z], furnitureFootprint(f))) continue;
    top = Math.max(top, f.h);
  }
  return top;
}

export const ELECTRIC_FURNITURE = new Set<string>([
  ...LAMP_TYPES,
  "radiator",
  "robot_vacuum",
  "inverter",
  "home_battery",
  "wallbox",
  "meter",
  "tv_board",
  "tv_wall",
  "desk",
  "fridge",
  "fridge_smart",
  "stove",
  "kitchen_tall",
  "dishwasher",
  "washer",
  "dryer",
  "kitchen",
  "island",
  "sink",
]);

export type FurnitureType = (typeof FURNITURE_TYPES)[number];

/** Default size (width x, depth z, height) of new furniture in metres. */
export const FURNITURE_SIZE: Record<FurnitureType, [number, number, number]> = {
  sofa: [2.2, 0.9, 0.82],
  armchair: [0.85, 0.85, 0.8],
  table: [1.6, 0.9, 0.75],
  chair: [0.46, 0.5, 0.9],
  bed: [1.6, 2.05, 0.9],
  nightstand: [0.45, 0.4, 0.5],
  wardrobe: [1.8, 0.6, 2.1],
  shelf: [0.9, 0.35, 1.9],
  kitchen: [2.4, 0.62, 0.92],
  // a worktop on its own (over a gap, on self-built desk pedestals): the height is its top edge
  worktop: [1.2, 0.62, 0.91],
  // solar inverter and wallbox hang on the wall, the home battery stands on the floor
  inverter: [0.5, 0.2, 0.65],
  home_battery: [0.6, 0.25, 1.1],
  wallbox: [0.3, 0.15, 0.42],
  // the meter cabinet hangs on the wall as well
  meter: [0.55, 0.21, 1.1],
  // the grid connection: a small street cabinet at the edge of the plot
  grid_point: [0.4, 0.22, 0.6],
  fridge: [0.6, 0.65, 1.8],
  fridge_smart: [0.91, 0.73, 1.78],
  stairwell: [1.0, 2.6, 0.02],
  stove: [0.6, 0.62, 0.92],
  sink: [0.9, 0.62, 0.92],
  bathtub: [1.7, 0.75, 0.58],
  shower: [0.9, 0.9, 2.0],
  wc: [0.38, 0.6, 0.8],
  washbasin: [0.6, 0.46, 0.85],
  desk: [1.4, 0.7, 0.75],
  tv_board: [1.8, 0.42, 0.5],
  plant: [0.45, 0.45, 1.1],
  rug: [2.0, 1.4, 0.01],
  stairs: [1.0, 3.2, 2.75],
  stool: [0.55, 0.55, 0.42],
  lamp_ceiling: [0.4, 0.4, 0.08],
  lamp_downlight: [0.1, 0.1, 0.02],
  lamp_spot: [0.1, 0.1, 0.14],
  lamp_panel: [0.6, 0.6, 0.03],
  lamp_uplight: [0.35, 0.35, 1.8],
  lamp_bollard: [0.16, 0.16, 0.8],
  lamp_garden: [0.12, 0.12, 0.3],
  radiator: [1.0, 0.1, 0.6],
  robot_vacuum: [0.36, 0.5, 0.1],
  parking: [2.6, 5.2, 0.02],
  lamp_pendant: [0.4, 0.4, 0.8],
  // a 52" fan; its height is how far it hangs down from the ceiling (more = on a downrod)
  ceiling_fan: [1.32, 1.32, 0.32],
  lamp_floor: [0.4, 0.4, 1.7],
  lamp_table: [0.28, 0.28, 0.45],
  lamp_wall: [0.22, 0.12, 0.2],
  led_strip: [2.0, 0.04, 0.03],
  coffee_table: [1.1, 0.6, 0.42],
  tv_wall: [1.3, 0.08, 0.75],
  sideboard: [1.6, 0.45, 0.8],
  table_round: [1.1, 1.1, 0.75],
  bench: [1.4, 0.45, 0.85],
  corner_bench: [2.0, 1.6, 0.9],
  bar_stool: [0.42, 0.42, 0.75],
  kitchen_wall: [0.8, 0.35, 0.7],
  kitchen_tall: [0.6, 0.62, 2.1],
  island: [1.8, 0.9, 0.92],
  dishwasher: [0.6, 0.62, 0.92],
  bunk_bed: [1.0, 2.05, 1.65],
  dresser: [1.0, 0.5, 0.9],
  washer: [0.6, 0.6, 0.85],
  dryer: [0.6, 0.6, 0.85],
  office_chair: [0.65, 0.65, 1.1],
  tall_cabinet: [0.6, 0.6, 2.1],
  coat_rack: [1.0, 0.35, 1.9],
};

export const OPENING_DEFAULTS = {
  door: { width: 0.9, sill: 0, height: 2.05 },
  window: { width: 1.2, sill: 0.9, height: 1.3 },
  garage: { width: 2.5, sill: 0, height: 2.1 },
} as const;

/** Kinds of openings offered when placing one; a terrace door is a window down to the floor. */
/** Door looks: room doors, front doors (with glass, one or two sidelights), a glass door, a sliding door. */
export const DOOR_STYLES = ["interior", "front", "front_glass", "sidelight", "sidelights", "glass", "sliding", "passage"] as const;
/** "glass_wall": fixed floor-to-ceiling glazing without sashes, slim mullions (an indoor glass wall, #163). */
export const WINDOW_STYLES = ["standard", "bars", "glass_wall"] as const;
export type OpeningStyle = (typeof DOOR_STYLES)[number] | (typeof WINDOW_STYLES)[number];

/** Looks a door gets by itself from its wall (a front door in an outer wall, a room door inside): new doors leave them unset. */
export const AUTO_STYLES: ReadonlySet<string> = new Set(["interior", "front"]);

/** The style an opening is drawn with: its own, or the automatic one for its wall. */
export function openingStyle(o: Pick<Opening, "type" | "style">, exterior: boolean): OpeningStyle {
  if (o.type === "door") return o.style && (DOOR_STYLES as readonly string[]).includes(o.style) ? o.style : exterior ? "front" : "interior";
  return o.style && (WINDOW_STYLES as readonly string[]).includes(o.style) ? o.style : "standard";
}

/**
 * Where the fixed glass beside a front door's leaf sits, along the opening (0 … W, 2 cm margins): the
 * panels and the leaf's span. One sidelight sits opposite the hinge unless `sidelight_hinge`; the widths
 * come from the opening (null = automatic) and shrink together so the leaf keeps at least 0.5 m.
 */
export function sidelightLayout(
  W: number,
  style: OpeningStyle,
  hingeAtStart: boolean,
  o: Pick<Opening, "sidelight_hinge" | "sidelight_width" | "sidelight_width2">,
): { panels: [number, number][]; x0: number; x1: number } | null {
  if (style !== "sidelight" && style !== "sidelights") return null;
  const both = style === "sidelights";
  const total = W - 0.04;
  const autoLeaf = Math.min(1.05, Math.max(0.6, total - (both ? 0.6 : 0.3)));
  const autoSide = (total - autoLeaf) / (both ? 2 : 1);
  let s1 = o.sidelight_width ?? autoSide;
  let s2 = both ? (o.sidelight_width2 ?? o.sidelight_width ?? autoSide) : 0;
  s1 = Math.max(0.1, s1);
  s2 = both ? Math.max(0.1, s2) : 0;
  const room = total - 0.5;
  if (s1 + s2 > room) {
    const k = Math.max(0, room) / (s1 + s2);
    s1 *= k;
    s2 *= k;
  }
  if (both) return { panels: [[0.02, 0.02 + s1], [W - 0.02 - s2, W - 0.02]], x0: 0.02 + s1, x1: W - 0.02 - s2 };
  // one panel: at the start when the hinge is at the end (opposite), or at the hinge when asked for
  const atStart = hingeAtStart ? !!o.sidelight_hinge : !o.sidelight_hinge;
  return atStart ? { panels: [[0.02, 0.02 + s1]], x0: 0.02 + s1, x1: W - 0.02 } : { panels: [[W - 0.02 - s1, W - 0.02]], x0: 0.02, x1: W - 0.02 - s1 };
}

/** A front door look (thick leaf, threshold, light above it). */
export function isFrontDoor(style: OpeningStyle): boolean {
  return style === "front" || style === "front_glass" || style === "sidelight" || style === "sidelights";
}

export const OPENING_PRESETS = {
  door: { type: "door", leaves: 1, width: 0.9, sill: 0, height: 2.05, style: "interior" },
  front: { type: "door", leaves: 1, width: 1.0, sill: 0, height: 2.1, style: "front" },
  door_double: { type: "door", leaves: 2, width: 1.6, sill: 0, height: 2.05 },
  window: { type: "window", leaves: 1, width: 1.2, sill: 0.9, height: 1.3 },
  window_double: { type: "window", leaves: 2, width: 1.6, sill: 0.9, height: 1.3 },
  terrace: { type: "window", leaves: 1, width: 1.0, sill: 0, height: 2.1 },
  terrace_double: { type: "window", leaves: 2, width: 1.8, sill: 0, height: 2.1 },
  lift_slide: { type: "window", leaves: 1, width: 2.4, sill: 0, height: 2.15, opens: "slide" },
  garage: { type: "garage", leaves: 1, width: 2.5, sill: 0, height: 2.1 },
  glass_wall: { type: "window", leaves: 1, width: 2.0, sill: 0, height: 2.4, style: "glass_wall" },
} as const satisfies Record<string, { type: OpeningType; leaves: 1 | 2; width: number; sill: number; height: number; style?: OpeningStyle; opens?: WindowOpening }>;

export type OpeningPreset = keyof typeof OPENING_PRESETS;

/** The preset an opening matches (by type, leaves, style and whether it reaches the floor). */
export function openingPreset(o: Pick<Opening, "type" | "leaves" | "sill" | "style" | "opens">): OpeningPreset {
  if (o.type === "garage") return "garage";
  if (o.type === "window" && o.style === "glass_wall") return "glass_wall";
  if (o.type === "window" && o.opens === "slide" && o.sill < 0.1) return "lift_slide";
  const two = o.leaves === 2;
  if (o.type === "door") {
    if (!two && o.style && isFrontDoor(o.style)) return "front";
    return two ? "door_double" : "door";
  }
  if (o.sill < 0.1) return two ? "terrace_double" : "terrace";
  return two ? "window_double" : "window";
}

/** Fill fields added in later versions so older saved buildings keep working. */
export function normalizeBuilding(b: Building): Building {
  b.energy = { ...DEFAULT_ENERGY, ...(b.energy ?? {}) };
  b.presence = b.presence ?? [];
  b.version = 1;
  b.settings = { ...DEFAULT_SETTINGS, ...b.settings, roof: { ...DEFAULT_ROOF, ...(b.settings?.roof ?? {}) } };
  b.floors.forEach((f, index) => {
    const blank = newFloor(f.id, f.name ?? `Floor ${index + 1}`, f.elevation ?? index * 2.8);
    for (const key of Object.keys(blank) as (keyof Floor)[]) if (f[key] === undefined) (f as unknown as Record<string, unknown>)[key] = blank[key];
  });
  for (const f of b.floors) {
    f.outdoor = f.outdoor ?? [];
    f.walls = f.walls ?? [];
    f.rooms = f.rooms.map((r) => ({ ...r, name: r.name ?? "", area_id: r.area_id ?? null, floor_material: r.floor_material ?? "wood", panel: r.panel ?? [] }));
    f.ha_floor = f.ha_floor ?? null;
    f.placements = f.placements.map((p) => ({ ...p, mount: p.mount ?? null, rotation: p.rotation ?? 0 }));
    f.furniture = f.furniture.map((m) => ({ ...m, entity: m.entity ?? null, power: m.power ?? null }));
    // lights placed as devices (before lamps existed) become lamps of their mount type
    const lights = f.placements.filter((p) => p.entity_id.startsWith("light."));
    if (lights.length) {
      const type: Record<LampMount, FurnitureType> = { ceiling: "lamp_ceiling", floor: "lamp_floor", table: "lamp_table", wall: "lamp_wall" };
      for (const p of lights) {
        const t = type[p.mount ?? "ceiling"];
        const [w, d, h] = FURNITURE_SIZE[t];
        const baseId = `lamp_${p.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g, "_")}`.slice(0, 54);
        let id = baseId;
        let suffix = 1;
        while (f.furniture.some((item) => item.id === id)) id = `${baseId}_${suffix++}`;
        f.furniture.push({ id, type: t, x: p.x, z: p.z, rotation: 0, w, d, h, variant: null, entity: p.entity_id, power: null, animations_enabled: p.animations_enabled, effect_animations: structuredClone(p.effect_animations) });
      }
      f.placements = f.placements.filter((p) => !p.entity_id.startsWith("light."));
    }
    f.openings = f.openings.map((o) => ({
      ...o,
      type: (["door", "window", "garage"] as const).includes(o.type) ? o.type : "door",
      edge: Number.isInteger(o.edge) ? o.edge : 0,
      offset: Number.isFinite(o.offset) ? o.offset : 0.5,
      width: Number.isFinite(o.width) && o.width > 0 ? o.width : o.type === "garage" ? 2.5 : o.type === "window" ? 1.2 : 0.9,
      height: Number.isFinite(o.height) && o.height > 0 ? o.height : o.type === "window" ? 1.3 : o.type === "garage" ? 2.1 : 2.05,
      sill: Number.isFinite(o.sill) ? o.sill : o.type === "window" ? 0.9 : 0,
      hinge: o.hinge ?? "left",
      leaves: o.leaves ?? 1,
      swing: o.swing ?? "in",
      style: o.style ?? null,
      cover: o.cover ?? null,
      contact: o.contact ?? null,
      contact2: o.contact2 ?? null,
      tilt: o.tilt ?? null,
    }));
  }
  uniqueIds(b);
  return b;
}

/** Hand-written or AI-written plans often leave ids out or repeat them; the editor selects by id, so every piece needs its own. */
function uniqueIds(b: Building): void {
  const fix = <T extends { id: string }>(list: T[], prefix: string) => {
    const seen = new Set<string>();
    for (const item of list) {
      if (typeof item.id !== "string" || !item.id || seen.has(item.id)) item.id = uid(prefix);
      seen.add(item.id);
    }
  };
  fix(b.floors, "floor");
  for (const f of b.floors) {
    // rooms are referenced by openings and walls, so only missing room ids are filled in
    for (const r of f.rooms) if (typeof r.id !== "string" || !r.id) r.id = uid("room");
    fix(f.openings, "op");
    fix(f.furniture, "furn");
    fix(f.outdoor, "out");
  }
}

export function uid(prefix: string): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

/** Signed area (positive = counter-clockwise in x/z maths orientation). */
export function signedArea(points: readonly Vec2[]): number {
  let a = 0;
  for (let i = 0; i < points.length; i++) {
    const [x0, z0] = points[i];
    const [x1, z1] = points[(i + 1) % points.length];
    a += x0 * z1 - x1 * z0;
  }
  return a / 2;
}

export function polygonArea(points: readonly Vec2[]): number {
  return Math.abs(signedArea(points));
}

/** Area-weighted centroid; falls back to the vertex average for degenerate polygons. */
export function centroid(points: readonly Vec2[]): Vec2 {
  const a = signedArea(points);
  if (Math.abs(a) < 1e-9) {
    const n = points.length || 1;
    return [points.reduce((s, p) => s + p[0], 0) / n, points.reduce((s, p) => s + p[1], 0) / n];
  }
  let cx = 0;
  let cz = 0;
  for (let i = 0; i < points.length; i++) {
    const [x0, z0] = points[i];
    const [x1, z1] = points[(i + 1) % points.length];
    const f = x0 * z1 - x1 * z0;
    cx += (x0 + x1) * f;
    cz += (z0 + z1) * f;
  }
  return [cx / (6 * a), cz / (6 * a)];
}

/** True when the polygon is an axis-aligned rectangle (so the editor can offer x/z/width/depth fields). */
export function isAxisRect(points: readonly Vec2[]): boolean {
  if (points.length !== 4) return false;
  for (let i = 0; i < 4; i++) {
    const [x0, z0] = points[i];
    const [x1, z1] = points[(i + 1) % 4];
    if (Math.abs(x0 - x1) > 1e-6 && Math.abs(z0 - z1) > 1e-6) return false;
  }
  return true;
}

export function bounds(points: readonly Vec2[]): { x0: number; z0: number; x1: number; z1: number } {
  let x0 = Infinity;
  let z0 = Infinity;
  let x1 = -Infinity;
  let z1 = -Infinity;
  for (const [x, z] of points) {
    x0 = Math.min(x0, x);
    z0 = Math.min(z0, z);
    x1 = Math.max(x1, x);
    z1 = Math.max(z1, z);
  }
  return { x0, z0, x1, z1 };
}

/** Corners of a furniture item in world x/z (rotated rectangle). */
export function furnitureFootprint(f: Furniture): Vec2[] {
  const a = (f.rotation * Math.PI) / 180;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const hw = f.w / 2;
  const hd = f.d / 2;
  return [
    [-hw, -hd],
    [hw, -hd],
    [hw, hd],
    [-hw, hd],
  ].map(([x, z]) => [f.x + x * c - z * s, f.z + x * s + z * c] as Vec2);
}

export function pointInPolygon(p: Vec2, points: readonly Vec2[]): boolean {
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const [xi, zi] = points[i];
    const [xj, zj] = points[j];
    if (zi > p[1] !== zj > p[1] && p[0] < ((xj - xi) * (p[1] - zi)) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}

/** 3D model of each lamp type. */
export const LAMP_MODEL: Record<string, LampModel> = {
  lamp_ceiling: "ceiling",
  lamp_downlight: "downlight",
  lamp_spot: "spot",
  lamp_panel: "panel",
  lamp_uplight: "uplight",
  lamp_bollard: "bollard",
  lamp_garden: "garden",
  lamp_pendant: "pendant",
  ceiling_fan: "fan",
  lamp_floor: "floor",
  lamp_table: "table",
  lamp_wall: "wall",
  led_strip: "strip",
};
