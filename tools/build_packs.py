"""Builds the furniture packs that come with NextFloor (custom_components/nextfloor/packs/*.json).

Format: docs/packs.md.

Every item is made of boxes, cylinders and lofts. All measures of a part are fractions of the item's size:
x/z centre (-0.5..0.5, front is +z), w/d width/depth (0..1), y bottom and h height (0..1 of the item's height).
Colours: "#rrggbb" or a role of the built-in palette
(body, fabric, cushion, wood, white, metal, dark, glass, plant, pot, accent).

Run: python3 tools/build_packs.py
"""

import json
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "custom_components" / "nextfloor" / "packs"


def _part(shape, x, z, w, d, y, h, color, kw):
    """A part, held inside the ranges the pack schema allows (centre -0.5..0.5, extent up to 1, bottom 0..1)."""
    clamp = lambda v, lo, hi: round(min(hi, max(lo, v)), 4)  # noqa: E731
    p = {
        "shape": shape,
        "x": clamp(x, -0.5, 0.5),
        "z": clamp(z, -0.5, 0.5),
        "w": clamp(w, 0.001, 1),
        "d": clamp(d, 0.001, 1),
        "y": clamp(y, 0, 1),
        "h": clamp(h, 0.001, 1),
        "color": color,
    }
    for k, v in kw.items():
        p[k] = clamp(v, -0.5, 0.5) if k in ("tx", "tz") else clamp(v, 0.001, 1) if k in ("tw", "td") else v
    return p


def B(x, z, w, d, y, h, color="body", **kw):
    return _part("box", x, z, w, d, y, h, color, kw)


def C(x, z, w, d, y, h, color="metal", **kw):
    return _part("cyl", x, z, w, d, y, h, color, kw)


def L(x, z, w, d, y, h, color="body", **kw):
    return _part("loft", x, z, w, d, y, h, color, kw)


def item(id, de, en, size, parts, **kw):
    assert len(parts) <= 60, id
    return {"id": id, "name": {"de": de, "en": en}, "size": size, "parts": parts, **kw}


def legs4(inset=0.06, size=0.06, h=1.0, y=0.0, color="metal"):
    p = 0.5 - inset
    return [B(sx * p, sz * p, size, size, y, h, color) for sx in (-1, 1) for sz in (-1, 1)]


PACKS = []


def pack(id, name, desc, items):
    PACKS.append(
        {
            "format": "nfpack",
            "version": 1,
            "id": id,
            "name": name,
            "publisher": "NextFloor",
            "description": desc,
            "release": 1,
            "items": items,
        }
    )


# ------------------------------------------------------------------ Wohnen & Haustiere
pack(
    "nextfloor.wohnen",
    "Wohnen & Haustiere",
    "Ecksofa, Kamin, Bücherwand, Klavier, Aquarium und Sachen für Katze und Hund",
    [
        item(
            "corner_sofa",
            "Ecksofa (L-Form)",
            "Corner sofa (L-shaped)",
            [2.8, 2.0, 0.85],
            [
                B(0, -0.32, 1, 0.36, 0, 0.45, "fabric", edges=True),
                B(0, -0.43, 1, 0.14, 0.45, 0.55, "fabric"),
                B(0.32, 0.16, 0.36, 0.6, 0, 0.45, "fabric", edges=True),
                B(0.46, 0.16, 0.08, 0.6, 0.45, 0.4, "fabric"),
                B(-0.47, -0.32, 0.06, 0.36, 0.45, 0.3, "fabric"),
                *[B(x, -0.27, 0.3, 0.24, 0.45, 0.1, "cushion") for x in (-0.33, 0, 0.33)],
                B(0.3, 0.14, 0.3, 0.5, 0.45, 0.1, "cushion"),
            ],
        ),
        item(
            "bean_bag",
            "Sitzsack",
            "Bean bag",
            [0.8, 0.8, 0.6],
            [
                C(0, 0, 1, 1, 0, 0.5, "fabric", edges="faint"),
                L(0, -0.1, 0.9, 0.7, 0.5, 0.5, "fabric", tw=0.5, td=0.3, tz=-0.25),
            ],
        ),
        item(
            "fireplace",
            "Kamin",
            "Fireplace",
            [1.2, 0.5, 1.1],
            [
                B(0, 0, 1, 1, 0, 0.12, "#3a3f4a"),
                B(-0.4, 0, 0.2, 1, 0.12, 0.6, "#3a3f4a"),
                B(0.4, 0, 0.2, 1, 0.12, 0.6, "#3a3f4a"),
                B(0, 0, 1, 1, 0.72, 0.08, "wood"),
                B(0, -0.3, 0.6, 0.4, 0.12, 0.6, "dark"),
                B(0, 0.1, 0.5, 0.3, 0.14, 0.25, "#ff7a1a", glow=True),
                L(0, -0.1, 0.5, 0.6, 0.8, 0.2, "#3a3f4a", tw=0.2, td=0.3),
            ],
            electric=True,
            light="floor",
        ),
        item(
            "bookcase_wall",
            "Bücherwand",
            "Wall bookcase",
            [2.4, 0.35, 2.2],
            [
                B(0, 0, 1, 1, 0, 1, "wood", edges="faint"),
                *[B(0, 0.05, 0.96, 0.9, y, 0.02, "body") for y in (0.2, 0.4, 0.6, 0.8)],
                *[
                    B(x, 0.1, 0.12, 0.7, y + 0.03, 0.14, c)
                    for y in (0.0, 0.2, 0.4, 0.6, 0.8)
                    for x, c in ((-0.35, "accent"), (-0.05, "#b5523b"), (0.25, "#3b7bb5"))
                ],
            ],
        ),
        item(
            "piano",
            "Klavier",
            "Upright piano",
            [1.5, 0.6, 1.25],
            [
                B(0, -0.15, 1, 0.7, 0, 1, "dark", edges=True),
                B(0, 0.3, 1, 0.4, 0.55, 0.08, "dark"),
                B(0, 0.38, 0.9, 0.22, 0.6, 0.04, "white"),
                *[B(x, 0.42, 0.04, 0.12, 0.64, 0.02, "dark") for x in (-0.36, -0.24, -0.12, 0.0, 0.12, 0.24, 0.36)],
                B(-0.47, 0.3, 0.06, 0.4, 0, 0.55, "dark"),
                B(0.47, 0.3, 0.06, 0.4, 0, 0.55, "dark"),
            ],
        ),
        item(
            "aquarium",
            "Aquarium",
            "Aquarium",
            [1.2, 0.45, 1.3],
            [
                B(0, 0, 1, 1, 0, 0.55, "wood"),
                B(0, 0, 1, 1, 0.55, 0.4, "glass", edges="glow"),
                B(0, 0, 0.96, 0.9, 0.56, 0.32, "#1f6fa8", glow=True),
                B(0, 0, 1, 1, 0.95, 0.05, "dark"),
                C(-0.25, 0.1, 0.12, 0.3, 0.56, 0.2, "plant"),
                C(0.2, -0.1, 0.1, 0.25, 0.56, 0.28, "plant"),
            ],
            electric=True,
            light="table",
        ),
        item(
            "cat_tree",
            "Kratzbaum",
            "Cat tree",
            [0.7, 0.6, 1.6],
            [
                B(0, 0, 1, 1, 0, 0.05, "fabric"),
                C(-0.25, 0, 0.18, 0.2, 0.05, 0.9, "#c9a77a"),
                C(0.25, 0.1, 0.18, 0.2, 0.05, 0.55, "#c9a77a"),
                B(0.2, 0.05, 0.6, 0.7, 0.55, 0.05, "fabric"),
                B(-0.2, -0.05, 0.7, 0.8, 0.95, 0.05, "fabric"),
                B(-0.2, 0.0, 0.6, 0.6, 0.62, 0.2, "fabric", edges="faint"),
                C(0, 0, 0.12, 0.14, 0.95, 0.05, "fabric"),
            ],
        ),
        item(
            "dog_bed",
            "Hundekorb",
            "Dog bed",
            [0.9, 0.7, 0.25],
            [
                B(0, 0, 1, 1, 0, 0.35, "fabric", edges="faint"),
                B(0, -0.42, 1, 0.16, 0.35, 0.65, "fabric"),
                B(-0.44, 0, 0.12, 1, 0.35, 0.45, "fabric"),
                B(0.44, 0, 0.12, 1, 0.35, 0.45, "fabric"),
                B(0, 0.08, 0.75, 0.7, 0.35, 0.15, "cushion"),
            ],
        ),
        item(
            "hanging_chair",
            "Hängesessel",
            "Hanging chair",
            [0.9, 0.9, 1.9],
            [
                C(0, 0, 0.9, 0.9, 0.12, 0.38, "#c9a77a", edges="faint"),
                C(0, 0, 0.75, 0.75, 0.3, 0.05, "cushion"),
                C(0, 0, 0.05, 0.05, 0.5, 0.5, "metal"),
                C(0, 0, 1, 1, 0, 0.03, "metal"),
                C(0.4, 0, 0.06, 0.06, 0, 1, "metal"),
                B(0.2, 0, 0.45, 0.04, 0.97, 0.03, "metal"),
            ],
        ),
        item(
            "display_cabinet",
            "Vitrine",
            "Display cabinet",
            [0.9, 0.4, 1.8],
            [
                B(0, 0, 1, 1, 0, 0.08, "wood"),
                B(0, 0, 1, 1, 0.08, 0.88, "glass", edges=True),
                B(0, 0, 1, 1, 0.96, 0.04, "wood"),
                *[B(0, 0, 0.94, 0.9, y, 0.015, "glass") for y in (0.3, 0.52, 0.74)],
                B(0, 0, 0.9, 0.85, 0.94, 0.02, "#ffe7b0", glow=True),
            ],
            electric=True,
            light="table",
        ),
        item(
            "high_table",
            "Stehtisch",
            "Bar table",
            [0.7, 0.7, 1.1],
            [
                C(0, 0, 1, 1, 0.96, 0.04, "wood", edges="faint"),
                C(0, 0, 0.08, 0.08, 0.04, 0.92, "metal"),
                C(0, 0, 0.5, 0.5, 0, 0.04, "metal"),
            ],
            surface=True,
        ),
        item(
            "floor_mirror",
            "Standspiegel",
            "Floor mirror",
            [0.6, 0.06, 1.8],
            [
                B(0, 0, 1, 1, 0, 1, "wood"),
                B(0, 0.2, 0.86, 0.6, 0.03, 0.94, "#c8dcec"),
            ],
        ),
    ],
)

