// 3D view (separate bundle, loaded on demand). Renders only when something changes.
//
// Floors are shown in three levels: the whole house (floors pulled apart or stacked), one floor
// (floors above fly up and fade out, floors below stay as a dim reference) and one room (camera
// flight into it). Each floor is a group with its own materials so its height and opacity can be
// animated independently.

import { packModel, placement } from "./furniture/packs.ts";
import { Builder } from "./furniture/builder.ts";
import { seededRandom, stepPet, type PetMotion, type PetRoom } from "./pets.ts";
import { isLowEnd } from "../hardware.ts";
import { QualityGovernor } from "./quality-governor.ts";
import {
  AdditiveBlending,
  Box3,
  type Object3D,
  CanvasTexture,
  ClampToEdgeWrapping,
  Color,
  DoubleSide,
  Group,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  OrthographicCamera,
  PerspectiveCamera,
  Points,
  PlaneGeometry,
  Raycaster,
  RepeatWrapping,
  Scene,
  SRGBColorSpace,
  Float32BufferAttribute,
  Uint32BufferAttribute,
  DynamicDrawUsage,
  BufferGeometry as Geometry,
  Vector2,
  Vector3,
  Vector4,
  WebGLRenderer,
  WebGLRenderTarget,
  type BufferGeometry,
  type Material,
} from "three";
import type { Building, Floor, PlanNote, Room, StartView } from "../model.ts";
import { recolorLamps, SHADE_SENTINEL, shadeFactors } from "./lamp-colors.ts";
import { CEILING_TYPES, ceilingOf, centroid, noteDue, DEFAULT_PAINT_INSIDE, DEFAULT_PAINT_OUTSIDE, furnitureFootprint, pointInPolygon, polygonArea, openingStyle, WALL_LAMP_Y } from "../model.ts";
import { roofRider, roofUnderAt, sectionCutsBelow } from "../roof-sections.ts";
import { centredAt, floorLabelPosition, floorShowsMarkers, floorShowsOutdoorMarkers, LabelPlacer, leftAt, project, stackFloorLabels, type FloorLabel, type ScreenPoint } from "./scene/labels.ts";
import { easeFloor, fadeMaterials, floorShare, floorTarget } from "./scene/floor-motion.ts";
import { atTarget, stepOpening, stepShare } from "./scene/opening-motion.ts";
import { addFloorWedge, addLampHalo, addSpotCone, hiddenInCut, type HaloPoints } from "./scene/halos.ts";
import { sunlightPatches, sunSignature } from "./scene/sunlight.ts";
import { stripRiseLift } from "./scene/strip.ts";
import { HouseShadow } from "./scene/house-shadow.ts";
import { mergeHoles } from "../geometry/holes.ts";
import type { Vec2 } from "../model.ts";
import { LAMP_SIZE, HANGING_LAMPS } from "./scene/lamp-data.ts";
import { lightSourcesOf } from "./scene/light-sources.ts";
import { makeFloorMaterials, type FloorMaterials } from "./scene/materials.ts";
import { createDevicePin, type PinHooks } from "./scene/pins.ts";
import { timberMesh, refreshHeatingColours, setHeatingMode, setRoomTemp } from "./timber.ts";
import { buildFloorGeometry, SLAB, stairHoles, type FloorGeometry, type WallPaint } from "./build.ts";
import { OrbitControls, type OrbitView } from "./controls.ts";
import { type FoldMasks } from "./fold.ts";
import { batteryBar, pictureRect, pushPackGlow, pushPackLamp, pushPackMoving, screenRect, pushFridgeDoors } from "./furniture.ts";
import { coverReach, hasMesh, hasMovingParts, mountBase, packItem, setMeshSource, setPacks, type FurniturePack, type MeshSource } from "../packs.ts";
import { withVehicles } from "../parking.ts";
import { buildRoof, type RoofWindowState } from "./roof.ts";
import { GROUND, groundFace, groundFloor, wallFaces } from "../solar.ts";
import { MapLayer } from "./live-map.ts";
import type { MapSettings } from "../model.ts";
import { accentOnUniform, accentUniform, parseAccent, lineBlending, themed, themeIndex, type Theme, type ThemeUniform } from "./theme.ts";

export type { Theme } from "./theme.ts";
import { ALWAYS, DEG, GeoBuffer, LineBuffer, pushPrism } from "./geo.ts";
import { buildLightSurface, lightColors, type LightSurface } from "./lighting.ts";
import { animateGlow } from "../light-effects.ts";
import { buildOpeningParts, CLOSED, type OpeningState } from "./openings.ts";
import { WeatherLayer, type SkyView } from "./live-weather.ts";
import { EnergyLayer, type EnergyArc, type PlanPoint, type SparkField } from "./live-energy.ts";
import { SoundLayer, type SoundSpot } from "./live-sound.ts";
import { WaterLayer, type SpraySpot } from "./live-water.ts";
import { AirflowLayer } from "./airflow-layer.ts";
import { WifiLayer } from "./wifi-layer.ts";
import { HEATING_MODES, LAYER_LABELS, LayerController, type LayerState } from "./layer-controller.ts";
import { TimeController, type Snapshot } from "./time-controller.ts";
import { TimelineSlider } from "../ui/timeline-slider.ts";
import { DevicePopup } from "../ui/device-popup.ts";
import { ScreenLayer, type LiveScreen } from "./live-screens.ts";
import { PictureLayer, type LivePicture } from "./live-pictures.ts";
import { addMeshLighting, applyEnvironment, disposeMeshInstance, instantiateMesh, loadMesh } from "./meshes.ts";
import { circlePath, cleaningPath, stepRobot, type RobotInfo, type RobotMotion } from "./robot.ts";
import { inReach } from "./tap-reach.ts";
import type { AnimationName } from "../light-effects.ts";

export type { RobotInfo } from "./robot.ts";
export { inspectModel, ModelError, prepareModel, previewModel, type ModelInfo, type PrepareOptions } from "./models/prepare.ts";

/** Colour of a robot's light by what it does. */
const ROBOT_LED: Record<RobotInfo["mode"], number> = { cleaning: 0x37e0ff, returning: 0xffb547, docked: 0x41c46b, idle: 0x5b7cff, error: 0xff3b4f };

export type { OpeningState } from "./openings.ts";

export type Quality = "auto" | "low" | "high";
export type WallMode = "auto" | "cut" | "slope";

export interface ViewerOptions {
  quality?: Quality;
  /** Pull floors apart in the house view (default true). */
  explode?: boolean;
  onRoomTap?: (floorId: string, roomId: string | null) => void;
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

export type FloorStack = "dim" | "stacked" | "single";


export type LampModel = "ceiling" | "downlight" | "spot" | "panel" | "pendant" | "fan" | "floor" | "uplight" | "table" | "wall" | "strip" | "bollard" | "garden";

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

export type { SkyView, SkyWeather } from "./live-weather.ts";
export type { EnergyArc, PlanPoint, SparkField } from "./live-energy.ts";
export type { SoundSpot } from "./live-sound.ts";

/** A frame's photo: the viewer finds the frame's picture part itself. */
export interface LivePictureInput {
  furnitureId: string;
  floorId: string;
  url: string;
  border: number;
  fit: "cover" | "contain";
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

/** How far the roof lifts off the top floor while the floors are pulled apart. */
const ROOF_GAP = 1.4;
/** Grid cells across the ground texture. */
const GROUND_CELLS = 32;
const LAMP_BODY = 0x2a3a60;
/** Fan blades: a little lighter than the lamp bodies, so they read against the motor. */
const FAN_BLADE = 0x4a5c88;
const LAMP_SHADE = 0x1d2946;
/** Lamps that hang from the ceiling (hidden in the cut view). */
const FLASH_MS = 450;
const EFFECT_MS = 125;
/** Eye height above the floor while walking (metres). */
const EYE_HEIGHT = 1.6;
/** On the tablet level, decorations (colour effects, rain, robots, the energy flow) come to rest this long after the last touch or change. */
const REST_AFTER_MS = 30000;
/** A ceiling fan's blades and the angle between them. */
const FAN_BLADES = 5;
const FAN_SPACING = 360 / FAN_BLADES;


interface FloorView {
  floor: Floor;
  /** Position in the stack, ordered by elevation. */
  rank: number;
  group: Group;
  geo: FloorGeometry;
  floorMesh: Mesh;
  shadowMesh: Mesh;
  patternMesh: Mesh;
  /** Room lighting on floors and wall faces (see lighting.ts). */
  glowMesh: Mesh;
  lightSurface: LightSurface | null;
  /** Light zone per room index (rooms joined by "no wall" share one); null when every room is its own. */
  lightZones: number[] | null;
  framesMesh: Mesh;
  glassMesh: Mesh;
  blindsMesh: Mesh;
  lampMesh: Mesh;
  /** Sunlight falling through the windows onto the floor. */
  sunMesh: Mesh;
  sunSig: string;
  /** Soft glow around lit lamps, and light cones under spots (quality "High"). */
  haloMesh: Points;
  coneMesh: Mesh;
  /** Triangle ranges of the wedges plugins draw on the floor, by device id (a tap on one taps the device). */
  wedgeTris: { id: string; start: number; end: number }[];
  /** Motion trail on the floor (discs and ribbons). */
  /** Doors of smart fridges (they swing open with their sensors). */
  fridgeMesh: Mesh;
  /** Triangle ranges of lamps (entity ids), furniture walls mesh and openings, for tapping. */
  lampTris: { id: string; start: number; end: number }[];
  /** The same lamp ranges, keyed by furniture id (for moving lamps). */
  lampFurnTris: { id: string; start: number; end: number }[];
  frameTris: { id: string; start: number; end: number }[];
  glassTris: { id: string; start: number; end: number }[];
  blindTris: { id: string; start: number; end: number }[];
  wallMesh: Mesh;
  screenMesh: Mesh;
  screenSig: string;
  /** Klang: rings around playing speakers and lines between grouped ones (made when first needed). */
  soundGroup?: Group;
  /** Pictures shown on lit screens, by furniture id. */
  /** Content signatures: meshes are only rebuilt when these change. */
  flowLayout: string;
  glowSig: string;
  /** Lamp shapes (rebuilt when they change) and lamp colours (written into the mesh in place). */
  lampShapeSig: string;
  lampColorSig: string;
  /** Shade factor per lamp vertex (0 = body) and the triangle range of every lamp, by device id. */
  lampShade: Float32Array;
  lampRanges: Map<string, { start: number; end: number }>;
  /** Room box and room labels with their centres, so labels are placed without recomputing them. */
  bbox: { x0: number; x1: number; z0: number; z1: number } | null;
  roomPins: { pin: HTMLButtonElement; room: Room; cx: number; cz: number }[];
  /** The floor's notes as pins; a tap opens the whole text. */
  notePins: { pin: HTMLButtonElement; note: PlanNote }[];
  /** Size of the floor label, measured once per text (reading it every frame forces a layout). */
  labelSize: { w: number; h: number } | null;
  materials: FloorMaterials;
  /** Bit masks of the wall buckets that stand and that are drawn as glass (read by the fold shader). */
  mask: FoldMasks;
  /** Shown opening states (animated towards the targets set from Home Assistant). */
  openings: Map<string, OpeningState>;
  /** Current and target height offset and opacity. */
  y: number;
  o: number;
  ty: number;
  to: number;
  appliedO: number;
  label: HTMLButtonElement;
}

const ACTIVE_FLOOR = new Color(0x1a2a4d);

/** The roof's opacity at rest in the house view: a touch see-through, so what lies under it can be guessed. */
const ROOF_REST = 0.94;

export { isLowEnd };

export class NextFloorViewer {
  private readonly host: HTMLElement;
  private readonly options: ViewerOptions;
  private renderer: WebGLRenderer;
  private readonly scene = new Scene();
  private readonly camera = new PerspectiveCamera(38, 1, 0.1, 400);
  private controls: OrbitControls;
  private readonly labels: HTMLDivElement;
  private readonly root = new Group();
  private readonly patternTexture: CanvasTexture;
  private readonly blindTexture: CanvasTexture;
  private openingTargets = new Map<string, OpeningState>();
  /** Smart fridge doors: how far each stands open (0…1) and where it is going. */
  private fridges = new Map<string, { l: number; r: number; tl: number; tr: number }>();
  /** Pack items with moving parts (curtains, roller screens, awnings, gates): how far out they are now and where they are going. */
  private covers = new Map<string, { k: number; t: number }>();
  private screens = new Map<string, ScreenState>();
  /** Entities behind furniture (TV, …) and openings (blind, contact), for tapping them in 3D. */
  private pickFurniture = new Map<string, string>();
  private pickOpenings = new Map<string, string>();
  /** Lamps flashing after a tap (entity id -> end time). */
  private flashes = new Map<string, number>();
  /** Editor: things on surfaces (solar fields, roof windows) are grabbed and moved with a ray from the camera. */
  private surfaceGrab: SurfaceGrab | null = null;
  private surfaceDragging = false;
  /** Furnishing limited to these furniture types (the editor's energy tool); null = all. */
  private furnishTypes: ReadonlySet<string> | null = null;
  /** Live state of the roof windows (the roof is rebuilt when it changes). */
  private roofWindows = new Map<string, RoofWindowState>();
  private roofWindowsKey = "";
  private persons: PersonPin[] = [];
  private readonly personPins = new Map<string, HTMLDivElement>();
  private floorInfo = new Map<string, string>();
  /** Text behind the room names (the "values" heat mode: temperature, humidity, CO₂ per room). */
  private roomInfo = new Map<string, string>();
  /** Ground grid texture, made when the ground first shows (the tablet level never shows it). */
  private groundTexture: CanvasTexture | null = null;
  private devices: DeviceMarker[] = [];
  /** Device markers with the last written fields, so unchanged fields are not written again. */
  private readonly devicePins = new Map<string, { el: HTMLButtonElement; icon: string; text: string; watt: string; label: string; active: boolean; unavailable: boolean; glow: string; caption: string }>();
  private readonly ground: Mesh;
  private floors: FloorView[] = [];
  private building: Building | null = null;
  private floorId: string | null = null;
  private roomId: string | null = null;
  private wallMode: WallMode = "auto";
  /** Solid painted walls: no glass, every wall in its paint (see setPaintedWalls). */
  private painted = false;
  private explode: boolean;
  private frame = 0;
  private lastFrame = 0;
  /** The quality chosen (auto, low, high); auto may still step down by itself. */
  private qualityMode: Quality = "auto";
  /** Watches the frame times in auto quality and asks for fewer pixels or the simple look (null: not auto, or already low). */
  private governor: QualityGovernor | null = null;
  private disposed = false;
  private readonly resizeObserver: ResizeObserver;
  private fpsFrames = 0;
  private worstFrame = 0;
  private lastStatsFrame = 0;
  private lowQuality = false;
  private highQuality = false;
  /** Seconds used for animated colour effects (advanced in steps while an effect runs). */
  private effectTime = 0;
  /** The frame was asked for by the effect timer or a room tint (shown in the statistics). */
  private effectTick = false;
  private tintTick = false;
  private effectTimer: ReturnType<typeof setTimeout> | undefined;
  /** Until when decorations keep moving on the tablet level (a touch or a visible change wakes them). */
  private awakeUntil = 0;
  /** What the devices looked like at the last change (on/off and colour), to tell a real change from a new sensor value. */
  private deviceLook = "";
  private readonly haloTexture: CanvasTexture;
  /** Roof over the top floor (house view only), its opacity and the camera distance of the house view. */
  /** The roof: one group with a part per floor it sits on (each part follows its floor). */
  private roof: { group: Group; parts: { group: Group; floorId: string; rideId: string; base: number; lift: boolean }[]; solid: MeshBasicMaterial; lines: LineBasicMaterial; glass: MeshBasicMaterial } | null = null;
  private roofO = 0;
  /** The roof stays put while the camera comes close (no lift, no fade): the editor's roof tool, or a choice of the viewer. */
  private keepRoof = false;
  /** Robot vacuums: their info from Home Assistant, how they move, and their meshes. */
  private robots = new Map<string, { info: RobotInfo; motion: RobotMotion; group: Group; led: MeshBasicMaterial }>();
  /** Pets roaming their rooms: their motion, the room they keep to, and the group that carries their model. */
  private pets = new Map<string, { motion: PetMotion; room: PetRoom; random: () => number; group: Group; floorId: string }>();
  private petMat: MeshBasicMaterial | null = null;
  private petTimer: ReturnType<typeof setTimeout> | undefined;
  private robotGeo: BufferGeometry | null = null;
  private robotMat: MeshBasicMaterial | null = null;
  private mowerMat: MeshBasicMaterial | null = null;
  private robotLedGeo: BufferGeometry | null = null;
  private robotLast = 0;
  /** Owned 3D models standing in the floors (see meshes.ts), and the light they need. */
  private meshes: { group: Group; furnitureId: string }[] = [];
  private meshLight: ReturnType<typeof addMeshLighting> | null = null;
  private meshAsked = new Set<string>();
  private robotTimer: ReturnType<typeof setTimeout> | undefined;
  private floorStack: FloorStack = "dim";
  /** Floors by id, and per-frame bookkeeping so labels are only placed when something moved. */
  private floorMap = new Map<string, FloorView>();
  private labelsDirty = true;
  private readonly viewKey = new Float64Array(6);
  private readonly pinMode = new WeakMap<HTMLElement, string>();
  private size = { w: 1, h: 1 };
  /** Width taken on the left by the host (the floor pictures); floor labels keep clear of it. */
  private labelInset = 0;
  /** Floors with lamps that run a colour effect, and the floor of every device (for flashes). */
  private effectFloors = new Set<string>();
  private deviceFloor = new Map<string, string>();
  private statsOn = false;
  /** Vehicles standing in parking spots (spot id -> pack item type); they join the floor geometry. */
  private parked = new Map<string, string>();
  private parkedSig = "";
  /** Slow automatic turn of the view (kiosk screensaver), in radians per second. */
  private orbitSpeed = 0;
  private orbitLast = 0;
  private orbitTimer: ReturnType<typeof setTimeout> | undefined;
  /** The host is inside the viewport (a card scrolled away renders nothing). */
  private onScreen = true;
  private intersection: IntersectionObserver | null = null;
  /** The device a running swipe acts on. */
  private swipe: { entity: string; x: number; y: number } | null = null;
  /** Furnishing in 3D: items can be dragged; the selected one shows a wireframe box. */
  private furnish = false;
  private selectedFurniture: string | null = null;
  /** Furnishing: the selected device, the pin a pointer just went down on, and a device being dragged. */
  private selectedDevice: string | null = null;
  private pendingDevice: string | null = null;
  private readonly labelPlacer = new LabelPlacer();
  /** What the device pins ask of this viewer. */
  private readonly pinHooks: PinHooks = {
    furnishing: () => this.furnish,
    pressedWhileFurnishing: (id) => (this.pendingDevice = id),
    selectWhileFurnishing: (id) => {
      this.selectDevice(id);
      this.options.onDeviceSelect?.(id);
    },
    centre: (pin) => {
      const [box, area] = [pin.getBoundingClientRect(), this.host.getBoundingClientRect()];
      return { x: box.left + box.width / 2 - area.left, y: box.top + box.height / 2 - area.top };
    },
    tap: (id, x, y) => {
      // away from the opened room a marker opens its floor or room (tap_in_room)
      const d = this.tapInRoom ? this.devices.find((m) => m.id === id) : undefined;
      if (d && !this.deviceInReach(d.floorId, d.roomId)) return this.options.onRoomTap?.(d.floorId, d.roomId);
      this.options.onDeviceTap?.(id, x, y);
    },
    hold: (id, x, y) => this.options.onDeviceHold?.(id, x, y),
  };
  /** A tap switches devices only in the opened room (outside any room: once their floor is open). */
  private tapInRoom = false;
  private deviceGrab: { id: string; floorId: string; offset: [number, number]; x: number; z: number; moved: boolean } | null = null;
  private grab: { floorId: string; id: string; offset: [number, number]; x: number; z: number; moved: boolean } | null = null;
  private ghost: LineSegments | null = null;
  private theme: Theme = "neon";
  private readonly themeUniform: ThemeUniform = { value: 0 };
  private sun: SunState | null = null;
  /** The sky over the plot: rain, snow, clouds, fog, lightning, sun and moon (live-weather.ts). */
  private readonly weatherLayer: WeatherLayer;
  /** The house's shadow on the ground, and what it was last built from. */
  private readonly houseShadow = new HouseShadow();
  private shadowKey = "";
  /** The merged footprint of the floors above ground, kept until the rooms change (merging is the costly part). */
  private footprint: { key: string; rings: Vec2[][] } = { key: "", rings: [] };
  /** The real map under the plan (live-map.ts). */
  private readonly mapLayer: MapLayer;
  private mapSettings: MapSettings | null = null;
  private mapNorth = 0;
  private groundY = 0;
  private skyView: SkyView | null = null;
  private weatherTimer: ReturnType<typeof setTimeout> | undefined;
  /** Power flowing between the devices, sparkling solar modules (live-energy.ts). */
  private readonly energyLayer: EnergyLayer;
  /** Sound rings around playing speakers and multiroom threads (live-sound.ts). */
  private readonly soundLayer: SoundLayer;
  private readonly waterLayer: WaterLayer;
  /** How opaque the glass walls are, shared by every floor's materials (0.2: faint glass). */
  private readonly glassAlpha = { value: 0.2 };
  /** Pictures on TVs that play, with an ambilight behind (live-screens.ts). */
  private readonly screenLayer: ScreenLayer;
  /** Own photos in picture frames (live-pictures.ts). */
  private readonly pictureLayer: PictureLayer;
  private readonly airflowLayer: AirflowLayer;
  private readonly wifiLayer: WifiLayer;
  private readonly layerController: LayerController;
  private readonly timeController: TimeController;
  private readonly timeline: TimelineSlider;
  private timeSnapshot: Snapshot | null = null;
  private readonly popup: DevicePopup;
  /** NextFloor's floating cards: their points in the plan and who is told where they are on screen. */
  private liveAnchors: PlanPoint[] = [];
  private liveAnchorCb: LiveAnchorCallback | null = null;
  /** Heatmap colour per room id (null: normal floors). */
  private roomTint: Map<string, [number, number, number]> | null = null;
  private houseRadius = 20;
  private startView: StartView | null = null;
  private fpsStart = 0;

