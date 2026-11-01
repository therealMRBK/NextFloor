"""Announcements: the action nextfloor.announce speaks a message in rooms of the plan and on the open NextFloor screens.

Each room speaks through its own speaker: the one chosen for the room in the plan, else one placed in the room, else
one of the room's area. A voice satellite announces with its chime, an Echo through its announce entity (Alexa Devices)
or as an announcement (Alexa Media Player), a speaker that can announce (Sonos and others) lowers its music for it, any
other speaker plays it through text-to-speech. TVs and speakers that are off are never picked by themselves. Rooms
with a quiet time are left out while it runs, unless the announcement names only that room.
"""

from __future__ import annotations

from datetime import time as dtime
import logging
from typing import Any

from homeassistant.core import HomeAssistant, ServiceCall, SupportsResponse, callback
from homeassistant.exceptions import ServiceValidationError
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.dispatcher import async_dispatcher_send
from homeassistant.util import dt as dt_util
import voluptuous as vol

from .const import DOMAIN, SIGNAL_ANNOUNCE

_LOGGER = logging.getLogger(__name__)

SERVICE_ANNOUNCE = "announce"

ANNOUNCE_SCHEMA = vol.Schema(
    {
        vol.Required("message"): vol.All(cv.string, vol.Length(min=1, max=500)),
        # rooms by name, room id or area id; none and no floor: every room with a speaker
        vol.Optional("rooms"): vol.All(cv.ensure_list, [cv.string]),
        vol.Optional("floor"): cv.string,
        vol.Optional("on_speakers", default=True): cv.boolean,
        vol.Optional("on_screens", default=True): cv.boolean,
        # only the NextFloor screens with these names (set on each screen); none: every screen
        vol.Optional("screens"): vol.All(cv.ensure_list, [cv.string]),
        # a text-to-speech entity instead of the one chosen in the plan (or the first one)
        vol.Optional("tts_entity"): cv.entity_id,
    }
)

_TV_CLASSES = {"tv"}
# MediaPlayerEntityFeature.MEDIA_ANNOUNCE: the speaker lowers what it plays for the announcement and carries on after
_MEDIA_ANNOUNCE = 1048576


class NoSpeech(Exception):
    """A speaker that needs text-to-speech while there is no text-to-speech entity."""


def _point_in(points: list[list[float]], x: float, z: float) -> bool:
    """Ray casting: whether (x, z) lies inside the polygon."""
    inside = False
    j = len(points) - 1
    for i, (xi, zi) in enumerate(points):
        xj, zj = points[j]
        if (zi > z) != (zj > z) and x < (xj - xi) * (z - zi) / ((zj - zi) or 1e-12) + xi:
            inside = not inside
        j = i
    return inside


def _parse_time(text: Any) -> dtime | None:
    try:
        hours, minutes = str(text).split(":")[:2]
        return dtime(int(hours), int(minutes))
    except (ValueError, TypeError):
        return None


def in_quiet_time(room: dict[str, Any], now: dtime) -> bool:
    """Whether the room's quiet time runs at `now` (a time span over midnight works too)."""
    quiet = room.get("announce_quiet") or {}
    start, end = _parse_time(quiet.get("from")), _parse_time(quiet.get("to"))
    if start is None or end is None or start == end:
        return False
    return start <= now < end if start < end else now >= start or now < end


def _matches(room: dict[str, Any], wanted: str) -> bool:
    key = wanted.strip().casefold()
    return key in (
        str(room.get("id", "")).casefold(),
        str(room.get("area_id") or "").casefold(),
        str(room.get("name", "")).strip().casefold(),
    )


def target_rooms(
    building: dict[str, Any], rooms: list[str] | None, floor: str | None
) -> tuple[list[tuple[dict, dict]], bool]:
    """The (floor, room) pairs an announcement goes to, and whether exactly the rooms asked for were named."""
    pairs = [(f, r) for f in building.get("floors", []) for r in f.get("rooms", [])]
    if floor:
        key = floor.strip().casefold()
        pairs = [
            (f, r)
            for f, r in pairs
            if key
            in (
                str(f.get("id", "")).casefold(),
                str(f.get("name", "")).strip().casefold(),
                str(f.get("ha_floor") or "").casefold(),
            )
        ]
    if rooms:
        pairs = [(f, r) for f, r in pairs if any(_matches(r, w) for w in rooms)]
        return pairs, True
    return pairs, False


