"""Sensors from the plan: open windows and doors, lights on, per floor and for the house."""

from __future__ import annotations

import copy

from homeassistant.core import HomeAssistant
from homeassistant.setup import async_setup_component
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.nextfloor.const import DOMAIN
from custom_components.nextfloor.sensor import floor_lights, floor_openings

FLOOR = {
    "id": "eg",
    "name": "Erdgeschoss",
    "elevation": 0,
    "height": 2.5,
    "cut_height": 1.15,
    "rooms": [
        {
            "id": "r1",
            "name": "Wohnen",
            "area_id": None,
            "points": [[0, 0], [4, 0], [4, 3], [0, 3]],
            "floor_material": "wood",
        }
    ],
    "openings": [
        {
            "id": "w1",
            "type": "window",
            "room_id": "r1",
            "edge": 0,
            "offset": 1,
            "width": 1,
            "contact": "binary_sensor.window",
            "tilt": None,
        },
        {"id": "g1", "type": "garage", "room_id": "r1", "edge": 1, "offset": 1, "width": 2.5, "cover": "cover.garage"},
    ],
    "furniture": [
        {"id": "l1", "type": "lamp_floor", "x": 1, "z": 1, "entity": "light.lamp", "extra_lights": ["light.ring"]}
    ],
    "placements": [{"entity_id": "light.ceiling", "x": 2, "z": 2}, {"entity_id": "sensor.temp", "x": 1, "z": 2}],
    "background": None,
}


def test_what_a_floor_counts() -> None:
    assert floor_lights(FLOOR) == {"light.lamp", "light.ring", "light.ceiling"}
    assert floor_openings(FLOOR) == [
        {"sensors": ["binary_sensor.window"], "cover": None},
        {"sensors": [], "cover": "cover.garage"},
    ]


async def test_sensors_follow_states_and_the_plan(hass: HomeAssistant) -> None:
    await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain=DOMAIN, data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    hass.states.async_set("light.lamp", "on")
    hass.states.async_set("light.ring", "off")
    hass.states.async_set("light.ceiling", "on")
    hass.states.async_set("binary_sensor.window", "off")
    hass.states.async_set("cover.garage", "open")
    building = {"version": 1, "settings": {}, "floors": [copy.deepcopy(FLOOR)]}
    await hass.data[DOMAIN].async_save_building(building)
    await hass.async_block_till_done()

    def value(kind: str, scope: str) -> str:
        states = [s for s in hass.states.async_all("sensor") if s.entity_id.startswith("sensor.nextfloor")]
        match = [
            s
            for s in states
            if s.attributes.get("icon") == ("mdi:window-open-variant" if kind == "open" else "mdi:lightbulb-group")
        ]
        match = [s for s in match if ("erdgeschoss" in s.entity_id) == (scope == "eg")]
        assert len(match) == 1, [s.entity_id for s in states]
        return match[0].state

    assert value("lights_on", "eg") == "2"
    assert value("open", "eg") == "1"
    assert value("open", "house") == "1"
    hass.states.async_set("binary_sensor.window", "on")
    hass.states.async_set("light.ceiling", "off")
    await hass.async_block_till_done()
    assert value("open", "eg") == "2"
    assert value("lights_on", "house") == "1"
    # a floor that is gone leaves its sensors unavailable
    await hass.data[DOMAIN].async_save_building({"version": 1, "settings": {}, "floors": []})
    await hass.async_block_till_done()
    assert value("open", "eg") == "unavailable"
    assert value("open", "house") == "0"


async def test_a_bluetooth_tag_deleted_from_the_plan_loses_its_sensor(hass: HomeAssistant) -> None:
    await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain=DOMAIN, data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()

    def tag_sensors() -> list[str]:
        return [
            s.entity_id for s in hass.states.async_all("sensor") if s.attributes.get("icon") == "mdi:bluetooth-connect"
        ]

    tags = [{"id": "t1", "name": "Schluessel", "address": "AA:BB:CC:DD:EE:FF", "prints": []}]
    building = {"version": 1, "settings": {"ble": {"tags": tags}}, "floors": []}
    await hass.data[DOMAIN].async_save_building(building)
    await hass.async_block_till_done()
    assert len(tag_sensors()) == 1
    await hass.data[DOMAIN].async_save_building({"version": 1, "settings": {}, "floors": []})
    await hass.async_block_till_done()
    assert tag_sensors() == []
