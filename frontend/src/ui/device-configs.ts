
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

export function configFor(key: string): DeviceConfig {
  return DEVICE_CONFIGS[key] ?? {
    label: key, raum: "",
    entities: [], hint: "für dieses Gerät ist noch keine Entität hinterlegt",
  };
}
