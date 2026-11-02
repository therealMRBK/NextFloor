// Which Home Assistant entities the 3D view reacts to. The view only redraws when one of them changed, so the list has to cover
// everything it shows: devices and their power sensors, openings and their contacts, energy, presence, heat, weather, and so on.

import { alertEntities, type AlertSources } from "../../alerts.ts";
import { carWatched, deviceSiblings, kindOf, robotRoomSensor, type FurnitureLinks, type OpeningEntities, roomEntities } from "../../devices.ts";
import { powerSensorFor } from "../../energy.ts";
import { placedEntities } from "../../markers.ts";
import type { Building } from "../../model.ts";
import { parkingEntities } from "../../parking.ts";
import { pluginWatched } from "../../plugins/registry.ts";
import type { HomeAssistant } from "../../types.ts";
import { weatherEntity } from "../../weather.ts";

export interface WatchInputs {
  hass: HomeAssistant;
  building: Building;
  openingLinks: ReadonlyMap<string, OpeningEntities>;
  furnitureLinks: ReadonlyMap<string, FurnitureLinks>;
  /** Heat map or room labels are on, so the sensors of every room's area are needed. */
  needsRoomSensors: boolean;
  alertSources: AlertSources | null;
  weatherEntityId: string | null;
}

type MaybeId = string | null | undefined;

const real = (id: MaybeId): id is string => !!id && id !== "none";
const roomsOf = (b: Building) => b.floors.flatMap((f) => f.rooms);
const furnitureOf = (b: Building) => b.floors.flatMap((f) => f.furniture);

/** The sensors and entities behind the openings: blinds, contacts, tilt, positions. */
function openingIds(links: WatchInputs["openingLinks"]): MaybeId[] {
  return [...links.values()].flatMap((e) => [e.cover, e.cover2, e.contact, e.tilt, e.contact2, e.tilt2, e.position, e.tiltAngle]);
}

/** What furniture is linked to besides its device: state lights, doors and thermometers of a fridge, battery, status, charge, export, pictures. */
function furnitureIds(inputs: WatchInputs): MaybeId[] {
  const { hass, building, furnitureLinks } = inputs;
  const pieces = furnitureOf(building);
  return [
    ...[...furnitureLinks.values()].flatMap((l) => [l.entity, l.power]),
    ...pieces.flatMap((m) => [m.state_entity, m.state_entity2, m.color_entity, ...(m.gang_entities ?? []), ...(m.extra_lights ?? []), m.cover_entity, m.care_entity, m.room_sensor, m.show_when?.entity, m.picture && /^[a-z_]+\.[a-z0-9_]+$/.test(m.picture) ? m.picture : null]),
    // a washer's, dryer's or dishwasher's time left comes from a sensor next to its switch
    ...pieces.filter((m) => m.type === "washer" || m.type === "dryer" || m.type === "dishwasher").flatMap((m) => deviceSiblings(hass, furnitureLinks.get(m.id)?.entity ?? furnitureLinks.get(m.id)?.power).filter((id) => id.startsWith("sensor."))),
    ...pieces.flatMap((m) => [m.door_left, m.door_right, m.soc, m.status, m.charge, m.export, m.temp_entity, m.temp_entity2]),
    ...pieces.filter((m) => m.type === "robot_vacuum").map((m) => robotRoomSensor(hass, furnitureLinks.get(m.id)?.entity ?? null, m.room_sensor)),
    ...pieces.flatMap((m) => (m.pictures ?? []).flatMap((rule) => [rule.entity, ...(rule.image.startsWith("camera:") ? [rule.image.slice("camera:".length)] : [])])),
  ];
}

/** The roof: windows with their blinds and contacts, and the sensors of solar fields and strings that feed the cables. */
function roofIds(b: Building): MaybeId[] {
  const roof = b.settings.roof;
  return [...(roof?.windows ?? []).flatMap((w) => [w.cover, w.contact, w.tilt]), ...(roof?.solar ?? []).map((f) => f.entity), ...(roof?.strings ?? []).map((s) => s.entity)].filter(real);
}

export function watchedEntities(inputs: WatchInputs): string[] {
  const { hass, building: b } = inputs;
  const placed = placedEntities(b);
  const energy = b.energy;
  const lightsOfRooms = roomsOf(b).flatMap((r) => roomEntities(hass, r).filter((id) => kindOf(id) === "light"));
  const sensorsOfRooms = inputs.needsRoomSensors ? roomsOf(b).flatMap((r) => roomEntities(hass, r).filter((id) => id.startsWith("sensor.") || id.startsWith("climate."))) : [];
  const ids: MaybeId[] = [
    ...placed,
    ...openingIds(inputs.openingLinks),
    ...placed.map((id) => powerSensorFor(hass, id)),
    // what plugins draw for a device may follow further entities (a camera's motion sensor)
    ...placed.flatMap((id) => (hass.states[id] ? pluginWatched({ hass, entityId: id, state: hass.states[id] }) : [])),
    ...furnitureIds(inputs),
    ...roofIds(b),
    energy.grid,
    energy.solar,
    energy.battery,
    energy.battery_soc,
    energy.consumption,
    energy.tariff,
    energy.gas,
    energy.water,
    ...b.presence.flatMap((p) => [p.person, p.sensor]),
    ...lightsOfRooms,
    ...roomsOf(b).map((r) => r.floor_heating),
    ...b.floors.flatMap((f) => (f.outdoor ?? []).flatMap((a) => [a.temp_entity, a.pump_entity])),
    ...sensorsOfRooms,
    ...(inputs.alertSources ? alertEntities(inputs.alertSources) : []),
    ...parkingEntities(b.floors),
    ...carWatched(hass, b.floors),
    weatherEntity(hass, inputs.weatherEntityId ?? b.settings.weather_entity),
    "sun.sun",
  ];
  return [...new Set(ids.filter((id): id is string => !!id))];
}
