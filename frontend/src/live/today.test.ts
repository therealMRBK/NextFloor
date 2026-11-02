import assert from "node:assert/strict";
import { test } from "node:test";
import { agenda, sortDay } from "./today.ts";

test("the day's events as lines: times, all-day ones first, past ones marked", () => {
  const now = new Date(2026, 10, 3, 12, 0).getTime();
  const at = (h: number, m = 0) => new Date(2026, 10, 3, h, m).toISOString();
  const items = sortDay(
    agenda(
      [
        { summary: "Zahnarzt", start: { dateTime: at(15, 30) }, end: { dateTime: at(16) } },
        { summary: "Frühstück", start: { dateTime: at(8) }, end: { dateTime: at(9) } },
        { summary: "Geburtstag Oma", start: { date: "2026-11-03" }, end: { date: "2026-11-04" } },
        { summary: "", start: { dateTime: at(10) } },
      ],
      "Familie",
      now,
    ),
  );
  assert.deepEqual(items.map((i) => [i.time, i.title, !!i.past]), [["", "Geburtstag Oma", false], ["08:00", "Frühstück", true], ["15:30", "Zahnarzt", false]]);
});
