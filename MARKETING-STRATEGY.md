# 2Shocks: free rider growth, paid ownership tools, future garage SaaS

Revised 20 September 2026 after founder Q&A. Supersedes the HaynesPro/Workshop strategy archived at `docs/strategy-archive/2026-09-09-marketing-strategy.md`.

This is a commercial plan, not a technical release certification. The founder reports that the new government/catalogue matching system is validated and integrated in the backend; mobile integration is still to follow. For strategy planning, the core capability is accepted as available. Optional new Plus features are explicitly distinguished below. No website, entitlement, store product, advertising SDK or provider integration is changed by this document.

## 1. Goal and business model

Make 2Shocks useful immediately to UK motorcycle riders, with a free account and no payment required. Grow a returning audience with real motorcycle ownership and service needs. Use that evidence to build and sell a garage SaaS product that improves handling of customer enquiries and work.

Revenue priorities:

1. Garage SaaS is the intended principal long-term recurring revenue business.
2. Plus monetises ongoing ownership organisation and an ad-free experience.
3. Advertising contributes to the cost of free use. It is not assumed to fund the whole free population.

The objective is as many satisfied, returning riders as the business can sustainably serve. Downloads, email addresses and messages sent to garages are intermediate measures, not proof of commercial demand.

Launch nationally, but concentrate deliberate acquisition in one reachable UK catchment so future garage demand is locally useful. Select the catchment based on founder access, rider density and likely motorcycle coverage; no location is selected yet. Retain the intended 16+ audience, subject to appropriate product and advertising privacy design.

## 2. What changed

- HaynesPro is removed from the business model because its API economics did not work.
- Workshop procedures, torque specifications and Haynes technical reference are removed from the offer.
- DVSA supplies available MOT history and vehicle facts. The current runtime does not include a DVLA Vehicle Enquiry integration; do not market live tax checks.
- A local catalogue identity index and source-specific matching generate bike choices and parts/oil suggestions.
- The rider confirms model, equipment variant and model year when required. Registration year is not automatically manufacturing/model year.
- Authentication is required for every app user; there is no guest mode. Free accounts include one saved bike and are the entry product. Plus is proposed at **£3.99 per month**.
- The founder revised the proposed monthly price from £4.99 to £3.99 on 20 September 2026. The old Haynes-based package and £29.99/year offer remain superseded. No new annual price is approved; do not carry the old annual price forward automatically.
- Eligible adult Free riders may see consented ads when enabled; Plus has no ads.

## 3. Positioning and messaging

### Main proposition

> Start with your number plate. Get to know your bike.

Supporting copy:

> Check available MOT history, confirm your motorcycle and explore relevant parts, oil options and a parts-cost estimate for the work you’re planning. Create a free account and save your bike.

### Plus proposition

> Keep your bikes, maintenance and reminders together. Without ads.

Launch supporting copy:

> Save up to five motorcycles, record the work you’ve done and set your own maintenance reminders. £3.99 a month.

Add costs, documents and sharing to public copy only when those features ship.

### Why a rider comes back

The lookup earns the first visit. The next questions create repeat use: which parts relate to this bike, what materials are needed for a planned job, what work has been recorded, and what reminder did the rider set? The paid proposition must offer this ongoing utility; an account alone is not a persuasive subscription benefit.

### Language boundaries

| Use | Avoid |
| --- | --- |
| Available official MOT records | Complete history of the motorcycle |
| Confirm your model and year | We identify every bike precisely from its plate |
| Catalogue matches, source details and verification notes | Guaranteed fitment or an unsupported accuracy percentage |
| Estimated retail parts cost | Guaranteed service price or evidence a garage is overcharging |
| Rider-entered service history | Verified workshop history unless independently supported |
| Reminders you set | Manufacturer service schedules inferred without a supporting source |
| Planned garage enquiries, later | Integrated partners, live bookings or nationwide garage coverage before established |

## 4. Free and paid offers

