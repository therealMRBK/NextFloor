import assert from "node:assert/strict";
import { test } from "node:test";
import { OrthographicCamera } from "three";
import { LabelPlacer, centredAt, floorLabelPosition, floorShowsMarkers, floorShowsPersons, floorShowsOutdoorMarkers, leftAt, project, stackFloorLabels } from "./labels.ts";

test("a point in front of the camera lands on the screen, one behind it is off", () => {
  const camera = new OrthographicCamera(-5, 5, 5, -5, 0.1, 100);
  camera.position.set(0, 0, 10);
  camera.lookAt(0, 0, 0);
  camera.updateMatrixWorld();
  const middle = project(camera, [0, 0, 0], { w: 200, h: 100 });
  assert.deepEqual([middle.x, middle.y, middle.off], [100, 50, false]);
  const corner = project(camera, [5, 5, 0], { w: 200, h: 100 });
  assert.deepEqual([corner.x, corner.y], [200, 0]);
  assert.equal(project(camera, [20, 0, 0], { w: 200, h: 100 }).off, true);
  assert.equal(project(camera, [5.2, 0, 0], { w: 200, h: 100 }, 1.1).off, false);
});

test("transforms centre an element at a point, or align its left edge", () => {
  assert.equal(centredAt({ x: 10, y: 20 }), "translate(10px, 20px) translate(-50%, -50%)");
  assert.equal(leftAt(5, 6), "translate(5px, 6px) translate(0, -50%)");
});

test("an element is only written when its place changes, and hidden follows null", () => {
  const writes: string[] = [];
  const element = { hidden: false, style: { set transform(v: string) { writes.push(v); } } } as unknown as HTMLElement;
  const placer = new LabelPlacer();
  placer.place(element, "a");
  placer.place(element, "a");
  placer.place(element, "b");
  assert.deepEqual(writes, ["a", "b"]);
  placer.place(element, null);
  assert.equal(element.hidden, true);
  placer.place(element, "b");
  assert.equal(element.hidden, false);
  assert.deepEqual(writes, ["a", "b"], "b is where it still is");
});

test("floor labels are stacked from the top floor down without covering each other", () => {
  const labels = stackFloorLabels([
    { rank: 0, left: 0, y: 100, height: 20 },
    { rank: 1, left: 0, y: 105, height: 20 },
    { rank: 2, left: 0, y: 300, height: 20 },
  ]);
  assert.deepEqual(labels.map((l) => l.rank), [2, 1, 0]);
  assert.equal(labels[0].y, 300);
  assert.equal(labels[1].y, 328, "pushed down from the label above: half of each height plus the gap");
  assert.equal(labels[2].y, 356);
});

test("a floor label sits left of the floor, moves to the right when the left is taken, and stays in view", () => {
  const corners = [{ x: 200, y: 50 }, { x: 600, y: 60 }];
  assert.deepEqual(floorLabelPosition(corners, 100, { width: 800, inset: 0 }), { left: 86, y: 50 });
  assert.deepEqual(floorLabelPosition([{ x: 60, y: 50 }, { x: 600, y: 60 }], 100, { width: 800, inset: 0 }), { left: 8, y: 50 }, "kept at the margin");
  assert.deepEqual(floorLabelPosition([{ x: 130, y: 50 }, { x: 600, y: 60 }], 100, { width: 800, inset: 120 }), { left: 614, y: 60 }, "the left is taken by pictures");
  assert.equal(floorLabelPosition([{ x: 700, y: 1 }], 100, { width: 800, inset: 0 }).left, 586);
});

test("markers show only for a floor that is fully in view and not another floor", () => {
  assert.equal(floorShowsMarkers({ to: 1, o: 1 }, false), true);
  assert.equal(floorShowsMarkers({ to: 0.2, o: 0.2 }, false), false);
  assert.equal(floorShowsMarkers({ to: 1, o: 1 }, true), false);
  assert.equal(floorShowsMarkers({ to: 1, o: 0.5 }, false), false);
});

test("outdoor markers show wherever their floor is drawn and settled", () => {
  assert.equal(floorShowsOutdoorMarkers({ to: 1, o: 1 }), true);
  assert.equal(floorShowsOutdoorMarkers({ to: 0.22, o: 0.22 }), true, "a dimmed floor below the opened one");
  assert.equal(floorShowsOutdoorMarkers({ to: 0, o: 0 }), false, "a hidden floor");
  assert.equal(floorShowsOutdoorMarkers({ to: 1, o: 0.5 }), false, "still fading in");
});

test("people show on visible floors in the house overview and keep floor-view filtering", () => {
  const floor = { to: 1, o: 1, group: { visible: true } };
  assert.equal(floorShowsPersons(floor, true, false, true), true);
  assert.equal(floorShowsPersons({ ...floor, to: 0.22, o: 0.22 }, true, true, true), true);
  assert.equal(floorShowsPersons({ ...floor, group: { visible: false } }, true, false, true), false);
  assert.equal(floorShowsPersons(floor, true, false), false, "overview is opt-in");
  assert.equal(floorShowsPersons(floor, true, false, false), false);
  assert.equal(floorShowsPersons(floor, false, false), true);
  assert.equal(floorShowsPersons(floor, false, true), false);
  assert.equal(floorShowsPersons({ ...floor, o: 0.5 }, false, false), false);
});
