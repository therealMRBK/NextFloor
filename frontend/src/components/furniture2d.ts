// Top-view symbols of furniture for the 2D editor, in local metres (x across, z depth, front at +z).
// The editor places them with translate/rotate/scale; strokes keep their width on screen.

import { nothing, svg, type SVGTemplateResult } from "lit";
import { packItem, type PackItem } from "../packs.ts";

type Part = SVGTemplateResult;

const rect = (x0: number, z0: number, x1: number, z1: number, cls = "") => svg`<rect class=${cls} x=${Math.min(x0, x1)} y=${Math.min(z0, z1)} width=${Math.abs(x1 - x0)} height=${Math.abs(z1 - z0)} />`;
const line = (x0: number, z0: number, x1: number, z1: number, cls = "") => svg`<line class=${cls} x1=${x0} y1=${z0} x2=${x1} y2=${z1} />`;
const circle = (x: number, z: number, r: number, cls = "") => svg`<circle class=${cls} cx=${x} cy=${z} r=${r} />`;
const ellipse = (x: number, z: number, rx: number, rz: number, cls = "") => svg`<ellipse class=${cls} cx=${x} cy=${z} rx=${rx} ry=${rz} />`;

/** Door or drawer divisions along the front edge. */
function fronts(w: number, d: number, n: number): Part[] {
  const out: Part[] = [];
  for (let i = 1; i < n; i++) {
    const x = -w / 2 + (w / n) * i;
    out.push(line(x, d / 2, x, d / 2 - Math.min(0.12, d * 0.3)));
  }
  return out;
}

function seating(w: number, d: number, seats: number, arms: boolean): Part[] {
  const back = Math.min(0.24, d * 0.28);
  const arm = arms ? Math.min(0.2, w * 0.12) : 0;
  const out: Part[] = [rect(-w / 2, -d / 2, w / 2, -d / 2 + back, "nf-sym-fill")];
  if (arms) out.push(rect(-w / 2, -d / 2, -w / 2 + arm, d / 2, "nf-sym-fill"), rect(w / 2 - arm, -d / 2, w / 2, d / 2, "nf-sym-fill"));
  const inner = w - 2 * arm;
  for (let i = 1; i < seats; i++) {
    const x = -w / 2 + arm + (inner / seats) * i;
    out.push(line(x, -d / 2 + back, x, d / 2 - 0.02));
  }
  return out;
}

