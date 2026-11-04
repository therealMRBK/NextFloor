// Records the tutorial episode by episode. Each episode starts where the one before it ended (its plan is handed on as JSON), so one
// episode can be recorded again without redoing the others.
//   node tutorial/record.mjs 1        records episode 1 (the empty start)
//   node tutorial/record.mjs 3 4      records 3 and 4 (needs the plan left by episode 2)
//   node tutorial/record.mjs all
// Env: LANG_UI=en|de (language of the app in the picture), OUT=<dir> (default frontend/tutorial/out/<lang>)
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { translate } from "../src/i18n.ts";
import { Recorder } from "./rec.mjs";

const lang = process.env.LANG_UI === "de" ? "de" : "en";
const outRoot = process.env.OUT ?? `${import.meta.dirname}/out/${lang}`;
const files = readdirSync(join(import.meta.dirname, "episodes")).filter((f) => f.endsWith(".mjs")).sort();
const wanted = process.argv.slice(2);
// development: SCRATCH=/path/to/episode.mjs FROM=<episode whose end plan is the start> node tutorial/record.mjs scratch
if (wanted[0] === "scratch") {
  const t = (key, vars) => translate({ language: lang }, key, vars);
  const episode = await import(pathToFileURL(process.env.SCRATCH).href);
  const dir = "/tmp/tut-scratch";
  mkdirSync(dir, { recursive: true });
  const from = join(outRoot, "state", `ep${String(process.env.FROM ?? 1).padStart(2, "0")}.json`);
  const served = join(import.meta.dirname, "..", "..", "preview", ".tutorial-state.json");
  writeFileSync(served, readFileSync(from));
  const r = new Recorder({ out: dir, lang, t });
  await r.start({ query: "state=/preview/.tutorial-state.json" });
  try {
    await episode.run(r);
  } catch (e) {
    console.log("FAILED:", e.message);
    await r.page.screenshot({ path: "/tmp/tut-dump.png" });
  }
  await r.browser.close();
  r.server.close();
  process.exit(0);
}
const numbers = wanted.includes("all") || !wanted.length ? files.map((_, i) => i + 1) : wanted.map(Number);
mkdirSync(join(outRoot, "state"), { recursive: true });

const t = (key, vars) => translate({ language: lang }, key, vars);
for (const n of numbers) {
  const file = files[n - 1];
  if (!file) throw new Error(`no episode ${n}`);
  const episode = await import(pathToFileURL(join(import.meta.dirname, "episodes", file)).href);
  const name = `ep${String(n).padStart(2, "0")}`;
  const dir = join(outRoot, name);
  mkdirSync(dir, { recursive: true });
  const previous = join(outRoot, "state", `ep${String(n - 1).padStart(2, "0")}.json`);
  let query = "empty";
  if (n > 1) {
    if (!existsSync(previous)) throw new Error(`episode ${n} needs ${previous} (record episode ${n - 1} first)`);
    query = `state=/${join("nextfloor-launch-state", String(n))}`; // replaced below
  }
  const r = new Recorder({ out: dir, lang, t });
  if (n > 1) {
    // the page can only fetch from the static server: copy the state into the repository's tmp folder, which is served
    const served = join(import.meta.dirname, "..", "..", "preview", ".tutorial-state.json");
    writeFileSync(served, readFileSync(previous));
    query = "state=/preview/.tutorial-state.json";
  }
  console.log(`\n=== episode ${n}: ${episode.title.en} (${lang})`);
  const t0 = Date.now();
  await r.start({ query: [query, episode.query].filter(Boolean).join("&") });
  try {
    await episode.run(r);
  } catch (e) {
    console.log("FAILED at", r.time.toFixed(1), "s:", e.message, "\n", String(e.stack).split("\n").slice(0, 5).join("\n"));
    await r.page.screenshot({ path: join(dir, "failure.png") });
    await r.browser.close();
    r.server.close();
    process.exit(1);
  }
  // an episode that leaves for another page (the model showcase) hands on the plan it was given
  if (episode.keepState) writeFileSync(join(outRoot, "state", `${name}.json`), readFileSync(previous));
  else writeFileSync(join(outRoot, "state", `${name}.json`), JSON.stringify(await r.stateJson(), null, 1));
  const done = await r.finish(name);
  console.log(`episode ${n}: ${done.seconds.toFixed(0)} s of video, ${done.frames} frames, ${done.segments} narration segments, recorded in ${Math.round((Date.now() - t0) / 1000)} s`);
}
