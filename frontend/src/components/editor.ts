// 2D editor: floors, rooms (rectangles and free shapes), snapping, undo, background template.

import { html, LitElement, nothing, svg, type PropertyValues, type TemplateResult } from "lit";
import { fetchImage, importPack, storeImage } from "../api.ts";
import { defaultHeight, entityName, kindOf, roomEntities } from "../devices.ts";
import { closeGaps, suggestedThickness } from "../geometry/gaps.ts";
import { keepInRoom, snapToWall } from "../geometry/snap.ts";
import { SHOW_PRESENCE } from "../flags.ts";
import { polygonBox } from "../roof-sections.ts";
import { chimneyAsField, clampField, faceAt, fieldFace, pointOnFace, roofFaces, turnGroundField, fieldCenter, wallFaces, windowAsField, onFace, onField, rayOnFace, type RoofFace } from "../solar.ts";
import type { SurfaceGrab, SurfaceRay } from "../viewer/viewer3d.ts";
import {
  type FreeWall,
} from "../model.ts";
import { furnishRoom, type PackageId } from "../packages.ts";
import { generateWalls, locateOpening, openingHost, type Wall } from "../geometry/walls.ts";
import { arcOfNearest, frontExtent, frontOf, frontPieces, outlineLength, withFront } from "../geometry/glass-front.ts";
import { formatNumber, translate, type I18nKey } from "../i18n.ts";
import {
  bounds,
  centroid,
  ENERGY_DEVICES,
  MAX_ROUTE_POINTS,
  type EnergyRoute,
  type StartView,
  canLift,
  isFixed,
  step,
  type Direction,
  AUTO_STYLES,
  OPENING_PRESETS,
  type OpeningPreset,
  resizeFurniture,
  ceilingAt,
  roomTiles,
  pointInPolygon,
  polygonArea,
  pipeRouteKey,
  uid,
  type Background,
  type Building,
  type Floor,
  type Furniture,
  type LampMount,
  type SolarField,
  type OutdoorArea,
  type Placement,
  type Opening,
  type OpeningType,
  type Room,
  type Vec2,
} from "../model.ts";
import { controls, tokens } from "../styles.ts";
import { renderBleLocate, renderFavorites, renderOutside, renderPresence, renderStartView } from "./editor/forms/house.ts";
import { renderCardTemplates } from "./editor/forms/templates.ts";
import { BackupService } from "./editor/backup.ts";
import { renderBackup } from "./editor/forms/backup.ts";
import { renderSettings, type SettingsActions } from "./editor/forms/settings.ts";
import { renderEnergyBalance, renderEnergyChecklist, renderEnergyDevices, renderEnergyRoutes, renderEnergyTeaser, renderHelpLinks, renderPipes, type EnergyActions, type PipeActions, type RouteActions, type RouteDraft } from "./editor/forms/energy.ts";
import { energyMarkersLayer, energyRoutesLayer, headroomLayer, chimneysLayer, roofSectionsLayer, roofWindowsLayer, solarLayer } from "./editor/canvas/roof-layers.ts";
import type { CanvasContext } from "./editor/canvas/context.ts";
import { backgroundLayer } from "./editor/canvas/background.ts";
import { mapLayer } from "./editor/canvas/map.ts";
import { BackgroundTool, readPictureInBrowser } from "./editor/background-tool.ts";
import { renderBackgroundForm } from "./editor/forms/background.ts";
import { dragRotation, pictureCentre, pictureLocal } from "./editor/ops/background.ts";
import { renderFreeWallForm, renderMeasureForm, renderOutdoorForm, type FreeWallActions, type MeasureActions, type MeasureState, type OutdoorActions } from "./editor/forms/outdoor.ts";
import { insertRoofCorner, roofOutline } from "./editor/ops/roof.ts";
import { insertOutdoorCorner, outdoorRectangleAfter, removeOutdoorCorner } from "./editor/ops/items.ts";
import { renderDeviceList, renderRoomClimate, type DeviceListActions } from "./editor/forms/device-list.ts";
import { formatArea, formatLength, setUnits } from "../units.ts";
import "./editor/wall-view.ts";
import "./editor/ble-locate.ts";
import { LibraryState, renderLibrary, renderPreview, type LibraryActions } from "./editor/forms/library.ts";
import { arcFreeWall, arcRoomEdge, insertCorner } from "./editor/ops/rooms.ts";
import type { ArcActions, ArcEdit } from "./editor/forms/arc.ts";
import { dragStep, facingAngle, gridPositionAfter, hasLeftStart, headingAngle, outlineWithCornerAt, shifted, steppedDelta, straightEnd } from "./editor/ops/drags.ts";
import { snapToPlan } from "./editor/ops/snapping.ts";
import { draftLayer, guidesLayer } from "./editor/canvas/draft.ts";
import { devicesLayer, furnitureLayer, notesLayer } from "./editor/canvas/items.ts";
import { dimensionsLayer } from "./editor/canvas/plan.ts";
import { renderNoteForm } from "./editor/forms/note.ts";
import { openingsLayer } from "./editor/canvas/openings.ts";
import { cutMarksLayer, floorBelowLayer, freeWallsLayer, gridLayer, meterLayer, outdoorHandlesLayer, outdoorLayer, roomHandlesLayer, roomsLayer, wallsLayer } from "./editor/canvas/plan.ts";
import { renderEdgeHeights, type EdgeActions } from "./editor/forms/edges.ts";
import { clearWallSlope, cutEdge, joinAtCut, moveCut, setPartHeight, setWallHeight, setWallSlope, setWallThickness } from "./editor/ops/edges.ts";
import { renderDeviceForm, type DeviceActions } from "./editor/forms/device.ts";
import { renderFurnitureForm, type FurnitureActions } from "./editor/forms/furniture.ts";
import { renderOpeningForm, type OpeningActions } from "./editor/forms/opening.ts";
import { renderRoofPanel } from "./editor/forms/roof.ts";
import type { RoofPanelDeps } from "./editor/forms/roof-parts.ts";
import { renderSolarForm, renderSolarList } from "./editor/forms/solar.ts";
import type { EditorHost } from "./editor/host.ts";
import { RoofController } from "./editor/roof-controller.ts";
import { importEnergyPrefs } from "./editor/ops/energy-import.ts";
import { newEnergyDevice } from "./editor/ops/energy-devices.ts";
import { EditHistory } from "./editor/history.ts";
import { copyOfFurniture, copyOfOutdoorArea, deviceForFurniture, furnitureForDevice, newFloorOpening, newFreeWall, newFurniture, newOutdoorArea, offsetOnEdge, openingKindPatch, parkingSpotFor, placeInRoom, removeDevice, roomCentre, turnedBy } from "./editor/ops/items.ts";
import { NO_CHANGE, NOTHING_TO_MOVE, nudge, type NudgeTarget } from "./editor/ops/nudge.ts";
import { areaChoice, copyOfRoom, cornerMoved, evenCeilingLights, newRoom, rectangleAfter, removeCorner, removeRoom, type RectField } from "./editor/ops/rooms.ts";
import { translate as moveScope, turnQuarterClockwise, type Scope } from "./editor/ops/transform.ts";
import { Selection, type ItemKind } from "./editor/selection.ts";
import { SideState } from "./editor/side-state.ts";
import { renderFloors, type FloorActions } from "./editor/forms/floor.ts";
import { renderRoomForm, renderRoomList, type RoomActions } from "./editor/forms/room.ts";
import { copyOfFloor, floorsSwapped, floorsWith, moveFurnitureToFloor, newFloorFor, unplacedAreas, type FloorCopyOptions } from "./editor/ops/floors.ts";
import { spotItems, suggestedSpots } from "./editor/ops/spots.ts";
import { editorStyles } from "./editor/styles.ts";
import "./entity-picker.ts";
import type { HassFloor, HomeAssistant } from "../types.ts";
import type { WallMode } from "../viewer/viewer3d.ts";
import { furnitureName } from "../furniture-names.ts";
import { getPacks, isPackType, mountBase, packItem, packType, setPacks, type FurniturePack } from "../packs.ts";
import { buildItem, newRecipe, STUDIO_PACK, studioId } from "../studio/recipes.ts";
import { renderStudio, type StudioDraft } from "./editor/forms/studio.ts";
import { planCheckButton, renderPlanCheck } from "./editor/forms/plan-check.ts";
import { checkPlan, type CheckFinding } from "./editor/ops/plan-check.ts";
import { printHtml, type PrintTexts } from "./editor/print.ts";
import { floorImageSvg, imageFileName, saveBlob, svgToPng, type ImageChoice } from "./editor/image-export.ts";
import { renderKeySheet, renderTour, tourDone, tourDue } from "./editor/first-steps.ts";

/** Items that can be fixed against moving. */
type FixKind = "room" | "opening" | "furniture" | "device" | "wall" | "outdoor";

/** What a press on the plan has to work out: where, and which element lies under it. */
interface Press {
  local: [number, number];
  world: Vec2;
  target: Element;
  fine: boolean;
}

/** A recognised press starts a drag, or is already dealt with (a tap that only selects). */
type Gesture = Drag | typeof NO_GESTURE;
const NO_GESTURE = "handled";

type Tool = "select" | "rect" | "polygon" | "measure" | "opening" | "furniture" | "outdoor" | "hole" | "stairs" | "wall" | "roof" | "energy";

/** The tools of the toolbar, in order (a phone gets them as one dropdown). */
const TOOLS: Tool[] = ["select", "rect", "polygon", "wall", "opening", "furniture", "stairs", "outdoor", "hole", "roof", "energy"];

type Drag =
  | { kind: "pan"; last: [number, number] }
  | { kind: "vertex"; roomId: string; index: number; base: Building; moved: boolean }
  | { kind: "device"; entityId: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "opening"; id: string; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "furniture"; id: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "rotate"; id: string; base: Building; moved: boolean }
  | { kind: "aim"; entityId: string; base: Building; moved: boolean }
  | { kind: "resize"; id: string; corner: [1 | -1, 1 | -1]; base: Building; moved: boolean }
  | { kind: "room"; roomId: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "rect"; start: Vec2; end: Vec2; outdoor?: boolean; hole?: boolean; stairs?: boolean; roof?: boolean }
  | { kind: "roofmove"; id: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "solarturn"; id: string; base: Building; moved: boolean }
  | { kind: "solarmove"; id: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean; grab: { du: number; ds: number } | null; win?: boolean; chimney?: boolean }
  | { kind: "outvertex"; id: string; index: number; base: Building; moved: boolean }
  | { kind: "roofcorner"; id: string; corner: [0 | 1, 0 | 1]; base: Building; moved: boolean }
  | { kind: "roofvertex"; id: string; index: number; base: Building; moved: boolean }
  | { kind: "bgmove"; start: Vec2; bx: number; bz: number; base: Building; moved: boolean }
  | { kind: "bgscale"; base: Building; moved: boolean }
  | { kind: "bgrotate"; base: Building; moved: boolean; start: number; rot: number }
  | { kind: "freewall"; start: Vec2; end: Vec2 }
  | { kind: "wallmove"; id: string; end: "a" | "b" | null; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "outdoor"; id: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "tap"; startScreen: [number, number]; last: [number, number]; panning: boolean };

interface Guides {
  point?: Vec2;
  x?: number;
  z?: number;
}

/** Drags that change the document live (restored when cancelled, recorded in the history when done). */
const EDIT_DRAGS = new Set(["vertex", "room", "device", "opening", "furniture", "rotate", "resize", "outdoor", "roofmove", "roofcorner", "roofvertex", "outvertex", "solarmove", "solarturn", "bgmove", "bgscale", "bgrotate"]);

const SNAP_PX = 10;
const round = (v: number) => Math.round(v * 1000) / 1000;

/** Arrow keys as plan directions (x right, z down). */
const ARROWS: Record<string, [number, number]> = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };

