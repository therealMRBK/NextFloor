// Procedural low-poly furniture in the neon look. Every model is built from boxes and cylinders in local coordinates (x
// across, z in depth with the front at +z, y up) scaled to the item's size, then turned and moved into place. Solids go into
// the floor's wall buffer, main outlines into its line buffer and a soft contact shadow into the shadow layer, so furniture
// adds no draw calls.

import { builtinBase, type Furniture } from "../../model.ts";
import { packItem } from "../../packs.ts";
import { GeoBuffer, type LineBuffer } from "../geo.ts";
import { Builder, contactShadow } from "./builder.ts";
import { bunkBed, barStool, bed, bench, chair, officeChair, sofa, stool } from "./seating.ts";
import { bathtub, dishwasher, fridge, fridgeSmart, island, kitchenTall, kitchenUnit, kitchenWall, laundry, radiator, shower, sink, stove, washbasin, wc, worktopOnly } from "./kitchen.ts";
import { coatRack, coffeeTable, desk, dresser, nightstand, plant, roundTable, rug, shelf, sideboard, stairs, table, tvBoard, tvWall } from "./living.ts";
import { gridCabinet, homeBattery, inverter, meterCabinet, wallbox } from "./technical.ts";
import { packModel, placement } from "./packs.ts";
import { shapedStairs } from "./stairs.ts";
import { cabinet } from "./parts.ts";
import { EDGE_FAINT, EDGE_FURN, M } from "./palette.ts";

/** What a model returns to say whether it casts a contact shadow on the floor. */
type Shadow = "yes" | "no";

/** Draws one built-in model. Returns "no" for items that hang on a wall or lie flat, "yes" for those standing on the floor. */
function drawBuiltIn(b: Builder, f: Furniture, w: number, d: number, h: number, base: number): Shadow {
  switch (f.type) {
    case "sofa":
      sofa(b, w, d, h, Math.max(1, Math.round((w - 0.4) / 0.62)));
      return "yes";
    case "armchair":
      sofa(b, w, d, h, 1);
      return "yes";
    case "bed":
      bed(b, w, d, h);
      return "yes";
    case "chair":
      chair(b, w, d, h);
      return "yes";
    case "table":
      table(b, w, d, h);
      return "yes";
    case "desk":
      desk(b, w, d, h);
      return "yes";
    case "nightstand":
      nightstand(b, w, d, h);
      return "yes";
    case "wardrobe":
      cabinet(b, w, d, h, Math.max(2, Math.round(w / 0.5)), h * 0.5);
      return "yes";
    case "tall_cabinet":
      cabinet(b, w, d, h, 1, h * 0.5);
      return "yes";
    case "shelf":
      shelf(b, w, d, h);
      return "yes";
    case "kitchen":
      kitchenUnit(b, w, d, h);
      return "yes";
    case "fridge":
      fridge(b, w, d, h);
      return "yes";
    case "fridge_smart":
      fridgeSmart(b, w, d, h);
      return "yes";
    case "stove":
      stove(b, w, d, h);
      return "yes";
    case "sink":
      sink(b, w, d, h);
      return "yes";
    case "bathtub":
      bathtub(b, w, d, h);
      return "yes";
    case "shower":
      shower(b, w, d, h);
      return "yes";
    case "wc":
      wc(b, w, d, h);
      return "yes";
    case "washbasin":
      washbasin(b, w, d, h);
      return "yes";
    case "tv_board":
      tvBoard(b, w, d, h, f.ambilight === 0 ? EDGE_FURN : undefined);
      return "yes";
    case "plant":
      plant(b, w, d, h);
      return "yes";
    case "rug":
      rug(b, w, d);
      return "no";
    case "stairs":
      if (f.stair) {
        shapedStairs(b, f, w, d, h);
        return f.stair.down ? "no" : "yes";
      }
      stairs(b, w, d, h);
      return "yes";
    case "stairwell":
      return "no"; // only a hole in the floor (see stairHoles in build.ts), nothing to draw
    case "sideboard":
      sideboard(b, w, d, h);
      return "yes";
    case "dresser":
      dresser(b, w, d, h);
      return "yes";
    case "coat_rack":
      coatRack(b, w, d, h);
      return "yes";
    case "bench":
      bench(b, w, d, h, false);
      return "yes";
    case "corner_bench":
      bench(b, w, d, h, true);
      return "yes";
    case "bar_stool":
      barStool(b, w, d, h);
      return "yes";
    case "office_chair":
      officeChair(b, w, d, h);
      return "yes";
    case "stool":
      stool(b, w, d, h);
      return "yes";
    case "kitchen_wall":
      kitchenWall(b, w, d, h);
      return "no"; // hangs on the wall
    case "kitchen_tall":
      kitchenTall(b, w, d, h);
      return "yes";
    case "island":
      island(b, w, d, h);
      return "yes";
    case "worktop":
      worktopOnly(b, w, d, h);
      return "no";
    case "dishwasher":
      dishwasher(b, w, d, h);
      return "yes";
    case "washer":
      laundry(b, w, d, h, false);
      return "yes";
    case "dryer":
      laundry(b, w, d, h, true);
      return "yes";
    case "bunk_bed":
      bunkBed(b, w, d, h);
      return "yes";
    case "table_round":
      roundTable(b, w, d, h);
      return "yes";
    case "coffee_table":
      coffeeTable(b, w, d, h);
      return "yes";
    case "tv_wall":
      tvWall(b, w, d, h, f.ambilight === 0 ? EDGE_FURN : undefined);
      return "no";
    case "parking": {
      // only the marking of the spot: a vehicle standing in it is added by the viewer
      const y = 0.012;
      const corners: [number, number][] = [[-w / 2, -d / 2], [w / 2, -d / 2], [w / 2, d / 2], [-w / 2, d / 2]];
      corners.forEach(([x, z], i) => b.seg(x, y, z, corners[(i + 1) % 4][0], y, corners[(i + 1) % 4][1], EDGE_FAINT));
      // an arrow head at the front: the direction the vehicle faces
      b.seg(-w * 0.15, y, d / 2 - 0.45, 0, y, d / 2 - 0.2, EDGE_FURN);
      b.seg(0, y, d / 2 - 0.2, w * 0.15, y, d / 2 - 0.45, EDGE_FURN);
      return "no";
    }
    case "robot_vacuum":
      // only the dock: the robot itself is drawn (and moved) by the viewer
      b.block({ x: [-w * 0.45, w * 0.45], y: [0, h], z: [-d / 2, -d / 2 + d * 0.3] }, M.white, EDGE_FURN);
      b.block({ x: [-w * 0.2, w * 0.2], y: [h * 0.5, h * 0.62], z: [-d / 2 + d * 0.3, -d / 2 + d * 0.31] }, M.accent);
      return "no";
    case "radiator":
      radiator(b, w, d, h);
      return "no"; // on the wall
    case "inverter":
      inverter(b, w, d, h, f.variant ?? null);
      return "no";
    case "grid_point":
      gridCabinet(b, w, d, h);
      return "yes";
    case "wallbox":
      wallbox(b, w, d, h);
      return "no";
    case "meter":
      meterCabinet(b, w, d, h);
      return "no";
    case "home_battery":
      homeBattery(b, w, d, h, f.variant ?? null);
      return f.variant === "wall" ? "no" : "yes";
    default: {
      const item = packItem(f.type);
      if (!item) {
        b.block({ x: [-w / 2, w / 2], y: [0, h], z: [-d / 2, d / 2] }, M.body, EDGE_FURN);
        return "yes";
      }
      // a pet is drawn by the view's own layer, where it walks around
      if (item.pet) return "no";
      packModel(b, item, w, d, h, base, null, null, f.variant ?? null);
      // items on furniture, walls or ceilings cast no shadow on the floor
      return base > 0.05 ? "no" : "yes";
    }
  }
}

