// NextFloor docs: search, theme, menu, table of contents, copy buttons, lightbox. No dependencies.
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;
  const base = document.body.dataset.base || "./";
  const lang = root.lang || "en";
  const T = JSON.parse(document.body.dataset.t || "{}");

  // theme
  const setTheme = (t) => {
    root.dataset.theme = t;
    try { localStorage.setItem("nf-docs-theme", t); } catch { /* private mode */ }
  };
  $$("[data-theme-toggle]").forEach((b) => b.addEventListener("click", () => setTheme(root.dataset.theme === "light" ? "dark" : "light")));

  // mobile menu
  const menu = $("[data-menu]");
  const closeMenu = () => { document.body.classList.remove("nav-open"); menu?.setAttribute("aria-expanded", "false"); };
  menu?.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    menu.setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("click", (e) => {
    if (document.body.classList.contains("nav-open") && !e.target.closest(".side, [data-menu]")) closeMenu();
  });
  const cur = $(".side a[aria-current=page]");
  if (cur && !window.matchMedia("(max-width:900px)").matches) cur.scrollIntoView({ block: "center" });

  // copy buttons
  $$("article pre").forEach((pre) => {
    const b = document.createElement("button");
    b.className = "copy";
    b.type = "button";
    b.setAttribute("aria-label", T.copy || "Copy");
    const icon = (n) => `<svg class="ic"><use href="#i-${n}"/></svg>`;
    b.innerHTML = icon("copy");
    b.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText($("code", pre).innerText); } catch { return; }
      b.classList.add("done");
      b.innerHTML = icon("check");
      setTimeout(() => { b.classList.remove("done"); b.innerHTML = icon("copy"); }, 1600);
    });
    pre.append(b);
  });

  // table of contents with scroll spy
  const links = $$(".toc a");
  if (links.length) {
    const map = new Map(links.map((a) => [decodeURIComponent(a.hash.slice(1)), a]));
    const heads = [...map.keys()].map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver((es) => {
      for (const e of es) {
        if (!e.isIntersecting) continue;
        links.forEach((l) => l.classList.remove("on"));
        map.get(e.target.id)?.classList.add("on");
      }
    }, { rootMargin: "-80px 0px -70% 0px" });
    heads.forEach((h) => io.observe(h));
  }

  // lightbox
  const lb = document.createElement("dialog");
  lb.className = "lb";
  lb.innerHTML = "<img alt=''><p></p>";
  document.body.append(lb);
  lb.addEventListener("click", () => lb.close());
  $$("article figure img").forEach((img) => img.addEventListener("click", () => {
    const big = $("img", lb);
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    $("p", lb).textContent = img.alt;
    lb.showModal();
  }));

  // search
  const pal = $("#pal");
  const input = $("input", pal);
  const list = $("ul", pal);
  let index = null;
  let sel = 0;
  let hits = [];
  const load = async () => {
    if (index) return index;
    try { index = await (await fetch(`${base}search-${lang}.json`)).json(); } catch { index = []; }
    return index;
  };
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ß/g, "ss");
  const rx = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const hi = (s, ts) => {
    let o = esc(s);
    for (const t of ts) o = o.replace(new RegExp(`(${rx(esc(t))})`, "ig"), "<mark>$1</mark>");
    return o;
  };
  const run = async () => {
    const idx = await load();
    const ts = norm(input.value.trim()).split(/\s+/).filter(Boolean);
    if (!ts.length) { hits = []; list.innerHTML = `<li class="empty">${esc(T.hint || "")}</li>`; return; }
    hits = idx.map((e) => {
      const ht = norm(e.h), pt = norm(e.p), xt = norm(e.x);
      let s = 0;
      for (const t of ts) {
        let k = 0;
        if (ht.includes(t)) k += ht.startsWith(t) ? 12 : 8;
        if (pt.includes(t)) k += 4;
        if (xt.includes(t)) k += 2;
        if (!k) return null;
        s += k;
      }
      if (e.l === 1) s += 3;
      if (e.u.startsWith(`${lang}/changelog`)) s -= 6;
      return { e, s };
    }).filter(Boolean).sort((a, b) => b.s - a.s).slice(0, 30);
    sel = 0;
    list.innerHTML = hits.length
      ? hits.map((h, i) => {
        const at = norm(h.e.x);
        const p = ts.map((t) => at.indexOf(t)).find((n) => n >= 0) ?? 0;
        const from = Math.max(0, p - 40);
        const snip = (from ? h.e.x.slice(h.e.x.indexOf(" ", from) + 1 || from) : h.e.x).slice(0, 120);
        return `<li><a href="${base}${h.e.u}" role="option" aria-selected="${i === 0}"><small>${esc(h.e.p)}</small><b>${hi(h.e.h, ts)}</b><span>${hi(snip, ts)}</span></a></li>`;
      }).join("")
      : `<li class="empty">${esc(T.none || "")}</li>`;
  };
  const mark = () => $$("a", list).forEach((a, i) => {
    a.setAttribute("aria-selected", String(i === sel));
    if (i === sel) a.scrollIntoView({ block: "nearest" });
  });
  const open = () => { pal.showModal(); input.value = ""; run(); input.focus(); };
  $$("[data-search]").forEach((b) => b.addEventListener("click", open));
  document.addEventListener("keydown", (e) => {
    const typing = /INPUT|TEXTAREA/.test(document.activeElement.tagName);
    if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing && !pal.open)) { e.preventDefault(); open(); }
  });
  input.addEventListener("input", run);
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); sel = Math.min(sel + 1, hits.length - 1); mark(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); sel = Math.max(sel - 1, 0); mark(); }
    else if (e.key === "Enter") { const a = $$("a", list)[sel]; if (a) location.href = a.href; }
  });
  pal.addEventListener("click", (e) => { if (e.target === pal) pal.close(); });
  list.addEventListener("click", () => pal.close());
})();
