// Energy balance: reads power values from Home Assistant and the consumers placed in the plan, and proposes
// sensors from the energy dashboard. Plain functions, no three.js. The moving particles are in
// live/energy-flow.ts and viewer/live-energy.ts; this file only deals with the numbers.

import { entityAreaId, isHubDevice, powerSensorsOf } from "./devices.ts";
import { generateWalls, wallOptions } from "./geometry/walls.ts";
import type { Building, EnergySettings, Furniture } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

export interface EnergySummary {
  /** Grid power in W: positive is import, negative is export. */
  grid: number | null;
  solar: number | null;
  /** Battery power in W: positive is discharging, negative is charging. */
  battery: number | null;
  soc: number | null;
  tariff: { value: number; unit: string } | null;
  /** What the house uses in W: the consumption sensor, else the balance, else the sum of the consumers. */
  consumption: number | null;
  /** Advanced energy mode only: each sub-meter's reading, the solar and battery power behind it, and what its own floors use (see subMeterBalance). */
  subMeters?: SubMeterBalance[];
  /** Advanced energy mode only: what the main meter's own branch uses (the consumption minus the sub-meters' own use, at least 0). */
  rest?: number | null;
}

export interface Consumer {
  /** The placed entity. */
  id: string;
  powerEntity: string;
  floorId: string;
  x: number;
  z: number;
  power: number;
  /** A wallbox: its cable gets its own colour. */
  wallbox?: boolean;
}

export interface DeviceSensors {
  grid: string | null;
  /** A meter's separate export sensor (its power sensor then reports import only). */
  gridExport: string | null;
  solar: string[];
  battery: string[];
  /** Separate charging sensors, for batteries whose power sensor only reports discharging. */
  charge: string[];
  /** Each battery with its sensors: one signed power sensor, or discharge plus a separate charge sensor. */
  batteries: { power: string | null; charge: string | null }[];
  soc: string[];
  /** Advanced energy mode only: the meters that hang off another meter, with their sensor and the floors they feed. */
  subMeters?: SubMeterSensors[];
}

export interface SubMeterSensors {
  id: string;
  parent: string;
  power: string | null;
  invert: boolean;
  floors: string[];
  /** The inverters and home batteries hanging off this meter (a balcony plant behind a flat's meter). */
  solar: string[];
  batteries: { power: string | null; charge: string | null }[];
}

export interface SubMeterBalance {
  id: string;
  parent: string;
  /** The meter's reading in W: + = the branch draws from its parent, − = it feeds back; null without a number. */
  power: number | null;
  /** Solar production and battery power (+ = discharging) of the devices hanging off this meter. */
  solar: number;
  battery: number;
  /** What the floors of this meter use themselves, without the meters below it (at least 0). */
  use: number | null;
  /** Of that, what no placed consumer on its floors measures (at least 0); shown only, never added to a total. */
  unmetered: number | null;
}

const usable = (id: string | null | undefined): string | null => (id && id !== "none" ? id : null);

const addOnce = (list: string[], id: string | null) => {
  if (id && !list.includes(id)) list.push(id);
};

const metersOf = (building: Building): Map<string, Furniture> =>
  new Map(building.floors.flatMap((floor) => floor.furniture.filter((f) => f.type === "meter").map((f) => [f.id, f] as const)));

/**
 * Advanced energy mode: the meter a meter hangs off, null for a main meter (and always null with the mode off).
 * A parent that is gone, the meter itself, or a loop of meters counts as none, so a broken chain never hides the grid.
 */
export function meterParent(building: Building, meter: Furniture): string | null {
  if (!building.energy.advanced || meter.type !== "meter" || !meter.parent_meter) return null;
  const meters = metersOf(building);
  const seen = new Set([meter.id]);
  for (let at = meters.get(meter.parent_meter); at; at = meters.get(at.parent_meter ?? "")) {
    if (seen.has(at.id)) return null;
    seen.add(at.id);
  }
  return meters.has(meter.parent_meter) ? meter.parent_meter : null;
}

/** The ids of the meters that hang off another meter (empty with the advanced energy mode off). */
export function subMeterIds(building: Building): Set<string> {
  return new Set([...metersOf(building).values()].filter((m) => meterParent(building, m)).map((m) => m.id));
}

/**
 * Advanced energy mode: the sub-meter an inverter or home battery hangs off, null for the main meter (also when the
 * chosen meter is gone or is no sub-meter).
 */
