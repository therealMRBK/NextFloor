// Lit wrapper around the lazily loaded 3D viewer.

import { changeMoments, hassAt, loadHistory, replayable, type History } from "../live/time-travel.ts";
import { sunPosition, todayAt } from "../sun-position.ts";
import { dayCurves, statesRead, type DayCurves } from "../live/day-curves.ts";
import { backdropStyle } from "../backdrop.ts";
import { css, html, LitElement, nothing, svg, type PropertyValues } from "lit";
import {
  type CarState,
  roomClimateValue,
  areaEntities,
  entityName,
  furnitureEntities,
  isActive,
  isCooling,
  isMotionSensor,
  coverReaches,
  deviceSiblings,
  hasPost,
  minutesText,
  pickupDays,
  plantThirst,
  remainingMinutes,
  gangGlows,
  gangEntities,
  isUnavailable,
  kindOf,
  markerKind,
  type MarkerKind,
  lightGlow,
  openingEntities,
  openingState,
  isUnlocked,
  TOGGLE_KINDS,
  type FurnitureLinks,
  type OpeningEntities,
  confirmEntities,
  coolingTemps,
  fridgeDoors,
  hasScreen,
  fromCelsius,
  tempUnit,
  robotRoom,
  robotRoomSensor,
  isStatusSensor,
  floorControls,
  favoriteCall,
  runButton,
} from "../devices.ts";
import { liveScreens, liveSprays, readSun, roofWindowStates, skyLightness } from "./view3d/live-inputs.ts";
import { watchedEntities } from "./view3d/watch-list.ts";
import { ownTaps } from "./view3d/own-taps.ts";
import { lightAnimation, lightEffectSource } from "../light-effects.ts";
import type { PlacementInfo } from "../plugins/api.ts";
import { onPluginsChanged, pluginTap } from "../plugins/registry.ts";
import { alertColor, alertSources, alertText, contactsPending, findAlerts, QUIET_ALERTS, type Alert, type AlertSources } from "../alerts.ts";
import { iconPath, iconSvg, mdiIcon } from "../icons.ts";
import { deviceSensors, energySummary, findConsumers, readPower, subMeterIds, subMeterLabel, type Consumer, type EnergySummary } from "../energy.ts";
import { mapCredit, mapShown } from "../map-geo.ts";
import { type CustomButton, type EntityRef } from "../model.ts";

import { STAGE, type Theme } from "../themes.ts";
import { HEAT_SCALES, heatColor, heatGradient, roomValues, type HeatMode } from "../heatmap.ts";
import { furnitureName } from "../furniture-names.ts";
import { formatNumber, translate, type I18nKey } from "../i18n.ts";
import { getPacks, hasMovingParts, householdKind, mountBase, packItem, packsVersion } from "../packs.ts";
import { parkedVehicle, parkedVehicles, vehicleFurniture } from "../parking.ts";
import { weatherEntity } from "../weather.ts";
import { chosenEffects, readSkyWeather, withDensity } from "../live/sky-weather.ts";
import { energyPicture, houseHub, type EnergyPicture } from "../live/energy-flow.ts";
import { renderLhCards, liveCardStyles, unstackLhCards, type LiveCard } from "../live/cards.ts";
import { readCar, type CarInfo } from "../live/car.ts";
import { mediaNow, multiroom, type MediaNow } from "../live/media.ts";
import { SHOW_PRESENCE } from "../flags.ts";
import { searchIndex, searchItems, type SearchItem } from "../search.ts";
import { coverPositionable, lightAbilities } from "./quick-menu.ts";
import "./quick-menu.ts";
import { load3d } from "../load3d.ts";
import { scaleGlow, buildMarkers, openMoreInfo, stateText, toggleEntity, withPluginPatch } from "../markers.ts";
import { fanSpin } from "../entities/fans.ts";
import { fixtureGlow } from "../entities/kinds.ts";
import { furnitureShown, hiddenFurniture, withoutHidden } from "../entities/visibility.ts";
import { pictureUrl } from "../entities/pictures.ts";
import { fetchImage } from "../api.ts";
import { ceilingOf, furnitureFootprint, isLamp, LAMP_MODEL, outdoorGround, pointInPolygon, surfaceHeight, type Building, type Furniture, type StartView } from "../model.ts";
import { floorCounts, floorInfoText, personsInRooms } from "../presence.ts";
import { controls, tokens } from "../styles.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";
import { claim, forThisScreen, playAnnouncement, showFor, subscribeAnnouncements, type Announcement } from "../live/announce.ts";
import type { DeviceMarker, LivePictureInput, NextFloorViewer, FloorStack, RobotInfo, Quality, ScreenState, SurfaceGrab, ViewerStats, WallMode } from "../viewer/viewer3d.ts";

/** Which HTML markers are shown: none, only what has no 3D object or shows a value, or all. */
export type MarkerMode = "none" | "important" | "all";



/** Where the clock sits in the view. */
export type ClockCorner = "top_left" | "top_right" | "bottom_left" | "bottom_right";

const LOCK_KEY = "nextfloor.lock3d";


