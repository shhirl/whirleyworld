# Changelog

One entry per release of www.whirleyworld.com. Newest first.

## v2.1 · 11 September 2026 · credentials and speaking

Adds the evidence v2 dropped, and a speaking section.

- Credentials strip on the homepage goes from 3 items to 6: SWISS (Lufthansa Group), MSc Data Science Barcelona GSE, 5 years building models and pipelines, Constructor Academy, EN/DE/中文, WiDS Zurich. These were all on v1 and were lost in the v2 rewrite.
- New `#speaking` section: three photos from real events, a talks list, and the topics taken. Photos in `assets/speaking/`.
- First talk listed: "Agentic AI in Practice", Co-piloting the Future of AI, Lufthansa Group Digital Hangar Frankfurt, September 2025, with Frankfurt Data Science and Netlight.
- Hero subhead replaces "I ship things" with the airline portfolio scope plus the published-evals claim.
- About restores the MSc, the five years in data science, the languages and CoderDojo.
- Contact now names consulting, workshops and speaking rather than consulting alone.
- Title and meta description carry the role and employer.
- New CSS: `.gallery` / `.shot` / `.talks`, responsive at 900px and 560px.

## v2 · 10 September 2026 · portfolio with receipts

Replaces the v1 one-pager with a portfolio built for hiring managers and clients.

- New homepage: hero ("Data scientist turned AI product lead"), four projects ordered by impact, How I work, About, contact.
- One case study per project, each in the same 01 Background / 02 Solution / 03 Receipts / 04 Not done yet layout:
  - `/work/airline-assistant/` (enterprise, anonymised)
  - `/work/ragpatterns/` → links to ragpatterns.com
  - `/work/make-my-gate/` → links to makemygate.app
  - `/work/fixmybanana/` → links to fixmybanana.com
- Numbers on the case studies are copied from each project's own "how it's built" page (10 Sep 2026). Update them here when a project ships a new version.
- Design: gradient colour blocks (#f9b286, #e5ef93, #f3dcfb, #c7deff), Fraunces headings, DM Sans body, self-hosted fonts.
- Removed: `styles.css`, `main.js` (v1 only). Kept: `CNAME`, `assets/`, `docs/`.

## v1 · the "whirl" one-pager

Motion-first one-pager with four pillars (AI × Aviation, Data roots, Community & voice, The Whirl). Vanilla HTML/CSS/JS, Fredoka + Space Grotesk. Design notes in `docs/`. To bring it back: revert the v2 pull request.
