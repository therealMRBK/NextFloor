"""Announcements: which rooms and speakers, how each speaker is spoken to, quiet times and the screens."""

from __future__ import annotations

import copy
from datetime import time, timedelta
from typing import Any
from unittest.mock import patch

from homeassistant.core import HomeAssistant
from homeassistant.exceptions import ServiceValidationError
from homeassistant.helpers import area_registry as ar
from homeassistant.helpers import entity_registry as er
from homeassistant.setup import async_setup_component
from homeassistant.util import dt as dt_util
import pytest
from pytest_homeassistant_custom_component.common import MockConfigEntry, async_mock_service

from custom_components.nextfloor.announce import in_quiet_time, target_rooms
from custom_components.nextfloor.const import DOMAIN

_POINTS = {
    "kitchen": [[0, 0], [4, 0], [4, 3], [0, 3]],
    "living": [[4, 0], [8, 0], [8, 3], [4, 3]],
    "nursery": [[0, 3], [4, 3], [4, 6], [0, 6]],
}


def _building(areas: dict[str, str | None]) -> dict[str, Any]:
    def room(room_id: str, name: str) -> dict[str, Any]:
        return {
            "id": room_id,
            "name": name,
            "area_id": areas.get(room_id),
            "points": _POINTS[room_id],
            "floor_material": "wood",
        }

    return {
        "version": 1,
        "settings": {},
        "floors": [
            {
                "id": "g",
                "name": "Ground floor",
                "elevation": 0,
                "height": 2.5,
                "rooms": [room("kitchen", "Kitchen"), room("living", "Living room"), room("nursery", "Nursery")],
                "openings": [],
                "furniture": [],
                "placements": [],
            },
            {
                "id": "u",
                "name": "Upstairs",
                "elevation": 2.8,
                "height": 2.5,
                "rooms": [{"id": "office", "name": "Office", "area_id": None, "points": _POINTS["kitchen"]}],
                "openings": [],
                "furniture": [],
                "placements": [],
            },
        ],
    }


def test_quiet_time_also_over_midnight() -> None:
    room = {"announce_quiet": {"from": "20:00", "to": "07:00"}}
    assert in_quiet_time(room, time(21, 0))
    assert in_quiet_time(room, time(6, 59))
    assert not in_quiet_time(room, time(7, 0))
    assert not in_quiet_time(room, time(12, 0))
    assert in_quiet_time({"announce_quiet": {"from": "13:00", "to": "15:00"}}, time(14, 0))
    assert not in_quiet_time({"announce_quiet": {"from": "13:00", "to": "13:00"}}, time(13, 0))
    assert not in_quiet_time({"announce_quiet": {"from": "late", "to": "07:00"}}, time(23, 0))
    assert not in_quiet_time({}, time(23, 0))


def test_rooms_by_name_id_area_and_floor() -> None:
    building = _building({"nursery": "nursery_area"})

    def ids(pairs: list[tuple[dict, dict]]) -> list[str]:
        return [r["id"] for _, r in pairs]

    assert ids(target_rooms(building, ["kitchen", "LIVING ROOM"], None)[0]) == ["kitchen", "living"]
    assert ids(target_rooms(building, ["nursery_area"], None)[0]) == ["nursery"]
    assert target_rooms(building, ["kitchen"], None)[1] is True
    pairs, named = target_rooms(building, None, "upstairs")
    assert ids(pairs) == ["office"] and named is False
    assert len(target_rooms(building, None, None)[0]) == 4
    assert target_rooms(building, ["cellar"], None)[0] == []


@pytest.fixture
def areas(hass: HomeAssistant) -> dict[str, str]:
    reg = ar.async_get(hass)
    return {
        room: reg.async_create(name).id
        for room, name in (("kitchen", "Kitchen"), ("living", "Living"), ("nursery", "Nursery"))
    }


def _speaker(
    hass: HomeAssistant,
    entity_id: str,
    area: str | None,
    state: str = "idle",
    platform: str = "test",
    unique: str | None = None,
    **attrs: Any,
) -> None:
    domain, object_id = entity_id.split(".")
    reg = er.async_get(hass)
    entry = reg.async_get_or_create(domain, platform, unique or object_id, suggested_object_id=object_id)
    assert entry.entity_id == entity_id
    if area:
        reg.async_update_entity(entity_id, area_id=area)
    hass.states.async_set(entity_id, state, attrs)


async def _setup(hass: HomeAssistant, building: dict[str, Any]) -> None:
    await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain=DOMAIN, data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    hass.data[DOMAIN].building = copy.deepcopy(building)


async def _announce(hass: HomeAssistant, **data: Any) -> dict[str, Any]:
    return await hass.services.async_call(DOMAIN, "announce", data, blocking=True, return_response=True)


async def test_each_room_speaks_through_its_own_speaker(hass: HomeAssistant, areas: dict[str, str]) -> None:
    satellite = async_mock_service(hass, "assist_satellite", "announce")
    speak = async_mock_service(hass, "tts", "speak")
    play = async_mock_service(hass, "media_player", "play_media")
    hass.states.async_set("tts.voice", "unknown")
    _speaker(hass, "assist_satellite.kitchen_voice", areas["kitchen"])
    _speaker(hass, "media_player.kitchen_radio", areas["kitchen"])
    # a TV and a speaker that is off are never picked by themselves; a speaker that can announce gets play_media
    _speaker(hass, "media_player.living_tv", areas["living"], device_class="tv")
    _speaker(hass, "media_player.living_off", areas["living"], state="off")
    _speaker(hass, "media_player.living_sonos", areas["living"], state="playing", supported_features=1048576)
    _speaker(hass, "media_player.nursery_box", areas["nursery"])
    await _setup(hass, _building(areas))

    with patch("custom_components.nextfloor.announce.tts_media_id", return_value="media-source://tts/x"):
        result = await _announce(hass, message="Dinner is ready!", on_screens=False)

    assert result["speakers"] == {
        "assist_satellite.kitchen_voice": "satellite",
        "media_player.living_sonos": "announce",
        "media_player.nursery_box": "tts",
    }
    assert satellite[0].data == {"entity_id": "assist_satellite.kitchen_voice", "message": "Dinner is ready!"}
    assert play[0].data["entity_id"] == "media_player.living_sonos" and play[0].data["announce"] is True
    assert speak[0].data["media_player_entity_id"] == "media_player.nursery_box"
    assert speak[0].data["entity_id"] == "tts.voice"


