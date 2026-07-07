# Design brief — Whirley World

This documents the design so a designer or an AI can understand it, critique it, or recreate it.

## Inspiration

The site is modelled on the *spirit* of [thibaut.cool](https://www.thibaut.cool/) (portfolio of
Thibaut Crépelle, 3D/motion designer), **not** its visuals. What was borrowed:

- **The site is the proof.** A playful, motion-rich one-pager whose personality does the pitching.
  A visitor should feel the owner's character within 3 seconds, before reading anything.
- **One page, one conversion.** Anchor-nav scrolling page ending in a single call to action
  (copy-email button with a "Copied!" toast).
- **Playful, self-aware copy.** First person, jokes allowed, a pronunciation guide for the name.
- **Toy-like interactions.** Bouncy hover states, marquees, stickers, things that reward poking.

What was deliberately NOT borrowed: his 80s-gadget/disco theme, video-loop-heavy assets,
Framer as a platform.

## Concept: "the whirl"

Shirley's domain is **whirleyworld.com** (whirley ≈ Shirley, set in motion). The visual metaphor
is **whirl / motion abstract**: spirals, orbits, spinning and floating elements. It nods to her
job (AI at an airline — things that fly and circle the globe) without being literally aviation-themed,
so the site survives career changes.

## Structure (one page, anchor nav)

1. **Hero** (`#hero`) — location badge, big display headline ("Hi, I'm Shirley. Welcome to
   Whirley World."), one-line positioning, pronunciation gag, two CTAs. Behind it: a slowly
   rotating SVG orbit (3 dashed concentric circles with planets). Floating sticker badges at
   the edges (hidden on mobile).
2. **Marquee divider** — dark strip, scrolling uppercase keywords.
3. **Pillars** (`#pillars`) — "What I spin. Four pillars, one orbit." Each pillar is a full-width
   tinted section with a numbered chip, a tilted sticker label, a display heading, a lede, and
   content (cards, chips, or polaroids):
   - **01 AI × Aviation** (coral tint) — day job; three cards: Strategy / Products / People.
   - **02 Data roots** (violet tint) — technical craft; chip cloud of skills + GitHub button.
   - **03 Community & voice** (teal tint) — three cards: WiDS Zürich / CoderDojo / Talks.
   - **04 The Whirl** (tangerine tint) — travel; three tilted polaroids + Instagram button.
4. **About** (`#about`) — spinning-ring avatar, first-person bio, language chips, social links.
5. **Contact** (`#contact`) — dark section. "Give me a whirl." Copy-email button → toast.
6. **Footer** — reverse-direction coral marquee, copyright, "view source" link, sign-off gag.

## Design system

### Color (all defined as CSS variables in `styles.css`)

| Token | Value | Use |
|---|---|---|
| `--cream` | `#fbf5ea` | page ground |
| `--ink` | `#23201b` | text, borders, shadows, dark sections |
| `--ink-soft` | `#55504a` | secondary text |
| `--coral` | `#ff5c4d` | primary accent, pillar 01 |
| `--violet` | `#7b5cff` | pillar 02 |
| `--teal` | `#14b8a0` | pillar 03 |
| `--tangerine` | `#ffb03a` | pillar 04 |
| `--pink` | `#ff8fc7` | highlights, gradients |
| `--card` | `#fffdf8` | card surfaces |

Pillar section backgrounds are pale tints of their accent (`#ffe9e6`, `#ece7ff`, `#dff5f0`, `#fff0d9`).

### Type

- **Display:** Fredoka (Google Fonts), weights 500–700 — chunky, rounded, friendly.
- **Body:** Space Grotesk, 17px base, 1.6 line-height.
- Headline scale via `clamp()`: hero ~2.6–4.8rem, section heads ~2–3.4rem.

### The signature "sticker" look

Everything interactive shares one recipe: **2px ink border + hard offset ink shadow
(no blur) + pill or 18–28px radius**. Hover lifts the element up-left and grows the shadow
(`box-shadow: 4px 4px 0 → 7px 7px 0`), with a slight rotation. Badges and polaroids sit
pre-tilted (±2–6deg) and straighten on hover.

### Motion rules

- Bounce easing everywhere: `cubic-bezier(0.34, 1.56, 0.64, 1)` (overshoot).
- Hero orbit + avatar ring: 40s linear infinite rotation.
- Marquees: two duplicated `<span>`s, `translateX(-50%)` keyframe, ~28s loop; footer runs reverse.
- Scroll reveals: `IntersectionObserver` adds `.visible` (fade + rise 36px, bouncy).
- "Whirley World" in the hero wobbles ±1.5deg on a 5s loop; stickers float vertically.
- Grain: fixed full-screen SVG `feTurbulence` noise overlay at low opacity.
- **All animation disabled under `prefers-reduced-motion: reduce`.**

### Responsive

Single breakpoint philosophy: cards use `auto-fit, minmax(240px, 1fr)` grids so they collapse
naturally. At ≤720px stickers hide and About stacks/centers. At ≤560px the nav logo collapses
to just the spiral mark so the pill fits a 375px viewport.

## Voice & copy guidelines

First person, warm, a little cheeky, aviation puns rationed ("fastest runway", "just turbulence",
"window seat, always"). Every section header is a play on spinning. No corporate speak, no
"passionate about leveraging".
