// Puts a voice-over on the silent tutorial video. The voice comes from you (an AI voice, for example): one audio file per narration
// segment, named by the segment's number (001.mp3 … or .wav, .m4a, .ogg), made from the texts in narration.<lang>.txt.
// Where a spoken segment is longer than its time in the video, the picture is held a little longer (nothing is cut), so the voice
// never overlaps the next segment. Writes the video with sound, subtitles that match the new timing and a list of the changes.
//   node tutorial/voiceover.mjs <audio-dir> [de|en]      (LANG_UI picks the folder of the recording, default en)
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const audioDir = process.argv[2];
const spoken = process.argv[3] === "de" ? "de" : "en";
const lang = process.env.LANG_UI === "de" ? "de" : "en";
const root = process.env.OUT ?? `${import.meta.dirname}/out/${lang}`;
if (!audioDir || !existsSync(audioDir)) throw new Error("usage: node tutorial/voiceover.mjs <audio-dir> [de|en]");
const ffmpeg = execFileSync("python3", ["-c", "import imageio_ffmpeg;print(imageio_ffmpeg.get_ffmpeg_exe())"]).toString().trim();

const probe = (file) => {
  try {
    execFileSync(ffmpeg, ["-i", file], { stdio: ["ignore", "pipe", "pipe"] });
  } catch (e) {
    const m = /Duration: (\d+):(\d+):(\d+\.\d+)/.exec(String(e.stderr));
    if (m) return Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]);
  }
  throw new Error(`cannot read the length of ${file}`);
};

const narration = JSON.parse(readFileSync(join(root, "narration.json"), "utf8"));
const files = new Map(readdirSync(audioDir).map((f) => [Number.parseInt(f, 10), join(audioDir, f)]).filter(([n]) => Number.isFinite(n)));
const GAP = 0.35; // a breath between two segments
// 1. how much longer each segment has to be
let shift = 0;
const plan = narration.segments.map((s) => {
  const file = files.get(s.id);
  const length = file ? probe(file) : 0;
  const slot = s.end - s.start;
  const extra = Math.max(0, length + GAP - slot);
  const entry = { ...s, file, length, extra, start2: s.start + shift, end2: s.end + shift + extra };
  shift += extra;
  return entry;
});
// 2. the picture: the last frame of a segment stays on for the extra time
const lines = readFileSync(join(root, "all.concat.txt"), "utf8").split("\n");
const frames = [];
for (let i = 0; i < lines.length; i++) if (lines[i].startsWith("file ")) frames.push({ file: lines[i], dur: lines[i + 1]?.startsWith("duration") ? Number(lines[i + 1].split(" ")[1]) : 0 });
let t = 0;
let next = 0;
const retimed = [];
for (const f of frames) {
  let dur = f.dur;
  t += f.dur;
  while (next < plan.length && plan[next].end <= t + 1e-6) {
    dur += plan[next].extra;
    next++;
  }
  retimed.push({ file: f.file, dur });
}
writeFileSync(join(root, "voice.concat.txt"), retimed.map((f) => `${f.file}\nduration ${f.dur.toFixed(4)}`).join("\n") + `\n${retimed.at(-1).file}\n`);
// 3. the sound: every file starts where its segment starts
const inputs = plan.filter((p) => p.file);
const args = ["-y", "-f", "concat", "-safe", "0", "-i", join(root, "voice.concat.txt")];
for (const p of inputs) args.push("-i", p.file);
const delays = inputs.map((p, i) => `[${i + 1}:a]adelay=${Math.round(p.start2 * 1000)}|${Math.round(p.start2 * 1000)}[a${i}]`);
const mix = `${delays.join(";")};${inputs.map((_, i) => `[a${i}]`).join("")}amix=inputs=${inputs.length}:normalize=0:dropout_transition=0[voice]`;
const out = join(root, `nextfloor-tutorial.${lang}.voice-${spoken}.mp4`);
writeFileSync(join(root, "voice.filter.txt"), mix);
execFileSync(ffmpeg, [...args, "-filter_complex_script", join(root, "voice.filter.txt"), "-map", "0:v", "-map", "[voice]", "-vf", "fps=30,format=yuv420p", "-c:v", "libx264", "-preset", "medium", "-crf", "20", "-c:a", "aac", "-b:a", "160k", "-movflags", "+faststart", out], { stdio: "inherit" });
// 4. subtitles in the new timing
const clock = (s) => {
  const ms = Math.round(s * 1000);
  const p = (n, w = 2) => String(n).padStart(w, "0");
  return `${p(Math.floor(ms / 3600000))}:${p(Math.floor(ms / 60000) % 60)}:${p(Math.floor(ms / 1000) % 60)},${p(ms % 1000, 3)}`;
};
writeFileSync(join(root, `nextfloor-tutorial.${spoken}.voice.srt`), plan.map((p, i) => `${i + 1}\n${clock(p.start2)} --> ${clock(p.end2)}\n${p[spoken]}\n`).join("\n"));
console.log(`${out}\n${plan.filter((p) => p.extra > 0).length} of ${plan.length} segments needed the picture held longer (${shift.toFixed(0)} s in all); ${plan.length - inputs.length} had no audio file`);
