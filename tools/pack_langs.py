"""Writes the names of the area_more packs and items into frontend/lang/*.json ("packname:<pack>", "pack:<pack>:<item>").

Run after tools/build_packs.py when area_more.py changed. Existing keys are updated, new ones go before the colour names.
"""

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import area_more  # noqa: E402
import build_packs  # noqa: E402

LANG = Path(__file__).resolve().parent.parent / "frontend" / "lang"


def main() -> None:
    area_more.build(build_packs)
    for i, lang in enumerate(area_more.LANGS):
        path = LANG / f"{lang}.json"
        text = path.read_text(encoding="utf-8")
        indent = len(re.match(r"\{\n( *)", text).group(1))
        data = json.loads(text)
        new = {}
        for pid, (_de, _en, _desc, tr) in area_more.PACK_NAMES.items():
            new[f"packname:{pid}"] = tr[i]
        for key, tr in area_more.ITEM_NAMES.items():
            new[f"pack:{key}"] = tr[i]
        out = {}
        placed = False
        for k, v in data.items():
            if not placed and k.startswith("color:"):
                out.update({k2: v2 for k2, v2 in new.items() if k2 not in data})
                placed = True
            out[k] = new.get(k, v)
        if not placed:
            out.update({k2: v2 for k2, v2 in new.items() if k2 not in data})
        body = json.dumps(out, ensure_ascii=False, indent=indent)
        path.write_text(body + ("\n" if text.endswith("\n") else ""), encoding="utf-8")
        print(lang, len(new))


if __name__ == "__main__":
    main()
