// Solar fields on the roof, the walls and in the garden, split into modules in solar/. Plain geometry without three.js,
// so the editor (plan) and the viewer (3D) share it.

export type { V3 } from "./solar/vec.ts";
export { GROUND, fieldFace, groundFace, groundFloor, roofFaces, topFloor, wallFaces, type RoofFace } from "./solar/faces.ts";
export {
  LIFT, MODULE_GAP, MODULE_H, MODULE_W, ROOF_WINDOW_H, ROOF_WINDOW_W,
  CHIMNEY_SIZE, chimneyAsField, chimneyPlace, chimneySize, clampField, fieldCenter, fieldModules, fieldPlan, fieldSize, moduleSize, rowCounts, rowPitch, windowAsField, windowCorners,
  type SolarModule,
} from "./solar/fields.ts";
export { moveField, proposeChimney, proposeField, proposeGroundField, proposeWallField, proposeWindow, turnGroundField } from "./solar/placing.ts";
export { bestFace, faceAt, faceCompass, onFace, onField, pointOnFace, rayOnFace } from "./solar/picking.ts";
