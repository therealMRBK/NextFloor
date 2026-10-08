# Contributing

Thanks for looking. NextFloor is a small project and is built with AI assistance (see the README), so contributions are welcome the same way: written by you, with a tool, or both. Please just say in the pull request if an AI wrote a good part of it, and make sure you have understood and run what you send.

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

- Keep a change small and say what it is for. A screenshot helps for anything you can see (`npm run screenshot` renders the preview).
- New furniture or vehicles: the built-in packs come from `tools/build_packs.py`; the format of your own packs is in [docs/packs.md](docs/packs.md). Please only use sizes and shapes you made yourself, never another project's files or a brand's own 3D models.
- 3D models you own (for example a car): they stay on your own Home Assistant and never go into this repository, see [docs/models.md](docs/models.md).

## Ideas and bugs

[Discussions](https://github.com/therealMRBK/NextFloor/discussions) for ideas and questions, [issues](https://github.com/therealMRBK/NextFloor/issues/new/choose) for bugs. For a bug, the version, your Home Assistant version and what you expected help most.