export function deviceMeter(building: Building, device: Furniture): string | null {
  if (!building.energy.advanced || !device.parent_meter) return null;
  return subMeterIds(building).has(device.parent_meter) ? device.parent_meter : null;
}

/**
 * A sub-meter's label with "show unmetered" on: what its floors use, and the part no placed device measures (null
 * when that is all of it). Null with the option off; the label then shows the meter's reading.
 */
export function subMeterLabel(building: Building, summary: EnergySummary, meterId: string): { use: number; unmetered: number | null } | null {
  const m = building.energy.show_unmetered ? summary.subMeters?.find((s) => s.id === meterId) : undefined;
  if (!m || m.use === null) return null;
  return { use: m.use, unmetered: m.unmetered !== null && m.unmetered < m.use ? m.unmetered : null };
}

/** Whether `meter` may hang off `candidate`: another meter that does not itself hang (directly or further down) off `meter`. */
export function canHangOff(building: Building, meter: Furniture, candidate: Furniture): boolean {
  if (candidate.type !== "meter" || candidate.id === meter.id) return false;
  const meters = metersOf(building);
  const seen = new Set<string>();
  for (let at: Furniture | undefined = candidate; at && !seen.has(at.id); at = meters.get(at.parent_meter ?? "")) {
    if (at.id === meter.id) return false;
    seen.add(at.id);
  }
  return true;
}

/**
 * The sensors of the energy devices placed in the plan (meter, inverters, home batteries). `powerOf` says which
 * power sensor an item uses: by default its own field. Several inverters add up.
 */
export function deviceSensors(building: Building, powerOf: (f: Furniture) => string | null = (f) => usable(f.power)): DeviceSensors {
  const found: DeviceSensors = { grid: null, gridExport: null, solar: [], battery: [], charge: [], batteries: [], soc: [] };
  for (const piece of building.floors.flatMap((floor) => floor.furniture)) {
    const power = powerOf(piece);
    const parent = piece.type === "meter" ? meterParent(building, piece) : null;
    if (parent) {
      // advanced energy mode: a sub-meter measures its branch, not the grid
      (found.subMeters ??= []).push({ id: piece.id, parent, power, invert: !!piece.meter_invert, floors: piece.meter_floors ?? [], solar: [], batteries: [] });
    } else if (piece.type === "meter") {
      found.grid ??= power;
      found.gridExport ??= usable(piece.export);
    } else if (piece.type === "inverter") {
      addOnce(found.solar, power);
    } else if (piece.type === "home_battery") {
      const charge = usable(piece.charge);
      addOnce(found.battery, power);
      addOnce(found.charge, charge);
      addOnce(found.soc, usable(piece.soc));
      if (power || charge) found.batteries.push({ power, charge });
    }
  }
  // advanced energy mode: inverters and batteries behind a sub-meter (they still count in the totals above)
  for (const piece of found.subMeters ? building.floors.flatMap((floor) => floor.furniture) : []) {
    const meter = piece.type === "inverter" || piece.type === "home_battery" ? found.subMeters?.find((m) => m.id === deviceMeter(building, piece)) : undefined;
    const power = meter ? powerOf(piece) : null;
    if (meter && piece.type === "inverter") addOnce(meter.solar, power);
    const charge = usable(piece.charge);
    if (meter && piece.type === "home_battery" && (power || charge)) meter.batteries.push({ power, charge });
  }
  return found;
}

/** Where the cables meet: the (main) meter cabinet in the plan, else the spot from the energy settings. */
export function meterPosition(building: Building): { floor_id: string; x: number; z: number } | null {
  for (const floor of building.floors) {
    const cabinet = floor.furniture.find((f) => f.type === "meter" && !meterParent(building, f));
    if (cabinet) return { floor_id: floor.id, x: cabinet.x, z: cabinet.z };
  }
  return building.energy.meter;
}

/** The energy dashboard preferences of Home Assistant (`energy/get_prefs`), as far as proposals need them. */
export interface EnergyPrefs {
  energy_sources?: {
    type: string;
    stat_energy_from?: string;
    stat_energy_to?: string;
    flow_from?: { stat_energy_from: string }[];
    flow_to?: { stat_energy_to: string }[];
  }[];
}

const PHASE_OR_PERIOD = /(phase|_l[123]\b|_[abc]$|today|daily|heute)/;
const ENERGY_WORDS = /_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g;

