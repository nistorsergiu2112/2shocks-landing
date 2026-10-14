> **8 October 2026 recheck:** Use [PRODUCTION-LAUNCH-PLAN.md](./PRODUCTION-LAUNCH-PLAN.md) for the current launch sequence and provider status. Free now includes plans/history/garage sheets and unlimited replacement of its one active bike. Plus adds five simultaneous bikes, reminders/alerts and no ads. The latest private-history and mileage work is uncommitted in backend/mobile. Earlier evidence below is dated and does not prove current production readiness.

# Rider advertising and legal handoff — 3 October 2026

Status: complete local website changes for owner review. **Not deployed; production advertising must remain disabled.** These are proposed notices, not a certification of legal compliance. Do not use publication as proof of native consent/ad behaviour or production cleanup.

## Direction and scope

Agreed: one labelled image-only native Parts placement after useful guidance; consent-controlled adult Free eligibility; no ads for Plus, unknown/pending entitlement, under-18, unknown age or consent refusal. No pop-ups or forced video. First-party measurement is independently opt-in. This supersedes the intrusive-ad strategy from September.

Only landing repository files were changed. Mobile/backend were read as evidence, never modified. Existing website design and unrelated changes preserved. The retired Workshop and annual-price claims were corrected to the approved government/catalogue offer and monthly-only £3.99 plan.

## Evidence checked

Paths below are relative to the named adjacent repository, inspected read-only.

| Fact | Evidence | Limit |
| --- | --- | --- |
| Free one bike, Plus history/reminders, Workshop disabled, no annual plan | backend `src/shared/policy/rider-entitlements.ts`; mobile `app/profile/plus.tsx` | Store Console products/prices not independently inspected; checkout remains authoritative |
| Native request contains no deliberate bike/location attributes; NPA requested; video rejected | mobile `components/ads/PartsAdCard.tsx` | SDK collection is distinct; native traffic not captured in this task |
| Adult/confirmed-bike/consent/entitlement gates | mobile `services/ads/policy.ts`, `native.ts`, `contexts/AdsContext.tsx` | Consent helper uses stricter affirmative choice when GDPR applies; verify UK native acceptance/refusal/withdrawal before release |
| One/session, at most two/day, 24-hour initial wait | mobile policy | Current backend policy is stricter: one/day with 86,400-second spacing; no claim of exactly two ads |
| Preference controls and export; deletion opens email | mobile `app/profile/privacy.tsx` | Email is not a completed automated erasure flow; no backend public deletion endpoint found |
| Allowlisted, account-linked event schema; opt-in ingestion | backend `advertising.types.ts` and `advertising.service.ts`; mobile `services/ads/events.ts` | No claim of anonymous events; operational request logs are separate |
| Withdrawal clears unsent queue and saves backend preference | mobile `events.ts`, `AdsContext.tsx`; backend preferences | Existing records are not deleted on toggle; save can fail and requires retry; in-flight events may already have been accepted |
| 90-day raw-event cutoff | backend `purgeExpiredExperienceEvents`, `rider-retention.service.ts`, cleanup job | Function/job code verified; deployed scheduler execution and backlog NOT verified |
| Preferences/events export and account cascade | backend advertising docs and data-export route/schema | Does not establish Clerk, RevenueCat, backups or all provider erasure end to end |
| Garage lookup/draft behaviour | backend `garage-discovery/garage.service.ts`; mobile privacy UI | Stores favourites and composer-open intent; not sent-email or reply tracking |
| Website analytics already present | landing `app/layout.tsx` mounts `WebsiteAnalytics`, using existing `@vercel/analytics/next` | Same analytics remains on by default; owner-approved browser opt-out added on `/privacy`. No new analytics SDK |
| SDK pin | mobile package `react-native-google-mobile-ads` 17.2.0; installed package sdkVersions; iOS Podfile.lock | iOS GMA 13.6.0/UMP 3.1.0; Android defaults GMA 25.4.0/UMP 4.0.0. Verify resolved Android release dependencies and all adapters. Current Google Android disclosure page describes 25.5.0, so it alone is not version-specific proof for 25.4.0 |

## Owner and release-team confirmations before public policy approval / app release

