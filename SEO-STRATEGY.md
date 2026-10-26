# 2Shocks SEO strategy

Prepared 26 October 2026. Product truth: [MARKETING-STRATEGY.md](MARKETING-STRATEGY.md). Initial evidence: [Search Console baseline](docs/SEO-BASELINE-2026-10-26.md). Implementation and release checks: [SEO-HANDOFF.md](SEO-HANDOFF.md).

## Objective

Attract UK riders who want a useful motorcycle ownership record, help them understand Free, and learn whether search acquisition produces confirmed saved bikes and meaningful return. Garage SaaS is a future product, not a current search landing-page offer. A store click is an intermediate action, not an installation, signup or activated rider.

Preserve the existing identity and headline, “Your motorbike’s service book, on your phone.” Make the category explicit in the opening paragraph and search metadata. Android is available on Google Play; iOS remains coming soon. Free has one active motorcycle, private service history, plans, garage sheets and automatic alerts. Plus adds up to 20 active bikes, custom reminders and no ads.

## Query ownership

These phrases are research hypotheses, not measured search-volume or difficulty data. Keep related queries on one useful page rather than making separate pages for minor wording variants.

| Intent | Canonical path | Useful answer or demonstration |
| --- | --- | --- |
| Motorbike maintenance app; motorcycle maintenance app UK; motorcycle service log app | `/` | Product explanation, current Free/Plus comparison, approved illustrative previews and direct Google Play actions |
| Keep a motorcycle service history; motorcycle maintenance log template | `/guides/motorcycle-service-history` | Reusable blank log and worked example separating completed work, evidence and future tasks |
| Check motorcycle MOT history; MOT history versus service history | `/guides/motorcycle-mot-history` | Official lookup destination, source distinctions and questions for a garage |
| How to prepare a motorcycle service plan | `/guides/motorcycle-service-plan` | Prepare requested work, observations, relevant history and parts questions; illustrative garage sheet |

The guide index connects these tasks. Homepage guide links remain visible on mobile as a compact reading list. Each guide answers its question first, links to related tasks and offers a direct Google Play action.

The homepage search title is **Motorbike Maintenance App UK & Service Log | 2Shocks**. The description is **Keep service history, available MOT records, mileage and plans in one motorbike maintenance app for UK riders. Start free on Android. iOS coming soon.** Keep the current URL and hero headline.

Broad MOT-check searches are secondary: the website does not perform registration lookups. Avoid snippets suggesting a web lookup, complete verified history, live tax data, guaranteed parts fitment or integrated bookings. Keep retail parts costs distinct from garage quotes.

## Search-result research, 26 October

