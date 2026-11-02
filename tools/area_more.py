"""Packs added in 0.20.0: season, smart home 2, building services 2, wellness, garden 2, kitchen 2, vehicles 2,
outdoor kitchen, workshop 2, Japandi, loft, indoor greenery and music & studio.

Every item carries its names in the other languages (fr, es, it, nl, pl, pt, sv); tools/pack_langs.py writes them
into frontend/lang/*.json as "pack:<pack>:<item>" keys.
"""

from area_common import make

LEAF = "#3f7a4a"
LEAF2 = "#5c9a52"
WARM = "#ffd89a"
LANGS = ("fr", "es", "it", "nl", "pl", "pt", "sv")

# pack id -> (German name, English name, German description, names in LANGS)
PACK_NAMES: dict[str, tuple] = {}
# "pack:item" -> names in LANGS
ITEM_NAMES: dict[str, tuple] = {}


def build(bp):
    out = []

    def pack(pid, de, en, desc, tr):
        items = []
        PACK_NAMES[pid] = (de, en, desc, tr)
        out.append((pid, de, desc, items))

        def add(id_, de_, en_, size, fn, tr_, **kw):
            items.append(make(bp, id_, de_, en_, size, fn, **kw))
            ITEM_NAMES[f"{pid}:{id_}"] = tr_

        return add

    # ============================================================== season & decoration
    add = pack(
        "nextfloor.a_saison",
        "Saison & Deko",
        "Season & decoration",
        "Weihnachtsbaum mit Lichterkette, Adventskranz, Lichterketten, Kürbisse, Ostern und Schneemann",
        ("Saisons et déco", "Temporada y decoración", "Stagioni e decorazioni", "Seizoen & decoratie", "Sezon i dekoracje", "Estações e decoração", "Säsong & dekoration"),
    )

    def tree(m):
        parts = [m.c(0, 0, 0.45, 0.45, 0, 0.3, "#8a3b2a"), m.c(0, 0, 0.08, 0.08, 0.3, 0.2, "wood")]
        for i, (y, r) in enumerate(((0.45, 1.0), (0.95, 0.78), (1.4, 0.56), (1.8, 0.34))):
            parts.append(m.l(0, 0, r * m.w, r * m.w, y, 0.55, "#2f6b3a", tw=0.12, td=0.12))
            parts.append(m.c(0, 0, r * m.w * 0.82, r * m.w * 0.82, y + 0.12, 0.02, WARM, glow=True))
        parts.append(m.c(0, 0, 0.12, 0.12, 2.25, 0.12, "#ffcc33", glow=True))
        return parts

    add("xmas_tree", "Weihnachtsbaum mit Lichterkette", "Christmas tree with lights", (1.2, 1.2, 2.4), tree,
        ("Sapin de Noël lumineux", "Árbol de Navidad con luces", "Albero di Natale con luci", "Kerstboom met lichtjes", "Choinka z lampkami", "Árvore de Natal com luzes", "Julgran med ljusslinga"),
        electric=True, light="floor")
    add("advent_wreath", "Adventskranz", "Advent wreath", (0.4, 0.4, 0.2),
        lambda m: [
            m.c(0, 0, 0.4, 0.4, 0, 0.07, "#2f6b3a"),
            *[m.c(x, z, 0.05, 0.05, 0.05, 0.1, "#b3232f") for x, z in ((0.12, 0), (-0.12, 0), (0, 0.12), (0, -0.12))],
            *[m.c(x, z, 0.02, 0.02, 0.15, 0.03, WARM, glow=True) for x, z in ((0.12, 0), (-0.12, 0), (0, 0.12), (0, -0.12))],
        ],
        ("Couronne de l'Avent", "Corona de Adviento", "Corona dell'Avvento", "Adventskrans", "Wieniec adwentowy", "Coroa do Advento", "Adventsljusstake"),
        mount="surface", electric=True, light="table")
    add("lights_outdoor", "Lichterkette außen", "Outdoor string lights", (4.0, 0.1, 0.3),
        lambda m: [m.b(0, 0, m.w, 0.01, 0.25, 0.01, "dark"), *[m.c(-1.9 + 0.38 * i, 0, 0.06, 0.06, 0.12 + 0.08 * ((i % 3) == 1), 0.08, WARM, glow=True) for i in range(11)]],
        ("Guirlande extérieure", "Guirnalda exterior", "Catena luminosa esterna", "Lichtsnoer buiten", "Girlanda zewnętrzna", "Cordão de luzes exterior", "Ljusslinga utomhus"),
        mount="wall", wall_y=2.2, electric=True, light="strip")
    add("window_star", "Fensterstern", "Window star", (0.4, 0.06, 0.4),
        lambda m: [m.b(0, 0, 0.3, 0.03, 0.05, 0.3, "#fff1c9", glow=True, rot=45), m.b(0, 0, 0.3, 0.03, 0.05, 0.3, "#fff1c9", glow=True)],
        ("Étoile de fenêtre", "Estrella de ventana", "Stella da finestra", "Raamster", "Gwiazda okienna", "Estrela de janela", "Adventsstjärna"),
        mount="wall", wall_y=1.4, electric=True, light="wall")
    add("candle_arch", "Schwibbogen", "Candle arch", (0.6, 0.1, 0.4),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, 0.04, "wood"),
            m.l(0, 0, 0.56, 0.03, 0.04, 0.3, "wood", tw=0.2),
            *[m.c(-0.24 + 0.08 * i, 0, 0.02, 0.02, 0.04 + 0.3 * (1 - abs(i - 3) / 4), 0.04, WARM, glow=True) for i in range(7)],
        ],
        ("Arche de bougies", "Arco de velas", "Arco di candele", "Kaarsenboog", "Łuk świecznikowy", "Arco de velas", "Ljusstake (båge)"),
        mount="surface", electric=True, light="table")
    add("reindeer_light", "Leucht-Rentier", "Light-up reindeer", (0.9, 0.35, 1.0),
        lambda m: [
            m.b(0, 0, 0.6, 0.25, 0.5, 0.25, "#fff1c9", glow=True, edges="glow"),
            *[m.b(sx * 0.25, sz * 0.08, 0.04, 0.04, 0, 0.5, "#fff1c9", glow=True) for sx in (-1, 1) for sz in (-1, 1)],
            m.b(0.32, 0, 0.08, 0.08, 0.7, 0.2, "#fff1c9", glow=True),
            m.b(0.38, 0, 0.18, 0.12, 0.85, 0.1, "#fff1c9", glow=True),
            m.b(0.36, 0, 0.02, 0.2, 0.92, 0.08, "#fff1c9", glow=True),
        ],
        ("Renne lumineux", "Reno luminoso", "Renna luminosa", "Lichtgevend rendier", "Świecący renifer", "Rena luminosa", "Ljusren"),
        electric=True, light="garden")
    add("pumpkin", "Kürbis", "Pumpkin", (0.4, 0.4, 0.35),
        lambda m: [m.c(0, 0, 0.4, 0.4, 0, 0.3, "#e07b1f"), m.c(0, 0, 0.04, 0.04, 0.3, 0.05, "#5a4a2a")],
        ("Citrouille", "Calabaza", "Zucca", "Pompoen", "Dynia", "Abóbora", "Pumpa"))
    add("pumpkin_lantern", "Kürbislaterne", "Jack-o'-lantern", (0.4, 0.4, 0.38),
        lambda m: [
            m.c(0, 0, 0.4, 0.4, 0, 0.32, "#e07b1f"),
            m.b(0, 0.2, 0.2, 0.01, 0.1, 0.12, "#ffb347", glow=True),
            m.c(0, 0, 0.04, 0.04, 0.32, 0.05, "#5a4a2a"),
        ],
        ("Lanterne citrouille", "Calabaza iluminada", "Zucca intagliata", "Pompoenlantaarn", "Lampion z dyni", "Abóbora iluminada", "Pumpalykta"),
        electric=True, light="table")
    add("easter_tree", "Osterstrauch", "Easter tree", (0.5, 0.5, 0.9),
        lambda m: [
            m.c(0, 0, 0.22, 0.22, 0, 0.25, "white"),
            *[m.b(x, 0, 0.015, 0.015, 0.25, 0.6, "wood", rot=r) for x, r in ((-0.06, 10), (0, 0), (0.06, -10))],
            *[m.c(x, z, 0.06, 0.06, y, 0.08, c) for x, z, y, c in ((-0.14, 0, 0.7, "#f2a7c3"), (0.1, 0.05, 0.6, "#9fd4f5"), (0.0, -0.1, 0.78, "#f7e27a"), (0.15, -0.05, 0.5, "#b6e3a1"))],
        ],
        ("Arbre de Pâques", "Árbol de Pascua", "Albero di Pasqua", "Paastak", "Drzewko wielkanocne", "Árvore de Páscoa", "Påskris"),
        mount="surface")
    add("snowman", "Schneemann", "Snowman", (0.7, 0.7, 1.5),
        lambda m: [
            m.c(0, 0, 0.7, 0.7, 0, 0.65, "white"),
            m.c(0, 0, 0.5, 0.5, 0.6, 0.5, "white"),
            m.c(0, 0, 0.34, 0.34, 1.05, 0.34, "white"),
            m.c(0, 0.16, 0.04, 0.12, 1.18, 0.04, "#e07b1f", axis="z"),
            m.c(0, 0, 0.26, 0.26, 1.36, 0.14, "dark"),
        ],
        ("Bonhomme de neige", "Muñeco de nieve", "Pupazzo di neve", "Sneeuwpop", "Bałwan", "Boneco de neve", "Snögubbe"))
    add("gift_pile", "Geschenke", "Presents", (0.8, 0.6, 0.4),
        lambda m: [
            m.b(-0.2, 0, 0.35, 0.35, 0, 0.3, "#b3232f"), m.b(-0.2, 0, 0.36, 0.05, 0, 0.31, "#ffcc33"),
            m.b(0.2, 0.05, 0.3, 0.3, 0, 0.2, "#2f6b9a"), m.b(0.2, 0.05, 0.05, 0.31, 0, 0.21, "white"),
            m.b(0.05, -0.18, 0.25, 0.2, 0, 0.15, "#3f8a4a"),
        ],
        ("Cadeaux", "Regalos", "Regali", "Cadeaus", "Prezenty", "Presentes", "Julklappar"))

    # ============================================================== smart home 2
    add = pack(
        "nextfloor.a_smart2",
        "Smart Home 2",
        "Smart home 2",
        "Sirene, Access Point, Rauch- und CO-Melder, Luftentfeuchter, Würfellampe, Präsenzmelder und Wassermelder",
        ("Maison connectée 2", "Hogar inteligente 2", "Casa smart 2", "Slim huis 2", "Inteligentny dom 2", "Casa inteligente 2", "Smart hem 2"),
    )
    add("siren", "Sirene", "Siren", (0.18, 0.1, 0.22),
        lambda m: [m.b(0, 0, m.w, 0.05, 0, m.h, "white", edges="faint"), m.c(0, 0.05, 0.12, 0.05, 0.06, 0.12, "#e03a3a", glow=True, axis="z")],
        ("Sirène", "Sirena", "Sirena", "Sirene", "Syrena", "Sirene", "Siren"),
        mount="wall", wall_y=2.1, electric=True, light="wall")
    add("access_point", "WLAN-Access-Point", "Wi-Fi access point", (0.22, 0.22, 0.04),
        lambda m: [m.c(0, 0, m.w, m.d, 0, m.h, "white", edges="faint"), m.c(0, 0, 0.16, 0.16, 0, 0.005, RING_BLUE, glow=True)],
        ("Point d'accès Wi-Fi", "Punto de acceso Wi-Fi", "Access point Wi-Fi", "Wifi-accesspoint", "Punkt dostępowy Wi-Fi", "Ponto de acesso Wi-Fi", "Wi-Fi-åtkomstpunkt"),
        mount="ceiling", electric=True)
    add("access_point_wall", "WLAN-Access-Point (Wand)", "Wi-Fi access point (wall)", (0.16, 0.04, 0.16),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "white", edges="faint"), m.b(0, 0.02, 0.06, 0.005, 0.1, 0.01, RING_BLUE, glow=True)],
        ("Point d'accès Wi-Fi (mur)", "Punto de acceso Wi-Fi (pared)", "Access point Wi-Fi (parete)", "Wifi-accesspoint (wand)", "Punkt dostępowy Wi-Fi (ścienny)", "Ponto de acesso Wi-Fi (parede)", "Wi-Fi-åtkomstpunkt (vägg)"),
        mount="wall", wall_y=2.0, electric=True)
    add("smoke_detector", "Rauchmelder", "Smoke detector", (0.11, 0.11, 0.05),
        lambda m: [m.c(0, 0, m.w, m.d, 0, m.h, "white", edges="faint"), m.c(0.03, 0, 0.01, 0.01, 0, 0.005, "#e03a3a", glow=True)],
        ("Détecteur de fumée", "Detector de humo", "Rilevatore di fumo", "Rookmelder", "Czujnik dymu", "Detetor de fumo", "Brandvarnare"),
        mount="ceiling", electric=True)
    add("co_detector", "CO-Melder", "CO detector", (0.12, 0.04, 0.12),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "white", edges="faint"), m.b(0, 0.02, 0.06, 0.005, 0.07, 0.025, "#1d2533", screen=True)],
        ("Détecteur de CO", "Detector de CO", "Rilevatore di CO", "CO-melder", "Czujnik czadu", "Detetor de CO", "Kolmonoxidvarnare"),
        mount="wall", wall_y=1.5, electric=True)
    add("dehumidifier", "Luftentfeuchter", "Dehumidifier", (0.35, 0.25, 0.55),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.02, m.h - 0.02, "white", edges="faint"),
            m.b(0, 0, 0.28, 0.2, m.h - 0.02, 0.02, "#c9d1dc"),
            m.b(0, m.d / 2, 0.25, 0.01, 0.05, 0.18, "#9fb8d4"),
            m.b(0, m.d / 2, 0.08, 0.01, 0.45, 0.03, "#38e07b", glow=True),
        ],
        ("Déshumidificateur", "Deshumidificador", "Deumidificatore", "Luchtontvochtiger", "Osuszacz powietrza", "Desumidificador", "Avfuktare"),
        electric=True)
    add("cube_lamp", "Würfellampe", "Cube lamp", (0.2, 0.2, 0.2),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "#fff1c9", glow=True, edges="faint")],
        ("Lampe cube", "Lámpara cubo", "Lampada cubo", "Kubuslamp", "Lampa kostka", "Candeeiro cubo", "Kublampa"),
        mount="surface", electric=True, light="table")
    add("presence_ceiling", "Präsenzmelder (Decke)", "Presence sensor (ceiling)", (0.09, 0.09, 0.03),
        lambda m: [m.c(0, 0, m.w, m.d, 0, m.h, "white", edges="faint"), m.c(0, 0, 0.04, 0.04, 0, 0.01, "#2b3446")],
        ("Détecteur de présence (plafond)", "Sensor de presencia (techo)", "Sensore di presenza (soffitto)", "Aanwezigheidssensor (plafond)", "Czujnik obecności (sufit)", "Sensor de presença (teto)", "Närvarosensor (tak)"),
        mount="ceiling", electric=True)
    add("water_leak", "Wassermelder", "Water leak sensor", (0.07, 0.07, 0.02),
        lambda m: [m.c(0, 0, m.w, m.d, 0, m.h, "white", edges="faint"), m.c(0, 0, 0.02, 0.02, m.h, 0.002, "#3ea6ff")],
        ("Détecteur de fuite", "Detector de fugas", "Sensore di allagamento", "Watermelder", "Czujnik zalania", "Sensor de fugas", "Vattenläckagesensor"),
        electric=True)
    add("air_quality", "Luftgütesensor", "Air quality monitor", (0.12, 0.08, 0.16),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "white", edges="faint"), m.b(0, m.d / 2, 0.1, 0.005, 0.03, 0.1, "#1d2533", screen=True), m.b(0, m.d / 2, 0.08, 0.006, 0.14, 0.01, "#38e07b", glow=True)],
        ("Capteur de qualité d'air", "Medidor de calidad del aire", "Sensore qualità dell'aria", "Luchtkwaliteitsmeter", "Czujnik jakości powietrza", "Sensor de qualidade do ar", "Luftkvalitetsmätare"),
        mount="surface", electric=True)
    add("doorbell_cam", "Video-Türklingel", "Video doorbell", (0.06, 0.03, 0.15),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "dark", edges="faint"), m.c(0, m.d / 2, 0.03, 0.01, 0.1, 0.03, "#2b3446", axis="z"), m.c(0, m.d / 2, 0.03, 0.01, 0.02, 0.03, RING_BLUE, glow=True, axis="z")],
        ("Sonnette vidéo", "Timbre con vídeo", "Videocitofono", "Videodeurbel", "Wideodzwonek", "Campainha com vídeo", "Videodörrklocka"),
        mount="wall", wall_y=1.3, electric=True)

    # ============================================================== building services 2
    add = pack(
        "nextfloor.a_haustechnik2",
        "Haustechnik 2",
        "Building services 2",
        "Wassertank mit Füllstand, Öltank und Ölkessel, Enthärtungsanlage, Pufferspeicher, Zisterne und Lüftungsgerät",
        ("Équipements du bâtiment 2", "Instalaciones 2", "Impianti 2", "Installaties 2", "Instalacje 2", "Instalações 2", "Installationer 2"),
    )
    add("water_tank", "Wassertank", "Water tank", (0.9, 0.9, 1.6),
        lambda m: [m.c(0, 0, m.w, m.d, 0, m.h, "#3d6e9e", edges="faint"), m.c(0, 0, 0.84, 0.84, 0.02, 1.0, "#3ea6ff", glow=True), m.c(0, 0, 0.2, 0.2, m.h, 0.04, "dark")],
        ("Réservoir d'eau", "Depósito de agua", "Serbatoio d'acqua", "Watertank", "Zbiornik wody", "Depósito de água", "Vattentank"),
        electric=True)
    add("oil_tank", "Öltank", "Oil tank", (1.6, 0.7, 1.5),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "#c9cfa0", edges="faint"), m.c(0.6, 0, 0.1, 0.1, m.h, 0.08, "metal"), m.b(-0.5, m.d / 2, 0.04, 0.01, 0.1, 1.2, "#e8ecf2")],
        ("Cuve à fioul", "Depósito de gasóleo", "Serbatoio del gasolio", "Olietank", "Zbiornik oleju", "Depósito de gasóleo", "Oljetank"))
    add("oil_boiler", "Ölheizung", "Oil boiler", (0.6, 0.7, 1.2),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "white", edges="faint"),
            m.b(0, m.d / 2, 0.4, 0.01, 0.9, 0.18, "#2b3446", screen=True),
            m.b(0.1, m.d / 2, 0.08, 0.01, 0.6, 0.06, "#ff7a1a", glow=True),
            m.c(0, -0.2, 0.15, 0.15, m.h, 0.3, "metal"),
        ],
        ("Chaudière fioul", "Caldera de gasóleo", "Caldaia a gasolio", "Oliegestookte ketel", "Kocioł olejowy", "Caldeira a gasóleo", "Oljepanna"),
        electric=True, climate=True)
    add("water_softener", "Enthärtungsanlage", "Water softener", (0.35, 0.5, 1.1),
        lambda m: [
            m.b(0, 0.1, m.w, 0.3, 0, 0.8, "#e8ecf2", edges="faint"),
            m.c(0, -0.15, 0.2, 0.2, 0, 1.0, "#3d6e9e"),
            m.b(0, 0.25, 0.15, 0.01, 0.7, 0.06, "#1d2533", screen=True),
        ],
        ("Adoucisseur d'eau", "Descalcificador", "Addolcitore", "Waterontharder", "Zmiękczacz wody", "Descalcificador", "Avhärdare"),
        electric=True)
    add("buffer_tank", "Pufferspeicher", "Buffer tank", (0.8, 0.8, 1.9),
        lambda m: [m.c(0, 0, m.w, m.d, 0, m.h, "#c0c7d1", edges="faint"), *[m.c(0.3, 0.25, 0.06, 0.06, y, 0.06, "#e03a3a" if y > 1 else "#3ea6ff", axis="z") for y in (0.3, 1.0, 1.6)]],
        ("Ballon tampon", "Depósito de inercia", "Accumulo inerziale", "Buffervat", "Zbiornik buforowy", "Depósito de inércia", "Ackumulatortank"),
        electric=True)
    add("cistern", "Zisterne", "Rainwater cistern", (2.0, 2.0, 0.2),
        lambda m: [m.c(0, 0, m.w, m.d, 0, 0.05, "#5d6672", edges="faint"), m.c(0, 0, 0.7, 0.7, 0.05, 0.12, "dark"), m.c(0, 0, 1.8, 1.8, 0, 0.02, "#3ea6ff", glow=True)],
        ("Citerne d'eau de pluie", "Cisterna de agua de lluvia", "Cisterna per acqua piovana", "Regenwaterput", "Zbiornik na deszczówkę", "Cisterna de água da chuva", "Regnvattentank"),
        electric=True)
    add("ventilation_unit", "Lüftungsanlage", "Ventilation unit", (0.8, 0.6, 0.9),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "white", edges="faint"),
            *[m.c(x, -0.1, 0.16, 0.16, m.h, 0.2, "metal") for x in (-0.28, -0.1, 0.1, 0.28)],
            m.b(0, m.d / 2, 0.2, 0.01, 0.6, 0.08, "#1d2533", screen=True),
        ],
        ("Ventilation double flux", "Unidad de ventilación", "Unità di ventilazione", "Ventilatie-unit", "Rekuperator", "Unidade de ventilação", "Ventilationsaggregat"),
        electric=True, climate=True)
    add("expansion_vessel", "Ausdehnungsgefäß", "Expansion vessel", (0.4, 0.4, 0.55),
        lambda m: [m.c(0, 0, m.w, m.d, 0.05, 0.45, "#c0392b"), m.c(0, 0, 0.06, 0.06, 0.5, 0.05, "metal"), m.c(0, 0, 0.3, 0.3, 0, 0.05, "dark")],
        ("Vase d'expansion", "Vaso de expansión", "Vaso di espansione", "Expansievat", "Naczynie wzbiorcze", "Vaso de expansão", "Expansionskärl"))
    add("heat_pump_indoor", "Wärmepumpe (Innengerät)", "Heat pump (indoor unit)", (0.6, 0.7, 1.8),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "white", edges="faint"),
            m.b(0, m.d / 2, 0.3, 0.01, 1.3, 0.2, "#1d2533", screen=True),
            m.b(0, m.d / 2, 0.5, 0.01, 0.1, 0.02, RING_BLUE, glow=True),
        ],
        ("Pompe à chaleur (unité intérieure)", "Bomba de calor (unidad interior)", "Pompa di calore (unità interna)", "Warmtepomp (binnendeel)", "Pompa ciepła (jednostka wewnętrzna)", "Bomba de calor (unidade interior)", "Värmepump (inomhusdel)"),
        electric=True, climate=True)

    # ============================================================== wellness
    add = pack(
        "nextfloor.a_wellness",
        "Wellness",
        "Wellness",
        "Sauna mit Temperatur, Fasssauna, Infrarotkabine, Whirlpool, Tauchbecken, Dampfdusche und Ruheliege",
        ("Bien-être", "Bienestar", "Benessere", "Wellness", "Wellness", "Bem-estar", "Spa & wellness"),
    )
    add("sauna_cabin", "Sauna", "Sauna", (2.0, 1.8, 2.1),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "#c08a54", edges="faint"),
            m.b(-0.5, m.d / 2, 0.6, 0.02, 0.1, 1.9, "glass", edges="glow"),
            m.b(0.4, 0, 1.0, 1.5, 0.45, 0.06, "#e0b07a"),
            m.b(0.4, -0.5, 1.0, 0.5, 0.9, 0.06, "#e0b07a"),
            m.b(-0.75, -0.6, 0.35, 0.35, 0, 0.6, "dark"),
            m.b(-0.75, -0.6, 0.3, 0.3, 0.6, 0.15, "#ff7a1a", glow=True),
            m.b(0.7, m.d / 2, 0.1, 0.01, 1.6, 0.06, "#ff7a1a", screen=True),
        ],
        ("Sauna", "Sauna", "Sauna", "Sauna", "Sauna", "Sauna", "Bastu"),
        electric=True, climate=True)
    add("sauna_barrel", "Fasssauna", "Barrel sauna", (2.2, 2.4, 2.2),
        lambda m: [
            m.c(0, 0, 2.2, 2.4, 0.1, 2.1, "#b07a46", axis="z", edges="faint"),
            *[m.b(0, z, 1.9, 0.15, 0, 0.12, "dark") for z in (-0.9, 0.9)],
            m.b(0, 1.2, 0.7, 0.02, 0.2, 1.6, "glass", edges="glow"),
            m.c(0.8, -0.6, 0.15, 0.15, 1.9, 0.4, "metal"),
        ],
        ("Sauna tonneau", "Sauna barril", "Sauna a botte", "Barrelsauna", "Sauna beczka", "Sauna barril", "Tunnbastu"),
        electric=True, climate=True)
    add("infrared_cabin", "Infrarotkabine", "Infrared cabin", (1.2, 1.0, 1.9),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "#d9a46b", edges="faint"),
            m.b(0, m.d / 2, 0.6, 0.02, 0.1, 1.7, "glass", edges="glow"),
            *[m.b(x, -0.45, 0.3, 0.02, 0.5, 0.8, "#ff5a3a", glow=True) for x in (-0.3, 0.3)],
            m.b(0, -0.1, 1.1, 0.45, 0.45, 0.05, "#e0b07a"),
        ],
        ("Cabine infrarouge", "Cabina de infrarrojos", "Cabina a infrarossi", "Infraroodcabine", "Kabina na podczerwień", "Cabine de infravermelhos", "IR-bastu"),
        electric=True, climate=True, light="panel")
    add("hot_tub", "Whirlpool", "Hot tub", (2.2, 2.2, 0.9),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "#5a4a3a", edges="faint"),
            m.b(0, 0, 1.9, 1.9, 0.5, 0.38, "#2a8fd4", glow=True),
            m.b(0, 0, 2.0, 2.0, m.h - 0.04, 0.04, "#d9dee6"),
        ],
        ("Spa / jacuzzi", "Jacuzzi", "Idromassaggio", "Bubbelbad", "Jacuzzi", "Jacuzzi", "Bubbelpool"),
        electric=True, climate=True, light="garden")
    add("plunge_pool", "Tauchbecken", "Plunge pool", (1.2, 1.2, 1.1),
        lambda m: [m.c(0, 0, m.w, m.d, 0, m.h, "#c0c7d1", edges="faint"), m.c(0, 0, 1.1, 1.1, 0.6, 0.45, "#69b8e8", glow=True)],
        ("Bassin d'immersion", "Piscina de inmersión", "Vasca a immersione", "Dompelbad", "Basen do zanurzeń", "Tanque de imersão", "Kallbad"))
    add("steam_shower", "Dampfdusche", "Steam shower", (1.0, 1.0, 2.2),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, 0.08, "white"),
            m.b(0, -0.48, m.w, 0.04, 0.08, 2.1, "#d9dee6"),
            m.b(0, 0.48, m.w, 0.02, 0.08, 2.0, "glass", edges="glow"),
            m.c(0, -0.2, 0.3, 0.3, 2.1, 0.02, "metal"),
            m.b(0.3, -0.45, 0.12, 0.01, 1.3, 0.08, "#1d2533", screen=True),
        ],
        ("Douche hammam", "Ducha de vapor", "Doccia a vapore", "Stoomdouche", "Kabina parowa", "Duche de vapor", "Ångdusch"),
        electric=True)
    add("relax_lounger", "Ruheliege", "Relaxation lounger", (0.75, 2.0, 0.8),
        lambda m: [
            m.l(0, 0.3, 0.7, 1.2, 0.35, 0.1, "wood", tz=0.4, td=1.0),
            m.l(0, -0.6, 0.7, 0.8, 0.4, 0.4, "wood", tz=-0.8, td=0.3),
            m.b(0, 0.2, 0.65, 1.5, 0.45, 0.05, "#e8dcc4"),
            *m.legs(0.06, 0.05, 0.35, "wood"),
        ],
        ("Chaise longue de relaxation", "Tumbona de relajación", "Lettino relax", "Relaxligstoel", "Leżak relaksacyjny", "Espreguiçadeira", "Vilstol"))
    add("cold_bath", "Eistonne", "Ice bath", (0.8, 0.8, 0.85),
        lambda m: [m.c(0, 0, m.w, m.d, 0, m.h, "#7a5a3a", edges="faint"), m.c(0, 0, 0.7, 0.7, 0.55, 0.28, "#bfe6ff", glow=True)],
        ("Bain glacé", "Baño de hielo", "Vasca del ghiaccio", "Ijsbad", "Balia z lodem", "Banho de gelo", "Isbad"),
        electric=True, climate=True)

    # ============================================================== garden 2
    add = pack(
        "nextfloor.a_garten2",
        "Garten 2",
        "Garden 2",
        "Wasserspiel mit Licht, Teich mit Pumpe, Mähroboter mit Ladestation, Sandkasten, Strandkorb, Holzstapel, Vogelhaus und Hochbeet",
        ("Jardin 2", "Jardín 2", "Giardino 2", "Tuin 2", "Ogród 2", "Jardim 2", "Trädgård 2"),
    )
    add("water_feature", "Wasserspiel mit Licht", "Water feature with light", (0.8, 0.8, 1.0),
        lambda m: [
            m.c(0, 0, m.w, m.d, 0, 0.25, "#8a8f98"),
            m.c(0, 0, 0.7, 0.7, 0.2, 0.04, "#3ea6ff", glow=True),
            m.c(0, 0, 0.18, 0.18, 0.25, 0.6, "#a4a9b1"),
            m.c(0, 0, 0.4, 0.4, 0.85, 0.06, "#a4a9b1"),
            m.c(0, 0, 0.05, 0.05, 0.9, 0.1, "#bfe6ff", glow=True),
        ],
        ("Fontaine lumineuse", "Fuente con luz", "Fontana con luce", "Waterornament met licht", "Fontanna z oświetleniem", "Fonte com luz", "Fontän med ljus"),
        electric=True, light="garden")
    add("pond", "Teich mit Pumpe", "Pond with pump", (3.0, 2.2, 0.15),
        lambda m: [
            m.c(0, 0, m.w, m.d, 0, 0.08, "#6b6b5a"),
            m.c(0, 0, 2.7, 1.9, 0.02, 0.07, "#2a6f8f", glow=True),
            *[m.c(x, z, 0.3, 0.3, 0.06, 0.04, LEAF2) for x, z in ((-0.8, 0.4), (0.6, -0.5), (0.9, 0.3))],
            m.c(-1.2, -0.7, 0.4, 0.4, 0.05, 0.12, "#8a8f98"),
        ],
        ("Bassin avec pompe", "Estanque con bomba", "Laghetto con pompa", "Vijver met pomp", "Oczko wodne z pompą", "Lago com bomba", "Damm med pump"),
        electric=True, light="garden")
    add("robot_mower", "Mähroboter", "Robot mower", (0.6, 0.45, 0.28),
        lambda m: [
            m.l(0, 0, m.w, m.d, 0.06, 0.2, "#e8ecf2", tw=0.8, td=0.7, edges="faint"),
            *[m.c(sx * 0.2, sz * 0.18, 0.18, 0.06, 0, 0.18, "dark", axis="x") for sx in (-1, 1) for sz in (-1, 1)],
            m.b(0.1, 0, 0.12, 0.12, 0.26, 0.01, "#e03a3a"),
        ],
        ("Robot tondeuse", "Robot cortacésped", "Robot tagliaerba", "Robotmaaier", "Robot koszący", "Robô corta-relva", "Robotgräsklippare"),
        electric=True)
    add("mower_dock", "Mähroboter-Ladestation", "Robot mower dock", (0.6, 0.8, 0.35),
        lambda m: [m.b(0, 0, m.w, m.d, 0, 0.03, "dark"), m.l(0, -0.3, 0.5, 0.2, 0.03, 0.3, "#e8ecf2", tz=-0.35, td=0.1), m.b(0, -0.25, 0.04, 0.01, 0.25, 0.03, "#38e07b", glow=True)],
        ("Station de charge tondeuse", "Base de carga del robot", "Base di ricarica robot", "Laadstation robotmaaier", "Stacja ładująca robota", "Base de carga do robô", "Laddstation robotklippare"),
        electric=True)
    add("sandbox", "Sandkasten", "Sandbox", (1.5, 1.5, 0.3),
        lambda m: [*[m.b(sx * 0.7, 0, 0.1, 1.5, 0, 0.3, "wood") for sx in (-1, 1)], *[m.b(0, sz * 0.7, 1.3, 0.1, 0, 0.3, "wood") for sz in (-1, 1)], m.b(0, 0, 1.3, 1.3, 0, 0.2, "#e6cf98")],
        ("Bac à sable", "Arenero", "Sabbiera", "Zandbak", "Piaskownica", "Caixa de areia", "Sandlåda"))
    add("beach_chair", "Strandkorb", "Beach chair", (1.3, 0.9, 1.6),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, 0.45, "#e8dcc4", edges="faint"),
            m.l(0, -0.2, m.w, 0.5, 0.45, 1.15, "#e8dcc4", tz=-0.3, td=0.3),
            m.b(0, 0.05, 1.1, 0.6, 0.42, 0.06, "#2f6b9a"),
            m.b(0, -0.25, 1.1, 0.1, 0.5, 0.8, "#2f6b9a"),
        ],
        ("Fauteuil de plage", "Silla de playa con capota", "Poltrona da spiaggia", "Strandstoel", "Kosz plażowy", "Cadeira de praia", "Strandkorg"))
    add("wood_pile", "Holzstapel", "Wood pile", (1.6, 0.5, 1.2),
        lambda m: [m.b(0, 0, m.w, m.d, 0, 0.05, "dark"), *[m.c(-0.7 + 0.16 * i, 0, 0.15, 0.5, 0.05 + 0.14 * j, 0.15, "#8a5a32", axis="z") for i in range(10) for j in range(0, 7, 2)][:40], m.l(0, 0, 1.7, 0.6, 1.1, 0.1, "dark", tw=1.0, td=0.6)],
        ("Pile de bois", "Pila de leña", "Catasta di legna", "Houtstapel", "Stos drewna", "Pilha de lenha", "Vedtrave"))
    add("bird_house", "Vogelhaus", "Bird house", (0.35, 0.35, 1.6),
        lambda m: [m.b(0, 0, 0.05, 0.05, 0, 1.3, "wood"), m.b(0, 0, 0.3, 0.3, 1.3, 0.04, "wood"), m.b(0, 0, 0.25, 0.25, 1.34, 0.15, "#e0b07a"), m.l(0, 0, 0.35, 0.35, 1.49, 0.11, "#8a3b2a", tw=0.05)],
        ("Mangeoire pour oiseaux", "Comedero para pájaros", "Casetta per uccelli", "Vogelhuisje", "Karmnik", "Comedouro para pássaros", "Fågelholk"))
    add("raised_bed", "Hochbeet", "Raised bed", (1.8, 0.8, 0.8),
        lambda m: [m.b(0, 0, m.w, m.d, 0, 0.75, "wood", edges="faint"), m.b(0, 0, 1.7, 0.7, 0.75, 0.02, "#5a3f2a"), *[m.c(x, 0, 0.25, 0.25, 0.77, 0.2, LEAF2) for x in (-0.6, -0.2, 0.2, 0.6)]],
        ("Potager surélevé", "Bancal elevado", "Orto rialzato", "Moestuinbak", "Podwyższona grządka", "Canteiro elevado", "Pallkrage"))
    add("garden_shower", "Gartendusche", "Garden shower", (0.4, 0.4, 2.2),
        lambda m: [m.c(0, 0, 0.3, 0.3, 0, 0.03, "#8a8f98"), m.c(0, -0.1, 0.05, 0.05, 0, 2.1, "metal"), m.c(0, 0.05, 0.22, 0.22, 2.08, 0.03, "metal")],
        ("Douche de jardin", "Ducha de jardín", "Doccia da giardino", "Tuindouche", "Prysznic ogrodowy", "Chuveiro de jardim", "Trädgårdsdusch"),
        electric=True)

    # ============================================================== kitchen 2
    add = pack(
        "nextfloor.a_kueche2",
        "Küche 2",
        "Kitchen 2",
        "Kaffeevollautomat, Siebträger, Wasserkocher, Toaster, Küchenmaschine, Heißluftfritteuse, Weinkühlschrank und mehr",
        ("Cuisine 2", "Cocina 2", "Cucina 2", "Keuken 2", "Kuchnia 2", "Cozinha 2", "Kök 2"),
    )
    add("coffee_machine", "Kaffeevollautomat", "Bean-to-cup coffee machine", (0.28, 0.45, 0.38),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "dark", edges="faint"),
            m.b(0, 0.2, 0.2, 0.06, 0.05, 0.05, "metal"),
            m.b(0, m.d / 2, 0.14, 0.01, 0.28, 0.06, "#1d2533", screen=True),
            m.b(0, 0.18, 0.12, 0.08, 0.12, 0.04, "metal"),
        ],
        ("Machine à café automatique", "Cafetera superautomática", "Macchina da caffè automatica", "Volautomatische koffiemachine", "Ekspres automatyczny", "Máquina de café automática", "Helautomatisk kaffemaskin"),
        mount="surface", electric=True)
    add("espresso", "Siebträgermaschine", "Espresso machine", (0.35, 0.4, 0.4),
        lambda m: [m.b(0, -0.05, m.w, 0.3, 0, m.h, "metal", edges="faint"), m.b(0, 0.15, 0.08, 0.1, 0.2, 0.04, "dark"), m.c(-0.08, 0.1, 0.06, 0.06, 0.3, 0.06, "#e8ecf2", axis="z"), m.b(0, 0.12, 0.3, 0.12, 0, 0.02, "dark")],
        ("Machine expresso", "Cafetera espresso", "Macchina espresso", "Espressomachine", "Ekspres kolbowy", "Máquina de expresso", "Espressomaskin"),
        mount="surface", electric=True)
    add("kettle", "Wasserkocher", "Kettle", (0.22, 0.16, 0.26),
        lambda m: [m.c(0, 0, 0.18, 0.16, 0.02, 0.22, "white"), m.c(0, 0, 0.18, 0.16, 0, 0.02, "dark"), m.b(-0.1, 0, 0.03, 0.04, 0.06, 0.16, "dark"), m.b(0.03, 0.08, 0.02, 0.005, 0.08, 0.02, "#3ea6ff", glow=True)],
        ("Bouilloire", "Hervidor", "Bollitore", "Waterkoker", "Czajnik elektryczny", "Chaleira elétrica", "Vattenkokare"),
        mount="surface", electric=True)
    add("toaster", "Toaster", "Toaster", (0.3, 0.18, 0.2),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "#c0392b", edges="faint"), *[m.b(x, 0, 0.1, 0.03, m.h - 0.005, 0.005, "dark") for x in (-0.06, 0.06)], m.b(0.14, 0, 0.02, 0.04, 0.12, 0.03, "metal")],
        ("Grille-pain", "Tostadora", "Tostapane", "Broodrooster", "Toster", "Torradeira", "Brödrost"),
        mount="surface", electric=True)
    add("stand_mixer", "Küchenmaschine", "Stand mixer", (0.25, 0.38, 0.35),
        lambda m: [m.b(0, 0, 0.22, 0.35, 0, 0.04, "#d7c6a0"), m.b(0, -0.12, 0.12, 0.1, 0.04, 0.28, "#d7c6a0"), m.l(0, 0.02, 0.14, 0.32, 0.26, 0.09, "#d7c6a0", tw=0.12, td=0.25), m.c(0, 0.08, 0.18, 0.18, 0.04, 0.15, "metal")],
        ("Robot pâtissier", "Batidora amasadora", "Impastatrice planetaria", "Keukenmachine", "Robot planetarny", "Robô de cozinha", "Köksmaskin"),
        mount="surface", electric=True)
    add("thermo_cooker", "Multikocher", "Food processor with cooking", (0.33, 0.33, 0.33),
        lambda m: [m.b(0, 0.02, 0.3, 0.26, 0, 0.12, "white", edges="faint"), m.c(0, -0.03, 0.17, 0.17, 0.12, 0.2, "metal"), m.b(0, 0.15, 0.12, 0.01, 0.04, 0.07, "#1d2533", screen=True)],
        ("Robot cuiseur", "Robot de cocina con cocción", "Robot da cucina con cottura", "Kookmachine", "Robot kuchenny z gotowaniem", "Robô de cozinha com cozedura", "Matberedare med kokfunktion"),
        mount="surface", electric=True)
    add("air_fryer", "Heißluftfritteuse", "Air fryer", (0.3, 0.35, 0.33),
        lambda m: [m.l(0, 0, m.w, m.d, 0, m.h, "dark", tw=0.85, td=0.85, edges="faint"), m.b(0, 0.16, 0.22, 0.03, 0.04, 0.18, "#2b3446"), m.b(0, 0.12, 0.12, 0.01, 0.27, 0.04, "#ff7a1a", screen=True)],
        ("Friteuse à air chaud", "Freidora de aire", "Friggitrice ad aria", "Airfryer", "Frytkownica beztłuszczowa", "Fritadeira de ar", "Airfryer"),
        mount="surface", electric=True)
    add("microwave", "Mikrowelle", "Microwave", (0.48, 0.38, 0.28),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "#e8ecf2", edges="faint"), m.b(-0.05, m.d / 2, 0.32, 0.01, 0.04, 0.2, "#2b3446"), m.b(0.18, m.d / 2, 0.08, 0.01, 0.18, 0.04, "#1d2533", screen=True)],
        ("Micro-ondes", "Microondas", "Microonde", "Magnetron", "Mikrofalówka", "Micro-ondas", "Mikrovågsugn"),
        mount="surface", electric=True)
    add("wine_fridge", "Weinkühlschrank", "Wine fridge", (0.6, 0.6, 0.85),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, m.h, "dark", edges="faint"),
            m.b(0, m.d / 2, 0.52, 0.01, 0.05, 0.75, "glass", edges="glow"),
            *[m.c(0, 0.1, 0.5, 0.06, 0.12 + 0.12 * i, 0.06, "#6b1f2f", axis="x") for i in range(6)],
            m.b(0, m.d / 2, 0.5, 0.005, 0.82, 0.01, "#a8d8ff", glow=True),
        ],
        ("Cave à vin", "Vinoteca", "Cantinetta frigo", "Wijnklimaatkast", "Chłodziarka do wina", "Garrafeira", "Vinkyl"),
        electric=True, light="strip")
    add("water_bar", "Wassersprudler", "Sparkling water maker", (0.15, 0.25, 0.45),
        lambda m: [m.b(0, -0.05, 0.14, 0.12, 0, 0.42, "white", edges="faint"), m.c(0, 0.06, 0.09, 0.09, 0.02, 0.3, "glass"), m.b(0, 0.05, 0.05, 0.06, 0.36, 0.04, "dark")],
        ("Machine à eau gazeuse", "Máquina de soda", "Gasatore", "Bruiswatermaker", "Saturator", "Máquina de água com gás", "Kolsyremaskin"),
        mount="surface")
    add("dishwasher_slim", "Geschirrspüler 45 cm", "Slim dishwasher (45 cm)", (0.45, 0.6, 0.82),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "#e8ecf2", edges="faint"), m.b(0, m.d / 2, 0.36, 0.02, 0.74, 0.02, "metal"), m.b(0.12, m.d / 2, 0.08, 0.005, 0.78, 0.02, "#38e07b", glow=True)],
        ("Lave-vaisselle 45 cm", "Lavavajillas de 45 cm", "Lavastoviglie 45 cm", "Vaatwasser 45 cm", "Zmywarka 45 cm", "Máquina de lavar loiça 45 cm", "Diskmaskin 45 cm"),
        electric=True)

    # ============================================================== vehicles 2
    add = pack(
        "nextfloor.a_fahrzeuge2",
        "Fahrzeuge 2",
        "Vehicles 2",
        "Motorrad, Roller, Wohnmobil, Anhänger, E-Bike, Lastenrad, Quad und Bootsanhänger",
        ("Véhicules 2", "Vehículos 2", "Veicoli 2", "Voertuigen 2", "Pojazdy 2", "Veículos 2", "Fordon 2"),
    )
    add("motorbike", "Motorrad", "Motorbike", (0.8, 2.15, 1.15),
        lambda m: [
            m.c(0, 0.7, 0.12, 0.65, 0, 0.65, "dark", axis="x"),
            m.c(0, -0.7, 0.14, 0.65, 0, 0.65, "dark", axis="x"),
            m.l(0, 0.05, 0.3, 1.0, 0.45, 0.35, "body", tw=0.25, td=0.6, paint=True),
            m.b(0, -0.35, 0.28, 0.6, 0.75, 0.08, "dark"),
            m.b(0, 0.65, 0.75, 0.04, 1.0, 0.03, "metal"),
            m.c(0, 0.85, 0.15, 0.08, 0.8, 0.15, WARM, glow=True, axis="z"),
            m.b(0, -0.05, 0.25, 0.5, 0.25, 0.25, "metal"),
        ],
        ("Moto", "Moto", "Moto", "Motor", "Motocykl", "Mota", "Motorcykel"),
        vehicle=True, colors=CAR_COLORS)
    add("scooter", "Motorroller", "Scooter", (0.7, 1.8, 1.15),
        lambda m: [
            m.c(0, 0.6, 0.1, 0.45, 0, 0.45, "dark", axis="x"),
            m.c(0, -0.6, 0.1, 0.45, 0, 0.45, "dark", axis="x"),
            m.l(0, -0.2, 0.4, 1.1, 0.2, 0.5, "body", tw=0.35, td=0.8, paint=True),
            m.b(0, 0.55, 0.3, 0.15, 0.2, 0.75, "body", paint=True),
            m.b(0, 0.55, 0.65, 0.04, 1.05, 0.03, "metal"),
            m.b(0, -0.3, 0.32, 0.6, 0.7, 0.1, "dark"),
        ],
        ("Scooter", "Scooter", "Scooter", "Scooter", "Skuter", "Scooter", "Skoter"),
        vehicle=True, colors=CAR_COLORS)
    add("camper_van", "Wohnmobil", "Camper van", (2.3, 7.0, 3.0),
        lambda m: [
            *[m.c(sx * 0.95, z, 0.25, 0.75, 0, 0.75, "dark", axis="x") for sx in (-1, 1) for z in (2.3, -1.8)],
            m.b(0, -0.4, 2.3, 5.8, 0.4, 2.55, "white", edges="faint"),
            m.l(0, 2.95, 2.2, 1.1, 0.4, 1.8, "white", tz=2.6, td=0.6),
            m.b(0, 3.3, 2.0, 0.05, 1.3, 0.8, "glass"),
            m.b(0, 0.3, 2.31, 0.6, 1.5, 0.5, "glass"),
            m.b(0, -0.4, 2.31, 4.0, 0.9, 0.12, "body", paint=True),
            m.b(0, -1.0, 1.2, 1.4, 2.95, 0.12, "dark"),
        ],
        ("Camping-car", "Autocaravana", "Camper", "Camper", "Kamper", "Autocaravana", "Husbil"),
        vehicle=True, colors=CAR_COLORS)
    add("trailer", "Anhänger", "Trailer", (1.6, 3.2, 0.9),
        lambda m: [
            *[m.c(sx * 0.7, -0.3, 0.18, 0.55, 0, 0.55, "dark", axis="x") for sx in (-1, 1)],
            m.b(0, -0.3, 1.4, 2.2, 0.45, 0.42, "metal", edges="faint"),
            m.l(0, 1.15, 0.6, 0.8, 0.4, 0.06, "metal", tw=0.08, td=0.1, tz=1.5),
        ],
        ("Remorque", "Remolque", "Rimorchio", "Aanhangwagen", "Przyczepa", "Reboque", "Släpvagn"),
        vehicle=True)
    add("e_bike", "E-Bike", "E-bike", (0.6, 1.85, 1.1),
        lambda m: [
            m.c(0, 0.6, 0.05, 0.7, 0, 0.7, "dark", axis="x"),
            m.c(0, -0.6, 0.05, 0.7, 0, 0.7, "dark", axis="x"),
            m.b(0, 0.1, 0.05, 0.9, 0.55, 0.06, "body", paint=True),
            m.b(0, -0.05, 0.08, 0.35, 0.4, 0.12, "dark"),
            m.b(0, -0.3, 0.2, 0.25, 0.95, 0.05, "dark"),
            m.b(0, 0.55, 0.58, 0.03, 1.05, 0.03, "metal"),
            m.c(0, 0.7, 0.06, 0.04, 0.9, 0.06, WARM, glow=True, axis="z"),
        ],
        ("Vélo électrique", "Bicicleta eléctrica", "E-bike", "E-bike", "Rower elektryczny", "Bicicleta elétrica", "Elcykel"),
        vehicle=True, electric=True, colors=CAR_COLORS)
    add("cargo_bike", "Lastenrad", "Cargo bike", (0.8, 2.6, 1.15),
        lambda m: [
            m.c(0, 1.1, 0.05, 0.5, 0, 0.5, "dark", axis="x"),
            m.c(0, -1.0, 0.05, 0.7, 0, 0.7, "dark", axis="x"),
            m.b(0, 0.6, 0.75, 0.85, 0.3, 0.45, "wood", edges="faint"),
            m.b(0, -0.4, 0.05, 1.0, 0.45, 0.06, "body", paint=True),
            m.b(0, -0.7, 0.2, 0.25, 0.95, 0.05, "dark"),
            m.b(0, 0.0, 0.6, 0.03, 1.05, 0.03, "metal"),
        ],
        ("Vélo cargo", "Bicicleta de carga", "Cargo bike", "Bakfiets", "Rower cargo", "Bicicleta de carga", "Lådcykel"),
        vehicle=True, electric=True, colors=CAR_COLORS)
    add("quad", "Quad", "Quad bike", (1.2, 1.9, 1.1),
        lambda m: [
            *[m.c(sx * 0.48, z, 0.25, 0.55, 0, 0.55, "dark", axis="x") for sx in (-1, 1) for z in (0.6, -0.6)],
            m.l(0, 0, 0.8, 1.6, 0.35, 0.45, "body", tw=0.6, td=1.2, paint=True),
            m.b(0, -0.2, 0.35, 0.6, 0.8, 0.1, "dark"),
            m.b(0, 0.45, 0.8, 0.04, 1.0, 0.03, "metal"),
        ],
        ("Quad", "Quad", "Quad", "Quad", "Quad", "Moto-quatro", "Fyrhjuling"),
        vehicle=True, colors=CAR_COLORS)
    add("boat_trailer", "Bootsanhänger mit Boot", "Boat on a trailer", (2.0, 5.5, 1.7),
        lambda m: [
            *[m.c(sx * 0.85, -0.5, 0.18, 0.55, 0, 0.55, "dark", axis="x") for sx in (-1, 1)],
            m.b(0, -0.2, 1.6, 4.4, 0.4, 0.1, "metal"),
            m.l(0, -0.3, 1.9, 4.6, 0.55, 0.8, "white", tw=1.6, td=4.2, edges="faint"),
            m.b(0, -0.3, 1.7, 4.0, 1.35, 0.05, "wood"),
            m.l(0, 2.55, 0.4, 0.5, 0.35, 0.06, "metal", tw=0.08, td=0.1),
        ],
        ("Remorque avec bateau", "Remolque con barco", "Carrello con barca", "Boottrailer met boot", "Przyczepa z łodzią", "Reboque com barco", "Båttrailer med båt"),
        vehicle=True)

    # ============================================================== outdoor kitchen & terrace
    add = pack(
        "nextfloor.a_aussenkueche",
        "Grillküche & Terrasse",
        "Outdoor kitchen & terrace",
        "Außenküche, Kamado, Pizzaofen, Feuerschale, Terrassenstrahler, Außen-Kühlschrank, Bartheke und Hängesessel",
        ("Cuisine d'extérieur et terrasse", "Cocina exterior y terraza", "Cucina esterna e terrazza", "Buitenkeuken & terras", "Kuchnia ogrodowa i taras", "Cozinha exterior e terraço", "Utekök & terrass"),
    )
    add("outdoor_kitchen", "Außenküche", "Outdoor kitchen", (2.8, 0.75, 0.95),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, 0.88, "#5d6672", edges="faint"),
            m.b(0, 0, m.w, m.d, 0.88, 0.05, "#a4a9b1"),
            m.b(-0.6, 0, 0.9, 0.55, 0.93, 0.02, "dark"),
            m.l(-0.6, -0.05, 0.9, 0.5, 0.95, 0.25, "metal", tw=0.85, td=0.3),
            m.b(0.7, 0, 0.5, 0.4, 0.92, 0.01, "metal"),
            *[m.b(x, m.d / 2, 0.5, 0.01, 0.1, 0.7, "#4a525d") for x in (-1.0, 0, 1.0)],
        ],
        ("Cuisine d'extérieur", "Cocina exterior", "Cucina da esterno", "Buitenkeuken", "Kuchnia zewnętrzna", "Cozinha exterior", "Utekök"),
        surface=True)
    add("kamado", "Kamado-Grill", "Kamado grill", (0.8, 0.7, 1.15),
        lambda m: [m.c(0, 0, 0.6, 0.6, 0.35, 0.6, "#2f6b3a", edges="faint"), *[m.b(sx * 0.2, 0, 0.04, 0.5, 0, 0.4, "metal") for sx in (-1, 1)], m.b(0.35, 0, 0.18, 0.4, 0.65, 0.03, "wood"), m.c(0, 0, 0.1, 0.1, 0.95, 0.12, "metal")],
        ("Barbecue kamado", "Parrilla kamado", "Barbecue kamado", "Kamado", "Grill kamado", "Grelhador kamado", "Kamadogrill"))
    add("pizza_oven", "Pizzaofen", "Pizza oven", (0.9, 0.9, 1.5),
        lambda m: [m.b(0, 0, m.w, m.d, 0, 0.85, "#a4a9b1"), m.l(0, 0, 0.85, 0.85, 0.85, 0.45, "#c58a5a", tw=0.5, td=0.5), m.b(0, 0.43, 0.35, 0.01, 0.92, 0.18, "#ff7a1a", glow=True), m.c(0, -0.2, 0.12, 0.12, 1.3, 0.25, "metal")],
        ("Four à pizza", "Horno de pizza", "Forno per pizza", "Pizzaoven", "Piec do pizzy", "Forno de pizza", "Pizzaugn"),
        light="table")
    add("fire_pit", "Feuerschale", "Fire pit", (1.0, 1.0, 0.45),
        lambda m: [m.c(0, 0, 0.4, 0.4, 0, 0.2, "dark"), m.l(0, 0, 0.6, 0.6, 0.2, 0.2, "#3a2a22", tw=1.0, td=1.0), m.c(0, 0, 0.5, 0.5, 0.35, 0.08, "#ff7a1a", glow=True)],
        ("Brasero", "Brasero", "Braciere", "Vuurschaal", "Palenisko", "Braseiro", "Eldskål"),
        electric=True, light="garden")
    add("patio_heater", "Terrassenstrahler", "Patio heater", (0.8, 0.8, 2.3),
        lambda m: [m.c(0, 0, 0.5, 0.5, 0, 0.1, "dark"), m.c(0, 0, 0.06, 0.06, 0.1, 1.9, "metal"), m.c(0, 0, 0.25, 0.25, 1.9, 0.25, "#ff5a3a", glow=True), m.l(0, 0, 0.3, 0.3, 2.15, 0.15, "metal", tw=1.0, td=1.0)],
        ("Parasol chauffant", "Estufa de terraza", "Fungo riscaldante", "Terrasverwarmer", "Promiennik tarasowy", "Aquecedor de esplanada", "Terrassvärmare"),
        electric=True, climate=True, light="floor")
    add("outdoor_fridge", "Außen-Kühlschrank", "Outdoor fridge", (0.6, 0.6, 0.85),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "metal", edges="faint"), m.b(0, m.d / 2, 0.52, 0.01, 0.05, 0.75, "glass"), m.b(0.2, m.d / 2, 0.02, 0.02, 0.3, 0.3, "dark")],
        ("Réfrigérateur d'extérieur", "Nevera exterior", "Frigorifero da esterno", "Buitenkoelkast", "Lodówka zewnętrzna", "Frigorífico exterior", "Utomhuskyl"),
        electric=True)
    add("bar_counter", "Bartheke", "Bar counter", (2.0, 0.6, 1.1),
        lambda m: [m.b(0, 0, m.w, 0.4, 0, 1.05, "wood", edges="faint"), m.b(0, 0.05, m.w, m.d, 1.05, 0.05, "#a4a9b1"), m.b(0, 0.2, 1.9, 0.01, 0.1, 0.02, WARM, glow=True)],
        ("Comptoir de bar", "Barra de bar", "Bancone bar", "Bar", "Bar", "Balcão de bar", "Bardisk"),
        surface=True, electric=True, light="strip")
    add("bar_stool_out", "Barhocker außen", "Outdoor bar stool", (0.45, 0.45, 0.8),
        lambda m: [*m.legs(0.04, 0.03, 0.75, "metal"), m.b(0, 0, 0.42, 0.42, 0.75, 0.05, "wood")],
        ("Tabouret de bar extérieur", "Taburete de bar exterior", "Sgabello da esterno", "Barkruk buiten", "Hoker zewnętrzny", "Banco de bar exterior", "Barstol utomhus"))
    add("hanging_chair", "Hängesessel", "Hanging chair", (1.0, 1.0, 2.0),
        lambda m: [m.c(0, 0, 0.8, 0.8, 0, 0.05, "dark"), m.b(-0.35, 0, 0.05, 0.05, 0.05, 1.9, "metal"), m.b(-0.1, 0, 0.55, 0.05, 1.9, 0.05, "metal"), m.c(0.15, 0, 0.75, 0.75, 0.4, 1.0, "#c8b07a", edges="faint"), m.c(0.15, 0.05, 0.6, 0.55, 0.5, 0.12, "#e8dcc4")],
        ("Fauteuil suspendu", "Silla colgante", "Poltrona sospesa", "Hangstoel", "Fotel wiszący", "Cadeira suspensa", "Hängstol"))

    # ============================================================== workshop 2
    add = pack(
        "nextfloor.a_werkstatt2",
        "Werkstatt 2",
        "Workshop 2",
        "Werkbank mit Lochwand, Ständerbohrmaschine, Tischkreissäge, Kompressor, Schweißgerät, Schwerlastregal und Kleinteilemagazin",
        ("Atelier 2", "Taller 2", "Officina 2", "Werkplaats 2", "Warsztat 2", "Oficina 2", "Verkstad 2"),
    )
    add("workbench_wall", "Werkbank mit Lochwand", "Workbench with pegboard", (2.0, 0.7, 1.9),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.85, 0.06, "wood"),
            *m.legs(0.05, 0.06, 0.85, "#5d6672"),
            m.b(0, -0.33, m.w, 0.03, 1.1, 0.8, "#a4a9b1"),
            *[m.b(-0.8 + 0.2 * i, -0.3, 0.04, 0.02, 1.3 + 0.1 * (i % 3), 0.2, "#c0392b" if i % 2 else "dark") for i in range(9)],
            m.b(0, 0.0, m.w - 0.1, 0.6, 0.3, 0.04, "wood"),
        ],
        ("Établi avec panneau perforé", "Banco con panel perforado", "Banco con pannello forato", "Werkbank met gaatjesbord", "Stół warsztatowy z tablicą", "Bancada com painel perfurado", "Arbetsbänk med verktygstavla"),
        surface=True)
    add("drill_press", "Ständerbohrmaschine", "Drill press", (0.4, 0.55, 1.6),
        lambda m: [m.b(0, 0, 0.4, 0.5, 0, 0.05, "dark"), m.c(0, -0.15, 0.08, 0.08, 0.05, 1.45, "metal"), m.b(0, 0.0, 0.2, 0.25, 0.7, 0.04, "dark"), m.b(0, -0.05, 0.22, 0.4, 1.25, 0.3, "#2f6b3a"), m.c(0, 0.08, 0.02, 0.02, 1.05, 0.2, "metal")],
        ("Perceuse à colonne", "Taladro de columna", "Trapano a colonna", "Kolomboormachine", "Wiertarka stołowa", "Engenho de furar", "Pelarborrmaskin"),
        electric=True)
    add("table_saw", "Tischkreissäge", "Table saw", (1.0, 0.8, 0.9),
        lambda m: [m.b(0, 0, 0.6, 0.55, 0, 0.8, "#5d6672"), m.b(0, 0, m.w, m.d, 0.8, 0.05, "metal", edges="faint"), m.c(0, 0, 0.2, 0.01, 0.82, 0.08, "#c0392b", axis="x")],
        ("Scie sur table", "Sierra de mesa", "Sega circolare da banco", "Tafelzaag", "Pilarka stołowa", "Serra de bancada", "Bordsåg"),
        electric=True, surface=True)
    add("compressor", "Kompressor", "Air compressor", (0.7, 0.35, 0.65),
        lambda m: [m.c(0, 0, 0.6, 0.3, 0.1, 0.3, "#c0392b", axis="x"), m.b(0, 0, 0.3, 0.25, 0.4, 0.2, "dark"), *[m.c(x, 0.12, 0.1, 0.03, 0, 0.1, "dark", axis="z") for x in (-0.25, 0.25)]],
        ("Compresseur", "Compresor", "Compressore", "Compressor", "Kompresor", "Compressor", "Kompressor"),
        electric=True)
    add("welder", "Schweißgerät", "Welder", (0.3, 0.55, 0.45),
        lambda m: [m.b(0, 0, m.w, 0.45, 0, 0.4, "#2f6b9a", edges="faint"), m.b(0, 0.23, 0.15, 0.01, 0.25, 0.08, "#1d2533", screen=True), m.b(0, 0, 0.28, 0.05, 0.4, 0.04, "dark")],
        ("Poste à souder", "Soldadora", "Saldatrice", "Lasapparaat", "Spawarka", "Máquina de soldar", "Svetsaggregat"),
        electric=True)
    add("heavy_shelf", "Schwerlastregal", "Heavy-duty shelving", (1.8, 0.6, 2.0),
        lambda m: [*m.legs(0.03, 0.05, 2.0, "#2f6b9a"), *[m.b(0, 0, m.w - 0.04, m.d - 0.04, y, 0.04, "#c08a54") for y in (0.1, 0.6, 1.1, 1.6)], *[m.b(x, 0, 0.4, 0.35, 0.14, 0.3, "#5d6672") for x in (-0.5, 0.2)], m.b(0.5, 0, 0.4, 0.4, 1.14, 0.3, "#e0b07a")],
        ("Étagère charge lourde", "Estantería de carga pesada", "Scaffale per carichi pesanti", "Zwaarlastrek", "Regał magazynowy", "Estante de carga pesada", "Tunglastställ"),
        surface=True)
    add("parts_cabinet", "Kleinteilemagazin", "Small parts cabinet", (0.5, 0.2, 0.4),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "#5d6672"), *[m.b(-0.18 + 0.12 * i, m.d / 2, 0.1, 0.01, 0.03 + 0.09 * j, 0.07, "#e8ecf2") for i in range(4) for j in range(4)]],
        ("Casier à petites pièces", "Organizador de piezas", "Cassettiera minuteria", "Assortimentskast", "Kasetka na drobiazgi", "Caixa organizadora", "Sortimentsskåp"),
        mount="wall", wall_y=1.2)
    add("tool_chest", "Werkstattwagen", "Tool chest", (0.75, 0.47, 1.0),
        lambda m: [m.b(0, 0, m.w, m.d, 0.08, 0.9, "#c0392b", edges="faint"), *[m.b(0, m.d / 2, 0.68, 0.01, 0.15 + 0.13 * i, 0.02, "metal") for i in range(6)], *[m.c(sx * 0.3, sz * 0.18, 0.08, 0.08, 0, 0.08, "dark") for sx in (-1, 1) for sz in (-1, 1)]],
        ("Servante d'atelier", "Carro de herramientas", "Carrello porta utensili", "Gereedschapswagen", "Wózek narzędziowy", "Carro de ferramentas", "Verktygsvagn"),
        surface=True)
    add("ev_bike_charger", "Akkuladeplatz", "Battery charging shelf", (0.8, 0.3, 0.5),
        lambda m: [m.b(0, 0, m.w, m.d, 0, 0.04, "wood"), *[m.b(x, 0, 0.12, 0.15, 0.04, 0.12, "dark") for x in (-0.25, 0, 0.25)], *[m.b(x, 0.08, 0.03, 0.005, 0.12, 0.01, "#38e07b", glow=True) for x in (-0.25, 0, 0.25)]],
        ("Station de charge des batteries", "Estación de carga de baterías", "Stazione ricarica batterie", "Accu-oplaadplek", "Stacja ładowania akumulatorów", "Estação de carga de baterias", "Batteriladdningsstation"),
        mount="wall", wall_y=1.1, electric=True)

    # ============================================================== Japandi & Scandi
    add = pack(
        "nextfloor.a_japandi",
        "Japandi & Skandi",
        "Japandi & Scandi",
        "Niedriges Bett, Tatami, Papierleuchte, Teetisch, Shoji-Paravent, Bonsai, Sitzkissen und Holzbank",
        ("Japandi et scandinave", "Japandi y escandinavo", "Japandi e scandinavo", "Japandi & Scandinavisch", "Japandi i skandynawski", "Japandi e escandinavo", "Japandi & skandinaviskt"),
    )
    add("low_bed", "Niedriges Bett", "Low platform bed", (1.8, 2.2, 0.75),
        lambda m: [m.b(0, 0, m.w, m.d, 0, 0.15, "#b98d5a"), m.b(0, 0.05, 1.6, 2.0, 0.15, 0.15, "#efe9dd"), m.b(0, -1.05, m.w, 0.1, 0, 0.75, "#b98d5a"), *[m.b(x, -0.85, 0.6, 0.35, 0.3, 0.12, "#d9cfbf") for x in (-0.4, 0.4)]],
        ("Lit bas", "Cama baja", "Letto basso", "Laag bed", "Niskie łóżko", "Cama baixa", "Låg säng"))
    add("tatami", "Tatami", "Tatami mat", (1.8, 0.9, 0.05),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "#c9c08a", edges="faint"), *[m.b(0, sz * 0.43, m.w, 0.04, 0, m.h + 0.002, "#2b3f66") for sz in (-1, 1)]],
        ("Tatami", "Tatami", "Tatami", "Tatami", "Tatami", "Tatami", "Tatami"))
    add("paper_lamp", "Papierleuchte", "Paper floor lamp", (0.45, 0.45, 1.2),
        lambda m: [m.c(0, 0, 0.3, 0.3, 0, 0.03, "#b98d5a"), m.c(0, 0, 0.03, 0.03, 0.03, 0.3, "#b98d5a"), m.c(0, 0, 0.45, 0.45, 0.33, 0.85, "#fff6e0", glow=True)],
        ("Lampadaire en papier", "Lámpara de papel", "Lampada di carta", "Papieren vloerlamp", "Papierowa lampa podłogowa", "Candeeiro de papel", "Papperslampa"),
        electric=True, light="floor")
    add("paper_pendant", "Papier-Pendelleuchte", "Paper pendant", (0.6, 0.6, 0.9),
        lambda m: [m.c(0, 0, 0.01, 0.01, 0.5, 0.4, "dark"), m.c(0, 0, 0.6, 0.6, 0.05, 0.45, "#fff6e0", glow=True)],
        ("Suspension en papier", "Lámpara colgante de papel", "Sospensione di carta", "Papieren hanglamp", "Papierowa lampa wisząca", "Pendente de papel", "Papperstaklampa"),
        mount="ceiling", electric=True, light="pendant")
    add("tea_table", "Teetisch", "Low tea table", (1.1, 0.7, 0.35),
        lambda m: [m.b(0, 0, m.w, m.d, 0.3, 0.05, "#b98d5a"), *m.legs(0.08, 0.06, 0.3, "#b98d5a")],
        ("Table à thé basse", "Mesa de té baja", "Tavolino da tè", "Lage theetafel", "Niski stolik do herbaty", "Mesa de chá baixa", "Lågt tebord"),
        surface=True)
    add("shoji_screen", "Shoji-Paravent", "Shoji screen", (1.6, 0.05, 1.8),
        lambda m: [*[m.b(x, 0, 0.5, 0.03, 0, m.h, "#fff6e0", edges="faint") for x in (-0.53, 0, 0.53)], *[m.b(x, 0, 0.02, 0.04, 0, m.h, "#b98d5a") for x in (-0.79, -0.27, 0.27, 0.79)], *[m.b(0, 0, m.w, 0.04, y, 0.02, "#b98d5a") for y in (0.4, 0.9, 1.4)]],
        ("Paravent shoji", "Biombo shoji", "Paravento shoji", "Shoji-kamerscherm", "Parawan shoji", "Biombo shoji", "Shoji-skärm"))
    add("bonsai", "Bonsai", "Bonsai", (0.4, 0.3, 0.4),
        lambda m: [m.b(0, 0, 0.35, 0.25, 0, 0.08, "#5a4a3a"), m.b(-0.03, 0, 0.03, 0.03, 0.08, 0.15, "wood", rot=15), *[m.c(x, z, 0.16, 0.12, y, 0.08, LEAF) for x, z, y in ((-0.08, 0, 0.22), (0.07, 0.02, 0.26), (0.0, -0.02, 0.31))]],
        ("Bonsaï", "Bonsái", "Bonsai", "Bonsai", "Bonsai", "Bonsai", "Bonsai"),
        mount="surface")
    add("floor_cushion", "Sitzkissen", "Floor cushion", (0.6, 0.6, 0.15),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "#d9cfbf", edges="faint")],
        ("Coussin de sol", "Cojín de suelo", "Cuscino da pavimento", "Vloerkussen", "Poduszka podłogowa", "Almofada de chão", "Golvkudde"))
    add("wood_bench", "Holzbank", "Wooden bench", (1.4, 0.4, 0.45),
        lambda m: [m.b(0, 0, m.w, m.d, 0.4, 0.05, "#b98d5a"), *[m.b(sx * 0.55, 0, 0.06, 0.35, 0, 0.4, "#b98d5a") for sx in (-1, 1)]],
        ("Banc en bois", "Banco de madera", "Panca in legno", "Houten bank", "Drewniana ławka", "Banco de madeira", "Träbänk"),
        surface=True)
    add("rattan_chair", "Rattansessel", "Rattan armchair", (0.75, 0.8, 0.8),
        lambda m: [m.l(0, 0, 0.7, 0.75, 0, 0.42, "#c8a46a", tw=0.75, td=0.8, edges="faint"), m.b(0, -0.33, 0.7, 0.1, 0.42, 0.38, "#c8a46a"), m.b(0, 0.05, 0.6, 0.6, 0.42, 0.08, "#efe9dd")],
        ("Fauteuil en rotin", "Sillón de ratán", "Poltrona in rattan", "Rotan fauteuil", "Fotel rattanowy", "Poltrona de vime", "Rottingfåtölj"))

    # ============================================================== loft & industrial
    add = pack(
        "nextfloor.a_loft",
        "Loft & Industrial",
        "Loft & industrial",
        "Stahlregal, Fabrik-Pendel, Ledersofa, Eichenbohle auf Stahl, Spind, Edison-Stehleuchte, Barhocker und Rohrregal",
        ("Loft et industriel", "Loft e industrial", "Loft e industriale", "Loft & industrieel", "Loft i industrialny", "Loft e industrial", "Loft & industriellt"),
    )
    add("steel_shelf", "Stahlregal", "Steel shelf", (1.2, 0.4, 2.0),
        lambda m: [*m.legs(0.02, 0.04, 2.0, "dark"), *[m.b(0, 0, m.w, m.d, y, 0.04, "#6b4a32") for y in (0.05, 0.5, 0.95, 1.4, 1.85)], *[m.b(x, 0, 0.25, 0.22, 0.54, 0.3, "#b3a48a") for x in (-0.35, 0.3)]],
        ("Étagère acier", "Estantería de acero", "Libreria in acciaio", "Stalen kast", "Regał stalowy", "Estante de aço", "Stålhylla"),
        surface=True)
    add("factory_pendant", "Fabrik-Pendelleuchte", "Factory pendant", (0.45, 0.45, 0.9),
        lambda m: [m.c(0, 0, 0.01, 0.01, 0.4, 0.5, "dark"), m.l(0, 0, 0.45, 0.45, 0.05, 0.35, "dark", tw=0.15, td=0.15), m.c(0, 0, 0.35, 0.35, 0.04, 0.02, WARM, glow=True)],
        ("Suspension industrielle", "Lámpara industrial colgante", "Sospensione industriale", "Industriële hanglamp", "Industrialna lampa wisząca", "Pendente industrial", "Industripendel"),
        mount="ceiling", electric=True, light="pendant")
    add("leather_sofa", "Ledersofa", "Leather sofa", (2.2, 0.95, 0.8),
        lambda m: [m.b(0, 0.05, m.w, 0.85, 0.12, 0.33, "#6b3a22", edges="faint"), m.b(0, -0.38, m.w, 0.2, 0.45, 0.35, "#6b3a22"), *[m.b(sx * 1.0, 0.05, 0.2, 0.85, 0.45, 0.2, "#6b3a22") for sx in (-1, 1)], *[m.b(x, 0.1, 0.85, 0.6, 0.45, 0.1, "#7d4529") for x in (-0.45, 0.45)], *m.legs(0.08, 0.04, 0.12, "dark")],
        ("Canapé en cuir", "Sofá de cuero", "Divano in pelle", "Leren bank", "Skórzana sofa", "Sofá de couro", "Skinnsoffa"))
    add("plank_table", "Bohlentisch", "Plank dining table", (2.2, 0.95, 0.76),
        lambda m: [m.b(0, 0, m.w, m.d, 0.71, 0.05, "#6b4a32"), *[m.l(sx * 0.9, 0, 0.08, 0.8, 0, 0.71, "dark", tw=0.08, td=0.08) for sx in (-1, 1)]],
        ("Table en planches", "Mesa de tablones", "Tavolo in tavole", "Plankentafel", "Stół z desek", "Mesa de tábuas", "Plankbord"),
        surface=True)
    add("locker", "Spind", "Metal locker", (0.9, 0.5, 1.8),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "#4f6b5a", edges="faint"), *[m.b(x, m.d / 2, 0.01, 0.01, 0.05, 1.7, "dark") for x in (-0.15, 0.15)], *[m.b(x, m.d / 2, 0.14, 0.005, 1.5, 0.12, "#3a4f43") for x in (-0.3, 0, 0.3)]],
        ("Casier métallique", "Taquilla metálica", "Armadietto in metallo", "Lockerkast", "Szafka metalowa", "Cacifo metálico", "Plåtskåp"))
    add("edison_floor_lamp", "Edison-Stehleuchte", "Edison floor lamp", (0.4, 0.4, 1.7),
        lambda m: [m.c(0, 0, 0.3, 0.3, 0, 0.03, "dark"), m.b(0, 0, 0.03, 0.03, 0.03, 1.4, "dark"), m.b(0.1, 0, 0.25, 0.03, 1.43, 0.03, "dark"), m.c(0.2, 0, 0.1, 0.1, 1.3, 0.14, WARM, glow=True)],
        ("Lampadaire Edison", "Lámpara de pie Edison", "Lampada da terra Edison", "Edison-vloerlamp", "Lampa podłogowa Edison", "Candeeiro de pé Edison", "Edison-golvlampa"),
        electric=True, light="floor")
    add("bar_stool_loft", "Industrie-Barhocker", "Industrial bar stool", (0.42, 0.42, 0.75),
        lambda m: [m.c(0, 0, 0.36, 0.36, 0.7, 0.05, "#6b4a32"), m.l(0, 0, 0.38, 0.38, 0, 0.7, "dark", tw=0.25, td=0.25), m.c(0, 0, 0.3, 0.3, 0.3, 0.02, "dark")],
        ("Tabouret de bar industriel", "Taburete industrial", "Sgabello industriale", "Industriële barkruk", "Industrialny hoker", "Banco industrial", "Industribarstol"))
    add("pipe_shelf", "Rohrregal", "Pipe wall shelf", (1.0, 0.25, 0.8),
        lambda m: [*[m.c(x, 0, 0.03, 0.03, 0, 0.8, "dark") for x in (-0.45, 0.45)], *[m.b(0, 0, m.w, m.d, y, 0.04, "#6b4a32") for y in (0.0, 0.38, 0.76)], m.c(-0.2, 0, 0.12, 0.12, 0.42, 0.18, "#b3a48a"), m.c(0.25, 0.02, 0.15, 0.15, 0.04, 0.2, LEAF2)],
        ("Étagère en tubes", "Estante de tubos", "Mensola a tubi", "Buizenwandrek", "Półka z rur", "Prateleira de tubos", "Rörhylla"),
        mount="wall", wall_y=1.1, surface=True)

    # ============================================================== indoor greenery
    add = pack(
        "nextfloor.a_gruen",
        "Indoor-Grün",
        "Indoor greenery",
        "Monstera, Ficus, Olivenbaum, Kakteen, Hängepflanze, Pflanzenregal mit Pflanzenlicht und vertikaler Garten",
        ("Plantes d'intérieur", "Plantas de interior", "Piante da interno", "Kamerplanten", "Rośliny domowe", "Plantas de interior", "Inomhusgrönt"),
    )
    add("monstera", "Monstera", "Monstera", (0.9, 0.9, 1.3),
        lambda m: [m.c(0, 0, 0.35, 0.35, 0, 0.35, "#e8e2d6"), *[m.l(x, z, 0.4, 0.35, y, 0.12, LEAF, tw=0.3, td=0.05) for x, z, y in ((-0.2, 0.1, 0.6), (0.2, -0.1, 0.75), (0.05, 0.2, 0.95), (-0.1, -0.2, 1.1))], m.c(0, 0, 0.04, 0.04, 0.35, 0.8, LEAF)],
        ("Monstera", "Monstera", "Monstera", "Monstera", "Monstera", "Monstera", "Monstera"),
        household="plant")
    add("ficus", "Birkenfeige", "Weeping fig", (0.7, 0.7, 1.8),
        lambda m: [m.c(0, 0, 0.35, 0.35, 0, 0.35, "#5d6672"), m.c(0, 0, 0.05, 0.05, 0.35, 0.7, "wood"), m.c(0, 0, 0.7, 0.7, 1.0, 0.8, LEAF2)],
        ("Ficus", "Ficus", "Ficus", "Ficus", "Fikus", "Fícus", "Fikus"),
        household="plant")
    add("olive_tree", "Olivenbaum im Kübel", "Olive tree in a pot", (1.0, 1.0, 2.0),
        lambda m: [m.b(0, 0, 0.55, 0.55, 0, 0.5, "#c58a5a"), m.c(0, 0, 0.08, 0.08, 0.5, 0.8, "#7a6a5a"), m.c(0, 0, 1.0, 1.0, 1.2, 0.75, "#8aa27a")],
        ("Olivier en pot", "Olivo en maceta", "Ulivo in vaso", "Olijfboom in pot", "Drzewko oliwne w donicy", "Oliveira em vaso", "Olivträd i kruka"),
        household="plant")
    add("cactus_group", "Kakteen", "Cacti", (0.5, 0.25, 0.3),
        lambda m: [*[m.c(x, 0, 0.1, 0.1, 0, 0.08, "#c58a5a") for x in (-0.17, 0, 0.17)], m.c(-0.17, 0, 0.06, 0.06, 0.08, 0.15, LEAF2), m.c(0, 0, 0.07, 0.07, 0.08, 0.22, LEAF), m.c(0.17, 0, 0.08, 0.08, 0.08, 0.08, LEAF2)],
        ("Cactus", "Cactus", "Cactus", "Cactussen", "Kaktusy", "Catos", "Kaktusar"),
        mount="surface", household="plant")
    add("hanging_plant", "Hängepflanze", "Hanging plant", (0.4, 0.4, 0.9),
        lambda m: [m.c(0, 0, 0.01, 0.01, 0.4, 0.5, "#c8b07a"), m.c(0, 0, 0.25, 0.25, 0.3, 0.12, "#e8e2d6"), m.l(0, 0, 0.4, 0.4, 0, 0.35, LEAF2, tw=0.3, td=0.3)],
        ("Plante suspendue", "Planta colgante", "Pianta pendente", "Hangplant", "Roślina wisząca", "Planta suspensa", "Hängväxt"),
        mount="ceiling", household="plant")
    add("plant_shelf", "Pflanzenregal mit Licht", "Plant shelf with grow light", (0.9, 0.35, 1.5),
        lambda m: [*m.legs(0.02, 0.03, 1.5, "dark"), *[m.b(0, 0, m.w, m.d, y, 0.03, "#b98d5a") for y in (0.05, 0.55, 1.05)], *[m.c(x, 0, 0.18, 0.18, y + 0.03, 0.25, LEAF2) for y in (0.05, 0.55, 1.05) for x in (-0.25, 0.2)], *[m.b(0, 0, 0.8, 0.04, y + 0.45, 0.02, "#d07aff", glow=True) for y in (0.05, 0.55, 1.05)]],
        ("Étagère à plantes avec lampe", "Estante para plantas con luz", "Scaffale piante con luce", "Plantenrek met kweeklamp", "Regał na rośliny z lampą", "Estante de plantas com luz", "Växthylla med växtljus"),
        electric=True, light="strip", surface=True)
    add("vertical_garden", "Vertikaler Garten", "Living wall", (1.2, 0.12, 1.6),
        lambda m: [m.b(0, -0.03, m.w, 0.05, 0, m.h, "dark"), *[m.c(-0.45 + 0.18 * i, 0.03, 0.18, 0.08, 0.1 + 0.25 * j, 0.2, LEAF if (i + j) % 2 else LEAF2) for i in range(6) for j in range(6)]],
        ("Mur végétal", "Jardín vertical", "Giardino verticale", "Groene wand", "Ogród wertykalny", "Jardim vertical", "Växtvägg"),
        mount="wall", wall_y=0.5, household="plant")
    add("grow_light", "Pflanzenlampe", "Grow light", (0.6, 0.2, 0.05),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "dark"), m.b(0, 0, 0.55, 0.15, 0, 0.005, "#d07aff", glow=True)],
        ("Lampe horticole", "Lámpara de cultivo", "Lampada per piante", "Kweeklamp", "Lampa do roślin", "Lâmpada de cultivo", "Växtlampa"),
        mount="ceiling", electric=True, light="panel")
    add("herb_planter", "Kräutergarten (smart)", "Smart herb garden", (0.4, 0.15, 0.4),
        lambda m: [m.b(0, 0, m.w, m.d, 0, 0.1, "white", edges="faint"), *[m.c(x, 0, 0.08, 0.08, 0.1, 0.12, LEAF2) for x in (-0.12, 0, 0.12)], m.b(0, 0, 0.04, 0.04, 0.1, 0.25, "white"), m.b(0, 0, 0.36, 0.1, 0.35, 0.03, "#fff1c9", glow=True)],
        ("Jardin d'herbes connecté", "Huerto de hierbas inteligente", "Orto di erbe smart", "Slimme kruidentuin", "Inteligentny ogródek ziołowy", "Horta de ervas inteligente", "Smart örtträdgård"),
        mount="surface", electric=True, light="table", household="plant")

    # ============================================================== music & studio
    add = pack(
        "nextfloor.a_musik",
        "Musik & Atelier",
        "Music & studio",
        "Klavier, Flügel, Schlagzeug, Gitarren, Verstärker, Mischpult, Studiomonitore, Synthesizer, Mikrofon und Staffelei",
        ("Musique et atelier", "Música y estudio", "Musica e atelier", "Muziek & atelier", "Muzyka i pracownia", "Música e ateliê", "Musik & ateljé"),
    )
    add("upright_piano", "Klavier", "Upright piano", (1.5, 0.6, 1.25),
        lambda m: [m.b(0, -0.1, m.w, 0.4, 0, m.h, "dark", edges="faint"), m.b(0, 0.15, m.w, 0.3, 0.7, 0.05, "dark"), m.b(0, 0.2, 1.3, 0.15, 0.72, 0.02, "white"), *[m.b(sx * 0.7, 0.2, 0.06, 0.06, 0, 0.7, "dark") for sx in (-1, 1)]],
        ("Piano droit", "Piano vertical", "Pianoforte verticale", "Piano", "Pianino", "Piano vertical", "Piano"))
    add("grand_piano", "Flügel", "Grand piano", (1.5, 2.1, 1.0),
        lambda m: [m.l(0, -0.1, 1.5, 1.8, 0.6, 0.35, "dark", tx=-0.2, tw=0.8, td=1.4, edges="faint"), m.b(0, 0.9, 1.4, 0.25, 0.7, 0.05, "dark"), m.b(0, 0.95, 1.25, 0.12, 0.72, 0.02, "white"), *[m.c(x, z, 0.08, 0.08, 0, 0.6, "dark") for x, z in ((-0.6, 0.8), (0.6, 0.8), (-0.2, -0.8))], m.l(-0.15, -0.2, 1.1, 1.4, 0.95, 0.05, "dark", rot=0)],
        ("Piano à queue", "Piano de cola", "Pianoforte a coda", "Vleugel", "Fortepian", "Piano de cauda", "Flygel"))
    add("drum_kit", "Schlagzeug", "Drum kit", (1.8, 1.4, 1.3),
        lambda m: [
            m.c(0, 0.2, 0.55, 0.4, 0.05, 0.55, "#b3232f", axis="z"),
            m.c(-0.5, 0.3, 0.35, 0.35, 0.45, 0.2, "#b3232f"),
            *[m.c(x, 0.0, 0.3, 0.3, 0.75, 0.2, "#b3232f") for x in (-0.15, 0.2)],
            m.c(0.55, 0.2, 0.45, 0.45, 0.4, 0.35, "#b3232f"),
            *[m.c(x, z, 0.45, 0.45, 1.2, 0.01, "#d4a637") for x, z in ((-0.7, -0.1), (0.75, -0.2))],
            m.c(0, -0.45, 0.4, 0.4, 0.5, 0.1, "dark"),
        ],
        ("Batterie", "Batería", "Batteria", "Drumstel", "Perkusja", "Bateria", "Trumset"))
    add("guitar_stand", "Gitarren auf Ständer", "Guitars on stands", (0.9, 0.45, 1.05),
        lambda m: [*[m.l(x, 0, 0.35, 0.1, 0, 0.45, c, tw=0.25, td=0.08) for x, c in ((-0.25, "#b8743a"), (0.25, "#2b3446"))], *[m.b(x, 0, 0.05, 0.03, 0.45, 0.55, "#6b4a32") for x in (-0.25, 0.25)], *[m.b(x, 0.1, 0.25, 0.25, 0, 0.03, "dark") for x in (-0.25, 0.25)]],
        ("Guitares sur pied", "Guitarras en soporte", "Chitarre su supporto", "Gitaren op standaard", "Gitary na statywach", "Guitarras em suporte", "Gitarrer på stativ"))
    add("guitar_amp", "Gitarrenverstärker", "Guitar amp", (0.6, 0.3, 0.5),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "dark", edges="faint"), m.b(0, m.d / 2, 0.5, 0.01, 0.05, 0.32, "#3a3226"), m.b(0, m.d / 2, 0.55, 0.01, 0.4, 0.06, "#d4a637"), m.b(0.2, m.d / 2, 0.02, 0.005, 0.42, 0.02, "#e03a3a", glow=True)],
        ("Ampli guitare", "Amplificador de guitarra", "Amplificatore per chitarra", "Gitaarversterker", "Wzmacniacz gitarowy", "Amplificador de guitarra", "Gitarrförstärkare"),
        electric=True)
    add("mixing_desk", "Mischpult-Tisch", "Studio desk with mixer", (1.8, 0.8, 1.15),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0.72, 0.05, "#6b4a32"),
            *m.legs(0.05, 0.05, 0.72, "dark"),
            m.l(0, 0.05, 0.9, 0.45, 0.77, 0.08, "dark", tz=-0.05, td=0.35),
            *[m.b(x, -0.25, 0.22, 0.25, 0.77, 0.36, "dark", edges="faint") for x in (-0.75, 0.75)],
            m.b(0, -0.3, 0.6, 0.05, 0.82, 0.33, "#1d2533", screen=True),
        ],
        ("Bureau de studio avec console", "Mesa de estudio con mezclador", "Scrivania da studio con mixer", "Studiobureau met mengpaneel", "Biurko studyjne z mikserem", "Mesa de estúdio com mesa de mistura", "Studiobord med mixer"),
        electric=True, surface=True)
    add("studio_monitor", "Studiomonitor", "Studio monitor", (0.2, 0.25, 0.32),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "dark", edges="faint"), m.c(0, m.d / 2, 0.15, 0.01, 0.04, 0.15, "#d4a637", axis="z"), m.c(0, m.d / 2, 0.05, 0.01, 0.22, 0.05, "#4a5468", axis="z")],
        ("Moniteur de studio", "Monitor de estudio", "Monitor da studio", "Studiomonitor", "Monitor studyjny", "Monitor de estúdio", "Studiomonitor"),
        mount="surface", electric=True)
    add("synth", "Synthesizer", "Synthesizer", (1.0, 0.35, 0.95),
        lambda m: [m.b(0, 0, m.w, m.d, 0.8, 0.1, "dark", edges="faint"), m.b(0, 0.08, 0.9, 0.15, 0.9, 0.02, "white"), *[m.b(0, 0, 0.9, 0.05, 0.5, 0.03, "metal")], *[m.b(sx * 0.4, 0, 0.04, 0.3, 0, 0.8, "metal", rot=sx * 15) for sx in (-1, 1)], *[m.b(-0.35 + 0.1 * i, -0.08, 0.04, 0.04, 0.9, 0.02, "#ff7a1a", glow=True) for i in range(4)]],
        ("Synthétiseur", "Sintetizador", "Sintetizzatore", "Synthesizer", "Syntezator", "Sintetizador", "Synthesizer"),
        electric=True)
    add("mic_stand", "Mikrofon mit Ständer", "Microphone on a stand", (0.6, 0.6, 1.7),
        lambda m: [m.c(0, 0, 0.5, 0.5, 0, 0.03, "dark"), m.c(0, 0, 0.03, 0.03, 0.03, 1.4, "dark"), m.b(0.1, 0, 0.3, 0.02, 1.43, 0.02, "dark"), m.c(0.25, 0, 0.06, 0.06, 1.4, 0.15, "metal")],
        ("Micro sur pied", "Micrófono con pie", "Microfono con asta", "Microfoon op standaard", "Mikrofon na statywie", "Microfone com suporte", "Mikrofon på stativ"))
    add("easel", "Staffelei", "Easel", (0.7, 0.6, 1.8),
        lambda m: [m.b(-0.2, 0.1, 0.04, 0.04, 0, 1.75, "#b98d5a", rot=-6), m.b(0.2, 0.1, 0.04, 0.04, 0, 1.75, "#b98d5a", rot=6), m.b(0, -0.2, 0.04, 0.04, 0, 1.6, "#b98d5a"), m.b(0, 0.12, 0.6, 0.03, 0.8, 0.8, "white", edges="faint"), m.b(0, 0.14, 0.5, 0.01, 0.9, 0.6, "#7ab8ff"), m.b(0, 0.12, 0.6, 0.06, 0.76, 0.04, "#b98d5a")],
        ("Chevalet", "Caballete", "Cavalletto", "Schildersezel", "Sztaluga", "Cavalete", "Staffli"))
    add("vinyl_player", "Plattenspieler", "Record player", (0.45, 0.36, 0.13),
        lambda m: [m.b(0, 0, m.w, m.d, 0, 0.08, "#6b4a32", edges="faint"), m.c(-0.05, 0, 0.3, 0.3, 0.08, 0.02, "dark"), m.b(0.15, -0.05, 0.02, 0.2, 0.1, 0.02, "metal", rot=20)],
        ("Platine vinyle", "Tocadiscos", "Giradischi", "Platenspeler", "Gramofon", "Gira-discos", "Skivspelare"),
        mount="surface", electric=True)

    # ============================================================== pictures & frames
    add = pack(
        "nextfloor.a_bilder",
        "Bilder & Rahmen",
        "Pictures & frames",
        "Bilderrahmen in vier Formaten, Leinwand, Poster, Tischrahmen, digitaler Bilderrahmen und Bilderleiste – jeweils mit deinem eigenen Foto",
        ("Cadres et photos", "Cuadros y marcos", "Quadri e cornici", "Foto's & lijsten", "Obrazy i ramki", "Quadros e molduras", "Tavlor & ramar"),
    )

    def framed(m, rim=0.03):
        return [
            m.b(0, 0, m.w, m.d * 0.6, 0, m.h, "body", paint=True, edges="faint"),
            m.b(0, m.d * 0.15, m.w - 2 * rim, m.d * 0.3, rim, m.h - 2 * rim, "white", picture=True),
        ]

    add("frame_landscape", "Bilderrahmen (quer)", "Picture frame (landscape)", (0.7, 0.03, 0.5), framed,
        ("Cadre photo (paysage)", "Marco (horizontal)", "Cornice (orizzontale)", "Fotolijst (liggend)", "Ramka (pozioma)", "Moldura (horizontal)", "Tavelram (liggande)"),
        mount="wall", wall_y=1.3, colors=FRAME_COLORS)
    add("frame_portrait", "Bilderrahmen (hoch)", "Picture frame (portrait)", (0.5, 0.03, 0.7), framed,
        ("Cadre photo (portrait)", "Marco (vertical)", "Cornice (verticale)", "Fotolijst (staand)", "Ramka (pionowa)", "Moldura (vertical)", "Tavelram (stående)"),
        mount="wall", wall_y=1.2, colors=FRAME_COLORS)
    add("frame_square", "Bilderrahmen (quadratisch)", "Picture frame (square)", (0.5, 0.03, 0.5), framed,
        ("Cadre photo (carré)", "Marco (cuadrado)", "Cornice (quadrata)", "Fotolijst (vierkant)", "Ramka (kwadratowa)", "Moldura (quadrada)", "Tavelram (kvadratisk)"),
        mount="wall", wall_y=1.3, colors=FRAME_COLORS)
    add("frame_large", "Großer Bilderrahmen", "Large picture frame", (1.2, 0.04, 0.85), lambda m: framed(m, 0.05),
        ("Grand cadre", "Marco grande", "Cornice grande", "Grote fotolijst", "Duża ramka", "Moldura grande", "Stor tavelram"),
        mount="wall", wall_y=1.1, colors=FRAME_COLORS)
    add("canvas", "Leinwandbild", "Canvas print", (1.0, 0.04, 0.7),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "white", picture=True)],
        ("Toile imprimée", "Lienzo", "Stampa su tela", "Canvas", "Obraz na płótnie", "Tela", "Canvastavla"),
        mount="wall", wall_y=1.2)
    add("poster", "Poster", "Poster", (0.6, 0.01, 0.85),
        lambda m: [m.b(0, 0, m.w, m.d, 0, m.h, "white", picture=True)],
        ("Affiche", "Póster", "Poster", "Poster", "Plakat", "Póster", "Affisch"),
        mount="wall", wall_y=1.0)
    add("frame_table", "Tischrahmen", "Table frame", (0.2, 0.08, 0.25),
        lambda m: [
            m.b(0, 0.02, m.w, 0.02, 0, m.h, "body", paint=True, edges="faint"),
            m.b(0, 0.031, m.w - 0.03, 0.004, 0.015, m.h - 0.03, "white", picture=True),
            m.b(0, -0.02, 0.03, 0.05, 0, m.h * 0.7, "body", paint=True, rot=0),
        ],
        ("Cadre à poser", "Marco de mesa", "Cornice da tavolo", "Fotolijstje", "Ramka na stół", "Moldura de mesa", "Bordsram"),
        mount="surface", colors=FRAME_COLORS)
    add("frame_digital", "Digitaler Bilderrahmen", "Digital photo frame", (0.3, 0.1, 0.22),
        lambda m: [
            m.b(0, 0.02, m.w, 0.025, 0, m.h, "dark", edges="faint"),
            m.b(0, 0.034, m.w - 0.03, 0.004, 0.015, m.h - 0.03, "dark", picture=True),
            m.b(0, -0.025, 0.04, 0.05, 0, m.h * 0.7, "dark"),
        ],
        ("Cadre photo numérique", "Marco digital", "Cornice digitale", "Digitale fotolijst", "Cyfrowa ramka", "Moldura digital", "Digital fotoram"),
        mount="surface", electric=True)
    add("picture_ledge", "Bilderleiste mit Rahmen", "Picture ledge with frames", (1.2, 0.1, 0.45),
        lambda m: [
            m.b(0, 0, m.w, m.d, 0, 0.03, "body", paint=True),
            m.b(-0.3, 0.0, 0.4, 0.02, 0.03, 0.32, "body", paint=True, rot=-3),
            m.b(-0.3, 0.012, 0.36, 0.004, 0.05, 0.28, "white", picture=True, rot=-3),
            m.b(0.3, -0.01, 0.35, 0.02, 0.03, 0.4, "body", paint=True, rot=2),
        ],
        ("Étagère à cadres", "Repisa para cuadros", "Mensola portaquadri", "Fotoplank met lijsten", "Półka na ramki", "Prateleira para quadros", "Tavelhylla med ramar"),
        mount="wall", wall_y=1.3, colors=FRAME_COLORS)

    return out


