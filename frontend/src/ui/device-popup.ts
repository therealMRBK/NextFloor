
import { configFor } from "./device-configs.ts";

/** Holen des 24-h-Verlaufs aus der HA History API. */
async function history(id: string, token: string): Promise<number[]> {
  const start = new Date(Date.now() - 24 * 3600_000).toISOString();
  const q = new URLSearchParams({ filter_entity_id: id, minimal_response: "", no_attributes: "" });
  try {
    const r = await fetch(`${location.origin}/api/history/period/${start}?${q}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!r.ok) return [];
    const data = (await r.json()) as any[][];
    const series = data[0] ?? [];
    const out: number[] = [];
    for (const s of series) {
      const v = Number(s?.s ?? s?.state);
      if (Number.isFinite(v)) out.push(v);
    }
    return out.slice(-96);
  } catch { return []; }
}

/** Inline-SVG-Sparkline: kein Chart-Framework, <2 ms. */
function sparkline(values: number[]): string {
  const w = 232, h = 48;
  if (values.length < 2) {
    return `<svg width="${w}" height="${h}"><text x="4" y="26" fill="#78909c" font-size="10">kein Verlauf</text></svg>`;
  }
  const min = Math.min(...values), max = Math.max(...values);
  const span = max - min || 1;
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / span) * (h - 6) - 3;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return `<svg width="${w}" height="${h}">
    <polyline points="${pts}" fill="none" stroke="#00c8ff" stroke-width="1.6"/>
    <text x="2" y="10" fill="#b0bec5" font-size="9">${max}</text>
    <text x="2" y="${h - 2}" fill="#b0bec5" font-size="9">${min}</text>
  </svg>`;
}

export class DevicePopup {
  private readonly root: HTMLDivElement;
  private readonly body: HTMLDivElement;
  private readonly title: HTMLSpanElement;

  constructor(host: HTMLElement) {
    this.root = document.createElement("div");
    this.root.dataset.role = "device-popup";
    this.root.style.cssText = [
      "position:absolute", "right:12px", "top:64px", "width:260px", "padding:10px 12px",
      "border-radius:10px", "background:rgba(12,18,24,.82)", "backdrop-filter:blur(6px)",
      "border:1px solid rgba(0,200,255,.35)", "color:#e0f7fa", "display:none",
      "font:12px/1.35 system-ui,sans-serif", "z-index:8", "box-shadow:0 6px 24px rgba(0,0,0,.5)",
    ].join(";");
    const head = document.createElement("div");
    head.style.cssText = "display:flex;justify-content:space-between;align-items:center;gap:8px;";
    this.title = document.createElement("span");
    this.title.style.cssText = "font-weight:600;";
    const close = document.createElement("button");
    close.type = "button"; close.textContent = "✕"; close.dataset.role = "popup-close";
    close.style.cssText = "background:none;border:none;color:#90a4ae;cursor:pointer;font-size:13px;";
    close.addEventListener("click", () => this.hide());
    head.append(this.title, close);
    this.body = document.createElement("div");
    this.root.append(head, this.body);
    host.appendChild(this.root);
  }

  /** HA-Token aus dem Frontend-Speicher (null wenn nicht vorhanden). */
  static token(): string | null {
    try {
      const raw = localStorage.getItem("hassTokens");
      return raw ? ((JSON.parse(raw) as { access_token?: string }).access_token ?? null) : null;
    } catch { return null; }
  }

  hide(): void { this.root.style.display = "none"; }

  /** Schalter mit 5-Sekunden-Rueckgaengig (kein modaler Dialog). */
  private addActor(id: string, label: string): void {
    const wrap = document.createElement("div");
    wrap.dataset.role = "actor";
    wrap.style.cssText = "margin-top:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;";
    const st = () => (document.querySelector("home-assistant") as any)?.hass?.states?.[id]?.state ?? "—";
    const btn = document.createElement("button");
    btn.type = "button"; btn.dataset.role = "actor-toggle";
    btn.style.cssText = "padding:3px 8px;border-radius:6px;border:1px solid rgba(0,200,255,.5);background:rgba(0,120,160,.35);color:#e0f7fa;cursor:pointer;font-size:11px;";
    const paint = () => { btn.textContent = `${label}: ${st()}`; };
    paint();
    let undoBtn: HTMLButtonElement | null = null;
    let timer: number | null = null;
    /** Schaltet und prueft, ob die Entitaet wirklich reagiert (max. 2,5 s). */
    const call = async (): Promise<boolean> => {
      const domain = id.split(".")[0];
      const service = "toggle";
      const before = st();
      const tok = DevicePopup.token();
      try {
        if (tok) {
          await fetch(`${location.origin}/api/services/${domain}/${service}`, {
            method: "POST",
            headers: { Authorization: `Bearer ${tok}`, "Content-Type": "application/json" },
            body: JSON.stringify({ entity_id: id }),
          });
        }
      } catch { /* unten als "keine Reaktion" gemeldet */ }
      for (let i = 0; i < 10; i++) {
        await new Promise((r) => window.setTimeout(r, 250));
        if (st() !== before) { paint(); return true; }
      }
      paint();
      return false;
    };
    btn.addEventListener("click", () => {
      void (async () => {
        const ok = await call();
        if (!ok) {
          let note = wrap.querySelector('[data-role="actor-note"]') as HTMLElement | null;
          if (!note) {
            note = document.createElement("span");
            note.dataset.role = "actor-note";
            note.style.cssText = "color:#ffb74d;font-size:11px;";
            wrap.appendChild(note);
          }
          note.textContent = "keine Reaktion der Entität (HTTP-Fehler oder Gerät offline)";
          return;
        }
        showUndo();
      })();
      return;
    });

    const showUndo = (): void => {
      if (undoBtn) return;
      undoBtn = document.createElement("button");
      undoBtn.type = "button"; undoBtn.dataset.role = "actor-undo";
      undoBtn.style.cssText = "padding:3px 8px;border-radius:6px;border:1px solid rgba(255,180,0,.7);background:rgba(160,90,0,.45);color:#ffe0b2;cursor:pointer;font-size:11px;";
      let left = 5;
      const tick = () => { if (undoBtn) undoBtn.textContent = `Rückgängig (${left})`; };
      tick();
      undoBtn.addEventListener("click", () => {
        void call();
        if (timer !== null) window.clearInterval(timer);
        undoBtn?.remove(); undoBtn = null;
      });
      wrap.appendChild(undoBtn);
      timer = window.setInterval(() => {
        left -= 1; tick();
        if (left <= 0 && undoBtn) {
          if (timer !== null) window.clearInterval(timer);
          undoBtn.remove(); undoBtn = null;
        }
      }, 1000);
    };
    wrap.append(btn);
    this.body.appendChild(wrap);
  }

  async show(key: string, token: string | null): Promise<void> {
    const cfg = configFor(key);
    this.title.textContent = `${cfg.label}${cfg.raum ? ` · ${cfg.raum}` : ""}`;
    this.root.style.display = "block";
    const el = document.querySelector("home-assistant") as any;
    const states = el?.hass?.states ?? {};
    if (!cfg.entities.length) {
      this.body.innerHTML = `<div style="color:#90a4ae;margin-top:6px">${cfg.hint ?? "keine Messwerte"}</div>`;
      if (cfg.actor && states[cfg.actor.id]) this.addActor(cfg.actor.id, cfg.actor.label);
      return;
    }
    this.body.innerHTML = `<div style="color:#90a4ae;margin-top:6px">lade …</div>`;
    const rows: string[] = [];
    const charts: string[] = [];
    for (const ent of cfg.entities) {
      const st = states[ent.id];
      const val = st ? st.state : "—";
      rows.push(`<div style="display:flex;justify-content:space-between"><span style="color:#b0bec5">${ent.label}</span>
        <span>${val}${ent.unit ? " " + ent.unit : ""}</span></div>`);
      const series = token ? await history(ent.id, token) : [];
      charts.push(`<div style="margin:4px 0 2px;color:#90a4ae">${ent.label} · 24 h</div>${sparkline(series)}`);
    }
    this.body.innerHTML = rows.join("") + (cfg.hint ? `<div style="margin-top:6px;color:#607d8b">${cfg.hint}</div>` : "") + charts.join("");
    if (cfg.actor && states[cfg.actor.id]) this.addActor(cfg.actor.id, cfg.actor.label);
  }
}