# ------------------------------------------------------------------ Heimkino & Gaming
pack(
    "nextfloor.kino",
    "Heimkino & Gaming",
    "Leinwand, Beamer, Lautsprecher, Gaming-Platz und Arcade-Automat",
    [
        item(
            "projection_screen",
            "Leinwand",
            "Projection screen",
            [2.6, 0.12, 1.6],
            [
                B(0, 0, 1, 1, 0.94, 0.06, "dark"),
                B(0, 0.1, 0.96, 0.4, 0.05, 0.88, "white", screen=True),
            ],
            mount="wall",
            wall_y=0.6,
            electric=True,
        ),
        item(
            "projector",
            "Beamer",
            "Projector",
            [0.4, 0.35, 0.15],
            [
                B(0, 0, 1, 1, 0.1, 0.9, "white", edges=True),
                C(0.2, 0.5, 0.3, 0.1, 0.25, 0.5, "dark", axis="z"),
                C(0, -0.1, 0.1, 0.1, 0.9, 0.1, "metal"),
            ],
            mount="ceiling",
            electric=True,
        ),
        item(
            "floor_speaker",
            "Standlautsprecher",
            "Floor speaker",
            [0.25, 0.32, 1.05],
            [
                B(0, 0, 1, 1, 0.04, 0.96, "dark", edges=True),
                C(0, 0.5, 0.6, 0.06, 0.12, 0.2, "#2b3446", axis="z"),
                C(0, 0.5, 0.6, 0.06, 0.38, 0.2, "#2b3446", axis="z"),
                C(0, 0.5, 0.3, 0.06, 0.75, 0.1, "metal", axis="z"),
                *legs4(0.08, 0.1, 0.04, 0, "metal"),
            ],
            electric=True,
        ),
        item(
            "subwoofer",
            "Subwoofer",
            "Subwoofer",
            [0.4, 0.4, 0.42],
            [
                B(0, 0, 1, 1, 0, 1, "dark", edges=True),
                C(0, 0.5, 0.75, 0.05, 0.15, 0.7, "#2b3446", axis="z"),
            ],
            electric=True,
        ),
        item(
            "soundbar",
            "Soundbar",
            "Soundbar",
            [1.0, 0.12, 0.07],
            [
                B(0, 0, 1, 1, 0, 1, "dark", edges="faint"),
                B(0, 0.5, 0.96, 0.05, 0.15, 0.7, "#2b3446"),
            ],
            mount="surface",
            electric=True,
        ),
        item(
            "gaming_desk",
            "Gaming-Platz",
            "Gaming desk",
            [1.6, 0.8, 1.25],
            [
                B(0, 0, 1, 1, 0.56, 0.03, "dark", edges="glow"),
                *[B(sx * 0.46, 0, 0.05, 0.85, 0, 0.56, "dark") for sx in (-1, 1)],
                B(-0.2, -0.32, 0.5, 0.06, 0.66, 0.3, "dark", screen=True),
                B(0.28, -0.25, 0.32, 0.06, 0.66, 0.28, "dark", screen=True, rot=-20),
                C(-0.2, -0.35, 0.06, 0.06, 0.59, 0.07, "metal"),
                C(0.28, -0.3, 0.06, 0.06, 0.59, 0.07, "metal"),
                B(0.4, -0.05, 0.12, 0.45, 0, 0.45, "dark", edges="glow"),
                B(0.4, 0.17, 0.1, 0.02, 0.1, 0.25, "#a640ff", glow=True),
                B(-0.05, 0.2, 0.35, 0.18, 0.59, 0.01, "body"),
                B(0.2, 0.2, 0.06, 0.1, 0.59, 0.015, "body"),
                B(0, -0.47, 0.98, 0.03, 0.59, 0.02, "#a640ff", glow=True),
            ],
            electric=True,
            surface=True,
            light="strip",
        ),
        item(
            "gaming_chair",
            "Gaming-Stuhl",
            "Gaming chair",
            [0.7, 0.7, 1.35],
            [
                C(0, 0, 0.9, 0.9, 0, 0.04, "dark"),
                C(0, 0, 0.08, 0.08, 0.04, 0.3, "metal"),
                B(0, 0.05, 0.7, 0.7, 0.34, 0.1, "dark", edges=True),
                L(0, -0.32, 0.7, 0.14, 0.44, 0.56, "dark", tw=0.55, td=0.12, tz=-0.36, edges=True),
                B(0, -0.34, 0.2, 0.15, 0.6, 0.25, "#d1293d"),
                B(-0.42, 0.05, 0.08, 0.5, 0.44, 0.12, "dark"),
                B(0.42, 0.05, 0.08, 0.5, 0.44, 0.12, "dark"),
            ],
        ),
        item(
            "game_console",
            "Spielkonsole",
            "Game console",
            [0.4, 0.3, 0.1],
            [
                B(0, 0, 1, 1, 0, 1, "white", edges=True),
                B(0, 0.5, 0.6, 0.02, 0.4, 0.15, "#3ea6ff", glow=True),
            ],
            mount="surface",
            electric=True,
            light="table",
        ),
        item(
            "arcade",
            "Arcade-Automat",
            "Arcade cabinet",
            [0.7, 0.8, 1.8],
            [
                B(0, -0.1, 1, 0.8, 0, 0.55, "dark", edges="glow"),
                L(0, 0.15, 1, 0.4, 0.55, 0.06, "dark", tz=0.05, td=0.25),
                B(0, -0.15, 1, 0.7, 0.61, 0.33, "dark", edges="glow"),
                B(0, 0.12, 0.8, 0.04, 0.63, 0.28, "dark", screen=True),
                B(0, -0.1, 1, 0.8, 0.94, 0.06, "#ff2e9a", glow=True),
                C(-0.2, 0.3, 0.08, 0.08, 0.61, 0.05, "#d1293d"),
                C(0.15, 0.3, 0.06, 0.06, 0.61, 0.02, "#3ea6ff"),
            ],
            electric=True,
            light="table",
        ),
        item(
            "media_wall",
            "Medienwand mit Fernseher",
            "Media wall with TV",
            [3.0, 0.45, 2.2],
            [
                B(0, 0.05, 1, 0.9, 0, 0.2, "wood", edges="faint"),
                B(-0.42, 0, 0.16, 1, 0.2, 0.8, "wood"),
                B(0.42, 0, 0.16, 1, 0.2, 0.8, "wood"),
                B(0, -0.35, 0.68, 0.3, 0.2, 0.8, "dark"),
                B(0, 0.1, 0.55, 0.06, 0.3, 0.42, "dark", screen=True, edges=True),
                B(0, 0.05, 0.68, 0.9, 0.97, 0.03, "wood"),
                *[B(sx * 0.42, 0.1, 0.12, 0.6, y, 0.12, "accent") for sx in (-1, 1) for y in (0.35, 0.6)],
            ],
            electric=True,
        ),
        item(
            "media_rack",
            "Medienregal",
            "Media rack",
            [1.8, 0.45, 0.5],
            [
                B(0, 0, 1, 1, 0.1, 0.9, "dark", edges=True),
                *legs4(0.04, 0.03, 0.1, 0, "metal"),
                B(-0.25, 0.48, 0.45, 0.04, 0.3, 0.5, "body"),
                B(0.25, 0.48, 0.45, 0.04, 0.3, 0.5, "body"),
            ],
            surface=True,
        ),
    ],
)