FRAME_COLORS = [
    {"id": "black", "name": {"de": "Schwarz", "en": "Black"}, "hex": "#1d2026"},
    {"id": "white", "name": {"de": "Weiß", "en": "White"}, "hex": "#eceae4"},
    {"id": "oak", "name": {"de": "Eiche", "en": "Oak"}, "hex": "#b98d5a"},
    {"id": "walnut", "name": {"de": "Nussbaum", "en": "Walnut"}, "hex": "#6b4a32"},
    {"id": "gold", "name": {"de": "Gold", "en": "Gold"}, "hex": "#c9a24a"},
    {"id": "silver", "name": {"de": "Silber", "en": "Silver"}, "hex": "#b8bec7"},
]
RING_BLUE = "#7fd0ff"
CAR_COLORS = [
    {"id": "red", "name": {"de": "Rot", "en": "Red"}, "hex": "#b3232f"},
    {"id": "black", "name": {"de": "Schwarz", "en": "Black"}, "hex": "#1d2026"},
    {"id": "white", "name": {"de": "Weiß", "en": "White"}, "hex": "#e8ecf2"},
    {"id": "blue", "name": {"de": "Blau", "en": "Blue"}, "hex": "#2f6b9a"},
    {"id": "green", "name": {"de": "Grün", "en": "Green"}, "hex": "#3f7a4a"},
    {"id": "grey", "name": {"de": "Grau", "en": "Grey"}, "hex": "#7b8594"},
]
