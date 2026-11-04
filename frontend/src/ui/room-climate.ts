
/**
 * Raum-ID im Modell -> KNX-Heizkreis des MDT AKH-0800.03.
 *
 * Ground Truth sind die GAs aus dem Entity-Registry (`unique_id` =
 * <Istwert>_<Sollwert>_<Status>_None), nicht eine YAML-Datei:
 *   A  Ist 2/1/2  Soll 5/1/2  Status 5/1/1
 *   B  Ist 3/1/7  Soll 5/2/2  Status 5/2/1
 *   C  Ist 2/1/2  Soll 5/3/2  Status 5/3/1
 *   D  Ist 2/1/1  Soll 5/4/2  Status 5/4/1
 *   E  Ist 2/1/2  Soll 5/5/2  Status 5/5/1
 *   F  Ist 2/1/1  Soll 5/6/2  Status 5/6/1
 *   G  Ist 2/1/2  Soll 5/7/2  Status 5/7/1
 * Achtung: A, C, E, G teilen sich die Istwert-GA 2/1/2, D und F die GA 2/1/1.
 * Die Istwerte sind also nicht je Kreis eigener Sensorik entsprungen.
 */
export const ROOM_CIRCUIT: Record<string, string> = {
  room_bxdiyw4y: "climate.heizung_kreis_a", // Wohnzimmer
  room_n8cfdju2: "climate.heizung_kreis_b", // Kueche
  room_5i6c4bm8: "climate.heizung_kreis_e", // Bad EG
  room_jldgi7yt: "climate.heizung_kreis_d", // Hauswirtschaftsbereich (Flur/Verteilerzone)
  room_71nd5khw: "climate.heizung_kreis_f", // Buero (Zwerchhaus DG), keine FBH-Platte im Modell
  room_fnde0vyq: "climate.heizung_kreis_g", // Galerie DG (Kreis G)
};

/** Ist-Temperaturen je Raum aus hass.states (nur climate.* mit current_temperature). */
export function readRoomTemps(states: any): Record<string, number> {
  const out: Record<string, number> = {};
  if (!states) return out;
  for (const [room, ent] of Object.entries(ROOM_CIRCUIT)) {
    const t = Number(states[ent]?.attributes?.current_temperature);
    if (Number.isFinite(t)) out[room] = t;
  }
  return out;
}