function buildFurniture(buf: GeoBuffer, lines: LineBuffer, shadow: GeoBuffer, f: Furniture, base: number): void {
  const plan = placement(f);
  const b = new Builder(buf, lines, plan);
  const [w, d, h] = [Math.max(0.05, f.w), Math.max(0.05, f.d), Math.max(0.005, f.h)];
  if (drawBuiltIn(b, f, w, d, h, base) === "yes") contactShadow(shadow, plan, w, d, f.type === "plant" ? 0.35 : 0.5);
}

/**
 * Draws a piece of furniture. A mirrored item needs no rewinding here: boxes, lofts and upright cylinders wind themselves
 * counter-clockwise, and lying cylinders and the contact shadow rewind themselves when the transform mirrors.
 */
export function pushFurniture(buf: GeoBuffer, lines: LineBuffer, shadow: GeoBuffer, f: Furniture, base = 0): void {
  // pack items place their parts at `base` themselves; built-in models are drawn on the floor and lifted as a whole (a dryer on the
  // washer, a shelf on the wall), without a shadow on the floor. The mount height is absolute: a wall cabinet drawn at 1.45 m
  // moves by the difference, up or down.
  const lift = packItem(f.type) ? 0 : base - builtinBase(f);
  if (packItem(f.type) || Math.abs(lift) < 0.001) return buildFurniture(buf, lines, shadow, f, base);
  const [firstVertex, firstLine] = [buf.p.length, lines.p.length];
  buildFurniture(buf, lines, base < 0.05 ? shadow : new GeoBuffer(), f, 0);
  for (let i = firstVertex + 1; i < buf.p.length; i += 3) buf.p[i] += lift;
  for (let i = firstLine + 1; i < lines.p.length; i += 3) lines.p[i] += lift;
}

