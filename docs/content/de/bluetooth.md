---
title: Bluetooth-Ortung
description: Herausfinden, in welchem Raum ein Bluetooth-Tag, eine Uhr oder ein Handy ist, durch Abgehen der Räume gelernt, mit den Bluetooth-Scannern, die Home Assistant schon hat.
---

NextFloor kann sagen, **in welchem Raum ein Bluetooth-Tag ist**: ein Schlüsselanhänger, eine Uhr, ein Handy. Du gehst einmal mit dem Tag durch die Räume und nimmst jeden Raum auf. Danach zeigt ein Sensor in Home Assistant den Raumnamen, und mit der *Anwesenheit* steht der Avatar der Person in diesem Raum.

> [!WARNING]
> **Diese Funktion ist neu und experimentell.** Sie ist mit simulierten Signalen gebaut und getestet, noch nicht mit einem langen Lauf in einem echten Haus. Funksignale prallen an Wänden und Menschen ab, rechne also ab und zu mit einem falschen Raum, vor allem an einer Wand zwischen zwei Räumen. Sag uns in den [Discussions](https://github.com/therealMRBK/NextFloor/discussions), wie es bei dir klappt.

## Was du brauchst

Das Verfahren braucht **mindestens zwei Bluetooth-Scanner, drei oder mehr sind viel besser**, in verschiedenen Räumen. Ein Scanner ist alles, womit Home Assistant Bluetooth mithört:

- ein **ESPHome-Bluetooth-Proxy** (ein ESP32-Board, ein paar Euro),
- ein **Shelly-Gerät** (Gen2 und neuer) mit eingeschaltetem Bluetooth-Scan: In Home Assistant den Shelly-Eintrag öffnen, *Konfigurieren* drücken und den Bluetooth-Scanner-Modus auf *passiv*, *aktiv* oder *automatisch* stellen. Shellys in den Wänden sind gute Scanner, weil sie in vielen Räumen sitzen,
- der **Bluetooth-Adapter des Servers** selbst.

Mit nur einem Scanner erkennt NextFloor nah und fern, aber nicht den einen Raum vom nächsten.

Der Tag kann sein:

- ein **Bluetooth-Tag mit fester Adresse** (Schlüsselanhänger, viele Fitnessarmbänder, ein ESP32-Beacon),
- ein **Handy oder eine Uhr** über die Integration [Private BLE Device](https://www.home-assistant.io/integrations/private_ble_device/) von Home Assistant. Handys und Uhren wechseln ihre Bluetooth-Adresse ständig; Private BLE Device folgt ihnen mit ihrem *Identity Resolving Key*. NextFloor fragt dann diese Integration nach der aktuellen Adresse. Den Schlüssel von einem iPhone zu bekommen ist etwas Arbeit, die Seite der Integration erklärt es.

## Einrichten

1. Im Editor **Einstellungen → Bluetooth-Ortung** öffnen.
2. Unter *Tag oder Gerät hinzufügen* deinen Tag wählen. Handys und Uhren aus Private BLE Device stehen zuerst. Ein Tag erscheint erst in der Liste, wenn ein Scanner ihn gehört hat: Halte ihn nah an einen Scanner und drücke *Liste neu laden*.
3. **Hinzufügen** drücken, dann beim neuen Tag **Räume lernen**. Die Balken zeigen, wie stark jeder Scanner den Tag gerade hört.
4. Einen Raum wählen, **Aufnehmen** drücken und 30 Sekunden lang langsam durch den ganzen Raum gehen, den Tag in der Hand, auch in die Ecken.
5. Für jeden Raum wiederholen, in dem du den Tag orten willst. **Jetzt** zeigt den Raum, den NextFloor in diesem Moment antworten würde, eine gute Kontrolle nach jedem Raum.

Einen Raum erneut aufzunehmen ersetzt ihn. Jeder Raum wird als bis zu drei Aufnahmen aus verschiedenen Abschnitten deines Wegs gespeichert.

## Der Sensor

Jeder Tag bekommt einen Sensor am Gerät *NextFloor*. Sein **Zustand ist der Raumname**, oder `unknown`, wenn kein Raum gut passt oder zwei Minuten lang kein Scanner den Tag gehört hat. Die Attribute tragen die Raum-ID, die Etage, wie gut der Raum passte (`distance_db`) und was jeder Scanner hört.

```yaml
automation:
  - alias: "Licht folgt mir"
    triggers:
      - trigger: state
        entity_id: sensor.nextfloor_schluessel
        to: "Küche"
    actions:
      - action: light.turn_on
        target:
          area_id: kueche
```

Der Raum wechselt erst nach drei Messungen in Folge (etwa sechs Sekunden), damit die Antwort nicht flackert. Um die Person in 3D zu zeigen, wählst du den Sensor unter **Anwesenheit** als Raum-Sensor dieser Person: Sein Zustand ist ein Raumname, wie die Anwesenheit ihn erwartet.

## Wie es funktioniert, und was es nicht tut

NextFloor liest die Signalstärke (RSSI), die jeder Scanner für den Tag meldet, im Abstand weniger Sekunden und bildet den Median der letzten fünf Messungen. Dieses Muster vergleicht es mit den Aufnahmen jedes Raums und wählt den nächsten. Ein Raum wird nur geantwortet, wenn er nah genug ist, sonst ist die Antwort `unknown`.

- Nichts verlässt Home Assistant. Die Aufnahmen liegen im Plan, aber **nicht** in geteilten Plänen und Vorlagen.
- Die Scanner müssen an ihrem Platz bleiben. Verschiebst du einen Proxy, nimm die Räume neu auf.
- Ein Körper schwächt das Signal. Nimm mit dem Tag auf, wo du ihn sonst trägst (Tasche oder Hand).
- Verschiedene Tags hören sich verschieden an, jeder Tag braucht also eigene Aufnahmen.
