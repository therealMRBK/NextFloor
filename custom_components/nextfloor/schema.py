"""Validation schemas for the building data (mirrors frontend/src/model.ts).

Known fields are checked; fields added by newer frontends are passed through (extra=ALLOW_EXTRA),
so saving keeps working after a frontend update until Home Assistant restarts with the new backend.
"""

from __future__ import annotations

import re

import voluptuous as vol

MAX_FLOORS = 20
MAX_ROOMS = 200
MAX_POINTS = 200
MAX_ITEMS = 1000
MAX_IMAGE_CHARS = 8 * 1024 * 1024

_ID = vol.All(str, vol.Length(min=1, max=64), vol.Match(r"^[A-Za-z0-9_\-.]+$"))
_NAME = vol.All(str, vol.Length(max=100))
_COORD = vol.All(vol.Coerce(float), vol.Range(min=-1000, max=1000))
_LENGTH = vol.All(vol.Coerce(float), vol.Range(min=0, max=100))
_POINT = vol.All([_COORD], vol.Length(min=2, max=2))
_ENTITY_REF = vol.Any(None, vol.All(str, vol.Length(max=255)))

_SENSOR_REF = vol.Any(None, vol.All(str, vol.Length(max=255)))

# a camera to open with: angles, distance and (optional) the point it looks at; for a floor or a room the
# point's height is counted from that floor
START_VIEW_SCHEMA = vol.Schema(
    {
        vol.Required("theta"): vol.All(vol.Coerce(float), vol.Range(min=-10, max=10)),
        vol.Required("phi"): vol.All(vol.Coerce(float), vol.Range(min=0, max=3.2)),
        vol.Required("radius"): vol.All(vol.Coerce(float), vol.Range(min=1, max=500)),
        vol.Optional("target"): {
            vol.Required("x"): vol.All(vol.Coerce(float), vol.Range(min=-1000, max=1000)),
            vol.Required("y"): vol.All(vol.Coerce(float), vol.Range(min=-200, max=200)),
            vol.Required("z"): vol.All(vol.Coerce(float), vol.Range(min=-1000, max=1000)),
        },
    },
    extra=vol.ALLOW_EXTRA,
)

ROOM_SCHEMA = vol.Schema(
    {
        # room climate read from chosen sensors (None = automatic, "none" = no value)
        vol.Optional("climate", default=None): vol.Any(
            None,
            {
                vol.Optional("temperature", default=None): _SENSOR_REF,
                vol.Optional("humidity", default=None): _SENSOR_REF,
                vol.Optional("co2", default=None): _SENSOR_REF,
            },
        ),
        vol.Required("id"): _ID,
        vol.Required("name"): _NAME,
        vol.Required("area_id"): vol.Any(None, vol.All(str, vol.Length(max=255))),
        # light moods saved in the room panel: each light off, or on with brightness and colour
        vol.Optional("moods"): vol.All(
            [
                vol.Schema(
                    {
                        vol.Required("id"): vol.All(str, vol.Length(min=1, max=64)),
                        vol.Required("name"): vol.All(str, vol.Length(max=60)),
                        vol.Required("lights"): vol.All([dict], vol.Length(max=40)),
                    }
                )
            ],
            vol.Length(max=20),
        ),
        # underfloor heating: the entity whose heating makes the floor glow
        vol.Optional("floor_heating"): vol.Any(None, vol.All(str, vol.Length(max=255))),
        vol.Required("points"): vol.All([_POINT], vol.Length(min=3, max=MAX_POINTS)),
        vol.Required("floor_material"): vol.All(str, vol.Length(max=32)),
        # the camera this room opens with when it is tapped (None = framed from above)
        vol.Optional("start_view", default=None): vol.Any(None, START_VIEW_SCHEMA),
        # entities shown in the room's panel although they are not in the plan
        vol.Optional("panel", default=list): vol.All([vol.All(str, vol.Length(max=255))], vol.Length(max=100)),
        # entities of the area kept out of the room panel
        vol.Optional("hidden", default=list): vol.All([vol.All(str, vol.Length(max=255))], vol.Length(max=200)),
        # entities whose state text the room panel leaves out
        vol.Optional("no_state", default=list): vol.All([vol.All(str, vol.Length(max=255))], vol.Length(max=200)),
        # split points on each edge (metres from the edge's start) that cut the wall into parts of their own
        vol.Optional("wall_splits"): vol.All(
            [vol.Any(None, vol.All([vol.All(vol.Coerce(float), vol.Range(min=0.05, max=200))], vol.Length(max=16)))],
            vol.Length(max=MAX_POINTS),
        ),
        # thickness of the wall on each edge in m (None = the building's exterior / interior thickness)
        vol.Optional("wall_thickness"): vol.All(
            [
                vol.Any(
                    None,
                    vol.All(vol.Coerce(float), vol.Range(min=0.02, max=1.5)),
                    # a split edge: one thickness per part
                    vol.All(
                        [vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0.02, max=1.5)))], vol.Length(max=32)
                    ),
                )
            ],
            vol.Length(max=MAX_POINTS),
        ),
        # height of the wall on each edge (None = full floor height, 0 = no wall), aligned with the points;
        # a split edge may carry one height per part instead
        vol.Optional("wall_heights"): vol.All(
            [
                vol.Any(
                    None,
                    vol.All(vol.Coerce(float), vol.Range(min=0, max=20)),
                    vol.All([vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0, max=20)))], vol.Length(max=32)),
                )
            ],
            vol.Length(max=MAX_POINTS),
        ),
        # a room on its own level: its floor this much below (negative) or above the floor's level, in m
        vol.Optional("floor_offset", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=-2, max=2))),
        # cleaning: the script or button that sends the robot vacuum to this room
        vol.Optional("clean_entity", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        # whether the room counts as living area (None: by its name, a garage or cellar does not)
        vol.Optional("living", default=None): vol.Any(None, bool),
        # the room's own ceiling height (None = the floor height)
        vol.Optional("ceiling", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0.5, max=20))),
        # announcements: the room's speaker ("none": the room never speaks) and a quiet time ("HH:MM")
        vol.Optional("announce_speaker"): _ENTITY_REF,
        vol.Optional("announce_quiet"): vol.Any(
            None,
            vol.Schema(
                {
                    vol.Required("from"): vol.Match(r"^([01]\d|2[0-3]):[0-5]\d$"),
                    vol.Required("to"): vol.Match(r"^([01]\d|2[0-3]):[0-5]\d$"),
                }
            ),
        ),
    },
    extra=vol.ALLOW_EXTRA,
)

