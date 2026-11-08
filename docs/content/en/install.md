---
title: Install NextFloor
description: Install NextFloor through HACS or by hand, add the integration and update it safely.
---

NextFloor needs **Home Assistant 2025.1 or newer**. It installs like any custom integration and adds a *NextFloor* entry to the sidebar.

## With HACS (recommended)

NextFloor is in the **official HACS store**, so there is no custom repository to add.

1. Open **HACS**, search for *NextFloor* and press **Download**.
2. **Restart Home Assistant.**
3. Go to **Settings → Devices & services → Add integration** and pick *NextFloor*.
4. A *NextFloor* entry appears in the sidebar. Open it, and you are in.

[![Open in HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=therealMRBK&repository=NextFloor&category=integration)

> [!NOTE]
> Installed NextFloor earlier as a custom repository? You do not have to change anything. HACS keeps it as a normal repository by itself, and updates keep coming.

## By hand

1. Download `nextfloor.zip` from the [latest release](https://github.com/therealMRBK/NextFloor/releases/latest).
2. Copy the `custom_components/nextfloor` folder into your Home Assistant configuration folder.
3. Restart Home Assistant and add the integration as in step 3 above.

## Update

1. Update through HACS.
2. Restart Home Assistant.
3. **Reload the browser tab.** On the companion app, use *Settings → Companion app → Reset frontend cache* and close the app completely.

> [!WARNING]
> If a panel looks old after an update, it is the browser cache, not Home Assistant. A restart of Home Assistant does not help for this, but reloading the tab does.

## Where your data lives

The plan, its pictures and the furniture packs are stored in Home Assistant's `.storage` folder. Nothing leaves your installation: there is no account, no cloud and no usage data. See [Backup and import](plan-tools.md#backup-and-import) for how to keep a copy.

## Who can do what

Everyone with access to Home Assistant can open NextFloor and use the 3D view. Only **administrators** see the **Editor** tab and can save changes to the plan.

## Next

[Quick start →](quickstart.md): draw your first room and switch a lamp in 3D.
