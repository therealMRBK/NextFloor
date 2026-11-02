// Serves the repository and takes screenshots of the preview page with a local Chrome/Edge.
// Usage (from frontend/): node screenshot.mjs [out-dir]

import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(process.argv[2] ?? join(root, "preview", "screenshots"));
mkdirSync(outDir, { recursive: true });

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css", ".png": "image/png", ".json": "application/json" };
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^([/\\])+/, "");
  const file = path.startsWith("__mesh/") && process.env.MESHDIR ? join(process.env.MESHDIR, path.slice(7)) : join(root, path);
  if (!(file.startsWith(root) || (process.env.MESHDIR && file.startsWith(process.env.MESHDIR))) || !existsSync(file)) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(readFileSync(file));
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const base = `http://127.0.0.1:${server.address().port}/preview/index.html`;

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  `${process.env.HOME}/.cache/ms-playwright/chromium-1234/chrome-linux64/chrome`,
].filter(Boolean);
const executablePath = candidates.find((p) => existsSync(p));
const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist", ...(process.getuid?.() === 0 ? ["--no-sandbox"] : [])] });

// Furniture from the built-in packs in the living room, kitchen and garden.
// a pool drawn before the terrace that contains it: it cuts itself out of the terrace
// registers a small plugin in the running page: a room card and its own icon and text on the heating marker
const PLUGIN_SCRIPT = "window.NextFloor.register({ id: 'demo', name: 'Demo-Plugin', version: '1.0.0', apiVersion: 1, devices: [{ match: (id) => id.startsWith('climate.'), marker: ({ state }) => ({ icon: 'mdi:radiator', text: 'Plugin: ' + state.attributes.current_temperature + ' °' }) }], roomSections: [{ id: 'info', render: ({ room, entities }) => { const p = document.createElement('p'); p.textContent = '🔌 ' + room.name + ': ' + entities.length + ' Geräte (vom Plugin)'; return p; } }] }); setTimeout(() => { const f = (r) => { for (const el of r.querySelectorAll('*')) { if (el.tagName === 'NF-ROOM-PANEL') return el; if (el.shadowRoot) { const h = f(el.shadowRoot); if (h) return h; } } return null; }; f(document).shadowRoot.querySelector('.nf-rp-plugin')?.scrollIntoView({ block: 'end' }); }, 600);";
const POOL_SCRIPT = `
  const f = e._doc.floors[0];
  e._floorId = f.id;
  const xs = f.rooms.flatMap((r) => r.points.map((p) => p[0]));
  const zs = f.rooms.flatMap((r) => r.points.map((p) => p[1]));
  const x0 = Math.min(...xs), x1 = Math.max(...xs), z1 = Math.max(...zs);
  const set = (type) => Object.assign(e._doc.floors[0].outdoor.at(-1), { type });
  e.addOutdoor([[x0 + 1.5, z1 + 1.5], [x0 + 5, z1 + 1.5], [x0 + 5, z1 + 3.5], [x0 + 1.5, z1 + 3.5]]);
  set("pool");
  e.addOutdoor([[x0, z1 + 0.5], [x1, z1 + 0.5], [x1, z1 + 5], [x0, z1 + 5]]);
  set("terrace");
`;
// a high ground floor with a low bathroom (its own ceiling) and a ceiling fan with a light kit in the living room
const CEILING_DOC = `
  const g = b.floors[0];
  g.height = 3.2;
  g.rooms.find((r) => r.name === "Bad").ceiling = 2.2;
  const lr = g.rooms.find((r) => r.name === "Wohnzimmer");
  const xs = lr.points.map((p) => p[0]), zs = lr.points.map((p) => p[1]);
  g.furniture.push({ id: "fan_demo", type: "ceiling_fan", x: (Math.min(...xs) + Math.max(...xs)) / 2, z: (Math.min(...zs) + Math.max(...zs)) / 2, rotation: 0, w: 1.32, d: 1.32, h: 0.6, variant: null, entity: "light.wohnzimmer_ventilator", power: null, fan_entity: "fan.wohnzimmer_ventilator" });
`;
const CEILING_SCRIPT = `window.nfDemoSet("fan.wohnzimmer_ventilator", "on", { friendly_name: "Ventilator", percentage: 66, percentage_step: 33.33 });
  window.nfDemoSet("light.wohnzimmer_ventilator", "on", { friendly_name: "Ventilator Licht", brightness: 200, color_mode: "brightness" });
  const panel = document.querySelector("nextfloor-panel"); const b = structuredClone(panel.data.building); ${CEILING_DOC} panel.data.edit(b);`;
// advanced energy mode: a sub-meter for the upper floor (its sensor reads 520 W) with the balcony plant behind it
const SUB_METER = (unmetered) => `
  window.nfDemoSet("sensor.og_zaehler", "520", { friendly_name: "OG Zähler", device_class: "power", unit_of_measurement: "W" });
  b.energy.advanced = true;
  b.energy.show_unmetered = ${unmetered};
  const main = b.floors[0].furniture.find((f) => f.type === "meter");
  b.floors[1].furniture.push({ ...main, id: "og_meter", name: "OG", show_name: true, x: 7.5, z: 0.15, power: "sensor.og_zaehler", parent_meter: main.id, meter_floors: [b.floors[1].id], marker: "always" });
  b.floors[0].furniture.find((f) => f.id === "inv_balkon").parent_meter = "og_meter";
`;
const SUB_METER_VIEW = (unmetered) => `const panel = document.querySelector("nextfloor-panel"); const b = structuredClone(panel.data.building); ${SUB_METER(unmetered)} panel.data.edit(b); v.toggleLhCards();`;
// selects an item in the editor and scrolls the side bar to a text of its form
const SUB_METER_FORM = (select, text) => `const b = structuredClone(e._doc); ${SUB_METER(true)} e.setDoc(b); ${select}
  setTimeout(() => [...e.renderRoot.querySelectorAll("label, h3")].find((x) => x.textContent.includes("${text}"))?.scrollIntoView({ block: "center" }), 600);`;
