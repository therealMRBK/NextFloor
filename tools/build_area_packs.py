"""The area packs (a living room, a kitchen, a garage ...): registers them with build_packs.py, one module per group."""

import importlib

MODULES = ["area_living", "area_kitchen", "area_bath", "area_rooms2", "area_garden", "area_tech", "area_more", "area_seasonal"]


def register(bp):
    extend = importlib.import_module("area_extend")
    for pack in bp.PACKS:
        if pack["id"] in extend.EXTRA:
            more = extend.EXTRA[pack["id"]](bp)
            have = {i["id"] for i in pack["items"]}
            assert not have & {i["id"] for i in more}, pack["id"]
            pack["items"] += more

    for name in MODULES:
        for pid, title, desc, items in importlib.import_module(name).build(bp):
            ids = [i["id"] for i in items]
            assert len(ids) == len(set(ids)), (pid, [i for i in ids if ids.count(i) > 1])
            bp.pack(pid, title, desc, items)
