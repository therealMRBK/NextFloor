
/** Raum-ID im Modell -> KNX-Heizkreis (climate-Entitaet des MDT-Aktors). */
export const ROOM_CIRCUIT: Record<string, string> = {
  room_bxdiyw4y: "climate.heizung_kreis_a", // Wohnzimmer
  room_n8cfdju2: "climate.heizung_kreis_b", // Kueche
  room_5i6c4bm8: "climate.heizung_kreis_e", // Bad EG
  room_jldgi7yt: "climate.heizung_kreis_d", // Hauswirtschaftsbereich (Flur/Verteilerzone)
  room_71nd5khw: "climate.heizung_kreis_f", // Buero (Zwerchhaus DG), keine FBH-Platte im Modell
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
