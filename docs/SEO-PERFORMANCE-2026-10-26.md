# Mobile performance evidence — 26 October 2026

## Controlled local comparison

Production static exports were served from the same local HTTP server. The browser was Chromium with the Playwright Pixel 7 profile, an empty cache, 1.6 Mbps download, 0.75 Mbps upload, 150 ms artificial latency and 4× CPU slowdown. External requests were aborted so the test could not send analytics. Each measurement waited for the initial network activity to settle and fonts to load. There was no scrolling or interaction.

| Lab observation | Before | After |
| --- | --- | --- |
| Largest contentful paint | 7.564 s | 1.492 s |
| Observed layout-shift session score | 0.00305 | 0.00353 |
| LCP element | IMG | P |

These are individual local lab observations, not field Core Web Vitals, a Lighthouse score, an INP measurement or a ranking forecast. The simple local host does not reproduce Vercel CDN caching, HTTP compression or real devices. The opening copy also changed: the largest visible element switched from an image to a paragraph, so do not attribute the entire LCP difference to image compression. The displayed phones retain their original dimensions and proportions. Rendering and layout stability passed separate browser checks.

The before capture used the prior production export; the after capture used the new export. Raw observations: [before](seo-evidence/2026-10-26-mobile-before.json), [after](seo-evidence/2026-10-26-mobile-after.json). Reproduce after a production build by serving `out/` and running `node scripts/measure-mobile.mjs http://127.0.0.1:3002/` against that server. The script requires a served page, not a development build, for a comparable result.

## Image change

All original approved PNGs remain untouched and are still the destinations of full-resolution preview links. The display copies use lossless WebP at the same 1206 × 2622 resolution. The generator checks every decoded pixel against its source before writing a file. The manifest records source/output SHA-256 hashes and original provenance. PNG fallbacks remain available through `picture`.

| Original screenshot | Original PNG bytes | Display WebP bytes |
| --- | --- | --- |
| 01-service-history-capture.png | 255089 | 57088 |
| 02-mot-history-capture.png | 248586 | 55644 |
| 03-service-plan-capture.png | 924483 | 326404 |
| 07-plus-garage-capture.png | 270716 | 68310 |

The three hero captures total **1,428,158 → 439,136 bytes**, a **69.3% reduction** for browsers supporting WebP. Only the foreground screenshot is eager/high-priority; the side screenshots are lazy/low-priority. The detailed tour uses the same display copies. No carousel, original image link, demo label or accessibility behaviour was removed.

Regenerate with `node scripts/prepare-web-screens.mjs`; it uses Next’s existing Sharp dependency and does not change source screenshots. Do not edit approved source captures to obtain a smaller payload.

## Live follow-up

After deployment, measure the actual canonical homepage using PageSpeed Insights and inspect Search Console field data when available. Targets are LCP ≤2.5 s, CLS ≤0.1 and INP ≤200 ms at the field 75th percentile. Current Search Console has insufficient field data, and this local check cannot establish an INP result. See [Google’s Core Web Vitals guidance](https://developers.google.com/search/docs/appearance/core-web-vitals).
