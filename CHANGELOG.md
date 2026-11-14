# Changelog

All notable changes to NextFloor, newest first. Every release lists what is **Added**, **Changed** and **Fixed**. Releases: [GitHub releases](https://github.com/therealMRBK/NextFloor/releases).

## [Unreleased]

## [0.31.4.2]

### Fixed

- **Roofs and other thin loft parts of a furniture pack can be seen from below** (thanks @daluposoft, #170): a `loft` had no bottom face, so a sloped roof built from lofts vanished as soon as the camera went under it. Lofts of pack items now have an underside.
- **A NAS or router still lit the room when linked to a switch or light** (thanks @Guenni75, #153): the 0.31.4.1 fix only covered sensors. Pack devices with status lights (NAS, router, server rack, PC tower, inverter, wallbox, battery, boiler, game console and the like) now never light their room, whatever they are linked to; only their own small lights glow.
- **A window lost its roller shutter in 3D to a window with the same id on another floor** (thanks @Gifford47, #115): when two floors used the same id for a window or door (a plan written by hand or by an AI), the later floor's links replaced the earlier one's. A window with a cover picked in the editor then showed no shutter box, no blind and did not react to a tap, because its namesake upstairs had none. Ids of doors and windows are now unique in the whole house; the first one keeps its id.
- **Bay windows over several walls show their roller shutter** (#115): the fix from 0.27.0 did not reach the 3D view, which still looked for the blind per piece. The pane now really gets its shutter box and blind.
- **A window in a free wall outside every room keeps its blind** (#115): a cover or contact picked by hand for such a window was ignored in the 3D view.
- **A camera's field of view fades out instead of turning black outside the walls** (thanks @tichris0, #165): where no floor lies under the wedge (a camera on the outside of the house, over the garden) the see-through 3D view turned the pixel opaque, so the fade-out showed black. The same went for the glow of a lamp in the garden. Light is now only added, the transparency is left alone.
- **A low wall no longer blanks a camera's field of view** (thanks @tichris0, #164): the view stopped at every wall, however low. A wall lower than the camera now only casts a shadow behind it; a wall as high as the camera still hides what is behind it.
- **A free wall over an outdoor area or a room can be selected again** (the fence of a lawn, say): a tap on it selected the area below it instead; the wall nearest to the tap now wins.
- **No console error on the model upload page**: the page asks the server whether a model is there with a HEAD request, which was refused (405); the server now answers it.
- **A map tile that cannot be decoded** (an error page instead of a picture) no longer raises an error in the 3D view; its square stays empty.
- **Keep camera: the first floor no longer turns the view round** (thanks @Gifford47): with *🎥 Keep camera* on (card option `keep_camera`), the first floor opened from the house view still flew to the start view's side. It now opens from the side and height the house is looked at, like every later switch. A floor that was open before still comes back as it was left.

## [0.31.4.1]

### Fixed

- **The star menu kept opening** (#158): with *Menu open* switched on for the device, the menu came back on every visit, however often it was closed. Closing it with the star now switches *Menu open* off, so it stays closed; the star opens it as before.
- **Rooms without a name in the room row** (#152): an unnamed room showed as an empty button in the row above the 3D view and as a dash in the card's room buttons. It has no button any more, like it has no label in the 3D view.
- **A NAS lit the whole room** (#153): a device from a pack with a status light (NAS, router, server rack and the like) that is linked to a sensor or binary sensor lit its room like a lamp while the sensor reported "on". Now only its small lights glow. Lamps linked to a light or a switch shine as before.

## [0.31.4]

### Fixed

- **No label for a room without a name** (#142): a room whose name is empty (a closet, say) shows no label in the 3D view any more instead of a dash.

### Added

- **Catalan** (català): a new language, translated by jmontane. Thanks for the pull request (#146).
- **Open ends for loft parts** (#140): a `loft` part of a furniture pack takes `"capFront": false` and `"capBack": false` to leave the end at +z or -z open, for roofs, open gables and frames. Both default to closed, so existing packs look the same.
- **A realistic look (preview):** a fifth look, *Realistic*, in the look row and the card editor. Floors get wood planks, tiles or grass, walls plaster, roofs tiles and flat tops concrete, with relief and light from a sun and the sky. Photo textures (CC0, Poly Haven, about 230 KB beside the bundles) for wood floors, stone tiles, plaster, roof tiles, ground and concrete, with the procedural materials as fallback when a file is missing. Walls get light tops that outline the rooms, and floor shadows are deeper and softer. Only this look changes, the others are untouched. First step, still plain on furniture and trees.

## [0.31.3.1]

### Fixed

- **Car cards and the search field on a phone** (#147): the cards of the cars at their parking spots covered large parts of the map on a small screen; each now has the small corner button that folds it to its ring, like the house card (remembered in the browser). The search field no longer hides behind the buttons along the bottom edge.

## [0.31.3]

### Added

- **People in the whole-house overview:** a new switch under Editor → Presence shows the person avatars on all visible floors, also with the floors pulled apart. Off by default. Thanks to plueoend for the pull request (#139).
- **A sill for doors** (#137): a door can stand above the floor, for a raised threshold that keeps spills in. The field *Sill* is in the door's form, like for windows.

### Fixed

- **Doors in a raised room** (#137): a room with *Floor level* above its floor lifted walls and floor, but the doors stayed at the floor's base. Frame, leaf and threshold now stand on the room's own floor, as for a lowered room.
- **Full screen on a dashboard card** (#138): the button gave the card's height, not the screen's. Inside a dashboard the browser reports the card itself as the full-screen element, which the card did not recognise.

## [0.31.2]

### Added

- **A gate or door moved by a relay** (#134): the drive of a garage door or a door can be a switch, a push button, a helper or a script, not only a cover. A tap gives the pulse; where the gate stands comes from its contact.
- **Walls drawn by their face keep that line** (#125): the line and the grips of a free wall sit where you drew it (its middle or one of its faces), and the wall's form has the same choice. A thicker wall then grows away from that face.
- **Walls close their corners** (#125): when you draw a wall or drag an end, an end that was meant to meet another wall is put there: two ends get a shared, mitred corner, an end at the side of another wall stops at its face. **Close corners** in a wall's form does it for every free wall of the floor. This also removes the steps and overlaps such corners had in 3D.
- **One room from walls with a tap** (#125): with the rectangle tool, a tap inside an area closed off by free walls makes that room.
- **All temperatures of a device at a tap** (D#118): a device that only measures temperatures (a boiler with flow and return) lists all of them when tapped, instead of opening the first sensor. Temperature sensors can now be set on any piece of furniture, not only electric ones (a hot water or buffer tank).
- **Pipes can branch** (D#118): a point drawn close to another pipe lands on it, so a branch to a radiator starts exactly on the main run. A plan can hold 60 pipes (was 24).
- **Own look: a colour for glass** (D#82): window panes can have their own colour instead of following the surfaces.
- **IFC import brings doors and windows**: `IfcDoor` and `IfcWindow` become openings in the nearest room wall, with their width, height and sill.
- **Solar sensors that count production as negative** can be flipped (*Invert sign* under the solar sensor); the editor points it out when the solar power reads negative.
- **Outbuildings:** proposed roof sections follow each part's own ceiling height (a shed or garage lower than the house gets its roof at its height), and the roof tool says when the plan has parts the simple roof does not cover (D#72).

### Changed

- **The energy card says "Battery charging" / "Battery discharging"** instead of an arrow, which was read both ways (#135). The editor also warns when a battery seems to discharge into the grid while the sun shines: its sensor then has its sign reversed, and *Invert sign* fixes the consumption shown.

### Fixed

- **Solar sparks really lie on the panels now** (#130): they were drawn before the roof and painted over by it, so they only showed where they stuck out beyond the roof's edge (the fix in 0.31.0.1 did not address that). They also rise with the roof when the floors are pulled apart, and they and the energy lines are visible in the Day look and on a light own look.
- **Roof windows on a flat roof lie flat** (D#126): they stood on a tilted frame like a solar module.
- **Two cards with different colours no longer repaint each other:** the accent and the own look's colours belonged to the page, not to the card, so the card set up last decided for all of them.

## [0.31.1]

A quality release: a review of the whole code found these, none of them reported yet.

### Fixed

- **A half-filled temperature row no longer blocks saving:** typing a label under *Further temperatures* of a device before choosing a sensor made every save of the plan fail until the sensor was chosen.
- **Several inverters stay stable in the energy flow** (#127): whether each inverter gets its own line to the house depends on the plan, not on which string happens to produce at that moment, so the line no longer jumps between two drawings and cable routes you drew keep applying.
- **Wallbox status** (#129): `not_charging` and `ready_to_charge` no longer show as charging, and `disconnected` / `unplugged` no longer show as plugged in.
- **Note done** no longer overwrites a plan saved by someone else at the same moment.
- **Weather forecast:** a forecast day given as a plain date is no longer pushed to the day before in time zones west of UTC, and one failed request no longer blanks the card for half an hour (it asks again after a minute).
- **Bluetooth rooms:** a recording started for one tag no longer collects the readings of another tag you open meanwhile, the live bars run again when the section is shown again, and a tag deleted from the plan loses its sensor instead of staying behind as an unavailable entity.
- **Bluetooth sensor and the recorder:** the sensor wrote a new state every two seconds because the signal strengths change constantly. It now writes when the room changes (or every 30 seconds), and the signal values are no longer stored in the history.
- **The camera Outside opens with** is checked as a house setting (it was checked as a room setting by mistake).

## [0.31.0.1]

### Fixed

- **Saving works again with roof overhang per side** (thanks @gnom25, #128): a plan whose roof section held a list instead of the per-side overhang failed with "not a valid value at … overhang_sides". Such a value is now dropped, the overhang of that section goes back to automatic, and saving works.
- **Several inverters in the energy flow** (thanks @gbcsysteme, #127): every PV field now ends at the inverter of its string (also without the advanced energy mode), and each inverter has its own line to the house instead of all lines ending at the first one. If the lines show grid import while you feed in, tick *Invert sign* next to the grid sensor in the energy settings.
- **Wallbox status** (thanks @hapa-dev, #129): `charger_free` was shown as "charging" because the status text contains "charg". Only a real charging word (charging, charge, laden, lädt) counts now, and `charger_insert` shows as plugged in.
- **Solar sparks lie on top of the panels** (thanks @hapa-dev, #130): the sparks of the energy flow float a little further out of the panel and are drawn after the glass, so they are no longer hidden behind it.
- **Shadow in raised or sunken rooms** (thanks @tichris0, #131): the soft shadow along the walls was drawn on the level floor, so a room with its own floor level (e.g. 0.305 m) had none. It now lies on the room's own floor.

## [0.31.0]

### Added

- **Rooms as drawn** (thanks @Dragi2k, #65): a new setting that leaves your rooms exactly where you drew them, by their inner faces. Where two rooms have a gap between them (up to 60 cm), one wall now fills the gap (its thickness is the gap) instead of each room growing its own exterior wall into it, so the two no longer overlap. Doors and windows sit in that wall and are no longer hidden behind the neighbour's wall (the black openings). Nothing moves and no room changes size, so *Close gaps* is not needed. Off by default; existing plans look the same until you switch it on in the settings. It helps where rooms have a gap; rooms that overlap are still joined with *Close gaps* (#121). A window or door in such a wall counts as one between two rooms, like in rooms that touch.

## [0.30.1]

### Added

- **Wall tool: wall on the left, right or middle of the line** (thanks @keinenahmenfrei, #125): next to the wall tool a choice *Wall sits* places the new wall centred on the line you drag, or to its left or right, so you can follow the edge of a template or the face of a neighbouring wall without nudging it afterwards.

## [0.30.0.2]

### Fixed

- **Rooms from walls says why it finds nothing** (#125): when the walls close areas that already lie inside a room (the house outline drawn as a free-form room), the message now says so and what to do, instead of "nothing found".

## [0.30.0.1]

### Fixed

- **Rooms from walls copes with walls drawn by hand** (thanks @keinenahmenfrei, #125): walls that miss each other by a few centimetres (traced over a template) now still close an area. The tolerance grows from 6 cm to 30 cm until something closes.

## [0.30.0]

### Added

- **Rooms from walls** (thanks @keinenahmenfrei, #125): after drawing the outer and inner walls with the wall tool, *Rooms from walls* in the floor settings makes a room of every area the walls close off, ready to be named (like clicking into a drawn plan in a CAD program). Areas that already are rooms stay as they are, dead-end walls and slivers under 0.6 m² are ignored. The new rooms have no walls of their own: the drawn walls are the walls.

## [0.29.0.4]

### Fixed

- **Roofs on a house with a high floor elevation can be saved again** (thanks @Theowilmans, #123): a house whose floors start at its altitude above sea level (e.g. 500 m) got a roof at 502 m, and saving was refused with "value must be at most 200". Roof base and eaves now take up to 600 m.

## [0.29.0.3]

### Fixed

- **Window glass and robot vacuums follow the look** (thanks @eskahone, D#82): in the own look, Blueprint and Day the glass of the windows stayed teal and the robots' bodies stayed slate blue. Both now take the colours of the look, like walls and frames. The robot's status light keeps its signal colour.

## [0.29.0.2]

### Fixed

- **A tap on an outdoor area opens Outside in the dashboard card** (thanks @eskahone, D#83): in the card on a dashboard, the small outdoor symbol did nothing, because the tap was treated like a room tap on another floor. It now opens *Outside* over the house view and closes it again, as in the panel, and closing the Outside panel flies back as with a room.

## [0.29.0.1]

### Fixed

- **Door handles follow the own look** (thanks @eskahone, D#82): the handles stayed bright blue in the own look, Blueprint and Day because their blue counted as a signal colour. They are now a softer blue that the looks repaint with the rest.

## [0.29.0]

### Added

- **Save the plan as a picture** (thanks @CeuseFoneb, #122): in the floor's settings, *Save as picture (PNG)* writes a clean 2D plan seen from above (white background, 2400 px) of this floor, and *All floors as pictures* one file per floor. Choose whether it shows furniture outlines, the measurements and the room names with their area. Handy for Bluetooth tracker maps or documents that want a plain plan.
- **Heating and water pipes** (thanks @LFrank2021, D#118): in the energy tool, *Heating and water pipes* lets you draw pipes through the plan, red for the supply, blue for the return, orange for hot and light blue for cold water. Link a pipe to a pump, heating circuit or valve and particles flow through it in the 3D view while that device runs (the flow shows when the energy animation is on). Without a link the pipe is drawn without flow.

### Changed

- **The device list of the plan check is easier to use** (thanks @tfischer84, #103): *Ignore all* now stands above the list instead of below it, and the *Ignore* buttons keep their place at the right edge, so nothing needs scrolling to be found.

## [0.28.0]

### Added

- **Plugin settings with an entity picker** (thanks @toshi24, D#50): a plugin can offer *entity* as a device setting, limited to some domains, and its marker and watch functions get the settings. The Cameras plugin uses it for the next step (own detection sensors per camera).
- **Several named temperatures on one device** (thanks @LFrank2021, D#118): besides *Device temperature*, any device except fridges takes up to six more temperatures with their own name (a boiler's *Kessel*, *Vorlauf*, *Rücklauf*, or a tank's target and actual). They show on its pin in the 3D view, and the pin is highlighted from 60 °C as before.
- **Recurring notes with a "Done" button** (thanks @ShaneCurcuru, D#113): a note can repeat every N months (*Repeat every … months* in the note's form), for tasks like changing a filter or cleaning the fridge. Opened in the 3D view, a note with a due day or a repeat shows a *Done* button and when it was last done. Pressing it sets the next due day N months ahead, or clears the due day of a one-off note. Anyone who can open the view may press it, it changes nothing but that note. Any piece of furniture has a *Task* button that puts such a note on its spot and height (repeating yearly).

### Fixed

- **"Close gaps" now also pulls rooms apart that overlap by up to 60 cm** (thanks @alexhass, #121): a room pushed between two others rarely lands exactly. Before, overlaps above 12 cm were ignored, so every room kept its own exterior walls and the walls doubled up or got odd thicknesses. Now such rooms meet on one common line with one interior wall. The hint on the button and the overlap warning say so, and a room nested inside another is still left alone.

## [0.27.0]

### Added

- **Own names for your own sensors** (thanks @HA-Luz, D#117): each sensor under *Own sensors at the top of the 3D view* gets a *Shown name* field, e.g. "Outside temperature". Left empty, the Home Assistant name stays.
- **More warnings at once, in two rows if you like** (thanks @HA-Luz, D#52): under *House → Own warnings* you set how many warnings the warning bar of the 3D view shows at once (1 to 12, still 3 by default) and whether it may use two rows. Any further warnings still show as "+N"; a tap on it unfolds them all, and "−" folds them again.
- **Walls that hang in the air** (thanks @3Dtcb, #114): a free-standing wall can start above the floor. Tick *Hangs in the air* and set its *bottom edge above the floor*; with *Sloping bottom edge* the bottom follows a roof slope. This draws the piece of wall between a sloped roof and a flat ceiling, with the room open below it, without stepped openings.
- **Own look** (thanks @eskahone, D#82): a fourth look next to Neon, Blueprint and Day with your own colours. It works like Blueprint and Day, so walls, floors and furniture share one colour scheme: they run from *Own look: surfaces dark* to *Own look: surfaces light*, edges take *Own look: lines*, and the stage gets *Own look: background*. Set the colours house-wide in the editor's *Settings*. A card can override them in the card editor (with the look *Own*) or in YAML with `theme: own` and `own_look: {dark, light, lines, background}`. Signal colours (lamps, alerts, heat map) keep their colour. On a light background the lines are drawn without glow, like in Day.
- **Floor miniatures folded from the start** (thanks @eskahone, #84): a card can start with the floor miniatures folded to small floor buttons, for a wall tablet say: *Start with the miniatures folded* in the card editor, or `floor_thumbs_folded: true`. The arrow still opens them for the visit.

### Changed

- **All texts translated again**: about 90 texts from the last releases showed in English in French, Spanish, Italian, Dutch, Polish, Portuguese, Swedish, Chinese and Czech. Among them are the furniture colours, chimneys, the weather forecast, robot calibration, Bluetooth locating and note height and photo. They are now translated.

### Fixed

- **"Keep camera" survives the house view** (thanks @lennart-bader, #119): with *Keep camera* on, *All floors* now keeps the side and height you looked from, and opening a floor again brings back the view that floor was left with. Before *All floors* turned back to the start view and the next floor opened from there.
- **Stairs under a room boundary open the floor above** (thanks @Gifford47, #116): a staircase whose opening upstairs reaches over the line between two rooms (a hall and a room, say) now cuts the floor in both of them. Before the opening was left out, so the floor above stayed closed and the stairs ran into it. A floor opening drawn over two rooms is now cut the same way.
- **Bay windows show their roller shutter** (thanks @Gifford47, #115): a window that runs over several walls of a bay now gets its shutter box and blind in the 3D view, and tapping it moves the blind. Before it showed neither, as if no blind were linked.
- **The second blind of a split window moves in 3D** (thanks @spacemessage, #106): on a window with two blinds, the right-hand blind now moves in the 3D view when its cover moves. Before it stayed where it was when the view opened.
- **The clock matches the other cards** (thanks @HA-Luz, #68): it now has the same glass as the *Today* and weather cards and follows the Home Assistant theme with them, light in a light theme, in every look. Before it always had a dark background, which made it hard to read in a light theme.
- **Floor thumbnails stay on top** (thanks @eskahone, #84): on a small screen the floor thumbnails on the left now lie over a weather card or clock in the top-left corner instead of under it, so they can still be tapped.

## [0.26.6]

### Added

- **Notes with a height and a photo** (#113): a note in the plan gets its own height above the floor (a pin under the ceiling, at the shutoff valve) and a photo, uploaded or as a URL, that shows when the note is tapped in the 3D view.
- **Temperature of technical devices** (thanks @tfischer84, #112): an inverter, a battery, a PC or any other electric device takes a temperature sensor under *Device temperature*. Its value shows on the device's pin in the 3D view; from 60 °C the pin is highlighted.

### Changed

- **Outside has its own section in the editor** (thanks @eskahone, #83): the view for Outside and the devices its panel hides moved from the favourites into *🌳 Outside*, right below *Start view*.

### Fixed

- **Lamps light up in the editor plan as in 3D** (thanks @tfischer84, #111): a lamp whose light was found in its room by itself (not picked by hand), or that glows with one of its further lights, now lights up in the editor's floor plan too.

## [0.26.5]

### Added

- **Chimneys on the roof:** the roof tool places chimneys in four shapes (brick, round, wide with two flues, steel flue pipe with a rain cap), with their own width, depth and height above the roof. Drag them in the plan or in the 3D view.
- **Furniture colours per material** (thanks @eskahone, #82): in the editor under *Settings*, each material furniture is built from (body, wood, fabric, white, metal, dark) gets a colour for the whole house, pieces from the furniture builder and the packs included. A card can set its own with `furniture_colors`, or in the card editor under *Furniture colours of this card*.
- **Fold the energy card:** a small button in the corner of the glass energy card folds it down to its ring and the solar power, on phones and desktops; the browser remembers it.
- **Fine-tune a robot map by hand** (#109): after calibrating, arrows move the map by 10 cm, ⟲ ⟳ turn it by 1° and − + change its size by 1 %.
- **Weather forecast card** (thanks @eskahone, #84): in the house settings under *Weather forecast*, choose 3, 5 or 7 days and a top corner. A small card shows the weather of each day with its high and low and the rain.
- **More days on the "Today" card** (#84): *Days on the "Today" card* lists the appointments of up to seven days, each later day under its own heading.

- **Outside wall colour per floor** (thanks @LDSign, #110): in the solid wall view a floor can have an outside colour of its own (*Wall colour outside (this floor)* in the floor's settings), for a plinth or a garage that is not the colour of the storeys above.

- **Calibrate a robot map from its rooms** (#109): when the robot's map names its rooms, as the Dreame integration does, the dock has a button *Calibrate from the rooms*. It matches them to the rooms with the same names on the plan, so the robot no longer has to be parked 1.5 m from its dock and tapped. With three or more matching rooms a mirrored map is recognised by itself.

- **A view of its own for Outside** (thanks @eskahone, #83): under *Settings → Outside: hide devices* the button *Use this view for Outside* stores the camera of the editor's 3D preview. Opening Outside then flies to the garden instead of staying on the house view; closing it goes back.

### Changed

- **A tidier 3D view on phones:** the switches under the 3D view (walls, floors, roof, heat map, room names, weather) now sit behind one *☰ Switches* button that opens them as a menu above the bar. The house stays in view instead of a row of buttons across the bottom; a tap beside the menu closes it again.

### Fixed

- **Live cards cut off on phones:** a card near the edge of the view now slides back in, its thread still pointing to where it belongs.
- **Room colours on other floors** (thanks @LDSign, #110): a room with its own wall colour no longer paints the walls of the floors above or below that lie in the same spot of the plan.

- **Dreame robot maps** (thanks @lina-alexrt, #109): the map camera of the Dreame integration names the dock `charger_position` instead of `charger`. NextFloor now reads both, so the robot's real position can be calibrated and shown on the plan. Without a `path` on the camera no trail is drawn.

## [0.26.4]

### Added

- **Invert the rain sensor** (thanks @tfischer84, #107): a checkbox under the rain sensor in the settings for sensors that read off (or 0) when it rains.
- **Plan check: look first, ignore what you do not want** (#103): the line "devices not in the plan yet" opens a list of the devices behind it, with *Ignore* for each one (internal KNX devices, say) or for all. Ignored devices are no longer listed; one button brings them back.
- **Smart speakers link to a media player** (#104): a smart speaker, multiroom or hi-fi speaker picks the only free media player of its room by itself, so the quick menu offers volume, play and pause. Linking it by hand in the furniture form works as before.

### Fixed

- **Pieces lying on others can be selected** (thanks @tfischer84, #105): in the plan, what stands higher (a speaker on a desk, a lamp on a shelf) is drawn on top and is the one a click hits.

## [0.26.3]

### Fixed

- **The editor is fast again with many entities** (thanks @alex1255, #101): the list *Outside: hide devices* in the editor's settings worked out the devices of the Outside panel once for every entity of Home Assistant, on every update. With a few thousand entities that kept the browser busy and made clicks and turning the view sluggish. It is now worked out once.

## [0.26.2]

### Added

- **Bluetooth locating (new, experimental):** find out which room a Bluetooth tag, watch or phone is in, learned by walking. Under *Settings → Bluetooth locating* in the editor you pick a tag, walk through each room with it for 30 seconds and record the room. NextFloor compares how strongly the Bluetooth scanners Home Assistant already has (ESPHome Bluetooth proxies, Shelly devices with Bluetooth scanning on, the server's adapter) hear the tag with those recordings. Every tag gets a sensor whose state is the room name, usable in automations and as a person's room sensor under *Presence*. Phones and watches work through Home Assistant's *Private BLE Device*. It needs at least two scanners, more is better. The recordings stay in the plan and are left out of shared plans.
- **See-through outdoor areas** (thanks @thelichtler-cloud, #95): every outdoor area has *Opacity (%)* in its form, from 100 (solid) down to 10, saved with the plan. A driveway or lawn above the cellar no longer hides it in the stacked view; the outline stays.

### Changed

- **A new README:** a shorter, picture-led front page with the three ideas in one minute, a gallery that links into the documentation, the features grouped by what you do, a two-minute install and a table of where to read what.

## [0.26.1]

### Added

- **A documentation site**, in English and German, at [therealmrbk.github.io/NextFloor/docs](https://therealmrbk.github.io/NextFloor/docs/en/): 26 pages from the quick start to the full list of card options, with search (Ctrl+K), a dark and a light look, a table of contents, copyable code and a full-size view of every picture. The sources are Markdown in `docs/content`, built by `tools/docs`, and CI checks every link and anchor.
- The README points into the documentation and lists where to read what.

## [0.26.0]

### Added

- **Eight more languages for the core screens:** Danish, Finnish, Hungarian, Norwegian (Bokmål), Romanian, Slovak, Slovenian and Turkish for the 3D view, the room panel and the card's texts (about 150 each). Everything else still shows in English in those languages until someone adds it; the files are plain JSON in `frontend/lang/`, and a pull request that completes one is very welcome.
- **Card templates:** *Card templates* in the editor's settings set a dashboard card up once, with the card's own settings dialog and a name (say `kitchen_tablet`). On a dashboard card you then choose the template in its settings (or `template: kitchen_tablet`); the card's own options win. A change in the editor reaches every card that uses the template. *Reload screens with this template* and *Reload all screens* (also the action `nextfloor.reload_screens`, with an optional `template`) make the open tablets load their page again a few seconds apart, for example after an update.
- **3D print export:** a *3D print (STL)* button in the 3D view's settings saves the house as an STL file (walls, floors, furniture and outdoor areas of every floor) at 1:100, one metre becoming 10 mm. Windows, lights and the roof are not in it.
- **Right click goes one step back** (the view's settings, or the card option `right_back: true`, off by default): a short right click in the 3D view closes the room or goes from the floor back to the house, like a double tap on empty space; dragging with the right button still pans.
- **Two decoration packs, free:** *Winter & Christmas* (Christmas tree, Advent wreath, window star, candle arch, light-up reindeer, snowman, fairy lights) and *Halloween* (pumpkin, ghost, gravestone, witch's cauldron). The glowing parts follow a light or switch you link; to show a decoration only in its season, set *Only show while …* on the piece. That makes 43 furniture packs.
- **Tilt furniture:** a piece of furniture has *Tilt front/back* and *Tilt sideways* (degrees) in its form, for a leaning ladder, a tilted picture or a roof-sloped shelf. (Owned 3D models are not tilted.)
- **A card for chosen rooms:** the dashboard card's settings list the rooms (*Only these rooms*, YAML `rooms: [id, …]`); the card then shows just those rooms with their furniture, devices, doors and windows, and cannot leave them, for example for a tablet in the kitchen. Nothing ticked: the whole plan as before.
- **Gates in fences:** a fence's form has *+ Gate in the fence*: a gap in one side with gate posts and a garden gate, a double gate or a sliding gate. With a motor or switch (cover, switch, input_boolean, lock) and/or a contact the gate opens in 3D: garden and double gates swing inwards, a sliding gate runs along the fence. (Tapping the gate in 3D to switch it is not there yet.)
- **Sun arc and compass:** the editor's settings have *Sun arc and compass*: today's path of the sun as an arc over the plot, with a ring on the ground, the compass points (north in red) and a bead where the sun stands now. It uses your home's location in Home Assistant and follows the time-of-day slider.
- **Sloping free-standing walls:** a wall drawn with the wall tool can fall from one end to the other (*◢ Sloping* in its form, with a height at each end).
- **Overhang per roof side:** a roof section's form has *Overhang per side*: the eaves and both ends of the ridge each get their own overhang; unset sides stay automatic (none where the roof meets the house).
- **Floor plan only:** a *Floor plan only* button in the view's settings (and a card option `plain: true`) leaves the furniture out of the 3D view and draws walls, doors, windows and stairs; devices and their pins stay.
- **Import of an Apple room scan** (an iPhone or iPad with LiDAR, scanned with an app that exports the RoomPlan JSON): walls become the room, doors and windows sit on their walls with width and sill, and sofa, bed, table, chair and a few more objects become furniture. Choose the file under *Backup → Import*; the plan format page now also describes furniture, free walls, outdoor areas and devices for AI drawn plans.
- **A default room for people** (thanks @ToniB1984, #71): in the *Presence* section every person has a *Default room*. While they are home and no room sensor names a room, they stand there; it also works without any room sensor. Besides persons, any other entity that is on or home (an input_boolean helper, a device tracker, a binary sensor) can be added there for the same.
- **Hide devices in Outside** (thanks @eskahone, #83): the house settings have an *Outside: hide devices* list; the devices on it stay in the plan but no longer show in the Outside panel.
- **Reverse the direction of an awning or curtain** (thanks @Spawnkiller1, #100): a curtain, roller screen, awning or gate linked to a cover has a *Reverse the direction* checkbox, for the ones that move the opposite way in the plan than in reality.

## [0.25.4]

### Added

- **People in their rooms** (tested thoroughly by @thelichtler-cloud, #71): the house settings have a *Presence* section again. Per `person`, pick a room sensor (ESPresense, Bermuda, a template sensor …) whose state names the room or its area; while the person is home and the sensor names a room, their picture (or initials) stands in that room, two people side by side, and moves along when they change rooms. The house view counts the people per floor. The feature existed but was switched off until it had been tested.
- **Size of the sound rings per speaker** (thanks @thelichtler-cloud, #94): a speaker or TV linked to a media player, and a media player marker, have a *Sound rings (%)* field. A small speaker such as an Echo Dot can get small rings, and 0 switches them off while the cover picture and the glow stay.

### Fixed

- **Pets stood still for good while anything else moved** (thanks @thelichtler-cloud for the exact diagnosis, #97): a resting pet only counted its rest down while the view was otherwise idle, so with energy flows, sound rings or weather running it walked once and then stayed put. Pets now keep their own clock and walk on every few seconds.
- **Store plugins on Home Assistant opened over plain http** (thanks @MarioFey1979, #78): a browser on `http://` has no built-in checksum function, so NextFloor imported the plugin straight from GitHub, which serves it as plain text, and the browser refused it (the Cameras plugin loaded nowhere and no camera appeared in the lists). The file is now checked with NextFloor's own SHA-256 and loaded from memory, as over https.
- **A plugin added as `/local/www/…` never loaded** (thanks @MarioFey1979, #78): Home Assistant serves its `www` folder as `/local/`, so a path with `www` in it pointed nowhere and the plugin's devices (cameras, say) were missing from every list. Such a path now loads from `/local/…`, and a new one is stored that way.
- **Zigzag in a straight interior wall** (thanks @Dragi2k, #65): one straight wall that runs past several rooms (bathroom, store room and hall along the bedroom, say) was drawn in pieces, and a piece next to an outer wall sat flush on one side while its neighbours sat centred, so the top of the wall jumped back and forth. The whole straight wall is now aligned as one.

### Changed

- **The editor and the card's settings load faster**: they now use the texts the main bundle already has instead of bringing their own copy, so the editor download is about 200 KB smaller and the card's settings shrink from 236 KB to 31 KB.

## [0.25.3]

### Fixed

- **Close gaps flattened a wall that changes its thickness** (thanks @Dragi2k for the plan, #65): when one room faced two walls of another room at different distances (a wall that is thicker over part of its length), all of them were pulled onto one line, so the step disappeared and the room changed its shape. Each room now keeps its step: the nearer wall closes its gap, the thicker part stays as drawn.

## [0.25.2]

### Fixed

- **Outside on a small tablet** (thanks @eskahone, #83): with Outside open, the Today card (calendar) lay over its panel and caught the taps, so Outside could not be closed again. The Today card now steps aside while a room or Outside is open, as it already did for rooms.

## [0.25.1]

### Added

- **Czech** (thanks @MiraK-2000, #76): the whole interface, the setup and the announcement action in Czech. That makes eleven languages.
- A room's temperature, humidity or CO₂ can be read from several sensors that are averaged: pick one in the room's climate settings, then add another one below it (#80).
- A favourite in the star menu can be limited to one floor (dropdown beside it in the house settings); it then shows only while that floor is open (#73).
- A lamp can be set to "switch only in the room panel" (no brightness, colour temperature or colour sliders), and the name given to a placed device now also shows in the room panel (#73).
- The house settings choose which facts the room panel shows in its header: sun hours, comfort, airing hint, fuse-box circuits (#73).

### Fixed

- **A blind in front of the garage door** (thanks @eskahone, #85): a garage door linked to a cover drew a roller blind with its box in front of it, and the blind moved with the door. The cover now moves only the garage door itself.
- A wide window or sliding door with two blinds: a tap on its right half now opens the second blind; before, every tap went to the first one (#79).
- The plan check no longer offers devices as missing that a window, door or piece of furniture already picks up automatically through its area (a KNX blind, say) (#81).
- A plan with floors but no room no longer says "no floor plan yet": the 3D page now says that walls alone are not enough and that a room is drawn with *Rectangle* or *Free form*.

## [0.25.0]

### Fixed

- **Close gaps no longer puts corners into straight walls** (thanks @Dragi2k, #65): a wall that consists of several edges in a row (for example with a point in the middle of it) is now moved as one wall. Before, each part moved to its own neighbour, so a corner appeared in the wall that was not there before.
- **Clean view on a tablet** (thanks @Melles96, #75): the eye button that brings the controls back now sits at the top edge, so a tablet's taskbar or gesture bar can no longer cover it. *Esc* brings the controls back as well.
- **Phones held upright** (thanks @Duell10111, #70): the floor pictures step aside (the floor tabs above do their job), and the row of view switches along the bottom is one row that scrolls sideways, with a fade at its edge, instead of a column that spilled over the floor cards and the star.
- **Editor side bar covered** (thanks @marcelgschwendtner, #67): a row of tools wider than the plan no longer pushes the plan over the side bar; the row scrolls inside its pill.
- **Second blind on a door** (thanks @tfischer84, #79): a sliding door can now have a second blind for its right half, as a window can.
- **Clock on the card** (thanks @HA-Luz, #68): the clock now keeps ticking; it only moved when the view was reloaded.

### Added

- **A glass wall that follows a curved wall as one pane** (thanks @Sugsss, #66): a curved wall is stored as a chain of short straight edges, and a glass wall could only be as wide as one of them, so glazing an arc meant one pane per edge with a mullion at every bend. A glass wall placed on a curved wall now runs on from edge to edge as a single pane, with jambs only at its two ends, and stays one pane when it is moved, lengthened or deleted. It is stored as an ordinary opening per edge, sharing a `front` id, so the plan, the printed plan, the sun hours and the walls themselves need no special case.
- **Glass walls without mullions**: a glass wall divided into panes of about 0.9 m by itself, with no way to say otherwise. Its form now has a *Panes* field: `0` gives one single pane across the whole wall, for the large glazing modern houses have, and any other number sets how many panes the mullions make. Left empty, a plan keeps exactly the spacing it had.
- **Sanitary pack VIGOUR derby** (thanks @huepfer13, #63): a wall-hung WC, a urinal, a 60 cm washbasin, a paper towel dispenser and a soap dispenser in the sizes of the VIGOUR derby series. That makes 41 furniture packs.
- **A robot vacuum's own trail on the plan** (thanks @Sugsss, #77): a `robot_vacuum` on the plan drove lanes the view invented inside the room it reports. When the robot's integration puts its map on a camera — `vacuum_position`, `charger` and `path` as attributes, which NarwalIntegration's map card does — the view shows the truth instead: the robot stands where it says it is, facing where it faces, and the floor keeps the pad it has really driven, while the dock is drawn where the robot reports it. The robot's grid is tied to the plan by two places known in both (`settings.vacuum_map`); `mirror` covers a map whose y axis runs along plan −z, which two places alone cannot tell apart from a turn. The camera is found by its attributes, so nothing has to be chosen; the calibration is one tap — select the robot's dock, let it drive away, tap it on the plan — and a plan without one keeps the lanes it had. Ten minutes after the robot docks the pad fades out — the timeline keeps a finished clean, the floor does not. The attribute names are the vacuum map card's, so the Xiaomi map extractors, the Roborock integration, NarwalIntegration and any other integration that publishes them fit — including units in millimetres, since the two places set the scale. The manual and the Anleitung describe the calibration.

## [0.24.0]

### Added

- **NextFloor is in the official HACS store.** Install it by searching for *NextFloor* in HACS, no custom repository needed any more. If you installed it as a custom repository, nothing changes: your installation, plan and settings stay as they are and updates keep coming through HACS. A one-time notification in Home Assistant tells you so, in your language. The README, the manual and the Anleitung now describe the store install. Thank you to the HACS team for the review.
- **Choose what a double tap on a room switches** (thanks @mymoll, #62): settings → *Double tap on a room*: the lamps in the plan and every light of the room's area (as before), only the lamps in the plan, or nothing. Smart plugs that Home Assistant reports as lights (Hue plugs) are no longer switched by accident when they are not placed as a lamp. The card can override it with `room_double_tap: auto | area | plan | off`.

### Fixed

- **Shared plans and share views kept data of your home** (thanks to the HACS review): the copy for sharing removed the entity links but kept the settings as they were, so the map position of your home, favourites, own buttons and warnings, calendars, status sensors, the fuse box, announcement phrases and plugin paths travelled with the file, and so did picture rules of screens, light moods, own tap actions, room panel entity lists and Home Assistant areas. A shared copy now keeps only the look of the house (walls, roof, north, units, start view) plus its rooms, furniture and doors, and every field that names an entity, area or device of your Home Assistant is cleared on top of that, so a field added later cannot slip through. Your own plan and the normal backup are not changed. Files you shared earlier still hold the old data; share them again if that matters.

## [0.23.1]

### Fixed

- **Doors in a lowered room** (thanks @ayque): the door leaf, frame, threshold and handle now start on the room's own lower floor instead of the floor level, so there is no gap under the door any more; the edge lines of the opening follow too.

## [0.23.0]

### Added

- **Chinese setup and docs** (thanks @Sugsss): the config flow, the announcement action and the floor sensors in Simplified Chinese, plus a Chinese README and guide.
- **IFC import**: *Backup → Import* also takes an `.ifc` model from a BIM program (Revit, ArchiCAD, Allplan, Vectorworks …) – its storeys become floors at their elevation, its spaces rooms with their names and footprints, in the model's unit turned into metres. NextFloor draws the walls from the rooms.
- **Someone there?** The room panel says whether its motion, occupancy or presence sensors see someone now (*🚶 someone here*), or when they last did (*🚶 last seen 12 min ago*).
- **Power of sockets and switch plates**: a socket or switch whose button is a smart plug or a measuring switch now counts its power – in the room's power and the heat map *Power*, in the room panel, and in the power flow – from the power sensor on that button's device.

## [0.22.0]

### Added

- **A room on its own level**: *Floor level* in the room form puts a room's floor lower or higher than its floor (a sunken entrance at −0.39 m, a split level). Its floor, the bottom of its walls, its doors and windows, the furniture and device pins in it move with it, the step to the rooms around it shows, and its living area counts from its own floor; the ceiling stays where it is. Thanks to @ayque ([#57](https://github.com/therealMRBK/NextFloor/issues/57)).
- **Simplified Chinese**: the whole interface in Simplified Chinese (中文), fetched when Home Assistant runs in Chinese. Thanks to @Sugsss ([#59](https://github.com/therealMRBK/NextFloor/pull/59)).
- **Rooms open to the floor above**: a room's *Ceiling height* may now be higher than its floor – a living room open up to the floor above or under the roof, a gallery. Its walls and windows rise with it, ceiling lights hang from the high ceiling, and the floor above stays open over it; that floor's editor shows the area hatched. Thanks to @Xtiger123X ([#55](https://github.com/therealMRBK/NextFloor/issues/55)).
- **Furniture studio in the editor**: *🛠️ Build your own piece* at the top of the furniture library builds a cabinet (any width, doors, drawers, handles, plinth or legs), a shelf, a lamp (floor, table, pendant, wall) or a device with a display, in centimetres and with a front view that follows every change. It goes straight into the plan and into the pack *Own furniture*; *Change in the studio* on a placed piece changes it again, everywhere it stands.
- **A meter per floor**: *Floor meter (power)* in the floor form takes a power sensor for that floor alone (a sub-meter, a flat). Its value shows on the floor label in the house view, and in the floor's own view the house card adds a row with it and its share of the house's use.
- **Plan check**: *✓ Check the plan* at the top of the editor's side panel lists, floor by floor, what is missing or off – rooms without a Home Assistant area (with the area of the same name to link in one tap), areas without a room, devices of a room not in the plan yet, rooms lying on top of each other, doors and windows off their wall, pins or furniture pointing to entities Home Assistant no longer knows, and **standby eaters** – devices that are off but still draw more than 3 W, with what that costs over a year. Each line has a button that shows the place or makes the fix; undo works as always.
- **Sensors from the plan**: NextFloor now adds sensors to Home Assistant – *Open windows and doors* and *Lights on*, for the whole house and for every floor (e.g. `sensor.nextfloor_ground_floor_open_windows_and_doors`). They count what the plan links (contacts, garage doors, device pins and lamps), list the entities that are open or on in their `entities` attribute, and follow the plan when floors are added or renamed – ready for automations ("nothing open when the alarm goes on") and voice.
- **Everything off, with undo**: the room panel has *⏻ Everything off* while two or more things are on – lights, switches, fans and media (playing speakers pause, TVs switch off). In a floor's view the bar on top has the same for the whole floor (*⏻* with the number of devices). For ten seconds *↶ Undo* brings everything back as it was, lights with their brightness and colour.
- **Living area**: every room shows its living area in the editor, counted like the German Wohnflächenverordnung – the floor inside the walls, in full from 2 m clear height, half between 1 and 2 m under a slope, nothing below. The floor form adds it up for the floor and the house. Garages, cellars and utility rooms are left out by their name; *Counts as living area* in the room form decides it by hand.
- **The plan on paper**: *🖨️ Print plan / PDF* in the floor form opens every floor as a clean black-on-white drawing at 1:100 – walls, doors with their swing, windows, garage doors, room names with their areas, the outer measurements and a metre bar – and a table of all areas at the end. The browser's print dialog prints it or saves it as PDF.
- **Quality by itself**: with the quality on *Auto*, the 3D view now watches how fast the tablet draws while something moves. When it keeps drawing too slowly it uses fewer pixels, a quarter step at a time, and the simple look when even that is not enough; with plenty of room left the pixels come back slowly. *Low* and *High* stay as chosen.
- **Plan versions**: *📌 Save this state …* under *Backup → Restore points* keeps the plan under a name ("before the renovation"); named states stay when the automatic restore points go, and can be deleted again. *Compare* on any point lists, floor by floor, what differs from the plan as it is now – rooms added, removed, renamed or reshaped (with the change in m²), doors and windows, furniture moved, devices placed or removed.
- **Easy to read**: *Aa Easy to read* in the view options (and `readable: true` for the card) gives stronger contrast and larger text – the bars and the room panel a size larger, the pins and floor labels in 3D in bigger letters, Home Assistant's quiet greys in the full text colour. Made for wall tablets across the room and for anyone who reads better that way.
- **First steps**: a new plan starts with a short tour of four cards – drawing rooms, doors and windows, furniture and devices, looking and checking – naming the buttons as the editor shows them; it can be skipped and does not come back. The round *?* in the corner of the plan (or the *?* key) opens the sheet of the editor's keys.
- **Power per room**: the heat map has a new mode *Power* that colours every room by what its devices draw now – the power sensors of its device pins and furniture added up, each counted once, the house's own meters left out (from blue at nothing over green and yellow to red at 3 kW). The room panel shows the same next to temperature and humidity (*⚡ 340 W*), and below it what the room used today and this month, from the statistics of those sensors, with the month's cost at the house's tariff (*⚡ today 0.46 kWh · month 3.34 kWh · 0.97 €*).
- **Notes in the plan**: a right-click (or long press) in the editor has *✎ Note here* – a note pinned to that spot ("bleed the radiator", "fuse 12: cooker"), with an optional day it is due. In 3D it stands as a yellow pin on its floor, orange from the day it is due, and a tap shows its whole text; the search finds notes by their text.
- **Sun in the rooms**: the heat map has a mode *Sun* that colours every room by the hours of sun it gets today through its outside windows – from the plan, its compass and the sun's path at the home's place (neighbours, trees and the roof's overhang are not counted). The room panel shows the same, with the directions its windows look to (*☀ 5.5 h of sun today (S, W)*); a tap on *☀ Sun over the year* adds a bar for every month.
- **Share a view**: *🔗 Share a view* under *Backup* saves the house as a small HTML file that opens in any browser without Home Assistant – it shows the plan in 3D through NextFloor's online demo, with the furniture packs it uses and without any devices or entities, like a template. To show the house to family or a planner.
- **Shade hint**: when the sun stands on a room's outside windows, the room is 24 °C or warmer and those windows' blinds are open, the room panel says so (*☀ Sun on 2 windows at 25.3 °C – lower the blinds?*) and *Lower* closes them in one tap.
- **Clean this room**: a room's form has *Cleaning* – the script or button that sends the robot vacuum there (the room cleaning of your robot's integration). The room panel then shows *🧹 Clean*.
- **Fuse box**: the house settings have a *Fuse box* – circuits by name ("F12 kitchen") with the rooms they feed. The room panel names a room's circuits (*🔌 F12*), and the search finds a circuit and opens its room.
- **Heating with the window open**: when one of a room's windows or doors stands open (its contact or tilt sensor) while the room's thermostat heats, the room panel says so (*🪟 1 window open while the heating runs*) and *Heating off* switches it off – or to its lowest temperature where it has no off.
- **Low batteries**: the batteries of the plan's devices – device pins, the contacts, locks and blinds of doors and windows, linked furniture – from the battery sensor on their device or their own battery attribute. Below 20 % they are in the plan check (*🪫 Battery low: kitchen window (12 %)*) and in their room's panel.
- **Lights on, nobody there**: when a room's motion, occupancy and presence sensors have seen nobody for ten minutes while lights are on, the room panel says so and *Lights off* switches them off.
- **Comfort score**: every room with climate sensors gets a score from 0 to 100 – the temperature in its band (20–23 °C, 22–26 °C in summer), humidity between 40 and 60 %, CO₂ up to 800 ppm, where one bad value always shows. As the heat map mode *Comfort* and in the room panel (*😊 Comfort 85*).
- **Open for …**: the room panel shows how long the room's windows and doors stand open (*🪟 open for 12 min*), the one open longest – handy for airing.
- **Measurements in the plan**: *📏 Measurements* in the editor's bar labels every room edge with its length; the switch is remembered on the browser.
- **Temperatures on the floor label**: a floor's label in the house view shows its coolest and warmest room (*19–22 °C*).
- **Door not locked at night**: *Warn at night when a door is not locked* in the settings names the plan's door locks that stand unlocked between 10 pm and 6 am, as a quiet note in the warning bar.
- **A power sensor for lamps**: lamps now have the *Power sensor* field too, like every other electric piece – for a light behind a measuring switch or a smart plug. Its watts show on the lamp's pin and count in the power flow and the room's power. Thanks to @Robsonator ([#56](https://github.com/therealMRBK/NextFloor/discussions/56)).
- **Stairs: the landing where you want it, and a mount height**: L and U stairs have *Risers up to the landing* – the flights can differ (8 up to the landing, 11 after it), the form says how high the landing lies. Stairs now have the *Mount height* like other furniture, so the upper flight can start on a landing. Thanks to @ayque ([#58](https://github.com/therealMRBK/NextFloor/issues/58)).

### Fixed

- **Floor pictures on a low card**: on a stage lower than 520 px (a dashboard card of 420 px) the floor pictures are smaller and stop above the star, the search and the buttons at the bottom left instead of sliding under them.

## [0.21.0]

### Added

- **Turned roof sections**: a roof section has a *Turn (°)* in its form and turns about its middle – a wing at an angle, a roof over a house that does not stand square to the plan. Its slopes, ridge, gables, solar fields and the ceilings under it follow. Thanks to @XingLii ([#53](https://github.com/therealMRBK/NextFloor/issues/53)).
- **DXF import**: *Backup → Import* also takes a `.dxf` drawing from a CAD program – closed polylines become rooms, lines and open polylines free walls, in the drawing's unit turned into metres.
- **A tap on an own warning**: opens the entity's details by default, or – as chosen per warning – switches the entity or jumps to its room. Thanks to @HA-Luz ([#52](https://github.com/therealMRBK/NextFloor/discussions/52)).

## [0.20.0]

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

## [0.17.0]

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

## [0.16.1]

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

## [0.16.0]

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

## [0.15.0]

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

## [0.14.0]

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

## [0.13.0]

### Added

- **Import furniture packs again**: *Extensions → Furniture packs* imports your own packs as files or as JSON pasted straight into a text field, lists the packs you imported and removes them. The format is in [docs/packs.md](https://github.com/therealMRBK/NextFloor/blob/main/docs/packs.md).
- **Climate devices in furniture packs** by @carmona15 (#14): a pack item marked `climate: true` (a wall-mounted A/C, a heat pump) links to a Home Assistant climate entity, found automatically in the room's area like a radiator's thermostat, and can have a power sensor. How to mark an item: [docs/packs.md](https://github.com/therealMRBK/NextFloor/blob/main/docs/packs.md).

### Fixed

- **Wall thermostat** (#17) now links to a climate entity instead of asking for a TV. Climate items from packs are also offered under *Show as furniture* for a climate entity, next to the radiator.

## [0.12.0]

### Added

- **Plugin store**: *Extensions → Plugins → Open plugin store* lists reviewed community plugins from [NextFloor-Plugins](https://github.com/therealMRBK/NextFloor-Plugins) and installs them with one click. Authors submit a plugin with a pull request, which is reviewed by hand. Every entry points at a file pinned to one commit and carries its SHA-256; NextFloor checks the hash before the plugin runs and offers newer versions as an update.

### Fixed

- **Solar fields on a mansard roof** (#13) now lie on the roof instead of sinking into it. Each side offers two roof faces to choose from: the steep lower slope and the flatter upper slope above the break. Fields placed on a mansard before keep their spot on the lower slope; move a field that should sit higher onto the upper face.

## [0.11.0]

### Added

- **Ceiling height per room** (#12): a room can have its own ceiling height (room form → *Ceiling height*), e.g. a 2.12 m bathroom on a 4 m floor. Ceiling lights, ceiling fans, LED strips under the ceiling, ceiling devices and placed ceiling lights hang from it, and the room's walls are that high (a wall shared with a room without its own ceiling keeps the floor height; between two rooms with their own ceilings it takes the higher one). Heights set by hand on a wall still win.
- **Ceiling height at one spot** (#12): ceiling lights and other hanging items have a *Ceiling here* field for a sloping ceiling or a single high spot (a light at 4 m).
- **Ceiling fans** (#11): a new *Ceiling fan* in the lights section. Link its light kit like any lamp and its fan entity (found on the light's device or in the room). In 3D the blades turn as fast as the fan runs; the fan's pin shows its speed, a tap switches it, swiping up or down changes the speed and a long press opens the quick menu. Its height is how far it hangs from the ceiling, so a fan on a downrod hangs lower.

## [0.10.0]

### Added

- **Plugins:** NextFloor can now be extended without changing its code. A plugin is a JavaScript file you add on the **Extensions** page (from `/config/www`, HACS or HTTPS). Plugins can add their own light animations (they show up in a light's effect settings), show entities NextFloor does not know (a robot vacuum, a lawn mower) with their own icon and text, and add small cards to a room's panel. A broken plugin never breaks the house view; its errors show next to it on the Extensions page. How to write one: [docs/plugins.md](https://github.com/therealMRBK/NextFloor/blob/main/docs/plugins.md).
- **Sub-meters (advanced energy mode)** by @TheRealSimon42 (#8): a meter can hang off another meter, e.g. one sub-meter per flat behind the house's main meter; solar plants and batteries can hang off a sub-meter, and the house card shows the common rest. Off by default.
- **Configurable light effects** by @TazztheMonster (#9): map a light's effect names to rainbow, pulse, flicker or a static look, or turn animations off for one lamp without changing anything in Home Assistant.

### Changed

- The README credits NeonPlan 3D by Mastershort, the project NextFloor started from.

### Fixed

- Light effects are no longer all shown as a rainbow: plans without a mapping and unknown effects keep the colour and brightness from Home Assistant, pulse and flicker keep the base colour, and lights that are off or unavailable do not animate.

## [0.9.1]

### Changed

- **A pool cuts itself out of the areas around it:** a pool drawn inside a terrace (or a lawn) now leaves a hole there on its own, so the terrace runs around the pool and not over it. Any other area can still do the same with **Cut out of surrounding areas**. The order the areas were drawn in no longer matters: before, only areas drawn *before* the cutting one got the hole. The hole carries no light of the area around it either. Asked for in discussion #6.

### Fixed

- **A folded room panel no longer hangs in the picture:** on a wide window or in landscape the folded panel stayed at the top right and covered the view. It now drops to the bottom edge, above the switches (and to the bottom of the card), so it is out of the way. Reported in discussion #3.

## [0.9.0]

### Added

- **Sloping walls:** every wall in the room's wall list has a new button **Sloping**. It gives the wall a height at its start and another at its end, and the top runs straight between them: a lean-to room, a wall that follows a sloping ceiling, clerestory windows high on the tall side. Both heights may be above the floor height. Windows and doors on such a wall stay under its top, so a window near the high end can be taller than one near the low end. A corner added to a sloping wall splits the slope at the height it has there. Asked for in discussion #4.
- **Outdoor areas can have any shape:** the selected lawn, terrace, pool, fence and so on now shows a **+** in the middle of every edge, like a room. Drag it to add a corner; the corner buttons in the form (**1 ×**, **2 ×** …) take a corner away again. Asked for in discussion #6.
- **Flat roofs can be reshaped the same way:** the **+** on the edges of a flat or parapet roof turns the rectangle into a free shape, and its corners can be added, dragged and removed. (Pitched roofs stay rectangles over their ridge; L- and T-shaped houses are still built from several sections.) Asked for in discussion #6.
- **Turn a solar field on a flat roof:** the solar form has **Rotation** with quick **↺ 90°** and **↻ 90°** buttons. The field turns about its middle, its modules and frames turn with it, and it is kept on the roof. Asked for in discussion #5.
- **Fold the room panel away:** the room panel has a new **−** button next to the ✕. It hides the devices and keeps the room in view, which is what you want on a phone; a tap on the arrow opens it again. The panel starts open for every room. Asked for in discussion #3.

## [0.8.3]

### Fixed

- **Real map showed "Access blocked" (403) instead of the map:** Home Assistant asks the browser to send no Referer to other sites, and OpenStreetMap's tile servers refuse requests without one. NextFloor now loads every map tile with an explicit referrer policy (only your Home Assistant's address, not the full page address), in the plan and in 3D. The tiles are kept in the browser while the map is on.

## [0.8.2]

### Added

- **Room buttons on the dashboard card:** a new switch *Room buttons* in the card editor puts a row of buttons, one per room, along the top of the card. A tap opens the room (switching to its floor first when needed), a second tap closes it. In the house view the rooms of all floors show, grouped by floor. Asked for in discussion #2.

## [0.8.1]

### Fixed

- **Blue light frame around a TV that is on, even with *Glow behind the TV* at 0:** the glow frame that fades out around the screen of a TV that is on ignored the setting. With 0 it is now gone completely, and values below 100 make it weaker. (0.8.0 only removed the bright outline of the TV's body.)

## [0.8.0]

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

## [0.7.0]

### Added

- **Three new free furniture packs**, all built from scratch in NextFloor's own part format:
  - **Treppen & Geländer (10):** straight, L-shaped, U-shaped, spiral and space-saving staircases, landing, outdoor steps and railings in metal, glass and wood. The staircases cut their opening into the floor above.
  - **Architektur & Ausbau (10):** round and square columns, ceiling beam, chimney breast, glass partition, sliding wall, raised platform, half wall, shelving divider and pilaster.
  - **Garage & Werkstatt (9):** workbench, tool cabinet and trolley, storage rack, stack of tyres, drill press, compressor, bicycle stand and paint cabinet.
- All three appear in the demo's model showcase.

## [0.6.3]

### Added

- **Model showcase in the online demo:** every model of NextFloor, the basic ones and those of all packs, can be looked at live in a room of their own, ten at a time, with the names listed in the order they stand. Open the demo and choose "All models" (bottom right), or use `?showcase`.

### Changed

- **Languages:** NextFloor now comes in German and English only; Home Assistant instances in any other language show English. The 14 further language files were removed.

### Fixed

- The online demo no longer fails to deploy on a release (it deploys when the demo changes on `main`).
- A formatting slip in the Python code that made the checks fail.

## [0.6.2]

### Added

- **Glow behind the TV:** a TV, monitor or TV board has a new setting "Glow behind the TV (%)" in the editor. 0 switches the blue ambilight off (handy with LED strips on the TV), 100 is the usual strength, up to 150.

## [0.6.1]

### Fixed

- **Camera wall:** the pictures are now tiles of a sensible size (at most 560 px wide, as many per row as fit, centred) instead of one picture stretched over the whole screen when there is a single camera. Tiles lift slightly when you point at them.

## [0.6.0]

### Added

- **Upload 3D models in the app:** on the Extensions page every item that takes a model has an "Add a model" button. Choose the `.glb`, turn the front towards you, tick the body paint (guessed for you), pick the level of detail, check the preview and store it on your Home Assistant. NextFloor does the work of `tools/prepare-model.mjs` itself: it merges the parts, makes the model lighter, writes plain glTF without textures and marks the paint. Files that are compressed (Draco, Meshopt) are refused with a hint. You can replace and remove models there too.

### Changed

- The editor, the side panel, the dashboard card and parts of the 3D view were reorganised internally into smaller, tested modules. Behaviour and look are unchanged.
- The README is shorter, with a feature table and a screenshot gallery.

## [0.5.0]

- **Twelve Tesla models:** Model 3 (to 2023, 2024 and Performance), Model S and S Plaid, Model X, Model Y (2020 to 2024, 2025 Standard, Premium and Performance, and Model Y L) and the Cybertruck are separate items, each ready for its own 3D model, in the paint colours Tesla offers. Without a model file on your Home Assistant they show the simple shape.
- `tools/prepare-model.mjs` can leave out see-through fade layers and light beams (`--drop-materials`) and finds the front of the car by its charge port (`--rear`).

## [0.4.0]

- **Paint colours for vehicles:** every Tesla has the paint colours Tesla offers (Pearl White, Solid Black, Deep Blue, Ultra Red, Quicksilver and more; the Cybertruck its steel and wraps). Pick the colour in the editor, also for a car in a parking spot.
- **Your own 3D models:** put a model you own (`.glb`) on your Home Assistant and NextFloor draws it in place of the simple shape, with the paint colour you picked. The Tesla Model Y is the first item that takes one. NextFloor ships no model files; see [docs/models.md](docs/models.md) for how to prepare and add yours.

## [0.3.0]

- **IKEA sizes:** a new furniture pack with 20 popular pieces in their published outer dimensions: bookcases, cube shelves, beds, chests of drawers, wardrobes, sofas, an armchair, a desk, tables and more. They are our own simple models of the sizes, not IKEA's designs or files.

## [0.2.0]

- **Tesla models in 3D:** Model S, 3, X, Y, Cybertruck, Roadster and Semi in the vehicles pack, with their real outer dimensions. Put one on a parking spot and the car card follows it.
- **Smooth bodies for packs:** a new part shape, `sweep`, stretches a rounded skin over cross sections along the length. The Teslas are built with it; the format is described in [docs/packs.md](docs/packs.md).

## [0.1.0]

The first release.

- Draw your home right inside Home Assistant: floors, rooms, walls, doors, windows, stairs, outdoor areas and a roof, with a 3D view next to the plan.
- Control it in 3D: lamps glow in their colours, blinds and doors follow their state, a room panel lists everything of the area.
- Ten built-in furniture packs (about 100 items) plus your own packs as plain JSON ([docs/packs.md](docs/packs.md)).
- Six live features: weather at the house, energy flow, TV screens, sound, car and cameras (camera wall, detection pins, motion trail).
- A dashboard card with a visual editor, three looks, kiosk mode for wall tablets, warnings for smoke, gas, water and open windows in the rain.
- English and German in the box, fourteen more languages fetched on demand.
- Free and open source, no account, no cloud: NextFloor does not talk to the internet.

[Unreleased]: https://github.com/therealMRBK/NextFloor/compare/v0.29.0.3...main
[0.29.0.3]: https://github.com/therealMRBK/NextFloor/compare/v0.29.0.2...v0.29.0.3
[0.29.0.2]: https://github.com/therealMRBK/NextFloor/compare/v0.29.0.1...v0.29.0.2
[0.29.0.1]: https://github.com/therealMRBK/NextFloor/compare/v0.29.0...v0.29.0.1
[0.29.0]: https://github.com/therealMRBK/NextFloor/compare/v0.28.0...v0.29.0
[0.28.0]: https://github.com/therealMRBK/NextFloor/compare/v0.27.0...v0.28.0
[0.27.0]: https://github.com/therealMRBK/NextFloor/compare/v0.26.6...v0.27.0
[0.26.6]: https://github.com/therealMRBK/NextFloor/compare/v0.26.5...v0.26.6
[0.26.5]: https://github.com/therealMRBK/NextFloor/compare/v0.26.4...v0.26.5
[0.25.4]: https://github.com/therealMRBK/NextFloor/compare/v0.25.3...v0.25.4
[0.25.3]: https://github.com/therealMRBK/NextFloor/compare/v0.25.2...v0.25.3
[0.25.2]: https://github.com/therealMRBK/NextFloor/compare/v0.25.1...v0.25.2
[0.25.1]: https://github.com/therealMRBK/NextFloor/compare/v0.25.0...v0.25.1
[0.25.0]: https://github.com/therealMRBK/NextFloor/compare/v0.24.0...v0.25.0
[0.24.0]: https://github.com/therealMRBK/NextFloor/compare/v0.23.1...v0.24.0
[0.23.1]: https://github.com/therealMRBK/NextFloor/compare/v0.23.0...v0.23.1
[0.23.0]: https://github.com/therealMRBK/NextFloor/compare/v0.22.0...v0.23.0
[0.22.0]: https://github.com/therealMRBK/NextFloor/compare/v0.21.0...v0.22.0
[0.21.0]: https://github.com/therealMRBK/NextFloor/compare/v0.20.0...v0.21.0
[0.20.0]: https://github.com/therealMRBK/NextFloor/compare/v0.17.0...v0.20.0
[0.17.0]: https://github.com/therealMRBK/NextFloor/compare/v0.16.1...v0.17.0
[0.16.1]: https://github.com/therealMRBK/NextFloor/compare/v0.16.0...v0.16.1
[0.16.0]: https://github.com/therealMRBK/NextFloor/compare/v0.15.0...v0.16.0
[0.15.0]: https://github.com/therealMRBK/NextFloor/compare/v0.14.0...v0.15.0
[0.14.0]: https://github.com/therealMRBK/NextFloor/compare/v0.13.0...v0.14.0
[0.13.0]: https://github.com/therealMRBK/NextFloor/compare/v0.12.0...v0.13.0
[0.12.0]: https://github.com/therealMRBK/NextFloor/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/therealMRBK/NextFloor/compare/v0.10.0...v0.11.0
[0.10.0]: https://github.com/therealMRBK/NextFloor/compare/v0.9.1...v0.10.0
[0.9.1]: https://github.com/therealMRBK/NextFloor/compare/v0.9.0...v0.9.1
[0.9.0]: https://github.com/therealMRBK/NextFloor/compare/v0.8.3...v0.9.0
[0.8.3]: https://github.com/therealMRBK/NextFloor/compare/v0.8.2...v0.8.3
[0.8.2]: https://github.com/therealMRBK/NextFloor/compare/v0.8.1...v0.8.2
[0.8.1]: https://github.com/therealMRBK/NextFloor/compare/v0.8.0...v0.8.1
[0.8.0]: https://github.com/therealMRBK/NextFloor/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/therealMRBK/NextFloor/compare/v0.6.3...v0.7.0
[0.6.3]: https://github.com/therealMRBK/NextFloor/compare/v0.6.2...v0.6.3
[0.6.2]: https://github.com/therealMRBK/NextFloor/compare/v0.6.1...v0.6.2
[0.6.1]: https://github.com/therealMRBK/NextFloor/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/therealMRBK/NextFloor/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/therealMRBK/NextFloor/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/therealMRBK/NextFloor/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/therealMRBK/NextFloor/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/therealMRBK/NextFloor/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/therealMRBK/NextFloor/releases/tag/v0.1.0