export class NfView3d extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    floorId: { attribute: false },
    roomId: { attribute: false },
    wallMode: { attribute: false },
    solidWalls: { attribute: false },
    glassWalls: { attribute: false },
    explode: { type: Boolean },
    keepRoof: { attribute: false },
    markerMode: { attribute: false },
    markerNames: { attribute: false },
    markersOutside: { attribute: false },
    tapInRoom: { type: Boolean },
    heatMode: { attribute: false },
    theme: { attribute: false },
    accent: { attribute: false },
    packs: { attribute: false },
    showEnergy: { attribute: false },
    flows: { attribute: false },
    holograms: { attribute: false },
    furnish: { type: Boolean },
    surfaceGrab: { attribute: false },
    furnishTypes: { attribute: false },
    weather: { type: Boolean },
    weatherEntityId: { attribute: false },
    weatherDensity: { attribute: false },
    timeOfDay: { attribute: false },
    selectedFurniture: { attribute: false },
    selectedDevice: { attribute: false },
    _sky: { state: true },
    quality: { attribute: false },
    showStats: { type: Boolean },
    _stats: { state: true },
    _error: { state: true },
    _energy: { state: true },
    _flows: { state: true },
    _liveEnergy: { state: true },
    _liveCards: { state: true },
    _liveCardOn: { state: true },
    _swipe: { state: true },
    _menu: { state: true },
    _pluginWindow: { state: true },
    _plate: { state: true },
    _blend: { state: true },
    _wallBig: { state: true },
    _find: { state: true },
    _central: { state: true },
    _thumbsCompact: { state: true },
    _armed: { state: true },
    central: { attribute: false },
    buttons: { attribute: false },
    _thumbs: { state: true },
    floorThumbs: { attribute: false },
    clean: { attribute: false },
    cleanButton: { attribute: false },
    clock: { attribute: false },
    lockButton: { attribute: false },
    walkButton: { attribute: false },
    travelButton: { attribute: false },
    _travel: { state: true },
    _walking: { state: true },
    _stick: { state: true },
    _locked: { state: true },
    _now: { state: true },
    roomLabels: { attribute: false },
    floorStack: { attribute: false },
    panelOpen: { attribute: false },
    alerts: { attribute: false },
    alertJump: { attribute: false },
    scenes: { attribute: false },
    announcements: { attribute: false },
    sensorBar: { attribute: false },
    screenName: { attribute: false },
    _announcement: { state: true },
    dimmed: { attribute: false },
    autoOrbit: { attribute: false },
    startView: { attribute: false },
    _low: { state: true },
    _narrowStage: { state: true },
    _alerts: { state: true },
    _sceneFired: { state: true },
  };

  declare hass: HomeAssistant;
  /** This view is a screen announcements show and speak on (the panel's 3D view and cards, not the editor's). */
  declare announcements: boolean;
  /** The plan's own sensors at the top (cards can switch them off). */
  declare sensorBar: boolean;
  /** The name of this screen, for announcements meant for some screens only. */
  declare screenName: string | null;
  /** The announcement on screen now, and when it goes. */
  private declare _announcement: { message: string; until: number } | null;
  private stopAnnouncements: (() => void) | null = null;
  private announceTimer: ReturnType<typeof setTimeout> | undefined;
  declare building: Building | null;
  declare floorId: string | null;
  declare roomId: string | null;
  declare wallMode: WallMode;
  /** Solid walls in their paint instead of glass. */
  declare solidWalls: boolean;
  /** How opaque the see-through walls are in % (null: the usual 20 %). */
  declare glassWalls: number | null;
  declare explode: boolean;
  /** The roof stays while zooming in (no lift, no fade). */
  declare keepRoof: boolean;
  declare markerMode: MarkerMode;
  /** Card option marker_names: every device with an own name shows it under its pin. */
  declare markerNames: boolean;
  /** Card option markers_outside: outside the opened room only these kinds of markers show (null: as in the room). */
  declare markersOutside: MarkerKind[] | null;
  /** Card option tap_in_room: a tap switches a device only in the opened room, elsewhere it opens the floor or room. */
  declare tapInRoom: boolean;
  declare heatMode: HeatMode;
  /** Imported furniture packs (a new list rebuilds pack furniture). */
  declare packs: unknown;
  declare theme: Theme;
  /** Accent colour for the neon look ("#rrggbb"), null for the stock cyan. */
  declare accent: string | null;
  /** Show the energy values at the top (cards can switch them off). */
  declare showEnergy: boolean;
  /** Power flow lines fixed on or off (cards); null: the viewer's own toggle decides. */
  declare flows: boolean | null;
  /** The live cards (house, car, media) always on or off (card option "holograms"); null = the bar's own switch. */
  declare holograms: boolean | null;

  private get liveCardsOn(): boolean {
    return this.holograms ?? this._liveCardOn;
  }
  /** Furnishing: furniture and lamps are dragged in 3D (admins, panel only). */
  declare furnish: boolean;
  /** Editor: moves solar fields and roof windows with rays from the camera (null: none). */
  declare surfaceGrab: SurfaceGrab | null;
  /** Editor: only these furniture types can be moved in 3D (null: all). */
  declare furnishTypes: readonly string[] | null;
  /** Weather outside: rain, snow, fog and clouds from a weather entity, sun and moon from sun.sun. */
  declare weather: boolean;
  /** The weather entity to use (null: the first one). */
  declare weatherEntityId: string | null;
  /** How much of the rain, hail and snow falls (1: all of it). */
  declare weatherDensity: number;
  /** Hours of today whose sun the view shows instead of the real one (the time-of-day slider); null: the real sun. */
  declare timeOfDay: number | null;
  /** A lightning flash lights the stage for a moment. */
  private cloud = 0;
  /** Entities that ask before a tap switches them. */
  private confirmSet = new Set<string>();
  declare selectedFurniture: string | null;
  declare selectedDevice: string | null;
  /** How much daylight there is (0 = night, 1 = day), from sun.sun. */
  private declare _sky: number;
  declare quality: Quality;
  declare showStats: boolean;
  private declare _stats: ViewerStats | null;
  private declare _error: string | null;
  private declare _energy: EnergySummary | null;
  /** The start view last handed to the viewer (JSON), to notice a new one. */
  private shownStartView: string | undefined;
  /** A running swipe on a lamp or blind: the value shown next to the finger. */
  private declare _swipe: { entity: string; kind: "light" | "cover" | "fan"; start: number; value: number; x: number; y: number } | null;
  /** Quick menu at a device (long press). */
  private declare _menu: { entity: string; x: number; y: number; car?: CarState } | null;
  /** A window a plugin opened in the lower right corner (a camera's live picture). */
  private declare _pluginWindow: { node: Node; title: string } | null;
  /** Where each placed device stands, for plugins that handle its taps. */
  private placementInfo = new Map<string, PlacementInfo>();
  /** The buttons of a tapped switch plate or socket to pick from. */
  private declare _plate: { ids: string[]; x: number; y: number } | null;
  /** Looking through a camera: its live picture lies over the 3D view; `back` is the view to return to. */
  /** Camera wall: the camera shown big (null: all tiles). */
  private declare _wallBig: string | null;
  /** The look-through was started from the camera wall: going back reopens the wall. */
  /** Camera wall, big picture: Home Assistant's own stream player (a picture-entity card in live view), one at a time. */
  private live: { id: string; el: (HTMLElement & { hass?: unknown }) | null; failed: boolean } | null = null;
  /** How strongly the camera picture covers the 3D view (0 = only 3D, 1 = only the picture). */
  private declare _blend: number;
  /** Floor switcher with small pictures of the floors (panel and card; off with a fixed floor). */
  declare floorThumbs: boolean;
  /** Clean view: only the stage – no energy values, thumbnails, legend, scene chips or search (the host hides its own bars). */
  declare clean: boolean;
  /** Show the eye button that toggles the clean view (the host listens for "clean-toggle"). */
  declare cleanButton: boolean;
  /** A clock in a corner of the view (null: none). */
  declare clock: ClockCorner | null;
  /** Show the 🔒 button that locks the camera (a wall tablet nobody should turn by accident). */
  declare lockButton: boolean;
  /** Show the 🚶 button that walks through the house at eye level. */
  declare walkButton: boolean;
  /** Show the ⏪ button that replays the last day or week. */
  declare travelButton: boolean;
  /** Time travel: the loaded history, its span, the moment shown, and whether it plays (null: live). */
  private declare _travel: { history: History; from: number; to: number; t: number; playing: boolean; speed: number; hours: number; moments: number[]; loading: boolean } | null;
  private travelTimer: ReturnType<typeof setInterval> | undefined;
  /** The house card's day curves and when they were last loaded. */
  private dayCurves: DayCurves | null = null;
  private curvesAt = 0;
  private declare _walking: boolean;
  /** Where the touch stick's knob is (-1 … 1 each way) while a finger holds it. */
  private declare _stick: [number, number] | null;
  /** The camera is locked on this device. */
  private declare _locked: boolean;
  /** The time the clock shows, refreshed every few seconds while a clock is shown. */
  private declare _now: number;
  private clockTimer: ReturnType<typeof setInterval> | undefined;
  /** Room names in 3D (cards can switch them off). */
  declare roomLabels: boolean;
  /** Floors below an opened floor: dimmed, stacked (the house up to it) or hidden. */
  declare floorStack: FloorStack;
  private declare _thumbs: { floorId: string; url: string }[];
  /** The viewer runs at the tablet level: heavy CSS effects are left out as well. */
  private declare _low: boolean;
  /** A room panel (or sheet) is open next to the view: on small screens the view's own controls hide. */
  declare panelOpen: boolean;
  /** The stage is narrower than 700 px (smaller floor pictures, phone layout). */
  private declare _narrowStage: boolean;
  private stopPlugins: (() => void) | null = null;
  private pluginsDirty = false;
  private resizeObs: ResizeObserver | null = null;
  /** Warnings (smoke, water, alarm, window in the rain): pulsing rooms and a banner; jump to new ones. */
  declare alerts: boolean;
  declare alertJump: boolean;
  private declare _alerts: Alert[];
  private alertSrc: AlertSources | null = null;
  private alertTimer: ReturnType<typeof setInterval> | undefined;
  /** Looks again at contacts that went unavailable, until their grace time has passed. */
  private contactTimer: ReturnType<typeof setInterval> | undefined;
  private seenAlerts = new Set<string>();
  /** A room briefly lit up after a double tap switched its lights. */
  private roomFlash: { roomId: string; until: number } | null = null;
  /** Scene and script chips of the selected room. */
  declare scenes: boolean;
  private declare _sceneFired: string | null;
  /** Night (kiosk): no effects, cables or floor pictures. */
  declare dimmed: boolean;
  /** Screensaver: the view turns slowly by itself. */
  declare autoOrbit: boolean;
  /** A start view of the card's own (YAML `start_view`); else the one remembered in the editor. */
  declare startView: StartView | null;
  /** Search index (rooms and devices), built when the search opens and reused while it is open. */
  private findIndex: SearchItem[] | null = null;
  /** Room colours (heatmap) as last sent to the viewer. */
  private tintSig = "";
  private thumbTimer: ReturnType<typeof setTimeout> | undefined;
  /** What the floor pictures show of the devices (lamps, blinds): they are drawn again when it changes. */
  private thumbSig = "";
  private thumbsAt = 0;
  /** Search ("where is …?"): null = closed. */
  private declare _find: string | null;
  /** Floor pictures folded to plain floor buttons (D177), remembered per device. */
  private declare _thumbsCompact: boolean;
  /** The central menu (all lights / blinds of the floor or house, favourites) is open (#145). */
  private declare _central: boolean;
  /** A house-wide action waiting for its second tap ("sure?"), with the time it was armed. */
  private declare _armed: string | null;
  private armTimer: ReturnType<typeof setTimeout> | undefined;
  /** Show the star with the central menu (card option central; default on). */
  declare central: boolean;
  /** Own buttons from the card's YAML (replace the house's buttons when set). */
  declare buttons: CustomButton[] | null;
  private swipeSent = 0;
  private swipeTimer: ReturnType<typeof setTimeout> | undefined;
  /** Energy cables from the meter to the consumers (off unless switched on; kept per browser). */
  private declare _flows: boolean;
  /** NextFloor's energy picture (flows, house balance) and the floating cards with their plan points. */
  private declare _liveEnergy: EnergyPicture | null;
  private declare _liveCards: LiveCard[];
  /** The floating cards show (the viewer's choice, kept in the browser). */
  private declare _liveCardOn: boolean;

  private viewer: NextFloorViewer | null = null;
  private starting = false;
  /** States of the placed entities as last sent to the viewer. */
  private shownStates = new Map<string, HassEntity | undefined>();
  private shownPacks = -1;
  /** Entities of each door and window, and the registry they were matched with. */
  private openingLinks: Map<string, OpeningEntities> | null = null;
  private linkedRegistry: HomeAssistant["entities"] | undefined;
  /** Entities of electric furniture (TV, fridge, …). */
  private furnitureLinks = new Map<string, FurnitureLinks>();
  /** Pins of items with their own tap action (pin id → item id): a tap on them runs the action. */
  private tapPins = new Map<string, string>();
  /** Room values of the current heatmap (for the legend). */
  private heatValues = new Map<string, number>();
  /** Entities whose state changes redraw markers, cables, people and floor labels. */
  private watched: string[] = [];
  /** Screens showing a camera: their snapshots are refreshed every few seconds (a changing query parameter). */
  /** The look through a camera itself opens this floor: that floor change must not end it. */

  constructor() {
    super();
    this.building = null;
    this.floorId = null;
    this.roomId = null;
    this.wallMode = "auto";
    this.solidWalls = false;
    this.glassWalls = null;
    this.explode = true;
    this.keepRoof = false;
    this.markerMode = "important";
    this.markersOutside = null;
    this.tapInRoom = false;
    this.heatMode = "none";
    this.theme = "neon";
    this.accent = null;
    this.furnish = false;
    this.weather = true;
    this.weatherEntityId = null;
    this.weatherDensity = 1;
    this.showEnergy = true;
    this.flows = null;
    this._liveEnergy = null;
    this._liveCards = [];
    this._liveCardOn = localStorage.getItem("nextfloor.cards") !== "0";
    this.selectedFurniture = null;
    this.selectedDevice = null;
    this._sky = 0;
    this.quality = "auto";
    this.showStats = false;
    this._stats = null;
    this._error = null;
    this._energy = null;
    this._swipe = null;
    this._menu = null;
    this._pluginWindow = null;
    this._plate = null;
    this._wallBig = null;
    this._blend = 0.6;
    this._find = null;
    this._central = false;
    try {
      this._thumbsCompact = localStorage.getItem("nextfloor.thumbs_compact") === "1";
    } catch {
      this._thumbsCompact = false;
    }
    this._armed = null;
    this.central = true;
    this.buttons = null;
    this._thumbs = [];
    this.floorThumbs = true;
    this.clean = false;
    this.cleanButton = false;
    this.clock = null;
    this.lockButton = false;
    this.walkButton = false;
    this.travelButton = false;
    this._travel = null;
    this._walking = false;
    this._stick = null;
    this._now = Date.now();
    this._locked = (() => {
      try {
        return localStorage.getItem(LOCK_KEY) === "1";
      } catch {
        return false;
      }
    })();
    this.roomLabels = true;
    this.floorStack = "dim";
    this._low = false;
    this.panelOpen = false;
    this._narrowStage = false;
    this.alerts = true;
    this.alertJump = false;
    this.announcements = false;
    this.sensorBar = true;
    this.screenName = null;
    this._announcement = null;
    this._alerts = [];
    this.scenes = true;
    this._sceneFired = null;
    this.dimmed = false;
    this.autoOrbit = false;
    this.startView = null;
    this.holograms = null;
    try {
      this._flows = localStorage.getItem("nextfloor.flows") === "1";
    } catch {
      this._flows = false;
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    // a plugin that registers later changes markers: rebuild them in the next update (through updated(),
    // like any other forced change), not only on the next state change
    this.stopPlugins = onPluginsChanged(() => {
      this.pluginsDirty = true;
      this.requestUpdate();
    });
    if (this.hasUpdated) {
      this.observeStage();
      if (!this.viewer) void this.start();
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.stopPlugins?.();
    this.stopPlugins = null;
    this.listenToAnnouncements(false);
    this.resizeObs?.disconnect();
    this.resizeObs = null;
    clearInterval(this.alertTimer);
    this.alertTimer = undefined;
    clearInterval(this.contactTimer);
    this.contactTimer = undefined;
    clearInterval(this.clockTimer);
    this.clockTimer = undefined;
    clearInterval(this.travelTimer);
    this.travelTimer = undefined;
    this.live = null;
    this.viewer?.dispose();
    this.viewer = null;
  }

  protected firstUpdated(): void {
    this.observeStage();
    void this.start();
  }

  /** Follows the stage's width: the floor pictures shrink on narrow screens. */
  private observeStage(): void {
    const stage = this.renderRoot.querySelector(".nf-stage");
    if (!stage || this.resizeObs || typeof ResizeObserver !== "function") return;
    this.resizeObs = new ResizeObserver((entries) => {
      const narrow = (entries[0]?.contentRect.width ?? 1000) < 700;
      if (narrow === this._narrowStage) return;
      this._narrowStage = narrow;
      this.scheduleThumbs();
    });
    this.resizeObs.observe(stage);
  }

  private async start(): Promise<void> {
    if (this.starting || this.viewer) return;
    this.starting = true;
    try {
      const mod = await load3d();
      if (!this.isConnected) return;
      const host = this.renderRoot.querySelector(".nf-stage") as HTMLElement;
      // a tap into the 3D view closes the star menu, like any menu (#220)
      host.addEventListener("pointerdown", (e) => {
        if (this._central && !(e.target as Element | null)?.closest?.(".nf-central, .nf-central-btn")) this._central = false;
      });
      this.viewer = mod.createViewer(host, {
        quality: this.quality,
        explode: this.explode,
        onRoomTap: (floorId, roomId) => this.fire("room-tap", { floorId, roomId }),
        onFloorTap: (floorId) => this.fire("floor-tap", { floorId }),
        floorInfo: (floor) =>
          floor.rooms.length === 1 ? translate(this.hass, "floor_rooms_one") : translate(this.hass, "floor_rooms", { n: floor.rooms.length }),
        onBack: () => this.fire("back", {}),
        onDeviceTap: (id, x, y) => this.onDeviceTap(id, x, y),
        onDeviceHold: (id, x, y) => this.onDeviceHold(id, x, y),
        onRoomDoubleTap: (floorId, roomId) => this.onRoomDoubleTap(floorId, roomId),
        onDeviceSwipe: (id, phase, dy, x, y) => this.onDeviceSwipe(id, phase, dy, x, y),
        onFurnitureSelect: (id) => this.fire("furniture-select", { id }),
        onFurnitureMove: (id, x, z) => this.fire("furniture-move", { id, x, z }),
        onDeviceSelect: (id) => this.fire("device-select", { id }),
        onDeviceMove: (id, x, z) => this.fire("device-move", { id, x, z }),
        // stats can be switched on at any time; they only cause updates while shown
        onStats: (s) => {
          if (this.showStats) this._stats = s;
        },
      });
      this.viewer.setWallMode(this.wallMode);
      this.viewer.setPaintedWalls(this.solidWalls);
      this.viewer.setGlassWalls((this.glassWalls ?? 20) / 100);
      this.viewer.setTheme(this.theme);
      this.viewer.setAccent(this.accent ?? null);
      this.viewer.setNavigationLocked(this._locked);
      this.viewer.setFurnishMode(this.furnish);
      this.viewer.setTapInRoom(this.tapInRoom);
      this.viewer.setSurfaceGrab(this.surfaceGrab ?? null);
      this.viewer.setFurnishTypes(this.furnishTypes ?? null);
      this.viewer.setFloorStack(this.floorStack);
      this.viewer.setStats(this.showStats);
      this.viewer.setAutoOrbit(this.autoOrbit ? 0.06 : 0);
      this.viewer.setKeepRoof(this.keepRoof);
      this._low = this.viewer.low;
      // owned 3D models (cars and the like) come from the user's Home Assistant, with the user's login
      this.viewer.setMeshSource((id) =>
        this.hass?.fetchWithAuth ? this.hass.fetchWithAuth(`/api/nextfloor/mesh/${encodeURIComponent(id)}`).then((r) => (r.ok ? r.arrayBuffer() : null)) : Promise.resolve(null),
      );
      this.viewer.setPacks([...getPacks()]);
      this.shownPacks = packsVersion();
      if (this.building) {
        this.shownStartView = JSON.stringify(this.startViewOf());
        this.viewer.setStartView(this.startViewOf());
        this.viewer.setBuilding(this.shownBuilding(this.hass));
        this.viewer.setMap(this.building.settings.map, this.building.settings.north ?? 0);
      }
      this.scheduleThumbs();
      this.syncDevices(true);
      this.viewer.setFloor(this.floorId, false);
      if (this.roomId) this.viewer.selectRoom(this.roomId);
    } catch (err) {
      this._error = String(err);
    } finally {
      this.starting = false;
    }
  }

  protected updated(changed: PropertyValues): void {
    if (changed.has("announcements") || (changed.has("hass") && this.announcements && !this.stopAnnouncements)) this.listenToAnnouncements(this.announcements && !!this.hass && this.isConnected);
    if (changed.has("hass") && this.live?.el) this.live.el.hass = this.hass;
    // a plugin window's content (a Home Assistant card) gets every new hass
    const windowNode = this._pluginWindow?.node as (Node & { hass?: unknown }) | undefined;
    if (changed.has("hass") && windowNode && "hass" in windowNode) windowNode.hass = this.hass;
    // the star menu closes when a room or another floor is chosen (#220)
    if (this._central && ((changed.has("roomId") && changed.get("roomId") !== undefined) || (changed.has("floorId") && changed.get("floorId") !== undefined))) this._central = false;
    const v = this.viewer;
    if (!v) return;
    // packs arrive with the building (or after an import): the viewer rebuilds pack furniture
    if (this.shownPacks !== packsVersion()) {
      this.shownPacks = packsVersion();
      v.setPacks([...getPacks()]);
      // vehicles in parking spots come from packs too: look them up again now that the packs are here
      if (this.hass && this.building) v.setParked(parkedVehicles(this.hass, this.building));
      // a feature pack may have arrived with them (Energiefluss): the cables and modules follow
      this.syncDevices(true);
    }
    if (changed.has("building") && this.building) {
      // a new start view (just remembered in the editor) shows right away in the house view
      const start = JSON.stringify(this.startViewOf());
      const startChanged = this.shownStartView !== undefined && this.shownStartView !== start;
      this.shownStartView = start;
      v.setStartView(this.startViewOf());
      v.setBuilding(this.shownBuilding(this.hass));
      v.setMap(this.building?.settings.map, this.building?.settings.north ?? 0);
      if (startChanged && this.floorId === null) v.resetView();
    }
    if (changed.has("startView") && changed.get("startView") !== undefined) {
      v.setStartView(this.startViewOf());
      if (this.floorId === null) v.resetView();
    }
    if (changed.has("building") || changed.has("theme") || changed.has("floorThumbs") || changed.has("packs")) this.scheduleThumbs();
    // markers shown by kind outside the opened room change with the room
    const byRoom = this.markersOutside ? ["markersOutside", "floorId", "roomId"] : ["markersOutside"];
    const forced = this.pluginsDirty || ["building", "markerMode", "heatMode", "flows", "alerts", "dimmed", ...byRoom].some((k) => changed.has(k));
    this.pluginsDirty = false;
    if (forced || changed.has("hass")) this.syncDevices(forced);
    if (changed.has("autoOrbit")) v.setAutoOrbit(this.autoOrbit ? 0.06 : 0);
    if (changed.has("_thumbs") || changed.has("_narrowStage")) v.setLabelInset(this._thumbs.length ? (this.narrowThumbs ? 136 : 184) : 0);
    if (changed.has("floorId")) v.setFloor(this.floorId);
    if (changed.has("roomId") && (this.roomId || changed.get("roomId"))) v.selectRoom(this.roomId);
    if (changed.has("tapInRoom")) v.setTapInRoom(this.tapInRoom);
    if (changed.has("wallMode")) v.setWallMode(this.wallMode);
    if (changed.has("solidWalls")) v.setPaintedWalls(this.solidWalls);
    if (changed.has("glassWalls")) v.setGlassWalls((this.glassWalls ?? 20) / 100);
    if (changed.has("explode")) v.setExplode(this.explode);
    if (changed.has("keepRoof")) v.setKeepRoof(this.keepRoof);
    if (changed.has("floorStack")) v.setFloorStack(this.floorStack);
    if (changed.has("theme")) v.setTheme(this.theme);
    if (changed.has("_locked")) v.setNavigationLocked(this._locked);
    if (changed.has("clock")) {
      clearInterval(this.clockTimer);
      this.clockTimer = this.clock ? setInterval(() => (this._now = Date.now()), 10000) : undefined;
    }
    if (changed.has("accent")) v.setAccent(this.accent ?? null);
    if (changed.has("surfaceGrab")) v.setSurfaceGrab(this.surfaceGrab ?? null);
    if (changed.has("furnishTypes")) v.setFurnishTypes(this.furnishTypes ?? null);
    if (changed.has("furnish")) {
      v.setFurnishMode(this.furnish);
      this.syncDevices(true);
    }
    if (changed.has("selectedFurniture")) v.selectFurniture(this.selectedFurniture);
    if (changed.has("selectedDevice")) v.setSelectedDevice(this.selectedDevice);
    if (changed.has("weather") || changed.has("weatherEntityId") || changed.has("weatherDensity") || changed.has("timeOfDay")) this.syncDevices(true);
    if (changed.has("quality") && changed.get("quality") !== undefined) {
      v.setQuality(this.quality);
      this._low = v.low;
    }
    if (changed.has("showStats")) v.setStats(this.showStats);
    if (changed.has("building")) this.findIndex = null;
  }

  /**
   * Send device markers, door/window states, energy cables, people and floor label texts to the viewer
   * when a watched entity changed (or the building). Openings are matched with entities again when
   * the building or the entity registry changes.
   */
  private shownFor: { building: Building; key: string; shown: Building } | null = null;
  /** Stored pictures of frames, loaded once each (image id -> data URL; "" while loading or gone). */
  private framePictureData = new Map<string, string>();

  /** The photos of picture frames: stored pictures (loaded once), URLs, and the picture of an image or camera entity. */
  private framePictures(hass: HomeAssistant, b: Building): LivePictureInput[] {
    const out: LivePictureInput[] = [];
    for (const floor of b.floors)
      for (const f of floor.furniture) {
        if (!f.picture || !furnitureShown(hass, f)) continue;
        const url = pictureUrl(hass, f.picture, (id) => this.storedPicture(hass, id));
        if (url) out.push({ furnitureId: f.id, floorId: floor.id, url, border: f.picture_border ?? 0, fit: f.picture_fit === "contain" ? "contain" : "cover" });
      }
    return out;
  }

  private storedPicture(hass: HomeAssistant, id: string): string | null {
    const known = this.framePictureData.get(id);
    if (known !== undefined) return known || null;
    this.framePictureData.set(id, "");
    fetchImage(hass, id)
      .then((data) => {
        this.framePictureData.set(id, data);
        this.syncDevices(true);
      })
      .catch(() => undefined);
    return null;
  }

  /** The building as the 3D view draws it: without the pieces whose visibility condition is not met. */
  private shownBuilding(hass: HomeAssistant | undefined): Building {
    const b = this.building!;
    const hidden = hiddenFurniture(hass, b);
    const key = hidden.join(",");
    if (this.shownFor?.building === b && this.shownFor.key === key) return this.shownFor.shown;
    this.shownFor = { building: b, key, shown: withoutHidden(b, hidden) };
    return this.shownFor.shown;
  }

  private syncDevices(force: boolean): void {
    const v = this.viewer;
    const b = this.building;
    if (!v || !b || !this.hass) return;
    // time travel: the same view, fed with the states of the moment shown
    const travel = this._travel;
    const hass = travel && !travel.loading ? hassAt(this.hass, travel.history, travel.t) : this.hass;
    if (force || !this.openingLinks || this.linkedRegistry !== hass.entities) {
      this.openingLinks = openingEntities(hass, b.floors);
      this.furnitureLinks = furnitureEntities(hass, b.floors);
      this.linkedRegistry = hass.entities;
      this.findIndex = null;
      this.alertSrc = this.alerts ? alertSources(hass, b, this.weatherEntityId, this.openingLinks) : null;
      this.watched = watchedEntities({
        hass,
        building: b,
        openingLinks: this.openingLinks,
        furnitureLinks: this.furnitureLinks,
        needsRoomSensors: this.heatMode !== "none" || this.roomLabels,
        alertSources: this.alertSrc,
        weatherEntityId: this.weatherEntityId,
      });
      force = true;
    }
    const changed = force || this.watched.some((id) => this.shownStates.get(id) !== hass.states[id]);
    if (!changed) return;
    // a piece shown only while a helper is on (seasonal decoration) comes and goes with it
    if (hiddenFurniture(hass, b).join(",") !== this.shownFor?.key) v.setBuilding(this.shownBuilding(hass));
    this.shownStates = new Map(this.watched.map((id) => [id, hass.states[id]]));

    const consumers = findConsumers(hass, b);
    const deviceMarkers = buildMarkers(hass, b);
    this.placementInfo = new Map(deviceMarkers.map((m) => [m.id, { floorId: m.floorId, roomId: m.roomId, x: m.x, z: m.z, y: m.y, rotation: m.rotation ?? 0 }]));
    const furniture = this.furnitureMarkers(hass, b, new Set(deviceMarkers.map((m) => m.id)), new Set(consumers.map((c) => c.powerEntity)));
    consumers.push(...furniture.consumers);
    const summary = energySummary(hass, b, consumers, deviceSensors(b, (f) => this.furnitureLinks?.get(f.id)?.power ?? null));
    // a placed power sensor shows its value as state text already, so only devices get a watt badge
    const byDevice = new Map(consumers.filter((c) => c.id !== c.powerEntity).map((c) => [c.id, c.power]));
    this.confirmSet = confirmEntities(hass, b.floors);
    // under NextFloor's cards (a playing speaker, a car in its spot) the device's own pin steps aside
    const carded = new Set(this.liveCardsOn ? this._liveCards.flatMap((c) => (c.kind === "media" ? [c.media.entity] : c.kind === "car" ? [c.spot] : [])) : []);
    v.setDevices([
      ...[...deviceMarkers, ...furniture.markers].map((m) => {
        // "without watts" drops the power badge (a plug shows only on / off)
        const power = m.show === "no_power" || ("energyDevice" in m && m.energyDevice) ? null : (byDevice.get(m.id) ?? null);
        // at night (kiosk) colour effects rest
        const marker = { ...m, power, powerText: power === null ? undefined : formatPower(hass, power), effect: this.dimmed ? undefined : m.effect, text: this.subMeterText(hass, b, summary, m.furnitureId) ?? m.text };
        // the own name under the pin: per device, or for every named device (card option marker_names)
        const caption = m.ownName && (m.showName || this.markerNames) ? m.ownName : "";
        const under = carded.has(m.id) || (!!m.furnitureId && carded.has(m.furnitureId));
        return { ...marker, pin: this.showPin(marker) && !under, full: m.show === "always", caption };
      }),
    ]);
    v.setPickTargets(furniture.targets, this.openingTargets());
    v.setScreens(furniture.screens);
    v.setFridgeDoors(fridgeDoors(hass, b.floors));
    v.setCovers(coverReaches(hass, b));
    v.setRobots(this.robotInfos(hass, b));
    // roof windows: sash and blind follow their contact and cover like windows do
    v.setRoofWindows(roofWindowStates(hass, b));
    v.setParked(parkedVehicles(hass, b));
    const types = new Map(b.floors.flatMap((f) => f.openings.map((o) => [o.id, o.type] as const)));
    const openingStates = new Map([...this.openingLinks!].map(([id, e]) => [id, openingState(hass, e, types.get(id))]));
    v.setOpeningStates(openingStates);
    this.setAlerts(this.alertSrc ? findAlerts(hass, b, this.alertSrc, this.openingLinks!) : []);
    this.watchLostContacts(hass);
    // the floor pictures follow lamps and blinds (not sensors), at most every few seconds
    const lampSig = [...deviceMarkers, ...furniture.markers].map((m) => `${m.id}:${m.glow ? `${m.glow.level.toFixed(1)}/${m.glow.color.map((c) => c.toFixed(1)).join("/")}` : 0}`).join(";") + "|" + [...openingStates].map(([id, o]) => `${id}:${o.open}:${o.cover === null ? "-" : o.cover.toFixed(1)}`).join(";");
    if (lampSig !== this.thumbSig) {
      const first = this.thumbSig === "";
      this.thumbSig = lampSig;
      if (!first) this.scheduleThumbs(1500);
    }
    // NextFloor: power flowing between the devices, sparkling modules, the house balance card
    // the advanced energy mode also needs the automatically found sensors of the sub-meters
    const livePic = energyPicture(hass, b, consumers, b.energy.advanced ? (f) => this.furnitureLinks?.get(f.id)?.power ?? null : undefined);
    const liveCars = this.liveCars(hass, b);
    // a charging car draws its power from the nearest wallbox (or the house) into the car
    for (const c of liveCars) {
      if (!c.car.home || !c.car.charging) continue;
      const wallbox = b.floors.flatMap((f) => f.furniture.filter((m) => m.type === "wallbox").map((m) => ({ floorId: f.id, x: m.x, z: m.z, y: 1 })))
        .sort((p, q) => Math.hypot(p.x - c.at.x, p.z - c.at.z) - Math.hypot(q.x - c.at.x, q.z - c.at.z))[0] ?? houseHub(b);
      if (wallbox) livePic.arcs.push({ key: `car:${c.spot}`, from: wallbox, to: { ...c.at, y: 0.8 }, power: c.car.chargingW ?? 7000, color: [80, 175, 255] });
    }
    const liveFlows = (this.flows ?? this._flows) && !this.dimmed;
    v.setLiveEnergy(liveFlows ? livePic.arcs : [], liveFlows ? livePic.sparks : []);
    if (JSON.stringify(livePic) !== JSON.stringify(this._liveEnergy)) this._liveEnergy = livePic;
    const liveMedia = this.liveMedia(hass, b);
    const playing = liveMedia.filter((m) => m.playing && !this.dimmed);
    v.setLiveSound(
      playing.map((m) => ({ id: m.entity, at: m.at, color: m.color, level: m.volume ?? 0.5 })),
      multiroom(playing).map(([a, c]) => [a.at, c.at]),
    );
    this.syncLhCards(v, b, livePic, liveCars, playing);
    // TV screens: a TV or monitor linked to a media player that runs shows what runs
    v.setLiveScreens(this.dimmed ? [] : liveScreens(hass, b, this.furnitureLinks));
    v.setPictures(this.framePictures(hass, b));
    // lawn sprinklers that water now (at night on the wall tablet effects rest)
    v.setLiveWater(this.dimmed ? [] : liveSprays(hass, b, this.furnitureLinks));
    const persons = SHOW_PRESENCE ? personsInRooms(hass, b) : [];
    v.setPersons(persons);
    const counts = floorCounts(hass, b, this.openingLinks!, persons);
    v.setFloorInfo(new Map([...counts].map(([id, c]) => [id, floorInfoText(hass, c)])));
    // daylight: sun through the windows and a lighter sky
    const config = hass.config;
    const sunNow = this.timeOfDay != null && config?.latitude !== undefined && config.longitude !== undefined ? sunPosition(todayAt(this.timeOfDay, config.time_zone), config.latitude, config.longitude) : readSun(hass);
    v.setSun(sunNow);
    // the sky over the plot (NextFloor's own weather layer): clouds darken the stage, rain and snow fall along the wind
    const raw = this.weather && !this.dimmed ? readSkyWeather(hass, weatherEntity(hass, this.weatherEntityId ?? b.settings.weather_entity)) : null;
    const weather = raw ? withDensity(chosenEffects(raw, b.settings.weather_effects), this.weatherDensity) : null;
    this.cloud = weather?.cloud ?? 0;
    this._sky = skyLightness(sunNow?.elevation ?? null, this.cloud);
    v.setSky(
      this.weather && !this.dimmed
        ? {
            weather,
            sun: sunNow,
            north: b.settings.north ?? 0,
            sky: this.skyColor(),
            disc: (b.settings.weather_effects ?? ["sky"]).includes("sky"),
            low: this._low,
          }
        : null,
    );
    this.applyTint();
    const hasEnergy = summary.grid !== null || summary.solar !== null || summary.battery !== null || summary.tariff !== null;
    const energy = hasEnergy ? summary : null;
    // a new object would make Lit render again; only changed values do
    if (JSON.stringify(energy) !== JSON.stringify(this._energy)) this._energy = energy;
  }

  /**
   * A contact that went unavailable warns only after the grace time, which no state change marks: while one is
   * unavailable, look again every minute.
   */
  private watchLostContacts(hass: HomeAssistant): void {
    const waiting = !!this.alertSrc && !this._travel && contactsPending(hass, this.alertSrc);
    if (waiting && !this.contactTimer)
      this.contactTimer = setInterval(() => {
        const b = this.building;
        if (this.alertSrc && b && this.hass && this.openingLinks && !this._travel) this.setAlerts(findAlerts(this.hass, b, this.alertSrc, this.openingLinks));
      }, 60_000);
    if (!waiting && this.contactTimer) {
      clearInterval(this.contactTimer);
      this.contactTimer = undefined;
    }
  }

  /** New warnings start the pulse (and a jump to the room when wanted); none stops it. */
  private setAlerts(alerts: Alert[]): void {
    const keys = alerts.map((a) => `${a.kind}:${a.entity}`);
    // quiet warnings (a contact that stopped answering) only show in the banner: no pulse, no jump
    const fresh = alerts.filter((a, i) => !this.seenAlerts.has(keys[i]) && !QUIET_ALERTS.has(a.kind));
    this.seenAlerts = new Set(keys);
    if (keys.join() !== this._alerts.map((a) => `${a.kind}:${a.entity}`).join()) this._alerts = alerts;
    const pulsing = alerts.some((a) => !QUIET_ALERTS.has(a.kind));
    if (pulsing && !this.alertTimer) this.alertTimer = setInterval(() => !document.hidden && this.applyTint(), this._low ? 200 : 100);
    if (!pulsing && this.alertTimer) {
      clearInterval(this.alertTimer);
      this.alertTimer = undefined;
    }
    if (fresh.length && this.alertJump) this.jumpTo(fresh[0]);
  }

  /** Show where a warning is: its floor and room, or the house for an alarm. */
  private jumpTo(a: Alert): void {
    if (!a.floorId) {
      this.fire("floor-tap", { floorId: null });
      return;
    }
    if (this.floorId !== a.floorId) this.fire("floor-tap", { floorId: a.floorId });
    // the host switches the floor first; the room follows once it has rendered
    if (a.roomId) setTimeout(() => this.fire("room-tap", { floorId: a.floorId, roomId: a.roomId }), 60);
  }

  /** Double tap on a room: all its lights off when one is on, otherwise all on. */
  private onRoomDoubleTap(floorId: string, roomId: string): void {
    const b = this.building;
    const hass = this.hass;
    const floor = b?.floors.find((f) => f.id === floorId);
    const room = floor?.rooms.find((r) => r.id === roomId);
    if (!b || !hass || !floor || !room) return;
    const ids = new Set(areaEntities(hass, room.area_id).filter((id) => kindOf(id) === "light"));
    for (const p of floor.placements) if (kindOf(p.entity_id) === "light" && pointInPolygon([p.x, p.z], room.points)) ids.add(p.entity_id);
    for (const f of floor.furniture) {
      const e = this.furnitureLinks.get(f.id)?.entity;
      if (e && isLamp(f.type) && pointInPolygon([f.x, f.z], room.points)) ids.add(e);
    }
    // devices that ask before switching stay out of the all-at-once toggle
    const lights = [...ids].filter((id) => !this.confirmSet.has(id));
    if (!lights.length) return;
    const anyOn = lights.some((id) => hass.states[id]?.state === "on");
    void hass.callService("homeassistant", anyOn ? "turn_off" : "turn_on", { entity_id: lights });
    this.roomFlash = { roomId, until: performance.now() + 350 };
    this.applyTint();
    setTimeout(() => {
      this.roomFlash = null;
      this.applyTint();
    }, 380);
  }

  private runScene(id: string): void {
    void this.hass.callService(id.split(".")[0], "turn_on", { entity_id: id });
    this._sceneFired = id;
    setTimeout(() => (this._sceneFired = null), 600);
  }

  /**
   * Floor colours of the rooms: the heatmap, the pulsing rooms of warnings and the flash of a double
   * tap; sent to the viewer only when they changed.
   */
  private applyTint(): void {
    const v = this.viewer;
    const b = this.building;
    const hass = this.hass;
    if (!v || !b || !hass) return;
    let tint: Map<string, [number, number, number]> | null = null;
    if (this.heatMode !== "none" && this.heatMode !== "values") {
      const mode = this.heatMode;
      const values = roomValues(hass, b, mode);
      // the legend's "nothing found" line depends on it: render again when that changes
      if (!values.size !== !this.heatValues.size) this.requestUpdate();
      this.heatValues = values;
      tint = new Map([...values].map(([id, value]) => [id, heatColor(mode, value)]));
    }
    // "values": the numbers at the room names instead of coloured floors
    const info = new Map<string, string>();
    if (this.heatMode === "values") {
      for (const floor of b.floors)
        for (const room of floor.rooms) {
          const t = roomClimateValue(hass, floor, room, "temperature");
          const h = roomClimateValue(hass, floor, room, "humidity");
          const c = roomClimateValue(hass, floor, room, "co2");
          const parts = [
            t !== null ? `${formatNumber(hass, fromCelsius(hass, t), 1)} ${tempUnit(hass)}` : null,
            h !== null ? `${formatNumber(hass, h, 0)} %` : null,
            c !== null ? `${formatNumber(hass, c, 0)} ppm` : null,
          ].filter((x): x is string => !!x);
          if (parts.length) info.set(room.id, parts.join(" · "));
        }
    }
    v.setRoomInfo(info);
    if (this._alerts.length) {
      tint ??= new Map();
      const k = 0.55 + 0.45 * Math.sin(performance.now() / 160);
      for (const a of this._alerts) {
        if (QUIET_ALERTS.has(a.kind)) continue;
        const c = alertColor(a.kind).map((x) => x * k) as [number, number, number];
        if (a.roomId) tint.set(a.roomId, c);
        else for (const f of b.floors) for (const r of f.rooms) tint.set(r.id, c);
      }
    }
    if (this.roomFlash && performance.now() < this.roomFlash.until) {
      tint ??= new Map();
      tint.set(this.roomFlash.roomId, [0.9, 0.95, 1]);
    }
    const sig = tint ? [...tint].map(([id, c]) => `${id}:${c.map((x) => x.toFixed(2)).join(",")}`).join(";") : "";
    if (sig === this.tintSig) return;
    this.tintSig = sig;
    v.setRoomTint(tint);
  }

  /**
   * Markers, energy consumers and lit screens of furniture with linked entities. Entities that are
   * placed as devices as well keep their device marker.
   */
  private furnitureMarkers(
    hass: HomeAssistant,
    b: Building,
    taken: Set<string>,
    consumerSensors: Set<string>,
  ): { markers: (DeviceMarker & { fromFurniture: boolean; energyDevice?: boolean; care?: boolean; readout?: boolean })[]; consumers: Consumer[]; screens: Map<string, ScreenState>; targets: Map<string, string> } {
    const markers: (DeviceMarker & { fromFurniture: boolean; energyDevice?: boolean; care?: boolean; readout?: boolean })[] = [];
    const consumers: Consumer[] = [];
    const screens = new Map<string, ScreenState>();
    const targets = new Map<string, string>();
    const subMeters = subMeterIds(b);
    for (const floor of b.floors) {
      for (const f of floor.furniture) {
        if (!furnitureShown(hass, f)) continue;
        const linked = this.furnitureLinks.get(f.id);
        // furniture with a state: a glowing plate on the item while its entity is on, occupied or home;
        // two entities light the halves (left/right of a bed, bottom/top of a bunk bed)
        const faces = this.stateFaces(hass, f);
        if (faces.length) screens.set(f.id, { color: faces[0].color, level: faces[0].level, faces });
        // a light switch or socket: each button glows with its own entity; a tap switches it (or asks which, with several)
        // the household: a bin's pickup, post in the mailbox, a thirsty plant
        const care = householdKind(f.type);
        if (care && f.care_entity) {
          const marker = this.careMarker(hass, floor, f, care, f.care_entity);
          if (marker) {
            markers.push(marker.marker);
            if (marker.glow) screens.set(f.id, { color: marker.glow, level: 0.9, faces: [{ part: "all", color: marker.glow, level: 0.9 }] });
            targets.set(f.id, f.care_entity);
          }
          continue;
        }
        const plate = packItem(f.type);
        // a curtain, roller screen, awning or gate: a tap opens the menu of the cover it follows
        if (f.cover_entity && hasMovingParts(plate)) targets.set(f.id, f.cover_entity);
        if (plate?.gangs) {
          const gangs = gangGlows(hass, (f.gang_entities ?? []).slice(0, plate.gangs), /socket/.test(f.type));
          if (gangs.length) screens.set(f.id, { color: gangs[0].color, level: gangs[0].level, gangs });
          if (gangEntities(f.gang_entities, plate.gangs).length) targets.set(f.id, `gang:${f.id}`);
          continue;
        }
        if (isLamp(f.type)) {
          const lamp = this.lampMarker(hass, floor, f, linked?.entity ?? null);
          markers.push(lamp);
          if (f.type === "ceiling_fan") {
            const fan = linked?.fan ? hass.states[linked.fan] : undefined;
            lamp.spin = fanSpin(fan);
            if (fan && !taken.has(fan.entity_id)) {
              taken.add(fan.entity_id);
              // the fan's own pin under the blades: tap switches it, a swipe changes its speed
              markers.push({ ...lamp, id: fan.entity_id, y: Math.max(0.5, lamp.y - 0.3), icon: f.icon ? mdiIcon(f.icon) : iconSvg("fan"), name: f.name || entityName(hass, fan.entity_id), text: fanText(hass, fan), active: isActive(fan), unavailable: isUnavailable(fan), glow: null, lamp: null, spin: undefined, pickable: undefined, effect: undefined });
            }
          }
          continue;
        }
        // a fridge shows the temperatures of its compartments (and warns when one is too warm)
        const temps = isCooling(f.type) ? coolingTemps(hass, f, (c) => `${formatNumber(hass, fromCelsius(hass, c), 1)} ${tempUnit(hass)}`) : null;
        // a home battery with only its charge, a wallbox with only its status, a fridge with only its thermometer still gets its marker
        const extraRef = f.type === "home_battery" ? f.soc : f.type === "wallbox" ? f.status : temps ? (f.temp_entity && f.temp_entity !== "none" ? f.temp_entity : f.temp_entity2) : null;
        const extra = extraRef && extraRef !== "none" ? extraRef : null;
        const link = linked ?? (extra ? { entity: null, power: null } : undefined);
        if (!link) continue;
        // a battery goes by its charge first: its power sensor is often placed on its own as well
        const id = (f.type === "home_battery" ? (extra ?? link.entity ?? link.power) : (link.entity ?? link.power ?? extra))!;
        targets.set(f.id, id);
        const st = link.entity ? hass.states[link.entity] : undefined;
        // the meter's sensor is the grid (+ = import), the battery's can point the other way as well;
        // a sub-meter (advanced energy mode) measures its branch (+ = drawn) with its own sign
        const sub = subMeters.has(f.id);
        const invert = sub ? !!f.meter_invert : f.type === "meter" ? b.energy.grid_invert && !f.export : f.type === "home_battery" ? b.energy.battery_invert && !f.charge : false;
        let power = link.power ? readPower(hass.states[link.power], invert) : null;
        // separate second sensors: a battery's charging, a meter's export (then the first one is unsigned)
        const second = (f.type === "home_battery" && f.charge && f.charge !== "none" ? f.charge : f.type === "meter" && !sub && f.export && f.export !== "none" ? f.export : null) as string | null;
        const secondW = second ? readPower(hass.states[second]) : null;
        if (secondW !== null) power = Math.max(0, power ?? 0) - Math.max(0, secondW);
        if (link.power && power !== null && !consumerSensors.has(link.power)) {
          consumerSensors.add(link.power);
          consumers.push({ id, powerEntity: link.power, floorId: floor.id, x: f.x, z: f.z, power: Math.max(0, power), wallbox: f.type === "wallbox" || undefined });
        }
        const running = (power ?? 0) > 10 || st?.state === "on" || st?.state === "running" || (isStatusSensor(st) && isActive(st));
        if ((f.type === "radiator" || plate) && st && kindOf(st.entity_id) === "climate") {
          // glows while it heats; brighter the further the room is below its target. A pack item glows on its screen
          // part (a thermostat's display), or as a whole when it has none (a towel radiator)
          const a = st.attributes;
          if (a.hvac_action === "heating") {
            const gap = typeof a.temperature === "number" && typeof a.current_temperature === "number" ? a.temperature - a.current_temperature : 1;
            const heat = !!plate && !plate.parts.some((p) => p.screen);
            screens.set(f.id, { color: [1, 0.42, 0.1], level: Math.min(1, 0.45 + 0.25 * Math.max(0, gap)), heat: heat || undefined });
          }
        } else if ((f.type === "washer" || f.type === "dryer" || f.type === "dishwasher") && running) {
          screens.set(f.id, { color: [0.3, 0.85, 1], level: 0.8 });
        }
        if (st && hasScreen(f.type)) {
          // a screen is lit or dark (what plays on it is drawn by NextFloor's TV screens); a light (an aquarium,
          // a lit panel) glows in its own colour, other entities in the neon cyan
          const lit = kindOf(st.entity_id) === "light" ? lightGlow(st) : null;
          // many TV integrations (Samsung, LG) only report "on", never "playing": on is lit, dimmed
          const tvOn = kindOf(st.entity_id) === "media" && ["playing", "on", "paused", "idle"].includes(st.state);
          const color = lit ? lit.color : isActive(st) || tvOn ? ([0.22, 0.88, 1] as [number, number, number]) : null;
          if (color) screens.set(f.id, { color, level: st.state === "playing" ? 1 : 0.6, halo: f.ambilight ?? 1 });
        }
        if (taken.has(id)) continue;
        taken.add(id);
        const kind = link.entity ? kindOf(link.entity) : null;
        const room = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
        markers.push({
          id,
          floorId: floor.id,
          roomId: room?.id ?? null,
          x: f.x,
          z: f.z,
          y: markerHeight(f) + mountBase(floor, f),
          icon: f.icon ? mdiIcon(f.icon) : iconSvg(kind ?? "switch"),
          name: f.name || (link.entity ? entityName(hass, link.entity) : furnitureName(hass, f.type)),
          ownName: f.name || undefined,
          showName: !!f.show_name,
          text: temps
            ? temps.text
            : f.type === "home_battery"
              ? this.batteryText(hass, extra, power)
              : f.type === "wallbox"
                ? this.wallboxText(hass, extra, power)
                : f.type === "meter"
                  ? sub
                    ? (power === null ? "" : formatPower(hass, power))
                    : this.meterText(hass, power)
                  : st && (f.type === "washer" || f.type === "dryer" || f.type === "dishwasher") && running && remainingMinutes(hass, deviceSiblings(hass, link.entity ?? link.power)) !== null
                    ? translate(hass, "care_time_left", { time: minutesText(remainingMinutes(hass, deviceSiblings(hass, link.entity ?? link.power))!) })
                    : st
                    ? stateText(hass, st)
                    : power !== null
                      ? formatPower(hass, Math.max(0, power))
                      : "",
          active: temps?.warm || (st ? isActive(st) : (power ?? 0) > 5),
          unavailable: st ? isUnavailable(st) : false,
          glow: null,
          // its pin grabs the item when furnishing
          furnitureId: f.id,
          // inverter, battery, wallbox: their own text (watts, charge, status) is always worth a pin
          energyDevice: f.type === "inverter" || f.type === "home_battery" || f.type === "wallbox" || f.type === "meter",
          // a fridge's temperatures are worth a pin, like an energy device's values
          readout: !!temps || undefined,
          show: f.marker ?? undefined,
          fromFurniture: true,
        });
      }
    }
    // an item with its own tap action shows what it shows as usual; a tap on it or on its pin runs the action
    const own = ownTaps(b, markers);
    this.tapPins = own.pins;
    for (const f of b.floors.flatMap((fl) => fl.furniture)) if (f.tap?.action) targets.set(f.id, `tap:${f.id}`);
    // one without a pin of its own gets one above it, like a device's, that does the same
    for (const { floor, item: f } of own.bare) {
      const room = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
      const name = f.name || furnitureName(hass, f.type);
      markers.push({ id: `tap:${f.id}`, floorId: floor.id, roomId: room?.id ?? null, x: f.x, z: f.z, y: markerHeight(f) + mountBase(floor, f), icon: mdiIcon(f.icon || "gesture-tap-button"), name, ownName: f.name || undefined, showName: !!f.show_name, text: "", active: false, unavailable: false, glow: null, furnitureId: f.id, show: f.marker ?? undefined, fromFurniture: true });
    }
    return { markers, consumers, screens, targets };
  }

  /**
   * Furniture a robot vacuum drives around: what stands on the floor of the room (cabinets, sofas,
   * beds, appliances). It drives under tables, desks, chairs and stools, over rugs and under anything
   * hung on the wall.
   */
  private robotObstacles(floor: Building["floors"][number], room: [number, number][]): [number, number][][] {
    const OPEN_BELOW = new Set(["rug", "worktop", "table", "table_round", "coffee_table", "chair", "office_chair", "stool", "bar_stool", "bench", "desk", "robot_vacuum", "parking", "stairwell", "radiator", "tv_wall", "kitchen_wall", "led_strip"]);
    return floor.furniture
      .filter((m) => {
        if (OPEN_BELOW.has(m.type) || (m.type.startsWith("lamp_") && m.type !== "lamp_floor" && m.type !== "lamp_uplight")) return false;
        if (m.h < 0.04 || mountBase(floor, m) > 0.12) return false;
        const item = packItem(m.type);
        if (item && (item.hole || /table|desk|chair|stool|bench|rug|carpet|mat$/.test(m.type))) return false;
        return pointInPolygon([m.x, m.z], room) || furnitureFootprint(m).some((p) => pointInPolygon(p, room));
      })
      .map((m) => furnitureFootprint(m));
  }

  /** Robot vacuums (docks with a vacuum entity): where they rest and what they do. */
  private robotInfos(hass: HomeAssistant, b: Building): RobotInfo[] {
    const out: RobotInfo[] = [];
    for (const floor of b.floors) {
      for (const f of floor.furniture) {
        if (f.type !== "robot_vacuum") continue;
        const entity = this.furnitureLinks.get(f.id)?.entity ?? null;
        const state = entity ? hass.states[entity]?.state : undefined;
        const mode: RobotInfo["mode"] =
          state === "cleaning" ? "cleaning" : state === "returning" ? "returning" : state === "error" ? "error" : state === "docked" || !state ? "docked" : "idle";
        // the robot rests in front of its dock, facing away from it
        const a = (f.rotation * Math.PI) / 180;
        const off = f.d * 0.14;
        const rest: [number, number] = [f.x - Math.sin(a) * off, f.z + Math.cos(a) * off];
        // the room the robot reports (a "current room" sensor), else the room of its dock
        const rooms = floor.rooms.filter((r) => r.points.length >= 3);
        const reported = mode === "cleaning" ? robotRoom(hass, rooms, entity, robotRoomSensor(hass, entity, f.room_sensor)) : null;
        const room = reported ?? rooms.find((r) => pointInPolygon(rest, r.points));
        const obstacles = mode === "cleaning" && room ? this.robotObstacles(floor, room.points) : [];
        out.push({ id: f.id, floorId: floor.id, rest, restHeading: -a, mode, room: room?.points ?? null, roomId: room?.id ?? null, obstacles });
      }
    }
    return out;
  }

  /** Home battery: "64 % · ▲ 1,5 kW" (▲ charging, ▼ discharging; its power sensor counts discharging positive). */
  private batteryText(hass: HomeAssistant, soc: string | null, power: number | null): string {
    const v = soc ? Number(hass.states[soc]?.state) : Number.NaN;
    const parts: string[] = [];
    if (Number.isFinite(v)) parts.push(`${formatNumber(hass, v, 0)} %`);
    if (power !== null && Math.abs(power) >= 10) parts.push(`${power < 0 ? "▲" : "▼"} ${formatPower(hass, Math.abs(power))}`);
    return parts.join(" · ");
  }

  /** A sub-meter with "show unmetered" on: what its floors use, and how much of it no placed device measures. */
  private subMeterText(hass: HomeAssistant, b: Building, summary: EnergySummary, furnitureId: string | undefined): string | null {
    const label = furnitureId ? subMeterLabel(b, summary, furnitureId) : null;
    if (!label) return null;
    return formatPower(hass, label.use) + (label.unmetered === null ? "" : ` · ${translate(hass, "meter_unmetered", { w: formatPower(hass, label.unmetered) })}`);
  }

  /** Wallbox: "lädt · 11 kW", "angesteckt" or its power, from a status sensor (on/off or a state such as charging). */
  /** The meter: what the house draws from the grid, or feeds into it. */
  private meterText(hass: HomeAssistant, power: number | null): string {
    if (power === null) return "";
    if (Math.abs(power) < 5) return formatPower(hass, 0);
    return `${translate(hass, power < 0 ? "energy_grid_export" : "energy_grid_import")} ${formatPower(hass, Math.abs(power))}`;
  }

  private wallboxText(hass: HomeAssistant, status: string | null, power: number | null): string {
    const st = status ? hass.states[status] : undefined;
    const raw = String(st?.state ?? "").toLowerCase();
    const charging = (power ?? 0) > 50 || /charg|laden|lädt/.test(raw);
    const plugged = st?.entity_id.startsWith("binary_sensor.") ? raw === "on" : /connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(raw);
    const label = charging ? translate(hass, "wallbox_charging") : plugged ? translate(hass, "wallbox_plugged") : st && !isUnavailable(st) && !st.entity_id.startsWith("binary_sensor.") ? stateText(hass, st) : "";
    const watts = power !== null && power > 50 ? formatPower(hass, power) : "";
    return [label, watts].filter(Boolean).join(" · ");
  }

  /** The glowing faces of an item with a state entity (none while nothing is on). */
  private stateFaces(hass: HomeAssistant, f: Furniture): NonNullable<ScreenState["faces"]> {
    const out: NonNullable<ScreenState["faces"]> = [];
    const refs: [EntityRef | undefined, "all" | "left" | "right" | "top" | "bottom"][] = f.state_entity2 && f.state_entity2 !== "none"
      ? [
          [f.state_entity, f.state_split === "top_bottom" ? "bottom" : "left"],
          [f.state_entity2, f.state_split === "top_bottom" ? "top" : "right"],
        ]
      : [[f.state_entity, "all"]];
    for (const [ref, part] of refs) {
      if (!ref || ref === "none") continue;
      const st = hass.states[ref];
      if (!st || isUnavailable(st)) continue;
      const on = isActive(st) || st.state === "home" || st.state === "occupied" || st.state === "on";
      if (!on) continue;
      const lit = kindOf(ref) === "light" ? lightGlow(st) : null;
      out.push({ part, color: lit ? lit.color : [1, 0.71, 0.28], level: lit ? lit.level : 0.85 });
    }
    return out;
  }

  /** The pin of a household item: when the bin is collected, whether there is post, how dry a plant is; and its glow when it is due. */
  private careMarker(hass: HomeAssistant, floor: Building["floors"][number], f: Furniture, care: "bin" | "mail" | "plant", entity: string): { marker: DeviceMarker & { fromFurniture: boolean; care: boolean }; glow: [number, number, number] | null } | null {
    const st = hass.states[entity];
    if (!st) return null;
    let text = "";
    let due = false;
    let glow: [number, number, number] | null = null;
    if (care === "bin") {
      const days = pickupDays(st);
      text = days === null ? stateText(hass, st) : days === 0 ? translate(hass, "care_bin_today") : days === 1 ? translate(hass, "care_bin_tomorrow") : translate(hass, "care_bin_days", { n: days });
      due = days !== null && days <= 1;
      if (due) glow = [1, 0.72, 0.28];
    } else if (care === "mail") {
      due = hasPost(st);
      text = translate(hass, due ? "care_mail_yes" : "care_mail_no");
      if (due) glow = [1, 0.85, 0.3];
    } else {
      const thirst = plantThirst(st, f.thirsty_below ?? 20);
      due = !!thirst?.thirsty;
      text = thirst ? (Number.isFinite(thirst.moisture) ? `${translate(hass, due ? "care_plant_thirsty" : "care_plant_ok")} · ${Math.round(thirst.moisture)} %` : translate(hass, due ? "care_plant_thirsty" : "care_plant_ok")) : stateText(hass, st);
      if (due) glow = [1, 0.45, 0.3];
    }
    const room = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
    const icon = { bin: "mdi:trash-can-outline", mail: "mdi:mailbox-outline", plant: "mdi:sprout-outline" }[care];
    return {
      glow,
      marker: {
        id: entity,
        floorId: floor.id,
        roomId: room?.id ?? null,
        x: f.x,
        z: f.z,
        y: markerHeight(f) + mountBase(floor, f),
        icon: f.icon ? mdiIcon(f.icon) : mdiIcon(icon),
        name: f.name || furnitureName(hass, f.type),
        ownName: f.name || undefined,
        showName: !!f.show_name,
        text,
        active: due,
        unavailable: isUnavailable(st),
        glow: null,
        furnitureId: f.id,
        show: f.marker ?? undefined,
        fromFurniture: true,
        care: true,
      },
    };
  }

  /** A lamp: its 3D model glows with the linked light and is tapped directly. */
  private lampMarker(hass: HomeAssistant, floor: Building["floors"][number], f: Furniture, entity: string | null): DeviceMarker & { fromFurniture: boolean } {
    const st = entity ? hass.states[entity] : undefined;
    // further bulbs of the same fixture (a night light, an ambient ring): the lamp glows with them while its main light is off
    const others = (f.extra_lights ?? []).map((id) => hass.states[id]).filter((s): s is HassEntity => !!s);
    const otherOn = others.find((s) => isActive(s));
    const item = packItem(f.type);
    const model = LAMP_MODEL[f.type] ?? item?.light ?? "floor";
    // a height above the floor set by hand wins (a table lamp on a shelf, a floor lamp on a platform);
    // an LED strip outside the house counts from the ground there (a path light flush with the lawn)
    const inRoom = floor.rooms.some((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
    const base = model === "strip" && !inRoom
      ? outdoorGround(floor, f.x, f.z) + (f.mount_y ?? 0)
      : f.mount_y != null && !item
      ? f.mount_y
      : item || model === "wall" || model === "strip"
      ? mountBase(floor, f)
      : model === "table"
        ? surfaceHeight(floor, f.x, f.z)
        : model === "bollard" || model === "garden"
          ? outdoorGround(floor, f.x, f.z)
          : 0;
    const room = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
    // hanging lamps hang from the ceiling right above them: the room's own, or one set on the lamp (a sloping ceiling)
    const H = ceilingOf(floor, f);
    // pack lamps: the marker sits above the lamp (below it when it hangs from the ceiling)
    const y = item
      ? item.mount === "ceiling"
        ? Math.max(0.5, base - 0.15)
        : base + f.h + 0.2
      : {
      ceiling: H - 0.3,
      downlight: H - 0.25,
      spot: H - 0.35,
      panel: H - 0.25,
      pendant: Math.max(0.6, H - f.h - 0.25),
      fan: Math.max(0.6, H - f.h - 0.2),
      floor: base + f.h + 0.25,
      uplight: base + f.h + 0.25,
      table: base + f.h + 0.2,
      wall: base + f.h + 0.2,
      strip: f.upright ? base + f.w + 0.15 : Math.max(0.3, base - 0.2),
      bollard: base + f.h + 0.25,
      garden: base + f.h + 0.25,
    }[model];
    const marker: DeviceMarker & { fromFurniture: boolean } = {
      // a lamp without a light keeps a key of its own (it is drawn, but not tappable)
      id: entity ?? `lamp:${f.id}`,
      floorId: floor.id,
      roomId: room?.id ?? null,
      x: f.x,
      z: f.z,
      y,
      icon: iconSvg("light"),
      name: f.name || (entity ? entityName(hass, entity) : furnitureName(hass, f.type)),
      text: st && (isActive(st) || !otherOn) ? stateText(hass, st) : otherOn ? entityName(hass, otherOn.entity_id) : "",
      active: (st ? isActive(st) : false) || !!otherOn,
      unavailable: st ? isUnavailable(st) : false,
      glow: st || others.length ? scaleGlow(fixtureGlow(st, others, f.color_entity && f.color_entity !== "none" ? hass.states[f.color_entity] : undefined), f.glow_scale) : null,
      lamp: model,
      rotation: f.rotation,
      mirror: !!f.mirror,
      roll: f.tilt ?? 0,
      upright: !!f.upright,
      rise: f.rise ?? 0,
      size: [f.w, f.d, f.h],
      base,
      pickable: !!entity,
      furnitureId: f.id,
      pack: item ? f.type : null,
      lightY: item ? (item.mount === "ceiling" ? base : base + f.h * 0.85) : undefined,
      ceiling: H,
      effect: st?.state === "on" ? lightAnimation(f, lightEffectSource(hass, f, entity)) : undefined,
      variant: f.variant,
      show: f.marker ?? undefined,
      fromFurniture: true,
    };
    return st && entity ? withPluginPatch(hass, marker, st, false) : marker;
  }

  /**
   * Marker rule: "important" leaves out devices that their 3D object stands for (lamps, a TV that is
   * off) and keeps devices without an object (sensors, heating, switches) and values (watts, the app).
   */
  private showPin(m: DeviceMarker & { fromFurniture?: boolean; energyDevice?: boolean; care?: boolean; readout?: boolean }): boolean {
    // while furnishing every placed device has a pin to grab it by
    if (this.furnish && !m.fromFurniture) return true;
    // the device's own setting wins over the marker mode (except "none", which hides every marker)
    if (m.show === "never" || this.markerMode === "none") return false;
    if (m.show === "always") return true;
    // only while it is on: a motion sensor while it detects, a door while it is open
    if (m.show === "active" || (this.building?.settings.motion_markers_active && isMotionSensor(this.hass, m.id))) {
      if (!m.active) return false;
      if (m.show === "active") return true;
    }
    // outside the opened room (the house, a floor, another room): the kinds chosen in the card
    if (this.markersOutside && !(this.roomId && m.roomId === this.roomId)) return this.markersOutside.includes(markerKind(m.id, !!m.lamp));
    if (this.markerMode === "all") return true;
    if (m.lamp) return false;
    const kind = kindOf(m.id);
    if (kind === "light") return false;
    // a ceiling fan's pin is how it is switched (its blades belong to the light kit)
    if (m.fromFurniture && kind === "fan") return true;
    // a bin to put out, post in the box, a thirsty plant: important while it is due
    if (m.care) return m.active;
    // an item with its own tap action: its pin is the way to find it
    if (m.id.startsWith("tap:")) return true;
    // values worth reading (a fridge's temperatures)
    if (m.readout) return true;
    if (m.fromFurniture) return (m.power ?? 0) >= 1 || (kind === "media" && m.active) || (!!m.energyDevice && !!m.text);
    return true;
  }

  /** Tapping a window opens its blind (or contact); a door or garage door its cover or contact. */
  private openingTargets(): Map<string, string> {
    const out = new Map<string, string>();
    for (const [id, e] of this.openingLinks ?? []) {
      // a door with a smart lock is tapped to lock or unlock it
      const target = e.lock ?? e.cover ?? e.contact ?? e.tilt;
      if (target) out.set(id, target);
    }
    return out;
  }

  /** Pictures of the floors, drawn a moment after the plan or the look changed (once, not per frame). */
  private scheduleThumbs(delay = 600): void {
    clearTimeout(this.thumbTimer);
    const floors = this.building?.floors.filter((f) => f.rooms.length).length ?? 0;
    if (!this.floorThumbs || floors < 2) {
      this._thumbs = [];
      return;
    }
    // at most every few seconds, however often lamps change (the tablet level waits longer)
    const wait = Math.max(delay, this.thumbsAt + (this._low ? 8000 : 4000) - Date.now());
    this.thumbTimer = setTimeout(() => {
      // at night (kiosk) the pictures are drawn once and then rest
      if (!this.viewer || (this.dimmed && this._thumbs.length)) return;
      // a hidden tab draws nothing; the pictures follow once it shows again
      if (document.hidden) {
        this.scheduleThumbs(3000);
        return;
      }
      this.thumbsAt = Date.now();
      this._thumbs = this.viewer.floorThumbnails(this.narrowThumbs ? 104 : 150, this.narrowThumbs ? 78 : 112);
    }, wait);
  }

  private get narrowThumbs(): boolean {
    return this._narrowStage;
  }

  private renderThumbs() {
    if (!this._thumbs.length || !this.building) return nothing;
    const names = new Map(this.building.floors.map((f) => [f.id, f.name]));
    // the highest floor on top
    const order = [...this._thumbs].sort(
      (a, b) => (this.building!.floors.find((f) => f.id === b.floorId)?.elevation ?? 0) - (this.building!.floors.find((f) => f.id === a.floorId)?.elevation ?? 0),
    );
    const compact = this._thumbsCompact;
    const fold = () => {
      this._thumbsCompact = !compact;
      try {
        localStorage.setItem("nextfloor.thumbs_compact", this._thumbsCompact ? "1" : "0");
      } catch {
        // private mode: the choice lasts for this page only
      }
    };
    return html`<nav class="nf-thumbs ${this.narrowThumbs ? "nf-thumbs-small" : ""} ${compact ? "nf-thumbs-compact" : ""}" aria-label=${translate(this.hass, "floors")}>
      <button class="nf-thumbs-fold" title=${translate(this.hass, compact ? "thumbs_show" : "thumbs_fold")} aria-label=${translate(this.hass, compact ? "thumbs_show" : "thumbs_fold")} @click=${fold}>${compact ? "▸" : "◂"}</button>
      <button class="nf-thumb nf-thumb-house" aria-pressed=${this.floorId === null} @click=${() => this.fire("floor-tap", { floorId: null })}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${translate(this.hass, "all_floors")}</span>
      </button>
      ${order.map(
        (t) => html`<button class="nf-thumb" aria-pressed=${this.floorId === t.floorId} @click=${() => this.fire("floor-tap", { floorId: t.floorId })}>
          ${compact ? nothing : html`<img src=${t.url} alt="" />`}
          <span>${names.get(t.floorId) ?? ""}</span>
        </button>`,
      )}
    </nav>`;
  }

  /** Long press: the quick menu at the device, or the details for devices without one. */
  private onDeviceHold(entityId: string, x: number, y: number): void {
    const kind = kindOf(entityId);
    if (kind === "light" || kind === "cover" || kind === "switch" || kind === "fan" || kind === "lock") this._menu = { entity: entityId, x, y };
    else openMoreInfo(this, entityId);
  }

  /** Swipe up or down on a lamp (brightness) or a blind (position). */
  private onDeviceSwipe(entityId: string, phase: "start" | "move" | "end", dy: number, x: number, y: number): boolean {
    const st = this.hass?.states[entityId];
    if (phase === "start") {
      // devices that ask before switching are not moved by a swipe (it turns the view instead)
      if (!st || isUnavailable(st) || this.confirmSet.has(entityId)) return false;
      const kind = kindOf(entityId);
      if (kind === "light" && lightAbilities(st).dim) {
        const pct = st.state === "on" ? (typeof st.attributes.brightness === "number" ? Math.round((st.attributes.brightness as number) / 2.55) : 100) : 0;
        this._swipe = { entity: entityId, kind: "light", start: pct, value: pct, x, y };
        return true;
      }
      // a fan with speeds: up = faster, down to 0 = off
      if (kind === "fan" && typeof st.attributes.percentage_step === "number") {
        const pct = st.state === "on" && typeof st.attributes.percentage === "number" ? st.attributes.percentage : 0;
        this._swipe = { entity: entityId, kind: "fan", start: pct, value: pct, x, y };
        return true;
      }
      if (kind === "cover" && coverPositionable(st)) {
        const pos = st.attributes.current_position as number;
        this._swipe = { entity: entityId, kind: "cover", start: pos, value: pos, x, y };
        return true;
      }
      return false;
    }
    const s = this._swipe;
    if (!s || s.entity !== entityId) return false;
    if (phase === "move") {
      // the whole range over about 220 pixels; up = brighter / blind up
      const value = Math.round(Math.min(100, Math.max(0, s.start - (dy / 220) * 100)));
      if (value !== s.value) this._swipe = { ...s, value };
      // at most a few calls per second while the finger moves
      const now = performance.now();
      if (now - this.swipeSent > 350) {
        this.swipeSent = now;
        this.applySwipe();
      }
    } else {
      this.applySwipe();
      clearTimeout(this.swipeTimer);
      this.swipeTimer = setTimeout(() => (this._swipe = null), 700);
    }
    return true;
  }

  private applySwipe(): void {
    const s = this._swipe;
    if (!s || !this.hass) return;
    if (s.kind === "light") {
      if (s.value <= 0) void this.hass.callService("light", "turn_off", { entity_id: s.entity });
      else void this.hass.callService("light", "turn_on", { entity_id: s.entity, brightness_pct: s.value });
    } else if (s.kind === "fan") {
      if (s.value <= 0) void this.hass.callService("fan", "turn_off", { entity_id: s.entity });
      else void this.hass.callService("fan", "set_percentage", { entity_id: s.entity, percentage: s.value });
    } else void this.hass.callService("cover", "set_cover_position", { entity_id: s.entity, position: s.value });
  }

  /** Fly to a search result: rooms are selected, devices shown on their floor and flashing. */
  /** Opens a room, on another floor too: the floor first, then the room (the host opens one step per tap). */
  private openRoom(floorId: string, roomId: string): void {
    if (this.floorId === floorId && this.roomId === roomId) return;
    if (this.floorId !== floorId) {
      this.fire("floor-tap", { floorId });
      setTimeout(() => this.fire("room-tap", { floorId, roomId }), 60);
    } else this.fire("room-tap", { floorId, roomId });
  }

  private goTo(item: SearchItem): void {
    this._find = null;
    if (item.kind === "room") {
      if (item.roomId) this.openRoom(item.floorId, item.roomId);
      return;
    }
    if (this.floorId !== item.floorId) this.fire("floor-tap", { floorId: item.floorId });
    // after the host has switched the floor (its own camera flight starts first)
    setTimeout(() => this.viewer?.focus(item.floorId, item.x, item.z, item.y, item.entity), 120);
  }

  /** Start or stop hearing announcements (once per view; Home Assistant subscribes again after a reconnect by itself). */
  private listenToAnnouncements(on: boolean): void {
    if (!on) {
      this.stopAnnouncements?.();
      this.stopAnnouncements = null;
      clearTimeout(this.announceTimer);
      return;
    }
    if (this.stopAnnouncements) return;
    // a placeholder until the subscription stands, so a second update does not subscribe twice
    let stopped = false;
    this.stopAnnouncements = () => (stopped = true);
    void subscribeAnnouncements(this.hass, (a) => this.announce(a)).then((stop) => {
      if (stopped) stop();
      else this.stopAnnouncements = stop;
    });
  }

  /** An announcement arrived: show it big over the house, chime and speak it (once per page, only if meant for this screen). */
  private announce(a: Announcement): void {
    // only a real announcement (a message to say); anything else on the subscription is ignored
    if (typeof a?.message !== "string" || !a.message.trim()) return;
    if (!forThisScreen(a, this.screenName) || !claim(a)) return;
    const duration = showFor(a.message);
    this._announcement = { message: a.message, until: Date.now() + duration };
    clearTimeout(this.announceTimer);
    this.announceTimer = setTimeout(() => (this._announcement = null), duration);
    void playAnnouncement(this.hass, a);
  }

  private renderAnnouncement() {
    const a = this._announcement;
    if (!a) return nothing;
    return html`<button class="nf-announcement" role="alert" title=${translate(this.hass, "close")} @click=${() => (this._announcement = null)}>
      <span class="nf-announcement-icon" aria-hidden="true">📢</span><span class="nf-announcement-text">${a.message}</span>
    </button>`;
  }

  private renderAlerts() {
    const b = this.building;
    if (!this._alerts.length || !b) return nothing;
    const shown = this._alerts.slice(0, 3);
    return html`<div class="nf-alert-banner" role="alert">
      ${shown.map((a) => html`<button class="nf-alert nf-alert-${a.kind}" title=${alertText(this.hass, b, a)} @click=${() => this.jumpTo(a)}>${alertText(this.hass, b, a)}</button>`)}
      ${this._alerts.length > 3 ? html`<span class="nf-alert-more">+${this._alerts.length - 3}</span>` : nothing}
    </div>`;
  }

  /** Scenes and scripts of the selected room's area as chips (while no panel lists them). */
  private renderScenes() {
    const b = this.building;
    if (!this.scenes || !this.roomId || this.panelOpen || !b || !this.hass) return nothing;
    const room = b.floors.flatMap((f) => f.rooms).find((r) => r.id === this.roomId);
    const ids = room ? areaEntities(this.hass, room.area_id).filter((id) => kindOf(id) === "scene" || kindOf(id) === "script").slice(0, 6) : [];
    if (!ids.length) return nothing;
    const areaName = room?.area_id ? this.hass.areas?.[room.area_id]?.name : undefined;
    return html`<div class="nf-scenes">
      ${ids.map((id) => html`<button class="nf-chip" aria-pressed=${this._sceneFired === id} @click=${() => this.runScene(id)}>${entityName(this.hass, id, areaName)}</button>`)}
    </div>`;
  }

  private renderFind() {
    const b = this.building;
    if (!b || !this.hass) return nothing;
    if (this._find === null) {
      return html`<button class="nf-find-btn" title=${translate(this.hass, "find")} aria-label=${translate(this.hass, "find")} @click=${() => (this._find = "")}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;
    }
    const results = searchItems((this.findIndex ??= searchIndex(this.hass, b)), this._find);
    return html`<div class="nf-find">
      <input
        type="search"
        placeholder=${translate(this.hass, "find_placeholder")}
        .value=${this._find}
        @input=${(e: Event) => (this._find = (e.target as HTMLInputElement).value)}
        @keydown=${(e: KeyboardEvent) => {
          if (e.key === "Escape") this._find = null;
          if (e.key === "Enter" && results[0]) this.goTo(results[0]);
        }}
      />
      <button class="nf-find-close" aria-label=${translate(this.hass, "close")} @click=${() => (this._find = null)}>✕</button>
      ${this._find.trim()
        ? html`<div class="nf-find-list">
            ${results.length
              ? results.map(
                  (it) => html`<button @click=${() => this.goTo(it)}>
                    <span class="nf-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${it.icon ? iconPath(it.icon) : "M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${it.name}</b>${it.where ? html`<small>${it.where}</small>` : nothing}</span>
                  </button>`,
                )
              : html`<p>${translate(this.hass, "find_none")}</p>`}
          </div>`
        : nothing}
    </div>`;
  }

  /**
   * The star: a small menu for the floor shown (or the whole house) with all lights on / off, all blinds
   * up / down and the house's favourites (#145). House-wide actions want a second tap.
   */
  private renderCentral() {
    const b = this.building;
    const hass = this.hass;
    if (!b || !hass || !this.central || this._find !== null) return nothing;
    const t = (k: I18nKey, vars?: Record<string, string | number>) => translate(hass, k, vars);
    const star = html`<button
      class="nf-central-btn ${this._central ? "nf-central-on" : ""}"
      title=${t("central")}
      aria-label=${t("central")}
      aria-expanded=${this._central}
      @click=${() => {
        this._central = !this._central;
        this._armed = null;
      }}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;
    if (!this._central) return star;
    const floor = this.floorId ? b.floors.find((f) => f.id === this.floorId) : undefined;
    const floors = floor ? [floor] : b.floors;
    const lights = floors.flatMap((f) => floorControls(hass, f).lights);
    const covers = floors.flatMap((f) => floorControls(hass, f).covers);
    const lightsOn = lights.filter((id) => hass.states[id]?.state === "on").length;
    const house = !floor;
    // house-wide: the first tap arms the button ("sure?"), the second runs it
    const act = (key: string, domain: string, service: string, ids: string[]) => {
      if (!ids.length) return;
      if (house && this._armed !== key) {
        this._armed = key;
        clearTimeout(this.armTimer);
        this.armTimer = setTimeout(() => (this._armed = null), 3500);
        return;
      }
      this._armed = null;
      void hass.callService(domain, service, { entity_id: ids });
    };
    const button = (key: string, label: I18nKey, domain: string, service: string, ids: string[]) =>
      html`<button class="nf-btn ${this._armed === key ? "nf-central-armed" : ""}" ?disabled=${!ids.length} @click=${() => act(key, domain, service, ids)}>
        ${this._armed === key ? t("central_sure") : t(label)}
      </button>`;
    const favorites = (b.settings.favorites ?? []).filter((id) => hass.states[id]);
    const own = this.buttons ?? b.settings.buttons ?? [];
    return html`${star}
      <div class="nf-central" role="dialog" aria-label=${t("central")}>
        <b>${floor ? floor.name : t("central_house")}</b>
        <div class="nf-central-row">
          <span>${t("central_lights")}${lights.length ? html` <small>${lightsOn}/${lights.length}</small>` : nothing}</span>
          ${button("lights_on", "central_on", "light", "turn_on", lights.filter((id) => hass.states[id]?.state === "off"))}
          ${button("lights_off", "central_off", "light", "turn_off", lights.filter((id) => hass.states[id]?.state === "on"))}
        </div>
        ${covers.length
          ? html`<div class="nf-central-row">
              <span>${t("central_covers")} <small>${covers.length}</small></span>
              ${button("covers_open", "central_open", "cover", "open_cover", covers)}
              ${button("covers_close", "central_close", "cover", "close_cover", covers)}
            </div>`
          : nothing}
        <b>${t("central_favorites")}</b>
        ${favorites.length
          ? html`<div class="nf-central-favs">
              ${favorites.map((id) => {
                const [domain, service] = favoriteCall(id);
                const st = hass.states[id];
                const on = domain === "homeassistant" && st?.state === "on";
                return html`<button
                  class="nf-chip"
                  aria-pressed=${on || this._sceneFired === id}
                  ?disabled=${isUnavailable(st)}
                  @click=${() => {
                    void hass.callService(domain, service, { entity_id: id });
                    this._sceneFired = id;
                    setTimeout(() => (this._sceneFired = null), 600);
                  }}
                >
                  ${entityName(hass, id)}
                </button>`;
              })}
            </div>`
          : own.length
            ? nothing
            : html`<p class="nf-central-hint">${t("central_no_favorites")}</p>`}
        ${own.length
          ? html`<div class="nf-central-favs">
              ${own.map(
                (btn) => html`<button
                  class="nf-chip nf-own-btn"
                  @click=${(e: Event) => {
                    runButton(hass, e.currentTarget as HTMLElement, btn);
                    if (btn.action !== "service") this._central = false;
                  }}
                >
                  ${btn.icon ? html`<ha-icon .icon=${btn.icon.startsWith("mdi:") ? btn.icon : `mdi:${btn.icon}`}></ha-icon>` : nothing}${btn.label}
                </button>`,
              )}
            </div>`
          : nothing}
      </div>`;
  }

  /** The eye: one tap hides every bar and overlay so only the stage remains, the next brings them back. */
  private toggleLock(): void {
    this._locked = !this._locked;
    try {
      localStorage.setItem(LOCK_KEY, this._locked ? "1" : "0");
    } catch {
      // without storage the lock lasts until the page reloads
    }
  }

  /** Opens time travel over the last `hours` (24 or 168) at its start, or closes it and shows the house live again. */
  private async openTravel(hours: number | null): Promise<void> {
    clearInterval(this.travelTimer);
    this.travelTimer = undefined;
    if (hours === null || !this.hass) {
      this._travel = null;
      this.syncDevices(true);
      return;
    }
    const to = Date.now();
    const from = to - hours * 3600_000;
    this._travel = { history: new Map(), from, to, t: from, playing: false, speed: hours > 24 ? 3600 : 600, hours, moments: [], loading: true };
    try {
      const history = await loadHistory(this.hass, replayable(this.watched), from, to);
      if (!this._travel || this._travel.from !== from) return;
      this._travel = { ...this._travel, history, moments: changeMoments(history, from, to), loading: false };
    } catch {
      this._travel = null;
      this._error = translate(this.hass, "travel_failed");
      return;
    }
    this.syncDevices(true);
  }

  private travelTo(t: number): void {
    const tr = this._travel;
    if (!tr) return;
    this._travel = { ...tr, t: Math.min(tr.to, Math.max(tr.from, t)) };
    this.syncDevices(true);
  }

  private playTravel(on: boolean): void {
    const tr = this._travel;
    if (!tr) return;
    clearInterval(this.travelTimer);
    this.travelTimer = undefined;
    this._travel = { ...tr, playing: on, t: on && tr.t >= tr.to ? tr.from : tr.t };
    if (!on) return;
    this.travelTimer = setInterval(() => {
      const now = this._travel;
      if (!now) return;
      const t = now.t + 250 * now.speed;
      if (t >= now.to) this.playTravel(false);
      this.travelTo(t);
    }, 250);
  }

  private renderTravel() {
    if (!this.hass || this.clean) return nothing;
    const t = (k: I18nKey) => translate(this.hass, k);
    const tr = this._travel;
    if (!tr) {
      if (!this.travelButton) return nothing;
      return html`<button class="nf-travel-btn" title=${t("travel")} aria-label=${t("travel")} @click=${() => void this.openTravel(24)}>⏪</button>`;
    }
    const locale = this.hass.language ?? navigator.language;
    const when = new Intl.DateTimeFormat(locale, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(tr.t));
    const span = tr.to - tr.from || 1;
    const speeds: [number, I18nKey][] = [
      [60, "travel_speed_min"],
      [600, "travel_speed_10min"],
      [3600, "travel_speed_hour"],
    ];
    return html`<div class="nf-travel" role="group" aria-label=${t("travel")}>
      <button class="nf-travel-play" aria-label=${t(tr.playing ? "travel_pause" : "travel_play")} ?disabled=${tr.loading} @click=${() => this.playTravel(!tr.playing)}>${tr.playing ? "⏸" : "▶"}</button>
      <b class="nf-travel-when">${tr.loading ? t("travel_loading") : when}</b>
      <div class="nf-travel-track">
        <svg viewBox="0 0 1000 10" preserveAspectRatio="none" aria-hidden="true">${tr.moments.map((m) => svg`<rect x=${((m - tr.from) / span) * 1000} y="0" width="1.6" height="10" />`)}</svg>
        <input type="range" min=${tr.from} max=${tr.to} step="60000" .value=${String(tr.t)} ?disabled=${tr.loading} aria-label=${t("travel")} @input=${(e: Event) => this.travelTo(Number((e.target as HTMLInputElement).value))} />
      </div>
      <select aria-label=${t("travel_speed")} @change=${(e: Event) => (this._travel = { ...tr, speed: Number((e.target as HTMLSelectElement).value) })}>
        ${speeds.map(([v, k]) => html`<option value=${v} ?selected=${tr.speed === v}>${t(k)}</option>`)}
      </select>
      <button class="nf-travel-span" aria-pressed=${tr.hours === 24} @click=${() => void this.openTravel(24)}>24 h</button>
      <button class="nf-travel-span" aria-pressed=${tr.hours === 168} @click=${() => void this.openTravel(168)}>7 ${t("travel_days")}</button>
      <button class="nf-travel-live" @click=${() => void this.openTravel(null)}>● ${t("travel_live")}</button>
    </div>`;
  }

  private toggleWalk(): void {
    const v = this.viewer;
    if (!v) return;
    if (this._walking) {
      v.stopWalk();
      this._walking = false;
    } else this._walking = v.startWalk() !== null;
    this._stick = null;
  }

  /** The touch stick: drag the knob up to walk, down to step back, sideways to turn. */
  private stickMove(e: PointerEvent, start = false): void {
    const pad = e.currentTarget as HTMLElement;
    if (start) pad.setPointerCapture(e.pointerId);
    else if (!this._stick) return;
    const r = pad.getBoundingClientRect();
    const radius = r.width / 2;
    let [x, y] = [(e.clientX - r.left - radius) / radius, (e.clientY - r.top - radius) / radius];
    const l = Math.hypot(x, y);
    if (l > 1) [x, y] = [x / l, y / l];
    this._stick = [x, y];
    this.viewer?.setWalkStick(Math.abs(x) < 0.12 ? 0 : x, Math.abs(y) < 0.12 ? 0 : y);
  }

  private stickEnd(): void {
    this._stick = null;
    this.viewer?.setWalkStick(0, 0);
  }

  private renderWalk() {
    if (!this.hass || this.clean || (!this.walkButton && !this._walking)) return nothing;
    const t = (k: I18nKey) => translate(this.hass, k);
    const knob = this._stick ?? [0, 0];
    return html`<button class="nf-walk-btn ${this._walking ? "nf-walk-on" : ""}" title=${t(this._walking ? "walk_stop" : "walk")} aria-label=${t(this._walking ? "walk_stop" : "walk")} aria-pressed=${this._walking} @click=${() => this.toggleWalk()}>
        ${this._walking
          ? "✕"
          : svg`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4" r="2" /><path d="M10 21l2-6 3 3v5M9 12l1-4 4 1 3 3M8 9l-2 4" /></svg>`}
      </button>
      ${this._walking
        ? html`<div class="nf-stick" @pointerdown=${(e: PointerEvent) => this.stickMove(e, true)} @pointermove=${(e: PointerEvent) => this.stickMove(e)} @pointerup=${() => this.stickEnd()} @pointercancel=${() => this.stickEnd()}>
              <span style="transform:translate(${knob[0] * 34}px, ${knob[1] * 34}px)"></span>
            </div>
            <p class="nf-walk-hint">${t("walk_hint")}</p>`
        : nothing}`;
  }

  private renderLock() {
    if (!this.lockButton || !this.hass || this.clean) return nothing;
    const label = translate(this.hass, this._locked ? "lock3d_off" : "lock3d_on");
    return html`<button class="nf-lock3d ${this._locked ? "nf-lock3d-on" : ""}" title=${label} aria-label=${label} aria-pressed=${this._locked} @click=${() => this.toggleLock()}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="11" width="14" height="9" rx="2" />
        ${this._locked ? svg`<path d="M8 11V8a4 4 0 0 1 8 0v3" />` : svg`<path d="M8 11V8a4 4 0 0 1 7.5-2" />`}
      </svg>
    </button>`;
  }

  /** The clock in its corner; top left it shares the column with the sensor and energy bar (see renderTopLeft). */
  private renderClock(inColumn = false) {
    if (!this.clock || !this.hass || (this.clock === "top_left" && !inColumn)) return nothing;
    const locale = this.hass.language ?? navigator.language;
    const now = new Date(this._now);
    const time = new Intl.DateTimeFormat(locale, { hour: "2-digit", minute: "2-digit" }).format(now);
    const day = new Intl.DateTimeFormat(locale, { weekday: "long", day: "numeric", month: "long" }).format(now);
    return html`<div class="nf-clock nf-clock-${this.clock}" aria-hidden="true"><b>${time}</b><span>${day}</span></div>`;
  }

  private renderEye() {
    // while the search is open its field takes the eye's place (#220)
    if (!this.cleanButton || !this.hass || (this._find !== null && !this.clean)) return nothing;
    const label = translate(this.hass, this.clean ? "controls_show" : "controls_hide");
    return html`<button
      class="nf-eye ${this.clean ? "nf-eye-clean" : ""}"
      title=${label}
      aria-label=${label}
      aria-pressed=${this.clean}
      @click=${() => this.dispatchEvent(new CustomEvent("clean-toggle", { bubbles: true, composed: true }))}
    >
      ${this.clean
        ? svg`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`
        : svg`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`;
  }

  private renderSwipe() {
    const s = this._swipe;
    if (!s || !this.hass) return nothing;
    const off = s.kind === "light" && s.value <= 0;
    return html`<div class="nf-swipe" style="left:${s.x}px;top:${s.y}px">
      <span>${entityName(this.hass, s.entity)}</span>
      <b>${off ? translate(this.hass, "swipe_off") : `${s.value} %`}</b>
      <i><em style="height:${s.value}%"></em></i>
    </div>`;
  }

  /** A light switch or socket was tapped: one button switches at once, several open a small list to pick from. */
  private tapPlate(furnitureId: string, x: number, y: number): void {
    const f = this.building?.floors.flatMap((fl) => fl.furniture).find((it) => it.id === furnitureId);
    const ids = f ? gangEntities(f.gang_entities, packItem(f.type)?.gangs ?? 0) : [];
    if (ids.length === 1) return this.onDeviceTap(ids[0], x, y);
    if (ids.length > 1) this._plate = { ids, x, y };
  }

  private renderPlate() {
    const p = this._plate;
    if (!p || !this.hass) return nothing;
    const hass = this.hass;
    const close = () => (this._plate = null);
    return html`<div class="nf-menu-backdrop" @click=${close}></div>
      <div class="nf-plate-menu" style="left:${Math.max(8, p.x - 110)}px;top:${Math.max(8, p.y - 20 - p.ids.length * 46)}px" role="menu">
        ${p.ids.map((id, i) => {
          const st = hass.states[id];
          const on = isActive(st) || st?.state === "on";
          return html`<button role="menuitem" class=${on ? "on" : ""} @click=${() => {
            close();
            this.onDeviceTap(id, p.x, p.y);
          }}><b>${i + 1}</b><span>${entityName(hass, id)}</span><i>${st ? stateText(hass, st) : "–"}</i></button>`;
        })}
      </div>`;
  }

  private renderMenu() {
    const m = this._menu;
    if (!m || !this.hass) return nothing;
    const stage = this.renderRoot.querySelector(".nf-stage") as HTMLElement | null;
    const w = stage?.clientWidth ?? 800;
    const h = stage?.clientHeight ?? 600;
    const left = Math.max(8, Math.min(w - 240, m.x - 116));
    const top = Math.max(8, Math.min(h - 360, m.y - 170));
    return html`<div class="nf-menu-backdrop" @click=${() => (this._menu = null)}></div>
      <nf-quick-menu
        style="left:${left}px;top:${top}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${m.entity}
        .car=${m.car ?? null}
        .presets=${[]}
        ?confirmSwitch=${this.confirmSet.has(m.entity)}
        @close=${() => (this._menu = null)}
      ></nf-quick-menu>`;
  }

  private onDeviceTap(entityId: string, x = 0, y = 0): void {
    // lamps without a light are drawn, but nothing of Home Assistant stands behind them
    if (entityId.startsWith("lamp:")) return;
    // in the past nothing is switched
    if (this._travel) return;
    const ownTap = entityId.startsWith("tap:") ? entityId.slice(4) : this.tapPins.get(entityId);
    if (ownTap) {
      const f = this.building?.floors.flatMap((fl) => fl.furniture).find((it) => it.id === ownTap);
      if (f?.tap) runButton(this.hass, this, f.tap);
      return;
    }
    if (this.pluginTapped(entityId)) return;
    if (entityId.startsWith("gang:")) return this.tapPlate(entityId.slice(5), x, y);
    // the street end of the grid cable opens the grid sensor: the balance's, else the meter's (#223)
    if (entityId === "grid") {
      const b = this.building;
      const sensor = b ? (b.energy.grid ?? deviceSensors(b, (f) => this.furnitureLinks?.get(f.id)?.power ?? null).grid) : null;
      if (sensor) openMoreInfo(this, sensor);
      return;
    }
    const kind = kindOf(entityId);
    // blinds have no single on/off: a tap opens their quick menu (up, positions, stop, down)
    if (kind === "cover") {
      this._menu = { entity: entityId, x, y };
      return;
    }
    // a smart lock always asks first, whichever way it goes
    if (kind === "lock") {
      const unlocked = isUnlocked(this.hass, entityId);
      const name = entityName(this.hass, entityId);
      if (confirm(translate(this.hass, unlocked ? "lock_confirm_lock" : "lock_confirm_unlock", { name }))) void this.hass.callService("lock", unlocked ? "lock" : "unlock", { entity_id: entityId });
      return;
    }
    if (kind && TOGGLE_KINDS.has(kind)) {
      if (this.confirmSet.has(entityId) && !confirm(translate(this.hass, "confirm_switch", { name: entityName(this.hass, entityId) }))) return;
      void toggleEntity(this.hass, entityId);
    } else openMoreInfo(this, entityId);
  }

  /** Hands a tap on a placed device to the plugins (a camera opens its live picture); true when one took it. */
  private pluginTapped(entityId: string): boolean {
    const state = this.hass?.states[entityId];
    const placement = this.placementInfo.get(entityId);
    if (!state || !placement) return false;
    const placed = this.building?.floors.find((f) => f.id === placement.floorId)?.placements.find((p) => p.entity_id === entityId);
    return pluginTap({ hass: this.hass, entityId, state }, placement, placed?.plugin ?? undefined, {
      showWindow: (node, options) => {
        if (node && "hass" in node) (node as Node & { hass: unknown }).hass = this.hass;
        this._pluginWindow = node ? { node, title: options?.title ?? "" } : null;
      },
      moreInfo: (id) => openMoreInfo(this, id ?? entityId),
    });
  }

  private renderPluginWindow() {
    const w = this._pluginWindow;
    if (!w) return nothing;
    return html`<div class="nf-plugin-window" @pointerdown=${(e: Event) => e.stopPropagation()}>
      <div class="nf-pw-head"><span>${w.title}</span><button class="nf-pw-close" aria-label=${translate(this.hass, "close")} @click=${() => (this._pluginWindow = null)}>✕</button></div>
      <div class="nf-pw-body">${w.node}</div>
    </div>`;
  }

  /** The start view: the card's own, else the one remembered in the editor. */
  private startViewOf(): StartView | null {
    return this.startView ?? this.building?.settings.start_view ?? null;
  }

  /** The camera as it stands (for "remember this view as the start"). */
  currentView(): StartView | null {
    return this.viewer?.currentView() ?? null;
  }

  resetView(): void {
    this.viewer?.resetView();
  }

  private fire(type: string, detail: unknown): void {
    this.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));
  }

  private toggleFlows(): void {
    this._flows = !this._flows;
    try {
      localStorage.setItem("nextfloor.flows", this._flows ? "1" : "0");
    } catch {
      // private mode: the choice lasts for this page only
    }
    this.syncDevices(true);
  }

  /** The floating cards (house balance; car and music follow) and the points in the plan they hang over. */
  /** The cars of the parking spots: what each reports, and the point over the spot (over the car when it is there). */
  private liveCars(hass: HomeAssistant, b: Building): { spot: string; name: string; at: { floorId: string; x: number; z: number; y: number }; car: CarInfo }[] {
    const out: { spot: string; name: string; at: { floorId: string; x: number; z: number; y: number }; car: CarInfo }[] = [];
    for (const floor of b.floors) {
      for (const f of floor.furniture) {
        if (f.type !== "parking") continue;
        const car = readCar(hass, f);
        if (!car || (car.soc === null && car.range === null && car.locked === null && car.climateOn === null)) continue;
        const vehicle = parkedVehicle(hass, f);
        const veh = vehicle ? vehicleFurniture(f, vehicle) : null;
        const name = f.name || (vehicle ? furnitureName(hass, vehicle) : furnitureName(hass, f.type));
        out.push({ spot: f.id, name, at: { floorId: floor.id, x: f.x, z: f.z, y: mountBase(floor, f) + (veh?.h ?? 0.2) + 0.6 }, car });
      }
    }
    return out;
  }

  /** Media players in the plan: placed as a device, or linked to furniture (TV, speaker); their point is on top of it. */
  private liveMedia(hass: HomeAssistant, b: Building): MediaNow[] {
    const spots: { entity: string; name: string; at: { floorId: string; x: number; z: number; y: number } }[] = [];
    for (const floor of b.floors) {
      for (const f of floor.furniture) {
        const e = this.furnitureLinks?.get(f.id)?.entity;
        if (e?.startsWith("media_player.")) spots.push({ entity: e, name: f.name || furnitureName(hass, f.type), at: { floorId: floor.id, x: f.x, z: f.z, y: mountBase(floor, f) + f.h + 0.15 } });
      }
      for (const pl of floor.placements) {
        if (pl.entity_id.startsWith("media_player.")) spots.push({ entity: pl.entity_id, name: pl.name || entityName(hass, pl.entity_id), at: { floorId: floor.id, x: pl.x, z: pl.z, y: (pl.y ?? 1.1) + 0.15 } });
      }
    }
    return mediaNow(hass, spots);
  }

  /** Solar and consumption over the last 24 hours for the house card, loaded at most every 10 minutes while the card shows. */
  private refreshDayCurves(b: Building): void {
    const hass = this.hass;
    if (!hass || this._travel || Date.now() - this.curvesAt < 600_000) return;
    this.curvesAt = Date.now();
    const balance = (h: HomeAssistant) => energySummary(h, b, findConsumers(h, b), deviceSensors(b, (f) => this.furnitureLinks?.get(f.id)?.power ?? null));
    const ids = statesRead(hass, balance);
    const to = Date.now();
    const from = to - 24 * 3600_000;
    void loadHistory(hass, ids, from, to, true)
      .then((history) => {
        this.dayCurves = dayCurves(hass, history, from, to, balance);
        this.syncDevices(true);
      })
      .catch(() => (this.dayCurves = null));
  }

  private syncLhCards(v: NextFloorViewer, b: Building, pic: EnergyPicture, cars: ReturnType<NfView3d["liveCars"]>, media: MediaNow[]): void {
    const cards: LiveCard[] = [];
    const s = pic.summary;
    const hasEnergy = s.solar !== null || s.grid !== null || s.battery !== null || s.consumption !== null;
    const hub = houseHub(b);
    const top = [...b.floors].sort((p, q) => q.elevation - p.elevation)[0];
    if (this.liveCardsOn && !this.dimmed && !this.roomId && hasEnergy && hub && top) {
      // over the middle of the house, above the roof
      let x = 0, z = 0, n = 0;
      for (const r of top.rooms) for (const [px, pz] of r.points) (x += px), (z += pz), n++;
      cards.push({ kind: "house", at: { floorId: top.id, x: n ? x / n : hub.x, z: n ? z / n : hub.z, y: top.height + 3.2 }, summary: s, autarky: pic.autarky, curves: this.dayCurves ?? undefined });
      this.refreshDayCurves(b);
    }
    if (this.liveCardsOn && !this.dimmed && !this.roomId) {
      for (const c of cars) cards.push({ kind: "car", at: c.at, spot: c.spot, name: c.name, car: c.car });
      for (const m of media) cards.push({ kind: "media", at: { ...m.at, y: m.at.y + 0.5 }, media: m });
    }
    if (JSON.stringify(cards) !== JSON.stringify(this._liveCards)) this._liveCards = cards;
    v.setLiveAnchors(
      cards.map((c) => c.at),
      cards.length ? (i, x, y, visible) => this.placeLhCard(i, x, y, visible) : null,
    );
  }

  /** Called by the viewer after every frame: moves a card to its point without a Lit render. */
  private placeLhCard(i: number, x: number, y: number, visible: boolean): void {
    const el = this.renderRoot.querySelector<HTMLElement>(`.live-card[data-i="${i}"]`);
    if (!el) return;
    el.dataset.x = String(x);
    el.dataset.y = String(y);
    el.style.visibility = visible ? "visible" : "hidden";
    // the last card of the frame: lay them all out so none covers another
    if (i === this._liveCards.length - 1) unstackLhCards(this.renderRoot);
  }

  private toggleLhCards(): void {
    this._liveCardOn = !this._liveCardOn;
    try {
      localStorage.setItem("nextfloor.cards", this._liveCardOn ? "1" : "0");
    } catch {
      // private mode: the choice lasts for this page only
    }
    this.syncDevices(true);
  }

  /** Top left: the clock there, with the own sensors and the energy bar below it instead of under it. */
  private renderTopLeft() {
    const bar = this.clean ? nothing : this.renderLhEnergy();
    if (this.clock !== "top_left" || !this.hass) return bar;
    return html`<div class="nf-topleft">${this.renderClock(true)}${bar}</div>`;
  }

  /** NextFloor's energy bar: what the house makes, uses, stores and trades, and the switches for flows and cards. */
  private renderLhEnergy() {
    const own = this.ownSensors();
    const e = this._liveEnergy?.summary;
    const energy = !!e && !this.roomId && this.showEnergy && !!this.hass && !(e.consumption === null && e.grid === null && e.solar === null && e.battery === null);
    if (!energy) return own.length ? html`<div class="nf-energy" aria-live="off">${own}</div>` : nothing;
    const t = (k: Parameters<typeof translate>[1]) => translate(this.hass, k);
    const items: { cls: string; label: string; value: string }[] = [];
    if (e.solar !== null) items.push({ cls: "solar", label: t("energy_solar"), value: formatPower(this.hass, e.solar) });
    if (e.consumption !== null) items.push({ cls: "total", label: t("energy_consumption"), value: formatPower(this.hass, e.consumption) });
    if (e.rest !== undefined && e.rest !== null) items.push({ cls: "total", label: t("energy_rest"), value: formatPower(this.hass, e.rest) });
    if (e.battery !== null || e.soc !== null) {
      const parts = [e.battery !== null ? formatPower(this.hass, Math.abs(e.battery)) : null, e.soc !== null ? `${Math.round(e.soc)} %` : null].filter(Boolean);
      items.push({ cls: "battery", label: t("energy_battery"), value: parts.join(" · ") });
    }
    if (e.grid !== null) {
      const exporting = e.grid < 0;
      items.push({ cls: exporting ? "export" : "grid", label: t(exporting ? "energy_grid_export" : "energy_grid_import"), value: formatPower(this.hass, Math.abs(e.grid)) });
    }
    if (e.tariff) items.push({ cls: "tariff", label: t("energy_tariff"), value: `${formatNumber(this.hass, e.tariff.value, 3)} ${e.tariff.unit}`.trim() });
    return html`<div class="nf-energy" aria-live="off">
      ${this.liveCardsOn && this._liveCards.some((c) => c.kind === "house") ? nothing : items.map((i) => html`<div class="nf-energy-item nf-energy-${i.cls}"><span>${i.label}</span><b>${i.value}</b></div>`)}
      ${this.flows !== null
        ? nothing
        : html`<button class="nf-energy-item nf-flow-toggle" aria-pressed=${this._flows} title=${t("flows_hint")} aria-label=${t("flows")} @click=${() => this.toggleFlows()}>
            <span>${t("flows")}</span><b>⚡</b>
          </button>`}
      ${this.holograms !== null
        ? nothing
        : html`<button class="nf-energy-item nf-flow-toggle" aria-pressed=${this._liveCardOn} title=${t("holos_hint")} aria-label=${t("holos")} @click=${() => this.toggleLhCards()}>
            <span>${t("holos")}</span><b>◫</b>
          </button>`}
      ${own}
    </div>`;
  }

  /** The plan's own sensors at the top (outside temperature, the alarm…): their name and state; a tap opens their details. */
  private ownSensors() {
    const ids = this.sensorBar && this.hass ? (this.building?.settings.status_entities ?? []) : [];
    return ids
      .filter((id) => this.hass.states[id])
      .map(
        (id) => html`<button class="nf-energy-item nf-own-sensor" title=${entityName(this.hass, id)} @click=${() => openMoreInfo(this, id)}>
          <span>${entityName(this.hass, id)}</span><b>${stateText(this.hass, this.hass.states[id])}</b>
        </button>`,
      );
  }

  /** The map's credit while a real map lies under the plan (OpenStreetMap asks for it). */
  private renderMapCredit() {
    const map = this.building?.settings.map;
    if (!mapShown(map)) return nothing;
    return html`<a class="nf-map-credit" href=${mapCredit(map).href} target="_blank" rel="noopener">${mapCredit(map).text}</a>`;
  }

  private renderLegend() {
    if (this.heatMode === "none" || this.heatMode === "values") return nothing;
    const scale = HEAT_SCALES[this.heatMode];
    // temperatures are coloured in °C and shown in Home Assistant's unit
    const temp = this.heatMode === "temperature";
    const lo = temp ? fromCelsius(this.hass, scale.stops[0][0]) : scale.stops[0][0];
    const hi = temp ? fromCelsius(this.hass, scale.stops[scale.stops.length - 1][0]) : scale.stops[scale.stops.length - 1][0];
    const unit = temp ? tempUnit(this.hass) : scale.unit;
    const t = (k: Parameters<typeof translate>[1]) => translate(this.hass, k);
    return html`<div class="nf-legend">
      <b>${t(`heat_${this.heatMode}`)}</b>
      <span class="nf-legend-bar" style="background:${heatGradient(this.heatMode)}"></span>
      <span class="nf-legend-range"><span>${formatNumber(this.hass, lo, 0)} ${unit}</span><span>${formatNumber(this.hass, hi, 0)} ${unit}</span></span>
      ${this.heatValues.size ? nothing : html`<span class="nf-legend-none">${t("heat_none_found")}</span>`}
    </div>`;
  }

  /** The sky colour behind the house right now (night: deep blue-black, day: lighter and bluer, clouds in between). */
  private skyColor(): [number, number, number] {
    const stage = STAGE[this.theme] ?? STAGE.neon;
    const sky = this._sky;
    return stage.night[0].map((v, i) => Math.round(v + (stage.day[0][i] - v) * sky)) as [number, number, number];
  }

  protected render() {
    const sky = this._sky;
    const mix = (a: number[], b: number[]) => `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * sky)).join(",")})`;
    const stage = STAGE[this.theme] ?? STAGE.neon;
    const style = `--nf-sky:${mix(stage.night[0], stage.day[0])};--nf-ground:${mix(stage.night[1], stage.day[1])}` + backdropStyle(this.building?.settings.backdrop);
    return html`<div
      class="nf-stage ${this.roomLabels ? "" : "nf-no-room-names"} ${this._low ? "nf-low" : ""} ${this.panelOpen ? "nf-panel-open" : ""} ${this._alerts.length ? "nf-has-alerts" : ""} ${this._narrowStage ? "nf-narrow" : ""}"
      style=${style}
    >
      ${this._error ? html`<p class="nf-error">${this._error}</p>` : nothing} ${this.renderTopLeft()} ${renderLhCards(this.hass, this.roomId || this.panelOpen ? [] : this._liveCards, (domain, service, entity, data) => this.hass?.callService(domain, service, { entity_id: entity, ...data }))} ${this.clean ? nothing : this.renderLegend()} ${this.renderMapCredit()}
      ${this.renderAlerts()} ${this.renderAnnouncement()} ${this.clean ? nothing : html`${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.renderSwipe()}
      ${this.renderMenu()} ${this.renderPlate()} ${this.renderEye()} ${this.renderLock()} ${this.renderWalk()} ${this.renderTravel()} ${this.renderClock()} ${this.renderPluginWindow()}
      ${this.showStats && this._stats
        ? html`<span class="nf-stats"
            ><b>${this._stats.fps ? translate(this.hass, "stats_fps", { fps: this._stats.fps, ms: this._stats.worstMs }) : translate(this.hass, "stats_idle")}</b>
            ${this._stats.busy.length ? html`(${this._stats.busy.map((b) => translate(this.hass, `stats_busy_${b}` as I18nKey)).join(", ")})` : nothing} ·
            ${translate(this.hass, "stats", { calls: this._stats.calls, tris: this._stats.triangles.toLocaleString() })} ·
            ${translate(this.hass, this._stats.low ? "stats_low" : "stats_full", { r: formatNumber(this.hass, this._stats.pixelRatio, 2) })}</span
          >`
        : nothing}
    </div>`;
  }

  static styles = [
    tokens,
    controls,
    liveCardStyles,
    css`
      :host {
        display: block;
        position: relative;
        min-height: 200px;
      }
      .nf-alert-banner {
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        gap: 6px;
        max-width: calc(100% - 24px);
        z-index: 4;
      }
      .nf-alert {
        flex: 0 1 auto;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 7px 14px 7px 12px;
        border: 0;
        border-left: 4px solid #ff3b4f;
        border-radius: 12px;
        background: var(--nf-chrome-solid);
        color: var(--nf-text);
        font: 600 13.5px var(--nf-font);
        box-shadow: 0 0 18px rgba(255, 59, 79, 0.35);
        cursor: pointer;
        animation: nf-alert-pulse 1.2s ease-in-out infinite;
      }
      .nf-alert-water,
      .nf-alert-window_rain {
        border-left-color: #4fb3ff;
        box-shadow: 0 0 18px rgba(79, 179, 255, 0.35);
      }
      .nf-alert-alarm_pending {
        border-left-color: #ffb547;
        box-shadow: 0 0 18px rgba(255, 181, 71, 0.35);
      }
      .nf-announcement {
        position: absolute;
        inset: 18% 8% auto;
        z-index: 30;
        display: flex;
        align-items: center;
        gap: 18px;
        margin: 0 auto;
        max-width: 860px;
        padding: 22px 28px;
        border: 1px solid color-mix(in srgb, var(--nf-accent) 55%, transparent);
        border-radius: 22px;
        background: var(--nf-chrome-solid);
        color: var(--nf-text);
        box-shadow: 0 0 40px color-mix(in srgb, var(--nf-accent) 35%, transparent), 0 18px 50px rgba(0, 0, 0, 0.45);
        font: 700 clamp(22px, 3.6vw, 40px) / 1.25 var(--nf-font);
        text-align: left;
        cursor: pointer;
        animation: nf-announce-in 0.35s ease-out;
      }
      .nf-announcement-icon {
        font-size: 1.3em;
      }
      @keyframes nf-announce-in {
        from {
          opacity: 0;
          transform: translateY(-12px) scale(0.98);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .nf-announcement {
          animation: none;
        }
      }
      /* a contact that stopped answering is a chore, not an emergency: no glow, no pulse */
      .nf-alert-contact_lost {
        border-left-color: #ffb547;
        box-shadow: none;
        animation: none;
      }
      .nf-alert-more {
        align-self: center;
        color: var(--nf-muted);
        font-size: 13px;
      }
      @keyframes nf-alert-pulse {
        50% {
          box-shadow: 0 0 4px transparent;
        }
      }
      .nf-has-alerts .nf-energy,
      .nf-has-alerts .nf-topleft {
        top: 58px;
      }
      /* the clock top left stacks above the sensor and energy bar rather than covering it */
      .nf-topleft {
        position: absolute;
        left: 12px;
        top: 10px;
        z-index: 3;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        max-width: calc(100% - 24px);
        pointer-events: none;
      }
      .nf-topleft > .nf-clock,
      .nf-topleft > .nf-energy {
        position: static;
        max-width: 100%;
      }
      .nf-scenes {
        position: absolute;
        left: 60px;
        right: 60px;
        bottom: calc(10px + var(--nf-bottom-inset, 0px));
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 6px;
        z-index: 2;
        pointer-events: none;
      }
      .nf-scenes .nf-chip {
        pointer-events: auto;
      }
      @media (prefers-reduced-motion: reduce) {
        .nf-alert,
        .nf-dev-found {
          animation: none;
        }
      }
      .nf-stage {
        position: absolute;
        inset: 0;
        overflow: hidden;
        container-type: size;
        container-name: nf;
        background: radial-gradient(ellipse at 50% 35%, var(--nf-sky, var(--nf-bg2)), var(--nf-ground, var(--nf-bg)) 72%);
        transition: background 2s ease;
      }
      .nf-canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
        touch-action: none;
        cursor: grab;
      }
      .nf-canvas:active {
        cursor: grabbing;
      }
      .nf-labels {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }
      .nf-pin-info {
        display: grid;
        gap: 1px;
        text-align: center;
      }
      .nf-pin-info small {
        font-size: 11px;
        font-weight: 500;
        opacity: 0.9;
        font-variant-numeric: tabular-nums;
      }
      .nf-pin {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        font: 600 12.5px var(--nf-title-font);
        color: var(--nf-text);
        background: var(--nf-chrome);
        border: 1px solid var(--nf-line);
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        box-shadow: var(--nf-shadow);
      }
      .nf-pin-floor {
        display: grid;
        justify-items: start;
        gap: 1px;
        padding: 8px 14px;
        border-radius: 12px;
        background: var(--nf-accent);
        color: var(--nf-accent-text);
        border-color: transparent;
        box-shadow: var(--nf-shadow);
      }
      .nf-pin-floor b {
        font: 700 15px var(--nf-title-font);
        letter-spacing: -0.01em;
      }
      .nf-pin-floor span {
        font: 500 12px var(--nf-font);
        opacity: 0.78;
      }
      .nf-dev {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px;
        border-radius: 999px;
        border: 1px solid var(--nf-line);
        background: var(--nf-chrome);
        color: var(--nf-muted);
        font: 600 12px var(--nf-font);
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        touch-action: manipulation;
        -webkit-user-select: none;
        user-select: none;
        transition: opacity 0.2s ease;
      }
      .nf-dev-icon {
        display: grid;
        place-items: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: color-mix(in srgb, var(--nf-soft) 14%, transparent);
      }
      .nf-dev-text {
        display: none;
        padding-right: 6px;
        color: var(--nf-text);
        font-variant-numeric: tabular-nums;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .nf-dev-watt:empty {
        display: none;
      }
      .nf-dev-watt {
        padding: 1px 6px 1px 0;
        color: var(--nf-accent);
        font-variant-numeric: tabular-nums;
        font-weight: 700;
      }
      .nf-dev-on .nf-dev-watt {
        color: #2a1a00;
      }
      .nf-person {
        position: absolute;
        left: 0;
        top: 0;
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        background: #ff5fd2;
        color: #fff;
        font: 700 12px var(--nf-font);
        box-shadow:
          0 0 0 2px rgba(255, 95, 210, 0.45),
          0 0 18px #ff5fd2;
        pointer-events: auto;
      }
      .nf-person img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .nf-person[hidden] {
        display: none;
      }
      .nf-no-room-names .nf-pin {
        display: none !important;
      }
      /* tablet level: blur over the canvas and glowing shadows are expensive on weak GPUs */
      .nf-stage.nf-low {
        transition: none;
      }
      .nf-low .nf-pin,
      .nf-low .nf-dev,
      .nf-low .nf-dev-on,
      .nf-low .nf-energy-item,
      .nf-low .nf-find input,
      .nf-low .nf-find-list,
      .nf-low .nf-find-btn,
      .nf-low .nf-swipe,
      .nf-low .nf-thumb {
        backdrop-filter: none;
        box-shadow: none;
        transition: none;
      }
      .nf-thumbs {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: calc(100% - 140px);
        overflow-y: auto;
        scrollbar-width: none;
        z-index: 2;
      }
      .nf-thumb {
        position: relative;
        display: grid;
        padding: 0;
        width: 150px;
        border: 1px solid var(--nf-line);
        border-radius: 14px;
        background: color-mix(in srgb, var(--nf-chrome) 70%, transparent);
        color: var(--nf-text);
        cursor: pointer;
        overflow: hidden;
        font: inherit;
        box-shadow: var(--nf-shadow);
        opacity: 0.72;
        transition: opacity 0.15s, border-color 0.15s;
      }
      .nf-thumb:hover,
      .nf-thumb[aria-pressed="true"] {
        opacity: 1;
      }
      .nf-thumb[aria-pressed="true"] {
        border-color: var(--nf-accent);
        box-shadow: var(--nf-shadow), 0 0 0 2px var(--nf-accent);
      }
      .nf-thumb img {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 3;
      }
      .nf-thumb span {
        position: absolute;
        left: 8px;
        bottom: 6px;
        font-size: 12px;
        font-weight: 600;
      }
      .nf-thumb img + span {
        inset: auto 0 0 0;
        padding: 18px 10px 6px;
        color: #fff;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.62));
      }
      .nf-thumbs-fold {
        align-self: flex-start;
        width: 26px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--nf-line);
        border-radius: 8px;
        background: var(--nf-chrome);
        color: var(--nf-text);
        font-size: 11px;
        cursor: pointer;
      }
      /* folded: plain floor buttons with their names, no pictures (D177) */
      .nf-thumbs-compact .nf-thumb {
        padding: 6px 10px;
        min-width: 0;
      }
      .nf-thumbs-compact .nf-thumb span {
        position: static;
        background: none;
        padding: 0;
      }
      .nf-thumb-house {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
      }
      .nf-thumb-house span {
        position: static;
        text-shadow: none;
      }
      .nf-thumbs-small .nf-thumb {
        width: 104px;
      }
      .nf-find-btn {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--nf-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--nf-chrome);
        color: var(--nf-text);
        box-shadow: var(--nf-shadow);
        cursor: pointer;
      }
      /* the star sits above the search button, its menu opens above it */
      .nf-central-btn {
        position: absolute;
        left: 12px;
        bottom: calc(56px + var(--nf-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--nf-chrome);
        color: var(--nf-text);
        box-shadow: var(--nf-shadow);
        cursor: pointer;
        z-index: 3;
      }
      .nf-central-on {
        color: var(--nf-accent);
      }
      .nf-central {
        position: absolute;
        left: 12px;
        bottom: calc(104px + var(--nf-bottom-inset, 0px));
        width: min(320px, calc(100% - 24px));
        max-height: calc(100% - 140px);
        overflow-y: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 12px 14px;
        border: 1px solid var(--nf-line);
        border-radius: 16px;
        background: var(--nf-chrome);
        color: var(--nf-text);
        box-shadow: var(--nf-shadow);
        backdrop-filter: blur(10px);
        z-index: 4;
      }
      .nf-central > b {
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        opacity: 0.7;
      }
      .nf-central-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
      }
      .nf-central-row small {
        opacity: 0.6;
      }
      .nf-central .nf-btn {
        min-width: 64px;
      }
      .nf-central-armed {
        background: #ff8a3d !important;
        color: #1a0d00 !important;
      }
      .nf-central-favs {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .nf-own-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .nf-own-btn ha-icon {
        --mdc-icon-size: 18px;
      }
      .nf-central-hint {
        margin: 0;
        font-size: 13px;
        opacity: 0.7;
      }
      .nf-low .nf-central {
        backdrop-filter: none;
      }
      /* the eye sits beside the search button; alone in the corner once the view is clean */
      .nf-travel-btn {
        position: absolute;
        left: 188px;
        bottom: calc(10px + var(--nf-bottom-inset, 0px));
        width: 36px;
        height: 36px;
        padding: 0;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.35);
        background: rgba(8, 16, 34, 0.7);
        color: var(--nf-text);
        font-size: 14px;
        cursor: pointer;
        z-index: 4;
      }
      .nf-travel {
        position: absolute;
        left: 50%;
        bottom: calc(62px + var(--nf-bottom-inset, 0px));
        transform: translateX(-50%);
        width: min(860px, calc(100% - 24px));
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 18px;
        background: rgba(8, 16, 34, 0.82);
        box-shadow: 0 6px 22px rgba(0, 0, 0, 0.4);
        color: var(--nf-text);
        z-index: 5;
        flex-wrap: wrap;
      }
      .nf-travel button,
      .nf-travel select {
        min-height: 32px;
        border: 0;
        border-radius: 999px;
        padding: 0 10px;
        background: rgba(127, 127, 127, 0.16);
        color: inherit;
        font: inherit;
        font-size: 13px;
        cursor: pointer;
      }
      .nf-travel select option {
        color: #111;
      }
      .nf-travel .nf-travel-play {
        width: 36px;
        padding: 0;
        background: var(--nf-accent);
        color: #041018;
      }
      .nf-travel-span[aria-pressed="true"] {
        box-shadow: inset 0 0 0 1px var(--nf-accent);
        color: var(--nf-accent);
      }
      .nf-travel-live {
        color: #ff5a6b !important;
      }
      .nf-travel-when {
        min-width: 92px;
        font-variant-numeric: tabular-nums;
        font-size: 14px;
      }
      .nf-travel-track {
        position: relative;
        flex: 1 1 220px;
        height: 28px;
      }
      .nf-travel-track svg {
        position: absolute;
        inset: 9px 0;
        width: 100%;
        height: 10px;
        fill: var(--nf-accent);
        opacity: 0.55;
        pointer-events: none;
      }
      .nf-travel-track input {
        position: absolute;
        inset: 0;
        width: 100%;
        margin: 0;
        background: transparent;
        accent-color: var(--nf-accent);
      }
      .nf-walk-btn {
        position: absolute;
        left: 144px;
        bottom: calc(10px + var(--nf-bottom-inset, 0px));
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        padding: 0;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.35);
        background: rgba(8, 16, 34, 0.7);
        color: var(--nf-text);
        font-size: 16px;
        cursor: pointer;
        z-index: 4;
      }
      .nf-walk-on {
        color: #041018;
        background: var(--nf-accent);
        border-color: var(--nf-accent);
      }
      .nf-stick {
        position: absolute;
        right: 28px;
        bottom: calc(70px + var(--nf-bottom-inset, 0px));
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: rgba(8, 16, 34, 0.45);
        border: 1px solid rgba(160, 240, 255, 0.35);
        display: grid;
        place-items: center;
        touch-action: none;
        z-index: 4;
      }
      .nf-stick span {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background: var(--nf-accent);
        opacity: 0.85;
        pointer-events: none;
      }
      .nf-walk-hint {
        position: absolute;
        left: 50%;
        top: 12px;
        transform: translateX(-50%);
        margin: 0;
        padding: 6px 12px;
        border-radius: 999px;
        background: rgba(8, 16, 34, 0.6);
        color: var(--nf-muted);
        font-size: 12px;
        pointer-events: none;
        z-index: 3;
      }
      .nf-lock3d {
        position: absolute;
        left: 100px;
        bottom: calc(10px + var(--nf-bottom-inset, 0px));
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        padding: 0;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.35);
        background: rgba(8, 16, 34, 0.7);
        color: var(--nf-text);
        cursor: pointer;
        z-index: 4;
      }
      .nf-lock3d-on {
        color: #041018;
        background: var(--nf-accent);
        border-color: var(--nf-accent);
      }
      .nf-plugin-window {
        position: absolute;
        right: 12px;
        bottom: 12px;
        z-index: 6;
        width: min(420px, calc(100% - 24px));
        border-radius: 12px;
        overflow: hidden;
        background: rgba(10, 16, 22, 0.92);
        border: 1px solid rgba(127, 208, 255, 0.35);
        box-shadow: 0 8px 28px rgba(0, 0, 0, 0.45);
        color: #e6f4fb;
      }
      .nf-pw-head {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 8px 6px 12px;
        font-size: 13px;
      }
      .nf-pw-head span {
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .nf-pw-close {
        border: 0;
        background: transparent;
        color: inherit;
        font-size: 16px;
        cursor: pointer;
        padding: 2px 6px;
      }
      .nf-pw-body {
        line-height: 0;
      }
      .nf-clock {
        position: absolute;
        z-index: 3;
        display: flex;
        flex-direction: column;
        padding: 8px 14px;
        border-radius: 16px;
        background: rgba(8, 16, 34, 0.55);
        color: var(--nf-text);
        pointer-events: none;
        line-height: 1.1;
      }
      .nf-clock b {
        font-size: clamp(28px, 6cqmin, 64px);
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        letter-spacing: -0.02em;
      }
      .nf-clock span {
        font-size: clamp(12px, 1.8cqmin, 18px);
        color: var(--nf-muted);
      }
      .nf-clock-top_left {
        left: 16px;
        top: 16px;
      }
      .nf-clock-top_right {
        right: 16px;
        top: 16px;
        align-items: flex-end;
      }
      .nf-clock-bottom_left {
        left: 16px;
        bottom: calc(60px + var(--nf-bottom-inset, 0px));
      }
      .nf-clock-bottom_right {
        right: 16px;
        bottom: calc(60px + var(--nf-bottom-inset, 0px));
        align-items: flex-end;
      }
      .nf-eye {
        position: absolute;
        left: 56px;
        bottom: calc(10px + var(--nf-bottom-inset, 0px));
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        padding: 0;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.35);
        background: rgba(8, 16, 34, 0.7);
        color: var(--nf-text);
        cursor: pointer;
        z-index: 4;
      }
      .nf-eye-clean {
        left: 12px;
        opacity: 0.55;
      }
      .nf-eye:hover,
      .nf-eye-clean:hover {
        opacity: 1;
      }
      .nf-find {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--nf-bottom-inset, 0px));
        width: min(340px, calc(100% - 24px));
        display: flex;
        flex-direction: column-reverse;
        gap: 6px;
        z-index: 3;
      }
      .nf-find input {
        box-sizing: border-box;
        width: 100%;
        height: 42px;
        padding: 0 42px 0 14px;
        border: 1px solid var(--nf-line);
        border-radius: 14px;
        background: var(--nf-chrome);
        color: var(--nf-text);
        font: inherit;
        font-size: 15px;
        box-shadow: var(--nf-shadow);
        backdrop-filter: blur(8px);
      }
      .nf-find-close {
        position: absolute;
        right: 6px;
        bottom: 6px;
        width: 30px;
        height: 30px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--nf-muted);
        cursor: pointer;
      }
      .nf-find-list {
        display: grid;
        padding: 6px;
        border-radius: 14px;
        background: var(--nf-chrome);
        box-shadow: var(--nf-shadow);
        backdrop-filter: blur(8px);
      }
      .nf-find-list button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--nf-text);
        text-align: left;
        font: inherit;
        cursor: pointer;
      }
      .nf-find-list button:hover,
      .nf-find-list button:focus-visible {
        background: rgba(127, 127, 127, 0.14);
      }
      .nf-find-list b {
        display: block;
        font-weight: 600;
      }
      .nf-find-list small,
      .nf-find-list p {
        color: var(--nf-muted);
        font-size: 12px;
        margin: 0;
      }
      .nf-find-list p {
        padding: 8px 10px;
      }
      .nf-find-icon {
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background: rgba(127, 127, 127, 0.15);
        flex: none;
      }
      .nf-find-icon svg {
        width: 16px;
        height: 16px;
      }
      .nf-swipe {
        position: absolute;
        transform: translate(-50%, calc(-100% - 28px));
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        gap: 2px 12px;
        padding: 8px 12px;
        border-radius: 14px;
        background: var(--nf-chrome);
        box-shadow: var(--nf-shadow);
        pointer-events: none;
        white-space: nowrap;
        z-index: 4;
      }
      .nf-swipe span {
        font-size: 12px;
        color: var(--nf-muted);
      }
      .nf-swipe b {
        grid-row: 2;
        font: 700 22px var(--nf-title-font);
      }
      .nf-swipe i {
        grid-row: 1 / 3;
        grid-column: 2;
        position: relative;
        width: 10px;
        height: 44px;
        border-radius: 5px;
        background: rgba(127, 127, 127, 0.25);
        overflow: hidden;
      }
      .nf-swipe em {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--nf-warm);
      }
