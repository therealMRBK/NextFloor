// The roof planes of a section as polygons in (u, v, height): what the 3D view builds, the editor draws the ridges of,
// and the attic walls end under.

import { pointInPolygon, polygonArea, type Building, type RoofEnd, type RoofSection, type Vec2 } from "../model.ts";
import { gradient, mansardParts, sectionFrame, sectionProfile } from "./frame.ts";

/** A point of a roof plane: along the ridge (u), across (v), and its height. */
export type Q = [number, number, number];

export interface SectionGeometry {
  faces: Q[][];
  /** The outer edge of the roof. */
  rim: Q[];
  ridges: [Q, Q][];
  /** The profile of the gable ends, or null when the ends are hipped. */
  gable: [number, number][] | null;
  /** A section with a different end at each end: the profile under each end (start u0, end u1), null under a hip. */
  endProfiles?: [[number, number][] | null, [number, number][] | null];
}

/** Overhang per edge: along the ridge at both ends (u0, u1) and across at both sides (a, b). */
export interface SectionOverhang {
  u0: number;
  u1: number;
  a: number;
  b: number;
}

/** The roof planes of a section, each edge with its own overhang. */
export function sectionGeometry(s: RoofSection, overhang: SectionOverhang): SectionGeometry {
  const frame = sectionFrame(s);
  const profile = sectionProfile(s);
  const w = frame.w;
  const [ovA, ovB] = [Math.max(0, overhang.a), Math.max(0, overhang.b)];
  const U0 = frame.u0 - Math.max(0, overhang.u0);
  const U1 = frame.u1 + Math.max(0, overhang.u1);
  const onRoof = (u: number, v: number): Q => [u, v, profile.y(v)];
  // the four eave corners (overhang included)
  const a0 = onRoof(U0, -ovA);
  const a1 = onRoof(U1, -ovA);
  const b1 = onRoof(U1, w + ovB);
  const b0 = onRoof(U0, w + ovB);
  const [gradA, gradB] = [gradient(s.pitch_a), gradient(s.pitch_b)];
  const ridgeAt = (u: number): Q => [u, profile.vr, profile.rh];

  // a gable, hip or half-hip with its own shape at each end (a hip at one end, an upright gable at the other)
  if (s.ends && (s.shape === "gable" || s.shape === "hip" || s.shape === "halfhip")) {
    const halfLength = (frame.u1 - frame.u0) / 2;
    const run = Math.min(halfLength, Math.min(profile.vr, w - profile.vr) || w / 2);
    const eaveLow = Math.min(profile.y(0), profile.y(w));
    const hipY = eaveLow + (profile.rh - eaveLow) * Math.min(0.9, Math.max(0.2, s.halfhip ?? 0.55));
    const hipVA = gradA > 1e-6 ? Math.min(profile.vr, (hipY - s.eave_a) / gradA) : profile.vr;
    const hipVB = gradB > 1e-6 ? Math.max(profile.vr, w - (hipY - s.eave_b) / gradB) : profile.vr;
    const hipRun = Math.min(halfLength - 0.1, (profile.rh - hipY) / Math.max(0.2, gradA));
    const gableProfile: [number, number][] = [[0, profile.y(0)], [profile.vr, profile.rh], [w, profile.y(w)]];
    const halfProfile: [number, number][] = [[0, profile.y(0)], [hipVA, hipY], [hipVB, hipY], [w, profile.y(w)]];
    // per end: the points above the eave corner on side a and b, the ridge's end, and the profile under it
    const end = (kind: RoofEnd, edge: number, inward: number) => {
      if (kind === "hip") return { upA: [] as Q[], upB: [] as Q[], ridge: ridgeAt(edge === U0 ? frame.u0 + run * inward : frame.u1 - run * inward), profile: null };
      if (kind === "halfhip") {
        const ridge = ridgeAt(edge === U0 ? frame.u0 + hipRun : frame.u1 - hipRun);
        return { upA: [[edge, hipVA, hipY] as Q], upB: [[edge, hipVB, hipY] as Q], ridge, profile: halfProfile };
      }
      return { upA: [] as Q[], upB: [] as Q[], ridge: ridgeAt(edge), profile: gableProfile };
    };
    const first = end(s.ends[0], U0, 1);
    const last = end(s.ends[1], U1, 1);
    const faces: Q[][] = [
      [a0, a1, ...last.upA, last.ridge, first.ridge, ...[...first.upA].reverse()],
      [first.ridge, last.ridge, ...[...last.upB].reverse(), b1, b0, ...first.upB],
    ];
    const ridges: [Q, Q][] = [[first.ridge, last.ridge]];
    for (const [e, a, b] of [[first, a0, b0], [last, a1, b1]] as const) {
      if (e.profile === null) {
        faces.push(e === first ? [b0, a0, e.ridge] : [a1, b1, e.ridge]);
        ridges.push([a, e.ridge], [b, e.ridge]);
      } else if (e.upA.length) {
        faces.push(e === first ? [e.upB[0], e.upA[0], e.ridge] : [e.upA[0], e.upB[0], e.ridge]);
        ridges.push([e.upA[0], e.ridge], [e.upB[0], e.ridge]);
      }
    }
    const rimEnd = (e: typeof first) => (e.profile === null ? [] : e.upA.length ? [e.upA[0], e.upB[0]] : [e.ridge]);
    const rim: Q[] = [a0, a1, ...rimEnd(last), b1, b0, ...[...rimEnd(first)].reverse()];
    return { faces, rim, ridges, gable: gableProfile, endProfiles: [first.profile, last.profile] };
  }

  switch (s.shape) {
    case "pent":
      return { faces: [[a0, a1, b1, b0]], rim: [a0, a1, b1, b0], ridges: [[b1, b0]], gable: [[0, profile.y(0)], [w, profile.y(w)]] };

    case "hip":
    case "pyramid": {
      // hips rise from the corners: the ridge is shorter by the run of the slopes at both ends (none left on a pyramid)
      const half = (frame.u1 - frame.u0) / 2;
      const run = s.shape === "pyramid" ? half : Math.min(half, Math.min(profile.vr, w - profile.vr) || w / 2);
      const start = ridgeAt(frame.u0 + run);
      const end = ridgeAt(frame.u1 - run);
      if (s.shape === "pyramid") {
        return { faces: [[a0, a1, start], [a1, b1, start], [b1, b0, start], [b0, a0, start]], rim: [a0, a1, b1, b0], ridges: [[a0, start], [b0, start], [a1, start], [b1, start]], gable: null };
      }
      return {
        faces: [[a0, a1, end, start], [start, end, b1, b0], [b0, a0, start], [a1, b1, end]],
        rim: [a0, a1, b1, b0],
        ridges: [[start, end], [a0, start], [b0, start], [a1, end], [b1, end]],
        gable: null,
      };
    }

    case "halfhip": {
      // a gable whose top is hipped: the hip starts at 55 % of the gable's height and slopes like side a
      const eaveLow = Math.min(profile.y(0), profile.y(w));
      const hipY = eaveLow + (profile.rh - eaveLow) * Math.min(0.9, Math.max(0.2, s.halfhip ?? 0.55));
      const hipVA = gradA > 1e-6 ? Math.min(profile.vr, (hipY - s.eave_a) / gradA) : profile.vr;
      const hipVB = gradB > 1e-6 ? Math.max(profile.vr, w - (hipY - s.eave_b) / gradB) : profile.vr;
      const hipRun = Math.min((frame.u1 - frame.u0) / 2 - 0.1, (profile.rh - hipY) / Math.max(0.2, gradA));
      const r0 = ridgeAt(frame.u0 + hipRun);
      const r1 = ridgeAt(frame.u1 - hipRun);
      const ha0: Q = [U0, hipVA, hipY];
      const hb0: Q = [U0, hipVB, hipY];
      const ha1: Q = [U1, hipVA, hipY];
      const hb1: Q = [U1, hipVB, hipY];
      return {
        faces: [[a0, a1, ha1, r1, r0, ha0], [r0, r1, hb1, b1, b0, hb0], [hb0, ha0, r0], [ha1, hb1, r1]],
        rim: [a0, a1, ha1, hb1, b1, b0, hb0, ha0],
        ridges: [[r0, r1], [ha0, r0], [hb0, r0], [ha1, r1], [hb1, r1]],
        gable: [[0, profile.y(0)], [hipVA, hipY], [hipVB, hipY], [w, profile.y(w)]],
      };
    }

    case "mansard": {
      const m = mansardParts(w, s.eave_a, s.eave_b, gradA, gradB);
      const la0: Q = [U0, m.vla, m.yla];
      const la1: Q = [U1, m.vla, m.yla];
      const lb0: Q = [U0, w - m.vlb, m.ylb];
      const lb1: Q = [U1, w - m.vlb, m.ylb];
      const r0: Q = [U0, m.vr, m.rh];
      const r1: Q = [U1, m.vr, m.rh];
      return {
        faces: [[a0, a1, la1, la0], [la0, la1, r1, r0], [r0, r1, lb1, lb0], [lb0, lb1, b1, b0]],
        rim: [a0, a1, la1, r1, lb1, b1, b0, lb0, r0, la0],
        ridges: [[r0, r1], [la0, la1], [lb0, lb1]],
        gable: [[0, profile.y(0)], [m.vla, m.yla], [m.vr, m.rh], [w - m.vlb, m.ylb], [w, profile.y(w)]],
      };
    }

    default: {
      const r0 = ridgeAt(U0);
      const r1 = ridgeAt(U1);
      return {
        faces: [[a0, a1, r1, r0], [r0, r1, b1, b0]],
        rim: [a0, a1, r1, b1, b0, r0],
        ridges: [[r0, r1]],
        gable: [[0, profile.y(0)], [profile.vr, profile.rh], [w, profile.y(w)]],
      };
    }
  }
}