| Experience | Price | Scope | Status |
| --- | --- | --- | --- |
| Free account | Free; sign-in required; ads only if eligible and consented | One active saved bike with unlimited replacement after removal; service plans and rider-entered service history; garage sheets and rider-sent email enquiries; number-plate lookup; available government MOT/vehicle records; model/year confirmation; supported catalogue parts/oil suggestions; suggested maintenance task/material list and retail parts estimates | Founder-confirmed package |
| Plus | £3.99/month | All Free lookup and estimate features; no ads; up to five active saved bikes; user-scheduled maintenance reminders and notification alerts | Founder-confirmed planned package; mobile delivery to be completed |
| Additional Plus benefits | Included when shipped | Ownership expense tracking, shareable service-history report, receipt/photo storage with clear limits | Accepted feature direction, not all implemented |

All users must authenticate before using the app. Creating an account is free and does not require a subscription. Free includes persistence for one active bike, service-history entries, service plans and garage sheets. Removing and replacing a bike is free. Plus provides five simultaneous bikes, custom reminders/alerts and ad removal. Explain this distinction before signup and at the relevant feature entry points.

Recommended downgrade behaviour: preserve access to read/export existing history, stop premium additions/features as appropriate and allow choosing the one active free bike. Do not erase history merely because a subscription ends. Account deletion remains a separate user choice.

Offer Plus after a useful free result, when the user chooses to save another bike, configure premium reminders or remove ads. Keep free entry clear and visible.

## 5. Required authentication and free bike saving

**Confirmed decision: every rider signs in, and a free account can save one bike.** The purpose is retention and future service demand, not collecting email addresses for their own sake. Keep onboarding short and explain the free benefits before asking the rider to create an account.

Clerk's published pricing checked on 20 September 2026 includes 50,000 monthly retained users per application. It defines retained users using a return at least 24 hours after signup. Hobby has a limit; paid plans have their own base fees, features and overage terms. At the first published paid overage band, 10,000 additional retained users would add $200/month, before base fees, extras and currency conversion. Verify the actual account plan before budgeting; this is not a quote for all authentication-related costs.

Below the included allowance, the marginal user-count charge alone is not a strong reason to block free saving. Database, compute, email, storage, support, fraud and eventual auth overages still count. Avoid costly features such as unrestricted photo uploads in the free account.

An account email is not automatically marketing consent. The existing no-newsletter policy stays in force unless separately changed. Account notices and requested reminders serve their stated purposes.

Measure signup completion and abandonment, first useful lookup, first saved bike, meaningful 30/60/90-day return, multi-bike and Plus reminder usage, conversion and total cost per returning rider. Required authentication adds friction, so track the full journey from account creation to a useful saved-bike result. App experience measurement is independently opt-in and remains pre-release. Existing website Vercel visit statistics remain enabled by default with a browser opt-out on its Privacy page; do not combine those site counts with activated rider metrics.

Do not claim the offer pays for itself until measured revenue and costs support that conclusion. The business can deliberately subsidise a free rider, but must know the subsidy and its runway.

## 6. Maintenance estimates: parts transparency

The maintenance engine identifies a proposed task/material list. Matched parts and recorded supplier retail prices provide the materials subtotal.

Display:

- Confirmed bike identity and selected job.
- Item, quantity, source, price date and currency for each included part/material.
- Whether a displayed price includes VAT and delivery where known; mark unknowns rather than inventing them.
- Alternative parts and matching warnings where relevant.
- A clear separation between priced items, missing prices and items needing confirmation.
- The label **Estimated retail parts cost — labour and other charges excluded**.

Do not present an incomplete priced subset as a complete job cost. Account for oil quantity versus pack size where supported; do not invent required volumes from unrelated models. If a range is shown, derive it from identifiable alternatives or explicit assumptions.

Garage labour, diagnostics, disposal, consumables, delivery, supplied-parts margin and warranty responsibility can explain differences between a retail parts subtotal and a garage quote. The rider benefit is preparing a better conversation, not accusing the garage of overcharging. This framing also protects future garage relationships.

There is no predicted next-service date in the confirmed offer. Rider-created reminders such as “change oil in five months” are different. Source-backed manufacturer intervals could be evaluated separately later; they do not inherently require garage integration, but they do require suitable data.

## 7. Matching confidence and trust

