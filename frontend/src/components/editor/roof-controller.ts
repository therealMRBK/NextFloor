// The roof tool's state and actions: which section, roof window or solar field is selected, and everything that adds, changes or
// removes them. The forms and the plan canvas read its selection; the pointer code of the editor sets it.

import { chimneyAsField, clampField, bestFace, fieldFace, proposeChimney, proposeField, proposeGroundField, proposeWallField, proposeWindow, roofFaces, windowAsField } from "../../solar.ts";
import { floorOutline, polygonBox, proposeDormer, roofSectionsFromRooms } from "../../roof-sections.ts";
import { uid, type Building, type Floor, type RoofChimney, type RoofSection, type RoofWindow, type SolarField, type SolarString, type Vec2 } from "../../model.ts";
import type { EditorHost } from "./host.ts";
import { copyOfSection, removeRoofCorner, sectionFromRectangle } from "./ops/roof.ts";
import { assignString, pruneStrings, toggledSkip } from "./ops/solar.ts";

export interface RoofContext {
  readonly host: EditorHost;
  /** The floor the plan shows. */
  floorId(): string | null;
  setFloorId(id: string): void;
  confirm(text: string): boolean;
  /** The selection changed, so the editor should draw again. */
  refresh(): void;
}

const thousandths = (v: number) => Math.round(v * 1000) / 1000;

export class RoofController {
  private readonly ctx: RoofContext;
  private sectionSel: string | null = null;
  private windowSel: string | null = null;
  private chimneySel: string | null = null;
  private fieldSel: string | null = null;
  private pickMode = false;

  constructor(ctx: RoofContext) {
    this.ctx = ctx;
  }

  // selection: the setters ask the editor to draw again

  get sectionId(): string | null {
    return this.sectionSel;
  }
  set sectionId(id: string | null) {
    this.sectionSel = id;
    this.ctx.refresh();
  }

  get windowId(): string | null {
    return this.windowSel;
  }
  set windowId(id: string | null) {
    this.windowSel = id;
    this.ctx.refresh();
  }

  get chimneyId(): string | null {
    return this.chimneySel;
  }
  set chimneyId(id: string | null) {
    this.chimneySel = id;
    if (id) this.windowSel = null;
    this.ctx.refresh();
  }

  get solarId(): string | null {
    return this.fieldSel;
  }
  set solarId(id: string | null) {
    this.fieldSel = id;
    this.ctx.refresh();
  }

  /** Whether clicking a module of the selected field switches it off or on. */
  get picking(): boolean {
    return this.pickMode;
  }
  set picking(on: boolean) {
    this.pickMode = on;
    this.ctx.refresh();
  }

  private get doc() {
    return this.ctx.host.doc;
  }
  private get settings() {
    return this.doc.settings.roof;
  }
  private get admin() {
    return this.ctx.host.admin;
  }

  get section(): RoofSection | undefined {
    return this.sectionSel ? this.settings.sections?.find((s) => s.id === this.sectionSel) : undefined;
  }
  get window(): RoofWindow | undefined {
    return this.windowSel ? this.settings.windows?.find((w) => w.id === this.windowSel) : undefined;
  }
  get chimney(): RoofChimney | undefined {
    return this.chimneySel ? this.settings.chimneys?.find((c) => c.id === this.chimneySel) : undefined;
  }
  get field(): SolarField | undefined {
    return this.fieldSel ? this.settings.solar?.find((f) => f.id === this.fieldSel) : undefined;
  }

  /** A section is fixed by its own lock or by the lock on the whole plan. */
  isFixed(section: RoofSection | undefined): boolean {
    return !!section && (!!section.locked || !!this.doc.settings.lock_plan);
  }

  // roof sections

  /** Switches to a roof of sections. Without sections yet (or when asked to start over) they are proposed from the rooms. */
  useSections(regenerate = false): void {
    if (!this.admin) return;
    const had = (this.settings.sections ?? []).length > 0;
    if (regenerate && had && !this.ctx.confirm(this.ctx.host.t("roof_regen_confirm"))) return;
    this.ctx.host.change((doc) => {
      doc.settings.roof.type = "custom";
      if (regenerate || !had) doc.settings.roof.sections = roofSectionsFromRooms(doc, () => uid("roof"));
    });
    this.sectionId = null;
  }

