# Legal and support pre-review corrections — 20 October 2026

## Scope and authorities

Canonical mobile notices: `/app-privacy`, `/app-terms`; website-only notices remain at `/privacy`, `/terms` and link prominently to the app notices. Public `/delete-account` and `/support` pages do not require authentication. No backend changes, deletion requests, provider settings, deployment, billing or store submission are part of this change.

Checked against the Desktop release plan updated 20 October 2026 and current mobile/backend source. The October 14 proposal is historical: ads are now enabled in release configuration, banners replace the single Parts card, Plus supports 20 active motorcycles and automatic bike alerts are Free. Paid purchases remain unconfigured/unverified. Mobile deletion is restricted to the exact staging profile; production currently opens an email draft. Backend request/status and deletion-job code now exist; their presence is not proof of production fulfilment.

Additional source finding: garage-activity records now include accessed/saved listings, recipient email addresses committed when opening an enquiry composer, and a sent result only when the native iOS composer reports it. These are not delivery confirmations and are separate from opt-in advertising measurement.

## Owner decisions and evidence still required before public review

- Confirm lawful bases and the retention register for active/inactive accounts, detached bikes/private records, lookup snapshots, garage activity/recipient addresses, operational logs and request/audit records. Do not extend the 90-day experience-event rule to operational records. Lookup-cache expiry is separate from saved records. Public copy explicitly states remaining schedules are pending.
- Confirm provider agreements, roles, international-processing/transfer arrangements and exact log/backup/recovery settings. Amsterdam Railway, London Neon and UK/Romania team access do not establish all processing locations or safeguards.
- Verify account deletion through production Clerk, backend and other relevant providers with disposable data; configure/verify the signed Clerk webhook, paid/shared-record review and completion notice. Production email-only initiation remains a native release blocker; the web resource alone does not fix it. Source operational targets (2 working days acknowledgement, 24 hours automatic, 7 calendar days review) are not public guarantees and are not presented as verified production timings.
- Finalize monthly store offer/price and RevenueCat/store setup; £3.99 is proposed, 20-bike entitlement is implemented, no annual plan/trial is advertised. Verify purchase/restore/renewal/expiry/refund and cancellation before claiming availability.
- Verify production ad serving, UMP and limited-ad choices, suppression/exposure, and final signed-device push delivery. Configuration and unit tests do not prove provider approval or physical delivery.
- Test actual receipt/reply at info@2shocks.com and request handling/backup coverage. No mail was sent in this task.
- Refresh marketing screenshots from the final candidate; existing illustration assets can display older plan limits. Landing caption discloses this; no native captures were altered.
- Publish the approved pages separately, verify their public URLs and update store/Clerk metadata. Mobile source URL changes require a new build/update; previously distributed binaries remain unchanged.

## Preserved website behavior

Company details, website-only provisions, Vercel statistics opt-out, native screenshot assets and existing design/motion are preserved. Homepage/FAQ/guide/feature text is corrected only where it conflicts with current benefits, advertising or tax-data availability. Pending operations are disclosed in public prose without inventing contracts, periods, automatic erasure or checkout availability.

## Changed files

Landing repository:

- `app/app-privacy/page.tsx`, `app/app-terms/page.tsx`: canonical app notices and conditional subscription information.
- `app/delete-account/page.tsx`, `app/support/page.tsx`: public request instructions and help/contact.
- `app/privacy/page.tsx`, `app/terms/page.tsx`: website-only scope retained, revision dates and prominent app/help links updated.
- `components/Header.tsx`, `components/Footer.tsx`, `app/globals.css`: support/deletion access and legal-anchor clearance under fixed navigation.
- `app/page.tsx`, `data/site.ts`, `data/guides.ts`, `components/HeroScreens.tsx`, `components/PhoneShowcase.tsx`: targeted offer/advertising/notification/tax accuracy corrections and legacy-screenshot disclosure.
- `app/sitemap.ts`, `scripts/check-seo.mjs`: current editorial dates and both new public URLs.
- `e2e/legal.spec.ts`, `e2e/site.spec.ts`: legal access/scope, deletion email draft, canonical URLs, current plan copy and development/production analytics-script validation.

Mobile repository (only policy-link/copy consistency):

- `services/legal.ts`: canonical app URLs.
- `app/welcome.tsx`, `app/motorcycles/add.tsx`, `app/profile/privacy.tsx`: matching fallback URLs.
- `app/profile/support.tsx`: app-policy labels and descriptions.
- `scripts/ads-flow/harness.tsx`: matching fixture URLs.

Pre-existing mobile `docs/RELEASE_READINESS.md` changes and `docs/releases/` files were left untouched. No backend file was edited.

## Validation completed

- Landing lint and TypeScript passed; five unit tests passed.
- Optimized static production build passed; all ten sitemap URLs, canonical metadata, social assets and internal route destinations passed exported-HTML checks.
- Desktop/mobile browser suite: 38 passed, four device-specific skips. Includes accessibility scans, no horizontal overflow, public legal/deletion/support pages, legal links, subscription anchor, mailto recipient/subject, current offer wording and website statistics opt-out/re-enable.
- Rendered screenshots of each of the four app/help pages were visually inspected on desktop and iPhone-sized mobile. Incumbent design preserved. No automated accessibility violations were reported on these pages.
- Mechanical design detector: zero findings on the changed app policy/help pages and header/footer.
- Mobile TypeScript passed; targeted ESLint passed for the changed runtime source files under Node 22. The first lint invocation used the shell's Node 16 and failed to load ESLint; rerunning with the project's required Node 22 resolved that tooling error. No claim of a clean full native lint run or signed-device validation is made.
- Existing synthetic swipe test logs a pointer-capture diagnostic because its dispatched pointer ID is not a physical pointer; the check passes. This task did not change gesture behavior or certify hardware touch input.

All changes are local. No website deployment, mobile build/distribution, support email, account erasure or provider configuration was performed. These checks validate the implementation and wording against the recorded evidence; they do not resolve the owner/provider release gates above.
