> **8 October 2026 recheck:** Use [PRODUCTION-LAUNCH-PLAN.md](./PRODUCTION-LAUNCH-PLAN.md) for the current launch sequence and provider status. Free now includes plans/history/garage sheets and unlimited replacement of its one active bike. Plus adds five simultaneous bikes, reminders/alerts and no ads. The latest private-history and mileage work is uncommitted in backend/mobile. Earlier evidence below is dated and does not prove current production readiness.

# 2Shocks launch readiness — 3 October 2026

Current source of truth: [APP-LEGAL-REVIEW.md](./APP-LEGAL-REVIEW.md) records source and dashboard evidence. [PRIVACY-OPERATIONS.md](./PRIVACY-OPERATIONS.md) records the approved support-retention policy and request procedure. The September checklist is preserved in [the archive](./docs/legal-archive/legal-readiness-2026-09-09.md); its Haynes/Workshop and annual-plan assumptions are superseded.

## Website

Prepared: separate website privacy/terms and pre-launch app privacy/terms; accurate Free/Plus copy; required sign-in; £3.99 monthly; no annual plan, Haynes/Workshop offer, newsletter or waitlist. The website only displays information and opens email enquiries. All four legal pages are linked in the header/footer. `app-ads.txt` is included in the static export.

Confirmed by owner: 2 SHOCKS LTD, 17067783, registered office 2 Spring Corner, High Street, TW13 4PA, Feltham, United Kingdom; England and Wales incorporation jurisdiction; info@2shocks.com through GoDaddy Microsoft 365/Outlook; UK co-founder handles privacy/deletion requests; intended rider audience 16+; support correspondence retained 12 months after closure unless an unresolved issue, legal obligation or claim requires longer. No fixed support response-time promise.

Live website provider: Vercel Hobby. The company's marketing site falls under Vercel's published commercial-use definition even without checkout. Resolve Pro/Enterprise eligibility, obtain a provider exception in writing, or select suitable alternative hosting before treating this as the final hosting arrangement. No upgrade or payment was made. The current Vercel DPA expressly covers Pro/Enterprise; do not claim that it proves a Hobby processor agreement.

Website analytics is an existing Vercel integration; the owner requested that it remain. Disclosure alone does not establish a PECR exception or processor contract. A free browser opt-out is now prepared on `/privacy`, with analytics still on by default. Check the website's statistics-only use and provider role/terms before declaring privacy approval complete.

## App work before public launch

- Restore Railway backend production operation and apply only reviewed staging changes. No separate running cleanup service or configured cron was visible; do not set cron on the API service as a substitute for a dedicated job.
- Railway DPA is unsigned, confirmed by owner. Its published process requires signing; a company representative must review and sign it. Provider agreements cannot be accepted merely to close this checklist.
- Neon is AWS London, production default/protected, PostgreSQL 17, Launch plan, seven-day recovery history. Verify restored records and erasure handling across both branches and any exports. Seven days is not the lifetime of active records.
- Clerk production instance exists and 2shocks.com is verified; dashboard is awaiting deployment. Verify auth, account identity, notification/email delivery and provider agreements for the company.
- The RevenueCat account inspected has no projects and no live transactions. Configure a project, store apps, entitlements, webhooks and £3.99 monthly products; inspect actual Apple/Google setup and test purchase, renewal, cancellation, restore, refunds and downgrades. Code support alone is not a live billing setup.
- Implement/test account deletion end to end. Current mobile flow starts an email request; the reviewed backend has no public deletion endpoint. Do not delete a real account to test without separate authorisation. Check current store requirements and external deletion-request URL before submission.
- Deploy and verify the daily 90-day raw experience-event purge; inspect failures/backlog. General log, billing and processor retention remains to be confirmed. The approved 12-month support policy is a manual operating obligation, not a configured mailbox deletion rule.
- Complete children's privacy assessment for 16–17-year-old users; ads only for confirmed adults. App-age restrictions and the advertising gate serve different purposes.
- Verify reuse/attribution/refresh rights for every government and catalogue source. Haynes production licensing is no longer part of the plan. Public catalogue access is not by itself evidence of reuse rights.
- Confirm exact shipped SDK collection, manifests and store privacy declarations. Verify location and notification choices, export, independent measurement opt-in and refusal/withdrawal behaviour in native builds.

## AdMob handoff

Live draft verified: “2Shocks — European advertising choices”, two selected apps, Google-only partner, visible Consent / Do not consent / Manage options. Owner decided to retain EEA/UK/Switzerland targeting. The draft is unpublished and lacks app privacy URLs. Automatic ad-partner additions and consent mode are off; legitimate-interest controls are present but not enabled by default.

After the app privacy URL is actually public and reviewed, attach it to both apps. Review/publish UMP separately and test native acceptance/refusal/withdrawal. Verify behaviour outside the targeted regions before any geographic expansion; do not advertise this draft as a consent message shown everywhere. Production ads remain disabled until native release checks pass.

## Later garage service

Prepare separate garage SaaS terms, data roles/DPA, rider sharing, quotes/bookings and Stripe disclosures when that service is ready. An email draft opened on a rider's device is not proof of a sent enquiry, garage response or confirmed booking.

## References

- [Vercel commercial-use rules](https://vercel.com/docs/limits/fair-use-guidelines#commercial-usage)
- [Vercel DPA scope](https://vercel.com/legal/dpa)
- [Railway DPA and signing requirement](https://railway.com/legal/dpa)
- [ICO statistical-purpose exception](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-the-exceptions/)

This checklist separates verified facts, owner policies and implementation work. It does not certify legal compliance or store approval.
