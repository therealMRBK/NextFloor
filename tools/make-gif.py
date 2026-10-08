"""Makes the README's animated demo from the frames that frontend/record-demo.mjs saves.

python tools/make-gif.py <frame-dir> docs/images/demo.gif
"""

from pathlib import Path
import sys

from PIL import Image

frames_dir, out = Path(sys.argv[1]), Path(sys.argv[2])
files = sorted(frames_dir.glob("f*.png"))
frames = [Image.open(f).convert("RGB").resize((840, 473), Image.Resampling.LANCZOS) for f in files]
# one shared palette keeps the colours steady from frame to frame and the file small
palette = frames[0].quantize(colors=80, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
quantized = [f.quantize(palette=palette, dither=Image.Dither.NONE) for f in frames]
durations = [110] * len(quantized)
durations[0], durations[-1] = 600, 1500
quantized[0].save(
    out, save_all=True, append_images=quantized[1:], duration=durations, loop=0, optimize=True, disposal=1
)
print(f"{out}: {len(quantized)} frames, {out.stat().st_size / 1024 / 1024:.1f} MB")
