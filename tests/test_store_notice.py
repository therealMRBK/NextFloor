"""The one-time note about the official HACS store."""

from __future__ import annotations

from datetime import UTC, datetime

from homeassistant.core import HomeAssistant
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.nextfloor.const import DOMAIN
from custom_components.nextfloor.store_notice import MESSAGE, NOTICE_ID, TITLE, async_notify_official_store


def _entry(created: datetime) -> MockConfigEntry:
    entry = MockConfigEntry(domain=DOMAIN)
    # created_at is no constructor argument; an old install is one whose entry was made earlier
    object.__setattr__(entry, "created_at", created)
    return entry


async def test_old_install_gets_the_note_once(hass: HomeAssistant, hass_storage) -> None:
    entry = _entry(datetime(2026, 10, 1, tzinfo=UTC))
    entry.add_to_hass(hass)
    assert await async_notify_official_store(hass, entry) is True
    note = hass.data["persistent_notification"][NOTICE_ID]
    assert "HACS" in note["title"] and "NextFloor" in note["message"]
    assert await async_notify_official_store(hass, entry) is False  # not again, even after a restart


async def test_new_install_gets_nothing(hass: HomeAssistant, hass_storage) -> None:
    entry = _entry(datetime(2026, 11, 5, tzinfo=UTC))
    entry.add_to_hass(hass)
    assert await async_notify_official_store(hass, entry) is False
    assert NOTICE_ID not in hass.data.get("persistent_notification", {})


async def test_language_follows_home_assistant(hass: HomeAssistant, hass_storage) -> None:
    hass.config.language = "de"
    entry = _entry(datetime(2026, 10, 1, tzinfo=UTC))
    entry.add_to_hass(hass)
    await async_notify_official_store(hass, entry)
    assert hass.data["persistent_notification"][NOTICE_ID]["title"] == TITLE["de"]


def test_every_language_has_title_and_message() -> None:
    assert set(TITLE) == set(MESSAGE) == {"en", "de", "fr", "es", "it", "nl", "pl", "pt", "sv", "zh"}
