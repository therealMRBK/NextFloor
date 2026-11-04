
import type { Snapshot } from "../viewer/time-controller.ts";

/**
 * Schieberegler am unteren Rand: -24 h ... jetzt ... +12 h.
 * Meldet Aenderungen gedrosselt (200 ms) an den TimeController.
 */
export class TimelineSlider {
  private readonly root: HTMLDivElement;
  private readonly label: HTMLSpanElement;
  private timer: number | null = null;
  private readonly onSeek: (offsetHours: number) => void;

  constructor(host: HTMLElement, onSeek: (offsetHours: number) => void) {
    this.onSeek = onSeek;
    this.root = document.createElement("div");
    this.root.className = "nf-timeline";
    this.root.style.cssText = [
      "position:absolute", "left:50%", "transform:translateX(-50%)", "bottom:56px",
      "display:flex", "align-items:center", "gap:10px", "padding:6px 12px",
      "border-radius:8px", "background:rgba(0,0,0,.45)", "color:#cfd8dc",
      "font:12px/1.2 system-ui,sans-serif", "z-index:6",
    ].join(";");

    const minus = document.createElement("span"); minus.textContent = "-24h";
    const plus = document.createElement("span"); plus.textContent = "+12h";
    const range = document.createElement("input");
    range.type = "range"; range.min = "-24"; range.max = "12"; range.step = "0.25";
    range.value = "0"; range.dataset.role = "time-slider";
    range.style.cssText = "width:min(46vw,520px);accent-color:#00c8ff;";
    this.label = document.createElement("span");
    this.label.dataset.role = "time-label";
    this.label.textContent = "Live";
    this.label.style.cssText = "min-width:104px;text-align:right;";

    range.addEventListener("input", () => {
      const v = Number(range.value);
      this.label.textContent = v === 0 ? "Live" : `${v > 0 ? "+" : ""}${v} h`;
      if (this.timer !== null) window.clearTimeout(this.timer);
      this.timer = window.setTimeout(() => void this.onSeek(v), 200);
    });
    range.addEventListener("dblclick", () => { range.value = "0"; range.dispatchEvent(new Event("input")); });

    this.root.append(minus, range, this.label, plus);
    host.appendChild(this.root);
  }

  /** Anzeige nach Rueckkehr des Snapshots (Modus + Notiz). */
  report(s: Snapshot): void {
    const tag = s.mode === "live" ? "Live" : s.mode === "historical" ? "Historie" : "Prognose";
    this.label.textContent = s.note ? `${tag} · ${s.note}` : tag;
  }

  dispose(): void { this.root.remove(); }
}