// every shape of the shaped stairs beside the house on the ground floor (with all builds, turns and railings) and one going down
const STAIRS_DOC = `
  const g = b.floors[0];
  const xs = g.rooms.flatMap((r) => r.points.map((p) => p[0])), zs = g.rooms.flatMap((r) => r.points.map((p) => p[1]));
  const x0 = Math.max(...xs) + 2.2, z0 = Math.min(...zs);
  const kinds = [["straight", "right", "solid", 1.0, 3.2, "both"], ["quarter", "left", "stringer", 2.2, 2.6, "left"], ["l", "right", "mono", 2.2, 2.8, "right"], ["half", "right", "cantilever", 2.0, 2.6, "none"], ["u", "left", "stringer", 2.2, 2.6, "both"], ["spiral", "right", "mono", 1.6, 1.6, "left"], ["straight", "right", "stringer", 1.0, 3.6, "right"]];
  kinds.forEach(([shape, turn, build, w, d, rail], i) => g.furniture.push({ id: "stair_demo_" + i, type: "stairs", x: x0 + (i % 4) * 3, z: z0 + 1.8 + Math.floor(i / 4) * 3.6, rotation: 0, w, d, h: 2.8, variant: null, stair: { shape, turn, build, rail, risers: i % 2 === 0, steps: null, run_width: null, down: i === 6, opening: i === 6 ? "full" : "headroom" } }));
`;
const PACK_SCRIPT = `
  const f = e._doc.floors[0];
  e._floorId = f.id;
  const put = (type, x, z, rotation = 0) => { e.addFurniture("pack:" + type); Object.assign(e._doc.floors[0].furniture.at(-1), { x, z, rotation }); };
  put("nextfloor.wohnen:fireplace", 0.45, 3.8, 90);
  put("nextfloor.wohnen:aquarium", 3.4, 4.3, 180);
  put("nextfloor.kueche:coffee_machine", 7.6, 3.1, 0);
  put("nextfloor.kueche:wine_fridge", 9.4, 0.5, 0);
  e.setDoc(structuredClone(e._doc));
`;