  constructor(host: HTMLElement, options: ViewerOptions = {}) {
    this.host = host;
    this.options = options;
    this.explode = options.explode ?? true;
    this.qualityMode = options.quality ?? "auto";
    this.renderer = this.makeRenderer(this.qualityMode);
    this.labels = document.createElement("div");
    this.labels.className = "nf-labels";
    host.append(this.labels);
    this.patternTexture = makePatternTexture();
    this.blindTexture = makeBlindTexture();
    this.haloTexture = makeHaloTexture();
    this.ground = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ transparent: true, blending: AdditiveBlending, depthWrite: false }));
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.renderOrder = -1;
    this.scene.add(this.ground, this.root);
    this.weatherLayer = new WeatherLayer(this.scene);
    this.scene.add(this.houseShadow.mesh);
    this.mapLayer = new MapLayer(this.scene);
    this.mapLayer.onChange = () => this.invalidate();
    this.energyLayer = new EnergyLayer(this.scene, this.liftOf);
    this.soundLayer = new SoundLayer(this.scene, this.liftOf);
    this.waterLayer = new WaterLayer(this.scene, this.liftOf);
    this.screenLayer = new ScreenLayer(this.scene, this.liftOf);
    this.screenLayer.onChange = () => this.invalidate();
    this.pictureLayer = new PictureLayer(this.scene, this.liftOf);
    this.pictureLayer.onChange = () => this.invalidate();
    this.airflowLayer = new AirflowLayer(this.scene);
    this.wifiLayer = new WifiLayer(this.scene);
    this.layerController = new LayerController((st) => this.applyLayers(st));
    this.buildLayerBar();
    this.layerController.init();
    this.timeController = new TimeController((snap) => this.applySnapshot(snap));
    this.timeline = new TimelineSlider(this.host, (offsetH) => void this.seek(offsetH));
    this.popup = new DevicePopup(this.host);
    this.host.addEventListener("click", this.onPick);
    // Testhaken: ?nfpopup=<anker> oeffnet das Popup ohne Mausklick (nur Diagnose).
    const dbg = new URLSearchParams(location.search).get("nfpopup");
    if (dbg) window.setTimeout(() => void this.popup.show(dbg, DevicePopup.token()), 2500);
    this.weatherLayer.onFlash = (on) => this.host.classList.toggle("live-flash", on);
    this.controls = this.makeControls();
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(host);
    document.addEventListener("visibilitychange", this.onVisibility);
    // any touch on the view (canvas, pins, labels) wakes resting decorations
    this.host.addEventListener("pointerdown", this.onTouch, { passive: true });
    this.awakeUntil = performance.now() + REST_AFTER_MS;
    if (typeof IntersectionObserver === "function") {
      this.intersection = new IntersectionObserver((entries) => {
        const on = entries.some((e) => e.isIntersecting);
        if (on === this.onScreen) return;
        this.onScreen = on;
        if (!on) {
          clearTimeout(this.effectTimer);
          this.effectTimer = undefined;
        }
        if (on) this.invalidate();
      });
      this.intersection.observe(host);
    }
    this.resize();
  }

  /** Whether the tablet level is active (hosts lighten their own work with it). */
  get low(): boolean {
    return this.lowQuality;
  }

  /** Vehicles in the parking spots (spot id -> pack item type); a change rebuilds the floors. */
  setParked(parked: Map<string, string>): void {
    const sig = [...parked]
      .map(([id, v]) => `${id}=${v}`)
      .sort()
      .join("|");
    if (sig === this.parkedSig) return;
    this.parkedSig = sig;
    this.parked = parked;
    if (this.building) {
      this.rebuild();
      this.invalidate();
    }
  }

  /** Frame statistics are only gathered while something shows them. */
  setStats(on: boolean): void {
    this.statsOn = on;
  }

  /** Space on the left the floor labels leave free (the floor pictures of the host). */
  setLabelInset(px: number): void {
    if (this.labelInset === px) return;
    this.labelInset = px;
    this.labelsDirty = true;
    this.invalidate();
  }

  /** Turn the view slowly by itself (0 stops); a touch pauses it. */
  setAutoOrbit(speed: number): void {
    this.orbitSpeed = speed;
    this.orbitLast = 0;
    this.invalidate();
  }

  setQuality(quality: Quality): void {
    this.qualityMode = quality;
    this.swapRenderer(quality);
  }

  /** Auto quality found the tablet too slow even at one pixel per point: the simple look, while the choice stays "auto". */
  private dropToLow(): void {
    if (this.disposed || this.lowQuality) return;
    this.swapRenderer("low");
  }

  private swapRenderer(quality: Quality): void {
    const canvas = this.renderer.domElement;
    const next = this.makeRenderer(quality);
    this.rebuildTier();
    this.applyTierFlags();
    canvas.replaceWith(next.domElement);
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    this.renderer = next;
    const { view, locked } = this.controls;
    this.controls.dispose();
    this.controls = this.makeControls();
    this.controls.view = view;
    this.controls.locked = locked;
    this.resize();
  }

  /** Furniture packs (models of pack furniture); set before the building that uses them. */
  /** Where owned 3D models come from (the host knows Home Assistant's login). */
  setMeshSource(source: MeshSource | null): void {
    setMeshSource(source);
  }

  setPacks(packs: FurniturePack[]): void {
    setPacks(packs);
    if (this.building) {
      this.rebuild();
      this.invalidate();
    }
  }

  setBuilding(building: Building): void {
    const first = this.building === null;
    this.building = building;
    this.wifiLayer.setBuilding(building);
    this.rebuild();
    if (first) this.fit(0);
    this.invalidate();
  }

  /** Walking through the house at eye level (null: orbiting as usual). */
  get walking(): boolean {
    return this.controls.walk !== null;
  }

  /**
   * Starts walking on the open floor (else the ground floor), in the open room (else the largest), at eye height, looking the way the
   * camera looked. Walls stand whole while walking. Returns the floor it walks on.
   */
  startWalk(): string | null {
    const floors = this.floors.filter((fv) => fv.floor.rooms.some((r) => r.points.length >= 3));
    const fv = (this.floorId ? this.floorMap.get(this.floorId) : undefined) ?? [...floors].sort((a, b) => Math.abs(a.floor.elevation) - Math.abs(b.floor.elevation))[0];
    if (!fv || !fv.bbox) return null;
    const rooms = fv.floor.rooms.filter((r) => r.points.length >= 3);
    const room = rooms.find((r) => r.id === this.roomId) ?? [...rooms].sort((a, b) => polygonArea(b.points) - polygonArea(a.points))[0];
    const [x, z] = room ? centroid(room.points) : [(fv.bbox.x0 + fv.bbox.x1) / 2, (fv.bbox.z0 + fv.bbox.z1) / 2];
    if (this.floorId !== fv.floor.id) this.setFloor(fv.floor.id, false);
    const margin = 0.3;
    this.controls.walk = {
      eye: new Vector3(x, fv.floor.elevation + fv.ty + EYE_HEIGHT, z),
      yaw: this.controls.view.theta,
      pitch: -0.05,
      stick: [0, 0],
      keys: new Set(),
      bounds: { x0: fv.bbox.x0 - margin, x1: fv.bbox.x1 + margin, z0: fv.bbox.z0 - margin, z1: fv.bbox.z1 + margin },
      last: 0,
    };
    this.labelsDirty = true;
    this.wake();
    return fv.floor.id;
  }

  stopWalk(): void {
    if (!this.controls.walk) return;
    this.controls.walk = null;
    this.labelsDirty = true;
    this.fit(700);
  }

  /** The touch stick while walking: x turns, y walks (-1 … 1; up is negative like the screen). */
  setWalkStick(x: number, y: number): void {
    if (!this.controls.walk) return;
    this.controls.walk.stick = [x, y];
    this.wake();
  }

  /** Show one floor (null = the whole house). */
  setFloor(floorId: string | null, animate = true): void {
    // from one floor to another the camera may keep its side, height and distance (a tablet set up to look one way)
    const keep = this.keepCamera && this.floorId !== null && floorId !== null && floorId !== this.floorId ? { theta: this.controls.view.theta, phi: this.controls.view.phi, radius: this.controls.view.radius } : null;
    this.floorId = floorId;
    this.roomId = null;
    this.labelsDirty = true;
    this.applyTargets(!animate);
    this.applyHighlight();
    this.fit(animate ? 700 : 0, keep);
  }

  /** Switching floors keeps the camera's side, height and distance instead of fitting the new floor from the start view's side. */
  setKeepCamera(on: boolean): void {
    this.keepCamera = on;
  }

  /** How much closer the fitted views come (1 = fitted, 2 = twice as close): small tablets see the house larger. */
  setZoom(zoom: number): void {
    const z = Math.min(3, Math.max(0.5, zoom || 1));
    if (z === this.zoom) return;
    this.zoom = z;
    if (this.building) this.fit(400);
  }

  /** Pull the floors apart in the house view, or stack them. */
  /** What shows below an opened floor: the floors dimmed, the whole house up to it, or nothing. */
  setFloorStack(mode: FloorStack): void {
    if (mode === this.floorStack) return;
    this.floorStack = mode;
    this.applyTargets(false);
  }

  setKeepRoof(on: boolean): void {
    if (on === this.keepRoof) return;
    this.keepRoof = on;
    this.invalidate();
  }

  setExplode(explode: boolean): void {
    if (explode === this.explode) return;
    this.explode = explode;
    this.applyTargets(false);
    if (this.floorId === null) this.fit(700);
  }

  /** Highlight a room and fly into it (null = back to the floor overview). */
  selectRoom(roomId: string | null): void {
    this.roomId = roomId;
    this.labelsDirty = true;
    this.applyHighlight();
    if (!roomId) {
      this.fit(700);
      return;
    }
    const fv = this.floors.find((f) => f.floor.rooms.some((r) => r.id === roomId));
    const room = fv?.floor.rooms.find((r) => r.id === roomId);
    if (!fv || !room) return;
    // a room may open with a camera of its own (#282)
    const own = room.start_view;
    if (own) {
      const base = fv.floor.elevation + fv.ty;
      const [mx, mz] = centroid(room.points);
      const t = own.target ?? { x: mx, y: 0.3, z: mz };
      this.controls.flyTo({ target: new Vector3(t.x, t.y + base, t.z), radius: own.radius, phi: own.phi, theta: own.theta });
      return;
    }
    const [cx, cz] = centroid(room.points);
    const xs = room.points.map((p) => p[0]);
    const zs = room.points.map((p) => p[1]);
    const size = new Vector3(Math.max(...xs) - Math.min(...xs), fv.floor.cut_height, Math.max(...zs) - Math.min(...zs));
    this.controls.flyTo({ target: new Vector3(cx, fv.floor.elevation + fv.ty + 0.3, cz), radius: Math.max(4, this.distanceFor(size) * 1.05), phi: 0.72 });
  }

  /** Walls lowered in this mode (cut flat, or sloped): ceiling lamps and the roof would float above them. */
  private get lowered(): boolean {
    return this.wallMode !== "auto";
  }

  /** Solid walls painted in the building's colours (outside, inside, per room) instead of the look's walls and glass. */
  setPaintedWalls(on: boolean): void {
    if (on === this.painted) return;
    this.painted = on;
    this.rebuild();
    this.invalidate();
  }

  /** The paint the walls get in the solid view. */
  private wallPaint(): WallPaint | undefined {
    const b = this.building;
    if (!this.painted || !b) return undefined;
    const hex = (v: string | null | undefined, fallback: string) => Number.parseInt((/^#?([0-9a-f]{6})$/i.exec(v?.trim() ?? "")?.[1] ?? fallback.slice(1)), 16);
    return {
      outside: hex(b.settings.wall_paint_outside, DEFAULT_PAINT_OUTSIDE),
      inside: hex(b.settings.wall_paint_inside, DEFAULT_PAINT_INSIDE),
      rooms: b.floors.flatMap((f) => f.rooms).filter((r) => r.wall_paint && r.points.length >= 3).map((r) => ({ points: r.points, color: hex(r.wall_paint, DEFAULT_PAINT_INSIDE) })),
    };
  }

  setWallMode(mode: WallMode): void {
    this.wallMode = mode;
    // ceiling lamps would float above cut walls
    for (const fv of this.floors) this.buildLamps(fv);
    this.invalidate();
  }

  /** Replace the device markers; pins are reused per entity, light cones rebuilt per floor. */
  setDevices(devices: DeviceMarker[]): void {
    // a light switched or a device that started or stopped wakes resting decorations; a sensor value does not
    const look = devices.map((d) => `${d.id}:${d.active ? 1 : 0}:${d.glow ? d.glow.level.toFixed(1) : "-"}`).join(";");
    if (look !== this.deviceLook) {
      this.deviceLook = look;
      this.wake();
    }
    this.devices = devices;
    this.labelsDirty = true;
    // colour effects and turning fans are drawn in steps by the shared effect timer
    this.effectFloors = new Set(devices.filter((d) => (d.effect && d.glow) || (d.spin ?? 0) > 0).map((d) => d.floorId));
    this.deviceFloor = new Map(devices.map((d) => [d.id, d.floorId]));
    const seen = new Set<string>();
    for (const d of devices) {
      seen.add(d.id);
      let pin = this.devicePins.get(d.id);
      if (!pin) {
        pin = { el: createDevicePin(d.id, this.pinHooks), icon: "", text: "", watt: "", label: "", active: false, unavailable: false, glow: "", caption: "" };
        this.devicePins.set(d.id, pin);
        this.labels.append(pin.el);
      }
      // every write below invalidates style or layout: only fields that changed are written
      const el = pin.el;
      if (pin.icon !== d.icon) {
        pin.icon = d.icon;
        el.querySelector(".nf-dev-icon")!.innerHTML = d.icon;
      }
      if (pin.text !== d.text) {
        pin.text = d.text;
        el.querySelector(".nf-dev-text")!.textContent = d.text;
      }
      const caption = d.caption ?? "";
      if (pin.caption !== caption) {
        pin.caption = caption;
        el.querySelector(".nf-dev-name")!.textContent = caption;
      }
      const watt = d.power !== null && d.power !== undefined && d.power >= 1 ? (d.powerText ?? `${Math.round(d.power)} W`) : "";
      if (pin.watt !== watt) {
        pin.watt = watt;
        el.querySelector(".nf-dev-watt")!.textContent = watt;
      }
      const label = `${d.name}: ${d.text}`;
      if (pin.label !== label) {
        pin.label = label;
        el.title = d.name;
        el.setAttribute("aria-label", label);
      }
      if (pin.active !== d.active) {
        pin.active = d.active;
        el.classList.toggle("nf-dev-on", d.active);
      }
      if (pin.unavailable !== d.unavailable) {
        pin.unavailable = d.unavailable;
        el.classList.toggle("nf-dev-na", d.unavailable);
      }
      const glow = d.glow ? `rgb(${d.glow.color.map((c) => Math.round(c * 255)).join(", ")})` : "";
      if (pin.glow !== glow) {
        pin.glow = glow;
        if (glow) el.style.setProperty("--nf-glow", glow);
        else el.style.removeProperty("--nf-glow");
      }
    }
    for (const [id, pin] of this.devicePins) {
      if (seen.has(id)) continue;
      pin.el.remove();
      this.devicePins.delete(id);
    }
    for (const fv of this.floors) {
      this.buildGlow(fv);
      this.buildLamps(fv);
    }
    this.invalidate();
  }

  /** Roof windows open, tilted or with the blind down: the roof is rebuilt when that changes. */
  setRoofWindows(states: Map<string, RoofWindowState>): void {
    const key = JSON.stringify([...states]);
    if (key === this.roofWindowsKey) return;
    this.roofWindowsKey = key;
    this.roofWindows = states;
    this.buildRoofMesh();
    this.invalidate();
  }

  /** People in their rooms (pink markers in the floor and room views). */
  setPersons(persons: PersonPin[]): void {
    this.labelsDirty = true;
    this.persons = persons;
    const seen = new Set<string>();
    for (const p of persons) {
      seen.add(p.id);
      let pin = this.personPins.get(p.id);
      if (!pin) {
        pin = document.createElement("div");
        pin.className = "nf-person";
        pin.dataset.entity = p.id;
        this.personPins.set(p.id, pin);
        this.labels.append(pin);
      }
      pin.title = p.name;
      pin.setAttribute("aria-label", p.name);
      if (pin.dataset.picture !== (p.picture ?? "") || pin.dataset.initials !== p.initials) {
        pin.dataset.picture = p.picture ?? "";
        pin.dataset.initials = p.initials;
        pin.replaceChildren();
        if (p.picture) {
          const img = document.createElement("img");
          img.src = p.picture;
          img.alt = "";
          img.addEventListener("error", () => img.replaceWith(document.createTextNode(p.initials)));
          pin.append(img);
        } else pin.textContent = p.initials;
      }
    }
    for (const [id, pin] of this.personPins) {
      if (seen.has(id)) continue;
      pin.remove();
      this.personPins.delete(id);
    }
    this.invalidate();
  }

  /** The 3D lock of a wall tablet: no turning, panning or zooming by hand (flights to rooms and taps still work). */
  setNavigationLocked(on: boolean): void {
    this.controls.locked = on;
  }

  /** Entities opened by tapping furniture or openings in 3D (by furniture / opening id). */
  setPickTargets(furniture: Map<string, string>, openings: Map<string, string>): void {
    this.pickFurniture = furniture;
    this.pickOpenings = openings;
  }

  /** Look of the 3D view: neon, blueprint or day. Instant: colours are mapped in the shaders. */
  /** An accent colour of the user's choice for the neon look ("#rrggbb"), null for the stock cyan. */
  setAccent(hex: string | null): void {
    const rgb = parseAccent(hex);
    const on = rgb ? 1 : 0;
    if (on === accentOnUniform.value && (!rgb || accentUniform.value.equals(new Vector3(...rgb)))) return;
    accentOnUniform.value = on;
    if (rgb) accentUniform.value.set(...rgb);
    this.invalidate();
  }

  setTheme(theme: Theme): void {
    if (theme === this.theme) return;
    this.theme = theme;
    this.placeMap();
    this.themeUniform.value = themeIndex(theme);
    const blending = lineBlending(theme);
    const lineMats = [...this.floors.map((f) => f.materials.lines), ...(this.roof ? [this.roof.lines] : [])];
    for (const m of lineMats) {
      m.blending = blending;
      m.needsUpdate = true;
    }
    // the neon ground grid would vanish on the light background anyway
    this.placeGround();
    this.invalidate();
  }

  /** Furnishing mode: dragging furniture and lamps moves them instead of turning the view. */
  setFurnishMode(on: boolean): void {
    this.furnish = on;
    if (!on) this.selectFurniture(null);
    this.invalidate();
  }

  /** Select a furniture item (wireframe box), or none. */
  selectFurniture(id: string | null): void {
    if (id && this.selectedDevice) this.selectDevice(null);
    this.selectedFurniture = id;
    this.updateGhost();
    this.invalidate();
  }

  /** Position of the sun; sunlight falls through windows facing it. */
  setSun(sun: SunState | null): void {
    this.sun = sun;
    for (const fv of this.floors) this.buildSun(fv);
    this.buildHouseShadow();
    this.invalidate();
  }

  /**
   * The house's shadow on the ground: the footprint of the floors above ground, swept away from the sun by the height of the house.
   * Off with the sun patches and on the tablet level.
   * A known simplification: the whole footprint sweeps by the full height of the house, so a one-storey garage beside a
   * two-storey house throws a two-storey shadow.
   */
  private buildHouseShadow(): void {
    if (!this.houseShadow) return;
    const b = this.building;
    const above = (b?.floors ?? []).filter((f) => f.elevation >= -0.01 && f.rooms.length);
    const off = !b || !above.length || b.settings.sun_patches === false || this.lowQuality;
    const cloud = this.weatherLayer?.cloud ?? 0;
    const north = b?.settings.north ?? 0;
    const plan = above.map((f) => `${f.elevation}:${f.height}:${JSON.stringify(f.rooms.map((r) => r.points))}`).join("|");
    const key = off ? "off" : `${this.sun?.elevation.toFixed(1)},${this.sun?.azimuth.toFixed(1)},${north},${cloud.toFixed(2)},${plan}`;
    if (key === this.shadowKey) return;
    this.shadowKey = key;
    if (off) {
      this.houseShadow.update([], 0, 0, null, 0, 0, true);
      return;
    }
    const ground = Math.min(...above.map((f) => f.elevation));
    const top = Math.max(...above.map((f) => f.elevation + f.height));
    if (this.footprint.key !== plan) this.footprint = { key: plan, rings: mergeHoles(above.flatMap((f) => f.rooms.map((r) => r.points))) };
    this.houseShadow.update(this.footprint.rings, top - ground, ground + 0.03, this.sun, north, cloud, false);
  }

  /** Where a floor stands right now (for NextFloor's layers): its height, how far it is pulled apart, whether it shows. */
  private readonly liftOf = (floorId: string | null): { y: number; dy: number; visible: boolean } => {
    if (!floorId) return { y: 0, dy: 0, visible: true };
    const fv = this.floorMap.get(floorId);
    return fv ? { y: fv.floor.elevation + fv.y, dy: fv.y, visible: fv.group.visible } : { y: 0, dy: 0, visible: false };
  };

  /** Power arcs between the devices and the sparkling solar modules (empty lists: nothing). */
  setLiveEnergy(arcs: EnergyArc[], sparks: SparkField[]): void {
    this.energyLayer.setArcs(arcs);
    this.energyLayer.setSparks(sparks);
    this.invalidate();
  }

  /** Speakers that play (rings) and the speakers that play together (threads). */
  setLiveSound(spots: SoundSpot[], groups: [PlanPoint, PlanPoint][]): void {
    this.soundLayer.set(spots, groups);
    this.invalidate();
  }

  /** How opaque the see-through walls are: 0 … 1 (0.2 is the usual faint glass). */
  setGlassWalls(alpha: number): void {
    const value = Math.min(1, Math.max(0, alpha));
    if (value === this.glassAlpha.value) return;
    this.glassAlpha.value = value;
    this.invalidate();
  }

  /** Lawn sprinklers that water now: droplets in arcs around each one. */
  setLiveWater(spots: SpraySpot[]): void {
    this.waterLayer.set(spots);
    this.invalidate();
  }

  /** TVs and monitors that play: their picture and the ambilight behind them. */
  setLiveScreens(list: LiveScreenInput[]): void {
    const out: LiveScreen[] = [];
    for (const s of list) {
      const floor = this.building?.floors.find((f) => f.id === s.floorId);
      const f = floor?.furniture.find((m) => m.id === s.furnitureId);
      const rect = f && floor ? screenRect(f, floor) : null;
      if (!f || !rect) continue;
      out.push({ ...s, x: f.x, z: f.z, rotation: f.rotation, rect });
    }
    this.screenLayer.set(out);
    this.invalidate();
  }

  /** Own photos in picture frames: the viewer finds the frame's picture part itself. */
  setPictures(list: LivePictureInput[]): void {
    const out: LivePicture[] = [];
    for (const p of list) {
      const floor = this.building?.floors.find((f) => f.id === p.floorId);
      const f = floor?.furniture.find((m) => m.id === p.furnitureId);
      const rect = f && floor ? pictureRect(f, floor) : null;
      if (!f || !rect) continue;
      out.push({ id: p.furnitureId, floorId: p.floorId, url: p.url, border: p.border, fit: p.fit, x: f.x, z: f.z, rotation: f.rotation, rect });
    }
    this.pictureLayer.set(out);
    this.invalidate();
  }

  /** Points in the plan the host floats cards over; the callback learns their screen position after every frame. */
  setLiveAnchors(points: PlanPoint[], cb: LiveAnchorCallback | null): void {
    this.liveAnchors = points;
    this.liveAnchorCb = cb;
    this.invalidate();
  }

  private placeLhAnchors(): void {
    const cb = this.liveAnchorCb;
    if (!cb || !this.liveAnchors.length) return;
    const v = new Vector3();
    this.liveAnchors.forEach((p, i) => {
      const l = this.liftOf(p.floorId);
      v.set(p.x, l.y + p.y, p.z).project(this.camera);
      const visible = l.visible && v.z < 1 && Math.abs(v.x) < 1.15 && Math.abs(v.y) < 1.15;
      cb(i, ((v.x + 1) / 2) * this.size.w, ((1 - v.y) / 2) * this.size.h, visible);
    });
  }

  /** The sky over the plot (null = no weather layer): see live-weather.ts. */
  setSky(view: SkyView | null): void {
    this.skyView = view;
    this.weatherLayer.set(view ? { ...view, low: view.low || this.lowQuality } : null);
    this.buildHouseShadow();
    for (const fv of this.floors) this.buildSun(fv);
    this.invalidate();
  }

  /** Heatmap: floor colour per room id, or null for the normal look. */
  setRoomTint(tint: Map<string, [number, number, number]> | null): void {
    const changed = !!tint !== !!this.roomTint;
    this.roomTint = tint;
    this.tintTick = true;
    this.applyHighlight();
    if (changed) {
      for (const fv of this.floors) {
        fv.glowSig = "";
        this.buildGlow(fv);
      }
    }
  }

  /** Screens of TVs and monitors that are on (by furniture id). */
  setScreens(screens: Map<string, ScreenState>): void {
    this.screens = screens;
    for (const fv of this.floors) this.buildScreens(fv);
    this.invalidate();
  }

  /** The room name, with a line of values below it when there is one. */
  private fillRoomPin(pin: HTMLElement, name: string, info: string | undefined): void {
    pin.textContent = name || "–";
    if (info) {
      const small = document.createElement("small");
      small.textContent = info;
      pin.append(small);
      pin.classList.add("nf-pin-info");
    } else pin.classList.remove("nf-pin-info");
  }

  /** Values behind the room names (the "values" heat mode); an empty map clears them. */
  setRoomInfo(info: Map<string, string>): void {
    const same = info.size === this.roomInfo.size && [...info].every(([k, v]) => this.roomInfo.get(k) === v);
    if (same) return;
    this.roomInfo = info;
    for (const fv of this.floors) for (const rp of fv.roomPins) this.fillRoomPin(rp.pin, rp.room.name, info.get(rp.room.id));
  }

  /** Text under the floor names in the house view, e.g. "5 rooms · 3 lights on · 1 open". */
  setFloorInfo(info: Map<string, string>): void {
    this.floorInfo = info;
    for (const fv of this.floors) {
      const span = fv.label.querySelector("span");
      const text = info.get(fv.floor.id) ?? this.options.floorInfo?.(fv.floor) ?? "";
      if (span && span.textContent !== text) {
        span.textContent = text;
        fv.labelSize = null;
        this.labelsDirty = true;
      }
    }
    this.invalidate();
  }

  /** Target states of doors and windows (sashes and blinds move there smoothly). */
  setOpeningStates(states: Map<string, OpeningState>): void {
    const before = this.openingTargets;
    this.openingTargets = states;
    if ([...states].some(([id, s]) => !atTarget(before.get(id) ?? CLOSED, s))) this.wake();
    this.invalidate();
  }

  /** Something happened: decorations move again (for the rest time on the tablet level). */
  wake(): void {
    this.awakeUntil = performance.now() + REST_AFTER_MS;
    this.invalidate();
  }

  /** The tablet level has seen nothing happen for a while: decorations stand still until the next touch or change. */
  private get resting(): boolean {
    return this.lowQuality && performance.now() > this.awakeUntil;
  }

  /** Which doors of the smart fridges stand open; the doors swing there over a few frames. */
  setFridgeDoors(doors: Map<string, { left: boolean; right: boolean }>): void {
    for (const [id, d] of doors) {
      const st = this.fridges.get(id) ?? { l: d.left ? 1 : 0, r: d.right ? 1 : 0, tl: 0, tr: 0 };
      st.tl = d.left ? 1 : 0;
      st.tr = d.right ? 1 : 0;
      this.fridges.set(id, st);
    }
    for (const id of [...this.fridges.keys()]) if (!doors.has(id)) this.fridges.delete(id);
    this.invalidate();
  }

  /** How far the moving parts of pack items should be out (0 … 1, by furniture id); they travel there over a few seconds. */
  setCovers(reach: Map<string, number>): void {
    let changed = false;
    for (const [id, t] of reach) {
      const st = this.covers.get(id);
      if (!st) {
        // a cover seen for the first time starts where it is, without travelling there
        this.covers.set(id, { k: t, t });
        changed = true;
      } else if (st.t !== t) {
        st.t = t;
        changed = true;
      }
    }
    for (const id of [...this.covers.keys()]) if (!reach.has(id)) this.covers.delete(id);
    if (changed) {
      for (const fv of this.floors) this.buildFridges(fv);
      this.wake();
    }
  }

  private stepCovers(dt: number): boolean {
    // a slow, even travel like a motor: the whole way in about four seconds
    const step = Math.min(1, dt / 4000);
    let moving = false;
    for (const st of this.covers.values()) {
      if (st.k === st.t) continue;
      const d = st.t - st.k;
      st.k = Math.abs(d) <= step ? st.t : st.k + Math.sign(d) * step;
      moving = true;
    }
    if (moving) for (const fv of this.floors) this.buildFridges(fv);
    return moving;
  }

  private stepFridges(dt: number): boolean {
    const k = stepShare(dt);
    const touched = new Set<string>();
    for (const [id, st] of this.fridges) {
      for (const [cur, to] of [["l", "tl"], ["r", "tr"]] as const) {
        const d = st[to] - st[cur];
        if (Math.abs(d) < 0.004) {
          if (d !== 0) {
            st[cur] = st[to];
            touched.add(id);
          }
          continue;
        }
        st[cur] += d * k;
        touched.add(id);
      }
    }
    if (!touched.size) return false;
    for (const fv of this.floors) if (fv.floor.furniture.some((f) => touched.has(f.id))) this.buildFridges(fv);
    return true;
  }

  private buildFridges(fv: FloorView): void {
    const buf = new GeoBuffer();
    for (const f of fv.floor.furniture) {
      const item = packItem(f.type);
      if (item && hasMovingParts(item)) {
        pushPackMoving(buf, item, f, mountBase(fv.floor, f), this.covers.get(f.id)?.k ?? coverReach(item, null));
        continue;
      }
      if (f.type !== "fridge_smart") continue;
      const st = this.fridges.get(f.id);
      pushFridgeDoors(buf, f, mountBase(fv.floor, f), st?.l ?? 0, st?.r ?? 0);
    }
    fv.fridgeMesh.geometry.dispose();
    fv.fridgeMesh.geometry = buf.geometry();
    fv.fridgeMesh.visible = buf.count > 0;
  }

  resetView(): void {
    this.fit(700);
  }

  /** The camera the house view opens with (null: fitted from the front left). */
  setStartView(view: StartView | null): void {
    this.startView = view;
  }

  /**
   * The camera as it stands: angles, distance and the point it looks at – with a floor opened, that
   * point's height counts from the floor (it opens there however the floors are stacked).
   */
  currentView(): StartView {
    const v = this.controls.view;
    const base = this.floorBase(this.floorId);
    return { theta: v.theta, phi: v.phi, radius: v.radius, target: { x: v.target.x, y: v.target.y - base, z: v.target.z } };
  }

  /** Height of a floor as it is shown now (0 for the house view). */
  private floorBase(floorId: string | null): number {
    const fv = floorId === null ? undefined : this.floorMap.get(floorId);
    return fv ? fv.floor.elevation + fv.ty : 0;
  }

  dispose(): void {
    this.disposed = true;
    cancelAnimationFrame(this.frame);
    clearTimeout(this.effectTimer);
    clearTimeout(this.robotTimer);
    clearTimeout(this.orbitTimer);
    clearTimeout(this.weatherTimer);
    this.weatherLayer.dispose();
    this.houseShadow?.dispose();
    this.mapLayer.dispose();
    this.energyLayer.dispose();
    this.soundLayer.dispose();
    this.waterLayer.dispose();
    this.screenLayer.dispose();
    this.pictureLayer.dispose();
    this.airflowLayer.dispose();
    this.wifiLayer.dispose();
    this.timeline.dispose();
    this.resizeObserver.disconnect();
    this.intersection?.disconnect();
    document.removeEventListener("visibilitychange", this.onVisibility);
    this.host?.removeEventListener("pointerdown", this.onTouch);
    this.host?.removeEventListener("click", this.onPick);
    clearTimeout(this.petTimer);
    this.controls.dispose();
    this.clear();
    this.building = null;
    this.buildRoofMesh();
    this.ground.geometry.dispose();
    (this.ground.material as Material).dispose();
    this.patternTexture.dispose();
    this.blindTexture.dispose();
    this.groundTexture?.dispose();
    this.haloTexture.dispose();
    for (const r of this.robots.values()) r.led.dispose();
    this.robots.clear();
    this.robotGeo?.dispose();
    this.robotLedGeo?.dispose();
    this.robotMat?.dispose();
    this.mowerMat?.dispose();
    this.meshLight?.dispose();
    this.renderer.dispose();
    // frees the GPU context now instead of when the garbage collector gets to it
    this.renderer.forceContextLoss();
    this.renderer.domElement.remove();
    this.labels.remove();
  }

  /** Gewerke ein-/ausblenden. */
  private applyLayers(st: LayerState): void {
    this.setNamed("heating-plates", st.heating);
    setHeatingMode(st.heatingMode);
    setRoomTemp(LayerController.roomTemperature());
    refreshHeatingColours();
    this.setNamed("live-water", st.plumbing);
    this.wifiLayer.setVisible(st.wifi);
    this.airflowLayer.setEnabled(st.airflow);
    this.energyLayer.setVisible(st.electrical);
    this.invalidate();
  }

  /** Klick auf eine Ankerkugel oeffnet das Geraete-Popup. */
  private readonly onPick = (e: MouseEvent): void => {
    const rect = this.host.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    // Anker sind im Modell nur ~9 cm gross: Treffer in Bildschirmkoordinaten suchen,
    // das ist robuster als ein Strahl auf eine so kleine Kugel.
    let best: { id: string; d: number } | null = null;
    const v = new Vector3();
    for (const marker of this.wifiLayer.markers) {
      v.copy(marker.position).project(this.camera);
      if (v.z > 1) continue;
      const sx = ((v.x + 1) / 2) * rect.width;
      const sy = ((1 - v.y) / 2) * rect.height;
      const d = Math.hypot(sx - px, sy - py);
      if (d < 26 && (!best || d < best.d)) best = { id: marker.name.replace(/^wifi:/, ""), d };
    }
    if (!best) { this.popup.hide(); return; }
    void this.popup.show(best.id, DevicePopup.token());
  };

  /** Zeitschieber: 0 = live, negativ = Historie, positiv = Prognose. */
  private async seek(offsetH: number): Promise<void> {
    const snap = await this.timeController.setOffset(offsetH);
    this.timeline.report(snap);
  }

  /** Aktueller Zeitsnapshot (leer im Live-Modus). */
  get snapshot(): Snapshot | null { return this.timeSnapshot; }

  /** Snapshot an die Layer geben (Heatmap nutzt die Raumtemperatur, wenn vorhanden). */
  private applySnapshot(snap: Snapshot): void {
    this.timeSnapshot = snap;
    this.host.dataset.timeSnapshot = JSON.stringify({ mode: snap.mode, ts: snap.ts, n: Object.keys(snap.values).length, note: snap.note ?? "" });
    const t = snap.values["forecast.raumtemperatur"];
    if (typeof t === "number") { setRoomTemp(t); refreshHeatingColours(); }
  }

  /** Sichtbarkeit aller Objekte mit diesem Namen. */
  private setNamed(name: string, on: boolean): void {
    this.scene.traverse((o: any) => { if (o.name === name) o.visible = on; });
  }

  /** Schalterleiste in der linken oberen Ecke des Hosts. */
  private buildLayerBar(): void {
    const bar = document.createElement("div");
    bar.className = "nf-layers";
    bar.style.cssText = [
      "position:absolute", "left:10px", "top:110px", "display:flex",
      "flex-direction:column", "align-items:flex-start", "gap:6px",
      "z-index:5", "font:12px/1.2 system-ui,sans-serif",
    ].join(";");
    for (const l of LAYER_LABELS) {
      const b = document.createElement("button");
      b.type = "button";
      b.dataset.layer = l.key;
      b.textContent = `${l.icon} ${l.label}`;
      const paint = () => {
        const on = this.layerController.current[l.key];
        b.style.cssText = [
          "padding:4px 8px", "border-radius:6px", "cursor:pointer",
          "border:1px solid rgba(255,255,255,.25)",
          `background:${on ? "rgba(0,200,255,.28)" : "rgba(0,0,0,.35)"}`,
          `color:${on ? "#eaffff" : "#bbb"}`,
        ].join(";");
      };
      paint();
      b.addEventListener("click", () => { this.layerController.toggle(l.key); paint(); });
      bar.appendChild(b);
    }
    const mode = document.createElement("button");
    mode.type = "button";
    mode.dataset.layer = "heatingMode";
    const paintMode = () => {
      const m = this.layerController.current.heatingMode;
      const label = HEATING_MODES.find((x) => x.key === m)?.label ?? "FBH";
      mode.textContent = `♨  Farbskala: ${label}`;
      mode.style.cssText = [
        "padding:3px 8px", "margin-left:16px", "border-radius:6px", "cursor:pointer",
        "border:1px dashed rgba(255,255,255,.3)", "background:rgba(0,0,0,.3)", "color:#cfd8dc",
      ].join(";");
    };
    paintMode();
    mode.addEventListener("click", () => {
      const next = this.layerController.current.heatingMode === "fbh_mix" ? "knx_room_temp" : "fbh_mix";
      this.layerController.setHeatingMode(next);
      paintMode();
    });
    bar.appendChild(mode);
    this.host.appendChild(bar);
  }

  invalidate(): void {
    if (this.frame || this.disposed || document.hidden || !this.onScreen) return;
    this.frame = requestAnimationFrame((t) => this.render(t));
  }

  // ------------------------------------------------------------------ internals

  private makeRenderer(quality: Quality): WebGLRenderer {
    const low = quality === "low" || (quality === "auto" && isLowEnd());
    this.lowQuality = low;
    // (the weather layer does not exist yet while the first renderer is made)
    if (this.weatherLayer && this.skyView) this.weatherLayer.set({ ...this.skyView, low: this.skyView.low || low });
    if (this.weatherLayer) this.buildHouseShadow();
    this.highQuality = quality === "high";
    const renderer = new WebGLRenderer({ antialias: !low, alpha: true, powerPreference: low ? "low-power" : "default" });
    const ratio = Math.min(window.devicePixelRatio || 1, low ? 1 : quality === "high" ? 2.5 : 2);
    renderer.setPixelRatio(ratio);
    this.governor = quality === "auto" && !low ? new QualityGovernor(ratio, Math.min(1, ratio)) : null;
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.domElement.className = "nf-canvas";
    this.host.prepend(renderer.domElement);
    return renderer;
  }

  private makeControls(): OrbitControls {
    return new OrbitControls(this.renderer.domElement, this.camera, {
      change: () => this.wake(),
      tap: (x, y) => this.onTap(x, y),
      hold: (x, y) => this.onHold(x, y),
      swipeStart: (x, y, dx, dy) => this.swipeStart(x, y, dx, dy),
      swipeMove: (dy) => this.swipe && this.options.onDeviceSwipe?.(this.swipe.entity, "move", dy, this.swipe.x, this.swipe.y),
      swipeEnd: () => {
        if (this.swipe) this.options.onDeviceSwipe?.(this.swipe.entity, "end", 0, this.swipe.x, this.swipe.y);
        this.swipe = null;
      },
      grab: (x, y) => this.grabFurniture(x, y),
      drag: (x, y) => this.dragFurniture(x, y),
      drop: () => this.dropFurniture(),
      doubleTap: (x, y) => {
        const hit = this.floorId && this.options.onRoomDoubleTap ? this.pick(x, y) : null;
        if (hit && !("entity" in hit) && hit.roomId) this.options.onRoomDoubleTap!(hit.floorId, hit.roomId);
        else this.options.onBack?.();
      },
    });
  }

  private readonly onTouch = () => this.wake();

  private readonly onVisibility = () => {
    if (document.hidden) {
      clearTimeout(this.effectTimer);
      this.effectTimer = undefined;
    }
    if (!document.hidden) this.invalidate();
  };

  /** One shared timer, independent of the number of animated lamps. */
  private scheduleEffects(): void {
    if (!this.hasVisibleEffects(document.hidden) || this.resting) {
      clearTimeout(this.effectTimer);
      this.effectTimer = undefined;
      return;
    }
    if (this.effectTimer !== undefined) return;
    const ms = this.lowQuality ? 2 * EFFECT_MS : EFFECT_MS;
    this.effectTimer = setTimeout(() => {
      this.effectTimer = undefined;
      if (!this.hasVisibleEffects(document.hidden)) return;
      this.effectTime = performance.now() / 1000;
      this.effectTick = true;
      for (const fv of this.floors) {
        if (fv.o < 0.02 || !this.effectFloors.has(fv.floor.id)) continue;
        this.buildLamps(fv);
        this.buildGlow(fv);
      }
      this.invalidate();
    }, ms);
  }

  private hasVisibleEffects(hidden: boolean): boolean {
    return !hidden && !this.disposed && this.onScreen && this.floors.some((fv) => fv.o >= 0.02 && this.effectFloors.has(fv.floor.id));
  }

  private resize(): void {
    const w = this.host.clientWidth || 1;
    const h = this.host.clientHeight || 1;
    this.size = { w, h };
    this.labelsDirty = true;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.invalidate();
  }

  private clear(): void {
    // robots share one geometry: keep them out of the floor groups while those are disposed
    for (const r of this.robots.values()) r.group.removeFromParent();
    // owned models are shared: only their own materials go
    for (const m of this.meshes) {
      m.group.removeFromParent();
      disposeMeshInstance(m.group);
    }
    this.meshes = [];
    for (const fv of this.floors) {
      fv.group.traverse((o) => {
        const g = (o as Mesh).geometry as BufferGeometry | undefined;
        g?.dispose();
      });
      for (const m of Object.values(fv.materials)) m.dispose();
      this.root.remove(fv.group);
    }
    this.floors = [];
    this.floorMap = new Map();
    // device pins survive a rebuild; only floor and room labels are recreated
    for (const el of [...this.labels.children]) if (!(el as HTMLElement).dataset.entity) el.remove();
  }

  /** Light cones of the lights that are on, merged into one mesh per floor. */
  /** Light surface of a floor (rebuilt with the floor plan and when the detail level changes). */
  private buildLightSurface(fv: FloorView): void {
    const cell = this.lowQuality ? 0.5 : 0.25;
    const surface = buildLightSurface(fv.floor, fv.geo.walls2d, fv.geo.wallBuckets, fv.geo.openings, cell, fv.geo.holes, fv.geo.roofUnder);
    // rooms joined by "no wall" form one zone: a lamp lights the open neighbour as if it stood in the same room
    const zones = lightZonesOf(fv.floor, fv.geo.openRooms);
    fv.lightZones = zones.some((z, i) => z !== i) ? zones : null;
    if (fv.lightZones) {
      for (let i = 0; i < surface.room.length; i++) {
        const r = surface.room[i];
        if (r >= 0 && r < zones.length) surface.room[i] = zones[r];
      }
      for (const door of surface.doors) {
        if (door.a >= 0 && door.a < zones.length) door.a = zones[door.a];
        if (door.b >= 0 && door.b < zones.length) door.b = zones[door.b];
      }
    }
    fv.lightSurface = surface;
    const g = new Geometry();
    g.setAttribute("position", new Float32BufferAttribute(surface.pos, 3));
    g.setAttribute("color", new Float32BufferAttribute(new Float32Array(surface.pos.length), 3));
    g.setAttribute("fold", new Float32BufferAttribute(surface.fold, 1));
    // the index lists the lit quads; it is filled in place (a new index every change would leak)
    const index = new Uint32BufferAttribute(new Uint32Array(surface.pos.length / 3), 1);
    index.setUsage(DynamicDrawUsage);
    g.setIndex(index);
    g.setDrawRange(0, 0);
    g.computeBoundingSphere();
    fv.glowMesh.geometry.dispose();
    fv.glowMesh.geometry = g;
    fv.glowSig = "";
    this.buildGlow(fv);
  }

  /** Colours of the light surface for the current lights and doors. */
  private buildGlow(fv: FloorView): void {
    const surface = fv.lightSurface;
    if (!surface) return;
    const sources = lightSourcesOf(fv.floor, fv.lightZones, this.devices, (d) => this.glowOf(d));
    const doorOpen = surface.doors.map((d) => {
      const info = fv.geo.openings.find((i) => i.opening.id === d.id);
      if (info && openingStyle(info.opening, info.exterior) === "passage") return 1;
      const o = fv.openings.get(d.id);
      return o ? Math.max(o.open, o.open2 ?? 0) : 0.5;
    });
    const sig =
      sources.map((l) => `${l.x.toFixed(2)},${l.y.toFixed(2)},${l.z.toFixed(2)},${l.kind},${l.level.toFixed(3)},${l.color.map((c) => c.toFixed(3)).join("/")}`).join(";") +
      "|" +
      doorOpen.map((o) => o.toFixed(1)).join(",");
    if (sig === fv.glowSig) return;
    fv.glowSig = sig;
    const g = fv.glowMesh.geometry;
    const attr = g.getAttribute("color") as Float32BufferAttribute;
    if (!sources.length) {
      fv.glowMesh.visible = false;
      g.setDrawRange(0, 0);
      return;
    }
    const colors = lightColors(surface, sources, 0.42, doorOpen);
    if (this.roomTint) {
      // the heatmap is an analysis view: inside the rooms the light is only a hint, so their colours read;
      // outside (garden, outer walls) it stays as it is (D205)
      const outside = fv.floor.rooms.length;
      for (let v = 0; v < surface.room.length; v++) {
        if (surface.room[v] === outside) continue;
        for (let k = 0; k < 3; k++) colors[v * 3 + k] *= 0.12;
      }
    }
    (attr.array as Float32Array).set(colors);
    attr.needsUpdate = true;
    // only quads that receive light are drawn (dark ones would cost fill rate for nothing)
    const index = g.index!.array as Uint32Array;
    let n = 0;
    for (let q = 0; q < colors.length / 18; q++) {
      let lit = false;
      for (let k = q * 18; k < q * 18 + 18 && !lit; k++) lit = colors[k] > 0.004;
      if (lit) for (let v = 0; v < 6; v++) index[n++] = q * 6 + v;
    }
    g.index!.needsUpdate = true;
    g.setDrawRange(0, n);
    fv.glowMesh.visible = n > 0;
  }

  private rebuild(): void {
    const previous = new Map(this.floors.map((f) => [f.floor.id, { y: f.y, o: f.o }]));
    const previousOpenings = new Map(this.floors.map((f) => [f.floor.id, f.openings]));
    this.clear();
    const b = this.building;
    if (!b) return;
    const ordered = [...b.floors].sort((p, q) => p.elevation - q.elevation);
    for (const floor of b.floors) {
      // solar fields in the garden stand on the ground floor, wall fields hang on their floor's walls
      const fields = b.settings.roof?.solar ?? [];
      const garden = groundFloor(b)?.id === floor.id ? fields.filter((f) => f.face === GROUND).map((field) => ({ field, face: groundFace(b, field) })) : [];
      const onWalls = fields.filter((f) => f.face.startsWith(`wall:${floor.id}:`));
      if (onWalls.length) {
        const walls = new Map(wallFaces(b, floor.id).map((w) => [w.key, w]));
        for (const field of onWalls) {
          const face = walls.get(field.face);
          if (face) garden.push({ field, face });
        }
      }
      // an attic floor: its walls end under the roof sections above it
      // every floor whose ceiling lies above a section's base is cut by the slopes – the attic, and the
      // floor below it when the slope already starts there (a roof that reaches down past the ceiling)
      const sloped = (b.settings.roof.sections ?? []).some((s) => sectionCutsBelow(s, floor.elevation + floor.height));
      const roofUnder = sloped
        ? (x: number, z: number) => {
            const y = roofUnderAt(b, x, z);
            return y === null ? null : y - floor.elevation;
          }
        : undefined;
      const geo = buildFloorGeometry(withVehicles(floor, this.parked), b.settings.wall_exterior, b.settings.wall_interior, stairHoles(b.floors, floor), garden, roofUnder, this.wallPaint());
      const mask: FoldMasks = { standing: { value: 0xffff }, glass: { value: 0 }, slope: { value: new Vector4() }, slopeY: { value: new Vector2() }, glassAlpha: this.glassAlpha };
      const materials = makeFloorMaterials({ mask, look: this.themeUniform, theme: this.theme, textures: { pattern: this.patternTexture, blinds: this.blindTexture, halo: this.haloTexture } });
      const group = new Group();
      // the timber frame of this floor: thousands of beams as one instanced mesh
      const frameMesh = timberMesh(floor);
      if (frameMesh) group.add(frameMesh);
      const floorMesh = new Mesh(geo.floor, materials.floor);
      const shadowMesh = new Mesh(geo.shadow, materials.shadow);
      shadowMesh.renderOrder = 1;
      const pattern = new Mesh(geo.floor, materials.pattern);
      pattern.renderOrder = 2;
      const glowMesh = new Mesh(new Geometry(), materials.glow);
      glowMesh.renderOrder = 3;
      glowMesh.visible = false;
      const framesMesh = new Mesh(new Geometry(), materials.frames);
      const blindsMesh = new Mesh(new Geometry(), materials.blinds);
      const glassMesh = new Mesh(new Geometry(), materials.glass);
      glassMesh.renderOrder = 4;
      const lampMesh = new Mesh(new Geometry(), materials.lamps);
      lampMesh.visible = false;
      const sunMesh = new Mesh(new Geometry(), materials.cones);
      sunMesh.visible = false;
      sunMesh.renderOrder = 3;
      const haloMesh = new Points(new Geometry(), materials.halos);
      haloMesh.visible = false;
      haloMesh.renderOrder = 7;
      const coneMesh = new Mesh(new Geometry(), materials.cones);
      coneMesh.visible = false;
      coneMesh.renderOrder = 7;
      const fridgeMesh = new Mesh(new Geometry(), materials.lamps);
      fridgeMesh.visible = false;
      const screenMesh = new Mesh(new Geometry(), materials.screens);
      screenMesh.visible = false;
      screenMesh.renderOrder = 5;
      // the fold shader moves hidden parts, so the bounding spheres must not cull them early
      for (const m of [framesMesh, blindsMesh, glassMesh]) m.frustumCulled = false;
      // glass walls are drawn after everything opaque in the room, so doors and furniture show through
      const glassWalls = new Mesh(geo.walls, materials.glassWall);
      const wallMesh = new Mesh(geo.walls, materials.wall);
      glassWalls.renderOrder = 6;
      group.add(
        floorMesh,
        shadowMesh,
        pattern,
        glowMesh,
        wallMesh,
        new LineSegments(geo.lines, materials.lines),
        framesMesh,
        blindsMesh,
        glassMesh,
        lampMesh,
        sunMesh,
        haloMesh,
        coneMesh,
        fridgeMesh,
        screenMesh,
        glassWalls,
      );
      this.root.add(group);

      const label = document.createElement("button");
      label.className = "nf-pin nf-pin-floor";
      label.dataset.floor = floor.id;
      const name = document.createElement("b");
      name.textContent = floor.name || "–";
      const info = document.createElement("span");
      info.textContent = this.floorInfo.get(floor.id) ?? this.options.floorInfo?.(floor) ?? "";
      label.append(name, info);
      label.addEventListener("click", () => this.options.onFloorTap?.(floor.id));
      this.labels.append(label);

      const prev = previous.get(floor.id);
      const roomPins: FloorView["roomPins"] = [];
      let bbox: FloorView["bbox"] = null;
      for (const room of floor.rooms) {
        const pin = document.createElement("button");
        pin.className = "nf-pin";
        pin.dataset.room = room.id;
        pin.dataset.floor = floor.id;
        this.fillRoomPin(pin, room.name, this.roomInfo.get(room.id));
        pin.addEventListener("click", () => this.options.onRoomTap?.(floor.id, room.id));
        this.labels.append(pin);
        const [cx, cz] = centroid(room.points);
        roomPins.push({ pin, room, cx, cz });
        for (const [x, z] of room.points) {
          bbox ??= { x0: x, x1: x, z0: z, z1: z };
          bbox.x0 = Math.min(bbox.x0, x);
          bbox.x1 = Math.max(bbox.x1, x);
          bbox.z0 = Math.min(bbox.z0, z);
          bbox.z1 = Math.max(bbox.z1, z);
        }
      }
      const notePins: FloorView["notePins"] = [];
      for (const note of floor.notes ?? []) {
        if (!note.text) continue;
        const pin = document.createElement("button");
        pin.className = `nf-pin nf-note-pin${noteDue(note) ? " nf-note-due" : ""}`;
        pin.title = note.text;
        const short = note.text.length > 28 ? `${note.text.slice(0, 27)}…` : note.text;
        pin.textContent = `✎ ${short}`;
        pin.addEventListener("click", () => {
          const open = pin.classList.toggle("nf-note-open");
          pin.textContent = `✎ ${open ? note.text : short}`;
          this.labelsDirty = true;
          this.invalidate();
        });
        this.labels.append(pin);
        notePins.push({ pin, note });
      }
      this.floors.push({
        floor,
        rank: ordered.indexOf(floor),
        group,
        geo,
        floorMesh,
        shadowMesh,
        patternMesh: pattern,
        glowMesh,
        lightSurface: null,
        lightZones: null,
        framesMesh,
        glassMesh,
        blindsMesh,
        lampMesh,
        sunMesh,
        sunSig: "",
        haloMesh,
        coneMesh,
        wedgeTris: [],
        fridgeMesh,
        lampTris: [],
        lampFurnTris: [],
        frameTris: [],
        glassTris: [],
        blindTris: [],
        wallMesh,
        screenMesh,
        screenSig: "",
        flowLayout: "",
        glowSig: "",
        lampShapeSig: "",
        lampColorSig: "",
        lampShade: new Float32Array(0),
        lampRanges: new Map(),
        bbox,
        roomPins,
        notePins,
        labelSize: null,
        materials,
        mask,
        openings: new Map(),
        y: prev?.y ?? 0,
        o: prev?.o ?? 1,
        ty: 0,
        to: 1,
        appliedO: -1,
        label,
      });
    }
    this.floorMap = new Map(this.floors.map((f) => [f.floor.id, f]));
    this.buildPets();
    for (const fv of this.floors) this.buildFridges(fv);
    this.labelsDirty = true;
    if (this.floorId && !b.floors.some((f) => f.id === this.floorId)) this.floorId = null;
    for (const fv of this.floors) {
      this.buildLamps(fv);
      this.buildScreens(fv);
      const prev = previousOpenings.get(fv.floor.id);
      for (const info of fv.geo.openings) fv.openings.set(info.opening.id, prev?.get(info.opening.id) ?? this.openingTargets.get(info.opening.id) ?? CLOSED);
      this.buildOpenings(fv);
      this.buildLightSurface(fv);
      this.buildSun(fv);
    }
    this.applyTargets(previous.size === 0);
    this.applyHighlight();
    this.applyTierFlags();
    this.buildRoofMesh();
    this.updateGhost();
    this.placeMeshes();
  }

  /** Put the owned 3D models of the furniture in place; models not loaded yet are fetched, and the floors rebuilt when they arrive. */
  private placeMeshes(): void {
    for (const m of this.meshes) {
      m.group.removeFromParent();
      disposeMeshInstance(m.group);
    }
    this.meshes = [];
    for (const fv of this.floors) {
      for (const f of withVehicles(fv.floor, this.parked).furniture) {
        const item = packItem(f.type);
        if (!item?.mesh) continue;
        const id = item.mesh;
        if (!hasMesh(f.type)) {
          if (!this.meshAsked.has(id)) {
            this.meshAsked.add(id);
            void loadMesh(id).then((ok) => {
              if (ok && !this.disposed) this.rebuild();
            });
          }
          continue;
        }
        const colour = item.colors?.length ? (item.colors.find((c) => c.id === f.variant) ?? item.colors[0]).hex : null;
        const group = instantiateMesh(id, { x: f.x, z: f.z, y: mountBase(fv.floor, f), rotation: f.rotation, mirror: f.mirror, w: f.w, d: f.d, h: f.h, paint: colour });
        if (!group) continue;
        if (!this.meshLight) this.meshLight = addMeshLighting(this.root, this.renderer);
        applyEnvironment(group, this.meshLight.env);
        fv.group.add(group);
        this.meshes.push({ group, furnitureId: f.id });
      }
    }
    this.invalidate();
  }

  private buildRoofMesh(): void {
    if (this.roof) {
      this.roof.group.traverse((o) => ((o as Mesh).geometry as BufferGeometry | undefined)?.dispose());
      this.roof.solid.dispose();
      this.roof.lines.dispose();
      this.roof.glass.dispose();
      this.scene.remove(this.roof.group);
      this.roof = null;
    }
    const geos = this.building ? buildRoof(this.building, this.roofWindows) : [];
    if (!geos.length) return;
    const group = new Group();
    const solid = themed(new MeshBasicMaterial({ vertexColors: true, transparent: true, side: DoubleSide }), this.themeUniform);
    const lines = themed(new LineBasicMaterial({ vertexColors: true, transparent: true, blending: lineBlending(this.theme), depthWrite: false }), this.themeUniform, true);
    // canopies: faint see-through panels that do not hide what is below
    const glass = themed(new MeshBasicMaterial({ vertexColors: true, transparent: true, side: DoubleSide, depthWrite: false }), this.themeUniform);
    const parts = geos.map((geo) => {
      const part = new Group();
      part.add(new Mesh(geo.solid.geometry(), solid), new LineSegments(geo.lines.geometry(), lines));
      if (geo.glass.count) part.add(new Mesh(geo.glass.geometry(), glass));
      part.renderOrder = 8;
      group.add(part);
      return { group: part, floorId: geo.floor.id, rideId: roofRider(this.building!, geo.floor, geo.sections ?? []), base: geo.base, lift: geo.lift !== false };
    });
    group.renderOrder = 8;
    this.scene.add(group);
    this.roof = { group, parts, solid, lines, glass };
    this.placeRoof();
  }

  /**
   * The roof shows in the house view and sits on its floor; zooming in lifts and fades it, so the top
   * floor opens up. Returns true while it still moves.
   */
  private placeRoof(dt = 1000): boolean {
    const roof = this.roof;
    if (!roof) return false;
    const zoom = this.keepRoof ? 1 : Math.min(1, Math.max(0, (this.controls.view.radius / this.houseRadius - 0.62) / 0.3));
    // a house with a single floor shows that floor as its house view, roof included (D208)
    const house = this.floorId === null || this.floors.length === 1;
    const target = house && !this.lowered ? ROOF_REST * zoom : 0;
    const k = floorShare(dt);
    const before = this.roofO;
    this.roofO += (target - this.roofO) * k;
    if (Math.abs(target - this.roofO) < 0.004) this.roofO = target;
    roof.group.visible = this.roofO > 0.02;
    // each part rides on its floor (pulled apart or stacked), lifted while it fades in or out
    for (const part of roof.parts) {
      const fv = this.floorMap.get(part.floorId);
      if (!fv) continue;
      // floors pulled apart: the roof rides with the highest floor beneath it (an attic or a loft under
      // the same slopes, #202) and lifts off it the same way (it follows that floor's own glide)
      const ride = this.floorMap.get(part.rideId) ?? fv;
      const apart = ride.ty > 0 ? Math.min(1, ride.y / ride.ty) : this.explode && this.floorId === null ? 1 : 0;
      // at rest (fully shown) it sits exactly on its walls: the lift counts from the resting opacity, not from 1 (#41)
      const fade = Math.max(0, 1 - this.roofO / ROOF_REST);
      part.group.position.y = fv.floor.elevation + ride.y + part.base + fade * 2.2 + (part.lift ? apart * ROOF_GAP : 0);
    }
    roof.solid.opacity = this.roofO;
    // the roof keeps hiding the walls under it until it is mostly faded, so they do not show through it while zooming in (#41)
    roof.solid.depthWrite = this.roofO > 0.5;
    roof.lines.opacity = this.roofO;
    roof.glass.opacity = this.roofO * 0.28;
    return this.roofO !== before && this.roofO !== target;
  }

  /**
   * Tablet level: leave out the passes that cover the whole picture but add little (floor patterns,
   * baked floor shadows, the ground grid, the wide glow around cables).
   */
  private applyTierFlags(): void {
    const low = this.lowQuality;
    this.ground.visible = !low && this.theme !== "day" && this.floors.some((f) => f.floor.rooms.length > 0);
    for (const fv of this.floors) {
      fv.patternMesh.visible = !low;
      fv.shadowMesh.visible = !low && fv.o > 0.98;
    }
    this.invalidate();
  }

  /** The meshes that depend on the level (cable glow, light surface cell, lamp halos). */
  private rebuildTier(): void {
    for (const fv of this.floors) {
      fv.flowLayout = "";
      this.buildLightSurface(fv);
      fv.lampShapeSig = "";
      this.buildLamps(fv);
    }
  }

  /** True when the house view shows several floors (floor labels instead of room labels). */
  private get houseView(): boolean {
    return this.floorId === null && this.floors.length > 1;
  }

  /** Where every floor belongs in the current view. */
  private applyTargets(immediate: boolean): void {
    const chosen = this.floorId ? this.floorMap.get(this.floorId) : undefined;
    for (const fv of this.floors) {
      const target = floorTarget(fv.rank, chosen?.rank, this.explode, this.floorStack);
      [fv.ty, fv.to] = [target.y, target.opacity];
      if (immediate) [fv.y, fv.o] = [target.y, target.opacity];
      this.applyFloor(fv);
    }
    this.invalidate();
  }

  /** Moves a floor group to its current offset and fades its materials. */
  private applyFloor(fv: FloorView): void {
    fv.group.position.y = fv.floor.elevation + fv.y;
    fv.group.visible = fv.o > 0.02;
    // a multiply layer cannot fade, so it goes with the first step; the tablet level leaves it out
    fv.shadowMesh.visible = fv.o > 0.98 && !this.lowQuality;
    if (Math.abs(fv.appliedO - fv.o) < 1e-3) return;
    fv.appliedO = fv.o;
    fadeMaterials(fv.materials, fv.o);
  }

  /** One frame of the floor animation; true while something still moves. */
  private stepFloors(dt: number): boolean {
    let moving = false;
    const share = floorShare(dt);
    for (const fv of this.floors) {
      const step = easeFloor(fv, share);
      if (step.settled) this.labelsDirty = true;
      if (step.moving || step.settled) this.applyFloor(fv);
      moving ||= step.moving;
    }
    return moving;
  }

  /** Move sashes and blinds towards their targets; returns true while something still moves. */
  private stepOpenings(dt: number): boolean {
    let moving = false;
    const share = stepShare(dt);
    for (const fv of this.floors) {
      let changed = false;
      for (const [id, now] of fv.openings) {
        const target = this.openingTargets.get(id) ?? CLOSED;
        if (atTarget(now, target)) continue;
        const step = stepOpening(now, target, share);
        fv.openings.set(id, step.state);
        changed = true;
        moving ||= step.moving;
      }
      if (changed) {
        this.buildOpenings(fv);
        this.buildGlow(fv);
        this.buildSun(fv);
      }
    }
    return moving;
  }

  /** The turn of a fan's blades now (degrees, one blade spacing at most): turning fans move on with the effect timer. */
  private fanPhase(d: DeviceMarker): number {
    if (d.lamp !== "fan" || !d.spin) return 0;
    return Math.round(((this.effectTime * d.spin * 360) % FAN_SPACING) * 10) / 10;
  }

  /** One sampler for lamp shades, halos, cones and room light surfaces. */
  private glowOf(d: DeviceMarker): DeviceMarker["glow"] {
    return animateGlow(d.glow, d.effect, this.effectTime);
  }

  /**
   * Lamp models of the lights on a floor, merged into one mesh. The shapes are rebuilt only when a
   * lamp moves or changes; the shade colours (light colour, brightness, tap flash) are written into
   * the mesh in place, so colour effects cost no geometry.
   */
  private buildLamps(fv: FloorView): void {
    const now = performance.now();
    const flash = (id: string) => {
      const until = this.flashes.get(id);
      if (!until || until <= now) return 0;
      // a tap flashes once; a found device (search) pulses until the time is up
      const left = until - now;
      const k = left > FLASH_MS ? 0.5 + 0.5 * Math.sin(left / 140) : left / FLASH_MS;
      return Math.round(k * 10) / 10;
    };
    const lamps = this.devices.filter((d) => d.floorId === fv.floor.id && d.lamp);
    const shapeSig =
      this.wallMode +
      (this.lowQuality ? "L" : this.highQuality ? "H" : "M") +
      lamps.map((d) => `${d.id},${d.lamp},${d.variant},${d.x},${d.z},${d.y},${d.rotation ?? 0},${d.roll ?? 0},${d.upright ? 1 : 0},${d.rise ?? 0},${d.size?.join("/")},${d.base ?? 0},${d.pack ?? ""},${d.mirror ? 1 : 0},${d.ceiling ?? ""},${this.fanPhase(d)}`).join(";");
    const glows = lamps.map((d) => this.glowOf(d));
    const wedges = this.devices.filter((d) => d.floorId === fv.floor.id && d.wedge);
    const colorSig =
      lamps.map((d, i) => `${flash(d.id)},${glows[i] ? `${glows[i]!.level.toFixed(3)},${glows[i]!.color.map((c) => c.toFixed(3)).join("/")}` : "off"}`).join(";") +
      "|" +
      wedges.map((d) => `${d.id},${d.x},${d.z},${d.rotation ?? 0},${JSON.stringify(d.wedge)}`).join(";");
    if (shapeSig !== fv.lampShapeSig || !fv.lampMesh.geometry.getAttribute("position")) {
      fv.lampShapeSig = shapeSig;
      fv.lampColorSig = "";
      const buf = new GeoBuffer();
      const tris: FloorView["lampTris"] = [];
      const furnTris: FloorView["lampFurnTris"] = [];
      const ranges = new Map<string, { start: number; end: number }>();
      const H = fv.floor.height;
      for (const d of lamps) {
        // hanging lamps would float above cut walls
        const hanging = d.lamp === "strip" ? (d.base ?? H) > Math.min(fv.floor.cut_height, d.ceiling ?? H) : d.lamp ? HANGING_LAMPS.has(d.lamp) : false;
        if (!d.lamp || (hanging && this.lowered)) continue;
        const start = buf.count;
        const packed = d.pack ? packItem(d.pack) : undefined;
        const [pw, pd, ph] = d.size ?? [0.3, 0.3, 0.3];
        // shades get the sentinel colour and are recoloured below
        if (packed) pushPackLamp(buf, packed, { x: d.x, z: d.z, rotation: d.rotation ?? 0, w: pw, d: pd, h: ph, mirror: d.mirror }, d.base ?? 0, SHADE_SENTINEL);
        else pushLampModel(buf, { ...d, lamp: d.lamp!, phase: this.fanPhase(d) }, d.ceiling ?? H, SHADE_SENTINEL);
        // keyed by the furniture: two lamps may share one light (one switch for two strips)
        ranges.set(d.furnitureId ?? d.id, { start, end: buf.count });
        if (d.pickable !== false) tris.push({ id: d.id, start, end: buf.count });
        if (d.furnitureId) furnTris.push({ id: d.furnitureId, start, end: buf.count });
      }
      fv.lampTris = tris;
      fv.lampFurnTris = furnTris;
      fv.lampRanges = ranges;
      fv.lampShade = shadeFactors(buf.c);
      fv.lampMesh.geometry.dispose();
      fv.lampMesh.geometry = buf.geometry();
      fv.lampMesh.visible = buf.count > 0;
    }
    if (colorSig === fv.lampColorSig) return;
    fv.lampColorSig = colorSig;
    const attr = fv.lampMesh.geometry.getAttribute("color") as Float32BufferAttribute;
    const colors = attr.array as Float32Array;
    lamps.forEach((d, i) => {
      const range = fv.lampRanges.get(d.furnitureId ?? d.id);
      if (!range) return;
      const glow = glows[i];
      // a lit shade glows in the light's colour, brighter with more brightness; a tap flashes it white
      const k = glow ? 0.55 + 0.45 * glow.level : 0;
      const shadeC = glow ? new Color(...(glow.color.map((c) => Math.min(1, c * k)) as [number, number, number])) : new Color(LAMP_SHADE);
      const f = flash(d.id);
      if (f > 0) shadeC.lerp(new Color(1, 1, 1), 0.7 * f);
      // the model's colours come from hex values: convert the same way (colour management)
      const c = new Color(shadeC.getHex());
      recolorLamps(colors, fv.lampShade, range, [c.r, c.g, c.b]);
    });
    attr.needsUpdate = true;
    this.buildHalos(fv);
  }

  /**
   * Sunlight through windows that face the sun: each window's opening (reduced by its blind) is
   * projected along the sun's rays onto the floor as a warm, soft patch.
   */
  private buildSun(fv: FloorView): void {
    // the patches of sunlight can be switched off in the settings
    const sun = this.building?.settings.sun_patches === false ? null : this.sun;
    const north = this.building?.settings.north ?? 0;
    const cloud = this.weatherLayer?.cloud ?? 0;
    const signature = sunSignature(sun, north, cloud, fv.openings.values());
    if (signature === fv.sunSig) return;
    fv.sunSig = signature;
    const patches = sunlightPatches({ floor: fv.floor, openings: fv.geo.openings, states: fv.openings, sun, northDegrees: north, cloud });
    fv.sunMesh.geometry.dispose();
    fv.sunMesh.geometry = patches.geometry();
    fv.sunMesh.visible = patches.count > 0;
  }

  /** Glow points at lit shades (not at the tablet level) and light cones under spots (level "High"). */
  private buildHalos(fv: FloorView): void {
    const points: HaloPoints = { positions: [], colours: [] };
    const cones = new GeoBuffer();
    // plugin wedges on the floor are drawn at every quality: they are also what one taps
    const wedges: FloorView["wedgeTris"] = [];
    for (const marker of this.devices) if (marker.floorId === fv.floor.id && marker.wedge) {
      const range = addFloorWedge(cones, marker, fv.geo.walls2d);
      if (!marker.wedge.through) wedges.push({ id: marker.id, ...range });
    }
    fv.wedgeTris = wedges;
    const cut = this.lowered;
    for (const marker of this.lowQuality ? [] : this.devices) {
      const glow = this.glowOf(marker);
      if (marker.floorId !== fv.floor.id || !marker.lamp || !glow) continue;
      if (cut && hiddenInCut(marker.lamp)) continue;
      const lamp = marker as DeviceMarker & { lamp: LampModel };
      addLampHalo(points, lamp, glow, marker.ceiling ?? fv.floor.height);
      if (this.highQuality && (marker.lamp === "downlight" || marker.lamp === "spot")) addSpotCone(cones, lamp, glow, marker.ceiling ?? fv.floor.height);
    }
    const geometry = new Geometry();
    geometry.setAttribute("position", new Float32BufferAttribute(points.positions, 3));
    geometry.setAttribute("color", new Float32BufferAttribute(points.colours, 3));
    fv.haloMesh.geometry.dispose();
    fv.haloMesh.geometry = geometry;
    fv.haloMesh.visible = !this.lowQuality && points.positions.length > 0;
    fv.coneMesh.geometry.dispose();
    fv.coneMesh.geometry = cones.geometry();
    fv.coneMesh.visible = cones.count > 0;
  }

  /** Lit screens of a floor: a bright panel in the app colour and a faint glow around it. */
  private buildScreens(fv: FloorView): void {
    // the vehicles in the parking spots count as furniture here too
    const items = withVehicles(fv.floor, this.parked).furniture.filter((f) => this.screens.has(f.id));
    const sig = items.map((f) => `${f.id}:${f.x},${f.z},${f.rotation},${f.w},${f.d},${f.h},${f.mount_y ?? ""},${f.mirror ? 1 : 0}:${JSON.stringify(this.screens.get(f.id))}`).join(";");
    if (sig === fv.screenSig && fv.screenMesh.geometry.getAttribute("position")) return;
    fv.screenSig = sig;
    const buf = new GeoBuffer();
    for (const f of items) {
      const st = this.screens.get(f.id)!;
      const a = f.rotation * DEG;
      const c = Math.cos(a);
      const s = Math.sin(a);
      const P = (x: number, y: number, z: number) => [f.x + x * c - z * s, y, f.z + x * s + z * c];
      if (st.gangs) {
        // a switch plate or socket: each button that is on glows in its light's colour (green for a socket)
        const item = packItem(f.type);
        if (!item) continue;
        for (const g of st.gangs) {
          const col = new Color(...g.color.map((v) => Math.min(1, v * (0.45 + 0.55 * g.level))) as [number, number, number]);
          pushPackGlow(buf, item, f, mountBase(fv.floor, f), col.getHex(), (p) => p.gang === g.gang);
        }
        continue;
      }
      if (st.print !== undefined) {
        // the print on the bed: a block in the middle of the printer that grows with the progress
        const base = mountBase(fv.floor, f) + f.h * 0.2;
        const s = Math.min(f.w, f.d) * 0.16;
        const top = base + f.h * 0.38 * Math.min(1, Math.max(0, st.print));
        const col = new Color(...st.color.map((v) => Math.min(1, v * (0.35 + 0.65 * st.level))) as [number, number, number]);
        const side = col.clone().multiplyScalar(0.7);
        const c4 = [P(-s, base, -s), P(s, base, -s), P(s, base, s), P(-s, base, s)];
        const t4 = [P(-s, top, -s), P(s, top, -s), P(s, top, s), P(-s, top, s)];
        buf.tri(t4[0], t4[2], t4[1], col);
        buf.tri(t4[0], t4[3], t4[2], col);
        for (let k = 0; k < 4; k++) {
          const j = (k + 1) % 4;
          buf.tri(c4[k], c4[j], t4[j], side);
          buf.tri(c4[k], t4[j], t4[k], side);
        }
        continue;
      }
      if (st.fill !== undefined) {
        // a home battery's charge bar, filled up to its charge (sideways on a wall unit), the rest dim
        const bar = batteryBar(f, fv.floor);
        if (!bar) continue;
        const r = bar.rect;
        const k = Math.min(1, Math.max(0, st.fill));
        const lit = new Color(...st.color.map((v) => Math.min(1, v * (0.35 + 0.65 * st.level))) as [number, number, number]);
        const dim = new Color(0.08, 0.1, 0.13);
        const z = r.z;
        const quad = (x0: number, x1: number, y0: number, y1: number, col: Color) => {
          buf.tri(P(x0, y0, z), P(x1, y0, z), P(x1, y1, z), col);
          buf.tri(P(x0, y0, z), P(x1, y1, z), P(x0, y1, z), col);
        };
        if (bar.vertical) {
          const y = r.y0 + (r.y1 - r.y0) * k;
          if (k > 0) quad(r.x0, r.x1, r.y0, y, lit);
          if (k < 1) quad(r.x0, r.x1, y, r.y1, dim);
        } else {
          const x = r.x0 + (r.x1 - r.x0) * k;
          if (k > 0) quad(r.x0, x, r.y0, r.y1, lit);
          if (k < 1) quad(x, r.x1, r.y0, r.y1, dim);
        }
        continue;
      }
      if (st.leds) {
        const item = packItem(f.type);
        if (!item) continue;
        const col = new Color(...st.color.map((v) => Math.min(1, v * (0.35 + 0.65 * st.level))) as [number, number, number]);
        pushPackGlow(buf, item, f, mountBase(fv.floor, f), col.getHex(), (p) => !!p.glow || !!p.screen);
        continue;
      }
      if (st.heat) {
        const item = packItem(f.type);
        if (!item) continue;
        const col = new Color(...st.color.map((v) => Math.min(1, v * (0.35 + 0.65 * st.level))) as [number, number, number]);
        pushPackGlow(buf, item, f, mountBase(fv.floor, f), col.getHex(), () => true);
        continue;
      }
      if (st.faces) {
        // a state on the item itself: a glowing plate on its top (a half of it for a bed's side or a bunk)
        const w = Math.max(0.05, f.w) * (f.mirror ? -1 : 1);
        const d = Math.max(0.05, f.d);
        const h = Math.max(0.005, f.h);
        const base = mountBase(fv.floor, f);
        for (const face of st.faces) {
          const x0 = face.part === "right" ? 0.03 : -Math.abs(w) / 2 + 0.03;
          const x1 = face.part === "left" ? -0.03 : Math.abs(w) / 2 - 0.03;
          const y = base + (face.part === "bottom" ? h * 0.45 : h) + 0.006;
          const col = new Color(...face.color.map((v) => Math.min(1, v * (0.35 + 0.65 * face.level))) as [number, number, number]);
          const edge = new Color(0, 0, 0);
          const Q = (x: number, z: number, yy = y) => P(x * Math.sign(w), yy, z);
          const inner = [Q(x0, -d / 2 + 0.03), Q(x1, -d / 2 + 0.03), Q(x1, d / 2 - 0.03), Q(x0, d / 2 - 0.03)];
          buf.tri(inner[0], inner[2], inner[1], col);
          buf.tri(inner[0], inner[3], inner[2], col);
          const g = 0.12 + 0.1 * face.level;
          const halo = col.clone().multiplyScalar(0.5);
          const outer = [Q(x0 - g, -d / 2 - g, y + 0.004), Q(x1 + g, -d / 2 - g, y + 0.004), Q(x1 + g, d / 2 + g, y + 0.004), Q(x0 - g, d / 2 + g, y + 0.004)];
          for (let i = 0; i < 4; i++) {
            const j = (i + 1) % 4;
            buf.tri(inner[i], outer[j], outer[i], halo, edge, edge);
            buf.tri(inner[i], inner[j], outer[j], halo, halo, edge);
          }
        }
        continue;
      }
      const r = screenRect(f, fv.floor);
      if (!r) continue;
      const core = new Color(...st.color.map((v) => Math.min(1, v * (0.35 + 0.65 * st.level))) as [number, number, number]);
      const edge = new Color(0, 0, 0);
      const z = r.z + 0.004;
      buf.tri(P(r.x0, r.y0, z), P(r.x1, r.y0, z), P(r.x1, r.y1, z), core);
      buf.tri(P(r.x0, r.y0, z), P(r.x1, r.y1, z), P(r.x0, r.y1, z), core);
      // glow frame fading out around the screen
      const strength = Math.min(1.5, st.halo ?? 1);
      if (strength <= 0) continue;
      const g = (0.18 + 0.12 * st.level) * Math.min(1, strength);
      const halo = core.clone().multiplyScalar(0.5 * strength);
      const inner = [P(r.x0, r.y0, z), P(r.x1, r.y0, z), P(r.x1, r.y1, z), P(r.x0, r.y1, z)];
      const outer = [P(r.x0 - g, r.y0 - g, z + 0.01), P(r.x1 + g, r.y0 - g, z + 0.01), P(r.x1 + g, r.y1 + g, z + 0.01), P(r.x0 - g, r.y1 + g, z + 0.01)];
      for (let i = 0; i < 4; i++) {
        const j = (i + 1) % 4;
        buf.tri(inner[i], outer[i], outer[j], halo, edge, edge);
        buf.tri(inner[i], outer[j], inner[j], halo, edge, halo);
      }
    }
    fv.screenMesh.geometry.dispose();
    fv.screenMesh.geometry = buf.geometry();
    fv.screenMesh.visible = buf.count > 0;
  }

  private buildOpenings(fv: FloorView): void {
    // the ground in this floor's own heights (it lies just below the ground floor's slab)
    const parts = buildOpeningParts(fv.geo.openings, fv.openings, Math.min(fv.floor.cut_height, fv.floor.height), -0.2 - fv.floor.elevation);
    fv.frameTris = parts.frameTris;
    fv.glassTris = parts.glassTris;
    fv.blindTris = parts.blindTris;
    for (const [mesh, geo] of [
      [fv.framesMesh, parts.frames],
      [fv.glassMesh, parts.glass],
      [fv.blindsMesh, parts.blinds],
    ] as const) {
      mesh.geometry.dispose();
      mesh.geometry = geo;
      mesh.visible = geo.getAttribute("position").count > 0;
    }
  }

  /** Floors that can be tapped and are framed by the camera: the whole house or the selected floor. */
  private activeFloors(): FloorView[] {
    return this.floors.filter((f) => f.to > 0.99);
  }

  private applyHighlight(): void {
    for (const fv of this.floors) {
      const colors = fv.geo.floor.getAttribute("color");
      for (const r of fv.geo.roomTris) {
        const c = new Color(r.color);
        const tint = this.roomTint?.get(r.roomId);
        // heatmap: a clear, saturated floor colour (the room light is dimmed meanwhile)
        if (tint) c.lerp(new Color(...tint).multiplyScalar(0.6), 0.9);
        if (r.roomId === this.roomId) c.lerp(ACTIVE_FLOOR, tint ? 0.3 : 0.75);
        for (let v = r.start * 3; v < r.end * 3; v++) colors.setXYZ(v, c.r, c.g, c.b);
      }
      colors.needsUpdate = true;
    }
    for (const pin of this.labels.querySelectorAll<HTMLElement>(".nf-pin")) {
      pin.classList.toggle("nf-pin-active", !!pin.dataset.room && pin.dataset.room === this.roomId);
    }
    this.invalidate();
  }

  private keepCamera = false;
  private zoom = 1;

  private fit(duration: number, keep: { theta: number; phi: number; radius: number } | null = null): void {
    const box = new Box3();
    for (const fv of this.activeFloors()) {
      const y0 = fv.floor.elevation + fv.ty;
      for (const room of fv.floor.rooms) {
        for (const [x, z] of room.points) {
          box.expandByPoint(new Vector3(x, y0, z));
          box.expandByPoint(new Vector3(x, y0 + fv.floor.height, z));
        }
      }
    }
    if (box.isEmpty()) box.set(new Vector3(-4, 0, -4), new Vector3(4, 2.5, 4));
    this.placeGround();
    this.buildHouseShadow();
    // the weather falls over the plot and a margin around it
    this.weatherLayer.setBounds({ x0: box.min.x - 8, x1: box.max.x + 8, z0: box.min.z - 8, z1: box.max.z + 8, y0: box.min.y, y1: box.max.y + 6 });
    const center = box.getCenter(new Vector3());
    const size = box.getSize(new Vector3());
    // perspective widens the near corners; portrait screens need a little more room for that
    const radius = Math.max(8, this.distanceFor(size) * (this.camera.aspect < 1 ? 1.16 : 1.02));
    this.controls.maxRadius = Math.max(40, radius * 3);
    center.y = box.min.y + size.y * (this.houseView ? 0.45 : 0.3);
    if (this.floorId === null || this.floors.length === 1) this.houseRadius = radius;
    // the house view opens as set up (from the garden side, closer …); an opened floor keeps the fitted
    // distance but looks from the same side, so the house never turns round when a floor is opened
    const house = this.floorId === null;
    // a floor may have a start view of its own (#182): it opens from that side and distance
    const own = !house ? (this.floorMap.get(this.floorId!)?.floor.start_view ?? null) : null;
    const start = own ?? this.startView;
    const useRadius = !!start && (house || !!own);
    if (start && useRadius) this.controls.maxRadius = Math.max(this.controls.maxRadius, start.radius * 1.5);
    // the start view's framing (#206): the point it looks at, counted from the opened floor
    const at = useRadius ? start!.target : null;
    if (at) center.set(at.x, at.y + (own ? this.floorBase(this.floorId) : 0), at.z);
    if (keep) {
      this.controls.flyTo({ target: center, radius: keep.radius, phi: keep.phi, theta: keep.theta }, duration);
      return;
    }
    this.controls.flyTo({ target: center, radius: (useRadius ? start!.radius : radius) / this.zoom, phi: start ? start.phi : 0.85, theta: start ? start.theta : -0.6 }, duration);
  }

  /** The ground grid lies under the lowest floor and reaches well beyond the building. */
  private placeGround(): void {
    const box = new Box3();
    let y = Infinity;
    for (const fv of this.floors) {
      y = Math.min(y, fv.floor.elevation + Math.min(0, fv.ty));
      for (const room of fv.floor.rooms) for (const [x, z] of room.points) box.expandByPoint(new Vector3(x, 0, z));
      for (const a of fv.floor.outdoor ?? []) for (const [x, z] of a.points) box.expandByPoint(new Vector3(x, 0, z));
    }
    this.ground.visible = !box.isEmpty() && !this.lowQuality && this.theme !== "day";
    if (box.isEmpty()) return;
    if (this.ground.visible && !this.groundTexture) {
      this.groundTexture = makeGroundTexture();
      const m = this.ground.material as MeshBasicMaterial;
      m.map = this.groundTexture;
      m.needsUpdate = true;
    }
    const c = box.getCenter(new Vector3());
    const s = box.getSize(new Vector3());
    // the texture has 32 cells: 1 m each for a normal house, 2 m for a very large one
    const span = GROUND_CELLS * Math.ceil((Math.max(s.x, s.z) + 16) / GROUND_CELLS);
    this.ground.scale.set(span, span, 1);
    this.ground.position.set(c.x, y - SLAB - 0.02, c.z);
    this.groundY = y - SLAB - 0.04;
    this.placeMap();
  }

  /** The real map under the plan: shown while the settings switch it on, turned by the plan's north. */
  setMap(map: MapSettings | null | undefined, north: number): void {
    this.mapSettings = map ?? null;
    this.mapNorth = north;
    this.placeMap();
    this.invalidate();
  }

  private placeMap(): void {
    this.mapLayer.set(this.mapSettings, this.mapNorth, this.groundY, this.theme === "day" ? 1 : 0.55);
  }

  /** Camera distance at which a box of this size fits the view (bounding sphere against the narrower field of view). */
  private distanceFor(size: Vector3): number {
    const vfov = this.camera.fov * DEG;
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * this.camera.aspect);
    return size.length() / 2 / Math.sin(Math.min(vfov, hfov) / 2);
  }

  /**
   * What lies under a screen point: a lamp, a linked piece of furniture or opening (their entity), or
   * a room. Walls are looked through (the ones in front are glass), furniture without an entity too.
   */
  /** A ray from the camera through a screen point of the stage. */
  private rayAt(x: number, y: number): Raycaster {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const ray = new Raycaster();
    ray.setFromCamera(new Vector2((x / rect.width) * 2 - 1, -(y / rect.height) * 2 + 1), this.camera);
    return ray;
  }

  /** A tap on devices only acts in the opened room (or, outside any room, on the opened floor). */
  setTapInRoom(on: boolean): void {
    this.tapInRoom = on;
  }

  /** Whether a device at this place can be switched by a tap now (tap_in_room). */
  private deviceInReach(floorId: string, roomId: string | null): boolean {
    return !this.tapInRoom || inReach({ floorId, roomId }, { floorId: this.floorId, roomId: this.roomId });
  }

  /** With tap_in_room, an entity under the tap away from the opened room gives way to the room behind it. */
  private pickInReach(x: number, y: number): { entity: string } | { floorId: string; roomId: string | null } | null {
    const hit = this.pick(x, y);
    if (!this.tapInRoom || !hit || !("entity" in hit)) return hit;
    const place = this.pick(x, y, false);
    if (place && "floorId" in place && this.deviceInReach(place.floorId, place.roomId)) return hit;
    return place;
  }

  private pick(x: number, y: number, devices = true): { entity: string } | { floorId: string; roomId: string | null } | null {
    const ray = this.rayAt(x, y);
    const floors = this.activeFloors();
    // an owned 3D model that stands for a device: a tap on it is a tap on the device
    if (devices && this.meshes.length) {
      const hit = ray.intersectObjects(this.meshes.map((m) => m.group), true)[0];
      if (hit) {
        let o: Object3D | null = hit.object;
        while (o && !this.meshes.some((m) => m.group === o)) o = o.parent;
        const entity = o ? this.pickFurniture.get(this.meshes.find((m) => m.group === o)!.furnitureId) : undefined;
        if (entity) return { entity };
      }
    }
    const meshes = floors.flatMap((f) => [f.lampMesh, f.coneMesh, f.framesMesh, f.glassMesh, f.blindsMesh, f.wallMesh, f.floorMesh].filter((m) => m.visible));
    const inRange = (list: { id: string; start: number; end: number }[], tri: number) => list.find((r) => tri >= r.start && tri < r.end)?.id;
    for (const hit of ray.intersectObjects(meshes, false)) {
      if (hit.faceIndex == null) continue;
      const tri = hit.faceIndex;
      const fv = floors.find((f) => f.group === hit.object.parent)!;
      // only the place is asked for: lamps, light cones and windows are looked through
      if (!devices && (hit.object === fv.lampMesh || hit.object === fv.coneMesh || hit.object === fv.framesMesh || hit.object === fv.blindsMesh || hit.object === fv.glassMesh)) continue;
      if (hit.object === fv.lampMesh || hit.object === fv.coneMesh) {
        // a plugin's wedge on the floor is a far bigger target than the device itself
        const id = inRange(hit.object === fv.lampMesh ? fv.lampTris : fv.wedgeTris, tri);
        if (id) return { entity: id };
      } else if (hit.object === fv.framesMesh || hit.object === fv.blindsMesh || hit.object === fv.glassMesh) {
        // the part above the cut is folded away with its wall: a tap there is meant for what lies behind
        if (this.lowered && hit.face) {
          const fold = ((hit.object as Mesh).geometry.getAttribute("fold") as Float32BufferAttribute | undefined)?.getX(hit.face.a) ?? ALWAYS;
          if (fold !== ALWAYS && Math.floor(fold / 16) % 8 === 0) continue;
        }
        // the whole window counts, glass included: a small blind is a poor target
        const id = inRange(hit.object === fv.framesMesh ? fv.frameTris : hit.object === fv.glassMesh ? fv.glassTris : fv.blindTris, tri);
        const entity = id ? this.pickOpenings.get(id) : undefined;
        if (entity) return { entity };
      } else if (hit.object === fv.wallMesh) {
        const id = inRange(fv.geo.furnitureTris, tri);
        const entity = id && devices ? this.pickFurniture.get(id) : undefined;
        if (entity) return { entity };
        // a wall: the tap stops at it unless it is see-through (cut away, or glass in the floor view)
        if (hit.face && !id) {
          const fold = (fv.wallMesh.geometry.getAttribute("fold") as Float32BufferAttribute | undefined)?.getX(hit.face.a) ?? 32;
          // (a painted wall's fold carries PAINT_OFFSET, a multiple of 16 * 8)
          const part = Math.floor(fold / 16) % 8;
          const bucket = fold % 16;
          const cutAway = this.lowered && part === 0;
          const glass = (fv.mask.glass.value & (1 << bucket)) !== 0;
          if (!cutAway) {
            // the room on the camera's side of the wall is what the tap means
            const dir = ray.ray.direction;
            const l = Math.hypot(dir.x, dir.z) || 1;
            const p: [number, number] = [hit.point.x - (dir.x / l) * 0.3, hit.point.z - (dir.z / l) * 0.3];
            const beside = fv.floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon(p, r.points))?.id ?? null;
            if (this.roomId !== null) {
              // in a room: its own walls catch the tap (nothing behind them is meant), other walls let it through
              if (beside === this.roomId) return { floorId: fv.floor.id, roomId: beside };
            } else if (!glass && beside) return { floorId: fv.floor.id, roomId: beside };
          }
        }
      } else if (hit.object === fv.floorMesh) {
        return { floorId: fv.floor.id, roomId: inRange(fv.geo.roomTris.map((r) => ({ id: r.roomId, start: r.start, end: r.end })), tri) ?? null };
      }
    }
    return null;
  }

  private onTap(x: number, y: number): void {
    const hit = this.furnish ? this.pick(x, y) : this.pickInReach(x, y);
    if (hit && "entity" in hit && this.furnish) {
      this.selectDevice(hit.entity);
      this.options.onDeviceSelect?.(hit.entity);
      return;
    }
    if (hit && "entity" in hit) {
      this.flashes.set(hit.entity, performance.now() + FLASH_MS);
      this.invalidate();
      this.options.onDeviceTap?.(hit.entity, x, y);
      return;
    }
    this.options.onRoomTap?.(hit?.floorId ?? this.floorId ?? "", hit?.roomId ?? null);
  }

  /** Furniture item (or lamp) under a screen point, with the floor it is on. */
  private furnitureAt(x: number, y: number): { fv: FloorView; id: string } | null {
    const ray = this.rayAt(x, y);
    const floors = this.activeFloors();
    const meshes = floors.flatMap((f) => [f.lampMesh, f.wallMesh].filter((m) => m.visible));
    for (const hit of ray.intersectObjects(meshes, false)) {
      if (hit.faceIndex == null) continue;
      const fv = floors.find((f) => f.group === hit.object.parent)!;
      const list = hit.object === fv.lampMesh ? fv.lampFurnTris : fv.geo.furnitureTris;
      const id = list.find((r) => hit.faceIndex! >= r.start && hit.faceIndex! < r.end)?.id;
      if (id) return { fv, id };
    }
    return null;
  }

  /** Point on a floor's plane under a screen point. */
  private floorPoint(fv: FloorView, x: number, y: number): [number, number] | null {
    const ray = this.rayAt(x, y);
    const h = fv.floor.elevation + fv.y;
    const dir = ray.ray.direction;
    if (Math.abs(dir.y) < 1e-4) return null;
    const t = (h - ray.ray.origin.y) / dir.y;
    if (t <= 0) return null;
    return [ray.ray.origin.x + dir.x * t, ray.ray.origin.z + dir.z * t];
  }

  /** Only these furniture types can be grabbed while furnishing (null: all); placed devices then cannot. */
  setFurnishTypes(types: readonly string[] | null): void {
    this.furnishTypes = types ? new Set(types) : null;
  }

  /** The editor's handler for things on roof faces and walls (null: none). */
  setSurfaceGrab(grab: SurfaceGrab | null): void {
    this.surfaceGrab = grab;
  }

  private surfaceRay(x: number, y: number): { o: [number, number, number]; d: [number, number, number] } {
    const r = this.rayAt(x, y).ray;
    return { o: [r.origin.x, r.origin.y, r.origin.z], d: [r.direction.x, r.direction.y, r.direction.z] };
  }

  private grabFurniture(x: number, y: number): boolean {
    // the editor's surface handler first: a solar field or roof window under the pointer is moved by it
    if (this.surfaceGrab?.start(this.surfaceRay(x, y))) {
      this.surfaceDragging = true;
      return true;
    }
    if (!this.furnish) return false;
    // a device whose pin was pressed; the pin of a furniture item (the washer's watts) moves the item
    const pending = this.pendingDevice;
    this.pendingDevice = null;
    // a tool that only moves some furniture (energy devices): everything else stays where it is
    const only = this.furnishTypes;
    if (only) {
      const owner = pending ? this.devices.find((m) => m.id === pending)?.furnitureId : undefined;
      const hit = owner ? null : this.furnitureAt(x, y);
      const id = owner ?? hit?.id;
      const fv = id ? this.floors.find((v) => v.floor.furniture.some((m) => m.id === id)) : undefined;
      const type = fv?.floor.furniture.find((m) => m.id === id)?.type;
      return !!(fv && id && type && only.has(type)) && this.grabItem(fv, id, x, y);
    }
    if (pending) {
      const owner = this.devices.find((m) => m.id === pending)?.furnitureId;
      const fv = owner ? this.floors.find((v) => v.floor.furniture.some((m) => m.id === owner)) : undefined;
      if (!owner || !fv) return this.grabDevice(pending, x, y);
      return this.grabItem(fv, owner, x, y);
    }
    // furniture first: a washing machine or a lamp with a linked entity is still furniture to move
    // (its entity would otherwise be grabbed like a placed device, and nothing would move)
    const hit = this.furnitureAt(x, y);
    if (!hit) {
      // a placed device's model (a camera) under the pointer
      const picked = this.pick(x, y);
      if (picked && "entity" in picked) return this.grabDevice(picked.entity, x, y);
      // a tap on empty space clears the selection, a drag still turns the view
      if (this.selectedFurniture) {
        this.selectFurniture(null);
        this.options.onFurnitureSelect?.(null);
      }
      if (this.selectedDevice) {
        this.selectDevice(null);
        this.options.onDeviceSelect?.(null);
      }
      return false;
    }
    return this.grabItem(hit.fv, hit.id, x, y);
  }

  private grabItem(fv: FloorView, id: string, x: number, y: number): boolean {
    const f = fv.floor.furniture.find((m) => m.id === id);
    const p = this.floorPoint(fv, x, y);
    if (!f || !p) return false;
    if (f.locked) {
      // fixed: selected, but a drag turns the view instead of moving it
      this.selectFurniture(f.id);
      this.options.onFurnitureSelect?.(f.id);
      return false;
    }
    this.grab = { floorId: fv.floor.id, id: f.id, offset: [f.x - p[0], f.z - p[1]], x: f.x, z: f.z, moved: false };
    this.selectFurniture(f.id);
    this.options.onFurnitureSelect?.(f.id);
    return true;
  }

  private grabDevice(id: string, x: number, y: number): boolean {
    const d = this.devices.find((m) => m.id === id);
    const fv = d && this.floorMap.get(d.floorId);
    const p = fv && this.floorPoint(fv, x, y);
    if (!d || !fv || !p) return false;
    if (d.fixed) {
      this.selectDevice(id);
      this.options.onDeviceSelect?.(id);
      return false;
    }
    this.deviceGrab = { id, floorId: fv.floor.id, offset: [d.x - p[0], d.z - p[1]], x: d.x, z: d.z, moved: false };
    this.selectDevice(id);
    this.options.onDeviceSelect?.(id);
    return true;
  }

  /** Select a device (its pin is marked), or none. */
  setSelectedDevice(id: string | null): void {
    if (id === this.selectedDevice) return;
    this.selectDevice(id);
  }

  /** Mark the selected device's pin; selecting a device drops the furniture selection and vice versa. */
  private selectDevice(id: string | null): void {
    if (id && this.selectedFurniture) {
      this.selectFurniture(null);
      this.options.onFurnitureSelect?.(null);
    }
    this.selectedDevice = id;
    for (const [entity, pin] of this.devicePins) pin.el.classList.toggle("nf-dev-sel", entity === id);
  }

  private dragFurniture(x: number, y: number): void {
    if (this.surfaceDragging) {
      this.surfaceGrab?.move(this.surfaceRay(x, y));
      return;
    }
    const dg = this.deviceGrab;
    if (dg) {
      const fv = this.floorMap.get(dg.floorId);
      const d = this.devices.find((m) => m.id === dg.id);
      const p = fv && this.floorPoint(fv, x, y);
      if (!fv || !d || !p) return;
      const grid = this.building?.settings.grid ?? 0.05;
      dg.x = d.x = Math.round((p[0] + dg.offset[0]) / grid) * grid;
      dg.z = d.z = Math.round((p[1] + dg.offset[1]) / grid) * grid;
      dg.moved = true;
      this.labelsDirty = true;
      this.invalidate();
      return;
    }
    const g = this.grab;
    const fv = g && this.floorMap.get(g.floorId);
    if (!g || !fv) return;
    const p = this.floorPoint(fv, x, y);
    if (!p) return;
    const grid = this.building?.settings.grid ?? 0.05;
    g.x = Math.round((p[0] + g.offset[0]) / grid) * grid;
    g.z = Math.round((p[1] + g.offset[1]) / grid) * grid;
    g.moved = true;
    this.updateGhost();
    this.invalidate();
  }

  private dropFurniture(): void {
    if (this.surfaceDragging) {
      this.surfaceDragging = false;
      this.surfaceGrab?.end();
      return;
    }
    const dg = this.deviceGrab;
    this.deviceGrab = null;
    if (dg?.moved) this.options.onDeviceMove?.(dg.id, Math.round(dg.x * 1000) / 1000, Math.round(dg.z * 1000) / 1000);
    const g = this.grab;
    this.grab = null;
    if (g?.moved) this.options.onFurnitureMove?.(g.id, Math.round(g.x * 1000) / 1000, Math.round(g.z * 1000) / 1000);
    this.updateGhost();
  }

  /** Wireframe box around the selected item, at its drag position while it is dragged. */
  private updateGhost(): void {
    if (this.ghost) {
      this.ghost.geometry.dispose();
      (this.ghost.material as Material).dispose();
      this.scene.remove(this.ghost);
      this.ghost = null;
    }
    const id = this.selectedFurniture;
    const fv = id ? this.floors.find((f) => f.floor.furniture.some((m) => m.id === id)) : undefined;
    const f = fv?.floor.furniture.find((m) => m.id === id);
    if (!fv || !f) return;
    const x = this.grab?.id === f.id ? this.grab.x : f.x;
    const z = this.grab?.id === f.id ? this.grab.z : f.z;
    const H = ceilingOf(fv.floor, { ...f, x, z });
    const hanging = CEILING_TYPES.has(f.type);
    const h = Math.max(0.1, f.type === "lamp_pendant" ? 0.3 : f.h);
    const y0 = packItem(f.type) || f.type === "lamp_wall" || f.type === "led_strip"
      ? mountBase(fv.floor, f)
      : hanging
        ? f.type === "lamp_pendant" || f.type === "ceiling_fan"
          ? H - f.h - 0.1
          : H - h
        : mountBase(fv.floor, f);
    const a = f.rotation * DEG;
    const c = Math.cos(a);
    const sn = Math.sin(a);
    const corner = (lx: number, lz: number, y: number) => [x + lx * c - lz * sn, y, z + lx * sn + lz * c];
    const lines = new LineBuffer();
    const pts = [
      [-f.w / 2, -f.d / 2],
      [f.w / 2, -f.d / 2],
      [f.w / 2, f.d / 2],
      [-f.w / 2, f.d / 2],
    ];
    const color = new Color(0.25, 0.9, 1);
    for (let i = 0; i < 4; i++) {
      const [ax, az] = pts[i];
      const [bx, bz] = pts[(i + 1) % 4];
      lines.seg(corner(ax, az, y0 + 0.01), corner(bx, bz, y0 + 0.01), color);
      lines.seg(corner(ax, az, y0 + h), corner(bx, bz, y0 + h), color);
      lines.seg(corner(ax, az, y0 + 0.01), corner(ax, az, y0 + h), color);
    }
    // the front edge a little brighter at floor level, so the direction is clear
    lines.seg(corner(-f.w / 2, f.d / 2 + 0.03, y0 + 0.02), corner(f.w / 2, f.d / 2 + 0.03, y0 + 0.02), new Color(1, 1, 1));
    this.ghost = new LineSegments(lines.geometry(), new LineBasicMaterial({ vertexColors: true, depthTest: false, transparent: true }));
    this.ghost.position.y = fv.floor.elevation + fv.y;
    this.ghost.renderOrder = 20;
    this.scene.add(this.ghost);
  }

  private onHold(x: number, y: number): void {
    const hit = this.pick(x, y);
    if (hit && "entity" in hit) this.options.onDeviceHold?.(hit.entity, x, y);
  }

  /** A mostly vertical drag on a lamp or blind becomes a swipe (unless furnishing). */
  private swipeStart(x: number, y: number, dx: number, dy: number): boolean {
    if (this.furnish || Math.abs(dy) < Math.abs(dx) * 1.2) return false;
    const hit = this.pickInReach(x, y);
    if (!hit || !("entity" in hit)) return false;
    if (this.options.onDeviceSwipe?.(hit.entity, "start", 0, x, y) !== true) return false;
    this.swipe = { entity: hit.entity, x, y };
    return true;
  }

  /**
   * Small pictures of every floor with rooms (for the floor switcher): each floor alone, walls cut,
   * seen from above at the usual angle, as PNG data URLs. Rendered once into an offscreen target of
   * the same renderer, so nothing is uploaded twice; the view is restored afterwards.
   */
  floorThumbnails(width = 200, height = 150): { floorId: string; url: string }[] {
    const floors = this.floors.filter((fv) => fv.floor.rooms.some((r) => r.points.length >= 3));
    if (!floors.length) return [];
    const scale = this.lowQuality ? 1 : Math.min(2, window.devicePixelRatio || 1);
    const w = Math.round(width * scale);
    const h = Math.round(height * scale);
    const target = new WebGLRenderTarget(w, h);
    target.texture.colorSpace = SRGBColorSpace;
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 400);
    const saved = this.floors.map((fv) => ({ fv, visible: fv.group.visible, y: fv.y, o: fv.o, standing: fv.mask.standing.value, glass: fv.mask.glass.value }));
    const roofVisible = this.roof?.group.visible ?? false;
    const ghostVisible = this.ghost?.visible ?? false;
    const clear = this.renderer.getClearAlpha();
    const pixels = new Uint8Array(w * h * 4);
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d")!;
    const out: { floorId: string; url: string }[] = [];
    try {
      if (this.roof) this.roof.group.visible = false;
      if (this.ghost) this.ghost.visible = false;
      this.renderer.setClearAlpha(0);
      for (const fv of floors) {
        for (const other of this.floors) other.group.visible = other === fv;
        fv.y = 0;
        fv.o = 1;
        this.applyFloor(fv);
        fv.group.visible = true;
        fv.mask.standing.value = 0;
        fv.mask.glass.value = 0;
        // fit the floor's rooms (with the cut walls) into the picture
        const pts = fv.floor.rooms.flatMap((r) => r.points);
        const y0 = fv.floor.elevation;
        const box = new Box3(
          new Vector3(Math.min(...pts.map((p) => p[0])) - 0.3, y0, Math.min(...pts.map((p) => p[1])) - 0.3),
          new Vector3(Math.max(...pts.map((p) => p[0])) + 0.3, y0 + Math.min(fv.floor.cut_height, fv.floor.height), Math.max(...pts.map((p) => p[1])) + 0.3),
        );
        const center = box.getCenter(new Vector3());
        const theta = -0.6;
        const phi = 0.8;
        const dir = new Vector3(Math.sin(phi) * Math.sin(theta), Math.cos(phi), Math.sin(phi) * Math.cos(theta));
        camera.position.copy(center).addScaledVector(dir, 100);
        camera.lookAt(center);
        camera.updateMatrixWorld();
        let rx = 0.5;
        let ry = 0.5;
        for (const x of [box.min.x, box.max.x])
          for (const y of [box.min.y, box.max.y])
            for (const z of [box.min.z, box.max.z]) {
              const p = new Vector3(x, y, z).applyMatrix4(camera.matrixWorldInverse);
              rx = Math.max(rx, Math.abs(p.x));
              ry = Math.max(ry, Math.abs(p.y));
            }
        // keep the picture's aspect ratio
        const aspect = w / h;
        if (rx / ry > aspect) ry = rx / aspect;
        else rx = ry * aspect;
        camera.left = -rx * 1.05;
        camera.right = rx * 1.05;
        camera.top = ry * 1.05;
        camera.bottom = -ry * 1.05;
        camera.updateProjectionMatrix();
        this.renderer.setRenderTarget(target);
        this.renderer.clear();
        this.renderer.render(this.scene, camera);
        this.renderer.readRenderTargetPixels(target, 0, 0, w, h, pixels);
        // the target's rows start at the bottom
        const img = ctx.createImageData(w, h);
        for (let row = 0; row < h; row++) img.data.set(pixels.subarray((h - 1 - row) * w * 4, (h - row) * w * 4), row * w * 4);
        ctx.putImageData(img, 0, 0);
        out.push({ floorId: fv.floor.id, url: canvas.toDataURL("image/png") });
      }
    } finally {
      this.renderer.setRenderTarget(null);
      this.renderer.setClearAlpha(clear);
      for (const s of saved) {
        s.fv.y = s.y;
        s.fv.o = s.o;
        s.fv.mask.standing.value = s.standing;
        s.fv.mask.glass.value = s.glass;
        this.applyFloor(s.fv);
        s.fv.group.visible = s.visible;
      }
      if (this.roof) this.roof.group.visible = roofVisible;
      if (this.ghost) this.ghost.visible = ghostVisible;
      target.dispose();
      this.invalidate();
    }
    return out;
  }

  /** Robot vacuums and their states; robots that clean drive lanes through their room. */
  setRobots(list: RobotInfo[]): void {
    const seen = new Set<string>();
    for (const info of list) {
      seen.add(info.id);
      let r = this.robots.get(info.id);
      if (!r) {
        r = this.makeRobot(info);
        this.robots.set(info.id, r);
      }
      const was = r.info.mode;
      const moved =
        info.mode === "cleaning" &&
        was === "cleaning" &&
        ((r.info.roomId ?? null) !== (info.roomId ?? null) || JSON.stringify(r.info.obstacles ?? []) !== JSON.stringify(info.obstacles ?? []));
      r.info = info;
      if (info.mode === "cleaning" && (was !== "cleaning" || moved || !r.motion.path.length)) {
        // start the lanes at the point nearest to where the robot is
        const path = info.room ? cleaningPath(info.room, undefined, undefined, info.obstacles) : circlePath(info.rest);
        const path2 = path.length ? path : circlePath(info.rest);
        let best = 0;
        path2.forEach((p, i) => {
          if (Math.hypot(p[0] - r!.motion.pos[0], p[1] - r!.motion.pos[1]) < Math.hypot(path2[best][0] - r!.motion.pos[0], path2[best][1] - r!.motion.pos[1])) best = i;
        });
        r.motion.path = path2;
        r.motion.next = best;
        // a robot reported in another room appears there instead of driving through the walls
        if (info.room && !pointInPolygon(r.motion.pos, info.room)) r.motion.pos = [path2[best][0], path2[best][1]];
      }
      r.led.color.setHex(ROBOT_LED[info.mode]);
    }
    for (const [id, r] of this.robots) {
      if (seen.has(id)) continue;
      r.group.removeFromParent();
      r.led.dispose();
      this.robots.delete(id);
    }
    this.robotLast = 0;
    this.invalidate();
  }

  private makeRobot(info: RobotInfo): { info: RobotInfo; motion: RobotMotion; group: Group; led: MeshBasicMaterial } {
    if (!this.robotGeo) {
      const buf = new GeoBuffer();
      const disc = (r: number, y0: number, y1: number, side: number, top: number) => {
        const poly: [number, number][] = [];
        for (let i = 0; i < 20; i++) poly.push([Math.cos((i / 20) * Math.PI * 2) * r, Math.sin((i / 20) * Math.PI * 2) * r]);
        pushPrism(buf, poly, y0, y1, side, top, { aoFrom: 0, bottom: false });
      };
      disc(0.17, 0.012, 0.08, 0x243049, 0x34425f);
      disc(0.055, 0.08, 0.1, 0x3a4a6a, 0x4d5f86);
      this.robotGeo = buf.geometry();
      this.robotMat = new MeshBasicMaterial({ vertexColors: true });
      const led = new GeoBuffer();
      pushPrism(led, [[-0.05, 0.1], [0.05, 0.1], [0.05, 0.14], [-0.05, 0.14]], 0.08, 0.085, 0xffffff, 0xffffff, { aoFrom: 0, bottom: false });
      this.robotLedGeo = led.geometry();
    }
    const group = new Group();
    const ledMat = new MeshBasicMaterial({ color: ROBOT_LED[info.mode] });
    // a robot mower is the same robot, larger and in garden green
    const body = info.mower ? (this.mowerMat ??= new MeshBasicMaterial({ color: 0x3f8a4a })) : this.robotMat!;
    group.add(new Mesh(this.robotGeo, body), new Mesh(this.robotLedGeo!, ledMat));
    if (info.mower) group.scale.set(1.7, 1.6, 1.7);
    return { info, motion: { pos: [...info.rest] as [number, number], heading: info.restHeading, path: [], next: 0 }, group, led: ledMat };
  }

  /** The pets of the plan: a model each, standing where it was placed, ready to roam its room. */
  private buildPets(): void {
    const keep = new Map(this.pets);
    this.pets.clear();
    this.petMat ??= new MeshBasicMaterial({ vertexColors: true });
    for (const fv of this.floors) {
      for (const f of fv.floor.furniture) {
        const item = packItem(f.type);
        if (!item?.pet) continue;
        const room = fv.floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
        const old = keep.get(f.id);
        const buf = new GeoBuffer();
        packModel(new Builder(buf, new LineBuffer(), placement({ x: 0, z: 0, rotation: 0, mirror: f.mirror })), item, Math.max(0.05, f.w), Math.max(0.05, f.d), Math.max(0.05, f.h), 0, null, null, f.variant ?? null);
        old?.group.removeFromParent();
        const group = new Group();
        group.add(new Mesh(buf.geometry(), this.petMat));
        // the furniture of the room is what it walks round (not rugs, lamps on the ceiling or things on the walls)
        const obstacles = room ? fv.floor.furniture.filter((o) => o.id !== f.id && !packItem(o.type)?.pet && o.type !== "rug" && mountBase(fv.floor, o) < 0.5 && pointInPolygon([o.x, o.z], room.points)).map((o) => furnitureFootprint(o)) : [];
        const petRoom: PetRoom = { points: room?.points ?? [[f.x - 0.5, f.z - 0.5], [f.x + 0.5, f.z - 0.5], [f.x + 0.5, f.z + 0.5], [f.x - 0.5, f.z + 0.5]], obstacles, speed: f.type.endsWith(":pet_dog") ? 0.7 : 0.45 };
        const motion: PetMotion = old && room && pointInPolygon(old.motion.pos, room.points) ? old.motion : { pos: [f.x, f.z], heading: (f.rotation * Math.PI) / 180, target: null, rest: 1 };
        this.pets.set(f.id, { motion, room: petRoom, random: seededRandom(f.id), group, floorId: fv.floor.id });
      }
    }
    for (const [id, old] of keep) if (!this.pets.has(id)) old.group.removeFromParent();
  }

  /**
   * Where the pets are now, as their room sensors tell (pet id -> room id on the pet's floor; null: the room it was placed in). A pet
   * reported in another room appears there and roams it.
   */
  setPetRooms(rooms: Map<string, string | null>): void {
    for (const [id, p] of this.pets) {
      const fv = this.floorMap.get(p.floorId);
      const roomId = rooms.get(id);
      if (!fv || roomId === undefined) continue;
      const room = roomId ? fv.floor.rooms.find((r) => r.id === roomId && r.points.length >= 3) : undefined;
      if (!room || p.room.points === room.points) continue;
      const obstacles = fv.floor.furniture.filter((o) => !packItem(o.type)?.pet && o.type !== "rug" && mountBase(fv.floor, o) < 0.5 && pointInPolygon([o.x, o.z], room.points)).map((o) => furnitureFootprint(o));
      p.room = { ...p.room, points: room.points, obstacles };
      if (!pointInPolygon(p.motion.pos, room.points)) p.motion = { ...p.motion, pos: centroid(room.points), target: null, rest: 0.5 };
    }
    this.invalidate();
  }

  /** Move the robots; true while one of them drives. */
  private stepRobots(now: number): boolean {
    if (!this.robots.size && !this.pets.size) return false;
    const dt = this.robotLast ? Math.min(0.2, (now - this.robotLast) / 1000) : 0;
    this.robotLast = now;
    let active = false;
    // the pets roam with the robots (same frames, and they rest with them on the tablet level); while every pet sits, no frames
    // are drawn and a timer wakes the view when the first one walks on
    let nextWalk = Infinity;
    for (const p of this.pets.values()) {
      const fv = this.floorMap.get(p.floorId);
      if (!fv) continue;
      if (p.group.parent !== fv.group) fv.group.add(p.group);
      const walking = stepPet(p.motion, p.room, dt, p.random) || !!p.motion.target;
      if (walking) active = true;
      else nextWalk = Math.min(nextWalk, Math.max(0, p.motion.rest));
      p.group.position.set(p.motion.pos[0], 0, p.motion.pos[1]);
      p.group.rotation.y = p.motion.heading;
    }
    clearTimeout(this.petTimer);
    if (!active && Number.isFinite(nextWalk)) {
      const slept = performance.now();
      this.petTimer = setTimeout(() => {
        const gone = (performance.now() - slept) / 1000;
        for (const p of this.pets.values()) if (!p.motion.target) p.motion.rest -= gone;
        this.invalidate();
      }, nextWalk * 1000 + 50);
    }
    for (const r of this.robots.values()) {
      const fv = this.floorMap.get(r.info.floorId);
      if (!fv) continue;
      if (r.group.parent !== fv.group) fv.group.add(r.group);
      if (dt > 0) active = stepRobot(r.motion, r.info, dt) || active;
      else active ||= r.info.mode === "cleaning" || r.info.mode === "returning";
      r.group.position.set(r.motion.pos[0], r.info.y ?? 0, r.motion.pos[1]);
      r.group.rotation.y = r.motion.heading;
    }
    if (!active) this.robotLast = 0;
    return active;
  }

  /** The current view (a copy), to come back to it later with flyTo. */
  getView(): OrbitView {
    return { ...this.controls.view, target: this.controls.view.target.clone() };
  }

  flyTo(view: OrbitView, duration = 900): void {
    this.controls.flyTo(view, duration);
  }

  /** Fly to a point of a floor (search) and let the device there flash. */
  focus(floorId: string, x: number, z: number, y: number, entityId: string | null): void {
    const fv = this.floorMap.get(floorId);
    if (!fv) return;
    this.controls.flyTo({ target: new Vector3(x, fv.floor.elevation + fv.ty + y, z), radius: 5.5, phi: 0.78 }, 900);
    if (entityId) {
      this.flashes.set(entityId, performance.now() + 2400);
      const pin = this.host.querySelector<HTMLElement>(`.nf-dev[data-entity="${CSS.escape(entityId)}"]`);
      pin?.classList.add("nf-dev-found");
      setTimeout(() => pin?.classList.remove("nf-dev-found"), 2600);
    }
    this.invalidate();
  }

  private render(now: number): void {
    this.frame = 0;
    if (this.disposed) return;
    const dt = this.lastFrame ? Math.min(100, now - this.lastFrame) : 16;
    let orbiting = false;
    if (this.orbitSpeed && !this.controls.active) {
      if (this.orbitLast) this.controls.view.theta += (this.orbitSpeed * Math.min(100, now - this.orbitLast)) / 1000;
      this.orbitLast = now;
      orbiting = true;
    } else this.orbitLast = 0;
    const cameraMoving = this.controls.update(now);
    const floorsMoving = this.stepFloors(dt);
    // all three step every frame: a door swinging must not hold up a curtain
    const steps = [this.stepOpenings(dt), this.stepFridges(dt), this.stepCovers(dt)];
    const openingsMoving = steps.some(Boolean);
    let flashing = false;
    if (this.flashes.size) {
      // only the floors with a flashing lamp are recoloured (an expired flash needs one last pass)
      const touched = new Set<string>();
      for (const [id, until] of this.flashes) {
        const floorId = this.deviceFloor.get(id);
        if (floorId) touched.add(floorId);
        if (until <= now) this.flashes.delete(id);
      }
      flashing = this.flashes.size > 0;
      for (const fv of this.floors) if (touched.has(fv.floor.id)) this.buildLamps(fv);
    }
    const roofMoving = this.placeRoof(dt);
    const robotsMoving = this.stepRobots(now);
    // NextFloor's layers: each one steps every frame (no short-circuit), any of them moving keeps the frames coming
    this.pictureLayer.step();
    const liveMoving = [this.weatherLayer, this.energyLayer, this.soundLayer, this.screenLayer, this.waterLayer].map((l) => l.step(now));
    const weatherMoving = liveMoving.some(Boolean);
    const moving = cameraMoving || floorsMoving || openingsMoving || flashing || roofMoving;
    const busy: string[] = [];
    if (cameraMoving) busy.push("camera");
    if (floorsMoving) busy.push("floors");
    if (openingsMoving) busy.push("openings");
    if (flashing) busy.push("flash");
    if (roofMoving) busy.push("roof");
    if (this.effectTick) busy.push("effect");
    if (robotsMoving) busy.push("robot");
    if (orbiting) busy.push("orbit");
    if (this.tintTick) busy.push("tint");
    this.effectTick = this.tintTick = false;
    this.lastFrame = moving ? now : 0;
    if (moving && this.governor) {
      const step = this.governor.frame(dt, now);
      if (step && "ratio" in step) {
        this.renderer.setPixelRatio(step.ratio);
        this.resize();
      } else if (step) setTimeout(() => this.dropToLow(), 0);
    }
    this.updateWalls();
    this.renderer.render(this.scene, this.camera);
    this.placeLhAnchors();
    // labels are placed only when the view or something on it moved (style writes cost layout)
    if (this.viewChanged() || floorsMoving || this.labelsDirty) {
      this.labelsDirty = false;
      this.updateLabels();
    }
    // everything that keeps drawing (also the energy flow, effects, robots) shows in the frame rate
    this.reportStats(now, busy);
    if (moving) this.invalidate();
    this.scheduleEffects();
    if (!moving && orbiting && !this.orbitTimer) {
      // the screensaver turn: about 30 frames per second, 15 on the tablet level
      this.orbitTimer = setTimeout(() => {
        this.orbitTimer = undefined;
        this.invalidate();
      }, this.lowQuality ? 66 : 33);
    }
    const resting = this.resting;
    if (!moving && weatherMoving && !this.weatherTimer && !resting) {
      // falling rain or snow: about 30 frames per second
      this.weatherTimer = setTimeout(() => {
        this.weatherTimer = undefined;
        this.invalidate();
      }, 33);
    }
    if (!moving && robotsMoving && !this.robotTimer && !resting) {
      // a driving robot: about 30 frames per second, 15 on the tablet level
      this.robotTimer = setTimeout(() => {
        this.robotTimer = undefined;
        this.invalidate();
      }, this.lowQuality ? 66 : 33);
    }
  }

  /**
   * Walls facing the camera: in the tall view they turn into glass (rooms stay whole, doors and windows
   * stay visible); in the cut view every wall is cut at the cut height.
   */
  private updateWalls(): void {
    if (this.controls.walk) {
      // walking among the walls: they stand whole, none turns to glass or is cut
      for (const fv of this.floors) {
        fv.mask.standing.value = 0xffff;
        fv.mask.glass.value = 0;
        fv.mask.slope?.value.set(0, 0, 0, 0);
      }
      return;
    }
    const cam = this.camera.position;
    const t = this.controls.view.target;
    const dx = cam.x - t.x;
    const dz = cam.z - t.z;
    const l = Math.hypot(dx, dz) || 1;
    for (const fv of this.floors) {
      // in a room, its floor's interior walls turn into glass as well
      const inRoom = this.roomId !== null && fv.floor.rooms.some((r) => r.id === this.roomId);
      const cut = this.wallMode === "cut";
      let glass = 0;
      let lowered = 0;
      fv.geo.buckets.forEach((normal, b) => {
        const facing = normal ? (normal[0] * dx) / l + (normal[1] * dz) / l >= 0.25 : inRoom;
        if (this.wallMode !== "auto" || !facing) return;
        // solid walls never turn into glass: in a room, the walls in front of it are cut down instead (like a doll's house)
        if (!this.painted) glass |= 1 << b;
        else if (inRoom) lowered |= 1 << b;
      });
      fv.mask.standing.value = cut ? 0 : 0xffff & ~lowered;
      fv.mask.glass.value = glass;
      this.slopeWalls(fv, -dx / l, -dz / l);
    }
  }

  /**
   * The sloped view: the walls of a floor are lowered to a plane that rises away from the camera, from the cut height on
   * the floor's near edge to the full height on its far edge, so the rooms in front open up and the far walls frame them.
   */
  private slopeWalls(fv: FloorView, fx: number, fz: number): void {
    const slope = fv.mask.slope!.value;
    if (this.wallMode !== "slope" || !fv.bbox || this.controls.walk) {
      slope.set(0, 0, 0, 0);
      return;
    }
    const { x0, x1, z0, z1 } = fv.bbox;
    const along = [x0 * fx + z0 * fz, x1 * fx + z0 * fz, x0 * fx + z1 * fz, x1 * fx + z1 * fz];
    // a little inside the outline, so the near wall really sits at the low end and the far wall at the high end
    const [near, far] = [Math.min(...along), Math.max(...along)];
    const inset = (far - near) * 0.08;
    slope.set(fx, fz, near + inset, far - inset);
    fv.mask.slopeY!.value.set(Math.min(fv.floor.cut_height, fv.floor.height), fv.floor.height);
  }

  /** True when the camera view differs from the last frame's. */
  private viewChanged(): boolean {
    const v = this.controls.view;
    const k = this.viewKey;
    if (k[0] === v.target.x && k[1] === v.target.y && k[2] === v.target.z && k[3] === v.radius && k[4] === v.theta && k[5] === v.phi) return false;
    k[0] = v.target.x;
    k[1] = v.target.y;
    k[2] = v.target.z;
    k[3] = v.radius;
    k[4] = v.theta;
    k[5] = v.phi;
    return true;
  }

  /** The screen place of a point of a floor, which moves with the floor while it animates. */
  private screenPoint(point: [number, number, number], margin = 1.05): ScreenPoint {
    return project(this.camera, point, this.size, margin);
  }

  /** Places the floor labels (house view), the room labels, and the pins of devices and persons. */
  private updateLabels(): void {
    const house = this.houseView;
    const labels: (FloorLabel & { fv: FloorView })[] = [];
    for (const fv of this.floors) {
      const box = fv.bbox;
      if (!(house && fv.o > 0.5 && box)) {
        this.labelPlacer.place(fv.label, null);
        continue;
      }
      // the corners of the floor's box at half the cut height
      const y = fv.floor.elevation + fv.y + fv.floor.cut_height * 0.5;
      const corners = [box.x0, box.x1].flatMap((x) => [box.z0, box.z1].map((z) => this.screenPoint([x, y, z], Infinity)));
      if (fv.label.hidden) fv.label.hidden = false;
      fv.labelSize ??= { w: fv.label.offsetWidth, h: fv.label.offsetHeight };
      const spot = floorLabelPosition(corners, fv.labelSize.w, { width: this.size.w, inset: this.labelInset });
      labels.push({ fv, rank: fv.rank, left: spot.left, y: spot.y, height: fv.labelSize.h });
    }
    for (const label of stackFloorLabels(labels)) this.labelPlacer.place(label.fv.label, leftAt(label.left, label.y));
    this.updateDevicePins();
    for (const fv of this.floors) {
      // in the house view room labels would pile up between the floors, in a room its panel names it, and floors stacked below an
      // opened floor carry none
      const hide = fv.to < 0.99 || fv.o < 0.9 || house || this.roomId !== null || this.otherFloor(fv);
      const y = fv.floor.elevation + fv.y + 0.05;
      for (const roomPin of fv.roomPins) {
        const spot = hide ? null : this.screenPoint([roomPin.cx, y, roomPin.cz], 1.1);
        this.labelPlacer.place(roomPin.pin, spot && !spot.off ? centredAt(spot) : null);
      }
      // notes stand on their floor's views (and in a room), not in the house view
      const noNotes = house || fv.o < 0.9 || this.otherFloor(fv);
      for (const { pin, note } of fv.notePins) {
        const spot = noNotes ? null : this.screenPoint([note.x, fv.floor.elevation + fv.y + 1.3, note.z]);
        this.labelPlacer.place(pin, spot && !spot.off ? centredAt(spot) : null);
      }
    }
  }

  /** A floor other than the opened one (shown below it when floors are stacked). */
  private otherFloor(fv: FloorView): boolean {
    return this.floorId !== null && fv.floor.id !== this.floorId;
  }

  private updateDevicePins(): void {
    const house = this.houseView;
    for (const person of this.persons) {
      const pin = this.personPins.get(person.id);
      const fv = this.floorMap.get(person.floorId);
      if (!pin) continue;
      const spot = fv && !house && floorShowsMarkers(fv, this.otherFloor(fv)) ? this.screenPoint([person.x, fv.floor.elevation + fv.y + 0.9, person.z]) : null;
      this.labelPlacer.place(pin, spot && !spot.off ? centredAt(spot) : null);
    }
    for (const marker of this.devices) {
      const pin = this.devicePins.get(marker.id)?.el;
      if (!pin) continue;
      const fv = this.floorMap.get(marker.floorId);
      // device markers belong to the floor and room views; the house view only shows floor labels, except what a camera detects
      // right now, which deserves a pin on the whole house too, and devices outside every room set to "always" (garden valves),
      // which show wherever their floor is drawn
      const alert = marker.id.startsWith("detect:");
      const outdoor = !!marker.full && marker.roomId === null;
      const floorOk = !!fv && (outdoor ? floorShowsOutdoorMarkers(fv) : (!house || alert) && floorShowsMarkers(fv, this.otherFloor(fv)));
      const shown = !!fv && floorOk && marker.pin !== false;
      const spot = shown ? this.screenPoint([marker.x, fv.floor.elevation + fv.y + marker.y, marker.z]) : null;
      if (!spot || spot.off) {
        this.labelPlacer.place(pin, null);
        continue;
      }
      const mode = this.roomId === null ? (marker.full ? "full" : "") : marker.roomId === this.roomId ? "full" : "dim";
      if (this.pinMode.get(pin) !== mode) {
        this.pinMode.set(pin, mode);
        pin.classList.toggle("nf-dev-full", mode === "full");
        pin.classList.toggle("nf-dev-dim", mode === "dim");
      }
      this.labelPlacer.place(pin, centredAt(spot));
    }
  }

  private reportStats(now: number, busy: string[]): void {
    if (!this.statsOn || !this.options.onStats) return;
    const moving = busy.length > 0;
    if (!this.fpsStart) this.fpsStart = now;
    if (this.lastStatsFrame && moving) this.worstFrame = Math.max(this.worstFrame, now - this.lastStatsFrame);
    this.lastStatsFrame = moving ? now : 0;
    this.fpsFrames++;
    const elapsed = now - this.fpsStart;
    if (elapsed > 500 || !moving) {
      const info = this.renderer.info.render;
      this.options.onStats({
        fps: moving ? Math.round((this.fpsFrames * 1000) / elapsed) : 0,
        busy,
        worstMs: Math.round(this.worstFrame),
        calls: info.calls,
        triangles: info.triangles,
        low: this.lowQuality,
        pixelRatio: this.renderer.getPixelRatio(),
      });
      this.fpsFrames = 0;
      this.fpsStart = now;
      this.worstFrame = 0;
    }
  }
}

