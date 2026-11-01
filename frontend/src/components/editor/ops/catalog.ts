// The furniture library sorted by what an item is (sofas, beds, kitchen …) instead of where it comes from, the categories that fit a
// room by its name, and items of one model in several sizes folded into one card. Pure functions over ids, names and sizes.

export const CATEGORIES = [
  "lights",
  "seating",
  "tables",
  "storage",
  "beds",
  "kitchen",
  "appliances",
  "bath",
  "media",
  "office",
  "tech",
  "climate",
  "energy",
  "garden",
  "plants",
  "kids",
  "fitness",
  "pets",
  "workshop",
  "vehicles",
  "building",
  "seasonal",
  "art",
  "decor",
] as const;

export type Category = (typeof CATEGORIES)[number];

/** What the catalogue needs to know about an item. */
export interface CatalogEntry {
  type: string;
  /** The built-in group ("living", "kitchen" …) or the pack id ("nextfloor.a_kueche"). */
  source: string;
  /** Item id inside its pack, or the built-in type. */
  id: string;
  /** Size in metres [w, d, h]. */
  size: readonly [number, number, number];
  lamp?: boolean;
  electric?: boolean;
  vehicle?: boolean;
  climate?: boolean;
}

// built-in types first: their group says little ("living" holds sofas and plants), so each type is named
const BUILT_IN: Record<string, Category> = {
  sofa: "seating",
  armchair: "seating",
  stool: "seating",
  chair: "seating",
  bench: "seating",
  corner_bench: "seating",
  bar_stool: "seating",
  office_chair: "office",
  coffee_table: "tables",
  table: "tables",
  table_round: "tables",
  desk: "office",
  worktop: "kitchen",
  tv_board: "media",
  tv_wall: "media",
  sideboard: "storage",
  shelf: "storage",
  tall_cabinet: "storage",
  wardrobe: "storage",
  dresser: "storage",
  nightstand: "beds",
  coat_rack: "storage",
  plant: "plants",
  rug: "decor",
  kitchen: "kitchen",
  kitchen_wall: "kitchen",
  kitchen_tall: "kitchen",
  island: "kitchen",
  sink: "kitchen",
  stove: "kitchen",
  dishwasher: "appliances",
  fridge: "appliances",
  washer: "appliances",
  dryer: "appliances",
  robot_vacuum: "appliances",
  bed: "beds",
  bunk_bed: "beds",
  bathtub: "bath",
  shower: "bath",
  wc: "bath",
  washbasin: "bath",
  radiator: "climate",
  stairs: "building",
  studio: "storage",
  parking: "vehicles",
  ceiling_fan: "lights",
};

