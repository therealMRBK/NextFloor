// Wall arcs: a straight edge bent into a circular arc through `sagitta` (the arc's height over its chord), returned as the
// corners in between. Curved walls are stored as these short straight pieces, so every part of NextFloor that knows
// walls (3D, plan, openings, cut view, the solid walls) draws them without knowing about arcs.

import type { Vec2 } from "../model.ts";

/** Longest piece of an arc in degrees of its turn: fine enough to look round, few enough corners to edit. */
const PIECE_DEG = 11.25;

/** The corners strictly between a and b on an arc bulging by `sagitta` to the left of a→b (negative: to the right). */
export function arcPoints(a: Vec2, b: Vec2, sagitta: number, maxPieces = 24): Vec2[] {
  const chord = Math.hypot(b[0] - a[0], b[1] - a[1]);
  if (chord < 1e-6 || Math.abs(sagitta) < 1e-4) return [];
  const s = Math.max(-chord * 2, Math.min(chord * 2, sagitta));
  const u: Vec2 = [(b[0] - a[0]) / chord, (b[1] - a[1]) / chord];
  // left of a→b in plan coordinates (x right, z down the screen)
  const n: Vec2 = [u[1], -u[0]];
  const radius = (chord * chord) / 4 / (2 * Math.abs(s)) + Math.abs(s) / 2;
  const half = 2 * Math.atan((2 * Math.abs(s)) / chord);
  const pieces = Math.max(2, Math.min(maxPieces, Math.ceil(((2 * half) / Math.PI) * 180 / PIECE_DEG)));
  const apex: Vec2 = [n[0] * Math.sign(s), n[1] * Math.sign(s)];
  const mid: Vec2 = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  const centre: Vec2 = [mid[0] - apex[0] * (radius - Math.abs(s)), mid[1] - apex[1] * (radius - Math.abs(s))];
  const out: Vec2[] = [];
  for (let i = 1; i < pieces; i++) {
    const phi = -half + (2 * half * i) / pieces;
    out.push([centre[0] + radius * (apex[0] * Math.cos(phi) + u[0] * Math.sin(phi)), centre[1] + radius * (apex[1] * Math.cos(phi) + u[1] * Math.sin(phi))]);
  }
  return out;
}

/** Length along a polyline. */
export const polylineLength = (points: readonly Vec2[]): number => points.reduce((sum, p, i) => (i ? sum + Math.hypot(p[0] - points[i - 1][0], p[1] - points[i - 1][1]) : sum), 0);

/** Which piece of a polyline holds the distance `s` along it, and how far into that piece it lies. */
export function pieceAt(points: readonly Vec2[], s: number): { piece: number; offset: number } {
  let rest = Math.max(0, s);
  for (let i = 0; i + 1 < points.length; i++) {
    const length = Math.hypot(points[i + 1][0] - points[i][0], points[i + 1][1] - points[i][1]);
    if (rest <= length || i + 2 === points.length) return { piece: i, offset: Math.min(rest, length) };
    rest -= length;
  }
  return { piece: 0, offset: 0 };
}
