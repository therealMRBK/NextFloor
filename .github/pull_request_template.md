## What and why

<!-- What does this change, and what is it for? Link the issue or discussion, e.g. "Closes #123". -->

## Checklist

- [ ] `cd frontend && npm run typecheck && npm test && npm run build` pass (the built bundles are committed; CI fails when they are stale)
- [ ] `ruff check . && ruff format --check .` and `pytest -q` pass
- [ ] A line in `CHANGELOG.md` under **Unreleased** (Added / Changed / Fixed), written for users
- [ ] New texts exist in German and English (`frontend/src/i18n.ts`); other languages are optional
- [ ] A screenshot for anything you can see
- [ ] I only used my own sizes, shapes and code, no other project's files or a brand's 3D models
- [ ] If an AI wrote a good part of this, I said so and I have run and understood it