# ------------------------------------------------------------------ Küche extra
pack(
    "nextfloor.kueche",
    "Küche extra",
    "Kaffeevollautomat, Mikrowelle, Dunstabzug, Weinkühlschrank, Küchenmaschine und mehr",
    [
        item(
            "coffee_machine",
            "Kaffeevollautomat",
            "Coffee machine",
            [0.3, 0.45, 0.38],
            [
                B(0, 0, 1, 1, 0, 1, "dark", edges=True),
                B(0, 0.42, 0.5, 0.16, 0.12, 0.4, "#202634"),
                B(0, 0.35, 0.4, 0.2, 0, 0.06, "metal"),
                B(0, 0.5, 0.6, 0.02, 0.7, 0.18, "#3ea6ff", glow=True),
            ],
            mount="surface",
            electric=True,
        ),
        item(
            "microwave",
            "Mikrowelle",
            "Microwave",
            [0.5, 0.4, 0.3],
            [
                B(0, 0, 1, 1, 0, 1, "metal", edges=True),
                B(-0.1, 0.5, 0.7, 0.02, 0.15, 0.7, "dark"),
                B(0.38, 0.5, 0.15, 0.02, 0.2, 0.6, "body"),
            ],
            mount="surface",
            electric=True,
        ),
        item(
            "hood_island",
            "Dunstabzug (Insel)",
            "Island hood",
            [0.9, 0.6, 1.0],
            [
                L(0, 0, 1, 1, 0, 0.15, "metal", tw=0.3, td=0.4, edges=True),
                B(0, 0, 0.3, 0.4, 0.15, 0.85, "metal"),
                B(0, 0, 0.8, 0.8, 0, 0.02, "#fff1c9", glow=True),
            ],
            mount="ceiling",
            electric=True,
            light="spot",
        ),
        item(
            "wine_fridge",
            "Weinkühlschrank",
            "Wine fridge",
            [0.6, 0.6, 0.85],
            [
                B(0, 0, 1, 1, 0, 1, "dark", edges=True),
                B(0, 0.5, 0.9, 0.02, 0.06, 0.88, "glass"),
                *[
                    C(x, 0.3, 0.08, 0.5, y, 0.08, "#6b1d2a", axis="z")
                    for y in (0.15, 0.4, 0.65)
                    for x in (-0.3, -0.1, 0.1, 0.3)
                ],
                B(0, 0.3, 0.9, 0.5, 0.94, 0.02, "#7ab8ff", glow=True),
            ],
            electric=True,
            light="table",
        ),
        item(
            "stand_mixer",
            "Küchenmaschine",
            "Stand mixer",
            [0.25, 0.35, 0.35],
            [
                B(0, -0.2, 0.8, 0.6, 0, 0.1, "accent"),
                B(0, -0.3, 0.5, 0.3, 0.1, 0.6, "accent"),
                B(0, 0.05, 0.6, 0.8, 0.7, 0.25, "accent", edges="faint"),
                C(0, 0.15, 0.7, 0.55, 0.1, 0.45, "metal"),
            ],
            mount="surface",
            electric=True,
        ),
        item(
            "toaster",
            "Toaster",
            "Toaster",
            [0.3, 0.18, 0.2],
            [
                B(0, 0, 1, 1, 0, 1, "metal", edges="faint"),
                B(-0.2, 0, 0.15, 0.6, 0.95, 0.05, "dark"),
                B(0.2, 0, 0.15, 0.6, 0.95, 0.05, "dark"),
            ],
            mount="surface",
            electric=True,
        ),
        item(
            "kettle",
            "Wasserkocher",
            "Kettle",
            [0.2, 0.15, 0.25],
            [
                C(0, 0, 0.9, 1, 0, 0.1, "dark"),
                C(0, 0, 0.8, 0.9, 0.1, 0.8, "white", edges="faint"),
                B(0.42, 0, 0.12, 0.3, 0.3, 0.55, "white"),
            ],
            mount="surface",
            electric=True,
        ),
        item(
            "long_dining_table",
            "Esstisch (lang)",
            "Long dining table",
            [2.4, 1.0, 0.75],
            [
                B(0, 0, 1, 1, 0.94, 0.06, "wood", edges="faint"),
                B(-0.4, 0, 0.04, 0.8, 0, 0.94, "dark"),
                B(0.4, 0, 0.04, 0.8, 0, 0.94, "dark"),
                B(-0.4, 0, 0.08, 0.85, 0, 0.03, "dark"),
                B(0.4, 0, 0.08, 0.85, 0, 0.03, "dark"),
            ],
            surface=True,
        ),
        item(
            "bar_cart",
            "Barwagen",
            "Bar cart",
            [0.7, 0.4, 0.85],
            [
                B(0, 0, 1, 1, 0.9, 0.04, "glass", edges=True),
                B(0, 0, 1, 1, 0.25, 0.04, "glass"),
                *legs4(0.03, 0.04, 0.9, 0.1, "#c9a14a"),
                *[C(sx * 0.42, sz * 0.42, 0.1, 0.25, 0, 0.12, "dark", axis="x") for sx in (-1, 1) for sz in (-1, 1)],
                C(-0.2, 0, 0.1, 0.25, 0.94, 0.06, "#6b1d2a"),
                C(0.05, 0.05, 0.08, 0.2, 0.94, 0.05, "glass"),
            ],
            surface=True,
        ),
        item(
            "trash_station",
            "Mülltrennung",
            "Waste sorting",
            [0.6, 0.4, 0.6],
            [
                *[
                    B(x, 0, 0.3, 0.95, 0, 0.92, c, edges="faint")
                    for x, c in ((-0.33, "#f2c94c"), (0, "#3b7bb5"), (0.33, "#5a5f6a"))
                ],
                *[B(x, 0, 0.31, 0.97, 0.92, 0.08, "dark") for x in (-0.33, 0, 0.33)],
            ],
        ),
    ],
)

