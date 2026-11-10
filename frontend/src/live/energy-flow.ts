/**
 * Where the power goes right now, as NextFloor draws it (see viewer/live-energy.ts): arcs between the devices
 * placed in the plan, sparkling solar modules, and the numbers for the house card.
 *
 *  - every solar field sends its share of the production to the inverter
 *  - the battery charges from the house or discharges into it
 *  - the grid connection delivers to the house or takes the export
 *  - the house feeds every consumer that reports its power (a wallbox in its own colour)
 *  - advanced energy mode: each sub-meter draws from the meter it hangs off (or feeds back into it) and feeds the
 *    consumers on its floors; an inverter or battery behind a sub-meter works into that sub-meter
 *
 * "The house" is where the cables meet: the meter cabinet, else the inverter, else the middle of the ground floor.
 */
import { deviceMeter, deviceSensors, energySummary, findConsumers, oneBattery, readPower, subMeterIds, type Consumer, type EnergySummary } from "../energy.ts";
import type { Building, EnergyRoute, Floor, Furniture, SolarField } from "../model.ts";
import { fieldFace, fieldModules, roofFaces, topFloor, wallFaces, GROUND, groundFloor } from "../solar.ts";
import type { HomeAssistant } from "../types.ts";
import type { EnergyArc, PlanPoint, SparkField } from "../viewer/live-energy.ts";

/** Colours of the particles: sun, battery, grid import and export, the house's own cables, the wallbox. */
export const ENERGY_COLORS: Record<"solar" | "battery" | "import" | "export" | "house" | "wallbox", [number, number, number]> = {
  solar: [255, 196, 46],
  battery: [74, 222, 128],
  import: [248, 96, 120],
  export: [56, 220, 245],
  house: [150, 170, 255],
  wallbox: [80, 175, 255],
};

/** Below this a flow is not drawn (standby noise). */
const MIN_W = 15;

type Spot = PlanPoint & { id: string };

function spotsOf(b: Building, type: string): Spot[] {
  const out: Spot[] = [];
  for (const f of b.floors) for (const m of f.furniture) if (m.type === type) out.push({ id: m.id, floorId: f.id, x: m.x, z: m.z, y: Math.max(0.4, Math.min(1.4, m.h * 0.8)) });
  return out;
}

function centre(floor: Floor | null): PlanPoint | null {
  if (!floor?.rooms.length) return null;
  let x = 0, z = 0, n = 0;
  for (const r of floor.rooms) for (const [px, pz] of r.points) (x += px), (z += pz), n++;
  return n ? { floorId: floor.id, x: x / n, z: z / n, y: 1 } : null;
}

/** The point where the house's cables meet (a sub-meter of the advanced energy mode is not it). */
export function houseHub(b: Building): PlanPoint | null {
  const subs = subMeterIds(b);
  return spotsOf(b, "meter").find((m) => !subs.has(m.id)) ?? spotsOf(b, "inverter")[0] ?? centre(groundFloor(b));
}

/** Where the grid comes in: the grid connection point, else the meter, else the hub (then no grid arc is drawn). */
function gridSpot(b: Building, hub: PlanPoint): PlanPoint | null {
  const g = spotsOf(b, "grid_point")[0];
  if (g) return g;
  // without a connection point the power comes "from the street": a little outside the hub's floor
  const floor = b.floors.find((f) => f.id === hub.floorId);
  if (!floor?.rooms.length) return null;
  let x0 = Infinity, x1 = -Infinity, z1 = -Infinity;
  for (const r of floor.rooms) for (const [x, z] of r.points) (x0 = Math.min(x0, x)), (x1 = Math.max(x1, x)), (z1 = Math.max(z1, z));
  return { floorId: hub.floorId, x: Math.max(x0, Math.min(x1, hub.x)), z: z1 + 3, y: 0.2 };
}

const modulesOf = (f: SolarField) => Math.max(1, f.rows * f.cols - (f.skip?.length ?? 0));

/** How much every solar field makes now: its own sensor, else a share of the plant by module count. */
export function fieldProduction(hass: HomeAssistant, b: Building, solar: number | null): Map<string, number> {
  const fields = b.settings.roof.solar ?? [];
  const out = new Map<string, number>();
  let known = 0;
  const rest: SolarField[] = [];
  for (const f of fields) {
    const own = f.entity && f.entity !== "none" ? readPower(hass.states[f.entity]) : null;
    if (own !== null) {
      out.set(f.id, Math.max(0, own));
      known += Math.max(0, own);
    } else rest.push(f);
  }
  const left = Math.max(0, (solar ?? 0) - known);
  const total = rest.reduce((n, f) => n + modulesOf(f), 0);
  for (const f of rest) out.set(f.id, total ? (left * modulesOf(f)) / total : 0);
  return out;
}

