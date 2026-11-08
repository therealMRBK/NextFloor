---
title: Plan tools
description: Check the plan, areas and the plan on paper, notes, versions, backup, sharing and imports from other programs.
---

## Check the plan

*✓ Check the plan* at the top of the editor's side panel lists what is missing or off, floor by floor:

- rooms without an area, and areas without a room
- devices of a room that are not placed yet
- overlapping rooms
- doors and windows off their wall
- links to entities Home Assistant no longer knows
- standby eaters, with their yearly cost

Blue buttons fix a finding with one tap (Undo works as always); *Show* opens the spot. A short tour guides you through a new plan, and the sheet of keys opens with `?`.

## Areas and the plan on paper

The room form shows the room's **Living area**, counted like the German *Wohnflächenverordnung*:

- in full from 2 m clear height
- half between 1 m and 2 m
- nothing below 1 m

Garages, cellars and utility rooms are left out by their name; *Counts as living area* decides by hand. The floor form adds the areas up for the floor and the house.

*🖨️ Print plan / PDF* opens every floor at **1:100** with measurements and a table of areas. Print it, or save it as PDF from the print dialog.

## Notes

Right-click (or long-press) a spot in the plan and choose *✎ Note here*. Type the text and, if you like, the day it is due. Notes stand as yellow pins in their floor's 3D view (orange once due). A tap shows the whole text, and the search finds them.

A note can also show *exactly where* something is: its **height above the floor** puts the pin, say, under the basement ceiling at the shutoff valve. A **photo** (uploaded or as a URL) shows when the note is tapped, so someone who has never done it sees what the valve looks like.

## Versions

*📌 Save this state …* keeps the plan under a name, for example "before the renovation". It stays when the automatic restore points go. *Compare* on a version lists, floor by floor, what differs from the plan now.

## Backup and import

Under *Backup* in the editor:

| Action | What it does |
|---|---|
| **Export** / **Import** | the plan as a file |
| **Share as template** | the plan without your personal device data |
| **Back up everything** | plan, pictures and packs in one file |
| **Restore a full backup** | brings that file back |
| *🔗 Share a view* | saves the house as a small HTML file that opens in any browser without Home Assistant (through the online demo, without devices), to show it to someone |

> [!TIP]
> Back up before big changes.

### Import from other programs

Under *Backup → Import*:

- **iPhone room scan:** a scan made with Apple's RoomPlan loads as rooms, walls, doors and windows.
- **Sweet Home 3D** (`.sh3d`, version 5.3 and newer): levels become floors, rooms become rooms, doors and windows sit in their walls, free walls stay free. Furniture is not taken over.
- **DXF** (`.dxf`, from a CAD program): closed polylines become rooms, lines become free walls.
- **IFC** (`.ifc`, from Revit, ArchiCAD, Allplan …): its storeys become floors and its spaces become rooms; NextFloor draws the walls from the rooms.

A plan can also be written by hand, converted from another program, or drawn by an AI from a picture of your floor plan. The format and a ready prompt are in [Plan format](plan-format.md).

## 3D print export

*3D print (STL)* in the 3D view's settings saves the house as an STL file at 1:100, one metre becoming 10 mm. It holds walls, floors, furniture and outdoor areas of every floor; windows, lights and the roof are not in it.