  addSection(lo: Vec2, hi: Vec2): void {
    if (!this.admin) return;
    const section = sectionFromRectangle(this.doc, lo, hi);
    this.ctx.host.change((doc) => {
      doc.settings.roof.type = "custom";
      doc.settings.roof.sections = [...(doc.settings.roof.sections ?? []), section];
    });
    this.sectionId = section.id;
  }

  /** A flat section takes the outline of the floor shown (its rooms at the outer wall faces) as its shape. */
  takeOutline(): void {
    const floor = this.ctx.host.floor;
    if (!floor || !this.sectionSel || !this.admin) return;
    const { wall_exterior, wall_interior } = this.doc.settings;
    const outline = floorOutline(floor.rooms, floor.walls ?? [], wall_exterior, wall_interior, !!this.doc.settings.rooms_as_drawn);
    if (!outline) return;
    const points = outline.map(([x, z]) => [thousandths(x), thousandths(z)] as Vec2);
    this.patchSection({ shape: "flat", points, ...polygonBox(points) });
  }

  /** A dormer on one side of the selected section, in its middle. The dormer becomes the selection. */
  addDormer(side: "a" | "b"): void {
    const parent = this.section;
    if (!parent || !this.admin) return;
    const dormer = proposeDormer(parent, side, uid("roof"));
    this.ctx.host.change((doc) => {
      doc.settings.roof.sections = [...(doc.settings.roof.sections ?? []), dormer];
    });
    this.sectionId = dormer.id;
  }

  patchSection(patch: Partial<RoofSection>): void {
    const id = this.sectionSel;
    if (!id || !this.admin) return;
    this.ctx.host.change((doc) => {
      const section = doc.settings.roof.sections?.find((s) => s.id === id);
      if (section) Object.assign(section, patch);
    });
  }

  /** Takes a corner of the selected free flat roof away. */
  removeCorner(index: number): void {
    const id = this.sectionSel;
    if (!id || !this.admin) return;
    this.ctx.host.change((doc) => {
      const section = doc.settings.roof.sections?.find((s) => s.id === id);
      if (section) removeRoofCorner(section, index);
    });
  }

  removeSection(): void {
    const id = this.sectionSel;
    if (!id || !this.admin) return;
    this.ctx.host.change((doc) => (doc.settings.roof.sections = (doc.settings.roof.sections ?? []).filter((s) => s.id !== id)));
    this.sectionId = null;
  }

  duplicateSection(): void {
    const original = this.section;
    if (!original || !this.admin) return;
    const copy = copyOfSection(original);
    this.ctx.host.change((doc) => (doc.settings.roof.sections = [...(doc.settings.roof.sections ?? []), copy]));
    this.sectionId = copy.id;
  }

  // roof windows

  addWindow(): void {
    if (!this.admin) return;
    const north = this.doc.settings.north ?? 0;
    const face = bestFace(roofFaces(this.doc).filter((f) => !f.flat), north) ?? roofFaces(this.doc)[0];
    if (!face) return;
    const created = proposeWindow(face, uid("rwin"));
    this.ctx.host.change((doc) => (doc.settings.roof.windows = [...(doc.settings.roof.windows ?? []), created]));
    this.windowSel = created.id;
    this.sectionId = null;
  }

  /** Changes the selected roof window. It is moved back onto its face when the change made it overhang. */
  patchWindow(patch: Partial<RoofWindow>): void {
    const id = this.windowSel;
    if (!id || !this.admin) return;
    this.ctx.host.change((doc) => {
      const target = doc.settings.roof.windows?.find((w) => w.id === id);
      if (!target) return;
      Object.assign(target, patch);
      const face = roofFaces(doc).find((f) => f.key === target.face);
      if (face) Object.assign(target, clampField(face, windowAsField(target)));
    });
  }

  removeWindow(): void {
    const id = this.windowSel;
    if (!id || !this.admin) return;
    this.ctx.host.change((doc) => (doc.settings.roof.windows = (doc.settings.roof.windows ?? []).filter((w) => w.id !== id)));
    this.windowId = null;
  }

  // chimneys

  /** Adds a brick chimney near the ridge of the first pitched face (else the first face). */
  addChimney(): void {
    if (!this.admin) return;
    const faces = roofFaces(this.doc);
    const face = faces.find((f) => !f.flat) ?? faces[0];
    if (!face) return;
    const created = proposeChimney(face, uid("chim"));
    this.ctx.host.change((doc) => (doc.settings.roof.chimneys = [...(doc.settings.roof.chimneys ?? []), created]));
    this.chimneySel = created.id;
    this.windowSel = null;
    this.sectionId = null;
  }

