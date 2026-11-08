---
title: Plan-Format
description: Das JSON-Format eines NextFloor-Plans, und wie eine KI deinen Plan aus einem Bild des Grundrisses zeichnet.
---

Ein Plan ist ein einziges JSON-Dokument. *Editor → Sicherung → Importieren* liest es, du kannst also einen Plan von Hand schreiben, aus einem anderen Programm umwandeln oder von einer KI aus einem Bild deines Grundrisses zeichnen lassen. Alles, was du weglässt, bekommt beim Import einen sinnvollen Standardwert.

> [!NOTE]
> Dieser technische Teil ist noch auf Englisch, damit Beispiele und Feldnamen eindeutig bleiben. Eine deutsche Fassung ist willkommen: [Mitmachen](contributing.md).

## The smallest plan

```json
{
  "floors": [
    {
      "name": "Ground floor",
      "elevation": 0,
      "height": 2.5,
      "rooms": [
        { "id": "living", "name": "Living room", "points": [[0, 0], [5, 0], [5, 4], [0, 4]] },
        { "id": "garage", "name": "Garage", "points": [[5, 0], [11, 0], [11, 4], [5, 4]] }
      ],
      "openings": [
        { "room_id": "living", "edge": 0, "offset": 2.5, "type": "door", "style": "front" },
        { "room_id": "living", "edge": 2, "offset": 2.0, "type": "window", "width": 1.6, "leaves": 2 },
        { "room_id": "garage", "edge": 2, "offset": 3.0, "type": "garage" }
      ]
    }
  ]
}
```

- **Units are metres.** `points` are the corners of a room as `[x, z]`, seen from above: x grows to the right, z grows downwards in the plan. Go round the room in either direction; do not repeat the first corner at the end.
- **Rooms that touch share their walls.** Draw neighbouring rooms with the same corner coordinates on the shared side and NextFloor builds one wall between them.
- **ids** are optional. Missing or repeated ids are replaced on import, but an opening needs the `id` of its room in `room_id`, so give rooms an id when they have openings.

## Floors

| Field | Meaning | Default |
|---|---|---|
| `name` | Shown in the floor bar | "Floor 1", "Floor 2" … |
| `elevation` | Height of the floor above the ground floor, in m (cellar: negative) | 2.8 m per floor |
| `height` | Floor-to-ceiling height in m | 2.5 |
| `rooms`, `openings`, `furniture`, `outdoor`, `walls` | Lists, see below | empty |

## Rooms

| Field | Meaning | Default |
|---|---|---|
| `id` | Any short text, unique on the floor | made up |
| `name` | Room name | empty |
| `points` | Corners `[x, z]` in m | required |
| `area_id` | The Home Assistant area (its id, e.g. `living_room`), so the room finds its devices | none |
| `floor_material` | `wood`, `oak`, `tiles`, `carpet`, `stone` or `concrete` | `wood` |
| `ceiling` | Own ceiling height in m | the floor's height |

## Doors and windows (`openings`)

An opening sits on one edge of a room: edge `0` runs from the first corner to the second, edge `1` from the second to the third, and so on; the last edge runs back to the first corner.

| Field | Meaning | Default |
|---|---|---|
| `room_id` | The room whose edge it sits on | required |
| `edge` | Index of that edge | 0 |
| `offset` | Distance of the opening's **middle** from the edge's first corner, in m | 0.5 |
| `type` | `door`, `window` or `garage` | `door` |
| `width`, `height` | In m | door 0.9 × 2.05, window 1.2 × 1.3, garage 2.5 × 2.1 |
| `sill` | Bottom of a window above the floor, in m (0 = terrace door) | window 0.9, else 0 |
| `leaves` | `1` or `2` (double door, French window) | 1 |
| `style` | Doors: `front`, `interior`; windows: `glass_wall` | automatic |

Everything else (hinge side, swing, contacts, blinds) is easiest to set afterwards in the editor: select the door or window and pick its kind at the top of its form.

## Furniture, free walls, outdoor areas and devices

All of these are optional lists on a floor.

**`furniture`**: a piece of the library or a pack.

| Field | Meaning |
|---|---|
| `id` | Short unique id |
| `type` | A built-in type such as `sofa`, `bed`, `table`, `chair`, `desk`, `wardrobe`, `kitchen`, `fridge`, `bathtub`, `wc`, `washbasin`, `plant`, `rug`, `tv_board`, or `pack:<pack id>:<item id>` |
| `x`, `z` | Centre in m, in the same plan coordinates as the rooms |
| `w`, `d`, `h` | Width, depth and height in m |
| `rotation` | Degrees around the vertical axis (0 = the front looks along +z) |
| `variant` | `null` |
| `entity` | Linked Home Assistant entity, or `null` (automatic) |

**`walls`** (free-standing walls, for a partition inside a room): `{ "id": "w1", "a": [x, z], "b": [x, z], "thickness": 0.1, "height": null }`. Room walls come from the room edges, so do not draw those again.

**`outdoor`** (lawn, terrace, path, driveway, pool, bed, hedge, fence, pergola): `{ "id": "o1", "type": "terrace", "points": [[x, z], …] }`, outside the rooms.

**`placements`** (a Home Assistant device on the plan): `{ "entity_id": "light.kitchen", "x": 2.0, "z": 3.0, "y": null }`.

Coordinates are metres, x to the right and z **down** the plan (the top left corner of the house is about `[0, 0]`). Anything the AI leaves out can be added in the editor; anything unknown is ignored when the plan is read.

## Other ways in

Besides a NextFloor plan, the import takes Sweet Home 3D (`.sh3d`), DXF, IFC and the JSON of an Apple **RoomPlan** scan (an iPhone or iPad with LiDAR, scanned with an app that exports the RoomPlan JSON): walls, doors and windows come over, a few objects become furniture.

## Let an AI draw it

Give the AI a picture of your floor plan and this prompt:

> Turn this floor plan into a NextFloor plan, as JSON following https://github.com/therealMRBK/NextFloor/blob/main/docs/plan-format.md. Use metres; read the scale from the dimensions in the picture. One floor object per storey. Rooms as polygons of their inner corners, touching rooms must share exact coordinates. Give every room a short id. Put every door, window and garage door into `openings` with its room, edge index and the distance of its middle from the edge's first corner. Output only the JSON.

Then *Editor → Backup → Import*, check the result in the editor, and fix what the AI got wrong. Drawing the plan over the picture (*Template*) is often just as fast for small houses.
