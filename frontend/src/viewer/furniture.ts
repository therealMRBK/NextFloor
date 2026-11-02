// Procedural low-poly furniture in the neon look, split into modules in furniture/.

export { flipWinding } from "./furniture/builder.ts";
export { pushFurniture } from "./furniture/furniture.ts";
export { FRIDGE_DOOR, RADIATOR_Y, pushFridgeDoors } from "./furniture/kitchen.ts";
export { pushPackGlow, pushPackLamp, pushPackMoving } from "./furniture/packs.ts";
export { pictureRect, screenRect } from "./furniture/screens.ts";