  /** Changes the selected chimney; it is moved back onto its face when the change made it overhang. */
  patchChimney(patch: Partial<RoofChimney>): void {
    const id = this.chimneySel;
    if (!id || !this.admin) return;
    this.ctx.host.change((doc) => {
      const target = doc.settings.roof.chimneys?.find((c) => c.id === id);
      if (!target) return;
      Object.assign(target, patch);
      const face = roofFaces(doc).find((f) => f.key === target.face);
      if (face) Object.assign(target, clampField(face, chimneyAsField(target, face)));
    });
  }

  removeChimney(): void {
    const id = this.chimneySel;
    if (!id || !this.admin) return;
    this.ctx.host.change((doc) => (doc.settings.roof.chimneys = (doc.settings.roof.chimneys ?? []).filter((c) => c.id !== id)));
    this.chimneyId = null;
  }

  // solar fields

  /** Adds a field on the sunniest face that has none yet (else the sunniest one). */
  addField(): void {
    if (!this.admin) return;
    const faces = roofFaces(this.doc);
    const used = new Set((this.settings.solar ?? []).map((f) => f.face));
    const north = this.doc.settings.north ?? 0;
    const face = bestFace(faces.filter((f) => !used.has(f.key)), north) ?? bestFace(faces, north);
    if (!face) return;
    this.appendField(proposeField(face, uid("pv")));
    this.sectionSel = null;
  }

  addWallField(): void {
    const floorId = this.ctx.floorId() ?? this.doc.floors[0]?.id;
    const created = this.admin && floorId ? proposeWallField(this.doc, uid("pv"), floorId) : null;
    if (created) this.appendField(created);
  }

  addGroundField(): void {
    if (this.admin) this.appendField(proposeGroundField(this.doc, uid("pv")));
  }

  private appendField(field: SolarField): void {
    this.ctx.host.change((doc) => (doc.settings.roof.solar = [...(doc.settings.roof.solar ?? []), field]));
    this.solarId = field.id;
  }

  /** Selects a field. One on a house wall brings up its floor in the plan. */
  selectField(id: string): void {
    this.fieldSel = id;
    this.sectionSel = null;
    const field = this.settings.solar?.find((f) => f.id === id);
    if (field?.face.startsWith("wall:")) this.ctx.setFloorId(field.face.split(":")[1]);
    this.ctx.refresh();
  }

  /** Changes the selected field. A larger one (more rows, landscape) moves back so that it stays on its face. */
  patchField(patch: Partial<SolarField>): void {
    this.editField((field, doc) => {
      Object.assign(field, patch);
      const face = fieldFace(doc, field);
      if (face) Object.assign(field, clampField(face, field));
    });
  }

  toggleCell(cell: string): void {
    this.editField((field) => (field.skip = toggledSkip(field.skip, cell)));
  }

  private editField(edit: (field: SolarField, doc: Building) => void): void {
    const id = this.fieldSel;
    if (!id || !this.admin) return;
    this.ctx.host.change((doc) => {
      const field = doc.settings.roof.solar?.find((f) => f.id === id);
      if (field) edit(field, doc);
    });
  }

  /** Puts the selected field into a string ("new" makes one) or takes it out (null). */
  setString(value: string | null): void {
    const id = this.fieldSel;
    if (!id || !this.admin) return;
    this.ctx.host.change((doc) => assignString(doc.settings.roof, id, value, { id: uid("str"), name: (n) => this.ctx.host.t("solar_string_n", { n }) }));
  }

  /** Changes the string of the selected field. */
  patchString(patch: Partial<SolarString>): void {
    const stringId = this.field?.string;
    if (!stringId || !this.admin) return;
    this.ctx.host.change((doc) => {
      const target = doc.settings.roof.strings?.find((s) => s.id === stringId);
      if (target) Object.assign(target, patch);
    });
  }

  removeField(): void {
    const id = this.fieldSel;
    if (!id || !this.admin) return;
    this.ctx.host.change((doc) => {
      doc.settings.roof.solar = (doc.settings.roof.solar ?? []).filter((f) => f.id !== id);
      pruneStrings(doc.settings.roof);
    });
    this.solarId = null;
  }

  /** The floors the roof tool offers to look at, top floor first. */
  floorsTopDown(): Floor[] {
    return [...this.doc.floors].sort((a, b) => b.elevation - a.elevation);
  }
}
