"""Furniture packs: JSON files with furniture models built from boxes, cylinders and lofts.

A pack is plain JSON (format, id, name, publisher, items). The packs that come with the integration
(packs/*.json) are always there, and anyone can import their own.
"""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any

import voluptuous as vol

PACK_FORMAT = "nfpack"
PACK_VERSION = 1
# largest pack file accepted (characters of JSON)
MAX_PACK_SIZE = 1_000_000

_ID = vol.All(str, vol.Match(r"^[a-z0-9][a-z0-9_.-]{0,39}$"))
_TEXT = vol.All(str, vol.Length(min=1, max=80))
# a colour: "#rrggbb" or a role of the built-in palette (so packs follow the look of the plan)
_COLOR = vol.Any(
    vol.Match(r"^#[0-9a-fA-F]{6}$"),
    vol.In(["body", "fabric", "cushion", "wood", "white", "metal", "dark", "glass", "plant", "pot", "accent"]),
)
_FRACTION = vol.All(vol.Coerce(float), vol.Range(min=-0.5, max=0.5))
_SPAN = vol.All(vol.Coerce(float), vol.Range(min=0.001, max=1))
_LEVEL = vol.All(vol.Coerce(float), vol.Range(min=0, max=1))
_METRES = vol.All(vol.Coerce(float), vol.Range(min=0.01, max=10))

# Parts in fractions of the item's size: x/z centre (-0.5..0.5, front at +z), w/d extent, y/h bottom
# and height of the item height. A cylinder's diameter is the smaller of w and d.
PART_SCHEMA = vol.Schema(
    {
        vol.Required("shape"): vol.In(["box", "cyl", "loft"]),
        vol.Required("x"): _FRACTION,
        vol.Required("z"): _FRACTION,
        vol.Required("w"): _SPAN,
        vol.Required("d"): _SPAN,
        vol.Required("y"): _LEVEL,
        vol.Required("h"): _SPAN,
        vol.Required("color"): _COLOR,
        vol.Optional("top"): _COLOR,
        # outline: True (soft blue), "glow" (cyan like the walls) or "faint"
        vol.Optional("edges", default=False): vol.Any(bool, vol.In(["glow", "faint"])),
        # lamps: the part shines in the colour and brightness of the linked light
        vol.Optional("glow", default=False): bool,
        # a screen (TV, monitor): shows the linked media player's app colour and picture on its front (+z)
        vol.Optional("screen", default=False): bool,
        # loft: centre and extent of the top rectangle (default: the same as the bottom)
        vol.Optional("tx"): _FRACTION,
        vol.Optional("tz"): _FRACTION,
        vol.Optional("tw"): _SPAN,
        vol.Optional("td"): _SPAN,
        # cylinder axis: upright (default) or lying along x or z (wheels, rollers)
        vol.Optional("axis"): vol.In(["x", "y", "z"]),
        # turn of the part around its own centre (degrees around the vertical axis): spiral steps, diagonals
        vol.Optional("rot"): vol.All(vol.Coerce(float), vol.Range(min=-360, max=360)),
    }
)

# Plan symbol in the same fractions (optional: without it the parts are drawn from above).
SYMBOL_SCHEMA = vol.Any(
    vol.Schema(
        {
            vol.Required("shape"): "rect",
            "x": _FRACTION,
            "z": _FRACTION,
            "w": _SPAN,
            "d": _SPAN,
            vol.Optional("fill", default=False): bool,
        }
    ),
    vol.Schema({vol.Required("shape"): "circle", "x": _FRACTION, "z": _FRACTION, "r": _SPAN}),
    vol.Schema({vol.Required("shape"): "line", "x1": _FRACTION, "z1": _FRACTION, "x2": _FRACTION, "z2": _FRACTION}),
)

