// Builds the NextFloor documentation site (English + German) from docs/content into tools/docs/dist.
//   node build.mjs            build
//   node build.mjs --check    build and fail on broken links, missing images or pages missing in one language
import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync, readdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { Marked } from "marked";

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, "../..");
const content = join(repo, "docs/content");
const out = resolve(here, process.argv.find((a) => a.startsWith("--out="))?.slice(6) ?? "dist");
const check = process.argv.includes("--check");
const SITE = "https://therealmrbk.github.io/NextFloor";
const GH = "https://github.com/therealMRBK/NextFloor";
const LANGS = ["en", "de"];
const version = JSON.parse(readFileSync(join(repo, "custom_components/nextfloor/manifest.json"), "utf8")).version;

const UI = {
  en: {
    docs: "Documentation", overview: "Overview", search: "Search", searchHint: "Type to search the documentation", searchNone: "Nothing found. Try fewer or other words.",
    searchFoot: "↑↓ choose · ↵ open · esc close", demo: "Live demo", github: "GitHub", menu: "Menu", onPage: "On this page", prev: "Previous", next: "Next",
    editPage: "Edit this page", report: "Found a mistake? Open an issue", copy: "Copy", theme: "Switch light and dark", skip: "Skip to content", lang: "Deutsch",
    footer: "NextFloor is free and MIT licensed. Made for Home Assistant.", home: "Documentation", tip: "Tip", note: "Note", warn: "Careful", danger: "Important",
    notFound: "This page does not exist", notFoundText: "The link may be old. Use the search or start from the overview.", toOverview: "To the overview",
  },
  de: {
    docs: "Dokumentation", overview: "Übersicht", search: "Suche", searchHint: "Tippen, um die Dokumentation zu durchsuchen", searchNone: "Nichts gefunden. Versuche weniger oder andere Wörter.",
    searchFoot: "↑↓ wählen · ↵ öffnen · Esc schließen", demo: "Live-Demo", github: "GitHub", menu: "Menü", onPage: "Auf dieser Seite", prev: "Zurück", next: "Weiter",
    editPage: "Diese Seite bearbeiten", report: "Fehler gefunden? Issue öffnen", copy: "Kopieren", theme: "Hell und Dunkel wechseln", skip: "Zum Inhalt springen", lang: "English",
    footer: "NextFloor ist kostenlos und MIT-lizenziert. Gemacht für Home Assistant.", home: "Dokumentation", tip: "Tipp", note: "Hinweis", warn: "Vorsicht", danger: "Wichtig",
    notFound: "Diese Seite gibt es nicht", notFoundText: "Der Link ist vielleicht alt. Nutze die Suche oder starte bei der Übersicht.", toOverview: "Zur Übersicht",
  },
};

