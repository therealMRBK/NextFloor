// Settings of the house as a whole: who is tracked by which sensor, the start camera, the data of an own button.

import type { PresenceLink, StartView } from "../../../model.ts";
import type { EntityOption } from "../entities.ts";

/**
 * The presence links with `person` changed by `patch` (sensor: null or "none" clears it, room: null clears it). A link that has
 * neither a sensor nor a room left is removed.
 */
export function patchPresence(links: readonly PresenceLink[], person: string, patch: { sensor?: string | null; room?: string | null }): PresenceLink[] {
  const old = links.find((l) => l.person === person);
  const sensor = "sensor" in patch ? (patch.sensor && patch.sensor !== "none" ? patch.sensor : null) : (old?.sensor ?? null);
  const room = "room" in patch ? patch.room || null : (old?.room ?? null);
  const others = links.filter((l) => l.person !== person);
  if (!sensor && !room) return others;
  const next: PresenceLink = room ? { person, sensor, room } : { person, sensor };
  return old ? links.map((l) => (l.person === person ? next : l)) : [...others, next];
}

/** Room sensors that look like they belong to this person (named after them, ESPresense and Bermuda style) come first. */
export function likelyRoomSensors(options: readonly EntityOption[], person: string): EntityOption[] {
  const slug = person.slice(person.indexOf(".") + 1);
  const likely = (o: EntityOption) => o.id.includes(slug) && /(area|room|raum|bermuda|espresense)/.test(o.id);
  return [...options.filter(likely), ...options.filter((o) => !likely(o))];
}

/** The start view as the line to put into a card's YAML. */
export function startViewYaml(view: StartView): string {
  const target = view.target ? `, target: { x: ${view.target.x}, y: ${view.target.y}, z: ${view.target.z} }` : "";
  return `start_view: { theta: ${view.theta}, phi: ${view.phi}, radius: ${view.radius}${target} }`;
}

export type ParsedData = { ok: true; value: Record<string, unknown> | null } | { ok: false };

/** The extra data of a button, typed as JSON: empty means none, and anything but an object is refused. */
export function parseButtonData(text: string): ParsedData {
  const raw = text.trim();
  if (!raw) return { ok: true, value: null };
  try {
    const value: unknown = JSON.parse(raw);
    return value && typeof value === "object" && !Array.isArray(value) ? { ok: true, value: value as Record<string, unknown> } : { ok: false };
  } catch {
    return { ok: false };
  }
}