def _area_entities(hass: HomeAssistant, area_id: str | None) -> list[str]:
    if not area_id:
        return []
    ent_reg = er.async_get(hass)
    dev_reg = dr.async_get(hass)
    found = []
    for entry in ent_reg.entities.values():
        if entry.disabled_by or entry.hidden_by:
            continue
        area = entry.area_id
        if area is None and entry.device_id and (device := dev_reg.async_get(entry.device_id)):
            area = device.area_id
        if area == area_id:
            found.append(entry.entity_id)
    return found


def _is_echo_announce(hass: HomeAssistant, entity_id: str) -> bool:
    """The announce entity of an Echo (Alexa Devices: a notify entity whose unique id ends in "-announce")."""
    if not entity_id.startswith("notify."):
        return False
    entry = er.async_get(hass).async_get(entity_id)
    return entry is not None and str(entry.unique_id).endswith("-announce")


def _usable_speaker(hass: HomeAssistant, entity_id: str) -> bool:
    """A speaker that may be picked by itself: no TV, not off or gone. An Echo's announce entity has no state to ask."""
    st = hass.states.get(entity_id)
    if st is None or st.state == "unavailable":
        return False
    if entity_id.startswith("notify."):
        return _is_echo_announce(hass, entity_id)
    if st.state in ("off", "unknown"):
        return False
    return st.attributes.get("device_class") not in _TV_CLASSES


def room_speaker(hass: HomeAssistant, floor: dict[str, Any], room: dict[str, Any]) -> str | None:
    """A room's speaker: chosen in the plan, else placed in the room, else a voice satellite or speaker of its area."""
    chosen = room.get("announce_speaker")
    if chosen == "none":
        return None
    if chosen:
        return chosen
    points = room.get("points") or []
    if len(points) >= 3:
        placed = [
            p["entity_id"]
            for p in floor.get("placements", [])
            if str(p.get("entity_id", "")).startswith(("media_player.", "assist_satellite."))
            and _point_in(points, float(p.get("x", 0)), float(p.get("z", 0)))
        ]
        placed += [
            f["entity"]
            for f in floor.get("furniture", [])
            if str(f.get("entity") or "").startswith(("media_player.", "assist_satellite."))
            and _point_in(points, float(f.get("x", 0)), float(f.get("z", 0)))
        ]
        for entity_id in placed:
            if _usable_speaker(hass, entity_id):
                return entity_id
    area = _area_entities(hass, room.get("area_id"))
    for domain in ("assist_satellite.", "notify.", "media_player."):
        for entity_id in sorted(e for e in area if e.startswith(domain)):
            if _usable_speaker(hass, entity_id):
                return entity_id
    return None


def _announce_entity(hass: HomeAssistant, media_player: str) -> str | None:
    """The announce entity of the same device (an Echo of the Alexa Devices integration)."""
    ent_reg = er.async_get(hass)
    entry = ent_reg.async_get(media_player)
    if entry is None or entry.device_id is None:
        return None
    for other in er.async_entries_for_device(ent_reg, entry.device_id):
        if other.domain == "notify" and str(other.unique_id).endswith("-announce"):
            return other.entity_id
    return None


def _platform(hass: HomeAssistant, entity_id: str) -> str | None:
    entry = er.async_get(hass).async_get(entity_id)
    return entry.platform if entry else None


def _tts_entity(hass: HomeAssistant, building: dict[str, Any], wanted: str | None) -> str | None:
    """The text-to-speech entity: asked for, chosen in the plan, else the first one."""
    for candidate in (wanted, (building.get("settings") or {}).get("announce_tts")):
        if candidate and candidate != "none" and hass.states.get(candidate):
            return candidate
    entities = sorted(hass.states.async_entity_ids("tts"))
    return entities[0] if entities else None


