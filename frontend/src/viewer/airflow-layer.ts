
import * as THREE from "three";
import { SensorHistory, doorOpenProbReference, windowOpenProb } from "../airflow/triangulation.ts";
import { VectorField, type FieldOptions, type Opening } from "../airflow/vector-field.ts";
import { chimneyLift, readBadFan, readFan, readLuke, readOutside } from "../airflow/climate-state.ts";

/**
 * Partikel-Stroemung im Viewer.
 *
 * Die Schicht liest die Zustaende selbst aus dem HA-Frontend
 * (document.querySelector("home-assistant").hass), damit sie ohne Aenderung an
 * der Karte funktioniert. Fehlt der Zugriff, laeuft sie mit dem Kaminmodell
 * allein weiter.
 *
 * Positionsanker der Raeume sind Naeherungen aus dem Grundriss; die Temperaturen
 * kommen aus climate.*, die Feuchten aus den drei vorhandenen Feuchtesensoren.
 * Fuer die Badtuer fehlt ein Flursensor — sie bleibt deshalb ungeschaetzt.
 */

const HOUSE = { x0: 0, x1: 10.25, z0: 0, z1: 7.15, y0: 0.2, y1: 5.9 };
const LUKE = { x: 4.74, z: 6.25, w: 1.98, d: 1.04 };
/** Bad EG, Nordost-Ecke, knapp unter dem Ringanker (x=0 ist der Ostgiebel). */
const BAD_SINK = { x: 1.2, y: 2.5, z: 6.5 };
const AUGE = { x: 5.35, z: 3.5, w: 2.0, d: 2.0 };

interface Probe { id: string; x: number; y: number; z: number; rh: string | null; climate: string | null }

const PROBES: Probe[] = [
  { id: "wohnen", x: 5.1, y: 1.2, z: 2.4, rh: null, climate: "climate.heizung_kreis_a" },
  { id: "kueche", x: 5.1, y: 1.2, z: 6.0, rh: null, climate: "climate.heizung_kreis_b" },
  { id: "bad", x: 1.2, y: 1.2, z: 6.4, rh: "sensor.bad_luftfeuchtigkeit", climate: "climate.heizung_kreis_c" },
  { id: "buero", x: 5.4, y: 3.5, z: 6.0, rh: "sensor.buero_luftfeuchte", climate: "climate.heizung_kreis_d" },
  { id: "schlafen", x: 2.0, y: 3.5, z: 2.0, rh: null, climate: "climate.heizung_kreis_e" },
  { id: "technik", x: 1.5, y: 0.8, z: 6.4, rh: "sensor.techniknische_luftfeuchtigkeit", climate: null },
];

function hassState(): any {
  const el = document.querySelector("home-assistant") as any;
  return el && el.hass ? el.hass : null;
}