/**
 * The power sensor (W) that goes with an energy statistic: a sensor of the same device. With several, a total
 * (not a single phase or a daily value) whose name resembles the statistic's wins.
 */
function powerSensorOfStatistic(hass: HomeAssistant, statistic: string | undefined, deviceClass = "power"): string | null {
  const device = statistic ? hass.entities?.[statistic]?.device_id : undefined;
  if (!statistic || !device) return null;
  const sameDevice = Object.keys(hass.states).filter((id) => id.startsWith("sensor.") && hass.entities?.[id]?.device_id === device && hass.states[id]?.attributes.device_class === deviceClass);
  if (sameDevice.length <= 1) return sameDevice[0] ?? null;
  const totals = sameDevice.filter((id) => !PHASE_OR_PERIOD.test(id));
  const stem = statistic.replace(/^sensor\./, "").replace(ENERGY_WORDS, "");
  return totals.find((id) => stem && id.includes(stem)) ?? totals[0] ?? sameDevice[0];
}

/** Energy balance sensors proposed from the energy dashboard: grid, solar, battery and its charge level. */
export function proposeEnergySensors(hass: HomeAssistant, prefs: EnergyPrefs): Partial<EnergySettings> {
  const proposal: Partial<EnergySettings> = {};
  // the first source of each kind that has a matching power sensor decides
  const offer = (field: "grid" | "solar" | "battery" | "battery_soc", sensor: string | null) => {
    if (sensor && !proposal[field]) proposal[field] = sensor;
  };
  for (const source of prefs.energy_sources ?? []) {
    if (source.type === "grid") {
      offer("grid", powerSensorOfStatistic(hass, source.flow_from?.[0]?.stat_energy_from ?? source.flow_to?.[0]?.stat_energy_to));
    } else if (source.type === "solar") {
      offer("solar", powerSensorOfStatistic(hass, source.stat_energy_from));
    } else if (source.type === "battery") {
      const statistic = source.stat_energy_from ?? source.stat_energy_to;
      offer("battery", powerSensorOfStatistic(hass, statistic));
      offer("battery_soc", powerSensorOfStatistic(hass, statistic, "battery"));
    }
  }
  return proposal;
}

/** A power state in watts (kW and MW are converted), optionally with the sign flipped. Null when it is no number. */
export function readPower(st: HassEntity | undefined, invert = false): number | null {
  const value = st ? Number(st.state) : NaN;
  if (!Number.isFinite(value)) return null;
  const factor = { kW: 1e3, MW: 1e6 }[String(st!.attributes.unit_of_measurement ?? "W")] ?? 1;
  return invert ? -value * factor : value * factor;
}

const isPowerSensor = (hass: HomeAssistant, id: string): boolean => id.startsWith("sensor.") && hass.states[id]?.attributes.device_class === "power";

/**
 * The power sensor of a placed entity: the entity itself, or a power sensor on the same device. A hub (one device
 * for the whole house, entities in several areas) only counts a sensor from the entity's own area, otherwise every
 * light of the house would get the hub's first meter.
 */
export function powerSensorFor(hass: HomeAssistant, entityId: string): string | null {
  if (isPowerSensor(hass, entityId)) return entityId;
  const device = hass.entities?.[entityId]?.device_id;
  if (!device) return null;
  const onHub = isHubDevice(hass, device);
  const area = onHub ? entityAreaId(hass, entityId) : null;
  const candidates = powerSensorsOf(hass, device).filter((id) => id !== entityId);
  return (onHub ? candidates.find((id) => area !== null && entityAreaId(hass, id) === area) : candidates[0]) ?? null;
}

/** Placed entities that report power, with their position and current draw. */
export function findConsumers(hass: HomeAssistant, building: Building): Consumer[] {
  const { grid, solar, battery } = building.energy;
  const taken = new Set<string>([grid, solar, battery].filter((id): id is string => !!id));
  const consumers: Consumer[] = [];
  for (const floor of building.floors) {
    for (const placed of floor.placements) {
      const sensor = powerSensorFor(hass, placed.entity_id);
      if (!sensor || taken.has(sensor)) continue;
      taken.add(sensor); // a sensor is shown once, even when two entities share it
      consumers.push({ id: placed.entity_id, powerEntity: sensor, floorId: floor.id, x: placed.x, z: placed.z, power: Math.max(0, readPower(hass.states[sensor]) ?? 0) });
    }
  }
  return consumers;
}