# ------------------------------------------------------------------ Bad extra
pack(
    "nextfloor.bad",
    "Bad extra",
    "Doppelwaschtisch, Walk-in-Dusche, Handtuchheizkörper, Spiegelschrank, Waschturm",
    [
        item(
            "double_vanity",
            "Doppelwaschtisch",
            "Double vanity",
            [1.4, 0.5, 0.85],
            [
                B(0, 0, 1, 1, 0.35, 0.55, "wood", edges="faint"),
                B(0, 0, 1.02, 1.02, 0.9, 0.1, "white"),
                C(-0.25, 0.05, 0.3, 0.75, 0.86, 0.12, "white"),
                C(0.25, 0.05, 0.3, 0.75, 0.86, 0.12, "white"),
                C(-0.25, -0.35, 0.03, 0.03, 1.0, 0.25, "metal"),
                C(0.25, -0.35, 0.03, 0.03, 1.0, 0.25, "metal"),
            ],
            mount="wall",
            wall_y=0.0,
        ),
        item(
            "walkin_shower",
            "Walk-in-Dusche",
            "Walk-in shower",
            [1.4, 1.0, 2.1],
            [
                B(0, 0, 1, 1, 0, 0.02, "#d9dee6"),
                B(0.15, 0.48, 0.7, 0.03, 0.02, 0.95, "glass", edges="glow"),
                C(0, -0.35, 0.18, 0.25, 0.92, 0.02, "metal"),
                C(0, -0.45, 0.02, 0.02, 0.5, 0.45, "metal"),
                B(-0.3, -0.48, 0.25, 0.03, 0.4, 0.2, "#d9dee6"),
            ],
        ),
        item(
            "towel_radiator",
            "Handtuchheizkörper",
            "Towel radiator",
            [0.55, 0.08, 1.2],
            [
                B(-0.45, 0, 0.08, 1, 0, 1, "white"),
                B(0.45, 0, 0.08, 1, 0, 1, "white"),
                *[B(0, 0, 0.9, 0.6, y, 0.025, "white") for y in (0.05, 0.15, 0.25, 0.4, 0.5, 0.6, 0.75, 0.85, 0.95)],
                B(0, 0.3, 0.7, 0.3, 0.55, 0.3, "#a5c9e8"),
            ],
            mount="wall",
            wall_y=0.3,
            electric=True,
        ),
        item(
            "mirror_cabinet",
            "Spiegelschrank mit Licht",
            "Mirror cabinet with light",
            [1.0, 0.15, 0.7],
            [
                B(0, 0, 1, 1, 0, 1, "white", edges="faint"),
                B(0, 0.5, 0.96, 0.02, 0.04, 0.92, "#c8dcec"),
                B(0, 0.3, 1, 0.4, -0.04, 0.04, "#fff1c9", glow=True),
            ],
            mount="wall",
            wall_y=1.25,
            electric=True,
            light="wall",
        ),
        item(
            "washer_tower",
            "Waschturm (Waschmaschine + Trockner)",
            "Washer-dryer stack",
            [0.6, 0.65, 1.75],
            [
                B(0, 0, 1, 1, 0, 0.49, "white", edges=True),
                C(0, 0.5, 0.6, 0.04, 0.08, 0.32, "#9aa6b8", axis="z"),
                B(0, 0, 1, 1, 0.51, 0.49, "white", edges=True),
                C(0, 0.5, 0.6, 0.04, 0.58, 0.32, "#9aa6b8", axis="z"),
                B(0, 0, 1.02, 1.02, 0.49, 0.02, "metal"),
            ],
            electric=True,
        ),
        item(
            "laundry_basket",
            "Wäschekorb",
            "Laundry basket",
            [0.45, 0.35, 0.6],
            [
                B(0, 0, 1, 1, 0, 0.9, "#c9a77a", edges="faint"),
                B(0, 0, 0.9, 0.9, 0.9, 0.1, "fabric"),
            ],
        ),
        item(
            "bath_shelf",
            "Badregal",
            "Bath shelf",
            [0.4, 0.3, 1.6],
            [
                *[B(0, 0, 1, 1, y, 0.03, "white") for y in (0.0, 0.3, 0.6, 0.97)],
                B(-0.46, 0, 0.08, 1, 0, 1, "white"),
                B(0.46, 0, 0.08, 1, 0, 1, "white"),
                B(0, 0.05, 0.8, 0.8, 0.33, 0.15, "#a5c9e8"),
                B(0, 0.05, 0.8, 0.8, 0.63, 0.12, "white"),
            ],
        ),
    ],
)

# ------------------------------------------------------------------ Schlafen & Kinder
pack(
    "nextfloor.schlafen",
    "Schlafen & Kinder",
    "Boxspringbett, Babybett, Wickelkommode, Schminktisch, Hochbett",
    [
        item(
            "boxspring",
            "Boxspringbett",
            "Box spring bed",
            [1.8, 2.1, 1.2],
            [
                B(0, 0.04, 1, 0.92, 0, 0.3, "fabric", edges=True),
                B(0, 0.04, 0.98, 0.9, 0.3, 0.2, "white"),
                B(0, 0.05, 0.96, 0.88, 0.5, 0.05, "cushion"),
                B(0, -0.48, 1.04, 0.06, 0, 1, "fabric", edges=True),
                B(-0.22, -0.38, 0.4, 0.12, 0.5, 0.14, "white"),
                B(0.22, -0.38, 0.4, 0.12, 0.5, 0.14, "white"),
            ],
        ),
        item(
            "baby_crib",
            "Babybett",
            "Baby crib",
            [0.75, 1.3, 0.95],
            [
                B(0, 0, 1, 1, 0.3, 0.12, "white"),
                *legs4(0.02, 0.05, 1, 0, "white"),
                *[
                    B(x, sz * 0.48, 0.03, 0.03, 0.42, 0.55, "white")
                    for sz in (-1, 1)
                    for x in (-0.35, -0.2, -0.05, 0.1, 0.25)
                ],
                *[
                    B(sx * 0.48, z, 0.03, 0.03, 0.42, 0.55, "white")
                    for sx in (-1, 1)
                    for z in (-0.35, -0.15, 0.05, 0.25)
                ],
                B(0, 0, 0.96, 0.96, 0.95, 0.05, "white"),
                B(0, 0, 0.9, 0.9, 0.42, 0.06, "#bfe3d0"),
            ],
        ),
        item(
            "changing_table",
            "Wickelkommode",
            "Changing table",
            [1.0, 0.75, 0.95],
            [
                B(0, 0.1, 1, 0.75, 0, 0.92, "white", edges="faint"),
                B(0, 0, 1, 1, 0.92, 0.04, "white"),
                B(0, 0, 0.9, 0.85, 0.96, 0.04, "#bfe3d0"),
                *[B(0, 0.48, 0.9, 0.02, y, 0.25, "body") for y in (0.08, 0.38, 0.66)],
            ],
        ),
        item(
            "vanity_table",
            "Schminktisch",
            "Vanity table",
            [1.0, 0.45, 1.4],
            [
                B(0, 0, 1, 1, 0.5, 0.04, "white", edges="faint"),
                *legs4(0.05, 0.05, 0.5, 0, "white"),
                B(0.3, 0, 0.35, 0.9, 0.38, 0.12, "white"),
                C(0, -0.3, 0.5, 0.08, 0.6, 0.38, "#c8dcec", axis="z"),
                C(0, -0.32, 0.55, 0.06, 0.58, 0.42, "#ffe7b0", glow=True, axis="z"),
            ],
            surface=True,
            electric=True,
            light="table",
        ),
        item(
            "clothes_rail",
            "Kleiderstange",
            "Clothes rail",
            [1.2, 0.5, 1.6],
            [
                B(-0.47, 0, 0.04, 0.9, 0, 0.03, "metal"),
                B(0.47, 0, 0.04, 0.9, 0, 0.03, "metal"),
                C(-0.47, 0, 0.04, 0.04, 0, 1, "metal"),
                C(0.47, 0, 0.04, 0.04, 0, 1, "metal"),
                B(0, 0, 0.96, 0.04, 0.97, 0.02, "metal"),
                *[
                    B(x, 0, 0.08, 0.8, 0.45, 0.5, c)
                    for x, c in ((-0.3, "fabric"), (-0.15, "accent"), (0, "#b5523b"), (0.15, "white"), (0.3, "dark"))
                ],
            ],
        ),
        item(
            "loft_bed_desk",
            "Hochbett mit Schreibtisch",
            "Loft bed with desk",
            [1.0, 2.0, 1.85],
            [
                *legs4(0.03, 0.06, 1, 0, "wood"),
                B(0, 0, 1, 1, 0.58, 0.05, "wood", edges="faint"),
                B(0, 0, 0.95, 0.95, 0.63, 0.1, "white"),
                B(-0.48, 0, 0.04, 1, 0.73, 0.15, "wood"),
                B(0.48, 0.1, 0.04, 0.8, 0.73, 0.15, "wood"),
                B(0, 0.1, 0.95, 0.5, 0.39, 0.03, "white"),
                B(0, -0.3, 0.6, 0.1, 0.42, 0.18, "dark", screen=True),
                *[B(0.46, z, 0.06, 0.03, 0.05, 0.02, "wood") for z in ()],
            ],
            electric=True,
        ),
        item(
            "toy_box",
            "Spielzeugkiste",
            "Toy box",
            [0.7, 0.45, 0.45],
            [
                B(0, 0, 1, 1, 0, 0.9, "#f2c94c", edges="faint"),
                B(0, 0, 1.02, 1.02, 0.9, 0.1, "#3b7bb5"),
            ],
        ),
    ],
)

