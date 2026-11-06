import assert from "node:assert/strict";
import { test } from "node:test";
import { box, floorWith } from "../../entities/fixtures.ts";
import type { Building, Floor } from "../../model.ts";
import { BackgroundTool, type BackgroundDeps } from "./background-tool.ts";

class TestTool extends BackgroundTool {
  protected override async aspectOf(): Promise<number> {
    return 0.5;
  }
}

function setup(floorExtra: Partial<Floor> = {}, tool = "select") {
  let floor = floorWith([box("r", 1, 2, 7, 6)], floorExtra);
  const doc = { floors: [floor] } as unknown as Building;
  const stored: string[] = [];
  const calls = { refresh: 0, selectTool: 0 };
  const deps: BackgroundDeps = {
    host: {
      hass: {} as never,
      get doc() {
        return doc;
      },
      get floor() {
        return floor;
      },
      admin: true,
      t: (key) => key,
      change: (mutate) => {
        const copy = structuredClone(floor);
        mutate(doc, copy);
        floor = copy;
        doc.floors = [copy];
      },
      pickPoint: () => {},
    replace: () => undefined,
    },
    refresh: () => calls.refresh++,
    api: { fetchImage: async (_h, id) => `data:${id}`, storeImage: async (_h, id) => void stored.push(id) },
    readPicture: async () => ({ data: "data:new", aspect: 0.5 }),
    useSelectTool: () => calls.selectTool++,
    currentTool: () => tool,
  };
  return { tool: new TestTool(deps), floor: () => floor, stored, calls };
}

test("a chosen picture is stored and becomes the background, as wide as the rooms", async () => {
  const s = setup();
  await s.tool.upload({} as File);
  const bg = s.floor().background!;
  assert.deepEqual([bg.x, bg.z, bg.width, bg.opacity], [1, 2, 6, 0.5]);
  assert.deepEqual(s.stored, [bg.image_id]);
  assert.equal(s.tool.picture(bg.image_id)?.aspect, 0.5);
});

test("on a floor without rooms the picture is 12 m wide at the origin, and no file does nothing", async () => {
  const s = setup();
  s.floor().rooms = [];
  await s.tool.upload({} as File);
  assert.deepEqual([s.floor().background!.x, s.floor().background!.width], [0, 12]);
  const none = setup();
  await none.tool.upload(undefined);
  assert.equal(none.floor().background ?? null, null);
});

test("stored pictures load once, and a failing load leaves the background empty", async () => {
  const s = setup();
  s.tool.ensureLoaded("a");
  s.tool.ensureLoaded("a");
  await new Promise((r) => setTimeout(r, 0));
  assert.equal(s.tool.picture("a")?.url, "data:a");
  assert.equal(s.tool.picture("missing"), undefined);
  assert.equal(s.tool.picture(undefined), undefined);
});

test("the handles show only with the select tool and 'move and scale' on, on a floor with a picture", () => {
  const withPicture = { background: { image_id: "a", x: 0, z: 0, width: 4, opacity: 1 } };
  const s = setup(withPicture);
  assert.equal(s.tool.handlesShown, false);
  s.tool.toggleEdit();
  assert.equal(s.tool.handlesShown, true);
  assert.equal(s.calls.selectTool, 1);
  assert.equal(setup(withPicture, "rect").tool.handlesShown, false);
  const none = setup();
  none.tool.edit = true;
  assert.equal(none.tool.handlesShown, false);
});

test("straighten and measure modes exclude each other and 'move and scale'", () => {
  const s = setup();
  s.tool.edit = true;
  s.tool.toggleLevel();
  assert.deepEqual([s.tool.level, s.tool.ruler, s.tool.edit], [[], null, false]);
  s.tool.toggleRuler();
  assert.deepEqual([s.tool.level, s.tool.ruler], [null, []]);
  s.tool.toggleRuler();
  assert.equal(s.tool.ruler, null);
});

test("two taps straighten the picture", async () => {
  const s = setup({ background: { image_id: "a", x: 0, z: 0, width: 4, opacity: 1 } });
  s.tool.ensureLoaded("a");
  await new Promise((r) => setTimeout(r, 0));
  s.tool.toggleLevel();
  s.tool.tapLevel([0, 0]);
  assert.deepEqual(s.tool.level, [[0, 0]]);
  s.tool.tapLevel([10, 1]);
  assert.equal(s.tool.level, null);
  assert.ok(Math.abs(s.floor().background!.rotation! + 5.71) < 0.01);
});

test("two taps and a typed length scale the picture, and then the mode ends", async () => {
  const s = setup({ background: { image_id: "a", x: 0, z: 0, width: 4, opacity: 1 } });
  s.tool.ensureLoaded("a");
  await new Promise((r) => setTimeout(r, 0));
  s.tool.toggleRuler();
  s.tool.tapRuler([0, 0]);
  s.tool.tapRuler([2, 0]);
  s.tool.tapRuler([5, 5]);
  assert.equal(s.tool.ruler!.length, 2, "a third tap is ignored");
  s.tool.rulerLength = 6;
  s.tool.applyRuler();
  assert.equal(s.floor().background!.width, 12);
  assert.deepEqual([s.tool.ruler, s.tool.rulerLength], [null, 0]);
});

test("measuring without a typed length changes nothing and keeps the mode", async () => {
  const s = setup({ background: { image_id: "a", x: 0, z: 0, width: 4, opacity: 1 } });
  s.tool.ensureLoaded("a");
  await new Promise((r) => setTimeout(r, 0));
  s.tool.toggleRuler();
  s.tool.tapRuler([0, 0]);
  s.tool.tapRuler([2, 0]);
  s.tool.applyRuler();
  assert.equal(s.floor().background!.width, 4);
  assert.equal(s.tool.ruler!.length, 2);
});
