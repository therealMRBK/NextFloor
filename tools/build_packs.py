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


# ------------------------------------------------------------------ Tesla (Maße in Metern)
def curve(keys, smooth=True):
    """A function through the (x, y) keys: smooth (monotone cubic, no overshoot) or straight between them."""
    xs = [k[0] for k in keys]
    ys = [k[1] for k in keys]
    n = len(xs)
    d = [(ys[i + 1] - ys[i]) / (xs[i + 1] - xs[i]) for i in range(n - 1)]
    m = (
        [d[0]]
        + [0.0 if d[i - 1] * d[i] <= 0 else 2 * d[i - 1] * d[i] / (d[i - 1] + d[i]) for i in range(1, n - 1)]
        + [d[-1]]
    )

    def f(x):
        x = min(xs[-1], max(xs[0], x))
        i = max(0, min(n - 2, next((j for j in range(n - 1) if x <= xs[j + 1]), n - 2)))
        h = xs[i + 1] - xs[i]
        t = (x - xs[i]) / h
        if not smooth:
            return ys[i] + (ys[i + 1] - ys[i]) * t
        h00, h10, h01, h11 = 2 * t**3 - 3 * t**2 + 1, t**3 - 2 * t**2 + t, -2 * t**3 + 3 * t**2, t**3 - t**2
        return h00 * ys[i] + h10 * h * m[i] + h01 * ys[i + 1] + h11 * h * m[i + 1]

    return f


class Metric:
    """Builds parts in metres from the item's centre: x across, z in depth (front at +z), y up from the floor."""

    def __init__(self, width, depth, height):
        self.W, self.D, self.H = width, depth, height

    def size(self):
        return [self.W, self.D, self.H]

    def box(self, x, z, w, d, y0, y1, color, **kw):
        return B(x / self.W, z / self.D, w / self.W, d / self.D, y0 / self.H, (y1 - y0) / self.H, color, **kw)

    def loft(self, x, z, w, d, y0, y1, color, tw=None, td=None, tx=None, tz=None, **kw):
        return L(
            x / self.W,
            z / self.D,
            w / self.W,
            d / self.D,
            y0 / self.H,
            (y1 - y0) / self.H,
            color,
            tw=(w if tw is None else tw) / self.W,
            td=(d if td is None else td) / self.D,
            tx=(x if tx is None else tx) / self.W,
            tz=(z if tz is None else tz) / self.D,
            **kw,
        )

    def cyl(self, x, z, dia, y0, y1, color, **kw):
        return C(x / self.W, z / self.D, dia / self.W, dia / self.D, y0 / self.H, (y1 - y0) / self.H, color, **kw)


