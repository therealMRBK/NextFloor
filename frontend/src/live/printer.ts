/**
 * NextFloor's 3D printer: what a printer reports, found among the entities of its Home Assistant device – like the car. Works with
 * the Bambu Lab, OctoPrint, Moonraker (Klipper) and PrusaLink integrations, which name their sensors alike: a print progress in %,
 * the time left or the end time, the current and total layer, nozzle and bed temperatures, a cover picture of the model and, on a
 * Bambu printer with an AMS, the colour of each filament tray.
 */
import type { HassEntity, HomeAssistant } from "../types.ts";

export interface PrinterInfo {
  /** printing, paused, finished, idle, error or offline (lower case, from the print status). */
  status: string;
  printing: boolean;
  /** 0 … 100. */
  progress: number | null;
  /** Minutes left. */
  remaining: number | null;
  /** When it will be done (ms). */
  endsAt: number | null;
  layer: number | null;
  layers: number | null;
  nozzle: number | null;
  bed: number | null;
  /** Name of the file or job. */
  job: string | null;
  /** The model's picture (an image entity's or a camera's picture). */
  picture: string | null;
  /** Filament colours ("#rrggbb"), the active one first. */
  filaments: string[];
}

const num = (st: HassEntity | undefined) => {
  const n = Number(st?.state);
  return st && Number.isFinite(n) ? n : null;
};
const has = (id: string, ...words: string[]) => words.some((w) => id.includes(w));

/** All entities of the device of `entity`. */
function siblings(hass: HomeAssistant, entity: string): string[] {
  const device = hass.entities?.[entity]?.device_id;
  if (!device) return hass.states[entity] ? [entity] : [];
  return Object.values(hass.entities ?? {})
    .filter((e) => e.device_id === device && !e.hidden)
    .map((e) => e.entity_id)
    .filter((id) => hass.states[id]);
}

/** Minutes from a duration state: minutes, hours (unit h), seconds (unit s), or "1:05:00". */
function minutes(st: HassEntity | undefined): number | null {
  if (!st) return null;
  const s = String(st.state);
  const m = /^(\d+):(\d{2})(?::(\d{2}))?$/.exec(s);
  if (m) return Number(m[1]) * 60 + Number(m[2]);
  const v = Number(s);
  if (!Number.isFinite(v)) return null;
  const unit = String(st.attributes.unit_of_measurement ?? "min").toLowerCase();
  return unit === "h" ? v * 60 : unit === "s" ? v / 60 : unit === "d" ? v * 1440 : v;
}

const ACTIVE = /print|running|busy|druck/;
const STATUS_WORDS = ["print_status", "current_stage", "print_state", "printer_state", "current_state", "status", "state"];

export function readPrinter(hass: HomeAssistant, anchor: string | null): PrinterInfo | null {
  if (!anchor || !hass.states[anchor]) return null;
  const all = siblings(hass, anchor);
  const sensors = all.filter((id) => id.startsWith("sensor."));
  const st = (id: string | undefined) => (id ? hass.states[id] : undefined);
  const find = (match: (id: string, s: HassEntity) => boolean) => sensors.find((id) => match(id, hass.states[id]));
  const unit = (s: HassEntity) => String(s.attributes.unit_of_measurement ?? "");
  const dc = (s: HassEntity) => String(s.attributes.device_class ?? "");

  const progressId = find((id, s) => unit(s) === "%" && has(id, "progress", "fortschritt", "completion"));
  if (!progressId) return null;
  const statusId = STATUS_WORDS.map((w) => find((id, s) => id.endsWith(w) && !Number.isFinite(Number(s.state)))).find(Boolean);
  const remainingId = find((id) => has(id, "remaining", "time_left", "restzeit", "print_time_left"));
  const endId = find((id, s) => dc(s) === "timestamp" && has(id, "end", "finish", "estimated", "ende"));
  const layerId = find((id) => has(id, "current_layer", "layer") && !has(id, "total"));
  const layersId = find((id) => has(id, "total_layer", "layer_count", "total_layers"));
  const nozzleId = find((id, s) => dc(s) === "temperature" && has(id, "nozzle", "hotend", "extruder", "tool0", "düse") && !has(id, "target"));
  const bedId = find((id, s) => dc(s) === "temperature" && has(id, "bed", "heater_bed", "druckbett") && !has(id, "target"));
  const jobId = find((id) => has(id, "file", "job", "task_name", "gcode", "print_name", "subtask"));
  const pictureId = all.find((id) => id.startsWith("image.") && has(id, "cover", "model", "thumbnail", "preview")) ?? all.find((id) => id.startsWith("camera.") && has(id, "thumbnail", "preview"));
  const statusText = String(st(statusId)?.state ?? "").toLowerCase();
  const progress = num(st(progressId));
  const printing = statusText ? ACTIVE.test(statusText) && !/finish|complete|idle|fertig/.test(statusText) : (progress ?? 0) > 0 && (progress ?? 0) < 100;
  const end = st(endId) ? Date.parse(String(st(endId)!.state)) : NaN;
  const remaining = minutes(st(remainingId));
  // Bambu: one sensor per AMS tray with its colour ("#RRGGBBAA"), the active one marked
  const trays = all
    .map((id) => hass.states[id])
    .filter((s) => typeof s?.attributes.color === "string" && /^#[0-9a-f]{6}/i.test(String(s.attributes.color)) && has(s.entity_id, "tray", "ams", "filament", "spool", "external"));
  trays.sort((a, b) => Number(!!b.attributes.active) - Number(!!a.attributes.active));
  const picture = st(pictureId)?.attributes.entity_picture;
  return {
    status: statusText || (printing ? "printing" : "idle"),
    printing,
    progress,
    remaining,
    endsAt: Number.isFinite(end) ? end : remaining !== null && printing ? Date.now() + remaining * 60_000 : null,
    layer: num(st(layerId)),
    layers: num(st(layersId)),
    nozzle: num(st(nozzleId)),
    bed: num(st(bedId)),
    job: st(jobId)?.state && !["unknown", "unavailable", ""].includes(String(st(jobId)!.state)) ? String(st(jobId)!.state) : null,
    picture: typeof picture === "string" ? picture : null,
    filaments: [...new Set(trays.map((s) => String(s.attributes.color).slice(0, 7).toLowerCase()))].slice(0, 8),
  };
}

/** Whether a piece of furniture is a 3D printer (by its pack item's id). */
export const isPrinter3d = (type: string): boolean => /printer_(3d|cube|multi|large|open|resin|enclosed)$/.test(type);
