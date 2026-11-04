// Makes one audio file per narration segment with Google Cloud Text-to-Speech (needs GOOGLE_TTS_API_KEY in the environment).
//   GOOGLE_TTS_API_KEY=… node tutorial/tts-google.mjs <out-dir> [en|de] [voice]
// Files are named 001.mp3 …, ready for `node tutorial/voiceover.mjs <out-dir> <lang>`. Existing files are kept, so a run can continue.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = process.argv[2];
const spoken = process.argv[3] === "de" ? "de" : "en";
const voice = process.argv[4] ?? (spoken === "de" ? "de-DE-Chirp3-HD-Charon" : "en-US-Chirp3-HD-Charon");
const key = process.env.GOOGLE_TTS_API_KEY;
const lang = process.env.LANG_UI === "de" ? "de" : "en";
const root = process.env.OUT ?? `${import.meta.dirname}/out/${lang}`;
if (!out || !key) throw new Error("usage: GOOGLE_TTS_API_KEY=… node tutorial/tts-google.mjs <out-dir> [en|de] [voice]");
mkdirSync(out, { recursive: true });
const { segments } = JSON.parse(readFileSync(join(root, "narration.json"), "utf8"));
let chars = 0;
for (const s of segments) {
  const file = join(out, `${String(s.id).padStart(3, "0")}.mp3`);
  if (existsSync(file)) continue;
  for (let attempt = 1; ; attempt++) {
    const res = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${key}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ input: { text: s[spoken] }, voice: { languageCode: voice.slice(0, 5), name: voice }, audioConfig: { audioEncoding: "MP3", speakingRate: 0.98 } }),
    });
    if (res.ok) {
      writeFileSync(file, Buffer.from((await res.json()).audioContent, "base64"));
      chars += s[spoken].length;
      break;
    }
    if (attempt >= 5) throw new Error(`segment ${s.id}: HTTP ${res.status} ${(await res.text()).slice(0, 200)}`);
    await new Promise((ok) => setTimeout(ok, 1500 * attempt));
  }
  if (s.id % 20 === 0) console.log(`${s.id}/${segments.length}`);
}
console.log(`done, ${chars} characters sent to the voice service`);
