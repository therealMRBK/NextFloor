# NextFloor-Anleitung

Diese Anleitung folgt dem Weg, den du wirklich gehst: installieren, zeichnen, einrichten, verbinden, benutzen. Ein Video, das die ganze Einrichtung von der leeren Seite an zeigt, ist in der [README](../README.md) verlinkt. Englische Fassung: [manual.md](manual.md).

**NextFloor ist für immer kostenlos** – jede Funktion, jedes Möbel-Pack, jedes Update, ohne Pro-Version, ohne bezahlte Erweiterungen und ohne Shop. Neue Möbel-Packs kommen immer wieder dazu, eigene baust du im [Möbel-Baukasten](https://therealmrbk.github.io/NextFloor/builder/) und teilst sie, und Plugins erweitern NextFloor weiter. Aus dieser Überzeugung ist das Projekt entstanden: Ein lebendiges 3D-Zuhause in Home Assistant soll allen gehören.

**Springe zu:** [Installation](#installation) · [Haus zeichnen](#haus-zeichnen) · [Einrichten](#einrichten) · [Geräte verbinden](#geräte-verbinden) · [Außen, Dach, Energie](#außen-dach-und-energie) · [Kompass und Karte](#kompass-und-karte) · [3D-Ansicht](#die-3d-ansicht-benutzen) · [Live-Funktionen](#live-funktionen) · [Dashboard-Karte](#dashboard-karte) · [Wandtablet](#wandtablet) · [Eigene Modelle und Packs](#eigene-modelle-und-packs) · [Sicherung](#sicherung) · [Probleme](#probleme-und-lösungen)

---

## Installation

Voraussetzung: Home Assistant 2025.1 oder neuer.

- **HACS:** NextFloor ist im offiziellen HACS-Store: in HACS nach *NextFloor* suchen, herunterladen, Home Assistant neu starten, die Integration unter Einstellungen → Geräte & Dienste hinzufügen. In der Seitenleiste erscheint *NextFloor*. (Früher als eigenes Repository installiert? Du musst nichts ändern: Updates kommen weiter über HACS, das es von selbst als normales Repository führt.)
- **Von Hand:** `custom_components/nextfloor` in den Konfigurationsordner kopieren, neu starten, Integration hinzufügen.
- **Updates:** über HACS, dann Home Assistant neu starten und den Browser-Tab neu laden (Companion-App: Einstellungen → Companion-App → Frontend-Cache zurücksetzen).

Plan, Bilder und Packs liegen in Home Assistants `.storage`. Nichts davon verlässt deine Installation.

## Haus zeichnen

Öffne den Reiter **Editor** (nur Administratoren). Die Werkzeugleiste enthält die Werkzeuge, die Seitenleiste zeigt immer die Auswahl, und der Hinweis unten sagt, was das aktive Werkzeug tut. **Rückgängig** (Strg+Z) nimmt fast alles zurück.

1. **Etage anlegen.** *Etage hinzufügen* bietet die Etagen aus Home Assistant an (Plan und Home Assistant bleiben verbunden) oder *Leere Etage*. Das Etagen-Formular setzt Name, Höhe über dem Boden, Raumhöhe und die Etage in Home Assistant. *Verschieben* und *90° drehen* wirken auf die ganze Etage, *Alle Etagen mitnehmen* aufs ganze Haus. *Räume aus HA-Bereichen anlegen* setzt zum Start einen Raum je Bereich. *Etage duplizieren* legt eine Kopie oben aufs Haus, wahlweise mit Möbeln, Geräte-Pins und Außenflächen; die Kopie ist von Home Assistant gelöst und wird für das neue Geschoss eingerichtet.
2. **Räume zeichnen.** *Rechteck*: ziehen. *Freie Form*: Ecken setzen, mit Tippen auf die erste Ecke oder Enter schließen, Esc bricht ab. Ecken rasten am Raster und an vorhandenen Wänden ein; Alt schaltet das Einrasten für einen Zug aus.
3. **Raum beschreiben.** Name, *Bereich* (die Verbindung zu den Geräten in Home Assistant) und *Boden*-Material. Position und Größe lassen sich eintippen. An den Eckgriffen formst du um, das **+** auf einer Kante fügt eine Ecke ein.
   *＋ Bereich im Raum* nimmt Home-Assistant-Bereiche dazu, die Teil des Raums sind, aber keine eigenen Wände haben (Leseecke, Küchenzeile): ihre Geräte gehören dann zum Raum. *Fußbodenheizung* nennt den Thermostat, das Ventil oder den Schalter, bei dessen Heizen der Boden glüht. Ein rechteckiger Raum zeigt sein Innenmaß von Wand zu Wand.
4. **Wände.** Sie entstehen aus den Raumkanten. Jede Kante hat Höhe, Dicke, eine Schere zum Teilen und *Keine Wand* für offene Kanten. Eine niedrigere Höhe macht eine Brüstung oder Theke. Freistehende Trennwände zeichnest du mit dem Werkzeug *Wand* (Umschalt hält gerade). Eine geteilte Kante kann auf jedem Teilstück eine eigene Dicke haben. *Lücken schließen* im Etagen-Formular verbindet haarfeine Spalten. **◠ Bogen** an einer Kante (oder an einer freien Wand) öffnet das Feld *Wölbung*: eintragen, wie weit sich die Mitte wölbt (negativ in den Raum), dann *Biegen*. Ein Nachbarraum an der ganzen Wand biegt sich mit, Türen und Fenster wandern mit; ein Raum, der nur einen Teil der Wand berührt, oder eine freie Wand darauf bleibt gerade. Ist eine Tür oder ein Fenster zu breit für einen tiefen Bogen, biegt die Wand nicht und ein Hinweis sagt warum.
5. **Türen und Fenster.** *Tür & Fenster*, Wand antippen, Art wählen (Tür, Haustür, Doppeltür, Fenster, Doppelfenster, Terrassentür, Balkontür, Garagentor, Glaswand). Breite, Mitte von der Ecke, Brüstung und Höhe einstellen; Anschlag oder Öffnungsrichtung wechseln. Der Stil *Automatisch* nimmt außen eine Haustür, innen eine Zimmertür.
6. **Treppen und Öffnungen.** Das Werkzeug *Treppe* zeichnet eine Treppe dort, wo du ziehst; sie läuft entlang der langen Seite. Sie hat eine Form (gerade, viertelgewendelt, L mit Podest, halbgewendelt, U mit Podest, Wendeltreppe), läuft links oder rechts herum und ist massiv, eine Wangen-, Holm- oder Kragarmtreppe, mit oder ohne Setzstufen und Geländer. Die Steigungen kommen aus der Etagenhöhe; das Formular zeigt Steigung, Auftritt und Schrittmaß und warnt bei unbequemen Maßen. *Führt nach unten* macht einen Abgang in einen Keller, der nicht gezeichnet sein muss. Die Treppe öffnet die Decke nur, wo über den Stufen keine 2,2 m Kopfhöhe bleiben; die Treppen aus dem Pack *Treppen & Geländer* schneiden ihre ganze Grundfläche aus. *Bodenöffnung* schneidet jedes andere Loch (Galerie, Schacht).
7. **Vorlage.** *Vorlage (Grundriss-Bild)* legt ein Bild hinter den Plan; verschieben, skalieren, drehen, geraderichten, Maßstab an einer bekannten Länge einstellen, dann nachzeichnen.
8. **Sperre.** Das Schloss *Grundriss* verhindert, dass Räume, Wände, Öffnungen und Außenflächen aus Versehen wandern; einzelne Stücke sperrt *Fixieren*.

**3D daneben** zeigt das 3D-Modell neben dem Plan. *Ansicht als Start der Etage / des Raums* merkt sich die aktuelle 3D-Kamera.

## Flächen und der Plan auf Papier

Das Raumformular zeigt die *Wohnfläche* des Raums (gerechnet wie die Wohnflächenverordnung: voll ab 2 m lichter Höhe, zur Hälfte zwischen 1 und 2 m, darunter nicht); Garagen, Keller und Technikräume bleiben nach ihrem Namen draußen, *Zählt zur Wohnfläche* entscheidet es von Hand. Das Etagenformular zählt sie für Etage und Haus zusammen, und *🖨️ Plan drucken / PDF* öffnet jede Etage in 1:100 mit Maßen und der Flächentabelle – drucken oder im Druckdialog als PDF speichern.

## Notizen

Rechtsklick (oder lange tippen) auf eine Stelle im Plan und *✎ Notiz hier* wählen: Text eintippen und, wenn du magst, den Tag, an dem sie fällig ist. Notizen stehen als gelbe Pins in der 3D-Ansicht ihrer Etage (orange, sobald fällig); ein Tipp zeigt den ganzen Text, und die Suche findet sie.

## Plan prüfen

*✓ Plan prüfen* oben in der Seitenleiste des Editors listet Etage für Etage, was fehlt oder schief ist: Räume ohne Bereich, Bereiche ohne Raum, noch nicht gesetzte Geräte eines Raums, übereinanderliegende Räume, Türen und Fenster neben der Wand und Verknüpfungen zu Entitäten, die Home Assistant nicht mehr kennt. Blaue Knöpfe lösen es per Tipp (Rückgängig geht wie immer), *Zeigen* öffnet die Stelle.

## Einrichten

Werkzeug *Möbel*, Raum antippen, rechts aus der Bibliothek wählen. Neue Stücke landen in der Raummitte.

- Die Bibliothek hat Bereiche (Leuchten, Wohnen, Essen, Küche, Schlafen, Bad, Arbeiten, Parken) und danach die Möbel-Packs. Die Suche findet deutsche und englische Namen, Packnamen und mehrere Wörter in beliebiger Reihenfolge.
- **Möbel-Werkstatt:** *🛠️ Eigenes Möbel bauen* oben in der Bibliothek. Vorlage wählen (Schrank, Regal, Lampe, Gerät), Maße in cm eintippen und Türen, Schubladen, Böden, Griffe, Unterbau und Farben einstellen; die Frontansicht zeigt jede Änderung sofort. *In den Plan setzen* legt es im Pack *Eigene Möbel* ab (es steht dann auch in der Bibliothek). Ein Werkstatt-Möbel auswählen und *In der Werkstatt ändern* drücken, um es später zu ändern – jedes Exemplar im Plan bekommt die neue Größe.
- Ziehen verschiebt, Eckgriffe ändern die Größe, am Drehgriff drehst du, oder du tippst Position, Größe und Drehung ein. *Spiegeln* vertauscht links und rechts, *Duplizieren* kopiert, *Fixieren* sperrt, *Auf Etage verschieben* bringt das Stück an dieselbe Stelle einer anderen Etage.
- Elektrische Stücke lassen sich mit Geräten verbinden (siehe unten). Leuchten sind Möbel mit einem Licht dahinter; der Leuchten-Bereich hat zwölf Arten.
- **Spots setzen:** am Raum legt ein Raster aus Leuchten (Spalten × Reihen) an, die alle einem Licht folgen, mit einem Schritt rückgängig zu machen.
- **Bibliothek:** Möbel stehen nach Art sortiert (Sitzen, Betten, Küche …) mit Bild und Maß; ein Modell in mehreren Größen ist eine Karte mit Größen-Knöpfen. Ist ein Raum gewählt, steht oben, was in ihn passt (*Passend zu …*), *Alle Räume zeigen* hebt das auf. Filter für ⚡ verknüpfbar, 💡 leuchtet und 🌳 draußen, ★ Favoriten und Zuletzt benutzt stehen oben.
- **Größe ändern:** Beine, Armlehnen, Platten und Griffe behalten ihre echte Größe, nur die Mitte wächst.
- **Wandansicht (▣):** In der Wandliste eines Raums zeigt *Wandansicht* die Wand von vorn mit Türen, Fenstern und den Möbeln davor; ziehen oder Abstand und Höhe eintippen.
- **Lichtschalter und Steckdosen** (Pack Smart Home & Technik, 1- bis 4-fach): jede Taste mit eigener Entität; sie leuchtet, solange das Geschaltete an ist.
- **Markisen, Vorhänge, Rollos, Leinwand, Schiebetor:** *Bewegt sich mit* wählt die Cover-Entität, der sie folgen.
- **Sofas:** Das eingebaute Sofa hat eine *Form* – gerade, L (Spiegeln für die andere Seite) oder U.
- **Bilderrahmen** (Pack *Bilder & Rahmen*): im Formular ein Foto hochladen, eine Bild-Adresse (/local/…) eintragen oder eine Bild- oder Kamera-Entität wählen; Passepartout und ob das Foto den Rahmen füllt, sind einstellbar.
- **Nur zeigen, solange …:** Jedes Stück kann auf eine Entität warten – der Weihnachtsbaum nur, solange ein Helfer an ist. Mehrere Zustände mit Komma, oder umgekehrt; im Editor bleibt es immer sichtbar.
- **Pin verschieben:** Pins dicht stehender Geräte schiebst du im Formular zur Seite oder nach oben; das Gerät bleibt stehen.
- **Unter der Dachschräge:** Deckenleuchten und hängende Stücke im Dachgeschoss haben *📐 An die Dachschräge*.
- **Ebenen:** Eine Etage mit *Ebene* im Formular (die Bäume, die Deko) bekommt oben in der 3D-Ansicht ein Auge, das sie ein- und ausblendet.
- **Etagen-Zähler:** *Etagen-Zähler (Leistung)* im Etagenformular nimmt einen Leistungssensor nur für diese Etage. Sein Wert steht auf dem Etagen-Schild, und die Haus-Karte in der Ansicht dieser Etage zeigt ihn mit seinem Anteil am Haus.

## Geräte verbinden

Im Raum-Formular listet der Abschnitt **Geräte** die Home-Assistant-Geräte dieses Bereichs. Reiter: *Dieser Bereich*, *Andere Bereiche*, *Ohne Bereich*; Suche nach Namen. Jede Zeile: Auge (im 3D-Raum-Fenster ausblenden), *Aa* (eigener Name), Stern (ins Raum-Fenster aufnehmen ohne zu platzieren), *Platzieren*.

- Eine platzierte Leuchte wird zur Lampe. *Licht oder Schalter* nennt das Licht; *Farbe und Helligkeit von* ist für per Relais geschaltete Lampen; *Leuchtstärke in 3D* skaliert das Leuchten; *Vor dem Schalten fragen* schützt vor versehentlichem Antippen; *Symbol in 3D* bestimmt den Pin darüber.
- Elektrische Möbel (Fernseher, Kühlschrank, Waschmaschine …) finden ihre Entity im selben Bereich selbst („Automatisch“). Fernseher zeigen Farbe und Titel der laufenden App; *Leuchten hinter dem TV* stellt das Ambilight ein oder aus. Ein Leistungssensor zeigt die Watt. Jedes elektrische Stück zeigt seine Leistung neben dem Zustand, und seine Statuslichter leuchten, solange es läuft.
- **Leuchten mit mehreren Lichtern:** *Leuchtmittel 2, 3 …* nimmt Nachtlicht oder Lichtring derselben Leuchte dazu; ist das Hauptlicht aus, leuchtet die Lampe mit ihnen.
- **Rollläden:** *Art des Behangs* ist Rollladen außen, Raffstore (die Lamellen folgen der Neigung) oder Rollo innen; *Zweiter Rollladen* deckt die rechte Hälfte eines breiten Fensters; *Lieblingsposition „My“* setzt einen **My**-Knopf ins Schnellmenü.
- **3D-Drucker und Wärmepumpe:** Drucker oder Wärmepumpe aus den Packs mit einer beliebigen Entität ihres Geräts verbinden; eine Live-Karte zeigt den Druck (Bild, Fortschritt, Restzeit, Schicht, Temperaturen, Filamente – das Druckteil wächst auf dem Bett) oder die Wärmepumpe (Betriebsart, Vor- und Rücklauf, Strom, Wärme, COP).
- **Mähroboter:** Ein Mähroboter oder seine Station aus *Garten 2*, verbunden mit einem `lawn_mower`, mäht Bahnen über seinen Rasen.
- **Haustiere:** Mit einem *Raum-Sensor* (Bermuda, ESPresense) läuft das Tier in dem Raum herum, in dem es gerade ist.
- Entity-Felder sind durchsuchbar: einen Teil des Namens tippen und wählen. Durch das Zuweisen schaltet NextFloor nie etwas.
- **Stellplatz** (Bibliothek *Parken*): *Fahrzeug* wählt das Modell, *Sensor „Auto da“* bestimmt, wann es erscheint, und über eine beliebige Entity des Autos findet NextFloor Ladestand, Reichweite, Stecker, Schloss und Klima am Gerät des Autos.
- **Favoriten und eigene Knöpfe** (Einstellungen, *Favoriten*): Szenen, Skripte, Automationen, Schalter und Buttons fürs Zentralmenü; eigene Knöpfe öffnen einen Dashboard-Pfad, Entity-Details, einen Dienstaufruf oder ein browser_mod-Popup. *Sender oder Playlist* legt Lautsprecher-Voreinstellungen an. Eine Voreinstellung kann auf einzelne Lautsprecher beschränkt werden. **Eigene Warnungen** machen aus jeder Entität eine Zeile in der Warnleiste (Zustand, mehrere mit Komma, oder `<20` / `>80`), mit Text, Raum und Farbe. **Kalender für „Heute“** füllen die Karte *Heute*.

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

- **Außen:** Rasen, Terrasse, Weg, Einfahrt, Pool, Beet, Wildfläche, Hecke, Zaun oder Pergola aufziehen. *Höhenversatz* senkt oder hebt, *Gefälle* neigt, *Umriss zeigen* schaltet die leuchtende Kante, *Aus den Flächen darunter ausschneiden* macht ein Loch (Teich). Eine Fläche kann einem Home-Assistant-*Bereich* zugeordnet werden (seine Geräte kommen ins Außen-Panel, ein Pin öffnet es); Pool, Teich und Beet zeigen auf dem Pin Wassertemperatur und Pumpe. Hecken und Zäune haben eine Höhe. Garten- und Wegeleuchten kommen aus der Bibliothek und beleuchten die Flächen.
- **Das Außen-Panel:** Sobald ein Gerät außerhalb der Räume steht, bekommt die Leiste über der 3D-Ansicht neben den Geschossen den Knopf **🌳 Außen**. Er öffnet die Hausansicht mit einem Panel wie bei einem Raum, das die Geräte im Garten auflistet. Ein Gerät, das auf dem Dach oder über einem Raum steht, aber nach draußen gehört (eine Wetterstation), bekommt in seinem Formular *Gehört zu Außen*: Es zählt dann nicht mehr zum Raum darunter und steht im Außen-Panel. Die Dashboard-Karte zeigt den Knopf bei ihren Raum-Knöpfen.
- **Dach:** Das Werkzeug *Dach* baut Dachflächen aus den Räumen (Form, Firstrichtung, Traufe, Neigung; ziehen verschiebt, Ecken ändern die Größe). Die einfache Dachform steht in den Einstellungen. Dachfenster sitzen auf einer Fläche und bekommen Rollladen und Kontakte. Sattel-, Walm- und Krüppelwalmflächen können an jedem Firstende anders enden, und ein Flügel, der an ein größeres Dach stößt, läuft mit Kehlen in dessen Fläche. Ein Abschnitt dreht sich mit *Drehung (°)* um seine Mitte (ein Flügel im Winkel). Ein Krüppelwalm hat einen Regler, wie hoch sein Walm beginnt. Solarfelder auf Flachdächern stehen auf Wunsch in Ost-West-Aufständerung, auf Schrägdächern auf einer Aufständerung mit eigener Neigung.
- **Türen und Fenster (mehr):** Eine Tür bekommt ein Smart Lock (Tür antippen schließt ab oder auf, aufgeschlossen leuchtet sie); ein Fenster wählt seine Fensterbank, kann aus der Regenwarnung genommen werden und bekommt unter Gelände einen Lichtschacht.
- **Energie:** Die Checkliste verlangt ein Solarfeld, einen Zähler und einen Wechselrichter (Batterie und Netzanschluss optional). Ein Solarfeld kommt auf die am besten passende Südfläche (der Kompass entscheidet), in den Garten oder an eine Wand; Reihen, Spalten und Hoch-/Querformat einstellbar. Zähler, Wechselrichter, Batterie und Wallbox sind Geräte, die hier gesetzt werden; die Felder der Energiebilanz stehen auf „Automatisch“, und *Aus dem Energie-Dashboard übernehmen* liest deine bestehende Einrichtung. **Kabelwege** zeichnet ein, wo ein Kabel wirklich läuft (Solarfeld zum Wechselrichter, Batterie, Wechselrichter und Netz zum Haus, Unterzähler): *Weg zeichnen*, im Plan die Punkte antippen und dazwischen das Geschoss wechseln, wo es durch die Decke geht, dann *Fertig*. Der Fluss folgt dann dem Weg statt eines Bogens, und *Als Kabel zeigen* zeichnet ihn als sichtbares Kabel. *Gaszähler* und *Wasserzähler* stellen ihre Werte zur Bilanz.

## Kompass und Karte

In den **Einstellungen**:

- **Kompass.** Eine Scheibe zeigt, wohin Norden liegt (Grad im Uhrzeigersinn von oben). Sonnenlicht, Wind und die Himmelsrichtung der Dachflächen richten sich danach. Sind Nord und Süd vertauscht, drückst du **Nord ↔ Süd tauschen**; Zeichnung, Dachflächen und Solarfelder bleiben, nur die Richtungen ändern sich. Viertel-Drehungen und jeder Winkel gehen auch.
- **Echte Karte.** Standardmäßig aus. Eingeschaltet liegt eine gedimmte Karte (OpenStreetMap oder deine eigene Kachel-Adresse `https://…/{z}/{x}/{y}`) unter dem Plan im Editor und unter dem Haus in 3D. Sie startet am Standort von Home Assistant; Sichtbarkeit und Detail einstellen, mit den Pfeilen verschieben, bis das Haus auf seinem Grundstück sitzt. Dein Browser lädt die Kacheln direkt vom Kartenserver, und nur solange die Karte an ist.
- Ebenfalls hier: Wanddicken, Raster, Maße in Metern oder Fuß und Zoll, Dachform, Wetter-Entity und Effekte, Regenwarnung (auf Wunsch vom eigenen Regensensor), ein Sensor für Stromausfall, Sonnenflecken und ein eigener Hintergrund (Farbe oder Bild) hinter dem Haus.

## Die 3D-Ansicht benutzen

- **Bewegen:** Ziehen dreht, das Mausrad zoomt, rechte Taste oder zwei Finger verschieben. Etagen- und Raumknöpfe oben fliegen die Kamera hin; *Zurück* oder Esc geht eine Ebene hoch.
- **Aussehen:** Qualität *Auto / Tablet / Hoch*; Themen *Neon / Blueprint / Tag* mit Akzentfarbe; Symbole *Keine / Wichtige / Alle*.
- **Schalter unten:** *Wände hoch / Schnitt / Schräg*, *Massiv*, *Auseinander / Gestapelt*, *Dach bleibt*, Heatmap (*Temp., Feuchte, CO₂, Werte*), *Raumnamen*, *Wetter*, *Stromfluss*, *Karten*.
- **Karten:** Neben Temperatur, Feuchte und CO₂ gibt es **Schimmel** (das Risiko an der kältesten Wand jedes Raums), **Werte** (mit Lüftungshinweisen) und **WLAN** (Reichweite jedes Access Points, seine Geräte, die Netzwerkgeräte, die offline sind). Die Temperatur-Skala ist von Mai bis September eine Sommer-Skala.
- **Wände:** *Schräg* schneidet die Wände schräg ab, vorne halbhoch und hinten voll hoch, wie ein Puppenhaus; die Schräge dreht mit der Kamera. *Massiv* zeigt blickdichte Wände in ihren Farben statt Glas; im geöffneten Raum werden die Wände vor der Kamera abgesenkt. Die Farben stellst du im Editor ein: *Einstellungen → Wandfarbe außen / innen*, und pro Raum *Wandfarbe innen (dieser Raum)*. *Massiv* und *Schräg* lassen sich kombinieren.
- **Raum-Fenster:** Lichter (schalten, Helligkeit, Farbtemperatur, Farbpunkte, *Alle aus*), Rollläden, Medien, Sensoren, Szenen. Antippen eines Lampen-Pins schaltet sie, langer Druck öffnet das Schnellmenü, ein Rollladen öffnet sein Menü. Lautsprecher und Fernseher öffnen ein Schnellmenü mit Abspielen/Pause, Weiter, Lautstärke, Quellen und Voreinstellungen. Szenen stehen oben; *＋ Stimmung speichern* merkt sich die Lichter des Raums als Stimmung zum Wiederherstellen oder Übertragen auf einen anderen Raum (→). Das Fenster zeigt die Temperatur der letzten 24 Stunden und wann gelüftet werden sollte.
- **Zentralmenü (Stern):** alle Lichter und Rollläden der Etage oder des Hauses plus deine Favoriten. *★ Menü offen* in ⚙ hält es auf diesem Gerät offen und größer; eigene Knöpfe leuchten, solange ihre Entität an ist. **Suche (Lupe):** Gerät oder Raum tippen, die Kamera fliegt hin.
- **Warnungen:** Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen erscheinen als Banner; Antippen springt in den Raum. Ein ausgelöster Alarm nennt den Sensor, der ihn ausgelöst hat, und lässt dessen Raum pulsieren.
- **Kleine Bildschirme:** 🔍 in ⚙ holt die eingepassten Ansichten näher; *🎥 Kamera behalten* behält Seite, Höhe und Abstand beim Etagenwechsel.
- **Heute:** Mit gewählten Kalendern listet eine Karte oben rechts die Termine des Tages und die Mülltonnen, die heute oder morgen abgeholt werden.

## Live-Funktionen

Eingebaut und kostenlos; sie brauchen nur die Geräte, die du schon hast.

- **Wetter am Haus:** Regen, Schnee, Hagel, Schneeregen, Nebel, Wolken mit Schatten, Blitze, Sonne und Mond, gesteuert von einer Wetter-Entity und dem Kompass. Nachts kommen bei klarem Himmel Sterne heraus; bei Schnee liegt der Boden weiß, bei Regen wird er nass.
- **Sonne und Schatten:** Das Haus wirft seinen Schatten nach dem echten Sonnenstand (Einstellung *Sonnenlicht und Schatten*, auf *Tablet* aus). Ist *☀ Tageszeit* in den Ansichtsoptionen (⚙) eingeschaltet, öffnet der Schalter **☀** unter der 3D-Ansicht einen Regler über die Stunden des Tages: Sonnenflecken, Schatten, Himmel und der Look *Auto* folgen der gewählten Uhrzeit; erneut tippen zeigt wieder das Jetzt.
- **Stromfluss:** Teilchen von den Solarmodulen zu Wechselrichter, Haus, Akku und Netz; eine Glaskarte mit Bilanz und Autarkie.
- **Fernseher:** was läuft, in der Farbe der App, dazu Ambilight.
- **Klang:** eine Karte über jedem spielenden Lautsprecher oder Fernseher mit Cover und Bedienung; Schallringe in der Farbe der App; Multiroom-Gruppen verbindet ein Faden.
- **Auto:** eine Karte über dem Stellplatz mit Ladering, Reichweite, Ladeleistung, Stecker, Innentemperatur und Knöpfen für Schloss, Klima und Laden. Unterwegs sagt sie, wie weit es von zu Hause ist; sie zeigt die Abfahrtszeit und warnt vor offenen Türen und Klappen; an einer Wallbox eingesteckt hängt es am Kabel.
- **Energie:** Die Hauskarte zeigt die letzten sieben Tage als Balken und steht auch über der geöffneten Etage; ein Hausspeicher zeigt seinen Ladestand an der Front.
- **Alles aus:** *⏻ Alles aus* im Raum-Panel, oder *⏻* in der Leiste oben für die offene Etage, schaltet Lichter, Schalter, Ventilatoren und Medien aus. *↶ Rückgängig* holt zehn Sekunden lang alles zurück.
- **Saugroboter:** Ein `robot_vacuum` im Plan fuhr bisher Spuren, die die Ansicht selbst im gemeldeten Raum erfunden hat. Legt die Integration des Roboters ihre Karte auf eine Kamera (`vacuum_position`, `charger`, `path`, wie die Kartenkarte von NarwalIntegration), zeigt sie die Wahrheit: Der Roboter steht, wo er sich meldet, blickt, wohin er blickt, und der Boden behält die Spur, die er wirklich gefahren ist. Die Station steht, wo der Roboter sie meldet. Siehe *Saugroboter im Plan* unten.

### Saugroboter im Plan

Die Kamera findet sich selbst — jede `camera`, deren Attribute `vacuum_position` tragen, genügt; es muss nichts ausgewählt werden. Was die Ansicht nicht wissen kann, ist, wie das Raster des Roboters auf dem Plan liegt: Der Roboter zählt in eigenen Zellen, der Plan in Metern.

Wähle im Plan die Station des Roboters und drücke *Von der jetzigen Position des Roboters kalibrieren*: Lass den Roboter mindestens 1,5 m wegfahren und tippe ihn dann im Plan an, wo er steht. Die Station ist der Anker — der Plan weiß, wo sie steht, die Kamera weiß, wo sie und der Roboter in ihrem Raster liegen —, also genügt ein Tipp, und alles Weitere (Position, Blickrichtung, Spur, Station) folgt.

Zwei Orte können eine Spiegelung nicht von einer Drehung unterscheiden, weil beide sie genau dorthin bringen, wo sie hingehören; läuft die y-Achse der Karte entlang Plan −z, braucht es den Haken *gespiegelt*, sonst kommen die Räume verkehrt heraus. Die zwei Orte liegen als `settings.vacuum_map` (`a`/`ga` und `b`/`gb`, dazu `mirror`); ohne sie zeichnet die Ansicht weiter ihre erfundenen Spuren.

Die Spur ist so fein, wie die Integration sie sendet: Eine Kartenkarte, die ihren `path` auf wenige hundert Punkte kürzt, ergibt eine grobe Spur, eine mit mehr Punkten eine feinere.

Zehn Minuten nachdem der Roboter andockt, blendet die Spur aus; der Boden behält also nicht die Reinigung von gestern. Die Zeitreise (⏪) ist der Ort, an dem eine fertige Reinigung bleibt, und sie hält den ganzen Tag.\n\nDiese Attributnamen stammen von der Vacuum-Map-Card, nicht von einer Marke: Die Xiaomi-Kartenextraktoren (Roborock, Viomi, Roidmi, Dreame, Ijai), die Roborock-Integration und NarwalIntegration liefern sie alle, und ein Gerät, das in Millimetern statt in Kartenzellen meldet, funktioniert genauso — den Maßstab geben die zwei Orte. Die Integration muss sie allerdings als Attribute bereitstellen; manche tun das nur auf Ansage (die Kartenextraktoren wollen `vacuum_position` und `path` in ihrer `attributes:`-Liste).

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

## Sensoren für Automationen

NextFloor legt Sensoren in Home Assistant an: *Offene Fenster und Türen* und *Lichter an*, fürs Haus und für jede Etage (am Gerät *NextFloor*). Sie zählen Kontakte, Garagentore, Geräte-Pins und Lampen des Plans, und ihr Attribut `entities` nennt, was offen oder an ist – z. B. für eine Benachrichtigung „{{ state_attr('sensor.nextfloor_offene_fenster_und_turen', 'entities') | join(', ') }}“ beim Scharfschalten der Alarmanlage.

## Dashboard-Karte

Im Karten-Dialog des Dashboards *NextFloor* hinzufügen (`type: custom:nextfloor-card`). Der visuelle Editor stellt Etage, Größe, Aussehen, Akzent, Wände, Qualität, Etagen darunter, Symbole, Heatmap, Stromfluss, Karten, Schalter in der Karte, Raum-Knöpfe, zentralen Stern, Raumnamen, Energiewerte, Raumdetails beim Antippen, Vollbild, Etagen auseinander, Dach ausblenden, Warnungen, Szenen-Knöpfe und Wetter ein. Neuere Optionen: `central_open` (Sternmenü offen und groß), `keep_camera`, `readable` (kräftigere Kontraste und größere Schrift), `zoom` (0,6–2,5) und `today` (Karte Heute, Standard an). Dieselben Optionen gibt es in YAML unter den im Editor gezeigten Namen.

## Wandtablet

Der Kiosk-Abschnitt der Karte kehrt nach einer Ruhezeit zur Startansicht zurück, dimmt nachts (nach der Sonne oder einem Zeitraum, Farbeffekte ruhen), kann die Kamera als Bildschirmschoner langsam drehen und einen Knopf zu einem anderen Dashboard zeigen. Auf Fire-Tablets und ähnlichen Geräten die Qualität *Tablet* nutzen.

## Eigene Modelle und Packs

- **Reiter Erweiterungen → Möbel-Packs:** eigene Möbel-Packs als Datei importieren oder ihr JSON direkt einfügen, und eigene Packs wieder entfernen. Format: [packs.md](packs.md).
- **Reiter Erweiterungen:** eigenes `.glb`-Modell für einen Fahrzeug-Platz hochladen. Der Browser dreht es richtig herum, macht es leichter, entfernt Texturen und markiert den Lack; die Datei liegt danach auf deinem Home Assistant (nur Administratoren, bis 12 MB). Siehe [models.md](models.md).
- **Möbel-Packs** kommen mit der Integration (41 Packs, fast 800 Modelle) und brauchen keine Einrichtung. Eigene Packs sind JSON-Dateien, Format in [packs.md](packs.md). Die Demo hat eine Modellschau, die jedes Modell live zeigt.

## Sicherung

*🔗 Ansicht teilen* speichert das Haus als kleine HTML-Datei, die in jedem Browser ohne Home Assistant aufgeht (über die Online-Demo, ohne Geräte und Entitäten) – zum Zeigen.

*📌 Stand speichern …* hält den Plan unter einem Namen fest (eine Version, die bleibt, wenn die automatischen Wiederherstellungspunkte gehen). *Vergleichen* an einem Punkt listet Etage für Etage, was sich gegenüber dem Plan jetzt unterscheidet.

Ein Plan aus **Sweet Home 3D** (.sh3d, ab Version 5.3) lässt sich unter *Sicherung → Importieren* direkt laden: Ebenen werden Etagen, Räume werden Räume, Türen und Fenster sitzen in ihren Wänden, freie Wände bleiben frei. Möbel werden nicht übernommen. Eine **DXF**-Zeichnung (.dxf) aus einem CAD-Programm lädt genauso: geschlossene Polylinien werden Räume, Linien freie Wände. Ein **IFC**-Modell (.ifc, aus Revit, ArchiCAD, Allplan …) bringt seine Geschosse als Etagen und seine Räume (IfcSpace) als Räume; die Wände zeichnet NextFloor aus den Räumen.

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
