"""Locating a Bluetooth tag by room: the signal patterns, the smoothing and the plan's schema."""

from __future__ import annotations

import math

import pytest
import voluptuous as vol

from custom_components.nextfloor import ble
from custom_components.nextfloor.schema import BLE_TAG_SCHEMA, SETTINGS_SCHEMA

_BASE = {"wall_exterior": 0.24, "wall_interior": 0.12, "grid": 0.05}


def _prints() -> list[dict]:
    return [
        {"room": "kitchen", "rssi": {"a": -50.0, "b": -80.0, "c": -90.0}},
        {"room": "kitchen", "rssi": {"a": -55.0, "b": -78.0, "c": -92.0}},
        {"room": "bath", "rssi": {"a": -85.0, "b": -45.0, "c": -70.0}},
        {"room": "hall", "rssi": {"a": -75.0, "b": -75.0, "c": -50.0}},
    ]


def test_distance_is_zero_for_the_same_pattern_and_missing_scanners_count_as_far() -> None:
    assert ble.distance({"a": -60}, {"a": -60}) == 0
    # one scanner hears the tag, the other not at all: its missing value is -100 dBm, differences are capped at 40
    assert ble.distance({"a": -60, "b": -50}, {"a": -60}) == pytest.approx(math.sqrt(40**2 / 2))
    assert ble.distance({}, {}) == math.inf


def test_the_nearest_room_wins_and_a_room_may_have_several_spots() -> None:
    room, dist, margin = ble.locate(_prints(), {"a": -53.0, "b": -79.0, "c": -91.0})
    assert room == "kitchen" and dist < 5 and margin > 20
    assert ble.locate(_prints(), {"a": -84.0, "b": -47.0, "c": -71.0})[0] == "bath"
    assert ble.locate(_prints(), {"a": -76.0, "b": -74.0, "c": -52.0})[0] == "hall"


def test_nothing_heard_or_nothing_close_gives_no_room() -> None:
    assert ble.locate(_prints(), {})[0] is None
    assert ble.locate([], {"a": -60})[0] is None
    # a pattern far from every fingerprint is "unknown", not the least bad room
    assert ble.locate(_prints(), {"a": -30.0, "b": -30.0, "c": -30.0})[0] is None


def test_median_reading_drops_a_scanner_that_missed_most_samples() -> None:
    samples = [{"a": -60, "b": -70}, {"a": -64, "b": -72}, {"a": -62}, {"a": -61}]
    out = ble.median_reading(samples)
    assert out == {"a": -61.5}
    assert ble.median_reading([]) == {}


def test_smoother_switches_only_after_three_readings_in_a_row() -> None:
    s = ble.Smoother()
    assert s.update("kitchen") is None
    assert s.update("kitchen") is None
    assert s.update("kitchen") == "kitchen"
    # one stray reading does not move it, and neither do two different ones
    assert s.update("bath") == "kitchen"
    assert s.update("hall") == "kitchen"
    assert s.update("bath") == "kitchen"
    assert s.update("bath") == "kitchen"
    assert s.update("bath") == "bath"


def test_smooth_reading_keeps_the_last_five() -> None:
    history: list[dict[str, float]] = []
    for value in (-90, -50, -52, -51, -53, -50):
        out = ble.smooth_reading(history, {"a": value})
    assert len(history) == 5 and out == {"a": -51.0}


def test_tag_schema_needs_an_address_or_a_tracker() -> None:
    tag = BLE_TAG_SCHEMA({"id": "t1", "name": "Keys", "address": "aa:bb:cc:dd:ee:ff"})
    assert tag["address"] == "AA:BB:CC:DD:EE:FF" and tag["prints"] == [] and tag["entity"] is None
    assert BLE_TAG_SCHEMA({"id": "t2", "name": "Phone", "entity": "device_tracker.my_phone"})["address"] is None
    with pytest.raises(vol.Invalid):
        BLE_TAG_SCHEMA({"id": "t3", "name": "Nothing"})
    with pytest.raises(vol.Invalid):
        BLE_TAG_SCHEMA({"id": "t4", "name": "Bad", "address": "not-a-mac"})
    with pytest.raises(vol.Invalid):
        BLE_TAG_SCHEMA({"id": "t5", "name": "Bad", "entity": "light.kitchen"})


def test_prints_and_settings_validate() -> None:
    tag = {
        "id": "t1",
        "name": "Keys",
        "address": "AA:BB:CC:DD:EE:FF",
        "prints": [{"room": "kitchen", "rssi": {"s1": -60.5}}],
    }
    settings = SETTINGS_SCHEMA({**_BASE, "ble": {"tags": [tag]}})
    assert settings["ble"]["tags"][0]["prints"][0]["rssi"] == {"s1": -60.5}
    with pytest.raises(vol.Invalid):
        BLE_TAG_SCHEMA({**tag, "prints": [{"room": "kitchen", "rssi": {"s1": 10}}]})
    with pytest.raises(vol.Invalid):
        SETTINGS_SCHEMA({**_BASE, "ble": {"tags": [tag] * 11}})
