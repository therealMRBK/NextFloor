"""Schema details: start views of the house, a floor and a room (#206, #282), the map, sub-meters, plugins."""

import pytest
import voluptuous as vol

from custom_components.nextfloor.schema import (
    ENERGY_SCHEMA,
    FURNITURE_SCHEMA,
    MAP_SCHEMA,
    PLACEMENT_SCHEMA,
    PLUGIN_SCHEMA,
    ROOM_SCHEMA,
    SETTINGS_SCHEMA,
    START_VIEW_SCHEMA,
)

ROOM = {"id": "r1", "name": "Bad", "area_id": None, "points": [[0, 0], [2, 0], [2, 2]], "floor_material": "tiles"}


def test_start_view_keeps_its_target() -> None:
    view = START_VIEW_SCHEMA({"theta": 1, "phi": 0.8, "radius": 9, "target": {"x": 1, "y": 0.5, "z": -2}})
    assert view["target"] == {"x": 1.0, "y": 0.5, "z": -2.0}


def test_start_view_without_target() -> None:
    assert "target" not in START_VIEW_SCHEMA({"theta": 1, "phi": 0.8, "radius": 9})


def test_room_start_view() -> None:
    assert ROOM_SCHEMA(ROOM)["start_view"] is None
    view = {"theta": 0.5, "phi": 0.9, "radius": 4, "target": {"x": 1, "y": 0.3, "z": 1}}
    room = ROOM_SCHEMA({**ROOM, "start_view": view})
    assert room["start_view"]["radius"] == 4.0


def test_map_defaults_and_limits() -> None:
    result = MAP_SCHEMA({"on": True, "lat": 50.1, "lon": 8.6})
    assert (result["zoom"], result["opacity"], result["url"]) == (18, 0.5, None)
    for bad in ({"lat": 99}, {"zoom": 25}, {"url": "http://tiles.example/{z}/{x}/{y}.png"}):
        with pytest.raises(vol.Invalid):
            MAP_SCHEMA({"on": True, "lat": 50.1, "lon": 8.6, **bad})


def test_sub_meter_fields_are_optional() -> None:
    meter = {"id": "m2", "type": "meter", "x": 1, "z": 1, "rotation": 0, "w": 0.5, "d": 0.2, "h": 0.8, "variant": None}
    plain = FURNITURE_SCHEMA(meter)
    assert not {"parent_meter", "meter_invert", "meter_floors"} & plain.keys()
    sub = FURNITURE_SCHEMA({**meter, "parent_meter": "m1", "meter_invert": True, "meter_floors": ["og", "dg"]})
    assert (sub["parent_meter"], sub["meter_invert"], sub["meter_floors"]) == ("m1", True, ["og", "dg"])
    with pytest.raises(vol.Invalid):
        FURNITURE_SCHEMA({**meter, "meter_floors": "og"})


def test_advanced_energy_mode_is_optional() -> None:
    assert "advanced" not in ENERGY_SCHEMA({})
    assert ENERGY_SCHEMA({"advanced": True})["advanced"] is True
    assert "show_unmetered" not in ENERGY_SCHEMA({"advanced": True})
    assert ENERGY_SCHEMA({"show_unmetered": True})["show_unmetered"] is True
    with pytest.raises(vol.Invalid):
        ENERGY_SCHEMA({"advanced": "yes"})


def test_energy_routes() -> None:
    assert "routes" not in ENERGY_SCHEMA({})
    route = {"key": "solar:f1", "points": [{"floor_id": "eg", "x": 1, "z": 2}, {"floor_id": "kg", "x": 1, "z": 2}]}
    result = ENERGY_SCHEMA({"routes": [route, {**route, "key": "grid", "cable": True}]})
    assert result["routes"][0]["points"][1] == {"floor_id": "kg", "x": 1.0, "z": 2.0}
    assert result["routes"][1]["cable"] is True
    for bad in ({**route, "points": [{"floor_id": "eg", "x": 1}]}, {**route, "points": [route["points"][0]] * 31}):
        with pytest.raises(vol.Invalid):
            ENERGY_SCHEMA({"routes": [bad]})


SETTINGS = {"wall_exterior": 0.3, "wall_interior": 0.1, "grid": 0.1, "roof": {}}


