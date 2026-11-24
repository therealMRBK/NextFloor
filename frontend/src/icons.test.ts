import assert from "node:assert/strict";
import { test } from "node:test";
import type { DeviceKind } from "./devices.ts";
import { iconPath, iconSvg, mdiIcon } from "./icons.ts";

const KINDS: DeviceKind[] = ["light", "switch", "fan", "cover", "climate", "media", "lock", "sensor", "binary", "scene", "script"];

test("every kind of device has a path and an svg that contains it", () => {
  for (const kind of KINDS) {
    assert.match(iconPath(kind), /^M/, kind);
    assert.ok(iconSvg(kind).includes(`d="${iconPath(kind)}"`), kind);
    assert.ok(iconSvg(kind).startsWith("<svg "));
  }
});

test("icon paths are all different", () => {
  assert.equal(new Set(KINDS.map(iconPath)).size, KINDS.length);
});

test("a chosen icon name is cleaned before it goes into markup", () => {
  assert.ok(mdiIcon("mdi:lamp").includes('icon="mdi:lamp"'));
  assert.ok(mdiIcon("lamp").includes('icon="mdi:lamp"'));
  const hostile = mdiIcon('x"><script>alert(1)</script>');
  assert.ok(!hostile.includes("<script"), hostile);
  assert.equal(hostile.split('"').length, 5, hostile); // only the two attributes' own quotes
});

test("an icon of a registered icon set keeps its set (#226)", () => {
  assert.ok(mdiIcon("local:minisforum-ms01").includes('icon="local:minisforum-ms01"'));
  assert.ok(mdiIcon(" phu:printer ").includes('icon="phu:printer"'));
  const hostile = mdiIcon('local:x"><script>alert(1)</script>');
  assert.ok(!hostile.includes("<script"), hostile);
  assert.equal(hostile.split('"').length, 5, hostile);
});
