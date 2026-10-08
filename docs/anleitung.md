# NextFloor – Anleitung

🇩🇪 Deutsch · [🇬🇧 English](manual.md)

NextFloor zeichnet dein Zuhause direkt in Home Assistant und zeigt es als 3D-Modell im Neon-Look. Lichter leuchten in ihrer Farbe, Rollläden fahren, Fenster kippen, Türen schwingen auf, Kameras schauen in den Raum und der Fernseher zeigt, was läuft. Alles läuft lokal in Home Assistant, ohne Cloud und ohne externe Programme, und ist für Wandtablets gebaut.

Diese Anleitung beschreibt alle Funktionen der aktuellen Version. Was sich in welcher Version geändert hat, steht im [Changelog](../CHANGELOG.md) und auf der [Release-Seite](https://github.com/therealMRBK/NextFloor/releases). Die Bilder stammen aus der Demo mit erfundenen Daten.

![Das Haus in der 3D-Ansicht](images/view-house.jpg)

---

## Inhalt

1. [Installation](#1-installation)
2. [In zehn Minuten zum ersten 3D-Plan](#2-in-zehn-minuten-zum-ersten-3d-plan)
3. [Die Oberfläche im Überblick](#3-die-oberfläche-im-überblick)
4. [Der Editor](#4-der-editor)
5. [Die 3D-Ansicht](#5-die-3d-ansicht)
6. [Live-Funktionen](#6-live-funktionen)
7. [Erweiterungen und Möbel-Packs](#7-erweiterungen-und-möbel-packs)
8. [Die Dashboard-Karte](#8-die-dashboard-karte)
9. [NextFloor auf dem Wandtablet](#9-nextfloor-3d-auf-dem-wandtablet)
10. [Sicherung und Umzug](#10-sicherung-und-umzug)
11. [Daten und Datenschutz](#11-daten-und-datenschutz)
12. [Häufige Fragen und Fehlerbehebung](#12-häufige-fragen-und-fehlerbehebung)

---

## 1. Installation

### Voraussetzungen

- Home Assistant 2025.1 oder neuer.
- Ein Browser mit WebGL. Das sind alle aktuellen Browser, die Home-Assistant-App und auch Amazon-Fire-Tablets.
- Für das Bearbeiten ein Benutzer mit Administratorrechten. Alle anderen Benutzer sehen und bedienen den Plan, ändern ihn aber nicht.

### Über HACS

[![NextFloor in HACS öffnen](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=therealMRBK&repository=NextFloor&category=integration)

Der Knopf öffnet NextFloor direkt in HACS deiner Installation. Von Hand geht es so:

1. In Home Assistant **HACS** öffnen.
2. Oben rechts **⋮ → Benutzerdefinierte Repositories** wählen.
3. `https://github.com/therealMRBK/NextFloor` eintragen, Typ **Integration**, hinzufügen.
4. **NextFloor** suchen, installieren und Home Assistant neu starten.
5. **Einstellungen → Geräte & Dienste → Integration hinzufügen → NextFloor**, oder direkt über diesen Knopf:

   [![NextFloor einrichten](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=nextfloor)

Danach steht **NextFloor** in der Seitenleiste. Die Dashboard-Karte ist ebenfalls sofort verfügbar, eine Ressource musst du nicht eintragen.

### Von Hand

Den Ordner `custom_components/nextfloor` aus dem Repository nach `config/custom_components/` kopieren, Home Assistant neu starten und die Integration wie oben hinzufügen.

### Updates

HACS meldet neue Versionen von selbst. Nach jedem Update Home Assistant neu starten. Bis dahin zeigt NextFloor oben einen Hinweis, dass ein Neustart aussteht. Dein Plan bleibt bei Updates immer erhalten, auch wenn du die Integration entfernst und neu hinzufügst.

---

## 2. In zehn Minuten zum ersten 3D-Plan

1. **NextFloor** in der Seitenleiste öffnen und oben auf **Editor** wechseln.
2. Rechts **Etage hinzufügen** wählen. Hast du in Home Assistant Etagen angelegt, bietet NextFloor sie direkt an.
3. Gibt es Bereiche auf der Etage, legt **„… Räume aus HA-Bereichen anlegen“** für jeden Bereich einen Raum an. Ziehe die Räume dann an die richtige Stelle und passe die Ecken an. Alternativ zeichnest du mit **Rechteck** oder **Freie Form**.
4. Mit **Tür & Fenster** auf eine Wand tippen, um Türen und Fenster einzusetzen.
5. Einen Raum antippen und rechts unter **Geräte** bei den gewünschten Geräten **Platzieren** tippen, etwa Lichter, Rollläden, Thermostate, Media Player und Sensoren des Bereichs. Unter der Liste setzt **Alle … platzieren** nach einer Rückfrage alle Hauptgeräte auf einmal.
6. Mit **Möbel** und **Einrichten …** den Raum möblieren.
7. Oben auf **3D** wechseln. Fertig: Tippe auf eine Lampe, und sie schaltet.

Der Plan speichert sich beim Bearbeiten von selbst.

---

## 3. Die Oberfläche im Überblick

Oben gibt es drei Reiter:

| Reiter | Wofür | Wer sieht ihn |
|---|---|---|
| **3D** | Das Haus ansehen und bedienen | alle |
| **Editor** | Grundriss zeichnen, Möbel und Geräte platzieren | Administratoren |
| **✦ Erweiterungen** | Live-Funktionen, Möbel-Packs | Administratoren |

Zusätzlich gibt es die Dashboard-Karte, die dieselbe 3D-Ansicht in jedes Dashboard bringt. Mehr dazu in [Kapitel 8](#8-die-dashboard-karte).

**Sprache:** NextFloor folgt der Sprache deines Home-Assistant-Nutzers (Profil → Sprache). Deutsch und Englisch sind eingebaut; Französisch, Spanisch, Niederländisch, Italienisch, Ungarisch, Dänisch, Schwedisch, Norwegisch (Bokmål und Nynorsk), Finnisch, Tschechisch, Polnisch, Rumänisch und Slowenisch werden bei Bedarf nachgeladen, so bleiben die Bundles für Wandtablets klein. Fehlt ein Text in einer Sprache, erscheint er auf Englisch.

Das Aussehen folgt deinem Home-Assistant-Theme: Farben, Schrift und Eckenradius kommen von dort, und die Oberfläche wechselt mit ihm zwischen hell und dunkel. Die drei Looks des 3D-Modells (Neon, Blueprint, Tag) sind davon unabhängig und werden in der Leiste oben gewählt.

---

## 4. Der Editor

![Der Editor mit der 3D-Ansicht daneben](images/editor.jpg)

Der Editor besteht aus dem Grundriss in der Mitte, der Werkzeugleiste oben und der Seitenleiste rechts. Die Seitenleiste zeigt immer, was gerade ausgewählt ist: die Etage, einen Raum, ein Möbel, eine Tür oder ein Gerät.

### 4.1 Werkzeuge

| Werkzeug | Was es tut |
|---|---|
| **Auswählen** | Räume, Möbel, Türen, Fenster und Geräte antippen, verschieben, Ecken ziehen |
| **Rechteck** | Einen rechteckigen Raum aufziehen |
| **Freie Form** | Einen Raum Punkt für Punkt zeichnen |
| **Wand** | Eine einzelne, frei stehende Wand ziehen, etwa einen Raumteiler |
| **Tür & Fenster** | Auf eine Wand tippen, um eine Öffnung einzusetzen |
| **Möbel** | Die Möbelbibliothek öffnen |
| **Außen** | Außenflächen wie Rasen, Terrasse oder Pool aufziehen |
| **Bodenöffnung** | Ein Loch in den Boden der Etage aufziehen, etwa über dem Treppenaufgang |
| **Dach** | Dachflächen aufziehen, verschieben und einstellen, siehe [4.19](#419-dach) |
| **Energie** | Solarfelder auf dem Dach und im Garten, Stränge, siehe [4.20](#420-energie-solarfelder) |

Daneben stehen **Rückgängig**, **Wiederholen**, **Alles zeigen** und **3D daneben**. Unten im Plan steht immer ein kurzer Hinweis zum aktiven Werkzeug.

**Maus und Touch:** Mit zwei Fingern ziehst du die Ansicht, mit zwei Fingern zoomst du. Mit der Maus zoomt das Mausrad, die Ansicht ziehst du auf einer leeren Stelle. **Strg+Z** macht rückgängig, **Strg+Y** oder **Strg+Umschalt+Z** wiederholt, **Entf** löscht das Ausgewählte, **Esc** bricht ab. Die **Pfeiltasten** verschieben das Ausgewählte (Raum, Ecke, Möbel, Gerät, Wand, Außenfläche) um einen Rasterschritt, mit **Umschalt** um 10 cm, mit **Alt** um 1 cm; Türen und Fenster wandern dabei entlang ihrer Wand.

**Grundriss sperren und fixieren:** **🔒 Grundriss** in der Werkzeugleiste sperrt alle Räume, Wände, Türen, Fenster und Außenflächen, auch neu gezeichnete; ein ausgewählter Raum zeigt dann „🔒 Grundriss gesperrt“, ein Klick darauf entsperrt. Möbel und Geräte fixierst du einzeln, sobald sie an ihrem Platz stehen: mit dem Schloss **🔓 Fixieren** oben im Formular, mit der Taste **L** oder per **Rechtsklick** (auf dem Tablet langes Drücken). Das Rechtsklick-Menü bietet außerdem **Duplizieren**, **Drehen 90°** und **Löschen**. Gesperrtes lässt sich auswählen und im Formular bearbeiten, aber nicht mehr ziehen, nicht mit den Pfeiltasten schieben und nur nach Rückfrage löschen; Ziehen bewegt dann die Ansicht. Fixierte Möbel und Geräte bleiben auch in der 3D-Hälfte stehen.

### 4.2 Etagen

Ohne Auswahl zeigt die Seitenleiste die Etagen:

- **Etage hinzufügen** legt eine neue Etage an. Gibt es in Home Assistant Etagen, die noch fehlen, erscheinen sie zur Auswahl.
- **Name**, **Höhe über Boden** und **Raumhöhe** bestimmen, wo die Etage im 3D-Haus liegt und wie hoch ihre Wände sind. **90° drehen** dreht alles auf der Etage um die Mitte der Räume, wenn eine Etage verdreht gezeichnet wurde. **Etage verschieben** rückt alles auf der Etage (Räume, Möbel, Geräte, Außenflächen, freie Wände, Hintergrundbild) um X und Z, wenn eine Etage gegenüber den anderen versetzt sitzt; Dachflächen bleiben. Mit dem Haken **Alle Etagen mitnehmen** wirken Verschieben und Drehen auf das ganze Haus: alle Etagen samt Dachflächen, Außenflächen und Zähler. **Ansicht als Start der Etage** merkt sich, wie die 3D-Ansicht daneben gerade steht – diese Etage öffnet sich dann von dieser Seite und mit diesem Zoom und Bildausschnitt, etwa das Erdgeschoss von vorn und das Obergeschoss von hinten; ↺ nimmt das zurück.
- **Hintergrundbild:** Im Abschnitt **Hintergrund** lädst du ein Foto oder einen Scan deines Grundrisses als Vorlage unter den Plan (Deckkraft einstellbar). Mit **Verschieben, skalieren und drehen** bekommt das Bild im Plan Griffe wie ein Möbel: ziehen verschiebt es, die Ecke unten rechts macht es größer oder kleiner, der runde Griff oben dreht es (mit Umschalt in 15°-Schritten). **Fertig** legt es wieder fest, dann zeichnest du ungestört darüber. **Drehung (°)** dreht es auf den Zehntelgrad genau. Am einfachsten geht der Maßstab mit **📏 Maßstab mit Lineal**: Anfang und Ende einer Strecke im Bild antippen, deren Länge du kennst (eine bemaßte Wand), die echte Länge eingeben – das Bild wird passend skaliert, der erste Punkt bleibt stehen. Ein schiefer Scan wird mit **📐 Gerade ausrichten** gerade: zwei Punkte auf eine Wand im Bild tippen, die waagerecht oder senkrecht sein soll – das Bild dreht sich passend. Reihenfolge: erst gerade ausrichten, dann den Maßstab, dann die Räume darüber zeichnen.
- **Etage in Home Assistant** verknüpft die Etage mit einer HA-Etage. Dann bietet **„… Räume aus HA-Bereichen anlegen“** die Bereiche dieser Etage als Räume an.
- **Nach oben** und **Nach unten** ändern die Reihenfolge, **Etage löschen** entfernt sie samt Räumen.
- **Lücken schließen** führt Räume zusammen, die bis zu 60 cm auseinanderliegen. Das ist praktisch, wenn du Innenmaße gemessen hast. Der Abstand wird zur Innenwandstärke.

### 4.3 Räume zeichnen

- **Rechteck:** In den Plan tippen und ziehen.
- **Freie Form:** Punkt für Punkt setzen. Ein Tipp auf den ersten Punkt oder **Enter** schließt den Raum, **Esc** bricht ab.
- **Ecken verschieben:** Mit **Auswählen** einen Raum antippen und die Ecken ziehen. Das **+** auf einer Kante fügt einen neuen Punkt ein.
- **Fangen:** Ecken rasten am Raster, an Ecken und Kanten anderer Räume und an Fluchtlinien ein. Mit gedrückter **Alt**-Taste bewegst du frei.

Ein ausgewählter Raum zeigt rechts:

- **Name** und **Bereich**: Die Verknüpfung mit einem Home-Assistant-Bereich ist das Wichtigste. Darüber findet NextFloor Lichter, Rollläden, Sensoren und Szenen des Raums.
- **Bodenbelag**: Holz, Eiche, Fliesen, Teppich, Stein oder Beton erscheinen in 3D als dezentes Muster.
- **Ansicht als Start des Raums**: Schalte **3D daneben** ein, dreh und zoom den Raum so, wie er sich zeigen soll, und tippe den Knopf. Tippst du den Raum später in 3D an, fliegt die Kamera genau dorthin – Blickwinkel, Zoom und Bildausschnitt. ↺ nimmt das zurück, dann wird der Raum wieder von oben gezeigt.
- Die Liste **Geräte** des Bereichs, siehe [4.10](#410-geräte).
- **Einrichten …** für fertige Möbelpakete, siehe [4.9](#49-räume-einrichten).
- **Duplizieren** und **Löschen**.

### 4.4 Wände

Wände entstehen automatisch: Jede gemeinsame Kante zweier Räume wird eine Innenwand, jede Außenkante eine Außenwand. Ecken und T-Stöße werden sauber verschnitten. Die Stärken stellst du unter **Einstellungen** ein.

**Einzelne Wände:** Mit dem Werkzeug **Wand** ziehst du eine frei stehende Wand, zum Beispiel einen Raumteiler, der nur durch den halben Raum geht. **Umschalt** hält sie gerade, **Alt** zeichnet ohne Fangen. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Ausgewählt ziehst du die Endpunkte an den Griffen oder die ganze Wand an der Linie. Rechts stellst du **Länge**, **Wandstärke** und **Höhe** ein. In 3D verhält sie sich wie jede Innenwand. Auch in einzelne Wände setzt du mit **Tür & Fenster** Türen und Fenster ein (siehe 4.7). Löschst du die Wand, verschwinden ihre Türen und Fenster mit.

**Wandhöhe:** Jede Wand kann niedriger sein als der Raum, etwa als Brüstung oder Theke. Bei einer einzelnen Wand stellst du die **Höhe** im Formular ein. Bei Räumen (Rechteck und freie Form) wählst du den Raum aus; im Formular steht der Kasten **Wandhöhen** mit jeder Wand des Raums, benannt nach ihren Eckpunkten (z. B. „Wand 2–3“, die Nummern stehen im Plan an den Ecken) und mit ihrer Länge. Fährst du über eine Zeile oder tippst in ihr Feld, leuchtet die Wand im Plan auf. ↥ setzt sie auf volle Raumhöhe zurück. Teilen sich zwei Räume die Wand, gilt die niedrigere Einstellung. Fenster und Türen in einer niedrigen Wand enden an der Wandhöhe. Niedrige Wände erscheinen im Plan heller. Soll eine Wand in einer Flucht zwei Höhen haben (2,5 m neben 1,7 m), teilst du sie mit **✂**: Das Teilstück bekommt eine eigene Zeile und Höhe, der Teilpunkt lässt sich im Feld **Teilpunkt ab Ecke** verschieben (im Plan als Strich markiert), **⨉** fügt die Teile wieder zusammen.

**Wandstärke je Wand:** Im selben Kasten hat jede Wand ein Feld **Dicke (m)**. Voreingestellt ist die Dicke des Hauses (Außen- oder Innenwand, Kapitel 4.4); eine eigene Angabe macht etwa die 36,5-cm-Außenwand neben einer 24er oder die 11,5-cm-Trennwand. Teilen sich zwei Räume die Wand, gilt die dickere Angabe, die Wand bleibt auf der Raumgrenze mittig. ↺ setzt auf die Hausdicke zurück. Fenster und Türen passen sich der Dicke an.

**Keine Wand:** Bei offenen Grundrissen gehören Flur, Küche und Wohnzimmer baulich zusammen, sind in Home Assistant aber getrennte Bereiche. Dafür hat jede Zeile im Kasten **Wandhöhen** den Knopf **Keine Wand**: Die Wand fällt im Grundriss und in 3D ganz weg, auch wenn der Nachbarraum sie teilt. ↥ holt sie zurück. Das Licht folgt dem: Eine Lampe leuchtet durch die weggelassene Wand in den Nachbarraum, als wäre es ein Raum.

**Geteilte Wände:** Teilt ein Nachbarraum eine Wand in mehrere Stücke (etwa zwei kleine Räume an einer langen Wand), bekommt jedes Stück eine eigene Zeile „Wand 2–3 · Teil 1“, „… Teil 2“ mit seiner Länge, und jedes Stück kann seine eigene Höhe haben oder wegfallen.

### 4.5 Einstellungen

Unten in der Seitenleiste klappt **Einstellungen** auf:

| Einstellung | Bedeutung |
|---|---|
| **Außenwand (m)**, **Innenwand (m)** | Wandstärken |
| **Raster (m)** | Schrittweite beim Zeichnen |
| **Nordrichtung** | Grad im Uhrzeigersinn von oben. Wird für das Sonnenlicht gebraucht |
| **Dach** | Kein Dach, Flachdach oder Satteldach, mit Dachneigung und Dachüberstand. Beim Satteldach legt **First** fest, ob der First entlang der langen oder der kurzen Seite läuft (z. B. Reihenhaus). **Dachflächen (frei)** baut das Dach aus mehreren Teilen, siehe [4.19](#419-dach) |
| **Wetter-Entität** | Welche Wetter-Entität das Wetter draußen liefert, siehe [6.2](#62-wetter-draußen) |
| **Wetter-Effekte in 3D** | Welche Effekte gezeigt werden |
| **Startansicht** | Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts so, wie es sich öffnen soll (zum Beispiel von der Gartenseite), und drücke **Aktuelle 3D-Ansicht als Start merken**. 3D-Ansicht, Karte und Kiosk öffnen das Haus dann so – mit Blickwinkel, Zoom und Bildausschnitt –, und auch eine geöffnete Etage wird von derselben Seite gezeigt; **Standard** setzt zurück |
| **Favoriten** | Szenen, Skripte, Automationen, Tasten und Schalter für das Zentral-Menü (Stern) der 3D-Ansicht: Party, Anwesenheitssimulation, Verschattung, Bewässerung. Auswählen mit der Suche, Reihenfolge mit ↑ ↓, ✕ entfernt. Darunter **Eigene Knöpfe** mit Beschriftung, Symbol und Aktion: **Seite öffnen** (Pfad wie `/lovelace/rollos`), **Details einer Entität**, **Dienst aufrufen** (`domain.service` mit Daten als JSON) oder **fire-dom-event** – damit öffnet ein Knopf ein browser_mod-Popup mit deiner eigenen Karte, z. B. `{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:meine-rollo-karte"}}}}` |

### 4.6 Grundriss-Bild als Vorlage

Unter **Vorlage (Grundriss-Bild)** lädst du ein Foto oder einen Scan deines Grundrisses unter die Zeichnung. **Breite im Plan (m)** bringt das Bild auf den richtigen Maßstab, **Deckkraft** macht es dezenter. So zeichnest du die Räume einfach nach.

### 4.7 Türen, Fenster und Garagentore

Mit **Tür & Fenster** tippst du auf eine Wand, eine Raumwand oder eine einzelne Wand. Danach wählst du rechts die **Art**: Tür, Fenster oder Garagentor. Ein Fenster mit Brüstung 0 ist eine Terrassentür. Die Vorlage **Glaswand** setzt eine feststehende, raumhohe Verglasung mit schmalen Sprossen ohne Flügel – für eine gläserne Innenwand oder Trennwand; Breite und Höhe stellst du frei ein, als Art geht sie auch bei jedem Fenster unter **Stil**.

Jede Öffnung hat:

- **Breite**, **Brüstung** und **Höhe**, dazu die Anschlagseite. Mit **Auswählen** schiebst du sie entlang der Wand.
- **Stil:** Zimmertür, Haustür, Haustür mit Glasausschnitt, mit einem oder zwei Seitenteilen, Glastür, Schiebetür oder **Durchbruch (ohne Tür)**. Bei Seitenteilen stellst du darunter ihre **Breite** ein (leer = automatisch), bei zweien links und rechts getrennt; ein einzelnes Seitenteil sitzt gegenüber dem Anschlag, mit **Seitenteil an der Anschlagseite** neben den Bändern. Ein Durchbruch ist nur eine Öffnung in der Wand, ohne Zarge und Türblatt; das Licht fällt immer hindurch. Fenster gibt es als Standard oder mit Sprossen. „Automatisch“ wählt eine Haustür für Außentüren.
- **Flügel:** einflügelig oder zweiflügelig, mit eigenem Kontakt für den zweiten Flügel.
- **Markieren in 3D:** *Wenn offen* (Standard) lässt offene Fenster und Türen warm leuchten. *Wenn geschlossen* dreht das um, etwa für die WC- oder die Kinderzimmertür: Sie leuchtet, solange sie zu ist. Das braucht einen Kontakt; ohne Sensor wird nichts markiert.
- **Ohne Sensor geschlossen zeigen:** Eine Tür ohne Kontakt steht in 3D halb offen, damit man sie als Tür erkennt. Der Haken zeichnet sie geschlossen, etwa für eine Haustür oder ein Carport ohne Sensor.

**Sensoren:**

| Feld | Wirkung in 3D |
|---|---|
| **Rollladen** | Der Rollladen fährt vor dem Fenster – oder vor einer Tür (Haustür, Terrassentür, Schiebetür) – mit der Position der Cover-Entität |
| **Positions-Sensor** | Für Rollläden, deren Position über einen eigenen Sensor kommt, etwa bei Homematic. Bei Bedarf umkehrbar |
| **Vor dem Schalten nachfragen** | Auf, Zu und Positionen fragen im Schnellmenü und im Raumfenster erst nach, und Wischen über das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie. Gut für Tablets, auf denen Rollläden oder das Garagentor sonst versehentlich fahren |
| **Kontakt** | Die Tür schwingt auf, das Fenster öffnet sich |
| **Kippkontakt** | Ein zweiter Sensor, der „gekippt“ meldet |
| **Kippwinkel-Sensor** | Optional: ein Sensor, der den Kippwinkel in Grad liefert (z. B. „Rotation“ eines Shelly BLU Door/Window). Der Flügel kippt in 3D genau so weit; **Winkel für „ganz gekippt“** (Standard 15°), ein **Offset** für den Wert bei geschlossenem Fenster und **andersherum zählen** passen ihn an die Montage an. Ab einem kleinen Winkel gilt das Fenster als gekippt, auch für die Regenwarnung |
| **Kontakt zweiter Flügel** | Für zweiflügelige Fenster und Türen |
| **Garagentor** | Ein Garagentor folgt einer Cover-Entität oder einem Kontakt. Der offene Teil liegt dann unter der Decke |

Rollläden und Kontakte ordnet NextFloor über den Bereich automatisch zu. Du kannst sie jederzeit von Hand ändern.

### 4.8 Möbel

Das Werkzeug **Möbel** öffnet rechts die Bibliothek mit 40 eingebauten Modellen in den Abschnitten Leuchten, Wohnen, Essen, Küche, Schlafen, Bad & Hauswirtschaft und Arbeiten & Sonstiges. Darunter folgen deine installierten Möbel-Packs. Die **Arbeitsplatte** (Küche sowie Arbeiten & Sonstiges) ist eine freie Platte ohne Unterbau, für Lücken in der Küche oder einen selbst gebauten Schreibtisch; ihre **Höhe** ist die Oberkante, voreingestellt 91 cm. Das Suchfeld oben filtert alle Abschnitte und bleibt beim Scrollen stehen; es findet deutsche und englische Namen und den Pack-Namen, mehrere Wörter in beliebiger Reihenfolge („sofa ecke“), Escape leert es. Die Abschnitte klappen auf und zu. Fährst du mit der Maus über einen Eintrag, zeigt eine kleine 3D-Vorschau das Möbel.

**Symbole an den Einträgen:**

- 💡 Eine **Leuchte**: Sie lässt sich mit einem Licht verknüpfen und in 3D schalten.
- ⚡ Ein **elektrisches Möbel**: Es nimmt eine Entität und einen Leistungssensor, etwa ein Fernseher, eine Waschmaschine oder ein Thermostat.

**Platzieren und bearbeiten:**

- Einen Raum antippen, dann einen Eintrag wählen. Das Möbel erscheint im Raum.
- **Ziehen** verschiebt es. In der Nähe einer Wand dreht es sich mit dem Rücken zur Wand und rastet bündig ein. **Alt** schiebt frei.
- Der **Griff vor dem Möbel** dreht es in 15°-Schritten, die **Ecken** ändern die Größe.
- Rechts stellst du Breite, Tiefe, Höhe, Drehung und **Höhe über Boden** ein. **Spiegeln** vertauscht links und rechts – das L-Sofa andersherum, der Schrank mit der Tür auf der anderen Seite; der Punkt steht auch im Rechtsklick-Menü und in der Möbelleiste der 3D-Ansicht. Mit der Höhe über Boden hängst du einen Netzwerkschrank oder ein Regal an die Wand oder stellst einen Trockner auf die Waschmaschine. Sie zählt immer vom Boden: Ein Oberschrank steht von sich aus auf 1,45 m, ein Wand-Fernseher mittig auf 1,3 m; du kannst beide höher oder tiefer setzen. **Höhe automatisch** setzt sie zurück.
- **Zustand von:** Jedes Möbel kann eine Entität zeigen, die an, belegt oder zu Hause meldet – dann leuchtet seine Oberseite: das Bett mit Belegungsmatte, der Sessel, die Sauna. Eine zweite Entität beleuchtet die andere Hälfte (links/rechts, beim Hochbett unten/oben). Lampen, Energiegeräte und Bildschirme haben ihre eigenen Felder dafür.
- **Duplizieren** und **Löschen** stehen ebenfalls dort.

![Ein Möbel ausgewählt](images/editor-furniture.jpg)

### 4.9 Räume einrichten

**Einrichten …** an einem Raum stellt ein ganzes Möbelpaket an die Wände: Küchenzeile, Küche in L-Form, Bad, Schlafzimmer, Wohnzimmer, Esszimmer, Büro, Kinderzimmer oder Flur. Leuchten verbinden sich dabei mit den Lichtern des Bereichs. Danach passt du einzelne Möbel an. **Strg+Z** nimmt das ganze Paket zurück.

### 4.10 Geräte

Ein Raum mit Bereich listet rechts alle Geräte dieses Bereichs, nach Gerät gruppiert. Die Hauptentität steht vorn, weitere wie LED-Anzeigen oder Effekte stehen hinter **„+n mehr“**. Ein Suchfeld hilft bei großen Bereichen.

Sensoren erscheinen, wenn sie etwas für den Raum messen: Temperatur, Luftfeuchte, CO₂ und Luftqualität, Leistung und Energie, Gas- und Wasserzähler, Helligkeit und Luftdruck. Zähler ohne Geräteklasse zählen mit, wenn ihre Einheit passt (m³, l, kWh, lx). Akku- und Signalsensoren bleiben außen vor. Der Wert erscheint mit den Nachkommastellen, die in Home Assistant eingestellt sind. Fehlt ein Gerät, prüfe in Home Assistant, ob es dem Bereich des Raums zugeordnet ist.

Über der Liste wählst du die Quelle: **Dieser Bereich** (Standard), **Andere Bereiche** (die Geräte der übrigen Bereiche, nach Bereich gruppiert; steht ein Gerät schon in einem anderen Raum, steht das dabei, und **Platzieren** holt es hierher) oder **Ohne Bereich** (etwa Template-Lichter, Gruppen und Helfer; hier zählt jeder Sensor mit Zahlenwert und Einheit). Der Bereich in Home Assistant ändert sich dabei nicht.

**Raumklima:** Im Raumformular legst du unter **Raumklima** fest, welche Sensoren Temperatur, Luftfeuchte und CO₂ des Raums liefern (Heatmap und Raumfenster). *Automatisch* nimmt die Sensoren des Bereichs und die im Raum platzierten, lässt aber Gerätetemperaturen weg, etwa von einem 3D-Drucker oder den Vorlauf einer Wärmepumpe. *Keiner* blendet den Wert aus.

- **Platzieren** setzt ein Gerät in den Raum. **Alle … platzieren** unter der Liste setzt nach einer Rückfrage alle Hauptgeräte auf einmal; **Rückgängig** (Strg+Z) nimmt sie in einem Schritt zurück.
- Lichter werden dabei als Leuchten aus der Bibliothek gesetzt, damit sie in 3D leuchten.
- **☆** nimmt ein Gerät ins Raumfenster der 3D-Ansicht auf, ohne es in den Plan zu setzen. **👁** blendet ein Gerät des Bereichs im Raumfenster aus (durchgestrichen in der Liste, 🙈 holt es zurück) – für Entitäten, die dort nur stören. **Aa** blendet nur den Zustand eines Geräts im Raumfenster aus (∅ zeigt ihn wieder), etwa bei einem Rollladen ohne Rückmeldung; ein reines „unbekannt“ lässt das Raumfenster bei Schaltern, Rollläden und Lampen ohnehin weg.
- Ein platziertes Gerät ziehst du im Plan an seinen Platz.

Ein ausgewähltes Gerät hat:

- **Höhe des Symbols**, **Drehung** und bei Lichtern die **Montage**: Decke, Boden, Tisch oder Wand.
- **Vor dem Schalten nachfragen:** Beim Antippen in 3D, im Schnellmenü und im Raumfenster erscheint erst eine Rückfrage. Das schützt etwa den Server-Schalter vor einem versehentlichen Tipp. Ein Doppeltipp auf den Raum lässt dieses Gerät aus.
- **Symbol in 3D:** *Automatisch* folgt dem Schalter Keine / Wichtige / Alle der 3D-Ansicht. *Immer zeigen* zeigt das Symbol auch bei „Wichtige“, etwa für einen Temperatursensor. *Ohne Watt* lässt die Leistung weg, etwa an einer Steckdose. *Ausblenden* zeigt nie ein Symbol. Bei „Keine“ bleiben alle Symbole aus.
- **Eigenes Symbol:** Der Name eines Material-Design-Icons wie in Home Assistant, etwa `mdi:thermometer` oder `mdi:water-alert`, ersetzt das Symbol nach Geräteart im Pin. Leer lassen = Standard. Gilt genauso für elektrische Möbel.
- **Als Möbel darstellen:** Ersetzt den Pin durch ein passendes Möbel an derselben Stelle, schon mit dem Gerät verknüpft – ein Lautsprecher oder Smart Display für einen Media Player, eine Leuchte für ein Licht, ein Heizkörper für ein Thermostat, der Saugroboter für einen Sauger. Die Liste zeigt nur Möbel, die zur Geräteart passen. Im Möbelformular holt **Wieder als Geräte-Pin** den einfachen Pin zurück; Strg+Z nimmt beides zurück.
- **Eigener Name** und **Name unter dem Symbol in 3D zeigen:** Mit Haken steht der eigene Name klein unter dem Pin – drei Thermometer im Garten („Pool Wasser“, „Pool Luft“, „Gewächshaus“) bleiben so unterscheidbar. Der Haken erscheint, sobald ein eigener Name eingetragen ist; Möbel mit eigenem Namen haben ihn genauso. Die Karten-Option `marker_names: true` zeigt die Namen aller Geräte mit eigenem Namen.
- **In Raummitte** und **Entfernen**.

### 4.11 Leuchten

Leuchten sind Möbel mit einem verknüpften Licht. Es gibt Deckenleuchte, Einbauspot, Aufbau-Spot, LED-Panel, Pendelleuchte, Stehlampe, Deckenfluter, Tischlampe, Wandleuchte, LED-Streifen, Wegleuchte und Garten-Spot.

- Das 3D-Modell leuchtet in Farbe und Helligkeit des Lichts. Boden und Wände des Raums werden mit beleuchtet, zwei farbige Deckenleuchten mischen sich dazwischen. In den Nachbarraum fällt das Licht nur durch Türen.
- Farbeffekte wie ein Farbwechsel werden in 3D animiert.
- Tischlampen stehen auf dem Möbel darunter, Wandleuchten und LED-Streifen rasten an der Wand ein, bei Pendelleuchten ist die Höhe die Abhängung unter der Decke.
- **Höhe über Boden:** Wandleuchten hängen von sich aus auf 1,75 m, LED-Streifen direkt unter der Decke. Im Formular stellst du für beide eine eigene **Höhe über Boden** ein, etwa für einen Streifen unter den Hängeschränken oder hinter dem TV-Board. **Höhe automatisch** setzt sie zurück. Ein Streifen unter 1 m Höhe (Sockelleiste, hinter dem Schrank) strahlt nach oben an die Wand, höher montierte strahlen nach unten. Ein Streifen unterhalb der Schnitthöhe bleibt auch bei geschnittenen Wänden sichtbar. **Neigung um die Länge** legt den Streifen an eine Dachschräge oder kippt ihn zur Seite (90° = die Leuchtfläche zeigt seitlich), **Senkrecht** stellt ihn hochkant: Dann läuft er von der Höhe über Boden nach oben, am Türrahmen oder als Lichtsäule, und leuchtet rundum.
- **Farbe und Helligkeit von:** Schaltet ein Relais (Shelly, Schaltaktor) die Lampe, während die Leuchte selbst Farbe und Helligkeit kennt, kommt An/Aus vom Schalter und die Farbe von dieser zweiten Entität.
- **Leuchtstärke in 3D (%):** Wie kräftig die Leuchte in 3D leuchtet. Unter 100 % dämpft helle LED-Streifen, damit der Raum nicht überstrahlt, über 100 % lässt eine schwache Lampe stärker leuchten. Gilt auch für Lichter, die als Gerät platziert sind; in Home Assistant schaltet es nichts.
- Statt eines Lichts geht auch ein Schalter, etwa ein Relais für das Deckenlicht.
- Mehrere Leuchten dürfen demselben Licht folgen.

**Spots setzen** an einem Raum legt ein Raster aus Leuchten an, die alle einem Licht folgen, etwa sechs Einbauspots an einem Dimmer. Spalten und Reihen wählst du vorher.

### 4.12 Elektrische Möbel

Fernseher, Medienwand, Wohnwand mit TV (die Wohnwand ohne TV ist eine Leuchte: Vitrinen und LED-Leisten leuchten mit der verknüpften Lampe), Schreibtisch mit Monitor, Waschmaschine, Trockner, Spülmaschine, Heizkörper, Saugroboter und viele Pack-Möbel lassen sich mit Entitäten verknüpfen:

- **Gerät** oder **Fernseher (Media-Player oder Steckdose)**: Als Gerät geht auch ein **Status-Sensor**, etwa der Druckstatus eines 3D-Druckers (Bambu Lab u. a.). Das Möbel gilt dann als aktiv, solange der Status „running“, „printing“, „prepare“ oder ähnlich meldet.  Ein Fernseher leuchtet, solange er läuft. Ein älterer Fernseher an einer smarten Steckdose nimmt einfach deren Schalter; der Bildschirm leuchtet, solange die Steckdose an ist, und ein Tipp schaltet sie. Waschmaschine, Trockner und Spülmaschine leuchten, solange sie arbeiten. Ein Heizkörper mit Thermostat glüht beim Heizen.
- **Leistungssensor (W)**: Das Möbel zeigt seine Watt.
- **Vor dem Schalten nachfragen** und **Symbol in 3D** wie bei Geräten.
- **TV-Bildschirme** bei Fernsehern: siehe [6.3](#63-tv-bildschirme).

Steht dort „automatisch“, sucht NextFloor die passende Entität im Bereich selbst.

### 4.13 Kameras

Kameras platzierst du wie jedes Gerät. Danach:

- **Montage:** Wand mit Blickrichtung oder Decke als Dome, der rundum schaut.
- Im Plan zeigt ein **Kegel**, wohin die Kamera schaut. Der **Griff an der Spitze** dreht die Kamera und setzt zugleich die Reichweite.
- **Sichtwinkel (°)**, **Reichweite (m)** und **Neigung nach unten (°)** stellst du auch als Zahl ein.
- **Sichtkegel in 3D zeigen** lässt sich je Kamera abschalten. In 3D endet der Kegel an der ersten Wand: Eine Innenkamera sieht nicht durch die Wand in den Nachbarraum.

In 3D hängt die Kamera als kleines Modell an der Wand oder Decke, ihr Sichtfeld liegt als Kegel auf dem Boden. Meldet ein Bewegungs- oder Präsenzsensor der Kamera Bewegung, wird der Kegel rot.

### 4.14 Stellplätze und Fahrzeuge

Das Möbel **Stellplatz** in der Gruppe Stellplätze markiert, wo ein Auto steht: in der Garage, in der Einfahrt oder irgendwo auf dem Grundstück.

- **Sensor „Auto anwesend“:** ein `binary_sensor`, `device_tracker` oder ähnliches. Solange er ein Auto meldet, steht das Fahrzeug da.
- **Fahrzeug:** das Modell aus dem Pack „Fahrzeuge“.
- **Fahrzeugtyp-Sensor** (optional): Liefert ein Sensor, welches Auto da ist, etwa aus einer KI-Kameraauswertung, ordnest du jedem Zustand ein Modell zu.
- **Größe (%)** passt das Modell an den Platz an. Ist das Fahrzeug höher als der Raum, warnt der Editor.

### 4.15 Saugroboter

Das Möbel Saugroboter wird mit der `vacuum`-Entität verknüpft. Saugt der Roboter, fährt er in 3D in Bahnen durch den Raum seiner Station und kehrt danach zurück. Die Bahn ist simuliert, weil Home Assistant die echte Position meist nicht kennt.

Viele Roboter melden aber den Raum, den sie gerade saugen, zum Beispiel Roborock und Dreame mit einem Sensor „Aktueller Raum“. NextFloor findet diesen Sensor am Gerät des Roboters von selbst; im Feld **Aktueller Raum (Sensor)** kannst du auch einen anderen wählen. Der gemeldete Name wird mit dem Raumnamen und dem Home-Assistant-Bereich verglichen, Groß- und Kleinschreibung und die Schreibweise von Umlauten spielen keine Rolle („Kueche“ passt zu „Küche“). Wechselt der Roboter den Raum, erscheint er in 3D dort und fährt seine Bahnen. Passt kein Raum, bleibt er im Raum seiner Station.

Seine Bahnen machen einen Bogen um Möbel, die auf dem Boden stehen: Schränke, Sofas, Betten, Küchenzeilen und Geräte. Unter Tischen, Schreibtischen, Stühlen, Hockern und Bänken fährt er durch, ebenso über Teppiche und unter hängenden Möbeln wie Oberschränken.

### 4.16 Treppen und Bodenöffnungen

- Die **Treppe** aus der Bibliothek steigt von der markierten Vorderkante nach hinten an. Reicht sie bis zur Etage darüber, schneidet sie dort die Treppenöffnung in die Decke.
- Mit dem Werkzeug **Bodenöffnung** ziehst du ein Loch direkt in den Boden einer Etage auf, etwa über dem Treppenaufgang oder für eine Galerie. Von oben sieht man hindurch. Die Öffnung muss ganz in einem Raum liegen. Mehrere Öffnungen dürfen sich überlappen, so entsteht zum Beispiel eine L-Form.
- Weitere Treppen und Geländer bringt das Pack **Treppen & Geländer**.

### 4.17 Außenflächen und Außenleuchten

Mit **Außen** ziehst du Rasen, Terrasse, Weg, Einfahrt, Pool, Beet, Hecke oder Zaun auf. Eine ausgewählte Außenfläche änderst du an ihren Ecken; ein Rechteck bleibt dabei ein Rechteck. Hecke und Zaun bekommen im Formular eine **Höhe** (Thuja-Sichtschutz 2,5 m, Beeteinfassung 0,5 m); **Umrisslinie zeigen** ohne Haken lässt die Leuchtlinie am Rand weg, etwa bei einem Grundstück aus mehreren Rasenflächen. **Höhenversatz** senkt eine Fläche unter den Boden oder hebt sie an – die Einfahrt hinunter zur tieferen Garage, die erhöhte Terrasse; Leuchten darauf folgen mit. **Gefälle** neigt eine Fläche: Höhenunterschied in Metern und die Richtung, in die sie fällt (die hohe Kante liegt auf dem Höhenversatz) – eine Einfahrt, die zur Straße abfällt, ein Hang im Garten; Zaunpfosten und Leuchten stehen auf der schrägen Fläche. **Wildfläche** ist eine Art für ungemähte Ecken. **Aus Flächen darunter ausschneiden** macht eine Fläche zum Loch in jeder vorher gezeichneten Fläche, in der sie ganz liegt – ein Teich oder eine Wildfläche mitten in einem einzigen großen Rasen. **Pergola / Rahmen** zeichnet Eckpfosten, Balken und Sparren in der eingestellten Höhe, mit **X-Verstrebung** an den Seiten – für Pergolen, Carport-Gerüste oder den Unterbau eines Rolldachs. Zaun und Pergola können **offen** bleiben: Die Kante vom letzten zum ersten Punkt fehlt dann, der Zaun lehnt am Haus. Bäume, Sträucher und Gestrüpp kommen als Möbel aus dem Pack **Garten & Terrasse** (ab Release 3: Eiche, Linde, Birke, Ahorn, Obstbaum, Fichte, Kiefer, Thuja, Strauch, Blühstrauch, Gestrüpp, Baumgruppe); Breite und Höhe im Möbelformular bestimmen Krone und Wuchs. Wegleuchten, Garten-Spots und Außen-Wandleuchten beleuchten die Außenflächen und die Fassade.

### 4.18 3D daneben

**3D daneben** zeigt die 3D-Ansicht rechts neben dem Plan. Jede Änderung erscheint dort nach einem Augenblick.

- Die **Leiste zwischen Plan und 3D** ziehst du, um das Verhältnis zu ändern. Der Browser merkt sich die Einstellung.
- Oben in der 3D-Hälfte schaltest du zwischen **Wände hoch** und **Schnitt**.
- Ein Möbel oder Gerät kannst du auch in der 3D-Hälfte antippen und ziehen. Unten erscheint dann eine Leiste mit Breite, Tiefe, Höhe, Höhe über Boden, Drehung und Löschen.
- Die Seitenleiste klappt neben der 3D-Ansicht ein. Am rechten Rand öffnen kleine Knöpfe sie wieder, das Stecknadel-Symbol hält sie offen.

### 4.19 Dach

Ein einfaches Haus bekommt unter **Einstellungen → Dach** ein Flach- oder Satteldach über das ganze oberste Geschoss. Für alles andere – ein Haus in L- oder T-Form, ein Wohnhaus mit Scheune, ein Anbau mit Pultdach, ein Dach, das auf einer Seite tief herunterzieht – baust du das Dach aus **Dachflächen**.

- Wähle unter **Dach** die Option **Dachflächen (frei)** oder das Werkzeug **Dach**. Beim ersten Mal schlägt NextFloor die Dachflächen aus deinen Räumen vor: je Etage die Teile, über denen keine höhere Etage liegt, jeweils mit Satteldach. Danach passt du sie an.
- Im Werkzeug **Dach** ziehst du eine neue Dachfläche im Plan auf. Antippen wählt eine aus, ziehen verschiebt sie, die Ecken ändern die Größe. Oben wählst du die Etage, deren Räume im Plan liegen. Daneben öffnet sich die 3D-Ansicht mit dem ganzen Haus, so siehst du jede Änderung sofort.
- Mit dem Schloss **🔓 Fixieren** (oder der Taste **L**) sitzt eine fertige Dachfläche fest und verrutscht nicht mehr beim Antippen; **🔒 Grundriss** sperrt alle Dachflächen mit.
- Jede Dachfläche hat eine **Form** – Sattel, Walm, Krüppelwalm (oben abgewalmter Giebel), Zelt (vier Flächen zur Spitze), Mansard (steil unten, flach oben), Pult, Flach und Attika (Flachdach mit Brüstung) – und eine **Firstrichtung** (↔ oder ↕).
- **Traufe** und **Neigung** stellst du für beide Seiten getrennt ein. Alle Höhen zählen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter, so entsteht etwa ein Abschleppdach über einem niedrigen Anbau. Ein Pultdach steigt von der ersten Seite an; **Seiten tauschen** dreht es um.
- **Wandoberkante** ist die Höhe, auf der die Wände unter dem Dach enden. Eine neue Dachfläche übernimmt sie von den Räumen darunter, egal welche Etage der Plan gerade zeigt. Von dort werden Giebel und Drempel bis unter das Dach hochgezogen, so ist auch der Raum unter einem Pultdach geschlossen.
- **Sitzt auf Etage** zeigt, zu welcher Etage die Dachfläche in der 3D-Ansicht gehört, und setzt sie auf die Wandoberkante einer anderen Etage – Wandoberkante und Traufen wandern mit. Das hilft, wenn eine neue Dachfläche auf der falschen Etage gelandet ist, etwa über einem Obergeschoss mit Treppenloch in der Mitte.
- **Flachdach als freie Form:** Bei einem Flachdach gibt es den Knopf **Umriss des Geschosses übernehmen** – die Fläche bekommt den Umriss der Räume des angezeigten Geschosses (auch L- oder Z-förmig), eine Fläche ohne Kanten statt mehrerer Rechtecke. Die Ecken lassen sich danach im Plan ziehen; **Zurück zum Rechteck** löscht die Form.
- **Gauben:** Im Formular einer Dachfläche fügt **+ Gaube** eine Gaube auf der gewählten Seite ein – 2 m breit, Front an der Traufwand, Traufe 1,4 m über der Dachtraufe, Satteldach, so tief, dass ihr First auf die Schräge trifft. Eine Gaube ist eine kleine Dachfläche: verschieben, Breite, Höhen und Form (Sattel, Pult) änderst du wie bei jeder anderen. Die Hauptfläche öffnet sich darunter, die Wangen schließen seitlich ab, und die Wand des Dachgeschosses steigt unter der Gaube bis zu ihrer Traufe – dort setzt du mit **Tür & Fenster** das Gaubenfenster.
- **Zwerchgiebel (Drei-Giebel-Haus):** Ein Giebel, der aus der Traufseite vortritt, ist eine breite Gaube, deren Traufe auf der Wandoberkante liegt: **+ Gaube**, dann Breite ziehen (z. B. 3,4 m) und **Traufe** auf die Wandoberkante setzen. Die Tiefe passt sich von selbst an – die Gaube reicht genau so weit, bis ihr First auf die Schräge trifft, und das Hauptdach öffnet sich nur dort, wo das Gaubendach darüber liegt (Kehlen). Die Dachgeschoss-Wand unter dem Zwerchgiebel steigt bis in den Giebel, das Fenster darin setzt du mit **Tür & Fenster**.
- **Dachschrägen (Kniestock):** Liegt die Wandoberkante unter der Deckenhöhe des Geschosses darunter (auch wenn die Schräge schon im Geschoss darunter beginnt: dann enden dessen Wände an der Traufseite ebenfalls an der Schräge) – zum Beispiel 0,9 m über dem Boden des Dachgeschosses –, enden dessen Wände an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenwände an der Schräge. Fenster passen dann nur, wo die Wand hoch genug ist (im Giebel); an der Traufseite nimmst du Dachfenster. Im Grundriss zeigen gestrichelte Linien, wo unter der Schräge noch 1,5 m und 2 m Kopfhöhe bleiben.
- Wo eine Dachfläche an einen höheren Teil des Hauses stößt, etwa ein Pultdach an der Hauswand, entfällt dort der Überstand; das Dach endet an der Wand.
- Unten im Formular steht die **Firsthöhe**. Dachflächen dürfen sich überschneiden: Das niedrigere Dach läuft unter das höhere, wie bei einem echten Anbau.
- **Neu aus den Räumen erzeugen** ersetzt alle Dachflächen durch einen neuen Vorschlag, **Zurück zu einem Dach** schaltet auf das einfache Dach zurück.
- **Überdachung:** Für ein Terrassendach oder einen Carport ziehst du eine Dachfläche über eine Fläche ohne Raum. Sie wird automatisch zur Überdachung: ein flaches Pultdach auf 2,4 m, getragen von Pfosten und Balken statt Wänden, mit durchsichtiger Dachfläche. An der Hauswand liegt sie auf. Den Schalter **Überdachung** gibt es auch im Formular jeder Dachfläche.

![Das Werkzeug Dach mit einer ausgewählten Dachfläche](images/editor-roof.jpg)

#### Dachfenster

Unter den Dachflächen legt **+ Dachfenster** ein Fenster in eine Dachfläche (Standard 78 × 118 cm). Es lässt sich im Grundriss verschieben, auch auf eine andere Dachfläche, und hat wie ein normales Fenster **Rollladen**, **Kontakt** und **Kippkontakt**: Offen klappt der Flügel oben angeschlagen nach außen, gekippt ein Stück, und der Rollladen fährt von oben über die Scheibe.

Zu jedem Dachfenster gehören ein **Name** (optional), **Rollladen**, **Kontakt** und **Kippkontakt** – und ein **Fenstermotor**: Velux, Roto oder Fakro melden die Fensterstellung als Cover, der Flügel öffnet in 3D so weit, wie der Motor steht. Offen oder gekippt leuchtet der Rahmen warm wie bei einem Wandfenster. Liegt das Fenster in einer Dachfläche, schneidet es ein Loch in die Schräge, so sieht man aus dem Dachgeschoss hinaus.

### 4.20 Energie: Solarfelder

Im Werkzeug **Energie** lassen sich nur Solarfelder und Energiegeräte verschieben, im Grundriss wie in 3D; Räume und Möbel sind dort gesperrt, ein Hinweis oben im Grundriss sagt das. Das Werkzeug sammelt alles rund um Energie im Haus, zuerst die **Solarfelder** (Zähler, Heizung und Wärmepumpe folgen). **+ Solarfeld** legt ein Feld auf die sonnigste freie Dachfläche, so groß, wie es passt. **+ Frei aufgeständert** stellt ein Feld auf Gestellen neben das Haus, etwa in den Garten oder auf ein flaches Garagendach. **+ An der Wand** hängt eine Reihe Module an die sonnigste Außenwand der angezeigten Etage (Fassade, Balkon).

Felder lassen sich im Grundriss und in der **3D-Ansicht daneben** mit der Maus verschieben, auch auf eine andere Dachfläche oder Wand. Dachfenster genauso, im Werkzeug **Dach**. Die Module liegen in der Neigung der Dachfläche, auf einem Flachdach stehen sie aufgeständert. Das klappt beim einfachen Sattel- und Flachdach und auf allen Dachabschnitten (Satteldach, Walmdach, Pultdach, Flachdach). Bei Walm- und Zeltdach stehen auch die beiden dreieckigen **Walmseiten** zur Wahl, etwa die Südseite eines Walmdachs mit Ost-West-First; die Felder werden zur Spitze hin schmaler.

| Feld | Wirkung |
|---|---|
| **Dachfläche** | Die Fläche mit Himmelsrichtung und Neigung, zum Beispiel „Hauptdach · Süd · 35°“ |
| **Name** | Zum Beispiel „Strang 1 Süd“; mehrere Felder für mehrere Stränge oder Dachflächen |
| **Reihen** und **Module pro Reihe** | Größe des Feldes. Eine Liste wie **„4, 4, 3“** gibt jeder Reihe ihre eigene Länge (von der Traufe aus), kürzere Reihen sitzen links, mittig oder rechts. Module, die über die Fläche hinausragen würden, fallen weg |
| **Module einzeln an/aus** | Im Grundriss einzelne Module wegtippen oder wieder dazunehmen, etwa um einen Schornstein oder ein Dachfenster herum |
| **Full Black** / **Blau** | Optik der Module: ganz schwarz (Standard) oder klassisch blau |
| **Modulbreite** / **Modulhöhe** | Größe eines Moduls im Hochformat, Standard 1,13 × 1,72 m |
| **Modulleistung (Wp)** | Spitzenleistung eines Moduls, Standard 400 – bestimmt die kWp des Feldes und des Strangs und wie hell die Module im Energiefluss funkeln |
| **Strang** | Felder, die zusammen verschaltet sind, auch auf verschiedenen Dächern: etwa 5 Module auf dem Haus und 5 auf der Garage in „Strang 1“. Der Strang hat einen Namen, einen PV-Sensor und einen Wechselrichter (unter **Geräte** angelegt) |
| **PV-Leistung dieses Feldes** | Der Leistungssensor seines Strangs, für den Energiefluss |
| **Hochformat** / **Querformat** | Lage der Module (1,13 × 1,72 m) |
| **Abstand vom Rand** / **von der Traufe** | Position des Feldes. Im Grundriss lässt es sich mit der Maus verschieben, auch auf eine andere Dachfläche; über den Rand der Fläche hinaus rutscht es nicht |
| **Neigung der Aufständerung** | Flachdach und Garten: Winkel der Gestelle, dazu die Richtung |
| **Frei aufgeständert** | Das Feld steht auf Gestellen, frei verschiebbar. **Höhe der Aufstellfläche** hebt es an, z. B. 2,8 m auf ein Garagendach (0 = Boden). **Drehung** richtet die Reihen aus, ebenso die Knöpfe ↺/↻ 15° und der Dreh-Griff im Grundriss; das Feld dreht sich dabei um seine Mitte |
| **Wand** | Module hängen an einer Außenwand; statt „Abstand von der Traufe“ gibt es die **Höhe über dem Boden**. **Neigung von der Wand** stellt sie schräg: oben abstehend oder unten abstehend, bis 90° als Vordach. Die Etagen-Knöpfe oben wählen, an welcher Etage du arbeitest |
| **Fläche füllen** | Legt so viele Module auf die Fläche, wie passen |

Unter dem Feld steht die Leistung, gerechnet mit 400 W je Modul. Die Grundriss-Sperre hält Solarfelder nicht fest; mit **🔓 Fixieren** im Formular lässt sich ein Feld (und genauso ein Dachfenster) aber einzeln festsetzen. **Geräte:** Wechselrichter, Stromspeicher und Wallbox legst du ebenfalls im Werkzeug **Energie** an, unter **Geräte**, auf der oben gewählten Etage. Die Wallbox kommt von selbst in die Garage, Wechselrichter und Speicher in einen Technikraum (HWR, Keller …), jeweils an eine Wand ohne Tür oder Tor, und der Grundriss springt hin. Ein Tipp auf ein Gerät in der Liste zeigt es im Grundriss. Dort trägt jedes Gerät im Werkzeug Energie eine runde Markierung mit Symbol (⚡ Wechselrichter, 🔋 Speicher, 🔌 Wallbox), an der man es anfasst und verschiebt, auch wenn darüber ein Solarfeld auf dem Dach liegt. Mit einem Leistungssensor zeigen sie ihre Watt. Der **Stromspeicher** zeigt mit dem Feld **Ladestand** zusätzlich seinen Ladestand, etwa „64 % · ▲ 1,5 kW“ (▲ lädt, ▼ entlädt), die **Wallbox** mit einem **Status**-Sensor „lädt · 11 kW“ oder „angesteckt“.

**Stromzähler und Netzanschluss:** Der **Stromzähler** ist das vierte Energiegerät; er bekommt den Netzsensor (W, + = Bezug) und zeigt „Netzbezug 420 W“ oder „Einspeisung 900 W“. Der **Netzanschluss** markiert, wo die Stromleitung vom Anbieter auf das Grundstück kommt, etwa am Ende der Einfahrt; er wird zuerst knapp außerhalb der Wand angelegt, die dem Zähler am nächsten liegt, und lässt sich im Grundriss verschieben. Jedes Gerät hat im Formular ein Feld **Name** („Wechselrichter Nord“), das in Liste, Formular und an den Pins in 3D erscheint, und Wechselrichter und Speicher ein **Modell**: Wandgerät, schmal und hoch oder Hybrid; Turm, Wandspeicher oder kompakter Balkonspeicher. Mehrere Wechselrichter und Speicher gehen, zum Beispiel eine große Anlage und ein Balkonkraftwerk: Jeder bekommt seinen eigenen Sensor.

**Energiebilanz:** Netz, Solar und Akku holt NextFloor von den Geräten im Plan (Zähler, Wechselrichter, Speicher; mehrere werden zusammengezählt, Ladestände gemittelt). Im Abschnitt **Energiebilanz** wählst du andere Sensoren, drehst Vorzeichen um und gibst den Hausverbrauch an. **Aus dem Energie-Dashboard übernehmen** holt die Sensoren, die du im Energie-Dashboard von Home Assistant eingetragen hast: zu jeder Energie-Statistik den Leistungssensor desselben Geräts. Prüfe danach die Vorzeichen.

Was du hier einrichtest, treibt den Energiefluss in 3D an, siehe [6.4](#64-energiefluss).

---

## 5. Die 3D-Ansicht

![Eine Etage](images/view-floor-eg.jpg)

### 5.1 Haus, Etage, Raum

Die 3D-Ansicht hat drei Ebenen:

1. **Das ganze Haus** mit einer Beschriftung je Etage: Räume, Lichter an, offene Fenster.
2. **Eine Etage:** Die Etagen darüber fliegen weg, die darunter bleiben je nach Einstellung abgedunkelt, gestapelt oder ausgeblendet.
3. **Ein Raum:** Die Kamera fliegt hinein, das Raumfenster öffnet sich.

**Navigieren:**

- Eine Etagenbeschriftung oder einen Raum antippen geht eine Ebene tiefer.
- **Doppeltipp** auf eine freie Stelle, **Esc** oder **Zurück** geht eine Ebene höher.
- Ziehen dreht die Ansicht, zwei Finger oder das Mausrad zoomen.
- Links wechseln die **Etagen-Miniaturen** direkt zu einer Etage. Der kleine Pfeil darüber klappt sie zu schlichten Etagen-Knöpfen ein (das Gerät merkt sich das), in der Karte schaltet `floor_thumbs: false` sie ab.
- Oben stehen Knöpfe für alle Etagen und für die Räume der offenen Etage.

### 5.2 Die Schalter unten

| Schalter | Wirkung |
|---|---|
| **Wände hoch** / **Schnitt** | Wände in voller Höhe, die vorderen als getöntes Glas, oder alle Wände in Hüfthöhe geschnitten – hohe Möbel (Schrank, Treppe, Hochschrank) werden mitgeschnitten, damit sie nichts dahinter verdecken |
| **Auseinander** / **Gestapelt** | In der Hausansicht: Etagen auseinandergezogen oder aufeinander |
| **Dach bleibt** | In der Hausansicht: Das Dach bleibt beim Heranzoomen liegen, statt sich zu heben und auszublenden (im Editor gilt das im Werkzeug Dach und Energie immer) |
| **Abgedunkelt** / **Gestapelt** / **Einzeln** | Bei einer offenen Etage: Was mit den Etagen darunter passiert |
| **Normal** / **Temp.** / **Feuchte** / **CO₂** / **Werte** | Heatmap: Böden in der Farbe des Raumwerts; **Werte** färbt nichts, sondern schreibt Temperatur, Feuchte und CO₂ als Zahlen unter die Raumnamen |
| **Raumnamen** | Namen der Räume ein- oder ausblenden |
| **Spur** | Bewegungsspur, siehe [6.1](#61-kameras) |
| **Wetter** | Wetter am Haus, siehe [6.2](#62-wetter-am-haus) |
| **≡ / ↔** (rechts in der Etagen- und Raumleiste) | Die Leiste oben auf mehrere Zeilen umbrechen, wenn viele Räume nicht in eine Zeile passen, oder zurück in eine Zeile; in einer Zeile scrollt sie seitlich, am PC auch mit dem Mausrad. In der Hausansicht steht vor den Räumen jeder Etage ihr Name |
| **⚙** (nur auf dem Handy, oben neben der Version) | Klappt die Ansichtsoptionen Qualität, Look, Symbole und FPS auf und wieder zu; so braucht der Kopf auf dem Handy nur zwei Zeilen |
| **Auge** (unten links, neben der Lupe) | Blendet alles aus, was nicht die 3D-Ansicht ist: Kopfzeile, Etagen- und Raumleiste, Energiewerte, Etagenbilder, Schalter. Übrig bleibt die Bühne – auf dem Handy die halbe Bildschirmhöhe mehr. Ein Tipp aufs Auge holt alles zurück; ein Raum lässt sich weiter antippen. Das Gerät merkt sich die Wahl |

![Schnittansicht](images/view-cut.jpg)

Oben rechts stehen:

| Schalter | Wirkung |
|---|---|
| **Auto** / **Tablet** / **Hoch** | Qualitätsstufe. Tablet lässt Muster, Schatten und Halos weg und wird auf Fire-Tablets automatisch gewählt. Hoch zeigt zusätzlich Lichtkegel unter Spots |
| **Neon** / **Blueprint** / **Tag** | Der Look. Das Farbfeld daneben setzt eine **eigene Akzentfarbe**: Im Neon-Look nehmen Linien und Leuchtkanten sie an, die Knöpfe und Pins in jedem Look; ↺ bringt das Cyan zurück |
| **Keine** / **Wichtige** / **Alle** | Welche Gerätesymbole erscheinen. Wichtige zeigt nur Geräte ohne eigenes 3D-Modell und Werte wie Watt oder die laufende App |
| **FPS** | Bildrate, langsamstes Bild und Grund für jedes gezeichnete Bild. Im Ruhezustand steht dort 0 B/s |

Ganz rechts in der Kopfzeile steht die installierte Version (z. B. v1.11.0); der Mauszeiger darauf zeigt, welche Version die Integration in Home Assistant meldet.

Alle Schalter merkt sich das jeweilige Gerät.

![Blueprint](images/view-blueprint.jpg)

![Tag](images/view-day.jpg)

### 5.3 Bedienen

- **Antippen** schaltet Lampen und Schalter. Die Lampe blinkt kurz zur Bestätigung.
- **Senkrecht wischen** auf einer Lampe dimmt, auf einem Rollladen oder Fenster fährt der Rollladen. Der Wert erscheint am Finger. Geräte und Fenster mit „Vor dem Schalten nachfragen“ reagieren nicht auf Wischen.
- **Lange drücken** öffnet das Schnellmenü: bei Lichtern Helligkeit, Farbtemperatur und Farben, bei Rollläden Auf, Stopp, Zu und feste Positionen. Raffstores und Jalousien mit Lamellen bekommen dort und im Raumfenster einen **Lamellen**-Regler (oder Lamellen auf/zu), sobald die Entität das kann.
- Ein **Fenster** antippen, egal ob Rahmen, Glas oder Rollladen, öffnet das Rollladen-Menü oder zeigt den Kontakt.
- **Doppeltipp auf einen Raum** schaltet alle Lichter des Raums ein oder aus. Geräte mit „Vor dem Schalten nachfragen“ bleiben außen vor.
- Fernseher, Türen und Garagentore lassen sich ebenfalls direkt antippen.

### 5.4 Das Raumfenster

![Raumfenster](images/view-room.jpg)

In einem Raum öffnet sich rechts das Raumfenster, auf Handys und hochkant unten. Es zeigt die Geräte des Raums nach Art: Licht mit Helligkeit, Farbtemperatur und Farben, **Alle an** und **Alle aus**, Rollläden mit **Alle auf** und **Alle zu**, Heizung, Medien, Schalter, Kameras mit Standbild, Sensoren sowie Szenen & Skripte.

Es zeigt die Geräte, die im Plan im Raum stehen, und alles, was du im Editor mit ☆ hinzugefügt hast. **Weitere Geräte des Bereichs** blendet den Rest ein.

Bei einem ausgewählten Raum ohne offenes Raumfenster erscheinen unten die **Szenen und Skripte** des Bereichs als Knöpfe.

### 5.5 Suchen

Der **Stern** über der Lupe öffnet das **Zentral-Menü**: Lichter an oder aus und Rollläden auf oder zu für die gezeigte Etage – in der Hausansicht für das ganze Haus, dann mit einer Rückfrage („Sicher?“, ein zweiter Tipp führt es aus). Garagentore und Tore zählen nicht als Rollläden. Darunter stehen die **Favoriten** aus dem Editor; ein Tipp startet eine Szene oder ein Skript, drückt eine Taste oder schaltet einen Schalter um. In der Karte blendet `central: false` den Stern aus.

Die Lupe unten links öffnet **„Wo ist …?“**. Tippe einen Gerätenamen oder Raum. Ein Treffer fliegt die Kamera dorthin, das Gerät blinkt.

### 5.6 Heatmap

![Heatmap Temperatur](images/view-heat.jpg)

**Temp.**, **Feuchte** und **CO₂** färben die Böden nach den Sensoren des Bereichs, mit einer Farbskala am Rand. Temperaturen erscheinen in der Einheit, die in Home Assistant eingestellt ist (°C oder °F); Sensoren in °F werden richtig umgerechnet.

### 5.7 Sonne und Tageslicht

Ist die Nordrichtung eingestellt, fällt das Sonnenlicht aus `sun.sun` durch die Fenster, die zur Sonne zeigen, als weiche Flecken auf den Boden. Heruntergelassene Rollläden verkleinern die Flecken. Wer die Flecken nicht mag, schaltet sie unter **Einstellungen** mit **Sonnenlicht durch die Fenster** ab. Tagsüber wird der Himmel hinter dem Haus heller.

### 5.8 Warnungen

NextFloor warnt kostenlos und ohne Einrichtung:

| Warnung | Auslöser |
|---|---|
| Rauch, Gas, Kohlenmonoxid, Wasser | `binary_sensor` dieser Geräteklasse im Bereich meldet „an“ |
| Alarm | Ein `alarm_control_panel` ist ausgelöst oder löst gleich aus |
| Fenster offen bei Regen | Ein Fenster ist offen oder gekippt, und die Wetter-Entität meldet Regen, Gewitterregen, Hagel oder Schneeregen |

Der betroffene Raum pulsiert rot, oben erscheint ein Banner. Ein Tipp auf die Warnung springt in den Raum. Die Regenwarnung nimmt die Wetter-Entität aus den Plan-Einstellungen und lässt sich dort unter **Warnung: Fenster offen bei Regen** einzeln abschalten.

### 5.9 Kameras in 3D

Ein Tipp auf die Kamera oder auf ihren Sichtkegel öffnet das Standbild, das sich alle paar Sekunden erneuert. Ein Tipp auf das Bild öffnet das Livebild von Home Assistant. Der Kegel ist eine viel größere Tippfläche als die kleine Kamera.

---

## 6. Live-Funktionen

Sechs Funktionen holen in die 3D-Ansicht, was im Haus gerade passiert. Sie sind eingebaut und kostenlos, brauchen keine Lizenz und keine Installation. Jede lässt sich einzeln abschalten: in der 3D-Ansicht mit den Schaltern unten, in der Karte über ihre Optionen (Kapitel 8).

### 6.1 Kameras

**In die Kamera fliegen:** Tippe in 3D auf eine Kamera oder wähle im Schnappschuss-Menü oder im Raum-Panel **Durch die Kamera schauen**. Die Ansicht fliegt dorthin, wo die Kamera hängt, schaut in ihre Richtung, dann blendet das Livebild über die Szene. **Zurück zur Ansicht** fliegt zurück. Passt das Bild nicht, korrigiere Drehung und Neigung der Kamera im Editor.

![Durch die Kamera schauen](images/view-camera-through.jpg)

**Erkennungs-Pins:** Meldet ein Sensor der Kamera gerade etwas (Frigate, UniFi Protect, Reolink und Co. liefern je Objekt einen Sensor), steht ein Pin vor der Kamera: Person 🧍, Fahrzeug 🚗 oder Tier 🐾. NextFloor findet diese Sensoren selbst am Gerät der Kamera; das Kamera-Formular im Editor sagt, wie viele es gefunden hat.

**Kamera-Wand:** Der Schalter **Kameras** unten (in der Karte die Option `camera_wall: true`) zeigt die Bilder aller platzierten Kameras nebeneinander. Ein roter Rahmen markiert eine Kamera, die gerade Bewegung sieht. Antippen zeigt ein Bild groß, als Livestream, wenn die Kamera streamen kann. Die Bilder kommen über den Kamera-Proxy von Home Assistant per normalem HTTP.

![Kamera-Wand](images/view-cameras.jpg)

**Bewegungsspur:** Der Schalter **Spur** (Karten-Option `motion_trail: true`) zeichnet, wo in den letzten 30 Minuten Bewegung gemeldet wurde, in zeitlicher Reihenfolge als leuchtenden Pfad durchs Haus: blass blau, wo es länger her ist, kräftig pink, wo es frisch ist, mit einem Kometen, der den Pfad entlangläuft, und einem Ring an jeder Stelle. Quellen sind Bewegungs-, Präsenz- und Belegungssensoren: platzierte dort, wo sie stehen, die anderen in der Mitte des Raums ihres Bereichs. Die Daten kommen aus dem Verlauf von Home Assistant.

![Bewegungsspur](images/view-trail.jpg)

### 6.2 Wetter am Haus

![Regen](images/view-weather-rain.jpg)

Das Wetter rund ums Haus folgt einer `weather`-Entität:

| Zustand | In 3D |
|---|---|
| rainy, pouring | Regen, mit Wolken |
| hail, snowy, snowy-rainy | Hagel, Schnee, Schneeregen |
| lightning, lightning-rainy | Blitze neben dem Haus mit kurzem Aufleuchten, beim zweiten mit Regen |
| fog | Nebel, der mit der Entfernung dichter wird |
| cloudy, partlycloudy | Wolken ziehen mit ihren Schatten übers Grundstück und dunkeln den Himmel ab |
| windy | Wind treibt Regen und Schnee schräg |
| sunny, clear-night | Sonne am Tag, Mond in der Nacht, jeweils in ihrer echten Richtung |

Wenn die Entität sie liefert, nutzt NextFloor auch `cloud_coverage`, `wind_speed`, `wind_bearing`, den Niederschlag und die Temperatur (Regen unter null wird zu Schneeregen).

![Schnee](images/view-weather-snow.jpg)

**Einstellungen** im Editor: **Wetter-Entität** wählt die Entität („automatisch“ nimmt die erste), **Wetter-Effekte in 3D** schaltet einzelne Effekte ab. Der Schalter **Wetter** unten in der 3D-Ansicht und die Karten-Optionen `weather` und `weather_entity` machen dasselbe je Ansicht. Auf der Qualitätsstufe Tablet fallen weniger Partikel.

### 6.3 TV-Bildschirme

Ein Fernseher oder Monitor, der mit einem Media Player verknüpft ist, zeigt in 3D, was läuft: Cover, Titel und Interpret oder Serie und die App, auf einem Verlauf in der Farbe der App (Netflix rot, Spotify grün …). Dahinter leuchtet ein Ambilight in derselben Farbe an der Wand und atmet langsam, solange etwas läuft. Ein Media Player, der als Gerät direkt neben einem Fernseher platziert ist, zählt als dessen Player; der Fernseher selbst braucht dann keine Verknüpfung.

![Ein Fernseher spielt](images/view-media.jpg)

### 6.4 Energiefluss

Eingerichtet wird alles im Werkzeug **Energie** ([4.20](#420-energie-solarfelder)): Solarfelder, Wechselrichter, Speicher, Wallbox, Zähler, Netzanschluss und ihre Sensoren.

![Das Werkzeug Energie](images/editor-energy.jpg)

In der 3D-Ansicht fliegen leuchtende Partikel in Bögen zwischen den Geräten, in die Richtung, in die der Strom gerade fließt:

- jedes Solarfeld schickt seinen Anteil der Erzeugung zu seinem Wechselrichter,
- der Speicher lädt aus dem Haus oder entlädt ins Haus,
- der Netzanschluss liefert ins Haus oder nimmt die Einspeisung,
- das Haus versorgt jeden Verbraucher, der seine Leistung meldet; eine Wallbox hat ihre eigene Farbe.

Mehr Leistung heißt mehr und schnellere Partikel. „Das Haus“ ist, wo sich die Bögen treffen: der Zählerplatz, sonst der Wechselrichter, sonst die Mitte des Erdgeschosses. Die Solarmodule funkeln mit ihrer Erzeugung. Eine Glaskarte über dem Haus zeigt die Bilanz: Sonne, Haus, Speicher, Netz und wie autark das Haus gerade ist.

![Energiefluss](images/view-energy.jpg)

Der Schalter **Stromfluss** in der Energieleiste blendet die Bögen ein und aus, **Karten** die Live-Karten. In der Karte legen `flows` und `holograms` das fest; ohne sie hat die Karte eigene Schalter.

### 6.5 Klang

Dafür braucht es einen Lautsprecher im Plan: einen Media Player, als Gerät platziert, oder ein Möbel (Lautsprecher, Soundbar, Fernseher …) mit dem Media Player als **Gerät** im Möbel-Formular.

- **Medienkarte:** Über jedem Lautsprecher oder Fernseher, der spielt, schwebt eine Karte mit Cover, Titel und Interpret. Antippen bringt Zurück, Abspielen/Pause, Weiter und die Lautstärke. Auf dem Handy bleiben die Medienkarten ausgeblendet, damit sie die Räume nicht verdecken.
- **Klangringe** in der Farbe der App breiten sich von jedem spielenden Lautsprecher aus; lauter reicht weiter.
- **Multiroom:** Lautsprecher, die zusammen spielen (`group_members`: Sonos, Music Assistant, HEOS, MusicCast …), verbindet ein leuchtender Faden.

Was ein Player mitbringen sollte: den Zustand `playing`/`paused`, `media_title` und `media_artist`, `entity_picture` für das Cover, `volume_level` für den Regler und die Ringe. Echo-Geräte über Alexa Media Player setzen die Lautstärke oft verspätet oder gar nicht; das liegt an der Integration, nicht an NextFloor.

### 6.6 Auto

Das Auto gehört zu einem **Stellplatz** ([4.14](#414-stellplätze-und-fahrzeuge)). Im Stellplatz-Formular nimmt **Auto (eine Entität des Autos)** irgendeine Entität des Autos; ohne Angabe nimmt NextFloor den Anwesenheitssensor des Stellplatzes. Den Rest findet es selbst am Gerät des Autos: Ladestand, Reichweite, Ladeleistung, lädt und eingesteckt, Schloss, Klima, Innentemperatur und den Lade-Schalter. Das funktioniert mit TeslaMate (MQTT), Tesla Fleet und den Auto-Integrationen, die ihre Entitäten an ein Gerät hängen (VW, BMW, Hyundai/Kia, Renault, Polestar …).

Eine Glaskarte über dem Stellplatz zeigt den Ladestand mit Farbring, die Reichweite, das Laden mit seiner Leistung, den Stecker und die Innentemperatur, mit Knöpfen für **Verriegeln / Entriegeln** (Entriegeln fragt nach), Klima und Laden. Während das Auto lädt, fliegen Energiepartikel von der Wallbox hinein. Ist es weg, sagt die Karte, wo es ist.

---

## 7. Erweiterungen und Möbel-Packs

![Erweiterungen](images/extensions.jpg)

Der Reiter **✦ Erweiterungen** zeigt, was in NextFloor steckt: die sechs Live-Funktionen aus Kapitel 6 und die Möbel-Packs.

### 7.1 Mitgelieferte Packs

Elf Packs kommen mit der Integration und sind immer da:

| Pack | Inhalt |
|---|---|
| Wohnen & Haustiere | Ecksofa, Kamin, Klavier, Aquarium, Kratzbaum, Hundebett und mehr |
| Küche extra | Weitere Küchenschränke und Geräte |
| Bad extra | Weitere Badmöbel |
| Schlafen & Kinder | Betten, Schränke, Kindermöbel |
| Heimkino & Gaming | Leinwand, Beamer, Lautsprecher, Soundbar, Gaming-Tisch und -Stuhl, Konsole, Arcade-Automat |
| Büro & Homelab | Stehtisch, Serverschrank, NAS, 3D-Drucker, Router, Tower-PC |
| Fitness | Trainingsgeräte |
| Garten & Terrasse | Gartenmöbel, Grill, Pool, Whirlpool, Gewächshaus, Mähroboter, Bäume und Hecken |
| Energie & Haustechnik | Wärmepumpe, Pelletkessel, Speicher, Hausakku, Wechselrichter, Wallbox, Zählerschrank, Lüftung |
| Fahrzeuge | Tesla-Modelle, Elektro-SUV, Kleinwagen, Transporter, Fahrräder und Anhänger für Stellplätze |
| IKEA-Maße | Regale, Würfelregale, Betten, Kommoden, Schränke, Sofas, Schreibtisch und Tische in beliebten IKEA-Maßen |

Geräte in Packs haben ein kleines leuchtendes Teil (Display, Status-LED): Mit einem Media Player, Schalter oder Licht verknüpft, leuchtet es, solange das Gerät läuft.

### 7.2 Eigene Packs

**Möbel-Packs importieren …** unten auf der Seite importiert Pack-Dateien, auch mehrere auf einmal. Ein Pack ist eine einfache JSON-Datei; das Format steht in [packs.md](packs.md).

- Wird ein Pack entfernt, bleiben seine Möbel als einfache Kästen im Plan. Nach einem erneuten Import sind sie mit allen Verknüpfungen wieder da.
- Eine neuere Version eines Packs ersetzt die alte, ohne dass im Plan etwas verloren geht.
- Mitgelieferte Packs lassen sich nicht entfernen.

---

## 8. Die Dashboard-Karte

![Karte im Dashboard](images/card.jpg)

Die Karte `custom:nextfloor-card` bringt die 3D-Ansicht in jedes Dashboard. Sie wird automatisch geladen.

**Anlegen:** Dashboard bearbeiten, **Karte hinzufügen**, nach „NextFloor“ suchen. Alle Optionen stellst du im visuellen Editor der Karte ein:

| Abschnitt | Optionen |
|---|---|
| **Ansicht** | Etage oder ganzes Haus, Größe fest oder bildschirmfüllend, Höhe, Look, Wände, Qualität, Etagen darunter |
| **Anzeigen** | Symbole, Heatmap, Schalter in der Karte, Etagen-Miniaturen, Raumnamen, Raumfenster, Vollbild-Knopf, Etagen auseinander, Leistungsanzeige |
| **Funktionen** | Warnungen, Sprung zur Warnung, Szenen-Knöpfe, Bewegungsspur, Wetter mit Wetter-Entität |
| **Wandtablet (Kiosk)** | Rückkehr zur Startansicht, Nachtdimmung, Kamerafahrt als Bildschirmschoner |

In YAML sieht eine Karte so aus. Alle Zeilen außer der ersten sind optional:

```yaml
type: custom:nextfloor-card
floor: floor_ab12cd34   # eine Etage zeigen (ID aus dem Editor)
room: room_ab12cd34     # in diesem Raum starten (ID aus dem Editor), z. B. ein Display fürs Kinderzimmer
height: 420             # Höhe in Pixeln
fill: false             # den Bildschirm unter der Kopfzeile füllen
walls: auto             # auto | cut
explode: true           # Etagen in der Hausansicht auseinanderziehen
floor_stack: dim        # Etagen darunter: dim | stacked | single
quality: auto           # auto | low | high
theme: neon             # neon | blueprint | day
accent: "#ff8a00"       # eigene Akzentfarbe (Linien im Neon-Look, Knöpfe, Pins); weglassen = Cyan
markers: important      # none | important | all
marker_names: false     # true: Geräte mit eigenem Namen zeigen ihn unter dem Symbol
central: true           # der Stern mit dem Zentral-Menü (alle Lichter, Rollläden, Favoriten)
buttons:                # eigene Knöpfe nur für diese Karte (ersetzen die aus dem Editor)
  - label: Rollos
    icon: window-shutter
    action: fire_dom_event   # navigate | more_info | service | fire_dom_event
    data: { browser_mod: { service: browser_mod.popup, data: { title: Rollos, content: { type: "custom:meine-rollo-karte" } } } }
heatmap: none           # none | temperature | humidity | co2
room_panel: true        # Raum antippen öffnet das Raumfenster
room_names: true
controls: true          # Schalter in der Karte, oder eine Liste: walls, floors, temperature, humidity, co2
controls_hidden: false  # true: mit ausgeblendeten Bedienelementen starten (nur die 3D-Ansicht), ein Auge unten links holt sie zurück
controls_hide_after: 0  # Sekunden ohne Berührung, nach denen die Bedienelemente verschwinden (0 = nie); eine Berührung zeigt sie wieder
floor_thumbs: true
fullscreen_button: false
dashboard: /lovelace/home   # Knopf oben rechts, der dieses Dashboard öffnet (weglassen = kein Knopf)
dashboard_label: Start      # Beschriftung des Knopfs; ohne Beschriftung zeigt er ⌂
stats: false
alerts: true
alert_jump: false       # bei einer neuen Warnung in den Raum springen
scenes: true
motion_trail: false     # Kameras: Bewegungsspur
weather: true           # Wetter am Haus
weather_entity: weather.home
holograms: true         # Live-Karten immer an/aus; weglassen = Schalter in der Karte
camera_wall: false      # Knopf „Kameras“ unten in der Karte öffnet die Kamera-Wand
roof_fade: true         # false: Dach bleibt beim Heranzoomen auf dem Haus
start_view: { theta: 0.8, phi: 1.0, radius: 20 }   # eigene Startansicht dieser Karte; die Zeile steht im Editor unter Startansicht (weglassen = die des Plans)
idle_return: 0          # Sekunden ohne Berührung bis zur Startansicht
night: "off"            # off | sun | "22:00-06:00"
idle_orbit: false
```

---

## 9. NextFloor auf dem Wandtablet

![Tablet](images/tablet.jpg)

NextFloor ist für Wandtablets wie das Amazon Fire gebaut:

- **Kein Rechnen im Leerlauf.** Ändert sich nichts, zeichnet die Ansicht kein einziges Bild. Die FPS-Anzeige zeigt dann „Ruhe (0 B/s)“.
- **Qualitätsstufe Tablet:** Auf Fire-Tablets wählt „Auto“ sie von selbst. Muster, Schatten, Halos und Partikel fallen weg, Animationen laufen mit halber Rate.
- **Kiosk-Optionen der Karte:** Nach einigen Minuten ohne Berührung kehrt die Karte zur Startansicht zurück. Nachts dimmt sie nach Sonnenstand oder Uhrzeit. Als Bildschirmschoner dreht sich das Haus langsam.
- **Warnungen** springen auf Wunsch von selbst in den betroffenen Raum.
- Hochkant erscheint das Raumfenster unten.

![Handy](images/phone.jpg)

**Tipps für Fire-Tablets:** Fully Kiosk Browser mit Hardwarebeschleunigung nutzen, die Karte mit `fill: true` bildschirmfüllend zeigen und `quality: auto` lassen.

---

## 10. Sicherung und Umzug

Unter **Sicherung** im Editor:

- **Wiederherstellungspunkte** entstehen beim Bearbeiten höchstens alle 10 Minuten, die letzten 20 bleiben. **Wiederherstellen** holt einen Stand zurück, der aktuelle bleibt dabei selbst als Punkt erhalten.
- **Exportieren** speichert den Plan als Datei, **Importieren …** lädt eine solche Datei.
- **Als Vorlage teilen** exportiert ohne Bereiche, Geräte, Sensoren und Bilder. Das ist gut, um einen Grundriss weiterzugeben.
- **Komplett-Backup:** **Alles sichern (Plan, Bilder, Packs)** speichert eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. **Komplett-Backup wiederherstellen …** spielt sie in dieselbe oder eine andere Installation zurück.

Das normale Backup von Home Assistant sichert NextFloor ebenfalls vollständig mit.

---

## 11. Daten und Datenschutz

- Plan, Bilder und Packs liegen in Home Assistant unter `.storage`. Nichts davon verlässt deine Installation.
- NextFloor verbindet sich nicht mit dem Internet.
- Kamerabilder, Verlaufsdaten und Zustände bleiben in Home Assistant und werden nur im Browser angezeigt.

---

## 12. Häufige Fragen und Fehlerbehebung

**Hilfe und Rückmeldung:** Einen Fehler meldest du am besten als [Issue auf GitHub](https://github.com/therealMRBK/NextFloor/issues/new/choose), eine Idee als [Diskussion](https://github.com/therealMRBK/NextFloor/discussions/categories/ideas). So geht nichts verloren, alle sehen den Stand, und du wirst in den Release-Notizen genannt, wenn es umgesetzt ist. Die beiden Knöpfe dafür stehen auch im Editor unten in der Seitenleiste und auf der Seite Erweiterungen.

**Wie bekomme ich das neueste Update?**
Einstellungen → System → Updates. HACS sucht nur alle paar Stunden nach neuen Versionen, deshalb fehlt ein frisches Update dort manchmal noch. Dann: HACS → NextFloor → ⋮ → **Informationen aktualisieren** → **Herunterladen**. Danach Home Assistant neu starten und die Seite neu laden (Strg+F5, in der Companion-App: Einstellungen → Companion-App → Frontend-Cache zurücksetzen).

**Kann ich Helfer statt echter Sensoren nehmen?**
Ja. Überall, wo NextFloor einen Zahlenwert erwartet (Leistung, Ladestand, Reichweite, Position …), stehen auch `input_number`- und `number`-Helfer zur Wahl, und wo ein Ein/Aus erwartet wird (Kontakt, Anwesenheit …), auch `input_boolean`. Für Leistung braucht der Helfer die Einheit W oder kW.

**Die Lautstärke eines Echo ändert sich nicht.**
Alexa Media Player setzt die Lautstärke bei manchen Echos nicht oder nur verzögert und meldet den neuen Wert spät zurück. Prüfe es unter Entwicklerwerkzeuge → Aktionen mit `media_player.volume_set`: Passiert dort nichts, liegt es an der Integration (siehe [6.5](#65-klang)).

**Oben steht „Neustart nötig“.**
Nach einem Update läuft im Hintergrund noch die alte Version. Home Assistant neu starten.

**Ein Gerät fehlt in der Geräteliste eines Raums.**
Der Raum braucht einen Bereich, und das Gerät muss diesem Bereich zugeordnet sein, entweder das Gerät oder die Entität selbst. Steckt die Entität unter einem Gerät mit mehreren Entitäten, steht sie hinter „+n mehr“. Das Suchfeld findet sie direkt.

**Eine Kamera ist schwer zu treffen.**
Tippe auf ihren Sichtkegel am Boden, er zählt wie die Kamera.

**Möbel erscheinen als graue Kästen.**
Das Pack, aus dem sie stammen, ist nicht installiert. Importiere es wieder.

**Beim Verschieben in 3D rutscht ein Möbel nicht durch die Wand.**
Das ist Absicht: In der 3D-Ansicht bleiben Möbel und Geräte beim Ziehen in ihrem Raum und gleiten an der Wand entlang. In einen anderen Raum ziehst du sie im Grundriss, dort geht das frei.

**Ein Tipp trifft das Gerät im Nachbarraum.**
Wände fangen Tipps ab. In der Raumansicht zählen nur Dinge im Raum. Trifft es trotzdem das Falsche, hilft der Schalter **Schnitt**.

**Die Ansicht ruckelt auf dem Tablet.**
Qualität auf **Tablet** stellen und mit **FPS** prüfen, was zeichnet. Im Leerlauf sollte dort 0 B/s stehen. Läuft dauerhaft etwas, steht der Grund daneben, etwa ein Farbeffekt einer Lampe.

**Das Sonnenlicht fällt durch die falschen Fenster.**
Unter Einstellungen die **Nordrichtung** prüfen: Grad im Uhrzeigersinn von „oben“ im Plan.

**Die Meldung „Diese Seite zeigt noch NextFloor x.y, Home Assistant hat schon …“ bleibt.**
Browser oder Companion-App halten noch ein altes NextFloor-Bundle. Auf **Neu laden** tippen; in der Companion-App unter Einstellungen → Companion-App → **Frontend-Cache zurücksetzen**, dann die App ganz schließen und neu öffnen. Ein Neustart von Home Assistant hilft hier nicht.

**Wo melde ich Fehler?**
Im Issue-Tracker auf GitHub: https://github.com/therealMRBK/NextFloor/issues