def test_plugin_urls() -> None:
    for url in ("/local/nf/glow.js", "/hacsfiles/nf-post/post.mjs", "https://example.org/p.js?v=2"):
        assert PLUGIN_SCHEMA({"url": url, "enabled": True})["url"] == url
    for url in ("http://example.org/p.js", "/config/secrets.js", "javascript:alert(1)", "/local/readme.txt"):
        with pytest.raises(vol.Invalid):
            PLUGIN_SCHEMA({"url": url, "enabled": True})
    with pytest.raises(vol.Invalid):
        PLUGIN_SCHEMA({"url": "/local/a.js", "enabled": True, "code": "alert(1)"})


def test_plugins_are_optional_and_limited() -> None:
    assert "plugins" not in SETTINGS_SCHEMA(SETTINGS)
    many = [{"url": f"/local/p{i}.js", "enabled": True} for i in range(21)]
    with pytest.raises(vol.Invalid):
        SETTINGS_SCHEMA({**SETTINGS, "plugins": many})
    assert len(SETTINGS_SCHEMA({**SETTINGS, "plugins": many[:20]})["plugins"]) == 20


def test_furniture_tap_action() -> None:
    item = {"id": "f1", "type": "table", "x": 1, "z": 1, "rotation": 0, "w": 0.5, "d": 0.5, "h": 0.8, "variant": None}
    assert FURNITURE_SCHEMA(item)["tap"] is None
    tap = FURNITURE_SCHEMA({**item, "tap": {"action": "more_info", "target": "sensor.pills"}})["tap"]
    assert tap == {"action": "more_info", "target": "sensor.pills", "data": None}
    popup = {"action": "fire_dom_event", "data": {"browser_mod": {"service": "browser_mod.popup"}}}
    assert FURNITURE_SCHEMA({**item, "tap": popup})["tap"]["data"] == popup["data"]
    with pytest.raises(vol.Invalid):
        FURNITURE_SCHEMA({**item, "tap": {"action": "toggle"}})


def test_placement_plugin_settings() -> None:
    placed = {"entity_id": "camera.hall", "x": 1, "z": 2, "y": None}
    assert PLACEMENT_SCHEMA(placed)["plugin"] is None
    data = {"cameras": {"fov": 90, "dome": False, "detect": "person"}}
    assert PLACEMENT_SCHEMA({**placed, "plugin": data})["plugin"] == data
    with pytest.raises(vol.Invalid):
        PLACEMENT_SCHEMA({**placed, "plugin": {"cameras": {"bad key": 1}}})
    with pytest.raises(vol.Invalid):
        PLACEMENT_SCHEMA({**placed, "plugin": {"cameras": {"nested": {"a": 1}}}})


STAIRS = {"id": "s1", "type": "stairs", "x": 1, "z": 2, "rotation": 0, "w": 2.2, "d": 2.8, "h": 2.8, "variant": None}


def test_shaped_stair_round_trips() -> None:
    stair = {
        "shape": "l",
        "turn": "left",
        "build": "mono",
        "risers": False,
        "steps": 15,
        "run_width": 1.0,
        "down": False,
        "rail": "both",
    }
    assert FURNITURE_SCHEMA({**STAIRS, "stair": stair})["stair"] == stair
    assert "stair" not in FURNITURE_SCHEMA(STAIRS)


def test_shaped_stair_rejects_unknown_shapes() -> None:
    for bad in ({"shape": "zigzag"}, {"steps": 99}, {"rail": "middle"}, {"build": "rope"}, {"opening": "wide"}):
        with pytest.raises(vol.Invalid):
            FURNITURE_SCHEMA({**STAIRS, "stair": bad})


FURN = {"id": "f1", "type": "plant", "x": 0, "z": 0, "rotation": 0, "w": 1, "d": 1, "h": 1, "variant": None}


def test_furniture_show_when() -> None:
    assert "show_when" not in FURNITURE_SCHEMA(FURN)
    cond = {"entity": "input_boolean.xmas", "state": "on, home", "invert": True}
    assert FURNITURE_SCHEMA({**FURN, "show_when": cond})["show_when"] == cond
    assert FURNITURE_SCHEMA({**FURN, "show_when": None})["show_when"] is None
    with pytest.raises(vol.Invalid):
        FURNITURE_SCHEMA({**FURN, "show_when": {"state": "on"}})
