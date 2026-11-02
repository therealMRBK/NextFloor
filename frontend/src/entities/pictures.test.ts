import assert from "node:assert/strict";
import { test } from "node:test";
import { entity, hassOf } from "./fixtures.ts";
import { pictureUrl, storedPictureId } from "./pictures.ts";

test("a frame's photo from a stored picture, a URL or an entity's picture", () => {
  const hass = hassOf([entity("image.photo_of_the_day", "2026-11-02", { entity_picture: "/api/image_proxy/image.photo_of_the_day?token=1" }), entity("camera.door", "idle")]);
  const stored = (id: string) => (id === "img_1" ? "data:image/jpeg;base64,AAA" : null);
  assert.equal(pictureUrl(hass, "image:img_1", stored), "data:image/jpeg;base64,AAA");
  assert.equal(pictureUrl(hass, "image:img_2", stored), null, "not loaded yet");
  assert.equal(pictureUrl(hass, "/local/holiday.jpg", stored), "/local/holiday.jpg");
  assert.equal(pictureUrl(hass, "https://example.org/a.png", stored), "https://example.org/a.png");
  assert.equal(pictureUrl(hass, "image.photo_of_the_day", stored), "/api/image_proxy/image.photo_of_the_day?token=1");
  assert.equal(pictureUrl(hass, "camera.door", stored), null, "an entity without a picture");
  assert.equal(pictureUrl(hass, "", stored), null);
  assert.equal(storedPictureId("image:img_1"), "img_1");
  assert.equal(storedPictureId("/local/a.jpg"), null);
});
