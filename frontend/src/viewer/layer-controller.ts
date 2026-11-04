
/**
 * Gewerke-Layer: ein Zustand fuer die fuenf Visualisierungen.
 *
 * Der Controller kennt nur den Zustand und seine Anwender; wer was ein- oder
 * ausblendet, entscheidet der Viewer. Der Zustand liegt im localStorage, damit
 * die Auswahl ein Neuladen ueberlebt.
 */
export interface LayerState {
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

export const LAYER_DEFAULTS: LayerState = {
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

  toggle(key: keyof LayerState): void { this.set(key, !this.state[key]); }

  /** Beim Start einmal anwenden. */
  init(): void { this.apply(this.state); }
}
