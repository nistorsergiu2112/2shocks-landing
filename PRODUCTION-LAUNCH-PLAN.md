# 2Shocks production launch plan

Audited **8 October 2026**, Europe/Bucharest. Covers changes since 1 October, including the current uncommitted backend/mobile work. Goal: launch the UK rider app on Google Play and the Apple App Store, with reliable Free and £3.99/month Plus access.

**Release decision: not ready for public app launch.** The website can be published separately after resolving its hosting terms and verifying the deployed files. The API is currently crashed; payments, native authentication configuration, deletion and push delivery still need production setup and testing.

This is the current execution checklist. Older readiness documents contain dated evidence, not a competing launch sequence. No billing upgrade, agreement signature, infrastructure mutation, store submission or deployment was performed during this audit.

## Production infrastructure follow-up — 12 October 2026

The backend release work is now committed and pushed. Railway configuration has been reconciled and applied, the API is reachable at https://api.2shocks.com with a valid certificate, and the API and separate cron services run in Amsterdam. Neon production has 25 applied migrations, a recovery snapshot, and a verified isolated restore. The existing app_runtime role now has the missing feature permissions; Prisma schema drift was reconciled without altering existing application data. Rider data export now includes retained private records after bike removal. Dependency audit is clean. Ads and device push remain disabled.

The 8 October audit and earlier 12 October checkpoint below remain historical evidence. Their crashed-API, uncommitted-backend and missing-API-domain statements are superseded by this follow-up. This does **not** establish readiness for public app launch: RevenueCat is unconfigured, native authentication/device/push/store tests remain incomplete, public app legal/deletion pages are not deployed, account-deletion fulfillment needs implementation and verification, and operational alerts/agreements need confirmation.

Detailed evidence and recovery instructions: [backend production check](/Users/sergiunistorcosmin/Desktop/2shocks/2shocks-backend/docs/PRODUCTION-CHECK-2026-10-12.md). Final source and deployment verification are recorded there.

## Android-first checkpoint — 12 October 2026

This checkpoint supersedes the earlier enrollment status and sets the immediate release order. The 8 October audit remains historical evidence; its test results were not rerun today.

### Rechecked today

- **Google Play:** organization account 7537480009883000609 has no setup warning and Create app enabled. Website ownership verified in Search Console under info@2shocks.com and in Play Console. Phone verification completed by founder. No app record yet.
- **Railway:** production still CRASHED on deployment 2de85be1-b332-4b87-b6b4-524cd02cbf5b. Environment has 24 staged operation entries; service config lists 23 staged variable changes and no live service variables. No public domain and no cron services. Source main remains configured; do not deploy its old unreviewed patch.
- **Neon:** existing 2shocks project remains in AWS London, PostgreSQL 17, seven-day history. Migration state and restore rehearsal not reverified today.
- **Clerk:** native API on, Android application list empty, no mobile SSO redirect URLs. Production native setup unfinished.
- **RevenueCat:** authenticated dashboard still asks to create a project. Other Chrome profile is logged out. No billing project configured in the inspected account.
- **Expo:** existing dashboard tab requires login. Builds, signing and FCM credentials remain unverified.
- **Public website:** /app-privacy, /app-terms and /delete-account all return 404. Search Console ownership is not proof these release pages are deployed.
- **Source:** backend/mobile commit heads unchanged from earlier audit; both still have substantial uncommitted release work. Mobile paywall still advertises bike removal/plate switching as a paid benefit, conflicting with Free replacement.
- **Maps, AdMob, hosting plan and processor agreements:** no fresh authenticated configuration review today; retain their earlier open tasks as unverified, not completed. No secrets retrieved, deployments triggered or provider configuration changed during this checkpoint.

### Execute in this order

1. **Freeze release code:** review/commit private-history/removal/mileage work, correct the Plus paywall, resolve release-blocking checks. Do not deploy an old committed backend against newer mobile contracts.
2. **Bring up staging API:** connect Neon development branch, rehearse migrations, package catalogue files, set Clerk/DVSA/Places credentials and independent security secrets. Test real auth, plate lookups, matching and garage search.
3. **Bring up production API:** reconcile old Railway patch, configure production database/provider settings, migrations, /ready healthcheck and HTTPS api.2shocks.com. Verify live functionality and recovery. Confirm required processor agreements and hosting arrangements.
4. **Create Play app and establish signing:** app name 2Shocks, downloadable app Free, package com.twoshocks.app supplied by first build. Sign in to Expo and establish EAS upload signing and Play App Signing. Obtain actual signing certificate fingerprints; registration needs the final Play certificate as well as test certificates where relevant.
5. **Finish Android auth/maps/push:** Clerk Android registration, restricted Maps SDK key, backend Places key, production EAS variables; Firebase/FCM v1 and EAS push credentials. Prove sign-in, maps and notifications in physical builds. Add separate reminder and retention-cleanup cron services; do not schedule the main API itself.
6. **Configure Plus billing:** Play merchant/tax/banking setup, £3.99 monthly subscription/base plan, RevenueCat project/Google app, rider_plus entitlement/current monthly offering, store credentials and authenticated backend webhook. Test sandbox purchases against staging, then configure final production billing.
7. **Complete deletion and public pages:** functioning in-app deletion-request path and public web resource, verified fulfillment through Clerk/database/providers, export including detached private records. Publish app privacy/terms/deletion pages that match actual behavior. For Android Google allows linking an in-app path to the deletion web resource and that resource may use support email; an automated erasure system is not itself mandatory, but actual timely fulfillment is. Keep the stronger native initiation work for later iOS compatibility.
8. **Build and internally test:** signed production-format AAB with correct target SDK, real API and production identity; isolated test configuration for billing. Exercise Free/Plus, replacements, history isolation, failures, purchases/restores and deletion on real Android devices. First release recommendation: ads off until separate consent/SDK/disclosure checks pass; update any ad-removal promises to reflect rollout accurately.
9. **Finish store submission:** descriptions/screenshots/icon, UK distribution, app-access reviewer instructions, privacy/deletion URLs, Data safety, content rating, target audience and ads declarations based on the actual binary. Apply any console-specific testing requirements; the new-personal-account 12-testers/14-days rule is not automatically imposed on this verified organization account.
10. **Submit and release:** final production health check, tested subscription/reminders/deletion, monitor/rollback plan, submit for review with controlled publication. Release after approval; add genuine Play download link to website. Apple approval is independent and does not block Android.

