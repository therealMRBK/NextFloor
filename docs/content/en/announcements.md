---
title: Announcements
description: "Dinner is ready!" in the room that should hear it: through its speaker and on every open NextFloor screen.
---

*"Dinner is ready!"* – and the room that should hear it, hears it.

## From a room

When a room has a speaker, its panel has an **📢 Announcement** section. Tap a sentence or type your own, and the room's speaker says it. Your own sentences go into *Editor → Settings*, one per line.

## Which speaker is used

NextFloor picks, in this order:

1. the speaker chosen in the room's form
2. a speaker placed in the room
3. a voice assistant (Voice PE and other satellites), an Echo or a speaker of the room's area

A TV or a speaker that is off is never picked by itself.

| Speaker | How it announces |
|---|---|
| Voice assistants | with their chime |
| Echo | as a real announcement (Alexa Devices or Alexa Media Player) |
| Sonos and others that support it | lower their music and play on afterwards |
| Any other speaker | through Home Assistant's text-to-speech |

## Quiet time per room

In the room's form, for example 20:00–07:00 for a nursery. Announcements to several rooms then leave that room out; one meant only for it still gets through.

## On the screens

Every open NextFloor page (panel or card) shows the message big over the house, plays a soft chime and speaks it. **An old wall tablet becomes an announcement speaker.**

- Give a screen a name under ⚙ → 📢 (for example *Hallway*) to send announcements to it alone, or untick it there to keep it silent.
- Browsers play sound only after the page was tapped once. In Fully Kiosk, switch on *Autoplay Audio* (Web Content Settings).

## In automations

The action **NextFloor: Announcement**:

```yaml
action: nextfloor.announce
data:
  message: "Someone is at the door!"
  rooms: [Kitchen, Living room]   # by name, room id or area id; leave out for every room with a speaker
  on_screens: true                # the open NextFloor screens show and speak it too
  screens: [Hallway]              # optional: only these screens
```

| Field | Meaning |
|---|---|
| `message` | the text (required) |
| `rooms` | room names, room ids or area ids; leave out for every room with a speaker |
| `floor` | limits it to one floor |
| `on_speakers` | `false` keeps the speakers silent |
| `on_screens` | `false` keeps the screens quiet |
| `screens` | only these named screens |
| `tts_entity` | picks the voice |

The action returns which speaker said it and which rooms were left out, and why.

## Next

[Wall tablet →](tablet.md)