- [x] Owner reconfirmed the intended 16+ audience and confirmed adults only for advertising. Contract/minor and children's privacy assessments remain app-release work in `LEGAL-READINESS.md`.
- [ ] Confirm current Railway/Neon/Clerk/RevenueCat/Expo/GoDaddy/Microsoft contracting entities, locations, processor agreements, roles and UK transfer mechanisms. Historic regions are not treated as a live audit. Finalise the public transfer section against these facts before approval; it currently states the requirement and review status, not invented safeguards.
- [ ] Confirm the cleanup schedule is deployed and runs successfully against production. Inspect deletion beyond the 90-day cutoff, timestamps, failures and backups. Then replace the pre-release scheduling qualification with a supported operational statement.
- [x] Owner approved support correspondence retention: 12 months after closure, with justified unresolved-issue/legal exceptions. UK co-founder owns privacy/deletion requests. General account/log/financial/processor retention remains to verify; Neon recovery history is seven days. See `PRIVACY-OPERATIONS.md`.
- [ ] Verify deletion end to end, including auth identity, saved data, ad preferences/events and processor records, with justified retention exceptions. An email request is honestly disclosed but is not a claim of app-store readiness.
- [ ] Confirm actual Apple/Google products, monthly price, renewal/manage/restore routes, immediate-supply/cancellation information and refund handling. No annual price, trial or fixed refund promise is invented.
- [ ] Review app terms for consumer rights, suspension, liability and 16–17-year-old purchases with qualified UK advice as appropriate.
- [ ] Verify exact shipped iOS/Android SDK collection, advertising-ID settings, privacy manifests and App Store/Play disclosures. No ATT prompt does not mean no identifiers or no processing. Google-only partner selection was verified in the live AdMob dashboard on 3 October.
- [ ] Verify measurement toggle failure/offline behaviour, ingestion refusal, queue disposal, account switches, export/deletion and effect of in-flight requests. Measurement is not ad consent.
- [x] Live UMP draft “2Shocks — European advertising choices” exists for two apps with a visible refusal option and Google-only partner selection. Owner expressly chose EEA/UK/Switzerland targeting, superseding the earlier everywhere intent. It is unpublished and app privacy URLs are missing. Native verification remains outstanding.
- [ ] Website-specific: assess existing Vercel Analytics configuration, retention and applicable UK storage/access requirements. Owner retained default-on Vercel Analytics and approved a browser opt-out on `/privacy`; preference uses local storage and a reload stops the script. No new cookie banner or analytics SDK. Confirm the statistics-only exception and processor terms; cookie-free is not a blanket exemption.

## Proposed public URLs

- https://www.2shocks.com/app-privacy
- https://www.2shocks.com/app-terms
- https://www.2shocks.com/app-ads.txt

Website `/privacy` and `/terms` remain website-specific and link to the app documents. All four routes appear in header/footer and sitemap. Dates reflect this revision.

Publisher entry supplied by the owner handoff, copied exactly, with no other sellers:

```text
google.com, pub-1348658013604630, DIRECT, f08c47fec0942fa0
```

## Deployment and integrator sequence

1. Review the above facts and public pages; resolve release-dependent qualifications. Do not deploy automatically.
2. After owner deployment authorisation, use the existing Vercel repository workflow (`npm run build`, static export `out`). Preserve GoDaddy email DNS. No ads/backend secrets belong in this site.
3. Verify HTTP 200 HTML at both legal URLs; verify `/app-ads.txt` is HTTP 200 `text/plain`, exact content, publicly accessible, no SPA fallback. Check apex and www, redirect chain and HTTPS using `curl -I`/`curl -L`; verify the store developer-website domain is the crawler domain.
4. Attach the actually published app privacy URL to both apps in the UMP message, review the message and publish it separately.
5. In native builds verify consent acceptance, refusal and withdrawal, no ads in excluded states, hide-for-today and exposure caps; visibly render a Google test ad and verify impression events reach the backend only with measurement enabled.
6. Keep production advertising disabled until the release owner approves after those checks. Website publication does not enable or prove ad serving.

## Verification completed — 3 October 2026

- Production build, lint, type checking, five component tests and SEO checks for all eight sitemap URLs passed.
- Browser tests against the revised production static export: 26 passed, two intentionally skipped. Statistics opt-out, persistence across visits and re-enable passed on desktop and mobile. Covered mobile/desktop layout, keyboard navigation, accessibility, legal routes, footer links and the exact plain-text `app-ads.txt` response.
- Vercel Analytics is confirmed active in the live dashboard (33 visitors / 45 page views for the displayed 30-day period, no custom events). Delivery of this revised opt-out implementation requires post-deployment verification.
- Read-only live check on 2 October: www `/app-ads.txt` returned 404; the apex redirected to www and then returned 404. The new file is verified locally, not published. Repeat the production checks after deployment.

## Deployment follow-up — 3 October 2026

The current request authorises inspecting provider environments and finalising website setup. No deployment was performed. Hosting-plan resolution and publication remain separate from app advertising activation. No DNS, mailbox, backend configuration or advertising settings were changed during this follow-up.

### Current evidence and unresolved facts

