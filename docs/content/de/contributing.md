---
title: Mitmachen
description: Wie du einen Fehler meldest, eine Übersetzung beisteuerst, Möbel baust oder einen Pull Request schickst.
---

NextFloor ist aus Überzeugung frei und Open Source. Was du beisteuerst, gehört allen, unter der MIT-Lizenz.

## Ideen und Fehler

- **Ideen und Fragen:** [Discussions](https://github.com/therealMRBK/NextFloor/discussions).
- **Fehler:** [Issues](https://github.com/therealMRBK/NextFloor/issues/new/choose). Nenne die Version, was du getan hast, was du erwartet und was du gesehen hast. Ein Screenshot hilft.
- **Sicherheitsprobleme** gehen über die [private Meldung](https://github.com/therealMRBK/NextFloor/security/advisories/new), nie über ein öffentliches Issue.

## Übersetzungen

Deutsch und Englisch sind eingebaut. Weitere Sprachen sind Dateien in `frontend/lang/<code>.json` mit den Schlüsseln aus `frontend/src/i18n.ts`. Sie werden nur geladen, wenn Home Assistant in dieser Sprache läuft, und ein Schlüssel, der in einer Datei fehlt, fällt auf Englisch zurück. Ein Pull Request, der eine Sprache vervollständigt, ist sehr willkommen. Diese Dokumentation gibt es ebenfalls auf Deutsch und Englisch: Die Markdown-Quellen liegen in `docs/content/en` und `docs/content/de`.

## Möbel und Plugins

- **Möbel:** im [Browser-Baukasten](https://therealmrbk.github.io/NextFloor/builder/) bauen und im Community-Store teilen. Siehe [Möbel-Packs](packs.md). Bitte nur Maße und Formen verwenden, die du selbst gemacht hast.
- **Plugins:** siehe [Ein Plugin schreiben](plugins.md) und den [Plugin-Store](https://github.com/therealMRBK/NextFloor-Plugins).
- **3D-Modelle, die dir gehören,** bleiben auf deinem eigenen Home Assistant und kommen nie ins Repository. Siehe [Eigene 3D-Modelle](models.md).

## Vor einem Pull Request

```bash
cd frontend
npm install
npm run typecheck
npm test
npm run build      # die gebauten Bundles sind eingecheckt; CI schlägt fehl, wenn sie veraltet sind
cd ..
ruff check . && ruff format --check .
pytest -q          # die Home-Assistant-Seite
```

- Eine Änderung klein halten und sagen, wofür sie ist.
- Commit-Nachrichten folgen Conventional Commits: `feat:`, `fix:`, `docs:`, `build:`, `test:`.
- Jede Änderung, die Nutzer bemerken, kommt im selben Commit in `CHANGELOG.md` unter **Unreleased**.
- Gearbeitet wird auf `dev`; `main` ist das, was HACS-Nutzer bekommen, und bewegt sich mit Releases.

Die vollständige Anleitung ist [CONTRIBUTING.md](https://github.com/therealMRBK/NextFloor/blob/main/CONTRIBUTING.md).

## Diese Dokumentation bauen

Die Seite wird aus `docs/content` von `tools/docs` gebaut:

```bash
cd tools/docs
npm install
npm run build      # schreibt tools/docs/dist
npm run check      # schlägt bei kaputten Links, fehlenden Bildern oder einer Seite fehl, die nur in einer Sprache existiert
```

Jede Seite gibt es auf Englisch und Deutsch. Hinweisboxen nutzen `> [!NOTE]`, `> [!TIP]`, `> [!WARNING]` und `> [!IMPORTANT]`. Eine nummerierte Liste mit drei oder mehr Punkten wird zur Schrittliste.
