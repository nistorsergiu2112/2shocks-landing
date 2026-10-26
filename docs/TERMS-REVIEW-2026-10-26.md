# Website and rider-app terms recheck

26 October 2026. Local factual/editorial corrections, with substantive contract decisions flagged below. This review does not establish that the live website or signed app has been updated or that store billing has been validated.

## Corrections implemented

| File | Result |
| --- | --- |
| `app/terms/page.tsx` | Replaced prelaunch/development-timing wording with current Android availability and unverified iOS status. Explained that preview records are illustrative, with variable data/catalogue coverage and future features distinct from the current offer. Website-only scope retained. |
| `app/app-terms/page.tsx` | Repaired the dangling “They” reference and shortened the availability introduction. Added the required account/internet and UK-registration scope. Reconciled the Free list with available MOT data, mileage, private servicing/repair entries, oil guidance and saved parts. Kept one active bike with replacement, 20-bike Plus, Free automatic alerts and Plus custom reminders/ad-free use. |
| `app/app-terms/page.tsx`, sections 3–4 | Identified £3.99/month as a UK reference, with applicable store pricing and renewal terms governing purchase. Added Google Play cancellation steps and official Google/Apple help links; Apple guidance is conditional and does not claim an iOS launch. Existing cancellation, restore, expiry and statutory-rights safeguards retained. |
| `app/app-terms/page.tsx`, sections 6–7 | Changed retail estimates from “may exclude” to “exclude” labour/other charges, matching approved product claims. Clarified that private rider-entered service history is not independently verified. |

No changes to governing law, liability allocation, age threshold, dispute handling, refund entitlement, retention periods or provider agreements. Existing local changes preserved. App/backend source was read only.

## Clarified outcome after follow-up inspection

The local terms contain neither a blanket “no refunds” clause nor an automatic waiver of cancellation rights. Section 4 preserves statutory rights. Its statement that checkout must provide required information/consent describes a requirement; it does not establish that the actual store flow fulfils it. These findings do not establish that subscriptions must be disabled.

The current welcome screen links to Terms/Privacy under “Read our”. The paywall provides benefits, monthly pricing, legal links and “Continue with monthly plan”, without an adjacent explicit renewal/cancellation explanation in the inspected source. The adapter calls RevenueCat’s `Purchases.purchasePackage`; this invokes the native store purchase process, whose exact production confirmation and receipt have not been observed here. The supplied further inspection reports no dedicated terms-acceptance action/versioned acceptance record in the app/backend, and no separate app-collected immediate-supply request or acknowledgement. The local welcome/paywall/adapter excerpts are consistent with that account, but are not evidence of what the store collects.

Recommended implementation follow-up:

1. Put this beside the purchase button: “Monthly subscription. Automatically renews unless cancelled. Manage or cancel through your store.”
2. Make terms acceptance clear and retain the authenticated account, immutable terms version and server-recorded acceptance time. Define the acceptance point/version policy before implementation. Keep contractual acceptance separate from advertising choices and any optional privacy consent.
3. Check the actual production store confirmation, receipt and applicable classification before deciding whether any additional immediate-supply acknowledgement is needed. Do not infer waiver merely from immediate activation.

[Google’s UK/EEA guidance](https://support.google.com/googleplay/answer/15576634?hl=en-GB) distinguishes digital content from digital services. [Apple’s UK terms](https://www.apple.com/uk/legal/internet-services/itunes/uk/terms.html), section B, make their cancellation exception conditional on delivery starting with the required request and acknowledgement. Neither source establishes the correct classification or observed consent for this specific Plus product.

This follow-up updates review documentation only. Mobile/backend implementation, store settings, billing and statutory-rights wording remain unchanged.

## Substantive decisions still open

1. **Plus cooling-off and checkout presentation.** Section 4 currently preserves applicable cancellation rights but leaves immediate-supply information/consent to checkout. Confirm the legal treatment of the paid offer as digital content, services or a combination, the applicable cooling-off information, any immediate-performance request/acknowledgement, cancellation mechanism and a saveable contract confirmation. Inspect the actual store sheet and receipt as well as the app paywall; source links are not proof that all information/consent requirements have been met. An ordinary cancellation of future renewal and exercise of statutory cooling-off rights are different questions. This needs UK consumer-law review before choosing precise contractual wording. See [online selling guidance](https://www.gov.uk/online-and-distance-selling-for-businesses/online-selling), [CCR regulation 36: services](https://www.legislation.gov.uk/uksi/2013/3134/regulation/36) and [regulation 37: digital content](https://www.legislation.gov.uk/uksi/2013/3134/regulation/37).

2. **How terms are accepted and licensed.** The inspected welcome and paywall provide Terms/Privacy links. That alone does not establish the contract-formation point or evidence of accepted versions. Decide how and when the terms are presented/accepted, what version evidence is retained, the scope of the app-use licence, and the relationship to Apple Standard EULA when iOS becomes public. Do not assume a new checkbox is necessarily the right solution; review the whole flow. Existing promises about proportionate changes and notice should be reviewed alongside the actual notice/cancellation process. [CMA guidance](https://www.gov.uk/guidance/writing-a-fair-contract-for-customers) requires fair, transparent consumer terms.

3. **Privacy operations remain a separate issue.** Existing app privacy/deletion notices still identify unconfirmed provider agreements/transfer arrangements and record-retention details. The terms’ data-processing wording cannot resolve those operational decisions. The earlier October readiness reports contain historical five-bike, prelaunch, advertising and deletion states; use current source and the verified Android release statement rather than treating those dated reports as current operational evidence.

4. **Future subscription rules.** Official guidance currently anticipates commencement of the new DMCCA subscription regime in spring 2027. Treat its additional obligations as a readiness item, rather than asserting they are already applicable on 26 October 2026. Recheck commencement when the paid-flow/legal work is finalized. See the [government implementation response](https://www.gov.uk/government/consultations/consultation-on-the-implementation-of-the-new-subscription-contracts-regime/outcome/government-response-to-consultation-on-the-implementation-of-the-new-subscription-contracts-regime-web-accessible-version) and [current subscription-contract guidance](https://www.gov.uk/government/publications/subscription-contracts).

## Evidence and limits

Compared the terms with the user-verified Android production release, current marketing/store copy, local app welcome/paywall/Plus/legal-link source, and backend rider-entitlement policy. Source confirms Free service-history writes/automatic alerts and Plus custom-reminder management, monthly UK reference pricing, no annual offer, and downgrade/read-only handling. It does not establish that live purchases, consent, receipts or provider contracts are configured correctly. No real account, purchase, cancellation, deletion or support message was used as a test.

Official cancellation links verified against [Google Play guidance](https://support.google.com/googleplay/answer/7018481?hl=en) and [Apple guidance](https://support.apple.com/en-gb/118428). Product-availability and entitlement facts rely on supplied release evidence and local source, not those generic store-help pages.

Build, lint, TypeScript and exported-HTML SEO/internal-link checks pass. All nine existing legal-route tests pass across desktop, iPhone-sized and Android-sized Chromium, covering public access, canonical URLs, support/deletion/subscription links and accessibility. Website/app terms were also inspected at desktop and mobile widths; no horizontal overflow. Changes remain local and do not constitute a legal approval or deployment.