class Car(Metric):
    """A vehicle: length along z, front at +z."""

    def __init__(self, length, width, height):
        super().__init__(width, length, height)
        self.L = length

    def body(
        self, z0, z1, bottom, top, half_width, color, steps=22, exp=2.6, n=16, smooth=True, edges=False, paint=False
    ):
        """A smooth body from z0 to z1. bottom, top and half_width are (z, value) keys in metres."""
        fb, ft, fw = curve(bottom, smooth), curve(top, smooth), curve(half_width, smooth)
        zs = [z0 + (z1 - z0) * i / (steps - 1) for i in range(steps)]
        stations = [
            [
                round(z / self.L, 4),
                round(min(1.0, max(0.0, fb(z) / self.H)), 4),
                round(min(1.0, max(fb(z) + 0.02, ft(z)) / self.H), 4),
                round(min(1.0, 2 * fw(z) / self.W), 4),
            ]
            for z in zs
        ]
        part = {
            "shape": "sweep",
            "x": 0,
            "z": round((z0 + z1) / 2 / self.L, 4),
            "w": max(st[3] for st in stations),
            "d": round(abs(z1 - z0) / self.L, 4),
            "y": min(st[1] for st in stations),
            "h": round(max(st[2] for st in stations) - min(st[1] for st in stations), 4),
            "color": color,
            "stations": stations,
            "exp": exp,
            "n": n,
        }
        if edges:
            part["edges"] = True
        if paint:
            part["paint"] = True
        return part

    def wheels(self, axles, dia, thick, dual=False):
        """Tyre and rim on both sides of every axle (z in metres); the tyres stand a little outside the body."""
        parts = []
        for z in axles:
            for sx in (-1, 1):
                for k in (0, 1) if dual else (0,):
                    x = sx * (self.W / 2 - thick / 2 + 0.06 - k * (thick + 0.03))
                    parts.append(
                        C(x / self.W, z / self.L, thick / self.W, dia / self.L, 0, dia / self.H, "#15171a", axis="x")
                    )
                    parts.append(
                        C(
                            (x + sx * (thick / 2 - 0.01)) / self.W,
                            z / self.L,
                            0.04 / self.W,
                            dia * 0.62 / self.L,
                            dia * 0.19 / self.H,
                            dia * 0.62 / self.H,
                            "#aeb6c0",
                            axis="x",
                        )
                    )
        return parts

    def lights(self, y_front, y_rear, width_front, width_rear, h=0.05):
        """A white light strip at the front and a red one at the back."""
        return [
            self.box(0, self.L / 2 - 0.01, width_front, 0.02, y_front, y_front + h, "#ffffff", glow=True),
            self.box(0, -self.L / 2 + 0.01, width_rear, 0.02, y_rear, y_rear + h, "#ff2b2b", glow=True),
        ]


GLASS = "glass"
STEEL = "#c5cad1"
WHITE = "#eceff3"


def tesla_sedan(
    L, W, H, color, wheelbase, front_over, dia, belt, nose, tail, cab_front, cab_back, roof_a, roof_b, tail_drop
):
    """Model S, 3, Y, X and the Roadster: a smooth body and a glass cabin with a glass roof, on four wheels.

    cab_front / cab_back: z of the windshield's and the rear window's base; the roof is flat between roof_a (front) and
    roof_b (rear); tail_drop is how high the rear window ends above the belt line.
    """
    c = Car(L, W, H)
    z_front = L / 2 - front_over
    z_rear = z_front - wheelbase
    ride = 0.15
    end = 0.55
    bottom = [(-L / 2, ride + 0.22), (-L / 2 + end, ride), (L / 2 - end, ride), (L / 2, ride + 0.2)]
    top = [
        (-L / 2, tail),
        (-L / 2 + 0.25, belt - 0.02),
        (cab_back, belt),
        (cab_front, belt),
        (cab_front + 0.55, belt - 0.04),
        (L / 2 - 0.35, nose + 0.1),
        (L / 2, nose),
    ]
    half = [
        (-L / 2, W * 0.36),
        (-L / 2 + 0.45, W * 0.47),
        (-L / 2 + 1.1, W * 0.495),
        (L / 2 - 1.1, W * 0.495),
        (L / 2 - 0.45, W * 0.47),
        (L / 2, W * 0.38),
    ]
    cabin_top = [
        (cab_back - 0.05, belt + tail_drop),
        (roof_b, H - 0.02),
        (roof_a, H),
        (cab_front - 0.3, H - 0.2),
        (cab_front + 0.1, belt + 0.02),
    ]
    cabin_half = [
        (cab_back - 0.05, W * 0.36),
        (cab_back + 0.35, W * 0.44),
        (cab_front - 0.4, W * 0.44),
        (cab_front + 0.1, W * 0.38),
    ]
    return c, [
        c.body(-L / 2 + 0.01, L / 2 - 0.01, bottom, top, half, color, edges=True, paint=True),
        c.body(
            cab_back - 0.05,
            cab_front + 0.1,
            [(cab_back - 0.1, belt - 0.25), (cab_front + 0.1, belt - 0.25)],
            cabin_top,
            cabin_half,
            GLASS,
            steps=16,
            exp=3.0,
        ),
        *c.wheels([z_front, z_rear], dia, 0.25),
        *c.lights(belt - 0.36, belt - 0.3, W * 0.78, W * 0.8),
    ]


