import assert from "node:assert/strict";
import { test } from "node:test";
import { box, floorWith } from "../../entities/fixtures.ts";
import type { Building, Floor } from "../../model.ts";
import type { EditorHost } from "./host.ts";
import { RoofController } from "./roof-controller.ts";

function setup(roof: Record<string, unknown> = { type: "gable", pitch: 35, overhang: 0.4 }, admin = true) {
  const floor: Floor = floorWith([box("r", 0, 0, 8, 5)], { elevation: 0, height: 2.5 });
  let doc = { version: 1, floors: [floor], settings: { wall_exterior: 0.3, wall_interior: 0.12, north: 0, grid: 0.1, roof }, energy: {}, presence: [] } as unknown as Building;
  const calls = { refresh: 0, floor: null as string | null, confirmed: true, changes: 0 };
  const host: EditorHost = {
    hass: undefined,
    get doc() {
      return doc;
    },
    floor,
    admin,
    t: (key, vars) => `${key}${vars ? JSON.stringify(vars) : ""}`,
    change: (mutate) => {
      const next = structuredClone(doc);
      mutate(next, next.floors[0]);
      doc = next;
      calls.changes++;
    },
    pickPoint: () => {},
    replace: (next) => void (doc = next),
  };
  const controller = new RoofController({ host, floorId: () => calls.floor, setFloorId: (id) => (calls.floor = id), confirm: () => calls.confirmed, refresh: () => calls.refresh++ });
  return { controller, calls, doc: () => doc };
}

test("switching to sections proposes them from the rooms, and a second time only when asked to start over", () => {
  const s = setup();
  s.controller.useSections();
  const first = s.doc().settings.roof;
  assert.equal(first.type, "custom");
  assert.ok((first.sections ?? []).length > 0);
  const ids = first.sections!.map((x) => x.id);
  s.controller.useSections();
  assert.deepEqual(s.doc().settings.roof.sections!.map((x) => x.id), ids, "nothing is regenerated");
  s.calls.confirmed = false;
  s.controller.useSections(true);
  assert.deepEqual(s.doc().settings.roof.sections!.map((x) => x.id), ids, "declined");
  s.calls.confirmed = true;
  s.controller.useSections(true);
  assert.notDeepEqual(s.doc().settings.roof.sections!.map((x) => x.id), ids);
});

test("a section can be drawn, selected, changed, copied and removed", () => {
  const s = setup();
  s.controller.addSection([0, 0], [8, 5]);
  const id = s.controller.sectionId!;
  assert.equal(s.doc().settings.roof.type, "custom");
  assert.equal(s.controller.section?.id, id);
  s.controller.patchSection({ pitch_a: 20 });
  assert.equal(s.controller.section?.pitch_a, 20);
  s.controller.duplicateSection();
  assert.equal(s.doc().settings.roof.sections!.length, 2);
  assert.notEqual(s.controller.sectionId, id, "the copy is selected");
  s.controller.removeSection();
  assert.equal(s.controller.sectionId, null);
  assert.deepEqual(s.doc().settings.roof.sections!.map((x) => x.id), [id]);
});

test("a dormer is added to the selected section and then selected itself", () => {
  const s = setup();
  s.controller.addSection([0, 0], [8, 5]);
  const parent = s.controller.sectionId;
  s.controller.addDormer("a");
  assert.notEqual(s.controller.sectionId, parent);
  assert.equal(s.controller.section?.dormer !== undefined && s.controller.section.dormer !== null, true);
});

test("the outline of the floor shown becomes the shape of a section", () => {
  const s = setup();
  s.controller.addSection([0, 0], [8, 5]);
  s.controller.takeOutline();
  const section = s.controller.section!;
  assert.equal(section.shape, "flat");
  assert.ok((section.points ?? []).length >= 4);
});

test("a viewer who is no admin cannot change anything", () => {
  const s = setup(undefined, false);
  s.controller.addSection([0, 0], [8, 5]);
  s.controller.useSections();
  s.controller.addField();
  assert.equal(s.calls.changes, 0);
});

