import assert from "node:assert/strict";
import { test } from "node:test";
import { serviceOptions } from "./entities.ts";
import type { HomeAssistant } from "../../types.ts";

test("serviceOptions lists services from hass.services with friendly names and falls back when offline", () => {
  const fallback = serviceOptions(undefined);
  assert.ok(fallback.some((o) => o.id === "light.toggle"));

  const hass = {
    services: {
      light: {
        toggle: { name: "Toggle" },
        turn_on: { name: "Turn on" },
      },
      script: {
        evening: {},
      },
    },
  } as unknown as HomeAssistant;

  const opts = serviceOptions(hass, "custom.action");
  assert.deepEqual(
    opts.map((o) => o.id),
    ["custom.action", "light.toggle", "light.turn_on", "script.evening"],
  );
  assert.equal(opts.find((o) => o.id === "light.toggle")?.label, "light.toggle · Toggle");
});
