
/** Welche Entitaeten ein Anker im Popup zeigt (nur real vorhandene). */
export interface DeviceConfig {
  label: string;
  raum: string;
  entities: { id: string; label: string; unit?: string }[];
  actor?: { id: string; label: string };
  hint?: string;
}

export const DEVICE_CONFIGS: Record<string, DeviceConfig> = {
  anker_solix: {
    label: "Anker SOLIX", raum: "Keller-Appendix",
    entities: [
      { id: "sensor.system_bchc_pv_sb_solarleistung", label: "PV-Leistung", unit: "W" },
      { id: "sensor.system_bchc_pv_sb_akkuleistung", label: "Akkuleistung", unit: "W" },
      { id: "sensor.system_bchc_pv_sb_einspeiseleistung", label: "Einspeisung", unit: "W" },
    ],
    hint: "Kein SOC-Sensor in HA vorhanden",
  },
  buero_rack: {
    label: "Büro-Rack", raum: "DG Zwerchhaus",
    entities: [
      { id: "sensor.nipogi_leistung", label: "NiPoGi", unit: "W" },
      { id: "sensor.acemagic_leistung", label: "ACEMAGIC", unit: "W" },
    ],
    hint: "Shelly Home Rack hat keine Entität",
  },
  repeater_waermepumpe: {
    label: "FRITZ!Repeater", raum: "Keller Technik",
    entities: [{ id: "sensor.waermepumpe_ist_leistung", label: "Vitocal Leistung", unit: "kW" }],
  },
  netgear_switch: {
    label: "Netgear Switch", raum: "Zählerschrank",
    entities: [], hint: "keine Leistungsentität hinterlegt",
  },
  speedport: {
    label: "Speedport", raum: "Keller-Appendix",
    entities: [], hint: "keine Entität hinterlegt",
  },
  multimedia_nordwest: {
    label: "Multimedia-Cluster", raum: "Wohnen Nordwest",
    entities: [], hint: "TV / Soundbar / Receiver ohne Leistungsmessung",
  },
};

/** Aktoren der Anker (verifizierte Entitaeten). */
const ACTORS: Record<string, { id: string; label: string }> = {
  shelly_hwr_ecke: { id: "light.shelly_hwr_knx", label: "RGB-Leuchte HWR (KNX)" },
  shelly_bad_nord: { id: "switch.bad_luefter_dauer", label: "Bad-Lüfter (Dauer)" },
  shelly_bad_sued: { id: "light.shellybadrechts_2", label: "Leuchte Bad Süd" },
  array_buero_zwerchhaus_1: { id: "light.shelly_dg_buero1_knx", label: "RGB Büro 1 (KNX)" },
  array_buero_zwerchhaus_2: { id: "light.shelly_dg_buero2_knx", label: "RGB Büro 2 (KNX)" },
  array_buero_zwerchhaus_3: { id: "light.shelly_dg_buero3_knx", label: "RGB Büro 3 (KNX)" },
  array_buero_zwerchhaus_4: { id: "light.shelly_dg_buero4_knx", label: "RGB Büro 4 (KNX)" },
  // Büro 5: es gibt keine Entität light.shelly_dg_buero5 (nur 1-4 vorhanden)
};

export function actorFor(key: string): { id: string; label: string } | undefined {
  return ACTORS[key];
}

export function configFor(key: string): DeviceConfig {
  const direct = DEVICE_CONFIGS[key];
  if (direct) return { ...direct, actor: direct.actor ?? actorFor(key) };
  const act = actorFor(key);
  if (act) return { label: key, raum: "", entities: [], actor: act };
  return {
    label: key, raum: "",
    entities: [], hint: "für dieses Gerät ist noch keine Entität hinterlegt",
  };
}
