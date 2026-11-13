// Moving and state-dependent parts of doors and windows, split into modules in openings/.

export { buildOpeningParts, openingSlots } from "./openings/parts.ts";
export { CLOSED, type OpeningParts, type OpeningState } from "./openings/types.ts";
