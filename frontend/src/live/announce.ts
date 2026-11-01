// Announcements on this screen and from a room: the action nextfloor.announce (announce.py) speaks in the rooms and sends
// every announcement to the open NextFloor screens, which show it big, play a chime and speak it.

import { pointInPolygon, type Floor, type Room } from "../model.ts";
import type { HomeAssistant } from "../types.ts";

export interface Announcement {
  message: string;
  /** Only the screens with these names; empty: every screen. */
  screens: string[];
  /** The message spoken by Home Assistant's text-to-speech, or null (the browser's own voice speaks then). */
  audio: string | null;
  time: string;
}

/** Whether an announcement is meant for this screen: every screen, or this one by its name. A muted screen hears none. */
export function forThisScreen(a: Pick<Announcement, "screens">, name: string | null | undefined, muted = false): boolean {
  if (muted) return false;
  if (!a.screens?.length) return true;
  const own = (name ?? "").trim().toLocaleLowerCase();
  return !!own && a.screens.some((s) => s.trim().toLocaleLowerCase() === own);
}

/** Several views on one page (the panel and cards) hear the same announcement: only the first one shows and speaks it. */
const claimed: Set<string> = ((globalThis as Record<string, unknown>).__nfAnnounced as Set<string> | undefined) ?? new Set<string>();
(globalThis as Record<string, unknown>).__nfAnnounced = claimed;

export function claim(a: Pick<Announcement, "time" | "message">): boolean {
  const key = `${a.time}|${a.message}`;
  if (claimed.has(key)) return false;
  claimed.add(key);
  if (claimed.size > 50) claimed.delete(claimed.values().next().value as string);
  return true;
}

/** How long the message stays on screen: long enough to read it, at least 6 s, at most 30 s. */
export const showFor = (message: string): number => Math.min(30_000, Math.max(6_000, message.split(/\s+/).length * 600 + 2_000));

/** A soft two-tone chime, made by the browser (no sound file). Resolves when it has played (or could not). */
export function chime(): Promise<void> {
  try {
    const Ctx = (globalThis as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext }).AudioContext ?? (globalThis as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return Promise.resolve();
    const ctx = new Ctx();
    const tone = (freq: number, start: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime + start);
      gain.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + start + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + 0.9);
      osc.connect(gain).connect(ctx.destination);
      osc.start(ctx.currentTime + start);
      osc.stop(ctx.currentTime + start + 1);
    };
    tone(880, 0);
    tone(660, 0.35);
    return new Promise((done) =>
      setTimeout(() => {
        void ctx.close().catch(() => undefined);
        done();
      }, 1400),
    );
  } catch {
    return Promise.resolve();
  }
}

/** Speak with the browser's own voice in the user's language (when Home Assistant gave no audio). */
function speakInBrowser(hass: HomeAssistant, message: string): void {
  const synth = (globalThis as { speechSynthesis?: SpeechSynthesis }).speechSynthesis;
  const Utterance = (globalThis as { SpeechSynthesisUtterance?: typeof SpeechSynthesisUtterance }).SpeechSynthesisUtterance;
  if (!synth || !Utterance) return;
  const u = new Utterance(message);
  u.lang = hass.language || "en";
  synth.cancel();
  synth.speak(u);
}

/** Chime, then the message: Home Assistant's audio when there is one, else the browser's voice. Browsers may block sound until the page was tapped once. */
export async function playAnnouncement(hass: HomeAssistant, a: Announcement): Promise<void> {
  await chime();
  if (a.audio) {
    try {
      const url = a.audio.startsWith("/") && hass.hassUrl ? hass.hassUrl(a.audio) : a.audio;
      await new Audio(url).play();
      return;
    } catch {
      // blocked or failed: the browser's voice tries instead
    }
  }
  speakInBrowser(hass, a.message);
}

/** Subscribes this screen to the announcements; resolves to the unsubscribe function (or a no-op with an older backend). */
export function subscribeAnnouncements(hass: HomeAssistant, onAnnouncement: (a: Announcement) => void): Promise<() => void> {
  return hass.connection.subscribeMessage<Announcement>(onAnnouncement, { type: "nextfloor/announcements/subscribe" }).then(
    (stop) => () => void stop().catch(() => undefined),
    () => () => undefined,
  );
}

const SPEAKER_DOMAINS = /^(media_player|assist_satellite)\./;

/** Every entity of an area, its own or its device's (NextFloor's area lists leave out what it does not draw, like voice satellites). */
function inArea(hass: HomeAssistant, areaId: string | null | undefined): string[] {
  if (!areaId) return [];
  return Object.values(hass.entities ?? {})
    .filter((e) => !e.hidden && (e.area_id ?? (e.device_id ? hass.devices?.[e.device_id]?.area_id : null)) === areaId)
    .map((e) => e.entity_id);
}

/** Whether a speaker may speak by itself: no TV, not off or gone (as announce.py decides it). */
function usable(hass: HomeAssistant, id: string): boolean {
  const st = hass.states[id];
  if (!st || st.state === "unavailable") return false;
  if (id.startsWith("notify.")) return hass.entities?.[id]?.platform === "alexa_devices" && id.endsWith("_announce");
  if (st.state === "off" || st.state === "unknown") return false;
  return st.attributes.device_class !== "tv";
}

/**
 * The speaker an announcement in the room goes to, picked as announce.py picks it: chosen in the plan, else placed in the
 * room, else a voice satellite, an Echo or a speaker of its area (sorted by id). Null: the room cannot speak.
 */
export function roomSpeaker(hass: HomeAssistant, floor: Floor | null, room: Room): string | null {
  if (room.announce_speaker === "none") return null;
  if (room.announce_speaker) return room.announce_speaker;
  if (floor && room.points.length >= 3) {
    const placed = [
      ...floor.placements.filter((p) => SPEAKER_DOMAINS.test(p.entity_id)).map((p) => ({ id: p.entity_id, x: p.x, z: p.z })),
      ...floor.furniture.filter((f) => f.entity && SPEAKER_DOMAINS.test(f.entity)).map((f) => ({ id: f.entity!, x: f.x, z: f.z })),
    ];
    const inside = placed.find((p) => pointInPolygon([p.x, p.z], room.points) && usable(hass, p.id));
    if (inside) return inside.id;
  }
  const area = inArea(hass, room.area_id);
  for (const domain of ["assist_satellite.", "notify.", "media_player."]) {
    const found = area.filter((id) => id.startsWith(domain) && usable(hass, id)).sort()[0];
    if (found) return found;
  }
  return null;
}

/** Whether the room panel offers announcements for the room. */
export const roomHasSpeaker = (hass: HomeAssistant, floor: Floor | null, room: Room): boolean => roomSpeaker(hass, floor, room) !== null;

/** Whether Home Assistant offers the action (NextFloor is set up and its backend knows announcements). */
export const canAnnounce = (hass: HomeAssistant | undefined): boolean => !!hass?.services?.nextfloor?.announce;
