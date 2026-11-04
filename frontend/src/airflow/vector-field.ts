
/**
 * Grobes Stroemungsfeld (0,5 m Raster) ueber dem Gebaeude.
 *
 * Kein Navier-Stokes-Loeser, sondern eine Superposition aus drei Anteilen:
 *  - Auftrieb (Boussinesq): v_y = beta * (T_lokal - T_referenz)
 *  - Kaminzug durch Bodenluke/Treppenauge, wenn die Luke offen ist
 *  - Sog/Kegel des Luefters
 * Waende werden nicht als Hindernisse gerechnet (dafuer fehlt die Wandliste im
 * Feld); Partikel werden stattdessen an den Gebaeudegrenzen zurueckgesetzt.
 */

export interface Bounds {
  x0: number; x1: number; z0: number; z1: number; y0: number; y1: number;
}

export interface Opening {
  x: number; z: number;
  /** Kantenlaenge der Durchstiegsflaeche. */
  w: number; d: number;
  /** Unterkante/Oberkante der Oeffnung. */
  y0: number; y1: number;
  open: boolean;
  /** Zusatzauftrieb relativ zum Hausmittel (K). */
  lift?: number;
}

export interface Fan {
  x: number; y: number; z: number;
  dir: [number, number, number];
  /** m/s am Kegelursprung. */
  speed: number;
  radius: number;
}

export interface FieldOptions {
  bounds: Bounds;
  /** Referenztemperatur des Hauses (Mittel). */
  tRef: number;
  /** Raumtemperaturen mit Position fuer den Auftrieb. */
  probes: { x: number; y: number; z: number; t: number }[];
  openings: Opening[];
  fans: Fan[];
  /** Wind von aussen in m/s (Nordkomponente positiv). */
  wind?: [number, number];
}

const BETA = 0.004; // 1/K, Auftriebsbeiwert (auf Gebaeudemassstab skaliert)
const CHIMNEY = 1.8; // m/s Zusatzauftrieb im Schacht bei offener Luke
const FALLOFF = 1.2; // m, Reichweite eines Schachts

export class VectorField {
  private readonly o: FieldOptions;
  constructor(o: FieldOptions) { this.o = o; }

  /** Schreibt die Geschwindigkeit an (x,y,z) nach out und gibt sie zurueck. */
  velocityAt(x: number, y: number, z: number, out: [number, number, number]): [number, number, number] {
    out[0] = 0; out[1] = 0; out[2] = 0;

    // 1. Auftrieb aus der naechsten Messstelle
    let best = Infinity; let localT = this.o.tRef;
    for (const p of this.o.probes) {
      const d = (p.x - x) ** 2 + (p.z - z) ** 2;
      if (d < best) { best = d; localT = p.t; }
    }
    out[1] += BETA * (localT - this.o.tRef) * 40;

    // 2. Schacht (Bodenluke, Treppenauge): zieht nach oben und zur Mitte
    for (const op of this.o.openings) {
      const dx = x - op.x; const dz = z - op.z;
      const r = Math.hypot(dx, dz);
      const reach = Math.max(op.w, op.d) * 0.5 + FALLOFF;
      if (r > reach) continue;
      const strength = (op.open ? 1 : 0.25) * (1 - r / reach) * (op.lift ?? 1);
      out[1] += CHIMNEY * strength;
      out[0] -= (dx / (r || 1)) * strength * 0.6;
      out[2] -= (dz / (r || 1)) * strength * 0.6;
    }

    // 3. Luefterkegel
    for (const f of this.o.fans) {
      const dx = x - f.x; const dy = y - f.y; const dz = z - f.z;
      const r = Math.hypot(dx, dy, dz);
      if (r > f.radius) continue;
      const k = (1 - r / f.radius) * f.speed;
      out[0] += f.dir[0] * k; out[1] += f.dir[1] * k; out[2] += f.dir[2] * k;
    }

    // 4. Wind
    if (this.o.wind) { out[0] += this.o.wind[0] * 0.15; out[2] += this.o.wind[1] * 0.15; }
    return out;
  }
}
