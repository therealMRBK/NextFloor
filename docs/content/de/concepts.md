---
title: So funktioniert NextFloor
description: Die Ideen hinter NextFloor in fünf Minuten: Plan, Bereiche, Entitäten, die 3D-Ansicht und was wo gespeichert wird.
---

NextFloor hat nur wenige Grundideen. Wenn du sie kennst, lässt sich jede andere Seite dieser Dokumentation leicht einordnen.

## Der Plan ist die Mitte

Du zeichnest dein Zuhause einmal als **Plan**: Etagen, Räume, Wände, Türen, Fenster, Treppen, Dächer, Außenflächen und Möbel. Alles andere entsteht aus dem Plan. Die 3D-Ansicht, das Raum-Fenster, die Heatmaps, die Dashboard-Karte und der gedruckte Grundriss sind verschiedene Blicke auf dieselben Daten.

## Bereiche verbinden Räume mit Geräten

Ein **Raum** in NextFloor zeigt auf einen **Bereich** von Home Assistant. So weiß NextFloor, welche Geräte wohin gehören. Öffnest du das Formular eines Raums, listet der Abschnitt *Geräte* die Geräte dieses Bereichs, und du platzierst die, die du im Plan haben willst.

Geräte ohne Bereich oder aus einem anderen Bereich erreichst du über die Reiter *Andere Bereiche* und *Ohne Bereich*.

## Platzieren schaltet nie etwas

Eine Lampe platzieren, einen Rollladen verknüpfen oder eine Entität wählen sagt NextFloor nur, *wofür ein Bild steht*. NextFloor schaltet durch das Zuweisen nie etwas. Es liest den Live-Zustand der Entität, und nur ein Tippen in der 3D-Ansicht schickt einen Befehl.

## Möbel sind das Gesicht eines Geräts

Ein Möbelstück ist ein 3D-Modell. Manche Stücke sind **elektrisch** (eine Lampe, ein Fernseher, eine Waschmaschine) und lassen sich mit einer Entität verbinden; das Modell zeigt dann den Zustand: Die Lampe leuchtet, der Fernseher zeigt die laufende App, die Waschmaschine die Restminuten. Andere Stücke sind Deko.

## Ein Plan, mehrere Ansichten

| Ansicht | Wofür |
|---|---|
| **3D-Ansicht** | Das Haus als Modell. Tippen, Wischen und langes Drücken steuern die Dinge. |
| **Raum-Fenster** | Jedes Gerät eines Raums in einer Liste, mit Szenen und Schnellmenüs. |
| **Editor** | Hier zeichnest und verknüpfst du. Nur für Administratoren. |
| **Dashboard-Karte** | Die 3D-Ansicht als Karte, für jedes Dashboard und jedes Wandtablet. |
| **Plan auf Papier** | Jede Etage in 1:100 mit Maßen und einer Flächentabelle. |

## Was wo gespeichert wird

| Daten | Wo |
|---|---|
| Der Plan, seine Bilder, deine Möbel-Packs | Im Ordner `.storage` von Home Assistant, auf deiner Installation |
| Plugins und zusätzliche Modelle | Dein Home Assistant, Ordner `www` oder der Store |
| Kartenkacheln (nur wenn du die echte Karte einschaltest) | Dein Browser lädt sie direkt vom Kartenserver |
| Alles andere | Nirgends. Es gibt kein Konto, keine Cloud und keine Nutzungsdaten |

## Was NextFloor zu Home Assistant hinzufügt

- Ein Seitenleisten-Panel und die Karte `custom:nextfloor-card`.
- Sensoren für offene Fenster und Türen und für eingeschaltete Lichter. Siehe [Dienste und Sensoren](automations.md).
- Aktionen wie `nextfloor.announce`. Siehe [Durchsagen](announcements.md).

## Weiter

[Haus zeichnen →](draw.md)
