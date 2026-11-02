import assert from "node:assert/strict";
import { test } from "node:test";
import { entity, hassOf } from "../entities/fixtures.ts";
import { isHeatPump, readHeatPump } from "./heat-pump.ts";

test("a heat pump's flow, return, power, heat, COP and mode from its device", () => {
  const d = { device_id: "hp" };
  const ids = ["climate.hp", "sensor.hp_vorlauftemperatur", "sensor.hp_rucklauftemperatur", "sensor.hp_heat_output", "sensor.hp_power", "sensor.hp_outdoor_temperature"];
  const hass = hassOf(
    [
      entity("climate.hp", "heat", { hvac_action: "heating" }),
      entity("sensor.hp_vorlauftemperatur", "34.5", { device_class: "temperature" }),
      entity("sensor.hp_rucklauftemperatur", "29", { device_class: "temperature" }),
      entity("sensor.hp_heat_output", "4.2", { device_class: "power", unit_of_measurement: "kW" }),
      entity("sensor.hp_power", "1000", { device_class: "power", unit_of_measurement: "W" }),
      entity("sensor.hp_outdoor_temperature", "3", { device_class: "temperature" }),
    ],
    Object.fromEntries(ids.map((id) => [id, d])),
  );
  const hp = readHeatPump(hass, "climate.hp")!;
  assert.deepEqual(hp, { mode: "heating", flow: 34.5, return: 29, outside: 3, power: 1000, heat: 4200, cop: 4.2 });
  assert.equal(isHeatPump("pack:nextfloor.a_smart:heat_pump_outdoor"), true);
  assert.equal(isHeatPump("pack:nextfloor.kino:heat_pumpkin"), false);
});
