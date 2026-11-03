// The furniture library in the side panel while furnishing: built-in models and every pack together, sorted by what they are (seating,
// beds, kitchen …). A search box, chips that narrow it to the room and to linkable, lit or outdoor items, favourites and the recently
// used ones on top, a card with a picture and the size for each item, and one card with size chips for a model that comes in several
// sizes. The big picture beside a card while the pointer rests on it stays as before.

import { html, nothing, type TemplateResult } from "lit";
import { iconPath } from "../../../icons.ts";
import { FURNITURE_GROUPS, FURNITURE_SIZE, LAMP_MODEL, isLamp, type FurnitureType } from "../../../model.ts";
import { furnitureName, packItemLabel, packLabel } from "../../../furniture-names.ts";
import { translate, type I18nKey } from "../../../i18n.ts";
import { furnitureSize, isElectric, packType, type FurniturePack } from "../../../packs.ts";
import { load3d } from "../../../load3d.ts";
import type { EditorHost } from "../host.ts";
import { CATEGORIES, cardsOf, isOutdoorCategory, mainCategory, roomCategories, sizeLabel, withRecent, type CatalogCard, type CatalogEntry, type Category } from "../ops/catalog.ts";
import { hasAllWords, wordsOf } from "../ops/library.ts";
import { thumbs } from "../thumbs.ts";

const STORAGE_KEY = "nextfloor.library2";
/** A stand-in for English names: the search also matches the English name of an item. */
const ENGLISH = { language: "en" } as Parameters<typeof translate>[0];

export interface Preview {
  type: string;
  /** The picture, or null while it is drawn. */
  url: string | null;
  left: number;
  top: number;
}

type Flag = "room" | "linkable" | "lit" | "outdoor";

interface Saved {
  /** Sections opened or closed by hand; the others follow the room (its main kind is open). */
  folded: Record<string, boolean>;
  favourites: string[];
  recent: string[];
  flags: Flag[];
}

export class LibraryState {
  private readonly onChange: () => void;
  private text = "";
  private saved: Saved;
  private shown: Preview | null = null;
  /** The size picked on a card with several sizes (card key -> type). */
  private readonly picked = new Map<string, string>();

  constructor(onChange: () => void) {
    this.onChange = onChange;
    this.saved = { folded: {}, favourites: [], recent: [], flags: ["room"] };
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) this.saved = { ...this.saved, ...(JSON.parse(raw) as Partial<Saved>) };
    } catch {
      // no storage: the defaults stand
    }
  }

  private store(patch: Partial<Saved>): void {
    this.saved = { ...this.saved, ...patch };
    this.onChange();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.saved));
    } catch {
      // no storage
    }
  }

  get query(): string {
    return this.text;
  }
  set query(text: string) {
    this.text = text;
    this.onChange();
  }

  isOpen(key: string, byDefault: boolean): boolean {
    return this.saved.folded[key] ?? byDefault;
  }
  toggle(key: string, byDefault: boolean): void {
    this.store({ folded: { ...this.saved.folded, [key]: !this.isOpen(key, byDefault) } });
  }

  has(flag: Flag): boolean {
    return this.saved.flags.includes(flag);
  }
  flip(flag: Flag): void {
    this.store({ flags: this.has(flag) ? this.saved.flags.filter((f) => f !== flag) : [...this.saved.flags, flag] });
  }

  get favourites(): readonly string[] {
    return this.saved.favourites;
  }
  isFavourite(type: string): boolean {
    return this.saved.favourites.includes(type);
  }
  toggleFavourite(type: string): void {
    this.store({ favourites: this.isFavourite(type) ? this.saved.favourites.filter((t) => t !== type) : [type, ...this.saved.favourites] });
  }

  get recent(): readonly string[] {
    return this.saved.recent;
  }
  used(type: string): void {
    this.store({ recent: withRecent(this.saved.recent, type) });
  }

  pickedOf(card: CatalogCard): CatalogEntry {
    const type = this.picked.get(card.key);
    return card.entries.find((e) => e.type === type) ?? card.entries[0];
  }
  pick(card: CatalogCard, type: string): void {
    this.picked.set(card.key, type);
    this.onChange();
  }

  get preview(): Preview | null {
    return this.shown;
  }

  hidePreview(): void {
    this.shown = null;
    this.onChange();
  }

  /** Draws a picture of the item (by the 3D bundle) and shows it left of the card the pointer is on. */
  async showPreview(type: string, button: HTMLElement, packs: readonly FurniturePack[]): Promise<void> {
    const box = button.getBoundingClientRect();
    const place = { left: Math.max(8, box.left - 196), top: Math.max(8, Math.min(window.innerHeight - 200, box.top + box.height / 2 - 95)) };
    this.shown = { type, url: null, ...place };
    this.onChange();
    try {
      const [w, d, h] = furnitureSize(type);
      const url = (await load3d()).furniturePreview({ type, w, d, h, variant: null, lamp: LAMP_MODEL[type] ?? null }, 180, [...packs]);
      if (this.shown?.type === type) this.shown = { type, url, ...place };
    } catch {
      this.shown = null;
    }
    this.onChange();
  }
}