async def _speak(hass: HomeAssistant, speaker: str, message: str, tts: str | None) -> str:
    """Say the message on one speaker; returns how (for the response). Raises NoSpeech when it needs text-to-speech."""
    if speaker.startswith("assist_satellite."):
        await hass.services.async_call(
            "assist_satellite", "announce", {"entity_id": speaker, "message": message}, blocking=True
        )
        return "satellite"
    announce = speaker if speaker.startswith("notify.") else _announce_entity(hass, speaker)
    if announce:
        await hass.services.async_call(
            "notify", "send_message", {"entity_id": announce, "message": message}, blocking=True
        )
        return "echo"
    if _platform(hass, speaker) == "alexa_media" and hass.services.has_service("notify", "alexa_media"):
        await hass.services.async_call(
            "notify",
            "alexa_media",
            {"message": message, "target": [speaker], "data": {"type": "announce"}},
            blocking=True,
        )
        return "echo"
    if tts is None:
        raise NoSpeech
    st = hass.states.get(speaker)
    features = int(st.attributes.get("supported_features", 0)) if st else 0
    if features & _MEDIA_ANNOUNCE:
        media_id = tts_media_id(hass, message, tts)
        await hass.services.async_call(
            "media_player",
            "play_media",
            {"entity_id": speaker, "media_content_id": media_id, "media_content_type": "music", "announce": True},
            blocking=True,
        )
        return "announce"
    await hass.services.async_call(
        "tts",
        "speak",
        {"entity_id": tts, "media_player_entity_id": speaker, "message": message, "cache": True},
        blocking=True,
    )
    return "tts"


def tts_media_id(hass: HomeAssistant, message: str, tts: str) -> str:
    """The media source id of the spoken message (text-to-speech is loaded only when it is needed)."""
    from homeassistant.components.tts import generate_media_source_id

    return generate_media_source_id(hass, message, engine=tts, cache=True)


async def screen_audio(hass: HomeAssistant, tts: str | None, message: str) -> str | None:
    """A URL with the spoken message for the screens (None: they speak with the browser's own voice)."""
    if tts is None:
        return None
    try:
        from homeassistant.components import media_source

        resolved = await media_source.async_resolve_media(hass, tts_media_id(hass, message, tts), None)
    except Exception as err:  # any engine error just leaves the screens to the browser's voice
        _LOGGER.debug("No text-to-speech audio for the screens: %s", err)
        return None
    return resolved.url


async def async_announce(hass: HomeAssistant, building: dict[str, Any], data: dict[str, Any]) -> dict[str, Any]:
    """Speak an announcement on the rooms' speakers and send it to the NextFloor screens."""
    message: str = data["message"]
    tts = _tts_entity(hass, building, data.get("tts_entity"))
    spoken: dict[str, str] = {}
    skipped: dict[str, str] = {}
    if data.get("on_speakers", True):
        pairs, named = target_rooms(building, data.get("rooms"), data.get("floor"))
        if data.get("rooms") and not pairs:
            raise ServiceValidationError(translation_domain=DOMAIN, translation_key="no_rooms")
        now = dt_util.now().time()
        done: set[str] = set()
        for floor, room in pairs:
            name = room.get("name") or room.get("id", "")
            # a quiet room only hears what is meant for it alone
            if in_quiet_time(room, now) and not (named and len(pairs) == 1):
                skipped[name] = "quiet"
                continue
            speaker = room_speaker(hass, floor, room)
            if speaker is None:
                if named:
                    skipped[name] = "no_speaker"
                continue
            if speaker in done:
                continue
            done.add(speaker)
            try:
                spoken[speaker] = await _speak(hass, speaker, message, tts)
            except NoSpeech:
                skipped[name] = "no_tts"
            except Exception as err:  # one speaker failing must not stop the others
                _LOGGER.warning("Announcement on %s failed: %s", speaker, err)
                skipped[name] = "failed"
    on_screens = bool(data.get("on_screens", True))
    if on_screens:
        audio = await screen_audio(hass, tts, message)
        payload = {
            "message": message,
            "screens": data.get("screens") or [],
            "audio": audio,
            "time": dt_util.utcnow().isoformat(),
        }
        async_dispatcher_send(hass, SIGNAL_ANNOUNCE, payload)
    # nobody heard it because no speaker could talk: say why instead of failing silently
    if not spoken and not on_screens and skipped and all(why == "no_tts" for why in skipped.values()):
        raise ServiceValidationError(translation_domain=DOMAIN, translation_key="no_tts")
    return {"speakers": spoken, "skipped": skipped, "screens": on_screens}


@callback
def async_register_announce(hass: HomeAssistant) -> None:
    """Register the action nextfloor.announce."""

    async def handle(call: ServiceCall) -> dict[str, Any] | None:
        data = hass.data.get(DOMAIN)
        if data is None:
            raise ServiceValidationError(translation_domain=DOMAIN, translation_key="not_loaded")
        result = await async_announce(hass, data.building, call.data)
        return result if call.return_response else None

    hass.services.async_register(
        DOMAIN, SERVICE_ANNOUNCE, handle, schema=ANNOUNCE_SCHEMA, supports_response=SupportsResponse.OPTIONAL
    )
