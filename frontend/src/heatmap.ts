// Heat map: the floor of a room is coloured by what its sensors say (temperature, humidity, CO₂), or by the power its devices draw.

import { roomClimateValue } from "./devices.ts";
import { powerSensorFor, readPower } from "./energy.ts";
import { roomSun } from "./live/sun-hours.ts";
import { comfortScore, isSummer, mouldRisk } from "./live/room-climate.ts";
import { pointInPolygon, type Building, type Floor, type Room } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

export type HeatMode = "none" | "temperature" | "humidity" | "co2" | "mould" | "comfort" | "power" | "sun" | "values" | "wifi";

/** The modes that paint floors ("values" prints numbers at the room names instead). */
export type HeatColorMode = Exclude<HeatMode, "none" | "values" | "wifi">;

type Rgb = [number, number, number];
type Stop = readonly [value: number, colour: Rgb];

interface Scale {
  deviceClass: string;
  unit: string;
  stops: Stop[];
}

/** Colour ramps, from low to high. Between two stops the colour is blended; outside the range it stays at the end. */
export const HEAT_SCALES: Record<HeatColorMode, Scale> = {
  temperature: {
    deviceClass: "temperature",
    unit: "°C",
    stops: [[16, [0.2, 0.45, 1]], [20, [0.15, 0.85, 0.75]], [22.5, [0.95, 0.8, 0.3]], [26, [1, 0.28, 0.18]]],
  },
  humidity: {
    deviceClass: "humidity",
    unit: "%",
    stops: [[30, [0.95, 0.6, 0.2]], [45, [0.3, 0.88, 0.5]], [60, [0.2, 0.78, 1]], [75, [0.32, 0.4, 0.98]]],
  },
  co2: {
    deviceClass: "carbon_dioxide",
    unit: "ppm",
    stops: [[450, [0.3, 0.88, 0.5]], [800, [0.98, 0.84, 0.3]], [1200, [1, 0.5, 0.2]], [1600, [0.98, 0.25, 0.25]]],
  },
  // mould risk at the coldest wall, from temperature and humidity (live/room-climate.ts)
  mould: {
    deviceClass: "",
    unit: "%",
    stops: [[0, [0.3, 0.88, 0.5]], [40, [0.98, 0.84, 0.3]], [70, [1, 0.5, 0.2]], [100, [0.75, 0.2, 0.55]]],
  },
  // how comfortable the room is, 0 … 100 (live/room-climate.ts)
  comfort: {
    deviceClass: "",
    unit: "",
    stops: [[0, [0.98, 0.25, 0.25]], [40, [1, 0.5, 0.2]], [65, [0.98, 0.84, 0.3]], [85, [0.3, 0.88, 0.5]], [100, [0.2, 0.8, 0.7]]],
  },
  // what the room's devices draw now (their power sensors added up)
  power: {
    deviceClass: "power",
    unit: "W",
    stops: [[0, [0.25, 0.4, 0.6]], [100, [0.3, 0.88, 0.5]], [500, [0.98, 0.84, 0.3]], [1500, [1, 0.5, 0.2]], [3000, [0.98, 0.25, 0.25]]],
  },
  // hours of sun through the room's outside windows today (live/sun-hours.ts)
  sun: {
    deviceClass: "",
    unit: "h",
    stops: [[0, [0.22, 0.3, 0.55]], [2, [0.35, 0.6, 0.85]], [4, [0.98, 0.84, 0.3]], [7, [1, 0.62, 0.2]], [10, [1, 0.42, 0.25]]],
  },
};

/** Summer's temperature scale: rooms count as hot later than in winter (26 °C is fine in July, not in January). */
const SUMMER_TEMPERATURE: Scale = {
  deviceClass: "temperature",
  unit: "°C",
  stops: [[19, [0.2, 0.45, 1]], [22.5, [0.15, 0.85, 0.75]], [25.5, [0.95, 0.8, 0.3]], [29, [1, 0.28, 0.18]]],
};

/** The scale of a mode in a season (only temperatures change with it). */
export function scaleOf(mode: HeatColorMode, summer = false): Scale {
  return mode === "temperature" && summer ? SUMMER_TEMPERATURE : HEAT_SCALES[mode];
}

