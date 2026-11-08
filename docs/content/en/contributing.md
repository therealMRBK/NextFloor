---
title: Contributing
description: How to report a bug, add a translation, build furniture or send a pull request.
---

NextFloor is free and open source out of conviction. Whatever you add belongs to everyone, under the MIT licence.

## Ideas and bugs

- **Ideas and questions:** [Discussions](https://github.com/therealMRBK/NextFloor/discussions).
- **Bugs:** [Issues](https://github.com/therealMRBK/NextFloor/issues/new/choose). Include the version, what you did, what you expected and what you saw. A screenshot helps.
- **Security problems** go through [private reporting](https://github.com/therealMRBK/NextFloor/security/advisories/new), never a public issue.

## Translations

German and English are built in. Further languages are files in `frontend/lang/<code>.json`, with the keys of `frontend/src/i18n.ts`. They are fetched only when Home Assistant runs in that language, and a key a file lacks falls back to English. A pull request that completes a language is very welcome. This documentation also exists in German and English: the Markdown sources are in `docs/content/en` and `docs/content/de`.

## Furniture and plugins

- **Furniture:** build it in the [browser builder](https://therealmrbk.github.io/NextFloor/builder/) and share it in the community store. See [Furniture packs](packs.md). Please use only sizes and shapes you made yourself.
- **Plugins:** see [Write a plugin](plugins.md) and the [plugin store](https://github.com/therealMRBK/NextFloor-Plugins).
- **3D models you own** stay on your own Home Assistant and never go into the repository. See [Your own 3D models](models.md).

## Before a pull request

```bash
cd frontend
npm install
npm run typecheck
npm test
npm run build      # the built bundles are committed; CI fails when they are stale
cd ..
ruff check . && ruff format --check .
pytest -q          # the Home Assistant side
```

- Keep a change small and say what it is for.
- Commit messages follow Conventional Commits: `feat:`, `fix:`, `docs:`, `build:`, `test:`.
- Every change users notice goes into `CHANGELOG.md` under **Unreleased**, in the same commit.
- Work happens on `dev`; `main` is what HACS users receive and moves with releases.

The full guide is [CONTRIBUTING.md](https://github.com/therealMRBK/NextFloor/blob/main/CONTRIBUTING.md).

## Building this documentation

The site is built from `docs/content` by `tools/docs`:

```bash
cd tools/docs
npm install
npm run build      # writes tools/docs/dist
npm run check      # fails on broken links, missing images or a page that exists in only one language
```

Every page exists in English and German. Callouts use `> [!NOTE]`, `> [!TIP]`, `> [!WARNING]` and `> [!IMPORTANT]`. A numbered list with three or more items becomes a step list.
