---
title: Wandtablet
description: Kiosk-Modus, Nachtdimmen, Bildschirmschoner, gut lesbarer Modus und Qualitätseinstellungen für Tablets an der Wand.
---

![NextFloor auf einem Wandtablet](tablet.jpg)

NextFloor ist für das Tablet an deiner Wand gemacht. Diese Optionen stehen im **Kiosk**-Abschnitt der Karte (siehe [Die Dashboard-Karte](cards.md)).

## Kiosk

| Option | Was sie tut |
|---|---|
| `idle_return` | Sekunden ohne Berührung, nach denen die Karte zur Startansicht zurückkehrt (0 = nie) |
| `night` | nachts dimmen: `off`, `sun` (die Sonne steht unter dem Horizont) oder ein Zeitraum wie `22:00-06:00`. Farbeffekte ruhen beim Dimmen |
| `idle_orbit` | nach der Rückkehr die Ansicht langsam von selbst drehen, bis zur nächsten Berührung: ein Bildschirmschoner |
| `dashboard` und `dashboard_label` | ein Knopf zu einem anderen Dashboard oder einer anderen Ansicht |
| `controls_hidden` / `controls_hide_after` | alle Leisten und Einblendungen beim Start oder nach einigen Sekunden ohne Berührung ausblenden |
| `fullscreen_button` | ein Knopf für Vollbild |
| `central_open` | das Sternmenü steht von Anfang an offen, eine Größe größer |
| `keep_camera` | beim Etagenwechsel bleiben Seite, Höhe und Abstand der Kamera |
| `room` | in einem Raum starten, für ein Display im Kinderzimmer |

## Gut lesbarer Modus

`readable: true` gibt kräftigere Kontraste und größere Schrift, für Tablets, die man aus der Ferne ansieht.

## Qualität

Die Qualität **schaltet auf langsamen Tablets von selbst herunter**. Du kannst sie auch einstellen: Auf Fire-Tablets und ähnlichen Geräten *Tablet* nutzen. Ist die Ansicht langsam, schalte auch Wetter und Stromfluss aus.

## Kleine Bildschirme

- `zoom` (0,6–2,5) holt die eingepassten Ansichten näher.
- *🎥 Kamera behalten* vermeidet das neue Ausrichten bei jedem Etagenwechsel.

## Durchsagen auf dem Tablet

Jede offene Seite spricht Durchsagen. Mit `screen_name` bekommt das Tablet einen Namen, um es allein anzusprechen. Siehe [Durchsagen](announcements.md).

## Weiter

[Die Dashboard-Karte →](cards.md)
