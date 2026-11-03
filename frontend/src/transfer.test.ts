import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Building } from "./model.ts";
import { exportFile, EXPORT_FORMAT, parseExport, shareViewHtml, storedImageIds, withoutEntities } from "./transfer.ts";

function linked(): Building {
  const b = emptyBuilding();
  const floor = newFloor("g", "Ground", 0);
  floor.rooms = [{ id: "r", name: "Room", area_id: "living", points: [[0, 0], [4, 0], [4, 3], [0, 3]], floor_material: "wood" }];
  floor.placements = [{ entity_id: "light.a", x: 1, z: 1, y: null, mount: null }];
  floor.furniture = [{ id: "tv", type: "tv", x: 1, z: 1, rotation: 0, w: 1, d: 0.1, h: 0.6, variant: null, entity: "media_player.tv", power: "sensor.tv_power", pictures: [{ entity: "", state: "", image: "abc123" }, { entity: "", state: "", image: "https://example.org/a.png" }, { entity: "", state: "", image: "camera:front" }] }];
  floor.background = { image_id: "bg1", x: 0, z: 0, width: 10, rotation: 0, opacity: 0.5 } as never;
  b.floors = [floor];
  b.presence = [{ person: "person.a", sensor: "sensor.a" }];
  b.energy = { ...b.energy, grid: "sensor.grid", solar: "sensor.solar" };
  return b;
}

test("a shareable copy has no entity, area, person or background left", () => {
  const original = linked();
  const copy = withoutEntities(original);
  assert.equal(copy.floors[0].placements.length, 0);
  assert.equal(copy.floors[0].rooms[0].area_id, null);
  assert.equal(copy.floors[0].furniture[0].entity, null);
  assert.equal(copy.floors[0].furniture[0].power, null);
  assert.equal(copy.floors[0].background, null);
  assert.deepEqual([copy.presence, copy.energy.grid, copy.energy.solar], [[], null, null]);
  // the original stays as it was
  assert.equal(original.floors[0].rooms[0].area_id, "living");
  assert.equal(original.energy.grid, "sensor.grid");
});

test("exportFile wraps the plan and shareable or not decides about the links", () => {
  const full = exportFile(linked(), false);
  assert.equal(full.format, EXPORT_FORMAT);
  assert.equal(full.building.floors[0].placements.length, 1);
  assert.equal(exportFile(linked(), true).building.floors[0].placements.length, 0);
  assert.ok(!Number.isNaN(Date.parse(full.exported_at)));
});

test("a written file reads back, with or without the wrapper", () => {
  const wrapped = parseExport(JSON.stringify(exportFile(linked(), false)));
  assert.equal(wrapped.floors[0].name, "Ground");
  assert.equal(wrapped.floors[0].background, null, "pictures do not travel");
  assert.equal(parseExport(JSON.stringify(linked())).floors.length, 1);
});

test("garbage is told apart: not JSON versus JSON that is no plan", () => {
  assert.throws(() => parseExport("{oops"), /not_json/);
  assert.throws(() => parseExport("[1,2]"), /not_plan/);
  assert.throws(() => parseExport(JSON.stringify({ version: 2, floors: [], settings: {} })), /not_plan/);
  assert.throws(() => parseExport("null"), /not_plan/);
});

test("stored picture ids come from backgrounds and screens, once, never URLs or cameras", () => {
  const b = linked();
  b.floors[0].furniture[0].pictures!.push({ entity: "", state: "", image: "abc123" });
  assert.deepEqual(storedImageIds(b).sort(), ["abc123", "bg1"]);
});

test("a hand- or AI-written plan without ids gets one per piece, so its doors and windows can be selected", () => {
  const plan = {
    floors: [
      {
        name: "Ground",
        elevation: 0,
        height: 2.6,
        rooms: [{ name: "Garage", points: [[0, 0], [6, 0], [6, 4], [0, 4]] }],
        openings: [
          { room_id: "r1", edge: 0, offset: 2, type: "door" },
          { id: "o", room_id: "r1", edge: 1, offset: 1, type: "window", width: 1 },
          { id: "o", room_id: "r1", edge: 2, offset: 3, type: "garage_door" },
        ],
        furniture: [],
        placements: [],
      },
    ],
  };
  const floor = parseExport(JSON.stringify(plan)).floors[0];
  const ids = floor.openings.map((o) => o.id);
  assert.equal(new Set(ids).size, 3);
  assert.ok(ids.every((id) => typeof id === "string" && id.length > 0));
  assert.equal(floor.openings[1].id, "o", "the first of a repeated id keeps it");
  assert.ok(floor.rooms[0].id);
  assert.ok(floor.openings[0].width > 0 && floor.openings[0].height > 0);
  assert.equal(floor.openings[2].type, "door", "an unknown kind becomes a door the form can change");
});

test("the smallest plan in docs/plan-format.md imports", async () => {
  const { readFileSync } = await import("node:fs");
  const doc = readFileSync(new URL("../../docs/plan-format.md", import.meta.url), "utf8");
  const json = doc.split("```json\n")[1].split("```")[0];
  const b = parseExport(json);
  assert.equal(b.floors[0].rooms.length, 2);
  assert.deepEqual(b.floors[0].openings.map((o) => o.type), ["door", "window", "garage"]);
  assert.equal(b.floors[0].openings[2].width, 2.5);
  assert.equal(b.floors[0].rooms[0].floor_material, "wood");
});

test("a shared view embeds the plan without entities and only the packs it uses", () => {
  const b = emptyBuilding();
  b.floors = [{ ...newFloor("g", "EG </script>", 0), placements: [{ entity_id: "light.x", x: 1, z: 1, y: null, mount: null }], furniture: [{ id: "f", type: "pack:own_studio:shelf", x: 1, z: 1, rotation: 0, w: 1, d: 1, h: 1, variant: null }] }];
  const own = { id: "own_studio", name: "Own", publisher: "Me", items: [] };
  const other = { id: "other", name: "Other", publisher: "Me", items: [] };
  const html = shareViewHtml(b, [own, other, { ...own, id: "nextfloor.ikea", builtin: true }], "Our home", "needs js", "https://example.org/preview/?shared");
  const json = html.match(/<script id="nf-plan" type="application\/json">(.*?)<\/script>/s)![1];
  assert.ok(!json.includes("</script>"));
  const data = JSON.parse(json);
  assert.equal(data.building.floors[0].name, "EG </script>");
  assert.equal(data.building.floors[0].placements.length, 0);
  assert.deepEqual(data.packs.map((p: { id: string }) => p.id), ["own_studio"]);
  assert.ok(html.includes('src="https://example.org/preview/?shared"'));
});
