
/**
 * Bindet die Lueftungs- und Luke-Zustaende aus Home Assistant an einfache Werte.
 *
 * Reine Funktionen auf dem hass-Objekt: dadurch ist die Zuordnung ohne Browser
 * pruefbar und die Schicht darueber bleibt frei von Entity-Namen.
 */

export interface FanState {
  /** +1 = Zuluft in den Raum, -1 = Abluft (Sog), 0 = aus. */
  dir: 1 | 0 | -1;
  /** 0..1 aus percentage. */
  power: number;
  /** Woher die Richtung stammt (fuer den Report). */
  source: string;
}

const IN_WORDS = new Set(["in", "forward", "supply", "zuluft", "frischluft", "sommer"]);
const OUT_WORDS = new Set(["out", "reverse", "extract", "abluft", "wrg", "winter"]);

function asWord(v: unknown): string {
  return typeof v === "string" ? v.trim().toLowerCase() : "";
}

/**
 * Richtung des Pendelluefters. Reihenfolge: `direction` > `preset_mode` >
 * `select.*_mode` > Standard Zuluft. Findet sich keine Entitaet, ist power 0.
 */
export function readFan(states: Record<string, any>, ids: string[]): FanState {
  for (const id of ids) {
    const st = states[id];
    if (!st) continue;
    if (id.startsWith("select.")) {
      const w = asWord(st.state);
      if (IN_WORDS.has(w)) return { dir: 1, power: 1, source: `${id}=${w}` };
      if (OUT_WORDS.has(w)) return { dir: -1, power: 1, source: `${id}=${w}` };
      continue;
    }
    const a = st.attributes ?? {};
    const power = st.state === "on" ? Number(a.percentage ?? 100) / 100 : 0;
    const byDir = asWord(a.direction);
    const byPreset = asWord(a.preset_mode);
    if (IN_WORDS.has(byDir)) return { dir: 1, power, source: `${id}.direction=${byDir}` };
    if (OUT_WORDS.has(byDir)) return { dir: -1, power, source: `${id}.direction=${byDir}` };
    if (IN_WORDS.has(byPreset)) return { dir: 1, power, source: `${id}.preset=${byPreset}` };
    if (OUT_WORDS.has(byPreset)) return { dir: -1, power, source: `${id}.preset=${byPreset}` };
    // Luefter ohne Richtungsangabe: laeuft, Richtung unbekannt -> Zuluft annehmen
    if (power > 0) return { dir: 1, power, source: `${id}: keine Richtung, Annahme Zuluft` };
  }
  return { dir: 0, power: 0, source: "keine Luefter-Entitaet" };
}

/** Bodenluke: input_boolean oder binary_sensor, je nach Installation. */
export function readLuke(states: Record<string, any>): boolean {
  for (const id of ["input_boolean.bodenluke_offen", "binary_sensor.bodenluke_offen"]) {
    const st = states[id];
    if (st) return st.state === "on";
  }
  return false;
}

/** Aussentemperatur aus weather.* oder einem Sensor; null wenn nichts da ist. */
export function readOutside(states: Record<string, any>): number | null {
  for (const id of Object.keys(states)) {
    if (id.startsWith("weather.")) {
      const t = Number(states[id]?.attributes?.temperature);
      if (Number.isFinite(t)) return t;
    }
  }
  for (const id of ["sensor.aussentemperatur", "sensor.aussen_temperatur", "sensor.temperatur_aussen"]) {
    const t = Number(states[id]?.state);
    if (Number.isFinite(t)) return t;
  }
  return null;
}

/** Kaminfaktor 0..1,5 aus dem Temperaturgefaelle innen/aussen. */
export function chimneyLift(inside: number, outside: number | null): number {
  if (outside === null) return 1;
  const d = inside - outside;
  if (!Number.isFinite(d)) return 1;
  return Math.max(0, Math.min(1.5, d / 10));
}

/** Badluefter als Senke: Dauerbetrieb oder Statusrelais, Stufe aus dem Stufensensor. */
export function readBadFan(states: Record<string, any>): { on: boolean; power: number; source: string } {
  const dauer = states["switch.bad_luefter_dauer"];
  const status = states["binary_sensor.lufter_schalten_status"];
  const stufe = Number(states["sensor.lufter_stufe_status"]?.state);
  const on = dauer?.state === "on" || status?.state === "on";
  if (!on) return { on: false, power: 0, source: "Badluefter aus" };
  const power = Number.isFinite(stufe) && stufe > 0 ? Math.min(1, stufe / 100) : 1;
  return { on: true, power, source: `bad_luefter_dauer=${dauer?.state ?? "?"} stufe=${Number.isFinite(stufe) ? stufe : "?"}` };
}