const total = (values: (number | null)[]): number | null => {
  const numbers = values.filter((v): v is number => v !== null);
  return numbers.length ? numbers.reduce((sum, v) => sum + v, 0) : null;
};

function gridPower(hass: HomeAssistant, e: EnergySettings, devices: DeviceSensors): number | null {
  const id = e.grid ?? devices.grid;
  const imported = id ? readPower(hass.states[id], e.grid_invert) : null;
  // a meter with a separate export sensor: its power sensor is the import, the export is subtracted
  if (!e.grid && devices.gridExport) {
    const exported = Math.max(0, readPower(hass.states[devices.gridExport]) ?? 0);
    return Math.max(0, imported ?? 0) - exported;
  }
  return imported;
}

function solarPower(hass: HomeAssistant, e: EnergySettings, devices: DeviceSensors): number | null {
  if (e.solar) return readPower(hass.states[e.solar], !!e.solar_invert);
  return devices.solar.length ? total(devices.solar.map((id) => readPower(hass.states[id], !!e.solar_invert))) : null;
}

/** One battery: a signed sensor (+ discharging, flipped on request), or discharge minus a separate charge sensor. */
export function oneBattery(hass: HomeAssistant, b: { power: string | null; charge: string | null }, invert: boolean): number | null {
  if (!b.charge) return b.power ? readPower(hass.states[b.power], invert) : null;
  const discharging = b.power ? Math.max(0, readPower(hass.states[b.power]) ?? 0) : 0;
  return discharging - Math.max(0, readPower(hass.states[b.charge]) ?? 0);
}

function batteryPower(hass: HomeAssistant, e: EnergySettings, devices: DeviceSensors): number | null {
  if (e.battery) return readPower(hass.states[e.battery], e.battery_invert);
  return total(devices.batteries.map((b) => oneBattery(hass, b, e.battery_invert)));
}

/** Everything the energy view shows. Sensors set in the energy settings win over those of placed devices. */
export function energySummary(hass: HomeAssistant, building: Building, consumers: Consumer[], devices: DeviceSensors = deviceSensors(building)): EnergySummary {
  const e = building.energy;
  const grid = gridPower(hass, e, devices);
  const solar = solarPower(hass, e, devices);
  const battery = batteryPower(hass, e, devices);

  // several batteries: the average charge
  const socValues = (e.battery_soc ? [e.battery_soc] : devices.soc).map((id) => Number(hass.states[id]?.state)).filter(Number.isFinite);
  const soc = socValues.length ? socValues.reduce((a, b) => a + b, 0) / socValues.length : null;

  const tariffState = e.tariff ? hass.states[e.tariff] : undefined;
  const tariffValue = Number(tariffState?.state);

  let consumption: number | null = e.consumption ? readPower(hass.states[e.consumption]) : null;
  if (consumption === null && (grid !== null || solar !== null || battery !== null)) consumption = (grid ?? 0) + Math.max(0, solar ?? 0) + (battery ?? 0);
  if (consumption === null && consumers.length > 0) consumption = consumers.reduce((sum, c) => sum + c.power, 0);

  const summary: EnergySummary = {
    grid,
    solar: solar === null ? null : Math.max(0, solar),
    battery,
    soc,
    tariff: tariffState && Number.isFinite(tariffValue) ? { value: tariffValue, unit: String(tariffState.attributes.unit_of_measurement ?? "") } : null,
    consumption: consumption === null ? null : Math.max(0, consumption),
  };
  return devices.subMeters ? { ...summary, ...subMeterBalance(hass, devices, summary.consumption, e.battery_invert, consumers, !!e.solar_invert) } : summary;
}

/**
 * Advanced energy mode: the balance of each sub-meter, and the rest of the house (stairs, heating, the owner's flat).
 *
 *   use(M) = reading(M) + solar(M) + battery(M) − Σ reading(C)     (C = the meters hanging directly off M)
 *   rest   = consumption − Σ use(M)                                (over all sub-meters)
 *
 * The reading is signed (+ = M draws from its parent, − = it feeds back), so a child's own solar is already inside
 * its reading; summed over a branch the use telescopes to the readings below the main meter plus the solar and
 * batteries behind them, nothing is counted twice. Both are kept at 0 or above: with a meter that only reports
 * import (it never goes negative) a branch's surplus is unknown and its use comes out too high, rather than guessed.
 *
 *   unmetered(M) = use(M) − Σ power of the consumers placed on M's floors     (at least 0)
 *
 * The consumers on a floor belong to the first sub-meter naming it (as in the 3D flow); the energy devices' own
 * sensors (meters, inverters, batteries) are no consumers here. This is display only and goes into no total.
 */