The test project's current documented flow is government facts → Motomike identities → rider-confirmed model/year → independent catalogue applications. Castrol oil matching supplements the parts catalogues. Some older migration documents describe a previous Bikez flow and should not drive current marketing.

Present clear outcomes: model application, family reference requiring verification, conflicting alternatives, or no supported match. Do not turn algorithm scores or automated coverage counts into probabilities of real-world correctness. Rider confirmation helps identity resolution but cannot certify the source catalogue itself.

Keep government history, rider-supplied records and catalogue information visibly distinguishable. Preserve warnings through estimates, reports and any later garage enquiry. A missing match means coverage is missing, not necessarily that no compatible part exists.

Founder validation is accepted for commercial planning. Future claims of accuracy, comprehensive coverage or time saved require defined samples and recorded evidence. Parts-source reuse rights, price freshness and catalogue maintenance remain operational dependencies; scraping alone does not establish permission or freshness.

## 8. Advertising policy and economics

Revised 2 October 2026: the intrusive-ad proposal is superseded by the implemented, disabled-by-default experiment. Eligible adult Free riders may see one labelled, image-only Google AdMob native ad after Parts guidance and Plan maintenance. Plus, unresolved entitlement and purchase-pending states receive no ads. Under-18 riders, unknown-age riders and consent refusal preserve app access without ads. Do not sell Plus by implying payment is required to refuse consent.

A confirmed bike, adult age-band declaration and resolved UMP consent are required. Only non-personalized ads are requested, which still involve SDK data processing. No Home placement, pop-up, forced video or rewarded ad. Profile → Privacy separates advertising from first-party measurement. Hide-for-today lasts 24 hours. First opportunity follows a return at least 24 hours after first confirmed-bike Home visit; at most one new impression/session and two/rolling day, subject to stricter backend limits (currently one/day). Production remains disabled pending native release checks. The owner confirmed on 3 October that the UMP draft should target EEA/UK/Switzerland only; verify consent and ad eligibility elsewhere before expanding beyond the initial UK audience.

Experience measurement is separately opt-in, off by default and account-linked, not anonymous. Assess task completion, retention and revenue together. See `APP-LEGAL-REVIEW.md` for evidence, raw-event cleanup verification and release gates. No SDK or advertising was added to this website.

### Illustration only — not a forecast

Ad revenue = eligible free users × sessions/user × impressions/session × fill rate × realised eCPM / 1,000.

For illustration, 10,000 free users × 2 sessions × 2 impressions × 80% fill produces 32,000 served impressions. At hypothetical eCPMs of £1/£3/£6, that is £32/£96/£192 before other costs. These rates are sensitivity inputs, not measured UK motorcycle-app rates. Low-frequency utility use may generate little ad revenue.

At £3.99/month, 100 Plus subscribers produce £399 gross/month; 300 produce £1,197. Subtract applicable store charges/taxes, refunds, billing services, storage and support to obtain contribution. Do not mix gross subscription income with net advertising receipts as though both were profit.

Track monthly contribution: net ads + net subscriptions − variable servicing costs. Track fixed operating cost separately. Exclude hypothetical future garage revenue when assessing current runway.

### Why start at £3.99?

£3.99/month is the selected launch price, not validated willingness to pay. It reduces the commitment for an occasional-use ownership utility while keeping a paid contribution alongside the free audience and future garage business. Sell the concrete combination of no ads, five simultaneous bikes and reminders; do not rely on future features to justify today's price.

Compared with £4.99, £3.99 produces about 20% less gross revenue per subscriber. Matching the same gross revenue requires about 25% more subscribers, assuming the same billing duration and before cost differences. A conversion increase is a hypothesis, not a guarantee. Evaluate paid conversion, renewals/churn and net contribution per activated rider over several billing cycles. Review price or scope if paid users cost too much to serve; keep future attachment storage bounded. No annual plan or trial is included in the current launch offer.

## 9. Plus feature build order

1. Deliver five simultaneous bikes, dependable user-set reminders/alerts and full ad removal; service history remains Free. This is the core offer.
2. Add expense entries to service records and a simple ownership-cost summary. Useful inputs: date, category, amount and bike; distinguish actual expenditure from estimated parts prices.
3. Add shareable service history with rider control, revocable links where appropriate, and clear rider-entered provenance. Do not publish registrations, contacts or attachments by default.
4. Add receipts/photos with defined file, storage and export behaviour. Start with a manageable quota; do not advertise unlimited storage.

