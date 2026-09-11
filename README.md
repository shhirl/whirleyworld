# Whirley World

Personal website of Shirley He, live at www.whirleyworld.com.

Portfolio of AI builds, with receipts: every project shows its evals, what failed, and what's next.

## Stack

- Plain HTML and CSS. No framework, no build step, no JavaScript.
- Self-hosted fonts in `fonts/` (Fraunces, DM Sans). No Google calls.
- Hosted on GitHub Pages with a custom domain (`CNAME`), DNS on Cloudflare.

## Structure

```
index.html                  homepage (hero, work, how I work, about, contact)
work/<project>/index.html   one case study per project, served at /work/<project>/
css/style.css               all styling; colours and fonts at the top
fonts/                      self-hosted font files
images/                     project illustrations
assets/                     favicon and portrait
CNAME                       custom domain for GitHub Pages. Do not delete.
docs/                       notes from the previous (v1, "whirl") version of the site
```

## Editing

- **Text:** open the `.html` file and change the words. Comments marked `EDIT:` point to the main spots.
- **Colours and fonts:** section 1 at the top of `css/style.css`.
- **Portrait:** replace `assets/shirley-portrait.jpg` (keep the name).
- **Project images:** replace the `.svg` in `images/` with a screenshot (16:10 works best) and update the `src`.
- **New project:** copy a `<a class="card">` block in `index.html`, then copy `work/fixmybanana/` to `work/<new-name>/` and edit it.

## Run locally

```
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

**`main` is production.** GitHub Pages deploys every push to `main` (Settings → Pages → Deploy from branch → main / root).

- Changes go on a branch, then a pull request. Shirley merges; merging is the deploy.
- **Rollback:** open the merged PR and press "Revert", then merge the revert PR. The previous site is back within a minute or two.
- Every release gets a line in `CHANGELOG.md`.
