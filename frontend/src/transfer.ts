// Plan files: save the building as JSON and load it again. A shareable copy has every link to this Home Assistant
// removed (entities, areas, energy sensors, people, the map position, favourites, own buttons), so it can go to someone else.

import { normalizeBuilding, type Building } from "./model.ts";
import type { FurniturePack } from "./packs.ts";

export const EXPORT_FORMAT = "nextfloor";

export interface ExportFile {
  format: typeof EXPORT_FORMAT;
  version: 1;
  exported_at: string;
  building: Building;
}

// Home Assistant entity ids ("light.kitchen", "sensor.grid_power"): a known domain, a dot, a slug.
const ENTITY_DOMAINS =
  "alarm_control_panel|automation|binary_sensor|button|calendar|camera|climate|conversation|cover|date|datetime|device_tracker|event|fan|group|humidifier|image|input_boolean|input_button|input_datetime|input_number|input_select|input_text|lawn_mower|light|lock|media_player|notify|number|person|remote|scene|script|select|sensor|siren|stt|sun|switch|text|time|timer|todo|tts|update|vacuum|valve|water_heater|weather|zone";
const ENTITY_ID = new RegExp(`^(?:${ENTITY_DOMAINS})\\.[a-z0-9_]+$`);
const DEVICE_ID = /^[0-9a-f]{32}$/;
/** Keys whose value is a Home Assistant area or floor, whatever it looks like. */
const AREA_KEYS = new Set(["area_id", "ha_floor"]);
const AREA_LIST_KEYS = new Set(["sub_areas"]);
/** Whole fields that only work with a Home Assistant behind them and are dropped from a shared copy. */
const DROPPED_KEYS = new Set(["tap", "show_when", "pictures", "moods"]);

/**
 * Cuts every remaining link to this Home Assistant out of a value, whatever field it sits in: strings that are entity or device ids become
 * null (or leave a list), object keys that are entity ids go, areas and the Home Assistant floor are cleared. It runs on top of the
 * explicit clean-up in `withoutEntities`, so a field that is added to the model later cannot leak through by being forgotten there.
 */
function scrub(value: unknown): unknown {
  if (typeof value === "string") return ENTITY_ID.test(value) || DEVICE_ID.test(value) ? null : value;
  if (Array.isArray(value)) return value.map((v) => scrub(v)).filter((v) => v !== null);
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) {
      if (ENTITY_ID.test(k) || DROPPED_KEYS.has(k)) continue;
      if (AREA_KEYS.has(k)) out[k] = null;
      else if (AREA_LIST_KEYS.has(k)) out[k] = null;
      else out[k] = scrub(v);
    }
    return out;
  }
  return value;
}

/** The only building settings a shared copy keeps: how the house looks, nothing that names, locates or controls anything of the original. */
const SHARED_SETTINGS = [
  "wall_exterior",
  "wall_interior",
  "wall_paint_outside",
  "wall_paint_inside",
  "grid",
  "north",
  "roof",
  "weather_effects",
  "rain_warning",
  "sun_patches",
  "lock_plan",
  "rooms_as_drawn",
  "start_view",
  "units",
  "motion_markers_active",
  "room_double_tap",
] as const;

/**
 * The building with all links to Home Assistant cut: entities, areas, energy sensors, people, the map position, favourites, own buttons and
 * alerts, calendars, status entities, the fuse box and plugins. Background pictures are dropped as well. Settings are built from an
 * allowlist; floors, energy and the rest are cleaned explicitly and then scrubbed of anything that still looks like an entity.
 */
export function withoutEntities(source: Building): Building {
  const copy = structuredClone(source);
  const settings: Record<string, unknown> = {};
  for (const k of SHARED_SETTINGS) if (copy.settings?.[k] !== undefined) settings[k] = copy.settings[k];
  // the backdrop keeps its colour, but its picture may be a file of this Home Assistant
  const backdrop = copy.settings?.backdrop;
  if (backdrop && (backdrop.color || backdrop.dim != null)) settings.backdrop = { color: backdrop.color ?? null, dim: backdrop.dim ?? null };
  copy.settings = settings as unknown as Building["settings"];
  copy.energy = { ...copy.energy, grid: null, solar: null, battery: null, battery_soc: null, tariff: null, consumption: null, gas: null, water: null };
  copy.presence = [];
  for (const floor of copy.floors) {
    floor.background = null;
    floor.placements = [];
    floor.power_entity = null;
    floor.ha_floor = null;
    for (const room of floor.rooms) {
      Object.assign(room, { area_id: null, sub_areas: null, panel: [], hidden: [], no_state: [] });
    }
    floor.furniture.forEach((piece) => {
      Object.assign(piece, { entity: null, power: null });
      delete piece.effect_animations; // HA program names are private, like entity links.
      // a picture frame's photo: only a stored picture or an https address travels, not /local files, cameras or media players
      if (piece.picture && !(piece.picture.startsWith("image:") || piece.picture.startsWith("https://"))) piece.picture = null;
    });
    floor.openings.forEach((opening) => Object.assign(opening, { cover: null, contact: null, tilt: null }));
  }
  return scrub(copy) as Building;
}

