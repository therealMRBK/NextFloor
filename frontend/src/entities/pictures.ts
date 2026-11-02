// Where a picture frame's photo comes from: a picture stored with the plan ("image:<id>"), a URL (/local/…, https://…), or an
// image, camera or media player entity whose picture it shows (a photo of the day, the doorbell camera, the album cover).

import type { HomeAssistant } from "../types.ts";

/** The prefix of a picture stored with the plan. */
export const STORED_PICTURE = "image:";

/** The URL of a frame's photo, or null when there is none (yet): `stored` turns a stored picture's id into its data. */
export function pictureUrl(hass: HomeAssistant | undefined, value: string | null | undefined, stored: (id: string) => string | null): string | null {
  const v = (value ?? "").trim();
  if (!v) return null;
  if (v.startsWith(STORED_PICTURE)) return stored(v.slice(STORED_PICTURE.length));
  if (/^(https?:\/\/|\/)/.test(v)) return v;
  if (/^[a-z_]+\.[a-z0-9_]+$/.test(v)) {
    const picture = hass?.states[v]?.attributes.entity_picture;
    return typeof picture === "string" && picture ? picture : null;
  }
  return null;
}

/** The id of a stored picture a frame shows, or null (a URL or an entity is no stored picture). */
export const storedPictureId = (value: string | null | undefined): string | null => (value?.startsWith(STORED_PICTURE) ? value.slice(STORED_PICTURE.length) : null);
