// Text and pins that float over the 3D view are HTML elements placed by projecting points of the scene onto the screen. Writing a
// style forces the browser to work, so a label is only touched when its place changes.

import { Vector3, type Camera } from "three";

export interface ScreenSize {
  w: number;
  h: number;
}

export interface ScreenPoint {
  x: number;
  y: number;
  /** Behind the camera, or outside the view by more than the margin. */
  off: boolean;
}

const scratch = new Vector3();

/** Where a point of the scene appears on the screen. `margin` is how far outside the view (1 = the edge) it may be and still count. */
export function project(camera: Camera, point: readonly [number, number, number], size: ScreenSize, margin = 1.05): ScreenPoint {
  scratch.set(point[0], point[1], point[2]).project(camera);
  return { x: ((scratch.x + 1) / 2) * size.w, y: ((1 - scratch.y) / 2) * size.h, off: scratch.z > 1 || Math.abs(scratch.x) > margin || Math.abs(scratch.y) > margin };
}

/** The style that puts the middle of an element at a screen point. */
export const centredAt = (p: { x: number; y: number }): string => `translate(${p.x}px, ${p.y}px) translate(-50%, -50%)`;

/** The style that puts an element left-aligned at `left`, vertically centred on `y`. */
export const leftAt = (left: number, y: number): string => `translate(${left}px, ${y}px) translate(0, -50%)`;

/** Moves elements, and remembers where they are, so nothing is written twice. */
export class LabelPlacer {
  private readonly placed = new WeakMap<HTMLElement, string>();

  /** Puts an element at a transform, or hides it (null). Hidden state and transform are only written when they changed. */
  place(element: HTMLElement, transform: string | null): void {
    const hide = transform === null;
    if (element.hidden !== hide) element.hidden = hide;
    if (transform === null || this.placed.get(element) === transform) return;
    this.placed.set(element, transform);
    element.style.transform = transform;
  }
}

export interface FloorLabel {
  rank: number;
  left: number;
  y: number;
  height: number;
}

/** Gap between stacked floor labels. */
const LABEL_GAP = 8;

/** Top floor first, each lower label is kept below the one above it, so that labels never cover each other. */
export function stackFloorLabels<T extends FloorLabel>(labels: readonly T[]): T[] {
  const sorted = [...labels].sort((a, b) => b.rank - a.rank).map((l) => ({ ...l }));
  for (let i = 1; i < sorted.length; i++) {
    const above = sorted[i - 1];
    sorted[i].y = Math.max(sorted[i].y, above.y + (above.height + sorted[i].height) / 2 + LABEL_GAP);
  }
  return sorted;
}

/**
 * Where a floor's label goes: left of the floor's leftmost corner, or right of its rightmost one when the floor pictures on the left
 * take that space. Kept inside the view.
 */
export function floorLabelPosition(corners: readonly { x: number; y: number }[], labelWidth: number, view: { width: number; inset: number }): { left: number; y: number } {
  const leftmost = corners.reduce((best, c) => (c.x < best.x ? c : best));
  const rightmost = corners.reduce((best, c) => (c.x > best.x ? c : best));
  const minLeft = 8 + view.inset;
  let [left, y] = [leftmost.x - labelWidth - 14, leftmost.y];
  if (left < minLeft && view.inset) [left, y] = [rightmost.x + 14, rightmost.y];
  return { left: Math.max(minLeft, Math.min(view.width - labelWidth - 8, left)), y };
}

/** Whether markers of a floor may show: it is fully in view, and the opened floor or no floor is opened. */
export function floorShowsMarkers(floor: { to: number; o: number }, otherFloor: boolean): boolean {
  return floor.to >= 0.99 && floor.o >= 0.9 && !otherFloor;
}

/**
 * Whether outdoor markers set to "always" may show: their floor is drawn and has settled, in the house view and below an opened
 * floor too (the garden belongs to no storey).
 */
export function floorShowsOutdoorMarkers(floor: { to: number; o: number }): boolean {
  return floor.to > 0 && Math.abs(floor.o - floor.to) < 0.05;
}
