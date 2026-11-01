# NextFloor-Anleitung

Diese Anleitung folgt dem Weg, den du wirklich gehst: installieren, zeichnen, einrichten, verbinden, benutzen. Ein Video, das die ganze Einrichtung von der leeren Seite an zeigt, ist in der [README](../README.md) verlinkt. Englische Fassung: [manual.md](manual.md).

NextFloor ist quelloffen und kostenlos, jeder Teil davon, und das bleibt so. Aus dieser Überzeugung ist das Projekt entstanden: Ein lebendiges 3D-Zuhause in Home Assistant soll allen gehören.

**Springe zu:** [Installation](#installation) · [Haus zeichnen](#haus-zeichnen) · [Einrichten](#einrichten) · [Geräte verbinden](#geräte-verbinden) · [Außen, Dach, Energie](#außen-dach-und-energie) · [Kompass und Karte](#kompass-und-karte) · [3D-Ansicht](#die-3d-ansicht-benutzen) · [Live-Funktionen](#live-funktionen) · [Dashboard-Karte](#dashboard-karte) · [Wandtablet](#wandtablet) · [Eigene Modelle und Packs](#eigene-modelle-und-packs) · [Sicherung](#sicherung) · [Probleme](#probleme-und-lösungen)

---

## Installation

Voraussetzung: Home Assistant 2025.1 oder neuer.

- **HACS:** `therealMRBK/NextFloor` als eigenes Repository (Kategorie Integration) hinzufügen, installieren, Home Assistant neu starten, die Integration unter Einstellungen → Geräte & Dienste hinzufügen. In der Seitenleiste erscheint *NextFloor*.
- **Von Hand:** `custom_components/nextfloor` in den Konfigurationsordner kopieren, neu starten, Integration hinzufügen.
- **Updates:** über HACS, dann Home Assistant neu starten und den Browser-Tab neu laden (Companion-App: Einstellungen → Companion-App → Frontend-Cache zurücksetzen).

Plan, Bilder und Packs liegen in Home Assistants `.storage`. Nichts davon verlässt deine Installation.

## Haus zeichnen

Öffne den Reiter **Editor** (nur Administratoren). Die Werkzeugleiste enthält die Werkzeuge, die Seitenleiste zeigt immer die Auswahl, und der Hinweis unten sagt, was das aktive Werkzeug tut. **Rückgängig** (Strg+Z) nimmt fast alles zurück.

1. **Etage anlegen.** *Etage hinzufügen* bietet die Etagen aus Home Assistant an (Plan und Home Assistant bleiben verbunden) oder *Leere Etage*. Das Etagen-Formular setzt Name, Höhe über dem Boden, Raumhöhe und die Etage in Home Assistant. *Verschieben* und *90° drehen* wirken auf die ganze Etage, *Alle Etagen mitnehmen* aufs ganze Haus. *Räume aus HA-Bereichen anlegen* setzt zum Start einen Raum je Bereich.
2. **Räume zeichnen.** *Rechteck*: ziehen. *Freie Form*: Ecken setzen, mit Tippen auf die erste Ecke oder Enter schließen, Esc bricht ab. Ecken rasten am Raster und an vorhandenen Wänden ein; Alt schaltet das Einrasten für einen Zug aus.
3. **Raum beschreiben.** Name, *Bereich* (die Verbindung zu den Geräten in Home Assistant) und *Boden*-Material. Position und Größe lassen sich eintippen. An den Eckgriffen formst du um, das **+** auf einer Kante fügt eine Ecke ein.
4. **Wände.** Sie entstehen aus den Raumkanten. Jede Kante hat Höhe, Dicke, eine Schere zum Teilen und *Keine Wand* für offene Kanten. Eine niedrigere Höhe macht eine Brüstung oder Theke. Freistehende Trennwände zeichnest du mit dem Werkzeug *Wand* (Umschalt hält gerade). *Lücken schließen* im Etagen-Formular verbindet haarfeine Spalten.
5. **Türen und Fenster.** *Tür & Fenster*, Wand antippen, Art wählen (Tür, Haustür, Doppeltür, Fenster, Doppelfenster, Terrassentür, Balkontür, Garagentor, Glaswand). Breite, Mitte von der Ecke, Brüstung und Höhe einstellen; Anschlag oder Öffnungsrichtung wechseln. Der Stil *Automatisch* nimmt außen eine Haustür, innen eine Zimmertür.
6. **Treppen und Öffnungen.** Treppen kommen aus dem Pack *Treppen & Geländer* und schneiden ihre Öffnung selbst in die Etage darüber. *Bodenöffnung* schneidet jedes andere Loch (Galerie, Schacht).
7. **Vorlage.** *Vorlage (Grundriss-Bild)* legt ein Bild hinter den Plan; verschieben, skalieren, drehen, geraderichten, Maßstab an einer bekannten Länge einstellen, dann nachzeichnen.
8. **Sperre.** Das Schloss *Grundriss* verhindert, dass Räume, Wände, Öffnungen und Außenflächen aus Versehen wandern; einzelne Stücke sperrt *Fixieren*.

**3D daneben** zeigt das 3D-Modell neben dem Plan. *Ansicht als Start der Etage / des Raums* merkt sich die aktuelle 3D-Kamera.

## Einrichten

Werkzeug *Möbel*, Raum antippen, rechts aus der Bibliothek wählen. Neue Stücke landen in der Raummitte.

- Die Bibliothek hat Bereiche (Leuchten, Wohnen, Essen, Küche, Schlafen, Bad, Arbeiten, Parken) und danach die Möbel-Packs. Die Suche findet deutsche und englische Namen, Packnamen und mehrere Wörter in beliebiger Reihenfolge.
- Ziehen verschiebt, Eckgriffe ändern die Größe, am Drehgriff drehst du, oder du tippst Position, Größe und Drehung ein. *Spiegeln* vertauscht links und rechts, *Duplizieren* kopiert, *Fixieren* sperrt.
- Elektrische Stücke lassen sich mit Geräten verbinden (siehe unten). Leuchten sind Möbel mit einem Licht dahinter; der Leuchten-Bereich hat zwölf Arten.
- **Spots setzen:** am Raum legt ein Raster aus Leuchten (Spalten × Reihen) an, die alle einem Licht folgen, mit einem Schritt rückgängig zu machen.
- **Bibliothek:** Möbel stehen nach Art sortiert (Sitzen, Betten, Küche …) mit Bild und Maß; ein Modell in mehreren Größen ist eine Karte mit Größen-Knöpfen. Ist ein Raum gewählt, steht oben, was in ihn passt (*Passend zu …*), *Alle Räume zeigen* hebt das auf. Filter für ⚡ verknüpfbar, 💡 leuchtet und 🌳 draußen, ★ Favoriten und Zuletzt benutzt stehen oben.
- **Größe ändern:** Beine, Armlehnen, Platten und Griffe behalten ihre echte Größe, nur die Mitte wächst.
- **Wandansicht (▣):** In der Wandliste eines Raums zeigt *Wandansicht* die Wand von vorn mit Türen, Fenstern und den Möbeln davor; ziehen oder Abstand und Höhe eintippen.
- **Lichtschalter und Steckdosen** (Pack Smart Home & Technik, 1- bis 4-fach): jede Taste mit eigener Entität; sie leuchtet, solange das Geschaltete an ist.
- **Markisen, Vorhänge, Rollos, Leinwand, Schiebetor:** *Bewegt sich mit* wählt die Cover-Entität, der sie folgen.

## Geräte verbinden

Im Raum-Formular listet der Abschnitt **Geräte** die Home-Assistant-Geräte dieses Bereichs. Reiter: *Dieser Bereich*, *Andere Bereiche*, *Ohne Bereich*; Suche nach Namen. Jede Zeile: Auge (im 3D-Raum-Fenster ausblenden), *Aa* (eigener Name), Stern (ins Raum-Fenster aufnehmen ohne zu platzieren), *Platzieren*.

- Eine platzierte Leuchte wird zur Lampe. *Licht oder Schalter* nennt das Licht; *Farbe und Helligkeit von* ist für per Relais geschaltete Lampen; *Leuchtstärke in 3D* skaliert das Leuchten; *Vor dem Schalten fragen* schützt vor versehentlichem Antippen; *Symbol in 3D* bestimmt den Pin darüber.
- Elektrische Möbel (Fernseher, Kühlschrank, Waschmaschine …) finden ihre Entity im selben Bereich selbst („Automatisch“). Fernseher zeigen Farbe und Titel der laufenden App; *Leuchten hinter dem TV* stellt das Ambilight ein oder aus. Ein Leistungssensor zeigt die Watt.
- Entity-Felder sind durchsuchbar: einen Teil des Namens tippen und wählen. Durch das Zuweisen schaltet NextFloor nie etwas.
- **Stellplatz** (Bibliothek *Parken*): *Fahrzeug* wählt das Modell, *Sensor „Auto da“* bestimmt, wann es erscheint, und über eine beliebige Entity des Autos findet NextFloor Ladestand, Reichweite, Stecker, Schloss und Klima am Gerät des Autos.
- **Favoriten und eigene Knöpfe** (Einstellungen, *Favoriten*): Szenen, Skripte, Automationen, Schalter und Buttons fürs Zentralmenü; eigene Knöpfe öffnen einen Dashboard-Pfad, Entity-Details, einen Dienstaufruf oder ein browser_mod-Popup. *Sender oder Playlist* legt Lautsprecher-Voreinstellungen an.

### Lichtprogramme in 3D zuordnen

Im bestehenden Leuchteneditor öffnest du **Effektanimationen in 3D**. Wähle für jeden
exakten HA-Effektnamen eine Darstellung: **Statisch**, **Regenbogen**, **Pulsieren**
oder **Flackern**. Die Liste enthält die von HA gemeldeten Programme und bereits
gespeicherte Zuordnungen. Fehlende Namen kannst du exakt hinzufügen (Groß-/Kleinschreibung
und Leerzeichen zählen). „Nicht zugeordnet“ entfernt eine Zuordnung. Der Schalter
**Animationen für diese Leuchte erlauben** schaltet alle Animationen dieser Platzierung
aus, ohne die Zuordnungen zu löschen. Auch zwei Leuchten mit derselben Entity dürfen
unterschiedliche Zuordnungen haben.

**Nach dem Update bleiben bestehende Pläne ohne Zuordnung statisch.** Ein HA-Effekt
ist nur ein Programmname und bedeutet nicht automatisch einen Regenbogen. Unbekannte
Effekte oder Animationskennungen zeigen weiter die HA-Farbe und -Helligkeit. Bei einem
Effektwechsel wird die Zuordnung neu ausgewertet. Ausgeschaltete, unbekannte oder nicht
verfügbare Leuchten erzeugen keine Animation und kein Licht.

In einer exportierten Plandatei stehen die Einstellungen direkt an der Leuchte
(Möbel oder Geräteplatzierung), zum Beispiel:

```json
{
  "animations_enabled": true,
  "effect_animations": {
    "Regenbogen": "rainbow",
    "Kerzenlicht": "flicker",
    "Atmen": "pulse",
    "Weiß": "none"
  }
}
```

Pulsieren und Flackern verändern nur die Intensität bis höchstens zur bisherigen
HA-Helligkeit; die Grundfarbe bleibt erhalten. Nur Regenbogen ersetzt die Farbe.
Farb-/Weißmodi und die bestehende Einstellung der Leuchtstärke bleiben erhalten.
Die Zuordnungen werden mit dem Plan gespeichert und privat exportiert/importiert;
sie lösen keine HA-Schreibaufrufe aus. Die Darstellung nutzt den gemeinsamen sparsamen
Animationstakt und pausiert bei verborgener Ansicht oder ohne sichtbare animierte Etage.

Neue HA-Programmnamen lassen sich im Editor ohne Codeänderung zuordnen. Neue
Animationsfunktionen werden ausschließlich in der festen Registry in
`frontend/src/light-effects.ts` ergänzt; Plugins, Skripte oder ausführbarer Code aus
dem Plan werden nicht geladen.

## Außen, Dach und Energie

- **Außen:** Rasen, Terrasse, Weg, Einfahrt, Pool, Beet, Wildfläche, Hecke, Zaun oder Pergola aufziehen. *Höhenversatz* senkt oder hebt, *Gefälle* neigt, *Umriss zeigen* schaltet die leuchtende Kante, *Aus den Flächen darunter ausschneiden* macht ein Loch (Teich). Hecken und Zäune haben eine Höhe. Garten- und Wegeleuchten kommen aus der Bibliothek und beleuchten die Flächen.
- **Dach:** Das Werkzeug *Dach* baut Dachflächen aus den Räumen (Form, Firstrichtung, Traufe, Neigung; ziehen verschiebt, Ecken ändern die Größe). Die einfache Dachform steht in den Einstellungen. Dachfenster sitzen auf einer Fläche und bekommen Rollladen und Kontakte. Sattel-, Walm- und Krüppelwalmflächen können an jedem Firstende anders enden, und ein Flügel, der an ein größeres Dach stößt, läuft mit Kehlen in dessen Fläche.
- **Türen und Fenster (mehr):** Eine Tür bekommt ein Smart Lock (Tür antippen schließt ab oder auf, aufgeschlossen leuchtet sie); ein Fenster wählt seine Fensterbank, kann aus der Regenwarnung genommen werden und bekommt unter Gelände einen Lichtschacht.
- **Energie:** Die Checkliste verlangt ein Solarfeld, einen Zähler und einen Wechselrichter (Batterie und Netzanschluss optional). Ein Solarfeld kommt auf die am besten passende Südfläche (der Kompass entscheidet), in den Garten oder an eine Wand; Reihen, Spalten und Hoch-/Querformat einstellbar. Zähler, Wechselrichter, Batterie und Wallbox sind Geräte, die hier gesetzt werden; die Felder der Energiebilanz stehen auf „Automatisch“, und *Aus dem Energie-Dashboard übernehmen* liest deine bestehende Einrichtung.

## Kompass und Karte

In den **Einstellungen**:

- **Kompass.** Eine Scheibe zeigt, wohin Norden liegt (Grad im Uhrzeigersinn von oben). Sonnenlicht, Wind und die Himmelsrichtung der Dachflächen richten sich danach. Sind Nord und Süd vertauscht, drückst du **Nord ↔ Süd tauschen**; Zeichnung, Dachflächen und Solarfelder bleiben, nur die Richtungen ändern sich. Viertel-Drehungen und jeder Winkel gehen auch.
- **Echte Karte.** Standardmäßig aus. Eingeschaltet liegt eine gedimmte Karte (OpenStreetMap oder deine eigene Kachel-Adresse `https://…/{z}/{x}/{y}`) unter dem Plan im Editor und unter dem Haus in 3D. Sie startet am Standort von Home Assistant; Sichtbarkeit und Detail einstellen, mit den Pfeilen verschieben, bis das Haus auf seinem Grundstück sitzt. Dein Browser lädt die Kacheln direkt vom Kartenserver, und nur solange die Karte an ist.
- Ebenfalls hier: Wanddicken, Raster, Maße in Metern oder Fuß und Zoll, Dachform, Wetter-Entity und Effekte, Regenwarnung (auf Wunsch vom eigenen Regensensor), ein Sensor für Stromausfall, Sonnenflecken und ein eigener Hintergrund (Farbe oder Bild) hinter dem Haus.

## Die 3D-Ansicht benutzen

- **Bewegen:** Ziehen dreht, das Mausrad zoomt, rechte Taste oder zwei Finger verschieben. Etagen- und Raumknöpfe oben fliegen die Kamera hin; *Zurück* oder Esc geht eine Ebene hoch.
- **Aussehen:** Qualität *Auto / Tablet / Hoch*; Themen *Neon / Blueprint / Tag* mit Akzentfarbe; Symbole *Keine / Wichtige / Alle*.
- **Schalter unten:** *Wände hoch / Schnitt / Schräg*, *Massiv*, *Auseinander / Gestapelt*, *Dach bleibt*, Heatmap (*Temp., Feuchte, CO₂, Werte*), *Raumnamen*, *Wetter*, *Stromfluss*, *Karten*.
- **Wände:** *Schräg* schneidet die Wände schräg ab, vorne halbhoch und hinten voll hoch, wie ein Puppenhaus; die Schräge dreht mit der Kamera. *Massiv* zeigt blickdichte Wände in ihren Farben statt Glas; im geöffneten Raum werden die Wände vor der Kamera abgesenkt. Die Farben stellst du im Editor ein: *Einstellungen → Wandfarbe außen / innen*, und pro Raum *Wandfarbe innen (dieser Raum)*. *Massiv* und *Schräg* lassen sich kombinieren.
- **Raum-Fenster:** Lichter (schalten, Helligkeit, Farbtemperatur, Farbpunkte, *Alle aus*), Rollläden, Medien, Sensoren, Szenen. Antippen eines Lampen-Pins schaltet sie, langer Druck öffnet das Schnellmenü, ein Rollladen öffnet sein Menü.
- **Zentralmenü (Stern):** alle Lichter und Rollläden der Etage oder des Hauses plus deine Favoriten. **Suche (Lupe):** Gerät oder Raum tippen, die Kamera fliegt hin.
- **Warnungen:** Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen erscheinen als Banner; Antippen springt in den Raum.

## Live-Funktionen

Eingebaut und kostenlos; sie brauchen nur die Geräte, die du schon hast.

- **Wetter am Haus:** Regen, Schnee, Hagel, Schneeregen, Nebel, Wolken mit Schatten, Blitze, Sonne und Mond, gesteuert von einer Wetter-Entity und dem Kompass.
- **Stromfluss:** Teilchen von den Solarmodulen zu Wechselrichter, Haus, Akku und Netz; eine Glaskarte mit Bilanz und Autarkie.
- **Fernseher:** was läuft, in der Farbe der App, dazu Ambilight.
- **Klang:** eine Karte über jedem spielenden Lautsprecher oder Fernseher mit Cover und Bedienung; Schallringe in der Farbe der App; Multiroom-Gruppen verbindet ein Faden.
- **Auto:** eine Karte über dem Stellplatz mit Ladering, Reichweite, Ladeleistung, Stecker, Innentemperatur und Knöpfen für Schloss, Klima und Laden.

## Im Haus unterwegs

- **Durchs Haus gehen (🚶):** Auf der geöffneten Etage in Augenhöhe. Ziehen schaut sich um, W A S D oder die Pfeiltasten gehen (Q/E drehen), das Mausrad macht einen Schritt, auf dem Tablet steuert der Stick unten rechts. ✕ beendet es.
- **Zeitreise (⏪):** spielt die letzten 24 Stunden oder 7 Tage aus dem Verlauf von Home Assistant ab: Lampen, Rollläden, Türen und Fenster, Schlösser, Medien, Roboter. Die Leiste zeigt jede Änderung als Strich; abspielen mit 1 Min., 10 Min. oder 1 Std. pro Sekunde oder an einen Zeitpunkt ziehen. *Live* kehrt zurück; in der Vergangenheit wird nichts geschaltet.
- **3D-Sperre (🔒):** Drehen, Zoomen und Verschieben sind auf diesem Gerät aus, Tippen auf Geräte geht weiter.
- **Uhr:** 🕒 in der Kopfzeile stellt eine große Uhr in eine Ecke der Ansicht.
- **Look *Auto*:** tagsüber der Tag-Look, nach Sonnenuntergang Neon.
- **Hauskarte:** Die Energie-Glaskarte über dem Dach zeigt die letzten 24 Stunden als Kurve (Solar als Fläche, Verbrauch als Linie).

## Haushalt und Haustiere

- **Mülltonnen** (Pack Garten & Terrasse, vier Farben, 120 und 240 l): Im Formular *Abholtermin (Sensor)* wählen, z. B. von Waste Collection Schedule oder ein Sensor mit Tagen oder Datum. Am Tag davor und am Abholtag leuchtet die Tonne und zeigt ihren Pin.
- **Briefkasten:** *Post-Sensor* wählen (z. B. ein Kontakt an der Klappe); liegt Post drin, leuchtet er.
- **Pflanzen:** *Bodenfeuchte (Sensor)* und *Durst unter (%)*; darunter leuchtet die Pflanze.
- **Waschmaschine, Trockner, Spülmaschine:** Hat das Gerät in Home Assistant einen Restlaufzeit-Sensor, steht am Pin „Noch 25 min“.
- **Haustiere** (Pack Haustiere: Katze, Hund, Kaninchen): laufen in ihrem Raum um die Möbel herum und machen zwischendurch Pausen.

## Durchsagen

*„Essen ist fertig!“* – und genau der Raum, der es hören soll, hört es.

- **Aus einem Raum:** Hat der Raum einen Lautsprecher, gibt es im Raum-Panel den Abschnitt **📢 Durchsage**. Einen Satz antippen oder einen eigenen tippen; der Lautsprecher des Raums sagt ihn. Eigene Sätze stehen unter *Editor → Einstellungen* (einer pro Zeile).
- **Der Lautsprecher des Raums:** im Formular des Raums gewählt, sonst ein im Raum platzierter Lautsprecher, sonst ein Sprachassistent (Voice PE und andere Satelliten), ein Echo oder ein Lautsprecher des Bereichs. Ein Fernseher oder ein ausgeschalteter Lautsprecher wird nie von selbst gewählt. Sprachassistenten sagen es mit ihrem Gong, Echos als echte Durchsage (Alexa Devices oder Alexa Media Player), Lautsprecher, die das können (Sonos und andere), senken ihre Musik und spielen danach weiter; jeder andere spricht über Text-zu-Sprache von Home Assistant.
- **Ruhezeit je Raum:** im Formular des Raums, z. B. 20:00–07:00 fürs Kinderzimmer. Durchsagen an mehrere Räume lassen den Raum dann aus; eine Durchsage nur für ihn kommt trotzdem an.
- **Auf den Bildschirmen:** Jede offene NextFloor-Seite (Panel oder Karte) zeigt die Nachricht groß über dem Haus, spielt einen sanften Gong und spricht sie – ein altes Wandtablet wird zum Durchsage-Lautsprecher. Unter ⚙ → 📢 bekommt ein Bildschirm einen Namen (z. B. *Flur*), damit Durchsagen auch nur an ihn gehen können, oder bleibt ohne Haken still. Browser spielen Ton erst nach dem ersten Antippen der Seite; in Fully Kiosk *Autoplay Audio* einschalten (Web Content Settings).
- **In Automationen:** die Aktion **NextFloor: Durchsage**.

```yaml
action: nextfloor.announce
data:
  message: "Es hat geklingelt!"
  rooms: [Küche, Wohnzimmer]   # nach Name, Raum-ID oder Bereichs-ID; weglassen = jeder Raum mit Lautsprecher
  on_screens: true             # die offenen NextFloor-Bildschirme zeigen und sprechen es auch
  screens: [Flur]              # optional: nur diese Bildschirme
```

`floor` beschränkt es auf eine Etage, `on_speakers: false` lässt die Lautsprecher still, `tts_entity` wählt die Stimme. Die Aktion meldet zurück, welcher Lautsprecher es gesagt hat und welche Räume (und warum) ausgelassen wurden.

## Dashboard-Karte

Im Karten-Dialog des Dashboards *NextFloor* hinzufügen (`type: custom:nextfloor-card`). Der visuelle Editor stellt Etage, Größe, Aussehen, Akzent, Wände, Qualität, Etagen darunter, Symbole, Heatmap, Stromfluss, Karten, Schalter in der Karte, Raum-Knöpfe, zentralen Stern, Raumnamen, Energiewerte, Raumdetails beim Antippen, Vollbild, Etagen auseinander, Dach ausblenden, Warnungen, Szenen-Knöpfe und Wetter ein. Dieselben Optionen gibt es in YAML unter den im Editor gezeigten Namen.

## Wandtablet

Der Kiosk-Abschnitt der Karte kehrt nach einer Ruhezeit zur Startansicht zurück, dimmt nachts (nach der Sonne oder einem Zeitraum, Farbeffekte ruhen), kann die Kamera als Bildschirmschoner langsam drehen und einen Knopf zu einem anderen Dashboard zeigen. Auf Fire-Tablets und ähnlichen Geräten die Qualität *Tablet* nutzen.

## Eigene Modelle und Packs

- **Reiter Erweiterungen → Möbel-Packs:** eigene Möbel-Packs als Datei importieren oder ihr JSON direkt einfügen, und eigene Packs wieder entfernen. Format: [packs.md](packs.md).
- **Reiter Erweiterungen:** eigenes `.glb`-Modell für einen Fahrzeug-Platz hochladen. Der Browser dreht es richtig herum, macht es leichter, entfernt Texturen und markiert den Lack; die Datei liegt danach auf deinem Home Assistant (nur Administratoren, bis 12 MB). Siehe [models.md](models.md).
- **Möbel-Packs** kommen mit der Integration (26 Packs, über 600 Modelle) und brauchen keine Einrichtung. Eigene Packs sind JSON-Dateien, Format in [packs.md](packs.md). Die Demo hat eine Modellschau, die jedes Modell live zeigt.

## Sicherung

Ein Plan aus **Sweet Home 3D** (.sh3d, ab Version 5.3) lässt sich unter *Sicherung → Importieren* direkt laden: Ebenen werden Etagen, Räume werden Räume, Türen und Fenster sitzen in ihren Wänden, freie Wände bleiben frei. Möbel werden nicht übernommen.

Unter *Sicherung* im Editor: **Exportieren** / **Importieren** für den Plan, **Als Vorlage teilen** (ohne persönliche Geräte), **Alles sichern** (Plan, Bilder, Packs in einer Datei) und **Vollsicherung wiederherstellen**. Vor größeren Änderungen sichern.

Ein Plan lässt sich auch von Hand schreiben, aus einem anderen Programm umwandeln oder von einer KI aus einem Bild des Grundrisses zeichnen: Format und fertige Anweisung stehen in [plan-format.md](plan-format.md) (Englisch).

## Probleme und Lösungen

- **Ein Gerät fehlt im Raum:** Der Raum braucht einen Bereich, und das Gerät muss dazugehören (Gerät oder Entity). Sonst *Andere Bereiche* oder *Ohne Bereich* nutzen.
- **Panel sieht nach einem Update alt aus:** Tab neu laden; in der Companion-App den Frontend-Cache zurücksetzen und die App ganz schließen. Ein Neustart von Home Assistant hilft hierfür nicht.
- **Möbel erscheinen als graue Kästen:** Das Pack ist nicht installiert; wieder einspielen, dann ist alles zurück.
- **Das Auto erscheint nicht:** *Sensor „Auto da“* prüfen; ohne Sensor wird das Fahrzeug immer gezeigt.
- **Das Solarfeld landet auf der falschen Dachseite:** Kompass in den Einstellungen prüfen.
- **Langsam auf dem Tablet:** Qualität *Tablet*, Wetter und Stromfluss aus.
- **Speichern schlägt fehl:** Nur Administratoren können speichern; die Meldung nennt das Feld, das Home Assistant ablehnt.

Probleme und Ideen: [GitHub Issues und Discussions](https://github.com/therealMRBK/NextFloor).
