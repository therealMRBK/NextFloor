---
title: Außen, Dach und Energie
description: Außenflächen, Zäune und Tore, das Dach-Werkzeug, Solarfelder, Kabelwege, der Kompass, die echte Karte und der Sonnenbogen.
---

![Das Haus mit Garten, Dach und Solarfeld](view-energy.jpg)

## Außenflächen

Rasen, Terrasse, Weg, Einfahrt, Pool, Beet, Wildfläche, Hecke, Zaun oder Pergola aufziehen.

| Einstellung | Was sie tut |
|---|---|
| *Höhenversatz* | senkt oder hebt die Fläche |
| *Gefälle* | neigt sie |
| *Umriss zeigen* | schaltet die leuchtende Kante |
| *Aus den Flächen darunter ausschneiden* | macht ein Loch, für einen Teich |

Eine Fläche kann einem Home-Assistant-**Bereich** zugeordnet werden: Seine Geräte kommen nach Außen, und ein Pin öffnet sie. Pool, Teich und Beet zeigen auf dem Pin Wassertemperatur und Pumpe. Hecken und Zäune haben eine Höhe. Garten- und Wegeleuchten kommen aus der Bibliothek und beleuchten die Flächen.

### Tore in Zäunen

Ein Zaun kann **Tore** haben: Gartentor, Doppeltor oder Schiebetor. Jedes Tor sitzt an einer Position am Zaun und nimmt eine Entität oder einen Kontakt; in 3D öffnet es sich, wenn diese Entität offen oder an ist.

### Deckkraft

*Deckkraft (%)* im Formular einer Fläche macht sie durchsichtig, von 100 (undurchsichtig) bis 10. So verdeckt eine Einfahrt oder ein Rasen in der gestapelten Ansicht nicht mehr den Keller, und der Umriss lässt die Fläche erkennbar. Der Wert wird mit dem Plan gespeichert.

## Das Außen-Panel

Sobald ein Gerät außerhalb der Räume steht, bekommt die Leiste über der 3D-Ansicht neben den Geschossen den Knopf **🌳 Außen**. Er öffnet die Hausansicht mit einem Panel wie bei einem Raum, das die Geräte im Garten auflistet.

Ein Gerät, das auf dem Dach oder über einem Raum steht, aber nach draußen gehört (eine Wetterstation), bekommt in seinem Formular *Gehört zu Außen*. Es zählt dann nicht mehr zum Raum darunter und steht im Außen-Panel. Die Dashboard-Karte zeigt den Knopf bei ihren Raum-Knöpfen.

Damit Geräte nicht im Außen-Panel erscheinen, gibt es *Einstellungen → Draußen: Geräte ausblenden*. An derselben Stelle speichert *Diese Ansicht für Draußen* die Kamera der 3D-Vorschau im Editor: erst auf den Garten drehen, dann fliegt das Öffnen von „Draußen“ dorthin.

## Dach

Das Werkzeug *Dach* baut Dachflächen aus den Räumen: Form, Firstrichtung, Traufe, Neigung. Ziehen verschiebt, Ecken ändern die Größe. Die einfache Dachform steht in den Einstellungen.

- **Dachfenster** sitzen auf einer Fläche und bekommen Rollladen und Kontakte.
- **Sattel-, Walm- und Krüppelwalmflächen** können an jedem Firstende anders enden. Ein Flügel, der an ein größeres Dach stößt, läuft mit Kehlen in dessen Fläche.
- Ein Abschnitt dreht sich mit *Drehung (°)* um seine Mitte, für einen Flügel im Winkel.
- Ein Krüppelwalm hat einen Regler, wie hoch sein Walm beginnt.
- **Überstand je Seite:** *Überstand je Seite* stellt den Dachüberstand für jede Seite einzeln ein. Ohne eigene Werte ist der Überstand automatisch: überall gleich, außer wo der Dachteil ans Haus stößt (dort keiner).
- **Solarfelder** auf Flachdächern stehen auf Wunsch in Ost-West-Aufständerung, auf Schrägdächern auf einer Aufständerung mit eigener Neigung.

## Türen und Fenster (mehr)

- Eine Tür bekommt ein **Smart Lock**: Tür antippen schließt ab oder auf, aufgeschlossen leuchtet sie.
- Ein Fenster wählt seine Fensterbank, kann aus der Regenwarnung genommen werden und bekommt unter Gelände einen Lichtschacht.

## Energie

Die Checkliste verlangt ein **Solarfeld**, einen **Zähler** und einen **Wechselrichter**. Batterie und Netzanschluss sind optional.

1. Das **Solarfeld** kommt auf die am besten passende Südfläche (der Kompass entscheidet), in den Garten oder an eine Wand. Reihen, Spalten und Hoch- oder Querformat einstellen.
2. Zähler, Wechselrichter, Batterie und Wallbox als Geräte setzen.
3. Die Felder der Energiebilanz stehen auf *Automatisch*. *Aus dem Energie-Dashboard übernehmen* liest deine bestehende Einrichtung.

**Kabelwege** zeichnen ein, wo ein Kabel wirklich läuft: Solarfeld zum Wechselrichter, Batterie, Wechselrichter und Netz zum Haus, Unterzähler. *Weg zeichnen* drücken, im Plan die Punkte antippen, dazwischen das Geschoss wechseln, wo das Kabel durch die Decke geht, dann *Fertig*. Der Fluss folgt dem Weg statt eines Bogens, und *Als Kabel zeigen* zeichnet ihn als sichtbares Kabel. Der Weg einer Batterie wird je nach Laden oder Entladen in beide Richtungen gegangen.

*Gaszähler* und *Wasserzähler* stellen ihre Werte zur Bilanz. Was du in 3D siehst, steht unter [Klima und Energie](climate-energy.md).

## Kompass und Karte

In den **Einstellungen**:

- **Kompass.** Eine Scheibe zeigt, wohin Norden liegt, in Grad im Uhrzeigersinn von oben. Sonnenlicht, Wind und die Himmelsrichtung der Dachflächen richten sich danach. Sind Nord und Süd vertauscht, drückst du **Nord ↔ Süd tauschen**; Zeichnung, Dachflächen und Solarfelder bleiben, nur die Richtungen ändern sich. Viertel-Drehungen und jeder Winkel gehen auch.
- **Echte Karte.** Standardmäßig aus. Eingeschaltet liegt eine gedimmte Karte (OpenStreetMap oder deine eigene Kachel-Adresse `https://…/{z}/{x}/{y}`) unter dem Plan im Editor und unter dem Haus in 3D. Sie startet am Standort von Home Assistant. Sichtbarkeit und Detail einstellen und mit den Pfeilen verschieben, bis das Haus auf seinem Grundstück sitzt.

> [!NOTE]
> Dein Browser lädt die Kartenkacheln direkt vom Kartenserver, und nur solange die Karte an ist. Sonst verlässt nichts über dein Zuhause deine Installation.

- **Sonnenbogen und Kompassring:** *Sonnenbogen und Kompass* zeichnet den Weg der Sonne von heute als Bogen über das Grundstück, mit einem Ring und den Himmelsrichtungen am Boden (Norden rot). Dafür braucht es die Position deines Zuhauses in Home Assistant.
- Ebenfalls hier: Wanddicken, Raster, Maße in Metern oder Fuß und Zoll, Dachform, Wetter-Entity und Effekte, Regenwarnung (auf Wunsch vom eigenen Regensensor), ein Sensor für Stromausfall, Sonnenflecken und ein eigener Hintergrund (Farbe oder Bild) hinter dem Haus.

## Weiter

[Plan-Werkzeuge →](plan-tools.md)