# ------------------------------------------------------------------ Büro & Technik
pack(
    "nextfloor.technik",
    "Büro & Homelab",
    "Höhenverstellbarer Schreibtisch, Server-Rack, NAS, 3D-Drucker, Router",
    [
        item(
            "standing_desk",
            "Schreibtisch höhenverstellbar",
            "Standing desk",
            [1.6, 0.8, 1.2],
            [
                B(0, 0, 1, 1, 0.6, 0.03, "wood", edges="faint"),
                B(-0.4, -0.05, 0.05, 0.08, 0, 0.6, "dark"),
                B(0.4, -0.05, 0.05, 0.08, 0, 0.6, "dark"),
                B(-0.4, -0.05, 0.08, 0.7, 0, 0.02, "dark"),
                B(0.4, -0.05, 0.08, 0.7, 0, 0.02, "dark"),
                B(-0.18, -0.32, 0.36, 0.05, 0.71, 0.27, "dark", screen=True),
                B(0.2, -0.32, 0.36, 0.05, 0.71, 0.27, "dark", screen=True),
                C(-0.18, -0.36, 0.05, 0.05, 0.63, 0.08, "metal"),
                C(0.2, -0.36, 0.05, 0.05, 0.63, 0.08, "metal"),
                B(0, 0.15, 0.3, 0.18, 0.63, 0.01, "body"),
            ],
            electric=True,
            surface=True,
        ),
        item(
            "server_rack",
            "Server-Rack (19 Zoll)",
            "Server rack (19 inch)",
            [0.6, 0.8, 1.9],
            [
                B(0, 0, 1, 1, 0, 1, "dark", edges="glow"),
                B(0, 0.5, 0.9, 0.02, 0.03, 0.94, "glass"),
                *[
                    B(0, 0.1, 0.86, 0.8, y, 0.06, "#1d2433", edges="faint")
                    for y in (0.1, 0.2, 0.3, 0.42, 0.55, 0.68, 0.8)
                ],
                *[
                    B(-0.3, 0.46, 0.05, 0.02, y + 0.02, 0.02, "#38e07b", glow=True)
                    for y in (0.1, 0.2, 0.3, 0.42, 0.55, 0.68, 0.8)
                ],
            ],
            electric=True,
            light="strip",
        ),
        item(
            "nas",
            "NAS",
            "NAS",
            [0.2, 0.25, 0.22],
            [
                B(0, 0, 1, 1, 0, 1, "dark", edges=True),
                *[B(x, 0.5, 0.18, 0.02, 0.1, 0.8, "#2b3446") for x in (-0.3, -0.1, 0.1, 0.3)],
                B(0.35, 0.5, 0.05, 0.02, 0.85, 0.05, "#38e07b", glow=True),
            ],
            mount="surface",
            electric=True,
            light="table",
        ),
        item(
            "printer_3d",
            "3D-Drucker",
            "3D printer",
            [0.5, 0.5, 0.6],
            [
                B(0, 0, 1, 1, 0, 0.12, "dark", edges=True),
                B(-0.45, 0, 0.08, 0.1, 0.12, 0.85, "metal"),
                B(0.45, 0, 0.08, 0.1, 0.12, 0.85, "metal"),
                B(0, 0, 1, 0.1, 0.92, 0.06, "metal"),
                B(0, 0, 0.75, 0.75, 0.25, 0.02, "#d1293d"),
                B(0.1, 0, 0.14, 0.14, 0.7, 0.12, "dark"),
                C(0, 0, 0.18, 0.18, 0.27, 0.15, "#38e07b"),
            ],
            electric=True,
        ),
        item(
            "office_printer",
            "Drucker",
            "Printer",
            [0.45, 0.4, 0.25],
            [
                B(0, 0, 1, 1, 0, 0.8, "white", edges=True),
                B(0, 0.4, 0.7, 0.3, 0.25, 0.04, "body"),
                B(0, -0.1, 0.8, 0.6, 0.8, 0.2, "#d9dee6"),
            ],
            mount="surface",
            electric=True,
        ),
        item(
            "router",
            "Router / Access Point",
            "Router / access point",
            [0.25, 0.25, 0.04],
            [
                C(0, 0, 1, 1, 0, 1, "white", edges="faint"),
                C(0, 0, 0.3, 0.3, 0.9, 0.12, "#3ea6ff", glow=True),
            ],
            mount="ceiling",
            electric=True,
            light="downlight",
        ),
        item(
            "tower_pc",
            "PC (Tower)",
            "Tower PC",
            [0.22, 0.48, 0.48],
            [
                B(0, 0, 1, 1, 0, 1, "dark", edges="glow"),
                B(-0.5, 0, 0.02, 0.8, 0.2, 0.7, "glass"),
                B(-0.48, 0, 0.02, 0.7, 0.25, 0.6, "#a640ff", glow=True),
            ],
            electric=True,
            light="strip",
        ),
        item(
            "filing_cabinet",
            "Rollcontainer",
            "Drawer pedestal",
            [0.42, 0.55, 0.6],
            [
                B(0, 0, 1, 1, 0.08, 0.92, "white", edges="faint"),
                *[B(0, 0.5, 0.9, 0.02, y, 0.26, "body") for y in (0.12, 0.42, 0.72)],
                *[C(sx * 0.4, sz * 0.4, 0.1, 0.1, 0, 0.08, "dark") for sx in (-1, 1) for sz in (-1, 1)],
            ],
        ),
    ],
)

# ------------------------------------------------------------------ Energie & Haustechnik
pack(
    "nextfloor.energie",
    "Energie & Haustechnik",
    "Wärmepumpe, Pelletkessel, Pufferspeicher, Batteriespeicher, Wechselrichter, Wallbox, Zählerschrank",
    [
        item(
            "heat_pump",
            "Wärmepumpe (Außeneinheit)",
            "Heat pump (outdoor unit)",
            [1.1, 0.45, 0.9],
            [
                B(0, 0, 1, 1, 0.06, 0.94, "white", edges=True),
                C(-0.15, 0.5, 0.55, 0.04, 0.15, 0.7, "#2b3446", axis="z"),
                C(-0.15, 0.52, 0.12, 0.03, 0.43, 0.14, "metal", axis="z"),
                B(0.33, 0.5, 0.25, 0.02, 0.1, 0.8, "#d9dee6"),
                B(-0.4, 0, 0.1, 0.8, 0, 0.06, "dark"),
                B(0.4, 0, 0.1, 0.8, 0, 0.06, "dark"),
            ],
            electric=True,
        ),
        item(
            "pellet_boiler",
            "Pelletkessel",
            "Pellet boiler",
            [0.7, 0.9, 1.6],
            [
                B(0, 0, 1, 1, 0, 0.82, "white", edges=True),
                B(0, 0, 1, 1, 0.82, 0.18, "#d1293d", edges="faint"),
                B(0.15, 0.5, 0.5, 0.02, 0.4, 0.25, "#2b3446"),
                B(0.15, 0.51, 0.3, 0.02, 0.48, 0.08, "#ff7a1a", glow=True),
                B(-0.3, 0.5, 0.2, 0.02, 0.7, 0.08, "#3ea6ff", glow=True),
                C(0, -0.35, 0.18, 0.18, 1.0, 0.25, "metal"),
            ],
            electric=True,
            light="table",
        ),
        item(
            "buffer_tank",
            "Pufferspeicher",
            "Buffer tank",
            [0.9, 0.9, 1.9],
            [
                C(0, 0, 1, 1, 0, 0.95, "#d9dee6", edges="faint"),
                C(0, 0, 0.98, 0.98, 0.95, 0.05, "white"),
                C(0.45, 0, 0.2, 0.06, 0.3, 0.06, "metal", axis="x"),
                C(0.45, 0, 0.2, 0.06, 0.7, 0.06, "metal", axis="x"),
            ],
        ),
        item(
            "hot_water_tank",
            "Warmwasserspeicher",
            "Hot water tank",
            [0.6, 0.6, 1.6],
            [
                C(0, 0, 1, 1, 0, 0.95, "white", edges="faint"),
                C(0, 0, 0.98, 0.98, 0.95, 0.05, "#d9dee6"),
                B(0, 0.48, 0.3, 0.04, 0.6, 0.1, "#3ea6ff"),
            ],
        ),
        item(
            "home_battery",
            "Batteriespeicher (Turm)",
            "Home battery (tower)",
            [0.6, 0.3, 1.4],
            [
                B(0, 0, 1, 1, 0, 0.08, "dark"),
                *[B(0, 0, 1, 1, 0.08 + i * 0.17, 0.165, "white", edges="faint") for i in range(5)],
                B(0, 0, 1, 1, 0.93, 0.07, "dark"),
                B(0, 0.5, 0.5, 0.02, 0.95, 0.03, "#38e07b", glow=True),
            ],
            electric=True,
            light="table",
        ),
        item(
            "inverter",
            "Wechselrichter",
            "Inverter",
            [0.5, 0.2, 0.6],
            [
                B(0, 0, 1, 1, 0, 1, "white", edges=True),
                B(0, 0.5, 0.95, 0.02, 0.75, 0.25, "#d1293d"),
                B(0, 0.5, 0.4, 0.02, 0.4, 0.15, "#2b3446"),
                B(0, 0.52, 0.2, 0.02, 0.45, 0.04, "#38e07b", glow=True),
            ],
            mount="wall",
            wall_y=1.0,
            electric=True,
            light="table",
        ),
        item(
            "wallbox",
            "Wallbox",
            "Wallbox",
            [0.25, 0.12, 0.4],
            [
                B(0, 0, 1, 1, 0, 1, "white", edges="glow"),
                B(0, 0.5, 0.6, 0.02, 0.55, 0.15, "#3ea6ff", glow=True),
                C(0, 0.6, 0.35, 0.5, -0.4, 0.4, "dark", axis="z"),
            ],
            mount="wall",
            wall_y=0.9,
            electric=True,
            light="table",
        ),
        item(
            "meter_cabinet",
            "Zählerschrank",
            "Meter cabinet",
            [0.8, 0.22, 1.1],
            [
                B(0, 0, 1, 1, 0, 1, "#d9dee6", edges="faint"),
                B(0, 0.5, 0.96, 0.02, 0.02, 0.96, "white"),
                B(0.4, 0.51, 0.04, 0.02, 0.45, 0.12, "dark"),
            ],
            mount="wall",
            wall_y=0.5,
        ),
        item(
            "ventilation",
            "Lüftungsanlage",
            "Ventilation unit",
            [0.6, 0.6, 0.9],
            [
                B(0, 0, 1, 1, 0, 1, "white", edges=True),
                *[C(x, -0.1, 0.18, 0.18, 1.0, 0.15, "metal") for x in (-0.3, -0.1, 0.1, 0.3)],
                B(0, 0.5, 0.4, 0.02, 0.7, 0.1, "#2b3446"),
            ],
            electric=True,
        ),
        item(
            "solar_carport_pillar",
            "Carport-Stütze mit Solar-Kante",
            "Solar carport post",
            [0.15, 0.15, 2.4],
            [
                B(0, 0, 1, 1, 0, 1, "metal", edges="glow"),
            ],
        ),
    ],
)

