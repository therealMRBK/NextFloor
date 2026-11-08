---
title: Outside, roof and energy
description: Outdoor areas, fences and gates, the roof tool, solar fields, cable routes, the compass, the real map and the sun arc.
---

![The house with its garden, roof and a solar field](view-energy.jpg)

## Outdoor areas

Drag out a lawn, terrace, path, driveway, pool, flower bed, wild patch, hedge, fence or pergola.

| Setting | What it does |
|---|---|
| *Height offset* | lowers or raises the area |
| *Slope* | tilts it |
| *Show the outline* | toggles the glowing edge |
| *Cut out of the areas beneath* | makes a hole, for a pond |

An area can be linked to a Home Assistant **Area**: its devices join Outside, and a pin opens it. Pools, ponds and beds can show a water temperature and a pump on that pin. Hedges and fences take a height. Garden and path lights come from the library and light the areas.

### Gates in fences

A fence can have **gates**: garden gate, double gate or sliding gate. Each gate sits at a position along the fence and takes an entity or contact; in 3D it opens when that entity is open or on.

### Opacity

*Opacity (%)* in an area's form makes it see-through, from 100 (solid) down to 10. That way a driveway or a lawn no longer hides the cellar in the stacked view, and the outline keeps it recognisable. The value is saved with the plan.

## The Outside panel

As soon as a device stands outside the rooms, the bar above the 3D view gets a **🌳 Outside** chip next to the floors. It opens the house view with a panel like a room's that lists the garden's devices.

A device that stands on the roof or over a room but belongs outside (a weather station) gets *Belongs to Outside* in its form. It then no longer counts for the room below and shows in the Outside panel. The dashboard card shows the chip with its room buttons.

To keep devices out of the Outside panel, use *Settings → Outside: hide devices*.

## Roof

The *Roof* tool builds roof sections from the rooms: shape, ridge direction, eaves, pitch. Drag to move, drag corners to resize. The simple roof shape lives in Settings.

- **Roof windows** sit on a section and take a blind and contacts.
- **Gable, hip and half-hip** sections can end differently at each end of the ridge. A wing that butts against a bigger roof runs into it with valleys.
- A section turns about its middle with *Turn (°)*, for a wing at an angle.
- A half-hip end has a slider for how high its hip starts.
- **Overhang per side:** *Overhang per side* sets the eaves overhang on every side separately. Without own values the overhang is automatic: the same everywhere, except where the roof part meets the house (none there).
- **Solar fields** on flat roofs can stand on east-west racks, and on pitched roofs on a rack with its own tilt.

## Doors and windows (more)

- A door takes a **smart lock**: tap the door to lock or unlock, it glows while unlocked.
- A window chooses its sill and board, can be left out of the rain warning, and below the ground gets a light well.

## Energy

The checklist asks for a **solar field**, a **meter** and an **inverter**. Battery and grid connection are optional.

1. Place the **solar field** on the best south-facing roof section (it uses the compass), in the garden or on a wall. Set rows, columns and portrait or landscape.
2. Place the meter, inverter, battery and wallbox as devices.
3. The energy balance fields default to *Automatic*. *Take over from the energy dashboard* reads your existing setup.

**Cable routes** draw where a cable really runs: solar field to inverter, battery, inverter and grid to the house, sub-meters. Press *Draw route*, tap the points on the plan, switch floors where the cable goes through a ceiling, then *Done*. The flow follows the route instead of an arc, and *Show as cable* draws it as a visible cable. A battery's route is walked either way as it charges or discharges.

*Gas meter* and *Water meter* add their readings to the balance. For what you see in 3D, see [Climate and energy](climate-energy.md).

## Compass and map

Under **Settings**:

- **Compass.** A dial shows where north lies, in degrees clockwise from up. Sunlight, wind and the compass direction of roof faces follow it. If north and south are the wrong way round, press **Swap north ↔ south**; drawing, roof sections and solar fields stay as they are, only the directions change. Quarter turns and any angle are available too.
- **Real map.** Off by default. When on, a dimmed map (OpenStreetMap, or your own `https://…/{z}/{x}/{y}` tile address) lies under the plan in the editor and under the house in 3D. It starts at Home Assistant's location. Set visibility and detail, and move it with the arrows until the house sits on its plot.

> [!NOTE]
> Your browser loads the map tiles directly from the map server, and only while the map is on. Nothing else about your home leaves your installation.

- **Sun arc and compass ring:** *Sun arc and compass* draws today's path of the sun as an arc over the property, with a ring and the compass directions on the ground (north in red). It needs your home's position in Home Assistant.
- Also here: wall thickness, grid, lengths in metres or feet and inches, roof shape, weather entity and effects, rain warning (optionally from your own rain sensor), a power outage sensor, sunlight patches, and an own background (a colour or a picture) behind the house.

## Next

[Plan tools →](plan-tools.md)