A public search sample for motorcycle maintenance apps and service preparation surfaced product/store pages and service checklists. This is a directional sample, not a location-controlled Google UK top-ten audit or evidence of exact rankings. Relevant examples include [RidersGarage](https://ridersgarage.co.uk/), [RoadVerdict’s service-log page](https://roadverdict.co.uk/motorcycle-service-log-app), and [Start Rescue’s service checklist](https://www.startrescue.co.uk/breakdown-cover/motoring-advice/motorcycling-advice/full-motorcycle-service-checklist-cost).

[Honda UK’s service plans](https://www.honda.co.uk/motorcycles/owners/servicing-warranties/service-plans-overview.html) demonstrate an important ambiguity: “service plan” can mean a paid servicing contract. Our guide explicitly means preparation for a garage conversation. It supplies a usable example rather than a generic mechanical checklist, unsupported model-specific intervals or a pricing promise. Competitor descriptions are evidence of search intent, not features 2Shocks can claim.

## Measurement

| Stage | Report | Limitation |
| --- | --- | --- |
| Search | Search Console page/query impressions, clicks, CTR and position; branded versus non-brand; separate UK view | The initial 14 impressions are too few to diagnose CTR. Filter query and country consistently. Query rows may omit anonymised searches. |
| Website | Vercel `google_play_click`, grouped by `page` and `location`; compare with page visits and available search-referrer reporting | Counts clicks, including repeats, not unique installs. All-source events must not be presented as Google-organic conversions. |
| Product | Existing permitted app reporting: signup, confirmed saved bike and meaningful 30-day return | Website-to-app attribution is not implemented here. Report unavailable attribution explicitly; do not join totals or identify riders through website events. |

The custom event includes only a canonical page path and an allowlisted button location: `header-desktop`, `header-mobile`, `hero`, `free-plan`, `plus-plan`, `closing`, `footer`, `guide` or `guide-index`. Query strings and fragments are removed from analytics page URLs. The browser opt-out applies before dispatch, including a fresh preference check when clicked. Download links stay direct and usable without JavaScript or analytics. Website statistics and app opt-in measurement remain separate.

**Provider dependency:** [Vercel custom events](https://vercel.com/docs/analytics/custom-events) require Pro or Enterprise. The installed SDK supports the implementation; the current account plan and live event ingestion were not verified. The older hosting handoff’s Hobby observation is historical. No subscription upgrade, new analytics provider or paid tool is part of this change. Until eligible reporting and ingestion are confirmed, mark website click totals **unavailable**, never zero. Search Console and existing store reporting can still be reviewed without purchasing a new tool.

## Operating sequence

Implementation prepares all three guides now so they can be reviewed as one release. The original day ranges are a suggested operating pace, not a need to delay ready pages. Start the observation clock when the changes are actually deployed; local completion is not publication.

| Window | Action and decision |
| --- | --- |
| Release / days 1–14 | Save the baseline; release homepage, mobile guide links, guide improvements and tracking; confirm live status, canonical URLs, sitemap and event ingestion if supported. |
| Days 15–30 | Review crawl and indexing reports, using individual URL Inspection to confirm apparent exclusions. Check the guides’ mobile usability and production performance. Fix actual technical failures promptly. |
| Days 31–60 | Check discovery of the new service-plan guide. Review the qualified prospect list and choose relevant, personal editorial opportunities. No bulk outreach or purchase of ranking links. |
| Days 61–90 | Compare complete reporting windows. Improve the existing page with the strongest relevant opportunity. Define the next quarter from rider questions, search evidence and returning-user outcomes. |

Weekly: check availability, broken links, sitemap status and material indexing/security issues. Monthly: compare the latest 28 complete available days with the preceding 28, using the same filters and accounting for reporting lag. Avoid repeated title changes based on a few impressions. Maintain the change log below; cosmetic date changes do not justify a fresh sitemap date.

When impressions grow but clicks do not, inspect intent, result format, position and the displayed title before editing. When relevant visits grow but store clicks do not, inspect the product explanation, Free proposition and CTA. When clicks grow but activation does not, investigate app onboarding and attribution separately. No fixed traffic or ranking forecast is justified by this baseline.

## Credibility and AI search

Use correct product facts in accessible text, practical resources and approved illustrative assets. Retain demo provenance and distinguish official MOT records from rider entries. Add only verified company profiles and real customer evidence when available. Keep existing Organization, WebSite, WebPage, MobileApplication and breadcrumb markup; never invent reviews, ratings or downloads.

Prepare selective editorial opportunities using the [prospect list](docs/SEO-PROSPECTS-2026-10-26.md). Earn relevant coverage because the resource or app is useful. No outreach, posting, reciprocal-ranking arrangement or spending has been performed.

[Google’s AI-feature guidance](https://developers.google.com/search/docs/appearance/ai-features) supports the same crawlability, helpful-content and structured-data foundations. No special AI text file is needed. The two source articles differ in their claims about search providers and growth timelines; neither is a guarantee for 2Shocks.

## Change log

| Date | Change | Outcome |
| --- | --- | --- |
| 26 October 2026 | Prepared homepage category copy/metadata, FAQ order, mobile guide links, practical guide resources, service-plan guide, shared editorial dates and privacy-aware store-click instrumentation | Build, lint, TypeScript, 11-page SEO audit, 13 unit tests and 75 browser checks passed; search/acquisition outcomes pending release and observation |
| 26 October 2026 | Added pixel-equivalent lossless WebP previews and retained original PNG links | Asset sizes and controlled lab observations recorded in docs/SEO-PERFORMANCE-2026-10-26.md |

## Monthly report template

Copy for each review; use **unavailable** where there is no measurement. Store first-party exports privately rather than committing raw analytics or account data.

| Field | Current 28 days | Previous 28 days | Interpretation / action |
| --- | --- | --- | --- |
| Exact complete dates and country/query filters | | | |
| Non-brand search impressions and clicks | | | |
| Homepage and guide queries / landing pages | | | |
| Relevant UK search traffic | | | |
| Google Play clicks by page and location, with source scope stated | | | |
| Signup and confirmed saved-bike results, attribution scope stated | | | |
| Meaningful 30-day return for observable cohorts | | | |
| Indexing, availability and performance issues | | | |
| Changes since the previous report | | | |

Choose at most three actions ranked by rider usefulness and business value. Keep the page if it serves users even when its sample is too small to judge. Do not remove legal/support pages for low traffic.

## Sources and adopted principles

- [Neil Agarwal: SEO feedback loop](https://x.com/regalstreak/status/2103014475947483462): inspect actual queries, improve existing pages and measure product outcomes beyond clicks. His reported growth is a case study, not our forecast.
- [Nicholas Dulait: SEO workflow](https://x.com/NicholasDulait/status/2108212094214529135): check live intent, avoid overlapping pages, add original utility, preserve useful page elements and review regularly. Paid-link/network tactics and unsupported universal waiting periods are excluded.
- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap): canonical destinations and meaningful editorial dates.
- [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies): avoid scaled low-value pages and manipulative links.
- [Official MOT-history service](https://www.gov.uk/check-mot-history): source for the guide’s lookup destination and available official information.
