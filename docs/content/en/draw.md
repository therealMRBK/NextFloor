---
title: Draw the house
description: Floors, rooms, walls, doors, windows, stairs and templates in the NextFloor plan editor.
---

Open the **Editor** tab (administrators only). The toolbar holds the tools, the side panel always shows what is selected, and the hint at the bottom names what the active tool does. **Undo** (Ctrl+Z) takes back almost everything.

![The plan editor with the 3D view beside it](editor.jpg)

## Floors

*Add floor* offers the floors of Home Assistant, which keeps plan and Home Assistant connected, or an *Empty floor*. The floor form sets the name, the elevation, the ceiling height and the Home Assistant floor.

- *Shift* and *Turn 90°* move or turn the whole floor; *Take all floors along* applies it to the whole house.
- *Create rooms from HA areas* places one room per area as a starting point.
- *Duplicate floor* puts a copy on top of the house, optionally with furniture, device pins and outdoor areas. The copy is detached from Home Assistant and set up for the new storey.
- *Close gaps* in the floor form joins hairline gaps between rooms.

## Rooms

- **Rectangle:** drag.
- **Free shape:** place the corners, close the shape by tapping the first corner or pressing Enter. Esc cancels.
- Corners snap to the grid and to existing walls. Hold **Alt** to switch snapping off for one move.

Describe each room in the side panel: name, **Area** (the link to your Home Assistant devices) and **Floor** material. Position and size can be typed. Drag a corner handle to reshape the room; the **+** on an edge adds a corner. A rectangular room shows its inside size from wall to wall.

> [!TIP]
> **＋ Area within the room** adds Home Assistant areas that are part of the room but have no walls of their own, such as a reading corner or a kitchenette. Their devices then belong to the room.

*Underfloor heating* names the thermostat, valve or switch whose heating makes the floor glow.

## Walls

Walls come from the room edges. Each edge has a height, a thickness, a scissors button that splits it into parts, and *No wall* for open edges.

- A lower height makes a parapet or a counter.
- A split edge can have its own thickness on every part.
- **Free-standing walls** use the *Wall* tool. Hold Shift to keep them straight.
- **◠ Arc** on an edge, or on a free wall, opens the *Bulge* field: enter how far the middle bulges (negative bulges into the room), then press *Bend*. A neighbouring room along the whole wall bends with it, and doors and windows move along. A room that touches only part of the wall, or a free wall on it, stays straight. If a door or window is too wide for a deep arc, the wall does not bend and a note says why.
- **Sloping free walls** have a height at each end for gables, ramps and sloping parapets.

## Doors and windows

Choose *Doors & windows*, tap a wall and pick the kind: door, front door, double door, window, double window, terrace door, French doors, garage door or glass wall. Set the width, the position from the corner, the sill and the height, and swap the hinge side or opening direction. The style *Automatic* picks a front door outside and a room door inside.

More on doors and windows lives in [Outside, roof and energy](outside.md#doors-and-windows-more) (smart locks, light wells) and in [Connect devices](devices.md#blinds) (blinds).

## Stairs and openings

The *Stairs* tool draws a stair where you drag; it runs along the long side.

| Setting | Options |
|---|---|
| Shape | straight, quarter turn, L with landing, half turn, U with landing, spiral |
| Direction | turns left or right |
| Build | solid, stringers, spine, cantilever; with or without risers and railing |

The rise comes from the floor height, and the form shows rise, tread and step length and warns about uncomfortable measures. *Leads down* makes a descent to a cellar that does not need to be drawn.

A stair opens the ceiling only where less than 2.2 m of headroom remains above the steps. The stairs from the *Stairs & railings* pack cut out their whole footprint. **Floor opening** cuts any other hole, for a gallery or a shaft.

## Template: trace a floor plan image

*Template (floor plan image)* puts a picture behind the plan. Move, scale, turn and straighten it, set the scale from a length you know, then trace it. For a scan or CAD file you can also [import it directly](plan-tools.md#import-from-other-programs).

## Lock

The *Floor plan* lock stops rooms, walls, openings and outdoor areas from moving by accident. Single pieces can be fixed with *Fix*.

## Useful switches

- **3D beside** shows the 3D model next to the plan while you draw.
- *View as this floor's / room's start* remembers the current 3D camera for later.
- **Right-click** (or long-press) a spot to pin a [note](plan-tools.md#notes).

## Next

[Furnish →](furnish.md)
