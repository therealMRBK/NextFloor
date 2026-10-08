import puppeteer from "puppeteer-core";
import os from "node:os";
import fs from "node:fs";
const [out, token, ...pages] = process.argv.slice(2);
const b = await puppeteer.launch({ executablePath: os.homedir()+"/.cache/ms-playwright/chromium-1234/chrome-linux64/chrome", args:["--no-sandbox"] });
const p = await b.newPage();
const size = process.env.SIZE ? process.env.SIZE.split("x").map(Number) : [1440, 900];
await p.setViewport({ width: size[0], height: size[1] });
if (token !== "-") await p.setCookie({ name: "urm_session", value: token, domain: "127.0.0.1", path: "/" });
const errs = [];
p.on("pageerror", (e) => errs.push("pageerror " + e.message));
p.on("response", (r) => { if (r.status() >= 400 && !r.url().includes("favicon")) errs.push(r.status() + " " + r.url()); });
for (const u of pages) {
  const [url, name] = u.split("=>");
  await p.goto(url, { waitUntil: "networkidle0", timeout: 60000 }); await new Promise((r) => setTimeout(r, 900));
  await p.screenshot({ path: `${out}/${name}.png`, fullPage: process.env.FULL === "1" });
}
console.log("errors:", errs.length ? errs.slice(0, 8) : "none");
await b.close();