# door looks (room door, front doors with glass and sidelights, glass and sliding door) and window looks
_OPENING_STYLES = ["interior", "front", "front_glass", "sidelight", "sidelights", "glass", "sliding", "passage"]
_OPENING_STYLES += ["standard", "bars", "glass_wall"]

OPENING_SCHEMA = vol.Schema(
    {
        vol.Required("id"): _ID,
        vol.Required("room_id"): _ID,
        vol.Required("edge"): vol.All(int, vol.Range(min=0, max=MAX_POINTS)),
        vol.Required("offset"): _LENGTH,
        # an opening in a free wall: the wall's id (room_id is then the room the wall stands in)
        vol.Optional("wall", default=None): vol.Any(None, _ID),
        vol.Required("width"): _LENGTH,
        vol.Required("type"): vol.In(["door", "window", "garage"]),
        vol.Required("sill"): _LENGTH,
        vol.Required("height"): _LENGTH,
        # window sash hinge as seen from the room; entities: None = assign automatically by area,
        # "none" = no entity
        vol.Optional("hinge", default="left"): vol.In(["left", "right"]),
        # double doors and windows: two leaves, the second with a contact of its own
        vol.Optional("leaves", default=1): vol.In([1, 2]),
        # doors: swing into the room ("in") or to the other side ("out")
        vol.Optional("swing", default="in"): vol.In(["in", "out"]),
        # look: None = automatic (front door in an exterior wall, room door inside; plain window)
        vol.Optional("style", default=None): vol.Any(None, vol.In(_OPENING_STYLES)),
        # front doors with sidelights: one on the hinge side, and the widths (None = automatic)
        vol.Optional("sidelight_hinge", default=False): bool,
        vol.Optional("sidelight_width", default=None): vol.Any(
            None, vol.All(vol.Coerce(float), vol.Range(min=0.1, max=3))
        ),
        vol.Optional("sidelight_width2", default=None): vol.Any(
            None, vol.All(vol.Coerce(float), vol.Range(min=0.1, max=3))
        ),
        # glass walls: how many panes the mullions make (None = about every 0.9 m, 0 = one single pane)
        vol.Optional("panes", default=None): vol.Any(None, vol.All(vol.Coerce(int), vol.Range(min=0, max=40))),
        # glass walls: pieces of one pane that follows a curved wall share this id, one per room edge
        vol.Optional("front", default=None): vol.Any(None, vol.All(str, vol.Length(max=64))),
        vol.Optional("contact2", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        # windows: a plain contact, a handle sensor (open / tilted / closed), or a contact and a tilt sensor
        vol.Optional("sensor", default=None): vol.Any(None, vol.In(["contact", "handle", "contact_tilt"])),
        # the same for the second leaf of a double window
        vol.Optional("sensor2", default=None): vol.Any(None, vol.In(["contact", "handle", "contact_tilt"])),
        vol.Optional("tilt2", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        # a sensor with the blind's position while it moves (covers that only report at the end)
        vol.Optional("position", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        # the position sensor counts the other way round (0 = open)
        vol.Optional("position_inverted", default=False): bool,
        # windows: a sensor with the sash's tilt angle (degrees), the angle that counts as fully tilted,
        # an offset the sensor reports when closed, and the other sign
        vol.Optional("tilt_angle", default=None): _ENTITY_REF,
        vol.Optional("tilt_max", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=1, max=90))),
        vol.Optional("tilt_offset", default=None): vol.Any(
            None, vol.All(vol.Coerce(float), vol.Range(min=-360, max=360))
        ),
        vol.Optional("tilt_invert", default=False): bool,
        # a door without a sensor is drawn closed instead of half open
        vol.Optional("shut", default=False): bool,
        # windows: how the sash opens (None = turn and tilt into the room)
        vol.Optional("opens"): vol.Any(None, vol.In(["turn", "slide", "top"])),
        # how far a door leaf opens in degrees (None = the usual swing)
        vol.Optional("open_angle", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=5, max=180))),
        # highlight in 3D while open (None) or while closed ("closed": a WC or a child's room door)
        vol.Optional("mark", default=None): vol.Any(None, vol.In(["closed"])),
        # ask before moving the blind or garage door (no moving by a swipe then)
        vol.Optional("confirm", default=False): bool,
        vol.Optional("cover", default=None): _ENTITY_REF,
        # a second blind (the right half of a wide window), the kind of blind and its favourite position (Somfy "My", %)
        vol.Optional("cover2"): vol.Any(None, vol.All(str, vol.Length(max=255))),
        vol.Optional("blind"): vol.Any(None, vol.In(["roller", "venetian", "inside"])),
        vol.Optional("my_position"): vol.Any(None, vol.All(vol.Coerce(int), vol.Range(min=0, max=100))),
        vol.Optional("contact", default=None): _ENTITY_REF,
        vol.Optional("tilt", default=None): _ENTITY_REF,
    },
    extra=vol.ALLOW_EXTRA,
)

# screens: a picture shown while an entity is in a state (an image id of the image store, or an http URL)
_SCREEN_PICTURE_SCHEMA = vol.Schema(
    {
        vol.Required("entity"): vol.All(str, vol.Length(max=255)),
        # compare this attribute (e.g. app_name) instead of the state
        vol.Optional("attribute", default=None): vol.Any(None, vol.All(str, vol.Length(max=64))),
        vol.Required("state"): vol.All(str, vol.Length(max=128)),
        vol.Required("image"): vol.All(str, vol.Length(max=2048)),
    }
)

# Auto: the car's entities on a parking spot (None = found on the car's device)
_CAR_ENTITY = vol.Any(None, vol.All(str, vol.Length(max=255)))
CAR_SCHEMA = vol.Schema(
    {
        vol.Optional("device", default=None): _CAR_ENTITY,
        vol.Optional("soc", default=None): _CAR_ENTITY,
        vol.Optional("range", default=None): _CAR_ENTITY,
        vol.Optional("charging", default=None): _CAR_ENTITY,
        vol.Optional("plugged", default=None): _CAR_ENTITY,
        vol.Optional("lock", default=None): _CAR_ENTITY,
        vol.Optional("climate", default=None): _CAR_ENTITY,
        vol.Optional("tracker", default=None): _CAR_ENTITY,
        vol.Optional("departure"): _CAR_ENTITY,
    },
    extra=vol.ALLOW_EXTRA,
)
# parking spots: which vehicle a state of the type sensor means
_VEHICLE_TYPE_SCHEMA = vol.Schema(
    {vol.Required("state"): vol.All(str, vol.Length(max=64)), vol.Required("vehicle"): vol.All(str, vol.Length(max=96))}
)

