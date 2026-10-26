# Android public release: local website update

26 October 2026. Completed locally; no deployment, store edits, subscriptions, campaigns or spend.

## Result

The homepage leads with “Your motorbike’s service book, on your phone.” Header, hero, Free/Plus cards, closing section, mobile navigation and footer point directly to https://play.google.com/store/apps/details?id=com.twoshocks.app. Official English Google Play badge downloaded from Google’s current Partner Marketing Hub package; artwork remains unchanged, proportionate and surrounded by clear space. No email gate, device detection, App Store download link or TestFlight link.

Android status comes from the user’s verified 26 October console check: production published, 100% rollout, no unpublished changes. The public listing also loaded with the correct app title during validation. iOS stays coming soon; public availability is unverified. UK registration/data scope stays explicit.

Service history, plans, mileage, saved parts, garage sheets, rider-sent enquiries and automatic alerts are represented as Free features for one active motorcycle. Plus adds up to 20 active motorcycles, custom reminders and ad-free use. £3.99/month is identified as a UK reference; store price and renewal terms govern. Available MOT records, variable catalogue coverage, fitment checks, retail-only estimates, account/internet requirements and notification availability remain qualified. Privacy/export/deletion information and support links are accessible. No testimonials, counts, ratings, new app screens or shipped garage-ticket workflow were invented. The broader future garage SaaS direction remains in the marketing strategy.

## Changed files

- Homepage and styling: `app/page.tsx`, `app/home.module.css`, `app/globals.css`.
- Shared navigation/actions/previews: `components/Header.tsx`, `components/Footer.tsx`, `components/StoreBadges.tsx`, `components/HeroScreens.tsx`, `components/PhoneShowcase.tsx`, `data/site.ts`.
- Metadata/social/schema: `app/layout.tsx`, `lib/seo.ts`, `public/brand/social-preview-android.png`, `public/brand/google-play-badge.png`.
- Guides and factual release/support corrections: `data/guides.ts`, `app/guides/page.tsx`, `app/support/page.tsx`, `app/privacy/page.tsx`, `app/terms/page.tsx`, `app/app-privacy/page.tsx`, `app/app-terms/page.tsx`.
- Current marketing release statements: `MARKETING-STRATEGY.md`; existing commercial strategy and prior local edits retained.
- Approved visual story: `public/screens/store-2026-10-22/` (seven unchanged exported panels retained as source material and four unchanged iPhone source captures). Asset checksums, sources and limitations: [release asset record](RELEASE-ASSETS-2026-10-26.json). Old source assets retained; old plan-limit screens no longer rendered.
- Checks: `components/site.test.tsx`, `e2e/site.spec.ts`, `e2e/legal.spec.ts`, `playwright.config.ts`, `scripts/check-seo.mjs`. Added Android browser profile; corrected stale pre-existing deletion/date expectations. SEO checks now validate image destinations, internal fragments and Android availability/schema contracts.
- This report and [desktop](release-review-2026-10-26/desktop.png)/[mobile](release-review-2026-10-26/mobile.png) screenshots.

Pre-existing edits to `app/delete-account/page.tsx` and the strategy archive remain untouched. Existing legal changes were retained, with only factual consistency edits layered on top. Next.js manages `next-env.d.ts`, which was already locally modified.

## Validation

- Production static build, lint, TypeScript, five unit tests and exported-HTML SEO checks pass.
- Browser suite after the hero revision: 55 applicable tests across desktop Chromium, iPhone-sized Chromium and Android-sized Chromium; two device-specific skips. The full pass identified a heading-whitespace issue, which was fixed; all nine targeted release/hero/responsive cases then passed. Collapsed navigation intentionally hides its download link until opened.
- Automated accessibility checks cover homepage, app/website policies, support, deletion and guides, including contrast. Keyboard checks cover skip link, tabs, disclosures, mobile navigation and focus. Reduced-motion, static hero composition, images, all internal links and internal fragments checked.
- Layouts checked at 320, 390, 768, 1440 and 1920 CSS pixels; no horizontal overflow. Desktop/mobile screenshot inspection covered hero, gallery, feature panels, plans and closing section. Preview images retain their ratios; feature tabs retain full-size links for reading detailed screen text. The hero is visual artwork rather than a screen-by-screen tutorial.
- The actual hero action opened the real Google Play listing in desktop, iPhone and Android browser profiles. Browser emulation does not certify physical devices or native Safari; no claim of a device-lab test.

