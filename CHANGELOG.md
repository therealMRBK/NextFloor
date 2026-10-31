# Changelog

All notable changes to NextFloor, newest first. Every release lists what is **Added**, **Changed** and **Fixed**. Releases: [GitHub releases](https://github.com/therealMRBK/NextFloor/releases).

## Unreleased

### Fixed

- **Plugin devices show their own icon in the editor** by @Mika2108 ([#28](https://github.com/therealMRBK/NextFloor/pull/28)): the plan, the device's form and the room's device list use the icon picked in the plan, else the plugin's Material Design icon, else the kind's symbol, as the 3D view does. Cameras no longer show as clocks.

## 0.15.0

### Added

- **Wall-mounted air conditioner** (#23): the *Utility & building services* pack has a split air conditioner, an indoor unit for the wall and an outdoor unit. The indoor unit links to a climate entity like the wall thermostat.
- **Switch devices only in the opened room** by @Mika2108 (#26): card option *Switch devices only in the opened room* (`tap_in_room: true`). In the house and floor views a tap opens the floor or room, even on a device or its marker, so a tap meant for a room no longer switches a lamp by accident. In the opened room nothing changes; a long press still opens the menu or details everywhere.
- **Choose the markers outside the opened room** by @Mika2108 (#26): card option `markers_outside` with one chip per kind (lights, blinds, heating, media, switches, fans, locks, contacts and detectors, sensors, furniture with an action, other). In the opened room the usual marker setting applies.
- **Own tap action for furniture** by @Mika2108 (#26): *Tapping the item* in the furniture form runs one of the own-button actions (open a path, an entity's details, a service, a browser_mod popup) instead of the usual tap, with a marker above the item.

- **Cameras and alarm panels as a plugin** (#27): the new *Cameras* plugin in the plugin store (*Extensions → Plugins → Open plugin store*) puts security cameras back into the plan. A camera shows its field of view as a wedge on the floor that stops at walls and turns red while a motion, person, vehicle or animal sensor of the same device detects something. A tap on the camera or its wedge opens Home Assistant's own live player in a small window in the corner (or HA's dialog). Mount, field of view, reach, tilt and detections are set in the camera's form, and a handle in the plan turns it. Alarm panels get a shield with their state, and a tap opens the keypad.
- **More for plugins**: a device extension can now add fields to the device's form (`settings`), draw a wedge on the floor (`floorWedge`), handle taps and open a small window in the corner of the 3D view (`tap`, `showWindow`), and name further entities to watch (`watch`). Devices a plugin takes on are drawn in the editor's plan too. See [docs/plugins.md](https://github.com/therealMRBK/NextFloor/blob/main/docs/plugins.md).

### Changed

- **Hide any entity of a room** (#24): in a room's device list, the further entities of a device (behind *more*) can now be hidden from the room and have their state hidden too, like the device's main entity.

### Fixed

- **Editing doors and windows froze the plan** (#25): when the form of a selected item could not be drawn, the whole editor stopped updating. A new door only showed up after a second click, the door form did not open and a dragged door stayed put. The plan now keeps working, and the side bar shows what went wrong (with a way back) so it can be reported.
- An entity whose name is a number (set in YAML) no longer breaks the entity lists in the editor.

## 0.14.0

### Added

- **Less rain and snow on a card** by @Mika2108 (#18): the card option *Amount of rain and snow* (`weather_density`, 15 to 100 %) thins out rain, hail and snow, so a wall tablet still shows the house in heavy weather. Clouds, fog and lightning stay as the weather says.
- **New furniture library**: the built-in models and all packs stand together, sorted by what they are (seating, beds, kitchen, bathroom, TV & audio, pets …) instead of pack by pack. Every card shows a picture, the size and where it comes from; a model in several sizes (a base unit from 30 to 120 cm, a bed from 90 to 200) is one card with size chips. With a room selected the library shows what fits it (*Fits Kitchen*, its main kind open and on top), *Show all rooms* lifts that. Chips narrow it to ⚡ linkable, 💡 lit or 🌳 outdoor items, ★ favourites and recently used items stand at the top. Pictures are drawn once and kept in the browser; weak tablets show the cards without pictures.
- **Resizing keeps what should stay**: a pack item made wider, deeper or taller keeps its legs, arms, plates and handles at their real size and distance from the edge, and only the middle grows: a sofa stretched to 3.6 m keeps its 20 cm arms, a taller table gets longer legs under the same plate. Pack authors can switch it off per item with `"stretch": true`.
- **Smart locks on doors**: a door takes a smart lock (door form → *Smart lock*). A tap on the door in 3D locks or unlocks it, always asking first; while it stands unlocked, the door's free edge glows in the accent colour.
- **Light switches and sockets**: the *Smart home & tech* pack has light switches and sockets with 1 to 4 buttons in one frame, and an outdoor socket with a lid. Each button gets its own entity; it glows while that is on, a light switch in its light's colour, a socket green and brighter the more it draws. A tap switches it; with several buttons a small menu asks which. The same entity may sit on several switches.
- **Curtains, screens, awnings and gates that move**: furniture with moving parts follows a cover entity (*Moves with* in its form): awnings in three widths reach out over the terrace, a curtain gathers to both sides, an inside roller blind and the roll-down projection screen roll up, a sliding gate slides away, the motorised curtain gathers to its side. They travel at motor speed, and a tap opens the cover's menu (up, stop, down). Pack authors mark parts with `move` (`down`, `left`, `right`, `out`, `slide_left`, `slide_right`) and the item with `cover`.
- **Look *Auto***: the day look while the sun is up, neon after sunset (from `sun.sun`), in the panel and as card option `theme: auto`.
- **Clock in the view**: a large clock with the date in a corner of the 3D view (panel: 🕒 next to the markers; card option `clock: top_left | top_right | bottom_left | bottom_right`).
- **3D lock** for wall tablets: the 🔒 button next to the eye stops turning, zooming and panning by hand on this device; taps, long presses and swipes on devices still work. Cards can hide the button (`lock_button: false`).
- **Own background**: *Editor → Settings → Own background* puts the house in front of a colour or a picture of your own (`/local/…` or https), dimmed as much as you like, instead of the look's sky.
- **Light wells**: an outer window whose sill lies below the ground (a cellar window) gets a concrete light well with a grating at ground level by itself; *Light well in front* in the window's form switches it off.
- **Different end at each end of a roof**: gable, hip and half-hip sections can take their own shape at the start and at the end of the ridge (a hip at one end, an upright gable at the other).
- **Sill and board per window**: automatic, none, inside only or outside only.
- **Import from Sweet Home 3D**: *Backup → Import* also takes a `.sh3d` file (Sweet Home 3D 5.3 and newer): levels become floors, rooms become rooms (moved onto the walls' centre lines, so neighbours share one wall), doors and windows go into the walls they stand in, and walls without a room become free walls. Its furniture stays behind; before taking it over NextFloor says what it found.
- **Household**: waste bins (residual, organic, paper, recycling; 120 and 240 l) and mailboxes in the garden pack. A bin shows its next pickup from a sensor (days, a date, "today"/"tomorrow" or Waste Collection Schedule) and glows the day before and on the day; a mailbox glows while there is post; a plant (the built-in one and the pack plants) shows its soil moisture and glows when it is thirsty. Their pins come up while something is due. Washers, dryers and dishwashers show the time they have left when their device has a remaining-time sensor.
- **Pets that roam**: a cat, a dog and a rabbit in the pets pack walk around their room in 3D, round the furniture, and sit for a while between their walks. While they all sit nothing is drawn, and on the *Tablet* level they rest with the other decorations.
- **Day curve on the house card**: the energy card over the roof shows the last 24 hours, solar as a filled curve and consumption as a line, worked out from the history of exactly the sensors the card reads (refreshed every 10 minutes).
- **Feet and inches**: *Editor → Settings → Show lengths in* shows the lengths and areas of the plan, the forms and the wall view in feet and inches (to the half inch) and square feet; inputs stay in metres.
- **Valleys for L- and T-shaped houses**: a wing roof that butts against the eave of a bigger roof at a right angle now runs into that roof's slope like a cross gable, so the two roofs meet in valleys instead of the wing ending in a gable wall at the eave.
- **Sloped walls**: a third wall view next to *Tall walls* and *Cut*: the walls are cut on a slope, half height on the side facing the camera and full height at the back, like a doll's house; the slope turns with the camera.
- **Solid walls with colours**: the new switch *Solid* shows opaque walls in real colours instead of glass. *Editor → Settings* sets the wall colour outside and inside, and each room can have its own inside colour. In an open room the walls in front of the camera are lowered. Works in the dashboard card too (`solid_walls: true`, `walls: slope`).
- **Seven more languages**: NextFloor now speaks French (thanks to Mika2108), Spanish, Italian, Dutch, Polish, Portuguese and Swedish besides German and English, following the language of your Home Assistant user, furniture names included. Each language loads only when it is needed.
- **Plan format and AI import**: [docs/plan-format.md](https://github.com/therealMRBK/NextFloor/blob/main/docs/plan-format.md) describes the plan file, with a ready prompt that lets an AI turn a picture of your floor plan into a plan for *Backup → Import*.

### Fixed

- **A garage door follows its contact when the cover cannot tell** by @Mika2108 (#21): a remote without feedback (`assumed_state`, always `unknown`) no longer shows the door open while its contact says closed.
- **Quick menu for covers without feedback** by @Mika2108 (#21): such a cover keeps its open, close and stop buttons; the centre button stays off while the state is unknown.
- **Entities that a plugin gives a kind** by @Mika2108 (#21) are offered in the editor's area lists, *without area* and *other areas*.
- **Walking keys by their place on the keyboard** by @Mika2108 (#21): W A S D walk under the same fingers on QWERTY, QWERTZ and AZERTY (Z Q S D).
- **Doors and windows of an imported plan can be selected again**: a plan written by hand or by an AI without ids (or with repeated ones) gets an id for every room, door, window, piece of furniture and outdoor area, so they can be picked and changed (e.g. into a garage door). Missing sizes, the plan version and the settings are filled in instead of refusing the file.

## 0.13.0

### Added

- **Import furniture packs again**: *Extensions → Furniture packs* imports your own packs as files or as JSON pasted straight into a text field, lists the packs you imported and removes them. The format is in [docs/packs.md](https://github.com/therealMRBK/NextFloor/blob/main/docs/packs.md).
- **Climate devices in furniture packs** by @carmona15 (#14): a pack item marked `climate: true` (a wall-mounted A/C, a heat pump) links to a Home Assistant climate entity, found automatically in the room's area like a radiator's thermostat, and can have a power sensor. How to mark an item: [docs/packs.md](https://github.com/therealMRBK/NextFloor/blob/main/docs/packs.md).

### Fixed

- **Wall thermostat** (#17) now links to a climate entity instead of asking for a TV. Climate items from packs are also offered under *Show as furniture* for a climate entity, next to the radiator.

## 0.12.0

### Added

- **Plugin store**: *Extensions → Plugins → Open plugin store* lists reviewed community plugins from [NextFloor-Plugins](https://github.com/therealMRBK/NextFloor-Plugins) and installs them with one click. Authors submit a plugin with a pull request, which is reviewed by hand. Every entry points at a file pinned to one commit and carries its SHA-256; NextFloor checks the hash before the plugin runs and offers newer versions as an update.

### Fixed

- **Solar fields on a mansard roof** (#13) now lie on the roof instead of sinking into it. Each side offers two roof faces to choose from: the steep lower slope and the flatter upper slope above the break. Fields placed on a mansard before keep their spot on the lower slope; move a field that should sit higher onto the upper face.

## 0.11.0

### Added

- **Ceiling height per room** (#12): a room can have its own ceiling height (room form → *Ceiling height*), e.g. a 2.12 m bathroom on a 4 m floor. Ceiling lights, ceiling fans, LED strips under the ceiling, ceiling devices and placed ceiling lights hang from it, and the room's walls are that high (a wall shared with a room without its own ceiling keeps the floor height; between two rooms with their own ceilings it takes the higher one). Heights set by hand on a wall still win.
- **Ceiling height at one spot** (#12): ceiling lights and other hanging items have a *Ceiling here* field for a sloping ceiling or a single high spot (a light at 4 m).
- **Ceiling fans** (#11): a new *Ceiling fan* in the lights section. Link its light kit like any lamp and its fan entity (found on the light's device or in the room). In 3D the blades turn as fast as the fan runs; the fan's pin shows its speed, a tap switches it, swiping up or down changes the speed and a long press opens the quick menu. Its height is how far it hangs from the ceiling, so a fan on a downrod hangs lower.

## 0.10.0

### Added

- **Plugins:** NextFloor can now be extended without changing its code. A plugin is a JavaScript file you add on the **Extensions** page (from `/config/www`, HACS or HTTPS). Plugins can add their own light animations (they show up in a light's effect settings), show entities NextFloor does not know (a robot vacuum, a lawn mower) with their own icon and text, and add small cards to a room's panel. A broken plugin never breaks the house view; its errors show next to it on the Extensions page. How to write one: [docs/plugins.md](https://github.com/therealMRBK/NextFloor/blob/main/docs/plugins.md).
- **Sub-meters (advanced energy mode)** by @TheRealSimon42 (#8): a meter can hang off another meter, e.g. one sub-meter per flat behind the house's main meter; solar plants and batteries can hang off a sub-meter, and the house card shows the common rest. Off by default.
- **Configurable light effects** by @TazztheMonster (#9): map a light's effect names to rainbow, pulse, flicker or a static look, or turn animations off for one lamp without changing anything in Home Assistant.

### Changed

- The README credits NeonPlan 3D by Mastershort, the project NextFloor started from.

### Fixed

- Light effects are no longer all shown as a rainbow: plans without a mapping and unknown effects keep the colour and brightness from Home Assistant, pulse and flicker keep the base colour, and lights that are off or unavailable do not animate.

## 0.9.1

### Changed

- **A pool cuts itself out of the areas around it:** a pool drawn inside a terrace (or a lawn) now leaves a hole there on its own, so the terrace runs around the pool and not over it. Any other area can still do the same with **Cut out of surrounding areas**. The order the areas were drawn in no longer matters: before, only areas drawn *before* the cutting one got the hole. The hole carries no light of the area around it either. Asked for in discussion #6.

### Fixed

- **A folded room panel no longer hangs in the picture:** on a wide window or in landscape the folded panel stayed at the top right and covered the view. It now drops to the bottom edge, above the switches (and to the bottom of the card), so it is out of the way. Reported in discussion #3.

## 0.9.0

### Added

- **Sloping walls:** every wall in the room's wall list has a new button **Sloping**. It gives the wall a height at its start and another at its end, and the top runs straight between them: a lean-to room, a wall that follows a sloping ceiling, clerestory windows high on the tall side. Both heights may be above the floor height. Windows and doors on such a wall stay under its top, so a window near the high end can be taller than one near the low end. A corner added to a sloping wall splits the slope at the height it has there. Asked for in discussion #4.
- **Outdoor areas can have any shape:** the selected lawn, terrace, pool, fence and so on now shows a **+** in the middle of every edge, like a room. Drag it to add a corner; the corner buttons in the form (**1 ×**, **2 ×** …) take a corner away again. Asked for in discussion #6.
- **Flat roofs can be reshaped the same way:** the **+** on the edges of a flat or parapet roof turns the rectangle into a free shape, and its corners can be added, dragged and removed. (Pitched roofs stay rectangles over their ridge; L- and T-shaped houses are still built from several sections.) Asked for in discussion #6.
- **Turn a solar field on a flat roof:** the solar form has **Rotation** with quick **↺ 90°** and **↻ 90°** buttons. The field turns about its middle, its modules and frames turn with it, and it is kept on the roof. Asked for in discussion #5.
- **Fold the room panel away:** the room panel has a new **−** button next to the ✕. It hides the devices and keeps the room in view, which is what you want on a phone; a tap on the arrow opens it again. The panel starts open for every room. Asked for in discussion #3.

## 0.8.3

### Fixed

- **Real map showed "Access blocked" (403) instead of the map:** Home Assistant asks the browser to send no Referer to other sites, and OpenStreetMap's tile servers refuse requests without one. NextFloor now loads every map tile with an explicit referrer policy (only your Home Assistant's address, not the full page address), in the plan and in 3D. The tiles are kept in the browser while the map is on.

## 0.8.2

### Added

- **Room buttons on the dashboard card:** a new switch *Room buttons* in the card editor puts a row of buttons, one per room, along the top of the card. A tap opens the room (switching to its floor first when needed), a second tap closes it. In the house view the rooms of all floors show, grouped by floor. Asked for in discussion #2.

## 0.8.1

### Fixed

- **Blue light frame around a TV that is on, even with *Glow behind the TV* at 0:** the glow frame that fades out around the screen of a TV that is on ignored the setting. With 0 it is now gone completely, and values below 100 make it weaker. (0.8.0 only removed the bright outline of the TV's body.)

## 0.8.0

### Added

- **Twelve new furniture packs with 417 models, all built from scratch:** Living room (70), Kitchen (66), Bedroom (41), Bathroom (38), Garden & patio (33), Home cinema & hi-fi (36), Smart home & tech (30), Office & gaming (26), Pets (24), Kids' room (18), Utility & building services (18) and Fitness (17).
- **Existing packs grew:** Vehicles now has cars of every class, vans, a pickup, a campervan, a motorhome and a caravan (34); Stairs & railings has floating and winder stairs and a corner railing (13); Architecture & fit-out has steel columns, ceiling beams, niches, a light cove, a window seat and more (21); Garage & workshop has a tool wall, shelving, a mower, wallbox holder and more (22).
- Every model is visible in the demo's showcase.
- **Compass control:** under Settings a dial shows where north lies, with **Swap north ↔ south** (180°) and quarter turns. Turning the compass never moves the drawing, the roof faces or the solar fields; sunlight, wind and the compass directions of roof faces follow it. So a plan drawn the wrong way round is fixed in one tap, without placing the solar fields again.
- **Real map under the plan (off by default):** a dimmed OpenStreetMap (or your own tile address) lies under the plan in the editor and under the house in 3D, turned by the compass. Start at Home Assistant's location, set the visibility and detail level, and move the map with arrow buttons until the house sits on its plot. Nothing is loaded while it is off.

### Fixed

- **TV without glow still had a blue frame:** with *Glow behind the TV* set to 0 the TV's own bright blue outline stayed. It now takes the plain furniture outline, so a TV set to no glow is not lit at all.

### Changed

- **Guide rewritten:** `docs/manual.md` and `docs/anleitung.md` are new, organised by what you do (install, draw, furnish, connect, use) instead of by feature list, and match the current features.
- **Demo of the development version:** the online demo now has a second page under `/dev/` that always shows the latest state of the `dev` branch (marked "DEV"); the normal demo keeps showing the released version.
- **Cameras are gone:** the camera wall, flying into a camera's live picture, the motion trail, detection pins, the field-of-view wedge and the camera device kind were removed. Placed `camera.*` entities are no longer shown.
- **Extensions tab:** it now only holds the upload of your own 3D models and the project links. The feature list and the furniture pack list are gone, and so is the hint box in the furniture library.

## 0.7.0

### Added

- **Three new free furniture packs**, all built from scratch in NextFloor's own part format:
  - **Treppen & Geländer (10):** straight, L-shaped, U-shaped, spiral and space-saving staircases, landing, outdoor steps and railings in metal, glass and wood. The staircases cut their opening into the floor above.
  - **Architektur & Ausbau (10):** round and square columns, ceiling beam, chimney breast, glass partition, sliding wall, raised platform, half wall, shelving divider and pilaster.
  - **Garage & Werkstatt (9):** workbench, tool cabinet and trolley, storage rack, stack of tyres, drill press, compressor, bicycle stand and paint cabinet.
- All three appear in the demo's model showcase.

## 0.6.3

### Added

- **Model showcase in the online demo:** every model of NextFloor, the basic ones and those of all packs, can be looked at live in a room of their own, ten at a time, with the names listed in the order they stand. Open the demo and choose "All models" (bottom right), or use `?showcase`.

### Changed

- **Languages:** NextFloor now comes in German and English only; Home Assistant instances in any other language show English. The 14 further language files were removed.

### Fixed

- The online demo no longer fails to deploy on a release (it deploys when the demo changes on `main`).
- A formatting slip in the Python code that made the checks fail.

## 0.6.2

### Added

- **Glow behind the TV:** a TV, monitor or TV board has a new setting "Glow behind the TV (%)" in the editor. 0 switches the blue ambilight off (handy with LED strips on the TV), 100 is the usual strength, up to 150.

## 0.6.1

### Fixed

- **Camera wall:** the pictures are now tiles of a sensible size (at most 560 px wide, as many per row as fit, centred) instead of one picture stretched over the whole screen when there is a single camera. Tiles lift slightly when you point at them.

## 0.6.0

### Added

- **Upload 3D models in the app:** on the Extensions page every item that takes a model has an "Add a model" button. Choose the `.glb`, turn the front towards you, tick the body paint (guessed for you), pick the level of detail, check the preview and store it on your Home Assistant. NextFloor does the work of `tools/prepare-model.mjs` itself: it merges the parts, makes the model lighter, writes plain glTF without textures and marks the paint. Files that are compressed (Draco, Meshopt) are refused with a hint. You can replace and remove models there too.

### Changed

- The editor, the side panel, the dashboard card and parts of the 3D view were reorganised internally into smaller, tested modules. Behaviour and look are unchanged.
- The README is shorter, with a feature table and a screenshot gallery.

## 0.5.0

- **Twelve Tesla models:** Model 3 (to 2023, 2024 and Performance), Model S and S Plaid, Model X, Model Y (2020 to 2024, 2025 Standard, Premium and Performance, and Model Y L) and the Cybertruck are separate items, each ready for its own 3D model, in the paint colours Tesla offers. Without a model file on your Home Assistant they show the simple shape.
- `tools/prepare-model.mjs` can leave out see-through fade layers and light beams (`--drop-materials`) and finds the front of the car by its charge port (`--rear`).

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
