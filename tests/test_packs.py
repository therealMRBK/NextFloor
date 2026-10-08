"""Furniture packs: content check, the built-in packs, and import through the websocket."""

from __future__ import annotations

import copy
import json

from homeassistant.core import HomeAssistant
from homeassistant.setup import async_setup_component
import pytest
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.nextfloor import packs
from custom_components.nextfloor.const import DOMAIN

PAYLOAD = {
    "format": "nfpack",
    "version": 1,
    "id": "test.starter",
    "name": "Starter",
    "publisher": "Test",
    "items": [
        {
            "id": "cube_chair",
            "name": {"de": "Würfelsessel", "en": "Cube chair"},
            "size": [0.8, 0.8, 0.75],
            "parts": [
                {"shape": "box", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 0.55, "color": "fabric"},
                {"shape": "box", "x": 0, "z": -0.4, "w": 1, "d": 0.2, "y": 0.55, "h": 0.45, "color": "#223355"},
            ],
        }
    ],
}


def test_a_plain_pack_is_accepted() -> None:
    clean = packs.parse_pack(json.dumps(PAYLOAD))
    assert clean["items"][0]["parts"][0]["edges"] is False
    with pytest.raises(packs.PackError) as err:
        packs.parse_pack("{}")
    assert err.value.code == "not_a_pack"
    with pytest.raises(packs.PackError) as err:
        packs.parse_pack("no json")
    assert err.value.code == "not_a_pack"


def test_a_pack_needs_items() -> None:
    with pytest.raises(packs.PackError):
        packs.validate_payload({**PAYLOAD, "items": []})


def test_sloped_and_lying_parts_are_accepted() -> None:
    shaped = copy.deepcopy(PAYLOAD)
    box = {"x": 0, "z": 0.2, "w": 1, "d": 0.6, "y": 0, "h": 0.5, "color": "body"}
    shaped["items"][0]["parts"] = [
        {"shape": "loft", **box, "tx": 0, "tz": 0.1, "tw": 0.9, "td": 0.2, "edges": "glow"},
        {"shape": "cyl", "axis": "x", **box, "edges": "faint"},
    ]
    clean = packs.validate_payload(shaped)
    assert clean["items"][0]["parts"][0]["edges"] == "glow"
    assert clean["items"][0]["parts"][1]["axis"] == "x"
    shaped["items"][0]["parts"][1]["axis"] = "w"
    with pytest.raises(packs.PackError):
        packs.validate_payload(shaped)


def test_pack_content_is_checked() -> None:
    heavy = copy.deepcopy(PAYLOAD)
    heavy["items"][0]["parts"] *= 31  # more than 60 parts
    with pytest.raises(packs.PackError) as err:
        packs.validate_payload(heavy)
    assert err.value.code == "invalid_content"
    twice = copy.deepcopy(PAYLOAD)
    twice["items"].append(copy.deepcopy(twice["items"][0]))
    with pytest.raises(packs.PackError):
        packs.validate_payload(twice)


def test_turned_parts_and_stairs_holes_are_accepted() -> None:
    """A part may turn around its centre (rot) and a stairs item may cut the floor above (hole)."""
    item = copy.deepcopy(PAYLOAD["items"][0])
    item["hole"] = True
    item["parts"][0]["rot"] = 27.5
    clean = packs.validate_payload({**PAYLOAD, "items": [item]})
    assert clean["items"][0]["hole"] is True
    assert clean["items"][0]["parts"][0]["rot"] == 27.5
    with pytest.raises(packs.PackError):
        item["parts"][0]["rot"] = 400
        packs.validate_payload({**PAYLOAD, "items": [item]})


def test_builtin_packs_are_valid() -> None:
    """The packs that come with NextFloor all pass the content check, with unique pack ids."""
    builtin = packs.load_builtin_packs()
    assert len(builtin) >= 10
    assert len({p["id"] for p in builtin}) == len(builtin)
    assert all(p["builtin"] and p["id"].startswith("nextfloor.") for p in builtin)
    assert sum(len(p["items"]) for p in builtin) >= 90