# an own tap action of a piece of furniture: the same actions as the own buttons of the central menu
_TAP_SCHEMA = vol.Schema(
    {
        vol.Required("action"): vol.In(["navigate", "more_info", "service", "fire_dom_event"]),
        vol.Optional("target", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        vol.Optional("data", default=None): vol.Any(None, dict),
    }
)

# stairs: shape, turn, build and direction of a shaped stair (no defaults: plans without it keep the simple stair)
_STAIR_SCHEMA = vol.Schema(
    {
        vol.Optional("shape"): vol.In(["straight", "quarter", "l", "half", "u", "spiral"]),
        vol.Optional("turn"): vol.In(["left", "right"]),
        vol.Optional("build"): vol.In(["solid", "stringer", "mono", "cantilever"]),
        vol.Optional("risers"): bool,
        vol.Optional("steps"): vol.Any(None, vol.All(vol.Coerce(int), vol.Range(min=2, max=40))),
        vol.Optional("run_width"): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0.3, max=5))),
        vol.Optional("down"): bool,
        vol.Optional("rail"): vol.In(["none", "left", "right", "both"]),
        vol.Optional("opening"): vol.In(["headroom", "full", "none"]),
        # an L or U stair: the risers from the floor up to its landing (None: shared by the flights' lengths)
        vol.Optional("landing_after"): vol.Any(None, vol.All(vol.Coerce(int), vol.Range(min=1, max=40))),
    }
)

# a pin moved by hand (m along x and z, and up)
_PIN_OFFSET = vol.Any(
    None,
    vol.Schema({vol.Optional(k): vol.All(vol.Coerce(float), vol.Range(min=-5, max=5)) for k in ("x", "y", "z")}),
)

