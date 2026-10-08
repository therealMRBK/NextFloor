/**
 * NextFloor's car: what a parking spot's car reports, found by itself among the entities of the car's device.
 *
 * The spot names the car through its presence entity (a device_tracker, a binary sensor …) or through the links set
 * in the editor (`car` on the spot). Everything else is looked for on the same device: the charge level (a battery
 * sensor), the range (a distance sensor), the charging power, whether it charges and is plugged in, the lock, the
 * climate and the charge switch. Works with TeslaMate (MQTT), Tesla Fleet, and the car integrations that put their
 * entities on one device (VW, BMW, Hyundai/Kia, Renault, Polestar …).
 */
import type { Furniture } from "../model.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";

export interface CarInfo {
  /** The car is in its spot (else it is on the road). */
  home: boolean;
  soc: number | null;
  range: number | null;
  rangeUnit: string;
  /** Charging power in W (null: unknown). */
  chargingW: number | null;
  charging: boolean;
  plugged: boolean | null;
  locked: boolean | null;
  climateOn: boolean | null;
  /** Inside temperature (°C) when the car reports it. */
  inside: number | null;
  /** Where it is when it is away: the zone or the tracker's text. */
  where: string | null;
  entities: { lock: string | null; climate: string | null; charge: string | null; tracker: string | null };
}

const ref = (v: string | null | undefined) => (v && v !== "none" ? v : null);
const num = (st: HassEntity | undefined) => {
  const n = Number(st?.state);
  return st && Number.isFinite(n) ? n : null;
};
const attr = (st: HassEntity | undefined, k: string) => st?.attributes?.[k];
const word = (id: string, ...parts: string[]) => parts.some((p) => id.includes(p));

/** All entities on the device of `entity` (the entity itself included). */
function siblings(hass: HomeAssistant, entity: string | null): string[] {
  if (!entity) return [];
  const device = hass.entities?.[entity]?.device_id;
  if (!device) return [entity];
  return Object.values(hass.entities ?? {})
    .filter((e) => e.device_id === device && !e.hidden)
    .map((e) => e.entity_id)
    .filter((id) => hass.states[id]);
}

/** The first entity that matches, preferring one set by hand. */
function pick(hass: HomeAssistant, set: string | null, list: string[], match: (id: string, st: HassEntity) => boolean): string | null {
  if (set && hass.states[set]) return set;
  return list.find((id) => match(id, hass.states[id])) ?? null;
}

export function readCar(hass: HomeAssistant, spot: Pick<Furniture, "entity" | "car">): CarInfo | null {
  const links = spot.car ?? {};
  const anchor = ref(links.device) ?? ref(links.tracker) ?? ref(spot.entity);
  const all = siblings(hass, anchor);
  if (!all.length && !ref(links.soc)) return null;
  const domain = (id: string) => id.split(".")[0];
  const dc = (st: HassEntity) => String(attr(st, "device_class") ?? "");
  const unit = (st: HassEntity) => String(attr(st, "unit_of_measurement") ?? "");

  const socId = pick(hass, ref(links.soc), all, (id, st) => domain(id) === "sensor" && unit(st) === "%" && (dc(st) === "battery" || word(id, "battery_level", "soc", "state_of_charge", "ladezustand")) && !word(id, "usable"));
  const rangeId = pick(hass, ref(links.range), all, (id, st) => domain(id) === "sensor" && (dc(st) === "distance" || word(id, "range", "reichweite")) && !word(id, "odometer", "ideal", "elevation", "kilometerstand"));
  const powerId = pick(hass, null, all, (id, st) => domain(id) === "sensor" && dc(st) === "power" && word(id, "charg", "lade"));
  const chargingSet = ref(links.charging);
  const chargingBin = pick(hass, chargingSet && domain(chargingSet) === "binary_sensor" ? chargingSet : null, all, (id, st) => domain(id) === "binary_sensor" && (dc(st) === "battery_charging" || word(id, "charging", "charger", "laden")));
  const pluggedId = pick(hass, ref(links.plugged), all, (id, st) => domain(id) === "binary_sensor" && (dc(st) === "plug" || word(id, "plug", "cable", "kabel")));
  const lockId = pick(hass, ref(links.lock), all, (id) => domain(id) === "lock");
  const climateId = pick(hass, ref(links.climate), all, (id) => domain(id) === "climate");
  const chargeSwitch = pick(hass, chargingSet && /^(switch|input_boolean)\./.test(chargingSet) ? chargingSet : null, all, (id) => domain(id) === "switch" && word(id, "charg", "laden") && !word(id, "port", "klappe"));
  const trackerId = pick(hass, ref(links.tracker), all, (id) => domain(id) === "device_tracker") ?? (ref(spot.entity)?.startsWith("device_tracker.") ? ref(spot.entity) : null);
  const insideId = pick(hass, null, all, (id, st) => domain(id) === "sensor" && dc(st) === "temperature" && word(id, "inside", "innen", "interior", "cabin"));

  const st = (id: string | null) => (id ? hass.states[id] : undefined);
  const soc = num(st(socId));
  const rangeSt = st(rangeId);
  // charging power: a power sensor (W or kW), else a "charging" sensor that reports power
  let chargingW: number | null = null;
  const p = st(powerId) ?? (chargingSet && domain(chargingSet) === "sensor" ? st(chargingSet) : undefined);
  if (p) {
    const v = num(p);
    if (v !== null) chargingW = Math.max(0, unit(p).toLowerCase() === "kw" ? v * 1000 : v);
  }
  const chargingState = st(chargingBin)?.state ?? st(chargeSwitch)?.state;
  const charging = chargingState === "on" || (chargingW !== null && chargingW > 50);
  const pluggedState = st(pluggedId)?.state;
  const lockState = st(lockId)?.state;
  const climate = st(climateId);
  const tracker = st(trackerId);
  // home: the spot's presence entity says so (the car stands in the 3D spot); else the tracker
  const presence = st(ref(spot.entity));
  const home = presence ? ["on", "home", "true", "present", "occupied", "detected", "parked"].includes(presence.state.toLowerCase()) : tracker?.state === "home";
  const zone = tracker && tracker.state !== "home" && tracker.state !== "not_home" ? tracker.state : null;
  const zoneName = zone ? String(st(`zone.${zone}`)?.attributes.friendly_name ?? zone) : null;
  return {
    home,
    soc,
    range: num(rangeSt),
    rangeUnit: rangeSt ? unit(rangeSt) || "km" : "km",
    chargingW,
    charging,
    plugged: pluggedState === undefined ? null : pluggedState === "on",
    locked: lockState === undefined ? null : lockState === "locked",
    climateOn: climate ? climate.state !== "off" && climate.state !== "unavailable" : null,
    inside: num(st(insideId)),
    where: home ? null : zoneName,
    entities: { lock: lockId, climate: climateId, charge: chargeSwitch, tracker: trackerId },
  };
}

/** The charge level's colour: red when low, amber in the middle, green when well charged. */
export function socColor(soc: number | null): string {
  if (soc === null) return "#8aa0c8";
  if (soc < 20) return "#f87171";
  if (soc < 50) return "#facc15";
  return "#4ade80";
}
