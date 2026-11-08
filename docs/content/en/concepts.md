---
title: How NextFloor works
description: The ideas behind NextFloor in five minutes: plan, areas, entities, the 3D view and what is stored where.
---

NextFloor has a small number of ideas. Once you know them, every other page of this documentation is easy to place.

## The plan is the centre

You draw your home once, as a **plan**: floors, rooms, walls, doors, windows, stairs, roofs, outdoor areas and furniture. Everything else is made from the plan. The 3D view, the room panel, the heat maps, the dashboard card and the printed floor plan are different ways of looking at the same data.

## Areas link rooms to devices

A **room** in NextFloor points at an **area** of Home Assistant. That is how NextFloor knows which devices belong where. When you open a room's form, the *Devices* section lists the devices of that area, and you place the ones you want on the plan.

Devices without an area, or from another area, are still reachable through the *Other areas* and *No area* tabs.

## Placing a device never switches it

Placing a lamp, linking a blind or choosing an entity only tells NextFloor *what a picture stands for*. NextFloor never switches anything by assigning it. It reads the live state of the entity, and only a tap in the 3D view sends a command.

## Furniture is the face of a device

A piece of furniture is a 3D model. Some pieces are **electric** (a lamp, a TV, a washing machine) and can be linked to an entity; the model then shows the state: the lamp glows, the TV shows the running app, the washer shows the minutes left. Other pieces are decoration.

## One plan, several views

| View | What it is for |
|---|---|
| **3D view** | The house as a model. Tap, swipe and long-press to control things. |
| **Room panel** | Every device of one room in one list, with scenes and quick menus. |
| **Editor** | Where you draw and link. Administrators only. |
| **Dashboard card** | The 3D view as a card, for any dashboard or wall tablet. |
| **Plan on paper** | Each floor at 1:100 with measurements and a table of areas. |

## What is stored where

| Data | Where |
|---|---|
| The plan, its pictures, your furniture packs | Home Assistant's `.storage` folder, on your installation |
| Plugins and extra models | Your Home Assistant, `www` folder or the store |
| Map tiles (only if you switch the real map on) | Loaded by your browser straight from the map server |
| Anything else | Nowhere. There is no account, no cloud and no usage data |

## What NextFloor adds to Home Assistant

- A sidebar panel and the card `custom:nextfloor-card`.
- Sensors for open windows and doors and for lights on. See [Services and sensors](automations.md).
- Actions such as `nextfloor.announce`. See [Announcements](announcements.md).

## Next

[Draw the house →](draw.md)
