"""Marking a note of the plan as done (#113)."""

from __future__ import annotations

import calendar
from datetime import date
from typing import Any


def add_months(day: date, months: int) -> date:
    """`day` plus whole months; the day of the month is cut to the last day of a shorter month."""
    index = day.year * 12 + (day.month - 1) + months
    year, month = divmod(index, 12)
    month += 1
    return date(year, month, min(day.day, calendar.monthrange(year, month)[1]))


def mark_note_done(building: dict[str, Any], note_id: str, today: date) -> dict[str, Any] | None:
    """Mark a note as done in `building` (changed in place).

    Returns its new `due` and `last_done`, or None when the note is unknown.

    A recurring note is due again after its months, counted from today; a one-off note loses its due day.
    """
    for floor in building.get("floors", []):
        for note in floor.get("notes", []):
            if note.get("id") != note_id:
                continue
            months = note.get("repeat_months")
            note["due"] = add_months(today, months).isoformat() if months else None
            note["last_done"] = today.isoformat()
            return {"due": note["due"], "last_done": note["last_done"]}
    return None
