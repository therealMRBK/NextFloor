
/**
 * Gewerke-Layer: ein Zustand fuer die fuenf Visualisierungen.
 *
 * Der Controller kennt nur den Zustand und seine Anwender; wer was ein- oder
 * ausblendet, entscheidet der Viewer. Der Zustand liegt im localStorage, damit
 * die Auswahl ein Neuladen ueberlebt.
 */
export type HeatingMode = "fbh_mix" | "knx_room_temp";

export interface LayerState {
  heatingMode: HeatingMode;
  airflow: boolean;
  wifi: boolean;
  electrical: boolean;
  plumbing: boolean;
  heating: boolean;
}

export const LAYER_LABELS: { key: keyof LayerState; label: string; icon: string }[] = [
  { key: "airflow", label: "Stroemung", icon: "🍃" },
  { key: "wifi", label: "WLAN", icon: "📶" },
  { key: "electrical", label: "Strom", icon: "⚡" },
  { key: "plumbing", label: "Sanitaer", icon: "💧" },
  { key: "heating", label: "Heizung", icon: "♨️" },
];

/** Zweiter Schalter: Farbskala der Heizplatten. */
export const HEATING_MODES: { key: HeatingMode; label: string }[] = [
  { key: "fbh_mix", label: "FBH" },
  { key: "knx_room_temp", label: "Raum" },
];

export const LAYER_DEFAULTS: LayerState = {
  heatingMode: "fbh_mix",
  airflow: false, wifi: false, electrical: false, plumbing: false, heating: true,
};

const KEY = "nextfloor.layers.v1";

export class LayerController {
  private state: LayerState;
  private readonly apply: (s: LayerState) => void;

  constructor(apply: (s: LayerState) => void) {
    this.apply = apply;
    this.state = LayerController.load();
  }

  static load(): LayerState {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return { ...LAYER_DEFAULTS, ...(JSON.parse(raw) as Partial<LayerState>) };
    } catch {
      /* privater Modus o. ae. — Defaults sind ausreichend */
    }
    return { ...LAYER_DEFAULTS };
  }

  get current(): LayerState { return { ...this.state }; }

  set(key: keyof LayerState, on: boolean): void {
    if (this.state[key] === on) return;
    this.state = { ...this.state, [key]: on };
    try { localStorage.setItem(KEY, JSON.stringify(this.state)); } catch { /* ignorieren */ }
    this.apply(this.state);
  }

  toggle(key: keyof LayerState): void {
    if (key === "heatingMode") return;
    this.set(key, !(this.state[key] as boolean));
  }

  setHeatingMode(mode: HeatingMode): void {
    if (this.state.heatingMode === mode) return;
    this.state = { ...this.state, heatingMode: mode };
    try { localStorage.setItem(KEY, JSON.stringify(this.state)); } catch { /* ignorieren */ }
    this.apply(this.state);
  }

  /** Raumluft-Mittel aus den climate-Entitaeten des HA-Frontends (null wenn nicht lesbar). */
  static roomTemperature(): number | null {
    const el = document.querySelector("home-assistant") as any;
    const states = el?.hass?.states;
    if (!states) return null;
    let sum = 0; let n = 0;
    for (const id of Object.keys(states)) {
      if (!id.startsWith("climate.")) continue;
      const t = Number(states[id]?.attributes?.current_temperature);
      if (Number.isFinite(t)) { sum += t; n++; }
    }
    return n ? Math.round((sum / n) * 10) / 10 : null;
  }

  /** Beim Start einmal anwenden. */
  init(): void { this.apply(this.state); }
}
