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
  const file = join(root, path);
  if (!file.startsWith(root) || !existsSync(file)) {
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
  { name: "view-house", query: "?pv=5400&flows", width: 1280, height: 800 },
  { name: "view-floor-eg", query: "?pv=5400&flows", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-room", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer" },
  { name: "view-stacked", query: "", width: 1280, height: 800, click: "Gestapelt" },
  // development views of a whole pack (PACK=nextfloor.ikea): the room from above, and three zooms along it
  { name: "pack-iso", dev: true, query: `?pack=${process.env.PACK ?? "nextfloor.ikea"}`, width: 1500, height: 760, viewScript: "document.querySelector(\"nextfloor-panel\")._clean = true; const s = window.nfShowcase; const w = v.viewer.getView(); w.target.set(s.cx, 0.6, s.cz); w.theta = -0.45; w.phi = 0.95; w.radius = Math.max(s.width, s.depth * 1.5) * 0.95; v.viewer.flyTo(w, 1);" },
  { name: "pack-colors", dev: true, query: "?cars&colors&row=26", width: 1500, height: 760, viewScript: "document.querySelector(\"nextfloor-panel\")._clean = true; const s = window.nfShowcase; const w = v.viewer.getView(); w.target.set(s.cx, 0.6, s.cz); w.theta = -0.45; w.phi = 0.9; w.radius = Math.max(s.width, s.depth * 1.5) * 0.9; v.viewer.flyTo(w, 1);" },
  { name: "pack-plan", dev: true, query: `?pack=${process.env.PACK ?? "nextfloor.ikea"}`, width: 1500, height: 700, editor: true, editorScript: "e.fit();" },
  ...[0, 1, 2].map((i) => ({ name: `pack-zoom-${i}`, dev: true, query: `?pack=${process.env.PACK ?? "nextfloor.ikea"}`, width: 1100, height: 700, viewScript: `document.querySelector("nextfloor-panel")._clean = true; const s = window.nfShowcase; const w = v.viewer.getView(); w.target.set(s.width * ${(i + 0.5) / 3}, 0.7, s.cz); w.theta = -0.55; w.phi = 0.85; w.radius = Math.max(5, s.width / 3 * 1.35); v.viewer.flyTo(w, 1);` })),
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
  { name: "view-cameras", query: "", width: 1280, height: 800, click: "Kameras" },
  { name: "view-camera-through", query: "", width: 1280, height: 800, click: "Erdgeschoss", viewScript: "v.lookThrough('camera.wohnzimmer');" },
  { name: "view-trail", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Spur" },
  // the editor and the extensions page
  { name: "editor", query: "", width: 1500, height: 950, editor: true, editorScript: "e.fit();" },
  { name: "editor-furniture", query: "", width: 1500, height: 950, editor: true, click: "Möbel" },
  { name: "editor-packs", query: "", width: 1500, height: 950, editor: true, editorScript: PACK_SCRIPT, then3d: "Erdgeschoss" },
  { name: "editor-energy", query: "?pv=5400&flows", width: 1500, height: 950, editor: true, click: "Energie" },
  { name: "editor-roof", query: "", width: 1500, height: 950, editor: true, click: "Dach" },
  { name: "extensions", query: "", width: 1280, height: 950, click: "✦ Erweiterungen", wait: 800 },
  // other devices
  { name: "card", query: "?card", width: 1400, height: 820 },
  { name: "phone", query: "", width: 390, height: 844, click: "Erdgeschoss" },
  { name: "tablet", query: "", width: 1180, height: 820, click: "Tablet" },
];

const errors = [];
const only = process.env.SHOTS?.split(",");
for (const shot of shots.filter((s) => (only ? only.includes(s.name) : !s.dev))) {
  const page = await browser.newPage();
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
      const v = document.querySelector("nextfloor-panel").shadowRoot.querySelector("nf-view3d");
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
    if (shot.then3d) {
      await clickText("3D");
      await clickText(shot.then3d);
      for (const t of [shot.then3dAlso ?? []].flat()) await clickText(t);
      if (shot.camera) {
        // turn the camera (radius, theta, phi around the house) for a view from another side
        await page.evaluate((cam) => {
          const v = document.querySelector("nextfloor-panel").shadowRoot.querySelector("nf-view3d");
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
          const v = document.querySelector("nextfloor-panel").shadowRoot.querySelector("nf-view3d");
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
