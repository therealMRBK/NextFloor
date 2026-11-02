/**
 * NextFloor's heat pump: what it reports, found among the entities of its device (like the car and the printer): whether it heats,
 * makes hot water, cools or defrosts, the flow and return temperatures, the electric power it draws, the heat it delivers and its
 * COP. Works with the integrations that put these on one device (Daikin, Vaillant/myVaillant, Viessmann, Panasonic Aquarea, Nibe,
 * Stiebel Eltron, Luxtronik, Mitsubishi Ecodan, ESPHome builds …).
 */
import type { HassEntity, HomeAssistant } from "../types.ts";

export interface HeatPumpInfo {
  /** heating, water (hot water), cooling, defrost or idle. */
  mode: "heating" | "water" | "cooling" | "defrost" | "idle";
  flow: number | null;
  return: number | null;
  outside: number | null;
  /** Electric power drawn (W). */
  power: number | null;
  /** Heat delivered (W). */
  heat: number | null;
  cop: number | null;
}

const num = (st: HassEntity | undefined) => {
  const n = Number(st?.state);
  return st && Number.isFinite(n) ? n : null;
};
const has = (id: string, ...words: string[]) => words.some((w) => id.includes(w));

/** Watts from a power sensor in W or kW. */
function watts(st: HassEntity | undefined): number | null {
  const v = num(st);
  if (v === null) return null;
  return String(st!.attributes.unit_of_measurement ?? "W").toLowerCase() === "kw" ? v * 1000 : v;
}

function siblings(hass: HomeAssistant, entity: string): string[] {
  const device = hass.entities?.[entity]?.device_id;
  if (!device) return hass.states[entity] ? [entity] : [];
  return Object.values(hass.entities ?? {})
    .filter((e) => e.device_id === device && !e.hidden)
    .map((e) => e.entity_id)
    .filter((id) => hass.states[id]);
}

export function readHeatPump(hass: HomeAssistant, anchor: string | null): HeatPumpInfo | null {
  if (!anchor || !hass.states[anchor]) return null;
  const all = siblings(hass, anchor);
  const sensors = all.filter((id) => id.startsWith("sensor."));
  const find = (match: (id: string, s: HassEntity) => boolean) => sensors.find((id) => match(id, hass.states[id]));
  const temp = (s: HassEntity) => s.attributes.device_class === "temperature";
  const power = (s: HassEntity) => s.attributes.device_class === "power";
  const flowId = find((id, s) => temp(s) && has(id, "flow", "vorlauf", "supply", "leaving", "outlet") && !has(id, "target", "soll", "rate"));
  const returnId = find((id, s) => temp(s) && has(id, "return", "rucklauf", "rücklauf", "ruecklauf", "inlet", "entering") && !has(id, "target", "soll"));
  const outsideId = find((id, s) => temp(s) && has(id, "outdoor", "outside", "aussen", "außen", "ambient"));
  const heatId = find((id, s) => power(s) && has(id, "heat", "warme", "wärme", "thermal", "output", "heizleistung"));
  const powerId = find((id, s) => power(s) && id !== heatId && !has(id, "heat_output", "thermal"));
  const copId = find((id) => has(id, "cop", "leistungszahl"));
  if (!flowId && !returnId && !heatId && !copId) return null;
  // the mode: a climate entity's action, else a status sensor's words, else heat delivered
  const climate = all.map((id) => hass.states[id]).find((s) => s.entity_id.startsWith("climate."));
  const statusId = find((id, s) => !Number.isFinite(Number(s.state)) && has(id, "status", "mode", "betrieb", "operation", "state"));
  const words = `${String(climate?.attributes.hvac_action ?? "")} ${String(statusId ? hass.states[statusId].state : "")}`.toLowerCase();
  const heat = watts(hass.states[heatId ?? ""]);
  const mode: HeatPumpInfo["mode"] = /defrost|abtau/.test(words)
    ? "defrost"
    : /water|dhw|warmwasser|tank/.test(words)
      ? "water"
      : /cool|kühl/.test(words)
        ? "cooling"
        : /heat|heiz/.test(words) || (heat ?? 0) > 100
          ? "heating"
          : "idle";
  const pw = watts(hass.states[powerId ?? ""]);
  const cop = num(hass.states[copId ?? ""]) ?? (heat !== null && pw && pw > 50 ? Math.round((heat / pw) * 10) / 10 : null);
  return { mode, flow: num(hass.states[flowId ?? ""]), return: num(hass.states[returnId ?? ""]), outside: num(hass.states[outsideId ?? ""]), power: pw, heat, cop };
}

/** Whether a piece of furniture is a heat pump (by its pack item's id). */
export const isHeatPump = (type: string): boolean => /:heat_pump(_|$)/.test(type);
