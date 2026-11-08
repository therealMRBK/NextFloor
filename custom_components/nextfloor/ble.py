"""Locate a Bluetooth tag by room, learned by walking.

Every Bluetooth scanner Home Assistant knows (ESPHome Bluetooth proxies, Shelly devices with Bluetooth scanning on, the
host's own adapters) hears a tag with a different signal strength. While you walk from room to room with the tag, the
editor records that pattern per room (a fingerprint). Later the current pattern is compared with the fingerprints and
the nearest room wins. Nothing here talks to the tag; it only reads what the scanners already report.
"""

from __future__ import annotations

from collections.abc import Iterable, Mapping
import math
import statistics
from typing import Any

from homeassistant.core import HomeAssistant

# a scanner that does not hear the tag counts as this (dBm); differences are capped, so one odd scanner cannot decide
MISSING = -100.0
MAX_DIFF = 40.0
# above this distance (RMS over the scanners, in dB) no room is a good match
UNKNOWN_DISTANCE = 18.0
# a new room has to win this many readings in a row before the sensor switches
SWITCH_VOTES = 3

Reading = Mapping[str, float]


def distance(a: Reading, b: Reading) -> float:
    """The distance between two signal patterns: RMS of the per-scanner differences in dB."""
    keys = set(a) | set(b)
    if not keys:
        return math.inf
    total = sum(min(abs(a.get(k, MISSING) - b.get(k, MISSING)), MAX_DIFF) ** 2 for k in keys)
    return math.sqrt(total / len(keys))


def locate(prints: Iterable[Mapping[str, Any]], reading: Reading) -> tuple[str | None, float, float]:
    """The room that fits a reading best: (room id, its distance in dB, how far the runner-up is behind).

    `prints` are {"room": id, "rssi": {scanner: dBm}}; a room may have several (one per spot you recorded there).
    No room is returned when nothing is heard or no fingerprint is close enough.
    """
    if not reading:
        return None, math.inf, 0.0
    best: dict[str, float] = {}
    for fp in prints:
        d = distance(fp.get("rssi") or {}, reading)
        room = fp.get("room")
        if isinstance(room, str) and d < best.get(room, math.inf):
            best[room] = d
    if not best:
        return None, math.inf, 0.0
    ranked = sorted(best.items(), key=lambda kv: kv[1])
    room, dist = ranked[0]
    if dist > UNKNOWN_DISTANCE:
        return None, dist, 0.0
    margin = ranked[1][1] - dist if len(ranked) > 1 else UNKNOWN_DISTANCE
    return room, dist, margin


def median_reading(samples: Iterable[Reading]) -> dict[str, float]:
    """The median signal per scanner over several samples. A scanner that missed the tag in most samples is left out."""
    samples = list(samples)
    if not samples:
        return {}
    out: dict[str, float] = {}
    for key in {k for s in samples for k in s}:
        values = [s[key] for s in samples if key in s]
        if len(values) * 2 > len(samples):
            out[key] = round(statistics.median(values), 1)
    return out


class Smoother:
    """Keeps the answer from flickering: a different room has to win several readings in a row."""

    def __init__(self, votes: int = SWITCH_VOTES) -> None:
        self.votes = votes
        self.room: str | None = None
        self._candidate: str | None = None
        self._count = 0

    def update(self, room: str | None) -> str | None:
        """Take one reading's room and return the room to show."""
        if room == self.room:
            self._candidate, self._count = None, 0
            return self.room
        if room == self._candidate:
            self._count += 1
        else:
            self._candidate, self._count = room, 1
        if self._count >= self.votes:
            self.room, self._candidate, self._count = room, None, 0
        return self.room


def smooth_reading(history: list[dict[str, float]], reading: Reading, size: int = 5) -> dict[str, float]:
    """Adds a reading to the history (newest last, `size` kept) and returns the median over it."""
    history.append(dict(reading))
    del history[:-size]
    return median_reading(history)


def rooms_of(building: Mapping[str, Any]) -> dict[str, dict[str, str]]:
    """Room id -> {"name", "floor"} of every room of the plan."""
    out: dict[str, dict[str, str]] = {}
    for floor in building.get("floors", []):
        for room in floor.get("rooms", []):
            out[room["id"]] = {"name": room.get("name") or room["id"], "floor": floor.get("name") or floor["id"]}
    return out


def tags_of(building: Mapping[str, Any]) -> list[dict[str, Any]]:
    """The Bluetooth tags set up in the plan."""
    ble = building.get("settings", {}).get("ble") or {}
    return list(ble.get("tags") or [])


# --- Home Assistant side ---------------------------------------------------------------------------------------------


def available(hass: HomeAssistant) -> bool:
    """Whether Home Assistant's Bluetooth integration is running."""
    return "bluetooth" in hass.config.components


def tag_address(hass: HomeAssistant, tag: Mapping[str, Any]) -> str | None:
    """The address to listen for: the fixed one, or the current one of a Private BLE Device tracker."""
    if entity := tag.get("entity"):
        state = hass.states.get(entity)
        current = state.attributes.get("current_address") if state else None
        return str(current).upper() if current else None
    address = tag.get("address")
    return str(address).upper() if address else None


def scanner_readings(hass: HomeAssistant, address: str) -> dict[str, tuple[str, float]]:
    """What every scanner last heard of an address: source -> (scanner name, RSSI in dBm)."""
    if not available(hass):
        return {}
    from homeassistant.components import bluetooth  # imported late: Bluetooth is optional

    out: dict[str, tuple[str, float]] = {}
    for device in bluetooth.async_scanner_devices_by_address(hass, address.upper(), False):
        rssi = device.advertisement.rssi
        if rssi is not None and rssi > -127:
            out[device.scanner.source] = (device.scanner.name, float(rssi))
    return out


def discovered(hass: HomeAssistant, limit: int = 80) -> dict[str, Any]:
    """The scanners and the devices they hear, strongest first, for choosing a tag in the editor."""
    if not available(hass):
        return {"available": False, "scanners": [], "devices": []}
    from homeassistant.components import bluetooth

    scanners = [{"source": s.source, "name": s.name} for s in bluetooth.async_current_scanners(hass)]
    seen: dict[str, dict[str, Any]] = {}
    for info in bluetooth.async_discovered_service_info(hass, False):
        row = seen.setdefault(info.address, {"address": info.address, "name": info.name, "rssi": -200, "named": False})
        row["rssi"] = max(row["rssi"], info.rssi)
        # a device without a name shows up with its address as the name
        row["named"] = info.name != info.address
        row["name"] = info.name
    devices = sorted(seen.values(), key=lambda r: (not r["named"], -r["rssi"]))[:limit]
    return {"available": True, "scanners": scanners, "devices": devices}