**Next practical task: review the release changes and repair Railway configuration.** In parallel the founder can log into Expo and complete any required company/provider contracts. Do not press Deploy on the old staged configuration.

## 1. What changed this week and how it affects the website

| Change | Evidence | Marketing/release implication |
| --- | --- | --- |
| Free includes service plans, rider-entered service history and garage sheets | Backend entitlements and service-plan routes; mobile flows | History is no longer a Plus-only selling point. Updated website and strategy accordingly. |
| Both plans permit bike removal and repeated replacement | Backend 8 October commit `0e52098`; current mobile removal flow | Free means **one active bike at a time**, not one number plate forever. Plus means five simultaneous bikes. Removed paid-removal/switching claims. |
| Private rider history does not transfer by registration or VIN | Current uncommitted backend repository changes and mobile handoff | Removal detaches the bike, clears rider VIN/nickname/lookup linkage and cancels reminders. Records remain privately stored; re-adding does not automatically recover them. Updated terms/privacy. This version must be committed before deploying. |
| Mileage entry supports miles/km and advisory comparisons | Uncommitted backend mileage-check endpoint; mobile forms/hook | Historical cached DVSA readings support a warning, not verified mileage, fraud detection or a save block. Do not market stronger claims. |
| UK garage discovery and validated rider inputs | Backend `130f1b3`, mobile `34ef00a` | No nationwide partner/booking claim. Keep rider-reviewed enquiries distinct from confirmed bookings. Test UK boundaries and errors. |
| Internal catalogue/supplier naming and matching contracts | Backend `9fff448`, mobile `208b48b` | No Haynes/Workshop reinstatement. Internal renaming does not itself establish commercial rights to underlying source data. |
| MOT history display refinement | Mobile `c767ada` | Small display change; no change to offer or pricing. |

Important: the 8 October **committed** backend version included optional history sharing. The **local uncommitted** version removes publishing/reading shared history. Railway's crashed deployment points at the committed version. Deploying it before releasing the local privacy changes would create a mismatch with the prepared privacy notice.

Remaining mobile copy issue: `components/RiderPlusPaywall.tsx` still advertises removing bikes/switching plates as a Plus benefit. Correct this before release. Removal and account erasure are separate actions.

Current offer:

- **Free:** sign-in; one active bike; unlimited replacement after removal; available DVSA records; confirmed model/year; catalogue suggestions and retail parts estimates; service plans, rider-entered service history, garage sheets and rider-sent enquiries.
- **Plus: £3.99/month:** all Free tools across up to five active bikes, custom reminders/notification alerts and no ads. No annual plan or trial.
- Advertising remains disabled for production. If enabled later: eligible consenting adult Free riders only; one labelled image-only Parts placement. Under-18, unknown-age, refusing-consent and Plus riders retain access without ads.
- No receipt storage, verified service history, automatic email sending, integrated bookings, garage quotes, Workshop reference or guaranteed part fitment is promised.

Business recommendation: keep the useful maintenance tools free. Sell Plus on multiple-bike convenience and dependable reminders. Since refusing consent also removes ads, ad removal alone is a weak reason to subscribe. Do not narrow Free again merely to make the paywall sound stronger.

## 2. Provider status actually checked

“Verified” below means observed on 8 October; it does not mean every integration was exercised on a device.

