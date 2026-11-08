---
title: Haus zeichnen
description: Etagen, Räume, Wände, Türen, Fenster, Treppen und Vorlagen im Plan-Editor von NextFloor.
---

Öffne den Reiter **Editor** (nur Administratoren). Die Werkzeugleiste enthält die Werkzeuge, die Seitenleiste zeigt immer die Auswahl, und der Hinweis unten sagt, was das aktive Werkzeug tut. **Rückgängig** (Strg+Z) nimmt fast alles zurück.

![Der Plan-Editor mit der 3D-Ansicht daneben](editor.jpg)

## Etagen

*Etage hinzufügen* bietet die Etagen aus Home Assistant an, wodurch Plan und Home Assistant verbunden bleiben, oder eine *Leere Etage*. Das Etagen-Formular setzt Name, Höhe über dem Boden, Raumhöhe und die Etage in Home Assistant.

- *Verschieben* und *90° drehen* wirken auf die ganze Etage; *Alle Etagen mitnehmen* aufs ganze Haus.
- *Räume aus HA-Bereichen anlegen* setzt zum Start einen Raum je Bereich.
- *Etage duplizieren* legt eine Kopie oben aufs Haus, wahlweise mit Möbeln, Geräte-Pins und Außenflächen. Die Kopie ist von Home Assistant gelöst und wird für das neue Geschoss eingerichtet.
- *Lücken schließen* im Etagen-Formular verbindet haarfeine Spalten zwischen Räumen.

## Räume

- **Rechteck:** ziehen.
- **Freie Form:** Ecken setzen, mit Tippen auf die erste Ecke oder Enter schließen. Esc bricht ab.
- Ecken rasten am Raster und an vorhandenen Wänden ein. **Alt** schaltet das Einrasten für einen Zug aus.

Beschreibe jeden Raum in der Seitenleiste: Name, **Bereich** (die Verbindung zu deinen Home-Assistant-Geräten) und **Boden**-Material. Position und Größe lassen sich eintippen. An den Eckgriffen formst du um, das **+** auf einer Kante fügt eine Ecke ein. Ein rechteckiger Raum zeigt sein Innenmaß von Wand zu Wand.

> [!TIP]
> **＋ Bereich im Raum** nimmt Home-Assistant-Bereiche dazu, die Teil des Raums sind, aber keine eigenen Wände haben, etwa eine Leseecke oder eine Küchenzeile. Ihre Geräte gehören dann zum Raum.

*Fußbodenheizung* nennt den Thermostat, das Ventil oder den Schalter, bei dessen Heizen der Boden glüht.

## Wände

Wände entstehen aus den Raumkanten. Jede Kante hat Höhe, Dicke, eine Schere zum Teilen und *Keine Wand* für offene Kanten.

- Eine niedrigere Höhe macht eine Brüstung oder Theke.
- Eine geteilte Kante kann auf jedem Teilstück eine eigene Dicke haben.
- **Freistehende Wände** zeichnest du mit dem Werkzeug *Wand*. Umschalt hält gerade.
- **◠ Bogen** an einer Kante oder einer freien Wand öffnet das Feld *Wölbung*: eintragen, wie weit sich die Mitte wölbt (negativ in den Raum), dann *Biegen*. Ein Nachbarraum an der ganzen Wand biegt sich mit, Türen und Fenster wandern mit. Ein Raum, der nur einen Teil der Wand berührt, oder eine freie Wand darauf bleibt gerade. Ist eine Tür oder ein Fenster zu breit für einen tiefen Bogen, biegt die Wand nicht, und ein Hinweis sagt warum.
- **Schräge freie Wände** haben an jedem Ende eine eigene Höhe, für Giebel, Rampen und schräge Brüstungen.

## Türen und Fenster

*Tür & Fenster* wählen, eine Wand antippen und die Art aussuchen: Tür, Haustür, Doppeltür, Fenster, Doppelfenster, Terrassentür, Balkontür, Garagentor oder Glaswand. Breite, Mitte von der Ecke, Brüstung und Höhe einstellen, Anschlag oder Öffnungsrichtung wechseln. Der Stil *Automatisch* nimmt außen eine Haustür, innen eine Zimmertür.

Mehr zu Türen und Fenstern steht unter [Außen, Dach und Energie](outside.md#tueren-und-fenster-mehr) (Smart Lock, Lichtschacht) und unter [Geräte verbinden](devices.md#rolllaeden) (Rollläden).

## Treppen und Öffnungen

Das Werkzeug *Treppe* zeichnet eine Treppe dort, wo du ziehst; sie läuft entlang der langen Seite.

| Einstellung | Möglichkeiten |
|---|---|
| Form | gerade, viertelgewendelt, L mit Podest, halbgewendelt, U mit Podest, Wendeltreppe |
| Richtung | läuft links oder rechts herum |
| Bauart | massiv, Wangen-, Holm- oder Kragarmtreppe; mit oder ohne Setzstufen und Geländer |

Die Steigungen kommen aus der Etagenhöhe; das Formular zeigt Steigung, Auftritt und Schrittmaß und warnt bei unbequemen Maßen. *Führt nach unten* macht einen Abgang in einen Keller, der nicht gezeichnet sein muss.

Die Treppe öffnet die Decke nur, wo über den Stufen keine 2,2 m Kopfhöhe bleiben. Die Treppen aus dem Pack *Treppen & Geländer* schneiden ihre ganze Grundfläche aus. **Bodenöffnung** schneidet jedes andere Loch, für eine Galerie oder einen Schacht.

## Vorlage: ein Grundriss-Bild nachzeichnen

*Vorlage (Grundriss-Bild)* legt ein Bild hinter den Plan. Verschieben, skalieren, drehen und geraderichten, den Maßstab an einer bekannten Länge einstellen, dann nachzeichnen. Bei einem Scan oder einer CAD-Datei kannst du sie auch [direkt importieren](plan-tools.md#import-aus-anderen-programmen).

## Sperre

Das Schloss *Grundriss* verhindert, dass Räume, Wände, Öffnungen und Außenflächen aus Versehen wandern. Einzelne Stücke sperrt *Fixieren*.

## Nützliche Schalter

- **3D daneben** zeigt das 3D-Modell neben dem Plan, während du zeichnest.
- *Ansicht als Start der Etage / des Raums* merkt sich die aktuelle 3D-Kamera.
- **Rechtsklick** (oder langes Tippen) auf eine Stelle heftet eine [Notiz](plan-tools.md#notizen) an.

## Weiter

[Einrichten →](furnish.md)
