import assert from "node:assert/strict";
import { test } from "node:test";
import type { HomeAssistant } from "./types.ts";
import { weatherEntity } from "./weather.ts";

function hassWith(state: string, attributes: Record<string, unknown> = {}): HomeAssistant {
  return {
    language: "de",
    connection: {} as HomeAssistant["connection"],
    callWS: async () => undefined as never,
    callService: async () => undefined,
    areas: {},
    devices: {},
    entities: {},
    states: {
      "weather.zuhause": { entity_id: "weather.zuhause", state, attributes },
      "weather.arbeit": { entity_id: "weather.arbeit", state: "sunny", attributes: {} },
    },
  };
}

test("the preferred weather entity wins, otherwise the first one by id", () => {
  assert.equal(weatherEntity(hassWith("sunny")), "weather.arbeit");
  assert.equal(weatherEntity(hassWith("sunny"), "weather.zuhause"), "weather.zuhause");
  assert.equal(weatherEntity(hassWith("sunny"), "weather.missing"), "weather.arbeit");
});
