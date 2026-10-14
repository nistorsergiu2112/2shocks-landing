# 2Shocks legal and launch readiness

Reviewed: 9 September 2026. This document now tracks **app readiness separately from the website**. Public `/privacy` and `/terms` have been replaced with website-only documents; the former app drafts are retained in `docs/legal-archive/`. Earlier draft-page and website-gate entries below are historical where superseded by this update. See `HOSTING-HANDOFF.md` for current website deployment steps.

Website update: founder confirmed GoDaddy with Outlook/Microsoft 365 hosts `info@2shocks.com`. Workshop display remains unchanged at the founder's explicit request; no publication permission has been independently established by this work. Website documents no longer imply that app providers process ordinary site visits. No hosting, DNS or mailbox configuration has been changed.

## Confirmed by the founders

- Company: **2 SHOCKS LTD**, company number **17067783**, from the supplied registration confirmation. Independent register verification remains outstanding.
- Two shareholders, 50% each; operations in the UK and Romania. Shareholding and bank details do not belong in the privacy policy.
- Registered office confirmed by the founder: **2 Spring Corner, High Street, TW13 4PA, Feltham, United Kingdom**. Founder confirms incorporation in England. The terms retain the England and Wales legal-jurisdiction wording.
- Contact for support, complaints and privacy: **info@2shocks.com**.
- Domain owned: **2shocks.com**, registered through GoDaddy. Website hosting planned with Vercel.
- UK initial audience, age 16+. No VAT registration reported.
- Rider purchases through mobile app stores only: **£3.99/month or £29.99/year**. No website checkout. Free plan for one active motorcycle; planned Plus for up to five with Workshop.
- No newsletter, launch-notification list or promotional email programme. Contact links are for enquiries only. Founder confirms no external testers yet; do not infer that internal development contains no personal data.
- HaynesPro access is a test account only. No signed production agreement. The website is also a presentation for the provider. Working screens are evidence of an integration, not evidence of commercial rights.
- Parts catalogues and supplier prices are publicly accessible. Commercial reuse, images, database extraction, attribution, caching and price-refresh rights remain unverified.

## Reported infrastructure — not independently verified live

| Service | Reported position | Before real use |
| --- | --- | --- |
| Railway | Backend in San Francisco; crashed deployment and incomplete production configuration | Recover deployment, verify production secrets securely, region and contract, log retention and access |
| Neon | PostgreSQL 17, London, production and development branches | Confirm access, backups/restore window, deletion and branch data isolation |
| Clerk | Development/production instances; provider-managed location | Confirm production instance, DPA, locations, auth email delivery and account deletion |
| Business email | Probably GoDaddy-managed Microsoft 365 | Confirm actual provider, mailbox access and retention |
| RevenueCat + Apple/Google | Integrated code, incomplete production setup | Confirm products, entitlements, webhooks, store agreements and privacy disclosures |
| Vercel | Planned website host | Confirm request logs, retention, cookies and production configuration after deployment |
| Expo/EAS | Build/distribution configuration; notification code | Verify actual build SDKs, push data, credentials, retention and store disclosures |
| Stripe | Future garage billing code | Exclude from live rider payment claims; review separately before garage launch |
| Analytics/crash vendors | None reported; Railway application logs exist | Do not call the product tracking-free merely because no analytics SDK exists |

Do not send passwords, API keys, full bank credentials or identity documents in this document. Provider names, plan/region settings and contractual documents with secrets removed are sufficient.

## Code checks performed

Read-only inspection of backend and mobile sources; no live database access or deletion performed.

- Mobile `app/profile/privacy.tsx` opens `mailto:help@2shocks.co` for export and deletion. This is inconsistent with the confirmed inbox. Replace with `info@2shocks.com` across the mobile project, including fallback alerts, and verify all legal URLs.
- The visible deletion action is an email request. Targeted searches did not locate an account-deletion endpoint or Clerk `user.deleted` handler in backend `src`. This is a finding from limited source inspection, not proof that no external/manual process exists.
- Backend `src/shared/observability/loggerOptions.ts` redacts credential headers, request bodies and several secret fields; request serialisation uses route templates. This is a useful safeguard, but does not establish retention settings or that every log path is free of personal information.
- Source files alone do not verify Railway/Neon production state, provider contracts, backups, access controls or erasure across providers.

## Work sequence and release gates

### Now: prepare a credible pre-launch website (approximately 1–3 working days after missing facts arrive)

Owner: founders for facts; implementation assistance for copy and configuration.

- [x] Founder confirmed registered office and incorporation in England; address added to legal pages and company details to footer.
- [x] Founder confirms no external testers yet. Inventory internal test data before inviting anyone.
- [x] Removed launch-list CTAs and privacy promises; contact enquiries only.
- [ ] Confirm business email provider and website request-log settings. Finalise a website-specific privacy notice for the processing actually live, separating future app processing.
- [ ] Review test-account terms for permission to publish demonstration screenshots and provider branding. Obtain written approval if terms do not cover the intended display. Publicly label Workshop as a preview pending production agreement.
- [ ] Publish functional HTTPS contact/privacy/terms URLs once website facts are settled. App release and paid-service readiness are separate gates; the presentation website need not wait for the entire app.

### Before external testing (roughly 1–2 weeks; dependent on engineering and provider responses)

