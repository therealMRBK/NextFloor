// Import from IFC (the BIM exchange format of Revit, ArchiCAD, Allplan, Vectorworks …): every storey becomes a floor at its elevation,
// every space (IfcSpace) a room with its name and footprint. Only the plain parts of IFC are read – rectangle and polyline profiles of
// an extruded solid, local placements with a turn about the vertical – which is what common exports write for spaces. Walls are not
// taken over: NextFloor draws its own from the rooms. IFC's y points north up the drawing, NextFloor's z down the plan, so y is mirrored.

import { emptyBuilding, newFloor, normalizeBuilding, uid, type Building, type Floor, type Vec2 } from "../model.ts";
import type { ImportReport } from "./sweethome.ts";

type Value = string | number | null | Ref | Value[];
interface Ref {
  ref: number;
}
interface Entity {
  type: string;
  args: Value[];
}

const isRef = (v: Value | undefined): v is Ref => typeof v === "object" && v !== null && !Array.isArray(v) && "ref" in v;

/** The arguments of one entity: numbers, 'strings', #refs, $ (null), enums (.X.) and nested lists. */
function parseArgs(text: string): Value[] {
  let i = 0;
  const value = (): Value => {
    while (text[i] === " ") i++;
    const c = text[i];
    if (c === "(") {
      i++;
      const list: Value[] = [];
      while (i < text.length && text[i] !== ")") {
        list.push(value());
        while (text[i] === " ") i++;
        if (text[i] === ",") i++;
      }
      i++;
      return list;
    }
    if (c === "'") {
      let s = "";
      i++;
      while (i < text.length) {
        if (text[i] === "'" && text[i + 1] === "'") {
          s += "'";
          i += 2;
        } else if (text[i] === "'") {
          i++;
          break;
        } else s += text[i++];
      }
      return decodeText(s);
    }
    if (c === "#") {
      const m = /^#(\d+)/.exec(text.slice(i))!;
      i += m[0].length;
      return { ref: Number(m[1]) };
    }
    if (c === "$" || c === "*") {
      i++;
      return null;
    }
    // a number, an enum (.T.), or a typed value like IFCLABEL('x')
    const m = /^[^,()]+/.exec(text.slice(i));
    const raw = m ? m[0].trim() : "";
    i += m ? m[0].length : 1;
    if (text[i] === "(") return value();
    const n = Number(raw);
    return Number.isFinite(n) && raw !== "" ? n : raw;
  };
  const out: Value[] = [];
  while (i < text.length) {
    out.push(value());
    while (text[i] === " ") i++;
    if (text[i] === ",") i++;
    else break;
  }
  return out;
}

/** IFC's escapes for letters beyond ASCII: \X2\00E4\X0\ (UTF-16 hex) and \S\ä (the upper half of Latin-1). */
function decodeText(s: string): string {
  return s
    .replace(/\\X2\\([0-9A-Fa-f]+)\\X0\\/g, (_, hex: string) => String.fromCharCode(...(hex.match(/.{4}/g) ?? []).map((h) => parseInt(h, 16))))
    .replace(/\\S\\(.)/g, (_, ch: string) => String.fromCharCode(ch.charCodeAt(0) + 128));
}