def tesla_cybertruck():
    c = Car(5.68, 2.03, 1.79)
    L = 5.68
    ride = 0.3
    # one straight wedge: from the nose up to the roof in a line, a short drop behind the cab, the flat bed
    top = [(-L / 2, 1.32), (-1.0, 1.35), (-0.4, 1.79), (0.4, 1.79), (L / 2, 0.95)]
    half = [(-L / 2, 0.98), (-1.0, 1.0), (1.0, 1.0), (L / 2, 0.9)]
    # the glass runs over the whole front slope and the roof, a little above the steel so it shows
    cab_top = [(-0.4, 1.81), (0.4, 1.81), (1.75, 1.36)]
    return c, [
        c.body(
            -L / 2 + 0.01,
            L / 2 - 0.01,
            [(-L / 2, ride), (L / 2, ride)],
            top,
            half,
            STEEL,
            steps=10,
            exp=6,
            n=12,
            smooth=False,
            edges=True,
            paint=True,
        ),
        c.body(
            -0.4,
            1.75,
            [(-0.4, 1.1), (1.75, 1.1)],
            cab_top,
            [(-0.4, 0.8), (1.75, 0.78)],
            GLASS,
            steps=8,
            exp=5,
            n=12,
            smooth=False,
        ),
        *c.wheels([1.77, -1.78], 0.88, 0.27),
        c.box(0, L / 2 - 0.01, 1.7, 0.02, 1.0, 1.05, "#ffffff", glow=True),
        c.box(0, -L / 2 + 0.01, 1.8, 0.02, 1.15, 1.2, "#ff2b2b", glow=True),
    ]


def tesla_semi():
    c = Car(7.2, 2.55, 3.7)
    L = 7.2
    cab_top = [(0.0, 3.55), (1.1, 3.7), (2.3, 3.45), (3.1, 2.55), (3.6, 1.55)]
    cab_half = [(0.0, 1.2), (1.5, 1.25), (3.0, 1.22), (3.6, 0.95)]
    return c, [
        c.box(0, -0.7, 1.1, 5.6, 0.55, 0.95, "#2b2f36"),
        c.body(
            0.0, 3.6, [(0.0, 0.85), (3.6, 0.85)], cab_top, cab_half, WHITE, steps=14, exp=4.5, edges=True, paint=True
        ),
        c.body(
            1.9,
            3.35,
            [(1.9, 2.0), (3.35, 1.6)],
            [(1.9, 3.45), (2.5, 3.5), (3.35, 2.1)],
            [(1.9, 1.0), (3.35, 0.8)],
            GLASS,
            steps=8,
            exp=4,
        ),
        c.box(0, -1.4, 1.0, 1.0, 0.95, 1.05, "#1b1d21"),
        *c.wheels([2.4], 1.0, 0.3),
        *c.wheels([-1.3, -2.55], 1.0, 0.3, dual=True),
        c.box(0, L / 2 - 0.01, 1.9, 0.02, 0.95, 1.0, "#ffffff", glow=True),
    ]


def colorway(id_, de, en, hex_):
    return {"id": id_, "name": {"de": de, "en": en}, "hex": hex_}


