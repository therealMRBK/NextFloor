"""Full backup: export of plan and imported packs, restore with a fresh content check."""

from __future__ import annotations

import json

from homeassistant.core import HomeAssistant
from homeassistant.setup import async_setup_component
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.nextfloor.const import DOMAIN
from tests.test_init import BUILDING

PAYLOAD = {
    "format": "nfpack",
    "version": 1,
    "id": "test.backup",
    "name": "Backup",
    "publisher": "Test",
    "items": [
        {
            "id": "cube",
            "name": {"de": "Würfel", "en": "Cube"},
            "size": [0.5, 0.5, 0.5],
            "parts": [{"shape": "box", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 1, "color": "body"}],
        }
    ],
}


async def test_backup_round_trip(hass: HomeAssistant, hass_ws_client) -> None:
    await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain=DOMAIN, data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    client = await hass_ws_client(hass)

    await client.send_json_auto_id({"type": "nextfloor/packs/import", "pack": json.dumps(PAYLOAD)})
    assert (await client.receive_json())["success"]
    building = json.loads(json.dumps(BUILDING))
    building["floors"][0]["name"] = "Backup floor"
    await client.send_json_auto_id({"type": "nextfloor/building/save", "building": building})
    assert (await client.receive_json())["success"]

    await client.send_json_auto_id({"type": "nextfloor/backup/export"})
    backup = (await client.receive_json())["result"]
    assert backup["format"] == "nextfloor-backup"
    assert backup["building"]["floors"][0]["name"] == "Backup floor"
    # only imported packs go into the backup (the built-in ones come with the integration)
    assert [p["id"] for p in backup["packs"]] == ["test.backup"]

    # a broken pack is skipped on restore, a built-in one is left alone, the good one comes back
    broken = json.loads(json.dumps(backup["packs"][0]))
    broken["id"] = "test.broken"
    broken["items"][0]["parts"] = []
    backup["building"]["floors"][0]["name"] = "Restored floor"
    restore = {"type": "nextfloor/backup/import", "building": backup["building"]}
    builtin_copy = {**PAYLOAD, "id": "nextfloor.energie"}
    await client.send_json_auto_id({**restore, "packs": [*backup["packs"], broken, builtin_copy]})
    result = await client.receive_json()
    assert result["success"], result
    assert result["result"]["packs"] == 1
    assert [s["id"] for s in result["result"]["skipped"]] == ["test.broken"]
    assert result["result"]["building"]["floors"][0]["name"] == "Restored floor"

    await client.send_json_auto_id({"type": "nextfloor/packs/list"})
    listed = (await client.receive_json())["result"]["packs"]
    assert [p["id"] for p in listed if not p.get("builtin")] == ["test.backup"]

    # a broken building is refused before anything changes
    await client.send_json_auto_id({"type": "nextfloor/backup/import", "building": {"version": 99}, "packs": []})
    result = await client.receive_json()
    assert not result["success"] and result["error"]["code"] == "invalid_format"
