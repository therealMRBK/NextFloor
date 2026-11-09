"""Marking a note of the plan as done (#113)."""

from datetime import date

from custom_components.nextfloor.notes import add_months, mark_note_done


def _building(**note):
    return {"floors": [{"id": "f", "notes": [{"id": "n1", "x": 0, "z": 0, "text": "Filter", **note}]}]}


def test_add_months_keeps_the_day_or_cuts_it() -> None:
    assert add_months(date(2026, 11, 9), 3) == date(2027, 2, 9)
    assert add_months(date(2026, 1, 31), 1) == date(2026, 2, 28)
    assert add_months(date(2027, 12, 31), 2) == date(2028, 2, 29)
    assert add_months(date(2026, 11, 15), 14) == date(2028, 1, 15)


def test_a_recurring_note_is_due_again_after_its_months() -> None:
    building = _building(due="2026-11-01", repeat_months=6)
    assert mark_note_done(building, "n1", date(2026, 11, 9)) == {"due": "2027-05-09", "last_done": "2026-11-09"}
    note = building["floors"][0]["notes"][0]
    assert note["due"] == "2027-05-09" and note["last_done"] == "2026-11-09"


def test_a_one_off_note_loses_its_due_day() -> None:
    building = _building(due="2026-11-01")
    assert mark_note_done(building, "n1", date(2026, 11, 9)) == {"due": None, "last_done": "2026-11-09"}


def test_an_unknown_note_changes_nothing() -> None:
    building = _building(due="2026-11-01")
    assert mark_note_done(building, "zzz", date(2026, 11, 9)) is None
    assert building["floors"][0]["notes"][0]["due"] == "2026-11-01"


def test_the_schema_accepts_repeat_and_last_done_and_rejects_bad_values() -> None:
    import pytest
    import voluptuous as vol

    from custom_components.nextfloor.schema import FLOOR_SCHEMA

    note = {"id": "n", "x": 0, "z": 0, "text": "x", "repeat_months": 3, "last_done": "2026-11-09"}
    floor = {
        "id": "f",
        "name": "EG",
        "rooms": [],
        "placements": [],
        "furniture": [],
        "openings": [],
        "elevation": 0,
        "height": 2.5,
        "cut_height": 1.2,
        "background": None,
        "notes": [note],
    }
    assert FLOOR_SCHEMA(floor)["notes"][0]["repeat_months"] == 3
    note["repeat_months"] = 0
    with pytest.raises(vol.Invalid):
        FLOOR_SCHEMA(floor)
