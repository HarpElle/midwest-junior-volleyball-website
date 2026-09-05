# Midwest Junior Volleyball site — plan

Updated: 2026-09-04 by Claude Code (Fable 5.1 review)

## Intentions

Maintenance only. The code supports this: it is a static six-page site with no
data layer, and the only recurring work is a yearly content refresh plus
dependency hygiene. Whether maintenance continues at all depends on the client
decision in `REVIEW_2026-09-04.md`.

## Now (current needs)

- Jason confirms whether the client engagement is active (question 1 in the
  review). Steps 1 and 2 below are safe either way; steps 3 onward assume
  "continue".

## Next (in order)

1. **Clear the two Dependabot alerts and resync the lockfile** (S)
   - Files: `package.json`, `package-lock.json`
   - Commands: `npm update browserslist @humanfs/node && npm install --package-lock-only && npm audit`
   - Accept: `npm audit` reports 0 vulnerabilities; `npm ci` succeeds on npm 11;
     Dependabot alerts #68 and #69 auto-close after merge; Pages deploy is green.

2. **Remove dead files and unused dependencies** (S)
   - Files: delete `next.config.ts`; `npm uninstall framer-motion next-seo react-hook-form @headlessui/react`;
     move `public/images/*/orig/` to `assets-src/images/` (not under `public/`).
   - Accept: `next build` succeeds; `out/images` contains only `optimized-*.webp` and SVGs;
     the site renders identically at `/midwest-junior-volleyball-website/`.

3. **Fix lint and make it a CI gate** (S)
   - Files: `src/app/{page,about,privacy,schedule,terms}/page.tsx` (escape quotes),
     `src/components/layout/footer.tsx` (drop unused imports, use `currentYear`, add `asChild`),
     `src/components/layout/header.tsx` (`aria-expanded={mobileMenuOpen}`),
     `next.config.js` (remove `eslint.ignoreDuringBuilds`),
     `.github/workflows/deploy.yml` (add `npm run lint` and `npx tsc --noEmit` before Build).
   - Accept: `npm run lint` exits 0 locally and in the PR check; build still green.

4. **Centralize event facts and the base path** (M)
   - Files: `src/lib/constants.ts` (extend `TOURNAMENT_INFO` with dates, waves, AES/ticket/stream/hotel/parking links;
     fix `NAVIGATION_ITEMS`, delete `SPONSORS` and the placeholder phone),
     `src/lib/utils.ts` (export `BASE_PATH`, import it in `next.config.js` and `src/app/layout.tsx`),
     `src/app/page.tsx`, `src/app/schedule/page.tsx`, `src/app/sponsors/page.tsx`, `src/components/layout/footer.tsx`
     (render from constants).
   - Accept: `grep -rn "2025" src/app src/components` returns only historical timeline entries on the About page;
     changing one date in `constants.ts` updates the home, schedule, and sponsors pages.

5. **Decide the newsletter forms** (S)
   - Files: `src/components/layout/footer.tsx`, `src/app/contact/page.tsx`
   - Replace both `<form>` blocks with the `mailto:` newsletter link already used on the home page
     (or wire a list provider if Jason answers question 3 differently).
   - Accept: no `<form>` without an `action` remains in `src/`; no email lands in a URL query string.

6. **Refresh the event content for the next championship** (M, needs client input)
   - Files: `src/lib/constants.ts` only after step 4.
   - Accept: live page shows the next event's dates, working AES, ticket, streaming, hotel, and parking links
     (each checked with `curl -I`), and the footer year is current.

7. **Replace the README** (S)
   - Files: `README.md`
   - Content: what the site is, who the client is, deploy target and base path, how to run steps 4 and 6.
   - Accept: no create-next-app boilerplate remains.

## Later (not scheduled)

- Custom domain: point the client's domain at Pages and remove `basePath`.
  Trigger: client confirms domain ownership.
- Add `.github/dependabot.yml` (monthly npm + actions groups).
  Trigger: after step 1 so the first grouped PR starts from a clean lock.
- Enforce HTTPS on the org Pages settings (inherited from `HarpElle.github.io`).
  Trigger: next org-level Pages change.
- If the client is not continuing: add a "2025 event has concluded" banner or
  unpublish, then archive the repo. Trigger: Jason's answer to question 1.

## How this plan is maintained

Any agent may reorder Next or add to Later with a `LOG.md` entry. Intentions
change only with Jason. Items move from Later to Next when they have a
trigger (a date, a shipped dependency, or a decision) written next to them.