/** The height of the roof planes at (u, v): the lowest plane over that point, null outside all planes. */
export function sectionHeightAt(geometry: SectionGeometry, u: number, v: number): number | null {
  let lowest: number | null = null;
  for (const face of geometry.faces) {
    if (!pointInPolygon([u, v], face.map(([fu, fv]) => [fu, fv] as Vec2))) continue;
    // the plane through the first corners that do not lie on a line
    const [p0, p1] = face;
    const p2 = face.slice(2).find((q) => Math.abs((p1[0] - p0[0]) * (q[1] - p0[1]) - (p1[1] - p0[1]) * (q[0] - p0[0])) > 1e-9);
    if (!p2) continue;
    // normal = (p1 - p0) x (p2 - p0), with the axes taken as (u, height, v)
    const e1 = [p1[0] - p0[0], p1[2] - p0[2], p1[1] - p0[1]];
    const e2 = [p2[0] - p0[0], p2[2] - p0[2], p2[1] - p0[1]];
    const normal = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]];
    if (Math.abs(normal[1]) < 1e-9) continue;
    const y = p0[2] - (normal[0] * (u - p0[0]) + normal[2] * (v - p0[1])) / normal[1];
    lowest = lowest === null ? y : Math.min(lowest, y);
  }
  return lowest;
}