| Provider | Current evidence | What remains |
| --- | --- | --- |
| Railway | Production API **CRASHED**, latest deployment `2de85be1-b332-4b87-b6b4-524cd02cbf5b`, commit `0e52098`. Runtime log explicitly reports missing `DATABASE_URL`. Zero running replicas. One service, no domains, no cron services/volumes. Configuration is staged, not live. Inventory reports 23 staged changes; health reports 24 operation entries. Region `sfo`. | Reconcile variables against current source, deploy complete release, add HTTPS domain/readiness check and two scheduled jobs. DPA was unsigned at last owner confirmation; current signature status unconfirmed. |
| Neon | `2shocks`, AWS London `aws-eu-west-2`, PostgreSQL 17, Launch plan. Protected default `production` and separate `development` branches ready. Seven-day recovery history. | Verify applied migration list; rehearse migrations and recovery away from production. Use pooled runtime and direct migration connections. |
| Vercel | Still **Hobby**. Apex redirects 308 to `www`; both configured correctly. Live home/privacy/terms return 200. `/app-privacy`, `/app-terms`, `/app-ads.txt` return **404**. Live home still contains Haynes/Workshop wording. | Resolve commercial hosting eligibility, publish current local site, verify notices and statistics opt-out. Company product advertising is commercial use even without checkout. [Vercel rule](https://vercel.com/docs/limits/fair-use-guidelines#commercial-usage). |
| Clerk | Existing production instance accessed after session refresh. Native API on; no iOS or Android applications registered; no mobile SSO redirect URLs. Setup shows 1/3 tasks. DNS CNAMEs for Clerk/account portal exist. | Register release identities/fingerprints and required redirects; supply production keys to the appropriate services; verify domain status and real sign-in/email/session behaviour. |
| RevenueCat | Signed-in dashboard still asks to **create a project**; no live transactions. | Create project, both store apps, product mapping, `rider_plus` entitlement, current monthly offering and webhook. Code integration alone is not billing setup. |
| Google Maps / Places | Business Google account `info@2shocks.com`; project `shocks-garage-discovery`. Places API (New) enabled. One backend key restricted to Places API (New). No native Maps keys listed; Maps SDKs are absent from enabled APIs shown. Free-trial account banner has 78 days remaining. | Billing continuity, quotas/budgets; platform Maps setup where used; backend key in Railway. Native keys restricted to bundle/package and release certificate. No key values retrieved. |
| AdMob / UMP | Publisher `pub-1348658013604630`. Two-app message “2Shocks — European advertising choices” remains Draft, publication off, missing app privacy URLs. Visible Consent/Do not consent/Manage options. EEA/UK/Switzerland selected, Everywhere off. | Public privacy URL, store linking/app-ads verification, native consent tests, app review and ad activation. Keep regional choice unchanged. |
| Expo / EAS | Source project `4b98a213-a4cd-47d3-b276-d0f393dc7523`; owner `nistorsergiu2112`, slug `2shocks-mobile`. Development/preview/production profiles exist. Dashboard login was rejected; current build/signing/push inventory could not be verified. | Owner login; production/staging build variables, signing and APNs/FCM credentials; successful store-format builds. |
| Apple | App Store Connect requires sign-in. Enrollment/payment/contracts/products not independently verified. | Organization membership, app record, signing, banking/tax/paid-app agreements, subscription and review. |
| Google Play | Both inspected Google accounts (personal and `info@2shocks.com`) reach developer-account signup; this does not establish the UK co-founder's or other accounts' status. | Confirm company developer account, verification, app record, app signing, payments profile, subscription and testing track. |
| GoDaddy / Microsoft 365 | Owner-confirmed mailbox `info@2shocks.com`; DNS MX points to Outlook and Clerk CNAMEs remain present. | Actual inbound/reply test, mailbox MFA/access, provider retention/DPA records. UK co-founder owns requests; closed support enquiries retained 12 months with justified exceptions. No retention rule or mailbox delivery verified here. |
| DVSA | Current production client in source uses MOT History API registration endpoint, OAuth client credentials and API key. Configuration names absent from Railway inventory. | Configure authorized credentials, verify live lookups/quotas/expiry/failure handling from deployed API. [DVSA authentication](https://documentation.history.mot.api.gov.uk/mot-history-api/authentication/). |
| Catalogue/price files | Local runtime packaging and matcher implemented; JSON prices default. Tests pass. | Release packaged data alongside API and prove production parity; document permission/licensing and price freshness for each source. |

Not needed for this rider launch: **HaynesPro, Workshop, Stripe garage subscriptions, Redis queue worker, Resend or a new analytics platform**. The existing production worker is explicitly unfinished. Stripe routes/code are present for later garage billing; do not expose an unconfigured garage product as part of this release. A `DVLA_VES_API_KEY` line in the example file is not a working integration: no DVLA runtime integration was found. Do not promise live tax checks.

Firebase/FCM is needed if Android push uses Expo's delivery service; this is not a decision to add Firebase Analytics. Existing Vercel statistics remain default-on with the prepared website opt-out. App experience measurement is separately opt-in.

## 3. Chronological execution plan

Estimates below are working targets **after access and company decisions are available**, not guaranteed approval dates. Company/store verification and review can extend the calendar. Start those processes immediately while engineering work proceeds.

### Step 1 — settle company accounts and hosting (start day 1)

**Owner: UK co-founder/account holder, supported by engineering.**

1. In [Apple Developer](https://developer.apple.com/programs/enroll/), confirm or enroll **2 SHOCKS LTD as an organization**. Prepare legal name/address, company website, business email, authority to bind the company and D-U-N-S details. Do not create a personal seller account by accident. Complete Apple's requested verification and membership payment personally. [Enrollment requirements](https://developer.apple.com/help/account/membership/program-enrollment/).
2. In [Google Play Console](https://play.google.com/console/), confirm or create the company **organization** developer account. Complete organization/contact/website verification and developer fee. Use the intended long-term account owner; invite the other founder with appropriate access.
3. In Vercel → Team → Billing, choose Pro, a commercial-compatible alternative host, or obtain a written exception. Do not assume zero website sales makes Hobby eligible.
4. Sign Railway's applicable DPA and save the completed copy. Record the applicable processor terms/transfer basis for Neon, Clerk, RevenueCat, Expo, hosting and business email; do not simply mark every provider “signed.” [Railway DPA](https://railway.com/legal/dpa), [Clerk DPA](https://clerk.com/legal/dpa), [RevenueCat DPA](https://www.revenuecat.com/dpa), [Vercel DPA](https://vercel.com/legal/dpa).
5. Check company access/MFA, recovery methods and which founder owns billing and support. Verify `info@2shocks.com` receives and sends email. Apply the approved 12-month closed-enquiry process and record exceptions.

**Done when:** hosting eligibility resolved; enrollment in progress/complete; account owners and required agreements recorded. No secrets need to be pasted into chat.

### Step 2 — freeze and reconcile the release (days 1–2)

**Owner: engineering.**

1. Review and commit the current backend/mobile changes together. Repositories are dirty; a GitHub deploy cannot include uncommitted files.
2. Specifically include removal/private-history changes and the mileage endpoint before publishing promises based on them. Keep the compatibility migration/table; do not drop it casually.
3. Correct the mobile paywall: remove removal/switching as paid benefits. Audit signup, Plus, downgrade and removal screens against the offer in section 1.
4. Resolve backend lint's control-character regex rule intentionally, preserving input rejection. Fix or explicitly triage mobile lint errors; do not describe the existing baseline as clean.
5. Verify screenshots against the candidate release. Current landing screenshots were retained because removal/transfer is not a featured screenshot claim; recapture any that show stale paywall text before store submission.
6. Confirm commercial use/display rights for packaged catalogue and supplier-price data. Free online access and renaming source fields do not themselves grant republication rights. Record source, permission, permitted use, update date and attribution requirements.

**Done when:** repeatable candidate commit IDs; aligned copy; tests/type checks pass; lint issues resolved or documented with a justified disposition; data rights recorded.

### Step 3 — publish the company website (day 1–2, after hosting choice)

**Owner: engineering; founder authorizes production release.**

1. Publish the current landing repository, not an old deployment. It is a static Next export; no database, Clerk secret, DVSA credential or RevenueCat server secret belongs in this website.
2. Verify HTTP 200 and real content for `/`, `/privacy`, `/terms`, `/app-privacy`, `/app-terms` and plain-text `/app-ads.txt`. Verify apex → www redirect and images/navigation on mobile.
3. Check the website's statistics opt-out remains disabled across reload/navigation and re-enable restores statistics. Preserve existing GoDaddy MX/Clerk records.
4. Keep “coming soon” and planned monthly pricing until actual store availability is approved. Remove all live Haynes/Workshop claims by publishing the updated files.
5. Prepare a clearly discoverable account-deletion web route, described in step 7, for the Play listing. Do not publish a claim of automatic erasure before it works.

**Done when:** public content matches the release package and the app privacy URL can be used by stores/UMP. Website publication does not declare the app launched.

### Step 4 — deploy staging, then the production API (days 2–4)

**Owner: engineering. Where:** [Railway project](https://railway.com/project/f1c4dac5-1457-472e-b74d-98eb253fa3d0), [Neon project](https://console.neon.tech/app/projects/rough-pond-14987649).

1. Create/configure an isolated staging API connected to the Neon development branch. Staging uses its own provider settings, secrets and test identities. Never run fixture seeds against production.
2. Review the old staged Railway configuration against current `src/shared/config/env.ts`. Remove obsolete Haynes/Workshop entries from the proposed release configuration. Do not press Deploy simply because variables are visible in the editor.
3. Set the actual required settings in section 4 below. Current crash is missing live `DATABASE_URL`; applying that alone is not the full production configuration.
4. Choose the API region before launch. Prefer an available European Railway region near the London database for latency; if keeping `sfo`, retain the correct notice and transfer arrangements. Region changes do not eliminate all provider international processing.
5. Configure Node 22.13+ and build dependencies. Build sequence: `npm ci --include=dev`, `npx prisma generate`, `npm run build`. The build must include packaged matcher/catalogue files. Pre-deploy: `npm run prisma:deploy`. Start: `npm start`.
6. Rehearse every pending migration in staging and inspect migration status. Create an appropriate recovery point before production migration; do not infer schema currency from a ready database badge.
7. Add a Railway HTTPS domain, ideally `api.2shocks.com`, using the exact Railway DNS instruction. Set backend `APP_BASE_URL` to its API origin. Add the DNS record without modifying mailbox/Clerk records.
8. Configure readiness `/ready` and check `/health`. `/ready` checks the database; it is not proof of DVSA, Clerk, payments, catalogues or push health. Keep one API replica while rate limiting is process-local.
9. Prove live DVSA lookups and catalogue parity, unknown/manual model cases, absent prices, throttling and timeouts. Verify revoked/expired/wrong-party sessions, ownership isolation and duplicate requests.
10. Only then apply the reviewed production configuration/migrations and deploy the candidate. Verify from an external network and a device.

**Done when:** stable reachable HTTPS API; current schema/catalogues; valid auth and live vehicle/garage results; rollback procedure recorded.

### Step 5 — finish native authentication and Google Maps (days 3–5)

**Owner: engineering with Apple/Play account holder.**

1. Clerk production → Configure → Developers → Native applications: register iOS `com.twoshocks.app` with the correct Apple App ID prefix, and Android `com.twoshocks.app` with the actual release SHA-256 certificate(s). For Play-distributed builds, use the Play **app-signing** certificate, not only a debug/upload certificate.
2. Confirm production domain readiness and SDK-required app associations. Configure exact SSO redirect URLs if the release uses SSO; the current scheme is `twoshocks`. Test returning from the native browser/auth session.
3. Put Clerk's production publishable key in EAS and production secret key only in Railway. Derive `CLERK_AUTHORIZED_PARTIES` from trusted production token issuers/parties used by your flows; do not wildcard or guess them to suppress validation errors.
4. Exercise signup, email code/password flows actually shipped, resend/rate limits, sign-out, reinstall, account switching, expired sessions and deletion. If adding Google/social login on iOS, check Apple's applicable equivalent-login requirements; do not assume every app must add Apple login when only its own email auth is offered.
5. Google Cloud → `shocks-garage-discovery`: verify billing continuity beyond trial and create budgets/quotas. Budgets alert; they are not a hard spending cap.
6. Keep backend Places key server-side and API-restricted. Enable/configure native Maps SDKs and separate platform-restricted keys if the chosen map provider requires them. Review iOS actual map provider; Apple Maps does not require a Google Maps SDK key. Android key restrictions must include the final app-signing SHA-1 where Google requires it.
7. Test map rendering, nearby search, location refusal/manual search, empty results, UK-only boundaries, listing attribution and review/send email flow. A Maps listing is not an integrated partner.

**Done when:** both release identities sign in reliably and garage discovery works with restricted credentials and correct permissions.

### Step 6 — configure subscriptions (days 3–6, after store accounts/app records)

**Owner: account holder for contracts/banking; engineering for mapping/testing.**

1. Create app records on both stores with identity `com.twoshocks.app`. Complete applicable paid-app/merchant agreements, tax and banking details directly in the consoles.
2. App Store Connect → app → Monetization → Subscriptions: create Plus subscription group and monthly auto-renewing product; set UK price **£3.99**, no trial/annual product. Add required localization/review screenshot.
3. Play Console → app → Monetize → Products → Subscriptions: create Plus product and monthly auto-renewing base plan with UK **£3.99**; configure and activate the appropriate base plan once ready. Record immutable product/base-plan identifiers.
4. RevenueCat → Create project → add Apple/Google apps and required store credentials using current provider instructions. Import products; attach them to entitlement **`rider_plus`**; create the current offering with the monthly package.
5. Mobile public SDK keys go to the correct EAS platform variables. Server API key/webhook authorization go to Railway. Mobile code logs RevenueCat in using the **backend account ID**, not an email address or an assumed Clerk ID. Preserve this identity mapping across restore/account changes.
6. Configure RevenueCat webhook at `https://api.2shocks.com/webhooks/revenuecat` (substitute the chosen origin), match server secret, then verify authenticated delivery and replay handling.
7. Test purchase, cancellation, renewal, restore/reinstall, refund/revocation, grace/expiry, duplicate/out-of-order webhook delivery, account changes and interrupted sync. Backend access must agree with store/RevenueCat state.
8. TestFlight uses sandbox purchases. Run sandbox billing against the isolated staging API with sandbox enabled there; **do not enable `REVENUECAT_ALLOW_SANDBOX` in the production API**, which rejects it by design. Promote a separately configured final build to the production API and validate real release behaviour.

**Done when:** store checkout shows £3.99 monthly and tested entitlement state unlocks the actual five-bike/reminder offer. [RevenueCat entitlement setup](https://www.revenuecat.com/docs/getting-started/entitlements).

### Step 7 — implement and prove account deletion/export (days 3–6)

**Owner: engineering; UK co-founder for operations.**

1. Add a secure in-app deletion initiation/confirmation flow. The current button opens email; this is insufficient for this ordinary consumer app under [Apple's deletion guidance](https://developer.apple.com/help/app-review/guideline-reference/5-1-1-account-deletion). Manual fulfillment can be acceptable, but initiation must not require a support email.
2. Add the matching authenticated backend deletion/request endpoint and an operational workflow for Clerk identity/session removal, account-associated database data, push tokens, ad preferences/events and necessary provider records. Document retained records and lawful reasons. Prevent an auth request/webhook from recreating a deleted account inadvertently.
3. Provide a public web deletion-request route on the company domain, with app/company identity, request steps, verification, retained-data explanation and billing warning. Add its URL to Play Console's Data safety deletion field. A deletion request must be possible without reinstalling the app. [Google requirements](https://support.google.com/googleplay/android-developer/answer/13327111?hl=en).
4. Fix data export to include **owner-linked private history/plans for detached bikes**. Current `/me/data-export` walks `account.bikes`; detached bikes have `ownerAccountId=null`, so their retained rider records are omitted from this export path. Include appropriate directly account-owned records without exposing another rider's data.
5. Retained legacy shared-history copies need explicit review/cleanup policy: the local code makes them inaccessible, not erased. Test account erasure reaches any associated legacy copy or documents a valid retention exception.
6. Explain that account erasure does not cancel the store subscription; provide store management links. Don't force a rider to wait until expiry to request deletion.
7. Run the full workflow with disposable staging users on both platforms. Verify erasure, sign-in behaviour, export completeness, retries and billing caveats; record completion evidence. Update the public notice to describe the implemented flow after it changes.

**Done when:** an ordinary rider can initiate erasure in-app and via the public web resource, and every retained data category has a tested handling path.

### Step 8 — push notifications and scheduled work (days 4–6)

**Owner: engineering. Where:** Firebase/Google Cloud, Apple Developer, Expo EAS Credentials, Railway.

1. For Android, configure Firebase FCM v1 credentials and app configuration for `com.twoshocks.app`. Current Expo config does not name an Android `googleServicesFile`; add the correct setup if required by the release integration. Upload the FCM service credential through EAS, never as a client public variable.
2. For iOS, configure APNs credentials, capability and signing/provisioning for the company team. Verify EAS project association and push-token registration on real devices.
3. Add **separate** Railway cron services from the backend build: reminders `npm run jobs:reminders` (recommended every 5 minutes) and cleanup `npm run jobs:rider-data-cleanup` (daily, e.g. 03:00 UTC). They call protected API job endpoints using the API origin and job secret. Do not turn the always-on API into a cron service.
4. Do not start `start:worker`; live worker exits as unfinished. Redis is not a substitute for these jobs.
5. Enable push only after permission/token/delivery/receipt tests. Handle invalid devices, refusal, logout/account switches, removed-bike cancelled reminders, Plus expiry, retries and duplicate sends. Test saved reminders in local timezone, app closed/background and both operating systems.
6. Verify cleanup actually runs: expired lookup cache and optional experience events older than 90 days. Current cleanup returns `purgedAccounts: 0`; it is **not** an account-deletion implementation or an automatic dormant-account purge.

**Done when:** reminders arrive at the intended time and both jobs have logged successful executions plus failure alerts. [Expo push setup](https://docs.expo.dev/push-notifications/push-notifications-setup/).

### Step 9 — configure build environments and signing (days 5–7)

**Owner: engineering, with account holder for credentials.**

1. Sign in to [Expo project](https://expo.dev/accounts/nistorsergiu2112/projects/2shocks-mobile). Review existing builds and credentials rather than assuming they exist from local simulator work.
2. Explicitly configure EAS production and staging/test profiles/environments. Select the right API, Clerk instance, RevenueCat app and ad switches for each. No localhost/LAN endpoints, mock purchases or screenshot mode in release.
3. Keep `com.twoshocks.app` synchronized across Expo, native projects, Clerk, Maps, stores, RevenueCat, Firebase and AdMob. Use distinct IDs for a separate installed staging variant if needed.
4. Use managed/verified distribution signing and Play App Signing. Generated local Android release Gradle currently points at debug signing; Android is gitignored rather than a committed source directory. This is not proof an EAS build uses debug signing: inspect the actual built AAB and EAS credentials. Ensure clean native generation preserves the custom Clerk/Gradle compatibility changes needed by this app.
5. Expo config/native plugin changes require a fresh native build. Verify effective compiled SDK/dependencies/manifests and permissions; source package versions are not artifact proof.
6. New ordinary Android app submissions currently require **API 36+**. Apple uploads require **Xcode 26+/iOS 26 SDK+**. Choose a compatible EAS image and inspect the final artifact. [Play target API](https://support.google.com/googleplay/android-developer/answer/11926878?hl=en-EN), [Apple requirements](https://developer.apple.com/news/upcoming-requirements/).
7. Build signed AAB and iOS archive using `eas build --platform android --profile production` and the equivalent iOS command after prerequisites are satisfied. Configure submit credentials; `eas.json`'s empty submit object is not evidence of completed store setup.

**Done when:** reproducible signed store-format builds, correct backend and production identities, install/launch proven on physical Android/iPhone. Test iPad too while `supportsTablet: true` remains configured.

### Step 10 — advertising, an independent release gate (parallel or after first app launch)

**Owner: engineering and AdMob account holder.**

Recommended first release: ship the useful Free/Plus app with production ads and optional experience measurement off until their separate device/privacy tests pass. This is a rollout recommendation, not a change to the agreed long-term offer. Keep public copy accurate if ads remain off.

1. AdMob → Apps: verify final package/bundle links and image-only native Parts units; finish account/app readiness steps. Do not click real ads for testing.
2. Privacy & messaging → European regulations: set both apps' privacy URL to published `/app-privacy`; preserve visible refusal and **EEA/UK/Switzerland only** targeting. Message is currently blocked by missing URLs.
3. Review Google-only partner/purpose configuration and actual SDK use together: the generic draft describes personalized advertising and possible precise geolocation while this app requests NPA and does not deliberately attach precise location/bike data. Do not blindly rewrite mandatory text or declare “no data” based on NPA.
4. Link company website in store listings and verify `app-ads.txt` discovery on the relevant hostname. Test canonical redirects with Google's verification tool.
5. In physical native builds using Google test ads, prove consent/refusal/withdrawal, under-18/unknown age, Plus and pending purchase suppression, no-fill, account switch, cooldown/caps and optional measurement refusal. UMP requires live configuration before it can be tested completely; publish its message when the notices/configuration are ready while ad serving remains disabled.
6. Complete store privacy/Data safety answers based on the **actual bundled SDK**, even if remote ad serving is initially off. Inspect whether the SDK is present/initializes; a backend kill switch alone does not remove an SDK from the binary.
7. Only after all checks, enable the intended EAS build flag and carefully roll out backend `AD_EXPERIMENT_ENABLED=true`, `AD_KILL_SWITCH=false`. Keep a kill switch and a comparison group. Measurement consent is separate from ad consent.

**Done when:** ad processing matches public notices, store answers and real device behaviour. Ads may follow the first store release; do not make production billing/API reliability dependent on ad revenue.

### Step 11 — beta tests and listing preparation (week 2, after dependencies)

**Owner: engineering + founders/testers.**

1. Upload Android to Play internal testing and iOS to TestFlight. Complete external-beta review where applicable. Use the isolated sandbox API for beta billing and recheck the final production-connected artifact separately.
2. Recruit real UK testers on physical devices. Test signup → plate/model confirmation → save → official records → parts/estimate → plan/history → garage enquiry. Test no records/no match/no price, offline/timeout and denied permissions.
3. Test repeated Free remove/re-add, private history isolation, advisory mileage/date/units, second-bike gate, five-bike cap, downgrade/read-only behaviour and reminders. Validate the archived-history/export fixes from step 7.
4. Complete each store's support/privacy URLs, descriptions, accurate screenshots, icon, age-rating questionnaire, data-collection/sharing answers, app-access/reviewer instructions, export-compliance questions and country availability (UK initially). Product 16+ eligibility is separate from answering the store rating questionnaire honestly.
5. Give review a working sign-in route/account that does not depend on the reviewer accessing your mailbox; test those instructions. State that garage enquiry is rider-sent and not a confirmed booking. Include Plus purchase information and submit the subscription with the app as required.
6. If the actual Play account is a new **personal** account, plan for at least **12 continuously opted-in closed testers for 14 days**, followed by production-access application. Do not impose that personal-account rule on an organization account without checking its actual console requirements. [Google testing rule](https://support.google.com/googleplay/android-developer/answer/14151465?hl=en).

**Done when:** recorded end-to-end beta evidence, no unresolved release-blocking defects, complete listings and console-specific testing eligibility.

### Step 12 — submit, release and monitor (week 3+, approval dependent)

**Owner: account holder/engineering.**

1. Submit the verified final builds and monthly product for review. Use manual release controls so an approval does not publish an unready service automatically.
2. Before releasing: production API/DB healthy; support inbox monitored; deletion/retention jobs proven; subscriptions configured; final privacy answers and public pages match the binary. Keep ads off unless step 10 passed.
3. Once approved, release to UK users. Use a small staged/phased rollout where the console supports it, or a controlled initial launch, then expand after checking actual errors and support feedback.
4. Add genuine store links to landing badges, change coming-soon/pricing language to actual availability, refresh screenshots, sitemap dates and app privacy operational wording. Do not publish download links before the listings are accessible.
5. Monitor crashes/errors, API readiness/latency, DVSA/Places quotas and cost, purchase/webhook mismatches, cron failures and deletion requests. Configure an uptime alert now; choose crash reporting deliberately rather than claiming Sentry already exists. Adding a provider requires corresponding privacy/disclosure updates.
6. Keep rollback instructions and previous artifacts. Do not automatically reverse database migrations; use the rehearsed recovery plan. Native feature/plugin changes usually need a new reviewed binary; EAS Update is not configured as a production escape hatch here.

**Done when:** both UK listings accessible, real users can complete the core flow, paid access works and operations respond to failures.

## 4. Configuration checklist — exact names in the current source

### Railway API

| Setting | Required value/source |
| --- | --- |
| `NODE_ENV`, `AUTH_MODE`, `MOCK_MODE` | `production`, `clerk`, `false` |
| `DATABASE_URL`, `DIRECT_URL` | Neon production pooled runtime / direct migration connections, TLS; never mobile variables |
| `APP_BASE_URL` | Actual HTTPS API origin, not marketing website |
| `CLERK_SECRET_KEY`, `CLERK_AUTHORIZED_PARTIES` | Production Clerk server key and exact trusted parties |
| `CORS_ORIGINS` | Exact HTTPS browser origins actually calling API; native networking is not fixed by wildcard CORS |
| `SHOP_KEY_PEPPER`, `INTERNAL_JOBS_SECRET`, `LOOKUP_TOKEN_HMAC_SECRET_V1`, `VEHICLE_LOOKUP_CACHE_HMAC_SECRET` | Four independently generated non-default secrets, at least 32 characters each |
| `TRUST_PROXY_HOPS` | Verified host proxy-hop count; do not guess |
| `DVSA_MOT_CLIENT_ID`, `DVSA_MOT_CLIENT_SECRET`, `DVSA_MOT_API_KEY` | Authorized production MOT History credentials; verify scope/token settings |
| `GOOGLE_PLACES_API_KEY` | Server Places key; absent from present Railway inventory |
| `REVENUECAT_API_KEY`, `REVENUECAT_WEBHOOK_SECRET`, `REVENUECAT_ENTITLEMENT_ID` | Server key, matching webhook authorization, `rider_plus` |
| `REVENUECAT_ALLOW_SANDBOX` | `false` in production; separate sandbox staging only |
| `RIDER_GARAGE_INCLUDED_BIKES`, `RIDER_GARAGE_MAX_ACTIVE_BIKES` | `1`, `5` |
| `PRICES_SOURCE`, `MATCHER_DATA_DIR` | `json` unless intentionally changed; verify packaged data path/default in deployed build |
| `PUSH_NOTIFICATIONS_ENABLED`, `EXPO_ACCESS_TOKEN` | Enable only after push proof; use Expo push-service authorization if configured/required |
| `AD_EXPERIMENT_ENABLED`, `AD_KILL_SWITCH` | Initially `false`, `true` |
| Limits / cache / logging | Review daily DVSA quota (default 50/account), search/lookup rate limits, cache TTL and logging; provider response summaries off by default |

The old staged variables omit several present-day secrets/provider settings. Unknown obsolete variables may be ignored by schema parsing, but leaving them is misleading operationally. Runtime startup checks do not validate every optional provider: explicitly test each marketed feature.

### EAS/mobile production

| Setting | Source |
| --- | --- |
| `EXPO_PUBLIC_API_URL`, `EXPO_PUBLIC_API_HEALTH_URL` | HTTPS API and `/health` for the selected environment |
| `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` | Production publishable key for final release |
| `EXPO_PUBLIC_EAS_PROJECT_ID` | `4b98a213-a4cd-47d3-b276-d0f393dc7523`, confirm project ownership |
| `EXPO_PUBLIC_REVENUECAT_IOS_API_KEY`, `EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY` | Correct app-specific public SDK keys |
| `EXPO_PUBLIC_REVENUECAT_ENTITLEMENT_ID` | `rider_plus` |
| `GOOGLE_MAPS_IOS_API_KEY`, `GOOGLE_MAPS_ANDROID_API_KEY` | Platform-restricted native keys where required; not backend Places key |
| `EXPO_PUBLIC_ADS_ENABLED` | `false` until ad build/release checks pass |
| Ad configuration when shipping ads | `ADMOB_IOS_APP_ID`, `ADMOB_ANDROID_APP_ID`, `EXPO_PUBLIC_ADMOB_IOS_PARTS_UNIT_ID`, `EXPO_PUBLIC_ADMOB_ANDROID_PARTS_UNIT_ID` |

Never bundle database, DVSA client-secret, Clerk secret, RevenueCat server key, FCM service credential or job secret. `EXPO_PUBLIC_*` values are visible in the client. Native Maps/AdMob app identifiers are also in the compiled app; restrictions protect keys, not an assumption that EAS “secret” visibility makes the final app value private.

## 5. Verification performed during this review

- Backend: **84 files / 609 tests passed**; TypeScript passed. ESLint: **1 error, 7 warnings**, including intentional input-control regex flagged by `no-control-regex`.
- Mobile: **40 files / 341 tests passed**; TypeScript passed. Full ESLint: **35 errors, 13 warnings**; examples include React ref/render/effect rules and a globals rule in the new mileage-hook test. This is not a clean release baseline.
- Landing: lint, five component tests, static build and eight-route SEO validation passed. Production-export browser tests: **30 passed, four intentional device-specific skips**, covering desktop/mobile navigation, accessibility, responsive layout, tour, legal pages and statistics opt-out.
- Tests were run using explicit Node 22.13.0 after the shell's initial `npm test` selected an incompatible runtime. That first harness failure was not a failing backend test.
- Provider review: read-only Railway/Neon connectors; authenticated browser inspection for Vercel, Clerk, RevenueCat, AdMob and Google Cloud. Public HTTPS/DNS checks. Expo authentication rejected; Apple required login. No provider credentials exported or stored in this document.
- No production purchases, device push deliveries, live customer erasure, migration/recovery rehearsal or store build/submission was performed. Unit tests use mocks and do not establish these outcomes.

## 6. Founder actions to begin now

1. Resolve Vercel commercial hosting and authorize the prepared site release.
2. Confirm Apple/Play organization enrollment; start verification if incomplete.
3. Sign Railway DPA if still unsigned; retain provider contract records.
4. Sign in to Expo, App Store Connect and the intended company Play account for verification.
5. Confirm who owns store contracts/banking and provider billing; UK co-founder already owns support/privacy requests.

Everything else above can then be worked through with engineering support in order. Account approvals, signatures and payments stay with the company account holder; missing access should be recorded as unknown, not assumed complete.

## 7. Enrollment work started — 8 October 2026

- Google Play: organization type **A company or business**, signed-in owner `info@2shocks.com`, public developer name **2Shocks**. Existing Google payments profile **2 SHOCKS LTD**, correct Feltham address, selected for verification. Enrollment is paused at the D-U-N-S field; no developer account creation, contract acceptance or payment completed.
- Official D&B lookup by Companies House number **17067783** returned **2 SHOCKS LTD, 2 Spring Corner, FELTHAM, TW13 4PA**. Requested the existing D-U-N-S number through D&B's lookup email form to `info@2shocks.com` (contact name Sergiu Nistor). The site returned its thank-you confirmation; delivery/number not yet verified. This was retrieval of an existing record, not a new D-U-N-S application.
- Apple: opened **Start your enrollment**; sign-in required. The company account holder must sign in and complete two-factor authentication before enrollment can proceed. The latest visible recovery screen asks the owner to unlock the Apple Account using a signed-in iPhone or Mac; credential recovery stays with the owner. No Apple agreement or membership purchase completed.
- Next: retrieve the nine-digit number from the company inbox; sign in to Apple; confirm legal account-holder contact/authority when requested. Resume both organization forms and stop for the account holder at agreement/payment or identity-verification steps.

### Enrollment follow-up — D-U-N-S confirmed

- D&B's email dated 8 October 2026 confirms **234627350** for **2 SHOCKS LTD**, 2 Spring Corner, FELTHAM, England, TW13 4PA. Companies House **17067783** is a different identifier.
- Google accepted the matching D-U-N-S details and confirmed the existing payments profile was updated. Organization details entered: size 1–10, existing company contact phone from founder-provided document, website `https://www.2shocks.com`. Public email `info@2shocks.com` verified through the Google Account. Paused at public-profile step: public telephone and publication acknowledgement remain unset pending founder decision. No registration fee paid, developer account completed or terms accepted.
- Apple sign-in completed by owner; continued enrollment on the web to personal-information form. It requires account holder's legal identity/phone/residential address; current account region Romania. Fields remain empty pending owner input. Do not substitute co-founder/company details for this personal form. Apple warns the name cannot be adjusted after Continue. Organization enrollment has not yet been selected/submitted.

### Enrollment progress after owner actions

- Apple: owner completed personal-information step. Selected **Company / Organization** (replacing default Individual / Sole Proprietor). Company legal name **2 SHOCKS LTD** and D-U-N-S **234627350** entered. Current company lookup requires CAPTCHA completion by owner; no submission/payment/agreement completed by agent. Accessibility tree contains a government-organization message that is not visible in the screenshot before lookup; do not treat it as a verified classification result. Check actual company match after CAPTCHA.
- Google Play: public-profile step now marked complete after owner actions. Current step **About you** requires personal Android/Play experience and declaration of other Google Accounts used for Play Console in the last six months. Awaiting owner facts before answering; do not assume no previous apps/accounts.

### Enrollment applications prepared/submitted

- **Apple company enrollment submitted** after owner completed personal details and supplied CAPTCHA/work-email verification. Confirmed review screen: Company / Organization, 2 SHOCKS LTD, D-U-N-S 234627350, matching Feltham address, `https://www.2shocks.com`, company phone, `info@2shocks.com`. Result: **Your enrollment is being processed**, enrollment ID **6QQUFX9FT6**. Apple will email next steps after verifying signing authority. Membership is not yet active; no license agreement accepted or membership payment made by agent.
- Google: owner confirmed no previous published apps/other Play developer accounts. Entered current Expo/React Native development background; one planned app, revenue through ads/subscriptions, none of listed special categories. Contact Andrei Iordachescu / company email verified / existing company phone / UK English. Paused at **Terms**. Mandatory distribution agreement and Console terms unchecked; optional marketing/feedback unchecked; **Create account and pay** not pressed. Console shows one-off **USD 25** fee and possible identity verification. Owner must review/accept terms and complete payment personally, then verification status can be inspected.
