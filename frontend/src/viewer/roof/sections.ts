// Roofs made of sections: wings of an L- or T-shaped house, a barn with a catslide, a lean-to, canopies. Each section is
// drawn at its own height, and the sections are grouped by the floor they sit on.

import { Color } from "three";
import { polygonArea, type Building, type RoofSection, type Vec2 } from "../../model.ts";
import {
  cutHole, dormerHoles, dormerParent, effectiveDormer, wingOf, offsetPolygon, sectionFloor, sectionFrame, sectionGeometry, sectionHeightAt, sectionOverhang, sectionPolygon, sectionProfile, sectionUV,
  type Q, type SectionOverhang,
} from "../../roof-sections.ts";
import { roofFaces, windowCorners } from "../../solar.ts";
import { GeoBuffer, LineBuffer, pushPrism } from "../geo.ts";
import { pushCanopyFrame } from "./canopy.ts";
import { EAVE, GABLE, GLASS, RIDGE, ROOF, ROOF_TOP, THICK } from "./palette.ts";
import type { RoofGeometry } from "./types.ts";

type P3 = number[];
type Hole = { u0: number; u1: number; v0: number; v1: number };

/** The part of a roof profile (points across, with heights) above a level, as a closed polygon. */
function profileAbove(profile: [number, number][], level: number): [number, number][] {
  const out: [number, number][] = [];
  profile.forEach(([v, y], i) => {
    if (y >= level) out.push([v, y]);
    const next = profile[i + 1];
    if (next && (y - level) * (next[1] - level) < 0) {
      const t = (level - y) / (next[1] - y);
      out.push([v + (next[0] - v) * t, level]);
    }
  });
  if (out.length < 2) return [];
  // close along the level
  const [first, last] = [out[0], out[out.length - 1]];
  if (last[1] > level) out.push([last[0], level]);
  if (first[1] > level) out.unshift([first[0], level]);
  return out;
}

const counterClockwise = (ring: Vec2[]): Vec2[] => (polygonArea(ring) >= 0 ? ring : [...ring].reverse());

/**
 * One section: its slopes with their thickness and rim, the ridge (and hips), and the walls from the section's base up
 * under the roof (gable ends and knee walls). `yOff` is the level of its floor.
 */
