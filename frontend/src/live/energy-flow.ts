/**
 * Where the power goes right now, as NextFloor draws it (see viewer/live-energy.ts): arcs between the devices
 * placed in the plan, sparkling solar modules, and the numbers for the house card.
 *
 *  - every solar field sends its share of the production to the inverter
 *  - the battery charges from the house or discharges into it
 *  - the grid connection delivers to the house or takes the export
 *  - the house feeds every consumer that reports its power (a wallbox in its own colour)
 *
 * "The house" is where the cables meet: the meter cabinet, else the inverter, else the middle of the ground floor.
 */
import { energySummary, findConsumers, readPower, type Consumer, type EnergySummary } from "../energy.ts";
import type { Building, Floor, SolarField } from "../model.ts";
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

/** The point where the house's cables meet. */
export function houseHub(b: Building): PlanPoint | null {
  return spotsOf(b, "meter")[0] ?? spotsOf(b, "inverter")[0] ?? centre(groundFloor(b));
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

export function energyPicture(hass: HomeAssistant, b: Building, consumers: Consumer[] = findConsumers(hass, b)): EnergyPicture {
  const summary = energySummary(hass, b, consumers);
  const arcs: EnergyArc[] = [];
  const sparks: SparkField[] = [];
  const hub = houseHub(b);
  const consumption = summary.consumption ?? 0;
  const autarky = summary.grid === null || consumption <= 0 ? null : Math.max(0, Math.min(1, 1 - Math.max(0, summary.grid) / consumption));
  if (!hub) return { arcs, sparks, summary, autarky };
  const inverter = spotsOf(b, "inverter")[0] ?? hub;

  // the sun: each field to the inverter, and its modules sparkle with what it makes
  const faces = [...roofFaces(b), ...wallFaces(b)];
  const production = fieldProduction(hass, b, summary.solar);
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
    arcs.push({ key: `solar:${f.id}`, from: { floorId, x: x / n, y: y / n - base + 0.1, z: z / n }, to: inverter, power: p, color: ENERGY_COLORS.solar });
  }

  // the battery
  const battery = spotsOf(b, "home_battery")[0];
  if (battery && summary.battery !== null && Math.abs(summary.battery) > MIN_W) {
    const discharging = summary.battery > 0;
    arcs.push({ key: "battery", from: discharging ? battery : hub, to: discharging ? hub : battery, power: Math.abs(summary.battery), color: ENERGY_COLORS.battery });
  }
  // the inverter feeds the house (when it is not the hub itself)
  if (inverter !== hub && (summary.solar ?? 0) > MIN_W) {
    arcs.push({ key: "inverter", from: inverter, to: hub, power: summary.solar ?? 0, color: ENERGY_COLORS.solar });
  }
  // the grid
  const grid = gridSpot(b, hub);
  if (grid && summary.grid !== null && Math.abs(summary.grid) > MIN_W) {
    const importing = summary.grid > 0;
    arcs.push({ key: "grid", from: importing ? grid : hub, to: importing ? hub : grid, power: Math.abs(summary.grid), color: importing ? ENERGY_COLORS.import : ENERGY_COLORS.export });
  }
  // the house feeds its consumers
  const wallboxes = new Set(spotsOf(b, "wallbox").map((w) => `${w.floorId}:${w.x.toFixed(1)}:${w.z.toFixed(1)}`));
  for (const c of consumers) {
    if (c.power <= MIN_W) continue;
    const wallbox = c.wallbox || wallboxes.has(`${c.floorId}:${c.x.toFixed(1)}:${c.z.toFixed(1)}`);
    arcs.push({ key: `use:${c.id}`, from: hub, to: { floorId: c.floorId, x: c.x, z: c.z, y: 0.9 }, power: c.power, color: wallbox ? ENERGY_COLORS.wallbox : ENERGY_COLORS.house });
  }
  return { arcs, sparks, summary, autarky };
}