/** Pattern atlas: 3 × 2 tiles of 1 m each (wood, oak, tiles / carpet, stone, concrete), faint cyan lines. */
function makePatternTexture(): CanvasTexture {
  const T = 256;
  const canvas = document.createElement("canvas");
  canvas.width = T * 3;
  canvas.height = T * 2;
  const ctx = canvas.getContext("2d")!;
  const line = (x0: number, y0: number, x1: number, y1: number, alpha: number) => {
    ctx.strokeStyle = `rgba(55,224,255,${alpha})`;
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
  };
  ctx.lineWidth = 1.5;
  const tile = (col: number, row: number, draw: (ox: number, oy: number) => void) => {
    ctx.save();
    ctx.beginPath();
    ctx.rect(col * T, row * T, T, T);
    ctx.clip();
    draw(col * T, row * T);
    ctx.restore();
  };
  // wood: planks 0.2 m wide along x with staggered joints
  tile(0, 0, (ox, oy) => {
    for (let i = 0; i < 5; i++) {
      const y = oy + (i * T) / 5 + 0.75;
      line(ox, y, ox + T, y, 0.09);
      const j = ox + ((i * 0.37) % 1) * T;
      line(j, y, j, y + T / 5, 0.07);
    }
  });
  // oak: narrower planks along z
  tile(1, 0, (ox, oy) => {
    for (let i = 0; i < 7; i++) {
      const x = ox + (i * T) / 7 + 0.75;
      line(x, oy, x, oy + T, 0.08);
      const j = oy + ((i * 0.53) % 1) * T;
      line(x, j, x + T / 7, j, 0.06);
    }
  });
  // tiles: 0.25 m grid
  tile(2, 0, (ox, oy) => {
    for (let i = 0; i < 4; i++) {
      const p = (i * T) / 4 + 0.75;
      line(ox + p, oy, ox + p, oy + T, 0.1);
      line(ox, oy + p, ox + T, oy + p, 0.1);
    }
  });
  // carpet: plain (also used for slab sides)
  // stone: 0.5 m slabs in a running bond
  tile(1, 1, (ox, oy) => {
    for (let r = 0; r < 2; r++) {
      const y = oy + (r * T) / 2 + 0.75;
      line(ox, y, ox + T, y, 0.09);
      const shift = r ? T / 4 : 0;
      for (const x of [shift, shift + T / 2]) line(ox + x + 0.75, y, ox + x + 0.75, y + T / 2, 0.09);
    }
  });
  // concrete: 1 m grid and a faint speckle
  tile(2, 1, (ox, oy) => {
    line(ox + 0.75, oy, ox + 0.75, oy + T, 0.08);
    line(ox, oy + 0.75, ox + T, oy + 0.75, 0.08);
    ctx.fillStyle = "rgba(55,224,255,0.05)";
    for (let i = 0; i < 90; i++) ctx.fillRect(ox + ((i * 97) % T), oy + ((i * 61 + (i * i) % 37) % T), 2, 2);
  });
  const tex = new CanvasTexture(canvas);
  tex.flipY = false;
  tex.wrapS = ClampToEdgeWrapping;
  tex.wrapT = ClampToEdgeWrapping;
  tex.anisotropy = 4;
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

/** Blind slats: dark stripes with a faint cyan edge, repeated along v. */
function makeBlindTexture(): CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 8;
  canvas.height = 32;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#1a2742";
  ctx.fillRect(0, 0, 8, 32);
  ctx.fillStyle = "#223556";
  ctx.fillRect(0, 4, 8, 14);
  ctx.fillStyle = "rgba(55,224,255,0.45)";
  ctx.fillRect(0, 29, 8, 2);
  const tex = new CanvasTexture(canvas);
  tex.wrapS = RepeatWrapping;
  tex.wrapT = RepeatWrapping;
  tex.colorSpace = SRGBColorSpace;
  return tex;
}




