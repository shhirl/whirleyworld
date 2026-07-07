# 🌀 Whirley World

Personal website of **Shirley He** — live at [www.whirleyworld.com](https://www.whirleyworld.com).

A playful, motion-first one-pager. Four pillars, one orbit:

1. **AI × Aviation** — leading AI products & strategy at SWISS
2. **Data roots** — econometrics, ML, statistics
3. **Community & voice** — WiDS Zürich, mentoring, talks
4. **The Whirl** — travel and everything off duty

## Stack

Deliberately boring on the inside so it can be fun on the outside:

- **Vanilla HTML / CSS / JS** — no framework, no build step, no dependencies
- Google Fonts (Fredoka + Space Grotesk)
- CSS animations + one `IntersectionObserver` for scroll reveals
- Hosted on **GitHub Pages** with a custom domain

```
index.html    — the whole site (one page, anchor navigation)
styles.css    — design system & animations
main.js       — scroll reveal + copy-email button
assets/       — favicon & images
CNAME         — custom domain for GitHub Pages
```

## Docs

- [docs/DESIGN.md](docs/DESIGN.md) — the full design brief: concept, structure, colors, type, motion rules
- [docs/REPLICATION.md](docs/REPLICATION.md) — how this was made, step by step, with a ready-to-paste prompt to replicate it with any AI
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) — GitHub Pages + Cloudflare DNS setup and verification

## Run locally

No tooling needed:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy

Pushing to `main` deploys automatically via GitHub Pages
(Settings → Pages → Deploy from branch → `main` / root).

## Credits

Design spirit inspired by [thibaut.cool](https://www.thibaut.cool/) — reinterpreted
with an original "whirl" theme. Built with [Claude Code](https://claude.com/claude-code).
