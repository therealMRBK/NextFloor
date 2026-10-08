# Changelog

All notable changes to NextFloor. Releases: [GitHub releases](https://github.com/therealMRBK/NextFloor/releases).

## 0.4.0

- **Paint colours for vehicles:** every Tesla has the paint colours Tesla offers (Pearl White, Solid Black, Deep Blue, Ultra Red, Quicksilver and more; the Cybertruck its steel and wraps). Pick the colour in the editor, also for a car in a parking spot.
- **Your own 3D models:** put a model you own (`.glb`) on your Home Assistant and NextFloor draws it in place of the simple shape, with the paint colour you picked. The Tesla Model Y is the first item that takes one. NextFloor ships no model files; see [docs/models.md](docs/models.md) for how to prepare and add yours.

## 0.3.0

- **IKEA sizes:** a new furniture pack with 20 popular pieces in their published outer dimensions: bookcases, cube shelves, beds, chests of drawers, wardrobes, sofas, an armchair, a desk, tables and more. They are our own simple models of the sizes, not IKEA's designs or files.

## 0.2.0

- **Tesla models in 3D:** Model S, 3, X, Y, Cybertruck, Roadster and Semi in the vehicles pack, with their real outer dimensions. Put one on a parking spot and the car card follows it.
- **Smooth bodies for packs:** a new part shape, `sweep`, stretches a rounded skin over cross sections along the length. The Teslas are built with it; the format is described in [docs/packs.md](docs/packs.md).

## 0.1.0

The first release.

- Draw your home right inside Home Assistant: floors, rooms, walls, doors, windows, stairs, outdoor areas and a roof, with a 3D view next to the plan.
- Control it in 3D: lamps glow in their colours, blinds and doors follow their state, a room panel lists everything of the area.
- Ten built-in furniture packs (about 100 items) plus your own packs as plain JSON ([docs/packs.md](docs/packs.md)).
- Six live features: weather at the house, energy flow, TV screens, sound, car and cameras (camera wall, detection pins, motion trail).
- A dashboard card with a visual editor, three looks, kiosk mode for wall tablets, warnings for smoke, gas, water and open windows in the rain.
- English and German in the box, fourteen more languages fetched on demand.
- Free and open source, no account, no cloud: NextFloor does not talk to the internet.
