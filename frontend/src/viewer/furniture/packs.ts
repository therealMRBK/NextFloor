// Furniture from packs: the parts of a pack item scaled to the item's size, as lamps with glowing parts, and as glow layers.

import type { Furniture } from "../../model.ts";
import { fittedParts, movedParts, type PackItem, type PackPart } from "../../packs.ts";
import { DEG, EDGE_TOP, LineBuffer, shade, type GeoBuffer } from "../geo.ts";
import { Builder, flipWinding, type Plan } from "./builder.ts";
import { C, EDGE_FAINT, EDGE_FURN, material } from "./palette.ts";

/** The colour of a pack part: a palette role (so packs follow the look) or "#rrggbb". */
function partColor(value: string | undefined, top: boolean): number | null {
  if (!value) return null;
  if (value.startsWith("#")) return Number.parseInt(value.slice(1), 16);
  const palette = C as Record<string, number>;
  return (top ? palette[`${value}Top`] : undefined) ?? palette[value] ?? null;
}

/** The model of a pack item: its parts scaled to the item's size. Glowing parts take `glow` (a lit lamp). */
export function packModel(b: Builder, item: PackItem, w: number, d: number, h: number, base: number, glow: number | null, only: ((p: PackPart) => boolean) | null = null, variant: string | null = null, reach: number | null = null): void {
  // the colour picked for the item (its first by default), for the parts that carry paint
  const paint = item.colors?.length ? (item.colors.find((c) => c.id === variant) ?? item.colors[0]).hex : null;
  // moving parts (a curtain, an awning) are drawn apart, at their reach; the item itself leaves them out
  const fitted = fittedParts(item, w, d, h);
  for (const raw of reach === null ? fitted : movedParts(fitted, reach)) {
    if (reach === null && raw.move) continue;
    if (only && !only(raw)) continue;
    // selected parts (the glowing ones of a speaker, a car's windows) come out a hair larger, so they cover the item's own
    const part = only ? { ...raw, glow: true, w: raw.w + 0.006 / w, d: raw.d + 0.006 / d, y: Math.max(0, raw.y - 0.002 / h), h: raw.h + 0.004 / h } : raw;
    const lit = part.glow && glow !== null;
    const painted = !!(part.paint && paint);
    const body = painted ? paint! : part.color;
    const side = lit ? glow : (partColor(body, false) ?? C.body);
    // without a top colour, the top is the role's top shade or a little lighter
    const top = lit ? glow : (partColor(painted ? undefined : part.top, false) ?? partColor(body, true) ?? shade(side, 1.25).getHex());
    const look = material(side, top);
    const [y0, y1] = [base + part.y * h, base + Math.min(h, (part.y + part.h) * h)];
    // "glow" lines are as bright as the wall lines, so a pack item can be drawn like the walls
    const edges = part.edges === "glow" ? EDGE_TOP : part.edges === "faint" ? EDGE_FAINT : part.edges ? EDGE_FURN : null;
    // a turned part draws through a builder whose coordinates turn around the part's centre
    const target = part.rot ? b.turned(part.x * w, part.z * d, part.rot) : b;
    const [cx, cz] = [part.x * w, part.z * d];
    if (part.shape === "cyl" && (part.axis === "x" || part.axis === "z")) {
      target.lyingCylinder(part.axis, cx, cz, y0, y1, part.axis === "x" ? part.w * w : part.d * d, part.axis === "x" ? part.d * d : part.w * w, look, 14, edges);
    } else if (part.shape === "cyl") {
      target.cylinder(cx, cz, Math.min(part.w * w, part.d * d) / 2, y0, y1, look, 14, edges);
    } else if (part.shape === "loft") {
      const [tx, tz, tw, td] = [part.tx ?? part.x, part.tz ?? part.z, part.tw ?? part.w, part.td ?? part.d];
      target.loft([(part.x - part.w / 2) * w, (part.x + part.w / 2) * w, (part.z - part.d / 2) * d, (part.z + part.d / 2) * d], [(tx - tw / 2) * w, (tx + tw / 2) * w, (tz - td / 2) * d, (tz + td / 2) * d], y0, y1, look, edges, { front: part.capFront, back: part.capBack, underside: true });
    } else if (part.shape === "sweep") {
      const stations = (part.stations ?? []).map(([z, sy0, sy1, sw]) => ({ x: cx, z: z * d, y0: base + sy0 * h, y1: base + sy1 * h, hw: (sw * w) / 2 }));
      target.sweep(stations, look, part.n ?? 16, part.exp ?? 2.6, edges);
    } else target.block({ x: [(part.x - part.w / 2) * w, (part.x + part.w / 2) * w], y: [y0, y1], z: [(part.z - part.d / 2) * d, (part.z + part.d / 2) * d] }, look, edges);
  }
}

type Placed = Pick<Furniture, "x" | "z" | "rotation" | "w" | "d" | "h" | "mirror">;

/** The plan transform of a placed item: turned by its rotation, and mirrored when asked (its own x runs the other way). */
export function placement(f: Pick<Furniture, "x" | "z" | "rotation" | "mirror">): Plan {
  const [c, s] = [Math.cos(f.rotation * DEG), Math.sin(f.rotation * DEG)];
  const mx = f.mirror ? -1 : 1;
  return (x, z) => [f.x + mx * x * c - z * s, f.z + mx * x * s + z * c];
}

const sizeOf = (f: Placed): [number, number, number] => [Math.max(0.05, f.w), Math.max(0.05, f.d), Math.max(0.005, f.h)];

/** The glowing parts of a pack item that is no lamp (a smart speaker's light ring) in `color`, for the screen layer. */
export function pushPackGlow(buf: GeoBuffer, item: PackItem, f: Placed, base: number, color: number, pick: (p: PackPart) => boolean = (p) => !!p.glow): void {
  packModel(new Builder(buf, new LineBuffer(), placement(f)), item, ...sizeOf(f), base, color, pick);
}

/** The moving parts of a pack item (curtain, roller screen, awning, gate) at their reach (0 drawn in … 1 out). */
export function pushPackMoving(buf: GeoBuffer, item: PackItem, f: Placed & { variant?: string | null }, base: number, reach: number): void {
  const first = buf.p.length;
  packModel(new Builder(buf, new LineBuffer(), placement(f)), item, ...sizeOf(f), base, null, null, f.variant ?? null, reach);
  if (f.mirror) flipWinding(buf, first);
}

/** A pack lamp into the lamp buffer: glowing parts in the light's colour (`glow`), or dark when off. Lamps have no outlines. */
export function pushPackLamp(buf: GeoBuffer, item: PackItem, f: Placed, base: number, glow: number): void {
  packModel(new Builder(buf, new LineBuffer(), placement(f)), item, ...sizeOf(f), base, glow);
}