/** The floor a solar field rides on (the roof follows the top floor, garden fields the ground floor). */
function fieldFloor(b: Building, f: SolarField): string | null {
  if (f.face === GROUND) return groundFloor(b)?.id ?? null;
  const wall = /^wall:([^:]+):/.exec(f.face);
  if (wall) return wall[1];
  return topFloor(b)?.id ?? null;
}

export interface EnergyPicture {
  arcs: EnergyArc[];
  sparks: SparkField[];
  summary: EnergySummary;
  /** Share of the house's consumption covered by sun and battery right now (0…1), null without a grid sensor. */
  autarky: number | null;
}

/** `powerOf` says which power sensor a placed device uses (as in deviceSensors); by default its own field. */
export function energyPicture(hass: HomeAssistant, b: Building, consumers: Consumer[] = findConsumers(hass, b), powerOf?: (f: Furniture) => string | null): EnergyPicture {
  const devices = powerOf ? deviceSensors(b, powerOf) : deviceSensors(b);
  const summary = energySummary(hass, b, consumers, devices);
  const arcs: EnergyArc[] = [];
  const sparks: SparkField[] = [];
  const hub = houseHub(b);
  const consumption = summary.consumption ?? 0;
  const autarky = summary.grid === null || consumption <= 0 ? null : Math.max(0, Math.min(1, 1 - Math.max(0, summary.grid) / consumption));
  if (!hub) return { arcs, sparks, summary, autarky };
  // advanced energy mode: inverters and batteries behind a sub-meter work into it, not into the house
  const behind = new Map(b.floors.flatMap((f) => f.furniture).flatMap((m) => (deviceMeter(b, m) ? [[m.id, deviceMeter(b, m)!] as const] : [])));
  const inverter = spotsOf(b, "inverter").find((s) => !behind.has(s.id)) ?? hub;
  const inverters = new Map(spotsOf(b, "inverter").map((s) => [s.id, s]));
  const strings = new Map((b.settings.roof.strings ?? []).map((s) => [s.id, s.inverter ?? null]));

  // the sun: each field to the inverter, and its modules sparkle with what it makes
  const faces = [...roofFaces(b), ...wallFaces(b)];
  const production = fieldProduction(hass, b, summary.solar);
  const byInverter = new Map<string, number>();
  for (const f of b.settings.roof.solar ?? []) {
    const face = fieldFace(b, f, faces);
    if (!face) continue;
    const modules = fieldModules(face, f);
    if (!modules.length) continue;
    const p = production.get(f.id) ?? 0;
    const peak = modulesOf(f) * (f.wp ?? 400);
    const level = p > MIN_W ? Math.pow(Math.min(1, p / peak), 0.6) : 0;
    const floorId = fieldFloor(b, f);
    sparks.push({ floorId, quads: modules.map((m) => m.corners), level });
    if (p <= MIN_W) continue;
    // the arc starts at the middle of the field (building heights: taken off the floor it rides on)
    let x = 0, y = 0, z = 0;
    for (const m of modules) for (const c of m.corners) (x += c[0]), (y += c[1]), (z += c[2]);
    const n = modules.length * 4;
    const base = b.floors.find((fl) => fl.id === floorId)?.elevation ?? 0;
    // a field goes to the inverter of its string (also without the advanced energy mode; #127), the others to the first one
    const own = inverters.get(strings.get(f.string ?? "") ?? "");
    if (own) byInverter.set(own.id, (byInverter.get(own.id) ?? 0) + p);
    arcs.push({ key: `solar:${f.id}`, from: { floorId, x: x / n, y: y / n - base + 0.1, z: z / n }, to: own ?? inverter, power: p, color: ENERGY_COLORS.solar });
  }

  // the battery (without those behind a sub-meter)
  const battery = spotsOf(b, "home_battery").find((s) => !behind.has(s.id));
  const houseBattery = summary.battery === null ? null : summary.battery - (summary.subMeters ?? []).reduce((sum, m) => sum + m.battery, 0);
  if (battery && houseBattery !== null && Math.abs(houseBattery) > MIN_W) {
    const discharging = houseBattery > 0;
    arcs.push({ key: "battery", from: discharging ? battery : hub, to: discharging ? hub : battery, power: Math.abs(houseBattery), color: ENERGY_COLORS.battery });
  }
  // the inverter feeds the house (when it is not the hub itself)
  const houseSolar = (summary.solar ?? 0) - (summary.subMeters ?? []).reduce((sum, m) => sum + m.solar, 0);
  if (houseSolar > MIN_W) {
    // each inverter feeds the house with its share of what its strings make (all of it, with one inverter)
    const named = [...byInverter].filter(([id]) => !behind.has(id));
    const shared = named.reduce((sum, [, w]) => sum + w, 0);
    if (named.length > 1 && shared > MIN_W) {
      for (const [id, w] of named) {
        const spot = inverters.get(id);
        const power = (houseSolar * w) / shared;
        if (spot && spot !== hub && power > MIN_W) arcs.push({ key: `inverter:${id}`, from: spot, to: hub, power, color: ENERGY_COLORS.solar });
      }
    } else if (inverter !== hub) arcs.push({ key: "inverter", from: inverter, to: hub, power: houseSolar, color: ENERGY_COLORS.solar });
  }
  // the grid
  const grid = gridSpot(b, hub);
  if (grid && summary.grid !== null && Math.abs(summary.grid) > MIN_W) {
    const importing = summary.grid > 0;
    arcs.push({ key: "grid", from: importing ? grid : hub, to: importing ? hub : grid, power: Math.abs(summary.grid), color: importing ? ENERGY_COLORS.import : ENERGY_COLORS.export });
  }
  // advanced energy mode: each sub-meter draws from the meter it hangs off (or feeds back, with solar behind it),
  // and the consumers on its floors draw from it; the first sub-meter naming a floor wins. Its inverters and
  // batteries work into it, so its solar reaches its own consumers first and only the surplus flows back.
  const meters = new Map(spotsOf(b, "meter").map((m) => [m.id, m]));
  const sensorOf = powerOf ?? ((f: Furniture) => (f.power && f.power !== "none" ? f.power : null));
  for (const floor of b.floors) {
    for (const f of floor.furniture) {
      const at = meters.get(behind.get(f.id) ?? "");
      const spot = spotsOf(b, f.type).find((s) => s.id === f.id);
      if (!at || !spot) continue;
      const sensor = sensorOf(f);
      if (f.type === "inverter") {
        const w = Math.max(0, (sensor ? readPower(hass.states[sensor]) : null) ?? 0);
        if (w > MIN_W) arcs.push({ key: `inverter:${f.id}`, from: spot, to: at, power: w, color: ENERGY_COLORS.solar });
      } else if (f.type === "home_battery") {
        const charge = f.charge && f.charge !== "none" ? f.charge : null;
        const w = oneBattery(hass, { power: sensor, charge }, b.energy.battery_invert) ?? 0;
        if (Math.abs(w) > MIN_W) arcs.push({ key: `battery:${f.id}`, from: w > 0 ? spot : at, to: w > 0 ? at : spot, power: Math.abs(w), color: ENERGY_COLORS.battery });
      }
    }
  }
  const feeders = new Map<string, Spot>();
  const subSensors = new Set<string>();
  for (const m of devices.subMeters ?? []) {
    const at = meters.get(m.id);
    const parent = meters.get(m.parent);
    if (m.power) subSensors.add(m.power);
    for (const floorId of m.floors) if (at && !feeders.has(floorId)) feeders.set(floorId, at);
    const w = summary.subMeters?.find((s) => s.id === m.id)?.power ?? null;
    if (!at || !parent || w === null || Math.abs(w) <= MIN_W) continue;
    arcs.push({ key: `meter:${m.id}`, from: w > 0 ? parent : at, to: w > 0 ? at : parent, power: Math.abs(w), color: w > 0 ? ENERGY_COLORS.house : ENERGY_COLORS.solar });
  }
  // the house feeds its consumers
  const wallboxes = new Set(spotsOf(b, "wallbox").map((w) => `${w.floorId}:${w.x.toFixed(1)}:${w.z.toFixed(1)}`));
  for (const c of consumers) {
    if (c.power <= MIN_W || subSensors.has(c.powerEntity)) continue;
    const wallbox = c.wallbox || wallboxes.has(`${c.floorId}:${c.x.toFixed(1)}:${c.z.toFixed(1)}`);
    arcs.push({ key: `use:${c.id}`, from: feeders.get(c.floorId) ?? hub, to: { floorId: c.floorId, x: c.x, z: c.z, y: 0.9 }, power: c.power, color: wallbox ? ENERGY_COLORS.wallbox : ENERGY_COLORS.house });
  }
  return { arcs: arcs.map((arc) => routed(b, arc)), sparks, summary, autarky };
}