FURNITURE_SCHEMA = vol.Schema(
    {
        vol.Required("id"): _ID,
        # built-in type, or "pack:<pack id>:<item id>" for furniture from a pack
        vol.Required("type"): vol.All(str, vol.Length(max=96)),
        vol.Required("x"): _COORD,
        vol.Required("z"): _COORD,
        vol.Required("rotation"): vol.Coerce(float),
        vol.Required("w"): _LENGTH,
        vol.Required("d"): _LENGTH,
        vol.Required("h"): _LENGTH,
        vol.Required("variant"): vol.Any(None, vol.All(str, vol.Length(max=32))),
        # its own name (e.g. "Wechselrichter Nord"); None = the type's name; show_name puts it under the marker
        vol.Optional("name", default=None): vol.Any(None, vol.All(str, vol.Length(max=60))),
        vol.Optional("show_name", default=False): bool,
        # Local visualization only; unknown future identifiers remain inert and round-trip intact.
        vol.Optional("animations_enabled"): bool,
        vol.Optional("effect_animations"): vol.All(
            vol.Schema(
                {vol.All(str, vol.Length(min=1, max=255)): vol.All(str, vol.Length(min=1, max=64))},
                extra=vol.PREVENT_EXTRA,
            ),
            vol.Length(max=100),
        ),
        # lamps / lights: how strongly they glow in 3D (None = as reported)
        vol.Optional("glow_scale", default=None): vol.Any(
            None, vol.All(vol.Coerce(float), vol.Range(min=0.1, max=1.5))
        ),
        # screens: strength of the glow on the wall behind a TV that plays (None = full, 0 = off)
        vol.Optional("ambilight", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0, max=1.5))),
        # linked entities (e.g. the TV's media player, a power sensor): None = automatic, "none" = no entity
        vol.Optional("entity", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        vol.Optional("power", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        # smart fridge: door sensors of the left and the right door
        vol.Optional("door_left", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        vol.Optional("door_right", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        # home battery: state of charge; wallbox: status (charging, plugged in)
        vol.Optional("soc", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        # home battery: a separate charging power sensor when the power sensor only reports discharging
        vol.Optional("charge", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        # meter: a separate export power sensor when the power sensor only reports import
        vol.Optional("export", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        # meter in the advanced energy mode: the meter it hangs off (a sub-meter), its own sign and the floors it
        # feeds; no defaults, so plans without them are stored as they are
        vol.Optional("parent_meter"): vol.Any(None, _ID),
        vol.Optional("meter_invert"): bool,
        vol.Optional("meter_floors"): vol.All([_ID], vol.Length(max=MAX_FLOORS)),
        vol.Optional("status", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        # robot vacuum: sensor naming the room it cleans right now (None = automatic)
        vol.Optional("room_sensor", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        # ask before switching the linked entity
        vol.Optional("confirm", default=False): bool,
        # its marker in 3D: None = automatic, always, without watts, or hidden
        vol.Optional("marker", default=None): vol.Any(None, vol.In(["always", "active", "no_power", "never"])),
        # an own symbol for the marker: a Material Design icon name without "mdi:"
        vol.Optional("icon", default=None): vol.Any(None, vol.All(str, vol.Length(max=64))),
        # parking spots: the vehicle shown (a pack item type) while the entity reports a car, its size
        # factor, and a sensor naming the kind of vehicle with a state -> vehicle mapping
        # height of the bottom edge above the floor (None = default: the floor, a pack item's mount)
        vol.Optional("mount_y", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0, max=10))),
        # hanging items: the ceiling height right there (None = the room's ceiling); ceiling fan: its fan entity
        vol.Optional("ceiling_y", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0.5, max=20))),
        vol.Optional("fan_entity", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        # any furniture: an entity whose state the item shows (glows while on / occupied / home), optionally
        # two of them for the halves of a bed (left/right) or a bunk bed (bottom/top)
        vol.Optional("state_entity", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        vol.Optional("state_entity2", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        vol.Optional("state_split", default=None): vol.Any(None, vol.In(["left_right", "top_bottom"])),
        # lamps: a second entity with the colour and brightness (a relay switches, the bulb knows its colour)
        vol.Optional("color_entity", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        # lamps: further lights of the same fixture (night light, ambient ring)
        vol.Optional("extra_lights"): vol.All([vol.All(str, vol.Length(max=255))], vol.Length(max=4)),
        # mirrored left-right
        vol.Optional("mirror", default=False): bool,
        vol.Optional("stair"): vol.Any(None, _STAIR_SCHEMA),
        # fridges: thermometers of the fridge and the freezer compartment
        vol.Optional("temp_entity"): vol.Any(None, vol.All(str, vol.Length(max=255))),
        vol.Optional("temp_entity2"): vol.Any(None, vol.All(str, vol.Length(max=255))),
        # lawn sprinkler: how far its water reaches (m)
        vol.Optional("spray"): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0.5, max=15))),
        # LED strip: tilt about its length (degrees) and standing upright
        vol.Optional("tilt", default=0.0): vol.All(vol.Coerce(float), vol.Range(min=-90, max=90)),
        vol.Optional("upright", default=False): bool,
        # LED strip: how steeply its length rises (degrees), up a sloped ceiling or along a stair
        vol.Optional("rise", default=0.0): vol.All(vol.Coerce(float), vol.Range(min=-80, max=80)),
        vol.Optional("pictures", default=[]): vol.All([_SCREEN_PICTURE_SCHEMA], vol.Length(max=20)),
        # screens: the screen around a rule picture is dark (default) or white
        vol.Optional("screen_bg", default="black"): vol.In(["black", "white"]),
        vol.Optional("vehicle", default=None): vol.Any(None, vol.All(str, vol.Length(max=96))),
        # Auto: the car's entities
        vol.Optional("car", default=None): vol.Any(None, CAR_SCHEMA),
        vol.Optional("scale", default=1.0): vol.All(vol.Coerce(float), vol.Range(min=0.2, max=2)),
        vol.Optional("type_entity", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        vol.Optional("types", default=[]): vol.All([_VEHICLE_TYPE_SCHEMA], vol.Length(max=20)),
        # a tap on the item runs an own action (like the star menu's own buttons); None = its usual tap
        vol.Optional("tap", default=None): vol.Any(None, _TAP_SCHEMA),
        # fixed against moving by accident
        vol.Optional("locked", default=None): vol.Any(None, bool),
        # picture frames: the photo (a stored picture "image:<id>", a URL or an entity), its mat (%) and how it fits
        vol.Optional("picture"): vol.Any(None, vol.All(str, vol.Length(max=500))),
        vol.Optional("picture_border"): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0, max=40))),
        vol.Optional("picture_fit"): vol.Any(None, vol.In(["cover", "contain"])),
        vol.Optional("pin_offset"): _PIN_OFFSET,
        # shown only while an entity is in a state (seasonal decoration behind a helper)
        vol.Optional("show_when"): vol.Any(
            None,
            vol.Schema(
                {
                    vol.Required("entity"): vol.All(str, vol.Length(min=1, max=255)),
                    vol.Optional("state"): vol.Any(None, vol.All(str, vol.Length(max=120))),
                    vol.Optional("invert"): bool,
                }
            ),
        ),
    },
    extra=vol.ALLOW_EXTRA,
)

# what plugins store on a placed device: a few plain values per plugin
_PLUGIN_VALUES = vol.All(
    vol.Schema(
        {vol.All(str, vol.Match(r"^\w{1,32}$")): vol.Any(bool, int, float, vol.All(str, vol.Length(max=120)))},
        extra=vol.PREVENT_EXTRA,
    ),
    vol.Length(max=30),
)
_PLUGIN_DATA = vol.All(
    vol.Schema({vol.All(str, vol.Match(r"^[a-zA-Z0-9][\w.-]{0,63}$")): _PLUGIN_VALUES}, extra=vol.PREVENT_EXTRA),
    vol.Length(max=10),
)

PLACEMENT_SCHEMA = vol.Schema(
    {
        vol.Required("entity_id"): vol.All(str, vol.Length(max=255)),
        vol.Required("x"): _COORD,
        vol.Required("z"): _COORD,
        vol.Required("y"): vol.Any(None, _LENGTH),
        # lights: how the lamp is mounted (None = ceiling)
        vol.Optional("mount", default=None): vol.Any(None, vol.In(["ceiling", "floor", "table", "wall"])),
        # turn around the vertical axis (degrees)
        vol.Optional("rotation", default=0.0): vol.Coerce(float),
        # cameras: opening angle (degrees) and reach (m) of the field of view; None = default
        vol.Optional("fov", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=10, max=360))),
        vol.Optional("reach", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0.5, max=50))),
        vol.Optional("tilt", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0, max=90))),
        # ask before switching this device from the 3D view, the quick menu or the room panel
        # belongs to Outside, not to the room under it (a weather station on the roof)
        vol.Optional("outside"): bool,
        # its pin moved by hand
        vol.Optional("pin_offset"): _PIN_OFFSET,
        vol.Optional("confirm", default=False): bool,
        # its marker in 3D: None = automatic, always, without watts, or hidden
        vol.Optional("marker", default=None): vol.Any(None, vol.In(["always", "active", "no_power", "never"])),
        # an own symbol for the marker: a Material Design icon name without "mdi:"
        vol.Optional("icon", default=None): vol.Any(None, vol.All(str, vol.Length(max=64))),
        # an own name in the plan, without renaming the entity; show_name puts it under the marker
        vol.Optional("name", default=None): vol.Any(None, vol.All(str, vol.Length(max=60))),
        vol.Optional("show_name", default=False): bool,
        # Local visualization only; unknown future identifiers remain inert and round-trip intact.
        vol.Optional("animations_enabled"): bool,
        vol.Optional("effect_animations"): vol.All(
            vol.Schema(
                {vol.All(str, vol.Length(min=1, max=255)): vol.All(str, vol.Length(min=1, max=64))},
                extra=vol.PREVENT_EXTRA,
            ),
            vol.Length(max=100),
        ),
        # lamps / lights: how strongly they glow in 3D (None = as reported)
        vol.Optional("glow_scale", default=None): vol.Any(
            None, vol.All(vol.Coerce(float), vol.Range(min=0.1, max=1.5))
        ),
        # cameras: show the field-of-view wedge on the floor (None = yes)
        vol.Optional("cone", default=None): vol.Any(None, bool),
        # settings plugins add to the device's form: per plugin id, the values by key
        vol.Optional("plugin", default=None): vol.Any(None, _PLUGIN_DATA),
        # fixed against moving by accident
        vol.Optional("locked", default=None): vol.Any(None, bool),
    },
    extra=vol.ALLOW_EXTRA,
)

BACKGROUND_SCHEMA = vol.Schema(
    {
        vol.Required("image_id"): _ID,
        vol.Required("x"): _COORD,
        vol.Required("z"): _COORD,
        vol.Required("width"): vol.All(vol.Coerce(float), vol.Range(min=0.1, max=1000)),
        vol.Required("opacity"): vol.All(vol.Coerce(float), vol.Range(min=0, max=1)),
        # turn about the picture's middle (degrees)
        vol.Optional("rotation", default=0.0): vol.All(vol.Coerce(float), vol.Range(min=-360, max=360)),
    },
    extra=vol.ALLOW_EXTRA,
)

