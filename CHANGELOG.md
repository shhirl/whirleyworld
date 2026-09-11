# Changelog

One entry per release of www.whirleyworld.com. Newest first.

## v2.14 · 11 September 2026 · remove How I work

- The "How I work" section is out of the homepage. To restore it, take the block from `index.html` at commit `6c90da8` (the Decide / Prove / Translate version) and paste it back between Recognition and Speaking.
- `.three`, `.pillar` and `.pillar-num` styles are deliberately kept in the stylesheet and marked, so restoring is an HTML paste with no CSS work.
- Nothing linked to the section, so no navigation changes were needed.

## v2.13 · 11 September 2026 · fix cropped illustrations

- Project card images were being chopped, not cropped. `.card-image` had `aspect-ratio: 2/1` but was also a grid, and a grid row's automatic minimum is the item's intrinsic height, which overrides the ratio. The image rendered full height inside a shorter box with `overflow: hidden`, losing its bottom fifth. Worst on fixmybanana, where it sliced the "good form" and "banana back" pills.
- `.card-image` is now `display: block`, and the paired variant uses `grid-auto-rows: minmax(0, 1fr)`. Images render at a true 2:1 and `object-fit: cover` centre-crops as intended.
- Stacked pairs below 560px were 2.5:1 per image, cropping harder than desktop. Now 1/1 on the container, so each stacked image is 2:1 like everywhere else.
- fixmybanana pills moved up 25 units, Make My Gate "tight!" pill down 18. Both sat on the crop line.

## v2.12 · 11 September 2026 · Decide, Prove, Translate

- "How I work" was the only section that asserted without evidence, and its verbs (Ship, Measure, Explain) described a maker rather than someone who decides what gets funded.
- New pillars: Decide, Prove, Translate, under the heading "From experimentation to adoption", which is the title of the IATA talk.
- Numbers quoted from the case studies: 60% agreement with my own labels (fixmybanana), 28% naive RAG against 100% for the graph (Make My Gate).

## v2.11 · 11 September 2026 · tighter project cards

- Project cards about 16% shorter: 515px instead of 612px. Image ratio 16:10 to 2:1, tighter body padding and description type.
- Section heading "Projects, with receipts." is now just "Projects".
- Subheading drops "Ordered by impact" and ends on what I learned from building it.

## v2.10 · 11 September 2026 · hackathon win

- New Recognition strip after the work section: winner of the Lufthansa Group Digital Hangar Agentic AI Hackathon with IBM, Microsoft and Cognigy, May 2025, for RetentionAI. The site had no awards anywhere before this.
- New credentials chip: Winner, Agentic AI Hackathon 2025.
- Female Digital Pioneer photos swapped: a different frame from the talk, and the cohort graduation photo replacing the "Building Connections" still.

## v2.9 · 11 September 2026 · Female Digital Pioneer

- Third speaking entry: "Breaking Barriers and Redefining Leadership", the Ambition Pitch for Female Digital Pioneer, January 2024, with two stills from the recording.
- Adds the women in technology leadership thread, which the site did not have anywhere despite the WiDS role.
- New topic chip: women in technology leadership.

## v2.8 · 11 September 2026 · per-project card images

Project cards no longer use one treatment for all four.

- 01 Airline and 02 ragpatterns: illustration only, as normal tiles. ragpatterns goes back to its original drawing.
- 03 Make My Gate and 04 fixmybanana: full-width cards showing the illustration and the live site side by side, each image complete.
- New `card-wide` and `card-pair` classes. A pair stacks vertically below 900px so neither image gets squeezed.
- fixmybanana's screenshot recropped to its content card instead of the wallpaper around it.

## v2.7 · 11 September 2026 · fix wrong TikTok link

- The footer TikTok link pointed at tiktok.com/@shhirl, which is somebody else's account. Corrected to tiktok.com/@shhirl0. LinkedIn and GitHub are unchanged and correct.

## v2.6 · 11 September 2026 · real screenshots

- The three public projects now use real screenshots instead of SVG illustrations. The site argues from receipts, and a screenshot is one; an abstract illustration is not.
- Each project uses two crops: the product on the homepage card, the evidence on the case study.
  - ragpatterns: the seven patterns scored side by side / the nine-question set with what each is expected to separate.
  - Make My Gate: the planner with a real D33 to A63 query / the airport as a graph, 22 places and 27 walks.
  - fixmybanana: the upload page with good form against banana back.
- The airline case study keeps its illustration. It stays anonymised.
- Removed `images/ragpatterns.svg`, `images/makemygate.svg`, `images/fixmybanana.svg`.

## v2.5 · 11 September 2026 · smaller speaking photos

- Speaking photos are about 12% smaller on desktop (291px instead of 330px), by narrowing the photo column from 1.6fr to 1.2fr. The text column takes the space.
- When the block stacks below 900px the pair is now capped at 620px, so tablet photos no longer come out larger than desktop ones.

## v2.4 · 11 September 2026 · speaking grouped by event

- The four speaking photos are no longer a detached grid. Each event is now one block: title, venue, date and description on the left, its own two photos on the right, using the same two-column rhythm as the case study steps.
- Per-photo captions dropped. The event block names the event once, so the captions were repeating it.
- "The January Problem" moves to a closing line, since it is a talk on offer rather than one with photos.
- Data science experience corrected from five years to seven.

## v2.3 · 11 September 2026 · IATA World Data Symposium

- Adds the biggest speaking credential the site was missing: "From Experimentation to AI Adoption: Lessons from SWISS and Lufthansa Group", invited talk at the IATA World Data Symposium, Singapore, April 2026. Stills pulled from the talk recording.
- Speaking gallery is now 2 x 2 and larger: two photos per event instead of a cramped three-across. Dropped the group photo, which was the only one not showing work.
- Speaking intro now says Europe and Asia, which is true.

## v2.2 · 11 September 2026 · photo captions

- The third speaking photo is from the same Frankfurt event as the other two, not a separate one. Captions now read as a sequence: opening the session, the group, then the packed room. Placeholder caption "Standing room only" is gone.

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