function subMeterBalance(hass: HomeAssistant, devices: DeviceSensors, consumption: number | null, batteryInvert: boolean, consumers: Consumer[], solarInvert = false): Pick<EnergySummary, "subMeters" | "rest"> {
  const meters = devices.subMeters ?? [];
  const owner = new Map<string, string>();
  for (const m of meters) for (const floorId of m.floors) if (!owner.has(floorId)) owner.set(floorId, m.id);
  const ownSensors = new Set([devices.grid, devices.gridExport, ...devices.solar, ...devices.battery, ...devices.charge, ...meters.flatMap((m) => [m.power, ...m.solar, ...m.batteries.flatMap((b) => [b.power, b.charge])])]);
  const measured = (id: string) => consumers.filter((c) => owner.get(c.floorId) === id && !ownSensors.has(c.powerEntity)).reduce((sum, c) => sum + c.power, 0);
  const readings = new Map(meters.map((m) => [m.id, m.power ? readPower(hass.states[m.power], m.invert) : null]));
  const subMeters = meters.map((m): SubMeterBalance => {
    const power = readings.get(m.id) ?? null;
    const solar = m.solar.reduce((sum, id) => sum + Math.max(0, readPower(hass.states[id], solarInvert) ?? 0), 0);
    const battery = m.batteries.reduce((sum, b) => sum + (oneBattery(hass, b, batteryInvert) ?? 0), 0);
    const children = meters.filter((c) => c.parent === m.id).reduce((sum, c) => sum + (readings.get(c.id) ?? 0), 0);
    const use = power === null ? null : Math.max(0, power + solar + battery - children);
    return { id: m.id, parent: m.parent, power, solar, battery, use, unmetered: use === null ? null : Math.max(0, use - measured(m.id)) };
  });
  const used = subMeters.reduce((sum, m) => sum + (m.use ?? 0), 0);
  return { subMeters, rest: consumption === null ? null : Math.max(0, consumption - used) };
}

/** Closest point on a wall segment to a position, with the segment's unit normal pointing away from `awayFrom`. */
function nearestOnWall(wall: { a: [number, number]; b: [number, number] }, at: { x: number; z: number }, awayFrom: { x: number; z: number }) {
  const dx = wall.b[0] - wall.a[0];
  const dz = wall.b[1] - wall.a[1];
  const length = Math.hypot(dx, dz) || 1;
  const along = Math.min(1, Math.max(0, ((at.x - wall.a[0]) * dx + (at.z - wall.a[1]) * dz) / (length * length)));
  const x = wall.a[0] + dx * along;
  const z = wall.a[1] + dz * along;
  const sign = ((dz / length) * (x - awayFrom.x) + (-dx / length) * (z - awayFrom.z)) < 0 ? -1 : 1;
  return { x, z, nx: (sign * dz) / length, nz: (-sign * dx) / length, distance: Math.hypot(at.x - x, at.z - z) };
}

/** A first spot for the grid connection: a few metres outside the outer wall nearest to the meter, away from the house. */
export function suggestGridSpot(building: Building): { floorId: string; x: number; z: number } | null {
  const meter = meterPosition(building);
  const floor = meter ? building.floors.find((f) => f.id === meter.floor_id) : undefined;
  if (!meter || !floor) return null;
  const thickness = wallOptions(building.settings);
  const outerWalls = generateWalls(floor.rooms, thickness, floor.walls ?? []).walls.filter((w) => w.exterior);
  const corners = floor.rooms.flatMap((room) => room.points);
  if (outerWalls.length === 0 || corners.length === 0) return null;
  const centre = { x: corners.reduce((s, p) => s + p[0], 0) / corners.length, z: corners.reduce((s, p) => s + p[1], 0) / corners.length };
  const nearest = outerWalls.map((w) => nearestOnWall(w, meter, centre)).reduce((best, hit) => (hit.distance < best.distance ? hit : best));
  const out = thickness.exterior / 2 + 3;
  return { floorId: floor.id, x: nearest.x + nearest.nx * out, z: nearest.z + nearest.nz * out };
}
