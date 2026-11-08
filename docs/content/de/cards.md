---
title: Die Dashboard-Karte
description: Die NextFloor-Karte in jedes Dashboard setzen, mit visuellem Editor, Kartenvorlagen und einer vollständigen Liste jeder Option.
---

![Die NextFloor-Karte auf einem Dashboard](card.jpg)

*NextFloor* im Karten-Dialog des Dashboards hinzufügen, oder in YAML schreiben:

```yaml
type: custom:nextfloor-card
floor: ground
theme: neon
room_buttons: true
```

Der **visuelle Editor** stellt alles Folgende ohne YAML ein. Die YAML-Namen sind die in dieser Referenz. Jede Option ist optional, die Vorgaben stehen in den Tabellen.

## Kartenvorlagen

Richte eine Karte einmal ein und nutze sie auf vielen Tablets. *Einstellungen → Kartenvorlagen* im Editor nimmt einen Namen (etwa `kueche_tablet`) und den Einstellungsdialog der Karte. Auf einer Dashboard-Karte wählst du die Vorlage in ihren Einstellungen oder schreibst:

```yaml
type: custom:nextfloor-card
template: kueche_tablet
```

Die eigenen Optionen der Karte gewinnen. Eine Änderung im Editor erreicht jede Karte, die die Vorlage nutzt. *Bildschirme mit dieser Vorlage neu laden* und *Alle Bildschirme neu laden* (auch die Aktion `nextfloor.reload_screens`, mit optionalem `template`) lassen die offenen Tablets ihre Seite einige Sekunden versetzt neu laden, zum Beispiel nach einem Update.

## Was die Karte zeigt

| Option | Vorgabe | Bedeutung |
|---|---|---|
| `floor` | | Startetage |
| `room` | | in diesem Raum starten (seine ID aus dem Editor), für ein Display eines Raums |
| `rooms` | | nur diese Räume (eine Liste von IDs) mit dem, was darin steht; die Karte kann sie nicht verlassen |
| `height` | | feste Höhe der Karte |
| `fill` | `false` | den Bildschirm unter der Dashboard-Kopfzeile füllen statt fester Höhe |
| `plain` | `false` | nur Grundriss: keine Möbel (Geräte und ihre Pins bleiben) |
| `floor_stack` | `dim` | eine geöffnete Etage mit abgedunkelten Etagen darunter (`dim`), gestapelt (`stacked`) oder allein (`single`) |
| `explode` | `true` | die Etagen in der Hausansicht auseinanderziehen |
| `roof_fade` | `true` | das Dach hebt sich und blendet beim Hineinzoomen aus |
| `room_names` | `true` | Raumnamen in 3D |
| `energy` | `true` | Energiewerte oben |
| `sensor_bar` | `true` | die eigenen Sensoren des Plans oben |
| `weather` | `true` | Regen, Schnee, Nebel, Wolken, Sonne und Mond um das Haus |
| `weather_entity` | die erste | die Wetter-Entity, die genutzt wird |
| `weather_density` | `1` | wie viel Regen, Hagel und Schnee fällt, 0,1 … 1 |
| `today` | `true` | die Karte *Heute* mit Terminen und Tonnen |

## Aussehen

| Option | Vorgabe | Bedeutung |
|---|---|---|
| `theme` | `auto` | `neon`, `blueprint`, `day` |
| `accent` | Cyan | Akzentfarbe als `#rrggbb` |
| `furniture_colors` | die des Hauses | eigene Möbelfarben dieser Karte, z. B. `{body: "#3a2a1a", fabric: "#552233"}`; Rollen: `body`, `wood`, `fabric`, `white`, `metal`, `dark` |
| `walls` | | Wandmodus der Ansicht |
| `solid_walls` | `false` | blickdichte Wände in ihrer Farbe statt Glas |
| `glass_walls` | `20` | wie blickdicht die durchsichtigen Wände sind, 0 … 100 % |
| `quality` | auto | `auto`, `tablet`, `high` |
| `markers` | `important` | `none`, `important`, `all` |
| `markers_outside` | | außerhalb des geöffneten Raums zeigen nur Symbole dieser Arten |
| `marker_names` | `false` | jedes Gerät mit eigenem Namen zeigt ihn unter seinem Symbol |
| `heatmap` | `none` | `none`, `temperature`, `humidity`, `co2` |
| `clock` | `none` | `top_left`, `top_right`, `bottom_left`, `bottom_right` |
| `readable` | `false` | kräftigere Kontraste und größere Schrift, für Wandtablets |
| `zoom` | `1` | wie viel näher die eingepassten Ansichten kommen, 0,6 … 2,5 |
| `stats` | `false` | Bilder pro Sekunde und Zeichenaufrufe zeigen |

