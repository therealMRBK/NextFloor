// Where the screen of a TV or monitor is, for the glow shown while the linked device is on.

import { builtinBase, type Floor, type Furniture } from "../../model.ts";
import { fittedParts, mountBase, packItem } from "../../packs.ts";
import { RADIATOR_Y } from "./kitchen.ts";

export interface ScreenRect {
  x0: number;
  x1: number;
  y0: number;
  y1: number;
  z: number;
}

function builtInScreen(f: Furniture, w: number, d: number, h: number, floor?: Floor): ScreenRect | null {
  switch (f.type) {
    case "tv_board": {
      const width = Math.min(w * 0.8, 1.45);
      return { x0: -width / 2 + 0.02, x1: width / 2 - 0.02, y0: h + 0.12, y1: h + 0.08 + width * 0.56, z: -d / 2 + 0.165 };
    }
    case "tv_wall": {
      const y0 = 1.3 - h / 2;
      return { x0: -w / 2 + 0.02, x1: w / 2 - 0.02, y0: y0 + 0.02, y1: y0 + h - 0.02, z: d / 2 + 0.003 };
    }
    case "desk":
      return { x0: -0.28, x1: 0.28, y0: h + 0.1, y1: h + 0.4, z: -d / 2 + 0.115 };
    case "fridge_smart": {
      // the screen sits on the right door (mirrored: the door's u runs to the left from its hinge at +w/2)
      const base = floor ? mountBase(floor, f) : 0;
      return { x0: 0.06, x1: w / 2 - 0.06, y0: base + h * 0.52 + 0.01, y1: base + h * 0.86 - 0.01, z: d / 2 + 0.006 };
    }
    // glowing fronts of appliances that run, and of a radiator that heats
    case "radiator":
      return { x0: -w / 2 + 0.02, x1: w / 2 - 0.02, y0: RADIATOR_Y + 0.02, y1: RADIATOR_Y + h - 0.02, z: d / 2 + 0.004 };
    case "washer":
    case "dryer": {
      const cy = (h - 0.14) / 2 + 0.04;
      const r = Math.min(w * 0.36, (h - 0.2) * 0.42) * 0.8;
      return { x0: -r, x1: r, y0: cy - r, y1: cy + r, z: d / 2 - 0.004 };
    }
    case "dishwasher":
      return { x0: -w / 2 + 0.06, x1: w / 2 - 0.06, y0: h - 0.16, y1: h - 0.08, z: d / 2 - 0.004 };
    default:
      return null;
  }
}

function unmirrored(f: Furniture, floor?: Floor): ScreenRect | null {
  const [w, d, h] = [Math.max(0.05, f.w), Math.max(0.05, f.d), Math.max(0.005, f.h)];
  const item = packItem(f.type);
  const part = item && fittedParts(item, w, d, h).find((p) => p.screen);
  if (part) {
    // the screen part's front face, at the item's mount height
    const base = floor ? mountBase(floor, f) : 0;
    const [x0, x1] = [(part.x - part.w / 2) * w, (part.x + part.w / 2) * w];
    const inset = Math.min(0.02, (x1 - x0) * 0.05);
    return { x0: x0 + inset, x1: x1 - inset, y0: base + part.y * h + inset, y1: base + (part.y + part.h) * h - inset, z: (part.z + part.d / 2) * d };
  }
  // built-in models are lifted as a whole by their mount height
  const lift = floor && f.type !== "fridge_smart" ? mountBase(floor, f) - builtinBase(f) : 0;
  const rect = builtInScreen(f, w, d, h, floor);
  return rect && { ...rect, y0: rect.y0 + lift, y1: rect.y1 + lift };
}

/** The screen of a TV or monitor in local coordinates (x across, y up, z = its front face). Null for furniture without one. */
export function screenRect(f: Furniture, floor?: Floor): ScreenRect | null {
  const rect = unmirrored(f, floor);
  return rect && f.mirror ? { ...rect, x0: -rect.x1, x1: -rect.x0 } : rect;
}

/** The picture part of a frame (a pack item's part marked `picture`) in local coordinates, mirrored like the item; null without one. */
export function pictureRect(f: Furniture, floor?: Floor): ScreenRect | null {
  const [w, d, h] = [Math.max(0.05, f.w), Math.max(0.05, f.d), Math.max(0.005, f.h)];
  const item = packItem(f.type);
  const part = item && fittedParts(item, w, d, h).find((p) => p.picture);
  if (!part) return null;
  const base = floor ? mountBase(floor, f) : 0;
  const [x0, x1] = [(part.x - part.w / 2) * w, (part.x + part.w / 2) * w];
  const rect = { x0, x1, y0: base + part.y * h, y1: base + (part.y + part.h) * h, z: (part.z + part.d / 2) * d };
  return f.mirror ? { ...rect, x0: -rect.x1, x1: -rect.x0 } : rect;
}
