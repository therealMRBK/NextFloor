// The plan as a picture (#122): one PNG per floor, seen from above, for tools that want a plain 2D plan (a Bluetooth tracker
// map, a floor plan card, a document). It draws the same clean plan as the printout, with the parts the user chooses.

import type { Building, Floor } from "../../model.ts";
import { floorAreas } from "../../geometry/living-area.ts";
import { floorSvg, type FloorDrawing, type PrintTexts } from "./print.ts";

export interface ImageChoice {
  furniture: boolean;
  dimensions: boolean;
  names: boolean;
}

/** The pixels of the picture's longer side. */
const LONG_SIDE = 2400;

/** The floor as an SVG picture of a fixed size. */
export function floorImageSvg(b: Building, floor: Floor, texts: PrintTexts, choice: ImageChoice): string {
  const draw: FloorDrawing = { ...choice, px: LONG_SIDE };
  return floorSvg(b, floor, floorAreas(b, floor), texts, draw);
}

/** Pixel size read from the SVG's own width and height. */
function sizeOf(svg: string): [number, number] {
  const w = Number(/\swidth="(\d+)"/.exec(svg)?.[1]);
  const h = Number(/\sheight="(\d+)"/.exec(svg)?.[1]);
  return [w || LONG_SIDE, h || LONG_SIDE];
}

/** An SVG drawn onto a canvas and saved as PNG. */
export async function svgToPng(svg: string): Promise<Blob> {
  const [w, h] = sizeOf(svg);
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
  try {
    const img = new Image();
    img.decoding = "async";
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("the plan image could not be drawn"));
      img.src = url;
    });
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    canvas.getContext("2d")!.drawImage(img, 0, 0, w, h);
    return await new Promise<Blob>((resolve, reject) => canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error("no image"))), "image/png"));
  } finally {
    URL.revokeObjectURL(url);
  }
}

/** A file name from a floor name: letters and digits, the rest turned into "-". */
export const imageFileName = (floorName: string): string => `${floorName.normalize("NFKD").replace(/[^\w]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase() || "floor"}.png`;

/** Hands a blob to the browser as a download. */
export function saveBlob(blob: Blob, name: string): void {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}
