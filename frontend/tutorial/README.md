# Tutorial recorder

Records a step-by-step video of setting up NextFloor from the empty start, in the online demo (invented devices, nothing real is touched),
together with a German and an English transcript. The video is silent; the transcript is meant for a voice-over.

How it works: a headless Chrome drives the demo like a user would (real mouse and keys), and a screenshot is taken after each small step.
The video is a list of stills with durations, so slow work costs nothing in the video. The narration is a list of segments; each lasts at
least as long as its text takes to speak.

```
cd frontend
node tutorial/record.mjs all           # every episode in order (about half an hour)
node tutorial/record.mjs 5             # one episode again (it starts from the plan the one before left in state/)
node tutorial/build.mjs                # video, subtitles, transcripts, chapters, narration.json, narration.<lang>.txt
LANG_UI=de node tutorial/record.mjs all && LANG_UI=de node tutorial/build.mjs   # the app in German in the picture
```

Output (default `frontend/tutorial/out/<en|de>/`, set `OUT` to change it): `nextfloor-tutorial.<lang>.mp4`, `nextfloor-tutorial.{de,en}.{srt,vtt}`,
`transcript.{de,en}.md`, `narration.{de,en}.txt` (one numbered text per segment, for text-to-speech), `narration.json`, `chapters.txt`.

Voice-over: make one audio file per segment named by its number (`001.mp3` …), then
`node tutorial/voiceover.mjs <audio-dir> [de|en]`. Segments that are spoken longer than planned hold the picture a little longer.

Writing an episode: `episodes/NN-name.mjs` exports `title`, optionally `query` (extra demo parameters) and `keepState`, and `run(r)`.
Use `r.say({de, en})` for narration, `r.click / drag / typeInto / choose / pick`, `r.show(seconds)` to let the picture stand, `r.spotAt` to
frame something. Texts of the app are looked up by their i18n key (`python3 tutorial/key.py "Add floor"` finds the key), so the same script
records the app in either language. For development: `SCRATCH=/tmp/x.mjs FROM=<episode> node tutorial/record.mjs scratch` runs a throw-away
episode from the plan an episode left, and `r.dump()` prints what is on screen.
