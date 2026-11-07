"""Packs Winter & Weihnachten and Halloween: decorations for a season, switched on and off with a light or a helper."""

from area_common import make

FIR = "#2f6b3a"
WARM = "#ffe2a0"


def build(bp):
    W = lambda *a, **k: make(bp, *a, **k)  # noqa: E731
    winter = []
    halloween = []

    winter.append(
        W(
            "christmas_tree",
            "Weihnachtsbaum",
            "Christmas tree",
            (1.0, 1.0, 2.0),
            lambda m: [
                m.c(0, 0, 0.12, 0.12, 0.0, 0.25, "wood"),
                m.c(0, 0, 0.95, 0.95, 0.2, 0.45, FIR),
                m.c(0, 0, 0.72, 0.72, 0.6, 0.45, FIR),
                m.c(0, 0, 0.5, 0.5, 1.0, 0.45, FIR),
                m.c(0, 0, 0.28, 0.28, 1.4, 0.4, FIR),
                m.b(0, 0, 0.12, 0.12, 1.78, 0.14, "#ffd25a", glow=True),
                *[
                    m.b(0.3 * a, 0.3 * b, 0.07, 0.07, 0.35 + 0.28 * k, 0.07, c, glow=True)
                    for k, (a, b, c) in enumerate(
                        [(1, 0.2, "#ff5a5a"), (-0.8, 0.5, "#ffd25a"), (0.2, -1, "#7fd0ff"), (-0.5, -0.8, "#ff5a5a"), (0.4, 0.6, "#ffd25a")]
                    )
                ],
            ],
            light="floor",
            electric=True,
        )
    )
    winter.append(
        W(
            "advent_wreath",
            "Adventskranz",
            "Advent wreath",
            (0.4, 0.4, 0.2),
            lambda m: [
                *[m.b(0.14 * ca, 0.14 * sa, 0.16, 0.06, 0.0, 0.05, FIR, rot=r) for ca, sa, r in ((0, 1, 0), (0.7, 0.7, -45), (1, 0, 90), (0.7, -0.7, 45), (0, -1, 0), (-0.7, -0.7, -45), (-1, 0, 90), (-0.7, 0.7, 45))],
                m.b(0, 0.14, 0.05, 0.05, 0.05, 0.1, "#ffffff"),
                *[m.c(sx * 0.14, sz * 0.14, 0.035, 0.035, 0.05, 0.14, "#c0262e") for sx, sz in ((1, 0), (-1, 0), (0, -1))],
                *[m.c(sx * 0.14, sz * 0.14, 0.02, 0.02, 0.19, 0.03, WARM, glow=True) for sx, sz in ((1, 0), (-1, 0), (0, -1), (0, 1))],
            ],
            light="table",
            electric=True,
            mount="surface",
        )
    )
    winter.append(
        W(
            "window_star",
            "Fensterstern",
            "Window star",
            (0.5, 0.06, 0.5),
            lambda m: [m.b(0, 0, 0.5, 0.04, 0.23, 0.04, "#fff4d6", glow=True, rot=r) for r in (0, 45, 90, 135)],
            light="wall",
            electric=True,
            mount="wall",
            wall_y=1.2,
        )
    )
    winter.append(
        W(
            "candle_arch",
            "Schwibbogen",
            "Candle arch",
            (0.7, 0.14, 0.5),
            lambda m: [
                m.b(0, 0, 0.7, 0.14, 0.0, 0.03, "wood"),
                m.b(-0.31, 0, 0.05, 0.05, 0.03, 0.3, "wood"),
                m.b(0.31, 0, 0.05, 0.05, 0.03, 0.3, "wood"),
                *[m.b(0.31 * c, 0, 0.18, 0.05, 0.3 + 0.1 * k, 0.05, "wood", rot=-r * c) for k, (c, r) in enumerate([(1, 20), (-1, 20)])],
                m.b(0, 0, 0.5, 0.05, 0.42, 0.05, "wood"),
                *[m.c(-0.27 + 0.09 * i, 0, 0.025, 0.025, 0.03 if i in (0, 6) else 0.3, 0.12, "#f4ecd8") for i in range(7)],
                *[m.c(-0.27 + 0.09 * i, 0, 0.018, 0.018, 0.15 if i in (0, 6) else 0.42, 0.04, WARM, glow=True) for i in range(7)],
            ],
            light="table",
            electric=True,
            mount="surface",
        )
    )
    winter.append(
        W(
            "reindeer_lit",
            "Leuchtendes Rentier",
            "Light-up reindeer",
            (0.9, 0.35, 0.9),
            lambda m: [
                m.b(0, 0, 0.55, 0.22, 0.32, 0.26, WARM, glow=True),
                m.b(0.32, 0, 0.12, 0.14, 0.5, 0.3, WARM, glow=True, rot=-20),
                m.b(0.42, 0, 0.2, 0.14, 0.72, 0.14, WARM, glow=True),
                *[m.b(0.4 + 0.04 * k, sz * 0.05, 0.03, 0.03, 0.84, 0.1 + 0.03 * k, "#fff4d6", glow=True) for k in range(3) for sz in (-1, 1)],
                *[m.b(sx * 0.2, sz * 0.08, 0.05, 0.05, 0.0, 0.34, WARM, glow=True) for sx in (-1, 1) for sz in (-1, 1)],
            ],
            light="garden",
            electric=True,
        )
    )
    winter.append(
        W(
            "snowman",
            "Schneemann",
            "Snowman",
            (0.6, 0.6, 1.5),
            lambda m: [
                m.c(0, 0, 0.6, 0.6, 0.0, 0.5, "#f4f7fb"),
                m.c(0, 0, 0.45, 0.45, 0.45, 0.4, "#f4f7fb"),
                m.c(0, 0, 0.32, 0.32, 0.8, 0.3, "#f4f7fb"),
                m.b(0, 0.17, 0.04, 0.12, 0.95, 0.04, "#ff8a2a"),
                m.c(0, 0, 0.3, 0.3, 1.08, 0.04, "#22252e"),
                m.c(0, 0, 0.2, 0.2, 1.1, 0.22, "#22252e"),
                *[m.b(sx * 0.07, 0.15, 0.03, 0.03, 1.0, 0.03, "#22252e") for sx in (-1, 1)],
            ],
        )
    )
    winter.append(
        W(
            "fairy_lights",
            "Lichterkette",
            "Fairy lights",
            (3.0, 0.04, 0.3),
            lambda m: [
                m.b(0, 0, 3.0, 0.01, 0.27, 0.01, "dark"),
                *[m.b(-1.4 + 0.2 * i, 0, 0.05, 0.05, 0.1 + 0.06 * (i % 2 == 0), 0.07, ["#ff5a5a", "#ffd25a", "#7fd0ff", "#7ee28a"][i % 4], glow=True) for i in range(15)],
            ],
            light="strip",
            electric=True,
            mount="wall",
            wall_y=2.2,
        )
    )
    halloween.append(
        W(
            "pumpkin",
            "Kürbis",
            "Pumpkin",
            (0.5, 0.5, 0.45),
            lambda m: [
                m.c(0, 0, 0.5, 0.5, 0.0, 0.38, "#e8741c"),
                m.c(0, 0, 0.42, 0.42, 0.04, 0.34, "#f08a2a"),
                m.b(0, 0, 0.06, 0.06, 0.38, 0.07, "#4a6a30"),
                *[m.b(sx * 0.1, 0.22, 0.07, 0.02, 0.22, 0.07, "#ffcf4a", glow=True) for sx in (-1, 1)],
                m.b(0, 0.23, 0.18, 0.02, 0.1, 0.05, "#ffcf4a", glow=True),
            ],
            light="table",
            electric=True,
            mount="surface",
        )
    )
    halloween.append(
        W(
            "ghost",
            "Gespenst",
            "Ghost",
            (0.5, 0.5, 1.0),
            lambda m: [
                m.l(0, 0, 0.5, 0.5, 0.0, 0.8, "#f4f6fa", tw=0.34, td=0.34),
                m.c(0, 0, 0.34, 0.34, 0.78, 0.16, "#f4f6fa"),
                *[m.c(sx * 0.08, 0.15, 0.06, 0.06, 0.72, 0.1, "#22252e") for sx in (-1, 1)],
                m.c(0, 0.16, 0.08, 0.06, 0.58, 0.1, "#22252e"),
            ],
        )
    )
    halloween.append(
        W(
            "gravestone",
            "Grabstein",
            "Gravestone",
            (0.6, 0.2, 0.8),
            lambda m: [
                m.b(0, 0, 0.7, 0.28, 0.0, 0.06, "#5f6672"),
                m.b(0, 0, 0.5, 0.15, 0.06, 0.55, "#868e9b"),
                m.c(0, 0, 0.5, 0.15, 0.55, 0.12, "#868e9b", axis="z"),
                m.b(0, 0.08, 0.04, 0.02, 0.34, 0.26, "#4b515c"),
                m.b(0, 0.08, 0.16, 0.02, 0.5, 0.04, "#4b515c"),
            ],
        )
    )
    halloween.append(
        W(
            "cauldron",
            "Hexenkessel",
            "Witch's cauldron",
            (0.7, 0.7, 0.6),
            lambda m: [
                m.c(0, 0, 0.62, 0.62, 0.12, 0.38, "#1f2229"),
                m.c(0, 0, 0.7, 0.7, 0.45, 0.07, "#2a2e37"),
                m.c(0, 0, 0.56, 0.56, 0.46, 0.04, "#6dff7a", glow=True),
                *[m.b(sx * 0.25, sz * 0.25, 0.08, 0.08, 0.0, 0.14, "#1f2229") for sx in (-1, 1) for sz in (-1, 1)],
            ],
            light="table",
            electric=True,
        )
    )
    return [
        ("nextfloor.a_winter", "Winter & Weihnachten", "Weihnachtsbaum, Adventskranz, Fensterstern, Schwibbogen, Rentier, Schneemann und Lichterkette", winter),
        ("nextfloor.a_halloween", "Halloween", "Kürbis, Gespenst, Grabstein und Hexenkessel", halloween),
    ]
