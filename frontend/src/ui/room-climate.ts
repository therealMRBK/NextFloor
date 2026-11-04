/**
 * Raumtemperatur-Anbindung fuer NextFloor.
 *
 * Zwei getrennte Dinge, die frueher vermischt waren:
 *
 * 1) FBH-Regelung (`fbh_mix`)  -> Kanaele A..G des MDT AKH-0800.03
 *    (climate.heizung_kreis_*), Istwert-GAs der Regler-Eingaenge:
 *      A 2/1/2 · B 3/1/7 · C 2/1/2 · D 2/1/1 · E 2/1/2 · F 2/1/1 · G 2/1/2
 *    Diese GAs sind Regler-Objekte, keine Fuehler-Identitaet: A/C/E/G teilen
 *    2/1/2, D/F teilen 2/1/1.
 *
 * 2) Raumluft-Heatmap (`knx_room_temp`) -> eigene Fuehler-Entitaeten.
 *    Belegt aus der Telegramm-DB (.storage/knx/telegrams.db, 169.776 Sätze)
 *    plus Quelle je GA:
 *      5/1/0 <- 1.1.11  (24,5 °C)  sensor.wohnzimmer_temperatur_2
 *      2/1/2 <- 1.1.7   (22,4 °C)  sensor.bad_temperatur
 *      2/1/1 <- 1.1.6   (22,3 °C)  sensor.dachgeschoss_temperatur
 *      3/1/7 <- 1.1.9   (23,3 °C)  sensor.buero_temperatur
 *      4/1/0 <- 1.1.10  (25,8 °C)  sensor.techniknische_temperatur
 *      5/0/0 <- 1.1.8   ( 5,9 °C)  sensor.aussentemperatur_knx (aussen)
 *
 * Offen (Betreiber-Bestaetigung noetig): 3/1/7 ist gleichzeitig Regler-Ist von
 * Kreis B (Kueche laut Spezifikation) und heisst als Entitaet "Buero". Bis zur
 * Klaerung wird der Sensor beiden Raeumen zugeordnet und im UI als solcher
 * gekennzeichnet.
 */
export const ROOM_CIRCUIT: Record<string, string> = {
  room_bxdiyw4y: "climate.heizung_kreis_a", // Wohnzimmer
  room_n8cfdju2: "climate.heizung_kreis_b", // Kueche
  room_5i6c4bm8: "climate.heizung_kreis_e", // Bad EG
  room_jldgi7yt: "climate.heizung_kreis_d", // Hauswirtschaftsbereich (Flur/Verteilerzone)
  room_71nd5khw: "climate.heizung_kreis_f", // Buero (Zwerchhaus DG)
  room_fnde0vyq: "climate.heizung_kreis_g", // Galerie DG
};

/** Raum-ID -> dedizierte Raumfuehler-Entitaet (Vorrang vor dem Heizkreis). */
export const ROOM_SENSOR: Record<string, string> = {
  room_bxdiyw4y: "sensor.wohnzimmer_temperatur_2", // 5/1/0  Quelle 1.1.11
  room_n8cfdju2: "sensor.buero_temperatur", // 3/1/7  Quelle 1.1.9 (Regler-Ist Kreis B)
  room_5i6c4bm8: "sensor.bad_temperatur", // 2/1/2  Quelle 1.1.7
  room_jldgi7yt: "sensor.techniknische_temperatur", // 4/1/0  Quelle 1.1.10
  room_71nd5khw: "sensor.dachgeschoss_temperatur", // 2/1/1  Quelle 1.1.6 (DG)
  room_fnde0vyq: "sensor.dachgeschoss_temperatur", // 2/1/1  Quelle 1.1.6 (DG)
};

export type RoomTempSource = "sensor" | "circuit";

/**
 * Ist-Temperaturen je Raum. Prioritaet: eigener Raumfuehler, danach der
 * Istwert des Heizkreises. Liefert zusaetzlich, woher der Wert stammt.
 */
export function readRoomTemps(states: any): Record<string, number> {
  return Object.fromEntries(
    Object.entries(readRoomTempsWithSource(states)).map(([r, v]) => [r, v.temp]),
  );
}

export function readRoomTempsWithSource(
  states: any,
): Record<string, { temp: number; source: RoomTempSource; entity: string }> {
  const out: Record<string, { temp: number; source: RoomTempSource; entity: string }> = {};
  if (!states) return out;
  for (const room of Object.keys(ROOM_CIRCUIT)) {
    const sensorId = ROOM_SENSOR[room];
    const fromSensor = sensorId ? Number(states[sensorId]?.state) : NaN;
    if (Number.isFinite(fromSensor)) {
      out[room] = { temp: fromSensor, source: "sensor", entity: sensorId };
      continue;
    }
    const circuit = ROOM_CIRCUIT[room];
    const fromCircuit = Number(states[circuit]?.attributes?.current_temperature);
    if (Number.isFinite(fromCircuit)) {
      out[room] = { temp: fromCircuit, source: "circuit", entity: circuit };
    }
  }
  return out;
}