# ------------------------------------------------------------------ Garten & Terrasse
pack(
    "nextfloor.garten",
    "Garten & Terrasse",
    "Lounge, Grill, Pool, Whirlpool, Trampolin, Gewächshaus, Hochbeet, Gartenhaus, Mähroboter",
    [
        item(
            "sun_lounger",
            "Gartenliege",
            "Sun lounger",
            [0.7, 2.0, 0.9],
            [
                B(0, 0.15, 1, 0.7, 0.25, 0.1, "wood", edges="faint"),
                L(0, -0.35, 1, 0.3, 0.3, 0.6, "wood", tz=-0.4, td=0.1),
                B(0, 0.15, 0.9, 0.65, 0.35, 0.06, "cushion"),
                *legs4(0.05, 0.06, 0.25, 0, "wood"),
            ],
        ),
        item(
            "garden_table",
            "Gartentisch",
            "Garden table",
            [1.8, 0.9, 0.75],
            [
                B(0, 0, 1, 1, 0.94, 0.06, "#8a6a4a", edges="faint"),
                *legs4(0.06, 0.05, 0.94, 0, "dark"),
            ],
            surface=True,
        ),
        item(
            "garden_chair",
            "Gartenstuhl",
            "Garden chair",
            [0.55, 0.6, 0.9],
            [
                B(0, 0.05, 1, 0.85, 0.48, 0.05, "#8a6a4a"),
                B(0, -0.43, 1, 0.08, 0.53, 0.45, "#8a6a4a"),
                *legs4(0.06, 0.06, 0.48, 0, "dark"),
            ],
        ),
        item(
            "lounge_set",
            "Lounge-Ecke",
            "Outdoor lounge",
            [2.4, 2.0, 0.75],
            [
                B(0, -0.35, 1, 0.3, 0, 0.5, "#5a5f6a", edges="faint"),
                B(-0.35, 0.15, 0.3, 0.7, 0, 0.5, "#5a5f6a", edges="faint"),
                B(0, -0.45, 1, 0.1, 0.5, 0.45, "#5a5f6a"),
                B(-0.45, 0.15, 0.1, 0.7, 0.5, 0.45, "#5a5f6a"),
                B(0.05, -0.32, 0.85, 0.22, 0.5, 0.12, "cushion"),
                B(-0.32, 0.17, 0.22, 0.6, 0.5, 0.12, "cushion"),
                B(0.2, 0.2, 0.35, 0.35, 0, 0.45, "#8a6a4a", edges="faint"),
            ],
        ),
        item(
            "parasol",
            "Sonnenschirm",
            "Parasol",
            [2.8, 2.8, 2.5],
            [
                B(0, 0, 0.18, 0.18, 0, 0.03, "dark"),
                C(0, 0, 0.02, 0.02, 0, 0.92, "metal"),
                L(0, 0, 1, 1, 0.82, 0.12, "#e8e0c8", tw=0.04, td=0.04, edges="faint"),
            ],
        ),
        item(
            "gas_grill",
            "Gasgrill",
            "Gas grill",
            [1.4, 0.6, 1.2],
            [
                B(0, 0, 0.6, 1, 0, 0.7, "dark", edges=True),
                L(0, 0, 0.6, 1, 0.7, 0.22, "dark", tw=0.55, td=0.6, edges=True),
                B(-0.4, 0, 0.2, 0.9, 0.7, 0.03, "metal"),
                B(0.4, 0, 0.2, 0.9, 0.7, 0.03, "metal"),
                C(0, 0.55, 0.4, 0.04, 0.82, 0.04, "metal", axis="x"),
            ],
        ),
        item(
            "fire_bowl",
            "Feuerschale",
            "Fire bowl",
            [0.8, 0.8, 0.45],
            [
                C(0, 0, 0.5, 0.5, 0, 0.5, "dark"),
                C(0, 0, 1, 1, 0.5, 0.4, "#5a3a2a", edges="faint"),
                C(0, 0, 0.6, 0.6, 0.8, 0.15, "#ff7a1a", glow=True),
            ],
            electric=True,
            light="garden",
        ),
        item(
            "pool",
            "Pool",
            "Pool",
            [8.0, 4.0, 0.3],
            [
                B(0, 0, 1, 1, 0, 1, "#d9dee6", edges="glow"),
                B(0, 0, 0.96, 0.92, 0.6, 0.42, "#2a8fd4", glow=True),
            ],
            electric=True,
            light="garden",
        ),
        item(
            "hot_tub",
            "Whirlpool",
            "Hot tub",
            [2.2, 2.2, 0.95],
            [
                B(0, 0, 1, 1, 0, 0.9, "#5a3a2a", edges="faint"),
                B(0, 0, 0.84, 0.84, 0.88, 0.04, "#2a8fd4", glow=True),
                B(0, 0, 1, 1, 0.9, 0.1, "#d9dee6"),
            ],
            electric=True,
            light="garden",
        ),
        item(
            "trampoline",
            "Trampolin",
            "Trampoline",
            [3.0, 3.0, 2.4],
            [
                C(0, 0, 1, 1, 0.33, 0.03, "#2b3446"),
                C(0, 0, 0.9, 0.9, 0.34, 0.01, "dark"),
                *[
                    C(0.48 * dx, 0.48 * dz, 0.02, 0.02, 0, 1, "metal")
                    for dx, dz in ((1, 0), (-1, 0), (0, 1), (0, -1), (0.7, 0.7), (-0.7, 0.7), (0.7, -0.7), (-0.7, -0.7))
                ],
                C(0, 0, 1, 1, 0.36, 0.62, "glass"),
            ],
        ),
        item(
            "greenhouse",
            "Gewächshaus",
            "Greenhouse",
            [2.5, 3.0, 2.3],
            [
                B(0, 0, 1, 1, 0, 0.7, "glass", edges="glow"),
                L(0, 0, 1, 1, 0.7, 0.3, "glass", tw=0.05, edges="glow"),
                *[B(x, 0, 0.3, 0.9, 0, 0.25, "#8a6a4a") for x in (-0.3, 0.3)],
                *[C(x, z, 0.08, 0.06, 0.25, 0.2, "plant") for x in (-0.3, 0.3) for z in (-0.3, 0, 0.3)],
            ],
        ),
        item(
            "raised_bed",
            "Hochbeet",
            "Raised bed",
            [2.0, 0.8, 0.8],
            [
                B(0, 0, 1, 1, 0, 0.95, "#8a6a4a", edges="faint"),
                B(0, 0, 0.94, 0.88, 0.95, 0.04, "#4a3526"),
                *[C(x, z, 0.1, 0.22, 0.97, 0.2, "plant") for x in (-0.35, -0.1, 0.15, 0.38) for z in (-0.2, 0.2)],
            ],
        ),
        item(
            "garden_shed",
            "Gartenhaus",
            "Garden shed",
            [3.0, 2.5, 2.4],
            [
                B(0, 0, 1, 1, 0, 0.75, "#8a6a4a", edges=True),
                L(0, 0, 1.1, 1.1, 0.75, 0.25, "dark", tw=1.1, td=0.05),
                B(0.15, 0.5, 0.3, 0.02, 0, 0.7, "#5a3a2a"),
                B(-0.25, 0.5, 0.25, 0.02, 0.35, 0.25, "glass"),
            ],
        ),
        item(
            "swing_bench",
            "Hollywoodschaukel",
            "Porch swing",
            [2.0, 1.3, 1.9],
            [
                B(-0.48, 0, 0.04, 1, 0, 1, "metal"),
                B(0.48, 0, 0.04, 1, 0, 1, "metal"),
                B(0, 0, 1, 0.08, 0.96, 0.04, "metal"),
                B(0, 0.05, 0.8, 0.45, 0.25, 0.08, "cushion"),
                B(0, -0.2, 0.8, 0.08, 0.33, 0.3, "cushion"),
                L(0, 0, 0.9, 0.7, 0.85, 0.12, "#e8e0c8", tw=0.9, td=0.2),
            ],
        ),
        item(
            "mower_robot",
            "Mähroboter",
            "Robotic mower",
            [0.6, 0.5, 0.28],
            [
                L(0, 0, 1, 1, 0.15, 0.85, "#d1293d", tw=0.8, td=0.75, edges="faint"),
                C(-0.35, 0.3, 0.2, 0.5, 0, 0.5, "dark", axis="x"),
                C(0.35, 0.3, 0.2, 0.5, 0, 0.5, "dark", axis="x"),
                B(0, -0.1, 0.3, 0.2, 0.98, 0.04, "#38e07b", glow=True),
            ],
            electric=True,
            light="table",
        ),
        item(
            "tree_oak",
            "Laubbaum",
            "Deciduous tree",
            [5.0, 5.0, 7.0],
            [
                C(0, 0, 0.08, 0.08, 0, 0.45, "#5a3a2a"),
                C(0, 0, 1, 1, 0.38, 0.4, "plant", edges="faint"),
                C(0.1, -0.05, 0.75, 0.75, 0.72, 0.28, "plant"),
            ],
        ),
        item(
            "tree_birch",
            "Birke",
            "Birch",
            [3.2, 3.2, 7.5],
            [
                C(0, 0, 0.08, 0.08, 0, 0.6, "#e8e6df"),
                L(0, 0, 0.9, 0.9, 0.4, 0.6, "plant", tw=0.25, td=0.25, edges="faint"),
            ],
        ),
        item(
            "tree_fruit",
            "Obstbaum",
            "Fruit tree",
            [3.2, 3.2, 3.6],
            [
                C(0, 0, 0.1, 0.1, 0, 0.45, "#5a3a2a"),
                C(0, 0, 1, 1, 0.4, 0.5, "plant", edges="faint"),
                *[
                    C(x, z, 0.1, 0.1, y, 0.08, "#d1293d")
                    for x, z, y in ((0.3, 0.2, 0.55), (-0.25, 0.3, 0.6), (0.1, -0.35, 0.7), (-0.3, -0.1, 0.5))
                ],
            ],
        ),
        item(
            "conifer",
            "Nadelbaum",
            "Conifer",
            [2.6, 2.6, 6.5],
            [
                C(0, 0, 0.1, 0.1, 0, 0.15, "#5a3a2a"),
                L(0, 0, 1, 1, 0.1, 0.9, "#2f6b45", tw=0.05, td=0.05, edges="faint"),
            ],
        ),
        item("shrub", "Strauch", "Shrub", [1.3, 1.3, 1.2], [C(0, 0, 1, 1, 0, 1, "plant", edges="faint")]),
        item(
            "shrub_flowering",
            "Blühstrauch",
            "Flowering shrub",
            [1.3, 1.3, 1.4],
            [
                C(0, 0, 1, 1, 0, 0.9, "plant", edges="faint"),
                *[
                    C(x, z, 0.15, 0.15, 0.82, 0.12, "#e05aa8")
                    for x, z in ((0.25, 0.1), (-0.2, 0.25), (0.05, -0.3), (-0.3, -0.15))
                ],
            ],
        ),
        item("hedge", "Hecke", "Hedge", [3.0, 0.7, 1.6], [B(0, 0, 1, 1, 0, 1, "#2f6b45", edges="faint")]),
        item(
            "lawn_brush",
            "Gestrüpp",
            "Brushwood",
            [2.6, 2.6, 0.8],
            [C(-0.15, 0.1, 0.7, 0.7, 0, 0.8, "plant"), C(0.2, -0.15, 0.6, 0.6, 0, 1, "#4f7a3a")],
        ),
        item(
            "bike_rack",
            "Fahrradständer",
            "Bike rack",
            [1.6, 0.5, 0.4],
            [
                *[B(x, 0, 0.03, 1, 0, 1, "metal") for x in (-0.4, -0.2, 0, 0.2, 0.4)],
                B(0, 0, 1, 0.05, 0, 0.05, "metal"),
            ],
        ),
        item(
            "bin_box",
            "Mülltonnenbox (4 Tonnen)",
            "Bin store (4 bins)",
            [2.8, 0.85, 1.25],
            [
                B(0, 0, 1, 1, 0, 1, "#5a5f6a", edges=True),
                *[B(x, 0.5, 0.22, 0.02, 0.05, 0.9, "#4a4f5a") for x in (-0.37, -0.12, 0.12, 0.37)],
                *[
                    B(x, 0.52, 0.04, 0.02, 0.4, 0.08, c)
                    for x, c in ((-0.37, "dark"), (-0.12, "#3b7bb5"), (0.12, "#f2c94c"), (0.37, "#6b4a2a"))
                ],
            ],
        ),
    ],
)

