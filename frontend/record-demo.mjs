// Records the animated demo for the README: the house turns, then the camera flies into a room.
// Usage (from frontend/): node record-demo.mjs <frame-dir>   (then docs/images/demo.gif is made from the frames with tools/make-gif.py)
import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const root = resolve(import.meta.dirname, "..");
const out = resolve(process.argv[2] ?? "/tmp/nf-frames");
mkdirSync(out, { recursive: true });
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css", ".png": "image/png", ".json": "application/json" };
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^([/\\])+/, "");
  const file = join(root, path);
  if (!file.startsWith(root) || !existsSync(file)) return void res.writeHead(404).end();
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(readFileSync(file));
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const url = `http://127.0.0.1:${server.address().port}/preview/index.html?pv=5400&flows&ha=dark`;
const exe = [process.env.CHROME_PATH, "/usr/bin/chromium", "/usr/bin/google-chrome", `${process.env.HOME}/.cache/ms-playwright/chromium-1234/chrome-linux64/chrome`].filter(Boolean).find((p) => existsSync(p));
const browser = await puppeteer.launch({ executablePath: exe, headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist", ...(process.getuid?.() === 0 ? ["--no-sandbox"] : [])] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle0", timeout: 120000 });
await new Promise((r) => setTimeout(r, 2500));

const view = (code) => page.evaluate((c) => { const v = document.querySelector("nextfloor-panel").shadowRoot.querySelector("nf-view3d"); return new Function("v", c)(v); }, code);
let n = 0;
const frame = async () => { await page.screenshot({ path: join(out, `f${String(n++).padStart(3, "0")}.png`) }); };

// 1) the house turns once around, a little over half a circle
const start = await view("const w = v.viewer.getView(); return { theta: w.theta, phi: w.phi, radius: w.radius };");
const FRAMES = 40;
for (let i = 0; i < FRAMES; i++) {
  await view(`const w = v.viewer.getView(); w.theta = ${start.theta} + ${i} * ${(Math.PI * 1.2) / FRAMES}; w.phi = ${start.phi}; w.radius = ${start.radius}; v.viewer.flyTo(w, 1);`);
  await new Promise((r) => setTimeout(r, 160));
  await frame();
}
// 2) into the ground floor and the living room (the same buttons a user taps)
const click = async (text) => {
  await page.evaluate((t) => {
    const find = (root) => {
      for (const el of root.querySelectorAll("button")) if (el.textContent.trim() === t || el.firstElementChild?.textContent.trim() === t) return el;
      for (const el of root.querySelectorAll("*")) if (el.shadowRoot) { const hit = find(el.shadowRoot); if (hit) return hit; }
      return null;
    };
    find(document)?.click();
  }, text);
};
await click("Erdgeschoss");
for (let i = 0; i < 6; i++) { await new Promise((r) => setTimeout(r, 250)); await frame(); }
await click(process.env.ROOM ?? "Wohnzimmer");
for (let i = 0; i < 14; i++) { await new Promise((r) => setTimeout(r, 220)); await frame(); }
console.log(`${n} frames in ${out}`);
await browser.close();
server.close();
