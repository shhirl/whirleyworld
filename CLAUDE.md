# whirleyworld

Static portfolio site (plain HTML + CSS, no build step) live at www.whirleyworld.com. GitHub Pages from `main` / root, custom domain via `CNAME`, DNS on Cloudflare.

## Deploy safety: main IS production

GitHub Pages deploys every push to `main`. There is no staging.

- **Never push directly to main.** Branch → PR → Shirley merges. Merging is the deploy decision and it's hers.
- Don't push at all unless asked.
- Never delete or edit `CNAME`: it keeps the custom domain attached.
- Rollback: "Revert" on the merged PR, then merge the revert PR.
- Add a line to `CHANGELOG.md` for every release.

## Content rules

- No em dashes or en dashes in site copy.
- Case-study numbers come from each project's own "how it's built" page (fixmybanana.com, ragpatterns.com, makemygate.app). Never invent or round up a number. Those projects live in their own repos: link to them, never change them from here.
- The airline assistant case study stays anonymised: no internal numbers, dates, team names or roadmap details.
- Public contact email: shirleyishuman@gmail.com.

## Verify before declaring done

Serve locally (`python3 -m http.server 8000`), open every page at desktop and phone width, check that no page scrolls sideways and that every internal link resolves.