.nf-plate-menu {
        position: absolute;
        z-index: 6;
        display: flex;
        flex-direction: column;
        gap: 4px;
        min-width: 220px;
        padding: 6px;
        border-radius: 16px;
        background: var(--nf-bg2, #1c2233);
        box-shadow: 0 8px 28px rgba(0, 0, 0, 0.45);
      }
      .nf-plate-menu button {
        display: grid;
        grid-template-columns: 24px 1fr auto;
        align-items: center;
        gap: 8px;
        min-height: 42px;
        padding: 0 10px;
        border: 0;
        border-radius: 12px;
        background: none;
        color: var(--nf-text, #e8eeff);
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .nf-plate-menu button:hover {
        background: rgba(127, 127, 127, 0.14);
      }
      .nf-plate-menu button.on b {
        background: var(--nf-accent, #37e0ff);
        color: #041018;
      }
      .nf-plate-menu b {
        display: grid;
        place-items: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(127, 127, 127, 0.2);
        font-size: 12px;
      }
      .nf-plate-menu i {
        font-style: normal;
        color: var(--nf-muted, #9aa5bd);
        font-size: 13px;
      }
      .nf-menu-backdrop {
        position: absolute;
        inset: 0;
        z-index: 5;
      }
      .nf-through {
        position: absolute;
        inset: 0;
        z-index: 4;
        pointer-events: none;
      }
      /* the camera wall: a glass sheet over the scene with every camera's picture */
      .nf-wall {
        position: absolute;
        inset: 56px 12px calc(var(--nf-bottom-inset, 0px) + 12px);
        z-index: 5;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px 12px;
        border-radius: 16px;
        background: rgba(8, 16, 34, 0.86);
        border: 1px solid rgba(160, 240, 255, 0.4);
        box-shadow: var(--nf-shadow);
        overflow: auto;
      }
      .nf-wall-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
        color: var(--nf-text);
      }
      .nf-wall-head .nf-wall-title {
        flex: 1;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 8px;
      }
      .nf-wall-title b {
        color: #ff6b6b;
        font-weight: 600;
      }
      .nf-wall-tools {
        display: flex;
        gap: 6px;
      }
      .nf-wall-big {
        flex: 1;
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
      }
      .nf-wall-big img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      /* the stream player: a bare card, as wide as the sheet allows for a 16:9 picture */
      .nf-wall-big > hui-picture-entity-card,
      .nf-wall-big > hui-error-card {
        width: min(100%, calc((100vh - 200px) * 16 / 9));
        --ha-card-background: transparent;
        --ha-card-border-width: 0;
        --ha-card-box-shadow: none;
      }
      .nf-wall-grid {
        flex: 1;
        display: grid;
        align-content: safe center;
        justify-content: center;
        gap: 12px;
        min-height: 0;
        overflow-y: auto;
      }
      .nf-wall-cam {
        position: relative;
        padding: 0;
        border: 1px solid rgba(160, 240, 255, 0.3);
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
        cursor: pointer;
        width: 100%;
        height: 100%;
      }
      .nf-wall-cam img,
      .nf-wall-none {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8aa;
      }
      .nf-wall-seen {
        border-color: rgba(255, 80, 90, 0.9);
        box-shadow: 0 0 14px rgba(255, 60, 70, 0.5);
      }
      .nf-wall-name {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 4px 8px;
        font-size: 12px;
        text-align: left;
        color: var(--nf-text);
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
      }
      .nf-wall-name b {
        color: #ff6b6b;
        font-weight: 600;
      }
      /* a lightning bolt of the weather layer lights up the whole stage for a moment */
      .live-flash::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 3;
        background: radial-gradient(circle at 50% 20%, rgba(235, 242, 255, 0.55), rgba(200, 215, 255, 0.18) 70%);
        pointer-events: none;
      }
      .nf-through-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: var(--nf-blend);
      }
      .nf-through-bar {
        position: absolute;
        left: 50%;
        bottom: calc(var(--nf-bottom-inset, 0px) + 14px);
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: calc(100% - 32px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--nf-chrome);
        backdrop-filter: blur(12px);
        border: 1px solid var(--nf-line);
        pointer-events: auto;
      }
      .nf-through-name {
        font-weight: 600;
        white-space: nowrap;
      }
      /* a small note that the picture is a still, so nobody wonders why it does not move */
      .nf-still {
        font-size: 11px;
        font-weight: 400;
        opacity: 0.65;
        white-space: nowrap;
        margin-left: 6px;
      }
      .nf-through-bar input[type="range"] {
        width: 140px;
        accent-color: var(--nf-accent);
      }
      .nf-through-on :is(.nf-pin, .nf-dev, .nf-energy, .nf-legend, .nf-thumbs, .nf-scenes, .nf-find-btn, .nf-stats) {
        display: none;
      }
      nf-quick-menu {
        position: absolute;
        z-index: 6;
      }
      .nf-dev-found {
        animation: nf-found 0.6s ease-in-out 4;
      }
      @keyframes nf-found {
        50% {
          scale: 1.35;
          filter: drop-shadow(0 0 12px var(--nf-accent));
        }
      }
      .nf-map-credit {
        position: absolute;
        right: 8px;
        bottom: 4px;
        z-index: 2;
        padding: 1px 6px;
        border-radius: 6px;
        background: color-mix(in srgb, var(--nf-chrome) 80%, transparent);
        color: var(--nf-soft);
        font-size: 10px;
        text-decoration: none;
      }
      .nf-legend {
        position: absolute;
        left: 12px;
        /* above the star button */
        bottom: calc(104px + var(--nf-bottom-inset, 0px));
        display: grid;
        gap: 4px;
        min-width: 180px;
        padding: 8px 11px;
        border-radius: 12px;
        background: var(--nf-chrome);
        box-shadow: var(--nf-shadow);
        font-size: 12px;
        pointer-events: none;
      }
      .nf-legend-bar {
        height: 8px;
        border-radius: 4px;
      }
      .nf-legend-range {
        display: flex;
        justify-content: space-between;
        color: var(--nf-muted);
        font-variant-numeric: tabular-nums;
      }
      .nf-legend-none {
        color: var(--nf-warm);
      }
      .nf-energy {
        position: absolute;
        left: 12px;
        top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        max-width: calc(100% - 24px);
        pointer-events: none;
      }
      .nf-energy-item {
        display: grid;
        padding: 5px 11px 6px;
        border-radius: 12px;
        background: var(--nf-chrome);
        border-left: 3px solid var(--nf-line);
        box-shadow: var(--nf-shadow);
        backdrop-filter: blur(6px);
        font-variant-numeric: tabular-nums;
      }
      .nf-energy-item span {
        font-size: 11px;
        color: var(--nf-muted);
      }
      .nf-energy-item b {
        font: 700 15px var(--nf-title-font);
      }
      .nf-energy-total {
        border-left-color: #6fd8ff;
      }
      .nf-energy-grid {
        border-left-color: var(--nf-accent);
      }
      .nf-energy-export,
      .nf-energy-solar {
        border-left-color: #ffc633;
      }
      .nf-energy-battery {
        border-left-color: #59ff8c;
      }
      .nf-flow-toggle {
        pointer-events: auto;
        cursor: pointer;
        border: 0;
        border-left: 3px solid var(--nf-line);
        color: inherit;
        text-align: left;
        font: inherit;
      }
      .nf-own-sensor {
        pointer-events: auto;
        cursor: pointer;
        border: 0;
        border-left: 3px solid var(--nf-accent);
        color: inherit;
        text-align: left;
        font: inherit;
        max-width: 220px;
      }
      .nf-own-sensor span,
      .nf-own-sensor b {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .nf-flow-toggle[aria-pressed="true"] {
        border-left-color: var(--nf-accent);
      }
      .nf-flow-toggle span {
        display: none;
      }
      .nf-flow-toggle b {
        opacity: 0.4;
        filter: grayscale(1);
      }
      .nf-flow-toggle[aria-pressed="true"] b {
        opacity: 1;
        filter: none;
      }
      .nf-energy-tariff {
        border-left-color: #b98cff;
      }
      /* narrow stages (portrait tablets, phones): the energy values scroll in one row */
      @container nf (max-width: 900px) {
        .nf-energy {
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          pointer-events: auto;
        }
        .nf-legend {
          bottom: auto;
          top: 62px;
        }
        .nf-has-alerts .nf-legend {
          top: 110px;
        }
      }
      /* a room sheet covers the lower half: the view's own controls step aside */
      @container nf ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .nf-panel-open :is(.nf-find-btn, .nf-find, .nf-thumbs, .nf-legend, .nf-stats, .nf-scenes) {
          display: none;
        }
      }
      @media (pointer: coarse) {
        .nf-find-close {
          width: 40px;
          height: 40px;
          right: 1px;
          bottom: 1px;
        }
        .nf-dev {
          padding: 6px;
        }
        .nf-pin {
          padding: 8px 12px;
        }
      }
      .nf-dev-full .nf-dev-text {
        display: inline;
      }
      .nf-dev-name:empty {
        display: none;
      }
      .nf-dev-name {
        position: absolute;
        top: calc(100% + 3px);
        left: 50%;
        transform: translateX(-50%);
        max-width: 140px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 1px 6px;
        border-radius: 6px;
        font-size: 10.5px;
        font-weight: 600;
        line-height: 1.35;
        /* a fixed dark plate, so a fixed light text: the theme text colour can be dark (day themes, pins that are on) */
        color: #f2f5fb;
        background: rgba(10, 16, 32, 0.72);
        pointer-events: none;
      }
      .nf-dev-sel {
        outline: 2px solid var(--nf-accent);
        outline-offset: 2px;
      }
      .nf-dev-on {
        color: #2a1a00;
        border-color: transparent;
        background: var(--nf-glow, var(--nf-warm));
        box-shadow: 0 0 16px var(--nf-glow, var(--nf-warm));
      }
      .nf-dev-on .nf-dev-icon {
        background: color-mix(in srgb, var(--nf-text) 28%, transparent);
      }
      .nf-dev-on .nf-dev-text {
        color: #2a1a00;
      }
      .nf-dev-na {
        opacity: 0.45;
      }
      .nf-dev-dim {
        opacity: 0.35;
      }
      .nf-dev[hidden],
      .nf-pin[hidden] {
        display: none;
      }
      .nf-pin-active {
        background: var(--nf-accent);
        color: var(--nf-accent-text);
        border-color: transparent;
        box-shadow: var(--nf-shadow);
      }
      .nf-stats b {
        color: var(--nf-accent);
        font-weight: 700;
      }
      .nf-stats {
        padding: 4px 9px;
        border-radius: 8px;
        background: var(--nf-chrome);
        position: absolute;
        right: 10px;
        bottom: calc(8px + var(--nf-bottom-inset, 0px));
        font-size: 11.5px;
        color: var(--nf-muted);
        font-variant-numeric: tabular-nums;
        pointer-events: none;
      }
      .nf-error {
        position: absolute;
        inset: auto 16px 16px;
        color: var(--nf-danger);
      }
    `,
  ];
}

if (!customElements.get("nf-view3d")) customElements.define("nf-view3d", NfView3d);

/** Power as "850 W" or "1,2 kW". */
function formatPower(hass: HomeAssistant | undefined, w: number): string {
  return Math.abs(w) >= 1000 ? `${formatNumber(hass, w / 1000, 1)} kW` : `${Math.round(w)} W`;
}

/** Marker height above furniture: in front of a screen, above wall units, else just above the top. */
function markerHeight(f: Furniture): number {
  if (f.type === "tv_board") return f.h + 0.9;
  // wall TV and wall cabinet: above the item (their height above the floor comes from mountBase)
  if (f.type === "tv_wall" || f.type === "kitchen_wall") return f.h + 0.25;
  return f.h + 0.35;
}


/** The text under a fan's pin: its speed in per cent while it runs, its state otherwise. */
function fanText(hass: HomeAssistant, st: HassEntity): string {
  const pct = st.attributes.percentage;
  return st.state === "on" && typeof pct === "number" ? `${Math.round(pct)} %` : stateText(hass, st);
}
