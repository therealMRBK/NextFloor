// Energy balance: power values from Home Assistant and the consumers placed in the plan. Pure functions, no three.js.
//
// The glowing particles themselves (where the power goes and how fast) live in lh/energy-flow.ts and
// viewer/live-energy.ts; this file only reads the numbers and proposes sensors.

import { generateWalls } from "./geometry/walls.ts";
import type { Building, EnergySettings, Furniture } from "./model.ts";
import { entityAreaId, isHubDevice, powerSensorsOf } from "./devices.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";


export interface EnergySummary {
  /** Grid power (W): positive = import, negative = export. */
  grid: number | null;
  solar: number | null;
  /** Battery power (W): positive = discharging, negative = charging. */
  battery: number | null;
  soc: number | null;
  tariff: { value: number; unit: string } | null;
  /** House consumption (W) from the balance, or the sum of the consumers. */
  consumption: number | null;
}

export interface Consumer {
  /** Placed entity (device) id. */
  id: string;
  powerEntity: string;
  floorId: string;
  x: number;
  z: number;
  power: number;
  /** A wallbox: its cable is drawn in its own colour. */
  wallbox?: boolean;
}

export interface DeviceSensors {
  grid: string | null;
  /** The meter's separate export sensor (its power sensor then reports import only). */
  gridExport: string | null;
  solar: string[];
  battery: string[];
  /** Separate charging power sensors (batteries whose power sensor only reports discharging). */
  charge: string[];
  /** Every battery with its own sensors: a signed power sensor, or discharging plus a separate charging sensor. */
  batteries: { power: string | null; charge: string | null }[];
  soc: string[];
}

const ref = (v: string | null | undefined) => (v && v !== "none" ? v : null);

/**
 * The sensors of the energy devices in the plan: `power` tells the power sensor of an item (its own field, or
 * the one found on its device). Several inverters add up.
 */
export function deviceSensors(building: Building, power: (f: Furniture) => string | null = (f) => ref(f.power)): DeviceSensors {
  const out: DeviceSensors = { grid: null, gridExport: null, solar: [], battery: [], charge: [], batteries: [], soc: [] };
  for (const floor of building.floors) {
    for (const f of floor.furniture) {
      const p = power(f);
      if (f.type === "meter") {
        out.grid ??= p;
        out.gridExport ??= ref(f.export);
      }
      else if (f.type === "inverter" && p && !out.solar.includes(p)) out.solar.push(p);
      else if (f.type === "home_battery") {
        if (p && !out.battery.includes(p)) out.battery.push(p);
        const charge = ref(f.charge);
        if (charge && !out.charge.includes(charge)) out.charge.push(charge);
        if (p || charge) out.batteries.push({ power: p, charge });
        const soc = ref(f.soc);
        if (soc && !out.soc.includes(soc)) out.soc.push(soc);
      }
    }
  }
  return out;
}

/** Where the cables meet: the meter cabinet in the plan, else the meter spot set in the energy settings. */
export function meterPosition(building: Building): { floor_id: string; x: number; z: number } | null {
  for (const floor of building.floors) {
    const m = floor.furniture.find((f) => f.type === "meter");
    if (m) return { floor_id: floor.id, x: m.x, z: m.z };
  }
  return building.energy.meter;
}

/** Home Assistant's energy dashboard settings (`energy/get_prefs`), as far as the proposals need them. */
export interface EnergyPrefs {
  energy_sources?: {
    type: string;
    stat_energy_from?: string;
    stat_energy_to?: string;
    flow_from?: { stat_energy_from: string }[];
    flow_to?: { stat_energy_to: string }[];
  }[];
}

/** The power sensor (W) that belongs to an energy statistic: one of the same device, named like it if there are several. */
function powerOfDevice(hass: HomeAssistant, statId: string | undefined, deviceClass = "power"): string | null {
  if (!statId) return null;
  const device = hass.entities?.[statId]?.device_id;
  if (!device) return null;
  const candidates = Object.keys(hass.states).filter((id) => id.startsWith("sensor.") && hass.entities?.[id]?.device_id === device && hass.states[id]?.attributes.device_class === deviceClass);
  if (candidates.length <= 1) return candidates[0] ?? null;
  // a total over several phases rather than a single phase or a daily value
  const total = candidates.filter((id) => !/(phase|_l[123]\b|_[abc]$|today|daily|heute)/.test(id));
  const stem = statId.replace(/^sensor\./, "").replace(/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g, "");
  return total.find((id) => stem && id.includes(stem)) ?? total[0] ?? candidates[0];
}

