/**
 * Screens that show a game: a monitor on a games console. The Xbox integration reports whether the console is on, but the game
 * only on the account that plays it, so a screen names the console and the accounts and the game is found among the account's
 * entities (title and artwork of its device).
 */
import { deviceSiblings } from "../devices.ts";
import type { Furniture } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import type { PlanPoint } from "../viewer/live-energy.ts";
import { appColor, type MediaNow } from "./media.ts";

const NOT_ON = ["off", "standby", "unavailable", "unknown"];
const NO_TEXT = ["unavailable", "unknown", ""];

/** The entity of the account's device with one of these translation keys (or, without keys, these words in its id), the first key first. */
function sibling(hass: HomeAssistant, account: string, domain: string, keys: string[]): string | null {
  const own = deviceSiblings(hass, account).filter((id) => id.startsWith(`${domain}.`) && hass.states[id]);
  for (const key of keys) {
    const hit = own.find((id) => hass.entities?.[id]?.translation_key === key) ?? own.find((id) => !hass.entities?.[id]?.translation_key && id.includes(key));
    if (hit) return hit;
  }
  return null;
}

const titleOf = (hass: HomeAssistant, account: string) => sibling(hass, account, "sensor", ["now_playing"]);
const artOf = (hass: HomeAssistant, account: string) => sibling(hass, account, "image", ["titled_hero_art", "now_playing"]);

/** A game account's "In game" sensor: what a screen can take as a source. */
export const isGameAccount = (hass: HomeAssistant, id: string): boolean => {
  if (!id.startsWith("binary_sensor.")) return false;
  const key = hass.entities?.[id]?.translation_key;
  return key ? key === "in_game" : id.endsWith("_in_game");
};

/** Whether the device on a screen is on; a screen without a device has nothing to wait for. */
export function screenDeviceOn(hass: HomeAssistant, f: Furniture): boolean {
  if (!f.screen_device) return true;
  const st = hass.states[f.screen_device];
  return !!st && !NOT_ON.includes(st.state);
}

/** Who plays: the name of the account's device, which is the gamertag unless it was renamed. */
function accountName(hass: HomeAssistant, account: string): string {
  const id = hass.entities?.[account]?.device_id;
  const device = id ? hass.devices?.[id] : undefined;
  return device?.name_by_user || device?.name || "";
}

/** The game of the first of a screen's accounts that is in game. */
export function gameOnScreen(hass: HomeAssistant, f: Furniture): { title: string; picture: string | null; player: string } | null {
  const account = (f.screen_sources ?? []).find((id) => hass.states[id]?.state === "on");
  if (!account) return null;
  const titleId = titleOf(hass, account);
  const title = titleId ? hass.states[titleId].state : "";
  const artId = artOf(hass, account);
  const picture = artId ? hass.states[artId].attributes.entity_picture : null;
  return { title: NO_TEXT.includes(title) ? "" : title, picture: typeof picture === "string" && picture ? picture : null, player: accountName(hass, account) };
}

/** The game on a screen, for its card above the screen; it has no player of its own, so the card goes by the screen's id. */
export function gameNow(hass: HomeAssistant, f: Furniture, name: string, at: PlanPoint): MediaNow | null {
  const game = screenDeviceOn(hass, f) ? gameOnScreen(hass, f) : null;
  return game && { entity: f.id, name, at, playing: true, title: game.title, artist: game.player, picture: game.picture, volume: null, color: appColor(null), app: null, group: [], rings: f.sound_rings ?? 1, game: true };
}

/** The entities a screen's picture follows. */
export function screenWatched(hass: HomeAssistant, f: Furniture): (string | null | undefined)[] {
  return [f.screen_device, ...(f.screen_sources ?? []).flatMap((id) => [id, titleOf(hass, id), artOf(hass, id)])];
}
