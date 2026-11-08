---
title: Haushalt und Haustiere
description: Mülltonnen, der Briefkasten, durstige Pflanzen, Waschmaschinen, Haustiere, Mähroboter, Sprinkler und Pools in der 3D-Ansicht.
---

Möbel aus den Garten- und Haushalts-Packs machen Alltägliches zu kleinen Live-Signalen.

## Mülltonnen

Mülltonnen (Pack Garten & Terrasse, vier Farben, 120 und 240 l) bekommen einen *Abholtermin (Sensor)*, zum Beispiel von Waste Collection Schedule oder einem Sensor mit Tagen oder Datum. Am Tag davor und am Abholtag leuchtet die Tonne und zeigt ihren Pin. Die Karte *Heute* listet die Tonnen, die heute oder morgen abgeholt werden.

## Briefkasten

*Post-Sensor* wählen (zum Beispiel ein Kontakt an der Klappe). Liegt Post drin, leuchtet der Briefkasten.

## Pflanzen

*Bodenfeuchte (Sensor)* und *Durst unter (%)* einstellen. Darunter leuchtet die Pflanze.

## Waschmaschine, Trockner, Spülmaschine

Hat das Gerät in Home Assistant einen Restlaufzeit-Sensor, steht am Pin „Noch 25 min“.

## Haustiere

Haustiere (Pack Haustiere: Katze, Hund, Kaninchen) laufen in ihrem Raum um die Möbel herum und machen zwischendurch Pausen. Mit einem **Raum-Sensor** (Bermuda, ESPresense) läuft das Tier in dem Raum herum, in dem es wirklich ist.

## Garten

- **Mähroboter:** Ein Mähroboter oder seine Station aus *Garten 2*, verbunden mit einem `lawn_mower`, mäht Bahnen über seinen Rasen.
- **Sprinkler, Pools und Teiche:** Pools, Teiche und Beete zeigen auf ihrem Pin Wassertemperatur und Pumpe.
- **Gärten mit ihrem Bereich verbunden:** Eine Außenfläche, die einem Home-Assistant-Bereich zugeordnet ist, bringt ihre Geräte ins [Außen-Panel](outside.md#das-aussen-panel).

## Putzen und Sicherungskasten

- *🧹 Putzen* je Raum.
- Die Stromkreise des Sicherungskastens je Raum.
- Saugroboter stehen unter [Live-Funktionen](live.md#saugroboter-im-plan).

## Personen

Personen erscheinen in ihren Räumen über die [Anwesenheit](devices.md#anwesenheit-personen-in-ihren-raeumen).

## Weiter

[Durchsagen →](announcements.md)
