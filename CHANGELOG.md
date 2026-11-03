# Changelog

All notable changes to NextFloor, newest first. Every release lists what is **Added**, **Changed** and **Fixed**. Releases: [GitHub releases](https://github.com/therealMRBK/NextFloor/releases).

## 0.22.0

### Added

- **Rooms open to the floor above**: a room's *Ceiling height* may now be higher than its floor – a living room open up to the floor above or under the roof, a gallery. Its walls and windows rise with it, ceiling lights hang from the high ceiling, and the floor above stays open over it; that floor's editor shows the area hatched. Thanks to @Xtiger123X ([#55](https://github.com/therealMRBK/NextFloor/issues/55)).
- **Furniture studio in the editor**: *🛠️ Build your own piece* at the top of the furniture library builds a cabinet (any width, doors, drawers, handles, plinth or legs), a shelf, a lamp (floor, table, pendant, wall) or a device with a display, in centimetres and with a front view that follows every change. It goes straight into the plan and into the pack *Own furniture*; *Change in the studio* on a placed piece changes it again, everywhere it stands.
- **A meter per floor**: *Floor meter (power)* in the floor form takes a power sensor for that floor alone (a sub-meter, a flat). Its value shows on the floor label in the house view, and in the floor's own view the house card adds a row with it and its share of the house's use.
- **Plan check**: *✓ Check the plan* at the top of the editor's side panel lists, floor by floor, what is missing or off – rooms without a Home Assistant area (with the area of the same name to link in one tap), areas without a room, devices of a room not in the plan yet, rooms lying on top of each other, doors and windows off their wall, and pins or furniture pointing to entities Home Assistant no longer knows. Each line has a button that shows the place or makes the fix; undo works as always.
- **Sensors from the plan**: NextFloor now adds sensors to Home Assistant – *Open windows and doors* and *Lights on*, for the whole house and for every floor (e.g. `sensor.nextfloor_ground_floor_open_windows_and_doors`). They count what the plan links (contacts, garage doors, device pins and lamps), list the entities that are open or on in their `entities` attribute, and follow the plan when floors are added or renamed – ready for automations ("nothing open when the alarm goes on") and voice.
- **Everything off, with undo**: the room panel has *⏻ Everything off* while two or more things are on – lights, switches, fans and media (playing speakers pause, TVs switch off). In a floor's view the bar on top has the same for the whole floor (*⏻* with the number of devices). For ten seconds *↶ Undo* brings everything back as it was, lights with their brightness and colour.
- **Living area**: every room shows its living area in the editor, counted like the German Wohnflächenverordnung – the floor inside the walls, in full from 2 m clear height, half between 1 and 2 m under a slope, nothing below. The floor form adds it up for the floor and the house. Garages, cellars and utility rooms are left out by their name; *Counts as living area* in the room form decides it by hand.
- **The plan on paper**: *🖨️ Print plan / PDF* in the floor form opens every floor as a clean black-on-white drawing at 1:100 – walls, doors with their swing, windows, garage doors, room names with their areas, the outer measurements and a metre bar – and a table of all areas at the end. The browser's print dialog prints it or saves it as PDF.
- **Quality by itself**: with the quality on *Auto*, the 3D view now watches how fast the tablet draws while something moves. When it keeps drawing too slowly it uses fewer pixels, a quarter step at a time, and the simple look when even that is not enough; with plenty of room left the pixels come back slowly. *Low* and *High* stay as chosen.
- **Plan versions**: *📌 Save this state …* under *Backup → Restore points* keeps the plan under a name ("before the renovation"); named states stay when the automatic restore points go, and can be deleted again. *Compare* on any point lists, floor by floor, what differs from the plan as it is now – rooms added, removed, renamed or reshaped (with the change in m²), doors and windows, furniture moved, devices placed or removed.
- **Easy to read**: *Aa Easy to read* in the view options (and `readable: true` for the card) gives stronger contrast and larger text – the bars and the room panel a size larger, the pins and floor labels in 3D in bigger letters, Home Assistant's quiet greys in the full text colour. Made for wall tablets across the room and for anyone who reads better that way.

## 0.21.0

### Added

- **Turned roof sections**: a roof section has a *Turn (°)* in its form and turns about its middle – a wing at an angle, a roof over a house that does not stand square to the plan. Its slopes, ridge, gables, solar fields and the ceilings under it follow. Thanks to @XingLii ([#53](https://github.com/therealMRBK/NextFloor/issues/53)).
- **DXF import**: *Backup → Import* also takes a `.dxf` drawing from a CAD program – closed polylines become rooms, lines and open polylines free walls, in the drawing's unit turned into metres.
- **A tap on an own warning**: opens the entity's details by default, or – as chosen per warning – switches the entity or jumps to its room. Thanks to @HA-Luz ([#52](https://github.com/therealMRBK/NextFloor/discussions/52)).

## 0.20.0

### Added

- **Half-hips of any height**: a half-hip end of a roof section has a slider for how high up the gable its hip starts – from a large hip down low to only the tip.
- **Areas within a room**: a room can take more Home Assistant areas as its parts (*＋ Area within the room*) – a reading corner, a shelf, the kitchenette of a living room – whose devices and sensors then belong to the room: in its panel, the climate, the lights and the warnings.
- **Pets where they really are**: a pet from the packs can follow a room sensor (Bermuda, ESPresense or any sensor naming a room, with a tag on its collar) – it appears in the room the sensor names and roams it there.
- **Light designer**: set a room's lamps as you like and press *＋ Save mood* in its panel – the mood is kept with the plan, a tap on ✨ sets it again, and *→* carries it over to another room's lamps (the first lamp takes the first setting …).
- **Layers**: a floor can be marked as a *Layer* – all the trees, the decoration, the garden furniture – and the 3D view shows an eye for it at the top that shows or hides it with its pins, remembered on each device.
- **Lamps under the roof slope**: a ceiling lamp, fan or hanging item in an attic room gets *📐 Up to the roof slope* in its form, which hangs it from the underside of the roof right above it; its height stays adjustable.
- **Walls**: a split wall can have its own thickness on each part (a thick outer wall next to a thin glass front), and the room form shows a rectangular room's inside size from wall face to wall face.
- **Solar racks**: a field on a flat roof can stand on **east-west racks** – every second row turned, the pairs back to back, low and close – and a field on a pitched roof can stand on a rack that tilts it further than the roof (the upper edge on brackets).
- **L- and U-shaped sofas without a pack**: the built-in sofa has a *Shape* – straight, L (mirror it for the other side) or U – with a chaise at one or both ends; choosing one makes a small sofa large enough for it.
- **Own warnings**: *House → Own warnings* turns any entity into a line in the warning bar while it is in a state – "Water tank empty" from the robot vacuum, "Dishwasher done", "Salt low" below 20 (several states with commas, `<20` or `>80` for numbers), for the whole house or one room, with a colour of your choice for the stripe on the left. They look like the warning for a contact that stops answering. Thanks to @HA-Luz ([#52](https://github.com/therealMRBK/NextFloor/discussions/52)).
- **Which sensor set the alarm off**: when an alarm panel is triggered, the banner names the door, window or motion sensor that set it off (Alarmo tells it, otherwise the one that changed just before), and only its room pulses red instead of the whole house.
- **Outdoor areas like rooms**: a garden, terrace or pool can be linked to a Home Assistant area – its devices and sensors join the Outside panel, and a pin on the area opens it. A pool, pond or bed can show its water temperature and pump on that pin ("24.5 °C · pump on").
- **Robot mowers mow their lawn**: a robot mower or its dock from the *Garden 2* pack linked to a `lawn_mower` drives lanes over its lawn in 3D while it mows (around the beds, ponds and terraces on it), and drives home when it returns.
- **Wi-Fi map**: the map selector has a new **Wi-Fi** mode – every access point, router or mesh node from the packs linked to its device spreads its reach as a disc over the floor (through the walls), blue while it has room, amber when it is busy, red when it is down; its pin tells how many devices it carries, and the legend sums up the access points, their devices and which network devices of the plan are offline.
- **Room climate**: the heat map has a new **Mould** mode – the risk at each room's coldest wall from its temperature and humidity – and the temperature map uses a summer scale from May to September (rooms count as hot later). Rooms without a sensor of their own take the temperature and humidity of their thermostat. The room panel shows the room's temperature over the last 24 hours as a small curve, and both the panel and the *Values* map tell when to air a room (too much CO₂, too damp, risk of mould).
- **Underfloor heating**: a room can name its floor heating's thermostat, valve or switch, and its floor glows warm in 3D while it heats.
- **Heat pump**: a heat pump from the packs linked to any entity of its device shows a card with what it does (heating, hot water, cooling, defrosting), flow and return, the outside temperature, the power it draws, the heat it delivers and its COP as a ring – and with the energy flow on, its heat runs into the house in orange.
- **Your 3D printer, live**: link a 3D printer from the packs to any entity of your printer's device (Bambu Lab, OctoPrint, Moonraker/Klipper or PrusaLink), and while it prints a card floats above it with the model's picture, the progress, the time left and "done at", the layer, nozzle and bed temperatures and the filament colours of the AMS – and the print grows on the bed in 3D in the colour of its filament.
- **"Today" on the wall tablet**: choose calendars in *House → Calendars for "Today"*, and a card top right in the 3D view lists the day's appointments (all-day ones first, past ones dimmed) together with the waste bins collected today or tomorrow. A tap on its title folds it; the card option `today: false` hides it on a dashboard card.
- **Move a pin by hand**: when devices stand close together and their pins cover each other, *Move the pin* in the device's or furniture's form pushes the pin aside or up (in metres) while the device stays where it is.
- **Small tablets and phones**: a 🔍 zoom in the view options (card option `zoom`) brings the fitted views closer so the house looks larger on a small tablet; *🎥 Keep camera* (card option `keep_camera`) keeps the camera's side, height and distance when you switch floors; the room panel takes a little more of the width on small landscape tablets; and on a phone the editor's tools are one dropdown instead of a row of eleven buttons.
- **Favourites first**: the star menu can stand open from the start and a size larger (*★ Menu open* in the view options, card option `central_open`) for a wall tablet that mostly runs scenes; own buttons light up while their entity is on (the one they open or switch, or one you name); and the room panel lists the room's scenes at the top.
- **Speakers and TVs get their own quick menu**: a tap on one opens play/pause, back and next, the volume, its sources (inputs, apps, Spotify Connect …) and the stations and playlists of *House → Presets*. A preset can now be kept to some speakers – the kitchen radio station on the kitchen speaker only.
- **The car tells more**: a car plugged in at a wallbox nearby hangs on its charging cable in 3D (with the energy flow on), and the power runs along it while it charges. Its card says how far it is from home while it is away, when it leaves (a departure time it reports, or one set on the spot), and warns which doors, hatches, windows or the charge port stand open.
- **More of the energy picture**: the house card now shows the last seven days as bars (sun and use per day, from Home Assistant's long-term statistics), gas and water meters (*Energy → Balance*) appear in the energy bar and on the card, the card stays above the open floor in the floor views, and a home battery shows its charge on its own front – a bar that fills, green when full, yellow, red when nearly empty.
- **Venetian blinds, inside blinds, two blinds per window and Somfy "My"**: a window's blind can be a roller shutter outside (as before), a venetian blind whose slats turn in 3D with the cover's tilt, or a roller blind inside behind the glass. A wide window takes a second blind for its right half. A favourite position shows as **My** in the blind's quick menu – a blind with positions moves there, a Somfy RTS motor without feedback goes to its own My.
- **Every electric piece works alike**: any electric piece of furniture with a switch or power sensor shows its draw beside its state on its pin ("On · 1.2 kW"), and its status lights and display light up while it runs – a coffee machine, a compressor, a 3D printer – like the washer and dishwasher always did.
- **Lamps with several bulbs**: a lamp's form takes up to four more lights of the same fixture – a night light, an ambient ring, an uplight. While the main light is off, the lamp glows in 3D with the next light that is on, a little dimmer, and its pin says which one.
- **Picture frames with your own photos**: the new *Pictures & frames* pack (frames in four formats and six colours, canvas, poster, table frame, digital photo frame, picture ledge) shows a photo you upload in the frame's form, a picture address (/local/…) or the current picture of an image or camera entity – a photo of the day changes on the wall by itself. A white mat of any width, and the photo fills the frame or shows whole.
- **Show a piece only while …**: every piece of furniture can wait for a helper, a calendar, the sun or any sensor before it appears in 3D – the Christmas tree only while *input_boolean.christmas* is on, the paddling pool only in summer, a tent while a calendar says "camping". Several states separated by commas, or the other way round; the editor always shows the piece.
- **13 new furniture packs with 124 pieces**: *Season & decoration* (a Christmas tree whose fairy lights follow its light, Advent wreath, window star, candle arch, light-up reindeer, outdoor string lights, pumpkins, Easter tree, snowman, presents), *Smart home 2* (siren, Wi-Fi access points, smoke, CO, presence and water leak sensors, air quality monitor, dehumidifier, cube lamp, video doorbell), *Building services 2* (water tank, oil tank and oil boiler, water softener, buffer tank, cistern, ventilation unit, indoor heat pump), *Wellness* (sauna, barrel sauna, infrared cabin, hot tub, plunge pool, ice bath, steam shower, lounger – the heated ones link to a climate entity and show its temperature), *Garden 2* (water feature with light, pond with pump, robot mower and its dock, sandbox, beach chair, wood pile, bird house, raised bed, garden shower), *Kitchen 2* (bean-to-cup and espresso machines, kettle, toaster, stand mixer, cooking food processor, air fryer, microwave, wine fridge, sparkling water maker, slim dishwasher), *Vehicles 2* (motorbike, scooter, camper van, trailer, e-bike, cargo bike, quad, boat on a trailer, each in six colours), *Outdoor kitchen & terrace*, *Workshop 2*, *Japandi & Scandi*, *Loft & industrial*, *Indoor greenery* (plants that show their soil moisture) and *Music & studio*. The library has two new shelves for them: *Music & studio* and *Season & decoration*.

### Changed

- **A tap on a speaker or TV opens its quick menu** (play, skip, volume, sources, presets) instead of Home Assistant's details; *Details …* in the menu still opens them.
- **Scenes come first in the room panel**, above the lights.
- **Every electric piece shows its power beside its state** on its pin.

## 0.17.0

### Added

- **Duplicate a floor**: the floor form copies the open floor on top of the house, with its rooms, walls, doors and windows, and on request its furniture, device pins and outdoor areas. The copy is unlinked from Home Assistant (areas, floor, furniture entities), so it can be set up for the new storey; energy devices stay on the original floor.
- **Move furniture to another floor**: the furniture form moves an item to the same spot on another floor.
- **Curved walls**: the ◠ Arc button on a wall of a room (in the room's wall list) or on a free wall bends it into an arc: type how far its middle bulges, outwards or into the room, and press *Bend*. A room sharing the wall bends along, doors and windows move with it and stay whole, and everything else (3D, solid walls, cut view, wall heights) treats the arc like any wall. Undo takes the arc back.
- **The house throws its shadow**: with north set, the house casts its shadow on the plot from the sun's real position, long in the morning and evening and paler behind clouds. It follows the "Sunlight and shadows" setting (formerly "Sunlight through the windows") and is off on the Tablet level.
- **Time of day**: switch on *☀ Time of day* in the view options (⚙), and a ☀ switch under the 3D view opens a slider over the hours of today, in Home Assistant's time zone. Sun patches, the shadow, the sky, the sun or moon and the *Auto* look follow the chosen hour once the slider is let go; tapping the switch again goes back to now.
- **Night sky and weather on the ground**: with the weather on, stars come out on a clear night; snow lies white around the house while it snows, and the ground turns dark and wet in the rain.
- **Stairs with a shape**: the new **Stairs** tool in the editor's toolbar draws a stair where you drag (it runs along the long side), and the stair from the library has a shape as well: straight, quarter turn with winders, L with a landing, half turn with winders, U with a landing or spiral, turning to the left or right, built solid, on stringers, on one spine or as floating steps, with or without risers and with a railing on either or both sides. The number of risers comes from the floor height and can be set by hand; the form shows rise, going and step measure and warns when the stair would be uncomfortable. The plan draws every tread with the walking line. Older stairs keep their look until you press **Set the shape**.
- **Stairs going down**: a stair can lead down from its floor, for example into a cellar that is not drawn. It opens its own floor and is drawn dashed in the plan.
- **Openings that fit the stair**: a shaped stair opens the floor above only where its steps lack 2.2 m of headroom, following its shape, instead of the whole rectangle. The stair's **Floor opening** choice opens the whole stair instead (an open stairwell) or nothing (a hatch or closed stairwell). Older stairs and the stairs of the *Stairs & railings* pack open their footprint as before.
- **LED strips that rise along a slope**: an LED strip's form has *Rise along its length (°)*, so a strip can climb up a sloped ceiling or a gable wall from the eaves towards the ridge, or follow a stair. Its low end stays at the mount height (or its high end under the ceiling), and its light and glow follow the strip. Thanks to @jan74berlin ([#36](https://github.com/therealMRBK/NextFloor/issues/36)).
- **Cable routes for the energy flow**: the energy tool's new *Cable routes* section draws where a cable really runs, from a solar field on the carport to the inverter and battery in the cellar, along walls and through ceilings across floors. The flow follows the route instead of an arc through the house, a battery's route is walked either way as it charges or discharges, and *Show as cable* draws it as a visible cable. Connections without a route keep their arc. Thanks to @galionsfigur ([#49](https://github.com/therealMRBK/NextFloor/issues/49)).
- **Outside, next to the floors**: a **🌳 Outside** chip beside the floors opens the house view with its own panel, like a room's, for every device outside the rooms: the irrigation valves, garden lights and sensors at a glance. A device on the roof or above a room that belongs outside (a weather station) gets *Belongs to Outside* in its form, so it no longer counts for the room below. The dashboard card shows the chip with its room buttons. Thanks to @jan74berlin ([#39](https://github.com/therealMRBK/NextFloor/issues/39)).

### Changed

- **New stairs are shaped stairs**: a stair placed from now on opens the floor above only where its steps lack headroom, so the opening is smaller than the whole rectangle as before. Choose *Floor opening → Over the whole stair* in its form for the old opening; stairs already in the plan keep theirs.

### Fixed

- **Cameras of an NVR are easy to find in the device list**: with the *Cameras* plugin, a camera that shares its device with the NVR's motion, person and vehicle sensors (ONVIF) now leads that device's row instead of hiding behind "more" after the sensors. Thanks to @toshi24 ([#50](https://github.com/therealMRBK/NextFloor/discussions/50)).
- **The clock top left no longer covers the sensors at the top**: with *Top left* chosen, the clock stands above the own sensors and the energy bar, which move down below it. Thanks to @toshi24 ([#35](https://github.com/therealMRBK/NextFloor/issues/35)).
- **Sensors a plugin handles can be placed**: the editor's device lists show every entity a plugin takes on, whatever its device class (a 3D printer's enum print-state sensor from Moonraker), and it leads its device's row. Entities no plugin handles are filtered as before. Thanks to @Luca-Bachini-Barr ([#51](https://github.com/therealMRBK/NextFloor/issues/51)).

## 0.16.1

### Added

- **Wall buttons in the plan**: `event.*` entities (Homematic, Hue or Zigbee wall buttons and remotes) can be placed like any device. Their marker shows when the button was last pressed, and a tap opens its details. Thanks to @jan74berlin ([#35](https://github.com/therealMRBK/NextFloor/issues/35)).

### Changed

- **The room form warns when a room's ceiling lies above its floor height** (it can come from an import or a floor height lowered later): walls, windows and doors stop at the floor height, so a window above it was squeezed. Thanks to @jan74berlin ([#37](https://github.com/therealMRBK/NextFloor/issues/37)).
- **The switches at the bottom of the 3D view take less room**: on a smaller window, a zoomed browser or a dashboard column they are drawn smaller, and in the panel the new ▾ button folds them into one "Switches" button (remembered per device). Thanks to @jan74berlin ([#38](https://github.com/therealMRBK/NextFloor/issues/38)).
- **Garden devices set to "Always show" are visible from every view**: a device placed outside every room (irrigation valves, outdoor lights, a pool pump) whose marker is set to "Always show" now also shows in the house view ("All floors") and while another floor is opened, wherever its floor is drawn. Other markers keep to their floor as before. Thanks to @jan74berlin ([#33](https://github.com/therealMRBK/NextFloor/issues/33)).

### Fixed

- **Sweet Home 3D import no longer doubles walls**: a wall that runs along a room for only part of its length was taken over whole as a free wall, so it stood twice along that room (windows in it could face the wrong way). Now only the stretches beyond the rooms become free walls. Re-import the plan to get the clean walls. Thanks to @alexhass ([#40](https://github.com/therealMRBK/NextFloor/issues/40)).
- **The roof sits on its walls**: at rest in the house view it hovered 13 cm above them, and while zooming in the walls under it showed through. It now rests exactly on its height and keeps hiding what is below until it has mostly faded. Thanks to @LDSign ([#41](https://github.com/therealMRBK/NextFloor/issues/41)).
- **A roof section stays on the floor under it**: on a slope, a flat garage roof could ride with a higher floor beside it ("Pulled apart" lifted it off the garage). A section now belongs to the floor whose rooms lie under it. Thanks to @LDSign ([#42](https://github.com/therealMRBK/NextFloor/issues/42)).
- **Device names under markers are readable again**: the caption of a device with its own name ("Show the name under the marker in 3D") was dark text on a dark plate in some themes; it is now light text on the dark plate in every theme. Thanks to @jan74berlin ([#34](https://github.com/therealMRBK/NextFloor/issues/34)).
- **TVs that only report "on"** (Samsung, LG on live TV, and others) show their channel, input and logo on the screen in the plan, and appear in the live media card, instead of staying blank. Thanks to @Luca-Bachini-Barr ([#31](https://github.com/therealMRBK/NextFloor/issues/31)).
- **Heaters from furniture packs glow while they heat**, as the built-in radiator does: link a towel radiator (or any pack heater) to a thermostat and it glows orange while that thermostat heats; a thermostat or A/C unit with a display glows on its display. Thanks to @Luca-Bachini-Barr ([#32](https://github.com/therealMRBK/NextFloor/issues/32)).

## 0.16.0

### Added

- **Furniture builder** ([open it](https://therealmrbk.github.io/NextFloor/builder/)): build your own furniture in the browser from boxes, cylinders, tapers and round bodies, in centimetres, beside a 3D view that draws it exactly as NextFloor does. Start from a template (cabinet, table, shelf, floor lamp, sofa), tap parts in 3D to select them, set colours that follow the look, lamps and screens. The builder checks the pack as NextFloor's import does, keeps it in the browser, saves it as a pack file, and shares it in the community store with one button.
- **Community furniture** (Extensions → Furniture packs): furniture others built with the builder and shared, checked by the store and by NextFloor's import, installed with one tap; a newer release of an installed pack shows as an update.
- **Announcements, free for everyone**: *"Dinner is ready!"* – and the room that should hear it, hears it.
  - **In the room panel**, a **📢 Announcement** section for rooms with a speaker: tap a sentence or type your own. Own sentences under *Editor → Settings*.
  - **Each room speaks through its own speaker**: chosen in the room's form, else one placed in the room, else a voice satellite, an Echo or a speaker of its area (never a TV or a speaker that is off). Voice satellites chime, Echos make a real announcement (Alexa Devices or Alexa Media Player), speakers that can (Sonos and others) lower their music and play on after, every other speaker uses Home Assistant's text-to-speech.
  - **Quiet time per room** (a nursery from 20:00): announcements to several rooms leave it out, one meant only for it still gets through.
  - **Every open NextFloor screen** (panel or card) shows the message big over the house, plays a soft chime and speaks it. A screen can get a name (⚙ → 📢) to be addressed alone, or stay silent. Card options `announcements` and `screen_name`.
  - **The action `nextfloor.announce`** for automations (message, rooms, floor, screens, on_speakers, on_screens, tts_entity); it answers which speaker said it and which rooms were left out.
- **Own sensors at the top of the 3D view** (Editor → Settings, up to 12): the outside temperature, the alarm, the air quality – each with its name and value at the top left, in an opened room too; a tap opens its details. Card option `sensor_bar`.
- **Markers only while active**: a device's marker can show *Only while active* (a motion sensor while it detects, a contact while open, a device while on), and *Editor → Settings* can show every motion, occupancy and presence sensor only while it detects something.
- **Irrigation**: a lawn sprinkler (garden pack) linked to a valve or a switch throws water in arcs around it while it runs – six jets that turn slowly, as far as its *Reach of the water* (default 3 m). The irrigation valve box links to a valve too.
- **Valves** (`valve.*`, irrigation or the main water) work like switches everywhere: they show open or closed, count as on while open, and a tap opens or closes them.
- **How opaque the glass walls are**: a slider under ⚙ (per screen) and the card option `glass_walls` set the walls you look through into the rooms from almost invisible (0 %) to opaque (100 %); 20 % is the faint glass as before.
- **Fridge and freezer temperatures**: a fridge (also a pack's fridge or freezer) takes a thermometer for the fridge and one for the freezer compartment. Its pin shows both ("4.3 °C · −18.2 °C") and lights up as a warning above 8 °C in the fridge or −12 °C in the freezer; sensors in °F work too.
- **Lift-and-slide doors and sliding windows**: a new kind *Lift-and-slide door*, and every window can now open *sliding*. The pane at the hinge side slides in front of the fixed one when its contact reports open; with two leaves the two middle panes slide outwards, each on its own contact. The plan draws the panes on their two tracks.
- **Top-hung windows**: a window can open *top-hung* – its bottom swings out of the wall when its contact (or a tilt sensor) reports open.
- **Opening angle for doors**: every door has an *Opening angle* (default, 15° to 180°). With a contact the leaf opens that far as soon as it reports open; without one it stands that far open instead of half open. A door that is only assumed to stand open no longer glows as open. *Default* keeps everything as it was.
- **Warning for contacts that stop answering** (off by default, Editor → Settings): when a door or window contact has been unavailable for 10 minutes (an empty battery, out of radio reach), a note in the warning bar names it, because the window then looks shut in 3D although nobody knows. It is a quiet note: the room does not pulse and the view does not jump to it. A restart of Home Assistant does not warn.

### Fixed

- **A glass wall placed from the toolbar is a glass wall**: dropping the *Glass wall* kind made a plain terrace window; it now keeps its look (doors still pick room or front door by their wall).

## 0.15.1

### Changed

- **Furniture with an own tap action keeps showing its state** by @Mika2108 ([#30](https://github.com/therealMRBK/NextFloor/pull/30)): an item linked to an entity (a meter with its power, a lamp, a washing machine, a light switch, a bin) keeps its usual marker, glow and energy flow when *Tapping the item* is set; only a tap on the item or its marker runs the action, a long press still opens the details. Example: the meter shows the grid power and a tap opens the energy dashboard. Items without a marker of their own still get the tap marker.

### Fixed

- **Plugin devices show their own icon in the editor** by @Mika2108 ([#28](https://github.com/therealMRBK/NextFloor/pull/28)): the plan, the device's form and the room's device list use the icon picked in the plan, else the plugin's Material Design icon, else the kind's symbol, as the 3D view does. Cameras no longer show as clocks.
- **A garage remote keeps its buttons in the room panel** by @Mika2108 ([#29](https://github.com/therealMRBK/NextFloor/pull/29)): a cover that only sends commands and never reports its position is no longer greyed out there, as in the quick menu since 0.14.0. *Open all* / *Close all* now leave out covers set to ask first, so a garage door no longer moves along without the confirmation, and they are hidden when no cover is left.

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
