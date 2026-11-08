---
title: Bluetooth locating
description: Find out which room a Bluetooth tag, watch or phone is in, learned by walking through the rooms, from the Bluetooth scanners Home Assistant already has.
---

NextFloor can tell **which room a Bluetooth tag is in**: a key fob, a watch, a phone. You walk through the rooms with the tag once and record each room. Afterwards a sensor in Home Assistant shows the room name, and with *Presence* the person's avatar stands in that room.

> [!WARNING]
> **This feature is new and experimental.** It is built and tested with simulated signals, not yet with a long run in a real house. Radio signals bounce off walls and people, so expect a wrong room now and then, mostly next to a wall between two rooms. Tell us how it works for you in the [discussions](https://github.com/therealMRBK/NextFloor/discussions).

## What you need

The method needs **at least two Bluetooth scanners, three or more is much better**, in different rooms. A scanner is anything that Home Assistant uses to listen to Bluetooth:

- an **ESPHome Bluetooth proxy** (an ESP32 board, a few euros),
- a **Shelly device** (Gen2 and newer) with Bluetooth scanning switched on: in Home Assistant open the Shelly entry, press *Configure* and set the Bluetooth scanner mode to *passive*, *active* or *auto*. Shellys in the walls make good scanners, because they sit in many rooms,
- the **Bluetooth adapter of the server** itself.

With only one scanner, NextFloor can tell near from far, but not one room from the next.

The tag can be:

- a **Bluetooth tag with a fixed address** (key fobs, many fitness bands, an ESP32 beacon),
- a **phone or watch** through Home Assistant's [Private BLE Device](https://www.home-assistant.io/integrations/private_ble_device/) integration. Phones and watches change their Bluetooth address all the time; Private BLE Device follows them with their *identity resolving key*. NextFloor then asks that integration for the current address. Getting the key from an iPhone takes some effort, and the integration's page explains how.

## Set it up

1. In the editor, open **Settings → Bluetooth locating**.
2. Under *Add a tag or device*, pick your tag. Phones and watches from Private BLE Device are listed first. A tag only appears in the list once a scanner has heard it, so hold it near a scanner and press *Reload the list*.
3. Press **Add**, then **Learn rooms** on the new tag. The bars show how strongly every scanner hears the tag right now.
4. Pick a room, press **Record** and walk slowly through the whole room for 30 seconds with the tag in your hand, into the corners too.
5. Repeat for every room in which you want to locate the tag. **Now** shows the room NextFloor would answer at this moment, a good check after each room.

Recording a room again replaces it. Each room is kept as up to three recordings from different stretches of your walk.

## The sensor

Every tag gets a sensor on the device *NextFloor*. Its **state is the room name**, or `unknown` when no room fits well or no scanner has heard the tag for two minutes. The attributes carry the room id, the floor, how well the room matched (`distance_db`) and what each scanner hears.

```yaml
automation:
  - alias: "Lights follow me"
    triggers:
      - trigger: state
        entity_id: sensor.nextfloor_keys
        to: "Kitchen"
    actions:
      - action: light.turn_on
        target:
          area_id: kitchen
```

The room only changes after three readings in a row (about six seconds), so the answer does not flicker. To show the person in 3D, choose the sensor as the room sensor of that person under **Presence**: its state is a room name, as Presence expects.

## How it works, and what it does not do

NextFloor reads the signal strength (RSSI) that each scanner reports for the tag, a few seconds apart, and takes the median of the last five readings. It compares that pattern with the recordings of every room and picks the nearest. A room is only answered when it is close enough; otherwise the answer is `unknown`.

- Nothing leaves Home Assistant. The recordings are stored with the plan, but **not** in shared plans and templates.
- The scanners must keep their place. If you move a proxy, record the rooms again.
- A person's body weakens the signal. Record with the tag where you normally carry it (pocket or hand).
- Different tags hear differently, so each tag needs its own recordings.
