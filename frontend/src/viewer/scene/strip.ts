// LED strips that rise along their length (up a sloped ceiling or a stair): where their middle and their points lie.

const DEG = Math.PI / 180;

/**
 * How much higher (or lower) the middle of a rising strip sits than that of a level one: a strip on a mount height keeps its low
 * end there and rises from it, one under the ceiling keeps its high end there and falls away from it.
 */
export function stripRiseLift(base: number | null | undefined, width: number, rise: number | null | undefined): number {
  const up = Math.abs(rise ?? 0) * DEG;
  if (!up) return 0;
  const half = (width / 2) * Math.sin(up);
  return base != null ? half : -half;
}

/**
 * A point `along` a strip (-0.5 at one end, 0.5 at the other) of `width`, turned by `heading` (radians) around its middle at
 * (x, y, z): level strips stay at y, rising ones climb by `rise` degrees towards the +along end.
 */
export function stripPoint(x: number, y: number, z: number, heading: number, width: number, rise: number | null | undefined, along: number): [number, number, number] {
  const r = (rise ?? 0) * DEG;
  const run = width * along * Math.cos(r);
  return [x + Math.cos(heading) * run, y + width * along * Math.sin(r), z + Math.sin(heading) * run];
}