/** The entities of the DATA section by their number. */
export function ifcEntities(text: string): Map<number, Entity> {
  const map = new Map<number, Entity>();
  const data = text.slice(Math.max(0, text.indexOf("DATA;")));
  for (const m of data.matchAll(/#(\d+)\s*=\s*([A-Z0-9_]+)\s*\(([\s\S]*?)\)\s*;(?=\s*(?:#|ENDSEC))/g)) map.set(Number(m[1]), { type: m[2], args: parseArgs(m[3]) });
  return map;
}

type Transform = { x: number; y: number; z: number; c: number; s: number };
const IDENTITY: Transform = { x: 0, y: 0, z: 0, c: 1, s: 0 };
/** `inner` placed inside `outer`: turned and moved by it. */
const compose = (outer: Transform, inner: Transform): Transform => ({
  x: outer.x + outer.c * inner.x - outer.s * inner.y,
  y: outer.y + outer.s * inner.x + outer.c * inner.y,
  z: outer.z + inner.z,
  c: outer.c * inner.c - outer.s * inner.s,
  s: outer.s * inner.c + outer.c * inner.s,
});

export function importIfc(text: string): { building: Building; report: ImportReport } {
  const all = ifcEntities(text);
  if (!all.size) throw new Error("ifc_empty");
  const get = (v: Value | undefined): Entity | undefined => (isRef(v) ? all.get(v.ref) : undefined);
  const num = (v: Value | undefined): number => (typeof v === "number" ? v : NaN);
  const point = (v: Value | undefined): number[] => ((get(v)?.args[0] as Value[] | undefined) ?? []).map((c) => num(c));

  // the length unit: metres, or millimetres (PREFIX .MILLI.) – the most common export
  const lengthUnit = [...all.values()].find((e) => e.type === "IFCSIUNIT" && e.args[1] === ".LENGTHUNIT.");
  const unit = lengthUnit ? ({ ".MILLI.": 0.001, ".CENTI.": 0.01, ".DECI.": 0.1 } as Record<string, number>)[String(lengthUnit.args[2])] ?? 1 : 1;

  /** An IfcAxis2Placement2D/3D as a transform (its x axis gives the turn). */
  const axis = (v: Value | undefined): Transform => {
    const e = get(v);
    if (!e) return IDENTITY;
    const [x = 0, y = 0, z = 0] = point(e.args[0]);
    const dir = get(e.type === "IFCAXIS2PLACEMENT3D" ? e.args[2] : e.args[1]);
    const [dx = 1, dy = 0] = ((dir?.args[0] as Value[] | undefined) ?? []).map((c) => num(c));
    const len = Math.hypot(dx, dy) || 1;
    return { x: x || 0, y: y || 0, z: z || 0, c: dx / len, s: dy / len };
  };
  /** An IfcLocalPlacement, through all the placements it is relative to. */
  const placement = (v: Value | undefined, depth = 0): Transform => {
    const e = get(v);
    if (!e || e.type !== "IFCLOCALPLACEMENT" || depth > 30) return IDENTITY;
    return compose(placement(e.args[0], depth + 1), axis(e.args[1]));
  };
  /** The footprint of a product's extruded solid in its own placement (rectangles and polylines). */
  const footprint = (shape: Value | undefined): Vec2[] | null => {
    for (const rep of (get(shape)?.args[2] as Value[] | undefined) ?? []) {
      for (const item of (get(rep)?.args[3] as Value[] | undefined) ?? []) {
        const solid = get(item);
        if (solid?.type !== "IFCEXTRUDEDAREASOLID") continue;
        const profile = get(solid.args[0]);
        const at = compose(axis(solid.args[1]), axis(profile?.args[2]));
        let ring: Vec2[] = [];
        if (profile?.type === "IFCRECTANGLEPROFILEDEF") {
          const [w, d] = [num(profile.args[3]) / 2, num(profile.args[4]) / 2];
          ring = [[-w, -d], [w, -d], [w, d], [-w, d]];
        } else if (profile?.type === "IFCARBITRARYCLOSEDPROFILEDEF") {
          const curve = get(profile.args[2]);
          if (curve?.type === "IFCPOLYLINE") ring = ((curve.args[0] as Value[]) ?? []).map((p) => point(p) as unknown as Vec2);
        }
        ring = ring.filter((p) => Number.isFinite(p[0]) && Number.isFinite(p[1]));
        if (ring.length > 3 && Math.hypot(ring[0][0] - ring[ring.length - 1][0], ring[0][1] - ring[ring.length - 1][1]) < 1e-6) ring.pop();
        if (ring.length >= 3) return ring.map(([x, y]) => [at.x + at.c * x - at.s * y, at.y + at.s * x + at.c * y]);
      }
    }
    return null;
  };

  // which space belongs to which storey: IfcRelAggregates (storey → spaces) or IfcRelContainedInSpatialStructure
  const storeyOf = new Map<number, number>();
  for (const [, e] of all) {
    if (e.type === "IFCRELAGGREGATES" && isRef(e.args[4])) for (const part of (e.args[5] as Value[]) ?? []) if (isRef(part)) storeyOf.set(part.ref, e.args[4].ref);
    if (e.type === "IFCRELCONTAINEDINSPATIALSTRUCTURE" && isRef(e.args[5])) for (const part of (e.args[4] as Value[]) ?? []) if (isRef(part)) storeyOf.set(part.ref, e.args[5].ref);
  }
  const storeys = [...all].filter(([, e]) => e.type === "IFCBUILDINGSTOREY").map(([id, e]) => ({ id, name: String(e.args[7] || e.args[2] || "") || null, elevation: num(e.args[9]) * unit }));
  storeys.sort((a, b) => (a.elevation || 0) - (b.elevation || 0));

  const rooms: { storey: number | null; name: string; ring: Vec2[] }[] = [];
  for (const [id, e] of all) {
    if (e.type !== "IFCSPACE") continue;
    const local = footprint(e.args[6]);
    if (!local) continue;
    const at = placement(e.args[5]);
    const ring = local.map(([x, y]): Vec2 => [(at.x + at.c * x - at.s * y) * unit, (at.y + at.s * x + at.c * y) * unit]);
    const name = String(e.args[7] || e.args[2] || "") || `Raum ${rooms.length + 1}`;
    rooms.push({ storey: storeyOf.get(id) ?? null, name, ring });
  }
  if (!rooms.length) throw new Error("ifc_empty");

  // plan coordinates: from the drawing's left, y mirrored into z
  const pts = rooms.flatMap((r) => r.ring);
  const x0 = Math.min(...pts.map((p) => p[0]));
  const y1 = Math.max(...pts.map((p) => p[1]));
  const r3 = (v: number) => Math.round(v * 1000) / 1000;
  const floors: Floor[] = [];
  const floorFor = new Map<number | null, Floor>();
  const used = storeys.filter((s) => rooms.some((r) => r.storey === s.id));
  used.forEach((s, i) => {
    const f = newFloor(uid("floor"), s.name ?? `Etage ${i + 1}`, Number.isFinite(s.elevation) ? r3(s.elevation) : i * 2.8);
    floors.push(f);
    floorFor.set(s.id, f);
  });
  if (rooms.some((r) => r.storey === null || !floorFor.has(r.storey))) {
    const f = newFloor(uid("floor"), floors.length ? "Weitere Räume" : "Erdgeschoss", floors.length ? floors[floors.length - 1].elevation + 2.8 : 0);
    floors.push(f);
    floorFor.set(null, f);
  }
  // each storey's height: up to the next one
  floors.forEach((f, i) => {
    const next = floors[i + 1];
    if (next && next.elevation - f.elevation > 1.8) f.height = r3(next.elevation - f.elevation - 0.2);
  });
  for (const r of rooms) {
    const f = floorFor.get(r.storey !== null && floorFor.has(r.storey) ? r.storey : null)!;
    f.rooms.push({ id: uid("room"), name: r.name, area_id: null, points: r.ring.map(([x, y]) => [r3(x - x0), r3(y1 - y)]), floor_material: "wood", panel: [] });
  }
  const b = emptyBuilding();
  b.floors = floors;
  return { building: normalizeBuilding(b), report: { floors: floors.length, rooms: rooms.length, openings: 0, walls: 0, furniture: 0 } };
}