// pack items by words in their id, checked in this order (the first hit wins)
const RULES: [RegExp, Category][] = [
  // the expansion packs, whose ids would otherwise land in a neighbour's category (a studio monitor is no office monitor)
  [/xmas|advent|window_star|light_chain|pumpkin|easter|snowman|nativity/, "seasonal"],
  [/^frame_|^canvas_|gallery_wall|wall_clock|mirror_round_wall|neon_sign|moss_wall/, "art"],
  [/vinyl|guitar|digital_piano|drum_kit|dj_desk|studio_monitors/, "media"],
  [/camera_|motion_sensor|leak_sensor|temp_sensor|air_quality|ha_green|zigbee|mini_pc|^ups$|poe_switch|voice_puck|video_doorbell|smart_lock|robot_window|laser_engraver|wall_tablet|^globe$/, "tech"],
  [/ir_heater|instant_heater|oil_tank|water_tank|infrared_cabin/, "climate"],
  [/ebike_charger/, "energy"],
  [/espresso|grinder|air_fryer|bread_maker|water_bubbler|ice_maker|rice_cooker|kitchen_machine|pizza_oven_counter/, "appliances"],
  [/wine_rack|dish_rack|fruit_bowl|open_shelf_kitchen/, "kitchen"],
  [/clawfoot|urinal|cold_plunge/, "bath"],
  [/fruit_bushes|bamboo|rose_bush|lavender|boxwood|palm|ficus|fiddle|cactus|olive|snake_plant|vase_tall|vegetable_bed|herb_spiral/, "plants"],
  [/pond|fountain|water_feature|sandbox|beach_chair|wood_pile|bird_house|bird_bath|insect_hotel|compost|tool_shed|bike_garage|carport|swim_spa|^slide$|playhouse|football_goal|table_tennis|basketball|kamado|smoker|pizza_oven_garden|light_poles|daybed/, "garden"],
  [/lamp|pendant|light_pillar|light_bars|mood_spot|ceiling_panel|garden_spots|wall_light|light_cove|niche_led|shelf_led|monitor_light|workshop_light|painting_light|cabinet_light|moon_light|torch|lantern|ceiling_fan_light/, "lights"],
  [/cat_|dog_|pet_|litter|scratch|hamster|rabbit|bird_cage|small_animal|aquarium|terrarium/, "pets"],
  [/stairs|steps|landing|rail_|column|pilaster|beam|chimney|glass_wall|sliding_wall|half_wall|platform|niche_shelf|window_seat|divider_slats|gallery/, "building"],
  [/tree|shrub|conifer|hedge|brush|monstera|plant|herb_garden|flower|raised_bed|greenhouse/, "plants"],
  [/kids|toy|teepee|(^|_)play_|rocking_horse|ball_pit|house_bed|cot\b|^cot|crib|changing_table|baby|loft_bed|star_projector|moon_light/, "kids"],
  [/treadmill|fitness|power_rack|rowing|rower|spin_bike|dumbbell|punching|yoga|elliptical|gym|exercise|wall_bars|bike_trainer|kettlebell|weight_bench|massage_chair/, "fitness"],
  [/heat_pump|boiler|buffer_tank|manifold|ventilation|radiator|towel_heater|thermostat|air_purifier|humidifier|dehumidifier|tower_fan|ceiling_fan|hot_water|water_softener|water_pump|fireplace|wood_stove|patio_heater|sauna/, "climate"],
  [/wallbox|inverter|battery|solar|meter|fuse_box|grid/, "energy"],
  [/workbench|tool_|compressor|drill|tyre|paint_cabinet|heavy_shelf|shelf_rack|garage_opener|workshop|bike_stand|bike_holder|bike_rack|lawn_mower|mower/, "workshop"],
  [/speaker|subwoofer|soundbar|receiver|turntable|record|game_console|multiroom|hifi|cinema|acoustic|bass_trap|popcorn|projector|projection|screen|display_|smart_display|media|tv|arcade|star_ceiling|av_/, "media"],
  [/desk|office|filing|whiteboard|monitor|bookcase|phone_booth|sim_cockpit|chair_gaming|gaming/, "office"],
  [/server|nas|router|wifi|access_point|network|printer|filament|tower_pc|smoke_detector|siren|baby_monitor|sunrise_clock|light_switch|socket/, "tech"],
  [/grill|lounge|lounger|parasol|pergola|hot_tub|fire_bowl|torch|lantern|play_tower|garden|trampoline|sprinkler|valve|rain_barrel|outdoor|hammock|(^|_)pool|swing|bin_box|^bin_|mailbox|rotary_line/, "garden"],
  [/vanity_\d|vanity_double|double_vanity|basin|bath|shower|toilet|bidet|towel|mirror_cabinet|mirror_round|mirror_80|mirror_led|whirlpool|washer_under|laundry|wc/, "bath"],
  [/fridge|freezer|dishwasher|washer|dryer|microwave|coffee_machine|kettle|toaster|mixer|oven|steam|vacuum|ironing|drying_rack|trash|water_cooler|drip_tray/, "appliances"],
  [/base_|drawer_|sink|hob|cooker|hood|pantry|kitchen|island|breakfast_bar|wall_\d|wall_glass|wall_corner|row_|spice|cabinet_light|trolley|bar_cart|utility_sink/, "kitchen"],
  [/bed|boxspring|futon|nightstand|canopy|mattress/, "beds"],
  [/sofa|chair|armchair|stool|bench|pouf|bean_bag|recliner|wingback|chaise|seat|ektorp|poang|cosy_corner|swing_bench|hanging_chair|nook/, "seating"],
  [/table|dining|coffee_|side_round|lack_|^console$|bekant|alex/, "tables"],
  [/wardrobe|closet|clothes_rail|chest|dresser|shelf|cabinet|sideboard|lowboard|highboard|kallax|billy|ivar|pax|besta|cube_|coat_stand|shoe_bench|divider|display_cabinet|wall_unit|malm_chest/, "storage"],
];

/** The category of an item. */
export function categoryOf(entry: CatalogEntry): Category {
  if (entry.vehicle) return "vehicles";
  if (entry.climate) return "climate";
  if (!entry.type.startsWith("pack:")) return entry.lamp ? "lights" : (BUILT_IN[entry.type] ?? "decor");
  // a glowing item (an aquarium, a fireplace) has a light too, so what it is decides before that it glows
  const hit = RULES.find(([pattern]) => pattern.test(entry.id));
  return hit ? hit[1] : entry.lamp ? "lights" : "decor";
}