export function exportFile(building: Building, shareable: boolean): ExportFile {
  return {
    format: EXPORT_FORMAT,
    version: 1,
    exported_at: new Date().toISOString(),
    building: shareable ? withoutEntities(building) : structuredClone(building),
  };
}

// a plan written by hand or by an AI may leave out the version and the settings; normalizeBuilding fills them in
const looksLikePlan = (b: Building | undefined): b is Building => !!b && (b.version === 1 || b.version === undefined) && Array.isArray(b.floors) && b.floors.every((f) => !!f && typeof f === "object");

/** Where shared views open: the online demo of the released version, which takes the plan by message. */
export const SHARE_VIEWER = "https://therealmrbk.github.io/NextFloor/preview/?shared&noshowcase";

/**
 * The house as a small page of its own: it embeds the online demo and hands it the plan (without the entities, like a template) and
 * the furniture packs it uses, so it opens in any browser without Home Assistant.
 */
export function shareViewHtml(building: Building, packs: readonly FurniturePack[], title: string, note: string, viewer = SHARE_VIEWER): string {
  const used = new Set(building.floors.flatMap((f) => f.furniture.map((m) => m.type)).filter((t) => t.startsWith("pack:")).map((t) => t.split(":")[1]));
  const data = { building: withoutEntities(building), packs: packs.filter((p) => !p.builtin && used.has(p.id)) };
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
  return `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)}</title>
<style>html,body{margin:0;height:100%;background:#111;color:#ddd;font-family:system-ui,sans-serif}iframe{border:0;width:100%;height:100%;display:block}noscript p{padding:2em}</style></head>
<body><iframe id="nf" src="${esc(viewer)}" allow="fullscreen" title="${esc(title)}"></iframe>
<noscript><p>${esc(note)}</p></noscript>
<script id="nf-plan" type="application/json">${json}</script>
<script>
const data = JSON.parse(document.getElementById("nf-plan").textContent);
const frame = document.getElementById("nf");
addEventListener("message", (e) => {
  if (e.source === frame.contentWindow && e.data && e.data.type === "nextfloor-share-ready") frame.contentWindow.postMessage({ type: "nextfloor-share", building: data.building, packs: data.packs }, "*");
});
</script></body></html>
`;
}

/** Reads an export file (or a bare building). Throws Error("not_json") or Error("not_plan"). */
export function parseExport(text: string): Building {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error("not_json");
  }
  const wrapped = parsed as Partial<ExportFile> | null;
  const candidate = (wrapped?.format === EXPORT_FORMAT ? wrapped.building : parsed) as Building | undefined;
  if (!looksLikePlan(candidate)) throw new Error("not_plan");
  candidate.floors.forEach((floor) => (floor.background = null)); // pictures never travel with a file
  return normalizeBuilding(candidate);
}

const isStoredImage = (ref: string) => !/^https?:\/\//.test(ref) && !ref.startsWith("camera:");

/** Ids of the uploaded pictures a plan uses: floor backgrounds and pictures on screens (not URLs, not cameras). */
export function storedImageIds(building: Building): string[] {
  const ids = new Set<string>();
  for (const floor of building.floors) {
    if (floor.background?.image_id) ids.add(floor.background.image_id);
    const refs = floor.furniture.flatMap((piece) => piece.pictures ?? []);
    for (const { image } of refs) if (image && isStoredImage(image)) ids.add(image);
  }
  return [...ids];
}

/** Offers a text as a file download. */
export function download(filename: string, text: string, type = "application/json"): void {
  const link = document.createElement("a");
  const href = URL.createObjectURL(new Blob([text], { type }));
  Object.assign(link, { href, download: filename });
  link.click();
  setTimeout(() => URL.revokeObjectURL(href), 1000);
}