export interface LibraryActions {
  add(type: string): void;
  /** Opens the furniture studio for a piece of one's own. */
  studio(): void;
  packs: readonly FurniturePack[];
}

interface Shown {
  card: CatalogCard;
  /** Names to show and to search by. */
  label: string;
  search: string;
  from: string;
}

/** Every item of the library as cards, with the names to show and search. */
function catalogue(host: EditorHost, packs: readonly FurniturePack[]): Shown[] {
  const language = host.hass?.language ?? "en";
  const builtIn = [...new Set(Object.values(FURNITURE_GROUPS).flat())];
  const entries: CatalogEntry[] = [
    ...builtIn.map((type) => ({ type, source: "builtin", id: type, size: FURNITURE_SIZE[type as FurnitureType], lamp: isLamp(type), electric: isElectric(type) })),
    ...packs.flatMap((pack) => pack.items.map((item) => ({ type: packType(pack.id, item.id), source: pack.id, id: item.id, size: item.size, lamp: !!item.light, electric: !!item.electric, vehicle: !!item.vehicle, climate: !!item.climate }))),
  ];
  const packTitle = new Map(packs.map((p) => [p.id, packLabel(p, language)]));
  const itemNames = new Map(packs.flatMap((p) => p.items.map((it) => [packType(p.id, it.id), it] as const)));
  return cardsOf(entries).map((card) => {
    const first = card.entries[0];
    const item = itemNames.get(first.type);
    // a card with several sizes is named without the size ("Vanity unit 60 cm" -> "Vanity unit")
    const name = item ? packItemLabel(item, first.type, language) : host.t(`furn_${first.type}` as I18nKey);
    const label = card.entries.length > 1 ? name.replace(/\s*\(?\d+([.,]\d+)?\s*(cm|x\s*\d+|×\s*\d+)?\)?\s*$/i, "").trim() || name : name;
    const search = card.entries
      .map((e) => {
        const it = itemNames.get(e.type);
        return it ? [...Object.values(it.name), packItemLabel(it, e.type, language)].join(" ") : translate(ENGLISH, `furn_${e.type}` as I18nKey);
      })
      .join(" ");
    return { card, label, search: `${search} ${host.t(`lib_cat_${card.category}` as I18nKey)}`, from: packTitle.get(first.source) ?? "NextFloor" };
  });
}

const matches = (shown: Shown, words: readonly string[]): boolean => hasAllWords(words, `${shown.label} ${shown.search} ${shown.from} ${shown.card.entries.map((e) => e.id.replace(/_/g, " ")).join(" ")}`);

const badgeOf = (entry: CatalogEntry): "light" | "switch" | null => (entry.lamp ? "light" : entry.electric ? "switch" : null);

function card(host: EditorHost, state: LibraryState, shown: Shown, actions: LibraryActions): TemplateResult {
  const t = host.t;
  const entry = state.pickedOf(shown.card);
  const [w, d] = entry.size;
  const badge = badgeOf(entry);
  const show = (e: Event) => void state.showPreview(entry.type, e.currentTarget as HTMLElement, actions.packs);
  const add = () => {
    state.used(entry.type);
    actions.add(entry.type);
  };
  const fav = state.isFavourite(entry.type);
  return html`<div class="nf-card">
    <button
      class="nf-card-main"
      title=${badge ? t(badge === "light" ? "lib_badge_light" : "lib_badge_electric") : shown.label}
      @click=${add}
      @mouseenter=${show}
      @focus=${show}
      @mouseleave=${() => state.hidePreview()}
      @blur=${() => state.hidePreview()}
    >
      ${thumbs.enabled ? html`<nf-thumb .type=${entry.type}></nf-thumb>` : nothing}
      <span class="nf-card-name"
        >${shown.label}${badge
          ? html`<svg class="nf-lib-badge" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${iconPath(badge)} /></svg>`
          : nothing}</span
      >
      <span class="nf-card-meta">${Math.round(w * 100)} × ${Math.round(d * 100)} cm · ${shown.from}</span>
    </button>
    <button class="nf-card-star" aria-pressed=${fav} title=${t(fav ? "lib_fav_remove" : "lib_fav_add")} @click=${() => state.toggleFavourite(entry.type)}>${fav ? "★" : "☆"}</button>
    ${shown.card.entries.length > 1
      ? html`<div class="nf-card-sizes" role="group" aria-label=${t("lib_sizes")}>
          ${shown.card.entries.map((e) => html`<button class="nf-size" aria-pressed=${e === entry} @click=${() => state.pick(shown.card, e.type)}>${sizeLabel(e, shown.card.entries)}</button>`)}
        </div>`
      : nothing}
  </div>`;
}

function grid(host: EditorHost, state: LibraryState, list: readonly Shown[], actions: LibraryActions): TemplateResult {
  return html`<div class="nf-cards">${list.map((s) => card(host, state, s, actions))}</div>`;
}