ITEM_SCHEMA = vol.Schema(
    {
        vol.Required("id"): _ID,
        # names by language ("de", "en", …); "en" or the first one is the fallback
        vol.Required("name"): vol.All({vol.All(str, vol.Length(min=2, max=5)): _TEXT}, vol.Length(min=1, max=10)),
        vol.Required("size"): vol.All([_METRES], vol.Length(min=3, max=3)),
        vol.Optional("electric", default=False): bool,
        # where it stands: on the floor, on the furniture below it, on a wall (bottom at wall_y) or
        # hanging from the ceiling
        vol.Optional("mount", default="floor"): vol.In(["floor", "surface", "wall", "ceiling"]),
        vol.Optional("wall_y", default=1.0): vol.All(vol.Coerce(float), vol.Range(min=0, max=3)),
        # its top carries other items (like a table or a worktop)
        vol.Optional("surface", default=False): bool,
        # a vehicle: offered for parking spots
        vol.Optional("vehicle", default=False): bool,
        # stairs: when it reaches the floor above, it cuts a stairwell opening into that floor
        vol.Optional("hole", default=False): bool,
        # a lamp: how its light spreads (like the built-in lamp of that kind)
        vol.Optional("light"): vol.In(
            [
                "ceiling",
                "downlight",
                "spot",
                "panel",
                "pendant",
                "floor",
                "uplight",
                "table",
                "wall",
                "strip",
                "bollard",
                "garden",
            ]
        ),
        vol.Required("parts"): vol.All([PART_SCHEMA], vol.Length(min=1, max=60)),
        vol.Optional("symbol"): vol.All([SYMBOL_SCHEMA], vol.Length(max=40)),
    }
)

PAYLOAD_SCHEMA = vol.Schema(
    {
        vol.Required("format"): PACK_FORMAT,
        vol.Required("version"): PACK_VERSION,
        vol.Required("id"): _ID,
        vol.Required("name"): _TEXT,
        vol.Required("publisher"): _TEXT,
        # release number of the pack (a newer release of the same id replaces an installed one)
        vol.Optional("release", default=1): vol.All(int, vol.Range(min=1, max=100000)),
        vol.Optional("description", default=""): vol.All(str, vol.Length(max=400)),
        vol.Required("items"): vol.All([ITEM_SCHEMA], vol.Length(min=1, max=200)),
    }
)


class PackError(Exception):
    """A pack that cannot be imported; `code` says why."""

    def __init__(self, code: str, detail: str = "") -> None:
        """Keep the reason."""
        super().__init__(f"{code}: {detail}" if detail else code)
        self.code = code
        self.detail = detail


def validate_payload(payload: Any) -> dict[str, Any]:
    """Check the content of a pack; raises PackError."""
    try:
        clean = PAYLOAD_SCHEMA(payload)
    except vol.Invalid as err:
        # a value this version does not know yet (a new item kind of a newer pack release)
        if "value must be one of" in str(err):
            raise PackError("needs_update", str(err)) from err
        raise PackError("invalid_content", str(err)) from err
    ids = [item["id"] for item in clean["items"]]
    if len(ids) != len(set(ids)):
        raise PackError("invalid_content", "item ids must be unique")
    return clean


def parse_pack(text: str) -> dict[str, Any]:
    """Parse a pack file and return its checked content."""
    if len(text) > MAX_PACK_SIZE:
        raise PackError("too_large")
    try:
        data = json.loads(text)
    except ValueError as err:
        raise PackError("not_a_pack", "not JSON") from err
    if not isinstance(data, dict) or data.get("format") != PACK_FORMAT:
        raise PackError("not_a_pack")
    return validate_payload(data)


BUILTIN_DIR = Path(__file__).parent / "packs"


def load_builtin_packs() -> list[dict[str, Any]]:
    """The packs that come with the integration (blocking: run in the executor)."""
    packs = []
    for file in sorted(BUILTIN_DIR.glob("*.json")):
        pack = parse_pack(file.read_text(encoding="utf-8"))
        packs.append({**pack, "builtin": True})
    return packs