Do not delay a useful free app to build every proposed paid feature. Conversely, do not sell future tools as currently included. Expand Plus based on repeat usage and willingness to pay, not feature count.

## 10. Acquisition and measurement

First messages to test:

- “Your bike, saved. Start with a free account.”
- “Your MOT history and relevant parts, starting with your plate.”
- “See the parts behind your next oil change.”

Use real, consented or synthetic demonstrations across common supported models. Show the model-confirmation step rather than editing it out. Publish helpful maintenance-preparation explainers and parts-estimate walkthroughs. Share in rider communities where permitted; recruit through founder contacts and small relevant creators. Do not fabricate endorsements or send unsolicited community spam.

Prioritise qualified activations: a rider reaches a useful MOT result or confirms a bike and receives a supported catalogue result. Report those two outcomes separately, plus lookup failures, abandoned confirmation and unsupported motorcycles. Define “active” using meaningful usage, not an app open triggered by an ad or push.

Primary reporting: activated riders, 30/60/90-day meaningful return, supported-result coverage, model corrections, saved-bike/history activity, Plus conversion/churn, revenue and variable cost per active rider. Later add rider-authorised local service enquiries and actual garage responses. Use broad location only when needed and provided appropriately; do not collect continuous location merely to manufacture garage metrics.

## 11. Roadmap and founder focus

No launch date or acquisition budget has been confirmed. T0 means public rider release. Windows below are planning assumptions, not promised dates. Paid budgets are proposed ceilings requiring a funding decision; no spend is authorised by this document.

| Period | Main focus and suggested allocation | Deliverables | Marketing and spending | Decision gate |
| --- | --- | --- | --- | --- |
| Next 2–4 weeks, before T0 | 70% mobile/release experience, 20% user validation, 10% launch materials | Integrate confirmed backend capability; implement the confirmed one-bike Free scope; verify signup-to-saved-bike journey, estimate labels, Plus and ads; update website/store claims | Real demos and founder/community recruitment; £0 paid acquisition | Supported lookup journeys work end to end; shipped benefits match pricing; estimate and ad behaviour are understandable |
| T0 to week 4 | 50% onboarding/reliability, 35% rider recruitment, 15% measurement/support | Learn where confirmation fails and what prompts repeat use; observe ad exposure | Aim to recruit first 100 meaningfully activated riders organically; directional target, not forecast | Users obtain useful results; early return and cost data exist; severe trust/fitment issues resolved |
| Weeks 5–8 | 40% retention/Plus, 40% acquisition experiments, 20% evidence/support | Improve signup completion and one-bike free retention; expense tracking before photo storage | Proposed £150–£300 total experiment cap, only if affordable and measurable; concentrate one local catchment | Can identify acquisition sources producing returning riders and estimate their servicing cost; stop channels producing installs only |
| Months 3–4 | 45% rider product, 35% acquisition, 20% optional service-demand research | Reports/receipts based on demand; measure genuine service-preparation activity | Repeat effective content; increase spend only against a founder-approved acceptable subsidy/runway | Directional target: 100 active riders in one catchment and 20 recent service plans; qualify professional-help interest separately |
| Months 4–6, conditional | Validate garage need before building broad SaaS | If evidence supports it, test the later enquiry concept with willing riders and 3–5 garages | No mass garage email campaign; discuss actual needs with recipients who engage | Garages repeatedly find enquiries useful and at least two express concrete willingness to pay for a narrow workflow |
| Months 6–12, conditional | Build and retain first paying garage customers | Enquiry → review → quote → rider approval → accepted work → history; coexist with incumbent tools | Founder-led onboarding, then repeat locally | Garages use it repeatedly, renew and can describe measurable benefit; expand only when support economics work |

Do not build full garage management now. The earlier £49/£99 garage prices are historical hypotheses, not commitments; validate price and pilot terms against the future delivered workflow. UK autumn/winter launch cohorts may behave differently from spring riding cohorts; do not annualise one month's activity unquestioningly.

