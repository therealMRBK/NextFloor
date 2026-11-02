# NextFloor guide

This guide follows the way you actually work: install, draw, furnish, connect, then use. A video that walks through the whole setup from an empty page is linked in the [README](../README.md); its transcript is in the releases. German version: [anleitung.md](anleitung.md).

**NextFloor is free forever** – every feature, every furniture pack, every update, with no Pro version, no paid add-ons and no shop. New furniture packs keep coming, you can build your own in the [furniture builder](https://therealmrbk.github.io/NextFloor/builder/) and share them, and plugins extend it further. That belief is why the project exists: a live 3D home in Home Assistant should belong to everyone.

**Jump to:** [Install](#install) · [Draw the house](#draw-the-house) · [Furnish](#furnish) · [Connect devices](#connect-devices) · [Outside, roof and energy](#outside-roof-and-energy) · [Compass and map](#compass-and-map) · [Use the 3D view](#use-the-3d-view) · [Live features](#live-features) · [Dashboard card](#dashboard-card) · [Wall tablet](#wall-tablet) · [Own models and packs](#own-models-and-packs) · [Backup](#backup) · [Troubleshooting](#troubleshooting)

---

## Install

Needs Home Assistant 2025.1 or newer.

- **HACS:** add `therealMRBK/NextFloor` as a custom repository (category Integration), install, restart Home Assistant, then add the integration under Settings → Devices & services. A *NextFloor* entry appears in the sidebar.
- **By hand:** copy `custom_components/nextfloor` into your configuration folder, restart, add the integration.
- **Updates:** through HACS, then restart Home Assistant and reload the browser tab (on the companion app: Settings → Companion app → reset the frontend cache).

The plan, its pictures and the packs are stored in Home Assistant's `.storage`. Nothing leaves your installation.

## Draw the house

Open the **Editor** tab (administrators only). The toolbar holds the tools; the side panel always shows what is selected; the hint at the bottom names what the active tool does. **Undo** (Ctrl+Z) takes back almost everything.

1. **Add a floor.** *Add floor* offers the floors of Home Assistant (keeping plan and Home Assistant connected) or *Empty floor*. The floor form sets name, elevation, ceiling height and the Home Assistant floor. *Shift* and *Turn 90°* move or turn the whole floor; *Take every floor along* applies that to the whole house. *Add rooms from HA areas* drops a room per area as a start. *Duplicate floor* puts a copy on top of the house, with its furniture, device pins and outdoor areas if you like; the copy is unlinked from Home Assistant and set up for the new storey.
2. **Draw rooms.** *Rectangle*: drag. *Free shape*: place corners, close by tapping the first corner or Enter, Esc cancels. Corners snap to the grid and to existing walls; Alt switches snapping off for one move.
3. **Describe each room.** Name, *Area* (the link to Home Assistant devices) and *Floor* material. Position and size can be typed. Drag a corner handle to reshape; the **+** on an edge adds a corner.
4. **Walls.** They come from the room edges. Each edge has height, thickness, a scissors button that splits it into parts, and *No wall* for open edges. A lower height makes a parapet or counter. Free-standing partitions use the *Wall* tool (Shift keeps straight). *Close gaps* in the floor form joins hairline gaps. **◠ Arc** on an edge (or on a free wall) opens a *Bulge* field: type how far the middle bulges (negative bends into the room) and press *Bend*. A room sharing the whole wall bends along, doors and windows move with it; a room touching only part of the wall, or a free wall standing on it, stays straight. A door or window too wide for a deep curve stops the bend with a note.
5. **Doors and windows.** *Doors & windows*, tap a wall, pick the kind (door, front door, double door, window, double window, terrace door, French doors, garage door, glass wall). Set width, position from the corner, sill and height; swap hinge side or opening direction. Style *Automatic* picks front door outside and room door inside.
6. **Stairs and openings.** Stairs come from the *Stairs & railings* furniture pack and cut their opening into the floor above by themselves. *Floor opening* cuts any other hole (gallery, shaft).
7. **Template.** *Template (floor plan image)* puts a picture behind the plan; move, scale, turn and straighten it, set the scale from a known length, then trace.
8. **Lock.** The *Floor plan* lock stops rooms, walls, openings and outdoor areas from moving by accident; single pieces can be fixed with *Fix*.

**3D beside** shows the 3D model next to the plan while you draw. *View as this floor's / room's start* remembers the current 3D camera for later.

## Furnish

*Furniture* tool, tap a room, pick from the library on the right. New pieces appear in the middle of the room.

- The library has sections (lights, living, dining, kitchen, sleeping, bath, work, parking) and then the furniture packs. The search finds German and English names, pack names and several words in any order.
- Drag to move, drag corners to resize, use the turn handle or type position, size and rotation. *Mirror* flips left and right, *Duplicate* copies, *Fix* locks, *Move to floor* takes the item to the same spot on another floor.
- Items marked with an electrical symbol can be linked to devices (see below). Lamps are furniture with a light behind them; the lights section has twelve kinds.
- **Place spots:** a room's *Place spots* lays out a grid of lamps (columns × rows) that all follow one light, undoable in one step.
- **Library:** furniture sorted by kind (seating, beds, kitchen …) with a picture and its size; a model in several sizes is one card with size chips. With a room selected, what fits it comes first (*Fits …*), *Show all rooms* lifts that. Filters for ⚡ linkable, 💡 lit and 🌳 outdoor; ★ favourites and recently used stand at the top.
- **Resizing:** legs, arms, plates and handles keep their real size, only the middle grows.
- **Wall view (▣):** in a room's wall list, *Wall view* shows the wall from the front with its doors, windows and the furniture against it; drag, or type the distance and height.
- **Light switches and sockets** (smart home pack, 1 to 4 gang): each button with its own entity; it glows while what it switches is on.
- **Awnings, curtains, blinds, roll-down screen, sliding gate:** *Moves with* picks the cover entity they follow.

## Connect devices

In a room's form the **Devices** section lists the Home Assistant devices of that area. Tabs: *This area*, *Other areas*, *No area*; search by name. Each row: eye (hide in the 3D room panel), *Aa* (own name), star (add to the room panel without placing), *Place*.

- Placing a light turns it into a lamp. *Light or switch* names the light; *Colour and brightness from* is for relay-switched bulbs; *Glow in 3D* scales the glow; *Ask before switching* protects against accidental taps; *Marker in 3D* decides on the pin above it.
- Electric furniture (TV, fridge, washer …) finds its entity in the same area by itself ("Automatic"). TVs show the running app's colour and title; *Glow behind the TV* sets or switches off the ambilight. A power sensor shows the watts.
- Entity fields are searchable: type part of a name and pick. NextFloor never switches anything by assigning it.
- **Parking spot** (library section *Parking*): *Vehicle* picks the model, *Sensor "car present"* decides when it shows, any entity of the car lets NextFloor find charge, range, plug, lock and climate on the car's device.
- **Favourites and own buttons** (Settings area, *Favourites*): scenes, scripts, automations, switches and buttons for the central menu; own buttons open a dashboard path, entity details, a service call or a browser_mod popup. *Station or playlist* adds speaker presets.

## Outside, roof and energy

- **Outdoor:** drag out lawn, terrace, path, driveway, pool, flower bed, wild patch, hedge, fence or pergola. *Height offset* lowers or raises, *Slope* tilts, *Show the outline* toggles the glowing edge, *Cut out of the areas beneath* makes a hole (pond). Hedges and fences take a height. Garden and path lights come from the library and light the areas.
- **Roof:** the *Roof* tool builds roof sections from the rooms (shape, ridge direction, eaves, pitch; drag to move, corners to resize). The simple roof shape lives in Settings. Roof windows sit on a section and take a blind and contacts. Gable, hip and half-hip sections can end differently at each end of the ridge, and a wing that butts against a bigger roof runs into it with valleys.
- **Doors and windows (more):** a door takes a smart lock (tap the door to lock or unlock, it glows while unlocked); a window chooses its sill and board, can be left out of the rain warning, and below the ground gets a light well.
- **Energy:** the checklist asks for a solar field, a meter and an inverter (battery and grid connection optional). A solar field goes on the best south-facing roof section (it uses the compass), in the garden or on a wall; set rows, columns, portrait/landscape. Meter, inverter, battery, wallbox are devices placed here; the energy balance fields default to "Automatic", and *Take over from the energy dashboard* reads your existing setup.

## Compass and map

Under **Settings**:

- **Compass.** A dial shows where north lies (degrees clockwise from up). Sunlight, wind and the compass direction of roof faces follow it. If north and south are the wrong way round, press **Swap north ↔ south**; drawing, roof sections and solar fields stay as they are, only the directions change. Quarter turns and any angle are available too.
- **Real map.** Off by default. When on, a dimmed map (OpenStreetMap, or your own `https://…/{z}/{x}/{y}` tile address) lies under the plan in the editor and under the house in 3D. It starts at Home Assistant's location; set visibility and detail, move it with the arrows until the house sits on its plot. Your browser loads the tiles directly from the map server, and only while the map is on.
- Also here: wall thickness, grid, lengths in metres or feet and inches, roof shape, weather entity and effects, rain warning (optionally from your own rain sensor), a power outage sensor, sunlight patches, and an own background (a colour or a picture) behind the house.

## Use the 3D view

- **Move:** drag to turn, wheel to zoom, right button or two fingers to pan. Floor and room buttons at the top fly the camera there; *Back* or Esc goes up a level.
- **Look:** quality *Auto / Tablet / High*; themes *Neon / Blueprint / Day* with an accent colour; markers *None / Important / All*.
- **Switches at the bottom:** *Tall walls / Cut / Sloped*, *Solid*, *Apart / Stacked*, *Roof stays*, heat map (*Temp., Humidity, CO₂, Values*), *Room names*, *Weather*, *Power flow*, *Cards*.
- **Walls:** *Sloped* cuts the walls on a slope, half height in front and full height at the back, like a doll's house; the slope turns with the camera. *Solid* shows opaque walls in their colours instead of glass; in an open room the walls in front of the camera are lowered. Set the colours in the editor: *Settings → Wall colour outside / inside*, and per room *Wall colour inside (this room)*. *Solid* and *Sloped* can be combined.
- **Room panel:** lights (switch, brightness, colour temperature, colour dots, *All off*), blinds, media, sensors, scenes. Tapping a lamp pin switches it, a long press opens the quick menu, a blind opens its menu.
- **Central menu (star):** all lights and blinds of the floor or house plus your favourites. **Search (magnifier):** type a device or room, the camera flies there.
- **Warnings:** smoke, gas, CO, water, alarm panel and windows open in the rain appear as banners; a tap jumps into the room.

## Live features

Built in and free; they only need the devices you already have.

- **Weather at the house:** rain, snow, hail, sleet, fog, clouds with shadows, lightning, sun and moon, driven by a weather entity and the compass.
- **Power flow:** particles from the solar modules to inverter, house, battery and grid; a glass card with the balance and self-sufficiency.
- **TV screens:** what plays, in the app's colour, plus ambilight.
- **Sound:** a card over every playing speaker or TV with cover and controls; sound rings in the app's colour; multiroom groups are joined by a thread.
- **Car:** a card over the parking spot with charge ring, range, charging power, plug, inside temperature and buttons for lock, climate and charging.

## Getting around

- **Walk through the house (🚶):** on the open floor at eye height. Drag to look around, W A S D or the arrow keys walk (Q/E turn), the mouse wheel takes a step, and on tablets the stick at the bottom right steers. ✕ ends it.
- **Time travel (⏪):** replays the last 24 hours or 7 days from Home Assistant's history: lamps, blinds, doors and windows, locks, media, robots. The bar marks every change; play at 1 min, 10 min or 1 h per second or drag to a moment. *Live* comes back; nothing is switched while in the past.
- **3D lock (🔒):** turning, zooming and panning are off on this device; taps on devices still work.
- **Clock:** 🕒 in the header puts a large clock in a corner of the view.
- **Look *Auto*:** the day look while the sun is up, neon after sunset.
- **House card:** the energy card over the roof shows the last 24 hours as a curve (solar as an area, consumption as a line).

## Household and pets

- **Waste bins** (garden pack, four colours, 120 and 240 l): pick the *Pickup date (sensor)* in the form, e.g. from Waste Collection Schedule or a sensor with days or a date. The day before and on the day the bin glows and shows its pin.
- **Mailbox:** pick the *Post sensor* (e.g. a contact on the flap); while there is post it glows.
- **Plants:** *Soil moisture (sensor)* and *Thirsty below (%)*; below that the plant glows.
- **Washer, dryer, dishwasher:** when the device has a remaining-time sensor in Home Assistant, its pin says "25 min left".
- **Pets** (pets pack: cat, dog, rabbit): walk around their room, round the furniture, with breaks in between.

## Announcements

*"Dinner is ready!"* – and the room that should hear it, hears it.

- **From a room:** the room panel has a **📢 Announcement** section when the room has a speaker. Tap a sentence, or type your own; the room's speaker says it. Your own sentences go into *Editor → Settings* (one per line).
- **The room's speaker:** chosen in the room's form, else a speaker placed in the room, else a voice assistant (Voice PE and other satellites), an Echo or a speaker of its area. A TV or a speaker that is off is never picked by itself. Voice satellites announce with their chime, Echos as a real announcement (Alexa Devices or Alexa Media Player), speakers that support it (Sonos and others) lower their music and play on after; any other speaker talks through Home Assistant's text-to-speech.
- **Quiet time per room:** in the room's form, e.g. 20:00–07:00 for a nursery. Announcements to several rooms leave the room out then; one meant only for that room still gets through.
- **On the screens:** every open NextFloor page (panel or card) shows the message big over the house, plays a soft chime and speaks it – an old wall tablet becomes an announcement speaker. Give a screen a name under ⚙ → 📢 (e.g. *Hallway*) to send announcements to it alone, or untick it there to keep it silent. Browsers play sound only after the page was tapped once; in Fully Kiosk switch on *Autoplay Audio* (Web Content Settings).
- **In automations:** the action **NextFloor: Announcement**.

```yaml
action: nextfloor.announce
data:
  message: "Someone is at the door!"
  rooms: [Kitchen, Living room]   # by name, room id or area id; leave out for every room with a speaker
  on_screens: true                # the open NextFloor screens show and speak it too
  screens: [Hallway]              # optional: only these screens
```

`floor` limits it to one floor, `on_speakers: false` keeps the speakers silent, `tts_entity` picks the voice. The action returns which speaker said it and which rooms were left out (and why).

## Dashboard card

Add *NextFloor* in the dashboard's card dialog (`type: custom:nextfloor-card`). The visual editor sets floor, size, look, accent, walls, quality, floors below, markers, heat map, power flow, cards, switches in the card, room buttons, central star, room names, energy values, room details on tap, full screen, floors apart, roof fade, warnings, scene buttons and weather. The same options exist in YAML under the names shown in the editor.

## Wall tablet

The card's kiosk section returns to the start view after idle time, dims at night (by the sun or a time range, colour effects rest), can turn the camera slowly as a screensaver and can show a button to another dashboard. Use quality *Tablet* on Fire tablets and similar.

## Own models and packs

- **Extensions tab → Furniture packs:** import your own furniture packs as files or paste their JSON straight in, and remove your own packs again. Format: [packs.md](packs.md) (German).
- **Extensions tab:** upload your own `.glb` model for a vehicle slot. The browser turns it the right way round, lightens it, removes textures and marks the paint; the file is stored on your Home Assistant (admins only, up to 12 MB). See [models.md](models.md).
- **Furniture packs** come with the integration (26 packs, over 600 models) and need no setup. Own packs are JSON files, format in [packs.md](packs.md). The demo has a model showcase that shows every model live.

## Backup

A plan from **Sweet Home 3D** (.sh3d, version 5.3 and newer) loads directly under *Backup → Import*: levels become floors, rooms become rooms, doors and windows sit in their walls, free walls stay free. Furniture is not taken over.

Under *Backup* in the editor: **Export** / **Import** for the plan, **Share as template** (without personal device data), **Back up everything** (plan, pictures, packs in one file) and **Restore a full backup**. Back up before big changes.

A plan can also be written by hand, converted from another program or drawn by an AI from a picture of your floor plan: the format and a ready prompt are in [plan-format.md](plan-format.md).

## Troubleshooting

- **A device is missing from the room:** the room needs an area, and the device must belong to it (device or entity). Otherwise use *Other areas* or *No area*.
- **Panel looks old after an update:** reload the tab; on the companion app reset the frontend cache and close the app completely. A Home Assistant restart does not help for this.
- **Furniture shows as grey boxes:** its pack is not installed; import it again and everything is back.
- **The car does not appear:** check the *Sensor "car present"*; without a sensor the vehicle is always shown.
- **The solar field lands on the wrong roof side:** check the compass in Settings.
- **Slow on a tablet:** quality *Tablet*, weather and power flow off.
- **Saving fails:** only administrators can save; the message names the field Home Assistant rejected.

Problems and ideas: [GitHub issues and discussions](https://github.com/therealMRBK/NextFloor).
