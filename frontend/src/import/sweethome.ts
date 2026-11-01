// Import from Sweet Home 3D: a .sh3d file is a ZIP with Home.xml (Sweet Home 3D 5.3 and newer). Levels become floors, rooms become
// rooms, doors and windows go onto the nearest room edge, and walls that are not the edge of a room become free walls. Sweet Home 3D
// works in centimetres with y pointing down the plan, which is NextFloor's z, so coordinates only need dividing by 100.

import { emptyBuilding, newFloor, normalizeBuilding, uid, type Building, type FreeWall, type Opening, type Room, type Vec2 } from "../model.ts";
import { zipEntries, zipRead } from "./zip.ts";

export interface ImportReport {
  floors: number;
  rooms: number;
  openings: number;
  walls: number;
  /** Furniture of the file that was not taken over (NextFloor's own models are placed by hand). */
  furniture: number;
}

type Attrs = Record<string, string>;
interface Tag {
  name: string;
  attrs: Attrs;
  points?: Vec2[];
}

const ENTITIES: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" };
const decode = (s: string) => s.replace(/&(#x?[0-9a-f]+|\w+);/gi, (m, e: string) => (e[0] === "#" ? String.fromCodePoint(Number.parseInt(e.slice(e[1] === "x" ? 2 : 1), e[1] === "x" ? 16 : 10)) : (ENTITIES[e] ?? m)));

function attrsOf(text: string): Attrs {
  const out: Attrs = {};
  // Sweet Home 3D writes its attributes in single quotes; double quotes are read as well
  for (const m of text.matchAll(/([\w:.-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) out[m[1]] = decode(m[2] ?? m[3]);
  return out;
}

/** The elements of Home.xml that matter here, with the points of each room. */
export function readHomeXml(xml: string): Tag[] {
  const tags: Tag[] = [];
  let room: Tag | null = null;
  for (const m of xml.matchAll(/<(\/?)(level|room|point|wall|doorOrWindow|pieceOfFurniture)\b([^>]*?)(\/?)>/g)) {
    const [, closing, name, rest, selfClosing] = m;
    if (closing) {
      if (name === "room") room = null;
      continue;
    }
    const attrs = attrsOf(rest);
    if (name === "point") {
      if (room) room.points!.push([Number(attrs.x) / 100, Number(attrs.y) / 100]);
      continue;
    }
    const tag: Tag = { name, attrs, ...(name === "room" ? { points: [] } : {}) };
    tags.push(tag);
    if (name === "room" && !selfClosing) room = tag;
  }
  return tags;
}

const num = (a: Attrs, key: string, fallback: number) => (Number.isFinite(Number(a[key])) && a[key] !== undefined ? Number(a[key]) : fallback);
const r2 = (v: number) => Math.round(v * 1000) / 1000;

/** Distance from p to the segment a-b, and how far along it (metres from a). */
function toSegment(p: Vec2, a: Vec2, b: Vec2): { dist: number; along: number; length: number } {
  const [dx, dz] = [b[0] - a[0], b[1] - a[1]];
  const length = Math.hypot(dx, dz) || 1e-9;
  const t = Math.max(0, Math.min(length, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / length));
  const q: Vec2 = [a[0] + (dx * t) / length, a[1] + (dz * t) / length];
  return { dist: Math.hypot(p[0] - q[0], p[1] - q[1]), along: t, length };
}

function openingType(a: Attrs): Opening["type"] {
  const text = `${a.name ?? ""} ${a.catalogId ?? ""}`.toLowerCase();
  if (/garage|sectional|rolltor/.test(text)) return "garage";
  if (/door|tür|tuer|porte|puerta|deur|haustür/.test(text) && !/window|fenster/.test(text)) return "door";
  return "window";
}

interface WallLine {
  a: Vec2;
  b: Vec2;
  thickness: number;
}

/**
 * Sweet Home 3D draws a room along the inner faces of its walls, NextFloor along the walls' middle (neighbours share one edge).
 * Each room edge that runs along a wall moves out onto that wall's centre line; the corners are where the moved edges meet.
 */
export function roomOnWallLines(points: readonly Vec2[], walls: readonly WallLine[]): Vec2[] {
  const n = points.length;
  const lines = points.map((p, i) => {
    const q = points[(i + 1) % n];
    const [dx, dz] = [q[0] - p[0], q[1] - p[1]];
    const len = Math.hypot(dx, dz) || 1e-9;
    const dir: Vec2 = [dx / len, dz / len];
    const mid: Vec2 = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
    let shift: Vec2 = [0, 0];
    for (const w of walls) {
      const [wx, wz] = [w.b[0] - w.a[0], w.b[1] - w.a[1]];
      const wl = Math.hypot(wx, wz) || 1e-9;
      if (Math.abs((dir[0] * wz - dir[1] * wx) / wl) > 0.05) continue; // not parallel
      // how far the wall's centre line lies from this edge, across it, and whether the wall runs past the edge's middle
      const across = ((w.a[0] - mid[0]) * -dir[1] + (w.a[1] - mid[1]) * dir[0]);
      const along = ((mid[0] - w.a[0]) * wx + (mid[1] - w.a[1]) * wz) / wl;
      if (Math.abs(across) > w.thickness / 2 + 0.06 || along < -0.05 || along > wl + 0.05) continue;
      shift = [-dir[1] * across, dir[0] * across];
      break;
    }
    return { p: [p[0] + shift[0], p[1] + shift[1]] as Vec2, dir };
  });
  return lines.map((cur, i) => {
    const prev = lines[(i - 1 + n) % n];
    // the corner: where the previous edge's line meets this one's
    const cross = prev.dir[0] * cur.dir[1] - prev.dir[1] * cur.dir[0];
    if (Math.abs(cross) < 1e-6) return cur.p;
    const t = ((cur.p[0] - prev.p[0]) * cur.dir[1] - (cur.p[1] - prev.p[1]) * cur.dir[0]) / cross;
    return [prev.p[0] + prev.dir[0] * t, prev.p[1] + prev.dir[1] * t] as Vec2;
  });
}

/** A NextFloor plan from the elements of Home.xml. */
export function homeToBuilding(tags: readonly Tag[]): { building: Building; report: ImportReport } {
  const b = emptyBuilding();
  const report: ImportReport = { floors: 0, rooms: 0, openings: 0, walls: 0, furniture: 0 };
  const levels = tags.filter((t) => t.name === "level");
  const levelIds = levels.length ? levels.map((l) => l.attrs.id ?? "") : [""];
  const walls = tags.filter((t) => t.name === "wall");
  const defaultHeight = walls.length ? Math.max(...walls.map((w) => num(w.attrs, "height", 250))) / 100 : 2.5;
  const sorted = levels.length ? [...levels].sort((p, q) => num(p.attrs, "elevation", 0) - num(q.attrs, "elevation", 0) || num(p.attrs, "elevationIndex", 0) - num(q.attrs, "elevationIndex", 0)) : [{ name: "level", attrs: { id: "" } } as Tag];
  sorted.forEach((level, index) => {
    const id = level.attrs.id ?? "";
    const onLevel = (t: Tag) => (levels.length ? (t.attrs.level ?? levelIds[0]) === id : true);
    const floor = newFloor(uid("floor"), level.attrs.name || (index === 0 ? "Erdgeschoss" : `Etage ${index + 1}`), r2(num(level.attrs, "elevation", 0) / 100));
    floor.height = r2(num(level.attrs, "height", defaultHeight * 100) / 100);

    const wallLines: WallLine[] = walls.filter(onLevel).map((w) => ({ a: [num(w.attrs, "xStart", 0) / 100, num(w.attrs, "yStart", 0) / 100], b: [num(w.attrs, "xEnd", 0) / 100, num(w.attrs, "yEnd", 0) / 100], thickness: num(w.attrs, "thickness", 10) / 100 }));
    const rooms: Room[] = tags
      .filter((t) => t.name === "room" && onLevel(t) && (t.points?.length ?? 0) >= 3)
      .map((t, k) => ({ id: uid("room"), name: t.attrs.name || `Raum ${k + 1}`, area_id: null, points: roomOnWallLines(t.points!, wallLines).map(([x, z]) => [r2(x), r2(z)] as Vec2), floor_material: "wood", panel: [] }));
    floor.rooms = rooms;

    // doors and windows: onto the nearest room edge
    for (const t of tags.filter((x) => x.name === "doorOrWindow" && onLevel(x))) {
      const centre: Vec2 = [num(t.attrs, "x", 0) / 100, num(t.attrs, "y", 0) / 100];
      const reach = Math.max(0.6, num(t.attrs, "depth", 30) / 100 + 0.3);
      let best: { room: Room; edge: number; along: number; length: number; dist: number } | null = null;
      for (const room of rooms) {
        room.points.forEach((a, edge) => {
          const hit = toSegment(centre, a, room.points[(edge + 1) % room.points.length]);
          if (hit.dist <= reach && (!best || hit.dist < best.dist)) best = { room, edge, ...hit };
        });
      }
      if (!best) continue;
      const { room, edge, along, length } = best as { room: Room; edge: number; along: number; length: number };
      const type = openingType(t.attrs);
      const width = Math.min(length, Math.max(0.3, num(t.attrs, "width", 90) / 100));
      floor.openings.push({
        id: uid("op"),
        room_id: room.id,
        edge,
        offset: r2(Math.min(length - width / 2, Math.max(width / 2, along))),
        width: r2(width),
        type,
        sill: type === "window" ? r2(num(t.attrs, "elevation", 90) / 100) : 0,
        height: r2(num(t.attrs, "height", type === "window" ? 130 : 205) / 100),
        hinge: "left",
        leaves: width > 1.4 ? 2 : 1,
        swing: "in",
        cover: null,
        contact: null,
        contact2: null,
        tilt: null,
      } as Opening);
    }

    // walls that are not the edge of a room stand on their own
    const free: FreeWall[] = [];
    for (const t of walls.filter(onLevel)) {
      const a: Vec2 = [num(t.attrs, "xStart", 0) / 100, num(t.attrs, "yStart", 0) / 100];
      const e: Vec2 = [num(t.attrs, "xEnd", 0) / 100, num(t.attrs, "yEnd", 0) / 100];
      if (Math.hypot(e[0] - a[0], e[1] - a[1]) < 0.1) continue;
      const tolerance = Math.max(0.15, num(t.attrs, "thickness", 10) / 100);
      // a wall that runs along room edges (also one long wall along several rooms) is already built by those rooms
      const nearEdge = (p: Vec2) => rooms.some((room) => room.points.some((r, i) => toSegment(p, r, room.points[(i + 1) % room.points.length]).dist < tolerance));
      // only the stretches that run along no room edge become free walls: a wall that is a room edge for part of its
      // length would otherwise stand twice there, once as the room's wall and once on its own (#40)
      const length = Math.hypot(e[0] - a[0], e[1] - a[1]);
      const samples = Math.max(12, Math.ceil(length / 0.1));
      const at = (i: number): Vec2 => [a[0] + ((e[0] - a[0]) * i) / samples, a[1] + ((e[1] - a[1]) * i) / samples];
      const open = Array.from({ length: samples + 1 }, (_, i) => !nearEdge(at(i)));
      for (let i = 0; i <= samples; ) {
        if (!open[i]) {
          i++;
          continue;
        }
        let j = i;
        while (j + 1 <= samples && open[j + 1]) j++;
        // a stretch reaches to the neighbouring covered sample, where the room's wall takes over
        const [from, to] = [at(Math.max(0, i - 1)), at(Math.min(samples, j + 1))];
        if (Math.hypot(to[0] - from[0], to[1] - from[1]) >= 0.3)
          free.push({ id: uid("wall"), a: [r2(from[0]), r2(from[1])], b: [r2(to[0]), r2(to[1])], thickness: r2(num(t.attrs, "thickness", 10) / 100), height: t.attrs.height ? r2(num(t.attrs, "height", 250) / 100) : null });
        i = j + 1;
      }
    }
    floor.walls = free;

    report.rooms += rooms.length;
    report.openings += floor.openings.length;
    report.walls += free.length;
    if (rooms.length || free.length) b.floors.push(floor);
  });
  report.floors = b.floors.length;
  report.furniture = tags.filter((t) => t.name === "pieceOfFurniture").length;
  return { building: normalizeBuilding(b), report };
}

/** Reads a Sweet Home 3D file (.sh3d) into a plan. */
export async function importSweetHome(data: Uint8Array): Promise<{ building: Building; report: ImportReport }> {
  const entry = zipEntries(data).find((e) => e.name === "Home.xml");
  if (!entry) throw new Error("sh3d_no_xml");
  const xml = new TextDecoder().decode(await zipRead(data, entry));
  const result = homeToBuilding(readHomeXml(xml));
  if (result.report.rooms === 0 && result.report.walls === 0) throw new Error("sh3d_empty");
  return result;
}