/** Sensors for the energy balance proposed from the energy dashboard: grid, solar, battery and its charge. */
export function proposeEnergySensors(hass: HomeAssistant, prefs: EnergyPrefs): Partial<EnergySettings> {
  const out: Partial<EnergySettings> = {};
  for (const src of prefs.energy_sources ?? []) {
    if (src.type === "grid") {
      const stat = src.flow_from?.[0]?.stat_energy_from ?? src.flow_to?.[0]?.stat_energy_to;
      const p = powerOfDevice(hass, stat);
      if (p && !out.grid) out.grid = p;
    } else if (src.type === "solar") {
      const p = powerOfDevice(hass, src.stat_energy_from);
      if (p && !out.solar) out.solar = p;
    } else if (src.type === "battery") {
      const p = powerOfDevice(hass, src.stat_energy_from ?? src.stat_energy_to);
      if (p && !out.battery) out.battery = p;
      const soc = powerOfDevice(hass, src.stat_energy_from ?? src.stat_energy_to, "battery");
      if (soc && !out.battery_soc) out.battery_soc = soc;
    }
  }
  return out;
}
/** Distance of the cable ring from the wall face. */
export function readPower(st: HassEntity | undefined, invert = false): number | null {
  if (!st) return null;
  const v = Number(st.state);
  if (!Number.isFinite(v)) return null;
  const unit = String(st.attributes.unit_of_measurement ?? "W");
  const w = unit === "kW" ? v * 1000 : unit === "MW" ? v * 1e6 : v;
  return invert ? -w : w;
}

function isPowerSensor(hass: HomeAssistant, id: string): boolean {
  return id.startsWith("sensor.") && hass.states[id]?.attributes.device_class === "power";
}

/**
 * Power sensor of a placed entity: the entity itself, or a power sensor of the same device. On a hub (one
 * device for a whole house, its entities in several areas) only a power sensor in the entity's own area
 * counts, else every light of the house would get the first meter of the hub (#243).
 */
export function powerSensorFor(hass: HomeAssistant, entityId: string): string | null {
  if (isPowerSensor(hass, entityId)) return entityId;
  const device = hass.entities?.[entityId]?.device_id;
  if (!device) return null;
  const hub = isHubDevice(hass, device);
  const area = hub ? entityAreaId(hass, entityId) : null;
  return powerSensorsOf(hass, device).find((e) => e !== entityId && (!hub || (area !== null && entityAreaId(hass, e) === area))) ?? null;
}

/** Placed entities that report power, with their position and current power. */
export function findConsumers(hass: HomeAssistant, building: Building): Consumer[] {
  const e = building.energy;
  const sources = new Set([e.grid, e.solar, e.battery].filter(Boolean));
  const out: Consumer[] = [];
  const seen = new Set<string>();
  for (const floor of building.floors) {
    for (const pl of floor.placements) {
      const sensor = powerSensorFor(hass, pl.entity_id);
      if (!sensor || sources.has(sensor) || seen.has(sensor)) continue;
      seen.add(sensor);
      out.push({ id: pl.entity_id, powerEntity: sensor, floorId: floor.id, x: pl.x, z: pl.z, power: Math.max(0, readPower(hass.states[sensor]) ?? 0) });
    }
  }
  return out;
}

