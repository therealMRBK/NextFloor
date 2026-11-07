import assert from "node:assert/strict";
import { test } from "node:test";
import { advancePet, freeSpot, nextTarget, seededRandom, stepPet, type PetMotion, type PetRoom } from "./pets.ts";

const room: PetRoom = {
  points: [[0, 0], [5, 0], [5, 4], [0, 4]],
  obstacles: [[[2, 1], [3, 1], [3, 3], [2, 3]]], // a table in the middle
  speed: 0.5,
};

test("free spots are inside the room, off the walls and outside the furniture", () => {
  assert.ok(freeSpot(room, [1, 1]));
  assert.ok(!freeSpot(room, [2.5, 2]), "under the table");
  assert.ok(!freeSpot(room, [0.1, 2]), "against the wall");
  assert.ok(!freeSpot(room, [6, 2]), "outside");
});

test("the next spot is free and the way there does not cross the furniture", () => {
  const random = seededRandom("cat");
  for (let i = 0; i < 40; i++) {
    const t = nextTarget(room, [1, 2], random);
    assert.ok(t && freeSpot(room, t));
    assert.ok(t![0] < 2 || t![1] < 1 || t![1] > 3, "never straight through the table");
  }
});

test("a pet walks to its spot, rests there and walks on, never leaving the room", () => {
  const random = seededRandom("dog");
  const m: PetMotion = { pos: [1, 1], heading: 0, target: null, rest: 0 };
  let walked = 0;
  for (let i = 0; i < 2000; i++) {
    if (stepPet(m, room, 0.1, random)) walked++;
    assert.ok(freeSpot(room, m.pos, 0.2) || Math.hypot(m.pos[0] - 1, m.pos[1] - 1) < 1e-9, `left the free floor at ${m.pos}`);
  }
  assert.ok(walked > 200 && walked < 1990, "it walks, and it rests in between");
});

test("the same pet walks the same way after a reload", () => {
  const a = seededRandom("rabbit-1");
  const b = seededRandom("rabbit-1");
  assert.deepEqual([a(), a(), a()], [b(), b(), b()]);
});

test("a pet placed under the table walks out of it", () => {
  const t = nextTarget(room, [2.5, 2], seededRandom("under"));
  assert.ok(t && freeSpot(room, t));
});

test("a resting pet walks on after its rest, whether frames come every 16 ms or after one long sleep (#97)", () => {
  const random = seededRandom("cat");
  const busy: PetMotion = { pos: [1, 1], heading: 0, target: null, rest: 3 };
  let t = 0;
  while (!busy.target && t < 10) {
    advancePet(busy, room, 0.016, random);
    t += 0.016;
  }
  assert.ok(busy.target, "frames of other animations count the rest down");
  assert.ok(t > 2.9 && t < 3.1, `walked on after about 3 s, not ${t.toFixed(2)} s`);
  const asleep: PetMotion = { pos: [1, 1], heading: 0, target: null, rest: 3 };
  const before = [...asleep.pos];
  advancePet(asleep, room, 3.05, random);
  assert.ok(asleep.target, "a frame after a 3 s sleep counts the whole sleep");
  assert.ok(Math.hypot(asleep.pos[0] - before[0], asleep.pos[1] - before[1]) <= room.speed * 0.2 + 1e-9, "but walks at most 0.2 s at once");
});
