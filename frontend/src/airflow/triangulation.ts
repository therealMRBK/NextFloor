
/**
 * Hygrothermische Triangulation: schaetzt Fenster- und Tuerzustaende aus den
 * Gradienten von Temperatur und relativer Feuchte, weil keine Kontakte existieren.
 *
 * Reine Rechnung, kein Three.js — dadurch ohne Browser pruefbar.
 * Schwellen sind Konstanten und stehen hier, nicht im Aufrufer.
 */

export interface Sample {
  /** Zeitstempel in Sekunden (monoton). */
  t: number;
  temp: number | null;
  rh: number | null;
}

/** Ringpuffer je Sensor; haelt die letzten `span` Sekunden. */
export class SensorHistory {
  private readonly buf: Sample[] = [];
  private readonly span: number;
  constructor(span = 180) { this.span = span; }

  push(s: Sample): void {
    this.buf.push(s);
    while (this.buf.length > 2 && s.t - this.buf[0].t > this.span) this.buf.shift();
  }

  /** Mittlere Steigung pro Sekunde ueber `window` Sekunden, null bei zu wenig Daten. */
  slope(field: "temp" | "rh", window = 60): number | null {
    const now = this.buf[this.buf.length - 1];
    if (!now) return null;
    const past = this.buf.filter((s) => s.t >= now.t - window && s[field] !== null);
    if (past.length < 2) return null;
    const a = past[0];
    const b = past[past.length - 1];
    const dt = b.t - a.t;
    if (dt <= 0) return null;
    return ((b[field] as number) - (a[field] as number)) / dt;
  }
}

export interface Thresholds {
  /** K/s — schneller Abfall gilt als Lueften. */
  dropTemp: number;
  /** %/s — Feuchteabfall im Winter unterstuetzt die Annahme. */
  dropRh: number;
  /** K — Mindestabstand zur Aussenluft, sonst ist der Abfall Wetter. */
  deltaT: number;
}

export const DEFAULT_THRESHOLDS: Thresholds = { dropTemp: 0.02, dropRh: 0.02, deltaT: 3 };

/**
 * Wahrscheinlichkeit 0..1, dass in diesem Raum ein Fenster offen ist.
 * Bedingung: schneller Temperaturabfall UND deutlicher Abstand zur Aussenluft;
 * fallende Feuchte erhoeht die Sicherheit, steigende senkt sie (Kochen/Duschen).
 */
export function windowOpenProb(
  hist: SensorHistory,
  roomTemp: number | null,
  outside: number | null,
  th: Thresholds = DEFAULT_THRESHOLDS,
): number {
  const dT = hist.slope("temp");
  const dRh = hist.slope("rh");
  if (dT === null || roomTemp === null || outside === null) return 0;
  const delta = roomTemp - outside;
  if (delta < th.deltaT) return 0;
  const byTemp = Math.min(1, Math.max(0, -dT / th.dropTemp));
  if (byTemp <= 0) return 0;
  const rhPart = dRh === null ? 0.5 : dRh < 0 ? Math.min(1, -dRh / th.dropRh) : 0;
  // Temperatur allein zaehlt halb, Feuchte kann es auf 1 heben oder auf 0.5 druecken
  return Math.round(byTemp * (0.5 + 0.5 * rhPart) * 1000) / 1000;
}

/**
 * Tuerzustand Bad/Flur: bricht die Feuchtedifferenz ein, waehrend der Flur
 * gleichzeitig feuchter wird, ist die Tuer offen. Ohne Flursensor: null
 * (nicht schaetzbar — lieber None als eine erfundene Zahl).
 */
/**
 * Ersatz fuer den fehlenden Flursensor: Referenz ist der Mittelwert der
 * angrenzenden Zonen (Buero, Techniknische). Liegt das Bad mehr als 15 % ueber
 * dieser Referenz, staut sich Feuchte -> Tuer zu. Faellt das Bad schnell und
 * steigt die Referenz, ist die Tuer offen.
 */
export function doorOpenProbReference(badRh: number | null, refRh: number | null,
                                      badHist: SensorHistory, refHist: SensorHistory): number | null {
  const d = doorOpenProb(badRh, refRh, badHist, refHist);
  if (d === null) return null;
  if (badRh !== null && refRh !== null && badRh - refRh > 15) return 0;
  return d;
}

export function doorOpenProb(
  badRh: number | null,
  flurRh: number | null,
  badHist: SensorHistory,
  flurHist: SensorHistory | null,
): number | null {
  if (badRh === null || flurRh === null || !flurHist) return null;
  const dBad = badHist.slope("rh");
  const dFlur = flurHist.slope("rh");
  if (dBad === null || dFlur === null) return null;
  const gap = badRh - flurRh;
  if (gap > 20) return 0;
  const rising = Math.min(1, Math.max(0, dFlur / 0.02));
  const falling = Math.min(1, Math.max(0, -dBad / 0.02));
  return Math.round(((rising + falling) / 2) * 1000) / 1000;
}
