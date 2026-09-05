# Midwest Junior Volleyball site — current state

Updated: 2026-09-04 by Claude Code (Fable 5.1 review)
Stage: **live** · Health: **attention**

Static club site on GitHub Pages; build green, content still describes the
June 2025 event, two dev-only Dependabot alerts open, client status unconfirmed.

## What is live / where main stands

- Live at https://harpelle.com/midwest-junior-volleyball-website/ via
  `.github/workflows/deploy.yml` (SHA-pinned actions, PR-only main).
- PRs #1 and #4 merged 2026-09-04; no open PRs, no stale branches.
- Open Dependabot alerts: browserslist (high, dev-only) and @humanfs/node
  (medium, dev-only).
- `next build` and `tsc` clean; `next lint` has 31 errors hidden by
  `ignoreDuringBuilds`; `npm ci` fails on npm 11 (lockfile missing optional
  bindings). Details in `REVIEW_2026-09-04.md`.

## In flight

- None.

## Blockers

- None.

## Decisions for Jason

- Is Midwest Junior Volleyball an active client? Recommended: confirm before
  refresh work; if not, retire the deployment and archive.
- Keep the site under harpelle.com/midwest-junior-volleyball-website/?
  Recommended: client domain if live, past-event banner if portfolio.
- Remove the newsletter forms instead of wiring them? Recommended: remove and
  keep the mailto link.

## Links

- [Repo](https://github.com/HarpElle/midwest-junior-volleyball-website)
- [Live site](https://harpelle.com/midwest-junior-volleyball-website/)
- [Review 2026-09-04](REVIEW_2026-09-04.md)
