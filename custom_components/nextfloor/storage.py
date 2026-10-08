"""Persistence for NextFloor.

The building (rooms, walls, furniture, placements) and the background images live in separate
stores so frequent saves from the editor never rewrite the large image data.
"""

from __future__ import annotations

import logging
import time
from typing import Any
import uuid

from homeassistant.core import HomeAssistant
from homeassistant.helpers.dispatcher import async_dispatcher_send
from homeassistant.helpers.storage import Store
import voluptuous as vol

from .const import (
    HISTORY_INTERVAL,
    HISTORY_MAX,
    SIGNAL_BUILDING_UPDATED,
    STORAGE_KEY_BUILDING,
    STORAGE_KEY_HISTORY,
    STORAGE_KEY_IMAGES,
    STORAGE_KEY_PACKS,
    STORAGE_MINOR_VERSION,
    STORAGE_VERSION,
)
from .packs import PackError, load_builtin_packs
from .schema import BUILDING_SCHEMA, empty_building, image_ids

_LOGGER = logging.getLogger(__name__)


def complete(building: dict[str, Any]) -> dict[str, Any]:
    """Fill fields added in later versions with their defaults (keeps the building when it is invalid)."""
    try:
        return BUILDING_SCHEMA(building)
    except vol.Invalid as err:
        _LOGGER.warning("Stored building does not validate (%s); loading it unchanged", err)
        return building


class _BuildingStore(Store):
    """Building store with migrations between minor versions."""

    async def _async_migrate_func(self, old_major_version: int, old_minor_version: int, old_data: dict) -> dict:
        # 1 -> 2: newer optional fields (openings, furniture, energy, presence) get their defaults
        if old_minor_version < 2 and old_data.get("building"):
            old_data = {**old_data, "building": complete(old_data["building"])}
        return old_data


def _stores(hass: HomeAssistant) -> tuple[Store, Store, Store, Store]:
    return (
        _BuildingStore(hass, STORAGE_VERSION, STORAGE_KEY_BUILDING, minor_version=STORAGE_MINOR_VERSION),
        Store(hass, STORAGE_VERSION, STORAGE_KEY_IMAGES),
        Store(hass, STORAGE_VERSION, STORAGE_KEY_HISTORY),
        Store(hass, STORAGE_VERSION, STORAGE_KEY_PACKS),
    )


def _summary(building: dict[str, Any]) -> dict[str, int]:
    floors = building.get("floors", [])
    return {
        "floors": len(floors),
        "rooms": sum(len(f.get("rooms", [])) for f in floors),
        "furniture": sum(len(f.get("furniture", [])) for f in floors),
    }


class NextFloorData:
    """Building and images of one installation."""

    def __init__(self, hass: HomeAssistant) -> None:
        """Initialise the stores."""
        self.hass = hass
        self._building_store, self._image_store, self._history_store, self._pack_store = _stores(hass)
        self.building: dict[str, Any] = empty_building()
        self.revision = 0
        self._images: dict[str, str] = {}
        self._history: list[dict[str, Any]] = []
        # imported furniture packs (checked payloads, see packs.py)
        self.packs: list[dict[str, Any]] = []
        # the packs that come with the integration (packs/*.json)
        self.builtin_packs: list[dict[str, Any]] = []

    async def async_load(self) -> None:
        """Load both stores and drop images no floor refers to any more."""
        stored = await self._building_store.async_load()
        if stored:
            self.building = complete(stored.get("building") or empty_building())
            self.revision = int(stored.get("revision", 0))
        packs = await self._pack_store.async_load()
        self.packs = list((packs or {}).get("packs", []))
        try:
            self.builtin_packs = await self.hass.async_add_executor_job(load_builtin_packs)
        except (OSError, PackError) as err:
            _LOGGER.error("The furniture packs that come with NextFloor could not be loaded: %s", err)
        history = await self._history_store.async_load()
        self._history = list((history or {}).get("snapshots", []))
        images = await self._image_store.async_load()
        self._images = dict((images or {}).get("images", {}))
        unused = set(self._images) - image_ids(self.building)
        if unused:
            _LOGGER.debug("Removing %d unused background images", len(unused))
            for image_id in unused:
                self._images.pop(image_id)
            await self._save_images()

    async def async_save_building(self, building: dict[str, Any]) -> int:
        """Store a validated building, bump the revision and notify subscribers.

        The state before the save becomes a restore point when the last one is older than
        HISTORY_INTERVAL, so a long editing session leaves a trail without saving every step.
        """
        last = self._history[-1]["saved_at"] if self._history else 0
        if self.building.get("floors") and time.time() - last > HISTORY_INTERVAL:
            await self.async_snapshot()
        self.building = building
        self.revision += 1
        await self._building_store.async_save({"revision": self.revision, "building": building})
        async_dispatcher_send(self.hass, SIGNAL_BUILDING_UPDATED, self.revision)
        return self.revision

    async def async_snapshot(self) -> None:
        """Keep the current building as a restore point."""
        self._history.append(
            {
                "id": uuid.uuid4().hex[:12],
                "revision": self.revision,
                "saved_at": time.time(),
                "building": self.building,
            }
        )
        self._history = self._history[-HISTORY_MAX:]
        await self._history_store.async_save({"snapshots": self._history})

    def history(self) -> list[dict[str, Any]]:
        """Restore points, newest first, without their buildings."""
        return [
            {"id": h["id"], "revision": h["revision"], "saved_at": h["saved_at"], **_summary(h["building"])}
            for h in reversed(self._history)
        ]

    def snapshot(self, snapshot_id: str) -> dict[str, Any] | None:
        """Building of a restore point."""
        return next((h["building"] for h in self._history if h["id"] == snapshot_id), None)

    @property
    def all_packs(self) -> list[dict[str, Any]]:
        """The built-in packs and the imported ones."""
        return [*self.builtin_packs, *self.packs]

    async def async_add_pack(self, payload: dict[str, Any]) -> None:
        """Keep an imported pack; a newer file of the same pack replaces the old one."""
        entry = {**payload, "imported_at": time.time()}
        self.packs = [p for p in self.packs if p["id"] != payload["id"]] + [entry]
        await self._pack_store.async_save({"packs": self.packs})

    @property
    def images(self) -> dict[str, str]:
        """All stored images (id -> data URL)."""
        return dict(self._images)

    async def async_restore(self, building: dict[str, Any], packs: list[dict[str, Any]]) -> int:
        """Replace the plan and the packs from a backup; the state before becomes a restore point."""
        await self.async_snapshot()
        self.packs = packs
        await self._pack_store.async_save({"packs": self.packs})
        return await self.async_save_building(building)

    async def async_remove_pack(self, pack_id: str) -> bool:
        """Remove a pack (furniture using it stays in the plan as plain boxes)."""
        kept = [p for p in self.packs if p["id"] != pack_id]
        if len(kept) == len(self.packs):
            return False
        self.packs = kept
        await self._pack_store.async_save({"packs": self.packs})
        return True

    def get_image(self, image_id: str) -> str | None:
        """Return an image as data URL."""
        return self._images.get(image_id)

    async def async_set_image(self, image_id: str, data: str) -> None:
        """Store an image."""
        self._images[image_id] = data
        await self._save_images()

    async def async_delete_image(self, image_id: str) -> None:
        """Remove an image."""
        if self._images.pop(image_id, None) is not None:
            await self._save_images()

    async def _save_images(self) -> None:
        await self._image_store.async_save({"images": self._images})
