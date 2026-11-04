# NextFloor – notes for Claude

- Spec and phase plan: `docs/plan.md` (German). Talk to the user in German; code, identifiers and comments in English.
- Domain `nextfloor`, repo `therealMRBK/NextFloor`, minimum Home Assistant 2025.1.
- Frontend lives in `frontend/` (Lit 3 + TypeScript, no decorators; three.js in a separate lazily loaded bundle).
  Bundles are committed to `custom_components/nextfloor/frontend/`, and CI fails when they are stale, so run `npm run build` before committing.
- Checks: `npm test`, `npm run typecheck`, `npm run build` (size budgets), `ruff check` / `ruff format`.
  HA integration tests only run in the Linux CI.
- Visual self-check: `npm run screenshot` renders `preview/index.html` (invented demo data, mock hass) into `preview/screenshots/`.
- Deploy to the user's HA: `npm run deploy` (target in the untracked `deploy.local.json`). Never commit real floor plans, IPs or device names.
- **Branches:** work happens on `dev` (CI runs there too). `main` is what HACS users receive, so it only moves about once a day or after a bigger batch of features: merge `dev` into `main` (fast-forward), bump `manifest.json`, write the changelog section and cut the GitHub release then, not per commit. Never push single small changes straight to `main`.
- After each phase: commit and push to `dev`, check CI, and tell the user in German what is new and how to test it. Only a release (merge to `main`) is published.

- **Changelog:** every change that reaches users goes into `CHANGELOG.md` in the same commit, under the version it ships in, sorted into **Added**, **Changed** and **Fixed** (bump `manifest.json` when a release is cut). Say what the user notices, not what the code did. Use the same text for the GitHub release notes.
- **README is shown inside HACS too, which does not resolve relative paths:** keep every image and link in `README.md` absolute (`raw.githubusercontent.com/therealMRBK/NextFloor/main/…` for images, `github.com/therealMRBK/NextFloor/blob/main/…` for files).

- **Token economy:** ask `graphify query` before reading or grepping files, and `graphify update .` after code changes. No broad exploration when the scope is clear: read only the lines you need. While developing, run only the affected test file (`npx tsx --test src/<file>.test.ts`); the full gate (typecheck, tests, build, ruff, HA tests) runs once before each commit, with its output filtered to pass/fail lines. Do not spawn subagents for work that fits in a few commands. Do not take screenshots unless the change is visual and the check can answer a concrete question.