export function pushSection(
  solid: GeoBuffer,
  lines: LineBuffer,
  s: RoofSection,
  overhang: SectionOverhang | number,
  yOff: number,
  glass: GeoBuffer = solid,
  attic = false,
  holes: Hole[] = [],
  /** A dormer: its gable only at this end (0 = u0, 1 = u1); null for an ordinary section. */
  frontEnd: 0 | 1 | null = null,
): void {
  const frame = sectionFrame(s);
  const profile = sectionProfile(s);
  const ov = typeof overhang === "number" ? { u0: overhang, u1: overhang, a: overhang, b: overhang } : overhang;
  const [ovA, ovB] = [Math.max(0, ov.a), Math.max(0, ov.b)];
  const w = frame.w;
  const U0 = frame.u0 - Math.max(0, ov.u0);
  const U1 = frame.u1 + Math.max(0, ov.u1);
  const at = (u: number, v: number, y: number): P3 => {
    const [x, z] = frame.at(u, v);
    return [x, y - yOff, z];
  };
  const topColor = new Color(ROOF_TOP);
  const underColor = new Color(ROOF);
  const gableColor = new Color(GABLE);
  const fan = (points: P3[], color: Color) => {
    for (let i = 1; i + 1 < points.length; i++) solid.tri(points[0], points[i], points[i + 1], color);
  };
  const place = ([u, v, y]: Q, lower = 0) => at(u, v, y - lower);

  // the roof planes as polygons in (u, v, height), the rim and the ridge lines; a flat roof is a slab
  let faces: Q[][] = [];
  let rim: Q[] = [];
  let ridges: [Q, Q][] = [];
  let gableProfile: [number, number][] | null = null;
  let endProfiles: [[number, number][] | null, [number, number][] | null] | null = null;
  if (s.shape === "flat" || s.shape === "parapet") {
    const y = s.eave_a - yOff;
    const parapet = s.shape === "parapet";
    // a free shape takes its polygon (grown by the overhang), a plain section its rectangle; a parapet roof has no overhang
    const outline =
      s.points && s.points.length >= 3
        ? sectionPolygon(s, parapet ? 0 : Math.max(0, Math.min(ov.a, ov.b, ov.u0, ov.u1)))
        : parapet
          ? [frame.at(frame.u0, 0), frame.at(frame.u1, 0), frame.at(frame.u1, w), frame.at(frame.u0, w)]
          : [frame.at(U0, -ovA), frame.at(U1, -ovA), frame.at(U1, w + ovB), frame.at(U0, w + ovB)];
    pushPrism(solid, outline, y, y + 0.25, ROOF, ROOF_TOP, { bottom: true });
    outline.forEach((a, i) => {
      const c = outline[(i + 1) % outline.length];
      lines.seg([a[0], y + 0.252, a[1]], [c[0], y + 0.252, c[1]], RIDGE);
      lines.seg([a[0], y, a[1]], [c[0], y, c[1]], EAVE);
    });
    if (parapet) {
      // a 0.4 m high, 0.2 m thick wall ring along the edge, on the slab
      const outer = counterClockwise(outline);
      const inner = offsetPolygon(outer, -0.2);
      outer.forEach((a, i) => {
        const next = (i + 1) % outer.length;
        pushPrism(solid, counterClockwise([a, outer[next], inner[next], inner[i]]), y + 0.25, y + 0.65, ROOF, ROOF_TOP);
        lines.seg([a[0], y + 0.652, a[1]], [outer[next][0], y + 0.652, outer[next][1]], RIDGE);
        lines.seg([inner[i][0], y + 0.652, inner[i][1]], [inner[next][0], y + 0.652, inner[next][1]], RIDGE);
      });
    }
  } else {
    const geometry = sectionGeometry(s, ov);
    // dormers: the slope opens under them (a plane with a hole becomes pieces around it)
    faces = holes.reduce((planes, hole) => planes.flatMap((plane) => cutHole(plane, hole)), geometry.faces);
    rim = geometry.rim;
    ridges = geometry.ridges;
    gableProfile = geometry.gable;
    endProfiles = geometry.endProfiles ?? null;
  }

  // a canopy has thin see-through panels; a closed roof its tiles with their thickness below
  const open = !!s.open;
  const pane = new Color(GLASS);
  for (const face of faces) {
    if (open) {
      for (let i = 1; i + 1 < face.length; i++) glass.tri(place(face[0]), place(face[i]), place(face[i + 1]), pane);
    } else {
      fan(face.map((q) => place(q)), topColor);
      fan(face.map((q) => place(q, THICK)), underColor);
    }
  }
  // the rim: eaves and rakes with the roof's thickness
  rim.forEach((a, i) => {
    const b = rim[(i + 1) % rim.length];
    if (!open) fan([place(a), place(b), place(b, THICK), place(a, THICK)], underColor);
    lines.seg(place(a), place(b), open ? RIDGE : EAVE);
  });
  if (open) {
    pushCanopyFrame(solid, lines, frame, profile, ov, (u, v, y) => at(u, v, y), yOff);
    return;
  }
  for (const [a, b] of ridges) lines.seg(place([a[0], a[1], a[2] + 0.004]), place([b[0], b[1], b[2] + 0.004]), RIDGE);

  // walls up under the roof from the section's base: the gable ends (not under a hip) ...
  const base = s.base;
  if (attic) return;
  if (gableProfile) {
    const ends = frontEnd === null ? [frame.u0, frame.u1] : [frontEnd === 0 ? frame.u0 : frame.u1];
    for (const u of ends) {
      // with an own shape per end, each end has its own wall under it (none under a hip)
      const own = endProfiles ? endProfiles[u === frame.u0 ? 0 : 1] : gableProfile;
      const polygon = own ? profileAbove(own, base - THICK) : [];
      if (polygon.length >= 3) fan(polygon.map(([v, y]) => at(u, v, y)), gableColor);
    }
  }
  // ... and the knee walls along the eaves where the roof starts above the walls (the high back wall of a pent roof)
  if (s.shape !== "flat" && s.shape !== "parapet") {
    for (const v of [0, w]) {
      const y = profile.y(v) - THICK;
      if (y > base + 0.02) fan([at(frame.u0, v, base), at(frame.u1, v, base), at(frame.u1, v, y), at(frame.u0, v, y)], gableColor);
    }
  } else if (s.eave_a > base + 0.02) {
    const corners: [number, number][] = [[frame.u0, 0], [frame.u1, 0], [frame.u1, w], [frame.u0, w]];
    corners.forEach(([ua, va], i) => {
      const [ub, vb] = corners[(i + 1) % 4];
      fan([at(ua, va, base), at(ub, vb, base), at(ub, vb, s.eave_a), at(ua, va, s.eave_a)], gableColor);
    });
  }
}

