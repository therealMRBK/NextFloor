"""Sensors from the plan: how many windows and doors are open and how many lights are on, per floor and for the house.

They count what the plan links: the contacts of its doors and windows (a garage door by its cover), and the lights of
its device pins and lamps. Automations and voice can use them without listing the entities of a floor by hand.
"""

from __future__ import annotations

from collections.abc import Callable
from typing import Any

from homeassistant.components.sensor import SensorEntity, SensorStateClass
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import Event, EventStateChangedData, HomeAssistant, callback
from homeassistant.helpers.device_registry import DeviceEntryType, DeviceInfo
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.event import async_track_state_change_event

from .const import DOMAIN, SIGNAL_BUILDING_UPDATED

HOUSE = "house"
KINDS = ("open", "lights_on")


def _is_light(entity_id: Any) -> bool:
    return isinstance(entity_id, str) and entity_id.startswith("light.")


def floor_lights(floor: dict[str, Any]) -> set[str]:
    """The lights the plan shows on a floor: device pins and the lights of lamps (with their extra lights)."""
    lights = {p.get("entity_id") for p in floor.get("placements", []) if _is_light(p.get("entity_id"))}
    for item in floor.get("furniture", []):
        if _is_light(item.get("entity")):
            lights.add(item["entity"])
        lights.update(e for e in item.get("extra_lights") or [] if _is_light(e))
    return {e for e in lights if e}


def floor_openings(floor: dict[str, Any]) -> list[dict[str, Any]]:
    """The doors, windows and garage doors of a floor that have an entity telling whether they are open."""
    out = []
    for o in floor.get("openings", []):
        sensors = [o.get(k) for k in ("contact", "contact2", "tilt", "tilt2") if isinstance(o.get(k), str) and o.get(k)]
        cover = o.get("cover") if o.get("type") == "garage" and isinstance(o.get("cover"), str) else None
        if sensors or cover:
            out.append({"sensors": sensors, "cover": cover})
    return out


def _floors(building: dict[str, Any]) -> list[dict[str, Any]]:
    return [f for f in building.get("floors", []) if not f.get("layer")]


class _Counter:
    """What one sensor counts: the lights or the openings of some floors, read from the current states."""

    def __init__(self, hass: HomeAssistant, kind: str) -> None:
        self.hass = hass
        self.kind = kind
        self.lights: set[str] = set()
        self.openings: list[dict[str, Any]] = []

    def take(self, floors: list[dict[str, Any]]) -> None:
        self.lights = set().union(*(floor_lights(f) for f in floors)) if floors else set()
        self.openings = [o for f in floors for o in floor_openings(f)]

    def watched(self) -> set[str]:
        if self.kind == "lights_on":
            return set(self.lights)
        return {e for o in self.openings for e in [*o["sensors"], o["cover"]] if e}

    def _state(self, entity_id: str) -> str | None:
        st = self.hass.states.get(entity_id)
        return st.state if st else None

    def count(self) -> tuple[int, list[str]]:
        if self.kind == "lights_on":
            on = sorted(e for e in self.lights if self._state(e) == "on")
            return len(on), on
        open_ids: list[str] = []
        for o in self.openings:
            hit = next((e for e in o["sensors"] if self._state(e) == "on"), None)
            if hit is None and o["cover"] and self._state(o["cover"]) in ("open", "opening", "closing"):
                hit = o["cover"]
            if hit:
                open_ids.append(hit)
        return len(open_ids), sorted(open_ids)


class NextFloorCountSensor(SensorEntity):
    """Open windows and doors, or lights on, on one floor or in the whole house."""

    _attr_has_entity_name = True
    _attr_should_poll = False
    _attr_state_class = SensorStateClass.MEASUREMENT

    def __init__(self, hass: HomeAssistant, entry: ConfigEntry, scope: str, name: str, kind: str) -> None:
        """Count `kind` on the floor `scope` (or the whole house)."""
        self.scope = scope
        self._counter = _Counter(hass, kind)
        self._unsub_states: Callable[[], None] | None = None
        self._attr_unique_id = f"{entry.entry_id}_{scope}_{kind}"
        self._attr_translation_key = f"{'house' if scope == HOUSE else 'floor'}_{kind}"
        self._attr_translation_placeholders = {"floor": name}
        self._attr_icon = "mdi:window-open-variant" if kind == "open" else "mdi:lightbulb-group"
        self._attr_device_info = DeviceInfo(
            identifiers={(DOMAIN, entry.entry_id)}, name="NextFloor", entry_type=DeviceEntryType.SERVICE
        )
        self._ids: list[str] = []

    def take(self, building: dict[str, Any]) -> None:
        """Follow the floors of the (new) plan; a floor that is gone leaves the sensor unavailable."""
        floors = _floors(building)
        mine = floors if self.scope == HOUSE else [f for f in floors if f.get("id") == self.scope]
        self._attr_available = self.scope == HOUSE or bool(mine)
        if mine and self.scope != HOUSE:
            self._attr_translation_placeholders = {"floor": mine[0].get("name") or self.scope}
        self._counter.take(mine)
        self._refresh()
        if self.hass is not None and self.platform is not None:
            self._watch()

    @callback
    def _watch(self) -> None:
        if self._unsub_states:
            self._unsub_states()
        watched = sorted(self._counter.watched())
        self._unsub_states = async_track_state_change_event(self.hass, watched, self._changed) if watched else None

    @callback
    def _changed(self, _event: Event[EventStateChangedData]) -> None:
        self._refresh()
        self.async_write_ha_state()

    def _refresh(self) -> None:
        n, ids = self._counter.count()
        self._attr_native_value = n
        self._ids = ids

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        """The entities that are open or on, for templates and notifications."""
        return {"entities": self._ids}

    async def async_added_to_hass(self) -> None:
        """Start following the states."""
        self._watch()

    async def async_will_remove_from_hass(self) -> None:
        """Stop following the states."""
        if self._unsub_states:
            self._unsub_states()
            self._unsub_states = None


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry, async_add_entities: AddEntitiesCallback) -> None:
    """Add the house sensors and one pair per floor; floors added later get theirs when the plan is saved."""
    data = hass.data[DOMAIN]
    sensors: dict[tuple[str, str], NextFloorCountSensor] = {}

    @callback
    def sync(_revision: int | None = None) -> None:
        building = data.building
        new: list[NextFloorCountSensor] = []
        scopes = [(HOUSE, "")] + [(f["id"], f.get("name") or f["id"]) for f in _floors(building)]
        for scope, name in scopes:
            for kind in KINDS:
                sensor = sensors.get((scope, kind))
                if sensor is None:
                    sensor = sensors[(scope, kind)] = NextFloorCountSensor(hass, entry, scope, name, kind)
                    new.append(sensor)
        for sensor in sensors.values():
            sensor.take(building)
            if sensor not in new and sensor.hass is not None:
                sensor.async_write_ha_state()
        if new:
            async_add_entities(new)

    sync()
    entry.async_on_unload(async_dispatcher_connect(hass, SIGNAL_BUILDING_UPDATED, sync))