const ICONS = {
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6"/>',
  moon: '<path d="M20 14.2A8 8 0 0 1 9.8 4a8 8 0 1 0 10.2 10.2Z"/>',
  copy: '<rect x="8.5" y="8.5" width="11" height="11" rx="2.2"/><path d="M15.5 8.5V6.7a2.2 2.2 0 0 0-2.2-2.2H6.7a2.2 2.2 0 0 0-2.2 2.2v6.6a2.2 2.2 0 0 0 2.2 2.2h1.8"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  ext: '<path d="M14 5h5v5M19 5l-8 8M18 14v4a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 18V8a1.5 1.5 0 0 1 1.5-1.5H10"/>',
  github: '<path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.2c0-1 .1-1.5-.5-2.1 2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.3a11.400 11.400 0 0 0-6 0C7.000 2.300 6 2.600 6 2.600a4.300 4.300 0 0 0-.1 3.200A4.600 4.600 0 0 0 4.600 9c0 4.600 2.800 5.700 5.500 6-.5.600-.6 1.200-.5 2.100V21"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.500M12 7.600v.1"/>',
  bulb: '<path d="M9.500 17.500h5M10 20.500h4M12 3.500a5.500 5.500 0 0 0-3.300 9.900c.6.500 1 1.200 1 2v.1h4.600v-.1c0-.8.400-1.500 1-2A5.500 5.500 0 0 0 12 3.500Z"/>',
  warn: '<path d="M12 4 2.800 19.500h18.400L12 4ZM12 10v4.500M12 17.200v.1"/>',
  stop: '<path d="M8.300 3.500h7.400l4.800 4.800v7.400l-4.800 4.800H8.300l-4.800-4.800V8.300l4.800-4.800ZM12 8v5M12 16.200v.1"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.600 2.700 3.800 5.700 3.800 9s-1.200 6.300-3.800 9c-2.600-2.700-3.800-5.700-3.800-9S9.400 5.700 12 3Z"/>',
};
const sprite = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">${Object.entries(ICONS).map(([k, v]) => `<symbol id="i-${k}" viewBox="0 0 24 24">${v}</symbol>`).join("")}</svg>`;
const ic = (n, cls = "") => `<svg class="ic ${cls}" aria-hidden="true"><use href="#i-${n}"/></svg>`;

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const slugify = (s) => s.toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss").replace(/<[^>]+>/g, "").replace(/&[a-z]+;/g, "").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "section";
const plain = (html) => html.replace(/<pre[\s\S]*?<\/pre>/g, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim();

function frontMatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return [{}, src];
  const meta = {};
  for (const line of m[1].split("\n")) {
    const k = line.match(/^(\w+):\s*(.*)$/);
    if (k) meta[k[1]] = k[2].replace(/^["']|["']$/g, "");
  }
  return [meta, src.slice(m[0].length)];
}

const nav = JSON.parse(readFileSync(join(content, "nav.json"), "utf8"));
const problems = [];
const problem = (m) => problems.push(m);
const allSlugs = nav.sections.flatMap((s) => s.pages);

// ---------- pages ----------
function loadPages(lang) {
  const pages = new Map();
  for (const slug of allSlugs) {
    if (slug === "index") continue;
    const f = join(content, lang, `${slug}.md`);
    if (!existsSync(f)) { problem(`missing page ${lang}/${slug}.md`); continue; }
    let [meta, body] = frontMatter(readFileSync(f, "utf8"));
    if (meta.generated === "changelog") {
      body = readFileSync(join(repo, "CHANGELOG.md"), "utf8").split("\n").slice(2).join("\n").replace(/^## \[Unreleased\][\s\S]*?(?=^## \[)/m, "").replace(/^## /gm, "## ").replace(/^### /gm, "#### ");
    }
    if (!meta.title) problem(`${lang}/${slug}.md has no title`);
    pages.set(slug, { slug, lang, meta, body, file: `docs/content/${lang}/${slug}.md` });
  }
  return pages;
}

function render(page, lang, base) {
  const toc = [];
  const used = new Map();
  const t = UI[lang];
  const marked = new Marked({ gfm: true, breaks: false });
  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        let inner = this.parser.parseInline(tokens);
        const custom = inner.match(/\s*\{#([\w-]+)\}\s*$/);
        if (custom) inner = inner.slice(0, custom.index);
        let id = custom ? custom[1] : slugify(inner);
        const n = used.get(id) ?? 0;
        used.set(id, n + 1);
        if (n) id += `-${n + 1}`;
        if (depth === 2 || depth === 3) toc.push({ id, depth, text: plain(inner) });
        return `<h${depth} id="${id}">${inner}<a class="anchor" href="#${id}" aria-label="${esc(plain(inner))}">#</a></h${depth}>\n`;
      },
      code({ text, lang: l }) {
        const label = l && !["text", "txt"].includes(l) ? ` data-lang="${esc(l)}"` : "";
        return `<pre${label}><code>${esc(text)}</code></pre>\n`;
      },
      table(token) {
        const head = `<tr>${token.header.map((c) => `<th>${this.parser.parseInline(c.tokens)}</th>`).join("")}</tr>`;
        const rows = token.rows.map((r) => `<tr>${r.map((c) => `<td>${this.parser.parseInline(c.tokens)}</td>`).join("")}</tr>`).join("");
        return `<div class="tw"><table><thead>${head}</thead><tbody>${rows}</tbody></table></div>\n`;
      },
      image({ href, text, title }) {
        let src = href;
        if (!/^https?:/.test(src)) {
          const name = src.replace(/^(\.\.\/)*(docs\/)?images\//, "").replace(/^\.?\//, "");
          if (!existsSync(join(repo, "docs/images", name))) problem(`${page.file}: image not found: ${href}`);
          src = `${base}img/${name}`;
        }
        const cap = title ? `<figcaption>${esc(title)}</figcaption>` : "";
        return `<figure><img src="${src}" alt="${esc(text)}" loading="lazy" decoding="async">${cap}</figure>\n`;
      },
      link({ href, tokens }) {
        const inner = this.parser.parseInline(tokens);
        if (/^(https?:|mailto:|#)/.test(href)) {
          const ext = /^https?:/.test(href);
          return `<a href="${esc(href)}"${ext ? ' rel="noopener"' : ""}>${inner}</a>`;
        }
        const m = href.match(/^(?:\.\/)?(?:docs\/)?([\w-]+)\.md(#.*)?$/);
        if (m) {
          if (!allSlugs.includes(m[1])) problem(`${page.file}: link to unknown page ${href}`);
          return `<a href="${base}${lang}/${m[1] === "index" ? "" : m[1] + "/"}${m[2] ?? ""}">${inner}</a>`;
        }
        if (page.meta.generated) return `<a href="${GH}/blob/main/${esc(href.replace(/^\.\//, ""))}" rel="noopener">${inner}</a>`;
        problem(`${page.file}: unsupported link ${href}`);
        return `<a href="${esc(href)}">${inner}</a>`;
      },
    },
  });
  let html = marked.parse(page.body);
  // numbered lists with three or more steps become a step list
  html = html.replace(/<ol>((?:(?!<\/ol>)[\s\S])*)<\/ol>/g, (all, inner) => ((inner.match(/<li>/g) ?? []).length >= 3 && !/<ol>/.test(inner) ? `<ol class="steps">${inner}</ol>` : all));
  // > [!TIP] callouts; plain quotes become notes
  const kinds = { NOTE: ["note", "info", t.note], TIP: ["tip", "bulb", t.tip], WARNING: ["warn", "warn", t.warn], IMPORTANT: ["danger", "stop", t.danger], DANGER: ["danger", "stop", t.danger] };
  html = html.replace(/<blockquote>\s*<p>\[!(NOTE|TIP|WARNING|IMPORTANT|DANGER)\]\s*(?:<br>\s*)?/g, (_, k) => {
    const [cls, icon, title] = kinds[k];
    return `<div class="callout ${cls}">${ic(icon)}<span class="ct">${title}</span><p>`;
  });
  html = html.replace(/<blockquote>/g, `<div class="callout note">${ic("info")}`).replace(/<\/blockquote>/g, "</div>");
  // the first paragraph after h1-less pages is the lede
  html = html.replace(/^<p>/, '<p class="lede">');
  return { html, toc };
}

// ---------- page shell ----------
function topbar(lang, base, slugHere, pageUrlOther) {
  const t = UI[lang];
  const other = lang === "en" ? "de" : "en";
  return `<a class="skip" href="#main">${t.skip}</a>
<header class="bar">
  <button class="btn-i menu-btn" data-menu aria-label="${t.menu}" aria-expanded="false">${ic("menu")}</button>
  <a class="brand" href="${base}${lang}/"><img src="${base}img/logo.png" alt="" width="30" height="30">NextFloor<small>v${version}</small></a>
  <nav class="top" aria-label="Main"><a href="${base}${lang}/install/">${lang === "en" ? "Install" : "Installation"}</a><a href="${base}${lang}/cards/">${lang === "en" ? "Card" : "Karte"}</a><a href="${base}${lang}/plugins/">Plugins</a><a href="${base}${lang}/faq/">FAQ</a></nav>
  <span class="sp"></span>
  <button class="btn-i searchbtn" data-search aria-label="${t.search}">${ic("search")}<span>${t.search}</span><kbd>Ctrl K</kbd></button>
  <a class="btn-i" href="${pageUrlOther}" hreflang="${other}" lang="${other}" title="${UI[other].docs}">${ic("globe")}<span class="lt">${t.lang}</span></a>
  <a class="btn-i" href="https://therealmrbk.github.io/NextFloor/" rel="noopener" title="${t.demo}">${ic("ext")}<span class="dm">${t.demo}</span></a>
  <a class="btn-i" href="${GH}" rel="noopener" aria-label="${t.github}">${ic("github")}</a>
  <button class="btn-i" data-theme-toggle aria-label="${t.theme}"><span class="th-d">${ic("moon")}</span><span class="th-l">${ic("sun")}</span></button>
</header>`;
}

function sidebar(lang, base, titles, here) {
  return `<aside class="side" aria-label="${UI[lang].docs}">${nav.sections.map((s) => `<h2>${esc(s.title[lang])}</h2><ul>${s.pages.map((p) => `<li><a href="${base}${lang}/${p === "index" ? "" : p + "/"}"${p === here ? ' aria-current="page"' : ""}>${esc(titles.get(p))}</a></li>`).join("")}</ul>`).join("")}</aside>`;
}

function shell({ lang, base, title, desc, bodyClass = "", url, other, main, toc = "", side = "", slug }) {
  const t = UI[lang];
  const tr = JSON.stringify({ copy: t.copy, hint: t.searchHint, none: t.searchNone }).replace(/'/g, "&#39;");
  return `<!doctype html>
<html lang="${lang}" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#070b14">
<link rel="canonical" href="${SITE}/docs/${url}">
<link rel="alternate" hreflang="${lang}" href="${SITE}/docs/${url}">
<link rel="alternate" hreflang="${lang === "en" ? "de" : "en"}" href="${SITE}/docs/${other}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="https://raw.githubusercontent.com/therealMRBK/NextFloor/main/docs/images/view-house.jpg">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${base}img/logo.png">
<link rel="preload" href="${base}fonts/bricolage.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${base}fonts/figtree-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${base}assets/docs.css?v=${version}">
<script>try{var t=localStorage.getItem("nf-docs-theme");if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
<style>.th-l{display:none}[data-theme=light] .th-d{display:none}[data-theme=light] .th-l{display:inline}@media(max-width:1100px){.dm{display:none}}</style>
</head>
<body class="${bodyClass}" data-base="${base}" data-t='${tr}'>
${sprite}
${topbar(lang, base, slug, `${base}${other}`)}
<div class="shell">
${side}
<main id="main" class="main">${main}</main>
${toc}
</div>
<footer class="site">${t.footer} · v${version} · <a href="${GH}/blob/main/LICENSE">MIT</a> · <a href="${GH}">GitHub</a></footer>
<dialog class="pal" id="pal" aria-label="${t.search}"><form method="dialog">${ic("search")}<input type="search" placeholder="${t.search}…" aria-label="${t.search}" autocomplete="off" spellcheck="false"></form><ul role="listbox"></ul><footer>${t.searchFoot}</footer></dialog>
<script src="${base}assets/docs.js?v=${version}" defer></script>
</body>
</html>`;
}

function buildDoc(lang, page, pages, titles) {
  const t = UI[lang];
  const base = page.slug === "index" ? "../" : "../../";
  const { html, toc } = render(page, lang, base);
  const flat = allSlugs.filter((s) => s !== "index");
  const i = flat.indexOf(page.slug);
  const sec = nav.sections.find((s) => s.pages.includes(page.slug));
  const prev = i > 0 ? flat[i - 1] : null;
  const next = i >= 0 && i < flat.length - 1 ? flat[i + 1] : null;
  const link = (s, dir) => `<a href="${base}${lang}/${s}/" rel="${dir}"><small>${dir === "prev" ? "← " + t.prev : t.next + " →"}</small>${esc(titles.get(s))}</a>`;
  const own = `${page.slug}/`;
  const main = `<div class="crumbs"><a href="${base}${lang}/">${t.docs}</a><span>/</span><span>${esc(sec.title[lang])}</span></div>
<article><h1>${esc(page.meta.title)}</h1>
${page.meta.description ? "" : ""}${html}</article>
<nav class="pn" aria-label="Pager">${prev ? link(prev, "prev") : "<span></span>"}${next ? link(next, "next") : "<span></span>"}</nav>
<div class="edit"><a href="${GH}/edit/dev/${page.file}">${ic("github")} ${t.editPage}</a><a href="${GH}/issues/new/choose">${t.report}</a></div>`;
  const tocHtml = toc.length > 2 ? `<nav class="toc" aria-label="${t.onPage}"><b>${t.onPage}</b>${toc.map((e) => `<a class="h${e.depth}" href="#${e.id}">${esc(e.text)}</a>`).join("")}</nav>` : `<div class="toc"></div>`;
  const dir = join(out, lang, page.slug === "index" ? "" : page.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), shell({
    lang, base, slug: page.slug, title: `${page.meta.title} · NextFloor`, desc: page.meta.description || page.meta.title,
    url: `${lang}/${page.slug === "index" ? "" : own}`, other: `${lang === "en" ? "de" : "en"}/${page.slug === "index" ? "" : own}`,
    main, toc: tocHtml, side: sidebar(lang, base, titles, page.slug),
  }));
  // search entries: one per h2/h3 section
  const entries = [];
  const parts = html.split(/(?=<h[23] id=")/);
  parts.forEach((p, n) => {
    const m = p.match(/^<h([23]) id="([^"]+)">([\s\S]*?)<a class="anchor"/);
    const text = plain(p.replace(/^<h[23][\s\S]*?<\/h[23]>/, ""));
    if (n === 0 && !m) entries.push({ p: page.meta.title, h: page.meta.title, u: `${lang}/${page.slug === "index" ? "" : own}`, x: text.slice(0, 600), l: 1 });
    else if (m) entries.push({ p: page.meta.title, h: plain(m[3]), u: `${lang}/${page.slug === "index" ? "" : own}#${m[2]}`, x: text.slice(0, 600), l: 0 });
  });
  return entries;
}

// ---------- landing ----------
function buildHome(lang, titles) {
  const t = UI[lang];
  const base = "../";
  const h = JSON.parse(readFileSync(join(content, lang, "_home.json"), "utf8"));
  const u = (s) => (s.startsWith("http") ? s : `${base}${lang}/${s}/`);
  const img = (n) => { if (!existsSync(join(repo, "docs/images", n))) problem(`home ${lang}: image ${n} missing`); return `${base}img/${n}`; };
  for (const s of h.paths.flatMap((p) => [p.href]).concat(h.tour.flatMap((r) => r.links.map((l) => l[1])), h.refs.flatMap((r) => r.links.map((l) => l[1])))) {
    if (!s.startsWith("http") && !allSlugs.includes(s)) problem(`home ${lang}: unknown page ${s}`);
  }
  const main = `<section class="hero">
  <h1>${h.title}</h1>
  <p class="sub">${esc(h.sub)}</p>
  <div class="cta"><a class="btn primary" href="${u(h.cta[0][1])}">${esc(h.cta[0][0])}${ic("arrow")}</a><a class="btn" href="${h.cta[1][1]}" rel="noopener">${esc(h.cta[1][0])}${ic("ext")}</a></div>
  <div class="shot"><img src="${img(h.shot)}" alt="${esc(h.shotAlt)}" fetchpriority="high"></div>
</section>
<div class="wrap">
<section class="band"><h2>${esc(h.pathsTitle)}</h2><p class="lead">${esc(h.pathsLead)}</p>
<div class="paths">${h.paths.map((p) => `<a class="path" href="${u(p.href)}"><div><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div><span class="go">${esc(p.go)}${ic("arrow")}</span></a>`).join("")}</div></section>
<section class="band"><h2>${esc(h.tourTitle)}</h2><p class="lead">${esc(h.tourLead)}</p>
<div class="tour">${h.tour.map((r) => `<div class="row"><div class="txt"><h3>${esc(r.title)}</h3><p>${esc(r.text)}</p><div class="links">${r.links.map((l) => `<a href="${u(l[1])}">${esc(l[0])}</a>`).join("")}</div></div><div class="pic"><img src="${img(r.img)}" alt="${esc(r.alt)}" loading="lazy"></div></div>`).join("")}</div></section>
<section class="band"><h2>${esc(h.refsTitle)}</h2>
<div class="refs">${h.refs.map((r) => `<div><h3>${esc(r.title)}</h3>${r.links.map((l) => `<a href="${u(l[1])}">${esc(l[0])}</a>`).join("")}</div>`).join("")}</div></section>
<section class="promise"><h2>${esc(h.promiseTitle)}</h2>${h.promise.map((p) => `<p>${esc(p)}</p>`).join("")}<div class="stats">${h.stats.map((s) => `<span><b>${esc(s[0])}</b>${esc(s[1])}</span>`).join("")}</div></section>
</div>`;
  const dir = join(out, lang);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), shell({ lang, base, title: h.pageTitle, desc: h.desc, bodyClass: "land", url: `${lang}/`, other: `${lang === "en" ? "de" : "en"}/`, main, slug: "index", side: "" }));
  return [{ p: t.docs, h: h.pageTitle.split(" · ")[0], u: `${lang}/`, x: h.desc, l: 1 }];
}

// ---------- run ----------
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
const pagesBy = Object.fromEntries(LANGS.map((l) => [l, loadPages(l)]));
for (const lang of LANGS) {
  const pages = pagesBy[lang];
  const titles = new Map([...pages].map(([s, p]) => [s, p.meta.title]));
  titles.set("index", UI[lang].overview);
  const index = [];
  for (const [slug, page] of pages) if (slug !== "index") index.push(...buildDoc(lang, page, pages, titles));
  index.push(...buildHome(lang, titles));
  writeFileSync(join(out, `search-${lang}.json`), JSON.stringify(index));
}
// the "index" slug only exists in nav as the landing page; it has no markdown of its own
cpSync(join(here, "assets"), join(out, "assets"), { recursive: true });
cpSync(join(repo, "docs/images"), join(out, "img"), { recursive: true });
cpSync(join(repo, "custom_components/nextfloor/brand/icon@2x.png"), join(out, "img/logo.png"));
const fonts = join(out, "fonts");
mkdirSync(fonts, { recursive: true });
const nm = join(here, "node_modules");
cpSync(join(nm, "@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2"), join(fonts, "figtree-latin.woff2"));
cpSync(join(nm, "@fontsource-variable/figtree/files/figtree-latin-ext-wght-normal.woff2"), join(fonts, "figtree-latin-ext.woff2"));
cpSync(join(nm, "@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2"), join(fonts, "bricolage.woff2"));
cpSync(join(nm, "@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2"), join(fonts, "jbmono-400.woff2"));
cpSync(join(nm, "@fontsource/jetbrains-mono/files/jetbrains-mono-latin-600-normal.woff2"), join(fonts, "jbmono-600.woff2"));
writeFileSync(join(out, "index.html"), `<!doctype html><meta charset="utf-8"><title>NextFloor docs</title><meta name="robots" content="noindex"><script>location.replace((navigator.language||"en").toLowerCase().startsWith("de")?"de/":"en/")</script><p><a href="en/">English</a> · <a href="de/">Deutsch</a></p>`);
writeFileSync(join(out, "404.html"), shell({ lang: "en", base: "/NextFloor/docs/", title: "Not found · NextFloor", desc: "Page not found", url: "", other: "de/", slug: "404", main: `<article><h1>${UI.en.notFound}</h1><p class="lede">${UI.en.notFoundText}</p><p><a class="btn primary" href="/NextFloor/docs/en/">${UI.en.toOverview}</a></p></article>`, side: "" }));

// ---------- checks ----------
if (check) {
  const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]));
  const idsOf = new Map();
  const files = walk(out).filter((f) => f.endsWith(".html"));
  for (const f of files) {
    const html = readFileSync(f, "utf8");
    for (const m of html.matchAll(/(?:href|src)="([^"#?]+)(#[^"]*)?"/g)) {
      const href = m[1];
      if (/^(https?:|mailto:|\/NextFloor)/.test(href)) continue;
      let target = resolve(dirname(f), href);
      if (!/\.[a-z0-9]+$/i.test(target)) target = join(target, "index.html");
      if (!existsSync(target)) { problem(`${f.replace(out, "")}: broken link ${href}`); continue; }
      if (m[2] && target.endsWith(".html")) {
        const ids = idsOf.get(target) ?? idsOf.set(target, new Set([...readFileSync(target, "utf8").matchAll(/\sid="([^"]+)"/g)].map((x) => x[1]))).get(target);
        if (!ids.has(decodeURIComponent(m[2].slice(1)))) problem(`${f.replace(out, "")}: link to missing anchor ${href}${m[2]}`);
      }
    }
  }
}
if (problems.length) {
  console.error(problems.map((p) => "  " + p).join("\n"));
  console.error(`\n${problems.length} problem(s)`);
  if (check) process.exit(1);
}
console.log(`docs built: ${out}`);
