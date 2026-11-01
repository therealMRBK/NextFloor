"""The expansion packs: Living & decoration (seasons, frames, plants, music, Japandi and loft), Smart home & tech 2,
Kitchen & bath 2 and Garden & wellness. Parts are written in metres around the item's centre (see area_common.py)."""

from area_common import make

LEAF = "#3f7a4a"
LEAF_DARK = "#2f5f3a"
LEAF_LIGHT = "#5c9a52"
BARK = "#5b4330"
STONE = "#8a8f98"
WATER = "#2f7fa8"
WARM = "#ffb347"
OAK = "#b98d5a"
WALNUT = "#6b4a32"
WHITE = "#e8ecf2"
BLACK = "#1b1f27"
RED = "#b5323b"
GOLD = "#d8b84a"
SAND = "#e2cf9a"
TERRACOTTA = "#b8653f"
RATTAN = "#c8a46a"
STEEL = "#9aa3b0"


def _pack(bp):
    """A small helper bound to the pack builder: add(id, de, en, size, parts, **flags)."""
    items = []

    def add(id_, de, en, size, fn, **kw):
        items.append(make(bp, id_, de, en, size, fn, **kw))

    return items, add


# ------------------------------------------------------------------ shared shapes


def tree_round(m, crown, trunk_h, color=LEAF, trunk=BARK):
    """A deciduous tree: trunk and a crown of three stacked discs, getting narrower towards the top."""
    r = min(m.w, m.d)
    return [
        m.c(0, 0, r * 0.1, r * 0.1, 0, trunk_h + 0.2, trunk),
        m.c(0, 0, r * 0.85, r * 0.85, trunk_h, crown * 0.45, color, edges="faint"),
        m.c(0, 0, r, r, trunk_h + crown * 0.2, crown * 0.45, color),
        m.c(0, 0, r * 0.7, r * 0.7, trunk_h + crown * 0.6, crown * 0.4, color),
    ]


def plant_pot(m, pot_h, pot_w, color=TERRACOTTA):
    return [m.l(0, 0, pot_w * 0.8, pot_w * 0.8, 0, pot_h, color, tw=pot_w, td=pot_w, edges="faint")]


def frame(m, border_color, picture_color, inset=0.04):
    """A picture on the wall: frame, mat and the picture itself (thin along the depth)."""
    return [
        m.b(0, 0, m.w, m.d, 0, m.h, border_color, edges="faint"),
        m.b(0, m.d / 2 - 0.002, m.w - inset * 2, 0.004, inset, m.h - inset * 2, WHITE),
        m.b(0, m.d / 2, m.w - inset * 3, 0.004, inset * 1.5, m.h - inset * 3, picture_color),
    ]


# ------------------------------------------------------------------ Wohnen & Deko


