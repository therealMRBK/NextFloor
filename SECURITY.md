# Security policy

## Supported versions

Only the latest release receives fixes. Update through HACS.

## Reporting a vulnerability

Please do **not** open a public issue for a security problem. Use GitHub's private reporting instead:
[Report a vulnerability](https://github.com/therealMRBK/NextFloor/security/advisories/new).

Include what you found, the NextFloor and Home Assistant versions and, if you can, how to reproduce it. You get an answer within a few days; a confirmed problem is fixed in a patch release and credited in the changelog unless you prefer otherwise.

## What NextFloor does and does not do

- It does not talk to the internet on its own and has no account or cloud part.
- Plugins run with the same rights as NextFloor in your browser, so install only plugins whose source you trust (the plugin store pins every file by sha256).
- Shared plans and share views are built from an allowlist and carry no entity ids, areas, map position or other data of your home.
