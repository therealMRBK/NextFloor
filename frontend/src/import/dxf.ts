// Import from DXF (AutoCAD, LibreCAD, QCAD, most CAD exports of a floor plan): closed polylines become rooms, lines and open polylines
// become free walls, all on one floor. DXF's y points up the drawing, NextFloor's z down the plan, so y is mirrored; the drawing's
// unit ($INSUNITS) turns into metres (millimetres when it says nothing and the drawing is large).

import { emptyBuilding, newFloor, normalizeBuilding, uid, type Building, type FreeWall, type Room, type Vec2 } from "../model.ts";
import type { ImportReport } from "./sweethome.ts";

/** The group code / value pairs of a DXF text. */
function pairs(text: string): [number, string][] {
  const lines = text.split(/\r?\n/);
  const out: [number, string][] = [];
  for (let i = 0; i + 1 < lines.length; i += 2) {
    const code = Number(lines[i].trim());
    if (Number.isFinite(code)) out.push([code, lines[i + 1].trim()]);
  }
  return out;
}

/** Metres per drawing unit from $INSUNITS (1 inch, 2 foot, 4 mm, 5 cm, 6 m); null when it does not say. */
function unitOf(p: [number, string][]): number | null {
  const at = p.findIndex(([c, v]) => c === 9 && v === "$INSUNITS");
  const value = at >= 0 ? Number(p[at + 1]?.[1]) : NaN;
  return ({ 1: 0.0254, 2: 0.3048, 4: 0.001, 5: 0.01, 6: 1 } as Record<number, number>)[value] ?? null;
}

interface Shape {
  points: Vec2[];
  closed: boolean;
}

/** The lines and polylines of the ENTITIES section. */
export function dxfShapes(text: string): { shapes: Shape[]; unit: number | null } {
  const p = pairs(text);
  const unit = unitOf(p);
  const start = p.findIndex(([c, v], i) => c === 2 && v === "ENTITIES" && p[i - 1]?.[1] === "SECTION");
  const shapes: Shape[] = [];
  if (start < 0) return { shapes, unit };
  let i = start + 1;
  while (i < p.length && !(p[i][0] === 0 && p[i][1] === "ENDSEC")) {
    const [code, value] = p[i];
    if (code !== 0) {
      i++;
      continue;
    }
    // the entity's own pairs, up to the next entity
    let j = i + 1;
    while (j < p.length && p[j][0] !== 0) j++;
    const body = p.slice(i + 1, j);
    if (value === "LINE") {
      const get = (c: number) => Number(body.find(([k]) => k === c)?.[1] ?? NaN);
      const pts: Vec2[] = [[get(10), get(20)], [get(11), get(21)]];
      if (pts.every(([x, y]) => Number.isFinite(x) && Number.isFinite(y))) shapes.push({ points: pts, closed: false });
    } else if (value === "LWPOLYLINE") {
      const xs = body.filter(([k]) => k === 10).map(([, v]) => Number(v));
      const ys = body.filter(([k]) => k === 20).map(([, v]) => Number(v));
      const flags = Number(body.find(([k]) => k === 70)?.[1] ?? 0);
      const pts = xs.map((x, k) => [x, ys[k]] as Vec2).filter(([x, y]) => Number.isFinite(x) && Number.isFinite(y));
      if (pts.length >= 2) shapes.push({ points: pts, closed: (flags & 1) === 1 });
    }
    i = j;
  }
  return { shapes, unit };
}

const r3 = (v: number) => Math.round(v * 1000) / 1000;

/** A building from a DXF drawing: one floor, closed polylines as rooms, everything else as free walls. */
export function importDxf(text: string): { building: Building; report: ImportReport } {
  const { shapes, unit: given } = dxfShapes(text);
  if (!shapes.length) throw new Error("dxf_empty");
  const all = shapes.flatMap((s) => s.points);
  const span = Math.max(Math.max(...all.map((p) => p[0])) - Math.min(...all.map((p) => p[0])), Math.max(...all.map((p) => p[1])) - Math.min(...all.map((p) => p[1])));
  // without a unit: a house drawn in millimetres spans thousands, in centimetres hundreds, in metres a few dozen
  const unit = given ?? (span > 2000 ? 0.001 : span > 200 ? 0.01 : 1);
  const x0 = Math.min(...all.map((p) => p[0]));
  const y1 = Math.max(...all.map((p) => p[1]));
  const at = ([x, y]: Vec2): Vec2 => [r3((x - x0) * unit), r3((y1 - y) * unit)];
  const floor = newFloor(uid("floor"), "Erdgeschoss", 0);
  const rooms: Room[] = [];
  const walls: FreeWall[] = [];
  for (const s of shapes) {
    const pts = s.points.map(at);
    if (s.closed && pts.length >= 3) rooms.push({ id: uid("room"), name: `Raum ${rooms.length + 1}`, area_id: null, points: pts, floor_material: "wood", panel: [] });
    else for (let k = 0; k + 1 < pts.length; k++) if (Math.hypot(pts[k + 1][0] - pts[k][0], pts[k + 1][1] - pts[k][1]) > 0.05) walls.push({ id: uid("wall"), a: pts[k], b: pts[k + 1] });
  }
  floor.rooms = rooms;
  floor.walls = walls;
  const b = emptyBuilding();
  b.floors = [floor];
  return { building: normalizeBuilding(b), report: { floors: 1, rooms: rooms.length, openings: 0, walls: walls.length, furniture: 0 } };
}