def deco(bp):
    items, add = _pack(bp)

    # the seasons
    add(
        "xmas_tree",
        "Weihnachtsbaum mit Lichterkette",
        "Christmas tree with fairy lights",
        (1.2, 1.2, 2.1),
        lambda m: [
            m.l(0, 0, 0.38, 0.38, 0, 0.28, RED, tw=0.32, td=0.32),
            m.c(0, 0, 0.06, 0.06, 0.28, 0.2, BARK),
            *[m.l(0, 0, w, w, y, 0.55, LEAF_DARK, tw=0.12, td=0.12, edges="faint") for w, y in ((1.2, 0.4), (0.95, 0.85), (0.7, 1.25))],
            m.l(0, 0, 0.45, 0.45, 1.6, 0.4, LEAF_DARK, tw=0.04, td=0.04),
            m.c(0, 0, 0.1, 0.1, 1.98, 0.12, GOLD, glow=True),
            *[m.c(x, z, 0.05, 0.05, y, 0.05, WARM, glow=True) for x, z, y in ((0.4, 0.2, 0.55), (-0.35, 0.3, 0.6), (0.1, -0.45, 0.65), (0.3, -0.1, 1.0), (-0.3, -0.2, 1.05), (0.0, 0.32, 1.1), (0.18, 0.12, 1.45), (-0.18, -0.05, 1.5), (0.05, 0.15, 1.75))],
            *[m.c(x, z, 0.07, 0.07, y, 0.07, c) for x, z, y, c in ((0.25, 0.35, 0.75, RED), (-0.42, -0.1, 0.7, GOLD), (0.33, -0.3, 1.15, RED), (-0.2, 0.25, 1.35, GOLD))],
            *[m.b(x, z, 0.3, 0.3, 0, 0.2, c, edges="faint") for x, z, c in ((0.42, 0.38, RED), (-0.38, 0.4, GOLD))],
        ],
        light="floor",
    )
    add(
        "xmas_tree_small",
        "Kleiner Tannenbaum (Tisch)",
        "Small fir tree (tabletop)",
        (0.35, 0.35, 0.6),
        lambda m: [
            m.c(0, 0, 0.18, 0.18, 0, 0.12, WHITE),
            *[m.l(0, 0, w, w, y, 0.2, LEAF_DARK, tw=0.04, td=0.04) for w, y in ((0.35, 0.12), (0.26, 0.27), (0.17, 0.42))],
            m.c(0, 0, 0.04, 0.04, 0.56, 0.04, GOLD, glow=True),
            *[m.c(x, z, 0.025, 0.025, y, 0.025, WARM, glow=True) for x, z, y in ((0.1, 0.05, 0.2), (-0.08, 0.06, 0.32), (0.05, -0.06, 0.45))],
        ],
        mount="surface",
        light="table",
    )
    add(
        "advent_wreath",
        "Adventskranz",
        "Advent wreath",
        (0.4, 0.4, 0.2),
        lambda m: [
            *[m.c(x, z, 0.12, 0.12, 0, 0.06, LEAF_DARK) for x, z in ((0.12, 0), (-0.12, 0), (0, 0.12), (0, -0.12), (0.09, 0.09), (-0.09, 0.09), (0.09, -0.09), (-0.09, -0.09))],
            *[m.c(x, z, 0.05, 0.05, 0.04, 0.1, RED) for x, z in ((0.12, 0), (-0.12, 0), (0, 0.12), (0, -0.12))],
            *[m.c(x, z, 0.015, 0.015, 0.15, 0.04, WARM, glow=True) for x, z in ((0.12, 0), (-0.12, 0), (0, 0.12), (0, -0.12))],
        ],
        mount="surface",
        light="table",
    )
    add(
        "window_star",
        "Leuchtstern fürs Fenster",
        "Window star light",
        (0.5, 0.06, 0.5),
        lambda m: [
            m.b(0, 0, 0.12, 0.04, 0.19, 0.12, WARM, glow=True),
            *[m.b(0, 0, 0.06, 0.04, 0.0, 0.5, WARM, glow=True, rot=a) for a in (0,)],
            m.b(0, 0, 0.5, 0.04, 0.22, 0.06, WARM, glow=True),
            m.b(0, 0, 0.36, 0.04, 0.22, 0.06, WARM, glow=True, rot=45),
            m.b(0, 0, 0.36, 0.04, 0.22, 0.06, WARM, glow=True, rot=-45),
        ],
        mount="wall",
        wall_y=1.3,
        light="wall",
    )
    add(
        "light_chain",
        "Lichterkette (außen)",
        "String lights (outdoor)",
        (4.0, 0.1, 2.4),
        lambda m: [
            m.c(-1.95, 0, 0.06, 0.06, 0, 2.4, "dark"),
            m.c(1.95, 0, 0.06, 0.06, 0, 2.4, "dark"),
            *[m.c(-1.95 + 3.9 * i / 12, 0, 0.06, 0.06, 2.3 - 0.35 * (1 - ((i / 6) - 1) ** 2), 0.07, WARM, glow=True) for i in range(1, 12)],
            *[m.l(-1.95 + 3.9 * (i + 0.5) / 4, 0, 0.98, 0.012, 2.0, 0.34, "dark", tw=0.98, td=0.012) for i in range(4)],
        ],
        light="garden",
    )
    add(
        "pumpkins",
        "Kürbisse (drei)",
        "Pumpkins (three)",
        (0.8, 0.5, 0.35),
        lambda m: [
            m.c(-0.2, 0.05, 0.36, 0.36, 0, 0.3, "#e07b24", edges="faint"),
            m.c(0.18, -0.08, 0.26, 0.26, 0, 0.22, "#e89a3a"),
            m.c(0.3, 0.14, 0.18, 0.18, 0, 0.15, "#f0c060"),
            m.c(-0.2, 0.05, 0.03, 0.03, 0.3, 0.05, LEAF_DARK),
            m.b(-0.2, 0.23, 0.12, 0.01, 0.12, 0.06, WARM, glow=True),
        ],
        light="floor",
    )
    add(
        "easter_bush",
        "Osterstrauß",
        "Easter branches",
        (0.5, 0.5, 1.1),
        lambda m: [
            m.l(0, 0, 0.2, 0.2, 0, 0.35, "glass", tw=0.16, td=0.16),
            *[m.l(x, z, 0.02, 0.02, 0.35, 0.7, BARK, tx=x * 2.2, tz=z * 2.2, tw=0.01, td=0.01) for x, z in ((0.05, 0.02), (-0.04, 0.05), (0.02, -0.06), (-0.06, -0.02))],
            *[m.c(x, z, 0.05, 0.05, y, 0.06, c) for x, z, y, c in ((0.15, 0.04, 0.85, "#f2a7c0"), (-0.12, 0.13, 0.9, "#9fd3f2"), (0.06, -0.16, 0.95, GOLD), (-0.16, -0.06, 0.8, "#b9e29a"))],
        ],
    )
    add(
        "snowman",
        "Schneemann",
        "Snowman",
        (0.6, 0.6, 1.3),
        lambda m: [
            m.c(0, 0, 0.6, 0.6, 0, 0.55, WHITE, edges="faint"),
            m.c(0, 0, 0.44, 0.44, 0.5, 0.42, WHITE),
            m.c(0, 0, 0.3, 0.3, 0.88, 0.3, WHITE),
            m.c(0, 0, 0.26, 0.26, 1.15, 0.03, BLACK),
            m.c(0, 0, 0.18, 0.18, 1.17, 0.13, BLACK),
            m.c(0, 0.2, 0.04, 0.12, 1.0, 0.04, "#e07b24", axis="z"),
            m.b(0, 0.12, 0.32, 0.06, 0.82, 0.06, RED),
        ],
    )
    add(
        "nativity",
        "Weihnachtskrippe",
        "Nativity scene",
        (0.6, 0.35, 0.4),
        lambda m: [
            m.b(0, 0, 0.6, 0.35, 0, 0.03, "wood"),
            m.b(-0.28, -0.05, 0.03, 0.25, 0.03, 0.3, "wood"),
            m.b(0.28, -0.05, 0.03, 0.25, 0.03, 0.3, "wood"),
            m.l(0, -0.05, 0.62, 0.3, 0.32, 0.08, "wood", tw=0.04, td=0.3),
            *[m.c(x, 0.05, 0.06, 0.06, 0.03, h, c) for x, h, c in ((-0.15, 0.16, "#6b7a8a"), (0.15, 0.17, "#8a5a6b"), (0.0, 0.05, SAND))],
            m.c(0, -0.1, 0.04, 0.04, 0.33, 0.04, WARM, glow=True),
        ],
        mount="surface",
        light="table",
    )

    # pictures and wall decoration
    for id_, de, en, w, h, border, pic in (
        ("frame_40x50", "Bilderrahmen 40×50", "Picture frame 40×50", 0.4, 0.5, BLACK, "#5a7fa8"),
        ("frame_50x70", "Bilderrahmen 50×70", "Picture frame 50×70", 0.5, 0.7, OAK, "#a87f5a"),
        ("frame_70x100", "Bild 70×100", "Picture 70×100", 0.7, 1.0, WHITE, "#6b8a5a"),
        ("canvas_120x80", "Leinwandbild 120×80", "Canvas 120×80", 1.2, 0.8, "#2a303c", "#c47a5a"),
        ("frame_square", "Bilderrahmen quadratisch 50×50", "Square frame 50×50", 0.5, 0.5, GOLD, "#7a5aa8"),
    ):
        add(id_, de, en, (w, 0.03, h), lambda m, b=border, p=pic: frame(m, b, p), mount="wall", wall_y=1.3)
    add(
        "gallery_wall",
        "Bilderwand (sechs Rahmen)",
        "Gallery wall (six frames)",
        (1.6, 0.03, 1.1),
        lambda m: [
            *[
                part
                for x, y, w, h, c in ((-0.6, 0.55, 0.35, 0.5, "#5a7fa8"), (-0.15, 0.7, 0.45, 0.35, "#a87f5a"), (0.4, 0.5, 0.6, 0.55, "#6b8a5a"), (-0.6, 0.0, 0.35, 0.45, "#c47a5a"), (-0.1, 0.0, 0.5, 0.6, "#7a5aa8"), (0.45, 0.05, 0.4, 0.35, "#5a8a8a"))
                for part in (m.b(x, 0, w, 0.03, y, h, BLACK, edges="faint"), m.b(x, 0.015, w - 0.06, 0.004, y + 0.03, h - 0.06, c))
            ],
        ],
        mount="wall",
        wall_y=1.0,
    )
    add(
        "wall_clock",
        "Wanduhr",
        "Wall clock",
        (0.4, 0.05, 0.4),
        lambda m: [
            m.c(0, 0, 0.4, 0.05, 0, 0.4, BLACK, axis="z"),
            m.c(0, 0.015, 0.36, 0.03, 0.02, 0.36, WHITE, axis="z"),
            m.b(0, 0.03, 0.015, 0.004, 0.2, 0.14, BLACK),
            m.b(0.05, 0.03, 0.1, 0.004, 0.195, 0.012, BLACK),
        ],
        mount="wall",
        wall_y=1.7,
    )
    add(
        "mirror_round_wall",
        "Spiegel rund",
        "Round mirror",
        (0.8, 0.03, 0.8),
        lambda m: [m.c(0, 0, 0.8, 0.03, 0, 0.8, GOLD, axis="z", edges="faint"), m.c(0, 0.01, 0.74, 0.02, 0.03, 0.74, "glass", axis="z")],
        mount="wall",
        wall_y=1.1,
    )
    add(
        "neon_sign",
        "Neon-Schriftzug",
        "Neon sign",
        (0.8, 0.04, 0.3),
        lambda m: [
            m.b(0, -0.01, 0.8, 0.01, 0, 0.3, "glass"),
            m.b(-0.25, 0.01, 0.2, 0.015, 0.06, 0.18, "#ff4fa3", glow=True),
            m.b(0.0, 0.01, 0.2, 0.015, 0.06, 0.18, "#ff4fa3", glow=True),
            m.b(0.25, 0.01, 0.2, 0.015, 0.06, 0.18, "#ff4fa3", glow=True),
        ],
        mount="wall",
        wall_y=1.6,
        light="wall",
    )
    add(
        "candles",
        "Kerzengruppe",
        "Candle group",
        (0.35, 0.2, 0.3),
        lambda m: [
            m.b(0, 0, 0.35, 0.2, 0, 0.015, "wood"),
            *[m.c(x, z, 0.07, 0.07, 0.015, h, "#f2ead8") for x, z, h in ((-0.1, 0.02, 0.22), (0.02, -0.03, 0.15), (0.12, 0.03, 0.1))],
            *[m.c(x, z, 0.015, 0.015, 0.015 + h, 0.03, WARM, glow=True) for x, z, h in ((-0.1, 0.02, 0.22), (0.02, -0.03, 0.15), (0.12, 0.03, 0.1))],
        ],
        mount="surface",
        light="table",
    )
    add(
        "fruit_bowl",
        "Obstschale",
        "Fruit bowl",
        (0.32, 0.32, 0.14),
        lambda m: [
            m.l(0, 0, 0.18, 0.18, 0, 0.08, "wood", tw=0.32, td=0.32),
            *[m.c(x, z, 0.08, 0.08, 0.05, 0.08, c) for x, z, c in ((-0.06, 0.03, RED), (0.06, -0.02, "#f0c060"), (0.0, -0.07, "#7fbf4a"), (0.02, 0.07, "#e07b24"))],
        ],
        mount="surface",
    )
    add(
        "vase_tall",
        "Bodenvase mit Zweigen",
        "Floor vase with branches",
        (0.35, 0.35, 1.4),
        lambda m: [
            m.l(0, 0, 0.3, 0.3, 0, 0.55, "#c9c2b5", tw=0.14, td=0.14, edges="faint"),
            *[m.l(x, z, 0.015, 0.015, 0.55, 0.85, BARK, tx=x * 3, tz=z * 3, tw=0.01, td=0.01) for x, z in ((0.03, 0.02), (-0.03, 0.03), (0.0, -0.04))],
        ],
    )
    add(
        "globe",
        "Globus",
        "Globe",
        (0.35, 0.35, 0.5),
        lambda m: [m.c(0, 0, 0.18, 0.18, 0, 0.03, "wood"), m.c(0, 0, 0.02, 0.02, 0.03, 0.12, GOLD), m.c(0, 0, 0.32, 0.32, 0.12, 0.32, "#3b7bb5", edges="faint"), m.c(0.05, 0.05, 0.12, 0.12, 0.25, 0.1, LEAF_LIGHT)],
        mount="surface",
    )

    # indoor greenery
    add("ficus", "Birkenfeige", "Weeping fig", (0.7, 0.7, 1.7), lambda m: [*plant_pot(m, 0.35, 0.4), m.c(0, 0, 0.04, 0.04, 0.35, 0.6, BARK), m.c(0, 0, 0.7, 0.7, 0.85, 0.5, LEAF, edges="faint"), m.c(0, 0, 0.5, 0.5, 1.3, 0.4, LEAF)], household="plant")
    add("olive_tree", "Olivenbaum im Topf", "Olive tree in a pot", (0.8, 0.8, 1.8), lambda m: [*plant_pot(m, 0.45, 0.5, "#c9c2b5"), m.c(0, 0, 0.06, 0.06, 0.45, 0.8, BARK), m.c(0, 0, 0.8, 0.8, 1.1, 0.4, "#7f9a6a", edges="faint"), m.c(0, 0, 0.55, 0.55, 1.45, 0.35, "#7f9a6a")], household="plant")
    add("fiddle_leaf", "Geigenfeige", "Fiddle-leaf fig", (0.6, 0.6, 1.6), lambda m: [*plant_pot(m, 0.32, 0.36, WHITE), m.c(0, 0, 0.03, 0.03, 0.32, 1.0, BARK), *[m.b(x, z, 0.22, 0.04, y, 0.26, LEAF_DARK, rot=r) for x, z, y, r in ((0.12, 0, 0.7, 30), (-0.12, 0.05, 0.9, -40), (0.08, -0.1, 1.1, 70), (-0.06, 0.1, 1.25, 10), (0.0, 0.0, 1.35, 90))]], household="plant")
    add("snake_plant", "Bogenhanf", "Snake plant", (0.35, 0.35, 0.8), lambda m: [*plant_pot(m, 0.25, 0.3, BLACK), *[m.l(x, z, 0.06, 0.02, 0.25, 0.5 + 0.05 * i, "#4a7a3a", tw=0.02, td=0.01, rot=i * 37) for i, (x, z) in enumerate(((0.05, 0), (-0.05, 0.03), (0, -0.05), (0.03, 0.06), (-0.06, -0.03)))]], household="plant")
    add("hanging_plant", "Hängepflanze", "Hanging plant", (0.4, 0.4, 0.9), lambda m: [*[m.l(x, z, 0.008, 0.008, 0.45, 0.45, "dark", tx=0, tz=0, tw=0.008, td=0.008) for x, z in ((0.12, 0), (-0.06, 0.1), (-0.06, -0.1))], m.c(0, 0, 0.26, 0.26, 0.3, 0.16, WHITE), m.c(0, 0, 0.38, 0.38, 0.0, 0.42, LEAF, edges="faint")], mount="ceiling", household="plant")
    add("cactus_group", "Kakteen (Gruppe)", "Cactus group", (0.4, 0.25, 0.4), lambda m: [*[part for x, h in ((-0.12, 0.3), (0.02, 0.38), (0.14, 0.22)) for part in (m.c(x, 0, 0.1, 0.1, 0, 0.08, TERRACOTTA), m.c(x, 0, 0.06, 0.06, 0.08, h, "#5c8a4a"))]], mount="surface", household="plant")
    add("palm_indoor", "Zimmerpalme", "Indoor palm", (1.0, 1.0, 1.9), lambda m: [*plant_pot(m, 0.4, 0.45, "#c9c2b5"), m.c(0, 0, 0.05, 0.05, 0.4, 0.9, BARK), *[m.l(0, 0, 0.04, 0.04, 1.2, 0.6, LEAF, tx=x, tz=z, tw=0.32, td=0.12) for x, z in ((0.3, 0), (-0.3, 0), (0, 0.3), (0, -0.3), (0.2, 0.2), (-0.2, -0.2))]], household="plant")
    add("plant_shelf", "Pflanzenleiter", "Plant ladder", (0.7, 0.4, 1.4), lambda m: [m.l(-0.32, 0, 0.04, 0.4, 0, 1.4, "wood", tz=0.15, td=0.04), m.l(0.32, 0, 0.04, 0.4, 0, 1.4, "wood", tz=0.15, td=0.04), *[part for y, z in ((0.3, -0.12), (0.7, 0.0), (1.1, 0.12)) for part in (m.b(0, z, 0.6, 0.16, y, 0.02, "wood"), m.c(-0.15, z, 0.12, 0.12, y + 0.02, 0.1, TERRACOTTA), m.c(-0.15, z, 0.16, 0.16, y + 0.12, 0.1, LEAF), m.c(0.15, z, 0.12, 0.12, y + 0.02, 0.1, WHITE), m.c(0.15, z, 0.14, 0.14, y + 0.12, 0.14, LEAF_LIGHT))]])
    add("moss_wall", "Mooswand", "Moss wall", (1.2, 0.05, 0.8), lambda m: [m.b(0, 0, 1.2, 0.05, 0, 0.8, "wood", edges="faint"), m.b(0, 0.01, 1.12, 0.04, 0.04, 0.72, LEAF), *[m.c(x, 0.02, 0.18, 0.04, y, 0.18, c, axis="z") for x, y, c in ((-0.35, 0.4, LEAF_DARK), (0.1, 0.2, LEAF_LIGHT), (0.4, 0.5, LEAF_DARK))]], mount="wall", wall_y=1.1)
    add("terrarium", "Terrarium", "Terrarium", (0.6, 0.45, 0.6), lambda m: [m.b(0, 0, 0.6, 0.45, 0, 0.08, BLACK), m.b(0, 0, 0.58, 0.43, 0.08, 0.45, "glass", edges="glow"), m.b(0, 0, 0.56, 0.41, 0.08, 0.08, SAND), m.c(-0.15, 0, 0.14, 0.14, 0.16, 0.15, LEAF), m.b(0.12, 0.05, 0.2, 0.12, 0.16, 0.06, STONE), m.b(0, 0, 0.5, 0.35, 0.52, 0.02, WARM, glow=True), m.b(0, 0, 0.6, 0.45, 0.53, 0.07, BLACK)], mount="surface", light="table", electric=True)

    # music and hobby
    add("record_player", "Plattenspieler", "Record player", (0.45, 0.36, 0.14), lambda m: [m.b(0, 0, 0.45, 0.36, 0, 0.09, "wood", edges="faint"), m.c(-0.04, 0, 0.3, 0.3, 0.09, 0.02, BLACK), m.c(-0.04, 0, 0.1, 0.1, 0.11, 0.004, RED), m.b(0.16, -0.02, 0.02, 0.22, 0.1, 0.02, STEEL, rot=12), m.b(0, 0, 0.44, 0.35, 0.12, 0.02, "glass")], mount="surface", electric=True)
    add("vinyl_rack", "Plattenregal", "Record shelf", (1.0, 0.4, 0.8), lambda m: [m.b(0, 0, 1.0, 0.4, 0, 0.8, "wood", edges="faint"), *[m.b(x, 0.18, 0.47, 0.02, y, 0.36, BLACK) for x in (-0.25, 0.25) for y in (0.02, 0.41)], *[m.b(-0.4 + i * 0.03, 0.05, 0.008, 0.3, 0.03, 0.31, ["#3b7bb5", RED, GOLD, WHITE][i % 4]) for i in range(10)]])
    add("guitar_stand", "Gitarre auf Ständer", "Guitar on stand", (0.4, 0.35, 1.05), lambda m: [m.l(0, 0, 0.36, 0.3, 0, 0.12, BLACK, tw=0.06, td=0.06), m.c(0, 0.04, 0.34, 0.1, 0.08, 0.32, OAK, axis="z"), m.c(0, 0.04, 0.27, 0.1, 0.37, 0.24, OAK, axis="z"), m.c(0, 0.09, 0.08, 0.02, 0.32, 0.08, BLACK, axis="z"), m.b(0, 0.04, 0.05, 0.03, 0.6, 0.38, WALNUT), m.b(0, 0.04, 0.08, 0.03, 0.97, 0.08, WALNUT)])
    add("digital_piano", "Digitalpiano", "Digital piano", (1.4, 0.4, 0.95), lambda m: [m.b(0, 0, 1.4, 0.35, 0.6, 0.18, BLACK, edges="faint"), m.b(0, 0.13, 1.3, 0.12, 0.72, 0.03, WHITE), *[m.b(-0.6 + i * 0.1, 0.11, 0.04, 0.08, 0.75, 0.02, BLACK) for i in range(13)], m.b(-0.68, -0.05, 0.04, 0.3, 0, 0.6, BLACK), m.b(0.68, -0.05, 0.04, 0.3, 0, 0.6, BLACK), m.b(0, -0.12, 1.3, 0.04, 0.78, 0.17, BLACK)], electric=True)
    add("drum_kit", "Schlagzeug", "Drum kit", (1.6, 1.3, 1.2), lambda m: [m.c(0, -0.3, 0.55, 0.4, 0.05, 0.55, WHITE, axis="z", edges="faint"), m.c(-0.5, 0.0, 0.35, 0.35, 0.3, 0.3, WHITE), m.c(0.45, -0.05, 0.4, 0.4, 0.2, 0.4, WHITE), m.c(-0.2, -0.3, 0.25, 0.25, 0.7, 0.2, WHITE), m.c(0.15, -0.35, 0.25, 0.25, 0.72, 0.2, WHITE), *[m.c(x, z, 0.4, 0.4, 1.0, 0.02, GOLD) for x, z in ((-0.6, -0.35), (0.65, -0.4))], *[m.c(x, z, 0.02, 0.02, 0, 1.0, STEEL) for x, z in ((-0.6, -0.35), (0.65, -0.4))], m.c(0, 0.4, 0.35, 0.35, 0, 0.5, BLACK)])
    add("dj_desk", "DJ-Pult", "DJ desk", (1.2, 0.6, 1.0), lambda m: [m.b(0, 0, 1.2, 0.6, 0, 0.9, BLACK, edges="faint"), m.b(0, 0.05, 1.1, 0.4, 0.9, 0.06, "dark"), m.c(-0.35, 0.05, 0.25, 0.25, 0.96, 0.02, STEEL), m.c(0.35, 0.05, 0.25, 0.25, 0.96, 0.02, STEEL), m.b(0, 0.05, 0.22, 0.3, 0.96, 0.02, "#2a303c"), m.b(0, 0.3, 1.1, 0.01, 0.2, 0.05, "#37e0ff", glow=True)], electric=True, light="strip")
    add("studio_monitors", "Studiomonitore (Paar)", "Studio monitors (pair)", (0.9, 0.3, 0.35), lambda m: [*[part for x in (-0.33, 0.33) for part in (m.b(x, 0, 0.2, 0.28, 0, 0.33, BLACK, edges="faint"), m.c(x, 0.14, 0.13, 0.01, 0.06, 0.13, "#2a303c", axis="z"), m.c(x, 0.14, 0.06, 0.01, 0.23, 0.06, "#2a303c", axis="z"))]], mount="surface", electric=True)
    add("chess_table", "Schachtisch", "Chess table", (0.6, 0.6, 0.75), lambda m: [m.c(0, 0, 0.3, 0.3, 0, 0.03, WALNUT), m.c(0, 0, 0.06, 0.06, 0.03, 0.65, WALNUT), m.b(0, 0, 0.6, 0.6, 0.68, 0.04, WALNUT, edges="faint"), *[m.b(-0.2 + (i % 4) * 0.13, -0.2 + (i // 4) * 0.13, 0.065, 0.065, 0.72, 0.003, WHITE) for i in range(16)], *[m.c(x, z, 0.03, 0.03, 0.72, 0.05, c) for x, z, c in ((-0.15, 0.2, WHITE), (0.05, 0.2, WHITE), (-0.1, -0.2, BLACK), (0.12, -0.2, BLACK))]])
    add("aquarium_tall", "Aquarium hoch (Säule)", "Tall aquarium (column)", (0.6, 0.6, 1.6), lambda m: [m.b(0, 0, 0.6, 0.6, 0, 0.6, BLACK, edges="faint"), m.b(0, 0, 0.58, 0.58, 0.6, 0.9, WATER, edges="glow"), m.b(0, 0, 0.56, 0.56, 0.6, 0.08, SAND), m.c(-0.12, 0.1, 0.1, 0.1, 0.68, 0.4, LEAF), m.b(0.1, -0.05, 0.08, 0.02, 1.0, 0.04, "#ff7a1a"), m.b(0, 0, 0.6, 0.6, 1.5, 0.1, BLACK), m.b(0, 0, 0.5, 0.5, 1.49, 0.01, WHITE, glow=True)], electric=True, light="table")

    # Japandi and loft
    add("futon_bed", "Futonbett niedrig (Japandi)", "Low futon bed (Japandi)", (1.6, 2.1, 0.35), lambda m: [m.b(0, 0, 1.6, 2.1, 0, 0.12, OAK, edges="faint"), m.b(0, 0.05, 1.5, 1.95, 0.12, 0.14, WHITE), m.b(0, -0.85, 1.4, 0.3, 0.26, 0.08, "#d9d2c3"), m.b(0, 0.35, 1.52, 1.2, 0.26, 0.04, "#c9b8a0")])
    add("tatami_bench", "Sitzbank Japandi", "Japandi bench", (1.4, 0.4, 0.45), lambda m: [m.b(0, 0, 1.4, 0.4, 0.38, 0.07, OAK, edges="faint"), *[m.b(x, 0, 0.06, 0.34, 0, 0.38, OAK) for x in (-0.55, 0.55)], *[m.b(x, 0, 0.012, 0.34, 0.06, 0.04, OAK) for x in (-0.2, 0.0, 0.2)], m.b(0, 0, 1.0, 0.34, 0.06, 0.02, OAK)])
    add("paper_lamp", "Papierleuchte (Pendel)", "Paper lantern (pendant)", (0.5, 0.5, 0.9), lambda m: [m.c(0, 0, 0.01, 0.01, 0.45, 0.45, "dark"), m.c(0, 0, 0.5, 0.5, 0, 0.45, "#f2ead8", glow=True)], mount="ceiling", light="pendant")
    add("paper_floor_lamp", "Papier-Stehleuchte", "Paper floor lamp", (0.4, 0.4, 1.3), lambda m: [m.b(0, 0, 0.3, 0.3, 0, 0.03, OAK), m.b(0, 0, 0.03, 0.03, 0.03, 0.25, OAK), m.b(0, 0, 0.36, 0.36, 0.28, 1.0, "#f2ead8", glow=True, edges="faint")], light="floor")
    add("loft_shelf", "Industrieregal Stahl/Holz", "Industrial shelf steel/wood", (1.2, 0.4, 1.9), lambda m: [*[m.b(x, z, 0.03, 0.03, 0, 1.9, BLACK) for x in (-0.58, 0.58) for z in (-0.18, 0.18)], *[m.b(0, 0, 1.2, 0.4, y, 0.04, WALNUT, edges="faint") for y in (0.1, 0.55, 1.0, 1.45, 1.86)], *[m.b(x, 0.05, 0.12, 0.25, 0.59, 0.24, c) for x, c in ((-0.4, "#3b7bb5"), (-0.25, RED), (0.3, GOLD))], m.c(0.2, 0, 0.15, 0.15, 1.04, 0.18, TERRACOTTA), m.c(0.2, 0, 0.2, 0.2, 1.22, 0.15, LEAF)])
    add("loft_pendant", "Industrie-Pendelleuchte", "Industrial pendant light", (0.4, 0.4, 0.8), lambda m: [m.c(0, 0, 0.01, 0.01, 0.3, 0.5, "dark"), m.l(0, 0, 0.38, 0.38, 0.05, 0.25, BLACK, tw=0.1, td=0.1, edges="faint"), m.c(0, 0, 0.12, 0.12, 0.0, 0.08, WARM, glow=True)], mount="ceiling", light="pendant")
    add("loft_table", "Esstisch Baumkante 220", "Live-edge dining table 220", (2.2, 1.0, 0.76), lambda m: [m.b(0, 0, 2.2, 1.0, 0.71, 0.05, WALNUT, edges="faint"), m.b(0, -0.49, 2.1, 0.03, 0.71, 0.05, OAK), *[part for x in (-0.85, 0.85) for part in (m.b(x, 0, 0.06, 0.85, 0.0, 0.05, BLACK), m.b(x, 0, 0.06, 0.06, 0.05, 0.66, BLACK), m.b(x, 0, 0.06, 0.85, 0.66, 0.05, BLACK))]], surface=True)
    add("bar_cart_brass", "Barwagen Messing", "Brass bar cart", (0.8, 0.45, 0.85), lambda m: [*[m.c(x, z, 0.025, 0.025, 0.05, 0.8, GOLD) for x in (-0.37, 0.37) for z in (-0.19, 0.19)], m.b(0, 0, 0.8, 0.45, 0.4, 0.02, "glass"), m.b(0, 0, 0.8, 0.45, 0.82, 0.02, "glass"), *[m.c(x, 0, 0.07, 0.07, 0.42, 0.25, c) for x, c in ((-0.2, "#5c8a4a"), (0.0, "#8a3a3a"), (0.2, "#d8d0b0"))], *[m.c(x, z, 0.06, 0.06, 0, 0.06, BLACK, axis="x") for x in (-0.37, 0.37) for z in (-0.19, 0.19)]])
    return [("nextfloor.x_deko", "Wohnen & Deko", "Weihnachten, Advent, Ostern und Herbst, Bilder und Rahmen, Zimmerpflanzen, Musik und Hobby, Japandi und Loft", items)]


# ------------------------------------------------------------------ Smart Home & Technik 2


def smart(bp):
    items, add = _pack(bp)
    add("video_doorbell", "Video-Türklingel", "Video doorbell", (0.06, 0.03, 0.15), lambda m: [m.b(0, 0, 0.06, 0.03, 0, 0.15, BLACK, edges="faint"), m.c(0, 0.015, 0.03, 0.005, 0.1, 0.03, "#2a303c", axis="z"), m.c(0, 0.016, 0.035, 0.005, 0.025, 0.035, "#37e0ff", axis="z", glow=True)], mount="wall", wall_y=1.25, electric=True)
    add("smart_lock", "Smartes Türschloss", "Smart lock", (0.07, 0.06, 0.16), lambda m: [m.b(0, 0, 0.07, 0.06, 0, 0.16, STEEL, edges="faint"), m.c(0, 0.03, 0.05, 0.02, 0.06, 0.05, "#2a303c", axis="z"), m.b(0, 0.031, 0.03, 0.002, 0.13, 0.01, "#37e0ff", glow=True)], mount="wall", wall_y=1.0, electric=True)
    add("camera_indoor", "Innenkamera", "Indoor camera", (0.08, 0.08, 0.12), lambda m: [m.c(0, 0, 0.08, 0.08, 0, 0.02, WHITE), m.c(0, 0, 0.02, 0.02, 0.02, 0.03, WHITE), m.c(0, 0, 0.07, 0.07, 0.05, 0.07, WHITE, edges="faint"), m.c(0, 0.035, 0.03, 0.01, 0.07, 0.03, BLACK, axis="z")], mount="surface", electric=True)
    add("camera_bullet", "Außenkamera (Bullet)", "Outdoor camera (bullet)", (0.08, 0.25, 0.12), lambda m: [m.b(0, -0.11, 0.08, 0.02, 0, 0.12, WHITE), m.b(0, -0.07, 0.025, 0.07, 0.05, 0.025, WHITE), m.c(0, 0.02, 0.07, 0.18, 0.03, 0.07, WHITE, axis="z", edges="faint"), m.c(0, 0.11, 0.05, 0.01, 0.04, 0.05, BLACK, axis="z")], mount="wall", wall_y=2.4, electric=True)
    add("camera_dome", "Dome-Kamera (Decke)", "Dome camera (ceiling)", (0.14, 0.14, 0.1), lambda m: [m.c(0, 0, 0.14, 0.14, 0.07, 0.03, WHITE), m.c(0, 0, 0.11, 0.11, 0, 0.07, "#2a303c", edges="faint")], mount="ceiling", electric=True)
    add("motion_sensor", "Bewegungsmelder", "Motion sensor", (0.05, 0.04, 0.07), lambda m: [m.b(0, 0, 0.05, 0.04, 0, 0.07, WHITE), m.c(0, 0.02, 0.035, 0.01, 0.02, 0.035, "#d8dde5", axis="z")], mount="wall", wall_y=2.2)
    add("leak_sensor", "Wassermelder", "Water leak sensor", (0.06, 0.06, 0.025), lambda m: [m.c(0, 0, 0.06, 0.06, 0, 0.025, WHITE, edges="faint"), m.c(0, 0, 0.02, 0.02, 0.025, 0.002, "#37e0ff", glow=True)])
    add("temp_sensor", "Thermometer/Hygrometer", "Temperature & humidity sensor", (0.06, 0.02, 0.06), lambda m: [m.b(0, 0, 0.06, 0.02, 0, 0.06, WHITE, edges="faint"), m.b(0, 0.01, 0.045, 0.002, 0.012, 0.035, "#2a303c", screen=True)], mount="wall", wall_y=1.5)
    add("air_quality", "Luftgütemonitor (CO₂)", "Air quality monitor (CO₂)", (0.1, 0.06, 0.14), lambda m: [m.b(0, 0, 0.1, 0.06, 0, 0.14, WHITE, edges="faint"), m.b(0, 0.03, 0.08, 0.002, 0.05, 0.06, "#2a303c", screen=True), m.b(0, 0.031, 0.06, 0.002, 0.02, 0.01, "#37e0ff", glow=True)], mount="surface", electric=True)
    add("ha_green", "Home-Assistant-Server (klein)", "Home Assistant box (small)", (0.11, 0.11, 0.03), lambda m: [m.b(0, 0, 0.11, 0.11, 0, 0.03, "#2f8f5a", edges="faint"), m.b(0, 0.055, 0.06, 0.002, 0.012, 0.006, "#37e0ff", glow=True)], mount="surface", electric=True)
    add("zigbee_stick", "Zigbee-Koordinator mit Antenne", "Zigbee coordinator with antenna", (0.08, 0.05, 0.2), lambda m: [m.b(0, 0, 0.08, 0.05, 0, 0.03, BLACK, edges="faint"), m.c(0.02, 0, 0.012, 0.012, 0.03, 0.17, BLACK), m.b(-0.02, 0.025, 0.01, 0.002, 0.012, 0.008, "#ffb547", glow=True)], mount="surface", electric=True)
    add("mini_pc", "Mini-PC", "Mini PC", (0.13, 0.13, 0.05), lambda m: [m.b(0, 0, 0.13, 0.13, 0, 0.05, "#2a303c", edges="faint"), m.c(0.04, 0.065, 0.008, 0.002, 0.025, 0.008, "#37e0ff", axis="z", glow=True)], mount="surface", electric=True)
    add("ups", "USV (Notstrom)", "UPS (backup power)", (0.15, 0.36, 0.23), lambda m: [m.b(0, 0, 0.15, 0.36, 0, 0.23, BLACK, edges="faint"), m.b(0, 0.18, 0.08, 0.002, 0.14, 0.04, "#2a303c", screen=True), m.c(0, 0.181, 0.02, 0.002, 0.08, 0.02, "#7fbf4a", axis="z", glow=True)], electric=True)
    add("poe_switch", "Netzwerk-Switch (PoE)", "Network switch (PoE)", (0.33, 0.2, 0.045), lambda m: [m.b(0, 0, 0.33, 0.2, 0, 0.045, STEEL, edges="faint"), *[m.b(-0.12 + i * 0.03, 0.1, 0.02, 0.002, 0.015, 0.015, "#7fbf4a", glow=True) for i in range(8)]], mount="surface", electric=True)
    add("router_mesh", "Mesh-WLAN-Knoten", "Mesh Wi-Fi node", (0.1, 0.1, 0.18), lambda m: [m.c(0, 0, 0.1, 0.1, 0, 0.18, WHITE, edges="faint"), m.c(0, 0, 0.03, 0.03, 0.18, 0.002, "#37e0ff", glow=True)], mount="surface", electric=True)
    add("wall_tablet", "Wandtablet (Dashboard)", "Wall tablet (dashboard)", (0.26, 0.03, 0.18), lambda m: [m.b(0, 0, 0.26, 0.03, 0, 0.18, BLACK, edges="glow"), m.b(0, 0.016, 0.24, 0.002, 0.01, 0.16, "#2a303c", screen=True)], mount="wall", wall_y=1.35, electric=True)
    add("voice_puck", "Sprachassistent (Puck)", "Voice assistant (puck)", (0.1, 0.1, 0.04), lambda m: [m.c(0, 0, 0.1, 0.1, 0, 0.035, BLACK, edges="faint"), m.c(0, 0, 0.08, 0.08, 0.035, 0.005, "#37e0ff", glow=True)], mount="surface", electric=True)
    add("smart_speaker_tall", "Smarter Lautsprecher (hoch)", "Smart speaker (tall)", (0.12, 0.12, 0.2), lambda m: [m.c(0, 0, 0.12, 0.12, 0, 0.19, "#3a404c", edges="faint"), m.c(0, 0, 0.1, 0.1, 0.19, 0.01, "#37e0ff", glow=True)], mount="surface", electric=True)
    add("soundbar", "Soundbar", "Soundbar", (0.9, 0.1, 0.07), lambda m: [m.b(0, 0, 0.9, 0.1, 0, 0.07, BLACK, edges="faint"), m.b(0, 0.05, 0.86, 0.002, 0.01, 0.05, "#2a303c"), m.b(0.35, 0.051, 0.03, 0.002, 0.05, 0.006, "#37e0ff", glow=True)], mount="surface", electric=True)
    add("subwoofer", "Subwoofer", "Subwoofer", (0.35, 0.35, 0.38), lambda m: [m.b(0, 0, 0.35, 0.35, 0, 0.38, BLACK, edges="faint"), m.c(0, 0.175, 0.25, 0.01, 0.06, 0.25, "#2a303c", axis="z")], electric=True)
    add("projector_ceiling", "Beamer (Decke)", "Projector (ceiling)", (0.35, 0.3, 0.35), lambda m: [m.c(0, 0, 0.04, 0.04, 0.12, 0.23, BLACK), m.b(0, 0, 0.35, 0.3, 0, 0.12, WHITE, edges="faint"), m.c(0.08, 0.15, 0.07, 0.02, 0.025, 0.07, "#37e0ff", axis="z", glow=True)], mount="ceiling", electric=True)
    add("projection_screen", "Leinwand motorisch", "Motorised projection screen", (2.4, 0.08, 1.6), lambda m: [m.b(0, 0, 2.4, 0.08, 1.48, 0.12, WHITE, edges="faint"), m.b(0, 0.02, 2.3, 0.01, 0.15, 1.33, "#f4f6fa", move="down"), m.b(0, 0.02, 2.3, 0.02, 0.12, 0.03, BLACK, move="down")], mount="wall", wall_y=0.8, electric=True, cover="extends", cover_rest=0.0)
    add("game_console", "Spielkonsole", "Game console", (0.11, 0.3, 0.35), lambda m: [m.b(0, 0, 0.1, 0.27, 0, 0.35, WHITE, edges="faint"), m.b(0, 0, 0.11, 0.3, 0.02, 0.31, BLACK), m.b(0, 0.15, 0.06, 0.002, 0.32, 0.01, "#37e0ff", glow=True)], mount="surface", electric=True)
    add("gaming_pc", "Gaming-PC mit RGB", "Gaming PC with RGB", (0.24, 0.48, 0.5), lambda m: [m.b(0, 0, 0.24, 0.48, 0, 0.5, BLACK, edges="glow"), m.b(0.121, 0, 0.002, 0.42, 0.04, 0.42, "glass"), *[m.c(0.11, z, 0.12, 0.12, 0.3, 0.12, "#ff4fa3", axis="x", glow=True) for z in (-0.12, 0.1)], m.b(0.11, 0.15, 0.01, 0.1, 0.06, 0.12, "#37e0ff", glow=True)], electric=True)
    add("desk_dual_monitor", "Schreibtisch mit zwei Monitoren", "Desk with two monitors", (1.6, 0.8, 1.25), lambda m: [m.b(0, 0, 1.6, 0.8, 0.72, 0.04, OAK, edges="faint"), *[m.b(x, 0, 0.06, 0.7, 0, 0.72, BLACK) for x in (-0.75, 0.75)], m.b(0, -0.3, 0.04, 0.04, 0.76, 0.2, STEEL), *[part for x, r in ((-0.33, 8), (0.33, -8)) for part in (m.b(x, -0.28, 0.62, 0.03, 0.88, 0.37, BLACK, rot=r, edges="faint"), m.b(x, -0.26, 0.58, 0.002, 0.9, 0.33, "#2a303c", screen=True, rot=r))], m.b(0, 0.15, 0.45, 0.15, 0.76, 0.02, "#2a303c"), m.b(0.35, 0.15, 0.07, 0.11, 0.76, 0.02, "#2a303c")], electric=True, surface=True)
    add("printer_resin", "Resin-3D-Drucker", "Resin 3D printer", (0.25, 0.25, 0.45), lambda m: [m.b(0, 0, 0.25, 0.25, 0, 0.15, BLACK, edges="faint"), m.b(0, 0, 0.23, 0.23, 0.15, 0.3, "#ffb547", top="#ffb547"), m.b(0, 0.125, 0.12, 0.002, 0.04, 0.07, "#2a303c", screen=True)], mount="surface", electric=True)
    add("laser_engraver", "Laser-Graviergerät", "Laser engraver", (0.75, 0.55, 0.25), lambda m: [m.b(0, 0, 0.75, 0.55, 0, 0.2, "#2a303c", edges="faint"), m.l(0, -0.05, 0.75, 0.45, 0.2, 0.05, "#ff7a1a", tw=0.75, td=0.35), m.b(0.3, 0.27, 0.08, 0.002, 0.08, 0.06, "#ff3b3b", glow=True)], mount="surface", electric=True)
    add("ebike_charger", "E-Bike mit Ladegerät", "E-bike with charger", (0.6, 1.8, 1.1), lambda m: [m.c(0, -0.6, 0.06, 0.66, 0.02, 0.66, BLACK, axis="x"), m.c(0, 0.6, 0.06, 0.66, 0.02, 0.66, BLACK, axis="x"), m.l(0, 0, 0.05, 1.2, 0.35, 0.5, "#3b7bb5", tz=0.1, td=0.6), m.b(0, -0.1, 0.08, 0.35, 0.5, 0.12, "#2a303c"), m.b(0, -0.5, 0.25, 0.25, 0.88, 0.06, BLACK), m.b(0, 0.55, 0.55, 0.04, 1.02, 0.03, BLACK), m.b(0.2, -0.85, 0.1, 0.06, 0.0, 0.06, BLACK), m.b(0.2, -0.85, 0.03, 0.02, 0.06, 0.008, "#7fbf4a", glow=True)], electric=True)
    add("ac_portable", "Klimagerät mobil", "Portable air conditioner", (0.45, 0.38, 0.75), lambda m: [m.b(0, 0, 0.45, 0.38, 0, 0.75, WHITE, edges="faint"), m.b(0, 0.19, 0.36, 0.002, 0.55, 0.12, "#d8dde5"), m.b(0, 0.191, 0.1, 0.002, 0.7, 0.025, "#2a303c", screen=True), m.c(0, -0.25, 0.14, 0.14, 0.45, 0.14, "#d8dde5", axis="z")], electric=True, climate=True)
    add("ir_heater", "Infrarotheizung (Bild)", "Infrared heater (picture)", (1.0, 0.03, 0.6), lambda m: [m.b(0, 0, 1.0, 0.03, 0, 0.6, WHITE, edges="faint"), m.b(0, 0.015, 0.94, 0.003, 0.03, 0.54, "#ff7a1a", glow=True)], mount="wall", wall_y=1.2, electric=True)
    add("instant_heater", "Durchlauferhitzer", "Instantaneous water heater", (0.23, 0.11, 0.47), lambda m: [m.b(0, 0, 0.23, 0.11, 0, 0.47, WHITE, edges="faint"), m.b(0, 0.055, 0.1, 0.002, 0.3, 0.05, "#2a303c", screen=True), *[m.c(x, 0, 0.02, 0.02, -0.0, 0.05, STEEL) for x in (-0.05, 0.05)]], mount="wall", wall_y=1.3, electric=True)
    add("hp_water_heater", "Warmwasser-Wärmepumpe", "Heat pump water heater", (0.62, 0.62, 1.9), lambda m: [m.c(0, 0, 0.62, 0.62, 0, 1.55, WHITE, edges="faint"), m.c(0, 0, 0.6, 0.6, 1.55, 0.35, "#d8dde5"), m.b(0, 0.29, 0.14, 0.02, 1.65, 0.08, "#2a303c", screen=True), *[m.c(x, -0.25, 0.12, 0.12, 1.75, 0.15, STEEL) for x in (-0.15, 0.15)]], electric=True, climate=True)
    add("oil_tank", "Heizöltank mit Füllstand", "Heating oil tank with level", (2.0, 0.75, 1.6), lambda m: [m.b(0, 0, 2.0, 0.75, 0, 1.55, "#e8e2c8", edges="faint"), m.b(0, 0, 1.94, 0.69, 0, 0.9, "#9a6a2a"), m.c(0.6, 0, 0.14, 0.14, 1.55, 0.05, "#ff3b3b"), m.b(-0.7, 0.376, 0.1, 0.002, 0.1, 1.3, "#d8dde5"), m.b(-0.7, 0.377, 0.06, 0.002, 0.1, 0.8, "#37e0ff", glow=True)], electric=True)
    add("water_tank", "Regenwasser-Zisterne (Kellertank)", "Rainwater tank (cellar)", (1.2, 1.2, 1.6), lambda m: [m.c(0, 0, 1.2, 1.2, 0, 1.5, "#4a6a5a", edges="faint"), m.c(0, 0, 0.3, 0.3, 1.5, 0.1, BLACK), m.c(0.3, 0.3, 0.1, 0.1, 1.45, 0.15, STEEL)], electric=True)
    add("server_cabinet_wall", "Netzwerkschrank (Wand, 12 HE)", "Network cabinet (wall, 12U)", (0.6, 0.45, 0.64), lambda m: [m.b(0, 0, 0.6, 0.45, 0, 0.64, BLACK, edges="faint"), m.b(0, 0.226, 0.56, 0.003, 0.03, 0.58, "glass"), *[m.b(0, 0.05, 0.48, 0.32, y, 0.044, "#2a303c") for y in (0.1, 0.18, 0.26, 0.4)], *[m.b(-0.18 + i * 0.04, 0.21, 0.015, 0.002, 0.13, 0.008, "#7fbf4a", glow=True) for i in range(8)]], mount="wall", wall_y=1.4, electric=True)
    add("robot_window", "Fensterputzroboter", "Window cleaning robot", (0.28, 0.08, 0.28), lambda m: [m.b(0, 0, 0.28, 0.08, 0, 0.28, WHITE, edges="faint"), m.c(0, 0.04, 0.06, 0.01, 0.11, 0.06, "#37e0ff", axis="z", glow=True)], mount="wall", wall_y=1.2, electric=True)
    add("pet_feeder", "Futterautomat", "Automatic pet feeder", (0.22, 0.3, 0.35), lambda m: [m.b(0, -0.03, 0.22, 0.24, 0, 0.35, WHITE, edges="faint"), m.c(0, 0.1, 0.14, 0.14, 0, 0.05, "#d8dde5"), m.b(0, -0.03, 0.18, 0.2, 0.25, 0.08, "glass"), m.b(0, 0.09, 0.06, 0.002, 0.28, 0.01, "#37e0ff", glow=True)], electric=True)
    return [("nextfloor.x_smart", "Smart Home & Technik 2", "Kameras, Sensoren, Türklingel, Smart Lock, Server, Netzwerk, Heimkino, Gaming, Werkstatt und Haustechnik mit Füllstand", items)]


# ------------------------------------------------------------------ Küche & Bad 2


def kitchen_bath(bp):
    items, add = _pack(bp)
    add("espresso_machine", "Siebträgermaschine", "Espresso machine (portafilter)", (0.35, 0.4, 0.42), lambda m: [m.b(0, 0, 0.35, 0.4, 0.02, 0.38, STEEL, edges="faint"), m.b(0, 0.2, 0.3, 0.02, 0.06, 0.02, BLACK), m.c(0, 0.18, 0.08, 0.08, 0.16, 0.04, BLACK), m.b(0, 0.25, 0.04, 0.12, 0.17, 0.02, BLACK), m.c(0.13, 0.2, 0.012, 0.012, 0.15, 0.1, STEEL), *[m.c(x, 0.2, 0.05, 0.01, 0.3, 0.05, WHITE, axis="z") for x in (-0.07, 0.07)], m.b(0, -0.05, 0.3, 0.25, 0.4, 0.02, STEEL)], mount="surface", electric=True)
    add("coffee_grinder", "Kaffeemühle", "Coffee grinder", (0.14, 0.22, 0.4), lambda m: [m.b(0, 0, 0.14, 0.22, 0, 0.26, BLACK, edges="faint"), m.l(0, -0.03, 0.12, 0.12, 0.26, 0.14, "glass", tw=0.16, td=0.16), m.b(0, 0.1, 0.08, 0.02, 0.05, 0.03, STEEL)], mount="surface", electric=True)
    add("air_fryer", "Heißluftfritteuse", "Air fryer", (0.3, 0.36, 0.34), lambda m: [m.b(0, 0, 0.3, 0.36, 0, 0.34, BLACK, edges="faint"), m.b(0, 0.18, 0.26, 0.02, 0.04, 0.16, "#2a303c"), m.b(0, 0.19, 0.08, 0.04, 0.1, 0.03, BLACK), m.b(0, 0.12, 0.14, 0.002, 0.28, 0.04, "#2a303c", screen=True)], mount="surface", electric=True)
    add("kitchen_machine", "Küchenmaschine mit Kochfunktion", "Cooking food processor", (0.33, 0.33, 0.33), lambda m: [m.b(0, 0.02, 0.33, 0.28, 0, 0.12, WHITE, edges="faint"), m.b(0, 0.16, 0.12, 0.002, 0.04, 0.06, "#2a303c", screen=True), m.l(0, -0.03, 0.18, 0.18, 0.12, 0.18, STEEL, tw=0.15, td=0.15), m.c(0, -0.03, 0.16, 0.16, 0.3, 0.03, WHITE)], mount="surface", electric=True)
    add("bread_maker", "Brotbackautomat", "Bread maker", (0.3, 0.38, 0.32), lambda m: [m.b(0, 0, 0.3, 0.38, 0, 0.32, WHITE, edges="faint"), m.b(0, -0.05, 0.22, 0.2, 0.32, 0.002, "glass"), m.b(0, 0.15, 0.2, 0.002, 0.22, 0.06, "#2a303c", screen=True)], mount="surface", electric=True)
    add("rice_cooker", "Reiskocher", "Rice cooker", (0.28, 0.32, 0.26), lambda m: [m.c(0, 0, 0.28, 0.3, 0, 0.2, WHITE, edges="faint"), m.c(0, 0, 0.26, 0.28, 0.2, 0.05, "#d8dde5"), m.b(0, 0.15, 0.08, 0.002, 0.1, 0.03, "#ff7a1a", glow=True)], mount="surface", electric=True)
    add("water_bubbler", "Wassersprudler", "Sparkling water maker", (0.15, 0.25, 0.43), lambda m: [m.b(0, -0.04, 0.15, 0.16, 0, 0.43, BLACK, edges="faint"), m.c(0, 0.06, 0.09, 0.09, 0.02, 0.3, "glass"), m.b(0, 0.04, 0.08, 0.08, 0.35, 0.06, BLACK)], mount="surface")
    add("pizza_oven_counter", "Pizzaofen (Tisch)", "Pizza oven (countertop)", (0.5, 0.65, 0.45), lambda m: [m.b(0, 0, 0.5, 0.65, 0, 0.06, BLACK), m.l(0, 0, 0.48, 0.6, 0.06, 0.32, STEEL, tw=0.36, td=0.45, edges="faint"), m.b(0, 0.3, 0.32, 0.02, 0.08, 0.1, "#ff7a1a", glow=True), m.c(0, -0.22, 0.08, 0.08, 0.38, 0.07, STEEL)], mount="surface", electric=True)
    add("wine_rack_wall", "Weinregal (Wand)", "Wine rack (wall)", (0.6, 0.3, 0.9), lambda m: [m.b(-0.28, 0, 0.04, 0.3, 0, 0.9, "wood", edges="faint"), m.b(0.28, 0, 0.04, 0.3, 0, 0.9, "wood", edges="faint"), *[m.b(0, 0, 0.52, 0.3, y, 0.015, "wood") for y in (0.0, 0.3, 0.6, 0.885)], *[m.c(x, 0.03, 0.07, 0.28, y + 0.03, 0.07, c, axis="z") for y in (0.0, 0.3, 0.6) for x, c in ((-0.18, "#5a1f2a"), (-0.06, "#3a5a2a"), (0.06, "#5a1f2a"), (0.18, "#d8d0b0"))]], mount="wall", wall_y=0.9)
    add("open_shelf_kitchen", "Offenes Küchenregal", "Open kitchen shelf", (1.2, 0.28, 0.6), lambda m: [*[m.b(0, 0, 1.2, 0.28, y, 0.03, OAK, edges="faint") for y in (0.0, 0.32)], *[m.b(x, -0.12, 0.02, 0.04, 0.0, 0.6, BLACK) for x in (-0.5, 0.5)], *[m.c(x, 0, 0.1, 0.1, 0.03, 0.12, c) for x, c in ((-0.4, WHITE), (-0.25, WHITE), (0.2, "glass"), (0.35, "glass"))], *[m.c(x, 0, 0.12, 0.12, 0.35, 0.18, c) for x, c in ((-0.3, TERRACOTTA), (0.0, "#d8d0b0"), (0.3, LEAF))]], mount="wall", wall_y=1.5)
    add("fridge_side_by_side", "Side-by-Side mit Wasserspender", "Side-by-side fridge with dispenser", (0.91, 0.72, 1.78), lambda m: [m.b(0, 0, 0.91, 0.7, 0, 1.78, STEEL, edges="faint"), m.b(0, 0.355, 0.004, 0.002, 0.02, 1.74, BLACK), m.b(-0.22, 0.356, 0.2, 0.003, 0.95, 0.35, "#2a303c"), m.b(-0.22, 0.357, 0.12, 0.002, 1.2, 0.06, "#37e0ff", glow=True), *[m.b(x, 0.37, 0.02, 0.02, 0.6, 0.7, STEEL) for x in (-0.03, 0.03)]], electric=True)
    add("gas_cooker_90", "Standherd Gas 90", "Freestanding gas range 90", (0.9, 0.6, 0.92), lambda m: [m.b(0, 0, 0.9, 0.6, 0, 0.88, STEEL, edges="faint"), m.b(0, 0, 0.9, 0.6, 0.88, 0.02, BLACK), *[m.c(x, z, 0.14, 0.14, 0.9, 0.02, "#2a303c") for x in (-0.3, 0.0, 0.3) for z in (-0.13, 0.13)], m.b(-0.12, 0.3, 0.55, 0.003, 0.15, 0.5, "glass"), m.b(0.3, 0.3, 0.2, 0.003, 0.15, 0.5, "#2a303c"), *[m.c(-0.35 + i * 0.1, 0.31, 0.03, 0.03, 0.75, 0.04, BLACK, axis="z") for i in range(7)]], electric=True, surface=True)
    add("dish_rack", "Abtropfgestell", "Dish rack", (0.45, 0.32, 0.25), lambda m: [m.b(0, 0, 0.45, 0.32, 0, 0.03, STEEL), *[m.c(-0.15 + i * 0.06, 0.03, 0.2, 0.2, 0.03, 0.2, WHITE, axis="x") for i in range(5)], m.c(0.18, -0.08, 0.08, 0.08, 0.03, 0.12, "glass")], mount="surface")
    add("ice_maker", "Eiswürfelbereiter", "Ice maker", (0.25, 0.32, 0.32), lambda m: [m.b(0, 0, 0.25, 0.32, 0, 0.32, STEEL, edges="faint"), m.b(0, -0.02, 0.2, 0.22, 0.32, 0.002, "glass"), m.b(0, 0.16, 0.08, 0.002, 0.25, 0.02, "#37e0ff", glow=True)], mount="surface", electric=True)
    # bath
    add("vessel_vanity_120", "Waschtisch mit Aufsatzbecken 120", "Vanity with vessel basin 120", (1.2, 0.5, 0.9), lambda m: [m.b(0, 0, 1.2, 0.5, 0.3, 0.45, OAK, edges="faint"), m.b(0, 0, 1.2, 0.5, 0.75, 0.04, WHITE), m.c(0.2, 0.02, 0.4, 0.4, 0.79, 0.12, WHITE, edges="faint"), m.c(0.2, -0.18, 0.025, 0.025, 0.79, 0.25, STEEL), m.b(0.2, -0.1, 0.02, 0.15, 1.02, 0.02, STEEL), *[m.b(x, 0.25, 0.58, 0.002, 0.33, 0.4, OAK) for x in (-0.3, 0.3)], *[m.b(x, 0.252, 0.2, 0.004, 0.7, 0.02, BLACK) for x in (-0.3, 0.3)]])
    add("vessel_vanity_double", "Doppelwaschtisch Aufsatzbecken 160", "Double vanity with vessel basins 160", (1.6, 0.5, 0.9), lambda m: [m.b(0, 0, 1.6, 0.5, 0.3, 0.45, WALNUT, edges="faint"), m.b(0, 0, 1.6, 0.5, 0.75, 0.04, WHITE), *[part for x in (-0.4, 0.4) for part in (m.c(x, 0.02, 0.4, 0.4, 0.79, 0.12, WHITE, edges="faint"), m.c(x, -0.18, 0.025, 0.025, 0.79, 0.25, STEEL), m.b(x, -0.1, 0.02, 0.15, 1.02, 0.02, STEEL))]])
    add("clawfoot_tub", "Badewanne auf Füßen", "Clawfoot bathtub", (1.7, 0.8, 0.75), lambda m: [*[m.c(x, z, 0.08, 0.08, 0, 0.12, GOLD) for x in (-0.7, 0.7) for z in (-0.28, 0.28)], m.c(0, 0, 1.7, 0.8, 0.1, 0.6, WHITE, edges="faint"), m.c(0, 0, 1.55, 0.66, 0.4, 0.31, "#d8e6f2"), m.c(-0.72, 0, 0.04, 0.04, 0.7, 0.05, GOLD)])
    add("shower_wc", "Dusch-WC", "Shower toilet", (0.4, 0.6, 0.45), lambda m: [m.b(0, -0.25, 0.4, 0.1, 0.25, 0.4, WHITE, edges="faint"), m.l(0, 0.05, 0.36, 0.5, 0.25, 0.15, WHITE, tw=0.4, td=0.55), m.b(0, 0.05, 0.38, 0.52, 0.4, 0.03, WHITE), m.b(0.17, -0.1, 0.03, 0.12, 0.42, 0.02, "#37e0ff", glow=True)], mount="wall", wall_y=0.0, electric=True)
    add("urinal", "Urinal", "Urinal", (0.35, 0.35, 0.6), lambda m: [m.l(0, 0, 0.3, 0.3, 0, 0.6, WHITE, tw=0.35, td=0.35, edges="faint"), m.b(0, 0.12, 0.25, 0.1, 0.15, 0.35, "#d8e6f2")], mount="wall", wall_y=0.55)
    add("bath_bench", "Badhocker Teak", "Teak bath stool", (0.45, 0.3, 0.45), lambda m: [*[m.b(x, 0, 0.06, 0.28, 0, 0.42, "#9a6a3a") for x in (-0.18, 0.18)], *[m.b(0, z, 0.45, 0.06, 0.42, 0.03, "#9a6a3a") for z in (-0.1, 0.0, 0.1)]])
    add("steam_shower", "Dampfdusche", "Steam shower cabin", (1.2, 0.9, 2.2), lambda m: [m.b(0, 0, 1.2, 0.9, 0, 0.18, WHITE), m.b(0, -0.43, 1.2, 0.04, 0.18, 2.0, "#2a303c", edges="faint"), m.b(0, 0.43, 1.18, 0.02, 0.18, 2.0, "glass", edges="glow"), m.b(-0.59, 0, 0.02, 0.86, 0.18, 2.0, "glass"), m.b(0.59, 0, 0.02, 0.86, 0.18, 2.0, "glass"), m.b(0, 0, 1.2, 0.9, 2.18, 0.02, WHITE), m.c(0, 0, 0.3, 0.3, 2.14, 0.02, STEEL), m.b(-0.35, -0.2, 0.45, 0.4, 0.18, 0.3, WHITE), m.b(0.3, -0.4, 0.2, 0.002, 1.3, 0.15, "#37e0ff", glow=True)], electric=True)
    add("rain_shower_ceiling", "Regendusche Decke mit LED", "Ceiling rain shower with LED", (0.5, 0.5, 0.06), lambda m: [m.b(0, 0, 0.5, 0.5, 0.02, 0.04, STEEL, edges="faint"), m.b(0, 0, 0.44, 0.44, 0.0, 0.02, "#37e0ff", glow=True)], mount="ceiling", light="panel")
    add("infrared_cabin", "Infrarotkabine (2 Personen)", "Infrared cabin (2 persons)", (1.2, 1.05, 1.9), lambda m: [m.b(0, 0, 1.2, 1.05, 0, 1.9, "#b98d5a", edges="faint"), m.b(0, 0.52, 0.5, 0.02, 0.05, 1.8, "glass"), m.b(0, -0.2, 1.1, 0.4, 0.4, 0.06, "#c9a06a"), *[m.b(x, -0.5, 0.25, 0.01, 0.6, 0.9, "#ff5a2a", glow=True) for x in (-0.3, 0.3)], m.b(0.45, 0.53, 0.12, 0.002, 1.4, 0.06, "#2a303c", screen=True)], electric=True)
    add("towel_ladder_heated", "Handtuchleiter beheizt", "Heated towel ladder", (0.5, 0.08, 1.2), lambda m: [m.b(-0.23, 0, 0.03, 0.03, 0, 1.2, BLACK), m.b(0.23, 0, 0.03, 0.03, 0, 1.2, BLACK), *[m.c(0, 0, 0.44, 0.025, y, 0.025, BLACK, axis="x") for y in (0.1, 0.3, 0.5, 0.7, 0.9, 1.1)], m.b(0, 0.04, 0.4, 0.04, 0.5, 0.25, "#d8d0c0")], mount="wall", wall_y=0.4, electric=True, climate=True)
    add("laundry_hamper_duo", "Wäschesammler (zwei Fächer)", "Laundry hamper (two bins)", (0.6, 0.35, 0.65), lambda m: [m.b(0, 0, 0.6, 0.35, 0, 0.6, RATTAN, edges="faint"), m.b(0, 0, 0.6, 0.35, 0.6, 0.04, OAK), m.b(0, 0.175, 0.004, 0.002, 0.05, 0.5, "dark")])
    add("cold_plunge", "Eistonne (Kaltwasser)", "Cold plunge tub", (0.8, 0.8, 0.9), lambda m: [m.c(0, 0, 0.8, 0.8, 0, 0.9, "#3a404c", edges="faint"), m.c(0, 0, 0.7, 0.7, 0.55, 0.34, "#9fd3f2"), m.b(0.3, 0.3, 0.12, 0.08, 0.6, 0.05, "#37e0ff", glow=True)], electric=True)
    return [("nextfloor.x_kuechebad", "Küche & Bad 2", "Siebträger, Mühle, Heißluftfritteuse, Küchenmaschine, Pizzaofen, Side-by-Side, Aufsatzwaschtische, Wanne auf Füßen, Dusch-WC, Dampfdusche, Infrarotkabine", items)]


# ------------------------------------------------------------------ Garten & Wellness


def garden(bp):
    items, add = _pack(bp)
    add("pond_small", "Gartenteich klein", "Small garden pond", (2.4, 1.8, 0.2), lambda m: [m.c(0, 0, 2.4, 1.8, 0, 0.06, STONE, edges="faint"), m.c(0, 0, 2.1, 1.5, 0, 0.065, WATER), *[m.c(x, z, 0.3, 0.3, 0.06, 0.04, LEAF_LIGHT) for x, z in ((-0.4, 0.2), (0.3, -0.3))], *[m.c(x, z, 0.06, 0.06, 0.06, 0.12, LEAF) for x, z in ((0.9, 0.4), (0.85, 0.5), (0.95, 0.3))]])
    add("pond_large", "Schwimmteich", "Swimming pond", (6.0, 4.0, 0.3), lambda m: [m.c(0, 0, 6.0, 4.0, 0, 0.05, STONE, edges="faint"), m.c(0.4, 0, 4.6, 3.2, 0, 0.055, WATER), m.c(-2.0, 0.6, 1.6, 2.0, 0, 0.06, LEAF_DARK), m.b(0.8, -1.7, 1.6, 0.8, 0.05, 0.08, "wood", edges="faint")])
    add("water_feature", "Wasserspiel mit Licht", "Water feature with light", (0.6, 0.6, 1.0), lambda m: [m.c(0, 0, 0.6, 0.6, 0, 0.15, STONE, edges="faint"), m.c(0, 0, 0.5, 0.5, 0.12, 0.035, WATER), m.c(0, 0, 0.28, 0.28, 0.15, 0.7, "#6a6f78"), m.c(0, 0, 0.12, 0.12, 0.85, 0.15, "#9fd3f2", glow=True)], electric=True, light="garden")
    add("fountain", "Springbrunnen", "Fountain", (1.6, 1.6, 1.4), lambda m: [m.c(0, 0, 1.6, 1.6, 0, 0.35, STONE, edges="faint"), m.c(0, 0, 1.4, 1.4, 0.2, 0.15, WATER), m.c(0, 0, 0.2, 0.2, 0.35, 0.55, STONE), m.c(0, 0, 0.7, 0.7, 0.85, 0.12, STONE), m.c(0, 0, 0.6, 0.6, 0.9, 0.08, WATER), m.c(0, 0, 0.06, 0.06, 0.97, 0.4, "#9fd3f2", glow=True)], electric=True, light="garden")
    add("sandbox", "Sandkasten", "Sandbox", (1.5, 1.5, 0.3), lambda m: [*[m.b(x, 0, 0.08, 1.5, 0, 0.3, "wood", edges="faint") for x in (-0.71, 0.71)], *[m.b(0, z, 1.34, 0.08, 0, 0.3, "wood", edges="faint") for z in (-0.71, 0.71)], m.b(0, 0, 1.34, 1.34, 0, 0.22, SAND), m.c(0.3, 0.25, 0.2, 0.2, 0.22, 0.1, RED), m.b(-0.3, -0.2, 0.15, 0.25, 0.22, 0.05, "#3b7bb5")])
    add("sandbox_roof", "Sandkasten mit Dach", "Sandbox with roof", (1.8, 1.8, 1.9), lambda m: [*[m.b(x, 0, 0.08, 1.6, 0, 0.3, "wood") for x in (-0.76, 0.76)], *[m.b(0, z, 1.44, 0.08, 0, 0.3, "wood") for z in (-0.76, 0.76)], m.b(0, 0, 1.44, 1.44, 0, 0.22, SAND), *[m.b(x, z, 0.08, 0.08, 0, 1.6, "wood") for x in (-0.76, 0.76) for z in (-0.76, 0.76)], m.l(0, 0, 1.8, 1.8, 1.6, 0.3, "#3b7bb5", tw=1.8, td=0.05, edges="faint")])
    add("beach_chair", "Strandkorb", "Beach chair (Strandkorb)", (1.25, 0.85, 1.6), lambda m: [m.b(0, 0, 1.25, 0.85, 0, 0.4, RATTAN, edges="faint"), m.b(0, -0.35, 1.25, 0.15, 0.4, 1.0, RATTAN), m.b(-0.58, 0, 0.09, 0.85, 0.4, 0.4, RATTAN), m.b(0.58, 0, 0.09, 0.85, 0.4, 0.4, RATTAN), m.l(0, -0.15, 1.25, 0.55, 1.2, 0.4, RATTAN, tz=-0.35, td=0.15), m.b(0, 0.05, 1.05, 0.6, 0.4, 0.1, "#3b7bb5"), m.b(0, -0.25, 1.05, 0.06, 0.5, 0.65, "#e8ecf2")])
    add("wood_pile", "Brennholzstapel", "Firewood stack", (1.6, 0.5, 1.2), lambda m: [m.b(0, 0, 1.6, 0.5, 1.15, 0.05, "#5a5f68"), *[m.b(x, 0, 0.06, 0.5, 0, 1.15, "wood") for x in (-0.77, 0.77)], *[m.c(-0.7 + (i % 12) * 0.127, 0, 0.12, 0.48, 0.02 + (i // 12) * 0.12, 0.12, ["#8a6a4a", "#9a7a5a", "#7a5a3a"][i % 3], axis="z") for i in range(48)]])
    add("bird_house", "Vogelhaus auf Stange", "Bird house on a pole", (0.4, 0.4, 1.7), lambda m: [m.c(0, 0, 0.05, 0.05, 0, 1.4, "wood"), m.b(0, 0, 0.3, 0.3, 1.38, 0.05, "wood", edges="faint"), *[m.b(x, z, 0.03, 0.03, 1.43, 0.15, "wood") for x in (-0.12, 0.12) for z in (-0.12, 0.12)], m.l(0, 0, 0.4, 0.4, 1.58, 0.12, RED, tw=0.4, td=0.04)])
    add("bird_bath", "Vogeltränke", "Bird bath", (0.5, 0.5, 0.75), lambda m: [m.c(0, 0, 0.3, 0.3, 0, 0.05, STONE), m.l(0, 0, 0.14, 0.14, 0.05, 0.55, STONE, tw=0.1, td=0.1), m.c(0, 0, 0.5, 0.5, 0.6, 0.1, STONE, edges="faint"), m.c(0, 0, 0.42, 0.42, 0.66, 0.035, WATER)])
    add("insect_hotel", "Insektenhotel", "Insect hotel", (0.5, 0.25, 0.8), lambda m: [m.b(0, 0, 0.5, 0.25, 0.2, 0.5, "wood", edges="faint"), m.l(0, 0, 0.56, 0.3, 0.7, 0.1, "#5a5f68", tw=0.56, td=0.02), m.b(0, 0, 0.04, 0.24, 0, 0.2, "wood"), *[m.c(-0.15 + (i % 4) * 0.1, 0.12, 0.08, 0.01, 0.25 + (i // 4) * 0.1, 0.08, ["#8a6a4a", "#c8a46a", "#6a4a2a"][i % 3], axis="z") for i in range(16)]])
    add("compost_bin", "Komposter", "Compost bin", (0.8, 0.8, 0.85), lambda m: [m.l(0, 0, 0.8, 0.8, 0, 0.8, "#2f3f2a", tw=0.7, td=0.7, edges="faint"), m.b(0, 0, 0.72, 0.72, 0.8, 0.05, "#2f3f2a"), m.b(0, 0.39, 0.3, 0.02, 0.05, 0.2, "#24301f")])
    add("tool_shed_small", "Geräteschrank (außen)", "Garden tool cabinet", (1.3, 0.8, 1.9), lambda m: [m.b(0, 0, 1.3, 0.8, 0, 1.75, "#4a5a4a", edges="faint"), m.l(0, 0, 1.4, 0.9, 1.75, 0.15, "#3a3f48", tw=1.4, td=0.05), m.b(0, 0.401, 0.004, 0.002, 0.05, 1.6, BLACK), *[m.b(x, 0.402, 0.02, 0.01, 0.8, 0.15, STEEL) for x in (-0.05, 0.05)]])
    add("bike_garage", "Fahrradgarage", "Bike garage", (2.0, 1.0, 1.4), lambda m: [m.b(0, 0, 2.0, 1.0, 0, 0.05, "#5a5f68"), m.l(0, 0, 2.0, 1.0, 0.05, 1.35, "#3a404c", tw=2.0, td=0.6, tz=-0.2, edges="faint"), m.b(0, 0.49, 1.9, 0.02, 0.05, 0.9, "#4a505c")])
    add("carport_single", "Carport", "Carport", (3.2, 5.5, 2.4), lambda m: [*[m.b(x, z, 0.12, 0.12, 0, 2.25, "wood") for x in (-1.5, 1.5) for z in (-2.6, 0, 2.6)], *[m.b(x, 0, 0.1, 5.5, 2.05, 0.2, "wood") for x in (-1.5, 1.5)], m.b(0, 0, 3.2, 5.5, 2.25, 0.15, "#3a404c", edges="faint")])
    add("outdoor_shower", "Gartendusche", "Garden shower", (0.6, 0.6, 2.2), lambda m: [m.b(0, 0, 0.6, 0.6, 0, 0.05, "wood"), m.c(0, -0.2, 0.05, 0.05, 0, 2.2, STEEL), m.b(0, -0.05, 0.05, 0.3, 2.15, 0.03, STEEL), m.c(0, 0.1, 0.22, 0.22, 2.12, 0.03, STEEL)])
    add("barrel_sauna", "Fasssauna", "Barrel sauna", (2.2, 2.4, 2.2), lambda m: [m.c(0, 0, 2.2, 2.4, 0.15, 2.0, "#a8784a", axis="z", edges="faint"), *[m.c(0, z, 2.25, 0.06, 0.12, 2.05, "#6a4a2a", axis="z") for z in (-1.0, 1.0)], m.b(0, 1.2, 0.7, 0.03, 0.4, 1.4, "glass"), m.c(0.6, 0.5, 0.12, 0.12, 2.0, 0.4, BLACK), *[m.b(x, 0, 0.12, 2.0, 0, 0.18, "wood") for x in (-0.6, 0.6)]], electric=True)
    add("swim_spa", "Swim-Spa", "Swim spa", (2.3, 5.0, 1.3), lambda m: [m.b(0, 0, 2.3, 5.0, 0, 1.3, "#5a4a3a", edges="faint"), m.b(0, 0, 2.1, 4.8, 1.0, 0.31, WATER), m.b(0, -2.2, 1.6, 0.3, 0.9, 0.12, "#9fd3f2", glow=True), m.b(0, 2.0, 2.1, 0.6, 1.0, 0.25, "#5a4a3a")], electric=True)
    add("pool_round", "Aufstellpool rund", "Above-ground pool (round)", (3.6, 3.6, 1.2), lambda m: [m.c(0, 0, 3.6, 3.6, 0, 1.2, "#3a6a8a", edges="faint"), m.c(0, 0, 3.45, 3.45, 0.9, 0.27, WATER), m.b(1.8, 0, 0.6, 0.5, 0, 1.25, STEEL)])
    add("pool_ladder", "Poolleiter", "Pool ladder", (0.6, 0.6, 1.4), lambda m: [*[m.l(x, 0, 0.04, 0.6, 0, 1.4, STEEL, tz=0, td=0.04) for x in (-0.25, 0.25)], *[m.b(0, z, 0.5, 0.1, y, 0.03, STEEL) for z, y in ((-0.2, 0.35), (-0.1, 0.7), (0.1, 0.7), (0.2, 0.35))]])
    add("pool_pump", "Poolpumpe mit Sandfilter", "Pool pump with sand filter", (0.8, 0.5, 0.8), lambda m: [m.b(0, 0, 0.8, 0.5, 0, 0.05, "#5a5f68"), m.c(-0.15, 0, 0.4, 0.4, 0.05, 0.6, "#3a6a8a", edges="faint"), m.c(-0.15, 0, 0.15, 0.15, 0.65, 0.12, BLACK), m.c(0.25, 0, 0.25, 0.4, 0.1, 0.25, "#3a404c", axis="z"), m.c(0.25, 0, 0.12, 0.12, 0.35, 0.05, "#37e0ff", glow=True)], electric=True)
    add("pool_heat_pump", "Pool-Wärmepumpe", "Pool heat pump", (1.0, 0.4, 0.65), lambda m: [m.b(0, 0, 1.0, 0.4, 0, 0.65, "#d8dde5", edges="faint"), m.c(-0.15, 0.2, 0.45, 0.02, 0.1, 0.45, "#2a303c", axis="z"), m.b(0.35, 0.2, 0.12, 0.002, 0.45, 0.06, "#2a303c", screen=True)], electric=True, climate=True)
    add("daybed_outdoor", "Outdoor-Daybed mit Dach", "Outdoor daybed with canopy", (2.0, 2.0, 2.2), lambda m: [m.b(0, 0, 2.0, 2.0, 0, 0.35, RATTAN, edges="faint"), m.b(0, 0, 1.9, 1.9, 0.35, 0.15, "#e8dcc4"), m.b(0, -0.8, 1.8, 0.25, 0.5, 0.25, "#d8c4a4"), *[m.b(x, z, 0.06, 0.06, 0.35, 1.8, BLACK) for x in (-0.95, 0.95) for z in (-0.95, 0.95)], m.b(0, 0, 2.0, 2.0, 2.15, 0.05, "#e8dcc4")])
    add("swing_set", "Doppelschaukel", "Double swing", (3.2, 1.8, 2.3), lambda m: [*[m.l(x, 0, 0.1, 1.8, 0, 2.3, "wood", tw=0.1, td=0.1) for x in (-1.5, 1.5)], m.c(0, 0, 3.1, 0.1, 2.2, 0.1, "wood", axis="x"), *[part for x in (-0.6, 0.6) for part in (m.b(x - 0.2, 0, 0.015, 0.015, 0.45, 1.75, "dark"), m.b(x + 0.2, 0, 0.015, 0.015, 0.45, 1.75, "dark"), m.b(x, 0, 0.45, 0.18, 0.42, 0.04, RED))]])
    add("slide", "Rutsche mit Podest", "Slide with platform", (0.8, 3.2, 1.8), lambda m: [*[m.b(x, z, 0.08, 0.08, 0, 1.5, "wood") for x in (-0.36, 0.36) for z in (-1.56, -0.86)], m.b(0, -1.21, 0.8, 0.78, 1.2, 0.06, "wood", edges="faint"), m.l(0, 0.45, 0.5, 2.5, 0, 1.25, "#3b9a4a", tz=-0.75, td=0.05), *[m.b(0, -1.6 + 0.0, 0.6, 0.04, y, 0.04, "wood") for y in (0.3, 0.6, 0.9)]])
    add("playhouse", "Spielhaus", "Playhouse", (1.4, 1.2, 1.8), lambda m: [m.b(0, 0, 1.4, 1.2, 0.1, 1.2, "#e8dcc4", edges="faint"), m.l(0, 0, 1.5, 1.3, 1.3, 0.5, RED, tw=1.5, td=0.05), m.b(0, 0.6, 0.5, 0.02, 0.1, 0.9, "#3b7bb5"), m.b(0.45, 0.6, 0.3, 0.02, 0.6, 0.3, "glass"), m.b(0, 0, 1.4, 1.2, 0, 0.1, "wood")])
    add("football_goal", "Fußballtor", "Football goal", (3.0, 1.2, 2.0), lambda m: [m.c(-1.45, 0.55, 0.08, 0.08, 0, 2.0, WHITE), m.c(1.45, 0.55, 0.08, 0.08, 0, 2.0, WHITE), m.c(0, 0.55, 2.98, 0.08, 1.92, 0.08, WHITE, axis="x"), m.l(0, 0, 2.9, 1.1, 0, 1.9, "#d8dde5", tz=0.4, td=0.1, edges="faint")])
    add("table_tennis", "Tischtennisplatte (außen)", "Table tennis table (outdoor)", (1.53, 2.74, 0.76), lambda m: [m.b(0, 0, 1.53, 2.74, 0.73, 0.03, "#2a5a8a", edges="faint"), m.b(0, 0, 1.53, 0.02, 0.76, 0.15, WHITE), m.b(0, 0, 0.01, 2.74, 0.761, 0.001, WHITE), *[m.b(x, z, 0.06, 0.06, 0, 0.73, "#3a404c") for x in (-0.6, 0.6) for z in (-1.1, 1.1)]], surface=True)
    add("basketball_hoop", "Basketballkorb", "Basketball hoop", (1.2, 1.5, 3.05), lambda m: [m.b(0, -0.55, 0.9, 0.4, 0, 0.3, BLACK), m.c(0, -0.55, 0.12, 0.12, 0.3, 2.7, "#3a404c"), m.b(0, -0.3, 1.1, 0.04, 2.6, 0.45, "glass", edges="glow"), m.c(0, 0.0, 0.46, 0.46, 3.0, 0.02, "#ff7a1a"), m.l(0, 0.0, 0.46, 0.46, 2.6, 0.4, WHITE, tw=0.3, td=0.3)])
    add("path_light", "Wegeleuchte", "Path light", (0.15, 0.15, 0.6), lambda m: [m.c(0, 0, 0.12, 0.12, 0, 0.5, "#3a404c"), m.c(0, 0, 0.1, 0.1, 0.45, 0.08, WARM, glow=True), m.c(0, 0, 0.15, 0.15, 0.53, 0.03, "#3a404c")], electric=True, light="bollard")
    add("light_poles", "Lichterkette mit Masten", "String light poles", (6.0, 4.0, 2.8), lambda m: [*[m.c(x, z, 0.08, 0.08, 0, 2.8, "#3a404c") for x, z in ((-2.9, -1.9), (2.9, -1.9), (2.9, 1.9), (-2.9, 1.9))], *[m.c(x, z, 0.08, 0.08, 2.55, 0.08, WARM, glow=True) for x, z in [(-2.9 + 5.8 * i / 6, -1.9) for i in range(1, 6)] + [(-2.9 + 5.8 * i / 6, 1.9) for i in range(1, 6)] + [(2.9, -1.9 + 3.8 * i / 4) for i in range(1, 4)]]], light="garden")
    add("solar_garden_lamp", "Solar-Gartenkugel", "Solar garden globe", (0.3, 0.3, 0.3), lambda m: [m.c(0, 0, 0.3, 0.3, 0, 0.3, "#f2ead8", glow=True, edges="faint")], light="garden")
    add("outdoor_fireplace", "Gartenkamin", "Outdoor fireplace", (1.4, 0.8, 2.2), lambda m: [m.b(0, 0, 1.4, 0.8, 0, 0.5, STONE, edges="faint"), m.b(-0.55, 0, 0.3, 0.8, 0.5, 0.7, STONE), m.b(0.55, 0, 0.3, 0.8, 0.5, 0.7, STONE), m.b(0, -0.1, 0.8, 0.6, 0.5, 0.65, BLACK), m.b(0, 0.1, 0.6, 0.3, 0.52, 0.25, "#ff7a1a", glow=True), m.l(0, -0.05, 1.4, 0.7, 1.2, 0.4, STONE, tw=0.5, td=0.4), m.b(0, -0.05, 0.5, 0.4, 1.6, 0.6, STONE)], light="floor")
    add("pizza_oven_garden", "Pizzaofen (Garten)", "Garden pizza oven", (1.2, 1.2, 1.9), lambda m: [m.b(0, 0, 1.2, 1.2, 0, 0.9, "#9a8a7a", edges="faint"), m.c(0, -0.05, 1.1, 1.1, 0.9, 0.55, TERRACOTTA), m.b(0, 0.5, 0.4, 0.06, 0.95, 0.25, BLACK), m.b(0, 0.48, 0.3, 0.03, 0.97, 0.15, "#ff7a1a", glow=True), m.c(0, -0.3, 0.16, 0.16, 1.4, 0.5, "#6a6f78")], light="floor")
    add("kamado", "Keramikgrill (Kamado)", "Ceramic grill (kamado)", (1.3, 0.7, 1.15), lambda m: [*[m.b(x, 0, 0.04, 0.6, 0, 0.55, STEEL) for x in (-0.2, 0.2)], m.c(0, 0, 0.6, 0.6, 0.4, 0.6, "#2f6a3a", edges="faint"), m.c(0, 0, 0.12, 0.12, 1.0, 0.1, BLACK), *[m.b(x, 0, 0.32, 0.55, 0.7, 0.03, "wood") for x in (-0.5, 0.5)]])
    add("smoker", "Smoker", "Smoker grill", (1.6, 0.7, 1.5), lambda m: [*[m.b(x, z, 0.05, 0.05, 0, 0.7, BLACK) for x in (-0.55, 0.55) for z in (-0.25, 0.25)], m.c(0, 0, 1.2, 0.6, 0.65, 0.55, "#2a2f38", axis="x", edges="faint"), m.b(0.72, 0, 0.35, 0.45, 0.6, 0.45, "#2a2f38"), m.c(-0.5, 0, 0.12, 0.12, 1.15, 0.35, BLACK), *[m.c(x, 0, 0.12, 0.6, 0, 0.12, BLACK, axis="z") for x in (-0.55, 0.55)]])
    add("herb_spiral", "Kräuterspirale", "Herb spiral", (2.0, 2.0, 0.8), lambda m: [m.c(0, 0, 2.0, 2.0, 0, 0.2, STONE, edges="faint"), m.c(0.1, 0.1, 1.5, 1.5, 0.2, 0.2, STONE), m.c(0.2, 0.2, 1.0, 1.0, 0.4, 0.2, STONE), m.c(0.25, 0.25, 0.5, 0.5, 0.6, 0.2, STONE), *[m.c(x, z, 0.3, 0.3, y, 0.1, c) for x, z, y, c in ((-0.7, 0.2, 0.2, LEAF), (0.2, -0.5, 0.4, "#7f9a6a"), (0.5, 0.3, 0.6, LEAF_LIGHT), (0.25, 0.25, 0.8, "#9a7fba"))]])
    add("vegetable_bed", "Gemüsebeet", "Vegetable bed", (3.0, 1.2, 0.5), lambda m: [m.b(0, 0, 3.0, 1.2, 0, 0.08, "#5a4330"), *[m.c(-1.25 + i * 0.25, z, 0.2, 0.2, 0.08, 0.15 + (i % 3) * 0.08, [LEAF, LEAF_LIGHT, "#7f9a6a"][i % 3]) for i in range(11) for z in (-0.3, 0.3)]], household="plant")
    add("fruit_bushes", "Beerensträucher (Reihe)", "Berry bushes (row)", (3.0, 0.7, 1.3), lambda m: [*[part for x in (-1.1, 0.0, 1.1) for part in (m.c(x, 0, 0.7, 0.7, 0, 1.2, LEAF_DARK, edges="faint"), *[m.c(x + dx, 0.3, 0.06, 0.06, y, 0.06, RED) for dx, y in ((-0.15, 0.6), (0.1, 0.8), (0.18, 0.4))])]])
    add("palm_tree", "Palme", "Palm tree", (3.0, 3.0, 5.0), lambda m: [m.c(0, 0, 0.3, 0.3, 0, 4.4, BARK), *[m.l(0, 0, 0.1, 0.1, 4.2, 0.8, LEAF, tx=x, tz=z, tw=1.2, td=0.35) for x, z in ((0.9, 0), (-0.9, 0), (0, 0.9), (0, -0.9), (0.65, 0.65), (-0.65, -0.65), (0.65, -0.65), (-0.65, 0.65))]])
    add("bamboo", "Bambus (Horst)", "Bamboo clump", (1.4, 1.4, 3.5), lambda m: [*[m.c(x, z, 0.06, 0.06, 0, 3.0 + (i % 3) * 0.2, "#7f9a4a") for i, (x, z) in enumerate(((0.2, 0.1), (-0.2, 0.15), (0.0, -0.25), (0.35, -0.2), (-0.35, -0.1), (0.1, 0.35)))], m.c(0, 0, 1.4, 1.4, 1.6, 1.9, LEAF_LIGHT, edges="faint")])
    add("rose_bush", "Rosenstrauch", "Rose bush", (0.9, 0.9, 1.1), lambda m: [m.c(0, 0, 0.9, 0.9, 0, 1.0, LEAF_DARK, edges="faint"), *[m.c(x, z, 0.12, 0.12, y, 0.1, c) for x, z, y, c in ((0.25, 0.2, 0.8, RED), (-0.2, 0.25, 0.9, "#f2a7c0"), (0.1, -0.3, 0.85, RED), (-0.3, -0.1, 0.7, "#f2a7c0"), (0.0, 0.0, 1.0, RED))]], household="plant")
    add("lavender_row", "Lavendelreihe", "Lavender row", (2.0, 0.5, 0.6), lambda m: [*[part for i in range(5) for part in (m.c(-0.8 + i * 0.4, 0, 0.4, 0.4, 0, 0.35, "#7f9a6a"), m.c(-0.8 + i * 0.4, 0, 0.32, 0.32, 0.35, 0.2, "#9a7fba"))]])
    add("tree_magnolia", "Magnolie", "Magnolia tree", (3.5, 3.5, 4.5), lambda m: tree_round(m, 2.8, 1.4, "#f2c4d8"))
    add("tree_cherry", "Zierkirsche", "Ornamental cherry", (4.5, 4.5, 5.0), lambda m: tree_round(m, 3.0, 1.8, "#f2a7c0"))
    add("tree_willow", "Trauerweide", "Weeping willow", (6.0, 6.0, 7.0), lambda m: [m.c(0, 0, 0.5, 0.5, 0, 3.5, BARK), m.l(0, 0, 6.0, 6.0, 0.6, 4.0, LEAF_LIGHT, tw=3.0, td=3.0, edges="faint"), m.c(0, 0, 3.4, 3.4, 4.6, 2.2, LEAF_LIGHT)])
    add("boxwood_ball", "Buchskugel im Topf", "Boxwood ball in a pot", (0.6, 0.6, 0.9), lambda m: [*plant_pot(m, 0.35, 0.45, "#5a5f68"), m.c(0, 0, 0.55, 0.55, 0.35, 0.55, LEAF_DARK, edges="faint")], household="plant")
    return [("nextfloor.x_garten", "Garten & Wellness", "Teiche, Brunnen und Wasserspiele, Sandkasten, Strandkorb, Holz, Vogelhaus, Fasssauna, Swim-Spa, Pooltechnik, Spielgeräte, Gartenlicht, Grills und Pflanzen", items)]


def build(bp):
    return [*deco(bp), *smart(bp), *kitchen_bath(bp), *garden(bp)]