async def test_a_speaker_chosen_or_placed_in_the_plan_wins(hass: HomeAssistant, areas: dict[str, str]) -> None:
    speak = async_mock_service(hass, "tts", "speak")
    hass.states.async_set("tts.voice", "unknown")
    _speaker(hass, "media_player.kitchen_radio", areas["kitchen"])
    _speaker(hass, "media_player.kitchen_placed", None)
    _speaker(hass, "media_player.living_radio", areas["living"])
    _speaker(hass, "media_player.living_chosen", None, state="off")
    building = _building(areas)
    ground = building["floors"][0]
    ground["placements"].append({"entity_id": "media_player.kitchen_placed", "x": 1, "z": 1})
    ground["rooms"][1]["announce_speaker"] = "media_player.living_chosen"
    ground["rooms"][2]["announce_speaker"] = "none"
    await _setup(hass, building)

    result = await _announce(hass, message="Hi", on_screens=False)
    assert set(result["speakers"]) == {"media_player.kitchen_placed", "media_player.living_chosen"}
    assert len(speak) == 2


async def test_echos_announce_with_their_own_entity(hass: HomeAssistant, areas: dict[str, str]) -> None:
    notify = async_mock_service(hass, "notify", "send_message")
    alexa_media = async_mock_service(hass, "notify", "alexa_media")
    # Alexa Devices: the Echo is only a notify entity whose unique id ends in -announce (and a -speak one beside it)
    _speaker(
        hass,
        "notify.echo_kitchen_speak",
        areas["kitchen"],
        state="unknown",
        platform="alexa_devices",
        unique="SERIAL1-speak",
    )
    _speaker(
        hass,
        "notify.echo_kitchen_announce",
        areas["kitchen"],
        state="unknown",
        platform="alexa_devices",
        unique="SERIAL1-announce",
    )
    # Alexa Media Player (HACS): a media player, announced through notify.alexa_media
    _speaker(hass, "media_player.echo_living", areas["living"], platform="alexa_media")
    await _setup(hass, _building(areas))

    result = await _announce(hass, message="Door!", rooms=["Kitchen", "Living room"], on_screens=False)
    assert result["speakers"] == {"notify.echo_kitchen_announce": "echo", "media_player.echo_living": "echo"}
    assert notify[0].data == {"entity_id": "notify.echo_kitchen_announce", "message": "Door!"}
    assert alexa_media[0].data["target"] == ["media_player.echo_living"]
    assert alexa_media[0].data["data"] == {"type": "announce"}


async def test_quiet_rooms_are_left_out_unless_named_alone(hass: HomeAssistant, areas: dict[str, str]) -> None:
    speak = async_mock_service(hass, "tts", "speak")
    hass.states.async_set("tts.voice", "unknown")
    _speaker(hass, "media_player.kitchen_radio", areas["kitchen"])
    _speaker(hass, "media_player.nursery_box", areas["nursery"])
    building = _building(areas)
    # a quiet window around now (wrapping past midnight works too), so the test does not depend on the clock
    now = dt_util.now()
    window = {"from": (now - timedelta(hours=1)).strftime("%H:%M"), "to": (now + timedelta(hours=1)).strftime("%H:%M")}
    building["floors"][0]["rooms"][2]["announce_quiet"] = window
    await _setup(hass, building)

    result = await _announce(hass, message="Hi", on_screens=False)
    assert set(result["speakers"]) == {"media_player.kitchen_radio"}
    assert result["skipped"] == {"Nursery": "quiet"}
    result = await _announce(hass, message="Wake up", rooms=["Nursery"], on_screens=False)
    assert set(result["speakers"]) == {"media_player.nursery_box"}
    assert len(speak) == 2


async def test_without_text_to_speech_it_says_why(hass: HomeAssistant, areas: dict[str, str]) -> None:
    _speaker(hass, "media_player.kitchen_radio", areas["kitchen"])
    await _setup(hass, _building(areas))
    with pytest.raises(ServiceValidationError):
        await _announce(hass, message="Hi", on_screens=False)
    with pytest.raises(ServiceValidationError):
        await _announce(hass, message="Hi", rooms=["Cellar"])


async def test_screens_get_the_announcement(hass: HomeAssistant, hass_ws_client, areas: dict[str, str]) -> None:
    await _setup(hass, _building(areas))
    client = await hass_ws_client(hass)
    await client.send_json_auto_id({"type": "nextfloor/announcements/subscribe"})
    assert (await client.receive_json())["success"]

    result = await _announce(hass, message="Someone is at the door!", screens=["Hallway"], on_speakers=False)
    assert result == {"speakers": {}, "skipped": {}, "screens": True}
    event = (await client.receive_json())["event"]
    assert event["message"] == "Someone is at the door!"
    assert event["screens"] == ["Hallway"]
    # no text-to-speech entity: the screens speak with the browser's own voice
    assert event["audio"] is None
