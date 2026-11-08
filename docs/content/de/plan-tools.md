---
title: Plan-Werkzeuge
description: Plan prüfen, Flächen und der Plan auf Papier, Notizen, Versionen, Sicherung, Teilen und Import aus anderen Programmen.
---

## Plan prüfen

*✓ Plan prüfen* oben in der Seitenleiste des Editors listet Etage für Etage, was fehlt oder schief ist:

- Räume ohne Bereich und Bereiche ohne Raum
- noch nicht gesetzte Geräte eines Raums
- übereinanderliegende Räume
- Türen und Fenster neben der Wand
- Verknüpfungen zu Entitäten, die Home Assistant nicht mehr kennt
- Standby-Fresser, mit ihren Jahreskosten

Blaue Knöpfe lösen einen Fund per Tipp (Rückgängig geht wie immer), *Zeigen* öffnet die Stelle. Eine kurze Tour führt durch einen neuen Plan, und das Tastenblatt öffnet sich mit `?`.

## Flächen und Plan auf Papier

Das Raumformular zeigt die **Wohnfläche** des Raums, gerechnet wie die Wohnflächenverordnung:

- voll ab 2 m lichter Höhe
- zur Hälfte zwischen 1 m und 2 m
- darunter nicht

Garagen, Keller und Technikräume bleiben nach ihrem Namen draußen; *Zählt zur Wohnfläche* entscheidet es von Hand. Das Etagenformular zählt die Flächen für Etage und Haus zusammen.

*🖨️ Plan drucken / PDF* öffnet jede Etage in **1:100** mit Maßen und der Flächentabelle. Drucken oder im Druckdialog als PDF speichern.

## Notizen

Rechtsklick (oder langes Tippen) auf eine Stelle im Plan und *✎ Notiz hier* wählen. Text eintippen und, wenn du magst, den Tag, an dem sie fällig ist. Notizen stehen als gelbe Pins in der 3D-Ansicht ihrer Etage (orange, sobald fällig). Ein Tipp zeigt den ganzen Text, und die Suche findet sie.

## Versionen

*📌 Stand speichern …* hält den Plan unter einem Namen fest, zum Beispiel „vor dem Umbau“. Er bleibt, wenn die automatischen Wiederherstellungspunkte gehen. *Vergleichen* an einer Version listet Etage für Etage, was sich gegenüber dem Plan jetzt unterscheidet.

## Sicherung und Import

Unter *Sicherung* im Editor:

| Aktion | Was sie tut |
|---|---|
| **Exportieren** / **Importieren** | der Plan als Datei |
| **Als Vorlage teilen** | der Plan ohne deine persönlichen Gerätedaten |
| **Alles sichern** | Plan, Bilder und Packs in einer Datei |
| **Vollsicherung wiederherstellen** | holt diese Datei zurück |
| *🔗 Ansicht teilen* | speichert das Haus als kleine HTML-Datei, die in jedem Browser ohne Home Assistant aufgeht (über die Online-Demo, ohne Geräte), zum Zeigen |

> [!TIP]
> Vor größeren Änderungen sichern.

### Import aus anderen Programmen

Unter *Sicherung → Importieren*:

- **iPhone-Raumscan:** Ein Scan mit Apples RoomPlan lädt als Räume, Wände, Türen und Fenster.
- **Sweet Home 3D** (`.sh3d`, ab Version 5.3): Ebenen werden Etagen, Räume werden Räume, Türen und Fenster sitzen in ihren Wänden, freie Wände bleiben frei. Möbel werden nicht übernommen.
- **DXF** (`.dxf`, aus einem CAD-Programm): geschlossene Polylinien werden Räume, Linien freie Wände.
- **IFC** (`.ifc`, aus Revit, ArchiCAD, Allplan …): Geschosse werden Etagen, Räume (IfcSpace) werden Räume; die Wände zeichnet NextFloor aus den Räumen.

Ein Plan lässt sich auch von Hand schreiben, aus einem anderen Programm umwandeln oder von einer KI aus einem Bild des Grundrisses zeichnen. Format und fertige Anweisung stehen unter [Plan-Format](plan-format.md).

## 3D-Druck-Export

*3D-Druck (STL)* in den Einstellungen der 3D-Ansicht speichert das Haus als STL-Datei im Maßstab 1:100, ein Meter wird zu 10 mm. Sie enthält Wände, Böden, Möbel und Außenflächen aller Etagen; Fenster, Licht und Dach fehlen.