/** Zone per room index: rooms joined by "no wall" (pairs of room ids) share the lowest index among them. */
function lightZonesOf(floor: Floor, open: [string, string][]): number[] {
  const zone = floor.rooms.map((_, i) => i);
  const find = (i: number): number => (zone[i] === i ? i : (zone[i] = find(zone[i])));
  for (const [a, b] of open) {
    const ia = floor.rooms.findIndex((r) => r.id === a);
    const ib = floor.rooms.findIndex((r) => r.id === b);
    if (ia < 0 || ib < 0) continue;
    const ra = find(ia);
    const rb = find(ib);
    if (ra !== rb) zone[Math.max(ra, rb)] = Math.min(ra, rb);
  }
  return zone.map((_, i) => find(i));
}

/** Soft round glow for the halos around lamps. */
function makeHaloTexture(): CanvasTexture {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,0.9)");
  g.addColorStop(0.2, "rgba(255,255,255,0.45)");
  g.addColorStop(0.55, "rgba(255,255,255,0.1)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new CanvasTexture(canvas);
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

/** Ground below the house: a wide 1 m grid that fades out towards the edges. */
function makeGroundTexture(): CanvasTexture {
  const size = 1024;
  const cells = GROUND_CELLS;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.strokeStyle = "rgba(91,124,255,0.16)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= cells; i++) {
    const p = Math.round((i / cells) * size) + 0.5;
    ctx.beginPath();
    ctx.moveTo(p, 0);
    ctx.lineTo(p, size);
    ctx.moveTo(0, p);
    ctx.lineTo(size, p);
    ctx.stroke();
  }
  // fade out radially so the grid has no hard border
  ctx.globalCompositeOperation = "destination-in";
  const g = ctx.createRadialGradient(size / 2, size / 2, size * 0.12, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(0,0,0,1)");
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new CanvasTexture(canvas);
  tex.anisotropy = 4;
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

export { furniturePreview, type PreviewItem } from "./preview.ts";

export function createViewer(host: HTMLElement, options?: ViewerOptions): NextFloorViewer {
  return new NextFloorViewer(host, options);
}

/** Model of a lamp into a buffer (3D view and furniture previews); `H` is the ceiling height. */
export function pushLampModel(
  buf: GeoBuffer,
  d: Pick<DeviceMarker, "x" | "z" | "size" | "base" | "rotation" | "variant" | "roll" | "upright" | "rise"> & { lamp: LampModel; phase?: number },
  H: number,
  shadeCol: number,
): void {
  const [w, dd, h] = d.size ?? LAMP_SIZE[d.lamp];
  const base = d.base ?? 0;
  const ang = (d.rotation ?? 0) * DEG;
  const ca = Math.cos(ang);
  const sa = Math.sin(ang);
  const L = (x: number, z: number): [number, number] => [d.x + x * ca - z * sa, d.z + x * sa + z * ca];
  const cyl = (r: number, y0: number, y1: number, side: number, top: number, n = 14) => {
    const poly: [number, number][] = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      poly.push([d.x + Math.cos(a) * r, d.z + Math.sin(a) * r]);
    }
    pushPrism(buf, poly, y0, y1, side, top, { aoFrom: 0, bottom: true });
  };
  const box = (x0: number, x1: number, z0: number, z1: number, y0: number, y1: number, side: number, top = side) =>
    pushPrism(buf, [L(x0, z0), L(x1, z0), L(x1, z1), L(x0, z1)], y0, y1, side, top, { aoFrom: 0, bottom: true });
  const r = Math.max(0.05, Math.min(w, dd) / 2);
  switch (d.lamp) {
    case "ceiling":
      cyl(r * 0.25, H - 0.04, H, LAMP_BODY, LAMP_BODY, 8);
      cyl(r, H - Math.max(0.04, h) - 0.035, H - 0.04, shadeCol, shadeCol);
      break;
    case "pendant": {
      const bottom = Math.max(0.4, H - h);
      cyl(0.06, H - 0.02, H, LAMP_BODY, LAMP_BODY, 8);
      const shapeTop = d.variant === "globe" ? bottom + 2 * r : d.variant === "drum" ? bottom + 0.24 : bottom + 0.2;
      cyl(0.008, shapeTop, H - 0.02, LAMP_BODY, LAMP_BODY, 5);
      if (d.variant === "globe") {
        // stacked rings approximate a ball
        const n = 7;
        for (let i = 0; i < n; i++) {
          const a0 = Math.PI * (i / n);
          const a1 = Math.PI * ((i + 1) / n);
          cyl(r * Math.max(0.2, Math.sin((a0 + a1) / 2)), bottom + r - r * Math.cos(a0), bottom + r - r * Math.cos(a1), shadeCol, shadeCol, 14);
        }
      } else if (d.variant === "cone") {
        const n = 4;
        for (let i = 0; i < n; i++) cyl(r * (0.25 + (0.75 * (n - i)) / n), bottom + 0.06 * i, bottom + 0.06 * (i + 1), shadeCol, shadeCol, 16);
      } else if (d.variant === "drum") {
        cyl(r, bottom, bottom + 0.24, shadeCol, shadeCol, 18);
      } else {
        cyl(r * 0.35, bottom + 0.14, bottom + 0.2, shadeCol, shadeCol, 12);
        cyl(r, bottom, bottom + 0.14, shadeCol, shadeCol, 16);
      }
      break;
    }
    case "fan": {
      // canopy at the ceiling, a downrod when it hangs lower, the motor with the blades and the light kit underneath
      const bottom = Math.max(0.05, H - Math.max(0.22, h));
      const motorTop = bottom + 0.16;
      cyl(0.07, H - 0.05, H, LAMP_BODY, LAMP_BODY, 10);
      if (motorTop < H - 0.05) cyl(0.014, motorTop, H - 0.05, LAMP_BODY, LAMP_BODY, 6);
      cyl(0.11, bottom + 0.06, motorTop, LAMP_BODY, LAMP_BODY, 14);
      cyl(0.1, bottom, bottom + 0.06, shadeCol, shadeCol, 14);
      const reach = Math.max(0.2, Math.min(w, dd) / 2);
      const bladeY = bottom + 0.1;
      for (let i = 0; i < FAN_BLADES; i++) {
        const a = ((d.phase ?? 0) + i * FAN_SPACING) * DEG;
        const [c, s] = [Math.cos(a), Math.sin(a)];
        // a blade: narrow at the motor, wider towards its tip
        const at = (along: number, across: number): [number, number] => [d.x + along * c - across * s, d.z + along * s + across * c];
        pushPrism(buf, [at(0.1, -0.035), at(reach, -0.075), at(reach, 0.075), at(0.1, 0.035)], bladeY, bladeY + 0.012, FAN_BLADE, FAN_BLADE, { aoFrom: 0, bottom: true });
      }
      break;
    }
    case "downlight":
      // flush ring in the ceiling with a glowing lens
      cyl(r, H - 0.012, H, LAMP_BODY, LAMP_BODY, 12);
      cyl(r * 0.7, H - 0.02, H - 0.012, shadeCol, shadeCol, 12);
      break;
    case "spot":
      cyl(r * 0.6, H - 0.02, H, LAMP_BODY, LAMP_BODY, 10);
      cyl(r, H - Math.max(0.06, h), H - 0.02, LAMP_BODY, LAMP_BODY, 12);
      cyl(r * 0.8, H - Math.max(0.06, h) - 0.008, H - Math.max(0.06, h), shadeCol, shadeCol, 12);
      break;
    case "panel":
      box(-w / 2, w / 2, -dd / 2, dd / 2, H - Math.max(0.015, h), H, LAMP_BODY, LAMP_BODY);
      box(-w / 2 + 0.02, w / 2 - 0.02, -dd / 2 + 0.02, dd / 2 - 0.02, H - Math.max(0.015, h) - 0.004, H - Math.max(0.015, h), shadeCol);
      break;
    case "uplight":
      cyl(Math.max(0.1, r * 0.6), base, base + 0.03, LAMP_BODY, LAMP_BODY);
      cyl(0.014, base + 0.03, base + h - 0.12, LAMP_BODY, LAMP_BODY, 6);
      // bowl open to the top: dark outside, glowing rim
      cyl(r, base + h - 0.14, base + h - 0.02, LAMP_BODY, LAMP_BODY);
      cyl(r * 0.92, base + h - 0.02, base + h, shadeCol, shadeCol);
      break;
    case "bollard":
      // path light: post with a glowing band under its cap
      cyl(r, base, base + h - 0.14, LAMP_BODY, LAMP_BODY, 10);
      cyl(r * 0.9, base + h - 0.14, base + h - 0.03, shadeCol, shadeCol, 10);
      cyl(r * 1.1, base + h - 0.03, base + h, LAMP_BODY, LAMP_BODY, 10);
      break;
    case "garden":
      // spike in the ground, head pointing up
      cyl(0.012, base, base + h - 0.08, LAMP_BODY, LAMP_BODY, 5);
      cyl(r, base + h - 0.08, base + h - 0.01, LAMP_BODY, LAMP_BODY, 10);
      cyl(r * 0.8, base + h - 0.01, base + h, shadeCol, shadeCol, 10);
      break;
    case "floor":
      cyl(Math.max(0.1, r * 0.7), base, base + 0.03, LAMP_BODY, LAMP_BODY);
      cyl(0.014, base + 0.03, base + h - 0.28, LAMP_BODY, LAMP_BODY, 6);
      cyl(r, base + h - 0.3, base + h, shadeCol, shadeCol);
      break;
    case "table":
      cyl(Math.max(0.05, r * 0.55), base, base + 0.03, LAMP_BODY, LAMP_BODY);
      cyl(0.012, base + 0.03, base + h - 0.16, LAMP_BODY, LAMP_BODY, 6);
      cyl(r, base + h - 0.18, base + h, shadeCol, shadeCol);
      break;
    case "wall": {
      // plate on the wall (back at -z) and a glowing shade in front of it
      const y0 = d.base ?? WALL_LAMP_Y;
      box(-w / 2 + 0.03, w / 2 - 0.03, -dd / 2, -dd / 2 + 0.02, y0, y0 + h, LAMP_BODY);
      box(-w / 2, w / 2, -dd / 2 + 0.02, dd / 2, y0 + h * 0.15, y0 + h * 0.85, shadeCol);
      break;
    }
    case "strip": {
      // a thin bar along the wall: under the ceiling (cove light) or at its mount height; tilted about its
      // length it lies against a slope, standing upright it climbs from its mount height
      const t = Math.max(0.02, h);
      const y1 = d.base != null ? d.base + t : H - 0.04;
      const rise = d.upright ? 0 : (d.rise ?? 0) * DEG;
      if (!d.roll && !d.upright && !rise) {
        box(-w / 2, w / 2, -dd / 2, dd / 2, y1 - t, y1, shadeCol);
        break;
      }
      const roll = (d.roll ?? 0) * DEG;
      const cr = Math.cos(roll);
      const sr = Math.sin(roll);
      const [ce, se] = [Math.cos(rise), Math.sin(rise)];
      const cy = d.upright ? base + w / 2 : y1 - t / 2 + stripRiseLift(d.base, w, d.rise);
      // local: x along the length, y through the thickness, z across the depth
      const P = (lx: number, ly: number, lz: number): number[] => {
        let x = lx;
        let y = ly * cr - lz * sr;
        const z = ly * sr + lz * cr;
        if (d.upright) [x, y] = [-y, x];
        else if (rise) [x, y] = [x * ce - y * se, x * se + y * ce];
        return [d.x + x * ca - z * sa, cy + y, d.z + x * sa + z * ca];
      };
      const c = [P(-w / 2, -t / 2, -dd / 2), P(w / 2, -t / 2, -dd / 2), P(w / 2, -t / 2, dd / 2), P(-w / 2, -t / 2, dd / 2), P(-w / 2, t / 2, -dd / 2), P(w / 2, t / 2, -dd / 2), P(w / 2, t / 2, dd / 2), P(-w / 2, t / 2, dd / 2)];
      const col = new Color(shadeCol);
      const centre = [d.x, cy, d.z];
      const quad = (i: number, j: number, k: number, l: number) => {
        // wound so the face looks outward
        const [a, b, e] = [c[i], c[j], c[k]];
        const n = [(b[1] - a[1]) * (e[2] - a[2]) - (b[2] - a[2]) * (e[1] - a[1]), (b[2] - a[2]) * (e[0] - a[0]) - (b[0] - a[0]) * (e[2] - a[2]), (b[0] - a[0]) * (e[1] - a[1]) - (b[1] - a[1]) * (e[0] - a[0])];
        const out = [a[0] - centre[0], a[1] - centre[1], a[2] - centre[2]];
        const flip = n[0] * out[0] + n[1] * out[1] + n[2] * out[2] < 0;
        const [p, q, r, s] = flip ? [c[l], c[k], c[j], c[i]] : [c[i], c[j], c[k], c[l]];
        buf.tri(p, q, r, col, col, col);
        buf.tri(p, r, s, col, col, col);
      };
      quad(0, 1, 2, 3);
      quad(4, 5, 6, 7);
      quad(0, 1, 5, 4);
      quad(1, 2, 6, 5);
      quad(2, 3, 7, 6);
      quad(3, 0, 4, 7);
      break;
    }
  }
}