export function energySummary(hass: HomeAssistant, building: Building, consumers: Consumer[], devices: DeviceSensors = deviceSensors(building)): EnergySummary {
  const e = building.energy;
  // the balance sensors win; without them the placed devices bring theirs (the meter, the inverters, the battery)
  const gridId = e.grid ?? devices.grid;
  let grid = gridId ? readPower(hass.states[gridId], e.grid_invert) : null;
  // a meter with a separate export sensor: the power sensor is its import, the export is taken off
  if (!e.grid && devices.gridExport) {
    const exp = Math.max(0, readPower(hass.states[devices.gridExport]) ?? 0);
    grid = Math.max(0, grid ?? 0) - exp;
  }
  let solar: number | null = e.solar ? readPower(hass.states[e.solar]) : null;
  if (!e.solar && devices.solar.length) {
    const values = devices.solar.map((id) => readPower(hass.states[id])).filter((v): v is number => v !== null);
    solar = values.length ? values.reduce((a, b) => a + b, 0) : null;
  }
  let battery: number | null = e.battery ? readPower(hass.states[e.battery], e.battery_invert) : null;
  if (!e.battery && devices.batteries.length) {
    // every battery on its own: a signed sensor (+ = discharging, inverted on request), or discharging and a
    // separate charging sensor (then the signs do not matter)
    const values = devices.batteries
      .map((bat) => {
        if (bat.charge) {
          const out = bat.power ? Math.max(0, readPower(hass.states[bat.power]) ?? 0) : 0;
          const inp = Math.max(0, readPower(hass.states[bat.charge]) ?? 0);
          return out - inp;
        }
        return bat.power ? readPower(hass.states[bat.power], e.battery_invert) : null;
      })
      .filter((v): v is number => v !== null);
    battery = values.length ? values.reduce((a, b) => a + b, 0) : null;
  }
  // several batteries: their charge is averaged
  const socIds = e.battery_soc ? [e.battery_soc] : devices.soc;
  const socs = socIds.map((id) => Number(hass.states[id]?.state)).filter((v) => Number.isFinite(v));
  const socState = socs.length ? socs.reduce((a, b) => a + b, 0) / socs.length : NaN;
  const tariffState = e.tariff ? hass.states[e.tariff] : undefined;
  const tariffValue = Number(tariffState?.state);
  let consumption: number | null = e.consumption ? readPower(hass.states[e.consumption]) : null;
  if (consumption !== null) consumption = Math.max(0, consumption);
  else if (grid !== null || solar !== null || battery !== null) consumption = Math.max(0, (grid ?? 0) + Math.max(0, solar ?? 0) + (battery ?? 0));
  else if (consumers.length) consumption = consumers.reduce((s, c) => s + c.power, 0);
  return {
    grid,
    solar: solar === null ? null : Math.max(0, solar),
    battery,
    soc: Number.isFinite(socState) ? socState : null,
    tariff: tariffState && Number.isFinite(tariffValue) ? { value: tariffValue, unit: String(tariffState.attributes.unit_of_measurement ?? "") } : null,
    consumption,
  };
}

// ------------------------------------------------------------------ routing graph


/**
 * A sensible first spot for the grid connection: just outside the exterior wall nearest to the meter, on the side
 * facing away from the house, a few metres out.
 */
export function suggestGridSpot(building: Building): { floorId: string; x: number; z: number } | null {
  const meter = meterPosition(building);
  const floor = meter ? building.floors.find((f) => f.id === meter.floor_id) : undefined;
  if (!meter || !floor) return null;
  const { wall_exterior: ext, wall_interior: int } = building.settings;
  const walls = generateWalls(floor.rooms, { exterior: ext, interior: int }, floor.walls ?? []).walls.filter((w) => w.exterior);
  const points = floor.rooms.flatMap((r) => r.points);
  if (walls.length === 0 || points.length === 0) return null;
  const cx = points.reduce((s, p) => s + p[0], 0) / points.length;
  const cz = points.reduce((s, p) => s + p[1], 0) / points.length;

  let best: { x: number; z: number; nx: number; nz: number; d: number } | null = null;
  for (const w of walls) {
    const dx = w.b[0] - w.a[0];
    const dz = w.b[1] - w.a[1];
    const len = Math.hypot(dx, dz) || 1;
    const t = Math.min(1, Math.max(0, ((meter.x - w.a[0]) * dx + (meter.z - w.a[1]) * dz) / (len * len)));
    const x = w.a[0] + dx * t;
    const z = w.a[1] + dz * t;
    const d = Math.hypot(meter.x - x, meter.z - z);
    if (best && d >= best.d) continue;
    // the wall's normal, turned to point away from the middle of the house
    let nx = dz / len;
    let nz = -dx / len;
    if (nx * (x - cx) + nz * (z - cz) < 0) {
      nx = -nx;
      nz = -nz;
    }
    best = { x, z, nx, nz, d };
  }
  if (!best) return null;
  const out = ext / 2 + 3;
  return { floorId: floor.id, x: best.x + best.nx * out, z: best.z + best.nz * out };
}
