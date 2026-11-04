
import * as THREE from "three";
import type { Building } from "../model.ts";

/**
 * WLAN-Anker-Layer: markiert die festen Anker aus settings.wifi_anchors.
 *
 * Keine erfundene Feldstaerke — gezeigt werden nur die verorteten Geraete.
 * Farbe nach Rolle: Shelly bernstein, Mesh/Netz blau, Cluster violett,
 * Kellerzelle grau (eigene Funkzelle).
 */
const FARBE: Record<string, number> = {
  shelly_relay: 0xffb300,
  shelly_rgb: 0xffb300,
  shelly_rgb_array: 0xff8a00,
  mesh_repeater: 0x29b6f6,
  workstation_anchor: 0x00e5ff,
  cluster: 0xbd00ff,
  router_gateway: 0x9e9e9e,
  lan_core: 0x9e9e9e,
  repeater_staubeton: 0x9e9e9e,
};

export class WifiLayer {
  private readonly group = new THREE.Group();
  private readonly scene: THREE.Scene;
  private built = false;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.group.name = "wifi-anchors";
    this.scene.add(this.group);
  }

  private clear(): void {
    for (const child of [...this.group.children]) {
      this.group.remove(child);
      const m = child as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
      if (m.material) (m.material as THREE.Material).dispose();
    }
  }

  /** Baut die Marker aus dem Gebaeudemodell (idempotent). */
  setBuilding(b: Building): void {
    const anchors = (b.settings as any)?.wifi_anchors;
    if (!anchors) return;
    this.clear();
    const geo = new THREE.SphereGeometry(0.09, 12, 10);
    const add = (pos: number[], typ: string, id: string) => {
      const mat = new THREE.MeshBasicMaterial({ color: FARBE[typ] ?? 0xffffff });
      const m = new THREE.Mesh(geo, mat);
      m.position.set(pos[0], pos[1], pos[2]);
      m.name = `wifi:${id}`;
      m.userData = { typ };
      this.group.add(m);
    };
    for (const [id, a] of Object.entries<any>(anchors.offenes_volumen ?? {})) {
      if (Array.isArray(a.pos) && Array.isArray(a.pos[0])) {
        a.pos.forEach((p: number[], i: number) => add(p, a.typ, `${id}_${i + 1}`));
      } else if (Array.isArray(a.pos)) {
        add(a.pos, a.typ, id);
      }
    }
    for (const [id, a] of Object.entries<any>(anchors.keller_zelle ?? {})) {
      if (Array.isArray(a.pos)) add(a.pos, a.typ, `keller_${id}`);
    }
    this.built = true;
  }

  get count(): number { return this.built ? this.group.children.length : 0; }

  /** Ankerkugein fuer das Raycasting (nur wenn der Layer sichtbar ist). */
  get markers(): THREE.Object3D[] { return this.group.visible ? this.group.children : []; }

  setVisible(on: boolean): void { this.group.visible = on; }

  dispose(): void { this.clear(); this.scene.remove(this.group); }
}