- **Railway live account:** production contains one `2shocks-backend` service. Its latest deployment is reported `CRASHED` (created 2 October 2026). Live configuration selects `sfo` (San Francisco); no cron schedule or separate cleanup service is shown. Pending configuration changes are staged, not live. This does not establish a working daily retention process or successful deletion of old events. The public notice describes 90-day retention as a planned pre-launch rule; do not present it as verified production deletion.
- **Source subscription policy:** the current backend entitlement implementation declares £3.99/month, no annual plan and Workshop unavailable. These source facts agree with the proposed website copy, but actual Apple/Google products, checkout, renewal, restore and refunds still require store-account evidence.
- **Source event retention:** the cleanup implementation deletes first-party experience events older than 90 days from receipt. This verifies the intended rule, not production execution, backups or Google SDK retention.
- **Provider arrangements:** Railway region is verified and the owner confirms its separate DPA is unsigned. Neon London/Launch/PostgreSQL 17/production protection/seven-day recovery history verified. Clerk production 2shocks.com domain verified, awaiting deployment. Published current contracts reviewed separately: Clerk incorporates a DPA; Neon now points to Databricks platform terms/MCSA (do not use its historic 2024 PDF as the sole current contract); RevenueCat incorporates its DPA; Vercel DPA expressly covers Pro/Enterprise while this team is Hobby. Company acceptance/entity evidence and remaining transfer assessments are not established by a public terms link.
- **Deletion and general retention:** UK co-founder is the approved privacy/deletion owner; approved support rule is 12 months after closure with justified exceptions. No end-to-end erasure test, account/log/financial/other-provider retention proof was supplied. `PRIVACY-OPERATIONS.md` gives the procedure to implement; do not claim automatic or complete erasure.
- **Public pre-deployment check:** `https://www.2shocks.com/app-privacy`, `/app-terms` and `/app-ads.txt` each returned HTTP 404 with HTML content on 3 October 2026. The required advertising line exists in `public/app-ads.txt` and the built export, but is not yet public.

### Checks rerun

Lint, type checking, five unit tests, the production static build and SEO checks all passed. Browser checks against `out` with clean URL routing passed: 24 tests, two intentional device-specific skips. The default development-server launch timed out; an initial plain static-server attempt lacked clean URL routing and was superseded by the successful run. The advertising test confirmed HTTP 200, `text/plain` and the exact supplied publisher line locally. Vercel Analytics delivery remains a deployment-only check.

### Dashboard inspection and owner decisions — 3 October

- RevenueCat account: no projects and no live transactions. This account does not establish a working £3.99/month store product. No project/account or store product was created during this landing-page task.
- Vercel: current team Hobby; analytics active, no custom events. Domains configured: apex 308 to www, www Production. [Commercial-use rules](https://vercel.com/docs/limits/fair-use-guidelines#commercial-usage) explicitly include advertising a product/service; checkout in the app does not exempt this site. No billing upgrade or contractual acceptance performed. The owner has not selected a resolution.
- AdMob: Google-only partner; automatic partner additions off; RTB consent check on; legitimate-interest controls available, default off; consent mode off. Draft selected for two apps; visible refusal; missing app privacy URLs; unpublished. EEA/UK/Switzerland targeting retained by explicit owner decision. Do not publish or describe coverage as everywhere.
- Owner confirmed 16+, UK co-founder request owner, 12-month support policy, current default-on website analytics, and a new free browser opt-out. No personal requests, secrets or credentials copied into this repository.

Website documents can describe this pre-launch state accurately. Full app release still requires the engineering/contracts/native tests listed in `LEGAL-READINESS.md`. Provider dashboard access cannot prove those tests passed.

## Official references consulted

- [Google iOS SDK data disclosure](https://developers.google.com/admob/ios/privacy/data-disclosure)
- [Google Android SDK data disclosure](https://developers.google.com/admob/android/privacy/play-data-disclosure)
- [Google UMP integration](https://developers.google.com/admob/android/privacy)
- [Google partner-site/app data explanation](https://policies.google.com/technologies/partner-sites)
- [ICO online advertising/storage guidance](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/how-do-the-rules-apply-to-online-advertising/)
- [Vercel Web Analytics privacy](https://vercel.com/docs/analytics/privacy-policy)

These documents were consulted on 2–3 October 2026. SDK defaults and product options must still be checked against the actual release build.

Additional current references: [Railway DPA](https://railway.com/legal/dpa), [Clerk DPA](https://clerk.com/legal/dpa), [Neon platform terms](https://neon.com/platform-terms), [RevenueCat DPA](https://www.revenuecat.com/dpa), [Vercel DPA scope](https://vercel.com/legal/dpa), [ICO statistics exception](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-the-exceptions/).

## Final local verification after owner decisions — 3 October 2026

Lint, type checking, five component tests, static production build and eight-URL SEO checks passed. Revised browser suite: 26 passed, two intentional desktop-only skips of mobile-specific tests. The new statistics test verified that opting out removes the analytics script on reload and across subsequent page visits, and that re-enabling restores it. No live deployment, billing change, agreement acceptance, mailbox rule, customer deletion or app ad activation was performed.