# the paints Tesla offers (rounded to what shows well in the 3D view); the first one of a list is the default
PAINT = {
    "white": colorway("pearl_white", "Perlweiß", "Pearl White", "#f1f2f1"),
    "black": colorway("solid_black", "Tiefschwarz", "Solid Black", "#25272b"),
    "midnight": colorway("midnight_silver", "Mitternachtssilber", "Midnight Silver", "#565d66"),
    "stealth": colorway("stealth_grey", "Stealth-Grau", "Stealth Grey", "#6e7279"),
    "quicksilver": colorway("quicksilver", "Quicksilber", "Quicksilver", "#b9bec4"),
    "blue": colorway("deep_blue", "Tiefblau", "Deep Blue", "#264580"),
    "red": colorway("red", "Rot Multi-Coat", "Red Multi-Coat", "#b3202c"),
    "ultrared": colorway("ultra_red", "Ultrarot", "Ultra Red", "#c1121f"),
    "cherry": colorway("midnight_cherry", "Mitternachtskirsch", "Midnight Cherry Red", "#5e0f1d"),
    "steel": colorway("stainless", "Edelstahl", "Stainless Steel", "#c5cad1"),
    "wrap_black": colorway("wrap_black", "Folie Satinschwarz", "Satin Black wrap", "#1e1f22"),
    "wrap_white": colorway("wrap_white", "Folie Satinweiß", "Satin White wrap", "#e6e8ea"),
    "wrap_grey": colorway("wrap_grey", "Folie Satingrau", "Satin Grey wrap", "#4b4f56"),
    "wrap_blue": colorway("wrap_blue", "Folie Satinblau", "Satin Blue wrap", "#2c4a7a"),
}


def paints(*names):
    return [PAINT[n] for n in names]


def tesla_items():
    out = []
    models = [
        (
            "tesla_model_s",
            "Tesla Model S",
            tesla_sedan(4.98, 1.96, 1.44, "#f4f5f7", 2.96, 0.93, 0.70, 0.98, 0.62, 0.9, 0.95, -1.45, 0.1, -0.75, 0.18),
        ),
        (
            "tesla_model_3",
            "Tesla Model 3",
            tesla_sedan(4.72, 1.85, 1.44, "#b3202c", 2.875, 0.85, 0.68, 0.95, 0.6, 0.95, 0.8, -1.35, 0.0, -0.8, 0.15),
        ),
        (
            "tesla_model_x",
            "Tesla Model X",
            tesla_sedan(5.04, 2.0, 1.68, "#263b73", 2.96, 0.95, 0.74, 1.08, 0.7, 1.08, 0.85, -1.9, 0.25, -1.4, 0.2),
        ),
        (
            "tesla_model_y",
            "Tesla Model Y",
            tesla_sedan(4.75, 1.92, 1.62, "#8d95a1", 2.89, 0.9, 0.72, 1.02, 0.66, 1.02, 0.82, -1.65, 0.15, -1.1, 0.25),
        ),
        ("tesla_cybertruck", "Tesla Cybertruck", tesla_cybertruck()),
        (
            "tesla_roadster",
            "Tesla Roadster",
            tesla_sedan(4.4, 1.98, 1.12, "#1f4fbf", 2.65, 0.85, 0.66, 0.74, 0.5, 0.78, 0.7, -0.85, -0.05, -0.5, 0.08),
        ),
        ("tesla_semi", "Tesla Semi", tesla_semi()),
    ]
    colors = {
        "tesla_model_s": paints("white", "black", "midnight", "quicksilver", "blue", "ultrared", "cherry"),
        "tesla_model_3": paints("red", "white", "black", "midnight", "stealth", "blue", "quicksilver"),
        "tesla_model_x": paints("blue", "white", "black", "midnight", "quicksilver", "red", "ultrared"),
        "tesla_model_y": paints("quicksilver", "white", "black", "stealth", "blue", "ultrared", "midnight"),
        "tesla_cybertruck": paints("steel", "wrap_black", "wrap_white", "wrap_grey", "wrap_blue"),
        "tesla_roadster": paints("blue", "ultrared", "white", "black", "quicksilver"),
        "tesla_semi": paints("white", "black", "red", "blue", "stealth"),
    }
    for id_, name, (car, parts) in models:
        for part in parts:
            if part.get("paint"):
                part["color"] = colors[id_][0]["hex"]
        out.append(item(id_, name, name, car.size(), parts, vehicle=True, electric=True, colors=colors[id_]))
    return out


