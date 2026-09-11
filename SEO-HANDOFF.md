# 2Shocks search visibility

Audit and changes: 11 September 2026.

## Findings

- `https://2shocks.com/` returns a permanent 308 redirect to `https://www.2shocks.com/`, which returns HTTP 200.
- The previous live canonical and Open Graph URL pointed back to the redirecting apex domain. Its robots.txt and sitemap also used that hostname. The source now consistently uses the existing production destination, `https://www.2shocks.com`.
- Live robots.txt allowed crawling. The fetched home HTML had no noindex directive, and a nonexistent path returned HTTP 404. There was no confirmed blanket indexing block in these checks.
- A public search returned no site pages. This is not an authoritative Google indexing diagnosis. Search Console's URL Inspection and Page indexing reports are needed to establish discovery, crawl status, selected canonical and any exclusion reason.

## Implemented

- Page-specific titles, descriptions, canonical URLs and social metadata on every public route.
- Organization, WebSite, WebPage and prelaunch MobileApplication structured data, with stable linked identifiers and a crawlable brand logo. No invented ratings, downloads, social profiles or available purchase offers.
- Brand and product category stated explicitly near the start of the home page.
- A 1200 × 630 social preview image and PNG favicon fallback.
- A rider-guide index and two original, internally linked guides covering MOT history and maintenance records. The MOT guide links directly to GOV.UK and provides an available official lookup destination while the app remains prelaunch.
- Sitemap with all six canonical pages and editorial modification dates instead of a stale common date. All pages remain statically rendered and readable without running JavaScript.
- Optional `GOOGLE_SITE_VERIFICATION` build environment variable for HTML-tag verification. Domain verification uses the DNS token Google supplies and does not need this variable. Never place a service-account key or private credential here.
- `npm run test:seo` validates exported page metadata, indexing directives, internal destinations, structured data, image existence and sitemap/robots consistency. Run after `npm run build`.

## Google Search Console — owner setup

1. Add the **Domain** property `2shocks.com` at https://search.google.com/search-console. Add only the exact DNS TXT verification value Google provides at the DNS provider; preserve existing website and email records.
2. After verification and deployment, submit `https://www.2shocks.com/sitemap.xml` under Sitemaps.
3. Inspect `https://www.2shocks.com/`. Run **Test live URL**, confirm the page is accessible, then **Request indexing**. Repeat for the two guides if needed. Repeated requests do not make crawling faster.
4. In URL Inspection, compare user-declared and Google-selected canonical. The intended canonical is the www URL. A redirect status on the apex URL is expected.
5. Check Page indexing, Manual actions and Security issues for an actual reported problem. If Google says “Discovered – currently not indexed” or “Crawled – currently not indexed”, record that status; do not assume a robots block.
6. Recheck after Google processes the site. Crawling can take days to weeks, and submitting a URL does not guarantee inclusion. Track impressions, clicks, queries and indexed canonical pages in Search Console.

## Ongoing growth

- Link to the canonical website from real company and social profiles you control, when created. Use consistent brand spelling. Add only verified profile URLs to structured data.
- Seek relevant editorial mentions from motorcycle communities and partners through useful contributions. Avoid purchased ranking links and bulk directory submissions.
- Expand the guides from actual rider questions and original product knowledge. Keep prelaunch claims accurate. Add app-store links and availability only after release.
- Use Search Console queries to refine pages people actually see. Review Core Web Vitals when sufficient field data is available; do not assume a Lighthouse score guarantees rankings.

## References

- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/appearance/site-names
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://www.gov.uk/check-mot-history
