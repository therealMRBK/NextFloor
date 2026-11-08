---
title: Geräte verbinden
description: Lichter, Rollläden, Fernseher, Drucker, das Auto, Haustiere und mehr mit dem Plan verbinden. Favoriten, eigene Knöpfe und eigene Warnungen.
---

Im Raum-Formular listet der Abschnitt **Geräte** die Home-Assistant-Geräte des Bereichs dieses Raums. Reiter: *Dieser Bereich*, *Andere Bereiche* und *Ohne Bereich*; Suche nach Namen.

Jede Zeile hat ein Auge (im 3D-Raum-Fenster ausblenden), *Aa* (eigener Name), einen Stern (ins Raum-Fenster aufnehmen, ohne zu platzieren) und *Platzieren*.

> [!NOTE]
> Entity-Felder sind durchsuchbar: einen Teil des Namens tippen und wählen. **Durch das Zuweisen schaltet NextFloor nie etwas.**

## Lichter

Eine platzierte Leuchte wird zur Lampe. Das Lampen-Formular hat diese Optionen:

| Option | Was sie tut |
|---|---|
| *Licht oder Schalter* | nennt das Licht, das zur Lampe gehört |
| *Farbe und Helligkeit von* | für Lampen, die per Relais geschaltet und anderswo gedimmt werden |
| *Leuchtstärke in 3D* | skaliert das Leuchten |
| *Vor dem Schalten fragen* | schützt vor versehentlichem Antippen |
| *Symbol in 3D* | bestimmt den Pin über der Lampe |

**Leuchten mit mehreren Lichtern:** *Leuchtmittel 2, 3 …* nimmt Nachtlicht oder Lichtring derselben Leuchte dazu. Ist das Hauptlicht aus, leuchtet die Lampe mit ihnen.

**Lichtprogramme:** Unter *Effektanimationen in 3D* ordnest du jedem exakten Effektnamen, den Home Assistant meldet, eine Darstellung zu: *Statisch*, *Regenbogen*, *Pulsieren* oder *Flackern*. Nicht zugeordnete Effekte bleiben statisch, denn ein Effektname ist nur der Name eines Programms. Die Zuordnung liegt im Plan und schreibt nie in Home Assistant.

## Elektrische Möbel

Möbel wie Fernseher, Kühlschrank oder Waschmaschine finden ihre Entity im selben Bereich selbst (*Automatisch*). Technische Geräte (Wechselrichter, Akku, PC …) nehmen zusätzlich einen Temperatursensor als *Gerätetemperatur*: sein Wert steht am Pin, ab 60 °C ist der Pin hervorgehoben.

- **Fernseher** zeigen Farbe und Titel der laufenden App. *Leuchten hinter dem TV* stellt das Ambilight ein oder aus.
- Ein **Leistungssensor** zeigt die Watt. Jedes elektrische Stück zeigt seine Leistung neben dem Zustand, und seine Statuslichter leuchten, solange es läuft.
- **Waschmaschine, Trockner, Spülmaschine:** Mit einem Restlaufzeit-Sensor steht am Pin „Noch 25 min“.

## Rollläden

*Art des Behangs* eines Fensters ist Rollladen außen, Raffstore (die Lamellen folgen der Neigung) oder Rollo innen.

- *Zweiter Rollladen* deckt die rechte Hälfte eines breiten Fensters.
- *Lieblingsposition „My“* setzt einen **My**-Knopf ins Schnellmenü des Rollladens (zum Beispiel Somfy).
- Auch Dachfenster bekommen Rollladen und Kontakte. Siehe [Außen, Dach und Energie](outside.md).

## Türen, Schlösser und Tore

Eine Tür bekommt ein **Smart Lock**: Tür antippen schließt ab oder auf, aufgeschlossen leuchtet sie. **Tore** in Zäunen öffnen sich in 3D nach dem Zustand einer Entität oder eines Kontakts, den du wählst. Siehe [Außen, Dach und Energie](outside.md#tore-in-zaeunen).

## Drucker, Wärmepumpe, Auto

- **3D-Drucker und Wärmepumpe:** Drucker oder Wärmepumpe aus den Packs mit einer beliebigen Entität ihres Geräts verbinden. Eine Live-Karte zeigt den Druck (Bild, Fortschritt, Restzeit, Schicht, Temperaturen, Filamente, das Druckteil wächst auf dem Bett) oder die Wärmepumpe (Betriebsart, Vor- und Rücklauf, Strom, Wärme, COP).
- **Auto (Stellplatz):** aus dem Bibliotheks-Bereich *Parken*. *Fahrzeug* wählt das Modell, *Sensor „Auto da“* bestimmt, wann es erscheint, und über eine beliebige Entität des Autos findet NextFloor Ladestand, Reichweite, Stecker, Schloss und Klima am Gerät des Autos. Ohne Sensor wird das Fahrzeug immer gezeigt.

## Garten und Haustiere

- **Mähroboter:** Ein Mähroboter oder seine Station aus *Garten 2*, verbunden mit einem `lawn_mower`, mäht Bahnen über seinen Rasen.
- **Saugroboter:** Ein `robot_vacuum` im Plan kann seine echte Position und Spur zeigen. Siehe [Saugroboter im Plan](live.md#saugroboter-im-plan).
- **Haustiere:** Mit einem *Raum-Sensor* (Bermuda, ESPresense) läuft das Tier in dem Raum herum, in dem es wirklich ist.
- Mehr: [Haushalt und Haustiere](household.md).

## Anwesenheit: Personen in ihren Räumen

*Haus-Einstellungen → Anwesenheit* listet jede `person`. Wähle einen **Raum-Sensor** (ESPresense, Bermuda oder ähnlich, dessen Zustand der Raumname ist), und solange die Person zu Hause ist, steht ihr Avatar mit dem Home-Assistant-Bild in diesem Raum. In der Hausansicht werden die Personen je Etage gezählt.

- **Standardraum:** Jede Person kann einen Standardraum haben. Solange sie zu Hause ist und kein Raum-Sensor einen Raum nennt, steht sie dort, ein Raum-Sensor ist also nicht nötig.
- **Weitere Entität:** Unter der Liste fügst du einen Eingabehelfer, einen Device Tracker oder einen Binärsensor hinzu. Er zählt als zu Hause, solange sein Zustand `on` oder `home` ist.

## Favoriten, Knöpfe und Warnungen

**Favoriten und eigene Knöpfe** (Einstellungen, *Favoriten*): Szenen, Skripte, Automationen, Schalter und Buttons fürs Zentralmenü. Eigene Knöpfe öffnen einen Dashboard-Pfad, Entity-Details, einen Dienstaufruf oder ein browser_mod-Popup. *Sender oder Playlist* legt Lautsprecher-Voreinstellungen an, und eine Voreinstellung kann auf einzelne Lautsprecher beschränkt werden.

**Eigene Warnungen** machen aus jeder Entität eine Zeile in der Warnleiste. Passe einen Zustand an, mehrere Zustände mit Komma oder eine Zahl mit `<20` oder `>80`, und gib Text, Raum und Farbe an.

**Kalender für „Heute“** füllen die Karte *Heute*.

## Weiter

[Außen, Dach und Energie →](outside.md)
