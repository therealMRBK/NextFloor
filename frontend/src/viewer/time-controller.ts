
/**
 * Zeitschiene: live, Historie (HA History API) oder Prognose (lumped capacitance).
 *
 * Bewusst schmal gehalten: der Controller liefert ein einheitliches Snapshot-Objekt
 * { entity_id: number }. Welche Layer daraus lesen, entscheidet der Viewer.
 */
export type TimeMode = "live" | "historical" | "forecast";

/** Entitaeten, die einen Zeitsnapshot ausmachen. */
export const SNAPSHOT_ENTITIES = [
  "sensor.bad_luftfeuchtigkeit",
  "sensor.buero_luftfeuchte",
  "sensor.techniknische_luftfeuchtigkeit",
  "input_boolean.bodenluke_offen",
  "switch.bad_luefter_dauer",
  "sensor.system_bchc_pv_sb_solarleistung",
  "sensor.system_bchc_pv_sb_akkuleistung",
  "sensor.system_bchc_pv_sb_einspeiseleistung",
  "sensor.waermepumpe_ist_leistung",
  "sensor.nipogi_leistung",
  "sensor.acemagic_leistung",
];

export interface Snapshot { ts: number; mode: TimeMode; values: Record<string, number>; note?: string }

/** Token des HA-Frontends (localStorage), damit die History-API erreichbar ist. */
function hassToken(): string | null {
  try {
    const raw = localStorage.getItem("hassTokens");
    if (!raw) return null;
    return (JSON.parse(raw) as { access_token?: string }).access_token ?? null;
  } catch { return null; }
}

export class TimeController {
  private mode: TimeMode = "live";
  private ts = Date.now();
  private readonly emit: (s: Snapshot) => void;
  private readonly hassUrl: string;

  constructor(emit: (s: Snapshot) => void, hassUrl = "") {
    this.emit = emit;
    this.hassUrl = hassUrl || location.origin;
  }

  get current(): Snapshot { return { ts: this.ts, mode: this.mode, values: {} }; }

  /** offsetH: Stunden relativ zu jetzt (-24..+12). */
  async setOffset(offsetH: number): Promise<Snapshot> {
    const now = Date.now();
    this.ts = now + offsetH * 3600_000;
    this.mode = Math.abs(offsetH) < 0.02 ? "live" : offsetH < 0 ? "historical" : "forecast";
    if (this.mode === "live") {
      const s: Snapshot = { ts: now, mode: this.mode, values: {} };
      this.emit(s);
      return s;
    }
    const s = this.mode === "historical" ? await this.loadHistory(this.ts) : this.forecast(this.ts);
    this.emit(s);
    return s;
  }

  /** HA History API; liefert je Entitaet den letzten Wert vor ts. */
  private async loadHistory(ts: number): Promise<Snapshot> {
    const token = hassToken();
    if (!token) return { ts, mode: "historical", values: {}, note: "kein Token im localStorage" };
    const start = new Date(ts - 3600_000).toISOString();
    const end = new Date(ts).toISOString();
    const q = new URLSearchParams({
      filter_entity_id: SNAPSHOT_ENTITIES.join(","),
      end_time: end, minimal_response: "", no_attributes: "",
    });
    const url = `${this.hassUrl}/api/history/period/${start}?${q.toString()}`;
    try {
      const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) return { ts, mode: "historical", values: {}, note: `HTTP ${res.status}` };
      const data = (await res.json()) as any[][];
      const values: Record<string, number> = {};
      for (const series of data) {
        if (!series?.length) continue;
        // minimal_response liefert entity_id nur im ersten Eintrag der Serie
        const id = series[0]?.entity_id ?? series[series.length - 1]?.entity_id;
        const last = series[series.length - 1];
        const num = Number(last?.s ?? last?.state);
        if (id && Number.isFinite(num)) values[id] = num;
      }
      return { ts, mode: "historical", values, note: `${Object.keys(values).length} Entitaeten` };
    } catch (e) {
      return { ts, mode: "historical", values: {}, note: `Fehler: ${String(e).slice(0, 60)}` };
    }
  }

  /**
   * Grobe Auskuehlrechnung (lumped capacitance) bis ts.
   * C = 2,5 MJ/K Gebaeudemasse, UA = 220 W/K aus den U-Werten des Modells.
   * Ohne Aussentemperatur keine Prognose — dann bleibt das Snapshot leer.
   */
  private forecast(ts: number): Snapshot {
    const tOut = this.outsideTemp();
    if (tOut === null) return { ts, mode: "forecast", values: {}, note: "keine Aussentemperatur" };
    const C = 2.5e6, UA = 220, dtH = (ts - Date.now()) / 3600_000;
    const steps = Math.max(1, Math.round(Math.abs(dtH) * 12));
    const h = dtH / steps;
    let tIn = 21.0;
    for (let i = 0; i < steps; i++) tIn += (0 - UA * (tIn - tOut)) * (h * 3600) / C;
    return { ts, mode: "forecast", values: { "forecast.raumtemperatur": Math.round(tIn * 10) / 10 },
             note: `Aussen ${tOut} °C, ${steps} Schritte` };
  }

  private outsideTemp(): number | null {
    const el = document.querySelector("home-assistant") as any;
    const st = el?.hass?.states;
    if (!st) return null;
    for (const id of Object.keys(st)) {
      if (/aussentemperatur|aussen_temperatur|outdoor_temperature/i.test(id)) {
        const v = Number(st[id]?.state);
        if (Number.isFinite(v)) return v;
      }
    }
    return null;
  }
}