/** How high above its floor a cable route runs (along the skirting). */
const CABLE_Y = 0.25;

/** A connection whose cable can be routed: its key (as the arcs name it) and what it joins. */
export interface EnergyConnection {
  key: string;
  kind: "solar" | "battery" | "inverter" | "grid" | "meter";
  /** The solar field, or the device behind a sub-meter, or the sub-meter. */
  id: string | null;
}

/**
 * The connections of the plan that can get a cable route, whether power flows on them right now or not: each solar field to
 * its inverter, the battery, the inverter and the grid to the house, and in the advanced energy mode the devices behind a
 * sub-meter and the sub-meters. Consumers keep their arc.
 */
export function energyConnections(b: Building): EnergyConnection[] {
  const out: EnergyConnection[] = [];
  const hub = houseHub(b);
  if (!hub) return out;
  const behind = new Set(b.floors.flatMap((f) => f.furniture).filter((m) => deviceMeter(b, m)).map((m) => m.id));
  const inverter = spotsOf(b, "inverter").find((s) => !behind.has(s.id));
  for (const f of b.settings.roof.solar ?? []) out.push({ key: `solar:${f.id}`, kind: "solar", id: f.id });
  if (spotsOf(b, "home_battery").some((s) => !behind.has(s.id))) out.push({ key: "battery", kind: "battery", id: null });
  const away = (s: Spot) => s.floorId !== hub.floorId || s.x !== hub.x || s.z !== hub.z;
  // several inverters carrying strings each have their own line to the house (#127)
  const stringInverters = new Set((b.settings.roof.strings ?? []).filter((st) => st.inverter && (b.settings.roof.solar ?? []).some((f) => f.string === st.id)).map((st) => st.inverter as string));
  const own = spotsOf(b, "inverter").filter((s) => !behind.has(s.id) && stringInverters.has(s.id));
  if (own.length > 1) for (const s of own) away(s) && out.push({ key: `inverter:${s.id}`, kind: "inverter", id: s.id });
  else if (inverter && away(inverter)) out.push({ key: "inverter", kind: "inverter", id: null });
  if (gridSpot(b, hub)) out.push({ key: "grid", kind: "grid", id: null });
  for (const f of b.floors.flatMap((fl) => fl.furniture)) {
    if (!behind.has(f.id)) continue;
    if (f.type === "inverter") out.push({ key: `inverter:${f.id}`, kind: "inverter", id: f.id });
    else if (f.type === "home_battery") out.push({ key: `battery:${f.id}`, kind: "battery", id: f.id });
  }
  for (const id of subMeterIds(b)) out.push({ key: `meter:${id}`, kind: "meter", id });
  return out;
}

/** The route of a connection, if one is drawn. */
export const routeOf = (b: Building, key: string): EnergyRoute | undefined => b.energy.routes?.find((r) => r.key === key && r.points.length > 0);

/**
 * An arc with its cable route: the route's points in the order the power runs. A route is drawn once for a connection whose
 * flow can turn round (the battery charges and discharges), so it is walked from whichever end lies nearer to the arc's start.
 */
export function routed(b: Building, arc: EnergyArc): EnergyArc {
  const route = routeOf(b, arc.key);
  if (!route) return arc;
  const via: PlanPoint[] = route.points.map((p) => ({ floorId: p.floor_id, x: p.x, z: p.z, y: CABLE_Y }));
  const elevation = (id: string | null) => b.floors.find((f) => f.id === id)?.elevation ?? 0;
  const apart = (p: PlanPoint, q: PlanPoint) => Math.hypot(p.x - q.x, p.z - q.z) + Math.abs(elevation(p.floorId) + p.y - elevation(q.floorId) - q.y);
  const [first, last] = [via[0], via[via.length - 1]];
  if (apart(arc.from, last) + apart(arc.to, first) < apart(arc.from, first) + apart(arc.to, last)) via.reverse();
  return { ...arc, via, cable: !!route.cable };
}