# ------------------------------------------------------------------ Fahrzeuge
pack(
    "nextfloor.fahrzeuge",
    "Fahrzeuge",
    "Tesla Model S, 3, X, Y, Cybertruck, Roadster und Semi, Elektro-SUV, Kleinwagen, Kombi, Fahrrad, E-Bike, "
    "Motorrad, Anhänger - für Stellplätze",
    [
        *tesla_items(),
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

# ------------------------------------------------------------------ IKEA-Maße
# Popular flat-pack furniture in its published outer dimensions, rebuilt from boxes. These are our own simple models of
# the sizes, not IKEA's designs or files; the names only say which size is meant.
I_WHITE = "#f0f0ec"
I_OAK = "#cfae74"
I_BLACKBROWN = "#2e2926"
I_GREY = "#6f737b"
I_PINE = "#dbb883"
I_BACK = "#d8d8d3"
I_PLINTH = "#cdccc6"


def i_bookcase(w, d, h, shelves, color=I_WHITE):
    m, t = Metric(w, d, h), 0.02
    parts = [
        m.box(0, -d / 2 + 0.004, w, 0.008, 0, h, I_BACK),
        m.box(-w / 2 + t / 2, 0, t, d, 0, h, color, edges=True),
        m.box(w / 2 - t / 2, 0, t, d, 0, h, color, edges=True),
        m.box(0, 0, w - 2 * t, d - 0.01, h - t, h, color),
        m.box(0, 0, w - 2 * t, d - 0.02, 0.02, 0.02 + t, color),
    ]
    for k in range(1, shelves + 1):
        y = k * h / (shelves + 1)
        parts.append(m.box(0, 0, w - 2 * t, d - 0.02, y - t / 2, y + t / 2, color))
    return m, parts


def i_cubes(cols, rows, w, d, h, color=I_WHITE):
    """A grid of square cells: outer frame, dividers, thin back."""
    m, t = Metric(w, d, h), 0.025
    parts = [
        m.box(0, -d / 2 + 0.004, w, 0.008, 0, h, I_BACK),
        m.box(-w / 2 + t / 2, 0, t, d, 0, h, color, edges=True),
        m.box(w / 2 - t / 2, 0, t, d, 0, h, color, edges=True),
        m.box(0, 0, w - 2 * t, d, 0, t, color),
        m.box(0, 0, w - 2 * t, d, h - t, h, color),
    ]
    cell_w = (w - (cols + 1) * t) / cols
    cell_h = (h - (rows + 1) * t) / rows
    for c in range(1, cols):
        parts.append(m.box(-w / 2 + t + c * cell_w + (c - 0.5) * t, 0, t, d - 0.01, t, h - t, color))
    for r in range(1, rows):
        y = t + r * cell_h + (r - 0.5) * t
        parts.append(m.box(0, 0, w - 2 * t, d - 0.01, y - t / 2, y + t / 2, color))
    return m, parts


def i_chest(w, d, h, cols, rows, color=I_WHITE):
    m = Metric(w, d, h)
    parts = [
        m.box(0, 0, w - 0.02, d - 0.04, 0, 0.08, I_PLINTH),
        m.box(0, 0, w, d, 0.08, h - 0.02, color, edges=True),
        m.box(0, 0, w + 0.01, d + 0.01, h - 0.02, h, color),
    ]
    fw = (w - 0.04) / cols
    fh = (h - 0.12) / rows
    for c in range(cols):
        for r in range(rows):
            x = -w / 2 + 0.02 + fw * (c + 0.5)
            y0 = 0.09 + fh * r
            parts.append(m.box(x, d / 2 - 0.004, fw - 0.008, 0.024, y0, y0 + fh - 0.008, color, edges="faint"))
            parts.append(m.box(x, d / 2 + 0.012, 0.09, 0.012, y0 + fh - 0.05, y0 + fh - 0.04, "#9c9a93"))
    return m, parts


def i_wardrobe(w, d, h, doors):
    m = Metric(w, d, h)
    parts = [m.box(0, 0, w - 0.04, d - 0.05, 0, 0.1, I_PLINTH), m.box(0, 0, w, d - 0.02, 0.1, h, I_WHITE, edges=True)]
    dw = w / doors
    for k in range(doors):
        x = -w / 2 + dw * (k + 0.5)
        parts.append(m.box(x, d / 2 - 0.012, dw - 0.006, 0.02, 0.1, h - 0.02, I_WHITE, edges="faint"))
        side = 1 if k % 2 == 0 else -1
        parts.append(m.box(x + side * (dw / 2 - 0.05), d / 2 + 0.012, 0.012, 0.025, 1.0, 1.45, "#a7a5a0"))
    return m, parts


def i_sofa(w, color=I_GREY):
    d, h = 0.88, 0.88
    m = Metric(w, d, h)
    arm = 0.18
    inner = w - 2 * arm
    seats = 3 if w > 2 else 2
    parts = [
        *[
            m.box(sx * (w / 2 - 0.06), sz * (d / 2 - 0.06), 0.04, 0.04, 0, 0.1, "#3a3a3a")
            for sx in (-1, 1)
            for sz in (-1, 1)
        ],
        m.box(0, 0, w, d, 0.1, 0.4, color, edges=True),
        m.box(-w / 2 + arm / 2, 0, arm, d, 0.1, 0.66, color, edges=True),
        m.box(w / 2 - arm / 2, 0, arm, d, 0.1, 0.66, color, edges=True),
        m.box(0, -d / 2 + 0.1, inner, 0.2, 0.4, 0.86, color),
    ]
    sw = inner / seats
    for k in range(seats):
        x = -inner / 2 + sw * (k + 0.5)
        parts.append(m.box(x, 0.08, sw - 0.012, d - 0.26, 0.4, 0.5, color, edges="faint"))
        parts.append(m.loft(x, -0.2, sw - 0.012, 0.16, 0.5, 0.82, color, tw=sw - 0.05, td=0.1, tz=-0.26))
    return m, parts


def i_bed(w):
    d, h = 2.09, 1.0
    m = Metric(w, d, h)
    inner = w - 0.16
    return m, [
        m.box(0, 0, w - 0.02, d - 0.08, 0, 0.12, I_PLINTH),
        m.box(-w / 2 + 0.03, 0, 0.06, d - 0.04, 0.12, 0.38, I_WHITE, edges=True),
        m.box(w / 2 - 0.03, 0, 0.06, d - 0.04, 0.12, 0.38, I_WHITE, edges=True),
        m.box(0, d / 2 - 0.03, w, 0.06, 0.12, 0.38, I_WHITE, edges=True),
        m.box(0, -d / 2 + 0.03, w, 0.06, 0, h, I_WHITE, edges=True),
        m.box(0, 0.02, inner, 2.0, 0.34, 0.6, "#e7e8ee", edges="faint"),
        m.box(0, 0.35, inner - 0.04, 1.4, 0.6, 0.67, "#cfd6e4"),
        m.box(-inner / 4, -d / 2 + 0.35, inner / 2 - 0.1, 0.4, 0.6, 0.72, "#f4f4f6"),
        m.box(inner / 4, -d / 2 + 0.35, inner / 2 - 0.1, 0.4, 0.6, 0.72, "#f4f4f6"),
    ]


def i_table(w, d, h, shelf=False):
    m = Metric(w, d, h)
    parts = [m.box(0, 0, w, d, h - 0.055, h, I_BLACKBROWN, edges=True)]
    parts += [
        m.box(sx * (w / 2 - 0.05), sz * (d / 2 - 0.05), 0.05, 0.05, 0, h - 0.055, I_BLACKBROWN)
        for sx in (-1, 1)
        for sz in (-1, 1)
    ]
    if shelf:
        parts.append(m.box(0, 0, w - 0.12, d - 0.12, 0.1, 0.12, I_BLACKBROWN))
    return m, parts


def i_armchair():
    m = Metric(0.68, 0.82, 1.0)
    birch = "#d8b98a"
    return m, [
        *[m.box(sx * 0.3, 0, 0.04, 0.82, 0, 0.04, birch) for sx in (-1, 1)],
        *[m.box(sx * 0.3, 0.05, 0.04, 0.5, 0.45, 0.49, birch) for sx in (-1, 1)],
        *[m.box(sx * 0.3, z, 0.04, 0.04, 0.04, 0.45, birch) for sx in (-1, 1) for z in (0.28, -0.1)],
        *[m.box(sx * 0.3, -0.32, 0.04, 0.05, 0.04, 1.0, birch) for sx in (-1, 1)],
        m.loft(0, 0.02, 0.58, 0.6, 0.3, 0.42, I_GREY, tw=0.55, td=0.57, edges="faint"),
        m.loft(0, -0.27, 0.58, 0.16, 0.42, 0.98, I_GREY, tw=0.5, td=0.1, tz=-0.33, edges="faint"),
    ]


def i_desk():
    m = Metric(1.6, 0.8, 0.75)
    return m, [
        m.box(0, 0, 1.6, 0.8, 0.725, 0.75, "#f2f2ee", edges=True),
        *[m.box(sx * 0.7, 0, 0.05, 0.72, 0.04, 0.725, "#2a2a2a") for sx in (-1, 1)],
        *[m.box(sx * 0.7, 0, 0.06, 0.74, 0, 0.04, "#2a2a2a") for sx in (-1, 1)],
        m.box(0, -0.3, 1.34, 0.04, 0.55, 0.62, "#2a2a2a"),
    ]


def i_drawer_unit():
    m = Metric(0.36, 0.58, 0.70)
    parts = [m.box(0, 0, 0.36, 0.58, 0.05, 0.7, I_WHITE, edges=True), m.box(0, 0, 0.32, 0.54, 0, 0.05, I_PLINTH)]
    for k in range(5):
        y0 = 0.065 + k * 0.125
        parts.append(m.box(0, 0.285, 0.34, 0.02, y0, y0 + 0.118, I_WHITE, edges="faint"))
        parts.append(m.box(0, 0.30, 0.1, 0.012, y0 + 0.08, y0 + 0.09, "#a7a5a0"))
    return m, parts


def i_tv_bench():
    m = Metric(1.8, 0.42, 0.38)
    parts = [
        *[m.box(sx * 0.84, sz * 0.17, 0.05, 0.05, 0, 0.06, "#3a3a3a") for sx in (-1, 1) for sz in (-1, 1)],
        m.box(0, 0, 1.8, 0.42, 0.06, 0.38, I_WHITE, edges=True),
    ]
    for k in range(2):
        x = -0.45 + k * 0.9
        parts.append(m.box(x, 0.205, 0.89, 0.02, 0.07, 0.37, I_WHITE, edges="faint"))
        parts.append(m.box(x + (0.4 if k == 0 else -0.4), 0.22, 0.012, 0.02, 0.19, 0.26, "#a7a5a0"))
    return m, parts


def i_open_shelf():
    m = Metric(0.89, 0.30, 1.79)
    parts = [
        m.box(sx * 0.4, sz * 0.12, 0.034, 0.034, 0, 1.79, I_PINE, edges="faint") for sx in (-1, 1) for sz in (-1, 1)
    ]
    for y in (0.05, 0.4, 0.75, 1.1, 1.45, 1.76):
        parts.append(m.box(0, 0, 0.89, 0.3, y - 0.012, y + 0.012, I_PINE, edges="faint"))
    parts.append(m.box(0, -0.13, 0.8, 0.012, 0.05, 1.7, "#c9a46f"))
    return m, parts


def ikea_items():
    entries = [
        ("billy", "Regal 80x202 (Billy-Maß)", "Bookcase 80x202 (Billy size)", i_bookcase(0.80, 0.28, 2.02, 5)),
        ("billy_low", "Regal 80x106 (Billy-Maß)", "Bookcase 80x106 (Billy size)", i_bookcase(0.80, 0.28, 1.06, 2)),
        ("kallax_2x2", "Würfelregal 2x2 (Kallax-Maß)", "Cube shelf 2x2 (Kallax size)", i_cubes(2, 2, 0.77, 0.39, 0.77)),
        ("kallax_2x4", "Würfelregal 2x4 (Kallax-Maß)", "Cube shelf 2x4 (Kallax size)", i_cubes(2, 4, 0.77, 0.39, 1.47)),
        ("kallax_4x4", "Würfelregal 4x4 (Kallax-Maß)", "Cube shelf 4x4 (Kallax size)", i_cubes(4, 4, 1.47, 0.39, 1.47)),
        ("lack_side", "Beistelltisch 55x55 (Lack-Maß)", "Side table 55x55 (Lack size)", i_table(0.55, 0.55, 0.45)),
        (
            "lack_coffee",
            "Couchtisch 90x55 (Lack-Maß)",
            "Coffee table 90x55 (Lack size)",
            i_table(0.90, 0.55, 0.45, True),
        ),
        ("malm_bed_140", "Bett 140x200 (Malm-Maß)", "Bed 140x200 (Malm size)", i_bed(1.56)),
        ("malm_bed_160", "Bett 160x200 (Malm-Maß)", "Bed 160x200 (Malm size)", i_bed(1.76)),
        (
            "malm_chest_6",
            "Kommode 6 Schubladen (Malm-Maß)",
            "Chest of 6 drawers (Malm size)",
            i_chest(1.60, 0.48, 0.78, 2, 3),
        ),
        (
            "malm_chest_4",
            "Kommode 4 Schubladen (Malm-Maß)",
            "Chest of 4 drawers (Malm size)",
            i_chest(0.80, 0.48, 1.00, 1, 4),
        ),
        ("pax_100", "Kleiderschrank 100x236 (Pax-Maß)", "Wardrobe 100x236 (Pax size)", i_wardrobe(1.00, 0.58, 2.36, 2)),
        ("pax_150", "Kleiderschrank 150x236 (Pax-Maß)", "Wardrobe 150x236 (Pax size)", i_wardrobe(1.50, 0.58, 2.36, 3)),
        ("poang", "Sessel (Poäng-Maß)", "Armchair (Poäng size)", i_armchair()),
        ("ektorp_2", "Sofa 2-Sitzer (Ektorp-Maß)", "2-seat sofa (Ektorp size)", i_sofa(1.63)),
        ("ektorp_3", "Sofa 3-Sitzer (Ektorp-Maß)", "3-seat sofa (Ektorp size)", i_sofa(2.18)),
        ("bekant", "Schreibtisch 160x80 (Bekant-Maß)", "Desk 160x80 (Bekant size)", i_desk()),
        ("alex", "Schubladenelement (Alex-Maß)", "Drawer unit (Alex size)", i_drawer_unit()),
        ("besta_tv", "TV-Bank 180x42 (Bestå-Maß)", "TV bench 180x42 (Bestå size)", i_tv_bench()),
        ("ivar", "Regal 89x179 aus Kiefer (Ivar-Maß)", "Pine shelf 89x179 (Ivar size)", i_open_shelf()),
    ]
    out = []
    for id_, de, en, (m, parts) in entries:
        extra = {"surface": True} if id_ in ("lack_side", "lack_coffee", "bekant", "besta_tv") else {}
        out.append(item(id_, de, en, [round(v, 3) for v in m.size()], parts, **extra))
    return out


pack(
    "nextfloor.ikea",
    "IKEA-Maße",
    "Beliebte Möbel in den Originalmaßen, nachgebaut aus einfachen Formen (nicht von IKEA): "
    "Regale, Betten, Sofas, Schränke",
    ikea_items(),
)

if __name__ == "__main__":
    total = 0
    for p in PACKS:
        (OUT / f"{p['id']}.json").write_text(json.dumps(p, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
        total += len(p["items"])
        print(f"{p['id']}: {len(p['items'])} Möbel")
    print(f"{len(PACKS)} Packs, {total} Möbel")