OUTDOOR_TYPES = ["lawn", "terrace", "path", "driveway", "pool", "bed", "wild", "hedge", "fence", "pergola"]

OUTDOOR_SCHEMA = vol.Schema(
    {
        vol.Required("id"): _ID,
        vol.Required("type"): vol.In(OUTDOOR_TYPES),
        vol.Required("points"): vol.All([_POINT], vol.Length(min=3, max=MAX_POINTS)),
        # hedges and fences: their height (None = default); outline False hides the neon line
        vol.Optional("height", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0.1, max=6))),
        vol.Optional("outline", default=True): bool,
        # height offset in m (a driveway down to a lower garage, a raised terrace)
        # (None = 0: the editor clears the field when it is set back to 0, #242)
        vol.Optional("offset", default=0.0): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=-10, max=10))),
        # fall in m across the area along slope_dir (the high edge sits at the offset)
        vol.Optional("slope", default=0.0): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0, max=20))),
        vol.Optional("slope_dir", default="x"): vol.In(["x", "-x", "z", "-z"]),
        # fences and pergolas: the closing edge is left out; pergola: X-bracing on the sides
        vol.Optional("open", default=False): bool,
        vol.Optional("bracing", default=False): bool,
        # the Home Assistant area of the garden, terrace or pool, and a pool's water temperature and pump
        vol.Optional("area_id"): vol.Any(None, vol.All(str, vol.Length(max=255))),
        vol.Optional("temp_entity"): vol.Any(None, vol.All(str, vol.Length(max=255))),
        vol.Optional("pump_entity"): vol.Any(None, vol.All(str, vol.Length(max=255))),
        # cut out of every area beneath it that contains it
        vol.Optional("cut", default=False): bool,
    },
    extra=vol.ALLOW_EXTRA,
)

_COORD = vol.All(vol.Coerce(float), vol.Range(min=-1000, max=1000))
_HEIGHT = vol.All(vol.Coerce(float), vol.Range(min=-50, max=200))

# one roof section of a "custom" roof: a rectangle with its own shape, ridge direction, eaves and pitches
ROOF_SECTION_SCHEMA = vol.Schema(
    {
        vol.Required("id"): _ID,
        vol.Required("x0"): _COORD,
        vol.Required("z0"): _COORD,
        vol.Required("x1"): _COORD,
        vol.Required("z1"): _COORD,
        vol.Optional("shape", default="gable"): vol.In(
            ["gable", "hip", "halfhip", "pyramid", "mansard", "pent", "flat", "parapet"]
        ),
        vol.Optional("axis", default="x"): vol.In(["x", "z"]),
        vol.Required("eave_a"): _HEIGHT,
        vol.Required("eave_b"): _HEIGHT,
        vol.Optional("pitch_a", default=35): vol.All(vol.Coerce(float), vol.Range(min=0, max=80)),
        vol.Optional("pitch_b", default=35): vol.All(vol.Coerce(float), vol.Range(min=0, max=80)),
        vol.Required("base"): _HEIGHT,
        vol.Optional("overhang", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0, max=2))),
        vol.Optional("flip", default=False): bool,
        # a flat roof as a free shape: its footprint polygon (x0 … z1 hold the bounding box)
        vol.Optional("points", default=None): vol.Any(None, vol.All([_POINT], vol.Length(min=3, max=MAX_POINTS))),
        # a dormer on the slope of another section
        vol.Optional("dormer", default=False): bool,
        vol.Optional("locked", default=False): bool,
        # a canopy (terrace roof, carport): posts instead of walls, a see-through roof
        vol.Optional("open", default=False): bool,
    },
    extra=vol.ALLOW_EXTRA,
)

# a field of solar modules on a roof face: rows x columns from its lower left corner on the face
SOLAR_FIELD_SCHEMA = vol.Schema(
    {
        vol.Required("id"): _ID,
        vol.Required("face"): vol.All(str, vol.Length(max=80)),
        vol.Required("u"): vol.All(vol.Coerce(float), vol.Range(min=-50, max=200)),
        vol.Required("v"): vol.All(vol.Coerce(float), vol.Range(min=-50, max=200)),
        vol.Required("rows"): vol.All(int, vol.Range(min=1, max=40)),
        vol.Required("cols"): vol.All(int, vol.Range(min=1, max=60)),
        vol.Optional("portrait", default=True): bool,
        # frames on flat ground (up to 45 degrees), away from a wall (up to 90: a canopy)
        vol.Optional("tilt", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0, max=90))),
        vol.Optional("flip", default=False): bool,
        # flat roofs: east-west racks (every second row turned)
        vol.Optional("rack"): vol.Any(None, vol.In(["ew"])),
        vol.Optional("entity", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        vol.Optional("name", default=None): vol.Any(None, vol.All(str, vol.Length(max=80))),
        # modules per row when the rows differ, how shorter rows sit, modules left out ("row:column")
        vol.Optional("layout", default=None): vol.Any(
            None, vol.All([vol.All(int, vol.Range(min=0, max=60))], vol.Length(max=40))
        ),
        vol.Optional("align", default=None): vol.Any(None, vol.In(["left", "center", "right"])),
        vol.Optional("skip", default=None): vol.Any(
            None, vol.All([vol.All(str, vol.Length(max=12))], vol.Length(max=2400))
        ),
        vol.Optional("look", default=None): vol.Any(None, vol.In(["black", "blue"])),
        # module size in portrait (None = 1.13 x 1.72 m) and the string the field belongs to
        vol.Optional("module_w", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0.3, max=3))),
        vol.Optional("module_h", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0.3, max=3))),
        # peak power of one module in Wp (None = 400)
        vol.Optional("wp", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=50, max=1500))),
        vol.Optional("string", default=None): vol.Any(None, _ID),
        # garden fields (face "ground"): rotation of the rows in the plan
        vol.Optional("rotation", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=-360, max=360))),
        # free-standing fields: height of the surface they stand on (a garage roof); None = the ground
        vol.Optional("base", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0, max=60))),
        vol.Optional("locked", default=False): bool,
    },
    extra=vol.ALLOW_EXTRA,
)