export class NfEditor extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    narrow: { type: Boolean },
    packs: { attribute: false },
    loadCardEditor: { attribute: false },
    _doc: { state: true },
    _doc3d: { state: true },
    _split: { state: true },
    _splitRatio: { state: true },
    _wall3d: { state: true },
    _solid3d: { state: true },
    _sidePinned: { state: true },
    _studio: { state: true },
    _check: { state: true },
    _keys: { state: true },
    _note: { state: true },
    _dims: { state: true },
    _tour: { state: true },
    _sideOpen: { state: true },
    _floorId: { state: true },
    _energyNote: { state: true },
    _ctx: { state: true },
    _fixedHint: { state: true },
    _openingPreset: { state: true },
    _measureLen: { state: true },
    _rectSize: { state: true },
    _tool: { state: true },
    _wallView: { state: true },
    _draft: { state: true },
    _cursor: { state: true },
    _guides: { state: true },
    _view: { state: true },
    _size: { state: true },
    _canUndo: { state: true },
    _canRedo: { state: true },
    _arcEdit: { state: true },
    _routeDraft: { state: true },
  };

  declare hass: HomeAssistant;
  declare building: Building;
  declare narrow: boolean;
  /** Imported furniture packs (from the panel's controller). */
  declare packs: FurniturePack[] | undefined;
  /** Loads the card's settings dialog, for the card templates (set by the panel). */
  declare loadCardEditor: (() => Promise<unknown>) | undefined;
  private declare _doc: Building;
  /** The draft as the 3D pane shows it (follows _doc with a short delay, so drags stay smooth). */
  private declare _doc3d: Building;
  private doc3dTimer: ReturnType<typeof setTimeout> | undefined;
  /** The live 3D pane next to the plan (remembered per browser). */
  private declare _split: boolean;
  /** Share of the width the plan takes next to the 3D pane (0.2 … 0.8). */
  private declare _splitRatio: number;
  /** Walls in the 3D pane: full height ("auto") or cut at the cut height (shows wall units and shelves). */
  private declare _wall3d: WallMode;
  private declare _solid3d: boolean;
  /** Sidebar beside the 3D pane: pinned open always, or folded to a strip while nothing is selected. */
  private declare _sidePinned: boolean;
  /** The furniture studio while it is open in the side panel. */
  private declare _studio: StudioDraft | null;
  /** The plan check is open in the side panel. */
  private declare _check: boolean;
  /** The sheet of the editor's keys is open (press ?). */
  private declare _keys: boolean;
  /** The note selected in the plan (its form shows in the side panel). */
  private declare _note: string | null;
  /** Every room edge labelled with its length (remembered on this browser). */
  private declare _dims: boolean;
  /** The step of the first-start tour shown, or null. */
  private declare _tour: number | null;
  private tourChecked = false;
  private declare _sideOpen: boolean;
  private declare _floorId: string | null;
  /** What the import from the energy dashboard did (shown under its button). */
  private declare _energyNote: string | null;
  /** Open context menu (right-click, long press) at a plan point, for one item. */
  private declare _ctx: { x: number; y: number; kind: FixKind; id: string; at?: Vec2 } | null;
  /** A drag on a fixed item was turned into panning: the hint line says why. */
  private declare _fixedHint: boolean;
  /** Set while a form waits for one tap on the plan (a calibration place). */
  private _pick: ((at: Vec2 | null) => void) | null = null;
  /** When the armed pick lapses, so a forgotten one cannot swallow a later tap on the plan. */
  private _pickTimer: number | undefined;
  private fixedPan = false;
  /** Frame the 3D half again after the next render (the roof tool shows the whole house). */
  private reframe3d = false;
  private pressTimer = 0;
  private pressStart: [number, number] | null = null;
  /** Kind of opening the opening tool places (the last one chosen). */
  private declare _openingPreset: OpeningPreset;
  /** Length typed for the next wall when drawing by measure, and the size for "rectangle by size". */
  private declare _measureLen: number;
  private declare _rectSize: [number, number];
  private declare _tool: Tool;
  /** The wall whose arc row is open in the side bar, with the typed bulge. */
  private declare _arcEdit: ArcEdit | null;
  /** The cable route being drawn in the energy tool. */
  private declare _routeDraft: RouteDraft | null;
  /** The wall shown from the front (room and edge), or null. */
  private declare _wallView: { roomId: string; edge: number } | null;
  private declare _draft: Vec2[];
  private declare _cursor: Vec2 | null;
  private declare _guides: Guides;
  private declare _view: { scale: number; ox: number; oy: number };
  private declare _size: { w: number; h: number };
  private declare _canUndo: boolean;
  private declare _canRedo: boolean;

  private readonly history = new EditHistory<Building>(100);
  /** The furniture library's search, open sections and preview. */
  private readonly lib = new LibraryState(() => this.requestUpdate());
  /** State of the floor and room forms in the side panel. */
  private readonly side = new SideState(() => this.requestUpdate());
  /** What is selected in the plan. */
  private readonly sel = new Selection(() => this.requestUpdate());
  /** What the form modules in editor/forms see of this editor. */
  private readonly host: EditorHost = this.makeHost();
  private readonly backup: BackupService = this.makeBackup();
  /** The roof tool: its selection and what it adds, changes and removes. */
  private readonly roof: RoofController = this.makeRoof();
  /** The picture behind the plan, and its calibration. */
  private readonly bg: BackgroundTool = this.makeBackground();
  private readonly settingsActions: SettingsActions = {
    useRoofSections: () => {
      this.roof.useSections();
      this._tool = "roof";
    },
  };
  private drag: Drag | null = null;
  private pointers = new Map<number, [number, number]>();
  private pinch: { dist: number; mid: [number, number] } | null = null;
  private fitted = false;
  private resizeObserver?: ResizeObserver;

  constructor() {
    super();
    this.narrow = false;
    this._floorId = null;
    this._arcEdit = null;
    this._routeDraft = null;
    this.roof.sectionId = null;
    this.roof.solarId = null;
    this.roof.picking = false;
    this.roof.windowId = null;
    this.roof.chimneyId = null;
    this._energyNote = null;
    this._openingPreset = "door";
    let split = false;
    try {
      split = localStorage.getItem("nextfloor.editor3d") === "1";
    } catch {
      // no storage
    }
    this._split = split;
    this._splitRatio = 0.55;
    try {
      const saved = Number(localStorage.getItem("nextfloor.editorSplit"));
      if (saved >= 20 && saved <= 80) this._splitRatio = saved / 100;
    } catch {
      /* no storage */
    }
    this._wall3d = "cut";
    this._solid3d = false;
    this._doc3d = this._doc;
    this._sideOpen = false;
    let pinned = true;
    try {
      pinned = localStorage.getItem("nextfloor.sidePinned") !== "0";
    } catch {
      // no storage
    }
    this._sidePinned = pinned;
    this._studio = null;
    this._check = false;
    this._keys = false;
    this._note = null;
    this._dims = (() => {
      try {
        return localStorage.getItem("nextfloor.plan_dims") === "1";
      } catch {
        return false;
      }
    })();
    this._tour = null;
    this._measureLen = 3;
    this._rectSize = [4, 3];
    this._tool = "select";
    this._wallView = null;
    this._draft = [];
    this._cursor = null;
    this._guides = {};
    this._view = { scale: 50, ox: 40, oy: 40 };
    this._size = { w: 800, h: 600 };
    this._canUndo = false;
    this._canRedo = false;
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  private measureState(): MeasureState {
    return { draft: this._draft, length: this._measureLen, rectSize: this._rectSize };
  }

  private measureActions(): MeasureActions {
    return {
      setLength: (metres) => (this._measureLen = metres),
      step: (direction) => this.measureStep(direction),
      close: () => this.closeDraft(),
      undo: () => (this._draft = this._draft.slice(0, -1)),
      setRectSize: (size) => (this._rectSize = size),
      addRectangle: () => this.rectBySize(),
    };
  }

  /** The arc row of the side bar: bends the wall its key names (`room:<id>:<edge>` or `wall:<id>`), or says why it could not. */
  private arcActions(): ArcActions {
    return {
      edit: this._arcEdit,
      setEdit: (edit) => (this._arcEdit = edit),
      apply: (edit) => {
        if (!this.isAdmin || Math.abs(edit.bulge) < 0.01) return;
        const base = this._doc;
        const next = structuredClone(base);
        const floor = next.floors.find((f) => f.id === this._floorId);
        if (!floor) return;
        const [kind, id, edge] = edit.key.split(":");
        const bent = kind === "wall" ? arcFreeWall(floor, id, edit.bulge).length > 0 : arcRoomEdge(floor, id, Number(edge), edit.bulge);
        if (!bent) {
          this._arcEdit = { ...edit, error: this.t("arc_too_wide") };
          return;
        }
        this._arcEdit = null;
        this.setDoc(next, base);
      },
    };
  }

  private freeWallActions(): FreeWallActions {
    return {
      update: (patch) => this.updateFreeWall(patch),
      remove: () => this.deleteFreeWall(),
      arc: this.arcActions(),
      lockButton: this.fixButton("wall", this.sel.wall ?? ""),
    };
  }

  private outdoorActions(): OutdoorActions {
    return {
      update: (patch) => this.updateOutdoor(patch),
      setRectangle: (field, value) => {
        const area = this.outdoorArea;
        if (area) this.updateOutdoor({ points: outdoorRectangleAfter(area, field, value) });
      },
      duplicate: () => this.duplicateOutdoor(),
      remove: () => this.deleteOutdoor(),
      removeCorner: (index) => {
        const id = this.sel.outdoor;
        if (id) this.change((_, floor) => void removeOutdoorCorner(floor.outdoor.find((o) => o.id === id)!, index));
      },
      lockButton: this.fixButton("outdoor", this.sel.outdoor ?? ""),
    };
  }

  private libraryActions(): LibraryActions {
    return {
      add: (type) => this.addFurniture(type),
      studio: () => this.openStudio(null),
      packs: this.packs ?? [],
    };
  }

  /** Opens the furniture studio: for a new piece, or for the studio piece of the given type to change it. */
  private openStudio(type: string | null): void {
    const item = type ? packItem(type) : undefined;
    const itemId = item?.recipe && type?.startsWith(`pack:${STUDIO_PACK}:`) ? item.id : null;
    this._studio = { recipe: itemId && item?.recipe ? { ...item.recipe } : newRecipe("cabinet", ""), itemId, busy: false, error: null };
    this._tool = "furniture";
  }

  /**
   * Keeps the studio piece in the "own furniture" pack (a new release of it, so the backend replaces the pack) and puts a new piece
   * into the plan; a changed piece takes its new size everywhere it stands.
   */
  private async saveStudio(): Promise<void> {
    const draft = this._studio;
    if (!draft || !this.hass || !this.isAdmin) return;
    const language = this.hass.language ?? "en";
    const own = getPacks().find((p) => p.id === STUDIO_PACK);
    const items = own?.items ?? [];
    const recipe = { ...draft.recipe, name: draft.recipe.name || this.t(`studio_kind_${draft.recipe.kind}` as I18nKey) };
    const id = draft.itemId ?? studioId(recipe.name, items.map((i) => i.id));
    const item = buildItem(recipe, id, language);
    const pack: FurniturePack = {
      id: STUDIO_PACK,
      name: own?.name ?? this.t("studio_pack_name"),
      publisher: own?.publisher ?? this.t("studio_pack_publisher"),
      release: (own?.release ?? 0) + 1,
      items: draft.itemId ? items.map((i) => (i.id === id ? item : i)) : [...items, item],
    };
    this._studio = { ...draft, busy: true, error: null };
    try {
      const { builtin: _b, imported_at: _i, ...payload } = pack;
      await importPack(this.hass, JSON.stringify({ format: "nfpack", version: 1, ...payload }));
    } catch (err) {
      this._studio = { ...draft, busy: false, error: this.t("studio_error", { detail: (err as { message?: string }).message ?? String(err) }) };
      return;
    }
    // the plan knows the piece right away; the reloaded packs bring the same
    setPacks([...getPacks().filter((p) => p.id !== STUDIO_PACK), pack]);
    this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true }));
    this._studio = null;
    const type = packType(STUDIO_PACK, id);
    if (draft.itemId) {
      const [w, d, h] = item.size;
      this.change((doc) => doc.floors.forEach((f) => f.furniture.forEach((m) => m.type === type && Object.assign(m, { w, d, h }))));
    } else this.addFurniture(type);
  }

  private printTexts(): PrintTexts {
    const t = (key: I18nKey) => this.t(key);
    return {
      title: this.t("print_title"),
      room: t("print_room"),
      floorArea: t("print_floor_area"),
      living: t("print_living"),
      low: t("print_low"),
      total: t("print_total"),
      note: t("living_area_hint"),
      area: (m2) => formatArea(this.hass, m2),
      length: (m) => formatLength(this.hass, m),
    };
  }

  /** The plan as PNG pictures seen from above, one per floor, for tools that want a plain 2D plan (#122). */
  private async exportPlanImages(choice: ImageChoice, all: boolean): Promise<void> {
    const floors = (all ? this._doc.floors : this.floor ? [this.floor] : []).filter((f) => !f.layer && f.rooms.length);
    if (!floors.length) return void (this.side.notice = this.t("image_export_empty"));
    try {
      for (const floor of floors) saveBlob(await svgToPng(floorImageSvg(this._doc, floor, this.printTexts(), choice)), imageFileName(floor.name));
      this.side.notice = this.t("image_export_done", { n: floors.length });
    } catch {
      this.side.notice = this.t("image_export_failed");
    }
  }

  /** The plan on paper in a window of its own; the browser's print dialog opens there (and can save a PDF). */
  private printPlan(): void {
    const html = printHtml(this._doc, this.printTexts());
    const win = window.open("", "_blank");
    if (!win) return void alert(this.t("print_blocked"));
    win.document.open();
    win.document.write(html);
    win.document.close();
  }

  /** Does what a finding of the plan check offers: opens its floor and shows the place, or makes the fix. */
  private fixFinding(f: CheckFinding): void {
    if (f.floorId !== this._floorId) this.floorActions().openFloor(f.floorId);
    const onFloor = (doc: Building) => doc.floors.find((fl) => fl.id === f.floorId);
    const fix = f.fix;
    switch (fix.do) {
      case "show_floor":
        return;
      case "show_room":
        return this.selectItem("room", fix.roomId);
      case "show_opening":
        return this.selectItem("opening", fix.openingId);
      case "show_furniture":
        return this.selectItem("furniture", fix.furnitureId);
      case "set_area":
        return this.change((doc) => {
          const room = onFloor(doc)?.rooms.find((r) => r.id === fix.roomId);
          if (room) Object.assign(room, areaChoice(room, fix.areaId, this.hass?.areas ?? {}));
        });
      case "add_area_rooms": {
        const floor = onFloor(this._doc);
        if (floor) this.addAreaRooms(floor);
        return;
      }
      case "place_devices":
        return this.change((doc) => {
          const floor = onFloor(doc);
          const room = floor?.rooms.find((r) => r.id === fix.roomId);
          if (floor && room) placeInRoom(doc, floor, room, fix.entityIds);
        });
      case "remove_placements":
        return this.change((doc) => {
          const floor = onFloor(doc);
          if (floor) floor.placements = floor.placements.filter((p) => !fix.entityIds.includes(p.entity_id));
        });
      case "ignore_devices":
        return this.ignoreDevices(fix.entityIds);
    }
  }

  /** The plan check stops listing these devices as missing (internal KNX devices, say). */
  private ignoreDevices(ids: string[]): void {
    this.change((doc) => {
      doc.settings.check_ignore = [...new Set([...(doc.settings.check_ignore ?? []), ...ids])];
    });
  }

  private setDims(on: boolean): void {
    this._dims = on;
    try {
      localStorage.setItem("nextfloor.plan_dims", on ? "1" : "0");
    } catch {
      // no storage: the switch holds for this visit
    }
  }

  /** A new note at a spot of the open floor, selected so its text can be typed. */
  private addNote(at: Vec2): void {
    if (!this.isAdmin || !this.floor) return;
    const id = uid("note");
    this.change((_, floor) => (floor.notes = [...(floor.notes ?? []), { id, x: Math.round(at[0] * 100) / 100, z: Math.round(at[1] * 100) / 100, text: "" }]));
    this._note = id;
    this._sideOpen = true;
  }

  /** The studio button under the form of a piece built in the studio. */
  private studioButton(): TemplateResult | typeof nothing {
    const type = this.furnitureItem?.type;
    if (!type || !isPackType(type) || !packItem(type)?.recipe || !type.startsWith(`pack:${STUDIO_PACK}:`) || !this.isAdmin) return nothing;
    return html`<button class="nf-btn nf-lib-studio" @click=${() => this.openStudio(type)}>🛠️ ${this.t("studio_open")}</button>`;
  }

  private deviceActions(): DeviceActions {
    return {
      update: (patch) => this.updateDevice(patch),
      centre: () => this.centreDevice(),
      remove: () => {
        this.removeDevice(this.sel.device ?? "");
        this.sel.device = null;
      },
      asFurniture: (placed, type) => this.deviceToFurniture(placed, type),
      packs: this.packs ?? [],
      lockButton: this.fixButton("device", this.sel.device ?? ""),
    };
  }

  private deviceListActions(): DeviceListActions {
    return {
      select: (id) => this.selectItem("device", id),
      place: (ids) => this.placeDevices(ids),
      remove: (id) => this.removeDevice(id),
      patchRoom: (patch) => this.updateRoom(patch),
      spreadLights: (room) => this.spreadCeilingLights(room),
      confirm: (text) => confirm(text),
    };
  }

  /** Moves the selected piece of furniture to another floor and follows it there. */
  private furnitureToFloor(floorId: string): void {
    const [from, id] = [this._floorId, this.sel.furniture];
    if (!from || !id || !this.isAdmin) return;
    const next = structuredClone(this._doc);
    if (!moveFurnitureToFloor(next, from, id, floorId)) return;
    this.setDoc(next);
    this._floorId = floorId;
    this.selectItem("furniture", id);
  }

  private furnitureActions(): FurnitureActions {
    return {
      update: (patch) => this.updateFurniture(patch),
      rotate: (delta) => this.rotateFurniture(delta),
      duplicate: () => this.duplicateFurniture(),
      addTask: () => this.addTaskToFurniture(),
      remove: () => this.deleteFurniture(),
      toDevice: (item) => this.furnitureToDevice(item),
      toSpot: (item) => this.vehicleToSpot(item),
      toFloor: (floorId) => this.furnitureToFloor(floorId),
      packs: this.packs ?? [],
      lockButton: this.fixButton("furniture", this.sel.furniture ?? ""),
    };
  }

  private openingActions(): OpeningActions {
    return {
      update: (patch) => this.updateOpening(patch),
      setPreset: (opening, preset) => this.setOpeningPreset(opening, preset),
      remove: () => this.deleteOpening(),
      isExterior: (opening) => this.openingIsExterior(opening),
      isBelowGround: (opening) => opening.type === "window" && this.openingIsExterior(opening) && (this.floor?.elevation ?? 0) + opening.sill < -0.22,
      lockButton: this.fixButton("opening", this.sel.opening ?? ""),
    };
  }

  private makeBackground(): BackgroundTool {
    const editor = this;
    return new BackgroundTool({
      host: this.host,
      refresh: () => editor.requestUpdate(),
      api: { fetchImage, storeImage },
      readPicture: readPictureInBrowser,
      useSelectTool: () => (editor._tool = "select"),
      currentTool: () => editor._tool,
    });
  }

  private makeRoof(): RoofController {
    const editor = this;
    return new RoofController({
      host: this.host,
      floorId: () => editor._floorId,
      setFloorId: (id) => (editor._floorId = id),
      confirm: (text) => confirm(text),
      refresh: () => editor.requestUpdate(),
    });
  }

  /** What the layers drawn over the plan need. */
  /** Map tiles arrive one by one: draw again once for all that arrived within a few milliseconds. */
  private redrawQueued = false;
  private readonly redrawSoon = (): void => {
    if (this.redrawQueued) return;
    this.redrawQueued = true;
    setTimeout(() => {
      this.redrawQueued = false;
      this.requestUpdate();
    }, 30);
  };

  private canvasContext(): CanvasContext {
    return { host: this.host, toScreen: (p) => this.toScreen(p), toWorld: (x, y) => this.toWorld(x, y), scale: this._view.scale, floorId: this._floorId, redraw: this.redrawSoon };
  }

  /** What the roof and solar forms need. */
  private roofDeps(): RoofPanelDeps {
    return { host: this.host, roof: this.roof, floorId: this._floorId, setFloorId: (id) => (this._floorId = id), toggleLockPlan: () => this.toggleLockPlan() };
  }

  private makeBackup(): BackupService {
    const editor = this;
    return new BackupService({
      get hass() {
        return editor.hass;
      },
      get doc() {
        return editor._doc;
      },
      t: (key, vars) => editor.t(key, vars),
      adopt: (building) => {
        editor.setDoc(building);
        editor._floorId = building.floors[0]?.id ?? null;
        editor.selectItem("room", null);
        editor.fit();
      },
      say: (text) => (editor.side.notice = text),
      refresh: () => editor.requestUpdate(),
      packsChanged: () => editor.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true })),
    });
  }

  private makeHost(): EditorHost {
    const editor = this;
    return {
      get hass() {
        return editor.hass;
      },
      get doc() {
        return editor._doc;
      },
      get floor() {
        return editor.floor;
      },
      get admin() {
        return editor.isAdmin;
      },
      t: (key, vars) => editor.t(key, vars),
      change: (mutate) => editor.change(mutate),
      replace: (next) => editor.setDoc(next),
      pickPoint: (onPick) => editor.pickPoint(onPick),
      get loadCardEditor() {
        return editor.loadCardEditor;
      },
    };
  }

  // ------------------------------------------------------------------ lifecycle

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("keydown", this.onKey);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("keydown", this.onKey);
    this.resizeObserver?.disconnect();
  }

  protected willUpdate(changed: PropertyValues): void {
    // this bundle keeps its own pack registry – and its own language table, so it fetches the language itself
    if (changed.has("packs")) setPacks(this.packs ?? []);
    if (changed.has("_doc") && this._split) this.queue3d();
    if (changed.has("_split") && this._split) this._doc3d = this._doc;
    if (changed.has("_tool") && this.houseTool && !this._split && !this.narrow) this._split = true;
    // entering or leaving the roof tool: the 3D half frames the whole house (or the floor) again
    if (changed.has("_tool") && (this.houseTool || changed.get("_tool") === "roof" || changed.get("_tool") === "energy")) this.reframe3d = true;
    if (changed.has("building") && this.building !== this._doc) {
      // the tour is for a first start: a plan without rooms, on a browser that has not seen it
      if (!this.tourChecked && this.building) {
        this.tourChecked = true;
        if (!this.building.floors.some((f) => f.rooms.length) && tourDue()) this._tour = 0;
      }
      this._doc = this.building;
      this._doc3d = this.building;
      if (!this._doc.floors.some((f) => f.id === this._floorId)) this._floorId = this._doc.floors[0]?.id ?? null;
      if (!this.floor?.rooms.some((r) => r.id === this.sel.room)) this.sel.room = null;
    }
  }

  protected firstUpdated(): void {
    const stage = this.renderRoot.querySelector(".nf-canvas-wrap") as HTMLElement;
    this.resizeObserver = new ResizeObserver(() => {
      this._size = { w: stage.clientWidth, h: stage.clientHeight };
      if (!this.fitted && this._size.w > 0) {
        this.fitted = true;
        this.fit();
      }
    });
    this.resizeObserver.observe(stage);
  }

  /** Hand the draft to the 3D pane a moment after the last change (a drag changes it many times a second). */
  private queue3d(): void {
    clearTimeout(this.doc3dTimer);
    this.doc3dTimer = setTimeout(() => (this._doc3d = this._doc), 150);
  }

  /** Dragging the divider between the plan and the 3D pane changes their share of the width. */
  private onSplitDown(e: PointerEvent): void {
    const pair = (e.currentTarget as HTMLElement).parentElement!;
    const handle = e.currentTarget as HTMLElement;
    handle.setPointerCapture(e.pointerId);
    const rect = pair.getBoundingClientRect();
    const move = (ev: PointerEvent) => {
      this._splitRatio = Math.min(0.8, Math.max(0.2, (ev.clientX - rect.left) / rect.width));
    };
    const up = () => {
      handle.removeEventListener("pointermove", move);
      handle.removeEventListener("pointerup", up);
      handle.removeEventListener("pointercancel", up);
      try {
        localStorage.setItem("nextfloor.editorSplit", String(Math.round(this._splitRatio * 100)));
      } catch {
        /* no storage */
      }
    };
    handle.addEventListener("pointermove", move);
    handle.addEventListener("pointerup", up);
    handle.addEventListener("pointercancel", up);
    e.preventDefault();
  }

  private toggleSplit(): void {
    this._split = !this._split;
    try {
      localStorage.setItem("nextfloor.editor3d", this._split ? "1" : "0");
    } catch {
      // no storage: the choice lasts for this page
    }
  }

  /** Furnishing in the 3D pane: the item moved there is moved in the draft (undoable, saved with the plan). */
  private onFurnitureMoved3d(e: CustomEvent<{ id: string; x: number; z: number }>): void {
    const { id, x, z } = e.detail;
    const wall = this._doc.settings.wall_interior;
    this.change((doc) => {
      for (const floor of doc.floors) {
        const f = floor.furniture.find((m) => m.id === id);
        if (!f) continue;
        // the item stays in its room (no dragging through walls)
        const [nx, nz] = keepInRoom(floor, f.x, f.z, x, z);
        Object.assign(f, { x: nx, z: nz });
        const snap = snapToWall(floor, f, wall);
        if (snap) Object.assign(f, snap);
      }
    });
  }

  private onDeviceMoved3d(e: CustomEvent<{ id: string; x: number; z: number }>): void {
    const { id, x, z } = e.detail;
    this.change((doc) => {
      for (const floor of doc.floors) {
        const p = floor.placements.find((d) => d.entity_id === id);
        if (!p) continue;
        const [nx, nz] = keepInRoom(floor, p.x, p.z, x, z);
        Object.assign(p, { x: nx, z: nz });
      }
    });
  }

  /** Bar under the 3D pane: turn or delete the selected item or device (as when furnishing in the panel). */
  private render3dBar() {
    if (!this.isAdmin) return nothing;
    const f = this.furnitureItem;
    const d = this.device;
    if (f) {
      const wallItem = canLift(f);
      const num = (key: "w" | "d" | "h", label: string, min = 0.05) => html`<label class="nf-3d-size" title=${this.t(`size_${key}` as I18nKey)}
        >${label}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min=${min}
          .value=${String(Math.round(f[key] * 100) / 100)}
          @change=${(e: Event) => {
            const v = parseFloat((e.target as HTMLInputElement).value.replace(",", "."));
            if (Number.isFinite(v) && v >= min) this.updateFurniture({ [key]: Math.round(v * 1000) / 1000 });
          }}
        />
      </label>`;
      return html`<div class="nf-3d-bar">
        <span>${furnitureName(this.hass, f.type)}</span>
        ${num("w", this.t("size_short_w"))} ${num("d", this.t("size_short_d"))} ${num("h", this.t("size_short_h"))}
        ${wallItem
          ? html`<label class="nf-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type="number"
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${String(Math.round((f.mount_y ?? mountBase(this.floor!, f)) * 100) / 100)}
                @change=${(e: Event) => {
                  const v = parseFloat((e.target as HTMLInputElement).value.replace(",", "."));
                  if (Number.isFinite(v) && v >= 0) this.updateFurniture({ mount_y: Math.round(v * 1000) / 1000 });
                }}
              />
            </label>`
          : nothing}
        <button class="nf-chip" @click=${() => this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="nf-chip" @click=${() => this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture", f.id)}
        <button class="nf-chip nf-danger-chip" @click=${() => this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`;
    }
    if (d) {
      const kind = kindOf(d.entity_id);
      const light = kind === "light";
      const auto = kind ? defaultHeight(kind, this.floor ? ceilingAt(this.floor, d.x, d.z) : 2.5, light ? (d.mount ?? "ceiling") : null) : 1;
      return html`<div class="nf-3d-bar">
        <span>${entityName(this.hass, d.entity_id)}</span>
        ${light
          ? html`<select class="nf-3d-select" title=${this.t("lamp_mount")} @change=${(e: Event) => this.updateDevice({ mount: (e.target as HTMLSelectElement).value as LampMount, y: null })}>
              ${(["ceiling", "floor", "table", "wall"] as const).map((m) => html`<option value=${m} ?selected=${m === (d.mount ?? "ceiling")}>${this.t(`lamp_${m}`)}</option>`)}
            </select>`
          : nothing}
        <label class="nf-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((d.y ?? auto) * 100) / 100)}
            @change=${(e: Event) => {
              const v = parseFloat((e.target as HTMLInputElement).value.replace(",", "."));
              if (Number.isFinite(v) && v >= 0) this.updateDevice({ y: Math.round(v * 1000) / 1000 });
            }}
          />
        </label>
        <button class="nf-chip" @click=${() => this.updateDevice({ rotation: ((((d.rotation ?? 0) - 45) % 360) + 360) % 360 })}>↺ 45°</button>
        <button class="nf-chip" @click=${() => this.updateDevice({ rotation: (((d.rotation ?? 0) + 45) % 360) % 360 })}>↻ 45°</button>
        ${this.fixButton("device", d.entity_id)}
        <button class="nf-chip nf-danger-chip" @click=${() => this.deleteItem("device", d.entity_id)}>${this.t("delete")}</button>
      </div>`;
    }
    return nothing;
  }

  /** A solar field or roof window grabbed in the 3D pane: its grab point on its face, and the plan before. */
  private grab3d: { id: string; win: boolean; chimney?: boolean; du: number; ds: number; base: Building; moved: boolean } | null = null;

  /** Moves solar fields (energy tool) and roof windows (roof tool) in the 3D pane, along the faces under the pointer. */
  private surfaceGrabber: SurfaceGrab = {
    start: (ray) => this.grab3dStart(ray),
    move: (ray) => this.grab3dMove(ray),
    end: () => {
      const g = this.grab3d;
      this.grab3d = null;
      if (g?.moved) this.pushHistory(g.base);
    },
  };

  /** A solar field, or a roof window or chimney as a field of one module, for moving it along the roof faces. */
  private fittingField(doc: Building, id: string, kind: "field" | "win" | "chimney"): SolarField | undefined {
    if (kind === "field") return doc.settings.roof.solar?.find((x) => x.id === id);
    if (kind === "win") {
      const w = doc.settings.roof.windows?.find((x) => x.id === id);
      return w ? windowAsField(w) : undefined;
    }
    const c = doc.settings.roof.chimneys?.find((x) => x.id === id);
    return c ? chimneyAsField(c, roofFaces(doc).find((f) => f.key === c.face)) : undefined;
  }

  private grab3dStart(ray: SurfaceRay): boolean {
    const doc = this._doc;
    const roof = roofFaces(doc);
    let best: { id: string; win: boolean; chimney?: boolean; t: number; du: number; ds: number } | null = null;
    const consider = (id: string, win: boolean, face: RoofFace | null, field: SolarField, locked = false, chimney = false) => {
      if (!face || locked) return;
      const hit = rayOnFace(face, ray.o, ray.d);
      if (!hit || !onField(face, field, hit.u, hit.s) || (best && best.t <= hit.t)) return;
      best = { id, win, chimney, t: hit.t, du: hit.u - field.u, ds: hit.s - field.v };
    };
    if (this._tool === "energy") for (const f of doc.settings.roof.solar ?? []) consider(f.id, false, fieldFace(doc, f, roof), f, !!f.locked);
    if (this._tool === "roof") for (const w of doc.settings.roof.windows ?? []) consider(w.id, true, roof.find((x) => x.key === w.face) ?? null, windowAsField(w), !!w.locked);
    if (this._tool === "roof")
      for (const c of doc.settings.roof.chimneys ?? []) {
        const face = roof.find((x) => x.key === c.face) ?? null;
        consider(c.id, false, face, chimneyAsField(c, face), !!c.locked, true);
      }
    if (!best) return false;
    const b = best as { id: string; win: boolean; chimney?: boolean; du: number; ds: number };
    this.grab3d = { id: b.id, win: b.win, chimney: b.chimney, du: b.du, ds: b.ds, base: doc, moved: false };
    if (b.chimney) this.roof.chimneyId = b.id;
    else if (b.win) this.roof.windowId = b.id;
    else this.roof.selectField(b.id);
    return true;
  }

  private grab3dMove(ray: SurfaceRay): void {
    const g = this.grab3d;
    if (!g) return;
    const doc = g.base;
    const src = this.fittingField(doc, g.id, g.win ? "win" : g.chimney ? "chimney" : "field");
    if (!src) return;
    const own = fieldFace(doc, src);
    // free-standing fields stay on their own level; the others go to the face nearest under the pointer
    const faces = own?.unbounded ? [own] : g.win || g.chimney ? roofFaces(doc) : [...roofFaces(doc), ...wallFaces(doc)];
    let best: { face: RoofFace; t: number; u: number; s: number } | null = null;
    for (const face of faces) {
      const hit = rayOnFace(face, ray.o, ray.d);
      if (hit && onFace(face, hit.u, hit.s) && (!best || hit.t < best.t)) best = { face, ...hit };
    }
    if (!best) return;
    const face = best.face;
    const step = 0.05;
    const snapTo = (v: number) => round(Math.round(v / step) * step);
    const kept = clampField(face, { ...src, face: face.key, u: snapTo(best.u - g.du), v: snapTo(best.s - g.ds), tilt: face.flat ? (src.tilt ?? 15) : src.tilt });
    g.moved = true;
    this.change(
      (d) => {
        if (g.win || g.chimney) {
          const w = g.win ? d.settings.roof.windows?.find((x) => x.id === g.id) : d.settings.roof.chimneys?.find((x) => x.id === g.id);
          if (w) Object.assign(w, { face: face.key, ...kept });
          return;
        }
        const f = d.settings.roof.solar?.find((x) => x.id === g.id);
        if (f) Object.assign(f, { face: face.key, ...kept }, face.flat && f.tilt == null ? { tilt: 15 } : {});
      },
      g.base,
      false,
    );
  }

  /** Tools that work on the whole house (roof, solar): the 3D pane shows all floors with the roof. */
  private get houseTool(): boolean {
    return this._tool === "roof" || this._tool === "energy";
  }

  private render3d() {
    return html`<div class="nf-editor-3d">
      ${this.houseTool
        ? nothing
        : html`<div class="nf-seg nf-3d-walls">
            <button aria-pressed=${this._wall3d === "auto"} @click=${() => (this._wall3d = "auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wall3d === "cut"} @click=${() => (this._wall3d = "cut")}>${this.t("walls_cut")}</button>
            <button aria-pressed=${this._wall3d === "slope"} title=${this.t("walls_slope_hint")} @click=${() => (this._wall3d = "slope")}>${this.t("walls_slope")}</button>
            <button aria-pressed=${this._solid3d} title=${this.t("walls_solid_hint")} @click=${() => (this._solid3d = !this._solid3d)}>${this.t("walls_solid")}</button>
          </div>`}
      ${this.render3dBar()}
      <nf-view3d
        .hass=${this.hass}
        .building=${this._doc3d}
        .floorId=${this.houseTool ? null : this._floorId}
        .roomId=${null}
        .wallMode=${this.houseTool ? "auto" : this._wall3d}
        .solidWalls=${!this.houseTool && this._solid3d}
        .explode=${false}
        .keepRoof=${this._tool === "roof" || this._tool === "energy"}
        .markerMode=${"important"}
        .heatMode=${"none"}
        .theme=${"neon"}
        .packs=${this.packs}
        .showEnergy=${false}
        .holograms=${this._tool === "energy" ? true : null}
        .flows=${false}
        ?furnish=${this.isAdmin}
        .surfaceGrab=${this.isAdmin && this.houseTool ? this.surfaceGrabber : null}
        .furnishTypes=${this._tool === "energy" ? ENERGY_DEVICES : this._tool === "roof" ? [] : null}
        .selectedFurniture=${this.sel.furniture}
        .selectedDevice=${this.sel.device}
        .quality=${"auto"}
        .floorThumbs=${false}
        .roomLabels=${true}
        .floorStack=${this.houseTool ? "stacked" : "single"}
        .panelOpen=${false}
        .alerts=${false}
        .scenes=${false}
        @furniture-select=${(e: CustomEvent<{ id: string | null }>) => {
          if (e.detail.id) this.selectFrom3d("furniture", e.detail.id);
          else if (this.sel.furniture) this.selectFrom3d("furniture", null);
        }}
        @furniture-move=${this.onFurnitureMoved3d}
        @device-select=${(e: CustomEvent<{ id: string | null }>) => {
          if (e.detail.id) this.selectFrom3d("device", e.detail.id);
          else if (this.sel.device) this.selectFrom3d("device", null);
        }}
        @device-move=${this.onDeviceMoved3d}
        @floor-tap=${(e: CustomEvent<{ floorId: string | null }>) => {
          if (e.detail.floorId) this._floorId = e.detail.floorId;
          this._sideOpen = false;
        }}
        @room-tap=${(e: CustomEvent<{ floorId: string; roomId: string | null }>) => {
          if (e.detail.floorId) this._floorId = e.detail.floorId;
          if (e.detail.roomId) this.selectFrom3d("room", e.detail.roomId);
          else this._sideOpen = false;
        }}
      ></nf-view3d>
    </div>`;
  }

  protected updated(): void {
    // ?selected only sets an option's selectedness until the user picks one in that select; after that a
    // reused <select> (another room, another item) would keep showing the old pick: follow the attribute
    for (const option of this.renderRoot.querySelectorAll<HTMLOptionElement>("select option[selected]")) {
      if (!option.selected) option.selected = true;
    }
    if (this.reframe3d) {
      this.reframe3d = false;
      // after the 3D half got its new floor (and built the roof): frame it
      setTimeout(() => (this.renderRoot.querySelector("nf-view3d") as (HTMLElement & { resetView(): void }) | null)?.resetView(), 250);
    }
    const background = this.floor?.background;
    if (background) this.bg.ensureLoaded(background.image_id);
    // thumbnails of the selected screen's stored pictures
    if (this.furnitureItem?.pictures) {
      // thumbnails of every stored picture in the plan (they can be reused on other screens)
      for (const id of this.storedPictures()) this.bg.ensureLoaded(id);
    }
  }

  // ------------------------------------------------------------------ document helpers

  private get floor(): Floor | undefined {
    return this._doc?.floors.find((f) => f.id === this._floorId);
  }

  private get room(): Room | undefined {
    return this.floor?.rooms.find((r) => r.id === this.sel.room);
  }

  private get isAdmin(): boolean {
    return this.hass?.user?.is_admin ?? true;
  }

  /** Replace the document; `base` (the state before the change) goes into the undo history. */
  private setDoc(next: Building, base: Building | null = this._doc): void {
    if (base) this.history.record(base);
    this._doc = next;
    this.syncHistoryButtons();
    this.dispatchEvent(new CustomEvent("building-changed", { detail: { building: next }, bubbles: true, composed: true }));
  }

  /** Apply a change to a copy of the document (or of `base`) and store it. */
  private change(mutate: (doc: Building, floor: Floor) => void, base: Building = this._doc, history = true): void {
    const next = structuredClone(base);
    const floor = next.floors.find((f) => f.id === this._floorId);
    if (!floor && this._floorId) return;
    mutate(next, floor as Floor);
    this.setDoc(next, history ? base : null);
  }

  private syncHistoryButtons(): void {
    this._canUndo = this.history.canUndo;
    this._canRedo = this.history.canRedo;
  }

  private undo(): void {
    const before = this.history.undo(this._doc);
    if (before) this.restore(before);
  }

  private redo(): void {
    const after = this.history.redo(this._doc);
    if (after) this.restore(after);
  }

  private restore(doc: Building): void {
    this._doc = doc;
    if (!doc.floors.some((f) => f.id === this._floorId)) this._floorId = doc.floors[0]?.id ?? null;
    if (!this.floor?.rooms.some((r) => r.id === this.sel.room)) this.sel.room = null;
    this.sel.corner = null;
    this.syncHistoryButtons();
    this.dispatchEvent(new CustomEvent("building-changed", { detail: { building: doc }, bubbles: true, composed: true }));
  }

  // ------------------------------------------------------------------ view transform

  private toScreen(p: Vec2): [number, number] {
    const { scale, ox, oy } = this._view;
    return [p[0] * scale + ox, p[1] * scale + oy];
  }

  /** Asks for one tap on the plan; a pick left armed lapses after a minute, or on Escape. */
  pickPoint(onPick: (at: Vec2 | null) => void): void {
    this._pick?.(null);
    this._pick = onPick;
    clearTimeout(this._pickTimer);
    this._pickTimer = window.setTimeout(() => this.cancelPick(), 60_000);
    this.requestUpdate();
  }

  private cancelPick(): void {
    clearTimeout(this._pickTimer);
    if (!this._pick) return;
    this._pick = null;
    this.requestUpdate();
  }

  private toWorld(sx: number, sy: number): Vec2 {
    const { scale, ox, oy } = this._view;
    return [(sx - ox) / scale, (sy - oy) / scale];
  }

  private localPoint(e: PointerEvent | WheelEvent): [number, number] {
    const rect = (this.renderRoot.querySelector("svg") as SVGSVGElement).getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
  }

  private fit(): void {
    const pts = this.floor?.rooms.flatMap((r) => r.points) ?? [];
    const b = pts.length ? bounds(pts) : { x0: 0, z0: 0, x1: 10, z1: 8 };
    const margin = 1.5;
    const w = b.x1 - b.x0 + 2 * margin;
    const h = b.z1 - b.z0 + 2 * margin;
    const scale = Math.max(8, Math.min(400, Math.min(this._size.w / w, this._size.h / h)));
    this._view = {
      scale,
      ox: this._size.w / 2 - ((b.x0 + b.x1) / 2) * scale,
      oy: this._size.h / 2 - ((b.z0 + b.z1) / 2) * scale,
    };
  }

  /** Bring a plan point to the middle of the plan, zoomed in enough to see a small item there. */
  private showPoint(x: number, z: number): void {
    const scale = Math.max(this._view.scale, 70);
    this._view = { scale, ox: this._size.w / 2 - x * scale, oy: this._size.h / 2 - z * scale };
  }

  private zoomAt(factor: number, sx: number, sy: number): void {
    const { scale, ox, oy } = this._view;
    const next = Math.max(8, Math.min(600, scale * factor));
    const k = next / scale;
    this._view = { scale: next, ox: sx - (sx - ox) * k, oy: sy - (sy - oy) * k };
  }

  // ------------------------------------------------------------------ snapping

  /** The place in the plan a point lands on: corners and walls of other rooms, then the grid. `free` skips all of that. */
  private snap(p: Vec2, skip?: { roomId: string; index?: number }, free = false): Vec2 {
    this._guides = {};
    if (free) return p;
    const snapped = snapToPlan(p, { rooms: this.floor?.rooms ?? [], grid: this._doc.settings.grid, reach: SNAP_PX / this._view.scale, skip });
    this._guides = snapped.guides;
    return snapped.point;
  }

  // ------------------------------------------------------------------ pointer input

  private onPointerDown(e: PointerEvent): void {
    // a form is waiting for one place on the plan: this tap is it
    if (this._pick) {
      const [sx, sy] = this.localPoint(e);
      const pick = this._pick;
      this.cancelPick();
      pick(this.toWorld(sx, sy));
      return;
    }
    this._ctx = null;
    // a note is picked, not dragged: its form has the text, the day and the spot
    const note = (e.target as Element | null)?.closest?.("[data-note]")?.getAttribute("data-note");
    if (note && this._tool === "select") {
      this._note = note;
      this._sideOpen = true;
      return;
    }
    if (this._note) this._note = null;
    this._fixedHint = false;
    this.fixedPan = false;
    this.pointerDown(e);
    if (this.pointers.size !== 1) {
      clearTimeout(this.pressTimer);
      return;
    }
    this.guardFixed(this.localPoint(e));
    clearTimeout(this.pressTimer);
    this.pressStart = null;
    if (e.pointerType === "touch" && (this._tool === "select" || this._tool === "furniture")) {
      const at = this.localPoint(e);
      const target = e.target as Element;
      this.pressStart = at;
      this.pressTimer = window.setTimeout(() => {
        const d = this.drag;
        if (d && "moved" in d && d.moved) return;
        this.drag = null;
        this.openContext(target, at);
      }, 550);
    }
  }

  /** A drag that would move a fixed item pans the view instead (the item stays selected). */
  private guardFixed(local: [number, number]): void {
    const d = this.drag;
    if (!d) return;
    let target: [FixKind, string] | null = null;
    if (d.kind === "vertex" || d.kind === "room") target = ["room", d.roomId];
    else if (d.kind === "device" || d.kind === "aim") target = ["device", d.entityId];
    else if (d.kind === "opening") target = ["opening", d.id];
    else if (d.kind === "furniture" || d.kind === "rotate" || d.kind === "resize") target = ["furniture", d.id];
    else if (d.kind === "wallmove") target = ["wall", d.id];
    else if (d.kind === "outdoor") target = ["outdoor", d.id];
    if (!target || !this.isFixedItem(...target)) return;
    if ("moved" in d && d.moved && "base" in d) this.restoreLive(d.base);
    this.drag = { kind: "pan", last: local };
    this.fixedPan = true;
  }

  private pointerDown(e: PointerEvent): void {
    (e.currentTarget as SVGSVGElement).setPointerCapture(e.pointerId);
    const local = this.localPoint(e);
    this.pointers.set(e.pointerId, local);
    if (this.pointers.size === 2) {
      // a second finger cancels the current gesture and pinches instead
      const d = this.drag;
      if (d && EDIT_DRAGS.has(d.kind) && "moved" in d && d.moved && "base" in d) this.restoreLive(d.base);
      this.drag = null;
      this.pinch = this.pinchState();
      return;
    }
    if (this.pointers.size > 2) return;
    if (e.button === 1 || e.button === 2 || !this.floor) {
      this.drag = { kind: "pan", last: local };
      return;
    }
    const press: Press = { local, world: this.toWorld(...local), target: e.target as Element, fine: e.altKey };
    // the first of these that recognises what was pressed decides what the gesture is
    const gesture = this.pressRoute(press) ?? this.pressBackground(press) ?? this.pressWallTool(press) ?? this.pressRoofTools(press) ?? this.pressDrawingTool(press) ?? this.pressItem(press) ?? this.pressRoom(press);
    if (gesture !== NO_GESTURE) this.drag = gesture;
  }

  /** The panning gesture: used when what was pressed cannot be moved (read-only, or fixed). */
  private pan(press: Press): Drag {
    return { kind: "pan", last: press.local };
  }

  /** A gesture that moves the thing pressed, or pans when the user may not change the plan. */
  private moves<T extends Drag>(press: Press, gesture: T): Drag {
    return this.isAdmin ? gesture : this.pan(press);
  }

  /** Straightening, measuring, and moving, scaling and turning the background picture. */
  private pressBackground(press: Press): Gesture | undefined {
    const { world, target } = press;
    const background = this.floor?.background;
    if (this.bg.level && this.isAdmin && background) {
      this.bg.tapLevel(world);
      return NO_GESTURE;
    }
    if (this.bg.handlesShown && background && target.closest("[data-bg-rotate]")) {
      const centre = pictureCentre(background, this.bg.picture(background.image_id)?.aspect ?? 1);
      return { kind: "bgrotate", base: this._doc, moved: false, start: Math.atan2(world[1] - centre[1], world[0] - centre[0]), rot: background.rotation ?? 0 };
    }
    if (this.bg.ruler && this.bg.ruler.length < 2 && this.isAdmin && background) {
      this.bg.tapRuler(world);
      return NO_GESTURE;
    }
    const onPicture = !!target.closest("[data-bg-handle]") || !!target.closest("[data-bg]");
    if (background && this.bg.handlesShown && !this.bg.edit && onPicture) return this.pictureGesture(press, background);
    if (this.bg.edit && this.isAdmin && background) {
      // anything but the picture ends the editing
      if (onPicture) return this.pictureGesture(press, background);
      this.bg.edit = false;
    }
    return undefined;
  }

  /** Its lower right corner scales the picture, and its body moves it. */
  private pictureGesture(press: Press, background: Background): Drag {
    if (press.target.closest("[data-bg-handle]")) return { kind: "bgscale", base: this._doc, moved: false };
    return { kind: "bgmove", start: press.world, bx: background.x, bz: background.z, base: this._doc, moved: false };
  }

  private pressWallTool(press: Press): Gesture | undefined {
    if (this._tool !== "wall") return undefined;
    const start = this.snap(press.world, undefined, press.fine);
    return { kind: "freewall", start, end: start };
  }

  /** The roof and energy tools: roof sections and their handles, solar fields, roof windows and energy devices. */
  private pressRoofTools(press: Press): Gesture | undefined {
    if (this._tool !== "roof" && this._tool !== "energy") return undefined;
    const { local, world, target } = press;
    const attribute = (selector: string, name: string) => target.closest(selector)?.getAttribute(name) ?? null;
    const energy = this._tool === "energy";
    const marker = energy ? attribute("[data-energy-device]", "data-energy-device") : null;
    if (marker) return this.pressEnergyDevice(press, marker);
    const turn = energy ? attribute("[data-solar-turn]", "data-solar-turn") : null;
    if (turn && this.isAdmin) return { kind: "solarturn", id: turn, base: this._doc, moved: false };
    const solar = energy ? attribute("[data-solar]", "data-solar") : null;
    if (solar) return this.pressSolarField(press, solar);
    const roofWindow = this._tool === "roof" ? attribute("[data-roofwin]", "data-roofwin") : null;
    if (roofWindow) return this.pressRoofWindow(press, roofWindow);
    const chimney = this._tool === "roof" ? attribute("[data-chimney]", "data-chimney") : null;
    if (chimney) return this.pressChimney(press, chimney);
    if (this._tool === "roof") {
      this.roof.windowId = null;
      this.roof.chimneyId = null;
    }
    const device = energy ? attribute(".nf-energy-item", "data-furniture") : null;
    if (device) return this.pressEnergyDevice(press, device);
    if (energy) {
      // beside the fields the energy tool only pans
      this.selectItem("furniture", null);
      this.roof.solarId = null;
      return this.pan(press);
    }
    const plus = attribute("[data-plus]", "data-plus");
    if (plus?.startsWith("roof:") && this.isAdmin) return this.splitRoofEdgeGesture(...(plus.split(":").slice(1) as [string, string]));
    const vertex = attribute("[data-roof-vertex]", "data-roof-vertex");
    const corner = attribute("[data-roof-corner]", "data-roof-corner");
    const body = attribute("[data-roof]", "data-roof");
    if (vertex && this.isAdmin) {
      const [id, index] = vertex.split(":");
      return { kind: "roofvertex", id, index: Number(index), base: this._doc, moved: false };
    }
    if (corner && this.isAdmin) {
      const [id, cx, cz] = corner.split(":");
      return { kind: "roofcorner", id, corner: [cx === "1" ? 1 : 0, cz === "1" ? 1 : 0], base: this._doc, moved: false };
    }
    if (body) {
      const fixed = this.roof.isFixed(this._doc.settings.roof.sections?.find((s) => s.id === body));
      if (fixed && this.roof.sectionId === body) this._fixedHint = true;
      this.roof.sectionId = body;
      return this.isAdmin && !fixed ? { kind: "roofmove", id: body, start: world, startScreen: local, base: this._doc, moved: false } : this.pan(press);
    }
    if (!this.isAdmin) return this.pan(press);
    this.roof.sectionId = null;
    const start = this.snap(world, undefined, press.fine);
    return { kind: "rect", start, end: start, roof: true };
  }

  /** An energy device, by its marker or its furniture symbol: selected and moved like furniture. */
  private pressEnergyDevice(press: Press, id: string): Drag {
    this.roof.solarId = null;
    this.selectItem("furniture", id);
    return this.moves(press, { kind: "furniture", id, start: press.world, startScreen: press.local, base: this._doc, moved: false });
  }

  /** A solar field: a tap on a module in pick mode switches it, otherwise the field is selected and can be moved onto another face. */
  private pressSolarField(press: Press, id: string): Drag {
    const { local, world, target } = press;
    const cell = target.closest("[data-cell]")?.getAttribute("data-cell");
    if (this.roof.picking && id === this.roof.solarId && cell && this.isAdmin) {
      this.roof.toggleCell(cell);
      return this.pan(press);
    }
    if (id !== this.roof.solarId) this.roof.picking = false;
    this.roof.solarId = id;
    this.roof.sectionId = null;
    const field = this._doc.settings.roof.solar?.find((f) => f.id === id);
    const face = field ? (fieldFace(this._doc, field) ?? undefined) : undefined;
    const hit = face ? this.faceHit(face, world) : null;
    const grab = field && hit ? { du: hit.u - field.u, ds: Number.isNaN(hit.s) ? 0 : hit.s - field.v } : null;
    // solar fields are fittings like furniture: the plan lock does not hold them
    return this.isAdmin && !field?.locked ? { kind: "solarmove", id, start: world, startScreen: local, base: this._doc, moved: false, grab } : this.pan(press);
  }

  private pressRoofWindow(press: Press, id: string): Drag {
    this.roof.windowId = id;
    this.roof.sectionId = null;
    const w = this._doc.settings.roof.windows?.find((x) => x.id === id);
    const face = w ? roofFaces(this._doc).find((f) => f.key === w.face) : undefined;
    const hit = face ? pointOnFace(face, press.world) : null;
    const grab = w && hit ? { du: hit.u - w.u, ds: hit.s - w.v } : null;
    return this.isAdmin && !w?.locked ? { kind: "solarmove", id, start: press.world, startScreen: press.local, base: this._doc, moved: false, grab, win: true } : this.pan(press);
  }

  private pressChimney(press: Press, id: string): Drag {
    this.roof.chimneyId = id;
    this.roof.sectionId = null;
    const c = this._doc.settings.roof.chimneys?.find((x) => x.id === id);
    const face = c ? roofFaces(this._doc).find((f) => f.key === c.face) : undefined;
    const hit = face ? pointOnFace(face, press.world) : null;
    const grab = c && hit ? { du: hit.u - c.u, ds: hit.s - c.v } : null;
    return this.isAdmin && !c?.locked ? { kind: "solarmove", id, start: press.world, startScreen: press.local, base: this._doc, moved: false, grab, chimney: true } : this.pan(press);
  }

  /** The tools that draw: rectangles, outdoor areas, floor openings, outlines, measuring, and placing doors and windows. */
  private pressDrawingTool(press: Press): Gesture | undefined {
    const tool = this._tool;
    if (tool === "rect" || tool === "outdoor" || tool === "hole" || tool === "stairs") {
      const start = this.snap(press.world, undefined, press.fine);
      return { kind: "rect", start, end: start, outdoor: tool === "outdoor", hole: tool === "hole", stairs: tool === "stairs" };
    }
    if (tool === "polygon" || tool === "measure") return { kind: "tap", startScreen: press.local, last: press.local, panning: false };
    if (tool === "opening") return this.placeOpening(this._openingPreset, press.local) ? NO_GESTURE : this.pan(press);
    return undefined;
  }

  /** Pressing something in the plan: a device, opening, furniture and its handles, a room's corners, walls and outdoor areas. */
  private pressItem(press: Press): Gesture | undefined {
    const { local, world, target } = press;
    const find = (selector: string, name: string) => target.closest(selector)?.getAttribute(name) ?? null;
    const base = this._doc;
    const device = find("[data-device]", "data-device");
    if (device && this.isAdmin) return { kind: "device", entityId: device, start: world, startScreen: local, base, moved: false };
    const opening = find("[data-opening]", "data-opening");
    if (opening) {
      this.selectItem("opening", opening);
      return this.moves(press, { kind: "opening", id: opening, startScreen: local, base, moved: false });
    }
    const resize = find("[data-resize]", "data-resize");
    if (resize && this.isAdmin) {
      const [id, sx, sz] = resize.split(":");
      return { kind: "resize", id, corner: [sx === "1" ? 1 : -1, sz === "1" ? 1 : -1], base, moved: false };
    }
    const rotate = find("[data-rotate]", "data-rotate");
    if (rotate && this.isAdmin) return { kind: "rotate", id: rotate, base, moved: false };
    const aim = find("[data-aim]", "data-aim");
    if (aim && this.isAdmin) return { kind: "aim", entityId: aim, base, moved: false };
    const furniture = target.closest("[data-vertex], [data-mid]") ? null : find("[data-furniture]", "data-furniture");
    if (furniture) {
      this.selectItem("furniture", furniture);
      return this.moves(press, { kind: "furniture", id: furniture, start: world, startScreen: local, base, moved: false });
    }
    const corner = find("[data-vertex]", "data-vertex");
    const edge = find("[data-mid]", "data-mid");
    if (corner !== null && this.room && this.isAdmin) {
      this.sel.corner = Number(corner);
      return { kind: "vertex", roomId: this.room.id, index: this.sel.corner, base, moved: false };
    }
    if (edge !== null && this.room && this.isAdmin) return this.splitEdgeGesture(this.room, Number(edge));
    const wallEnd = find("[data-wall-end]", "data-wall-end");
    if (wallEnd && this.isAdmin) {
      const [id, end] = wallEnd.split(":");
      return { kind: "wallmove", id, end: end as "a" | "b", start: world, startScreen: local, base, moved: false };
    }
    const freeWall = find("[data-free-wall]", "data-free-wall");
    if (freeWall) {
      this.selectItem("wall", freeWall);
      return this.moves(press, { kind: "wallmove", id: freeWall, end: null, start: world, startScreen: local, base, moved: false });
    }
    const plus = find("[data-plus]", "data-plus");
    if (plus?.startsWith("out:") && this.isAdmin) return this.splitOutdoorEdgeGesture(...(plus.split(":").slice(1) as [string, string]));
    const outVertex = find("[data-out-vertex]", "data-out-vertex");
    if (outVertex && this.isAdmin) {
      const [id, index] = outVertex.split(":");
      return { kind: "outvertex", id, index: Number(index), base, moved: false };
    }
    const outdoor = find("[data-outdoor]", "data-outdoor");
    if (outdoor && !target.closest("[data-room]") && !this.roomAt(world)) {
      this.selectItem("outdoor", outdoor);
      return this.moves(press, { kind: "outdoor", id: outdoor, start: world, startScreen: local, base, moved: false });
    }
    return undefined;
  }

  /** The "+" in the middle of an edge: inserts a corner there and starts dragging it. */
  private splitEdgeGesture(room: Room, edge: number): Drag {
    const [a, b] = [room.points[edge], room.points[(edge + 1) % room.points.length]];
    const middle = shifted([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], [0, 0]);
    const base = this._doc;
    // no history entry here: releasing the pointer records the state before the insert
    this.change((_, floor) => insertCorner(floor, room.id, edge, middle), base, false);
    this.sel.corner = edge + 1;
    return { kind: "vertex", roomId: room.id, index: edge + 1, base, moved: true };
  }

  /** The "+" on an edge of an outdoor area: a corner appears there and is dragged on. */
  private splitOutdoorEdgeGesture(id: string, edgeText: string): Drag | undefined {
    const edge = Number(edgeText);
    const base = this._doc;
    const area = this.floorOf({ base })?.outdoor.find((o) => o.id === id);
    if (!area) return undefined;
    const [a, b] = [area.points[edge], area.points[(edge + 1) % area.points.length]];
    this.change((_, floor) => insertOutdoorCorner(floor.outdoor.find((o) => o.id === id)!, edge, [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]), base, false);
    return { kind: "outvertex", id, index: edge + 1, base, moved: true };
  }

  /** The "+" on an edge of a flat roof: a corner appears there (a rectangle becomes a free shape) and is dragged on. */
  private splitRoofEdgeGesture(id: string, edgeText: string): Drag {
    const edge = Number(edgeText);
    const base = this._doc;
    this.change((doc) => {
      const section = doc.settings.roof.sections?.find((s) => s.id === id);
      if (!section) return;
      const ring = roofOutline(section);
      const [a, b] = [ring[edge], ring[(edge + 1) % ring.length]];
      insertRoofCorner(section, edge, [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]);
    }, base, false);
    return { kind: "roofvertex", id, index: edge + 1, base, moved: true };
  }

  /** What is left: a room (selected, and moved unless furnishing), or nothing, which pans. */
  private pressRoom(press: Press): Gesture {
    const roomId = press.target.closest("[data-room]")?.getAttribute("data-room") ?? this.roomAt(press.world);
    if (!roomId) {
      this.selectItem("room", null);
      return this.pan(press);
    }
    if (roomId !== this.sel.room) this.sel.corner = null;
    this.selectItem("room", roomId);
    if (!this.isAdmin || this._tool === "furniture") return this.pan(press);
    return { kind: "room", roomId, start: press.world, startScreen: press.local, base: this._doc, moved: false };
  }

  private onPointerMove(e: PointerEvent): void {
    const local = this.localPoint(e);
    if (this.pressStart) {
      if (hasLeftStart(local, this.pressStart, 8)) {
        clearTimeout(this.pressTimer);
        this.pressStart = null;
        if (this.fixedPan) this._fixedHint = true;
      }
    } else if (this.fixedPan && !this._fixedHint && this.drag?.kind === "pan") this._fixedHint = true;
    if (this.pointers.has(e.pointerId)) this.pointers.set(e.pointerId, local);
    if (this.pinch) {
      this.pinchMove();
      return;
    }
    const world = this.toWorld(...local);
    const drag = this.drag;
    if (!drag) {
      if (this._tool !== "select" && this._tool !== "furniture" && this.floor) this._cursor = this.snap(world, undefined, e.altKey);
      return;
    }
    this.moveDrag(drag, { local, world, fine: e.altKey, straight: e.shiftKey });
  }

  /** Two fingers: the distance between them zooms, and their middle pans. */
  private pinchMove(): void {
    const now = this.pinchState();
    if (!now || !this.pinch) return;
    this.zoomAt(now.dist / Math.max(1, this.pinch.dist), ...now.mid);
    this._view = { ...this._view, ox: this._view.ox + now.mid[0] - this.pinch.mid[0], oy: this._view.oy + now.mid[1] - this.pinch.mid[1] };
    this.pinch = now;
  }

  private panBy(from: [number, number], to: [number, number]): void {
    this._view = { ...this._view, ox: this._view.ox + to[0] - from[0], oy: this._view.oy + to[1] - from[1] };
  }

  /** Writes a change made while dragging: not recorded in the history until the pointer is released. */
  private live(drag: { base: Building }, mutate: (doc: Building, floor: Floor) => void): void {
    this.change(mutate, drag.base, false);
  }

  /** The floor as it was when the drag started. */
  private floorOf(drag: { base: Building }): Floor | undefined {
    return drag.base.floors.find((f) => f.id === this._floorId);
  }

  /** What the pointer has done in this move, with the modifier keys. */
  private moveDrag(drag: Drag, at: { local: [number, number]; world: Vec2; fine: boolean; straight: boolean }): void {
    const { local, world, fine } = at;
    const grid = this._doc.settings.grid;
    // a press only becomes a drag after the pointer has left the spot
    const started = (d: { moved: boolean; startScreen: [number, number] }) => d.moved || hasLeftStart(local, d.startScreen);
    switch (drag.kind) {
      case "pan":
        this.panBy(drag.last, local);
        drag.last = local;
        return;
      case "tap":
        if (drag.panning || hasLeftStart(local, drag.startScreen, 6)) {
          drag.panning = true;
          this.panBy(drag.last, local);
        }
        drag.last = local;
        return;
      case "rect":
        drag.end = this.snap(world, undefined, fine);
        this.requestUpdate();
        return;
      case "freewall":
        drag.end = straightEnd(drag.start, this.snap(world, undefined, fine), at.straight);
        this.requestUpdate();
        return;
      case "wallmove": {
        if (!started(drag)) return;
        drag.moved = true;
        const wall = (this.floorOf(drag)?.walls ?? []).find((w) => w.id === drag.id);
        if (!wall) return;
        let next: Pick<FreeWall, "a" | "b">;
        if (drag.end) {
          const to = this.snap(world, undefined, fine);
          next = drag.end === "a" ? { a: to, b: wall.b } : { a: wall.a, b: to };
        } else {
          const by = steppedDelta(drag.start, world, dragStep(grid, fine));
          next = { a: shifted(wall.a, by), b: shifted(wall.b, by) };
        }
        this.live(drag, (_, floor) => Object.assign((floor.walls ?? []).find((w) => w.id === drag.id)!, next));
        return;
      }
      case "vertex": {
        const to = this.snap(world, { roomId: drag.roomId, index: drag.index }, fine);
        drag.moved = true;
        this.live(drag, (_, floor) => void (floor.rooms.find((r) => r.id === drag.roomId)!.points[drag.index] = to));
        return;
      }
      case "room": {
        if (!started(drag)) return;
        drag.moved = true;
        const before = this.floorOf(drag);
        const room = before?.rooms.find((r) => r.id === drag.roomId);
        if (!before || !room) return;
        const delta = this.roomDelta(room, [world[0] - drag.start[0], world[1] - drag.start[1]], fine);
        // devices inside the room move with it
        const inside = new Set(before.placements.filter((p) => pointInPolygon([p.x, p.z], room.points)).map((p) => p.entity_id));
        this.live(drag, (_, floor) => {
          floor.rooms.find((r) => r.id === drag.roomId)!.points = room.points.map((p) => shifted(p, delta));
          floor.placements = before.placements.map((p) => {
            if (!inside.has(p.entity_id)) return p;
            const [x, z] = shifted([p.x, p.z], delta);
            return { ...p, x, z };
          });
        });
        return;
      }
      case "opening": {
        if (!started(drag)) return;
        drag.moved = true;
        const before = this.floorOf(drag);
        const opening = before?.openings.find((o) => o.id === drag.id);
        const host = opening && before ? openingHost(opening, before.rooms, before.walls ?? []) : null;
        if (!opening || !host) return;
        const group = before ? frontOf(before.openings, opening) : [opening];
        const extent = !opening.wall && group.length > 1 && before ? frontExtent(host.room, group) : null;
        if (extent) {
          // the pane slides along the outline as a whole and keeps its length
          const step = fine ? 0.01 : this._doc.settings.grid;
          const at = arcOfNearest(host.room, world) - extent.width / 2;
          const snapped = step > 0 ? Math.round(at / step) * step : at;
          const from = Math.max(0, Math.min(outlineLength(host.room) - extent.width, snapped));
          this.live(drag, (_, floor) => {
            const o = floor.openings.find((x) => x.id === drag.id);
            const next = o ? withFront(floor.openings, host.room, o, from, extent.width, () => uid("opening")) : null;
            if (next) floor.openings = next;
          });
          return;
        }
        const offset = this.dropOffset(host.room, host.edge, world, opening.width, fine);
        this.live(drag, (_, floor) => void (floor.openings.find((o) => o.id === drag.id)!.offset = offset));
        return;
      }
      case "furniture": {
        if (!started(drag)) return;
        drag.moved = true;
        const item = this.floorOf(drag)?.furniture.find((f) => f.id === drag.id);
        if (!item) return;
        const [x, z] = gridPositionAfter([item.x, item.z], drag.start, world, dragStep(grid, fine));
        // near a wall the piece turns its back (or a side) to it and sits flush; Alt moves freely
        const flush = fine ? null : this.snapToWall({ ...item, x, z });
        const place = flush ?? { x, z, rotation: item.rotation };
        this.live(drag, (_, floor) => void Object.assign(floor.furniture.find((f) => f.id === drag.id)!, place));
        return;
      }
      case "resize": {
        drag.moved = true;
        const item = this.floorOf(drag)?.furniture.find((f) => f.id === drag.id);
        if (!item) return;
        const size = resizeFurniture(item, drag.corner, world, dragStep(grid, fine));
        this.live(drag, (_, floor) => void Object.assign(floor.furniture.find((f) => f.id === drag.id)!, size));
        return;
      }
      case "rotate": {
        drag.moved = true;
        const item = this.floorOf(drag)?.furniture.find((f) => f.id === drag.id);
        if (!item) return;
        const rotation = facingAngle([item.x, item.z], world, fine ? 1 : 15);
        this.live(drag, (_, floor) => void (floor.furniture.find((f) => f.id === drag.id)!.rotation = rotation));
        return;
      }
      case "aim": {
        drag.moved = true;
        const placed = this.floorOf(drag)?.placements.find((p) => p.entity_id === drag.entityId);
        if (!placed) return;
        // the handle turns the device the way its plugin wedge (a camera's view) points
        const turn = { rotation: facingAngle([placed.x, placed.z], world, fine ? 1 : 5) };
        this.live(drag, (_, floor) => void Object.assign(floor.placements.find((p) => p.entity_id === drag.entityId)!, turn));
        return;
      }
      case "device": {
        if (!started(drag)) return;
        drag.moved = true;
        const placed = this.floorOf(drag)?.placements.find((p) => p.entity_id === drag.entityId);
        if (!placed) return;
        const [x, z] = gridPositionAfter([placed.x, placed.z], drag.start, world, dragStep(grid, fine));
        this.live(drag, (_, floor) => void Object.assign(floor.placements.find((p) => p.entity_id === drag.entityId)!, { x, z }));
        return;
      }
      case "outdoor": {
        if (!started(drag)) return;
        drag.moved = true;
        const area = this.floorOf(drag)?.outdoor.find((o) => o.id === drag.id);
        if (!area) return;
        const by = steppedDelta(drag.start, world, dragStep(grid, fine));
        this.live(drag, (_, floor) => void (floor.outdoor.find((o) => o.id === drag.id)!.points = area.points.map((p) => shifted(p, by))));
        return;
      }
      case "outvertex": {
        drag.moved = true;
        const to = this.snap(world, undefined, fine);
        const area = this.floorOf(drag)?.outdoor.find((o) => o.id === drag.id);
        if (!area) return;
        this.live(drag, (_, floor) => {
          const target = floor.outdoor.find((o) => o.id === drag.id);
          if (target) target.points = outlineWithCornerAt(area.points, drag.index, to);
        });
        return;
      }
      case "bgmove":
        drag.moved = true;
        this.live(drag, (_, floor) => {
          if (floor.background) [floor.background.x, floor.background.z] = shifted([drag.bx, drag.bz], [world[0] - drag.start[0], world[1] - drag.start[1]]);
        });
        return;
      case "bgrotate": {
        drag.moved = true;
        const background = this.floor?.background;
        const picture = background ? this.bg.picture(background.image_id) : undefined;
        if (!background || !picture) return;
        const c = pictureCentre(background, picture.aspect);
        // turned about its middle; Shift snaps to whole 15° steps, otherwise tenths of a degree
        const rotation = dragRotation(drag.rot, drag.start, Math.atan2(world[1] - c[1], world[0] - c[0]), at.straight);
        this.live(drag, (_, floor) => void (floor.background && (floor.background.rotation = rotation)));
        return;
      }
      case "bgscale": {
        drag.moved = true;
        const background = this.floor?.background;
        const picture = background ? this.bg.picture(background.image_id) : undefined;
        if (!background || !picture) return;
        // the corner follows the pointer along the picture's own width, whatever its turn
        const width = Math.max(0.5, round(pictureLocal(background, picture.aspect, world)[0]));
        this.live(drag, (_, floor) => void (floor.background && (floor.background.width = width)));
        return;
      }
      default:
        this.moveRoofDrag(drag, at);
    }
  }

  /** The drags of the roof and energy tools: sections, their corners and points, solar fields, and roof windows. */
  private moveRoofDrag(drag: Drag, at: { local: [number, number]; world: Vec2; fine: boolean }): void {
    const { local, world, fine } = at;
    const grid = this._doc.settings.grid;
    switch (drag.kind) {
      case "roofmove": {
        if (!drag.moved && !hasLeftStart(local, drag.startScreen)) return;
        drag.moved = true;
        const by = steppedDelta(drag.start, world, dragStep(grid, fine));
        const before = drag.base.settings.roof.sections?.find((s) => s.id === drag.id);
        if (!before) return;
        this.live(drag, (doc) => {
          const section = doc.settings.roof.sections?.find((s) => s.id === drag.id);
          if (!section) return;
          const [x0, z0] = shifted([before.x0, before.z0], by);
          const [x1, z1] = shifted([before.x1, before.z1], by);
          Object.assign(section, { x0, x1, z0, z1 });
          if (before.points) section.points = before.points.map((p) => shifted(p, by));
        });
        return;
      }
      case "roofvertex": {
        drag.moved = true;
        const to = this.snap(world, undefined, fine);
        this.live(drag, (doc) => {
          const section = doc.settings.roof.sections?.find((s) => s.id === drag.id);
          if (!section?.points || drag.index >= section.points.length) return;
          section.points[drag.index] = shifted(to, [0, 0]);
          Object.assign(section, polygonBox(section.points));
        });
        return;
      }
      case "roofcorner": {
        drag.moved = true;
        const to = this.snap(world, undefined, fine);
        this.live(drag, (doc) => {
          const section = doc.settings.roof.sections?.find((s) => s.id === drag.id);
          if (!section) return;
          section[drag.corner[0] ? "x1" : "x0"] = round(to[0]);
          section[drag.corner[1] ? "z1" : "z0"] = round(to[1]);
        });
        return;
      }
      case "solarturn": {
        drag.moved = true;
        const before = drag.base.settings.roof.solar?.find((f) => f.id === drag.id);
        const face = before ? fieldFace(drag.base, before) : null;
        if (!before || !face) return;
        // the handle sits in front of the field: turn its front towards the pointer
        const turned = turnGroundField(drag.base, before, headingAngle(fieldCenter(face, before), world, fine ? 1 : 15));
        this.live(drag, (doc) => {
          const field = doc.settings.roof.solar?.find((f) => f.id === drag.id);
          if (field) Object.assign(field, turned);
        });
        return;
      }
      case "solarmove":
        this.moveSolar(drag, at);
        return;
      default:
        return;
    }
  }

  /** Dragging a solar field or roof window: it follows the pointer onto another face, or along its own, and never slides off. */
  private moveSolar(drag: Extract<Drag, { kind: "solarmove" }>, at: { local: [number, number]; world: Vec2; fine: boolean }): void {
    const { local, world, fine } = at;
    if (!drag.moved && !hasLeftStart(local, drag.startScreen)) return;
    drag.moved = true;
    const before = this.fittingField(drag.base, drag.id, drag.win ? "win" : drag.chimney ? "chimney" : "field");
    // roof faces, and for fields also the walls of the floor the plan shows
    const faces = drag.win || drag.chimney ? roofFaces(drag.base) : [...roofFaces(drag.base), ...(this._floorId ? wallFaces(drag.base, this._floorId) : [])];
    const own = before ? fieldFace(drag.base, before, faces) : null;
    if (!before || !own) return;
    const step = fine ? 0.01 : 0.05;
    const onStep = (v: number) => round(Math.round(v / step) * step);
    const over = own.unbounded ? null : faceAt(faces, world);
    let face = own;
    let u: number;
    let v: number;
    if (over && drag.grab) {
      // over a face the field follows the pointer there, and may change to that face
      face = over.face;
      u = onStep(over.u - drag.grab.du);
      // on a wall the height stays, or starts at head height when the field comes from elsewhere
      v = Number.isNaN(over.s) ? (over.face.key === before.face ? before.v : Math.max(0, over.face.ls - 1.5)) : onStep(over.s - drag.grab.ds);
    } else {
      // elsewhere it moves along its own face; a slope looks shorter in the plan
      const [dx, dz] = [world[0] - drag.start[0], world[1] - drag.start[1]];
      const slope = [own.es[0], own.es[2]];
      u = onStep(before.u + dx * own.eu[0] + dz * own.eu[2]);
      v = onStep(before.v + (dx * slope[0] + dz * slope[1]) / (slope[0] * slope[0] + slope[1] * slope[1] || 1));
    }
    const kept = clampField(face, { ...before, face: face.key, u, v, tilt: face.flat ? (before.tilt ?? 15) : before.tilt });
    this.live(drag, (doc) => {
      if (drag.win || drag.chimney) {
        const w = drag.win ? doc.settings.roof.windows?.find((x) => x.id === drag.id) : doc.settings.roof.chimneys?.find((x) => x.id === drag.id);
        if (w) Object.assign(w, { face: face.key, ...kept });
        return;
      }
      const f = doc.settings.roof.solar?.find((x) => x.id === drag.id);
      if (f) Object.assign(f, { face: face.key, ...kept }, face.flat && f.tilt == null ? { tilt: 15 } : {});
    });
  }

  private onPointerUp(e: PointerEvent): void {
    clearTimeout(this.pressTimer);
    this.pressStart = null;
    this.fixedPan = false;
    this.pointers.delete(e.pointerId);
    if (this.pinch) {
      if (this.pointers.size < 2) this.pinch = null;
      return;
    }
    const drag = this.drag;
    this.drag = null;
    if (!drag || e.type === "pointercancel") {
      if (drag && EDIT_DRAGS.has(drag.kind) && "moved" in drag && drag.moved && "base" in drag) this.restoreLive(drag.base);
      return;
    }
    const local = this.localPoint(e);
    switch (drag.kind) {
      case "freewall": {
        if (Math.hypot(drag.end[0] - drag.start[0], drag.end[1] - drag.start[1]) >= 0.2) this.addFreeWall(drag.start, drag.end);
        this._guides = {};
        break;
      }
      case "wallmove":
        if (drag.moved) this.pushHistory(drag.base);
        this._guides = {};
        break;
      case "rect": {
        const [x0, z0] = drag.start;
        const [x1, z1] = drag.end;
        if (Math.abs(x1 - x0) >= 0.2 && Math.abs(z1 - z0) >= 0.2) {
          const lo: Vec2 = [Math.min(x0, x1), Math.min(z0, z1)];
          const hi: Vec2 = [Math.max(x0, x1), Math.max(z0, z1)];
          const pts: Vec2[] = [lo, [hi[0], lo[1]], hi, [lo[0], hi[1]]];
          if (drag.outdoor) this.addOutdoor(pts);
          else if (drag.hole) this.addHole(lo, hi);
          else if (drag.stairs) this.addStairs(lo, hi);
          else if (drag.roof) this.roof.addSection(lo, hi);
          else this.addRoom(pts);
        }
        this._guides = {};
        break;
      }
      case "tap":
        if (drag.panning) break;
        // by measure, a tap only sets (or moves) the starting point; the walls are typed in
        if (this._tool === "measure") this._draft = [this.snap(this.toWorld(...local), undefined, e.altKey)];
        else this.addDraftPoint(this.snap(this.toWorld(...local), undefined, e.altKey), local);
        break;
      case "opening":
      case "furniture":
      case "rotate":
      case "aim":
      case "resize":
      case "outdoor":
      case "solarmove":
      case "solarturn":
      case "roofmove":
      case "roofcorner":
      case "roofvertex":
      case "bgmove":
      case "bgscale":
      case "bgrotate":
        if (drag.moved) this.pushHistory(drag.base);
        break;
      case "device":
        if (drag.moved) this.pushHistory(drag.base);
        // a tap on a device selects it (and the room it stands in)
        else this.selectItem("device", drag.entityId);
        break;
      case "vertex":
      case "room":
        // the drag already changed the document without history; record the state before the drag
        if (drag.moved) this.pushHistory(drag.base);
        this._guides = {};
        break;
      default:
        break;
    }
  }

  private onWheel(e: WheelEvent): void {
    e.preventDefault();
    const [sx, sy] = this.localPoint(e);
    this.zoomAt(Math.exp(-e.deltaY * (e.deltaMode === 1 ? 0.05 : 0.0015)), sx, sy);
  }

  private pinchState(): { dist: number; mid: [number, number] } | null {
    const pts = [...this.pointers.values()];
    if (pts.length < 2) return null;
    const [a, b] = pts;
    return { dist: Math.hypot(a[0] - b[0], a[1] - b[1]), mid: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2] };
  }

  private pushHistory(base: Building): void {
    this.history.record(base);
    this.syncHistoryButtons();
  }

  private restoreLive(base: Building): void {
    this._doc = base;
    this.dispatchEvent(new CustomEvent("building-changed", { detail: { building: base }, bubbles: true, composed: true }));
  }

  /** Movement of a whole room: grid steps, pulled onto nearby corners of other rooms. */
  private roomDelta(room: Room, raw: Vec2, free: boolean): Vec2 {
    if (free) return raw;
    const g = this._doc.settings.grid;
    let delta: Vec2 = [Math.round(raw[0] / g) * g, Math.round(raw[1] / g) * g];
    const thr = SNAP_PX / this._view.scale;
    let best = thr;
    this._guides = {};
    for (const other of this.floor?.rooms ?? []) {
      if (other.id === room.id) continue;
      for (const q of other.points) {
        for (const p of room.points) {
          const d = Math.hypot(p[0] + raw[0] - q[0], p[1] + raw[1] - q[1]);
          if (d < best) {
            best = d;
            delta = [q[0] - p[0], q[1] - p[1]];
            this._guides = { point: q };
          }
        }
      }
    }
    return delta;
  }

  private roomAt(p: Vec2): string | null {
    const rooms = this.floor?.rooms ?? [];
    // smallest room first so nested rooms stay reachable
    const hits = rooms.filter((r) => pointInPolygon(p, r.points)).sort((a, b) => polygonArea(a.points) - polygonArea(b.points));
    return hits[0]?.id ?? null;
  }

  private addDraftPoint(p: Vec2, screen: [number, number]): void {
    const draft = this._draft;
    if (draft.length >= 3) {
      const [fx, fy] = this.toScreen(draft[0]);
      if (Math.hypot(fx - screen[0], fy - screen[1]) < 14) {
        this.closeDraft();
        return;
      }
    }
    const last = draft[draft.length - 1];
    if (last && Math.hypot(last[0] - p[0], last[1] - p[1]) < 1e-6) return;
    this._draft = [...draft, p];
  }

  private closeDraft(): void {
    if (this._draft.length >= 3 && polygonArea(this._draft) > 0.05) this.addRoom(this._draft);
    this._draft = [];
    this._cursor = null;
    this._guides = {};
  }

  /** Adds a wall of the typed length in a direction (drawing by measure). */
  private measureStep(dir: Direction): void {
    const last = this._draft[this._draft.length - 1];
    if (!last || !(this._measureLen > 0)) return;
    const next = step(last, this._measureLen, dir);
    // arriving at the start closes the room
    const first = this._draft[0];
    if (this._draft.length >= 3 && Math.hypot(next[0] - first[0], next[1] - first[1]) < 0.01) {
      this.closeDraft();
      return;
    }
    this._draft = [...this._draft, next];
  }

  private rectBySize(): void {
    const start = this._draft[0] ?? [0, 0];
    const [w, d] = this._rectSize;
    if (!(w > 0.1 && d > 0.1)) return;
    this.addRoom([start, step(start, w, "right"), step(step(start, w, "right"), d, "down"), step(start, d, "down")]);
    this._draft = [];
  }

  private get freeWall(): FreeWall | undefined {
    return this.sel.wall ? (this.floor?.walls ?? []).find((w) => w.id === this.sel.wall) : undefined;
  }

  private updateFreeWall(patch: Partial<FreeWall>): void {
    const id = this.sel.wall;
    if (!id) return;
    this.change((_, floor) => Object.assign((floor.walls ?? []).find((w) => w.id === id)!, patch));
  }

  private deleteFreeWall(): void {
    const id = this.sel.wall;
    if (!id || !this.isAdmin || !this.confirmFixedDelete("wall", id)) return;
    this.change((_, floor) => {
      floor.walls = (floor.walls ?? []).filter((w) => w.id !== id);
      floor.openings = floor.openings.filter((o) => o.wall !== id);
    });
    this.sel.wall = null;
  }

  private get outdoorArea(): OutdoorArea | undefined {
    return this.sel.outdoor ? this.floor?.outdoor.find((o) => o.id === this.sel.outdoor) : undefined;
  }

  private updateOutdoor(patch: Partial<OutdoorArea>): void {
    const id = this.sel.outdoor;
    this.change((_, floor) => Object.assign(floor.outdoor.find((o) => o.id === id)!, patch));
  }

  private deleteOutdoor(): void {
    const id = this.sel.outdoor;
    if (!id || !this.isAdmin || !this.confirmFixedDelete("outdoor", id)) return;
    this.change((_, floor) => (floor.outdoor = floor.outdoor.filter((o) => o.id !== id)));
    this.sel.outdoor = null;
  }

  // ------------------------------------------------------------------ keyboard

  private readonly onKey = (e: KeyboardEvent) => {
    const path = e.composedPath();
    if (path.some((el) => el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement)) return;
    if (!this.isConnected || !this.offsetParent) return;
    if (e.key === "Escape" && this._pick) {
      e.preventDefault();
      this.cancelPick();
      return;
    }
    const mod = e.ctrlKey || e.metaKey;
    if (mod && e.key.toLowerCase() === "z") {
      e.preventDefault();
      if (e.shiftKey) this.redo();
      else this.undo();
    } else if (mod && e.key.toLowerCase() === "y") {
      e.preventDefault();
      this.redo();
    } else if (mod && e.key.toLowerCase() === "d") {
      e.preventDefault();
      this.duplicateRoom();
    } else if (e.key === "Delete" || (e.key === "Backspace" && (this._tool === "select" || this._tool === "furniture"))) {
      if (this.sel.device) this.deleteItem("device", this.sel.device);
      else if (this.sel.outdoor) this.deleteOutdoor();
      else if (this.sel.wall) this.deleteFreeWall();
      else if (this.sel.opening) this.deleteOpening();
      else if (this.sel.furniture) this.deleteFurniture();
      else if (this.sel.corner !== null) this.deleteVertex(this.sel.corner);
      else this.deleteRoom();
    } else if (e.key.toLowerCase() === "l" && !mod && this._tool === "roof" && this.roof.section && !this._doc.settings.lock_plan) {
      this.roof.patchSection({ locked: !this.roof.section.locked });
    } else if (e.key.toLowerCase() === "l" && !mod && (this.sel.furniture || this.sel.device)) {
      const target = this.sel.target!;
      this.toggleFixed(target.kind, target.id);
    } else if (Object.hasOwn(ARROWS, e.key) && !mod && (this._tool === "select" || this._tool === "furniture")) {
      // arrow keys nudge the selection: one grid step, Shift 10 cm, Alt 1 cm
      const step = e.altKey ? 0.01 : e.shiftKey ? 0.1 : this._doc.settings.grid;
      const [dx, dz] = ARROWS[e.key];
      if (this.nudgeSelection(dx * step, dz * step)) e.preventDefault();
    } else if (e.key.toLowerCase() === "r" && !mod && this.sel.furniture) {
      this.rotateFurniture(e.shiftKey ? -90 : 90);
    } else if (e.key === "Backspace" && this._tool === "polygon") {
      this._draft = this._draft.slice(0, -1);
    } else if (e.key === "Enter" && this._tool === "polygon") {
      this.closeDraft();
    } else if (e.key === "?" && !mod) {
      this._keys = !this._keys;
    } else if (e.key === "Escape") {
      if (this._keys) {
        this._keys = false;
        return;
      }
      if (this._ctx) {
        this._ctx = null;
        return;
      }
      if (this._draft.length) this._draft = [];
      else if (this._tool !== "select") this._tool = "select";
      else this.selectItem("room", null);
      this._cursor = null;
    }
  };

  // ------------------------------------------------------------------ actions

  private deleteFloor(): void {
    const floor = this.floor;
    if (!floor || !confirm(this.t("delete_floor_confirm", { name: floor.name }))) return;
    const next = structuredClone(this._doc);
    next.floors = next.floors.filter((f) => f.id !== floor.id);
    this.setDoc(next);
    this._floorId = next.floors[0]?.id ?? null;
    this.sel.room = null;
  }

  // ------------------------------------------------------------------ roof sections

  /** Where a plan point lies on a face; on a house wall only along it (s = NaN: the height stays). */
  private faceHit(face: RoofFace, p: Vec2): { u: number; s: number } | null {
    if (!face.wall) return pointOnFace(face, p);
    return { u: (p[0] - face.o[0]) * face.eu[0] + (p[1] - face.o[2]) * face.eu[2], s: Number.NaN };
  }

  /** Everything drawn in the plan, bottom to top. */
  private planLayers(floor: Floor | undefined, walls: Wall[] | null): ReturnType<typeof svg> {
    const ctx = this.canvasContext();
    const room = this.room;
    const showRoomHandles = !!room && this.isAdmin && this._tool === "select" && !this.sel.opening && !this.sel.furniture && !this.isFixedItem("room", room.id);
    const sketch = this.drag?.kind === "freewall" || this.drag?.kind === "rect" ? this.drag : null;
    return svg`${mapLayer(ctx, this._doc.settings)} ${backgroundLayer(ctx, this.bg, floor)} ${gridLayer(ctx, this._size)} ${floorBelowLayer(ctx)} ${walls ? wallsLayer(ctx, walls) : nothing}
      ${floor ? svg`${outdoorLayer(ctx, floor, this.sel.outdoor)} ${roomsLayer(ctx, floor, this.sel.room, this.sel.edge)} ${furnitureLayer(ctx, floor, this.sel.furniture)}
        ${freeWallsLayer(ctx, floor, this.sel.wall)} ${walls ? openingsLayer(ctx, floor, walls, this.sel.opening) : nothing} ${meterLayer(ctx, floor)}
        ${this._tool === "select" ? devicesLayer(ctx, floor, this.sel.device) : nothing}
        ${this._tool === "select" ? notesLayer(ctx, floor, this._note) : nothing}
        ${this._dims ? dimensionsLayer(ctx, floor) : nothing}
        ${showRoomHandles ? roomHandlesLayer(ctx, room, this.sel.corner) : nothing}
        ${outdoorHandlesLayer(ctx, this.outdoorArea, this._tool)}
        ${room && this._tool === "select" ? cutMarksLayer(ctx, room) : nothing}
        ${headroomLayer(ctx, floor)}`
      : nothing}
      ${this._tool === "roof" ? svg`${roofSectionsLayer(ctx, this.roof)}${roofWindowsLayer(ctx, this.roof)}${chimneysLayer(ctx, this.roof)}` : this._tool === "energy" ? svg`${roofSectionsLayer(ctx, this.roof)}${solarLayer(ctx, this.roof)}${energyRoutesLayer(ctx, this.floor, this._doc.energy.routes ?? [], this._routeDraft)}${energyMarkersLayer(ctx, this.floor, this.sel.furniture)}` : nothing}
      ${draftLayer(ctx, sketch, this._tool, this._draft, this._cursor)} ${guidesLayer(ctx, this._guides, this._size)}`;
  }

  private wallsOfFloor() {
    const floor = this.floor;
    const { wall_exterior, wall_interior } = this._doc.settings;
    return floor ? generateWalls(floor.rooms, { exterior: wall_exterior, interior: wall_interior }, floor.walls ?? []).walls : [];
  }

  /** Where the parts of a wall begin: another room can split it into several. */
  private edgeParts(room: Room, edge: number): number[] {
    const starts = this.wallsOfFloor().flatMap((w) => w.sources.filter((s) => s.room_id === room.id && s.edge === edge).map((s) => s.t0));
    return starts.length > 0 ? [...new Set(starts)].sort((a, b) => a - b) : [0];
  }

  private changeRoom(room: Room, edit: (target: Room) => void): void {
    if (!this.isAdmin) return;
    this.change((_, floor) => {
      const target = floor.rooms.find((r) => r.id === room.id);
      if (target) edit(target);
    });
  }

  private edgeActions(): EdgeActions {
    return {
      openWall: (room, edge) => (this._wallView = { roomId: room.id, edge }),
      partsOf: (room, edge) => this.edgeParts(room, edge),
      isOuter: (room, edge) => this.wallsOfFloor().some((w) => w.exterior && w.sources.some((s) => s.room_id === room.id && s.edge === edge)),
      setHeight: (room, edge, part, height) => {
        if (part !== undefined) {
          const parts = this.edgeParts(room, edge).length;
          this.changeRoom(room, (r) => setPartHeight(r, edge, part, height, parts));
          return;
        }
        // a whole wall: every wall piece shared with it follows
        const shared = this.wallsOfFloor().filter((w) => w.sources.some((s) => s.room_id === room.id && s.edge === edge)).flatMap((w) => w.sources);
        if (!shared.some((s) => s.room_id === room.id && s.edge === edge)) shared.push({ room_id: room.id, edge, t0: 0, t1: 0 });
        if (!this.isAdmin) return;
        this.change((_, floor) => {
          for (const source of shared) {
            const r = floor.rooms.find((x) => x.id === source.room_id);
            if (r) setWallHeight(r, source.edge, height);
          }
        });
      },
      setSlope: (room, edge, start, end) => this.changeRoom(room, (r) => setWallSlope(r, edge, start, end)),
      clearSlope: (room, edge) => this.changeRoom(room, (r) => clearWallSlope(r, edge, this.floor?.height ?? 2.5)),
      setThickness: (room, edge, thickness, part, count) => this.changeRoom(room, (r) => setWallThickness(r, edge, thickness, part, count)),
      arc: this.arcActions(),
      cut: (room, edge, part) => {
        const starts = this.edgeParts(room, edge);
        this.changeRoom(room, (r) => cutEdge(r, edge, part, starts));
      },
      moveCut: (room, edge, from, to) => {
        const starts = this.edgeParts(room, edge);
        this.changeRoom(room, (r) => moveCut(r, edge, from, to, starts));
      },
      join: (room, edge, at, part) => this.changeRoom(room, (r) => joinAtCut(r, edge, at, part)),
      lit: this.sel.edge,
      light: (edge) => (this.sel.edge = edge),
    };
  }

  // ------------------------------------------------------------------ floors and rooms

  private addFloor(from: HassFloor | null = null): void {
    const floor = newFloorFor(this._doc, from, { first: this.t("default_floor"), next: (n) => this.t("new_floor", { n }) });
    const next = structuredClone(this._doc);
    next.floors = floorsWith(next.floors, floor);
    this.setDoc(next);
    this._floorId = floor.id;
    this.sel.room = null;
    this.side.floorMenu = false;
    this.fit();
  }

  /** One room tile per area of the floor's Home Assistant floor that has no room yet, to drag into place. */
  private addAreaRooms(floor: Floor): void {
    const areas = unplacedAreas(this._doc, floor, this.hass?.areas);
    if (areas.length === 0) return;
    const tiles = roomTiles(floor, areas, () => uid("room"));
    this.change((_, f) => f.rooms.push(...tiles));
    this.fit();
  }

  /** A copy of the open floor on top of the house; the copy opens. */
  private duplicateFloor(options: FloorCopyOptions): void {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return;
    const copy = copyOfFloor(this._doc, floor, this.t("floor_copy_name", { name: floor.name }), options);
    const next = structuredClone(this._doc);
    next.floors = floorsWith(next.floors, copy);
    this.setDoc(next);
    this._floorId = copy.id;
    this.sel.room = null;
    this.side.floorCopy = null;
    this.fit();
  }

  private moveFloor(direction: -1 | 1): void {
    const id = this._floorId;
    if (!id) return;
    const order = floorsSwapped(this._doc.floors, id, direction);
    if (order.every((f, i) => f.id === this._doc.floors[i].id)) return;
    const next = structuredClone(this._doc);
    next.floors = order.map((f) => next.floors.find((x) => x.id === f.id)!);
    this.setDoc(next);
  }

  private floorActions(): FloorActions {
    return {
      openFloor: (id) => {
        this._floorId = id;
        this.sel.room = null;
        this.sel.corner = null;
        this._draft = [];
        this.fit();
      },
      print: () => this.printPlan(),
      exportImage: (choice, all) => void this.exportPlanImages(choice, all),
      addFloor: (from) => this.addFloor(from),
      moveFloor: (direction) => this.moveFloor(direction),
      deleteFloor: () => this.deleteFloor(),
      duplicateFloor: (options) => this.duplicateFloor(options),
      addAreaRooms: (floor) => this.addAreaRooms(floor),
      closeGaps: () => this.closeFloorGaps(),
      shift: () => this.shiftFloor(this.side.shiftX, this.side.shiftZ),
      turn: () => this.turnFloor(),
      rememberView: () => this.rememberFloorView(),
    };
  }

  private roomActions(room: Room): RoomActions {
    return {
      select: (id) => this.selectItem("room", id),
      patch: (patch) => this.updateRoom(patch),
      setArea: (id) => this.setArea(id),
      setRect: (field, value) => this.setRect(field, value),
      setCorner: (index, axis, value) => this.setPoint(index, axis, value),
      removeCorner: (index) => this.deleteVertex(index),
      duplicate: () => this.duplicateRoom(),
      remove: () => this.deleteRoom(),
      rememberView: () => this.rememberRoomView(),
      applyPackage: (pkg) => this.applyPackage(room, pkg),
      openSpots: () => {
        const lights = this.hass ? roomEntities(this.hass, room).filter((id) => id.startsWith("light.")) : [];
        this.side.spots = suggestedSpots(room, lights);
      },
      placeSpots: () => this.placeSpots(room),
      lockButton: this.fixButton("room", room.id),
      wallHeights: renderEdgeHeights(this.host, room, this.edgeActions()),
      climate: renderRoomClimate(this.host, room, (patch) => this.updateRoom(patch)),
      corner: this.sel.corner,
    };
  }

  /** Adds the furniture of a room package. Lamps link to the lights of the room by themselves. */
  private applyPackage(room: Room, pkg: PackageId): void {
    if (!this.isAdmin) return;
    const items = furnishRoom(room, pkg, () => uid("furniture"));
    this.change((_, floor) => floor.furniture.push(...items));
    this.side.packages = false;
    this.side.notice = this.t("pkg_done", { n: items.length });
  }

  private placeSpots(room: Room): void {
    const draft = this.side.spots;
    if (!draft || !this.isAdmin) return;
    const items = spotItems(room, draft);
    this.change((_, floor) => floor.furniture.push(...items));
    this.side.spots = null;
    this.side.notice = this.t("spots_placed", { n: items.length });
  }

  // ------------------------------------------------------------------ editing the plan

  /** The plan point in the middle of what is on screen. */
  private viewCentre(): Vec2 {
    return this.toWorld(this._size.w / 2, this._size.h / 2);
  }

  /** Adds a free-standing wall between two plan points and selects it. */
  private addFreeWall(a: Vec2, b: Vec2): void {
    if (!this.floor) return;
    const wall = newFreeWall(a, b);
    this.change((_, floor) => (floor.walls = [...(floor.walls ?? []), wall]));
    this.selectItem("wall", wall.id);
  }

  /** A hole in the floor of this level, drawn as a rectangle. */
  private addHole(lo: Vec2, hi: Vec2): void {
    if (!this.floor) return;
    const hole = newFloorOpening(lo, hi);
    this.change((_, floor) => floor.furniture.push(hole));
    this.selectItem("furniture", hole.id);
    this._tool = "select";
  }

  /** A shaped stair filling the dragged rectangle, running along its long side; its form opens to pick the shape. */
  private addStairs(lo: Vec2, hi: Vec2): void {
    const floor = this.floor;
    if (!floor) return;
    const [width, depth] = [hi[0] - lo[0], hi[1] - lo[1]];
    const item = newFurniture("stairs", this._doc, floor, [(lo[0] + hi[0]) / 2, (lo[1] + hi[1]) / 2]);
    const across = width > depth * 1.2;
    Object.assign(item, { w: Math.round((across ? depth : width) * 1000) / 1000, d: Math.round((across ? width : depth) * 1000) / 1000, rotation: across ? 90 : 0 });
    this.change((_, f) => f.furniture.push(item));
    this.selectItem("furniture", item.id);
    this._tool = "select";
  }

  private addOutdoor(points: Vec2[]): void {
    if (!this.floor) return;
    const area = newOutdoorArea(points);
    this.change((_, floor) => floor.outdoor.push(area));
    this.selectItem("outdoor", area.id);
    this._tool = "select";
  }

  private duplicateOutdoor(): void {
    const original = this.outdoorArea;
    if (!original || !this.isAdmin) return;
    const copy = copyOfOutdoorArea(original);
    this.change((_, floor) => floor.outdoor.push(copy));
    this.selectItem("outdoor", copy.id);
  }

  private addRoom(points: Vec2[]): void {
    if (!this.floor) return;
    const room = newRoom(points, this.t("new_room", { n: this.floor.rooms.length + 1 }));
    this.change((_, floor) => floor.rooms.push(room));
    this.sel.room = room.id;
    this.sel.corner = null;
    this._tool = "select";
  }

  private deleteRoom(): void {
    const id = this.sel.room;
    if (!id || !this.isAdmin || !this.confirmFixedDelete("room", id)) return;
    this.change((_, floor) => removeRoom(floor, id));
    this.sel.room = null;
    this.sel.corner = null;
  }

  private duplicateRoom(): void {
    const original = this.room;
    if (!original || !this.isAdmin) return;
    const copy = copyOfRoom(original);
    this.change((_, floor) => floor.rooms.push(copy));
    this.sel.room = copy.id;
  }

  private deleteVertex(index: number): void {
    const room = this.room;
    if (!room) return;
    this.change((_, floor) => removeCorner(floor, room.id, index));
    this.sel.corner = null;
  }

  /** Moves the selected item by (dx, dz) metres. False when nothing movable is selected, so the key keeps its normal job. */
  private nudgeSelection(dx: number, dz: number): boolean {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return false;
    const target = this.sel.target;
    if (target && this.isFixedItem(target.kind, target.id)) {
      this._fixedHint = true;
      return true;
    }
    const nudgeTarget: NudgeTarget | null = !target ? null : target.kind === "room" ? { kind: "room", id: target.id, corner: this.sel.corner } : { kind: target.kind, id: target.id };
    const result = nudgeTarget ? nudge(floor, nudgeTarget, dx, dz) : NOTHING_TO_MOVE;
    if (result === NOTHING_TO_MOVE) return false;
    if (result !== NO_CHANGE) this.change((_, f) => result.apply(f));
    return true;
  }

  private addFurniture(type: string): void {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return;
    const room = this.room;
    const item = newFurniture(type, this._doc, floor, room ? centroid(room.points) : this.viewCentre());
    this.change((_, f) => f.furniture.push(item));
    this.selectItem("furniture", item.id);
    // small things are easy to lose in a large plan: bring the new one into view
    this.showPoint(item.x, item.z);
  }

  private rotateFurniture(delta: number): void {
    const item = this.furnitureItem;
    if (item && this.isAdmin) this.updateFurniture({ rotation: turnedBy(item.rotation, delta) });
  }

  /** A task for the selected piece: a note on its spot and height, repeating yearly, ready for its text (#113). */
  private addTaskToFurniture(): void {
    const item = this.furnitureItem;
    if (!item || !this.isAdmin) return;
    const id = uid("note");
    const y = Math.max(0.3, Math.min(20, Math.round((item.h ?? 1) * 100) / 100));
    const text = (item.name ?? "").trim();
    this.change((_, floor) => (floor.notes = [...(floor.notes ?? []), { id, x: Math.round(item.x * 100) / 100, z: Math.round(item.z * 100) / 100, y, text: text ? `${text}: ` : "", repeat_months: 12 }]));
    this.selectItem("furniture", null);
    this._note = id;
    this._sideOpen = true;
  }

  private duplicateFurniture(): void {
    const item = this.furnitureItem;
    if (!item || !this.isAdmin) return;
    const copy = copyOfFurniture(item);
    this.change((_, floor) => floor.furniture.push(copy));
    this.selectItem("furniture", copy.id);
  }

  /** A vehicle placed as plain furniture becomes a parking spot holding it. */
  private vehicleToSpot(vehicle: Furniture): void {
    if (!this.isAdmin) return;
    const spot = parkingSpotFor(vehicle);
    this.change((_, floor) => {
      floor.furniture = floor.furniture.filter((m) => m.id !== vehicle.id);
      floor.furniture.push(spot);
    });
    this.selectItem("furniture", spot.id);
  }

  /** Replaces a placed device by a piece of furniture linked to it, where its pin stood, as one undo step. */
  private deviceToFurniture(placed: Placement, type: string): void {
    if (!this.isAdmin) return;
    const item = furnitureForDevice(placed, type);
    this.change((_, floor) => {
      floor.placements = floor.placements.filter((p) => p.entity_id !== placed.entity_id);
      floor.furniture.push(item);
    });
    this.sel.device = null;
    this.selectItem("furniture", item.id);
  }

  /** Turns a piece of furniture linked by hand back into a plain device pin at its place. */
  private furnitureToDevice(item: Furniture): void {
    const entityId = item.entity;
    if (!this.isAdmin || !entityId || entityId === "none") return;
    const pin = deviceForFurniture(item, entityId);
    this.change((_, floor) => {
      floor.furniture = floor.furniture.filter((m) => m.id !== item.id);
      if (!floor.placements.some((p) => p.entity_id === entityId)) floor.placements.push(pin);
    });
    this.sel.furniture = null;
    this.selectItem("device", entityId);
  }

  /** Places entities in the selected room. An entity placed elsewhere moves here. */
  private placeDevices(entityIds: string[]): void {
    const room = this.room;
    if (!room || entityIds.length === 0 || !this.isAdmin) return;
    this.change((doc, floor) => placeInRoom(doc, floor, room, entityIds));
  }

  private removeDevice(entityId: string): void {
    this.change((doc) => removeDevice(doc, entityId));
  }

  /** Moves the selected device to the middle of the room it is in. */
  private centreDevice(): void {
    const placed = this.device;
    const room = placed ? this.floor?.rooms.find((r) => r.id === this.roomAt([placed.x, placed.z])) : undefined;
    if (!placed || !room) return;
    const [x, z] = roomCentre(room);
    this.updateDevice({ x, z });
  }

  private spreadCeilingLights(room: Room): void {
    const floor = this.floor;
    if (!floor) return;
    const spots = evenCeilingLights(room, floor.placements);
    if (spots.length === 0) return;
    this.change((_, f) => {
      for (const spot of spots) Object.assign(f.placements.find((p) => p.entity_id === spot.entityId)!, { x: spot.x, z: spot.z });
    });
  }

  private shiftScope(): Scope {
    return { floorId: this._floorId, allFloors: this.side.shiftAll };
  }

  /** Moves everything on the floor (or on every floor) by the typed distance. */
  private shiftFloor(dx: number, dz: number): void {
    if (!this.isAdmin || (!dx && !dz)) return;
    this.change((doc) => moveScope(doc, this.shiftScope(), dx, dz));
    this.side.shiftX = 0;
    this.side.shiftZ = 0;
  }

  /** Turns the floor, or the whole house, a quarter clockwise: for a floor that was drawn the wrong way round. */
  private turnFloor(): void {
    if (!this.floor || !this.isAdmin) return;
    this.change((doc) => turnQuarterClockwise(doc, this.shiftScope()));
  }

  private setArea(areaId: string): void {
    const room = this.room;
    if (room) this.updateRoom(areaChoice(room, areaId, this.hass?.areas ?? {}));
  }

  private setRect(field: RectField, value: number): void {
    const room = this.room;
    const points = room ? rectangleAfter(room, field, value) : null;
    if (points) this.updateRoom({ points });
  }

  private setPoint(index: number, axis: 0 | 1, value: number): void {
    const room = this.room;
    const points = room ? cornerMoved(room, index, axis, value) : null;
    if (points) this.updateRoom({ points });
  }

  /** Turns an opening into another kind: door, double door, window, terrace door, garage door. */
  private setOpeningPreset(opening: Opening, preset: OpeningPreset): void {
    this._openingPreset = preset;
    this.updateOpening(openingKindPatch(opening, preset));
  }

  // ------------------------------------------------------------------ helpers the forms of this file still share

  // ------------------------------------------------------------------ helpers the forms of this file still share

  // ------------------------------------------------------------------ energy tool

  /** What the energy panel can make this editor do. */
  /** While a cable route is drawn in the energy tool, a tap on the plan adds a point on the floor shown. */
  private pressRoute(press: Press): Gesture | undefined {
    const draft = this._routeDraft;
    if (!draft || this._tool !== "energy" || !this._floorId || draft.points.length >= MAX_ROUTE_POINTS) return undefined;
    const [x, z] = this.snap(press.world, undefined, press.fine).map((v) => Math.round(v * 1000) / 1000);
    this._routeDraft = { ...draft, points: [...draft.points, { floor_id: this._floorId, x, z }] };
    return NO_GESTURE;
  }

  private routeActions(): RouteActions {
    const save = (change: (routes: EnergyRoute[]) => EnergyRoute[]) =>
      this.change((doc) => {
        doc.energy.routes = change(doc.energy.routes ?? []);
        if (!doc.energy.routes.length) delete doc.energy.routes;
      });
    return {
      draft: this._routeDraft,
      start: (key) => (this._routeDraft = { key, points: [...(this._doc.energy.routes?.find((r) => r.key === key)?.points ?? [])] }),
      undoPoint: () => this._routeDraft && (this._routeDraft = { ...this._routeDraft, points: this._routeDraft.points.slice(0, -1) }),
      cancel: () => (this._routeDraft = null),
      finish: () => {
        const draft = this._routeDraft;
        this._routeDraft = null;
        if (!draft || !this.isAdmin) return;
        save((routes) => {
          const old = routes.find((r) => r.key === draft.key);
          const rest = routes.filter((r) => r.key !== draft.key);
          return draft.points.length ? [...rest, { key: draft.key, points: draft.points, ...(old?.cable ? { cable: true } : {}) }] : rest;
        });
      },
      clear: (key) => this.isAdmin && save((routes) => routes.filter((r) => r.key !== key)),
      setCable: (key, cable) => this.isAdmin && save((routes) => routes.map((r) => (r.key === key ? { ...r, cable } : r))),
    };
  }

  private pipeActions(): PipeActions {
    return {
      add: () =>
        this.isAdmin &&
        this.change((doc) => {
          const pipes = doc.energy.pipes ?? [];
          doc.energy.pipes = [...pipes, { id: uid("pipe"), name: `${this.t("pipe")} ${pipes.length + 1}`, kind: pipes.length % 2 ? "return" : "supply", entity: null }];
        }),
      update: (id, patch) =>
        this.isAdmin &&
        this.change((doc) => {
          const pipe = doc.energy.pipes?.find((p) => p.id === id);
          if (pipe) Object.assign(pipe, patch);
        }),
      remove: (id) =>
        this.isAdmin &&
        this.change((doc) => {
          doc.energy.pipes = (doc.energy.pipes ?? []).filter((p) => p.id !== id);
          if (!doc.energy.pipes.length) delete doc.energy.pipes;
          doc.energy.routes = (doc.energy.routes ?? []).filter((r) => r.key !== pipeRouteKey(id));
          if (!doc.energy.routes.length) delete doc.energy.routes;
        }),
    };
  }

  private energyActions(): EnergyActions {
    return {
      follow: (target) => {
        if (target.kind === "solar-field") this.roof.solarId = target.id;
        else if (target.kind === "add-solar-field") this.roof.addField();
        else if (target.kind === "add-device") this.addEnergyDevice(target.type);
        else this.openEnergyDevice(target.floor, target.item);
      },
      addDevice: (type) => {
        this.roof.solarId = null;
        this.addEnergyDevice(type);
      },
      openDevice: (floor, item) => this.openEnergyDevice(floor, item),
      importPrefs: () => void this.importEnergy(),
      note: this._energyNote,
    };
  }

  private openEnergyDevice(floor: Floor, item: Furniture): void {
    this._floorId = floor.id;
    this.roof.solarId = null;
    this.selectItem("furniture", item.id);
    this.showPoint(item.x, item.z);
  }

  /** Adds an energy device on the selected floor where it belongs, and selects it. */
  private addEnergyDevice(type: string): void {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return;
    const areaOf = (room: Room) => (room.area_id && this.hass?.areas?.[room.area_id]?.name) || "";
    const item = newEnergyDevice(type, this._doc, floor, {
      roomLabel: (room) => `${room.name} ${areaOf(room)} ${room.area_id ?? ""}`,
      selected: this.room,
      fallback: this.toWorld(this._size.w / 2, this._size.h / 2),
    });
    this.change((_, f) => f.furniture.push(item));
    this.selectItem("furniture", item.id);
    this.showPoint(item.x, item.z);
  }

  private async importEnergy(): Promise<void> {
    if (!this.hass) return;
    const result = await importEnergyPrefs({
      hass: this.hass,
      doc: () => this._doc,
      canAdd: () => !!this.floor,
      addDevice: (type) => this.addEnergyDevice(type),
      setField: (id, key, sensor) =>
        this.change((doc) => {
          const item = doc.floors.flatMap((f) => f.furniture).find((m) => m.id === id);
          if (item) item[key] = sensor;
        }),
    });
    if (result.kind === "failed") {
      this._energyNote = this.t("energy_import_failed");
      return;
    }
    this.selectItem("furniture", null);
    this._energyNote = result.filled > 0 ? this.t("energy_import_done", { n: result.filled }) : this.t("energy_import_none");
  }

  /** Sidebar of the energy tool: the selected solar field, or the overview (fields, strings). */
  private renderEnergyPanel() {
    const field = this.roof.solarId ? this._doc.settings.roof.solar?.find((x) => x.id === this.roof.solarId) : undefined;
    if (field) return renderSolarForm(this.roofDeps(), field);
    const device = this.sel.furniture ? this.floor?.furniture.find((x) => x.id === this.sel.furniture && (ENERGY_DEVICES as readonly string[]).includes(x.type)) : undefined;
    if (device)
      return html`<button class="nf-btn nf-back" @click=${() => this.selectItem("furniture", null)}>‹ ${this.t("tool_energy")}</button>
        ${renderFurnitureForm(this.host, device, this.furnitureActions())}`;
    const actions = this.energyActions();
    return html`${renderEnergyChecklist(this.host, actions)}${renderSolarList(this.roofDeps())}${renderEnergyDevices(this.host, actions)}${renderEnergyRoutes(this.host, this.routeActions())}${renderPipes(this.host, this.pipeActions(), this.routeActions())}${renderEnergyBalance(this.host, actions)}${renderEnergyTeaser(this.host)}`;
  }

  /** The item of a fixable kind on a floor. */
  private fixItem(floor: Floor | undefined, kind: FixKind, id: string): object | undefined {
    if (!floor) return undefined;
    switch (kind) {
      case "room":
        return floor.rooms.find((r) => r.id === id);
      case "opening":
        return floor.openings.find((o) => o.id === id);
      case "furniture":
        return floor.furniture.find((m) => m.id === id);
      case "device":
        return floor.placements.find((p) => p.entity_id === id);
      case "wall":
        return (floor.walls ?? []).find((w) => w.id === id);
      case "outdoor":
        return floor.outdoor.find((a) => a.id === id);
    }
  }

  /** Fixed by itself, or (rooms, walls, doors, windows, outdoor areas) by the plan lock. */
  private isFixedItem(kind: FixKind, id: string): boolean {
    return isFixed(this.fixItem(this.floor, kind, id), kind !== "furniture" && kind !== "device", this._doc.settings);
  }

  private toggleFixed(kind: FixKind, id: string): void {
    // rooms, walls, doors, windows and outdoor areas follow the plan lock alone
    if (!this.isAdmin || (kind !== "furniture" && kind !== "device")) return;
    const next = !this.isFixedItem(kind, id);
    this.change((_, floor) => {
      const item = this.fixItem(floor, kind, id) as { locked?: boolean | null } | undefined;
      if (item) item.locked = next;
    });
  }

  private toggleLockPlan(): void {
    if (!this.isAdmin) return;
    this.change((doc) => (doc.settings.lock_plan = !doc.settings.lock_plan));
  }

  /** A fixed item is only deleted after asking. */
  private confirmFixedDelete(kind: FixKind, id: string): boolean {
    return !this.isFixedItem(kind, id) || confirm(this.t("fixed_delete_confirm"));
  }

  private onContextMenu(e: MouseEvent): void {
    e.preventDefault();
    if (this._tool !== "select" && this._tool !== "furniture") return;
    this.drag = null;
    this.openContext(e.target as Element, this.localPoint(e as PointerEvent));
  }

  /** Select the item under a plan point and open its menu. */
  private openContext(target: Element, local: [number, number]): void {
    if (!this.isAdmin || !this.floor) return;
    const world = this.toWorld(...local);
    const attr = (sel: string) => target.closest(`[${sel}]`)?.getAttribute(sel) ?? null;
    let hit: [FixKind, string] | null = null;
    const device = attr("data-device");
    const opening = attr("data-opening");
    const furniture = target.closest("[data-vertex], [data-mid]") ? null : attr("data-furniture");
    const wall = attr("data-free-wall");
    const outdoor = attr("data-outdoor");
    const room = attr("data-room") ?? this.roomAt(world);
    if (device) hit = ["device", device];
    else if (opening) hit = ["opening", opening];
    else if (furniture) hit = ["furniture", furniture];
    else if (wall) hit = ["wall", wall];
    else if (outdoor && !room) hit = ["outdoor", outdoor];
    else if (room) hit = ["room", room];
    if (!hit) {
      this._ctx = null;
      return;
    }
    const [kind, id] = hit;
    this.selectItem(kind, id);
    if (kind === "opening" || kind === "furniture") this.sel.room = this.sel.room ?? room;
    this._ctx = { x: local[0], y: local[1], kind, id, at: world };
  }

  private deleteItem(kind: FixKind, id: string): void {
    if (kind === "device") {
      if (!this.confirmFixedDelete(kind, id)) return;
      this.removeDevice(id);
      this.sel.device = null;
      return;
    }
    // the delete methods ask themselves for fixed items
    if (kind === "room") this.deleteRoom();
    else if (kind === "opening") this.deleteOpening();
    else if (kind === "furniture") this.deleteFurniture();
    else if (kind === "wall") this.deleteFreeWall();
    else this.deleteOutdoor();
  }

  private renderContext() {
    const c = this._ctx;
    if (!c) return nothing;
    const fixed = this.isFixedItem(c.kind, c.id);
    const wrap = this.renderRoot.querySelector(".nf-canvas-wrap") as HTMLElement | null;
    // keep the menu inside the plan
    const x = Math.max(4, Math.min(c.x, (wrap?.clientWidth ?? 800) - 190));
    const y = Math.max(4, Math.min(c.y, (wrap?.clientHeight ?? 600) - 190));
    const run = (fn: () => void) => () => {
      this._ctx = null;
      fn();
    };
    return html`<div class="nf-ctx" style=${`left:${x}px;top:${y}px`} @pointerdown=${(e: Event) => e.stopPropagation()} @contextmenu=${(e: Event) => e.preventDefault()}>
      ${c.kind === "furniture" || c.kind === "device"
        ? html`<button title=${this.t("fix_hint")} @click=${run(() => this.toggleFixed(c.kind, c.id))}>${fixed ? `🔓 ${this.t("unfix")}` : `🔒 ${this.t("fix")}`}</button>`
        : html`<button title=${this.t("lock_plan_hint")} @click=${run(() => this.toggleLockPlan())}>${this._doc.settings.lock_plan ? `🔓 ${this.t("plan_unlock")}` : `🔒 ${this.t("plan_lock")}`}</button>`}
      ${c.kind === "room" ? html`<button @click=${run(() => this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>` : nothing}
      ${c.kind === "furniture"
        ? html`<button @click=${run(() => this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${fixed} @click=${run(() => this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${fixed} @click=${run(() => this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>`
        : nothing}
      ${c.at ? html`<button @click=${run(() => this.addNote(c.at!))}>✎ ${this.t("note_add")}</button>` : nothing}
      <button class="nf-ctx-danger" @click=${run(() => this.deleteItem(c.kind, c.id))}>✕ ${this.t("delete")}</button>
    </div>`;
  }

  /** Lock button in the form of an item. */
  private fixButton(kind: FixKind, id: string) {
    if (!this.isAdmin) return nothing;
    if (kind !== "furniture" && kind !== "device") {
      // part of the floor plan: shows the plan lock, a click releases it
      return this._doc.settings.lock_plan
        ? html`<button class="nf-btn nf-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${() => this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`
        : nothing;
    }
    const fixed = this.isFixedItem(kind, id);
    return html`<button class="nf-btn nf-fix" aria-pressed=${fixed} title=${this.t("fix_hint")} @click=${() => this.toggleFixed(kind, id)}>
      ${fixed ? `🔒 ${this.t("unfix")}` : `🔓 ${this.t("fix")}`}
    </button>`;
  }

  /** Where along a room edge an opening of this width sits when it is dropped at `world`; `free` skips the grid. */
  private dropOffset(room: Room, edge: number, world: Vec2, width: number, free: boolean): number {
    const a = room.points[edge];
    const b = room.points[(edge + 1) % room.points.length];
    const length = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const along = ((world[0] - a[0]) * (b[0] - a[0]) + (world[1] - a[1]) * (b[1] - a[1])) / length;
    return offsetOnEdge(length, along, width, free ? 0.01 : this._doc.settings.grid);
  }

  /** Selects one item (or none of that kind) of the plan. */
  private selectItem(kind: ItemKind, id: string | null): void {
    this.side.notice = null;
    // a selection made in the plan, or by a tool, opens the folded sidebar
    if (id) this._sideOpen = true;
    this.sel.select(kind, id, {
      roomOfDevice: (entityId) => {
        const placed = this.floor?.placements.find((p) => p.entity_id === entityId);
        return (placed && this.roomAt([placed.x, placed.z])) ?? null;
      },
      roomOfOpening: (openingId) => this.floor?.openings.find((o) => o.id === openingId)?.room_id ?? null,
    });
  }

  private get opening(): Opening | undefined {
    const o = this.sel.opening ? this.floor?.openings.find((x) => x.id === this.sel.opening) : undefined;
    if (!o?.front || !this.floor) return o;
    // a pane over several edges shows the length of all of it, so the form sets what the user sees
    const room = this.floor.rooms.find((r) => r.id === o.room_id);
    const extent = room ? frontExtent(room, frontOf(this.floor.openings, o)) : null;
    return extent ? { ...o, width: extent.width } : o;
  }

  private get furnitureItem(): Furniture | undefined {
    return this.sel.furniture ? this.floor?.furniture.find((f) => f.id === this.sel.furniture) : undefined;
  }

  /** Add a door or window on the room edge nearest to a screen point. */
  private placeOpening(preset: OpeningPreset, screen: [number, number]): boolean {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return false;
    let best: { room: Room; edge: number; d: number; wall?: string; roomId?: string } | null = null;
    for (const w of floor.walls ?? []) {
      const host = openingHost({ room_id: "", edge: 0, wall: w.id }, floor.rooms, floor.walls ?? []);
      if (!host) continue;
      const [ax, ay] = this.toScreen(w.a);
      const [bx, by] = this.toScreen(w.b);
      const l2 = (bx - ax) ** 2 + (by - ay) ** 2 || 1;
      const t = Math.min(1, Math.max(0, ((screen[0] - ax) * (bx - ax) + (screen[1] - ay) * (by - ay)) / l2));
      const d = Math.hypot(screen[0] - ax - (bx - ax) * t, screen[1] - ay - (by - ay) * t);
      // a free wall wins over a room edge at the same distance
      const mid: Vec2 = [(w.a[0] + w.b[0]) / 2, (w.a[1] + w.b[1]) / 2];
      const inside = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon(mid, r.points));
      if (d < SNAP_PX * 2.2 && (!best || d - 1 < best.d)) best = { room: host.room, edge: 0, d: d - 1, wall: w.id, roomId: inside?.id ?? w.id };
    }
    for (const room of floor.rooms) {
      for (let i = 0; i < room.points.length; i++) {
        const [ax, ay] = this.toScreen(room.points[i]);
        const [bx, by] = this.toScreen(room.points[(i + 1) % room.points.length]);
        const l2 = (bx - ax) ** 2 + (by - ay) ** 2 || 1;
        const t = Math.min(1, Math.max(0, ((screen[0] - ax) * (bx - ax) + (screen[1] - ay) * (by - ay)) / l2));
        const d = Math.hypot(screen[0] - ax - (bx - ax) * t, screen[1] - ay - (by - ay) * t);
        // the selected room wins on shared edges
        const score = d - (room.id === this.sel.room ? 0.5 : 0);
        if (d < SNAP_PX * 2.2 && (!best || score < best.d)) best = { room, edge: i, d: score };
      }
    }
    if (!best) return false;
    const { room, edge, wall } = best;
    const a = room.points[edge];
    const b = room.points[(edge + 1) % room.points.length];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const defaults = OPENING_PRESETS[preset] as { type: OpeningType; leaves: 1 | 2; sill: number; height: number; width: number; style?: Opening["style"]; opens?: Opening["opens"] };
    const type: OpeningType = defaults.type;
    // a glass wall wider than the edge it is dropped on runs on along the outline as one pane: it is stored
    // as one ordinary opening per edge it covers, all sharing a `front` id
    if (defaults.style === "glass_wall" && !wall) {
      const at = arcOfNearest(room, this.toWorld(...screen));
      const pieces = frontPieces(room, at - defaults.width / 2, defaults.width);
      if (pieces && pieces.length > 1) {
        const front = uid("front");
        const made = pieces.map(
          (p): Opening => ({
            id: uid("opening"),
            room_id: best.roomId ?? room.id,
            edge: p.edge,
            // not rounded: neighbouring pieces must meet exactly, or the seam shows in 3D
            offset: p.offset,
            width: p.width,
            front,
            type,
            sill: defaults.sill,
            height: defaults.height,
            hinge: "left",
            leaves: defaults.leaves,
            swing: "in",
            ...(AUTO_STYLES.has(defaults.style!) ? {} : { style: defaults.style }),
            ...(defaults.opens ? { opens: defaults.opens } : {}),
            cover: null,
            contact: null,
            contact2: null,
            tilt: null,
          }),
        );
        this.change((_, f) => f.openings.push(...made));
        this._tool = "select";
        this.selectItem("opening", made[0].id);
        return true;
      }
    }
    const width = round(Math.min(defaults.width, Math.max(0.3, len - 0.1)));
    const opening: Opening = {
      id: uid("opening"),
      room_id: best.roomId ?? room.id,
      edge,
      ...(wall ? { wall } : {}),
      offset: this.dropOffset(room, edge, this.toWorld(...screen), width, false),
      width,
      type,
      sill: defaults.sill,
      height: defaults.height,
      hinge: "left",
      leaves: defaults.leaves,
      swing: "in",
      // the preset's own look (a glass wall; room and front doors stay automatic by their wall) and way of opening
      ...(defaults.style && !AUTO_STYLES.has(defaults.style) ? { style: defaults.style } : {}),
      ...(defaults.opens ? { opens: defaults.opens } : {}),
      cover: null,
      contact: null,
      contact2: null,
      tilt: null,
    };
    this.change((_, f) => f.openings.push(opening));
    this._tool = "select";
    this.selectItem("opening", opening.id);
    return true;
  }

  private updateOpening(patch: Partial<Opening>): void {
    const id = this.sel.opening;
    this.change((_, floor) => {
      const o = floor.openings.find((x) => x.id === id);
      if (!o) return;
      const group = frontOf(floor.openings, o);
      const room = o.wall ? null : floor.rooms.find((r) => r.id === o.room_id);
      // a glass wall's length or place re-splits it over the edges it then covers; everything else
      // (height, sill, panes) is the same on every piece
      const resplit = room && o.type === "window" && o.style === "glass_wall" && (patch.width != null || patch.offset != null);
      const extent = resplit && room ? frontExtent(room, group) : null;
      if (resplit && room && extent) {
        const width = Math.max(0.3, patch.width ?? extent.width);
        let from = extent.from;
        // a new length grows to both sides, the way it does on a straight wall
        if (patch.width != null) from += (extent.width - width) / 2;
        if (patch.offset != null) from += patch.offset - o.offset;
        from = Math.max(0, Math.min(outlineLength(room) - width, from));
        const next = withFront(floor.openings, room, { ...o, ...patch }, from, width, () => uid("opening"));
        if (next) floor.openings = next;
        return;
      }
      for (const p of group) Object.assign(p, patch);
    });
  }

  private deleteOpening(): void {
    const id = this.sel.opening;
    if (!id || !this.isAdmin || !this.confirmFixedDelete("opening", id)) return;
    this.change((_, floor) => {
      const o = floor.openings.find((x) => x.id === id);
      const gone = new Set((o ? frontOf(floor.openings, o) : [o]).map((x) => x?.id));
      floor.openings = floor.openings.filter((x) => !gone.has(x.id));
    });
    this.sel.opening = null;
  }

  /**
   * Snap a furniture item against the nearest wall of its room: back to the wall (or a side, when it
   * stands sideways), flush with the wall face. Null when no wall is close enough.
   */
  private snapToWall(f: Furniture): { x: number; z: number; rotation: number } | null {
    return this.floor ? snapToWall(this.floor, f, this._doc.settings.wall_interior) : null;
  }

  private updateFurniture(patch: Partial<Furniture>): void {
    const id = this.sel.furniture;
    this.change((_, floor) => Object.assign(floor.furniture.find((f) => f.id === id)!, patch));
  }

  private mirrorFurniture(): void {
    const f = this.furnitureItem;
    if (!f || !this.isAdmin) return;
    this.updateFurniture({ mirror: !f.mirror });
  }

  private deleteFurniture(): void {
    const id = this.sel.furniture;
    if (!id || !this.isAdmin || !this.confirmFixedDelete("furniture", id)) return;
    this.change((_, floor) => (floor.furniture = floor.furniture.filter((f) => f.id !== id)));
    this.sel.furniture = null;
  }

  private get device(): Placement | undefined {
    return this.sel.device ? this.floor?.placements.find((p) => p.entity_id === this.sel.device) : undefined;
  }

  private updateDevice(patch: Partial<Placement>): void {
    const id = this.sel.device;
    this.change((_, floor) => Object.assign(floor.placements.find((p) => p.entity_id === id)!, patch));
  }

  /** Close gaps between rooms of this floor and take the gap as interior wall thickness. */
  private closeFloorGaps(): void {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return;
    const { rooms, gaps } = closeGaps(floor.rooms);
    if (!gaps.length) {
      this.side.notice = this.t("gaps_none");
      return;
    }
    const thickness = suggestedThickness(gaps);
    this.change((doc, f) => {
      f.rooms = rooms;
      if (thickness) doc.settings.wall_interior = thickness;
    });
    this.side.notice = thickness
      ? this.t("gaps_closed_wall", { n: gaps.length, t: formatNumber(this.hass, thickness, 2) })
      : this.t("gaps_closed", { n: gaps.length });
  }

  private updateFloor(patch: Partial<Floor>): void {
    this.change((_, floor) => Object.assign(floor, patch));
  }

  private updateRoom(patch: Partial<Room>): void {
    const id = this.sel.room;
    this.change((_, floor) => Object.assign(floor.rooms.find((r) => r.id === id)!, patch));
  }

  // ------------------------------------------------------------------ rendering

  protected render(): TemplateResult {
    // lengths in the plan, the forms and the wall view in the plan's own units
    setUnits(this._doc.settings.units);
    const floor = this.floor;
    const walls = floor ? generateWalls(floor.rooms, { exterior: this._doc.settings.wall_exterior, interior: this._doc.settings.wall_interior }, floor.walls ?? []) : null;
    return html`
      ${renderPreview(this.host, this.lib.preview)}
      ${this._wallView
        ? html`<nf-wall-view .host=${this.host} .doc=${this._doc} .roomId=${this._wallView.roomId} .edge=${this._wallView.edge} @close=${() => (this._wallView = null)}></nf-wall-view>`
        : nothing}
      <div class="nf-editor ${this.narrow ? "nf-narrow" : ""}">
        <div class="nf-main">
          <div class="nf-toolbar">
            ${this.narrow
              ? html`<select class="nf-tool-select" aria-label=${this.t("tool_select")} ?disabled=${!floor} @change=${(e: Event) => {
                  this._tool = (e.target as HTMLSelectElement).value as Tool;
                  this._draft = [];
                  this._cursor = null;
                  this._sideOpen = this._tool !== "select";
                }}>
                  ${TOOLS.filter((tool) => this.isAdmin || tool === "select").map((tool) => html`<option value=${tool} ?selected=${this._tool === tool}>${this.t(`tool_${tool}` as I18nKey)}</option>`)}
                </select>`
              : nothing}
            <div class="nf-seg" role="group" aria-label=${this.t("tool_select")} ?hidden=${this.narrow}>
              ${TOOLS.map(
                (tool) => html`<button
                  aria-pressed=${this._tool === tool}
                  ?disabled=${!floor || (!this.isAdmin && tool !== "select")}
                  @click=${() => {
                    this._tool = tool;
                    this._draft = [];
                    this._cursor = null;
                    // a tool needs the sidebar (library, presets): open it beside the 3D pane
                    this._sideOpen = tool !== "select";
                  }}
                >
                  ${this.t(`tool_${tool}` as I18nKey)}
                </button>`,
              )}
            </div>
            <div class="nf-seg">
              <button ?disabled=${!this._canUndo} @click=${() => this.undo()} title="Ctrl+Z">${this.t("undo")}</button>
              <button ?disabled=${!this._canRedo} @click=${() => this.redo()} title="Ctrl+Y">${this.t("redo")}</button>
              <button @click=${() => this.fit()}>${this.t("fit")}</button>
              <button aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${() => this.toggleSplit()}>${this.t("split_3d")}</button>
              ${this.isAdmin ? html`<button aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${() => this.toggleLockPlan()}>${this.t("lock_plan")}</button>` : nothing}
              <button aria-pressed=${this._dims} title=${this.t("plan_dims_hint")} @click=${() => this.setDims(!this._dims)}>📏 ${this.t("plan_dims")}</button>
            </div>
            ${walls?.warnings.length ? html`<span class="nf-warn">${this.t("overlap_warning")}</span>` : nothing}
          </div>
          <div class="nf-stage-pair ${this._split ? "nf-split" : ""}" style=${this._split && !this.narrow ? `--nf-split:${Math.round(this._splitRatio * 100)}%` : ""}>
          <div class="nf-canvas-wrap">
            ${this.houseTool ? html`<div class="nf-tool-note">${this.t(this._tool === "energy" ? "energy_only_note" : "roof_only_note")}</div>` : nothing}
            <svg
              class="nf-plan nf-tool-${this._tool}"
              @pointerdown=${this.onPointerDown}
              @pointermove=${this.onPointerMove}
              @pointerup=${this.onPointerUp}
              @pointercancel=${this.onPointerUp}
              @pointerleave=${() => {
                if (!this.drag) this._cursor = null;
              }}
              @wheel=${this.onWheel}
              @contextmenu=${this.onContextMenu}
            >
              ${this.planLayers(floor, walls?.walls ?? null)}
            </svg>
            ${this.renderContext()}
            <p class="nf-hint ${this._fixedHint ? "nf-hint-fixed" : ""}">${this._pick ? this.t("robot_cal_doing") : !floor ? this.t("hint_empty") : this._fixedHint ? this.t("fixed_drag_hint") : this.t(`hint_${this._tool}` as I18nKey)}</p>
            <button class="nf-keys-open" title=${this.t("keys_title")} aria-label=${this.t("keys_title")} @click=${() => (this._keys = true)}>?</button>
            ${this.isAdmin
              ? renderTour((k, vars) => this.t(k, vars), this._tour, (step) => {
                  this._tour = step;
                  if (step === null) tourDone();
                })
              : nothing}
            ${this._keys ? renderKeySheet((k) => this.t(k), () => (this._keys = false)) : nothing}
          </div>
          ${this._split && !this.narrow
            ? html`<div class="nf-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`
            : nothing}
          ${this._split ? this.render3d() : nothing}
          </div>
        </div>
        ${this.renderAside(floor)}
      </div>
    `;
  }


  /** A tap in the 3D pane: select there, and fold the sidebar away (the bar under the pane has the essentials). */
  private selectFrom3d(kind: "room" | "furniture" | "device", id: string | null): void {
    this.selectItem(kind, id);
    this._sideOpen = false;
  }

  private setSidePinned(pinned: boolean): void {
    this._sidePinned = pinned;
    this._sideOpen = false;
    try {
      localStorage.setItem("nextfloor.sidePinned", pinned ? "1" : "0");
    } catch {
      // no storage
    }
  }

  /** The sidebar: always beside the plan, or, next to the 3D pane, folded to a strip while idle. */
  private renderAside(floor: Floor | undefined) {
    const folding = this._split && !this._sidePinned && !this.narrow;
    if (!folding) return html`<aside class="nf-side">${this.renderPinRow()}${this.safeSide(floor)}</aside>`;
    const open = this._sideOpen;
    if (!open) {
      return html`<aside class="nf-side nf-side-strip">
        <button class="nf-strip-btn" title=${this.t("side_open")} @click=${() => (this._sideOpen = true)}>☰</button>
        ${this.sel.furniture || this.sel.device || this.sel.opening
          ? html`<button class="nf-strip-btn nf-strip-hot" title=${this.t("side_details")} @click=${() => (this._sideOpen = true)}>⚙</button>`
          : nothing}
        <button class="nf-strip-btn" title=${this.t("tool_furniture")} @click=${() => ((this._tool = "furniture"), (this._draft = []), (this._sideOpen = true))}>🛋</button>
        <button class="nf-strip-btn" title=${this.t("tool_opening")} @click=${() => ((this._tool = "opening"), (this._draft = []), (this._sideOpen = true))}>🚪</button>
      </aside>`;
    }
    // open over the 3D pane, so the pane keeps its size
    return html`<aside class="nf-side nf-side-strip"></aside>
      <aside class="nf-side nf-side-overlay">
        ${this.renderPinRow(true)}
        ${this.safeSide(floor)}
      </aside>`;
  }

  /**
   * The side bar. A form that fails to draw shows the error and a way back instead: an exception in render would
   * otherwise stop the whole editor, plan included, from updating while the item stays selected.
   */
  private safeSide(floor: Floor | undefined) {
    try {
      return this.renderSide(floor);
    } catch (error) {
      console.error("NextFloor: the side bar could not be drawn", error);
      return html`<button class="nf-btn nf-back" @click=${() => this.selectItem("room", null)}>‹ ${this.t("back_to_floor")}</button>
        <p class="nf-note">${this.t("side_failed", { error: error instanceof Error ? error.message : String(error) })}</p>`;
    }
  }

  private renderPinRow(overlay = false) {
    if (!this._split || this.narrow) return nothing;
    return html`<div class="nf-pin-row">
      ${overlay ? html`<button class="nf-btn" @click=${() => (this._sideOpen = false)}>${this.t("side_close")}</button>` : nothing}
      <button class="nf-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${() => this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned ? "side_pinned" : "side_pin")}
      </button>
    </div>`;
  }

  private renderSide(floor: Floor | undefined) {
    const room = this.room;
    const admin = this.isAdmin;
    if (this._tool === "roof") return renderRoofPanel(this.roofDeps());
    if (this._tool === "energy") return this.renderEnergyPanel();
    // furnishing: the library and the selected item come first
    if (this._tool === "furniture" && floor && admin) {
      if (this._studio) {
        return renderStudio(this.host, this._studio, {
          change: (recipe) => this._studio && (this._studio = { ...this._studio, recipe, error: null }),
          save: () => void this.saveStudio(),
          close: () => (this._studio = null),
        });
      }
      return html`${this.furnitureItem ? html`${renderFurnitureForm(this.host, this.furnitureItem, this.furnitureActions())}${this.studioButton()}` : nothing} ${renderLibrary(this.host, this.lib, this.room?.name, this.libraryActions())}`;
    }
    // a selected item shows only its own form, with a way back to the floor and room
    const item =
      this._tool === "measure"
        ? null
        : this.furnitureItem
          ? renderFurnitureForm(this.host, this.furnitureItem, this.furnitureActions())
          : this.opening
            ? renderOpeningForm(this.host, this.opening, this.openingActions())
            : this.device
              ? renderDeviceForm(this.host, this.device, this.deviceActions())
              : this.outdoorArea
                ? renderOutdoorForm(this.host, this.outdoorArea, this.outdoorActions())
                : this.freeWall
                  ? renderFreeWallForm(this.host, this.freeWall, this.freeWallActions())
                  : null;
    const note = this._note ? floor?.notes?.find((n) => n.id === this._note) : undefined;
    if (note) {
      return html`<button class="nf-btn nf-back" @click=${() => (this._note = null)}>‹ ${this.t("back_to_floor")}</button>
        ${renderNoteForm(this.host, note, {
          patch: (patch) => this.change((_, f) => Object.assign(f.notes!.find((n) => n.id === note.id)!, patch)),
          remove: () => {
            this.change((_, f) => (f.notes = (f.notes ?? []).filter((n) => n.id !== note.id)));
            this._note = null;
          },
        })}`;
    }
    if (item) {
      return html`<button class="nf-btn nf-back" @click=${() => this.selectItem("room", this.sel.room)}>‹ ${this.t(room ? "back_to_room" : "back_to_floor", { room: room?.name ?? "" })}</button>
        ${item}`;
    }
    if (room && this._tool !== "measure") {
      return html`<button class="nf-btn nf-back" @click=${() => this.selectItem("room", null)}>‹ ${this.t("back_to_floor")}</button>
        ${renderRoomForm(this.host, this.side, room, this.roomActions(room))} ${renderDeviceList(this.host, this.side, room, this.deviceListActions())}`;
    }
    return html`
      ${admin ? nothing : html`<p class="nf-note">${this.t("read_only")}</p>`}
      ${this._check
        ? renderPlanCheck(this.host, checkPlan(this._doc, this.hass), { fix: (f) => this.fixFinding(f), ignore: (ids) => this.ignoreDevices(ids), resetIgnored: () => this.change((doc) => (doc.settings.check_ignore = null)), close: () => (this._check = false) })
        : admin
          ? planCheckButton(this.host, () => (this._check = true))
          : nothing}
      ${renderFloors(this.host, this.side, this.floorActions(), floor, this._floorId)}
      ${this._tool === "measure" && floor
        ? renderMeasureForm(this.host, this.measureState(), this.measureActions())
        : this.freeWall
        ? renderFreeWallForm(this.host, this.freeWall, this.freeWallActions())
        : this.outdoorArea
        ? renderOutdoorForm(this.host, this.outdoorArea, this.outdoorActions())
        : this.opening
        ? renderOpeningForm(this.host, this.opening, this.openingActions())
        : this.furnitureItem
          ? renderFurnitureForm(this.host, this.furnitureItem, this.furnitureActions())
          : this.device
            ? renderDeviceForm(this.host, this.device, this.deviceActions())
          : room
            ? html`${renderRoomForm(this.host, this.side, room, this.roomActions(room))} ${renderDeviceList(this.host, this.side, room, this.deviceListActions())}`
            : floor
              ? renderRoomList(this.host, floor, { select: (id) => this.selectItem("room", id) })
              : nothing}
      ${admin ? renderStartView(this.host, () => this.paneView()) : nothing} ${admin ? renderOutside(this.host, () => this.groundView()) : nothing} ${admin ? renderFavorites(this.host) : nothing}
      ${renderHelpLinks(this.host)}
      ${admin && SHOW_PRESENCE ? renderPresence(this.host) : nothing} ${admin ? renderBleLocate(this.host, this._doc) : nothing} ${admin ? renderCardTemplates(this.host) : nothing}
      ${floor && admin ? renderBackgroundForm(this.host, this.bg, floor) : nothing} ${admin ? renderSettings(this.host, this.settingsActions) : nothing}
      ${admin ? renderBackup(this.host, this.backup) : nothing}
    `;
  }

  /** Whether an opening sits in an exterior wall (decides the automatic door style). */
  private openingIsExterior(o: Opening): boolean {
    const floor = this.floor;
    const host = floor ? openingHost(o, floor.rooms, floor.walls ?? []) : null;
    if (!floor || !host) return false;
    const walls = generateWalls(floor.rooms, { exterior: this._doc.settings.wall_exterior, interior: this._doc.settings.wall_interior }, floor.walls ?? []);
    return locateOpening(walls.walls, o, host)?.wall.exterior ?? false;
  }

  /** The pane's camera with the point it looks at counted from the ground, not from the open floor (Outside's view, #83). */
  private groundView(): StartView | null {
    const v = this.paneView();
    if (!v) {
      alert(this.t("floor_start_view_need_pane"));
      return null;
    }
    const base = this.floor?.elevation ?? 0;
    return v.target ? { ...v, target: { ...v.target, y: round(v.target.y + base) } } : v;
  }

  /** The camera of the editor's 3D pane as it stands right now, rounded for the plan (null: no pane). */
  private paneView(): StartView | null {
    const pane = this.renderRoot.querySelector("nf-view3d") as (HTMLElement & { currentView(): StartView | null }) | null;
    const v = pane?.currentView();
    if (!v) return null;
    const t = v.target;
    return { theta: round(v.theta), phi: round(v.phi), radius: round(v.radius), ...(t ? { target: { x: round(t.x), y: round(t.y), z: round(t.z) } } : {}) };
  }

  /** This floor opens with the camera of the editor's 3D pane as it stands right now (#182). */
  private rememberFloorView(): void {
    const v = this.paneView();
    if (!v) {
      alert(this.t("floor_start_view_need_pane"));
      return;
    }
    this.updateFloor({ start_view: v });
  }

  /** Tapping this room in 3D flies to the camera of the editor's 3D pane as it stands right now (#282). */
  private rememberRoomView(): void {
    const v = this.paneView();
    if (!v) {
      alert(this.t("room_start_view_need_pane"));
      return;
    }
    this.updateRoom({ start_view: v });
  }

  /** Ids of the stored pictures any screen of the plan uses (in order of first use). */
  private storedPictures(): string[] {
    const ids: string[] = [];
    for (const floor of this._doc.floors) {
      for (const m of floor.furniture) {
        for (const r of m.pictures ?? []) if (r.image && !/^https?:\/\//.test(r.image) && !r.image.startsWith("camera:") && !ids.includes(r.image)) ids.push(r.image);
      }
    }
    return ids;
  }

  static styles = [tokens, controls, editorStyles];
}

if (!customElements.get("nf-editor")) customElements.define("nf-editor", NfEditor);

// the extensions page is part of this bundle: the panel loads it the same way as the editor
import "./extensions.ts";

