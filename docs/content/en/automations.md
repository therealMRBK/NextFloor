---
title: Services and sensors
description: The sensors and actions NextFloor adds to Home Assistant, with examples for notifications and announcements.
---

NextFloor adds a small, stable surface to Home Assistant: two kinds of sensors and two actions.

## Sensors

On the device *NextFloor* you find:

| Sensor | Counts |
|---|---|
| *Open windows and doors* | the contacts, garage doors and device pins of the plan that are open |
| *Lights on* | the lamps of the plan that are on |

There is one of each **for the house** and one **for every floor**. The attribute `entities` lists what is open or on.

Example: a notification when the alarm is armed while something is open:

```yaml
action: notify.mobile_app_phone
data:
  message: >
    Still open: {{ state_attr('sensor.nextfloor_open_windows_and_doors', 'entities') | join(', ') }}
```

> [!TIP]
> Look up the exact entity ids under *Settings → Devices & services → NextFloor*. They follow the names of your floors.

## Actions

### `nextfloor.announce`

Speaks a message in the right rooms and on the open NextFloor screens. All fields are in [Announcements](announcements.md#in-automations).

```yaml
action: nextfloor.announce
data:
  message: "Someone is at the door!"
  rooms: [Hallway]
```

### `nextfloor.reload_screens`

Makes open NextFloor pages load again a few seconds apart, for example after an update. With `template` only the cards that use that [card template](cards.md#card-templates) reload.

```yaml
action: nextfloor.reload_screens
data:
  template: kitchen_tablet
```

## Everything off

*⏻ Everything off* is a button in the room panel and on the floor bar, not an action. It switches off lights, switches, fans and media, and *↶ Undo* brings them back for ten seconds.

## Next

[Write a plugin →](plugins.md)
