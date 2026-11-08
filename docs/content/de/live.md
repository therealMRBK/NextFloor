---
title: Live-Funktionen
description: Wetter, Sonne und Schatten, Stromfluss, Fernseher, Klang, das Auto, der Saugroboter und Alles aus. Eingebaut, kostenlos und aus den Geräten gemacht, die du schon hast.
---

Diese Funktionen sind eingebaut und kostenlos. Sie brauchen nur die Geräte, die du schon hast.

![Regen fällt auf das Haus](view-weather-rain.jpg)

## Wetter am Haus

Regen, Schnee, Hagel, Schneeregen, Nebel, Wolken mit Schatten, Blitze, Sonne und Mond, gesteuert von einer Wetter-Entity und dem Kompass. Nachts kommen bei klarem Himmel Sterne heraus. Bei Schnee liegt der Boden weiß, bei Regen wird er nass.

## Sonne und Schatten

Das Haus wirft seinen Schatten nach dem echten Sonnenstand (Einstellung *Sonnenlicht und Schatten*, auf *Tablet* aus).

Ist *☀ Tageszeit* in den Ansichtsoptionen (⚙) eingeschaltet, öffnet der Schalter **☀** unter der 3D-Ansicht einen Regler über die Stunden des Tages. Sonnenflecken, Schatten, Himmel und der Look *Auto* folgen der gewählten Uhrzeit; erneut tippen zeigt wieder das Jetzt.

*Sonnenbogen und Kompass* (Einstellungen) zeichnet den Weg der Sonne von heute als Bogen über das Grundstück.

## Stromfluss

Teilchen laufen von den Solarmodulen zu Wechselrichter, Haus, Akku und Netz, entlang der echten Kabelwege. Eine Glaskarte zeigt Bilanz und Autarkie. Mehr unter [Klima und Energie](climate-energy.md).

## Fernseher

Was läuft, in der Farbe der App, dazu ein Ambilight-Leuchten hinter dem Fernseher.

## Klang

Über jedem spielenden Lautsprecher oder Fernseher schwebt eine Karte mit Cover und Bedienung. Schallringe in der Farbe der App wachsen mit der Lautstärke. *Schallringe (%)* an einem Lautsprecher skaliert sie von 0 (aus) bis 100 (volle Größe). Multiroom-Gruppen verbindet ein Faden.

## Auto

Eine Karte über dem Stellplatz zeigt Ladering, Reichweite, Ladeleistung, Stecker, Innentemperatur und Knöpfe für Schloss, Klima und Laden.

- Unterwegs sagt sie, wie weit das Auto von zu Hause ist.
- Sie zeigt die Abfahrtszeit und warnt vor offenen Türen und Klappen.
- An einer Wallbox eingesteckt hängt es am Kabel.

## Saugroboter im Plan {#saugroboter-im-plan}

Ein `robot_vacuum` im Plan fuhr bisher Spuren, die die Ansicht selbst im gemeldeten Raum erfunden hat. Legt die Integration des Roboters ihre Karte auf eine Kamera (`vacuum_position`, `charger`, `path`, wie die Kartenkarte von NarwalIntegration), zeigt NextFloor die Wahrheit: Der Roboter steht, wo er sich meldet, blickt, wohin er blickt, und der Boden behält die Spur, die er wirklich gefahren ist. Die Station steht, wo der Roboter sie meldet.

Die Kamera findet sich selbst: Jede `camera`, deren Attribute `vacuum_position` tragen, genügt, es muss nichts ausgewählt werden. Was die Ansicht nicht wissen kann, ist, wie das Raster des Roboters auf dem Plan liegt, denn der Roboter zählt in eigenen Zellen und der Plan in Metern.

### Kalibrieren

1. Im Plan die **Station** des Roboters wählen.
2. Den Roboter mindestens 1,5 m wegfahren lassen.
3. *Von der jetzigen Position des Roboters kalibrieren* drücken und den Roboter im Plan antippen, wo er steht.

Die Station ist der Anker: Der Plan weiß, wo sie steht, die Kamera weiß, wo sie und der Roboter in ihrem Raster liegen. Ein Tipp genügt, und alles Weitere (Position, Blickrichtung, Spur, Station) folgt.

> [!NOTE]
> Zwei Orte können eine Spiegelung nicht von einer Drehung unterscheiden. Läuft die y-Achse der Karte entlang Plan −z, braucht es den Haken *gespiegelt*, sonst kommen die Räume verkehrt heraus. Die Kalibrierung liegt als `settings.vacuum_map` (`a`/`ga` und `b`/`gb`, dazu `mirror`). Ohne sie zeichnet die Ansicht weiter ihre erfundenen Spuren.

- Die Spur ist so fein, wie die Integration sie sendet. Eine Kartenkarte, die ihren `path` auf wenige hundert Punkte kürzt, ergibt eine grobe Spur, eine mit mehr Punkten eine feinere.
- Zehn Minuten nachdem der Roboter andockt, blendet die Spur aus, der Boden behält also nicht die Reinigung von gestern. Die Zeitreise (⏪) ist der Ort, an dem eine fertige Reinigung bleibt, und sie hält den ganzen Tag.
- Die Attributnamen stammen von der Vacuum-Map-Card, nicht von einer Marke: Die Xiaomi-Kartenextraktoren (Roborock, Viomi, Roidmi, Dreame, Ijai), die Roborock-Integration und NarwalIntegration liefern sie alle. Ein Gerät, das in Millimetern statt in Kartenzellen meldet, funktioniert genauso, den Maßstab geben die zwei Orte.
- Die Integration muss sie als Attribute bereitstellen. Manche tun das nur auf Ansage: Die Kartenextraktoren wollen `vacuum_position` und `path` in ihrer `attributes:`-Liste.

## Alles aus

*⏻ Alles aus* im Raum-Panel, oder *⏻* in der Leiste oben für die offene Etage, schaltet Lichter, Schalter, Ventilatoren und Medien aus. *↶ Rückgängig* holt zehn Sekunden lang alles zurück.

## Weiter

[Klima und Energie →](climate-energy.md)