## Remaining decisions / limits

No substantive legal terms were changed. Existing policy questions about provider agreements, transfer arrangements and retention schedules remain unresolved; this release-copy update does not certify them. Verify iOS public availability separately before enabling its download action. Approved Android promotional panels remain iOS-derived development/demo imagery, visibly disclosed; native Android recaptures would be a separate asset task.

The design tool reported a pre-existing stale `.impeccable/design.json` sidecar; it can be refreshed separately while preserving `DESIGN.md`. Detector advisories were predominantly incumbent CSS/documentation differences; the established brand was retained.

## Hero art revision — 26 October

Replaced the rotating seven-panel store gallery with one responsive composition of three actual iPhone screen captures: MOT history, motorcycle/service plan and private service history. Removed store-panel headings, captions, navigation dots, full-size links and technical provenance commentary from the hero. Provenance remains in source documentation and image alternative text. A diagonal plate-yellow field unifies the phones, with larger left-aligned copy beside them on desktop and a centered composition below the copy on smaller screens. Google Play and iOS availability remain accurate.

The artwork is made from responsive HTML/CSS and unchanged source screenshots, so it stays sharp and adapts to screen width instead of stretching one flattened bitmap. No generative image edits or invented app screens were needed. Design documentation and hero tests were updated to describe this composition. Final screenshots linked above show the revision.

## Phone clarity refinement — 26 October

Kept the approved three-phone composition and original lossless 1206 × 2622 screenshots. Enlarged the foreground phone from 284 to 320 CSS pixels on desktop and from 55% to 62% of the artwork on mobile. Its screen now sits upright to avoid rotation resampling of small text. At intermediate widths, explicit device dimensions replace scaling the entire artwork layer. Side phones keep their angles. All three phones are keyboard-accessible links to their original full-resolution captures, opened in a new tab; no caption was added.

Retina browser inspection confirmed that source pixels exceed display pixels at 2× desktop and 3× iPhone scales, with no page overflow. Build, lint, TypeScript and exported HTML/link checks pass. The hero test checks the untransformed foreground phone, full-resolution image supply and keyboard opening of the original capture.

## Mobile swipe refinement — 26 October

Mobile phone previews now swipe through all three screens while keeping the same composition, background and original PNGs. Desktop remains static. Removed the fixed mobile artwork heights that could clip the foreground phone at wider mobile widths. The stage now follows the displayed phone’s aspect ratio and caps its width to fit shorter screens. Vertical page scrolling, original-image links, keyboard selection and reduced motion are supported. Swipe gestures suppress accidental image opening. Touch tests cover both directions and wrapping, complete selected-phone visibility, shorter/wider viewports, vertical scrolling and keyboard opening of the full-resolution image.

## Shorter mobile page — 26 October

At widths up to 600px, replaced the three-step illustrated walkthrough with a short introduction and the second screenshot tour/source-data facts with three expandable feature summaries. Hid the separate parts-estimate and parts-matching sections, large garage-plan section and rider-guide cards. Shortened the Free card to four benefit groups and tightened section spacing. All desktop sections, including the long Free list, remain intact. Guides remain linked from the footer, and download actions, Free/Plus limits, FAQs, support and legal links remain accessible. Qualification details remain available within the expandable mobile features and FAQs.

Measured at 390 × 900 CSS pixels with the default collapsed state: document height reduced from 14,453px to 6,622px (about 54%). At 1440px, height remains 10,216px before and after. Responsive tests check hidden/visible sections, keyboard disclosure operation, downloads, guide access through the footer and the shortened mobile path.