- [ ] Repair production backend configuration and verify auth and database isolation. Use synthetic data in development where possible.
- [ ] Map actual data: identifiers, email, registrations/VIN, history/notes, subscriptions, push tokens, request logs, support email, provider lookups and backups. Record purpose, lawful basis, recipients and deletion behaviour for each. Do not treat device permission as the complete legal-basis assessment.
- [ ] Obtain provider DPAs and review contracting entities, sub-processors, countries and transfer mechanisms. London database hosting does not remove US backend processing. Verify the applicable mechanism rather than claiming all vendors are covered by an agreement or adequacy decision.
- [ ] Complete the ICO fee self-assessment and registration/payment if required; save the outcome.
- [ ] Complete a proportionate children's privacy/DPIA assessment for intended 16–17-year-old use. Verify private defaults, understandable notices, data minimisation, age handling and notification/location choices. A “16+” clause does not exempt an app from the Children's Code.
- [ ] Assign one founder to privacy/support operations and the other as backup. Proposed internal routine: check the inbox each UK working day; prioritise security and statutory requests. Public wording: email support, no fixed response-time guarantee, no emergency service. This is a proposed routine, not a claim about current staffing.
- [ ] Establish identity verification, access/export, correction and erasure procedures; log requests without unnecessary identity documents. Track applicable statutory deadlines and lawful extensions.
- [ ] Create incident triage and breach response procedures, including assessment of ICO/individual notification obligations and applicable deadlines.

### Before store submission and any paid subscription (roughly 1–3 additional weeks; licensing/enrolment can take longer)

- [ ] Implement and test in-app account deletion across Clerk, Neon, push tokens and relevant provider identifiers. Explain any lawful retention and subscription cancellation separately. Apple generally does not accept requiring ordinary app users to email support to delete an account.
- [ ] Provide an accessible public account-deletion request page for Google Play; ensure requests actually reach the monitored inbox/workflow. Do not claim automatic erasure until verified.
- [ ] Set and verify retention schedules. Proposed starting points for approval: routine support correspondence 12 months after closure; security logs 30 days unless a documented incident requires longer; live account data until deletion; operational erasure target within 30 days after verification. Backup expiry must follow verified provider configuration. These are proposals, not implemented settings or substitutes for statutory deadlines. Accounting/subscription evidence needs a separately justified statutory schedule agreed with the accountant.
- [ ] Sign HaynesPro production agreement covering consumer app use, paid access, territories, subject/model coverage, display/attribution, screenshots, permitted retention and termination. Confirm registration/identity and other vehicle API rights too, not only Workshop.
- [ ] Record each parts source and its reuse terms. Confirm rights to descriptions, images, database content and price display. Avoid guaranteed fitment, unqualified live-price claims or universal model coverage.
- [ ] Configure £3.99 monthly and £29.99 annual products, entitlement limits, restore purchases, cancellation, failed renewal, refunds and downgrade behaviour. Verify Workshop permissions and unit costs. Do not charge for promised Workshop access without the necessary rights and functioning access.
- [ ] Finalise consumer terms against the actual store purchase flows, cooling-off rules, any immediate-supply consent, renewal disclosures and statutory remedies. Do not assume app-store rules replace UK consumer law. Recheck commencement of new subscription legislation at launch.
- [ ] Complete Apple organisation enrollment/D-U-N-S and Google developer setup; confirm the company is the contracting party where intended. Match store privacy answers to the shipped build and SDKs, not just this inventory.
- [ ] Obtain focused UK solicitor review of paid terms, minors, data licensing and privacy/transfers. Ask the accountant about VAT, store settlements and UK/Romania working arrangements. A UK bank account does not determine all tax or data-protection obligations.
- [ ] Remove draft banners only when the published facts and operating procedures match. Set the true effective date; retain a versioned copy and change-notification procedure.

### Later: garage pilot

Draft separate garage SaaS terms, processor/controller allocation and any DPA, rider-authorised sharing notice, booking/quote/cancellation rules and Stripe disclosures when the actual workflow and contracts are known. Do not make those documents govern a marketplace that does not yet exist.

## What is still needed from the founders

1. Registered office and incorporation in England: confirmed.
2. No external testers yet; no newsletter or launch list: confirmed. Internal test-data inventory still needs checking.
3. Confirmation of the business-email provider; access to non-secret provider contract/region/retention information for verification.
4. HaynesPro test/production terms and a list of exact parts catalogue sources and permissions.
5. Named support/privacy owner and agreement to an achievable inbox routine. Retention proposals can be decided together after checking provider capabilities.
6. Apple/Google enrollment status and eventual production agreements. These are release dependencies, not prerequisites to all drafting.

## Official guidance consulted

- [ICO: international transfer test](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/a-guide-to-international-transfers/are-we-making-a-restricted-transfer/): access within the same legal entity, including employees abroad, is distinguished from disclosure to a separate overseas organisation. Confirm the founders' operating roles; Romanian access still needs appropriate security and an establishment assessment where relevant.
- [ICO: Children's Code](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/about-this-code/): relevant to online services likely to be accessed by children; includes under-18s.
- [GOV.UK: distance selling](https://www.gov.uk/online-and-distance-selling-for-businesses): pre-contract information and consumer cancellation requirements.
- [Apple: offering account deletion](https://developer.apple.com/support/offering-account-deletion-in-your-app): in-app initiation, related data, retention exceptions and subscriptions.
- [Google Play: account deletion](https://support.google.com/googleplay/android-developer/answer/13327111): in-app and external deletion request routes.

These sources inform the checklist. They do not establish that 2Shocks has implemented or satisfied each requirement.