test("solar fields: one goes on the best face, further ones on the faces left, and removing one takes its empty string with it", () => {
  const s = setup();
  s.controller.addField();
  const first = s.controller.field!;
  assert.ok(first.face.startsWith("main:"));
  assert.equal(s.controller.sectionId, null);
  s.controller.addField();
  const second = s.controller.field!;
  assert.notEqual(second.face, first.face);
  s.controller.setString("new");
  assert.equal(s.doc().settings.roof.strings!.length, 1);
  assert.equal(s.controller.field!.string, s.doc().settings.roof.strings![0].id);
  s.controller.patchString({ name: "Süd" });
  assert.equal(s.doc().settings.roof.strings![0].name, "Süd");
  s.controller.removeField();
  assert.equal(s.controller.solarId, null);
  assert.equal(s.doc().settings.roof.solar!.length, 1);
  assert.deepEqual(s.doc().settings.roof.strings, []);
});

test("a field's modules can be switched off by cell, and a change keeps the field on its face", () => {
  const s = setup();
  s.controller.addField();
  s.controller.toggleCell("0:0");
  assert.deepEqual(s.controller.field!.skip, ["0:0"]);
  s.controller.toggleCell("0:0");
  assert.equal(s.controller.field!.skip, null);
  s.controller.patchField({ rows: 40, cols: 60, u: 50, v: 50 });
  const face = s.controller.field!;
  assert.ok(face.u < 50 && face.v < 50, `pushed back: ${face.u},${face.v}`);
});

test("roof windows are added on a sloped face, kept on it when changed, and removed", () => {
  const s = setup();
  s.controller.addWindow();
  const win = s.controller.window!;
  assert.ok(win.face.startsWith("main:"));
  s.controller.patchWindow({ u: 999 });
  assert.ok(s.controller.window!.u < 999);
  s.controller.removeWindow();
  assert.equal(s.controller.windowId, null);
  assert.deepEqual(s.doc().settings.roof.windows, []);
});

test("selecting a wall field brings up its floor, and the selection changes ask for a redraw", () => {
  const s = setup();
  s.controller.addWallField();
  const field = s.controller.field;
  if (field) {
    s.controller.selectField(field.id);
    assert.equal(s.calls.floor, field.face.split(":")[1]);
  }
  const before = s.calls.refresh;
  s.controller.picking = true;
  s.controller.sectionId = null;
  assert.equal(s.calls.refresh, before + 2);
  assert.equal(s.controller.picking, true);
});

test("a section is fixed by its own lock or by the lock on the plan", () => {
  const s = setup();
  s.controller.addSection([0, 0], [8, 5]);
  const section = s.controller.section!;
  assert.equal(s.controller.isFixed(section), false);
  assert.equal(s.controller.isFixed({ ...section, locked: true }), true);
  assert.equal(s.controller.isFixed(undefined), false);
});

import { fieldOnFace } from "./ops/solar.ts";

test("moving a field to another face keeps its modules; to the ground gives a free-standing field; an unknown face gives nothing", () => {
  const s = setup();
  s.controller.addField();
  const field = s.controller.field!;
  s.controller.patchField({ name: "Süd", wp: 450 });
  const other = field.face.endsWith(":a") ? field.face.replace(":a", ":b") : field.face.replace(":b", ":a");
  const moved = fieldOnFace(s.doc(), s.controller.field!, other);
  assert.equal(moved?.face, other);
  assert.equal(moved?.name, "Süd");
  assert.equal(moved?.wp, 450);
  const ground = fieldOnFace(s.doc(), s.controller.field!, "ground");
  assert.equal(ground?.face, "ground");
  assert.equal(ground?.rows, s.controller.field!.rows);
  assert.equal(fieldOnFace(s.doc(), s.controller.field!, "nowhere"), null);
});
