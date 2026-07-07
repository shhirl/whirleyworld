# Replication guide — how this site was made (and how to remake it with any AI)

This is the full process that produced this site, written so you can hand it to another
AI assistant (or a person) and get an equivalent result.

## The process, step by step

### 1. Analyze the inspiration site

Prompt used (paraphrased): *"Describe https://www.thibaut.cool/ — its design and goal — as
a brief for a designer and developer who need to create the same."*

Key extraction: playful motion-first one-pager, personality-as-pitch, anchor nav
(Hero / Works / About / Contact), copy-email conversion, retro-80s theme, built in Framer.
The lesson: copy the *bones and spirit*, invent a new *skin*.

### 2. Lock the four build decisions before writing code

| Decision | Choice made here | Why |
|---|---|---|
| Design fidelity | Same spirit, own theme | A clone of someone else's identity isn't a personal site |
| Stack | Vanilla HTML/CSS/JS | Zero deps, readable on GitHub, trivial hosting, easy maintenance |
| Hosting | GitHub Pages | Code + hosting in one place, free, custom domain support |
| Structure | One-pager with anchors | Matches the inspiration; content volume doesn't justify pages |

### 3. Research the subject (the person)

Sources used, by weight: LinkedIn (role, history, education, volunteering, languages),
GitHub (repos → technical interests), the person's previous website, Instagram (content
themes — travel). From this, derive **pillars**: 3–5 named themes that become the page
sections. Confirm the pillars with the person before building.

Pillars chosen: **AI × Aviation** (work), **Data roots** (craft), **Community & voice**
(WiDS Zürich, mentoring), **The Whirl** (travel/personal).

### 4. Pick a visual metaphor the person owns

Offer 2–3 directions grounded in their life; let them choose. Chosen here: **whirl/motion
abstract** (from "Whirley World" ≈ Shirley) over retro-aviation and alpine-Zurich options.
The metaphor then drives *everything*: section names ("What I spin"), animations (orbits,
rotation, wobble), copy ("Give me a whirl"), the logo (a spiral).

### 5. Build

Files: `index.html` (all content), `styles.css` (design system — see
[DESIGN.md](DESIGN.md) for the full spec), `main.js` (~40 lines: IntersectionObserver
scroll reveals + clipboard copy with toast), `assets/favicon.svg`, `CNAME`.

Order of work: design tokens → nav → hero → marquee → pillar template → the four pillars →
about → contact → footer → reduced-motion pass.

### 6. Verify before shipping

Serve locally (`python3 -m http.server`), screenshot desktop AND mobile (375px), scroll
the whole page. Bug found this way: nav pill overflowed the mobile viewport → collapsed
the logo text at ≤560px.

### 7. Ship

`git init` → commit → `gh repo create <name> --public --source . --push` → enable Pages
via API → add Cloudflare DNS records (see [DEPLOYMENT.md](DEPLOYMENT.md)).

---

## Ready-to-paste prompt for another AI

> Build me a personal one-page website in the spirit of thibaut.cool: a playful,
> motion-first portfolio where the site's personality does the pitching, with anchor
> navigation and a copy-my-email conversion at the end.
>
> Constraints: vanilla HTML/CSS/JS only (no framework, no build step), one `index.html` +
> `styles.css` + `main.js`, hosted on GitHub Pages with a custom domain (`CNAME` file).
> Respect `prefers-reduced-motion`. Must work at 375px wide.
>
> Design system: cream background (#fbf5ea), near-black ink (#23201b), candy accents
> (coral #ff5c4d, violet #7b5cff, teal #14b8a0, tangerine #ffb03a, pink #ff8fc7).
> Chunky rounded display font (Fredoka) + Space Grotesk body. Signature element style:
> 2px ink border, hard offset ink shadow (no blur), pill/rounded corners; hover lifts
> up-left with a bigger shadow and slight rotation; bounce easing
> cubic-bezier(0.34,1.56,0.64,1). Add: fixed pill nav, rotating SVG orbit behind the hero,
> floating tilted sticker badges, dark marquee strips with scrolling uppercase text,
> SVG-noise grain overlay, IntersectionObserver scroll reveals, and a copy-email button
> with a "Copied!" toast.
>
> Structure: Hero (location badge, big greeting, one-line positioning, pronunciation joke,
> two CTAs) → marquee → 3–5 "pillar" sections (each: numbered chip, tilted label badge,
> big colored heading, lede, then cards / skill chips / tilted polaroids, each pillar with
> its own pale tinted background) → About (bio, language chips, social links) → dark
> Contact section with the copy-email button → footer with a reverse marquee and a sign-off
> joke.
>
> Voice: first person, warm, cheeky, no corporate speak. Theme every heading and
> interaction around one visual metaphor drawn from my name/life: [YOUR METAPHOR].
> My pillars: [YOUR PILLARS]. About me: [YOUR BIO, LINKS, EMAIL, CITY, LANGUAGES].

Fill the three bracketed slots and any competent AI (or developer) will land within
sight of this site.

---

## Where AI can't help: the human inputs

The steps that required the owner, not the AI:
1. Choosing pillars and the metaphor (offered options, human picked).
2. Real photos for The Whirl polaroids and the About avatar (still placeholders).
3. Cloudflare DNS records (account access).
4. Copy truthiness — the AI inferred job details from LinkedIn; the owner must sand
   them to match reality.
