import assert from "node:assert/strict";
import { test } from "node:test";
import { deflateRawSync } from "node:zlib";
import { homeToBuilding, importSweetHome, readHomeXml, roomOnWallLines } from "./sweethome.ts";
import { zipEntries } from "./zip.ts";

/** A ZIP file with one deflated entry, built by hand like Sweet Home 3D writes it. */
function zipOf(name: string, text: string): Uint8Array {
  const data = Buffer.from(text, "utf8");
  const packed = deflateRawSync(data);
  const nameBytes = Buffer.from(name);
  const local = Buffer.alloc(30);
  local.writeUInt32LE(0x04034b50, 0);
  local.writeUInt16LE(8, 8);
  local.writeUInt32LE(packed.length, 18);
  local.writeUInt32LE(data.length, 22);
  local.writeUInt16LE(nameBytes.length, 26);
  const central = Buffer.alloc(46);
  central.writeUInt32LE(0x02014b50, 0);
  central.writeUInt16LE(8, 10);
  central.writeUInt32LE(packed.length, 20);
  central.writeUInt32LE(data.length, 24);
  central.writeUInt16LE(nameBytes.length, 28);
  central.writeUInt32LE(0, 42);
  const centralStart = local.length + nameBytes.length + packed.length;
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(1, 8);
  end.writeUInt16LE(1, 10);
  end.writeUInt32LE(central.length + nameBytes.length, 12);
  end.writeUInt32LE(centralStart, 16);
  return new Uint8Array(Buffer.concat([local, nameBytes, packed, central, nameBytes, end]));
}

const HOME = `<?xml version="1.0"?>
<home version="7200" wallHeight="250">
  <level id="l0" name="Erdgeschoss" elevation="0" floorThickness="12" height="250" elevationIndex="0"/>
  <level id="l1" name="Obergeschoss" elevation="262" floorThickness="12" height="240" elevationIndex="0"/>
  <room level="l0" name="Wohnen &amp; Essen"><point x="0" y="0"/><point x="500" y="0"/><point x="500" y="400"/><point x="0" y="400"/></room>
  <room level="l1" name="Bad"><point x="0" y="0"/><point x="300" y="0"/><point x="300" y="250"/></room>
  <wall id="w0" level="l0" xStart="0" yStart="0" xEnd="500" yEnd="0" height="250" thickness="24"/>
  <wall id="w1" level="l0" xStart="250" yStart="100" xEnd="250" yEnd="300" height="200" thickness="10"/>
  <doorOrWindow level="l0" name="Haustür" catalogId="eTeks#frontDoor" x="250" y="400" elevation="0" width="100" depth="24" height="210" angle="0"/>
  <doorOrWindow level="l0" name="Window" x="5" y="200" elevation="95" width="120" depth="20" height="130" angle="1.5708"/>
  <pieceOfFurniture level="l0" name="Sofa" x="200" y="200" width="200" depth="90" height="80"/>
</home>`;

test("the ZIP reader finds the entries of a .sh3d file", () => {
  assert.deepEqual(zipEntries(zipOf("Home.xml", HOME)).map((e) => e.name), ["Home.xml"]);
  assert.throws(() => zipEntries(new Uint8Array(40)), /not_zip/);
});

test("attributes in single quotes, as Sweet Home 3D writes them, are read too", () => {
  const [room] = readHomeXml("<home><room name='Küche'><point x='100' y='50'/><point x='300' y='50'/><point x='300' y='250'/></room></home>");
  assert.deepEqual(room.points, [[1, 0.5], [3, 0.5], [3, 2.5]]);
});

test("Home.xml is read with its rooms' points and the entities in names", () => {
  const room = readHomeXml(HOME).find((t) => t.name === "room")!;
  assert.equal(room.attrs.name, "Wohnen & Essen");
  assert.deepEqual(room.points, [[0, 0], [5, 0], [5, 4], [0, 4]]);
});

test("a Sweet Home 3D plan becomes floors, rooms, doors, windows and free walls", async () => {
  const { building, report } = await importSweetHome(zipOf("Home.xml", HOME));
  assert.deepEqual(report, { floors: 2, rooms: 2, openings: 2, walls: 1, furniture: 1 });
  const [ground, upper] = building.floors;
  assert.equal(upper.elevation, 2.62);
  assert.equal(upper.height, 2.4);
  const [door, window] = ground.openings;
  assert.equal(door.type, "door");
  assert.equal(door.edge, 2, "the front door sits on the edge from (5,4) to (0,4)");
  assert.equal(door.offset, 2.5);
  assert.equal(window.type, "window");
  assert.equal(window.edge, 3);
  assert.equal(window.sill, 0.95);
  assert.deepEqual(ground.walls?.map((w) => [w.a, w.b, w.height]), [[[2.5, 1], [2.5, 3], 2]], "the wall along the room's edge is left to the room");
});

test("a file without Home.xml or without rooms is refused", async () => {
  await assert.rejects(importSweetHome(zipOf("Other.txt", "x")), /sh3d_no_xml/);
  await assert.rejects(importSweetHome(zipOf("Home.xml", "<home/>")), /sh3d_empty/);
});

test("a room drawn along the inner wall faces moves out onto the walls' centre lines", () => {
  // a 4 x 3 room inside 20 cm walls whose centre lines run 10 cm further out
  const walls = [
    { a: [-0.1, -0.1], b: [4.1, -0.1], thickness: 0.2 },
    { a: [4.1, -0.1], b: [4.1, 3.1], thickness: 0.2 },
    { a: [4.1, 3.1], b: [-0.1, 3.1], thickness: 0.2 },
  ] as { a: [number, number]; b: [number, number]; thickness: number }[];
  const moved = roomOnWallLines([[0, 0], [4, 0], [4, 3], [0, 3]], walls).map(([x, z]) => [Math.round(x * 100) / 100, Math.round(z * 100) / 100]);
  assert.deepEqual(moved, [[0, -0.1], [4.1, -0.1], [4.1, 3.1], [0, 3.1]], "three edges move, the edge without a wall stays");
});

test("a wall that is a room edge for part of its length becomes a free wall only beyond the room (#40)", () => {
  const tags = readHomeXml(`<home>
  <room name="Wohnen"><point x="0" y="0"/><point x="400" y="0"/><point x="400" y="300"/><point x="0" y="300"/></room>
  <wall xStart="0" yStart="0" xEnd="1000" yEnd="0" height="250" thickness="20"/>
</home>`);
  const { building } = homeToBuilding(tags);
  const walls = building.floors[0].walls ?? [];
  assert.equal(walls.length, 1, "one free wall, past the room");
  const [w] = walls;
  assert.ok(Math.min(w.a[0], w.b[0]) > 3.5 && Math.min(w.a[0], w.b[0]) < 4.4, `it starts at the room's corner, not at 0 (${w.a[0]})`);
  assert.equal(Math.max(w.a[0], w.b[0]), 10);
});