## 12. Later idea: rider-authorised garage enquiry

Captured for later, not part of the immediate launch scope: map of nearby businesses, rider chooses a garage and supplies its email, previews selected bike/job information, then authorises a service enquiry sent through 2Shocks. Founder initially envisages this as a paid feature. Free/basic access is a recommendation to test later if creating garage demand is the main objective.

The potential benefit is useful structured enquiries that introduce the product naturally. It does not guarantee garage awareness, replies, bookings or SaaS adoption. Asking a rider to leave the app and locate an email address is a significant friction hypothesis; test it before investing in a map or national directory. Do not promise every UK garage, current availability or motorcycle competence from a business listing alone. Map-provider access and email availability are separate dependencies; no assumption that Google Maps contains a usable email for every business.

If developed, use a clear sender identity and appropriate reply routing. Let riders review the recipient, selected data and message before sending. Do not attach their complete motorcycle/person profile by default, contact multiple garages without permission, or claim listed garages are partners. “Sent via 2Shocks” can identify the sending service; appending a SaaS sales pitch creates a different marketing question. Business email rules differ between corporate subscribers and sole traders. Assess that flow before launch; a rider action is not blanket permission to market to the recipient.

Measure delivered legitimate enquiries, replies, quote progression and garage feedback. Separate those from promotional outreach. No messages are sent as part of this strategy work.

## 13. Decisions and next actions

Confirmed: no Haynes/Workshop; required authentication; one saved bike, government records, catalogue suggestions and retail parts estimates free; consent-controlled native ads for eligible adult Free use; no ads in Plus; £3.99 monthly; five simultaneous bikes/user-set reminders/alerts; future garage SaaS is principal business; parts-based estimates and suggested tasks; new core accepted as validated for planning.

Open: annual price; public launch date; marketing budget; ad network and frequency; quotas for attachments; exact release sequence for additional Plus tools. Free-account scope and mandatory authentication are now confirmed.

Next: follow PRODUCTION-LAUNCH-PLAN.md to reconcile mobile paywall copy, release current backend/mobile changes and configure the stores. Local landing copy and app disclosures were updated on 8 October; the public deployment still serves older content and must be replaced. In-app ads need app disclosures; they do not automatically mean adding tracking to the presentation website.

## 14. Sources and evidence

Checked 20 September 2026 unless noted. Provider terms and pricing can change.

- Local `2shocks-apitest/README.md`, `docs/motomike-matcher.md` and `docs/castrol-name-matching.md` inspected during Q&A. These establish documented capability and limitations, not an independent audit of production accuracy. Founder subsequently confirmed backend integration and validation.
- [DVSA MOT History API](https://www.api.gov.uk/dvsa/mot-history-api/) and [DVLA Vehicle Enquiry guide](https://developer-portal.driver-vehicle-licensing.api.gov.uk/apis/vehicle-enquiry-service/vehicle-enquiry-service-description.html): distinguish government information sources from catalogue suggestions.
- [Clerk pricing](https://clerk.com/pricing): MRU definition, included allowance and first overage band. Check account-specific terms and feature requirements before budgeting.
- [Google AdMob interstitial restrictions](https://support.google.com/admob/answer/6201362?hl=en): placement constraints; labelling an ad does not make every implementation acceptable.
- [ICO business-to-business marketing guidance](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/business-to-business-marketing/): relevant if later enquiries also carry promotional content. No email campaign is approved or implemented here.

## 8 October 2026 product reconciliation

Current local contracts extend Free to service history, plans and garage sheets. Both plans allow motorcycle removal and repeated replacement; one/five means simultaneous active bikes, not lifetime lookups. Plus remains £3.99 monthly for five active bikes, reminders/alerts and no ads. Private rider history never transfers through a plate or VIN; export before removal. Mileage comparisons are advisory against historical cached DVSA readings, not verified mileage or fraud detection. These latest privacy/mileage changes are uncommitted in backend/mobile and must be released together. See [PRODUCTION-LAUNCH-PLAN.md](./PRODUCTION-LAUNCH-PLAN.md) for current infrastructure evidence and launch order.
