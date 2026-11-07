import assert from "node:assert/strict";
import { test } from "node:test";
import type { CardConfig } from "./card-config.ts";
import { templateKey, withTemplate } from "./card-template.ts";

test("a template lies under the card's own options, which win; type and template stay the card's", () => {
  const templates = { kitchen: { type: "custom:other", height: 520, readable: true, markers: "all" as const, template: "loop" } };
  const own: CardConfig = { type: "custom:nextfloor-card", template: "kitchen", height: 300 };
  const merged = withTemplate(own, templates);
  assert.deepEqual(merged, { type: "custom:nextfloor-card", template: "kitchen", height: 300, readable: true, markers: "all" });
});

test("no template, an unknown one or no templates at all leave the config as it is", () => {
  const own: CardConfig = { type: "custom:nextfloor-card", height: 300 };
  assert.equal(withTemplate(own, { a: { height: 1 } }), own);
  assert.equal(withTemplate({ ...own, template: "nope" }, { a: { height: 1 } }).height, 300);
  assert.equal(withTemplate({ ...own, template: "a" }, undefined).height, 300);
});

test("a template's name becomes a safe key", () => {
  assert.equal(templateKey("  Küche Tablet 10″ "), "kueche_tablet_10");
  assert.equal(templateKey("wall-tablet_1"), "wall-tablet_1");
  assert.equal(templateKey("!!!"), "");
});
