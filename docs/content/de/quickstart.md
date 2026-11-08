---
title: Schnellstart
description: Den ersten Raum zeichnen, eine Lampe setzen und sie in der 3D-Ansicht schalten. Etwa fünfzehn Minuten.
---

Am Ende dieser Seite hast du eine Etage mit einem Raum, eine Lampe, die zu einem echten Licht in Home Assistant gehört, und eine 3D-Ansicht zum Antippen. Vorbereiten musst du nur einen **Bereich** in Home Assistant mit mindestens einem Licht darin.

> [!TIP]
> Lieber erst zuschauen? Das [Einrichtungsvideo](https://therealmrbk.github.io/NextFloor/tutorial/) zeichnet ein ganzes Haus von der leeren Seite an (45 Minuten, englische Stimme, Untertitel Englisch und Deutsch). Oder probiere die [Live-Demo](https://therealmrbk.github.io/NextFloor/) mit erfundenen Daten.

## Bevor du anfängst

- [NextFloor ist installiert](install.md), und du bist als Administrator angemeldet.
- In Home Assistant gibt es den Raum schon als **Bereich** (Einstellungen → Bereiche), und ein Licht gehört dazu.

## Den ersten Raum zeichnen und beleuchten

1. **Editor öffnen.** Im Seitenleisten-Eintrag von NextFloor zum Reiter **Editor** wechseln. Die Werkzeugleiste enthält die Werkzeuge, die Seitenleiste zeigt die Auswahl, und der Hinweis unten sagt, was das aktive Werkzeug tut.
2. **Etage anlegen.** *Etage hinzufügen* drücken. Es bietet die Etagen aus Home Assistant an (Plan und Home Assistant bleiben so verbunden) oder eine *Leere Etage*. Eine wählen.
3. **Raum zeichnen.** Das Werkzeug *Rechteck* wählen und im Plan aufziehen. Die Ecken rasten am Raster ein.
4. **Raum beschreiben.** In der Seitenleiste einen Namen vergeben, den **Bereich** wählen (die Verbindung zu deinen Geräten) und ein Boden-Material aussuchen.
5. **Tür und Fenster setzen.** *Tür & Fenster* wählen, eine Wand antippen und die Art aussuchen. Breite und Position einstellen, wenn die Vorgaben nicht passen.
6. **Einrichten.** Das Werkzeug *Möbel* wählen, den Raum antippen und rechts aus der Bibliothek ein Sofa, ein Bett oder eine Lampe wählen. Neue Stücke landen in der Raummitte; zieh sie an ihren Platz.
7. **Dein Licht setzen.** Den Raum öffnen und zu **Geräte** scrollen. Die Geräte deines Bereichs stehen dort. Bei einem Licht auf **Platzieren** drücken: Es wird zur Lampe im Raum.
8. **In 3D ansehen.** *3D daneben* einschalten oder den Editor verlassen und den Reiter **3D** öffnen.

Tippe die Lampe an: Das echte Licht schaltet. Wischen dimmt, langes Drücken öffnet die Farben.

![Der Editor mit dem Raum links und dem wachsenden 3D-Modell rechts](editor.jpg)

> [!NOTE]
> **Rückgängig** (Strg+Z) nimmt fast alles zurück. Schlägt das Speichern einmal fehl, bleiben deine Änderungen in diesem Browser, und der Editor sagt dir, warum.

## Wie es weitergeht

- Den Rest des Hauses zeichnen: [Haus zeichnen](draw.md).
- Es wohnlich machen: [Einrichten](furnish.md).
- Die übrigen Geräte anbinden: [Geräte verbinden](devices.md).
- Aufs Dashboard oder ein Wandtablet bringen: [Die Dashboard-Karte](cards.md).
