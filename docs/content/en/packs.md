---
title: Furniture packs
description: Import, build and share furniture packs. The JSON format of a pack with every field.
---

Furniture packs bring extra furniture to NextFloor. They are built from boxes, cylinders and lofts just like the built-in furniture, so they run as smoothly on weak tablets.

A pack is a plain JSON file. Anyone can build, share and import their own.

## Furniture builder and community furniture

The easiest way to build furniture is the **[furniture builder](https://therealmrbk.github.io/NextFloor/builder/)** in your browser: add parts, type the measurements in centimetres, choose colours. The 3D preview draws the piece exactly as NextFloor does. The builder checks the pack like the import does, saves it as a file and shares it with one button in the **community store** ([NextFloor-Plugins](https://github.com/therealMRBK/NextFloor-Plugins#community-furniture)). Shared packs then wait in NextFloor under **Extensions → Community furniture**, ready to install.

## Packs that come with it

43 packs with about 800 models come with the integration (`custom_components/nextfloor/packs/nextfloor.*.json`) and are always there; see the overview in [the library](furnish.md#the-library). They are generated with `python3 tools/build_packs.py` from the definitions in `tools/` (`build_packs.py` and the `area_*.py` modules). After a change there, run the script, check with `python3 tools/check_packs.py` and commit the JSON files too. Built-in packs cannot be removed, and an imported pack must not use the same ID.

## Your own pack

1. Write the pack (JSON, format below). The `id` should start with your name (`myname.kitchen`) so it collides with nobody; `nextfloor.*` is reserved for the built-in packs.
2. Import it in Home Assistant under **Extensions → Furniture packs**: with **Import pack files …** (several files at once work) or paste the JSON into the text field and press **Import JSON**. Your own packs can also be removed there.
3. A newer version with the same `id` replaces the old one; furniture in the plan stays. If a pack is removed, its furniture stays in the plan as plain boxes and comes back when you import it again.

## Format

```json
{
  "format": "nfpack",
  "version": 1,
  "id": "myname.kitchen",
  "name": "Kitchen pack",
  "publisher": "My name",
  "description": "optional",
  "items": [
    {
      "id": "retro_fridge",
      "name": { "de": "Retro-Kühlschrank", "en": "Retro fridge" },
      "size": [0.6, 0.65, 1.5],
      "electric": true,
      "parts": [{ "shape": "box", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 1, "color": "white", "edges": true }],
      "symbol": [{ "shape": "rect", "x": 0, "z": 0, "w": 1, "d": 1 }]
    }
  ]
}
```

### Size and resizing

`size` is the default size in metres (width, depth, height). In the plan every piece can be scaled freely afterwards. Parts within 22 cm of either end keep their real size and their distance from the edge (arms, legs, plates, handles); only the middle is stretched. `"stretch": true` on the item lets all parts grow evenly instead. Vehicles always grow evenly.

### Parts

`parts` (at most 60) are `box`, `cyl`, `loft` or `sweep`. All measures are **fractions of the furniture's size**.

| Field | Meaning |
|---|---|
| `x`, `z` | centre, −0.5 … 0.5 (the front is +z) |
| `w`, `d` | width and depth, 0 … 1 |
| `y`, `h` | bottom edge and height, 0 … 1 of the height |
| `rot` | degrees about the part's own centre on the vertical axis, for spiral stairs or diagonal struts |
| `color` | `#rrggbb` or a role of the built-in palette: `body`, `fabric`, `cushion`, `wood`, `white`, `metal`, `dark`, `glass`, `plant`, `pot`, `accent`. Roles fit the look |
| `top` | an own colour for the top face |
| `edges` | glowing edges: `true` subtle blue, `"glow"` cyan like the walls, `"faint"` very delicate |

- A **cylinder** takes the smaller of `w` and `d` as its diameter. With `axis: "x"` or `"z"` it lies down (wheels, rollers); the length is the extent along the axis, the diameter the smaller of the cross extent and `h`.
- A **loft** is a box whose top face is another rectangle (`tx`/`tz` centre, `tw`/`td` size) for sloping surfaces such as bonnets, windscreens or lampshades. A narrow loft with an offset top makes a slanted rod (handrail).
- A **sweep** is a smooth body: cross-sections along the depth (z) with skin stretched between them, for anything round such as cars, boats or mudguards. `stations` is a list of `[z, bottom, top, width]`: `z` the centre of the cross-section (−0.5 … 0.5), `bottom` and `top` as a fraction of the height, `width` as a fraction of the width. `x` shifts the body sideways. `exp` shapes the cross-section (2 = ellipse, higher is boxier, default 2.6) and `n` is the number of points around (6 … 32, default 16). The vehicles of the pack *Vehicles* are built this way, see `tools/build_packs.py`.

### Plan symbol

`symbol` (optional, at most 40) is the top view in the plan, made of `rect` (`fill` for filled), `circle` (`r` as a fraction of the smaller side) and `line` (`x1`, `z1`, `x2`, `z2`). Without a symbol the plan draws the parts from above.

### Behaviour flags

| Flag | What it does |
|---|---|
| `electric` | the piece can be linked to a switch and a power sensor |
| `climate` | marks an air conditioner or heat pump; links to a `climate` entity and optionally a power sensor. Automatic matching looks for `climate` entities in the room's area. Adds no 3D animation yet |
| `mount` | where the piece sits: `floor` (default), `surface` (on the piece below, such as a coffee machine on a worktop), `wall` (bottom edge at `wall_y` metres, such as a wallbox) or `ceiling` (hangs from the ceiling, such as an extractor hood or pendant lamps) |
| `surface` | the top carries other furniture (table, kitchen island, workbench) |
| `hole` | a stair: if it reaches the floor above, it cuts the stairwell opening into that floor like the built-in stair; the steps rise from the front edge (+z) to the back |
| `light` | the piece is a lamp and is linked to a light (or switch). The value says how the light fills the room (`ceiling`, `pendant`, `floor`, `table`, `wall`, `spot`, `garden` …). Parts with `"glow": true` glow in the light's colour and brightness |
| `screen` | a part with `"screen": true` is a display (TV, monitor); the piece can then be linked to a media player, and the front (+z) shows the running app's colour and picture like the built-in TVs |