function num(v: any): number | null {
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

export class AirflowLayer {
  private readonly points: THREE.Points;
  private readonly geom = new THREE.BufferGeometry();
  private readonly pos: Float32Array;
  private readonly col: Float32Array;
  private readonly count: number;
  private readonly hist = new Map<string, SensorHistory>();
  private field: VectorField;
  private enabled = true;
  private frame = 0;
  private last = 0;
  private poll = 0;
  private lukeOpen = false;
  private tRef = 21;
  private outside: number | null = null;
  private fanDir: 1 | 0 | -1 = 1;
  private fanPower = 0;
  private fanSource = "noch nicht gelesen";
  private badPower = 0;
  private badSource = "noch nicht gelesen";
  /** 0..1 Tuer Bad offen, null wenn nicht schaetzbar. */
  private badDoorOpen: number | null = null;
  private rh = new Map<string, number>();

  private readonly scene: THREE.Scene;

  constructor(scene: THREE.Scene, particles = 2600) {
    this.scene = scene;
    this.count = particles;
    this.pos = new Float32Array(particles * 3);
    this.col = new Float32Array(particles * 3);
    for (let i = 0; i < particles; i++) this.respawn(i, true);
    this.geom.setAttribute("position", new THREE.BufferAttribute(this.pos, 3));
    this.geom.setAttribute("color", new THREE.BufferAttribute(this.col, 3));
    const mat = new THREE.PointsMaterial({
      size: 0.09, vertexColors: true, transparent: true, opacity: 0.55,
      depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
    });
    this.points = new THREE.Points(this.geom, mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
    this.scene.add(this.points);
    this.field = new VectorField(this.buildField());
    this.pollStates();
    this.loop();
  }

  private buildField(): FieldOptions {
    const openings: Opening[] = [
      { ...AUGE, y0: 2.34, y1: 4.34, open: true, lift: 0.45 },
      {
        ...LUKE, y0: 2.34, y1: 2.42, open: this.lukeOpen,
        // Auftrieb waechst mit dem Temperaturgefaelle innen/aussen
        lift: this.lukeOpen ? 1.6 * chimneyLift(this.tRef, this.outside) : 0.2,
      },
    ];
    const probes = PROBES.map((p) => ({
      x: p.x, y: p.y, z: p.z,
      t: this.tRef + ((this.rh.get(p.id) ?? 45) - 45) * 0.05,
    }));
    return {
      bounds: HOUSE,
      tRef: this.tRef,
      probes,
      openings,
      fans: this.fanDir === 0 ? [] : [{
        // NW-Ecke des Wohnbereichs, kurz unter dem Ringanker
        x: 9.8, y: 2.5, z: 6.9,
        dir: [0.8 * this.fanDir, -0.2, 0.5 * this.fanDir],
        speed: 1.3 * this.fanPower,
        radius: 5.0,
      }],
      wind: [0.3, -0.2],
      sinks: this.badPower > 0
        ? [{ ...BAD_SINK, power: this.badPower, radius: 3.5 }]
        : [],
    };
  }

  /** Liest climate-, sensor- und Bodnluken-Zustaende einmal je Sekunde. */
  private pollStates(): void {
    const hass = hassState();
    const t = performance.now() / 1000;
    if (hass && hass.states) {
      this.lukeOpen = readLuke(hass.states);
      this.outside = readOutside(hass.states);
      const fan = readFan(hass.states, [
        "switch.lufter_wohnzimmer", "fan.pendelluefter_wohnen", "fan.pendelluefter",
        "fan.helios_kwl_eg", "select.pendelluefter_modus", "select.lueftung_modus",
      ]);
      this.fanDir = fan.dir; this.fanPower = fan.power; this.fanSource = fan.source;
      // Tuerzustand Bad/Flur ohne Flursensor: Referenz = Mittel Buero/Technik
      const badRh = num(hass.states["sensor.bad_luftfeuchtigkeit"]?.state);
      const refRh = [num(hass.states["sensor.buero_luftfeuchte"]?.state),
                     num(hass.states["sensor.techniknische_luftfeuchtigkeit"]?.state)]
        .filter((v): v is number => v !== null);
      if (badRh !== null && refRh.length) {
        const ref = refRh.reduce((a, c) => a + c, 0) / refRh.length;
        this.badDoorOpen = doorOpenProbReference(badRh, ref, this.histOf("sensor.bad_luftfeuchtigkeit"), this.histOf("ref_rh"));
      }
      const bad = readBadFan(hass.states);
      this.badPower = bad.on ? bad.power : 0; this.badSource = bad.source;
      let sum = 0; let n = 0;
      for (const p of PROBES) {
        if (p.rh) {
          const v = num(hass.states[p.rh]?.state);
          if (v !== null) {
            this.rh.set(p.id, v);
            this.histOf(p.rh).push({ t, temp: null, rh: v });
            if (p.id === "buero") this.histOf("ref_rh").push({ t, temp: null, rh: v });
          }
        }
        if (p.climate) {
          const tc = num(hass.states[p.climate]?.attributes?.current_temperature);
          if (tc !== null) { sum += tc; n++; this.histOf(p.climate).push({ t, temp: tc, rh: null }); }
        }
      }
      if (n) this.tRef = Math.round((sum / n) * 10) / 10;
      // Lueften erkennen (nur Diagnose, beeinflusst das Feld noch nicht)
      for (const p of PROBES) {
        if (!p.climate) continue;
        const prob = windowOpenProb(this.histOf(p.climate), this.tRef, 5);
        if (prob > 0.5) (this as any)[`open_${p.id}`] = prob;
      }
    }
    this.field = new VectorField(this.buildField());
  }

  private histOf(key: string): SensorHistory {
    let h = this.hist.get(key);
    if (!h) { h = new SensorHistory(180); this.hist.set(key, h); }
    return h;
  }

  private respawn(i: number, initial = false): void {
    const j = i * 3;
    this.pos[j] = HOUSE.x0 + Math.random() * (HOUSE.x1 - HOUSE.x0);
    this.pos[j + 1] = initial ? HOUSE.y0 + Math.random() * (HOUSE.y1 - HOUSE.y0) : HOUSE.y0 + Math.random() * 1.5;
    this.pos[j + 2] = HOUSE.z0 + Math.random() * (HOUSE.z1 - HOUSE.z0);
    this.paint(i);
  }

  /** Farbe nach lokaler Feuchte: 40 % blau, 70 % rot. */
  private paint(i: number): void {
    const p = PROBES[0];
    let best = Infinity; let h = 45;
    for (const q of PROBES) {
      const d = (q.x - this.pos[i * 3]) ** 2 + (q.z - this.pos[i * 3 + 2]) ** 2;
      if (d < best) { best = d; h = this.rh.get(q.id) ?? 45; }
    }
    const k = Math.min(1, Math.max(0, (h - 40) / 30));
    this.col[i * 3] = k; this.col[i * 3 + 1] = 0.55; this.col[i * 3 + 2] = 1 - k;
    void p;
  }

  private loop = (): void => {
    if (!this.enabled) return;
    this.frame = requestAnimationFrame(this.loop);
    const now = performance.now();
    const dt = this.last ? Math.min(0.05, (now - this.last) / 1000) : 0.016;
    this.last = now;
    this.poll += dt;
    if (this.poll > 1) { this.poll = 0; this.pollStates(); }
    const v: [number, number, number] = [0, 0, 0];
    for (let i = 0; i < this.count; i++) {
      const j = i * 3;
      this.field.velocityAt(this.pos[j], this.pos[j + 1], this.pos[j + 2], v);
      this.pos[j] += v[0] * dt * 1.6;
      this.pos[j + 1] += v[1] * dt * 1.6;
      this.pos[j + 2] += v[2] * dt * 1.6;
      const bd = (this.pos[j] - BAD_SINK.x) ** 2 + (this.pos[j + 1] - BAD_SINK.y) ** 2 +
                 (this.pos[j + 2] - BAD_SINK.z) ** 2;
      if (this.badPower > 0 && bd < 0.04) { this.respawn(i); continue; }
      if (this.pos[j] < HOUSE.x0 || this.pos[j] > HOUSE.x1 ||
          this.pos[j + 1] < HOUSE.y0 || this.pos[j + 1] > HOUSE.y1 ||
          this.pos[j + 2] < HOUSE.z0 || this.pos[j + 2] > HOUSE.z1) this.respawn(i);
    }
    (this.geom.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;
    (this.geom.getAttribute("color") as THREE.BufferAttribute).needsUpdate = true;
  };

  /** Kurzfassung des gelesenen Zustands (fuer Konsole/Diagnose). */
  get state(): string {
    return `fan dir ${this.fanDir} power ${this.fanPower} [${this.fanSource}] bad ${this.badPower} [${this.badSource}] tuer ${this.badDoorOpen ?? "n/a"} luke ${this.lukeOpen} lift ${chimneyLift(this.tRef, this.outside).toFixed(2)}`;
  }

  setEnabled(on: boolean): void {
    this.enabled = on;
    this.points.visible = on;
    (this.points.material as THREE.PointsMaterial).opacity = on ? 0.55 : 0;
    if (on) { this.last = 0; this.loop(); }
    else if (this.frame) { cancelAnimationFrame(this.frame); this.frame = 0; }
  }

  dispose(): void {
    this.enabled = false;
    if (this.frame) cancelAnimationFrame(this.frame);
    this.scene.remove(this.points);
    this.geom.dispose();
    (this.points.material as THREE.Material).dispose();
  }
}
