---
title: NextFloor installieren
description: NextFloor über HACS oder von Hand installieren, die Integration hinzufügen und sicher aktualisieren.
---

NextFloor braucht **Home Assistant 2025.1 oder neuer**. Es wird wie jede eigene Integration installiert und legt einen Eintrag *NextFloor* in der Seitenleiste an.

## Mit HACS (empfohlen)

NextFloor ist im **offiziellen HACS-Store**, du musst also kein eigenes Repository hinzufügen.

1. **HACS** öffnen, nach *NextFloor* suchen und **Herunterladen** drücken.
2. **Home Assistant neu starten.**
3. Unter **Einstellungen → Geräte & Dienste → Integration hinzufügen** *NextFloor* wählen.
4. In der Seitenleiste erscheint *NextFloor*. Öffnen, fertig.

[![In HACS öffnen](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=therealMRBK&repository=NextFloor&category=integration)

> [!NOTE]
> NextFloor früher als eigenes Repository installiert? Du musst nichts ändern. HACS führt es von selbst als normales Repository weiter, und Updates kommen weiter an.

## Von Hand

1. `nextfloor.zip` aus dem [neuesten Release](https://github.com/therealMRBK/NextFloor/releases/latest) laden.
2. Den Ordner `custom_components/nextfloor` in den Konfigurationsordner von Home Assistant kopieren.
3. Home Assistant neu starten und die Integration wie in Schritt 3 oben hinzufügen.

## Aktualisieren

1. Über HACS aktualisieren.
2. Home Assistant neu starten.
3. **Den Browser-Tab neu laden.** In der Companion-App: *Einstellungen → Companion-App → Frontend-Cache zurücksetzen* und die App ganz schließen.

> [!WARNING]
> Sieht ein Panel nach einem Update alt aus, liegt es am Browser-Cache, nicht an Home Assistant. Ein Neustart von Home Assistant hilft dafür nicht, das Neuladen des Tabs schon.

## Wo deine Daten liegen

Plan, Bilder und Möbel-Packs liegen im Ordner `.storage` von Home Assistant. Nichts davon verlässt deine Installation: kein Konto, keine Cloud, keine Nutzungsdaten. Wie du eine Kopie sicherst, steht unter [Sicherung und Import](plan-tools.md#sicherung-und-import).

## Wer was darf

Alle mit Zugriff auf Home Assistant können NextFloor öffnen und die 3D-Ansicht benutzen. Nur **Administratoren** sehen den Reiter **Editor** und können Änderungen am Plan speichern.

## Weiter

[Schnellstart →](quickstart.md): den ersten Raum zeichnen und eine Lampe in 3D schalten.
