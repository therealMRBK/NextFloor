---
title: Möbel-Packs
description: Möbel-Packs importieren, selbst bauen und teilen. Das JSON-Format der Packs mit allen Feldern.
---

Möbel-Packs bringen zusätzliche Möbel in NextFloor. Sie werden wie die eingebauten Möbel aus
Quadern, Zylindern und Lofts gebaut und laufen deshalb genauso flüssig auf schwachen Tablets.

Ein Pack ist eine einfache JSON-Datei. Jeder kann eigene Packs bauen, weitergeben und importieren.

## Möbel-Baukasten und Community-Möbel

Am einfachsten baust du Möbel im **[Möbel-Baukasten](https://therealmrbk.github.io/NextFloor/builder/)** im Browser:
Teile hinzufügen, Maße in Zentimetern eintragen, Farben wählen – die 3D-Vorschau zeichnet das Möbel genau so wie
NextFloor. Der Baukasten prüft das Pack wie der Import, speichert es als Datei und teilt es mit einem Knopf im
**Community-Store** ([NextFloor-Plugins](https://github.com/therealMRBK/NextFloor-Plugins#community-furniture)). Geteilte
Packs stehen danach in NextFloor unter **Erweiterungen → Community-Möbel** zum Installieren bereit.

## Mitgelieferte Packs

43 Packs mit rund 800 Modellen kommen mit der Integration (`custom_components/nextfloor/packs/nextfloor.*.json`) und sind
immer da; Übersicht in der [Bibliothek](furnish.md#die-bibliothek). Sie werden mit
`python3 tools/build_packs.py` aus den Definitionen in `tools/` erzeugt (`build_packs.py` und die
`area_*.py`-Module); nach einer Änderung dort das Skript laufen lassen, mit `python3 tools/check_packs.py`
prüfen und die JSON-Dateien mit committen. Mitgelieferte Packs lassen sich nicht
entfernen, und ein importiertes Pack darf nicht dieselbe ID haben.

## Eigenes Pack

1. Pack schreiben (JSON, Format unten). Die `id` sollte mit deinem Namen beginnen (`meinname.kueche`),
   damit sie mit niemandem kollidiert; `nextfloor.*` ist für die mitgelieferten Packs reserviert.
2. Import in Home Assistant unter **Erweiterungen → Möbel-Packs**: mit **Pack-Dateien importieren …**
   (mehrere Dateien auf einmal gehen) oder das JSON ins Textfeld einfügen und **JSON importieren**.
   Dort lassen sich eigene Packs auch wieder entfernen.
3. Eine neuere Version mit derselben `id` ersetzt die alte; Möbel im Plan bleiben erhalten. Wird ein
   Pack entfernt, bleiben seine Möbel als einfache Kästen im Plan und kommen mit einem erneuten Import
   zurück.

## Format

```json
{
  "format": "nfpack",
  "version": 1,
  "id": "meinname.kueche",
  "name": "Küchen-Pack",
  "publisher": "Mein Name",
  "description": "optional",
  "items": [
    {
      "id": "retro_fridge",
      "name": { "de": "Retro-Kühlschrank", "en": "Retro fridge" },
      "size": [0.6, 0.65, 1.5],
      "electric": true,
      "parts": [{ "shape": "box", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 1, "color": "white", "edges": true }],
      "symbol": [{ "shape": "rect", "x": 0, "z": 0, "w": 1, "d": 1 }]
    }
  ]
}
```

- `size`: Standardgröße in Metern (Breite, Tiefe, Höhe). Im Plan lässt sich jedes Möbel danach frei
  skalieren. Dabei behalten Teile bis 22 cm vor jedem Ende ihre echte Größe und ihren Abstand zum Rand
  (Armlehnen, Beine, Platten, Griffe), nur die Mitte wird gestreckt. `"stretch": true` am Möbel lässt
  stattdessen alle Teile gleichmäßig mitwachsen; Fahrzeuge wachsen immer gleichmäßig.
- `parts` (max. 60): `box`, `cyl`, `loft` oder `sweep`. Alle Maße sind **Anteile der Möbelgröße**: `x`/`z`
  Mitte (−0,5 … 0,5, vorne ist +z), `w`/`d` Breite/Tiefe (0 … 1), `y` Unterkante und `h` Höhe (0 … 1
  der Höhe). Ein Zylinder hat den kleineren Wert von `w` und `d` als Durchmesser; mit `axis: "x"` oder
  `"z"` liegt er (Räder, Rollen – die Länge ist die Ausdehnung entlang der Achse, der Durchmesser der
  kleinere Wert aus Querausdehnung und `h`). Ein `loft` ist ein Quader, dessen Oberseite ein anderes
  Rechteck ist (`tx`/`tz` Mitte, `tw`/`td` Größe; Standard wie unten) – für schräge Flächen wie
  Motorhauben, Windschutzscheiben oder Lampenschirme. Mit `"capFront": false` und/oder `"capBack": false` bleibt
  das Ende bei +z (vorne) oder −z (hinten) offen, für Dächer, offene Giebel oder Rahmen; ohne Angabe sind beide Enden
  geschlossen.
  Ein Teil mit `rot` (Grad) ist um seine eigene Mitte um die Hochachse gedreht – für Wendeltreppen
  oder diagonale Streben; ein schmaler `loft` mit versetzter Oberseite ergibt eine schräge Stange
  (Handlauf).
- `sweep` (glatter Körper): Querschnitte entlang der Tiefe (z), zwischen denen die Haut gespannt wird – für alles
  Runde wie Autos, Boote oder Kotflügel. `stations` ist eine Liste von `[z, unten, oben, breite]`: `z` Mitte des
  Querschnitts (−0,5 … 0,5), `unten` und `oben` als Anteil der Höhe, `breite` als Anteil der Breite. `x` verschiebt den
  Körper seitlich. `exp` formt den Querschnitt (2 = Ellipse, höhere Werte werden kantiger, Standard 2,6) und `n` ist die
  Zahl der Punkte rundherum (6 … 32, Standard 16). Die Fahrzeuge des Packs „Fahrzeuge“ sind so gebaut, siehe
  `tools/build_packs.py`.
- `color`: `#rrggbb` oder eine Rolle der eingebauten Palette (`body`, `fabric`, `cushion`, `wood`,
  `white`, `metal`, `dark`, `glass`, `plant`, `pot`, `accent`) – Rollen passen zum Look. `top` setzt
  eine eigene Farbe für die Oberseite, `edges` zeichnet leuchtende Kanten (`true`: dezent blau,
  `"glow"`: cyan wie die Wände, `"faint"`: sehr zart).
- `symbol` (optional, max. 40): Draufsicht im Plan aus `rect` (`fill` für gefüllt), `circle` (`r` als
  Anteil der kleineren Seite) und `line` (`x1`, `z1`, `x2`, `z2`). Ohne Symbol zeichnet der Plan die
  Teile von oben.
- `electric`: das Möbel lässt sich mit einem Schalter und Leistungssensor verknüpfen.
- `climate`: kennzeichnet das Möbel als Klimagerät (z. B. Klimaanlage oder Wärmepumpe).
  Es lässt sich mit einer `climate`-Entität und optional einem Leistungssensor verknüpfen.
  Die automatische Zuordnung sucht passende `climate`-Entitäten im
  Home-Assistant-Bereich des Raums. Diese Option fügt noch keine 3D-Animation hinzu.
- `mount`: wo das Möbel sitzt – `floor` (Standard), `surface` (auf dem Möbel darunter, z. B.
  Kaffeemaschine auf der Arbeitsplatte), `wall` (Unterkante bei `wall_y` Metern, z. B. Wallbox) oder
  `ceiling` (hängt von der Decke, z. B. Dunstabzug, Pendelleuchten).
- `surface`: die Oberseite trägt andere Möbel (Tisch, Kücheninsel, Werkbank).
- `hole`: eine Treppe – reicht sie bis zur Etage darüber, schneidet sie dort die Treppenöffnung in den
  Boden (wie die eingebaute Treppe); die Stufen steigen von der Vorderkante (+z) nach hinten an.
- `light`: das Möbel ist eine Leuchte und wird mit einem Licht (oder Schalter) verknüpft. Der Wert sagt,
  wie das Licht den Raum ausleuchtet (`ceiling`, `pendant`, `floor`, `table`, `wall`, `spot`, `garden` …).
  Teile mit `"glow": true` leuchten in Farbe und Helligkeit des Lichts.
- `screen`: ein Teil mit `"screen": true` ist ein Bildschirm (Fernseher, Monitor). Das Möbel lässt sich
  dann mit einem Media Player verknüpfen; die Vorderseite (+z) zeigt die Farbe der laufenden App und
  ihr Bild, wie die eingebauten Fernseher.
