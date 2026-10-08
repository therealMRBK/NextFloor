"""Constants for NextFloor."""

from __future__ import annotations

DOMAIN = "nextfloor"

STORAGE_VERSION = 1
# minor versions of the building store; each step has a migration in storage.py
STORAGE_MINOR_VERSION = 2
STORAGE_KEY_BUILDING = f"{DOMAIN}.building"
STORAGE_KEY_IMAGES = f"{DOMAIN}.images"
STORAGE_KEY_HISTORY = f"{DOMAIN}.history"
STORAGE_KEY_PACKS = f"{DOMAIN}.packs"

# restore points: at most this many, and a new one only after this pause since the last one
HISTORY_MAX = 20
HISTORY_INTERVAL = 600

URL_BASE = "/nextfloor_static"
MAIN_BUNDLE = "nextfloor.js"
PANEL_URL_PATH = "nextfloor"
PANEL_COMPONENT = "nextfloor-panel"
PANEL_ICON = "mdi:floor-plan"
PANEL_TITLE = "NextFloor"

SIGNAL_BUILDING_UPDATED = f"{DOMAIN}_building_updated"
