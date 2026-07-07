# Deployment — GitHub Pages + Cloudflare

The site is static (no build step), hosted free on **GitHub Pages**, with the domain's DNS
on **Cloudflare**.

## Current setup

- Repo: `github.com/shhirl/whirleyworld`, branch `main`, Pages serving from `/` (root).
- `CNAME` file in the repo root contains `www.whirleyworld.com` — this tells GitHub Pages
  which custom domain to answer for. Don't delete it.
- Every push to `main` redeploys automatically (takes ~1 minute).

## Cloudflare DNS records (one-time setup)

In Cloudflare dashboard → `whirleyworld.com` → **DNS → Records**, add:

| Type | Name | Target | Proxy status |
|------|------|--------|--------------|
| CNAME | `www` | `shhirl.github.io` | **DNS only** (grey cloud) |
| CNAME | `@` | `shhirl.github.io` | **DNS only** (grey cloud) |

Notes:

- Cloudflare automatically "flattens" the apex (`@`) CNAME — that's expected and fine.
  The apex will redirect to `www` because `www` is the domain in the `CNAME` file.
- **Keep the proxy OFF (grey cloud) at least until HTTPS works.** GitHub needs to see the
  DNS pointing at itself to issue the TLS certificate (via Let's Encrypt). With the orange
  cloud on, certificate issuance can fail or loop.
- You *can* turn the Cloudflare proxy on afterwards if you want its CDN/analytics, but then
  set Cloudflare SSL/TLS mode to **Full** (not Flexible), or you'll get redirect loops.
  Simplest reliable setup: leave both records DNS-only. GitHub Pages has its own CDN (Fastly).

## Enable HTTPS enforcement (once, after DNS is live)

1. Wait for DNS to propagate and the certificate to be issued (typically 15–60 min).
2. GitHub repo → **Settings → Pages** → tick **Enforce HTTPS**.

Or via CLI:

```sh
gh api repos/shhirl/whirleyworld/pages -X PUT -F https_enforced=true
```

## Verify

```sh
dig +short CNAME www.whirleyworld.com   # → shhirl.github.io.
curl -sI https://www.whirleyworld.com | head -5   # → HTTP/2 200
```

## Recommended (optional): domain takeover protection

GitHub → personal **Settings → Pages → Verified domains** → verify `whirleyworld.com`
(adds a TXT record in Cloudflare). Prevents others from claiming the domain on Pages
if the repo setting is ever removed.

## How this was set up originally (CLI commands)

```sh
git init -b main && git add -A && git commit -m "..."
gh repo create whirleyworld --public --source . --push
gh api repos/shhirl/whirleyworld/pages -X POST \
  -f 'source[branch]=main' -f 'source[path]=/' -f 'build_type=legacy'
```