## Bedienelemente und Verhalten

| Option | Vorgabe | Bedeutung |
|---|---|---|
| `controls` | | Schalter in der Karte: alle (`true`) oder eine Liste aus `walls`, `floors`, `temperature`, `humidity`, `co2` |
| `controls_hidden` | | mit ausgeblendeten Leisten und Einblendungen starten (der Augen-Knopf holt sie zurück) |
| `controls_hide_after` | | alle Leisten nach so vielen Sekunden ohne Berührung ausblenden |
| `room_panel` | `true` | Antippen eines Raums öffnet seine Details |
| `room_buttons` | `false` | eine Reihe von Knöpfen, einer je Raum |
| `floor_thumbs` | an ohne Startetage | kleine Bilder der Etagen zum Wechseln |
| `central` | `true` | der Stern mit dem Zentralmenü |
| `central_open` | `false` | das Sternmenü steht von Anfang an offen, eine Größe größer |
| `buttons` | | eigene Knöpfe im Zentralmenü: `label`, `icon`, `action` (`navigate`, `more_info`, `service`, `fire_dom_event`), `target`, `data` |
| `scenes` | `true` | Szenen- und Skript-Chips des gewählten Raums |
| `tap_in_room` | `false` | Geräte schaltet ein Tippen nur im geöffneten Raum; anderswo öffnet es die Etage oder den Raum (langer Druck wirkt weiter) |
| `room_double_tap` | `auto` | was ein Doppeltipp auf einen Raum schaltet: `auto`, `area`, `plan`, `off` |
| `keep_camera` | `false` | beim Etagenwechsel bleiben Seite, Höhe und Abstand der Kamera |
| `right_back` | `false` | ein kurzer Rechtsklick geht einen Schritt zurück |
| `start_view` | die des Plans | eine eigene Startansicht dieser Karte |
| `lock_button` | `true` | der 🔒-Knopf, der die Kamera sperrt |
| `walk_button` | `true` | der 🚶-Knopf zum Gehen durchs Haus |
| `time_travel` | `true` | der ⏪-Knopf zum Abspielen des letzten Tages oder der letzten Woche |
| `fullscreen_button` | `false` | ein Knopf für Vollbild |
| `dashboard`, `dashboard_label` | | ein Knopf zu einem anderen Dashboard oder einer anderen Ansicht |
| `flows` | Schalter | Stromfluss-Linien immer an oder aus |
| `holograms` | Schalter | die Live-Karten (Energiebilanz, Auto, Medien) immer an oder aus |

## Warnungen und Durchsagen

| Option | Vorgabe | Bedeutung |
|---|---|---|
| `alerts` | `true` | Warnungen bei Rauch, Wasser, Alarm und Fenster im Regen als pulsierende Räume und Banner |
| `alert_jump` | `false` | in den Raum einer neuen Warnung springen |
| `announcements` | `true` | Durchsagen erscheinen und klingen auf dieser Karte |
| `screen_name` | Name des Panels | der Name dieses Bildschirms, für Durchsagen nur an einige Bildschirme |

## Kiosk

| Option | Bedeutung |
|---|---|
| `idle_return` | Sekunden ohne Berührung, bevor die Startansicht zurückkehrt (0 = nie) |
| `night` | nachts dimmen: `off`, `sun` oder ein Zeitraum wie `22:00-06:00` |
| `idle_orbit` | nach der Rückkehr die Ansicht langsam drehen, bis zur nächsten Berührung |

Mehr unter [Wandtablet](tablet.md).

## Weiter

[Dienste und Sensoren →](automations.md)