/** A polygon in (u, v, y) cut by a half-plane parallel to an axis; heights follow the edges, as the polygon is flat. */
function clipHalf(polygon: Q[], axis: 0 | 1, limit: number, keepBelow: boolean): Q[] {
  const kept = (p: Q) => (keepBelow ? p[axis] <= limit + 1e-9 : p[axis] >= limit - 1e-9);
  const result: Q[] = [];
  polygon.forEach((p, i) => {
    const q = polygon[(i + 1) % polygon.length];
    if (kept(p)) result.push(p);
    if (kept(p) !== kept(q)) {
      const t = (limit - p[axis]) / (q[axis] - p[axis]);
      result.push([p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t, p[2] + (q[2] - p[2]) * t]);
    }
  });
  return result;
}

export interface Hole {
  u0: number;
  u1: number;
  v0: number;
  v1: number;
}

/** A roof plane with a rectangular hole (a dormer's footprint): up to four pieces around it. */
export function cutHole(face: Q[], hole: Hole): Q[][] {
  const band = clipHalf(clipHalf(face, 0, hole.u0, false), 0, hole.u1, true);
  const pieces = [clipHalf(face, 0, hole.u0, true), clipHalf(face, 0, hole.u1, false), clipHalf(band, 1, hole.v0, true), clipHalf(band, 1, hole.v1, false)];
  return pieces.filter((piece) => piece.length >= 3 && Math.abs(polygonArea(piece.map(([u, v]) => [u, v] as Vec2))) > 1e-6);
}

/**
 * Overhang per edge: none where the section meets a taller part of the house (a room just outside that edge whose
 * walls rise above the section's wall tops), so a lean-to ends at the wall and does not run into the house.
 */
export function sectionOverhang(building: Building, s: RoofSection, overhang: number): SectionOverhang {
  const frame = sectionFrame(s);
  const tallRooms = building.floors.flatMap((f) => f.rooms.filter((r) => r.points.length >= 3 && f.elevation + f.height > s.base + 0.05));
  const blockedAt = (spots: Vec2[]) => spots.some((p) => tallRooms.some((r) => pointInPolygon(p, r.points)));
  const probe = 0.35;
  const alongRidge = [0.15, 0.5, 0.85].map((t) => frame.u0 + (frame.u1 - frame.u0) * t);
  const acrossRidge = [0.15, 0.5, 0.85].map((t) => frame.w * t);
  const free = (blocked: boolean) => (blocked ? 0 : overhang);
  const own = (side: "u0" | "u1" | "a" | "b", automatic: number): number => {
    const v = s.overhang_sides?.[side];
    return typeof v === "number" && Number.isFinite(v) ? Math.min(2, Math.max(0, v)) : automatic;
  };
  return {
    a: own("a", free(blockedAt(alongRidge.map((u) => frame.at(u, -probe))))),
    b: own("b", free(blockedAt(alongRidge.map((u) => frame.at(u, frame.w + probe))))),
    u0: own("u0", free(blockedAt(acrossRidge.map((v) => frame.at(frame.u0 - probe, v))))),
    u1: own("u1", free(blockedAt(acrossRidge.map((v) => frame.at(frame.u1 + probe, v))))),
  };
}