const shots = [
  // the house, the floors, a room
  { name: "showcase-living", dev: true, query: "?showcase&lang=en&set=basic%3Aliving", width: 1400, height: 800 },
  { name: "showcase-stairs", dev: true, query: "?showcase&lang=en&set=pack%3Atreppen", width: 1400, height: 800 },
  { name: "showcase-build", dev: true, query: "?showcase&lang=en&set=pack%3Aausbau", width: 1400, height: 800 },
  { name: "showcase-shop", dev: true, query: "?showcase&lang=en&set=pack%3Awerkstatt", width: 1400, height: 800 },
  { name: "showcase-cars", dev: true, query: "?showcase&lang=en&set=pack%3Afahrzeuge&page=2", width: 1400, height: 800 },
  { name: "map-3d", dev: true, query: "?map", width: 1280, height: 800 },
  { name: "map-3d-south", dev: true, query: "?map&north=180", width: 1280, height: 800 },
  { name: "map-editor", dev: true, query: "?map", width: 1280, height: 800, editor: true, editorScript: "e.fit();" },
  { name: "settings-map", dev: true, query: "?map", width: 1400, height: 1100, editor: true, editorScript: "const d = [...e.renderRoot.querySelectorAll('details')].find((x) => x.querySelector('summary')?.textContent.includes('Einstellungen')); if (d) { d.open = true; d.scrollIntoView({ block: 'start' }); }" },
  { name: "card-rooms", dev: true, query: "?card&roombuttons", width: 1400, height: 820, click: "Wohnzimmer" },
  { name: "view-house", query: "?pv=5400&flows", width: 1280, height: 800 },
  { name: "view-floor-eg", query: "?pv=5400&flows", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-room", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer" },
  { name: "view-stacked", query: "", width: 1280, height: 800, click: "Gestapelt" },
  // development views of a whole pack (PACK=nextfloor.ikea): the room from above, and three zooms along it
  { name: "pack-iso", dev: true, query: `?pack=${process.env.PACK ?? "nextfloor.ikea"}`, width: 1500, height: 760, viewScript: "document.querySelector(\"nextfloor-panel\")._clean = true; const s = window.nfShowcase; const w = v.viewer.getView(); w.target.set(s.cx, 0.6, s.cz); w.theta = -0.45; w.phi = 0.95; w.radius = Math.max(s.width, s.depth * 1.5) * 0.95; v.viewer.flyTo(w, 1);" },
  { name: "pack-mesh", dev: true, query: `?pack=nextfloor.fahrzeuge&only=${process.env.ONLY ?? "tesla"}&row=${process.env.ROW ?? "38"}&meshdir=/__mesh`, width: 1500, height: 760, viewScript: "document.querySelector(\"nextfloor-panel\")._clean = true; const s = window.nfShowcase; const w = v.viewer.getView(); w.target.set(s.cx, 0.6, s.cz); w.theta = -0.5; w.phi = 0.95; w.radius = Math.max(s.width, s.depth * 1.5) * 0.7; v.viewer.flyTo(w, 1);" },
  { name: "pack-colors", dev: true, query: "?cars&colors&row=26", width: 1500, height: 760, viewScript: "document.querySelector(\"nextfloor-panel\")._clean = true; const s = window.nfShowcase; const w = v.viewer.getView(); w.target.set(s.cx, 0.6, s.cz); w.theta = -0.45; w.phi = 0.9; w.radius = Math.max(s.width, s.depth * 1.5) * 0.9; v.viewer.flyTo(w, 1);" },
  { name: "pack-plan", dev: true, query: `?pack=${process.env.PACK ?? "nextfloor.ikea"}`, width: 1500, height: 700, editor: true, editorScript: "e.fit();" },
  ...[0, 1, 2].map((i) => ({ name: `pack-zoom-${i}`, dev: true, query: `?pack=${process.env.PACK ?? "nextfloor.ikea"}`, width: 1100, height: 700, viewScript: `document.querySelector("nextfloor-panel")._clean = true; const s = window.nfShowcase; const w = v.viewer.getView(); w.target.set(s.width * ${(i + 0.5) / 3}, 0.7, s.cz); w.theta = -0.55; w.phi = 0.85; w.radius = Math.max(5, s.width / 3 * 1.35); v.viewer.flyTo(w, 1);` })),
  // the 0.9.0 features: a sloping wall, a turned solar field, "+" on outdoor edges and flat roofs, the room panel folded away
  { name: "dev-solid-day", dev: true, query: "", width: 1400, height: 850, click: "Erdgeschoss", settle: 2500, viewScript: "const p = document.querySelector(\"nextfloor-panel\"); p._clean = true; p.applyEdit((b0) => { const b = structuredClone(b0); b.settings.wall_paint_outside = \"#c9b48f\"; b.floors.forEach((f) => f.rooms.forEach((r, i) => { if (i % 3 === 0) r.wall_paint = \"#8fb8d6\"; else if (i % 3 === 1) r.wall_paint = \"#d9a59a\"; })); return b; }); p.setPref(\"solidWalls\", true); p.setPref(\"theme\", \"day\"); p._wallMode = \"cut\";" },
  { name: "dev-slope", dev: true, query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer", viewScript: "const panel = document.querySelector('nextfloor-panel'); const b = structuredClone(panel.data.building); const r = b.floors[0].rooms[0]; r.wall_heights = [null, null, null, 1.2]; r.wall_slopes = [null, null, null, 3.9]; panel.data.edit(b);", afterWait: 1500 },
  { name: "dev-slope-form", dev: true, query: "", width: 1500, height: 1100, editor: true, editorScript: "e._floorId = e._doc.floors[0].id; const r = e._doc.floors[0].rooms[0]; r.wall_heights = [null, 1.2, null, null]; r.wall_slopes = [null, 3.9, null, null]; e.setDoc(structuredClone(e._doc)); e.selectItem('room', r.id);", openDetails: true },
  { name: "dev-solar-turn", dev: true, query: "?pv=5400&flows", width: 1500, height: 950, editor: true, click: "Energie", editorScript: "const d = structuredClone(e._doc); d.settings.roof.type = 'flat'; const f = d.settings.roof.solar[0]; Object.assign(f, { face: 'main:top', rows: 1, cols: 5, tilt: 15, u: 3, v: 3, rotation: 90, flip: false }); d.settings.roof.solar = [f]; e.setDoc(d); e.roof.selectField(f.id); e.fit();" },
  // #13: modules on a mansard lie on the steep lower and the flat upper slope, not inside the roof
  { name: "dev-mansard-solar", dev: true, query: "", width: 1280, height: 800, click: "Tag", then: "Gestapelt", viewScript: "const panel = document.querySelector('nextfloor-panel'); const b = structuredClone(panel.data.building); const top = b.floors.filter((f) => f.rooms.length).sort((p, q) => q.elevation - p.elevation)[0]; const xs = top.rooms.flatMap((r) => r.points.map((p) => p[0])), zs = top.rooms.flatMap((r) => r.points.map((p) => p[1])); const y = top.elevation + top.height; const roof = b.settings.roof; roof.type = 'custom'; roof.sections = [{ id: 'm', x0: Math.min(...xs), z0: Math.min(...zs), x1: Math.max(...xs), z1: Math.max(...zs), shape: 'mansard', axis: Math.max(...xs) - Math.min(...xs) >= Math.max(...zs) - Math.min(...zs) ? 'x' : 'z', eave_a: y, eave_b: y, pitch_a: 70, pitch_b: 70, base: y, overhang: 0.3 }]; const f = roof.solar[0]; roof.solar = ['a', 'au', 'b', 'bu'].map((k, i) => ({ ...f, id: 'pv' + k, face: 'm:' + k, u: 0.6, v: k.length > 1 ? 0.3 : 0.2, rows: 1, cols: 4, rotation: 0, tilt: 0 })); panel.data.edit(b); v.toggleLhCards();", afterWait: 2500 },
  { name: "dev-out-plus", dev: true, query: "", width: 1500, height: 950, editor: true, editorScript: "e._floorId = e._doc.floors[0].id; const a = e._doc.floors[0].outdoor[0]; e.selectItem('outdoor', a.id); e.fit();" },
  { name: "dev-panel-fold", dev: true, query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer", viewScript: "const f = (r) => { for (const el of r.querySelectorAll('*')) { if (el.tagName === 'NF-ROOM-PANEL') return el; if (el.shadowRoot) { const h = f(el.shadowRoot); if (h) return h; } } return null; }; f(document).shadowRoot.querySelector('.nf-rp-close').click();" },
  { name: "dev-panel-fold-wide", dev: true, query: "", width: 1600, height: 900, click: "Erdgeschoss", then: "Wohnzimmer", viewScript: "const f = (r) => { for (const el of r.querySelectorAll('*')) { if (el.tagName === 'NF-ROOM-PANEL') return el; if (el.shadowRoot) { const h = f(el.shadowRoot); if (h) return h; } } return null; }; f(document).shadowRoot.querySelector('.nf-rp-close').click();" },
  { name: "dev-card-fold", dev: true, query: "?card&roombuttons", width: 1400, height: 820, click: "Wohnzimmer", viewScript: "const f = (r) => { for (const el of r.querySelectorAll('*')) { if (el.tagName === 'NF-ROOM-PANEL') return el; if (el.shadowRoot) { const h = f(el.shadowRoot); if (h) return h; } } return null; }; f(document).shadowRoot.querySelector('.nf-rp-close').click();" },
  { name: "dev-plugin-room", dev: true, query: "", width: 1600, height: 900, click: "Erdgeschoss", then: "Wohnzimmer", viewScript: PLUGIN_SCRIPT, afterWait: 1200 },
  { name: "dev-ceilings", dev: true, query: "", width: 1500, height: 950, click: "Erdgeschoss", then: "Wohnzimmer", viewScript: CEILING_SCRIPT, afterWait: 1500 },
  { name: "dev-ceilings-edit", dev: true, query: "", width: 1500, height: 950, editor: true, editorScript: `const b = structuredClone(e._doc); ${CEILING_DOC} e.setDoc(b); e._floorId = b.floors[0].id; e.selectItem("room", b.floors[0].rooms.find((r) => r.name === "Bad").id);`, openDetails: true },
  { name: "dev-fan-form", dev: true, query: "", width: 1500, height: 1300, editor: true, editorScript: `const b = structuredClone(e._doc); ${CEILING_DOC} e.setDoc(b); e._floorId = b.floors[0].id; e.selectItem("furniture", "fan_demo");`, openDetails: true },
  { name: "dev-plan-example", dev: true, query: "?state=/preview/screenshots/plan-example.json&noshowcase", width: 1400, height: 800 },
  // curved walls: the living room's first wall bent outwards, the kitchen's into the room
  { name: "dev-arc-plan", dev: true, query: "", width: 1500, height: 950, editor: true, editorScript: "e._floorId = e._doc.floors[0].id; const id = e._doc.floors[0].rooms[0].id; e.arcActions().apply({ key: `room:${id}:3`, bulge: 1.2, error: null }); e.arcActions().apply({ key: `room:${id}:0`, bulge: 0.6, error: null }); e.fit();" },
  { name: "dev-arc-3d", dev: true, query: "", width: 1500, height: 900, editor: true, editorScript: "e._floorId = e._doc.floors[0].id; const id = e._doc.floors[0].rooms[0].id; e.arcActions().apply({ key: `room:${id}:3`, bulge: 1.2, error: null }); e.arcActions().apply({ key: `room:${id}:0`, bulge: 0.6, error: null });", then3d: "Erdgeschoss" },
  // views around the plan: the house's shadow in the morning on the time-of-day slider, and a snowy night with stars
  { name: "dev-sun-shadow", dev: true, query: "", width: 1400, height: 850, settle: 2500, viewScript: "const p = document.querySelector('nextfloor-panel'); p.setPref('theme', 'day'); p.setPref('explode', false); p.setPref('quality', 'high'); p._clean = true; p._timeOfDay = 10;", afterWait: 1500 },
  { name: "dev-snow-night", dev: true, query: "?weather=snowy&night", width: 1400, height: 850, settle: 3000, viewScript: "const p = document.querySelector('nextfloor-panel'); p._timeOfDay = 22.5;", afterWait: 1500 },
  { name: "dev-stairs-plan", dev: true, query: "", width: 1500, height: 950, editor: true, editorScript: `const b = structuredClone(e._doc); ${STAIRS_DOC} e.setDoc(b); e._floorId = b.floors[0].id; e.fit();` },
  { name: "dev-stairs-tool", dev: true, query: "", width: 1500, height: 950, editor: true, editorScript: "e._floorId = e._doc.floors[0].id; e.fit();", click: "Treppe", mouseDrag: [[860, 640], [940, 800]] },
  { name: "dev-stairs-form", dev: true, query: "", width: 1500, height: 1200, editor: true, editorScript: `const b = structuredClone(e._doc); ${STAIRS_DOC} e.setDoc(b); e._floorId = b.floors[0].id; e.selectItem("furniture", "stair_demo_2");` },
  { name: "dev-stairs-3d", dev: true, query: "", width: 1500, height: 900, click: "Erdgeschoss", settle: 2500, viewScript: `const panel = document.querySelector("nextfloor-panel"); panel._clean = true; const b = structuredClone(panel.data.building); ${STAIRS_DOC} panel.data.edit(b); setTimeout(() => { const w = v.viewer.getView(); w.target.set(x0 + 4.5, 0.8, z0 + 3.5); w.theta = -0.5; w.phi = 0.9; w.radius = 13; v.viewer.flyTo(w, 1); }, 400);`, afterWait: 2000 },
  { name: "dev-library", dev: true, query: "", width: 1500, height: 950, editor: true, click: "Möbel", wait: 500 },
  { name: "dev-library-kitchen", dev: true, query: "", width: 1500, height: 950, editor: true, click: "Möbel", tapAt: [690, 520], wait: 500, settle: 6000 },
  // ../preview/screenshots/stretch.json: a pack sofa and table at their size and resized (keeps arms, legs and plates)
  { name: "dev-stretch", dev: true, query: "?state=/preview/screenshots/stretch.json&noshowcase", width: 1400, height: 800, viewScript: "document.querySelector(\"nextfloor-panel\")._clean = true; const w = v.viewer.getView(); w.target.set(4.5, 0.5, 2.8); w.theta = -0.25; w.phi = 1.0; w.radius = 9; v.viewer.flyTo(w, 1);" },
  { name: "dev-lock", dev: true, query: "", width: 1400, height: 850, click: "Flur", settle: 1500 },
  // ../preview/screenshots/switches.json: light switches and sockets on a kitchen wall, some buttons on
  { name: "dev-switches", dev: true, query: "?state=/preview/screenshots/switches.json&noshowcase", width: 1400, height: 800, viewScript: "document.querySelector(\"nextfloor-panel\")._clean = true; const w = v.viewer.getView(); w.target.set(2.0, 1.0, 0.0); w.theta = 0.0; w.phi = 1.35; w.radius = 2.6; v.viewer.flyTo(w, 1);" },
  // ../preview/screenshots/covers.json: an awning, a curtain, an inside roller blind and a sliding gate following demo covers
  { name: "dev-covers", dev: true, query: "?state=/preview/screenshots/covers.json&noshowcase", width: 1400, height: 850, settle: 5000, viewScript: "document.querySelector(\"nextfloor-panel\")._clean = true; const w = v.viewer.getView(); w.target.set(3.5, 1.0, 4.0); w.theta = 0.5; w.phi = 1.0; w.radius = 11; v.viewer.flyTo(w, 1);" },
  { name: "dev-clock", dev: true, query: "", width: 1400, height: 850, settle: 1500, viewScript: "v.clock = \"top_right\"; v.lockButton = true; v.building = { ...v.building, settings: { ...v.building.settings, backdrop: { color: \"#3a1c4a\", image: null, dim: 0.3 } } };" },
  { name: "dev-wall-view", dev: true, query: "", width: 1400, height: 900, editor: true, editorScript: "e._wallView = { roomId: \"kueche\", edge: 0 };", settle: 800 },
  { name: "dev-walk", dev: true, query: "", width: 1400, height: 850, click: "Erdgeschoss", settle: 2500, viewScript: "v.toggleWalk(); const w = v.viewer.controls.walk; w.yaw = 2.6; w.pitch = -0.12; v.viewer.invalidate();" },
  { name: "dev-travel", dev: true, query: "", width: 1400, height: 850, settle: 2500, viewScript: "v.openTravel(24).then(() => v.travelTo(v._travel.from + (v._travel.to - v._travel.from) * 0.42));" },
  // ../preview/screenshots/cellar.json: a cellar below the ground with two windows that get light wells
  { name: "dev-light-well", dev: true, query: "?state=/preview/screenshots/cellar.json&noshowcase", width: 1400, height: 850, click: "Keller", settle: 1500, viewScript: "document.querySelector(\"nextfloor-panel\")._clean = true; const w = v.viewer.getView(); w.target.set(3, -1.2, 2); w.theta = 0.6; w.phi = 0.95; w.radius = 9; v.viewer.flyTo(w, 1);" },
  // ../preview/screenshots/sh3d.json: the Sweet Home 3D example home, imported
  { name: "dev-sh3d", dev: true, query: "?state=/preview/screenshots/sh3d.json&noshowcase", width: 1400, height: 850, settle: 1500 },
  // ../preview/screenshots/household.json: bins with pickups, a mailbox with post, a thirsty plant
  { name: "dev-household", dev: true, query: "?state=/preview/screenshots/household.json&noshowcase", width: 1400, height: 850, settle: 1500, viewScript: "const w = v.viewer.getView(); w.target.set(4, 0.5, 1.8); w.theta = -0.2; w.phi = 1.0; w.radius = 7.5; v.viewer.flyTo(w, 1);" },
  { name: "dev-pets", dev: true, query: "", width: 1400, height: 850, click: "Erdgeschoss", settle: 1200, viewScript: "for (const p of v.viewer.pets.values()) { p.motion.rest = 999; p.motion.target = null; } const pets = [...v.viewer.pets.values()]; pets[0].motion.pos = [2.2, 1.6]; pets[1].motion.pos = [3.2, 1.9]; pets[1].floorId = pets[0].floorId; const w = v.viewer.getView(); w.target.set(2.7, 0.3, 1.8); w.theta = 0.3; w.phi = 1.0; w.radius = 3; v.viewer.flyTo(w, 1);" },
  { name: "dev-day-curves", dev: true, query: "", width: 1400, height: 850, settle: 4000 },
  { name: "dev-imperial", dev: true, query: "", width: 1400, height: 900, editor: true, editorScript: "e._doc = { ...e._doc, settings: { ...e._doc.settings, units: \"imperial\" } }; e.requestUpdate();", settle: 600 },
  // ../preview/screenshots/lhouse.json: an L-shaped house, a wing roof meeting the main roof at a right angle
  { name: "dev-lhouse", dev: true, query: "?state=/preview/screenshots/lhouse.json&noshowcase", width: 1400, height: 850, settle: 1500, viewScript: "document.querySelector(\"nextfloor-panel\")._clean = true; const w = v.viewer.getView(); w.target.set(6, 3, 6); w.theta = 0.9; w.phi = 0.95; w.radius = 22; v.viewer.flyTo(w, 1);" },
  // the solid wall view (painted walls: outside, inside and per room) and the sloped wall view, with and without paint
  { name: "dev-solid", dev: true, query: "", width: 1400, height: 850, settle: 2500, viewScript: "const p = document.querySelector(\"nextfloor-panel\"); p._clean = true; p.applyEdit((b0) => { const b = structuredClone(b0); b.settings.wall_paint_outside = \"#c9b48f\"; b.floors.forEach((f) => f.rooms.forEach((r, i) => { if (i % 3 === 0) r.wall_paint = \"#8fb8d6\"; else if (i % 3 === 1) r.wall_paint = \"#d9a59a\"; })); return b; }); p.setPref(\"solidWalls\", true);" },
  { name: "dev-solid-slope", dev: true, query: "", width: 1400, height: 850, click: "Erdgeschoss", settle: 2500, viewScript: "const p = document.querySelector(\"nextfloor-panel\"); p._clean = true; p.applyEdit((b0) => { const b = structuredClone(b0); b.settings.wall_paint_outside = \"#c9b48f\"; b.floors.forEach((f) => f.rooms.forEach((r, i) => { if (i % 3 === 0) r.wall_paint = \"#8fb8d6\"; else if (i % 3 === 1) r.wall_paint = \"#d9a59a\"; })); return b; }); p.setPref(\"solidWalls\", true); p._wallMode = \"slope\"; setTimeout(() => { const w = v.viewer.getView(); w.phi = 1.05; v.viewer.flyTo(w, 1); }, 300);" },
  { name: "dev-slope", dev: true, query: "", width: 1400, height: 850, click: "Erdgeschoss", settle: 2500, viewScript: "const p = document.querySelector(\"nextfloor-panel\"); p._clean = true; p.setPref(\"solidWalls\", false); p._wallMode = \"slope\"; setTimeout(() => { const w = v.viewer.getView(); w.phi = 1.05; v.viewer.flyTo(w, 1); }, 300);" },
  // a language file: ?lang=es (LANG picks another one)
  { name: "dev-lang", dev: true, query: `?lang=${process.env.LANG_CODE ?? "es"}`, width: 1400, height: 850, settle: 2500 },
  { name: "dev-pool-cut", dev: true, query: "", width: 1500, height: 950, editor: true, editorScript: POOL_SCRIPT, then3d: "Erdgeschoss" },
  { name: "view-room-light", query: "", ha: "light", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer" },
  { name: "card-light", query: "?card", ha: "light", width: 1400, height: 820 },
  { name: "view-day", query: "", width: 1280, height: 800, click: "Tag" },
  { name: "view-blueprint", query: "", width: 1280, height: 800, click: "Blueprint" },
  { name: "view-cut", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Schnitt" },
  { name: "view-heat", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Temp." },
  // the live features
  { name: "view-weather-rain", query: "?weather=rainy", width: 1280, height: 800 },
  { name: "view-weather-snow", query: "?weather=snowy&night", width: 1280, height: 800 },
  { name: "view-energy", query: "?pv=5400&flows", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-media", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer" },
  // the editor and the extensions page
  { name: "editor", query: "", width: 1500, height: 950, editor: true, editorScript: "e.fit();" },
  { name: "editor-furniture", query: "", width: 1500, height: 950, editor: true, click: "Möbel" },
  { name: "editor-packs", query: "", width: 1500, height: 950, editor: true, editorScript: PACK_SCRIPT, then3d: "Erdgeschoss" },
  { name: "editor-energy", query: "?pv=5400&flows", width: 1500, height: 950, editor: true, click: "Energie" },
  { name: "editor-sections", query: "", width: 1500, height: 950, editor: true, openDetails: true, scrollSide: true },
  { name: "editor-roof-sections", query: "", width: 1500, height: 950, editor: true, click: "Dach", editorScript: "e._floorId = e._doc.floors[0].id; e.roof.useSections(); e.roof.sectionId = e._doc.settings.roof.sections[0].id;" },
  // a cable route for the grid connection: drawn along the wall, the route list shows its points
  { name: "dev-energy-route", dev: true, query: "?pv=5400&flows", width: 1500, height: 950, editor: true, click: "Energie", editorScript: "e._floorId = e._doc.floors[0].id; e.routeActions().start('grid'); e._routeDraft = { key: 'grid', points: [[1, 0.3], [6, 0.3], [6, 4]].map(([x, z]) => ({ floor_id: e._doc.floors[0].id, x, z })) }; e.routeActions().finish(); e.routeActions().start('battery'); e._routeDraft = { ...e._routeDraft, points: [{ floor_id: e._doc.floors[0].id, x: 2, z: 5 }] }; e.fit();" },
  { name: "dev-energy-route-3d", dev: true, query: "?pv=5400&flows", width: 1280, height: 800, settle: 2500, viewScript: "const panel = document.querySelector('nextfloor-panel'); const b = structuredClone(panel.data.building); const g = b.floors[0].id; b.energy.routes = (b.settings.roof.solar ?? []).map((f) => ({ key: 'solar:' + f.id, cable: true, points: [[-1, 0.3], [-1, 9]].map(([x, z]) => ({ floor_id: g, x, z })) })); panel.data.edit(b);", afterWait: 2500 },
  // #39: the Outside chip next to the floors and its panel over the house view
  { name: "dev-outside", dev: true, query: "", width: 1280, height: 800, settle: 2500, viewScript: "document.querySelector('nextfloor-panel').openOutside();", afterWait: 1500 },
  // #36: an LED strip rising 35° along a wall from 1 m, beside a level one
  { name: "dev-strip-rise", dev: true, query: "", width: 1280, height: 800, click: "Erdgeschoss", settle: 2500, viewScript: "const panel = document.querySelector('nextfloor-panel'); const b = structuredClone(panel.data.building); const g = b.floors[0]; const r = g.rooms[0]; const xs = r.points.map((p) => p[0]), zs = r.points.map((p) => p[1]); const x = (Math.min(...xs) + Math.max(...xs)) / 2, z = Math.min(...zs) + 0.05; g.furniture.push({ id: 'rise', type: 'led_strip', x, z, rotation: 0, w: 2, d: 0.03, h: 0.02, variant: null, mount_y: 1, rise: 35, entity: null }, { id: 'flat', type: 'led_strip', x, z: z + 0.4, rotation: 0, w: 2, d: 0.03, h: 0.02, variant: null, mount_y: 1, entity: null }); panel.data.edit(b);", afterWait: 2500 },
  // #50: a plugin that takes on camera.* (as the Cameras plugin does): the camera must show in the room's device list
  { name: "dev-camera-list", dev: true, query: "", width: 1500, height: 1100, editor: true, editorScript: "window.NextFloor.register({ id: 'cams', name: 'Cams', version: '1.0.0', apiVersion: 1, devices: [{ match: (id) => id.startsWith('camera.'), kind: 'sensor' }] }); e._floorId = e._doc.floors[0].id; const r = e._doc.floors[0].rooms.find((x) => x.name === 'Wohnzimmer'); e.selectItem('room', r.id); setTimeout(() => { const t = e.renderRoot.textContent; const d = document.createElement('div'); d.style.cssText = 'position:fixed;top:0;left:0;z-index:9999;background:#000;color:#0f0;font:20px monospace;padding:10px'; d.textContent = 'camera in list: ' + t.includes('Wohnzimmer Kamera') + ' | Kamera mentions: ' + (t.match(/Kamera/g) || []).length; document.body.append(d); }, 800);", openDetails: true, afterWait: 1500 },
  { name: "dev-sub-meter-section", dev: true, query: "?pv=5400&flows", width: 1500, height: 950, editor: true, click: "Energie", editorScript: SUB_METER_FORM("", "Energiemodus") },
  { name: "dev-sub-meter-form", dev: true, query: "?pv=5400&flows", width: 1500, height: 950, editor: true, click: "Energie", editorScript: SUB_METER_FORM('e._floorId = b.floors[1].id; e.selectItem("furniture", "og_meter");', "Hängt an Zähler") },
  { name: "dev-sub-meter-inverter", dev: true, query: "?pv=5400&flows", width: 1500, height: 950, editor: true, click: "Energie", editorScript: SUB_METER_FORM('e._floorId = b.floors[0].id; e.selectItem("furniture", "inv_balkon");', "Hängt an Zähler") },
  { name: "dev-sub-meter-label", dev: true, query: "?pv=5400&flows", width: 1280, height: 800, click: "Obergeschoss", viewScript: SUB_METER_VIEW(false), afterWait: 1500 },
  { name: "dev-sub-meter-unmetered", dev: true, query: "?pv=5400&flows", width: 1280, height: 800, click: "Obergeschoss", viewScript: SUB_METER_VIEW(true), afterWait: 1500 },
  { name: "editor-solar-form", query: "?pv=5400&flows", width: 1500, height: 950, editor: true, click: "Energie", editorScript: "e.roof.selectField(e._doc.settings.roof.solar[0].id);" },
  { name: "editor-smoke", query: "", width: 1500, height: 950, editor: true, editorScript: `const f = e._doc.floors[0]; e._floorId = f.id;
const out = {}; const snap = () => JSON.stringify(e._doc); const start = snap();
const room = f.rooms[0]; e.selectItem("room", room.id);
out.nudged = e.nudgeSelection(0.5, 0); out.dx = e._doc.floors[0].rooms[0].points[0][0] - room.points[0][0];
e.duplicateRoom(); out.rooms = e._doc.floors[0].rooms.length - f.rooms.length;
e.deleteRoom(); out.afterDelete = e._doc.floors[0].rooms.length - f.rooms.length;
e.addRoom([[30,30],[33,30],[33,33]]); out.added = e._doc.floors[0].rooms.length - f.rooms.length;
e.addFurniture("sofa"); out.furniture = e._doc.floors[0].furniture.length - f.furniture.length;
e.rotateFurniture(90); out.rot = e._doc.floors[0].furniture.at(-1).rotation;
e.duplicateFurniture(); e.deleteFurniture(); out.selFurn = e.sel.furniture !== null;
e._shiftAll = false; e.shiftFloor(1, 2); out.shifted = e._doc.floors[0].rooms[0].points[0][0] - f.rooms[0].points[0][0];
e.turnFloor(); out.turned = e._doc.floors[0].furniture[0].rotation !== f.furniture[0].rotation;
for (let i = 0; i < 40; i++) e.undo(); out.undoneAll = snap() === start;
e.redo(); out.canRedo = e._canRedo;
window.__smoke = out;` },
  { name: "editor-room", query: "", width: 1500, height: 950, editor: true, editorScript: "e._floorId = e._doc.floors[0].id; e.selectItem('room', e._doc.floors[0].rooms[0].id); e.side.packages = true;" },
  { name: "editor-opening", query: "", width: 1500, height: 950, editor: true, editorScript: "e._floorId = e._doc.floors[0].id; const o = e._doc.floors[0].openings.find((x) => x.type === 'window'); e.selectItem('opening', o.id);" },
  { name: "editor-furn-form", query: "?pv=5400&flows", width: 1500, height: 950, editor: true, editorScript: "e._floorId = e._doc.floors[0].id; const f = e._doc.floors[0].furniture.find((x) => x.type === 'inverter') || e._doc.floors[0].furniture[0]; e.selectItem('furniture', f.id);" },
  { name: "editor-drag", query: "", width: 1500, height: 950, editor: true, editorScript: "e._floorId = e._doc.floors[0].id; window.__x0 = e._doc.floors[0].rooms[0].points[0][0]; window.__f0 = e._doc.floors[0].furniture.length;", mouseDrag: [[330, 480], [430, 480]] },
  { name: "editor-roof", query: "", width: 1500, height: 950, editor: true, click: "Dach" },
  { name: "extensions", query: "", width: 1280, height: 950, click: "✦ Erweiterungen", wait: 800 },
  // pastes a small pack into the furniture packs block and imports it
  { name: "dev-pack-paste", dev: true, query: "", width: 1280, height: 950, click: "✦ Erweiterungen", wait: 800, viewScript: "const pm = document.querySelector('nextfloor-panel').shadowRoot.querySelector('nf-extensions').shadowRoot.querySelector('nf-pack-manager'); const pack = { format: 'nfpack', version: 1, id: 'demo.hvac', name: 'Klima', publisher: 'Demo', items: [{ id: 'split', name: { de: 'Split-Klimagerät' }, size: [0.9, 0.3, 0.22], climate: true, mount: 'wall', wall_y: 2.1, parts: [{ shape: 'box', x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: 'body' }] }] }; pm.renderRoot.querySelector('textarea').value = JSON.stringify(pack, null, 2); pm.renderRoot.querySelector('.nf-primary').click(); setTimeout(() => pm.scrollIntoView({ block: 'start' }), 400);", afterWait: 800 },
  // other devices
  { name: "card", query: "?card", width: 1400, height: 820 },
  { name: "phone", query: "", width: 390, height: 844, click: "Erdgeschoss" },
  { name: "tablet", query: "", width: 1180, height: 820, click: "Tablet" },
];

// SHOWCASE=pack%3Aa_wohnzimmer:7 → showcase pages 1..7 of that set (sc-1 … sc-7), for looking over a whole pack
if (process.env.SHOWCASE) {
  const [set, pages] = process.env.SHOWCASE.split(":");
  for (let n = 1; n <= Number(pages); n++) shots.push({ name: `sc-${n}`, dev: true, query: `?showcase&lang=en&set=${set}&page=${n}`, width: 1400, height: 800 });
}

const errors = [];
const only = process.env.SHOTS?.split(",");
for (const shot of shots.filter((s) => (only ? only.includes(s.name) : !s.dev))) {
  const page = await browser.newPage();
  if (process.env.FAKE_TILES) {
    // no internet needed: OpenStreetMap tiles are answered with a numbered grid tile
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const m = /tile\.openstreetmap\.org\/(\d+)\/(\d+)\/(\d+)\.png/.exec(req.url());
      if (!m) return req.continue();
      const [, z, x, y] = m;
      const tint = (Number(x) + Number(y)) % 2 ? "#6a8f5a" : "#8aa97a";
      const body = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="256" height="256" fill="${tint}"/><path d="M0 128H256M128 0V256" stroke="#fff" stroke-width="6"/><rect x="1" y="1" width="254" height="254" fill="none" stroke="#223" stroke-width="2"/><text x="12" y="30" font-size="22" font-family="sans-serif" fill="#112">${z}/${x}/${y}</text><text x="116" y="22" font-size="18" fill="#a00">N</text></svg>`;
      req.respond({ status: 200, contentType: "image/svg+xml", headers: { "access-control-allow-origin": "*" }, body });
    });
  }
  page.on("pageerror", (e) => errors.push(`${shot.name}: ${e.message}`));
  page.on("console", (m) => m.type() === "error" && !m.location()?.url?.endsWith("favicon.ico") && errors.push(`${shot.name}: ${m.text()}`));
  await page.setViewport({ width: shot.width, height: shot.height, deviceScaleFactor: 1 });
  // every shot starts with the default settings (the panel remembers quality and FPS per device)
  // (only on the first load of the tab, so a reload keeps what the page stored)
  await page.evaluateOnNewDocument(() => {
    if (sessionStorage.getItem("nf-shot")) return;
    sessionStorage.setItem("nf-shot", "1");
    localStorage.clear();
  });
  const ha = shot.ha ?? process.env.HA;
  const query = shot.query + (ha ? `${shot.query ? "&" : "?"}ha=${ha}` : "");
  await page.goto(base + query, { waitUntil: "networkidle0", timeout: 120000 });
  await new Promise((r) => setTimeout(r, 1200));
  const clickText = async (text) => {
    await page.evaluate((t) => {
      const find = (root) => {
        // exact text, or the first part of a row button ("Flur" in "Flur 12,8 m²")
        for (const el of root.querySelectorAll("button")) if (el.textContent.trim() === t || el.firstElementChild?.textContent.trim() === t) return el;
        for (const el of root.querySelectorAll("*")) if (el.shadowRoot) {
          const hit = find(el.shadowRoot);
          if (hit) return hit;
        }
        return null;
      };
      find(document)?.click();
    }, text);
    await new Promise((r) => setTimeout(r, 1200));
  };
  const hoverText = async (text) => {
    const at = await page.evaluate((t) => {
      const find = (root) => {
        for (const el of root.querySelectorAll("button")) if (el.textContent.trim() === t) return el;
        for (const el of root.querySelectorAll("*")) if (el.shadowRoot) {
          const hit = find(el.shadowRoot);
          if (hit) return hit;
        }
        return null;
      };
      const el = find(document);
      if (!el) return null;
      el.scrollIntoView({ block: "center" });
      const r = el.getBoundingClientRect();
      return [r.left + r.width / 2, r.top + r.height / 2];
    }, text);
    if (at) await page.mouse.move(at[0], at[1]);
    await new Promise((r) => setTimeout(r, 1500));
  };
  if (shot.wait) await new Promise((r) => setTimeout(r, shot.wait));
  if (shot.editor) await clickText("Editor");
  if (shot.select) await clickText(shot.select);
  if (shot.click) await clickText(shot.click);
  if (shot.then) await clickText(shot.then);
  if (shot.tapAt) {
    await page.mouse.click(shot.tapAt[0], shot.tapAt[1]);
    await new Promise((r) => setTimeout(r, 900));
  }
  if (shot.editRoomName) {
    // change a room name through the panel's data controller, wait for the failed save, then reload
    await page.evaluate((name) => {
      const panel = document.querySelector("nextfloor-panel");
      const b = structuredClone(panel.data.building);
      b.floors[0].rooms[0].name = name;
      panel.data.edit(b);
    }, shot.editRoomName);
    await new Promise((r) => setTimeout(r, 1500));
    if (shot.reload) {
      await page.reload({ waitUntil: "networkidle0", timeout: 120000 });
      await new Promise((r) => setTimeout(r, 1200));
    }
  }
  if (shot.viewScript) {
    // runs with v = the 3D view of the panel (search, quick menu, swipe)
    await page.evaluate((code) => {
      const v = document.querySelector("nextfloor-panel")?.shadowRoot.querySelector("nf-view3d") ?? null;
      new Function("v", code)(v);
    }, shot.viewScript);
    await new Promise((r) => setTimeout(r, 1500));
  }
  if (shot.editorScript) {
    await page.evaluate((code) => {
      const e = document.querySelector("nextfloor-panel").shadowRoot.querySelector("nf-editor");
      new Function("e", code)(e);
    }, shot.editorScript);
    await new Promise((r) => setTimeout(r, 1200 + (shot.afterWait ?? 0)));
    // DEBUG_EVAL="<code using e>" prints what the editor says (for looking into a scene)
    if (process.env.DEBUG_EVAL) {
      const out = await page.evaluate((code) => {
        const e = document.querySelector("nextfloor-panel").shadowRoot.querySelector("nf-editor");
        try {
          return String(new Function("e", "return " + code)(e));
        } catch (err) {
          return "ERROR " + err.message;
        }
      }, process.env.DEBUG_EVAL);
      console.log("DEBUG", out);
    }
    if (shot.mouseDrag) {
      const [[x0, y0], [x1, y1]] = shot.mouseDrag;
      await page.mouse.move(x0, y0);
      await page.mouse.down();
      await page.mouse.move((x0 + x1) / 2, (y0 + y1) / 2, { steps: 4 });
      await page.mouse.move(x1, y1, { steps: 4 });
      await page.mouse.up();
      await new Promise((r) => setTimeout(r, 400));
      if (process.env.DEBUG_EVAL2) {
        console.log("DEBUG2", await page.evaluate((code) => {
          const e = document.querySelector("nextfloor-panel").shadowRoot.querySelector("nf-editor");
          return String(new Function("e", "return " + code)(e));
        }, process.env.DEBUG_EVAL2));
      }
    }
    if (shot.then3d) {
      await clickText("3D");
      await clickText(shot.then3d);
      for (const t of [shot.then3dAlso ?? []].flat()) await clickText(t);
      if (shot.camera) {
        // turn the camera (radius, theta, phi around the house) for a view from another side
        await page.evaluate((cam) => {
          const v = document.querySelector("nextfloor-panel")?.shadowRoot.querySelector("nf-view3d") ?? null;
          const viewer = Object.values(v).find((x) => x && x.floors && x.floorMap);
          const { target, ...rest } = cam;
          if (target) viewer.controls.view.target.set(target.x, target.y ?? 1, target.z);
          Object.assign(viewer.controls.view, rest);
          viewer.invalidate();
        }, shot.camera);
        await new Promise((r) => setTimeout(r, 1500));
      }
      // DEBUG_VIEW="<code using v>" prints what the panel's 3D view says after the switch
      if (process.env.DEBUG_VIEW) {
        const out = await page.evaluate((code) => {
          const v = document.querySelector("nextfloor-panel")?.shadowRoot.querySelector("nf-view3d") ?? null;
          try {
            return String(new Function("v", "return " + code)(v));
          } catch (err) {
            return "ERROR " + err.message;
          }
        }, process.env.DEBUG_VIEW);
        console.log("DEBUG_VIEW", out);
      }
    }
  }
  if (shot.furnishDrag) {
    await clickText("Einrichten");
    // screen position of the item: project its centre with the viewer's camera
    const at = await page.evaluate((id) => {
      const view = document.querySelector("nextfloor-panel").shadowRoot.querySelector("nf-view3d");
      const v = view.viewer;
      const fv = v.floors.find((f) => f.floor.furniture.some((m) => m.id === id));
      const f = fv.floor.furniture.find((m) => m.id === id);
      const p = v.camera.position.clone().set(f.x, fv.floor.elevation + fv.y + f.h * 0.6, f.z).project(v.camera);
      const r = view.shadowRoot.querySelector("canvas").getBoundingClientRect();
      return [r.left + ((p.x + 1) / 2) * r.width, r.top + ((1 - p.y) / 2) * r.height];
    }, shot.furnishDrag.id);
    await page.mouse.move(at[0], at[1]);
    await page.mouse.down();
    for (let i = 1; i <= 10; i++) await page.mouse.move(at[0] + (shot.furnishDrag.dx * i) / 10, at[1] + (shot.furnishDrag.dy * i) / 10);
    await page.mouse.up();
    await new Promise((r) => setTimeout(r, 1500));
  }
  if (shot.furnishTap) {
    await clickText("Einrichten");
    const at = await page.evaluate((pt) => {
      const view = document.querySelector("nextfloor-panel").shadowRoot.querySelector("nf-view3d");
      const v = view.viewer;
      const fv = v.floors[0];
      const p = v.camera.position.clone().set(pt.x, fv.floor.elevation + fv.y + 0.02, pt.z).project(v.camera);
      const r = view.shadowRoot.querySelector("canvas").getBoundingClientRect();
      return [r.left + ((p.x + 1) / 2) * r.width, r.top + ((1 - p.y) / 2) * r.height];
    }, shot.furnishTap);
    await page.mouse.click(at[0], at[1]);
    await new Promise((r) => setTimeout(r, 1200));
  }
  if (shot.editorState) {
    await page.evaluate((state) => {
      const editor = document.querySelector("nextfloor-panel").shadowRoot.querySelector("nf-editor");
      Object.assign(editor, state);
    }, shot.editorState);
    await new Promise((r) => setTimeout(r, 300));
  }
  if (shot.hover) await hoverText(shot.hover);
  if (shot.openDetails) {
    await page.evaluate(() => {
      const editor = document.querySelector("nextfloor-panel").shadowRoot.querySelector("nf-editor");
      for (const d of editor.shadowRoot.querySelectorAll("details.nf-section")) d.open = !d.querySelector(".nf-library");
    });
    await new Promise((r) => setTimeout(r, 300));
  }
  if (shot.scrollSide) {
    await page.evaluate(() => {
      const editor = document.querySelector("nextfloor-panel").shadowRoot.querySelector("nf-editor");
      const side = editor.shadowRoot.querySelector(".nf-side");
      side.scrollTop = side.scrollHeight;
    });
    await new Promise((r) => setTimeout(r, 300));
  }
  if (shot.settle) await new Promise((r) => setTimeout(r, shot.settle));
  await page.screenshot({ path: join(outDir, `${shot.name}.png`) });
  await page.close();
  console.log(`saved ${shot.name}.png`);
}
await browser.close();
server.close();
if (errors.length) {
  console.error("Errors:\n" + errors.join("\n"));
  process.exit(1);
}
