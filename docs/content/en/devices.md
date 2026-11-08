---
title: Connect devices
description: Link lights, blinds, TVs, printers, the car, pets and more to the plan. Favourites, own buttons and own warnings.
---

In a room's form, the **Devices** section lists the Home Assistant devices of that room's area. Tabs: *This area*, *Other areas* and *No area*; search by name.

Each row has an eye (hide it from the 3D room panel), *Aa* (an own name), a star (add it to the room panel without placing it) and *Place*.

> [!NOTE]
> Entity fields are searchable: type part of a name and pick. **NextFloor never switches anything by assigning it.**

## Lights

Placing a light turns it into a lamp. The lamp's form has these options:

| Option | What it does |
|---|---|
| *Light or switch* | names the light that belongs to the lamp |
| *Colour and brightness from* | for bulbs switched by a relay and dimmed elsewhere |
| *Glow in 3D* | scales the glow |
| *Ask before switching* | protects against accidental taps |
| *Marker in 3D* | decides about the pin above the lamp |

**Lamps with several bulbs:** *Bulb 2, 3 …* adds a night light or ambient ring of the same fixture. The lamp glows with them while its main light is off.

**Light programs:** under *Effect animations in 3D* you map every exact effect name Home Assistant reports to a look: *Static*, *Rainbow*, *Pulse* or *Flicker*. Unmapped effects stay static, because an effect name is only the name of a program. The mapping is stored with the plan and never writes to Home Assistant.

## Electric furniture

Furniture such as a TV, a fridge or a washer finds its entity in the same area by itself (*Automatic*).

- **TVs** show the colour and title of the running app. *Glow behind the TV* sets or switches off the ambilight.
- A **power sensor** shows the watts. Every electric piece shows its draw beside its state, and its status lights glow while it runs.
- **Washer, dryer, dishwasher:** with a remaining-time sensor, the pin says "25 min left".

## Blinds

A window's *Kind of blind* is a roller shutter outside, a venetian blind whose slats follow the tilt, or a roller blind inside.

- *Second blind* covers the right half of a wide window.
- *Favourite position "My"* adds a **My** button to the blind's quick menu (for example Somfy).
- Roof windows take a blind and contacts too. See [Outside, roof and energy](outside.md).

## Doors, locks and gates

A door takes a **smart lock**: tap the door to lock or unlock, and it glows while unlocked. **Gates** in fences open in 3D after the state of an entity or contact you choose. See [Outside, roof and energy](outside.md#gates-in-fences).

## Printer, heat pump, car

- **3D printer and heat pump:** link the printer or heat pump from the packs to any entity of its device. A live card shows the print (picture, progress, time left, layer, temperatures, filaments, and the print grows on the bed) or the heat pump (mode, flow and return, power, heat, COP).
- **Car (parking spot):** from the library section *Parking*. *Vehicle* picks the model, *Sensor "car present"* decides when it shows, and through any entity of the car NextFloor finds charge, range, plug, lock and climate on the car's device. Without a sensor the vehicle is always shown.

## Garden and pets

- **Robot mower:** a mower or dock from *Garden 2* linked to a `lawn_mower` mows lanes over its lawn while it mows.
- **Robot vacuum:** a `robot_vacuum` on the plan can show its real position and track. See [Robot vacuum on the plan](live.md#robot-vacuum-on-the-plan).
- **Pets:** a pet's *Room sensor* (Bermuda, ESPresense) lets it roam the room it really is in.
- More: [Household and pets](household.md).

## Presence: people in their rooms

*House settings → Presence* lists every `person`. Pick a **room sensor** (ESPresense, Bermuda or similar, whose state is the room name) and, while the person is home, their avatar with the Home Assistant picture stands in that room. People are counted per floor in the house view.

- **Default room:** every person can have a default room. While they are home and no room sensor names a room, they stand there, so a room sensor is not required.
- **Another entity:** below the list, add an input helper, a device tracker or a binary sensor. It counts as home while its state is `on` or `home`.

## Favourites, buttons and warnings

**Favourites and own buttons** (Settings, *Favourites*): scenes, scripts, automations, switches and buttons for the central menu. Own buttons open a dashboard path, entity details, a service call or a browser_mod popup. *Station or playlist* adds speaker presets, and a preset can be kept to some speakers.

**Own warnings** turn any entity into a line in the warning bar. Match a state, several states separated by commas, or a number with `<20` or `>80`, and give a text, a room and a colour.

**Calendars for "Today"** fill the *Today* card.

## Next

[Outside, roof and energy →](outside.md)
