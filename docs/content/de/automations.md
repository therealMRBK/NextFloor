---
title: Dienste und Sensoren
description: Die Sensoren und Aktionen, die NextFloor zu Home Assistant hinzufügt, mit Beispielen für Benachrichtigungen und Durchsagen.
---

NextFloor fügt Home Assistant eine kleine, stabile Oberfläche hinzu: zwei Arten von Sensoren und zwei Aktionen.

## Sensoren

Am Gerät *NextFloor* findest du:

| Sensor | Zählt |
|---|---|
| *Offene Fenster und Türen* | die offenen Kontakte, Garagentore und Geräte-Pins des Plans |
| *Lichter an* | die eingeschalteten Lampen des Plans |

Es gibt je einen **fürs Haus** und einen **für jede Etage**. Das Attribut `entities` nennt, was offen oder an ist.

Beispiel: eine Benachrichtigung, wenn die Alarmanlage scharf wird, während etwas offen ist:

```yaml
action: notify.mobile_app_handy
data:
  message: >
    Noch offen: {{ state_attr('sensor.nextfloor_offene_fenster_und_turen', 'entities') | join(', ') }}
```

> [!TIP]
> Die genauen Entity-IDs findest du unter *Einstellungen → Geräte & Dienste → NextFloor*. Sie folgen den Namen deiner Etagen.

## Aktionen

### `nextfloor.announce`

Spricht eine Nachricht in den richtigen Räumen und auf den offenen NextFloor-Bildschirmen. Alle Felder stehen unter [Durchsagen](announcements.md#in-automationen).

```yaml
action: nextfloor.announce
data:
  message: "Es hat geklingelt!"
  rooms: [Flur]
```

### `nextfloor.reload_screens`

Lässt offene NextFloor-Seiten einige Sekunden versetzt neu laden, zum Beispiel nach einem Update. Mit `template` laden nur die Karten neu, die diese [Kartenvorlage](cards.md#kartenvorlagen) nutzen.

```yaml
action: nextfloor.reload_screens
data:
  template: kueche_tablet
```

## Alles aus

*⏻ Alles aus* ist ein Knopf im Raum-Fenster und in der Etagenleiste, keine Aktion. Er schaltet Lichter, Schalter, Ventilatoren und Medien aus, und *↶ Rückgängig* holt sie zehn Sekunden lang zurück.

## Weiter

[Ein Plugin schreiben →](plugins.md)
