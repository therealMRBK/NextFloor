---
title: The 3D view
description: Move around, switch devices, use the room panel and the central menu, and set up the look: themes, walls, markers, maps and warnings.
---

![A room in 3D with its lamps and the room panel](view-room.jpg)

## Move

- **Drag** to turn, **wheel** to zoom, **right button** or **two fingers** to pan.
- The floor and room buttons at the top fly the camera there. *Back* or Esc goes up one level. Optionally, a short right click goes back too (the view's setting, or the card option `right_back`).
- **Floor plan only** hides the furniture for a clean plan view.

## Control things

- **Tap** a lamp pin to switch it, **swipe** to dim, **long-press** for the quick menu with colours. A blind opens its menu.
- Speakers and TVs open a quick menu with play and pause, skip, volume, sources and presets.
- Tap a door with a smart lock to lock or unlock it.

## The room panel

Open a room to get its panel:

- lights (switch, brightness, colour temperature, colour dots, *All off*)
- blinds, media, sensors
- **scenes** stand at the top; *＋ Save mood* keeps the room's lights as a mood to set again or carry over to another room (→)
- the room's temperature over the last 24 hours and when to air it

## Central menu and search

- **Central menu (star):** all lights and blinds of the floor or house plus your favourites. *★ Menu open* in ⚙ keeps it open and larger on this device. Own buttons light up while their entity is on.
- **Search (magnifier):** type a device or a room, and the camera flies there.

## Look and feel

| Setting | Options |
|---|---|
| Quality | *Auto*, *Tablet*, *High* |
| Theme | *Neon*, *Blueprint*, *Day*, with an accent colour |
| Markers | *None*, *Important*, *All* |
| Look *Auto* | the day look while the sun is up, neon after sunset |

**Switches at the bottom:** *Tall walls / Cut / Sloped*, *Solid*, *Apart / Stacked*, *Roof stays*, heat map, *Room names*, *Weather*, *Power flow*, *Cards*.

### Walls

- **Sloped** cuts the walls on a slope, half height in front and full height at the back, like a doll's house. The slope turns with the camera.
- **Solid** shows opaque walls in their colours instead of glass. In an open room the walls in front of the camera are lowered.
- *Solid* and *Sloped* can be combined.
- Set the colours in the editor: *Settings → Wall colour outside / inside*, per floor *Wall colour outside (this floor)* (a plinth, a garage) and per room *Wall colour inside (this room)*.

## Maps

Besides temperature, humidity and CO₂ the map selector has **Mould**, **Values** and **Wi-Fi**. See [Climate and energy](climate-energy.md).

## Warnings

Smoke, gas, CO, water, the alarm panel and windows left open in the rain appear as banners. A tap jumps into the room. A triggered alarm names the sensor that set it off and pulses its room. You can add [your own warnings](devices.md#favourites-buttons-and-warnings).

## Getting around

- **Walk through the house (🚶):** on the open floor at eye height. Drag to look around, `W A S D` or the arrow keys walk (`Q`/`E` turn), the mouse wheel takes a step, and on tablets the stick at the bottom right steers. ✕ ends it.
- **Time travel (⏪):** replays the last 24 hours or 7 days from Home Assistant's history: lamps, blinds, doors and windows, locks, media and robots. The bar marks every change. Play at 1 min, 10 min or 1 h per second, or drag to a moment. *Live* comes back. **Nothing is switched while you are in the past.**
- **3D lock (🔒):** turning, zooming and panning are off on this device; taps on devices still work.
- **Clock:** 🕒 in the header puts a large clock in a corner of the view.
- **Small screens:** 🔍 in ⚙ brings the fitted views closer. *🎥 Keep camera* keeps side, height and distance when switching floors.
- **Today:** with calendars chosen, a card top right lists today's appointments and the bins due today or tomorrow. *Days on the "Today" card* (house settings, with the calendars) shows up to seven days, each later day under its own heading.
- **Weather forecast:** in the house settings under *Weather forecast*, pick 3, 5 or 7 days and a corner (top left, or top right below *Today*). The card shows the weather of each day, its high and low and the rain (amount or chance). It reads the weather entity of the settings through `weather.get_forecasts`; an entity without a daily forecast shows no card.

## Next

[Live features →](live.md)
