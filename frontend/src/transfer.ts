// Plan files: save the building as JSON and load it again. A shareable copy has every link to this
// Home Assistant removed (entities, areas, energy sensors, people), so it can go to someone else.

import { normalizeBuilding, type Building } from "./model.ts";
import type { FurniturePack } from "./packs.ts";

export const EXPORT_FORMAT = "nextfloor";

export interface ExportFile {
  format: typeof EXPORT_FORMAT;
  version: 1;
  exported_at: string;
  building: Building;
}

/** The building with all links to entities and areas cut. Background pictures are dropped as well. */
export function withoutEntities(source: Building): Building {
  const copy = structuredClone(source);
  copy.energy = { ...copy.energy, grid: null, solar: null, battery: null, battery_soc: null, tariff: null };
  copy.presence = [];
  for (const floor of copy.floors) {
    floor.background = null;
    floor.placements = [];
    floor.rooms.forEach((room) => (room.area_id = null));
    floor.furniture.forEach((piece) => {
      Object.assign(piece, { entity: null, power: null });
      delete piece.effect_animations; // HA program names are private, like entity links.
    });
    floor.openings.forEach((opening) => Object.assign(opening, { cover: null, contact: null, tilt: null }));
  }
  return copy;
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