function section(host: EditorHost, state: LibraryState, key: string, title: string, list: readonly Shown[], actions: LibraryActions, byDefault: boolean): TemplateResult | typeof nothing {
  if (list.length === 0) return nothing;
  const open = state.isOpen(key, byDefault);
  return html`<button class="nf-lib-head nf-lib-toggle" aria-expanded=${open} @click=${() => state.toggle(key, byDefault)}>
      <span class="nf-lib-caret">${open ? "▾" : "▸"}</span>${title} <span class="nf-lib-count">${list.length}</span>
    </button>
    ${open ? grid(host, state, list, actions) : nothing}`;
}

/** The single cards for a list of types (favourites, recently used), in that order. */
function cardsFor(types: readonly string[], all: readonly Shown[]): Shown[] {
  return types.flatMap((type) => {
    const shown = all.find((s) => s.card.entries.some((e) => e.type === type));
    return shown ? [{ ...shown, card: { ...shown.card, key: `one:${type}`, entries: shown.card.entries.filter((e) => e.type === type) } }] : [];
  });
}

/** The sections in order: the room's main kind first, then what else fits the room, then the rest. */
function orderFor(roomName: string | undefined): Category[] {
  const main = mainCategory(roomName);
  const fits = roomCategories(roomName);
  const rank = (c: Category) => (c === main ? 0 : fits?.has(c) ? 1 : 2);
  return [...CATEGORIES].sort((a, b) => rank(a) - rank(b));
}

/** The library with its search box, filter chips and the sections by kind. */
export function renderLibrary(host: EditorHost, state: LibraryState, roomName: string | undefined, actions: LibraryActions): TemplateResult {
  const t = host.t;
  thumbs.packs = actions.packs;
  const all = catalogue(host, actions.packs);
  const words = wordsOf(state.query);
  const fits = roomCategories(roomName);
  const byRoom = !!fits && state.has("room") && words.length === 0;
  const filtered = all.filter((s) => {
    const entry = s.card.entries[0];
    if (byRoom && !fits.has(s.card.category)) return false;
    if (state.has("linkable") && !entry.lamp && !entry.electric) return false;
    if (state.has("lit") && !entry.lamp) return false;
    if (state.has("outdoor") && !isOutdoorCategory(s.card.category)) return false;
    return words.length === 0 || matches(s, words);
  });
  const chip = (flag: Flag, label: string) => html`<button class="nf-chip nf-lib-chip" aria-pressed=${state.has(flag)} @click=${() => state.flip(flag)}>${label}</button>`;
  const searching = words.length > 0;
  return html`<section>
      <h3>${t("furniture_add")}</h3>
      <p class="nf-sub">${roomName ? t("furniture_into", { room: roomName }) : t("furniture_pick_room")}</p>
      <button class="nf-btn nf-lib-studio" title=${t("studio_hint")} @click=${() => actions.studio()}>🛠️ ${t("studio_new")}</button>
      <input
        class="nf-search"
        type="search"
        placeholder=${t("furniture_search")}
        .value=${state.query}
        @input=${(e: Event) => (state.query = (e.target as HTMLInputElement).value)}
        @keydown=${(e: KeyboardEvent) => e.key === "Escape" && (state.query = "")}
      />
      <div class="nf-lib-chips">
        ${fits ? chip("room", t("lib_for_room", { room: roomName ?? "" })) : nothing} ${chip("linkable", `⚡ ${t("lib_linkable")}`)} ${chip("lit", `💡 ${t("lib_lit")}`)}
        ${chip("outdoor", `🌳 ${t("lib_outdoor")}`)}
      </div>
      ${searching && filtered.length === 0 ? html`<p class="nf-sub">${t("furniture_search_none")}</p>` : nothing}
      ${searching
        ? grid(host, state, filtered, actions)
        : html`${section(host, state, "favourites", `★ ${t("lib_favourites")}`, cardsFor(state.favourites, all), actions, true)}
          ${section(host, state, "recent", `🕘 ${t("lib_recent")}`, cardsFor(state.recent.slice(0, 6), all), actions, false)}
          ${orderFor(roomName).map((c: Category) => section(host, state, c, t(`lib_cat_${c}` as I18nKey), filtered.filter((s) => s.card.category === c), actions, c === (mainCategory(roomName) ?? "lights")))}
          ${byRoom ? html`<button class="nf-btn nf-lib-all" @click=${() => state.flip("room")}>${t("lib_all_rooms")}</button>` : nothing}`}
    </section>`;
}

/** The big picture shown beside a library card while the pointer rests on it. */
export function renderPreview(host: EditorHost, preview: Preview | null): TemplateResult | typeof nothing {
  if (!preview) return nothing;
  return html`<div class="nf-preview" style="left:${preview.left}px;top:${preview.top}px" aria-hidden="true">
    ${preview.url ? html`<img src=${preview.url} alt="" />` : html`<span class="nf-preview-wait"></span>`}
    <b>${furnitureName(host.hass, preview.type)}</b>
  </div>`;
}