# a string of solar modules: fields wired together to one inverter
SOLAR_STRING_SCHEMA = vol.Schema(
    {
        vol.Required("id"): _ID,
        vol.Required("name"): vol.All(str, vol.Length(max=80)),
        vol.Optional("entity", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        vol.Optional("inverter", default=None): vol.Any(None, _ID),
    },
    extra=vol.ALLOW_EXTRA,
)

# a roof window on a roof face, with an optional blind (cover) and contacts
ROOF_WINDOW_SCHEMA = vol.Schema(
    {
        vol.Required("id"): _ID,
        vol.Required("face"): vol.All(str, vol.Length(max=80)),
        vol.Required("u"): vol.All(vol.Coerce(float), vol.Range(min=-50, max=200)),
        vol.Required("v"): vol.All(vol.Coerce(float), vol.Range(min=-50, max=200)),
        vol.Optional("w", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0.3, max=4))),
        vol.Optional("h", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0.3, max=4))),
        vol.Optional("cover", default=None): _ENTITY_REF,
        vol.Optional("contact", default=None): _ENTITY_REF,
        vol.Optional("tilt", default=None): _ENTITY_REF,
        # a window motor: a cover whose position opens the sash that far
        vol.Optional("window", default=None): _ENTITY_REF,
        vol.Optional("name", default=None): vol.Any(None, vol.All(str, vol.Length(max=64))),
        vol.Optional("locked", default=False): bool,
    },
    extra=vol.ALLOW_EXTRA,
)

ROOF_SCHEMA = vol.Schema(
    {
        vol.Optional("type", default="none"): vol.In(["none", "flat", "gable", "custom"]),
        # roof sections of a "custom" roof
        vol.Optional("sections", default=list): vol.All([ROOF_SECTION_SCHEMA], vol.Length(max=64)),
        # solar fields on the roof faces
        vol.Optional("solar", default=list): vol.All([SOLAR_FIELD_SCHEMA], vol.Length(max=32)),
        vol.Optional("strings", default=list): vol.All([SOLAR_STRING_SCHEMA], vol.Length(max=16)),
        vol.Optional("windows", default=list): vol.All([ROOF_WINDOW_SCHEMA], vol.Length(max=32)),
        vol.Optional("pitch", default=35): vol.All(vol.Coerce(float), vol.Range(min=5, max=60)),
        vol.Optional("overhang", default=0.4): vol.All(vol.Coerce(float), vol.Range(min=0, max=2)),
        # gable roof: ridge along the long side (None) or along the short side (terraced houses)
        vol.Optional("ridge", default=None): vol.Any(None, vol.In(["long", "short"])),
    },
    extra=vol.ALLOW_EXTRA,
)

FREE_WALL_SCHEMA = vol.Schema(
    {
        vol.Required("id"): _ID,
        vol.Required("a"): _POINT,
        vol.Required("b"): _POINT,
        vol.Optional("thickness", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0.02, max=1))),
        vol.Optional("height", default=None): vol.Any(None, vol.All(vol.Coerce(float), vol.Range(min=0.05, max=20))),
    },
    extra=vol.ALLOW_EXTRA,
)

