// The small bits of state of the side panel's floor and room forms: which folding parts are open, the typed shift of a floor, the
// spot grid being planned, and the line shown after something was done. Setters ask the editor to draw again.

import type { FurnitureType } from "../../model.ts";

/** The plan for a grid of spot lights in a room, before it is placed. */
export interface SpotDraft {
  type: FurnitureType;
  rows: number;
  cols: number;
  /** The light all spots follow, or null for none. */
  entity: string | null;
}

export class SideState {
  private readonly onChange: () => void;
  private menuOpen = false;
  private packagesOpen = false;
  private draft: SpotDraft | null = null;
  private shiftXMetres = 0;
  private shiftZMetres = 0;
  private wholeHouse = false;
  private line: string | null = null;
  private query = "";
  private source: "area" | "other" | "none" = "area";
  private unfolded = new Set<string>();
  private copyChoice: { furniture: boolean; devices: boolean; outdoor: boolean } | null = null;

  constructor(onChange: () => void) {
    this.onChange = onChange;
  }

  /** The list of Home Assistant floors to start a new floor from is open. */
  get floorMenu(): boolean {
    return this.menuOpen;
  }
  set floorMenu(open: boolean) {
    this.menuOpen = open;
    this.onChange();
  }

  /** The choices for copying the floor while that dialog is open, else null. */
  get floorCopy(): { furniture: boolean; devices: boolean; outdoor: boolean } | null {
    return this.copyChoice;
  }
  set floorCopy(choice: { furniture: boolean; devices: boolean; outdoor: boolean } | null) {
    this.copyChoice = choice;
    this.onChange();
  }

  /** The list of room packages is open. */
  get packages(): boolean {
    return this.packagesOpen;
  }
  set packages(open: boolean) {
    this.packagesOpen = open;
    this.onChange();
  }

  get spots(): SpotDraft | null {
    return this.draft;
  }
  set spots(draft: SpotDraft | null) {
    this.draft = draft;
    this.onChange();
  }

  get shiftX(): number {
    return this.shiftXMetres;
  }
  set shiftX(metres: number) {
    this.shiftXMetres = metres;
    this.onChange();
  }

  get shiftZ(): number {
    return this.shiftZMetres;
  }
  set shiftZ(metres: number) {
    this.shiftZMetres = metres;
    this.onChange();
  }

  /** Moving and turning apply to every floor together with the roof and meter. */
  get shiftAll(): boolean {
    return this.wholeHouse;
  }
  set shiftAll(all: boolean) {
    this.wholeHouse = all;
    this.onChange();
  }

  /** The line under the forms that tells what the last action did. */
  get notice(): string | null {
    return this.line;
  }
  set notice(text: string | null) {
    this.line = text;
    this.onChange();
  }

  /** The text typed into the search box of the device list. */
  get deviceQuery(): string {
    return this.query;
  }
  set deviceQuery(text: string) {
    this.query = text;
    this.onChange();
  }

  /** Where the device list takes its entities from: the room's area, other areas, or entities without an area. */
  get deviceSource(): "area" | "other" | "none" {
    return this.source;
  }
  set deviceSource(source: "area" | "other" | "none") {
    this.source = source;
    this.query = "";
    this.onChange();
  }

  /** The devices whose further entities are shown in the list. */
  isUnfolded(id: string): boolean {
    return this.unfolded.has(id);
  }
  toggleUnfolded(id: string): void {
    const next = new Set(this.unfolded);
    if (!next.delete(id)) next.add(id);
    this.unfolded = next;
    this.onChange();
  }
}