// room names in German and English, and what belongs there besides lights (always offered)
const ROOMS: [RegExp, Category[]][] = [
  [/k(u|ü)che|kitchen|kochen/, ["kitchen", "appliances", "tables", "seating", "storage", "plants", "decor", "art", "seasonal"]],
  [/wohn|living|lounge|salon/, ["seating", "tables", "storage", "media", "plants", "decor", "art", "seasonal", "climate", "tech"]],
  [/\bess|dining/, ["tables", "seating", "storage", "plants", "decor", "art", "seasonal", "media"]],
  [/schlaf|bed|gast|guest/, ["beds", "storage", "seating", "tables", "decor", "art", "seasonal", "plants", "climate", "media"]],
  [/kind|kids|child|baby|spiel|play|nursery/, ["kids", "beds", "storage", "seating", "tables", "decor", "art", "seasonal"]],
  [/bad|bath|wc|toilet|dusch|shower|sauna/, ["bath", "appliances", "storage", "climate", "plants"]],
  [/b(u|ü)ro|office|arbeit|study|work/, ["office", "tech", "storage", "seating", "tables", "plants"]],
  [/kino|cinema|media|game|gaming|hifi/, ["media", "seating", "tables", "storage", "office"]],
  [/fitness|gym|sport|training/, ["fitness", "media", "storage", "climate"]],
  [/garage|carport|stellplatz|parking/, ["vehicles", "workshop", "energy", "storage", "garden"]],
  [/werkstatt|workshop|hobby|keller|cellar|basement|lager|storage/, ["workshop", "storage", "appliances", "energy", "climate", "fitness", "tech"]],
  [/hauswirtschaft|hwr|utility|laundry|wasch|technik|heiz|boiler/, ["appliances", "climate", "energy", "storage", "tech", "bath"]],
  [/flur|diele|hall|entr|eingang|corridor|treppe|stair/, ["storage", "seating", "decor", "art", "seasonal", "plants", "building"]],
  [/garten|garden|terrass|terrace|balkon|balcony|patio|hof|yard|pool/, ["garden", "plants", "seating", "tables", "pets", "kids", "seasonal"]],
];

/** The categories that fit a room by its name; null when the name says nothing (then the whole library shows). */
export function roomCategories(roomName: string | null | undefined): Set<Category> | null {
  const name = (roomName ?? "").toLowerCase();
  const hit = ROOMS.find(([pattern]) => pattern.test(name));
  return hit ? new Set<Category>(["lights", ...hit[1]]) : null;
}

/** The category a room is mostly furnished from (a kitchen's kitchen units, a bedroom's beds); null when the name says nothing. */
export function mainCategory(roomName: string | null | undefined): Category | null {
  const name = (roomName ?? "").toLowerCase();
  return ROOMS.find(([pattern]) => pattern.test(name))?.[1][0] ?? null;
}

/** Items that stand outside: garden, plants, vehicles. */
export const isOutdoorCategory = (category: Category): boolean => category === "garden" || category === "plants" || category === "vehicles";

/** One card of the library: an item, or one model in several sizes (the first is the one placed unless a size is picked). */
export interface CatalogCard {
  key: string;
  category: Category;
  entries: CatalogEntry[];
}

const sizeSuffix = /_(\d+(?:x\d+)?)$/;

/** Folds items of one model in several sizes (vanity_60, vanity_80 …) into one card; built-in types and vehicles stay on their own. */
export function cardsOf(entries: readonly CatalogEntry[]): CatalogCard[] {
  const cards = new Map<string, CatalogCard>();
  for (const entry of entries) {
    const category = categoryOf(entry);
    const base = entry.type.startsWith("pack:") && !entry.vehicle ? entry.id.replace(sizeSuffix, "") : entry.id;
    const key = `${entry.source}:${base}`;
    const card = cards.get(key);
    if (card && card.category === category) card.entries.push(entry);
    else cards.set(card ? `${key}:${entry.id}` : key, { key: card ? `${key}:${entry.id}` : key, category, entries: [entry] });
  }
  for (const card of cards.values()) card.entries.sort((a, b) => a.size[0] - b.size[0] || a.size[1] - b.size[1]);
  return [...cards.values()];
}

/** The label of a size chip: the width in cm, or the size in the item's id (2x2, 4x4) when several share a width. */
export function sizeLabel(entry: CatalogEntry, all: readonly CatalogEntry[]): string {
  const cm = (m: number) => Math.round(m * 100);
  const sameWidth = all.some((e) => e !== entry && cm(e.size[0]) === cm(entry.size[0]));
  return sameWidth ? (sizeSuffix.exec(entry.id)?.[1] ?? `${cm(entry.size[0])}×${cm(entry.size[2])}`) : `${cm(entry.size[0])}`;
}

/** The list a type was used in, with the newest first and at most `max` long. */
export function withRecent(recent: readonly string[], type: string, max = 12): string[] {
  return [type, ...recent.filter((t) => t !== type)].slice(0, max);
}