async def test_import_list_and_remove(hass: HomeAssistant, hass_ws_client) -> None:
    await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain=DOMAIN, data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    client = await hass_ws_client(hass)

    await client.send_json_auto_id({"type": "nextfloor/packs/list"})
    builtin = [p["id"] for p in (await client.receive_json())["result"]["packs"]]
    assert "nextfloor.energie" in builtin

    await client.send_json_auto_id({"type": "nextfloor/packs/import", "pack": json.dumps(PAYLOAD)})
    result = await client.receive_json()
    assert result["success"]
    assert result["result"] == {"id": "test.starter", "name": "Starter", "publisher": "Test", "items": 1}

    await client.send_json_auto_id({"type": "nextfloor/packs/import", "pack": "{}"})
    result = await client.receive_json()
    assert not result["success"] and result["error"]["code"] == "not_a_pack"

    # a pack may not take the id of a built-in one
    await client.send_json_auto_id(
        {"type": "nextfloor/packs/import", "pack": json.dumps({**PAYLOAD, "id": "nextfloor.energie"})}
    )
    result = await client.receive_json()
    assert not result["success"] and result["error"]["code"] == "builtin"

    await client.send_json_auto_id({"type": "nextfloor/packs/list"})
    listed = (await client.receive_json())["result"]["packs"]
    assert [p["id"] for p in listed] == [*builtin, "test.starter"]
    assert listed[-1]["items"][0]["name"]["de"] == "Würfelsessel"

    await client.send_json_auto_id({"type": "nextfloor/packs/remove", "pack_id": "test.starter"})
    assert (await client.receive_json())["success"]
    # built-in packs cannot be removed
    await client.send_json_auto_id({"type": "nextfloor/packs/remove", "pack_id": "nextfloor.energie"})
    assert not (await client.receive_json())["success"]
    await client.send_json_auto_id({"type": "nextfloor/packs/list"})
    assert [p["id"] for p in (await client.receive_json())["result"]["packs"]] == builtin


def _sweep_pack(stations):
    item = {
        "id": "boat",
        "name": {"de": "Boot", "en": "Boat"},
        "size": [2, 6, 1.5],
        "parts": [
            {
                "shape": "sweep",
                "x": 0,
                "z": 0,
                "w": 1,
                "d": 1,
                "y": 0,
                "h": 1,
                "color": "body",
                "stations": stations,
                "exp": 3,
                "n": 12,
            }
        ],
    }
    return {**PAYLOAD, "items": [item]}


def test_a_swept_body_needs_valid_stations() -> None:
    ok = packs.validate_payload(_sweep_pack([[-0.5, 0, 0.3, 0.2], [0, 0, 0.6, 1], [0.5, 0.1, 0.3, 0.1]]))
    assert ok["items"][0]["parts"][0]["stations"][1] == [0.0, 0.0, 0.6, 1.0]
    for bad in ([[-0.5, 0, 0.3, 0.2]], [[-0.5, 0, 0.3, 0.2], [0.9, 0, 0.3, 0.2]], [[-0.5, 0, 0.3], [0, 0, 0.3, 0.2]]):
        with pytest.raises(packs.PackError):
            packs.validate_payload(_sweep_pack(bad))
    # without stations it is no body at all
    broken = _sweep_pack([[-0.5, 0, 0.3, 0.2], [0.5, 0, 0.3, 0.2]])
    del broken["items"][0]["parts"][0]["stations"]
    with pytest.raises(packs.PackError):
        packs.validate_payload(broken)


def test_colours_of_an_item_are_checked() -> None:
    def pack(colors):
        item = {
            "id": "car",
            "name": {"en": "Car"},
            "size": [2, 4, 1.5],
            "colors": colors,
            "parts": [{"shape": "box", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 1, "color": "body", "paint": True}],
        }
        return {**PAYLOAD, "items": [item]}

    white = {"id": "white", "name": {"en": "White"}, "hex": "#ffffff"}
    red = {"id": "red", "name": {"en": "Red", "de": "Rot"}, "hex": "#c01020"}
    assert packs.validate_payload(pack([white, red]))["items"][0]["colors"][1]["id"] == "red"
    for bad in ([white], [white, white], [white, {**red, "hex": "red"}], [white, {**red, "id": "Rot Rot"}]):
        with pytest.raises(packs.PackError):
            packs.validate_payload(pack(bad))
