# 2Shocks search visibility — implementation handoff

Updated 26 October 2026. Replaces the September prelaunch handoff. Product scope follows [MARKETING-STRATEGY.md](MARKETING-STRATEGY.md); operating plan: [SEO-STRATEGY.md](SEO-STRATEGY.md).

## Prepared locally

- Homepage title, description and opening paragraph explicitly identify a motorbike maintenance app for UK riders. The approved service-book headline and established design remain.
- Free/account/download FAQs appear first. The current one-bike Free and 20-bike Plus boundaries remain accurate. Google Play actions stay direct; iOS remains coming soon.
- The homepage’s three guide links are visible in its mobile body as a compact list.
- Existing MOT and service-history URLs are retained. They now include a record-type comparison, garage discussion questions, a reusable blank log and a completed-work/evidence/future-task example.
- `/guides/motorcycle-service-plan` explains preparation rather than prepaid servicing, quotes or bookings, with an illustrative garage sheet. It is linked from home, the guide index and related guide sections.
- Guide dates come from `updatedAt` in the guide data and feed both the visible byline and sitemap. Other changed-page dates are editorial constants, not build timestamps. The export has **11 canonical HTML pages**.
- Google Play links carry allowlisted button-location labels. One document listener records `google_play_click` through the existing Vercel SDK with only canonical page and fixed location. Nested clicks and middle-clicks are handled once; right-clicks are ignored. No click handler changes navigation, appends a redirect or requires JavaScript to download.
- Website opt-out is checked before the listener is mounted, again when clicked, and in Vercel’s dispatch hook. Page URL query strings and fragments are stripped. The website privacy notice now explains click measurement. No account, motorcycle, referrer or arbitrary URL value is added to custom event properties.
- The foreground hero preview is eager/high-priority; side previews are lazy/low-priority. Lossless WebP display copies preserve decoded source pixels and dimensions, with PNG fallbacks and unchanged original PNG links. The three hero files are 69.3% smaller. See [performance evidence](docs/SEO-PERFORMANCE-2026-10-26.md) and `public/screens/web/manifest.json`.
- [Search baseline](docs/SEO-BASELINE-2026-10-26.md), [prospect research](docs/SEO-PROSPECTS-2026-10-26.md), a 90-day operating sequence, change log and monthly report template are saved. No outreach has been sent.

No public API endpoint, rider-account model, app onboarding or website-to-app attribution was introduced. The guide data adds an editorial date and optional checklist/table/contextual-link fields; download badges accept a fixed location type.

## Current evidence and dependencies

Search Console is already verified; do not add another DNS verification token or change the domain. The original selected three-month Web report showed 14 impressions, zero clicks and average position 34 through 24 October. This is too little data to infer CTR problems. The sitemap report showed Success and ten URLs last read on 25 October.

The older aggregate indexing report should not be treated as current for individual URLs: URL Inspection confirmed the service-history guide is indexed, fetchable by Googlebot smartphone and uses the intended canonical URL. Apex-to-www HTTP 308 is expected. Use individual inspection to validate any newly reported issue before trying to fix it.

[Vercel custom events](https://vercel.com/docs/analytics/custom-events) require Pro or Enterprise. The code and local event tests are ready, but live provider plan eligibility, ingestion and dashboard reporting remain unverified. The old hosting handoff’s Hobby status is historical. No upgrade or paid tool was purchased. Until reporting works, record store clicks as unavailable rather than zero.

Product outcomes belong to the app’s separate, appropriately enabled measurement. This website cannot prove an install, signup, saved bike, garage reply or retained rider from a Play click. Do not divide all-source store clicks by organic-search visits and call that an organic conversion rate.

## Validation

The production export, SEO assertions, TypeScript, lint and unit tests were checked. Browser checks cover desktop, Android-sized and iPhone-sized Chromium views, including accessible tables, 320px overflow, print layout, direct store navigation, privacy controls, carousel interaction and mobile guide links. **Final results:** production build, TypeScript, lint, all 11 exported-page SEO checks and **13 unit tests passed**. The final complete Playwright run against the served production export had **75 passing checks and 3 expected desktop skips** (mobile-only behaviours). No failing checks remain.

SEO assertions check the actual exported HTML without requiring JavaScript: eleven unique canonical destinations matching the exported HTML routes; unique titles and descriptions; one H1; crawl directives; valid structured JSON; social-image existence; guide byline/sitemap date equality; labelled store links; and all internal links and fragments.

Manual visual review checked the homepage/guide links and guide resources on desktop and mobile. The existing design scanner produced advisory token/documentation findings in the established stylesheets; this task does not replace the incumbent visual system or repair unrelated design-sidecar drift.

Controlled mobile lab results and their limitations are in [SEO-PERFORMANCE-2026-10-26.md](docs/SEO-PERFORMANCE-2026-10-26.md). Search Console has no field Core Web Vitals data; there is no claim that INP or field performance passed.

## Release and live checks

Local implementation and validation are complete. On 26 October the founder requested committing and pushing the complete SEO change. Publication follows the existing Git-connected hosting process; live checks are recorded after the release is observed. The observation period begins after production updates. No DNS or email changes are needed for this SEO work.

1. Build with `npm run build`, then run `npm run test:seo`. Optional asset regeneration is `node scripts/prepare-web-screens.mjs` before the build; committed display copies are ready to use.
2. Review the preview homepage, guide index, all three guides and privacy notice. Check all download locations, mobile reading, source-image links and the browser statistics opt-out.
3. After the approved release, confirm HTTP 200 for changed canonical pages, images, robots and sitemap; apex should still return 308 to www. Confirm an unknown URL returns 404. The live sitemap should now have 11 canonical HTML URLs and correct modification dates.
4. In Search Console inspect the homepage and three guide URLs, compare declared/selected canonicals and test live retrieval. Request indexing once for materially changed pages where useful. Do not treat submitting a request as proof of inclusion or repeatedly submit unchanged pages.
5. Check the existing submitted sitemap is processed successfully. No new property or DNS token is needed. Allow time for the new URL to be discovered.
6. Where Vercel custom-event reporting is available, use a normal browser to click one labelled download action. Confirm one event with only the expected page/location. Turn statistics off, reload, and confirm no website analytics script or new event. Restore the browser’s intended preference afterwards. Do not infer an install from the event.
7. Run a production mobile performance check, then review Search Console field experience when enough traffic exists. Keep deployment date, known measurement gaps and results in the strategy change log.
8. Review technical failures weekly and compare complete 28-day search windows monthly. Use the report template and prospect queue; sending outreach, purchasing tools and future app attribution are separate activities.

## Reference

- [Google sitemap and lastmod guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
- [Google AI-feature guidance](https://developers.google.com/search/docs/appearance/ai-features)
- [Official MOT lookup](https://www.gov.uk/check-mot-history)
