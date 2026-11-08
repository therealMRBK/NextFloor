---
title: The dashboard card
description: Add the NextFloor card to any dashboard, with a visual editor, card templates and a complete list of every option.
---

![The NextFloor card on a dashboard](card.jpg)

Add **NextFloor** in the dashboard's card dialog, or write it in YAML:

```yaml
type: custom:nextfloor-card
floor: ground
theme: neon
room_buttons: true
```

The **visual editor** sets everything below without YAML. The YAML names are the ones in this reference. Every option is optional, and the defaults are shown in the tables.

## Card templates

Set a card up once and use it on many tablets. *Settings → Card templates* in the editor takes a name (say `kitchen_tablet`) and the card's own settings dialog. On a dashboard card, choose the template in its settings or write:

```yaml
type: custom:nextfloor-card
template: kitchen_tablet
```

The card's own options win. A change in the editor reaches every card that uses the template. *Reload screens with this template* and *Reload all screens* (also the action `nextfloor.reload_screens`, with an optional `template`) make the open tablets load their page again a few seconds apart, for example after an update.

## What the card shows

| Option | Default | Meaning |
|---|---|---|
| `floor` | | start floor |
| `room` | | start in this room (its id from the editor), for a display of one room |
| `rooms` | | only these rooms (a list of ids) with what stands in them; the card cannot leave them |
| `height` | | fixed height of the card |
| `fill` | `false` | fill the screen below the dashboard header instead of a fixed height |
| `plain` | `false` | floor plan only: no furniture (devices and their pins stay) |
| `floor_stack` | `dim` | an opened floor with the floors below dimmed (`dim`), stacked (`stacked`) or alone (`single`) |
| `explode` | `true` | pull the floors apart in the house view |
| `roof_fade` | `true` | the roof lifts and fades while you zoom in |
| `room_names` | `true` | room names in 3D |
| `energy` | `true` | energy values at the top |
| `sensor_bar` | `true` | the plan's own sensors at the top |
| `weather` | `true` | rain, snow, fog, clouds, sun and moon outside the house |
| `weather_entity` | first one | the weather entity to use |
| `weather_density` | `1` | how much rain, hail and snow falls, 0.1 … 1 |
| `today` | `true` | the *Today* card with appointments and bins |

## Look

| Option | Default | Meaning |
|---|---|---|
| `theme` | `auto` | `neon`, `blueprint`, `day` |
| `accent` | cyan | accent colour as `#rrggbb` |
| `walls` | | wall mode of the view |
| `solid_walls` | `false` | opaque walls in their paint instead of glass |
| `glass_walls` | `20` | how opaque the see-through walls are, 0 … 100 % |
| `quality` | auto | `auto`, `tablet`, `high` |
| `markers` | `important` | `none`, `important`, `all` |
| `markers_outside` | | outside the opened room only markers of these kinds show |
| `marker_names` | `false` | every device with an own name shows it under its marker |
| `heatmap` | `none` | `none`, `temperature`, `humidity`, `co2` |
| `clock` | `none` | `top_left`, `top_right`, `bottom_left`, `bottom_right` |
| `readable` | `false` | stronger contrast and larger text, for wall tablets |
| `zoom` | `1` | how much closer the fitted views come, 0.6 … 2.5 |
| `stats` | `false` | show frames per second and draw calls |

## Controls and behaviour

| Option | Default | Meaning |
|---|---|---|
| `controls` | | switches in the card: all (`true`) or a list of `walls`, `floors`, `temperature`, `humidity`, `co2` |
| `controls_hidden` | | start with every bar and overlay hidden (the eye button brings them back) |
| `controls_hide_after` | | hide every bar after this many seconds without a touch |
| `room_panel` | `true` | tapping a room opens its details |
| `room_buttons` | `false` | a row of buttons, one per room |
| `floor_thumbs` | on without a start floor | small pictures of the floors to switch between them |
| `central` | `true` | the star with the central menu |
| `central_open` | `false` | the star menu stands open from the start, a size larger |
| `buttons` | | own buttons in the central menu: `label`, `icon`, `action` (`navigate`, `more_info`, `service`, `fire_dom_event`), `target`, `data` |
| `scenes` | `true` | scene and script chips of the selected room |
| `tap_in_room` | `false` | devices are switched by a tap only in the opened room; elsewhere a tap opens the floor or room (a long press still acts) |
| `room_double_tap` | `auto` | what a double tap on a room switches: `auto`, `area`, `plan`, `off` |
| `keep_camera` | `false` | switching floors keeps the camera's side, height and distance |
| `right_back` | `false` | a short right click goes one step back |
| `start_view` | plan's | a start view of this card's own |
| `lock_button` | `true` | the 🔒 button that locks the camera |
| `walk_button` | `true` | the 🚶 button for walking through the house |
| `time_travel` | `true` | the ⏪ button for replaying the last day or week |
| `fullscreen_button` | `false` | a button for full screen |
| `dashboard`, `dashboard_label` | | a button to another dashboard or view |
| `flows` | switch | power flow lines always on or off |
| `holograms` | switch | the live cards (energy balance, car, media) always on or off |

## Warnings and announcements

| Option | Default | Meaning |
|---|---|---|
| `alerts` | `true` | smoke, water, alarm and window-in-the-rain warnings as pulsing rooms and a banner |
| `alert_jump` | `false` | jump to the room of a new warning |
| `announcements` | `true` | announcements show and speak on this card |
| `screen_name` | panel's name | the name of this screen, for announcements meant for some screens only |

## Kiosk

| Option | Meaning |
|---|---|
| `idle_return` | seconds without a touch before returning to the start view (0 = never) |
| `night` | dim at night: `off`, `sun` or a range such as `22:00-06:00` |
| `idle_orbit` | after the idle return, turn the view slowly until the next touch |

More in [Wall tablet](tablet.md).

## Next

[Services and sensors →](automations.md)
