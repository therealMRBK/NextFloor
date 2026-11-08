---
title: FAQ und Fehlersuche
description: Antworten auf die häufigsten Fragen und Lösungen für die Probleme, auf die Leute stoßen.
---

## Fragen

### Ist NextFloor wirklich kostenlos?

Ja, für immer. Jede Funktion, jedes Möbel-Pack und jedes Update ist kostenlos. Es gibt keine Pro-Version, keine bezahlten Erweiterungen, keinen Unterstützer-Pass und keinen Lizenzschlüssel, und die MIT-Lizenz sorgt dafür, dass es dir niemand wegnehmen kann.

### Braucht es eine Cloud oder ein Konto?

Nein. Plan, Bilder und Packs liegen auf deinem Home Assistant. Das Einzige, was deine Installation verlassen kann, sind die Kartenkacheln, und nur wenn du die echte Karte einschaltest.

### Gibt es NextFloor bei den offiziellen Home-Assistant-Integrationen, ohne HACS?

Nein. NextFloor ist im **offiziellen HACS-Store**. Die eingebaute Integrationsliste von Home Assistant ist ein eigener Prozess mit eigenen Regeln (eine veröffentlichte Geräte-Bibliothek, ein mitgeliefertes Frontend, das zu den Regeln von Core passt, ein monatlicher Release-Rhythmus), und der passt nicht zu einem Plan-Editor mit eigenem Frontend und schnellen Korrekturen.

### Welche Home-Assistant-Version brauche ich?

2025.1 oder neuer.

### Kann ich beim Zeichnen aus Versehen etwas schalten?

Nein. Im Editor schaltet das Platzieren oder Verknüpfen eines Geräts nie etwas. In der 3D-Ansicht schaltet ein Tippen; *Vor dem Schalten fragen* an einer Lampe schützt vor versehentlichem Antippen, und der 🔒-Knopf sperrt die Kamera.

### Können mehrere Personen es benutzen?

Alle mit Zugriff auf Home Assistant können die 3D-Ansicht und die Karte benutzen. Nur Administratoren sehen den Editor und speichern Änderungen.

### Kann ich mehrere Grundrisse in einer Installation haben?

Noch nicht. Ein Plan pro Installation ist, wie NextFloor heute arbeitet; die Idee wird in den [Discussions](https://github.com/therealMRBK/NextFloor/discussions) besprochen.

### Mir fehlt das Möbel, das ich brauche.

Baue es in der [Möbel-Werkstatt](furnish.md#die-moebel-werkstatt) oder im [Browser-Baukasten](https://therealmrbk.github.io/NextFloor/builder/), oder schau unter **Erweiterungen → Community-Möbel**.

## Fehlersuche

### Ein Gerät fehlt im Raum

Der Raum braucht einen **Bereich**, und das Gerät muss dazugehören (Gerät oder Entity). Sonst die Reiter *Andere Bereiche* oder *Ohne Bereich* nutzen.

### Das Panel sieht nach einem Update alt aus

Den Browser-Tab neu laden. In der Companion-App den Frontend-Cache zurücksetzen und die App ganz schließen. **Ein Neustart von Home Assistant hilft hierfür nicht.**

### Möbel erscheinen als graue Kästen

Ihr Pack ist nicht installiert. Unter *Erweiterungen → Möbel-Packs* wieder einspielen, dann ist alles zurück.

### Das Auto erscheint nicht

*Sensor „Auto da“* prüfen. Ohne Sensor wird das Fahrzeug immer gezeigt.

### Das Solarfeld landet auf der falschen Dachseite

Den [Kompass](outside.md#kompass-und-karte) in den Einstellungen prüfen. Sind Nord und Süd vertauscht, hilft *Nord ↔ Süd tauschen*.

### Auf dem Tablet ist es langsam

Die Qualität auf *Tablet* stellen und Wetter und Stromfluss ausschalten. Siehe [Wandtablet](tablet.md).

### Speichern schlägt fehl

Nur Administratoren können speichern. Die Meldung nennt das Feld, das Home Assistant ablehnt, und deine Änderungen bleiben im Browser, bis du speichern kannst. Nach einem Update braucht Home Assistant eventuell einen Neustart, bevor das Speichern wieder klappt.

### Durchsagen machen auf dem Tablet keinen Ton

Browser spielen Ton erst nach dem ersten Antippen der Seite. In Fully Kiosk *Autoplay Audio* einschalten.

## Immer noch festgefahren?

- Ideen und Fragen: [Discussions](https://github.com/therealMRBK/NextFloor/discussions)
- Fehler: [Issues](https://github.com/therealMRBK/NextFloor/issues/new/choose), mit Version, was du getan hast und was du gesehen hast
- Sicherheit: [private Meldung](https://github.com/therealMRBK/NextFloor/security/advisories/new), nie ein öffentliches Issue
