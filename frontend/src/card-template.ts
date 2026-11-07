// Card templates: a card set up once in the editor (Settings → Card templates) and chosen on a dashboard card with
// `template: kitchen_tablet`. The card's own options win over the template's.

import type { CardConfig } from "./card-config.ts";

export type CardTemplates = Record<string, Partial<CardConfig>>;

/** A template name made of letters, digits, `_` and `-`. */
export const templateKey = (name: string): string =>
  name
    .trim()
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9_-]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 40);

/** The card's config with its template (if it names one that exists) underneath; `type` and `template` stay the card's own. */
export function withTemplate(own: CardConfig, templates: CardTemplates | null | undefined): CardConfig {
  const name = own.template;
  const base = name ? templates?.[name] : undefined;
  if (!base) return own;
  const { type: _type, template: _template, ...rest } = base as CardConfig;
  const merged: CardConfig = { ...rest, ...own };
  return merged;
}