FLOOR_SCHEMA = vol.Schema(
    {
        vol.Required("id"): _ID,
        vol.Required("name"): _NAME,
        vol.Required("elevation"): vol.All(vol.Coerce(float), vol.Range(min=-100, max=500)),
        vol.Required("height"): vol.All(vol.Coerce(float), vol.Range(min=1, max=20)),
        vol.Required("cut_height"): vol.All(vol.Coerce(float), vol.Range(min=0.2, max=20)),
        vol.Required("rooms"): vol.All([ROOM_SCHEMA], vol.Length(max=MAX_ROOMS)),
        vol.Required("openings"): vol.All([OPENING_SCHEMA], vol.Length(max=MAX_ITEMS)),
        vol.Required("furniture"): vol.All([FURNITURE_SCHEMA], vol.Length(max=MAX_ITEMS)),
        vol.Required("placements"): vol.All([PLACEMENT_SCHEMA], vol.Length(max=MAX_ITEMS)),
        vol.Required("background"): vol.Any(None, BACKGROUND_SCHEMA),
        # a layer rather than a storey (the trees, the decoration), shown or hidden with an eye
        vol.Optional("layer"): bool,
        # notes pinned to a spot of the floor, with an optional day they are due on
        vol.Optional("notes", default=list): vol.All(
            [
                vol.Schema(
                    {
                        vol.Required("id"): vol.All(str, vol.Length(min=1, max=64)),
                        vol.Required("x"): vol.Coerce(float),
                        vol.Required("z"): vol.Coerce(float),
                        vol.Required("text"): vol.All(str, vol.Length(max=500)),
                        vol.Optional("due", default=None): vol.Any(None, vol.Match(r"^\d{4}-\d{2}-\d{2}$")),
                    }
                )
            ],
            vol.Length(max=MAX_ITEMS),
        ),
        # the floor's own meter: a power sensor shown on the floor label and the house card of this floor
        vol.Optional("power_entity", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        vol.Optional("outdoor", default=list): vol.All([OUTDOOR_SCHEMA], vol.Length(max=MAX_ITEMS)),
        # free-standing walls (partitions); room walls come from the room edges
        vol.Optional("walls", default=list): vol.All([FREE_WALL_SCHEMA], vol.Length(max=MAX_ITEMS)),
        # floor of Home Assistant's floor registry this floor stands for
        vol.Optional("ha_floor", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        # the camera this floor opens with (None = the house view's side)
        vol.Optional("start_view", default=None): vol.Any(None, START_VIEW_SCHEMA),
    },
    extra=vol.ALLOW_EXTRA,
)

# two places, each known in the plan (metres) and in a robot's map grid, tie the grid to the plan
_COORD = vol.All(vol.Coerce(float), vol.Range(min=-100000, max=100000))
_POINT = vol.All([_COORD], vol.Length(min=2, max=2))
VACUUM_MAP_SCHEMA = vol.Schema(
    {
        vol.Required("a"): _POINT,
        vol.Required("ga"): _POINT,
        vol.Required("b"): _POINT,
        vol.Required("gb"): _POINT,
        # the robot's grid runs the other way round than the plan does (its y grows along plan -z)
        vol.Optional("mirror", default=False): bool,
    },
    extra=vol.PREVENT_EXTRA,
)

# a real map under the plan (tiles loaded by the browser): where the plan's anchor point lies on Earth
MAP_SCHEMA = vol.Schema(
    {
        vol.Required("on"): bool,
        vol.Required("lat"): vol.All(vol.Coerce(float), vol.Range(min=-85, max=85)),
        vol.Required("lon"): vol.All(vol.Coerce(float), vol.Range(min=-180, max=180)),
        # the plan point (metres) that lies at lat / lon
        vol.Optional("x", default=0): vol.All(vol.Coerce(float), vol.Range(min=-100000, max=100000)),
        vol.Optional("z", default=0): vol.All(vol.Coerce(float), vol.Range(min=-100000, max=100000)),
        vol.Optional("opacity", default=0.5): vol.All(vol.Coerce(float), vol.Range(min=0.05, max=1)),
        vol.Optional("zoom", default=18): vol.All(vol.Coerce(int), vol.Range(min=15, max=19)),
        # None = OpenStreetMap; else a tile address with {z}, {x} and {y}
        vol.Optional("url", default=None): vol.Any(None, vol.All(str, vol.Length(max=300), vol.Match(r"^https://"))),
    },
    extra=vol.ALLOW_EXTRA,
)

PLUGIN_SCHEMA = vol.Schema(
    {
        # Home Assistant's www folder, HACS or HTTPS; a JavaScript module
        vol.Required("url"): vol.All(
            str,
            vol.Length(max=300),
            vol.Match(re.compile(r"^(https://|/local/|/hacsfiles/)\S+\.m?js(\?\S*)?$", re.IGNORECASE)),
        ),
        vol.Required("enabled"): bool,
        # set for plugins installed from the plugin store (id and version of the entry, SHA-256 of the file)
        vol.Optional("id"): vol.All(str, vol.Length(max=64)),
        vol.Optional("version"): vol.All(str, vol.Length(max=40)),
        vol.Optional("sha256"): vol.All(str, vol.Match(re.compile(r"^[0-9a-f]{64}$"))),
    },
    extra=vol.PREVENT_EXTRA,
)

SETTINGS_SCHEMA = vol.Schema(
    {
        vol.Required("wall_exterior"): vol.All(vol.Coerce(float), vol.Range(min=0.02, max=1)),
        vol.Required("wall_interior"): vol.All(vol.Coerce(float), vol.Range(min=0.02, max=1)),
        vol.Required("grid"): vol.All(vol.Coerce(float), vol.Range(min=0.01, max=1)),
        # direction of north in the plan, degrees clockwise from "up"
        vol.Optional("north", default=0): vol.All(vol.Coerce(float), vol.Range(min=-360, max=360)),
        vol.Optional("map", default=None): vol.Any(None, MAP_SCHEMA),
        # a robot vacuum's own map on the plan (live/vacuum-map.ts)
        vol.Optional("vacuum_map", default=None): vol.Any(None, VACUUM_MAP_SCHEMA),
        # plugin modules the panel and the card import (docs/plugins.md); no default, so plans stay as stored
        vol.Optional("plugins"): vol.All([PLUGIN_SCHEMA], vol.Length(max=20)),
        # plan lock: rooms, walls, doors, windows and outdoor areas cannot be moved by accident
        vol.Optional("lock_plan", default=False): bool,
        # stations and playlists for the speakers' quick menu (media_player.play_media type + content id)
        vol.Optional("media_presets", default=list): vol.All(
            [
                vol.Schema(
                    {
                        vol.Required("id"): vol.All(str, vol.Length(min=1, max=64)),
                        vol.Required("label"): vol.All(str, vol.Length(max=60)),
                        vol.Required("type"): vol.All(str, vol.Length(max=40)),
                        vol.Required("content"): vol.All(str, vol.Length(max=500)),
                        # the speakers it is offered on (empty = every speaker)
                        vol.Optional("speakers"): vol.All([vol.All(str, vol.Length(max=255))], vol.Length(max=30)),
                    },
                    extra=vol.ALLOW_EXTRA,
                )
            ],
            vol.Length(max=30),
        ),
        # own buttons in the central menu: navigate, more-info, a service or a DOM event (browser_mod popup)
        vol.Optional("buttons", default=list): vol.All(
            [
                vol.Schema(
                    {
                        vol.Required("id"): vol.All(str, vol.Length(min=1, max=64)),
                        vol.Required("label"): vol.All(str, vol.Length(max=60)),
                        vol.Optional("icon", default=None): vol.Any(None, vol.All(str, vol.Length(max=64))),
                        vol.Required("action"): vol.In(["navigate", "more_info", "service", "fire_dom_event"]),
                        vol.Optional("target", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
                        vol.Optional("data", default=None): vol.Any(None, dict),
                        # the entity whose state lights the button up while it is on
                        vol.Optional("state_entity"): vol.Any(None, vol.All(str, vol.Length(max=255))),
                    },
                    extra=vol.ALLOW_EXTRA,
                )
            ],
            vol.Length(max=20),
        ),
        # own warnings: a line in the warning bar while an entity is in a state
        vol.Optional("own_alerts"): vol.Any(
            None,
            vol.All(
                [
                    vol.Schema(
                        {
                            vol.Required("id"): vol.All(str, vol.Length(min=1, max=64)),
                            vol.Required("entity"): vol.All(str, vol.Length(max=255)),
                            vol.Optional("state"): vol.Any(None, vol.All(str, vol.Length(max=120))),
                            vol.Required("text"): vol.All(str, vol.Length(max=120)),
                            vol.Optional("room_id"): vol.Any(None, vol.All(str, vol.Length(max=64))),
                            vol.Optional("color"): vol.Any(None, vol.Match(r"^#[0-9a-fA-F]{6}$")),
                            vol.Optional("tap"): vol.Any(None, vol.In(["toggle", "room"])),
                        }
                    )
                ],
                vol.Length(max=40),
            ),
        ),
        # the fuse box: circuits with the rooms they feed
        vol.Optional("circuits"): vol.Any(
            None,
            vol.All(
                [
                    vol.Schema(
                        {
                            vol.Required("id"): vol.All(str, vol.Length(min=1, max=64)),
                            vol.Required("name"): vol.All(str, vol.Length(max=80)),
                            vol.Optional("rooms", default=list): vol.All(
                                [vol.All(str, vol.Length(max=64))], vol.Length(max=60)
                            ),
                        }
                    )
                ],
                vol.Length(max=120),
            ),
        ),
        # calendars whose appointments of the day show on the "Today" card
        vol.Optional("calendars"): vol.Any(None, vol.All([vol.All(str, vol.Length(max=255))], vol.Length(max=12))),
        # favourites of the house in the central menu of the 3D view (scenes, scripts, switches …)
        vol.Optional("favorites", default=list): vol.All([vol.All(str, vol.Length(max=255))], vol.Length(max=40)),
        # the camera the house view opens with (None = fitted from the front left)
        vol.Optional("start_view", default=None): vol.Any(None, START_VIEW_SCHEMA),
        vol.Optional("roof", default=lambda: {"type": "none", "pitch": 35, "overhang": 0.4}): ROOF_SCHEMA,
        # the weather entity for the weather outside (None = the first one)
        vol.Optional("weather_entity", default=None): vol.Any(None, vol.All(str, vol.Length(max=255))),
        # which weather effects the 3D view shows (None = all but fog)
        # warning for a window open while it rains
        vol.Optional("rain_warning", default=True): bool,
        # warning for a door or window contact that has been unavailable for 10 minutes (off unless set)
        vol.Optional("contact_warning"): bool,
        # a note at night (22:00 to 6:00) for the plan's door locks that stand unlocked
        vol.Optional("night_lock_warning"): bool,
        # motion, occupancy and presence sensors show their marker only while they detect something
        vol.Optional("motion_markers_active"): bool,
        # what a double tap on a room switches (None = the plan's lamps and every light of the area)
        vol.Optional("room_double_tap"): vol.Any(None, vol.In(["plan", "off"])),
        # own sensors shown at the top of the 3D view
        vol.Optional("status_entities"): vol.Any(
            None, vol.All([vol.All(str, vol.Length(max=255))], vol.Length(max=12))
        ),
        # announcements: the text-to-speech entity and the sentences offered in a room (None = the default ones)
        vol.Optional("announce_tts"): _ENTITY_REF,
        vol.Optional("announce_phrases"): vol.Any(
            None, vol.All([vol.All(str, vol.Length(min=1, max=200))], vol.Length(max=30))
        ),
        # sunlight through the windows as patches on the floor
        vol.Optional("sun_patches", default=True): bool,
        vol.Optional("weather_effects", default=None): vol.Any(
            None, [vol.In(["rain", "snow", "fog", "clouds", "lightning", "sky"])]
        ),
    },
    extra=vol.ALLOW_EXTRA,
)

_ENTITY = vol.Any(None, vol.All(str, vol.Length(max=255)))

METER_SCHEMA = vol.Schema(
    {vol.Required("floor_id"): _ID, vol.Required("x"): _COORD, vol.Required("z"): _COORD}, extra=vol.ALLOW_EXTRA
)

ENERGY_DEFAULTS = {
    "meter": None,
    "grid": None,
    "grid_invert": False,
    "solar": None,
    "battery": None,
    "battery_invert": False,
    "battery_soc": None,
    "consumption": None,
    "tariff": None,
}

ROUTE_POINT_SCHEMA = vol.Schema(
    {vol.Required("floor_id"): _ID, vol.Required("x"): _COORD, vol.Required("z"): _COORD}, extra=vol.ALLOW_EXTRA
)

ROUTE_SCHEMA = vol.Schema(
    {
        vol.Required("key"): vol.All(str, vol.Length(min=1, max=128)),
        vol.Required("points"): vol.All([ROUTE_POINT_SCHEMA], vol.Length(max=30)),
        vol.Optional("cable"): bool,
    },
    extra=vol.ALLOW_EXTRA,
)

# Power sensors in watts: grid positive = import, battery positive = discharging (both can be inverted)
ENERGY_SCHEMA = vol.Schema(
    {
        vol.Optional("meter", default=None): vol.Any(None, METER_SCHEMA),
        vol.Optional("grid", default=None): _ENTITY,
        vol.Optional("grid_invert", default=False): bool,
        vol.Optional("solar", default=None): _ENTITY,
        vol.Optional("battery", default=None): _ENTITY,
        vol.Optional("battery_invert", default=False): bool,
        vol.Optional("battery_soc", default=None): _ENTITY,
        vol.Optional("consumption", default=None): _ENTITY,
        vol.Optional("tariff", default=None): _ENTITY,
        # gas and water meters shown with the house's balance
        vol.Optional("gas"): _ENTITY,
        vol.Optional("water"): _ENTITY,
        # meters can hang off other meters (sub-meters); no default, so older plans stay as they are
        vol.Optional("advanced"): bool,
        # a sub-meter's label also shows what no placed device measures
        vol.Optional("show_unmetered"): bool,
        # where the cable of an energy connection runs (the flow follows it instead of an arc)
        vol.Optional("routes"): vol.All([ROUTE_SCHEMA], vol.Length(max=100)),
    },
    extra=vol.ALLOW_EXTRA,
)

# Which sensor tells the room of a person (ESPresense, Bermuda: the state is a room or area name)
PRESENCE_SCHEMA = vol.Schema(
    {vol.Required("person"): vol.All(str, vol.Length(max=255)), vol.Required("sensor"): _ENTITY},
    extra=vol.ALLOW_EXTRA,
)

BUILDING_SCHEMA = vol.Schema(
    {
        vol.Required("version"): 1,
        vol.Required("floors"): vol.All([FLOOR_SCHEMA], vol.Length(max=MAX_FLOORS)),
        vol.Required("settings"): SETTINGS_SCHEMA,
        vol.Optional("energy", default=lambda: dict(ENERGY_DEFAULTS)): ENERGY_SCHEMA,
        vol.Optional("presence", default=list): vol.All([PRESENCE_SCHEMA], vol.Length(max=50)),
    },
    extra=vol.ALLOW_EXTRA,
)

IMAGE_DATA = vol.All(
    str,
    vol.Length(max=MAX_IMAGE_CHARS),
    vol.Match(r"^data:image/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$"),
)


def empty_building() -> dict:
    """Return a building without floors."""
    return {
        "version": 1,
        "floors": [],
        "settings": {"wall_exterior": 0.24, "wall_interior": 0.12, "grid": 0.05},
        "energy": dict(ENERGY_DEFAULTS),
        "presence": [],
    }


def image_ids(building: dict) -> set[str]:
    """Return the ids of all images a building refers to: floor backgrounds and screen pictures."""
    ids = {floor["background"]["image_id"] for floor in building.get("floors", []) if floor.get("background")}
    for floor in building.get("floors", []):
        for item in floor.get("furniture", []):
            for rule in item.get("pictures") or []:
                # a URL or a camera ("camera:<entity>") is no stored image
                if not rule["image"].startswith(("http://", "https://", "camera:")):
                    ids.add(rule["image"])
            # a picture frame's own photo stored with the plan
            picture = item.get("picture") or ""
            if picture.startswith("image:"):
                ids.add(picture[len("image:") :])
    return ids
