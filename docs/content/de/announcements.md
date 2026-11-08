---
title: Durchsagen
description: „Essen ist fertig!“ in dem Raum, der es hören soll: über seinen Lautsprecher und auf jedem offenen NextFloor-Bildschirm.
---

*„Essen ist fertig!“* – und genau der Raum, der es hören soll, hört es.

## Aus einem Raum

Hat ein Raum einen Lautsprecher, gibt es in seinem Fenster den Abschnitt **📢 Durchsage**. Einen Satz antippen oder einen eigenen tippen, und der Lautsprecher des Raums sagt ihn. Eigene Sätze stehen unter *Editor → Einstellungen*, einer pro Zeile.

## Welcher Lautsprecher benutzt wird

NextFloor wählt in dieser Reihenfolge:

1. den im Formular des Raums gewählten Lautsprecher
2. einen im Raum platzierten Lautsprecher
3. einen Sprachassistenten (Voice PE und andere Satelliten), ein Echo oder einen Lautsprecher des Bereichs des Raums

Ein Fernseher oder ein ausgeschalteter Lautsprecher wird nie von selbst gewählt.

| Lautsprecher | So sagt er es durch |
|---|---|
| Sprachassistenten | mit ihrem Gong |
| Echo | als echte Durchsage (Alexa Devices oder Alexa Media Player) |
| Sonos und andere, die das können | senken ihre Musik und spielen danach weiter |
| Jeder andere Lautsprecher | über Text-zu-Sprache von Home Assistant |

## Ruhezeit je Raum

Im Formular des Raums, zum Beispiel 20:00–07:00 fürs Kinderzimmer. Durchsagen an mehrere Räume lassen den Raum dann aus; eine Durchsage nur für ihn kommt trotzdem an.

## Auf den Bildschirmen

Jede offene NextFloor-Seite (Panel oder Karte) zeigt die Nachricht groß über dem Haus, spielt einen sanften Gong und spricht sie. **Ein altes Wandtablet wird zum Durchsage-Lautsprecher.**

- Unter ⚙ → 📢 bekommt ein Bildschirm einen Namen (zum Beispiel *Flur*), damit Durchsagen auch nur an ihn gehen können, oder bleibt ohne Haken still.
- Browser spielen Ton erst nach dem ersten Antippen der Seite. In Fully Kiosk *Autoplay Audio* einschalten (Web Content Settings).

## In Automationen

Die Aktion **NextFloor: Durchsage**:

```yaml
action: nextfloor.announce
data:
  message: "Es hat geklingelt!"
  rooms: [Küche, Wohnzimmer]   # nach Name, Raum-ID oder Bereichs-ID; weglassen = jeder Raum mit Lautsprecher
  on_screens: true             # die offenen NextFloor-Bildschirme zeigen und sprechen es auch
  screens: [Flur]              # optional: nur diese Bildschirme
```

| Feld | Bedeutung |
|---|---|
| `message` | der Text (Pflicht) |
| `rooms` | Raumnamen, Raum-IDs oder Bereichs-IDs; weglassen = jeder Raum mit Lautsprecher |
| `floor` | beschränkt es auf eine Etage |
| `on_speakers` | `false` lässt die Lautsprecher still |
| `on_screens` | `false` lässt die Bildschirme still |
| `screens` | nur diese benannten Bildschirme |
| `tts_entity` | wählt die Stimme |

Die Aktion meldet zurück, welcher Lautsprecher es gesagt hat und welche Räume (und warum) ausgelassen wurden.

## Weiter

[Wandtablet →](tablet.md)