/** Roof sections, grouped by the floor whose wall tops are nearest below each section's base. */
export function buildSections(b: Building, sections: readonly RoofSection[], overhang: number): RoofGeometry[] {
  const floors = b.floors.filter((f) => f.rooms.length > 0).sort((p, q) => p.elevation - q.elevation);
  if (floors.length === 0) return [];
  const parts = new Map<string, RoofGeometry>();
  const faceByKey = new Map(roofFaces(b).map((f) => [f.key, f]));
  for (const section of sections) {
    if (Math.abs(section.x1 - section.x0) < 0.1 || Math.abs(section.z1 - section.z0) < 0.1) continue;
    // the floor the section sits on: the highest one that starts below the top of its walls
    const floor = sectionFloor(b, section) ?? floors[0];
    // canopies get a part of their own: it rides with the floor but never lifts off like a roof
    const key = section.open ? `${floor.id}:open` : floor.id;
    let part = parts.get(key);
    if (!part) parts.set(key, (part = { floor, base: 0, solid: new GeoBuffer(), lines: new LineBuffer(), glass: new GeoBuffer(), sections: [], lift: !section.open }));
    part.sections!.push(section.id);

    // a dormer or cross gable (a smaller section on a bigger one) keeps its cheeks and front gable. An attic: the floor's
    // walls rise above the section's base, so they end under the slopes themselves and the roof draws none of its own.
    // a wing butting against a bigger roof at a right angle reaches into it like a cross gable, so the valleys form there
    const wing = wingOf(sections, section);
    const parent = dormerParent(sections, section) ?? wing?.parent ?? null;
    const attic = floor.elevation + floor.height > section.base + 0.05 && !section.dormer && !parent;
    // the slope opens under every dormer and cross gable sitting on this section, and under its roof windows
    const holes: Hole[] = sections
      .filter((d) => d !== section)
      .flatMap((d) => (dormerParent(sections, d) === section ? dormerHoles(section, d) : wingOf(sections, d)?.parent === section ? dormerHoles(section, wingOf(sections, d)!.extended) : []));
    for (const w of b.settings.roof.windows ?? []) {
      const face = faceByKey.get(w.face);
      const corners = face && face.section === section.id && face.side !== "front" ? windowCorners(face, w) : null;
      if (!corners) continue;
      const uv = corners.map((p) => sectionUV(section, p[0], p[2]));
      holes.push({ u0: Math.min(...uv.map((q) => q[0])), u1: Math.max(...uv.map((q) => q[0])), v0: Math.min(...uv.map((q) => q[1])), v1: Math.max(...uv.map((q) => q[1])) });
    }
    // a dormer only goes as deep as its ridge needs to meet the slope; its gable is only at the front (the lower end of the slope)
    const drawn = wing ? wing.extended : parent ? effectiveDormer(parent, section) : section;
    let frontEnd: 0 | 1 | null = null;
    if (parent) {
      const frame = sectionFrame(drawn);
      const parentPlanes = sectionGeometry(parent, { u0: 0, u1: 0, a: 0, b: 0 });
      const heightAt = (u: number) => {
        const [x, z] = frame.at(u, frame.w / 2);
        const [pu, pv] = sectionUV(parent, x, z);
        return sectionHeightAt(parentPlanes, pu, pv) ?? sectionProfile(parent).y(pv);
      };
      frontEnd = heightAt(frame.u0) <= heightAt(frame.u1) ? 0 : 1;
    }
    pushSection(part.solid, part.lines, drawn, sectionOverhang(b, drawn, drawn.overhang ?? overhang), floor.elevation, part.glass, attic, holes, frontEnd);
  }
  // the closed roofs first: the first part is the one the main roof's solar fields belong to
  return [...parts.values()].sort((p, q) => Number(p.lift === false) - Number(q.lift === false));
}
