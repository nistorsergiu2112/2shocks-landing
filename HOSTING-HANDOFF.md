> **8 October 2026 recheck:** Use [PRODUCTION-LAUNCH-PLAN.md](./PRODUCTION-LAUNCH-PLAN.md) for the current launch sequence and provider status. Free now includes plans/history/garage sheets and unlimited replacement of its one active bike. Plus adds five simultaneous bikes, reminders/alerts and no ads. The latest private-history and mileage work is uncommitted in backend/mobile. Earlier evidence below is dated and does not prove current production readiness.

# Current handoff — 3 October 2026

See [APP-LEGAL-REVIEW.md](./APP-LEGAL-REVIEW.md) for the new app privacy/terms pages, app-ads.txt, evidence, owner confirmations and Vercel deployment sequence. No deployment was performed. Existing Vercel Web Analytics is now disclosed; earlier no-analytics statements below are historical. The retired Workshop/annual offer has been replaced in current landing copy. App ads remain disabled pending release verification. See `PRIVACY-OPERATIONS.md` for the owner-approved support policy. Website statistics remain on by default, with a browser opt-out on `/privacy`.

## Verified current deployment facts

- Existing Vercel project is already configured with www Production and apex 308 to www. No domain or email DNS changes are needed simply to publish these new pages.
- Vercel currently shows Hobby. Resolve the commercial-use plan or obtain a written provider exception; the company's product marketing is covered by its [commercial-use definition](https://vercel.com/docs/limits/fair-use-guidelines#commercial-usage) even without website checkout. No upgrade or payment has been made.
- Website analytics is already active; the new implementation adds an owner-approved browser opt-out. Test opt-out, return visits and re-enable after deployment. No new analytics SDK was added.
- Public app pages/app-ads.txt were 404 at the prior live check. Publishing the static build and checking HTTP responses remains necessary. UMP remains an unpublished draft with no privacy URLs.
- AdMob targeting stays EEA/UK/Switzerland per owner decision. Do not enable production ads from this site or deploy the Railway staged changes as part of a landing release.

## Historical website handoff — 9 September 2026

Prepared 9 September 2026. Website preparation only; no deployment or DNS changes performed.

## Prepared

- Static Next.js export (`npm run build`, output `out`).
- Website-only `/privacy` and `/terms`, confirmed operator/address and GoDaddy Microsoft 365 email provider.
- No account system, checkout, newsletter, analytics integration or signup form on this site. Contact actions open email.
- Workshop section, screenshot and wording retained unchanged at the founder's request. No new permission or licensing determination is implied.
- App legal drafts preserved in `docs/legal-archive/`; app readiness tracked separately in `LEGAL-READINESS.md`.

## Deploy on Vercel

1. Import the website repository into your Vercel account using the Next.js framework preset. Build with `npm run build`. This project exports static files to `out`; use the detected settings for this configuration. No backend, database or payment secrets are needed.
2. Review the preview deployment: `/`, `/privacy`, `/terms`, images, navigation and email links on mobile and desktop.
3. Add `2shocks.com` and your preferred `www` redirect in Vercel. Apply the exact DNS records Vercel provides in GoDaddy. Preserve existing MX, email verification and authentication records; do not replace the entire DNS zone.
4. Wait for domain verification and HTTPS, then check both hostnames and redirects.
5. Leave optional analytics, advertising integrations and tracking disabled. If enabling them later, reassess notice/consent requirements first.
6. Check the actual Vercel plan's request/security logs, retention and data-processing terms, and the GoDaddy/Microsoft mailbox recovery/retention settings. The notice describes retention criteria instead of inventing fixed provider expiry periods. Record settings internally; change the notice if deployment introduces different processing.
7. Send a test enquiry yourself to `info@2shocks.com` and confirm receipt and reply. Assign an inbox owner, restrict mailbox access, and operate the privacy-request and correspondence-deletion practices described in the notice.
8. Keep the public document revision date accurate if wording changes. Do not use these website policies as the app-store privacy notice without completing the separate app review.

## Scope of readiness

The website files can be handed off for hosting after the recorded build/tests pass. Live DNS, HTTPS, email delivery and provider account settings cannot be verified from the local build. Hosting is the founder's next step. App release and paid Plus are separate milestones.

## Reference guidance

- [ICO privacy information checklist](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/what-privacy-information-should-we-provide/)
- [Vercel data-processing terms](https://vercel.com/legal/dpa)
- [GoDaddy Microsoft 365 terms](https://www.godaddy.com/en-ca/legal/agreements/microsoft-office-terms-of-use)

Provider documents describe their services; they do not independently verify this project's live account configuration.

## Local verification completed

9 September 2026: lint, TypeScript, five unit tests and production static build passed. Desktop/mobile Playwright checks: 20 passed, two device-specific skips, including legal routes, accessibility, responsive overflow, navigation and app-tour behaviour. Workshop implementation was not edited during this legal-page preparation.