const mix = (a: Rgb, b: Rgb, t: number): Rgb => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];

/** The colour a value gets on a scale. */
export function heatColor(mode: HeatColorMode, value: number, summer = false): Rgb {
  const { stops } = scaleOf(mode, summer);
  const upper = stops.findIndex(([limit]) => value <= limit);
  if (upper === -1) return stops[stops.length - 1][1];
  if (upper === 0) return stops[0][1];
  const [lowValue, lowColour] = stops[upper - 1];
  const [highValue, highColour] = stops[upper];
  return mix(lowColour, highColour, (value - lowValue) / (highValue - lowValue));
}

/**
 * What the devices of a room draw now, in watts: the power sensors of its device pins and of its furniture (a piece's own power
 * sensor, else the one on its entity's device), each counted once. Null when the room has none. The house's meters stay out.
 */
export function roomPower(hass: HomeAssistant, building: Pick<Building, "energy">, floor: Floor, room: Room): number | null {
  let sum: number | null = null;
  for (const s of roomPowerSensors(hass, building, floor, room)) {
    const w = readPower(hass.states[s]);
    if (w !== null) sum = (sum ?? 0) + Math.max(0, w);
  }
  return sum;
}

/** The power sensors of a room's device pins and furniture, each once, without the house's meters. */
export function roomPowerSensors(hass: HomeAssistant, building: Pick<Building, "energy">, floor: Floor, room: Room): string[] {
  const { grid, solar, battery } = building.energy;
  const meters = new Set([grid, solar, battery].filter(Boolean));
  const sensors = new Set<string>();
  const inside = (x: number, z: number) => room.points.length >= 3 && pointInPolygon([x, z], room.points);
  for (const p of floor.placements) {
    const s = inside(p.x, p.z) ? powerSensorFor(hass, p.entity_id) : null;
    if (s) sensors.add(s);
  }
  for (const m of floor.furniture) {
    if (!inside(m.x, m.z)) continue;
    const s = m.power && m.power !== "none" ? m.power : m.entity && m.entity !== "none" ? powerSensorFor(hass, m.entity) : null;
    if (s) sensors.add(s);
  }
  return [...sensors].filter((s) => !meters.has(s));
}

/** The reading of every room that has a fitting sensor, by room id. */
export function roomValues(hass: HomeAssistant, building: Building, mode: HeatColorMode): Map<string, number> {
  const values = new Map<string, number>();
  for (const floor of building.floors) {
    for (const room of floor.rooms) {
      if (mode === "power") {
        const w = roomPower(hass, building, floor, room);
        if (w !== null) values.set(room.id, w);
        continue;
      }
      if (mode === "comfort") {
        const v = comfortScore(roomClimateValue(hass, floor, room, "temperature"), roomClimateValue(hass, floor, room, "humidity"), roomClimateValue(hass, floor, room, "co2"), isSummer(new Date(), hass.config?.latitude));
        if (v !== null) values.set(room.id, v);
        continue;
      }
      if (mode === "sun") {
        const { latitude, longitude, time_zone } = hass.config ?? {};
        if (latitude === undefined || longitude === undefined || floor.layer) continue;
        values.set(room.id, roomSun(building, floor, room, { latitude, longitude, zone: time_zone }).hours);
        continue;
      }
      const reading = mode === "mould" ? mouldRisk(roomClimateValue(hass, floor, room, "temperature"), roomClimateValue(hass, floor, room, "humidity")) : roomClimateValue(hass, floor, room, mode);
      if (reading !== null) values.set(room.id, reading);
    }
  }
  return values;
}

/** The scale as a CSS gradient, for the legend bar. */
export function heatGradient(mode: HeatColorMode, summer = false): string {
  const { stops } = scaleOf(mode, summer);
  const first = stops[0][0];
  const span = stops[stops.length - 1][0] - first;
  const parts = stops.map(([value, colour]) => `rgb(${colour.map((c) => Math.round(c * 255)).join(",")}) ${Math.round(((value - first) / span) * 100)}%`);
  return `linear-gradient(90deg, ${parts.join(", ")})`;
}