# ------------------------------------------------------------------ Fitness
pack(
    "nextfloor.fitness",
    "Fitness",
    "Laufband, Ergometer, Rudergerät, Hantelbank, Kraftstation, Yogamatte",
    [
        item(
            "treadmill",
            "Laufband",
            "Treadmill",
            [0.85, 1.9, 1.45],
            [
                B(0, 0.1, 1, 0.8, 0, 0.14, "dark", edges=True),
                B(0, 0.12, 0.7, 0.72, 0.14, 0.02, "#2b3446"),
                B(-0.45, -0.38, 0.06, 0.08, 0.14, 0.75, "dark"),
                B(0.45, -0.38, 0.06, 0.08, 0.14, 0.75, "dark"),
                L(0, -0.4, 1, 0.12, 0.85, 0.15, "dark", tz=-0.45, td=0.06, edges="glow"),
                B(0, -0.43, 0.4, 0.04, 0.9, 0.08, "#3ea6ff", glow=True),
            ],
            electric=True,
            light="table",
        ),
        item(
            "bike_trainer",
            "Ergometer",
            "Exercise bike",
            [0.55, 1.2, 1.35],
            [
                B(0, 0, 0.6, 1, 0, 0.05, "dark"),
                L(0, 0.1, 0.25, 0.25, 0.05, 0.6, "dark", tz=0.05),
                C(0, -0.25, 0.25, 0.4, 0.1, 0.3, "metal", axis="x"),
                B(0, 0.12, 0.5, 0.25, 0.65, 0.06, "dark"),
                L(0, -0.35, 0.15, 0.1, 0.05, 0.85, "dark", tz=-0.3),
                B(0, -0.3, 0.8, 0.08, 0.88, 0.05, "metal"),
                B(0, -0.33, 0.3, 0.05, 0.93, 0.07, "#3ea6ff", glow=True),
            ],
            electric=True,
            light="table",
        ),
        item(
            "rower",
            "Rudergerät",
            "Rowing machine",
            [0.55, 2.1, 0.55],
            [
                B(0, 0.1, 0.25, 0.85, 0.2, 0.12, "wood", edges="faint"),
                C(0, -0.4, 0.8, 0.2, 0, 0.9, "wood", axis="x"),
                B(0, 0.1, 0.5, 0.18, 0.32, 0.12, "dark"),
                B(0, 0.45, 0.4, 0.08, 0, 0.2, "dark"),
            ],
        ),
        item(
            "weight_bench",
            "Hantelbank",
            "Weight bench",
            [1.2, 1.4, 1.2],
            [
                B(0, 0.15, 0.25, 0.7, 0.36, 0.08, "dark", edges="faint"),
                B(0, 0.15, 0.06, 0.6, 0, 0.36, "metal"),
                B(-0.4, -0.35, 0.05, 0.08, 0, 0.9, "metal"),
                B(0.4, -0.35, 0.05, 0.08, 0, 0.9, "metal"),
                C(0, -0.35, 1, 0.03, 0.82, 0.03, "metal", axis="x"),
                C(-0.45, -0.35, 0.05, 0.3, 0.7, 0.25, "dark", axis="x"),
                C(0.45, -0.35, 0.05, 0.3, 0.7, 0.25, "dark", axis="x"),
            ],
        ),
        item(
            "power_rack",
            "Kraftstation",
            "Power rack",
            [1.3, 1.3, 2.2],
            [
                *[B(sx * 0.46, sz * 0.46, 0.05, 0.05, 0, 1, "dark", edges="faint") for sx in (-1, 1) for sz in (-1, 1)],
                B(0, -0.46, 1, 0.05, 0.97, 0.03, "dark"),
                B(0, 0.46, 1, 0.05, 0.97, 0.03, "dark"),
                B(-0.46, 0, 0.05, 1, 0.97, 0.03, "dark"),
                B(0.46, 0, 0.05, 1, 0.97, 0.03, "dark"),
                C(0, 0, 1.1, 0.03, 0.55, 0.02, "metal", axis="x"),
            ],
        ),
        item("yoga_mat", "Yogamatte", "Yoga mat", [0.65, 1.85, 0.01], [B(0, 0, 1, 1, 0, 1, "#7a5ad1")]),
        item(
            "dumbbell_rack",
            "Hantelablage",
            "Dumbbell rack",
            [1.2, 0.5, 0.8],
            [
                L(0, 0, 1, 1, 0, 1, "dark", td=0.4, tz=-0.2),
                *[
                    C(x, z, 0.08, 0.18, y, 0.08, "metal", axis="x")
                    for x in (-0.3, 0, 0.3)
                    for z, y in ((0.25, 0.4), (-0.05, 0.8))
                ],
            ],
        ),
    ],
)

