---
title: FAQ and troubleshooting
description: Answers to the questions people ask most, and fixes for the problems people run into.
---

## Questions

### Is NextFloor really free?

Yes, for good. Every feature, every furniture pack and every update is free. There is no Pro version, no paid add-on, no supporter pass and no licence key, and the MIT licence means nobody can take it away.

### Does it need a cloud or an account?

No. The plan, its pictures and the packs are stored on your Home Assistant. The only thing that can leave your installation is the map tiles, and only if you switch the real map on.

### Is it in the official Home Assistant integrations, without HACS?

No. NextFloor is in the **official HACS store**. The built-in integration list of Home Assistant is a separate process with its own rules (a published device library, a bundled frontend that fits Core's rules, a monthly release rhythm), and it does not suit a plan editor with its own frontend and fast fixes.

### Which Home Assistant version do I need?

2025.1 or newer.

### Can I switch things from NextFloor by accident while drawing?

No. In the editor, placing or linking a device never switches it. In the 3D view, a tap switches; *Ask before switching* on a lamp protects against accidental taps, and the 🔒 button locks the camera.

### Can several people use it?

Everyone with access to Home Assistant can use the 3D view and the card. Only administrators see the editor and save changes.

### Can I have several floor plans in one installation?

Not yet. One plan per installation is how NextFloor works today; the idea is being discussed in the [discussions](https://github.com/therealMRBK/NextFloor/discussions).

### I do not have the furniture I need.

Build it in the [furniture studio](furnish.md#the-furniture-studio) or the [browser builder](https://therealmrbk.github.io/NextFloor/builder/), or look in **Extensions → Community furniture**.

## Troubleshooting

### A device is missing from the room

The room needs an **area**, and the device must belong to it (device or entity). Otherwise use the *Other areas* or *No area* tabs.

### The panel looks old after an update

Reload the browser tab. On the companion app, reset the frontend cache and close the app completely. **A restart of Home Assistant does not help for this.**

### Furniture shows as grey boxes

Its pack is not installed. Import it again under *Extensions → Furniture packs*, and everything is back.

### The car does not appear

Check the *Sensor "car present"*. Without a sensor the vehicle is always shown.

### The solar field lands on the wrong roof side

Check the [compass](outside.md#compass-and-map) in Settings. If north and south are swapped, use *Swap north ↔ south*.

### It is slow on a tablet

Set the quality to *Tablet* and switch weather and power flow off. See [Wall tablet](tablet.md).

### Saving fails

Only administrators can save. The message names the field Home Assistant rejected, and your changes stay in the browser until you can save. After an update, Home Assistant may need a restart before saving works again.

### Announcements make no sound on the tablet

Browsers play sound only after the page was tapped once. In Fully Kiosk, switch on *Autoplay Audio*.

## Still stuck?

- Ideas and questions: [Discussions](https://github.com/therealMRBK/NextFloor/discussions)
- Bugs: [Issues](https://github.com/therealMRBK/NextFloor/issues/new/choose), with the version, what you did and what you saw
- Security: [private report](https://github.com/therealMRBK/NextFloor/security/advisories/new), never a public issue
