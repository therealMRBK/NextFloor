// Electric furniture and the entities it is linked to: TVs, fridges, lamps, a robot vacuum. Links can be set by
// hand; otherwise they are found among the entities of the room the piece stands in, by their names.

import { pointInPolygon, type EntityRef, type Floor, type Room } from "../model.ts";
import { isClimateFurniture, packScreen } from "../packs.ts";
import type { HomeAssistant } from "../types.ts";
import { entityName, kindOf } from "./kinds.ts";
import { openingEntities } from "./openings.ts";
import { areaEntities, entityAreaId, isPower, powerSensorsOf, primaryEntities } from "./registry.ts";

const TV_NAME = /\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i;
const COOLING_NAME = /(kühl|fridge|gefrier|freezer)/i;
const DISHWASHER_NAME = /(spülmaschine|geschirrspül|dishwasher)/i;
const HOB_NAME = /(kochfeld|herd|induktion|cooktop)/i;

/** Name patterns of the entities that belong to a piece of electric furniture. */
const FURNITURE_NAMES: Record<string, RegExp> = {
  robot_vacuum: /(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,
  tv_board: TV_NAME,
  tv_wall: TV_NAME,
  desk: /\b(pc|computer|rechner|desktop|monitor|workstation)/i,
  fridge: COOLING_NAME,
  fridge_smart: COOLING_NAME,
  stove: /(herd|kochfeld|cooktop|stove|induktion)/i,
  kitchen_tall: /(backofen|oven|ofen)/i,
  dishwasher: DISHWASHER_NAME,
  washer: /(waschmaschine|washer|washing)/i,
  dryer: /(trockner|dryer)/i,
  kitchen: /(kaffee|coffee|wasserkocher|kettle)/i,
  island: HOB_NAME,
  sink: DISHWASHER_NAME,
  radiator: /(heiz|radiator|thermostat|climate|hk|trv)/i,
};

/** Name hints for choosing a lamp's light: one that fits the name wins, else any free one. */
const LAMP_NAMES: Record<string, RegExp> = {
  lamp_ceiling: /(decke|ceiling|haupt|main)/i,
  lamp_downlight: /(spot|strahler|downlight|einbau)/i,
  lamp_spot: /(spot|strahler)/i,
  lamp_panel: /(panel|decke|ceiling)/i,
  lamp_uplight: /(fluter|uplight|steh)/i,
  lamp_bollard: /(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,
  lamp_garden: /(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,
  lamp_pendant: /(pendel|pendant|hänge|esstisch|dining)/i,
  ceiling_fan: /(ventilator|fan)/i,
  lamp_floor: /(steh|floor)/i,
  lamp_table: /(tisch|nacht|table|bedside|lese|reading)/i,
  lamp_wall: /(wand|wall)/i,
  led_strip: /(led|strip|streifen|leiste|band)/i,
};

const TV_FURNITURE = new Set(["tv_board", "tv_wall"]);

export interface FurnitureLinks {
  entity: string | null;
  power: string | null;
  /** Ceiling fan: its fan entity. */
  fan?: string | null;
}

/** Whether a rule of a screen picture holds now: the state or attribute equals the value or contains it (3+ letters); "*" always. */
export function pictureRuleMatches(hass: HomeAssistant, rule: { entity: string; attribute?: string | null; state: string }): boolean {
  const state = hass.states[rule.entity];
  if (!state) return false;
  const raw = rule.attribute ? state.attributes[rule.attribute] : state.state;
  if (raw === undefined || raw === null) return false;
  const wanted = rule.state.trim().toLowerCase();
  const actual = String(raw).toLowerCase();
  return wanted === "*" || actual === wanted || (wanted.length >= 3 && actual.includes(wanted));
}

/** Furniture that shows a media player on a screen: the built-in TVs and pack items with a screen part. */
export const isMediaFurniture = (type: string): boolean => TV_FURNITURE.has(type) || !!packScreen(type);

/** Furniture whose screen can show a media player or a picture rule: media furniture, a desk's monitor, a smart fridge's display. */
export const hasScreen = (type: string): boolean => isMediaFurniture(type) || type === "desk" || type === "fridge_smart";

const isSet = (ref: string | null | undefined): ref is string => !!ref && ref !== "none";

/** The power sensor of an entity: itself, or another power sensor on its device. */
function powerOfDevice(hass: HomeAssistant, id: string): string | null {
  if (isPower(hass, id)) return id;
  const device = hass.entities?.[id]?.device_id;
  return device ? (powerSensorsOf(hass, device).find((e) => e !== id) ?? null) : null;
}

const roomOf = (floor: Floor, x: number, z: number): Room | undefined => floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([x, z], r.points));

/** The best-fitting free entity of a kind for a name pattern; with `fallback`, the first free one when none fits. */
function pickByName(candidates: string[], pattern: RegExp | undefined, describe: (id: string) => string, fallback: boolean): string | null {
  return candidates.find((id) => pattern?.test(describe(id))) ?? (fallback ? (candidates[0] ?? null) : null);
}

/**
 * The entities of electric furniture. Set by hand, or (when unset) found in the area of the room the piece stands in:
 * lamps get a light, radiators a thermostat, TVs a media player (a real TV first), other appliances an entity whose
 * name fits. The power sensor comes from the same device or from a sensor whose name fits. Every entity is used once.
 */
export function furnitureEntities(hass: HomeAssistant, floors: readonly Floor[]): Map<string, FurnitureLinks> {
  const links = new Map<string, FurnitureLinks>();
  for (const floor of floors) {
    // entities set by hand and devices placed in the plan (an Echo Show in the corner) are taken already
    const used = new Set<string>(
      [...floor.furniture.flatMap((f) => [f.entity, f.power, f.fan_entity]), ...floor.placements.map((p) => p.entity_id)].filter(isSet),
    );
    for (const piece of floor.furniture) {
      const isLamp = piece.type in LAMP_NAMES;
      const isClimate = isClimateFurniture(piece.type);
      const pattern = isLamp ? LAMP_NAMES[piece.type] : FURNITURE_NAMES[piece.type];
      if (!pattern && !isClimate && piece.entity == null && piece.power == null) continue;
      const room = roomOf(floor, piece.x, piece.z);
      const free = (room ? primaryEntities(hass, areaEntities(hass, room.area_id)) : []).filter((id) => !used.has(id));
      const describe = (id: string) => `${id} ${entityName(hass, id)}`;
      const ofKind = (kind: string) => free.filter((id) => kindOf(id) === kind);

      let entity: string | null = piece.entity === "none" ? null : (piece.entity ?? null);
      if (piece.entity == null) {
        if (piece.type === "ceiling_fan") {
          // the fan's light kit: a light on the same device as a free fan, or one whose name fits (a fan without light takes none)
          const all = (room ? areaEntities(hass, room.area_id) : []).filter((id) => !used.has(id));
          const devices = new Set(all.filter((id) => kindOf(id) === "fan").map((id) => hass.entities?.[id]?.device_id).filter(Boolean));
          entity = all.find((id) => kindOf(id) === "light" && devices.has(hass.entities?.[id]?.device_id)) ?? pickByName(ofKind("light"), pattern, describe, false);
        } else if (isLamp) entity = pickByName(ofKind("light"), pattern, describe, true);
        else if (piece.type === "robot_vacuum") {
          // vacuums are not a device kind of their own, so they are looked up in the room's area directly
          const area = room?.area_id ?? null;
          entity = Object.keys(hass.entities ?? {}).find((id) => id.startsWith("vacuum.") && !used.has(id) && entityAreaId(hass, id) === area) ?? null;
        } else if (piece.type === "radiator" || isClimate) entity = pickByName(ofKind("climate"), pattern, describe, true);
        else if (isMediaFurniture(piece.type)) {
          const players = ofKind("media");
          // a TV takes the TV (or any player of the room); a monitor or smart speaker only a player whose name fits
          entity = players.find((id) => hass.states[id]?.attributes.device_class === "tv") ?? pickByName(players, pattern, describe, TV_FURNITURE.has(piece.type));
        } else if (pattern) entity = free.find((id) => ["switch", "media", "fan"].includes(kindOf(id) ?? "") && pattern.test(describe(id))) ?? null;
        if (entity) used.add(entity);
      }

      let power: string | null = piece.power === "none" ? null : (piece.power ?? null);
      if (piece.power == null) {
        power = entity ? powerOfDevice(hass, entity) : null;
        if (!power && pattern && room && !isLamp) power = areaEntities(hass, room.area_id).find((id) => isPower(hass, id) && !used.has(id) && pattern.test(describe(id))) ?? null;
        if (power) used.add(power);
      }
      // a ceiling fan's fan: on the light's device first, else a free fan of the room
      let fan: string | null = null;
      if (piece.type === "ceiling_fan") {
        fan = piece.fan_entity === "none" ? null : (piece.fan_entity ?? null);
        if (piece.fan_entity == null) {
          // every fan of the area: the light kit's device may count as one device with the light, which only keeps one of them
          const fans = (room ? areaEntities(hass, room.area_id) : []).filter((id) => kindOf(id) === "fan" && !used.has(id));
          const device = entity ? hass.entities?.[entity]?.device_id : undefined;
          fan = (device ? fans.find((id) => hass.entities?.[id]?.device_id === device) : undefined) ?? fans[0] ?? null;
          if (fan) used.add(fan);
        }
      }
      if (entity || power || fan) links.set(piece.id, { entity, power, ...(piece.type === "ceiling_fan" ? { fan } : {}) });
    }
  }
  return links;
}

/** Entities that ask before they are switched: placed devices, and furniture, blinds and garage doors marked "ask first". */
export function confirmEntities(hass: HomeAssistant, floors: readonly Floor[]): Set<string> {
  const asking = new Set<string>();
  const furnitureLinks = furnitureEntities(hass, floors);
  const openingLinks = floors.some((f) => f.openings.some((o) => o.confirm)) ? openingEntities(hass, floors) : null;
  for (const floor of floors) {
    for (const placed of floor.placements) if (placed.confirm) asking.add(placed.entity_id);
    for (const opening of floor.openings) {
      const cover = opening.confirm ? openingLinks?.get(opening.id)?.cover : null;
      if (isSet(cover)) asking.add(cover);
    }
    for (const piece of floor.furniture) {
      const entity = piece.confirm ? furnitureLinks.get(piece.id)?.entity : null;
      if (isSet(entity)) asking.add(entity);
    }
  }
  return asking;
}

/** Fridges and freezers (also pack items named so): they can show the temperatures of their compartments. */
export const isCooling = (type: string): boolean => type === "fridge" || type === "fridge_smart" || /(fridge|freezer|kuehl|gefrier|chest_freezer)/.test(type.slice(type.lastIndexOf(":") + 1));

/** Above these a fridge and a freezer count as too warm (°C). */
export const FRIDGE_WARM = 8;
export const FREEZER_WARM = -12;

/**
 * The temperatures a fridge shows: its fridge and freezer compartment ("4.2 °C · −18.0 °C"), and whether one is too warm.
 * Null when no sensor is set or none tells a number.
 */
export function coolingTemps(hass: HomeAssistant, piece: { temp_entity?: string | null; temp_entity2?: string | null }, format: (celsius: number) => string): { text: string; warm: boolean } | null {
  const read = (id: string | null | undefined): number | null => {
    if (!isSet(id)) return null;
    const st = hass.states[id];
    const value = st ? Number(st.state) : NaN;
    if (!Number.isFinite(value)) return null;
    // a sensor in Fahrenheit is turned into Celsius, so the limits hold
    return st!.attributes.unit_of_measurement === "°F" ? ((value - 32) * 5) / 9 : value;
  };
  const fridge = read(piece.temp_entity);
  const freezer = read(piece.temp_entity2);
  if (fridge === null && freezer === null) return null;
  const parts = [fridge, freezer].filter((v): v is number => v !== null).map(format);
  return { text: parts.join(" · "), warm: (fridge !== null && fridge > FRIDGE_WARM) || (freezer !== null && freezer > FREEZER_WARM) };
}

/** Which doors of each smart fridge stand open now (a door sensor that says "on" or "open"). */
export function fridgeDoors(hass: HomeAssistant, floors: readonly Floor[]): Map<string, { left: boolean; right: boolean }> {
  const isOpen = (sensor: EntityRef | undefined) => isSet(sensor) && ["on", "open"].includes(hass.states[sensor]?.state ?? "");
  const doors = new Map<string, { left: boolean; right: boolean }>();
  for (const piece of floors.flatMap((f) => f.furniture)) if (piece.type === "fridge_smart") doors.set(piece.id, { left: isOpen(piece.door_left), right: isOpen(piece.door_right) });
  return doors;
}

/**
 * The entities of a room's panel: what the plan shows in the room (placed devices, linked furniture, the blinds and
 * contacts of its doors and windows) plus those picked for the panel. `more` are the other entities of the room's
 * area, offered on request. Entities the editor hid for the room never appear.
 */
export function roomPanelEntities(hass: HomeAssistant, floor: Floor, room: Room): { shown: string[]; more: string[] } {
  const inside = (x: number, z: number) => pointInPolygon([x, z], room.points);
  const furnitureLinks = furnitureEntities(hass, [floor]);
  const openingLinks = openingEntities(hass, [floor]);
  const hidden = new Set(room.hidden ?? []);
  const candidates = [
    ...floor.placements.filter((p) => !p.outside && inside(p.x, p.z)).map((p) => p.entity_id),
    ...floor.furniture.filter((f) => inside(f.x, f.z)).flatMap((f) => [furnitureLinks.get(f.id)?.entity, furnitureLinks.get(f.id)?.power]),
    ...floor.openings
      .filter((o) => o.room_id === room.id)
      .flatMap((o) => {
        const e = openingLinks.get(o.id);
        return e ? [e.cover, e.contact, e.tilt, e.contact2] : [];
      }),
    ...(room.panel ?? []),
  ];
  const shown = [...new Set(candidates.filter((id): id is string => !!id && !!hass.states[id]))].filter((id) => !hidden.has(id));
  const isShown = new Set(shown);
  return { shown, more: areaEntities(hass, room.area_id).filter((id) => !isShown.has(id) && !hidden.has(id)) };
}


/**
 * Outside: the devices placed outside every room outline (the garden's valves and lights, a mower, the grid connection
 * outside), and those marked as belonging to Outside wherever they stand (a weather station on the roof), on all floors.
 */
export function outsideEntities(hass: HomeAssistant, floors: readonly Floor[]): string[] {
  const out: (string | null | undefined)[] = [];
  for (const floor of floors) {
    const indoors = (x: number, z: number) => floor.rooms.some((room) => room.points.length >= 3 && pointInPolygon([x, z], room.points));
    const links = furnitureEntities(hass, [floor]);
    out.push(...floor.placements.filter((p) => p.outside || !indoors(p.x, p.z)).map((p) => p.entity_id));
    out.push(...floor.furniture.filter((f) => !indoors(f.x, f.z)).flatMap((f) => [links.get(f.id)?.entity, links.get(f.id)?.power]));
    // gardens, terraces and pools linked to a Home Assistant area bring that area's devices, and a pool its pump and thermometer
    for (const a of floor.outdoor ?? []) {
      if (a.area_id) out.push(...primaryEntities(hass, areaEntities(hass, a.area_id)));
      out.push(a.pump_entity, a.temp_entity);
    }
  }
  return [...new Set(out.filter((id): id is string => !!id && !!hass.states[id]))];
}