# ------------------------------------------------------------------ Fahrzeuge
pack(
    "nextfloor.fahrzeuge",
    "Fahrzeuge",
    "SUV (Elektro), Kleinwagen, Kombi, Fahrrad, E-Bike, Motorrad, Anhänger - für Stellplätze",
    [
        item(
            "ev_suv",
            "Elektro-SUV (Model-Y-Größe)",
            "Electric SUV (Model Y size)",
            [1.92, 4.75, 1.62],
            [
                L(0, 0.02, 0.98, 0.98, 0.18, 0.4, "#e8ecf2", tw=0.98, td=0.96, edges=True),
                L(0, -0.06, 0.94, 0.62, 0.58, 0.38, "glass", tw=0.78, td=0.38, tz=-0.08),
                L(0, 0.36, 0.96, 0.22, 0.55, 0.06, "#e8ecf2", tz=0.34, td=0.2),
                *[C(sx * 0.44, z, 0.12, 0.2, 0, 0.42, "dark", axis="x") for sx in (-1, 1) for z in (-0.33, 0.33)],
                B(0, 0.495, 0.8, 0.01, 0.42, 0.04, "#ffffff", glow=True),
                B(0, -0.495, 0.8, 0.01, 0.48, 0.04, "#ff2b2b", glow=True),
            ],
            vehicle=True,
            electric=True,
        ),
        item(
            "small_car",
            "Kleinwagen",
            "Small car",
            [1.7, 3.8, 1.5],
            [
                L(0, 0.02, 0.98, 0.98, 0.18, 0.4, "#d1293d", tw=0.98, td=0.94, edges=True),
                L(0, -0.04, 0.94, 0.6, 0.58, 0.36, "glass", tw=0.82, td=0.42, tz=-0.06),
                *[C(sx * 0.44, z, 0.12, 0.22, 0, 0.42, "dark", axis="x") for sx in (-1, 1) for z in (-0.32, 0.32)],
                B(0, 0.495, 0.75, 0.01, 0.42, 0.05, "#ffffff", glow=True),
            ],
            vehicle=True,
        ),
        item(
            "estate_car",
            "Kombi",
            "Estate car",
            [1.85, 4.8, 1.48],
            [
                L(0, 0.02, 0.98, 0.98, 0.18, 0.4, "#3a4b66", tw=0.98, td=0.96, edges=True),
                L(0, -0.1, 0.94, 0.72, 0.58, 0.36, "glass", tw=0.84, td=0.62, tz=-0.14),
                *[C(sx * 0.44, z, 0.12, 0.19, 0, 0.42, "dark", axis="x") for sx in (-1, 1) for z in (-0.33, 0.33)],
            ],
            vehicle=True,
        ),
        item(
            "van",
            "Transporter",
            "Van",
            [2.0, 5.2, 2.0],
            [
                B(0, 0.0, 0.98, 0.98, 0.15, 0.8, "#e8ecf2", edges=True),
                L(0, 0.42, 0.98, 0.16, 0.15, 0.62, "#e8ecf2", tz=0.38, td=0.1),
                B(0, 0.35, 0.94, 0.16, 0.5, 0.3, "glass"),
                *[C(sx * 0.45, z, 0.1, 0.17, 0, 0.36, "dark", axis="x") for sx in (-1, 1) for z in (-0.33, 0.33)],
            ],
            vehicle=True,
        ),
        item(
            "bicycle",
            "Fahrrad",
            "Bicycle",
            [0.6, 1.75, 1.05],
            [
                C(0, 0.3, 0.05, 0.38, 0, 0.66, "dark", axis="z"),
                C(0, -0.3, 0.05, 0.38, 0, 0.66, "dark", axis="z"),
                L(0, 0, 0.05, 0.5, 0.33, 0.3, "accent", tz=0.05, td=0.3),
                C(0, -0.12, 0.04, 0.04, 0.6, 0.3, "metal"),
                B(0, -0.12, 0.2, 0.15, 0.9, 0.04, "dark"),
                B(0, 0.27, 0.9, 0.04, 0.95, 0.03, "metal"),
            ],
            vehicle=True,
        ),
        item(
            "ebike",
            "E-Bike",
            "E-bike",
            [0.65, 1.85, 1.1],
            [
                C(0, 0.3, 0.06, 0.38, 0, 0.66, "dark", axis="z"),
                C(0, -0.3, 0.06, 0.38, 0, 0.66, "dark", axis="z"),
                L(0, 0, 0.08, 0.5, 0.33, 0.3, "#2b3446", tz=0.05, td=0.3),
                B(0, 0.02, 0.1, 0.25, 0.4, 0.12, "dark", edges="glow"),
                C(0, -0.12, 0.04, 0.04, 0.6, 0.3, "metal"),
                B(0, -0.12, 0.2, 0.15, 0.9, 0.04, "dark"),
                B(0, 0.27, 0.9, 0.04, 0.95, 0.03, "metal"),
            ],
            vehicle=True,
            electric=True,
        ),
        item(
            "motorbike",
            "Motorrad",
            "Motorbike",
            [0.8, 2.1, 1.15],
            [
                C(0, 0.33, 0.15, 0.3, 0, 0.6, "dark", axis="z"),
                C(0, -0.33, 0.18, 0.3, 0, 0.6, "dark", axis="z"),
                L(0, 0, 0.35, 0.55, 0.3, 0.35, "#d1293d", tw=0.3, td=0.4, edges="faint"),
                B(0, -0.15, 0.3, 0.3, 0.62, 0.1, "dark"),
                B(0, 0.3, 0.9, 0.05, 0.9, 0.04, "metal"),
                B(0, 0.42, 0.2, 0.05, 0.55, 0.1, "#ffffff", glow=True),
            ],
            vehicle=True,
        ),
        item(
            "trailer",
            "Anhänger",
            "Trailer",
            [1.5, 3.0, 0.9],
            [
                B(0, -0.1, 1, 0.75, 0.4, 0.45, "metal", edges=True),
                B(0, 0.4, 0.06, 0.3, 0.45, 0.06, "dark"),
                C(-0.52, -0.1, 0.08, 0.2, 0, 0.6, "dark", axis="x"),
                C(0.52, -0.1, 0.08, 0.2, 0, 0.6, "dark", axis="x"),
            ],
            vehicle=True,
        ),
    ],
)

if __name__ == "__main__":
    total = 0
    for p in PACKS:
        (OUT / f"{p['id']}.json").write_text(json.dumps(p, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
        total += len(p["items"])
        print(f"{p['id']}: {len(p['items'])} Möbel")
    print(f"{len(PACKS)} Packs, {total} Möbel")
