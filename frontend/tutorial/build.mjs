// Puts the recorded episodes together: one video (silent), subtitles and a transcript in German and English, the chapter list, and
// narration.json (every segment with its start, end and both texts) for the voice-over.
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const lang = process.env.LANG_UI === "de" ? "de" : "en";
const root = process.env.OUT ?? `${import.meta.dirname}/out/${lang}`;
const ffmpeg = execFileSync("python3", ["-c", "import imageio_ffmpeg;print(imageio_ffmpeg.get_ffmpeg_exe())"]).toString().trim();
const episodes = readdirSync(root).filter((d) => /^ep\d+$/.test(d)).sort();

const clock = (s, comma) => {
  const ms = Math.round(s * 1000);
  const p = (n, w = 2) => String(n).padStart(w, "0");
  return `${p(Math.floor(ms / 3600000))}:${p(Math.floor(ms / 60000) % 60)}:${p(Math.floor(ms / 1000) % 60)}${comma ? "," : "."}${p(ms % 1000, 3)}`;
};
const short = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

let offset = 0;
const concat = [];
const segments = [];
const chapters = [];
for (const ep of episodes) {
  const data = JSON.parse(readFileSync(join(root, ep, `${ep}.segments.json`), "utf8"));
  for (const line of readFileSync(join(root, ep, `${ep}.concat.txt`), "utf8").split("\n")) {
    concat.push(line.startsWith("file '") ? `file '${join(root, ep, line.slice(6, -1))}'` : line);
  }
  for (const s of data.segments) segments.push({ ...s, start: s.start + offset, end: s.end + offset, episode: ep });
  for (const c of data.chapters) chapters.push({ ...c, start: c.start + offset, episode: ep });
  offset += data.seconds;
}
// ffmpeg's concat needs the last file twice and no duplicate trailing duration
writeFileSync(join(root, "all.concat.txt"), concat.join("\n") + "\n");
const mp4 = join(root, `nextfloor-tutorial.${lang}.mp4`);
execFileSync(ffmpeg, ["-y", "-f", "concat", "-safe", "0", "-i", join(root, "all.concat.txt"), "-vf", "fps=30,format=yuv420p", "-c:v", "libx264", "-preset", "medium", "-crf", "20", "-movflags", "+faststart", mp4], { stdio: "ignore" });

for (const l of ["de", "en"]) {
  writeFileSync(join(root, `nextfloor-tutorial.${l}.srt`), segments.map((s, i) => `${i + 1}\n${clock(s.start, true)} --> ${clock(s.end, true)}\n${s[l]}\n`).join("\n"));
  writeFileSync(join(root, `nextfloor-tutorial.${l}.vtt`), "WEBVTT\n\n" + segments.map((s) => `${clock(s.start)} --> ${clock(s.end)}\n${s[l]}\n`).join("\n"));
  const lines = [`# ${l === "de" ? "NextFloor von Grund auf einrichten – Transkript" : "Setting up NextFloor from scratch – transcript"}`, ""];
  let chapter = -1;
  for (const s of segments) {
    const c = chapters.filter((x) => x.start <= s.start + 0.01).length - 1;
    if (c !== chapter && chapters[c]) {
      chapter = c;
      lines.push("", `## ${chapters[c].title[l]}  (${short(chapters[c].start)})`, "");
    }
    lines.push(`**[${short(s.start)}]** ${s[l]}`, "");
  }
  writeFileSync(join(root, `transcript.${l}.md`), lines.join("\n"));
}
for (const l of ["de", "en"]) writeFileSync(join(root, `narration.${l}.txt`), segments.map((s, i) => `${String(i + 1).padStart(3, "0")}: ${s[l]}`).join("\n\n") + "\n");
writeFileSync(join(root, "chapters.txt"), chapters.map((c) => `${short(c.start)} ${c.title.en}`).join("\n") + "\n");
writeFileSync(join(root, "narration.json"), JSON.stringify({ seconds: offset, segments: segments.map((s, i) => ({ id: i + 1, start: +s.start.toFixed(2), end: +s.end.toFixed(2), de: s.de, en: s.en })) }, null, 1));
console.log(`${mp4}: ${short(offset)} (${segments.length} segments, ${chapters.length} chapters)`);