/** Symbol parts for a furniture type of size w × d (metres). */
export function furnitureSymbol(type: string, w: number, d: number): Part[] | typeof nothing {
  switch (type) {
    case "sofa":
      return seating(w, d, Math.max(1, Math.round((w - 0.4) / 0.62)), true);
    case "armchair":
      return seating(w, d, 1, true);
    case "bench":
      return [rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.08, "nf-sym-fill")];
    case "corner_bench": {
      const depth = Math.min(0.5, d * 0.4);
      return [
        rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.08, "nf-sym-fill"),
        rect(-w / 2, -d / 2, -w / 2 + 0.08, d / 2, "nf-sym-fill"),
        line(-w / 2 + depth, -d / 2 + depth, w / 2, -d / 2 + depth),
        line(-w / 2 + depth, -d / 2 + depth, -w / 2 + depth, d / 2),
      ];
    }
    case "chair":
      return [rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.06, "nf-sym-fill")];
    case "office_chair":
      return [circle(0, 0.03, Math.min(w, d) * 0.36), rect(-w * 0.35, -d / 2 + 0.02, w * 0.35, -d / 2 + 0.1, "nf-sym-fill")];
    case "bar_stool":
    case "table_round":
      return [circle(0, 0, Math.min(w, d) * 0.42)];
    case "stool":
      return [rect(-w / 2 + 0.04, -d / 2 + 0.04, w / 2 - 0.04, d / 2 - 0.04)];
    case "table":
    case "coffee_table":
    case "desk": {
      const out = [rect(-w / 2 + 0.05, -d / 2 + 0.05, w / 2 - 0.05, d / 2 - 0.05)];
      if (type === "desk") out.push(line(-0.3, -d / 2 + 0.1, 0.3, -d / 2 + 0.1, "nf-sym-strong"));
      return out;
    }
    case "bed":
    case "bunk_bed": {
      const pillows = w > 1.2 ? 2 : 1;
      const pw = (w - 0.2) / pillows;
      const out: Part[] = [rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.07, "nf-sym-fill"), line(-w / 2, -d / 2 + (d - 0.1) * 0.36, w / 2, -d / 2 + (d - 0.1) * 0.36)];
      for (let i = 0; i < pillows; i++) out.push(rect(-w / 2 + 0.13 + pw * i, -d / 2 + 0.12, -w / 2 + 0.07 + pw * (i + 1), -d / 2 + 0.12 + Math.min(0.4, d * 0.18)));
      return out;
    }
    case "nightstand":
    case "wardrobe":
    case "dresser":
    case "sideboard":
    case "tall_cabinet":
    case "kitchen":
    case "kitchen_wall":
    case "kitchen_tall":
    case "shelf":
      return fronts(w, d, type === "nightstand" || type === "tall_cabinet" || type === "kitchen_tall" ? 1 : Math.max(2, Math.round(w / 0.5)));
    case "coat_rack":
      return [rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.03, "nf-sym-fill"), ...fronts(w, d, Math.max(2, Math.round(w / 0.5)))];
    case "island":
      // cabinets on the back side, overhanging worktop on the front
      return [line(-w / 2, d / 2 - 0.3, w / 2, d / 2 - 0.3)];
    case "fridge":
      return [line(-w / 2 + 0.06, d / 2 - 0.04, w / 2 - 0.06, d / 2 - 0.04, "nf-sym-strong")];
    case "stove": {
      const r = Math.min(w, d) * 0.14;
      return [circle(-w * 0.22, -d * 0.2, r), circle(w * 0.22, -d * 0.2, r * 0.8), circle(-w * 0.22, d * 0.2, r * 0.8), circle(w * 0.22, d * 0.2, r)];
    }
    case "sink": {
      const bw = Math.min(0.5, w - 0.2);
      return [rect(-bw / 2, -d / 2 + 0.1, bw / 2, d / 2 - 0.08), circle(0, -d / 2 + 0.06, 0.025, "nf-sym-fill")];
    }
    case "dishwasher":
      return [line(-w / 2 + 0.08, d / 2 - 0.05, w / 2 - 0.08, d / 2 - 0.05, "nf-sym-strong")];
    case "washer":
    case "dryer":
      return [circle(0, 0.05, Math.min(w, d) * 0.3), line(-w / 2, -d / 2 + 0.1, w / 2, -d / 2 + 0.1)];
    case "bathtub":
      return [rect(-w / 2 + 0.07, -d / 2 + 0.07, w / 2 - 0.07, d / 2 - 0.07), circle(-w / 2 + 0.14, 0, 0.03, "nf-sym-fill")];
    case "shower":
      return [line(-w / 2, -d / 2, w / 2, d / 2), line(w / 2, -d / 2, -w / 2, d / 2), circle(0, 0, 0.04)];
    case "wc":
      return [rect(-w / 2, -d / 2, w / 2, -d / 2 + Math.min(0.18, d * 0.3), "nf-sym-fill"), ellipse(0, d * 0.1, w * 0.36, d * 0.3)];
    case "washbasin":
      return [ellipse(0, 0.03, w * 0.34, d * 0.3)];
    case "tv_board":
      return [line(-Math.min(w * 0.4, 0.72), -d / 2 + 0.14, Math.min(w * 0.4, 0.72), -d / 2 + 0.14, "nf-sym-strong"), ...fronts(w, d, Math.max(2, Math.round(w / 0.6)))];
    case "tv_wall":
      return [line(-w / 2, 0, w / 2, 0, "nf-sym-strong")];
    case "lamp_downlight":
    case "lamp_spot":
      return [circle(0, 0, Math.min(w, d) * 0.45, "nf-sym-fill"), circle(0, 0, Math.min(w, d) * 1.4)];
    case "lamp_bollard":
    case "lamp_garden":
      return [circle(0, 0, Math.min(w, d) * 0.5, "nf-sym-fill"), circle(0, 0, Math.min(w, d) * 1.6)];
    case "parking":
      // the spot's marking with an arrow head at the front
      return [rect(-w / 2 + 0.08, -d / 2 + 0.08, w / 2 - 0.08, d / 2 - 0.08), line(-w * 0.15, d / 2 - 0.5, 0, d / 2 - 0.22, "nf-sym-strong"), line(0, d / 2 - 0.22, w * 0.15, d / 2 - 0.5, "nf-sym-strong")];
    case "robot_vacuum":
      // dock at the back, the robot resting in front of it
      return [rect(-w * 0.45, -d / 2, w * 0.45, -d / 2 + d * 0.3, "nf-sym-fill"), circle(0, d * 0.14, Math.min(w, d) * 0.47)];
    case "radiator": {
      // fins along the front
      const out: Part[] = [];
      const n = Math.max(3, Math.round(w / 0.1));
      for (let i = 1; i < n; i++) out.push(line(-w / 2 + (w / n) * i, -d / 2, -w / 2 + (w / n) * i, d / 2));
      return out;
    }
    case "lamp_panel":
      return [rect(-w / 2 + 0.03, -d / 2 + 0.03, w / 2 - 0.03, d / 2 - 0.03, "nf-sym-fill")];
    case "lamp_uplight":
    case "lamp_ceiling":
    case "lamp_pendant":
    case "lamp_floor":
    case "lamp_table": {
      // a lamp from above: the shade, and short rays for hanging ones
      const r = Math.min(w, d) / 2;
      const out: Part[] = [circle(0, 0, r * 0.9, "nf-sym-fill"), circle(0, 0, r * 0.3)];
      if (type === "lamp_ceiling" || type === "lamp_pendant") {
        for (let i = 0; i < 8; i++) {
          const a = (i / 8) * Math.PI * 2;
          out.push(line(Math.cos(a) * r * 1.05, Math.sin(a) * r * 1.05, Math.cos(a) * r * 1.35, Math.sin(a) * r * 1.35));
        }
      }
      return out;
    }
    case "lamp_wall":
      return [rect(-w / 2, -d / 2, w / 2, -d / 2 + 0.03, "nf-sym-fill"), ellipse(0, 0.01, w * 0.4, d * 0.4)];
    case "led_strip":
      return [line(-w / 2, 0, w / 2, 0, "nf-sym-strong")];
    case "plant":
      return [circle(0, 0, Math.min(w, d) * 0.46), circle(0, 0, Math.min(w, d) * 0.25)];
    case "rug":
      return [rect(-w / 2 + 0.1, -d / 2 + 0.1, w / 2 - 0.1, d / 2 - 0.1)];
    case "stairs": {
      // steps and an arrow pointing up the stair (towards the back)
      const n = Math.max(3, Math.round(d / 0.26));
      const out: Part[] = [];
      for (let i = 1; i < n; i++) out.push(line(-w / 2, d / 2 - (d / n) * i, w / 2, d / 2 - (d / n) * i));
      out.push(line(0, d / 2 - 0.1, 0, -d / 2 + 0.25, "nf-sym-strong"), line(-0.15, -d / 2 + 0.45, 0, -d / 2 + 0.25, "nf-sym-strong"), line(0.15, -d / 2 + 0.45, 0, -d / 2 + 0.25, "nf-sym-strong"));
      return out;
    }
    default: {
      const item = packItem(type);
      return item ? packSymbol(item, w, d) : nothing;
    }
  }
}

/** Plan symbol of a pack item: its own symbol, or its parts seen from above (except the full-size base). */
function packSymbol(item: PackItem, w: number, d: number): Part[] {
  if (item.symbol?.length) {
    return item.symbol.map((s) =>
      s.shape === "rect"
        ? rect((s.x - s.w / 2) * w, (s.z - s.d / 2) * d, (s.x + s.w / 2) * w, (s.z + s.d / 2) * d, s.fill ? "nf-sym-fill" : "")
        : s.shape === "circle"
          ? circle(s.x * w, s.z * d, s.r * Math.min(w, d))
          : line(s.x1 * w, s.z1 * d, s.x2 * w, s.z2 * d),
    );
  }
  return item.parts
    .filter((p) => p.w < 0.98 || p.d < 0.98)
    .map((p) =>
      p.shape === "cyl" && (p.axis ?? "y") === "y"
        ? circle(p.x * w, p.z * d, Math.min(p.w * w, p.d * d) / 2)
        : rect((p.x - p.w / 2) * w, (p.z - p.d / 2) * d, (p.x + p.w / 2) * w, (p.z + p.d / 2) * d),
    );
}
